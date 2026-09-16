import json, re

# Let's inspect the existing IDs across all categories in js/app.js to ensure zero collision.
with open('js/app.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Extract all word IDs from app.js
all_existing_ids = set(re.findall(r'id:\s*["\']([a-zA-Z0-9_]+)["\']', js_content))
print(f"Total existing IDs across all categories in app.js: {len(all_existing_ids)}")

with open('existing_pv.json', 'r', encoding='utf-8') as f:
    existing_pv = json.load(f)
existing_pv_ids = {e['id'] for e in existing_pv}
print(f"Existing PV IDs: {len(existing_pv_ids)}")
