/* DEC10 · Week 2 · Day 5 — Present, think, plan.
   Built from the Week 2 Teacher's Book, ordered by the teacher weekly map (version 16.10.2026): each Day page holds the parts
   TAUGHT that weekday. Taught on FRIDAY: 16A Group research summary presentation groups 3, 4 & 5 · 19A AST: Introduction to critical thinking (60 min) · 21A AST: Feedback literacy - action plan (1) · 22A Interactive Presentation task: check in.
   Protected texts are in sources.js and are never changed here. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w2d5",
  week: 2,
  day: 5,
  title: "Present, think, plan",
  duration: "About 4 hours",
  question: "How do you know what to believe — and how do you use feedback to get better?",
  questionKind: "Big question",
  questionLabel: "Today’s big question",
  journey: "Groups 3, 4 and 5 give their Research Summary presentations and everyone gives feedback. Then find out why people once believed the Earth was flat, learn what critical thinking really is, turn your Week 2 feedback into a real action plan and check in on your Interactive Presentation research.",
  image: "dec10/assets/week2/hero-d10w2d5.svg",
  imageAlt: "Illustration: a student at a podium speaks into a microphone; sound waves break into chunks with stressed beats. Behind her, a magnifying glass looks at a flat-earth map and a lightbulb, and a clipboard shows an action plan with ticks.",
  finish: {"title":"Week 3","text":"More Research Summary presentations, Seminar Discussions — and your action plan in use"},
  goalShort: "your Research Summary presentations and the Interactive Presentation",
  sections: [
    {
      id: "rspres2",
      number: "01",
      code: "16A",
      minutes: 120,
      tone: "plum",
      art: "dec10/assets/week2/s-rspres2.svg",
      title: "Group research summary presentation groups 3, 4 & 5",
      subtitle: "Present, answer questions, give and get feedback",
      outcome: "You deliver a structured presentation, answer questions on the spot, and judge your own and your peers’ presentations.",
      activities: [
        {
          id: "p1",
          short: "Where we are",
          minutes: 5,
          grouping: "Class",
          art: "dec10/assets/week2/v/v-d10w2d4-p1.svg",
          title: "Group Research Summary Presentations",
          goal: "Know where today fits and what happens.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d4-rs-days.svg",
              size: "wide",
              alt: "Day 1: individuals research and prepare a summary of research. Day 2: individuals form groups and share their summaries; groups prepare a group presentation. Day 4: presentations 1 and 2. Day 5 (today): presentations 3, 4 and 5. Topic: Exploring our digital carbon footprint. Rhetorical function: cause and effect.",
              caption: "Today is Day 5: Presentations 3, 4 and 5."
            },
            {
              type: "key",
              title: "Today in four facts",
              points: [
                "Each group presents for <b>8–10 minutes</b> + <b>5 minutes</b> for individual questions.",
                "Topic: <b>Exploring our digital carbon footprint</b>. Rhetorical function: <b>cause and effect</b>.",
                "Questions today: <b>clarification</b> and <b>probing</b> only. AST questions come in Week 3.",
                "There is <b>no mark</b> — just peer and teacher feedback with the Peer and Teacher Presentation Feedback Tool."
              ]
            },
            {
              type: "bet",
              id: "p1-bet",
              title: "Quick check",
              items: [
                {"q":"How long does each group present?","options":["3–5 minutes","8–10 minutes","15–20 minutes"],"answer":"8–10 minutes"},
                {
                  q: "Which questions do you ask today?",
                  options: ["Clarification and probing","AST questions only","No questions"],
                  answer: "Clarification and probing"
                },
                {
                  q: "Who is your feedback for?",
                  options: ["The whole group","One presenter that your teacher gives you"],
                  answer: "One presenter that your teacher gives you",
                  why: "Feedback is for individual speakers. Your teacher allocates one presenter to your group."
                }
              ]
            }
          ]
        },
        {
          id: "p2",
          short: "Get ready",
          minutes: 15,
          grouping: "Presentation groups",
          art: "dec10/assets/week2/v/v-d10w2d4-p2.svg",
          title: "Last-minute practice and preparation",
          goal: "Rehearse once more, and get ready to listen and give feedback.",
          blocks: [
            {
              type: "checklist",
              id: "p2-ready",
              title: "Before we start",
              meter: ["ready","Ready to go!"],
              items: [
                "I am sitting with my presentation group.",
                "Our slides are open and ready (no hold-ups).",
                "My phone is switched off.",
                "The Peer and Teacher Presentation Feedback Tool is open, ready to fill out.",
                "I know my part and who speaks before and after me."
              ]
            },
            {"type":"tip","text":"Working as a group? Your <b>Student’s book, page 103</b> has the language for solving problems in a group."},
            {
              type: "do",
              n: 1,
              who: "group",
              text: "Run through your talk once. Each speaker: practise your <b>first sentence</b> and your <b>hand-over</b> to the next speaker."
            },
            {
              type: "language",
              title: "Language for your group presentation",
              groups: [
                {
                  label: "Open",
                  phrases: [
                    "Good morning, everyone. <b>Today we’re going to talk about</b> …",
                    "Our presentation <b>is divided into</b> three parts.",
                    "<b>First</b>, I’ll … <b>Then</b> … will … <b>Finally</b>, …"
                  ]
                },
                {
                  label: "Cause & effect",
                  phrases: [
                    "… <b>leads to</b> / <b>results in</b> …",
                    "<b>As a result</b>, …",
                    "… <b>is caused by</b> / <b>is due to</b> …",
                    "<b>This is because</b> …",
                    "<b>The more</b> … , <b>the more</b> …"
                  ]
                },
                {
                  label: "Use sources",
                  phrases: ["<b>According to</b> Griffiths (2020), …","A UN report (2024) <b>found that</b> …","<b>My research shows that</b> …"]
                },
                {
                  label: "Hand over",
                  phrases: ["<b>Now I’ll hand over to</b> Mei, who will talk about …","<b>Thank you</b>, Ali. <b>As Ali said</b>, …","<b>Building on</b> what Sam said, …"]
                },
                {"label":"Close","phrases":["<b>To sum up</b>, …","The <b>key message</b> is …","<b>Thank you for listening.</b> We’re happy to take any questions."]}
              ]
            },
            {
              type: "do",
              n: 2,
              who: "group",
              text: "<b>Hot seat.</b> One person spins and asks. The speaker answers <b>without notes</b> in 30 seconds. Take turns."
            },
            {
              type: "spinner",
              id: "p2-spin",
              title: "Answer on the spot",
              reels: [
                {
                  label: "Question",
                  items: [
                    "Could you explain what you mean by “data centre”?",
                    "Can you give an example of that?",
                    "Where did that figure come from?",
                    "Why do you think that happens?",
                    "What would happen if people did nothing?",
                    "Is that true in every country?",
                    "Which solution do you think works best?"
                  ]
                },
                {
                  label: "Start your answer with",
                  items: [
                    "That’s a good question. …",
                    "What I meant was …",
                    "Let me give you an example: …",
                    "According to my source, …",
                    "I’m not completely sure, but I think …"
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Answering questions — and buying time",
              tabs: false,
              groups: [
                {"label":"Buy time","phrases":["<b>That’s a good question.</b>","<b>Let me think about that</b> for a second.","<b>Do you mean</b> … ?"]},
                {"label":"Answer","phrases":["<b>What I meant was</b> …","<b>In other words</b>, …","<b>For example</b>, …"]},
                {
                  label: "If you don’t know",
                  phrases: ["<b>I’m not sure</b>, but <b>I think</b> …","I <b>didn’t find</b> data on that, <b>but</b> …","<b>That would be</b> interesting to research."]
                }
              ]
            }
          ]
        },
        {
          id: "p3",
          short: "The procedure",
          minutes: 5,
          grouping: "Class",
          art: "dec10/assets/week2/v/v-d10w2d4-p3.svg",
          title: "Summary of procedure per group presentation",
          goal: "Know the four steps for each group — 30 minutes in total.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d4-rs-cycle.svg",
              size: "wide",
              alt: "Four steps in 30 minutes. Step 1, 8–10 minutes: the group presents; other groups listen and complete the peer feedback form. Step 2, 10 minutes: the group reflects on its presentation and answers individual questions; the audience prepares questions and a few are chosen. Step 3, 5–7 minutes: the teacher gives feedback to the presenting group; groups prepare their feedback and at least one action point. Step 4, 5–7 minutes: groups share their feedback with their allocated presenter and send the forms electronically.",
              caption: "Every group: the same four steps, about 30 minutes."
            },
            {"type":"do","n":1,"who":"pair","text":"Close the picture in your head. Put the steps in order."},
            {
              type: "order",
              id: "p3-order",
              title: "One group presentation — what happens first?",
              items: [
                "The group presents (8–10 min). Everyone else listens and fills in the feedback tool.",
                "The audience writes one probing or clarification question. The group reflects.",
                "A few students ask their questions. The presenters answer.",
                "The teacher gives feedback to the presenting group. Groups prepare feedback with at least one action point.",
                "Each presenter sits with their feedback group and hears their feedback (5 min).",
                "All feedback tool forms are sent electronically to the presenters."
              ]
            },
            {
              type: "key",
              title: "Two rules",
              tone: "warn",
              points: [
                "Your feedback must include <b>at least one action point</b> (= one clear thing to do next time).",
                "By the end of today, <b>all feedback forms</b> are sent to the presenters — even if you also said it in class."
              ]
            }
          ]
        },
        {
          id: "p4",
          short: "Toolkit",
          minutes: 10,
          grouping: "Groups",
          art: "dec10/assets/week2/v/v-d10w2d4-p4.svg",
          title: "Your feedback tool and question toolkit",
          goal: "Know what to listen for and how to ask good questions.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"The feedback tool has four criteria. Sort each statement into its criterion."},
            { type: 'download', id: 'feedback-tool', note: "One form for each group: Groups 3, 4 and 5. Save each one with the group’s name." },
            {
              type: "sort",
              id: "p4-sort",
              title: "Which criterion?",
              buckets: [
                {"label":"Content Delivery of Presentation","letter":"C"},
                {"label":"Fluency & Pronunciation","letter":"F"},
                {"label":"Language Use","letter":"L"},
                {"label":"Question & Answer","letter":"Q"}
              ],
              items: [
                {"text":"Evidence for the cause/s was given.","answer":0},
                {"text":"Visuals were clear and helped the audience understand the main ideas.","answer":0},
                {"text":"Body language and eye contact engaged the audience.","answer":0},
                {"text":"We could hear the presenters using chunking, pausing and stress in their language.","answer":1},
                {"text":"We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).","answer":1},
                {"text":"We could hear functional language (EG evaluating; explaining cause /effect; explaining problem).","answer":2},
                {"text":"The grammar used was largely accurate and we could understand the meaning.","answer":2},
                {"text":"Answers were given spontaneously.","answer":3},
                {"text":"Answers were relevant.","answer":3}
              ]
            },
            {"type":"do","n":2,"who":"group","text":"Two kinds of question for today. Is each one <b>clarification</b> or <b>probing</b>?"},
            {
              type: "sort",
              id: "p4-q",
              title: "Clarification or probing?",
              buckets: [{"label":"Clarification — I didn’t understand","letter":"?"},{"label":"Probing — tell me more / go deeper","letter":"⤓"}],
              items: [
                {"text":"Could you explain what you mean by “carbon offsets”?","answer":0},
                {"text":"Sorry, did you say 3.7% or 37%?","answer":0},
                {"text":"What exactly is a data centre?","answer":0},
                {"text":"Why do you think gaming uses so much electricity?","answer":1},
                {"text":"How reliable is the data from Google’s own report?","answer":1},
                {"text":"What would happen if people kept their phones for six years?","answer":1}
              ]
            },
            {
              type: "language",
              title: "Question starters",
              tabs: false,
              groups: [
                {
                  label: "Clarification",
                  phrases: [
                    "<b>Could you explain what you mean by</b> …?",
                    "<b>Sorry, did you say</b> … or …?",
                    "<b>Could you say that again</b>, please?",
                    "<b>So, are you saying that</b> …?"
                  ]
                },
                {
                  label: "Probing",
                  phrases: [
                    "<b>Why do you think</b> …?",
                    "<b>What evidence</b> is there that …?",
                    "<b>How would</b> … <b>affect</b> …?",
                    "<b>What would happen if</b> …?",
                    "<b>Is this true for</b> all countries?"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "p5",
          short: "Group 3",
          minutes: 30,
          grouping: "Groups",
          art: "dec10/assets/week2/v/v-d10w2d4-p5.svg",
          title: "Presentation 3",
          goal: "Listen, judge, ask — then give your presenter useful feedback.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"group","text":"<b>Group 3 presents</b> (8–10 min). Listen. Fill in the tool for <b>your</b> presenter. Think of a question."},
                {"who":"alone","text":"<b>Write one question</b> (clarification or probing). Your teacher may choose you to ask it."},
                {"who":"group","text":"<b>Agree on your feedback</b> (5–7 min). Include at least one action point."},
                {"who":"group","text":"<b>Give your feedback</b> to your presenter face to face (5 min). Then send the form."}
              ]
            },
            {
              type: "form",
              id: "p5-f",
              title: "Peer and Teacher Presentation Feedback Tool · Presentation 3",
              observe: "Which presenter are you giving feedback on?",
              intro: "Choose Yes, Mostly or Needs work. Write a short comment and one action point.",
              scale: ["Yes","Mostly","Needs work"],
              cols: ["Comments","Action point"],
              sections: [
                {
                  label: "Content Delivery of Presentation",
                  items: [
                    "The problem was clearly stated.",
                    "Evidence for the cause/s was given.",
                    "Solution was evaluated.",
                    "We could follow the presentation easily: the ideas were clearly and logically connected.",
                    "Each group member’s turn flowed naturally and logically from the previous member.",
                    "Each group member’s contribution was equal in time and content.",
                    "Visuals were consistent for each group member and across all group members.",
                    "Body language and eye contact engaged the audience.",
                    "Visuals were clear and helped the audience understand the main ideas.",
                    "The presenters engaged the audience."
                  ]
                },
                {
                  label: "Fluency & Pronunciation",
                  items: [
                    "Pronunciation was clear and could be easily understood.",
                    "We could hear the presenters using chunking, pausing and stress in their language.",
                    "We could hear the presenters using intonation in their speaking (speaking was not ‘flat’)."
                  ]
                },
                {
                  label: "Language Use",
                  items: [
                    "The grammar used was largely accurate and we could understand the meaning. The vocabulary used was largely accurate and we could understand the meaning.",
                    "We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)"
                  ]
                },
                {"label":"Question & Answer","items":["Answers were given spontaneously.","Answers were relevant.","Answers were clear."]}
              ],
              send: true,
              sendLabel: "Send to the presenter",
              sendHint: "Send this form to the presenter you gave feedback on. They save it in their “Research & Seminar Presentations – Feedback & Action Plans” folder."
            },
            {
              type: "fields",
              fields: [{"id":"p5-q","label":"My question for Group 3","rows":2,"placeholder":"Could you explain what you mean by … ? / Why do you think … ?"}]
            },
            {
              type: "do",
              n: 1,
              who: "group",
              text: "Say your feedback face to face. Open your <b>Student’s book, page 102</b>: Language for giving peer feedback on presentations. Use at least <b>three</b> expressions."
            },
            {
              type: "language",
              title: "Language for giving peer feedback on presentations · Student’s book p. 102",
              groups: [
                {
                  label: "Make it clearer",
                  phrases: [
                    "To make it clearer that …, you could …",
                    "To strengthen …, it might help …",
                    "Perhaps consider … -ing … rather than …",
                    "For better …, I suggest you …"
                  ]
                },
                {"label":"Remind","phrases":["Don’t forget to …","Remember to …","Be mindful of …","Try … to …, so …"]},
                {
                  label: "Suggest",
                  phrases: [
                    "It might be beneficial to …",
                    "You could possibly …",
                    "I recommend …-ing …, so …",
                    "… was good. To make it even better, you might …",
                    "It would help if …",
                    "It would help to …"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "p6",
          short: "Group 4",
          minutes: 30,
          grouping: "Groups",
          art: "dec10/assets/week2/v/v-d10w2d4-p6.svg",
          title: "Presentation 4",
          goal: "Same steps — better questions and sharper feedback this time.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"group","text":"<b>Group 4 presents</b> (8–10 min). Fill in the tool for your presenter."},
                {"who":"alone","text":"<b>Write one question.</b> This time, try a <b>probing</b> question."},
                {"who":"group","text":"<b>Agree on your feedback</b> with at least one action point."},
                {"who":"group","text":"<b>Give your feedback</b> face to face. Then send the form."}
              ]
            },
            {
              type: "form",
              id: "p6-f",
              title: "Peer and Teacher Presentation Feedback Tool · Presentation 4",
              observe: "Which presenter are you giving feedback on?",
              intro: "Choose Yes, Mostly or Needs work. Write a short comment and one action point.",
              scale: ["Yes","Mostly","Needs work"],
              cols: ["Comments","Action point"],
              sections: [
                {
                  label: "Content Delivery of Presentation",
                  items: [
                    "The problem was clearly stated.",
                    "Evidence for the cause/s was given.",
                    "Solution was evaluated.",
                    "We could follow the presentation easily: the ideas were clearly and logically connected.",
                    "Each group member’s turn flowed naturally and logically from the previous member.",
                    "Each group member’s contribution was equal in time and content.",
                    "Visuals were consistent for each group member and across all group members.",
                    "Body language and eye contact engaged the audience.",
                    "Visuals were clear and helped the audience understand the main ideas.",
                    "The presenters engaged the audience."
                  ]
                },
                {
                  label: "Fluency & Pronunciation",
                  items: [
                    "Pronunciation was clear and could be easily understood.",
                    "We could hear the presenters using chunking, pausing and stress in their language.",
                    "We could hear the presenters using intonation in their speaking (speaking was not ‘flat’)."
                  ]
                },
                {
                  label: "Language Use",
                  items: [
                    "The grammar used was largely accurate and we could understand the meaning. The vocabulary used was largely accurate and we could understand the meaning.",
                    "We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)"
                  ]
                },
                {"label":"Question & Answer","items":["Answers were given spontaneously.","Answers were relevant.","Answers were clear."]}
              ],
              send: true,
              sendLabel: "Send to the presenter",
              sendHint: "Send this form to the presenter you gave feedback on. They save it in their “Research & Seminar Presentations – Feedback & Action Plans” folder."
            },
            {
              type: "fields",
              fields: [{"id":"p6-q","label":"My question for Group 4","rows":2,"placeholder":"What evidence is there that … ? / What would happen if … ?"}]
            },
            {
              type: "tip",
              text: "<b>Student’s book, page 102:</b> use a feedback expression you did not use for Group 3. <b>Make your action point specific.</b> Not “Speak better.” → “Pause after each main point, and look up every sentence or two.”"
            }
          ]
        },
        {
          id: "p7",
          short: "Group 5",
          minutes: 30,
          grouping: "Groups",
          art: "dec10/assets/week2/v/v-d10w2d4-p7.svg",
          title: "Presentation 5",
          goal: "The last group — use everything you learned today.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"group","text":"<b>Group 5 presents</b> (8–10 min). Fill in the tool for your presenter."},
                {"who":"alone","text":"<b>Write one question.</b> Use a question starter you have not used yet."},
                {"who":"group","text":"<b>Agree on your feedback</b> with at least one action point."},
                {"who":"group","text":"<b>Give your feedback</b> face to face. Then send the form."}
              ]
            },
            {
              type: "form",
              id: "p7-f",
              title: "Peer and Teacher Presentation Feedback Tool · Presentation 5",
              observe: "Which presenter are you giving feedback on?",
              intro: "Choose Yes, Mostly or Needs work. Write a short comment and one action point.",
              scale: ["Yes","Mostly","Needs work"],
              cols: ["Comments","Action point"],
              sections: [
                {
                  label: "Content Delivery of Presentation",
                  items: [
                    "The problem was clearly stated.",
                    "Evidence for the cause/s was given.",
                    "Solution was evaluated.",
                    "We could follow the presentation easily: the ideas were clearly and logically connected.",
                    "Each group member’s turn flowed naturally and logically from the previous member.",
                    "Each group member’s contribution was equal in time and content.",
                    "Visuals were consistent for each group member and across all group members.",
                    "Body language and eye contact engaged the audience.",
                    "Visuals were clear and helped the audience understand the main ideas.",
                    "The presenters engaged the audience."
                  ]
                },
                {
                  label: "Fluency & Pronunciation",
                  items: [
                    "Pronunciation was clear and could be easily understood.",
                    "We could hear the presenters using chunking, pausing and stress in their language.",
                    "We could hear the presenters using intonation in their speaking (speaking was not ‘flat’)."
                  ]
                },
                {
                  label: "Language Use",
                  items: [
                    "The grammar used was largely accurate and we could understand the meaning. The vocabulary used was largely accurate and we could understand the meaning.",
                    "We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)"
                  ]
                },
                {"label":"Question & Answer","items":["Answers were given spontaneously.","Answers were relevant.","Answers were clear."]}
              ],
              send: true,
              sendLabel: "Send to the presenter",
              sendHint: "Send this form to the presenter you gave feedback on. They save it in their “Research & Seminar Presentations – Feedback & Action Plans” folder."
            },
            {"type":"fields","fields":[{"id":"p7-q","label":"My question for Group 5","rows":2,"placeholder":"How would … affect … ? / Is this true for … ?"}]},
            {
              type: "fields",
              fields: [
                {
                  id: "p7-fb",
                  label: "My feedback sentence for the presenter (Student’s book p. 102)",
                  rows: 2,
                  placeholder: "To strengthen …, it might help … / I recommend …-ing …, so …"
                }
              ]
            }
          ]
        },
        {
          id: "p8",
          short: "Reflection",
          minutes: 10,
          grouping: "Groups",
          art: "dec10/assets/week2/v/v-d10w2d4-p8.svg",
          title: "Reflection",
          goal: "Look back, then decide what you will do better next time.",
          blocks: [
            {
              type: "tabs",
              title: "Choose your tab",
              tabs: [
                {
                  label: "I presented today",
                  blocks: [
                    {
                      type: "talk",
                      title: "Discuss in your presentation group",
                      prompts: ["What did you do well — individually and as a group?","What do you want to do better in your next presentation — individually and as a group?"]
                    },
                    {
                      type: "fields",
                      fields: [
                        {"id":"p8-well","label":"What I did well","rows":2,"placeholder":"I … / As a group, we …"},
                        {"id":"p8-better","label":"What I will do better next time","rows":2,"placeholder":"Next time, I will …"}
                      ]
                    }
                  ]
                },
                {
                  label: "I watched today",
                  blocks: [
                    {
                      type: "talk",
                      title: "Discuss in your group",
                      prompts: ["What did you learn from watching today’s presentations?","What will you do in your presentation from what you learned today?"]
                    },
                    {
                      type: "fields",
                      fields: [{"id":"p8-learn","label":"From watching today, I will …","rows":3,"placeholder":"I noticed that … so in my presentation I will …"}]
                    }
                  ]
                }
              ]
            },
            {
              type: "checklist",
              id: "p8-save",
              title: "Before you leave",
              items: [
                "I sent my feedback forms to the presenters.",
                "I saved the feedback forms I received in my “Research & Seminar Presentations – Feedback & Action Plans” folder."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "critical",
      number: "02",
      code: "19A",
      minutes: 60,
      tone: "blue",
      art: "dec10/assets/week2/s-critical.svg",
      title: "AST: Introduction to critical thinking",
      subtitle: "Question it, check it, use it",
      outcome: "You can explain what critical thinking is, and why it is important in DEC10 and at university.",
      activities: [
        {
          id: "c1",
          short: "Warmer",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week2/d5-v-c1.svg",
          title: "Warmer: Past Beliefs and Theories",
          goal: "All ten ideas are false. Which three did people never believe?",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Read the 10 ideas. <b>All of them are false!</b> But 7 of them were real beliefs in the past. Put each idea in a box. Find the <b>3 ideas people did not believe</b>. If you don’t know, just guess."
            },
            {
              type: "sort",
              id: "c1-sort",
              title: "Did people believe this?",
              hint: "Tap a card, then tap a box. You need 3 cards in “Nobody believed this”.",
              buckets: [
                {"label":"People believed this","text":"a common belief or theory in the past","letter":"✓"},
                {"label":"Nobody believed this","text":"NOT a common belief","letter":"✗"}
              ],
              items: [
                {
                  text: "a. The Earth is flat like a disc (not spherical).",
                  answer: 0,
                  why: "The Greek philosopher Plato first suggested a round Earth in the 4th century BC. In other parts of the world, the flat-Earth belief lasted much longer."
                },
                {
                  text: "b. The Earth needs to be balanced with similar land masses in the Northern and Southern Hemispheres.",
                  answer: 0,
                  why: "This was the theory of Terra Australis (Australia got its name from it). Explorers disproved it in the 17th and 18th centuries."
                },
                {"text":"c. The Earth is completely hollow (empty).","answer":0,"why":"A real theory — disproven in 1740."},
                {
                  text: "d. The Earth rotates in different directions on different days — alternating directions every day.",
                  answer: 1,
                  why: "Not a common belief or theory."
                },
                {
                  text: "e. The Earth is the centre of the universe, and the sun, moon and all the stars revolve around us.",
                  answer: 0,
                  why: "A common belief for a very long time."
                },
                {
                  text: "f. Australia’s landmass is growing, and that’s why it took so long for Europeans to discover it.",
                  answer: 1,
                  why: "Not a common belief or theory."
                },
                {"text":"g. California is an island — not connected to the mainland of the USA.","answer":0,"why":"A mapping error. It was first corrected in 1701."},
                {
                  text: "h. There’s no need for doctors to wash their hands (or wear gloves) between patients.",
                  answer: 0,
                  why: "In 1847 a Hungarian doctor, Ignaz Semmelweis, first noticed the connection between germs and infection."
                },
                {"text":"i. People could melt if travelling on fast trains.","answer":0,"why":"A real fear when the first locomotives (fast trains) appeared."},
                {
                  text: "j. Air pollution is a protective layer that the Earth generates to protect itself from alien invasion.",
                  answer: 1,
                  why: "Not a common belief or theory."
                }
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"Tap the markers on the timeline. When did each belief end — and <b>who</b> or <b>what</b> ended it?"},
            {
              type: "hotspot",
              src: "dec10/assets/week2/d5-beliefs.svg",
              alt: "A timeline from ancient Greece to the 1800s with pictures: a flat Earth on a disc, a big southern continent on an old map, a hollow Earth, California as an island, a doctor washing hands and an early steam train.",
              title: "How old beliefs ended",
              hint: "Tap a number to see what changed people’s minds.",
              spots: [
                {
                  x: 13,
                  y: 43,
                  title: "A flat Earth",
                  text: "Plato suggested a round (spherical) Earth in the 4th century BC. Observation of ships and shadows slowly changed minds — but in some places the old belief lasted much longer.",
                  color: "#3a58a0"
                },
                {
                  x: 32,
                  y: 34,
                  title: "Terra Australis",
                  text: "People thought a huge southern land had to “balance” the north. Explorers sailed there in the 17th and 18th centuries and found it was not true.",
                  color: "#2b776e"
                },
                {"x":49,"y":54,"title":"A hollow Earth","text":"Disproven in 1740. Measurements of the Earth showed that it is not empty inside.","color":"#985c0e"},
                {
                  x: 64,
                  y: 30,
                  title: "California, the island",
                  text: "A mapping error. Explorers travelled there by land, and the map was corrected in 1701.",
                  color: "#b0512a"
                },
                {
                  x: 78,
                  y: 52,
                  title: "Doctors and hand washing",
                  text: "In 1847 Ignaz Semmelweis noticed that fewer patients died when doctors washed their hands. He used evidence — numbers — to question what everyone believed.",
                  color: "#7a4a8c"
                },
                {
                  x: 91,
                  y: 36,
                  title: "Melting on fast trains",
                  text: "When the first fast trains appeared, some people feared the speed could hurt or even “melt” the body. People travelled on trains — and the fear disappeared.",
                  color: "#3f7a3a"
                }
              ]
            },
            {"type":"do","n":3,"who":"group","text":"Discuss the three questions. Use the language bank. Try to speak for <b>one minute</b> on each."},
            {
              type: "talk",
              title: "Discuss",
              prompts: [
                "What do you think about these beliefs and theories?",
                "Why do you think people believed these things? Can you see any logic behind them?",
                "What happened to these beliefs and theories?",
                "Extra: Is there a belief <b>today</b> that people may laugh at in 100 years?"
              ]
            },
            {
              type: "language",
              title: "Talk about old beliefs",
              groups: [
                {
                  label: "Say what people believed",
                  phrases: ["People <b>used to believe</b> that…","<b>It was widely believed</b> that…","<b>At the time,</b> most people thought…"]
                },
                {
                  label: "Explain why",
                  phrases: ["It seemed logical <b>because</b>…","There <b>was not enough evidence</b> to…","People <b>simply accepted</b> what they were told."]
                },
                {
                  label: "Say what changed",
                  phrases: ["This idea <b>was disproven</b> in…","<b>Later research showed</b> that…","<b>Thanks to</b> exploration / experiments, we now know…"]
                }
              ]
            },
            {
              type: "key",
              title: "So what changed these beliefs?",
              points: [
                "Someone <b>asked a question</b> instead of just accepting the idea.",
                "They looked for <b>evidence</b> — experiments, measurements, exploration.",
                "Then they used <b>logic</b> to reach a new conclusion. This is <b>critical thinking</b>."
              ]
            }
          ]
        },
        {
          id: "c2",
          short: "Definition",
          minutes: 5,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/d5-v-c2.svg",
          title: "What is critical thinking? · Activity 1 Definition",
          goal: "Write your own definition first — no searching.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Write a definition of critical thinking in <b>1–2 sentences</b>. This is <b>your</b> understanding — don’t look anything up!"
            },
            {
              type: "language",
              title: "Useful frames for a definition",
              groups: [
                {
                  label: "Start",
                  phrases: ["Critical thinking <b>is the ability to</b>…","Critical thinking <b>means</b>…","<b>In my view,</b> critical thinking is…"]
                },
                {"label":"Add detail","phrases":["…<b>rather than</b> just…","…<b>in order to</b> make better decisions.","<b>For example,</b> a critical thinker…"]}
              ]
            },
            {"type":"fields","fields":[{"id":"c2-def","label":"My definition of critical thinking","placeholder":"Critical thinking is…","rows":3}]},
            {
              type: "do",
              n: 2,
              who: "pair",
              text: "Read your definition to a partner. Find <b>one idea you both have</b> and <b>one idea only one of you has</b>."
            },
            {
              type: "talk",
              title: "Compare",
              prompts: ["We both think critical thinking is about…","You mentioned… — I didn’t think of that.","I’m not sure I agree that… because…"]
            }
          ]
        },
        {
          id: "c3",
          short: "Dictation",
          minutes: 12,
          grouping: "Pair (A + B)",
          art: "dec10/assets/week2/d5-v-c3.svg",
          title: "Activity 2 Running dictation",
          goal: "Student A reads and speaks, Student B listens and writes. Then find the one wrong word.",
          blocks: [
            {
              type: "steps",
              title: "How it works",
              items: [
                {"who":"pair","text":"Decide who is <b>Student A</b> (the reader) and who is <b>Student B</b> (the writer)."},
                {
                  who: "alone",
                  text: "<b>Student A:</b> open the text below. Read a few words, remember them, then <b>say them</b> to your partner. Your partner must <b>not</b> see the screen."
                },
                {"who":"alone","text":"<b>Student B:</b> listen and write in the box. Student A <b>cannot help</b> with the writing — only repeat or spell a word."},
                {"who":"pair","text":"When you finish, <b>check together</b> with the text."}
              ]
            },
            {
              type: "language",
              title: "Dictation English",
              groups: [
                {
                  label: "Student B asks",
                  phrases: [
                    "Could you <b>say that again</b>, please?",
                    "Could you <b>slow down</b> a little?",
                    "How do you <b>spell</b> “judgments”?",
                    "Is that <b>one word or two</b>?"
                  ]
                },
                {
                  label: "Student A says",
                  phrases: [
                    "<b>New line.</b> / <b>Bullet point.</b>",
                    "<b>Comma</b> … <b>full stop</b>.",
                    "It’s spelled <b>A-N-A-L-Y-S-I-N-G</b>.",
                    "OK — <b>from the beginning</b>…"
                  ]
                }
              ]
            },
            {
              type: "toggle",
              title: "Student A only — the running dictation text",
              hint: "Student B: don’t open this!",
              blocks: [
                {
                  type: "model",
                  title: "Running dictation text",
                  text: "Critical thinking is the process of carefully analysing information to make judgments and solve problems.<br>This involves:",
                  list: [
                    "accepting information provided",
                    "separating facts from opinions and relevant information from irrelevant information",
                    "noticing errors in arguments",
                    "using logic and evidence to make decisions and come up with conclusions"
                  ]
                }
              ]
            },
            {"type":"fields","fields":[{"id":"c3-dict","label":"Student B writes here","placeholder":"Critical thinking is…","rows":7}]},
            {
              type: "do",
              n: 2,
              who: "pair",
              text: "Check what Student B wrote. Then read the text again: <b>one word</b> in it is wrong. Tap the word you would change."
            },
            {
              type: "spot",
              id: "c3-spot",
              label: "Find the wrong word",
              title: "Which word does not fit critical thinking?",
              hint: "Tap one word.",
              paras: [
                "Critical thinking is the process of carefully [[analysing]] information to make [[judgments]] and solve problems. This involves: [[*accepting]] information provided; [[separating]] facts from opinions; [[noticing]] errors in arguments; [[using]] logic and evidence to make decisions."
              ]
            },
            {
              type: "quiz",
              id: "c3-q",
              items: [
                {
                  q: "Which word should replace it?",
                  options: ["questioning","repeating","ignoring","copying"],
                  answer: "questioning",
                  why: "A critical thinker does not just accept information — they question it. This is the key idea of critical thinking."
                }
              ]
            },
            {
              type: "key",
              title: "Critical thinking — the corrected definition",
              points: [
                "Critical thinking is the process of carefully analysing information to make judgments and solve problems.",
                "It involves <b>questioning</b> information provided; separating facts from opinions and relevant information from irrelevant information; noticing errors in arguments; and using logic and evidence to make decisions and come up with conclusions."
              ]
            },
            {
              type: "do",
              n: 3,
              who: "pair",
              text: "Compare this definition with <b>your</b> definition from Activity 1. What did you include? What did you miss? Improve your definition."
            },
            {"type":"fields","fields":[{"id":"c3-better","label":"My definition — improved","placeholder":"Critical thinking means questioning…","rows":3}]},
            {
              type: "flash",
              id: "c3-flash",
              title: "Memory challenge",
              text: "Critical thinking is the process of carefully analysing information to make judgments and solve problems.",
              seconds: 6,
              writer: "You",
              reader: "The screen"
            }
          ]
        },
        {
          id: "c4",
          short: "Example",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week2/d5-v-c4.svg",
          title: "Critical Thinking: An Example",
          goal: "Four questions, from easy to hard. Notice how your thinking changes.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "<b>Think.</b> Answer the questions <b>one at a time</b>. The first one takes about 15 seconds. You can talk about the last one for 1–2 minutes."
            },
            {
              type: "carousel",
              title: "car – bus – bicycle – motorbike",
              slides: [
                {
                  title: "Question a",
                  text: "What “group” do all these items belong to?<br><b>car – bus – bicycle – motorbike</b>",
                  image: "dec10/assets/week2/d5-transport.svg",
                  alt: "A car, a bus, a bicycle and a motorbike in a row."
                },
                {"title":"Question b","text":"Which item is different from the others?<br><b>car – bus – bicycle – motorbike</b>"},
                {"title":"Question c","text":"Why is a bicycle different from the other items?"},
                {
                  title: "Question d",
                  text: "How does using a bicycle help people and the environment?<br><small>Talk for 1–2 minutes. You can also talk about problems with bicycles.</small>"
                }
              ]
            },
            {
              type: "toggle",
              title: "Possible answers",
              hint: "Open after you discuss",
              blocks: [
                {
                  type: "model",
                  title: "Possible answers",
                  rows: [
                    ["a","They’re all types of transport."],
                    ["b","The bicycle. (Some people choose the bus, because it is public transport.)"],
                    ["c","It’s not motorised."],
                    [
                      "d",
                      "It doesn’t create any harmful emissions, so people can reduce their footprint. People get some physical exercise and save money on petrol or public transport. (Talking about the negative points of bicycles is fine too — that is also critical thinking!)"
                    ]
                  ]
                }
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"<b>Reflect on your thinking.</b> Which questions were easier? Which were harder? Put them in order."},
            {
              type: "order",
              id: "c4-order",
              title: "From simple to most complex",
              ends: ["Telling knowledge (simple)","Using knowledge (most complex)"],
              items: [
                "a. What “group” do these items belong to? — you use your basic knowledge.",
                "b. Which item is different? — you use a little more logic.",
                "c. Why is a bicycle different? — you justify your answer.",
                "d. How does a bicycle help people and the environment? — you use different information to form an argument."
              ],
              why: "We move from <b>telling</b> knowledge to <b>using</b> knowledge. Question d needs the most critical thinking — but to answer it, you first need a–c."
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d5-ladder.svg",
              alt: "A staircase with four steps. Step 1 Simple: basic knowledge. Step 2 Less simple: a little logic. Step 3 More complex: justify your answer. Step 4 Most complex: build an argument. An arrow goes from Telling knowledge at the bottom to Using knowledge at the top.",
              caption: "From telling knowledge to using knowledge"
            },
            {
              type: "talk",
              title: "Discuss",
              prompts: ["Which questions did you find easier and more challenging? Why?","Which kind of question will you meet more at university?"]
            },
            {
              type: "language",
              title: "Explain how hard something was",
              groups: [
                {"label":"Easy","phrases":["Question a was <b>straightforward</b> because I only needed to…","I could answer it <b>from memory</b>."]},
                {
                  label: "Hard",
                  phrases: [
                    "Question d was <b>more challenging</b> because I had to <b>combine</b>…",
                    "<b>To answer</b> d, I <b>first needed to</b>…",
                    "I had to <b>weigh up</b> the pros and cons."
                  ]
                }
              ]
            },
            {
              type: "do",
              n: 3,
              who: "pair",
              text: "<b>Your turn.</b> Spin a new set. Ask your partner the four kinds of question — from simple to complex. Then swap."
            },
            {
              type: "spinner",
              id: "c4-spin",
              title: "Build a thinking ladder",
              text: "Ask the question type on your set. Your partner answers.",
              reels: [
                {
                  label: "Set",
                  items: [
                    "email – text message – video call – letter",
                    "laptop – phone – smart TV – game console",
                    "bus – train – plane – e-scooter",
                    "YouTube – Netflix – podcast – radio",
                    "paper book – e-book – audiobook – library"
                  ]
                },
                {
                  label: "Question",
                  items: ["a. What group do they belong to?","b. Which one is different?","c. Why is it different?","d. How does it help or harm people and the planet?"]
                }
              ],
              note: "Spin, ask, answer — then swap roles."
            }
          ]
        },
        {
          id: "c5",
          short: "Why it matters",
          minutes: 10,
          grouping: "Groups of 3",
          art: "dec10/assets/week2/d5-v-c5.svg",
          title: "Why is Critical Thinking Important?",
          goal: "Why do humans — and university students — need critical thinking?",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Discuss these questions for <b>1–2 minutes</b>. Think back to the past beliefs in the Warmer."},
            {
              type: "talk",
              title: "Discuss",
              prompts: [
                "Why do you think critical thinking is important for humanity?",
                "Why is it important for university students?",
                "Imagine a world where doctors didn’t wash their hands — or where people still believed they could melt on a fast train. What would it be like?"
              ]
            },
            {
              type: "key",
              title: "Why we need critical thinking",
              points: [
                "We need critical thinking to find solutions to problems, make better decisions, be innovative/creative and to make progress as a society.",
                "Questioning information that we are presented with and recognising the difference between credible and non-credible sources is particularly important in today’s digital age, where we receive so much information, but it’s not always accurate."
              ]
            },
            {
              type: "do",
              n: 2,
              who: "pair",
              text: "<b>Critical thinking online.</b> You see these posts about this week’s topic. What is the <b>best first question</b> a critical thinker asks? Bet on your answer. Use the reading by Griffiths (2020) to help you."
            },
            {"type":"sources","ids":["footprint"]},
            {
              type: "bet",
              id: "c5-bet",
              title: "Think before you share",
              proof: "Bet big only when you are sure.",
              items: [
                {
                  q: "A post says: “Sending one email with a photo makes 50g of CO2!”",
                  options: ["Who says this, and how old is the figure?","How many likes does the post have?","Is the photo in the email nice?","Can I share it now?"],
                  answer: "Who says this, and how old is the figure?",
                  why: "In Griffiths (2020), this figure comes from Mike Berners-Lee — and the text says “these figures are from a decade ago”. Always check who and when."
                },
                {
                  q: "A video says: “Watching online videos is the biggest cause of climate change.”",
                  options: ["What do the numbers really say?","Is the video funny?","Does the speaker look confident?","Did my friend share it?"],
                  answer: "What do the numbers really say?",
                  why: "Griffiths (2020) says online video is roughly 1% of global emissions. That is a lot — but it is not “the biggest cause”. The claim is exaggerated."
                },
                {
                  q: "A tech company says: “Our data centres are carbon-neutral.”",
                  options: ["Do they really use renewable energy, or do they buy carbon offsets?","Is the company famous?","Is their logo green?","Do they have many customers?"],
                  answer: "Do they really use renewable energy, or do they buy carbon offsets?",
                  why: "Paragraph C: many data centres run on renewable energy, but some companies buy “carbon offsets”, and people disagree about the real impact. Also ask: who benefits from this claim?"
                },
                {
                  q: "Your friend says: “Texting is greener than emailing.”",
                  options: ["Is this a fact with a source, or just an opinion?","Is my friend usually right?","Do I text more than I email?","Is this a popular idea?"],
                  answer: "Is this a fact with a source, or just an opinion?",
                  why: "Here there is a source: Griffiths (2020) says each SMS generates just 0.014g of CO2e. A fact with a source is stronger than an opinion."
                }
              ]
            },
            {
              type: "language",
              title: "Questions a critical thinker asks",
              groups: [
                {"label":"About the source","phrases":["<b>Who</b> says so?","<b>How old</b> is this information?","<b>Who benefits</b> from this claim?"]},
                {
                  label: "About the claim",
                  phrases: ["What is the <b>evidence</b>?","Is this a <b>fact</b> or an <b>opinion</b>?","What is <b>missing</b>?","Is this <b>exaggerated</b>?"]
                }
              ]
            },
            {"type":"tip","text":"Use these questions when you choose sources for your Research Summary and your Interactive Presentation."}
          ]
        },
        {
          id: "c6",
          short: "Graduate Qualities",
          minutes: 5,
          grouping: "Pair",
          art: "dec10/assets/week2/d5-v-c6.svg",
          title: "The University of Sydney’s List of Graduate Qualities",
          goal: "Critical thinking is on the University’s list of skills you will need for life and work.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "The University of Sydney lists the skills you will develop in your degree and need in your working life. Match each <b>quality</b> to its meaning in simple words."
            },
            {
              type: "match",
              id: "c6-m",
              title: "Graduate Qualities in plain English",
              left: [
                "Depth of disciplinary expertise",
                "Critical thinking and problem solving",
                "Oral and written communication",
                "Information and digital literacy",
                "Inventiveness",
                "Cultural competence",
                "Interdisciplinary effectiveness",
                "Integrated professional, ethical, and personal identity",
                "Influence"
              ],
              right: [
                "knowing your subject deeply and using it well",
                "questioning ideas and evidence before you decide",
                "speaking and writing clearly for your audience",
                "finding, checking and using information and digital tools",
                "coming up with new ideas and solutions",
                "working respectfully across cultures",
                "working well across different subjects and views",
                "knowing who you are as a person and a professional, ethically",
                "getting other people on board with an idea"
              ]
            },
            {
              type: "toggle",
              title: "The University’s full definitions",
              hint: "Read later if you like",
              blocks: [
                {
                  type: "model",
                  title: "Undergraduate Qualities",
                  rows: [
                    [
                      "Depth of disciplinary expertise",
                      "Deep disciplinary expertise is the ability to integrate and rigorously apply knowledge, understanding and skills of a recognised discipline defined by scholarly activity, as well as familiarity with evolving practice of the discipline."
                    ],
                    [
                      "Critical thinking and problem solving",
                      "Critical thinking and problem solving are the questioning of ideas, evidence and assumptions in order to propose and evaluate hypotheses or alternative arguments before formulating a conclusion or a solution to an identified problem."
                    ],
                    [
                      "Oral and written communication",
                      "Effective communication, in both oral and written form, is the clear exchange of meaning in a manner that is appropriate to audience and context."
                    ],
                    [
                      "Information and digital literacy",
                      "Information and digital literacy is the ability to locate, interpret, evaluate, manage, adapt, integrate, create and convey information using appropriate resources, tools and strategies."
                    ],
                    ["Inventiveness","Generating novel ideas and solutions."],
                    [
                      "Cultural competence",
                      "Cultural Competence is the ability to actively, ethically, respectfully, and successfully engage across and between cultures. In the Australian context, this includes and celebrates Aboriginal and Torres Strait Islander cultures, knowledge systems, and a mature understanding of contemporary issues."
                    ],
                    [
                      "Interdisciplinary effectiveness",
                      "Interdisciplinary effectiveness is the integration and synthesis of multiple viewpoints and practices, working effectively across disciplinary boundaries."
                    ],
                    [
                      "Integrated professional, ethical, and personal identity",
                      "An integrated professional, ethical and personal identity is understanding the interaction between one’s personal and professional selves in an ethical context."
                    ],
                    ["Influence","Engaging others in a process, idea or vision."],
                    [
                      "PhD: Critical thinking and problem-solving",
                      "To display high-level capabilities in critical thinking and problem-solving and a commitment to lifelong learning and discovery."
                    ]
                  ],
                  note: "Source: https://www.sydney.edu.au/students/graduate-qualities.html · PhD qualities: https://www.sydney.edu.au/students/graduate-qualities/phd-qualities.html"
                }
              ]
            },
            {
              type: "talk",
              title: "Quick talk",
              prompts: [
                "Which <b>two</b> qualities are most important for your future degree? Why?",
                "Notice: critical thinking is on the list for undergraduates <b>and</b> PhD students. What does that tell you?"
              ]
            }
          ]
        },
        {
          id: "c7",
          short: "Discussion",
          minutes: 8,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week2/d5-v-c7.svg",
          title: "Discussion",
          goal: "Four critical thinking skills you will practise every day in DEC10.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"In DEC10 you will practise critical thinking every day. Tap the four skills to see what each one means."},
            {
              type: "hotspot",
              src: "dec10/assets/week2/d5-criticality.svg",
              alt: "Criticality: engagement with sources. Four tiles: identifying positions and perspectives in sources; selecting relevant ideas or information; evaluating ideas from sources and connecting them to their own voice; showing flexibility.",
              title: "Criticality: engagement with sources",
              hint: "Tap each tile.",
              spots: [
                {
                  x: 27,
                  y: 38,
                  label: "1",
                  title: "Identifying positions and perspectives in sources",
                  text: "Who is speaking, and what do they think? For example: the UN podcast guest believes big digital companies must take special responsibility.",
                  color: "#1f6b3a"
                },
                {
                  x: 73,
                  y: 38,
                  label: "2",
                  title: "Selecting relevant ideas or information",
                  text: "Choose only the ideas that answer your question — and leave the rest out.",
                  color: "#2b8a5c"
                },
                {
                  x: 27,
                  y: 76,
                  label: "3",
                  title: "Evaluating ideas and connecting them to your own voice",
                  text: "Is this idea strong? Do you agree? Say what <b>you</b> think about the source.",
                  color: "#1f9c8c"
                },
                {"x":73,"y":76,"label":"4","title":"Showing flexibility","text":"Be ready to change your mind when you meet better evidence.","color":"#1f8cc4"}
              ]
            },
            {"type":"do","n":2,"who":"group","text":"Which skill is each student using? Sort the cards."},
            {
              type: "sort",
              id: "c7-sort",
              title: "Which critical thinking skill?",
              buckets: [
                {"label":"Identifying positions","letter":"1"},
                {"label":"Selecting relevant ideas","letter":"2"},
                {"label":"Evaluating + own voice","letter":"3"},
                {"label":"Showing flexibility","letter":"4"}
              ],
              items: [
                {"text":"Lin notices that the UN guest wants governments to <b>require</b> companies to change.","answer":0},
                {"text":"Omar notices that the BBC article is written for the public, but the UN report is written for policymakers.","answer":0},
                {"text":"For a talk about gaming, Sara keeps the US gaming facts and leaves out the email facts.","answer":1},
                {"text":"Ken uses only the data-centre figures on his AI slide.","answer":1},
                {"text":"Mia says: “Griffiths (2020) shows that streaming is costly; however, I think replacing phones is the bigger problem.”","answer":2},
                {"text":"Ali compares 3.7% (Griffiths) with 1.5–3.2% (the UN podcast) and explains which figure he trusts more.","answer":2},
                {"text":"A classmate shows new data, so Jun changes his opinion.","answer":3},
                {"text":"Rosa says: “I used to think emails were harmless, but now I see that billions of them add up.”","answer":3}
              ]
            },
            {"type":"do","n":3,"who":"group","text":"Discuss the questions. Use the language bank."},
            {
              type: "talk",
              title: "Discuss",
              prompts: [
                "How do you think you will use these skills through the DEC10 course?",
                "How will you use these skills in life?",
                "Are you confident with critical thinking?",
                "Why do some people avoid critical thinking?"
              ]
            },
            {
              type: "toggle",
              title: "Possible answers",
              blocks: [
                {
                  type: "model",
                  title: "Possible answers",
                  rows: [
                    ["In DEC10","In writing tasks and in class discussions."],
                    ["In life","In future university tasks and assessments, at work, making life decisions and in personal relationships."],
                    ["Confident?","Your own answer."],
                    ["Why avoid it?","People may not want to go against authority or popular belief. Critical thinking is more challenging."]
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Talk about your thinking",
              groups: [
                {"label":"Confidence","phrases":["I’m <b>fairly confident</b> when it comes to…","I <b>find it hard to</b>… because…"]},
                {"label":"Change of mind","phrases":["I <b>changed my mind</b> when…","I <b>used to think</b>…, <b>but now</b>…"]},
                {"label":"Reasons","phrases":["Some people avoid it <b>because</b>…","It can feel <b>risky</b> to disagree with…"]}
              ]
            },
            {"type":"scale","id":"c7-scale","title":"Be honest","statement":"I am confident with critical thinking.","ends":["Not yet","Very confident"]},
            {
              type: "fields",
              fields: [{"id":"c7-goal","label":"One critical thinking habit I will try next week","placeholder":"Before I use a source, I will ask…","rows":2}]
            }
          ]
        }
      ]
    },
    {
      id: "action",
      number: "03",
      code: "21A",
      minutes: 30,
      tone: "teal",
      art: "dec10/assets/week2/s-action.svg",
      title: "AST: Feedback literacy - action plan (1)",
      subtitle: "From feedback to action",
      outcome: "You can reflect on the feedback on your Week 2 presentation and describe the actions you will take to improve your speaking and presentation skills.",
      activities: [
        {
          id: "a1",
          short: "The loop",
          minutes: 5,
          grouping: "Class",
          art: "dec10/assets/week2/d5-v-a1.svg",
          title: "Closing the feedback loop",
          goal: "Feedback only helps when you act on it.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d5-loop.svg",
              alt: "A circle with five steps: get feedback from teachers and peers, reflect on it, turn it into specific actions, use the actions in your next presentation, get feedback again.",
              caption: "The feedback loop"
            },
            {
              type: "key",
              title: "Action Plan (1) — what and why",
              points: [
                "This is the <b>first of three</b> Action Plans for your presentations.",
                "In the Speaking Cycles (Weeks 2, 3 and 6, 7) you give <b>four group presentations</b>: three Research Summary Presentations and one Seminar Presentation.",
                "Everyone uses the <b>same Feedback Tool</b>, so you can see your progress.",
                "Remember Week 1: feedback is a gift <b>only when you use it</b>."
              ]
            },
            {
              type: "order",
              id: "a1-order",
              title: "Put the feedback loop in order",
              items: [
                "Get feedback from teachers and peers.",
                "Reflect on the feedback.",
                "Turn the feedback into specific actions.",
                "Use the actions in your next presentation.",
                "Get feedback again — and close the loop."
              ]
            },
            {
              type: "talk",
              title: "Quick talk",
              prompts: ["Which step do most students skip? Why?","What happened the last time you got feedback — did you act on it?"]
            }
          ]
        },
        {
          id: "a2",
          short: "Get ready",
          minutes: 3,
          grouping: "Alone",
          art: "dec10/assets/week2/d5-v-a2.svg",
          title: "Instructions · Steps 1–2",
          goal: "Open your folder and get the template.",
          blocks: [
            {
              type: "checklist",
              id: "a2-check",
              title: "Before you start",
              meter: ["done","Ready!"],
              items: [
                "I opened my folder: Research & Seminar Presentations – Feedback & Action Plans.",
                "I downloaded the Action Plan (1) template.",
                "I saved the template in the folder.",
                "I found the Peer and Teacher Feedback Tool forms I received for my Week 2 presentation."
              ]
            },
            {"type":"tip","text":"Keep everything in one folder. In Week 3 and Week 6 you will compare your new feedback with this plan."}
          ]
        },
        {
          id: "a3",
          short: "Needs work",
          minutes: 8,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/d5-v-a3.svg",
          title: "Instructions · Steps 3–5: What needs work?",
          goal: "Find the aspects that got the most “Needs work”.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Look at the feedback you received on your Week 2 presentation. Copy the ratings here. Which aspects got the most <b>Needs work</b>?"
            },
            { type: 'download', id: 'feedback-tool', note: "Use the forms your classmates and your teacher filled in for <b>your</b> presentation. A spare form is here if you need one." },
            {
              type: "form",
              id: "a3-form",
              title: "My Week 2 feedback at a glance",
              intro: "Copy what your teacher and classmates said. Add their words in the comment box.",
              scale: ["Yes","Mostly","Needs work","N/A"],
              cols: ["What the feedback said"],
              sections: [
                {
                  label: "Content delivery",
                  items: [
                    "The problem was clearly stated.",
                    "The cause/s were clearly stated.",
                    "Evidence for the cause/s was given.",
                    "The effect/s were clearly stated.",
                    "Evidence for the effect/s was given.",
                    "A solution was clearly stated.",
                    "Solution was evaluated."
                  ]
                },
                {
                  label: "Flow, visuals and the audience",
                  items: [
                    "We could follow the presentation easily: the ideas were clearly and logically connected.",
                    "Each group member’s turn flowed naturally and logically from the previous member.",
                    "Each group member’s contribution was equal in time and content.",
                    "Visuals were consistent for each group member and across all group members.",
                    "Body language and eye contact engaged the audience.",
                    "Visuals were clear and helped the audience understand the main ideas.",
                    "The presenters engaged the audience."
                  ]
                },
                {
                  label: "Fluency & pronunciation",
                  items: [
                    "Pronunciation was clear and could be easily understood.",
                    "We could hear the presenters using chunking, pausing and stress in their language.",
                    "We could hear the presenters using intonation in their speaking (speaking was not ‘flat’)."
                  ]
                },
                {
                  label: "Language use",
                  items: [
                    "The grammar used was largely accurate and we could understand the meaning.",
                    "The vocabulary used was largely accurate and we could understand the meaning.",
                    "We could hear functional language (EG evaluating; explaining cause/effect; explaining problem)."
                  ]
                },
                {"label":"Question & answer","items":["Answers were given spontaneously.","Answers were relevant.","Answers were clear."]}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d5-needswork.svg",
              alt: "The Content Delivery part of the feedback tool. Two rows are marked in the Needs work column: Evidence for the cause/s was given, and Evidence for the effect/s was given.",
              caption: "Example: this student marked “Evidence for the cause/s” and “Evidence for the effect/s” as Needs work.",
              size: "wide"
            },
            {
              type: "fields",
              fields: [
                {"id":"a3-top","label":"The aspects with the most “Needs work”","placeholder":"Evidence for the effects; intonation…","rows":2},
                {
                  id: "a3-plan",
                  label: "What did people write in “Action plan for further improvement”?",
                  placeholder: "My teacher suggested… My classmates said…",
                  rows: 3
                }
              ]
            },
            {
              type: "tip",
              text: "<b>Student’s book, AST p. 102 — “Language for giving peer feedback on presentations”.</b> Open it when you read the feedback you got. It helps you understand what your classmates meant (for example “To make it clearer that…, you could…”)."
            },
            {"type":"do","n":2,"who":"pair","text":"Tell your partner about <b>one strength</b> and <b>one aspect that needs work</b>. Use the language bank."},
            {
              type: "language",
              title: "Talk about your feedback",
              groups: [
                {"label":"Strengths","phrases":["<b>One thing I did well</b> was…","My classmates <b>liked</b> the way I…"]},
                {
                  label: "Needs work",
                  phrases: ["<b>Most of my feedback said</b>…","I got <b>Needs work</b> on…","I was <b>surprised</b> that…","I <b>agree</b> with this feedback because…"]
                }
              ]
            }
          ]
        },
        {
          id: "a4",
          short: "Make it specific",
          minutes: 6,
          grouping: "Pair",
          art: "dec10/assets/week2/d5-v-a4.svg",
          title: "From feedback to action",
          goal: "A good action says exactly what you will do.",
          blocks: [
            {
              type: "key",
              title: "A good action is specific",
              points: ["<b>What</b> exactly will you do?","<b>How</b> will you do it?","<b>When</b> will you do it — before the next presentation?"]
            },
            {
              type: "pairs",
              items: [
                {
                  tag: "Providing evidence",
                  from: "Give more evidence.",
                  to: "[[Write down any sources I get my information from, add the source to the ppt and practise referring to the source.]]",
                  note: "The example from the Action Plan (1) template."
                },
                {
                  tag: "Pronunciation",
                  from: "Speak more clearly.",
                  to: "[[Record my part on my phone twice, listen for fast or flat parts, and mark my pauses with / in my notes.]]"
                },
                {
                  tag: "Body language",
                  from: "Better eye contact.",
                  to: "[[Learn my first and last sentences by heart and look at three different people while I say them.]]"
                },
                {
                  tag: "Functional language",
                  from: "Use more functional language.",
                  to: "[[Put three cause-and-effect phrases (due to, as a result, leads to) on a card and use each one at least once.]]"
                }
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Vague or specific? Sort the actions."},
            {
              type: "sort",
              id: "a4-sort",
              title: "Vague or specific?",
              buckets: [{"label":"Too vague","letter":"✗"},{"label":"Specific action","letter":"✓"}],
              items: [
                {"text":"Practise more.","answer":0},
                {"text":"Be more confident.","answer":0},
                {"text":"Improve my slides.","answer":0},
                {"text":"Work on my grammar.","answer":0},
                {"text":"Time my part with a stopwatch on Monday and cut it to 2 minutes.","answer":1},
                {"text":"Put one number and its source on every slide.","answer":1},
                {"text":"Ask a groupmate to ask me two probing questions before class.","answer":1},
                {"text":"Check every verb in my script for subject–verb agreement on Sunday.","answer":1}
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"Make these vague actions specific. Say your ideas aloud, then compare."},
            {
              type: "talk",
              title: "Fix it together",
              prompts: ["“Practise more.” → I will…","“Be more confident.” → Before the presentation, I am going to…","“Improve my slides.” → On each slide, I will…"]
            }
          ]
        },
        {
          id: "a5",
          short: "My plan",
          minutes: 8,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/d5-v-a5.svg",
          title: "Instructions · Step 6: Write your action plan",
          goal: "Use the feedback and your reflections to write your plan.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Use all the feedback in <b>Needs work</b> and <b>Action plan for further improvement</b>, and your own reflections. Write your action plan. Then copy it into your Action Plan (1) template."
            },
            {
              type: "model",
              title: "Example from the template",
              rows: [
                ["Aspect","EG providing evidence"],
                [
                  "Specific action/s I will take to improve",
                  "EG write down any sources I get my information from, add the source to the ppt and practise referring to the source"
                ]
              ]
            },
            {"type":"table","id":"a5-plan","title":"Action plan for further improvement","columns":["Aspect","Specific action/s I will take to improve"],"rows":4},
            {
              type: "language",
              title: "Action plan frames",
              groups: [
                {
                  label: "Actions",
                  phrases: ["<b>I will</b> + verb… (I will record…)","<b>Before my next presentation, I am going to</b>…","<b>To improve my</b> intonation, <b>I will</b>…"]
                },
                {"label":"Check","phrases":["<b>I will know it worked if</b>…","<b>By</b> Monday / Week 3, I will have…"]}
              ]
            },
            {
              type: "do",
              n: 2,
              who: "pair",
              text: "Read your plan to a partner. Your partner asks: <b>“How exactly?”</b> and <b>“When?”</b> Make your plan more specific if needed."
            },
            {
              type: "checklist",
              id: "a5-check",
              title: "Is my plan ready?",
              meter: ["ticked","Plan ready — save it!"],
              items: [
                "Each action starts with a verb (record, write, practise…).",
                "Each action says how and when.",
                "My actions match the aspects that got the most “Needs work”.",
                "I saved my Action Plan (1) in my folder."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ipcheck",
      number: "04",
      code: "22A",
      minutes: 30,
      tone: "plum",
      art: "dec10/assets/week2/s-ipcheck.svg",
      title: "Interactive Presentation task: check in",
      subtitle: "Where is your group now?",
      outcome: "You engaged in criticality and research skills, monitored your progress towards the Interactive Presentation Assessment, and managed working with your group.",
      activities: [
        {
          id: "i1",
          short: "The task",
          minutes: 6,
          grouping: "Pair",
          art: "dec10/assets/week2/d5-v-i1.svg",
          title: "Description",
          goal: "Remind yourself what the Interactive Presentation is.",
          blocks: [
            {
              type: "key",
              title: "The Interactive Presentation Task",
              points: [
                "It assesses your ability to work collaboratively to research, plan and present research findings in an academic context, and to further discuss your research.",
                "You work with your <b>Seminar group</b> to research, plan and present your findings on your allocated topic.",
                "You help each other — <b>but</b> you give an <b>INDIVIDUAL</b> presentation, <b>NOT a group</b> presentation.",
                "After your presentation, you answer <b>4–6 individual questions</b> about your content and about how you applied your academic skills."
              ]
            },
            {
              type: "cards",
              items: [
                {"label":"Together","text":"Research and plan with your Seminar group.","icon":"users"},
                {"label":"Alone","text":"Give your own individual presentation.","icon":"chat"},
                {"label":"Questions","text":"Answer 4–6 questions: clarification, probing and Academic Success Toolkit.","icon":"search"}
              ]
            },
            {
              type: "quiz",
              id: "i1-q",
              title: "True or false?",
              shared: ["True","False"],
              items: [
                {"q":"You give one presentation together as a group.","answer":"False","why":"You prepare together, but you give an INDIVIDUAL presentation."},
                {"q":"Your group helps each other with research and planning.","answer":"True","why":"Collaboration is part of what is assessed."},
                {
                  q: "You will answer questions about how you used your academic skills.",
                  answer: "True",
                  why: "Set 2 of the questions is about the Academic Success Toolkit."
                },
                {"q":"After the presentation, you answer one question.","answer":"False","why":"You answer 4–6 individual questions."}
              ]
            }
          ]
        },
        {
          id: "i2",
          short: "Timeline",
          minutes: 6,
          grouping: "Class",
          art: "dec10/assets/week2/d5-v-i2.svg",
          title: "Timeline: check-in",
          goal: "Where are we on the road to Week 7?",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week2/d5-timeline.svg",
              alt: "A winding road from Week 1 to Week 7 with a flag at Week 7 Days 4 and 5. A pin says You are here at Week 2.",
              title: "The road to the Interactive Presentation",
              hint: "Tap each week.",
              size: "wide",
              spots: [
                {
                  x: 8,
                  y: 66,
                  label: "1",
                  title: "Week 1",
                  text: "Set up the task. Groups and topics are allocated. Each group member chooses a <b>different strategy</b> to do research on.",
                  color: "#7a4a8c"
                },
                {
                  x: 22,
                  y: 40,
                  label: "2",
                  title: "Week 2 · You are here",
                  text: "All group members collaborate to: do required research; plan and prepare your presentations.",
                  color: "#b0512a"
                },
                {"x":37,"y":62,"label":"3","title":"Week 3","text":"Keep collaborating: research, plan and prepare.","color":"#3a58a0"},
                {"x":51,"y":38,"label":"4","title":"Week 4","text":"Keep collaborating: research, plan and prepare.","color":"#3a58a0"},
                {"x":64,"y":62,"label":"5","title":"Week 5","text":"Keep collaborating: research, plan and prepare.","color":"#3a58a0"},
                {"x":77,"y":40,"label":"6","title":"Week 6","text":"Keep collaborating: research, plan and prepare.","color":"#3a58a0"},
                {
                  x: 90,
                  y: 58,
                  label: "7",
                  title: "Week 7",
                  text: "Practise your presentations. <b>Week 7 Day 4 & Day 5: Interactive Presentation assessment.</b>",
                  color: "#2b776e"
                }
              ]
            },
            {
              type: "quiz",
              id: "i2-q",
              items: [
                {
                  q: "When is the Interactive Presentation assessment?",
                  options: ["Week 7 Day 4 & Day 5","Week 2 Day 5","Week 4","Week 10"],
                  answer: "Week 7 Day 4 & Day 5",
                  why: "Week 7 is for practising — and the assessment is on Days 4 and 5."
                },
                {
                  q: "What should your group do in Weeks 2–6?",
                  options: ["Collaborate to research, plan and prepare","Wait for the teacher","Only practise speaking","Write an essay"],
                  answer: "Collaborate to research, plan and prepare",
                  why: "Weeks 2–6 are for research and preparation together."
                }
              ]
            }
          ]
        },
        {
          id: "i3",
          short: "Check in",
          minutes: 14,
          grouping: "Seminar group",
          art: "dec10/assets/week2/d5-v-i3.svg",
          title: "Group check-in",
          goal: "Report your progress, solve problems, and ask your teacher.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Rate your progress honestly."},
            {
              type: "grid",
              id: "i3-grid",
              title: "My research so far",
              rows: [
                "I know my group’s topic and my research strategy.",
                "I have found at least two useful sources.",
                "I have checked my sources (who, when, evidence).",
                "I have notes from my sources.",
                "I know the main idea of my presentation.",
                "Our group shares information regularly."
              ],
              columns: ["Me"],
              options: ["Done","Started","Not yet"]
            },
            {
              type: "do",
              n: 2,
              who: "group",
              text: "Each person speaks for <b>one minute</b>: what you have done, what you are stuck on, and your next step. The group gives one idea to help."
            },
            {
              type: "language",
              title: "Give a progress update",
              groups: [
                {"label":"Done","phrases":["<b>So far, I have</b> found…","<b>I’ve managed to</b>…"]},
                {"label":"In progress","phrases":["<b>I’m still working on</b>…","<b>I’m stuck on</b>… — any ideas?"]},
                {"label":"Next","phrases":["<b>By next week, I will</b>…","<b>Could you help me with</b>…?","<b>Why don’t you</b> try…?"]}
              ]
            },
            {
              type: "tip",
              text: "<b>Useful language for your presentation:</b> Student’s book, Language Reference <b>p. 112</b> (cause and effect) and <b>p. 113</b> (compare and contrast)."
            },
            {
              type: "spinner",
              id: "i3-spin",
              title: "Group problem-solver",
              text: "Spin a problem. Your group has one minute to suggest a solution.",
              reels: [
                {
                  label: "Problem",
                  items: [
                    "I can’t find an academic source.",
                    "Two sources give different numbers.",
                    "One member never replies in the group chat.",
                    "My topic is too big.",
                    "I don’t have time this week.",
                    "I found too much information."
                  ]
                }
              ],
              note: "Use: “Why don’t you…?” · “Have you tried…?” · “Maybe we could…”"
            },
            {
              type: "fields",
              fields: [
                {"id":"i3-next","label":"My next step (and when)","placeholder":"By Wednesday, I will…","rows":2},
                {"id":"i3-ask","label":"My question for the teacher","placeholder":"Could you help me with…?","rows":2}
              ]
            }
          ]
        },
        {
          id: "i4",
          short: "After class",
          minutes: 4,
          grouping: "Alone",
          art: "dec10/assets/week2/d5-v-i4.svg",
          title: "After class",
          goal: "Keep going this weekend.",
          blocks: [
            {
              type: "sticky",
              title: "After class",
              text: "Continue preparing for the seminar. Remember also to continue your research for your group’s seminar topic and final Interactive Presentation Assessment."
            },
            {
              type: "checklist",
              id: "i4-check",
              title: "This weekend",
              items: ["Continue preparing for the seminar.","Continue my research for my group’s seminar topic.","Send my group one new source or idea."]
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    [
      "digital carbon footprint",
      "the CO₂ emissions from the digital devices a person or organisation uses",
      "Streaming video every night makes my digital carbon footprint bigger."
    ],
    [
      "data centre",
      "a building full of machines (servers) that store data and run the internet",
      "Data centres need huge amounts of electricity for cooling."
    ],
    [
      "carbon offset",
      "something that makes up for emissions produced somewhere else, e.g. planting trees",
      "Some companies buy carbon offsets to mitigate their energy use."
    ],
    ["claim","a key point that supports an argument","The claim is that the figures are disputed."],
    ["assumption","something an author believes is true without giving proof","The author assumes renewable energy reduces the footprint."],
    ["allocate","to give a task or a share to someone","Let’s allocate the tasks by Friday."],
    ["clarification question","a question that asks what exactly a speaker means or claims","What do you mean by “people”?"],
    ["probing question","a question that asks a speaker to explain more or go deeper","Why do you think that figure is important for your point?"],
    ["spontaneous","said naturally, without a script or preparation","Her answers were spontaneous and clear."],
    ["criteria","the standards used to judge a piece of work (singular: criterion)","The feedback tool has four criteria."],
    ["feedback tool","a form that helps you give feedback on the criteria","Complete the feedback tool during the talk."],
    ["action point","one clear thing to do next time","Our action point: practise the handovers."],
    ["chunking","saying words in short meaning groups, with small pauses","Every year, / global production of digital tech / emits …"],
    ["eye contact","looking at the people you are talking to","Look up every sentence or two and make eye contact."],
    ["engaging","interesting; it keeps the audience listening","A personal story makes a talk more engaging."],
    ["intonation","your voice going up and down to add meaning","Flat intonation sounds boring."]
  ]
};
