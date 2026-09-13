# -*- coding: utf-8 -*-
# لغت‌یار — اسکریپت ساخت نسخه تک‌فایلی (production)
# اجرا:  python build.py    →    خروجی: dist/index.html
# این فایل نهایی همان چیزی است که به بات تلگرام یا APK می‌دهی.
import io, os

ROOT = os.path.dirname(os.path.abspath(__file__))

index = io.open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
css = io.open(os.path.join(ROOT, 'css', 'style.css'), encoding='utf-8').read()
js = io.open(os.path.join(ROOT, 'js', 'app.js'), encoding='utf-8').read()

LINK = '<link rel="stylesheet" href="css/style.css">'
SRC = '<script src="js/app.js"></script>'

assert LINK in index, 'link tag not found in index.html'
assert SRC in index, 'script src tag not found in index.html'

out = index.replace(LINK, '<style>\n' + css.rstrip('\n') + '\n</style>', 1)
out = out.replace(SRC, '<script>\n' + js.rstrip('\n') + '\n</script>', 1)

assert '\ufffd' not in out, 'corrupted character found'
os.makedirs(os.path.join(ROOT, 'dist'), exist_ok=True)
dst = os.path.join(ROOT, 'dist', 'index.html')
io.open(dst, 'w', encoding='utf-8').write(out)
print('OK -> dist/index.html  (', len(out) // 1024, 'KB )')
