from pathlib import Path
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

EXPECTED_VERSION = "v2.37.0"

REQUIRED_MARKERS = [
    "<!DOCTYPE html>",
    EXPECTED_VERSION,
    "انتخاب سطح A1 یا A2",
    "همه مأموریت‌های امروز کامل شد",
    "لغت رو با موفقیت مرور کردی",
]

possible_files = [
    Path("dist/index.html"),
    Path("dist/index.single.html"),
    Path("dist/loghatyar.html"),
    Path("index.html"),
]

target = None

for file in possible_files:
    if file.exists():
        text = file.read_text(encoding="utf-8", errors="ignore")
        if EXPECTED_VERSION in text:
            target = file
            break

if target is None:
    print("❌ فایل خروجی جدید پیدا نشد یا نسخه داخل خروجی درست نیست.")
    print(f"باید نسخه {EXPECTED_VERSION} داخل فایل نهایی وجود داشته باشد.")
    print("اول build.py را اجرا کن، بعد دوباره این چک را بگیر.")
    sys.exit(1)

text = target.read_text(encoding="utf-8", errors="ignore")

missing = []

for marker in REQUIRED_MARKERS:
    if marker not in text:
        missing.append(marker)

print(f"✅ فایل بررسی‌شده: {target}")

if missing:
    print("❌ بعضی تغییرات جدید داخل خروجی نهایی پیدا نشد:")
    for item in missing:
        print(f"- {item}")
    print("\nاحتمالاً dist قدیمی است یا build درست انجام نشده.")
    sys.exit(1)

print("✅ همه چیز آماده deploy است.")
print(f"✅ نسخه خروجی: {EXPECTED_VERSION}")
