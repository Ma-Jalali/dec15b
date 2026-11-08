/* DEC10 · Week 4 · Day 1 (Monday) — Eco-tourism: unpack a sample, read to write, get ready to listen.
   There is NO Week 4 Teacher's Book. This day is built from the Week 4 Student Booklet (W4 D1 1B, 1C, 2A, 2B and the
   headings of W4 D2 6C), the revised weekly map (W4 D1. 1 Integrated Writing workshop (1) 70 min · 2 Reading to Write 150 min ·
   3 Listening to Write: Lead-in 15 min · 4 Listening to Write HW), and the matching Week 3/5 Teacher's Book lessons as a pattern
   (W3 D5 25A paragraph purposes for Sample 3.1, W5 D1 1A Reading to write, W5 D2 6A / W5 D3 Integrated writing workshop).
   Protected texts (Sample essay 3.1 = "s31", Spenceley & Rylance 2021 = "ecosdg") live in week4/sources.js and are never changed here.
   Answers written for this day are SUGGESTED answers (no Week 4 key exists). Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w4d1",
  week: 4,
  day: 1,
  title: "Unpack it, read it, predict it",
  duration: "About 4 hours + homework",
  question: "Can eco-tourism really be good for people and the planet?",
  questionKind: "Big question",
  questionLabel: "This week’s big question · Week 4: Eco-tourism",
  journey: "Take a sample essay apart sentence by sentence, read a text on eco-tourism and the Sustainable Development Goals like a writer, then get ready for a BBC podcast on tourism and the climate.",
  image: "dec10/assets/week4/hero-d10w4d1.svg",
  imageAlt: "Illustration: an eco-lodge on stilts in a green rainforest valley beside a turquoise bay. A whale shark swims under a small boat, a sea turtle rises to the surface, hikers cross a rope bridge and a mountain biker rides a trail. Floating cards show Sustainable Development Goal badges 2 and 3, an essay page split into coloured parts, and a pair of headphones with a sound wave.",
  finish: { title: "Day 2", text: "Listening to write, mediation across three sources — and the Integrated Writing Practice Assessment" },
  goalShort: "Tuesday’s Integrated Writing Practice Assessment",
  sections: [
    /* ───────────────────────── 1 · Integrated Writing workshop (1) · 70 min ───────────────────────── */
    {
      id: "iww1",
      number: "01",
      code: "1A",
      minutes: 70,
      tone: "green",
      art: "dec10/assets/week4/s-d1-iww1.svg",
      title: "Integrated Writing workshop (1)",
      subtitle: "Take Sample essay 3.1 apart: paragraph by paragraph, sentence by sentence",
      outcome: "You can explain the purpose of each paragraph and each sentence in a sample essay, follow how the ideas link (SO, BUT, BECAUSE, AND), and name the language that does each job.",
      activities: [
        {
          id: "a1",
          short: "The question",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a1.svg",
          title: "Analyse the question",
          goal: "Find the content words, the limiting words and the task in the essay question before you look at the sample.",
          blocks: [
            {
              type: "key",
              title: "Sample essay 3.1 answers this question",
              points: [
                "<b>Question:</b> What is the key challenge in transitioning to a “green” job market?",
                "It uses the three Week 3 sources: Bowen et al. (2018), Vidican Auktor (2020) and Hyman &amp; Smith (2023).",
                "In Week 3 (homework 25A) you wrote the purpose of each <b>paragraph</b>. Today you go deeper: the purpose of each <b>sentence</b>."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d1-question-parts.svg",
              size: "wide",
              alt: "The essay question “What is the key challenge in transitioning to a green job market?” with colour labels: “What is” is the task (identify and argue), “key” is a limiting word (only one, the most important), “challenge”, “transitioning” and “green job market” are content words.",
              caption: "Three kinds of words in every question: <b>content</b> words, <b>limiting</b> words and <b>task</b> words."
            },
            { type: "do", n: 1, who: "alone", text: "Sort the words from the question. Where does each one go?" },
            {
              type: "sort",
              id: "a1-sort",
              title: "Content, limiting or task?",
              hint: "Content words = the topic. Limiting words = they make the focus smaller. Task words = what you must do.",
              buckets: [
                { label: "Content words", letter: "C", text: "Where to focus your reading" },
                { label: "Limiting words", letter: "L", text: "They narrow your answer" },
                { label: "Task words", letter: "T", text: "What the question asks you to do" }
              ],
              items: [
                { text: "challenge", answer: 0 },
                { text: "transitioning (moving from one system to another)", answer: 0 },
                { text: "“green” job market", answer: 0 },
                { text: "key", answer: 1, why: "“Key” means the ONE most important challenge — not a list of all challenges." },
                { text: "What is …?", answer: 2, why: "You must identify one challenge and argue why it is the most important." }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Answer the questions with a partner. Then open the suggested answers." },
            {
              type: "fields",
              fields: [
                { id: "a1-task", label: "What is the question asking you to do?", rows: 2, placeholder: "Identify … and argue …" },
                { id: "a1-func", label: "Which rhetorical functions should the answer include?", rows: 2, placeholder: "e.g. cause and effect, comparing, …" },
                { id: "a1-ways", label: "What are the possible ways to answer the question?", rows: 3, placeholder: "The key challenge is … / The key challenge is … not …" }
              ]
            },
            {
              type: "language",
              title: "Talk about an essay question",
              groups: [
                { label: "Content", phrases: ["The <b>topic</b> of the question is …", "The <b>key content words</b> are … and …", "This tells me to read about …"] },
                { label: "Limits", phrases: ["The word “key” <b>narrows the focus</b> to …", "We only need to discuss <b>one</b> …", "The question does <b>not</b> ask about …"] },
                { label: "Task", phrases: ["The question <b>asks us to</b> identify … and argue …", "We need to <b>compare</b> … and decide which one is …", "A good answer would <b>evaluate</b> …"] }
              ]
            }
          ],
          answers: {
            title: "Suggested answers",
            items: [
              ["Task", "Identify the challenges of moving to a green job market, decide which ONE is the most important (“key”), and argue why, with evidence from the sources."],
              ["Rhetorical functions", "Cause and effect (why the challenge happens and what it leads to) · comparing (one challenge against another) · arguing/persuading (why one is the key one) · providing support from different voices (citations)."],
              ["Possible ways to answer", "The key challenge is the lack of a clear definition of green jobs · The key challenge is the readiness of the workforce (the skills gap) — Sample 3.1 takes this position · The key challenge is … (another challenge from the sources). A strong answer usually compares at least two challenges and shows why one is bigger."]
            ]
          }
        },
        {
          id: "a2",
          short: "Paragraph jobs",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a2.svg",
          title: "Sample essay 3.1 Deconstruction table · By paragraph",
          goal: "Check your Week 3 homework: the purpose of each paragraph and how the paragraphs work together.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Open <b>Sample essay 3.1</b> (button below, or the Deconstruction table in your Student’s book). Look at column three: <b>By paragraph</b>." },
            { type: "sources", ids: ["s31"] },
            { type: "do", n: 2, who: "pair", text: "Match each paragraph to its purpose. These are the four purposes from your Week 3 homework." },
            {
              type: "match",
              id: "a2-match",
              title: "What is each paragraph for?",
              hint: "Tap a paragraph, then its purpose.",
              left: ["Introduction", "Body 1", "Body 2", "Conclusion"],
              right: [
                "Give the context (background) of the topic and the writer’s thesis/position",
                "Compare one challenge and state reasons why it is not the key one",
                "Introduce the key challenge and the reasons to support position",
                "Summarise thesis/position and supporting reasons"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d1-essay-shape.svg",
              size: "wide",
              alt: "The shape of Sample essay 3.1 as four blocks. Introduction: context and thesis. Body 1: a challenge, but not the key one (unclear definition). Body 2: the key challenge (workforce readiness, the skills gap). Conclusion: summary of thesis and reasons. An arrow labelled “Therefore, a greater challenge…” links Body 1 to Body 2.",
              caption: "Body 1 is the “smaller” challenge. Body 2 begins with <b>Therefore, a greater challenge …</b> — the essay climbs to its main point."
            },
            {
              type: "talk",
              title: "Explain it to a classmate",
              prompts: [
                "Why do you think the writer puts the <b>smaller</b> challenge first and the <b>key</b> challenge second?",
                "Which paragraph was the hardest to label in your homework? Why?",
                "Could the essay work with the paragraphs in a different order? What would change?"
              ]
            },
            {
              type: "language",
              title: "Talk about essay structure",
              groups: [
                { label: "Purpose", phrases: ["The <b>purpose of</b> Body 1 <b>is to</b> …", "This paragraph <b>introduces</b> / <b>compares</b> / <b>summarises</b> …", "Here the writer <b>sets up</b> the context."] },
                { label: "Links", phrases: ["Body 2 <b>builds on</b> Body 1 by …", "The word “Therefore” <b>signals</b> that …", "The conclusion <b>brings together</b> …"] },
                { label: "Your view", phrases: ["<b>It makes sense to</b> … because …", "<b>I’d argue that</b> this order is more persuasive since …"] }
              ]
            }
          ]
        },
        {
          id: "a3",
          short: "Intro + conclusion",
          minutes: 15,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a3.svg",
          title: "Sample essay 3.1 Deconstruction table · Introduction and conclusion by sentence",
          goal: "Name the purpose of every sentence in the introduction and the conclusion, and see how the thesis is paraphrased.",
          blocks: [
            {
              type: "key",
              title: "Two levels of deconstruction",
              points: [
                "<b>Text level:</b> the purpose of each paragraph and how the paragraphs link to build one argument.",
                "<b>Paragraph level:</b> the purpose of each sentence and how the sentences link to build the main point of the paragraph.",
                "Today you fill in the middle column of the Deconstruction table: <b>By sentence (Purpose of each sentence)</b>."
              ]
            },
            { type: "do", n: 1, who: "pair", text: "Read the introduction and the conclusion of Sample 3.1. Choose the purpose of each sentence (S1, S2, S3)." },
            {
              type: "grid",
              id: "a3-grid",
              title: "Purpose of each sentence",
              rows: [
                "Intro S1 · “The increasing necessity to adopt more environmentally sustainable business practices has led to …”",
                "Intro S2 · “While the creation or classification of such jobs may be a positive step forward … including the absence of a clear definition …”",
                "Intro S3 · “However, the most significant barrier … will undoubtedly be the readiness of the workforce …”",
                "Concl. S1 · “In conclusion, while developing a standardized definition … there are tools available to assist.”",
                "Concl. S2 · “Therefore, it is the preparedness of the workforce that will likely present the greatest challenge …”",
                "Concl. S3 · “The skills gap may impede a smooth transition … so comprehensive research … will be critical.”"
              ],
              columns: ["Purpose"],
              options: [
                "Context (background)",
                "A challenge — but not the key one",
                "Thesis (writer’s position)",
                "Summary of the smaller challenge",
                "Thesis restated",
                "Reason + recommendation for the future"
              ],
              answers: [
                ["Context (background)"],
                ["A challenge — but not the key one"],
                ["Thesis (writer’s position)"],
                ["Summary of the smaller challenge"],
                ["Thesis restated"],
                ["Reason + recommendation for the future"]
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Now answer four questions about the introduction and the conclusion." },
            {
              type: "quiz",
              id: "a3-quiz",
              title: "Look closer",
              items: [
                {
                  q: "Why does the introduction mention the unclear definition of green jobs <b>before</b> the thesis?",
                  options: ["Because it is the writer’s main point", "Because it is a smaller challenge that the thesis then outweighs (“However, the most significant barrier …”)", "Because the question asks about definitions", "Because introductions always start with a problem"],
                  answer: "Because it is a smaller challenge that the thesis then outweighs (“However, the most significant barrier …”)",
                  why: "The order is logical: first a challenge the writer accepts is real, then “However” turns to the bigger one."
                },
                {
                  q: "Which word in Intro S3 shows the writer is very sure?",
                  options: ["barrier", "undoubtedly", "readiness", "potential"],
                  answer: "undoubtedly",
                  why: "“Undoubtedly” is a booster — it makes the claim strong. Compare the conclusion: “will <b>likely</b> present” is softer."
                },
                {
                  q: "Does the conclusion add any new evidence?",
                  options: ["Yes — a new statistic", "Yes — a new source", "No — it summarises and looks to the future"],
                  answer: "No — it summarises and looks to the future",
                  why: "Good conclusions summarise the position and reasons, then end with a recommendation or prediction. No new evidence."
                },
                {
                  q: "What does the writer recommend at the end?",
                  options: ["A standard definition of green jobs", "Comprehensive research for planning the reskilling of the workforce", "More green jobs in every industry", "A new Green General Skill index"],
                  answer: "Comprehensive research for planning the reskilling of the workforce",
                  why: "Concl. S3: “… so comprehensive research for planning the reskilling of the workforce will be critical.”"
                }
              ]
            },
            {
              type: "pairs",
              title: "Same thesis, new words: introduction → conclusion",
              items: [
                {
                  from: "However, the [[most significant barrier]] to achieving a smooth transition [[will undoubtedly be]] the [[readiness]] of the workforce to adapt to this new market …",
                  to: "Therefore, it is the [[preparedness]] of the workforce that [[will likely present]] the [[greatest challenge]] in the transition to a green job market.",
                  tag: "Paraphrase the thesis",
                  note: "Synonyms (barrier → challenge, readiness → preparedness), a new structure (“it is … that …”) and a softer verb (undoubtedly → likely)."
                }
              ]
            },
            {
              type: "talk",
              title: "Tell your partner",
              prompts: [
                "Which sentence in the introduction is the <b>thesis</b>? How do you know?",
                "Find two techniques the writer uses to paraphrase the thesis in the conclusion.",
                "Is the conclusion more or less certain than the introduction? Is that a good idea?"
              ]
            }
          ]
        },
        {
          id: "a4",
          short: "Text map",
          minutes: 15,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a4.svg",
          title: "Sample Essay 3.1 Text map",
          goal: "Follow how the ideas in the two body paragraphs link with SO, BUT, BECAUSE and AND — and fill the empty boxes of the text map.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-sentence-logic.svg",
              size: "wide",
              alt: "Four link cards. SO (an arrow forward): result or effect, e.g. resulting in, this leads to, hindering, therefore, hence. BUT (a turning arrow): contrast or a problem, e.g. however, while. BECAUSE (an arrow back to a root): a reason, e.g. as, given. AND (a plus sign): more of the same, e.g. she adds, also, in fact.",
              caption: "A text map shows the <b>logic</b> between ideas. The small words in brackets come from the essay."
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d1-textmap.svg",
              alt: "The text map for Body 1 of Sample 3.1 as a flowchart. Top: One noticeable challenge: lack of a clear definition. Then: green jobs vary in nature and scope. SO (resulting in): difficult to develop a standardised definition. SO (This leads to): two empty boxes, 1 and 2. SO (hindering): empty box 3. BUT (However) solution could help: empty box 4. BECAUSE (as): empty box 5. Example: Green General Skill Index has assisted in classifying jobs. SO (making): it easier to plan.",
              title: "Body 1 text map",
              hint: "Tap a numbered box to see a clue.",
              size: "wide",
              spots: [
                { x: 26, y: 52, label: "1", title: "Box 1 · SO (This leads to …)", text: "Look at Body 1, sentence 3. What does the lack of a definition lead to? (two problems — this is the first)", color: "#2f7d6b" },
                { x: 74, y: 52, label: "2", title: "Box 2 · … and", text: "The second problem in sentence 3: complications in measuring …", color: "#2f7d6b" },
                { x: 50, y: 66, label: "3", title: "Box 3 · SO (hindering …)", text: "Sentence 3 again: what is hindered (made difficult)?", color: "#2f7d6b" },
                { x: 30, y: 80, label: "4", title: "Box 4 · BUT (However, …) a solution could help", text: "Sentence 4: what may be helpful here?", color: "#c4562f" },
                { x: 72, y: 80, label: "5", title: "Box 5 · BECAUSE (as …)", text: "Sentence 4: why would it help? What do these skills provide?", color: "#3a58a0" }
              ]
            },
            { type: "do", n: 1, who: "alone", text: "Fill in the empty boxes of the text map. Write <b>notes</b>, not sentences — no more than <b>eight words</b>. Boxes 1–5 are Body 1; boxes 6–10 are Body 2." },
            {
              type: "limit",
              id: "a4-map",
              title: "Fill the text map",
              rule: "Write NO MORE THAN EIGHT WORDS for each box",
              max: 8,
              items: [
                { q: "Body 1 · SO (This leads to …) → box 1", accept: { need: 1, any: ["classif", "inconsisten"] }, model: "classification inconsistencies", why: "S3: “This leads to classification inconsistencies …”" },
                { q: "Body 1 · … and → box 2", accept: { need: 1, any: ["measur", "labour market", "labor market", "impact"] }, model: "complications measuring green growth’s labour market impact", why: "S3: “… and complications measuring green growth's labour market impact”" },
                { q: "Body 1 · SO (hindering …) → box 3", accept: { need: 1, any: ["planning", "policy", "polic"] }, model: "effective workforce planning & policy implementation", why: "S3: “… hindering effective workforce planning and policy implementation”" },
                { q: "Body 1 · BUT (However, …) a SOLUTION could help → box 4", accept: { need: 1, any: ["skill"] }, model: "focus on specific skill requirements for green jobs", why: "S4: “However, focusing on specific skill requirements for green jobs may be helpful here …”" },
                { q: "Body 1 · BECAUSE (as …) → box 5", accept: { need: 1, any: ["insight", "training", "changes", "detail"] }, model: "skills give detailed insights into changes & training needs", why: "S4: “… as these skills provide more detailed insights into the necessary changes … including training needs”" },
                { q: "Body 2 · Skills gap (only 1 in 8 workers have the skills) AND (adds) → box 6", accept: { need: 1, any: ["widen", "grow", "bigger", "increas", "larger"] }, model: "the skills gap is widening", why: "S4: “She adds that this skills gap is widening …”" },
                { q: "Body 2 · BECAUSE (as …) → box 7", accept: { need: 1, any: ["evolv", "chang", "requirement"] }, model: "sustainability requirements evolve rapidly in all industries", why: "S4: “… as environmental sustainability requirements rapidly evolve across all industries.”" },
                { q: "Body 2 · BUT (However, …) → box 8", accept: { need: 1, any: ["research", "not enough", "match", "capabilit"] }, model: "not enough research on workforce skills vs. green job skills", why: "S6: “… there is still not enough research into how workforce capabilities match the skills required …”" },
                { q: "Body 2 · BUT (while …) → box 9", accept: { need: 1, any: ["analytic", "high-level", "high level", "speciali"] }, model: "green jobs need high-level analytical & specialised skills", why: "S6: “… while researchers using the O*NET database have established that green occupations tend to involve high-level analytical and specialized skills …”" },
                { q: "Body 2 · SO (Without this information, …) → box 10", accept: { need: 1, any: ["distance", "measur", "difficult", "hard"] }, model: "very difficult to measure skill distance", why: "S7: “Without this information, it is extremely difficult to construct a measure of skill distance …”" }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Compare your boxes. Then <b>retell Body 2 to your partner</b> using only the text map and the link words SO, BUT, BECAUSE, AND. Your partner checks the logic." },
            {
              type: "language",
              title: "Retell the logic of a paragraph",
              groups: [
                { label: "SO", phrases: ["<b>As a result,</b> …", "This <b>leads to</b> / <b>results in</b> …", "<b>Consequently,</b> …"] },
                { label: "BUT", phrases: ["<b>However,</b> the writer then shows that …", "<b>On the other hand,</b> …", "<b>Although</b> …, …"] },
                { label: "BECAUSE", phrases: ["This happens <b>because</b> …", "The reason <b>is that</b> …", "<b>As</b> requirements change, …"] },
                { label: "AND", phrases: ["<b>In addition,</b> …", "The writer <b>also</b> points out that …", "<b>What is more,</b> …"] }
              ]
            },
            { type: "tip", text: "A text map is a great <b>planning tool</b> too. Before the practice assessment on Tuesday, try mapping your own body paragraphs with SO / BUT / BECAUSE / AND." }
          ]
        },
        {
          id: "a5",
          short: "Language",
          minutes: 15,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a5.svg",
          title: "Sample essay 3.1 Language analysis",
          goal: "Notice the language that does each job: stance, cause and effect, bringing in sources and signposting.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-stance-dial.svg",
              size: "wide",
              alt: "A dial from soft to strong. Soft (hedging): may, has the potential to, somewhat, tend to. Middle: will likely, is likely to. Strong (boosting): will undoubtedly, the most significant, extremely. The needle swings between them.",
              caption: "Writers turn the dial: <b>hedge</b> when the evidence is limited, <b>boost</b> when they are sure."
            },
            { type: "do", n: 1, who: "pair", text: "Tap the language that does the job in the label. Each paragraph has a different job. (The text is Sample 3.1, unchanged.)" },
            {
              type: "spot",
              id: "a5-intro",
              title: "Introduction · How sure is the writer?",
              label: "Tap the words that show how certain or strong the claim is (hedging and boosting).",
              paras: [
                "²While the creation or classification of such jobs [[*may]] be a positive step forward in meeting sustainability goals, the transition towards a green job market is marked by [[*significant]] challenges, [[including]] the absence of a clear definition of green jobs which impedes effective policy implementation. ³[[However]], the [[*most significant]] barrier to achieving a smooth transition will [[*undoubtedly]] be the readiness of the workforce to adapt to this new market [[given]] the noticeable skills gap, which [[*has the potential to]] hinder progress."
              ]
            },
            {
              type: "spot",
              id: "a5-body1",
              title: "Body 1 · Cause and effect",
              label: "Tap the words that link a cause to its effect or give a reason.",
              paras: [
                "²[[As outlined by]] Bowen et al. (2018) and expanded upon by Vidican Auktor (2020), green jobs vary widely in their nature and scope, [[*resulting in]] difficulties developing a uniform definition. ³This [[*leads to]] classification inconsistencies and complications measuring green growth's labour market impact, [[*hindering]] effective workforce planning and policy implementation (Vidican Auktor, 2020). ⁴[[However]], focusing on specific skill requirements for green jobs may be helpful here [[*as]] these skills provide more detailed insights into the necessary changes for transitioning to a green economy, [[including]] training needs (Vidican Auktor, 2020). ⁵[[In fact]], the development of a Green General Skill (GGS) index has assisted in classifying and contextualising green jobs within a broader skills framework (Vidican Auktor, 2020), [[*making it easier]] to understand and strategize for green job training and growth."
              ]
            },
            {
              type: "spot",
              id: "a5-body2",
              title: "Body 2 · Bringing in other voices",
              label: "Tap the phrases that bring a source’s voice into the essay.",
              paras: [
                "²[[*According to]] LinkedIn's global green skills report, there is a burgeoning demand for green skills that is not being met by the current rate of skill development (Hyman &amp; Smith, 2023). ³[[*As Sue Duke, Vice President of Global Public Policy &amp; Economic Graph at LinkedIn, reports]], only one in every eight workers have the necessary green skills (Hyman &amp; Smith, 2023). ⁴[[*She adds]] that this skills gap is widening [[as]] environmental sustainability requirements rapidly evolve across all industries. ⁵[[Hence]], the transition demands [[not only]] new skills [[but also]] a substantial re-skilling of the existing workforce. ⁶However, while [[*researchers using the O*NET database have established]] that green occupations tend to involve high-level analytical and specialized skills (Vidican Auktor, 2020; Bowen et al., 2018), there is still not enough research into how workforce capabilities match the skills required for a green job market (Bowen et al., 2018)."
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Now sort the language from the whole essay by its job." },
            {
              type: "sort",
              id: "a5-sort",
              title: "What job does it do?",
              buckets: [
                { label: "Hedging (softer)", letter: "H" },
                { label: "Boosting (stronger)", letter: "B" },
                { label: "Cause → effect", letter: "C" },
                { label: "Bringing in a source", letter: "S" },
                { label: "Signposting (contrast / conclusion)", letter: "G" }
              ],
              items: [
                { text: "will likely pose somewhat of a challenge", answer: 0 },
                { text: "tend to involve", answer: 0 },
                { text: "will undoubtedly be", answer: 1 },
                { text: "it is extremely difficult", answer: 1 },
                { text: "has led to the emergence of", answer: 2 },
                { text: "This leads to", answer: 2 },
                { text: "As outlined by … and expanded upon by …", answer: 3 },
                { text: "She adds that …", answer: 3 },
                { text: "However, while …", answer: 4 },
                { text: "In conclusion, …", answer: 4 }
              ]
            },
            {
              type: "table",
              id: "a5-notes",
              title: "My language analysis notes (the right-hand column of 1C)",
              columns: ["Paragraph", "Useful language I found", "Its job"],
              fixed: ["Introduction", "Body 1", "Body 2", "Conclusion"]
            },
            {
              type: "toggle",
              title: "Stuck? Some examples to start your notes",
              hint: "Try first!",
              blocks: [
                {
                  type: "model",
                  title: "Example notes",
                  rows: [
                    ["Introduction", "“has led to the emergence of” = cause → effect · “While … may be a positive step forward” = concession + hedging · “However, the most significant barrier … will undoubtedly be” = contrast + boosting → thesis"],
                    ["Body 1", "“will likely pose somewhat of a challenge, at least initially” = heavy hedging (a smaller challenge) · “resulting in / This leads to / hindering / making it easier” = cause → effect chain"],
                    ["Body 2", "“Therefore, a greater challenge is likely to be …” = topic sentence linking back to Body 1 · “According to / As … reports / She adds” = other voices · “Hence” = result · “not only … but also” = adding"],
                    ["Conclusion", "“In conclusion, while …” = summary + concession · “it is … that …” = emphasis · “will be critical” = recommendation"]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "a6",
          short: "Goals",
          minutes: 5,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-a6.svg",
          title: "Reflect: what will you take from Sample 3.1?",
          goal: "Choose what you will copy from the sample in Tuesday’s practice assessment.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Tick the things you want to do in your own essay on Tuesday." },
            {
              type: "checklist",
              id: "a6-check",
              title: "In my practice essay, I will …",
              items: [
                "write a thesis that answers the question directly (the ONE key …)",
                "put a smaller point first and turn to my main point with “However” or “Therefore, a greater …”",
                "start each body paragraph with a clear topic sentence",
                "link ideas with SO, BUT, BECAUSE and AND language",
                "bring in sources with different phrases (According to …, As … reports, … adds that …)",
                "hedge claims when the evidence is limited (likely, may, tend to)",
                "paraphrase my thesis in the conclusion and end with a recommendation"
              ]
            },
            {
              type: "fields",
              fields: [{ id: "a6-goal", label: "My one big goal for Tuesday", rows: 2, placeholder: "I will … because in my last essay I …" }]
            },
            { type: "do", n: 2, who: "pair", text: "Tell your partner your big goal in <b>one sentence</b>. Your partner asks: “How will you do that?”" },
            {
              type: "language",
              groups: [
                { label: "Set a goal", phrases: ["<b>My main goal is to</b> … ", "<b>I’m going to focus on</b> … because …", "<b>I’d like to improve</b> the way I …"] },
                { label: "Ask about it", phrases: ["<b>How exactly will you</b> …?", "<b>What will that look like</b> in your essay?", "<b>Can you give me an example?</b>"] }
              ]
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 2 · Reading to write · 150 min ───────────────────────── */
    {
      id: "rtw",
      number: "02",
      code: "2A",
      minutes: 150,
      tone: "blue",
      art: "dec10/assets/week4/s-d1-rtw.svg",
      title: "Reading to write",
      subtitle: "Ecotourism and the Sustainable Development Goals (Spenceley & Rylance, 2021)",
      outcome: "You take detailed notes from an academic text, use vocabulary to predict ideas, tell the writers’ voice from the voices of their sources, and show your own stance with careful language.",
      activities: [
        {
          id: "b1",
          short: "Your views",
          minutes: 15,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d1-b1.svg",
          title: "Preliminary Guided Discussion",
          goal: "Think about what you already know and feel about eco-tourism — and write it down so you can come back to it at the end of the week.",
          blocks: [
            {
              type: "key",
              title: "Your views today — and on Friday",
              points: [
                "This week’s topic is <b>eco-tourism</b>.",
                "Write your ideas now. At the end of the week you will ask: <b>Have my views changed?</b>",
                "Changing your mind after you read and listen is a sign of <b>criticality</b>, not weakness."
              ]
            },
            { type: "do", n: 1, who: "alone", text: "<b>Prepare (5 minutes).</b> Think about the three questions. Write short notes in the box (or in the Notes box in your Student’s book)." },
            {
              type: "cards",
              title: "Questions",
              numbered: true,
              items: [
                { label: "Meaning", text: "What do you understand by <b>eco-tourism</b>?" },
                { label: "Experience", text: "Have you seen or tried eco-tourism in Australia or in your country? What was it like?" },
                { label: "Attitude", text: "Can tourism be good for the environment and for local people? How do you feel about it?" }
              ]
            },
            {
              type: "fields",
              fields: [{ id: "b1-notes", label: "Notes: my views on eco-tourism (Monday)", rows: 5, placeholder: "1. Eco-tourism = …\n2. In my country …\n3. I think / feel …" }]
            },
            { type: "do", n: 2, who: "group", text: "<b>Discuss (10 minutes).</b> Discuss the three questions with your group. Everyone speaks for each question. One person reports one surprising idea to the class." },
            {
              type: "language",
              title: "Share your views politely",
              groups: [
                { label: "Give a view", phrases: ["<b>As far as I know,</b> eco-tourism means …", "<b>From my experience,</b> …", "<b>I tend to think</b> that …"] },
                { label: "Ask others", phrases: ["<b>What’s your take on</b> …?", "<b>Have you ever</b> …?", "<b>Would you agree that</b> …?"] },
                { label: "Agree / disagree", phrases: ["<b>That’s a good point, and</b> …", "<b>I see what you mean, but</b> …", "<b>I’m not sure I agree.</b> In my country …"] },
                { label: "Report", phrases: ["<b>Our group felt that</b> …", "<b>One interesting idea was</b> …", "<b>We didn’t all agree:</b> some of us … while others …"] }
              ]
            }
          ]
        },
        {
          id: "b2",
          short: "Warmer",
          minutes: 15,
          grouping: "Pair → Class",
          art: "dec10/assets/week4/v/v-d10w4d1-b2.svg",
          title: "Warmer: tourism and the Sustainable Development Goals",
          goal: "Spin a holiday, decide how “eco” it is, then guess some facts about the SDGs before you read.",
          blocks: [
            { type: "do", n: 1, who: "pair", text: "Spin the reels. Is this holiday good or bad for the planet and for local people? Give <b>two reasons</b>. Then your partner spins." },
            {
              type: "spinner",
              id: "b2-spin",
              title: "Eco or ego?",
              text: "Decide: 😊 good for people and planet · 😐 it depends · 😟 not so good. Say why.",
              reels: [
                { label: "Holiday", items: ["a jungle lodge built by local people", "a cruise ship tour", "a farm stay with meals from the farm", "whale shark snorkelling", "a mountain bike race through a national park", "a luxury beach resort", "a city break by plane for one weekend", "a guided walk with an Indigenous ranger"] },
                { label: "Think about", items: ["jobs for local people", "CO₂ from travel", "wildlife", "food and water", "who keeps the money", "what tourists learn"] }
              ]
            },
            {
              type: "language",
              groups: [
                { label: "Judge it", phrases: ["<b>On the plus side,</b> …", "<b>The downside is that</b> …", "<b>It depends on</b> whether …", "<b>I’d say it’s mostly</b> positive / negative, <b>mainly because</b> …"] }
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d1-sdg-tourism.svg",
              alt: "Five Sustainable Development Goal badges around a globe with a suitcase: Goal 2 Zero hunger, Goal 3 Good health and wellbeing, Goal 8 Decent work and economic growth, Goal 12 Responsible consumption and production, Goal 14 Life below water.",
              title: "Five of the 17 goals",
              hint: "Tap each goal. How could tourism help it?",
              size: "wide",
              spots: [
                { x: 15, y: 30, label: "2", title: "Goal 2 · Zero hunger", text: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture. <b>Tourism link?</b> Think about hotels, restaurants and local food.", color: "#c99a2e" },
                { x: 15, y: 74, label: "3", title: "Goal 3 · Good health and wellbeing", text: "Ensure healthy lives and promote wellbeing for all at all ages. <b>Tourism link?</b> Think about parks, nature and exercise.", color: "#3f8f4a" },
                { x: 85, y: 30, label: "8", title: "Goal 8 · Decent work and economic growth", text: "<b>Tourism link?</b> Think about jobs and income.", color: "#a3214a" },
                { x: 85, y: 74, label: "12", title: "Goal 12 · Responsible consumption and production", text: "<b>Tourism link?</b> Think about waste, water and energy in hotels.", color: "#b8862a" },
                { x: 50, y: 88, label: "14", title: "Goal 14 · Life below water", text: "<b>Tourism link?</b> Think about reefs, fish and diving.", color: "#2a6fb0" }
              ]
            },
            { type: "do", n: 2, who: "class", text: "Bet on your guesses. You will check them in Paragraph A of the reading." },
            {
              type: "bet",
              id: "b2-bet",
              title: "Before you read: bet on it",
              coins: 10,
              items: [
                { q: "In which year did governments adopt the 2030 Agenda and the Sustainable Development Goals?", options: ["2000", "2010", "2015", "2020"], answer: "2015", why: "Paragraph A: “In 2015, governments adopted the 2030 Agenda for Sustainable Development …”" },
                { q: "How many Sustainable Development Goals are there?", options: ["8", "12", "17", "25"], answer: "17", why: "“17 Sustainable Development Goals and 169 associated targets were agreed.”" },
                { q: "How many targets go with the goals?", options: ["17", "69", "169", "1,690"], answer: "169", why: "“… and 169 associated targets were agreed.”" },
                { q: "Tourism is named in the targets of how many goals?", options: ["Only 1", "3", "10", "All 17"], answer: "3", why: "Goals 8, 12 and 14 — but the writers say tourism can contribute to <b>all</b> of the goals (UNWTO, 2015)." }
              ]
            }
          ]
        },
        {
          id: "b3",
          short: "Vocabulary",
          minutes: 20,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b3.svg",
          title: "Vocabulary",
          goal: "Learn twelve words from the text, use their collocations, and predict what the reading is about.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Guess the meaning of the words in bold. Use the sentence (the context) to help you." },
            {
              type: "cards",
              title: "Words in context",
              numbered: true,
              items: [
                { text: "The new law aims to <b>remedy</b> the problem of dirty rivers." },
                { text: "Many families in dry regions do not have <b>food security</b>: they never know where the next meal will come from." },
                { text: "On an <b>agrotourism</b> holiday, visitors stay on a farm and help to pick fruit." },
                { text: "<b>Deforestation</b> around the park means the animals have less space every year." },
                { text: "Hunting is not allowed in a <b>protected area</b>." },
                { text: "Rainforests have high <b>biodiversity</b>: thousands of kinds of plants, insects and animals live there." },
                { text: "Entry tickets <b>generate revenue</b> that pays for the park rangers." },
                { text: "Money from visitors supports <b>conservation</b> work, such as replanting trees." },
                { text: "Turtles are an <b>endangered</b> species; very few are left in the wild." },
                { text: "As part of its <b>corporate social responsibility (CSR)</b>, the hotel group funds a local school." },
                { text: "The village started several <b>initiatives</b> to reduce plastic waste." },
                { text: "Volunteers <b>refurbished</b> the old clinic with new beds and equipment." }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Match the words to their meanings. Then check the word stress with your partner — say each word aloud." },
            {
              type: "match",
              id: "b3-match",
              title: "Words and meanings",
              left: ["remedy (v)", "food security", "agrotourism", "deforestation", "protected area", "biodiversity", "revenue", "conservation", "endangered", "corporate social responsibility", "initiative", "refurbish"],
              right: [
                "to correct or improve a bad situation",
                "having reliable access to enough safe, healthy food",
                "holidays on farms where tourists learn about farming",
                "the cutting down of forests over a large area",
                "land or sea where nature is legally protected",
                "the variety of plants and animals in a place",
                "income, especially money that an organisation receives",
                "the protection of nature, plants and animals",
                "at risk of disappearing for ever",
                "a company’s duty to help society and the environment, not only make profit",
                "a new plan or project to solve a problem",
                "to repair and improve a building or room"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d1-collocations.svg",
              size: "wide",
              alt: "A mind map with “eco-tourism” in the centre and six branches of collocations from the text: achieve food security, promote sustainable agriculture; generate revenue, provide extra income, create jobs; support conservation efforts, protect reefs; prevent health issues, ease the stress; endangered species, protected areas; reduce the risks of poverty, manage resources.",
              caption: "Collocations from the text: words that often go together."
            },
            {
              type: "flip",
              title: "Collocation flip: guess the partner word",
              hint: "Say the missing word, then turn the card.",
              items: [
                { front: "achieve food ______", back: "achieve food <b>security</b>" },
                { front: "______ revenue for conservation", back: "<b>generate</b> revenue for conservation" },
                { front: "provide extra ______ for farmers", back: "provide extra <b>income</b> for farmers" },
                { front: "______ the risks of poverty", back: "<b>reduce</b> the risks of poverty" },
                { front: "support conservation ______", back: "support conservation <b>efforts</b>" },
                { front: "______ health issues like obesity", back: "<b>prevent</b> health issues like obesity" }
              ]
            },
            { type: "do", n: 3, who: "pair", text: "<b>Predict.</b> Look at the words and the mind map. What do you think the reading is about? Agree on <b>one sentence</b>." },
            {
              type: "fields",
              fields: [{ id: "b3-predict", label: "Our prediction", rows: 2, placeholder: "We think the text explains how eco-tourism can …" }]
            },
            {
              type: "language",
              groups: [
                { label: "Predict", phrases: ["<b>Judging by</b> the vocabulary, the text <b>probably</b> …", "<b>It looks as if</b> the writers will discuss …", "<b>I’d expect</b> the text <b>to</b> mention …"] }
              ]
            }
          ]
        },
        {
          id: "b4",
          short: "Annotate",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b4.svg",
          title: "Annotated reading",
          goal: "Read the introduction actively, check your prediction and mark the text so it talks back to you.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-annotate.svg",
              alt: "Annotation tools on a page: a highlighter for key ideas, a circle for key words, an underline with an arrow (→) to a margin comment, a question mark for parts you don’t understand, and !!! for important points.",
              caption: "Your annotation tools from Week 2: highlight · circle · underline + → · <b>?</b> · <b>!!!</b>"
            },
            { type: "do", n: 1, who: "alone", text: "You have <b>5 minutes</b>. Read Paragraph A. Was your prediction right? Annotate the paragraph: highlight, circle, add <b>?</b> and <b>!!!</b> and write comments in the Notes column of your Student’s book (or in the box)." },
            {
              type: "passage",
              id: "b4-a",
              title: "Spenceley & Rylance (2021) · Introduction · Paragraph A",
              text: "A. In 2015, governments adopted the 2030 Agenda for Sustainable Development and the Sustainable Development Goals (SDGs). The agenda established a global framework to end extreme poverty, fight inequality and injustice, and remedy climate change. Building on the Millennium Development Goals (MDGs), 17 Sustainable Development Goals and 169 associated targets were agreed. Tourism has been included within the targets for Goal 8 on decent work and economic growth, Goal 12 on responsible consumption and production, and Goal 14 on life below water. However, tourism has the potential to contribute, directly or indirectly, to all of the goals (UNWTO, 2015). The following two sections present 2 of the SDGs and how they relate to tourism."
            },
            {
              type: "fields",
              fields: [{ id: "b4-notes", label: "My margin: comments, questions, thoughts", rows: 4, placeholder: "!!! tourism → ALL 17 goals (UNWTO)\n? What were the MDGs?\n→ next: Goal 2 + Goal 3" }]
            },
            { type: "do", n: 2, who: "pair", text: "Share your annotations. <b>Say</b> why you marked each thing. Then tell your partner what the whole text will be about, in one sentence." },
            {
              type: "language",
              title: "Talk about your annotations",
              groups: [
                { label: "Explain", phrases: ["<b>I highlighted</b> … <b>because</b> it’s the main idea.", "<b>I put a question mark</b> next to … — what does it mean?", "<b>This is important because</b> it tells us the structure of the text."] },
                { label: "Check the prediction", phrases: ["<b>We were right about</b> …", "<b>We didn’t expect</b> the text to …", "<b>So the text will focus on</b> Goals 2 and 3."] }
              ]
            }
          ]
        },
        {
          id: "b5",
          short: "Notes",
          minutes: 30,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b5.svg",
          title: "Reading for detail: note taking",
          goal: "Read Paragraphs B–F and take detailed notes on how tourism helps Goal 2 and Goal 3 — with the evidence and who says it.",
          blocks: [
            { type: "tip", text: "The whole text is in your <b>Student’s book</b> (W4 D1 2B) with a <b>Notes</b> column. Cite it as <b>Spenceley and Rylance (2021)</b> or <b>(Spenceley &amp; Rylance, 2021)</b>." },
            { type: "sources", ids: ["ecosdg"] },
            {
              type: "key",
              title: "Notes for writing need three things",
              points: [
                "<b>The idea</b> — in your own words, as short notes.",
                "<b>The example or evidence</b> — a place, a number, a project.",
                "<b>Who says it</b> — the citation inside the text, e.g. (Braack &amp; Mearns, 2017). In an essay you need to know whose voice it is."
              ]
            },
            { type: "do", n: 1, who: "pair", text: "Work with a partner. Read Paragraphs B–F. Complete one row for each paragraph. Use symbols (→ ↑ ↓ + ∴) and abbreviations." },
            {
              type: "table",
              id: "b5-notes",
              title: "Ecotourism and the SDGs: my notes",
              columns: ["Paragraph", "How tourism helps (main idea)", "Example / evidence", "Who says so? (citation)"],
              fixed: ["B · Goal 2 Zero hunger", "C · Goal 2 Zero hunger", "D · Goal 3 Good health", "E · Goal 3 Good health", "F · Goal 3 Good health"]
            },
            { type: "do", n: 2, who: "alone", text: "Practise squeezing long sentences into short notes. Stay under the character limit." },
            {
              type: "squeeze",
              id: "b5-sq",
              title: "Squeeze it!",
              hint: "Keep numbers, places and key terms. Cut the rest.",
              items: [
                { text: "Farming and using natural resources are still the main sources of jobs in many rural areas, especially in poor communities in developing countries, where they provide 55% of the employment and are the primary source of income.", max: 60, model: "Rural poor (dev. countries): farming + nat. res. = 55% jobs" },
                { text: "These areas also allow for tourism activities like whale shark viewing and manta ray diving, which create jobs for local people.", max: 45, model: "Whale shark / manta ray tours → local jobs" },
                { text: "With the COVID-19 pandemic, visiting natural areas became even more important to help ease the stress of lockdowns.", max: 40, model: "COVID: nature visits ↓ lockdown stress" }
              ]
            },
            { type: "do", n: 3, who: "pair", text: "Cover the text. Use only your notes to <b>explain one paragraph to your partner</b> in 30 seconds. Can your partner guess which paragraph it is?" },
            {
              type: "language",
              title: "Explain from your notes",
              groups: [
                { label: "Main idea", phrases: ["<b>This paragraph is about</b> how tourism …", "<b>The writers explain that</b> …", "<b>The main point is that</b> …"] },
                { label: "Evidence", phrases: ["<b>For example,</b> in Tanzania and Mozambique …", "<b>According to</b> Braack and Mearns (2017), …", "<b>A study of</b> 49 protected areas <b>showed that</b> …"] }
              ]
            }
          ],
          answers: {
            title: "Suggested notes (yours can be different)",
            items: [
              ["B · Goal 2", "Tourism → sust. agriculture: hotels/restaurants buy local food + local products sold to tourists. Agrotourism = extra income for farmers + educational experience for tourists (UNWTO & UNDP, 2017). Farming/nat. res. = 55% of rural jobs in poor communities (Schiere & Kater, 2001). 49 tropical protected areas becoming isolated (deforestation) → management must include local econ. & social issues (Naughton-Treves et al., 2005). Different incomes → ↓ risk of poverty (Ashley, Mdoe & Reynolds, 2002)."],
              ["C · Goal 2", "Small community-managed marine protected areas = safe places for fish to breed → supports local fishing (food). Tourism: whale shark viewing, manta ray diving → local jobs. E.g. andBeyond in Tanzania & Mozambique; also stopping overfishing, protecting reefs, teaching responsible fishing (Braack & Mearns, 2017)."],
              ["D · Goal 3", "Growing evidence: protected areas → health benefits. “Healthy Parks Healthy People”, IUCN World Parks Congress 2014 (Spenceley, 2017). Biodiversity visits prevent obesity, heart disease, depression, anxiety (Sparkes & Woods, 2009). Parks Victoria + Medibank + Heart Foundation: doctors suggest activity in parks. COVID: nature eased lockdown stress (Spenceley, 2021; Spenceley et al., 2021)."],
              ["E · Goal 3", "Sports tourism in protected areas → revenue for conservation + shows value of biodiversity to communities. E.g. southern African transfrontier conservation areas: Tour de Tuli (mountain biking), Desert Knights (canoe + bike), Wildruns (trail runs) (Spenceley, 2018a). → jobs + local economy."],
              ["F · Goal 3", "Ecotourism companies’ CSR funds → rural clinics, hospitals, medical equipment. E.g. Africa Foundation (andBeyond guests/donors) near Phinda Game Reserve, South Africa: 20+ years — clinic in Mduku, refurbished clinic, HIV/AIDS workshops, water supply, school permaculture (Snyman & Spenceley, 2019)."]
            ]
          }
        },
        {
          id: "b6",
          short: "Summarise",
          minutes: 20,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b6.svg",
          title: "Summarise/ paraphrase",
          goal: "Build a summary of the whole text, then paraphrase key sentences in your own words.",
          blocks: [
            {
              type: "key",
              title: "Three ways in — choose your level",
              points: [
                "<b>Option 1</b> · Fill the gaps in a summary (easier).",
                "<b>Option 2</b> · Put the parts of the summary in order.",
                "<b>Option 3</b> · Paraphrase sentences from the text yourself (harder). Fast finishers: do all three!"
              ]
            },
            { type: "do", n: 1, who: "alone", text: "<b>Option 1.</b> Choose the best word for each gap. Use the text or your notes." },
            {
              type: "cloze",
              id: "b6-cloze",
              title: "Fill in the summary",
              text: "Spenceley and Rylance (2021) explain how tourism can help to achieve the Sustainable Development Goals. Although tourism is named in the targets of only three goals, it has the potential to {{1}} to all of them. For Goal 2, tourism supports sustainable {{2}} because hotels and restaurants buy local food, and agrotourism gives farmers extra {{3}}. Having different ways to earn money also reduces the risks of {{4}} for poor communities. In addition, community-managed marine {{5}} areas give fish safe places to breed while creating tourism jobs such as whale shark viewing. For Goal 3, visiting places rich in {{6}} can prevent health problems like heart disease and anxiety. Sports tourism events generate {{7}} for conservation, and ecotourism companies use their corporate social {{8}} funds to build and improve clinics.",
              options: ["contribute", "agriculture", "income", "poverty", "protected", "biodiversity", "revenue", "responsibility", "deforestation", "pollution"],
              answers: ["contribute", "agriculture", "income", "poverty", "protected", "biodiversity", "revenue", "responsibility"],
              why: [
                "Paragraph A: “tourism has the potential to contribute, directly or indirectly, to all of the goals”.",
                "Paragraph B: “Tourism can help sustainable agriculture …”.",
                "Paragraph B: agrotourism “can provide extra income for farmers”.",
                "Paragraph B: different ways to earn money “reduces their risks of poverty”.",
                "Paragraph C: “small community-managed marine protected areas”.",
                "Paragraph D: “Visiting places with lots of biodiversity can prevent health issues …”.",
                "Paragraph E: sports tourism “helps generate revenue for conservation”.",
                "Paragraph F: “Corporate social responsibility efforts by ecotourism companies …”."
              ]
            },
            { type: "do", n: 2, who: "pair", text: "<b>Option 2.</b> Put the parts of a different summary in the right order. Read your order aloud to your partner — does it sound logical?" },
            {
              type: "order",
              id: "b6-order",
              title: "Order the summary",
              items: [
                "Spenceley and Rylance (2021) argue that tourism can contribute to all 17 Sustainable Development Goals,",
                "and they present two examples: Goal 2 (zero hunger) and Goal 3 (good health and wellbeing).",
                "First, tourism supports food security by buying local produce and giving farmers a second income,",
                "while marine protected areas protect fish stocks and create jobs in wildlife tourism.",
                "Second, nature-based tourism improves health, as visits to biodiverse places can prevent illness,",
                "and sports events and company CSR funds pay for conservation and local clinics."
              ],
              ends: ["First", "Last"],
              why: "Overview of the text → the two goals → Goal 2 (two ideas joined with “while”) → Goal 3 (two ideas joined with “and”)."
            },
            { type: "do", n: 3, who: "alone", text: "<b>Option 3.</b> Paraphrase. Use the technique in italics. Keep the citation." },
            {
              type: "para",
              id: "b6-para",
              title: "Paraphrase it",
              hint: "The meter shows how many words you copied. Change the words AND the structure.",
              items: [
                {
                  text: "Visiting places with lots of biodiversity can prevent health issues like obesity, heart disease, depression, and anxiety (Sparkes & Woods, 2009).",
                  strategy: "start with the source; use synonyms",
                  keep: ["Sparkes"],
                  model: "According to Sparkes and Woods (2009), spending time in biodiverse places may help people avoid physical and mental illnesses such as heart disease and anxiety."
                },
                {
                  text: "It’s important for poor communities to have different ways to earn money. This helps them not rely only on one source of income, like farming, and reduces their risks of poverty (Ashley, Mdoe, & Reynolds, 2002).",
                  strategy: "join the two sentences; use a noun (nominalisation)",
                  keep: ["Ashley"],
                  model: "Income diversification is essential for poor communities, as it reduces their dependence on farming alone and lowers the risk of poverty (Ashley, Mdoe, & Reynolds, 2002)."
                }
              ]
            },
            {
              type: "language",
              title: "Summary and paraphrase toolkit",
              groups: [
                { label: "Start a summary", phrases: ["<b>In their 2021 chapter,</b> Spenceley and Rylance <b>examine</b> …", "The writers <b>outline</b> / <b>show</b> how …", "<b>The main argument is that</b> …"] },
                { label: "Move on", phrases: ["<b>Firstly,</b> … <b>Secondly,</b> …", "<b>With regard to</b> Goal 3, …", "<b>In addition,</b> … / <b>Furthermore,</b> …"] },
                { label: "Paraphrase moves", phrases: ["Change the word form: <b>diverse → diversification</b>", "Change the order: put the <b>source first</b>", "Use a synonym: <b>prevent → help people avoid</b>"] }
              ]
            }
          ]
        },
        {
          id: "b7",
          short: "Test practice",
          minutes: 15,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b7.svg",
          title: "Building Understanding",
          goal: "Answer test-style questions about the text, then explain your choices to a partner.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Choose the best option for each question. Find the line in the text that proves your answer." },
            {
              type: "quiz",
              id: "b7-quiz",
              title: "Choose the best option",
              items: [
                {
                  q: "The purpose of this text is to",
                  options: ["A · argue that tourism damages protected areas.", "B · explain how tourism can contribute to the Sustainable Development Goals.", "C · compare the Millennium Development Goals with the SDGs.", "D · describe the history of ecotourism in Africa."],
                  answer: "B · explain how tourism can contribute to the Sustainable Development Goals.",
                  why: "Paragraph A: “The following two sections present 2 of the SDGs and how they relate to tourism.”"
                },
                {
                  q: "According to Paragraph A, tourism is named in the targets for",
                  options: ["A · Goals 2 and 3.", "B · Goals 8, 12 and 14.", "C · all 17 goals.", "D · the Millennium Development Goals only."],
                  answer: "B · Goals 8, 12 and 14.",
                  why: "“Tourism has been included within the targets for Goal 8 …, Goal 12 … and Goal 14 …” — it CAN contribute to all goals, but it is only named in three."
                },
                {
                  q: "The study of 49 tropical protected areas suggests that management should",
                  options: ["A · stop all tourism near the borders.", "B · focus only on protecting the forest.", "C · also deal with wider local economic and social issues.", "D · move local communities away from the parks."],
                  answer: "C · also deal with wider local economic and social issues.",
                  why: "Paragraph B: “This indicates that effective management should also focus on broader local economic and social issues.”"
                },
                {
                  q: "How do small community-managed marine protected areas help reduce hunger?",
                  options: ["A · They give fish safe places to breed, which supports local fishing.", "B · They ban fishing completely.", "C · They import fish for tourists.", "D · They pay fishers not to work."],
                  answer: "A · They give fish safe places to breed, which supports local fishing.",
                  why: "Paragraph C: “… safe spaces where fish can breed and grow. This supports local fishing which many communities rely on for food.”"
                },
                {
                  q: "The Tour de Tuli, Desert Knights and Wildruns are examples of",
                  options: ["A · health programmes run by doctors.", "B · sports tourism events that fund conservation.", "C · CSR projects of the Africa Foundation.", "D · agrotourism in southern Africa."],
                  answer: "B · sports tourism events that fund conservation.",
                  why: "Paragraph E: adventure tourism events that “help in funding conservation efforts” and local economies."
                },
                {
                  q: "What does the example of the Africa Foundation show?",
                  options: ["A · Tourists rarely give money to local projects.", "B · Donations linked to ecotourism lodges can improve public health.", "C · Clinics in South Africa are funded by the government.", "D · CSR projects last only a few years."],
                  answer: "B · Donations linked to ecotourism lodges can improve public health.",
                  why: "Paragraph F: for over twenty years, contributions have supported a clinic in Mduku, HIV/AIDS workshops, water supply …"
                }
              ]
            },
            {
              type: "talk",
              title: "Prove it",
              prompts: [
                "Choose your <b>hardest</b> question. Explain to your partner why the wrong options are wrong.",
                "Which paragraph would be most useful for an essay on eco-tourism and local communities? Why?"
              ]
            },
            {
              type: "language",
              groups: [
                { label: "Justify an answer", phrases: ["<b>I chose</b> B <b>because the text says</b> “…”", "<b>Option</b> C <b>is a trap</b>: the text mentions it, but …", "<b>The key word here is</b> … — it shows that …"] }
              ]
            }
          ]
        },
        {
          id: "b8",
          short: "Voice + stance",
          minutes: 15,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-b8.svg",
          title: "Language focus: Voice and Stance",
          goal: "Tell the writers’ own voice from the voices of their sources, and use evaluative language to show your stance.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-voices.svg",
              size: "wide",
              alt: "Two speech bubbles over a page. Left, blue: the voice of a source — a sentence ending with a citation in brackets, for example (Braack & Mearns, 2017). Right, green: the writers’ own voice — no citation, often with evaluative words like “a great example” or “not only … but also”.",
              caption: "A citation = the voice of a <b>source</b>. No citation = usually the <b>writers’ own</b> voice (and their stance)."
            },
            { type: "do", n: 1, who: "pair", text: "Read Paragraph E. Tap the words that show the <b>writers’ own</b> evaluation (their stance)." },
            {
              type: "spot",
              id: "b8-spot",
              title: "Paragraph E · Where is the writers’ stance?",
              label: "Tap the evaluative language: words that judge or emphasise.",
              paras: [
                "E. Promoting sports tourism is [[*gaining interest]] in protected areas as it helps generate revenue for conservation and shows the [[*positive impact]] of biodiversity on local communities. [[*A great example]] of this is seen in the adventure tourism events in the southern African transfrontier conservation areas. These include the Tour de Tuli, a cross-border mountain biking event, Desert Knights, which combines canoeing and mountain biking, and Wildruns, which are cross-border trail runs [[(Spenceley, 2018a)]]. These sports events [[*not only]] help in funding conservation efforts [[*but also]] contribute to local economies by creating job opportunities and showcasing the social benefits of preserving biodiversity."
              ]
            },
            {
              type: "quiz",
              id: "b8-quiz",
              title: "Whose voice?",
              items: [
                {
                  q: "“A study of 49 tropical protected areas showed that they are becoming isolated as deforestation continues around their borders.” (Paragraph B) — whose voice is this?",
                  options: ["The writers’ own voice", "The voice of a source (Naughton-Treves, Holland, & Brandon, 2005)"],
                  answer: "The voice of a source (Naughton-Treves, Holland, & Brandon, 2005)",
                  why: "The finding comes from the study cited at the end of the next sentence."
                },
                {
                  q: "“These sports events not only help in funding conservation efforts but also contribute to local economies …” (Paragraph E) — whose voice is this?",
                  options: ["The writers’ own voice", "The voice of Spenceley (2018a)"],
                  answer: "The writers’ own voice",
                  why: "There is no citation. The writers draw their own conclusion from the examples — and “not only … but also” shows they value both benefits."
                },
                {
                  q: "“There is growing scientific evidence that protected areas have health benefits.” (Paragraph D) — what is the writers’ stance?",
                  options: ["Uncertain: they doubt the evidence", "Positive and fairly confident: evidence is increasing", "Negative: protected areas are unhealthy"],
                  answer: "Positive and fairly confident: evidence is increasing",
                  why: "“Growing scientific evidence” is evaluative: it tells us the writers think the claim is well supported."
                }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Some reporting verbs show <b>your</b> judgement of a source. Match each verb to its use." },
            {
              type: "match",
              id: "b8-verbs",
              title: "Evaluative reporting verbs",
              left: ["contend", "exaggerate", "claim", "assume", "imply"],
              right: [
                "to indicate that someone argues or states something in a strong and firm way; it can also show that you disagree with your source’s position",
                "to indicate that the source places too much emphasis on something",
                "to indicate that the statement is their belief, rather than a confirmed fact, suggesting further evidence is needed",
                "to indicate that you think the source has treated something as factual, but you believe it is not",
                "to indicate that the source says something indirectly"
              ]
            },
            { type: "do", n: 3, who: "alone", text: "Choose ONE idea from the text. Write 2 sentences: paraphrase it, then show your stance. The lights turn on when you use each kind of language." },
            {
              type: "detect",
              id: "b8-dt",
              title: "Show your stance",
              hint: "Example: Spenceley and Rylance (2021) claim that sports tourism benefits local economies. However, they do not explain how much of this money actually reaches local people.",
              checks: [
                { label: "The source", color: "#3a58a0", any: ["spenceley", "rylance", "/\\(\\d{4}\\)/", "according to"] },
                { label: "Reporting verb", color: "#7a4a8c", any: ["claim", "contend", "argue", "suggest", "imply", "assume", "exaggerate", "point out", "note", "show"] },
                { label: "Evaluation", color: "#c4562f", any: ["convincing", "useful", "important", "accurately", "rightly", "unclear", "limited", "however", "although", "while", "persuasive", "questionable", "overstat"] },
                { label: "Hedge", color: "#2f7d6b", any: ["may", "might", "could", "likely", "perhaps", "seems", "appears", "tend to", "possibly"] }
              ],
              items: [{ task: "My paraphrase + stance", rows: 4, placeholder: "Spenceley and Rylance (2021) claim that … However, …", model: "Spenceley and Rylance (2021) rightly point out that ecotourism companies can improve public health through their CSR funds, for example by building rural clinics. However, these benefits may depend on guests’ donations, so it is unclear whether they would continue if visitor numbers fell." }]
            },
            {
              type: "language",
              title: "Stance toolkit",
              groups: [
                { label: "Evaluative adjectives", phrases: ["a <b>convincing</b> / <b>useful</b> example", "a <b>limited</b> / <b>questionable</b> claim", "<b>It is important to note that</b> …"] },
                { label: "Attitude adverbs", phrases: ["<b>rightly</b> / <b>accurately</b> point out", "<b>Interestingly,</b> …", "<b>Surprisingly,</b> …"] },
                { label: "Hedging", phrases: ["This <b>may</b> / <b>could</b> suggest that …", "It <b>seems</b> that …", "… is <b>likely to</b> …"] },
                { label: "Signal your view", phrases: ["<b>However,</b> they do not explain …", "<b>While</b> this is true for …, …", "<b>This suggests that</b> …"] }
              ]
            }
          ]
        },
        {
          id: "b9",
          short: "Criticality",
          minutes: 10,
          grouping: "Groups of 4–5",
          art: "dec10/assets/week4/v/v-d10w4d1-b9.svg",
          title: "Criticality: who really benefits?",
          goal: "Look at eco-tourism from different people’s points of view and question what the text does not say.",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week4/d1-stakeholders.svg",
              alt: "An eco-tourism web: a lodge in the middle connected to five people — a farmer, a fisher, a tourist, a lodge manager and a conservation officer — with arrows showing money, food, jobs and protection moving between them.",
              title: "Who is in the picture?",
              hint: "Tap each person to read their role card.",
              size: "wide",
              spots: [
                { x: 16, y: 28, label: "A", title: "A · Local farmer", text: "You sell fruit and vegetables to the lodge and host agrotourism visits. Extra income is great — but what if the tourists stop coming?", color: "#4c7a2e" },
                { x: 84, y: 28, label: "B", title: "B · Fisher from the coast", text: "Part of your fishing area is now a marine protected area. Fish numbers are growing and you guide manta ray dives. But you have to follow new rules.", color: "#2d7a9a" },
                { x: 16, y: 76, label: "C", title: "C · International tourist", text: "You paid a lot for an ‘eco’ holiday and you flew 12 hours. You learned a lot — but how green was your trip?", color: "#c4562f" },
                { x: 84, y: 76, label: "D", title: "D · Lodge manager", text: "Your company funds a clinic with its CSR budget and guests’ donations. You need the lodge to make a profit too.", color: "#8a4f9e" },
                { x: 50, y: 90, label: "E", title: "E · Conservation officer", text: "Sports events and park fees generate revenue for conservation. But more visitors also mean more pressure on wildlife.", color: "#b07d12" }
              ]
            },
            { type: "do", n: 1, who: "group", text: "Each person takes one role card (A–E). Spin for a question. Answer it <b>in role</b> for 30 seconds. Then the others respond." },
            {
              type: "spinner",
              id: "b9-spin",
              title: "Panel questions",
              reels: [
                { label: "Question", items: ["What is the biggest benefit of eco-tourism for you?", "What worries you most about it?", "Who keeps most of the money?", "What does the text NOT tell us about your situation?", "Should there be fewer tourists or more? Why?", "What one rule would you introduce?"] }
              ]
            },
            {
              type: "talk",
              title: "Step out of role",
              prompts: [
                "Spenceley and Rylance (2021) focus on the <b>benefits</b> of tourism. What questions would a critical reader ask?",
                "Look at your notes from the Preliminary Guided Discussion. Has anything changed already?"
              ]
            },
            {
              type: "language",
              title: "Panel discussion moves",
              groups: [
                { label: "Speak in role", phrases: ["<b>Speaking as</b> a local farmer, I’d say …", "<b>From where I stand,</b> …", "<b>For people like me,</b> the main benefit is …"] },
                { label: "Respond", phrases: ["<b>I take your point, but</b> …", "<b>Could I just come in here?</b> …", "<b>That may be true for</b> …, <b>but not for</b> …"] },
                { label: "Question the text", phrases: ["<b>The text doesn’t mention</b> …", "<b>It would be useful to know</b> whether …", "<b>The examples seem to come mainly from</b> …"] }
              ]
            },
            { type: "tip", text: "Keep these questions in mind. Tomorrow you meet two more sources on eco-tourism — a BBC podcast and an article on “blue-washing”." }
          ]
        }
      ]
    },

    /* ───────────────────────── 3 · Listening to write: Lead-in · 15 min ───────────────────────── */
    {
      id: "ltwlead",
      number: "03",
      code: "3A",
      minutes: 15,
      tone: "teal",
      art: "dec10/assets/week4/s-d1-ltwlead.svg",
      title: "Listening to write: Lead-in",
      subtitle: "A BBC podcast: Can tourism ever be good for the climate?",
      outcome: "You know the key words of the podcast and you have predictions to check while you listen for homework.",
      activities: [
        {
          id: "c1",
          short: "Words first",
          minutes: 8,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d1-c1.svg",
          title: "Vocabulary",
          goal: "Learn the key words you will hear in the podcast.",
          blocks: [
            {
              type: "key",
              title: "Tonight’s listening",
              points: [
                "<b>Alom, Q. (2023).</b> <i>Can tourism ever be good for the climate?</i> BBC, <i>The Climate Question</i> (podcast).",
                "The episode looks at <b>Costa Rica</b>, a country famous for eco-tourism, and talks to eco-tourism researcher <b>Ralf Buckley</b>.",
                "This is your <b>second source</b> for this week (Source 2). You will use it on Tuesday."
              ]
            },
            { type: "do", n: 1, who: "pair", text: "Match the words to their meanings. Then test your partner: say a meaning — your partner says the word." },
            {
              type: "match",
              id: "c1-match",
              title: "Podcast words",
              left: ["carbon footprint", "emissions", "carbon-intensive", "accommodation", "vague", "unregulated", "penalty", "falsely advertise", "corruption is rife", "GDP"],
              right: [
                "the total amount of CO₂ caused by a person, product or activity",
                "gases (like CO₂) that are sent out into the air",
                "producing a lot of CO₂ (e.g. food high in meat and seafood)",
                "a place to stay, e.g. a hotel or lodge",
                "not clear or exact",
                "not controlled by rules or laws",
                "a punishment, often a fine, for breaking a rule",
                "to say something untrue about a product to sell it",
                "dishonest behaviour (e.g. paying for a ‘green’ label) is very common",
                "gross domestic product: the total value of what a country produces in a year"
              ]
            },
            {
              type: "flip",
              title: "Say it in a sentence",
              hint: "Make a sentence with the word, then turn the card for an example.",
              items: [
                { front: "carbon footprint", back: "Flying long distances makes a holiday’s <b>carbon footprint</b> much bigger." },
                { front: "unregulated", back: "If eco-tourism is <b>unregulated</b>, anyone can call their hotel ‘green’." },
                { front: "penalty", back: "There should be a <b>penalty</b> for operators that make false claims." },
                { front: "carbon-intensive", back: "Meat and seafood are more <b>carbon-intensive</b> than vegetables." }
              ]
            }
          ]
        },
        {
          id: "c2",
          short: "Predict",
          minutes: 7,
          grouping: "Pair → Class",
          art: "dec10/assets/week4/v/v-d10w4d1-c2.svg",
          title: "Predict",
          goal: "Say what you think, then predict what the podcast will say.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-podcast-card.svg",
              size: "wide",
              alt: "A podcast card: The Climate Question, BBC. Episode: Can tourism ever be good for the climate? Presenter: Alom (2023). A map pin on Costa Rica with rainforest and beach, and an expert badge for eco-tourism researcher Ralf Buckley. Icons around the edge: a plane, a hotel, a plate of food and a leaf.",
              caption: "Alom (2023) · BBC <i>The Climate Question</i> · Costa Rica · Ralf Buckley"
            },
            {
              type: "scale",
              id: "c2-scale",
              title: "What do you think now?",
              statement: "Tourism can be good for the climate.",
              ends: ["Strongly disagree", "Strongly agree"],
              mid: "Not sure"
            },
            { type: "do", n: 1, who: "pair", text: "Predict. Will the podcast talk about these things? Choose for each one. Then tell your partner why." },
            {
              type: "grid",
              id: "c2-grid",
              title: "My predictions",
              rows: [
                "where the idea of eco-tourism came from",
                "how much money tourism brings to Costa Rica",
                "how much of the world’s CO₂ comes from tourism",
                "the carbon footprint of hotels and food",
                "whether tourists change their habits after an eco-holiday",
                "laws and rules for ‘sustainable’ tourism"
              ],
              columns: ["My prediction"],
              options: ["Yes, I think so", "Maybe", "No, I don’t think so"]
            },
            { type: "do", n: 2, who: "class", text: "Your teacher plays the recording — the opening only. Listen: what is the <b>main question</b> of the episode? Check your predictions properly for homework." },
            {
              type: "listening",
              source: "Alom (2023) · BBC The Climate Question",
              title: "Can tourism ever be good for the climate?",
              videoId: "",
              audio: "",
              start: 0,
              transcripts: []
            },
            {
              type: "language",
              groups: [
                { label: "Predict", phrases: ["<b>I expect the podcast to</b> mention …", "<b>It will probably</b> talk about …", "<b>I doubt it will</b> discuss …, <b>because</b> …"] }
              ]
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 4 · Listening to write Homework ───────────────────────── */
    {
      id: "ltwhw",
      number: "04",
      code: "4A",
      minutes: 45,
      tone: "amber",
      art: "dec10/assets/week4/s-d1-ltwhw.svg",
      title: "Listening to write Homework",
      subtitle: "Listen to Alom (2023) and take notes under six headings",
      outcome: "You have organised notes on the podcast (Source 2) under the six headings you will use in tomorrow’s mediation lesson.",
      activities: [
        {
          id: "d1",
          short: "Set up",
          minutes: 5,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d1-d1.svg",
          title: "Before you listen: organise your notes",
          goal: "Set up your notes under the six headings from the Student’s book.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d1-notes-grid.svg",
              size: "wide",
              alt: "A notes grid with six coloured rows: 1 Intro / background, 2 Economic development, 3 Environment protection, 4 Social benefits, 5 Tourist benefits, 6 Legislation. Three columns: Source 1 Spenceley & Rylance (2021), Source 2 Alom (2023) — highlighted, tonight — and Source 3 Mielly (2023), tomorrow.",
              caption: "W4 D2 6C <b>Building understanding across texts</b>. Tonight you fill the <b>Source 2</b> column."
            },
            {
              type: "key",
              title: "How to listen for writing",
              points: [
                "Listen <b>for the headings</b>, not for every word.",
                "Write <b>notes</b>: key words, numbers, symbols (→ ↑ ↓ ≠ ∴).",
                "Mark <b>BUT</b> when a speaker turns an idea around — those turns are often the best material for an essay.",
                "Some headings may get <b>little or nothing</b>. That is useful information too."
              ]
            },
            { type: "tip", text: "If you can, listen <b>twice</b>: first for the main ideas, then again to add numbers and details." }
          ]
        },
        {
          id: "d2",
          short: "Listen + notes",
          minutes: 30,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d1-d2.svg",
          title: "Listen and take notes: Source 2 Alom (2023)",
          goal: "Take notes on the podcast under the six headings.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Your teacher plays the recording, or shares it with you on Canvas. Listen to the whole episode." },
            {
              type: "listening",
              source: "Alom (2023) · BBC The Climate Question",
              title: "Can tourism ever be good for the climate?",
              videoId: "",
              audio: "",
              start: 0,
              transcripts: []
            },
            { type: "do", n: 2, who: "alone", text: "Write your notes in the table (and in the Source 2 column of your Student’s book). Use symbols and abbreviations." },
            {
              type: "table",
              id: "d2-notes",
              title: "Building understanding across texts · Source 2: Alom (2023)",
              columns: ["Ideas", "My notes: Alom (2023)"],
              fixed: ["1. Intro / background", "2. Economic development", "3. Environment protection", "4. Social benefits", "5. Tourist benefits", "6. Legislation"]
            },
            {
              type: "squeeze",
              id: "d2-sq",
              title: "Warm-up: squeeze it",
              hint: "Practise quick notes before you listen.",
              items: [
                { text: "The type of food consumed in tourism is often more carbon-intensive because it is high in protein, with more meat, more fish and more seafood.", max: 45, model: "Tourist food = ↑ CO₂ (meat, fish, seafood)" },
                { text: "Legislation is needed so that there are penalties for operators that falsely advertise sustainable packages.", max: 40, model: "Need laws → penalties for false ‘eco’ ads" }
              ]
            }
          ],
          answers: {
            title: "Suggested notes (open after you listen)",
            items: [
              ["1. Intro / background", "Eco-tourism introduced in the 1970s: to support conservation financially while minimising environmental impacts. BUT definition still vague; similar terms (sustainable / responsible tourism) add confusion → the term doesn’t mean much any more."],
              ["2. Economic development", "2021: Costa Rica earned nearly 5% of its GDP from tourism."],
              ["3. Environment protection", "Tourism = about 10% of global CO₂ emissions (travel, accommodation, food). Accommodation: heating/cooling constantly running. Food: surprisingly large footprint — more protein, meat, fish, seafood. Eco-tourism can have positive impacts for conservation BUT the cost = a significant contribution to climate change."],
              ["4. Social benefits", "(Not discussed — leave empty or write “not mentioned”.)"],
              ["5. Tourist benefits", "Research: tourists do not really change their habits after an eco-tourism experience."],
              ["6. Legislation", "Sustainable (eco-)tourism is unregulated. Legislation needed so it fulfils its purpose + penalties for operators that falsely advertise. Corruption is rife: operators can pay to get a ‘sustainable’ tick."]
            ]
          }
        },
        {
          id: "d3",
          short: "Check + say it",
          minutes: 10,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d1-d3.svg",
          title: "After you listen: check and say it",
          goal: "Check your predictions, then record a one-minute summary that compares Source 1 and Source 2.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Look back at your predictions in the Lead-in. Then answer true or false — from your notes." },
            {
              type: "quiz",
              id: "d3-quiz",
              title: "True or false?",
              shared: ["True", "False"],
              items: [
                { q: "Eco-tourism was introduced in the 1970s.", answer: "True", why: "It aimed to support conservation financially while minimising environmental impacts." },
                { q: "Everyone agrees on a clear definition of eco-tourism.", answer: "False", why: "The definition has remained vague, and similar terms confuse things further." },
                { q: "In 2021, nearly 5% of Costa Rica’s GDP came from tourism.", answer: "True", why: "That is the podcast’s main economic figure." },
                { q: "Tourism produces about 10% of global CO₂ emissions.", answer: "True", why: "From travel, accommodation and food." },
                { q: "Research shows tourists change their habits after an eco-tourism trip.", answer: "False", why: "Research shows tourists do not really change their habits." },
                { q: "Sustainable tourism is strictly regulated.", answer: "False", why: "It is unregulated — legislation and penalties are needed, and operators can pay for a ‘sustainable’ tick." }
              ]
            },
            { type: "do", n: 2, who: "alone", text: "<b>Say it.</b> Record yourself (phone voice memo) for <b>one minute</b>: compare what Spenceley and Rylance (2021) and Alom (2023) say about eco-tourism. Use your notes only — no full sentences on paper. Bring your recording to class." },
            {
              type: "language",
              title: "Compare two sources out loud",
              groups: [
                { label: "Similar", phrases: ["<b>Both</b> sources agree that eco-tourism can support conservation.", "<b>Similarly,</b> Alom (2023) <b>also</b> points out that …", "<b>Like</b> Spenceley and Rylance (2021), …"] },
                { label: "Different", phrases: ["<b>Whereas</b> Spenceley and Rylance (2021) focus on the benefits, Alom (2023) …", "<b>In contrast,</b> the podcast highlights …", "Source 2 <b>raises a problem that</b> Source 1 <b>does not mention</b>: …"] },
                { label: "Your view", phrases: ["<b>Taken together,</b> the two sources suggest that …", "<b>On balance, I’d argue that</b> …", "<b>What remains unclear is</b> …"] }
              ]
            },
            {
              type: "fields",
              fields: [{ id: "d3-diff", label: "The biggest difference between Source 1 and Source 2 is …", rows: 3, placeholder: "Whereas Spenceley and Rylance (2021) …, Alom (2023) …" }]
            },
            { type: "tip", text: "Bring your notes tomorrow. In <b>W4 D2 Mediation</b> you add Source 3 (Mielly, 2023) and build understanding across all three texts." }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ["rhetorical function", "the job a sentence or paragraph does in a text, e.g. give background, state a thesis, give a reason", "The rhetorical function of Body 1 is to compare one challenge and show it is not the key one."],
    ["deconstruct", "to take a text apart to see how it is built", "We deconstructed Sample 3.1 sentence by sentence."],
    ["text map", "a diagram that shows how the ideas in a text link (SO, BUT, BECAUSE, AND)", "My text map showed that Body 2 has three reasons."],
    ["thesis", "the writer’s main position or answer to the question", "The thesis is that workforce readiness is the key challenge."],
    ["hedging", "language that makes a claim softer or more careful", "“May”, “likely” and “tend to” are hedging words."],
    ["booster", "a word that makes a claim stronger", "“Undoubtedly” is a booster."],
    ["stance", "the writer’s attitude or position towards an idea", "The writers’ stance on sports tourism is positive."],
    ["eco-tourism", "travel to natural areas that aims to protect the environment and help local people", "Eco-tourism is important for Costa Rica’s economy."],
    ["Sustainable Development Goals (SDGs)", "17 global goals agreed in 2015 to end poverty, fight inequality and remedy climate change by 2030", "Tourism can contribute to all of the SDGs."],
    ["biodiversity", "the variety of plants and animals in a place", "Places with high biodiversity attract many tourists."],
    ["conservation", "the protection of nature, plants and animals", "Park fees fund conservation."],
    ["revenue", "income that an organisation receives", "Sports events generate revenue for protected areas."],
    ["corporate social responsibility (CSR)", "a company’s duty to help society and the environment", "The lodge used its CSR funds to build a clinic."],
    ["carbon footprint", "the total amount of CO₂ caused by a person, product or activity", "Food makes up a surprising part of a holiday’s carbon footprint."],
    ["unregulated", "not controlled by rules or laws", "Sustainable tourism is still largely unregulated."]
  ]
};
