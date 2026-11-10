/* DEC10 · Week 5 · Day 4 — Negotiate, check, rebuild.
   Built from the Week 5 Teacher's Book (no revised map for Week 5: TB order and timings).
   W5 D4. 11A Interactive Discussion: Discussion and negotiation (60) · 12A AST: Digital literacy and AI: Using AI for feedback (60)
   · 13A Integrated writing workshop (3) (120).
   Protected texts (Samples 5.1 and 5.2) are in sources.js ("s51", "s52") and are never changed here; passages below copy
   the sample paragraphs exactly as the Teacher's Book shows them for highlighting. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: 'd10w5d4',
  week: 5,
  day: 4,
  title: 'Negotiate, check, rebuild',
  duration: 'About 4 hours',
  question: 'Is cultural globalisation having a negative impact on culture?',
  questionKind: 'Essay question',
  questionLabel: 'This week’s essay question',
  wordTarget: '450–600 words',
  journey: 'Look back at your views on cultural globalisation and negotiate the best way to protect local cultures. Then learn to judge feedback — from a classmate and from AI — and take apart two sample essays sentence by sentence, so your next essay is stronger.',
  image: 'dec10/assets/week5/hero-d10w5d4.svg',
  imageAlt: 'Illustration: a glowing globe in the middle, circled by music notes, a film reel, a T-shirt and a coffee cup. On the left, three students negotiate around a table with speech bubbles; in the middle, a laptop shows AI feedback with a checklist of ticks; on the right, a sample essay is colour-coded into introduction, body paragraphs and conclusion.',
  finish: { title: 'Day 5', text: '14A LRW Assessment — your Listening and Reading to Write test' },
  goalShort: 'your Interactive Discussion and your Integrated Writing',
  sections: [
    /* ───────────────────────── 11A Interactive Discussion ───────────────────────── */
    {
      id: 'negotiate',
      number: '01',
      code: '11A',
      minutes: 60,
      tone: 'teal',
      art: 'dec10/assets/week5/s-d4-negotiate.svg',
      title: 'Interactive Discussion: Discussion and negotiation',
      subtitle: 'Have your views changed? Then negotiate the best strategy',
      outcome: 'You review your earlier views on cultural globalisation, use discussion skills and language to negotiate in a group, and reflect on how well you interacted and took turns.',
      activities: [
        {
          id: 'a1',
          short: 'Views now',
          minutes: 15,
          grouping: 'Alone → Group',
          art: 'dec10/assets/week5/v/v-d10w5d4-a1.svg',
          title: 'Guided discussion: Have your views changed?',
          goal: 'Look back at your Monday answers and say how — and why — your views have changed.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-views-shift.svg',
              size: 'wide',
              alt: 'A path from Monday to Thursday. Monday: you wrote your first ideas about cultural globalisation. Then you read, listened to different perspectives and wrote an essay. Thursday (today): you look again. A thought bubble asks: Have your views changed? Why or why not?',
              caption: 'From Monday to today: you have read, listened and written. <b>Look again.</b>'
            },
            {
              type: 'key',
              title: 'On Monday you discussed these questions',
              numbered: true,
              points: [
                'What do you understand by <i>cultural globalisation</i>?',
                'Have you observed this phenomenon in Australia?',
                'Have you observed this phenomenon in your country? What is your attitude towards it?'
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: 'Look back at what you wrote on Monday. How would you answer these questions <b>now</b> — after reading and listening to different perspectives, and after writing an essay? Write short notes.' },
            {
              type: 'fields',
              title: 'My answers now',
              fields: [
                { id: 'a1-1', label: '1 · Cultural globalisation means …', rows: 2, placeholder: 'Now I understand it as …' },
                { id: 'a1-2', label: '2 · In Australia, I have seen …', rows: 2, placeholder: 'For example, …' },
                { id: 'a1-3', label: '3 · In my country … My attitude is …', rows: 2, placeholder: 'In my country, … I feel … because …' }
              ]
            },
            {
              type: 'scale',
              id: 'a1-sc',
              title: 'How much have your views changed?',
              statement: 'My views on cultural globalisation are different from my views on Monday.',
              ends: ['Not at all', 'Completely'],
              mid: 'A little'
            },
            { type: 'do', n: 2, who: 'group', text: 'When you are ready, share your ideas with your group. Each person speaks for about <b>one minute</b>. Then ask one follow-up question.' },
            {
              type: 'talk',
              title: 'Discuss in your group',
              prompts: [
                'Have your ideas and views changed? Why / why not?',
                'Which reading, listening or source changed your mind the most?',
                'Is there anything you still believe strongly? What is your best reason?'
              ]
            },
            {
              type: 'language',
              title: 'Useful language: talking about a change of view',
              groups: [
                { label: 'My view has changed', phrases: ['At first I thought …, but now I think …', 'Having read …, I have changed my mind about …', 'I used to believe … However, after listening to …, I realise …'] },
                { label: 'My view is the same', phrases: ['I still believe … because …', 'My view hasn’t really changed. If anything, … made it stronger.', 'The sources confirmed what I thought about …'] },
                { label: 'A partly new view', phrases: ['I partly agree now. On the one hand …; on the other hand …', 'I can see both sides now.', 'It’s more complex than I thought, because …'] },
                { label: 'Follow-up questions', phrases: ['What made you change your mind?', 'Can you give an example from your country?', 'Do you think everyone in your country feels the same?'] }
              ]
            },
            { type: 'tip', text: '<b>Criticality = flexibility.</b> Good thinkers change their minds when they meet good evidence. Saying “I was wrong about …” is a strength, not a weakness.' }
          ],
          answers: {
            title: 'Suggested answer',
            items: [
              ['Cultural globalisation (a possible answer)', 'The movement of ideas, values, attitudes and products (music, film, food, fashion) across national borders, which makes cultures influence each other.'],
              ['A good answer has …', 'your view, a reason, and an example from a source or from your own experience.']
            ]
          }
        },
        {
          id: 'a2',
          short: 'Skills + phrases',
          minutes: 10,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d4-a2.svg',
          title: 'Negotiation: review the skills and language',
          goal: 'Remember the discussion skills, the negotiation skills and the language for referring to sources — and choose the phrases you will practise today.',
          blocks: [
            {
              type: 'key',
              title: 'Why this matters',
              points: [
                'A <b>negotiation task</b> will be part of your final <b>Interactive Discussion Assessment</b>.',
                'Today’s discussion and negotiation give you practice for that task.'
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: 'Sort the phrases into the three key <b>discussion skills</b>. The examples from your book are first; the others are extra phrases to learn.' },
            {
              type: 'sort',
              id: 'a2-sort',
              title: 'Three key discussion skills',
              buckets: [
                { label: 'Start the discussion', letter: 'S' },
                { label: 'Introduce ideas', letter: 'I' },
                { label: 'Take the floor politely', letter: 'T' }
              ],
              items: [
                { text: 'Ok, we’ve decided to talk about …', answer: 0, why: 'Example from your book.' },
                { text: 'According to (name of research) …', answer: 1, why: 'Example from your book.' },
                { text: 'Can I just say … [pause]', answer: 2, why: 'Example from your book.' },
                { text: 'Shall we start by looking at …?', answer: 0 },
                { text: 'So, today we need to decide …', answer: 0 },
                { text: 'One idea I’d like to put forward is …', answer: 1 },
                { text: 'The research by … suggests that …', answer: 1 },
                { text: 'Sorry to interrupt, but …', answer: 2 },
                { text: 'If I could just come in here …', answer: 2 }
              ]
            },
            { type: 'do', n: 2, who: 'pair', text: 'Match each way of <b>referring to sources</b> to its example. Then say one example aloud with a real author from this week (Hassi and Storti, Van Krieken, or Crysell et al.).' },
            {
              type: 'match',
              id: 'a2-match',
              title: 'Referring to sources in academic discussions',
              hint: 'Tap a skill on the left, then its example on the right.',
              left: [
                'Mentioning authors to introduce facts, arguments, or opinions',
                'Agreeing or supporting authors',
                'Questioning authors',
                'Introducing authors’ ideas or concepts'
              ],
              right: [
                '<i>[Author] mentions that …</i> / <i>[Author] talks about …</i>',
                '<i>I agree with what [Author] said about …</i>',
                '<i>I’m not sure I agree with [Author] that …</i>',
                '<i>[Author] brings up a good example of …</i>'
              ]
            },
            {
              type: 'language',
              title: 'Discussion skills to encourage negotiation',
              groups: [
                { label: 'Building on others’ ideas', phrases: ['Building on what you said before, …', 'That’s a good point, and I’d add that …', 'Following on from …’s idea, …', 'To take that one step further, …'] },
                { label: 'Asking for clarification / opinions / justification', phrases: ['So, are you suggesting that …?', 'What do you mean exactly by …?', 'What do you think about …, …?', 'Why do you think that would work better?'] },
                { label: 'Giving opinions / suggesting solutions + justifying', phrases: ['So far, we’ve discussed … How about we think about …?', 'In my view, option … would be the most effective, because …', 'I’d suggest …, mainly because …', 'The main advantage of this is that …'] },
                { label: 'Referring to sources (extra)', phrases: ['As Van Krieken (2016) points out, …', 'Hassi and Storti (2012) argue that …', 'This links to what Crysell et al. (2023) say about …', 'I’m not sure that source fully supports …'] }
              ]
            },
            {
              type: 'fields',
              title: 'The expressions I want to practise today',
              fields: [{ id: 'a2-me', label: 'Write 3–4 expressions. Tick them off in your head when you use them!', rows: 3, placeholder: '1 … 2 … 3 …' }]
            }
          ],
          answers: {
            title: 'Answers',
            items: [
              ['Start the discussion', 'Ok, we’ve decided to talk about … · Shall we start by looking at …? · So, today we need to decide …'],
              ['Introduce ideas', 'According to (name of research) … · One idea I’d like to put forward is … · The research by … suggests that …'],
              ['Take the floor politely', 'Can I just say … [pause] · Sorry to interrupt, but … · If I could just come in here …']
            ]
          }
        },
        {
          id: 'a3',
          short: 'Negotiate',
          minutes: 20,
          grouping: 'Groups of 3–4',
          art: 'dec10/assets/week5/v/v-d10w5d4-a3.svg',
          title: 'Negotiation task',
          goal: 'Evaluate three strategies and negotiate towards a group decision for 10 minutes, with everyone taking part equally.',
          blocks: [
            {
              type: 'key',
              title: 'Which of the strategies below would be best to mitigate the negative effects of cultural homogenization?',
              points: [
                '<b>a.</b> Provide incentives for local businesses to produce and market goods locally and internationally.',
                '<b>b.</b> Use social media to run cultural awareness campaigns.',
                '<b>c.</b> Encourage media companies to produce and distribute content that represents cultural diversity.'
              ]
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-negotiation-table.svg',
              size: 'wide',
              alt: 'Three option cards on a round table: a. incentives for local businesses (a shop with a price tag), b. social media awareness campaigns (a phone with a heart), c. media content that represents cultural diversity (a film clapper). Arrows show the stages: evaluate each option, negotiate, move towards consensus. A note says: you do not have to agree.',
              caption: 'Evaluate → negotiate → move towards consensus. <b>The discussion matters more than the decision.</b>'
            },
            {
              type: 'cards',
              title: 'For this negotiation task, you should:',
              items: [
                { label: 'Everyone', text: 'All participate equally.' },
                { label: 'Evaluate', text: 'Evaluate each option.' },
                { label: 'Decide?', text: 'Consider which would be the best option BUT note that you do not necessarily have to reach a consensus. The focus is more on the discussion than reaching an agreement.' },
                { label: 'Language', text: 'Use appropriate academic discussion skills and language to negotiate towards a final consensus.' },
                { label: '10 minutes', text: 'Keep the discussion going for 10 minutes.' }
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: '<b>2 minutes:</b> think about each option. Who does it help? What is good and bad about it? Make quick notes.' },
            {
              type: 'table',
              id: 'a3-tab',
              title: 'My quick evaluation',
              columns: ['Option', 'Strength (+)', 'Weakness (−)', 'My score / 5'],
              fixed: ['a. Incentives for local businesses', 'b. Social media awareness campaigns', 'c. Media content that shows cultural diversity']
            },
            { type: 'do', n: 2, who: 'group', text: 'Each person spins a <b>secret mission</b>. Do not tell the group! Try to do your mission during the discussion.' },
            {
              type: 'spinner',
              id: 'a3-spin',
              title: 'Your secret mission',
              text: 'Your mission is extra practice. After the discussion, your group guesses everyone’s mission.',
              reels: [
                {
                  label: 'Mission',
                  items: [
                    'Build on someone else’s idea at least twice.',
                    'Ask for clarification or justification twice.',
                    'Bring a quiet member into the discussion.',
                    'Refer to a source from this week.',
                    'Summarise the discussion so far, then suggest a next step.',
                    'Politely disagree, and give a reason.',
                    'Take the floor politely when someone is speaking a lot.',
                    'Suggest a compromise (combine two options).'
                  ]
                }
              ]
            },
            { type: 'do', n: 3, who: 'group', text: '<b>10 minutes:</b> negotiate. Start the timer. Keep talking until the time is up.' },
            {
              type: 'language',
              title: 'Language to negotiate',
              groups: [
                { label: 'Evaluate an option', phrases: ['One advantage of option a is that …', 'The problem with option b is that …', 'Option c might be more effective in the long term, as …', 'This could be expensive / difficult to control.'] },
                { label: 'Compare options', phrases: ['Compared to option a, option c …', 'Option b is cheaper, but option c reaches more people.', 'Both options …, whereas …'] },
                { label: 'Concede + compromise', phrases: ['That’s a fair point. Perhaps we could …', 'I take your point, but …', 'What if we combined b and c?', 'Could we agree that … is the most practical?'] },
                { label: 'Move towards consensus', phrases: ['So, it sounds like most of us prefer …', 'Are we all happy with …?', 'Let’s see where we agree.', 'It seems we have to agree to disagree on …'] }
              ]
            },
            {
              type: 'toggle',
              title: 'Stuck? Read a short model negotiation',
              hint: 'An example only — your discussion will be different.',
              blocks: [
                {
                  type: 'chat',
                  title: 'Three students negotiate',
                  right: 'Mina',
                  lines: [
                    ['Leo', '<mark>Ok, we’ve decided to talk about</mark> the three strategies. <mark>Shall we start by looking at</mark> option a?'],
                    ['Mina', '<mark>One advantage of option a is that</mark> local businesses get money to sell traditional products, so local culture stays alive.'],
                    ['Sam', '<mark>Building on what you said before</mark>, those products could also be sold overseas. <mark>Crysell et al. (2023) talk about</mark> young people in Asia mixing local and global fashion.'],
                    ['Leo', '<mark>So, are you suggesting that</mark> option a is the best one?'],
                    ['Mina', 'Not exactly. <mark>The problem with option a is that</mark> it only helps businesses. <mark>So far, we’ve discussed</mark> money. <mark>How about we think about</mark> option c?'],
                    ['Sam', '<mark>That’s a fair point.</mark> <mark>What if we combined</mark> a and c?']
                  ]
                }
              ]
            },
            {
              type: 'choose',
              id: 'a3-choice',
              title: 'If your group agreed: which option did you choose?',
              options: ['a. Incentives for local businesses', 'b. Social media awareness campaigns', 'c. Media content that shows cultural diversity']
            },
            { type: 'talk', title: 'After 10 minutes', prompts: ['Guess each person’s secret mission. Did they do it?', 'Did your group reach a consensus? If not, what was the main disagreement?'] }
          ],
          answers: {
            title: 'Suggested ideas',
            items: [
              ['a. Incentives', '+ keeps local skills and traditional products alive; + can reach international buyers. − costs money; − helps businesses more than culture itself.'],
              ['b. Social media campaigns', '+ cheap and reaches young people fast; − people may scroll past; the same platforms also spread global culture.'],
              ['c. Diverse media content', '+ many people watch it; shows cultures to the world; − companies may care more about profit; hard to make them do it.'],
              ['There is no single right answer', 'The task is about the discussion: evaluate, justify, build on ideas and move towards consensus.']
            ]
          }
        },
        {
          id: 'a4',
          short: 'Reflect',
          minutes: 15,
          grouping: 'Alone → Class',
          art: 'dec10/assets/week5/v/v-d10w5d4-a4.svg',
          title: 'Reflection',
          goal: 'Judge how well you interacted and took turns, and choose the skills to use more next time.',
          blocks: [
            {
              type: 'key',
              title: 'A descriptor from the Interaction & Engagement criterion',
              points: ['“… effectively interacts and engages in discussions with others’ contributions; occasional lapses in using turn-taking.”'],
              tone: 'warn'
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-turn-taking.svg',
              size: 'wide',
              alt: 'A turn-taking cycle with four stages around a speech bubble: take the floor (Can I just say …), hold the floor (Let me finish my point …), hand over (What do you think, …?), and bring others in (We haven’t heard from … yet). Arrows go round in a circle.',
              caption: 'Good turn-taking goes round in a circle: <b>take, hold, hand over, bring others in.</b>'
            },
            {
              type: 'scale',
              id: 'a4-sc1',
              title: 'Question 1',
              statement: 'To what extent do you think you <i>effectively interacted and engaged</i> in the discussion?',
              ends: ['Not much', 'Very effectively']
            },
            {
              type: 'checklist',
              id: 'a4-check',
              title: 'Questions 2 and 5 · Which skills did you use today?',
              meter: ['Getting started', 'Good range', 'Great range!'],
              items: [
                'I started the discussion or introduced an idea.',
                'I built on someone else’s idea.',
                'I asked for clarification, opinions or justification.',
                'I gave an opinion and justified it.',
                'I referred to a source or an author.',
                'I took the floor politely.',
                'I handed over the turn to someone else.',
                'I brought a quieter person into the discussion.'
              ]
            },
            {
              type: 'scale',
              id: 'a4-sc2',
              title: 'Question 4',
              statement: 'To what extent do you think you used <i>turn-taking</i> skills and language?',
              ends: ['Not much', 'All the time']
            },
            {
              type: 'fields',
              title: 'Answer the reflection questions',
              fields: [
                { id: 'a4-2', label: '2 · Which specific discussion skills and language did you use to help you interact effectively?', rows: 2 },
                { id: 'a4-3', label: '3 · Which specific discussion skills and language would you like to use more in your future discussions?', rows: 2 },
                { id: 'a4-5', label: '5 · Which specific turn-taking skills and language did you use?', rows: 2 },
                { id: 'a4-6', label: '6 · Which specific turn-taking skills and language would you like to use more in your future discussions?', rows: 2 }
              ]
            },
            { type: 'do', n: 1, who: 'class', text: 'Tell the class <b>one thing</b> you did well and <b>one thing</b> you will try next time.' },
            {
              type: 'language',
              title: 'Talking about your performance',
              groups: [
                { label: 'What went well', phrases: ['I think I interacted quite effectively because I …', 'I managed to build on other people’s ideas.', 'I was pleased that I …'] },
                { label: 'What to improve', phrases: ['I need to work on …', 'I didn’t … as much as I wanted to.', 'Sometimes I spoke too long, so next time I’ll hand over sooner.'] },
                { label: 'A goal', phrases: ['In my next discussion, I will …', 'My goal is to use … at least twice.', 'I’m going to practise … before the assessment.'] }
              ]
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 12A AST: Digital literacy and AI ───────────────────────── */
    {
      id: 'aifeedback',
      number: '02',
      code: '12A',
      minutes: 60,
      tone: 'blue',
      art: 'dec10/assets/week5/s-d4-aifeedback.svg',
      title: 'AST: Digital literacy and AI: Using AI for feedback',
      subtitle: 'Is this feedback any good? Check it — from a classmate and from AI',
      outcome: 'You analyse an assessment rubric with the help of AI, judge the quality of feedback, use AI to get feedback on your writing, and plan your revision based on AI and teacher feedback.',
      activities: [
        {
          id: 'b1',
          short: 'Rubric talk',
          minutes: 5,
          grouping: 'Groups of 4',
          art: 'dec10/assets/week5/v/v-d10w5d4-b1.svg',
          title: 'Group Discussion',
          goal: 'Explain one criterion of the Integrated Writing Assessment rubric to your group in 2 minutes.',
          blocks: [
            { type: 'tip', text: 'For this lesson you need the <b>Integrated Writing Assessment rubric</b> and your <b>Week 4 writing practice script</b>. Open them now.' },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-rubric.svg',
              size: 'wide',
              alt: 'Four rubric cards: Argumentation (a target), Use of Sources (a book with quotation marks), Connection of Ideas (linked chain), and Vocabulary and Grammar (letters Aa with a tick). Each card has a strong side and a weak side.',
              caption: 'The four areas of the Integrated Writing rubric.'
            },
            { type: 'do', n: 1, who: 'group', text: 'Take turns. Spin to choose <b>one criterion</b>. Explain it to your group in <b>2 minutes</b>. If you can, give an example of what meeting or <b>not</b> meeting it looks like in the integrated writing task.' },
            {
              type: 'spinner',
              id: 'b1-spin',
              title: 'Explain a criterion',
              reels: [
                { label: 'Criterion', items: ['Argumentation', 'Use of Sources', 'Connection of Ideas', 'Vocabulary and Grammar'] },
                { label: 'Also give …', items: ['an example of meeting it', 'an example of failing to meet it', 'one tip for the next essay', 'one word from the rubric you had to check'] }
              ]
            },
            {
              type: 'language',
              title: 'Explaining a criterion',
              groups: [
                { label: 'Explain', phrases: ['This criterion is about …', 'Basically, it means that the writer has to …', 'To get a high score, you need to …'] },
                { label: 'Give an example', phrases: ['For instance, a strong essay would …', 'If an essay doesn’t …, it wouldn’t meet this criterion.', 'In my Week 4 script, I …'] },
                { label: 'Check understanding', phrases: ['Does that make sense?', 'Is that how you understand it too?', 'Would you add anything?'] }
              ]
            }
          ]
        },
        {
          id: 'b2',
          short: 'Good feedback?',
          minutes: 5,
          grouping: 'Alone',
          art: 'dec10/assets/week5/v/v-d10w5d4-b2.svg',
          title: 'Evaluating AI feedback: the Useful Feedback checklist',
          goal: 'Learn the seven questions that tell you if feedback is useful.',
          blocks: [
            {
              type: 'key',
              title: 'Good feedback is …',
              points: [
                '<b>specific</b>, <b>detailed</b>, <b>relevant to the task</b> and <b>constructive</b>.',
                'AI feedback is <b>not always the best</b>. Its quality depends on how specific your prompt is — and even then, it might not be 100% useful, or it might miss points.'
              ]
            },
            {
              type: 'flip',
              title: 'Checklist for evaluating feedback from AI',
              hint: 'Read the question on the front. Guess what to check, then turn the card. You can use this checklist for peer feedback too.',
              items: [
                { front: 'Does the feedback match your task?', back: 'Does it focus on the specific goals or question of your writing task? Is it appropriate for your text type (e.g. essay, report or email)?' },
                { front: 'Is the feedback clear and useful?', back: 'Are the suggestions detailed and easy to understand? Are they specific to your writing, not just general advice?' },
                { front: 'Will the suggestions improve your writing?', back: 'Do they help your ideas flow better and make your writing more organized? Are they free of repeated or unnecessary points?' },
                { front: 'Is the feedback easy to understand?', back: 'Is it written in clear and simple language? Does the tone feel friendly and constructive?' },
                { front: 'Have you double-checked the feedback?', back: 'Have you compared it with another AI tool or peer feedback? Does it match what you know about good writing skills?' },
                { front: 'Does the feedback miss anything important?', back: 'Does it cover all parts of your writing, or are there areas it ignores (e.g. structure, examples)? Could a teacher or friend give you better ideas for parts the AI overlooked?' },
                { front: 'Can you use the suggestions?', back: 'Have you tried making some changes based on the feedback? Does your writing improve after using the suggestions?' }
              ]
            },
            { type: 'sticky', text: 'Specific + detailed + relevant + constructive = feedback you can <b>use</b>.', color: 'blue' }
          ]
        },
        {
          id: 'b3',
          short: 'Match it',
          minutes: 10,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d4-b3.svg',
          title: 'Evaluating AI feedback: match the feedback to the evaluation',
          goal: 'Decide which feedback is useful and which is not — and say why.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Use the checklist. Match each feedback statement (left) to its evaluation (right). The feedback is on an essay about the IPAT equation.' },
            {
              type: 'match',
              id: 'b3-match',
              title: 'Feedback → evaluation',
              left: [
                '“Your use of sources like Penn State College and Boersema (2009) adds credibility to your analysis. However, some citations seem to be missing publication details. Ensuring all references are fully and accurately cited will strengthen your academic integrity and aid readers in locating your sources.”',
                '“You need to check your grammar.”',
                '“Your writing is okay, but try to be more engaging.”',
                '“You have identified critical gaps in the IPAT equation, such as its lack of consideration for policy and social structure. To further support your critique, it could be beneficial to reference studies or data that illustrate how these additional variables significantly impact sustainability.”',
                '“Your ideas are confusing.”',
                '“The analysis of the interdependence among the IPAT variables is insightful. However, to strengthen your argument regarding technology’s role, you might consider providing specific examples of how technological advances have impacted resource usage in developing versus developed countries.”',
                '“The style of your critique is academic and constructive. However, consider revising some of the complex vocabulary for clarity to ensure your important points about sustainability and technology transfer are accessible to all readers, not just specialists.”',
                '“While your discussion on the quantitative challenges of measuring the relationship between P, A, and T is a strong point, the paragraph could be more organized. Consider structuring your points more sequentially and linking them back to the central thesis more explicitly to improve flow and coherence.”'
              ],
              right: [
                '<b>Easy to understand + double-checked:</b> straightforward; it asks the writer to revisit the citations for completeness.',
                '<b>Lacks detail:</b> it does not say what the grammar problems are or how they affect the writing.',
                '<b>Not useful:</b> no detailed suggestions or examples, and nothing about the content.',
                '<b>Appropriate for text type + detailed and specific:</b> suits an academic critique and suggests using relevant evidence.',
                '<b>Not clear and constructive:</b> overly critical; it does not say which parts are confusing or how to fix them.',
                '<b>Specific goals + clear and useful:</b> relates to the task’s focus and gives a clear direction with specific examples.',
                '<b>Academic style and clarity + useful and practical:</b> friendly, specific advice on style that makes the text more readable.',
                '<b>Clear and constructive + improves writing:</b> focuses on organisation and clarity, and suggests how to make the argument more coherent.'
              ]
            },
            { type: 'do', n: 2, who: 'pair', text: 'Check your answers with the person next to you. Then say which <b>three</b> statements you would most like to receive — and why.' },
            {
              type: 'pairs',
              title: 'From useless to useful',
              items: [
                { from: '“[[Your ideas are confusing.]]”', to: '“In Body Paragraph 2, [[sentence 3 does not link back]] to your topic sentence. [[Add a summary phrase]] such as “This loss of identity …” so the reader can follow your argument.”', tag: 'Specific + actionable', note: 'It says WHERE, WHAT and HOW.' }
              ]
            },
            { type: 'do', n: 3, who: 'alone', text: 'Your turn. Rewrite the weak feedback <b>“You need to check your grammar.”</b> so it is useful. Watch the lights come on.' },
            {
              type: 'detect',
              id: 'b3-dt',
              label: 'Feedback studio',
              checks: [
                { label: 'Says where', color: '#3a58a0', any: ['paragraph', 'sentence', 'introduction', 'conclusion', 'thesis', 'topic sentence', 'line'] },
                { label: 'Starts a suggestion with a verb', color: '#2f7d6b', any: ['/(^|[.!?]\\s*)(add|use|check|change|replace|try|link|move|cut|explain|give|include|make|write)\\b/i'] },
                { label: 'Gives a reason or result', color: '#b07d12', any: ['because', 'so that', 'this will', 'which will', 'to make', 'to help', 'easier'] },
                { label: 'Friendly tone', color: '#8a4f9e', any: ['good', 'well', 'clear', 'strong', 'nice', 'effective', 'great'] }
              ],
              items: [
                {
                  task: 'Useful feedback on grammar',
                  rows: 3,
                  placeholder: 'Your topic sentences are clear. In Body Paragraph 2, …',
                  model: 'Your topic sentences are clear. In Body Paragraph 2, check subject–verb agreement: “cultures is changing” should be “cultures are changing”. Fixing this will make your argument easier to read.'
                }
              ]
            }
          ],
          answers: {
            title: 'Answers (from the Teacher’s Book)',
            items: [
              ['Penn State College and Boersema (2009) …', 'Feedback Easy to Understand: The feedback is straightforward, emphasizing the importance of accurate citations. Double-Checked: It encourages the writer to revisit their citations for completeness, aligning with good academic practice.'],
              ['“You need to check your grammar.”', 'Lacks Detail: It does not specify what grammatical issues are present or how they impact the readability or credibility of the analysis.'],
              ['“Your writing is okay, but try to be more engaging.”', 'Not Useful: It does not provide detailed suggestions or examples on how to make the writing more engaging, nor does it address the technical content of the analysis.'],
              ['“You have identified critical gaps …”', 'Appropriate for Text Type: This feedback is suitable for an academic critique and encourages deeper analysis. Detailed and Specific: It provides concrete suggestions on how to expand the critique using relevant evidence.'],
              ['“Your ideas are confusing.”', 'Not Clear and Constructive: This feedback is overly critical without offering constructive suggestions or clear directions for improvement. Lacks Specifics: It does not point out which parts are confusing or suggest how to clarify them.'],
              ['“The analysis of the interdependence …”', 'Specific Goals: This feedback directly relates to the written task’s focus on the IPAT equation’s limitations. Clear and Useful: Offers clear direction on how to enhance the analysis with specific examples that are relevant to the argument.'],
              ['“The style of your critique …”', 'Academic style and Clarity: Provides specific advice on style and clarity that is friendly and constructive. Useful and Practical: Helps make the text more readable and understandable, which improves the overall quality of the writing.'],
              ['“While your discussion on the quantitative challenges …”', 'Clear and Constructive: This feedback is constructive, focusing on improving the organization and clarity of the writing. Improves Writing: It specifically suggests enhancements that make the argument more coherent and impactful.']
            ]
          }
        },
        {
          id: 'b4',
          short: 'Peer feedback',
          minutes: 15,
          grouping: 'Group ↔ Group',
          art: 'dec10/assets/week5/v/v-d10w5d4-b4.svg',
          title: 'Using AI for Feedback on Joint Writing · Activity 1 Peer Feedback',
          goal: 'Give another group feedback on the Connection of ideas criterion: one positive point and two points for improvement.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-peer-swap.svg',
              size: 'wide',
              alt: 'Two groups swap their joint writing. Each group reads the other paragraph with the rubric criterion Connection of ideas. The feedback card has one green plus (a positive point with an example) and two arrows (points for improvement that start with a verb).',
              caption: 'Swap → read with the rubric → <b>1 positive point + 2 points for improvement</b> → talk.'
            },
            {
              type: 'steps',
              items: [
                { who: 'group', text: 'Focus on the <b>Connection of ideas</b> criterion. Swap your joint writing with another group.' },
                { who: 'group', text: 'Give feedback on the writing you received, considering the descriptors in the rubric.' },
                { who: 'group', text: 'Provide <b>1 positive point</b>. Use examples of what your classmates have done to illustrate this.' },
                { who: 'group', text: 'Provide <b>two points for improvement</b>. Start your suggestions with a verb.' },
                { who: 'group', text: 'Discuss your feedback with your classmates. Listen to their response.' }
              ]
            },
            {
              type: 'fields',
              id: 'b4-fb',
              title: 'Our feedback on Connection of ideas',
              send: true,
              sendLabel: 'Send our feedback to the other group',
              fields: [
                { id: 'b4-pos', label: '+ One positive point (with an example from their writing)', rows: 2, placeholder: 'You link your ideas well. For example, “This flexibility …” in sentence 4 refers back to …' },
                { id: 'b4-imp1', label: '→ Improvement 1 (start with a verb)', rows: 2, placeholder: 'Add a linking word between sentences 2 and 3, such as …' },
                { id: 'b4-imp2', label: '→ Improvement 2 (start with a verb)', rows: 2, placeholder: 'Link your concluding sentence back to …' }
              ]
            },
            {
              type: 'language',
              title: 'Giving and receiving feedback',
              groups: [
                { label: 'A positive point', phrases: ['One strength of your paragraph is …', 'You link … and … well, for example when you write “…”.', 'Your use of “this …” in sentence … clearly refers back to …'] },
                { label: 'Start with a verb', phrases: ['Add a linking word to show …', 'Link the concluding sentence back to the topic sentence.', 'Replace “…” with a summary phrase.', 'Move sentence … so that the ideas flow.'] },
                { label: 'Respond to feedback', phrases: ['Thanks — that’s really helpful.', 'Could you show me where exactly?', 'I see what you mean. We could …', 'Actually, we did that on purpose because …'] }
              ]
            }
          ]
        },
        {
          id: 'b5',
          short: 'Ask AI',
          minutes: 15,
          grouping: 'Same group',
          art: 'dec10/assets/week5/v/v-d10w5d4-b5.svg',
          title: 'Activity 2 AI Feedback',
          goal: 'Use a clear prompt to get AI feedback on the same criterion — then check the AI feedback with the checklist.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Open <b>Cogniti Vanilla</b> or <b>Copilot</b>. Copy the prompt below, then paste your group’s joint writing after it.' },
            {
              type: 'model',
              title: 'Prompt',
              rows: [
                ['Task', 'Review my writing with a focus on the connections between ideas and how well they contribute to the overall coherence of the piece.'],
                ['Requirements', 'Please assess how effectively each sentence transitions to the next and whether my main ideas are clearly connected to the supporting points. Avoid commenting on grammar, vocabulary, or content relevance.'],
                ['Instructions', 'Provide specific feedback on the flow and clarity of connections between ideas. If possible, suggest any areas where transitions or links could be improved to enhance the coherence and logical progression of the argument.']
              ]
            },
            {
              type: 'promptbuilder',
              id: 'b5-pb',
              title: 'Build it, check it, copy it',
              tryUrl: 'https://copilot.microsoft.com/',
              tryLabel: 'Open Copilot',
              parts: [
                { key: 'task', id: 'b5-pb-1', label: 'Task', lead: 'Task:', placeholder: 'Review my writing with a focus on …', chips: ['Review my writing with a focus on the connections between ideas and how well they contribute to the overall coherence of the piece'] },
                { key: 'requirements', id: 'b5-pb-2', label: 'Requirements', lead: 'Requirements:', placeholder: 'Please assess …', chips: ['Please assess how effectively each sentence transitions to the next and whether my main ideas are clearly connected to the supporting points', 'Avoid commenting on grammar, vocabulary, or content relevance'] },
                { key: 'instructions', id: 'b5-pb-3', label: 'Instructions', lead: 'Instructions:', placeholder: 'Provide specific feedback on …', chips: ['Provide specific feedback on the flow and clarity of connections between ideas', 'If possible, suggest any areas where transitions or links could be improved to enhance the coherence and logical progression of the argument'] }
              ]
            },
            {
              type: 'fields',
              title: 'What did the AI say?',
              fields: [{ id: 'b5-ai', label: 'Write the 2–3 most important points from the AI feedback (in your own words)', rows: 3 }]
            },
            { type: 'do', n: 2, who: 'group', text: 'Now judge both kinds of feedback with the checklist. Choose <b>Yes</b>, <b>Partly</b> or <b>No</b> for each question.' },
            {
              type: 'grid',
              id: 'b5-grid',
              title: 'Peer feedback vs AI feedback',
              rows: [
                'Does it match our task?',
                'Is it clear and useful?',
                'Will it improve our writing?',
                'Is it easy to understand?',
                'Have we double-checked it?',
                'Does it cover everything important?',
                'Can we use the suggestions?'
              ],
              columns: ['Peer feedback', 'AI feedback'],
              options: ['Yes', 'Partly', 'No']
            },
            { type: 'tip', text: '<b>Never paste your whole essay and accept everything.</b> The AI may miss points or be too general. You decide which suggestions to use.' }
          ]
        },
        {
          id: 'b6',
          short: 'Compare',
          minutes: 10,
          grouping: 'Groups together',
          art: 'dec10/assets/week5/v/v-d10w5d4-b6.svg',
          title: 'Activity 3 Group Discussion',
          goal: 'Compare the peer feedback and the AI feedback, and decide what to change in your writing.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-peer-vs-ai.svg',
              size: 'wide',
              alt: 'A Venn diagram. Left circle, peer feedback: knows the task and the class, can explain face to face, may be less detailed. Right circle, AI feedback: fast, detailed, follows the prompt, may be general or miss points. Middle: both can help you improve, both need checking.',
              caption: 'What is the same? What is different?'
            },
            { type: 'do', n: 1, who: 'group', text: 'Groups come together. Share both the peer feedback and the AI feedback on your paragraph.' },
            {
              type: 'talk',
              title: 'Discuss',
              prompts: [
                'What are the similarities and differences between the feedback you received from your peers and AI?',
                'Which feedback is easier to understand and more actionable?',
                'What changes can you make to improve your writing based on the feedback and suggestions provided?'
              ]
            },
            {
              type: 'table',
              id: 'b6-tab', live: true,
              title: 'Peer and AI feedback',
              columns: ['', 'Peer feedback', 'AI feedback'],
              fixed: ['Similar points', 'Different points', 'Most actionable point']
            },
            {
              type: 'language',
              title: 'Comparing feedback',
              groups: [
                { label: 'Similar', phrases: ['Both our classmates and the AI said that …', 'The two sets of feedback agree on …', 'Similarly, the AI pointed out …'] },
                { label: 'Different', phrases: ['Our peers focused on …, whereas the AI …', 'Unlike our classmates, the AI …', 'The AI didn’t mention …'] },
                { label: 'Judge it', phrases: ['The peer feedback was more actionable because …', 'The AI feedback was quite general / very specific.', 'I’m not sure the AI is right about …'] }
              ]
            },
            {
              type: 'fields',
              title: 'Our changes',
              fields: [{ id: 'b6-change', label: 'Two changes we will make to our writing', rows: 2, placeholder: '1 … 2 …' }]
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 13A Integrated writing workshop (3) ───────────────────────── */
    {
      id: 'workshop',
      number: '03',
      code: '13A',
      minutes: 120,
      tone: 'plum',
      art: 'dec10/assets/week5/s-d4-workshop.svg',
      title: 'Integrated writing workshop (3)',
      subtitle: 'Take two sample essays apart — then rebuild your own writing',
      outcome: 'You understand better how to structure an essay and develop an argument, how to make your writing cohesive, and how to use evidence and express your position persuasively — and you evaluate your own writing against a sample.',
      activities: [
        {
          id: 'c1',
          short: 'Intro + conclusion',
          minutes: 10,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d4-c1.svg',
          title: 'Deconstruction: Introduction and Conclusion Paragraphs · Activities 1–2',
          goal: 'See the stages of an introduction and a conclusion in Sample 5.1, then find the same stages in Sample 5.2.',
          blocks: [
            {
              type: 'key',
              title: 'Our deconstructions focus on rhetorical structure',
              points: [
                '<b>Text level:</b> the purpose of each paragraph, and how the paragraphs link together to develop an overall argument.',
                '<b>Paragraph level:</b> the purpose of each sentence, and how the sentences link together to develop the main point of the paragraph.'
              ]
            },
            { type: 'sources', ids: ['s51', 's52'] },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-intro-concl.svg',
              size: 'wide',
              alt: 'An hourglass. The top half is the introduction: Background (the topic), more specific background (the focus and issue), the writer’s thesis or position, and a preview of main points 1, 2 and 3. The bottom half is the conclusion: repeat the thesis, summarise the main points, and a future statement (recommendation and significance of the topic).',
              caption: 'Introduction: from general to specific. Conclusion: from specific back to the bigger picture.'
            },
            {
              type: 'model',
              title: 'Activity 1 · The rhetorical structure of Sample 5.1',
              rows: [
                ['Intro · Background (The Topic)', '¹In today’s modern world, advancements in technology and increased international travel have led to a more interconnected globalised world, in which some ideas, values and behaviour transcend national borders (Van Krieken, 2016).'],
                ['Intro · More Specific Background (The Focus and Issue)', '²While interconnection has spurred economic growth and global collaboration, it also raises significant concerns about the impact on cultural identities.'],
                ['Intro · Writer’s Thesis/ Position', '³This essay asserts that cultural globalisation predominantly exerts a negative influence on traditional cultures.'],
                ['Intro · Preview Main Points (1, 2 and 3)', '⁴This is because it has caused an overwhelming prevalence of American values which has led to a loss of cultural uniqueness and despite some multi-directional cultural exchange, this tends to be uneven.'],
                ['Concl · Repeat Writer’s Thesis/ Position + Summarise Main Points (1 and 2)', '¹In summary, this essay has argued that cultural globalisation has negative impacts on culture as the dominance of American cultural norms and values creates a homogenised global culture that often comes at the expense of local traditions.'],
                ['Concl · Summarise Main Point (3)', '²Despite the potential for cultural exchange and innovation, this is often disproportionately balanced, leaving economically and politically weaker nations more vulnerable to cultural erosion.'],
                ['Concl · Future Statement (recommendation and significance of the topic)', '³It is imperative that international policies and practices evolve to protect and nurture the world’s diverse cultural traditions to prevent further cultural loss in the future.']
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: '<b>Activity 2.</b> Identify the same stages in Sample 5.2’s <b>introduction</b>. Match each sentence to its stage.' },
            {
              type: 'match',
              id: 'c1-match',
              title: 'Introduction Paragraph (Sample 5.2)',
              hint: 'Careful: one stage comes <b>before</b> the thesis in this essay!',
              left: [
                '¹Cultural globalisation refers to the rapid movement of ideas, attitudes, and values across national borders, often seen as leading to a more connected world.',
                '²Critics argue that this process results in cultural homogenisation, creating a world dominated by American values, which overshadow local cultures (Hassi & Storti, 2012; Van Krieken, 2016).',
                '³However, this view simplifies the complex interactions that occur when cultures meet.',
                '⁴This essay will challenge the belief that cultural globalisation has a solely negative impact on world cultures.',
                '⁵It will contend cultural globalisation enables cultural exchange which enhances and diversifies global cultural landscapes.',
                '⁶Additionally, the varied and under-researched effects of globalisation should not be unfairly and inaccurately condemned as merely negative.'
              ],
              right: [
                'Background (The Topic: Definition)',
                'More Specific Background (The Focus and Issue)',
                'Preview Main Point (1 Counterargument)',
                'Writer’s Thesis/ Position',
                'Preview Main Point 2',
                'Preview Main Point 3'
              ]
            },
            { type: 'do', n: 2, who: 'alone', text: 'Now the <b>conclusion</b> of Sample 5.2. Choose the stage for each sentence.' },
            {
              type: 'grid',
              id: 'c1-grid',
              title: 'Conclusion Paragraph (Sample 5.2)',
              rows: [
                '¹In conclusion, this essay has contested the view that the sole impact of cultural globalisation is the erosion of local cultures.',
                '²The resilience of core values and the concept of cultural hybridisation show how globalisation encourages a dynamic interplay, fostering innovation and new identities.',
                '³Furthermore, the varied impacts of globalisation highlight its complex effects on global cultures.',
                '⁴Rather than seeing globalisation as a threat, a recognition of its potential for cultural enrichment is needed plus more nuanced research to fully understand its implications.'
              ],
              columns: ['Stage'],
              options: ['Repeat Writer’s Thesis/ Position', 'Summarise Main Points (1 and 2)', 'Summarise Main Point 3', 'Future Statement'],
              answers: [['Repeat Writer’s Thesis/ Position'], ['Summarise Main Points (1 and 2)'], ['Summarise Main Point 3'], ['Future Statement']]
            },
            { type: 'talk', title: 'Explain it to a partner', prompts: ['Why do you think Sample 5.2 puts a main point <b>before</b> the thesis statement?', 'Which introduction do you find more interesting to read? Why?'] }
          ],
          answers: {
            title: 'Answers',
            items: [
              ['5.2 Intro', '¹ Background (The Topic: Definition) · ² More Specific Background (The Focus and Issue) · ³ Preview Main Point (1 Counterargument) · ⁴ Writer’s Thesis/ Position · ⁵ Preview Main Point 2 · ⁶ Preview Main Point 3'],
              ['5.2 Conclusion', '¹ Repeat Writer’s Thesis/ Position · ² Summarise Main Points (1 and 2) · ³ Summarise Main Point 3 · ⁴ Future Statement (recommendation and significance of the topic)'],
              ['Why Main Point 1 first?', 'With this essay’s structure, it is logical to include Main Point 1 first because it is a counterargument, which the thesis statement then refutes.']
            ]
          }
        },
        {
          id: 'c2',
          short: 'Language + paraphrase',
          minutes: 10,
          grouping: 'Pair',
          art: 'dec10/assets/week5/v/v-d10w5d4-c2.svg',
          title: 'Deconstruction: Introduction and Conclusion Paragraphs · Activities 3–5',
          goal: 'Find the language that does each job, compare the two samples, and see how the conclusion paraphrases the introduction.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: '<b>Activity 3.</b> Look at the Sample 5.2 Deconstruction Table in your booklet (introduction and conclusion only). Tap the phrases that signal each rhetorical function (definition, issue, counterargument, thesis, main points, summary, future statement).' },
            {
              type: 'spot',
              id: 'c2-spot',
              title: 'Sample 5.2 · the language of each stage',
              label: 'Spot the signals',
              hint: 'Tap a phrase to select it. Some phrases are only content — leave those.',
              paras: [
                '¹Cultural globalisation [[*refers to]] the rapid movement of ideas, attitudes, and values across national borders, [[*often seen as leading to]] a more connected world. ²[[*Critics argue that]] this process [[*results in]] cultural homogenisation, creating a world dominated by [[American values]], which overshadow local cultures (Hassi & Storti, 2012; Van Krieken, 2016). ³[[*However]], this view simplifies the complex interactions that occur when cultures meet. ⁴[[*This essay will challenge the belief that]] cultural globalisation has a solely negative impact on world cultures. ⁵[[*It will contend]] cultural globalisation enables cultural exchange which enhances and diversifies [[global cultural landscapes]]. ⁶[[*Additionally]], the varied and under-researched effects of globalisation should not be unfairly and inaccurately condemned as merely negative.',
                '¹[[*In conclusion, this essay has contested the view that]] the sole impact of cultural globalisation is the erosion of local cultures. ²The resilience of core values and the concept of cultural hybridisation [[*show how]] globalisation encourages a dynamic interplay, fostering innovation and [[new identities]]. ³[[*Furthermore]], the varied impacts of globalisation highlight its complex effects on global cultures. ⁴[[*Rather than]] seeing globalisation as a threat, a recognition of its potential for cultural enrichment [[*is needed]] plus more nuanced research to fully understand its implications.'
              ]
            },
            { type: 'do', n: 2, who: 'pair', text: '<b>Activity 4.</b> Look at the introduction and conclusion of <b>both</b> samples (open them with the buttons in Activities 1–2). Answer the questions.' },
            {
              type: 'quiz',
              id: 'c2-quiz',
              title: 'Compare Sample 5.1 and Sample 5.2',
              items: [
                { q: 'a) Which sample includes a definition in the introduction?', options: ['Sample 5.1', 'Sample 5.2', 'Both'], answer: 'Sample 5.2', why: '“Cultural globalisation refers to …” is a definition.' },
                { q: 'b) Do both samples mention the impacts of globalisation in the context (background)?', options: ['Yes', 'No, only Sample 5.1', 'No, only Sample 5.2'], answer: 'Yes', why: 'Both give impacts in the background (economic growth, cultural homogenisation).' },
                { q: 'c) Why does Sample 5.2 mention Main Point 1 before the Thesis Statement?', options: ['Because it is a counterargument, which the thesis statement then refutes', 'Because Main Point 1 is the most important point', 'Because the introduction must always start with a main point'], answer: 'Because it is a counterargument, which the thesis statement then refutes', why: 'So it makes sense logically.' },
                { q: 'd) What is the difference between the tense of the thesis statement in the introduction and in the conclusion?', options: ['Introduction: present simple or a future form · Conclusion: present perfect', 'Introduction: present perfect · Conclusion: past simple', 'They both use the past simple'], answer: 'Introduction: present simple or a future form · Conclusion: present perfect', why: 'The introduction is the start of the essay (asserts / will challenge). The conclusion is the end, so it looks back at what the essay has done (has argued / has contested).' },
                { q: 'e) Both samples include a “call to action” at the end of the conclusion. What action is being recommended?', options: ['5.1: international policies and practices should evolve · 5.2: recognise cultural enrichment and do more nuanced research', '5.1: stop all American brands · 5.2: stop globalisation', '5.1: do more research · 5.2: change international policies'], answer: '5.1: international policies and practices should evolve · 5.2: recognise cultural enrichment and do more nuanced research', why: 'Both end with a recommendation that shows the significance of the topic.' }
              ]
            },
            { type: 'do', n: 3, who: 'pair', text: '<b>Activity 5.</b> Student A: look at Sample 5.1. Student B: look at Sample 5.2. What techniques did the writer use to paraphrase the thesis and main points from the introduction in the conclusion? Tell your partner.' },
            {
              type: 'pairs',
              title: 'Introduction → conclusion: what changed?',
              items: [
                { from: '5.1 · ³This essay [[asserts]] that cultural globalisation [[predominantly exerts a negative influence on traditional cultures]].', to: '¹In summary, this essay [[has argued]] that cultural globalisation [[has negative impacts on culture]] …', tag: 'Student A · Thesis', note: 'New opening phrase, present perfect, synonyms (influence → impacts).' },
                { from: '5.1 · ⁴… an [[overwhelming prevalence of American values]] which has led to [[a loss of cultural uniqueness]] …', to: '… [[the dominance of American cultural norms and values]] creates [[a homogenised global culture that often comes at the expense of local traditions]].', tag: 'Student A · Main points 1 and 2', note: 'Synonyms (prevalence → dominance) and a new word form / phrase.' },
                { from: '5.2 · ⁴This essay [[will challenge the belief]] that cultural globalisation has a [[solely negative impact on world cultures]].', to: '¹In conclusion, this essay [[has contested the view]] that [[the sole impact of cultural globalisation is the erosion of local cultures]].', tag: 'Student B · Thesis', note: 'Future → present perfect; challenge → contested; belief → view; solely → sole (word form).' },
                { from: '5.2 · ⁶… the [[varied and under-researched effects]] of globalisation …', to: '³Furthermore, the [[varied impacts]] of globalisation highlight its [[complex effects on global cultures]].', tag: 'Student B · Main point 3', note: 'Only part of the main point is summarised — that is fine.' }
              ]
            },
            {
              type: 'language',
              title: 'Phrases for each stage',
              groups: [
                { label: 'Thesis (introduction)', phrases: ['This essay asserts that …', 'This essay will challenge the belief that …', 'This essay will argue that …', 'It will contend that …'] },
                { label: 'Thesis (conclusion)', phrases: ['In summary, this essay has argued that …', 'In conclusion, this essay has contested the view that …', 'This essay has demonstrated that …'] },
                { label: 'Future statement', phrases: ['It is imperative that …', 'Rather than …, … is needed.', 'Future research should …', 'Governments / communities should …'] },
                { label: 'Paraphrasing techniques', phrases: ['use synonyms (belief → view)', 'change the word form (solely → sole)', 'change the word order', 'change the tense (will challenge → has contested)'] }
              ]
            }
          ],
          answers: {
            title: 'Suggested answers',
            items: [
              ['Activity 3 · Introduction', 'Definition: “refers to”, “often seen as leading to” · Issue: “Critics argue that this process results in …” · Counterargument: “However” · Thesis: “This essay will challenge the belief that …” · Main points: “It will contend”, “Additionally”.'],
              ['Activity 3 · Conclusion', 'Thesis: “In conclusion, this essay has contested the view that …” · Main points: “show how”, “Furthermore” · Future statement / implications: “Rather than …, … is needed”.'],
              ['Activity 5', 'Synonyms, changing word order and word form, a new phrase to introduce each stage (“This essay asserts that …” → “In summary, this essay has argued that …”), and the present perfect to refer back to what the essay has done. Main points may be spread over different sentences or combined in one sentence, and sometimes only one part of a main point is summarised (Sample 5.2, Main Point 1).']
            ]
          }
        },
        {
          id: 'c3',
          short: 'Body 1',
          minutes: 15,
          grouping: 'Class → Alone',
          art: 'dec10/assets/week5/v/v-d10w5d4-c3.svg',
          title: 'Body Paragraph 1: Structure',
          goal: 'See a finished Deconstruction Table (Sample 5.1), then add notes on Sample 5.2’s first body paragraph, sentence by sentence.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-body-para.svg',
              size: 'wide',
              alt: 'A body paragraph as a sandwich of five layers: topic sentence (main point that links to the question), explanation and evidence (with citations), example, refutation or consequence (BUT / SO), and concluding sentence (links back to the topic sentence).',
              caption: 'Each sentence has a job. Signals such as <b>SO</b>, <b>BUT</b>, <b>AND</b>, <b>BECAUSE</b> show how the sentences link.'
            },
            { type: 'do', n: 1, who: 'alone', text: '<b>Activity 1.</b> Open the Sample 5.1 Deconstruction Table and see what a finished one looks like. If there is time, find the ideas from the table in Sample 5.1.' },
            {
              type: 'toggle',
              title: 'Sample 5.1 Deconstruction Table',
              hint: 'Position: Cultural globalisation has a negative influence on traditional cultures (agree)',
              blocks: [
                {
                  type: 'tabs',
                  tabs: [
                    { label: 'Intro', blocks: [{ type: 'model', title: 'Give the context (background) of the topic and the writer’s thesis/position', list: ['S1: Background new tech & increased international travel SO +interconnected/ globalised world', 'S2: Effects: SO economic growth & global collaboration BUT impacts cultural identities', 'S3: Writer’s position/Thesis: Cultural globalisation has neg. influence on trad. cult.s', 'S4: Reasons [+counterargument]: BECAUSE unique culture loss, prevalence of American values and uneven/one-sided cultural exchange'] }] },
                    { label: 'Body 1', blocks: [{ type: 'model', title: 'Present the first reason to support thesis/ position', list: ['S1: Reason 1: American culture= dominant', 'S2: Explanation (Evidence): “Americanisation” and “American hegemony” = US monopoly on entertainment, media & fashion. Example McDonalds & Coca-Cola= omnipresent', 'S3: SO: US values/standards imposed on consumers SO traditional ideologies undermined', 'S4: Counterargument [+Refutation]: Americanisation less concerning in some developing areas (w/ growing global profiles & influence) Example: some Asian countries BUT: other regions left behind'] }] },
                    { label: 'Body 2', blocks: [{ type: 'model', title: 'Present the second reason to support thesis/ position', list: ['S1: Reason 2: trad cults lose unique identity', 'S2: Explanation: World +connected (internet, travel & migration) SO global culture is replacing local identities (e.g. common brands etc.)', 'S3: SO: Young Asian ppl torn/tension= cultural pride vs being global citizens', 'S4: pull of global culture= too strong SO: homogenised world (closer resemblance between different cultures)', 'S5: SO erosion of unique cultural elements/traditions'] }] },
                    { label: 'Body 3', blocks: [{ type: 'model', title: 'Present a counterargument to the writer’s thesis/ position + reject the counterargument', list: ['S1: Counterargument [BUT]: Glob’n can facilitate diversity & innovation by blending different cult.s', 'S2: Explanation (Evidence): multi-directional cultural exchange => diverse global landscape (societies uniquely blending external cultural artifacts w/ tradition)', 'S3: Refutation (BUT) Exchange= unbalanced AND poorer/ politically unstable countries more likely to adopt outside influence SO + vulnerable to culture loss'] }] },
                    { label: 'Concl.', blocks: [{ type: 'model', title: 'Summarise thesis/position and supporting reasons + emphasise the importance of thesis/position', list: ['S1: Writer’s position/Thesis: cultural glob’n has negative impacts on culture BECAUSE: local traditions replaced by American cultural norms & values => homogenised global culture', 'S2: Counterargument: potential for cultural exchange and innovation BUT unbalanced SO econ. & polit. weaker nations= vulnerable to cultural erosion.', 'S3: Implications: international policies/practices should protect & nurture diverse cultural traditions SO…NOT + future cultural loss'] }] }
                  ]
                }
              ]
            },
            { type: 'do', n: 2, who: 'class', text: '<b>Activity 2.</b> Now Sample 5.2, Body Paragraph 1. Read one sentence at a time. Answer its guiding question with a partner, then write a short note for that sentence in the table.' },
            {
              type: 'passage',
              id: 'c3-p',
              title: 'Sample 5.2 · Body Paragraph 1',
              text: '¹A common criticism of globalisation is that it can cause local, traditional cultures to lose their uniqueness. ²Both Hassi and Storti (2012) and Van Krieken (2016) describe a homogenised world in which cultures begin to look more similar as traditional practices are replaced with those from a more dominant culture, citing examples of globally ubiquitous American brands Coca-Cola and McDonald’s that cause a phenomenon known as “Americanisation.” ³However, Crysell et al. (2023) rejects the notion of “Americanisation” as being outdated, particularly in Asia. ⁴Additionally, Hassi and Storti (2012) argue that fashion, food, and entertainment are commonly cited examples of globalisation’s homogenising impacts but are only superficial cultural artifacts, and the essence of cultural identity remains unchanged as traditional values and beliefs are upheld. ⁵Ultimately, the theory of globalisation eroding the uniqueness of local cultures is inaccurate as it disregards the complexity, resilience, and fluidity of culture itself (Hassi & Storti, 2012).'
            },
            {
              type: 'talk',
              title: 'Guiding questions',
              prompts: [
                'a) What is the purpose of the topic sentence (Sentence 1)? How does this sentence link back to the assigned question?',
                'b) How does Sentence 2 add to the topic sentence?',
                'c) In Sentence 2, what is the connection between Coca-Cola, McDonalds and “Americanisation”? Why do you think the writer specifically mentioned Coca-Cola and McDonalds?',
                'd) Why does the writer begin Sentence 3 with “However”? How does the reporting verb used for Crysell et al. (2023) add to this purpose?',
                'e) How does the evidence from Hassi and Storti (2012) in Sentence 4 add to Sentence 3?',
                'f) How does Sentence 5 link back to the topic sentence AND summarise the whole paragraph?'
              ]
            },
            {
              type: 'table',
              id: 'c3-tab',
              title: 'Sample 5.2 Deconstruction Table · Body 1 (purpose of each sentence)',
              columns: ['Sentence', 'Rhetorical function + short notes'],
              fixed: ['S1', 'S2', 'S3', 'S4', 'S5']
            }
          ],
          answers: {
            title: 'Answers (from the Teacher’s Book)',
            items: [
              ['a)', 'It introduces the counterargument (the main idea of the paragraph). It refers back to the assigned question by mentioning globalisation and negative impacts on cultures (loss of uniqueness).'],
              ['b)', 'It provides evidence (references) which show this “common criticism” (from S1) by further explaining how cultures can lose uniqueness.'],
              ['c)', 'The globally ubiquitous nature of Coca-Cola and McDonalds are examples of the process of “Americanisation”. The writer probably chose these products because they are so well known, so they clearly exemplify the impact of Americanisation.'],
              ['d)', '“However” introduces a contrast: the refutation of the previous ideas (the concept of Americanisation), and “rejects” strengthens this refutation.'],
              ['e)', 'Evidence from Hassi and Storti (2012) further refutes the criticism of globalisation.'],
              ['f)', 'It repeats the theory from the topic sentence (globalisation eroding the uniqueness of local cultures) but then refutes this criticism as “inaccurate” and “disregarding” various factors.'],
              ['Table · S1', 'Counterargument (SO): Globalisation => Local/traditional cultures lose uniqueness'],
              ['Table · S2', 'Explanation (Evidence) homogenised world — cultures more similar & dominant cultures replace traditional ones. Example: Coca-Cola & McDonalds (globally ubiquitous) => Definition: “Americanisation”'],
              ['Table · S3', 'Refutation/Evidence (BUT) “Americanisation” = outdated in Asia'],
              ['Table · S4', 'Evidence (AND) fashion, food & entertainment = common egs of glob’n BUT superficial cultural artifacts AND essence of culture’s identity doesn’t change'],
              ['Table · S5', 'SO theory of globalisation eroding cultural uniqueness = inaccurate BECAUSE disregards complexity etc. of culture']
            ]
          }
        },
        {
          id: 'c4',
          short: 'Body 2 + 3',
          minutes: 15,
          grouping: 'Alone / Pair',
          art: 'dec10/assets/week5/v/v-d10w5d4-c4.svg',
          title: 'Body Paragraphs 2 and 3 Structure',
          goal: 'After the counterargument, the writer gives the main arguments. Work out the job of each sentence in Body Paragraphs 2 and 3.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Read Body Paragraphs 2 and 3. Discuss the guiding questions with a partner. Use the tabs.' },
            {
              type: 'tabs',
              title: 'Sample 5.2',
              tabs: [
                {
                  label: 'Body Paragraph 2',
                  blocks: [
                    { type: 'passage', id: 'c4-p2', title: 'Sample 5.2 · Body Paragraph 2', text: '¹One positive impact of globalisation is that a blend of different cultures can prompt innovation and make way for new cultural identities. ²The combination of the global and local facets of culture is termed “cultural hybridisation” (Van Krieken, 2016; Hassi & Storti, 2012) and is being utilised by young people to express individuality and break free of unfavourable traditional stereotypes while still embracing cultural pride (Crysell et al., 2023). ³One example of this is the Chinese streetwear brand “Sankuanz,” which blends international clothing trends with local, Chinese fashion (Crysell et al., 2023). ⁴This flexibility of cultural hybridity creates a myriad of unique blends of old and new cultures around the world (Hassi & Storti, 2012; Crysell et al., 2023; Van Krieken, 2016) which can be seen to enhance and diversify cultures.' },
                    { type: 'talk', title: 'Guiding questions', prompts: ['1. How does the topic sentence (Sentence 1) differ from the information provided in Body Paragraph 1?', '2. What is the function of the phrase “is termed” in Sentence 2? How does the information from Crysell et al. (2023) add to the writer’s argument?', '3. How is “Sankuanz” used in Sentence 3? Which phrases show this rhetorical function?', '4. How does the concluding sentence (Sentence 4) link back to the topic sentence and the writer’s overall argument?'] }
                  ]
                },
                {
                  label: 'Body Paragraph 3',
                  blocks: [
                    { type: 'passage', id: 'c4-p3', title: 'Sample 5.2 · Body Paragraph 3', text: '¹Another reason why globalisation’s impacts should not be labelled as negative is that these effects are diverse and under-researched. ²According to Van Krieken (2016), different cultures can evolve and transform at varying speeds and in diverse ways. ³For instance, societies with weaker economies or political instability are more susceptible to outside influence. ⁴Hassi and Storti (2012) categorise the diverse effects of globalisation as cultural convergence, hybridisation, and differentiation, showing how cultures may adapt, blend, or resist external influences, highlighting the complexity of globalisation. ⁵Clearly, there is not one uniform impact of globalisation, and there is insufficient research to really know the long-term effects (Hassi & Storti, 2012) so condemning these effects as overarchingly negative is unfair.' },
                    { type: 'talk', title: 'Guiding questions', prompts: ['1. What is the purpose of the topic sentence (Sentence 1)? Why did the writer include the phrase “Another reason why” in this sentence?', '2. What is the purpose of the second sentence? How do you know?', '3. Why did the writer include the phrase “For instance” in Sentence 3?', '4. How does the evidence in Sentence 4 (Hassi & Storti, 2012) add to the main point of the paragraph? How does the reporting verb help the reader understand this?', '5. How does the concluding sentence (Sentence 5) link back to the topic sentence?'] }
                  ]
                }
              ]
            },
            { type: 'do', n: 2, who: 'alone', text: 'Body Paragraph 2: put the sentences back in order. Use the signals (<i>One positive impact …</i>, <i>is termed</i>, <i>One example of this</i>, <i>This flexibility …</i>).' },
            {
              type: 'order',
              id: 'c4-order',
              title: 'Rebuild Body Paragraph 2',
              items: [
                'Reason 1: a blend of cultures → innovation & new cultural identities (“One positive impact of … is that …”)',
                'Definition: global + local culture = “cultural hybridisation” (“is termed …”) — young people use it to express individuality',
                'Example: “Sankuanz” blends international and local Chinese fashion (“One example of this is …”)',
                'SO: hybridity’s flexibility → many unique blends → enhanced & diversified cultures (“This flexibility … which can be seen to …”)'
              ],
              ends: ['First', 'Last'],
              why: 'Topic sentence (reason) → definition and evidence → example → concluding sentence that links back to the topic sentence.'
            },
            { type: 'do', n: 3, who: 'alone', text: 'Body Paragraph 3: what is the job of each sentence? Sort them.' },
            {
              type: 'sort',
              id: 'c4-sort',
              title: 'Body Paragraph 3 · the job of each sentence',
              buckets: [
                { label: 'Topic sentence', text: 'the main point', letter: 'T' },
                { label: 'Explanation (Evidence)', text: 'with a source', letter: 'E' },
                { label: 'Example', letter: 'X' },
                { label: 'Concluding sentence', text: 'SO …', letter: 'C' }
              ],
              items: [
                { text: '¹Another reason why globalisation’s impacts should not be labelled as negative is that these effects are diverse and under-researched.', answer: 0, why: '“Another reason why” signals a new main point.' },
                { text: '²According to Van Krieken (2016), different cultures can evolve and transform at varying speeds and in diverse ways.', answer: 1, why: 'A citation — evidence that explains the main idea.' },
                { text: '³For instance, societies with weaker economies or political instability are more susceptible to outside influence.', answer: 2, why: '“For instance” introduces an example.' },
                { text: '⁴Hassi and Storti (2012) categorise the diverse effects of globalisation as cultural convergence, hybridisation, and differentiation …', answer: 1, why: '“categorise” introduces the types of effects — more evidence.' },
                { text: '⁵Clearly, there is not one uniform impact of globalisation … so condemning these effects as overarchingly negative is unfair.', answer: 3, why: 'It links back to the topic sentence.' }
              ]
            },
            {
              type: 'table',
              id: 'c4-tab',
              title: 'Sample 5.2 Deconstruction Table · Body 2 and Body 3',
              columns: ['Sentence', 'Rhetorical function + short notes'],
              fixed: ['Body 2 · S1', 'Body 2 · S2', 'Body 2 · S3', 'Body 2 · S4', 'Body 3 · S1', 'Body 3 · S2', 'Body 3 · S3', 'Body 3 · S4', 'Body 3 · S5']
            }
          ],
          answers: {
            title: 'Answers (from the Teacher’s Book)',
            items: [
              ['Body 2 · Q1', 'It offers a positive impact of globalisation (the main idea of this body paragraph), which contrasts with the negative criticism given and the refutation of this in Body Para 1.'],
              ['Body 2 · Q2', '“is termed” introduces a definition of “cultural hybridisation”. The information from Crysell et al. (2023) shows the positive effect cultural hybridisation is having on young people.'],
              ['Body 2 · Q3', '“Sankuanz” provides an example of cultural hybridisation (blends international clothing trends with local, Chinese fashion). “One example of this is …” introduces the example, and “this” refers back to “cultural hybridisation” (from the previous sentence).'],
              ['Body 2 · Q4', '“cultural hybridity creates a myriad of unique blends” links back to “a blend of different cultures”, and “enhance and diversify cultures” links back to “make way for new cultural identities”. This emphasises a positive impact of globalisation (the writer’s argument).'],
              ['Body 3 · Q1', 'To introduce the paragraph’s main point = another reason which supports the thesis statement. “Another reason why” signals a new main point and links back to the previous paragraph.'],
              ['Body 3 · Q2', 'It provides evidence to support the main idea. We know this because it includes a citation and further explains how globalisation’s effects are diverse.'],
              ['Body 3 · Q3', 'It introduces an example of how certain types of cultures are affected differently (societies with weaker economies or political instability).'],
              ['Body 3 · Q4', 'It shows the diversity of globalisation’s effects. “categorise” introduces the different types of possible effects (cultural convergence, hybridisation and differentiation), and “showing how” further clarifies these effects.'],
              ['Body 3 · Q5', '“there is not one uniform impact of globalisation” = “these effects are diverse” · “there is insufficient research to really know the long-term effects” = “under-researched” · “condemning these effects as overarchingly negative is unfair” = “should not be labelled as negative”.'],
              ['Table · Body 2', 'S1 Reason 1: Blend of cultures SO innovation & new cultural identities · S2 Definition: combination of global & local culture = “cultural hybridisation” BECAUSE express individuality, break stereotypes etc. · S3 Example: “Sankuanz” blends international & local, Chinese fashion · S4 SO: cultural hybridity’s flexibility => many unique blends of old & new cultures SO enhanced & diversified cultures'],
              ['Table · Body 3', 'S1 Reason 2: Glob’n effects = diverse & under-researched · S2 Explanation (Evidence): diff. cultures change at diff. speeds & in diff. ways · S3 Example: weaker economies / political instability = more susceptible to influence · S4 Explanation (Evidence): diverse effects = cultural convergence, hybridisation & differentiation = complexity of globalisation · S5 SO: impacts diverse & under-researched SO condemning as “negative” = unfair']
            ]
          }
        },
        {
          id: 'c5',
          short: 'Text maps',
          minutes: 5,
          grouping: 'Class',
          art: 'dec10/assets/week5/v/v-d10w5d4-c5.svg',
          title: 'Deconstruction tables and text maps',
          goal: 'Compare the completed Deconstruction Tables with the text maps — and with the text map you made at home.',
          blocks: [
            {
              type: 'key',
              title: 'Table and map: two views of the same structure',
              points: [
                'The notes and phrases in your Deconstruction Table should be similar to your <b>text map</b> from homework.',
                'Your map may not be exactly the same — but the <b>structure</b> (the flow of ideas) should be similar.'
              ]
            },
            {
              type: 'tabs',
              title: 'Sample text maps',
              tabs: [
                { label: 'Text Map 5.1 · Agree', blocks: [{ type: 'figure', src: 'dec10/assets/week5/d4-textmap-51.svg', size: 'wide', alt: 'Sample Text Map 5.1 (agree). Top: background (new tech and increased international travel) SO a more interconnected world SO economic growth BUT impact on cultural identities, then the thesis: cultural globalisation has a negative influence on traditional cultures. Three columns: Negative impact 1, Americanisation (US culture dominant; explanation; example McDonalds and Coca-Cola; SO values imposed; counterargument BUT other regions left behind). Negative impact 2, loss of traditional identity (world more connected SO global culture replaces local identities; consequence: young Asian people torn; SO homogenised world; SO erosion of traditions). Counterargument and refutation: blending cultures leads to innovation BUT exchange is unbalanced SO poorer countries more vulnerable. Bottom: thesis restated and implications: policies should protect cultural traditions.', caption: 'Sample Text Map 5.1: AGREE' }] },
                { label: 'Text Map 5.2 · Disagree', blocks: [{ type: 'figure', src: 'dec10/assets/week5/d4-textmap-52.svg', size: 'wide', alt: 'Sample Text Map 5.2 (disagree). Top: definition of cultural globalisation SO a more connected world SO critics argue cultural homogenisation BUT this view simplifies complex interactions; thesis: cultural globalisation does NOT have a solely negative impact. Three columns: Counterargument and refutation, loss of unique culture (explanation; example Coca-Cola and McDonalds = Americanisation; BUT Americanisation outdated in Asia; AND superficial artifacts; SO theory inaccurate). Blend of cultures leads to innovation and new identities (definition: cultural hybridisation; BECAUSE young people express individuality; example: a Chinese streetwear brand; SO enhanced and diversified cultures). Impacts diverse and under-researched (explanation; example weaker economies; explanation: convergence, hybridisation, differentiation; SO condemning as negative is unfair). Bottom: thesis restated and implications: do not see globalisation as a threat; more research needed.', caption: 'Sample Text Map 5.2: DISAGREE' }] }
              ]
            },
            {
              type: 'checklist',
              id: 'c5-check',
              title: 'Compare with your own text map',
              items: [
                'I have the thesis at the top and at the bottom.',
                'I have three main columns (one for each body paragraph).',
                'I show the links with SO / BUT / AND / BECAUSE.',
                'I wrote the signal phrases in brackets (e.g. “Consequently”).',
                'My flow of ideas is similar to the sample.'
              ]
            },
            { type: 'talk', title: 'Quick talk', prompts: ['What is one thing your text map has that the sample does not — or the other way round?'] }
          ]
        },
        {
          id: 'c6',
          short: 'Counterargument',
          minutes: 10,
          grouping: 'Pair',
          art: 'dec10/assets/week5/v/v-d10w5d4-c6.svg',
          title: 'Features of Academic Writing: Counterargument & Refutation',
          goal: 'Find the counterargument and the refutation, and the language that introduces them.',
          blocks: [
            {
              type: 'key',
              title: 'Two words to know',
              compare: [
                { label: 'Counterargument', text: 'an argument or set of reasons which oppose (go against) the idea or theory developed in the main argument.' },
                { label: 'Refutation', text: 'the act of disproving a statement, argument, or theory (the counterargument) by presenting compelling evidence or reasoning.' }
              ],
              points: ['Sometimes the writer’s main argument, a counterargument and a refutation are all in <b>one paragraph</b>.']
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-counter-refute.svg',
              size: 'wide',
              alt: 'A balance scale. On the left, the counterargument (“On the other hand, many argue that …”) goes up because it is lighter. On the right, the refutation (“However, …”) with evidence weights pushes down, so the writer’s main argument wins. A label says: even if … softens the counterargument.',
              caption: 'Show the other side — then show why your side is stronger.'
            },
            {
              type: 'model',
              title: 'Sample 5.1: Body Paragraph 1 (extract)',
              text: 'American values and standards are being imposed on the consumers of these products and media, thus undermining their own traditions (Van Krieken, 2016). <b>Even if</b> Americanisation is becoming less of a concern in some developing areas with growing global profiles and influence, like some Asian countries (Crysell et al., 2023), other less developed regions are probably still being left behind in this regard.',
              note: '“Even if” introduces and acknowledges the counterargument — and at the same time makes it less important for the main claim.'
            },
            {
              type: 'talk',
              title: 'Discuss',
              prompts: ['a) What is the benefit of including counterargument and refutation in an argument essay?', 'b) How does it strengthen the argument?']
            },
            { type: 'do', n: 1, who: 'pair', text: 'In Sample 5.1, Body Paragraph 3, the whole paragraph is counterargument and refutation. Tap the phrases that <b>introduce</b> the counterargument and the refutation.' },
            {
              type: 'spot',
              id: 'c6-spot',
              title: 'Sample 5.1: Body Paragraph 3',
              label: 'Spot the signals',
              paras: ['[[*On the other hand, many argue that]] globalisation can be seen to facilitate diversity and innovation by blending [[different cultures together]]. Some scholars argue that the multi-directional cultural exchange of globalisation creates a diverse global landscape of societies which blend external cultural artifacts with traditional practices [[in unique ways]] (Hassi & Storti, 2012; Crysell et al., 2023; Van Krieken, 2016). [[*However]], this exchange is ultimately unbalanced, and countries that are not wealthy or politically stable are more likely to adopt outside influence (Van Krieken, 2016), making them [[more vulnerable to culture loss]].']
            },
            { type: 'do', n: 2, who: 'pair', text: 'Now Sample 5.2, Body Paragraph 1. Is each sentence part of the <b>counterargument</b> or the <b>refutation</b>?' },
            {
              type: 'sort',
              id: 'c6-sort',
              title: 'Sample 5.2: Body Paragraph 1',
              buckets: [{ label: 'Counterargument', letter: 'C' }, { label: 'Refutation', letter: 'R' }],
              items: [
                { text: '¹A common criticism of globalisation is that it can cause local, traditional cultures to lose their uniqueness.', answer: 0, why: '“A common criticism of … is that …” introduces the counterargument.' },
                { text: '²Both Hassi and Storti (2012) and Van Krieken (2016) describe a homogenised world … “Americanisation.”', answer: 0, why: 'Evidence for the counterargument.' },
                { text: '³However, Crysell et al. (2023) rejects the notion of “Americanisation” as being outdated, particularly in Asia.', answer: 1, why: '“However … rejects the notion of … as being …”' },
                { text: '⁴Additionally, Hassi and Storti (2012) argue that fashion, food, and entertainment … are only superficial cultural artifacts …', answer: 1, why: '“Additionally … argue that …” adds more refutation.' },
                { text: '⁵Ultimately, the theory of globalisation eroding the uniqueness of local cultures is inaccurate …', answer: 1, why: 'The writer’s final rejection of the counterargument.' }
              ]
            },
            {
              type: 'language',
              title: 'More language for counterargument and refutation',
              groups: [
                { label: 'Introduce a counterargument', phrases: ['On the other hand, many argue that …', 'A common criticism of … is that …', 'Some scholars claim that …', 'It could be argued that …', 'Admittedly, …'] },
                { label: 'Refute it', phrases: ['However, …', '… rejects the notion of … as being …', 'This view overlooks / simplifies …', 'Nevertheless, the evidence suggests that …', 'Ultimately, this argument is flawed because …'] },
                { label: 'Soften it (concede)', phrases: ['Even if …, …', 'While it is true that …, …', 'Although … , …'] }
              ]
            }
          ],
          answers: {
            title: 'Answers (from the Teacher’s Book)',
            items: [
              ['a) Benefit', 'A counterargument shows that the writer is open to different perspectives and considers opposing viewpoints.'],
              ['b) Strength', 'The refutation demonstrates why a counterargument is incorrect or less effective, and reinforces the original position.'],
              ['5.1 Body 3', 'C: Globalisation can facilitate diversity & innovation by blending different cultures, with a multi-directional cultural exchange creating a diverse global landscape — introduced by “On the other hand, many argue that …”. R: This exchange is unbalanced and poorer / politically unstable countries are more vulnerable to culture loss — introduced by “However …”.'],
              ['5.2 Body 1', 'C: Globalisation causes local/traditional cultures to lose uniqueness and creates a homogenised, Americanised world (“A common criticism of … is that …”). R: “Americanisation” is an outdated concept, and common examples (fashion, food & entertainment) are superficial cultural artifacts; the theory disregards the complexity of culture (“However … rejects the notion of … as being … Additionally, … argue that …”; “commonly cited as examples of …, but are only superficial … and …”).']
            ]
          }
        },
        {
          id: 'c7',
          short: 'Cohesion',
          minutes: 15,
          grouping: 'Groups of 3',
          art: 'dec10/assets/week5/v/v-d10w5d4-c7.svg',
          title: 'Features of Academic Writing: Cohesion',
          goal: 'Find the four kinds of cohesive devices that connect ideas in a paragraph.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-cohesion.svg',
              size: 'wide',
              alt: 'Four cohesive devices as links in a chain. Linking words (As a result, However) connect clauses and sentences. Lexical chains (culture, cultural identities, cultural hybridisation) repeat related words. Summary phrases (this flexibility of cultural hybridity) sum up what was said. Referents (this, which, they) point back to earlier ideas with an arrow.',
              caption: 'Old information → new information. Each device points back so the reader can follow.'
            },
            {
              type: 'cards',
              title: 'Group of 3: choose your job',
              items: [
                { label: 'Student A', text: 'Lexical chains — synonyms and related words repeated through the whole paragraph.' },
                { label: 'Student B', text: 'Summary phrases (a noun phrase, often with <i>this / these</i>) and referents (<i>this, that, which, who, it, they</i>).' },
                { label: 'Student C', text: 'Linking words that connect ideas between clauses and sentences.' }
              ]
            },
            { type: 'do', n: 1, who: 'group', text: '<b>Task 1 · Sample 5.2, Body Paragraph 2.</b> Each person finds their device. Student B: tap the summary phrases and referents below. Then explain your finds to the group.' },
            {
              type: 'spot',
              id: 'c7-spot1',
              title: 'Sample 5.2 · Body Paragraph 2 · summary phrases and referents',
              label: 'Student B',
              paras: ['[[One positive impact of]] globalisation is that a blend of different cultures can prompt innovation and make way for new cultural identities. [[*The combination of the global and local facets of culture]] is termed “cultural hybridisation” and is being utilised by [[young people]] to express individuality and break free of unfavourable traditional stereotypes while still embracing cultural pride. One example of [[*this]] is the Chinese streetwear brand “Sankuanz,” [[*which]] blends international clothing trends with local, Chinese fashion. [[*This flexibility of cultural hybridity]] creates a myriad of unique blends of old and new cultures [[around the world]] [[*which]] can be seen to enhance and diversify cultures.']
            },
            {
              type: 'toggle',
              title: 'Students A and C: check your answers for Sample 5.2',
              hint: 'Open after your group has talked.',
              blocks: [
                { type: 'model', title: 'Student C · Linking words (Teacher’s Book)', text: '<u>One positive impact of</u> globalisation <u>is that</u> a blend of different cultures can prompt innovation <u>and</u> make way for new cultural identities. The combination of the global and local facets of culture is termed “cultural hybridisation” <u>and</u> is being utilised by young people to express individuality <u>and</u> break free of unfavourable traditional stereotypes <u>while still</u> embracing cultural pride. <u>One example of this is</u> the Chinese streetwear brand “Sankuanz,” which blends international clothing trends with local, Chinese fashion. This flexibility of cultural hybridity creates a myriad of unique blends of old and new cultures around the world which can be seen to enhance and diversify cultures.' },
                { type: 'model', title: 'Student A · Lexical chains (suggested answer)', list: ['<b>blend:</b> a blend of different cultures → the combination of the global and local → cultural hybridisation → blends → cultural hybridity → unique blends', '<b>culture:</b> cultures → cultural identities → culture → cultural pride → cultures', '<b>new:</b> innovation → new cultural identities → break free → old and new', '<b>global / local:</b> globalisation → global and local → international … local, Chinese → around the world'] }
              ]
            },
            { type: 'do', n: 2, who: 'group', text: '<b>Task 2 · Sample 5.1, Body Paragraph 2.</b> Swap jobs: each person finds a <b>different</b> device this time. The linking-words finder taps the linking words below. (In-text references have been removed to make the paragraph easier to read.)' },
            {
              type: 'spot',
              id: 'c7-spot2',
              title: 'Sample 5.1 · Body Paragraph 2 · linking words',
              label: 'Linking words',
              hint: 'Only linking words — not summary phrases!',
              paras: ['¹[[*As a result of]] [[this globalised, Americanised world]], traditional cultures can lose their unique identity. ²[[*Through]] the global connectedness which the internet, international travel and migration have facilitated, some local identities are being replaced by a global culture [[*in which]] the same brands, fashion, music and entertainment are popular worldwide. ³[[*As a result]], in many countries, [[*for instance]] in Asia, young people are torn between maintaining cultural pride and their desire to be [[global citizens]]. ⁴For many, the pull towards a global culture is too strong to resist, [[*which contributes to]] a homogenised world [[*in which]] the resemblance between different cultures is growing closer. ⁵[[*Ultimately]], [[this cultural homogenisation]] can lead to the erosion of unique cultural elements and traditions.']
            },
            {
              type: 'toggle',
              title: 'Check: lexical chains, summary phrases and referents in Sample 5.1',
              hint: 'Open after your group has talked.',
              blocks: [
                { type: 'model', title: 'Summary phrases and referents (Teacher’s Book)', text: '¹As a result of this globalised, Americanised world, traditional cultures can lose their unique identity. ²Through the <b>global connectedness which</b> the internet, international travel and migration have facilitated, some local identities are being replaced by a <b>global culture in which</b> the same brands, fashion, music and entertainment are popular worldwide. ³As a result, in many countries, for instance in Asia, <b>young people</b> are torn between maintaining cultural pride and <b>their</b> desire to be global citizens. ⁴For <b>many</b>, <b>the pull</b> towards a global culture is too strong to resist, <b>which</b> contributes to a <b>homogenised world in which</b> the resemblance between different cultures is growing closer. ⁵Ultimately, <b>this cultural homogenisation</b> can lead to the erosion of unique cultural elements and traditions.' },
                { type: 'model', title: 'Lexical chains (suggested answer)', list: ['<b>global:</b> globalised, Americanised world → global connectedness → global culture → worldwide → global citizens → global culture', '<b>identity:</b> traditional cultures → unique identity → local identities → cultural pride → unique cultural elements and traditions', '<b>sameness:</b> the same brands → homogenised world → resemblance → cultural homogenisation'] }
              ]
            },
            {
              type: 'language',
              title: 'Cohesive devices to use in your own writing',
              groups: [
                { label: 'Linking words', phrases: ['As a result (of) …', 'Consequently, …', 'For instance, …', 'which contributes to …', 'Ultimately, …'] },
                { label: 'Summary phrases', phrases: ['This process …', 'This flexibility of …', 'These effects …', 'Such changes …'] },
                { label: 'Referents', phrases: ['this / these · that / those', 'which / where / who', 'it / they / their'] }
              ]
            }
          ],
          answers: {
            title: 'Answers',
            items: [
              ['Task 1 · Summary phrases and referents', '“The combination of the global and local facets of culture” sums up “a blend of different cultures”. “this” refers back to cultural hybridisation (young people expressing individuality …). “which” refers to the brand “Sankuanz”. “This flexibility of cultural hybridity” sums up the idea so far, and the last “which” refers to “a myriad of unique blends of old and new cultures”.'],
              ['Task 2 · Linking words', 'As a result of · Through · in which · As a result · for instance · which contributes to · in which · Ultimately. (“this globalised, Americanised world” and “this cultural homogenisation” are summary phrases, not linking words.)']
            ]
          }
        },
        {
          id: 'c8',
          short: 'Voice + citations',
          minutes: 5,
          grouping: 'Alone',
          art: 'dec10/assets/week5/v/v-d10w5d4-c8.svg',
          title: 'Features of Academic Writing: Voice and In-Text Citations',
          goal: 'Tell the writer’s voice from the ideas taken from sources, and internal from external in-text references.',
          blocks: [
            {
              type: 'key',
              title: 'Two voices in one paragraph',
              compare: [
                { label: 'Writer’s voice', text: 'the writer’s own claims, links and judgements.', eg: 'A common criticism of globalisation is that …' },
                { label: 'Source ideas', text: 'information the writer has taken from the sources and synthesised.', eg: '… describe a homogenised world …' }
              ],
              points: ['<b>Internal</b> in-text reference = the author is part of the sentence, with a reporting phrase: <i>Hassi and Storti (2012) argue that …</i>', '<b>External</b> in-text reference = the author is in brackets: <i>(Van Krieken, 2016)</i>']
            },
            {
              type: 'model',
              title: 'Sample 5.2: Body Paragraph 1 · ideas from the sources in bold',
              text: '¹A common criticism of globalisation is that it can cause local, traditional cultures to lose their uniqueness. ²Both Hassi and Storti (2012) and Van Krieken (2016) describe a <b>homogenised world in which cultures begin to look more similar as traditional practices are replaced with those from a more dominant culture, citing examples of globally ubiquitous American brands Coca-Cola and McDonald’s that cause a phenomenon known as “Americanisation.”</b> ³However, Crysell et al. (2023) rejects <b>the notion of “Americanisation” as being outdated, particularly in Asia.</b> ⁴Additionally, Hassi and Storti (2012) argue <b>that fashion, food, and entertainment are commonly cited examples of globalisation’s homogenising impacts but are only superficial cultural artifacts, and the essence of cultural identity remains unchanged as traditional values and beliefs are upheld</b>. ⁵Ultimately, the theory of globalisation eroding the uniqueness of local cultures is inaccurate as <b>it disregards the complexity, resilience, and fluidity of culture itself</b> (Hassi & Storti, 2012).'
            },
            { type: 'do', n: 1, who: 'alone', text: 'Now Sample 5.1, Body Paragraph 1 (and two more from 5.2). Sort each part.' },
            {
              type: 'sort',
              id: 'c8-sort',
              title: 'Writer’s voice, internal or external reference?',
              buckets: [{ label: 'Writer’s voice', letter: 'W' }, { label: 'Internal reference', text: 'author + reporting phrase', letter: 'I' }, { label: 'External reference', text: '(Author, year)', letter: 'E' }],
              items: [
                { text: 'In today’s globalised world, it is specifically an American influence which is dominating the global culture.', answer: 0, why: 'The writer’s own topic sentence — no source.' },
                { text: 'In a phenomenon that both Hassi and Storti (2012) and Van Krieken (2016) refer to as …', answer: 1 },
                { text: '… thus undermining their own traditions (Van Krieken, 2016).', answer: 2 },
                { text: '… like some Asian countries (Crysell et al., 2023) …', answer: 2 },
                { text: '… other less developed regions are probably still being left behind in this regard.', answer: 0, why: 'The writer’s own careful judgement (“probably”).' },
                { text: 'However, Crysell et al. (2023) rejects …', answer: 1 },
                { text: '… the complexity, resilience, and fluidity of culture itself (Hassi & Storti, 2012).', answer: 2 },
                { text: 'Ultimately, the theory of globalisation eroding the uniqueness of local cultures is inaccurate …', answer: 0 }
              ]
            },
            {
              type: 'language',
              title: 'Reporting phrases for internal references',
              groups: [
                { label: 'Neutral', phrases: ['… describe …', '… refer to … as …', 'According to … (2016), …', '… categorise … as …'] },
                { label: 'Strong', phrases: ['… argue that …', '… reject the notion of … as …', '… claim that …', '… demonstrate that …'] }
              ]
            }
          ]
        },
        {
          id: 'c9',
          short: 'Stance',
          minutes: 10,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d4-c9.svg',
          title: 'Features of Academic Writing: Expressing Stance through Strong and Evaluative Language',
          goal: 'See how word choice gives the reader an impression — and find the strong language in both samples.',
          blocks: [
            {
              type: 'key',
              title: 'Same sources, different stance',
              points: [
                'Both samples use the same examples (Coca-Cola and McDonalds = globally ubiquitous) — just as <b>examples</b> of Americanisation.',
                'But the writers use <b>strong and evaluative language</b> when they present similar information, to support their own argument. You can shape the text to suit your needs.'
              ]
            },
            {
              type: 'model',
              title: 'Idea 1 · notice the words in bold',
              rows: [
                ['Sample 5.1 (agree)', 'The United States is <b>monopolising</b> global entertainment, media and fashion industries… Consequently, American values and standards <b>are being imposed</b> on the consumers of these products and media, thus <b>undermining</b> their own traditions.'],
                ['Sample 5.2 (disagree)', '…fashion, food, and entertainment are commonly cited examples of globalisation’s homogenising impacts but <b>are only superficial</b> cultural artifacts, and <b>the essence of</b> cultural identity <b>remains unchanged</b> as traditional values and beliefs are upheld']
              ],
              note: '5.1: “monopolising”, “are being imposed” and “undermining” all have a negative connotation (association). 5.2: “the essence of … remains unchanged” is quite positive, and “are only superficial” minimises the criticisms of globalisation.'
            },
            { type: 'do', n: 1, who: 'alone', text: 'Tap the strong positive / negative words and phrases the writers used to strengthen their argument. Extracts A–D are from Sample 5.1; E–H are from Sample 5.2.' },
            {
              type: 'spot',
              id: 'c9-spot',
              title: 'Find the stance',
              label: 'Strong language',
              paras: [
                'While [[interconnection]] has spurred economic growth and global collaboration, it also raises [[*significant concerns]] about the impact on cultural identities.',
                '….in many countries, for instance in Asia, [[young people]] [[*are torn]] between maintaining cultural pride and their desire to be global citizens (Crysell et al., 2023).',
                '…this exchange is [[*ultimately unbalanced]], and countries that are not wealthy or politically stable are more likely to adopt outside influence, making them [[*more vulnerable]] to culture loss',
                '[[*It is imperative]] that international policies and practices evolve to [[*protect and nurture]] the world’s diverse cultural traditions [[*to prevent further cultural loss]] in the future.',
                'This flexibility of cultural hybridity creates [[*a myriad of unique blends]] of old and new cultures [[around the world]] (Hassi & Storti, 2012; Crysell et al., 2023; Van Krieken, 2016) which can be seen to [[*enhance]] and diversify cultures.',
                '[[*Clearly]], there is not one uniform impact of globalisation, and there is [[*insufficient]] research to really know the [[long-term effects]] (Hassi & Storti, 2012) so [[*condemning these effects as overarchingly negative is unfair]].',
                'The [[*resilience]] of core values and the concept of cultural hybridisation show how globalisation [[*encourages a dynamic]] interplay, [[*fostering innovation and new identities]].',
                '[[*Rather than seeing globalisation as a threat]], [[*a recognition of its potential for cultural enrichment is needed]] plus more nuanced research to fully understand its implications.'
              ]
            },
            {
              type: 'flip',
              title: 'Evaluative words: positive or negative?',
              hint: 'Say if the word sounds positive or negative. Then turn the card.',
              items: [
                { front: 'monopolising', back: 'Negative — one side controls everything.' },
                { front: 'undermining', back: 'Negative — slowly making something weaker.' },
                { front: 'imperative', back: 'Strong — it is very important and must happen.' },
                { front: 'resilience', back: 'Positive — able to recover and stay strong.' },
                { front: 'fostering', back: 'Positive — helping something to grow.' },
                { front: 'superficial', back: 'Minimising — only on the surface, not deep.' }
              ]
            },
            { type: 'talk', title: 'Pair talk', prompts: ['Which extract sounds the most persuasive to you? Why?', 'Choose one extract. Say it again with neutral words. What changes?'] }
          ],
          answers: {
            title: 'Answers (from the Teacher’s Book)',
            items: [
              ['Sample 5.1', 'A) significant concerns · B) are torn · C) ultimately unbalanced … vulnerable … · D) It is imperative … protect and nurture … to prevent further cultural loss'],
              ['Sample 5.2', 'E) a myriad of unique blends … enhance · F) Clearly … insufficient … so condemning these effects as overarchingly negative is unfair · G) resilience … encourages a dynamic … fostering innovation and new identities · H) Rather than seeing globalisation as a threat, a recognition of its potential for cultural enrichment is needed …']
            ]
          }
        },
        {
          id: 'c10',
          short: 'Hedging',
          minutes: 10,
          grouping: 'Pair',
          art: 'dec10/assets/week5/v/v-d10w5d4-c10.svg',
          title: 'Features of Academic Writing: Hedging Language',
          goal: 'Use hedging language to write cautiously — without exaggerating or overgeneralising.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-hedge-dial.svg',
              size: 'wide',
              alt: 'A dial from Exaggerated to Cautious. On the red exaggerated side: always, all, every, definitely, completely, causes. On the green cautious side: can, some, many, for many, probably, contributes to, is more susceptible to. The needle points to cautious.',
              caption: 'Turn the dial down: from <b>always / all / definitely</b> to <b>can / some / probably</b>.'
            },
            {
              type: 'pairs',
              title: 'Compare',
              items: [
                { from: 'Even though Americanisation is becoming less of a concern in some developing areas… other undeveloped regions are [[definitely]] still being [[completely]] left behind.', to: 'Even if Americanisation is becoming less of a concern in some developing areas… other less developed regions are [[probably]] still being left behind [[in this regard]].', tag: 'Exaggerated → hedged', note: 'From Sample 5.1: Body Paragraph 1.' }
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: 'Tap the hedging language (words / phrases) the writer used to present the argument cautiously. (In-text references have been removed.)' },
            {
              type: 'spot',
              id: 'c10-spot',
              title: 'Sample 5.1: Body Paragraph 2',
              label: 'Hedging',
              paras: ['As a result of this globalised, Americanised world, traditional cultures [[*can]] lose their unique identity. Through the global connectedness which the internet, international travel and migration have [[*facilitated]], [[*some]] local identities are being replaced by a global culture in which the same brands, fashion, music and entertainment are popular [[worldwide]]. As a result, in [[*many]] countries, for instance in Asia, young people are [[torn]] between maintaining cultural pride and their desire to be global citizens. [[*For many,]] the pull towards a global culture is [[too strong]] to resist, which [[*contributes to]] a homogenised world in which the resemblance between different cultures is growing closer. [[Ultimately]], this cultural homogenisation [[*can]] lead to the erosion of unique cultural elements and traditions.']
            },
            { type: 'do', n: 2, who: 'pair', text: '<b>Exaggerate it!</b> Student A spins and reads the sentence with BIG, exaggerated emphasis. Student B says it again with hedging language. Then swap.' },
            {
              type: 'spinner',
              id: 'c10-spin',
              title: 'Exaggerate it — hedge it',
              label: 'Speaking game',
              reels: [
                {
                  label: 'Statement',
                  items: [
                    'Everybody knows that globalisation causes local, traditional cultures to lose their uniqueness.',
                    'This flexibility of cultural hybridity creates a myriad of unique blends of old and new cultures around the world, which obviously enhances and diversifies cultures.',
                    '… societies with weak economies or political instability are affected by outside influence.',
                    'All young people prefer global brands to local ones.',
                    'Social media always destroys traditional culture.'
                  ]
                }
              ]
            },
            { type: 'do', n: 3, who: 'alone', text: 'Without looking back at the samples, add hedging language to make these statements less strong. The lights show which kinds of hedging you used.' },
            {
              type: 'detect',
              id: 'c10-dt',
              label: 'Hedging studio',
              checks: [
                { label: 'Modal (can / may / might / could)', color: '#2f7d6b', any: ['/\\b(can|may|might|could)\\b/i'] },
                { label: 'Not everyone (some / many / a common …)', color: '#3a58a0', any: ['/\\b(some|many|a common|often|tends? to|most)\\b/i'] },
                { label: 'Softer verb / phrase', color: '#8a4f9e', any: ['can be seen', 'susceptible', 'contribute', 'likely', 'appears', 'seems', 'suggest', 'probably'] }
              ],
              avoid: [{ label: 'Still exaggerated', any: ['/\\b(everybody|obviously|always|definitely|all|every)\\b/i'] }],
              items: [
                { task: 'a) Everybody knows that globalisation causes local, traditional cultures to lose their uniqueness.', rows: 2, model: 'A common criticism of globalisation is that it can cause local, traditional cultures to lose their uniqueness.' },
                { task: 'b) This flexibility of cultural hybridity creates a myriad of unique blends of old and new cultures around the world, which obviously enhances and diversifies cultures.', rows: 2, model: 'This flexibility of cultural hybridity creates a myriad of unique blends of old and new cultures around the world, which can be seen to enhance and diversify cultures.' },
                { task: 'c) … societies with weak economies or political instability are affected by outside influence.', rows: 2, model: '… societies with weaker economies or political instability are more susceptible to outside influence.' }
              ]
            },
            {
              type: 'language',
              title: 'Hedging toolkit',
              groups: [
                { label: 'Modal verbs', phrases: ['can / may / might / could', 'can lead to …', 'may contribute to …'] },
                { label: 'Quantity', phrases: ['some / many / most', 'for many …', 'in many countries'] },
                { label: 'Verbs + phrases', phrases: ['tends to …', 'is likely to …', 'can be seen to …', 'appears to …', 'is more susceptible to …'] },
                { label: 'Adverbs', phrases: ['probably', 'often', 'generally', 'to some extent'] }
              ]
            }
          ],
          answers: {
            title: 'Answers (from the Teacher’s Book)',
            items: [
              ['Hedging in 5.1 Body 2', 'can · facilitated · some · many · For many · contributes to · can'],
              ['Exaggerated version (to compare)', 'As a result of this globalised, Americanised world, traditional cultures always lose their unique identity. Through the global connectedness which the internet, international travel and migration have created, all local identities are being replaced … in every country … For all young people, the pull towards a global culture is too strong to resist, which causes a homogenised world …'],
              ['a)', 'A common criticism of globalisation is that it can cause local, traditional cultures to lose their uniqueness.'],
              ['b)', '… which can be seen to enhance and diversify cultures.'],
              ['c)', '… societies with weaker economies or political instability are more susceptible to outside influence.']
            ]
          }
        },
        {
          id: 'c11',
          short: 'Reflect + plan',
          minutes: 15,
          grouping: 'Group → Alone',
          art: 'dec10/assets/week5/v/v-d10w5d4-c11.svg',
          title: 'Revisiting the Joint Writing (Reflection and Action Plan)',
          goal: 'Compare your group’s joint writing with the sample that has the same structure, then plan how to improve your writing.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d4-two-structures.svg',
              size: 'wide',
              alt: 'Two essay plans side by side. Structure 1, DISAGREE (Sample 5.2): Paragraph 1 counterargument – negative impact: loss of unique culture; Paragraph 2 positive impact: blend of cultures leads to innovation and new cultural identities; Paragraph 3 not negative impacts: globalisation’s impacts are diverse and under-researched. Structure 2, AGREE (Sample 5.1): Paragraph 1 negative impact 1: one-sided influence, Americanisation; Paragraph 2 negative impact 2: loss of traditional culture, homogenisation; Paragraph 3 counterargument – positive impact: blending different cultures leads to innovation.',
              caption: 'Structure 1 = Sample 5.2 (disagree) · Structure 2 = Sample 5.1 (agree)'
            },
            {
              type: 'choose',
              id: 'c11-choose',
              title: 'Which structure is most like your group’s joint writing?',
              options: ['Structure 1 · DISAGREE (like Sample 5.2)', 'Structure 2 · AGREE (like Sample 5.1)', 'A different structure (choose the most similar sample)']
            },
            { type: 'do', n: 1, who: 'group', text: 'Compare your joint writing with the sample that has the same structure. Discuss the questions.' },
            {
              type: 'talk',
              title: 'Discuss',
              prompts: [
                'Did you use similar information / examples from the sources? If so, did you use similar paraphrasing techniques? Did you synthesise information in the same way?',
                'How does your in-text referencing compare to the sample?',
                'Did you include similar explanations / definitions of the key concepts from the essay (e.g. cultural globalisation / cultural hybridity)?',
                'Did you include a counterargument? If so, was it similar to the counterargument in the sample? If not, do you think a counterargument would have strengthened your argument?',
                'Are there any other differences between the sample and your essay that you want to talk to your teacher about?'
              ]
            },
            {
              type: 'fields',
              title: 'Action Plan · how could you improve your academic writing?',
              fields: [
                { id: 'c11-1', label: '1 · How could you improve the structure of your essay?', rows: 2 },
                { id: 'c11-2', label: '2 · How could you more clearly explain the topic and your main points?', rows: 2 },
                { id: 'c11-3', label: '3 · How could you more clearly link your ideas together?', rows: 2 },
                { id: 'c11-4', label: '4 · How could you improve your paraphrasing techniques?', rows: 2 },
                { id: 'c11-5', label: '5 · How could you improve your in-text referencing?', rows: 2 }
              ]
            },
            { type: 'do', n: 2, who: 'alone', text: 'Based on your comparisons and your questions to your teacher, <b>re-write or edit</b> part or all of your original essay. Keep your Action Plan and read it again before your next writing task.' },
            {
              type: 'language',
              title: 'Talking about your writing with your teacher',
              groups: [
                { label: 'Ask', phrases: ['Could you look at my counterargument? I’m not sure it is clear.', 'Is my thesis statement strong enough?', 'Did I reference this source correctly?'] },
                { label: 'Plan', phrases: ['In my next essay, I will …', 'I am going to add a summary phrase to …', 'I need to paraphrase more, for example by changing the word form.'] }
              ]
            }
          ]
        }
      ]
    }
  ],
  extras: [
    {
      id: 'x1',
      short: 'Own time',
      minutes: 30,
      grouping: 'In your own time',
      art: 'dec10/assets/week5/v/v-d10w5d4-x1.svg',
      title: 'Feedback literacy, self-regulation and monitoring',
      goal: 'Take control of your learning: use teacher and AI feedback to revise your Week 4 Integrated Writing response.',
      blocks: [
        {
          type: 'key',
          title: 'This is for you',
          points: [
            'Don’t just rely on one-off teacher feedback after the practice assessment.',
            'Always set <b>specific learning goals</b> and ask for <b>specific, targeted feedback</b>.'
          ]
        },
        {
          type: 'figure',
          src: 'dec10/assets/week5/d4-feedback-loop.svg',
          size: 'wide',
          alt: 'A loop of four steps: 1 review the feedback from your teacher and from AI; 2 choose the areas you want to improve; 3 revise your essay; 4 ask AI for feedback on the criterion you wanted to improve. An arrow goes back to step 1.',
          caption: 'Review → choose → revise → ask again.'
        },
        {
          type: 'order',
          id: 'x1-order',
          title: 'Put the steps in order',
          items: [
            'Review the feedback on your Week 4 Integrated Writing response from both your teacher and from AI.',
            'Based on this feedback, decide which areas you want to improve.',
            'Revise your essay.',
            'Ask AI for feedback on your revised essay — on the criterion or criteria you wanted to improve.'
          ],
          ends: ['First', 'Last']
        },
        {
          type: 'fields',
          title: 'My plan',
          fields: [
            { id: 'x1-areas', label: 'The areas I want to improve (use the rubric criteria)', rows: 2, placeholder: 'e.g. Connection of Ideas: my concluding sentences don’t link back …' },
            { id: 'x1-prompt', label: 'My prompt for AI feedback on my revised essay', rows: 3, placeholder: 'Task: Review my essay with a focus on … Requirements: … Instructions: …' },
            { id: 'x1-after', label: 'What improved after my revision?', rows: 2 }
          ]
        }
      ]
    }
  ],
  glossary: [
    ['cultural globalisation', 'the movement of ideas, attitudes and values across national borders', 'Cultural globalisation refers to the rapid movement of ideas, attitudes, and values across national borders.'],
    ['cultural homogenisation', 'when different cultures become more and more similar', 'Critics argue that this process results in cultural homogenisation.'],
    ['cultural hybridisation', 'a mix of global and local culture that makes something new', 'The combination of the global and local facets of culture is termed “cultural hybridisation”.'],
    ['Americanisation', 'when American brands, values and media spread and dominate other cultures', 'Coca-Cola and McDonald’s are examples of Americanisation.'],
    ['ubiquitous', 'found everywhere', 'Globally ubiquitous American brands such as Coca-Cola …'],
    ['mitigate', 'to make something bad less serious', 'Which strategy would best mitigate the negative effects of cultural homogenization?'],
    ['consensus', 'an agreement that everyone in a group accepts', 'You do not necessarily have to reach a consensus.'],
    ['turn-taking', 'speaking and letting others speak in turn in a discussion', 'Hand over to a quieter person — good turn-taking.'],
    ['criterion (pl. criteria)', 'one standard in a rubric used to judge work', 'Focus on the Connection of ideas criterion.'],
    ['actionable', 'clear enough that you can do something with it', 'Which feedback is easier to understand and more actionable?'],
    ['counterargument', 'an argument that goes against the writer’s main argument', 'Sample 5.2 starts its body with a counterargument.'],
    ['refutation', 'showing that a counterargument is wrong or less important, with evidence or reasoning', '“However, Crysell et al. (2023) rejects …” is part of the refutation.'],
    ['cohesion', 'the way words and phrases connect the ideas in a text', 'Linking words, lexical chains, summary phrases and referents create cohesion.'],
    ['lexical chain', 'related words and synonyms repeated through a paragraph', 'culture → cultural identities → cultural hybridisation'],
    ['referent', 'a word such as this, which or they that points back to an earlier idea', '“which” refers back to the brand “Sankuanz”.'],
    ['stance', 'the writer’s position or attitude', 'Strong and evaluative language expresses the writer’s stance.'],
    ['hedging', 'cautious language that avoids exaggeration (can, some, probably)', 'Traditional cultures can lose their unique identity.'],
    ['text map', 'a diagram of the flow of ideas in a text', 'Compare your text map with Sample Text Map 5.2.']
  ]
};
