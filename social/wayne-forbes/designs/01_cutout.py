"""Step 5.1: person mask from the hero photo. Saves raw masks to work/."""
import sys, numpy as np
from PIL import Image
from rembg import remove, new_session
src = Image.open('input/wayne_flags.jpg').convert('RGB')
sess = new_session('isnet-general-use')
m1 = remove(src, session=sess, only_mask=True)
m1.save('work/mask_isnet.png')
m2 = remove(src, session=sess, only_mask=True, alpha_matting=True,
            alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=15,
            alpha_matting_erode_size=8)
m2.save('work/mask_isnet_matting.png')
for n, m in (('isnet', m1), ('matting', m2)):
    a = np.asarray(m); print(n, a.shape, (a > 128).mean().round(3))
