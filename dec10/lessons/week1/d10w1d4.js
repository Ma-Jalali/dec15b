/* DEC10 · Week 1 Day 4 — rhetorical functions (support, previous research, evaluation, voices), the responding-to-feedback video,
   the Seminar opening-remarks check-in, and AST research skills.
   Teacher's Book lessons 14A, 15A, 16A, 17A. The Teacher's Book paragraphs, extracts, links and answer keys are kept;
   the activities around them are redesigned. Language banks are cut to the phrases students will really write.
   Keep the id 'd10w1d4' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: 'd10w1d4',
  week: 1, day: 4,
  title: 'Voices, video and research',
  duration: 'About 4 hours',
  question: 'Whose voice is in your paragraph — and can your reader trust it?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question',
  journey: 'Learn to support a claim, bring in other writers and judge them (without saying “I think”), plan your group’s Portfolio video, check in for next week’s Opening Remarks, and find sources that pass the CRAAP test.',
  image: 'dec10/assets/week1/hero-d10w1d4.svg',
  imageAlt: 'Illustration: a paragraph made of coloured speech bubbles for the writer and three authors, a video camera recording a group, and a magnifying glass over five CRAAP cards.',
  finish: { title: 'Day 5', text: 'Diagnostic and summarising' },
  goalShort: 'your integrated writing, your Seminar Portfolio and your research',

  sections: [
    /* ───────────────────────── 14A · Rhetorical functions ───────────────────────── */
    {
      id: 'voices', number: '01', code: '14A', minutes: 90,
      tone: 'plum', art: 'dec10/assets/week1/s-voices.svg',
      title: 'Academic writing skills: rhetorical functions',
      subtitle: 'Support it, source it, judge it',
      outcome: 'You can support a claim, use previous research, evaluate points of view and show your own voice — and you know the phrases that do each job.',
      activities: [
        {
          id: 'v1', short: 'Warm-up', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v1.svg',
          title: 'Phrase points',
          goal: 'Score points for every linking phrase you use.',
          blocks: [
            { type: 'cards', title: 'The phrases and their points', items: [
              { label: '1 point', text: 'So… · Because…' },
              { label: '2 points', text: 'Therefore… · This is significant because…' },
              { label: '3 points', text: 'It is important not to assume that… · … is needed.' }
            ] },
            { type: 'talk', title: 'Take turns: 1–2 minutes each. Your partner keeps your score.', prompts: [
              'How has your experience of life in Sydney been so far?',
              'Would you recommend Sydney to other international students? Why / why not?'
            ] },
            { type: 'fields', fields: [
              { id: 'v1-score', label: 'My score', rows: 1, placeholder: 'e.g. 9 points' },
              { id: 'v1-best', label: 'My best 3-point sentence', rows: 2, placeholder: 'It is important not to assume that …' }
            ] }
          ]
        },
        {
          id: 'v2', short: 'Revision', minutes: 10, grouping: 'Class → Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-v2.svg',
          title: 'Four functions you know — and four new ones',
          goal: 'Match the four DEC10 functions, then guess what four new ones do.',
          blocks: [
            { type: 'match', id: 'v2-m', title: 'Match each rhetorical function with its job and its language', hint: 'Tap a function, then its explanation.',
              left: ['Explaining cause and effect', 'Arguing and persuading', 'Evaluating', 'Problem-solving'],
              right: [
                'Discussing the reasons why something happened and the outcomes — “Therefore, …” · “Because …”',
                'Presenting evidence and reasoning to convince the reader — “The first thing to be considered is …” · “This approach will …”',
                'Making judgements about value, significance or quality — “This finding is significant …” · “This may not always be appropriate …”',
                'Identifying issues and proposing solutions — “One issue with X is …” · “One way to address this issue is …”'
              ] },
            { type: 'talk', title: 'Four more functions for your writing. What job do you think each one does?', prompts: [
              '<b>Providing support</b>',
              '<b>Using previous research</b>',
              '<b>Evaluating points of view</b>',
              '<b>Working with different voices</b>',
              'Not sure? Good — guess, then find out in the next 45 minutes.'
            ] }
          ]
        },
        {
          id: 'v3', short: 'Support', minutes: 8, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v3.svg',
          title: '1 · Providing support',
          goal: 'Make a claim stronger with details, examples and evidence.',
          blocks: [
            { type: 'quiz', id: 'v3-q', items: [
              { q: 'Which ONE is NOT a good way to support a claim in academic writing?', options: ['providing details', 'giving examples', 'giving a personal story', 'providing evidence'], answer: 'giving a personal story', why: 'A personal story is one person’s experience. Your reader needs details, examples and evidence from sources.' }
            ] },
            { type: 'sort', id: 'v3-sort', title: 'What is each sentence doing?', hint: 'The four sentences make one paragraph, in this order.', buckets: [
              { label: 'Claim', letter: 'C' }, { label: 'Details', letter: 'D' }, { label: 'Example', letter: 'Ex' }, { label: 'Evidence', letter: 'Ev' }
            ], items: [
              { text: 'Sydney is a popular destination for many international students.', answer: 0 },
              { text: 'There are many features of the city which make it a desirable place for young people to study and live.', answer: 1 },
              { text: 'For instance, it is quite safe, clean and has beautiful beaches and natural surroundings.', answer: 2, why: '“For instance” introduces the examples.' },
              { text: 'A recent survey of international students around the world found that Sydney was ranked within the top 5% of ideal locations to seek an education (Smith & Anderson, 2024).', answer: 3, why: '“A recent survey … found that” + a citation introduces the evidence.' }
            ] },
            { type: 'tip', text: 'Two phrase patterns do most of the work: <b>For instance, / such as</b> → an example. <b>[Author] (year) found that …</b> → evidence. Learn these two first.' }
          ]
        },
        {
          id: 'v4', short: 'Research', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v4.svg',
          title: '2 · Using previous research',
          goal: 'Present, compare and evaluate other writers.',
          blocks: [
            { type: 'match', id: 'v4-m', title: 'Match the function with the extract', hint: 'Read the extract, then decide what the writer is doing with the research.',
              left: [
                'A · Although Smith and Anderson’s (2024) research shows many positive aspects of life in Sydney, they have overlooked many common problems that international students may experience.',
                'B · While Smith and Anderson (2024) claim that Sydney is an ideal study location, Jones (2024) asserts that the high cost of living makes it difficult for international students to manage.',
                'C · Jones (2024) believes that to experience more authentic Australian life, international students should choose to study in a rural location.',
                'D · In a recent survey of international students around the world, Smith and Anderson (2024) found that Sydney was ranked within the top 5% of ideal locations to seek an education.'
              ],
              right: ['evaluating authors’ claims', 'comparing and contrasting different authors', 'presenting opinions', 'presenting research findings'] },
            { type: 'spot', id: 'v4-spot', label: 'Phrase spotter', title: 'Now find the language that does the job', hint: 'Tap the phrases that present, compare or evaluate research. Leave the content words alone. There are seven.', paras: [
              '[[*Although Smith and Anderson’s (2024) research shows]] many [[positive aspects]] of life in Sydney, [[*they have overlooked]] many common problems that [[international students]] may experience.',
              '[[*While Smith and Anderson (2024) claim that]] Sydney is an [[ideal study location]], [[*Jones (2024) asserts that]] the [[high cost of living]] makes it difficult for international students to manage.',
              '[[*Jones (2024) believes that]] to experience more [[authentic Australian life]], international students should choose to study in a rural location.',
              '[[*In a recent survey of]] international students around the world, [[*Smith and Anderson (2024) found that]] Sydney was ranked within the [[top 5%]] of ideal locations to seek an education.'
            ] }
          ]
        },
        {
          id: 'v5', short: 'Evaluate', minutes: 8, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v5.svg',
          title: '3 · Evaluating points of view',
          goal: 'Give the positive side, then the negative side.',
          blocks: [
            { type: 'sort', id: 'v5-sort', title: 'Point of view, positive or negative?', hint: 'These three parts make one paragraph, after “Sydney is a popular destination for international students.”', buckets: [
              { label: 'An author’s point of view', letter: 'POV' }, { label: 'Positive evaluation', letter: '+' }, { label: 'Negative evaluation', letter: '–' }
            ], items: [
              { text: 'Smith and Anderson (2024) assert that there are many positive aspects of life in Sydney, such as safety, a desirable climate and a variety of cultural activities.', answer: 0 },
              { text: 'While it is true that there are many reasons why Sydney is a desirable location to study,', answer: 1, why: '“While it is true that …” accepts part of the author’s view first.' },
              { text: 'the authors have overlooked many common problems that international students may experience.', answer: 2, why: '“have overlooked” = they missed something important. This is the writer’s criticism.' }
            ] },
            { type: 'model', title: 'The pattern', rows: [
              ['Point of view', '[Author] (year) assert(s) / argue(s) that …'],
              ['Positive', 'While it is true that … , / Although … ,'],
              ['Negative', '… the author(s) have overlooked … / … this approach has too many problems to be …']
            ], note: 'Positive first, then negative: the negative part is where YOUR argument is.' }
          ]
        },
        {
          id: 'v5x', short: 'Extension', minutes: 6, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v5x.svg',
          title: 'Extension · Try it on a different topic',
          goal: 'Find the same pattern in a paragraph about health.',
          blocks: [
            { type: 'sort', id: 'v5x-sort', title: 'Cameron (2006) and “going back in time”', hint: 'Five parts of one paragraph, in order.', buckets: [
              { label: 'Point of view', letter: 'POV' }, { label: 'Positive evaluation', letter: '+' }, { label: 'Negative evaluation', letter: '–' }
            ], items: [
              { text: 'Cameron (2006) maintains that we could probably become far healthier by the simple expedient of ‘going back in time’ in terms of some of our daily activity. We could use a bicycle, walk, or run rather than use a car, bus, or train.', answer: 0 },
              { text: 'Of course, we could all do more domestic tasks by hand rather than using electrically operated gadgets.', answer: 1, why: '“Of course” accepts the idea.' },
              { text: 'However, this approach has too many problems to be appealing.', answer: 2 },
              { text: 'After the luxury of labour-saving devices it is just too tedious to go back to the old ways.', answer: 2 },
              { text: 'Also, this is not the most efficient way to build up and maintain a reasonable level of physical fitness. We actually only need to plan three or four exercise sessions a week in order to become fit.', answer: 2 }
            ] }
          ]
        },
        {
          id: 'v6', short: 'Voices', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v6.svg',
          title: '4 · Working with different voices',
          goal: 'Show your opinion without “I think” — and let other voices support it.',
          blocks: [
            { type: 'model', title: 'Two extracts. Same idea.', rows: [
              ['Extract A', 'Sydney is a popular destination for international students. I think that it has many benefits for young people which make it easier for them to focus on their studies. I read an article that was written by Smith and Anderson in 2024 that said the same thing because Sydney’s safety and climate make it an ideal study location.'],
              ['Extract B', 'Sydney is a popular destination for international students. It has many benefits for young people which make it easier for them to focus on their studies. Smith and Anderson (2024) claim that Sydney’s safety and climate make it an ideal study location.']
            ] },
            { type: 'quiz', id: 'v6-q', items: [
              { q: 'Do the two extracts have the same meaning?', options: ['Yes', 'No'], answer: 'Yes' },
              { q: 'Which extract is more appropriate for academic writing?', options: ['Extract A', 'Extract B'], answer: 'Extract B', why: 'B shows the writer’s opinion without saying “I think”, avoids “I read an article that …”, and has a correct APA in-text citation: Smith and Anderson (2024).' }
            ] },
            { type: 'match', id: 'v6-m', title: 'Whose voice is it?', hint: 'Read the full paragraph below, then match each idea with its voice.',
              left: ['The high cost of living makes it difficult for international students.', 'Many students can’t find accommodation within their budget.', 'Sydney is safe and has a good climate.', 'Sydney has many benefits for students.'],
              right: ['Jones (2024) — “However, X asserts that …”', 'Thompson (2023) — “research from X found that …”', 'Smith and Anderson (2024) — “… claim that …”', 'The writer — “It has many benefits … which …”'] },
            { type: 'model', title: 'The paragraph', text: 'Sydney is a popular destination for international students. It has many benefits for young people which make it easier for them to focus on their studies without the urban stress that many other cities can cause. Smith and Anderson (2024) claim that Sydney’s safety and climate make it an ideal study location. However, Jones (2024) asserts that the high cost of living makes it difficult for international students to manage. For instance, research from Thompson (2023) found that many international students have difficulty finding accommodation within their budget.' }
          ]
        },
        {
          id: 'v7', short: 'Build it', minutes: 15, grouping: 'Pair → Class',
          art: 'dec10/assets/week1/v/v-d10w1d4-v7.svg',
          title: 'Revision · Build a paragraph with four voices',
          goal: 'Order the ideas, fill in the phrases, then find the writer’s voice.',
          blocks: [
            { type: 'order', id: 'v7-order', title: '1 · Put the ideas in a logical order', items: [
              'Sydney is a better city to live in than Melbourne.',
              'Examples of why Sydney is a good city to live in',
              'Evidence which shows that Sydney is better than Melbourne',
              'Negative evaluation of the evidence that Sydney is better than Melbourne',
              'Contrasting evidence that disagrees with the view that Sydney is better than Melbourne'
            ], ends: ['First', 'Last'], why: 'Claim → examples → evidence → negative evaluation → contrasting evidence.' },
            { type: 'cloze', id: 'v7-cl', title: '2 · Complete the paragraph', hint: 'Before you open a gap, say what phrase YOU would use there.', options: ['argues that', 'However', 'According to', 'these claims disregard', 'For instance', 'state that', 'In contrast', 'such as', 'and furthermore'],
              text: 'Many people believe that Sydney’s climate makes it a better city to live in than Melbourne. {{1}}, Sydney has got a comfortable subtropical climate and some of Australia’s most beautiful beaches, {{2}} Bondi Beach and Coogee. {{3}}, Smith and Anderson (2024) {{4}} Melbourne has an average of 140 rainy days a year, {{5}} Schwartz (2022) {{6}} Melbourne’s beaches are polluted and have poor conditions for surfers. {{7}}, {{8}} the benefits of a cooler climate and the fact that beaches are a low priority for many people. {{9}} Phelps (2023), Melbourne’s climate appeals to people who prefer cooler weather, and Melbourne provides more cultural activities as an alternative to beach life.',
              answers: ['For instance', 'such as', 'In contrast', 'state that', 'and furthermore', 'argues that', 'However', 'these claims disregard', 'According to'] },
            { type: 'sort', id: 'v7-sort', title: '3 · Whose voice is it?', hint: 'The six sentences of the paragraph, in order. Which ones are the WRITER’s own voice?', buckets: [
              { label: 'The writer’s voice', letter: 'W' }, { label: 'A source’s voice', letter: 'S' }
            ], items: [
              { text: 'Many people believe that Sydney’s climate makes it a better city to live in than Melbourne.', answer: 0 },
              { text: 'For instance, Sydney has got a comfortable subtropical climate and some of Australia’s most beautiful beaches, such as Bondi Beach and Coogee.', answer: 0, why: 'No citation: these are the writer’s examples.' },
              { text: 'In contrast, Smith and Anderson (2024) state that Melbourne has an average of 140 rainy days a year,', answer: 1 },
              { text: 'and furthermore Schwartz (2022) argues that Melbourne’s beaches are polluted and have poor conditions for surfers.', answer: 1 },
              { text: 'However, these claims disregard the benefits of a cooler climate and the fact that beaches are a low priority for many people.', answer: 0, why: 'The writer evaluates the sources: this is where the writer’s argument is.' },
              { text: 'According to Phelps (2023), Melbourne’s climate appeals to people who prefer cooler weather, and Melbourne provides more cultural activities as an alternative to beach life.', answer: 1 }
            ] },
            { type: 'language', title: 'The verbs you will actually use', groups: [
              { label: 'Neutral: just reporting', phrases: ['X (2024) found that …', 'X (2024) states that …', 'According to X (2024), …'] },
              { label: 'X takes a position', phrases: ['X (2024) argues that …', 'X (2024) claims that …', 'X (2024) asserts that …'] },
              { label: 'You judge it', phrases: ['While it is true that …, …', 'However, X (2024) has overlooked …', 'However, these claims disregard …'] }
            ] },
            { type: 'tip', text: '<b>claims</b> is not the same as <b>found</b>. “Smith (2024) claims that …” tells your reader you are not sure you agree. Choose the verb on purpose.' }
          ]
        },
        {
          id: 'v8', short: 'Reflect', minutes: 5, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-v8.svg',
          title: 'Reflection',
          goal: 'Be honest about the hard part.',
          blocks: [
            { type: 'scale', id: 'v8-scale', title: 'How do you feel?', statement: 'I feel comfortable evaluating academic sources and confident to give a negative evaluation.', ends: ['Not at all', 'Very confident'], mid: 'A little' },
            { type: 'talk', title: 'Discuss with your group', prompts: [
              'Why might it feel uncomfortable to criticise a published author?',
              'Which phrase from today makes a negative evaluation sound polite and academic?'
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 15A · Responding-to-feedback video ───────────────────────── */
    {
      id: 'video', number: '02', code: '15A', minutes: 60,
      tone: 'teal', art: 'dec10/assets/week1/s-video.svg',
      title: 'Responding-to-feedback video',
      subtitle: 'Your Seminar Portfolio, step by step',
      outcome: 'You understand the Portfolio and the responding-to-feedback video, and your group has started planning it.',
      activities: [
        {
          id: 'f1', short: 'Timeline', minutes: 8, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-f1.svg',
          title: 'Before, on the day, after: who does what?',
          goal: 'See how the Seminar and the Portfolio fit together.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/portfolio-flow.svg', size: 'wide', alt: 'The Seminar + Portfolio timeline. The week before: the seminar group gives Opening Remarks and submits Portfolio Submission 1; the rest of the class posts reactions and questions to the Discussion Board. The day of the seminar: the group delivers the seminar; the rest of the class takes part, then uploads peer feedback to the group’s Portfolio. After the seminar: the group submits Portfolio Submissions 2 and 3 — 3 is the video.', caption: 'Seminar + Portfolio: three stages.', credit: 'Full task description and rubric: Assessments (side panel) and Canvas.' },
            { type: 'sort', id: 'f1-sort', title: 'Presenting group or audience group?', hint: 'Every group does both jobs during the course: one week you present, the other weeks you are the audience.', buckets: [
              { label: 'Presenting (seminar) group', letter: 'P' }, { label: 'Audience (rest of the class)', letter: 'A' }
            ], items: [
              { text: 'Deliver a 5–7-minute opening remarks presentation.', answer: 0 },
              { text: 'Post reactions and follow-up questions to the Discussion Board.', answer: 1 },
              { text: 'Choose a focus for the seminar from the Discussion Board comments.', answer: 0 },
              { text: 'Upload feedback (video, audio or text) to the other group’s Portfolio.', answer: 1 },
              { text: 'Write a summary of, and reflection on, the teacher’s feedback (Submission 1).', answer: 0 },
              { text: 'Record a video response to the teacher’s and classmates’ feedback (Submission 3).', answer: 0 },
              { text: 'Submit an Additional Portfolio Submission: peer feedback.', answer: 1 }
            ] }
          ]
        },
        {
          id: 'f2', short: 'Portfolio', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-f2.svg',
          title: 'Six Portfolio submissions',
          goal: 'Know what goes in your Portfolio — and which one is marked.',
          blocks: [
            { type: 'tabs', title: 'Your six submissions', tabs: [
              { label: 'As the presenting group', blocks: [
                { type: 'cards', numbered: true, items: [
                  { label: 'After Opening Remarks', text: 'A written summary of, and reflection on, your teacher’s verbal feedback.' },
                  { label: 'After the Seminar', text: 'A written summary of, and reflection on, your teacher’s and peers’ feedback.' },
                  { label: 'The video · assessed', text: 'A video response to (and reflection on) your teacher’s and classmates’ feedback.' }
                ] }
              ] },
              { label: 'As an audience group', blocks: [
                { type: 'cards', numbered: true, items: [
                  { label: 'Peer feedback 1', text: 'Your group agrees on feedback and chooses a mode: audio, video or written text.' },
                  { label: 'Peer feedback 2', text: 'The same, for another group.' },
                  { label: 'Peer feedback 3', text: 'The same, for another group.' }
                ] }
              ] }
            ] },
            { type: 'checklist', id: 'f2-eff', title: 'Your peer feedback must be effective. Tick the ones you remember from yesterday.', meter: ['remembered', 'You are feedback literate!'], items: [
              'addresses the assessment criteria (rubric)', 'is specific, not general', 'is clear', 'is useful and actionable', 'is timely', 'advises how to improve (feed forward)', 'is sensitive and encouraging', 'is not a criticism', 'uses appropriate language'
            ] }
          ]
        },
        {
          id: 'f3', short: 'Video spec', minutes: 8, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-f3.svg',
          title: 'The video: rules you cannot break',
          goal: 'Catch the traps before your group records.',
          blocks: [
            { type: 'quiz', id: 'f3-q', title: 'True or false?', items: [
              { q: 'Each person in the group records and submits their own video.', options: ['True', 'False'], answer: 'False', why: 'ONE video per group, submitted by ONE person.' },
              { q: 'The video is about 8 minutes long.', options: ['True', 'False'], answer: 'True' },
              { q: 'Your best speaker can do most of the talking.', options: ['True', 'False'], answer: 'False', why: 'ALL group members must make equal contributions.' },
              { q: 'Group members can record their parts separately and join the clips.', options: ['True', 'False'], answer: 'False', why: 'ALL group members must appear together.' },
              { q: 'You can record in Zoom, on your own device or in Canvas Studio.', options: ['True', 'False'], answer: 'True', why: 'Your teacher will confirm the options for your class.' },
              { q: 'The video only needs to reflect on your feedback.', options: ['True', 'False'], answer: 'False', why: 'It must include BOTH a reflection on your feedback AND references to the Academic Success Toolkit (AST).' }
            ] },
            { type: 'steps', title: 'Before you record', items: [
              { who: 'group', text: 'Watch, listen to or read your <b>peers’ feedback</b>. Reflect on it and discuss it.' },
              { who: 'group', text: 'Reflect on your <b>teacher’s feedback</b> on your Opening Remarks and your Seminar. Discuss it.' },
              { who: 'group', text: 'Look at the <b>AST framework</b> and decide how you will answer the questions (next activity).' }
            ] }
          ]
        },
        {
          id: 'f4', short: 'AST parts', minutes: 18, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-f4.svg',
          title: 'Two parts, four minutes each',
          goal: 'Choose how you will do each part of your video.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/video-parts.svg', size: 'wide', alt: 'The 8-minute video in two parts. Part 1, 4 minutes: Feedback literacy — everyone must do this; you choose how, for example an interview, acting or a discussion. Part 2, 4 minutes: a panel discussion with all group members about ONE other skill — criticality, self-regulation and monitoring, group work skills, research skills, or digital literacy and AI.', caption: 'Your 8-minute video.' },
            { type: 'cards', pick: 'f4-format', title: 'Part 1 · Feedback literacy (must). How will your group do it?', items: [
              { label: 'Interview', text: 'One member interviews the others about the feedback.', icon: 'chat' },
              { label: 'Acting', text: 'Act out receiving the feedback and deciding what to do.', icon: 'model' },
              { label: 'Discussion', text: 'A natural group discussion of the feedback.', icon: 'list' }
            ] },
            { type: 'cards', pick: 'f4-skill', title: 'Part 2 · Panel discussion. Which ONE other skill?', items: [
              { label: 'Criticality', text: 'question, compare, decide' },
              { label: 'Self-regulation and monitoring', text: 'goals, time, progress' },
              { label: 'Group work skills', text: 'fair work, clear talk' },
              { label: 'Research skills', text: 'credible sources' },
              { label: 'Digital literacy and AI', text: 'use tools honestly' }
            ] },
            { type: 'key', title: 'The guiding questions', points: [
              'Your teacher will show you the PDF <b>AST guiding questions</b> (W1 D4 15B).',
              'For your Part 2 skill, answer at least ONE question from EACH category: <b>Appreciating feedback</b> · <b>Making judgements</b> · <b>Taking action</b>.',
              'In the panel, each member should also say which skill was <b>the most challenging</b> for them, and why.'
            ] }
          ]
        },
        {
          id: 'f5', short: 'Check', minutes: 12, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-f5.svg',
          title: 'Do you really understand the task?',
          goal: 'Answer the five questions every group should be able to answer.',
          blocks: [
            { type: 'quiz', id: 'f5-q', items: [
              { q: 'What is the overall purpose of the Seminar + Portfolio task?', options: ['To test your grammar in a formal presentation', 'To practise researching, preparing and delivering a presentation, and to give and receive feedback', 'To write a research report in a group'], answer: 'To practise researching, preparing and delivering a presentation, and to give and receive feedback' },
              { q: 'What are its three main components?', options: ['Reading · Writing · Speaking', 'Before the seminar · The seminar · After the seminar', 'Research · Slides · Questions'], answer: 'Before the seminar · The seminar · After the seminar', why: 'Before: Opening Remarks to preview the presentation. The seminar: the presentation. After: Portfolio submissions.' },
              { q: 'Who gives you feedback, and how?', options: ['Only the teacher, in writing', 'The teacher (verbal, in class) and your peers (video, audio or written, uploaded to your Portfolio)', 'Only your peers, on the Discussion Board'], answer: 'The teacher (verbal, in class) and your peers (video, audio or written, uploaded to your Portfolio)' },
              { q: 'Where do you find the feedback criteria?', options: ['In the marking rubric (Assessments page / Canvas)', 'Your teacher keeps them secret', 'In the Student Booklet reading section'], answer: 'In the marking rubric (Assessments page / Canvas)' }
            ] },
            { type: 'fields', fields: [
              { id: 'f5-plan', label: 'Our video plan so far: Part 1 format, Part 2 skill, who says what', rows: 3, placeholder: 'Part 1: interview — [Name] asks … Part 2: research skills — …' }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 16A · Seminar check-in ───────────────────────── */
    {
      id: 'checkin', number: '03', code: '16A', minutes: 15,
      tone: 'clay', art: 'dec10/assets/week1/s-checkin.svg',
      title: 'Seminar: opening remarks check-in',
      subtitle: 'Group 1 goes first — is everyone ready?',
      outcome: 'You know what happens at next week’s Opening Remarks, and Group 1 has a clear checklist.',
      activities: [
        {
          id: 'c1', short: 'Next week', minutes: 5, grouping: 'Class',
          art: 'dec10/assets/week1/v/v-d10w1d4-c1.svg',
          title: 'Next week: Group 1’s Opening Remarks',
          goal: 'Know what Group 1 presents — and what everyone else does.',
          blocks: [
            { type: 'model', title: 'Group 1’s question', text: 'What is the impact of the digital carbon footprint on overall carbon emissions in [your chosen country], and what strategies can be deployed to reduce it?' },
            { type: 'sort', id: 'c1-sort', title: 'Group 1 or the rest of the class?', buckets: [
              { label: 'Group 1', letter: 'G1' }, { label: 'The rest of the class', letter: 'All' }
            ], items: [
              { text: 'Give a 5–7-minute presentation with PowerPoint slides.', answer: 0 },
              { text: 'Introduce the country and say why you chose it.', answer: 0 },
              { text: 'Explain the causes and effects of the sustainability problem.', answer: 0 },
              { text: 'Take notes on the teacher’s feedback and ask about anything unclear.', answer: 0 },
              { text: 'Discuss your reactions to the presentation content with your seminar group.', answer: 1 },
              { text: 'Prepare one or two questions about gaps in your knowledge.', answer: 1 },
              { text: 'Post ONE group post with reactions and questions to the Discussion Board — in class.', answer: 1 }
            ] },
            { type: 'tip', text: 'Opening Remarks are about the <b>problem</b> only: causes and effects. Solutions come later, in the Seminar.' }
          ]
        },
        {
          id: 'c2', short: 'Checklist', minutes: 5, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-c2.svg',
          title: 'Group 1’s checklist',
          goal: 'Group 1: tick it off before next week.',
          blocks: [
            { type: 'checklist', id: 'c2-g1', title: 'Group 1 — before next week', meter: ['done', 'Ready to present!'], items: [
              'We have researched our topic in our chosen country.',
              'We have met to prepare the 5–7-minute presentation.',
              'The workload is evenly shared.',
              'Our PowerPoint is finished and ready to share (we know how our teacher wants it: email, link or USB).'
            ] },
            { type: 'key', title: 'Not in Group 1?', points: [
              'Nothing to prepare — just come ready to listen and respond.',
              'After the Opening Remarks, Group 1 uses your Discussion Board posts to plan two thought-provoking questions for their Seminar (Week 3).',
              'You will make one Additional Portfolio Submission: peer feedback 1.'
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 17A · AST: Research skills ───────────────────────── */
    {
      id: 'research', number: '04', code: '17A', minutes: 60,
      tone: 'green', art: 'dec10/assets/week1/s-research.svg',
      title: 'AST: Research skills',
      subtitle: 'Find it, test it, trust it',
      outcome: 'You can apply the CRAAP test, search with AND / OR / “…”, and find a reliable source through the University of Sydney Library.',
      activities: [
        {
          id: 'x1', short: 'Lead-in', minutes: 5, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x1.svg',
          title: 'What is research — really?',
          goal: 'Know where to look and what researching involves.',
          blocks: [
            { type: 'match', id: 'x1-m', title: 'Where would you find …?', left: ['cutting-edge research', 'background information', 'current news'], right: ['journal articles', 'books, textbooks and encyclopedias', 'newspapers and news websites'] },
            { type: 'sort', id: 'x1-sort', title: 'Is it part of good research?', buckets: [{ label: 'Good research', letter: '✓' }, { label: 'Not good research', letter: '✗' }], items: [
              { text: 'finding an answer to a question or solving a problem', answer: 0 },
              { text: 'searching for information', answer: 0 },
              { text: 'analysing and interpreting information', answer: 0 },
              { text: 'synthesising information', answer: 0 },
              { text: 'using information to support your argument', answer: 0 },
              { text: 'accepting the first web results', answer: 1 },
              { text: 'looking only for sources that agree with your thesis', answer: 1, why: 'Good research looks at other points of view too — you need them to evaluate (14A).' },
              { text: 'reading everything you can on the topic', answer: 1, why: 'Impossible, and not useful: you select what is relevant.' }
            ] }
          ]
        },
        {
          id: 'x2', short: '2-min hunt', minutes: 8, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x2.svg',
          title: 'The 2-minute source hunt',
          goal: 'Find something online — then ask how reliable it is.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Think of an example of environmental damage: e.g. the 2010 Deepwater Horizon oil spill, loss of polar ice due to global heating, or soil erosion in Australia or China.' },
            { type: 'do', n: 2, who: 'alone', text: 'You have <b>2 minutes</b>. Find one source online that looks useful.' },
            { type: 'fields', fields: [{ id: 'x2-src', label: 'My source (title + website)', rows: 1 }] },
            { type: 'do', n: 3, who: 'pair', text: 'Show your partner. How reliable is it? Do they agree?' },
            { type: 'fields', fields: [{ id: 'x2-rel', label: 'How reliable is it — and where could I find something more reliable?', rows: 2 }] }
          ],
          answers: { items: [['More reliable information', 'Recent research, or reports by governments and other respected organisations — found through the library databases.']] }
        },
        {
          id: 'x3', short: 'CRAAP', minutes: 12, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x3.svg',
          title: 'The CRAAP test',
          goal: 'Five questions that tell you if a source is good enough.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/craap.svg', size: 'wide', alt: 'The CRAAP test: five cards. Currency — when was it published? Relevance — is it on your topic, and at the right level? Authority — who wrote it, and are they an expert? Accuracy — are there references, methods and data? Purpose — is it to inform, or to sell an idea? Any bias?', caption: 'The CRAAP test.', credit: 'Source: University of Sydney Library. (n.d.). Evaluating search results.' },
            { type: 'flip', title: 'What do you ask?', hint: 'Say your question, then turn the card.', items: [
              { front: 'C · Currency', back: 'When was it published, updated or revised? Is it too old for this project?' },
              { front: 'R · Relevance', back: 'Is it on my topic? In-depth or a quick summary? Who is the audience? Basic or advanced?' },
              { front: 'A · Authority', back: 'Who wrote or published it? Is the author an expert? Can I check their credentials?' },
              { front: 'A · Accuracy', back: 'Is there a reference list? Are the methods and data explained? Can I check the claims elsewhere?' },
              { front: 'P · Purpose', back: 'Is it to inform, entertain, educate or sell? Any political, cultural, institutional or personal bias?' }
            ] },
            { type: 'listening', source: 'Portland University Library (2017)', title: 'The C.R.A.P. test in action', videoId: 'k6tEkQMBzxw', start: 0, clip: 'short video · 2:22', transcripts: [], mode: 'video' }
          ]
        },
        {
          id: 'x4', short: 'Judge', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x4.svg',
          title: 'CRAAP judge: five links',
          goal: 'Scan each page fast. Is it good enough for an academic assignment?',
          blocks: [
            { type: 'model', title: 'Open each link and scan for C, R, A, A, P', rows: [
              ['a', '<a href="https://www.eea.europa.eu/en/topics/in-depth/environmental-health-impacts" target="_blank" rel="noopener">Environmental health impacts · European Environment Agency</a>'],
              ['b', '<a href="https://www.theworldcounts.com/stories/environmental-degradation-facts" target="_blank" rel="noopener">Environmental Degradation Facts · theworldcounts.com</a>'],
              ['c', '<a href="https://www.geeksforgeeks.org/biology/causes-and-impact-of-environmental-degradation/" target="_blank" rel="noopener">Causes and Impact of Environmental Degradation · GeeksforGeeks</a>'],
              ['d', '<a href="https://www.sciencedirect.com/science/article/pii/S0277953602000552" target="_blank" rel="noopener">Causes and health consequences of environmental degradation and social injustice · ScienceDirect</a>'],
              ['e', '<a href="https://link.springer.com/article/10.1007/s11111-007-0048-3" target="_blank" rel="noopener">Human population as a dynamic factor in environmental degradation · Population and Environment (Springer)</a>']
            ], note: 'Spend about one minute on each page. You are scanning, not reading.' },
            { type: 'sort', id: 'x4-sort', title: 'Your verdict', buckets: [{ label: 'Use it', letter: '✓' }, { label: 'Don’t use it', letter: '✗' }], items: [
              { text: 'a · European Environment Agency', answer: 0, why: 'Authority: an official EU agency. Purpose: to inform.' },
              { text: 'b · theworldcounts.com', answer: 1, why: 'Authority and accuracy are hard to check: no clear expert author or full references.' },
              { text: 'c · GeeksforGeeks', answer: 1, why: 'A general study website for students — not an expert or academic source.' },
              { text: 'd · ScienceDirect journal article', answer: 0, why: 'Peer-reviewed research with references and methods.' },
              { text: 'e · Population and Environment (Springer)', answer: 0, why: 'A peer-reviewed academic journal.' }
            ] }
          ]
        },
        {
          id: 'x5', short: 'Keywords', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x5.svg',
          title: 'Search like a researcher',
          goal: 'Pick keywords, expand them, and combine them.',
          blocks: [
            { type: 'order', id: 'x5-order', title: 'Put the four search steps in order', items: ['Identify keywords', 'Expand your keywords', 'Run a search', 'Refine your search'], ends: ['First', 'Last'] },
            { type: 'spot', id: 'x5-spot', label: 'Keyword hunter', title: 'Step 1 · Find the three keywords', hint: 'Tap the three words or phrases you would type into a search.', paras: [
              '[[Explain]] the problem of [[*environmental degradation]]. [[Begin by defining]] environmental degradation. Identify and discuss [[*causes]] of the [[current situation]] of environmental degradation. Consider factors such as industrial activities, deforestation, and pollution. Explore one or two current or potential [[*consequences]] of environmental degradation and how it could impact ecosystems, human health, or the global climate.'
            ] },
            { type: 'model', title: 'Step 2 · Expand your keywords', rows: [
              ['environmental degradation', 'ecological damage'],
              ['causes', 'factors'],
              ['consequences', 'impacts']
            ] },
            { type: 'quiz', id: 'x5-q', title: 'Step 3 · Search operators', items: [
              { q: '“environmental degradation” AND causes — more results or fewer than “environmental degradation” alone?', options: ['More', 'Fewer'], answer: 'Fewer', why: 'AND connects keywords: every result must have both. It narrows the search.' },
              { q: 'consequences OR impacts — more results or fewer than consequences alone?', options: ['More', 'Fewer'], answer: 'More', why: 'OR includes synonyms: a result can have either word. It broadens the search.' },
              { q: 'Why put “environmental degradation” in quotation marks?', options: ['To find the exact phrase', 'To find only quotes from experts', 'To search in English only'], answer: 'To find the exact phrase' },
              { q: 'Too many results? Which do you do?', options: ['Add a keyword with AND', 'Add a synonym with OR'], answer: 'Add a keyword with AND' }
            ] },
            { type: 'fields', fields: [{ id: 'x5-string', label: 'Write your search', rows: 1, placeholder: '“environmental degradation” AND (causes OR factors)' }] }
          ]
        },
        {
          id: 'x6', short: 'Library', minutes: 15, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x6.svg',
          title: 'Find two real sources',
          goal: 'One from the Library home page, one from a database. Both must pass CRAAP.',
          blocks: [
            { type: 'tabs', title: 'Two places to search', tabs: [
              { label: '1 · Library home page', blocks: [
                { type: 'steps', items: [
                  { who: 'alone', text: 'Go to <a href="https://www.library.sydney.edu.au/" target="_blank" rel="noopener">library.sydney.edu.au</a>. Type your AND search with two or three terms.' },
                  { who: 'alone', text: 'Too few results? Use just two terms, or add synonyms with OR.' },
                  { who: 'alone', text: 'Refine in the left-hand panel: date, and <b>Language → English</b> (CET courses need English sources).' }
                ] }
              ] },
              { label: '2 · A database', blocks: [
                { type: 'steps', items: [
                  { who: 'alone', text: 'On the Library page, click <b>Browse</b> → <a href="https://www.library.sydney.edu.au/browse" target="_blank" rel="noopener">databases by subject</a>. Try Science, or Arts and Social Sciences.' },
                  { who: 'alone', text: 'Open <b>Web of Science</b> (or the database your teacher chooses). Run your search and refine the date.' },
                  { who: 'alone', text: 'Browse by title. Click “see more” to read an abstract. Try the “You may also like …” link for key articles.' }
                ] }
              ] }
            ] },
            { type: 'fields', fields: [
              { id: 'x6-s1', label: 'Source 1 (Library home page): author, year, title', rows: 2 },
              { id: 'x6-s2', label: 'Source 2 (database): author, year, title', rows: 2 }
            ] },
            { type: 'checklist', id: 'x6-craap', title: 'Does your source pass CRAAP?', meter: ['passed', 'Use it!'], items: [
              'Currency: it is recent enough for this topic.',
              'Relevance: it helps answer the question.',
              'Authority: I know who wrote it and why they are an expert.',
              'Accuracy: it has references and explains its data.',
              'Purpose: it informs — it is not selling anything.'
            ] },
            { type: 'tip', text: 'Your Seminar group needs sources like these for Opening Remarks. Start a shared list today — it saves hours next week.' }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['rhetorical function', 'the job a sentence or phrase does in a text, e.g. giving an example or evaluating', 'Evaluating points of view is a rhetorical function.'],
    ['evidence', 'facts or research findings that support a claim', 'A recent survey is strong evidence.'],
    ['overlook', 'to miss or not notice something important', 'The authors have overlooked the cost of living.'],
    ['disregard', 'to ignore', 'These claims disregard the benefits of a cooler climate.'],
    ['assert', 'to state firmly that something is true', 'Jones (2024) asserts that rent is too high.'],
    ['voice', 'whose idea a sentence expresses: yours or a source’s', 'Keep your own voice clear in every paragraph.'],
    ['credible', 'able to be trusted', 'A peer-reviewed journal is a credible source.'],
    ['search operator', 'a word or symbol that controls a search, e.g. AND, OR, “ ”', 'Use OR to add synonyms.']
  ]
};
