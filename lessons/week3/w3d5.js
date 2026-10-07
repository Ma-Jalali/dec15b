/* DEC15 · Week 3, Day 5 — lesson content (redesigned v2.13: more games, more talk, less reading).
   Teacher’s Book lessons (names as in the TB):
   15A Discussion skills (90) · 16A AST: Group work skills (60) ·
   17A AST: Digital Literacy and AI: Prompts (60) · 18A Building rapport (30, teacher-led).
   Activity titles use the Teacher’s Book headings so students can find the same part in both.
   Block types: lessons/_template.js and js/play.js (flash, sort, flip, spinner, chat, promptbuilder, contract). */

window.DEC15_LESSON = {
  id: 'w3d5',
  week: 3, day: 5,
  title: 'Negotiate, work as a team, write better prompts',
  duration: 'About 4 hours',
  question: 'How do we negotiate well in an academic discussion — and work well as a team?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus',
  wordTarget: '',
  image: 'assets/week3/hero-w3d5.svg',
  imageAlt: 'Three speech bubbles in conversation — “So, you mean…?” (clarify), “For me… because…” (justify) and “Like you said…” (build on it) — beside a signed teamwork contract and a laptop showing an AI prompt in four coloured parts.',

  journey: 'A day of talking, not just reading. Play a memory game, listen to real students negotiate, sort and spin your way to the language of clarifying, justifying and building on ideas — then sign a teamwork contract with your research group and build an AI prompt that really works.',
  finish: { title: 'Week 4', text: 'Research Summary Discussion 2' },

  sections: [
    /* ───────────────────────── 15A Discussion skills ───────────────────────── */
    {
      id: 'negotiate', number: '01', code: '15A', minutes: 90,
      tone: 'teal', art: 'discussion',
      title: 'Discussion skills',
      subtitle: 'Negotiate in a discussion',
      outcome: 'Identify and use language for negotiation in a discussion (clarification, giving opinions and building on others’ contributions), reflect on feedback on your 1st Research Summary Discussion, and monitor your progress for the 2nd.',
      activities: [
        {
          id: 'n1', short: 'Warmer', minutes: 10, grouping: 'Pairs',
          title: 'Warmer: Responding to a quote',
          goal: 'Remember a quote exactly, then respond to it with an example.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Decide who is <b>Student A</b> and who is <b>Student B</b>. Sit so only B can see the screen.' },
              { who: 'alone', text: '<b>Student A:</b> close your eyes and smile! <b>Student B:</b> press the button and <b>remember</b> the quote. Don’t say it or write it!' },
              { who: 'pair', text: '<b>Student B</b> tells the quote. <b>Student A</b> types it <b>exactly</b>. Then check word by word.' }
            ]},
            { type: 'flash', id: 'n1-1', title: 'Five seconds to remember', text: '‘Strong opinions are only valid when supported by stronger reasons.’', seconds: 5, reader: 'Student B', writer: 'Student A' },
            { type: 'talk', title: 'Now talk (2–3 min)', prompts: [
              'What is your response to this quote? Do you agree?',
              'Give an example from your study experience — your Week 2 discussion, for example.'
            ]},
            { type: 'key', title: 'An opinion needs a reason', points: [
              'In a discussion, an opinion without a reason is weak. <b>Justify</b> your opinion: say <b>why</b>, and give an <b>example</b> or evidence from your research.'
            ]},
            { type: 'teacher', text: 'Purpose: more practice of the Discussion task and an introduction to justifying opinions. Board version (TB): show the quote for 5 seconds only, then erase it: ‘Strong opinions are only valid when supported by stronger reasons.’ The app version does the same on Student B’s screen. Alternative (TB): give the scrambled version and feed them the 1st, 2nd word if they struggle — ‘stronger strong supported reasons by valid are only opinions when’. Ex 2: a couple of minutes only; remind Ss of their Week 2 discussion for examples. Ask some Ss to share. If they don’t mention it, stress that justifying your opinions strengthens your argument.' }
          ]
        },
        {
          id: 'n2', short: 'Discussion sample', minutes: 15, grouping: 'Alone → pair',
          title: 'Discussion sample',
          goal: 'Follow the negotiation stage of a Research Summary Discussion.',
          blocks: [
            { type: 'key', title: 'Step 5 of the Research Summary Discussion (15 minutes)', points: [
              '<b>Part 1:</b> discuss your response to a <b>quote</b> from one of the readings, with examples from your research.',
              '<b>Part 2:</b> you get a problem or question and <b>three possible answers</b>. Argue which answer is best. The focus is on <b>discussion and negotiation</b> — not necessarily reaching an agreement.'
            ]},
            { type: 'question', label: 'The sample discussion question (not your topic)', text: 'Which of the consequences of the modern agricultural production system is the most serious? health problems · environmental damage · animal rights violations. Give examples from the regions you have researched.' },
            { type: 'choose', id: 'n2p', title: 'Predict first: which consequence will the group choose as the most serious?', options: ['health problems', 'environmental damage', 'animal rights violations'] },
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Read</b> the 7 questions below (1 min).' },
              { who: 'class', text: '<b>Listen.</b> Your teacher plays the recording (Part 2: negotiation). Choose your answers.' },
              { who: 'pair', text: '<b>Compare</b> with a partner. Listen again. Then <b>check</b> — was your prediction right?' }
            ]},
            { type: 'listening', source: 'DEC15 sample recording', title: 'Research Summary Discussion — negotiation stage', videoId: '', transcripts: [['discussion-sample', 'Transcript (open after you check)']] },
            { type: 'quiz', id: 'n2q', title: 'Listen and choose', items: [
              { q: 'Which consequence do they discuss first?', options: ['health problems', 'environmental damage', 'animal rights violations'], answer: 'animal rights violations', why: '“This point links us to one of the other options in our question: animal rights violations.”' },
              { q: 'What is one solution offered to minimise animal rights violations?', options: ['eat less meat', 'don’t test products on animals', 'don’t keep pets'], answer: 'eat less meat', why: 'Student 4 suggests a largely plant-based diet; Student 1 is thinking about eating less meat.' },
              { q: 'Why do the students choose to stop discussing this solution?', options: ['because none of them want to change to a plant-based diet', 'because they don’t have any ideas about it', 'because it’s the focus of next week’s discussion'], answer: 'because it’s the focus of next week’s discussion', why: '“This solution may be something we should be focusing on next week, not today.”' },
              { q: 'Which countries have more animal welfare regulations?', options: ['Kenya and the UK', 'The Netherlands and the UK', 'The Netherlands and Kenya'], answer: 'The Netherlands and the UK', why: '“Like you said before about the UK, the Netherlands also has high animal welfare standards.”' },
              { q: 'Which issue is NOT mentioned as a cause for health problems?', options: ['diseases transmitted from animals to humans', 'chemical fertilizers', 'air pollution from factories'], answer: 'air pollution from factories', why: 'They mention chemical fertilizers, pesticides, zoonotic diseases and antibiotics — not factory air pollution.' },
              { q: 'What do the speakers say about the three options (problems) from the question?', options: ['they are all interlinked (connected)', 'they all have the same solution', 'they should be addressed in isolation'], answer: 'they are all interlinked (connected)', why: '“Environmental damage, animal welfare, and health issues are all critical and interlinked aspects of modern agriculture.”' },
              { q: 'Which consequence do they finally choose as the most serious?', options: ['health problems', 'environmental damage', 'animal rights violations'], answer: 'environmental damage', why: '“Environmental damage is the most serious consequence of the modern agricultural production system.”' }
            ]},
            { type: 'teacher', text: 'The recording is on Canvas only — play it from there. Remind Ss of the Step 5 instructions; today we hear only the ‘Negotiation’ part. This sample (modern agricultural production) is NOT their research topic. Give Ss time to read the questions and predict (the prediction poll) before you play. Let them compare before playing again. Answers: 1 animal rights violations · 2 eat less meat · 3 because it’s the focus of next week’s discussion · 4 The Netherlands and the UK · 5 air pollution from factories · 6 they are all interlinked · 7 environmental damage. (Q3 option text in the TB reads “the focus next week’s discussion”; “of” added.)' }
          ]
        },
        {
          id: 'n3', short: 'Negotiation', minutes: 5, grouping: 'Pairs',
          title: 'Discussion skills: Negotiation',
          goal: 'Understand what negotiation means in an academic discussion.',
          blocks: [
            { type: 'talk', title: 'Talk with your partner (2 min)', prompts: [
              'What does the word <b>negotiation</b> mean? (You can look it up.)',
              'What do students <b>do</b> when they negotiate in an academic discussion?'
            ]},
            { type: 'fields', fields: [{ id: 'n3-1', label: 'Negotiation means… In a discussion, students…', placeholder: 'Negotiation is … Students ask … they give … they …', rows: 2 }] },
            { type: 'figure', src: 'assets/week3/negotiation-skills.svg', alt: 'Four negotiation skills: 1 ask for clarification (“So, you’re saying that…?”), 2 ask for opinions and justification (“Why are you so firm with that choice?”), 3 give and justify opinions (“For me, … because…”), 4 build on others’ contributions (“Like you said before about…”). Together they build shared understanding.', caption: 'Today’s four skills for negotiation' },
            { type: 'teacher', text: 'Ss can look up ‘negotiation’, but they need to think about how it applies to an academic discussion. Tell Ss they will look at techniques and language for negotiation today and next week.' }
          ],
          answers: { items: [
            ['Meaning', 'The process of discussing something with someone and trying to reach an agreement.'],
            ['What students do', 'Clarify and understand different perspectives (ask open questions, summarise the other person’s view, confirm understanding) · establish common ground (shared values, objectives or interests) · respectfully address differences (use evidence, stay open to counterarguments) · propose and explore solutions (suggest and evaluate alternatives, hypothesise outcomes) · make concessions and compromise · reflective discussion.']
          ]}
        },
        {
          id: 'n4', short: 'Clarification', minutes: 10, grouping: 'Pairs',
          title: 'Negotiation language: Asking for clarification',
          goal: 'Check meaning and avoid difficult words without stopping the discussion.',
          blocks: [
            { type: 'chat', title: 'Activity 1 · Extract 1', lines: [
              ['Student 1', 'For me, this is the most serious consequence because it affects the foundation of life on Earth, including the air we breathe, the water we drink, and the food we eat.'],
              ['Student 5', 'So, you’re saying that our health is affected by the environment?'],
              ['Student 1', 'That’s right….']
            ]},
            { type: 'chat', title: 'Extract 2', lines: [
              ['Student 5', 'And in the Netherlands, the dense population and intensive farming methods increase the risk of zoonotic diseases. This is a significant public health concern.'],
              ['Student 1', 'What are zoonotic diseases?'],
              ['Student 5', 'They’re infectious diseases that can be transmitted from animals to humans.'],
              ['Student 4', 'Do you mean like bird flu?'],
              ['Student 5', 'Yeah, that’s a good example, Mark.'],
              ['Student 4', 'Well, in addition to those types of diseases, another issue that affects human health is the use of antibiotics in livestock, which can lead to antibiotic resistance']
            ]},
            { type: 'fields', title: 'Be the detective (read the extracts aloud with a partner)', fields: [
              { id: 'n4-1', label: '1. How does Student 5 clarify what Student 1 means in Extract 1?', placeholder: 'Student 5 says … and then …', rows: 1 },
              { id: 'n4-2', label: '2. Extract 2: which difficult word don’t 2 students know? What does it mean?', placeholder: 'The word is … It means …', rows: 1 },
              { id: 'n4-3', label: '3. How do the students check the meaning of unusual, technical terms?', placeholder: 'They ask … and then …', rows: 1 },
              { id: 'n4-4', label: '4. How does Student 4 avoid using the difficult expression without stopping the discussion?', placeholder: 'He replaces … with …', rows: 1 },
              { id: 'n4-5', label: '5. Why do you think Student 4 does this?', placeholder: 'Maybe …', rows: 1 }
            ]},
            { type: 'language', title: 'Clarification language', groups: [
              { label: 'Asking for a definition', phrases: ['What is/are…? (recording)', 'What does (X) mean?', 'How would you define (X)?'] },
              { label: 'Asking for clarification', phrases: ['So, you’re saying that…? (recording)', 'Do you mean like (example)? (recording)', 'I don’t really follow you. Could you explain what you mean?'] },
              { label: 'Avoiding difficult expressions', phrases: ['those types of (diseases) (recording)', '(issues) like that', 'The (problem) you mentioned'] }
            ]},
            { type: 'steps', title: 'Activity 2 · Mystery Aussie words', items: [
              { who: 'alone', text: '<b>Student A</b> takes cards 1–2, <b>Student B</b> takes cards 3–4. Turn over <b>only your own</b> cards — don’t let your partner see!' },
              { who: 'pair', text: 'A reads the sentence aloud. B <b>asks for the definition</b> (“What does … mean?”). A <b>gives</b> the definition.' },
              { who: 'pair', text: 'B <b>paraphrases</b> or gives an <b>example</b> to check: “So, you’re saying that…?” / “Do you mean like…?” Then <b>swap</b>.' }
            ]},
            { type: 'flip', items: [
              { tag: 'Student A · 1', front: 'I saw a <u>wobbegong</u> on the weekend.', backTitle: 'wobbegong', back: 'A flat-looking type of shark found in shallow, temperate and tropical waters around Australia.', art: 'assets/week3/aussie-wobbegong.svg' },
              { tag: 'Student A · 2', front: 'I really want to go and see <u>the outback</u>.', backTitle: 'the outback', back: 'The vast, remote, dry interior of Australia.', art: 'assets/week3/aussie-outback.svg' },
              { tag: 'Student B · 3', front: 'They went for a walk around the <u>billabong</u>.', backTitle: 'billabong', back: 'A stagnant pool that’s formed after a river changes its course.', art: 'assets/week3/aussie-billabong.svg' },
              { tag: 'Student B · 4', front: 'I love <u>lamingtons</u>!', backTitle: 'lamingtons', back: 'Square-shaped sponge cakes coated in a layer of chocolate icing and desiccated coconut.', art: 'assets/week3/aussie-lamington.svg' }
            ]},
            { type: 'teacher', text: 'You might choose Ss to read the extracts aloud. Check Q1 together before moving on; Ss can do Qs 2–5 with a partner. Activity 2: in the TB, Student A looks up the definition (in English); here the definitions are on the back of each card — make sure each student turns over only their own two cards. To extend, add more difficult words or ask Ss to think of their own. Definitions: wobbegong — a flat-looking type of shark found in shallow, temperate and tropical waters around Australia · billabong — a stagnant pool that’s formed after a river changes its course · the outback — the vast, remote, dry interior of Australia · lamingtons — square-shaped sponge cakes coated in a layer of chocolate icing and desiccated coconut.' }
          ],
          answers: { items: [
            ['1', 'The student says “So, you’re saying that…” and then paraphrases the other speaker.'],
            ['2', '<b>Zoonotic</b> (diseases) = infectious diseases that can be transmitted from animals to humans.'],
            ['3', 'Asks “What are…?” and then tries to think of an example to check (“Do you mean like bird flu?”).'],
            ['4', 'He replaces (paraphrases) the phrase “zoonotic diseases” with “those types of diseases”.'],
            ['5', 'Maybe he can’t remember the word or can’t pronounce it.']
          ]}
        },
        {
          id: 'n5', short: 'Opinions', minutes: 10, grouping: 'Pairs → group',
          title: 'Negotiation language: Asking for, giving and justifying opinions',
          goal: 'Sort strong and weak ways to give an opinion — then use them in a game.',
          blocks: [
            { type: 'sort', id: 'n5s1', title: 'Phrases for asking for opinions: what does each one do?', buckets: [
              { label: 'Also asks for justification' }, { label: 'Asks speakers to make a choice' }, { label: 'Asks generally for ideas' }
            ], items: [
              { text: 'b. Which one do you think we should choose?', answer: 1 },
              { text: 'a. Do you have any other thoughts about…?', answer: 2 },
              { text: 'd. Should we go with that option?', answer: 1 },
              { text: 'c. Why are you so firm with that choice?', answer: 0 }
            ]},
            { type: 'sort', id: 'n5s2', title: 'Phrases for giving and justifying opinions: strong or weak?', buckets: [
              { label: 'Weak — no justification' }, { label: 'With justification' }, { label: 'Reaffirming a choice', text: '“still” refers back to an earlier opinion' }
            ], items: [
              { text: 'C. I disagree! I think that if… we’d minimise…', answer: 1 },
              { text: 'E. I would still go with…', answer: 2 },
              { text: 'B. I agree.', answer: 0, why: 'Only “I agree” gives no reason or example.' },
              { text: 'F. For me, … because…', answer: 1 },
              { text: 'D. That’s why I still feel that…', answer: 2 },
              { text: 'A. I think it’s fair because…', answer: 1 }
            ]},
            { type: 'talk', title: 'Discuss', prompts: [
              'Which phrase does <b>not</b> make a strong argument? How could you improve it?',
              '<b>Brainstorm</b> other phrases to ask for and give opinions. Your teacher adds them to the class list — add your favourites below.'
            ]},
            { type: 'table', id: 'n5t', title: 'My phrases: giving opinions', columns: ['Function', 'My phrases'], fixed: [
              'Giving and justifying opinions',
              'Asking for opinions',
              'Asking for justification'
            ]},
            { type: 'spinner', id: 'n5sp', title: 'Spin and speak: “Australia has some of the best and most interesting animals in the world.”', text: 'Spin. Use the animal and the move in your answer. Express yourself fully — <b>opinion + reason + example</b>. Then pass the turn.', reels: [
              { label: 'Animal', start: 'Spin!', items: ['platypus', 'wombat', 'frilled-neck lizard', 'blue-tongue lizard', 'cassowary', 'echidna', 'dugong', 'quokka', 'wobbegong', 'an animal from your country'] },
              { label: 'Your move', start: '…', items: ['Give your opinion + a reason', 'Ask your partner’s opinion', 'Ask “Why…?” — ask for justification', 'Disagree and say why', 'Reaffirm your choice: “I would still go with…”', 'Compare with your country'] }
            ]},
            { type: 'teacher', text: 'Answers Part A: also asks for justification = c · asks for a choice = b & d · asks generally for ideas = a. Part B: weak argument without justification = B · with justification = A, C & F · reaffirming their choice = D & E (‘still’ refers back to a previous comment that has not changed). Discussion: simply saying ‘I agree’ is a weak form of discussion/negotiation — Ss should justify with examples and evidence. Brainstorm: type Ss’ phrases into the ‘Giving opinions’ section of your shared ‘Negotiation Language – Other Possible Phrases’ doc and display it. Practice: the superlative requires comparison with other countries; ‘the best’ is open to interpretation. The spinner uses the TB animal list (platypus, wombat, frilled-neck lizard, blue-tongue lizard, cassowary, echidna, dugong, quokka) plus the wobbegong.' }
          ],
          answers: { title: 'Discussion and example phrases', items: [
            ['Weak contribution', 'Simply saying “I agree” without any further comment is a weak form of discussion/negotiation. Express yourself more fully and justify your opinion with explanation, examples and evidence.'],
            ['Giving and justifying (examples)', 'In my opinion, … because… · I’m convinced that… The main reason is… · From what I read about (region), …'],
            ['Asking for opinions (examples)', 'What do you think about…? · How do you feel about…? · What’s your view on…?'],
            ['Asking for justification (examples)', 'What makes you say that? · Can you give an example from your research? · What evidence is there for that?']
          ]}
        },
        {
          id: 'n6', short: 'Shared understanding', minutes: 10, grouping: 'Pairs',
          title: 'Negotiation language: Building shared understanding',
          goal: 'Match techniques to examples, then respond to a partner in four ways.',
          blocks: [
            { type: 'sort', id: 'n6s', title: 'Techniques for building on others’ contributions: drag each recording extract to its technique', hint: '<b>Drag</b> each extract to a technique (some are used more than once — one extract does <b>two</b> jobs). Then find the words that do the job.', buckets: [
              { label: 'Refer back + add an explanation' },
              { label: 'Refer back + add a similar example from your research' },
              { label: 'Comment on the significance of another speaker’s contribution' },
              { label: 'Add to others’ ideas: agree or give an opposing point' },
              { label: 'Comment on previous contributions in general (summarise)' }
            ], items: [
              { text: '1) And like you said before about the UK, the Netherlands also has high animal welfare standards', answer: 1, why: '“And like you said before about…”' },
              { text: '2) <b>S5:</b> While regulations are in place, the reality of industrial farming often falls short of these ideals. <b>S1:</b> That’s right. It can be difficult to monitor whether the factory farms are always following the rules. <b>S4:</b> At least we can see there are actually rules in many areas, so there’s an attempt to control it.', answer: 3, why: '“That’s right. It can be difficult to…” agrees; “At least we can see there are actually…” gives an opposing point.' },
              { text: '3) Well, this ties into what we were saying earlier about the overuse of chemical fertilizers. This causes problems for the environment and people’s health.', answer: 0, why: '“Well, this ties into what we were saying earlier about…”' },
              { text: '4) <b>S4:</b> Antibiotics in livestock can lead to antibiotic resistance. <b>S1:</b> Yeah, this issue seems to be increasing around the world.', answer: 2, why: '“Yeah, this issue seems to be increasing around the world.”' },
              { text: '5) Well, all these points show that while the specifics might vary, the underlying issues are quite similar across different regions.', answer: 4, why: '“Well, all these points show that…”' },
              { text: '6) Yeah, you’re right. It’s clear that all these consequences are serious.', answer: [3, 4], why: '“Yeah, you’re right” agrees; “It’s clear that…” summarises (D/E).' }
            ]},
            { type: 'table', id: 'n6t', title: 'Brainstorm: my phrases for building on others’ contributions', columns: ['Function', 'My phrases'], fixed: [
              'Refer back + add an explanation or a similar example',
              'Agree or give an opposing point',
              'Comment on the significance of an idea',
              'Summarise the previous contributions'
            ]},
            { type: 'spinner', id: 'n6sp', title: 'Respond in four ways', text: '<b>Student A</b> gives an opinion on the statement for about 1 minute. <b>Student B</b> spins “Respond by…” and answers — do all four ways, one by one. Then swap.', reels: [
              { label: 'Statement', start: 'Spin!', items: ['Sydney is the best city in the world.', 'It’s easy and cheap to eat healthy food.'] },
              { label: 'Respond by…', start: '…', items: ['adding an explanation or a similar example', 'giving an opposing point', 'agreeing + commenting on the significance', 'summarising'] }
            ]},
            { type: 'language', title: 'Phrases from the recording', groups: [
              { label: 'Refer back + explanation / example', phrases: ['like you said before about…', 'this ties into what we were saying earlier about…'] },
              { label: 'Agree or give an opposing point', phrases: ['That’s right. It can be difficult to…', 'At least we can see there are actually…', 'Yeah, you’re right.'] },
              { label: 'Significance', phrases: ['Yeah, this issue seems to be increasing around the world.'] },
              { label: 'Summarising', phrases: ['Well, all these points show that while the specifics might vary, the underlying issues are quite similar across different regions.', 'It’s clear that all these consequences are serious.'] }
            ]},
            { type: 'teacher', text: 'Ss can do the matching and brainstorm in pairs/small groups OR as a whole class. Check each one before moving on. TB answers (A explanation · B similar example · C significance · D agree/oppose · E summarise): 1 B · 2 D · 3 A · 4 C · 5 E · 6 D/E. Brainstorm: type Ss’ phrases into the ‘Building on Others’ Contributions’ section of your shared ‘Negotiation Language – Other Possible Phrases’ doc. Practice (TB): Student A’s sentence: Sydney is the best city in the world. Student B’s sentence: It’s easy and cheap to eat healthy food. Pairs (groups of 3 where needed); make sure they respond in all 4 ways — they don’t need one long string. Model it first.' }
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
          id: 'n7', short: 'Task reminder', minutes: 5, grouping: 'Whole class',
          title: 'Week 4 Research Summary Discussion: Task reminder',
          goal: 'Know what to prepare for next week — and how to take notes.',
          blocks: [
            { type: 'key', title: 'Next week: a new article, a new focus', compare: [
              { label: 'WEEK 2', text: '<b>Causes and effects</b> of food insecurity in a certain region.' },
              { label: 'WEEK 4', text: '<b>Solutions</b> to food insecurity in a certain region — already implemented or suggested.' }
            ], points: ['<b>Step 2:</b> each student prepares a <b>2-minute verbal summary</b> of their source (main ideas and highlights) to share with the other two members of the group in class.'] },
            { type: 'fields', title: 'Notetaking template (optional — use it at home, or use your own technique)', fields: [
              { id: 'n7-1', label: 'Article title · Authors · Year of publication · Link', placeholder: 'Title: … Authors: … Year: … Link: …', rows: 2 },
              { id: 'n7-2', label: 'Overview · Reason for choosing', placeholder: 'This article is about … I chose it because …', rows: 2 },
              { id: 'n7-3', label: 'Method for research', placeholder: 'The authors surveyed / interviewed / analysed …', rows: 1 },
              { id: 'n7-4', label: 'Main topics → sub-topics → supporting ideas', placeholder: '- (Main topic)\n   (Sub-topic)\n   (supporting idea, if relevant)\n- …', rows: 4 }
            ]},
            { type: 'teacher', text: 'Task reminder (2–3 min): direct Ss to the full task instructions on the assessment overview page if they have questions. Notetaking template (1–2 min): no need to do anything with it in class — they can use it or their own technique; it is a good idea to try different note-taking techniques.' }
          ]
        },
        {
          id: 'n9', short: 'Group check-in', minutes: 10, grouping: 'Research group',
          title: 'Group check-in',
          goal: 'Make sure your group has three different, reliable articles.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your <b>research group</b>. Say the names of your articles. Same article? Someone must find a <b>new source</b>.' },
              { who: 'group', text: 'Each person explains in 30 seconds why their source passes the <b>CRAAP test</b>.' },
              { who: 'group', text: 'Tick the checklist together. Green bar = your group is ready.' }
            ]},
            { type: 'talk', title: 'Does my source pass the CRAAP test?', prompts: [
              '<b>Currency:</b> When was it published?',
              '<b>Relevance:</b> Is it about solutions in our region?',
              '<b>Authority:</b> Who wrote it? Are they qualified?',
              '<b>Accuracy:</b> Is it supported by evidence?',
              '<b>Purpose:</b> Why was it written — to inform, persuade or sell?'
            ]},
            { type: 'checklist', id: 'n9c', title: 'Our group check-in', meter: ['ready', 'Your group is ready for Week 4!'], items: [
              'We have three different articles (no overlap).',
              'Every article is about solutions in our region.',
              'Everyone has done a CRAAP test.',
              'Everyone knows when the summary must be ready.'
            ]},
            { type: 'teacher', text: 'If articles overlap, decide who finds a new one (a volunteer, a back-up, or toss a coin). The CRAAP test is about the habit of evaluating sources. If a student has NOT found an article and/or done the CRAAP test, remind them they must find and summarise it for next week.' }
          ]
        },
        {
          id: 'n8', short: 'Self-regulation', minutes: 5, grouping: 'Alone',
          title: 'Self-regulation and monitoring',
          goal: 'Check how confident you were with the research step this time.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Open your <b>DEC 15 Research Summary Discussion self-reflection form</b>. Scroll to <b>Week 3–4</b>.' },
              { who: 'alone', text: 'Choose <b>Yes</b>, <b>Mostly</b> or <b>Needs work</b> for each question (here and in the form). Add comments and an action plan. <b>Save</b> the form again.' }
            ]},
            { type: 'grid', id: 'n8g', title: 'Conducting research (Week 3–4)', columns: ['My answer'], options: ['Yes', 'Mostly', 'Needs work'], rows: [
              'Were you able to use more efficient keywords to search for information online?',
              'Were you able to disregard irrelevant articles and find a relevant source fairly quickly?',
              'Did you feel more confident using the CRAAP test?',
              'Do you feel prepared to independently evaluate sources for future assignments?'
            ]},
            { type: 'fields', fields: [{ id: 'n8-3', label: 'Comments · Action plan for further improvement', placeholder: 'Comments: … Action plan: always …', rows: 2 }] },
            { type: 'teacher', text: 'Before the lesson, check Ss completed yesterday’s homework (self-reflection on the practice Interactive Writing Assessment) — they need it again in W4 D5. Check Ss understand the questions and give examples. Q1 Comments = ‘much easier than last time’; Action plan = ‘always brainstorm keywords before beginning research’. Q2 Comments = ‘There were a lot more search results this time, so it was difficult to choose’; Action plan = ‘pay close attention to article/text titles and skim read journal abstracts where possible’. Ss can finish at home. Make sure Ss download and save the document. Alternative: a Google Doc in your class group page.' }
          ],
          answers: { title: 'Examples', items: [
            ['Q1 (example)', 'Comments: much easier than last time. · Action plan: always brainstorm keywords before beginning research.'],
            ['Q2 (example)', 'Comments: there were a lot more search results this time, so it was difficult to choose. · Action plan: pay close attention to article/text titles and skim read journal abstracts where possible.']
          ]}
        },
        {
          id: 'n10', short: 'Action plan', minutes: 10, grouping: 'Alone → group',
          title: 'Action plan for further improvement',
          goal: 'Plan how to make your Week 4 summary better than your Week 2 one.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'In the form, scroll up to <b>Week 1–2</b>. Look at your action plan for <b>‘Summarising research’</b>.' },
              { who: 'alone', text: 'Answer the two questions below.' },
              { who: 'group', text: 'Share one problem and one strategy with your group. <b>Steal a good idea!</b> Ask your teacher if you have questions.' }
            ]},
            { type: 'fields', fields: [
              { id: 'n8-1', label: 'a) What issues did I encounter last time?', placeholder: 'Last time I …', rows: 2 },
              { id: 'n8-2', label: 'b) How can I improve the notetaking and summarising process?', placeholder: 'This time I will …', rows: 2 }
            ]},
            { type: 'order', id: 'n8o', title: 'After class: put the 5 steps of your summary in order', items: ['Introduce the source', 'Say why you chose the source', 'Introduce research methods', 'Introduce the main points of the source', 'Final comment on the source'] },
            { type: 'language', title: 'Phrases for summarising a source (W2 D1. 1A Discussion Skills 1)', groups: [
              { label: '1) Introducing the source', phrases: ['I found this great article called…', 'In my research I found an interesting source called…', 'The article is about…', 'It was written by… in…', 'The article I came across in my research was about….'] },
              { label: '2) Saying why you chose the source', phrases: ['I chose this article because it provides a comprehensive look at…', 'This article is relevant for our research because….', 'I thought this article looked like the most interesting one to read', 'I selected this article because I wanted to learn more about…'] },
              { label: '3) Introducing research methods', phrases: ['The authors surveyed 500 residents of…', 'The article included data collected in experiments…', 'In the study they conducted…', 'To gather data, they conducted a questionnaire…'] },
              { label: '4) Introducing the main points of the source', phrases: ['The article begins by explaining that…', 'And according to Garnett and Simmons…', 'Another interesting point from the article was that…', 'They also state that…', 'Interestingly, my article points out that…', 'So basically, (authors’ names) assert that…', 'The authors suggest that…'] },
              { label: '5) Final comment on the source', phrases: ['So, that’s the gist of what the article covered.', 'Ultimately, this article contributes significantly to our understanding of the topic', 'For me, it really sheds light on the complexity of the issues.', 'Overall, it was a really interesting and comprehensive study.'] }
            ]},
            { type: 'steps', title: 'After class', items: [
              { who: 'alone', text: 'Prepare your <b>2-minute verbal summary</b> of your source to share with your research group next week.' },
              { who: 'alone', text: 'Revise the 5 steps and the phrases above (Language reference, W2 D1. 1A Discussion Skills 1).' }
            ]},
            { type: 'teacher', text: 'Ss look at this individually, then discuss with a partner or their group, sharing strategies. If they have not saved their previous self-reflection document, ask them to download a new one and think back about their experience.' }
          ],
          answers: { title: 'Example', items: [
            ['Summarising (example)', 'Issue: I read from my notes too much. · Strategy: write key words only, and practise my 2-minute summary aloud with a timer twice.']
          ]}
        }
      ]
    },

    /* ───────────────────────── 16A AST: Group work skills ───────────────────────── */
    {
      id: 'teamwork', number: '02', code: '16A', minutes: 60,
      tone: 'clay', art: 'group',
      title: 'AST: Group work skills',
      subtitle: 'Work well as a team',
      outcome: 'Understand the benefits and key steps of successful group work, and make a teamwork contract with your research group.',
      activities: [
        {
          id: 't1', short: 'Lead-in', minutes: 10, grouping: 'Research group',
          title: 'Lead-in',
          goal: 'Check that everyone in your research group understands the plan.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your <b>research group</b> (3 people) for the <b>Research Summary Discussion</b>.' },
              { who: 'group', text: 'Discuss each question. Tick it only if <b>all members</b> can say yes. Can you get the bar to green?' }
            ]},
            { type: 'checklist', id: 't1c', title: 'Do all members of the group…', meter: ['ready', 'Everyone is ready!'], items: [
              'understand the task?',
              'know who does what?',
              'understand what the ‘final product’ is?',
              'know what the deadline is?',
              'know when you have planned to prepare for this task?'
            ]},
            { type: 'tip', text: 'Any box not ticked? Agree on an answer now — it goes into your teamwork contract later.' }
          ]
        },
        {
          id: 't2', short: 'Groupwork skills', minutes: 10, grouping: 'Groups of 3',
          title: 'Groupwork skills',
          goal: 'Discuss the benefits of group work and choose the one that matters most to you.',
          blocks: [
            { type: 'talk', title: 'Discuss in your group', prompts: [
              'What are the biggest advantages of working in a group compared to working alone?',
              'What skills do you think you develop when working with others on a group project?',
              'How can teamwork in a group project prepare you for real-world work environments?',
              'Why is communication important in a group project?',
              'What strategies can a group use to ensure tasks are divided fairly and completed on time?'
            ]},
            { type: 'cards', pick: 't2p', title: 'There are various benefits of working in a group at university. Which is most important to you? Tap one.', items: [
              { icon: 'book', label: 'Learn from others', text: 'You get to hear different ideas and perspectives, which can help you understand topics better.' },
              { icon: 'users', label: 'Build teamwork skills', text: 'Working with others teaches you how to collaborate, communicate, and solve problems as a team.' },
              { icon: 'briefcase', label: 'Prepare for the workplace', text: 'Many jobs require teamwork, so group projects help you practice skills you’ll need in the future.' },
              { icon: 'layers', label: 'Share the workload', text: 'Tasks can be divided among group members, making big projects more manageable.' },
              { icon: 'chat', label: 'Improve communication', text: 'You learn how to express your ideas, listen to others, and work through disagreements.' },
              { icon: 'sprout', label: 'Gain new skills', text: 'Group work helps you develop leadership, organization, and time management skills.' },
              { icon: 'link', label: 'Make connections', text: 'You build relationships with classmates, which can lead to friendships or professional networks.' },
              { icon: 'bulb', label: 'Boost creativity', text: 'Combining different strengths and ideas often leads to better and more creative results.' }
            ]},
            { type: 'talk', title: 'Then', prompts: ['Tell your group <b>which benefit you chose</b> and <b>why</b> — with an example. Did anyone choose the same one?'] }
          ]
        },
        {
          id: 't3', short: 'Managing the process', minutes: 10, grouping: 'Pairs',
          title: 'Managing the process',
          goal: 'Match the ten key steps to their descriptions.',
          blocks: [
            { type: 'sort', id: 't3s', single: true, title: 'Match the headings with the correct descriptions', hint: '<b>Drag</b> each heading to its description — or tap a heading, then tap a description.', buckets: [
              { label: 'Decide what the group needs to do and what the final result should be. Consider what you would like to achieve. Break the project into smaller tasks.', letter: '1' },
              { label: 'Think about what each person is good at and give them a task that matches their skills. Make sure everyone knows what they need to do.', letter: '2' },
              { label: 'Create a plan with steps for the project. Decide when each part needs to be finished.', letter: '3' },
              { label: 'Meet or talk regularly to check progress and share ideas. Listen carefully to each other and explain your thoughts clearly.', letter: '4' },
              { label: 'Share ideas and help each other solve problems. Make decisions together and respect everyone’s opinion.', letter: '5' },
              { label: 'If there is a disagreement, talk about it calmly and find a solution. Focus on working together, not on who is right or wrong.', letter: '6' },
              { label: 'Do your part of the work on time and as well as you can. Check in with the group to make sure things are going well.', letter: '7' },
              { label: 'Be open to suggestions and ready to change the plan or your role if something doesn’t work. Try to help team members if they have problems.', letter: '8' },
              { label: 'Use online tools like Google Docs or other apps to share work and ideas. Keep everything in one place so everyone can find it easily.', letter: '9' },
              { label: 'Look at the progress often and make changes if needed. After finishing, think about what went well and what could be better next time.', letter: '10' }
            ], items: [
              { text: 'Communicate often', answer: 3 },
              { text: 'Be flexible', answer: 7 },
              { text: 'Set clear goals', answer: 0 },
              { text: 'Use technology', answer: 8 },
              { text: 'Work as a team', answer: 4 },
              { text: 'Review the work', answer: 9 },
              { text: 'Give everyone a role', answer: 1 },
              { text: 'Be responsible', answer: 6 },
              { text: 'Make a plan and deadlines', answer: 2 },
              { text: 'Solve problems quickly', answer: 5 }
            ]},
            { type: 'talk', title: 'Then', prompts: ['Which <b>two</b> steps will be hardest for your research group? Tell another pair.'] },
            { type: 'teacher', text: 'TB key: 1 Set clear goals · 2 Give everyone a role · 3 Make a plan and deadlines · 4 Communicate often · 5 Work as a team · 6 Solve problems quickly · 7 Be responsible · 8 Be flexible · 9 Use technology · 10 Review the work.' }
          ]
        },
        {
          id: 't4', short: 'Teamwork contract', minutes: 30, grouping: 'Research group',
          title: 'Teamwork contract',
          goal: 'Agree how your research group will work together — and sign it.',
          blocks: [
            { type: 'key', title: 'A teamwork contract', points: [
              'An agreement made by a group or team to explain <b>what is expected</b> from each person, what their <b>responsibilities</b> are, and <b>how</b> they will work together.',
              'It encourages good communication, responsibility and respect. Set it up <b>early</b> in a project. Each member <b>signs and dates</b> it.'
            ]},
            { type: 'model', title: 'Read this example of a general teamwork contract', rows: [
              ['Title', 'Teamwork contract for [assessment/project name]'],
              ['Purpose', 'To complete [assessment/project name] by [deadline] with high quality and on time.'],
              ['Roles and responsibilities', '[Member A]: Research and data collection. [Member B]: Writing and editing. [Member C]: Presentation design'],
              ['Communication', 'Weekly meetings on [day/time]. Use Google Doc for updates and questions.'],
              ['Decision-making', 'Majority vote on key decisions.'],
              ['Deadlines', 'Draft completed by [date]. Final submission by [date].'],
              ['Behaviour', 'Respect all ideas, contribute equally, and provide constructive feedback.'],
              ['Conflict resolution', 'Disputes will be mediated by [team leader].']
            ]},
            { type: 'talk', title: '5 min · Before you write, agree on…', prompts: [
              'a. What do you hope to achieve through this groupwork task?',
              'b. What are your expectations of yourself and your groupmates?',
              'c. How can you share work, make decisions and resolve conflict fairly?',
              'd. How can you effectively communicate and manage time?'
            ]},
            { type: 'steps', items: [
              { who: 'group', text: '<b>15 min.</b> Write your contract together (one person types in a <b>shared doc</b>; everyone copies it here). Be <b>specific</b>: names, days, times.' },
              { who: 'group', text: '<b>5 min.</b> Read it aloud. Is it fair? Then everyone <b>signs and dates</b> it — watch for the stamp!' }
            ]},
            { type: 'contract', id: 't4c', kicker: 'Research Summary Discussion · Week 4', title: 'Our teamwork contract', intro: 'We agree to work together like this.', stamp: 'Research group', fields: [
              { id: 't4-1', label: 'Purpose', placeholder: 'To complete … by … with …' },
              { id: 't4-2', label: 'Roles and responsibilities', placeholder: '[Name]: … [Name]: … [Name]: …', rows: 3 },
              { id: 't4-3', label: 'Communication', placeholder: 'We will meet / message on … We will use … for …' },
              { id: 't4-4', label: 'Decision-making', placeholder: 'We will make key decisions by …' },
              { id: 't4-5', label: 'Deadlines', placeholder: 'Article found and CRAAP-tested by … Summary notes ready by …' },
              { id: 't4-6', label: 'Behaviour', placeholder: 'We will …' },
              { id: 't4-7', label: 'Conflict resolution', placeholder: 'If we disagree, we will …' }
            ]},
            { type: 'teacher', text: 'Allow 20–30 min. Groups create the contract in a shared doc (e.g. Google Doc); each student also copies it into the app so it appears in their notebook. Circulate and push for specific answers (days, times, names). Link to the Lead-in: deadlines and roles should match what they checked there.' }
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

    /* ───────────────────────── 17A AST: Digital Literacy and AI: Prompts ───────────────────────── */
    {
      id: 'prompts', number: '03', code: '17A', minutes: 60,
      tone: 'blue', art: 'ai',
      title: 'AST: Digital Literacy and AI: Prompts',
      subtitle: 'Write better AI prompts',
      outcome: 'Recognise clear, specific prompts and write your own prompt using Role · Task · Requirements · Instructions.',
      activities: [
        {
          id: 'p1', short: 'Warmer', minutes: 10, grouping: 'Groups of 3',
          title: 'Warmer',
          goal: 'Think about how a prompt shapes an AI answer.',
          blocks: [
            { type: 'talk', title: 'Activity 1 · Group discussion (3 min)', prompts: [
              'In our last AI lesson, you were introduced to a couple of useful AI tools. Have you used AI this week? If so, what for?',
              'What AI tools did you use? Which one do you prefer? Why?'
            ]},
            { type: 'chat', ai: true, right: 'You', title: 'Activity 2 · Guess the prompt: what did the student type?', lines: [
              ['You', 'Prompt 1 = ???'],
              ['AI', '“Top 5 ways to reduce food waste at home: Plan your meals before shopping, store fruits and vegetables properly, use leftovers creatively, freeze perishable items, and compost food scraps.”'],
              ['You', 'Prompt 2 = ???'],
              ['AI', '“Composting food waste has several environmental benefits, such as reducing methane emissions, improving soil health, and decreasing the need for chemical fertilizers.”'],
              ['You', 'Prompt 3 = ???'],
              ['AI', '“A 3-day meal plan using leftovers: Day 1 – Stir-fry with leftover veggies, Day 2 – Soup made from vegetable scraps, Day 3 – Casserole with leftover grains and proteins.”']
            ]},
            { type: 'fields', fields: [
              { id: 'p1-1', label: 'My guess: prompt 1', placeholder: 'Give / List …', rows: 1 },
              { id: 'p1-2', label: 'My guess: prompt 2', placeholder: 'Explain …', rows: 1 },
              { id: 'p1-3', label: 'My guess: prompt 3', placeholder: 'Create …', rows: 1 }
            ]},
            { type: 'talk', title: 'Then open the suggested prompts and discuss', prompts: ['Are the prompts <b>specific and clear</b>?', 'How could they be improved?'] }
          ],
          answers: { title: 'Suggested prompts', items: [
            ['1', '“Provide 5 practical tips for reducing food waste at home, focusing on meal planning, storage, and creative use of leftovers.”'],
            ['2', '“Explain the environmental benefits of composting food waste, including its impact on methane emissions, soil health, and chemical fertilizer use.”'],
            ['3', '“Create a 3-day meal plan using leftovers, focusing on creative and easy recipes that reduce food waste.”']
          ]}
        },
        {
          id: 'p2', short: 'What are prompts?', minutes: 5, grouping: 'Whole class',
          title: 'What are prompts?',
          goal: 'Understand what a prompt is and why a clear one matters.',
          blocks: [
            { type: 'key', title: 'A prompt = your instructions to an AI tool', points: [
              '<b>Prompts are instructions:</b> they tell the AI what to do or what to talk about. They can be a question, a statement or a creative idea.',
              'Prompts are usually <b>open-ended</b>: you can ask the AI to explain a concept, solve a problem, or generate ideas. <b>The better your prompt, the better the AI’s response will be.</b>'
            ]},
            { type: 'key', title: 'Weak or strong?', compare: [
              { label: 'WEAK', text: 'Too vague — the AI might not know what kind of information you need.', eg: '“Tell me about food waste.”' },
              { label: 'STRONG', text: 'Clear and specific — the AI can give a focused, useful response.', eg: '“Explain three ways to reduce food waste at home, with examples for each.”' }
            ]},
            { type: 'teacher', text: 'Keep this short (TB note): avoid spending too much time on ‘What are prompts’ and ‘What makes a good prompt’ — give students more time to practise writing their own.' }
          ]
        },
        {
          id: 'p3', short: 'Good prompt?', minutes: 15, grouping: 'Pairs',
          title: 'What makes a good prompt?',
          goal: 'Judge five prompts, then learn the 4 parts of a good prompt.',
          blocks: [
            { type: 'key', title: 'Tips for good prompting', points: [
              '<b>Be clear:</b> instructions that are easy to understand. Instead of “Tell me about recycling,” say “Explain how recycling helps the environment, with three examples.”',
              '<b>Be specific:</b> the AI makes assumptions if you don’t explain (vegetarian? quick? budget-friendly?). <b>Use the AI’s conversation feature:</b> refine your prompt or ask follow-up questions.'
            ]},
            { type: 'sort', id: 'p3s', title: 'Be the judge: are these prompts good? Why or why not?', buckets: [
              { label: 'Weak', text: 'too vague or too broad' },
              { label: 'Good — could be refined', text: 'clear, but could be more targeted' },
              { label: 'Excellent', text: 'role, task and scope are clear' }
            ], items: [
              { text: 'Explain why food waste is bad.', answer: 0, why: 'Too broad (environmental, economic or ethical?) and asks for no examples. Better: “Explain three major negative impacts of food waste on the environment and economy, with examples.”' },
              { text: 'As a sustainability consultant, outline five cost-effective strategies restaurants can implement to minimize food waste, considering food storage, portion control, and staff training.', answer: 2, why: 'Very clear: defines the role, task and scope, the number of strategies and key focus areas.' },
              { text: 'Tell me about food waste.', answer: 0, why: 'Too vague: causes, impacts or solutions? Better: “Explain the main environmental consequences of food waste and suggest ways to reduce it.”' },
              { text: 'Give me a list of ways to reduce food waste at home.', answer: 1, why: 'Clear, but not focused. Better: “Provide five practical tips for reducing food waste at home, focusing on meal planning and storage techniques.”' },
              { text: 'What are some strategies to reduce food waste in restaurants? Provide at least three examples.', answer: 1, why: 'Clear, with a task and a quantity. Could name the type of strategies (e.g. storage, portion control, customer education).' }
            ]},
            { type: 'figure', src: 'assets/week3/prompt-parts.svg', alt: 'A good AI prompt has four parts: Role (act as…), Task (provide…), Requirements (focus on…), Instructions (include…).', caption: 'The structure of a good prompt' },
            { type: 'cards', title: 'A good prompt has 4 key elements', items: [
              { label: '1 · Role', text: '“Act as…” / “Pretend to be…”. It decides the type of information and the way it is communicated to you. <i>E.g. act as an expert in the field of computer science.</i>' },
              { label: '2 · Task', text: 'A summary of what you want the AI to do. Be specific about the task’s objective.' },
              { label: '3 · Requirements', text: 'As much information as possible, so the AI doesn’t make wrong assumptions: what the output should look like and its conditions.' },
              { label: '4 · Instructions', text: 'How the AI should complete the task: steps, examples, what to include.' }
            ]},
            { type: 'teacher', text: 'TB overall ratings: 1 Tell me about food waste — poor · 2 restaurants, at least three examples — good but could be slightly refined · 3 Explain why food waste is bad — weak · 4 sustainability consultant — excellent · 5 list of ways at home — decent but could be more targeted. In the app: 1 and 3 = Weak; 2 and 5 = Good — could be refined; 4 = Excellent. The prompts are mixed in the app so students must read them.' }
          ]
        },
        {
          id: 'p4', short: 'Practice 1', minutes: 12, grouping: 'Alone',
          title: 'Practice: write a prompt',
          goal: 'Build a 4-part prompt for an AI tool to generate solutions for food waste.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Write a prompt for an AI tool to <b>generate solutions for food waste</b>. Build it part by part — tap an idea or type your own.' },
              { who: 'alone', text: 'Watch the meter. Can you make your prompt <b>Strong</b>? (Numbers and a clear context help.)' }
            ]},
            { type: 'promptbuilder', id: 'p4', title: 'Role · Task · Requirements · Instructions', tryUrl: 'https://copilot.microsoft.com/', tryLabel: 'Open Copilot', parts: [
              { key: 'role', id: 'p4-1', label: 'Role', lead: 'Act as', placeholder: 'an environmental scientist…', chips: ['an environmental scientist', 'a sustainability expert', 'a restaurant manager', 'a nutrition expert'] },
              { key: 'task', id: 'p4-2', label: 'Task', lead: 'Provide', placeholder: 'five practical solutions for reducing food waste…', chips: ['five practical solutions for reducing food waste', 'three low-cost ideas to reduce food waste'] },
              { key: 'requirements', id: 'p4-3', label: 'Requirements', lead: 'Focus on', placeholder: 'restaurants in Sydney…', chips: ['homes', 'restaurants', 'schools', 'supermarkets', 'a small budget'] },
              { key: 'instructions', id: 'p4-4', label: 'Instructions', lead: 'Include', placeholder: 'an example for each solution…', chips: ['an example for each solution', 'step-by-step guidance', 'a short table'] }
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
          id: 'p5', short: 'Practice 2', minutes: 18, grouping: 'Pairs',
          title: 'Practice: swap, give feedback and test',
          goal: 'Improve your prompt with peer feedback and see how the AI responds.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: '<b>Swap</b> prompts with a partner. Tick the checklist for <b>their</b> prompt. Tell them one thing to improve.' },
              { who: 'alone', text: '<b>Test</b> your prompt: input it into an AI tool (<b>Copilot</b> or <b>Vanilla on Cogniti</b>) and evaluate the results.' },
              { who: 'pair', text: '<b>Discuss:</b> Did AI provide useful solutions for food waste? How could the prompt be improved further? Try one follow-up question.' }
            ]},
            { type: 'checklist', id: 'p5c', title: 'Peer checklist: my partner’s prompt', meter: ['ticked', 'A strong prompt!'], items: [
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
              { id: 'p5-2', label: 'Was the AI response useful? What would I change?', placeholder: 'The response was useful / not very useful because … Next time I will add …', rows: 2 }
            ]},
            { type: 'teacher', text: 'The TB lists ChatGPT, Copilot or Vanilla on Cogniti; in DEC15 point students to the University-approved tools (Copilot, Cogniti). Ask 2–3 pairs to share their before/after prompts and the difference in the output.' }
          ],
          answers: { title: 'Example reflection', items: [
            ['Reflection', 'The first answer was too general. I added “for university student households in Sydney, on a small budget” and asked for a table. The second answer was more practical. Next time I will ask it to explain each step.']
          ]}
        }
      ]
    },

    /* ───────────────────────── 18A Building rapport ───────────────────────── */
    {
      id: 'rapport', number: '04', code: '18A', minutes: 30,
      tone: 'amber', art: 'discussion',
      title: 'Building rapport',
      subtitle: 'Connect as a class (teacher-led)',
      outcome: 'Build connections with your classmates in a supportive, communicative activity.',
      activities: [
        {
          id: 'r1', short: 'Building rapport', minutes: 30, grouping: 'Whole class',
          title: 'Welcome to building rapport!',
          goal: 'Get to know your classmates better and help build a supportive class.',
          blocks: [
            { type: 'key', title: 'What is this session?', points: [
              'The <b>Building rapport</b> sessions are dedicated to developing connections within our classroom — a cohesive and supportive learning environment.',
              '<b>Your teacher will plan and guide each session.</b> Follow their lead, stay engaged, and contribute positively.'
            ]},
            { type: 'spinner', id: 'r1sp', title: 'Optional game: Would you rather…? (food edition)', text: 'If your teacher chooses this game: spin, choose, and <b>justify</b> your choice — “For me, … because…”. Others build on it: “Like you said…”.', reels: [
              { label: 'Would you rather…', start: 'Spin!', items: ['eat only your favourite food for a year', 'cook every meal yourself', 'try one new food every day', 'never eat fast food again', 'live next to a farm', 'only eat food grown in Australia'] },
              { label: '…or…', start: '…', items: ['never eat your favourite food again', 'never cook again', 'eat the same three meals forever', 'never eat dessert again', 'live next to a supermarket', 'only eat food from your home country'] }
            ]},
            { type: 'cards', title: 'Two more ideas (your teacher chooses)', numbered: true, items: [
              { label: 'Island negotiation', text: 'Your group is going to a desert island. You can take only <b>three things</b>. Each person suggests one item and justifies it. Then <b>negotiate</b> to choose the best three.' },
              { label: 'Two truths and a lie', text: 'Tell your group three facts about yourself — one is false. Your group asks <b>clarification questions</b> (“So, you’re saying that…?”) and guesses the lie.' }
            ]},
            { type: 'teacher', text: '18A is teacher-led (30 min). The games are optional and recycle today’s language (justifying opinions, clarification, building on ideas). Use your own activity if you prefer.' }
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
          { who: 'alone', text: 'Make <b>key-word notes</b> for the 5 steps (use the notetaking template in 15A).' },
          { who: 'alone', text: 'Say your summary aloud with a timer. Record yourself on your phone if you can.' },
          { who: 'alone', text: 'Listen back. Tick the checklist. Then try once more.' }
        ]},
        { type: 'checklist', id: 'x1c', title: 'My summary', meter: ['done', 'Ready to present!'], items: [
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
