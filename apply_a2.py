# -*- coding: utf-8 -*-
# لغت‌یار — ساخت سطح A2 (v2.17.0)
# اجرا:  python apply_a2.py
import io, os

ROOT = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(ROOT, 'index.html')
CSS = os.path.join(ROOT, 'css', 'style.css')
JS = os.path.join(ROOT, 'js', 'app.js')

html = io.open(HTML, encoding='utf-8').read()
css = io.open(CSS, encoding='utf-8').read()
js = io.open(JS, encoding='utf-8').read()

io.open(os.path.join(ROOT, 'a2-backup-index.html'), 'w', encoding='utf-8').write(html)
io.open(os.path.join(ROOT, 'css', 'a2-backup-style.css'), 'w', encoding='utf-8').write(css)
io.open(os.path.join(ROOT, 'js', 'a2-backup-app.js'), 'w', encoding='utf-8').write(js)
print('backup done')

# ==================== JS edits ====================

# 1) A2 data
old = '  var currentCategoryKey = "everyday";'
assert old in js, 'anchor currentCategoryKey'
a2_data = '''  CATEGORIES.a2everyday = { name:"روزمره (A2)", words: [
    {word:"appointment", meaning:"قرار ملاقات، نوبت", en:"I have a doctor's appointment today."},
    {word:"borrow", meaning:"قرض گرفتن", en:"Can I borrow your pen?"},
    {word:"decide", meaning:"تصمیم گرفتن", en:"We decided to stay home."},
    {word:"neighborhood", meaning:"محله", en:"Our neighborhood is very quiet."},
    {word:"purse", meaning:"کیف دستی زنانه", en:"She keeps her keys in her purse."}
  ]};
  CATEGORIES.a2travel = { name:"سفر (A2)", words: [
    {word:"flight", meaning:"پرواز", en:"Our flight leaves at eight."},
    {word:"luggage", meaning:"چمدان، بار مسافر", en:"My luggage is heavy."},
    {word:"souvenir", meaning:"سوغاتی، یادگاری", en:"I bought a souvenir for my mother."},
    {word:"passenger", meaning:"مسافر", en:"The passengers are waiting at the gate."},
    {word:"abroad", meaning:"خارج از کشور", en:"She wants to study abroad."}
  ]};
  CATEGORIES.a2food = { name:"غذا و رستوران (A2)", words: [
    {word:"recipe", meaning:"دستور پخت", en:"This recipe is my grandmother's."},
    {word:"dessert", meaning:"دسر", en:"Ice cream is my favorite dessert."},
    {word:"bill", meaning:"صورتحساب", en:"Can we have the bill, please?"},
    {word:"taste", meaning:"مزه، چشیدن", en:"This soup tastes great."},
    {word:"fresh", meaning:"تازه", en:"I buy fresh bread every morning."}
  ]};
  CATEGORIES.a2work = { name:"کار و اداره (A2)", words: [
    {word:"salary", meaning:"حقوق، دستمزد", en:"He gets his salary every month."},
    {word:"meeting", meaning:"جلسه", en:"The meeting starts at ten."},
    {word:"manager", meaning:"مدیر", en:"She is the new manager."},
    {word:"interview", meaning:"مصاحبه", en:"I have a job interview tomorrow."},
    {word:"deadline", meaning:"ضرب‌الاجل، مهلت", en:"We must finish before the deadline."}
  ]};
''' + old
js = js.replace(old, a2_data, 1)
print('A2 data added')

# 2) quiz stays A1-only
old = '''  function buildQuiz(){
    var all = [];
    for (var cat in CATEGORIES){
      if (cat.indexOf("__") === 0) continue;'''
assert old in js, 'anchor buildQuiz'
js = js.replace(old, old + '\n      if (cat.indexOf("a2") === 0) continue;', 1)
print('quiz filter added')

# 3) A2 tile progress
old = '    var subMap = { idiomEveryday: "idiomMetaEveryday", idiomFeelings: "idiomMetaFeelings", idiomEffort: "idiomMetaEffort", idiomBehavior: "idiomMetaBehavior" };'
assert old in js, 'anchor subMap'
new = '''    var a2Map = { a2everyday: "a2MetaEveryday", a2travel: "a2MetaTravel", a2food: "a2MetaFood", a2work: "a2MetaWork" };
    for (var akey in a2Map){
      var ael = document.getElementById(a2Map[akey]);
      if (ael && CATEGORIES[akey]){
        var atotal = CATEGORIES[akey].words.length;
        var apct = Math.round(knownCount(akey) / atotal * 100);
        ael.textContent = atotal + " لغت • " + toPersianDigits(apct) + "٪ بلد";
      }
    }
''' + old
js = js.replace(old, new, 1)
print('A2 tile progress wired')

# 4) showScreen hook
old = '    if (name === "category"){ updateTileProgress(); updateReviewCard(); }'
assert old in js, 'anchor showScreen hook'
js = js.replace(old, old + '\n    if (name === "a2"){ updateTileProgress(); }', 1)
print('showScreen a2 hook')

# 5) screenA2 var
old = '  var screenQuiz = document.getElementById("screenQuiz");'
assert old in js, 'anchor screenQuiz var'
js = js.replace(old, old + '\n  var screenA2 = document.getElementById("screenA2");', 1)
print('screenA2 var')

# 6) showScreen remove/add
old = '    screenQuiz.classList.remove("active");'
assert old in js, 'anchor remove'
js = js.replace(old, old + '\n    screenA2.classList.remove("active");', 1)
old = '    if (name === "quiz") screenQuiz.classList.add("active");'
assert old in js, 'anchor add'
js = js.replace(old, old + '\n    if (name === "a2") screenA2.classList.add("active");', 1)
print('showScreen remove/add')

# 7) nav mapping
old = '    var navT = (name === "idioms") ? "category" : name;'
assert old in js, 'anchor navT'
js = js.replace(old, '    var navT = (name === "idioms" || name === "a2") ? "category" : name;', 1)
print('navT mapping')

# 8) A2 tile listeners
old = '  categoryWorkBtn.addEventListener("click", function(){ selectCategory("work"); });'
assert old in js, 'anchor categoryWorkBtn'
new = old + '''
  document.getElementById("categoryA2Everyday").addEventListener("click", function(){ selectCategory("a2everyday"); });
  document.getElementById("categoryA2Travel").addEventListener("click", function(){ selectCategory("a2travel"); });
  document.getElementById("categoryA2Food").addEventListener("click", function(){ selectCategory("a2food"); });
  document.getElementById("categoryA2Work").addEventListener("click", function(){ selectCategory("a2work"); });'''
js = js.replace(old, new, 1)
print('A2 tile listeners')

# 9) A2 banner listener
old = '  document.getElementById("categoryQuiz").addEventListener("click", startQuiz);'
assert old in js, 'anchor categoryQuiz listener'
js = js.replace(old, old + '\n  document.getElementById("categoryA2").addEventListener("click", function(){ showScreen("a2"); });', 1)
print('A2 banner listener')

# ==================== HTML edits ====================

# 10) A2 banner
old = '''      <div class="category-meta" id="quizMeta">۱۰ سؤال • معنی درست رو پیدا کن</div>
    </div>
  </button>
  </div>'''
assert old in html, 'anchor quiz banner'
new = '''      <div class="category-meta" id="quizMeta">۱۰ سؤال • معنی درست رو پیدا کن</div>
    </div>
  </button>
  <button class="category-card idioms-banner review-banner tile-a2 a2-banner" id="categoryA2">
    <span class="review-emoji">🎓</span>
    <div class="banner-text">
      <div class="category-name">سطح A2</div>
      <div class="category-meta">۲۰ لغت جدید • ۴ دسته</div>
    </div>
  </button>
  </div>'''
html = html.replace(old, new, 1)
print('A2 banner')

# 11) A2 screen
old = '<div class="celebrate-overlay" id="celebrateOverlay">'
assert old in html, 'anchor celebrateOverlay'
a2_screen = '''<div class="screen screen-a2" id="screenA2">
  <div class="screen-body">
    <div class="settings-title">سطح A2</div>
    <div class="category-sub">۲۰ لغت جدید در ۴ دسته — قدم بعدی یادگیری</div>
    <div class="category-grid">
      <button class="category-card cat-tile tile-everyday" id="categoryA2Everyday">
        <span class="a2-tag">A2</span>
        <div class="category-name">روزمره</div>
        <div class="category-meta" id="a2MetaEveryday">۵ لغت • ۰٪ بلد</div>
      </button>
      <button class="category-card cat-tile tile-travel" id="categoryA2Travel">
        <span class="a2-tag">A2</span>
        <div class="category-name">سفر</div>
        <div class="category-meta" id="a2MetaTravel">۵ لغت • ۰٪ بلد</div>
      </button>
      <button class="category-card cat-tile tile-food" id="categoryA2Food">
        <span class="a2-tag">A2</span>
        <div class="category-name">غذا و رستوران</div>
        <div class="category-meta" id="a2MetaFood">۵ لغت • ۰٪ بلد</div>
      </button>
      <button class="category-card cat-tile tile-work" id="categoryA2Work">
        <span class="a2-tag">A2</span>
        <div class="category-name">کار و اداره</div>
        <div class="category-meta" id="a2MetaWork">۵ لغت • ۰٪ بلد</div>
      </button>
    </div>
  </div>
</div>

''' + old
html = html.replace(old, a2_screen, 1)
print('A2 screen')

# ==================== CSS edits ====================

# 12) tile-a2 color + banner entrance
old = '  .tile-quiz{ background:#FFD9C7; }'
assert old in css, 'anchor tile-quiz'
css = css.replace(old, old + '\n  .tile-a2{ background:#DCEEFF; }', 1)
old = '''  .screen-category.active .quiz-banner{
    animation:cardStaggerIn .5s cubic-bezier(.34,1.56,.64,1) both;
    animation-delay:.58s;
  }'''
assert old in css, 'anchor quiz-banner entrance'
new = old + '''
  .screen-category.active .a2-banner{
    animation:cardStaggerIn .5s cubic-bezier(.34,1.56,.64,1) both;
    animation-delay:.64s;
  }'''
css = css.replace(old, new, 1)
print('tile-a2 + entrance')

# 13) nav show rule + a2
old = '  body[data-active="category"] #sharedNav, body[data-active="idioms"] #sharedNav, body[data-active="profile"] #sharedNav, body[data-active="settings"] #sharedNav{ display:flex; }'
assert old in css, 'anchor nav show rule'
new = '  body[data-active="category"] #sharedNav, body[data-active="idioms"] #sharedNav, body[data-active="profile"] #sharedNav, body[data-active="settings"] #sharedNav, body[data-active="a2"] #sharedNav{ display:flex; }'
css = css.replace(old, new, 1)
print('nav show rule + a2')

# 14) a2-tag style
old = '  .tile-a2{ background:#DCEEFF; }'
assert old in css, 'anchor tile-a2'
new = old + '''
  .a2-tag{
    display:inline-block;
    font-size:11px;
    font-weight:800;
    color:var(--accent-dark);
    background:rgba(124,131,253,.14);
    border-radius:999px;
    padding:3px 10px;
    margin-bottom:8px;
  }'''
css = css.replace(old, new, 1)
print('a2-tag style')

# ==================== version bump ====================
anchors_html = [
    ('<div class="version-badge">v2.16.3</div>', '<div class="version-badge">v2.17.0</div>'),
    ('id="appVersionTag">v2.16.3</span>', 'id="appVersionTag">v2.17.0</span>'),
]
for o, n in anchors_html:
    assert o in html, 'version anchor missing: ' + o
    html = html.replace(o, n)
old = 'Idioms world (v2.16.3)'
assert old in css, 'version comment missing'
css = css.replace(old, 'Idioms world (v2.17.0)')
assert html.count('v2.17.0') >= 2 and css.count('v2.17.0') >= 1
print('version bump OK')

assert '\ufffd' not in html and '\ufffd' not in css and '\ufffd' not in js
io.open(HTML, 'w', encoding='utf-8').write(html)
io.open(CSS, 'w', encoding='utf-8').write(css)
io.open(JS, 'w', encoding='utf-8').write(js)
print('APPLY A2 OK -> v2.17.0')