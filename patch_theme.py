import os, shutil, datetime, io
ROOT = os.path.dirname(os.path.abspath(__file__))
css = os.path.join(ROOT, "css", "style.css")
js  = os.path.join(ROOT, "js", "app.js")
ts = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
bdir = os.path.join(ROOT, "backups"); os.makedirs(bdir, exist_ok=True)
for p in (css, js):
    shutil.copy2(p, os.path.join(bdir, os.path.basename(p) + "." + ts + ".bak"))
    print("backup:", os.path.basename(p))

HEX = {
"#7C83FD":"#0E7A5C", "#7c83fd":"#0E7A5C",
"#5B62D6":"#013E37", "#5b62d6":"#013E37",
"#EEEDFF":"#E1F3EA", "#EFE9FF":"#E1F3EA", "#F0E5FF":"#FFF6D6", "#E1F0FF":"#E1F3EA",
"#FFF6ED":"#FFF6D6", "#FFE8D6":"#FFEFB3", "#F5ECDF":"#F6EDC8",
"#E8DCC8":"#E3D8A8", "#EFE6DB":"#EDE4C4", "#8A8177":"#85806A",
"#6f76f2":"#0E7A5C", "#33305f":"#013E37", "#6b6890":"#5F6F64", "#9a97b8":"#8A9488",
}
RGBA_CSS = {
"rgba(124, 131, 253":"rgba(14, 122, 92",
"rgba(238, 237, 255":"rgba(225, 243, 234",
"rgba(24, 18, 48":"rgba(8, 24, 18",
"rgba(40, 30, 90":"rgba(1, 62, 55",
"rgba(255, 158, 199":"rgba(255, 184, 107",
}
def apply(path, maps):
    t = io.open(path, encoding="utf-8").read()
    n = 0
    for m in maps:
        for k, v in m.items():
            c = t.count(k)
            if c:
                t = t.replace(k, v); n += c; print("replaced", c, k)
            else:
                print("not found:", k)
    io.open(path, "w", encoding="utf-8").write(t)
    print(os.path.basename(path), "replacements:", n)

apply(css, [HEX, RGBA_CSS])
apply(js, [HEX])
print("DONE")