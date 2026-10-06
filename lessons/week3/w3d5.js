/* DEC15 · Week 3, Day 5 — lesson content.
   15A Discussion skills: negotiation language (90) · 16A AST Group work skills (60) ·
   17A AST Digital literacy and AI: prompts (60) · 18A Building rapport (30, teacher-led).
   Same block types as lessons/week2/w2d5.js (see lessons/_template.js). */

window.DEC15_LESSON = {
  id: 'w3d5',
  week: 3, day: 5,
  title: 'Negotiate, work as a team, write better prompts',
  duration: 'About 4 hours',
  question: 'How do we negotiate well in an academic discussion — and work well as a team?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus',
  wordTarget: '',

  journey: 'Today you get ready for the Week 4 Research Summary Discussion. You will learn the language to clarify, give opinions and build on other people’s ideas, make a teamwork contract with your research group, and practise writing clear prompts for AI tools.',
  finish: { title: 'Next: Week 4', text: 'Prepare your 2-minute summary of your solutions article. On Monday you have another discussion skills lesson, and on Thursday you take part in the Research Summary Discussion.' },

  sections: [
    /* ───────────────────────── STAGE 1 · 15A ───────────────────────── */
    {
      id: 'negotiate', number: '01', code: '15A', minutes: 90,
      tone: 'teal', art: 'discussion',
      title: 'Negotiate in a discussion',
      subtitle: 'Discussion skills: negotiation language',
      outcome: 'Identify and use language for negotiation in a discussion (clarification, giving opinions and building on others’ contributions), reflect on feedback on your 1st Research Summary Discussion, and monitor your progress for the 2nd.',
      activities: [
        {
          id: 'n1', short: 'Warm-up', minutes: 8, grouping: 'Pairs',
          title: 'Warm-up: remember a quote',
          goal: 'Remember a short quote exactly, then respond to it with examples.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Decide who is <b>Student A</b> and who is <b>Student B</b>.' },
              { who: 'class', text: '<b>Student A:</b> close your eyes and smile! <b>Student B:</b> read the quote on the board silently and <b>remember</b> it. Don’t say it or write it down.' },
              { who: 'pair', text: 'When your teacher says it’s OK, <b>Student B</b> tells the quote. <b>Student A</b> listens and writes it <b>exactly</b>. (B: don’t write it for them!)' },
              { who: 'class', text: 'Your teacher shows the quote again. Check your sentence.' },
              { who: 'pair', text: '<b>Talk (2–3 min):</b> answer the questions below. Give examples from your study experience.' }
            ]},
            { type: 'fields', fields: [
              { id: 'n1-1', label: 'The quote (Student A writes)', placeholder: 'Write the quote exactly…', rows: 2 }
            ]},
            { type: 'talk', title: 'Talk with your partner', prompts: [
              'What is your response to this quote? Do you agree?',
              'Give an example from your study experience — for example, your Week 2 discussion.'
            ]},
            { type: 'order', id: 'n1o', title: 'Alternative (if your teacher says): put the words in order', items: ['strong', 'opinions', 'are', 'only', 'valid', 'when', 'supported', 'by', 'stronger', 'reasons'], start: [8, 0, 6, 9, 7, 4, 2, 3, 1, 5], why: '“Strong opinions are only valid when supported by stronger reasons.”' },
            { type: 'key', title: 'An opinion needs a reason', points: [
              'In a discussion, an opinion without a reason is weak. <b>Justify</b> your opinion: say <b>why</b>, and give an <b>example</b> or evidence from your research.'
            ]},
            { type: 'teacher', text: 'Purpose: more practice of the Discussion task and an introduction to justifying opinions. Show/write the quote on the board for 5 seconds only, then erase it: ‘Strong opinions are only valid when supported by stronger reasons.’ Student B remembers it for Student A to write or type. Then display it again to check. Alternative: the scrambled version (the order task) — feed them the 1st, 2nd word etc. if they struggle. Ex 2: a couple of minutes only; remind Ss of their Week 2 discussion for examples. Ask some Ss to share. If they don’t mention it, stress that justifying your opinions strengthens your argument.' }
          ],
          answers: { title: 'The quote', items: [['Quote', '“Strong opinions are only valid when supported by stronger reasons.”']] }
        },
        {
          id: 'n2', short: 'Listen', minutes: 14, grouping: 'Alone → pair',
          title: 'Listen to a sample discussion',
          goal: 'Follow the negotiation stage of a Research Summary Discussion.',
          blocks: [
            { type: 'key', title: 'Step 5 of the Research Summary Discussion (15 minutes)', points: [
              '<b>Part 1:</b> discuss your response to a <b>quote</b> from one of the readings, with examples from your research.',
              '<b>Part 2:</b> you get a problem or question and <b>three possible answers</b>. Argue which answer is best. The focus is on <b>discussion and negotiation</b> — not necessarily reaching an agreement.'
            ]},
            { type: 'question', label: 'The sample discussion question (not your topic)', text: 'Which of the consequences of the modern agricultural production system is the most serious? health problems · environmental damage · animal rights violations. Give examples from the regions you have researched.' },
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Before you listen (2 min).</b> Read the 7 questions. Predict some answers.' },
              { who: 'class', text: '<b>Listen.</b> Your teacher plays the recording (Part 2: negotiation). Choose your answers.' },
              { who: 'pair', text: '<b>Compare</b> with a partner. Your teacher plays the recording again.' },
              { who: 'alone', text: 'Click <b>Check my answers</b>. Open the transcript <b>only after</b> you check.' }
            ]},
            { type: 'listening', source: 'DEC15 sample recording', title: 'Research Summary Discussion — negotiation stage', videoId: '', transcripts: [['discussion-sample', 'Transcript']] },
            { type: 'quiz', id: 'n2q', title: 'Listen and choose', items: [
              { q: 'Which consequence do they discuss first?', options: ['health problems', 'environmental damage', 'animal rights violations'], answer: 'animal rights violations', why: '“This point links us to one of the other options in our question: animal rights violations.”' },
              { q: 'What is one solution offered to minimise animal rights violations?', options: ['eat less meat', 'don’t test products on animals', 'don’t keep pets'], answer: 'eat less meat', why: 'Student 4 suggests a largely plant-based diet; Student 1 is thinking about eating less meat.' },
              { q: 'Why do the students choose to stop discussing this solution?', options: ['because none of them want to change to a plant-based diet', 'because they don’t have any ideas about it', 'because it’s the focus of next week’s discussion'], answer: 'because it’s the focus of next week’s discussion', why: '“This solution may be something we should be focusing on next week, not today.”' },
              { q: 'Which countries have more animal welfare regulations?', options: ['Kenya and the UK', 'The Netherlands and the UK', 'The Netherlands and Kenya'], answer: 'The Netherlands and the UK', why: '“Like you said before about the UK, the Netherlands also has high animal welfare standards.”' },
              { q: 'Which issue is NOT mentioned as a cause for health problems?', options: ['diseases transmitted from animals to humans', 'chemical fertilizers', 'air pollution from factories'], answer: 'air pollution from factories', why: 'They mention chemical fertilizers, pesticides, zoonotic diseases and antibiotics — not factory air pollution.' },
              { q: 'What do the speakers say about the three options (problems) from the question?', options: ['they are all interlinked (connected)', 'they all have the same solution', 'they should be addressed in isolation'], answer: 'they are all interlinked (connected)', why: '“Environmental damage, animal welfare, and health issues are all critical and interlinked aspects of modern agriculture.”' },
              { q: 'Which consequence do they finally choose as the most serious?', options: ['health problems', 'environmental damage', 'animal rights violations'], answer: 'environmental damage', why: '“Environmental damage is the most serious consequence of the modern agricultural production system.”' }
            ]},
            { type: 'teacher', text: 'The recording is on Canvas only — play it from there. Remind Ss of the Step 5 instructions; today we hear only the ‘Negotiation’ part. This sample (modern agricultural production) is NOT their research topic, so it will not be their question. Give Ss time to read the questions and predict before you play. Let them compare answers before playing again. Keep the check brisk. Answers: 1 animal rights violations · 2 eat less meat · 3 because it’s the focus of next week’s discussion · 4 The Netherlands and the UK · 5 air pollution from factories · 6 they are all interlinked · 7 environmental damage. (Q3 option text in the TB reads “the focus next week’s discussion”; “of” added.)' }
          ]
        },
        {
          id: 'n3', short: 'Negotiation', minutes: 5, grouping: 'Pairs',
          title: 'What is negotiation?',
          goal: 'Understand what negotiation means in an academic discussion.',
          blocks: [
            { type: 'talk', title: 'Talk with your partner', prompts: [
              'What does the word <b>negotiation</b> mean? (You can look it up.)',
              'What do students <b>do</b> when they negotiate in an academic discussion?'
            ]},
            { type: 'key', title: 'Negotiation = discussing to reach agreement', points: [
              '<b>Negotiation</b> is the process of discussing something with someone and trying to reach an agreement.',
              'Today you will practise four skills: <b>asking for clarification</b> · <b>asking for opinions and justification</b> · <b>giving and justifying opinions</b> · <b>building on others’ contributions</b> (building shared understanding).'
            ]},
            { type: 'question' },
            { type: 'teacher', text: 'Ss can look up ‘negotiation’, but they need to think about how it applies to an academic discussion. Tell Ss they will look at techniques and language for negotiation today and next week.' }
          ],
          answers: { items: [
            ['Meaning', 'The process of discussing something with someone and trying to reach an agreement.'],
            ['What students do', 'Clarify and understand different perspectives (ask open questions, summarise the other person’s view, confirm understanding) · establish common ground (shared values, objectives or interests) · respectfully address differences (use evidence, stay open to counterarguments) · propose and explore solutions (suggest and evaluate alternatives, hypothesise outcomes) · make concessions and compromise · reflective discussion.']
          ]}
        },
        {
          id: 'n4', short: 'Clarify', minutes: 10, grouping: 'Pairs',
          title: 'Ask for clarification',
          goal: 'Check meaning and avoid difficult words without stopping the discussion.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Read <b>Extract 1</b> aloud. Answer question 1 together.' },
              { who: 'pair', text: 'Read <b>Extract 2</b> aloud. Answer questions 2–5. Then open the answers.' }
            ]},
            { type: 'model', title: 'Extract 1', rows: [
              ['Student 1', 'For me, this is the most serious consequence because it affects the foundation of life on Earth, including the air we breathe, the water we drink, and the food we eat.'],
              ['Student 5', 'So, you’re saying that our health is affected by the environment?'],
              ['Student 1', 'That’s right….']
            ]},
            { type: 'model', title: 'Extract 2', rows: [
              ['Student 5', 'And in the Netherlands, the dense population and intensive farming methods increase the risk of zoonotic diseases. This is a significant public health concern.'],
              ['Student 1', 'What are zoonotic diseases?'],
              ['Student 5', 'They’re infectious diseases that can be transmitted from animals to humans.'],
              ['Student 4', 'Do you mean like bird flu?'],
              ['Student 5', 'Yeah, that’s a good example, Mark.'],
              ['Student 4', 'Well, in addition to those types of diseases, another issue that affects human health is the use of antibiotics in livestock, which can lead to antibiotic resistance']
            ]},
            { type: 'fields', fields: [
              { id: 'n4-1', label: '1. How does Student 5 clarify what Student 1 means in Extract 1?', placeholder: 'Student 5 says … and then …', rows: 2 },
              { id: 'n4-2', label: '2. Extract 2: which difficult word don’t 2 students know? What does it mean?', placeholder: 'The word is … It means …', rows: 2 },
              { id: 'n4-3', label: '3. How do the students check the meaning of unusual, technical terms?', placeholder: 'They ask … and then …', rows: 2 },
              { id: 'n4-4', label: '4. How does Student 4 avoid using the difficult expression without stopping the discussion?', placeholder: 'He replaces … with …', rows: 2 },
              { id: 'n4-5', label: '5. Why do you think Student 4 does this?', placeholder: 'Maybe …', rows: 1 }
            ]},
            { type: 'language', title: 'Clarification language', groups: [
              { label: 'Asking for a definition', phrases: ['What is/are…? (recording)', 'What does (X) mean?', 'How would you define (X)?'] },
              { label: 'Asking for clarification', phrases: ['So, you’re saying that…? (recording)', 'Do you mean like (example)? (recording)', 'I don’t really follow you. Could you explain what you mean?'] },
              { label: 'Avoiding difficult expressions', phrases: ['those types of (diseases) (recording)', '(issues) like that', 'The (problem) you mentioned'] }
            ]},
            { type: 'steps', title: 'Role-play: difficult Australian words', items: [
              { who: 'alone', text: '<b>Student A:</b> look up your two <b>difficult words</b> (in English!). Then read your sentence aloud.' },
              { who: 'pair', text: '<b>Student B:</b> ask for the definition. <b>Student A:</b> give the definition.' },
              { who: 'pair', text: '<b>Student B:</b> paraphrase the word and/or give an example to check the meaning. Use the language above.' },
              { who: 'pair', text: 'Then <b>swap</b>: Student B looks up sentences 3 and 4.' }
            ]},
            { type: 'cards', numbered: true, items: [
              { label: 'Student A', text: 'I saw a <b>wobbegong</b> on the weekend.' },
              { label: 'Student A', text: 'I really want to go and see <b>the outback</b>.' },
              { label: 'Student B', text: 'They went for a walk around the <b>billabong</b>.' },
              { label: 'Student B', text: 'I love <b>lamingtons</b>!' }
            ]},
            { type: 'teacher', text: 'You might choose Ss to read the extracts aloud. Check Q1 together before moving on; Ss can do Qs 2–5 with a partner. Role-play: make sure only the allocated student looks up each word. To extend, add more difficult words or ask Ss to think of their own. Definitions: wobbegong — a flat-looking type of shark found in shallow, temperate and tropical waters around Australia · billabong — a stagnant pool that’s formed after a river changes its course · the outback — the vast, remote, dry interior of Australia · lamingtons — square-shaped sponge cakes coated in a layer of chocolate icing and desiccated coconut.' }
          ],
          answers: { items: [
            ['1', 'The student says “So, you’re saying that…” and then paraphrases the other speaker.'],
            ['2', '<b>Zoonotic</b> (diseases) = infectious diseases that can be transmitted from animals to humans.'],
            ['3', 'Asks “What are…?” and then tries to think of an example to check (“Do you mean like bird flu?”).'],
            ['4', 'He replaces (paraphrases) the phrase “zoonotic diseases” with “those types of diseases”.'],
            ['5', 'Maybe he can’t remember the word or can’t pronounce it.'],
            ['Definitions', '<b>wobbegong</b>: a flat-looking type of shark found in shallow, temperate and tropical waters around Australia · <b>the outback</b>: the vast, remote, dry interior of Australia · <b>billabong</b>: a stagnant pool that’s formed after a river changes its course · <b>lamingtons</b>: square-shaped sponge cakes coated in a layer of chocolate icing and desiccated coconut.']
          ]}
        },
        {
          id: 'n5', short: 'Opinions', minutes: 10, grouping: 'Pairs → group',
          title: 'Ask for, give and justify opinions',
          goal: 'Recognise strong and weak ways to give an opinion, then practise.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Read the phrases from the recording. Choose what each one <b>does</b>. Then check.' },
              { who: 'pair', text: 'Discuss: which phrase does <b>not</b> make a strong argument? How could you improve it?' },
              { who: 'pair', text: '<b>Brainstorm</b> more phrases. Add them to the table. Your teacher collects ideas on the screen.' }
            ]},
            { type: 'quiz', id: 'n5q', title: 'What does each phrase do? (a–d: asking for opinions · A–F: giving opinions)', items: [
              { q: 'a. Do you have any other thoughts about…?', options: ['Asks generally for ideas', 'Asks speakers to make a choice', 'Also asks for justification'], answer: 'Asks generally for ideas', why: 'It invites any new ideas (a).' },
              { q: 'b. Which one do you think we should choose?', options: ['Asks generally for ideas', 'Asks speakers to make a choice', 'Also asks for justification'], answer: 'Asks speakers to make a choice', why: 'The group must choose one option (b and d).' },
              { q: 'c. Why are you so firm with that choice?', options: ['Asks generally for ideas', 'Asks speakers to make a choice', 'Also asks for justification'], answer: 'Also asks for justification', why: '“Why…?” asks the speaker to give reasons (c).' },
              { q: 'd. Should we go with that option?', options: ['Asks generally for ideas', 'Asks speakers to make a choice', 'Also asks for justification'], answer: 'Asks speakers to make a choice', why: 'It asks the group to decide (b and d).' },
              { q: 'A. I think it’s fair because…', options: ['With justification', 'Weak — no justification', 'Reaffirming a choice'], answer: 'With justification', why: '“because…” gives a reason (A, C and F).' },
              { q: 'B. I agree.', options: ['With justification', 'Weak — no justification', 'Reaffirming a choice'], answer: 'Weak — no justification', why: 'Only “I agree” gives no reason or example (B).' },
              { q: 'C. I disagree! I think that if… we’d minimise…', options: ['With justification', 'Weak — no justification', 'Reaffirming a choice'], answer: 'With justification', why: 'The speaker explains the result of their idea (A, C and F).' },
              { q: 'D. That’s why I still feel that…', options: ['With justification', 'Weak — no justification', 'Reaffirming a choice'], answer: 'Reaffirming a choice', why: '“Still” refers back to an earlier opinion that has not changed (D and E).' },
              { q: 'E. I would still go with…', options: ['With justification', 'Weak — no justification', 'Reaffirming a choice'], answer: 'Reaffirming a choice', why: '“Still” shows the speaker keeps their earlier choice (D and E).' },
              { q: 'F. For me, … because…', options: ['With justification', 'Weak — no justification', 'Reaffirming a choice'], answer: 'With justification', why: '“because…” gives a reason (A, C and F).' }
            ]},
            { type: 'table', id: 'n5t', title: 'My phrases: giving opinions', columns: ['Function', 'My phrases'], fixed: [
              'Giving and justifying opinions',
              'Asking for opinions',
              'Asking for justification'
            ]},
            { type: 'cards', title: 'Practise: discuss this statement in pairs or a small group', items: [
              { label: 'Statement', text: '<b>Australia has some of the best and most interesting animals in the world.</b>' }
            ]},
            { type: 'key', title: 'Say more than “I agree”', points: [
              'Express yourself fully: give your <b>opinion + reason + example</b>. Use language to <b>give</b> opinions, <b>ask for</b> opinions and <b>ask for justification</b>.',
              'Think: “the best” compared with animals from <b>other countries</b>? Best in what way?'
            ]},
            { type: 'teacher', text: 'Answers Part A: 1 also asks for justification = C · 2 asks for a choice = B & D · 3 asks generally for ideas = A. Part B: weak argument without justification = B · with justification = A, C & F · reaffirming their choice = D & E (‘still’ refers back to a previous comment that has not changed). Discussion: simply saying ‘I agree’ is a weak form of discussion/negotiation — Ss should justify with examples and evidence. Brainstorm: type Ss’ phrases into the ‘Giving opinions’ section of your shared ‘Negotiation Language – Other Possible Phrases’ doc and display it. Practice: don’t display the statement until ready. The superlative requires comparison with other countries; ‘the best’ is open to interpretation. Remind Ss of the wobbegong. If they struggle, show images: platypus, wombat, frilled-neck lizard, blue-tongue lizard, cassowary, echidna, dugong, quokka.' }
          ],
          answers: { title: 'Discussion and example phrases', items: [
            ['Weak contribution', 'Simply saying “I agree” without any further comment is a weak form of discussion/negotiation. Express yourself more fully and justify your opinion with explanation, examples and evidence.'],
            ['Giving and justifying (examples)', 'In my opinion, … because… · I’m convinced that… The main reason is… · From what I read about (region), …'],
            ['Asking for opinions (examples)', 'What do you think about…? · How do you feel about…? · What’s your view on…?'],
            ['Asking for justification (examples)', 'What makes you say that? · Can you give an example from your research? · What evidence is there for that?']
          ]}
        },
        {
          id: 'n6', short: 'Build on', minutes: 13, grouping: 'Pairs',
          title: 'Build on others’ contributions',
          goal: 'Match techniques to examples, then respond to a partner in four ways.',
          blocks: [
            { type: 'key', title: 'Five ways to build on others’ contributions', points: [
              '<b>A</b> · Refer back to an earlier comment and <b>add an explanation</b>.',
              '<b>B</b> · Refer back to an earlier comment and <b>add a similar example</b> from your research.',
              '<b>C</b> · Comment on the <b>significance</b> of another speaker’s contribution.',
              '<b>D</b> · <b>Add</b> to others’ ideas by agreeing or giving an <b>opposing point</b>.',
              '<b>E</b> · Comment on the previous contributions in general (<b>summarising</b>).'
            ]},
            { type: 'quiz', id: 'n6q', title: 'Match each extract to a technique (A–E). Which words do the job?', shared: ['A · explanation', 'B · similar example', 'C · significance', 'D · agree / oppose', 'E · summarise'], items: [
              { q: '1) And like you said before about the UK, the Netherlands also has high animal welfare standards', answer: 'B · similar example', why: '“And like you said before about…” refers back and adds a similar example.' },
              { q: '2) <b>Student 5:</b> While regulations are in place, the reality of industrial farming often falls short of these ideals.<br><b>Student 1:</b> That’s right. It can be difficult to monitor whether the factory farms are always following the rules.<br><b>Student 4:</b> At least we can see there are actually rules in many areas, so there’s an attempt to control it.', answer: 'D · agree / oppose', why: '“That’s right. It can be difficult to…” agrees; “At least we can see there are actually…” gives an opposing point.' },
              { q: '3) Well, this ties into what we were saying earlier about the overuse of chemical fertilizers. This causes problems for the environment and people’s health.', answer: 'A · explanation', why: '“Well, this ties into what we were saying earlier about…” refers back and adds an explanation.' },
              { q: '4) <b>Student 4:</b> Antibiotics in livestock can lead to antibiotic resistance.<br><b>Student 1:</b> Yeah, this issue seems to be increasing around the world.', answer: 'C · significance', why: '“Yeah, this issue seems to be increasing around the world.” comments on why the point matters.' },
              { q: '5) Well, all these points show that while the specifics might vary, the underlying issues are quite similar across different regions.', answer: 'E · summarise', why: '“Well, all these points show that…” sums up the earlier contributions.' },
              { q: '6) Yeah, you’re right. It’s clear that all these consequences are serious.', options: ['A · explanation', 'B · similar example', 'C · significance', 'D · agree / oppose', 'E · summarise', 'D and E (both)'], answer: 'D and E (both)', why: '“Yeah, you’re right” agrees (D); “It’s clear that…” summarises (E).' }
            ]},
            { type: 'language', title: 'Phrases from the recording', groups: [
              { label: 'Refer back + explanation / example', phrases: ['like you said before about…', 'this ties into what we were saying earlier about…'] },
              { label: 'Agree or give an opposing point', phrases: ['That’s right. It can be difficult to…', 'At least we can see there are actually…', 'Yeah, you’re right.'] },
              { label: 'Significance', phrases: ['Yeah, this issue seems to be increasing around the world.'] },
              { label: 'Summarising', phrases: ['Well, all these points show that while the specifics might vary, the underlying issues are quite similar across different regions.', 'It’s clear that all these consequences are serious.'] }
            ]},
            { type: 'table', id: 'n6t', title: 'My phrases: building on others’ contributions', columns: ['Function', 'My phrases'], fixed: [
              'Refer back + add an explanation or a similar example',
              'Agree or give an opposing point',
              'Comment on the significance of an idea',
              'Summarise the previous contributions'
            ]},
            { type: 'steps', title: 'Practise: respond in four ways', items: [
              { who: 'pair', text: '<b>Student A:</b> give your opinion on your sentence for about <b>1 minute</b>. Do you agree or disagree?' },
              { who: 'pair', text: '<b>Student B:</b> give <b>4 different responses</b>, one by one: (1) add an explanation or a similar example · (2) give an opposing point · (3) agree and comment on the significance · (4) summarise.' },
              { who: 'pair', text: 'Then <b>swap</b>.' }
            ]},
            { type: 'cards', items: [
              { label: 'Student A’s sentence', text: 'Sydney is the best city in the world.' },
              { label: 'Student B’s sentence', text: 'It’s easy and cheap to eat healthy food.' }
            ]},
            { type: 'teacher', text: 'Ss can do the matching and brainstorm in pairs/small groups OR as a whole class. Check each one before moving on. Answers: 1 B · 2 D · 3 A · 4 C · 5 E · 6 D/E. Brainstorm: type Ss’ phrases into the ‘Building on Others’ Contributions’ section of your shared ‘Negotiation Language – Other Possible Phrases’ doc. Practice: pairs (groups of 3 where needed). Make sure they respond in all 4 ways; they don’t need one long string. Model it first.' }
          ],
          answers: { title: 'Example phrases', items: [
            ['Refer back (examples)', 'Going back to what (name) said about…, … · That reminds me of… in (region). · Building on your point about…, …'],
            ['Agree / oppose (examples)', 'I see your point, but… · That’s true, and also… · I’m not sure I agree, because…'],
            ['Significance (examples)', 'That’s a really important point because… · That’s a key issue, especially for…'],
            ['Summarising (examples)', 'So, overall we seem to agree that… · To sum up what we’ve said so far, …'],
            ['Model response (Student B)', 'A: “It’s easy and cheap to eat healthy food — you can buy rice and vegetables.” · B (opposing point): “I see your point, but in some areas fresh food is expensive, so people buy cheap processed food.”']
          ]}
        },
        {
          id: 'n7', short: 'Week 4 task', minutes: 15, grouping: 'Research group',
          title: 'Get ready for the Week 4 discussion',
          goal: 'Check your solutions article with your group and plan your notes.',
          blocks: [
            { type: 'key', title: 'Next week: a new article, a new focus', compare: [
              { label: 'WEEK 2', text: '<b>Causes and effects</b> of food insecurity in a certain region.' },
              { label: 'WEEK 4', text: '<b>Solutions</b> to food insecurity in a certain region — already implemented or suggested.' }
            ], points: ['<b>Step 2:</b> each student prepares a <b>2-minute verbal summary</b> of their source (main ideas and highlights) to share with the other two members of the group in class.'] },
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your <b>research group</b>. Compare the names of your articles. Same article? Someone must find a <b>new source</b>.' },
              { who: 'group', text: 'Each person explains briefly why their source passes the <b>CRAAP test</b>.' },
              { who: 'alone', text: 'Look at the note-taking template. You can use it at home to prepare your summary — or use your own technique.' }
            ]},
            { type: 'talk', title: 'Tell your group: does my source pass the CRAAP test?', prompts: [
              '<b>Currency:</b> When was it published?',
              '<b>Relevance:</b> Is it about solutions in our region?',
              '<b>Authority:</b> Who wrote it? Are they qualified?',
              '<b>Accuracy:</b> Is it supported by evidence?',
              '<b>Purpose:</b> Why was it written — to inform, persuade or sell?'
            ]},
            { type: 'fields', title: 'Note-taking template (optional)', fields: [
              { id: 'n7-1', label: 'Article title · Authors · Year of publication · Link', placeholder: 'Title: … Authors: … Year: … Link: …', rows: 3 },
              { id: 'n7-2', label: 'Overview · Reason for choosing', placeholder: 'This article is about … I chose it because …', rows: 2 },
              { id: 'n7-3', label: 'Method for research', placeholder: 'The authors surveyed / interviewed / analysed …', rows: 2 },
              { id: 'n7-4', label: 'Main topics → sub-topics → supporting ideas', placeholder: '- (Main topic)\n   (Sub-topic)\n   (supporting idea, if relevant)\n- …', rows: 5 }
            ]},
            { type: 'teacher', text: 'Task reminder (2–3 min): direct Ss to the full task instructions on the assessment overview page if they have questions. Template (1–2 min): no need to do anything with it in class — they can use it or their own technique; it is a good idea to try different note-taking techniques. Group check-in (10 min): if articles overlap, decide who finds a new one (a volunteer, a back-up, or toss a coin). If a student has NOT found an article and/or done the CRAAP test, remind them they must find and summarise it for next week.' }
          ]
        },
        {
          id: 'n8', short: 'Reflect', minutes: 15, grouping: 'Alone → group',
          title: 'Reflect and make an action plan',
          goal: 'Check your research progress and plan how to improve your summary.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Open your <b>DEC 15 Research Summary Discussion self-reflection form</b>. Scroll to <b>Week 3–4</b>. Answer the 4 ‘Conducting research’ questions: <b>Yes</b>, <b>Mostly</b> or <b>Needs work</b>. Add comments and an action plan.' },
              { who: 'alone', text: 'Scroll up to <b>Week 1–2</b>. Look at your action plan for <b>‘Summarising research’</b>. What issues did you have last time?' },
              { who: 'group', text: 'Share one problem and one strategy with your group. Steal a good idea! Then <b>save</b> the form again.' }
            ]},
            { type: 'table', id: 'n8t', title: 'Conducting research (Week 3–4)', columns: ['Question', 'Yes / Mostly / Needs work', 'Comments', 'Action plan for further improvement'], fixed: [
              'Were you able to use more efficient keywords to search for information online?',
              'Were you able to disregard irrelevant articles and find a relevant source fairly quickly?',
              'Did you feel more confident using the CRAAP test?',
              'Do you feel prepared to independently evaluate sources for future assignments?'
            ]},
            { type: 'fields', fields: [
              { id: 'n8-1', label: 'Summarising research: what issues did I have last time?', placeholder: 'Last time I …', rows: 2 },
              { id: 'n8-2', label: 'How can I improve my note-taking and summarising?', placeholder: 'This time I will …', rows: 2 }
            ]},
            { type: 'steps', title: 'After class', items: [
              { who: 'alone', text: 'Prepare your <b>2-minute verbal summary</b> of your source to share with your research group next week.' },
              { who: 'alone', text: 'Revise the 5 steps to summarise your article (put them in order below) and the phrases for summarising a source (W2 D1).' }
            ]},
            { type: 'order', id: 'n8o', title: 'The 5 steps of your summary', items: ['Introduce the source', 'Say why you chose the source', 'Introduce research methods', 'Introduce the main points of the source', 'Final comment on the source'] },
            { type: 'language', title: 'Phrases for summarising a source', groups: [
              { label: '1) Introducing the source', phrases: ['I found this great article called…', 'In my research I found an interesting source called…', 'The article is about…', 'It was written by… in…', 'The article I came across in my research was about….'] },
              { label: '2) Saying why you chose the source', phrases: ['I chose this article because it provides a comprehensive look at…', 'This article is relevant for our research because….', 'I thought this article looked like the most interesting one to read', 'I selected this article because I wanted to learn more about…'] },
              { label: '3) Introducing research methods', phrases: ['The authors surveyed 500 residents of…', 'The article included data collected in experiments…', 'In the study they conducted…', 'To gather data, they conducted a questionnaire…'] },
              { label: '4) Introducing the main points of the source', phrases: ['The article begins by explaining that…', 'And according to Garnett and Simmons…', 'Another interesting point from the article was that…', 'They also state that…', 'Interestingly, my article points out that…', 'So basically, (authors’ names) assert that…', 'The authors suggest that…'] },
              { label: '5) Final comment on the source', phrases: ['So, that’s the gist of what the article covered.', 'Ultimately, this article contributes significantly to our understanding of the topic', 'For me, it really sheds light on the complexity of the issues.', 'Overall, it was a really interesting and comprehensive study.'] }
            ]},
            { type: 'teacher', text: 'Before the lesson, check Ss completed yesterday’s homework (self-reflection on the practice Interactive Writing Assessment) — they need it again in W4 D5. Self-regulation (5 min): check Ss understand the questions and give examples. Q1 Comments = ‘much easier than last time’; Action plan = ‘always brainstorm keywords before beginning research’. Q2 Comments = ‘There were a lot more search results this time, so it was difficult to choose’; Action plan = ‘pay close attention to article/text titles and skim read journal abstracts where possible’. Ss can finish at home. Make sure Ss download and save the document. Alternative: a Google Doc in your class group page. Action plan (10 min): individually, then with a partner/group. If they did not save the previous form, they download a new one and think back.' }
          ],
          answers: { title: 'Examples', items: [
            ['Q1 (example)', 'Comments: much easier than last time. · Action plan: always brainstorm keywords before beginning research.'],
            ['Q2 (example)', 'Comments: there were a lot more search results this time, so it was difficult to choose. · Action plan: pay close attention to article/text titles and skim read journal abstracts where possible.'],
            ['Summarising (example)', 'Issue: I read from my notes too much. · Strategy: write key words only, and practise my 2-minute summary aloud with a timer twice.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 2 · 16A ───────────────────────── */
    {
      id: 'teamwork', number: '02', code: '16A', minutes: 60,
      tone: 'clay', art: 'group',
      title: 'Work well as a team',
      subtitle: 'AST: Group work skills',
      outcome: 'Understand the benefits and key steps of successful group work, and make a teamwork contract with your research group.',
      activities: [
        {
          id: 't1', short: 'Lead-in', minutes: 10, grouping: 'Research group',
          title: 'Is your group ready?',
          goal: 'Check that everyone in your research group understands the plan.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your <b>research group</b> (3 people) for the <b>Research Summary Discussion</b>.' },
              { who: 'group', text: 'Discuss each question. Tick it only if <b>all members</b> can say yes.' }
            ]},
            { type: 'checklist', id: 't1c', title: 'Do all members of the group…', items: [
              'understand the task?',
              'know who does what?',
              'understand what the ‘final product’ is?',
              'know what the deadline is?',
              'know when you have planned to prepare for this task?'
            ]},
            { type: 'tip', text: 'Any box not ticked? Agree on an answer now — you will put it into your teamwork contract later.' }
          ]
        },
        {
          id: 't2', short: 'Why groups?', minutes: 10, grouping: 'Groups of 3',
          title: 'Why work in groups?',
          goal: 'Discuss the benefits of group work at university.',
          blocks: [
            { type: 'talk', title: 'Talk in your group', prompts: [
              'What are the biggest advantages of working in a group compared to working alone?',
              'What skills do you develop when working with others on a group project?',
              'How can teamwork prepare you for real-world work environments?',
              'Why is communication important in a group project?',
              'What strategies can a group use to make sure tasks are divided fairly and completed on time?'
            ]},
            { type: 'key', title: 'Benefits of group work at university', points: [
              '<b>Learn from others</b> — hear different ideas and perspectives. · <b>Build teamwork skills</b> — collaborate, communicate and solve problems.',
              '<b>Prepare for the workplace</b> — many jobs need teamwork. · <b>Share the workload</b> — big projects become manageable.',
              '<b>Improve communication</b> — express ideas, listen, work through disagreements. · <b>Gain new skills</b> — leadership, organisation, time management.',
              '<b>Make connections</b> — friendships or professional networks. · <b>Boost creativity</b> — different strengths lead to better results.'
            ]},
            { type: 'talk', title: 'Then decide', prompts: ['Which of these benefits is <b>most important to you</b>? Why?'] }
          ]
        },
        {
          id: 't3', short: 'Key steps', minutes: 10, grouping: 'Pairs',
          title: 'Ten steps to successful group work',
          goal: 'Match each step to its description.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Read each description. Choose the matching <b>heading</b>. Then check.' },
              { who: 'pair', text: 'Which <b>two</b> steps will be hardest for your research group? Tell another pair.' }
            ]},
            { type: 'grid', id: 't3g', title: 'Match the headings with the descriptions', columns: ['Heading'], options: ['Set clear goals', 'Give everyone a role', 'Make a plan and deadlines', 'Communicate often', 'Work as a team', 'Solve problems quickly', 'Be responsible', 'Be flexible', 'Use technology', 'Review the work'], rows: [
              'Meet or talk regularly to check progress and share ideas. Listen carefully to each other and explain your thoughts clearly.',
              'Use online tools like Google Docs or other apps to share work and ideas. Keep everything in one place so everyone can find it easily.',
              'Decide what the group needs to do and what the final result should be. Consider what you would like to achieve. Break the project into smaller tasks.',
              'Do your part of the work on time and as well as you can. Check in with the group to make sure things are going well.',
              'Create a plan with steps for the project. Decide when each part needs to be finished.',
              'Look at the progress often and make changes if needed. After finishing, think about what went well and what could be better next time.',
              'If there is a disagreement, talk about it calmly and find a solution. Focus on working together, not on who is right or wrong.',
              'Think about what each person is good at and give them a task that matches their skills. Make sure everyone knows what they need to do.',
              'Be open to suggestions and ready to change the plan or your role if something doesn’t work. Try to help team members if they have problems.',
              'Share ideas and help each other solve problems. Make decisions together and respect everyone’s opinion.'
            ], answers: [['Communicate often'], ['Use technology'], ['Set clear goals'], ['Be responsible'], ['Make a plan and deadlines'], ['Review the work'], ['Solve problems quickly'], ['Give everyone a role'], ['Be flexible'], ['Work as a team']] },
            { type: 'teacher', text: 'TB order: 1 Set clear goals · 2 Give everyone a role · 3 Make a plan and deadlines · 4 Communicate often · 5 Work as a team · 6 Solve problems quickly · 7 Be responsible · 8 Be flexible · 9 Use technology · 10 Review the work. The descriptions are mixed here so students must read them.' }
          ]
        },
        {
          id: 't4', short: 'Contract', minutes: 30, grouping: 'Research group',
          title: 'Make a teamwork contract',
          goal: 'Agree how your research group will work together for the Week 4 discussion.',
          blocks: [
            { type: 'key', title: 'A teamwork contract', points: [
              'An agreement that explains <b>what is expected</b> from each person, their <b>responsibilities</b>, and <b>how</b> the group will work together.',
              'It encourages good communication, responsibility and respect. Make it <b>early</b> in a project. Each member <b>signs and dates</b> it.'
            ]},
            { type: 'model', title: 'Example: a general teamwork contract', rows: [
              ['Title', 'Teamwork contract for [assessment/project name]'],
              ['Purpose', 'To complete [assessment/project name] by [deadline] with high quality and on time.'],
              ['Roles and responsibilities', '[Member A]: Research and data collection. [Member B]: Writing and editing. [Member C]: Presentation design'],
              ['Communication', 'Weekly meetings on [day/time]. Use Google Doc for updates and questions.'],
              ['Decision-making', 'Majority vote on key decisions.'],
              ['Deadlines', 'Draft completed by [date]. Final submission by [date].'],
              ['Behaviour', 'Respect all ideas, contribute equally, and provide constructive feedback.'],
              ['Conflict resolution', 'Disputes will be mediated by [team leader].']
            ]},
            { type: 'steps', items: [
              { who: 'group', text: '<b>5 min.</b> Discuss the four questions below.' },
              { who: 'group', text: '<b>15 min.</b> Write your contract together in a <b>shared doc</b>. Use the headings below (one person types; everyone agrees).' },
              { who: 'group', text: '<b>5 min.</b> Read it aloud. Is it fair? Is it specific? Then everyone <b>signs and dates</b> it.' },
              { who: 'alone', text: 'Copy your group’s contract into the boxes below so you have it in your notebook.' }
            ]},
            { type: 'talk', title: 'Before you write', prompts: [
              'a. What do you hope to achieve through this group work task?',
              'b. What are your expectations of yourself and your groupmates?',
              'c. How can you share work, make decisions and resolve conflict fairly?',
              'd. How can you effectively communicate and manage time?'
            ]},
            { type: 'fields', title: 'Our teamwork contract: Research Summary Discussion (Week 4)', fields: [
              { id: 't4-1', label: 'Purpose', placeholder: 'To complete … by … with …', rows: 2 },
              { id: 't4-2', label: 'Roles and responsibilities', placeholder: '[Name]: … [Name]: … [Name]: …', rows: 3 },
              { id: 't4-3', label: 'Communication', placeholder: 'We will meet / message on … We will use … for …', rows: 2 },
              { id: 't4-4', label: 'Decision-making', placeholder: 'We will make key decisions by …', rows: 2 },
              { id: 't4-5', label: 'Deadlines', placeholder: 'Article found and CRAAP-tested by … Summary notes ready by …', rows: 2 },
              { id: 't4-6', label: 'Behaviour', placeholder: 'We will …', rows: 2 },
              { id: 't4-7', label: 'Conflict resolution', placeholder: 'If we disagree, we will …', rows: 2 },
              { id: 't4-8', label: 'Signed and dated', placeholder: 'Names + date', rows: 1 }
            ]},
            { type: 'teacher', text: 'Allow 20–30 min. Groups create the contract in a shared doc (e.g. Google Doc). Circulate and push for specific answers (days, times, names). Link to 16A step 1: deadlines and roles should match what they checked in the lead-in.' }
          ],
          answers: { title: 'A model contract', items: [
            ['Purpose', 'To give clear 2-minute summaries of three different solutions articles and to discuss and negotiate well in the Research Summary Discussion (Week 4, Thursday).'],
            ['Roles', 'Each member: finds and summarises one different article about solutions in our region. Ana: time-keeper in practice sessions · Ben: shares the group doc · Chen: checks everyone’s CRAAP notes.'],
            ['Communication', 'Group chat for quick questions; a 15-minute online meeting on Sunday at 7 pm to practise our summaries.'],
            ['Decision-making', 'We discuss first; if we cannot agree, majority vote.'],
            ['Deadlines', 'Articles checked (no overlap) by Saturday · summary notes ready by Monday · practice run on Tuesday.'],
            ['Behaviour', 'Respect all ideas, contribute equally, reply within 24 hours and give constructive feedback.'],
            ['Conflict resolution', 'Talk about it calmly in the next meeting; if needed, we ask our teacher.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 3 · 17A ───────────────────────── */
    {
      id: 'prompts', number: '03', code: '17A', minutes: 60,
      tone: 'blue', art: 'ai',
      title: 'Write better AI prompts',
      subtitle: 'AST: Digital literacy and AI — prompts',
      outcome: 'Recognise clear, specific prompts and write your own prompt using Role · Task · Requirements · Instructions.',
      activities: [
        {
          id: 'p1', short: 'Guess', minutes: 10, grouping: 'Groups of 3',
          title: 'Warm-up: guess the prompt',
          goal: 'Think about how a prompt shapes an AI answer.',
          blocks: [
            { type: 'talk', title: 'Talk in your group (3 min)', prompts: [
              'Have you used AI this week? If so, what for?',
              'Which AI tools did you use? Which one do you prefer? Why?'
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Read the three AI outputs. <b>Guess</b> the prompt for each one. Write it below.' },
              { who: 'group', text: 'Compare with the suggested prompts. Are they <b>specific and clear</b>? How could they be improved?' }
            ]},
            { type: 'cards', title: 'AI outputs', numbered: true, items: [
              { text: '“Top 5 ways to reduce food waste at home: Plan your meals before shopping, store fruits and vegetables properly, use leftovers creatively, freeze perishable items, and compost food scraps.”' },
              { text: '“Composting food waste has several environmental benefits, such as reducing methane emissions, improving soil health, and decreasing the need for chemical fertilizers.”' },
              { text: '“A 3-day meal plan using leftovers: Day 1 – Stir-fry with leftover veggies, Day 2 – Soup made from vegetable scraps, Day 3 – Casserole with leftover grains and proteins.”' }
            ]},
            { type: 'fields', fields: [
              { id: 'p1-1', label: 'Prompt for output 1', placeholder: 'Give / List …', rows: 2 },
              { id: 'p1-2', label: 'Prompt for output 2', placeholder: 'Explain …', rows: 2 },
              { id: 'p1-3', label: 'Prompt for output 3', placeholder: 'Create …', rows: 2 }
            ]}
          ],
          answers: { title: 'Suggested prompts', items: [
            ['1', '“Provide 5 practical tips for reducing food waste at home, focusing on meal planning, storage, and creative use of leftovers.”'],
            ['2', '“Explain the environmental benefits of composting food waste, including its impact on methane emissions, soil health, and chemical fertilizer use.”'],
            ['3', '“Create a 3-day meal plan using leftovers, focusing on creative and easy recipes that reduce food waste.”']
          ]}
        },
        {
          id: 'p2', short: 'Prompts', minutes: 5, grouping: 'Whole class',
          title: 'What is a prompt?',
          goal: 'Understand what a prompt is and why a clear one matters.',
          blocks: [
            { type: 'key', title: 'A prompt = your instructions to an AI tool', points: [
              '<b>Prompts are instructions:</b> they tell the AI what to do or what to talk about. They can be a question, a statement or a creative idea.',
              '<b>They guide the AI:</b> a clear and specific prompt helps the AI understand exactly what you want. <b>They are flexible:</b> change the prompt to get a different response.'
            ]},
            { type: 'key', title: 'Weak or strong?', compare: [
              { label: 'WEAK', text: 'Too vague — the AI might not know what kind of information you need.', eg: '“Tell me about food waste.”' },
              { label: 'STRONG', text: 'Clear and specific — the AI can give a focused, useful response.', eg: '“Explain three ways to reduce food waste at home, with examples for each.”' }
            ]},
            { type: 'teacher', text: 'Keep this short (TB note): spend most of the time on students writing their own prompts.' }
          ]
        },
        {
          id: 'p3', short: 'Evaluate', minutes: 15, grouping: 'Pairs',
          title: 'Is it a good prompt?',
          goal: 'Judge prompts for clarity and specificity, and learn the 4 parts of a good prompt.',
          blocks: [
            { type: 'key', title: 'Tips for good prompting', points: [
              '<b>Be clear:</b> easy to understand, no room for confusion. <i>“Explain how recycling helps the environment, with three examples.”</i>',
              '<b>Be specific:</b> the AI makes assumptions if you don’t explain (vegetarian? quick? budget?). <b>Use the conversation:</b> ask follow-up questions to improve the result.'
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Read each prompt. Is it <b>strong</b>, <b>OK</b> or <b>weak</b>? Why? Then check.' },
              { who: 'pair', text: 'Look at the 4 parts of a good prompt. Find them in prompt 4.' }
            ]},
            { type: 'quiz', id: 'p3q', title: 'Evaluate five prompts', shared: ['Strong', 'OK – could be better', 'Weak'], items: [
              { q: '1. Tell me about food waste.', answer: 'Weak', why: 'Too vague: “food waste” can mean causes, impacts or solutions. No details. Better: “Explain the main environmental consequences of food waste and suggest ways to reduce it.”' },
              { q: '2. What are some strategies to reduce food waste in restaurants? Provide at least three examples.', answer: 'OK – could be better', why: 'Clear, with a task and a quantity (at least three). A good prompt, but it could name the type of strategies (e.g. storage, portion control, customer education).' },
              { q: '3. Explain why food waste is bad.', answer: 'Weak', why: 'Too broad (environmental, economic or ethical?) and asks for no examples. Better: “Explain three major negative impacts of food waste on the environment and economy, with examples.”' },
              { q: '4. As a sustainability consultant, outline five cost-effective strategies restaurants can implement to minimize food waste, considering food storage, portion control, and staff training.', answer: 'Strong', why: 'Very clear: it defines the role, task and scope, the number of strategies and the key focus areas. Excellent.' },
              { q: '5. Give me a list of ways to reduce food waste at home.', answer: 'OK – could be better', why: 'Clear (food waste at home) but not focused. Better: “Provide five practical tips for reducing food waste at home, focusing on meal planning and storage techniques.”' }
            ]},
            { type: 'figure', src: 'assets/week3/prompt-parts.svg', alt: 'A good AI prompt has four parts: Role (act as…), Task (provide…), Requirements (focus on…), Instructions (include…).', caption: 'The structure of a good prompt' },
            { type: 'key', title: 'Role · Task · Requirements · Instructions', numbered: true, points: [
              '<b>Role</b> — “Act as…” / “Pretend to be…”. It decides the type of information and how it is communicated. <i>E.g. act as an expert in the field of computer science.</i>',
              '<b>Task</b> — what you want the AI to do. Be specific about the objective.',
              '<b>Requirements</b> — the details and conditions, so the AI does not make wrong assumptions (e.g. context, length, format).',
              '<b>Instructions</b> — how the AI should complete the task: steps, examples, what to include.'
            ]},
            { type: 'teacher', text: 'TB overall ratings: 1 poor · 2 good but could be slightly refined · 3 weak · 4 excellent · 5 decent but could be more targeted. In the app: 2 and 5 = “OK – could be better”. Prompt 4 parts: Role = sustainability consultant · Task = outline five cost-effective strategies · Requirements = restaurants, cost-effective · Instructions = consider food storage, portion control, staff training.' }
          ]
        },
        {
          id: 'p4', short: 'Write', minutes: 12, grouping: 'Alone',
          title: 'Write your own prompt',
          goal: 'Write a 4-part prompt for an AI tool to generate solutions for food waste.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Complete the 4 parts. Choose <b>one context</b> (e.g. homes, restaurants, schools, supermarkets).' },
              { who: 'alone', text: 'Join the parts into <b>one full prompt</b> in the last box.' }
            ]},
            { type: 'fields', fields: [
              { id: 'p4-1', label: 'Role: Act as…', placeholder: 'Act as a …', rows: 1 },
              { id: 'p4-2', label: 'Task: Provide…', placeholder: 'Provide …', rows: 2 },
              { id: 'p4-3', label: 'Requirements: Focus on…', placeholder: 'Focus on …', rows: 2 },
              { id: 'p4-4', label: 'Instructions: Include…', placeholder: 'Include …', rows: 2 },
              { id: 'p4-5', label: 'My full prompt', placeholder: 'Act as … and provide … Focus on … Include …', rows: 4 }
            ]}
          ],
          answers: { title: 'Suggested answer', items: [
            ['Role', 'Act as an environmental scientist or sustainability expert.'],
            ['Task', 'Provide actionable solutions for reducing food waste.'],
            ['Requirements', 'Focus on a specific context (e.g. homes, restaurants, schools).'],
            ['Instructions', 'Include examples or step-by-step guidance.'],
            ['Example prompt', '“Act as a sustainability expert and provide 5 creative ways restaurants can reduce food waste, including tips for inventory management and portion control.”'],
            ['Example prompt', '“Act as an environmental scientist and explain how composting food waste benefits the environment, with examples of how households can start composting.”']
          ]}
        },
        {
          id: 'p5', short: 'Test', minutes: 18, grouping: 'Pairs',
          title: 'Give feedback, then test your prompt',
          goal: 'Improve your prompt with peer feedback and see how the AI responds.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: '<b>Swap</b> prompts with a partner. Use the checklist to give feedback. Then improve your own prompt.' },
              { who: 'alone', text: '<b>Test</b> your prompt in an approved tool: <b>Copilot</b> or <b>Cogniti</b> (Vanilla).' },
              { who: 'pair', text: '<b>Discuss:</b> Did the AI give useful solutions for food waste? How could the prompt be improved further? Try one follow-up question.' }
            ]},
            { type: 'checklist', id: 'p5c', title: 'Peer checklist: my partner’s prompt', items: [
              'Is the role clear?',
              'Is the task specific?',
              'Are the requirements detailed?',
              'Are the instructions clear?'
            ]},
            { type: 'key', title: 'Remember the University AI rules (W2 D5)', tone: 'warn', points: [
              'Use AI here to <b>practise prompting</b> — not to write your assessed work. Your <b>unit coordinator</b> decides if AI is allowed. If nobody says it is allowed, don’t use it.',
              'AI answers can be <b>wrong</b>. Always check the information against reliable sources.'
            ]},
            { type: 'fields', fields: [
              { id: 'p5-1', label: 'My improved prompt', placeholder: 'Act as … provide … focus on … include …', rows: 3 },
              { id: 'p5-2', label: 'Was the AI response useful? What would I change?', placeholder: 'The response was useful / not very useful because … Next time I will add …', rows: 3 }
            ]},
            { type: 'teacher', text: 'TB lists ChatGPT, Copilot or Vanilla on Cogniti; in DEC15 point students to the University-approved tools (Copilot, Cogniti). Ask 2–3 pairs to share their before/after prompts and the difference in the output.' }
          ],
          answers: { title: 'Example reflection', items: [
            ['Reflection', 'The first answer was too general. I added “for university student households in Sydney, on a small budget” and asked for a table. The second answer was more practical. Next time I will ask it to explain each step.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 4 · 18A ───────────────────────── */
    {
      id: 'rapport', number: '04', code: '18A', minutes: 30,
      tone: 'amber', art: 'discussion',
      title: 'Building rapport',
      subtitle: 'Connecting as a class (teacher-led)',
      outcome: 'Build connections with your classmates in a supportive, communicative activity.',
      activities: [
        {
          id: 'r1', short: 'Rapport', minutes: 30, grouping: 'Whole class',
          title: 'Building rapport',
          goal: 'Get to know your classmates better and help build a supportive class.',
          blocks: [
            { type: 'key', title: 'What is this session?', points: [
              'Building rapport sessions help us develop connections in our classroom. <b>Your teacher plans and guides</b> the activity.',
              'Follow your teacher’s lead, take part actively and contribute positively.'
            ]},
            { type: 'steps', items: [
              { who: 'class', text: 'Listen to your teacher’s instructions for today’s activity.' },
              { who: 'group', text: 'Take part, and try to use one phrase from today’s negotiation language.' }
            ]},
            { type: 'cards', title: 'Two optional ideas (your teacher chooses)', numbered: true, items: [
              { label: 'Island negotiation', text: 'Your group is going to a desert island. You can take only <b>three things</b>. Each person suggests one item and justifies it. Then <b>negotiate</b> to choose the best three.' },
              { label: 'Two truths and a lie', text: 'Tell your group three facts about yourself — one is false. Your group asks <b>clarification questions</b> (“So, you’re saying that…?”) and guesses the lie.' }
            ]},
            { type: 'teacher', text: '18A is teacher-led (30 min). The two ideas are optional and recycle today’s language (justifying opinions, clarification). Use your own activity if you prefer.' }
          ]
        }
      ]
    }
  ],

  /* ───────────── Optional independent practice ───────────── */
  extras: [
    {
      id: 'x1', short: 'Rehearse', minutes: 20, grouping: 'Alone', category: 'Homework',
      title: 'Rehearse your 2-minute summary',
      goal: 'Practise your Week 4 summary aloud and time it.',
      blocks: [
        { type: 'steps', items: [
          { who: 'alone', text: 'Make <b>key-word notes</b> for the 5 steps (use the template in Stage 1, Activity 7).' },
          { who: 'alone', text: 'Say your summary aloud with a timer. Record yourself on your phone if you can.' },
          { who: 'alone', text: 'Listen back. Tick the checklist. Then try once more.' }
        ]},
        { type: 'checklist', id: 'x1c', title: 'My summary', items: [
          'It is about 2 minutes long.',
          'I introduced the source (title, authors, year).',
          'I said why I chose it and how the research was done.',
          'I explained the main points — the solutions — in my own words.',
          'I finished with a final comment.',
          'I spoke from key words, not from full sentences.'
        ]},
        { type: 'fields', fields: [{ id: 'x1-1', label: 'My time and one thing to improve', placeholder: 'Time: … Next time I will …', rows: 2 }] }
      ]
    },
    {
      id: 'x2', short: 'Phrase hunt', minutes: 15, grouping: 'Alone', category: 'Extra listening',
      title: 'Phrase hunt in the discussion transcript',
      goal: 'Find negotiation language in the full sample discussion.',
      blocks: [
        { type: 'sources', ids: ['discussion-sample'] },
        { type: 'steps', items: [
          { who: 'alone', text: 'Open the transcript. Find one more example of each function.' },
          { who: 'alone', text: 'Write a sentence using each phrase about <b>food insecurity in your research region</b>.' }
        ]},
        { type: 'table', id: 'x2t', columns: ['Function', 'Phrase from the transcript', 'My sentence'], fixed: [
          'Asking for clarification',
          'Giving and justifying an opinion',
          'Asking for an opinion',
          'Building on others’ contributions'
        ]}
      ],
      answers: { items: [
        ['Examples', 'Clarification: “Do you mean like bird flu?” · Opinion: “For me, this is the most serious consequence because…” · Asking: “Which one do you think we should choose?” · Building on: “Well, this ties into what we were saying earlier about…”']
      ]}
    }
  ],

  /* Word help: [word, plain meaning, example]. */
  glossary: [
    ['negotiation', 'Discussing something with other people and trying to reach an agreement.', 'The negotiation stage of the discussion.'],
    ['clarification', 'Making something easier to understand, often by asking a question.', 'So, you’re saying that…?'],
    ['justify', 'Give reasons or evidence for an opinion.', 'Justify your choice with an example from your research.'],
    ['contribution', 'What a person says or adds to a discussion.', 'Build on others’ contributions.'],
    ['paraphrase', 'Say the same idea in different words.', '“those types of diseases” instead of “zoonotic diseases”'],
    ['interlinked', 'Connected to each other, so one affects the other.', 'The three problems are all interlinked.'],
    ['zoonotic diseases', 'Infectious diseases that can pass from animals to humans.', 'Bird flu is an example.'],
    ['animal welfare', 'How well animals are treated and cared for.', 'The UK has strict animal welfare laws.'],
    ['CRAAP test', 'A check of a source: Currency, Relevance, Authority, Accuracy, Purpose.', 'Does my article pass the CRAAP test?'],
    ['teamwork contract', 'A written agreement about how a group will work together.', 'Each member signs and dates the contract.'],
    ['majority vote', 'A decision made by choosing what most people want.', 'We will use a majority vote on key decisions.'],
    ['prompt', 'The instructions or question you give to an AI tool.', 'Act as a sustainability expert and…'],
    ['specific', 'Clear and exact, with details.', 'Be specific: three examples, for restaurants.'],
    ['rapport', 'A friendly, good relationship between people.', 'Building rapport in our class.']
  ]
};
