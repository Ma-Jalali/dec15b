/* DEC10 · Language Lab · APA 1 — In-text citations (APA 7): integral and non-integral, one / two / three or more authors,
   more than one source, quotes with page numbers, punctuation.
   Source: the teacher's "DEC 10 Citations" document, updated to APA 7 (three or more authors: et al. from the first citation).
   Stages: Warm-up (pre) → Notice and learn (while) → Practise (controlled) → Use it (freer). */
window.DEC15_LESSON = {
  id: 'd10lab-cite', week: null, day: null,
  title: 'In-text citations',
  duration: 'About 45 minutes',
  questionKind: 'Can-do', questionLabel: 'By the end of this lesson you can',
  question: 'cite a source inside your sentence or in brackets, for one, two or more authors, with the right APA 7 punctuation.',
  journey: 'Every idea you take from a source needs a citation. In the LRW writing test you cite in the text only, so getting the in-text citation right matters every time.',
  goalShort: 'honest, correctly cited writing',
  image: 'dec10/assets/lab/hero-apa.svg',
  imageAlt: 'A journal article and two citation cards: Harris and Smith (2017) point out that …, and … (Harris and Smith, 2017).',
  finish: { title: 'Next lesson', text: 'Reporting verbs' },
  sections: [
    {
      id: 'warm', number: '1', minutes: 7, tone: 'amber', art: 'dec10/assets/lab/s-warm.svg',
      title: 'Warm-up', subtitle: 'Do I need a citation?',
      outcome: 'You know when a sentence needs a citation.',
      activities: [
        {
          id: 'ct-w1', short: 'Cite it?', minutes: 7, grouping: 'Alone → Pair',
          title: 'Cite it or not?',
          goal: 'Decide which sentences in an essay need a citation.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'You are writing about green jobs. Which of these need a citation?' },
            { type: 'sort', id: 'ct-w1-sort', title: 'Cite it or not?', buckets: [{ label: 'Cite it', text: 'it came from a source', letter: '✓' }, { label: 'No citation', text: 'yours or common knowledge', letter: '–' }], items: [
              { text: 'a percentage from a government report', answer: 0, why: 'Numbers and statistics always need a citation.' },
              { text: 'an idea from a journal article, in your own words', answer: 0, why: 'A paraphrase still uses someone else’s idea.' },
              { text: 'a sentence copied word for word from an article', answer: 0, why: 'A quote needs quotation marks, a citation <b>and</b> a page number.' },
              { text: 'a point from the lecture in the listening test', answer: 0, why: 'In the LRW test, the lecture is a source: cite it.' },
              { text: 'your own opinion in the conclusion', answer: 1 },
              { text: 'Sydney is in Australia.', answer: 1, why: 'Common knowledge: everyone knows it, and it is easy to check.' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Why do academic writers cite? Give two reasons.' }
          ],
          answers: { items: [['Why cite?', 'To show where an idea comes from (honesty: no plagiarism), to give your argument support from experts, and to let your reader find the source.']] }
        }
      ]
    },
    {
      id: 'learn', number: '2', minutes: 15, tone: 'blue', art: 'dec10/assets/lab/s-learn.svg',
      title: 'Notice and learn', subtitle: 'Integral or non-integral, and the author rules',
      outcome: 'You can write both kinds of citation for any number of authors.',
      activities: [
        {
          id: 'ct-l1', short: 'Two kinds', minutes: 7, grouping: 'Alone',
          title: 'Integral and non-integral',
          goal: 'Learn the two ways to cite, and the punctuation of each.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/lab/cite-anatomy.svg', alt: 'Integral: Harris and Smith (2017) point out that … uses and, and the year in brackets. Non-integral: … green jobs are rising (Harris & Smith, 2017). uses an ampersand, a comma before the year, and a full stop after the bracket.', caption: '<b>Integral</b>: the authors are part of your sentence. <b>Non-integral</b>: the authors are in brackets.' },
            { type: 'key', title: 'Which one, when?', points: [
              '<b>Non-integral</b> puts the focus on the <b>idea</b>. Use it most of the time (a guide: about 70–80% of your citations).',
              '<b>Integral</b> puts the focus on the <b>author</b>: use it when who said it matters, or to compare authors (about 20–30%).',
              'In brackets: <b>&amp;</b> and a comma before the year. In your sentence: <b>and</b>, and only the year in brackets.'
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'Sort the citations.' },
            { type: 'sort', id: 'ct-l1-sort', title: 'Integral or non-integral?', buckets: [{ label: 'Integral', text: 'names in the sentence', letter: 'I' }, { label: 'Non-integral', text: 'names in brackets', letter: 'N' }], items: [
              { text: 'Harris (2017) points out that …', answer: 0 },
              { text: '… is rising (Harris, 2017).', answer: 1 },
              { text: 'Harris and Smith (2017) argue that …', answer: 0 },
              { text: '… (Harris & Smith, 2017).', answer: 1 },
              { text: 'Harris et al. (2011) found that …', answer: 0 },
              { text: '… (Harris et al., 2011).', answer: 1 },
              { text: 'According to Kennedy (2021), …', answer: 0 },
              { text: '… (Harris, 2017; Smith, 2019).', answer: 1 }
            ] }
          ]
        },
        {
          id: 'ct-l2', short: 'Author rules', minutes: 8, grouping: 'Alone → Pair',
          title: 'One, two, three or more',
          goal: 'Learn the pattern for each number of authors.',
          blocks: [
            { type: 'model', title: 'APA 7 in-text citations', rows: [
              ['One author', '<span class="ct-row"><b>In the sentence:</b> Harris (2017) points out …<br><b>In brackets:</b> … (Harris, 2017).</span>'],
              ['Two authors', '<span class="ct-row"><b>In the sentence:</b> Harris and Smith (2017) point out …<br><b>In brackets:</b> … (Harris &amp; Smith, 2017).</span>'],
              ['Three or more', '<span class="ct-row"><b>In the sentence:</b> Harris et al. (2011) point out …<br><b>In brackets:</b> … (Harris et al., 2011).</span>'],
              ['Two sources', '<span class="ct-row"><b>In the sentence:</b> Harris (2017) and Smith (2019) point out …<br><b>In brackets:</b> … (Harris, 2017; Smith, 2019).</span>'],
              ['Two sources, one with two authors', '<span class="ct-row"><b>In the sentence:</b> Harris and Smith (2017) and Kennedy (2021) point out …<br><b>In brackets:</b> … (Harris &amp; Smith, 2017; Kennedy, 2021).</span>'],
              ['An organisation', '<span class="ct-row"><b>In the sentence:</b> UNEP (2006) reports …<br><b>In brackets:</b> … (UNEP, 2006).</span>'],
              ['A direct quote', '<span class="ct-row"><b>In the sentence:</b> Weinstein and Selman (2014) call it “meanness and cruelty” (p. 13).<br><b>In brackets:</b> … “meanness and cruelty” (Weinstein &amp; Selman, 2014, p. 13).</span>']
            ] },
            { type: 'flip', title: 'Small details that matter', items: [
              { front: 'et al or et al.?', back: '<b>et al.</b> always has a full stop (it is short for <i>et alii</i>, “and others”). In brackets: (Harris et al., 2011).' },
              { front: 'Two sources in one bracket', back: 'Use a <b>semicolon</b> between them, in <b>alphabetical</b> order: (Harris, 2017; Smith, 2019).' },
              { front: '& or and?', back: '<b>&amp;</b> only inside brackets. <b>and</b> in your sentence.' },
              { front: 'Where does the full stop go?', back: '<b>After</b> the bracket: … is rising (Harris, 2017).' },
              { front: 'Same surname?', back: 'Two authors of one work: (Harris & Harris, 2021). Two different first authors called Harris: add initials, (J. Harris, 2021; M. Harris, 2021).' },
              { front: 'Old rule, new rule', back: 'APA 6 listed up to five names the first time. <b>APA 7</b>: three or more authors are <b>et al.</b> from the first citation: (Harris et al., 2011).' }
            ] },
            { type: 'do', n: 1, who: 'pair', text: 'Cover the list above. Your partner says an author list (<i>“Lee and Park, 2020”</i>). You say both versions out loud.' }
          ]
        }
      ]
    },
    {
      id: 'practise', number: '3', minutes: 13, tone: 'teal', art: 'dec10/assets/lab/s-practise.svg',
      title: 'Practise', subtitle: 'Controlled practice with instant feedback',
      outcome: 'You write the punctuation, switch between the two kinds, and find mistakes.',
      activities: [
        {
          id: 'ct-p1', short: 'Punctuation', minutes: 4, grouping: 'Alone',
          title: 'Fill in the punctuation',
          goal: 'Choose the missing word or mark.',
          blocks: [
            { type: 'cloze', id: 'ct-p1-cl', title: 'Citation punctuation', list: true,
              options: [['&', 'and'], ['and', '&'], [',', ';'], [';', ','], ['et al.', 'et al'], ['p. 13', 'page 13'], ['.', ',']],
              text: 'Green jobs are growing quickly (Harris {{1}} Smith, 2017).\nHarris {{2}} Smith (2017) point out that green jobs are growing.\nWater use is rising (Kennedy{{3}} 2021).\nSeveral studies agree (Harris, 2017{{4}} Smith, 2019).\nCollins {{5}} (2006) found positive effects of exercise programmes.\nOnline bullying represents “meanness and cruelty” (Weinstein & Selman, 2014, {{6}}).\nForest fires in Siberia have increased (Radford, 2005){{7}}',
              answers: ['&', 'and', ',', ';', 'et al.', 'p. 13', '.'] }
          ]
        },
        {
          id: 'ct-p2', short: 'Switch', minutes: 5, grouping: 'Alone',
          title: 'Switch it',
          goal: 'Choose the correct other version of each citation.',
          blocks: [
            { type: 'quiz', id: 'ct-p2-q', title: 'Integral ↔ non-integral', items: [
              { q: '<i>Harris and Smith (2017) point out that green jobs are growing.</i> → non-integral:', options: ['Green jobs are growing (Harris and Smith, 2017).', 'Green jobs are growing (Harris & Smith, 2017).', 'Green jobs are growing (Harris & Smith 2017).'], answer: 'Green jobs are growing (Harris & Smith, 2017).', why: '<b>&amp;</b> and a comma before the year.' },
              { q: '<i>… (Lee et al., 2020).</i> → integral:', options: ['Lee et al. (2020) found that …', 'Lee et al., (2020) found that …', 'Lee, Park and Cho (2020) found that …'], answer: 'Lee et al. (2020) found that …', why: 'Three or more authors: <b>et al.</b>, no comma before the bracket.' },
              { q: '<i>Brown (1997) and Thompson (2002) mention groundwater pollution.</i> → non-integral:', options: ['… (Brown, 1997, Thompson, 2002).', '… (Brown, 1997; Thompson, 2002).', '… (Brown 1997; Thompson 2002).'], answer: '… (Brown, 1997; Thompson, 2002).', why: 'A semicolon between sources, a comma before each year.' },
              { q: '<i>… (Swales, 2002).</i> → integral:', options: ['Swales (2002) points out that …', 'Swales, 2002 points out that …', '(Swales, 2002) points out that …'], answer: 'Swales (2002) points out that …', why: 'Name in the sentence, year in brackets.' },
              { q: 'Three authors: Harris, Smith and Kennedy (2011). In APA 7 the first citation is:', options: ['Harris, Smith and Kennedy (2011)', 'Harris et al. (2011)', 'Harris, Smith et al. (2011)'], answer: 'Harris et al. (2011)', why: 'APA 7: three or more authors → <b>et al.</b> every time.' }
            ] }
          ]
        },
        {
          id: 'ct-p3', short: 'Mistakes', minutes: 4, grouping: 'Alone',
          title: 'Find the mistake',
          goal: 'Each citation has one mistake. Tap it.',
          blocks: [
            { type: 'spot', id: 'ct-p3-spot', title: 'Tap the mistake', label: 'mistake', paras: [
              'Green jobs are growing [[(Harris]] [[*and]] Smith, [[2017)]].',
              '[[Collins]] [[*et al]] (2006) found positive [[effects]].',
              'Water use is rising [[(Kennedy]] [[*2021)]].',
              '[[Harris]] [[*&]] Smith (2017) point out that jobs are [[changing]].',
              'Several studies agree [[(Harris,]] [[*2017. Smith,]] [[2019)]].',
              'Fashion uses a lot of water [[*(Lee, Park, and Cho, 2020)]].'
            ] }
          ],
          answers: { items: [['1', '(Harris <b>&amp;</b> Smith, 2017)'], ['2', 'Collins <b>et al.</b> (2006)'], ['3', '(Kennedy<b>,</b> 2021)'], ['4', 'Harris <b>and</b> Smith (2017)'], ['5', '(Harris, 2017<b>;</b> Smith, 2019)'], ['6', '(Lee <b>et al.</b>, 2020)']] }
        }
      ]
    },
    {
      id: 'use', number: '4', minutes: 10, tone: 'plum', art: 'dec10/assets/lab/s-use.svg',
      title: 'Use it', subtitle: 'Write with three sources',
      outcome: 'You write a short paragraph that cites three sources in both ways.',
      activities: [
        {
          id: 'ct-u1', short: 'Write', minutes: 10, grouping: 'Alone → Pair',
          title: 'Sustainable fashion: use the sources',
          goal: 'Write 4–5 sentences about fast fashion. Use all three sources. Use at least one integral and two non-integral citations.',
          blocks: [
            { type: 'cards', title: 'Practice sources (invented for this exercise)', items: [
              { label: 'Source A · Nguyen (2022)', text: 'Most clothes in Australia are worn fewer than ten times before they are thrown away.' },
              { label: 'Source B · Lee, Park and Cho (2020)', text: 'Producing one cotton T-shirt can use about 2,700 litres of water.' },
              { label: 'Source C · Ahmed and Brown (2021)', text: 'Clothing rental services could cut wardrobe emissions, but only if customers keep clothes longer.' }
            ] },
            { type: 'detect', id: 'ct-u1-dt', title: 'My paragraph', label: 'Citation checker',
              hint: 'The lights check the form of your citations. Red chips show common mistakes.',
              checks: [
                { label: 'Integral: Name (year)', color: '#2b776e', any: ['/[A-Z][a-z]+( and [A-Z][a-z]+| et al\\.)? \\(\\d{4}\\)/u'] },
                { label: 'Non-integral: (Name, year)', color: '#b0512a', any: ['/\\([A-Z][a-z]+( & [A-Z][a-z]+| et al\\.)?, \\d{4}\\)/u'] },
                { label: 'et al.', color: '#3a58a0', any: ['et al.'] },
                { label: 'Two sources: ;', color: '#7a4a8c', any: ['/\\d{4}; [A-Z]/u'] }
              ],
              avoid: [
                { label: '“and” in brackets? Use &', any: ['/\\([A-Z][a-z]+ and [A-Z][a-z]+, \\d{4}\\)/u'] },
                { label: '& in the sentence? Use and', any: ['/[A-Z][a-z]+ & [A-Z][a-z]+ \\(\\d{4}\\)/u'] },
                { label: 'et al without a full stop?', any: ['/et al(?!\\.)/'] },
                { label: 'No comma before the year?', any: ['/\\([A-Z][a-z]+( & [A-Z][a-z]+| et al\\.)? \\d{4}\\)/u'] },
                { label: 'Three names? Use et al.', any: ['Lee, Park and Cho', 'Lee, Park & Cho', 'Lee, Park, and Cho'] }
              ],
              items: [{ rows: 7, placeholder: 'Fast fashion is a serious problem. Nguyen (2022) …', model: 'Fast fashion is a serious environmental problem. <b>Nguyen (2022)</b> points out that most clothes in Australia are worn fewer than ten times. Their production also uses a great deal of water: a single cotton T-shirt can need about 2,700 litres <b>(Lee et al., 2020)</b>. One possible solution is clothing rental <b>(Ahmed &amp; Brown, 2021)</b>. However, <b>Ahmed and Brown (2021)</b> warn that rental only helps if customers keep clothes for longer.' }] },
            { type: 'do', n: 2, who: 'pair', text: 'Swap. Check every citation against the table in Stage 2: names, &amp; or and, comma, year, full stop.' },
            { type: 'checklist', id: 'ct-u1-can', title: 'Can you do it?', items: ['I cite every idea, number and quote that comes from a source.', 'I use and in my sentence and & in brackets.', 'I use et al. for three or more authors.', 'I put a semicolon between two sources and a page number with a quote.'] },
            { type: 'tip', text: 'In the LRW writing test you cite <b>in the text only</b> (no reference list): cite the lecture and Texts A, B and C every time you use them. For the Interactive Presentation you also need a reference list on your slides.' }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ['in-text citation', 'a short note in your sentence that shows where an idea comes from', '(Harris, 2017)'],
    ['integral citation', 'a citation where the author’s name is part of your sentence', 'Harris (2017) argues that …'],
    ['non-integral citation', 'a citation where the author and year are in brackets', '… (Harris, 2017).'],
    ['et al.', '“and others”: used for three or more authors in APA 7', '(Lee et al., 2020)'],
    ['ampersand', 'the symbol &, used for “and” inside APA brackets', '(Harris & Smith, 2017)']
  ]
};
