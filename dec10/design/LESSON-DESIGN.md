# DEC10 — how lessons are designed

**Read this before writing or changing any DEC10 lesson** (`dec10/lessons/…`, including the Language Lab).
It applies to DEC10 only and does not change DEC15.

Reference books in this folder (word lists and headings only; we do not copy reading texts or exercises):
- `focus-on-vocabulary-2.md`: *Focus on Vocabulary 2: Mastering the Academic Word List* (Schmitt & Schmitt, Pearson Longman). These research-based academic words are what students need at university.
- `essay-activator.md`: *Longman Essay Activator*, with phrases for 28 essay functions (cause, effect, contrast, opinion, concluding …).

---

## 0. Who designs these lessons, and what we may change

**Design like an experienced CELTA and EAP teacher.** Every stage has a clear aim and a reason to be there. Stages follow a logical order: context → meaning → form → controlled → freer. Use the core ELT techniques:
- **Meaning:** guessing from context, guided discovery, concept-checking questions (CCQs), and checks on meaning, form and pronunciation (MFP).
- **Classroom management:** instruction-checking questions (ICQs), pair checks before whole-class feedback, and scaffolding that fades.
- **Vocabulary:** a lexical approach (collocations, word families).
- **Lesson shapes:** test-teach-test where it fits, and recycling of language across the week.

Every activity must help students get **ready for the exam and for university**. Cut or shorten anything that does not (often extras around the AST topics) before cutting exam skills.

### Quality first: check every part
For **every** exercise and block, ask: *Is it useful for the lesson aim? Is there a better way to do the same thing? Should it be removed?*
- Prefer **removing or replacing** to adding. A lesson with fewer, well-chosen tasks is better than a full one.
- Do not drill the same items more than once or twice. Do not repeat the same task in a new format (a line-up, then a mingle, then a relay).
- Use movement (line-ups, mingles, corners) only when it does a real job, and usually only once or twice per hour.
- Practice items must target the lesson aim (e.g. a style lesson practises style, not unrelated accuracy points).
- Check meaning, not just recognition: if students need a term (e.g. *hedging*), show it before → after and check it.

### Connected tabs: bring the text with you
When an activity needs a text, model or list from an earlier tab (e.g. a weak draft and its academic version, the rules to look for, a model to check against), put a copy of it **in that activity as a fold (toggle)**, so students can open it and compare without going back to the earlier tab.
- Put the fold **before** the task that needs it. If students must read it during the task, set it to open; if they should try first (e.g. a model answer), label it “Open only after you try”.
- Typical folds: *the first draft*, *the edited version*, *the rules/checklist*, *the model answer*.

### What we must NOT change
- **Reading and listening texts** (the protected sources in `sources.js`).
- **The reading and listening questions** (gist, detail, note-taking tables), their answers and their order.
- **Exam and assessment tasks:** writing and speaking test prompts, practice assessments and anything that links to Canvas.
- **Teacher's Book tasks and model texts.** Keep the TB task as the main task. Our own ideas can come before or after it, or be an extension or homework, but never replace it.

### Where we have freedom
- **Vocabulary:** which words are taught, how many, and how they are presented and practised (before and after a text).
- Lead-ins, extra controlled practice, production tasks that personalise the language, classroom management (pairs, mingles, games), language banks and examples.

### Blocking words: few, in context, checked simply
- Before a reading or listening, teach **only the words that would really block understanding of the text and its questions**. There is no fixed number. It is often 4–7, decided by the text, but **never a long list**. If 15 words are taught before reading, most of them are not blocking words.
- **Present them in a context:** write a short, simple paragraph (or a few sentences) on the same topic that uses all the words, so students can **guess the meaning from context**. Then run **one simple check** (e.g. matching words to meanings), then go to the text.
- **After the text (optional, not every lesson):** once students have answered the reading or listening questions, you *may* add **a few** extra words or expressions from the text that are really worth knowing. Only add them when they are genuinely good, never as a long list. The reason can be:
  - **writing**: an academic collocation, a linking or hedging phrase;
  - **grammar**: e.g. a useful noun phrase or passive pattern in the text;
  - **speaking or everyday English**: a natural expression students can use outside class;
  - **just good to know**.

  Have students find the items in the text, check their meaning simply, and use them straight away if possible (e.g. in the speaking or writing task that follows).
- Other difficult words in the text can stay in the reading's glossary ("Word meanings"). They do not need to be taught.

---

## 1. Two lesson shapes

### A. Task-based lessons (around a reading or a listening)
Students meet the language in a real-life context, as they would at university.

1. **Lead-in / discussion**: activate what they already know about the topic and build a reason to read or listen.
2. **Pre-teach blocking words only**: just the few words that would stop understanding of the text and its questions, **not all** the new words. Present them in a short context, have students guess them, then check them with one simple activity (see §0).
3. **Goal-oriented practice on the text**, in this order:
   1. **Gist**: main idea, purpose, best title, matching headings.
   2. **Detail**: specific information, true/false/not given, notes, numbers, reasons.
   3. **Useful language from the text (optional, after the questions are answered)**: a **few** extra words or expressions that are really worth keeping, for writing, grammar, everyday English or just because they are good to know. Not every lesson, and never a long list.
4. **Post-reading / post-listening: the bigger picture**, a speaking or writing task that uses the content and the language, linked to:
   - the course **assessments** (LRW, Integrated Writing, seminar, Interactive Presentation, Interactive Discussion), or
   - **university life** (tutorials, group work, emails to lecturers, office hours).

### B. PPP lessons (grammar, vocabulary, functional language)
1. **Lead-in**: a context and a reason to care.
2. **Presentation**: the form, meaning and use of the grammar or vocabulary item, shown in context.
3. **Practice**, controlled first. The ideal order (use as many as time allows, and keep this order):
   1. **Multiple choice / identify**: students pick the correct option. *Can they recognise the right answer?*
   2. **Gap fill**: students produce the word or form in a controlled sentence. *Can they use it?*
   3. **Find the mistake** (if time): students spot and correct errors. *Can they notice errors, including their own?*
4. **Production**: freer practice that personalises the language for students' own lives, their **exams**, or **university life**.

If time is short, keep **1 (multiple choice)** and **2 (gap fill)**. Drop the error-correction step before you drop either of the other two.

---

## 2. Mapping onto the app's blocks

| Stage | Blocks that fit (see `lessons/_template.js`) |
|---|---|
| Lead-in / discussion | `speak` (purple prompts), `do` with Pair/Group badge, polls/opinion lines, bingo |
| Blocking words | small `match` or `flip` set (aim for 4–6 words), `glossary` entries on the reading |
| Gist | `quiz` (one-answer), heading match, `order` |
| Detail | `grid` (agree / doesn't mention), `quiz`, note-taking tables |
| Useful language from text | `spot` in the passage, `bank` (language bank), a short `cloze` |
| Presentation (PPP) | `key` box + `rule` cards (Language Lab), `model` |
| Controlled 1: multiple choice | `quiz` / `cloze` with options |
| Controlled 2: gap fill | `cloze` with typed answers |
| Controlled 3: find the mistake | `rewrite` (type the fixed sentence) |
| Production | `speak`, `write` + `detect` box (lights the target words), checklist, a `model` behind a `gate` |

Every controlled task needs **suggested answers**. Teacher notes say which steps can be cut when time is short.

---

## 3. How to use the two books

**Focus on Vocabulary 2 (the vocabulary syllabus)**
- When a DEC10 reading/listening has new vocabulary, prefer **AWL words that appear in the FoV2 lists** for blocking words and "useful language".
- Teach words with their **word family** (noun/verb/adj/adv) and **collocations**, as the book does.
- FoV2's themes overlap with ours: water/food/environment (Units 4–5) fits sustainability, eco-tourism, green chemistry and the circular economy. Marketing and consumers (Unit 2) fits fashion and globalisation. Workplace design (Unit 3) fits the future of work. Society (Unit 1) fits the digital footprint and globalisation.
- The source PDF is the answer key only: the lists are **partial** (about 60–80% of each chapter's words), and Unit 8 is missing. See the caveat at the top of `focus-on-vocabulary-2.md`.

**Essay Activator (the phrase bank for writing and speaking production)**
- Use its function headings to decide which phrases a writing task should practise. For example: problem/solution essays → *Problems & Solutions, Causes, Effects*; discussion essays → *Advantages & Disadvantages, Comparing & Contrasting, Giving Opinions, Concluding*; summaries/integrated writing → *Quoting People, Referring, Showing & Proving, Study & Research*.
- Turn its usage warnings (e.g. *effect/affect*, *increase in*, *agree with*, no comma before *such as*) into **find-the-mistake** items.
- Keep the language bank short: only a few phrases per function in one lesson.

---

## 4. Checklist for every DEC10 lesson
- [ ] No reading or listening text, question or exam task was changed. Teacher's Book tasks are still the main tasks.
- [ ] Every stage helps students get ready for the exam or for university.
- [ ] Quality pass done: every block is useful, nothing is drilled three times, and movement does a real job.
- [ ] Connected tabs: every text an activity needs from an earlier tab is there as a fold (toggle).
- [ ] Blocking words: only a few, presented in a context, guessed, then checked with one simple activity.
- [ ] A clear real-life or university context, introduced in the lead-in.
- [ ] Reading/listening: only blocking words pre-taught, then gist → detail → a few useful expressions.
- [ ] PPP: presentation → multiple choice → gap fill → (find the mistake) → production.
- [ ] Production links to an assessment or to university life and is personalised.
- [ ] Vocabulary comes from the AWL/FoV2 where possible, taught with word family and collocations.
- [ ] Writing phrases come from the matching Essay Activator function, kept to a short list.
- [ ] Answers for every controlled task; teacher notes say what to cut if time is short.
