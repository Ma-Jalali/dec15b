/* DEC15 · Week 4, Day 4 — lesson content.
   Teacher’s Book: W4 D4 · 10A Research summary discussions (240).
   Texts: Gunders (2024) · Nicastro and Carillo (2021) · Berti et al. (2021) — lessons/week3/sources.js + lessons/week4/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
   Sharing (send: true): peer-feedback form (d6f), teacher’s feedback table (d11t), optional self-evaluation (d10f). */

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
  journey: 'Today is your second Research Summary Discussion. You revise your discussion language, present your group’s research to a new group, and then discuss and negotiate in a fishbowl while classmates watch and give feedback. Finally, you reflect on how it went and plan how to improve.',
  finish: { title: 'Friday', text: 'Feedback on your writing, an essay plan and AI literacy' },

  sections: [
    /* ───────────────────────── 10A Research summary discussions ───────────────────────── */
    {
      id: 'rsd', number: '01', code: '10A', minutes: 240,
      tone: 'clay', art: 'discussion',
      title: 'Research summary discussions',
      subtitle: 'Present your research, discuss, negotiate and reflect',
      outcome: 'Finalise and present your group’s research, take part in a critical academic discussion that evaluates 3 options, explain self-regulation and monitoring, and reflect on your performance to set goals.',
      activities: [
        {
          id: 'd1', short: 'Warmer', minutes: 20, grouping: 'Whole class',
          title: 'Warmer: Revision of discussion skills and language',
          goal: 'Revise the discussion skills and phrases you have learnt in DEC15 — 18 quick questions.',
          blocks: [
            { type: 'tip', text: 'Today you take part in your <b>2nd Research Summary Discussion</b>. Every skill and phrase in these questions is something you should <b>do</b> in your discussion today.' },
            { type: 'quiz', id: 'd1q', title: 'Choose the best answer', items: [
              { q: '1. Complete this sentence: In an academic discussion, you should…', options: ['…encourage others to speak', '…show interest', '…manage communication breakdowns', '…do all of these things'], answer: '…do all of these things', why: 'A good discussion needs all three: involve others, show interest and fix misunderstandings.' },
              { q: '2. How can you manage communication breakdowns?', options: ['Ask for clarification', 'Agree', 'Show surprise', 'Move on to a new point'], answer: 'Ask for clarification', why: 'e.g. “What do you mean?” · “I’m not sure I get your meaning.”' },
              { q: '3. Which phrase encourages others to speak?', options: ['“Well, to put it another way…”', '“I’d like to ask (name) what he/she thinks.”', '“For instance, in the….”', '“I think it’s fair because…”'], answer: '“I’d like to ask (name) what he/she thinks.”', why: 'It invites a quieter groupmate into the discussion (turn-taking).' },
              { q: '4. Which phrase shows interest/surprise?', options: ['“Okay. Shall we move on?”', '“I’m not sure I get your meaning.”', '“Oh, I had no idea!”', '“I understand where you’re coming from, yet…”'], answer: '“Oh, I had no idea!”', why: 'It shows you are surprised and interested in new information.' },
              { q: '5. Which phrase shows a negative reaction?', options: ['“That’s inspiring.”', '“That’s curious.”', '“That’s impressive.”', '“That’s alarming.”'], answer: '“That’s alarming.”', why: '<i>Alarming</i> = worrying. The other adjectives are positive or neutral.' },
              { q: '6. Which phrase can be used to manage turn-taking?', options: ['“Sorry, you go ahead.”', '“That’s true, but…”', '“I suppose so.”', '“Okay. I see what you’re saying.”'], answer: '“Sorry, you go ahead.”', why: 'Use it when two people start talking at the same time — you give the turn to the other speaker.' },
              { q: '7. Complete this sentence: In an academic discussion, you should…', options: ['…always agree to be polite.', '…show when you agree and disagree politely with justification.', '…always disagree to be strong.', '…neither agree nor disagree.'], answer: '…show when you agree and disagree politely with justification.', why: 'Agreeing and disagreeing are both fine — be polite and give reasons.' },
              { q: '8. Which phrase can be used to agree strongly?', options: ['“I understand where you’re coming from, yet…”', '“I guess you’re right.”', '“That’s exactly how I see it.”', '“Let me rephrase that.”'], answer: '“That’s exactly how I see it.”', why: '“I guess you’re right” agrees only weakly; “…yet” introduces a disagreement.' },
              { q: '9. Which phrase can be used to agree up to a point?', options: ['“I understand where you’re coming from, yet…”', '“I guess you’re right.”', '“You have a point there.”', '“Let me rephrase that.”'], answer: '“You have a point there.”', why: 'You accept part of the other person’s argument (“a point”), not all of it.' },
              { q: '10. Which phrase can be used to politely disagree?', options: ['“Don’t the (environmental) issues worry you?”', '“I can say with great confidence that…”', '“We can’t deny that…”', '“I’m afraid we don’t see eye to eye there.”'], answer: '“I’m afraid we don’t see eye to eye there.”', why: '<i>I’m afraid</i> softens the disagreement. The other phrases assert a position or encourage others to agree.' },
              { q: '11. What’s wrong with the phrase “I agree.”?', options: ['It’s difficult to pronounce.', 'It’s grammatically incorrect.', 'It needs more support (justification).', 'Nobody says this in Australia.'], answer: 'It needs more support (justification).', why: 'Say <b>why</b> you agree: “I agree, because in my research…”' },
              { q: '12. Why is it important to justify your opinion?', options: ['to make your argument clearer', 'to show you’ve done research', 'to make your argument stronger', 'all of these options'], answer: 'all of these options', why: 'Remember: “Strong opinions are only valid when supported by stronger reasons.”' },
              { q: '13. How can you justify your opinion?', options: ['Give real-life examples', 'Give examples from the research', 'Explain your reasons', 'all of these options'], answer: 'all of these options', why: 'Reasons + examples from your research and from life.' },
              { q: '14. What phrase can justify an opinion?', options: ['“I think it’s fair because…”', '“I agree.”', '“That’s a critical point.”', '“Are you saying that…?”'], answer: '“I think it’s fair because…”', why: '<i>because</i> introduces the reason.' },
              { q: '15. How can you evaluate different options?', options: ['Compare and contrast options', 'Prioritise options', 'Speculate about options’ consequences', 'All of these options'], answer: 'All of these options', why: 'In the negotiation, compare, contrast and prioritise the three options, and think about their consequences.' },
              { q: '16. How is this phrase used? “This ties into what we were saying earlier about…”', options: ['Giving an opposing point', 'Encouraging others to agree', 'Referring back to an earlier comment', 'Showing flexibility'], answer: 'Referring back to an earlier comment', why: 'It builds on an earlier contribution (building shared understanding).' },
              { q: '17. How is this phrase used? “I guess you’re right. Those issues can’t be ignored.”', options: ['Giving an opposing point', 'Encouraging others to agree', 'Referring back to an earlier comment', 'Showing flexibility'], answer: 'Showing flexibility', why: 'The speaker changes their mind after hearing a good argument.' },
              { q: '18. Why is showing flexibility important?', options: ['To show that your opinion is right', 'To be polite in the discussion', 'To consider different perspectives and think critically', 'It’s not important'], answer: 'To consider different perspectives and think critically', why: 'Negotiation means listening to other views and being open to changing your mind.' }
            ]},
            { type: 'teacher', ref: 'w4d4-t1' },
            { type: 'teacher', ref: 'w4d4-t2' }
          ]
        },
        {
          id: 'd2', short: 'Preparation', minutes: 10, grouping: 'Research groups',
          title: 'Preparation time',
          goal: 'Get ready to present your whole group’s research to a new group.',
          blocks: [
            { type: 'figure', src: 'assets/week4/rsd-steps.svg', alt: 'The five steps of the Research Summary Discussion: 1 find a source, 2 summarise your source to your group, 3 prepare a group presentation, 4 present to a new group, 5 discuss for 15 minutes.', caption: 'Today: Steps 4 and 5', size: 'wide' },
            { type: 'key', title: 'Steps 4 and 5 — a reminder', compare: [
              { label: 'Step 4', text: 'Your teacher organises <b>new groups</b> of students who researched <b>different regions</b>. Each student has <b>5 minutes</b> to deliver the Research Summary presentation on their region.' },
              { label: 'Step 5', text: 'A <b>15-minute discussion</b> in 2 parts: ① respond to a <b>quote</b> from one of the readings, with examples from your research; ② a problem/question with <b>three possible answers</b> — argue which is best. The focus is on discussion and negotiation, not necessarily on agreeing.' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Work with your research group. Make sure you are ready to present the summary of your <b>whole group’s research</b> to a new group.' },
              { who: 'alone', text: 'Check that you have <b>clear handwritten notes</b> — you will be separated from your original group members.' },
              { who: 'alone', text: 'Review your notes and recall the main points. In the discussion, refer to your group’s research, but you can also mention points from the Week 3 and 4 reading and listening texts.' }
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
          goal: 'Present your whole group’s research about your region to a new group — about 5 minutes each.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Move to your <b>new group</b>. Everyone researched a different region.' },
              { who: 'group', text: 'Take turns: summarise the information your <b>whole group</b> learnt about your region (about <b>5 minutes</b> each). Use notes — don’t read a script.' },
              { who: 'group', text: 'Listen and take short notes. This is <b>not</b> the time for discussion yet — if you finish early, ask each other questions about your research.' }
            ]},
            { type: 'language', title: 'Language for summarising a group’s research into a specific region', tabs: false, groups: [
              { label: 'Bringing in the three sources', phrases: ['My groupmate’s article points out that…', 'The synthesis of these articles presents a comprehensive view of the multifaceted challenges…', 'In our 3 articles there was a focus on…', 'All of our articles address…. They highlight…', 'The third article reviewed by another groupmate discusses…', 'Significantly, all 3 articles emphasise…', 'In the article which I read, the authors state that…'] },
              { label: 'Introducing your region', phrases: ['The region that our group chose to research was…', 'We all imagine that in… well in certain regions in…', 'The multifaceted challenges associated with (the UK’s)…', '(The UK’s) ambitious goal to…', '(The UK’s) vulnerability due to its…', 'This country’s stringent regulations greatly influence…'] }
            ]},
            { type: 'fields', title: 'My notes on the other regions', fields: [
              { id: 'd3-1', label: 'Regions, main points and useful examples I can use in the discussion', placeholder: 'Region: … · Main point: … · Example: …', rows: 5 }
            ]},
            { type: 'teacher', ref: 'w4d4-t4' }
          ]
        },
        {
          id: 'd4', short: 'Step 5 roles', minutes: 10, grouping: 'Whole class',
          title: 'RSD Step 5: Discussion (Instructions)',
          goal: 'Understand the fishbowl: what you do when you discuss, when you give feedback and when you wait.',
          blocks: [
            { type: 'figure', src: 'assets/week4/fishbowl.svg', alt: 'A fishbowl discussion: an inner discussion group sits in a circle; an outer peer-feedback group and the teacher sit around them and take notes. Timeline: 5 minutes preparation, 15 minutes discussion, 5 minutes self-evaluation, then the groups swap roles.', caption: 'The fishbowl: one group discusses, another group watches and gives feedback, then you swap', size: 'wide' },
            { type: 'cards', title: 'Three roles — what do you do?', items: [
              { label: 'Discussion group', icon: 'chat', text: '<b>5 min</b> preparation: read the question and review your notes.<br><b>15 min</b> discuss the question.<br><b>5 min</b> self-evaluation (not the Action plan yet).<br><b>1–2 min</b> take notes on brief teacher feedback.' },
              { label: 'Peer-feedback group', icon: 'users', text: '<b>5 min</b> read the peer-feedback form and check you understand the questions.<br><b>15 min</b> watch the discussion and add notes to the form.<br><b>5 min</b> finalise your notes and share observations with the others giving feedback.' },
              { label: 'Other groups', icon: 'book', text: 'Work on the Self-Study module.<br>Do your post-discussion activities: give and receive peer feedback, then complete your Action plan.' }
            ]},
            { type: 'key', title: 'The timeline for each discussion', compare: [
              { label: '5 min', text: 'Preparation · read the form' },
              { label: '15 min', text: 'Discussion · observation' },
              { label: '5 min', text: 'Self-evaluation · finalise feedback notes' },
              { label: '1–2 min', text: 'Brief teacher feedback' },
              { label: '2–3 min', text: 'Swap group roles' },
              { label: 'After', text: 'Exchange peer feedback (outside the classroom) · complete the Action plan for further improvement' }
            ]},
            { type: 'tip', text: 'Do your <b>self-evaluation first</b> — before you receive peer feedback. Then give and receive feedback, and only then write your Action plan. Try to spend about half the time on each question, but a natural discussion matters more than strict timing. Keep going for the full 15 minutes.' },
            { type: 'teacher', ref: 'w4d4-t5' }
          ]
        },
        {
          id: 'd5', short: 'Tips', minutes: 5, grouping: 'Alone',
          title: 'Preparation time · Discussion tips',
          goal: 'Use your 5 minutes well and remember the rules of a good discussion.',
          blocks: [
            { type: 'steps', title: 'Preparation time (about 5 minutes)', items: [
              { who: 'alone', text: 'After you see the question, look back at your notes. How can you use evidence from the class texts and your group’s research?' },
              { who: 'alone', text: 'Take ideas from your group’s research into your region. You can also use your notes on the class texts from this week and last week.' },
              { who: 'alone', text: 'You can refer to your notes, but don’t read them aloud. You need <b>handwritten</b> notes — no computer or tablet during the discussion.' }
            ]},
            { type: 'key', title: 'Discussion tips', points: [
              'Engage in the conversation appropriately and make sure others are involved.',
              'Don’t use your computer/laptop.',
              'Don’t just read aloud from your handwritten notes.',
              'Listen to what your groupmates say and respond to their ideas.',
              'Ask questions if you don’t understand something.',
              'You can agree, but it’s okay to disagree as well.',
              'Try to consider different perspectives.',
              'Back up your ideas with information from your research.',
              'You can also mention points from the Week 3 and Week 4 reading and listening texts, or your own knowledge.'
            ]}
          ]
        },
        {
          id: 'd6', short: 'Peer feedback', minutes: 20, grouping: 'Feedback group',
          title: 'Peer-feedback groups',
          goal: 'Watch another group’s discussion, rate it and write constructive comments — then share them with that group.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'While the other group prepares, <b>read the questions</b> in the form below. Write the names of the classmates you are observing.' },
              { who: 'alone', text: 'While you watch, choose <b>Yes</b>, <b>Mostly</b> or <b>Needs work</b> for each question and add notes in <b>Comments</b>. Give examples.' },
              { who: 'group', text: 'Be <b>constructive</b> — not everything is perfect! You help your classmates by showing them what they can improve.' },
              { who: 'group', text: 'After their self-evaluation, meet the group you watched and share your feedback <b>orally</b>. Then send them the form. Take notes on the feedback <b>you</b> receive.' }
            ]},
            { type: 'form', id: 'd6f', title: 'DEC 15 Week 4 Research Summary Discussion: Peer feedback form', intro: 'Choose Yes, Mostly or Needs work for each question, then explain why with an example.', observe: 'Feedback group name(s) — who are you observing?', cols: ['Comments'], sections: [
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
            { type: 'language', title: 'Useful expressions for giving feedback', tabs: false, groups: [
              { label: 'Strengths', phrases: ['The way you… made your point very clear.', 'You’ve made a good point here, but maybe you could…', '… was good; to make it even better, you might…'] },
              { label: 'Areas to improve', phrases: ['Perhaps … -ing could…', 'I noticed a few instances where…', 'Try to… so…', 'It might be helpful to…', 'Don’t forget to… / Remember to…'] }
            ]},
            { type: 'fields', title: 'Feedback I received', fields: [
              { id: 'd6-r', label: 'What did my observers say? (add these notes to your self-reflection later)', placeholder: 'Strength: … · To improve: …', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w4d4-t6' }
          ]
        },
        {
          id: 'd7', short: 'Other groups', minutes: 30, grouping: 'Alone',
          title: 'Other Groups (not discussing or giving feedback)',
          goal: 'Use your waiting time well — and finish your feedback after your discussion.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'While other groups discuss or give feedback, work on other tasks — for example the <b>Self-Study module</b>.' },
              { who: 'group', text: 'Already had your discussion? Get together <b>quietly</b> with the group you observed (or leave the classroom) and share your peer feedback.' },
              { who: 'alone', text: 'After you have given and received feedback, complete the <b>Action plan for further improvement</b> column of your self-evaluation (below, in “Self-evaluation”).' }
            ]},
            { type: 'tip', text: 'Watch the clock: be ready a few minutes before your group’s turn to discuss or to observe.' }
          ]
        },
        {
          id: 'd8', short: 'Discussion order', minutes: 5, grouping: 'Whole class',
          title: 'Running the discussions: Setting up the discussion order/feedback groups',
          goal: 'Listen carefully: which group do you observe, and when is your turn?',
          blocks: [
            { type: 'tip', text: 'Your teacher now tells you the <b>discussion order</b> and which group you <b>observe and give peer feedback</b> to. You stay with your <b>new</b> group from Step 4 — not your original research group. Make a note so the activity runs smoothly.' },
            { type: 'fields', fields: [
              { id: 'd8-1', label: 'My discussion group (names)', placeholder: 'Group 2: …', rows: 1, share: false },
              { id: 'd8-2', label: 'The group I observe and give feedback to', placeholder: 'Group 1: …', rows: 1, share: false },
              { id: 'd8-3', label: 'When is our discussion? When do we observe?', placeholder: 'We discuss at about … · We observe at about …', rows: 2, share: false }
            ]},
            { type: 'teacher', ref: 'w4d4-t7' }
          ]
        },
        {
          id: 'd9', short: 'Discussion', minutes: 90, grouping: 'Discussion groups',
          title: 'Starting the discussions',
          goal: 'Discuss your quote for 15 minutes, then negotiate: which strategy is the most effective?',
          blocks: [
            { type: 'tip', text: 'About <b>25–30 minutes per group</b>. The discussion group sits in a circle, facing each other — no laptops, only handwritten notes. Peer-feedback groups: watch the group you have been given.' },
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
              'What is your response to this?',
              'Give examples from your research and the Week 3 and 4 input texts that discuss this viewpoint.'
            ]},
            { type: 'cards', title: 'Part 2 · Negotiation — Which is the most effective strategy for addressing the problem of food waste?', items: [
              { label: 'a) Food banks', icon: 'users', text: 'Redistribute surplus food to people in need — e.g. conventional and choice food banks, Magazzini Sociali.' },
              { label: 'b) Upcycled food', icon: 'sprout', text: 'Turn by-products into new food products — e.g. brewer’s grain → flour → cookies.' },
              { label: 'c) Mobile apps', icon: 'layers', text: 'Help households and shops manage, share or discount food — e.g. Too Good To Go, smart inventory apps.' }
            ]},
            { type: 'key', title: 'Unpack the question first', points: [
              'What are the <b>keywords</b>? What is the question really asking?',
              'Part 1: <b>respond</b> to the quote — share your thoughts. In what ways could someone agree or disagree with it?',
              'Part 2: <b>compare and evaluate</b> the 3 options. You don’t have to agree in the end.',
              'Should you refer to the past, the present or the future?'
            ]},
            { type: 'language', title: 'Negotiation language — quick reminder', groups: [
              { label: 'Responding to the quote', phrases: ['In the quote, when they say ‘…’, do you think it’s about… or…?', 'I think ‘…’ here implies…', 'So maybe the quote is a call to action, saying that…', 'Especially in countries like (Kenya) that I researched…', 'Well, those are really big problems in (the UK). My article explained that…'] },
              { label: 'Opinions and evidence', phrases: ['For me, … because…', 'I think it’s fair because…', 'In our research we learnt that…', 'One study which was done in (X) showed that…', 'Which one do you think we should choose?', 'Why are you so firm with that choice?'] },
              { label: 'Building on and disagreeing', phrases: ['Like you said before about…', 'This ties into what we were saying earlier about…', 'I’m afraid we don’t see eye to eye there.', 'I understand that (paraphrase), but…', 'That’s true, but let’s not overlook the (X) perspective here.', 'Do you know if there are any statistics to support that?'] },
              { label: 'Evaluating options', phrases: ['Both Option A and Option B are possible long-term solutions.', 'Option B would be much more expensive.', 'I don’t think the second option would work as well in rural areas…', 'Each option has its benefits, but for me the clear choice is…', 'They are all really significant, but I would still go with…'] },
              { label: 'Showing flexibility', phrases: ['Oh yeah… I hadn’t considered that.', 'I guess you’re right. Those issues can’t be ignored.', 'Yeah, I suppose you have a point there.', 'You do make a very strong case. Perhaps that is the best option.'] }
            ]},
            { type: 'sources', ids: ['gunders', 'nicastro', 'berti'] },
            { type: 'teacher', ref: 'w4d4-t8' },
            { type: 'teacher', ref: 'w4d4-t9' }
          ]
        },
        {
          id: 'd10', short: 'Self-evaluation', minutes: 5, grouping: 'Alone',
          title: 'After the discussions: Self-evaluation',
          goal: 'Rate how you participated — straight after your discussion, before you hear any feedback.',
          blocks: [
            { type: 'tip', text: 'This is the final section of your <b>Week 3–4 self-reflection</b>. You have already done “Conducting research”, “Summarising research” and “Groupwork”. Today: <b>Participating in the discussion</b>.' },
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Now:</b> choose Yes, Mostly or Needs work for each question and write your <b>Comments</b>.' },
              { who: 'alone', text: '<b>Later</b> — after you have shared feedback on the other group and heard feedback from your peers and teacher: add strategies to improve the whole task in <b>Action plan for further improvement</b>.' }
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
            { type: 'model', title: 'An example comment and action', rows: [
              ['Comment', 'I agreed with everyone and didn’t give my own opinion about the options.'],
              ['Action plan', 'Prepare one clear opinion with a reason and an example for each option, and use a phrase for polite disagreement at least once.']
            ]}
          ]
        },
        {
          id: 'd11', short: 'Teacher feedback', minutes: 5, grouping: 'Discussion groups',
          title: 'General teacher feedback',
          goal: 'Listen to your teacher’s feedback after your discussion and take notes.',
          blocks: [
            { type: 'tip', text: 'Your teacher watches your discussion and fills in the <b>Teacher’s feedback</b> form below for your group. Later your teacher <b>sends it to each member of your group</b> — you will find it in <b>“Shared with me”</b>. Right now, listen and write your own notes.' },
            { type: 'fields', title: 'My notes on the teacher’s feedback', fields: [
              { id: 'd11-1', label: 'What we did well', placeholder: 'e.g. We used examples from our research…', rows: 2 },
              { id: 'd11-2', label: 'What we can improve', placeholder: 'e.g. Move on to the negotiation question sooner…', rows: 2 },
              { id: 'd11-3', label: 'Questions for my teacher (ask tomorrow)', placeholder: 'What did you mean by…?', rows: 2 }
            ]},
            { type: 'table', id: 'd11t', title: 'DEC 15 Week 4 Research Summary Discussion: Teacher’s feedback', columns: ['Points for observation', 'Strengths', 'Areas for improvement'], fixed: [
              'Group members<br><small>add names (the discussion group, not the research group)</small>',
              'General speaking skills<br><small>• Language use (grammar and vocabulary)<br>• Fluency and pronunciation<br>• Spontaneous discussion (avoiding over-reliance on notes)</small>',
              'Argumentation<br><small>• Presenting a persuasive argument and clear expression of ideas<br>• Critical thinking<br>• Considering different perspectives and comparing and prioritising different solutions<br>• Developing and evaluating others’ ideas</small>',
              'General comments'
            ], send: true, sendLabel: 'Teacher: send feedback to this group', sendHint: 'Tick every member of this discussion group. Each of them gets a read-only copy in “Shared with me”. You can also download a PDF.' },
            { type: 'teacher', ref: 'w4d4-t10' }
          ]
        },
        {
          id: 'd12', short: 'Finalise', minutes: 15, grouping: 'Alone',
          title: 'Finalising self-reflection & peer feedback',
          goal: 'Check that everything is complete and make your Action plan stronger.',
          blocks: [
            { type: 'tip', text: '<b>Congratulations on completing your second Research Summary Discussion!</b>' },
            { type: 'checklist', id: 'd12c', title: 'Before the end of the lesson', meter: ['done', 'All done — well done!'], items: [
              'I completed all parts of the Week 3–4 self-reflection (Comments for every question).',
              'I gave peer feedback to the group I observed — orally and with the form.',
              'I received peer feedback and took notes.',
              'I took notes on my teacher’s general feedback.',
              'I completed the Action plan for further improvement.'
            ]},
            { type: 'fields', title: 'Reconsider your Action plan', fields: [
              { id: 'd12-1', label: 'Is there anything else you can add to improve your performance on this task?', placeholder: 'Next time I will… so that…', rows: 3 }
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
      goal: 'Notice how students evaluate options and show flexibility — then compare with your discussion.',
      blocks: [
        { type: 'listening', source: 'DEC15 sample recording', title: 'Research Summary Discussion — the end of the negotiation', videoId: '', transcripts: [['negotiation-ending2', 'Transcript']] },
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'Two phrases for evaluating options or showing flexibility that I want to use next time', placeholder: '1. … 2. …', rows: 3 }
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
    ['upcycled food', 'Food made from ingredients that would otherwise be wasted.', 'Brewer’s grain can become upcycled flour.'],
    ['food bank', 'An organisation that collects surplus food and gives it to people in need.', 'Food banks rely on volunteers and donations.'],
    ['peer feedback', 'Comments from classmates about your work or performance.', 'We shared our peer feedback after the discussion.'],
    ['constructive', 'Helpful; showing how to improve.', 'Give constructive feedback with examples.'],
    ['self-evaluation', 'Judging your own performance.', 'Complete your self-evaluation before you hear peer feedback.'],
    ['action plan', 'A list of specific steps you will take to improve.', 'My action plan: use more examples from my research.']
  ]
};
