"""Step 5.1 second opinions: isnet dropped the thumbs-up hand, so compare other models."""
import sys, numpy as np
from PIL import Image
from rembg import remove, new_session
src = Image.open('input/wayne_flags.jpg').convert('RGB')
for name in sys.argv[1:]:
    try:
        m = remove(src, session=new_session(name), only_mask=True)
        m.save(f'work/mask_{name}.png')
        bg = Image.new('RGB', src.size, (255, 0, 255))
        Image.composite(src, bg, m).resize((750, 1000)).save(f'work/check_{name}_magenta.jpg', quality=88)
        print(name, 'ok')
    except Exception as e:
        print(name, 'FAILED', repr(e)[:200])
