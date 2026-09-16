import json, re

with open('existing_pv.json', 'r', encoding='utf-8') as f:
    existing_list = json.load(f)

existing_by_word = {e['word'].strip().lower(): e for e in existing_list}
existing_by_id = {e['id']: e for e in existing_list}

with open('phrasal_verbs_extracted_cleaned.md', 'r', encoding='utf-8') as f:
    content = f.read()

video_sections = re.split(r'## Video\s+(\d+)\s+—\s+([^\n]+)', content)
all_items = []
for i in range(1, len(video_sections), 3):
    vnum = int(video_sections[i])
    vtitle = video_sections[i+1].strip()
    vbody = video_sections[i+2]
    items = re.split(r'####\s+(\d+)\.\s+([^\n]+)', vbody)
    for j in range(1, len(items), 3):
        inum = int(items[j])
        iverb = items[j+1].strip()
        ibody = items[j+2].strip()
        all_items.append({
            'video': vnum,
            'vtitle': vtitle,
            'num': inum,
            'verb': iverb,
            'body': ibody
        })

print(f"Total extracted: {len(all_items)}")

# Let's categorize every item into:
# - NON_PV
# - EXACT_EXISTING
# - HOMOGRAPH_EXISTING
# - CROSS_VIDEO_DUP
# - NEW_ENTRY

records = []
for item in all_items:
    v = item['video']
    num = item['num']
    verb = item['verb']
    body = item['body']
    
    # Non PV
    if 'not a phrasal verb' in body.lower() or 'not treat it as a phrasal verb' in body.lower():
        records.append({
            'item': item,
            'status': 'NON_PV',
            'reason': 'Explicitly flagged as non-phrasal verb in source transcript',
            'action': 'Exclude'
        })
        continue
    
    # Exact existing
    exact_matches = {
        (1, 10): 'put_on',
        (1, 11): 'take_off',
        (1, 33): 'wake_up',
        (1, 35): 'point_out',
        (1, 36): 'plug_in',
        (1, 42): 'take_out',
        (1, 45): 'put_away',
        (1, 48): 'fill_up',
        (1, 49): 'turn_on',
        (1, 50): 'turn_off',
        (1, 51): 'hang_up',
        (1, 53): 'turn_up (volume)',
        (1, 54): 'turn_down (volume)',
        (2, 2): 'get_across',
        (2, 39): 'fill_up',
        (2, 44): 'cheer_up',
        (2, 45): 'dress_up',
        (3, 2): 'break_down_machine',
        (3, 10): 'turn_on',
        (3, 18): 'figure_out',
        (3, 26): 'let_down',
        (3, 39): 'cheer_up',
    }
    
    if (v, num) in exact_matches:
        records.append({
            'item': item,
            'status': 'EXACT_DUPLICATE_EXISTING',
            'reason': f"Matches existing app entry '{exact_matches[(v, num)]}' with identical meaning",
            'action': 'Exclude'
        })
        continue
        
    # Check V2 #18 meaning 2: look up to someone
    # We will handle look up in Step 2.
    
    records.append({
        'item': item,
        'status': 'CANDIDATE',
        'reason': '',
        'action': 'Evaluate'
    })

print(f"Non-PV: {sum(1 for r in records if r['status'] == 'NON_PV')}")
print(f"Exact existing dups: {sum(1 for r in records if r['status'] == 'EXACT_DUPLICATE_EXISTING')}")
print(f"Candidates remaining: {sum(1 for r in records if r['status'] == 'CANDIDATE')}")
