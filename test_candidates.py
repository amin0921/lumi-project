import json, re
from collections import defaultdict

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

# Map known cross-video duplicate pairs:
cross_dups = {
    (2, 40): ((1, 6), 'climb up: Move upward to reach a higher level (Duplicate of V1#6)'),
    (2, 37): ((1, 26), 'pick up: Lift or move something (Duplicate of V1#26)'),
    (2, 38): ((1, 34), 'get up: Rise after sleeping/sitting down (Duplicate of V1#34)'),
    (2, 42): ((2, 10), 'back up: Provide extra support (Duplicate of V2#10)'),
    (3, 8):  ((2, 12), 'look after: Take care of someone (Duplicate of V2#12)'),
    (3, 29): ((2, 15), 'look forward to: Anticipate with excitement (Duplicate of V2#15)'),
    (3, 1):  ((2, 18), 'look up: Search for information (Duplicate of V2#18 M1)'),
    (3, 12): ((2, 47), 'whip up: Quickly prepare food (Duplicate of V2#47)'),
    (3, 11): ((2, 49), 'set up: Establish business/organization (Duplicate of V2#49)'),
    (3, 34): ((2, 51), 'come up with: Devise solution/idea (Duplicate of V2#51)'),
    (3, 3):  ((1, 17), 'get off: Leave/exit transportation (Duplicate of V1#17)'),
    (3, 15): ((1, 41), 'give up: Quit or stop trying (Duplicate of V1#41)'),
    (3, 32): ((1, 22), 'fall apart: Disintegrate/break down (Duplicate of V1#22)'),
    (3, 22): ((2, 1),  'bring up: Mention topic in conversation (Duplicate of V2#1)'),
    (3, 13): ((2, 36), 'turn down: Reject offer/request (Duplicate of V2#36 homograph)'),
    (3, 33): ((2, 50), 'make up: Reconcile after argument (Duplicate of V2#50 M2)'),
}

# Also V2 #18 Meaning 2: look up to someone (Exact duplicate of existing look_up_to)
# Handled specifically.

print("Cross-video duplicates defined:", len(cross_dups))
