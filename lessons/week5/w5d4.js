/* DEC15 · Week 5, Day 4 — lesson content.
   Teacher’s Book: W5 D4 · 6A Mediation (120) · 7A Applying the frameworks (120).
   Texts: Clapp et al. (2022) · Oxfam (2022) · Mockshell & Ritter (2024) — lessons/week5/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js (form, scale, jeopardy, send: true). */

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
  journey: 'Today you see the six-pillar framework in action. You read how researchers used it to evaluate a fresh fruit and vegetable program run by women’s self-help groups in India, and you connect it with Clapp et al. (2022) and Oxfam (2022). Then your group writes its own questions to evaluate one solution to food waste, checks another group’s questions, and gets ready to present tomorrow.',
  finish: { title: 'Friday', text: 'Presentations, AI reflection and a STAR moment' },

  sections: [
    /* ───────────────────────── 6A Mediation ───────────────────────── */
    {
      id: 'mediate', number: '01', code: '6A', minutes: 120,
      tone: 'blue', art: 'reading',
      title: 'Mediation',
      subtitle: 'The six pillars in action · Mockshell and Ritter (2024)',
      outcome: 'Read and take paraphrased notes, synthesise ideas across texts, and use synthesised ideas from different sources to evaluate solutions to a problem.',
      activities: [
        {
          id: 'm1', short: 'Recap', minutes: 20, grouping: 'Teams',
          title: 'Recap',
          goal: 'Play Jeopardy with ideas from Clapp et al. (2022) and Oxfam (2022) — answer in question form!',
          blocks: [
            { type: 'steps', items: [
              { who: 'class', text: 'Get into <b>4 or 5 teams</b>. You can have the texts open.' },
              { who: 'class', text: 'Choose a column and an amount, e.g. “<b>Clapp et al. (2022) A for 100</b>”. Your teacher shows the statement.' },
              { who: 'class', text: 'You have <b>20 seconds</b>. To win the points, give your answer <b>as a question</b>: “This organisation is interested in food and hunger.” → “<b>Who is Oxfam?</b>”' }
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
            { type: 'teacher', ref: 'w5d4-t1' }
          ],
          answers: { title: 'The Oxfam numbers', items: [
            ['How much money?', '<img src="assets/week5/hunger-funding.svg" alt="Oxfam (2022) numbers: about $37 billion a year until 2030 to end hunger — about $23 billion this year for extreme hunger, an extra $14 billion a year in aid for chronic hunger, and about $19 billion a year from low- and middle-income countries.">']
          ]}
        },
        {
          id: 'm2', short: 'Evaluating', minutes: 5, grouping: 'Whole class',
          title: 'Academic Skills',
          goal: 'Learn what it means to evaluate a solution — and five questions you can ask.',
          blocks: [
            { type: 'key', title: 'To evaluate = to judge something, positively or negatively', points: [
              'Today’s reading uses Clapp et al.’s (2022) <b>six-pillar model</b> to evaluate a solution to food insecurity.',
              'We can evaluate the <b>quality</b>, <b>value</b> or <b>significance</b> of a solution, and its <b>strengths and limitations</b> in relation to a topic or issue.'
            ]},
            { type: 'figure', src: 'assets/week5/evaluate-solutions.svg', alt: 'Five questions to evaluate a solution: 1 What problems does it improve? 2 Who does it help? 3 How far does it reach (place and time)? 4 How accessible is it for different groups? 5 Any limitations or unintended consequences? We can evaluate quality, value, significance, strengths and limitations.', caption: 'Questions we can ask when evaluating solutions', size: 'wide' },
            { type: 'talk', prompts: ['Think of a solution to food waste from Weeks 3 and 4 (e.g. food banks). Try to answer one of the five questions about it.'] },
            { type: 'teacher', ref: 'w5d4-t2' }
          ]
        },
        {
          id: 'm3', short: 'Vocabulary', minutes: 10, grouping: 'Pairs',
          title: 'Vocabulary',
          goal: 'Check nine key words from the reading, then use them in sentences.',
          blocks: [
            { type: 'flip', title: '1 · Before you read: key vocabulary', hint: 'Guess the meaning, then turn the card.', items: [
              { front: 'self-help groups', back: 'A group of people who work together to solve a problem that they all have.' },
              { front: 'resilience', back: 'The ability to adapt effectively in the face of threats.' },
              { front: 'supply chain participants', back: 'Suppliers, manufacturers, distributors, retailers, consumers.' },
              { front: 'value chain actors', back: 'People who buy and sell a product to make a profit.' },
              { front: 'solidarity', back: 'Support or sympathy; unity.' },
              { front: 'social norms', back: 'The rules or expected behaviour within a social group.' },
              { front: 'resentful', back: 'Angry due to a feeling of being treated unfairly.' },
              { front: 'multifaceted', back: 'Having many aspects.' },
              { front: 'procurement', back: 'The buying and reselling of goods that have already been produced.' }
            ]},
            { type: 'cloze', id: 'm3c', list: true, title: '2 · Complete the sentences with words from the vocabulary list', options: ['self-help groups', 'resilience', 'supply chain participants', 'value chain actors', 'solidarity', 'social norms', 'resentful', 'multifaceted', 'procurement'],
              answers: ['self-help groups', 'resilience', 'supply chain participants', 'value chain actors', 'solidarity', 'social norms', 'resentful', 'multifaceted'],
              text: '{{1}} can build {{2}} in communities.\n{{3}} must work together to ensure smooth operations.\n{{4}} make a living from the food system.\n{{5}} among workers strengthens their ability to demand better conditions.\n{{6}} often influence decision-making in rural areas.\nThe community became {{7}} after promises of aid were broken.\nFood insecurity is a complex, {{8}} issue requiring diverse solutions.' },
            { type: 'teacher', ref: 'w5d4-t3' }
          ]
        },
        {
          id: 'm4', short: 'Gist', minutes: 10, grouping: 'Alone → pair',
          title: 'Reading for gist',
          goal: 'Read the introduction and conclusion and find out what the study did and found.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Open the reading and read the <b>introduction</b> (paragraph A). Then read the <b>conclusion</b> below.' },
              { who: 'pair', text: 'Answer the five questions. Compare with your partner.' }
            ]},
            { type: 'sources', ids: ['mockshell'] },
            { type: 'passage', id: 'm4p', title: 'Conclusion (paragraph G)', text: 'This study contributed to the literature by applying Clapp et al.’s (2022) six-dimensional food security framework to examine the effects of a specific policy (Clapp et al., 2022). The policy in question was a fresh fruit and vegetable procurement program implemented by self-help groups. Through semi-structured interviews and focus group discussions, we found that the policy was able to contribute to all six dimensions of food security, albeit with mixed results on agency and sustainability. We showed that including the two additional dimensions of food security, namely agency and sustainability, allowed for a more thorough, complete, and holistic analysis of the impacts of the policy. Examining policies and programs through the lens of the six-dimensional food security framework is one step towards designing and implementing policies that are more inclusive. A multifaceted approach will help ensure that the most vulnerable are not left behind.' },
            { type: 'quiz', id: 'm4q', items: [
              { q: '1. What is the program being evaluated?', options: ['A fresh fruit and vegetable procurement program implemented by self-help groups', 'A government food bank for poor families', 'A mobile app that helps farmers sell vegetables'], answer: 'A fresh fruit and vegetable procurement program implemented by self-help groups', why: '“The policy in question was a fresh fruit and vegetable procurement program implemented by self-help groups.”' },
              { q: '2. What model is used to evaluate the program?', options: ['Clapp et al.’s (2022) six-dimensional food security framework', 'The Value–Attitude–Behaviour model', 'The food waste hierarchy'], answer: 'Clapp et al.’s (2022) six-dimensional food security framework', why: 'The study applies Clapp et al.’s six dimensions: availability, access, utilization, stability, agency and sustainability.' },
              { q: '3. What were the results?', options: ['The program contributed to all six dimensions, with mixed results on agency and sustainability.', 'The program only improved availability and access.', 'The program had no clear effect on food security.'], answer: 'The program contributed to all six dimensions, with mixed results on agency and sustainability.', why: '“…able to contribute to all six dimensions of food security, albeit with mixed results on agency and sustainability.”' },
              { q: '4. Were there any limitations to the results?', options: ['Yes — the results are not as clear for agency and sustainability.', 'Yes — the program was too expensive.', 'No — all results were completely positive.'], answer: 'Yes — the results are not as clear for agency and sustainability.', why: '<b>albeit</b> = although. The results on these two pillars were mixed.' },
              { q: '5. How could the results be used?', options: ['To design more inclusive programs that empower vulnerable groups', 'To replace all markets with self-help groups', 'To prove that the four-pillar model is enough'], answer: 'To design more inclusive programs that empower vulnerable groups', why: '“…designing and implementing policies that are more inclusive… the most vulnerable are not left behind.”' }
            ]},
            { type: 'teacher', ref: 'w5d4-t4' }
          ]
        },
        {
          id: 'm5', short: 'Note-taking', minutes: 20, grouping: 'Alone',
          title: 'Reading for detail: Note-taking',
          goal: 'Read the whole text and add paraphrased notes to the table.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the whole text (about <b>20 minutes</b> to read and take notes).' },
              { who: 'alone', text: 'Use the small questions under each heading to guide your notes.' },
              { who: 'alone', text: '<b>Paraphrase</b>: short notes in your own words — not whole sentences from the text.' }
            ]},
            { type: 'sources', ids: ['mockshell'] },
            { type: 'figure', src: 'assets/week5/shg-program.svg', alt: 'The fresh fruit and vegetable program in Odisha, India, during the COVID-19 lockdown: self-help groups of 10–15 women buy fresh fruit and vegetables from producers (farmers) and sell them to consumers in towns and villages; very poor households receive free produce.', caption: 'How the program worked', credit: 'Based on Mockshell and Ritter (2024)', size: 'wide' },
            { type: 'table', id: 'm5t', title: 'My paraphrased notes', columns: ['', 'Notes'], fixed: [
              'Introduction<br><small>What solution is being evaluated? · What framework is used? · How does this study define agency and sustainability?</small>',
              'The program<br><small>Where and when was the program run? · Who ran the program? · What did they do? · Previous benefits of SHGs</small>',
              'Availability and access<br><small>How did the SHGs impact these pillars? · Vulnerable groups</small>',
              'Utilization and stability<br><small>How did the SHGs impact these pillars?</small>',
              'Agency<br><small>How did the SHGs exercise agency? · How was agency limited for women? · How did the program impact independent retailers?</small>',
              'Sustainability<br><small>A different conceptualisation of this pillar to Clapp et al. (2022) · Impact on sustainability</small>',
              'Conclusion<br><small>Impact of the SHGs on the 6 dimensions · Limitations · How the study can be used</small>'
            ]},
            { type: 'teacher', ref: 'w5d4-t5' }
          ],
          answers: { title: 'Sample notes', items: [
            ['Introduction', 'Solution: a fresh fruit and vegetable (FFV) program run by self-help groups in India. Framework: Clapp et al.’s 6-pillar framework. <b>Agency</b>: the ability of people to control their lives → can lead to collective action, which can reduce inequality. <b>Sustainability</b>: the ability to provide food to current generations without reducing future generations’ ability to do the same. Resilience is included in sustainability — not another dimension.'],
            ['The program', 'SHGs in Odisha, India, during the COVID-19 lockdowns. Groups of 10–15 women. Bought FFV from producers and sold them to consumers. Previous benefits of SHGs: food expenditures, nutritional outcomes and women’s empowerment.'],
            ['Availability and access', 'Increased availability, especially in rural areas. Increased access to nutritious foods. Producers could make money and consumers could get healthy food at a reasonable price. Very poor consumers were given free FFV.'],
            ['Utilization and stability', 'Consumers could get fresher (not rotten) vegetables. Supply was constant → stable prices and quantities. Staple vegetables (potatoes, onions) were brought in from other areas. Consumers in urban areas could also access the program.'],
            ['Agency', 'Increased sense of solidarity among SHG members; SHGs could support their communities. They had a choice over who they bought from and sold to, and could give free food to poor people. But women were restricted in the roles they could take because of gender and cultural (social) norms. Independent retailers were affected negatively: they could only sell illegally during lockdown, had to lower prices or travel further, and felt neglected and resentful.'],
            ['Sustainability', 'Seen as resilience in food systems, rather than environmentally friendly farming (Clapp et al.). Still: reduced FFV waste, and the SHG received a solar-powered cold storage facility thanks to better government (political) connections.'],
            ['Conclusion', 'Contributed to all 6 dimensions. Limitation: the impact on agency and sustainability was mixed. Use: to create more inclusive food systems and policies that protect the vulnerable.']
          ]}
        },
        {
          id: 'm6', short: 'After notes', minutes: 10, grouping: 'Pairs',
          title: 'Reading for detail: Post note-taking questions',
          goal: 'Use your notes to explain the mixed results and to evaluate the program with the five questions.',
          blocks: [
            { type: 'fields', title: '1 · Mixed results', fields: [
              { id: 'm6-1', label: 'In the conclusion the authors say that the results for agency and sustainability were mixed. What do they mean by this?', placeholder: 'The relationship between… was not clearly positive because…', rows: 4 }
            ]},
            { type: 'table', id: 'm6t', title: '2 · Answer the five evaluation questions for this study', columns: ['Question', 'Answer for the SHG program'], fixed: [
              'What problems does the solution improve?',
              'Who does the solution help?',
              'How extensive is the solution?<br><small>place and time</small>',
              'How accessible is the solution for different groups?',
              'Are there any limitations, or does the solution cause any unintended consequences?'
            ]},
            { type: 'teacher', ref: 'w5d4-t6' }
          ],
          answers: { items: [
            ['Mixed results', 'The relationship between these dimensions and the SHG program was not clearly positive. There were negative impacts for retailers who were not in the SHGs, and women’s agency was limited by cultural norms. There was no clear sign that the program made farming practices more sustainable — but the authors also understand sustainability differently (as resilience).'],
            ['What problems?', 'All 6 pillars of food security were positively affected.'],
            ['Who does it help?', 'Poor and vulnerable groups who could not access fresh fruit and vegetables.'],
            ['How extensive?', 'It ran in one country during pandemic restrictions. It is difficult to say if it would transfer to other regions or give the same benefits in normal economic times.'],
            ['How accessible?', 'Accessible to disadvantaged groups at the community level, in both regional and urban areas.'],
            ['Limitations?', 'Independent retailers lost income during the lockdowns and did not benefit from the program. Women’s agency was also limited by cultural norms.']
          ]}
        },
        {
          id: 'm7', short: 'Across texts', minutes: 30, grouping: 'Alone → pair',
          title: 'Building understanding across texts',
          goal: 'Decide which of the three texts mention each paraphrased statement.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read each paraphrased statement. Choose <b>Y</b> if the text mentions the information and <b>N</b> if it does not (about 20 minutes).' },
              { who: 'pair', text: 'Peer check (about 10 minutes): for each Y, show your partner <b>where</b> in the text you found it.' }
            ]},
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
        {
          id: 'm8', short: 'Discussion', minutes: 15, grouping: 'Groups of 3–4',
          title: 'Synthesizing: Discussion',
          goal: 'Discuss how empowering women can improve food security — using ideas from all three texts.',
          blocks: [
            { type: 'key', title: 'Discussion question', points: ['<b>How can empowering women improve food security?</b>'] },
            { type: 'steps', items: [
              { who: 'alone', text: '<b>5 min</b> to prepare. Think about how empowering women affects each of the six pillars. <b>Choose two or three pillars</b> to explain.' },
              { who: 'alone', text: 'Use the paraphrased statements from the last activity to help you, and say which text each idea comes from.' },
              { who: 'group', text: '<b>6–8 min</b> to discuss. Your teacher may ask some groups to share at the end.' }
            ]},
            { type: 'figure', src: 'assets/week5/six-pillars.svg', alt: 'The six dimensions of food security: availability, access, utilisation, stability, agency and sustainability.', caption: 'The six pillars', credit: 'Based on Clapp et al. (2022)', size: 'small' },
            { type: 'table', id: 'm8t', title: 'My preparation: 2–3 pillars', columns: ['Pillar', 'How empowering women helps', 'Evidence (which text?)'], rows: 3 },
            { type: 'language', title: 'Synthesising ideas from different sources', tabs: false, groups: [
              { label: 'Linking sources', phrases: ['Both Clapp et al. (2022) and Oxfam (2022) suggest that…', 'This is supported by Mockshell and Ritter (2024), who found that…', 'Similarly, Oxfam (2022) points out that…', 'In contrast, Mockshell and Ritter (2024) show that…'] },
              { label: 'Explaining effects', phrases: ['If women had more…, this could improve… because…', 'This would increase access to… as…', 'However, social norms may limit…'] }
            ]},
            { type: 'teacher', ref: 'w5d4-t8' }
          ],
          answers: { title: 'Some possible ideas', items: [
            ['Agency', 'Clapp et al. (2022) say agency matters most for vulnerable groups such as women. In the SHG program, women gained solidarity and could decide who to buy from, sell to and give free food to (Mockshell & Ritter, 2024) — but social norms still limited their roles.'],
            ['Availability and stability', 'More than half of smallholder farmers are women (Oxfam, 2022). Securing their land rights, finance and support to improve farming practices could increase food production and make it more stable.'],
            ['Access', 'Women’s self-help groups earned income and gave very poor households free vegetables, which increased access (Mockshell & Ritter, 2024). Equal pay for women (Oxfam, 2022) would also help households buy healthy food.']
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
      outcome: 'Formulate an instrument for evaluating a solution to a problem, and apply a set of guiding questions to evaluate this solution.',
      activities: [
        {
          id: 'p1', short: 'Your sources', minutes: 25, grouping: 'Groups of 3',
          title: 'Review your sources',
          goal: 'Share what you found for homework and choose one or two pillars to focus on.',
          blocks: [
            { type: 'key', title: 'Your task today and tomorrow', points: [
              'Use the <b>6-pillar framework</b> to evaluate the effectiveness of <b>ONE</b> solution to the problem of food waste — in your city, region or country.',
              'To do this, you need an <b>instrument</b> for assessment: a list of questions.',
              'Tomorrow your group gives a <b>5–6 minute mini presentation</b> of your evaluation.'
            ]},
            { type: 'cards', pick: 'p1-sol', title: 'Our solution (your teacher gave it to your group yesterday)', items: [
              { icon: 'users', label: 'Food banks', text: 'Redistributing extra food to people in need.' },
              { icon: 'layers', label: 'Apps to help reduce waste', text: 'Inventory, recipe, sharing and discount apps.' },
              { icon: 'sprout', label: 'Upcycled food', text: 'Turning by-products into new food products.' },
              { icon: 'target', label: 'Technology to track waste', text: 'Measuring waste in businesses and homes.' },
              { icon: 'home', label: 'Ways consumers can reduce waste at home', text: 'Shopping lists, leftovers, freezing, labels…' }
            ]},
            { type: 'choose', id: 'p1-env', title: 'Our environment', options: ['Our city', 'Our region', 'Our country'] },
            { type: 'steps', items: [
              { who: 'group', text: 'Take turns: share the information you found for homework (class texts, a case study or a government report). Which pillars does it relate to?' },
              { who: 'group', text: 'Choose <b>one or two pillars</b> to focus on. Pick the pillars where you have the best evidence.' }
            ]},
            { type: 'fields', title: 'Our notes', fields: [
              { id: 'p1-1', label: 'Useful information from our sources (who wrote it? which pillar?)', placeholder: 'Source 1: … → access, agency…', rows: 5 },
              { id: 'p1-2', label: 'The pillar(s) we chose and why', placeholder: 'We chose… because…', rows: 3 }
            ]},
            { type: 'figure', src: 'assets/week5/six-pillars.svg', alt: 'The six dimensions of food security: availability, access, utilisation, stability, agency and sustainability.', caption: 'The six pillars', credit: 'Based on Clapp et al. (2022)', size: 'small' },
            { type: 'sources', ids: ['clapp', 'oxfam', 'mockshell'] },
            { type: 'teacher', ref: 'w5d4-t9' }
          ]
        },
        {
          id: 'p2', short: 'Write questions', minutes: 20, grouping: 'Groups of 3',
          title: 'Preparing questions',
          goal: 'Draft 3–4 questions that focus on your chosen pillar(s).',
          blocks: [
            { type: 'cards', title: 'General questions for evaluating solutions — use them to write more specific ones', numbered: true, items: [
              { text: 'What problem/s does the solution improve?' },
              { text: 'Who does the solution help?' },
              { text: 'How extensive is the solution? How far-reaching is it? Is it limited in place or time?' },
              { text: 'How accessible is the solution for different groups?' },
              { text: 'Are there any limitations, or does the solution cause any unintended consequences?' }
            ]},
            { type: 'tip', text: 'Use <b>different question types</b>: open questions (<i>How…? Which groups…?</i>), yes/no questions (<i>Would…?</i>) and scale questions (<i>Not effective — Moderately effective — Very effective</i>).' },
            { type: 'fields', title: 'Our draft questions', fields: [
              { id: 'p2-0', label: 'Main question: How well does (our solution) improve (our pillar/s)?', placeholder: 'How well do food banks improve access and stability…?', rows: 2 },
              { id: 'p2-1', label: 'Question 1', rows: 2 },
              { id: 'p2-2', label: 'Question 2', rows: 2 },
              { id: 'p2-3', label: 'Question 3', rows: 2 },
              { id: 'p2-4', label: 'Question 4 (optional)', rows: 2 }
            ]},
            { type: 'teacher', ref: 'w5d4-t10' }
          ],
          answers: { title: 'A model: mobile apps · agency and access', items: [
            ['Main question', 'How well do <b>mobile apps</b> improve <b>agency</b> (empower users to make informed decisions) and <b>access</b>?'],
            ['Questions', '1. Would these apps be / Have these apps been readily accessible to everyone in the community?<br>2. Which groups might have / have had difficulty using these apps?<br>3. How easily could these apps be integrated into consumers’ daily routines?<br>4. What barriers could there be / have there been to adopting this technology? (e.g. lack of awareness, not user-friendly, lack of interest, no smartphone or limited internet, language barriers)<br>5. How easily could the apps be customised (dietary preferences, budget, cooking habits) to improve engagement?<br>6. On a scale (not effective — moderately effective — very effective), how well could these apps help consumers a) manage their inventory, b) use up excess food, c) track progress (e.g. money saved)?<br>7. Overall, would these apps significantly change consumer behaviour?']
          ]}
        },
        {
          id: 'p3', short: 'Check questions', minutes: 20, grouping: 'Groups',
          title: 'Assessing questions',
          goal: 'Exchange questions with another group and give feedback with the checklist.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Copy your final questions into the box below and <b>send them to the group that will check them</b>.' },
              { who: 'group', text: 'Open the other group’s questions (in <b>Shared with me</b>). Use the checklist to give feedback — then send it back to them.' },
              { who: 'group', text: 'Read the feedback you receive and <b>revise your questions</b>. Your teacher may check them before you continue.' }
            ]},
            { type: 'fields', id: 'p3q', title: 'Our questions', fields: [
              { id: 'p3-sol', label: 'Our solution and pillar(s)', placeholder: 'Food banks · access and stability', rows: 1 },
              { id: 'p3-qs', label: 'Our questions', placeholder: '1. …\n2. …\n3. …\n4. …', rows: 6 }
            ], send: true, sendLabel: 'Send your questions to the group that will check them' },
            { type: 'form', id: 'p3f', title: 'Checklist: feedback on another group’s questions', intro: 'Choose Yes or No for each point and add a comment.', observe: 'Which group’s questions are you checking?', scale: ['Yes', 'No'], cols: ['Comments'], sections: [
              { label: 'Checklist', items: [
                'The questions are relevant to the pillar(s).',
                'There is a variety of question types.',
                'The questions are specific to the solution.',
                'They have considered the impact on different people (stakeholders).',
                'The questions consider different dimensions of effectiveness.<br><small>e.g. short-term outputs and long-term outcomes · direct and indirect impacts · intended and unintended consequences</small>'
              ]}
            ], fields: [{ id: 'p3f-s', label: 'Suggestions for improvement', rows: 3, placeholder: 'You could add a question about…' }],
              send: true, sendLabel: 'Send your feedback to that group' },
            { type: 'fields', title: 'Our revised questions', fields: [
              { id: 'p3-rev', label: 'What did we change after the feedback?', placeholder: 'We added a question about… / We made question 2 more specific…', rows: 4 }
            ]},
            { type: 'teacher', ref: 'w5d4-t11' }
          ]
        },
        {
          id: 'p4', short: 'Apply questions', minutes: 30, grouping: 'Groups of 3', cowrite: true,
          title: 'Applying questions',
          goal: 'Use your questions to evaluate your solution with evidence from the literature.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Answer each of your questions with reference to the sources you found for homework or the texts we studied in class.' },
              { who: 'group', text: 'Press <b>Write together</b> to fill in one shared table with your group.' },
              { who: 'group', text: 'Finish with your group’s overall evaluation: how effective is the solution?' }
            ]},
            { type: 'table', id: 'p4t', title: 'Our evaluation', columns: ['Questions', 'Response (with evidence: who says so?)'], fixed: ['Question 1', 'Question 2', 'Question 3', 'Question 4'], extraRows: true },
            { type: 'fields', fields: [
              { id: 'p4-all', label: 'Overall, how effective is our solution for our chosen pillar(s)?', placeholder: 'Overall, we think… is moderately effective because…', rows: 3 }
            ]},
            { type: 'sources', ids: ['clapp', 'oxfam', 'mockshell'] }
          ]
        },
        {
          id: 'p5', short: 'Prepare to present', minutes: 25, grouping: 'Groups of 3',
          title: 'Prepare to present',
          goal: 'Divide your evaluation into three parts and practise your 5–6 minute mini presentation.',
          blocks: [
            { type: 'key', title: 'Tomorrow’s mini presentation', points: [
              '<b>5–6 minutes</b> per group. <b>Every group member must speak.</b>',
              'You <b>don’t need a PPT</b>. Focus on your thinking and your overall evaluation of the solution.',
              'Use notes, but make <b>eye contact</b> — don’t read.',
              'After your presentation, classmates will ask you <b>follow-up questions</b>.'
            ]},
            { type: 'figure', src: 'assets/week5/presentation-roles.svg', alt: 'Three speakers share the presentation: speaker 1 introduces the solution, the pillar(s) and one question; speaker 2 discusses two questions; speaker 3 discusses one question and gives the overall evaluation; then classmates ask follow-up clarification questions.', caption: 'One way to share the presentation', size: 'wide' },
            { type: 'table', id: 'p5t', title: 'Who says what?', columns: ['Role', 'Name', 'My notes (not a script)'], fixed: [
              'Student 1<br><small>The solution and why you chose it · the pillar(s) · your response to one question, with reference to the literature</small>',
              'Student 2<br><small>Two questions and your response to each, with reference to the literature</small>',
              'Student 3<br><small>One question, with reference to the literature · your group’s overall evaluation of the effectiveness of the solution</small>'
            ]},
            { type: 'language', title: 'Moving between speakers', tabs: false, groups: [
              { label: 'Starting and handing over', phrases: ['Our group looked at… because…', 'We chose to focus on… and…', 'Now… will talk about our next two questions.', 'Thanks, … . So, our next question was…'] },
              { label: 'Concluding', phrases: ['Overall, we think that… is (very / moderately / not very) effective in improving…', 'To sum up, the evidence suggests that…', 'Thank you. Are there any questions?'] }
            ]},
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
      goal: 'Turn your discussion ideas into a short academic paragraph with three sources.',
      blocks: [
        { type: 'sources', ids: ['clapp', 'oxfam', 'mockshell'] },
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'How can empowering women improve food security? Write one paragraph (about 150 words) that cites at least two of the three texts.', placeholder: 'Empowering women can improve food security in several ways. Clapp et al. (2022) argue that…', rows: 8 }
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
    ['instrument', 'A tool for measuring or assessing something — here, a list of questions.', 'Our instrument has four questions.'],
    ['stakeholder', 'A person or group affected by a decision or solution.', 'Consider the impact on different stakeholders.'],
    ['unintended consequence', 'A result that nobody planned or wanted.', 'Retailers losing income was an unintended consequence.'],
    ['clarification question', 'A question that asks a speaker to explain something more clearly.', 'Can you specify what kind of decisions…?']
  ]
};
