/* DEC10 course map — the list of weeks and lessons. Same app as DEC15 (js/, css/, assets/ at the top of the site);
   only the course map and the lessons in this folder are DEC10's own. Students open  .../dec10.html  (or .../dec10/).
   ADD A LESSON IN 3 STEPS
   1. Copy lessons/_template.js (at the top of the site) to dec10/lessons/weekN/d10wNdM.js and write the content.
   2. Put any new protected texts in dec10/lessons/weekN/sources.js (window.DEC15_SOURCES).
      Pictures go in dec10/assets/weekN/ — write their paths from the top of the site: 'dec10/assets/week1/….svg'.
   3. Below, change the day's status to 'ready' and list its files in `scripts` (paths start with 'dec10/').
   LESSON IDS START WITH "d10" (d10w1d1, d10w1d2 …). DEC15 and DEC10 save into the same Supabase project, and the id is
   the key of every student's saved work and class wall, so a DEC10 id must never be the same as a DEC15 id (w3d1).
   Never change an id after students start. */
window.DEC15_COURSE = {
  id: 'dec10',          // keeps the DEC10 class (class list, chat, announcements, boards) apart from DEC15 — never change
  root: 'dec10/',       // where this course's lessons and pictures live
  code: 'DEC10',
  title: 'Direct Entry Course · 10 weeks',
  topic: 'Academic English',
  intro: '',   // no line under the title on the course map
  heroImage: 'dec10/assets/week1/hero-d10w1d1.svg',
  heroAlt: 'Illustration: profit, people and planet as three overlapping circles on a tablet, with outline notes in a notebook.',
  // The course card under the logo in the side panel.
  sideCard: { name: 'Direct Entry Course', note: '10 weeks' },
  // Settings (gear at the foot of the side panel) → Side panel colour. The first one is the default.
  // Names match css/courses.css; each student's choice is kept on their device.
  sideColours: [['light', 'Light', '#ffffff'], ['charcoal', 'Charcoal', '#424242'], ['black', 'Black', '#000000'], ['navy', 'Navy', '#1a355e'], ['eucalypt', 'Eucalypt', '#4f7d74']],
  defaultLesson: 'd10w1d1',
  // loaded before every lesson: the Course calendar and Assessments pages (side panel)
  scripts: ['dec10/lessons/guide.js'],
  /* DOWNLOADS (side panel → Downloads, #/downloads): forms students download, fill in and keep or share.
     Each file lives in the site (dec10/downloads/, cached for offline use) and a copy is kept in Supabase Storage
     (public bucket "downloads"). In a lesson, { type: 'download', id: 'feedback-tool' } shows the download card.
     ADD A FILE: put the PDF in dec10/downloads/, a preview of each page in dec10/assets/downloads/, add an entry below,
     raise the version and run node tools/build-sw.js. Upload the same PDF to the "downloads" bucket in Supabase. */
  downloads: [
    { id: 'feedback-tool', title: 'Peer & Teacher Feedback Tool', sub: 'Research Summary Presentations · Seminar Presentations',
      kind: 'Fillable PDF', pages: 2, size: '149 KB', tone: 'blue',
      file: 'dec10/downloads/DEC10-Peer-and-Teacher-Feedback-Tool.pdf',
      mirror: 'https://bogagtbkiavnhuohzqzb.supabase.co/storage/v1/object/public/downloads/DEC10-Peer-and-Teacher-Feedback-Tool.pdf',
      thumbs: ['dec10/assets/downloads/feedback-tool-p1.jpg', 'dec10/assets/downloads/feedback-tool-p2.jpg'],
      what: 'Rate a classmate’s presentation on 20 statements (content, pronunciation, language, questions and answers), then write one specific action for each part.',
      when: ['Research Summary group presentations (Weeks 2–3 and Week 6)', 'Seminar presentations and Opening Remarks (Weeks 2–7)', 'Your own feedback action plan'],
      how: ['Download the form.', 'Open it in <b>Adobe Acrobat Reader</b> (free) or <b>Preview</b> on a Mac — a web browser may not save what you type.', 'Tick one circle for each statement. Then write your actions on page 2.', '<b>Save</b> the file with the presenter’s name, e.g. <i>Feedback – Group 2 – Anna.pdf</i>.', 'Send it to the presenter, or keep it in your feedback folder.'] },
    { id: 'ip-questions', title: 'Follow-up Questions', sub: 'Interactive Presentation · question types and examples',
      kind: 'Printable PDF', pages: 1, size: '39 KB', tone: 'teal', action: 'Download the sheet', howTitle: 'How to use it',
      file: 'dec10/downloads/DEC10-Interactive-Presentation-Follow-up-Questions.pdf',
      mirror: 'https://bogagtbkiavnhuohzqzb.supabase.co/storage/v1/object/public/downloads/DEC10-Interactive-Presentation-Follow-up-Questions.pdf',
      thumbs: ['dec10/assets/downloads/ip-questions-p1.jpg'],
      what: 'All the follow-up questions on one page: clarification and probing questions about the presenter’s content, and questions on the six Academic Success Toolkit skills about how they prepared.',
      when: ['Asking effective individual questions (Week 2, 11A)', 'Research Summary group presentations: ask and answer questions', 'Preparing for the Interactive Presentation (Week 7): practise answering them'],
      how: ['Download the sheet, or print it.', 'Keep it open during presentations.', 'Listen carefully. Start with a <b>clarification</b> question, then <b>probe</b> deeper.', 'Before your own Interactive Presentation, practise answering one question from each box.'] }
  ],
  /* PHOTOCOPIABLES (teacher only · side panel → Photocopiables, #/print, and a card on the activity in Teacher view).
     Paper versions of class activities so students stand up and work together away from their laptops.
     ADD ONE: write tools/print/src/weekN/wNdM-<name>.html (A4 pages, shared tools/print/print.css), run
       node tools/print/build.js  → dec10/print/weekN/<id>.pdf + <id>.jpg (+ the day pack), then add an entry below.
     lesson + activity = where the card appears; per = student | pair | group (groupSize) | class | teacher; extra = spare copies;
     pages + duplex = how many sheets; prep = what to do before class; noPrinter = how the activity runs on screen instead
     (every printable must also work on screen — a broken printer never stops the lesson).
     The PDFs are not secret (the site is public); they are just not shown to students. */
  printPacks: {
    d10w3d1: 'dec10/print/week3/pack-d10w3d1.pdf'
  },
  printables: [
    { id: 'w3d1-bingo', week: 3, lesson: 'd10w3d1', section: 'rapport', activity: 'r1', code: '1A', kind: 'Class mingle', minutes: 10,
      title: 'Find someone who … the future of work', per: 'student', extra: 2, pages: 2, duplex: true,
      file: 'dec10/print/week3/w3d1-bingo.pdf', thumb: 'dec10/print/week3/w3d1-bingo.jpg',
      use: 'A 16-square bingo grid with a line for a name and a follow-up in every square; useful phrases on the back.',
      prep: ['Print double-sided (flip on long edge).', 'Bring clipboards or books to lean on — students write standing up.'],
      noPrinter: 'Students play the same bingo on screen in this activity (the bingo block saves their names). They still stand up and walk with their laptops or phones.' }
  ],
  /* LANGUAGE LAB (side panel → Language Lab, #/lab): short self-study lessons outside the weekly plan, to fill gaps.
     Built for self-study (a teacher can also use one in class). Every lesson is ONE page with four tabs:
       Warm-up (a short self-check) · Learn · Practise (controlled) · Use it (freer practice). The Lab page shows the strands
       in this order as fold-out lists.
     ADD A LAB LESSON IN 3 STEPS
     1. Copy dec10/lessons/lab/_template.js to dec10/lessons/lab/<strand>/<name>.js and write the content.
     2. Add an entry to the strand's lessons below: { id, status: 'ready', title, sub, minutes, level, scripts: [path] }.
        Lesson ids start with "d10lab-" and never change after students start (they are the key of saved work).
     3. Raise the version (index.html + js/config.js) and run  node tools/build-sw.js .
     A new strand (e.g. Pronunciation) is one more object in strands. A strand with no ready lessons shows "Coming soon". */
  lab: {
    title: 'Language Lab',
    intro: 'Short self-study lessons to fill the gaps. Open a topic, then choose a lesson. Each lesson has four steps: Warm-up, Learn, Practise, Use it.',
    strands: [
      { id: 'apa', title: 'Referencing · APA 7', short: 'APA', tone: 'clay', icon: 'quote', blurb: 'Show where your ideas come from, the way your university expects.', lessons: [
        { id: 'd10lab-cite', status: 'ready', title: 'In-text citations', sub: 'Integral or non-integral? One, two or three authors?', minutes: 55, level: 'All', scripts: ['dec10/lessons/lab/apa/cite.js'] },
        { id: 'd10lab-verbs', status: 'ready', title: 'Reporting verbs', sub: 'states, argues, claims, found … and what each one says', minutes: 50, level: 'B2', scripts: ['dec10/lessons/lab/apa/verbs.js'] }
      ] },
      { id: 'grammar', title: 'Grammar', short: 'Grammar', tone: 'teal', icon: 'grammar', blurb: 'Accurate sentences for your writing and your seminars.', lessons: [
        { id: 'd10lab-sva', status: 'ready', title: 'Is or are? Subject–verb agreement', sub: 'Find the real subject, then choose the verb', minutes: 60, level: 'B1+', scripts: ['dec10/lessons/lab/grammar/sva.js'] },
        { id: 'd10lab-preps', status: 'ready', title: 'Words that travel together', sub: 'Dependent prepositions: aware of, rely on, solution to', minutes: 50, level: 'B1+', scripts: ['dec10/lessons/lab/grammar/preps.js'] },
        { id: 'd10lab-link', status: 'ready', title: 'Linking ideas', sub: 'And, but, so … However, Therefore, In addition', minutes: 55, level: 'B1+', scripts: ['dec10/lessons/lab/grammar/link.js'] },
        { id: 'd10lab-rel', status: 'ready', title: 'Relative clauses', sub: 'who, which, whose, where — and no extra pronoun', minutes: 60, level: 'B2', scripts: ['dec10/lessons/lab/grammar/rel.js'] },
        { id: 'd10lab-runon', status: 'ready', title: 'Run-ons and comma splices', sub: 'Five ways to join or split two sentences', minutes: 55, level: 'B1+', scripts: ['dec10/lessons/lab/grammar/runon.js'] }
      ] },
      { id: 'vocab', title: 'Vocabulary', short: 'Vocabulary', tone: 'plum', icon: 'words', blurb: 'Academic words and collocations for each week’s topic.', soon: 'Word families, collocations and academic words for each week’s topic are on the way.', lessons: [] }
    ]
  },
  // The ten weeks shown on the course map (home page). Change label (short!) and sub when the course outline is final.
  map: [
    { n: 1, label: 'Foundation', sub: 'Sustainability frameworks' },
    { n: 2, label: 'Digital footprint', sub: 'Our digital carbon footprint' },
    { n: 3, label: 'Future work', sub: 'The workforce of the future' },
    { n: 4, label: 'Eco-tourism', sub: 'Practice writing assessment' },
    { n: 5, label: 'Globalisation', sub: 'LRW Assessment 1' },
    { n: 6, label: 'Green chemistry', sub: 'Final seminar' },
    { n: 7, label: 'Fashion', sub: 'Interactive Presentation' },
    { n: 8, label: 'Circular economy', sub: 'Integrated writing' },
    { n: 9, label: 'Frameworks', sub: 'LRW Assessment 2' },
    { n: 10, label: 'Consolidation', sub: 'Interactive Discussion' }
  ],
  weeks: [
    {
      n: 1, theme: 'Foundation: sustainability frameworks',
      summary: 'Three sustainability frameworks — the triple bottom line, IPAT and the DTM — with note-taking, paraphrasing, summarising and the Academic Success Toolkit.',
      image: 'dec10/assets/week1/hero-d10w1d1.svg',
      imageAlt: 'Illustration: profit, people and planet as three overlapping circles on a tablet, with outline notes in a notebook.',
      days: [
        { id: 'd10w1d1', day: 1, status: 'ready', title: 'Listen, note, think', art: 'listening',
          parts: ['1A Orientation', '2A Building rapport', '3A Listening and note-taking', '4A Reading and note-taking homework', '5A Listening assessment preparation homework'],
          stages: ['orientation', 'rapport', 'listening', 'reading', 'testlab'], tones: ['blue', 'clay', 'teal', 'amber', 'plum'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d1.js'] },
        { id: 'd10w1d2', day: 2, status: 'ready', title: 'Solve it, plan it, argue it', art: 'discussion',
          parts: ['6A Reading and listening to speak', '7A Introduction to Seminar and Interactive Presentation', '8A Academic writing skills: Introduction to rhetorical functions', '9A AST: Digital literacy and online tools homework'],
          stages: ['frameworks', 'seminar', 'functions', 'digital'], tones: ['teal', 'clay', 'plum', 'blue'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d2.js'] },
        { id: 'd10w1d3', day: 3, status: 'ready', title: 'Your words, your skills, your feedback', art: 'feedback',
          parts: ['10A Academic writing skills: Paraphrasing', '11A Introducing the AST framework', '12A AST: Introduction to Feedback Literacy', '13A AST: AI use in DEC homework'],
          stages: ['paraphrase', 'ast', 'feedback', 'ai'], tones: ['clay', 'green', 'teal', 'amber'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d3.js'] },
        { id: 'd10w1d4', day: 4, status: 'ready', title: 'Voices, video and research', art: 'research',
          parts: ['14A Academic writing skills: rhetorical functions', '15A Responding-to-feedback video', '16A Seminar: opening remarks check-in', '17A AST: Research skills'],
          stages: ['voices', 'video', 'checkin', 'research'], tones: ['plum', 'teal', 'clay', 'green'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d4.js'] },
        { id: 'd10w1d5', day: 5, status: 'ready', title: 'Diagnostic and summarising', art: 'writing',
          parts: ['18A Diagnostic assessment', '19A Academic writing skills: Summarising', '20A AST: Homework follow-up: AI use in DEC'],
          stages: ['diagnostic', 'summary', 'aitalk'], tones: ['blue', 'amber', 'teal'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d5.js'] }
      ]
    },
    {
      n: 2, theme: 'Our digital footprint',
      summary: 'The hidden cost of the internet, data centres and AI: compare sources, give your first Research Summary presentation, and learn to question, give feedback and think critically.',
      image: 'dec10/assets/week2/hero-d10w2d1.svg',
      imageAlt: 'Illustration: a phone, a laptop and a game controller connected by glowing lines to a data centre and a cloud of carbon dioxide.',
      days: [
        { id: 'd10w2d1', day: 1, status: 'ready', title: 'Read it, solve it, research it', art: 'reading',
          parts: ['1A Reading to speak', '2A AST: Group work skills', '3A Introduction to research summary presentations', '4A Research summary preparation Homework'],
          stages: ['reading', 'groupwork', 'rsintro', 'rsprep'], tones: ['teal', 'clay', 'plum', 'amber'],
          scripts: ['dec10/lessons/week2/sources.js', 'dec10/lessons/week2/d10w2d1.js'] },
        { id: 'd10w2d2', day: 2, status: 'ready', title: 'Listen, compare, connect', art: 'listening',
          parts: ['5A Research summary presentations', '6A Listening to speak', '7A Mediation', '8A Presentation skills Homework'],
          stages: ['rsgroup', 'listening', 'mediation', 'presskills'], tones: ['plum', 'teal', 'blue', 'clay'],
          scripts: ['dec10/lessons/week2/sources.js', 'dec10/lessons/week2/d10w2d2.js'] },
        { id: 'd10w2d3', day: 3, status: 'ready', title: 'Present, check in, open', art: 'discussion',
          parts: ['10A Presentation skills', '23A STAR© moment', '12A AST: Introducing the presentation feedback tool', '17A Seminar Discussion Opening Remarks group 1', '14A AST: Self-regulation and monitoring Homework'],
          stages: ['present', 'star', 'fbtool', 'opening', 'selfreg'], tones: ['clay', 'amber', 'green', 'teal', 'amber'],
          scripts: ['dec10/lessons/week2/sources.js', 'dec10/lessons/week2/d10w2d3.js'] },
        { id: 'd10w2d4', day: 4, status: 'ready', title: 'Plan, ask, present', art: 'group',
          parts: ['18A AST: Self-regulation and monitoring Homework follow-up', '15A Presentation skills', '11A Asking effective individual questions', '20A Pronunciation for presentations: Chunking, Stress & Intonation', '13A Group research summary presentation groups 1 & 2', '9A Listening Assessment Preparation Homework'],
          stages: ['selfreg2', 'present2', 'questions', 'pron', 'rspres', 'testlab'], tones: ['green', 'clay', 'teal', 'clay', 'plum', 'amber'],
          scripts: ['dec10/lessons/week2/sources.js', 'dec10/lessons/week2/d10w2d4.js'] },
        { id: 'd10w2d5', day: 5, status: 'ready', title: 'Present, think, plan', art: 'critical',
          parts: ['16A Group research summary presentation groups 3, 4 & 5', '19A AST: Introduction to critical thinking', '21A AST: Feedback literacy - action plan (1)', '22A Interactive Presentation task: check in'],
          stages: ['rspres2', 'critical', 'action', 'ipcheck'], tones: ['plum', 'blue', 'teal', 'plum'],
          scripts: ['dec10/lessons/week2/sources.js', 'dec10/lessons/week2/d10w2d5.js'] }
      ]
    },
    {
      n: 3, theme: 'The workforce of the future',
      summary: 'Green jobs and green skills: read, listen and mediate across sources, give your group Research Summary presentations, take part in the Seminar, and learn academic style, citing, criticality and AI prompting.',
      image: 'dec10/assets/week3/hero-d10w3d1.svg',
      imageAlt: 'Illustration: workers walk across a golden skills bridge from an old smoky factory to a green city with wind turbines and solar roofs, while four students talk around a table.',
      days: [
        { id: 'd10w3d1', day: 1, status: 'ready', title: 'Green jobs, good teams', art: 'reading',
          parts: ['1A Building rapport', '2A Reading to speak', '3A AST: Group work skills: Supporting the group', '4A Research summary preparation Homework'],
          stages: ['rapport', 'reading', 'groupwork', 'rsprep'], tones: ['green', 'teal', 'clay', 'amber'],
          scripts: ['dec10/lessons/week3/sources.js', 'dec10/lessons/week3/d10w3d1.js'] },
        { id: 'd10w3d2', day: 2, status: 'ready', title: 'Green skills, real jobs', art: 'listening',
          parts: ['5A Research summary presentations', '6A Listening to speak', '7A Mediation', '8A AST: Digital literacy: Online communication Homework', '9A Listening Assessment Preparation Homework'],
          stages: ['rsgroup', 'listening', 'mediation', 'online', 'testlab'], tones: ['plum', 'teal', 'blue', 'green', 'amber'],
          scripts: ['dec10/lessons/week3/sources.js', 'dec10/lessons/week3/d10w3d2.js'] },
        { id: 'd10w3d3', day: 3, status: 'ready', title: 'Polish, present, prompt', art: 'writing',
          parts: ['10A Homework review AST: Digital literacy & online communication', '11A Academic writing skills: Academic style', '12A Seminar: Group 1 Seminar presentation; Opening remarks Group 2', '13A STAR© moment', '14A AST: Digital literacy and AI Homework'],
          stages: ['online', 'style', 'seminar', 'star', 'aihw'], tones: ['blue', 'clay', 'teal', 'amber', 'plum'],
          scripts: ['dec10/lessons/week3/sources.js', 'dec10/lessons/week3/d10w3d3.js'] },
        { id: 'd10w3d4', day: 4, status: 'ready', title: 'Present, question, think again', art: 'group',
          parts: ['15A Group research summary presentations #1–3', '16A STAR© moment', '19A Interactive Presentation Assessment: Check in', '22A AST: Criticality: Showing flexibility', '17A Citing sources Homework'],
          stages: ['rspres3', 'star', 'ipcheck', 'flex', 'citing'], tones: ['plum', 'amber', 'teal', 'blue', 'green'],
          scripts: ['dec10/lessons/week3/sources.js', 'dec10/lessons/week3/d10w3d4.js'] },
        { id: 'd10w3d5', day: 5, status: 'ready', title: 'Present, plan, discuss', art: 'discussion',
          parts: ['15A Group research summary presentations #4–5', '18A AST: Feedback literacy - Action plan (2)', '20A Introduction to Interactive Discussion Assessment', '21A Individual question practice', '23A Interactive Discussion: Discussion Skills (1)', '24A Listening & Reading Practice Assessment', '25A Introduction to the Integrated Writing Assessment (IWA) Homework'],
          stages: ['rspres2', 'action2', 'idintro', 'iqprac', 'discuss', 'lrtest', 'iwa'], tones: ['plum', 'teal', 'blue', 'clay', 'green', 'amber', 'teal'],
          scripts: ['dec10/lessons/week3/sources.js', 'dec10/lessons/week3/d10w3d5.js'] }
      ]
    },
    {
      n: 4, theme: 'Eco-tourism',
      summary: 'Can tourism be good for the planet? Read about eco-tourism and the SDGs, listen to a BBC podcast, explore “bluewashing”, write your Integrated Writing Practice Assessment, and learn nominalisation, citing and voice.',
      image: 'dec10/assets/week4/hero-d10w4d1.svg',
      imageAlt: 'Illustration: an eco-lodge on stilts in a rainforest valley beside a turquoise bay, with a whale shark, a sea turtle and hikers on a rope bridge.',
      days: [
        { id: 'd10w4d1', day: 1, status: 'ready', title: 'Unpack it, read it, listen for it', art: 'writing',
          parts: ['1A Integrated Writing workshop (1)', '2A Reading to write', '3A Listening to write: Lead-in', '4A Listening to write Homework'],
          stages: ['iww1', 'rtw', 'ltwlead', 'ltwhw'], tones: ['green', 'blue', 'teal', 'amber'],
          scripts: ['dec10/lessons/week4/sources.js', 'dec10/lessons/week4/d10w4d1.js'] },
        { id: 'd10w4d2', day: 2, status: 'ready', title: 'Listen, synthesise, write', art: 'listening',
          parts: ['5A Listening to write', '6A Mediation', '7A Integrated Writing Practice Assessment', '8A Integrated writing workshop Homework'],
          stages: ['listening', 'mediation', 'iwpa', 'workshop'], tones: ['teal', 'blue', 'amber', 'green'],
          scripts: ['dec10/lessons/week4/sources.js', 'dec10/lessons/week4/d10w4d2.js'] },
        { id: 'd10w4d3', day: 3, status: 'ready', title: 'Unpack it, say it strongly, present it', art: 'writing',
          parts: ['9A Integrated writing workshop (2)', '14A Seminar Presentation (Group 2) and Opening Remarks (Group 3)', '11A Integrated Writing workshop Homework'],
          stages: ['iww2', 'seminar', 'iwwhw'], tones: ['green', 'plum', 'amber'],
          scripts: ['dec10/lessons/week4/sources.js', 'dec10/lessons/week4/d10w4d3.js'] },
        { id: 'd10w4d4', day: 4, status: 'ready', title: 'Pack it, cite it, voice it', art: 'writing',
          parts: ['10A Nominalisation', '12A Citing sources & voice', '13A Integrated writing workshop (3)'],
          stages: ['nominal', 'citing', 'workshop3'], tones: ['plum', 'teal', 'blue'],
          scripts: ['dec10/lessons/week4/sources.js', 'dec10/lessons/week4/d10w4d4.js'] },
        { id: 'd10w4d5', day: 5, status: 'ready', title: 'Plan, prompt, negotiate', art: 'group',
          parts: ['15A AST: Group work skills', '16A AST: Digital literacy and AI: Using & refining prompts', '17A Interactive Discussion: Discussion and negotiation', '18A STAR© moment'],
          stages: ['groupwork', 'aiprompts', 'negotiate', 'star'], tones: ['green', 'blue', 'teal', 'amber'],
          scripts: ['dec10/lessons/week4/sources.js', 'dec10/lessons/week4/d10w4d5.js'] }
      ]
    },
    {
      n: 5, theme: 'Globalisation',
      summary: 'Is cultural globalisation harming culture? Read and listen about homogenisation and hybridisation, build your integrated essay step by step, negotiate in discussion, use AI for feedback, and sit the LRW Assessment.',
      image: 'dec10/assets/week5/hero-d10w5d1.svg',
      imageAlt: 'Illustration: a globe between grey identical shop fronts and a colourful street of mixed cultures, labelled homogenization and hybridization.',
      days: [
        { id: 'd10w5d1', day: 1, status: 'ready', title: 'Same world, mixed cultures', art: 'reading',
          parts: ['1A Reading to write', '2A Interactive Discussion individual questions', '3A Listening Assessment preparation homework'],
          stages: ['reading', 'idq', 'testlab'], tones: ['plum', 'teal', 'amber'],
          scripts: ['dec10/lessons/week5/sources.js', 'dec10/lessons/week5/d10w5d1.js'] },
        { id: 'd10w5d2', day: 2, status: 'ready', title: 'Hear the voices, weave the sources', art: 'listening',
          parts: ['4A Listening to write', '5A Mediation', '6A Integrated writing workshop (1): Prepare to write'],
          stages: ['listening', 'mediation', 'workshop'], tones: ['teal', 'blue', 'clay'],
          scripts: ['dec10/lessons/week5/sources.js', 'dec10/lessons/week5/d10w5d2.js'] },
        { id: 'd10w5d3', day: 3, status: 'ready', title: 'Use feedback, write together, discuss', art: 'writing',
          parts: ['7A Integrated Writing Practice Assessment feedback', '8A Integrated writing workshop (2)', '9A Seminar', '10A AST: Digital literacy and AI: Using AI for feedback homework'],
          stages: ['iwafb', 'workshop', 'seminar', 'aifb'], tones: ['green', 'plum', 'teal', 'blue'],
          scripts: ['dec10/lessons/week5/sources.js', 'dec10/lessons/week5/d10w5d3.js'] },
        { id: 'd10w5d4', day: 4, status: 'ready', title: 'Negotiate, check, rebuild', art: 'writing',
          parts: ['11A Interactive Discussion: Discussion and negotiation', '12A AST: Digital literacy and AI: Using AI for feedback', '13A Integrated writing workshop (3)'],
          stages: ['negotiate', 'aifeedback', 'workshop'], tones: ['teal', 'blue', 'plum'],
          scripts: ['dec10/lessons/week5/sources.js', 'dec10/lessons/week5/d10w5d4.js'] },
        { id: 'd10w5d5', day: 5, status: 'ready', title: 'Listening and Reading to Write Assessment', art: 'assessment',
          parts: ['14A Listening and Reading to Write Assessment'],
          stages: ['lrw'], tones: ['blue'],
          scripts: ['dec10/lessons/week5/sources.js', 'dec10/lessons/week5/d10w5d5.js'] }
      ]
    }
  ]
};
