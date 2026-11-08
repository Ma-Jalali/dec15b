/* DEC10 · Week 4 · Day 1 (Monday) — Eco-tourism: unpack a sample, read to write, get ready to listen.
   Built from the Week 4 Teacher's Book (W4 D1. 1A Integrated Writing workshop (1) · 2A Reading to Write · 3A Listening to write
   lead-in · 4A Listening to Write Homework), the Week 4 Student Booklet (1B/1C Sample 3.1, 2A/2B reading) and the revised weekly map
   (1A 70 min · 2A 150 min · 3A 15 min · 4A homework). Protected texts live in week4/sources.js ("s31", "ecosdg", "alom") and are never
   changed here. Where the Teacher's Book gives no key (2A Building Understanding Q1–6, 4A Q4–10, hedging examples), the answers here are
   SUGGESTED answers checked against the texts. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w4d1",
  week: 4,
  day: 1,
  title: "Unpack it, read it, listen for it",
  duration: "About 4 hours + homework",
  question: "Can eco-tourism really be good for people and the planet?",
  questionKind: "Big question",
  questionLabel: "This week’s big question · Week 4: Eco-tourism",
  journey: "Take a sample essay apart sentence by sentence and learn to hedge, read a text on eco-tourism and the Sustainable Development Goals with a jigsaw, learn signalling nouns for cohesion, then choose a holiday and listen to a BBC podcast for homework.",
  image: "dec10/assets/week4/hero-d10w4d1.svg",
  imageAlt: "Illustration: an eco-lodge on stilts in a green rainforest valley beside a turquoise bay. A whale shark swims under a small boat, a sea turtle rises to the surface, hikers cross a rope bridge and a plane leaves a vapour trail in the sky. Floating cards show Sustainable Development Goal badges 2 and 3, an essay page split into coloured parts, and a pair of headphones with a sound wave.",
  finish: { title: "Day 2", text: "Listening to write, mediation across three sources — and the Integrated Writing Practice Assessment" },
  goalShort: "Tuesday’s Integrated Writing Practice Assessment",
  sections: [
    /* ───────────────────────── 1A · Integrated Writing workshop (1) · 70 min ───────────────────────── */
    {
      id: "iww1",
      number: "01",
      code: "1A",
      minutes: 70,
      tone: "green",
      art: "dec10/assets/week4/s-d1-iww1.svg",
      title: "Integrated Writing workshop (1)",
      subtitle: "Take Sample 3.1 apart: the question, the paragraphs, the sentences, the hedges",
      outcome: "You can identify the key components of a writing question, identify a range of rhetorical functions used to show causal relationships, and identify hedging language used to show the writer’s degree of certainty.",
      activities: [
        {
          id: "a1",
          short: "The task",
          minutes: 10,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d1-a1.svg",
          title: "Review the task",
          goal: "Share what you know about the Integrated Writing Assessment (IWA) — and what still worries you.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-iwa-steps.svg",
              size: "wide",
              alt: "The Integrated Writing Assessment as a path of seven stepping stones: 1 listening test, 2 reading test, 3 receive the question, 4 listen again and take notes, 5 take a position, 6 plan, 7 write 450–600 words. Flags show Week 5 and Week 9.",
              caption: "The IWA is <b>integrated</b>: you read, listen, take a position and write. It happens in <b>Week 5</b> and <b>Week 9</b>."
            },
            { type: "do", n: 1, who: "group", text: "Spin a question. Answer it together in <b>one minute</b>. Then the next person spins. Try to answer all six." },
            {
              type: "spinner",
              id: "a1-spin",
              title: "What do we know about the IWA?",
              reels: [
                {
                  label: "Question",
                  items: [
                    "What does the assessment involve?",
                    "When will the assessment occur?",
                    "What skills will you need to complete the assessment successfully?",
                    "How will the DEC course help you to complete the assessment successfully?",
                    "How will the assessment help with your university course?",
                    "Do you have any questions or concerns about the assessment?"
                  ]
                }
              ]
            },
            { type: "do", n: 2, who: "group", text: "Check one answer: put the parts of the assessment in order." },
            {
              type: "order",
              id: "a1-order",
              title: "What happens in the IWA?",
              items: [
                "Complete a listening test",
                "Complete a reading test",
                "Receive a question for which you will plan and write an essay of 450–600 words",
                "Listen again (to the lecture) and take notes relevant to the question",
                "Take a position in answer to the question, based on the reading and listening texts",
                "Plan a response to the question using an appropriate structure",
                "Write your answer"
              ],
              ends: ["First", "Last"],
              why: "Reading and listening come first. Then you get the question, listen again with the question in mind, decide your position, plan — and write."
            },
            {
              type: "language",
              title: "Talk about the assessment",
              groups: [
                { label: "Explain", phrases: ["<b>As far as I understand,</b> the assessment involves …", "<b>First</b> we …, <b>then</b> we …", "<b>The tricky part is</b> …"] },
                { label: "Skills", phrases: ["<b>We’ll need to be able to</b> synthesise sources.", "<b>It’s essential to</b> take a clear position.", "<b>Good note-taking will help us</b> …"] },
                { label: "Concerns", phrases: ["<b>What I’m worried about is</b> …", "<b>I’m not sure how</b> … <b>Does anyone know?</b>", "<b>Could we ask the teacher whether</b> …?"] }
              ]
            },
            {
              type: "fields",
              fields: [{ id: "a1-q", label: "My question or concern about the IWA (ask your teacher)", rows: 2, placeholder: "I’m not sure how many sources I need to use …" }]
            }
          ],
          answers: {
            title: "Answers",
            items: [
              ["What does it involve?", "It is integrated with reading and listening: a listening test, a reading test, then a question to plan and answer in an essay of 450–600 words. You listen again (to the lecture) and take notes for the question, take a position based on the reading and listening texts, plan with a suitable structure, and write."],
              ["When?", "Week 5 and Week 9."],
              ["Skills", "Your own ideas, plus: addressing the question with relevant ideas; taking a position and using the sources to support it; synthesising sources; evaluating ideas in the sources; reading and listening well enough to understand, paraphrase and use the information accurately."],
              ["How DEC helps", "Reading-to-write and listening-to-write lessons · Mediation lessons · Academic skills lessons · Academic Success Toolkit (AST) lessons."],
              ["Your university course", "Even though this is a DEC task, all the skills in it are transferable to university assignments."]
            ]
          }
        },
        {
          id: "a2",
          short: "The question",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a2.svg",
          title: "Analyse the Question",
          goal: "Find the content words, the limiting words and the task before you look at the sample essay.",
          blocks: [
            {
              type: "key",
              title: "Last week’s sources, today’s sample",
              points: [
                "The Week 3 input texts (Bowen et al., 2018; Vidican Auktor, 2020; Hyman &amp; Smith, 2023) were used to answer this question:",
                "<b>What is the key challenge in transitioning to a “green” job market?</b> Write 450–600 words."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d1-question-parts.svg",
              size: "wide",
              alt: "The question “What is the key challenge in transitioning to a green job market?” with colour labels. Content words (teal): challenge, transitioning, green job market. Limiting word (orange): key. Task (purple): What is. Below, four kinds of limiting words: time frames, place, people groups, extent.",
              caption: "<b>Content words</b> show the topic. <b>Limiting words</b> narrow it. Some words do both."
            },
            { type: "do", n: 1, who: "pair", text: "Limiting words come in four kinds. Sort the examples." },
            {
              type: "sort",
              id: "a2-sort",
              title: "What kind of limiting words?",
              buckets: [
                { label: "Time frame", letter: "T" },
                { label: "Place", letter: "P" },
                { label: "People group", letter: "G" },
                { label: "Extent (one aspect)", letter: "E" }
              ],
              items: [
                { text: "in the 21st century", answer: 0 },
                { text: "in the next decade", answer: 0 },
                { text: "within Europe", answer: 1 },
                { text: "in developing countries", answer: 1 },
                { text: "among teenagers", answer: 2 },
                { text: "people from low socio-economic backgrounds", answer: 2 },
                { text: "focusing on economic impacts", answer: 3 },
                { text: "the key challenge", answer: 3, why: "“Key” narrows the topic to ONE aspect: the most important challenge." }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Discuss the four questions. Write short notes. Then open the answers." },
            {
              type: "fields",
              fields: [
                { id: "a2-content", label: "1. What are the key content words?", rows: 1 },
                { id: "a2-limit", label: "2. Are there any limiting words?", rows: 1 },
                { id: "a2-task", label: "3. What is the question asking you to do? Which words show this?", rows: 2 },
                { id: "a2-func", label: "4. Which rhetorical functions will you need in your answer?", rows: 2 }
              ]
            },
            {
              type: "language",
              title: "Talk about a question",
              groups: [
                { label: "Content", phrases: ["<b>The key content words are</b> … and …", "<b>This tells me to read about</b> …"] },
                { label: "Limits", phrases: ["“Key” <b>narrows the focus to</b> …", "<b>We only need to discuss</b> one …"] },
                { label: "Task", phrases: ["<b>The question asks us to</b> identify … , choose … <b>and justify</b> …", "<b>We’ll need to</b> compare … <b>and explain</b> …"] }
              ]
            },
            { type: "tip", text: "Remember the word limit: <b>450–600 words</b>." }
          ],
          answers: {
            title: "Answers",
            items: [
              ["1. Content words", "challenge / transition to green job market"],
              ["2. Limiting words", "the “key” challenge"],
              ["3. Task", "“What is …” — identify challenges to the transition, choose the most significant one and justify your choice."],
              ["4. Rhetorical functions", "Comparing/contrasting challenges, explaining causal relationships, and evaluating how easy they would be to overcome."]
            ]
          }
        },
        {
          id: "a3",
          short: "By paragraph",
          minutes: 8,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a3.svg",
          title: "Activity 1 Analysing Rhetorical Function (By paragraph)",
          goal: "Check your homework: the writer’s thesis and the purpose of each paragraph.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Open <b>Sample 3.1</b> (button below, or your Student Book). Look at column three: <b>By paragraph</b>." },
            { type: "sources", ids: ["s31"] },
            { type: "do", n: 2, who: "pair", text: "Compare your homework with a partner. Match each paragraph to its purpose." },
            {
              type: "match",
              id: "a3-match",
              title: "What is each paragraph for?",
              hint: "Tap a paragraph, then its purpose.",
              left: ["Introduction", "Body 1", "Body 2", "Conclusion"],
              right: [
                "Give the context (background) of the topic and the writer’s position",
                "Compare one challenge (absence of a clear definition) and state reasons why it is not the key one",
                "Introduce the key challenge and the reasons to support position",
                "Re-state position and summarise reasons"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d1-essay-shape.svg",
              size: "wide",
              alt: "The shape of Sample 3.1 as four blocks. Introduction: context and position. Body 1: one challenge, not the key one (no clear definition). Body 2: the key challenge (workforce readiness, the skills gap). Conclusion: re-state position and summarise reasons. A rising arrow labelled “Therefore, a greater challenge …” links Body 1 to Body 2.",
              caption: "The essay climbs: a smaller challenge first, then <b>“Therefore, a greater challenge …”</b>"
            },
            {
              type: "talk",
              title: "Discuss",
              prompts: [
                "What is the writer’s position (thesis)?",
                "How is the sample organised? Why do you think the writer puts the smaller challenge first?"
              ]
            },
            {
              type: "language",
              groups: [
                { label: "Talk about structure", phrases: ["<b>The purpose of</b> Body 1 <b>is to</b> …", "Body 2 <b>builds on</b> Body 1 by …", "<b>It makes sense to</b> … <b>because</b> …"] }
              ]
            }
          ],
          answers: {
            title: "Answers",
            items: [
              ["Thesis", "The key challenge is the readiness of the workforce to adapt to the new market."],
              ["Organisation", "Introduction: context + position · Body 1: one challenge (no clear definition) and why it is not the key one · Body 2: the key challenge and reasons · Conclusion: re-state position and summarise reasons."]
            ]
          }
        },
        {
          id: "a4",
          short: "Intro + Body 1",
          minutes: 12,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a4.svg",
          title: "Activity 2 Analysing Rhetorical Function (By sentence) · Introduction and Body 1",
          goal: "Find the topic, issue, thesis and preview in the introduction, and follow the cause → effect chain in Body 1.",
          blocks: [
            {
              type: "key",
              title: "Two levels",
              points: [
                "<b>By paragraph:</b> what each paragraph does and how the paragraphs build one argument.",
                "<b>By sentence:</b> what each sentence does and how sentences link — <b>SO</b>, <b>BUT</b>, <b>BECAUSE</b>, <b>AND</b>.",
                "Write your notes in the middle column of the Deconstruction table in your Student Book."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d1-sentence-logic.svg",
              size: "wide",
              alt: "Four link cards. SO (an arrow forward): a result, e.g. resulting in, this leads to, hindering, therefore, hence. BUT (a turning arrow): contrast or concession, e.g. however, while. BECAUSE (an arrow back to a root): a reason, e.g. as, given. AND (a plus sign): more of the same, e.g. she adds, also, in fact.",
              caption: "The four links between sentences. The words in brackets come from Sample 3.1."
            },
            { type: "do", n: 1, who: "pair", text: "Read the <b>introduction</b>. Find the four parts and write them in the table." },
            {
              type: "table",
              id: "a4-intro",
              title: "Introduction",
              columns: ["Part", "What the writer says"],
              fixed: ["Topic", "Issue", "Writer’s thesis / position", "Preview points"]
            },
            { type: "do", n: 2, who: "pair", text: "Answer the questions about the introduction and Body 1. Find the words in the essay that prove each answer." },
            {
              type: "quiz",
              id: "a4-quiz",
              title: "Introduction and Body 1",
              items: [
                { q: "Intro · How does the first sentence introduce the topic?", options: ["With a statistic", "By giving a reason for the emergence of green jobs", "With a definition from a source", "With a question"], answer: "By giving a reason for the emergence of green jobs", why: "“The increasing necessity to adopt more environmentally sustainable business practices <b>has led to</b> the emergence of … ‘green jobs’.”" },
                { q: "Intro · Why does sentence 2 start with “While”?", options: ["To give an example", "To show time", "To concede that green jobs are positive but not without challenges", "To introduce the thesis"], answer: "To concede that green jobs are positive but not without challenges", why: "S2 narrows the focus to the issue and names one challenge (no clear definition). “While” = concession." },
                { q: "Intro · Sentence 3 has two purposes. Which words show them?", options: ["“However” → contrast and thesis; “given” → the reason (preview)", "“most significant” → example; “progress” → result", "“barrier” → topic; “market” → conclusion"], answer: "“However” → contrast and thesis; “given” → the reason (preview)", why: "S3 states the thesis (contrasting the challenge in S2) and gives a reason: “given the noticeable skills gap”." },
                { q: "Body 1 · What is the purpose of the topic sentence?", options: ["To introduce a challenge mentioned in the introduction", "To state the thesis", "To give evidence", "To offer a solution"], answer: "To introduce a challenge mentioned in the introduction", why: "“The ambiguity in defining what constitutes a ‘green job’ will likely pose somewhat of a challenge …”" },
                { q: "Body 1 · How do you know sentence 2 gives supporting evidence?", options: ["It uses “However”", "It starts “As outlined by” + references", "It has a number in it", "It is the longest sentence"], answer: "It starts “As outlined by” + references", why: "“As outlined by Bowen et al. (2018) and expanded upon by Vidican Auktor (2020) …”" },
                { q: "Body 1 · Why does the writer use “However” in sentence 4?", options: ["To add another problem", "To contrast with a possible solution", "To conclude the paragraph", "To disagree with Vidican Auktor"], answer: "To contrast with a possible solution", why: "“However, focusing on specific skill requirements for green jobs may be helpful here …”" },
                { q: "Body 1 · How does sentence 5 support this solution?", options: ["It gives evidence and shows how the solution could address the consequence of the challenge", "It gives a counter-argument", "It restates the thesis"], answer: "It gives evidence and shows how the solution could address the consequence of the challenge", why: "The Green General Skill (GGS) index has assisted in classifying jobs, “making it easier to understand and strategize …”" }
              ]
            },
            { type: "do", n: 3, who: "pair", text: "What are the <b>consequences</b> of not having a standard definition? Tap the language that shows the cause → effect relationship." },
            {
              type: "spot",
              id: "a4-spot",
              title: "Body 1 · The consequence chain",
              label: "Tap the words that link a cause to its effects.",
              paras: [
                "²[[As outlined by]] Bowen et al. (2018) and expanded upon by Vidican Auktor (2020), green jobs vary widely in their nature and scope, [[*resulting in]] difficulties developing a uniform definition. ³This [[*leads to]] classification inconsistencies and complications measuring green growth's labour market impact, [[*hindering]] effective workforce planning and policy implementation (Vidican Auktor, 2020). ⁴[[However]], focusing on specific skill requirements for green jobs may be helpful here as these skills provide more detailed insights into the necessary changes for transitioning to a green economy, [[including]] training needs (Vidican Auktor, 2020)."
              ]
            },
            {
              type: "talk",
              title: "Explain it to a classmate",
              prompts: [
                "Cover the essay. Explain the consequence chain in Body 1 using <b>SO … SO … SO …</b>",
                "Is the lack of a definition a serious challenge? Does the writer think so? How do you know?"
              ]
            }
          ],
          answers: {
            title: "Answers",
            items: [
              ["Topic", "emergence of the green economy and green jobs"],
              ["Issue", "challenges with definition of green jobs"],
              ["Thesis / position", "most significant challenge is the readiness of the workforce to adapt to the new market"],
              ["Preview points", "skills gap and training needed"],
              ["Consequences (Body 1)", "Classification inconsistencies · difficulty measuring green growth’s labour market impact · difficult to plan and implement policies. Language: “This leads to”, “hindering”."],
              ["Deconstruction notes", "Intro: S1 Topic – emergence of green jobs BECAUSE of need for sustainable practices · S2 Issue: these jobs can help (concession) BUT challenges, e.g. no clear definition · S3 BUT writer’s position: key challenge = readiness of workforce, BECAUSE of the skills gap. Body 1: S1 topic sentence – introduce a challenge · S2 (evidence) green jobs vary SO hard to have a uniform definition · S3 SO consequence chain · S4 BUT refutation – proposed solution BECAUSE … · S5 supporting evidence/example + SO the solution could address the consequence."]
            ]
          }
        },
        {
          id: "a5",
          short: "Body 2 + map",
          minutes: 20,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a5.svg",
          title: "Activity 2 Analysing Rhetorical Function (By sentence) · Body 2, conclusion and text map",
          goal: "Identify the purpose of each sentence in Body 2 and the conclusion, then complete the Sample 3.1 text map.",
          blocks: [
            { type: "do", n: 1, who: "pair", text: "Read <b>Body 2</b>. Match each sentence to its purpose. Make notes in the second column of your Deconstruction table." },
            {
              type: "match",
              id: "a5-match",
              title: "Body 2 · Purpose of each sentence",
              left: [
                "S1 · “Therefore, a greater challenge is likely to be around the readiness of the workforce …”",
                "S2 · “According to LinkedIn's global green skills report, there is a burgeoning demand …”",
                "S3 · “… only one in every eight workers have the necessary green skills …”",
                "S4 · “She adds that this skills gap is widening as …”",
                "S5 · “Hence, the transition demands not only new skills but also …”",
                "S6 · “However, while researchers using the O*NET database have established …”",
                "S7 · “Without this information, it is extremely difficult …”"
              ],
              right: [
                "SO (topic sentence): the KEY challenge is workforce readiness",
                "BECAUSE of the current skills gap",
                "Supporting evidence (1 in 8 workers have relevant skills)",
                "AND the skills gap is widening BECAUSE of rapid changes",
                "SO new skills AND reskilling of the current workforce required",
                "BUT concession: green jobs need a different skillset BUT there is a lack of research",
                "SO difficult to measure the skills gap SO knowledge of training needs is limited"
              ]
            },
            {
              type: "quiz",
              id: "a5-quiz",
              title: "Body 2 and the conclusion",
              items: [
                { q: "Why does Body 2 start with “Therefore”?", options: ["To add a new example", "To draw a conclusion from Body 1: the definition problem has a possible solution, so it is NOT the key challenge", "To contrast with the introduction"], answer: "To draw a conclusion from Body 1: the definition problem has a possible solution, so it is NOT the key challenge" },
                { q: "Why is the skills gap widening? Which word shows the reason?", options: ["Workers are retiring — “Hence”", "Sustainability requirements change rapidly — “as”", "There are too few jobs — “However”"], answer: "Sustainability requirements change rapidly — “as”" },
                { q: "What is the consequence of a large skills gap?", options: ["New skills training + reskilling of the existing workforce", "Fewer green jobs", "A new definition of green jobs"], answer: "New skills training + reskilling of the existing workforce", why: "Reskilling = training in a different field to replace outdated skills." },
                { q: "Which words show the consequences in sentence 7?", options: ["“Without this information” + “therefore”", "“According to” + “She adds”", "“In fact” + “making it easier”"], answer: "“Without this information” + “therefore”" },
                { q: "Conclusion · What is the purpose of sentence 1?", options: ["To restate why the first challenge (no clear definition) is NOT the key one", "To add new evidence", "To give a recommendation"], answer: "To restate why the first challenge (no clear definition) is NOT the key one", why: "“while developing a standardized definition … is a challenge …, there are tools available to assist.”" },
                { q: "Conclusion · What is the purpose of the final sentence?", options: ["To summarise the reasons and give a final thought/recommendation", "To introduce a new challenge", "To quote a source"], answer: "To summarise the reasons and give a final thought/recommendation", why: "It highlights the importance of proactive measures: “comprehensive research for planning the reskilling of the workforce will be critical.”" }
              ]
            },
            {
              type: "pairs",
              title: "Where is the thesis restated? Introduction → conclusion",
              items: [
                {
                  from: "However, the [[most significant barrier]] to achieving a smooth transition [[will undoubtedly be]] the [[readiness]] of the workforce to adapt to this new market …",
                  to: "Therefore, it is the [[preparedness]] of the workforce that [[will likely present]] the [[greatest challenge]] in the transition to a green job market.",
                  tag: "Paraphrase the thesis",
                  note: "Synonyms (barrier → challenge, readiness → preparedness), a new structure (“it is … that …”) and a more careful verb (undoubtedly → likely)."
                }
              ]
            },
            { type: "do", n: 2, who: "alone", text: "Now complete the <b>text map</b>. It shows the same logic as your deconstruction notes. Write <b>notes</b> — no more than <b>eight words</b> per box." },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d1-textmap.svg",
              alt: "The Body 1 text map of Sample 3.1 as a flowchart. Top: One noticeable challenge: lack of a clear definition. Green jobs vary in nature and scope. SO (resulting in) difficult to develop a standardised definition. SO (This leads to): empty boxes 1 and 2. SO (hindering): empty box 3. BUT (However) solution could help: empty box 4. BECAUSE (as): empty box 5. E.g. Green General Skill Index has assisted in classifying jobs. SO (making) it easier to plan.",
              title: "Body 1 text map",
              hint: "Tap a numbered box for a clue.",
              size: "wide",
              spots: [
                { x: 26, y: 50, label: "1", title: "Box 1 · SO (This leads to …)", text: "Body 1, sentence 3: the first thing the lack of a definition leads to.", color: "#2f7d6b" },
                { x: 74, y: 50, label: "2", title: "Box 2 · … and", text: "Sentence 3: complications in measuring …", color: "#2f7d6b" },
                { x: 50, y: 63, label: "3", title: "Box 3 · SO (hindering …)", text: "Sentence 3: what is hindered?", color: "#2f7d6b" },
                { x: 28, y: 77, label: "4", title: "Box 4 · BUT (However, …) solution", text: "Sentence 4: what may be helpful here?", color: "#c4562f" },
                { x: 72, y: 77, label: "5", title: "Box 5 · BECAUSE (as …)", text: "Sentence 4: why would it help?", color: "#3a58a0" }
              ]
            },
            {
              type: "limit",
              id: "a5-map",
              title: "Fill the text map",
              rule: "Write NO MORE THAN EIGHT WORDS for each box",
              max: 8,
              items: [
                { q: "Body 1 · SO (This leads to …) → box 1", accept: { need: 1, any: ["classif", "inconsisten"] }, model: "classification inconsistencies", why: "S3: “This leads to classification inconsistencies …”" },
                { q: "Body 1 · … and → box 2", accept: { need: 1, any: ["measur", "labour market", "labor market", "impact"] }, model: "complications measuring labour market impact", why: "S3: “… complications measuring green growth's labour market impact”" },
                { q: "Body 1 · SO (hindering …) → box 3", accept: { need: 1, any: ["planning", "polic"] }, model: "effective workforce planning & policy implementation", why: "S3: “hindering effective workforce planning and policy implementation”" },
                { q: "Body 1 · BUT (However, …) SOLUTION could help → box 4", accept: { need: 1, any: ["skill"] }, model: "focus on specific skill requirements", why: "S4: “However, focusing on specific skill requirements for green jobs may be helpful here …”" },
                { q: "Body 1 · BECAUSE (as …) → box 5", accept: { need: 1, any: ["insight", "training", "changes", "detail"] }, model: "skills give insights into changes & training needs", why: "S4: “… as these skills provide more detailed insights into the necessary changes … including training needs”" },
                { q: "Body 2 · Skills gap AND (adds) → box 6", accept: { need: 1, any: ["widen", "grow", "bigger", "increas", "larger"] }, model: "the skills gap is widening", why: "S4: “She adds that this skills gap is widening …”" },
                { q: "Body 2 · BECAUSE (as …) → box 7", accept: { need: 1, any: ["evolv", "chang", "requirement"] }, model: "sustainability requirements rapidly evolve in all industries", why: "S4: “… as environmental sustainability requirements rapidly evolve across all industries.”" },
                { q: "Body 2 · BUT (However, …) → box 8", accept: { need: 1, any: ["research", "not enough", "match", "capabilit"] }, model: "not enough research on skills match", why: "S6: “… there is still not enough research into how workforce capabilities match the skills required …”" },
                { q: "Body 2 · BUT (while …) → box 9", accept: { need: 1, any: ["analytic", "high-level", "high level", "speciali"] }, model: "green jobs need high-level analytical & specialised skills", why: "S6: “… green occupations tend to involve high-level analytical and specialized skills …”" },
                { q: "Body 2 · SO (Without this information, …) → box 10", accept: { need: 1, any: ["distance", "measur", "difficult", "hard"] }, model: "extremely difficult to measure skill distance", why: "S7: “Without this information, it is extremely difficult to construct a measure of skill distance …”" }
              ]
            },
            { type: "do", n: 3, who: "pair", text: "Retell Body 2 to your partner using only the text map and SO / BUT / BECAUSE / AND. Your partner checks the logic." },
            {
              type: "language",
              title: "Retell the logic of a paragraph",
              groups: [
                { label: "SO", phrases: ["<b>As a result,</b> …", "This <b>leads to</b> / <b>results in</b> …", "<b>Consequently,</b> …"] },
                { label: "BUT", phrases: ["<b>However,</b> the writer then shows that …", "<b>Although</b> …, …", "<b>While it is true that</b> …, …"] },
                { label: "BECAUSE", phrases: ["This happens <b>because</b> …", "<b>The main reason is that</b> …", "<b>As</b> requirements change, …"] },
                { label: "AND", phrases: ["<b>In addition,</b> …", "The writer <b>also</b> points out that …", "<b>What is more,</b> …"] }
              ]
            }
          ]
        },
        {
          id: "a6",
          short: "Hedging",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a6.svg",
          title: "Language Focus - Hedging",
          goal: "Use careful (cautious) language to show how certain you are — and find hedging in Sample 3.1.",
          blocks: [
            {
              type: "key",
              title: "What is hedging?",
              points: [
                "Hedging is when you use <b>careful or cautious language</b> to modify the position you put forward, making statements less direct or certain.",
                "Common ways: <b>might</b>, <b>could</b>, <b>possibly</b>, <b>to some extent</b>, <b>it appears that</b>, <b>be likely to</b>."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d1-stance-dial.svg",
              size: "wide",
              alt: "A dial from careful to certain. Careful (hedging): might, could, possibly, to some extent, may. Middle: likely, it appears that. Certain (boosting): undoubtedly, will, the most significant. A needle swings between them.",
              caption: "Turn the dial: hedge when the evidence is limited."
            },
            { type: "do", n: 1, who: "pair", text: "Compare the statement with the two hedged versions. How did the writer express caution?" },
            {
              type: "pairs",
              title: "From certain to careful",
              items: [
                { from: "Green jobs [[will dominate]] the workforce landscape in the coming years.", to: "[[There is a strong possibility that]] green jobs [[could]] dominate the workforce landscape in coming years.", tag: "Version 1" },
                { from: "Green jobs [[will dominate]] the workforce landscape in the coming years.", to: "[[It appears that]] green jobs [[are likely to]] play a predominant role in shaping the workforce landscape of the future.", tag: "Version 2" }
              ]
            },
            {
              type: "flip",
              title: "Why is hedging important in academic writing?",
              hint: "Guess, then turn the card.",
              items: [
                { front: "Precision", back: "It allows you to make your position <b>precise</b>." },
                { front: "Reliability", back: "It shows you are considering the <b>reliability and limitations</b> of your information." },
                { front: "Balance", back: "It makes your claims sound more <b>balanced and considerate</b>." },
                { front: "Protection", back: "It <b>protects you from criticism</b> by avoiding overly strong or definite statements." },
                { front: "Respect", back: "It shows you are aware of the <b>complexity</b> of a topic and respectful of other viewpoints." }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Look at Sample 3.1 again (the Language Analysis copy in your Student Book). Tap the hedging language." },
            {
              type: "spot",
              id: "a6-spot",
              title: "Find the hedges in Sample 3.1",
              label: "Tap the words that make a claim more careful.",
              paras: [
                "Intro · ²While the creation or classification of such jobs [[*may]] be a positive step forward in meeting sustainability goals, the transition towards a green job market is marked by [[significant]] challenges … ³However, the [[most significant]] barrier to achieving a smooth transition will [[undoubtedly]] be the readiness of the workforce …, which [[*has the potential to]] hinder progress.",
                "Body 1 · ¹The ambiguity in defining what constitutes a “green job” [[*will likely]] pose [[*somewhat of]] a challenge, [[*at least initially]]. … ⁴However, focusing on specific skill requirements for green jobs [[*may]] be helpful here …",
                "Body 2 · ¹Therefore, a greater challenge [[*is likely to]] be around the readiness of the workforce to adapt to green jobs. … ⁶… green occupations [[*tend to]] involve high-level analytical and specialized skills … ⁷Without this information, it is [[extremely]] difficult …",
                "Conclusion · ²Therefore, it is the preparedness of the workforce that [[*will likely]] present the greatest challenge … ³The skills gap [[*may]] impede a smooth transition …"
              ]
            },
            { type: "do", n: 3, who: "alone", text: "Hedge these strong claims about eco-tourism. Write one careful sentence for each. The lights turn on when you hedge." },
            {
              type: "detect",
              id: "a6-dt",
              title: "Make it careful",
              hint: "Use at least two different hedges in each sentence.",
              checks: [
                { label: "Modal verb", color: "#2f7d6b", any: ["may", "might", "could", "can"] },
                { label: "Likely / possible", color: "#3a58a0", any: ["likely", "possib", "probabl", "perhaps"] },
                { label: "Appears / seems / tends", color: "#7a4a8c", any: ["appear", "seem", "tend", "suggest", "to some extent", "in some cases", "often"] }
              ],
              items: [
                { task: "Eco-tourism protects wildlife.", rows: 2, placeholder: "It appears that eco-tourism could …", model: "In some cases, eco-tourism may help to protect wildlife." },
                { task: "Tourists change their habits after an eco-holiday.", rows: 2, model: "It seems unlikely that most tourists change their habits after an eco-holiday." },
                { task: "Eco-tourism will end poverty in rural areas.", rows: 2, model: "Eco-tourism could possibly reduce poverty in some rural areas, at least to some extent." }
              ]
            },
            {
              type: "language",
              title: "Hedging toolkit",
              groups: [
                { label: "Modal verbs", phrases: ["may / might / could + verb", "can, in some cases, …"] },
                { label: "Adverbs + adjectives", phrases: ["<b>possibly</b>, <b>probably</b>, <b>perhaps</b>", "<b>is likely to</b> / <b>is unlikely to</b>"] },
                { label: "Introductory phrases", phrases: ["<b>It appears that</b> …", "<b>There is a strong possibility that</b> …", "<b>The evidence suggests that</b> …"] },
                { label: "Limiting phrases", phrases: ["<b>to some extent</b>", "<b>at least initially</b>", "<b>in many cases</b> / <b>tend to</b>"] }
              ]
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 2A · Reading to write · 150 min ───────────────────────── */
    {
      id: "rtw",
      number: "02",
      code: "2A",
      minutes: 150,
      tone: "blue",
      art: "dec10/assets/week4/s-d1-rtw.svg",
      title: "Reading to write",
      subtitle: "Ecotourism and the Sustainable Development Goals (Spenceley & Rylance, 2021)",
      outcome: "You can extract main ideas and relevant evidence from a text, understand the use of signalling nouns to build a cohesive text, and evaluate the feasibility of proposed initiatives.",
      activities: [
        {
          id: "b1",
          short: "Your views",
          minutes: 15,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d1-b1.svg",
          title: "Preliminary Guided Discussion",
          goal: "Think about what you know and feel about ecotourism — and write it down for Friday’s “Have your views changed?” lesson.",
          blocks: [
            {
              type: "key",
              title: "Your views today — and on Friday",
              points: [
                "This week’s topic is <b>ecotourism</b>.",
                "Write your ideas now. On Friday you will ask: <b>Have my views changed?</b>",
                "Changing your view after you read and listen is part of <b>criticality</b>."
              ]
            },
            { type: "do", n: 1, who: "alone", text: "<b>Prepare to discuss (5 minutes).</b> Think about the questions. Write your ideas here and in your Student Book." },
            {
              type: "cards",
              title: "Questions",
              numbered: true,
              items: [
                { label: "Meaning", text: "What do you understand by <i>ecotourism</i>?" },
                { label: "Experience", text: "Have you experienced this form of tourism yourself? What is your attitude towards it?" },
                { label: "Stakeholders", text: "Who do you think are the various stakeholders? How might their interests conflict with each other?" }
              ]
            },
            {
              type: "fields",
              fields: [{ id: "b1-notes", label: "Notes: my views on ecotourism (Monday)", rows: 5, placeholder: "1. Ecotourism = …\n2. My experience / attitude …\n3. Stakeholders: … They might disagree about …" }]
            },
            { type: "tip", text: "Stakeholders in this week’s texts: <b>tourism companies</b>, <b>local and national governments</b>, <b>local communities</b> (e.g. farmers, small businesses, Indigenous populations) and <b>tourism developers</b>." },
            { type: "do", n: 2, who: "group", text: "<b>Discuss the three questions with your group (10 minutes).</b> Everyone speaks for each question." },
            {
              type: "language",
              title: "Share your views",
              groups: [
                { label: "Give a view", phrases: ["<b>As far as I know,</b> ecotourism means …", "<b>From my experience,</b> …", "<b>I tend to think</b> that …"] },
                { label: "Stakeholders", phrases: ["<b>One group with a stake in this is</b> …", "<b>Their interests might clash with</b> … <b>because</b> …", "<b>What benefits</b> developers <b>may harm</b> …"] },
                { label: "Respond", phrases: ["<b>That’s a good point, and</b> …", "<b>I see what you mean, but</b> …", "<b>In my country, it’s a bit different:</b> …"] }
              ]
            }
          ]
        },
        {
          id: "b2",
          short: "Warmer",
          minutes: 5,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b2.svg",
          title: "Warmer: Instagram VS Reality",
          goal: "Talk about places you have visited, then brainstorm the benefits and drawbacks of tourism.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-insta-reality.svg",
              size: "wide",
              alt: "Two phone screens side by side. Left, “Instagram”: an empty turquoise lagoon at sunset with one swimmer and a heart icon. Right, “Reality”: the same lagoon full of crowds, selfie sticks, boats, rubbish and a long queue.",
              caption: "Instagram or reality?"
            },
            {
              type: "talk",
              title: "Think about popular tourist destinations you have been to",
              prompts: [
                "Were these destinations how you imagined them to be? Why or why not?",
                "Tell your partner which one was your most memorable and why."
              ]
            },
            { type: "do", n: 1, who: "pair", text: "Brainstorm the benefits and drawbacks of tourism. Think about the impacts on the <b>local community</b>, the <b>economy</b> and the <b>environment</b>." },
            {
              type: "table",
              id: "b2-tab",
              title: "Tourism: benefits and drawbacks",
              columns: ["Impact on …", "Benefits", "Drawbacks"],
              fixed: ["the local community", "the economy", "the environment"]
            },
            {
              type: "language",
              groups: [
                { label: "Compare expectation and reality", phrases: ["<b>It was nothing like</b> the photos.", "<b>It was even better than I expected</b> because …", "<b>What I didn’t expect was</b> …"] },
                { label: "Benefits and drawbacks", phrases: ["<b>On the plus side,</b> tourism creates …", "<b>The downside is that</b> …", "<b>It can lead to</b> …"] }
              ]
            }
          ]
        },
        {
          id: "b3",
          short: "Vocabulary",
          minutes: 15,
          grouping: "Groups → Class",
          art: "dec10/assets/week4/v/v-d10w4d1-b3.svg",
          title: "Vocabulary",
          goal: "Compare your idea of ecotourism with a definition, then become the expert on one or two words from the text.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Compare what you wrote about ecotourism with this definition. What is the same? What is new?" },
            {
              type: "model",
              title: "A definition of ecotourism",
              text: "Ecotourism is now defined as “responsible travel to natural areas that conserves the environment, sustains the well-being of the local people, and involves interpretation and education” (TIES, 2015). Education is meant to be inclusive of both staff and guests.",
              note: "Source: The International Ecotourism Society"
            },
            {
              type: "fields",
              fields: [{ id: "b3-def", label: "What is the same as my idea? What is new for me?", rows: 2 }]
            },
            { type: "do", n: 2, who: "group", text: "Your teacher gives you <b>one or two words</b>. You have <b>5 minutes</b>: look them up and paraphrase the definition. Then explain your word to your group with a <b>real-life example</b>." },
            {
              type: "cards",
              title: "Words and phrases from the text",
              items: [
                { text: "agrotourism" }, { text: "deforestation" }, { text: "endangered species" }, { text: "biodiversity" },
                { text: "conservation" }, { text: "corporate social responsibility" }, { text: "sustainable agriculture" }
              ]
            },
            {
              type: "table",
              id: "b3-tab",
              title: "My expert word(s)",
              columns: ["Word", "Meaning (in my own words)", "Real-life example"],
              rows: 2
            },
            {
              type: "language",
              title: "Explain a word",
              groups: [
                { label: "Define", phrases: ["<b>Basically, it means</b> …", "<b>It refers to</b> …", "<b>It’s a kind of</b> … <b>that</b> …"] },
                { label: "Give an example", phrases: ["<b>A good example of this is</b> …", "<b>For instance, in my country</b> …", "<b>You can see this when</b> …"] },
                { label: "Check", phrases: ["<b>Does that make sense?</b>", "<b>Can you think of another example?</b>"] }
              ]
            },
            { type: "do", n: 3, who: "class", text: "Check your understanding as a class: match the words to their meanings." },
            {
              type: "match",
              id: "b3-match",
              title: "Check understanding",
              left: ["agrotourism", "deforestation", "endangered species", "biodiversity", "conservation", "corporate social responsibility", "sustainable agriculture"],
              right: [
                "holidays on farms where tourists learn about farming and buy local products",
                "the cutting down of forests over a large area",
                "animals or plants at risk of disappearing for ever",
                "the variety of plants and animals in a place",
                "the protection of nature, plants and animals",
                "a company’s duty to help society and the environment, not only make profit",
                "farming that meets today’s food needs without damaging the land for the future"
              ]
            }
          ]
        },
        {
          id: "b4",
          short: "Gist",
          minutes: 15,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b4.svg",
          title: "Reading for gist",
          goal: "Read the introduction, think about purpose and audience, predict, then skim the section for your goal.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Read the <b>introduction only</b> (Paragraph A). Highlight anything important." },
            {
              type: "passage",
              id: "b4-a",
              title: "Spenceley & Rylance (2021) · Introduction",
              text: "A. In 2015, governments adopted the 2030 Agenda for Sustainable Development and the Sustainable Development Goals (SDGs). The agenda established a global framework to end extreme poverty, fight inequality and injustice, and remedy climate change. Building on the Millennium Development Goals (MDGs), 17 Sustainable Development Goals and 169 associated targets were agreed. Tourism has been included within the targets for Goal 8 on decent work and economic growth, Goal 12 on responsible consumption and production, and Goal 14 on life below water. However, tourism has the potential to contribute, directly or indirectly, to all of the goals (UNWTO, 2015). The following two sections present 2 of the SDGs and how they relate to tourism."
            },
            {
              type: "fields",
              fields: [{ id: "b4-why", label: "1. Why do you think this text was written? Who is the intended audience?", rows: 2 }]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d1-sdg-tourism.svg",
              alt: "Two large goal badges beside a globe with a suitcase: Goal 2 Zero hunger (a bowl and a wheat stalk) and Goal 3 Good health and wellbeing (a heart with a pulse line). Smaller badges for Goals 8, 12 and 14, where tourism is named in the targets.",
              title: "The two goals in the text",
              hint: "Tap each goal.",
              size: "wide",
              spots: [
                { x: 22, y: 40, label: "2", title: "Goal 2: Zero hunger", text: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.", color: "#c99a2e" },
                { x: 78, y: 40, label: "3", title: "Goal 3: Good health and wellbeing", text: "Ensure healthy lives and promote wellbeing for all at all ages.", color: "#3f8f4a" },
                { x: 50, y: 86, label: "+", title: "Goals 8, 12 and 14", text: "Tourism is named in the targets of these goals — but the text says it can contribute to <b>all</b> of the goals.", color: "#2a6fb0" }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "<b>Prediction:</b> How do you think these goals could be met by adopting ecotourism principles? Discuss with a partner." },
            {
              type: "fields",
              fields: [{ id: "b4-pred", label: "2. Our prediction", rows: 3, placeholder: "Goal 2: tourists could … / Goal 3: …" }]
            },
            { type: "do", n: 3, who: "alone", text: "Your teacher gives you <b>ONE goal</b>. Skim the section for that goal (focus on the <b>topic sentences</b>). Did you have similar ideas?" },
            { type: "sources", ids: ["ecosdg"] },
            {
              type: "language",
              groups: [
                { label: "Purpose and audience", phrases: ["<b>The text seems to be written for</b> …", "<b>Its main purpose is to</b> inform / explain / persuade …", "<b>Judging by</b> the citations, the audience is probably …"] },
                { label: "Check predictions", phrases: ["<b>We were right about</b> …", "<b>We didn’t expect</b> …", "<b>The topic sentence suggests that</b> …"] }
              ]
            }
          ],
          answers: {
            title: "Answers (question 3)",
            items: [
              ["Goal 2: Zero hunger", "Promoting the production and sale of local foods for hotels and restaurants diversifies farmers’ income stream. Marine-protected areas, which are visited by tourists, create local jobs and help locals manage and preserve their fishing resources."],
              ["Goal 3: Good health and well-being", "Preserving biodiverse areas has health benefits. Tourism helps to fund conservation efforts to protect these biodiverse areas, and CSR initiatives by ecotourism companies help to fund public health projects."]
            ]
          }
        },
        {
          id: "b5",
          short: "Jigsaw notes",
          minutes: 25,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d1-b5.svg",
          title: "Reading for note taking · Activity 1 Jigsaw reading",
          goal: "Read the section for your goal carefully and take group notes: main ideas, examples, consequences and your own thoughts.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-jigsaw.svg",
              size: "wide",
              alt: "A jigsaw diagram. Step 1: home groups 1, 2 and 3 read Goal 2 (yellow); groups 4, 5 and 6 read Goal 3 (green). Step 2: students pair up with someone from the other colour and swap their notes, so each pair completes the whole puzzle.",
              caption: "Now: read and take notes on <b>your</b> goal. Next: teach it to someone who read the other goal."
            },
            { type: "do", n: 1, who: "group", text: "Read <b>your</b> section carefully. Take notes together in <b>your</b> table only. Use symbols and abbreviations. In the last column, write what <b>you</b> think: any issues? questions? will it work?" },
            {
              type: "table",
              id: "b5-g2",
              title: "Groups 1 / 2 / 3 · Goal 2: Zero hunger (Paragraphs B–C)",
              columns: ["Main idea", "Examples & details", "Consequence / impact", "Thoughts / challenges / effectiveness?"],
              fixed: ["1.", "2."]
            },
            {
              type: "table",
              id: "b5-g3",
              title: "Groups 4 / 5 / 6 · Goal 3: Good health and wellbeing (Paragraphs D–F)",
              columns: ["Main idea", "Examples, evidence & details", "Consequence / impact", "Thoughts / challenges / effectiveness?"],
              fixed: ["1.", "2.", "3."]
            },
            { type: "do", n: 2, who: "alone", text: "Practise squeezing sentences from the text into notes. Stay under the character limit." },
            {
              type: "squeeze",
              id: "b5-sq",
              title: "Squeeze it!",
              hint: "Keep numbers, places and key terms. Cut the rest.",
              items: [
                { text: "Farming and using natural resources are still the main sources of jobs in many rural areas, especially in poor communities in developing countries, where they provide 55% of the employment and are the primary source of income.", max: 60, model: "Poor rural areas: farming + nat. res. = 55% of jobs" },
                { text: "These areas also allow for tourism activities like whale shark viewing and manta ray diving, which create jobs for local people.", max: 45, model: "Whale shark / manta ray tours → local jobs" },
                { text: "With the COVID-19 pandemic, visiting natural areas became even more important to help ease the stress of lockdowns.", max: 40, model: "COVID: nature visits ↓ lockdown stress" }
              ]
            },
            {
              type: "language",
              title: "Take notes as a group",
              groups: [
                { label: "Agree on a point", phrases: ["<b>So the main idea here is</b> …, <b>right?</b>", "<b>Shall we write it as</b> …?", "<b>Can we shorten that to</b> …?"] },
                { label: "Add your thoughts", phrases: ["<b>I wonder whether</b> this would work in …", "<b>One problem I can see is</b> …", "<b>It’s not clear who</b> …"] }
              ]
            }
          ],
          answers: {
            title: "Answers",
            items: [
              ["Goal 2 · Idea 1", "Tourism promotes sustainable agriculture — encouraging the production and consumption of local foods by the tourism industry. Examples: agrotourism (UNWTO & UNDP, 2017) gives a reciprocal benefit — revenue for farmers, education and experience for tourists; especially important for poor communities in developing countries, as 55% of employment comes from agriculture and natural resource use (Schiere & Kater, 2001). Consequence: diversified income streams; poverty reduction."],
              ["Goal 2 · Idea 2", "Marine-protected areas for both fishers and tourists can alleviate hunger (through job creation and better management of fishing resources). Examples: small community-managed marine protected areas support both local subsistence and tourism activities; e.g. ecotourism company “andBeyond” is teaching local communities to fish responsibly and protect endangered species. Consequence: job creation; better management of fishing resources."],
              ["Goal 3 · Idea 1", "Health benefits of protected areas. Evidence: according to Sparkes & Woods (2009), visiting biodiverse areas can help address lifestyle health challenges. Consequence: disease prevention."],
              ["Goal 3 · Idea 2", "Tourist revenue helps to fund conservation efforts, protecting biodiversity. Example: adventure tourism in southern African transfrontier conservation areas. Consequence: job creation; highlights the social benefits of biodiversity preservation."],
              ["Goal 3 · Idea 3", "The CSR initiatives by ecotourism companies help fund public health projects. Example: the Africa Foundation collects donations from tourists to support community projects such as rural clinics, HIV/AIDS awareness workshops and the provision of clean water. Consequence: improvements in public health."],
              ["Thoughts column", "Your own ideas: questions, issues, and whether these approaches would be effective in reaching the goals."]
            ]
          }
        },
        {
          id: "b6",
          short: "Share",
          minutes: 15,
          grouping: "New pairs",
          art: "dec10/assets/week4/v/v-d10w4d1-b6.svg",
          title: "Activity 2 Sharing Understanding (Summarise and Paraphrase)",
          goal: "Teach your goal to a partner from the other group using your notes only — and take notes on theirs.",
          blocks: [
            {
              type: "steps",
              items: [
                { who: "pair", text: "Find a partner who read the <b>other</b> goal." },
                { who: "pair", text: "Using your <b>notes only</b> (no text!), summarise your goal in your own words: main ideas, one example each, and the impact." },
                { who: "alone", text: "While your partner speaks, take notes any way you like (laptop or paper). Ask one question to check." }
              ]
            },
            {
              type: "language",
              title: "Summarise and paraphrase out loud",
              groups: [
                { label: "Start", phrases: ["<b>My section is about</b> Goal …, <b>which aims to</b> …", "<b>Spenceley and Rylance (2021) explain that</b> …"] },
                { label: "Main ideas", phrases: ["<b>The first main idea is that</b> …", "<b>The second way tourism helps is</b> …", "<b>For example,</b> … / <b>A good example is</b> …"] },
                { label: "Impact", phrases: ["<b>As a result,</b> …", "<b>This leads to</b> …", "<b>The overall impact is</b> …"] },
                { label: "Check", phrases: ["<b>So, if I understand correctly,</b> …?", "<b>Could you say more about</b> …?", "<b>Who said that</b> — is there a citation?"] }
              ]
            },
            {
              type: "fields",
              fields: [{ id: "b6-notes", label: "My notes on my partner’s goal", rows: 5 }]
            },
            { type: "do", n: 1, who: "class", text: "<b>Follow-up:</b> Do you think local communities and environments <b>always</b> benefit from ecotourism? Share the questions, thoughts and challenges from the last column of your table." },
            {
              type: "talk",
              title: "Do local communities always benefit?",
              prompts: [
                "Think about local people’s daily lives and traditions.",
                "Think about the number of visitors and the wildlife.",
                "Think about land, water and prices for local people."
              ]
            },
            {
              type: "flip",
              title: "Possible problems (open after you discuss)",
              hint: "Did your group think of these?",
              items: [
                { front: "Daily life", back: "Change in social structure; Indigenous people may give up traditional livelihoods to become tour guides." },
                { front: "Authenticity", back: "Loss of authenticity — cultural events staged at hotels (imitation)." },
                { front: "Permission", back: "Eco-tourism activities developed without permission from local people." },
                { front: "Too many visitors", back: "High traffic disturbs wildlife — a destination could be ‘loved to death’." },
                { front: "Habitat", back: "Development could encroach on surrounding areas; infrastructure can invade pristine regions." },
                { front: "Resources", back: "Competition for limited resources — increased expense for locals." }
              ]
            }
          ]
        },
        {
          id: "b7",
          short: "Test practice",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b7.svg",
          title: "Building Understanding",
          goal: "Answer test-style questions on the whole text.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Choose the best option. Then compare with a partner and show the line in the text that proves your answer." },
            {
              type: "quiz",
              id: "b7-quiz",
              title: "Questions 1–6 · Choose the best option",
              items: [
                { q: "1. To describe the role of tourism in achieving the SDGs, the author", options: ["A · details the numerous economic advantages of tourism.", "B · shows how tourism can contribute to all the SDGs indirectly.", "C · shows how tourists can work with local communities to improve living standards.", "D · emphasizes tourism's role in cultural preservation."], answer: "B · shows how tourism can contribute to all the SDGs indirectly.", why: "Paragraph A: “tourism has the potential to contribute, directly or indirectly, to all of the goals.”" },
                { q: "2. Regarding the relationship between tourism and local communities, the text", options: ["A · shows that local communities can sometimes be exploited by the tourism industry.", "B · describes how tourism can impact local agricultural and medicinal traditions.", "C · outlines how tourism supports local economies and health through biodiversity conservation.", "D · encourages the interaction between tourists and local communities."], answer: "C · outlines how tourism supports local economies and health through biodiversity conservation.", why: "Goals 2 and 3: income, jobs, health benefits and conservation." },
                { q: "3. According to the text, agrotourism contributes to sustainable agriculture by", options: ["A · effectively managing tropical protected areas.", "B · limiting the import of some food items for tourism.", "C · encouraging the sales and production of local foods.", "D · educating tourists about the local land and sustainability."], answer: "C · encouraging the sales and production of local foods.", why: "Paragraph B: “promoting the production of local foods … and increasing the sales of local products to tourists.”" },
                { q: "4. According to the text, having diversified income streams benefits poor communities because it", options: ["A · encourages reliance on one source of income.", "B · gives farmers greater opportunities to sell their produce.", "C · increases competition within the community.", "D · lowers the likelihood of experiencing poverty."], answer: "D · lowers the likelihood of experiencing poverty.", why: "Paragraph B: “… reduces their risks of poverty.”" },
                { q: "5. Marine-protected areas contribute to reducing hunger by", options: ["A · providing unlimited fishing resources.", "B · boosting fish populations and local fishing efforts.", "C · promoting international fishing efforts and tourism activities.", "D · restricting human activity around these marine environments."], answer: "B · boosting fish populations and local fishing efforts.", why: "Paragraph C: “safe spaces where fish can breed and grow. This supports local fishing …”" },
                { q: "6. According to the text, what role do sports tourism events play in conservation areas? They", options: ["A · finance and demonstrate the benefits of environmental protection.", "B · generate interest in participating in mountain biking.", "C · teach local communities how to protect their environment.", "D · raise awareness of the importance of maintaining good health."], answer: "A · finance and demonstrate the benefits of environmental protection.", why: "Paragraph E: they help fund conservation and showcase the social benefits of preserving biodiversity." }
              ]
            },
            { type: "do", n: 2, who: "alone", text: "<b>Questions 7–9.</b> Based on Paragraphs D, E and F, complete the student notes. There are two extra options." },
            {
              type: "cloze",
              id: "b7-cloze",
              title: "Student notes",
              text: "Tourism in biodiverse areas supports {{1}} by reducing stress and preventing diseases. Sports tourism in these areas raises funds for conservation and benefits local communities through {{2}}. Also, tourism businesses often design their CSR {{3}} with public health benefits in mind.",
              options: ["economic activity", "social responsibility", "public health", "funds", "programs"],
              answers: ["public health", "economic activity", "programs"]
            },
            {
              type: "language",
              groups: [
                { label: "Justify an answer", phrases: ["<b>I chose</b> B <b>because the text says</b> “…”", "<b>Option</b> A <b>is a trap</b>: the text mentions …, but …", "<b>The key word here is</b> …"] }
              ]
            }
          ],
          answers: {
            title: "Answers",
            items: [
              ["Questions 1–6 (suggested — checked against the text)", "1 B · 2 C · 3 C · 4 D · 5 B · 6 A"],
              ["Questions 7–9", "7 public health · 8 economic activity · 9 programs"]
            ]
          }
        },
        {
          id: "b8",
          short: "Cohesion",
          minutes: 35,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b8.svg",
          title: "Language focus: Cohesion",
          goal: "Use signalling nouns and referents to link your ideas — and to show your stance.",
          blocks: [
            {
              type: "key",
              title: "Signalling nouns",
              points: [
                "<b>Cohesion</b> = the links that connect one idea to another.",
                "A <b>signalling noun</b> (summary phrase, general noun) sums up an idea from earlier: a phrase, a sentence or a whole paragraph.",
                "It can <b>classify</b> the earlier idea (<i>these areas</i>) or show the writer’s <b>stance</b> (<i>this problem</i>, <i>this improvement</i>)."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d1-signal-nouns.svg",
              size: "wide",
              alt: "Three sentences from Paragraph C. Curved arrows jump back from the signalling nouns “These areas”, “such initiatives” and “these areas” to the ideas they sum up: small community-managed marine protected areas; local fishing and tourism activities; Tanzania and Mozambique.",
              caption: "A signalling noun points <b>back</b>. <b>this / these / such</b> + a general noun."
            },
            { type: "do", n: 1, who: "pair", text: "Read Paragraph C. Tap the signalling nouns (with their determiner)." },
            {
              type: "spot",
              id: "b8-spot1",
              title: "Paragraph C · Signalling nouns",
              label: "Tap the signalling nouns.",
              paras: [
                "C. Marine-protected areas used by tourists and fishers help reduce hunger in several ways. For example, small community-managed marine protected areas can provide safe spaces [[where]] fish can breed and grow. [[This]] supports local fishing [[which]] many communities rely on for food. [[*These areas]] also allow for tourism activities like whale shark viewing and manta ray diving, which create jobs for local people. A luxury ecotourism company, “andBeyond,” is working with local communities and authorities in Tanzania and Mozambique to develop [[*such initiatives]] (Braack &amp; Mearns, 2017). In [[*these areas]], there are also efforts to stop overfishing and the killing of endangered marine species, to protect reefs, and to teach local communities how to manage [[their]] fishing resources better and fish responsibly (Braack &amp; Mearns, 2017)."
              ]
            },
            {
              type: "quiz",
              id: "b8-q1",
              title: "Look closer",
              items: [
                { q: "What do you notice about the words that come with these nouns?", options: ["They come after an adjective like “big”", "They usually come with “the” or a determiner such as this/these, that/those or such", "They are always plural"], answer: "They usually come with “the” or a determiner such as this/these, that/those or such", why: "The determiner tells the reader: look back — this refers to something already said." }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "What does each signalling noun sum up? Match." },
            {
              type: "match",
              id: "b8-match",
              title: "Signalling noun → information",
              left: ["(these) areas", "(such) initiatives", "(these) areas — the second one"],
              right: ["small community-managed marine protected areas", "local fishing and tourism activities", "the places in Tanzania and Mozambique where andBeyond works"]
            },
            {
              type: "key",
              title: "Referents",
              points: [
                "You can also link back with <b>referents</b>: demonstrative pronouns without a noun (<i>this</i>, <i>these</i>), relative pronouns (<i>which</i>, <i>where</i>, <i>who</i>) and personal pronouns (<i>it</i>, <i>they</i>).",
                "Academic writing mostly uses <b>it</b> and <b>they</b>, because it refers to facts, ideas and processes rather than particular people."
              ]
            },
            { type: "do", n: 3, who: "pair", text: "Read Paragraph C again. What do the words in bold refer back to? Write your answers." },
            {
              type: "table",
              id: "b8-ref",
              title: "Referents in Paragraph C",
              columns: ["Referent", "It refers back to …"],
              fixed: ["where", "This", "which (local fishing which …)", "which (… manta ray diving, which …)", "their"]
            },
            { type: "do", n: 4, who: "alone", text: "Choose a summary word and add <b>this</b> or <b>these</b> to complete each sentence." },
            {
              type: "cloze",
              id: "b8-cloze",
              title: "Complete with this / these + a summary word",
              list: true,
              text: "Many eco-tourism initiatives try to minimise tourist impact. {{1}} contribute to the preservation of biodiversity and promote sustainable use of ecosystem services.\nEco-tourism focuses on sustainable travel practices that respect local ecosystems and communities. {{2}} not only conserves the environment but also supports local cultures and economies.\nThe funds from CSR initiatives can facilitate the building of better health services for local communities. {{3}} in public health have the potential to increase life expectancy in developing countries.\nA study of 49 tropical protected areas has shown that poor communities in developing countries are becoming more isolated due to deforestation. {{4}} suggests a need for greater focus on broader local economic and social issues.\nIn some marine environments, the overfishing of local stocks due to economic necessity has led to the depletion of fish populations. {{5}} could be overcome by establishing small community-managed marine protected areas.",
              options: ["These efforts", "This approach", "These improvements", "This problem", "This challenge"],
              answers: ["These efforts", "This approach", "These improvements", "This problem", "This challenge"]
            },
            {
              type: "grid",
              id: "b8-grid",
              title: "In which sentences does the signalling noun reveal your stance?",
              rows: ["1 · These efforts", "2 · This approach", "3 · These improvements", "4 · This problem", "5 · This challenge"],
              columns: ["Shows stance?"],
              options: ["Yes", "No"],
              answers: [["Yes"], ["No"], ["Yes"], ["Yes"], ["Yes"]]
            },
            { type: "tip", text: "Nouns after <b>this/these</b> can reveal your opinion. With them you show not only what you know, but also what you <b>think</b>." },
            { type: "do", n: 5, who: "pair", text: "Challenge: find more signalling nouns and referents in Paragraphs D–F, and in Sample 3.1. Tap them." },
            {
              type: "spot",
              id: "b8-spot2",
              title: "Paragraphs E–F and Sample 3.1",
              label: "Tap the signalling nouns and referents that point back.",
              paras: [
                "E. Promoting sports tourism is gaining interest in protected areas as [[*it]] helps generate revenue for conservation … A great example of [[*this]] is seen in the adventure tourism events … [[*These]] include the Tour de Tuli … [[*These sports events]] not only help in funding conservation efforts but also contribute to [[local economies]] …",
                "F. … Many tourism businesses use [[*their]] CSR funds to help develop [[rural clinics]] … A good example is the Africa Foundation, [[*which]] directs donations … For over twenty years, [[*these contributions]] have supported health initiatives …",
                "Sample 3.1 · ²While the creation or classification of [[*such jobs]] may be a positive step forward … ³However, … the readiness of the workforce to adapt to [[*this new market]] … ⁴However, focusing on specific skill requirements for green jobs may be helpful here as [[*these skills]] provide … ⁴She adds that [[*this skills gap]] is widening …"
              ]
            }
          ],
          answers: {
            title: "Answers",
            items: [
              ["Purpose", "(these) areas → classify · (such) initiatives → classify (& possibly stance) · (these) areas (2nd) → classify. (The Teacher’s Book version shows “these destinations” here; the course text reads “these areas”.)"],
              ["Referents", "where → safe spaces (where fish can breed and grow) · This → safe spaces where fish can breed and grow · which → local fishing · which → tourism activities like whale shark viewing and manta ray diving · their → local communities"],
              ["Stance", "Sentences 1, 3, 4 and 5 (efforts, improvements, problem, challenge)."],
              ["More examples", "B: they (49 tropical protected areas) · D: They (Parks Victoria, Medibank Australia and the National Heart Foundation) · E: it (sports tourism), this (sports tourism shows the positive impact …), These (adventure tourism events), These sports events · F: their (tourism businesses’), which (the Africa Foundation), these contributions · Sample 3.1: such jobs, this new market, these skills, this skills gap."]
            ]
          }
        },
        {
          id: "b9",
          short: "Criticality",
          minutes: 15,
          grouping: "Groups → New groups",
          art: "dec10/assets/week4/v/v-d10w4d1-b9.svg",
          title: "Criticality",
          goal: "Evaluate an initiative against overtourism: is it appropriate, feasible and effective?",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week4/d1-overtourism.svg",
              alt: "A world map with three pins. Copenhagen: a bicycle and a free meal tray (rewards for eco-friendly tourists). Kyoto: a narrow lane with a no-entry sign (tourists banned from private roads in Gion). Bali: a ticket with a leaf (a tourist tax for conservation).",
              title: "Three initiatives against overtourism",
              hint: "Tap a pin.",
              size: "wide",
              spots: [
                { x: 50, y: 24, label: "1", title: "Copenhagen", text: "Offering rewards to eco-friendly tourists with free food and tours (the ‘CopenPay’ scheme).", color: "#2d7a9a" },
                { x: 82, y: 42, label: "2", title: "Kyoto, Japan", text: "Tourists are banned from private roads in Kyoto’s Gion geisha district.", color: "#a3416a" },
                { x: 74, y: 74, label: "3", title: "Bali", text: "Charging an ecotourism tax to enter, to fund conservation efforts.", color: "#4c7a2e" }
              ]
            },
            {
              type: "steps",
              items: [
                { who: "group", text: "Your teacher gives you ONE initiative. Research it with your group. Make brief notes: <b>what</b> it is and <b>why</b> it was introduced." },
                { who: "group", text: "Discuss how effective it would be in tackling overtourism. Use the three questions." },
                { who: "group", text: "Regroup with people who explored a different initiative. Share your information and ideas." },
                { who: "group", text: "Together, choose a popular attraction or destination. Agree which initiative would best address overtourism there." }
              ]
            },
            {
              type: "cards",
              title: "Evaluate it",
              items: [
                { label: "Appropriateness", text: "Is this initiative suitable for the given destination?" },
                { label: "Feasibility", text: "How easy would it be to implement and manage/police? How sustainable is it in the long term?" },
                { label: "Effectiveness", text: "How well would it meet the intended outcomes? Would there be any unintended consequences?" }
              ]
            },
            {
              type: "table",
              id: "b9-tab",
              title: "Our initiative",
              columns: ["", "Notes"],
              fixed: ["What is it?", "Why was it introduced?", "Appropriateness", "Feasibility", "Effectiveness / unintended consequences"]
            },
            {
              type: "language",
              title: "Evaluate and negotiate",
              groups: [
                { label: "Evaluate", phrases: ["<b>This initiative seems well suited to</b> … <b>because</b> …", "<b>It might be difficult to police</b> …", "<b>One unintended consequence could be</b> …"] },
                { label: "Compare", phrases: ["<b>Compared with</b> the Bali tax, Copenhagen’s scheme …", "<b>Whereas</b> Kyoto bans …, Copenhagen rewards …"] },
                { label: "Reach agreement", phrases: ["<b>So are we all agreed that</b> …?", "<b>I could go along with that, as long as</b> …", "<b>Let’s go with</b> … <b>because</b> …"] }
              ]
            },
            {
              type: "fields",
              fields: [{ id: "b9-agree", label: "Our destination and the initiative we chose — and why", rows: 3 }]
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 3A · Listening to write lead-in · 15 min ───────────────────────── */
    {
      id: "ltwlead",
      number: "03",
      code: "3A",
      minutes: 15,
      tone: "teal",
      art: "dec10/assets/week4/s-d1-ltwlead.svg",
      title: "Listening to write: Lead-in",
      subtitle: "You’ve won a holiday! Where will you stay — and does the planet matter?",
      outcome: "You have engaged in an interactive discussion and summarised the key themes and points from the discussion.",
      activities: [
        {
          id: "c1",
          short: "Choose a stay",
          minutes: 10,
          grouping: "Small groups",
          art: "dec10/assets/week4/v/v-d10w4d1-c1.svg",
          title: "Lead-in · Discussion",
          goal: "Choose a holiday destination and explain your choice, using good discussion skills.",
          blocks: [
            {
              type: "key",
              title: "You’ve won!",
              points: ["Imagine you have won an <b>all-expenses-paid holiday for 7 days in Australia</b>. You can choose from any of the destinations below."]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d1-three-stays.svg",
              alt: "Three holiday cards on a map of Australia. Imperial Hotel, Gold Coast, Queensland: a tall luxury hotel by the beach with a pool. Outback Hotel, New South Wales: a low hotel in red desert country under a starry sky. Vern’s Ridge, Western Australia: a small sustainable house with solar panels among trees.",
              title: "Three places to stay",
              hint: "Tap a card.",
              size: "wide",
              spots: [
                { x: 80, y: 40, label: "A", title: "Imperial Hotel, Gold Coast, QLD", text: "A luxury hotel by the beach. (Source: Luxury Escapes — Gold Coast Luxury and 5 Star Hotels and Resorts)", color: "#c4562f" },
                { x: 50, y: 55, label: "B", title: "Outback Hotel, NSW", text: "A hotel in the outback. (Source: booking.com — Outback Hotel)", color: "#b07d12" },
                { x: 18, y: 58, label: "C", title: "Vern’s Ridge, WA", text: "Sustainable accommodation. (Source: Little House Republic — Sustainable Accommodation in WA)", color: "#4c7a2e" }
              ]
            },
            { type: "do", n: 1, who: "group", text: "Which one would you choose? Explain your choice to your group. Respond to each other, ask for clarification and take turns." },
            {
              type: "language",
              title: "Discussion skills",
              groups: [
                { label: "Explain a choice", phrases: ["<b>I’d go for</b> … <b>mainly because</b> …", "<b>What appeals to me is</b> …", "<b>For me, the deciding factor is</b> …"] },
                { label: "Respond", phrases: ["<b>That’s interesting — I hadn’t thought of</b> …", "<b>I see your point, but</b> …", "<b>Building on what</b> … <b>said</b>, …"] },
                { label: "Clarify", phrases: ["<b>What do you mean by</b> …?", "<b>So you’re saying that</b> …?", "<b>Could you explain why</b> …?"] },
                { label: "Turn-taking", phrases: ["<b>What about you,</b> …?", "<b>Sorry, go ahead.</b>", "<b>Can I just add something?</b>"] }
              ]
            },
            {
              type: "checklist",
              id: "c1-check",
              title: "Discussion skills I used",
              items: ["I explained my choice with a reason", "I responded to someone’s idea", "I asked someone to clarify", "I invited someone else to speak"]
            }
          ]
        },
        {
          id: "c2",
          short: "Summarise",
          minutes: 5,
          grouping: "Group → Class",
          art: "dec10/assets/week4/v/v-d10w4d1-c2.svg",
          title: "Summarise your discussion",
          goal: "Report the common themes of your discussion to the class.",
          blocks: [
            {
              type: "talk",
              title: "Summarise",
              prompts: [
                "What common themes were discussed, e.g. factors that affected your choice: Wi-Fi? Amenities? Attractions? Something else?",
                "Were environmental factors considered in your decision, e.g. bath towels changed daily? Why / why not?"
              ]
            },
            {
              type: "language",
              title: "Report a group discussion",
              groups: [
                { label: "Common views", phrases: ["<b>Most of us</b> chose … <b>because</b> …", "<b>A common opinion was that</b> …", "<b>The main factor for our group was</b> …"] },
                { label: "Differences", phrases: ["<b>Only one person</b> mentioned …", "<b>We were divided on</b> …", "<b>Interestingly, nobody</b> considered …"] }
              ]
            },
            {
              type: "fields",
              fields: [{ id: "c2-sum", label: "Our group’s summary (2–3 sentences)", rows: 3, placeholder: "Most of us chose … A common opinion was that … Environmental factors …" }]
            },
            { type: "tip", text: "Tonight’s podcast asks the same question on a global scale: <b>Can tourism ever be good for the climate?</b>" }
          ]
        }
      ]
    },

    /* ───────────────────────── 4A · Listening to write Homework ───────────────────────── */
    {
      id: "ltwhw",
      number: "04",
      code: "4A",
      minutes: 75,
      tone: "amber",
      art: "dec10/assets/week4/s-d1-ltwhw.svg",
      title: "Listening to write Homework",
      subtitle: "Alom (2023) · BBC The Climate Question: Can tourism ever be good for the climate?",
      outcome: "You have used a specific method for note-taking, summarised and paraphrased the main points from a source, and followed the content and viewpoints of different speakers.",
      activities: [
        {
          id: "d1",
          short: "Words",
          minutes: 10,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d1-d1.svg",
          title: "Vocabulary",
          goal: "Check the key words — including some informal ones — before you listen.",
          blocks: [
            { type: "tip", text: "Complete the activities in this module. Make notes about relevant ideas and insights. You will refer back to them tomorrow in class." },
            { type: "do", n: 1, who: "alone", text: "Check your understanding of these words. Match each word to its meaning." },
            {
              type: "match",
              id: "d1-match",
              title: "Key words",
              left: ["sustainable tourism (n.)", "responsible tourism (n.)", "regenerative tourism (n.)", "intangible benefit (n.)", "legislation (n.)", "unregulated (adj.)"],
              right: [
                "tourism that brings money to local communities and contributes to the environment, without long-term harm",
                "tourism in which individual tourists take actions to benefit the environment",
                "tourism in which tourists help to restore (regenerate) the communities and nature they visit",
                "a good result that you cannot touch or easily measure",
                "laws made by a government",
                "not controlled by rules or laws"
              ]
            },
            {
              type: "fields",
              fields: [{ id: "d1-diff", label: "2. What do you think are the differences between the three forms of tourism?", rows: 3 }]
            },
            { type: "do", n: 2, who: "alone", text: "Match the informal words to their definitions." },
            {
              type: "match",
              id: "d1-informal",
              title: "Informal words you will hear",
              left: ["rap on the knuckles (idiom)", "sobering (stuff) (adj.)", "AC (n.)", "ripples (n.)"],
              right: ["punishment given in a gentle way for doing something wrong", "a situation that makes you become serious and thoughtful", "abbreviation for air conditioner", "spreading effects (of something)"]
            },
            {
              type: "flip",
              title: "Use them in a sentence",
              hint: "Say a sentence, then turn the card.",
              items: [
                { front: "a rap on the knuckles", back: "The operator broke the rules but only got <b>a rap on the knuckles</b>." },
                { front: "sobering", back: "The figures on tourism emissions are <b>sobering</b>." },
                { front: "ripples", back: "One tourist’s change in behaviour may send out small <b>ripples</b>." }
              ]
            }
          ],
          answers: {
            title: "Answer (question 2)",
            items: [["Three forms of tourism", "They are ultimately about the same concept that underlies the term ecotourism. The fact that so many different terms exist is one of the points made in the listening."]]
          }
        },
        {
          id: "d2",
          short: "Gist",
          minutes: 10,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d1-d2.svg",
          title: "Listening for gist (main idea)",
          goal: "Listen once for the main ideas and the speakers.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-podcast-card.svg",
              size: "wide",
              alt: "A podcast card for BBC The Climate Question, “Can tourism ever be good for the climate?”, Alom (2023). Three speaker badges: the host; Ralph Buckley, Griffith University, Australia; Stefan Gossling, Lund University, Sweden. A map pin on Costa Rica.",
              caption: "Alom, Q. (Host). (2023, September 24). <i>Can tourism ever be good for the climate?</i> [Audio podcast episode]. In <i>The Climate Question</i>. BBC."
            },
            { type: "do", n: 1, who: "alone", text: "Your teacher plays the recording in class, or you play it at home. Start at <b>7:27</b>. As you listen, put the main ideas in the order you hear them." },
            {
              type: "listening",
              source: "Alom (2023) · BBC The Climate Question",
              title: "Can tourism ever be good for the climate?",
              videoId: "nDplkL3wJrg",
              start: 447,
              clip: "from 7:27",
              audio: "",
              url: "https://www.bbc.co.uk/sounds/play/w3ct5bkk",
              urlLabel: "Listen on BBC Sounds",
              transcripts: [["alom", "Transcript (open after listening)"]]
            },
            {
              type: "order",
              id: "d2-order",
              title: "1. Number the main ideas from 1 to 4",
              items: ["Eco-tourism: definition and history", "Tourists’ contribution to climate change", "The “intangible benefit” of tourism", "Overall, is eco-tourism good or bad for climate change?"],
              ends: ["First", "Last"]
            },
            {
              type: "quiz",
              id: "d2-quiz",
              title: "The speakers",
              items: [
                { q: "2. How many speakers did you hear in this talk?", options: ["2", "3", "4"], answer: "3" },
                { q: "3. Who were they?", options: ["The host, Ralph Buckley and Stefan Gossling", "The host, a hotel owner and a tourist", "Ralph Buckley, a Costa Rican minister and a pilot"], answer: "The host, Ralph Buckley and Stefan Gossling" }
              ]
            }
          ]
        },
        {
          id: "d3",
          short: "Sentence notes",
          minutes: 25,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d1-d3.svg",
          title: "Listening for detail: Note-taking",
          goal: "Listen again and take detailed notes with the Sentence Method — watch for the different speakers.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-sentence-method.svg",
              size: "wide",
              alt: "A notebook page set up for the Sentence Method: the title and source at the top, then numbered bullet points, one short sentence each, with speaker tags H (host), R (Ralph Buckley) and S (Stefan Gossling) in coloured circles on the left.",
              caption: "The <b>Sentence Method</b> (Week 1): record ideas as you hear them — one short sentence per bullet."
            },
            {
              type: "key",
              title: "The Sentence Method",
              points: [
                "It is not about breaking information down but <b>recording</b> it as you listen.",
                "Write <b>short</b> sentences (key words only).",
                "Write <b>one sentence per bullet point</b>.",
                "<b>Focus</b> on the different viewpoints: tag each line H, R or S."
              ]
            },
            { type: "do", n: 1, who: "alone", text: "Listen again (from 7:27). Take notes below — one line per idea." },
            {
              type: "fields",
              fields: [{ id: "d3-notes", label: "My Sentence Method notes · Alom (2023)", rows: 14, placeholder: "• R: eco-tourism idea 1970s → fund conservation + communities\n• H: = rich Western tourists pay to protect wildlife\n• R: never well defined …\n• S: tourism ≈ 10% of global warming (2019) …" }]
            },
            {
              type: "squeeze",
              id: "d3-sq",
              title: "Warm-up: squeeze it",
              hint: "Practise one-line notes.",
              items: [
                { text: "Aviation is about one-third of overall total emissions from tourism. Another third is from food.", max: 40, model: "S: aviation ⅓ + food ⅓ of tourism CO₂" },
                { text: "Unless they're incorporated in legislation, then what matters is not what it's called but what people actually do.", max: 45, model: "R: names ≠ important w/o laws → actions matter" }
              ]
            },
            { type: "tip", text: "Tomorrow (W4 D2 Mediation) you will sort these notes into six headings — background, economy, environment, social benefits, tourist benefits, legislation — and compare them with two other sources." }
          ]
        },
        {
          id: "d4",
          short: "Summary",
          minutes: 15,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d1-d4.svg",
          title: "Summarise and paraphrase",
          goal: "Write a short summary paragraph of the listening with signalling nouns — and your own view.",
          blocks: [
            {
              type: "steps",
              items: [
                { who: "alone", text: "Begin by briefly introducing the listening and its main idea." },
                { who: "alone", text: "Describe the different perspectives you heard. Did the speakers have similar or different ideas on ecotourism?" },
                { who: "alone", text: "Conclude with <b>your</b> viewpoint on ecotourism." },
                { who: "alone", text: "Main points only — no details or examples. Use <b>signalling nouns</b> (this problem, these terms …) to make it cohesive. Bring your summary to class tomorrow." }
              ]
            },
            {
              type: "language",
              title: "Summary frames",
              groups: [
                { label: "Introduce", phrases: ["<b>The listening</b> (title) <b>is essentially about</b> …", "… <b>discusses</b> …", "<b>The speakers discuss</b> …"] },
                { label: "Perspectives", phrases: ["X <b>believes / claims / questions / suggests</b> …", "<b>From the perspective of</b> X, … / <b>From X’s perspective,</b> …", "<b>According to</b> X, …", "<b>Both</b> X <b>and</b> Y <b>believe</b> … <b>However,</b> Z <b>believes</b> …"] },
                { label: "Your view", phrases: ["<b>My perspective on ecotourism is</b> …", "<b>After listening to the speakers, my opinions on ecotourism have changed / not changed</b>, which is …", "X’s <b>view on ecotourism was interesting because</b> … <b>Because of this, my perspective, which was</b> …, <b>now is</b> …"] }
              ]
            },
            {
              type: "detect",
              id: "d4-dt",
              label: "Summary checker",
              title: "My summary of Alom (2023)",
              hint: "The lights turn on when your summary has each part.",
              checks: [
                { label: "Introduces the listening", color: "#2f7d6b", any: ["alom", "the listening", "the podcast", "climate question", "2023"] },
                { label: "Names a speaker", color: "#3a58a0", any: ["buckley", "gossling", "gössling", "the host"] },
                { label: "Reporting verb", color: "#7a4a8c", any: ["believe", "claim", "question", "suggest", "argue", "point out", "explain", "according to"] },
                { label: "Signalling noun", color: "#b07d12", any: ["/\\b(this|these|such) (problem|issue|view|idea|terms?|concept|situation|figure|challenge|approach|argument|perspective)s?\\b/"] },
                { label: "Your view", color: "#c4562f", any: ["my perspective", "my opinion", "i believe", "in my view", "i think", "my thoughts"] }
              ],
              items: [{ task: "Summary paragraph (about 120–150 words)", rows: 8, placeholder: "The listening “Can tourism ever be good for the climate?” (Alom, 2023) is essentially about …", model: "The BBC podcast “Can tourism ever be good for the climate?” (Alom, 2023) discusses whether ecotourism really helps the environment. Ralph Buckley explains that ecotourism was meant to fund conservation and local communities, but he claims that the term, and similar ones such as sustainable or regenerative tourism, has never been clearly defined or regulated. Stefan Gossling points out that tourism causes about 10% of global warming, mainly through flights, food and accommodation. Both experts accept that this industry can bring local benefits, for example in Costa Rica. However, Buckley suggests that, on a global level, ecotourism does more harm than good, and Gossling believes the cost of carbon should be included in the price of travel. After listening to the speakers, my opinion has changed: I now think that the climate cost of travel is a bigger problem than I realised." }]
            }
          ]
        },
        {
          id: "d5",
          short: "Test practice",
          minutes: 15,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d1-d5.svg",
          title: "Building Understanding",
          goal: "Answer test-style questions on the listening, then check with the transcript.",
          blocks: [
            {
              type: "limit",
              id: "d5-lim",
              title: "Questions 1–3",
              rule: "Write NO MORE THAN THREE WORDS",
              max: 3,
              items: [
                { q: "1. What did Buckley say eco-tourism could do?", accept: ["fund conservation", "funds conservation", "fund conservation efforts"], model: "fund conservation" },
                { q: "2. What type of people were needed to do this?", accept: ["rich western tourists", "rich tourists", "western tourists", "rich westerners"], model: "rich Western tourists" },
                { q: "3. How many other terms are mentioned that are associated with eco-tourism?", accept: ["3", "three", "3 terms", "three terms"], model: "3 (sustainable, responsible, regenerative tourism)" }
              ]
            },
            {
              type: "quiz",
              id: "d5-quiz",
              title: "Questions 4–10 · Choose the right answer",
              items: [
                { q: "4. The main idea of the various types of eco-tourism is to", options: ["make money from the local economy", "make money to maintain the local environment", "show how beautiful nature can be", "show how much tourists would pay for beautiful scenery"], answer: "make money to maintain the local environment", why: "Buckley: tourism “could be an economic engine that would fund conservation and local communities”." },
                { q: "5. The overall purpose of the listening is", options: ["to inform us that eco-tourism is doing more harm on a global scale", "to persuade us to take more eco-friendly holidays", "to get us to take steps in helping communities at tourist destinations", "for the government to provide a definitive decision on what can be described as eco-tourism"], answer: "to inform us that eco-tourism is doing more harm on a global scale", why: "Section D: “on a global level, it’s doing more harm than good?” — “Yes, I think that regrettably that is indeed the case.”" },
                { q: "6. In the listening, Gossling implies that", options: ["eco-tourism is not as green as we believe it to be", "over 10% of global emissions from tourism is nothing to be concerned about", "we eat more when we are on holidays", "eco-tourism should replicate Costa Rica"], answer: "eco-tourism is not as green as we believe it to be", why: "He shows the large emissions from flights, food and accommodation, and expects the real figure to be “considerably higher”." },
                { q: "7. In the listening, Buckley implies that", options: ["advertising ‘green’ words in front of tourism doesn’t mean that it is green", "eco-tourism at a local level contributes to the overall health of the environment", "positives outweigh the negatives that eco-tourism has on conservation", "the government plays a large role in how tourists effect the local environment"], answer: "advertising ‘green’ words in front of tourism doesn’t mean that it is green", why: "“… all these different terms don't really mean very much … what matters is not what it's called but what people actually do.”" },
                { q: "8. What is the host’s attitude towards eco-tourism?", options: ["negative", "positive", "surprised", "neutral"], answer: "neutral", why: "The host asks questions and reports both sides (e.g. Costa Rica as “the poster child”, but “the way visitors get there is a huge issue”)." },
                { q: "9. What is Buckley’s attitude towards eco-tourism?", options: ["negative", "positive", "surprised", "neutral"], answer: "negative", why: "He accepts some local positives, but says that globally it does more harm than good and certification “doesn’t really work”." },
                { q: "10. What is Gossling’s attitude towards eco-tourism?", options: ["negative", "positive", "surprised", "neutral"], answer: "negative", why: "He stresses tourism’s large and growing emissions and says we must “drastically alter our behaviour”." }
              ]
            },
            { type: "sources", ids: ["alom"] },
            {
              type: "talk",
              title: "Tomorrow in class",
              prompts: [
                "Which speaker do you agree with more — Buckley or Gossling? Why?",
                "Compare the podcast with Spenceley and Rylance (2021). Which source is more positive about ecotourism?"
              ]
            }
          ],
          answers: {
            title: "Answers",
            items: [
              ["1–3", "1 fund conservation · 2 rich Western tourists · 3 three terms: sustainable (tourism), responsible (tourism), regenerative (tourism)"],
              ["4–10 (suggested — checked against the transcript)", "4 make money to maintain the local environment · 5 to inform us that eco-tourism is doing more harm on a global scale · 6 eco-tourism is not as green as we believe it to be · 7 advertising ‘green’ words … doesn’t mean that it is green · 8 neutral · 9 negative · 10 negative"]
            ]
          }
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ["rhetorical function", "the job a sentence or paragraph does in a text, e.g. give background, state a position, give a reason", "The rhetorical function of Body 1 is to compare one challenge and show it is not the key one."],
    ["content words", "words in a question that show the topic you must read and write about", "The content words are “challenge” and “green job market”."],
    ["limiting words", "words in a question that narrow the focus (time, place, people, extent)", "“Key” is a limiting word: we discuss only one challenge."],
    ["text map", "a diagram that shows how the ideas in a text link (SO, BUT, BECAUSE, AND)", "My text map showed the consequence chain in Body 1."],
    ["hedging", "careful or cautious language that makes a statement less direct or certain", "“It appears that” and “are likely to” are hedging language."],
    ["cohesion", "the links or ties that connect one idea to another in a text", "Signalling nouns improve the cohesion of your essay."],
    ["signalling noun", "a general noun (often after this/these/such) that sums up an earlier idea", "“These efforts” sums up the initiatives in the previous sentence."],
    ["referent", "a pronoun (it, they, this, which, where) that points back to earlier information", "In “which create jobs”, which refers to the tourism activities."],
    ["ecotourism", "responsible travel to natural areas that conserves the environment, sustains the well-being of local people and involves interpretation and education (TIES, 2015)", "Costa Rica is famous for ecotourism."],
    ["stakeholder", "a person or group with an interest in something and affected by it", "Farmers, governments and tourism companies are all stakeholders."],
    ["biodiversity", "the variety of plants and animals in a place", "Visiting places with high biodiversity can prevent health issues."],
    ["corporate social responsibility (CSR)", "a company’s duty to help society and the environment", "The lodge used its CSR funds to build a clinic."],
    ["overtourism", "too many tourists in one place, harming the place and its people", "Kyoto banned tourists from some lanes to tackle overtourism."],
    ["feasibility", "how possible or practical something is to do", "We evaluated the feasibility of Bali’s tourist tax."],
    ["unregulated", "not controlled by rules or laws", "Eco-certification is largely unregulated."]
  ]
};
