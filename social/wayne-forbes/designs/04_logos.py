"""Step 5.4: logo variants from the supplied artwork only (alpha extraction + flat recolour)."""
import numpy as np, cv2
from PIL import Image

def save(alpha, rgb, name):
    h, w = alpha.shape
    im = np.zeros((h, w, 4), np.uint8); im[..., :3] = rgb; im[..., 3] = (alpha * 255).round()
    Image.fromarray(im, 'RGBA').save(f'assets/{name}.png', optimize=True)

# Forbes: black ink on a baked #FFFFFF/#E6E6E6 checkerboard
L = np.asarray(Image.open('input/forbes_logo.png').convert('L')).astype(np.float32)
a = np.clip((230 - L) / 230, 0, 1)[0:237, 0:900]
# 4x supersample, then a soft threshold: crisp edges at any display size we use, same shapes
up = cv2.resize(a, None, fx=4, fy=4, interpolation=cv2.INTER_CUBIC)
up = cv2.GaussianBlur(up, (0, 0), 1.2)
up = np.clip((up - 0.5) / 0.22 + 0.5, 0, 1)
ys, xs = np.where(up > 0.5); up = up[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
# fidelity check against the source at native size
back = cv2.resize(up, (xs.max() // 4 - xs.min() // 4 + 1, ys.max() // 4 - ys.min() // 4 + 1), interpolation=cv2.INTER_AREA)
ref = a[ys.min() // 4:ys.min() // 4 + back.shape[0], xs.min() // 4:xs.min() // 4 + back.shape[1]]
inter = np.minimum(back > 0.5, ref > 0.5).sum(); union = np.maximum(back > 0.5, ref > 0.5).sum()
print('forbes', up.shape[::-1], 'aspect', round(up.shape[1] / up.shape[0], 4), 'IoU vs source', round(inter / union, 4))
for name, c in (('forbes_black', (0, 0, 0)), ('forbes_white', (255, 255, 255)), ('forbes_gold', (216, 181, 106))):
    save(up, c, name)

# DNA: lime on baked #0E0E0E
im = np.asarray(Image.open('input/dna_logo.webp').convert('RGB')).astype(np.float32)
lum = im @ np.array([0.299, 0.587, 0.114], np.float32)
lime_l = np.array([203, 255, 0]) @ np.array([0.299, 0.587, 0.114])
A = np.clip((lum - 14 - 6) / (lime_l - 14 - 12), 0, 1)
for lock, (y0, y1) in (('dna_full', (271, 672)), ('dna_mark', (271, 592))):
    al = A[y0:y1, 562:1438]
    print(lock, al.shape[::-1], 'aspect', round(al.shape[1] / al.shape[0], 4))
    for col, c in (('lime', (203, 255, 0)), ('black', (12, 13, 10)), ('white', (243, 244, 238))):
        save(al, c, f'{lock}_{col}')

# check sheet over black, white, cream, navy
bgs = [(12, 13, 10), (255, 255, 255), (238, 234, 224), (18, 42, 107)]
names = ['forbes_white', 'forbes_black', 'forbes_black', 'forbes_white', 'dna_full_lime', 'dna_full_black', 'dna_full_black', 'dna_full_white',
         'dna_mark_lime', 'dna_mark_black', 'dna_mark_black', 'dna_mark_white']
sheet = Image.new('RGB', (4 * 520, 3 * 300), (0, 0, 0))
for i, n in enumerate(names):
    r, c = divmod(i, 4)
    tile = Image.new('RGB', (520, 300), bgs[c])
    lg = Image.open(f'assets/{n}.png'); s = min(420 / lg.width, 200 / lg.height)
    lg = lg.resize((round(lg.width * s), round(lg.height * s)), Image.LANCZOS)
    tile.paste(lg, ((520 - lg.width) // 2, (300 - lg.height) // 2), lg)
    sheet.paste(tile, (c * 520, r * 300))
sheet.save('outputs/check_logos.png')
