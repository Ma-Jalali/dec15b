/* DEC10 · Language Lab · Grammar 5 — Run-on sentences and comma splices: five ways to fix them.
   Source: the teacher's "Interactive Grammar" document (Sentence Types; Lessons: run-on sentences), set in the Week 7 topic (sustainable fashion).
   One page, four tabs: Warm-up · Learn · Practise · Use it (built for self-study). */
window.DEC15_LESSON = {
  id: "d10lab-runon",
  week: null,
  day: null,
  title: "Run-ons and comma splices",
  duration: "About 55 minutes",
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
      minutes: 56,
      tone: "teal",
      art: "dec10/assets/lab/s-learn.svg",
      title: "Run-ons and comma splices",
      subtitle: "Warm-up · Learn · Practise · Use it",
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
          short: "Learn",
          minutes: 22,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-learn.svg",
          title: "Sentences, run-ons and five fixes, step by step",
          goal: "Learn what a complete sentence is, the two kinds of run-on, and five ways to fix them.",
          blocks: [
            {
              type: "key",
              title: "First, what is a complete sentence?",
              points: [
                "A complete sentence (an <b>independent clause</b>) has a <b>subject</b>, a <b>verb</b> and a <b>complete idea</b>: <i>I finished my homework.</i>",
                "A <b>dependent clause</b> starts with a word like <i>because, although, when, if</i>. It is not complete on its own: <i>because I was tired …</i>",
                "A <b>run-on</b> happens when two complete sentences are joined the wrong way."
              ]
            },
            {
              type: "rule",
              n: 1,
              title: "Independent or dependent?",
              explain: "Read the clause on its own. If it sounds finished, it is independent. If it leaves you waiting (because … what?), it is dependent.",
              form: "<b>Independent</b>: subject + verb + complete idea · <b>Dependent</b>: because / although / when / if … + subject + verb",
              examples: [
                ["ok","<b>I listen to music.</b> → complete"],
                ["ok","<b>When I listen to music</b> … → not complete: you are waiting for more"],
                ["ok","When I listen to music, <b>I feel very good.</b> → dependent + independent = one correct sentence"]
              ],
              check: {
                q: "Complete or not? “Although fast fashion is cheap.”",
                a: "Not complete: <i>although</i> makes it dependent. Add a main clause: <i>Although fast fashion is cheap, it is wasteful.</i>"
              }
            },
            {
              type: "rule",
              n: 2,
              title: "Run-on 1: the fused sentence",
              explain: "Two complete sentences are stuck together with <b>no punctuation</b> and no linking word.",
              form: "sentence + sentence (nothing between them)",
              examples: [
                ["no","My sister lives in New York she loves the big city.","Two complete ideas: My sister lives in New York. / She loves the big city."],
                ["no","He worked hard all day he was very tired."]
              ],
              check: {
                q: "Where does the first sentence end? “Cotton needs a lot of water it is grown in dry regions.”",
                a: "After <i>water</i>: Cotton needs a lot of water. It is grown in dry regions."
              }
            },
            {
              type: "rule",
              n: 3,
              title: "Run-on 2: the comma splice",
              explain: "Two complete sentences are joined with <b>only a comma</b>. A comma is too weak to join them. This is the most common run-on in student essays.",
              form: "sentence<b>,</b> sentence ✗",
              examples: [
                ["no","I finished my homework, I went to bed."],
                ["no","Fast fashion is cheap, people buy too many clothes."],
                ["ok","Because I was hungry, I ate a sandwich.","Fine: the first part is dependent, so a comma is right."]
              ],
              note: "<b>The cover test:</b> cover the part after the comma. Is the first part complete? Now cover the first part. Is the second part complete too? If <b>both</b> are complete, a comma alone is wrong.",
              check: {"q":"Comma splice or correct? “When the sun set, we packed up.”","a":"Correct: <i>When the sun set</i> is dependent."}
            },
            {
              type: "rule",
              n: 4,
              title: "Fix 1: a full stop",
              explain: "The simplest fix: make two sentences.",
              form: "sentence<b>.</b> Sentence.",
              examples: [["no","The cat jumped onto the table it knocked over the vase."],["ok","The cat jumped onto the table<b>. It</b> knocked over the vase."]],
              note: "Use it when the two ideas are separate, or when your sentence is already long."
            },
            {
              type: "rule",
              n: 5,
              title: "Fix 2: a semicolon",
              explain: "A semicolon joins two complete sentences that are <b>closely related</b>. No capital letter after it.",
              form: "sentence<b>;</b> sentence.",
              examples: [
                ["no","He worked hard all day he was very tired."],
                ["ok","He worked hard all day<b>;</b> he was very tired."],
                ["ok","Many clothes end up in landfill<b>;</b> most are worn fewer than ten times."]
              ],
              note: "Do not overuse it: one or two semicolons in a paragraph is plenty."
            },
            {
              type: "rule",
              n: 6,
              title: "Fix 3: a comma + FANBOYS",
              explain: "Add a comma <b>and</b> a coordinating conjunction (for, and, nor, but, or, yet, so). It also shows the relationship.",
              form: "sentence<b>, but / , so / , and</b> sentence.",
              examples: [
                ["ok","I wanted to go to the party<b>, but</b> I had too much homework.","contrast"],
                ["ok","She arrived late<b>, so</b> she missed the start.","result"],
                ["ok","We can go to the beach<b>, or</b> we can stay home.","choice"]
              ],
              note: "<b>However</b> is not a FANBOYS word: <s>Fashion is cheap, however it is wasteful.</s> → Fashion is cheap<b>. However,</b> it is wasteful."
            },
            {
              type: "rule",
              n: 7,
              title: "Fix 4: because, although, when … (make one part dependent)",
              explain: "Turn one sentence into a dependent clause. Choose the word for the meaning: cause (because, since), contrast (although, while), time (when, before, after, until), condition (if, unless).",
              form: "Dependent clause<b>,</b> main clause. · Main clause + dependent clause (no comma).",
              examples: [
                ["ok","<b>Because</b> I was hungry<b>,</b> I ate a sandwich.","dependent first → comma"],
                ["ok","I ate a sandwich <b>because</b> I was hungry.","dependent second → no comma"],
                ["ok","<b>Although</b> he is very busy<b>,</b> he always helps his friends.","although needs a real contrast"]
              ],
              note: "This fix is often the most academic, because it shows exactly how the ideas are connected."
            },
            {
              type: "rule",
              n: 8,
              title: "Fix 5: rewrite",
              explain: "A very long run-on with three or four ideas needs rewriting: split it, and join only the ideas that belong together.",
              examples: [
                ["no","My friend studied hard for the test she was worried about it she finally got an A she was very happy."],
                ["ok","My friend studied hard for the test <b>because</b> she was worried about it<b>. She</b> finally got an A<b>, and</b> she was very happy."]
              ]
            },
            {
              type: "model",
              title: "Which fix, when?",
              rows: [
                ["Full stop","separate ideas, or a long sentence"],
                ["Semicolon ;","two closely related ideas"],
                ["Comma + FANBOYS","equal ideas: , and · , but · , so · , or"],
                ["because / although / when …","to show cause, contrast or time — often the most academic"],
                ["Rewrite","long run-ons with three or more ideas"],
                ["Never","two complete sentences with only a comma"]
              ]
            }
          ]
        },
        {
          id: "ro-practise",
          short: "Practise",
          minutes: 17,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Controlled practice: recognise → choose → fix",
          goal: "Three short parts. Do them in order.",
          blocks: [
            {"type":"part","n":1,"title":"Recognise","goal":"Sort the sentences, then find the comma splices in a story."},
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
            {"type":"part","n":2,"title":"Choose","goal":"Choose the right way to join each pair of ideas."},
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
            },
            {"type":"part","n":3,"title":"Fix","goal":"Fix each run-on with the method in brackets. Write the full sentence."},
            {
              type: "rewrite",
              id: "ro-p3-rw",
              title: "Fix the run-on",
              hint: "Use the method in brackets.",
              items: [
                {
                  q: "I finished my homework, I went to bed. <i>(full stop)</i>",
                  accept: ["I finished my homework. I went to bed."],
                  model: "I finished my homework. I went to bed."
                },
                {
                  q: "He worked hard all day he was very tired. <i>(semicolon)</i>",
                  accept: ["He worked hard all day; he was very tired."],
                  model: "He worked hard all day; he was very tired."
                },
                {
                  q: "Fast fashion is cheap, it is very wasteful. <i>(comma + but)</i>",
                  accept: ["Fast fashion is cheap, but it is very wasteful."],
                  model: "Fast fashion is cheap, but it is very wasteful."
                },
                {
                  q: "I was hungry I ate a sandwich. <i>(start with Because)</i>",
                  accept: ["Because I was hungry, I ate a sandwich."],
                  model: "Because I was hungry, I ate a sandwich."
                },
                {
                  q: "Clothes are cheap, people buy too many. <i>(comma + so)</i>",
                  accept: ["Clothes are cheap, so people buy too many."],
                  model: "Clothes are cheap, so people buy too many."
                },
                {
                  q: "Recycling is growing, most clothes are still burnt. <i>(start with Although)</i>",
                  accept: ["Although recycling is growing, most clothes are still burnt."],
                  model: "Although recycling is growing, most clothes are still burnt."
                }
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
