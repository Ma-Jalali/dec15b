/* DEC10 · Language Lab · APA 1 — In-text citations (APA 7): integral and non-integral, one / two / three or more authors,
   more than one source, quotes with page numbers, punctuation.
   Source: the teacher's "DEC 10 Citations" document, updated to APA 7 (three or more authors: et al. from the first citation).
   One page, four tabs: Warm-up · Learn · Practise · Use it (built for self-study). */
window.DEC15_LESSON = {
  id: "d10lab-cite",
  week: null,
  day: null,
  title: "In-text citations",
  duration: "About 55 minutes",
  questionKind: "Can-do",
  questionLabel: "By the end of this lesson you can",
  question: "cite a source inside your sentence or in brackets, for one, two or more authors, with the right APA 7 punctuation.",
  journey: "Every idea you take from a source needs a citation. In the LRW writing test you cite in the text only, so getting the in-text citation right matters every time.",
  goalShort: "honest, correctly cited writing",
  image: "dec10/assets/lab/hero-apa.svg",
  imageAlt: "A journal article and two citation cards: Harris and Smith (2017) point out that …, and … (Harris and Smith, 2017).",
  finish: {"title":"Next lesson","text":"Reporting verbs"},
  sections: [
    {
      id: "lesson",
      number: "1",
      minutes: 56,
      tone: "clay",
      art: "dec10/assets/lab/s-learn.svg",
      title: "In-text citations",
      subtitle: "Warm-up · Learn · Practise · Use it",
      outcome: "cite a source inside your sentence or in brackets, for one, two or more authors, with the right APA 7 punctuation.",
      activities: [
        {
          id: "ct-warm",
          short: "Warm-up",
          minutes: 7,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-warm.svg",
          title: "Cite it or not?",
          goal: "Decide which sentences in an essay need a citation.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"You are writing about green jobs. Which of these need a citation?"},
            {
              type: "sort",
              id: "ct-w1-sort",
              title: "Cite it or not?",
              buckets: [{"label":"Cite it","text":"it came from a source","letter":"✓"},{"label":"No citation","text":"yours or common knowledge","letter":"–"}],
              items: [
                {"text":"a percentage from a government report","answer":0,"why":"Numbers and statistics always need a citation."},
                {"text":"an idea from a journal article, in your own words","answer":0,"why":"A paraphrase still uses someone else’s idea."},
                {"text":"a sentence copied word for word from an article","answer":0,"why":"A quote needs quotation marks, a citation <b>and</b> a page number."},
                {"text":"a point from the lecture in the listening test","answer":0,"why":"In the LRW test, the lecture is a source: cite it."},
                {"text":"your own opinion in the conclusion","answer":1},
                {"text":"Sydney is in Australia.","answer":1,"why":"Common knowledge: everyone knows it, and it is easy to check."}
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Why do academic writers cite? Write two reasons, then open the answer below."},
            {"type":"fields","fields":[{"id":"ct-w1-why","label":"Two reasons to cite","rows":2}]}
          ],
          answers: {
            items: [
              [
                "Why cite?",
                "To show where an idea comes from (honesty: no plagiarism), to give your argument support from experts, and to let your reader find the source."
              ]
            ]
          }
        },
        {
          id: "ct-learn",
          short: "Learn",
          minutes: 22,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-learn.svg",
          title: "APA 7 in-text citations, step by step",
          goal: "Learn every pattern you need for DEC10: two kinds of citation, authors, several sources, quotes and punctuation.",
          blocks: [
            {
              type: "key",
              title: "What is an in-text citation?",
              points: [
                "A short note in your sentence that shows <b>whose idea</b> it is and <b>when</b> it was published: the author’s <b>surname</b> and the <b>year</b>.",
                "You need one for every idea, number or quote from a source, also when you write it in your own words.",
                "In the LRW writing test you only cite in the text (no reference list). For the Interactive Presentation you also need a reference list."
              ]
            },
            {
              type: "rule",
              n: 1,
              title: "Non-integral: the source in brackets",
              explain: "The author’s surname and the year go <b>in brackets</b>, usually at the end of the sentence. The focus is on the <b>idea</b>. Use this most of the time (about 70–80% of your citations).",
              form: "… idea <b>(Surname, Year).</b>",
              examples: [
                ["ok","Green jobs are growing quickly <b>(Harris, 2017).</b>"],
                ["no","Green jobs are growing quickly <b>(Harris 2017).</b>","comma before the year"],
                ["no","Green jobs are growing quickly. <b>(Harris, 2017)</b>","the full stop goes after the bracket"]
              ],
              check: {"q":"Where does the full stop go? “… is rising (Lee, 2020)”","a":"After the bracket: <i>… is rising (Lee, 2020).</i>"}
            },
            {
              type: "rule",
              n: 2,
              title: "Integral: the author in your sentence",
              explain: "The author’s surname is part of your sentence, with the year in brackets right after it, usually followed by a <b>reporting verb</b>. The focus is on the <b>author</b>. Use it when who said it matters (about 20–30%).",
              form: "<b>Surname (Year)</b> + reporting verb + that … · <b>According to Surname (Year),</b> …",
              examples: [
                ["ok","<b>Harris (2017)</b> points out that green jobs are growing."],
                ["ok","<b>According to Harris (2017),</b> green jobs are growing."],
                ["no","<b>(Harris, 2017)</b> points out that green jobs are growing.","in your sentence: Harris (2017)"]
              ],
              note: "Reporting verbs (states, argues, found …) are the next lesson.",
              check: {"q":"Make it integral: “… are growing (Kennedy, 2021).”","a":"<i>Kennedy (2021) shows that … are growing.</i>"}
            },
            {
              type: "figure",
              src: "dec10/assets/lab/cite-anatomy.svg",
              alt: "Integral: Harris and Smith (2017) point out that … Non-integral: … (Harris & Smith, 2017).",
              caption: "The two kinds side by side."
            },
            {
              type: "rule",
              n: 3,
              title: "Two authors: and or &",
              explain: "Name both authors every time. In your sentence write <b>and</b>; inside brackets write <b>&amp;</b>.",
              form: "Integral: <b>Harris and Smith (2017)</b> · Non-integral: <b>(Harris &amp; Smith, 2017)</b>",
              examples: [
                ["ok","<b>Harris and Smith (2017)</b> argue that …"],
                ["ok","… is rising <b>(Harris &amp; Smith, 2017).</b>"],
                ["no","… is rising <b>(Harris and Smith, 2017).</b>","& inside brackets"],
                ["no","<b>Harris &amp; Smith (2017)</b> argue that …","and in the sentence"]
              ],
              note: "Two authors are a plural subject: <i>Harris and Smith (2017) <b>argue</b></i> (no -s).",
              check: {"q":"Brackets: Ahmed and Brown, 2021","a":"<b>(Ahmed &amp; Brown, 2021)</b>"}
            },
            {
              type: "rule",
              n: 4,
              title: "Three or more authors: et al.",
              explain: "For three or more authors, write only the <b>first</b> surname + <b>et al.</b> (= “and others”), from the very first citation. <b>et al.</b> always has a full stop.",
              form: "Integral: <b>Lee et al. (2020)</b> · Non-integral: <b>(Lee et al., 2020)</b>",
              examples: [
                ["ok","<b>Lee et al. (2020)</b> found that cotton uses a lot of water."],
                ["ok","… a lot of water <b>(Lee et al., 2020).</b>"],
                ["no","<b>Lee, Park and Cho (2020)</b> found …","APA 7 → Lee et al. (2020)"],
                ["no","<b>Collins et al (2006)</b> …","et al. needs a full stop"]
              ],
              note: "Older guides (APA 6) listed up to five names the first time. APA 7 always uses <b>et al.</b> for three or more.",
              check: {"q":"In brackets: Cho, Lim and Tan, 2018","a":"<b>(Cho et al., 2018)</b>"}
            },
            {
              type: "rule",
              n: 5,
              title: "Two or more sources for one idea",
              explain: "When several sources say the same thing, cite them together. In brackets: separate them with a <b>semicolon</b>, in <b>alphabetical</b> order. In your sentence: use <b>and</b>.",
              form: "<b>(Harris, 2017; Smith, 2019)</b> · <b>Harris (2017) and Smith (2019)</b> show …",
              examples: [
                ["ok","Several studies agree <b>(Harris, 2017; Smith, 2019).</b>"],
                ["ok","… <b>(Harris &amp; Smith, 2017; Kennedy, 2021).</b>","alphabetical: H before K"],
                ["no","<b>(Smith, 2019, Harris, 2017)</b>","semicolon, and alphabetical order"]
              ],
              check: {"q":"Order and punctuate: Smith 2019 + Brown 2015","a":"<b>(Brown, 2015; Smith, 2019)</b>"}
            },
            {
              type: "rule",
              n: 6,
              title: "An organisation as the author",
              explain: "When an organisation wrote the source, its name is the author. You can use a well-known abbreviation.",
              form: "<b>(UNEP, 2006)</b> · <b>UNEP (2006)</b> reports …",
              examples: [["ok","Poverty has increased in several countries <b>(UNEP, 2006).</b>"],["ok","The <b>World Health Organization (2021)</b> warns that …"]],
              note: "The first time, you can write the full name and the abbreviation: (United Nations Environment Programme [UNEP], 2006)."
            },
            {
              type: "rule",
              n: 7,
              title: "Direct quotes: add the page",
              explain: "If you copy the author’s <b>exact words</b>, use quotation marks and add the <b>page number</b>: p. for one page, pp. for several. In DEC10 assessments, paraphrase most of the time and quote only a few key words.",
              form: "“exact words” <b>(Surname, Year, p. 13)</b> · Surname (Year) … “exact words” <b>(p. 13)</b>",
              examples: [
                ["ok","Online bullying is “meanness and cruelty” <b>(Weinstein &amp; Selman, 2014, p. 13).</b>"],
                ["ok","Weinstein and Selman (2014) describe it as “meanness and cruelty” <b>(p. 13).</b>"],
                ["no","… “meanness and cruelty” (Weinstein &amp; Selman, 2014).","a quote needs the page"]
              ]
            },
            {
              type: "rule",
              n: 8,
              title: "A source quoted in another source",
              explain: "If you read Smith’s idea in a book by Harris (and did not read Smith), cite the source you read with <b>as cited in</b>.",
              form: "<b>(Smith, 2010, as cited in Harris, 2017)</b>",
              examples: [["ok","Fashion waste doubled in ten years <b>(Smith, 2010, as cited in Harris, 2017).</b>"]],
              note: "In the LRW test, cite the text or lecture you actually used."
            },
            {
              type: "model",
              title: "APA 7 in-text citations",
              rows: [
                ["One author","<span class=\"ct-row\"><b>In the sentence:</b> Harris (2017) points out …<br><b>In brackets:</b> … (Harris, 2017).</span>"],
                [
                  "Two authors",
                  "<span class=\"ct-row\"><b>In the sentence:</b> Harris and Smith (2017) point out …<br><b>In brackets:</b> … (Harris &amp; Smith, 2017).</span>"
                ],
                [
                  "Three or more",
                  "<span class=\"ct-row\"><b>In the sentence:</b> Harris et al. (2011) point out …<br><b>In brackets:</b> … (Harris et al., 2011).</span>"
                ],
                [
                  "Two sources",
                  "<span class=\"ct-row\"><b>In the sentence:</b> Harris (2017) and Smith (2019) point out …<br><b>In brackets:</b> … (Harris, 2017; Smith, 2019).</span>"
                ],
                [
                  "Two sources, one with two authors",
                  "<span class=\"ct-row\"><b>In the sentence:</b> Harris and Smith (2017) and Kennedy (2021) point out …<br><b>In brackets:</b> … (Harris &amp; Smith, 2017; Kennedy, 2021).</span>"
                ],
                ["An organisation","<span class=\"ct-row\"><b>In the sentence:</b> UNEP (2006) reports …<br><b>In brackets:</b> … (UNEP, 2006).</span>"],
                [
                  "A direct quote",
                  "<span class=\"ct-row\"><b>In the sentence:</b> Weinstein and Selman (2014) call it “meanness and cruelty” (p. 13).<br><b>In brackets:</b> … “meanness and cruelty” (Weinstein &amp; Selman, 2014, p. 13).</span>"
                ]
              ]
            },
            {
              type: "model",
              title: "Punctuation checklist",
              rows: [
                ["Comma","before the year: (Harris<b>,</b> 2017)"],
                ["& / and","& in brackets · and in the sentence"],
                ["et al.","three or more authors, always with a full stop"],
                ["Semicolon","between sources: (Harris, 2017<b>;</b> Smith, 2019)"],
                ["Page","quotes only: p. 13 · pp. 13–14"],
                ["Full stop","after the bracket: … (Harris, 2017)<b>.</b>"]
              ]
            }
          ]
        },
        {
          id: "ct-practise",
          short: "Practise",
          minutes: 17,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Controlled practice: recognise → choose → correct",
          goal: "Three short parts. Do them in order.",
          blocks: [
            {"type":"part","n":1,"title":"Recognise","goal":"Sort the citations: integral or non-integral?"},
            {
              type: "sort",
              id: "ct-l1-sort",
              title: "Integral or non-integral?",
              buckets: [{"label":"Integral","text":"names in the sentence","letter":"I"},{"label":"Non-integral","text":"names in brackets","letter":"N"}],
              items: [
                {"text":"Harris (2017) points out that …","answer":0},
                {"text":"… is rising (Harris, 2017).","answer":1},
                {"text":"Harris and Smith (2017) argue that …","answer":0},
                {"text":"… (Harris & Smith, 2017).","answer":1},
                {"text":"Harris et al. (2011) found that …","answer":0},
                {"text":"… (Harris et al., 2011).","answer":1},
                {"text":"According to Kennedy (2021), …","answer":0},
                {"text":"… (Harris, 2017; Smith, 2019).","answer":1}
              ]
            },
            {"type":"part","n":2,"title":"Choose","goal":"Fill in the punctuation, then switch between the two kinds."},
            {
              type: "cloze",
              id: "ct-p1-cl",
              title: "Citation punctuation",
              list: true,
              options: [["&","and"],["and","&"],[",",";"],[";",","],["et al.","et al"],["p. 13","page 13"],[".",","]],
              text: "Green jobs are growing quickly (Harris {{1}} Smith, 2017).\nHarris {{2}} Smith (2017) point out that green jobs are growing.\nWater use is rising (Kennedy{{3}} 2021).\nSeveral studies agree (Harris, 2017{{4}} Smith, 2019).\nCollins {{5}} (2006) found positive effects of exercise programmes.\nOnline bullying represents “meanness and cruelty” (Weinstein & Selman, 2014, {{6}}).\nForest fires in Siberia have increased (Radford, 2005){{7}}",
              answers: ["&","and",",",";","et al.","p. 13","."]
            },
            {
              type: "quiz",
              id: "ct-p2-q",
              title: "Integral ↔ non-integral",
              items: [
                {
                  q: "<i>Harris and Smith (2017) point out that green jobs are growing.</i> → non-integral:",
                  options: ["Green jobs are growing (Harris and Smith, 2017).","Green jobs are growing (Harris & Smith, 2017).","Green jobs are growing (Harris & Smith 2017)."],
                  answer: "Green jobs are growing (Harris & Smith, 2017).",
                  why: "<b>&amp;</b> and a comma before the year."
                },
                {
                  q: "<i>… (Lee et al., 2020).</i> → integral:",
                  options: ["Lee et al. (2020) found that …","Lee et al., (2020) found that …","Lee, Park and Cho (2020) found that …"],
                  answer: "Lee et al. (2020) found that …",
                  why: "Three or more authors: <b>et al.</b>, no comma before the bracket."
                },
                {
                  q: "<i>Brown (1997) and Thompson (2002) mention groundwater pollution.</i> → non-integral:",
                  options: ["… (Brown, 1997, Thompson, 2002).","… (Brown, 1997; Thompson, 2002).","… (Brown 1997; Thompson 2002)."],
                  answer: "… (Brown, 1997; Thompson, 2002).",
                  why: "A semicolon between sources, a comma before each year."
                },
                {
                  q: "<i>… (Swales, 2002).</i> → integral:",
                  options: ["Swales (2002) points out that …","Swales, 2002 points out that …","(Swales, 2002) points out that …"],
                  answer: "Swales (2002) points out that …",
                  why: "Name in the sentence, year in brackets."
                },
                {
                  q: "Three authors: Harris, Smith and Kennedy (2011). In APA 7 the first citation is:",
                  options: ["Harris, Smith and Kennedy (2011)","Harris et al. (2011)","Harris, Smith et al. (2011)"],
                  answer: "Harris et al. (2011)",
                  why: "APA 7: three or more authors → <b>et al.</b> every time."
                }
              ]
            },
            {"type":"part","n":3,"title":"Correct","goal":"Find the mistakes, then write the correct citations."},
            {
              type: "spot",
              id: "ct-p3-spot",
              title: "Tap the mistake",
              label: "mistake",
              paras: [
                "Green jobs are growing [[(Harris]] [[*and]] Smith, [[2017)]].",
                "[[Collins]] [[*et al]] (2006) found positive [[effects]].",
                "Water use is rising [[(Kennedy]] [[*2021)]].",
                "[[Harris]] [[*&]] Smith (2017) point out that jobs are [[changing]].",
                "Several studies agree [[(Harris,]] [[*2017. Smith,]] [[2019)]].",
                "Fashion uses a lot of water [[*(Lee, Park, and Cho, 2020)]]."
              ]
            },
            {
              type: "rewrite",
              id: "ct-p4-rw",
              title: "Write it correctly",
              hint: "Follow the instruction in brackets.",
              items: [
                {
                  q: "Nguyen (2022) found that most clothes are worn fewer than ten times. <i>(make it non-integral)</i>",
                  accept: ["Most clothes are worn fewer than ten times (Nguyen, 2022)."],
                  model: "Most clothes are worn fewer than ten times (Nguyen, 2022)."
                },
                {
                  q: "Ahmed and Brown (2021) argue that rental can cut emissions. <i>(make it non-integral)</i>",
                  accept: ["Rental can cut emissions (Ahmed & Brown, 2021)."],
                  model: "Rental can cut emissions (Ahmed & Brown, 2021)."
                },
                {
                  q: "Lee, Park and Cho (2020) report that cotton needs a lot of water. <i>(correct it for APA 7)</i>",
                  accept: ["Lee et al. (2020) report that cotton needs a lot of water."],
                  model: "Lee et al. (2020) report that cotton needs a lot of water."
                },
                {
                  q: "Several studies agree (Smith 2019, Brown 2015). <i>(correct the brackets)</i>",
                  accept: ["Several studies agree (Brown, 2015; Smith, 2019)."],
                  model: "Several studies agree (Brown, 2015; Smith, 2019)."
                },
                {
                  q: "Many brands use “greenwashing” (Lee, 2019). <i>(it is a quote from page 45: add the page)</i>",
                  accept: ["Many brands use “greenwashing” (Lee, 2019, p. 45)."],
                  model: "Many brands use “greenwashing” (Lee, 2019, p. 45)."
                }
              ]
            }
          ],
          answers: {
            items: [
              ["1","(Harris <b>&amp;</b> Smith, 2017)"],
              ["2","Collins <b>et al.</b> (2006)"],
              ["3","(Kennedy<b>,</b> 2021)"],
              ["4","Harris <b>and</b> Smith (2017)"],
              ["5","(Harris, 2017<b>;</b> Smith, 2019)"],
              ["6","(Lee <b>et al.</b>, 2020)"]
            ]
          }
        },
        {
          id: "ct-use",
          short: "Use it",
          minutes: 10,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-use.svg",
          title: "Sustainable fashion: use the sources",
          goal: "Write 4–5 sentences about fast fashion. Use all three sources. Use at least one integral and two non-integral citations.",
          blocks: [
            {
              type: "cards",
              title: "Practice sources (invented for this exercise)",
              items: [
                {"label":"Source A · Nguyen (2022)","text":"Most clothes in Australia are worn fewer than ten times before they are thrown away."},
                {"label":"Source B · Lee, Park and Cho (2020)","text":"Producing one cotton T-shirt can use about 2,700 litres of water."},
                {
                  label: "Source C · Ahmed and Brown (2021)",
                  text: "Clothing rental services could cut wardrobe emissions, but only if customers keep clothes longer."
                }
              ]
            },
            {
              type: "detect",
              id: "ct-u1-dt",
              title: "My paragraph",
              label: "Citation checker",
              hint: "The lights check the form of your citations. Red chips show common mistakes.",
              checks: [
                {"label":"Integral: Name (year)","color":"#2b776e","any":["/[A-Z][a-z]+( and [A-Z][a-z]+| et al\\.)? \\(\\d{4}\\)/u"]},
                {"label":"Non-integral: (Name, year)","color":"#b0512a","any":["/\\([A-Z][a-z]+( & [A-Z][a-z]+| et al\\.)?, \\d{4}\\)/u"]},
                {"label":"et al.","color":"#3a58a0","any":["et al."]},
                {"label":"Two sources: ;","color":"#7a4a8c","any":["/\\d{4}; [A-Z]/u"]}
              ],
              avoid: [
                {"label":"“and” in brackets? Use &","any":["/\\([A-Z][a-z]+ and [A-Z][a-z]+, \\d{4}\\)/u"]},
                {"label":"& in the sentence? Use and","any":["/[A-Z][a-z]+ & [A-Z][a-z]+ \\(\\d{4}\\)/u"]},
                {"label":"et al without a full stop?","any":["/et al(?!\\.)/"]},
                {"label":"No comma before the year?","any":["/\\([A-Z][a-z]+( & [A-Z][a-z]+| et al\\.)? \\d{4}\\)/u"]},
                {"label":"Three names? Use et al.","any":["Lee, Park and Cho","Lee, Park & Cho","Lee, Park, and Cho"]}
              ],
              items: [
                {
                  rows: 7,
                  placeholder: "Fast fashion is a serious problem. Nguyen (2022) …",
                  model: "Fast fashion is a serious environmental problem. <b>Nguyen (2022)</b> points out that most clothes in Australia are worn fewer than ten times. Their production also uses a great deal of water: a single cotton T-shirt can need about 2,700 litres <b>(Lee et al., 2020)</b>. One possible solution is clothing rental <b>(Ahmed &amp; Brown, 2021)</b>. However, <b>Ahmed and Brown (2021)</b> warn that rental only helps if customers keep clothes for longer."
                }
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Check every citation against the list in Learn: names, &amp; or and, comma, year, full stop."},
            {
              type: "checklist",
              id: "ct-u1-can",
              title: "Can you do it?",
              items: [
                "I cite every idea, number and quote that comes from a source.",
                "I use and in my sentence and & in brackets.",
                "I use et al. for three or more authors.",
                "I put a semicolon between two sources and a page number with a quote."
              ]
            },
            {
              type: "tip",
              text: "In the LRW writing test you cite <b>in the text only</b> (no reference list): cite the lecture and Texts A, B and C every time you use them. For the Interactive Presentation you also need a reference list on your slides."
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["in-text citation","a short note in your sentence that shows where an idea comes from","(Harris, 2017)"],
    ["integral citation","a citation where the author’s name is part of your sentence","Harris (2017) argues that …"],
    ["non-integral citation","a citation where the author and year are in brackets","… (Harris, 2017)."],
    ["et al.","“and others”: used for three or more authors in APA 7","(Lee et al., 2020)"],
    ["ampersand","the symbol &, used for “and” inside APA brackets","(Harris & Smith, 2017)"]
  ]
};
