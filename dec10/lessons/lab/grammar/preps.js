/* DEC10 · Language Lab · Grammar 2 — Dependent prepositions (adjective / verb / noun + preposition).
   Source: the teacher's "Interactive Grammar" document (Prepositions), set in seminar preparation.
   One page, four tabs: Warm-up · Learn · Practise · Use it (built for self-study). */
window.DEC15_LESSON = {
  id: "d10lab-preps",
  week: null,
  day: null,
  title: "Words that travel together",
  duration: "About 50 minutes",
  questionKind: "Can-do",
  questionLabel: "By the end of this lesson you can",
  question: "use the right preposition after common adjectives, verbs and nouns — aware of, rely on, solution to — and learn them as chunks.",
  journey: "Many words always take the same preposition. There is no rule to guess it, so you learn the word and its preposition together, as one chunk.",
  goalShort: "more accurate writing and speaking",
  image: "dec10/assets/lab/hero-grammar.svg",
  imageAlt: "Sentence tiles and floating chips such as rely on, However, and is / are.",
  finish: {"title":"Next lesson","text":"Linking ideas"},
  sections: [
    {
      id: "lesson",
      number: "1",
      minutes: 49,
      tone: "teal",
      art: "dec10/assets/lab/s-learn.svg",
      title: "Words that travel together",
      subtitle: "Warm-up · Learn · Practise · Use it",
      outcome: "use the right preposition after common adjectives, verbs and nouns — aware of, rely on, solution to — and learn them as chunks.",
      activities: [
        {
          id: "pr-warm",
          short: "Warm-up",
          minutes: 7,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-warm.svg",
          title: "Ready for Wednesday?",
          goal: "Read a chat and notice the word that comes after each highlighted word.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Mei and Omar give their Opening Remarks on Wednesday. Read their chat. Look at the highlighted chunks."},
            {
              type: "chat",
              title: "Group chat · Seminar Group 2",
              right: "Omar",
              lines: [
                ["Mei","Are you ready for our Opening Remarks on Wednesday?"],
                ["Omar","Almost. I’m still <mark>worried about</mark> my part. I’m <mark>responsible for</mark> the solutions section."],
                ["Mei","Don’t worry, you can <mark>rely on</mark> me for the slides. I’m quite <mark>good at</mark> design."],
                ["Omar","Thanks! The main <mark>reason for</mark> my stress is the questions. What if I don’t know the <mark>answer to</mark> one?"],
                ["Mei","Then say it <mark>depends on</mark> the context, and ask the group. We’re all <mark>familiar with</mark> the topic."],
                ["Omar","True. And I’m really <mark>interested in</mark> Germany’s <mark>solution to</mark> the jobs problem, so I’ll enjoy it."]
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Sort the chunks. What kind of word comes before the preposition?"},
            {
              type: "sort",
              id: "pr-w1-sort",
              title: "Adjective, verb or noun + preposition?",
              buckets: [
                {"label":"Adjective +","text":"worried about","letter":"A"},
                {"label":"Verb +","text":"rely on","letter":"V"},
                {"label":"Noun +","text":"reason for","letter":"N"}
              ],
              items: [
                {"text":"worried about","answer":0},
                {"text":"responsible for","answer":0},
                {"text":"good at","answer":0},
                {"text":"familiar with","answer":0},
                {"text":"interested in","answer":0},
                {"text":"rely on","answer":1},
                {"text":"depends on","answer":1},
                {"text":"reason for","answer":2},
                {"text":"answer to","answer":2},
                {"text":"solution to","answer":2}
              ]
            },
            {"type":"do","n":3,"who":"alone","text":"Think: could you guess these prepositions from a rule? Then write the chunks you often get wrong."},
            {
              type: "fields",
              fields: [{"id":"pr-w1-mine","label":"Prepositions I often get wrong","rows":2,"placeholder":"e.g. interested in (not on), depend on (not of)"}]
            }
          ],
          answers: {
            items: [
              [
                "Could you guess them from a rule?",
                "Usually not. <i>interested <b>in</b></i>, <i>rely <b>on</b></i>, <i>reason <b>for</b></i>: the preposition belongs to the word, so you learn them together, as chunks."
              ]
            ]
          }
        },
        {
          id: "pr-learn",
          short: "Learn",
          minutes: 18,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-learn.svg",
          title: "Dependent prepositions, step by step",
          goal: "Learn how these chunks work, the five patterns, and the mistakes to avoid.",
          blocks: [
            {
              type: "key",
              title: "What is a dependent preposition?",
              points: [
                "Some adjectives, verbs and nouns are always followed by the <b>same preposition</b>: <i>interested <b>in</b>, depend <b>on</b>, the reason <b>for</b></i>.",
                "The preposition depends on the word before it, not on the meaning of the sentence. There is usually <b>no rule</b> to guess it.",
                "So the best strategy is to learn the word and its preposition <b>together</b>, as one chunk."
              ]
            },
            {
              type: "rule",
              n: 1,
              title: "Adjective + preposition",
              explain: "Many adjectives that describe feelings, skills or knowledge take a fixed preposition. They often come after <b>be</b>.",
              form: "be + <b>adjective</b> + <b>preposition</b> + noun / -ing",
              examples: [
                ["ok","We weren’t aware <b>of</b> the problem."],
                ["no","We weren’t aware <b>about</b> the problem.","aware → of"],
                ["ok","She is good <b>at</b> running and swimming."],
                ["ok","Are you familiar <b>with</b> this software?"],
                ["ok","I am responsible <b>for</b> the slides."]
              ],
              note: "More: interested <b>in</b> · keen <b>on</b> · fluent <b>in</b> · satisfied <b>with</b> · worried <b>about</b> · based <b>on</b>",
              check: {"q":"We are very satisfied ___ the result. (of / with)","a":"<b>with</b>: satisfied with."}
            },
            {
              type: "rule",
              n: 2,
              title: "Verb + preposition",
              explain: "Some verbs need a preposition before their object. Some have an object <b>and</b> a preposition.",
              form: "<b>verb</b> + <b>preposition</b> + noun · <b>verb</b> + object + <b>preposition</b> + noun",
              examples: [
                ["ok","It depends <b>on</b> the weather."],
                ["no","It depends <b>of</b> the weather.","depend → on"],
                ["ok","I can rely <b>on</b> you."],
                ["ok","I need to translate this document <b>into</b> German.","verb + object + into"],
                ["ok","I borrowed money <b>from</b> my sister. I lent money <b>to</b> a friend.","borrow FROM someone, lend TO someone"]
              ],
              note: "More: concentrate <b>on</b> · complain <b>about</b> · insist <b>on</b> · succeed <b>in</b> · decide <b>on</b> · divide … <b>into</b> · help someone <b>with</b>",
              check: {"q":"Can I borrow your pen? / Can you ___ me your pen? (borrow / lend)","a":"Can you <b>lend</b> me your pen? (You give it to me.)"}
            },
            {
              type: "rule",
              n: 3,
              title: "Noun + preposition",
              explain: "Many academic nouns have a fixed preposition. They are very common in essays.",
              form: "<b>noun</b> + <b>preposition</b> + noun",
              examples: [
                ["ok","There is no easy solution <b>to</b> the problem."],
                ["ok","The reason <b>for</b> the delay was the late flight."],
                ["ok","There is an urgent need <b>for</b> qualified teachers."],
                ["ok","There has been an increase <b>in</b> e-waste.","increase IN something"],
                ["ok","Fast fashion has a huge effect <b>on</b> the environment."]
              ],
              note: "More: attitude <b>to / towards</b> · a problem <b>with</b> · a decrease <b>in</b> · the impact <b>on</b>",
              check: {"q":"What is the main cause ___ the problem? (of / for)","a":"<b>of</b>: the cause of something."}
            },
            {
              type: "rule",
              n: 4,
              title: "After a preposition, use -ing",
              explain: "A preposition is followed by a noun or by the <b>-ing</b> form of a verb, never by the base form or <i>to</i> + verb.",
              form: "preposition + <b>verb-ing</b>",
              examples: [
                ["ok","We have succeeded in <b>reducing</b> unemployment."],
                ["no","We have succeeded in <b>reduce</b> unemployment.","in + reducing"],
                ["ok","Simon insisted on <b>paying</b> for everything."],
                ["ok","I am looking forward to <b>meeting</b> you.","here “to” is a preposition → meeting"]
              ],
              check: {"q":"She is interested in ___ a PhD. (do / doing)","a":"<b>doing</b>: in + -ing."}
            },
            {
              type: "rule",
              n: 5,
              title: "One word, two prepositions, two meanings",
              explain: "A few words take different prepositions with different meanings. Learn the pair.",
              examples: [
                ["ok","She is good <b>at</b> maths. (a skill) · Exercise is good <b>for</b> you. (a benefit)"],
                ["ok","I agree <b>with</b> you. (a person) · We agreed <b>on</b> a plan. (a decision)"],
                ["ok","She is responsible <b>for</b> the budget. (a task) · She is responsible <b>to</b> the manager. (a person she reports to)"]
              ],
              check: {"q":"Walking is good ___ your health. (at / for)","a":"<b>for</b>: a benefit."}
            },
            {
              type: "rule",
              n: 6,
              title: "Common mistakes: an extra or a wrong preposition",
              explain: "Some verbs need <b>no</b> preposition, and some common chunks are often wrong in student writing.",
              examples: [
                ["no","We <b>discussed about</b> the results.","→ We discussed the results. (no about)"],
                ["no","The report <b>emphasises on</b> the cost.","→ emphasises the cost"],
                ["no","He is <b>married with</b> a doctor.","→ married to"],
                ["no","She is <b>interested on</b> politics.","→ interested in"],
                ["no","This is <b>the solution of</b> the problem.","→ the solution to"]
              ],
              note: "Not sure? A good learner’s dictionary (for example Cambridge or Oxford) shows the preposition in the examples: <i>aware <b>of</b> sth</i>."
            },
            {
              type: "language",
              title: "Chunks to learn",
              groups: [
                {
                  label: "Adjective + preposition",
                  phrases: [
                    "aware <b>of</b>",
                    "based <b>on</b>",
                    "familiar <b>with</b>",
                    "responsible <b>for</b>",
                    "good <b>at</b> / bad <b>at</b>",
                    "interested <b>in</b>",
                    "keen <b>on</b>",
                    "fluent <b>in</b>",
                    "satisfied <b>with</b>",
                    "worried <b>about</b>"
                  ]
                },
                {
                  label: "Verb + preposition",
                  phrases: [
                    "succeed <b>in</b>",
                    "rely <b>on</b>",
                    "divide … <b>into</b>",
                    "concentrate <b>on</b>",
                    "complain <b>about</b>",
                    "insist <b>on</b>",
                    "translate … <b>into</b>",
                    "borrow … <b>from</b>",
                    "lend … <b>to</b>",
                    "depend <b>on</b>",
                    "decide <b>on</b>",
                    "help … <b>with</b>"
                  ]
                },
                {
                  label: "Noun + preposition",
                  phrases: [
                    "solution <b>to</b>",
                    "reason <b>for</b>",
                    "need <b>for</b>",
                    "attitude <b>to / towards</b>",
                    "problem <b>with</b>",
                    "effect <b>on</b>",
                    "increase <b>in</b>"
                  ]
                }
              ]
            },
            {
              type: "model",
              title: "Rules at a glance",
              rows: [
                ["Adjective + prep","aware <b>of</b>, good <b>at</b>, interested <b>in</b>, responsible <b>for</b>"],
                ["Verb + prep","depend <b>on</b>, rely <b>on</b>, succeed <b>in</b>, translate … <b>into</b>"],
                ["Noun + prep","solution <b>to</b>, reason <b>for</b>, increase <b>in</b>, effect <b>on</b>"],
                ["After a preposition","verb + <b>-ing</b>: insisted on <b>paying</b>"],
                ["No preposition","discuss, emphasise, mention + noun"]
              ]
            }
          ]
        },
        {
          id: "pr-practise",
          short: "Practise",
          minutes: 16,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Controlled practice: recall → choose → correct",
          goal: "Three short parts. Do them in order.",
          blocks: [
            {"type":"part","n":1,"title":"Recall","goal":"Say the missing preposition before you turn each card."},
            {
              type: "flip",
              title: "What comes next?",
              items: [
                {"front":"We weren’t aware ___ the problem with our ticket.","back":"aware <b>of</b>"},
                {"front":"The film is based ___ a best-selling novel.","back":"based <b>on</b>"},
                {"front":"Are you familiar ___ the software we use?","back":"familiar <b>with</b>"},
                {"front":"I can’t concentrate ___ my work with all that noise.","back":"concentrate <b>on</b>"},
                {"front":"We have succeeded ___ reducing unemployment.","back":"succeed <b>in</b> + -ing"},
                {"front":"There is an urgent need ___ qualified teachers.","back":"need <b>for</b>"},
                {"front":"The government’s attitude ___ single-parent families is changing.","back":"attitude <b>to / towards</b>"},
                {"front":"I need to translate this document ___ German.","back":"translate <b>into</b>"}
              ]
            },
            {"type":"part","n":2,"title":"Choose","goal":"Choose the preposition in thirty sentences."},
            {
              type: "cloze",
              id: "pr-p1-cl",
              title: "Adjective + preposition",
              list: true,
              options: ["of","on","with","for","at","in","about"],
              text: "We weren’t aware {{1}} the problem with our ticket until we got to the airport.\nThe film, which is set in Sweden, is based {{2}} a best-selling novel.\nAre you familiar {{3}} the computer software we use?\nAs a marketing manager, I am responsible {{4}} all our publicity campaigns.\nShe is good {{5}} running and swimming.\nI am very bad {{6}} French; in fact, I can’t speak a word.\nMy grandmother is very interested {{7}} history.\nMy partner is not very keen {{8}} me buying a sports car.\nMy cousin is a great linguist: she’s fluent {{9}} four languages.\nWe are very satisfied {{10}} the result of our work.",
              answers: ["of","on","with","for","at","at","in","on","in","with"]
            },
            {
              type: "cloze",
              id: "pr-p2-cl",
              title: "Verb + preposition",
              list: true,
              options: ["in","on","into","about","from","to","with"],
              text: "We have succeeded {{1}} reducing unemployment to less than 5% of the workforce.\nI know I can rely {{2}} you to keep a secret.\nI need to divide this cake {{3}} four equal parts.\nI can’t concentrate {{4}} what I’m doing with all that noise outside.\nI’m going to complain to the manager {{5}} this.\nSimon insisted {{6}} paying for everything when we went out.\nI may have to borrow some money {{7}} my sister.\nIt’s often not a good idea to lend money {{8}} a friend.\nWe’re not sure about the picnic. It depends {{9}} the weather.\nHe often helps me {{10}} the housework.",
              answers: ["in","on","into","on","about","on","from","to","on","with"]
            },
            {
              type: "cloze",
              id: "pr-p3-cl",
              title: "Noun + preposition",
              list: true,
              options: ["to","for","with","towards"],
              text: "There doesn’t seem to be an easy solution {{1}} the problem.\nThe reason {{2}} the delay was the late arrival of the incoming flight.\nThere is an urgent need {{3}} qualified teachers in developing nations.\nI think the government’s attitude {{4}} single-parent families is changing.\nI have some problems {{5}} this new software.",
              answers: ["to","for","for","towards","with"],
              why: ["solution <b>to</b> a problem","reason <b>for</b>","need <b>for</b>","attitude <b>towards</b> (or <b>to</b>)","problem <b>with</b>"]
            },
            {"type":"part","n":3,"title":"Correct","goal":"Each sentence has one preposition mistake. Write the correct sentence."},
            {
              type: "rewrite",
              id: "pr-p4-rw",
              title: "Correct the sentence",
              hint: "Fix only the preposition (or the verb after it).",
              items: [
                {
                  q: "We discussed about the results in class.",
                  accept: ["We discussed the results in class."],
                  model: "We discussed the results in class.",
                  why: "discuss + noun: no about."
                },
                {"q":"She is interested on politics.","accept":["She is interested in politics."],"model":"She is interested in politics."},
                {"q":"It depends of the price.","accept":["It depends on the price."],"model":"It depends on the price."},
                {"q":"He is married with a doctor.","accept":["He is married to a doctor."],"model":"He is married to a doctor."},
                {
                  q: "I am looking forward to meet you.",
                  accept: ["I am looking forward to meeting you."],
                  model: "I am looking forward to meeting you.",
                  why: "to (preposition) + -ing."
                },
                {
                  q: "They succeeded to reduce their costs.",
                  accept: ["They succeeded in reducing their costs."],
                  model: "They succeeded in reducing their costs.",
                  why: "succeed in + -ing."
                }
              ]
            }
          ]
        },
        {
          id: "pr-use",
          short: "Use it",
          minutes: 8,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-use.svg",
          title: "Me and my seminar group",
          goal: "Speak first, then write. The lights show the chunks you used; red warns about a common error.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Answer each question aloud in a full sentence. Use the chunk. Record yourself if you can."},
            {
              type: "talk",
              title: "Answer aloud",
              prompts: [
                "What are you <b>good at</b> in group work?",
                "What are you <b>worried about</b> in your seminar?",
                "Which part are you <b>responsible for</b>?",
                "Who or what do you <b>rely on</b> when you research?",
                "What is your group’s <b>solution to</b> the problem?"
              ]
            },
            {
              type: "do",
              n: 2,
              who: "alone",
              text: "Write 4–6 sentences about your seminar group. Use at least one adjective chunk, one verb chunk and one noun chunk."
            },
            {
              type: "detect",
              id: "pr-u1-dt",
              title: "My seminar group",
              label: "Writing studio",
              hint: "The lights turn on when you use a chunk. A red chip means: check that preposition!",
              checks: [
                {
                  label: "Adjective + preposition",
                  color: "#2b776e",
                  any: ["aware of","based on","familiar with","responsible for","good at","bad at","interested in","keen on","fluent in","satisfied with","worried about"]
                },
                {
                  label: "Verb + preposition",
                  color: "#3a58a0",
                  any: [
                    "/\\b(succeed|succeeded|succeeds|rely|relied|relies|concentrate|concentrated|insist|insisted|depend|depends|depended|decide|decided|complain|complained) (on|in|about)\\b/",
                    "help me with",
                    "helps me with",
                    "helped me with",
                    "borrow",
                    "lend"
                  ]
                },
                {
                  label: "Noun + preposition",
                  color: "#7a4a8c",
                  any: ["solution to","reason for","need for","attitude to","attitude towards","problem with","problems with","effect on","increase in"]
                },
                {"label":"preposition + -ing","color":"#b0512a","any":["/\\b(in|on|at|about|for|of) \\w+ing\\b/"]}
              ],
              avoid: [
                {"label":"interested on / about?","any":["interested on","interested about"]},
                {"label":"depend of?","any":["/\\bdepend(s|ed)? of\\b/"]},
                {"label":"discuss about?","any":["/\\bdiscuss(es|ed)? about\\b/"]},
                {"label":"responsible of?","any":["responsible of"]},
                {"label":"aware about?","any":["aware about"]},
                {"label":"reason of?","any":["reason of"]}
              ],
              items: [
                {
                  rows: 6,
                  placeholder: "In our group, I am responsible for …",
                  model: "In our group, I am <b>responsible for</b> the solutions section. I am quite <b>good at</b> finding sources, but I am <b>worried about</b> the questions. Luckily, I can <b>rely on</b> Mei for the slides. Our <b>solution to</b> the problem <b>depends on</b> government funding, and we have succeeded <b>in finding</b> three good examples."
                }
              ]
            },
            {
              type: "checklist",
              id: "pr-u1-can",
              title: "Can you do it?",
              items: ["I learn new words with their preposition.","I use -ing after a preposition.","I used at least six chunks today."]
            },
            {
              type: "sticky",
              color: "green",
              title: "Keep a chunk list",
              text: "When you read, notice chunks (<i>an increase <b>in</b></i>, <i>the effect <b>on</b></i>) and add them to your notebook. Ten new chunks a week is a great habit."
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["preposition","a small word such as in, on, at, for, with, about that shows a relation","aware of, rely on"],
    ["chunk","a group of words we learn and use together as one unit","“the reason for” is a chunk"],
    ["dependent preposition","the preposition that always follows a particular word","interested in, depend on"]
  ]
};
