/* DEC10 · Week 2 · Day 4 — Plan, ask, present.
   Built from the Week 2 Teacher's Book, ordered by the teacher weekly map (version 16.10.2026): each Day page holds the parts
   TAUGHT that weekday. Taught on THURSDAY: 18A AST: Self-regulation and monitoring Homework follow-up · 15A Presentation skills · 11A Asking effective individual questions · 20A Pronunciation for presentations · 13A Group research summary presentation groups 1 & 2 · 9A Listening Assessment Preparation Homework.
   Protected texts are in sources.js and are never changed here. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w2d4",
  week: 2,
  day: 4,
  title: "Plan, ask, present",
  duration: "About 4 hours + homework",
  question: "What makes an audience really listen to you — and what questions make a speaker think?",
  questionKind: "Big question",
  questionLabel: "Today’s big question",
  journey: "Plan any task in six steps, watch a student go from a weak talk to a strong one, learn the two questions you will be asked in the Interactive Presentation (clarification and probing), practise chunking, stress and intonation — then Groups 1 and 2 give their Research Summary presentations and everyone gives real feedback.",
  image: "dec10/assets/week2/hero-d10w2d4.svg",
  imageAlt: "Illustration: a student presents on a stage with a slide about the digital carbon footprint. The audience holds up feedback cards and question bubbles, and a six-step path curves up to a flag.",
  finish: {"title":"Day 5","text":"Groups 3, 4 and 5 present, critical thinking and your feedback action plan"},
  goalShort: "your presentations, your Seminar and your Interactive Presentation",
  sections: [
    {
      id: "selfreg2",
      number: "01",
      code: "18A",
      minutes: 30,
      tone: "green",
      art: "dec10/assets/week2/s-selfreg2.svg",
      title: "AST: Self-regulation and monitoring Homework follow-up",
      subtitle: "Six steps to plan, do and check any task",
      outcome: "You can use Steps 1–3 to analyse a task, and you understand and practise Steps 4–6.",
      activities: [
        {
          id: "s1",
          short: "Revision",
          minutes: 7,
          grouping: "Groups",
          art: "dec10/assets/week2/v/v-d10w2d4-s1.svg",
          title: "Revision: Activity 1 Group discussion",
          goal: "Remember the homework: the first three steps.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Spin. Answer the question that comes up. Everyone speaks once before you spin again."},
            {
              type: "spinner",
              id: "s1-spin",
              title: "Group discussion",
              reels: [
                {
                  label: "Question",
                  items: [
                    "Why is self-regulation and monitoring important for success in university studies?",
                    "What strategies or steps can help you develop self-regulation skills?",
                    "What were the three steps you practiced in the homework module last week?",
                    "Which of the three steps did you find most helpful? Why?",
                    "Which step did you find most challenging? What made it difficult?",
                    "What useful tool or technique do you remember that can help you improve these skills?"
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Useful language",
              tabs: false,
              groups: [
                {
                  label: "Self-regulation words",
                  phrases: [
                    "to <b>break</b> a task <b>down</b> into steps",
                    "to set <b>SMART goals</b>",
                    "to <b>keep track of</b> my progress",
                    "to <b>stay on track</b>",
                    "to <b>meet a deadline</b>"
                  ]
                },
                {
                  label: "Say it",
                  phrases: ["<b>The step I found most helpful was</b> … because …","<b>What I struggled with was</b> …","<b>A technique that works for me is</b> …"]
                }
              ]
            },
            {
              type: "flip",
              title: "Steps 1–3: test your memory",
              items: [
                {
                  front: "Step 1",
                  tag: "analyse",
                  back: "<b>Analyse the Task Requirements.</b> Read the instructions carefully: key words, format, word count / time limit, deadlines."
                },
                {
                  front: "Step 2",
                  tag: "plan",
                  back: "<b>Set Goals and Plan the Work.</b> Break the task into manageable steps and set SMART goals. Give each step a deadline."
                },
                {
                  front: "Step 3",
                  tag: "research",
                  back: "<b>Research and Gather Information.</b> Use reliable sources. Keep a record of your sources for accurate citations."
                }
              ]
            }
          ]
        },
        {
          id: "s2",
          short: "Apply 1–3",
          minutes: 8,
          grouping: "Groups",
          art: "dec10/assets/week2/v/v-d10w2d4-s2.svg",
          title: "Activity 2: Apply the three steps",
          goal: "Use Steps 1–3 on a real task.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Choose <b>one</b> task. (Use the others if you have time.)"},
            {
              type: "cards",
              pick: "s2-pick",
              title: "Choose one",
              items: [
                {
                  label: "Option 1 · essay",
                  text: "Write an 800–1000-word essay on the topic: ‘To what extent can the adoption of sustainable supply chain practices reduce environmental impact and improve economic performance in the fashion industry?’"
                },
                {
                  label: "Option 2 · group presentation",
                  text: "You and your group members will present on this topic: ‘To what extent can the transition to renewable energy sources reduce carbon emissions and improve energy security in urban areas? What role should governments and private companies play in accelerating this transition?’"
                },
                {
                  label: "Option 3 · video presentation",
                  text: "You are going to complete a video presentation on this topic: ‘How can sustainable farming practices help address food security challenges, and what innovative solutions can governments and agricultural businesses implement to ensure long-term sustainability?’"
                }
              ]
            },
            {
              type: "do",
              n: 2,
              who: "group",
              text: "Discuss: <b>What would you do first if you received this task</b>, based on the 3 steps? Fill in the table together."
            },
            {
              type: "table",
              id: "s2-t",
              title: "Our plan",
              columns: ["Step","What we would do"],
              fixed: [
                "1 · Analyse the task<br>key words, format, length, deadline",
                "2 · Goals and plan<br>smaller steps + SMART goals + dates",
                "3 · Research<br>which sources? how will we record them?"
              ]
            },
            {
              type: "toggle",
              title: "Example for Option 1",
              hint: "Open after you try",
              blocks: [
                {
                  type: "model",
                  title: "Option 1 · Steps 1–3",
                  rows: [
                    [
                      "Step 1",
                      "Key words: “to what extent” (= how much — I need a clear position), “sustainable supply chain practices”, “environmental impact” AND “economic performance” (two parts!), “fashion industry”. Format: essay, 800–1000 words."
                    ],
                    [
                      "Step 2",
                      "Week 1: research (2 hours). Week 2: outline by Monday, first draft by Thursday. Week 3: revise and proofread. SMART goal: “Find four academic sources on fashion supply chains by Friday.”"
                    ],
                    [
                      "Step 3",
                      "Library database + Google Scholar. Search: “sustainable supply chain” AND fashion. Keep a list of references (author, year, title, link) from the start."
                    ]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "s3",
          short: "Steps 4–6",
          minutes: 5,
          grouping: "Pair",
          art: "dec10/assets/week2/v/v-d10w2d4-s3.svg",
          title: "Steps 4-6",
          goal: "Learn the last three steps.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d4-six-steps.svg",
              size: "wide",
              alt: "Six steps on a path up a hill. 1 Analyse the task requirements. 2 Set goals and plan the work. 3 Research and gather information. 4 Create an outline and draft. 5 Revise and improve. 6 Reflect and evaluate. An arrow loops from step 6 back to step 1 for the next task.",
              caption: "Six steps for every task. Step 6 feeds your next task."
            },
            {
              type: "match",
              id: "s3-m",
              title: "Match the step to what you do",
              left: ["Step 4 · Create an Outline and Draft","Step 5 · Revise and Improve","Step 6 · Reflect and Evaluate"],
              right: [
                "Organise your ideas into a clear structure and write a first draft. Don’t worry about perfection yet.",
                "Check your draft for clarity, coherence and structure. Ask peers for feedback or use editing tools.",
                "Compare your work with your goals and the task. Keep a log of your mistakes and how to avoid them."
              ]
            },
            {
              type: "order",
              id: "s3-order",
              title: "All six steps — put them in order",
              items: [
                "Analyse the Task Requirements",
                "Set Goals and Plan the Work",
                "Research and Gather Information",
                "Create an Outline and Draft",
                "Revise and Improve",
                "Reflect and Evaluate"
              ]
            },
            {
              type: "sticky",
              color: "green",
              title: "Step 6 tool",
              text: "<p>A <b>mistake log</b>: a list of the mistakes you make again and again — and your strategy to avoid each one. Start yours today.</p>"
            }
          ]
        },
        {
          id: "s4",
          short: "Speed talk",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week2/v/v-d10w2d4-s4.svg",
          title: "Speed Presentation",
          goal: "Use Steps 4 and 5: outline, give and improve a 1-minute talk.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"<b>Step 1 · Make an outline.</b> Spin to get your prompt. Brainstorm ideas together."},
            {
              type: "spinner",
              id: "s4-spin",
              title: "Your speaking prompt",
              reels: [
                {
                  label: "Prompt",
                  items: [
                    "Why is it important to use less plastic?",
                    "How can businesses help protect the environment?",
                    "Why should we use more renewable energy, like solar or wind power?",
                    "What small changes can people make to live more sustainably?",
                    "Why should we try to eat less meat or choose local food?"
                  ]
                }
              ]
            },
            {
              type: "table",
              id: "s4-t",
              title: "Our 1-minute outline",
              columns: ["Part","Our notes (keywords only)"],
              fixed: [
                "Introduction<br>a brief introduction to the topic",
                "Main Point 1<br>your first key idea",
                "Main Point 2<br>your second key idea",
                "Conclusion<br>a clear closing statement"
              ]
            },
            {
              type: "language",
              title: "Signposts for a 1-minute talk",
              tabs: false,
              groups: [
                {"label":"Start","phrases":["<b>Today I’d like to talk about</b> why …","<b>Have you ever thought about</b> …?"]},
                {"label":"Middle","phrases":["<b>The first reason is that</b> …","<b>Another important point is</b> …","<b>For example</b>, …"]},
                {"label":"End","phrases":["<b>To sum up</b>, …","<b>So next time you</b> … , <b>remember</b> …"]}
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"<b>Step 2 · Practise your talk</b> alone, quietly. Organise your ideas clearly. Deliver it smoothly."},
            {
              type: "do",
              n: 3,
              who: "pair",
              text: "<b>Activity 2 · Revise and improve.</b> Give your 1-minute talk to your partner. Your partner listens and gives short feedback."
            },
            {
              type: "grid",
              id: "s4-g",
              title: "Feedback for my partner",
              rows: ["1. Was the talk clear?","2. Did it follow a logical structure?","3. Were key points emphasised?"],
              columns: ["My partner’s talk"],
              options: ["Yes","Mostly","Not yet"]
            },
            {"type":"do","n":4,"who":"pair","text":"Revise your talk using the feedback. Rehearse it again for <b>2 minutes</b> with the improvements."},
            {"type":"fields","fields":[{"id":"s4-change","label":"One thing I changed after feedback","rows":2,"placeholder":"My partner said … so I …"}]}
          ]
        },
        {
          id: "s5",
          short: "Reflection",
          minutes: 3,
          grouping: "Groups",
          art: "dec10/assets/week2/v/v-d10w2d4-s5.svg",
          title: "Reflection",
          goal: "Decide how you will plan your next task.",
          blocks: [
            {
              type: "talk",
              title: "Discuss in groups",
              prompts: [
                "Which of the 6 steps did you find most useful?",
                "Which of the 6 steps did you find most challenging?",
                "What changes would you make to improve your approach in future tasks?"
              ]
            },
            {
              type: "fields",
              fields: [{"id":"s5-change","label":"In my next task, I will …","rows":2,"placeholder":"In my next task, I will set a deadline for each step, and …"}]
            },
            {
              type: "key",
              title: "After class",
              points: ["Continue preparing for the seminar.","Continue your research for your group’s seminar topic and the final Interactive Presentation Assessment."]
            }
          ]
        }
      ]
    },
    {
      id: "present2",
      number: "02",
      code: "15A",
      minutes: 45,
      tone: "clay",
      art: "dec10/assets/week2/s-present2.svg",
      title: "Presentation skills",
      subtitle: "From a weak talk to a strong one — in three minutes",
      outcome: "You can judge presentation techniques, suggest improvements, and use stress, intonation and chunking.",
      activities: [
        {
          id: "e1",
          short: "Lead-in",
          minutes: 5,
          grouping: "Groups of 3",
          art: "dec10/assets/week2/v/v-d10w2d4-e1.svg",
          title: "Lead-in: Group discussion",
          goal: "Talk about your own experience of presenting.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Be honest. How do you feel before you present? Move the slider."},
            {"type":"scale","id":"e1-sc","statement":"I feel relaxed when I speak in front of a group in English.","ends":["Very nervous","Very relaxed"]},
            {"type":"do","n":2,"who":"group","text":"Answer both questions. Everyone speaks. Use the phrases below."},
            {
              type: "talk",
              title: "Discuss",
              prompts: ["How much experience do you have giving presentations?","How do you usually feel when giving a presentation or speaking in front of a group?"]
            },
            {
              type: "language",
              title: "Talk about your experience and your feelings",
              tabs: false,
              groups: [
                {
                  label: "Experience",
                  phrases: [
                    "I’ve given <b>a few</b> / <b>quite a lot of</b> presentations.",
                    "I’ve <b>hardly ever</b> presented in English.",
                    "The last time I presented was <b>for</b> a project in …",
                    "I’m <b>used to</b> presenting in my language, but not in English."
                  ]
                },
                {
                  label: "Feelings",
                  phrases: [
                    "I get <b>butterflies</b> in my stomach.",
                    "My mind <b>goes blank</b>.",
                    "I <b>speak too fast</b> when I’m nervous.",
                    "I feel <b>more confident</b> when I’ve practised."
                  ]
                },
                {
                  label: "What helps",
                  phrases: [
                    "What <b>helps me</b> is …",
                    "I always <b>practise out loud</b> first.",
                    "I try to <b>focus on one friendly face</b>.",
                    "I take a <b>deep breath</b> before I start."
                  ]
                }
              ]
            },
            {"type":"fields","fields":[{"id":"e1-help","label":"One thing that helps me when I present","rows":2,"placeholder":"What helps me is …"}]}
          ]
        },
        {
          id: "e2",
          short: "Video 1",
          minutes: 7,
          grouping: "Pair",
          art: "dec10/assets/week2/v/v-d10w2d4-e2.svg",
          title: "Sample Presentation Video: Part 1",
          goal: "Watch Ranjit’s first presentation and judge it.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"First learn six words you will hear and need today. Match each word to its meaning."},
            {
              type: "match",
              id: "e2-m",
              title: "Words for talking about presentations",
              left: ["to dim the lights","eye contact","engaging","distracting","constructive feedback","an anecdote"],
              right: [
                "to make the room darker",
                "looking at people while you talk",
                "interesting; it keeps people listening",
                "it takes people’s attention away",
                "comments that help someone improve",
                "a short personal story"
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Watch the video <b>up to 1:30</b> only. Ranjit gives a short academic presentation."},
            {
              type: "listening",
              source: "Sample presentation video",
              title: "Ranjit’s presentation — Part 1",
              videoId: "V8eLdbKXGzk",
              start: 0,
              clip: "play 0:00–1:30",
              transcripts: []
            },
            {"type":"do","n":3,"who":"pair","text":"Answer with your partner. Then bet: how sure are you?"},
            {
              type: "bet",
              id: "e2-bet",
              items: [
                {
                  q: "Could you easily follow the structure of Ranjit’s presentation?",
                  options: ["Yes — he gave a clear outline and summary.","No — there was no outline, no introduction to the topic and no summary."],
                  answer: "No — there was no outline, no introduction to the topic and no summary.",
                  why: "He never tells us his plan, so it is hard to follow."
                },
                {
                  q: "What was the topic?",
                  options: ["The causes of stress","The causes of the American Revolution","The history of tea"],
                  answer: "The causes of the American Revolution",
                  why: "We only know because it is on the slide. He does not say it. Many people would not know the topic."
                },
                {
                  q: "Was his presentation engaging?",
                  options: ["Yes — he told a personal story.","No — he looked nervous and did not make eye contact."],
                  answer: "No — he looked nervous and did not make eye contact.",
                  why: "Also: his phone rang, people laughed, and his slides had too much small text. He did not use his slides at all."
                }
              ]
            },
            {"type":"do","n":4,"who":"pair","text":"Imagine Ranjit is your classmate. Say <b>one good thing</b> and <b>one tip</b>. Use the phrases."},
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
            },
            {"type":"tip","text":"Open your <b>Student’s book, page 102</b>. These are the same expressions. You will use them all day."},
            {"type":"fields","fields":[{"id":"e2-fb","label":"My feedback for Ranjit","rows":3,"placeholder":"… was good. To make it even better, you might …"}]}
          ],
          answers: {
            items: [
              [
                "Feedback for Ranjit",
                "Your own answer. For example: “Your slide was good. To make it even better, you might introduce the topic and your plan at the start, look up at the audience, and switch off your phone.”"
              ]
            ]
          }
        },
        {
          id: "e3",
          short: "Video 2",
          minutes: 6,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/v/v-d10w2d4-e3.svg",
          title: "Sample Presentation Video: Part 2",
          goal: "Hear the class’s feedback and notice how they say it.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Watch <b>1:30–3:06</b>. His classmates and teacher give him feedback. Take short notes."},
            {
              type: "listening",
              source: "Sample presentation video",
              title: "Ranjit’s presentation — Part 2: feedback",
              videoId: "V8eLdbKXGzk",
              start: 90,
              clip: "play 1:30–3:06",
              transcripts: []
            },
            {"type":"do","n":2,"who":"pair","text":"What advice did they give him? Sort the cards. Then check."},
            {
              type: "sort",
              id: "e3-sort",
              title: "Did they give this advice?",
              buckets: [{"label":"Yes, they said it","letter":"✓"},{"label":"No, they didn’t","letter":"✗"}],
              items: [
                {"text":"Speak louder and face the audience.","answer":0},
                {"text":"Don’t read from your paper.","answer":0,"why":"He was reading, so it did not feel like he was talking to them."},
                {"text":"Look up every sentence or two and make eye contact.","answer":0},
                {"text":"Smile more to look confident and relaxed.","answer":0},
                {"text":"Switch your phone off before you speak.","answer":0},
                {"text":"Use a personal story or experience as an example.","answer":0},
                {"text":"Use more slides with more text.","answer":1},
                {"text":"Speak faster so the talk is shorter.","answer":1}
              ]
            },
            {
              type: "talk",
              title: "Discuss with your partner",
              prompts: ["Did they comment on the same issues as you?","Do you think this peer feedback is useful for Ranjit? Is it useful for the rest of the class?"]
            },
            {
              type: "toggle",
              title: "After you watch: how the teacher gives feedback",
              hint: "Steal these phrases",
              blocks: [
                {
                  type: "chat",
                  title: "From the video",
                  right: "Student",
                  lines: [
                    [
                      "Teacher",
                      "Now, would anyone like to offer Ranjit <mark>constructive feedback</mark> about his presentation? <mark>Any tips for what he might do differently next time?</mark>"
                    ],
                    ["Student","Not really! He <mark>needs to</mark> speak louder and face the audience."],
                    ["Teacher","Yes, <mark>great suggestion</mark>. Anyone else?"],
                    [
                      "Teacher",
                      "Exactly. <mark>It’s important, when you’re speaking, to</mark> look up every sentence or two and make eye contact with someone in the audience."
                    ],
                    [
                      "Teacher",
                      "<mark>I do have one more suggestion.</mark> To connect with listeners, <mark>it’s a great idea to</mark> use a personal story or experience as an example. <mark>Can you try that next time?</mark>"
                    ]
                  ]
                }
              ]
            }
          ],
          answers: {
            items: [
              [
                "Is the peer feedback useful?",
                "Yes. It guides Ranjit and lets him hear how the audience sees his presentation. It also helps everyone else think about their own presentation skills and see what works well."
              ]
            ]
          }
        },
        {
          id: "e4",
          short: "Video 3",
          minutes: 6,
          grouping: "Pair",
          art: "dec10/assets/week2/v/v-d10w2d4-e4.svg",
          title: "Sample Presentation Video: Part 3",
          goal: "See what changes when Ranjit uses the feedback.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"First read the list below. Then watch <b>3:06 to the end</b>: Ranjit’s new presentation."},
            {
              type: "listening",
              source: "Sample presentation video",
              title: "Ranjit’s presentation — Part 3: his new talk",
              videoId: "V8eLdbKXGzk",
              start: 186,
              clip: "play 3:06–end",
              transcripts: []
            },
            {
              type: "quiz",
              id: "e4-q",
              title: "Which of these does he improve in his new presentation?",
              shared: ["Yes, he does it","No, he doesn’t"],
              items: [
                {"q":"a. introduce the topic","answer":"Yes, he does it","why":"“Today, I’d like to talk about the causes and effects of stress …”"},
                {"q":"b. face the audience","answer":"Yes, he does it"},
                {"q":"c. make eye contact with the audience","answer":"Yes, he does it"},
                {"q":"d. speak clearly","answer":"Yes, he does it"},
                {"q":"e. smile more","answer":"Yes, he does it"},
                {"q":"f. make sure your phone is off before you speak","answer":"Yes, he does it"},
                {
                  q: "g. tell a personal story or experience as an example",
                  answer: "Yes, he does it",
                  why: "He talks about working after school and his grades going down."
                },
                {
                  q: "h. end with a practical final message for the audience",
                  answer: "Yes, he does it",
                  why: "“It’s important to recognize when you are stressed and to ask for help.”"
                },
                {
                  q: "i. point at the slides and include references",
                  answer: "No, he doesn’t",
                  why: "This is the one thing he still does not do. In DEC10 you must do it!"
                }
              ]
            },
            {
              type: "talk",
              title: "Discuss",
              prompts: ["How did the audience react to this new presentation? Why?","Which change made the biggest difference? Why do you think so?"]
            },
            {"type":"do","n":2,"who":"pair","text":"Tap the numbers. Compare Ranjit’s two presentations."},
            {
              type: "hotspot",
              src: "dec10/assets/week2/d4-ranjit.svg",
              size: "wide",
              alt: "Two stages side by side. Before: Ranjit reads from paper, looks down, his phone rings, his slide is full of small text. After: he smiles, looks at the audience, opens with the topic, tells a story and ends with a message; the audience leans in.",
              caption: "Before and after: the same student, one week later.",
              spots: [
                {
                  x: 21,
                  y: 30,
                  label: "1",
                  color: "#c4562f",
                  title: "Reading from paper",
                  text: "He reads, so he cannot look up. It does not feel like he is <b>talking to</b> us."
                },
                {"x":39,"y":22,"label":"2","color":"#c4562f","title":"A slide full of small text","text":"Nobody can read it, and he never points at it."},
                {
                  x: 12,
                  y: 70,
                  label: "3",
                  color: "#c4562f",
                  title: "The phone rings",
                  text: "The class laughs and he gets more nervous. <b>Switch it off</b> before you start."
                },
                {"x":70,"y":26,"label":"4","color":"#2f7d6b","title":"A clear opening","text":"“Today, I’d like to talk about …” — now everyone knows the topic."},
                {
                  x: 86,
                  y: 44,
                  label: "5",
                  color: "#2f7d6b",
                  title: "A personal story",
                  text: "His own story about stress makes the audience <b>feel connected</b> to him."
                },
                {"x":63,"y":74,"label":"6","color":"#2f7d6b","title":"Eye contact and a smile","text":"He looks up and smiles. He looks relaxed, so we relax too."}
              ]
            }
          ],
          answers: {"items":[["How did the audience react?","They were much more engaged, and they seemed to be able to relate to his story."]]}
        },
        {
          id: "e5",
          short: "Dos & Don’ts",
          minutes: 10,
          grouping: "Class → Pair",
          art: "dec10/assets/week2/v/v-d10w2d4-e5.svg",
          title: "Dos and Don’ts of Presentations",
          goal: "Know the 16 golden rules — and use them to give advice.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "class",
              text: "<b>Stand up!</b> Heads and Tails: your teacher reads a tip. Is it a <b>Do</b> or a <b>Don’t</b>? Show it with your hands."
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d4-heads-tails.svg",
              size: "wide",
              alt: "Two students. One has hands on head: Do — you should do this. One has hands on hips: Don’t — you should NOT do this.",
              caption: "Hands on your head = Do. Hands on your hips = Don’t."
            },
            {"type":"do","n":2,"who":"pair","text":"Now sort all 16 tips on your screen. Then check."},
            {
              type: "sort",
              id: "e5-sort",
              title: "Do or Don’t?",
              buckets: [{"label":"Do","letter":"🙌"},{"label":"Don’t","letter":"✋"}],
              items: [
                {"text":"Prepare thoroughly and practise so you know your topic well.","answer":0},
                {"text":"Have a clear introduction, main body and conclusion.","answer":0},
                {"text":"Read most of your talk from your notes or slides.","answer":1},
                {"text":"Put a lot of small text on your slides.","answer":1},
                {"text":"Use examples or anecdotes to make complex ideas more relatable.","answer":0},
                {"text":"Use unusual fonts and busy designs on your slides.","answer":1,"why":"Slides should not be distracting or difficult to read."},
                {"text":"Talk about other interesting things that are not your topic.","answer":1,"why":"Don’t get off topic."},
                {"text":"Make eye contact with different people in the audience.","answer":0},
                {"text":"Speak quietly and quickly so you finish early.","answer":1},
                {"text":"Speak in the same flat tone all the time.","answer":1},
                {"text":"Stand confidently, facing the audience.","answer":0},
                {"text":"Use hand gestures and facial expressions to emphasise points.","answer":0},
                {"text":"Play with something in your pocket while you talk.","answer":1,"why":"Avoid any distracting behaviour."},
                {"text":"Leave your phone on — it might be important.","answer":1,"why":"Don’t forget to switch off your phone."},
                {"text":"Check your timing.","answer":0},
                {"text":"Record your practice and watch it back to see where you can improve.","answer":0}
              ]
            },
            {"type":"do","n":3,"who":"pair","text":"<b>Presentation doctor.</b> Spin. Your partner has this problem. Give advice in 20 seconds. Then swap."},
            {
              type: "spinner",
              id: "e5-spin",
              title: "Presentation doctor",
              reels: [
                {
                  label: "The problem",
                  items: [
                    "I always speak too fast.",
                    "My slides have too much text.",
                    "I forget everything when I’m nervous.",
                    "My voice sounds flat and boring.",
                    "I never know how to finish.",
                    "I look at the floor the whole time.",
                    "I play with my pen.",
                    "My talk is always too long."
                  ]
                },
                {
                  label: "Start your advice with",
                  items: ["Why don’t you try …?","It might help to …","One thing that works for me is …","Have you thought about …?","Next time, you could …"]
                }
              ]
            },
            {
              type: "language",
              title: "Useful chunks for presentation advice",
              tabs: false,
              groups: [
                {"label":"Voice","phrases":["<b>slow down</b> and <b>pause</b>","<b>project</b> your voice","<b>vary</b> your tone"]},
                {"label":"Body","phrases":["<b>make eye contact</b> with …","<b>face</b> the audience","use <b>hand gestures</b>"]},
                {"label":"Slides","phrases":["<b>keywords</b>, not full sentences","<b>point at</b> the chart","<b>cite</b> your sources on the slide"]}
              ]
            },
            {"type":"sticky","color":"yellow","title":"Golden rule","text":"<p>Your slides <b>support</b> you. They are not your script.</p>"}
          ]
        },
        {
          id: "e6",
          short: "Pronunciation",
          minutes: 11,
          grouping: "Pair",
          art: "dec10/assets/week2/v/v-d10w2d4-e6.svg",
          title: "Pronunciation: Stress, Intonation and Chunking",
          goal: "Make your spoken English clear and natural.",
          blocks: [
            {
              type: "key",
              title: "Spoken English is not written English",
              points: [
                "Clear pronunciation helps your message reach the audience.",
                "Today: <b>word stress</b>, <b>sentence stress</b>, <b>intonation</b> and <b>chunking</b>."
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Guess what each word means first. Then turn the card."},
            {
              type: "flip",
              title: "Four features of clear speech",
              items: [
                {
                  front: "Word stress",
                  tag: "one word",
                  back: "Some syllables of a word are said more strongly. If you stress the wrong one, it doesn’t sound right. <b>SYD</b>-ney · au-<b>STRA</b>-li-a"
                },
                {"front":"Sentence stress","tag":"one sentence","back":"The word or words in a sentence that the speaker emphasises because they are more important."},
                {
                  front: "Intonation",
                  tag: "up and down",
                  back: "Your voice goes higher or lower. It adds meaning, emotion or attitude. With no change, English sounds boring and unnatural."
                },
                {
                  front: "Chunking",
                  tag: "pause // pause",
                  back: "A group of words with a pause before and after it — like punctuation when you speak. It gives you time to breathe and the listener time to think."
                }
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"Which syllable is stressed? Say each word aloud before you choose."},
            {
              type: "quiz",
              id: "e6-ws",
              title: "Word stress in Ranjit’s talk",
              items: [
                {"q":"effects","options":["EF-fects","ef-FECTS"],"answer":"ef-FECTS"},
                {"q":"stress","options":["STRESS (only 1 syllable)","stre-SS (2 syllables)"],"answer":"STRESS (only 1 syllable)"},
                {"q":"including","options":["IN-clu-ding","in-CLU-ding","in-clu-DING"],"answer":"in-CLU-ding"},
                {
                  q: "expectations",
                  options: ["EX-pec-ta-tions","ex-PEC-ta-tions","ex-pec-TA-tions"],
                  answer: "ex-pec-TA-tions",
                  why: "Words ending in -tion are stressed just before -tion: ex-pec-TA-tion."
                },
                {"q":"yourself","options":["YOUR-self","your-SELF"],"answer":"your-SELF"}
              ]
            },
            {"type":"do","n":3,"who":"pair","text":"<b>Go further:</b> the words of our topic. Which syllable is stressed?"},
            {
              type: "quiz",
              id: "e6-topic",
              title: "Word stress in this week’s topic",
              items: [
                {"q":"environment","options":["EN-vi-ron-ment","en-VI-ron-ment","en-vi-RON-ment"],"answer":"en-VI-ron-ment"},
                {
                  q: "sustainability",
                  options: ["sus-TAIN-a-bi-li-ty","sus-tain-a-BI-li-ty","SUS-tain-a-bi-li-ty"],
                  answer: "sus-tain-a-BI-li-ty",
                  why: "Words ending in -ity are stressed just before -ity."
                },
                {
                  q: "technology",
                  options: ["TECH-no-lo-gy","tech-NO-lo-gy","tech-no-LO-gy"],
                  answer: "tech-NO-lo-gy",
                  why: "Words ending in -ogy are stressed just before -ogy: bi-O-lo-gy, ec-O-lo-gy."
                },
                {"q":"emissions","options":["E-mis-sions","e-MIS-sions"],"answer":"e-MIS-sions"},
                {"q":"digital","options":["DI-gi-tal","di-GI-tal"],"answer":"DI-gi-tal"}
              ]
            },
            {
              type: "do",
              n: 4,
              who: "alone",
              text: "Look at the extract. <b>Bold underlined</b> = sentence stress. Arrows = intonation. <b>/</b> and <b>//</b> = chunks (pauses)."
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d4-pron.svg",
              size: "wide",
              alt: "Good morning! // Today, / I’d like to talk about / the causes / and effects / of stress / and how to cope with stress. // Stress has / many causes, // including work or school, / life events, / changes, / or unrealistic expectations of yourself. Stressed words are underlined and arrows show the voice going up and down.",
              caption: "One feature at a time: first sentence stress, then intonation, then chunking."
            },
            {
              type: "steps",
              title: "Practise with your partner",
              items: [
                {"who":"pair","text":"Read the extract aloud. Focus on <b>sentence stress</b> only."},
                {"who":"pair","text":"Read it again. Now focus on <b>intonation</b>: follow the arrows."},
                {"who":"pair","text":"Read it again. Now <b>pause</b> at every / and longer at //."},
                {"who":"pair","text":"Put it all together. Give each other feedback."},
                {"who":"alone","text":"Record yourself on your phone (Voice Memo or video). Listen back."}
              ]
            },
            {
              type: "language",
              title: "Pronunciation feedback for your partner",
              tabs: false,
              groups: [
                {"label":"Good","phrases":["Your pauses made it <b>easy to follow</b>.","You <b>stressed the key words</b> clearly."]},
                {"label":"Tip","phrases":["Try to <b>pause after</b> “Today”.","Your voice was <b>a bit flat</b> on …","Say “ex-pec-<b>TA</b>-tions”, not …"]}
              ]
            },
            {
              type: "fields",
              fields: [
                {
                  id: "e6-rec",
                  label: "When I listened to my recording, I noticed … I need to improve …",
                  rows: 3,
                  placeholder: "I noticed that I … I need to improve my …"
                }
              ]
            },
            {
              type: "tip",
              text: "<b>After class:</b> watch the pronunciation videos on chunking, stress and intonation in the <b>Communication Resources</b> section on Canvas."
            }
          ]
        }
      ]
    },
    {
      id: "questions",
      number: "03",
      code: "11A",
      minutes: 30,
      tone: "teal",
      art: "dec10/assets/week2/s-questions.svg",
      title: "Asking effective individual questions",
      subtitle: "Clarification or probing?",
      outcome: "Explain the difference between clarification and probing questions, ask both, and give feedback on how effective a question is.",
      activities: [
        {
          id: "q1",
          short: "Two sets",
          minutes: 2,
          grouping: "Class",
          title: "Introduction",
          goal: "Know which questions you will answer in the Interactive Presentation.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d3-qa-sets.svg",
              size: "wide",
              alt: "Two sets of questions after the Interactive Presentation: Set 1 on your content (one clarification and one probing question) and Set 2 on the Academic Success Toolkit.",
              caption: "Two sets of individual questions."
            },
            {
              type: "key",
              title: "In the Interactive Presentation",
              points: [
                "<b>Set 1</b> — on your content: <b>one clarification question</b> and <b>one probing question</b>.",
                "<b>Set 2</b> — on the <b>Academic Success Toolkit</b>.",
                "You practise asking and answering both in class, starting with your Research Summary presentations today."
              ]
            },
            {
              type: "quiz",
              id: "q1-q",
              items: [
                {
                  q: "How many questions on your content will you be asked?",
                  options: ["One","Two","Four"],
                  answer: "Two",
                  why: "One clarification question and one probing question."
                }
              ]
            }
          ]
        },
        {
          id: "q2",
          short: "Question bank",
          minutes: 5,
          grouping: "Pair",
          title: "Interactive Presentation: Individual questions",
          goal: "Know the question types and examples.",
          blocks: [
            {
              type: "tabs",
              title: "Question types and examples",
              tabs: [
                {
                  label: "Questions on content",
                  blocks: [
                    {
                      type: "model",
                      title: "QUESTIONS ON CONTENT",
                      rows: [
                        [
                          "CLARIFICATION",
                          "What did you mean by ...? · What do [specific data] represent? · Can you give some more details about ...? · What does [term/concept] mean? · Could you clarify how/when/where/why [something]?"
                        ],
                        [
                          "PROBING",
                          "Can you explain why that is important? · Why do you think [specific data] are important for your point? · Why did you choose to focus on ...? · What makes that a challenge? · How did you come to that conclusion?"
                        ]
                      ]
                    }
                  ]
                },
                {
                  label: "Questions on the AST",
                  blocks: [
                    {
                      type: "cards",
                      title: "QUESTIONS ON ACADEMIC SKILLS TOOLKIT",
                      items: [
                        {
                          label: "Digital literacy and AI",
                          text: "Can you describe which AI tools you used in your research and how you used them?<br>Was there any part of the task where you chose not to use AI? Why?<br>Can you describe a time when AI changed your original ideas or direction during your research?"
                        },
                        {
                          label: "Group work skills",
                          text: "How did you decide who does what in preparing this presentation?<br>How did you make sure everyone’s ideas were considered?<br>What digital tools did you use to work together and why?"
                        },
                        {
                          label: "Self-regulation and monitoring",
                          text: "How did you manage your time preparing for this presentation?<br>How did you manage any distractions when working on your presentation at home?<br>Do you think you managed your time well in preparing for this presentation?"
                        },
                        {
                          label: "Feedback literacy",
                          text: "How did you use the rubric to guide your preparation for the presentation?<br>How useful was the action plan you had made to improve your presentation?<br>Did you evaluate your groupmates’ presentation practice? How did you do this?"
                        },
                        {
                          label: "Research skills",
                          text: "What methods did you use to research information for this week’s topic?<br>Did you find it easier to use library resources or online resources? Why?<br>Can you explain how you evaluated the quality of the sources you found in this week’s research?"
                        },
                        {
                          label: "Criticality",
                          text: "Did your research change your perspective on this week’s topic? If so, how?<br>Did any of the sources you found raise questions that you want to explore further?<br>Did you find any conflicting information during your research, and how did you handle it?"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "download",
              id: "ip-questions",
              note: "All these questions on one page. Keep it open during today’s presentations — and use it to practise for your Interactive Presentation."
            }
          ]
        },
        {
          id: "q3",
          short: "Clarify or probe?",
          minutes: 8,
          grouping: "Pair",
          title: "Clarification vs Probing Questions",
          goal: "Tell the two kinds of question apart.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d3-clar-probe.svg",
              size: "wide",
              alt: "One statement and two questions: a clarification question makes it clear; a probing question goes deeper.",
              caption: "Clarification = make it clear. Probing = go deeper."
            },
            {
              type: "cards",
              items: [
                {
                  label: "Clarification questions",
                  text: "Asked when the listener has a question about <b>what exactly is meant</b> or <b>what exactly is being claimed</b>.<br><i>“What do you mean by ...?” · “Could you explain more about ...?”</i>"
                },
                {
                  label: "Probing questions",
                  text: "Questions that prompt you to <b>expand upon</b> or give <b>more information</b> about what you have said.<br><i>“Why do you think [something] is important?” · “What example can you provide of ...?”</i>"
                }
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Sort the ten questions from the question bank. Say each one aloud with polite intonation."},
            {
              type: "sort",
              id: "q3-sort",
              title: "Clarification or probing?",
              buckets: [{"label":"Clarification","letter":"C"},{"label":"Probing","letter":"P"}],
              items: [
                {"text":"What did you mean by ...?","answer":0},
                {"text":"Can you explain why that is important?","answer":1},
                {"text":"What do [specific data] represent?","answer":0},
                {"text":"Why did you choose to focus on ...?","answer":1},
                {"text":"Can you give some more details about ...?","answer":0},
                {"text":"What makes that a challenge?","answer":1},
                {"text":"What does [term/concept] mean?","answer":0},
                {"text":"How did you come to that conclusion?","answer":1},
                {"text":"Could you clarify how/when/where/why [something]?","answer":0},
                {"text":"Why do you think [specific data] are important for your point?","answer":1}
              ]
            },
            {
              type: "quiz",
              id: "q3-quiz",
              title: "Statement: “Streaming video is responsible for about 1% of global emissions.”",
              items: [
                {
                  q: "“What do you mean by ‘streaming’ — only YouTube, or Netflix too?”",
                  options: ["Clarification","Probing"],
                  answer: "Clarification",
                  why: "It asks what exactly a word means."
                },
                {
                  q: "“Why do you think that 1% is important for your point?”",
                  options: ["Clarification","Probing"],
                  answer: "Probing",
                  why: "It asks the speaker to explain why — to go deeper."
                },
                {
                  q: "“Could you clarify where that figure comes from?”",
                  options: ["Clarification","Probing"],
                  answer: "Clarification",
                  why: "It asks for an exact detail: the source."
                },
                {
                  q: "“What could people do to reduce that number?”",
                  options: ["Clarification","Probing"],
                  answer: "Probing",
                  why: "It asks the speaker to expand the idea to solutions."
                }
              ]
            }
          ]
        },
        {
          id: "q4",
          short: "Role play",
          minutes: 10,
          grouping: "Pair → Two pairs",
          title: "Activity 1 Role play",
          goal: "Write clarification and probing questions for a speaker — and answer them.",
          blocks: [
            {
              type: "key",
              title: "Real life too",
              points: [
                "At CET you will mostly ask and answer questions about a <b>presentation</b>.",
                "But these questions are asked all the time in everyday life — and very often in <b>seminars and academic discussions</b> at university."
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Perform the dialogue. One person is <b>Alex</b>, one person is <b>Jamie</b>."},
            {
              type: "chat",
              title: "Sample speaking exam transcript (human input, AI generated)",
              right: "Jamie",
              lines: [
                ["Alex","Hey Jamie, have you thought about our digital carbon footprint?"],
                ["Jamie","Yeah, I have. It’s kind of crazy to think that our online activities can impact the environment. What do you think causes it?"],
                ["Alex","Well, every time we use the internet, stream videos, or even send emails, we’re using data centres."],
                [
                  "Jamie",
                  "Right, and it’s not just the data centres. The devices we use also contribute. Manufacturing and disposing of these devices have their own carbon footprints."
                ],
                ["Alex","Exactly. And with increasing demand for technology, this issue is only going to get worse."],
                ["Jamie","Definitely. But what about the effects? How does this digital carbon footprint impact us?"],
                ["Alex","For starters, it contributes to global warming."],
                [
                  "Jamie",
                  "Yes, it does. Plus, there’s the issue of electronic waste. Improper disposal of devices can lead to toxic substances leaking into the environment."
                ],
                ["Alex","True. It’s a complex issue. But there are ways we can reduce our digital carbon footprint."],
                ["Jamie","Yeah, small changes can make a big difference. It’s all about being aware and making conscious choices."]
              ]
            },
            {
              type: "do",
              n: 2,
              who: "alone",
              text: "Write as many clarification and probing questions as you can for your <b>partner’s character</b>. Begin with: <b>Can…? How…? What…?</b>"
            },
            {
              type: "tabs",
              title: "Your question tables",
              tabs: [
                {
                  label: "Questions for ALEX",
                  blocks: [
                    {
                      type: "model",
                      title: "Examples",
                      rows: [
                        ["Clarification","How do data centres relate to the internet?"],
                        [
                          "Probing",
                          "What examples can you provide on the effects of global warming? · What are some “ways” we can reduce our carbon footprint? Can you provide more information?"
                        ]
                      ]
                    },
                    {"type":"table","id":"q4-alex","columns":["Clarification Questions for ALEX","Probing Questions for ALEX"],"rows":3}
                  ]
                },
                {
                  label: "Questions for JAMIE",
                  blocks: [
                    {
                      type: "model",
                      title: "Examples",
                      rows: [["Clarification","What is meant by “the devices we use”?"],["Probing","In what ways can “toxic substances leaking” affect the environment?"]]
                    },
                    {"type":"table","id":"q4-jamie","columns":["Clarification Questions for JAMIE","Probing Questions for JAMIE"],"rows":3}
                  ]
                }
              ]
            },
            {
              type: "do",
              n: 3,
              who: "pair",
              text: "Ask your partner’s character your questions. Your partner answers <b>in character</b> — with no time to prepare, like in the exam."
            },
            {
              type: "language",
              title: "Answering a question you didn’t expect",
              groups: [
                {"label":"Buy a little time","phrases":["That’s a good question.","Let me think about that for a second.","So, you’re asking about …"]},
                {"label":"Clarify","phrases":["What I meant was …","By “…”, I mean …","To put it another way, …"]},
                {"label":"Go deeper","phrases":["I think it’s important because …","For example, …","One reason is that …"]},
                {"label":"Be honest","phrases":["I’m not 100% sure, but I think …","I didn’t find data on that, but …"]}
              ]
            },
            {"type":"do","n":4,"who":"group","text":"Work with another pair. Look at each other’s tables. Give feedback."},
            {
              type: "checklist",
              id: "q4-eff",
              title: "Is it an effective question?",
              meter: ["ticked","Effective questions!"],
              items: [
                "Are the questions open ended?",
                "Are the questions detailed enough so there is no confusion on how to answer it?",
                "Is the tone of the questions polite (without judgment)?",
                "Are the questions asking the students to recall, explain, analyse or evaluate information?",
                "Can the clarification question lead into a probing question?",
                "Are the questions in the correct columns?"
              ]
            },
            {
              type: "pairs",
              title: "Make it effective",
              items: [
                {"from":"[[Is]] the digital footprint bad?","to":"[[In what ways]] does the digital footprint affect the environment?","tag":"Open, not yes/no"},
                {"from":"Your data is [[wrong]], isn’t it?","to":"[[Could you clarify where]] that figure comes from?","tag":"Polite, no judgment"},
                {"from":"What about [[that]]?","to":"What do you mean by [[“conscious choices”]]?","tag":"Detailed and clear"}
              ]
            }
          ]
        },
        {
          id: "q5",
          short: "AST questions",
          minutes: 10,
          grouping: "Small groups",
          title: "Activity 2 AST questions",
          goal: "Remember the Academic Success Toolkit and turn it into questions.",
          blocks: [
            {
              type: "key",
              title: "Set 2 in the exam",
              points: [
                "You will also be prompted to answer questions on one of these AST topics: Engagement with AI · Group work · Self-regulating and monitoring · Giving and receiving feedback · Research skills."
              ]
            },
            {"type":"do","n":1,"who":"group","text":"Quickly complete the table: what did you learn in each topic? Use dot points."},
            {
              type: "table",
              id: "q5-ast",
              columns: ["What we learnt (dot points)"],
              fixed: ["Engagement with AI","Group work","Self-regulating and monitoring","Giving and receiving feedback","Research skills"]
            },
            {
              type: "toggle",
              title: "Compare with these ideas",
              hint: "Open after you finish",
              blocks: [
                {
                  type: "model",
                  title: "Possible dot points",
                  rows: [
                    ["Engagement with AI","USYD stance on AI · writing effective prompts · (acknowledging AI) · Cogniti · MS Copilot"],
                    ["Group work","problem-solving"],
                    [
                      "Self-regulating and monitoring",
                      "Before: analyse task, set goals and plan the work · During: create an outline, draft, revise and improve · After-ongoing: reflect and evaluate"
                    ],
                    ["Giving and receiving feedback","appreciating feedback · making judgements · taking action"],
                    ["Research skills","CRAAP evaluation · database search"]
                  ]
                }
              ]
            },
            {
              type: "do",
              n: 2,
              who: "group",
              text: "Partner up with another group. Swap tables. Use <b>their</b> dot points to write your own effective questions."
            },
            {
              type: "language",
              title: "Effective questions for the AST",
              groups: [
                {"label":"Reflective questions","phrases":["Can you describe ...?","How did you feel ...?","How did your group overcome ...?"]},
                {"label":"Process questions","phrases":["How did you decide ...?","What methods ...?"]},
                {"label":"Planning questions","phrases":["In the future, how would ...?"]}
              ]
            },
            {
              type: "fields",
              fields: [{"id":"q5-mine","label":"Our questions for the other group","rows":4,"placeholder":"How did your group decide …?\nIn the future, how would you …?"}]
            },
            {
              type: "spinner",
              id: "q5-spin",
              title: "Speed round: answer an AST question",
              text: "Spin. Answer in 30–45 seconds about your OWN research summary preparation. The group asks one follow-up question.",
              reels: [
                {
                  label: "Question",
                  items: [
                    "How did you decide who does what in preparing this presentation?",
                    "How did you make sure everyone’s ideas were considered?",
                    "How did you manage your time preparing for this presentation?",
                    "What methods did you use to research information for this week’s topic?",
                    "Did you find it easier to use library resources or online resources? Why?",
                    "Can you describe which AI tools you used in your research and how you used them?",
                    "Was there any part of the task where you chose not to use AI? Why?",
                    "Did your research change your perspective on this week’s topic? If so, how?",
                    "Did you find any conflicting information during your research, and how did you handle it?",
                    "How did you use the rubric to guide your preparation for the presentation?"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "pron",
      number: "04",
      code: "20A",
      minutes: 40,
      tone: "clay",
      art: "dec10/assets/week2/s-pron.svg",
      title: "Pronunciation for presentations: Chunking, Stress & Intonation",
      subtitle: "Sound clear, natural and confident",
      outcome: "You can use chunking, stress and intonation more naturally in speech.",
      activities: [
        {
          id: "p1",
          short: "Warmer",
          minutes: 8,
          grouping: "Pair",
          art: "dec10/assets/week2/d5-v-p1.svg",
          title: "Warmer",
          goal: "What do you already know about chunking, stress and tone?",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Answer the four questions with your partner. Then turn the cards to check."},
            {
              type: "flip",
              title: "Four questions",
              hint: "Talk first. Then tap a card to turn it over.",
              items: [
                {
                  tag: "1",
                  front: "What is pausing and chunking, and why are they important?",
                  back: "Pausing is when we stop briefly while speaking. Chunking means grouping words into phrases. They help your speech sound clear, natural, and easier to understand."
                },
                {"tag":"2","front":"What is the best way to recognise or hear chunking?","back":"Listen to people talking (e.g. speeches)."},
                {
                  tag: "3",
                  front: "What is the difference between function words and content words?",
                  back: "Content words give the main meaning (like nouns and verbs). Function words are grammar words (like and, the, is). We usually stress content words more when we speak."
                },
                {
                  tag: "4",
                  front: "Why is tone important in spoken English?",
                  back: "Tone shows how you feel or what you mean. The same words can sound polite, excited, or even rude — depending on your tone!"
                }
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d5-sound-tools.svg",
              alt: "Three tools for a clear voice: chunking (words in boxes with pauses), stress (big and small dots over words) and intonation (a line that goes up and down).",
              caption: "Three tools for a clear, natural voice"
            },
            {"type":"do","n":2,"who":"alone","text":"Content word or function word? Sort the words from this week’s topic."},
            {
              type: "sort",
              id: "p1-sort",
              title: "Which words do we stress?",
              buckets: [
                {"label":"Content words","text":"carry the meaning · usually stressed","letter":"C"},
                {"label":"Function words","text":"grammar words · usually weak","letter":"F"}
              ],
              items: [
                {"text":"emissions","answer":0},
                {"text":"the","answer":1},
                {"text":"reduce","answer":0},
                {"text":"of","answer":1},
                {"text":"servers","answer":0},
                {"text":"and","answer":1},
                {"text":"quickly","answer":0},
                {"text":"is","answer":1},
                {"text":"carbon","answer":0},
                {"text":"to","answer":1},
                {"text":"300 million","answer":0},
                {"text":"a","answer":1},
                {"text":"environmental","answer":0},
                {"text":"they","answer":1}
              ]
            },
            {
              type: "tip",
              text: "Content words = nouns, main verbs, adjectives, adverbs, numbers, question words and “not”. They carry your message, so make them a little <b>longer, louder and higher</b>."
            }
          ]
        },
        {
          id: "p2",
          short: "Chunk it",
          minutes: 8,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/d5-v-p2.svg",
          title: "Chunk it: where do you pause?",
          goal: "Mark the natural pauses in real sentences from this week’s reading.",
          blocks: [
            {
              type: "key",
              title: "Where to pause",
              points: [
                "After a <b>long subject</b>: <i>Watching online videos / generates…</i>",
                "Before <b>because, which, but, so</b>: <i>…staying in touch / because each text…</i>",
                "At <b>commas</b>.",
                "<b>Never</b> inside a phrase: <i>carbon / footprint</i> ✗"
              ]
            },
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "These sentences are from Griffiths (2020). Tap the <b>/</b> where a speaker should pause. Some / marks are wrong!"
            },
            {
              type: "spot",
              id: "p2-spot",
              label: "Mark the chunks",
              title: "Tap the good pauses",
              hint: "Each / is a possible pause. Tap only the natural ones.",
              paras: [
                "Choosing to send an SMS text message [[*/]] is perhaps the most environmentally-friendly [[/]] way of staying in touch [[*/]] because each text [[/]] generates just 0.014g of CO2e",
                "Globally, [[*/]] watching online [[/]] videos [[*/]] generates 300m tonnes of carbon dioxide a year, [[*/]] which is roughly 1% [[/]] of global emissions.",
                "Simply upgrading our [[/]] equipment less often [[*/]] is one way of cutting our digital [[/]] carbon footprint.",
                "Although the energy needed for a single [[/]] internet search or email is small, [[*/]] 53.6% of the global population [[*/]] now use the internet."
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"Read the sentences aloud <b>with</b> your pauses. Your partner listens: is it clear? Then swap."},
            {
              type: "language",
              title: "Quick pronunciation feedback",
              groups: [
                {"label":"Praise","phrases":["Your pauses made it <b>really clear</b>.","I could easily hear the <b>key numbers</b>."]},
                {"label":"Suggest","phrases":["<b>Try pausing after</b>…","You could <b>stress</b> “…” more.","Your voice was <b>a bit flat</b> at the end."]}
              ]
            }
          ]
        },
        {
          id: "p3",
          short: "Stress Walk",
          minutes: 10,
          grouping: "Class",
          art: "dec10/assets/week2/d5-v-p3.svg",
          title: "Stress Walk",
          goal: "Walk the rhythm. The class guesses the sentence.",
          blocks: [
            {
              type: "cards",
              title: "The five sentences",
              numbered: true,
              items: [
                {"text":"We must reduce plastic waste to save the environment."},
                {"text":"Many companies are investing in clean renewable energy today."},
                {"text":"Sustainable farming helps protect soil, water, plants and animals."},
                {"text":"Governments must create new laws to fight climate change."},
                {"text":"People are changing their habits to reduce carbon emissions."}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"First, decide which words are stressed. Tap them."},
            {
              type: "spot",
              id: "p3-spot",
              label: "Find the stress",
              title: "Tap the stressed words",
              hint: "Stressed words are usually content words.",
              paras: [
                "[[We]] must [[*reduce]] [[*plastic]] [[*waste]] [[to]] [[*save]] [[the]] [[*environment]].",
                "[[*Many]] [[*companies]] [[are]] [[*investing]] [[in]] [[*clean]] [[*renewable]] [[*energy]] [[*today]].",
                "[[*Sustainable]] [[*farming]] helps [[*protect]] [[*soil]], [[*water]], [[*plants]] [[and]] [[*animals]].",
                "[[*Governments]] must [[*create]] [[*new]] [[*laws]] [[to]] [[*fight]] [[*climate]] [[*change]].",
                "[[*People]] [[are]] [[*changing]] [[their]] [[*habits]] [[to]] [[*reduce]] [[*carbon]] [[*emissions]]."
              ]
            },
            {
              type: "steps",
              title: "Play the Stress Walk",
              items: [
                {"who":"alone","text":"One student secretly chooses a sentence and <b>walks</b> it — one step per word."},
                {"who":"alone","text":"Step <b>firmly</b> on stressed words and <b>softly</b> on unstressed words. Don’t speak — only walk!"},
                {"who":"class","text":"Everyone watches and listens to the rhythm, then guesses the sentence."},
                {"who":"class","text":"When the answer is revealed, the class says the sentence aloud with the same stress."}
              ]
            },
            {
              type: "spinner",
              id: "p3-spin",
              title: "Choose the walker’s challenge",
              text: "Spin to get a sentence and a walking style.",
              reels: [
                {"label":"Sentence","items":["1 · plastic waste","2 · renewable energy","3 · sustainable farming","4 · new laws","5 · carbon emissions"]},
                {"label":"Walk like…","items":["a soldier","a news reader","a tired student","a sports coach","a robot"]}
              ],
              note: "The class guesses the sentence — not the style!"
            },
            {
              type: "talk",
              title: "After the game",
              prompts: ["Which sentence was easiest to guess? Why?","How does a clear rhythm help your audience in a presentation?"]
            }
          ]
        },
        {
          id: "p4",
          short: "Intonation",
          minutes: 10,
          grouping: "Groups of 3",
          art: "dec10/assets/week2/d5-v-p4.svg",
          title: "Intonation Guessing Game",
          goal: "Same words, different feelings. Can your group hear the difference?",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d5-intonation.svg",
              alt: "Four voice lines: falling (sure, finished), rising (question, surprise), fall-rise (not sure, polite disagreement) and a wide up-and-down line (strong feeling). Each has an example: Really. / Really? / Well… / Really!",
              caption: "Your voice goes up and down to show meaning"
            },
            {
              type: "key",
              title: "The basics",
              points: [
                "<b>↘ Falling</b>: you are sure, you have finished — statements, facts, conclusions.",
                "<b>↗ Rising</b>: a question, doubt or surprise.",
                "<b>↘↗ Fall-rise</b>: “not completely” — polite disagreement, contrast, uncertainty.",
                "<b>Flat</b>: bored or sad. In a presentation, a flat voice loses your audience!"
              ]
            },
            {"type":"do","n":1,"who":"group","text":"Match each feeling to how your voice sounds."},
            {
              type: "match",
              id: "p4-m",
              title: "How does it sound?",
              left: ["Questioning/doubting","Surprise","Agreement","Disagreement","Sarcasm","Emphasis","Cheerful","Sad","Confident"],
              right: [
                "rises at the end",
                "starts very high — a big jump",
                "falls, warm and calm",
                "fall-rise, slower, often starts with “Well…”",
                "slow, exaggerated, long vowels",
                "extra stress and a pause before the key word",
                "higher, bright and a little faster",
                "low, slow, flat and quiet",
                "steady speed and a clear fall at the end"
              ]
            },
            {
              type: "do",
              n: 2,
              who: "group",
              text: "Spin a sentence and a feeling. Read the sentence with that intonation. The others guess the feeling. Then pass the turn."
            },
            {
              type: "spinner",
              id: "p4-spin",
              title: "Intonation Guessing Game",
              text: "Say it with the feeling. Don’t tell your group which one!",
              reels: [
                {
                  label: "Sentence",
                  items: [
                    "We must reduce plastic waste to save the environment.",
                    "Many companies are investing in clean renewable energy today.",
                    "Sustainable farming helps protect soil, water, plants and animals.",
                    "Governments must create new laws to fight climate change.",
                    "People are changing their habits to reduce carbon emissions."
                  ]
                },
                {"label":"Feeling","items":["Questioning/doubting","Surprise","Agreement","Disagreement","Sarcasm","Emphasis","Cheerful","Sad","Confident"]}
              ],
              note: "Guessers: “I think it was… because your voice…”"
            },
            {
              type: "chat",
              title: "Intonation in a real Q&A",
              right: "Presenter",
              lines: [
                ["Classmate","So data centres will use <mark>more than double</mark> the electricity by 2026? ↗"],
                ["Presenter","Yes, <mark>more than double</mark>. ↘ That’s the estimate in the UN podcast."],
                ["Classmate","Really? ↗ Only four years from now?"],
                ["Presenter","Exactly. ↘ And partly <mark>due to</mark> AI and cryptocurrency mining. ↘"],
                ["Classmate","Well… ↘↗ but isn’t AI also helping to save energy?"],
                ["Presenter","That’s a fair point. ↘ It can do both — that’s the challenge. ↘"]
              ]
            },
            {
              type: "language",
              title: "Sound confident when you present",
              groups: [
                {"label":"Statements ↘","phrases":["The data <b>clearly</b> shows that… ↘","This is a <b>serious</b> problem. ↘"]},
                {
                  label: "Contrast ↗ ↘",
                  phrases: ["It’s not only <b>cheap</b> ↗ — it’s also <b>green</b>. ↘","Some say <b>yes</b> ↗, but the evidence says <b>no</b>. ↘"]
                },
                {"label":"Emphasis","phrases":["And the <b>biggest</b> cause… (pause) …is <b>us</b>.","Not <b>one</b>, but <b>three</b> reasons."]}
              ]
            }
          ]
        },
        {
          id: "p5",
          short: "AI challenge",
          minutes: 10,
          grouping: "Groups of 3",
          art: "dec10/assets/week2/d5-v-p5.svg",
          title: "Chunking Challenge: Can AI Chunk Like a Human?",
          goal: "Listen to an AI voice. Does it pause in the right places?",
          blocks: [
            {
              type: "steps",
              title: "What to do",
              items: [
                {"who":"group","text":"Choose a topic: <b>motivation</b>, <b>study tips</b> or <b>sustainability</b>."},
                {"who":"group","text":"Ask ChatGPT to create a speech that is about <b>3–5 sentences</b> long. (Use the prompt below.)"},
                {"who":"group","text":"Use the <b>Read Aloud</b> function. Listen carefully to how ChatGPT reads the speech aloud."},
                {"who":"group","text":"Copy the speech into the box. Mark it with <b>/</b> to show where you think the natural chunks should be."},
                {"who":"pair","text":"Read it aloud in pairs. Compare with the AI version."}
              ]
            },
            {
              type: "model",
              title: "A prompt you can use",
              text: "Write a short speech (4 sentences) for university students about <b>[study tips / motivation / sustainability]</b>. Use clear academic English."
            },
            {
              type: "fields",
              fields: [
                {
                  id: "p5-speech",
                  label: "The AI speech — mark your chunks with /",
                  placeholder: "Paste the speech here, then add / where a speaker should pause…",
                  rows: 6
                }
              ]
            },
            {"type":"do","n":1,"who":"group","text":"<b>No AI?</b> Practise with this sample speech. Tap the good pauses, then read it aloud."},
            {
              type: "spot",
              id: "p5-spot",
              label: "Mark the chunks",
              title: "Sample speech: your digital footprint",
              paras: [
                "Every time we go online, [[*/]] we use a little [[/]] energy.",
                "One search [[/]] or one email [[*/]] does not seem like much, [[*/]] but billions of people [[/]] are doing it [[*/]] every single day.",
                "So before you stream [[/]] another video, [[*/]] ask yourself one [[/]] simple question: [[*/]] do I really need this?"
              ]
            },
            {
              type: "talk",
              title: "Discuss with your group",
              prompts: [
                "Does the AI pause in the right places (chunks)?",
                "Are the pauses helping or confusing?",
                "How would <b>you</b> chunk it differently?",
                "Which version is clearer and more natural — yours or the AI’s? Why?"
              ]
            },
            {
              type: "fields",
              fields: [{"id":"p5-notes","label":"Our findings: AI vs human","placeholder":"The AI paused after… but a human would pause after…","rows":3}]
            },
            {
              type: "checklist",
              id: "p5-check",
              title: "My presentation sound check",
              meter: ["ticked","Ready to sound great!"],
              items: [
                "I group my words into chunks and pause between them.",
                "I stress the key words — nouns, verbs, numbers.",
                "My voice goes down at the end of a statement.",
                "My voice is not flat — it moves up and down.",
                "I practised my part aloud at least three times."
              ]
            },
            {
              type: "tip",
              text: "The Peer and Teacher Feedback Tool asks: “We could hear the presenters using chunking, pausing and stress” and “intonation (speaking was not ‘flat’)”. Use this checklist before your Week 3 presentation."
            }
          ]
        }
      ]
    },
    {
      id: "rspres",
      number: "05",
      code: "13A",
      minutes: 90,
      tone: "plum",
      art: "dec10/assets/week2/s-rspres.svg",
      title: "Group research summary presentation groups 1 & 2",
      subtitle: "Present, answer, give feedback",
      outcome: "Deliver a structured presentation, answer audience questions spontaneously and make judgements about your own and your peers’ presentations.",
      activities: [
        {
          id: "g1",
          short: "Where are we?",
          minutes: 5,
          grouping: "Class",
          title: "Group Research Summary Presentations",
          goal: "Know today’s plan.",
          blocks: [
            {
              type: "download",
              id: "feedback-tool",
              note: "Download it <b>before</b> the presentations start. Fill in one form for each group. Tick <b>Research Summary Presentation</b> at the top."
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d3-rs-timeline.svg",
              size: "wide",
              alt: "Day 1 research alone; Day 2 share and prepare as a group; Day 4 (today) presentations 1 and 2; Day 5 presentations 3, 4 and 5.",
              caption: "Today: Presentations #1 and #2."
            },
            {
              type: "key",
              title: "Today",
              points: [
                "<b>Topic:</b> Exploring Our Digital Carbon Footprint · <b>Rhetorical Functions:</b> Cause and Effect",
                "Each group presents for <b>8–10 minutes</b> + <b>5 minutes</b> for individual questions.",
                "Questions today: <b>probing and clarification</b> only. AST questions come in Week 3.",
                "No mark — just peer and teacher feedback with the <b>Peer and Teacher Presentation Feedback Tool</b>."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d3-procedure.svg",
              size: "wide",
              alt: "Four steps per group: present (8–10 min), questions (10 min), prepare feedback (5–7 min), give feedback (5–7 min).",
              caption: "Summary of procedure per group presentation — about 30 minutes."
            },
            {
              type: "order",
              id: "g1-order",
              title: "Put the four steps in order",
              items: [
                "Group presents · other groups listen and complete the peer feedback form",
                "Group reflects and answers individual questions · audience asks questions",
                "Teacher gives feedback to the presenting group · groups prepare their feedback and one action point",
                "Groups share their feedback with their allocated presenter and send the forms"
              ],
              ends: ["First","Last"]
            }
          ]
        },
        {
          id: "g2",
          short: "Get ready",
          minutes: 15,
          grouping: "Presentation groups",
          title: "Last-minute practice",
          goal: "Be ready to present — and ready to listen.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"group","text":"Sit with your presentation group. Run through your talk once, quickly — especially the <b>handovers</b>."},
                {"who":"alone","text":"Open the <b>Peer and Teacher Presentation Feedback Tool</b> (below, or your saved copy)."},
                {"who":"alone","text":"Open the <b>Follow-up questions</b> document so you can ask good questions."}
              ]
            },
            {
              type: "download",
              id: "ip-questions",
              note: "Have it open while Groups 1 and 2 present. Ask one <b>clarification</b> question, then one <b>probing</b> question."
            },
            {
              type: "language",
              title: "Presenting cause and effect — and handing over",
              groups: [
                {
                  label: "Cause → effect (more: Student’s book p. 112)",
                  phrases: ["… leads to / results in …","As a result, …","This is mainly due to …","One major cause of … is …","The more …, the more …"]
                },
                {"label":"Evidence","phrases":["According to …, …","A 2024 report by … found that …","This figure shows that …"]},
                {
                  label: "Handover",
                  phrases: ["Now I’ll hand over to …, who will explain …","Thanks, …. As … said, … . Building on that, …","That was the cause. Now … will look at the effects."]
                }
              ]
            },
            {
              type: "checklist",
              id: "g2-ready",
              title: "Before you start",
              meter: ["ready","Let’s go!"],
              items: [
                "I know my part and my handover sentence",
                "My slides use key words and references",
                "I can say my main source aloud (name + year)",
                "The feedback tool is open",
                "I know which presenter I will give feedback to"
              ]
            }
          ]
        },
        {
          id: "g3",
          short: "Group 1",
          minutes: 30,
          grouping: "Groups",
          title: "Presentation 1 · Group 1",
          goal: "Listen, rate, ask — and give useful feedback to one presenter.",
          blocks: [
            {
              type: "steps",
              items: [
                {
                  who: "group",
                  text: "<b>Step 1 (8–10 min):</b> Group 1 presents. Listen AND complete the feedback tool for <b>your allocated presenter</b>. Start thinking of a clarification or probing question."
                },
                {"who":"alone","text":"<b>Step 2 (10 min):</b> write ONE probing or clarification question. Your teacher chooses 3–5 students to ask."},
                {"who":"group","text":"<b>Step 3 (5–7 min):</b> share your feedback in your group. Agree on <b>at least one action point</b>."},
                {"who":"group","text":"<b>Step 4 (5–7 min):</b> your presenter sits with your group. Give the feedback. Then <b>send</b> the form to them."}
              ]
            },
            {
              type: "fields",
              fields: [
                {
                  id: "g3-q",
                  label: "My question for Group 1",
                  rows: 2,
                  placeholder: "Clarification: What did you mean by …? / Probing: Why did you choose to focus on …?"
                }
              ]
            },
            {
              type: "form",
              id: "g3-tool",
              title: "Peer and Teacher Feedback Tool · Group 1",
              intro: "Choose Yes, Mostly or Needs work. Skip a line if it does not apply (N/A). Add a short comment where you can.",
              observe: "Which presenter are you giving feedback to?",
              sections: [
                {
                  label: "CONTENT DELIVERY",
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
                  label: "Structure & Coherence",
                  items: [
                    "We could follow the presentation easily: the ideas were clearly and logically connected.",
                    "Each group member’s turn flowed naturally and logically from the previous member.",
                    "Each group member’s contribution was equal in time and content.",
                    "Visuals were consistent for each group member and across all group members."
                  ]
                },
                {
                  label: "Engagement",
                  items: [
                    "Body language and eye contact engaged the audience.",
                    "Visuals were clear and helped the audience understand the main ideas.",
                    "The presenters engaged the audience."
                  ]
                },
                {
                  label: "FLUENCY and PRONUNCIATION",
                  items: [
                    "Pronunciation was clear and could be easily understood.",
                    "We could hear the presenters using chunking, pausing and stress in their language.",
                    "We could hear the presenters using intonation in their speaking (speaking was not ‘flat’)."
                  ]
                },
                {
                  label: "LANGUAGE USE",
                  items: [
                    "The grammar used was largely accurate and we could understand the meaning.",
                    "The vocabulary used was largely accurate and we could understand the meaning.",
                    "We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)"
                  ]
                },
                {"label":"QUESTION & ANSWER","items":["Answers were given spontaneously.","Answers were relevant.","Answers were clear."]}
              ],
              fields: [{"id":"g3-tool-action","label":"Action point (at least one)","rows":2,"placeholder":"Next time, try … so that …"}],
              send: true,
              sendLabel: "Send to the presenter",
              sendHint: "Send your completed form to the presenter you gave feedback to, so they can save it in their Feedback & Action Plans folder."
            },
            {
              type: "language",
              title: "Language for giving peer feedback on presentations · Student’s book, p. 102",
              groups: [
                {
                  label: "Suggest",
                  phrases: [
                    "To make it clearer that …, you could …",
                    "To strengthen …, it might help …",
                    "Perhaps consider … -ing … rather than …",
                    "For better …, I suggest you …",
                    "You could possibly …",
                    "It might be beneficial to …"
                  ]
                },
                {"label":"Remind","phrases":["Don’t forget to …","Remember to ...","Be mindful of ...","Try ... to ..., so ..."]},
                {
                  label: "Praise + build",
                  phrases: ["… was good. To make it even better, you might…","I recommend …-ing …, so ...","It would help if …","It would help to ..."]
                }
              ]
            },
            {"type":"tip","text":"Open your Student’s book, page 102, for the full list of phrases for giving peer feedback."}
          ]
        },
        {
          id: "g4",
          short: "Group 2",
          minutes: 30,
          grouping: "Groups",
          title: "Presentation 2 · Group 2",
          goal: "Repeat the same process for Group 2.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"group","text":"<b>Step 1:</b> Group 2 presents (8–10 min). Complete the feedback tool for your allocated presenter."},
                {"who":"alone","text":"<b>Step 2:</b> write ONE probing or clarification question (10 min with answers)."},
                {"who":"group","text":"<b>Step 3:</b> prepare your feedback and at least one action point (5–7 min)."},
                {"who":"group","text":"<b>Step 4:</b> give the feedback to your presenter and send the form (5–7 min)."}
              ]
            },
            {
              type: "fields",
              fields: [{"id":"g4-q","label":"My question for Group 2","rows":2,"placeholder":"Could you clarify …? / How did you come to that conclusion?"}]
            },
            {
              type: "form",
              id: "g4-tool",
              title: "Peer and Teacher Feedback Tool · Group 2",
              intro: "Choose Yes, Mostly or Needs work. Skip a line if it does not apply (N/A). Add a short comment where you can.",
              observe: "Which presenter are you giving feedback to?",
              sections: [
                {
                  label: "CONTENT DELIVERY",
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
                  label: "Structure & Coherence",
                  items: [
                    "We could follow the presentation easily: the ideas were clearly and logically connected.",
                    "Each group member’s turn flowed naturally and logically from the previous member.",
                    "Each group member’s contribution was equal in time and content.",
                    "Visuals were consistent for each group member and across all group members."
                  ]
                },
                {
                  label: "Engagement",
                  items: [
                    "Body language and eye contact engaged the audience.",
                    "Visuals were clear and helped the audience understand the main ideas.",
                    "The presenters engaged the audience."
                  ]
                },
                {
                  label: "FLUENCY and PRONUNCIATION",
                  items: [
                    "Pronunciation was clear and could be easily understood.",
                    "We could hear the presenters using chunking, pausing and stress in their language.",
                    "We could hear the presenters using intonation in their speaking (speaking was not ‘flat’)."
                  ]
                },
                {
                  label: "LANGUAGE USE",
                  items: [
                    "The grammar used was largely accurate and we could understand the meaning.",
                    "The vocabulary used was largely accurate and we could understand the meaning.",
                    "We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)"
                  ]
                },
                {"label":"QUESTION & ANSWER","items":["Answers were given spontaneously.","Answers were relevant.","Answers were clear."]}
              ],
              fields: [{"id":"g4-tool-action","label":"Action point (at least one)","rows":2,"placeholder":"Next time, try … so that …"}],
              send: true,
              sendLabel: "Send to the presenter",
              sendHint: "Send your completed form to the presenter you gave feedback to, so they can save it in their Feedback & Action Plans folder."
            },
            {
              type: "tip",
              text: "<b>Important:</b> by the end of the lesson, all feedback forms must be sent to the presenters — even if you gave the feedback aloud in class."
            }
          ]
        },
        {
          id: "g5",
          short: "Reflect",
          minutes: 10,
          grouping: "Alone → Group",
          title: "Reflection",
          goal: "Learn from today — as a presenter or as the audience.",
          blocks: [
            {
              type: "tabs",
              title: "Choose your tab",
              tabs: [
                {
                  label: "I presented today",
                  blocks: [
                    {
                      type: "fields",
                      fields: [
                        {"id":"g5-well","label":"What did you do well (individually and as a group)?","rows":3},
                        {"id":"g5-better","label":"What do you want to do better in your next presentation (individually and as a group)?","rows":3}
                      ]
                    },
                    {
                      type: "checklist",
                      id: "g5-saved",
                      title: "Save your feedback",
                      items: ["I saved the feedback tool forms from my teacher and peers in my Research & Seminar Presentations – Feedback & Action Plans folder."]
                    }
                  ]
                },
                {
                  label: "I was in the audience",
                  blocks: [
                    {
                      type: "fields",
                      fields: [
                        {"id":"g5-learn","label":"What did you learn from watching today’s presentations?","rows":3},
                        {"id":"g5-use","label":"What will you do in your presentation from what you learned today?","rows":3}
                      ]
                    }
                  ]
                }
              ]
            },
            {"type":"talk","title":"Share in your group","prompts":["One thing I will copy from today’s presenters is …","One thing I will avoid is …"]},
            {
              type: "key",
              title: "After class",
              points: [
                "Continue preparing for the Group research summary presentations timetabled for this week.",
                "Remember also to continue your research for your group’s seminar topic and final Interactive Presentation Assessment."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "testlab",
      number: "06",
      code: "9A",
      minutes: 30,
      tone: "amber",
      art: "dec10/assets/week2/s-testlab.svg",
      title: "Listening Assessment Preparation Homework",
      subtitle: "Your second Test Lab",
      outcome: "You complete the Canvas listening practice using today’s tactics — and you know which one to improve next.",
      activities: [
        {
          id: "t1",
          short: "Test Lab",
          minutes: 30,
          grouping: "Homework",
          art: "dec10/assets/week2/v/v-d10w2d2-e1.svg",
          title: "Test Lab: the listening practice on Canvas",
          goal: "Use four tactics from today in a real practice quiz.",
          blocks: [
            {
              type: "flip",
              title: "Four tactics from today",
              hint: "Turn each card before you start.",
              items: [
                {"front":"Notes under headings","back":"Read the headings before you listen. Put each point under the heading it belongs to. Use symbols: →, ↑, b/c."},
                {
                  front: "Hear the hidden cause",
                  back: "Cause and effect is not always “because”. Listen for <i>by …ing</i>, <i>when …</i>, <i>the more …, the more …</i>, <i>due to</i>."
                },
                {"front":"Count your words","back":"NO MORE THAN THREE WORDS means three. Over the limit = zero."},
                {
                  front: "Why did he say it?",
                  back: "Some questions ask about the speaker’s purpose. Listen to what comes <b>after</b> the sentence — it often explains it."
                }
              ]
            },
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Open <b>Canvas › DEC10 › Week 2 › Listening Assessment Preparation</b> and answer the questions in one sitting, without pausing."
            },
            {"type":"do","n":2,"who":"alone","text":"Then rate yourself. Bring your weakest tactic to class — your teacher will ask."},
            {
              type: "scale",
              id: "t1-notes",
              title: "After the quiz",
              statement: "My notes were organised under clear headings.",
              ends: ["Not at all","Every time"]
            },
            {"type":"scale","id":"t1-cause","statement":"I could hear cause and effect, even without “because”.","ends":["Not at all","Every time"]},
            {"type":"scale","id":"t1-lim","statement":"I kept every short answer inside the word limit.","ends":["Not at all","Every time"]},
            {"type":"fields","fields":[{"id":"t1-next","label":"My weakest tactic, and one thing I will do about it this week","rows":2}]}
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
    ["carbon emissions","an amount of CO₂ released into the atmosphere","Keeping your laptop for six years cuts carbon emissions."],
    ["claim","a key point that supports an argument","The claim is that the figures are disputed."],
    ["allocate","to give a task or a share to someone","Let’s allocate the tasks by Friday."],
    ["transition","a process of changing from one state to another","The digital transition needs the same minerals as the low carbon transition."],
    ["signpost","a phrase that tells the audience where a talk is going","“Now, moving on to …” is a signpost."],
    ["clarification question","a question that asks what exactly a speaker means or claims","What do you mean by “people”?"],
    ["probing question","a question that asks a speaker to explain more or go deeper","Why do you think that figure is important for your point?"],
    ["spontaneous","said naturally, without a script or preparation","Her answers were spontaneous and clear."],
    ["feedback tool","a form that helps you give feedback on the criteria","Complete the feedback tool during the talk."],
    ["action point","one clear thing to do next time","Our action point: practise the handovers."],
    ["chunking","saying words in short meaning groups, with small pauses","Every year, / global production of digital tech / emits …"],
    ["self-regulation","managing your own learning: planning, checking progress and changing your strategy","Self-regulation helps you meet deadlines."],
    ["SMART goal","a goal that is specific, measurable, achievable, relevant and time-bound","I will read 3 articles by Friday."],
    ["eye contact","looking at the people you are talking to","Look up every sentence or two and make eye contact."]
  ]
};
