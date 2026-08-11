from PIL import Image
from collections import Counter
img = Image.open('public/MetaToppers-bg.png').convert('RGBA')
img = img.resize((200, 200))
pixels = [p for p in img.getdata() if p[3] > 200]
colors = Counter()
for r, g, b, a in pixels:
    qr = (r // 32) * 32
    qg = (g // 32) * 32
    qb = (b // 32) * 32
    colors[(qr, qg, qb)] += 1
for color, count in colors.most_common(12):
    print(color, count)
