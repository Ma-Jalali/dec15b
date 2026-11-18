/* DEC10 · Week 4 · Day 3 (Wednesday) — Unpack it, say it strongly, present it.
   Week theme: Eco-tourism. Built from the Week 4 Teacher's Book (W4 D3. 9A Integrated writing workshop (2), W4 D4. 14A Seminar,
   W4 D3. 11A Integrated writing workshop Homework) and the Week 4 student booklet (9B/9C Sample 4.1 tables, Language Reference, 11A).
   Order and minutes follow the revised weekly map: 9A 150 min (TB 165 — “need to cut 15”: Review Sample Essay 4.1 15→10, Examine the
   writer’s process 15→10, Compare the sample with your response 45→40) · 14A 90 min (TB 75 — the extra time goes to Preparation for
   Next Week (15) and group work time) · 11A homework (40). Answer keys are the TB’s; activity titles use TB headings.
   Protected texts are in sources.js (s41, s42); passages copy Sample 4.1 / 4.2 paragraphs exactly. Teacher-only notes are not included
   (public site). Activity ids are the keys of saved work — never rename them.
   v9.9 redesign of 9A: stages Before reading → While reading → Language focus (PPP: rule cards with ✗/✓ examples and
   check questions → choose → write) → After reading. TB guiding questions are open discussion prompts (their TB answers
   are in each Answers panel); pictures that showed answers sit behind a lock or a fold; repeated tables were removed. */
window.DEC15_LESSON = {
  "id": "d10w4d3",
  "week": 4,
  "day": 3,
  "title": "Unpack it, say it strongly, present it",
  "duration": "About 4 hours + homework",
  "question": "To what extent are the goals of ecotourism likely to be achieved?",
  "questionKind": "Essay question",
  "questionLabel": "This week’s Integrated Writing question · the question of your Practice Assessment",
  "wordTarget": "450–600 words",
  "journey": "Look back at yesterday’s practice question, see how the writer of Sample 4.1 chose a position, and take the sample apart paragraph by paragraph and sentence by sentence. Then study its cohesion and evaluative language, collect language to express your position persuasively, and compare the sample with your own essay. After that, Group 2 gives its Seminar Presentation and Group 3 opens the eco-tourism seminar.",
  "image": "dec10/assets/week4/hero-d10w4d3.svg",
  "imageAlt": "Illustration: a large sample essay page in the middle is taken apart into coloured sentence strips labelled background, issue, position, counterargument and reason. A student with a magnifying glass studies it. Around it: a rainforest lodge, a sea turtle and a coral reef, a balance with green achievements and red problems, and on the right a seminar group presenting slides to classmates.",
  "finish": {
    "title": "Day 4",
    "text": "Nominalisation, citing sources and voice, and Integrated writing workshop (3)"
  },
  "goalShort": "your Integrated Writing Assessment (IWA)",
  "sections": [
    {
      "id": "iww2",
      "number": "01",
      "code": "9A",
      "minutes": 150,
      "tone": "green",
      "art": "dec10/assets/week4/s-d3-iww2.svg",
      "title": "Integrated writing workshop (2)",
      "subtitle": "Before reading → while reading → language focus → after reading: take Sample 4.1 apart, learn its language, then improve your own essay",
      "outcome": "You understand better how to develop an argument in an essay, how to achieve cohesion in your writing and how to express your position persuasively — and you can evaluate your writing after comparing it to a sample.",
      "activities": [
        {
          "id": "a1",
          "short": "The question",
          "minutes": 10,
          "grouping": "Pairs → Class",
          "art": "dec10/assets/week4/v/v-d10w4d3-a1.svg",
          "title": "Review the practice test question",
          "goal": "Look at yesterday’s question again — and remember how you answered it.",
          "blocks": [
            {
              "type": "key",
              "title": "Yesterday",
              "points": [
                "You completed a practice <b>Integrated Writing Task</b> (450–600 words) on this question.",
                "Today’s lesson is based on <b>Sample 4.1</b>. You read it for homework."
              ]
            },
            {
              "type": "question"
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "Analyse the question with your partner <b>before</b> you look at any answers. Short notes are fine."
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "a1-c",
                  "label": "1) What are the key <b>content words</b>? (They tell you where to focus your reading.)",
                  "rows": 1
                },
                {
                  "id": "a1-l",
                  "label": "2) Are there any <b>limiting words</b>? (They narrow the focus.)",
                  "rows": 1
                },
                {
                  "id": "a1-t",
                  "label": "3) What is the question asking you to do? Which words show this?",
                  "rows": 2
                },
                {
                  "id": "a1-f",
                  "label": "4) Which <b>rhetorical functions</b> are key in your answer?",
                  "rows": 2
                }
              ]
            },
            {
              "type": "figure",
              "src": "dec10/assets/week4/d3-question-parts.svg",
              "size": "wide",
              "alt": "The question “To what extent are the goals of ecotourism likely to be achieved?” with its parts labelled: “To what extent” = the task words (evaluate the degree); “goals of ecotourism” and “achieved” = content words (where to focus your reading); “likely” = maybe a limiting word (you must speculate). Below, three possible answers: likely to be achieved; not likely to be achieved; some goals likely, some unlikely.",
              "caption": "<b>Check:</b> content words, task words and a possible limiting word. Did you find the same?",
              "id": "a1-check",
              "title": "Check with the picture",
              "gate": "Answer questions 1–4 with your partner first. Then open the picture to check."
            },
            {
              "type": "rule",
              "n": 1,
              "title": "Answer “To what extent …?” with a clear position",
              "explain": "“To what extent” asks <b>how far</b>. It is not a yes/no question, and “there are good and bad sides” is not an answer. Your thesis must say <b>how far</b> — and <b>why</b>.",
              "form": "Topic + <b>extent / likelihood</b> language + <b>because</b> reason 1 <b>and</b> reason 2",
              "cols": [
                "✗ No clear position",
                "✓ Clear position"
              ],
              "pairs": [
                [
                  "Ecotourism has advantages and disadvantages.",
                  "While ecotourism has clear benefits, its goals are <b>unlikely</b> to be achieved <b>in the near future</b>, because …",
                  "The ✗ version only describes. It never says how far."
                ],
                [
                  "Ecotourism will definitely fail.",
                  "Ecotourism is <b>unlikely</b> to achieve its goals <b>without stronger regulation</b>.",
                  "Too absolute: one success story (Costa Rica) proves it wrong."
                ],
                [
                  "I think maybe some goals might possibly be achieved.",
                  "Ecotourism can achieve its economic goals <b>to a large extent</b>, but its social goals <b>only to a limited extent</b>.",
                  "Too many hedges. The ✓ version says <b>which</b> goals and <b>how far</b>."
                ]
              ],
              "note": "Extent and likelihood language: <i>to a large / considerable extent · to some extent · only to a limited extent · largely · partly · (highly) likely · unlikely · at least in the foreseeable future</i>",
              "check": {
                "q": "Is “Ecotourism has good and bad points” an answer to “To what extent …?”",
                "a": "No. It describes both sides but does not say how far the goals will be achieved. You need a position."
              }
            },
            {
              "type": "cards",
              "title": "5) Possible ways to answer the question",
              "numbered": true,
              "items": [
                {
                  "text": "The goals of ecotourism <b>are likely</b> to be achieved."
                },
                {
                  "text": "The goals of ecotourism <b>are not likely</b> to be achieved."
                },
                {
                  "text": "<b>Some</b> goals of ecotourism are likely to be achieved, but <b>some</b> are unlikely to be achieved."
                }
              ]
            },
            {
              "type": "sticky",
              "title": "Remember",
              "color": "yellow",
              "text": "The Integrated Writing Task is an <b>argument essay</b>. In an essay, you <b>must have a position</b>."
            },
            {
              "type": "choose",
              "id": "a1-pos",
              "title": "2. Reflect on your response · What was your position?",
              "options": [
                "The goals of ecotourism are likely to be achieved.",
                "The goals of ecotourism are not likely to be achieved.",
                "Some goals are likely to be achieved, but some are unlikely.",
                "Other"
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "alone",
              "text": "Write your thesis from yesterday again. Then improve it with extent or likelihood language and two reasons."
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "a1-th0",
                  "label": "My thesis yesterday (as I remember it)",
                  "rows": 2
                },
                {
                  "id": "a1-th1",
                  "label": "My thesis — improved (position + extent + two reasons)",
                  "rows": 3,
                  "placeholder": "While ecotourism …, its goals are … likely to be achieved …, because … and …"
                }
              ]
            },
            {
              "type": "talk",
              "title": "Tell your partner",
              "prompts": [
                "How did you decide on your position? Do you remember the process you went through?",
                "Was it hard to choose? What made you change your mind (if you did)?"
              ]
            },
            {
              "type": "language",
              "title": "Talking about how you decided",
              "groups": [
                {
                  "label": "Your position",
                  "phrases": [
                    "I argued that the goals are (un)likely to be achieved.",
                    "I took a middle position: some goals …, but …",
                    "My position was that …"
                  ]
                },
                {
                  "label": "How you decided",
                  "phrases": [
                    "First, I listed the … in the sources.",
                    "I found more evidence of … than …",
                    "In the end, I chose … because …",
                    "I changed my mind when I read …"
                  ]
                },
                {
                  "label": "Ask your partner",
                  "phrases": [
                    "What made you choose that position?",
                    "Which source convinced you most?",
                    "Did you plan before you wrote?"
                  ]
                }
              ]
            },
            {
              "type": "teacher",
              "text": "Short on time? Do Steps 1–2 and the check picture, then read Rule 1 together (2 minutes). The thesis rewrite can move to the start of Activity 10."
            }
          ],
          "answers": {
            "title": "Answers (Teacher’s Book) and an example",
            "items": [
              [
                "1) Content words",
                "goals of ecotourism; achieved"
              ],
              [
                "2) Limiting words",
                "No obvious limiting words; perhaps “likely” might be limiting, because it asks the writer to speculate — so that is the scope of the essay."
              ],
              [
                "3) Task",
                "The instructions are embedded in “To what extent”, which asks for an evaluation of the degree to which ecotourism is achievable."
              ],
              [
                "4) Rhetorical functions",
                "Key: <i>evaluating</i> the degree to which ecotourism is achievable, <i>persuading</i> the reader of your position and <i>speculating</i> on the likelihood, or not, of goals being achieved. Also: <i>defining</i> ecotourism and its goals, and <i>explaining the effects</i> of ecotourism."
              ],
              [
                "5) Possible answers",
                "1. likely to be achieved · 2. not likely to be achieved · 3. some likely, some unlikely"
              ],
              [
                "Improved thesis (example)",
                "While ecotourism can support local economies to some extent, its goals are unlikely to be achieved in the foreseeable future, because certification is weak and local communities often pay the social and environmental costs."
              ]
            ]
          },
          "category": "Before reading"
        },
        {
          "id": "a2",
          "short": "Sample 4.1",
          "minutes": 10,
          "grouping": "Pairs",
          "art": "dec10/assets/week4/v/v-d10w4d3-a2.svg",
          "title": "Review Sample Essay 4.1",
          "goal": "Find the sample writer’s position — and explain the essay to a partner.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "alone",
              "text": "Open <b>Sample 4.1</b>. Skim it again (2 minutes): the introduction, the first sentence of each paragraph and the conclusion."
            },
            {
              "type": "sources",
              "ids": [
                "s41"
              ]
            },
            {
              "type": "bet",
              "id": "a2-bet",
              "title": "What was the writer’s response (position) to the question?",
              "coins": 10,
              "items": [
                {
                  "q": "Choose the writer’s position — and bet on how sure you are.",
                  "options": [
                    "The goals of ecotourism are likely to be achieved.",
                    "The goals of ecotourism are not likely to be achieved.",
                    "Some goals of ecotourism are likely to be achieved, but some are unlikely to be achieved."
                  ],
                  "answer": "The goals of ecotourism are not likely to be achieved.",
                  "why": "Introduction S4: “… its goals are unlikely to be achieved, at least in the foreseeable future …”"
                },
                {
                  "q": "Which words show the writer’s position most clearly?",
                  "options": [
                    "“This essay argues, therefore, that …”",
                    "“Proponents of ecotourism argue that …”",
                    "“As Mielly (2023) points out, …”"
                  ],
                  "answer": "“This essay argues, therefore, that …”",
                  "why": "“This essay argues” = the writer’s own voice. “Proponents … argue” is other people’s view."
                }
              ]
            },
            {
              "type": "talk",
              "title": "Retell it — no peeking!",
              "prompts": [
                "<b>Student A:</b> close the essay. In one minute, tell B the writer’s position and the two reasons.",
                "<b>Student B:</b> what did A miss? Add it. Then explain what Body 1 does — and why it is there.",
                "<b>Together:</b> was your practice essay’s position the same as the sample’s?"
              ]
            },
            {
              "type": "language",
              "title": "Retelling an essay",
              "tabs": false,
              "groups": [
                {
                  "label": "Retell",
                  "phrases": [
                    "The writer argues that …",
                    "The two reasons are … and …",
                    "First, the writer accepts that …, but then …",
                    "The essay concludes that …"
                  ]
                }
              ]
            }
          ],
          "category": "While reading · gist"
        },
        {
          "id": "a3",
          "short": "Green or red?",
          "minutes": 10,
          "grouping": "Pairs",
          "art": "dec10/assets/week4/v/v-d10w4d3-a3.svg",
          "title": "Examine the sample writer’s process in deciding their position",
          "goal": "See how the writer chose a position — so you can use the same process.",
          "blocks": [
            {
              "type": "key",
              "title": "How do you choose a position?",
              "points": [
                "Strong writers do not start writing with a position. They <b>collect evidence</b> from the sources, <b>sort</b> it, and then <b>weigh it up</b>.",
                "Sample 4.1’s writer used two colours: <b>green</b> = evidence that the goals can be achieved · <b>red</b> = evidence of problems and barriers."
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "Try the writer’s method. These notes come from this week’s sources. Colour each one."
            },
            {
              "type": "sort",
              "id": "a3-sort",
              "title": "You are the writer: colour the notes green or red",
              "hint": "These ideas come from the sources. Drag each one into the right box — or tap a card, then a box.",
              "buckets": [
                {
                  "label": "Green: achievement",
                  "letter": "+",
                  "text": "goals can be reached"
                },
                {
                  "label": "Red: problem / negative impact",
                  "letter": "−",
                  "text": "barrier to the goals"
                }
              ],
              "items": [
                {
                  "text": "Agrotourism gives farmers extra income (Spenceley & Rylance, 2021).",
                  "answer": 0
                },
                {
                  "text": "Marine-protected areas help reduce hunger (Spenceley & Rylance, 2021).",
                  "answer": 0
                },
                {
                  "text": "Costa Rica is a model of sustainable tourism (Alom, 2023).",
                  "answer": 0
                },
                {
                  "text": "“Sustainable” and “regenerative” have no clear definition or enforcement (Mielly, 2023).",
                  "answer": 1
                },
                {
                  "text": "Certification can be weak or contain loopholes (Alom, 2023).",
                  "answer": 1
                },
                {
                  "text": "Bluewashing: ecotourism used for corporate interests (Mielly, 2023).",
                  "answer": 1
                },
                {
                  "text": "Communities are displaced from their land (Mielly, 2023).",
                  "answer": 1
                }
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "Weigh them up. Which side is heavier? So what position does the evidence support?"
            },
            {
              "type": "toggle",
              "title": "Check: how the writer weighed it up",
              "hint": "Open after you have decided.",
              "blocks": [
                {
                  "type": "figure",
                  "src": "dec10/assets/week4/d3-weigh-position.svg",
                  "size": "wide",
                  "alt": "A balance scale. On the left pan, green notes: evidence of achievements so far (a potential positive answer). On the right pan, more red notes: evidence of problems and negative impacts (a potential negative answer). The red side is heavier, so the scale points to “unlikely to be achieved”.",
                  "caption": "<b>Check:</b> green = achievements · red = problems. The writer weighed them up — red was heavier, so: <b>unlikely</b>."
                }
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "pair",
              "text": "Now put the writer’s steps in order."
            },
            {
              "type": "order",
              "id": "a3-order",
              "title": "What steps did the writer go through? Put them in order.",
              "items": [
                "Reminded themselves of the task words: <b>to what extent</b> are [the goals] <b>likely</b> to be achieved",
                "Put any evidence of achievements so far in <b>green</b> (a potential positive response)",
                "Put any evidence of problems and negative impacts in <b>red</b> (a potential negative response)",
                "Weighed up the green and red points: there were more red, so they took the <b>unlikely to be achieved</b> position"
              ],
              "ends": [
                "First",
                "Last"
              ]
            },
            {
              "type": "do",
              "n": 4,
              "who": "pair",
              "text": "The writer collected four kinds of ideas. Why each one? Match."
            },
            {
              "type": "match",
              "id": "a3-why",
              "title": "Which ideas did the writer select — and why?",
              "left": [
                "The goals of ecotourism",
                "Examples of achievements",
                "Problems or negative impacts",
                "Solutions to the problems"
              ],
              "right": [
                "“Goals of ecotourism” are topic words in the question.",
                "“Achieved” is a topic word in the question.",
                "They are evidence of barriers to the goals.",
                "They can be counterarguments to the barriers."
              ]
            },
            {
              "type": "tip",
              "text": "What if green and red are about <b>equal</b>? Then take a <b>middle position</b> — but say <b>which</b> goals are likely and which are not: “… to a large extent for the economy, but only to a limited extent for local communities.”"
            },
            {
              "type": "talk",
              "title": "Your process",
              "prompts": [
                "Did you colour or sort your notes before you wrote yesterday? How?",
                "Would the green/red method help you? Try it in your next essay plan."
              ]
            },
            {
              "type": "language",
              "title": "Weighing up evidence",
              "tabs": false,
              "groups": [
                {
                  "label": "Weigh it up",
                  "phrases": [
                    "On the positive side, …",
                    "On the other hand, there is more evidence of …",
                    "The problems seem to outweigh the achievements, so …",
                    "Overall, the evidence suggests that …"
                  ]
                }
              ]
            }
          ],
          "answers": {
            "title": "Answers (Teacher’s Book)",
            "items": [
              [
                "Steps",
                "1. reminded themselves of the task words <i>to what extent … likely</i> · 2. evidence of achievements in green · 3. evidence of problems and negative impacts in red"
              ],
              [
                "Why this position?",
                "Weighed up the positive (green) and negative (red) points and decided there are more of the latter, so took the <i>unlikely to be achieved</i> position."
              ],
              [
                "Ideas selected",
                "The <b>goals</b> of ecotourism (a topic word) · examples of <b>achievements</b> (a topic word) · problems or negative impacts (evidence of barriers) · solutions to the problems (counterarguments for the potential barriers)"
              ]
            ]
          },
          "category": "While reading · the writer’s process"
        },
        {
          "id": "a4",
          "short": "Paragraphs",
          "minutes": 10,
          "grouping": "Class → Pairs",
          "art": "dec10/assets/week4/v/v-d10w4d3-a4.svg",
          "title": "Deconstruction (analysis) of Sample 4.1: Rhetorical functions of the paragraphs",
          "goal": "Find the main purpose of each paragraph — the building blocks of the argument.",
          "blocks": [
            {
              "type": "key",
              "title": "Rhetorical functions",
              "points": [
                "The <b>main purpose</b> (macro rhetorical function) of an argument essay is to <b>persuade the reader</b> of your position.",
                "You persuade by presenting a <b>logical argument</b> AND <b>supporting it with evidence</b>.",
                "The <b>building blocks</b> of a logical argument are the <b>paragraphs</b>.",
                "<b>Each paragraph</b> has a specific purpose — and <b>each sentence</b> in a paragraph has a specific purpose."
              ]
            },
            {
              "type": "talk",
              "title": "Remember Week 1",
              "prompts": [
                "What is a rhetorical function? Give one example (e.g. defining, explaining effects, evaluating)."
              ]
            },
            {
              "type": "tip",
              "text": "After the sort, copy the purposes into the <b>3rd column</b> of your <b>Deconstruction table</b> (Student’s Book, W4 D3. 9B). Don’t focus on details — only the main purpose of each paragraph."
            },
            {
              "type": "cards",
              "title": "Two common ways to build an argument essay",
              "items": [
                {
                  "label": "A · Counter-argument first (Sample 4.1)",
                  "text": "Intro → <b>Body 1</b> the other side → <b>Body 2</b> BUT reject it + reason 1 → <b>Body 3</b> AND reason 2 → Conclusion. <i>The reader sees you have been fair — then you win the argument.</i>"
                },
                {
                  "label": "B · Reasons first",
                  "text": "Intro → <b>Body 1</b> reason 1 → <b>Body 2</b> reason 2 → <b>Body 3</b> the other side + why it is weaker → Conclusion. <i>Your strongest ideas come first.</i>"
                }
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "Read the <b>first and last sentence</b> of each paragraph of Sample 4.1. Which shape (A or B) is it? Then match each paragraph to its purpose."
            },
            {
              "type": "sources",
              "ids": [
                "s41"
              ]
            },
            {
              "type": "sort",
              "id": "a4-sort",
              "single": true,
              "title": "Match each paragraph to its purpose",
              "hint": "Read each paragraph quickly. Drag each purpose into the right paragraph.",
              "buckets": [
                {
                  "label": "Introduction"
                },
                {
                  "label": "Body 1"
                },
                {
                  "label": "Body 2"
                },
                {
                  "label": "Body 3"
                },
                {
                  "label": "Conclusion"
                }
              ],
              "items": [
                {
                  "text": "Give the context (background) of the topic and the writer’s position",
                  "answer": 0
                },
                {
                  "text": "Present a counter-argument to the writer’s position",
                  "answer": 1
                },
                {
                  "text": "Reject the counter-argument and present the first reason to support the position",
                  "answer": 2
                },
                {
                  "text": "Present the second reason to support the position",
                  "answer": 3
                },
                {
                  "text": "Re-state the position, summarise the supporting reasons and emphasise the importance of the position",
                  "answer": 4
                }
              ]
            },
            {
              "type": "toggle",
              "title": "Check: the building blocks of Sample 4.1",
              "hint": "Open after the sort.",
              "blocks": [
                {
                  "type": "figure",
                  "src": "dec10/assets/week4/d3-41-textmap.svg",
                  "size": "wide",
                  "alt": "The building blocks of Sample 4.1. Introduction: context and the writer’s position (unlikely, because of 2 reasons). Body 1: counter-argument — ecotourism is realistic (SDGs, Costa Rica). Body 2: BUT reject the counter-argument + reason 1 — lack of clear definition and regulation, bluewashing. Body 3: AND reason 2 — deep impact on local people (displacement). Conclusion: re-state the position, summarise the reasons, emphasise the importance.",
                  "caption": "The paragraphs build the overall logical structure: <b>counter-argument → BUT reason 1 → AND reason 2</b>."
                }
              ]
            },
            {
              "type": "talk",
              "title": "Discuss",
              "prompts": [
                "Why does the writer put the counter-argument <b>first</b>? How does it make the reader feel about the writer?",
                "Which shape did your practice essay have? Which one will you use in the Practice Assessment — and why?"
              ]
            }
          ],
          "answers": {
            "title": "Answers (Teacher’s Book deconstruction table)",
            "items": [
              [
                "[Introduction]",
                "Give the context (background) of the topic and the writer’s position"
              ],
              [
                "[Body 1]",
                "Present a counter-argument to the writer’s position"
              ],
              [
                "[Body 2]",
                "Reject the counter-argument and present the first reason to support position"
              ],
              [
                "[Body 3]",
                "Present the second reason to support position"
              ],
              [
                "[Conclusion]",
                "Re-state position and summarise supporting reasons · Emphasise the importance of thesis/position"
              ]
            ]
          },
          "category": "While reading · structure"
        },
        {
          "id": "a5",
          "short": "Intro + Body 1",
          "minutes": 15,
          "grouping": "Class → Pairs",
          "art": "dec10/assets/week4/v/v-d10w4d3-a5.svg",
          "title": "Deconstruction of Sample 4.1: Sentences in the introduction and body paragraph 1",
          "goal": "Find the purpose of each sentence — and the words that show it.",
          "blocks": [
            {
              "type": "key",
              "title": "Remember",
              "points": [
                "The <b>sentences</b> build the logical development of the paragraph.",
                "The sentences must <b>connect logically</b> to each other. Look for the words that show the connection."
              ]
            },
            {
              "type": "cards",
              "title": "Toolbox · the words that show a sentence’s job",
              "items": [
                {
                  "label": "Topic / background",
                  "text": "<i>… has grown into … · In response to …, … has emerged</i>"
                },
                {
                  "label": "BUT · issue or contrast",
                  "text": "<i>However, … · Despite …, however, … · While …, …</i>"
                },
                {
                  "label": "SO · position",
                  "text": "<i>This essay argues, therefore, that …</i>"
                },
                {
                  "label": "BECAUSE · reasons",
                  "text": "<i>because … · due to …</i>"
                },
                {
                  "label": "Evidence from a source",
                  "text": "<i>Indeed, … (Author, year) · As Mielly (2023) points out, …</i>"
                },
                {
                  "label": "AND · more evidence",
                  "text": "<i>Similarly, … · … are further compounded by …</i>"
                },
                {
                  "label": "SO · consequence",
                  "text": "<i>These activities … · As a result, …</i>"
                },
                {
                  "label": "SO · mini-conclusion",
                  "text": "<i>… is therefore evident · Such practices clearly …</i>"
                }
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "class",
              "text": "<b>Worked example.</b> Read the introduction with your teacher. For each sentence ask: <i>What is its job? Which words show it?</i>"
            },
            {
              "type": "passage",
              "id": "a5-intro",
              "title": "Sample 4.1 · Introduction",
              "text": "¹International tourism has grown into a vast global industry, bringing with it an intense focus on its environmental and social impacts. ²In response to the negative impacts, ecotourism has emerged as a potential form of responsible tourism (Alom, 2023; Mielly, 2023; Spenceley & Rylance, 2021). ³However, as the concept of ecotourism has evolved, so have the complexities and challenges associated with the implementation of its goals. ⁴This essay argues, therefore, that while ecotourism harbors the potential for positive impact, its goals are unlikely to be achieved, at least in the foreseeable future, because they are undermined by inadequate regulation, and ongoing localised social and environmental costs."
            },
            {
              "type": "talk",
              "title": "Guiding questions · the introduction",
              "prompts": [
                "What is the purpose of the first two sentences (S1 and S2)?",
                "What is the difference between S1 and S2?",
                "What is the purpose of S3? Which word tells us?",
                "S4 has two purposes. What are they?"
              ]
            },
            {
              "type": "toggle",
              "title": "The introduction, sentence by sentence",
              "hint": "Open after you have discussed the questions.",
              "blocks": [
                {
                  "type": "figure",
                  "src": "dec10/assets/week4/d3-intro-shape.svg",
                  "size": "wide",
                  "alt": "The introduction of Sample 4.1 as four steps narrowing down: S1 Topic: historical development (tourism has grown into a vast global industry). S2 Topic: present response (In response to …, ecotourism has emerged). S3 BUT issue (However, … complexities and challenges). S4 SO writer’s position (This essay argues, therefore, …) + counterargument (while …) BECAUSE 2 reasons (preview points).",
                  "caption": "Introduction: <b>historical development → present response → BUT issue → SO position + BECAUSE 2 reasons</b>."
                },
                {
                  "type": "text",
                  "list": [
                    "<b>S1 Topic: historical development</b> — “International tourism <u>has grown into</u> a vast global industry …”",
                    "<b>S2 Topic: present response</b> — “<u>In response to</u> the negative impacts, ecotourism has emerged …”",
                    "<b>S3 BUT issue</b> — “<u>However</u>, … so have the complexities and challenges …”",
                    "<b>S4 SO position + BECAUSE two reasons</b> — “<u>This essay argues, therefore,</u> that <u>while</u> … , its goals are unlikely … <u>because</u> … and …”"
                  ]
                }
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "<b>Your turn with a partner.</b> Read body paragraph 1. Discuss the guiding questions. Then write the job of each sentence in the table — use the toolbox words and BUT / SO / AND / BECAUSE."
            },
            {
              "type": "passage",
              "id": "a5-b1",
              "title": "Sample 4.1 · Body paragraph 1",
              "text": "¹Proponents of ecotourism argue that it provides a realistic sustainable alternative to conventional tourism. ²Indeed, ecotourism aligns with a number of Sustainable Development Goals, which can be achieved, for example, through agrotourism projects and the establishment of marine-protected areas (Spenceley & Rylance, 2021). ³These activities not only support local communities, but also ensure the preservation of ecosystems. ⁴Similarly, the positive depiction of Costa Rica as a model of sustainable tourism (Alom, 2023) illustrates how tourism can be integrated successfully to support the local economy. ⁵The potential for ecotourism to protect and improve the lives and environment of local communities is therefore evident."
            },
            {
              "type": "talk",
              "title": "Guiding questions · body paragraph 1",
              "prompts": [
                "What is the purpose of the topic sentence?",
                "Why does the writer include a reference in S2?",
                "How is S3 connected to S2? Which words show it?",
                "Why does S4 start with “Similarly”?",
                "What is the purpose of the final sentence?"
              ]
            },
            {
              "type": "table",
              "id": "a5-t",
              "title": "Deconstruction table · By sentence (introduction and body 1)",
              "columns": [
                "Sentence",
                "Purpose of the sentence (short notes, with linking words: BUT / SO / AND / BECAUSE)"
              ],
              "fixed": [
                "Intro S1",
                "Intro S2",
                "Intro S3",
                "Intro S4",
                "Body 1 S1",
                "Body 1 S2",
                "Body 1 S3",
                "Body 1 S4",
                "Body 1 S5"
              ]
            },
            {
              "type": "language",
              "title": "Explaining a sentence’s job",
              "tabs": false,
              "groups": [
                {
                  "label": "Say it",
                  "phrases": [
                    "The purpose of S3 is to introduce the issue.",
                    "The word “However” shows a contrast with …",
                    "S3 gives the consequences of S2.",
                    "This sentence re-states the counterargument."
                  ]
                }
              ]
            }
          ],
          "answers": {
            "title": "Answers (Teacher’s Book deconstruction table)",
            "items": [
              [
                "Intro S1",
                "Topic: historical development"
              ],
              [
                "Intro S2",
                "Topic: present response"
              ],
              [
                "Intro S3",
                "BUT Issue"
              ],
              [
                "Intro S4",
                "SO Writer’s position [+ counterargument] BECAUSE 2 reasons (preview points)"
              ],
              [
                "Body 1 S1",
                "Counter argument: ecotourism realistic (= achievable)"
              ],
              [
                "Body 1 S2",
                "Supporting evidence 1: activities to achieve goals"
              ],
              [
                "Body 1 S3",
                "SO consequences of activities"
              ],
              [
                "Body 1 S4",
                "AND Supporting evidence 2: Costa Rica example"
              ],
              [
                "Body 1 S5",
                "SO re-state counterargument: potential of ecotourism to achieve these goals"
              ],
              [
                "Intro Q1",
                "What is the purpose of the first two sentences (S1 and S2)? → <b>To introduce the topic of tourism/ecotourism</b>"
              ],
              [
                "Intro Q2",
                "What is the difference between S1 and S2? → <b>S1 = the historical development of tourism; S2 = the present response to it (“In response to …”)</b>"
              ],
              [
                "Intro Q3",
                "What is the purpose of S3? Which word tells us? → <b>To introduce the issue related to the topic — “However”</b>"
              ],
              [
                "Intro Q4",
                "S4 has two purposes. What are they? → <b>To state the writer’s position (“This essay argues”), including a counterargument (“while …”), AND to give the two reasons / preview points (“because … and …”)</b>"
              ],
              [
                "Body 1 Q1",
                "What is the purpose of the topic sentence? → <b>To introduce the counterargument mentioned in the thesis (“a realistic sustainable alternative …”)</b>"
              ],
              [
                "Body 1 Q2",
                "Why does the writer include a reference in S2? → <b>To give evidence (“Indeed …”) for the counterargument (goals … can be achieved … through …)</b>"
              ],
              [
                "Body 1 Q3",
                "How is S3 connected to S2? Which words show it? → <b>It gives the consequences of the activities in S2 — “These activities not only support … but also ensure …”</b>"
              ],
              [
                "Body 1 Q4",
                "Why does S4 start with “Similarly”? → <b>It adds more supporting evidence (Costa Rica) for the counterargument</b>"
              ],
              [
                "Body 1 Q5",
                "What is the purpose of the final sentence? → <b>To conclude (“therefore”) by re-stating the counterargument: the potential of ecotourism to achieve its goals</b>"
              ]
            ]
          },
          "category": "While reading · structure"
        },
        {
          "id": "a6",
          "short": "Body 2–3 + conclusion",
          "minutes": 15,
          "grouping": "Pairs",
          "art": "dec10/assets/week4/v/v-d10w4d3-a6.svg",
          "title": "Deconstruction of Sample 4.1: Body paragraphs 2 and 3, introduction and conclusion",
          "goal": "With your partner, find the purpose of each sentence — then see how the conclusion links back to the introduction.",
          "blocks": [
            {
              "type": "steps",
              "title": "Share the work",
              "items": [
                {
                  "who": "pair",
                  "text": "<b>Pair A</b> takes body paragraph 2. <b>Pair B</b> takes body paragraph 3. Use the guiding questions and the toolbox. Write your rows of the table (8 min)."
                },
                {
                  "who": "group",
                  "text": "Join the other pair. Explain your paragraph using only BUT / SO / AND / BECAUSE. They copy your notes (4 min)."
                },
                {
                  "who": "group",
                  "text": "All together: the conclusion (3 min)."
                }
              ]
            },
            {
              "type": "toggle",
              "ref": true,
              "title": "Toolbox · the words that show a sentence’s job",
              "blocks": [
                {
                  "type": "cards",
                  "title": "Toolbox · the words that show a sentence’s job",
                  "items": [
                    {
                      "label": "Topic / background",
                      "text": "<i>… has grown into … · In response to …, … has emerged</i>"
                    },
                    {
                      "label": "BUT · issue or contrast",
                      "text": "<i>However, … · Despite …, however, … · While …, …</i>"
                    },
                    {
                      "label": "SO · position",
                      "text": "<i>This essay argues, therefore, that …</i>"
                    },
                    {
                      "label": "BECAUSE · reasons",
                      "text": "<i>because … · due to …</i>"
                    },
                    {
                      "label": "Evidence from a source",
                      "text": "<i>Indeed, … (Author, year) · As Mielly (2023) points out, …</i>"
                    },
                    {
                      "label": "AND · more evidence",
                      "text": "<i>Similarly, … · … are further compounded by …</i>"
                    },
                    {
                      "label": "SO · consequence",
                      "text": "<i>These activities … · As a result, …</i>"
                    },
                    {
                      "label": "SO · mini-conclusion",
                      "text": "<i>… is therefore evident · Such practices clearly …</i>"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tabs",
              "title": "Body paragraphs",
              "tabs": [
                {
                  "label": "Pair A · Body 2",
                  "blocks": [
                    {
                      "type": "passage",
                      "id": "a6-b2",
                      "title": "Sample 4.1 · Body paragraph 2",
                      "text": "¹Despite the potential benefits, however, ecotourism frequently falls short of its ideals due to a lack of stringent regulations. ²As Mielly (2023) points out, terms such as sustainable and regenerative tourism lack clear definitions and regulatory enforcement, which means that tour operators can use the terms freely and falsely, without being subject to penalties. ³The writer acknowledges that regulations to enforce sustainable practices have met with success, such as in the case of Bahia. ⁴However, government regulations or market-based certification can also be insufficiently strict or contain loopholes (Alom, 2023). ⁵These regulatory challenges are further compounded by 'bluewashing', whereby ecotourism is used more to promote the interests of corporations than to promote genuine conservation efforts (Mielly, 2023). ⁶Such practices clearly undermine the goals of ecotourism."
                    },
                    {
                      "type": "talk",
                      "title": "Guiding questions · body paragraph 2",
                      "prompts": [
                        "What is the purpose of the topic sentence?",
                        "How is S2 connected to the topic sentence?",
                        "What is the purpose of S3 and S4?",
                        "How is S5 connected to S4?",
                        "What is the purpose of the final sentence?"
                      ]
                    }
                  ]
                },
                {
                  "label": "Pair B · Body 3",
                  "blocks": [
                    {
                      "type": "passage",
                      "id": "a6-b3",
                      "title": "Sample 4.1 · Body paragraph 3",
                      "text": "¹The challenges for ecotourism in achieving its goals extend beyond regulatory inadequacies to often deeply affecting local and indigenous populations. ²This occurs when ecotourism projects lead to the displacement of communities and the destruction of their environment, often under the guise of development and conservation (Mielly, 2023). ³These projects, while beneficial for both tourists and some local activities and businesses (Alom, 2023; Spenceley & Rylance, 2021), can also be manipulated to justify the displacement of local indigenous people, for example, in the cases of communities in Indonesia and Brazil, as Mielly (2023) points out. ⁴As a result, the writer adds, local populations lose their habitat, which is the source of their cultural and social life, and the habitat loss also means environmental destruction (Mielly, 2023). ⁵This ongoing kind of ‘bluewashing’ remains a significant barrier to ecotourism achieving its goals."
                    },
                    {
                      "type": "talk",
                      "title": "Guiding questions · body paragraph 3",
                      "prompts": [
                        "What is the purpose of the topic sentence?",
                        "How is S2 connected to the topic sentence?",
                        "How is S3 connected to S2?",
                        "How is S4 connected to S3?",
                        "What is the purpose of the final sentence?"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "table",
              "id": "a6-t",
              "title": "Deconstruction table · By sentence (body 2, body 3 and conclusion)",
              "columns": [
                "Sentence",
                "Purpose of the sentence (short notes)"
              ],
              "fixed": [
                "Body 2 S1",
                "Body 2 S2",
                "Body 2 S3",
                "Body 2 S4",
                "Body 2 S5",
                "Body 2 S6",
                "Body 3 S1",
                "Body 3 S2",
                "Body 3 S3",
                "Body 3 S4",
                "Body 3 S5",
                "Conclusion S1",
                "Conclusion S2",
                "Conclusion S3"
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "group",
              "text": "Read the conclusion. Then read the introduction’s S4 again. How does the writer say the same position <b>again</b> without copying it?"
            },
            {
              "type": "passage",
              "id": "a6-conc",
              "title": "Sample 4.1 · Conclusion",
              "text": "¹Ecotourism, while based on important goals, faces challenges that may prevent their realization. ²For ecotourism to truly achieve its goals as a sustainable development tool, it is essential to have robust regulatory frameworks to reduce undesirable practices such as bluewashing, together with significant reductions in social and environmental impacts. ³Only through such comprehensive and enforced measures can ecotourism reconcile its ideals with its goals."
            },
            {
              "type": "talk",
              "title": "The introduction and the conclusion",
              "prompts": [
                "Which sentence in the introduction contains the writer’s position?",
                "Which sentence in the conclusion restates the position?",
                "How does the writer paraphrase the position in the conclusion?",
                "How does S2 of the conclusion link back to the introduction?",
                "What is the purpose of S3 of the conclusion?"
              ]
            },
            {
              "type": "rule",
              "n": 2,
              "title": "Restate your position in the conclusion — don’t copy it",
              "compare": true,
              "explain": "The conclusion repeats your <b>position</b> and your <b>two reasons</b>, but in new words. Copying the introduction word for word looks lazy and wastes words.",
              "form": "Change the <b>order</b> · use <b>synonyms</b> · change a <b>verb into a noun</b> · use a <b>pronoun</b> · turn the reasons into <b>solutions</b>",
              "cols": [
                "Introduction (S4)",
                "Conclusion"
              ],
              "pairs": [
                [
                  "while ecotourism <b>harbors the potential for positive impact</b>",
                  "Ecotourism, while <b>based on important goals</b>, …",
                  "order changed + synonym"
                ],
                [
                  "its goals <b>are unlikely to be achieved</b>",
                  "… faces challenges that may prevent <b>their realization</b>",
                  "verb → noun (achieved → realization) + pronoun (their)"
                ],
                [
                  "undermined by <b>inadequate regulation</b> and <b>ongoing … social and environmental costs</b>",
                  "it is essential to have <b>robust regulatory frameworks</b> … together with <b>significant reductions in social and environmental impacts</b>",
                  "the two reasons become two solutions"
                ]
              ],
              "check": {
                "q": "Why does the conclusion say “may prevent” and not “will prevent”?",
                "a": "It keeps the position careful, like “unlikely” in the introduction — strong, but not absolute."
              }
            },
            {
              "type": "do",
              "n": 2,
              "who": "alone",
              "text": "Use the rule. Restate <b>your</b> improved thesis (Activity 1) as the first sentence of a conclusion."
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "a6-restate",
                  "label": "My conclusion, sentence 1",
                  "rows": 3,
                  "placeholder": "Although …, ecotourism … because …"
                }
              ]
            },
            {
              "type": "talk",
              "title": "Explain it to another pair",
              "prompts": [
                "Choose one body paragraph. Explain its logic using only BUT / SO / AND / BECAUSE.",
                "Which sentence would you remove if you had to? What would the paragraph lose?"
              ]
            },
            {
              "type": "teacher",
              "text": "Short on time? Each pair does only its paragraph and the conclusion; the restating rule and the conclusion sentence can be homework."
            }
          ],
          "answers": {
            "title": "Answers (Teacher’s Book deconstruction table)",
            "items": [
              [
                "Body 2 S1",
                "BUT reject counterargument + give reason (due to)"
              ],
              [
                "Body 2 S2",
                "BECAUSE Reason 1 [+ evidence]: lack of clear definition & regulation"
              ],
              [
                "Body 2 S3",
                "BUT (counter argument + evidence) regulations have been successful"
              ],
              [
                "Body 2 S4",
                "BUT (rejection of counterargument + evidence) regulations still not strict enough"
              ],
              [
                "Body 2 S5",
                "AND ‘bluewashing’ (+ evidence)"
              ],
              [
                "Body 2 S6",
                "SO ecotourism goals undermined (+ links back to writer’s position)"
              ],
              [
                "Body 3 S1",
                "AND Reason 2: deep impact on the people"
              ],
              [
                "Body 3 S2",
                "EXAMPLE and REASON for the impact: harmful ecotourism projects BECAUSE dishonest goals"
              ],
              [
                "Body 3 S3",
                "Evidence for dishonest goals"
              ],
              [
                "Body 3 S4",
                "SO specific impacts on local population"
              ],
              [
                "Body 3 S5",
                "SO barrier against ecotourism goals (+ links back to writer’s position)"
              ],
              [
                "Conclusion S1",
                "Re-statement of writer’s thesis (goals not achievable)"
              ],
              [
                "Conclusion S2",
                "SO recommendation based on supporting reasons (essential to have stronger regulations and reduced social & environmental impacts to achieve ecotourism goals)"
              ],
              [
                "Conclusion S3",
                "SO must have these measures to achieve ecotourism goals"
              ],
              [
                "Paraphrase of the position",
                "<i>while ecotourism harbors the potential for positive impact</i> → <i>Ecotourism, while based on important goals</i> (changed order of information; synonyms) · <i>its goals are unlikely to be achieved</i> → <i>faces challenges that may prevent their realization</i> (synonyms; pronoun vs noun)"
              ],
              [
                "Body 2 Q1",
                "What is the purpose of the topic sentence? → <b>To reject the counterargument (“Despite …, however, …”) AND introduce the first reason (“due to a lack of stringent regulations”)</b>"
              ],
              [
                "Body 2 Q2",
                "How is S2 connected to the topic sentence? → <b>It provides evidence for the reason — “As Mielly (2023) points out …”</b>"
              ],
              [
                "Body 2 Q3",
                "What is the purpose of S3 and S4? → <b>S3 presents a counterargument (“The writer acknowledges …”); S4 rejects it (“However …”) + evidence</b>"
              ],
              [
                "Body 2 Q4",
                "How is S5 connected to S4? → <b>It adds further evidence for rejecting the counterargument — “are further compounded by …”</b>"
              ],
              [
                "Body 2 Q5",
                "What is the purpose of the final sentence? → <b>To conclude by summarising the evidence (“Such practices …”) to support the position (“… undermine the goals of ecotourism”)</b>"
              ],
              [
                "Body 3 Q1",
                "What is the purpose of the topic sentence? → <b>To introduce the second reason (deep impact on people) — “extend beyond …, to …”</b>"
              ],
              [
                "Body 3 Q2",
                "How is S2 connected to the topic sentence? → <b>It gives an example (“This occurs when …”) + reasons (displacement and destruction; “under the guise of”) for the impact</b>"
              ],
              [
                "Body 3 Q3",
                "How is S3 connected to S2? → <b>It provides evidence for the “dishonesty” (“under the guise of”) in S2</b>"
              ],
              [
                "Body 3 Q4",
                "How is S4 connected to S3? → <b>It gives the consequence (“As a result, …”) of the displacement in S3</b>"
              ],
              [
                "Body 3 Q5",
                "What is the purpose of the final sentence? → <b>To conclude by summarising the evidence (“This ongoing kind of ‘bluewashing’ …”) to support the position (“… barrier to ecotourism … goals”)</b>"
              ],
              [
                "Intro vs conclusion Q1",
                "Which sentence in the introduction contains the writer’s position? → <b>S4</b>"
              ],
              [
                "Intro vs conclusion Q2",
                "Which sentence in the conclusion restates the position? → <b>S1</b>"
              ],
              [
                "Intro vs conclusion Q3",
                "How does the writer paraphrase the position in the conclusion? → <b>Changed order of information + synonyms (“harbors the potential for positive impact” → “based on important goals”) + a pronoun for a noun</b>"
              ],
              [
                "Intro vs conclusion Q4",
                "How does S2 of the conclusion link back to the introduction? → <b>It re-states the two supporting reasons (regulation; social and environmental costs) as things that need to be addressed</b>"
              ],
              [
                "Intro vs conclusion Q5",
                "What is the purpose of S3 of the conclusion? → <b>A final message and a potential solution: (only) if these measures are carried out can the goals be achieved</b>"
              ],
              [
                "Conclusion sentence (example)",
                "Although ecotourism is built on valuable goals, it is unlikely to fulfil them until certification is strengthened and local communities stop paying its costs."
              ]
            ]
          },
          "category": "While reading · structure"
        },
        {
          "id": "a7",
          "short": "Cohesion",
          "minutes": 15,
          "grouping": "Pairs",
          "art": "dec10/assets/week4/v/v-d10w4d3-a7.svg",
          "title": "Language focus – Cohesion",
          "goal": "Use summary phrases and old–new information flow to link your sentences.",
          "blocks": [
            {
              "type": "tip",
              "text": "Mark up <b>Sample 4.1 for Language Analysis</b> in your Student’s book (W4 D3. 9C) as you do these exercises."
            },
            {
              "type": "key",
              "title": "1. Review summary phrases",
              "points": [
                "In Monday’s reading lesson, you saw how <b>summary phrases</b> create cohesion: a short noun phrase that sums up an idea from the sentence before, e.g. <i>These regulatory challenges …, Such practices …</i>"
              ]
            },
            {
              "type": "spot",
              "id": "a7-spot1",
              "title": "Body paragraph 2 · find the summary phrases",
              "hint": "Tap the 2 summary phrases in the second and third sentences. Then say which idea each one refers back to.",
              "label": "Summary phrases",
              "paras": [
                "However, [[government regulations]] or market-based certification can also be insufficiently strict or contain loopholes (Alom, 2023). [[*These regulatory challenges]] are further compounded by “bluewashing,” whereby ecotourism is used more to promote the interests of corporations than to promote [[genuine conservation efforts]] (Mielly, 2023). [[*Such practices]] clearly undermine the goals of ecotourism."
              ]
            },
            {
              "type": "match",
              "id": "a7-match",
              "title": "What do they refer back to?",
              "left": [
                "These regulatory challenges",
                "Such practices"
              ],
              "right": [
                "government regulations or market-based certification can also be insufficiently strict or contain loopholes",
                "“bluewashing,” whereby ecotourism is used more to promote the interests of corporations than to promote genuine conservation efforts"
              ]
            },
            {
              "type": "key",
              "title": "2. Review old–new information flow",
              "points": [
                "Each sentence <b>begins</b> with information the reader already knows — <b>old information</b>.",
                "<b>New information</b> comes after the main verb and develops the text."
              ]
            },
            {
              "type": "rule",
              "n": 3,
              "title": "Old information first, new information last",
              "explain": "Readers follow a text easily when each sentence <b>starts</b> with something they already know and <b>ends</b> with something new. The new idea at the end of one sentence becomes the old idea at the start of the next.",
              "form": "Sentence 1: … <b>NEW</b>.  →  Sentence 2: <b>OLD</b> (this / these + noun, a pronoun, a key word again) + verb + <b>NEW</b>.",
              "cols": [
                "✗ New information first",
                "✓ Old information first"
              ],
              "pairs": [
                [
                  "Tourists visit the island every summer. Pressure on the water supply comes from these visitors.",
                  "Tourists visit the island every summer. <b>These visitors</b> put pressure on the water supply."
                ],
                [
                  "The council banned cars in the old town. A quieter, cleaner centre is the result of this ban.",
                  "The council banned cars in the old town. <b>This ban</b> has made the centre quieter and cleaner."
                ],
                [
                  "Many hotels now buy food from local farms. Farmers’ incomes have risen because of this practice.",
                  "Many hotels now buy food from local farms. <b>This practice</b> has raised farmers’ incomes."
                ]
              ],
              "check": {
                "q": "In “These visitors put pressure on the water supply”, which part is old information?",
                "a": "“These visitors” — the reader met them in the sentence before. “Pressure on the water supply” is new."
              }
            },
            {
              "type": "figure",
              "src": "dec10/assets/week4/d3-old-new.svg",
              "size": "wide",
              "alt": "Old–new information flow in three sentences from body paragraph 2. Sentence 1 ends with new information: regulations or certification can be insufficiently strict or contain loopholes. Sentence 2 begins with old information “These regulatory challenges”, then the main verb “are further compounded by”, then new information: bluewashing. Sentence 3 begins with old information “Such practices”, then the main verb “clearly undermine”, then new information: the goals of ecotourism. Arrows link each new idea to the old information at the start of the next sentence.",
              "caption": "The <b>new</b> information at the end of one sentence becomes the <b>old</b> information at the start of the next."
            },
            {
              "type": "quiz",
              "id": "a7-flow",
              "title": "Which sentence comes next? Choose the one that flows better.",
              "items": [
                {
                  "q": "“Many ecotourism lodges are built inside national parks.” Next:",
                  "options": [
                    "These lodges bring visitors into fragile areas.",
                    "Visitors are brought into fragile areas by these lodges."
                  ],
                  "answer": "These lodges bring visitors into fragile areas.",
                  "why": "“These lodges” (old) starts the sentence; “fragile areas” (new) ends it."
                },
                {
                  "q": "“Some tour companies call themselves ‘green’ without any evidence.” Next:",
                  "options": [
                    "Customers are misled, and this practice is called greenwashing.",
                    "This practice, known as greenwashing, misleads customers."
                  ],
                  "answer": "This practice, known as greenwashing, misleads customers.",
                  "why": "“This practice” picks up the whole first sentence."
                },
                {
                  "q": "“Costa Rica protects about a quarter of its land.” Next:",
                  "options": [
                    "Millions of tourists a year are attracted by these protected areas.",
                    "These protected areas attract millions of tourists a year."
                  ],
                  "answer": "These protected areas attract millions of tourists a year.",
                  "why": "Old (“these protected areas”) → new (“millions of tourists”)."
                }
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "Look at body paragraph 3. Tap the <b>main verb</b> of each sentence. Then tell your partner: what does the information <b>before</b> the main verb refer back to?"
            },
            {
              "type": "spot",
              "id": "a7-spot2",
              "title": "Body paragraph 3 · find the main verbs",
              "hint": "Tap the main verb in sentences 2–5 (4 verbs).",
              "label": "Main verbs",
              "paras": [
                "¹The challenges for ecotourism in achieving its goals extend beyond regulatory inadequacies to often deeply affecting local and indigenous populations. ²This [[*occurs]] when ecotourism projects [[lead to]] the displacement of communities and the destruction of their environment, often under the guise of development and conservation (Mielly, 2023). ³These projects, while beneficial for both tourists and some local activities and businesses (Alom, 2023; Spenceley & Rylance, 2021), [[*can also be manipulated]] to justify the displacement of local indigenous people, for example, in the cases of communities in Indonesia and Brazil, as Mielly (2023) [[points out]]. ⁴As a result, the writer adds, local populations [[*lose]] their habitat, which is the source of their cultural and social life, and the habitat loss also means environmental destruction (Mielly, 2023). ⁵This ongoing kind of ‘bluewashing’ [[*remains]] a significant barrier to ecotourism achieving its goals."
              ]
            },
            {
              "type": "table",
              "id": "a7-t",
              "title": "Body 3 · old information (before the main verb) → what it refers back to",
              "columns": [
                "Sentence",
                "Old information",
                "It refers back to …"
              ],
              "fixed": [
                "S2",
                "S3",
                "S4",
                "S5"
              ]
            },
            {
              "type": "language",
              "title": "Cohesion toolkit for your essays",
              "groups": [
                {
                  "label": "Summary phrases",
                  "phrases": [
                    "These challenges / problems / issues …",
                    "Such practices / measures / projects …",
                    "This trend / approach …",
                    "This ongoing kind of …"
                  ]
                },
                {
                  "label": "Old → new",
                  "phrases": [
                    "This occurs when …",
                    "These projects …",
                    "As a result, …",
                    "This means that …"
                  ]
                },
                {
                  "label": "Talk about it",
                  "phrases": [
                    "“These projects” refers back to …",
                    "The main verb here is …",
                    "This is old information because …"
                  ]
                }
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "alone",
              "text": "<b>Your turn.</b> Write three sentences about a tourist place you know. Start sentences 2 and 3 with <b>old information</b> (this / these + a noun, or a pronoun)."
            },
            {
              "type": "detect",
              "id": "a7-dt",
              "label": "Writing studio",
              "title": "Old → new",
              "hint": "The lights turn on when a sentence starts with old information.",
              "checks": [
                {
                  "label": "Starts with this / these / such + noun",
                  "color": "#2d7a9a",
                  "any": [
                    "/(^|[.!?]\\s+)(this|these|such)\\s+(?!is\\b|was\\b|are\\b|were\\b)[a-z]{3,}/i"
                  ]
                },
                {
                  "label": "Starts with a pronoun (it / they)",
                  "color": "#7a4a8c",
                  "any": [
                    "/(^|[.!?]\\s+)(it|they)\\b/i"
                  ]
                }
              ],
              "items": [
                {
                  "task": "Three linked sentences",
                  "rows": 4,
                  "placeholder": "Every summer, thousands of tourists visit Hội An. These visitors … This … "
                }
              ]
            },
            {
              "type": "teacher",
              "text": "Short on time? Keep the TB tasks (summary phrases and the Body 3 table) and Rule 3; the “which comes next” quiz takes 2 minutes; the writing can be homework."
            }
          ],
          "answers": {
            "title": "Answers (Teacher’s Book marked-up table)",
            "items": [
              [
                "Summary phrases",
                "<b>These regulatory challenges</b> → government regulations or market-based certification can also be insufficiently strict or contain loopholes · <b>Such practices</b> → “bluewashing” …"
              ],
              [
                "Body 3 main verbs",
                "S2 <b>occurs</b> · S3 <b>can also be manipulated</b> · S4 <b>lose</b> · S5 <b>remains</b>"
              ],
              [
                "Body 3 old information",
                "S2 <b>This</b> → deeply affecting local and indigenous populations (S1) · S3 <b>These projects</b> → ecotourism projects (S2) · S4 <b>local populations</b> → local indigenous people … Indonesia and Brazil (S3) · S5 <b>This ongoing kind of ‘bluewashing’</b> → refers back to S3 & S4"
              ],
              [
                "Which comes next",
                "1 These lodges … · 2 This practice … · 3 These protected areas …"
              ],
              [
                "Your turn (example)",
                "Every summer, thousands of tourists visit Hội An. These visitors fill the old town’s narrow streets. This crowding has pushed many local families to move out."
              ]
            ]
          },
          "category": "Language focus"
        },
        {
          "id": "a8",
          "short": "Evaluate sources",
          "minutes": 10,
          "grouping": "Pairs",
          "art": "dec10/assets/week4/v/v-d10w4d3-a8.svg",
          "title": "Language focus – Evaluating ideas in sources",
          "goal": "See how the writer judges ideas from sources — to persuade the reader.",
          "blocks": [
            {
              "type": "figure",
              "src": "dec10/assets/week4/d3-evaluate-source.svg",
              "size": "wide",
              "alt": "Three steps to evaluate an idea from a source: 1 identify a point of view from a source; 2 present it by paraphrasing or summarising; 3 evaluate it, positively or negatively, to show or reinforce your own view. Around the third step, four lenses: quality, value, significance, strengths and limitations.",
              "caption": "Identify → present → evaluate. Evaluative language is a key tool for your <b>voice</b>."
            },
            {
              "type": "key",
              "title": "Evaluative language",
              "points": [
                "We use evaluative language to <b>evaluate ideas and arguments in sources</b> and to <b>express our position persuasively</b>.",
                "You judge ideas (positively or negatively) in terms of their <b>quality</b>, <b>value</b>, <b>significance</b>, or their <b>strengths and limitations</b>."
              ]
            },
            {
              "type": "rule",
              "n": 4,
              "title": "Evaluate — don’t just report",
              "compare": true,
              "explain": "Reporting tells the reader <b>what</b> a source says. Evaluating also tells them <b>what you think of it</b>: is the idea strong, valuable, significant — or limited? This is how your <b>voice</b> enters an essay full of sources.",
              "form": "Source + <b>evaluative verb / adverb</b> + idea · or idea + <b>evaluative adjective / noun</b>",
              "cols": [
                "Just reports",
                "Reports and evaluates"
              ],
              "pairs": [
                [
                  "Alom (2023) <b>says</b> Costa Rica uses tourism to support its economy.",
                  "Alom (2023) <b>convincingly shows</b> how Costa Rica has <b>successfully</b> used tourism to support its economy.",
                  "positive · value"
                ],
                [
                  "Mielly (2023) <b>says</b> some projects displace local people.",
                  "Mielly (2023) <b>rightly points out</b> that some projects displace local people — a <b>significant</b> social cost.",
                  "positive about the source · negative about ecotourism"
                ],
                [
                  "Some writers <b>say</b> certification protects the environment.",
                  "Some writers <b>claim</b> that certification protects the environment; <b>however</b>, this view <b>overlooks</b> its many loopholes.",
                  "negative · limitations"
                ]
              ],
              "note": "<b>Positive:</b> convincingly, rightly, clearly, successfully, valuable, significant, robust · <b>Negative:</b> claims (= perhaps not true), overlooks, fails to consider, limited, questionable, inadequate",
              "check": {
                "q": "What is the difference between “Alom shows that …” and “Alom claims that …”?",
                "a": "“Shows” accepts the idea as true. “Claims” tells the reader the writer is not sure it is true."
              }
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "Now find the evaluative language in Sample 4.1."
            },
            {
              "type": "spot",
              "id": "a8-spot",
              "title": "Examples 1 and 2 (Body 1) · find the evaluative language",
              "hint": "Tap the 6 words or phrases the writer uses to evaluate the ideas from the sources.",
              "label": "Evaluation",
              "paras": [
                "¹[[Proponents of ecotourism argue]] that it provides a realistic sustainable alternative to conventional tourism. ²[[*Indeed]], ecotourism aligns with a number of Sustainable Development Goals, which can be achieved, for example, through agrotourism projects and the establishment of marine-protected areas (Spenceley & Rylance, 2021). ³These activities [[*not only support]] local communities, [[*but also ensure the preservation]] of ecosystems. ⁴Similarly, the positive depiction of Costa Rica as a model of sustainable tourism (Alom, 2023) [[*illustrates how tourism can be integrated successfully]] to support the local economy. ⁵The potential for ecotourism to [[*protect and improve]] the lives and environment of local communities is [[*therefore evident]]."
              ]
            },
            {
              "type": "spot",
              "id": "a8-spot3",
              "title": "Example 3 (Body 3) · strong language",
              "hint": "Tap the 2 words that express the significance and strength of the source’s point.",
              "label": "Evaluation",
              "paras": [
                "⁵This [[*ongoing]] kind of ‘[[bluewashing]]’ remains a [[*significant]] barrier to ecotourism achieving its goals."
              ]
            },
            {
              "type": "grid",
              "id": "a8-grid",
              "title": "What is the focus of each evaluation — and is it positive or negative?",
              "rows": [
                "“Indeed, …” + “not only … but also …” (Body 1)",
                "“illustrates how tourism can be integrated successfully” (Body 1)",
                "“This ongoing kind of ‘bluewashing’ remains a significant barrier” (Body 3)"
              ],
              "columns": [
                "Focus",
                "Judgement"
              ],
              "options": [
                "Value",
                "Significance",
                "Quality",
                "Strengths / limitations",
                "Positive",
                "Negative"
              ],
              "answers": [
                [
                  "Value",
                  "Positive"
                ],
                [
                  "Value",
                  "Positive"
                ],
                [
                  "Significance",
                  "Negative"
                ]
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "alone",
              "text": "Choose the evaluative word that fits."
            },
            {
              "type": "cloze",
              "id": "a8-cloze",
              "title": "Report and evaluate",
              "text": "Spenceley and Rylance (2021) {{1}} that agrotourism gives farmers a second income. For poor rural areas, this is a {{2}} benefit. However, Alom (2023) {{3}} that certification schemes are often weak, and this weakness remains a {{4}} barrier. Some companies {{5}} to be “green”, but their labels are often false.",
              "options": [
                [
                  "convincingly show",
                  "claim",
                  "fail to consider"
                ],
                [
                  "significant",
                  "questionable",
                  "limited"
                ],
                [
                  "rightly points out",
                  "fails to consider",
                  "overlooks"
                ],
                [
                  "significant",
                  "minor",
                  "positive"
                ],
                [
                  "claim",
                  "show",
                  "prove"
                ]
              ],
              "answers": [
                "convincingly show",
                "significant",
                "rightly points out",
                "significant",
                "claim"
              ],
              "why": [
                "The writer accepts the evidence: positive.",
                "Extra income matters a lot for the poor: significance.",
                "The writer agrees with Alom.",
                "A barrier that matters: significance (negative for ecotourism).",
                "“Claim” = the writer doubts it — the labels are false."
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "alone",
              "text": "<b>Your turn.</b> Take one idea from a source you used yesterday. Present it, then evaluate it (positive or negative)."
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "a8-w",
                  "label": "One idea from a source — reported and evaluated",
                  "rows": 3,
                  "placeholder": "As Mielly (2023) rightly points out, … This is a significant …"
                }
              ]
            },
            {
              "type": "talk",
              "title": "Pair talk",
              "prompts": [
                "Read Body 1 S3 without “not only … but also”. What changes?",
                "The writer evaluates Body 1’s sources positively — but disagrees in the end. Why is that a clever move?"
              ]
            }
          ],
          "answers": {
            "title": "Suggested answers (Teacher’s Book notes)",
            "items": [
              [
                "Body 1",
                "<i>Indeed</i> – signals agreement with the previous (positive) sentence and a positive view of the evidence to come · <i>not only … but also</i> – emphatic language to express the <b>value</b> and strength of the source’s point · <i>illustrates how … successfully</i>, <i>protect and improve</i>, <i>therefore evident</i> – more positive vocabulary to express the <b>value</b> of the source’s point. Judgement: positive."
              ],
              [
                "Body 3",
                "<i>ongoing</i>, <i>significant</i> – strong language to express the <b>significance</b> and strength of the source’s point. Judgement: negative (a barrier to the goals)."
              ],
              [
                "Focus / judgement (grid)",
                "1 Value · positive · 2 Value · positive · 3 Significance · negative"
              ],
              [
                "Report and evaluate",
                "1 convincingly show · 2 significant · 3 rightly points out · 4 significant · 5 claim"
              ]
            ]
          },
          "category": "Language focus"
        },
        {
          "id": "a9",
          "short": "Your position",
          "minutes": 15,
          "grouping": "Pairs → Class",
          "art": "dec10/assets/week4/v/v-d10w4d3-a9.svg",
          "title": "Expressing your position persuasively",
          "goal": "Collect the language Sample 4.1 uses to express its position — and use it yourself.",
          "blocks": [
            {
              "type": "key",
              "title": "Your position = your voice",
              "points": [
                "Your position may be based on other people’s research, but the conclusion must be <b>your own</b>.",
                "You express your position through the language you use — and this language makes it <b>persuasive</b>.",
                "Your position is expressed in sentences in <b>your own voice</b>. (One exception: <i>As Mielly (2023) points out, …</i> — the writer uses Mielly’s point to support their position.)"
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "Compare each plain sentence with the version from Sample 4.1. What makes the second one persuasive?"
            },
            {
              "type": "pairs",
              "title": "Neutral → persuasive: see the difference",
              "hint": "Read the plain version, then the version from Sample 4.1. Open “What changed?”.",
              "items": [
                {
                  "from": "Ecotourism [[does not always meet]] its goals because there are [[not many rules]].",
                  "to": "Ecotourism [[frequently falls short of]] its ideals [[due to a lack of]] stringent regulations.",
                  "tag": "adverb + verb phrase + phrase",
                  "note": "The meaning is similar — the writer’s attitude is much clearer."
                },
                {
                  "from": "Bluewashing [[is bad for]] ecotourism.",
                  "to": "Such practices [[clearly undermine]] the goals of ecotourism.",
                  "tag": "adverb + evaluative verb",
                  "note": "“Such practices” also links back (cohesion)."
                },
                {
                  "from": "We [[need]] better rules.",
                  "to": "[[It is essential]] to have [[robust]] regulatory frameworks.",
                  "tag": "phrase + adjective"
                },
                {
                  "from": "Ecotourism [[has some problems]].",
                  "to": "Ecotourism [[faces significant challenges]].",
                  "tag": "evaluative verb + adjective",
                  "note": "“faces … challenges” is a strong academic collocation."
                },
                {
                  "from": "Companies [[say they are green when they are not]].",
                  "to": "Some companies [[falsely]] promote themselves as sustainable.",
                  "tag": "adverb",
                  "note": "One adverb carries the whole judgement."
                }
              ]
            },
            {
              "type": "rule",
              "n": 5,
              "title": "Persuasive — but not exaggerated",
              "explain": "Strong language persuades. Absolute language (<i>always, never, useless, completely</i>) is easy to attack: one counter-example proves it wrong. Good writers are <b>strong and careful</b> at the same time.",
              "cols": [
                "✗ Exaggerated",
                "✓ Strong and careful"
              ],
              "pairs": [
                [
                  "Ecotourism <b>always</b> destroys local communities.",
                  "Ecotourism projects <b>can</b> displace local communities, as cases in Indonesia and Brazil show (Mielly, 2023)."
                ],
                [
                  "Certification is <b>useless</b>.",
                  "Certification is <b>frequently</b> insufficiently strict (Alom, 2023)."
                ],
                [
                  "Ecotourism will <b>never</b> work.",
                  "Ecotourism is <b>unlikely</b> to achieve its goals, <b>at least in the foreseeable future</b>."
                ]
              ],
              "check": {
                "q": "Why is “never” risky in an argument essay?",
                "a": "One counter-example (e.g. Costa Rica) makes the whole claim false. “Unlikely … at least in the foreseeable future” is strong but hard to attack."
              }
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "Notice it in the sample: tap the words in the introduction that express the writer’s position."
            },
            {
              "type": "spot",
              "id": "a9-spot",
              "title": "1. The introduction · language that expresses the writer’s position",
              "hint": "Tap the 6 words that express the writer’s position.",
              "label": "Position language",
              "paras": [
                "¹International tourism has grown into a [[vast global industry]], bringing with it an intense focus on its environmental and social impacts. ²[[In response to]] the negative impacts, ecotourism has emerged as a potential form of responsible tourism (Alom, 2023; Mielly, 2023; Spenceley & Rylance, 2021). ³[[*However]], as the concept of ecotourism has evolved, so have the complexities and challenges associated with the implementation of its goals. ⁴This essay argues, therefore, that [[*while]] ecotourism harbors the potential for positive impact, its goals are unlikely to be achieved, at least in the foreseeable future, because they are [[*undermined]] by [[*inadequate]] regulation, and [[*ongoing]] localised social and environmental [[*costs]]."
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "pair",
              "text": "Sort the language from Sample 4.1 into the Language Reference table."
            },
            {
              "type": "sort",
              "id": "a9-sort",
              "title": "Fill the Language Reference table (Student’s Book, W4 D3. 9)",
              "hint": "All of these come from Sample 4.1. Drag each one into the right column — or tap a card, then a column.",
              "buckets": [
                {
                  "label": "Adjectives",
                  "letter": "Adj"
                },
                {
                  "label": "Adverbs",
                  "letter": "Adv"
                },
                {
                  "label": "Verbs",
                  "letter": "V"
                },
                {
                  "label": "Contrasting links",
                  "letter": "↔"
                },
                {
                  "label": "Phrases",
                  "letter": "“ ”"
                }
              ],
              "items": [
                {
                  "text": "inadequate",
                  "answer": 0
                },
                {
                  "text": "ongoing",
                  "answer": 0
                },
                {
                  "text": "significant",
                  "answer": 0
                },
                {
                  "text": "robust (regulatory framework)",
                  "answer": 0
                },
                {
                  "text": "undesirable (practices)",
                  "answer": 0
                },
                {
                  "text": "frequently",
                  "answer": 1
                },
                {
                  "text": "falsely",
                  "answer": 1
                },
                {
                  "text": "clearly (undermine)",
                  "answer": 1
                },
                {
                  "text": "(are) undermined (by)",
                  "answer": 2
                },
                {
                  "text": "fall short of",
                  "answer": 2
                },
                {
                  "text": "extend beyond (regulatory inadequacies)",
                  "answer": 2
                },
                {
                  "text": "be manipulated (to justify)",
                  "answer": 2
                },
                {
                  "text": "remain (a significant barrier)",
                  "answer": 2
                },
                {
                  "text": "However,",
                  "answer": 3
                },
                {
                  "text": "While, …",
                  "answer": 3
                },
                {
                  "text": "Despite (the potential benefits,) however,",
                  "answer": 3
                },
                {
                  "text": "can also …",
                  "answer": 3
                },
                {
                  "text": "(goals are) unlikely to (be achieved)",
                  "answer": 4
                },
                {
                  "text": "due to a lack of",
                  "answer": 4
                },
                {
                  "text": "As (Mielly, 2023) points out, …",
                  "answer": 4
                },
                {
                  "text": "It is essential (to)",
                  "answer": 4
                },
                {
                  "text": "Only through … can …",
                  "answer": 4
                }
              ]
            },
            {
              "type": "toggle",
              "title": "Check: the persuasive toolkit",
              "hint": "Open after the sort.",
              "blocks": [
                {
                  "type": "figure",
                  "src": "dec10/assets/week4/d3-persuasive-toolkit.svg",
                  "size": "wide",
                  "alt": "An open toolbox with six drawers, the headings of the Language Reference table: adjectives (inadequate, ongoing, significant, robust, undesirable), adverbs (frequently, falsely, clearly), verbs (are undermined by, fall short of, extend beyond, be manipulated to justify, remain), nouns, contrasting links (However; While …; Despite …, however; can also …) and phrases (unlikely to be achieved; due to a lack of; As … points out; The writer acknowledges; It is essential to; Only through … can …).",
                  "caption": "<b>Check:</b> the Language Reference table — Language Reference table: <b>W4 D3. 9 Integrated writing workshop: Expressing your position persuasively</b>."
                }
              ]
            },
            {
              "type": "do",
              "n": 4,
              "who": "alone",
              "text": "Use it. Rewrite each sentence so it is persuasive — strong, but not exaggerated."
            },
            {
              "type": "fields",
              "title": "Make it persuasive",
              "fields": [
                {
                  "id": "a9-1",
                  "label": "Rewrite: “Some tour companies say they are green, but they are not.”",
                  "rows": 2,
                  "placeholder": "Despite claims of …, many tour operators …"
                },
                {
                  "id": "a9-2",
                  "label": "Rewrite: “Costa Rica is a good example of ecotourism.”",
                  "rows": 2,
                  "placeholder": "Costa Rica is a … model of …"
                },
                {
                  "id": "a9-3",
                  "label": "Rewrite: “Ecotourism helps local people a bit.”",
                  "rows": 2,
                  "placeholder": "Ecotourism can … , but only to a limited extent …"
                }
              ]
            },
            {
              "type": "do",
              "n": 5,
              "who": "pair",
              "text": "Speak it. Spin, then persuade your partner in 30 seconds."
            },
            {
              "type": "spinner",
              "id": "a9-spin",
              "title": "Persuade me in 30 seconds",
              "text": "Spin both reels. Use the language in a persuasive sentence about the topic. Your partner says: convincing or not?",
              "reels": [
                {
                  "label": "Use this",
                  "items": [
                    "inadequate",
                    "robust",
                    "clearly",
                    "undermine",
                    "fall short of",
                    "remain a significant barrier",
                    "Despite …, however, …",
                    "due to a lack of",
                    "It is essential to",
                    "Only through … can …"
                  ]
                },
                {
                  "label": "Topic",
                  "items": [
                    "hotel eco-labels",
                    "whale-watching tours",
                    "national parks",
                    "flights to holiday islands",
                    "local homestays",
                    "marine-protected areas"
                  ]
                }
              ]
            },
            {
              "type": "language",
              "title": "More language for your position",
              "groups": [
                {
                  "label": "Strong position",
                  "phrases": [
                    "This essay argues that …",
                    "It is clear that …",
                    "… clearly undermines …",
                    "… remains a significant barrier to …"
                  ]
                },
                {
                  "label": "Concede, then contrast",
                  "phrases": [
                    "Despite …, however, …",
                    "While …, …",
                    "Admittedly, … . However, …",
                    "Nonetheless, …"
                  ]
                },
                {
                  "label": "Careful (hedged)",
                  "phrases": [
                    "… is unlikely to …",
                    "… may prevent …",
                    "… at least in the foreseeable future",
                    "It can be argued that …"
                  ]
                }
              ]
            }
          ],
          "answers": {
            "title": "Answers (Teacher’s Book Language Reference table)",
            "items": [
              [
                "Introduction (position)",
                "However, · while … · (are) undermined (by) · ongoing … costs"
              ],
              [
                "Adjectives",
                "inadequate · ongoing · significant · robust (regulatory framework) · undesirable (practices)"
              ],
              [
                "Adverbs",
                "frequently · falsely · clearly (undermine)"
              ],
              [
                "Verbs",
                "(are) undermined (by) · fall short of · extend beyond (regulatory inadequacies) · be manipulated (to justify) · remain (a significant barrier)"
              ],
              [
                "Contrasting links",
                "However, · While, … · Despite (the potential benefits,) however, · can also …"
              ],
              [
                "Phrases",
                "ongoing … costs · (goals are) unlikely to (be achieved) · due to a lack of · As (Mielly, 2023) points out, … · The writer acknowledges · It is essential (to) · Only through … can …"
              ],
              [
                "Your turn (possible answers)",
                "1) Despite claims of sustainability, many tour operators use green labels freely and falsely. · 2) Costa Rica is a successful model of how ecotourism can support the local economy (Alom, 2023)."
              ],
              [
                "3 (possible answer)",
                "Ecotourism can benefit local people, but only to a limited extent, as much of the income goes to foreign-owned companies."
              ]
            ]
          },
          "category": "Language focus"
        },
        {
          "id": "a10",
          "short": "Compare + revise",
          "minutes": 40,
          "grouping": "Alone → Teacher",
          "art": "dec10/assets/week4/v/v-d10w4d3-a10.svg",
          "title": "AST Feedback literacy: Compare the sample with your response",
          "goal": "Make judgements about your own essay by comparing it with Sample 4.1 — then revise it.",
          "blocks": [
            {
              "type": "figure",
              "src": "dec10/assets/week4/d3-compare-mirror.svg",
              "size": "wide",
              "alt": "Your practice essay and Sample 4.1 side by side, with matching coloured lines between their parts: position, introduction structure, citations, counterargument, evaluative language, cohesive devices. Above them, the feedback literacy element “Making judgements”. A speech bubble: “Questions for my teacher”.",
              "caption": "Feedback literacy · today’s element: <b>Making judgements</b>."
            },
            {
              "type": "steps",
              "items": [
                {
                  "who": "alone",
                  "text": "Open the <b>Exams for DEC 10</b> site → <b>Marks</b> → <b>Week 4 Integrated Writing Task practice</b>. Download and save the essay you wrote yesterday."
                },
                {
                  "who": "alone",
                  "text": "Read your essay again. Then complete the comparison below."
                },
                {
                  "who": "alone",
                  "text": "Ask your teacher your questions <b>as soon as you have them</b> — don’t wait until the end."
                }
              ]
            },
            {
              "type": "sources",
              "ids": [
                "s41"
              ]
            },
            {
              "type": "tip",
              "text": "Use today’s rules as your checklist: <b>Rule 1</b> a clear “to what extent” position · <b>Rule 2</b> a restated (not copied) conclusion · <b>Rule 3</b> old → new · <b>Rule 4</b> evaluate sources · <b>Rule 5</b> strong but careful."
            },
            {
              "type": "grid",
              "id": "a10-grid",
              "title": "1. Compare your essay with the sample",
              "columns": [
                "Yes / No"
              ],
              "options": [
                "Yes",
                "No"
              ],
              "rows": [
                "My essay had the same position as the sample.",
                "My introduction had the same structure as the sample.",
                "My introduction included citations.",
                "My position statement (thesis) was expressed differently to that in the sample.",
                "My conclusion had the same structure as the sample.",
                "My conclusion included citations.",
                "I used a counter argument in my essay.",
                "I can identify evaluative language I used in every paragraph of my essay to express my position.",
                "I can identify different cohesive devices in my essay."
              ]
            },
            {
              "type": "fields",
              "title": "Questions I want to ask my teacher",
              "fields": [
                {
                  "id": "a10-q",
                  "label": "Questions about the comparison (write the number of the statement)",
                  "rows": 3,
                  "placeholder": "No. 7: Is a counter argument always needed? …"
                },
                {
                  "id": "a10-diff",
                  "label": "2. Overall comparison: any other differences between the sample and your essay that you want to talk to your teacher about?",
                  "rows": 3,
                  "placeholder": "The sample …, but my essay …"
                }
              ]
            },
            {
              "type": "language",
              "title": "Asking your teacher about your writing",
              "groups": [
                {
                  "label": "Ask",
                  "phrases": [
                    "Could you look at my thesis? Is it clear enough?",
                    "Is this a counter argument, or just background?",
                    "How could I make this sentence more persuasive?"
                  ]
                },
                {
                  "label": "Check",
                  "phrases": [
                    "So, should I … instead of …?",
                    "Do you mean that I need more …?",
                    "Would it be better to …?"
                  ]
                }
              ]
            },
            {
              "type": "detect",
              "id": "a10-w",
              "title": "3. Revising, editing or re-writing",
              "hint": "Based on your comparison and your teacher’s answers, re-write or edit part or all of your essay. Paste a paragraph here and improve it — the lights show the language you use.",
              "label": "Revision studio",
              "checks": [
                {
                  "label": "Position language",
                  "color": "#2f7d6b",
                  "any": [
                    "this essay argues",
                    "unlikely",
                    "likely",
                    "it is essential",
                    "only through",
                    "clearly"
                  ]
                },
                {
                  "label": "In-text reference",
                  "color": "#3a58a0",
                  "any": [
                    "/\\([A-Z][^)]*\\d{4}\\)/u",
                    "(2021)",
                    "(2023)"
                  ]
                },
                {
                  "label": "Contrasting link",
                  "color": "#c4562f",
                  "any": [
                    "however",
                    "while",
                    "although",
                    "despite",
                    "nonetheless"
                  ]
                },
                {
                  "label": "Summary phrase",
                  "color": "#b07d12",
                  "any": [
                    "/\\b(these|such|this) (challenges|practices|projects|problems|issues|measures|activities)/"
                  ]
                },
                {
                  "label": "Evaluative language",
                  "color": "#8a4f9e",
                  "any": [
                    "significant",
                    "inadequate",
                    "robust",
                    "successful",
                    "evident",
                    "undermine",
                    "falls short",
                    "fall short"
                  ]
                }
              ],
              "items": [
                {
                  "task": "My paragraph BEFORE (copy it from your practice essay)",
                  "rows": 6,
                  "placeholder": "Paste your original paragraph …"
                },
                {
                  "task": "My paragraph AFTER (revised)",
                  "rows": 8,
                  "placeholder": "Your improved paragraph …"
                }
              ]
            },
            {
              "type": "tip",
              "text": "Not finished? Complete your revision <b>after class</b>. Keep it with your feedback and action plans."
            },
            {
              "type": "checklist",
              "id": "a10-plan",
              "title": "My action plan for the IWA",
              "items": [
                "Make my position answer “to what extent” clearly",
                "Use the introduction structure: background → issue → position → reasons",
                "Give each paragraph one clear purpose",
                "Include a counter argument — and reject it",
                "Use evaluative language in every paragraph",
                "Use summary phrases and old–new information"
              ]
            }
          ],
          "category": "After reading · your essay"
        }
      ]
    },
    {
      "id": "seminar",
      "number": "02",
      "code": "14A",
      "minutes": 90,
      "tone": "plum",
      "art": "dec10/assets/week4/s-d3-seminar.svg",
      "title": "Seminar Presentation (Group 2) and Opening Remarks (Group 3)",
      "subtitle": "Group 2 leads the seminar — Group 3 opens the eco-tourism one",
      "outcome": "You deliver or follow a structured presentation, summarise and discuss ideas from sources, give useful peer feedback, and reflect on how your group works together.",
      "activities": [
        {
          "id": "b1",
          "short": "The plan",
          "minutes": 5,
          "grouping": "Class",
          "art": "dec10/assets/week4/v/v-d10w4d3-b1.svg",
          "title": "Review the steps",
          "goal": "Know what Group 2 does, what Group 3 does — and what you do.",
          "blocks": [
            {
              "type": "key",
              "title": "Today",
              "points": [
                "<b>Group 2</b> gives its <b>Seminar Presentation</b> (10–12 minutes) and leads a discussion.",
                "<b>Group 3</b> gives its <b>Opening Remarks</b> (5–7 minutes) on this week’s topic: eco-tourism.",
                "Everyone else listens, discusses, reacts and gives feedback."
              ]
            },
            {
              "type": "download",
              "id": "feedback-tool",
              "note": "Open it <b>before</b> Group 2 starts. Tick <b>Seminar Presentation</b> at the top. Use it flexibly: some parts can be N/A (Question & Answer is only for Research Summary Presentations), and you can add comments for individual presenters under Pronunciation and Language."
            },
            {
              "type": "hotspot",
              "src": "dec10/assets/week4/d3-seminar-flow.svg",
              "size": "wide",
              "alt": "The four parts of the seminar. Part 1: Group 2 presents for 10–12 minutes; the class listens and thinks about feedback. Part 2: the class discusses Group 2’s two questions in small groups for 10 minutes; one presenter sits with each group and only takes notes. Part 3: each presenter gives a 1–2-minute summary of a group’s discussion. Part 4: Group 2 sits with the teacher for feedback; the other groups prepare their peer feedback.",
              "hint": "Tap each part.",
              "caption": "The Seminar Presentation in four parts — about 40 minutes.",
              "spots": [
                {
                  "x": 13,
                  "y": 22,
                  "label": "1",
                  "color": "#8a4f9e",
                  "title": "Part 1 · Present",
                  "text": "<p><b>Group 2:</b> 10–12 minutes — (a) the class reactions/questions and (b) the focus you chose (2–3 min); a summary of your research (8–10 min); then introduce two thought-provoking questions.</p><p><b>Everyone else:</b> sit in your seminar groups and think about feedback FOR THE GROUP.</p>"
                },
                {
                  "x": 38,
                  "y": 22,
                  "label": "2",
                  "color": "#2f7d6b",
                  "title": "Part 2 · Discuss",
                  "text": "<p><b>Everyone else:</b> discuss Group 2’s two questions for 10 minutes.</p><p><b>Group 2:</b> one presenter sits with each group. Listen and take notes — don’t join in, and don’t interview the group.</p>"
                },
                {
                  "x": 63,
                  "y": 22,
                  "label": "3",
                  "color": "#c4562f",
                  "title": "Part 3 · Summarise",
                  "text": "<p><b>Group 2:</b> each presenter gives a 1–2-minute summary of the main points of one group’s discussion.</p><p><b>Everyone else:</b> listen. Did they get your main points?</p>"
                },
                {
                  "x": 88,
                  "y": 22,
                  "label": "4",
                  "color": "#3a58a0",
                  "title": "Part 4 · Feedback",
                  "text": "<p><b>Group 2:</b> sit with your teacher, take notes on the feedback and ask about anything unclear.</p><p><b>Everyone else:</b> discuss your feedback with the Feedback Tool, choose how to give it (video, audio or the form) and upload it to Group 2’s Portfolio <b>by the end of today</b> — one upload per group.</p>"
                }
              ]
            },
            {
              "type": "sort",
              "id": "b1-sort",
              "title": "Who does it?",
              "buckets": [
                {
                  "label": "Seminar Group 2",
                  "letter": "G2"
                },
                {
                  "label": "The rest of the class",
                  "letter": "All"
                }
              ],
              "items": [
                {
                  "text": "Give a 10–12-minute presentation and introduce two discussion questions.",
                  "answer": 0
                },
                {
                  "text": "Discuss the two questions for 10 minutes.",
                  "answer": 1
                },
                {
                  "text": "Sit with a discussion group, listen and take notes — but don’t join in.",
                  "answer": 0
                },
                {
                  "text": "Give a 1–2-minute summary of a group’s discussion.",
                  "answer": 0
                },
                {
                  "text": "Upload ONE group feedback to the presenting group’s Portfolio by the end of today.",
                  "answer": 1
                },
                {
                  "text": "Take notes on the teacher’s feedback.",
                  "answer": 0
                }
              ]
            }
          ]
        },
        {
          "id": "b2",
          "short": "Group 2 Seminar",
          "minutes": 35,
          "grouping": "Class → Seminar groups",
          "art": "dec10/assets/week4/v/v-d10w4d3-b2.svg",
          "title": "Group 2 Seminar presentation, discussion and feedback",
          "goal": "Follow the seminar, discuss the questions, and prepare clear, useful feedback for Group 2.",
          "blocks": [
            {
              "type": "model",
              "title": "Seminar Group 2’s question",
              "text": "What strategies could be implemented in [your chosen country] to encourage a smooth transition to more green jobs?"
            },
            {
              "type": "tabs",
              "title": "Follow the four parts",
              "tabs": [
                {
                  "label": "Part 1 · Listen",
                  "blocks": [
                    {
                      "type": "do",
                      "n": 1,
                      "who": "alone",
                      "text": "Listen to Group 2. Take short notes. Mark one thing that went well and one thing to improve — for the <b>group</b>."
                    },
                    {
                      "type": "table",
                      "id": "b2-notes",
                      "title": "My notes on Group 2’s Seminar Presentation",
                      "columns": [
                        "Part",
                        "Notes",
                        "Feedback idea (went well / improve)"
                      ],
                      "fixed": [
                        "Class reactions and questions + their focus",
                        "Summary of their research (strategies)",
                        "Their two discussion questions",
                        "Delivery: visuals, handovers, eye contact"
                      ]
                    }
                  ]
                },
                {
                  "label": "Part 2 · Discuss",
                  "blocks": [
                    {
                      "type": "do",
                      "n": 1,
                      "who": "group",
                      "text": "Discuss Group 2’s two questions for <b>10 minutes</b>. Everyone speaks. Use evidence from the presentation and your own research."
                    },
                    {
                      "type": "fields",
                      "fields": [
                        {
                          "id": "b2-q1",
                          "label": "Question 1 from Group 2",
                          "rows": 1,
                          "placeholder": "Write the question …"
                        },
                        {
                          "id": "b2-q2",
                          "label": "Question 2 from Group 2",
                          "rows": 1,
                          "placeholder": "Write the question …"
                        }
                      ]
                    },
                    {
                      "type": "language",
                      "title": "Seminar discussion moves",
                      "groups": [
                        {
                          "label": "Give your view",
                          "phrases": [
                            "From what we heard, I think the best strategy is … because …",
                            "In my view, … would work better in … than …",
                            "One strategy that stood out for me was …"
                          ]
                        },
                        {
                          "label": "Build on others",
                          "phrases": [
                            "Building on what … said, …",
                            "That’s a good point, and it also links to …",
                            "To add to that, …"
                          ]
                        },
                        {
                          "label": "Disagree politely",
                          "phrases": [
                            "I see it a bit differently. …",
                            "That’s true for …, but what about …?",
                            "I’m not sure the evidence supports that."
                          ]
                        },
                        {
                          "label": "Keep it moving",
                          "phrases": [
                            "Shall we move on to the second question?",
                            "We haven’t heard from … yet — what do you think?",
                            "So, what do we agree on so far?"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "tip",
                      "text": "<b>Group 2:</b> one presenter sits with each group and <b>only listens and takes notes</b>. Don’t ask the group questions one by one — let them discuss."
                    }
                  ]
                },
                {
                  "label": "Part 3 · Summary",
                  "blocks": [
                    {
                      "type": "do",
                      "n": 1,
                      "who": "group",
                      "text": "<b>Group 2:</b> give a 1–2-minute summary of the main points of the group you listened to. <b>Everyone else:</b> listen — did they capture your ideas?"
                    },
                    {
                      "type": "language",
                      "title": "Summarising a discussion (for Group 2)",
                      "tabs": false,
                      "groups": [
                        {
                          "label": "Summarise",
                          "phrases": [
                            "The group I listened to mainly talked about …",
                            "Most of them agreed that …, although … felt that …",
                            "One interesting idea was …",
                            "Overall, they concluded that …"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "label": "Part 4 · Feedback",
                  "blocks": [
                    {
                      "type": "do",
                      "n": 1,
                      "who": "group",
                      "text": "<b>Everyone else:</b> use the <b>Peer and Teacher Feedback Tool</b> to agree on your group’s feedback for Group 2."
                    },
                    {
                      "type": "fields",
                      "fields": [
                        {
                          "id": "b2-well",
                          "label": "What went well (be specific)",
                          "rows": 3,
                          "placeholder": "The visuals were clear because … / The handover from … to … was smooth."
                        },
                        {
                          "id": "b2-next",
                          "label": "Feed forward: one or two clear action points",
                          "rows": 3,
                          "placeholder": "Next time, you could … so that …"
                        }
                      ]
                    },
                    {
                      "type": "choose",
                      "id": "b2-mode",
                      "title": "How will your group give the feedback?",
                      "options": [
                        "Video",
                        "Audio",
                        "Written text",
                        "The completed Feedback Tool form"
                      ]
                    },
                    {
                      "type": "language",
                      "title": "Feedback that helps",
                      "groups": [
                        {
                          "label": "Praise (specific)",
                          "phrases": [
                            "We really liked the way you …",
                            "Your evidence on … was convincing because …",
                            "The handovers were smooth, especially …"
                          ]
                        },
                        {
                          "label": "Feed forward",
                          "phrases": [
                            "Next time, you could …",
                            "It might be clearer if you …",
                            "One way to improve … would be to …"
                          ]
                        },
                        {
                          "label": "Soften it",
                          "phrases": [
                            "We were not quite sure about …",
                            "It was a little hard to follow when …",
                            "Maybe try …"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "tip",
                      "text": "Upload your feedback to Group 2’s Portfolio <b>by the end of today</b>. Only <b>one</b> group member uploads."
                    },
                    {
                      "type": "do",
                      "n": 2,
                      "who": "group",
                      "text": "<b>Group 2:</b> sit with your teacher. Take notes on the feedback — you need them for your Portfolio Submission. Ask if anything is not clear: “Could you give us an example of …?”"
                    }
                  ]
                }
              ]
            },
            {
              "type": "checklist",
              "id": "b2-after",
              "title": "After class (reminder)",
              "items": [
                "Group 2: submit Portfolio Submission 2 — a written summary of, and reflection on, the teacher’s and peer feedback on your Seminar presentation",
                "Group 2: submit Portfolio Submission 3 (Assessed Task) — a video response to all the teacher and peer feedback",
                "Everyone else: Peer Feedback 1 (Additional submission) — discuss your feedback with the Feedback Tool, choose a mode (audio, video, written text or the completed tool) and upload it to Group 2’s Portfolio"
              ]
            }
          ]
        },
        {
          "id": "b3",
          "short": "Group 3 opens",
          "minutes": 10,
          "grouping": "Alone",
          "art": "dec10/assets/week4/v/v-d10w4d3-b3.svg",
          "title": "Group 3 Opening Remarks",
          "goal": "Listen to Group 3 and note what you want to know more about.",
          "blocks": [
            {
              "type": "model",
              "title": "Seminar Group 3’s question",
              "text": "How can eco-tourism in [your chosen country] be managed to both support conservation and benefit local communities?"
            },
            {
              "type": "hotspot",
              "src": "dec10/assets/week4/d3-opening-remarks.svg",
              "size": "wide",
              "alt": "Group 3’s Opening Remarks, 5–7 minutes, in three parts: 1 a brief introduction to the country or context and why they chose it; 2 the causes and/or effects of the sustainability issue; 3 possible strategies or solutions. Below, the audience writes questions about what they would like to know more about.",
              "hint": "Tap the numbers.",
              "caption": "What Group 3 covers in 5–7 minutes — and your job while you listen.",
              "spots": [
                {
                  "x": 17,
                  "y": 30,
                  "label": "1",
                  "color": "#2f7d6b",
                  "title": "The context",
                  "text": "A brief introduction to the country or place they chose — and <b>why</b> they chose it."
                },
                {
                  "x": 50,
                  "y": 30,
                  "label": "2",
                  "color": "#c4562f",
                  "title": "Causes and/or effects",
                  "text": "The causes and/or effects of the sustainability issue — e.g. damage to ecosystems, or local people left out."
                },
                {
                  "x": 83,
                  "y": 30,
                  "label": "3",
                  "color": "#3a58a0",
                  "title": "Strategies",
                  "text": "Possible strategies or solutions: how eco-tourism could support conservation <b>and</b> benefit local communities."
                },
                {
                  "x": 50,
                  "y": 84,
                  "label": "4",
                  "color": "#8a4f9e",
                  "title": "The rest of the class",
                  "text": "Pay attention. While you listen, write down any more information you would like to know about the place and its sustainability issue."
                }
              ]
            },
            {
              "type": "table",
              "id": "b3-notes",
              "title": "My notes on Group 3’s Opening Remarks",
              "columns": [
                "Part",
                "What they said (notes)",
                "What I would like to know more about"
              ],
              "fixed": [
                "The context and why they chose it",
                "Causes and/or effects",
                "Possible strategies"
              ]
            },
            {
              "type": "language",
              "title": "Turn a gap into a question",
              "tabs": false,
              "groups": [
                {
                  "label": "I want to know …",
                  "phrases": [
                    "<b>Who benefits</b> most from eco-tourism in …?",
                    "<b>How do</b> local communities take part in …?",
                    "<b>What evidence is there</b> that … protects the environment?",
                    "<b>How could</b> … stop bluewashing / greenwashing?"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "b4",
          "short": "React + post",
          "minutes": 10,
          "grouping": "Seminar groups",
          "art": "dec10/assets/week4/v/v-d10w4d3-b4.svg",
          "title": "Feedback/Discussion",
          "goal": "React as a group and post your questions — or take notes on your feedback.",
          "blocks": [
            {
              "type": "tabs",
              "title": "Choose your tab",
              "tabs": [
                {
                  "label": "Rest of class",
                  "blocks": [
                    {
                      "type": "do",
                      "n": 1,
                      "who": "group",
                      "text": "Discuss your reactions to Group 3’s Opening Remarks. Everyone says at least one sentence."
                    },
                    {
                      "type": "language",
                      "title": "React to the presentation",
                      "tabs": false,
                      "groups": [
                        {
                          "label": "React",
                          "phrases": [
                            "<b>I was surprised that</b> …",
                            "<b>I didn’t know that</b> …",
                            "<b>It was interesting to hear</b> that …",
                            "<b>I’m not sure</b> that … would work, because …"
                          ]
                        },
                        {
                          "label": "Ask for more",
                          "phrases": [
                            "<b>We would like to know more about</b> …",
                            "<b>It wasn’t clear to us</b> how …",
                            "<b>We wonder whether</b> …"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "do",
                      "n": 2,
                      "who": "group",
                      "text": "Choose your best <b>one or two questions</b> — gaps in your knowledge. Write ONE group post on the Discussion Board <b>now, in class</b>."
                    },
                    {
                      "type": "fields",
                      "fields": [
                        {
                          "id": "b4-react",
                          "label": "Our group’s reactions",
                          "rows": 3,
                          "placeholder": "We were surprised that … It was interesting to hear …"
                        },
                        {
                          "id": "b4-qs",
                          "label": "Our one or two questions for Group 3",
                          "rows": 3,
                          "placeholder": "1. How … ?\n2. What … ?"
                        }
                      ]
                    },
                    {
                      "type": "checklist",
                      "id": "b4-post",
                      "title": "Our post",
                      "items": [
                        "Reactions + one or two questions",
                        "ONE post per group",
                        "Posted in class"
                      ]
                    }
                  ]
                },
                {
                  "label": "Seminar Group 3",
                  "blocks": [
                    {
                      "type": "do",
                      "n": 1,
                      "who": "group",
                      "text": "Listen and take notes as your teacher gives you feedback. You need these notes for <b>Portfolio Submission 1</b>."
                    },
                    {
                      "type": "table",
                      "id": "b4-fb",
                      "title": "My notes on the teacher’s feedback",
                      "columns": [
                        "Area",
                        "What went well",
                        "What to improve (action)"
                      ],
                      "fixed": [
                        "Content",
                        "Engagement with the audience",
                        "Pronunciation"
                      ]
                    },
                    {
                      "type": "language",
                      "title": "Check that you understand",
                      "tabs": false,
                      "groups": [
                        {
                          "label": "Ask",
                          "phrases": [
                            "<b>Could you give me an example of</b> …?",
                            "<b>What do you mean by</b> …?",
                            "<b>So, next time we should</b> … — <b>is that right?</b>"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "b5",
          "short": "Next week",
          "minutes": 15,
          "grouping": "Class",
          "art": "dec10/assets/week4/v/v-d10w4d3-b5.svg",
          "title": "Preparation for Next Week",
          "goal": "Know Group 3’s jobs before its Seminar — the same jobs every group does.",
          "blocks": [
            {
              "type": "figure",
              "src": "dec10/assets/week4/d3-portfolio-path.svg",
              "size": "wide",
              "alt": "Group 3’s path: 1 Opening Remarks this week; 2 Portfolio Submission 1 — a reflection on the teacher’s feedback; 3 the Discussion Board — choose one or two ideas, and Portfolio Submission 2 on how you chose them; 4 prepare slides and two thought-provoking questions; 5 the Seminar Presentation in Week 5, then reflect on the feedback and record a video response.",
              "caption": "Group 3’s path from today’s Opening Remarks to next week’s Seminar."
            },
            {
              "type": "checklist",
              "id": "b5-g3",
              "title": "Before the Seminar next week (Group 3)",
              "meter": [
                "done",
                "Ready for the Seminar!"
              ],
              "items": [
                "Read the reactions, comments and questions on the Discussion Board and find common themes and interesting ideas",
                "Select the focus of your seminar presentation from these comments and questions",
                "Think of two thought-provoking questions for the class to discuss in small groups for 10 minutes",
                "Prepare your PowerPoint slides for your presentation for Week 5 (10–12 minutes)",
                "Submit Portfolio Submission 1 — before your Seminar Presentation in Week 5"
              ]
            },
            {
              "type": "key",
              "title": "Note",
              "tone": "warn",
              "points": [
                "<b>Note 1:</b> don’t address ALL the questions on the Discussion Board. Choose <b>one or two</b> to focus your research.",
                "<b>Note 2:</b> you need to do your research <b>independently</b> to answer the question."
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "<b>Portfolio Submission 1</b> = a written summary of, and reflection on, the teacher’s feedback on your Opening Remarks. Complete the model."
            },
            {
              "type": "cloze",
              "id": "b5-cl",
              "title": "A model Portfolio Submission 1",
              "text": "Feedback on our Opening Remarks can be put into three {{1}}: content, engagement with the audience and pronunciation. For content, the feedback was that our strategies were clear, but we needed more {{2}} about the local communities. For engagement, the teacher said that we read from our slides, so we should make more {{3}}. For pronunciation, {{4}} words like “conservation” was difficult. This feedback tells us that {{5}}, we should practise with short notes, not a script.",
              "options": [
                "categories",
                "evidence",
                "eye contact",
                "stressing",
                "next time"
              ],
              "answers": [
                "categories",
                "evidence",
                "eye contact",
                "stressing",
                "next time"
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "<b>Portfolio Submission 2</b> = a written account of how you selected ideas from your classmates’ Discussion Board posts — and why you chose them. Complete the model."
            },
            {
              "type": "cloze",
              "id": "b5-cl2",
              "title": "A model Portfolio Submission 2",
              "text": "This is the process we followed for {{1}} ideas from the Discussion Board: We started by reading all the posts and picking out all the ones we found {{2}}. Then we talked together and chose {{3}} ideas to research for our Seminar Presentation. The first idea was how local guides can earn more from eco-tourism. We thought people would be interested in this aspect {{4}} several groups asked about it. The other idea we chose was protecting coral reefs from tourist boats {{5}} it links to our research on conservation.",
              "options": [
                "selecting",
                "interesting",
                "two",
                "because",
                "since"
              ],
              "answers": [
                "selecting",
                "interesting",
                "two",
                "because",
                "since"
              ]
            },
            {
              "type": "cards",
              "title": "Reminders for Week 5",
              "items": [
                {
                  "label": "Group 3 · Seminar Presentation",
                  "text": "How can eco-tourism in [your chosen country] be managed to both support conservation and benefit local communities?"
                },
                {
                  "label": "Group 4 · Opening Remarks",
                  "text": "How can [your chosen country] encourage cultural diversity?"
                }
              ]
            }
          ]
        },
        {
          "id": "b6",
          "short": "Group reflection",
          "minutes": 10,
          "grouping": "Seminar groups",
          "art": "dec10/assets/week4/v/v-d10w4d3-b6.svg",
          "title": "AST: Groupwork reflection",
          "goal": "Talk honestly about how your group works — and agree on one thing to improve.",
          "blocks": [
            {
              "type": "tabs",
              "title": "Choose your tab",
              "tabs": [
                {
                  "label": "Today’s presenting groups",
                  "blocks": [
                    {
                      "type": "talk",
                      "title": "Discuss these guiding questions",
                      "prompts": [
                        "Did any issues come up about working as a group (e.g. individual tasks, deadlines)? If not, why not? If yes, were you able to express your concerns?",
                        "How successfully do you think you supported each other?",
                        "Was there a “leader” in your group who started things moving? How did they share their ideas and plans? If not, how did you manage your progress?",
                        "Can you easily explain all the steps your group took in planning and carrying out the seminar task?"
                      ]
                    }
                  ]
                },
                {
                  "label": "Other groups",
                  "blocks": [
                    {
                      "type": "talk",
                      "title": "Discuss these guiding questions",
                      "prompts": [
                        "What are the strengths of your group work at the moment?",
                        "Are there any aspects of your group work you would like to change or improve?"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "scale",
              "id": "b6-sup",
              "title": "Rate your group",
              "statement": "In our group, everyone supports each other and shares the work fairly.",
              "ends": [
                "Not yet",
                "Always"
              ]
            },
            {
              "type": "language",
              "title": "Reflecting on group work",
              "groups": [
                {
                  "label": "Strengths",
                  "phrases": [
                    "One thing that works well is …",
                    "We’re good at … — for example, …",
                    "Everyone always …"
                  ]
                },
                {
                  "label": "Problems (politely)",
                  "phrases": [
                    "Sometimes it’s hard to …",
                    "We could be better at … (e.g. meeting deadlines)",
                    "I felt a bit … when …"
                  ]
                },
                {
                  "label": "Change",
                  "phrases": [
                    "From now on, let’s …",
                    "Could we agree to … by …?",
                    "Maybe we should take turns to …"
                  ]
                }
              ]
            },
            {
              "type": "tip",
              "text": "Ready to share? Your teacher may ask one or two groups to report back to the class."
            }
          ]
        },
        {
          "id": "b7",
          "short": "Group time",
          "minutes": 5,
          "grouping": "Seminar groups",
          "art": "dec10/assets/week4/v/v-d10w4d3-b7.svg",
          "title": "Work with your group",
          "goal": "Use the time left to plan your group’s next steps.",
          "blocks": [
            {
              "type": "steps",
              "items": [
                {
                  "who": "group",
                  "text": "<b>Group 3:</b> start planning your Seminar for next week (focus + two questions)."
                },
                {
                  "who": "group",
                  "text": "<b>Group 4:</b> start your Opening Remarks for next week."
                },
                {
                  "who": "group",
                  "text": "<b>Other groups:</b> continue your Seminar or Interactive Presentation research."
                }
              ]
            },
            {
              "type": "contract",
              "id": "b7-c",
              "kicker": "DEC10 · Week 4",
              "title": "Our next steps",
              "intro": "We agree to do these tasks before we meet again.",
              "stamp": "Seminar group",
              "signers": 4,
              "fields": [
                {
                  "id": "b7-task",
                  "label": "Who does what",
                  "placeholder": "… finds two sources on … · … makes the slides · …",
                  "rows": 2
                },
                {
                  "id": "b7-when",
                  "label": "By when",
                  "placeholder": "e.g. Monday 6 pm"
                },
                {
                  "id": "b7-meet",
                  "label": "When and where we meet next",
                  "placeholder": "e.g. Tuesday 4 pm, library / online"
                }
              ]
            },
            {
              "type": "tip",
              "text": "After class: continue the research for your group’s seminar topic and your final Interactive Presentation Assessment."
            }
          ]
        }
      ]
    },
    {
      "id": "iwwhw",
      "number": "03",
      "code": "11A",
      "minutes": 40,
      "tone": "amber",
      "art": "dec10/assets/week4/s-d3-iwwhw.svg",
      "title": "Integrated Writing workshop Homework",
      "subtitle": "Take Sample 4.2 apart — a different position on the same question",
      "outcome": "You understand better how to develop an argument in an essay and how to achieve cohesion — by deconstructing Sample 4.2 and comparing it with Sample 4.1.",
      "activities": [
        {
          "id": "h1",
          "short": "Sample 4.2",
          "minutes": 15,
          "grouping": "Homework",
          "art": "dec10/assets/week4/v/v-d10w4d3-h1.svg",
          "title": "Deconstruction of Sample 4.2 · Activity 1: Read the sample essay 4.2",
          "goal": "Match the paragraphs of Sample 4.2 to their purpose — then find the purpose of each sentence.",
          "blocks": [
            {
              "type": "model",
              "title": "Sample 4.2",
              "rows": [
                [
                  "Question",
                  "To what extent are the goals of ecotourism likely to be achieved?"
                ],
                [
                  "Position",
                  "Local goals likely to be achieved, not global goals in the short term"
                ]
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "alone",
              "text": "Find the <b>Sample 4.2 Language analysis table</b> in your booklet (or open the sample here). Read quickly and match the paragraphs to their rhetorical function."
            },
            {
              "type": "sources",
              "ids": [
                "s42"
              ]
            },
            {
              "type": "sort",
              "id": "h1-sort",
              "single": true,
              "title": "By paragraph: match each paragraph to its purpose",
              "buckets": [
                {
                  "label": "Introduction"
                },
                {
                  "label": "Body 1"
                },
                {
                  "label": "Body 2"
                },
                {
                  "label": "Body 3"
                },
                {
                  "label": "Conclusion"
                }
              ],
              "items": [
                {
                  "text": "Give the context (background) of the topic and the writer’s position",
                  "answer": 0
                },
                {
                  "text": "Present the first reason to support the position (local community goals already being achieved)",
                  "answer": 1
                },
                {
                  "text": "Present the second reason to support the position (local environmental goals already being achieved)",
                  "answer": 2
                },
                {
                  "text": "Present the third reason to support the position (but global environmental goals not being achieved)",
                  "answer": 3
                },
                {
                  "text": "Re-state the position and summarise the supporting reasons",
                  "answer": 4
                }
              ]
            },
            {
              "type": "spot",
              "id": "h1-spot",
              "title": "Find the turns · Body 1 and Body 2",
              "hint": "Tap the 5 words or phrases that admit a problem (BUT) or turn back to the writer’s argument.",
              "label": "BUT … BUT",
              "paras": [
                "¹The goals of ecotourism align with a number of Sustainable Development Goals to improve the lives of local communities (Spenceley & Rylance, 2021). ² [[Costa Rica is a successful model]] of how ecotourism has achieved this by supporting the local economy by involving stakeholders at the local and small-scale level, which, in turn, has contributed to the GDP and stability of Costa Rica overall (Alom, 2023). ³Projects in Africa [[similarly]] support the local workforce (Spenceley & Rylance, 2021). ⁴[[*Admittedly]], as Mielly (2023) points out, successes such as these are countered by less desirable practices, such as bluewashing, in apparent attempts to support ecotourism. ⁵[[*However]], as Mielly also points out, attitudes can change. ⁶This means, therefore, that by simply highlighting improper behaviour of tourism operators is likely to pressure them into ensuring their activities achieve the goals of ecotourism.",
                "¹The potential for ecotourism to achieve its goals goes beyond benefitting local communities to also promoting environmental conservation. ²[[Again]], as Spenceley and Rylance (2021) explain, the Sustainable Development Goals align with those of ecotourism by focusing on environmental preservation through programs such as marine protection and agrotourism. ³Indeed, the writers add, positive outcomes in this regard can be seen occurring at the local level where environmental preservation is occurring, including sports tourism and corporate social responsibility projects. ⁴[[*Unfortunately]], there are also examples of environmental destruction as a consequence of tourism developments (Mielly, 2023). ⁵[[*Nonetheless]], such destruction, [[*regrettable as it is]], is clearly not preventing otherwise positive outcomes from being achieved."
              ]
            },
            {
              "type": "table",
              "id": "h1-t",
              "title": "Sample 4.2 · By sentence (purpose of each sentence)",
              "columns": [
                "Sentence",
                "Purpose (use BUT / SO / AND / BECAUSE / EXAMPLE)"
              ],
              "fixed": [
                "Intro S1",
                "Intro S2",
                "Intro S3",
                "Intro S4",
                "Body 1 S1",
                "Body 1 S2",
                "Body 1 S3",
                "Body 1 S4",
                "Body 1 S5",
                "Body 1 S6",
                "Body 2 S1",
                "Body 2 S2",
                "Body 2 S3",
                "Body 2 S4",
                "Body 2 S5",
                "Body 3 S1",
                "Body 3 S2",
                "Body 3 S3",
                "Body 3 S4",
                "Conclusion S1",
                "Conclusion S2",
                "Conclusion S3"
              ]
            },
            {
              "type": "tip",
              "text": "Bring your notes to class tomorrow. Be ready to share your ideas."
            }
          ],
          "answers": {
            "title": "Answers (Teacher’s Book deconstruction table, Sample 4.2)",
            "items": [
              [
                "[Intro]",
                "Give the context (background) of the topic and the writer’s position — S1 Topic: historical development · S2 Topic: present response · S3 BUT Issue · S4 BUT Writer’s position + 3 reasons"
              ],
              [
                "[Body 1]",
                "First reason (local community goals already being achieved) — S1 Reason 1 (goals align with local community SDGs) · S2 EXAMPLE 1 of success (+ evidence) · S3 AND EXAMPLE 2 of success (+ evidence) · S4 BUT bluewashing (+ evidence) · S5 BUT attitudes can change (+ evidence) · S6 SO goals can be achieved (+ links back to writer’s position)"
              ],
              [
                "[Body 2]",
                "Second reason (local environmental goals already being achieved) — S1 Reason 2 (goals align with environment SDGs) · S2 EXAMPLE 1 of env programs (+ evidence) · S3 AND success of env programs (+ evidence) · S4 BUT env damage (+ evidence) · S5 BUT not stopping other positive achievements (+ links back to writer’s position)"
              ],
              [
                "[Body 3]",
                "Third reason (but global environmental goals not being achieved) — S1 BUT global env impact (Reason 3) · S2 BECAUSE tourism contributes to CO2 emissions · S3 SO (solutions) · S4 SO longer time needed to meet global ecotourism goals BUT local goals achievable (+ links back to writer’s position)"
              ],
              [
                "[Conclusion]",
                "Re-state position and summarise supporting reasons — S1 Position · S2 Reasons summarised · S3 SO (implication/final message) ongoing awareness needed"
              ],
              [
                "Spot (5)",
                "Admittedly · However · Unfortunately · Nonetheless · regrettable as it is"
              ]
            ]
          }
        },
        {
          "id": "h2",
          "short": "4.1 vs 4.2",
          "minutes": 15,
          "grouping": "Homework",
          "art": "dec10/assets/week4/v/v-d10w4d3-h2.svg",
          "title": "Comparing Samples 4.1 and 4.2",
          "goal": "Compare two good essays with different positions — and see why both work.",
          "blocks": [
            {
              "type": "sources",
              "ids": [
                "s41",
                "s42"
              ]
            },
            {
              "type": "figure",
              "src": "dec10/assets/week4/d3-compare-samples.svg",
              "size": "wide",
              "alt": "Sample 4.1 and Sample 4.2 side by side. Both introductions: historical development, present response, BUT issue. Then Sample 4.1 continues with SO: goals unlikely to be achieved; Sample 4.2 continues with BUT: some goals can still be achieved at the local level. Both conclusions: restate the position, summarise the reasons, final message — “Only through … can …” and “It is important that …”.",
              "caption": "Same structure, same sources — different positions. The key difference in the introduction: <b>SO</b> or <b>BUT</b>."
            },
            {
              "type": "quiz",
              "id": "h2-q",
              "title": "Answer the true/false questions",
              "shared": [
                "True",
                "False"
              ],
              "items": [
                {
                  "q": "<b>Introductions.</b> 1. The introduction in each essay has the same structure.",
                  "answer": "True",
                  "why": "Both: historical development → present response → the issue (BUT) → the writer’s response to the issue (SO or BUT), which is their position → reasons (preview points)."
                },
                {
                  "q": "2. The writer of each essay cites and synthesises the same sources and for the same purpose.",
                  "answer": "True",
                  "why": "Both cite Alom (2023), Mielly (2023) and Spenceley and Rylance (2021) as strong evidence (three sources) for the emergence of ecotourism."
                },
                {
                  "q": "3. The writer of each essay introduces their position with a BUT link.",
                  "answer": "False",
                  "why": "Sample 4.2 uses BUT: yes, there are challenges BUT some goals can still be achieved. Sample 4.1 uses SO: there are challenges SO the goals are unlikely to be achieved."
                },
                {
                  "q": "<b>Body paragraphs.</b> 4. The writer of each essay interprets “ecotourism goals” differently.",
                  "answer": "True",
                  "why": "Sample 4.1: ecotourism goals in general. Sample 4.2: goals at the local level and goals at the global level."
                },
                {
                  "q": "5. Both essays include a complete counterargument paragraph.",
                  "answer": "False",
                  "why": "Sample 4.1 has a counterargument paragraph (Body 1), rejected in Body 2. Sample 4.2 has no paragraph only for a counterargument: it embeds counterarguments + rejections in Body 1 (S4 & S5) and Body 2 (S4 & S5). Both use counterarguments effectively."
                },
                {
                  "q": "6. Body paragraph 1 in both essays talks about the SDGs, but for different purposes.",
                  "answer": "True",
                  "why": "Sample 4.1 uses the SDGs for a counterargument (“Proponents … argue that”, “Indeed”), rejected in Body 2 (“Despite … however”). Sample 4.2 uses the SDGs to support its thesis that local goals are achievable."
                },
                {
                  "q": "7. One essay cites Mielly (2023) much more than the other essay.",
                  "answer": "True",
                  "why": "Sample 4.1 cites Mielly more (Body 2 and 3) to support “unlikely”. Sample 4.2 cites Mielly only briefly, as counterpoints."
                },
                {
                  "q": "8. Because one essay cites Mielly (2023) much more, the other essay is not as good.",
                  "answer": "False",
                  "why": "Both essays are good. Each writer chose what to use from Mielly for their own purpose."
                },
                {
                  "q": "9. Each essay cites Alom (2023) for different purposes.",
                  "answer": "True",
                  "why": "Sample 4.2 uses Alom in Body 1 to support local success and in Body 3 to argue the goals are not being met at the global level. Sample 4.1 uses Alom for its own purpose — e.g. Costa Rica in its counterargument and the loopholes in Body 2."
                },
                {
                  "q": "10. Because the essays cite Alom (2023) for different purposes, one essay is better.",
                  "answer": "False",
                  "why": "Both essays are good. Each writer chose what to use from Alom for their own purpose."
                },
                {
                  "q": "<b>Conclusions.</b> 11. The conclusion in each essay has the same structure.",
                  "answer": "True",
                  "why": "Both: restate the position → summarise the supporting reasons → a final message."
                },
                {
                  "q": "12. Both essays use a phrase to signal the final message.",
                  "answer": "True",
                  "why": "Sample 4.1: “Only through [something] can [something happen]”. Sample 4.2: “It is important that [something happens]”."
                }
              ]
            },
            {
              "type": "language",
              "title": "Comparing two essays",
              "tabs": false,
              "groups": [
                {
                  "label": "Compare",
                  "phrases": [
                    "Both essays …",
                    "Like Sample 4.1, Sample 4.2 …",
                    "Unlike Sample 4.1, Sample 4.2 …",
                    "Sample 4.1 uses …, whereas Sample 4.2 …",
                    "Each writer chose … for their own purpose."
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "h3",
          "short": "Choosing a position",
          "minutes": 10,
          "grouping": "Homework",
          "art": "dec10/assets/week4/v/v-d10w4d3-h3.svg",
          "title": "Choosing a position",
          "goal": "Hear how the writer of Sample 4.2 decided their position — and plan how you will decide yours.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "alone",
              "text": "Listen to the writer of Sample 4.2 talking through how they decided their position. (Your teacher shares the recording on Canvas.)"
            },
            {
              "type": "fields",
              "title": "While and after you listen",
              "fields": [
                {
                  "id": "h3-process",
                  "label": "2. What was the process the writer went through in deciding their position?",
                  "rows": 3,
                  "placeholder": "First, the writer … Then … Finally …"
                },
                {
                  "id": "h3-notes",
                  "label": "3. Were the writer’s notes the same as, or different from, the notes for Sample 4.1?",
                  "rows": 3,
                  "placeholder": "They were similar / different because …"
                },
                {
                  "id": "h3-help",
                  "label": "4. How might hearing about this process help you plan and write your essays in future?",
                  "rows": 3,
                  "placeholder": "Next time, I will …"
                }
              ]
            },
            {
              "type": "tip",
              "text": "Write down your ideas and <b>bring them to your next class</b>. Be ready to explain them to a partner in one minute."
            },
            {
              "type": "language",
              "title": "Explaining a writing process",
              "tabs": false,
              "groups": [
                {
                  "label": "Process",
                  "phrases": [
                    "The writer started by …",
                    "After that, they sorted the ideas into …",
                    "They decided on … because …",
                    "This could help me to … before I write."
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "extras": [
    {
      "id": "x1",
      "short": "Review game",
      "minutes": 15,
      "grouping": "Teams",
      "art": "dec10/assets/week4/v/v-d10w4d3-x1.svg",
      "title": "Extra practice: Workshop Jeopardy",
      "goal": "Review today’s workshop in a team game.",
      "blocks": [
        {
          "type": "jeopardy",
          "id": "x1-j",
          "title": "Integrated writing workshop (2) · review",
          "teams": 4,
          "seconds": 25,
          "cols": [
            {
              "title": "The question",
              "clues": [
                {
                  "pts": 100,
                  "clue": "The task words in the question.",
                  "answer": "“To what extent”"
                },
                {
                  "pts": 200,
                  "clue": "The content words in the question.",
                  "answer": "goals of ecotourism; achieved"
                },
                {
                  "pts": 300,
                  "clue": "Name the three KEY rhetorical functions the question needs.",
                  "answer": "Evaluating, persuading and speculating"
                }
              ]
            },
            {
              "title": "Structure",
              "clues": [
                {
                  "pts": 100,
                  "clue": "The paragraph that shows the other side.",
                  "answer": "The counterargument"
                },
                {
                  "pts": 200,
                  "clue": "The four steps of the introduction of Sample 4.1, in order.",
                  "answer": "Topic: historical development → topic: present response → BUT issue → SO writer’s position + BECAUSE 2 reasons"
                },
                {
                  "pts": 300,
                  "clue": "How did the writer of Sample 4.1 decide their position?",
                  "answer": "Achievements in green, problems in red — weighed them up: more red, so “unlikely to be achieved”"
                }
              ]
            },
            {
              "title": "Persuasive language",
              "clues": [
                {
                  "pts": 100,
                  "clue": "An adjective from Sample 4.1 that means “not good enough”.",
                  "answer": "inadequate (or insufficient)"
                },
                {
                  "pts": 200,
                  "clue": "A phrase meaning “pretending to do something good”.",
                  "answer": "under the guise of"
                },
                {
                  "pts": 300,
                  "clue": "Say it persuasively: “Bluewashing is bad for ecotourism.”",
                  "answer": "e.g. Such practices clearly undermine the goals of ecotourism."
                }
              ]
            },
            {
              "title": "Cohesion & voice",
              "clues": [
                {
                  "pts": 100,
                  "clue": "A summary phrase from body paragraph 2 of Sample 4.1.",
                  "answer": "“These regulatory challenges” or “Such practices”"
                },
                {
                  "pts": 200,
                  "clue": "A reporting verb that shows the writer accepts a source’s idea.",
                  "answer": "points out (also: shows, explains)"
                },
                {
                  "pts": 300,
                  "clue": "What does “Proponents of ecotourism argue that …” signal?",
                  "answer": "Other people’s view — a counterargument is coming"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "glossary": [
    [
      "ecotourism",
      "travel to natural areas that protects the environment and helps local people",
      "Ecotourism has emerged as a potential form of responsible tourism."
    ],
    [
      "to what extent",
      "how far; how much — the answer is a position on a scale",
      "To what extent are the goals of ecotourism likely to be achieved?"
    ],
    [
      "rhetorical function",
      "the job of a sentence or paragraph in an argument",
      "The rhetorical function of S1 is to give background."
    ],
    [
      "thesis",
      "the writer’s main position — the answer to the question",
      "The thesis comes at the end of the introduction."
    ],
    [
      "counterargument",
      "an argument against the writer’s position",
      "Body 1 presents a counterargument: ecotourism has potential."
    ],
    [
      "concede / concession",
      "to accept that part of the other side is true",
      "The writer acknowledges that regulation has worked in Bahia."
    ],
    [
      "refute / refutation",
      "to show that an argument is wrong or not strong enough",
      "“Despite the potential benefits, however, …” refutes Body 1."
    ],
    [
      "hedging",
      "careful language that avoids claiming too much",
      "“Unlikely” and “may” are hedging words."
    ],
    [
      "proponent",
      "a person who supports an idea",
      "Proponents of ecotourism argue that it is a realistic alternative."
    ],
    [
      "stringent",
      "(of rules) strict and firmly applied",
      "There is a lack of stringent regulations."
    ],
    [
      "loophole",
      "a small mistake in a rule that lets people avoid it",
      "Certification can contain loopholes."
    ],
    [
      "compound (v)",
      "to make a problem worse",
      "These challenges are further compounded by bluewashing."
    ],
    [
      "bluewashing",
      "using ecotourism to look “green” or caring while serving corporate interests",
      "Bluewashing undermines the goals of ecotourism."
    ],
    [
      "displacement",
      "forcing people to leave their homes or land",
      "Some projects lead to the displacement of communities."
    ],
    [
      "under the guise of",
      "pretending to do something (good) while doing something else",
      "Land is taken under the guise of conservation."
    ],
    [
      "undermine",
      "to make something weaker, step by step",
      "Such practices clearly undermine the goals of ecotourism."
    ],
    [
      "robust",
      "strong and effective",
      "Ecotourism needs robust regulatory frameworks."
    ],
    [
      "foreseeable future",
      "the time we can predict — the next few years",
      "The goals are unlikely to be achieved, at least in the foreseeable future."
    ]
  ]
};
