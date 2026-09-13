# -*- coding: utf-8 -*-
# لغت‌یار — فشرده‌سازی فونت Nunito (v2.16.3)
# اجرا:  python compress_font.py
import io, os, re, sys, base64, subprocess

ROOT = os.path.dirname(os.path.abspath(__file__))
CSS = os.path.join(ROOT, 'css', 'style.css')
HTML = os.path.join(ROOT, 'index.html')
WORK = os.path.join(ROOT, 'fontwork')

css = io.open(CSS, encoding='utf-8').read()

# 1) backup
io.open(os.path.join(ROOT, 'css', 'style-backup.css'), 'w', encoding='utf-8').write(css)
io.open(os.path.join(ROOT, 'index-backup.html'), 'w', encoding='utf-8').write(io.open(HTML, encoding='utf-8').read())
print('backup done')

# 2) find Nunito blocks
blocks = re.findall(r'(@font-face \{\n    font-family:"Nunito";\n    src:url\(data:font/ttf;base64,([A-Za-z0-9+/=]+)\)[^;]*;\n[^}]*\})', css)
if len(blocks) < 3:
    raise SystemExit('Nunito blocks not found (' + str(len(blocks)) + ')')
print('found', len(blocks), 'Nunito blocks')

os.makedirs(WORK, exist_ok=True)
total_old = 0
total_new = 0
new_css = css

for i, (block, b64) in enumerate(blocks):
    raw = base64.b64decode(b64)
    total_old += len(raw)
    src = os.path.join(WORK, 'nunito_%d.ttf' % i)
    dst = os.path.join(WORK, 'nunito_%d_sub.ttf' % i)
    io.open(src, 'wb').write(raw)
    r = subprocess.run([sys.executable, '-m', 'fontTools.subset', src,
                        '--output-file=' + dst, '--unicodes=U+0020-007E'],
                       capture_output=True, text=True)
    if r.returncode != 0:
        raise SystemExit('subset failed:\n' + r.stderr[-400:])
    sub = io.open(dst, 'rb').read()
    total_new += len(sub)
    new_css = new_css.replace(block, block.replace(b64, base64.b64encode(sub).decode('ascii')), 1)
    w = re.search(r'font-weight:\s*(\d+)', block)
    print('weight %s: %dKB -> %dKB' % (w.group(1) if w else '?', len(raw)//1024, len(sub)//1024))

# 3) version bump (style.css)
old_c = 'Idioms world (v2.16.2)'
assert old_c in new_css, 'version comment not found'
new_css = new_css.replace(old_c, 'Idioms world (v2.16.3)')
assert '\ufffd' not in new_css
io.open(CSS, 'w', encoding='utf-8').write(new_css)

# 4) version bump (index.html)
html = io.open(HTML, encoding='utf-8').read()
for old, new in [('<div class="version-badge">v2.16.2</div>', '<div class="version-badge">v2.16.3</div>'),
                 ('id="appVersionTag">v2.16.2</span>', 'id="appVersionTag">v2.16.3</span>')]:
    assert old in html, 'missing anchor: ' + old
    html = html.replace(old, new)
io.open(HTML, 'w', encoding='utf-8').write(html)

print('TOTAL: %dKB -> %dKB (saved %dKB)' % (total_old//1024, total_new//1024, (total_old-total_new)//1024))
print('DONE -> v2.16.3')
