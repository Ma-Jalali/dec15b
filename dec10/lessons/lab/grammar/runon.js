/* DEC10 · Language Lab · Grammar 5 — Run-on sentences and comma splices: five ways to fix them.
   Source: the teacher's "Interactive Grammar" document (Sentence Types; Lessons: run-on sentences), set in the Week 7 topic (sustainable fashion).
   One page, four tabs: Warm-up · Notice and learn · Practise · Use it (built for self-study). */
window.DEC15_LESSON = {
  id: "d10lab-runon",
  week: null,
  day: null,
  title: "Run-ons and comma splices",
  duration: "About 45 minutes",
  questionKind: "Can-do",
  questionLabel: "By the end of this lesson you can",
  question: "spot two sentences that are joined the wrong way, and fix them in five different ways.",
  journey: "A comma cannot hold two complete sentences together. Learn to see where one sentence ends, then choose the best way to join or split the two.",
  goalShort: "correct, readable sentences",
  image: "dec10/assets/lab/hero-grammar.svg",
  imageAlt: "Sentence tiles and floating chips including a semicolon, and and However.",
  finish: {"title":"More soon","text":"New grammar lessons are on the way"},
  sections: [
    {
      id: "lesson",
      number: "1",
      minutes: 45,
      tone: "teal",
      art: "dec10/assets/lab/s-learn.svg",
      title: "Run-ons and comma splices",
      subtitle: "Warm-up · Notice and learn · Practise · Use it",
      outcome: "spot two sentences that are joined the wrong way, and fix them in five different ways.",
      activities: [
        {
          id: "ro-warm",
          short: "Warm-up",
          minutes: 7,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-warm.svg",
          title: "Pairs of sentences",
          goal: "Choose the sentence that is easier to understand, then say why.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"For each pair, choose the better sentence."},
            {
              type: "quiz",
              id: "ro-w1-q",
              title: "Which sentence is better?",
              items: [
                {
                  q: "Pair A",
                  options: ["The dog barked loudly it chased the cat.","The dog barked loudly. It chased the cat."],
                  answer: "The dog barked loudly. It chased the cat.",
                  why: "Two complete ideas need a full stop between them."
                },
                {
                  q: "Pair B",
                  options: ["I love chocolate cake, I eat it every day.","I love chocolate cake, and I eat it every day."],
                  answer: "I love chocolate cake, and I eat it every day.",
                  why: "A comma alone cannot join them; <b>, and</b> can."
                },
                {
                  q: "Pair C",
                  options: ["She studied hard for the exam she passed easily.","She studied hard for the exam; she passed easily."],
                  answer: "She studied hard for the exam; she passed easily.",
                  why: "A semicolon can join two closely related sentences."
                }
              ]
            },
            {
              type: "do",
              n: 2,
              who: "alone",
              text: "What is wrong with the other sentence in each pair? What do you think a “run-on sentence” is? Write your idea, then open the answer below."
            },
            {"type":"fields","fields":[{"id":"ro-w1-idea","label":"A run-on sentence is …","rows":2}]}
          ],
          answers: {
            items: [
              [
                "What is a run-on sentence?",
                "Two (or more) complete sentences joined the wrong way: with no punctuation at all (a <b>fused sentence</b>), or with only a comma (a <b>comma splice</b>). It “runs on” without stopping."
              ]
            ]
          }
        },
        {
          id: "ro-learn",
          short: "Notice and learn",
          minutes: 15,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-learn.svg",
          title: "Two kinds of run-on, five ways to fix them",
          goal: "You can name the two kinds of run-on and choose a fix.",
          blocks: [
            {"type":"part","n":1,"title":"Fused sentence and comma splice","goal":"Learn to see where the first sentence ends."},
            {
              type: "key",
              title: "Complete sentence = subject + verb + a complete idea",
              compare: [
                {
                  label: "Fused sentence · no punctuation",
                  text: "Two complete sentences stuck together.",
                  eg: "<s>My sister lives in New York she loves the big city.</s>"
                },
                {
                  label: "Comma splice · only a comma",
                  text: "A comma is not strong enough to join two complete sentences.",
                  eg: "<s>I finished my homework, I went to bed.</s>"
                }
              ]
            },
            {
              type: "tip",
              text: "Test: cover the second half. Is the first half a complete sentence? Now cover the first half. Is the second half complete too? If <b>both</b> are complete, you need more than a comma."
            },
            {
              type: "sort",
              id: "ro-l1-sort",
              title: "Correct, fused or comma splice?",
              buckets: [{"label":"Correct","letter":"✓"},{"label":"Fused","text":"no punctuation","letter":"F"},{"label":"Comma splice","text":"only a comma","letter":"CS"}],
              items: [
                {"text":"The sun was shining, the birds were singing.","answer":2},
                {"text":"The sun was shining, and the birds were singing.","answer":0},
                {"text":"He worked hard all day he was very tired.","answer":1},
                {"text":"Because I was hungry, I ate a sandwich.","answer":0,"why":"<i>Because I was hungry</i> is not complete on its own, so a comma is fine here."},
                {"text":"Fast fashion is cheap, people buy too many clothes.","answer":2},
                {"text":"Cotton needs a lot of water it is grown in dry regions.","answer":1},
                {"text":"Many clothes end up in landfill; most are worn fewer than ten times.","answer":0}
              ]
            },
            {"type":"part","n":2,"title":"Five ways to fix a run-on","goal":"Learn five fixes, and when each one works best."},
            {
              type: "tabs",
              tabs: [
                {
                  label: "1 · Full stop",
                  blocks: [
                    {
                      type: "pairs",
                      items: [
                        {
                          from: "The cat jumped onto the table it knocked over the vase.",
                          to: "The cat jumped onto the table[[. It]] knocked over the vase.",
                          tag: "Simplest fix"
                        },
                        {"from":"She enjoys reading novels they help her relax.","to":"She enjoys reading novels[[. They]] help her relax.","tag":"Simplest fix"}
                      ]
                    }
                  ]
                },
                {
                  label: "2 · Semicolon",
                  blocks: [
                    {
                      type: "key",
                      title: "Use ; when the two ideas are closely related",
                      points: ["A semicolon is stronger than a comma. It joins two complete sentences without a linking word."]
                    },
                    {
                      type: "pairs",
                      items: [
                        {"from":"He worked hard all day he was very tired.","to":"He worked hard all day[[;]] he was very tired.","tag":"Closely related"},
                        {"from":"My brother loves to cook he makes delicious pasta.","to":"My brother loves to cook[[;]] he makes delicious pasta.","tag":"Closely related"}
                      ]
                    }
                  ]
                },
                {
                  label: "3 · , + FANBOYS",
                  blocks: [
                    {
                      type: "key",
                      title: "Comma + for, and, nor, but, or, yet, so",
                      points: ["Use them when the two ideas are equally important. The comma goes <b>before</b> the word."]
                    },
                    {
                      type: "pairs",
                      items: [
                        {"from":"I wanted to go to the party I had too much homework.","to":"I wanted to go to the party[[, but]] I had too much homework.","tag":"contrast"},
                        {"from":"She arrived late she missed the beginning of the film.","to":"She arrived late[[, so]] she missed the beginning of the film.","tag":"result"},
                        {"from":"We can go to the beach we can stay home.","to":"We can go to the beach[[, or]] we can stay home.","tag":"choice"}
                      ]
                    }
                  ]
                },
                {
                  label: "4 · because, although …",
                  blocks: [
                    {
                      type: "key",
                      title: "Make one idea depend on the other",
                      points: [
                        "Use <b>because, although, since, when, while, if, unless, before, after, until</b>.",
                        "At the start: comma after the first clause. In the middle: usually no comma."
                      ]
                    },
                    {
                      type: "pairs",
                      items: [
                        {
                          from: "I was hungry I ate a sandwich.",
                          to: "[[Because]] I was hungry[[,]] I ate a sandwich. · I ate a sandwich [[because]] I was hungry.",
                          tag: "cause"
                        },
                        {"from":"The phone rang I was sleeping.","to":"[[While]] I was sleeping[[,]] the phone rang.","tag":"time"},
                        {
                          from: "He is very busy he always helps his friends.",
                          to: "[[Although]] he is very busy[[,]] he always helps his friends.",
                          tag: "contrast",
                          note: "<b>although</b> needs a real contrast: busy ↔ still helps."
                        }
                      ]
                    }
                  ]
                },
                {
                  label: "5 · Rewrite",
                  blocks: [
                    {
                      type: "key",
                      title: "Long, confusing run-on? Rewrite it",
                      points: ["Break it into shorter sentences, and join only the ideas that belong together."]
                    },
                    {
                      type: "pairs",
                      items: [
                        {
                          from: "My friend studied really hard for the test she was worried about it she finally got an A she was very happy.",
                          to: "My friend studied really hard for the test [[because]] she was worried about it[[. She]] finally got an A[[, and]] she was very happy.",
                          tag: "Mix the fixes"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Think about your own writing: which fix do you use most? Which one would make it sound more academic?"},
            {
              type: "sticky",
              color: "pink",
              title: "However is not a FANBOYS word",
              text: "<s>Fast fashion is cheap, however it is wasteful.</s> → Fast fashion is cheap<b>. However,</b> it is wasteful. (See the lesson <i>Linking ideas</i>.)"
            }
          ]
        },
        {
          id: "ro-practise",
          short: "Practise",
          minutes: 13,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Controlled practice with instant feedback",
          goal: "You find run-ons in a story and fix run-ons in an academic paragraph.",
          blocks: [
            {
              type: "part",
              n: 1,
              title: "A day at the beach",
              goal: "Find the comma splices. Tap the comma that joins two complete sentences (the words around it are highlighted)."
            },
            {
              type: "spot",
              id: "ro-p1-spot",
              title: "Tap every comma splice",
              label: "comma splice",
              hint: "There are seven. Not every comma is a mistake: commas in lists and after <i>When …</i> are fine.",
              paras: [
                "Last Saturday was a beautiful, sunny day. My family decided to go to the [[*beach, it’s]] our favourite place to relax. We packed many things for the trip, including [[towels, sunscreen]], snacks and drinks. The drive to the coast took about an [[*hour, traffic]] wasn’t too bad.",
                "[[When we arrived, the beach]] was already quite busy. My brother immediately ran towards the [[*water, he]] loves swimming more than anything. I prefer [[reading, so I]] found a nice spot under a large umbrella. Later, we built a huge [[*sandcastle, it]] even had towers and a moat.",
                "We ate our lunch and watched the [[*seagulls, they]] were hoping for some food. It was a perfect [[*day, we]] didn’t want it to end. We finally packed up when the sun began to set, feeling happy and tired. My brother fell asleep in the [[*car, he]] was exhausted."
              ]
            },
            {"type":"part","n":2,"title":"Fast fashion: fix the run-ons","goal":"Choose the correct way to join each pair of ideas."},
            {
              type: "cloze",
              id: "ro-p2-cl",
              title: "A paragraph about fast fashion",
              options: [
                [", many",". Many"," many"],
                ["; it",", it"," it"],
                [", so"," so",", therefore"],
                ["Although","However","But"],
                [", and"," and",", moreover"],
                ["because",", because of",", for this"]
              ],
              text: "Fast fashion is cheap and quick{{1}} people buy new clothes every month. A single cotton T-shirt can need around 2,700 litres of water{{2}} is a thirsty product. Many clothes are worn only a few times{{3}} they end up in landfill very quickly. {{4}} recycling is growing, most old clothes are still burnt or buried. Some brands now rent out clothes{{5}} others repair them for free. These ideas matter {{6}} the fashion industry produces a large share of global emissions.",
              answers: [". Many","; it",", so","Although",", and","because"],
              why: [
                "Two complete sentences: a full stop.",
                "Closely related: a semicolon.",
                "Result inside one sentence: <b>, so</b>.",
                "Contrast + one dependent idea: <b>Although …,</b>",
                "Two equal ideas: <b>, and</b>.",
                "Cause: <b>because</b> + a complete clause (no comma in the middle)."
              ]
            }
          ]
        },
        {
          id: "ro-use",
          short: "Use it",
          minutes: 10,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-use.svg",
          title: "My clothes and the planet",
          goal: "Write 5–6 sentences. Use at least three different fixes: a full stop, a semicolon, a FANBOYS word with a comma, or because / although / when.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Before you write, think: How many clothes do you buy a month? Where do your old clothes go? Would you rent or repair clothes?"
            },
            {
              type: "detect",
              id: "ro-u1-dt",
              title: "My clothes and the planet",
              label: "Writing studio",
              hint: "The lights show the joins you used. A red chip asks you to check a comma: is it joining two complete sentences?",
              checks: [
                {"label":", and / , but / , so","color":"#2b776e","any":["/, (and|but|so|yet|or) /"]},
                {"label":"semicolon ;","color":"#3a58a0","any":[";"]},
                {"label":"because / although / when …","color":"#7a4a8c","any":["/\\b(because|although|though|while|when|since|unless|if|before|after|until)\\b/"]},
                {"label":"two or more sentences","color":"#b0512a","any":["/\\.\\s+[A-Z]/u"]}
              ],
              avoid: [
                {
                  label: "Comma splice? (, I / , it / , they …)",
                  any: [
                    "/(?:^|[.!?;]\\s+)(?!(?:When|If|Because|Although|Though|While|Since|After|Before|Unless|Until|As|Once)\\b)[^,.!?;]*\\b(I|we|they|it|he|she|people|this) [a-z]+[^,.!?;]*, (I|we|they|it|he|she|this) (am|is|are|was|were|have|has|do|does|did|can|will|buy|wear|think|like|feel)\\b/u"
                  ]
                },
                {"label":", however? Use . However,","any":["/, however\\b/"]}
              ],
              items: [
                {
                  rows: 7,
                  placeholder: "I buy new clothes about once a month, but …",
                  model: "I buy new clothes about once a month<b>, but</b> I rarely wear all of them. Most of my old clothes go to the bin<b>;</b> I did not know they could be recycled. <b>Although</b> second-hand shops are cheap, I seldom visit them. I would rent clothes for special events <b>because</b> I only wear them once. From now on, I will repair my jeans<b>.</b> They are still good."
                }
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Read your sentences aloud. Where do you stop for breath? Check that every stop has the right punctuation."},
            {
              type: "checklist",
              id: "ro-u1-can",
              title: "Can you do it?",
              items: [
                "I check whether both halves are complete sentences.",
                "I never join two complete sentences with only a comma.",
                "I can use a full stop, a semicolon, , + FANBOYS, or because / although.",
                "I read my writing aloud to find run-ons."
              ]
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["independent clause","a group of words with a subject and a verb that can stand alone as a sentence","I finished my homework."],
    ["run-on sentence","two or more complete sentences joined incorrectly","The sun was shining the birds were singing."],
    ["comma splice","two complete sentences joined with only a comma","I finished my homework, I went to bed."],
    ["semicolon","the mark ; that joins two closely related complete sentences","He worked hard; he was tired."]
  ]
};
