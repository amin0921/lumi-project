# Graph Report - lumi-latest-version  (2026-09-18)

## Corpus Check
- 25 files · ~349,470 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: .woff2 6, (none) 1, .css 1)

## Summary
- 347 nodes · 526 edges · 20 communities (16 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `16a14244`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Movement, position, and objects
- re
- Story 1: Emily’s first job
- app.js
- Skills, refusal, and “up” categories
- handleSentenceClear
- startQuiz
- Lumi Project — Agent Instructions (AGENTS.md)
- لغت‌یار (Lumi)
- Looking and investigating
- Idiom Custom PNG Icons
- rules/graphify.md
- workflows/graphify.md
- Story 2: Arthur’s tea shop
- Communication and conversation
- Story 3: Isabella and the violin
- Story 4: Tom and Elizabeth
- Other meanings of “come”

## God Nodes (most connected - your core abstractions)
1. `Movement, position, and objects` - 55 edges
2. `Lumi Project — Agent Instructions (AGENTS.md)` - 27 edges
3. `Skills, refusal, and “up” categories` - 25 edges
4. `bindHomeEvents()` - 23 edges
5. `toPersianDigits()` - 15 edges
6. `showScreen()` - 13 edges
7. `renderQuiz()` - 12 edges
8. `showQuizResults()` - 12 edges
9. `Looking and investigating` - 12 edges
10. `Story 2: Arthur’s tea shop` - 12 edges

## Surprising Connections (you probably didn't know these)
- `startQuiz()` --calls--> `showScreen()`  [EXTRACTED]
  js/app.js → js/app.js  _Bridges community 3 → community 6_
- `handleSentenceClear()` --calls--> `updateDialogueSummary()`  [EXTRACTED]
  js/app.js → js/app.js  _Bridges community 3 → community 5_

## Import Cycles
- None detected.

## Communities (20 total, 4 thin omitted)

### Community 0 - "Movement, position, and objects"
Cohesion: 0.04
Nodes (55): 10. put on, 11. take off, 12. get in, 13. get out, 14. jump in, 15. jump out, 16. get on, 17. get off (+47 more)

### Community 1 - "re"
Cohesion: 0.13
Nodes (10): base64, collections, datetime, io, json, os, pathlib, re (+2 more)

### Community 2 - "Story 1: Emily’s first job"
Cohesion: 0.06
Nodes (32): 10. turn on, 1. look up, 22. come down with, 23. fight off, 24. pass away, 25. dip into, 26. get by, 27. go without (+24 more)

### Community 3 - "app.js"
Cohesion: 0.07
Nodes (74): answerQuiz(), applyPersonalTheme(), bindHomeEvents(), clearConfetti(), closeCategoryDrawer(), countUp(), step(), currentWordKey() (+66 more)

### Community 4 - "Skills, refusal, and “up” categories"
Cohesion: 0.08
Nodes (25): 35. brush up on, 36. turn down, 37. pick up, 38. get up, 39. fill up, 40. climb up, 41. go up, 42. back up (+17 more)

### Community 5 - "handleSentenceClear"
Cohesion: 0.40
Nodes (6): handleSentenceClear(), removeSentenceToken(), renderSentenceBuilder(), renderSentenceResult(), updateSentenceResult(), updateWordBankButtonsState()

### Community 6 - "startQuiz"
Cohesion: 0.21
Nodes (12): buildBossQuiz(), buildCategoryStreakQuiz(), buildCloze(), buildClozeDistractors(), buildQuiz(), categoryMatchesQuizLevel(), getEligibleStreakCategories(), makeClozePrompt() (+4 more)

### Community 8 - "Lumi Project — Agent Instructions (AGENTS.md)"
Cohesion: 0.07
Nodes (27): AI AGENT AUTONOMY, ANALYZE BEFORE IMPLEMENTING WHEN NEEDED, BOUNDARIES, CORE DEVELOPMENT PRINCIPLES, DEBUGGING & PROBLEM SOLVING, ERROR HANDLING, FINAL REPORTING, KEEP TOOL USE BOUNDED (+19 more)

### Community 9 - "لغت‌یار (Lumi)"
Cohesion: 0.25
Nodes (7): بررسی نسخه انتشار (Release Verification), ساختار پروژه (Project Structure), لغت‌یار (Lumi), محدودیت‌های فعلی و مراحل بعدی (Known Limitations & Next Steps), معماری برنامه, نحوه ساخت (Build Pipeline), پلتفرم و چشم‌انداز توسعه

### Community 10 - "Looking and investigating"
Cohesion: 0.17
Nodes (12): 11. look back on, 12. look after, 13. look down on, 14. look for, 15. look forward to, 16. look around / look round, 17. look out, 18. look up (+4 more)

### Community 11 - "Idiom Custom PNG Icons"
Cohesion: 0.50
Nodes (3): Idiom Custom PNG Icons, مشخصات توصیه‌شده:, نام‌گذاری دقیق و مورد نیاز فایل‌ها:

### Community 15 - "Story 2: Arthur’s tea shop"
Cohesion: 0.17
Nodes (12): 11. set up, 12. whip up, 13. turn down, 14. work out, 15. give up, 16. take on, 17. dust off, 18. figure out (+4 more)

### Community 16 - "Communication and conversation"
Cohesion: 0.18
Nodes (11): 10. back up, 1. bring up, 2. get across, 3. jump in, 4. butt in, 5. blurt out, 6. get through, 7. talk over (+3 more)

### Community 17 - "Story 3: Isabella and the violin"
Cohesion: 0.18
Nodes (11): 22. bring up, 23. rub off on / rub off onto, 24. go by, 25. cut back on, 26. let down, 27. call off, 28. sort out, 29. look forward to (+3 more)

### Community 18 - "Story 4: Tom and Elizabeth"
Cohesion: 0.18
Nodes (11): 32. fall apart, 33. make up, 34. come up with, 35. insist on, 36. take back, 37. turn into, 38. brush off, 39. cheer up (+3 more)

### Community 19 - "Other meanings of “come”"
Cohesion: 0.25
Nodes (8): 28. come up, 29. come in, 30. come out, 31. come on, 32. come down, 33. come over, 34. come back, Other meanings of “come”

## Knowledge Gaps
- **198 isolated node(s):** `graphify`, `Workflow: graphify`, `ROLE & RESPONSIBILITY`, `PROJECT CONTEXT & SOURCE OF TRUTH`, `TASK TYPES & WHICH RULES APPLY` (+193 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 217 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Video 2 — Emma from mmmEnglish` connect `Story 1: Emily’s first job` to `Communication and conversation`, `Looking and investigating`, `Other meanings of “come”`, `Skills, refusal, and “up” categories`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **Why does `Movement, position, and objects` connect `Movement, position, and objects` to `Story 1: Emily’s first job`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `bindHomeEvents()` (e.g. with `closeCategoryDrawer()` and `openCategoryDrawer()`) actually correct?**
  _`bindHomeEvents()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `graphify`, `Workflow: graphify`, `ROLE & RESPONSIBILITY` to the rest of the system?**
  _198 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Movement, position, and objects` be split into smaller, more focused modules?**
  _Cohesion score 0.03636363636363636 - nodes in this community are weakly interconnected._
- **Should `re` be split into smaller, more focused modules?**
  _Cohesion score 0.12666666666666668 - nodes in this community are weakly interconnected._
- **Should `Story 1: Emily’s first job` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._