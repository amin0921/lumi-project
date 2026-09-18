from pathlib import Path
import os
import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = Path(__file__).resolve().parent

# 1. استخراج نسخه جاری از js/app.js به عنوان تنها منبع حقیقت (Single Source of Truth)
app_js_path = ROOT / "js" / "app.js"
if not app_js_path.exists():
    print("❌ فایل js/app.js پیدا نشد.")
    sys.exit(1)

try:
    app_js_content = app_js_path.read_text(encoding="utf-8")
except Exception as e:
    print(f"❌ امکان خواندن فایل js/app.js وجود ندارد: {e}")
    sys.exit(1)

v_match = re.search(r'var APP_VERSION = "([^"]+)";', app_js_content)
if not v_match or not v_match.group(1).strip():
    print("❌ متغیر APP_VERSION با ساختار دقیق 'var APP_VERSION = \"...\";' در js/app.js پیدا نشد.")
    sys.exit(1)

current_version = v_match.group(1).strip()

# 2. لیست استثناها برای اسکن فایل‌ها
# پوشه‌های زیر بررسی نمی‌شوند:
EXCLUDED_DIRS = {
    ".git",
    "dist",          # خروجی بیلد به صورت مجزا در انتهای اسکریپت بررسی می‌شود
    "graphify-out",  # خروجی ابزار graphify
    "assets",        # تصاویر و فونت‌ها
    "node_modules",  # وابستگی‌های جانبی
    ".agents",       # تنظیمات و فایل‌های قوانین agent
}

# compress_font.py: اسکریپت یک‌بارمصرف مهاجرت پروژه از نسخه 2.16.2 به 2.16.3 است،
# بنابراین نسخه‌های موجود در آن داده‌های تاریخی هستند نه نسخه جاری اپلیکیشن.
EXCLUDED_FILES = {
    "compress_font.py",
}

# الگوی شناسایی نسخه‌ها با پیشوند v (مانند vX.Y.Z)
VERSION_PATTERN = re.compile(r'\bv\d+\.\d+(?:\.\d+)*\b')

scanned_count = 0
binary_skipped_count = 0
mismatches = []
matched_valid_count = 0

for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d not in EXCLUDED_DIRS]
    for filename in sorted(filenames):
        file_path = Path(dirpath, filename)
        rel_path = file_path.relative_to(ROOT).as_posix()

        if filename in EXCLUDED_FILES or rel_path in EXCLUDED_FILES:
            continue

        try:
            content = file_path.read_text(encoding="utf-8")
            scanned_count += 1
        except UnicodeDecodeError:
            binary_skipped_count += 1
            continue
        except Exception as e:
            print(f"❌ امکان خواندن فایل {rel_path} وجود ندارد: {e}")
            sys.exit(1)

        for line_no, line in enumerate(content.splitlines(), 1):
            for m in VERSION_PATTERN.finditer(line):
                found_val = m.group(0)
                if found_val != current_version:
                    mismatches.append({
                        "file": rel_path,
                        "line": line_no,
                        "found": found_val,
                        "content": line.strip(),
                    })
                else:
                    matched_valid_count += 1

print(f"🔍 نسخه جاری پروژه (از js/app.js): {current_version}")
print("📋 لیست استثناهای اعمال‌شده:")
print(f"  - پوشه‌ها: {', '.join(sorted(EXCLUDED_DIRS))}")
print(f"  - فایل‌ها: {', '.join(sorted(EXCLUDED_FILES))}")
print(f"📊 وضعیت اسکن فایل‌ها: {scanned_count} فایل متنی بررسی شد ({binary_skipped_count} فایل باینری نادیده گرفته شد).")

if mismatches:
    print("\n❌ مغایرت نسخه در فایل‌های پروژه پیدا شد:")
    print(f"نسخه اصلی پروژه بر اساس js/app.js برابر است با: {current_version}")
    print("موارد مغایر یافت‌شده:")
    for m in mismatches:
        print(f"  • فایل: {m['file']} | خط {m['line']}: مقدار «{m['found']}» یافت شد (باید «{current_version}» باشد)")
        print(f"    متن خط: {m['content']}")
    print("\nلطفاً تمام شماره نسخه‌ها را یکدست کنید و دوباره بررسی را اجرا نمایید.")
    sys.exit(1)

print(f"✅ تمام نسخه‌های یافت‌شده در سورس فایل‌ها ({matched_valid_count} مورد) با {current_version} همخوانی دارند.")

# 3. بررسی فایل نهایی بیلد و نشانگرهای ضروری
REQUIRED_MARKERS = [
    "<!DOCTYPE html>",
    current_version,
    "انتخاب سطح A1 یا A2",
    "همه مأموریت‌های امروز کامل شد",
    "لغت رو با موفقیت مرور کردی",
]

possible_files = [
    ROOT / "dist" / "index.html",
    ROOT / "dist" / "index.single.html",
    ROOT / "dist" / "loghatyar.html",
    ROOT / "index.html",
]

target = None

for file in possible_files:
    if file.exists():
        text = file.read_text(encoding="utf-8", errors="ignore")
        if current_version in text:
            target = file
            break

if target is None:
    print("❌ فایل خروجی جدید پیدا نشد یا نسخه داخل خروجی درست نیست.")
    print(f"باید نسخه {current_version} داخل فایل نهایی وجود داشته باشد.")
    print("اول build.py را اجرا کن، بعد دوباره این چک را بگیر.")
    sys.exit(1)

text = target.read_text(encoding="utf-8", errors="ignore")

missing = []

for marker in REQUIRED_MARKERS:
    if marker not in text:
        missing.append(marker)

rel_target = target.relative_to(ROOT) if target.is_relative_to(ROOT) else target
print(f"✅ فایل بررسی‌شده: {rel_target}")

if missing:
    print("❌ بعضی تغییرات جدید داخل خروجی نهایی پیدا نشد:")
    for item in missing:
        print(f"- {item}")
    print("\nاحتمالاً dist قدیمی است یا build درست انجام نشده.")
    sys.exit(1)

print("✅ همه چیز آماده deploy است.")
print(f"✅ نسخه خروجی: {current_version}")
