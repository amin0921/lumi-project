import json, re

with open('existing_pv.json', 'r', encoding='utf-8') as f:
    existing_list = json.load(f)

existing_by_word = {}
for e in existing_list:
    w = e['word'].strip().lower()
    if w not in existing_by_word:
        existing_by_word[w] = []
    existing_by_word[w].append(e)

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

print(f"Total source items: {len(all_items)}")

# We have 162 items.
# Let's define the status of each item.
# Categories:
# 1. NON_PV:
#    - V1 #4 trip
#    - V1 #37 unplug
#
# 2. EXACT_EXISTING (Matches existing verb with same meaning in app):
#    - V1 #10 put on -> pv_a1:put_on
#    - V1 #11 take off -> pv_a1:take_off
#    - V1 #33 wake up -> pv_a1:wake_up
#    - V1 #35 point out -> pv_b1_work:point_out
#    - V1 #36 plug in -> pv_a2_home:plug_in
#    - V1 #42 take out -> pv_a2_home:take_out
#    - V1 #45 put away -> pv_a2_home:put_away
#    - V1 #48 fill up -> pv_b1_routine:fill_up
#    - V1 #49 turn on -> pv_a1:turn_on
#    - V1 #50 turn off -> pv_a1:turn_off
#    - V1 #51 hang up -> pv_a2_home:hang_up
#    - V1 #53 turn up -> pv_a2_home:turn_up (volume)
#    - V1 #54 turn down -> pv_a2_home:turn_down (volume)
#    - V2 #2 get across -> pv_b2_challenges:get_across
#    - V2 #18 (Meaning 2: look up to someone) -> pv_b2_social:look_up_to
#    - V2 #39 fill up -> pv_b1_routine:fill_up
#    - V2 #44 cheer up -> pv_b1_social:cheer_up
#    - V2 #45 dress up -> pv_a2_social:dress_up
#    - V3 #2 break down -> pv_b1_social:break_down_machine
#    - V3 #10 turn on -> pv_a1:turn_on
#    - V3 #18 figure out -> pv_b1_social:figure_out
#    - V3 #26 let down -> pv_b1_social:let_down
#    - V3 #39 cheer up -> pv_b1_social:cheer_up
#
# 3. HOMOGRAPH_EXISTING:
#    - V2 #36 & V3 #13 turn down (reject offer) -> distinct from pv_a2_home:turn_down (decrease volume)
#    - V3 #47 cut off (block/intercept path) -> distinct from pv_b1_routine:cut_off (disconnect water/electricity)
#    - V3 #49 turn up (arrive unexpectedly) -> distinct from pv_a2_home:turn_up (increase volume)
#
# 4. CROSS_VIDEO_DUPLICATES (Duplicates across the 3 videos):
#    - climb up: V1#6 vs V2#40 -> V1#6 canonical, V2#40 dup
#    - pick up: V1#26 vs V2#37 -> V1#26 canonical, V2#37 dup
#    - get up: V1#34 vs V2#38 -> V1#34 canonical, V2#38 dup
#    - back up: V2#10 vs V2#42 -> V2#10 canonical, V2#42 dup
#    - look after: V2#12 vs V3#8 -> V2#12 canonical, V3#8 dup
#    - look forward to: V2#15 vs V3#29 -> V2#15 canonical, V3#29 dup
#    - look up: V2#18(M1) vs V3#1 -> V2#18(M1) canonical, V3#1 dup
#    - whip up: V2#47 vs V3#12 -> V2#47 canonical, V3#12 dup
#    - set up: V2#49 vs V3#11 -> V2#49 canonical, V3#11 dup
#    - come up with: V2#51 vs V3#34 -> V2#51 canonical, V3#34 dup
#    - get off: V1#17 vs V3#3 -> V1#17 canonical, V3#3 dup
#    - give up: V1#41 vs V3#15 -> V1#41 canonical, V3#15 dup
#    - fall apart: V1#22 vs V3#32 -> V1#22 canonical, V3#32 dup
#    - bring up: V2#1 vs V3#22 -> V2#1 canonical, V3#22 dup
#    - turn down (reject): V2#36 vs V3#13 -> V2#36 canonical, V3#13 dup
#
# 5. INTERNAL MULTI-MEANING / HOMOGRAPHS:
#    - get out: V1#13 (leave vehicle) vs V1#46 (take out from storage) -> 2 entries
#    - jump in: V1#14 (enter vehicle) vs V2#3 (interrupt conversation) -> 2 entries
#    - go up: V1#8 (climb up ladder) vs V2#41 (price/value increase) -> 2 entries
#    - talk over: V2#7 M1 (discuss problem/plan) vs V2#7 M2 (interrupt/speak over) -> 2 entries
#    - shut down: V2#9 M1 (close business) vs V2#9 M2 (dismiss/reject idea) -> 2 entries
#    - look out: V2#17 M1 (watch out exclamation) vs V2#17 M2 (look out for someone) -> 2 entries
#    - make up: V2#50 M1 (invent story) vs V2#50 M2 & V3#33 (reconcile after argument) -> 2 entries
#    - cook up: V2#46 M1 (prepare food) & M2 (develop plan) -> can be 1 unified or 2
#    - come up: V2#28 M1, M3, M4 (arise/emerge/be mentioned/opportunity) -> unified come_up
#    - come in: V2#29 M1, M2 (enter/arrive) -> unified come_in
#    - come out: V2#30 M1, M4 (be revealed, released/published) -> unified come_out
#    - come on: V2#31 (hurry up / encourage / start working) -> unified come_on
#    - come down: V2#32 (move downward / reduce price) -> unified come_down
#    - get through: V2#6 M1 (phone connects) vs M2 (make someone understand) -> can be 1 or 2

