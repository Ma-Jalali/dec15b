/* DEC10 · Week 5 · Day 1 — Same world, mixed cultures.
   Built from the Week 5 Teacher's Book (no revised map for Week 5: TB order and minutes).
   W5 D1. 1A Reading to write (210 min) · 2A Interactive Discussion individual questions (30 min) · 3A Listening Assessment preparation homework.
   Reading: Hassi & Storti (2012), source id "threeh" in sources.js — never changed here (passages below are exact copies).
   Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: 'd10w5d1',
  week: 5,
  day: 1,
  title: 'Same world, mixed cultures',
  duration: 'About 4 hours + homework',
  question: 'Is globalisation making the world’s cultures all the same — or is it mixing them into something new?',
  questionKind: 'Focus question',
  questionLabel: 'This week’s topic · cultural globalisation · you will come back to your first ideas at the end of the week',
  journey: 'Share what you already think about cultural globalisation, learn the key words, read and take notes on the “three H scenarios”, summarise the text, find the writers’ voice and stance, show your own stance — then play a panel discussion in Beijing and practise Interactive Discussion individual questions.',
  image: 'dec10/assets/week5/hero-d10w5d1.svg',
  imageAlt: 'Illustration: a large globe in the middle of a busy world street. On one side, identical shop fronts and burger signs repeat in grey — homogenization. On the other side, colourful lanterns, a fusion food truck, a hanfu jacket with sneakers and music notes mix together — hybridization. Paper planes, film strips and wi-fi waves fly between the two sides.',
  finish: { title: 'Day 2', text: 'More practice for the Listening and Reading to Write assessment — and keep your first ideas about cultural globalisation: you will revisit them at the end of the week.' },
  goalShort: 'your Listening and Reading to Write assessment and the Interactive Discussion',
  sections: [
    /* ═══════════════════════════════ 1A READING TO WRITE ═══════════════════════════════ */
    {
      id: 'reading',
      number: '01',
      code: '1A',
      minutes: 210,
      tone: 'plum',
      art: 'dec10/assets/week5/s-d1-reading.svg',
      title: 'Reading to write',
      subtitle: 'Globalization and culture: the three H scenarios',
      outcome: 'You take detailed notes on ideas, opinions and evidence from a text, use vocabulary to predict ideas, identify different voices in a text, and show your own stance through your language choices.',
      activities: [
        /* ───────── a1 · Preliminary guided discussion (15) ───────── */
        {
          id: 'a1',
          short: 'What do I think?',
          minutes: 15,
          grouping: 'Alone → Groups of 3–4',
          art: 'dec10/assets/week5/v/v-d10w5d1-a1.svg',
          title: 'Preliminary Guided Discussion',
          goal: 'Write down what you know and feel about cultural globalisation now — you will look at it again at the end of the week.',
          blocks: [
            {
              type: 'key',
              title: 'This week’s topic: Cultural Globalisation',
              points: [
                'Today you write down your <b>first ideas</b>. At the end of the week, in the Guided Discussion lesson “<b>Have your views changed?</b>”, you read them again.',
                'Good critical thinkers are <b>flexible</b>: they can change their views after they read and hear new ideas and information.'
              ]
            },
            { type: 'do', n: 1, who: 'group', text: 'Sit in groups of <b>3 or 4</b>.' },
            { type: 'do', n: 2, who: 'alone', text: '<b>Prepare (5 minutes).</b> Think about the three questions on your own. Write your ideas below — short notes are fine. <b>Keep them!</b>' },
            {
              type: 'fields',
              id: 'a1-f',
              title: 'My first ideas (I will revisit these at the end of the week)',
              fields: [
                { id: 'a1-q1', label: '1. What do you understand by cultural globalisation?', rows: 2, placeholder: 'I think cultural globalisation means …' },
                { id: 'a1-q2', label: '2. Have you observed this phenomenon in Australia?', rows: 2, placeholder: 'Yes — for example, … / Not really, because …' },
                { id: 'a1-q3', label: '3. Have you observed this phenomenon in your country? What is your attitude towards it?', rows: 3, placeholder: 'In my country, … I feel … about it because …' }
              ]
            },
            {
              type: 'scale',
              id: 'a1-scale',
              title: 'Where do you stand today?',
              statement: 'Cultural globalisation is mostly good for my culture.',
              ends: ['Strongly disagree', 'Strongly agree']
            },
            { type: 'do', n: 3, who: 'group', text: '<b>Discuss (10 minutes).</b> Talk about the 3 questions with your group. Everyone speaks for each question. Ask one follow-up question each time.' },
            {
              type: 'language',
              title: 'Useful language: sharing first ideas',
              groups: [
                { label: 'Give a first idea', phrases: ['As far as I understand, cultural globalisation is …', 'To me, it means that …', 'I’m not completely sure, but I think …'] },
                { label: 'Give an example', phrases: ['A good example of this in Sydney is …', 'In my home town, you can see it in …', 'I’ve noticed that more and more people …'] },
                { label: 'Your attitude', phrases: ['On the whole, I feel positive about it because …', 'I have mixed feelings: on the one hand …, on the other hand …', 'What worries me a little is …'] },
                { label: 'Keep the talk going', phrases: ['What about in your country?', 'Have you noticed the same thing?', 'Could you give an example of that?', 'That’s interesting — why do you think that is?'] }
              ]
            },
            { type: 'tip', text: '<b>Save your notes.</b> They are in <b>My notebook</b>. You will need them for the end-of-week discussion “Have your views changed?”.' }
          ]
        },
        /* ───────── a2 · Warmer (20) ───────── */
        {
          id: 'a2',
          short: 'Culture then & now',
          minutes: 20,
          grouping: 'Groups → Class',
          art: 'dec10/assets/week5/v/v-d10w5d1-a2.svg',
          title: 'Warmer: Discussion',
          goal: 'Talk about how culture changes, define culture, and see how cultural artifacts travel around the world.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Spin the reels. Talk for <b>one minute</b> about your grandparents’ time and today. Then pass the turn.' },
            {
              type: 'spinner',
              id: 'a2-spin',
              title: 'Then and now',
              text: 'Question 1: How has your culture changed since your grandparents were children?',
              reels: [
                { label: 'Think about', items: ['what people eat', 'the clothes they wear', 'the media they consume', 'the way they communicate', 'music and free time', 'weddings and festivals'] },
                { label: 'Your task', items: ['Compare then and now', 'Give one real example from your family', 'Say if the change is good or bad', 'Say what has NOT changed'] }
              ]
            },
            {
              type: 'language',
              title: 'Talking about change over time',
              groups: [
                { label: 'Past', phrases: ['When my grandparents were young, people used to …', 'Back then, most people would …', 'In those days, …'] },
                { label: 'Now', phrases: ['Nowadays, people tend to …', 'These days, it is common to …', 'More and more young people …'] },
                { label: 'Compare', phrases: ['Compared with fifty years ago, …', '… has changed a lot, whereas … has stayed the same.', 'The biggest difference is …'] }
              ]
            },
            {
              type: 'talk',
              title: 'Questions 2 and 3',
              prompts: ['How do you define <b>culture</b>?', 'What’s your favourite definition of culture? (If you have time, look up two definitions online and choose the best one.)']
            },
            {
              type: 'model',
              title: 'A definition of culture from the original reading',
              text: '“On the one hand, culture is an integrated set of values, norms and behaviours acquired by human beings as members of a society. On the other hand, from a sociological stance, culture refers to artistic and symbolic creations, heritage and cultural products, such as music, art and cinema (Hassi & Storti, 2012).”',
              note: 'Notice the two sides: culture is what we <b>believe and do</b> — and also what we <b>make</b>.'
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d1-artifacts.svg',
              size: 'wide',
              alt: 'Cultural artifacts in two groups. Tangible (you can touch them): art, books, clothing, movies, buildings. Intangible (you cannot touch them): language, music, dance, rituals and traditions.',
              caption: '<b>Cultural artifacts</b> are objects, items or expressions made by people that tell us about their culture.'
            },
            {
              type: 'sort',
              id: 'a2-sort',
              title: 'Tangible or intangible?',
              hint: 'Tangible = you can touch it. Intangible = you cannot touch it. Drag or tap each card.',
              buckets: [{ label: 'Tangible artifacts', letter: 'T' }, { label: 'Intangible artifacts', letter: 'I' }],
              items: [
                { text: 'a painting', answer: 0 },
                { text: 'a book', answer: 0 },
                { text: 'a traditional dress', answer: 0 },
                { text: 'a temple or a famous building', answer: 0 },
                { text: 'a movie', answer: 0, why: 'A film is a product you can hold (a disc, a file on a device) — the TB lists movies as tangible.' },
                { text: 'a language', answer: 1 },
                { text: 'a folk song', answer: 1, why: 'Music is listed as intangible: it lives in people’s performance and memory.' },
                { text: 'a wedding ritual', answer: 1 },
                { text: 'a dance', answer: 1 },
                { text: 'the tradition of New Year visits', answer: 1 }
              ]
            },
            { type: 'do', n: 2, who: 'class', text: 'Your teacher runs a short <b>Kahoot</b> quiz on cultural globalisation. Play it as a class, then discuss questions 4 and 5.' },
            {
              type: 'talk',
              title: 'After the quiz',
              prompts: [
                '4. What does this quiz reveal about the <b>flow of cultural artifacts and ideas</b> around the world and the impact of globalisation?',
                '5. Do you think globalisation has had a <b>positive or negative</b> effect on culture?'
              ]
            },
            {
              type: 'language',
              groups: [
                { label: 'Positive or negative?', phrases: ['I’d say the effect has been mainly positive, because …', 'In some ways it has been negative — for example, …', 'It depends on …', 'It’s a double-edged sword: …'] }
              ]
            }
          ]
        },
        /* ───────── a3 · Vocabulary 1 (10) ───────── */
        {
          id: 'a3',
          short: 'McDonaldisation',
          minutes: 10,
          grouping: 'Pair',
          art: 'dec10/assets/week5/v/v-d10w5d1-a3.svg',
          title: 'Vocabulary: cultural globalisation and McDonaldisation',
          goal: 'Understand the definition of cultural globalisation, its causes, and the idea of McDonaldisation.',
          blocks: [
            {
              type: 'key',
              title: 'Cultural globalisation',
              points: ['The process through which the <b>values, ideas, and experiences</b> of a specific culture are <b>transmitted and disseminated</b> across the world.']
            },
            { type: 'do', n: 1, who: 'pair', text: '<b>Question 1.</b> What has led to the globalisation of culture? With your partner, list as many causes as you can in <b>2 minutes</b>. Then open the check below.' },
            { type: 'fields', id: 'a3-f', fields: [{ id: 'a3-causes', label: 'Our list of causes', rows: 3, placeholder: 'the internet, …' }] },
            {
              type: 'toggle',
              title: 'Check your ideas',
              hint: 'Open after you have made your list.',
              blocks: [
                {
                  type: 'figure',
                  src: 'dec10/assets/week5/d1-drivers.svg',
                  size: 'wide',
                  alt: 'Five drivers point into a globe labelled “cultural globalisation”: advancements in technology (internet, social media); increased travel and migration; the spread of pop culture and global media networks (Netflix, Hollywood and Bollywood movies, K-pop); educational exchanges; economic globalisation (McDonald’s, Starbucks, Apple).',
                  caption: 'Five drivers of cultural globalisation.'
                }
              ]
            },
            { type: 'do', n: 2, who: 'pair', text: '<b>Question 2.</b> What do you think the term <b>McDonaldisation</b> means? Guess with your partner. Then turn the four cards.' },
            {
              type: 'flip',
              title: 'McDonaldisation: four principles (George Ritzer, 1993)',
              hint: 'Guess what each principle means at McDonald’s, then turn the card.',
              items: [
                { front: 'Efficiency', back: 'The best (fastest) way to do a task. Drive-thrus; customers clean up their own table — less time and effort.' },
                { front: 'Calculability', back: 'Focus on what you can count: portion size, cost, waiting time. Quantity over quality.' },
                { front: 'Predictability', back: 'The same product everywhere: a Big Mac in New York tastes the same as one in Tokyo.' },
                { front: 'Control', back: 'Machines and strict routines replace human choice: scripted words, step-by-step cooking.' }
              ]
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d1-mcdonald.svg',
              size: 'wide',
              alt: 'Diagram: four pillars hold up a roof labelled McDonaldization — Efficiency (a stopwatch), Calculability (a ruler and coins), Predictability (two identical burgers in New York and Tokyo), Control (a robot arm and a script). Underneath: it spreads to education, work, healthcare and travel; criticised for sameness, dehumanisation and quantity over quality.',
              caption: 'McDonaldisation is not only about fast food — it can be seen in education, work, healthcare and travel. Critics say it leads to <b>homogeneity</b>, <b>dehumanisation</b> and quantity over quality.'
            },
            {
              type: 'toggle',
              title: 'Watch: a short video about McDonaldisation (if there is time)',
              blocks: [
                { type: 'listening', source: 'Short explainer video (YouTube)', title: 'What is McDonaldization?', videoId: 'D_uffCCOes0', audio: '', start: 0, clip: 'the whole video', transcripts: [] }
              ]
            },
            {
              type: 'talk',
              title: 'Explain it to a classmate',
              prompts: ['Choose one principle. Give an example from <b>your</b> life that is not fast food (a university, a gym, an online shop …).', 'Is McDonaldisation good or bad for culture? Why?']
            }
          ]
        },
        /* ───────── a4 · Vocabulary 2 (15) ───────── */
        {
          id: 'a4',
          short: 'Key words',
          minutes: 15,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d1-a4.svg',
          title: 'Vocabulary: words from the text',
          goal: 'Guess eleven words from context, match them to their meanings, then use collocations to predict the reading.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: '<b>Guess the meaning</b> of each word in bold. Use the sentence to help you. Choose the best meaning.' },
            {
              type: 'quiz',
              id: 'a4-guess',
              title: 'Guess from context',
              items: [
                { q: '1. The drastic reduction in funding for the arts was criticized as an assault on cultural development.', options: ['an attack that causes harm', 'a big help to', 'a small change in'], answer: 'an attack that causes harm', why: '“Criticized” tells you it is something bad.' },
                { q: '2. Adding water to the paint led to its dilution, resulting in a much lighter colour than intended.', options: ['making something weaker by mixing', 'making something stronger', 'making a copy'], answer: 'making something weaker by mixing', why: 'Water + paint → a lighter (weaker) colour.' },
                { q: '3. Researchers are eager to replicate the study to see if they get the same results under different conditions.', options: ['to repeat or copy exactly', 'to criticise', 'to stop'], answer: 'to repeat or copy exactly', why: '“the same results” is the clue.' },
                { q: '4. Critics argue that allowing one corporation to maintain a monopoly in the telecommunications sector could lead to higher prices for consumers.', options: ['full control of a market by one company', 'a fair competition', 'a government tax'], answer: 'full control of a market by one company', why: '“one corporation” + “higher prices”.' },
                { q: '5. Acculturation is often evident when immigrants adopt the customs and language of their new country.', options: ['taking on the customs of another group', 'losing your memory', 'travelling for a holiday'], answer: 'taking on the customs of another group', why: '“adopt the customs and language” is the clue.' },
                { q: '6. The United States has often been criticized for exercising its economic hegemony to influence global policies.', options: ['dominance or control over others', 'friendship with others', 'a weak position'], answer: 'dominance or control over others', why: 'It uses its power “to influence global policies”.' },
                { q: '7. The debate over gun control policies remains highly contentious among politicians.', options: ['likely to cause arguments', 'boring and simple', 'agreed by everyone'], answer: 'likely to cause arguments', why: '“debate” + “among politicians”.' },
                { q: '8. The new restaurant specializes in a fusion of Mexican and Thai cuisines, creating exciting new dishes.', options: ['a joining of different things into one', 'a separation', 'a copy of one thing'], answer: 'a joining of different things into one', why: 'Mexican + Thai → new dishes.' },
                { q: '9. The construction project is subject to approval by the city council before any work can commence.', options: ['depending on a condition', 'against', 'finished by'], answer: 'depending on a condition', why: 'No work “before” approval: it depends on it.' },
                { q: '10. The city is known for its pluralistic society, where people of various ethnicities, religions, and cultural backgrounds live and work together harmoniously.', options: ['including many different groups', 'with only one group', 'very crowded'], answer: 'including many different groups', why: '“various ethnicities, religions, and cultural backgrounds”.' },
                { q: '11. The new educational policy was derived out of extensive consultations with teachers, students, and parents.', options: ['came from a source', 'was cancelled after', 'was hidden from'], answer: 'came from a source', why: 'The policy came from the consultations.' }
              ]
            },
            { type: 'do', n: 2, who: 'alone', text: '<b>Now match</b> the words to their definitions (the same task is on Canvas).' },
            {
              type: 'match',
              id: 'a4-match',
              title: 'Match the words to their definitions',
              hint: 'Tap a word, then its definition.',
              left: ['an assault on', 'to dilute', 'to replicate', 'a monopoly', 'acculturation', 'hegemony', 'contentious', 'fusion', 'subject to', 'pluralistic', 'derived out of'],
              right: [
                'an attack on someone or something with the intent to cause harm or damage',
                'to lessen the strength of something by mixing it with something else',
                'to make an exact copy',
                'when one company or group controls all of a certain type of business or product',
                'the process of adopting the cultural traits of another group',
                'dominance, control or influence over others',
                'controversial and likely to cause arguments',
                'the process of joining two or more different things into one',
                'likely to be affected by something or dependent on certain conditions',
                'including people from many different backgrounds and beliefs',
                'originating from a specific source or reason'
              ]
            },
            {
              type: 'flip',
              title: 'Say it right: word stress',
              hint: 'Say the word aloud, then turn the card. The BIG part is stressed.',
              items: [
                { front: 'acculturation', back: 'ac·cul·tu·RA·tion' },
                { front: 'hegemony', back: 'he·GE·mo·ny (or HE·ge·mo·ny)' },
                { front: 'monopoly', back: 'mo·NO·po·ly' },
                { front: 'contentious', back: 'con·TEN·tious' },
                { front: 'pluralistic', back: 'plu·ra·LIS·tic' },
                { front: 'replicate', back: 'REP·li·cate' },
                { front: 'homogenization', back: 'ho·mo·ge·ni·ZA·tion' },
                { front: 'hybridization', back: 'hy·bri·di·ZA·tion' }
              ]
            },
            { type: 'do', n: 3, who: 'pair', text: '<b>Collocations.</b> Look at the mind map. Which words go with <b>cultural</b>? Check any word you are unsure of with your partner.' },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d1-mindmap.svg',
              size: 'wide',
              alt: 'Mind map with CULTURAL in the centre and eleven collocations around it: cultural values, cultural artifacts, cultural diversity, cultural traditions, cultural differences, cultural convergence, cultural disaster, cultural hybridization, cultural integration, cultural peculiarities, cultural practices.',
              caption: 'Eleven collocations with <b>cultural</b>.'
            },
            {
              type: 'language',
              title: 'Use the collocations in academic sentences',
              groups: [
                { label: 'Verbs + noun', phrases: ['preserve cultural traditions', 'protect cultural diversity', 'respect cultural differences', 'share cultural values'] },
                { label: 'Describe change', phrases: ['lead to cultural convergence', 'result in cultural hybridization', 'threaten cultural practices', 'encourage cultural integration'] }
              ]
            },
            {
              type: 'talk',
              title: 'Prediction',
              prompts: ['Looking at these collocations, <b>what do you think the reading is about</b>? Make two predictions with your partner.', 'Which two collocations do you think will be the most important in the text? Why?']
            },
            { type: 'fields', id: 'a4-f', fields: [{ id: 'a4-predict', label: 'Our predictions', rows: 2, placeholder: 'We think the text will discuss … It may argue that …' }] }
          ]
        },
        /* ───────── a5 · Annotated reading (10) ───────── */
        {
          id: 'a5',
          short: 'Annotate',
          minutes: 10,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d1-a5.svg',
          title: 'Annotated reading',
          goal: 'Read paragraph A, check your predictions, and practise your annotating skills from Week 2.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d1-annotate.svg',
              size: 'wide',
              alt: 'An annotation toolkit: a highlighter for relevant information, a circle and an underline for key words, an arrow with a comment in the margin to add your understanding, a question mark for parts you do not understand, and three exclamation marks for important points.',
              caption: 'Your annotation toolkit from Week 2.'
            },
            { type: 'do', n: 1, who: 'alone', text: 'Read <b>paragraph A</b> (5 minutes). Were your predictions correct? Highlight, underline, and add symbols: <b>?</b> for parts you don’t understand, <b>!!!</b> for important parts.' },
            { type: 'sources', ids: ['threeh'] },
            {
              type: 'passage',
              id: 'a5-pa',
              title: 'Paragraph A · Hassi and Storti (2012)',
              text: 'A. Globalization is a multidimensional phenomenon that consists of economic, cultural, ideological and political components (Prasad & Prasad, 2006). However, the impacts of globalization on societies and their cultures are rarely discussed or debated. Indeed, any discussion or debate in this area is relatively recent (Acosta & Gonzalez, 2010). Moreover, the interaction between globalization and culture is an under-researched area (Prasad & Prasad, 2007). In a world where borders are becoming less relevant, maintaining cultural diversity is a controversial topic. This means opinions on the topic are contentious and conflicting. For instance, Cowen (2002) argues that, on the one hand, globalization causes changes and potential losses for local and traditional cultures. These include those with their own cultural differences. This may be damaging and destructive for those cultures. On the other hand, this may also lead to new opportunities. Therefore, it is argued that globalization can bring about diverse trends. These are cultural differentiation, cultural convergence and cultural hybridization (Pieterse, 1996). The latter two will be discussed in this article.'
            },
            { type: 'do', n: 2, who: 'pair', text: '<b>Share your annotations</b> with your partner. Say them aloud: “I underlined … because …”, “I put a question mark here because …”.' },
            {
              type: 'language',
              title: 'Talking about your annotations',
              groups: [
                { label: 'Explain a mark', phrases: ['I highlighted this because it’s the main idea.', 'I circled … — it’s a key word.', 'My arrow says that …'] },
                { label: 'Ask for help', phrases: ['I put a question mark next to … — what do you think it means?', 'Did you understand the part about …?'] },
                { label: 'Sum up', phrases: ['So, basically, this paragraph is about …', 'The writers are going to discuss two trends: …'] }
              ]
            },
            {
              type: 'quiz',
              id: 'a5-q',
              title: 'Quick check: paragraph A',
              items: [
                { q: 'Which two trends will the article discuss?', options: ['cultural convergence and cultural hybridization', 'cultural differentiation and cultural convergence', 'economic and political globalization'], answer: 'cultural convergence and cultural hybridization', why: '“The latter two will be discussed in this article.” The latter two = the last two in the list.' },
                { q: 'How much research is there on globalization and culture?', options: ['not much — it is an under-researched area', 'a lot — it is a very old debate'], answer: 'not much — it is an under-researched area', why: '“… rarely discussed or debated … relatively recent … under-researched area”.' }
              ]
            }
          ]
        },
        /* ───────── a6 · Reading for detail: note taking (30) ───────── */
        {
          id: 'a6',
          short: 'Notes',
          minutes: 30,
          grouping: 'Pair',
          art: 'dec10/assets/week5/v/v-d10w5d1-a6.svg',
          title: 'Reading for detail: note taking',
          goal: 'Read paragraphs B–G and take detailed notes on the two scenarios.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d1-scenarios.svg',
              size: 'wide',
              alt: 'The three H scenarios. Heterogenization (cultural differentiation): strong walls keep cultures separate — not discussed in this text. Homogenization (cultural convergence): weak barriers, strong global flows, many cultures become one similar culture. Hybridization (cultural mixing): barriers let some global flows in, and global and local mix into a new blended culture.',
              caption: 'Pieterse (1996): three possible trends. The text discusses the last two.'
            },
            {
              type: 'steps',
              items: [
                { who: 'pair', text: 'Read paragraphs <b>B–G</b> with your partner. The text has two headings: <b>Homogenization scenario</b> (B–D) and <b>Hybridization scenario</b> (E–F). Paragraph G compares both.' },
                { who: 'pair', text: 'Complete the table. Use <b>notes</b>, not full sentences: key words, symbols (→ ↑ ↓ =) and the <b>citations</b> (e.g. Jaja, 2010).' },
                { who: 'pair', text: 'Explain one row to your partner without looking at the text.' }
              ]
            },
            { type: 'sources', ids: ['threeh'] },
            {
              type: 'table',
              id: 'a6-tab',
              title: 'My notes: the two scenarios',
              columns: ['', 'Homogenization scenario', 'Hybridization scenario'],
              fixed: [
                'Definition / key elements<br><small>Given: homogenization = cultural convergence · hybridization = cultural hybridization</small>',
                'Impact of globalization / global forces'
              ]
            },
            { type: 'do', n: 1, who: 'pair', text: '<b>Check your notes.</b> Which scenario does each idea belong to? Sort the cards.' },
            {
              type: 'sort',
              id: 'a6-sort',
              title: 'Homogenization or hybridization?',
              buckets: [{ label: 'Homogenization', letter: 'Ho', text: 'cultural convergence' }, { label: 'Hybridization', letter: 'Hy', text: 'cultural mixing' }],
              items: [
                { text: 'Barriers to global influences are weak.', answer: 0 },
                { text: 'Barriers protect local cultures but do not block all external flows.', answer: 1 },
                { text: 'A more uniform, standardized world culture', answer: 0 },
                { text: 'New cultures that are neither fully global nor fully local', answer: 1 },
                { text: 'Americanization and McDonaldization', answer: 0 },
                { text: 'Glocalization', answer: 1 },
                { text: 'An assault on local cultures (Berger, 2002)', answer: 0 },
                { text: 'Communities become innovators that adapt (Robertson, 2001)', answer: 1 },
                { text: '85% of web pages originate from the United States (Jaja, 2010)', answer: 0 },
                { text: 'Translocal fusion', answer: 1 }
              ]
            },
            {
              type: 'language',
              title: 'Talk about your notes',
              groups: [
                { label: 'Report the text', phrases: ['According to the homogenization view, …', 'In the hybridization scenario, …', 'Jaja (2010) stresses that …', 'Ritzer (2010) explains that …'] },
                { label: 'Compare the two', phrases: ['Whereas homogenization …, hybridization …', 'Both scenarios focus on …', 'Unlike homogenization, hybridization …'] }
              ]
            },
            { type: 'tip', text: 'Keep these notes! You will use them to write your summary, to answer the questions, and in the Interactive Discussion practice.' }
          ],
          answers: {
            title: 'Suggested notes',
            items: [
              ['Homogenization · definition / key elements', 'Cultural convergence · increased interconnection and weak barriers are making cultures more similar, leading to a more uniform or standardized world culture (Ritzer, 2010).'],
              ['Homogenization · impact of globalization', 'Local cultures can be strongly influenced by more powerful cultures, e.g. McDonaldization or Americanization (due to the American domination of the Internet & packaged software market and the media (Jaja, 2010)) · an increasing number of people around the world are consuming similar content and products (Prasad and Prasad, 2006) → a new “global culture” · globalisation is reducing the sense of physical distance that usually strengthens a feeling of national distinctiveness · globalisation contributes to the destruction of cultural traditions and practices (Jaja, 2010) because it weakens the distinctiveness of a nation’s culture.'],
              ['Hybridization · definition / key elements', 'Cultural hybridization · interaction of external and internal flows to form a new distinctive culture, which blends elements from both (Ritzer, 2010) · while barriers to external flows cannot be stopped, they are strong enough to shield local cultures from being completely dominated by external influences.'],
              ['Hybridization · impact of globalization', 'Glocalisation — world becoming increasingly diverse — communities are evolving into creative forces, capable of adapting and innovating within their newly-blended global-local context (Robertson, 2001) · only the surface aspects of the culture are truly blended (e.g. food, fashion, entertainment) rather than the more deeply rooted values and beliefs of a culture.']
            ]
          }
        },
        /* ───────── a7 · Summarise / paraphrase (20) ───────── */
        {
          id: 'a7',
          short: 'Summary',
          minutes: 20,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d1-a7.svg',
          title: 'Summarise / paraphrase',
          goal: 'Build a one-paragraph summary of the whole text.',
          blocks: [
            {
              type: 'key',
              title: 'Three options — your teacher chooses one for you',
              points: [
                '<b>Option 1</b> · fill the gaps (with help).',
                '<b>Option 2</b> · put the summary in order.',
                '<b>Option 3</b> · write the summary yourself with sentence stems (the biggest challenge).',
                'Finished early? Try the next option.'
              ]
            },
            {
              type: 'cloze',
              id: 'a7-cl',
              title: 'Option 1 · Fill in the spaces with ONE word from the text or your notes',
              options: [
                ['diversity', 'identity', 'history', 'unity'],
                ['connection', 'distance', 'competition', 'difference'],
                ['opportunities', 'traditions', 'barriers', 'problems'],
                ['scenarios', 'countries', 'languages', 'products'],
                ['homogenization', 'hybridization', 'differentiation'],
                ['Western', 'Asian', 'local', 'traditional'],
                ['dissemination', 'rejection', 'protection', 'reduction'],
                ['uniformity', 'diversity', 'creativity', 'fusion'],
                ['identities', 'economies', 'borders', 'markets'],
                ['hybridization', 'homogenization', 'Americanization'],
                ['dynamic', 'static', 'weak', 'uniform'],
                ['blend', 'block', 'destroy', 'replicate'],
                ['shield', 'separate', 'remove', 'copy'],
                ['innovative', 'identical', 'destructive', 'predictable'],
                ['peripheral', 'deep', 'core', 'hidden'],
                ['unaffected', 'destroyed', 'diluted', 'replaced']
              ],
              text: 'Concerns about the effects of globalization on cultural {{1}} persist due to the scarcity of research examining the {{2}} between them. While potential negative effects on local traditions have been acknowledged, there is the possibility of new {{3}} emerging. This text discusses two primary {{4}} that are considered when examining how globalization is shaping culture. The {{5}} perspective suggests a trend towards a global culture, largely influenced by {{6}} values and the global {{7}} of American consumer products and services, potentially leading to cultural {{8}} and the destruction of local {{9}}. In contrast, the {{10}} view argues that cultures are {{11}}, creating unique cultural hybrids that {{12}} global and local elements, despite barriers that partially {{13}} local cultures from overwhelming external influences. This perspective sees globalization not as a threat but as a contributor to cultural diversity and dynamism, allowing local and global interactions to produce {{14}} cultural syntheses. In both perspectives, the authors argue that while globalization can influence the {{15}} aspects of a culture, the deeply rooted values and distinctive features remain {{16}}.',
              answers: ['diversity', 'connection', 'opportunities', 'scenarios', 'homogenization', 'Western', 'dissemination', 'uniformity', 'identities', 'hybridization', 'dynamic', 'blend', 'shield', 'innovative', 'peripheral', 'unaffected'],
              why: [
                'diversity — paragraph A: “maintaining cultural diversity is a controversial topic”.',
                'connection — also possible: interaction / relationship (paragraph A: “the interaction between globalization and culture is an under-researched area”).',
                'opportunities — paragraph A: “this may also lead to new opportunities”.',
                'scenarios — also possible: views / perspectives (the three H scenarios).',
                'homogenization — the first scenario (paragraphs B–D).',
                'Western — paragraph B: “adopting the Western Euro-American lifestyle”.',
                'dissemination — also possible: diffusion / spread (paragraph D: “the global spread of America’s influential dominance and culture”).',
                'uniformity — a “more standardized” world culture (paragraph B).',
                'identities — paragraph C: “weakening identities”.',
                'hybridization — “In contrast” introduces the second scenario (paragraphs E–F).',
                'dynamic — paragraph G: “cultures are dynamic, not static”.',
                'blend — paragraph E: “mixing or blending cultures”.',
                'shield — also possible: protect (paragraph E: “powerful enough to protect local cultures”).',
                'innovative — paragraph F: communities become “innovators”.',
                'peripheral — paragraph G: the “superficial elements” of cultures.',
                'unaffected — paragraph G: the deeper aspects “remain tied to their original context and culture”.'
              ]
            },
            {
              type: 'order',
              id: 'a7-order',
              title: 'Option 2 · Put the summary in order',
              items: [
                'Concerns about the effects of globalization on cultural diversity persist due to the scarcity of research examining the connection between them.',
                'While potential negative effects on local traditions have been acknowledged, there is the possibility of new opportunities emerging.',
                'This text discusses two primary scenarios that are considered when examining how globalization is shaping culture.',
                'The homogenization perspective suggests a trend towards a global culture, largely influenced by Western values and the global dissemination of American consumer products and services, potentially leading to cultural uniformity and the destruction of local identities.',
                'In contrast, the hybridization view argues that cultures are dynamic, creating unique cultural hybrids that blend global and local elements, despite barriers that partially shield local cultures from overwhelming external influences.',
                'This perspective sees globalization not as a threat but as a contributor to cultural diversity and dynamism, allowing local and global interactions to produce innovative cultural syntheses.',
                'In both perspectives, the authors argue that while globalization can influence the peripheral aspects of a culture, the deeply rooted values and distinctive features remain unaffected.'
              ],
              ends: ['First', 'Last'],
              why: 'Background (why the topic matters) → what the text does → scenario 1 → “In contrast” scenario 2 → “This perspective” (still scenario 2) → “In both perspectives” (the writers’ conclusion).'
            },
            {
              type: 'detect',
              id: 'a7-dt',
              label: 'Summary studio',
              title: 'Option 3 · Write a one-paragraph summary with sentence stems',
              hint: 'Use the stems in order. The lights turn on when you use each part of a good summary.',
              checks: [
                { label: 'Background', color: '#8a4f9e', any: ['concerns about', 'due to'] },
                { label: 'What the text does', color: '#3a58a0', any: ['this text discusses', 'the text discusses', 'this article'] },
                { label: 'Homogenization', color: '#c4562f', any: ['homogeni'] },
                { label: 'Contrast signal', color: '#2f7d6b', any: ['in contrast', 'whereas', 'however', 'on the other hand'] },
                { label: 'Hybridization', color: '#b07d12', any: ['hybridi'] },
                { label: 'Writers’ conclusion', color: '#2d7a9a', any: ['in both perspectives', 'the authors argue', 'the writers argue', 'hassi'] }
              ],
              items: [
                {
                  task: 'Concerns about the effects of globalization on cultural diversity persist due to … · While potential negative effects on local traditions …, there is the possibility of … · This text discusses … · The homogenization perspective suggests … · In contrast, the hybridization view argues that … · This perspective sees globalization … · In both perspectives, the authors argue that …',
                  rows: 9,
                  placeholder: 'Concerns about the effects of globalization on cultural diversity persist due to …',
                  model: 'Concerns about the effects of globalization on cultural diversity persist due to the scarcity of research examining the connection between them. While potential negative effects on local traditions have been acknowledged, there is the possibility of new opportunities emerging. This text discusses two primary scenarios that are considered when examining how globalization is shaping culture. The homogenization perspective suggests a trend towards a global culture, largely influenced by Western values and the global dissemination of American consumer products and services, potentially leading to cultural uniformity and the destruction of local identities. In contrast, the hybridization view argues that cultures are dynamic, creating unique cultural hybrids that blend global and local elements, despite barriers that partially shield local cultures from overwhelming external influences. This perspective sees globalization not as a threat but as a contributor to cultural diversity and dynamism, allowing local and global interactions to produce innovative cultural syntheses. In both perspectives, the authors argue that while globalization can influence the peripheral aspects of a culture, the deeply rooted values and distinctive features remain unaffected.'
                }
              ]
            },
            {
              type: 'language',
              title: 'More summary language for university',
              groups: [
                { label: 'Start a summary', phrases: ['Hassi and Storti (2012) examine …', 'In their chapter, Hassi and Storti (2012) explore …', 'The text focuses on …'] },
                { label: 'Move between ideas', phrases: ['The first scenario, …, suggests that …', 'By contrast, the second scenario …', 'Similarly, …'] },
                { label: 'End a summary', phrases: ['The writers conclude that …', 'Overall, the authors argue that …', 'In short, …'] }
              ]
            },
            { type: 'do', n: 1, who: 'pair', text: '<b>Retell.</b> Close the page. Tell your partner the summary in <b>one minute</b> in your own words. Your partner counts how many of the 7 ideas you included.' }
          ]
        },
        /* ───────── a8 · Building understanding (20) ───────── */
        {
          id: 'a8',
          short: 'Test practice',
          minutes: 20,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d1-a8.svg',
          title: 'Building Understanding',
          goal: 'Answer six test-style questions about the whole text — and prove each answer.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Answer the six questions on your own (<b>10 minutes</b>). Bet more coins when you are sure.' },
            { type: 'sources', ids: ['threeh'] },
            {
              type: 'bet',
              id: 'a8-bet',
              title: 'Questions 1–6 · Choose the best option',
              coins: 12,
              items: [
                {
                  q: '1. The purpose of this text is to',
                  options: ['A · compare the economic and cultural impacts of globalization.', 'B · explore various perspectives on how globalization and cultures interact.', 'C · argue that homogenization is the dominant effect of globalization.', 'D · provide a historical overview of globalization trends since the 20th century.'],
                  answer: 'B · explore various perspectives on how globalization and cultures interact.',
                  why: 'Paragraph A introduces different trends, and the text discusses two of them (homogenization and hybridization).'
                },
                {
                  q: '2. Cultural globalization can lead to cultural homogenization in the process of',
                  options: ['A · the unique blending of multiple cultures.', 'B · the preservation of indigenous cultures.', 'C · the strengthening of national cultural identities.', 'D · the widespread adoption of a dominant culture.'],
                  answer: 'D · the widespread adoption of a dominant culture.',
                  why: 'Paragraph B: a more homogenous world adopting the Western Euro-American lifestyle; local cultures shaped by more powerful cultures. (A = hybridization.)'
                },
                {
                  q: '3. According to the writers, what has led to the Americanization of the world?',
                  options: ['A · The growth of American fast-food chains in developing countries.', 'B · The strategic military presence of the United States in multiple countries.', 'C · The global spread of American companies and their cultural products.', 'D · The increase in the number of American tourists traveling abroad.'],
                  answer: 'C · The global spread of American companies and their cultural products.',
                  why: 'Paragraph D: “… through drastic growth of mass communication and penetration of American companies in other countries.”'
                },
                {
                  q: '4. The concept of “glocalization” as discussed in the text refers to the',
                  options: ['A · local adaptation and reinterpretation of global influences.', 'B · rejection of global influences in favor of local traditions.', 'C · global spread of local cultural elements without modification.', 'D · homogenization of global and local economies without cultural mixing.'],
                  answer: 'A · local adaptation and reinterpretation of global influences.',
                  why: 'Paragraph F: individuals and communities “adapt and innovate within their newly glocalized environment”.'
                },
                {
                  q: '5. What do the writers conclude about the outcomes of both scenarios?',
                  options: ['A · The core part of a culture remains largely unchanged.', 'B · There is a loss of local cultural identities in favor of a global culture.', 'C · Marginal aspects of culture are protected and remain unique to each.', 'D · There is little preservation of cultural traditions and values.'],
                  answer: 'A · The core part of a culture remains largely unchanged.',
                  why: 'Paragraph G: “… the deeper aspects remain tied to their original context and culture.”'
                },
                {
                  q: '6. What are the authors’ views on globalisation’s impact on culture?',
                  options: ['A · It will create a world cultural model based on the American or European one.', 'B · It is unclear whether the effects are damaging, and further research is needed.', 'C · It negatively impacts culture by erasing features distinct to particular cultures.', 'D · It is a beneficial force in cultural evolution rather than a destructive one.'],
                  answer: 'D · It is a beneficial force in cultural evolution rather than a destructive one.',
                  why: 'Paragraph G: “cultural exchanges among nations are positive … not entirely destructive … bring about more possibilities and opportunities.”'
                }
              ]
            },
            { type: 'do', n: 2, who: 'pair', text: '<b>Prove it!</b> For each answer, show your partner the paragraph and the words that prove it. If you disagree, the person with the better proof wins.' },
            {
              type: 'language',
              title: 'Proving an answer',
              groups: [
                { label: 'Show the evidence', phrases: ['The answer is B, because in paragraph A it says …', 'The key words are “…”.', 'This matches the phrase “…” in paragraph G.'] },
                { label: 'Rule out an option', phrases: ['It can’t be C, because the text doesn’t say …', 'Option A describes hybridization, not homogenization.', 'D is too strong / too general.'] }
              ]
            },
            { type: 'tip', text: '<b>Test tip:</b> wrong options often use <b>real words from the text</b> but describe the wrong scenario, or they are too strong (“erasing”, “little preservation”). Check the whole idea, not single words.' }
          ]
        },
        /* ───────── a9 · Voice and stance 1 (12) ───────── */
        {
          id: 'a9',
          short: 'Whose voice?',
          minutes: 12,
          grouping: 'Pair',
          art: 'dec10/assets/week5/v/v-d10w5d1-a9.svg',
          title: 'Language focus: Voice and Stance · Activity 1 Presenting the stances of others',
          goal: 'Tell the difference between the writer’s voice and the voices of sources — and find the stance of each.',
          blocks: [
            {
              type: 'key',
              title: 'Voice and stance',
              points: [
                'Writing critically at university means having a <b>position</b> and relating it to the published positions of others.',
                '<b>Voice</b> = whose idea is it? The <b>writer’s</b> own, or a <b>source’s</b> (with a citation)?',
                '<b>Stance</b> = what is the attitude? For or against? How certain?',
                'Your own position is developed <b>in dialogue</b> with the positions of other writers.'
              ]
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d1-voices.svg',
              size: 'wide',
              alt: 'Two speech bubbles. A source voice bubble carries a citation tag “(Jaja, 2010)” and strong words such as “destructive force”. A writer’s voice bubble has no citation and a hedge, “presumably”. A question below asks: whose idea is it, and how sure is the writer?',
              caption: 'Look for the <b>citation</b> (source voice) and the <b>hedge</b> (writer’s caution).'
            },
            { type: 'do', n: 1, who: 'pair', text: 'Read this section of the text (from the original chapter). Then answer the questions.' },
            {
              type: 'passage',
              id: 'a9-pa',
              title: 'Sentences 1 and 2',
              text: '¹Thus, globalization, which is a replication of the American and/or Western cultural tradition (Beck, 2000; Berger, 2002), is considered a destructive force, a recipe for cultural disaster (Jaja, 2010) and an assault on local cultures which the latter are not able to withstand or resist (Berger, 2002). ²This is presumably due to the fact that globalization contributes to weakening identities and destroying local cultural traditions and practices, diluting the uniqueness of national cultures, and establishing a homogenized world culture.'
            },
            {
              type: 'quiz',
              id: 'a9-q',
              title: 'Voice and stance questions',
              items: [
                { q: '1. In sentence 1, is the writer using their own voice or are they using the voices of sources?', options: ['the writer’s own voice', 'the voices of sources'], answer: 'the voices of sources', why: 'Look at the citations: Beck, 2000; Berger, 2002; Jaja, 2010.' },
                { q: '2. What is the stance of Jaja (2010) and Berger (2002) towards globalisation?', options: ['Globalisation is destructive.', 'Globalisation is positive.', 'They have no clear stance.'], answer: 'Globalisation is destructive.' },
                { q: '4. Do we know the writer’s stance from sentence 1?', options: ['Yes', 'No'], answer: 'No', why: 'The writer only reports what the sources think.' },
                { q: '5. In sentence 2, is the writer using their own voice or are they using the voices of sources?', options: ['the writer’s own voice', 'the voices of sources'], answer: 'the writer’s own voice' },
                { q: '6. How do you know this is the writer’s voice?', options: ['There is no reference.', 'The writer uses “I”.', 'It is in the past tense.'], answer: 'There is no reference.' },
                { q: '7. Do we know the writer’s stance from sentence 2?', options: ['Yes', 'No'], answer: 'No', why: 'It is their voice, but they do not say whether they agree or disagree that globalisation is a destructive force.' },
                { q: '8. What is the writer doing here?', options: ['explaining the reasons why the sources have taken their stance', 'disagreeing with the sources', 'giving a new statistic'], answer: 'explaining the reasons why the sources have taken their stance' },
                { q: '9. How certain is the writer of these reasons?', options: ['not certain — they are speculating', 'completely certain'], answer: 'not certain — they are speculating', why: '“This is presumably due to …” — the writer hedges with a modal adverb to show caution: this may be an assumption.' }
              ]
            },
            {
              type: 'spot',
              id: 'a9-spot',
              label: 'Stance spotter',
              title: 'Question 3 · What language shows the stance of Jaja and Berger? And question 9 · which word shows the writer is not certain?',
              hint: 'Tap the stance words of the sources AND the writer’s hedge. Some highlighted words do a different job.',
              paras: [
                '¹Thus, [[globalization]], which is a replication of the American and/or Western cultural tradition (Beck, 2000; Berger, 2002), is considered [[*a destructive force]], a recipe for [[*cultural disaster]] (Jaja, 2010) and [[*an assault on]] local cultures which the latter are not able to withstand or resist (Berger, 2002).',
                '²This is [[*presumably]] due to the fact that globalization contributes to [[weakening identities]] and destroying local cultural traditions and practices, diluting the uniqueness of national cultures, and establishing [[a homogenized world culture]].'
              ]
            },
            {
              type: 'talk',
              title: 'Explain it to a classmate',
              prompts: ['How can you tell the difference between the writer’s voice and a source’s voice? Explain in 30 seconds.', 'Why do you think the writer chose “presumably” and not “definitely”?']
            }
          ],
          answers: {
            title: 'Suggested answers',
            items: [
              ['1', 'The voices of sources.'],
              ['2', 'Globalisation is destructive.'],
              ['3', 'Jaja (2010) — globalization is a <b>destructive force</b>, a recipe for cultural <b>disaster</b>. Berger (2002) — globalization is an <b>assault</b> on local cultures which is difficult to resist.'],
              ['4', 'No.'],
              ['5', 'Their own voice.'],
              ['6', 'There is no reference.'],
              ['7', 'No. While it is their voice, they are not stating whether they agree or disagree with the sources’ view that globalization is a destructive force.'],
              ['8', 'Explaining the reasons why the sources have taken their stance.'],
              ['9', 'Not certain. They are speculating: <i>This is presumably due to …</i> The writer has chosen to “hedge” their language by using a modal adverb to show caution / acknowledge this may be an assumption.']
            ]
          }
        },
        /* ───────── a10 · Voice and stance 2 (13) ───────── */
        {
          id: 'a10',
          short: 'Show a stance',
          minutes: 13,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d1-a10.svg',
          title: 'Language focus: Voice and Stance · Activity 2 Presenting your stance',
          goal: 'Use evaluative reporting verbs and other stance language — and find the writers’ stance in paragraph G.',
          blocks: [
            {
              type: 'model',
              title: 'An evaluative reporting verb in the original text',
              text: 'Cowen (2002) <b>contends</b> that while changes and potential losses imposed by globalization on local and traditional cultures, including those extending to cultural differences, may be damaging and destructive, they may also lead towards new prospective opportunities.',
              note: 'In Week 4 you learned reporting verbs. Some reporting verbs also show <b>your judgement</b> of the source. “Contends” = Cowen argues this strongly.'
            },
            {
              type: 'match',
              id: 'a10-match',
              title: 'Match the evaluative reporting verbs with their use',
              hint: 'Tap a verb, then its use.',
              left: ['contend', 'exaggerate', 'claim', 'assume', 'imply'],
              right: [
                'To indicate that someone argues or states something in a strong and firm way. It can also be used to indicate that you disagree with your source’s position.',
                'To indicate that the source places too much emphasis on something.',
                'To indicate that the statement made by someone is their belief, rather than a confirmed fact, suggesting further evidence is needed.',
                'To indicate that you think the source has treated something as factual, but you believe it is not.',
                'To indicate that the source says something indirectly.'
              ]
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d1-stance.svg',
              size: 'wide',
              alt: 'A stance dial from cautious to certain. Cautious end: may, might, could, perhaps, presumably, seem, suggest, often, sometimes. Middle: indicate, likely, argue. Certain end: certainly, definitely, there is no doubt. Below, a toolbox with evaluative adjectives (important, misguided), evaluative adverbs (accurately, surprisingly), evaluative nouns (failure, disaster) and signalling words (however, therefore).',
              caption: 'Turn the dial: <b>hedge</b> to be careful, <b>boost</b> to be strong.'
            },
            {
              type: 'tabs',
              title: 'Other words and phrases that show stance (with examples from the text)',
              tabs: [
                { label: 'Verbs', blocks: [{ type: 'model', title: 'Introductory verbs', rows: [['Examples', 'seem, indicate, suggest'], ['Why use them?', 'To draw conclusions from the evidence, but without making the conclusions too strong.'], ['From the text', 'This idea suggests that … · Cultural practices are suggestive of … · There seems to be … · This perspective is reflected in … · … is considered … · It is argued that …']] }] },
                { label: 'Adjectives & adverbs', blocks: [{ type: 'model', title: 'Evaluative adjectives and adverbs', rows: [['Evaluative adjectives', 'important, misguided, inaccurate · from the text: <i>conflicting and contentious</i> responses · this approach is <i>attractive</i> · it is <i>important</i> to note'], ['Evaluative adverbs (attitude markers)', 'accurately, appropriately, importantly, surprisingly, interestingly · from the text: <i>relatively</i> recent']] }] },
                { label: 'Nouns', blocks: [{ type: 'model', title: 'Evaluative nouns', rows: [['Examples', 'achievement, failure, improvement, problem'], ['From the text', 'a cultural <i>disaster</i> · an <i>assault</i> on']] }] },
                { label: 'Hedging', blocks: [{ type: 'model', title: 'Hedging: avoid overgeneralising', rows: [['Adverbs of frequency', 'often, sometimes · from the text: <i>rarely</i> addressed'], ['Modal verbs', 'may, might, could · from the text: <i>may</i> be damaging · <i>may</i> lead to'], ['Modal adverbs', 'perhaps, certainly, definitely, likely · from the text: <i>presumably</i> due to']] }] },
                { label: 'Signalling', blocks: [{ type: 'model', title: 'Signalling words', rows: [['Examples', 'Furthermore, Similarly, In addition'], ['From the text', 'However, … · Therefore, …']] }] }
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: 'Read <b>paragraph G</b>. Tap the words that show the writers’ <b>stance</b> (their attitude, judgement or certainty).' },
            {
              type: 'spot',
              id: 'a10-spot',
              label: 'Stance spotter',
              title: 'Paragraph G · find the writers’ stance',
              hint: 'Find 10 stance words or phrases. Some highlighted words are just content.',
              paras: [
                'G. [[*There is no doubt]] that cultures get influenced and shift through contact with other cultures. [[*However]], homogenization and hybridization focus on [[cultural products]], not the deeper values or beliefs of a given culture. [[*It is noteworthy to mention]] that the former do not impact the latter. In other words, the [[*superficial]] elements of cultures such as [[clothing, fashion, foods]], arts, music, movies and crafts get transferred but the deeper aspects remain tied to their original context and culture. Therefore, nations [[*regularly]] get involved in [[cultural integration processes]] but do not lose the unique and intricate aspects of a culture that set it apart from others. They interpret cultural elements in light of their own in a way that they become compatible with their culture. [[*In fact]], cultural exchanges among nations are [[*positive]], as shown by the impact of [[global trade]]. These exchanges are [[*not entirely destructive and negative]] for local cultures. In fact, they also bring about more possibilities and opportunities. In this regard, cultures are [[*dynamic, not static]]. They can incorporate foreign elements without being [[*necessarily]] subject to cultural domination.'
              ]
            },
            {
              type: 'talk',
              title: 'Compare with a partner',
              prompts: ['Which words show the writers are <b>certain</b>? Which words show they are <b>careful</b>?', 'Is the writers’ stance on globalisation positive or negative? Which words tell you?']
            }
          ],
          answers: {
            title: 'Suggested answers',
            items: [
              ['Match', 'contend → argues in a strong and firm way · exaggerate → too much emphasis · claim → their belief, not a confirmed fact · assume → treated as factual, but you believe it is not · imply → says something indirectly.'],
              ['Paragraph G (stance)', 'Certain / strong: <i>There is no doubt</i>, <i>In fact</i>, <i>dynamic, not static</i>. Evaluation: <i>It is noteworthy to mention</i>, <i>superficial</i>, <i>positive</i>, <i>not entirely destructive and negative</i>. Hedges / careful: <i>regularly</i>, <i>necessarily</i>. Signalling: <i>However</i>. (In the original, longer chapter, the writers also say “it is our contention that …” and “It seems that …”.)']
            ]
          }
        },
        /* ───────── a11 · Language in use (15) ───────── */
        {
          id: 'a11',
          short: 'My stance',
          minutes: 15,
          grouping: 'Pair → Alone',
          art: 'dec10/assets/week5/v/v-d10w5d1-a11.svg',
          title: 'Language in use',
          goal: 'Give your own view of paragraph G — first aloud, then in writing with stance language.',
          blocks: [
            {
              type: 'talk',
              title: 'Question 1 · Discuss with your partner',
              prompts: ['Do you agree with the points that Hassi and Storti have raised in <b>paragraph G</b>?', 'What is your view of these ideas? Give an example from your own culture.']
            },
            {
              type: 'language',
              title: 'Agreeing and disagreeing with a writer',
              groups: [
                { label: 'Agree', phrases: ['I fully agree with the writers that …', 'The writers make a convincing point when they say …', 'This is true in my country, where …'] },
                { label: 'Partly agree', phrases: ['To some extent, I agree that …, but …', 'This may be true for …, but not for …', 'While I accept that …, I think …'] },
                { label: 'Disagree', phrases: ['I’m not convinced that …', 'I would question the idea that …', 'The writers seem to overlook …'] }
              ]
            },
            {
              type: 'pairs',
              title: 'From neutral to evaluative',
              items: [
                { from: 'Hassi and Storti (2012) [[say]] that cultural exchanges are positive.', to: 'Hassi and Storti (2012) [[contentiously claim]] that cultural exchanges are positive.', tag: 'evaluative verb + adverb', note: 'Now the reader knows you doubt it.' },
                { from: 'They [[say]] that mostly the peripheral aspects of culture are affected.', to: 'They [[accurately point out]] that it is mostly the peripheral aspects of culture that are affected.', tag: 'attitude marker', note: 'Now the reader knows you agree.' }
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: '<b>Question 2.</b> Choose <b>ONE</b> idea from paragraph G. Write a few sentences: <b>paraphrase</b> the idea and give <b>your opinion</b> or evaluation, using the stance language from Activity 2.' },
            {
              type: 'detect',
              id: 'a11-dt',
              label: 'Stance studio',
              title: 'Paraphrase + evaluate',
              hint: 'The lights turn on when you use each kind of stance language.',
              checks: [
                { label: 'Citation', color: '#8a4f9e', any: ['/hassi/', '/storti/', 'the writers', 'the authors'] },
                { label: 'Evaluative reporting verb', color: '#c4562f', any: ['claim', 'contend', 'assume', 'imply', 'implies', 'exaggerate', 'point out', 'points out'] },
                { label: 'Hedge', color: '#2f7d6b', any: ['may', 'might', 'could', 'perhaps', 'presumably', 'seem', 'likely', 'suggest', 'often', 'sometimes', 'to some extent'] },
                { label: 'Attitude word', color: '#3a58a0', any: ['accurately', 'convincing', 'important', 'misguided', 'inaccurate', 'interestingly', 'surprisingly', 'contentious', 'useful', 'however'] }
              ],
              items: [
                {
                  task: 'My paraphrase and evaluation of one idea from paragraph G:',
                  rows: 5,
                  placeholder: 'Hassi and Storti (2012) claim that … However, …',
                  model: 'Hassi & Storti (2012) claim that cultural exchanges are generally positive because they have brought about greater opportunities. However, it would be useful for them to explain what exactly these opportunities are. (Also possible: Hassi & Storti contentiously claim that the effects of globalisation on culture are generally positive overall. / They accurately point out that it is mostly the peripheral aspects of culture that are affected.)'
                }
              ]
            },
            { type: 'do', n: 2, who: 'pair', text: '<b>Read it aloud</b> to your partner. Your partner guesses your stance: agree, partly agree or disagree? Which words told them?' }
          ]
        },
        /* ───────── a12 · Criticality (10) ───────── */
        {
          id: 'a12',
          short: 'Hybrid examples',
          minutes: 10,
          grouping: 'Class',
          art: 'dec10/assets/week5/v/v-d10w5d1-a12.svg',
          title: 'Criticality',
          goal: 'Find real examples of cultural hybridization in your country — and judge if they are positive or negative.',
          blocks: [
            {
              type: 'talk',
              title: 'What examples of cultural hybridization are there in your country?',
              prompts: ['Think about: <b>food</b> · <b>language</b> · <b>music and pop culture</b> · <b>fashion and online retailing</b>.', 'How has cultural globalisation had both <b>positive and negative</b> impacts in your country?']
            },
            {
              type: 'table',
              id: 'a12-tab',
              title: 'Hybrid culture in my country',
              columns: ['Area', 'An example of hybridization', 'Positive, negative or both? Why?'],
              fixed: ['Food', 'Language', 'Music and pop culture', 'Fashion and online retailing']
            },
            {
              type: 'language',
              title: 'Describing a hybrid',
              groups: [
                { label: 'Describe the mix', phrases: ['… is a blend of … and …', 'It combines traditional … with modern …', 'It is neither fully global nor fully local.', '… has been adapted to suit local tastes.'] },
                { label: 'Judge it', phrases: ['On the positive side, …', 'A possible downside is that …', 'Some people see this as …, while others …'] }
              ]
            }
          ],
          answers: {
            title: 'Some example answers (China)',
            items: [
              ['Food', 'American fast food adaptations: global fast-food chains like McDonald’s and KFC have tailored their menus to suit Chinese tastes. For instance, KFC offers congee and rice dishes, while McDonald’s has introduced items like taro pies.'],
              ['Language', 'Chinglish: the blend of Chinese and English occurs in various contexts, from street signs to product instructions — sometimes humorous, but also a sign of linguistic adaptation. Loanwords: modern Chinese has incorporated numerous English loanwords, particularly in technology and business (e.g. 马达 for “motor”, 卡车 for “truck”).'],
              ['Pop culture', 'C-Pop often incorporates elements from Western pop, Korean K-pop and traditional Chinese music, which has helped C-Pop artists gain international recognition. Cinema: Chinese cinema combines traditional Chinese storytelling with Western filmmaking techniques, e.g. the works of Zhang Yimou.'],
              ['Fashion', 'The modern Hanfu movement: a resurgence and reinvention of traditional Hanfu (traditional clothing of the Han ethnicity), often mixed with modern fashion elements to suit contemporary tastes and styles.']
            ]
          }
        },
        /* ───────── a13 · Role play: panel discussion (20) ───────── */
        {
          id: 'a13',
          short: 'Panel in Beijing',
          minutes: 20,
          grouping: 'Groups of 3–4 → Panels of 4–5',
          art: 'dec10/assets/week5/v/v-d10w5d1-a13.svg',
          title: 'Role Play: A Panel Discussion on Cultural Globalization and Hybridization in China',
          goal: 'Play a panellist (or the moderator) and discuss cultural globalisation, using examples and stance language.',
          blocks: [
            {
              type: 'sticky',
              color: 'green',
              title: 'The setting',
              text: '<p>A university in <b>Beijing</b> is hosting a panel discussion titled <b>“Cultural Dynamics in the 21st Century.”</b></p><p>The panel includes four participants, each representing different perspectives on cultural globalisation and hybridization in China. The audience consists of academics, cultural experts, students, and international delegates. The discussion is moderated by the head of the university’s International Relations Department.</p>'
            },
            {
              type: 'hotspot',
              src: 'dec10/assets/week5/d1-panel.svg',
              alt: 'A university stage in Beijing with a banner “Cultural Dynamics in the 21st Century”. Five name cards: the Moderator at a lectern on the left, then Professor Liang, Zhang Wei, Chen Yu and Ms. Wu on chairs.',
              hint: 'Tap each person to read their role card.',
              size: 'wide',
              spots: [
                { x: 12, y: 50, label: 'M', title: 'Moderator · Head of International Relations Department', text: 'You open the panel, ask each panellist a question, keep time and close the discussion. Your questions are in the moderator script below.', color: '#14293a' },
                { x: 32, y: 50, label: '1', title: 'Professor Liang · Cultural Studies Professor', text: '<p><b>Ancient traditions blending with modern influences</b></p><ul><li><b>Influence of Western educational values:</b> emphasis on creativity and critical thinking in education vs rote memorization and obedience. Younger generations have different worldviews from their elders due to their exposure to global cultures through education and media.</li><li><b>Collectivism vs Individualism:</b> tension between Western ideals of individualism (emphasize self-expression) and maintaining collectivist traditions, which emphasize family and community.</li><li><b>Concerns</b> e.g. loss of traditional values, conflicts over cultural authenticity and cultural dilution due to the overwhelming influence of Western culture.</li></ul>', color: '#8a4f9e' },
                { x: 50, y: 50, label: '2', title: 'Zhang Wei · A young entrepreneur in the fashion industry', text: '<ul><li><b>Identity and Cultural Pride:</b> blending of traditional Chinese elements with global influences — renewed interest in traditional Chinese culture e.g. the modern Hanfu trend, ‘New Chinese Style’.</li><li>My own brand combines traditional Chinese designs with modern aesthetics, appealing not only to locals but also to global customers. BUT brands like Dior have been accused of cultural appropriation — misrepresenting their version of the ‘mamianqun’ as an original creation.</li><li><b>Digital Consumption:</b> global reach of customer base with online retail platforms. Competition with large fast fashion retailers.</li></ul>', color: '#c4562f' },
                { x: 68, y: 50, label: '3', title: 'Chen Yu · Student Recently Returned from Abroad', text: '<ul><li><b>Immersion in a foreign culture:</b> exposure to different viewpoints, cultural norms, values and lifestyles. Develop a broader, global perspective. Challenge stereotypes.</li><li><b>Cultural Diffusion:</b> bring back knowledge, habits, and customs from abroad, while leaving aspects of own culture with their hosts. Mutual exchange — cultural elements are spread and integrated into different societies.</li><li><b>Global interest in Chinese culture:</b> aspects of Chinese culture, such as cuisine, traditional medicine, martial arts, and festivals like Chinese New Year, have gained international recognition and appreciation. Grow to appreciate unique aspects of our own culture that we wish to preserve and celebrate.</li></ul>', color: '#2f7d6b' },
                { x: 86, y: 50, label: '4', title: 'Ms. Wu · A prominent Chinese musician', text: '<p>Known for blending traditional Chinese music with contemporary genres.</p><ul><li>Opened up avenues for creativity and cross-cultural collaboration and international recognition.</li><li>Integrating elements from Western pop, K-pop, and traditional Chinese music — preserve heritage & relevant for today’s global audience.</li><li><b>Global Media Influence:</b> Hollywood films, Korean dramas, and Japanese anime have a significant following in China, impacting local entertainment preferences and production. These have introduced new cultural references and idioms into everyday life in China.</li><li><b>Social Media Trends:</b> platforms like Weibo and Douyin (TikTok) not only connect Chinese users to each other but also to global social media trends, further integrating global cultural elements into Chinese daily life.</li></ul>', color: '#3a58a0' }
              ]
            },
            {
              type: 'steps',
              items: [
                { who: 'class', text: 'Your teacher allocates you a role in this panel discussion.' },
                { who: 'group', text: 'In small groups <b>with others playing the same character</b>, review your role card. Discuss specific examples you can think of, and add any other relevant information about how globalisation has had an impact on your culture. Moderators: review your questions and check you understand them.' },
                { who: 'group', text: 'Your teacher regroups you so that there is <b>one of each character</b> in each group (3 panel members + a moderator, or all 4 panel members + a moderator).' },
                { who: 'group', text: 'Hold the panel discussion. Then role play in front of another group, or video your discussion — follow your teacher’s instructions.' }
              ]
            },
            {
              type: 'model',
              title: 'Moderator script (Head of International Relations Department)',
              list: [
                'Welcome everyone to our panel discussion on the impacts of cultural globalization in China. Let’s begin with Professor Liang. How do you see Western culture influencing traditional Chinese values?',
                'Interesting insights, Professor. Zhang Wei, can you discuss how cultural blending has affected the fashion industry in China?',
                'Thank you, Zhang Wei. Now, turning to Ms. Wu, as a musician, how do you perceive the impact of cultural hybridization on Chinese music and entertainment generally?',
                'Fascinating. Thank you Ms Wu. Chen Yu, having recently studied abroad, can you share how these experiences might shape views among your peers?',
                'Thank you, Chen Yu and to all our panelists for such a vibrant discussion. It’s clear that cultural globalization is a multi-faceted phenomenon impacting various aspects of life in China. As Chen Yu just pointed out, our traditions have also garnered global respect and curiosity, enriching the cultural exchange and offering opportunities for mutual understanding and growth. Let’s continue to explore this dynamic landscape. Thank you all for attending today’s discussion.'
              ]
            },
            {
              type: 'language',
              title: 'Panel language',
              groups: [
                { label: 'Open your answer', phrases: ['Thank you. From my perspective as …, …', 'That’s a great question. In my experience, …', 'Let me start with an example.'] },
                { label: 'Give an example', phrases: ['A clear example of this is …', 'Take, for instance, …', 'We can see this in …'] },
                { label: 'Build on others', phrases: ['I’d like to build on what Professor Liang said.', 'As Chen Yu just pointed out, …', 'That links to my own experience of …'] },
                { label: 'Disagree politely', phrases: ['I see it slightly differently.', 'With respect, I’m not sure that’s always the case.', 'That’s a fair point, but …'] },
                { label: 'Hedge', phrases: ['It could be argued that …', 'This may lead to …', 'It seems that young people …', 'To some extent, …'] },
                { label: 'Moderator moves', phrases: ['Could you expand on that?', 'Let’s hear another view. …?', 'We have time for one more comment.', 'To sum up the discussion, …'] }
              ]
            },
            {
              type: 'spinner',
              id: 'a13-spin',
              label: 'Audience questions',
              title: 'Questions from the audience',
              text: 'When the moderator has finished, the audience (another group) spins and asks one panellist a follow-up question.',
              reels: [
                { label: 'Ask', items: ['Is hybridization a threat or an opportunity for young people?', 'Where is the line between cultural exchange and cultural appropriation?', 'Which deep values will never change in China?', 'Is the world becoming more similar or more mixed?', 'Should governments protect traditional culture?', 'What will Chinese culture look like in 2050?'] },
                { label: 'To', items: ['Professor Liang', 'Zhang Wei', 'Chen Yu', 'Ms. Wu', 'any panellist'] }
              ]
            },
            {
              type: 'checklist',
              id: 'a13-check',
              title: 'During your panel, did you …',
              meter: true,
              items: ['use at least one idea from your role card', 'add your own specific example', 'use a word from today (e.g. hybridization, fusion, acculturation)', 'build on or politely disagree with another speaker', 'hedge at least once (may, could, it seems …)']
            },
            {
              type: 'toggle',
              title: 'Sample discussion (read after your role play)',
              blocks: [
                {
                  type: 'chat',
                  right: 'Moderator',
                  lines: [
                    ['Moderator', 'Welcome everyone to our panel discussion on the impacts of cultural globalization in China. Let’s begin with Professor Liang. How do you see Western culture influencing traditional Chinese values?'],
                    ['Professor Liang', 'Thank you. Western influence is quite discernible in our daily lives through media, lifestyle, and even our educational system. While this has enriched our perspectives, there is a <mark>tension between</mark> adopting individualistic values and maintaining our collectivist traditions, which emphasize family and community.'],
                    ['Moderator', 'Interesting insights, Professor. Zhang Wei, can you discuss how cultural blending has affected the fashion industry in China?'],
                    ['Zhang Wei', 'Absolutely. In the fashion sector, hybridization has been great for creativity and market expansion. My own brand <mark>combines</mark> traditional Chinese designs <mark>with</mark> modern aesthetics, appealing not only to locals but also to global customers. We see a growing demand for such fusion products, which <mark>speaks to</mark> a broader acceptance and celebration of hybrid cultural identities.'],
                    ['Moderator', 'Thank you, Zhang Wei. Now, turning to Ms. Wu, as a musician, how do you perceive the impact of cultural hybridization on Chinese music and entertainment generally?'],
                    ['Ms. Wu', 'Thank you. In the music industry, hybridization has opened up incredible avenues for creativity and cross-cultural collaboration. <mark>By integrating</mark> elements from Western pop, K-pop, and traditional Chinese music, we are not only preserving our heritage but also making it relevant for today’s global audience. This fusion has helped Chinese music gain international recognition, <mark>though it also challenges us</mark> to maintain a balance between innovation and tradition.'],
                    ['Moderator', 'Fascinating. Thank you Ms Wu. Chen Yu, having recently studied abroad, can you share how these experiences might shape views among your peers?'],
                    ['Chen Yu', 'Studying abroad was eye-opening. I was exposed to diverse viewpoints that are sometimes in contrast to what we are used to here. Many of us return with new ideas and a desire to incorporate some of these ideas into our business practices. <mark>Yet</mark>, we also grow to appreciate unique aspects of our own culture that we wish to preserve and celebrate. It was interesting to see how aspects of Chinese culture, such as, traditional Chinese medicine, martial arts, and festivals like Chinese New Year, have gained international recognition and appreciation.'],
                    ['Moderator', 'Thank you, Chen Yu and to all our panelists for such a vibrant discussion. It’s clear that cultural globalization is a multi-faceted phenomenon impacting various aspects of life in China. As Chen Yu just pointed out, our traditions have also garnered global respect and curiosity, enriching the cultural exchange and offering opportunities for mutual understanding and growth. Let’s continue to explore this dynamic landscape. Thank you all for attending today’s discussion.']
                  ]
                }
              ]
            },
            {
              type: 'talk',
              title: 'After the panel',
              prompts: ['Which panellist was the most persuasive? Why?', 'Did the panel show more <b>homogenization</b> or more <b>hybridization</b>?', 'Has your view from the start of the lesson changed? Add a note to your first ideas (Activity 1).']
            }
          ]
        }
      ]
    },
    /* ═══════════════════════════════ 2A INTERACTIVE DISCUSSION INDIVIDUAL QUESTIONS ═══════════════════════════════ */
    {
      id: 'idq',
      number: '02',
      code: '2A',
      minutes: 30,
      tone: 'teal',
      art: 'dec10/assets/week5/s-d1-idq.svg',
      title: 'Interactive Discussion individual questions',
      subtitle: 'Explain the writers’ view — then give your own',
      outcome: 'You explain and respond to writers’ views contained in academic texts.',
      activities: [
        {
          id: 'b1',
          short: 'Prepare',
          minutes: 10,
          grouping: 'Alone',
          art: 'dec10/assets/week5/v/v-d10w5d1-b1.svg',
          title: 'Activity 1 Prepare for individual questions',
          goal: 'Review paragraph G of Hassi and Storti (2012) and understand the key points the writers make.',
          blocks: [
            {
              type: 'key',
              title: 'Individual questions in the Interactive Discussion',
              points: [
                'You get two kinds of question: a question about the <b>ideas in the text</b> (“Can you explain what they mean by this?”) and a question about your <b>personal response</b> (“To what extent do you agree …?”).',
                'Good answers are <b>relevant, coherent and extended</b> — not just a copy of the text.'
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: 'Review <b>paragraph G</b> of Hassi and Storti (2012). Focus on understanding the key points. You have <b>5 minutes</b>.' },
            { type: 'sources', ids: ['threeh'] },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d1-iceberg.svg',
              size: 'wide',
              alt: 'An iceberg in the sea. Above the water, the surface of culture moves between countries: clothing, fashion, foods, arts, music, movies and crafts. Below the water, the deep part stays in place: values, beliefs and the unique, intricate aspects tied to the original context.',
              caption: 'Paragraph G as a picture: the <b>surface</b> travels, the <b>deep part</b> stays.'
            },
            {
              type: 'squeeze',
              id: 'b1-sq',
              title: 'Squeeze paragraph G into notes',
              hint: 'Turn each sentence into short notes. Use symbols (→ = ≠ ✓) and abbreviations. Then compare with the model.',
              items: [
                { text: 'Homogenization and hybridization focus on cultural products, not the deeper values or beliefs of a given culture.', max: 45, model: 'H + H = cult. products ≠ deep values' },
                { text: 'Nations regularly get involved in cultural integration processes but do not lose the unique and intricate aspects of a culture.', max: 45, model: 'nations integrate BUT keep unique aspects' },
                { text: 'They interpret cultural elements in light of their own in a way that they become compatible with their culture.', max: 40, model: 'adapt foreign elem. → fit own cult.' },
                { text: 'Cultures are dynamic, not static, and can incorporate foreign elements without being necessarily subject to cultural domination.', max: 45, model: 'cult. = dynamic; add foreign w/o domination' }
              ]
            },
            {
              type: 'language',
              title: 'Explaining a writer’s view (in your own words)',
              groups: [
                { label: 'Start', phrases: ['The writers believe that …', 'What they mean is that …', 'In other words, they are saying that …'] },
                { label: 'Explain', phrases: ['This means that …', 'For example, …', 'So, things like … change, but … do not.'] }
              ]
            }
          ]
        },
        {
          id: 'b2',
          short: 'Answer',
          minutes: 20,
          grouping: 'Pair',
          art: 'dec10/assets/week5/v/v-d10w5d1-b2.svg',
          title: 'Activity 2 Answer the individual questions',
          goal: 'Answer the individual questions as in the test: explain the text, then give an extended personal response.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d1-idq.svg',
              size: 'wide',
              alt: 'Two answer paths. Question about the ideas in the text: 1 restate who and what (The writers believe …), 2 explain in your own words, 3 add an example. Question about personal response: 1 give a clear position (I largely agree …), 2 give a reason, 3 give a specific example from your country, 4 link back to the question.',
              caption: 'Two question types, two answer shapes.'
            },
            {
              type: 'steps',
              items: [
                { who: 'class', text: 'Follow your teacher’s instructions: a demo with volunteers, OR pair practice.' },
                { who: 'pair', text: 'Pair practice: Student A is the <b>interlocutor</b> (asks), Student B is the <b>participant</b> (answers). Spin for a question. Ask one <b>ideas in the text</b> question and one <b>personal response</b> question. Then swap.' },
                { who: 'pair', text: 'If you can, <b>video</b> your answers on your phone and watch them later in your own time.' }
              ]
            },
            {
              type: 'spinner',
              id: 'b2-spin',
              label: 'Interlocutor’s questions',
              title: 'Spin a question',
              text: 'Interlocutor: read the question clearly. Participant: answer for about <b>one minute</b>.',
              reels: [
                {
                  label: 'Question',
                  items: [
                    'Ideas in the text · In Paragraph G, the writers’ view is that “homogenization and hybridization focus on cultural products, not the deeper values or beliefs of a given culture.” Can you explain what they mean by this?',
                    'Ideas in the text · The writers’ view is that cultures “can incorporate foreign elements without being necessarily subject to cultural domination.” Can you explain what they mean by this?',
                    'Ideas in the text · The writers state that nations “interpret [other] cultural elements in light of their own”. Can you explain what they mean by this?',
                    'Personal response · To what extent do you agree with the writers’ view that in cultural exchanges, the core part of a culture remains largely unchanged?',
                    'Personal response · What do you think is more evident in your country, homogenization or hybridization?'
                  ]
                }
              ]
            },
            {
              type: 'language',
              title: 'Personal response language',
              groups: [
                { label: 'Position', phrases: ['I completely agree with the writers’ view, as …', 'To a large extent, I agree, but …', 'I disagree with the writers’ view. In my opinion, …'] },
                { label: 'Reason + example', phrases: ['The main reason is that …', 'If you consider …, you can see that …', 'For instance, in my country, …'] },
                { label: 'Which is more evident?', phrases: ['In my country, hybridization is more evident. A good example of a new cultural hybrid is …', 'I’d say homogenization, because the Western lifestyle is clear in …'] },
                { label: 'Buy time', phrases: ['That’s an interesting question. Let me think …', 'There are a few ways to look at this.', 'Could you repeat the question, please?'] }
              ]
            },
            {
              type: 'form',
              id: 'b2-form',
              title: 'Interlocutor’s feedback',
              intro: 'Interlocutor: listen to your partner, then give quick feedback. Choose Yes, Mostly or Needs work.',
              observe: 'Who are you giving feedback to?',
              sections: [
                { label: 'Ideas in the text', items: ['Explained the writers’ view in their own words (did not just repeat the quote)', 'Added an example to make the meaning clear'] },
                { label: 'Personal response', items: ['Gave a clear position', 'Gave a reason and a specific example', 'The answer was relevant, coherent and extended'] }
              ],
              fields: [{ id: 'b2-tip', label: 'One tip for next time', rows: 2 }],
              send: true
            },
            { type: 'tip', text: '<b>After class:</b> remember to continue your research for your group’s seminar topic and final Interactive Presentation Assessment.' }
          ],
          answers: {
            title: 'Suggested responses',
            items: [
              ['1', 'The writers believe that in both scenarios it is only the more visible aspects of culture, such as clothing, music or cuisine that are most commonly exchanged. The deeply rooted cultural nuances particular to a culture remain unchanged and unaffected by these more superficial elements.'],
              ['2', 'Countries regularly engage in the process of cultural integration, yet they maintain their unique cultural traits/characteristics. They assimilate cultural elements in a way that aligns with their own culture, adapting them to blend with their own culture instead of overpowering it.'],
              ['3', 'Nations take aspects of other cultures and modify them to fit into their own way of life, making them work with their existing customs and values.'],
              ['4', 'Aim for a relevant, coherent and extended answer, not simply paraphrased ideas from the text. For example: “I completely agree with the writers’ view as even though my culture has adopted some aspects of American culture and students like myself will bring back knowledge, customs and habits from abroad, it is unlikely to affect the traditional values of my country that have developed over centuries.” · “When foods, for example, are introduced to other cultures they often undergo modifications to cater to local tastes. Even if they are not modified, the receiving culture is not necessarily diluted in any way.” · Or disagree: “In my opinion, even the deep-seated elements of a culture can evolve and transform when they interact with other cultures … in countries like India and China, where living with extended families was once the norm, there is a noticeable shift towards nuclear families, especially in urban areas.”'],
              ['5', 'If you say homogenization: focus on the impact of the Western Euro-American lifestyle and give specific examples. If you say hybridization: give examples of a new “cultural hybrid”.']
            ]
          }
        }
      ]
    },
    /* ═══════════════════════════════ 3A LISTENING ASSESSMENT PREPARATION HOMEWORK ═══════════════════════════════ */
    {
      id: 'testlab',
      number: '03',
      code: '3A',
      minutes: 30,
      tone: 'amber',
      art: 'dec10/assets/week5/s-d1-testlab.svg',
      title: 'Listening Assessment preparation homework',
      subtitle: 'Get ready for the listening part of the assessment',
      outcome: 'You complete the listening preparation on Canvas and know which listening skill to work on next.',
      activities: [
        {
          id: 'c1',
          short: 'Test Lab',
          minutes: 30,
          grouping: 'Homework',
          art: 'dec10/assets/week5/v/v-d10w5d1-c1.svg',
          title: 'Listening Assessment preparation homework',
          goal: 'Follow the instructions on Canvas, using the listening tactics you have practised.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Open <b>Canvas › DEC10 › Week 5</b> and <b>follow the instructions</b> for the Listening Assessment preparation.' },
            {
              type: 'flip',
              title: 'Your listening tactics',
              hint: 'Turn each card before you start.',
              items: [
                { front: 'Read first', back: 'Read the questions and headings before you listen. Underline the key words. Predict the kind of answer (a number? a name? a reason?).' },
                { front: 'Notes, not sentences', back: 'Write key words and symbols: → ↑ ↓ = b/c e.g. Put each point under its heading.' },
                { front: 'Count your words', back: 'NO MORE THAN THREE WORDS means three. Over the limit = zero.' },
                { front: 'Listen for signposts', back: '“However”, “on the other hand”, “the main reason is …” tell you an important idea is coming.' },
                { front: 'Hear the stance', back: 'Today you found stance in writing. Speakers show it too: “I’m not convinced …”, “clearly …”, “it may be that …”.' }
              ]
            },
            { type: 'do', n: 2, who: 'alone', text: 'When you finish, rate yourself honestly. Bring your weakest tactic to class.' },
            { type: 'scale', id: 'c1-read', title: 'After the practice', statement: 'I read the questions and predicted the answers before I listened.', ends: ['Not at all', 'Every time'] },
            { type: 'scale', id: 'c1-notes', statement: 'My notes were short and organised under headings.', ends: ['Not at all', 'Every time'] },
            { type: 'scale', id: 'c1-lim', statement: 'I kept every short answer inside the word limit.', ends: ['Not at all', 'Every time'] },
            { type: 'fields', id: 'c1-f', fields: [{ id: 'c1-next', label: 'My weakest tactic, and one thing I will do about it this week', rows: 2, placeholder: 'My weakest tactic was … This week I will …' }] }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ['cultural globalisation', 'the process through which the values, ideas and experiences of a culture spread across the world', 'K-pop and Netflix are part of cultural globalisation.'],
    ['homogenization', 'the process of becoming the same or very similar (also called cultural convergence)', 'Some people fear the homogenization of world culture.'],
    ['hybridization', 'mixing different cultural elements to create something new', 'Fusion food is an example of cultural hybridization.'],
    ['glocalization', 'the blending of global and local elements to create unique outcomes in different regions', 'A McDonald’s taro pie is an example of glocalization.'],
    ['McDonaldization', 'the spread of fast-food principles (efficiency, calculability, predictability, control) to other parts of society', 'Some say university education is being McDonaldized.'],
    ['cultural artifact', 'an object or expression made by people that tells us about their culture', 'Language and buildings are both cultural artifacts.'],
    ['acculturation', 'the process of adopting the cultural traits of another group', 'Acculturation is often evident when immigrants adopt new customs.'],
    ['hegemony', 'dominance, control or influence over others', 'Some writers describe an American hegemony on the internet.'],
    ['monopoly', 'when one company or group controls all of a certain type of business or product', 'One company had a monopoly on the software market.'],
    ['contentious', 'controversial and likely to cause arguments', 'Cultural diversity is a contentious topic.'],
    ['fusion', 'the process of joining two or more different things into one', 'Her music is a fusion of folk and pop.'],
    ['pluralistic', 'including people from many different backgrounds and beliefs', 'Sydney is a pluralistic city.'],
    ['an assault on', 'an attack on someone or something with the intent to cause harm or damage', 'Berger sees globalization as an assault on local cultures.'],
    ['to dilute', 'to lessen the strength of something by mixing it with something else', 'Some fear that global media will dilute local traditions.'],
    ['to replicate', 'to make an exact copy', 'The café tried to replicate an American coffee chain.'],
    ['subject to', 'likely to be affected by something or dependent on certain conditions', 'Cultures are not necessarily subject to domination.'],
    ['derived out of', 'originating from a specific source or reason', 'New cultures are derived out of both global and local ideas.'],
    ['voice', 'whose idea it is in a text: the writer’s own, or a source’s (with a citation)', 'Sentence 1 uses the voices of sources.'],
    ['stance', 'the writer’s attitude or position towards an idea', 'The words “not entirely destructive” show the writers’ stance.'],
    ['hedging', 'careful language that makes a claim less strong (may, perhaps, presumably)', '“Presumably” is an example of hedging.'],
    ['interlocutor', 'the person who asks the questions in a speaking test', 'The interlocutor asked me two individual questions.']
  ]
};
