"""Contact sheet of all five, plus 1080x1350 JPGs for direct upload and 400px phone previews."""
from PIL import Image
names = ['1_Arch', '2_Neon', '3_Patriot', '4_BlackGold', '5_Headline']
ims = [Image.open(f'outputs/Wayne_Forbes_{n}.png').convert('RGB') for n in names]
for n, im in zip(names, ims):
    assert im.size == (2160, 2700), (n, im.size)
    im.resize((1080, 1350), Image.LANCZOS).save(f'outputs/Wayne_Forbes_{n}_1080.jpg', quality=92, optimize=True)
    im.resize((400, 500), Image.LANCZOS).save(f'work/phone_{n}.png')
tw, th, g = 640, 800, 36
sheet = Image.new('RGB', (5 * tw + 6 * g, th + 2 * g), (28, 28, 28))
for i, im in enumerate(ims):
    sheet.paste(im.resize((tw, th), Image.LANCZOS), (g + i * (tw + g), g))
sheet.save('outputs/Wayne_Forbes_contact_sheet.png')
ph = Image.new('RGB', (5 * 400 + 6 * 20, 540), (28, 28, 28))
for i, n in enumerate(names):
    ph.paste(Image.open(f'work/phone_{n}.png'), (20 + i * 420, 20))
ph.save('work/phone_strip.png')
print('ok')
