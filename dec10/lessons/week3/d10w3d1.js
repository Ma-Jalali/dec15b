/* DEC10 · Week 3 · Day 1 (Monday) — The workforce of the future: green jobs, green skills, good teams.
   Built from the Week 3 Teacher's Book, in the order and timings of the revised weekly map:
   W3 D1. 1A Building rapport (30) · 2A Reading to speak (120) · 3A AST: Group work skills: Supporting the group (90)
   · 4A Research summary preparation Homework.
   Protected texts are in dec10/lessons/week3/sources.js ("greening" = Bowen et al. 2018, "nvc" = the 3A video transcript)
   and are never changed here. Teacher's Book questions, options and keys are kept exactly. Added: pre-teaching,
   phrase banks, extra speaking and practice. 1A has no Teacher's Book content (the teacher plans it), so its
   activities are suggested rapport games on the week's topic.
   Keep the id 'd10w3d1' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: "d10w3d1",
  week: 3,
  day: 1,
  title: "Green jobs, good teams",
  duration: "About 4 hours + 1 hour homework",
  question: "What makes a job “green” — and how easily can today’s workers move into the green economy?",
  questionKind: "Big question",
  questionLabel: "This week’s big question · Week 3: The workforce of the future",
  journey: "Welcome to Week 3: the workforce of the future. Get to know your classmates, read about green jobs and green skills, link causes and effects, and test how hard it is to move from a non-green job to a green one. Then learn a four-step way to talk when your group has a problem — and start your next Research Summary.",
  image: "dec10/assets/week3/hero-d10w3d1.svg",
  imageAlt: "Illustration: a green city of the future with wind turbines, solar roofs and an electric train. Workers — a solar installer, an engineer with a tablet and an insulation installer — cross a bridge from an old factory to the green city. Below, four students talk around a table with speech bubbles marked Observe, Feel, Need and Request. A banner reads Week 3 · The workforce of the future.",
  finish: { title: "Day 2", text: "Share your research summary in a group, listen to a podcast about green skills, and try mediation" },
  goalShort: "the Research Summary presentations, the Seminar and the Interactive Presentation",
  sections: [
    /* ───────────────────────── 1A · Building rapport ───────────────────────── */
    {
      id: "rapport",
      number: "01",
      code: "1A",
      minutes: 30,
      tone: "green",
      art: "dec10/assets/week3/s-d1-rapport.svg",
      title: "Building rapport",
      subtitle: "A new week, a new topic: the jobs of the future",
      outcome: "You know your classmates a little better, and you can talk about jobs and the future in a friendly, relaxed way.",
      activities: [
        {
          id: "r1",
          short: "Bingo",
          minutes: 10,
          grouping: "Whole class",
          art: "dec10/assets/week3/v/v-d10w3d1-r1.svg",
          title: "Find someone who … (the future of work)",
          goal: "Walk, ask and listen. Find a different classmate for each square.",
          blocks: [
            { type: "sticky", title: "Say it like an academic · phrase of the day", text: "<b>“That’s interesting — could you tell me a bit more about …?”</b><br>Use it all day: in the bingo, in your reading group and in your group meeting this afternoon.", color: "green" },
            { type: "do", n: 1, who: "class", text: "Stand up. Ask a classmate a question from one square. If they say <b>yes</b>, write their name in the square — then ask <b>one follow-up question</b>." },
            { type: "do", n: 2, who: "class", text: "Use each classmate only <b>once</b>. Four in a row = <b>BINGO!</b> Shout it out." },
            {
              type: "bingo",
              id: "r1-bingo",
              title: "Future-of-work bingo",
              hint: "Ask the question in the small text. Write a name when someone says yes.",
              squares: [
                { text: "wants a job that helps the environment", ask: "Do you want a job that helps the environment?" },
                { text: "has had a part-time job", ask: "Have you ever had a part-time job?" },
                { text: "knows someone who works in energy", ask: "Do you know anyone who works in energy?" },
                { text: "recycles every day", ask: "Do you recycle every day?" },
                { text: "wants to work in another country", ask: "Would you like to work in another country?" },
                { text: "has a solar panel at home (or at a relative’s home)", ask: "Is there a solar panel on your home?" },
                { text: "can name three green jobs", ask: "Can you name three green jobs?" },
                { text: "wants to start their own business", ask: "Would you like to start your own business?" },
                { text: "has changed their mind about their future career", ask: "Have you ever changed your mind about your career?" },
                { text: "rides a bike or walks to class", ask: "Do you walk or ride a bike to class?" },
                { text: "thinks AI will change their future job", ask: "Do you think AI will change your future job?" },
                { text: "has done volunteer work", ask: "Have you ever done volunteer work?" },
                { text: "would like to work from home", ask: "Would you like to work from home?" },
                { text: "has taken an online course", ask: "Have you ever taken an online course?" },
                { text: "knows what an electric-car mechanic does", ask: "Do you know what an electric-car mechanic does?" },
                { text: "wants to study engineering or science", ask: "Do you want to study engineering or science?" }
              ]
            },
            {
              type: "language",
              title: "Keep the chat going",
              groups: [
                { label: "Ask", phrases: ["Excuse me — can I ask you a quick question?", "<b>Have you ever</b> …?", "<b>Would you like to</b> …?"] },
                { label: "Follow up", phrases: ["Oh really? <b>What was that like?</b>", "<b>How come?</b>", "<b>Tell me more</b> about that.", "<b>What made you</b> decide …?"] },
                { label: "Show interest", phrases: ["That’s interesting!", "No way! Me too.", "I’ve never thought about that."] },
                { label: "Move on politely", phrases: ["<b>Nice talking to you</b> — I’d better find someone for the next square!", "Thanks! See you later."] }
              ]
            },
            { type: "talk", title: "Report back", prompts: ["Tell the class one surprising thing you learnt about a classmate. Start: “I found out that …”"] }
          ]
        },
        {
          id: "r2",
          short: "Jobs of 2040",
          minutes: 10,
          grouping: "Two lines → rotate",
          art: "dec10/assets/week3/v/v-d10w3d1-r2.svg",
          title: "Spin a job of the future",
          goal: "Speed-chat: imagine a future job and talk about it for one minute with a new partner each round.",
          blocks: [
            { type: "do", n: 1, who: "class", text: "Stand up. Make <b>two lines</b> that face each other. The person opposite you is your partner." },
            { type: "do", n: 2, who: "pair", text: "One partner spins and gets a job from the year <b>2040</b> and a question. Talk for <b>one minute</b>. Your partner asks one follow-up question. Swap." },
            { type: "do", n: 3, who: "class", text: "Your teacher claps: <b>one line moves one place to the left</b>. New partner, new spin. Play <b>three rounds</b>." },
            {
              type: "spinner",
              id: "r2-spin",
              title: "Jobs of 2040",
              text: "Guess what the job is — nobody knows the right answer! Use the language below to sound natural.",
              reels: [
                { label: "Job", items: ["Solar farm technician", "Urban vertical farmer", "Climate data analyst", "Battery recycling engineer", "Green building designer", "Energy adviser for families", "Electric-plane pilot", "Ocean clean-up manager"] },
                { label: "Question", items: ["What does this person do all day?", "What skills does the job need?", "Would you like this job? Why / why not?", "Which job today will it replace?", "Is this a good job for your country?", "What will this job pay — more or less than now?"] }
              ]
            },
            {
              type: "language",
              title: "Talking about the future (and guessing politely)",
              groups: [
                { label: "Predict", phrases: ["I think this person <b>will probably</b> …", "<b>It’s likely that</b> …", "<b>By 2040</b>, …"] },
                { label: "Guess", phrases: ["<b>I imagine</b> they spend most of the day …", "<b>My guess is that</b> …", "They <b>might</b> / <b>could</b> …"] },
                { label: "Your view", phrases: ["<b>I’d love to</b> do this because …", "<b>It’s not really for me</b>, because …", "<b>It depends on</b> …"] }
              ]
            },
            { type: "talk", title: "Use it: a seminar turn", prompts: ["Back in your seat, say one sentence to the class as if you are in a seminar: “<b>One job I think will grow by 2040 is</b> … <b>because</b> …”"] }
          ]
        },
        {
          id: "r3",
          short: "Take a stand",
          minutes: 10,
          grouping: "Whole class → Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-r3.svg",
          title: "Where do you stand?",
          goal: "Give your opinion, listen to a classmate who disagrees, and stay friendly.",
          blocks: [
            { type: "do", n: 1, who: "class", text: "Your teacher reads a statement. Stand on a line across the room: <b>one end = strongly disagree</b>, <b>the other end = strongly agree</b>. Mark the same place on the slider." },
            { type: "do", n: 2, who: "pair", text: "Find someone standing <b>far</b> from you. Explain your place in <b>30 seconds</b> each. Then say one thing you <b>agree</b> with in their answer." },
            { type: "scale", id: "r3-s1", title: "Statement 1", statement: "In ten years, most good jobs will be green jobs.", ends: ["Strongly disagree", "Strongly agree"] },
            { type: "scale", id: "r3-s2", title: "Statement 2", statement: "Saving the environment is the job of governments, not workers.", ends: ["Strongly disagree", "Strongly agree"] },
            { type: "scale", id: "r3-s3", title: "Statement 3", statement: "I would take a lower salary to do a job that helps the planet.", ends: ["Strongly disagree", "Strongly agree"] },
            {
              type: "language",
              title: "Disagree — and stay friends",
              groups: [
                { label: "Explain your place", phrases: ["I’m standing here <b>because</b> …", "<b>I partly agree</b>, but …", "<b>For me, the key point is</b> …"] },
                { label: "Disagree politely", phrases: ["<b>I see your point, but</b> …", "<b>That’s true to some extent</b>. However, …", "<b>I’m not so sure about that</b>, because …"] },
                { label: "Find common ground", phrases: ["<b>We both seem to think</b> that …", "<b>I agree with you on</b> … at least.", "<b>Fair enough</b> — that’s a good point."] }
              ]
            },
            { type: "tip", text: "<b>Rapport</b> = a good, friendly connection. Good teams can disagree <b>and</b> keep a good connection. You will practise this again in 3A today." },
            { type: "fields", title: "Exit ticket", fields: [{ id: "r3-exit", label: "One thing I learnt about a classmate + one phrase I used to disagree politely", rows: 2, placeholder: "I found out that Mai … · I said: “I see your point, but …”" }] }
          ]
        }
      ]
    },

    /* ───────────────────────── 2A · Reading to speak ───────────────────────── */
    {
      id: "reading",
      number: "02",
      code: "2A",
      minutes: 120,
      tone: "teal",
      art: "dec10/assets/week3/s-d1-reading.svg",
      title: "Reading to speak",
      subtitle: "Green employment: what makes a job “green”?",
      outcome: "You understand the definition of green employment, use your notes to answer reading questions, identify the causal chain of an issue, and use cause and effect language.",
      activities: [
        {
          id: "a1",
          short: "Warmer",
          minutes: 10,
          grouping: "Groups of 5",
          art: "dec10/assets/week3/v/v-d10w3d1-a1.svg",
          title: "Warmer",
          goal: "Share five definitions of “green jobs” — one each — and find what they have in common.",
          blocks: [
            { type: "sticky", title: "Say it like an academic · phrase of the day", text: "<b>“This leads to …” / “As a result, …”</b><br>Today you link causes and effects. Try to use one of these every time you speak in this stage.", color: "blue" },
            { type: "figure", src: "dec10/assets/week3/d1-green-sectors.svg", size: "wide", alt: "Green jobs can be in old and new sectors. Left, traditional sectors: agriculture, manufacturing, construction and administration. Right, new and emerging sectors: renewable energy, energy efficiency, recycling and research. In the middle, a leaf with the shared goals: protect the environment, cut pollution and waste, use less energy and water, decent work.", caption: "Green jobs are not only in new sectors. Old sectors can be green too." },
            {
              type: "steps",
              title: "One definition each",
              items: [
                { who: "group", text: "Groups of five. Each person takes <b>one</b> definition below (person 1 = ILO, person 2 = UNEP …)." },
                { who: "alone", text: "Read <b>only your definition</b> (1 minute). Circle 2–3 key ideas." },
                { who: "group", text: "Tell your group your key ideas in <b>20 seconds</b>. Don’t read — look up and talk!" },
                { who: "group", text: "Together: what do the definitions have in common? Find <b>three</b> things and write them below." }
              ]
            },
            {
              type: "cards",
              title: "Figure 1: Common definitions of green jobs",
              items: [
                { label: "ILO (2019, 2016)", text: "Green jobs are decent jobs that contribute to preserving or restoring the environment, be they in traditional sectors such as manufacturing and construction, or in new, emerging green sectors such as renewable energy and energy efficiency. Green jobs help to improve efficiency in the use of energy and raw materials, limit GHG emissions, minimize waste and pollution, protect and restore ecosystems, and support adaptation to the effects of climate change." },
                { label: "UNEP, ILO, IOE, ITUC (2008)", text: "Green jobs refer to “work in agricultural, manufacturing, research and development (R&D), administrative, and service activities that contribute substantially to preserving or restoring environmental quality. Specifically, but not exclusively, this includes jobs that help to protect ecosystems and biodiversity, reduce energy, materials, and water consumption through high efficiency strategies, de-carbonize the economy, and minimize or altogether avoid generation of all forms of waste and pollution.”" },
                { label: "Eurostat (2009)", text: "Employment in the environmental goods and services sector refers to “employment in environmental enterprises but also in public administrations that are involved in the creation of environmental technologies, goods and services and the employment linked to ancillary activities in the various productive units.”" },
                { label: "European Commission (EC) (2013: 8)", text: "Green jobs are “covering all jobs that depend on the environment or are created, substituted, or redefined (in terms of skills sets, work methods, profiles generated, etc.) in the transition process towards a greener economy.”" },
                { label: "United States’ Bureau of Labour Services (BLS) (n.d.)", text: "BLS uses an output and a process approach to define green jobs: (a) “jobs in business that produce goods or provide services that benefit the environment or conserve natural resources” and (b) “jobs in which workers’ duties involve making their establishment’s production processes more environmentally friendly or use fewer natural resources.”" }
              ]
            },
            { type: "fields", fields: [{ id: "a1-common", label: "1. What the definitions have in common", rows: 3, placeholder: "They all talk about … / Most of them mention …" }] },
            { type: "do", n: 2, who: "pair", text: "Based on the definitions, make a list of green jobs that you know with a partner. Who can make the longest list in <b>2 minutes</b>?" },
            { type: "fields", fields: [{ id: "a1-jobs", label: "2. Green jobs we know", rows: 2, placeholder: "solar installer, …" }] },
            { type: "do", n: 3, who: "class", text: "<b>Stand up, everyone.</b> A student reads a job from the cards. <b>Stay standing</b> = green job · <b>sit down</b> = not green · <b>half-way</b> = it depends. Tell the person next to you why, using one definition." },
            {
              type: "cards",
              title: "Stand up or sit down? Green or not?",
              items: [
                { text: "Solar installer" }, { text: "Secretary in a solar energy company" }, { text: "Secretary in an oil company" }, { text: "Electric-bus driver" },
                { text: "Bank manager" }, { text: "Farmer" }, { text: "Recycling plant worker" }, { text: "Fashion designer" }
              ]
            },
            { type: "talk", title: "Discuss in your group", prompts: ["3. What do you think the differences between a green job and a non-green job?", "Is a secretary in a solar energy company a green worker? Why / why not?"] },
            {
              type: "language",
              title: "Compare and contrast",
              groups: [
                { label: "Similar", phrases: ["<b>All of the definitions</b> mention …", "<b>Both</b> the ILO <b>and</b> UNEP <b>focus on</b> …", "<b>A common theme is</b> …", "<b>Similarly</b>, …"] },
                { label: "Different", phrases: ["<b>In contrast</b>, non-green jobs …", "<b>Whereas</b> green jobs …, non-green jobs …", "<b>Unlike</b> a non-green job, a green job …", "<b>The main difference is that</b> …"] }
              ]
            }
          ],
          answers: {
            title: "Suggested answers (Teacher’s Book)",
            items: [
              ["1. In common", "<b>Environmental focus</b>: jobs that preserve or improve the environment, reduce pollution and enhance sustainability. <b>Sector involvement</b>: both traditional (e.g. agriculture, construction) and emerging sectors like renewable energy. <b>Sustainability goals</b>: energy efficiency, conserving resources, protecting ecosystems. <b>Economic transition</b>: green jobs are tied to transitioning toward a greener economy. <b>Social impact</b>: decent work while contributing to environmental goals."],
              ["2. Sample jobs", "Environmental engineer · Insulation installer · Solar installer · Energy adviser · Agricultural specialist · Green building designer"],
              ["3. Differences", "Green jobs focus on improving the environment and are often found in renewable energy and sustainability sectors, driving new market opportunities and directly influenced by environmental policies. They typically require specialized knowledge in sustainability and regularly incorporate eco-friendly practices. In contrast, non-green jobs may not focus on environmental impact and are found across various traditional industries. These roles are established in sectors that might not be directly tied to environmental policies, have varied educational requirements unrelated to the environment, and only adopt eco-friendly practices when mandated."]
            ]
          }
        },
        {
          id: "a2",
          short: "Key terms",
          minutes: 7,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-a2.svg",
          title: "Vocabulary · Activity 1",
          goal: "Learn nine terms that help you understand “green jobs” — by quizzing each other on your feet.",
          blocks: [
            { type: "tip", text: "These terms help you understand green jobs, but they <b>might not be in the reading</b>. They come from the same research (Bowen et al., 2018)." },
            {
              type: "steps",
              title: "Quiz – quiz – trade",
              items: [
                { who: "class", text: "<b>Stand up.</b> Take one term from the list below (your teacher gives you a card, or choose one). Read its definition." },
                { who: "pair", text: "Find a partner. Read your definition in <b>your own words</b>. Your partner guesses the term. Swap." },
                { who: "pair", text: "<b>Trade terms</b> and find a new partner. Do it with <b>three</b> partners, then sit down and do the matching to check." }
              ]
            },
            { type: "tip", text: "Your teacher may give you a paper <b>term card</b> (T1–T9). No cards? Choose one term from the left side of the matching below and read its definition on the right — then play the same way." },
            {
              type: "match",
              id: "a2-m",
              title: "Match the definition with the correct term",
              hint: "Tap a term, then its definition.",
              left: ["Green economy", "Greening", "Green Increased Demand (ID)", "Green Enhanced Skills (ES)", "Green New & Emerging (NE)", "Career changer", "Career starter", "Linked jobs", "Green Rival job/occupation"],
              right: [
                "Economic activity related to reducing fossil fuel usage, decreasing pollution and greenhouse gas emissions, recycling materials, increasing energy efficiency, and developing/adopting renewable energy sources.",
                "The effect of the green economy on occupations, which includes increased demand, changes in worker requirements, and the creation of new occupations/worker requirements.",
                "Existing jobs that are expected to be in high demand due to ‘greening’, without requiring significant changes in tasks, skills, or knowledge (hence considered ‘indirectly green’).",
                "Existing jobs that require significant changes in tasks, skills, and knowledge due to ‘greening’.",
                "New jobs with unique worker requirements that meet the specific needs of the green economy.",
                "Jobs with similar skills and experience as the initial job, requiring minimal additional preparation to transfer from the initial job.",
                "Jobs that appeal to individuals with similar general abilities and preferences over job characteristics/work environment, which may require more extensive preparation to transfer from the initial job.",
                "Two jobs, one of which is either a career changer or career starter for the other. Hyphens signify ‘to’ i.e. Green Rival-Green is short for ‘Green Rival to Green’",
                "Non-green jobs with at least one Green career changer or career starter."
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week3/d1-job-tree.svg",
              alt: "Tree diagram of O*NET-listed occupations. They split into Green and Non-green. Green splits into Increased Demand, Enhanced Skills and New & Emerging. Non-green splits into Green rival and Other. An arrow from Enhanced Skills points to an example: General and Operations Managers, with their tasks, skills, career starters and career changers.",
              title: "Fig. 1 of the reading — the job types, redrawn",
              hint: "Tap a number. Then explain the diagram to your partner in your own words.",
              caption: "Based on Bowen et al. (2018), Fig. 1: Visual representation of job types and O*NET data available for each occupation.",
              spots: [
                { x: 50, y: 5.5, label: "1", title: "O*NET-listed occupations", text: "O*NET is a US database with information on every job: its tasks and skills. All jobs are either <b>green</b> or <b>non-green</b>.", color: "#2b776e" },
                { x: 12, y: 47, label: "2", title: "Increased Demand (ID)", text: "The job stays the same, but we need <b>more</b> of these workers. “Indirectly green”.", color: "#3f7a3a" },
                { x: 32, y: 47, label: "3", title: "Enhanced Skills (ES)", text: "The job exists, but its tasks and skills <b>change a lot</b>. Example: General and Operations Managers.", color: "#3a58a0" },
                { x: 52, y: 47, label: "4", title: "New & Emerging (NE)", text: "A <b>brand-new</b> job for the green economy.", color: "#b07d12" },
                { x: 74, y: 47, label: "5", title: "Green rival", text: "A <b>non-green</b> job with at least one green career changer or career starter — a possible way into the green economy.", color: "#b0512a" }
              ]
            },
            { type: "talk", title: "Test each other", prompts: ["Student A says a definition in your own words. Student B says the term. Swap after three.", "Think of a job in your country. Is it ID, ES, NE, green rival or other? Why?"] }
          ]
        },
        {
          id: "a3",
          short: "Word race",
          minutes: 8,
          grouping: "Groups of 2–3",
          art: "dec10/assets/week3/v/v-d10w3d1-a3.svg",
          title: "Vocabulary · Activity 2",
          goal: "Race to find seven words from the reading — the definitions tell you which paragraph to look in.",
          blocks: [
            { type: "do", n: 1, who: "group", text: "Make teams of <b>2–3</b>. Choose a <b>runner</b>. The runner gets one definition from the teacher and runs back to the team." },
            { type: "do", n: 2, who: "group", text: "The team finds the word in the paragraph. The runner runs back to check. Correct? Take the next definition. Wrong? Try again!" },
            { type: "do", n: 3, who: "class", text: "<b>Team points:</b> first team with all seven words = <b>3 points</b>, second = 2, third = 1. Change the runner after every two words." },
            { type: "sources", ids: ["greening"] },
            {
              type: "limit",
              id: "a3-race",
              title: "Find the word in the paragraph",
              rule: "ONE OR TWO WORDS (a hyphenated word counts as one)",
              max: 2,
              items: [
                { q: "someone or something that has the same job or purpose as another (Para B)", accept: ["counterpart", "counterparts"], model: "counterpart" },
                { q: "not complete; good in some parts, but not in others (Para C)", accept: ["patchy"], model: "patchy" },
                { q: "tasks, jobs, or activities that involve a high level of repetition (Para D)", accept: ["routine-intensive", "routine intensive"], model: "routine-intensive" },
                { q: "the ability to think in complex, conceptual, or non-concrete ways e.g. critical thinking, problem solving (Para D)", accept: ["abstract skills", "abstract"], model: "abstract skills" },
                { q: "the gap between the skills a person currently possesses, and the skills required for a specific task, job, or role. (Para E)", accept: ["skill distance"], model: "skill distance" },
                { q: "a continuous whole without clear division into parts. (Para F)", accept: ["continuum"], model: "continuum" },
                { q: "A way of representing information using only two options. (Para F)", accept: ["binary"], model: "binary" }
              ]
            },
            {
              type: "flip",
              title: "Words that travel together",
              hint: "Academic English loves these chunks. Turn each card.",
              items: [
                { front: "skill", back: "a <b>skill gap</b> · <b>skill distance</b> · <b>develop / acquire</b> new skills · <b>transferable</b> skills", tag: "collocation" },
                { front: "training", back: "<b>on-the-job</b> training (at work) ↔ <b>off-the-job</b> training (at a college) · <b>re-training</b> programmes", tag: "collocation" },
                { front: "transition", back: "<b>manage</b> the transition · the transition <b>to</b> a green economy · <b>transition from</b> one job <b>to</b> another (verb!)", tag: "noun + verb" },
                { front: "labour market", back: "the jobs and workers in a country. A <b>structural impact on</b> the labour market = a deep, long-term change", tag: "economics" },
                { front: "-intensive", back: "routine-intensive · skill-intensive · energy-intensive = uses <b>a lot of</b> …", tag: "word part" }
              ]
            },
            { type: "talk", title: "Use it: a tutorial answer", prompts: ["Your tutor asks: “What do we know about green skills?” Answer in one sentence with <b>patchy</b> or <b>skill distance</b>. E.g. “Research on green skills is still <b>patchy</b>, so …”"] }
          ]
        },
        {
          id: "a4",
          short: "Gist",
          minutes: 5,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-a4.svg",
          title: "Reading for gist",
          goal: "Read Paragraph A and link it to the definitions you read in the warmer.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Read the first paragraph (Paragraph A). How does it align with the various definitions of green jobs you read earlier? Can you identify <b>2 key similarities</b>?" },
            { type: "passage", id: "a4-pa", title: "Bowen et al. (2018) · Paragraph A", text: "A. The green growth transition (“greening”) has been called a modern-day industrial revolution due to its expected large structural impact on labour markets worldwide (Bowen et al., 2016). According to the United Nations Environment Programme (2008), a “green economy” is one that results in improved human well-being and social equity, while significantly reducing environmental risks. Policy-makers have two main goals for the green economy: managing the transition to green jobs and promoting green economic growth (Martinez-Fernandez et al., 2010). The impact on employment is one important way for policy-makers to assess the effects of environmental policies pursuing these goals. However, the definition of a “green job” is not universal." },
            {
              type: "sort",
              id: "a4-sort",
              title: "Which ideas are in Paragraph A AND in the definitions?",
              hint: "Drag (or tap) each idea into a box.",
              buckets: [{ label: "In both", letter: "✓" }, { label: "Not in Paragraph A", letter: "✗" }],
              items: [
                { text: "improving human well-being and social equity (decent work)", answer: 0 },
                { text: "reducing environmental risks / environmental sustainability", answer: 0 },
                { text: "a list of exact green job titles", answer: 1 },
                { text: "data from the O*NET database", answer: 1, why: "O*NET comes later, in Paragraph D." }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "<b>Race:</b> when you and your partner agree on the two similarities, <b>stand up</b>. The first pair standing says them to the class in <b>one sentence each</b>: “Both Paragraph A and the ILO definition mention …”" }
          ],
          answers: { items: [["Two key similarities", "Improving well-being and social equity; contribute to environmental sustainability."]] }
        },
        {
          id: "a5",
          short: "Jigsaw notes",
          minutes: 15,
          grouping: "Three groups",
          art: "dec10/assets/week3/v/v-d10w3d1-a5.svg",
          title: "Reading for details · Activity 1 Annotated reading and note taking",
          goal: "Become the expert on one part of the text and take good notes.",
          blocks: [
            { type: "figure", src: "dec10/assets/week3/d1-jigsaw.svg", size: "wide", alt: "Jigsaw reading in two steps. Step 1, expert groups: Group 1 reads paragraphs 1–2, Group 2 reads paragraphs 3–4, Group 3 reads paragraphs 5–6, and each group compares notes. Step 2, new mixed groups: one expert from each group sits together and shares their part, so everyone learns the whole text.", caption: "Step 1: read and take notes with your expert group. Step 2 (next activity): teach your part to a new group." },
            { type: "do", n: 1, who: "group", text: "You will be divided into three groups. Read <b>only your section</b>. Annotate it (highlight, ?, !!!) and complete your note-taking table." },
            {
              type: "steps",
              title: "Give everyone a job in your expert group",
              items: [
                { who: "group", text: "<b>Reader</b> reads each paragraph aloud, slowly. Everyone follows and annotates." },
                { who: "group", text: "<b>Question master</b> asks after each paragraph: “What is the main idea? Where is the evidence?”" },
                { who: "group", text: "<b>Note checker</b> makes sure everyone has the same key notes in the table." },
                { who: "group", text: "<b>Timekeeper</b> says “5 minutes left” — you must be ready to teach your part in the next activity!" }
              ]
            },
            { type: "sources", ids: ["greening"] },
            {
              type: "tabs",
              title: "Choose your group",
              tabs: [
                {
                  label: "Group 1 · P1–2",
                  blocks: [
                    { type: "key", title: "Introduction to Green Economy and Green Jobs – P1-2", points: ["Your task: Focus on defining the green economy, its goals, and the general impact on labour markets."] },
                    { type: "table", id: "a5-g1", live: true, title: "Note taking · Group 1", columns: ["Main idea", "Examples/details", "Questions/thoughts?"], fixed: ["Definition", "Goals", "Challenge of defining “green jobs”"] }
                  ]
                },
                {
                  label: "Group 2 · P3–4",
                  blocks: [
                    { type: "key", title: "Challenges in Defining Green Jobs and Skill Requirements – P3-4", points: ["Your task: Focus on the challenges of defining green jobs and the differences in skills between green and non-green jobs."] },
                    { type: "table", id: "a5-g2", live: true, title: "Note taking · Group 2", columns: ["Main idea", "Examples/details", "Questions/thoughts?"], fixed: ["Challenges", "Skills for green jobs", "Skills for non-green jobs"] }
                  ]
                },
                {
                  label: "Group 3 · P5–6",
                  blocks: [
                    { type: "key", title: "Research on Green Skills and Job Transitions P5-6", points: ["Your task: Focus on the research gaps, the O*NET database, and the concept of skill distance for job transitions"] },
                    { type: "table", id: "a5-g3", live: true, title: "Note taking · Group 3", columns: ["Main idea", "Examples/details", "Questions/thoughts?"], fixed: ["Skill distance", "O*NET’s findings"] }
                  ]
                }
              ]
            },
            { type: "tip", text: "Notes, not sentences! Use symbols from Week 1: <b>↑</b> more · <b>↓</b> less · <b>→</b> leads to · <b>≠</b> different from · <b>e.g.</b> · <b>%</b>." }
          ],
          answers: {
            title: "Suggested notes (Teacher’s Book)",
            items: [
              ["Group 1 · Definition", "United Nations Environment Programme (2008): a ‘green economy’ is one that results in improved human well-being and social equity, while significantly reducing environmental risks."],
              ["Group 1 · Goals", "managing the transition to green jobs and promoting green economic growth (Martinez-Fernandez et al., 2010)"],
              ["Group 1 · Challenge of defining “green jobs”", "definition of green jobs influences policy decisions, standardised criteria to classify jobs as ‘green’ need to be adopted."],
              ["Group 2 · Challenges", "Fankhauser et al. (2008): little information on productivity, pay and other attributes. Cedefop (2010) complains that ‘We have not paid enough attention to the social dimension of sustainable development’"],
              ["Group 2 · Skills for green jobs", "less routine-intensive and higher-skill, high-level analytical and technical skills related to technology; more high-level abstract skills, more education, work experience and on the job training than non-green jobs"],
              ["Group 2 · Skills for non-green jobs", "See above"],
              ["Group 3 · Skill distance", "The extent of retraining needed to switch from one job to another. Some require less: engineers, scientists.. Low and medium skill have larger gaps"],
              ["Group 3 · O*NET’s findings", "19.4% US workforce with large proportion of indirectly green. Variability of green jobs."]
            ]
          }
        },
        {
          id: "a6",
          short: "Teach it",
          minutes: 10,
          grouping: "Groups → New groups",
          art: "dec10/assets/week3/v/v-d10w3d1-a6.svg",
          title: "Reading for details · Activity 2: Summarise / paraphrase",
          goal: "Summarise your section with your group, then teach it to students who read different sections.",
          blocks: [
            {
              type: "steps",
              title: "Group discussion",
              items: [
                { who: "group", text: "First, discuss with the members of your group who have read the same section as you. Compare your notes and ideas. Try to summarise or paraphrase the main ideas together." },
                { who: "class", text: "<b>Stand up and move.</b> Form new groups where each member has read a different section (find a 1, a 2 and a 3)." },
                { who: "group", text: "<b>Teach-back in 60 seconds:</b> each expert teaches their section from notes — no reading from the text. A listener times you." },
                { who: "group", text: "Listeners: ask <b>one question</b> to each expert and add the answers to your notes." }
              ]
            },
            {
              type: "para",
              id: "a6-para",
              title: "Warm up: paraphrase one key sentence before you teach",
              hint: "Change the words and the structure, but keep the meaning. The meter shows how many words you copied.",
              items: [
                { text: "Green occupations are less routine-intensive and higher-skill than non-green occupations.", strategy: "change the structure: start with “Compared with …”", keep: ["green"], model: "Compared with other jobs, green jobs involve less repetitive work and need a higher level of skill." },
                { text: "Most re-training can occur on-the-job.", strategy: "use different words", model: "Workers can learn most of the new skills while they are working." }
              ]
            },
            {
              type: "language",
              title: "Be the expert: share your section",
              groups: [
                { label: "Start", phrases: ["<b>My section was about</b> …", "<b>The main idea of</b> paragraphs C and D <b>is that</b> …"] },
                { label: "Report the source", phrases: ["<b>According to</b> Bowen et al. (2018), …", "Vona et al. (2017) <b>found that</b> …", "The authors <b>point out that</b> …", "Cedefop (2010) <b>complains that</b> …"] },
                { label: "Explain", phrases: ["<b>In other words</b>, …", "<b>For example</b>, …", "<b>What this means is that</b> …"] },
                { label: "Check understanding", phrases: ["<b>Does that make sense?</b>", "<b>Any questions</b> about my part?", "<b>Could you say that again</b>, please? I didn’t catch …"] }
              ]
            },
            { type: "checklist", id: "a6-check", title: "When you shared your part, did you …", items: ["say the main idea first?", "name the source (author, year)?", "use your own words — not read the text?", "give one example or number?", "check that your group understood?"] }
          ]
        },
        {
          id: "a7",
          short: "Questions",
          minutes: 20,
          grouping: "Alone → Pair → Teams on the move",
          art: "dec10/assets/week3/v/v-d10w3d1-a7.svg",
          title: "Building understanding",
          goal: "Answer test-style questions alone, then prove your answers on your feet with your team.",
          blocks: [
            { type: "tip", text: "Test tactic: answer from your <b>notes</b> first. Then check in the text. Underline the words in the paragraph that prove your answer." },
            {
              type: "steps",
              title: "How this works",
              items: [
                { who: "alone", text: "<b>8 minutes:</b> answer Questions 1–8 below, like in a test." },
                { who: "pair", text: "Compare with a partner. Different answer? Find the proof words in the text." },
                { who: "class", text: "<b>Move to the paragraph (Q1–4):</b> six posters, A–F, are on the walls. Your teacher reads a question. Walk to the paragraph that answers it. One person at each poster reads the proof words. Right poster = <b>1 team point</b>." },
                { who: "class", text: "<b>Four corners (Q5–8):</b> the corners are A, B, C and D. Stand in the corner of your answer. Each corner has 30 seconds to convince the others. You can change corners!" }
              ]
            },
            { type: "tip", text: "The paper posters show each paragraph in big letters. No posters? Your teacher writes A–F on the board (or points to six places in the room). Walk to the letter, and read the proof words from the reading on your screen." },
            { type: "figure", src: "dec10/assets/week3/d1-move-corners.svg", size: "wide", alt: "A classroom seen from above with six paragraph posters, A to F, on the walls. In the middle a question card: Question 1, data on skills is still limited — where is it? Students walk to the poster they think answers it. A scoreboard shows team points and a timer shows 30 seconds.", caption: "Move to the paragraph — then prove it with the words in the text." },
            { type: "sources", ids: ["greening"] },
            {
              type: "quiz",
              id: "a7-q14",
              title: "Questions 1 - 4 · Match the information (1 – 4) to their paragraphs. Note: there are TWO extra paragraphs; paragraph letters can be used ONCE only.",
              shared: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E", "Paragraph F"],
              items: [
                { q: "1. Data on the skill requirements and social impacts of green jobs is still limited.", answer: "Paragraph C", why: "“the research on skill needs for green growth is still patchy” · “We have not paid enough attention to the social dimension …”" },
                { q: "2. Clearer definitions will help create better training opportunities.", answer: "Paragraph B", why: "“The similarity of skills used in green and non-green jobs can also help determine the content of re-training programmes.”" },
                { q: "3. The amount of re-training required to move from jobs is being researched.", answer: "Paragraph E", why: "“constructing a measure of ‘skill distance,’ which indicates the extent of re-training required to transition from one job to another”" },
                { q: "4. Technical and analytical skills, not routine in nature, are associated with green jobs.", answer: "Paragraph D", why: "“green occupations are less routine-intensive … and require high-level analytical and technical skills”" }
              ]
            },
            {
              type: "bet",
              id: "a7-q58",
              title: "Questions 5 – 8 · Choose the best option — and bet on it",
              coins: 8,
              items: [
                { q: "5. The purpose of Paragraph A is to introduce", options: ["A. the many different opinions on the value of green jobs.", "B. data on job losses caused by environmental policies and work.", "C. the concept of the “green economy” and its implications for employment.", "D. the issue of green economic growth competing with social equity."], answer: "C. the concept of the “green economy” and its implications for employment.", why: "Paragraph A defines the green economy and says “The impact on employment is one important way …”." },
                { q: "6. What is the author’s overall attitude towards the growth of the green economy?", options: ["A. Pessimistic - the green economy faces too many barriers.", "B. Cautious - the green economy will only grow slowly.", "C. Optimistic - job transitions can be effectively managed.", "D. Neutral - no strong opinion about the green economy."], answer: "C. Optimistic - job transitions can be effectively managed.", why: "“the green economy has significant potential for short-run growth, provided that job transitions are strategically managed” (Paragraph F)." },
                { q: "7. In relation to “skill distance” the author believes that it is", options: ["A. a serious barrier that prevents many workers from switching jobs.", "B. manageable, particularly for high-skill professions such as engineers.", "C. not a big issue, as most jobs are becoming green at the same rate.", "D. only a problem for workers in low-skilled occupations."], answer: "B. manageable, particularly for high-skill professions such as engineers.", why: "“engineers, scientists, and operation managers have the smallest skill distance” (E) and “most re-training can occur on-the-job” (F)." },
                { q: "8. According to the author “the term ‘green’ should be considered as a continuum rather than a binary characteristic” because green jobs", options: ["A. either fully meet environmental standards or they do not.", "B. can vary in how environmentally focused they are.", "C. will eventually replace non-green jobs in the economy.", "D. require a very different skillset from their counterparts."], answer: "B. can vary in how environmentally focused they are.", why: "“green jobs vary in ‘greenness’ … with very few jobs consisting solely of green tasks.”" }
              ]
            },
            {
              type: "toggle",
              title: "Want more? Question 8 in a picture",
              hint: "Open after you check your answers.",
              blocks: [
                { type: "figure", src: "dec10/assets/week3/d1-continuum.svg", size: "wide", alt: "Two ways to see green jobs. Top, binary: a switch with only two options, green or not green. Bottom, continuum: a colour bar from grey to deep green, with jobs placed along it — an office secretary, a sales manager, an energy adviser, a solar installer — showing that jobs can be a little green or very green.", caption: "Question 8 in a picture: “green” is a <b>continuum</b>, not a <b>binary</b> characteristic." }
              ]
            },
            { type: "talk", title: "Explain to a partner", prompts: ["Choose one question you found hard. Show your partner the words in the text that prove the answer.", "Which wrong option was the best “trap”? Why did it look right?"] },
            {
              type: "language",
              title: "Explain your answer",
              groups: [
                { label: "Point to the proof", phrases: ["<b>The answer is</b> C, <b>because</b> in paragraph … it says …", "<b>The key words are</b> …", "“Patchy” <b>means the same as</b> “limited”."] },
                { label: "Rule out the trap", phrases: ["Option A <b>can’t be right, because</b> …", "The text <b>doesn’t say</b> that …", "<b>It mentions</b> …, <b>but it doesn’t</b> …"] }
              ]
            }
          ],
          answers: { items: [["1–4", "1. C · 2. B · 3. E · 4. D"], ["5–8", "5. C · 6. C · 7. B · 8. B"]] }
        },
        {
          id: "a8",
          short: "Mine it",
          minutes: 12,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-a8.svg",
          title: "Language focus · Activity 1 Mining the language",
          goal: "Find the causes and effects of the issue in Paragraphs A and B, and the language that links them.",
          blocks: [
            { type: "key", title: "The issue in Paragraphs A and B", points: ["<i>The difficulty in defining and managing “green jobs” during the green growth transition, which significantly impacts global labour markets.</i>", "These paragraphs present an issue and explain its <b>causes</b> and <b>effects</b>."] },
            {
              type: "match",
              id: "a8-table",
              title: "Fill in the table: match each cause to its effect",
              hint: "Sentences 1–4 from the Teacher’s Book are in the table now. Find the partner of each one.",
              left: ["1. Lack of a clear definition for green jobs.", "Definition of green jobs influences policy decisions", "Green and non-green jobs may use similar skills", "3. Differences in skill sets between green and non-green jobs."],
              right: ["Difficulty for policymakers to assess the effects of environmental policies.", "4. Green job classification becomes necessary.", "2. It influences the content of re-training programs.", "Workers in non-green jobs may require extensive training"]
            },
            { type: "figure", src: "dec10/assets/week3/d1-cause-chain.svg", size: "wide", alt: "A causal chain. The issue: the difficulty in defining green jobs. Cause: lack of a clear definition for green jobs leads to difficulty for policymakers to assess the effects of environmental policies. Because the definition influences policy decisions, green job classification becomes necessary. Similar skills influence the content of re-training programmes. Different skill sets mean workers in non-green jobs may require extensive training.", caption: "The causal chain: each effect can become the cause of the next step." },
            { type: "do", n: 1, who: "class", text: "<b>Listen and stand:</b> one student reads Paragraphs A and B aloud, slowly. <b>Stand up</b> (then sit again) every time you hear a cause-and-effect word or phrase. How many did the class catch?" },
            { type: "do", n: 2, who: "pair", text: "For each cause and effect, identify the specific sentences in the paragraph that indicate the relationship. Tap the phrases that help illustrate this relationship." },
            {
              type: "spot",
              id: "a8-spot",
              label: "Cause-and-effect spotter",
              title: "Tap the cause-and-effect language in Paragraphs A and B",
              hint: "There are eight. Careful: some highlighted words are other linking words.",
              paras: [
                "A. The green growth transition (“greening”) has been called a modern-day industrial revolution [[*due to]] its expected large structural impact on labour markets worldwide (Bowen et al., 2016). [[According to]] the United Nations Environment Programme (2008), a “green economy” is one that [[*results in]] improved human well-being and social equity, while significantly reducing environmental risks. Policy-makers have two main goals for the green economy: managing the transition to green jobs and promoting green economic growth (Martinez-Fernandez et al., 2010). The impact on employment is one important way for policy-makers to assess [[*the effects of]] environmental policies pursuing these goals. [[However]], the definition of a “green job” is not universal.",
                "B. [[For instance]], a secretary could be called a green worker in a renewable energy company but not in a fossil fuel company, even if the work is the same. [[*Since]] the definition of green jobs [[*influences]] policy decisions, standardised criteria to classify jobs as “green” need to be adopted. This involves recognizing what makes green jobs different from other jobs. Are there skills specific to green jobs, or does the label “green” [[merely]] reflect the type of job to which the same skills are applied? The similarity of skills used in green and non-green jobs can also [[*help determine]] the content of re-training programmes. [[*If]] the skill sets required for green jobs are largely different from their non-green counterparts, then non-green workers may need extensive off-the-job training to supplement on-the-job training, [[*in order to]] enable the transition to the green economy."
              ]
            },
            { type: "tip", text: "<b>If … then …</b> is a cause-and-effect pattern too: <i>If</i> the skills are different (cause), <i>then</i> workers need training (effect). <b>In order to</b> shows a purpose — the effect you want." }
          ],
          answers: {
            title: "Answers (Teacher’s Book)",
            items: [
              ["Cause → effect 1", "1. Lack of a clear definition for green jobs. → Difficulty for policymakers to assess the effects of environmental policies."],
              ["Cause → effect 2", "Definition of green jobs influences policy decisions → 4. Green job classification becomes necessary."],
              ["Cause → effect 3", "Green and non-green jobs may use similar skills → 2. It influences the content of re-training programs."],
              ["Cause → effect 4", "3. Differences in skill sets between green and non-green jobs. → Workers in non-green jobs may require extensive training"],
              ["Sentences in the text", "(1) The impact on employment is one important way for policy-makers to assess the effects of environmental policies pursuing these goals. However, the definition of a “green job” is not universal. (4) Since the definition of green jobs influences policy decisions, standardised criteria to classify jobs as “green” need to be adopted. (2) The similarity of skills used in green and non-green jobs can also help determine the content of re-training programmes. (3) If the skill sets required for green jobs are largely different from their non-green counterparts, then non-green workers may need extensive off-the-job training …"]
            ]
          }
        },
        {
          id: "a9",
          short: "Card mingle",
          minutes: 13,
          grouping: "Whole class → Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-a9.svg",
          title: "Language focus · Activity 2 Cause and effect pairing",
          goal: "Find your partner card and join cause and effect in one clear sentence.",
          blocks: [
            {
              type: "key",
              title: "Cause and effect: watch the grammar",
              compare: [
                { label: "+ a clause (subject + verb)", text: "<b>because</b> / <b>since</b> / <b>as</b> + clause", eg: "<b>Since</b> the definition is not clear, policymakers struggle." },
                { label: "+ a noun", text: "<b>because of</b> / <b>due to</b> / <b>as a result of</b> + noun", eg: "<b>Due to</b> the lack of a clear definition, policymakers struggle." },
                { label: "cause + verb + effect", text: "<b>leads to</b> / <b>results in</b> / <b>causes</b> / <b>influences</b>", eg: "The lack of a clear definition <b>leads to</b> problems for policymakers." },
                { label: "new sentence", text: "<b>As a result,</b> / <b>Consequently,</b> / <b>Therefore,</b>", eg: "There is no clear definition. <b>Consequently,</b> policymakers struggle." }
              ]
            },
            {
              type: "cloze",
              id: "a9-cloze",
              title: "Warm up: choose the right linker",
              options: ["because", "because of", "leads to", "As a result", "due to"],
              text: "Many workers need re-training {{1}} the skills for green jobs are different. Some jobs grow {{2}} new environmental policies. The shift to renewable energy {{3}} new jobs in solar and wind. Engineers have a small skill distance. {{4}}, they can move to green jobs easily. Low-skill workers may struggle {{5}} the large skill gap.",
              answers: ["because", "due to", "leads to", "As a result", "because of"],
              why: ["+ a clause: “the skills … are different”.", "+ a noun: “new environmental policies”.", "cause + verb + effect.", "a new sentence starts with a capital letter and a comma.", "+ a noun phrase: “the large skill gap”. (due to also works here)"]
            },
            { type: "do", n: 1, who: "class", text: "You will each receive either a cause card or an effect card. Your task is to walk around the classroom and find your matching partner. Once you find a match, work together to connect the cause and effect using a cause-and-effect phrase. Write the sentence down. <b>Some cards may have more than one possible match.</b>" },
            {
              type: "spinner",
              id: "a9-spin",
              title: "No cards? Spin a card and a linker",
              text: "Spin. Make a sentence with the cause card and the linker — choose an effect that fits. Say it to your partner, then write your best one below.",
              reels: [
                { label: "Cause card", items: ["Lack of a clear definition for green jobs.", "Differences in skill sets between green and non-green jobs.", "Green job classification becomes necessary.", "Difficulty for policymakers to assess the effects of environmental policies.", "Uncertainty about which jobs qualify as “green jobs.”", "The shift towards renewable energy industries.", "Lack of standardized criteria for green job classification across industries.", "Emerging technologies disrupt traditional job markets"] },
                { label: "Linker", items: ["leads to", "results in", "Because of …,", "Due to …,", "… As a result, …", "Since …,", "… which means that …", "Consequently, …"] }
              ]
            },
            {
              type: "cards",
              title: "Effect cards",
              items: [
                { text: "It influences the content of re-training programs." },
                { text: "Green and non-green jobs may use similar skills." },
                { text: "Workers in non-green jobs may require extensive training." },
                { text: "Definition of green jobs influences policy decisions." },
                { text: "Employers face challenges in designing relevant job training programs." },
                { text: "Governments struggle to create effective labor policies." },
                { text: "Job seekers find it difficult to determine necessary qualifications." },
                { text: "Traditional industries face increased pressure to innovate and adapt." }
              ]
            },
            {
              type: "detect",
              id: "a9-dt",
              label: "Cause-and-effect studio",
              title: "Write your sentences (three or more)",
              hint: "The lights turn on when you use each kind of linker.",
              checks: [
                { label: "+ clause (because / since / as)", any: ["because ", "since ", "/\\bas\\b/"], color: "#2b776e" },
                { label: "+ noun (due to / because of)", any: ["due to", "because of", "as a result of", "owing to"], color: "#3a58a0" },
                { label: "verb (leads to / results in)", any: ["lead to", "leads to", "led to", "result in", "results in", "causes", "influences"], color: "#7a4a8c" },
                { label: "new sentence (As a result, / Consequently,)", any: ["as a result,", "consequently", "therefore", "for this reason"], color: "#b07d12" }
              ],
              items: [{ task: "My cause-and-effect sentences", rows: 5, placeholder: "Uncertainty about which jobs qualify as green jobs leads to …", model: "Uncertainty about which jobs qualify as “green jobs” leads to challenges for employers in designing relevant training programmes. Due to the shift towards renewable energy industries, governments struggle to create effective labour policies. Emerging technologies disrupt traditional job markets. As a result, traditional industries face increased pressure to innovate and adapt." }]
            },
            { type: "do", n: 2, who: "group", text: "<b>Pair meets pair:</b> read your best sentence to another pair. They vote for the clearest one — it goes on the board." },
            { type: "talk", title: "Use it: answer your tutor", prompts: ["Your tutor asks: “Why is it hard to train workers for green jobs?” Answer in <b>two sentences</b> with <b>two different</b> linkers."] }
          ],
          answers: { title: "Suggested answers", items: [["Possible pairs (more than one match is possible)", "Uncertainty about which jobs qualify as “green jobs” → Employers face challenges in designing relevant job training programs. · The shift towards renewable energy industries → Governments struggle to create effective labor policies. · Lack of standardized criteria for green job classification across industries → Job seekers find it difficult to determine necessary qualifications. · Emerging technologies disrupt traditional job markets → Traditional industries face increased pressure to innovate and adapt. · Lack of a clear definition → It influences the content of re-training programs / Definition of green jobs influences policy decisions."]] }
        },
        {
          id: "a10",
          short: "Criticality",
          minutes: 20,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d1-a10.svg",
          title: "Criticality",
          goal: "Use the O*NET database to compare a non-green and a green job, and judge how easy the move would be.",
          blocks: [
            { type: "figure", src: "dec10/assets/week3/d1-skill-distance.svg", size: "wide", alt: "Skill distance as bridges. From marketing manager, a short bridge leads to sales manager: small skill distance, little re-training. A long bridge leads to software developer: large skill distance, a lot of re-training.", caption: "Skill distance (Paragraph E): the shorter the bridge, the less re-training you need." },
            {
              type: "steps",
              title: "Research using O*NET",
              items: [
                { who: "group", text: "Give jobs: <b>chair</b> (keeps everyone talking), <b>searcher</b> (uses O*NET), <b>timekeeper</b>, <b>reporter</b> (speaks at the end)." },
                { who: "group", text: "Your teacher gives your group a <b>non-green job</b> and a <b>green job</b>. (No pair yet? Try a <b>marketing manager</b> → <b>sustainability specialist</b>, or a <b>roofer</b> → <b>solar photovoltaic installer</b>.)" },
                { who: "group", text: "Search for both jobs on <b>O*NET OnLine</b> (onetonline.org). Green jobs have a small green leaf icon." },
                { who: "group", text: "Focus on these key areas: skills required, education and training required, work experience needed, job tasks and work context. Add notes to the table." }
              ]
            },
            {
              type: "table",
              id: "a10-tbl", live: true,
              title: "Compare the two jobs",
              columns: ["Key area", "Non-green job: …", "Green job: …"],
              fixed: ["Skills required (e.g., technical skills, analytical skills, communication skills)", "Education and training required (e.g., university degree, certifications)", "Work experience needed (e.g., years of experience in the field)", "Job tasks and work context (e.g., day-to-day activities, work environment)"]
            },
            { type: "talk", title: "Critical Thinking Questions", prompts: ["<b>Skill Differences:</b> What are the key differences in skills between the non-green job and the green job?", "<b>Retraining Needs:</b> How much retraining would someone need to move from the non-green job to the green job?", "<b>Job Growth Potential:</b> How is the green job market growing, and what is the demand for green skills compared to the non-green job?", "<b>Challenges and Opportunities:</b> What challenges and benefits would someone experience when transitioning to the green job?"] },
            { type: "scale", id: "a10-scale", title: "Agree as a group", statement: "The move from our non-green job to our green job is easy.", ends: ["Very hard: big skill distance", "Easy: small skill distance"] },
            { type: "do", n: 1, who: "class", text: "<b>Human line:</b> one wall = very hard, the other wall = easy. Each group stands together at its place. Reporters explain in <b>30 seconds</b>: “Our move is … because …”" },
            { type: "do", n: 2, who: "pair", text: "<b>Role play (3 minutes):</b> Student A is a worker in the non-green job. Student B is a <b>careers adviser</b>. A asks for advice about moving to the green job; B uses your O*NET notes. Then swap." },
            {
              type: "language",
              title: "Evaluate the transition",
              groups: [
                { label: "Compare", phrases: ["<b>Both jobs require</b> …", "<b>The main difference is</b> …", "The green job <b>requires more</b> technical knowledge <b>than</b> …"] },
                { label: "Judge (with hedging)", phrases: ["<b>It seems that</b> the skill distance is fairly small.", "The move <b>would probably require</b> a short course in …", "<b>This suggests that</b> most re-training <b>could</b> happen on the job.", "<b>It would be quite challenging to</b> …"] },
                { label: "Careers adviser", phrases: ["<b>Have you thought about</b> …?", "<b>One option would be to</b> …", "<b>You already have</b> strong … skills, <b>so</b> …", "<b>The good news is that</b> …"] },
                { label: "Worker", phrases: ["<b>I’m worried that</b> …", "<b>How long would it take to</b> …?", "<b>Would I need</b> a new qualification?"] }
              ]
            },
            { type: "fields", title: "Exit ticket", fields: [{ id: "a10-exit", label: "One cause-and-effect sentence about green jobs you could use in your research summary tomorrow", rows: 2, placeholder: "Due to …, many workers … As a result, …" }] }
          ]
        }
      ]
    },

    /* ───────────────────────── 3A · AST: Group work skills: Supporting the group ───────────────────────── */
    {
      id: "groupwork",
      number: "03",
      code: "3A",
      minutes: 90,
      tone: "clay",
      art: "dec10/assets/week3/s-d1-groupwork.svg",
      title: "AST: Group work skills: Supporting the group",
      subtitle: "Observe, feel, need, request — talk so your group listens",
      outcome: "You can facilitate respectful discussion of task-related issues, show appreciation of different perspectives, and state your feelings and needs and respond compassionately to those of others.",
      activities: [
        {
          id: "c1",
          short: "My group",
          minutes: 10,
          grouping: "Alone → Pair → Group",
          art: "dec10/assets/week3/v/v-d10w3d1-c1.svg",
          title: "Getting to know your group members",
          goal: "Know your own group work strengths and areas for growth — and your partner’s.",
          blocks: [
            { type: "sticky", title: "Say it like an academic · phrase of the day", text: "<b>“Would you be willing to …?”</b><br>The polite way to ask your group for help. By the end of this stage you will use it in a real message to your group.", color: "pink" },
            { type: "do", n: 1, who: "group", text: "Sit with your <b>seminar / interactive presentation group</b>." },
            { type: "figure", src: "dec10/assets/week3/d1-group-roles.svg", size: "wide", alt: "Four group role cards around a rotate arrow. Chair: invites everyone to speak — What do you think? Timekeeper: watches the clock — Two minutes left. Language monitor: ticks the phrases people use — You used 4 phrases! Reporter: tells the class the result — Our group found that … The roles change every activity.", caption: "Choose roles now. After every activity, pass your role to the person on your left." },
            { type: "tip", text: "Your teacher may give your group four paper <b>role cards</b> to put on the table. No cards? Use the picture above: say your role aloud, and write it next to your name in your notes." },
            {
              type: "sort",
              id: "c1-sort",
              title: "Warm up: strength or area for growth?",
              hint: "These are the examples from the table. Sort them.",
              buckets: [{ label: "Strengths", letter: "S" }, { label: "Areas for growth", letter: "G" }],
              items: [
                { text: "I am good at organising people and keeping them on track.", answer: 0 },
                { text: "I find it difficult to make decisions.", answer: 1 },
                { text: "I feel comfortable talking to people I don’t know.", answer: 0 },
                { text: "I get upset when people don’t see things the way I do.", answer: 1 },
                { text: "I am good at designing powerpoint slides.", answer: 0 },
                { text: "I can complete tasks as long as someone tells me what to do.", answer: 1 },
                { text: "I am a patient person and love to help others.", answer: 0 },
                { text: "I get nervous presenting in English.", answer: 1 }
              ]
            },
            { type: "do", n: 2, who: "alone", text: "Reflect on your group work skills. Write down <b>3 – 5</b> strengths and areas for growth. You have <b>5 minutes</b>." },
            { type: "table", id: "c1-me", title: "My group work skills", columns: ["Strengths", "Areas for growth"], rows: 4 },
            { type: "do", n: 3, who: "pair", text: "<b>Walk and talk:</b> stand up with someone else in your group and walk slowly around the room for 2 minutes. Share what you have written. Listen carefully and take note of what your partner has said." },
            { type: "fields", fields: [{ id: "c1-partner", label: "My partner’s strengths and areas for growth (notes)", rows: 2 }] },
            { type: "do", n: 4, who: "group", text: "Come together as a group and tell other group members what you learnt about your partner. Who could <b>support</b> whom? (E.g. a confident speaker helps a nervous presenter practise.)" },
            {
              type: "language",
              title: "Talk about strengths — yours and your partner’s",
              groups: [
                { label: "Your strengths", phrases: ["<b>I’d say I’m quite good at</b> …", "<b>One of my strengths is</b> …", "<b>I’m comfortable</b> + -ing …"] },
                { label: "Areas for growth", phrases: ["<b>Something I’d like to work on is</b> …", "<b>I sometimes find it hard to</b> …", "<b>I’m trying to get better at</b> …"] },
                { label: "Report your partner", phrases: ["Lina <b>told me that</b> she’s good at …", "<b>He mentioned that</b> he finds it hard to …", "<b>She’d like to improve</b> her …"] },
                { label: "Offer support", phrases: ["<b>I could help you with</b> …", "<b>Would it help if</b> I …?", "<b>Why don’t you take the lead on</b> … and I’ll support you?"] }
              ]
            }
          ]
        },
        {
          id: "c2",
          short: "Safe space",
          minutes: 6,
          grouping: "Group",
          art: "dec10/assets/week3/v/v-d10w3d1-c2.svg",
          title: "Introduction to a communication model · Activity 1 Discussion",
          goal: "Talk about how to make group work safe and useful for everyone.",
          blocks: [
            {
              type: "steps",
              title: "Snowball fight",
              items: [
                { who: "alone", text: "Write <b>one idea</b> for Question 1 on a piece of paper (1 minute). Make it into a ball." },
                { who: "group", text: "Throw your snowball (gently!) into the middle of the group. Pick up a different one." },
                { who: "group", text: "Read it aloud. Add to it: “<b>Yes, and …</b>”. The chair makes sure everyone reads one." }
              ]
            },
            { type: "talk", title: "Discuss these two questions first", prompts: ["1. How can you achieve a safe and comfortable environment when doing a group task?", "2. How is giving feedback to your group members useful?"] },
            {
              type: "language",
              title: "Make everyone feel included",
              groups: [
                { label: "Invite", phrases: ["<b>What do you think</b>, Omar?", "<b>We haven’t heard from</b> … yet.", "<b>Does anyone have a different view?</b>"] },
                { label: "Appreciate", phrases: ["<b>Thanks for</b> doing the research — <b>it really helped</b>.", "<b>That’s a great point</b>.", "<b>I really appreciate</b> your hard work on …"] },
                { label: "Open-minded", phrases: ["<b>I hadn’t thought of it that way.</b>", "<b>Let’s try your idea</b> and see.", "<b>That’s an interesting perspective</b>."] }
              ]
            },
            { type: "sticky", text: "Connection is key to building a positive group dynamic. We can’t control how our message is received — but we <b>can</b> control our language choices.", color: "yellow" }
          ],
          answers: {
            title: "Suggested answers (Teacher’s Book)",
            items: [
              ["1", "An important part of working in groups is creating a safe and inclusive space for people to feel comfortable sharing their ideas and concerns. This can be achieved by: fostering a sense of belonging and acceptance; being open-minded to different approaches and perspectives; recognising accomplishments; expressing gratitude for hard work; understanding your own biases and triggers."],
              ["2", "Sharing positive feedback with your peers and communicating areas for improvement are also an important part of working collaboratively. This helps to facilitate honest communication, encourages self-reflection and the opportunity to discover new ways of approaching challenges. This, in turn, builds trust and connection which can lead to overall improvements in the group dynamic and productivity."]
            ]
          }
        },
        {
          id: "c3",
          short: "Two emails",
          minutes: 9,
          grouping: "Pair → Class",
          art: "dec10/assets/week3/v/v-d10w3d1-c3.svg",
          title: "Introduction to a communication model · Activity 2 Scenario",
          goal: "Compare two messages to Matt and find what makes one work better.",
          blocks: [
            { type: "key", title: "Context", points: ["Remember Week 2? The group couldn’t agree on a time to meet, and one groupmate wasn’t responding.", "The group has tried to organise a time to meet but Matt has not checked in with the group nor responded to any messages. Sam and Jamie send him the following emails:"] },
            {
              type: "chat",
              title: "Two messages to Matt",
              right: "Sam",
              lines: [
                ["Jamie", "When we don’t hear from you, we feel like you don’t care about this assignment. You always ignore our calls and you’re never in class so we can’t talk to you. You should pull your weight."],
                ["Sam", "When I see you haven’t responded to our messages for one week, I feel anxious and concerned because it makes it hard for us to plan effectively and I need reassurance that we will meet our deadlines and complete our work on time. Would you be willing to call me in the morning to discuss our group tasks? This might help us work more efficiently as a team."]
              ]
            },
            { type: "do", n: 1, who: "group", text: "<b>Hot seat:</b> one student is <b>Matt</b> and sits in the middle. Two students read Jamie’s and Sam’s messages <b>aloud</b> to Matt. Matt says how he feels after each one and what he will do next." },
            { type: "talk", title: "Discuss", prompts: ["1. Which response do you think would be received well? Why?", "2. What do you notice about the different language choices? What is included in Sam’s response that isn’t included in Jamie’s?", "Imagine you are Matt. How do you feel after each message? What do you do next?"] },
            { type: "figure", src: "dec10/assets/week3/d1-nvc-cycle.svg", alt: "Nonviolent Communication (NVC): a cycle of four parts. Observation: the concrete actions we observe with our senses without judgement. Feeling: how we feel in relation to what we observe. Need: the needs or values behind our feelings. Request: the concrete action we would like taken to meet the needs expressed.", caption: "Nonviolent Communication (NVC), developed by psychologist Dr Marshall Rosenberg." },
            {
              type: "spot",
              id: "c3-spot",
              label: "OFNR spotter",
              title: "3. How have these components been introduced in Sam’s response? Tap the language he uses.",
              hint: "Find four: the start of the observation, the feeling, the need and the request.",
              paras: ["[[*When I see]] you haven’t responded to our messages for one week, [[*I feel]] anxious and concerned [[because]] it makes it hard for us to plan effectively and [[*I need]] reassurance that we will meet our deadlines and complete our work on time. [[*Would you be willing]] to call me in the morning to discuss our group tasks? [[This might help]] us work more efficiently as a team."]
            },
            { type: "key", title: "Nonviolent Communication (NVC)", points: ["NVC focuses on <b>empathy</b> and <b>honest self-expression</b>, with the goal of fostering compassionate connections and resolving conflicts.", "It helps us separate our own <b>interpretations</b> from what we actually <b>see and hear</b> — this reduces conflict and misunderstanding."] }
          ],
          answers: { items: [["3. Sam’s language", "Observation: <b>When I see</b>… · Feeling: <b>I feel</b>… · Need: <b>I need</b>… · Request: <b>Would you be willing to</b>…?"]] }
        },
        {
          id: "c4",
          short: "Observe",
          minutes: 12,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-c4.svg",
          title: "Communication model components · Activity 1 Making Observations",
          goal: "Describe what happened like a camera — facts, not judgements.",
          blocks: [
            { type: "key", title: "An observation is …", points: ["a factual, specific description of what has taken place: the <b>who, what, where and when</b>.", "<b>non-judgmental</b>: exactly what you see and hear, without your beliefs and opinions.", "It helps to pretend you are a <b>camera</b> that is registering something without any opinion."] },
            { type: "figure", src: "dec10/assets/week3/d1-camera.svg", size: "wide", alt: "Observation versus evaluation. Left, a camera records: I noticed that you looked at your phone five times during the meeting yesterday. Right, a judge’s gavel with a thought cloud: Omar is always on his phone during meetings. Words like always, never and every time are crossed out.", caption: "Camera words (facts, numbers, times) vs judge words (always, never, too …)." },
            { type: "do", n: 1, who: "group", text: "<b>Camera or judge? Stand up or sit down.</b> The chair reads each statement below aloud. <b>Stand up</b> = observation (camera). <b>Stay sitting</b> = evaluation (judge). Then sort them here to record your answers." },
            {
              type: "sort",
              id: "c4-sort",
              title: "1. Which of the following statements are observations and which are an evaluation?",
              buckets: [{ label: "Observation", letter: "O" }, { label: "Evaluation", letter: "E" }],
              items: [
                { text: "The last two times I asked you to clean up your desk, you told me that you didn’t have the time and energy to do so.", answer: 0 },
                { text: "Every time we have a discussion, you talk too much and dominate with your opinions.", answer: 1 },
                { text: "Jun never offers to help with writing tasks.", answer: 1 },
                { text: "I noticed that you were not able to finish your section of the report by Friday.", answer: 0 },
                { text: "Peter is too aggressive in a conflict situation.", answer: 1 },
                { text: "My colleague was the first one to arrive at the office every day last week.", answer: 0 },
                { text: "Omar is always on his phone during meetings.", answer: 1 },
                { text: "When Li is afraid he swings his arms around and has hit other children on two different occasions.", answer: 0 }
              ]
            },
            { type: "talk", title: "Think and discuss", prompts: ["2. Look at the evaluative statements in Question 1. Identify words that generalise. What effect do these words have?", "3. What evaluative statements has Jamie used in his response?", "4. What language did Sam use to state his observation? Which words indicate time?"] },
            {
              type: "detect",
              id: "c4-dt",
              label: "Camera check",
              title: "5. Rephrase the evaluative statements from Question 1 using objective observation.",
              hint: "Green lights = camera language. Red lights = judging words to remove.",
              checks: [
                { label: "Observation starter", any: ["i noticed", "i’ve noticed", "i've noticed", "when i see", "when i hear", "when i saw", "i saw", "i heard"], color: "#2b776e" },
                { label: "Time or number", any: ["/\\b(yesterday|last|times?|minutes?|hours?|week|monday|tuesday|wednesday|thursday|friday|today|twice|once)\\b/", "/\\d/"], color: "#3a58a0" }
              ],
              avoid: [
                { label: "always / never / every time", any: ["always", "never", "every time"] },
                { label: "too … / should", any: ["/\\btoo\\b/", "should"] }
              ],
              items: [
                { task: "Every time we have a discussion, you talk too much and dominate with your opinions.", rows: 2 },
                { task: "Jun never offers to help with writing tasks.", rows: 2 },
                { task: "Peter is too aggressive in a conflict situation.", rows: 2 },
                { task: "Omar is always on his phone during meetings.", rows: 2 }
              ]
            },
            { type: "language", title: "Other language we can use to make observations", groups: [{ label: "Observe", phrases: ["<b>When I hear you say that</b> I am …", "<b>I’ve noticed that</b> / <b>I noticed that</b> …", "<b>When I see</b> …", "<b>In the last two meetings</b>, …"] }] }
          ],
          answers: {
            title: "Answers (Teacher’s Book)",
            items: [
              ["1", "Observations: the desk; the report by Friday; the colleague who arrived first; Li. Evaluations: every time we have a discussion; Jun never; Peter is too aggressive; Omar is always on his phone."],
              ["2", "Always, Never, Every time. They give a sense of absoluteness and are likely to be challenged and met with defensiveness e.g. “I am not ALWAYS on my phone”. These words do not help us connect with each other."],
              ["3", "“You always ignore our calls and you’re never in class” · “You should pull your weight.” (“You should...” is also considered a judgement/evaluation as it implies wrongdoing.)"],
              ["4", "“When I see you haven’t responded to our messages for one week” — time: <b>for one week</b>."],
              ["5 · Suggested answers", "During discussions, I’ve noticed that you speak for more time than anybody else. · The last three times Paul or I have asked for your help with writing tasks, you told us that you did not have the capacity/confidence to do so. · When Peter and I disagree, he raises his voice and talks over the top of me. · I noticed that you looked at your phone five times during the meeting yesterday."]
            ]
          }
        },
        {
          id: "c5",
          short: "Feel",
          minutes: 11,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-c5.svg",
          title: "Communication model components · Activity 2 Expressing Feelings",
          goal: "Say a real feeling — not a thought dressed up as a feeling.",
          blocks: [
            { type: "talk", title: "1. Revisit Sam’s response", prompts: ["What kinds of words are used to express feelings?", "Could the word ‘feel’ be replaced with the word ‘think’?"] },
            { type: "figure", src: "dec10/assets/week3/d1-heart-head.svg", size: "wide", alt: "Two students. Left: hand on heart means feeling, for example I’m nervous about the presentation — a real feeling word, an adjective. Right: hand on head means thought, for example I feel like you are not listening to me — feel plus like, that, as if or you.", caption: "Heart = feeling · head = thought." },
            { type: "do", n: 1, who: "group", text: "<b>Show it with your hand:</b> the chair reads sentences a–j aloud. Everyone shows the answer at the same time: <b>hand on heart</b> = feeling, <b>hand on head</b> = thought. Then tap your answers in the quiz." },
            {
              type: "quiz",
              id: "c5-quiz",
              title: "2. Which of the following sentences are expressing a thought or evaluation rather than a feeling?",
              shared: ["Feeling", "Thought"],
              items: [
                { q: "a. I feel attacked.", answer: "Thought", why: "This is an expression of the thought <i>you are attacking me</i>." },
                { q: "b. I am nervous about the presentation.", answer: "Feeling" },
                { q: "c. I feel like you are not listening to me.", answer: "Thought", why: "feel + <b>like</b> = a thought." },
                { q: "d. I feel excited about the excursion tomorrow.", answer: "Feeling" },
                { q: "e. I feel inadequate", answer: "Thought", why: "A description of what I think I am." },
                { q: "f. I feel my classmates don’t pay attention.", answer: "Thought", why: "feel + a noun for people (my classmates) = a thought." },
                { q: "g. I feel it is useless.", answer: "Thought", why: "feel + <b>it</b> = a thought." },
                { q: "h. When you forget my birthday, I feel upset.", answer: "Feeling" },
                { q: "i. I feel like I am not good enough.", answer: "Thought" },
                { q: "j. I feel as if I can’t do anything right.", answer: "Thought", why: "feel + <b>as if</b> = a thought." }
              ]
            },
            { type: "key", title: "Feelings are not typically expressed when the word feel is followed by:", tone: "warn", points: ["Words such as <b>that</b>, <b>like</b>, and <b>as if</b>", "The pronouns <b>I, you, he, she, they</b>, and <b>it</b>", "<b>Names</b> or <b>nouns</b> that refer to people", "Remember: we don’t even need the word feel. We can simply say, “I’m nervous.”"] },
            { type: "figure", src: "dec10/assets/week3/d1-feel-think.svg", size: "wide", alt: "Two columns. Real feelings, with faces: anxious, concerned, nervous, excited, upset, frustrated, worried, disappointed, overwhelmed, relieved. Thoughts in disguise, with a mask: I feel like…, I feel that…, I feel as if…, I feel attacked, I feel ignored, I feel you…", caption: "Real feelings are usually <b>adjectives</b>. If you can say “think” instead of “feel”, it is a thought." },
            { type: "talk", title: "Discuss", prompts: ["3. Which sentences describe what I think about myself?", "4. Which sentences describe what I think others around me are doing?", "5. Why is it important to distinguish between thoughts and feelings like this?", "6. Reflect again on Jamie’s response. Identify the feeling statement. Is he expressing a thought or a feeling? How do you think Jamie really feels?"] },
            { type: "spinner", id: "c5-spin", title: "Feelings check-in", text: "Spin. Say one true sentence: “I feel … when …”. Use a real feeling word.", reels: [{ label: "Situation", items: ["a group member is late", "my group likes my idea", "I present in English", "the deadline is tomorrow", "someone says thank you", "nobody answers my message"] }] }
          ],
          answers: {
            title: "Answers (Teacher’s Book)",
            items: [
              ["1", "Adjectives (I feel anxious and concerned). ‘Feel’ cannot be replaced with ‘think’ — it is therefore expressing a feeling."],
              ["2", "Feelings: b, d, h. Thoughts: a, c, e, f, g, i, j."],
              ["3", "About myself: e, i, j (E, J, K in the Teacher’s Book numbering)."],
              ["4", "About others: a, c, f."],
              ["5", "These pseudofeelings are actually thoughts, so when you hold onto that you are staying in your head and missing the actual feeling that is behind it and still wants to be heard. When you express this thought, it is actually a judgement about someone else and the other person is likely to hear blame. In NVC we take responsibility for our feelings, so we don’t blame others for causing them."],
              ["6", "“We feel like you don’t care about this assignment.” Thought. Jamie really feels: worried, concerned."]
            ]
          }
        },
        {
          id: "c6",
          short: "Need",
          minutes: 11,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-c6.svg",
          title: "Communication model components · Activity 3 Expressing our Needs",
          goal: "Find the need behind a feeling, and name it.",
          blocks: [
            { type: "key", title: "Feelings point to needs", points: ["Feeling hungry → the need for <b>food</b>.", "Feeling sad → a need for <b>support</b> or <b>connection</b>.", "Feeling frustrated → a need for <b>change</b> or <b>autonomy</b>."] },
            { type: "figure", src: "dec10/assets/week3/d1-needs-cloud.svg", size: "wide", alt: "A word cloud of needs in five groups based on Maslow’s hierarchy. Physical: food, water, sleep, shelter, rest, air. Safety and security: stability, reliability, order, consistency, protection, structure. Connection: cooperation, inclusion, support, reassurance, understanding, belonging, empathy, trust. Self-esteem: respect, recognition, acknowledgement, appreciation, achievement. Self-actualisation: purpose, creativity, growth, meaning, autonomy, freedom, discovery.", caption: "1. Look at the needs. What do you notice about these words? (They are all abstract <b>nouns</b>.)" },
            { type: "do", n: 1, who: "class", text: "<b>Human pyramid:</b> five places in the room are the five levels (Physical near the door … Self-Actualisation at the window). Take one need card from your teacher (or one word below). Walk to its level and say: “I’m <i>reassurance</i> — I’m a <i>connection</i> need.” Then sort the words here." },
            {
              type: "sort",
              id: "c6-sort",
              title: "Put each need under a heading",
              hint: "Headings based on Maslow’s Hierarchy of Needs.",
              buckets: [{ label: "Physical" }, { label: "Safety and Security" }, { label: "Connection (Love & Belonging)" }, { label: "Self-Esteem" }, { label: "Self-Actualisation" }],
              items: [
                { text: "Sleep/Rest", answer: 0 },
                { text: "Shelter", answer: 0 },
                { text: "Stability", answer: 1 },
                { text: "Order", answer: 1 },
                { text: "Cooperation", answer: 2 },
                { text: "Reassurance", answer: 2 },
                { text: "Respect", answer: 3 },
                { text: "Recognition", answer: 3 },
                { text: "Creativity", answer: 4 },
                { text: "Growth", answer: 4 }
              ]
            },
            {
              type: "quiz",
              id: "c6-quiz",
              title: "2. What is the need behind each statement below?",
              items: [
                { q: "Statement: “I feel frustrated when my ideas are ignored at meetings.”", options: ["Recognition", "Rest", "Order"], answer: "Recognition" },
                { q: "Statement: “I get anxious when I have to make decisions on my own.”", options: ["Freedom", "Support", "Challenge"], answer: "Support" },
                { q: "Statement: “I am happiest when I’m working on my art projects.”", options: ["Stability", "Creativity", "Protection"], answer: "Creativity" },
                { q: "Statement: “I feel upset when people don’t listen to what I’m saying.”", options: ["Respect", "Solitude", "Exercise"], answer: "Respect" },
                { q: "Statement: “I find it tough when my routine is disrupted.”", options: ["Discovery", "Flexibility", "Stability"], answer: "Stability" },
                { q: "3a. What need is Jamie trying to express when he says “We feel like you don’t care about this assignment.... You should pull your weight”?", options: ["Cooperation", "Space", "Laughter"], answer: "Cooperation" },
                { q: "3b. What need did Sam have?", options: ["Independence", "Reassurance", "Recognition"], answer: "Reassurance" }
              ]
            },
            { type: "tip", text: "Tip: Think about what is important to them – what do they value?" },
            { type: "language", title: "Other language we can use to express our needs or those of others", groups: [{ label: "Needs", phrases: ["<b>I really value</b> …", "<b>What is really important to me is</b> …", "<b>It sounds like</b> … <b>is really important to you</b>.", "<b>I need</b> … / <b>I’d like some</b> …"] }] }
          ]
        },
        {
          id: "c7",
          short: "Request",
          minutes: 11,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-c7.svg",
          title: "Communication model components · Activity 4 Making Requests",
          goal: "Ask for a clear, doable action — and let the other person say no.",
          blocks: [
            { type: "talk", title: "1. What do you think is the difference between a request and a demand?", prompts: ["Think of a time someone made a demand of you. How did you feel?"] },
            { type: "figure", src: "dec10/assets/week3/d1-request.svg", size: "wide", alt: "Demand versus request. A demand is a closed door with a lock: You should pull your weight. A request is an open door with three keys: choice (Would you be willing…), a positive verb (to call me), clear and specific (in the morning to discuss our group tasks).", caption: "Requests have three characteristics: <b>choice</b> · <b>positive verb</b> · <b>clear and specific</b>." },
            {
              type: "spot",
              id: "c7-spot",
              label: "Three keys",
              title: "2. Identify the three characteristics in Sam’s response",
              hint: "Tap the three parts.",
              paras: ["[[*Would you be willing]] [[*to call me]] [[*in the morning to discuss our group tasks]]?"]
            },
            {
              type: "detect",
              id: "c7-dt",
              label: "Request builder",
              title: "3. Rewrite these statements using the above features of requests.",
              hint: "Turn on all three lights. Avoid negative words like “don’t”.",
              checks: [
                { label: "Choice", any: ["would you be willing", "would you be open", "are you able", "could you", "would you mind", "would it be possible", "can you"], color: "#2b776e" },
                { label: "Clear and specific (time / number)", any: ["/\\b(by|before|until|after|morning|evening|friday|monday|tomorrow|today|minutes?|days?|week|first part|section)\\b/", "/\\d/"], color: "#3a58a0" }
              ],
              avoid: [{ label: "Negative (don’t / stop / wish you wouldn’t)", any: ["don’t", "don't", "stop", "wouldn’t", "wouldn't"] }, { label: "Demand (should / must)", any: ["should", "must"] }],
              items: [
                { task: "a. Don’t talk while I am speaking.", rows: 2 },
                { task: "b. I wish you wouldn’t spend so much time at work.", rows: 2 },
                { task: "c. You should pull your weight.", rows: 2 }
              ]
            },
            { type: "figure", src: "dec10/assets/week3/d1-speed-circle.svg", size: "wide", alt: "Speed circle. Students sit in an inner and an outer circle facing each other. The outer student reads a demand, for example Don’t talk while I’m speaking! The inner student turns it into a request: Would you be willing to wait until I finish, please? After 30 seconds the outer circle moves one seat.", caption: "Speed circle: 30 seconds per demand, then the outer circle moves one seat." },
            { type: "do", n: 1, who: "class", text: "<b>Speed circle:</b> make an inner and an outer circle. Outer: spin and read the demand in a cross voice. Inner: turn it into a request with all three keys in <b>30 seconds</b>. Outer circle moves one seat. Swap circles after three rounds." },
            { type: "spinner", id: "c7-spin", title: "Demands for the speed circle", text: "Spin a demand. Turn it into a request: choice + positive verb + clear and specific.", reels: [{ label: "Demand", items: ["Don’t be late again.", "Stop changing my slides.", "You should answer the group chat.", "Don’t interrupt me.", "You must read the article before the meeting.", "Stop talking about other things in our meetings."] }] },
            {
              type: "pairs",
              items: [
                { from: "I would like you to listen to me more?", to: "[[Would you be willing to]] put your phone down and make eye contact with me [[while we are talking]]?", tag: "clear and specific" }
              ]
            },
            {
              type: "language",
              title: "Requests for Clarification",
              groups: [
                { label: "Check the message", phrases: ["<b>What I’m hearing is</b> …", "<b>Am I on the right track?</b> <b>Does that sound right to you?</b>", "<b>What did you mean when you said</b> …?"] },
                { label: "Calm the tension", phrases: ["<b>What I’m hearing is</b> you’re looking for a solution to this problem.", "<b>What I’m hearing is</b> you’re feeling overwhelmed with the workload.", "<b>What I’m hearing is</b> you are not comfortable with the tasks you have been allocated."] }
              ]
            },
            { type: "talk", title: "Practise “What I’m hearing is …”", prompts: ["Student A complains about a group problem for 20 seconds. Student B answers: “What I’m hearing is …”. A says: “Yes, exactly” or corrects B. Swap."] }
          ],
          answers: {
            title: "Answers (Teacher’s Book)",
            items: [
              ["1", "A demand attempts to control behaviour; it carries an expectation of compliance, leaving little room for refusal. A request implies that the person being asked has the choice to deny the request without significant consequences. When we make a request we are open to hearing a response of ‘no’."],
              ["2", "Choice - Would you be willing · Positive - to call me · Clear and specific – in the morning to discuss our group tasks"],
              ["3 · Suggested answers", "a. Would you be willing to wait until I have finished talking before you speak? · b. Would you be open to coming home earlier at least 3 days a week? · c. Are you able to complete the first part of the assignment by Friday?"]
            ]
          }
        },
        {
          id: "c8",
          short: "Card game",
          minutes: 10,
          grouping: "Groups of 4–5",
          art: "dec10/assets/week3/v/v-d10w3d1-c8.svg",
          title: "Putting NVC into practice · Activity 1 Card game",
          goal: "Build complete OFNR statements from cards — and get comfortable with the language.",
          blocks: [
            {
              type: "steps",
              title: "How to play",
              items: [
                { who: "group", text: "Sit in a circle. Your teacher gives you 4 or 5 cards with an observation, feeling, need or request. Don’t show your cards to your group members." },
                { who: "group", text: "The first student reads an observation card: “When I see/hear… / I have noticed that…” and places it on the table." },
                { who: "group", text: "The others offer the best <b>feeling</b> card, then the best <b>need</b> card, then the <b>request</b>. Discuss which card fits best." },
                { who: "group", text: "When a set is complete, another student starts the next set." }
              ]
            },
            { type: "tip", text: "Your teacher may give your group a set of <b>20 paper cards</b> (O, F, N, R). No cards? Play on screen: one student reads an observation from the sort below, and the group chooses its feeling, need and request together." },
            {
              type: "sort",
              id: "c8-sort",
              title: "No cards? Play it here: put each card with its observation",
              hint: "Each observation needs one feeling, one need and one request.",
              buckets: [
                { label: "1", text: "In our group, I have noticed that the same people tend to do most of the tasks." },
                { label: "2", text: "When I see that the deadlines for the project tasks were missed by a couple of days last week" },
                { label: "3", text: "I noticed that during our last group meeting, some voices were louder than others and not everyone was able to share their ideas." },
                { label: "4", text: "When I see our group discussions drift off-topic and go overtime" },
                { label: "5", text: "When I see you looking at your phone while I am talking" }
              ],
              items: [
                { text: "I feel disappointed", answer: 0 },
                { text: "I believe that everyone's input is important for our project's success", answer: 0 },
                { text: "Could we review our tasks and make sure we have a balanced workload?", answer: 0 },
                { text: "I feel anxious", answer: 1 },
                { text: "I need reassurance that we can get things done on time to avoid last-minute stress", answer: 1 },
                { text: "Would you be willing to discuss how we might better manage our time together?", answer: 1 },
                { text: "I feel concerned", answer: 2 },
                { text: "I value fairness and inclusion", answer: 2 },
                { text: "Would you be willing to discuss what we can do to ensure everyone gets a chance to speak?", answer: 2 },
                { text: "I feel frustrated", answer: 3 },
                { text: "I need more efficiency in meetings so that we can cover everything without taking extra time.", answer: 3 },
                { text: "Would you be willing to have a designated \"time-keeper\" who ensures that our discussions remain on track?", answer: 3 },
                { text: "I feel upset", answer: 4 },
                { text: "I need connection and acknowledgement", answer: 4 },
                { text: "Would you be willing to put your phone away for the next 10 minutes and hear what I have to say?", answer: 4 }
              ]
            },
            { type: "do", n: 1, who: "group", text: "Read your five complete statements <b>aloud</b> to each other — with a calm, friendly voice. The <b>language monitor</b> listens and ticks O, F, N and R for each speaker." },
            { type: "spinner", id: "c8-spin", title: "Speed round: OFNR in 30 seconds", text: "Spin a group-work problem. Say a full OFNR statement in 30 seconds. The group checks: O? F? N? R?", reels: [{ label: "Problem", items: ["One member always arrives 15 minutes late.", "Nobody has read the article before the meeting.", "One person changed the slides without asking.", "A member hasn’t sent their part of the summary.", "Two people talk at the same time in every meeting.", "The group chat is full of jokes, not planning."] }] },
            { type: "tip", text: "The aim is not to guess the feeling of another person — it is to become familiar and comfortable with the language of NVC." }
          ]
        },
        {
          id: "c9",
          short: "Video + OFNR",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d1-c9.svg",
          title: "Putting NVC into practice · Activity 2 Composing your own OFNR statement",
          goal: "Watch a workplace conflict, find the blame language, and write a better message.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "1. Watch the video and answer the questions." },
            { type: "listening", source: "Putting NVC into practice (video)", title: "Putting NVC into practice", videoId: "0jkYIwnJfZw", audio: "", start: 0, clip: "the whole video", transcripts: [["nvc", "Transcript (open after watching)"]] },
            {
              type: "quiz",
              id: "c9-quiz",
              title: "Watch the video",
              items: [
                { q: "a. What is Rachel’s main challenge?", options: ["She is having difficulty balancing work with her family commitments.", "She does not understand the project.", "She wants Jonathan’s job."], answer: "She is having difficulty balancing work with her family commitments." },
                { q: "b. What is Jonathan’s main challenge?", options: ["He has too many children to look after.", "He thinks that he has to do most of the work and is concerned he won’t get his bonus.", "He wants to change teams."], answer: "He thinks that he has to do most of the work and is concerned he won’t get his bonus." }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "2. Listen again with the transcript. Can you identify any language of blame they have used? How do you think Rachel and Jonathan are feeling? What is the need behind this feeling?" },
            { type: "fields", fields: [{ id: "c9-blame", label: "Language of blame I found", rows: 2 }, { id: "c9-fn", label: "Their feelings and needs (notes)", rows: 2 }] },
            {
              type: "detect",
              id: "c9-dt",
              label: "OFNR studio",
              title: "3. Write an OFNR statement for either Jonathan or Rachel.",
              hint: "All four lights on = a complete OFNR statement.",
              checks: [
                { label: "Observation", any: ["when i see", "when i hear", "i noticed", "i’ve noticed", "i've noticed", "i have noticed"], color: "#2b776e" },
                { label: "Feeling", any: ["i feel", "i am worried", "i’m worried", "i am", "i’m"], color: "#b0512a" },
                { label: "Need", any: ["i need", "i value", "important to me", "because my", "because i need"], color: "#7a4a8c" },
                { label: "Request", any: ["would you be willing", "are you able", "could you", "would you be open", "would it be possible"], color: "#3a58a0" }
              ],
              avoid: [{ label: "Blame (your fault / should / always)", any: ["your fault", "should", "always", "never"] }],
              items: [{ task: "My OFNR statement (I am … Jonathan / Rachel)", rows: 5, placeholder: "When I hear you say that …, I feel … because I need … Would you be willing to …?" }]
            },
            { type: "do", n: 3, who: "pair", text: "<b>Role play — stand up and act it:</b> replay the scene. A is Jonathan or Rachel and says the OFNR statement. B answers kindly, starting with “What I’m hearing is …”. Then swap." },
            {
              type: "language",
              title: "Doing NVC in the heat of the moment",
              groups: [
                { label: "Pause", phrases: ["<b>Right now, I don’t know what to do.</b>", "<b>I would like to come back with more clarity. Can I come back to you in an hour?</b>"] },
                { label: "Repair", phrases: ["<b>I noticed that I was actually blaming you</b> and what I would like to have said is …", "<b>Can I try that again?</b>"] },
                { label: "Respond with empathy", phrases: ["<b>I understand it is difficult for you</b> with your other responsibilities.", "<b>It sounds like</b> flexibility <b>is really important to you</b>."] }
              ]
            },
            { type: "do", n: 4, who: "alone", text: "<b>Use it for real:</b> write a short message to your real seminar group (in Chats or by email). Make one OFNR request about your next meeting — e.g. a time, a task or a deadline." },
            { type: "fields", fields: [{ id: "c9-use", label: "My message to my group", rows: 4, placeholder: "Hi everyone, I noticed that we haven’t chosen a time to meet this week. I feel a bit worried because I need … Would you be willing to …?" }] },
            { type: "scale", id: "c9-exit", title: "Exit ticket", statement: "I can turn a complaint into a polite OFNR request.", ends: ["Not yet", "Yes, easily"] },
            { type: "tip", text: "Don’t expect to be an expert in this after one lesson. It takes lots of practice. Be kind to yourself and acknowledge your progress." }
          ],
          answers: {
            title: "Suggested answers (Teacher’s Book)",
            items: [
              ["1", "a. Rachel is having difficulty balancing work with her family commitments. b. Jonathan thinks that he has to do most of the work and is concerned he won’t get his bonus."],
              ["Language of blame (suggested)", "“You should have finished it yourself.” · “I’m tired of always having to do your work.” · “Rachel didn’t finish her half of the project” · “This is your fault. You assigned her to this.”"],
              ["Possible OFNR · Jonathan", "When I hear you say that you haven’t finished your part of the project, I am worried and concerned that I won’t get my bonus because I need some financial security at the moment. I understand it is difficult for you with your other responsibilities. Are you able to complete your section by close of business on Wednesday?"],
              ["Possible OFNR · Rachel", "I noticed that when I tried to explain my situation, you said that you were tired of always having to do my work. I feel frustrated and overwhelmed because my family responsibilities are important to me and I need flexibility to complete my work and recognition of my contributions. In order for us to make the deadline, would you be willing to help me with the last section this time?"]
            ]
          }
        }
      ]
    },

    /* ───────────────────────── 4A · Research summary preparation Homework ───────────────────────── */
    {
      id: "rsprep",
      number: "04",
      code: "4A",
      minutes: 60,
      tone: "amber",
      art: "dec10/assets/week3/s-d1-rsprep.svg",
      title: "Research summary preparation Homework",
      subtitle: "Find one source on green jobs and prepare a 2-minute verbal summary",
      outcome: "You have further developed your research skills, summarised and paraphrased relevant information and viewpoints from a source, and prepared to give a clear and well-structured short summary presentation.",
      activities: [
        {
          id: "h1",
          short: "The task",
          minutes: 10,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d1-h1.svg",
          title: "Review task details",
          goal: "Know what to do tonight and choose a guiding question.",
          blocks: [
            { type: "figure", src: "dec10/assets/week3/d1-rs-timeline.svg", size: "wide", alt: "Timeline of the research summary task in Week 3. Monday (today): individuals research and prepare a summary of research. Tuesday: individuals form groups and share their summaries. Thursday and Friday: groups give their research summary presentations with peer and teacher feedback.", caption: "Same process as Week 2 — new topic: <b>green jobs and green skills</b>." },
            {
              type: "steps",
              title: "The task",
              items: [
                { who: "alone", text: "Based on Monday’s in-class reading and the week’s topic, research additional sources to find further information on that topic to build a deeper understanding." },
                { who: "alone", text: "It is not necessary to do a thorough literature review. We suggest having a pool of a few sources as a start. After initial screening, focus on only <b>one</b>. Multimodal sources are permitted." },
                { who: "alone", text: "Your summary has to cover content, but it could also include a more critical component if you wish." }
              ]
            },
            {
              type: "cards",
              title: "Choose a guiding question to focus your research",
              pick: "h1-q",
              items: [
                { label: "1", text: "Is there any gap in your understanding of the week’s topic?" },
                { label: "2", text: "What other cause/s of the problem can you find?" },
                { label: "3", text: "What other perspectives on the cause/s of the problem can you find?" },
                { label: "4", text: "What other effect/s of the problem can you find?" },
                { label: "5", text: "What other perspectives on the effect/s of the problem can you find?" },
                { label: "6", text: "How is this problem and its causes and/or effects being discussed in your future field of study?" },
                { label: "7", text: "How is this problem and its causes and/or effects being addressed in your country?" }
              ]
            },
            { type: "tip", text: "Look back at Week 2: <b>W2 D1. 3A</b> Introduction to research summary presentations (details) and <b>W2 D1. 4A</b> Research summary preparation Homework (the sample)." }
          ]
        },
        {
          id: "h2",
          short: "Research",
          minutes: 30,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d1-h2.svg",
          title: "Research and take notes",
          goal: "Find one useful source in 30 minutes, check it, and make notes.",
          blocks: [
            { type: "key", title: "Remember", tone: "warn", points: ["The research process is never a simple, perfect process. If you can’t find exactly what you’re looking for, that’s ok. Even if you find something that’s just interesting that helps you learn something new about the week’s topic, that’s fine. It’s all about going through the process.", "Don’t spend more than <b>30 minutes</b> doing the research and looking for the “perfect” article."] },
            {
              type: "flip",
              title: "Search words that work",
              hint: "Turn a card for ideas. Combine words with AND.",
              items: [
                { front: "green skills", back: "“green skills” AND “labour market” · “green skills gap” · “green jobs” AND training", tag: "key words" },
                { front: "just transition", back: "fair move for workers from fossil fuel jobs to green jobs: “just transition” AND workers", tag: "key words" },
                { front: "your country", back: "“green jobs” AND Australia / China / Vietnam / Saudi Arabia …", tag: "question 7" },
                { front: "your field", back: "“green skills” AND engineering / business / nursing / IT …", tag: "question 6" }
              ]
            },
            { type: "fields", title: "My source", fields: [{ id: "h2-title", label: "Title", rows: 1 }, { id: "h2-who", label: "Author / organisation and year", rows: 1 }, { id: "h2-where", label: "Where it was published + link", rows: 1 }, { id: "h2-why", label: "Why I chose it (one sentence)", rows: 2 }] },
            { type: "checklist", id: "h2-craap", title: "Quick CRAAP check", items: ["Current: recent enough for this topic", "Relevant: it answers my guiding question", "Authority: a real expert, journal, university or organisation", "Accurate: it gives evidence or data", "Purpose: it informs — it is not just selling something"] },
            { type: "table", id: "h2-notes", title: "My note-taking table", columns: ["Cause/s", "Effects", "My reactions / thoughts"], rows: 4 }
          ]
        },
        {
          id: "h3",
          short: "Practise",
          minutes: 20,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d1-h3.svg",
          title: "Prepare your verbal summary",
          goal: "Say your summary out loud from notes — about 2 minutes.",
          blocks: [
            {
              type: "language",
              title: "A frame for your 2-minute summary",
              groups: [
                { label: "Open", phrases: ["<b>I found an article / a video</b> in … about …", "<b>I chose it because</b> it answers my question: …", "It was published <b>in 2024 by</b> …"] },
                { label: "Main points", phrases: ["<b>The main finding is that</b> …", "<b>According to</b> …, green jobs …", "<b>This is mainly due to</b> …", "<b>As a result,</b> …"] },
                { label: "Link to class", phrases: ["<b>This ties in with</b> Bowen et al. (2018), <b>who found that</b> …", "<b>In contrast to</b> the reading, this source …"] },
                { label: "Critical (optional) + close", phrases: ["<b>One limitation of this source is</b> …", "<b>So, in short,</b> …", "<b>I’d be happy to answer any questions.</b>"] }
              ]
            },
            {
              type: "steps",
              title: "Practise three times",
              items: [
                { who: "alone", text: "<b>Round 1:</b> say it with your notes. Stuck? Go back to the source to clarify." },
                { who: "alone", text: "<b>Round 2:</b> record yourself on your phone (2 minutes). Listen back." },
                { who: "alone", text: "<b>Round 3:</b> say it to a friend, a family member — or the mirror. Look up from your notes." }
              ]
            },
            { type: "key", title: "Choose your level", points: ["<b>Bronze:</b> you can say your summary from notes in about 2 minutes.", "<b>Silver:</b> + you use two cause-and-effect linkers and name the source (author, year).", "<b>Gold:</b> + send a 30-second voice note or your one-sentence summary to a classmate in Chats, and ask one question about theirs."] },
            { type: "checklist", id: "h3-check", title: "Make sure", items: ["My summary is clearly focused on my guiding question.", "I am confident my summary accurately represents the source ideas.", "It is in my own words, with cause-and-effect language.", "I refer to the source (author, year).", "I speak from notes — I don’t read."] },
            { type: "scale", id: "h3-ready", title: "How ready are you for tomorrow?", statement: "I can give my 2-minute summary from notes without reading.", ends: ["Not yet", "Totally ready"] },
            { type: "key", title: "Tomorrow, first thing", points: ["Bring your <b>notes</b> (not a script).", "You share your summary in a group, then your group plans a presentation for Thursday or Friday.", "Keep researching for your group’s <b>Seminar</b> topic and the final <b>Interactive Presentation</b> too."] }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["green economy", "an economy that improves human well-being and social equity while reducing environmental risks", "Policy-makers want to manage the transition to a green economy."],
    ["greening", "the effect of the green economy on jobs: more demand, new skills and new jobs", "Greening has been called a modern-day industrial revolution."],
    ["green job", "a job that helps to protect or restore the environment", "A solar installer has a green job."],
    ["labour market", "all the jobs and workers in a place", "Greening has a large structural impact on labour markets worldwide."],
    ["counterpart", "someone or something with the same job or purpose as another", "Green jobs are compared with their non-green counterparts."],
    ["patchy", "not complete; good in some parts but not in others", "Research on green skills is still patchy."],
    ["routine-intensive", "with a lot of repeated tasks", "Green jobs are less routine-intensive than non-green jobs."],
    ["skill distance", "the gap between the skills you have and the skills a new job needs", "The skill distance between a marketing manager and a sales manager is small."],
    ["continuum", "a whole without clear divisions into parts", "“Green” is a continuum, not a binary characteristic."],
    ["binary", "with only two options", "A binary label says a job is either green or not."],
    ["on-the-job training", "learning new skills while you work", "Most re-training can occur on-the-job."],
    ["observation", "(NVC) a fact you see or hear, without judgement", "Observation: I noticed you looked at your phone five times."],
    ["evaluation", "(NVC) a judgement or opinion about someone", "“Omar is always on his phone” is an evaluation."],
    ["request", "(NVC) a clear, positive, doable action the other person can say no to", "Would you be willing to call me in the morning?"],
    ["demand", "an order that expects the other person to obey", "“You should pull your weight” sounds like a demand."]
  ]
};
