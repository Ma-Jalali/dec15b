/* DEC15 · Week 4, Day 4 — lesson content.
   Teacher’s Book: W4 D4 · 10A Research summary discussions (240).
   Texts: Gunders (2024) · Nicastro and Carillo (2021) · Berti et al. (2021) — lessons/week3/sources.js + lessons/week4/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
   v2 (A2–B1 friendly): 12 activities merged into 6 tabs; each Teacher’s Book heading is the title of the first block
   of its part ('Part 1 ·', 'Part 2 ·'). All field / form / table ids are unchanged.
   Sharing (send: true): peer-feedback form (d6f), teacher’s feedback table (d11t), optional self-evaluation (d10f).
   v3 (more functional, upper-intermediate): lead-in (scale + spinner) and upgraded discussion phrases with model,
   practice and a practice negotiation in the Warm-up; listener language in Step 4; 8 useful words in How it works;
   realistic questions on the sample negotiation (extras). New ids start with f3-. Assessment forms unchanged. */

window.DEC15_LESSON = {
  id: 'w4d4',
  week: 4, day: 4,
  title: 'Research Summary Discussion 2',
  duration: 'About 4 hours',
  question: 'Which is the most effective strategy for addressing the problem of food waste — food banks, upcycled food or mobile apps?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s negotiation question',
  wordTarget: '',
  image: 'assets/week4/hero-w4d4.svg',
  imageAlt: 'An inner circle of three chairs with speech bubbles above them, and an outer ring of observers holding clipboards — a fishbowl discussion.',
  journey: 'Today is your second Research Summary Discussion. First, you revise discussion phrases. Then you present your group’s research to a new group. Next, you discuss in a “fishbowl” while classmates watch and give feedback. Finally, you think about how it went and make a plan.',
  finish: { title: 'Friday', text: 'Feedback on your writing, an essay plan and AI literacy' },

  sections: [
    /* ───────────────────────── 10A Research summary discussions ───────────────────────── */
    {
      id: 'rsd', number: '01', code: '10A', minutes: 240,
      tone: 'clay', art: 'discussion',
      title: 'Research summary discussions',
      subtitle: 'Present your research, discuss, negotiate and reflect',
      outcome: 'Present your group’s research. Discuss and compare 3 options in a group. Then think about how you did and set goals.',
      activities: [
        {
          id: 'd1', short: 'Warm-up', minutes: 40, grouping: 'Pairs → whole class → research groups',
          title: 'Warmer: Revision of discussion skills and language + Preparation time',
          goal: 'Warm up, revise and upgrade your discussion phrases. Then get ready to present.',
          blocks: [
            { type: 'steps', title: 'Lead-in · Food waste and you (5 minutes)', items: [
              { who: 'alone', text: 'Move the slider: how ready do you feel today?' },
              { who: 'pair', text: 'Spin. Talk for one minute each. Then spin again.' },
              { who: 'class', text: 'Share one interesting answer from your partner.' }
            ]},
            { type: 'scale', id: 'f3-d1s', title: 'How ready are you?', statement: 'I feel ready for today’s discussion.', ends: ['Not ready yet', 'Completely ready'], mid: 'Getting there' },
            { type: 'spinner', id: 'f3-d1sp', title: 'Spin and talk', text: 'Answer with a reason and a real example.', reels: [
              { label: 'Talk about…', start: 'Spin!', items: [
                'The last time you threw food away. What was it, and why?',
                'Have you used an app like Too Good To Go, or bought “ugly” or upcycled food?',
                'Are there food banks where you live? Who uses them?',
                'Your first Research Summary Discussion (Week 2): one thing that went well.',
                'Your Week 2 Action plan: one thing you want to do better today.',
                'What is harder for you: starting to speak, disagreeing or changing your mind?'
              ]}
            ]},
            { type: 'tip', text: 'Today is your <b>2nd Research Summary Discussion</b>. Do the quiz in pairs and say each phrase aloud. Can you get 18 out of 18?' },
            { type: 'quiz', id: 'd1q', title: 'Part 1 · Warmer: Revision of discussion skills and language — choose the best answer', items: [
              { q: '1. Complete the sentence: In an academic discussion, you should…', options: ['…encourage others to speak', '…show interest', '…manage communication breakdowns', '…do all of these things'], answer: '…do all of these things', why: 'A good discussion needs all three: bring others in, show interest and fix misunderstandings.' },
              { q: '2. How can you fix a <b>communication breakdown</b> (= when people don’t understand each other)?', options: ['Ask for clarification', 'Agree', 'Show surprise', 'Move on to a new point'], answer: 'Ask for clarification', why: 'For example: “What do you mean?” or “I’m not sure I get your meaning.”' },
              { q: '3. Which phrase invites others to speak?', options: ['“Well, to put it another way…”', '“I’d like to ask (name) what he/she thinks.”', '“For instance, in the….”', '“I think it’s fair because…”'], answer: '“I’d like to ask (name) what he/she thinks.”', why: 'It brings a quiet groupmate into the discussion.' },
              { q: '4. Which phrase shows interest or surprise?', options: ['“Okay. Shall we move on?”', '“I’m not sure I get your meaning.”', '“Oh, I had no idea!”', '“I understand where you’re coming from, yet…”'], answer: '“Oh, I had no idea!”', why: 'It shows you are surprised by new information.' },
              { q: '5. Which phrase shows a negative reaction?', options: ['“That’s inspiring.”', '“That’s curious.”', '“That’s impressive.”', '“That’s alarming.”'], answer: '“That’s alarming.”', why: 'Alarming = worrying. The other words are positive or neutral.' },
              { q: '6. Which phrase helps with <b>turn-taking</b> (= speaking one after another)?', options: ['“Sorry, you go ahead.”', '“That’s true, but…”', '“I suppose so.”', '“Okay. I see what you’re saying.”'], answer: '“Sorry, you go ahead.”', why: 'Use it when two people start talking at the same time. You give the turn to the other person.' },
              { q: '7. Complete the sentence: In an academic discussion, you should…', options: ['…always agree to be polite.', '…show when you agree and disagree politely with justification.', '…always disagree to be strong.', '…neither agree nor disagree.'], answer: '…show when you agree and disagree politely with justification.', why: 'Agreeing and disagreeing are both fine. Be polite and give reasons.' },
              { q: '8. Which phrase agrees <b>strongly</b>?', options: ['“I understand where you’re coming from, yet…”', '“I guess you’re right.”', '“That’s exactly how I see it.”', '“Let me rephrase that.”'], answer: '“That’s exactly how I see it.”', why: '“I guess you’re right” agrees only a little. “…yet” starts a disagreement.' },
              { q: '9. Which phrase agrees <b>up to a point</b> (= only partly)?', options: ['“I understand where you’re coming from, yet…”', '“I guess you’re right.”', '“You have a point there.”', '“Let me rephrase that.”'], answer: '“You have a point there.”', why: 'You accept part of the other person’s argument, not all of it.' },
              { q: '10. Which phrase disagrees <b>politely</b>?', options: ['“Don’t the (environmental) issues worry you?”', '“I can say with great confidence that…”', '“We can’t deny that…”', '“I’m afraid we don’t see eye to eye there.”'], answer: '“I’m afraid we don’t see eye to eye there.”', why: '“I’m afraid” makes the disagreement softer. See eye to eye = agree.' },
              { q: '11. What’s wrong with just saying “I agree.”?', options: ['It’s difficult to pronounce.', 'It’s grammatically incorrect.', 'It needs more support (justification).', 'Nobody says this in Australia.'], answer: 'It needs more support (justification).', why: 'Say why you agree: “I agree, because in my research…”' },
              { q: '12. Why should you <b>justify</b> (= give reasons for) your opinion?', options: ['to make your argument clearer', 'to show you’ve done research', 'to make your argument stronger', 'all of these options'], answer: 'all of these options', why: 'Strong opinions need even stronger reasons.' },
              { q: '13. How can you justify your opinion?', options: ['Give real-life examples', 'Give examples from the research', 'Explain your reasons', 'all of these options'], answer: 'all of these options', why: 'Give reasons, plus examples from your research and from life.' },
              { q: '14. Which phrase justifies an opinion?', options: ['“I think it’s fair because…”', '“I agree.”', '“That’s a critical point.”', '“Are you saying that…?”'], answer: '“I think it’s fair because…”', why: '“because” introduces the reason.' },
              { q: '15. How can you evaluate different options?', options: ['Compare and contrast options', 'Prioritise options', 'Speculate about options’ consequences', 'All of these options'], answer: 'All of these options', why: 'Compare them, choose the most important, and think about what might happen.' },
              { q: '16. What does this phrase do? “This ties into what we were saying earlier about…”', options: ['Giving an opposing point', 'Encouraging others to agree', 'Referring back to an earlier comment', 'Showing flexibility'], answer: 'Referring back to an earlier comment', why: 'It builds on something someone said before.' },
              { q: '17. What does this phrase do? “I guess you’re right. Those issues can’t be ignored.”', options: ['Giving an opposing point', 'Encouraging others to agree', 'Referring back to an earlier comment', 'Showing flexibility'], answer: 'Showing flexibility', why: 'The speaker changes their mind after hearing a good argument.' },
              { q: '18. Why is showing <b>flexibility</b> (= being open to change) important?', options: ['To show that your opinion is right', 'To be polite in the discussion', 'To consider different perspectives and think critically', 'It’s not important'], answer: 'To consider different perspectives and think critically', why: 'In a negotiation, you listen to other views and can change your mind.' }
            ]},
            { type: 'teacher', ref: 'w4d4-t1' },
            { type: 'teacher', ref: 'w4d4-t2' },
            { type: 'language', title: 'Level up: 10 phrases for a stronger discussion today', groups: [
              { label: 'Explaining the quote', phrases: ['As I understand it, the quote suggests that…', 'This seems to imply that…, although it doesn’t say how.'] },
              { label: 'Using evidence', phrases: ['Our research on (Kenya) supports this. For example,…', 'This is backed up by (Berti et al., 2021), who found that…'] },
              { label: 'Building on and partly disagreeing', phrases: ['Building on what (Mai) said,…', 'I agree up to a point, but I’d question whether…'] },
              { label: 'Comparing and prioritising', phrases: ['Whereas (option A) helps in the short term, (option B) could…', 'If we had to prioritise one, I’d go for… because…'] },
              { label: 'Conceding and concluding', phrases: ['That’s a fair point. I hadn’t looked at it that way.', 'It seems we agree on…, but not on…'] }
            ]},
            { type: 'chat', title: 'Listen in: a practice negotiation (best way to cut food waste at home?)', lines: [
              ['Ana', '<mark>If we had to prioritise one, I’d go for</mark> shopping lists, <mark>because</mark> Gunders says shopping is where we commit to food.'],
              ['Ben', '<mark>I agree up to a point, but I’d question whether</mark> people really stick to a list. <mark>Whereas</mark> a list helps before you shop, freezing food <mark>could</mark> save what you already bought.'],
              ['Chen', '<mark>Building on what Ben said,</mark> lots of people throw food away because of the “best by” date. So learning labels matters too.'],
              ['Ana', '<mark>That’s a fair point. I hadn’t looked at it that way.</mark> <mark>It seems we agree on</mark> freezing, <mark>but not on</mark> what comes first.']
            ]},
            { type: 'sort', id: 'f3-d1srt', title: 'Practice: what does each new phrase do?', hint: 'These phrases are new. Match each one to its job.', buckets: [
              { label: 'Explain the quote' }, { label: 'Use evidence' }, { label: 'Partly disagree' }, { label: 'Prioritise' }, { label: 'Concede' }
            ], items: [
              { text: 'From what I can tell, the authors mean that…', answer: 0 },
              { text: 'In our region, the data showed that…', answer: 1 },
              { text: 'I see where you’re coming from, but…', answer: 2 },
              { text: 'On balance, (B) seems the most realistic option.', answer: 3 },
              { text: 'OK, you’ve convinced me.', answer: 4 },
              { text: 'One study from (Italy) found that…', answer: 1 },
              { text: 'That’s true in cities, but is it true in rural areas?', answer: 2, why: 'A polite question can be a way to partly disagree.' },
              { text: 'For me, the top priority has to be…', answer: 3 }
            ]},
            { type: 'steps', title: 'Use it: a 3-minute practice negotiation', items: [
              { who: 'group', text: 'Work in threes. Spin for a practice question and a challenge.' },
              { who: 'group', text: 'Discuss for 3 minutes. Try to choose one option.' },
              { who: 'group', text: 'Check the boxes below together. Then spin again if there is time.' }
            ]},
            { type: 'spinner', id: 'f3-d1rh', title: 'Practice question + challenge', text: 'These are practice questions, not today’s discussion questions.', reels: [
              { label: 'Question', start: 'Spin!', items: [
                'Best way to cut food waste at home: shopping lists, freezing food or learning labels?',
                'Who should do most about food waste: governments, supermarkets or consumers?',
                'Best way to cut waste in a university canteen: smaller portions, cheap leftovers at closing time or tracking waste?',
                'Best way to make people care: school lessons, social media campaigns or fees for throwing food away?'
              ]},
              { label: 'Everyone must use…', start: 'Spin!', items: ['a phrase to partly disagree', 'a phrase to prioritise', 'a phrase to build on an idea', 'a phrase to concede', 'evidence from a class text'] }
            ]},
            { type: 'checklist', id: 'f3-d1ck', title: 'Quick peer check', items: [
              'Everyone used at least 2 new phrases.',
              'Someone partly disagreed and gave a reason.',
              'We compared two options with “whereas” or “on the other hand”.',
              'We tried to prioritise one option at the end.'
            ]},
            { type: 'key', title: 'Part 2 · Preparation time: Steps 4 and 5', compare: [
              { label: 'Step 4', text: 'You join a <b>new group</b>. Each person researched a different region. You each talk for <b>5 minutes</b> about your region.' },
              { label: 'Step 5', text: 'A <b>15-minute discussion</b>. ① Respond to a <b>quote</b>. Use examples from your research. ② Choose the best of <b>three options</b>. You don’t have to agree.' }
            ]},
            { type: 'figure', src: 'assets/week4/rsd-steps.svg', alt: 'The five steps of the Research Summary Discussion: 1 find a source, 2 summarise your source to your group, 3 prepare a group presentation, 4 present to a new group, 5 discuss for 15 minutes.', caption: 'Today you do Steps 4 and 5', size: 'wide' },
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your research group. Get ready to present your <b>whole group’s</b> research.' },
              { who: 'alone', text: 'Check your <b>handwritten notes</b>. Soon you will move away from your group.' },
              { who: 'alone', text: 'Read your notes again. Remember the main points.' },
              { who: 'alone', text: 'You can also use ideas from the Week 3 and 4 texts.' }
            ]},
            { type: 'checklist', id: 'd2c', title: 'Ready?', meter: ['ready', 'Ready to present!'], items: [
              'My handwritten notes cover all three articles.',
              'I know the common themes and the best examples.',
              'I can present for about 5 minutes without reading a script.',
              'I have looked at my notes on the Week 3 and 4 texts.'
            ]},
            { type: 'sources', ids: ['nicastro', 'berti', 'aboutthat', 'gunders', 'castro', 'huang'] },
            { type: 'teacher', ref: 'w4d4-t3' }
          ]
        },
        {
          id: 'd3', short: 'Step 4', minutes: 25, grouping: 'New groups (3–4)',
          title: 'RSD Step 4: Summarise your group’s research',
          goal: 'Tell a new group about your group’s research — about 5 minutes each.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Move to your <b>new group</b>. Everyone researched a different region.' },
              { who: 'group', text: 'Take turns. Talk about your <b>whole group’s</b> research for about <b>5 minutes</b>.' },
              { who: 'group', text: 'Use your notes, but don’t read a script.' },
              { who: 'group', text: 'Listen and take short notes. Don’t discuss yet!' }
            ]},
            { type: 'model', title: 'A simple plan for your 5 minutes', rows: [
              ['1 · Start', 'The region that our group chose to research was…'],
              ['2 · Articles', 'In the article which I read, the authors state that… · My groupmate’s article points out that…'],
              ['3 · Together', 'All of our articles address… They highlight…'],
              ['4 · Finish', 'So, the biggest problem in (the UK) is…']
            ]},
            { type: 'language', title: 'Language for summarising a group’s research into a specific region', tabs: false, groups: [
              { label: 'Introducing your region', phrases: ['The region that our group chose to research was…', 'The main challenge we found in (the UK) was…'] },
              { label: 'Linking the three sources', phrases: ['In the article which I read, the authors state that…', 'This is supported by my groupmate’s article, which found that…', 'Whereas the first two articles focus on…, the third looks at…', 'Significantly, all 3 articles emphasise…'] },
              { label: 'Finishing clearly', phrases: ['What stood out most for us was…', 'Overall, the key point is that…'] },
              { label: 'Listeners: asking a follow-up question', phrases: ['Could you say a bit more about…?', 'So, if I understand correctly, …?'] }
            ]},
            { type: 'fields', title: 'My notes on the other regions', fields: [
              { id: 'd3-1', label: 'Regions, main points and useful examples I can use in the discussion', placeholder: 'Region: … · Main point: … · Example: …', rows: 5 }
            ]},
            { type: 'spinner', id: 'd3sp', title: 'Finished early? Ask a question', text: 'Spin. Ask the speaker the question about their region. Then swap.', reels: [
              { label: 'Ask about…', start: 'Spin!', items: ['the biggest problem', 'a surprising number', 'who is helping', 'what is working well', 'what is not working', 'one example'] }
            ]},
            { type: 'checklist', id: 'f3-d3ck', title: 'Listen for it: give each speaker a quick tick', items: [
              'The speaker linked at least two articles (e.g. “This is supported by…”, “Whereas…”).',
              'The speaker gave one clear example from their region.',
              'The speaker finished with the key point (e.g. “Overall, …”).',
              'I asked one follow-up question.'
            ]},
            { type: 'teacher', ref: 'w4d4-t4' }
          ]
        },
        {
          id: 'd4', short: 'How it works', minutes: 25, grouping: 'Whole class → alone',
          title: 'RSD Step 5: Discussion (Instructions) + Preparation time + Setting up the discussion order',
          goal: 'Know your role, your group and the rules for a good discussion.',
          blocks: [
            { type: 'cards', title: 'Part 1 · RSD Step 5: Discussion (Instructions) — three roles', items: [
              { label: 'Discussion group', icon: 'chat', text: '<b>5 min</b> read the question and your notes.<br><b>15 min</b> discuss.<br><b>5 min</b> self-evaluation (no Action plan yet).<br><b>1–2 min</b> notes on teacher feedback.' },
              { label: 'Peer-feedback group', icon: 'users', text: '<b>5 min</b> read the feedback form.<br><b>15 min</b> watch and write notes on the form.<br><b>5 min</b> finish your notes. Share ideas with the other observers.' },
              { label: 'Other groups', icon: 'book', text: 'Work on the Self-Study module.<br>Give and get peer feedback.<br>Then write your Action plan.' }
            ]},
            { type: 'figure', src: 'assets/week4/fishbowl.svg', alt: 'A fishbowl discussion: an inner discussion group sits in a circle; an outer peer-feedback group and the teacher sit around them and take notes. Timeline: 5 minutes preparation, 15 minutes discussion, 5 minutes self-evaluation, then the groups swap roles.', caption: 'The fishbowl: one group talks, one group watches, then you swap', size: 'wide' },
            { type: 'order', id: 'd4o', title: 'Quick challenge: put the discussion steps in order', ends: ['First', 'Last'], items: [
              'Preparation (5 min): read the question and your notes',
              'Discussion (15 min)',
              'Self-evaluation (5 min)',
              'Brief teacher feedback (1–2 min)',
              'Swap roles (2–3 min)',
              'Share peer feedback, then write your Action plan'
            ], why: 'Do your <b>self-evaluation first</b> — before you hear peer feedback. Write the Action plan last.' },
            { type: 'tip', text: 'Try to spend about half the time on each question. But a natural discussion is more important than exact timing. Keep talking for the full 15 minutes.' },
            { type: 'teacher', ref: 'w4d4-t5' },
            { type: 'steps', title: 'Part 2 · Preparation time (about 5 minutes)', items: [
              { who: 'alone', text: 'Read the question. Look at your notes.' },
              { who: 'alone', text: 'Find evidence from your group’s research and the class texts.' },
              { who: 'alone', text: 'Use <b>handwritten</b> notes only — no computer or tablet.' },
              { who: 'alone', text: 'Look at your notes, but don’t read them aloud.' }
            ]},
            { type: 'flip', title: '8 useful words for the discussion', hint: 'Tap a card. Say your own sentence with the word.', items: [
              { front: 'effective', back: 'Works well; gets the result you want.<br><i>Apps may be effective in cities, but less so in rural areas.</i>' },
              { front: 'address (a problem)', back: 'Deal with a problem; try to solve it.<br><i>Which strategy best addresses food waste?</i>' },
              { front: 'prevention', back: 'Stopping something before it happens.<br><i>Gunders says prevention should be the priority.</i>' },
              { front: 'surplus', back: 'Extra; more than is needed.<br><i>Supermarkets give surplus food to food banks.</i>' },
              { front: 'food security', back: 'When people always have enough safe, healthy food.<br><i>Less waste could improve food security.</i>' },
              { front: 'impact', back: 'A strong effect.<br><i>Food waste has a big environmental impact.</i>' },
              { front: 'scale up', back: 'Make something bigger so it reaches more people.<br><i>Good ideas need money to scale up.</i>' },
              { front: 'sustainable', back: 'Able to continue for a long time without harm.<br><i>Is a food bank a sustainable solution?</i>' }
            ]},
            { type: 'cloze', id: 'f3-d4cz', title: 'Quick check: choose the best word', list: true, text: 'Food banks give {{1}} food to people in need.\nGunders says {{2}} comes first: stop waste before it happens.\nToo Good To Go seems {{3}} in big cities, but maybe not in villages.\nNicastro and Carillo link less waste to better {{4}}.\nUpcycled food reduces the environmental {{5}} of waste.\nColdHubs needs more money to {{6}} across Africa.\nCan food banks run for many years? Are they {{7}}?\nWhich option best {{8}} the problem of food waste?', options: ['surplus', 'prevention', 'effective', 'food security', 'impact', 'scale up', 'sustainable', 'addresses'], answers: ['surplus', 'prevention', 'effective', 'food security', 'impact', 'scale up', 'sustainable', 'addresses'] },
            { type: 'sort', id: 'd5s', title: 'Discussion tips: do or don’t?', buckets: [
              { label: 'Do', text: 'good discussion habits' }, { label: 'Don’t', text: 'avoid these' }
            ], items: [
              { text: 'Make sure everyone is involved.', answer: 0 },
              { text: 'Use your laptop during the discussion.', answer: 1 },
              { text: 'Read aloud from your notes.', answer: 1 },
              { text: 'Listen and respond to your groupmates’ ideas.', answer: 0 },
              { text: 'Ask questions if you don’t understand.', answer: 0 },
              { text: 'Always agree, so everyone is happy.', answer: 1, why: 'You can agree, but it’s OK to disagree too.' },
              { text: 'Think about different perspectives.', answer: 0 },
              { text: 'Back up your ideas with your research.', answer: 0, why: 'You can also use the Week 3 and 4 texts or your own knowledge.' }
            ]},
            { type: 'fields', title: 'Part 3 · Running the discussions: Setting up the discussion order/feedback groups', fields: [
              { id: 'd8-1', label: 'My discussion group (names)', placeholder: 'Group 2: …', rows: 1, share: false },
              { id: 'd8-2', label: 'The group I observe and give feedback to', placeholder: 'Group 1: …', rows: 1, share: false },
              { id: 'd8-3', label: 'When is our discussion? When do we observe?', placeholder: 'We discuss at about … · We observe at about …', rows: 2, share: false }
            ]},
            { type: 'tip', text: 'Your teacher tells you the <b>discussion order</b> and the group you <b>watch</b>. You stay with your <b>new</b> group from Step 4. Write it in the boxes above.' },
            { type: 'teacher', ref: 'w4d4-t7' }
          ]
        },
        {
          id: 'd6', short: 'Peer feedback', minutes: 35, grouping: 'Feedback group → alone',
          title: 'Peer-feedback groups + Other Groups (not discussing or giving feedback)',
          goal: 'Watch another group, rate their discussion and give helpful feedback.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Peer-feedback groups', items: [
              { who: 'group', text: 'While the other group prepares, <b>read the questions</b> in the form below.' },
              { who: 'alone', text: 'Write the names of the classmates you are watching.' },
              { who: 'alone', text: 'While you watch, choose <b>Yes</b>, <b>Mostly</b> or <b>Needs work</b> for each question.' },
              { who: 'alone', text: 'Add a comment with an example.' },
              { who: 'group', text: 'Be <b>constructive</b> (= helpful): show them what they can improve.' },
              { who: 'group', text: 'After their self-evaluation, tell the group your feedback. Then send them the form.' }
            ]},
            { type: 'tip', text: 'Key words for the form: <b>fluency</b> (= speaking smoothly) · <b>spontaneous</b> (= natural, not reading notes) · <b>justify</b> (= give reasons) · <b>implications</b> (= possible results).' },
            { type: 'form', id: 'd6f', title: 'DEC 15 Week 4 Research Summary Discussion: Peer feedback form', intro: 'Choose Yes, Mostly or Needs work for each question. Then say why, with an example.', observe: 'Feedback group name(s) — who are you observing?', cols: ['Comments'], sections: [
              { label: 'General speaking skills', items: [
                'Did the speaker(s) have correct language use (grammar and vocabulary)?',
                'Did they have good fluency and clear pronunciation?',
                'Was the discussion spontaneous (without using notes too much)?'
              ]},
              { label: 'Participating in the discussion', items: [
                'Did the group’s discussion stay on track?',
                'Did they express their opinions clearly and justify them well?',
                'Did they build on the other groupmates’ ideas and disagree with them at times?',
                'Were they able to think about the topic from different perspectives and consider different people’s opinions?',
                'Did they compare and contrast the different options and evaluate their importance and implications?'
              ]}
            ], send: true, sendLabel: 'Share your feedback with the group you watched', sendHint: 'Choose the classmates you observed. Each of them gets a read-only copy in “Shared with me”. You can also download a PDF.' },
            { type: 'language', title: 'Sentence starters for giving feedback', tabs: false, groups: [
              { label: 'Strengths', phrases: ['The way you… made your point very clear.', '… was good; to make it even better, you might…', 'You’ve made a good point here, but maybe you could…'] },
              { label: 'Areas to improve', phrases: ['I noticed a few times where…', 'It might be helpful to…', 'Don’t forget to… / Remember to…'] }
            ]},
            { type: 'fields', title: 'Feedback I received', fields: [
              { id: 'd6-r', label: 'What did my observers say? (add these notes to your self-reflection later)', placeholder: 'Strength: … · To improve: …', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w4d4-t6' },
            { type: 'steps', title: 'Part 2 · Other Groups (not discussing or giving feedback)', items: [
              { who: 'group', text: 'Waiting for your discussion? Do one more <b>practice negotiation</b> (Warm-up tab) quietly.' },
              { who: 'alone', text: 'Not discussing or watching now? Work on the <b>Self-Study module</b>.' },
              { who: 'group', text: 'Already had your discussion? Meet the group you watched <b>quietly</b> (or outside). Share your feedback.' },
              { who: 'alone', text: 'After you give and get feedback, write your <b>Action plan for further improvement</b> (tab “After”).' }
            ]},
            { type: 'tip', text: 'Watch the clock! Be ready a few minutes before your turn to discuss or watch.' }
          ]
        },
        {
          id: 'd9', short: 'Discussion', minutes: 90, grouping: 'Discussion groups',
          title: 'Starting the discussions',
          goal: 'Discuss your quote for about half the time. Then negotiate: which strategy is the best?',
          blocks: [
            { type: 'tip', text: 'About <b>25–30 minutes per group</b>. Sit in a circle, facing each other. No laptops — only handwritten notes. Watching a group? Use the form in the <b>Peer feedback</b> tab.' },
            { type: 'key', title: 'Unpack the question first', points: [
              'What are the <b>keywords</b>? What is the question really asking?',
              'Part 1: <b>respond</b> to the quote. How could someone agree or disagree?',
              'Part 2: <b>compare</b> the 3 options and choose. You don’t have to agree.',
              'Should you talk about the past, the present or the future?'
            ]},
            { type: 'cards', title: 'Part 1 · Discussion — your teacher tells you which question you have', pick: 'd9-q', items: [
              { label: 'Question 1', text: 'Gunders (2024) proposes that “fixing food waste is… really just about managing our food better, and it’s solvable” (Listening, Week 4).' },
              { label: 'Question 2', text: 'Nicastro and Carillo (2021) suggest that “preventing food loss and waste is… a potential strategy to improve food security while reducing environmental impact and providing economic benefits” (Para. 1, Reading 1, Week 3).' },
              { label: 'Question 3', text: 'Berti et al. (2021) claim that “this situation, where there is both food insecurity and food waste…. is considered highly unethical today” (Para. 1, Reading 2, Week 3).' },
              { label: 'Question 4', text: 'Gunders (2024) asserts that “we, as consumers, are actually the largest source of food going to waste…. we need to take steps in our own lives” (Listening, Week 4).' },
              { label: 'Question 5', text: 'Nicastro and Carillo (2021) propose that “we should try to avoid making too much food in the first place” (Para. 12, Reading 1, Week 3).' },
              { label: 'Question 6', text: 'Gunders (2024) argues that “laws that restrict food from going to landfills… should be everywhere” (Listening, Week 4).' },
              { label: 'Question 7', text: 'Berti et al. (2021) assert that “organizations can be key in larger efforts to improve food systems” (Para. 6, Reading 2, Week 3).' }
            ]},
            { type: 'talk', title: 'For every quote', prompts: [
              'What do you think about this quote?',
              'Give examples from your research and the Week 3 and 4 texts.'
            ]},
            { type: 'cards', title: 'Part 2 · Negotiation — Which is the most effective strategy for addressing the problem of food waste?', items: [
              { label: 'a) Food banks', icon: 'users', text: 'Give extra food to people in need — e.g. conventional and choice food banks, Magazzini Sociali.' },
              { label: 'b) Upcycled food', icon: 'sprout', text: 'Make new food from leftovers — e.g. brewer’s grain → flour → cookies.' },
              { label: 'c) Mobile apps', icon: 'layers', text: 'Help homes and shops manage, share or sell food cheaply — e.g. Too Good To Go.' }
            ]},
            { type: 'chat', title: 'Listen in: a short example negotiation', lines: [
              ['Student 1', '<mark>If we had to prioritise one, I’d go for</mark> food banks, <mark>because</mark> they help hungry people today.'],
              ['Student 2', '<mark>I agree up to a point, but I’d question whether</mark> food banks stop the waste. <mark>This is backed up by</mark> Gunders (2024), <mark>who explains that</mark> apps like Too Good To Go help shops sell food before it goes bad.'],
              ['Student 3', '<mark>Building on that,</mark> <mark>whereas</mark> apps work well in cities, they <mark>may not be as effective</mark> in rural areas.'],
              ['Student 1', '<mark>That’s a fair point. I hadn’t looked at it that way.</mark> <mark>It seems we agree on</mark> the problem, <mark>but not on</mark> the solution — and that’s OK.']
            ]},
            { type: 'language', title: 'Negotiation language — quick reminder', groups: [
              { label: 'Responding to the quote', phrases: ['As I understand it, the quote suggests that…', 'This seems to imply that…', 'Especially in countries like (Kenya) that I researched…'] },
              { label: 'Opinions and evidence', phrases: ['Our research on (Kenya) supports this. For example,…', 'This is backed up by (Gunders, 2024), who argues that…', 'Which one do you think we should choose, and why?'] },
              { label: 'Building on and disagreeing', phrases: ['Building on what (Mai) said,…', 'I agree up to a point, but I’d question whether…', 'I’m afraid we don’t see eye to eye there.'] },
              { label: 'Comparing and prioritising', phrases: ['Whereas (option A) helps in the short term, (option B) could…', 'The main drawback of (option C) is that…', 'If we had to prioritise one, I’d go for… because…'] },
              { label: 'Conceding and concluding', phrases: ['That’s a fair point. I hadn’t looked at it that way.', 'You make a strong case. Maybe that is the best option.', 'It seems we agree on…, but not on…'] }
            ]},
            { type: 'tip', text: 'Personal goal: use at least <b>3 phrases</b> from this list. Your observers will listen for them.' },
            { type: 'sources', ids: ['gunders', 'nicastro', 'berti'] },
            { type: 'teacher', ref: 'w4d4-t8' },
            { type: 'teacher', ref: 'w4d4-t9' }
          ]
        },
        {
          id: 'd10', short: 'After', minutes: 25, grouping: 'Alone → discussion groups',
          title: 'After the discussions: Self-evaluation + General teacher feedback + Finalising',
          goal: 'Rate yourself, take notes on feedback and make your Action plan.',
          blocks: [
            { type: 'steps', title: 'Part 1 · After the discussions: Self-evaluation', items: [
              { who: 'alone', text: '<b>Now:</b> choose Yes, Mostly or Needs work for each question.' },
              { who: 'alone', text: '<b>Now:</b> write a short <b>Comment</b> for each one.' },
              { who: 'alone', text: '<b>Later</b> (after all the feedback): fill in the <b>Action plan for further improvement</b>.' }
            ]},
            { type: 'tip', text: 'This is the last part of your <b>Week 3–4 self-reflection</b>: <b>Participating in the discussion</b>. Do it straight after your discussion — before you hear any feedback.' },
            { type: 'model', title: 'An example comment and action', rows: [
              ['Comment', 'I agreed with everyone and didn’t give my own opinion about the options.'],
              ['Action plan', 'Prepare one clear opinion with a reason and an example for each option, and use a phrase for polite disagreement at least once.']
            ]},
            { type: 'form', id: 'd10f', title: 'DEC 15 Week 3–4 Research Summary Discussion: Self-reflection', intro: 'Participating in the discussion — complete after Step 5.', cols: ['Comments', 'Action plan for further improvement'], sections: [
              { label: 'Participating in the discussion', hint: 'complete after Step 5', items: [
                'Did your group take turns appropriately and build on each other’s ideas?',
                'Were you confident to express and justify your opinions?',
                'Were you able to think about the topic from different perspectives and consider different people’s opinions?',
                'Were you comfortable disagreeing with people at times?',
                'Did you compare and contrast the different options and evaluate their importance and implications?'
              ]}
            ], send: true, sendLabel: 'Share your reflection (optional)', sendHint: 'You can send a copy to your teacher or a groupmate — only they will see it.' },
            { type: 'fields', title: 'Part 2 · General teacher feedback — my notes', fields: [
              { id: 'd11-1', label: 'What we did well', placeholder: 'e.g. We used examples from our research…', rows: 2 },
              { id: 'd11-2', label: 'What we can improve', placeholder: 'e.g. Move on to the negotiation question sooner…', rows: 2 },
              { id: 'd11-3', label: 'Questions for my teacher (ask tomorrow)', placeholder: 'What did you mean by…?', rows: 2 }
            ]},
            { type: 'tip', text: 'Your teacher fills in the form below for your group. Later, your teacher <b>sends it to each group member</b> — find it in <b>“Shared with me”</b>. Now, listen and write your own notes.' },
            { type: 'table', id: 'd11t', title: 'DEC 15 Week 4 Research Summary Discussion: Teacher’s feedback', columns: ['Points for observation', 'Strengths', 'Areas for improvement'], fixed: [
              'Group members<br><small>add names (the discussion group, not the research group)</small>',
              'General speaking skills<br><small>• Language use (grammar and vocabulary)<br>• Fluency and pronunciation<br>• Spontaneous discussion (avoiding over-reliance on notes)</small>',
              'Argumentation<br><small>• Presenting a persuasive argument and clear expression of ideas<br>• Critical thinking<br>• Considering different perspectives and comparing and prioritising different solutions<br>• Developing and evaluating others’ ideas</small>',
              'General comments'
            ], send: true, sendLabel: 'Teacher: send feedback to this group', sendHint: 'Tick every member of this discussion group. Each of them gets a read-only copy in “Shared with me”. You can also download a PDF.' },
            { type: 'teacher', ref: 'w4d4-t10' },
            { type: 'checklist', id: 'd12c', title: 'Part 3 · Finalising self-reflection & peer feedback — before the end of the lesson', meter: ['done', 'All done — well done!'], items: [
              'I wrote a Comment for every question in my self-reflection.',
              'I gave peer feedback to the group I watched — by talking and with the form.',
              'I got peer feedback and took notes.',
              'I took notes on my teacher’s feedback.',
              'I wrote my Action plan for further improvement.'
            ]},
            { type: 'tip', text: 'Congratulations on finishing your second Research Summary Discussion! Well done!' },
            { type: 'fields', title: 'Check your Action plan again', fields: [
              { id: 'd12-1', label: 'Can you add anything else to do better next time?', placeholder: 'Next time I will… so that…', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w4d4-t11' }
          ]
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'Negotiation sample', minutes: 15, grouping: 'Alone', category: 'Extra listening',
      title: 'Listen to a negotiation ending again',
      goal: 'Notice how students compare options and change their minds. Compare with your discussion.',
      blocks: [
        { type: 'steps', items: [
          { who: 'alone', text: 'Read the question: health, environment or animal rights — which is most serious?' },
          { who: 'alone', text: 'Predict: will the three students agree in the end?' },
          { who: 'alone', text: 'Read once for the main idea. Then read again for the details.' }
        ]},
        { type: 'listening', source: 'DEC15 sample recording', title: 'Research Summary Discussion — the end of the negotiation', videoId: '', transcripts: [['negotiation-ending2', 'Transcript']] },
        { type: 'quiz', id: 'f3-x1g', title: 'First read: the main idea', items: [
          { q: 'How does the negotiation end?', options: ['They all choose environmental damage.', 'Two students agree; one still disagrees.', 'They all choose health problems.'], answer: 'Two students agree; one still disagrees.', why: 'Student 5 moves to the environment, but Student 4 still argues for health.' }
        ]},
        { type: 'quiz', id: 'f3-x1d', title: 'Second read: details (in order)', items: [
          { q: '1. At the start, Student 1 says the three consequences are…', options: ['not very serious.', 'all connected.', 'mostly about animals.'], answer: 'all connected.', why: '“None of these issues can be viewed in isolation. Each factor affects the other.”' },
          { q: '2. What evidence does Student 4 give first for health problems?', options: ['A UN statistic', 'A personal story', 'A research article'], answer: 'A personal story', why: '“Last year I got really sick…” — a personal story is weaker evidence than research.' },
          { q: '3. How does Student 1 support the environment argument?', options: ['With a statistic from a UN programme', 'With a story about a farm', 'By asking a question'], answer: 'With a statistic from a UN programme', why: 'Student 1 cites the UN Environment Programme on degraded soils.' },
          { q: '4. Why is Student 5 not convinced by the dairy farm example?', options: ['It is only a small-scale example.', 'It comes from Kenya.', 'The farm has no animals.'], answer: 'It is only a small-scale example.', why: '“…a small-scale operation which does not accurately represent this global issue.”' },
          { q: '5. Why does Student 5 change their mind?', options: ['Time is nearly over.', 'Protecting the environment also protects animals.', 'The teacher told them to agree.'], answer: 'Protecting the environment also protects animals.', why: 'Student 5 says this directly before choosing the environment.' }
        ]},
        { type: 'tip', text: 'Question 2 is the hardest. Think: is one person’s experience strong evidence for a global issue?' },
        { type: 'talk', title: 'Think about it', prompts: [
          'Which student gave the strongest evidence? Why?',
          'Is it OK that they did not reach an agreement? Why or why not?'
        ]},
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'Two phrases for evaluating options or showing flexibility that I want to use next time', placeholder: '1. … 2. …', rows: 3 }
        ]}
      ]
    },
    {
      id: 'x2', short: 'Phrase bank', minutes: 10, grouping: 'Alone', category: 'Phrase bank',
      title: 'Phrase bank: all the discussion phrases',
      goal: 'Find more phrases for summarising, negotiating and giving feedback.',
      blocks: [
        { type: 'language', title: 'Summarising a group’s research into a specific region', tabs: false, groups: [
          { label: 'Bringing in the three sources', phrases: ['My groupmate’s article points out that…', 'The synthesis of these articles presents a comprehensive view of the multifaceted challenges…', 'In our 3 articles there was a focus on…', 'All of our articles address…. They highlight…', 'The third article reviewed by another groupmate discusses…', 'Significantly, all 3 articles emphasise…', 'In the article which I read, the authors state that…'] },
          { label: 'Introducing your region', phrases: ['The region that our group chose to research was…', 'We all imagine that in… well in certain regions in…', 'The multifaceted challenges associated with (the UK’s)…', '(The UK’s) ambitious goal to…', '(The UK’s) vulnerability due to its…', 'This country’s stringent regulations greatly influence…'] }
        ]},
        { type: 'language', title: 'Negotiation language — the full list', groups: [
          { label: 'Responding to the quote', phrases: ['In the quote, when they say ‘…’, do you think it’s about… or…?', 'I think ‘…’ here implies…', 'So maybe the quote is a call to action, saying that…', 'Especially in countries like (Kenya) that I researched…', 'Well, those are really big problems in (the UK). My article explained that…'] },
          { label: 'Opinions and evidence', phrases: ['For me, … because…', 'I think it’s fair because…', 'In our research we learnt that…', 'One study which was done in (X) showed that…', 'Which one do you think we should choose?', 'Why are you so firm with that choice?'] },
          { label: 'Building on and disagreeing', phrases: ['Like you said before about…', 'This ties into what we were saying earlier about…', 'I’m afraid we don’t see eye to eye there.', 'I understand that (paraphrase), but…', 'That’s true, but let’s not overlook the (X) perspective here.', 'Do you know if there are any statistics to support that?'] },
          { label: 'Evaluating options', phrases: ['Both Option A and Option B are possible long-term solutions.', 'Option B would be much more expensive.', 'I don’t think the second option would work as well in rural areas…', 'Each option has its benefits, but for me the clear choice is…', 'They are all really significant, but I would still go with…'] },
          { label: 'Showing flexibility', phrases: ['Oh yeah… I hadn’t considered that.', 'I guess you’re right. Those issues can’t be ignored.', 'Yeah, I suppose you have a point there.', 'You do make a very strong case. Perhaps that is the best option.'] }
        ]},
        { type: 'language', title: 'Giving feedback — the full list', tabs: false, groups: [
          { label: 'Strengths', phrases: ['The way you… made your point very clear.', 'You’ve made a good point here, but maybe you could…', '… was good; to make it even better, you might…'] },
          { label: 'Areas to improve', phrases: ['Perhaps … -ing could…', 'I noticed a few instances where…', 'Try to… so…', 'It might be helpful to…', 'Don’t forget to… / Remember to…'] }
        ]}
      ]
    }
  ],

  glossary: [
    ['fishbowl', 'An activity where one group discusses in the middle while another group watches and gives feedback.', 'In the fishbowl, our group observed Group 2.'],
    ['spontaneous', 'Natural and not planned or scripted.', 'The discussion should be spontaneous, not read from notes.'],
    ['negotiation', 'Discussing something with others and trying to reach an agreement.', 'In the negotiation we compared three strategies.'],
    ['justify', 'To give reasons or evidence for an opinion.', 'Justify your opinion with an example from your research.'],
    ['communication breakdown', 'When people don’t understand each other in a conversation.', 'Ask for clarification to fix a communication breakdown.'],
    ['clarification', 'Making something easier to understand.', 'Could I ask for some clarification on that point?'],
    ['turn-taking', 'Letting people speak one after another in a fair way.', '“Sorry, you go ahead” helps with turn-taking.'],
    ['alarming', 'Worrying; causing fear.', 'That’s an alarming statistic.'],
    ['see eye to eye', 'To agree with someone.', 'I’m afraid we don’t see eye to eye there.'],
    ['up to a point', 'Partly, but not completely.', 'I agree with you up to a point.'],
    ['flexibility', 'Being willing to change your opinion when you hear good arguments.', 'Showing flexibility is part of negotiation.'],
    ['perspective', 'A way of thinking about something.', 'Try to consider different perspectives.'],
    ['prioritise', 'To decide which thing is most important.', 'We prioritised mobile apps over food banks.'],
    ['implication', 'A possible effect or result of an action.', 'What are the implications of relying on food banks?'],
    ['fluency', 'Speaking smoothly, without many long stops.', 'Her fluency was much better this week.'],
    ['upcycled food', 'Food made from ingredients that would otherwise be wasted.', 'Brewer’s grain can become upcycled flour.'],
    ['food bank', 'An organisation that collects surplus food and gives it to people in need.', 'Food banks rely on volunteers and donations.'],
    ['peer feedback', 'Comments from classmates about your work or performance.', 'We shared our peer feedback after the discussion.'],
    ['constructive', 'Helpful; showing how to improve.', 'Give constructive feedback with examples.'],
    ['self-evaluation', 'Judging your own performance.', 'Complete your self-evaluation before you hear peer feedback.'],
    ['action plan', 'A list of specific steps you will take to improve.', 'My action plan: use more examples from my research.'],
    ['prevention', 'Stopping something before it happens.', 'Gunders says prevention should be the priority.'],
    ['surplus', 'Extra; more than is needed.', 'Supermarkets give surplus food to food banks.'],
    ['food security', 'When people always have enough safe, healthy food.', 'Less waste could improve food security.'],
    ['scale up', 'To make something bigger so it reaches more people.', 'Good ideas need money to scale up.'],
    ['sustainable', 'Able to continue for a long time without harm.', 'Is a food bank a sustainable solution?'],
    ['concede', 'To accept that someone else’s point is true or good.', '“That’s a fair point” is a polite way to concede.']
  ]
};
