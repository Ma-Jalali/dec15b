/* DEC10 · Language Lab · Grammar 4 — Relative clauses (who, which, that, whose, where, when; no extra pronoun;
   preposition + which/whom; defining and non-defining; reduced relative clauses).
   Source: the teacher's "Interactive Grammar" document (Relative Clauses), set in the Week 4 topic (ecotourism, Costa Rica).
   One page, four tabs: Warm-up · Notice and learn · Practise · Use it (built for self-study). */
window.DEC15_LESSON = {
  id: "d10lab-rel",
  week: null,
  day: null,
  title: "Relative clauses",
  duration: "About 55 minutes",
  questionKind: "Can-do",
  questionLabel: "By the end of this lesson you can",
  question: "describe a noun with who, which, whose or where — without an extra pronoun — and use commas for extra information.",
  journey: "A relative clause is a long adjective: it follows a noun and describes it. Learn the six relative words, avoid the most common error, then make your clauses shorter and more academic.",
  goalShort: "richer, more precise sentences",
  image: "dec10/assets/lab/hero-grammar.svg",
  imageAlt: "Sentence tiles: Costa Rica protects a quarter of its land, which attracts tourists.",
  finish: {"title":"Next lesson","text":"Run-ons and comma splices"},
  sections: [
    {
      id: "lesson",
      number: "1",
      minutes: 55,
      tone: "teal",
      art: "dec10/assets/lab/s-learn.svg",
      title: "Relative clauses",
      subtitle: "Warm-up · Notice and learn · Practise · Use it",
      outcome: "describe a noun with who, which, whose or where — without an extra pronoun — and use commas for extra information.",
      activities: [
        {
          id: "rl-warm",
          short: "Warm-up",
          minutes: 8,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-warm.svg",
          title: "Ecotourism riddles",
          goal: "Guess each word, then notice how the description is joined to the noun.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Read each description. Guess the word before you turn the card."},
            {
              type: "flip",
              title: "What is it?",
              items: [
                {"front":"a person <b>who</b> shows tourists around a national park","back":"a <b>tour guide</b>"},
                {"front":"a place <b>where</b> sea turtles lay their eggs","back":"a <b>nesting beach</b>"},
                {"front":"a type of tourism <b>which</b> protects nature and helps local people","back":"<b>ecotourism</b>"},
                {"front":"an animal <b>that</b> moves very slowly and lives in trees","back":"a <b>sloth</b>"},
                {"front":"a country <b>whose</b> forests cover about half of its land","back":"<b>Costa Rica</b>"},
                {"front":"the time of year <b>when</b> most tourists visit Costa Rica (December to April)","back":"the <b>dry season</b>"}
              ]
            },
            {
              type: "do",
              n: 2,
              who: "alone",
              text: "Look at the bold words: who, where, which, that, whose, when. What does each one point back to? And why do academic texts use these clauses so often?"
            },
            {"type":"fields","fields":[{"id":"rl-w1-why","label":"Why do academic texts use relative clauses?","rows":2}]}
          ],
          answers: {
            items: [
              [
                "What does each word point back to?",
                "Each word points back to the noun just before it: a person ← <b>who</b>, a place ← <b>where</b>, a type of tourism ← <b>which</b>, an animal ← <b>that</b>, a country ← <b>whose</b>, the time of year ← <b>when</b>."
              ],
              [
                "Why so often?",
                "They pack a lot of precise information into one sentence, so the writer can define and describe without starting a new sentence each time."
              ]
            ]
          }
        },
        {
          id: "rl-learn",
          short: "Notice and learn",
          minutes: 20,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-learn.svg",
          title: "Form, the big mistake, and commas",
          goal: "You choose the right relative word, never add a second pronoun, and use commas for extra information.",
          blocks: [
            {"type":"part","n":1,"title":"A relative clause is a long adjective","goal":"See how a clause describes a noun, like an adjective does."},
            {
              type: "pairs",
              items: [
                {"from":"I have a [[funny]] friend.","to":"I have a friend [[who makes me laugh a lot]].","tag":"adjective → clause"},
                {"from":"He has a [[Japanese]] car.","to":"He has a car [[which is made in Japan]].","tag":"adjective → clause"}
              ]
            },
            {
              type: "model",
              title: "Six relative words",
              rows: [
                ["who","people · Guides <b>who</b> speak English earn more."],
                ["which","things and animals · a park <b>which</b> protects jaguars"],
                ["that","people or things, only <b>without commas</b> · the plan <b>that</b> the government chose"],
                ["whose","possession (his, her, its, their) · a country <b>whose</b> forests are protected"],
                ["where","places · the beach <b>where</b> turtles nest"],
                ["when","times · the season <b>when</b> most tourists come"]
              ]
            },
            {
              type: "key",
              title: "Where does it go?",
              points: ["Put the relative word <b>right after</b> the noun it describes. If it is far away, the sentence is confusing."]
            },
            {"type":"part","n":2,"title":"One noun, one pronoun","goal":"Find and delete the extra pronoun."},
            {
              type: "figure",
              src: "dec10/assets/lab/rel-clause.svg",
              alt: "I have a book. I bought it on Saturday. becomes I have a book which I bought on Saturday. The word it is crossed out because which already stands for the book.",
              caption: "<b>which</b> replaces <b>it</b>. Do not keep both."
            },
            {"type":"do","n":1,"who":"alone","text":"Each sentence has one extra word. Tap it."},
            {
              type: "spot",
              id: "rl-l2-spot",
              title: "Tap the extra pronoun",
              label: "extra word",
              paras: [
                "I have a friend who [[*she]] is a [[painter]].",
                "I have a [[book]] which I bought [[*it]] from a bookshop near my home.",
                "He usually watches [[programmes]] which I hate [[*them]].",
                "There are two [[people]] who I work with [[*them]].",
                "The [[house]] which I live in [[*it]] is around 65 square metres.",
                "She is one of your [[students]] who [[*she]] comes to your morning classes."
              ]
            },
            {
              type: "sticky",
              color: "yellow",
              title: "Who or whom?",
              text: "In writing, use <b>whom</b> after a preposition: <i>the person <b>with whom</b> he is negotiating</i>. In speaking, most people say <i>the person (who) he is negotiating with</i>."
            },
            {"type":"part","n":3,"title":"Which one? Or extra information?","goal":"Decide whether the clause tells us which one, or just adds information."},
            {
              type: "key",
              title: "Two kinds",
              compare: [
                {
                  label: "Defining · no commas",
                  text: "Tells us <b>which one</b>. Without it, the sentence is not clear.",
                  eg: "People <b>who live in this city</b> have dark hair."
                },
                {
                  label: "Non-defining · commas",
                  text: "Adds <b>extra information</b> about a noun we already know. Never use <i>that</i>.",
                  eg: "London<b>, which is the capital of England,</b> is overcrowded."
                }
              ]
            },
            {
              type: "pairs",
              items: [
                {
                  from: "My brother who is 27 has long hair.",
                  to: "My brother[[, who is 27,]] has long hair.",
                  tag: "one brother",
                  note: "Without commas, it means I have more than one brother: the one who is 27."
                }
              ]
            },
            {
              type: "sort",
              id: "rl-l3-sort",
              title: "Defining or non-defining?",
              buckets: [{"label":"Defining","text":"no commas","letter":"D"},{"label":"Non-defining","text":"commas","letter":"N"}],
              items: [
                {"text":"A judge is someone who works in a courtroom.","answer":0},
                {"text":"The boy who you saw at the party was Toby.","answer":0},
                {"text":"Was the telephone number which you gave me correct?","answer":0},
                {"text":"Bogota is a city which has a large population.","answer":0},
                {"text":"Our class, which is on the second floor, has 21 chairs.","answer":1,"why":"We have only one class: the clause adds information."},
                {"text":"Last year I went to Kyoto, which used to be the capital of Japan.","answer":1},
                {"text":"James Bond, who is a popular film character, has been played by six actors.","answer":1},
                {"text":"My father, who is retired now, wants to travel to Colombia.","answer":1}
              ]
            }
          ]
        },
        {
          id: "rl-practise",
          short: "Practise",
          minutes: 15,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Controlled practice with instant feedback",
          goal: "You join sentences, write formal clauses with prepositions, and shorten clauses.",
          blocks: [
            {"type":"part","n":1,"title":"Ecotourism in Costa Rica","goal":"Choose the relative word."},
            {
              type: "cloze",
              id: "rl-p1-cl",
              title: "A paragraph about ecotourism",
              options: [["which","who","where"],["who","which","whose"],["where","which","when"],["whose","who","which"],["when","where","which"],["which","that","who"]],
              text: "Costa Rica is a small country {{1}} attracts millions of tourists every year. Many visitors are nature lovers {{2}} want to see sloths, turtles and rainforests. Tortuguero is a national park {{3}} sea turtles lay their eggs. Local guides, {{4}} families once hunted turtles, now protect the nests. The best months are July to October, {{5}} green turtles come to the beach. Ecotourism, {{6}} brings money to local communities, also pays for conservation.",
              answers: ["which","who","where","whose","when","which"],
              why: [
                "A thing (a country): <b>which</b>.",
                "People: <b>who</b>.",
                "A place: <b>where</b>.",
                "Their families → <b>whose</b>.",
                "A time: <b>when</b>.",
                "Non-defining (commas): <b>which</b>, never <i>that</i>."
              ]
            },
            {"type":"part","n":2,"title":"Preposition + which / whom","goal":"Choose the correct and the most formal sentence."},
            {
              type: "model",
              title: "Formal patterns",
              rows: [
                ["noun + preposition + which / whom","the river <b>in which</b> the children swam · the people <b>with whom</b> he lived"],
                [
                  "academic favourites",
                  "a formula <b>according to which</b> … · a book <b>with the help of which</b> … · conditions <b>under which</b> … · a person <b>through whom</b> … · data <b>based on which</b> …"
                ]
              ]
            },
            {
              type: "quiz",
              id: "rl-p2-q",
              title: "Which sentence is correct and formal?",
              items: [
                {
                  q: "The sport ___ is swimming.",
                  options: ["which I am interested in it","in which I am interested","which I am interested in that"],
                  answer: "in which I am interested",
                  why: "No extra <i>it</i>. Formal: the preposition moves before <b>which</b>."
                },
                {
                  q: "We have a house ___ for 15 years.",
                  options: ["where we have been living in it","in which we have been living","which we have been living"],
                  answer: "in which we have been living",
                  why: "<i>where … in it</i> repeats the place twice. <b>in which</b> (or <b>where</b>, without <i>in it</i>)."
                },
                {
                  q: "There are some conditions ___ people may change their minds.",
                  options: ["which people may change their minds under them","under which","which under them"],
                  answer: "under which",
                  why: "<b>under which</b> + subject + verb."
                },
                {
                  q: "I know someone ___ we can solve our problems.",
                  options: ["whom we can solve our problems through him","through whom","who through him"],
                  answer: "through whom",
                  why: "After a preposition: <b>whom</b> for people."
                },
                {
                  q: "There is a formula ___ we can answer many questions.",
                  options: ["according to which","which we can answer according to that","which according to it"],
                  answer: "according to which",
                  why: "<b>according to which</b> + subject + verb."
                }
              ]
            },
            {"type":"part","n":3,"title":"Level up: shorter clauses","goal":"Make relative clauses shorter, the way academic texts do."},
            {
              type: "key",
              title: "Reduction in 3 steps",
              numbered: true,
              points: [
                "Only when a <b>verb</b> comes right after who / which / that.",
                "Delete who / which / that (and <i>is / are / was / were</i>).",
                "Active verb → <b>-ing</b> (who lives → <b>living</b>). Passive verb → <b>past participle</b> (which was built → <b>built</b>)."
              ]
            },
            {
              type: "pairs",
              items: [
                {"from":"I have a friend [[who lives]] in China.","to":"I have a friend [[living]] in China.","tag":"active → -ing"},
                {
                  from: "Items [[which are found]] at the airport can be collected from customs.",
                  to: "Items [[found]] at the airport can be collected from customs.",
                  tag: "passive → -ed / -en"
                },
                {"from":"I have a student [[who I see]] every day.","to":"No reduction: <i>who</i> + subject (I) + verb.","tag":"not possible"}
              ]
            },
            {
              type: "cloze",
              id: "rl-p3-cl",
              title: "Dr Chu’s class: choose the short form",
              options: [
                ["taking","taken"],
                ["using","used"],
                ["who have been","being"],
                ["commenting","commented"],
                ["writing","written"],
                ["containing","contained"],
                ["teaching","taught"]
              ],
              text: "The students {{1}} Dr Chu’s class this semester are enjoying it. Dr Chu has written several chemistry books {{2}} in universities around the world. The students {{3}} in his classes consider it a privilege to study with him. He has also written several articles {{4}} on the effects of chemicals in our food. These articles, {{5}} several years ago, have been published in popular magazines. He believes that we should avoid all foods {{6}} chemical preservatives. You are lucky to be in a class {{7}} by such a respected scholar.",
              answers: ["taking","used","who have been","commenting","written","containing","taught"],
              why: [
                "who are taking → <b>taking</b> (active).",
                "which are used → <b>used</b> (passive).",
                "<i>who have been in his classes</i>: no main verb to change, so keep the full clause.",
                "which comment → <b>commenting</b> (active).",
                "which were written → <b>written</b> (passive).",
                "which contain → <b>containing</b> (active).",
                "which is taught → <b>taught</b> (passive)."
              ]
            }
          ]
        },
        {
          id: "rl-use",
          short: "Use it",
          minutes: 12,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-use.svg",
          title: "A place worth protecting",
          goal: "Write 5–6 sentences about a natural place in your country (or Costa Rica). Use who, which, where and whose, and one non-defining clause with commas.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Think of a natural place: a forest, a beach, a mountain, a lake. Who visits it? What lives there? What threatens it?"
            },
            {
              type: "detect",
              id: "rl-u1-dt",
              title: "My mini travel guide",
              label: "Writing studio",
              hint: "The lights show the relative words you used. A red chip warns about an extra pronoun.",
              checks: [
                {"label":"who","color":"#2b776e","any":["/\\bwho\\b/"]},
                {"label":"which / that","color":"#3a58a0","any":["/\\b(which|that)\\b/"]},
                {"label":"where","color":"#7a4a8c","any":["/\\bwhere\\b/"]},
                {"label":"whose","color":"#b0512a","any":["/\\bwhose\\b/"]},
                {"label":", which … (extra information)","color":"#985c0e","any":["/, (which|who|whose|where) /"]}
              ],
              avoid: [
                {"label":"who + he / she / they?","any":["/\\bwho (he|she|they)\\b/"]},
                {"label":"which … it / them?","any":["/\\b(which|that) (i|we|you|they|he|she|people|tourists|visitors) \\w+ (it|them)\\b/"]},
                {"label":", that …? Use , which","any":["/, that (is|are|was|were|has|have)\\b/"]}
              ],
              items: [
                {
                  rows: 7,
                  placeholder: "Halong Bay, which is in northern Vietnam, …",
                  model: "Halong Bay<b>, which</b> is in northern Vietnam, has nearly 2,000 limestone islands. It attracts tourists <b>who</b> want to kayak and explore caves. There are floating villages <b>where</b> families have fished for generations. Fishermen <b>whose</b> boats now carry tourists earn more than before. However, the waste <b>which</b> the boats produce is a serious problem."
                }
              ]
            },
            {
              type: "do",
              n: 2,
              who: "alone",
              text: "Check your own text: can you make one clause shorter (Practise, Part 3)? Is every non-defining clause between commas?"
            },
            {
              type: "checklist",
              id: "rl-u1-can",
              title: "Can you do it?",
              items: [
                "I put the relative word right after its noun.",
                "I never keep an extra pronoun (it, him, them) in the clause.",
                "I use commas for extra information, and never with that.",
                "I can make some clauses shorter with -ing or a past participle."
              ]
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["relative clause","a group of words with a verb that comes after a noun and describes it","the beach where turtles nest"],
    ["defining relative clause","a clause that tells us which person or thing we mean (no commas)","the students who passed"],
    ["non-defining relative clause","a clause that adds extra information between commas","Costa Rica, which has no army, …"],
    ["reduced relative clause","a shorter clause without who / which, using -ing or a past participle","items found at the airport"]
  ]
};
