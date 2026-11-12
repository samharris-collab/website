"""Gate A sheet: the cutout on black, white and neon, plus 3x edge crops."""
from PIL import Image, ImageDraw
im = Image.open('assets/wayne_colour.png')
bgs = [(0, 0, 0), (255, 255, 255), (203, 255, 0)]
h = 1100; w = round(im.width * h / im.height)
sheet = Image.new('RGB', (3 * w + 80, h + 40), (40, 40, 40))
for i, bg in enumerate(bgs):
    c = Image.new('RGB', im.size, bg); c.paste(im, (0, 0), im)
    sheet.paste(c.resize((w, h), Image.LANCZOS), (20 + i * (w + 20), 20))
sheet.save('outputs/check_cutout_3bg.png')
# zoom crops (2x asset coords): hair, left shoulder, thumb, right sleeve
crops = {'hair': (560, 0, 1160, 400), 'shoulderL': (120, 820, 520, 1220), 'thumb': (250, 1380, 700, 2130), 'sleeveR': (1480, 1500, 1890, 2100)}
for name, box in crops.items():
    tiles = []
    for bg in bgs:
        c = Image.new('RGB', im.size, bg); c.paste(im, (0, 0), im)
        t = c.crop(box); tiles.append(t.resize((int(t.width * 1.5), int(t.height * 1.5)), Image.LANCZOS))
    s = Image.new('RGB', (sum(t.width for t in tiles) + 20, tiles[0].height), (40, 40, 40))
    x = 0
    for t in tiles: s.paste(t, (x, 0)); x += t.width + 10
    s.save(f'work/zoom_{name}.png')
# the three versions side by side
vs = [Image.open(f'assets/{n}.png') for n in ('wayne_colour', 'wayne_bw_tie', 'wayne_bw')]
s = Image.new('RGB', (3 * w + 80, h + 40), (238, 234, 224))
for i, v in enumerate(vs):
    s.paste(v.resize((w, h), Image.LANCZOS), (20 + i * (w + 20), 20), v.resize((w, h), Image.LANCZOS))
s.save('outputs/check_wayne_versions.png')
