"""Steps 5.1-5.3: refine the mask, defringe, grade, export the three Wayne versions + anchors."""
import json, numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as ndi

src = np.asarray(Image.open('input/wayne_flags.jpg').convert('RGB')).astype(np.float32) / 255
a = np.asarray(Image.open('work/mask_birefnet-general.png').convert('L')).astype(np.float32) / 255
H, W = a.shape

# keep the largest connected component
lab, n = ndi.label(a > 0.5)
big = np.argmax(ndi.sum(a > 0.5, lab, range(1, n + 1))) + 1
a = a * (ndi.binary_dilation(lab == big, iterations=6))

# pull the edge in ~1.5px and feather ~1px (kills fringe without a helmet edge)
a = cv2.erode(a, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3)))
a = cv2.GaussianBlur(a, (0, 0), 1.0)
a = np.clip((a - 0.28) / 0.52, 0, 1)

# never show the papers / left hand: crop below the left cuff
CROP_Y = 1760
a[CROP_Y:] = 0

# defringe: edge pixels take their colour from the nearest safely-interior pixel
interior = cv2.erode((a > 0.98).astype(np.uint8), cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))) > 0
_, (iy, ix) = ndi.distance_transform_edt(~interior, return_indices=True)
near = src[iy, ix]
edge_w = np.clip((0.995 - a) / 0.25, 0, 1)[..., None]          # 1 on soft edge, 0 inside
band = (~interior)[..., None] * 1.0
w = np.maximum(edge_w, 0.65 * band)                               # 3px rim is mostly replaced too
rgb = src * (1 - w) + near * w
# blue despill on the head (hair against the blue curtain): blue may not exceed the red/green mean
head = np.zeros((H, W), np.float32); head[:860] = 1; head = cv2.GaussianBlur(head, (0, 0), 12)
lim = (rgb[..., 0] + rgb[..., 1]) / 2
rgb[..., 2] = np.where(rgb[..., 2] > lim, rgb[..., 2] * (1 - head) + lim * head, rgb[..., 2])

# grade: flash-orange skin -> reduce saturation ~20% in skin hues only, slight contrast
hsv = cv2.cvtColor(rgb.astype(np.float32), cv2.COLOR_RGB2HSV)     # H 0-360, S,V 0-1
h, s, v = hsv[..., 0], hsv[..., 1], hsv[..., 2]
skin = ((h < 42) | (h > 345)) & (s > 0.18) & (v > 0.30)
# tie polygon (hand-marked on the source) so the tie is never treated as skin
tie_poly = np.array([[735, 892], [812, 892], [850, 1150], [842, 1300], [778, 1392], [716, 1300], [712, 1100]], np.int32)
tie_box = np.zeros((H, W), np.uint8); cv2.fillPoly(tie_box, [tie_poly], 1)
skin &= tie_box == 0
skin_w = cv2.GaussianBlur(skin.astype(np.float32), (0, 0), 2.5)
hsv[..., 1] = s * (1 - 0.22 * skin_w)
hsv[..., 0] = np.where(skin_w > 0.2, (h + 3 * skin_w) % 360, h)   # nudge orange a touch toward neutral
col = cv2.cvtColor(hsv, cv2.COLOR_HSV2RGB)
col = np.clip((col - 0.5) * 1.06 + 0.5, 0, 1)

# tie mask = hand polygon AND saturated, not dark
tie = (tie_box == 1) & (s > 0.30) & (v > 0.16)
tie = cv2.morphologyEx(tie.astype(np.uint8), cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9)))
lab, n = ndi.label(tie); tie = lab == (np.argmax(ndi.sum(tie, lab, range(1, n + 1))) + 1)
tie = ndi.binary_fill_holes(tie)
tie_w = cv2.GaussianBlur(tie.astype(np.float32), (0, 0), 1.2)[..., None]

# black and white: channel mix that keeps skin luminous and the suit stripe alive
g = col[..., 0] * 0.26 + col[..., 1] * 0.56 + col[..., 2] * 0.18      # less red weight: skin keeps tone
# tone curve: deeper shadows, but highlights roll off instead of clipping (the flash-lit forehead and hand)
g = np.interp(g, [0, 0.10, 0.30, 0.55, 0.72, 0.86, 1.0], [0, 0.055, 0.25, 0.555, 0.735, 0.845, 0.955])
g = g + (cv2.GaussianBlur(g, (0, 0), 3) - cv2.GaussianBlur(g, (0, 0), 28)) * 0.28   # local contrast, no halo
g = np.clip(g + 0.035 * (1 - g) ** 6, 0, 0.975)                       # suit stripe stays out of pure black
bw = np.repeat(g[..., None], 3, 2)
tie_col = np.clip((col - 0.5) * 1.05 + 0.5, 0, 1)
bw_tie = bw * (1 - tie_w) + tie_col * tie_w

ys, xs = np.where(a > 0.5); x0, y0, x1, y1 = xs.min(), ys.min(), xs.max(), ys.max()
PAD = 12
box = (int(max(x0 - PAD, 0)), int(max(y0 - PAD, 0)), int(min(x1 + PAD, W)), CROP_Y)

def export(arr, name):
    im = Image.fromarray((np.dstack([arr, a[..., None]]) * 255).round().astype(np.uint8), 'RGBA').crop(box)
    im.save(f'work/{name}_1x.png')
    up = im.resize((im.width * 2, im.height * 2), Image.LANCZOS)
    r, g_, b, al = up.split()
    sharp = Image.merge('RGB', (r, g_, b)).filter(ImageFilter.UnsharpMask(radius=1.6, percent=55, threshold=2))
    out = Image.merge('RGBA', (*sharp.split(), al))
    out.save(f'assets/{name}.png', optimize=True)
    return out

for arr, name in ((col, 'wayne_colour'), (bw_tie, 'wayne_bw_tie'), (bw, 'wayne_bw')):
    o = export(arr, name)
print('cutout size (2x):', o.size, 'crop box in source:', box)

# anchors, in cutout-1x coordinates (source minus crop offset)
ox, oy = box[0], box[1]
ty, tx = np.where(tie)
knot_y = ty.min() + 18
knot_x = tx[(ty >= ty.min()) & (ty < ty.min() + 40)].mean()
sh_y = knot_y + 70
row = np.where(a[int(sh_y)] > 0.5)[0]
# face centre: skin pixels above the knot
fy, fx = np.where(skin & (np.arange(H)[:, None] < ty.min() - 20) & (a > 0.9))
anch = {
    'cutout_1x_size': [box[2] - box[0], box[3] - box[1]], 'note': 'coordinates are in 1x cutout pixels; assets/*.png are 2x',
    'tie_knot': [float(knot_x - ox), float(knot_y - oy)],
    'face_centre_x': float(np.median(fx) - ox),
    'head_top_y': float(y0 - oy),
    'shoulder_row_y': float(sh_y - oy),
    'shoulder_left_x': float(row.min() - ox), 'shoulder_right_x': float(row.max() - ox),
    'alpha_bbox': [int(x0 - ox), int(y0 - oy), int(x1 - ox), int(CROP_Y - oy)],
    # hand-checked rectangle around the thumb, fist and cuff (source coords -> cutout coords)
    'thumb_box': [500 - ox, 1160 - oy, 645 - ox, 1490 - oy],
}
json.dump(anch, open('assets/anchors.json', 'w'), indent=2)
print(json.dumps(anch))
Image.fromarray((tie * 255).astype(np.uint8)).save('work/tie_mask.png')
