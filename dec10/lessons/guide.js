/* DEC10 · course guide — the data behind two side-panel pages (js/guide.js draws them):
     #/calendar     Course calendar = the Canvas Course Calendar + the course weekly map, one week at a time
     #/assessments  Assessments     = the Canvas "DEC 10 Assessments" page, in plain English
   Sources: Course Calendar (Canvas), "26.5b_27.1ab DEC 10 course weekly map – student version – FINAL – 14.10.2026",
   "Assessments: DEC 10 Semester 1 2027" (Canvas). Rooms are on Canvas — they change, so they are not copied here.
   Lessons sit on the weekday they are TAUGHT (the weekly map moves some lessons, e.g. a D5 lesson on a Wednesday).
   Lesson entries: [code, title]. A code like 'W1 D1' links to that lesson on this site when it is ready.
   Event types: assess · info (orientation & information sessions) · support (learning support class) · skills (Academic Skills workshop) · chat (Chat Club & social) · care (CET Counsellors workshop) */
window.DEC15_GUIDE = {
  contact: 'cet.decteam@sydney.edu.au',
  canvas: 'https://canvas.sydney.edu.au/courses/76269',
  terms: [
    ['First 5 weeks (term 26.5b)', 'Mon 26 Oct – Fri 27 Nov 2026'],
    ['Mid-course break', 'Mon 30 Nov – Fri 4 Dec'],
    ['Next 2 weeks (term 27.1a)', 'Mon 7 Dec – Fri 18 Dec'],
    ['Christmas – New Year break', 'Mon 21 Dec – Mon 4 Jan 2027'],
    ['Final 3 weeks (term 27.1b)', 'Tue 5 Jan – Fri 22 Jan 2027']
  ],
  resit: 'DEC10 finishes on Friday 22 January, but you may need to take a re-sit assessment the week after. Do not plan to leave Sydney that week.',
  eventTypes: {
    assess: ['Assessment', '#e64626'],
    info: ['Orientation & information', '#1a355e'],
    support: ['Learning support class', '#4f68b8'],
    skills: ['Academic Skills workshop', '#8a4f9e'],
    chat: ['Chat Club & social', '#2f9a63'],
    care: ['CET Counsellors workshop', '#d9902a']
  },
  shifts: { a: 'Afternoon-class students', m: 'Morning-class students' },
  weeks: [
    { n: 1, theme: 'Foundation', sub: 'Understanding current sustainability frameworks', start: '2026-10-26', dates: '26–30 Oct', days: [
      { class: [['W1 D1', 'Orientation'], ['W1 D1', 'Building rapport'], ['W1 D1', 'Listening and note-taking']],
        hw: [['W1 D1', 'Reading and note-taking'], ['W1 D1', 'Listening assessment preparation']],
        events: [{ type: 'info', title: 'Registration (new students only)', time: '7:30–8:00am', where: 'Belinda Hutchinson Building' },
          { type: 'info', title: 'Welcome orientation (new students only)', time: '8:00–9:00am', where: 'Belinda Hutchinson Building' },
          { type: 'info', title: 'DEC10 orientation (all DEC10 students)', time: 'from 9:00am', where: 'Belinda Hutchinson Building' }] },
      { class: [['W1 D2', 'Reading and listening to speak'], ['W1 D2', 'Introduction to the Seminar & Interactive Presentation'], ['W1 D2', 'Academic writing skills: introduction to rhetorical functions']],
        hw: [['W1 D2', 'AST: Digital literacy and online tools']] },
      { class: [['W1 D3', 'Academic writing skills: paraphrasing'], ['W1 D3', 'Introducing the AST'], ['W1 D3', 'AST: Introduction to feedback literacy']],
        hw: [['W1 D3', 'AST: AI use in DEC']],
        events: [{ type: 'chat', title: 'Campus tour', time: '1–2pm or 4:45–5:45pm', where: 'International Students Lounge, Wentworth Level 4', reg: true }] },
      { class: [['W1 D4', 'Academic writing skills: rhetorical functions'], ['W1 D4', 'Responding-to-feedback video'], ['W1 D4', 'Seminar: opening remarks check-in'], ['W1 D4', 'AST: Research skills']],
        events: [{ type: 'info', title: 'Workshop: Preparing for DEC10 assessments', must: true, times: [['a', '11:00am–12:00pm'], ['m', '1:00–2:00pm']] },
          { type: 'chat', title: 'Excursion: Sculpture by the Sea', time: 'Meet 4:45pm', where: 'International Students Lounge, Wentworth Level 4', reg: 'RSVP on Canvas' }] },
      { class: [['W1 D5', 'Diagnostic assessment: listening, reading and writing'], ['W1 D5', 'Academic writing skills: summarising'], ['W1 D5', 'AST: Homework follow-up: AI use in DEC']],
        events: [{ type: 'assess', title: 'Diagnostic assessment (listening, reading, writing)', note: 'Not part of your final score' },
          { type: 'chat', title: 'Chat Club: Dreams', time: '1–2pm or 4:45–5:45pm', where: 'International Students Lounge, Wentworth Level 4', reg: true }] }
    ] },
    { n: 2, theme: 'Our digital carbon footprint', sub: 'Exploring our digital carbon footprint', start: '2026-11-02', dates: '2–6 Nov', days: [
      { class: [['W2 D1', 'Reading to speak'], ['W2 D1', 'AST: Group work skills'], ['W2 D1', 'Introduction to research summary presentations']], hw: [['W2 D1', 'Research summary preparation']],
        events: [{ type: 'care', title: 'Study Skills workshop', time: '12:30–1:30pm', reg: true }] },
      { class: [['W2 D2', 'Research summary presentations'], ['W2 D2', 'Listening to speak'], ['W2 D2', 'Mediation']], hw: [['W2 D2', 'Presentation skills']],
        events: [{ type: 'care', title: 'Transition to Life in Australia', time: '12:30–1:30pm', reg: true }] },
      { class: [['W2 D3', 'Presentation skills'], ['W2 D5', 'STAR moment'], ['W2 D3', 'AST: Introducing the presentation feedback tool'], ['W2 D4', 'Seminar: Opening Remarks (Group 1)']], hw: [['W2 D3', 'AST: Self-regulation and monitoring']] },
      { class: [['W2 D4', 'AST: Self-regulation and monitoring (homework follow-up)'], ['W2 D4', 'Presentation skills'], ['W2 D3', 'Asking effective individual questions'], ['W2 D5', 'Pronunciation for presentations: chunking, stress & intonation'], ['W2 D3', 'Group research summary presentations (groups 1 & 2)']],
        hw: [['W2 D2', 'Listening assessment preparation']],
        events: [{ type: 'care', title: 'Transition to Life in Australia', time: '11am–12pm', reg: true }] },
      { class: [['W2 D4', 'Group research summary presentations (groups 3, 4 & 5)'], ['W2 D5', 'AST: Introduction to critical thinking'], ['W2 D5', 'AST: Feedback literacy – action plan (1)'], ['W2 D5', 'Interactive Presentation: check-in']],
        events: [{ type: 'skills', title: 'Academic Skills workshop: Summarising and paraphrasing', times: [['a', '10:30–11:30am'], ['m', '1:00–2:00pm']] }] }
    ] },
    { n: 3, theme: 'The workforce of the future', start: '2026-11-09', dates: '9–13 Nov', days: [
      { class: [['W3 D1', 'Building rapport'], ['W3 D1', 'Reading to speak'], ['W3 D1', 'AST: Group work skills – supporting the group']], hw: [['W3 D1', 'Research summary preparation']],
        events: [{ type: 'care', title: 'Alternative academic pathways', time: '12:30–1:30pm', reg: true }] },
      { class: [['W3 D2', 'Research summary presentations'], ['W3 D2', 'Listening to speak'], ['W3 D2', 'Mediation']], hw: [['W3 D2', 'AST: Digital literacy – online communication'], ['W3 D2', 'Listening assessment preparation']] },
      { class: [['W3 D3', 'AST: Digital literacy & online communication (homework review)'], ['W3 D3', 'Academic writing skills: academic style'], ['W3 D3', 'Seminar (Group 1) · Opening Remarks (Group 2)'], ['W3 D3', 'STAR moment']],
        hw: [['W3 D3', 'AST: Digital literacy and AI'], ['', 'Ongoing research: Seminar and Interactive Presentation']],
        events: [{ type: 'chat', title: 'Chat Club', reg: true }] },
      { class: [['W3 D4', 'Group research summary presentations 1–3 (peer & teacher feedback)'], ['W3 D4', 'STAR moment'], ['W3 D5', 'Interactive Presentation: check-in'], ['W3 D5', 'AST: Criticality']],
        hw: [['W3 D4', 'Citing sources'], ['', 'Ongoing research: Seminar and Interactive Presentation']],
        events: [{ type: 'care', title: 'Alternative academic pathways', time: '11am–12pm', reg: true }] },
      { class: [['W3 D4', 'Group research summary presentations 4–5 (peer & teacher feedback)'], ['W3 D5', 'AST: Feedback literacy – action plan (2)'], ['W3 D5', 'Introduction to the Interactive Discussion'], ['W3 D5', 'Individual question practice'], ['W3 D5', 'Interactive Discussion: discussion skills (1)']],
        hw: [['W3 D5', 'Listening & reading practice assessment'], ['W3 D5', 'Introduction to the Integrated Writing Assessment (IWA)']],
        events: [{ type: 'assess', title: 'Listening and reading practice assessments', note: 'Practice — not part of your final score' }] }
    ] },
    { n: 4, theme: 'Eco-tourism', start: '2026-11-16', dates: '16–20 Nov', days: [
      { class: [['W4 D1', 'Integrated writing workshop (1)'], ['W4 D1', 'Reading to write'], ['W4 D1', 'Listening to write: lead-in']], hw: [['W4 D1', 'Listening to write']],
        events: [{ type: 'support', title: 'Reading support workshop 1', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] },
          { type: 'care', title: 'Study Skills workshop', time: '12:30–1:30pm', reg: true }] },
      { class: [['W4 D2', 'Listening to write'], ['W4 D2', 'Mediation'], ['W4 D2', 'Integrated writing practice assessment']], hw: [['W4 D2', 'Integrated writing workshop']],
        events: [{ type: 'assess', title: 'Writing practice assessment', note: 'Practice — not part of your final score' },
          { type: 'support', title: 'Writing support workshop 1', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }] },
      { class: [['W4 D3', 'Integrated writing workshop (2)'], ['W4 D4', 'Seminar (Group 2) · Opening Remarks (Group 3)']], hw: [['W4 D3', 'Integrated writing workshop']],
        events: [{ type: 'support', title: 'Listening support workshop 1', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }] },
      { class: [['W4 D3', 'Nominalisation'], ['W4 D4', 'Citing sources & voice'], ['W4 D4', 'Integrated writing workshop (3)']],
        events: [{ type: 'support', title: 'Speaking support workshop 1', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }] },
      { class: [['W4 D5', 'AST: Group work skills'], ['W4 D5', 'AST: Digital literacy and AI – using & refining prompts'], ['W4 D5', 'Interactive Discussion: discussion and negotiation'], ['W4 D5', 'STAR moment']],
        events: [{ type: 'skills', title: 'Academic Skills workshop: Synthesising information', times: [['a', '10:30–11:30am'], ['m', '1:00–2:00pm']] }] }
    ] },
    { n: 5, theme: 'Cultural globalisation', start: '2026-11-23', dates: '23–27 Nov', days: [
      { class: [['W5 D1', 'Reading to write'], ['W5 D1', 'Interactive Discussion: individual questions practice']], hw: [['W5 D1', 'Listening assessment preparation']],
        events: [{ type: 'support', title: 'Reading support workshop 2', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }] },
      { class: [['W5 D2', 'Listening to write'], ['W5 D2', 'Mediation'], ['W5 D2', 'Integrated writing workshop (1): prepare to write']],
        events: [{ type: 'support', title: 'Writing support workshop 2', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }] },
      { class: [['W5 D3', 'Integrated writing practice assessment: feedback'], ['W5 D3', 'Integrated writing workshop (2)'], ['W5 D3', 'Seminar (Group 3) · Opening Remarks (Group 4)']],
        hw: [['W5 D3', 'AST: Digital literacy and AI – using AI for feedback']],
        events: [{ type: 'support', title: 'Listening support workshop 2', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }, { type: 'chat', title: 'Chat Club', reg: true }] },
      { class: [['W5 D4', 'Interactive Discussion: discussion and negotiation'], ['W5 D4', 'AST: Digital literacy and AI – using AI for feedback'], ['W5 D4', 'Integrated writing workshop (3)']],
        events: [{ type: 'support', title: 'Speaking support workshop 2', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }] },
      { class: [['W5 D5', 'Listening and Reading to Write (LRW) Assessment 1']],
        events: [{ type: 'assess', title: 'LRW Assessment 1: listening, reading and integrated writing', counts: true }] }
    ] },
    { brk: true, title: 'Mid-course break', start: '2026-11-30', end: '2026-12-04', dates: '30 Nov – 4 Dec', text: 'No classes this week. Enjoy yourself — and keep practising your English!',
      events: [{ type: 'care', title: 'Study Skills workshop (Monday)', time: '12:30–1:30pm', reg: true }] },
    { n: 6, theme: 'Green chemistry', start: '2026-12-07', dates: '7–11 Dec', days: [
      { class: [['W6 D1', 'Reading to speak'], ['W6 D1', 'Interactive Discussion: individual questions practice'], ['W6 D1', 'Listening to speak']], hw: [['W6 D1', 'Research summary preparation']],
        events: [{ type: 'support', title: 'Reading support workshop 3', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }] },
      { class: [['W6 D2', 'Research summary presentations'], ['W6 D2', 'Listening to speak'], ['W6 D2', 'Mediation']], hw: [['W6 D2', 'Listening assessment preparation']],
        events: [{ type: 'support', title: 'Writing support workshop 3', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }, { type: 'chat', title: 'Chat Club', reg: true }] },
      { class: [['W6 D5', 'Interactive Discussion: discussion skills (2)'], ['W6 D3', 'Seminar (Group 4)'], ['W6 D5', 'Feedback on the Week 5 integrated writing assessment'], ['W6 D3', 'Answering AST questions']],
        events: [{ type: 'support', title: 'Listening support workshop 3', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }, { type: 'chat', title: 'Chat Club', reg: true }] },
      { class: [['W6 D3', 'Group research summary presentations (groups 1, 2 & 3)'], ['W6 D4', 'Interactive Presentation assessment: check-in'], ['W6 D4', 'Interactive Presentation: sample video']],
        events: [{ type: 'support', title: 'Speaking support workshop 3', times: [['a', '10:15–11:30am'], ['m', '1:00–2:15pm']] }, { type: 'chat', title: 'Chat Club', reg: true }] },
      { class: [['W6 D4', 'Group research summary presentations (groups 4 & 5)'], ['W6 D4', 'AST: Feedback literacy – action plan (3)'], ['W6 D3', 'STAR moment'], ['W6 D5', 'Interactive Presentation: preparation & practice']],
        events: [{ type: 'skills', title: 'Academic Skills workshop: Presentations', times: [['a', '10:30–11:30am'], ['m', '1:00–2:00pm']] }] }
    ] },
    { n: 7, theme: 'Sustainable fashion', start: '2026-12-14', dates: '14–18 Dec', days: [
      { class: [['W7 D1', 'Reading to speak'], ['W7 D1', 'Interactive Discussion: individual questions practice'], ['W7 D1', 'Interactive Presentation: practice video set-up']] },
      { class: [['W7 D2', 'Listening to speak'], ['W7 D2', 'Mediation'], ['W7 D2', 'STAR moment']], hw: [['W7 D2', 'AST: Digital literacy & AI – critical engagement with AI-generated output']] },
      { class: [['W7 D3', 'AST: Critical engagement with AI-generated output (homework follow-up)'], ['W7 D3', 'Presentation skills: getting the audience’s attention'], ['W7 D3', 'Interactive Presentation practice videos: peer feedback, reflection and planning']],
        events: [{ type: 'chat', title: 'Chat Club', reg: true }] },
      { class: [['W7 D4', 'Interactive Presentation Assessment (day 1)']], events: [{ type: 'assess', title: 'Interactive Presentation Assessment — day 1', counts: true }] },
      { class: [['W7 D5', 'Interactive Presentation Assessment (day 2)']], events: [{ type: 'assess', title: 'Interactive Presentation Assessment — day 2', counts: true }] }
    ] },
    { brk: true, title: 'Christmas and New Year break', start: '2026-12-21', end: '2027-01-03', dates: '21 Dec – 4 Jan', text: 'No classes. Classes start again on Tuesday 5 January.' },
    { n: 8, theme: 'The circular economy', start: '2027-01-04', dates: '5–8 Jan', days: [
      { off: 'No classes on Monday' },
      { class: [['W8 D1', 'Reading to write'], ['W8 D1', 'Interactive Discussion: individual questions practice']] },
      { class: [['W8 D2', 'Listening to write'], ['W8 D2', 'Mediation'], ['W8 D2', 'Integrated writing workshop: homework set-up']] },
      { class: [['W8 D3', 'Integrated writing workshop (1)'], ['W8 D3', 'Clarity in writing']], hw: [['W8 D3', 'Integrated writing workshop']] },
      { class: [['W8 D4', 'Interactive Discussion: discussion and negotiation'], ['W8 D4', 'Interactive Discussion: discussion skills (3)'], ['W8 D4', 'Integrated writing workshop (2)']],
        events: [{ type: 'skills', title: 'Academic Skills workshop: Group discussions', times: [['a', '10:30–11:30am'], ['m', '1:00–2:00pm']] }] }
    ] },
    { n: 9, theme: 'Frameworks revisited', start: '2027-01-11', dates: '11–15 Jan', days: [
      { class: [['W8 D5', 'Interactive Discussion: practice preparation'], ['W8 D5', 'Interactive Discussion: sample video analysis']] },
      { class: [['W9 D1', 'Reading to write'], ['W9 D2', 'Listening to write']] },
      { class: [['W9 D2', 'Mediation'], ['W9 D2', 'Interactive Discussion: individual questions practice'], ['W9 D4', 'Interactive Discussion: discussion skills (4)'], ['W9 D4', 'AST: Digital literacy and AI'], ['W9 D2', 'Integrated writing workshop: homework set-up']] },
      { class: [['W9 D3', 'Integrated writing workshop (1)'], ['W9 D3', 'Integrated writing workshop (2)']] },
      { class: [['W9 D4', 'Listening and Reading to Write (LRW) Assessment 2']], events: [{ type: 'assess', title: 'LRW Assessment 2: listening, reading and integrated writing', counts: true }] }
    ] },
    { n: 10, theme: 'Consolidation', start: '2027-01-18', dates: '18–22 Jan', days: [
      { class: [['W10 D1', 'AST: Engaging critically with AI-generated output'], ['W10 D1', 'Unpacking assessment questions'], ['W10 D1', 'Interactive Discussion skills: consolidation']] },
      { class: [['W10 D2', 'Practice Interactive Discussion'], ['W10 D2', 'Using AST skills in university assignments'], ['W10 D2', 'STAR moment'], ['W10 D2', 'Student survey']],
        events: [{ type: 'assess', title: 'Interactive Discussion practice assessment', note: 'Practice — not part of your final score' }] },
      { class: [['W10 D3', 'Transition event'], ['W10 D3', 'Farewell event']], events: [{ type: 'chat', title: 'Faculty and CET farewell events' }] },
      { class: [['W10 D4', 'Interactive Discussion Assessment (day 1)']], events: [{ type: 'assess', title: 'Interactive Discussion Assessment — day 1', counts: true }] },
      { class: [['W10 D5', 'Interactive Discussion Assessment (day 2)']], events: [{ type: 'assess', title: 'Interactive Discussion Assessment — day 2', counts: true }] }
    ] }
  ],

  /* ───────── Assessments ───────── */
  weights: [
    { skill: 'Listening', total: 20, parts: [['Week 5 listening', 9], ['Week 9 listening', 11]], color: '#4f68b8' },
    { skill: 'Reading', total: 20, parts: [['Week 5 reading', 9], ['Week 9 reading', 11]], color: '#2f9a63' },
    { skill: 'Writing', total: 30, parts: [['Week 5 integrated writing', 13.5], ['Week 9 integrated writing', 16.5]], color: '#d9902a' },
    { skill: 'Speaking', total: 30, parts: [['Seminar + Portfolio', 3], ['Week 7 Interactive Presentation', 12], ['Week 10 Interactive Discussion', 15]], color: '#e64626' }
  ],
  timeline: [
    { week: 1, title: 'Diagnostic', kind: 'check', text: 'Listening, reading and writing — shows your starting point.' },
    { week: '2–6', title: 'Seminar + Portfolio', kind: 'real', text: 'Your group’s Opening Remarks, then your Seminar one week later.' },
    { week: 3, title: 'Practice: listening & reading', kind: 'practice', text: 'After class on Friday.' },
    { week: 4, title: 'Practice: integrated writing', kind: 'practice', text: 'In class on Tuesday.' },
    { week: 5, title: 'LRW Assessment 1', kind: 'real', text: 'Friday · listening + reading + writing.' },
    { week: 7, title: 'Interactive Presentation', kind: 'real', text: 'Thursday or Friday · 3 minutes + questions.' },
    { week: 9, title: 'LRW Assessment 2', kind: 'real', text: 'Friday · counts more than LRW 1.' },
    { week: 10, title: 'Interactive Discussion', kind: 'real', text: 'Practice on Tuesday · assessment on Thursday or Friday.' }
  ],
  links: {
    prepSlides: 'DEC 10 Assessment Preparation slides (Canvas)',
    lockdownInstall: 'https://canvas.sydney.edu.au/courses/76269/pages/installing-lockdown-browser',
    lockdownQuiz: 'https://canvas.sydney.edu.au/courses/76269/quizzes/348303',
    language: 'https://canvas.sydney.edu.au/courses/76269/pages/language-for-online-assessments',
    removeSoftware: 'https://canvas.sydney.edu.au/courses/76269/pages/removing-language-software-2',
    writingRubric: 'https://canvas.sydney.edu.au/courses/76269/files/51675520?wrap=1',
    videoRubric: 'https://canvas.sydney.edu.au/courses/76269/files/51675642?wrap=1',
    feedbackTool: 'https://canvas.sydney.edu.au/courses/76269/files/51675538?wrap=1',
    portfolioSchedule: 'https://canvas.sydney.edu.au/courses/76269/files/53312425?wrap=1',
    ipRubric: 'https://canvas.sydney.edu.au/courses/76269/files/53414645?wrap=1',
    ipSlides: 'https://canvas.sydney.edu.au/courses/76269/assignments/715003',
    idRubric: 'https://canvas.sydney.edu.au/courses/76269/files/51675517?wrap=1',
    assurance: 'https://canvas.sydney.edu.au/courses/76269/files/51675386?wrap=1',
    specialConsideration: 'https://www.sydney.edu.au/cet/enrol/cet/pages/special-consideration-dec10.html',
    disabilityForm: 'https://www.sydney.edu.au/cet/enrol/cet/pages/disability-and-inclusion-form.html',
    studentIT: 'https://www.sydney.edu.au/students/student-it.html',
    learningHubs: 'https://www.sydney.edu.au/students/study-spaces.html'
  },
  seminarGroups: [
    { g: 1, topic: 'Your digital carbon footprint', question: 'What is the impact of the digital carbon footprint on overall carbon emissions in [your chosen country], and what strategies can be deployed to reduce it?', opening: 2, seminar: 3,
      ipQuestion: 'What strategies can be employed in Australia to reduce the overall digital carbon footprint?', strategies: ['Energy-efficient data centres (optimisation, cooling techniques, etc.)', 'Renewable energy use by data centres and IT operations', 'Virtualisation and cloud computing', 'Efficient hardware and data management', 'E-waste reduction and recycling'] },
    { g: 2, topic: 'Green jobs', question: 'What strategies could be implemented in [your chosen country] to enhance a smooth transition to more green jobs?', opening: 3, seminar: 4,
      ipQuestion: 'What strategies could be implemented in Australia to enhance smooth transition to more green jobs?', strategies: ['Upskilling and reskilling initiatives', 'Private and public sector collaboration', 'Localised job creation in renewable energy hubs', 'Research and innovation funding', 'Green manufacturing hubs'] },
    { g: 3, topic: 'Eco-tourism', question: 'How can eco-tourism in [your chosen country] be managed to both support conservation and benefit local communities?', opening: 4, seminar: 5,
      ipQuestion: 'How can eco-tourism in Australia be managed to both support conservation and benefit local communities?', strategies: ['Indigenous-led eco-tourism', 'Protected area tourism', 'Sustainable tourism certification programs', 'Community-based tourism initiatives', 'Seasonal and controlled access tourism'] },
    { g: 4, topic: 'Cultural diversity', question: 'How is [your chosen country] encouraging, or how could [your chosen country] encourage cultural diversity?', opening: 5, seminar: 6,
      ipQuestion: 'How is Australia encouraging OR how could Australia encourage cultural diversity?', strategies: ['Indigenous cultural programs', 'Multicultural policy frameworks', 'National heritage listings and cultural preservation laws', 'Promotion of Australian content in media', 'Community leadership development'] }
  ]
};
