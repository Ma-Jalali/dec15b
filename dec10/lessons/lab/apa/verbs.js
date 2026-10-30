/* DEC10 · Language Lab · APA 2 — Reporting verbs: neutral (discourse) verbs and evaluative verbs, their meaning, grammar and tense.
   Source: the teacher's "DEC 10 Citations" document (Table 1 Common discourse-related reporting verbs; Table 2 Common evaluative reporting verbs).
   One page, four tabs: Warm-up · Learn · Practise · Use it (built for self-study). */
window.DEC15_LESSON = {
  id: "d10lab-verbs",
  week: null,
  day: null,
  title: "Reporting verbs",
  duration: "About 50 minutes",
  questionKind: "Can-do",
  questionLabel: "By the end of this lesson you can",
  question: "choose a reporting verb that says exactly what a source does — and what you think of it.",
  journey: "“Smith says” tells the reader very little. “Smith argues”, “Smith found” and “Smith claims” each say something different. Learn what each verb means, how to use it in a sentence, and how it shows your own position.",
  goalShort: "precise, critical use of sources",
  image: "dec10/assets/lab/hero-apa.svg",
  imageAlt: "A journal article and two citation cards: Harris and Smith (2017) point out that …",
  finish: {"title":"More soon","text":"New lessons are on the way"},
  sections: [
    {
      id: "lesson",
      number: "1",
      minutes: 51,
      tone: "clay",
      art: "dec10/assets/lab/s-learn.svg",
      title: "Reporting verbs",
      subtitle: "Warm-up · Learn · Practise · Use it",
      outcome: "choose a reporting verb that says exactly what a source does — and what you think of it.",
      activities: [
        {
          id: "rv-warm",
          short: "Warm-up",
          minutes: 7,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-warm.svg",
          title: "Five ways to report one idea",
          goal: "Rank the sentences: how much does the writer accept the idea?",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Read the five sentences. They report the same idea with different verbs. Put them in order: the writer accepts the idea most → the writer doubts it most."
            },
            {
              type: "order",
              id: "rv-w1-order",
              title: "Accepts → doubts",
              ends: ["The writer accepts it","The writer doubts it"],
              items: [
                "Garcia (2020) <b>demonstrates</b> that rental reduces waste.",
                "Garcia (2020) <b>points out</b> that rental reduces waste.",
                "Garcia (2020) <b>argues</b> that rental reduces waste.",
                "Garcia (2020) <b>claims</b> that rental reduces waste.",
                "Garcia (2020) <b>alleges</b> that rental reduces waste."
              ],
              why: "<b>demonstrates</b>: shown with evidence, so the writer accepts it. <b>points out</b>: the writer agrees it is a fact worth noticing. <b>argues</b>: a position the writer reports, without judging it. <b>claims</b>: the writer keeps some distance. <b>alleges</b>: no proof, so the writer doubts it."
            },
            {
              type: "do",
              n: 2,
              who: "alone",
              text: "Think: which verb would you use for a fact you trust? Which for an idea you will argue against? Write your answer."
            },
            {"type":"fields","fields":[{"id":"rv-w1-think","label":"A fact I trust → … · An idea I will argue against → …","rows":2}]}
          ],
          answers: {
            items: [
              [
                "A fact I trust · an idea I will argue against",
                "A fact you trust: <b>demonstrates, shows, found, points out</b>. An idea you will argue against: <b>claims, alleges, contends</b>, so the reader can see your doubt before you disagree."
              ]
            ]
          }
        },
        {
          id: "rv-learn",
          short: "Learn",
          minutes: 18,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-learn.svg",
          title: "Reporting verbs, step by step",
          goal: "Learn what reporting verbs do, which verb means what, how strong each one is, and the grammar and tense to use.",
          blocks: [
            {
              type: "key",
              title: "What do reporting verbs do?",
              points: [
                "They introduce a source: <i>Harris (2017) <b>argues</b> that …</i>",
                "They tell the reader <b>what</b> the source does: states a fact, presents an argument, reports a finding, compares, lists …",
                "Some also show <b>what you think</b>: <i>claims</i> or <i>alleges</i> tell the reader you are not convinced. Avoid <i>says</i>: it tells the reader nothing."
              ]
            },
            {
              type: "rule",
              n: 1,
              title: "Verbs that present information",
              explain: "Use these to report what a source tells us, without judging it.",
              form: "<b>state, report, note, point out, mention, describe, explain</b> + that … / + noun",
              examples: [
                ["ok","Radford (2005) <b>states</b> that forest fires in Siberia have increased tenfold.","presented as a fact"],
                ["ok","UNEP (2006) <b>reports</b> that poverty has increased.","makes known a situation"],
                ["ok","Swales (2002) <b>points out</b> that there is a gap in the material.","draws attention to a point"],
                ["ok","Brown (1997) <b>mentions</b> the role of agriculture.","deals with it only briefly"]
              ],
              note: "Small difference: <b>point out</b> shows you agree it is true and important; <b>mention</b> shows it is only a small part of the source.",
              check: {"q":"Which verb for a point the source gives only one line to? (emphasises / mentions)","a":"<b>mentions</b>."}
            },
            {
              type: "rule",
              n: 2,
              title: "Verbs that present an argument",
              explain: "Use these when the source takes a <b>position</b> that others could disagree with.",
              form: "<b>argue, suggest, propose, conclude, emphasise</b> + that … (emphasise also + noun)",
              examples: [
                ["ok","Branch (2009) <b>argues</b> that meat has long been a symbol of strength.","a position"],
                ["ok","Poe (2009) <b>suggests</b> that instructors ask students to write abstracts.","a careful proposal"],
                ["ok","Toso (2012) <b>concludes</b> that states are not enforcing the law.","the final result of the source’s thinking"],
                ["ok","Shiva (2002) <b>emphasises</b> the need for sustainable water use.","the main point"]
              ],
              check: {"q":"Which verb gives the final result of a long study? (suggests / concludes)","a":"<b>concludes</b>."}
            },
            {
              type: "rule",
              n: 3,
              title: "Verbs that report research findings",
              explain: "Use these for what a study <b>discovered</b> or <b>showed</b> with evidence.",
              form: "<b>find, show, demonstrate, reveal</b> + that … / + noun",
              examples: [
                ["ok","Collins et al. (2006) <b>found</b> positive effects of exercise programmes."],
                ["ok","Garcia (2020) <b>showed</b> that rental users bought fewer clothes."],
                [
                  "ok",
                  "Tad and Collin (2015) <b>reveal</b> that many environmental problems are social problems.",
                  "reveal = information that was hidden or not well known"
                ]
              ],
              note: "<b>find</b> is almost always in the past (<b>found</b>) or present perfect (<b>have found</b>)."
            },
            {
              type: "rule",
              n: 4,
              title: "Verbs that show your view (evaluative verbs)",
              explain: "These verbs show how much <b>you</b> trust the source. Choosing them is a small act of critical thinking.",
              form: "Strong acceptance: <b>demonstrates, shows</b> → neutral: <b>argues, states</b> → distance: <b>claims, maintains</b> → doubt: <b>alleges</b>",
              examples: [
                ["ok","George (2003) <b>claims</b> the project may cause huge subsidence.","you keep some distance"],
                ["ok","Cooper and Davy (1999) <b>allege</b> that governments understate pollution.","a claim without proof"],
                ["ok","Mitch and Tyler (2010) <b>assume</b> that a weaker currency makes firms competitive.","treated as a fact, but it may not be"],
                ["ok","Otchet (2002) <b>implies</b> that water is being mismanaged.","said indirectly"],
                ["ok","Cuvier (2012) <b>exaggerates</b> the impact of the media.","too much emphasis"],
                ["ok","Marcus (2008) <b>contends</b> that manufacturers already deal with packaging.","argues strongly; writers often use it before they disagree"]
              ],
              check: {
                q: "A company says its product “ends fast fashion” but gives no data. Which verb? (demonstrates / claims)",
                a: "<b>claims</b>: you are not convinced."
              }
            },
            {
              type: "rule",
              n: 5,
              title: "Grammar: that-clause or noun?",
              explain: "Most reporting verbs take <b>that</b> + a full clause. Some take a <b>noun</b> directly, and some need a <b>preposition</b>. Never add <i>about</i> after <i>discuss</i> or <i>mention</i>.",
              form: "verb + <b>that</b> + subject + verb: state, argue, claim, conclude, report · verb + <b>noun</b>: discuss, list, mention, emphasise, evaluate · verb + noun + <b>prep</b>: compare X <b>with</b> Y, refer <b>to</b> X",
              examples: [
                ["ok","Radford (2005) states <b>that</b> forest fires have increased."],
                ["ok","Dietz (2003) <b>lists</b> six criteria."],
                ["ok","Frank (2013) <b>compares</b> rich countries <b>with</b> poor ones."],
                ["no","Van den Berg et al. (2016) <b>discuss about</b> the effects.","→ discuss the effects"],
                ["no","Smith (2013) <b>refers</b> the Climate Change Act.","→ refers to"]
              ],
              check: {"q":"Correct it: “Shiva (2002) emphasises on the need for clean water.”","a":"Shiva (2002) <b>emphasises</b> the need for clean water."}
            },
            {
              type: "rule",
              n: 6,
              title: "Which tense?",
              explain: "Choose the tense for the job, and be consistent inside one paragraph.",
              form: "<b>Present simple</b>: what a source says or argues · <b>Past simple</b>: what one study found · <b>Present perfect</b>: research in general",
              examples: [
                ["ok","Smith (2019) <b>argues</b> that rental reduces waste.","the argument is still there"],
                ["ok","Collins et al. (2006) <b>found</b> positive effects.","one finished study"],
                ["ok","Many studies <b>have found</b> that fast fashion increases waste.","research in general"],
                ["no","Collins et al. (2006) <b>finds</b> positive effects.","→ found"]
              ],
              note: "One author → verb + <b>-s</b>: Smith (2019) argue<b>s</b>. Two or more authors → no -s: Harris and Smith (2017) argue."
            },
            {
              type: "language",
              title: "In real sentences",
              groups: [
                {
                  label: "Presenting",
                  phrases: [
                    "Radford (2005) <b>states</b> that forest fires in Siberia have increased tenfold in 20 years.",
                    "Branch (2009) <b>argues</b> that meat has long been a symbol of strength and dominance.",
                    "Swales (2002) <b>points out</b> that there is a gap in the available material.",
                    "UNEP (2006) <b>reports</b> that poverty has increased in several African countries."
                  ]
                },
                {
                  label: "Research",
                  phrases: [
                    "Collins et al. (2006) <b>found</b> positive effects of diet and exercise programmes.",
                    "Frank (2013) <b>compares</b> the consumption of wealthier countries with that of poorer ones.",
                    "Dietz (2003) <b>lists</b> six environmental quality criteria.",
                    "Van den Berg et al. (2016) <b>discuss</b> the effects of nature on health."
                  ]
                },
                {
                  label: "Brief or final",
                  phrases: [
                    "Brown (1997) <b>mentions</b> the role of agriculture in polluting groundwater.",
                    "Thompson (2002) <b>notes</b> that rising sea levels may make aquifers salty.",
                    "Toso (2012) <b>concludes</b> that states are not enforcing the law."
                  ]
                },
                {
                  label: "Proposing",
                  phrases: ["Poe (2009) <b>suggests</b> that instructors ask students to write abstracts.","Shiva (2002) <b>emphasises</b> the need for sustainable water use."]
                }
              ]
            },
            {
              type: "model",
              title: "Choosing a reporting verb",
              rows: [
                ["Present information","states, reports, notes, points out, mentions, describes"],
                ["Present an argument","argues, suggests, proposes, concludes, emphasises"],
                ["Report research","found, showed, demonstrates, reveals"],
                ["Show your view","claims, maintains, alleges, assumes, implies, exaggerates, contends"],
                ["Avoid","says, talks about, writes that"]
              ]
            }
          ]
        },
        {
          id: "rv-practise",
          short: "Practise",
          minutes: 16,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Controlled practice: recognise → choose → correct",
          goal: "Three short parts. Do them in order.",
          blocks: [
            {"type":"part","n":1,"title":"Recognise","goal":"Match each verb to its use, then sort the verbs by their grammar."},
            {
              type: "match",
              id: "rv-l1-m",
              title: "Verb → use",
              left: ["state","argue","point out","find","compare","list","discuss","mention","conclude","emphasise"],
              right: [
                "present something as a fact",
                "present someone’s position on an issue",
                "draw attention to a particular point or fact",
                "discover something as a result of research",
                "look for differences and similarities",
                "set out a number of items",
                "examine an issue or topic",
                "deal with something very briefly",
                "give the final result of the source’s thinking",
                "show the source’s most important point"
              ]
            },
            {
              type: "sort",
              id: "rv-l2-sort",
              title: "Which pattern does the verb take?",
              buckets: [
                {"label":"+ that + clause","text":"states that forests …","letter":"that"},
                {"label":"+ noun (no that)","text":"discusses the effects …","letter":"N"}
              ],
              items: [
                {"text":"state","answer":0},
                {"text":"argue","answer":0},
                {"text":"point out","answer":0},
                {"text":"conclude","answer":0},
                {"text":"report","answer":0},
                {"text":"discuss","answer":1,"why":"discuss + noun. Never <s>discuss about</s>."},
                {"text":"list","answer":1},
                {"text":"compare … with","answer":1},
                {"text":"emphasise","answer":1,"why":"emphasise + noun. Never <s>emphasise on</s>. (You can also say <i>emphasise that …</i>.)"},
                {"text":"refer to","answer":1,"why":"refer <b>to</b> + noun."}
              ]
            },
            {"type":"part","n":2,"title":"Choose","goal":"Choose the verb that fits the meaning, then the correct grammar."},
            {
              type: "cloze",
              id: "rv-p1-cl",
              title: "Which verb?",
              list: true,
              options: [
                ["lists","argues","reveals"],
                ["compares","mentions","alleges"],
                ["found","find","finds"],
                ["mentions","emphasises","concludes"],
                ["concludes","lists","compares"],
                ["emphasises","alleges","mentions"],
                ["allege","reveal","demonstrate"],
                ["reveal","list","compare"]
              ],
              text: "Dietz (2003) {{1}} six environmental quality criteria.\nFrank (2013) {{2}} the consumption patterns of richer countries with those of poorer ones.\nCollins et al. (2006) {{3}} positive effects of programmes that include diet or exercise.\nBrown (1997) only briefly {{4}} the role of agriculture in polluting groundwater.\nAfter five years of data, Toso (2012) {{5}} that states are not enforcing the law.\nShiva (2002) {{6}} the need for ecologically sustainable water use: it is her main point.\nCooper and Davy (1999) {{7}} that governments hide the extent of water pollution, but they give no evidence.\nTad and Collin (2015) {{8}} that many environmental problems are, in fact, social problems.",
              answers: ["lists","compares","found","mentions","concludes","emphasises","allege","reveal"],
              why: [
                "Six items → <b>lists</b>.",
                "with those of … → <b>compares</b> … with.",
                "A study’s finding → past: <b>found</b>.",
                "only briefly → <b>mentions</b>.",
                "After five years, the final result → <b>concludes</b>.",
                "her main point → <b>emphasises</b>.",
                "no evidence → <b>allege</b>.",
                "not widely known before → <b>reveal</b>."
              ]
            },
            {
              type: "quiz",
              id: "rv-p2-q",
              title: "Grammar check",
              items: [
                {
                  q: "Van den Berg et al. (2016) …",
                  options: ["discuss about the effects of nature on health.","discuss the effects of nature on health.","discuss that nature affects health."],
                  answer: "discuss the effects of nature on health.",
                  why: "<b>discuss</b> + noun, no <i>about</i>."
                },
                {
                  q: "Shiva (2002) …",
                  options: ["emphasises on the need for sustainable water use.","emphasises the need for sustainable water use.","emphasise the need for sustainable water use."],
                  answer: "emphasises the need for sustainable water use.",
                  why: "<b>emphasise</b> + noun; one author → <b>-s</b>."
                },
                {
                  q: "Smith (2013) …",
                  options: ["refers the 2011 Climate Change Act.","refers to the 2011 Climate Change Act.","refers about the 2011 Climate Change Act."],
                  answer: "refers to the 2011 Climate Change Act.",
                  why: "<b>refer to</b>."
                },
                {
                  q: "Collins et al. (2006) …",
                  options: ["finds positive effects of exercise.","found positive effects of exercise.","are finding positive effects of exercise."],
                  answer: "found positive effects of exercise.",
                  why: "A finding: past simple (or <i>have found</i>)."
                },
                {
                  q: "Radford (2005) …",
                  options: ["states that forest fires have increased.","states forest fires that have increased.","states about forest fires increased."],
                  answer: "states that forest fires have increased.",
                  why: "<b>state</b> + <b>that</b> + a full clause."
                },
                {
                  q: "Two authors, Weinstein and Selman (2014), …",
                  options: ["claims that online bullying is cruel.","claim that online bullying is cruel.","claiming that online bullying is cruel."],
                  answer: "claim that online bullying is cruel.",
                  why: "Two authors = plural subject: <b>claim</b> (no -s). See the lesson <i>Is or are?</i>"
                }
              ]
            },
            {"type":"part","n":3,"title":"Correct","goal":"Each sentence has one mistake with the reporting verb. Write the correct sentence."},
            {
              type: "rewrite",
              id: "rv-p3-rw",
              title: "Correct the sentence",
              hint: "Fix the verb, its grammar or its tense.",
              items: [
                {
                  q: "Shiva (2002) emphasises on the need for clean water.",
                  accept: ["Shiva (2002) emphasises the need for clean water."],
                  model: "Shiva (2002) emphasises the need for clean water."
                },
                {
                  q: "Brown (1997) mentions about the role of agriculture.",
                  accept: ["Brown (1997) mentions the role of agriculture."],
                  model: "Brown (1997) mentions the role of agriculture."
                },
                {
                  q: "Collins et al. (2006) finds positive effects of exercise.",
                  accept: ["Collins et al. (2006) found positive effects of exercise.","Collins et al. (2006) have found positive effects of exercise."],
                  model: "Collins et al. (2006) found positive effects of exercise.",
                  why: "A finding → past."
                },
                {
                  q: "Harris and Smith (2017) argues that green jobs are growing.",
                  accept: ["Harris and Smith (2017) argue that green jobs are growing."],
                  model: "Harris and Smith (2017) argue that green jobs are growing.",
                  why: "Two authors → argue."
                },
                {
                  q: "Frank (2013) compares rich countries and poor ones.",
                  accept: ["Frank (2013) compares rich countries with poor ones."],
                  model: "Frank (2013) compares rich countries with poor ones.",
                  why: "compare X with Y."
                }
              ]
            }
          ]
        },
        {
          id: "rv-use",
          short: "Use it",
          minutes: 10,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-use.svg",
          title: "Is clothing rental the answer?",
          goal: "Write 4–5 sentences that report the three sources. Use a different verb for each, and one evaluative verb that shows your view.",
          blocks: [
            {
              type: "cards",
              title: "Practice sources (invented for this exercise)",
              items: [
                {"label":"Garcia (2020)","text":"A two-year study of 400 customers: rental users bought 30% fewer new clothes."},
                {"label":"Rental Co. (2023)","text":"A company report: “Our service will end fast fashion.” No data is given."},
                {"label":"Ahmed and Brown (2021)","text":"Delivery and dry cleaning add emissions; rental only helps if people keep clothes longer."}
              ]
            },
            {
              type: "detect",
              id: "rv-u1-dt",
              title: "My source summary",
              label: "Writing studio",
              hint: "The lights show what kind of verbs you used. Red chips show common grammar mistakes.",
              checks: [
                {
                  label: "Research verb (found, shows …)",
                  color: "#2b776e",
                  any: ["/\\b(found|has found|have found|shows|show|showed|demonstrates|demonstrate|demonstrated|reports|report|reported)\\b/"]
                },
                {
                  label: "Position verb (argues, points out …)",
                  color: "#3a58a0",
                  any: ["/\\b(argues|argue|points out|point out|states|state|suggests|suggest|notes|note|emphasises|emphasise|emphasizes|emphasize|concludes|conclude)\\b/"]
                },
                {
                  label: "Evaluative verb (claims, alleges …)",
                  color: "#7a4a8c",
                  any: ["/\\b(claims|claim|alleges|allege|assumes|assume|implies|imply|exaggerates|exaggerate|contends|contend|maintains|maintain)\\b/"]
                },
                {"label":"+ that + clause","color":"#b0512a","any":["/\\b\\w+s? that \\w+/"]},
                {"label":"Citation (Name, year)","color":"#985c0e","any":["/[A-Z][a-z]+\\.? ?(and [A-Z][a-z]+ )?\\(\\d{4}\\)|\\([A-Z][^()]*, \\d{4}\\)/u"]}
              ],
              avoid: [
                {"label":"discuss / mention about?","any":["/\\b(discuss|discusses|discussed|mention|mentions|mentioned) about\\b/"]},
                {"label":"emphasise on?","any":["/\\bemphasi[sz](e|es|ed) on\\b/"]},
                {
                  label: "two authors + verb-s?",
                  any: ["/[A-Z][a-z]+ and [A-Z][a-z]+ \\(\\d{4}\\) (argues|claims|states|shows|suggests|points|notes|finds|warns)\\b/u"]
                },
                {"label":"“says”? Choose a precise verb","any":["/\\b(says|said)\\b/"]}
              ],
              items: [
                {
                  rows: 7,
                  placeholder: "Garcia (2020) found that …",
                  model: "<b>Garcia (2020) found</b> that rental users bought 30% fewer new clothes over two years. A rental company even <b>claims</b> that its service “will end fast fashion” (Rental Co., 2023), but it gives no data. <b>Ahmed and Brown (2021) point out</b> that delivery and dry cleaning add emissions. They <b>conclude</b> that rental only helps if customers keep clothes for longer. Therefore, rental is a useful step, not a complete answer."
                }
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Check your own: for each reporting verb, ask: is it true to the source? Which verb shows your own view?"},
            {
              type: "checklist",
              id: "rv-u1-can",
              title: "Can you do it?",
              items: [
                "I choose a verb that says exactly what the source does.",
                "I use that + clause with state, argue, claim, conclude …",
                "I use discuss, list and compare with a noun.",
                "I use found / have found for research findings.",
                "I use an evaluative verb when I want to show doubt."
              ]
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["reporting verb","a verb that introduces what a source says or does","argues, states, found"],
    ["evaluative verb","a reporting verb that also shows the writer’s opinion of the source","claims, alleges, exaggerates"],
    ["tentative","careful, not completely certain","“suggests” is more tentative than “shows”"]
  ]
};
