# Graph Report - lumi-latest-version  (2026-09-18)

## Corpus Check
- 24 files · ~343,217 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: .woff2 6, (none) 1, .css 1)

## Summary
- 162 nodes · 342 edges · 15 communities (11 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f7764b2e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- re
- renderQuiz
- toPersianDigits
- bindHomeEvents
- renderDialogue
- buildCloze
- Lumi Project — Agent Instructions (AGENTS.md)
- لغت‌یار (Lumi)
- updateHomeDashboard
- Idiom Custom PNG Icons
- rules/graphify.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `bindHomeEvents()` - 23 edges
2. `Lumi Project — Agent Instructions (AGENTS.md)` - 20 edges
3. `toPersianDigits()` - 15 edges
4. `showScreen()` - 13 edges
5. `renderQuiz()` - 12 edges
6. `showQuizResults()` - 12 edges
7. `markWord()` - 10 edges
8. `startQuiz()` - 10 edges
9. `safeStorageSet()` - 9 edges
10. `updateQuizModesUI()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `saveProgress()` --calls--> `normalizeProgress()`  [EXTRACTED]
  js/app.js → js/app.js  _Bridges community 0 → community 2_
- `readLearningPath()` --calls--> `safeStorageGet()`  [EXTRACTED]
  js/app.js → js/app.js  _Bridges community 2 → community 10_
- `saveLearningPath()` --calls--> `safeStorageSet()`  [EXTRACTED]
  js/app.js → js/app.js  _Bridges community 2 → community 3_
- `updateDialogueSummary()` --calls--> `safeStorageSet()`  [EXTRACTED]
  js/app.js → js/app.js  _Bridges community 2 → community 5_
- `bindHomeEvents()` --calls--> `toPersianDigits()`  [EXTRACTED]
  js/app.js → js/app.js  _Bridges community 3 → community 4_

## Import Cycles
- None detected.

## Communities (15 total, 4 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.18
Nodes (15): clearConfetti(), countUp(), step(), escapeHtml(), faDayLetter(), isPlainObject(), launchConfetti(), makeDefaultProgress() (+7 more)

### Community 1 - "re"
Cohesion: 0.13
Nodes (10): base64, collections, datetime, io, json, os, pathlib, re (+2 more)

### Community 2 - "renderQuiz"
Cohesion: 0.22
Nodes (19): answerQuiz(), getBossCounters(), getCategoryIcon(), getGhostRecord(), incrementBossCounter(), renderQuiz(), resetBossCounter(), safeStorageGet() (+11 more)

### Community 3 - "toPersianDigits"
Cohesion: 0.15
Nodes (21): currentWordKey(), ensureDailyMissions(), knownCount(), knownCountMany(), levelOfCategory(), markWord(), missionPercent(), render() (+13 more)

### Community 4 - "bindHomeEvents"
Cohesion: 0.29
Nodes (10): applyPersonalTheme(), bindHomeEvents(), closeCategoryDrawer(), openCategoryDrawer(), safeStorageRemove(), selectCategory(), showHomeComingSoon(), showScreen() (+2 more)

### Community 5 - "renderDialogue"
Cohesion: 0.22
Nodes (10): getIntentFeedback(), handleSentenceCheck(), handleSentenceClear(), removeSentenceToken(), renderDialogue(), renderSentenceBuilder(), renderSentenceResult(), updateDialogueSummary() (+2 more)

### Community 6 - "buildCloze"
Cohesion: 0.21
Nodes (11): buildBossQuiz(), buildCategoryStreakQuiz(), buildCloze(), buildClozeDistractors(), buildQuiz(), categoryMatchesQuizLevel(), getEligibleStreakCategories(), makeClozePrompt() (+3 more)

### Community 8 - "Lumi Project — Agent Instructions (AGENTS.md)"
Cohesion: 0.10
Nodes (20): AI AGENT AUTONOMY, ANALYZE BEFORE IMPLEMENTING WHEN NEEDED, CORE DEVELOPMENT PRINCIPLES, DEBUGGING & PROBLEM SOLVING, ERROR HANDLING, FINAL REPORTING, Lumi Project — Agent Instructions (AGENTS.md), OFFLINE-FIRST ASSETS (+12 more)

### Community 9 - "لغت‌یار (Lumi)"
Cohesion: 0.25
Nodes (7): بررسی نسخه انتشار (Release Verification), ساختار پروژه (Project Structure), لغت‌یار (Lumi), محدودیت‌های فعلی و مراحل بعدی (Known Limitations & Next Steps), معماری برنامه, نحوه ساخت (Build Pipeline), پلتفرم و چشم‌انداز توسعه

### Community 10 - "updateHomeDashboard"
Cohesion: 0.47
Nodes (6): daysBetween(), dueWords(), getQuizLevelStats(), readLearningPath(), startReviewSession(), updateHomeDashboard()

### Community 11 - "Idiom Custom PNG Icons"
Cohesion: 0.50
Nodes (3): Idiom Custom PNG Icons, مشخصات توصیه‌شده:, نام‌گذاری دقیق و مورد نیاز فایل‌ها:

## Knowledge Gaps
- **29 isolated node(s):** `graphify`, `Workflow: graphify`, `ROLE & RESPONSIBILITY`, `PROJECT CONTEXT & SOURCE OF TRUTH`, `REPOSITORY REALITY & BUILD PIPELINE` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 47 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `makeClozePrompt()` connect `buildCloze` to `app.js`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `bindHomeEvents()` (e.g. with `closeCategoryDrawer()` and `openCategoryDrawer()`) actually correct?**
  _`bindHomeEvents()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `graphify`, `Workflow: graphify`, `ROLE & RESPONSIBILITY` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `re` be split into smaller, more focused modules?**
  _Cohesion score 0.12666666666666668 - nodes in this community are weakly interconnected._
- **Should `Lumi Project — Agent Instructions (AGENTS.md)` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._