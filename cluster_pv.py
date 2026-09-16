import json, re

# Let's inspect all items from the markdown and write a script to build the entire dataset
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

print(f"Total raw items: {len(all_items)}")
