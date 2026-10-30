/* DEC10 · Language Lab · Grammar 3 — Linking ideas: coordinating conjunctions (FANBOYS, parallel structure) and conjunctive adverbs.
   Source: the teacher's "Interactive Grammar" document (Connectors · Group 1 and Group 2), set in the Week 3 topic (green jobs).
   One page, four tabs: Warm-up · Learn · Practise · Use it (built for self-study). */
window.DEC15_LESSON = {
  id: "d10lab-link",
  week: null,
  day: null,
  title: "Linking ideas",
  duration: "About 55 minutes",
  questionKind: "Can-do",
  questionLabel: "By the end of this lesson you can",
  question: "join ideas with and, but, so … and with However, Therefore, In addition … — with the right grammar and the right punctuation.",
  journey: "Two families of linkers do two different jobs. One joins words or sentences inside one sentence; the other links two separate sentences. Learn both, and stop the most common punctuation error.",
  goalShort: "clear, well-linked paragraphs",
  image: "dec10/assets/lab/hero-grammar.svg",
  imageAlt: "Sentence tiles and floating chips: However, and, which, a semicolon.",
  finish: {"title":"Next lesson","text":"Relative clauses"},
  sections: [
    {
      id: "lesson",
      number: "1",
      minutes: 55,
      tone: "teal",
      art: "dec10/assets/lab/s-learn.svg",
      title: "Linking ideas",
      subtitle: "Warm-up · Learn · Practise · Use it",
      outcome: "join ideas with and, but, so … and with However, Therefore, In addition … — with the right grammar and the right punctuation.",
      activities: [
        {
          id: "lk-warm",
          short: "Warm-up",
          minutes: 8,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-warm.svg",
          title: "Two paragraphs about green jobs",
          goal: "Decide which paragraph is easier to read, and find what makes it easier.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Read paragraph A, then paragraph B. Which one is easier to follow?"},
            {
              type: "cards",
              items: [
                {
                  label: "A",
                  text: "Many countries want more green jobs. Workers need new skills. Some governments pay for training. Workers can move from coal to solar. Training takes time. New jobs are often in other regions. Some workers must move house."
                },
                {
                  label: "B",
                  text: "Many countries want more green jobs, but workers need new skills. Some governments pay for training, so workers can move from coal to solar. However, training takes time. In addition, new jobs are often in other regions. As a result, some workers must move house."
                }
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Tap the linking words in paragraph B."},
            {
              type: "spot",
              id: "lk-w1-spot",
              title: "Find the linkers in B",
              label: "linker",
              paras: [
                "Many countries want more [[green jobs]], [[*but]] workers need new skills. Some [[governments]] pay for training, [[*so]] workers can move from coal to solar. [[*However,]] training takes [[time]]. [[*In addition,]] new jobs are often in other regions. [[*As a result,]] some workers must [[move house]]."
              ]
            },
            {
              type: "do",
              n: 3,
              who: "alone",
              text: "Look at the punctuation around <b>but</b> and <b>so</b>, then around <b>However</b> and <b>As a result</b>. What is different? Write your answer, then open the answer below."
            },
            {"type":"fields","fields":[{"id":"lk-w1-diff","label":"What is different?","rows":2}]}
          ],
          answers: {
            items: [
              [
                "What is different?",
                "<b>but</b> and <b>so</b> are inside one sentence, with a comma before them. <b>However,</b> <b>In addition,</b> and <b>As a result,</b> start a new sentence and have a comma after them."
              ]
            ]
          }
        },
        {
          id: "lk-learn",
          short: "Learn",
          minutes: 18,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-learn.svg",
          title: "Linking ideas, step by step",
          goal: "Learn the two families of linkers: what they mean, where they go, and how to punctuate them.",
          blocks: [
            {
              type: "key",
              title: "Two families, two jobs",
              points: [
                "<b>Family 1 · FANBOYS</b> (for, and, nor, but, or, yet, so) join words, phrases or two sentences <b>inside one sentence</b>.",
                "<b>Family 2 · Connectors</b> (However, Therefore, In addition …) link <b>two separate sentences</b>. They show how the second idea relates to the first.",
                "Most linking mistakes are punctuation mistakes. Learn the punctuation with the word."
              ]
            },
            {
              type: "rule",
              n: 1,
              title: "FANBOYS: what each one means",
              explain: "Each coordinating conjunction has its own meaning. Choose by meaning, not by habit.",
              examples: [
                ["ok","<b>and</b> adds: Green jobs need skills <b>and</b> money."],
                ["ok","<b>but</b> contrasts: The plan is good, <b>but</b> it is expensive."],
                ["ok","<b>yet</b> = a surprising contrast: It is cheap, <b>yet</b> it works well."],
                ["ok","<b>or</b> gives a choice: We can retrain workers <b>or</b> import them."],
                ["ok","<b>so</b> gives a result: Workers need skills, <b>so</b> the government pays for training."],
                ["ok","<b>for</b> = because (formal): I am hungry, <b>for</b> I have not had breakfast."],
                ["ok","<b>nor</b> = and not: The plan is not cheap, <b>nor</b> is it popular.","after nor, the verb comes before the subject"]
              ],
              check: {"q":"Prices rose, ___ people bought less. (so / but)","a":"<b>so</b>: the second idea is a result."}
            },
            {
              type: "rule",
              n: 2,
              title: "FANBOYS: punctuation",
              explain: "Joining two <b>complete sentences</b>? Put a comma <b>before</b> the FANBOYS word. Joining two words or phrases? No comma.",
              form: "Sentence<b>, but</b> sentence. · word <b>and</b> word",
              examples: [
                ["ok","The air conditioner is working<b>, but</b> it is still hot in here.","two sentences → comma before but"],
                ["ok","The plan is cheap <b>and</b> fast.","two adjectives → no comma"],
                ["no","Workers need new skills <b>so,</b> governments pay for training.","→ skills, so governments …"],
                ["ok","She studied hard, <b>so</b> she passed the test.","<b>so</b> and <b>for</b> only ever join two sentences"]
              ],
              note: "In academic writing, avoid starting a sentence with <i>And</i>, <i>But</i> or <i>So</i>. Use <i>In addition</i>, <i>However</i> or <i>Therefore</i> instead.",
              check: {"q":"Comma or no comma? “Sara studies at university ___ works in a library.”","a":"No comma: one subject (Sara) with two verbs."}
            },
            {
              type: "rule",
              n: 3,
              title: "Parallel structure: same + same",
              explain: "<b>and, or, but, yet</b> must join two things of the <b>same grammatical form</b>: noun + noun, adjective + adjective, -ing + -ing, to + verb + to + verb.",
              form: "<b>-ing</b> and <b>-ing</b> · <b>to</b> + verb and (<b>to</b>) + verb · <b>adjective</b> and <b>adjective</b>",
              examples: [
                ["ok","I enjoy listening to music and <b>hanging</b> out with friends."],
                ["no","I enjoy listening to music and <b>hang</b> out with friends.","listening + hanging"],
                ["ok","I want to go to the US and (to) <b>do</b> my PhD."],
                ["ok","He is a really <b>kind and intelligent</b> man."],
                ["no","He is a really kind man and intelligent man.","two adjectives before one noun"]
              ],
              check: {"q":"You can reach your goals by setting a clear plan and ___ hard. (work / working)","a":"<b>working</b>: by setting … and working."}
            },
            {
              type: "model",
              title: "Same + same",
              rows: [
                ["noun + noun","Green jobs need <b>skills</b> and <b>money</b>."],
                ["adjective + adjective","The plan is <b>small</b> yet <b>effective</b>."],
                ["adverb + adverb","He drives <b>fast</b> but <b>carefully</b>."],
                ["verb + verb","Sara <b>studies</b> at university and (she) <b>works</b> in a library."],
                ["-ing + -ing","Maria is <b>watching</b> TV and (she is) <b>eating</b> chips."],
                ["past participle","I have <b>graduated</b> and (I have) <b>done</b> some research."],
                ["preposition phrase","Sport is good <b>for children</b> and (it is good) <b>for adults</b>."],
                ["to + verb","I want <b>to go</b> to the US and (I want) <b>to do</b> my PhD."],
                ["sentence + sentence","The air conditioner is working, but it is still hot in here."],
                ["so · for","She studied hard, <b>so</b> she passed the test. · I am hungry, <b>for</b> I have not had breakfast."]
              ]
            },
            {
              type: "rule",
              n: 4,
              title: "Connectors: what each family means",
              explain: "Connectors show the relationship between two sentences. Learn them in meaning groups.",
              examples: [
                ["ok","<b>Addition:</b> In addition, · Moreover, · Furthermore, · What is more,"],
                ["ok","<b>Contrast:</b> However, · Nevertheless, · In contrast, · On the other hand,"],
                ["ok","<b>Result:</b> As a result, · Consequently, · Therefore, · Thus,"],
                ["ok","<b>Example:</b> For example, · For instance,"],
                ["ok","<b>Sequence:</b> Firstly, · Secondly, · Finally,"],
                ["ok","<b>Restating:</b> In other words,"]
              ],
              note: "<b>On the other hand</b> gives another side of the same topic. <b>On the contrary</b> says the opposite is true. They are not the same.",
              check: {"q":"Training is expensive. ___, it pays off in the long term. (Therefore / However)","a":"<b>However</b>: a contrast."}
            },
            {
              type: "language",
              title: "Connectors by meaning",
              groups: [
                {"label":"Addition","phrases":["In addition (to …),","Moreover,","Furthermore,","What is more,","Besides,","In fact, / Indeed,"]},
                {
                  label: "Contrast",
                  phrases: ["However,","Nevertheless,","Nonetheless,","In contrast, / By contrast,","On the one hand, … On the other hand,","On the contrary,"]
                },
                {"label":"Result","phrases":["As a result,","As a consequence,","Consequently,","Therefore,","Thus, / Hence, (formal)"]},
                {"label":"Sequence","phrases":["First of all, / Firstly,","Secondly, / Thirdly,","Finally, / Lastly,","Last but not least,"]},
                {"label":"Example","phrases":["For example,","For instance,"]},
                {"label":"Restating","phrases":["In other words,","To put it another way,"]}
              ]
            },
            {
              type: "rule",
              n: 5,
              title: "Connectors: punctuation",
              explain: "A connector starts a <b>new sentence</b> (or comes after a semicolon) and is followed by a <b>comma</b>. A comma before it is not enough.",
              form: "Sentence<b>. However,</b> sentence. · Sentence<b>; however,</b> sentence. · Inside one clause: The plan<b>, however,</b> was too expensive.",
              examples: [
                ["ok","He studied hard for the exam<b>. Therefore,</b> he passed."],
                ["ok","Solar jobs are growing<b>; in contrast,</b> coal jobs are falling."],
                ["no","Training is expensive<b>, however</b> it pays off.","a comma cannot join two sentences → . However,"],
                ["ok","The plan<b>, however,</b> was too expensive.","here however is inside one sentence"]
              ],
              check: {"q":"Fix it: “Prices rose, therefore people bought less.”","a":"Prices rose<b>. Therefore,</b> people bought less. (or <b>; therefore,</b>)"}
            },
            {
              type: "rule",
              n: 6,
              title: "One linker per link",
              explain: "Do not use two linkers for the same link. <b>Although</b> already contains the contrast, so you do not need <b>but</b>. <b>Because</b> already contains the cause, so you do not need <b>so</b>.",
              examples: [
                ["no","<b>Although</b> the course was hard, <b>but</b> I enjoyed it.","→ Although the course was hard, I enjoyed it."],
                ["no","<b>Because</b> it was raining, <b>so</b> we stayed at home.","→ Because it was raining, we stayed at home."],
                ["ok","The course was hard, <b>but</b> I enjoyed it."]
              ],
              check: {"q":"Correct: “Although prices fell, but sales did not rise.”","a":"Although prices fell, sales did not rise."}
            },
            {
              type: "model",
              title: "Rules at a glance",
              rows: [
                ["FANBOYS meaning","and + · but ↔ · yet (surprising) ↔ · or (choice) · so → · for (= because)"],
                ["FANBOYS punctuation","two sentences: <b>, but</b> · two words: no comma"],
                ["Parallel structure","same form on both sides: reading <b>and</b> writing"],
                ["Connector punctuation","<b>. However,</b> or <b>; however,</b> — never <s>, however</s> between sentences"],
                ["One link, one linker","not <s>Although … , but</s> · not <s>Because … , so</s>"]
              ]
            }
          ]
        },
        {
          id: "lk-practise",
          short: "Practise",
          minutes: 18,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Controlled practice: recognise → choose → correct",
          goal: "Three short parts. Do them in order.",
          blocks: [
            {"type":"part","n":1,"title":"Recognise","goal":"Sort the connectors by meaning."},
            {
              type: "sort",
              id: "lk-l2-sort",
              title: "Addition, contrast or result?",
              buckets: [{"label":"Addition","text":"+ more","letter":"+"},{"label":"Contrast","text":"but","letter":"↔"},{"label":"Result","text":"so","letter":"→"}],
              items: [
                {"text":"Moreover,","answer":0},
                {"text":"Furthermore,","answer":0},
                {"text":"What is more,","answer":0},
                {"text":"Nevertheless,","answer":1},
                {"text":"In contrast,","answer":1},
                {"text":"Nonetheless,","answer":1},
                {"text":"Consequently,","answer":2},
                {"text":"Therefore,","answer":2},
                {"text":"Hence,","answer":2}
              ]
            },
            {"type":"part","n":2,"title":"Choose","goal":"Choose the connector with the right meaning, then the correct punctuation."},
            {
              type: "cloze",
              id: "lk-p2-cl",
              title: "A paragraph about green jobs",
              options: [
                ["but","so","or"],
                ["However,","Therefore,","For example,"],
                ["In addition,","In contrast,","As a result,"],
                ["Consequently,","Moreover,","Nevertheless,"],
                ["and","yet","for"],
                ["For instance,","On the contrary,","Hence,"]
              ],
              text: "Germany wants to close its coal mines, {{1}} thousands of miners need new jobs. {{2}} the government pays for retraining courses. {{3}} it supports companies that open solar and wind factories in mining regions. Many miners have found new work. {{4}} some older workers feel that the new jobs pay less. Green jobs are growing quickly, {{5}} they are not always where the workers live. {{6}} wind farms are often built on the coast, far from the old mines.",
              answers: ["so","Therefore,","In addition,","Nevertheless,","yet","For instance,"],
              why: [
                "Result inside one sentence: <b>so</b>.",
                "Result, new sentence: <b>Therefore,</b>",
                "One more action: <b>In addition,</b>",
                "Contrast with the good news: <b>Nevertheless,</b>",
                "Surprising contrast inside one sentence: <b>yet</b>.",
                "An example follows: <b>For instance,</b>"
              ]
            },
            {
              type: "quiz",
              id: "lk-p3-q",
              title: "Which one is correct?",
              items: [
                {
                  q: "Training is expensive … it pays off in the long term.",
                  options: [
                    "Training is expensive, however it pays off in the long term.",
                    "Training is expensive. However, it pays off in the long term.",
                    "Training is expensive however, it pays off in the long term."
                  ],
                  answer: "Training is expensive. However, it pays off in the long term.",
                  why: "<b>However</b> links two sentences: full stop (or semicolon) before, comma after."
                },
                {
                  q: "He studied hard for the exam … he passed the test.",
                  options: [
                    "He studied hard for the exam. Therefore, he passed the test.",
                    "He studied hard for the exam, therefore he passed the test.",
                    "He studied hard for the exam therefore he passed the test."
                  ],
                  answer: "He studied hard for the exam. Therefore, he passed the test.",
                  why: "The same rule as <b>However</b>."
                },
                {
                  q: "Solar jobs are growing … coal jobs are falling.",
                  options: [
                    "Solar jobs are growing; in contrast, coal jobs are falling.",
                    "Solar jobs are growing, in contrast coal jobs are falling.",
                    "Solar jobs are growing in contrast, coal jobs are falling."
                  ],
                  answer: "Solar jobs are growing; in contrast, coal jobs are falling.",
                  why: "A semicolon can replace the full stop: <b>; in contrast,</b>"
                },
                {
                  q: "Workers need new skills … governments pay for training.",
                  options: [
                    "Workers need new skills so, governments pay for training.",
                    "Workers need new skills, so governments pay for training.",
                    "Workers need new skills. So, governments pay for training."
                  ],
                  answer: "Workers need new skills, so governments pay for training.",
                  why: "<b>so</b> is a FANBOYS word: a comma <b>before</b> it, inside one sentence. (In academic writing, avoid starting a sentence with <i>So</i>.)"
                }
              ]
            },
            {"type":"part","n":3,"title":"Correct","goal":"Fix parallel structure, then rewrite sentences with linking mistakes."},
            {
              type: "cloze",
              id: "lk-p1-cl",
              title: "Same + same",
              list: true,
              options: [
                ["hang","hanging","to hang"],
                ["seeing","see","saw"],
                ["work","working","to work"],
                ["kind man and intelligent","kind and intelligent"],
                ["make","making","to make"]
              ],
              text: "I really enjoy listening to music and {{1}} out with my friends.\nI have decided to take a trip to Melbourne and {{2}} the natural scenery there.\nYou can achieve your goals by setting a clear goal and {{3}} hard towards it.\nHe is a really {{4}} man.\nI am thinking about changing my lifestyle and {{5}} my life healthier.",
              answers: ["hanging","see","working","kind and intelligent","making"],
              why: [
                "enjoy <b>listening</b> … and <b>hanging</b>: -ing + -ing.",
                "decided <b>to take</b> … and (to) <b>see</b>: to + verb + (to) verb.",
                "by <b>setting</b> … and <b>working</b>: -ing + -ing.",
                "adjective + adjective before one noun.",
                "thinking about <b>changing</b> … and <b>making</b>."
              ]
            },
            {
              type: "rewrite",
              id: "lk-p4-rw",
              title: "Correct the sentence",
              hint: "Keep the words; fix the linker or the punctuation.",
              items: [
                {
                  q: "Prices rose, however people kept buying.",
                  accept: ["Prices rose. However, people kept buying.","Prices rose; however, people kept buying."],
                  model: "Prices rose. However, people kept buying.",
                  why: "A connector needs . or ; before it and a comma after it."
                },
                {
                  q: "Although the course was hard, but I enjoyed it.",
                  accept: ["Although the course was hard, I enjoyed it.","The course was hard, but I enjoyed it."],
                  model: "Although the course was hard, I enjoyed it.",
                  why: "One link, one linker."
                },
                {
                  q: "Because it was raining so we stayed at home.",
                  accept: ["Because it was raining, we stayed at home.","It was raining, so we stayed at home."],
                  model: "Because it was raining, we stayed at home.",
                  why: "One link, one linker."
                },
                {
                  q: "Workers need new skills so, governments pay for training.",
                  accept: ["Workers need new skills, so governments pay for training."],
                  model: "Workers need new skills, so governments pay for training.",
                  why: "Comma before so."
                },
                {
                  q: "I like reading and to write.",
                  accept: ["I like reading and writing.","I like to read and to write.","I like to read and write."],
                  model: "I like reading and writing.",
                  why: "Same form on both sides."
                }
              ]
            }
          ]
        },
        {
          id: "lk-use",
          short: "Use it",
          minutes: 11,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-use.svg",
          title: "Should your country invest in green jobs?",
          goal: "Write 80–100 words. Use at least one FANBOYS word and three connectors with different meanings.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Plan: one reason for, one reason against, one result. Then write your paragraph."},
            {
              type: "detect",
              id: "lk-u1-dt",
              title: "My paragraph",
              label: "Writing studio",
              hint: "The lights show which kinds of linkers you used. A red chip warns about punctuation.",
              checks: [
                {"label":"FANBOYS (, but / , so / and …)","color":"#2b776e","any":["/, (but|so|yet|for|and|or) /"]},
                {"label":"Addition","color":"#3a58a0","any":["In addition","Moreover","Furthermore","What is more","Besides"]},
                {"label":"Contrast","color":"#7a4a8c","any":["However","Nevertheless","Nonetheless","In contrast","By contrast","On the other hand"]},
                {"label":"Result","color":"#b0512a","any":["As a result","As a consequence","Consequently","Therefore","Thus","Hence"]},
                {"label":"Example","color":"#985c0e","any":["For example","For instance"]}
              ],
              avoid: [
                {"label":", however …? Use . However,","any":["/, (however|therefore|moreover|furthermore|nevertheless|consequently)\\b/"]},
                {
                  label: "Comma after it?",
                  any: ["/\\b(However|Therefore|Moreover|Furthermore|Nevertheless|Consequently|In addition|As a result|For example) (?!,)[a-z]/u"]
                }
              ],
              items: [
                {
                  rows: 7,
                  placeholder: "Green jobs could help my country, but …",
                  model: "Investing in green jobs could help my country, <b>but</b> it would be expensive. Solar and wind farms need trained workers. <b>Therefore,</b> the government would have to pay for new courses. <b>In addition,</b> some regions depend on coal mining. <b>However,</b> the cost of doing nothing is higher. <b>For example,</b> extreme heat already damages crops. <b>As a result,</b> green jobs are a sensible investment."
                }
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Read your paragraph again. Check every linker: is the punctuation right? Is the meaning right?"},
            {
              type: "checklist",
              id: "lk-u1-can",
              title: "Can you do it?",
              items: [
                "I keep both sides of and / or / but the same.",
                "I put a comma before so and but when they join two sentences.",
                "I start a new sentence (or use ;) before However, Therefore, In addition.",
                "I choose connectors for their meaning, not just to sound academic."
              ]
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["coordinating conjunction","one of the seven FANBOYS words: for, and, nor, but, or, yet, so","Prices rose, so people bought less."],
    ["conjunctive adverb","a linking word that connects two sentences and shows their relationship","However, Therefore, In addition"],
    ["parallel structure","using the same grammatical form on both sides of and, or, but","reading and writing (not reading and write)"]
  ]
};
