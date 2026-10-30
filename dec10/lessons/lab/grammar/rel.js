/* DEC10 · Language Lab · Grammar 4 — Relative clauses (who, which, that, whose, where, when; no extra pronoun;
   preposition + which/whom; defining and non-defining; reduced relative clauses).
   Source: the teacher's "Interactive Grammar" document (Relative Clauses), set in the Week 4 topic (ecotourism, Costa Rica).
   One page, four tabs: Warm-up · Learn · Practise · Use it (built for self-study). */
window.DEC15_LESSON = {
  id: "d10lab-rel",
  week: null,
  day: null,
  title: "Relative clauses",
  duration: "About 60 minutes",
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
      minutes: 61,
      tone: "teal",
      art: "dec10/assets/lab/s-learn.svg",
      title: "Relative clauses",
      subtitle: "Warm-up · Learn · Practise · Use it",
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
          short: "Learn",
          minutes: 22,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-learn.svg",
          title: "Relative clauses, step by step",
          goal: "Learn which word to use, where it goes, the biggest mistake, commas, and how to shorten a clause.",
          blocks: [
            {
              type: "key",
              title: "What is a relative clause?",
              points: [
                "A relative clause is a group of words with its own verb that comes <b>after a noun</b> and describes it, like a long adjective.",
                "It starts with a <b>relative word</b>: who, which, that, whose, where, when.",
                "Academic writers use them to give precise information in one sentence."
              ]
            },
            {
              type: "pairs",
              items: [
                {"from":"I have a [[funny]] friend.","to":"I have a friend [[who makes me laugh a lot]].","tag":"adjective → clause"},
                {"from":"He has a [[Japanese]] car.","to":"He has a car [[which is made in Japan]].","tag":"adjective → clause"}
              ]
            },
            {
              type: "rule",
              n: 1,
              title: "who, which, that",
              explain: "Use <b>who</b> for people and <b>which</b> for things and animals. <b>that</b> can replace who or which, but only when there are <b>no commas</b> (see Rule 6).",
              form: "person + <b>who</b> … · thing / animal + <b>which</b> … · person or thing + <b>that</b> … (no commas)",
              examples: [
                ["ok","Guides <b>who</b> speak English earn more."],
                ["ok","Tortuguero is a park <b>which</b> protects sea turtles."],
                ["ok","The plan <b>that</b> the government chose is expensive."],
                ["no","The tourists <b>which</b> visit the park …","people → who"]
              ],
              check: {"q":"an animal ___ lives in trees (who / which)","a":"<b>which</b> (or <b>that</b>): an animal is not a person."}
            },
            {
              type: "rule",
              n: 2,
              title: "whose = his, her, its, their",
              explain: "<b>whose</b> shows possession. It replaces <i>his, her, its</i> or <i>their</i>, and it is followed by a noun.",
              form: "noun + <b>whose</b> + noun + verb …",
              examples: [
                ["ok","Costa Rica is a country <b>whose</b> forests cover about half of its land.","= its forests"],
                ["ok","I met a guide <b>whose</b> family once hunted turtles.","= his family"],
                ["no","a country <b>which its</b> forests …","→ whose forests"]
              ],
              check: {"q":"Join: “I have a classmate. Her father is a pilot.”","a":"I have a classmate <b>whose</b> father is a pilot."}
            },
            {
              type: "rule",
              n: 3,
              title: "where and when",
              explain: "Use <b>where</b> for places and <b>when</b> for times. <b>where</b> already means <i>in which</i>, so do not add <i>in</i> or <i>there</i> at the end.",
              form: "place + <b>where</b> + subject + verb · time + <b>when</b> + subject + verb",
              examples: [
                ["ok","This is the beach <b>where</b> turtles nest."],
                ["ok","July is the month <b>when</b> green turtles arrive."],
                ["no","the house <b>where</b> I live <b>in</b>","→ the house where I live · the house which I live in · the house in which I live"]
              ],
              check: {"q":"the city ___ I was born (where / which)","a":"<b>where</b> I was born (or <i>in which</i> I was born)."}
            },
            {
              type: "rule",
              n: 4,
              title: "The biggest mistake: one noun, one pronoun",
              explain: "The relative word <b>replaces</b> a pronoun (he, she, it, them …). So do <b>not</b> keep the old pronoun in the clause.",
              form: "I have a book. I bought <b>it</b> on Saturday. → I have a book <b>which</b> I bought <s>it</s> on Saturday.",
              examples: [
                ["no","I have a friend who <b>she</b> is a painter.","→ who is a painter"],
                ["no","He watches programmes which I hate <b>them</b>.","→ which I hate"],
                ["no","The house which I live in <b>it</b> is small.","→ which I live in"],
                ["ok","There are two people who I work with."]
              ],
              note: "This is the most common relative clause error in student writing. Check every who / which / that in your text."
            },
            {
              type: "figure",
              src: "dec10/assets/lab/rel-clause.svg",
              alt: "I have a book. I bought it on Saturday. becomes I have a book which I bought on Saturday. The word it is crossed out because which already stands for the book.",
              caption: "<b>which</b> replaces <b>it</b>. Do not keep both."
            },
            {
              type: "rule",
              n: 5,
              title: "When can you leave out who / which / that?",
              explain: "If the relative word is the <b>object</b> of the clause (a new subject follows it), you can leave it out. If it is the <b>subject</b> (a verb follows it), you must keep it.",
              form: "noun + (<b>which</b>) + <b>subject</b> + verb → can omit · noun + <b>who/which</b> + <b>verb</b> → must keep",
              examples: [
                ["ok","The book (<b>which</b>) I bought is about grammar.","I = new subject → which can go"],
                ["ok","The man <b>who</b> lives next door helps us.","who + lives → keep who"],
                ["no","The man lives next door helps us."]
              ],
              check: {"q":"Can you leave out “that”? “The report that we read was long.”","a":"Yes: <i>The report we read was long.</i> (we = a new subject)"}
            },
            {
              type: "rule",
              n: 6,
              title: "Formal: preposition + which / whom",
              explain: "In formal writing, the preposition can move to the front, before <b>which</b> (things) or <b>whom</b> (people). Never use <i>who</i> or <i>that</i> after a preposition.",
              form: "noun + <b>preposition + which / whom</b> + subject + verb",
              examples: [
                ["ok","It was the river <b>in which</b> the children swam.","informal: the river (which) the children swam in"],
                ["ok","The person <b>with whom</b> he is negotiating is the chairman."],
                ["ok","There is a formula <b>according to which</b> we can answer many questions."],
                ["no","the person <b>with who</b> he works","→ with whom"]
              ],
              note: "Academic favourites: <i>according to which, through which, based on which, under which, without which</i>.",
              check: {"q":"Make it formal: “the conditions which people change their minds under”","a":"the conditions <b>under which</b> people change their minds"}
            },
            {
              type: "rule",
              n: 7,
              title: "Which one? or extra information? (commas)",
              explain: "A <b>defining</b> clause tells us <b>which</b> person or thing: no commas. A <b>non-defining</b> clause adds <b>extra information</b> about a noun we already know: commas, and never <i>that</i>.",
              form: "Defining: People <b>who live here</b> … · Non-defining: London<b>, which is the capital,</b> …",
              examples: [
                ["ok","People <b>who live in this city</b> have dark hair.","which people? → defining"],
                ["ok","London<b>, which is the capital of England,</b> is overcrowded.","there is only one London → extra information"],
                ["ok","My brother<b>, who is 27,</b> has long hair.","I have one brother"],
                ["ok","My brother <b>who is 27</b> has long hair.","I have more than one brother: the one who is 27"],
                ["no","Costa Rica<b>, that</b> has no army, …","→ , which has no army,"]
              ],
              check: {
                q: "Commas or not? “Our class which is on the second floor has 21 chairs.”",
                a: "Commas: <i>Our class, which is on the second floor, has 21 chairs.</i> (we have one class)"
              }
            },
            {
              type: "rule",
              n: 8,
              title: "Level up: shorter clauses",
              explain: "When a <b>verb</b> comes right after who / which / that, academic writers often shorten the clause: delete the relative word (and is / are / was / were), then use <b>-ing</b> for an active verb or the <b>past participle</b> for a passive verb.",
              form: "who <b>lives</b> → <b>living</b> · which <b>was built</b> → <b>built</b> · who I see → (no reduction: a new subject)",
              examples: [
                ["ok","I have a friend <b>living</b> in China.","= who lives"],
                ["ok","Items <b>found</b> at the airport can be collected from customs.","= which are found"],
                ["ok","People <b>invited</b> to this party should wear formal clothes."],
                ["no","I have a student <b>seeing</b> every day.","“who I see”: who + subject → cannot reduce"]
              ],
              check: {"q":"Shorten: “The students who are taking this class enjoy it.”","a":"The students <b>taking</b> this class enjoy it."}
            },
            {
              type: "model",
              title: "Rules at a glance",
              rows: [
                ["who / which / that","people / things / either (no commas)"],
                ["whose","= his, her, its, their + noun"],
                ["where / when","place / time — no extra <i>in</i> or <i>there</i>"],
                ["One noun, one pronoun","never <s>which I bought it</s>"],
                ["Leave it out?","only when a new subject follows"],
                ["Formal","in which, with whom, according to which"],
                ["Commas","extra information → commas, never that"],
                ["Shorter","who lives → living · which was built → built"]
              ]
            }
          ]
        },
        {
          id: "rl-practise",
          short: "Practise",
          minutes: 19,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Controlled practice: recognise → choose → combine",
          goal: "Three short parts. Do them in order.",
          blocks: [
            {"type":"part","n":1,"title":"Recognise","goal":"Find the extra pronoun, then decide: defining or non-defining?"},
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
            },
            {"type":"part","n":2,"title":"Choose","goal":"Choose the relative word, the formal pattern and the short form."},
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
            },
            {"type":"part","n":3,"title":"Combine","goal":"Join the two sentences with a relative clause. Write one sentence."},
            {
              type: "rewrite",
              id: "rl-p4-rw",
              title: "Join the sentences",
              hint: "Use who, which, whose or where. Use commas when the second sentence is extra information.",
              items: [
                {
                  q: "Costa Rica is a small country. It protects a quarter of its land.",
                  accept: ["Costa Rica is a small country which protects a quarter of its land.","Costa Rica is a small country that protects a quarter of its land."],
                  model: "Costa Rica is a small country which protects a quarter of its land."
                },
                {
                  q: "I met a guide. His family has lived in the park for a hundred years.",
                  accept: ["I met a guide whose family has lived in the park for a hundred years."],
                  model: "I met a guide whose family has lived in the park for a hundred years."
                },
                {
                  q: "This is the beach. Turtles lay their eggs here.",
                  accept: ["This is the beach where turtles lay their eggs.","This is the beach on which turtles lay their eggs."],
                  model: "This is the beach where turtles lay their eggs."
                },
                {
                  q: "Tortuguero is on the Caribbean coast. It is famous for its turtles.",
                  accept: ["Tortuguero, which is on the Caribbean coast, is famous for its turtles.","Tortuguero, which is famous for its turtles, is on the Caribbean coast."],
                  model: "Tortuguero, which is on the Caribbean coast, is famous for its turtles.",
                  why: "Only one Tortuguero → commas and which."
                },
                {
                  q: "The students are taking Dr Chu’s class. They enjoy it. (Use a short clause.)",
                  accept: ["The students taking Dr Chu’s class enjoy it."],
                  model: "The students taking Dr Chu’s class enjoy it.",
                  why: "who are taking → taking."
                }
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
