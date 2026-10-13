/* DEC15 · Week 5, Day 4 — lesson content.
   Teacher’s Book: W5 D4 · 6A Mediation (120) · 7A Applying the frameworks (120).
   Texts: Clapp et al. (2022) · Oxfam (2022) · Mockshell & Ritter (2024) — lessons/week5/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js (form, scale, jeopardy, send: true).
   v2 (A2–B1 version): related TB activities are merged into one tab; each TB heading is the title of the
   first block of its part ('Part 1 · …'). All saved-work ids (blocks, fields, tables) are unchanged.
   v3 (B2, brief 4): reading has a lead-in, 8 useful words, 2 gist + 6 detail questions in text order and a
   note-taking frame (+/– column) that feeds 7A. Synthesising (m8) and writing evaluation questions (p1 Part 2)
   follow Notice → Clarify → Controlled → Less controlled → Production. New ids start with 'h4-'. */

window.DEC15_LESSON = {
  id: 'w5d4',
  week: 5, day: 4,
  title: 'Mediation and applying the framework',
  duration: 'About 4 hours',
  question: 'How can we use the six-pillar food security framework to evaluate a solution — and how effective is your group’s solution to food waste?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus',
  wordTarget: '',
  image: 'assets/week5/hero-w5d4.svg',
  imageAlt: 'A women’s self-help group market stall full of fresh fruit and vegetables, a solar-powered cold-storage box beside it, and a checklist.',
  journey: 'Today you see the six pillars at work. You read a study about women’s groups in India who sold fresh fruit and vegetables. You connect it with Clapp et al. (2022) and Oxfam (2022). Then your group writes questions to judge one solution to food waste. You get ready to present tomorrow.',
  finish: { title: 'Friday', text: 'Presentations, AI reflection and a STAR moment' },

  sections: [
    /* ───────────────────────── 6A Mediation ───────────────────────── */
    {
      id: 'mediate', number: '01', code: '6A', minutes: 120,
      tone: 'blue', art: 'reading',
      title: 'Mediation',
      subtitle: 'The six pillars in action · Mockshell and Ritter (2024)',
      outcome: 'Read a study and take notes in your own words. Bring ideas from different texts together (= synthesise). Use these ideas to judge (= evaluate) a solution to a problem.',
      activities: [
        /* ── 1 · Recap + Academic Skills ── */
        {
          id: 'm1', short: 'Recap', minutes: 25, grouping: 'Teams → class',
          title: 'Recap + Academic Skills',
          goal: 'Play a team quiz about two texts. Then learn five questions to judge a solution.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Recap: Jeopardy', items: [
              { who: 'class', text: 'Make <b>4 or 5 teams</b>. You can open the texts.' },
              { who: 'class', text: 'Choose a column and points, e.g. “<b>Oxfam (2022) A for 100</b>”.' },
              { who: 'class', text: 'Your teacher shows a sentence. You have <b>20 seconds</b>.' },
              { who: 'class', text: 'Answer <b>as a question</b> to win the points: “<b>Who is Oxfam?</b>”, “<b>What is access?</b>”' }
            ]},
            { type: 'jeopardy', id: 'm1j', title: 'Week 5 mediation recap', teams: 4, seconds: 20, cols: [
              { title: 'Clapp et al. (2022) A', clues: [
                { pts: 100, clue: 'This pillar focuses on the actual presence of food in a specific location.', answer: 'What is availability?' },
                { pts: 200, clue: 'This pillar is about having enough economic resources to obtain healthy food.', answer: 'What is access?' },
                { pts: 300, clue: 'This pillar refers to the body’s ability to obtain nutrients from food — it emphasises the quality of food.', answer: 'What is utilization?' },
                { pts: 400, clue: 'This pillar makes sure that the other three pillars are consistent and reliable over time.', answer: 'What is stability?' },
                { pts: 500, clue: 'Utilization is often seen as depending on these two pillars.', answer: 'What are availability and access?' }
              ]},
              { title: 'Clapp et al. (2022) B', clues: [
                { pts: 100, clue: 'The ability of individuals and groups to make decisions that influence their lives, including their food security.', answer: 'What is agency?' },
                { pts: 200, clue: 'Keeping food production going for a long time without depleting or harming natural resources.', answer: 'What is sustainability?' },
                { pts: 300, clue: 'The three vulnerable groups that the authors say especially need agency.', answer: 'Who are women, small-scale farmers and indigenous communities?' },
                { pts: 400, clue: 'This 2021 event highlighted the role of agency in achieving fair and sustainable food systems.', answer: 'What is the (2021) Food Systems Summit?' },
                { pts: 500, clue: 'Two reasons the authors give for adding two new dimensions to the framework.', answer: 'What are growing inequalities in food systems and the close link between our ecological and food systems?' }
              ]},
              { title: 'Oxfam (2022) A', clues: [
                { pts: 100, clue: 'This tech entrepreneur challenged the UN to show him a $6 billion plan to end world hunger.', answer: 'Who is Elon Musk?' },
                { pts: 200, clue: 'This kind of hunger means people do not eat enough food to maintain a normal, active lifestyle.', answer: 'What is chronic hunger?' },
                { pts: 300, clue: 'This kind of hunger puts people’s lives and livelihoods at risk — many people have fled conflict or climate change.', answer: 'What is extreme hunger?' },
                { pts: 400, clue: 'This initiative of foundations, universities and scientists calculated how much extra aid donor governments need to give.', answer: 'What is Ceres2030?' },
                { pts: 500, clue: 'Oxfam started this initiative to help consumers shop and eat more sustainably.', answer: 'What is Eat for Good?' }
              ]},
              { title: 'Oxfam (2022) B', clues: [
                { pts: 100, clue: 'Oxfam says we need to do this to our food systems if we are serious about ending world hunger.', answer: 'What is transform (them)?' },
                { pts: 200, clue: 'More than 50 percent of the world’s smallholder farmers belong to this group.', answer: 'Who are women?' },
                { pts: 300, clue: 'These organisations have incredible power over the livelihoods of women, workers and farmers.', answer: 'What are large global food and beverage companies?' },
                { pts: 400, clue: 'Three things that no amount of money can solve.', answer: 'What are war, the effects of the climate crisis on food production and the power of giant corporations over agricultural trade?' },
                { pts: 500, clue: 'Three of the five Eat for Good principles.', answer: 'What are save food, shop seasonal, eat less meat, support farmers and farm producers, and cook smart?' }
              ]},
              { title: 'Numbers', clues: [
                { pts: 100, clue: 'According to FAO et al. (2021), nearly this many people globally faced food insecurity in 2020.', answer: 'What is one in three?' },
                { pts: 200, clue: 'As many as this many people experienced hunger in 2021 — more than three times the US population.', answer: 'What is 828 million?' },
                { pts: 300, clue: 'Donor governments need to invest this much every year until 2030 to tackle extreme and chronic hunger.', answer: 'What is $37 billion?' },
                { pts: 400, clue: 'In 2021, world leaders contributed only this percentage of the total cost of global humanitarian needs.', answer: 'What is 46 percent?' },
                { pts: 500, clue: 'The extra $14 billion a year for chronic hunger is equal to about this share of what the world spends on military and arms.', answer: 'What is 1 percent?' }
              ]}
            ]},
            { type: 'sources', ids: ['clapp', 'oxfam'] },
            { type: 'teacher', ref: 'w5d4-t1' },

            { type: 'talk', title: 'Part 2 · Academic Skills: Evaluating solutions — lead-in (1 minute)', prompts: [
              'Think of a free service at your university or in your city (e.g. a free bus, free breakfast, a library app).',
              'Is it a <b>good</b> solution? Tell your partner <b>one good point</b> and <b>one problem</b>.'
            ]},
            { type: 'key', title: 'Evaluate = judge how good something is', points: [
              '<b>Evaluate</b> = judge something. Is it good or bad? How good?',
              'We look at a solution’s <b>strengths</b> (good points) and <b>limitations</b> (weak points).',
              'Today’s reading uses Clapp et al.’s (2022) <b>six pillars</b> to judge one solution to hunger. Tomorrow your group judges a solution to food waste.'
            ]},
            { type: 'figure', src: 'assets/week5/evaluate-solutions.svg', alt: 'Five questions to evaluate a solution: 1 What problems does it improve? 2 Who does it help? 3 How far does it reach (place and time)? 4 How accessible is it for different groups? 5 Any limitations or unintended consequences? We can evaluate quality, value, significance, strengths and limitations.', caption: 'Five questions we can ask about any solution', size: 'wide' },
            { type: 'model', title: 'Example: a free breakfast for students', rows: [
              ['What problems does it improve?', 'Students are hungry in morning classes.'],
              ['Who does it help?', 'Students with little money.'],
              ['How far does it reach?', 'One campus, only in semester time.'],
              ['How accessible is it?', 'Easy for students who live near — hard for students who start late.'],
              ['Any limitations?', 'Food runs out by 8:30, so some students miss it.']
            ], note: 'Short answers are fine. Each answer = one question.' },
            { type: 'quiz', id: 'm2q', title: 'Quick check · Which question does it answer?', shared: ['What problems does it improve?', 'Who does it help?', 'How far does it reach?', 'How accessible is it?', 'Any limitations?'], items: [
              { q: '“Food banks give food to families with low incomes.”', answer: 'Who does it help?', why: 'It names a group of people: families with low incomes.' },
              { q: '“There are food banks in only two cities in my country.”', answer: 'How far does it reach?', why: 'It talks about place — where the solution works.' },
              { q: '“Some food arrives too old to eat, so it is thrown away.”', answer: 'Any limitations?', why: 'It is a weak point of the solution.' },
              { q: '“Food banks mean that fewer families go to bed hungry.”', answer: 'What problems does it improve?', why: 'It names the problem that gets better: hunger.' },
              { q: '“People who work all day cannot visit, because it closes at 4 pm.”', answer: 'How accessible is it?', why: 'It is about how easy it is for a group to use.' }
            ]},
            { type: 'talk', title: 'Your turn (2 minutes)', prompts: ['Think of a solution to food waste from Weeks 3 and 4 (e.g. a food-sharing app). Answer <b>two</b> of the five questions about it.'] },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Judging a solution', phrases: ['One strength of … is that…', 'It mainly helps…', 'One limitation is that…'] }
            ]},
            { type: 'teacher', ref: 'w5d4-t2' }
          ],
          answers: { title: 'The Oxfam numbers', items: [
            ['Recap · How much money?', '<img src="assets/week5/hunger-funding.svg" alt="Oxfam (2022) numbers: about $37 billion a year until 2030 to end hunger — about $23 billion this year for extreme hunger, an extra $14 billion a year in aid for chronic hunger, and about $19 billion a year from low- and middle-income countries.">']
          ]}
        },

        /* ── 2 · Vocabulary + Reading for gist ── */
        {
          id: 'm3', short: 'Read: gist', minutes: 20, grouping: 'Pairs',
          title: 'Vocabulary + Reading for gist',
          goal: 'Learn the key words. Then read the start and end of the study and say what it found.',
          blocks: [
            { type: 'talk', title: 'Lead-in · 2 minutes with a partner', prompts: [
              'Think about the COVID-19 lockdowns. How did your family get <b>fresh fruit and vegetables</b>?',
              'Were markets and shops open? Who helped people who had no money or could not go out?'
            ]},
            { type: 'flip', title: 'Part 1 · Vocabulary: 8 useful words from the study', hint: 'Guess the meaning with your partner. Then tap the card to check.', items: [
              { front: 'self-help group', back: 'A group of people who work together to solve a problem they all have.<br><i>Ten women formed a self-help group to save money.</i>' },
              { front: 'procurement', back: 'Buying goods (that are already produced) to sell them again.<br><i>The café’s procurement of fruit is from local farms.</i>' },
              { front: 'supply chain participants · value chain actors', back: 'All the people who move a product from farm to shop to buyer — and earn money from it.<br><i>Farmers, drivers and shop owners are value chain actors.</i>' },
              { front: 'resilience', back: 'The ability to adapt and recover when there are problems.<br><i>Local markets give a city resilience in a crisis.</i>' },
              { front: 'solidarity', back: 'Support for each other; unity.<br><i>The students showed solidarity with their hungry classmates.</i>' },
              { front: 'social norms', back: 'The rules or expected behaviour in a social group.<br><i>In some villages, social norms say women stay at home.</i>' },
              { front: 'resentful', back: 'Angry because you feel you were treated unfairly.<br><i>Shop owners felt resentful when the new market took their customers.</i>' },
              { front: 'multifaceted', back: 'Having many parts or sides.<br><i>Hunger is a multifaceted problem: money, transport, health…</i>' }
            ]},
            { type: 'cloze', id: 'm3c', list: true, title: 'Complete the sentences with the key words', options: ['self-help groups', 'resilience', 'supply chain participants', 'value chain actors', 'solidarity', 'social norms', 'resentful', 'multifaceted', 'procurement'],
              answers: ['self-help groups', 'resilience', 'supply chain participants', 'value chain actors', 'solidarity', 'social norms', 'resentful', 'multifaceted'],
              text: '{{1}} can build {{2}} in communities.\n{{3}} must work together to ensure smooth operations.\n{{4}} make a living from the food system.\n{{5}} among workers strengthens their ability to demand better conditions.\n{{6}} often influence decision-making in rural areas.\nThe community became {{7}} after promises of aid were broken.\nFood insecurity is a complex, {{8}} issue requiring diverse solutions.' },
            { type: 'tip', text: 'One word is extra. Nice work if you got 8 out of 8!' },
            { type: 'teacher', ref: 'w5d4-t3' },

            { type: 'steps', title: 'Part 2 · Reading for gist', items: [
              { who: 'alone', text: 'Open the reading. Read only the <b>introduction</b> (paragraph A).' },
              { who: 'alone', text: 'Read the <b>conclusion</b> below. You have <b>5 minutes</b>.' },
              { who: 'pair', text: 'Answer the two gist questions. Compare with your partner.' }
            ]},
            { type: 'sources', ids: ['mockshell'] },
            { type: 'tip', text: '<b>Gist</b> = the main idea. You don’t need every word! Two useful words: <b>albeit</b> (= although) and <b>holistic</b> (= looking at the whole thing).' },
            { type: 'passage', id: 'm4p', title: 'Conclusion (paragraph G)', text: 'This study contributed to the literature by applying Clapp et al.’s (2022) six-dimensional food security framework to examine the effects of a specific policy (Clapp et al., 2022). The policy in question was a fresh fruit and vegetable procurement program implemented by self-help groups. Through semi-structured interviews and focus group discussions, we found that the policy was able to contribute to all six dimensions of food security, albeit with mixed results on agency and sustainability. We showed that including the two additional dimensions of food security, namely agency and sustainability, allowed for a more thorough, complete, and holistic analysis of the impacts of the policy. Examining policies and programs through the lens of the six-dimensional food security framework is one step towards designing and implementing policies that are more inclusive. A multifaceted approach will help ensure that the most vulnerable are not left behind.' },
            { type: 'quiz', id: 'm4q', title: 'Gist questions', items: [
              { q: '1. What do the authors evaluate?<br><small>Hint: sentence 2 of the conclusion.</small>', options: ['Women’s groups selling fruit and vegetables', 'A government food bank', 'A farming app'], answer: 'Women’s groups selling fruit and vegetables', why: '“…a fresh fruit and vegetable procurement program implemented by self-help groups.” The groups are women’s groups (paragraph B).' },
              { q: '2. What did they find, in general?<br><small>Hint: look for “albeit” (= although).</small>', options: ['It helped all six pillars, but not clearly for two', 'It only helped availability', 'It did not help food security'], answer: 'It helped all six pillars, but not clearly for two', why: '“…contribute to all six dimensions… albeit with mixed results on agency and sustainability.”' }
            ]},
            { type: 'teacher', ref: 'w5d4-t4' }
          ]
        },

        /* ── 3 · Reading for detail ── */
        {
          id: 'm5', short: 'Read: notes', minutes: 30, grouping: 'Alone → pairs',
          title: 'Reading for detail: Note-taking + Post note-taking questions',
          goal: 'Read the whole study and take short notes in your own words. Then use your notes to judge the program.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Reading for detail: Note-taking', items: [
              { who: 'alone', text: 'Read the whole text. You have about <b>20 minutes</b>.' },
              { who: 'alone', text: 'First answer the six quick questions. They follow the text (A → G).' },
              { who: 'alone', text: 'Then fill in the notes table. The small questions tell you what to look for.' },
              { who: 'alone', text: 'Write <b>short notes in your own words</b> (= paraphrase). Don’t copy whole sentences.' }
            ]},
            { type: 'quiz', id: 'h4-m5q', title: 'Six quick questions (in text order)', items: [
              { q: '1. Paragraph A: which two pillars does Clapp et al.’s framework add?', options: ['Agency and sustainability', 'Availability and access', 'Utilization and stability'], answer: 'Agency and sustainability', why: 'The four old pillars + agency and sustainability = six.' },
              { q: '2. Paragraph B: who were the self-help groups (SHGs)?', options: ['Groups of 10–15 women', 'Local shop owners', 'Government workers'], answer: 'Groups of 10–15 women', why: '“SHGs are typically comprised of about 10 to 15 women…”' },
              { q: '3. Paragraph C: how did the poorest families get vegetables?', options: ['They got them free', 'They got cash from the bank', 'They grew their own'], answer: 'They got them free', why: '“very poor consumers were given free FFV”.' },
              { q: '4. Paragraph D: why did prices stay stable?', options: ['The supply never stopped', 'The government fixed prices', 'People bought less'], answer: 'The supply never stopped', why: '“a constant supply of FFV… stabilized FFV prices and quantities”.' },
              { q: '5. Paragraph E: who did the program <b>harm</b>?', options: ['Independent shop owners', 'Very poor families', 'Farmers in the SHGs'], answer: 'Independent shop owners', why: 'Independent retailers had to lower prices or travel further and felt resentful.' },
              { q: '6. Paragraph F: what did two-thirds of sellers report?', options: ['Less fruit and vegetable waste', 'More rotten food', 'Higher prices'], answer: 'Less fruit and vegetable waste', why: '“…the program reduced FFV waste.”' }
            ]},
            { type: 'quiz', id: 'h4-m5q2', title: 'Challenge questions (think across the text)', items: [
              { q: '7. Paragraph E: why do the authors say the effects on <b>agency</b> were “mixed”?', options: ['The groups felt stronger together, but social norms stopped women doing some jobs', 'Some women joined the groups and some did not', 'The program worked in cities but not in villages'], answer: 'The groups felt stronger together, but social norms stopped women doing some jobs', why: 'Paragraph E gives a positive effect (solidarity) and then “However… women were prevented from… transport and retailing… due to social norms”.' },
              { q: '8. Paragraph F: how is this study’s idea of <b>sustainability</b> different from Clapp et al. (2022)?', options: ['It focuses on resilience, not mainly on farming practices and food loss', 'It ignores food waste completely', 'It uses only four pillars, not six'], answer: 'It focuses on resilience, not mainly on farming practices and food loss', why: '“…in the sustainability dimension, rather than focusing on sustainable agricultural practices and reduced food loss as in Clapp et al. (2022).”' },
              { q: '9. Overall (Paragraph G): which statement best matches the authors’ evaluation?', options: ['The program helped all six pillars, but agency and sustainability had mixed results', 'The program failed because of the lockdown', 'The program only improved availability'], answer: 'The program helped all six pillars, but agency and sustainability had mixed results', why: '“…contribute to all six dimensions… albeit with mixed results on agency and sustainability.”' }
            ]},
            { type: 'tip', text: '<b>Hint:</b> questions 1–6 have a paragraph letter — look for numbers and names. For 7–9, read the whole paragraph and look for contrast words: <i>however, rather than, albeit</i>.' },
            { type: 'model', title: 'Example: from the text to a note', rows: [
              ['The text says', '“The policy in question was a fresh fruit and vegetable procurement program implemented by self-help groups.”'],
              ['My note', 'program = women’s self-help groups (SHGs) buy + sell fresh fruit & veg (FFV)'],
              ['Text (paragraph C)', '“…very poor consumers were given free FFV…”'],
              ['My note + judgement', 'v. poor → free FFV · <b>+</b> helps the most vulnerable (access)']
            ], note: 'Use short forms (SHG, FFV), arrows (→) and key words only. Add <b>+</b> or <b>–</b> in the last column.' },
            { type: 'sources', ids: ['mockshell'] },
            { type: 'figure', src: 'assets/week5/shg-program.svg', alt: 'The fresh fruit and vegetable program in Odisha, India, during the COVID-19 lockdown: self-help groups of 10–15 women buy fresh fruit and vegetables from producers (farmers) and sell them to consumers in towns and villages; very poor households receive free produce.', caption: 'How the program worked', credit: 'Based on Mockshell and Ritter (2024)', size: 'wide' },
            { type: 'tip', text: '<b>Keep these notes.</b> The last column helps you judge a solution. You use it in 7A (your group’s evaluation) and in tomorrow’s presentation.' },
            { type: 'table', id: 'm5t', title: 'My notes (in my own words)', columns: ['', 'Notes', 'Strength (+) or limitation (–) of the program?'], fixed: [
              'Introduction<br><small>Which solution? · Which framework? · What do “agency” and “sustainability” mean in this study?</small>',
              'The program<br><small>Where and when? · Who ran it? · What did they do? · How did SHGs help people before?</small>',
              'Availability and access<br><small>How did the SHGs change these pillars? · Who are the vulnerable (= easily harmed) groups?</small>',
              'Utilization and stability<br><small>How did the SHGs change these pillars?</small>',
              'Agency<br><small>How did the SHGs make their own choices? · What stopped women? · What happened to other shop owners?</small>',
              'Sustainability<br><small>How is it different from Clapp et al. (2022)? · What changed?</small>',
              'Conclusion<br><small>Effect on the 6 pillars · Limitations (weak points) · How can people use the study?</small>'
            ]},
            { type: 'teacher', ref: 'w5d4-t5' },

            { type: 'fields', title: 'Part 2 · Reading for detail: Post note-taking questions', fields: [
              { id: 'm6-1', label: '1. The authors say the results for agency and sustainability were “mixed”. What do they mean?', placeholder: 'The results were not clearly positive because…', rows: 4 }
            ]},
            { type: 'tip', text: '<b>Hint:</b> look at your notes for <b>Agency</b> and <b>Sustainability</b>. Who did <b>not</b> benefit? What did <b>not</b> change?' },
            { type: 'table', id: 'm6t', title: '2. Answer the five questions for the SHG program', columns: ['Question', 'Answer for the SHG program'], fixed: [
              'What problems does the solution improve?',
              'Who does the solution help?',
              'How extensive is the solution?<br><small>Where does it work? For how long?</small>',
              'How accessible is the solution for different groups?<br><small>Can different people use it easily?</small>',
              'Are there any limitations, or unintended consequences?<br><small>= results nobody planned</small>'
            ]},
            { type: 'teacher', ref: 'w5d4-t6' }
          ],
          answers: { title: 'Sample answers', items: [
            ['Quick questions', '1 agency and sustainability · 2 groups of 10–15 women · 3 free · 4 the supply never stopped · 5 independent shop owners · 6 less waste'],
            ['Notes · Introduction', 'Solution: a fresh fruit and vegetable (FFV) program run by self-help groups in India. Framework: Clapp et al.’s 6-pillar framework. <b>Agency</b>: the ability of people to control their lives → can lead to collective action, which can reduce inequality. <b>Sustainability</b>: the ability to provide food to current generations without reducing future generations’ ability to do the same. Resilience is included in sustainability — not another dimension.'],
            ['Notes · The program', 'SHGs in Odisha, India, during the COVID-19 lockdowns. Groups of 10–15 women. Bought FFV from producers and sold them to consumers. Previous benefits of SHGs: food expenditures, nutritional outcomes and women’s empowerment.'],
            ['Notes · Availability and access', 'Increased availability, especially in rural areas. Increased access to nutritious foods. Producers could make money and consumers could get healthy food at a reasonable price. Very poor consumers were given free FFV.'],
            ['Notes · Utilization and stability', 'Consumers could get fresher (not rotten) vegetables. Supply was constant → stable prices and quantities. Staple vegetables (potatoes, onions) were brought in from other areas. Consumers in urban areas could also access the program.'],
            ['Notes · Agency', 'Increased sense of solidarity among SHG members; SHGs could support their communities. They had a choice over who they bought from and sold to, and could give free food to poor people. But women were restricted in the roles they could take because of gender and cultural (social) norms. Independent retailers were affected negatively: they could only sell illegally during lockdown, had to lower prices or travel further, and felt neglected and resentful.'],
            ['Notes · Sustainability', 'Seen as resilience in food systems, rather than environmentally friendly farming (Clapp et al.). Still: reduced FFV waste, and the SHG received a solar-powered cold storage facility thanks to better government (political) connections.'],
            ['Notes · Conclusion', 'Contributed to all 6 dimensions. Limitation: the impact on agency and sustainability was mixed. Use: to create more inclusive food systems and policies that protect the vulnerable.'],
            ['Strength (+) or limitation (–)?', '<b>+</b> more fresh food, free food for the poorest, stable prices, less waste, solidarity · <b>–</b> social norms limited women, independent shop owners lost income, only one state during lockdown.'],
            ['Part 2 · Mixed results', 'The results were not clearly positive. Why? Shop owners outside the SHGs lost money. Cultural norms limited women’s agency. And there was no clear sign that farming became more sustainable — but the authors also understand sustainability differently (as resilience).'],
            ['Part 2 · What problems?', 'All 6 pillars of food security were positively affected.'],
            ['Part 2 · Who does it help?', 'Poor and vulnerable groups who could not get fresh fruit and vegetables.'],
            ['Part 2 · How extensive?', 'It ran in one country, during pandemic restrictions. We don’t know if it would work in other places or in normal times.'],
            ['Part 2 · How accessible?', 'Disadvantaged groups in the community could use it, in both country and city areas.'],
            ['Part 2 · Limitations?', 'Independent retailers lost income during the lockdowns and did not benefit. Women’s agency was also limited by cultural norms.']
          ]}
        },

        /* ── 4 · Building understanding across texts ── */
        {
          id: 'm7', short: 'Across texts', minutes: 25, grouping: 'Alone → pair',
          title: 'Building understanding across texts',
          goal: 'Find out which of the three texts talk about each idea.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read each statement. Choose <b>Y</b> if the text talks about it. Choose <b>N</b> if it does not.' },
              { who: 'alone', text: 'Use your notes and the texts. You have about <b>15 minutes</b>.' },
              { who: 'pair', text: 'Check with a partner (10 minutes). For each Y, show <b>where</b> you found it.' }
            ]},
            { type: 'tip', text: '<b>Key words:</b> <b>inequality</b> (= things are not fair or equal) · <b>empower</b> (= give power and confidence) · <b>make a living</b> (= earn money) · <b>beneficial</b> (= good, helpful).' },
            { type: 'sources', ids: ['clapp', 'oxfam', 'mockshell'] },
            { type: 'grid', id: 'm7g', title: 'Was the information mentioned?', columns: ['Clapp et al. (2022)', 'Oxfam (2022)', 'Mockshell and Ritter (2024)'], options: ['Y', 'N'], rows: [
              '1. It is important to improve inequalities in the food system.',
              '2. Women lack agency in the current food system.',
              '3. Giving free food to poor people can improve access.',
              '4. The quality of food that is available affects utilization.',
              '5. Empowering some groups may negatively impact others who make a living from the food system.',
              '6. Farming practices impact food availability and stability.',
              '7. Climate change is impacting sustainability.',
              '8. Empowering local communities can improve food security.',
              '9. Reducing food waste is beneficial for sustainability.'
            ], answers: [
              ['Y', 'Y', 'Y'], ['Y', 'Y', 'Y'], ['N', 'N', 'Y'], ['Y', 'N', 'Y'], ['N', 'N', 'Y'], ['Y', 'Y', 'N'], ['Y', 'Y', 'Y'], ['N', 'Y', 'Y'], ['N', 'N', 'Y']
            ]},
            { type: 'tip', text: 'Start with the easy ones! Statements 3, 5 and 9 are only in one text. Can you guess which?' },
            { type: 'teacher', ref: 'w5d4-t7' }
          ],
          answers: { title: 'Where to find it', items: [
            ['1 · Inequalities', 'Clapp A, G (agency resolves inequalities) · Oxfam: injustice, power of giant corporations, equal pay for women · Mockshell A (collective action reduces social inequalities).'],
            ['2 · Women and agency', 'Clapp H (women are a vulnerable group) · Oxfam: women farmers lack finance, land rights and a voice · Mockshell E (social norms limited women’s roles).'],
            ['3 · Free food', 'Only Mockshell C: very poor consumers were given free fruit and vegetables.'],
            ['4 · Quality and utilization', 'Clapp D (utilization emphasises the quality of food) · Mockshell D (fresh instead of rotten vegetables).'],
            ['5 · Negative impact on others', 'Only Mockshell E: independent retailers were forced to lower prices or travel further and felt resentful.'],
            ['6 · Farming practices', 'Clapp B (farming practices influence production) · Oxfam: women farmers need support to improve farming practices; climate-resilient agriculture.'],
            ['7 · Climate change', 'Clapp I · Oxfam (climate crisis, food system = almost 1/3 of emissions) · Mockshell: the Teacher’s Book says Y (resilience, solar cold storage) — discuss with your teacher.'],
            ['8 · Local communities', 'Oxfam: support local food production and local food systems · Mockshell: SHGs supported their communities.'],
            ['9 · Food waste', 'Mockshell F: the program reduced fruit and vegetable waste.']
          ]}
        },

        /* ── 5 · Synthesizing: Discussion ── */
        {
          id: 'm8', short: 'Synthesising', minutes: 20, grouping: 'Alone → groups of 3–4',
          title: 'Synthesizing: Discussion',
          goal: 'One language point: bring two sources together in one sentence (= synthesise). Then use it in a discussion.',
          blocks: [
            { type: 'cards', title: 'Part 1 · Notice (2 minutes): two sentences from Mockshell and Ritter (2024)', items: [
              { label: 'Paragraph B', text: '“SHG membership has been found to lead to a number of beneficial outcomes…, such as… nutritional outcomes <b>(Kumar et al., 2018)</b>, and women’s empowerment <b>(Kumar et al., 2021)</b>.”' },
              { label: 'Paragraph F', text: '“We… emphasized the concept of resilience…, <b>rather than</b> focusing on sustainable agricultural practices and reduced food loss <b>as in Clapp et al. (2022)</b>.”' }
            ]},
            { type: 'talk', title: 'Ask yourself', prompts: ['How many sources are in each sentence?', 'In which sentence do the sources <b>agree</b>? In which one are they <b>different</b>?'] },
            { type: 'key', title: 'Part 2 · Clarify: what is synthesising?', points: [
              '<b>Synthesise</b> = put ideas from <b>two or more sources</b> together in one sentence. Show if they say the <b>same</b> thing, <b>add</b> to each other, or are <b>different</b>.',
              'Why? It shows you read widely, and two sources make your point <b>stronger</b> than one. Tomorrow’s presentation and your essays need it.'
            ]},
            { type: 'key', title: 'Three ways to link two sources', compare: [
              { label: 'Same idea', text: '<b>Both</b> A <b>and</b> B suggest that… · A <b>and</b> B <b>agree that</b>…', eg: '<b>Both</b> my doctor <b>and</b> my coach <b>say that</b> sleep helps you learn.' },
              { label: 'Adding support', text: 'A says… . <b>Similarly</b>, B… · <b>This is supported by</b> B, who found that…', eg: 'My teacher says reading helps. <b>Similarly</b>, my friend says it improved her English.' },
              { label: 'Different idea', text: 'A says… . <b>In contrast</b>, B… · A…, <b>whereas</b> B…', eg: 'My mum cooks every day, <b>whereas</b> my brother orders food.' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> (1) <i>Both A and B <s>suggests</s></i> → <b>suggest</b> (two sources = plural). (2) <i>Similarly</i> is only for the <b>same</b> idea — for a different idea use <i>In contrast</i> or <i>whereas</i>.' },
            { type: 'cloze', id: 'h4-m8c', list: true, title: 'Part 3 · Controlled practice: choose the best word', options: [
              ['Both', 'Similarly', 'Whereas'], ['suggest', 'suggests', 'suggesting'], ['Similarly', 'In contrast', 'Both'], ['In contrast', 'Similarly', 'Both'], ['whereas', 'similarly', 'both'], ['supported', 'contrasted', 'agreed']
            ], text: '{{1}} my teacher and my friend say that a shopping list saves money.\nBoth the news and my phone app {{2}} that tomorrow will be hot.\nMy flatmate eats leftovers for lunch. {{3}}, I take last night’s dinner to class.\nCafé A gives old bread to a food bank. {{4}}, Café B throws it away.\nMy sister cooks at home, {{5}} I usually eat on campus.\nThe app works well. This is {{6}} by a study, which found users wasted 30% less food.',
              answers: ['Both', 'suggest', 'Similarly', 'In contrast', 'whereas', 'supported'],
              why: ['Two people say the same thing → Both … and…', 'Two sources = plural verb: suggest.', 'Same idea (eating leftovers) → Similarly.', 'Different idea (give vs. throw away) → In contrast.', 'Different idea in the same sentence → whereas.', 'The study agrees and adds evidence → This is supported by…'] },
            { type: 'model', title: 'Part 4 · Less controlled practice: join two notes in one sentence', rows: [
              ['Note A', 'Clapp et al. (2022): women = vulnerable group, need agency'],
              ['Note B', 'Mockshell & Ritter (2024): social norms limited women’s roles'],
              ['One sentence', '<b>Clapp et al. (2022) argue that</b> women need more agency. <b>This is supported by</b> Mockshell and Ritter (2024), <b>who found that</b> social norms limited women’s roles.']
            ], note: 'Name both sources. Choose: same, adding support, or different.' },
            { type: 'fields', title: 'Your turn: write one sentence for each pair', fields: [
              { id: 'h4-m8-1', label: '1. Oxfam (2022): women farmers lack land and money · Clapp et al. (2022): women need more agency', placeholder: 'Both Oxfam (2022) and Clapp et al. (2022) suggest that…', rows: 2 },
              { id: 'h4-m8-2', label: '2. Mockshell & Ritter (2024): program reduced vegetable waste · Clapp et al. (2022): less food loss = more sustainable', placeholder: 'Mockshell and Ritter (2024) found that… . Similarly, …', rows: 2 },
              { id: 'h4-m8-3', label: '3. Clapp et al. (2022): sustainability = good farming + less food loss · Mockshell & Ritter (2024): sustainability = resilience (recovering from problems)', placeholder: 'Clapp et al. (2022) see sustainability as…, whereas…', rows: 2 }
            ]},
            { type: 'key', title: 'Part 5 · Production: group discussion (10 minutes)', points: ['<b>How can empowering women improve food security?</b><br><small>empowering = giving more power, money, skills and choices</small>'] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Prepare for <b>3 minutes</b>. Choose <b>two pillars</b>.' },
              { who: 'alone', text: 'For each pillar, write one idea and <b>two</b> sources.' },
              { who: 'group', text: 'Discuss for <b>6–7 minutes</b>. Use two linking phrases. A partner ticks the checklist.' }
            ]},
            { type: 'figure', src: 'assets/week5/six-pillars.svg', alt: 'The six dimensions of food security: availability, access, utilisation, stability, agency and sustainability.', caption: 'The six pillars', credit: 'Based on Clapp et al. (2022)', size: 'small' },
            { type: 'table', id: 'm8t', title: 'My preparation: 2–3 pillars', columns: ['Pillar', 'How empowering women helps', 'Evidence (which text?)'], rows: 3 },
            { type: 'chat', title: 'Model: a short sample discussion', lines: [
              ['Student 1', 'I chose <b>access</b>. <mark>Mockshell and Ritter (2024) found that</mark> the women’s groups gave free vegetables to very poor families.'],
              ['Student 2', 'Good point. <mark>Similarly, Oxfam (2022) points out that</mark> equal pay for women helps families buy healthy food.'],
              ['Student 3', 'I looked at <b>agency</b>. <mark>However, social norms may limit</mark> what women can do. In the study, they could not take some roles.'],
              ['Student 1', 'So, <mark>both texts suggest that</mark> empowering women helps — but it is not easy.']
            ]},
            { type: 'language', title: 'Bringing sources together (= synthesising)', tabs: false, groups: [
              { label: 'Same or adding support', phrases: ['Both Clapp et al. (2022) and Oxfam (2022) suggest that…', 'This is supported by Mockshell and Ritter (2024), who found that…', 'Similarly, Oxfam (2022) points out that…'] },
              { label: 'Different', phrases: ['In contrast, Mockshell and Ritter (2024) show that…', '…, whereas Oxfam (2022)…', 'However, social norms may limit…'] }
            ]},
            { type: 'checklist', id: 'h4-m8k', title: 'Partner check: did your classmate…', items: [
              'name two sources?',
              'use two linking phrases (Both… and…, Similarly, This is supported by, In contrast)?',
              'say which pillar the idea helps?'
            ]},
            { type: 'spinner', id: 'm8sp', title: 'Extra round: spin and speak', text: 'Spin. Say how empowering women helps <b>this pillar</b>. Use <b>this source</b> and one phrase above. Then pass the turn.', reels: [
              { label: 'Pillar', start: 'Spin!', items: ['availability', 'access', 'utilization', 'stability', 'agency', 'sustainability'] },
              { label: 'Use this source', start: '…', items: ['Clapp et al. (2022)', 'Oxfam (2022)', 'Mockshell and Ritter (2024)', 'two sources together'] }
            ]},
            { type: 'teacher', ref: 'w5d4-t8' }
          ],
          answers: { title: 'Model answers', items: [
            ['Notice', 'Paragraph B: two sources that <b>agree</b> — SHGs bring good results. Paragraph F: two views that are <b>different</b> — the authors vs. Clapp et al. (2022) (“rather than”).'],
            ['Part 4 · 1', 'Both Oxfam (2022) and Clapp et al. (2022) suggest that women need more power: women farmers lack land and money, and they need more agency.'],
            ['Part 4 · 2', 'Mockshell and Ritter (2024) found that the program reduced vegetable waste. Similarly, Clapp et al. (2022) link less food loss with sustainability.'],
            ['Part 4 · 3', 'Clapp et al. (2022) see sustainability as good farming and less food loss, whereas Mockshell and Ritter (2024) see it as resilience — recovering from problems.'],
            ['Discussion · Agency', 'Clapp et al. (2022) say agency matters most for vulnerable groups such as women. In the SHG program, women gained solidarity and could decide who to buy from, sell to and give free food to (Mockshell & Ritter, 2024) — but social norms still limited their roles.'],
            ['Discussion · Availability and stability', 'More than half of smallholder farmers are women (Oxfam, 2022). Securing their land rights, finance and support to improve farming practices could increase food production and make it more stable.'],
            ['Discussion · Access', 'Women’s self-help groups earned income and gave very poor households free vegetables, which increased access (Mockshell & Ritter, 2024). Equal pay for women (Oxfam, 2022) would also help households buy healthy food.']
          ]}
        }
      ]
    },

    /* ───────────────────────── 7A Applying the frameworks ───────────────────────── */
    {
      id: 'apply', number: '02', code: '7A', minutes: 120,
      tone: 'green', art: 'research',
      title: 'Applying the frameworks',
      subtitle: 'Build an instrument to evaluate your solution',
      outcome: 'Write a list of questions (an “instrument”) to judge a solution. Use your questions to judge how well your group’s solution works.',
      activities: [
        /* ── 1 · Review your sources + Preparing questions ── */
        {
          id: 'p1', short: 'Sources + questions', minutes: 45, grouping: 'Groups of 3',
          title: 'Review your sources + Preparing questions',
          goal: 'Share your homework sources, choose one or two pillars, and write 3–4 questions.',
          blocks: [
            { type: 'key', title: 'Part 1 · Review your sources', points: [
              'Your group judges <b>ONE</b> solution to food waste with the <b>6 pillars</b>.',
              'You need an <b>instrument</b> (= a tool to measure something). Here, it is a list of questions.',
              'Tomorrow your group gives a <b>5–6 minute mini presentation</b>.'
            ]},
            { type: 'cards', pick: 'p1-sol', title: 'Our solution (your teacher gave it to your group yesterday)', items: [
              { icon: 'users', label: 'Food banks', text: 'Giving extra food to people in need.' },
              { icon: 'layers', label: 'Apps to help reduce waste', text: 'Apps for food lists, recipes, sharing and discounts.' },
              { icon: 'sprout', label: 'Upcycled food', text: 'Making new food from food that is left over.' },
              { icon: 'target', label: 'Technology to track waste', text: 'Measuring waste in businesses and homes.' },
              { icon: 'home', label: 'Ways consumers can reduce waste at home', text: 'Shopping lists, leftovers, freezing, labels…' }
            ]},
            { type: 'choose', id: 'p1-env', title: 'Our environment', options: ['Our city', 'Our region', 'Our country'] },
            { type: 'flip', title: 'Quick memory check: the six pillars', hint: 'Say what each pillar means. Then tap to check.', items: [
              { front: 'availability', back: 'There is enough food in the place.' },
              { front: 'access', back: 'People can get the food (they can pay for it and reach it).' },
              { front: 'utilization', back: 'The body gets nutrients from safe, good-quality food.' },
              { front: 'stability', back: 'Food security stays the same over time.' },
              { front: 'agency', back: 'People can make their own choices about food.' },
              { front: 'sustainability', back: 'We make food now without harming food in the future.' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Take turns. Share what you found for homework.' },
              { who: 'group', text: 'Say which pillars your information is about.' },
              { who: 'group', text: 'Choose <b>one or two pillars</b>. Pick the ones with the best evidence.' }
            ]},
            { type: 'table', id: 'h4-p1t', title: 'Our source notes (keep them for 7A and tomorrow’s presentation)', columns: ['Source (who? when?)', 'Main point', 'Evidence / example', 'Pillar', 'Strength (+) or limitation (–) of our solution?'], rows: 4, extraRows: true },
            { type: 'model', title: 'Example row (solution: food banks)', rows: [
              ['Source', 'Mockshell and Ritter (2024)'],
              ['Main point', 'Free fresh food reached the poorest families.'],
              ['Evidence', 'Very poor consumers were given free FFV (paragraph C).'],
              ['Pillar', 'Access'],
              ['+ or –', '<b>+</b> giving free food can improve access — food banks do this too.']
            ]},
            { type: 'fields', title: 'Our notes', fields: [
              { id: 'p1-1', label: 'Other useful information from our sources (optional)', placeholder: 'Source 1: … → access, agency…', rows: 3 },
              { id: 'p1-2', label: 'The pillar(s) we chose and why', placeholder: 'We chose… because…', rows: 3 }
            ]},
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Sharing a source', phrases: ['I found a report by… . It says that…', 'This is about access, because…', 'I think we should focus on… because we have good evidence.'] }
            ]},
            { type: 'sources', ids: ['clapp', 'oxfam', 'mockshell'] },
            { type: 'teacher', ref: 'w5d4-t9' },

            { type: 'cards', title: 'Part 2 · Preparing questions — Notice (2 minutes): which question is more useful?', items: [
              { label: 'A · general', text: 'Who does the solution help?' },
              { label: 'B · specific', text: 'Which groups might have <b>difficulty using</b> <b>food-sharing apps</b>?' }
            ]},
            { type: 'talk', title: 'Ask yourself', prompts: ['Both questions are about people. Which one helps you judge <b>apps</b> and <b>access</b>? Why?'] },
            { type: 'key', title: 'Part 2 · Clarify: a good evaluation question', points: [
              'A good question = <b>your solution</b> + <b>your pillar</b> + a clear question form.',
              'Why? General questions give general answers. Specific questions give <b>evidence</b> you can present.',
              'Use <b>different types</b> of question. Start from the five general questions and make them specific.'
            ]},
            { type: 'key', title: 'Three types of question', compare: [
              { label: 'Open', text: '<b>Which</b> groups…? <b>How easily</b>…? <b>What barriers</b>…?', eg: '<b>What barriers</b> stop students from using the library app?' },
              { label: 'Yes / no', text: '<b>Would</b>… be easy to…? <b>Is</b>… free? <b>Can</b>…?', eg: '<b>Is</b> the campus bus free for all students?' },
              { label: 'Scale', text: '<b>On a scale</b> (not → very effective), <b>how well</b>…?', eg: '<b>On a scale</b> from 1 to 5, <b>how well</b> does the bus app show times?' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> (1) too general: <i>Is food important?</i> (2) word order: <i>Which groups <s>they might have</s>…?</i> → <i>Which groups <b>might have</b>…?</i>' },
            { type: 'cards', title: 'The five general questions (from 6A)', numbered: true, items: [
              { text: 'What problem/s does the solution improve?' },
              { text: 'Who does the solution help?' },
              { text: 'How extensive is it? Is it limited in place or time?' },
              { text: 'How accessible is the solution for different groups?' },
              { text: 'Are there any limitations or unintended consequences?' }
            ]},
            { type: 'sort', id: 'p2s', title: 'Part 2 · Controlled practice: three types of question', hint: '<b>Drag</b> each question to its type — or tap a card, then tap a box.', buckets: [
              { label: 'Open question', text: 'How…? Which…? What…?' },
              { label: 'Yes / no question', text: 'Would…? Is…? Can…?' },
              { label: 'Scale question', text: 'not effective → very effective' }
            ], items: [
              { text: 'Which groups might have difficulty using food banks?', answer: 0 },
              { text: 'Would food banks be easy to find for everyone?', answer: 1 },
              { text: 'How well do food banks help families: not effective, moderately effective or very effective?', answer: 2 },
              { text: 'What barriers stop people from using the app?', answer: 0 },
              { text: 'Is the app free to use?', answer: 1 },
              { text: 'On a scale from 1 to 5, how much food does the app save?', answer: 2 }
            ]},
            { type: 'model', title: 'Part 2 · Less controlled practice: make it specific', rows: [
              ['General', 'How accessible is the solution for different groups?'],
              ['Specific (apps · access)', 'Would these apps be easy to get for <b>older people</b> without a smartphone?']
            ], note: 'Add your solution, your pillar and one group of people.' },
            { type: 'fields', title: 'Your turn: make two general questions specific for YOUR solution', fields: [
              { id: 'h4-p2-l1', label: 'Who does the solution help? →', placeholder: 'Which groups benefit most from…?', rows: 2 },
              { id: 'h4-p2-l2', label: 'Are there any limitations? →', placeholder: 'What barriers could stop… from…?', rows: 2 }
            ]},
            { type: 'model', title: 'Part 2 · Production · Example instrument: mobile apps · agency and access', rows: [
              ['Main question', 'How well do <b>mobile apps</b> improve <b>agency</b> (help users make good choices) and <b>access</b>?'],
              ['Question 1 (yes / no)', 'Would these apps be easy to get for everyone in the community?'],
              ['Question 2 (open)', 'Which groups might have difficulty using these apps?'],
              ['Question 3 (scale)', 'On a scale (not → very effective), how well could these apps help users use up extra food?']
            ], note: 'Your questions should be about <b>your</b> solution and <b>your</b> pillar(s).' },
            { type: 'fields', title: 'Production (8 minutes): our draft questions', fields: [
              { id: 'p2-0', label: 'Main question: How well does (our solution) improve (our pillar/s)?', placeholder: 'How well do food banks improve access and stability…?', rows: 2 },
              { id: 'p2-1', label: 'Question 1', placeholder: 'Would…? / Which groups…? / How…?', rows: 2 },
              { id: 'p2-2', label: 'Question 2', rows: 2 },
              { id: 'p2-3', label: 'Question 3', rows: 2 },
              { id: 'p2-4', label: 'Question 4 (optional)', rows: 2 }
            ]},
            { type: 'checklist', id: 'h4-p2k', title: 'Check your questions', items: [
              'Every question names our solution and is about our pillar(s).',
              'We used at least two types (open, yes / no, scale).',
              'At least one question is about a group of people (who? which groups?).'
            ]},
            { type: 'teacher', ref: 'w5d4-t10' }
          ],
          answers: { title: 'More model questions: mobile apps · agency and access', items: [
            ['Notice', 'B is more useful: it names the solution (food-sharing apps), the pillar (access) and a problem (difficulty). A is too general.'],
            ['Make it specific', 'Which groups benefit most from food banks in our city? · What barriers could stop working families from using food banks (e.g. opening hours)?'],
            ['Questions · 3–4', '3. How easily could these apps fit into consumers’ daily routines?<br>4. What barriers could there be to using this technology? (e.g. lack of awareness, not user-friendly, lack of interest, no smartphone or limited internet, language barriers)'],
            ['Questions · 5–7', '5. How easily could the apps be customised (dietary preferences, budget, cooking habits)?<br>6. On a scale (not effective — moderately effective — very effective), how well could these apps help consumers a) manage their food at home, b) use up extra food, c) track progress (e.g. money saved)?<br>7. Overall, would these apps really change consumer behaviour?'],
            ['Why these are good', 'They are about one solution (apps) and two pillars. They use open, yes/no and scale questions. They think about different people.']
          ]}
        },

        /* ── 2 · Assessing questions ── */
        {
          id: 'p3', short: 'Check questions', minutes: 20, grouping: 'Groups',
          title: 'Assessing questions',
          goal: 'Swap questions with another group. Give feedback with a checklist.',
          blocks: [
            { type: 'sort', id: 'p3s', title: 'Warm-up: strong or weak question?', hint: 'The solution is <b>food banks</b> and the pillar is <b>access</b>. <b>Drag</b> each question into a box.', buckets: [
              { label: 'Strong', text: 'specific to the solution and the pillar' },
              { label: 'Weak', text: 'too general or not about the pillar' }
            ], items: [
              { text: 'Can people without a car reach a food bank easily?', answer: 0, why: 'Specific: about food banks and access.' },
              { text: 'Is food important?', answer: 1, why: 'Too general — not about food banks.' },
              { text: 'Which groups feel uncomfortable using food banks?', answer: 0, why: 'Thinks about different people (stakeholders).' },
              { text: 'Do you like vegetables?', answer: 1, why: 'Not about the solution or the pillar.' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Copy your final questions into the box below.' },
              { who: 'group', text: '<b>Send</b> them to the group that will check them.' },
              { who: 'group', text: 'Open the other group’s questions in <b>Shared with me</b>.' },
              { who: 'group', text: 'Use the checklist. Then send your feedback back to them.' },
              { who: 'group', text: 'Read your feedback. <b>Improve your questions</b>.' }
            ]},
            { type: 'fields', id: 'p3q', title: 'Our questions', fields: [
              { id: 'p3-sol', label: 'Our solution and pillar(s)', placeholder: 'Food banks · access and stability', rows: 1 },
              { id: 'p3-qs', label: 'Our questions', placeholder: '1. …\n2. …\n3. …\n4. …', rows: 6 }
            ], send: true, sendLabel: 'Send your questions to the group that will check them' },
            { type: 'form', id: 'p3f', title: 'Checklist: feedback on another group’s questions', intro: 'Choose Yes or No for each point. Add a short comment.', observe: 'Which group’s questions are you checking?', scale: ['Yes', 'No'], cols: ['Comments'], sections: [
              { label: 'Checklist', items: [
                'The questions are about the pillar(s).',
                'There are different types of question (open, yes/no, scale).',
                'The questions are specific to the solution.',
                'They think about different people (stakeholders = people affected).',
                'They look at effectiveness in different ways.<br><small>e.g. short-term and long-term results · direct and indirect effects · planned and unplanned results</small>'
              ]}
            ], fields: [{ id: 'p3f-s', label: 'Suggestions for improvement', rows: 3, placeholder: 'You could add a question about…' }],
              send: true, sendLabel: 'Send your feedback to that group' },
            { type: 'language', title: 'Polite feedback', tabs: false, groups: [
              { label: 'Feedback starters', phrases: ['Question 2 is very specific — well done.', 'You could add a question about…', 'Maybe question 3 could be more specific, e.g. …'] }
            ]},
            { type: 'fields', title: 'Our revised questions', fields: [
              { id: 'p3-rev', label: 'What did we change after the feedback?', placeholder: 'We added a question about… / We made question 2 more specific…', rows: 4 }
            ]},
            { type: 'teacher', ref: 'w5d4-t11' }
          ]
        },

        /* ── 3 · Applying questions ── */
        {
          id: 'p4', short: 'Apply questions', minutes: 30, grouping: 'Groups of 3', cowrite: true,
          title: 'Applying questions',
          goal: 'Answer your questions with evidence from your sources. Then decide how well your solution works.',
          blocks: [
            { type: 'key', title: 'Our task (30 minutes, as a group)', points: [
              '<b>How effective is our solution in reducing food waste, for our chosen pillar(s)?</b>',
              'Answer: very effective · moderately effective · not very effective — and say why, with sources.'
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Answer each question. Use your homework sources or the class texts.' },
              { who: 'group', text: 'Say <b>who</b> says so: name the source.' },
              { who: 'group', text: 'Press <b>Write together</b> to fill in one table with your group.' },
              { who: 'group', text: 'Finish with your group’s overall evaluation: how effective is the solution?' }
            ]},
            { type: 'model', title: 'Example answer', rows: [
              ['Question', 'Who does the SHG program help?'],
              ['Response', 'Very poor families. Mockshell and Ritter (2024) found that they got free fruit and vegetables.']
            ], note: 'Answer + evidence + source. Keep it short. (This example uses the class text.)' },
            { type: 'table', id: 'p4t', title: 'Our evaluation', columns: ['Questions', 'Response (with evidence: who says so?)'], fixed: ['Question 1', 'Question 2', 'Question 3', 'Question 4'], extraRows: true },
            { type: 'model', title: 'Plan for our overall evaluation', rows: [
              ['Position', 'Overall, food banks are <b>moderately effective</b> in improving access.'],
              ['Reason 1 + source', 'They give free food to families with low incomes (Mockshell & Ritter, 2024, found free food improved access).'],
              ['Reason 2 + source', 'However, they are not easy for everyone to reach, e.g. people who work all day.'],
              ['Conclusion', 'So they help, but longer opening hours would make them more effective.']
            ], note: 'Position → reason 1 + source → reason 2 + source → conclusion.' },
            { type: 'scale', id: 'p4sc', title: 'Vote: how effective is our solution?', statement: 'Our solution works well for our chosen pillar(s).', ends: ['Not effective', 'Very effective'], mid: 'Moderately effective' },
            { type: 'fields', fields: [
              { id: 'p4-all', label: 'Overall, how effective is our solution for our chosen pillar(s)?', placeholder: 'Overall, we think… is moderately effective because…', rows: 3 }
            ]},
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Using evidence', phrases: ['According to…, …', '… found that…', 'This suggests that the solution is (very / moderately / not very) effective.'] }
            ]},
            { type: 'checklist', id: 'h4-p4k', title: 'Before you finish, check', items: [
              'Every answer has evidence and names a source.',
              'Our overall evaluation says very / moderately / not very effective.',
              'We give one strength and one limitation.'
            ]},
            { type: 'sources', ids: ['clapp', 'oxfam', 'mockshell'] }
          ]
        },

        /* ── 4 · Prepare to present ── */
        {
          id: 'p5', short: 'Prepare to present', minutes: 25, grouping: 'Groups of 3',
          title: 'Prepare to present',
          goal: 'Share your evaluation between three speakers and practise your 5–6 minute talk.',
          blocks: [
            { type: 'key', title: 'Tomorrow’s mini presentation', points: [
              '<b>5–6 minutes</b> per group. <b>Everyone speaks.</b>',
              'You <b>don’t need slides</b>. Talk about your thinking and your overall evaluation.',
              'Use notes, but look at the audience. Don’t read.',
              'Then classmates ask you <b>follow-up questions</b>.'
            ]},
            { type: 'quiz', id: 'p5q', title: 'Quick check: are you ready?', shared: ['True', 'False'], items: [
              { q: 'Only the best speaker in the group talks.', answer: 'False', why: 'Every group member must speak.' },
              { q: 'We need a PowerPoint.', answer: 'False', why: 'You don’t need slides. Focus on your thinking.' },
              { q: 'We should name our sources when we give evidence.', answer: 'True', why: 'Say who says so: “According to Oxfam (2022)…”.' }
            ]},
            { type: 'figure', src: 'assets/week5/presentation-roles.svg', alt: 'Three speakers share the presentation: speaker 1 introduces the solution, the pillar(s) and one question; speaker 2 discusses two questions; speaker 3 discusses one question and gives the overall evaluation; then classmates ask follow-up clarification questions.', caption: 'One way to share the presentation', size: 'wide' },
            { type: 'table', id: 'p5t', title: 'Who says what?', columns: ['Role', 'Name', 'My notes (not a script)'], fixed: [
              'Student 1<br><small>Our solution and why · our pillar(s) · answer to one question, with a source</small>',
              'Student 2<br><small>Two questions and our answers, with sources</small>',
              'Student 3<br><small>One question, with a source · our overall evaluation</small>'
            ]},
            { type: 'language', title: 'Moving between speakers', tabs: false, groups: [
              { label: 'Starting and handing over', phrases: ['Our group looked at… because…', 'We chose to focus on… and…', 'Now… will talk about our next two questions.', 'Thanks, … . So, our next question was…'] },
              { label: 'Concluding', phrases: ['Overall, we think that… is (very / moderately / not very) effective in improving…', 'To sum up, the evidence suggests that…', 'Thank you. Are there any questions?'] }
            ]},
            { type: 'chat', title: 'Model: handing over to the next speaker', lines: [
              ['Student 1', 'Our group looked at <b>food banks</b>, and we chose to focus on <b>access</b>. … <mark>Now Mai will talk about our next two questions.</mark>'],
              ['Student 2', '<mark>Thanks, Leo. So, our next question was</mark> “Which groups find food banks hard to use?” … <mark>Now Sam will finish.</mark>'],
              ['Student 3', '<mark>Overall, we think that</mark> food banks are moderately effective in improving access. <mark>Thank you. Are there any questions?</mark>']
            ]},
            { type: 'checklist', id: 'h4-p5k', title: 'Practice check', items: [
              'Everyone speaks and we finish in 5–6 minutes.',
              'We hand over with a phrase (Now… will talk about…).',
              'We name at least two sources and give our overall evaluation.'
            ]},
            { type: 'tip', text: 'Practise once with a timer. Then practise again. Great job — you’re ready for tomorrow!' },
            { type: 'teacher', ref: 'w5d4-t12' }
          ]
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'Synthesis paragraph', minutes: 20, grouping: 'Alone', category: 'Extra writing',
      title: 'Write a synthesised paragraph',
      goal: 'Turn your discussion ideas into one short paragraph that uses at least two texts.',
      blocks: [
        { type: 'sources', ids: ['clapp', 'oxfam', 'mockshell'] },
        { type: 'language', title: 'Sentence starters', tabs: false, groups: [
          { label: 'Paragraph plan', phrases: ['Empowering women can improve food security in several ways.', 'Clapp et al. (2022) argue that…', 'This is supported by Mockshell and Ritter (2024), who found that…', 'However, …'] }
        ]},
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'How can empowering women improve food security? Write one paragraph (about 150 words). Use at least two of the three texts.', placeholder: 'Empowering women can improve food security in several ways. Clapp et al. (2022) argue that…', rows: 8 }
        ]}
      ]
    }
  ],

  glossary: [
    ['evaluate', 'To judge the quality, value or significance of something, positively or negatively.', 'We evaluate how effective the solution is.'],
    ['availability', 'The pillar about the actual presence of enough food in a place.', 'The program increased the availability of vegetables.'],
    ['access', 'The pillar about people being able to obtain (afford, reach) healthy food.', 'Free vegetables increased access for poor households.'],
    ['utilization', 'The pillar about the body getting nutrients from safe, good-quality food.', 'Fresh vegetables improved utilization.'],
    ['stability', 'The pillar about food security being constant and reliable over time.', 'A constant supply contributed to stability.'],
    ['agency', 'The ability of people to make decisions and control their lives.', 'Social norms limited women’s agency.'],
    ['sustainability', 'Producing food now without harming the ability to produce food in the future.', 'The authors link sustainability to resilience.'],
    ['self-help group (SHG)', 'A group of people who work together to solve a problem that they all have.', 'Each SHG had 10–15 women.'],
    ['resilience', 'The ability to adapt effectively when facing threats.', 'SHGs can build resilience in communities.'],
    ['supply chain participants', 'Suppliers, manufacturers, distributors, retailers and consumers.', 'Other supply chain participants could not operate.'],
    ['value chain actors', 'People who buy and sell a product to make a profit.', 'Value chain actors earned income through the program.'],
    ['solidarity', 'Support or sympathy; unity within a group.', 'The program increased group solidarity.'],
    ['social norms', 'The rules or expected behaviour within a social group.', 'Social norms kept women in the village.'],
    ['resentful', 'Angry because you feel you were treated unfairly.', 'Independent retailers felt resentful.'],
    ['multifaceted', 'Having many aspects.', 'A multifaceted approach protects the most vulnerable.'],
    ['procurement', 'Buying goods that have already been produced in order to resell or distribute them.', 'A fruit and vegetable procurement program.'],
    ['albeit', 'Although (formal).', 'It improved all six dimensions, albeit with mixed results.'],
    ['synthesise', 'To bring ideas from different texts together.', 'Both texts suggest that…'],
    ['instrument', 'A tool for measuring or assessing something — here, a list of questions.', 'Our instrument has four questions.'],
    ['stakeholder', 'A person or group affected by a decision or solution.', 'Consider the impact on different stakeholders.'],
    ['unintended consequence', 'A result that nobody planned or wanted.', 'Retailers losing income was an unintended consequence.'],
    ['clarification question', 'A question that asks a speaker to explain something more clearly.', 'Can you specify what kind of decisions…?']
  ]
};
