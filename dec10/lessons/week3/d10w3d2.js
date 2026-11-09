/* DEC10 · Week 3 · Day 2 — Green skills, real jobs.
   Built from the Week 3 Teacher's Book, ordered and timed by the revised weekly map (Week 3, Tuesday):
   W3 D2. 5A Research summary presentations (30) · 6A Listening to speak (90) · 7A Mediation (120) ·
   8A AST: Digital literacy: Online communication Homework · 9A Listening Assessment Preparation Homework.
   Protected texts are in sources.js ("greening", "greenskills", "vidican") and are never changed here.
   Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w3d2",
  week: 3,
  day: 2,
  title: "Green skills, real jobs",
  duration: "About 4 hours + homework",
  question: "Green skills are in high demand. How can today’s students get ready for the jobs of the future?",
  questionKind: "Big question",
  questionLabel: "Today’s big question · you will need it in the job interview role play and your group presentation",
  journey: "Share your research and plan your group talk, listen to an interview about the rise of green skills and catch its cause-and-effect language, connect three texts like a researcher — then use them all in a job interview role play.",
  image: "dec10/assets/week3/hero-d10w3d2.svg",
  imageAlt: "Illustration: a green city of the future with solar roofs, wind turbines and an electric bus. In front, a podcast microphone sends out sound waves to three workers — an engineer in a hard hat, a data scientist with a laptop and a health worker. On the right, a job interview desk with an HR manager and a candidate. A rising chart says “green skills ↑”.",
  finish: {"title":"Day 3","text":"Homework review (online communication), academic style and the Seminar"},
  goalShort: "the job interview role play",
  sections: [
    {
      id: "rsgroup",
      number: "01",
      code: "5A",
      minutes: 30,
      tone: "plum",
      art: "dec10/assets/week3/s-d2-rsgroup.svg",
      title: "Research summary presentations",
      subtitle: "Be the expert — then group causes and effects into one talk",
      outcome: "You reflect on your research, say your short summary clearly without reading, and start planning your group presentation with your group.",
      activities: [
        {
          id: "a1",
          short: "How did it go?",
          minutes: 5,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week3/v/v-d10w3d2-a1.svg",
          title: "Activity 1 · Share your individual research summaries",
          goal: "Talk about how you did your research — your focus, your sources and your problems.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week3/d2-rs-timeline.svg",
              size: "wide",
              alt: "Timeline of the research summary task this week. Monday: you research and prepare a summary on your own. Tuesday, today, highlighted: first you share your summary in a group, then your group plans one presentation. Thursday and Friday: groups give their 8–10 minute group presentations.",
              caption: "You are here: <b>Tuesday</b>. First you share, then you plan."
            },
            {
              type: "sticky",
              color: "yellow",
              title: "Say it like an academic · phrase of the day",
              text: "<p><b>“My research focuses on …”</b> — not “I read about …”. Use it three times today!</p>"
            },
            {
              type: "steps",
              title: "Stand-up circle",
              items: [
                {"who":"group","text":"<b>Stand up.</b> Make a circle of <b>3 or 4</b>. One person holds a pen — the <b>talking pen</b>."},
                {"who":"group","text":"The person with the pen spins the wheel and answers in <b>one minute</b>. Use one phrase from the bank below."},
                {"who":"group","text":"Pass the pen to the left. The next person spins. Go round until the teacher says <b>stop</b>."},
                {"who":"group","text":"<b>Last turn:</b> each person says one research problem in one sentence. Your group chooses one problem to tell your teacher."}
              ]
            },
            {
              type: "spinner",
              id: "a1-spin",
              title: "Talk about your research",
              text: "By the end, everyone answers every question. Give a real example each time.",
              reels: [
                {
                  label: "Question",
                  items: [
                    "What aspect of the topic did you decide to research — and why that aspect?",
                    "How and where did you look for your sources?",
                    "Did you have trouble finding useful sources? What did you do?",
                    "Which research skills from the Academic Success Toolkit (AST) did you use? (a database search, the library, the CRAAP test …)",
                    "What was the most surprising thing you found about the workforce of the future?",
                    "If you started your research again, what would you do differently?"
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Useful language: talking about your research",
              groups: [
                {
                  label: "Your focus",
                  phrases: ["I decided to focus on … because …","I chose this aspect of the topic as …","My research looks at the causes / effects of …"]
                },
                {
                  label: "Your sources",
                  phrases: [
                    "I searched the library database using the key words … and …",
                    "I narrowed my search to articles from the last five years.",
                    "I applied the CRAAP test — the source is current and relevant because …"
                  ]
                },
                {
                  label: "Problems and solutions",
                  phrases: ["At first I struggled to find …, so I …","Most of the results were too general / too old.","What really helped was …","Next time, I would …"]
                }
              ]
            },
            {"type":"tip","text":"<b>Be honest.</b> Problems are normal in research. Tell your teacher about them now — before Thursday."}
          ]
        },
        {
          id: "a2",
          short: "Rehearse",
          minutes: 3,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d2-a2.svg",
          title: "Revise your notes",
          goal: "Get ready to SAY your summary, not read it.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Spend <b>1 minute</b> on your notes. Circle any word that is tricky to say. Ask your teacher if you need help."},
            {"type":"do","n":2,"who":"alone","text":"<b>Stand up and face the wall.</b> Say your first <b>three sentences</b> quietly to the wall. Look at your notes, then look up and speak. Never read and speak at the same time!"},
            {"type":"do","n":3,"who":"pair","text":"<b>Turn round.</b> Say the same three sentences to the person next to you. They show <b>one finger</b> each time you look down. Fewer fingers = better!"},
            {
              type: "squeeze",
              id: "a2-sq",
              title: "Want more? Notes, not a script",
              hint: "Optional, if you finish early. Good speaking notes are short. Turn each sentence into notes with symbols and abbreviations (→ = leads to, ↑ = increase, w/ = with). Then compare with the model.",
              items: [
                {
                  text: "Many companies say that they cannot find enough workers with the right digital skills.",
                  max: 40,
                  model: "many co.s → can’t find workers w/ right digital skills"
                },
                {
                  text: "Automation is changing the tasks in many jobs, so a lot of workers will need to retrain.",
                  max: 34,
                  model: "automation → tasks change → workers retrain"
                }
              ]
            },
            {
              type: "language",
              title: "A frame for your 2-minute summary",
              groups: [
                {"label":"Start","phrases":["The article I chose is called … It was written by … in …","My research focuses on …"]},
                {"label":"Main idea","phrases":["The main finding is that …","According to … (2023), …","The authors argue / show / suggest that …"]},
                {"label":"Cause and effect","phrases":["This is mainly due to …","As a result, …","This trend is driving …"]},
                {"label":"Finish","phrases":["So, in short, …","What I found most interesting was …","I’m happy to answer any questions."]}
              ]
            }
          ]
        },
        {
          id: "a3",
          short: "Be the expert",
          minutes: 5,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week3/v/v-d10w3d2-a3.svg",
          title: "Share your summaries",
          goal: "Give your 2-minute summary as the expert. Ask questions to check you understand the others.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"group","text":"<b>Give everyone a job</b> (see the cards). Jobs move one person to the left after each speaker."},
                {"who":"group","text":"Take turns. The speaker <b>stands up</b> and says (not reads!) the <b>2-minute</b> summary. Be the expert!"},
                {"who":"group","text":"After each summary, the question master asks <b>1–2 follow-up questions</b>. Then anyone can ask one more."},
                {"who":"alone","text":"While you listen, fill in one row for each speaker. You need this table to plan your group talk."}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-movement-roles.svg",
              size: "wide",
              alt: "Four students around a table, each with a job badge: the speaker standing with notes, the timekeeper with a stopwatch, the question master with a question mark card, and the language monitor with a tick list. A curved arrow shows that the jobs move one place to the left after each turn.",
              caption: "Four jobs, one table. After each speaker, the jobs move <b>one place to the left</b>."
            },
            {"type":"tip","text":"<b>Paper job cards?</b> Your teacher may give your group a card for each job. Hold your card, then pass it to the left after each speaker. No cards? Use the job cards on this page."},
            {
              type: "cards",
              title: "Group jobs",
              items: [
                {"label":"Speaker","text":"Stands up. Speaks for 2 minutes from notes. Eyes up!"},
                {"label":"Timekeeper","text":"Shows 1 finger at 1 minute and says “Time!” at 2 minutes."},
                {"label":"Question master","text":"Asks the first follow-up question. Starts with “Could you explain …?”"},
                {"label":"Language monitor","text":"Ticks every phrase from the bank the speaker uses. Says the total at the end."}
              ]
            },
            {
              type: "table",
              id: "a3-tab",
              title: "Our group’s research",
              columns: ["Speaker","Their focus","Main finding","Cause or effect?","My question"],
              fixed: ["Me","Student 2","Student 3","Student 4"]
            },
            {
              type: "language",
              title: "Follow-up questions",
              groups: [
                {"label":"Check the meaning","phrases":["Could you explain what you mean by …?","So, are you saying that …?","Sorry, could you say that number again?"]},
                {"label":"Ask for more","phrases":["Where does that figure come from?","Can you give an example of a job that …?","Is that a cause or an effect of the change?"]},
                {"label":"Answer a question","phrases":["Good question. What I mean is …","Let me check my notes … yes, it was …","I’m not completely sure, but the article suggests …"]}
              ]
            }
          ]
        },
        {
          id: "a4",
          short: "Tell the class",
          minutes: 2,
          grouping: "Group → Class",
          art: "dec10/assets/week3/v/v-d10w3d2-a4.svg",
          title: "Share with the class (if time)",
          goal: "Choose one summary from your group and tell the class about it.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Choose one card and agree what to say. Choose a <b>reporter</b> — someone who has not spoken to the class yet today."},
            {"type":"do","n":2,"who":"class","text":"<b>Hot seat.</b> The reporter <b>stands up</b> and talks for 30 seconds. The class can ask <b>one</b> question. At the end, the class votes with hands up: which summary would you most like to read?"},
            {
              type: "cards",
              title: "Choose one",
              numbered: true,
              items: [
                {"label":"Most relevant","text":"The article that best helps us understand this week’s topic."},
                {"label":"Most interesting","text":"The summary you found most interesting — and why."},
                {"label":"Most challenging","text":"The most challenging article — and why it was hard."},
                {"label":"Your own idea","text":"Something else your group noticed."}
              ]
            },
            {
              type: "language",
              groups: [
                {
                  label: "Report to the class",
                  phrases: [
                    "In our group, the most relevant summary was …’s, because it explains …",
                    "We all found …’s research interesting, as it shows that …",
                    "The most challenging article was …, mainly because of the technical language."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "a5",
          short: "Group it",
          minutes: 7,
          grouping: "Same group",
          art: "dec10/assets/week3/v/v-d10w3d2-a5.svg",
          title: "Activity 2 · Prepare your group presentation",
          goal: "Learn the big rule: group the ideas — don’t just list each person’s summary.",
          blocks: [
            {
              type: "key",
              title: "Your group presentation",
              points: [
                "<b>8–10 minutes</b>. Stay in the <b>same group</b>. Every member speaks.",
                "This week’s focus: the <b>causes and effects of the workforce of the future</b>.",
                "<b>Don’t just list</b> each student’s summary. <b>Group</b> similar and different focus areas and findings.",
                "You prepare <b>outside class time</b>. Every group must be ready on <b>Thursday</b>."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-group-not-list.svg",
              size: "wide",
              alt: "Two ways to plan a group talk. Left, crossed out: four separate boxes, Student 1, 2, 3 and 4, one after another. Right, with a tick: two big boxes, Causes (students 1, 3 and 4) and Effects (student 2), with the similar ideas joined together inside each box.",
              caption: "List ✗ → Group ✓. The audience hears one clear story, not four separate talks."
            },
            {"type":"do","n":1,"who":"group","text":"<b>Human sort — stand up!</b> One side of your table is <b>CAUSE</b>, the other side is <b>EFFECT</b>. Each person reads one finding below aloud and walks to the right side. The group agrees or says “Move!”. Then check on screen."},
            {"type":"tip","text":"Your teacher may give your group <b>paper cards</b> and two signs, <b>CAUSE</b> and <b>EFFECT</b>, for the table. No cards? Each person chooses one finding in the sort below and reads it from the screen."},
            {
              type: "sort",
              id: "a5-sort",
              title: "Cause or effect? The workforce of the future",
              hint: "A cause makes the job market change. An effect is what happens because of it.",
              buckets: [{"label":"Cause","letter":"C"},{"label":"Effect","letter":"E"}],
              items: [
                {"text":"The global shift towards a green economy","answer":0,"why":"This pushes the job market to change — a cause."},
                {"text":"Climate targets for 2030 and 2050","answer":0},
                {"text":"AI and automation in the workplace","answer":0},
                {"text":"New laws on pollution and waste","answer":0},
                {"text":"Companies look for more green talent.","answer":1,"why":"This happens because of the change — an effect."},
                {"text":"Some jobs disappear and new jobs appear.","answer":1},
                {"text":"Workers need to upskill or retrain.","answer":1},
                {"text":"Universities update their courses.","answer":1}
              ]
            },
            {"type":"do","n":2,"who":"group","text":"Now do the same with <b>your own</b> research. Each person says their main finding: “My finding is a <b>cause</b> / an <b>effect</b> because …”. Write it in your row."},
            {"type":"table","id":"a5-tab","title":"Your group template","columns":["Student","Cause","Effect"],"fixed":["1","2","3","4"]},
            {
              type: "tip",
              text: "Now <b>group</b> the rows. Put similar causes together. Then put similar effects together. Say: “<b>Both</b> my finding and …’s finding show that …”"
            }
          ]
        },
        {
          id: "a6",
          short: "Plan it",
          minutes: 8,
          grouping: "Same group",
          art: "dec10/assets/week3/v/v-d10w3d2-a6.svg",
          title: "Plan your Group Presentation",
          goal: "Agree on the structure, the language, the sources, the visuals and the body language.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"<b>Planning meeting.</b> Choose your job for this meeting. Each job is different — tap yours."},
            {"type":"tip","text":"Paper job cards from your teacher? Use the four <b>Plan</b> cards: Chair, Timekeeper, Devil’s advocate, Secretary. No cards? Tap your job below."},
            {
              type: "cards",
              title: "My job in the planning meeting",
              pick: "a6-role",
              items: [
                {"label":"Chair","text":"Leads the meeting. Says: “Let’s start with …” · “Shall we move on to …?”"},
                {"label":"Timekeeper","text":"8 minutes, 4 jobs. Says: “We have two minutes left.”"},
                {"label":"Devil’s advocate","text":"Asks the hard question: “But is that really a cause?” · “What would the audience ask?”"},
                {"label":"Secretary","text":"Writes the plan in “Our plan” below and reads it back at the end."}
              ]
            },
            {
              type: "order",
              id: "a6-order",
              title: "Put the structure in order",
              items: ["Introduce your group’s focus area(s)","Summarise each focus area","Conclude with an overall “take-away” from your research"],
              ends: ["First","Last"],
              why: "Introduction → body (grouped by focus) → conclusion. A take-away can be a particularly interesting or controversial point, or something you would like to research next."
            },
            {
              type: "tabs",
              title: "Plan it step by step",
              tabs: [
                {
                  label: "Signposts",
                  blocks: [
                    {
                      type: "language",
                      groups: [
                        {"label":"Introduce","phrases":["Today our group will look at the causes and effects of …","We have grouped our findings into two parts: …"]},
                        {"label":"Hand over","phrases":["Now I’ll hand over to …, who will talk about …","… will now explain the effects of …"]},
                        {"label":"Take over","phrases":["Thanks, … . Building on that, …","In contrast to …’s finding, my research shows …","Similarly, my source found that …"]},
                        {"label":"Conclude","phrases":["To sum up our findings, …","Our main take-away is that …","One question we would like to research further is …"]}
                      ]
                    }
                  ]
                },
                {
                  label: "Sources",
                  blocks: [
                    {
                      type: "language",
                      groups: [
                        {"label":"Refer to sources","phrases":["According to … (2023), …","A study by … found that …","As … (2020) points out, …","… (2018) reports that …"]},
                        {"label":"Combine sources","phrases":["Both … and … agree that …","This is supported by …","However, … takes a different view."]}
                      ]
                    }
                  ]
                },
                {
                  label: "Visuals",
                  blocks: [
                    {
                      type: "cards",
                      items: [
                        {"label":"PowerPoint","text":"Few words, big numbers, one idea per slide."},
                        {"label":"Mind map","text":"Causes on one side, effects on the other — perfect for this topic."},
                        {"label":"One chart","text":"Show one surprising number, e.g. the growth in green jobs."}
                      ]
                    }
                  ]
                },
                {
                  label: "Body language",
                  blocks: [
                    {
                      type: "cards",
                      items: [
                        {"label":"Eyes up","text":"Look at the audience, not your notes."},
                        {"label":"Open hands","text":"Use your hands to show “first … second …”."},
                        {"label":"Face the room","text":"Stand, don’t hide behind the screen."}
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "checklist",
              id: "a6-check",
              title: "Before you leave, agree on …",
              items: [
                "the structure: introduction, grouped body, take-away",
                "the functional language that signals each part",
                "how each person refers to their sources",
                "which supporting visuals to use (PowerPoint or a mind map)",
                "appropriate body language",
                "when and where you will practise"
              ]
            },
            {
              type: "fields",
              title: "Our plan",
              fields: [
                {"id":"a6-focus","label":"Our focus area(s)","placeholder":"The causes and effects of …","rows":2},
                {"id":"a6-who","label":"Who speaks when","placeholder":"1 … (introduction) · 2 … · 3 … · 4 … (take-away)","rows":2},
                {"id":"a6-when","label":"When and where we practise","placeholder":"e.g. Wednesday 4 pm, library room 2 / online"}
              ]
            },
            {
              type: "language",
              title: "Group-meeting moves",
              groups: [
                {"label":"Lead","phrases":["Let’s start with the structure.","Shall we move on to the visuals?","So, are we all agreed that …?"]},
                {"label":"Challenge politely","phrases":["Just to play devil’s advocate, …","I’m not sure that works. What if …?","Could we look at that from another angle?"]},
                {"label":"Agree an action","phrases":["So, … will prepare the slides by Wednesday.","Let’s meet on … at … to practise.","Can someone send a summary in the group chat?"]}
              ]
            },
            {"type":"tip","text":"<b>Practise your presentation!</b> You prepare in your own time. Every group must be ready to present on Thursday."},
            {
              type: "fields",
              title: "Exit ticket · 5A",
              fields: [{"id":"a6-exit","label":"Finish the sentence for Thursday: “Our group’s research focuses on … We have grouped our findings into …”","rows":2,"placeholder":"Our group’s research focuses on …"}]
            }
          ]
        }
      ]
    },
    {
      id: "listening",
      number: "02",
      code: "6A",
      minutes: 90,
      tone: "teal",
      art: "dec10/assets/week3/s-d2-listening.svg",
      title: "Listening to speak",
      subtitle: "A Yahoo Finance interview: why the demand for green skills is rising",
      outcome: "You take notes with a mind map, find cause-and-effect language in use, and use it to talk about green jobs with your classmates.",
      activities: [
        {
          id: "b1",
          short: "Warmer",
          minutes: 10,
          grouping: "Small groups",
          art: "dec10/assets/week3/v/v-d10w3d2-b1.svg",
          title: "Warmer",
          goal: "Name as many green jobs as you can — and say which ones interest you.",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week3/d2-tech-spectrum.svg",
              alt: "A spectrum of six green job areas, from lower technological sophistication on the left to higher technological sophistication on the right: waste water treatment, recycling, solar panels, bioenergy, battery energy storage and electric vehicles.",
              title: "Six green job areas",
              hint: "Tap each area. Then choose one area for your group.",
              size: "wide",
              spots: [
                {"x":11,"y":52,"label":"1","title":"Waste water treatment","text":"Cleaning used water from homes and factories so it can go back to rivers or be used again. Lower technological sophistication.","color":"#2d7a9a"},
                {"x":26,"y":52,"label":"2","title":"Recycling","text":"Collecting, sorting and processing waste so materials can be used again.","color":"#4c7a2e"},
                {"x":42,"y":52,"label":"3","title":"Solar panels","text":"Making, installing and looking after panels that turn sunlight into electricity.","color":"#b07d12"},
                {"x":58,"y":52,"label":"4","title":"Bioenergy","text":"Making energy from plants, food waste and other natural materials.","color":"#2f7d6b"},
                {"x":74,"y":52,"label":"5","title":"Battery energy storage","text":"Storing electricity from the sun and wind so we can use it later.","color":"#3a58a0"},
                {"x":89,"y":52,"label":"6","title":"Electric vehicles","text":"Designing, building, charging and repairing electric cars, buses and trucks. Higher technological sophistication.","color":"#c4562f"}
              ]
            },
            {
              type: "sticky",
              color: "green",
              title: "Say it like an academic · phrase of the day",
              text: "<p><b>“This is largely due to …”</b> — say the cause, not just the fact.</p>"
            },
            {
              type: "steps",
              title: "Job race · team points",
              items: [
                {"who":"group","text":"Your group is a team. Look at the job areas. Choose <b>one</b> — no two teams the same."},
                {"who":"group","text":"<b>Beat the clock!</b> One writer, everyone else calls out jobs for that area. You have <b>3 minutes</b>. One point for every real job."},
                {"who":"class","text":"Teams read their lists aloud. Another team can say “Challenge!” if a job is not real. The team with the most points wins."}
              ]
            },
            {
              type: "fields",
              fields: [{"id":"b1-jobs","label":"Our area and our job list","placeholder":"Solar panels: installer, engineer, salesperson …","rows":3}]
            },
            {"type":"do","n":1,"who":"class","text":"<b>Opinion line — stand up!</b> One wall is “I’d love a green job”. The other wall is “Not for me”. Stand on the line where you are. Mark your place on the line below too."},
            {"type":"scale","id":"b1-line","title":"Opinion line","statement":"I would like to work in one of these green job areas.","ends":["Not for me","I’d love it"],"mid":"Not sure"},
            {"type":"do","n":2,"who":"pair","text":"Talk to the person <b>next to you</b> on the line, then to someone at the <b>other end</b>. Give one reason with a phrase from the bank."},
            {
              type: "language",
              title: "Talk about jobs you like (or don’t)",
              groups: [
                {"label":"Interested","phrases":["I’d love to work as … because …","… really appeals to me, as …","I can see myself working in … in the future."]},
                {"label":"Not for me","phrases":["I wouldn’t enjoy … because …","… doesn’t really suit me.","I’m not sure I’d be good at …, to be honest."]},
                {"label":"Give a reason","phrases":["It seems well paid / secure.","It would make a real difference to the planet.","I prefer working outdoors / with people / with data."]}
              ]
            }
          ],
          answers: {
            title: "Suggested answers",
            items: [
              ["The diagram","It shows examples of green technologies along a spectrum of sophistication and market development for developing countries (Vidican Auktor, 2020). E.g. solar PV technologies are expected to spread quickly in developing countries and have a medium degree of technological sophistication. The number of jobs created in this sector is expected to be relatively large, with a medium skill intensity."],
              ["Example jobs","Waste water: plant operator, water engineer, lab technician · Recycling: sorting worker, recycling coordinator, waste manager · Solar panels: installer, electrician, solar engineer, salesperson · Bioenergy: plant operator, farmer, chemist · Batteries: battery engineer, chemist, technician · Electric vehicles: EV mechanic, charging station installer, designer, software engineer."]
            ]
          }
        },
        {
          id: "b2",
          short: "Words",
          minutes: 10,
          grouping: "Alone → Class",
          art: "dec10/assets/week3/v/v-d10w3d2-b2.svg",
          title: "Vocabulary",
          goal: "Learn nine words from the interview — from your classmates, not your phone.",
          blocks: [
            {
              type: "key",
              title: "No phones, no laptops",
              points: ["This task is for learning <b>from one another</b>. Don’t look up the words — ask your classmates!"]
            },
            {"type":"do","n":1,"who":"alone","text":"Look at the nine words in the bingo card. Write down the words you <b>don’t know</b>."},
            {"type":"do","n":2,"who":"class","text":"Walk around the room. Ask classmates to explain your words. When someone can do a square, write their name in it. Four in a row = <b>BINGO!</b>"},
            {
              type: "bingo",
              id: "b2-bingo",
              title: "Find someone who …",
              hint: "Write a classmate’s name in a square when they can do it. Each name only once!",
              squares: [
                {"text":"can explain <b>green talent</b>","ask":"What does “green talent” mean?"},
                {"text":"can explain <b>green sector</b>","ask":"What is the green sector?"},
                {"text":"can explain <b>greening roles</b>","ask":"What are greening roles?"},
                {"text":"knows what <b>VP</b> stands for","ask":"What does VP stand for?"},
                {"text":"can explain <b>slacken</b>","ask":"What does “slacken” mean?"},
                {"text":"can explain <b>auto workers</b>","ask":"Who are auto workers?"},
                {"text":"can explain <b>sixfold</b>","ask":"What does “sixfold” mean?"},
                {"text":"can explain <b>in tandem</b>","ask":"What does “in tandem” mean?"},
                {"text":"can explain <b>the fabric of an organisation</b>","ask":"What is the fabric of an organisation?"},
                {"text":"can name a job that is going green","ask":"Can you name a job that is going green?"},
                {"text":"has a green skill already","ask":"Do you have a green skill?"},
                {"text":"would like to work in the green sector","ask":"Would you like to work in the green sector?"},
                {"text":"can say <b>SIX</b>fold with the right stress","ask":"Can you say “sixfold”?"},
                {"text":"knows the opposite of <b>slacken</b>","ask":"What is the opposite of “slacken”?"},
                {"text":"recycles at home every day","ask":"Do you recycle at home?"},
                {"text":"uses AI in their studies","ask":"Do you use AI in your studies?"}
              ]
            },
            {"type":"do","n":3,"who":"class","text":"Now check together. Match each word to its meaning. Then say each word after your teacher."},
            {
              type: "match",
              id: "b2-match",
              title: "Check the meanings",
              left: ["green talent","green sector","greening roles","slacken","auto workers","sixfold","fabric of an organisation","tandem","VP"],
              right: [
                "someone who has green skills",
                "a business that concentrates on environmental factors",
                "jobs that are in the process of going green",
                "reduce / decrease",
                "people who work in the motor vehicle manufacturing industry",
                "six times greater",
                "the inner weaving that shapes the character of a company",
                "together",
                "Vice President"
              ]
            },
            {"type":"tip","text":"<b>Pronunciation:</b> stress the strong syllable — GREEN <b>TA</b>lent · <b>SLA</b>cken · <b>SIX</b>fold · <b>TAN</b>dem · <b>FA</b>bric · V<b>P</b>."},
            {"type":"do","n":4,"who":"pair","text":"<b>Use it in a tutorial.</b> Choose two words. Make one sentence you could say in a tutorial about jobs, e.g. “Many companies are competing for <b>green talent</b>, and some roles now work <b>in tandem</b> with AI.” Say it to your partner — they say it back to you."}
          ]
        },
        {
          id: "b3",
          short: "Gist",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d2-b3.svg",
          title: "Listening for gist",
          goal: "Use the title to predict the interview — then listen once to check.",
          blocks: [
            {
              type: "sticky",
              color: "green",
              title: "The title",
              text: "<p>You are going to listen to an interview titled <b>“The demand for ‘green skills’ is on the rise as the world moves to combat climate change.”</b></p>"
            },
            {
              type: "spot",
              id: "b3-spot",
              label: "Key word spotter",
              title: "Tap the key words in the title",
              hint: "Tap the words that carry the meaning. Small grammar words are not key words.",
              paras: ["[[The]] [[*demand]] for [[*‘green skills’]] [[is]] [[*on the rise]] [[*as]] the [[*world]] [[*moves to combat]] [[*climate change]]."]
            },
            {
              type: "talk",
              title: "Discuss with a partner",
              prompts: [
                "What are the key words in the title?",
                "Are there any words in the title that could have multiple meanings?",
                "Is there a clear topic in the title?",
                "What is the causal relationship expressed in the title?",
                "What do you predict the listening will be about?"
              ]
            },
            {
              type: "fields",
              fields: [{"id":"b3-pred","label":"Our prediction","placeholder":"We think the speakers will talk about …","rows":2}]
            },
            {"type":"do","n":1,"who":"class","text":"<b>Stand up or sit down?</b> Your teacher reads each prediction below. <b>Stand up</b> if you think the speakers will talk about it. <b>Stay sitting</b> if you think they won’t. Remember what you did!"},
            {
              type: "cards",
              title: "Will they talk about …?",
              numbered: true,
              items: [
                {"text":"numbers from a job report"},
                {"text":"jobs that don’t look “green”"},
                {"text":"artificial intelligence"},
                {"text":"how much green workers are paid"},
                {"text":"a skills gap"},
                {"text":"electric cars"}
              ]
            },
            {
              type: "listening",
              source: "Hyman and Smith (2023) · Yahoo Finance",
              title: "Demand for “green skills” is on the rise as the world moves to combat climate change",
              videoId: "NcW7TYcAd08",
              audio: "",
              start: 0,
              clip: "the whole interview",
              transcripts: [["greenskills","Transcript (open after listening)"]]
            },
            {"type":"do","n":2,"who":"class","text":"<b>Again!</b> Your teacher reads the predictions again. Now stand up only if you <b>heard</b> it. Who was right most often?"},
            {
              type: "talk",
              title: "After listening",
              prompts: ["Were your predictions correct?","What was the biggest surprise for you?"]
            },
            {
              type: "language",
              groups: [
                {"label":"Predict","phrases":["I expect the speakers to talk about …","The title suggests that …","My guess is that …"]},
                {"label":"Check","phrases":["We were right about …","We didn’t expect them to mention …","Our prediction was partly correct."]}
              ]
            }
          ],
          answers: {
            title: "Suggested answers",
            items: [
              ["Key words","demand · green skills · on the rise · world · combat climate change"],
              ["Multiple meanings","“green” (a colour / good for the environment / new and without experience) · “moves” (physically move / takes action)"],
              ["Causal relationship","“as” = because: the world is acting against climate change → so the demand for green skills is rising."],
              ["Stand up or sit down","Heard: 1 (the LinkedIn report: 22.4% of job postings …) · 2 (fleet managers, data scientists …) · 3 (AI) · 4 (a host asks about pay — Sue answers about employability instead) · 5 (only one in eight workers). Not really: 6 — they talk about <i>auto workers</i>, but not electric cars directly."]
            ]
          }
        },
        {
          id: "b4",
          short: "Mind map",
          minutes: 30,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d2-b4.svg",
          title: "Listening for detail: Note taking (Mind Map)",
          goal: "Take notes as a mind map, then explain the interview to a partner from your map.",
          blocks: [
            {
              type: "key",
              title: "The mind map method",
              points: [
                "Put the topic in the <b>centre</b>: “Green skills”.",
                "Draw one <b>branch</b> for each big idea: <b>Definition</b> · <b>Impact on labour market</b>.",
                "Add small branches with <b>key words and numbers</b> only — no full sentences.",
                "Use <b>arrows</b> (→) to show causes and effects, and symbols (↑ ↓ %)."
              ],
              numbered: true
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-mindmap.svg",
              size: "wide",
              alt: "An empty mind map to copy. In the centre: Green skills. One main branch: Definition, with small empty branches for what it is and examples. A second main branch: Impact on labour market, with small empty branches for numbers, the skills gap, greening roles and the future. Arrows and symbols are shown in a key at the bottom.",
              caption: "Copy this shape onto a big piece of paper before you listen."
            },
            {"type":"tip","text":"Your teacher may give you a <b>printed mind-map sheet</b> with this shape. No sheet? Copy the shape onto any big piece of paper."},
            {"type":"do","n":1,"who":"alone","text":"Watch again. Take notes using the mind map method <b>as you listen</b>. Include: <b>“Green Skills”</b> · <b>Definition</b> · <b>Impact on labour market</b>."},
            {
              type: "listening",
              source: "Hyman and Smith (2023) · Yahoo Finance",
              title: "Demand for “green skills” is on the rise as the world moves to combat climate change",
              videoId: "NcW7TYcAd08",
              audio: "",
              start: 0,
              clip: "the whole interview",
              transcripts: [["greenskills","Transcript (open after listening)"]]
            },
            {
              type: "checklist",
              id: "b4-check",
              title: "Look at your mind map",
              items: [
                "Is it logical to you?",
                "Does it explain the key concepts from the listening?",
                "Does it explain the key causal relationships?",
                "Do you need to add or remove anything for clarity?"
              ]
            },
            {
              type: "outline",
              id: "b4-out",
              title: "Compare: build a model mind map",
              hint: "These notes are in the right order but all on the left. Indent each line to show the main branches (level 1) and the small branches (level 2). Then compare with your own map.",
              items: [
                [0,"Green skills"],
                [1,"Definition"],
                [2,"directly combat the effects of climate change"],
                [2,"take out pollution / preserve natural resources"],
                [2,"e.g. water preservation, energy efficiency"],
                [1,"Impact on labour market"],
                [2,"22.4% of job postings → at least 1 green skill"],
                [2,"jobs w/ green skills ↑ 9% every year (past 5 yrs)"],
                [2,"skills gap: only 1 in 8 workers has green skills"],
                [2,"greening roles: fleet managers, data scientists …"],
                [2,"green skills → 30% more likely to get hired"]
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"<b>Stand up and find a partner from another table.</b> Take turns. <b>Speaker:</b> use your mind map to explain the listening in <b>2 minutes</b>. <b>Listener:</b> listen actively, then give feedback with the questions below."},
            {
              type: "tabs",
              title: "Speaker and listener",
              tabs: [
                {
                  label: "Speaker",
                  blocks: [
                    {
                      type: "cards",
                      title: "Don’t forget …",
                      items: [
                        {"label":"Structure","text":"Start with the definition. Then move on to the impact on the labour market."},
                        {"label":"Linking words","text":"Show the connections between ideas: because, as a result, this means that …"},
                        {"label":"Go further","text":"Extend your talk beyond what is written on your map."}
                      ]
                    }
                  ]
                },
                {
                  label: "Listener",
                  blocks: [
                    {
                      type: "talk",
                      title: "Actively listen to your partner",
                      prompts: [
                        "Was the explanation of the mind map logical?",
                        "Did it cover the main message of the listening?",
                        "Did they cover anything you didn’t put on your mind map?"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Explain your mind map",
              groups: [
                {"label":"Start","phrases":["The interview is about …","In the centre of my map, I have …","Let me start with the definition."]},
                {"label":"Move along the map","phrases":["The second branch is about …","Moving on to the impact on the labour market, …","This links to … because …"]},
                {"label":"Numbers","phrases":["According to the LinkedIn report, …","Almost a quarter of job postings …","The number has grown by … every year."]},
                {"label":"Give feedback","phrases":["Your explanation was really clear, especially …","I think you missed the part about …","I also noted that …"]}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-movement-gallery.svg",
              size: "wide",
              alt: "A gallery walk. Mind maps lie on three desks. Students walk around the room in a loop with sticky notes. One student sticks a yellow note on a mind map that says “Add the 30%!”; another sticks a green tick note.",
              caption: "Gallery walk: walk, read, stick a note, move on."
            },
            {
              type: "steps",
              title: "Gallery walk · 6 minutes",
              items: [
                {"who":"alone","text":"Leave your mind map on your desk. Take <b>three</b> sticky notes (or small pieces of paper)."},
                {"who":"class","text":"Walk round the room. Read other mind maps. On <b>three</b> maps, stick one note: a <b>✓</b> for a great idea, or “<b>You could add …</b>”."},
                {"who":"alone","text":"Go back to your map. Read your notes. Add <b>one</b> thing to your map in a different colour."}
              ]
            }
          ]
        },
        {
          id: "b5",
          short: "Questions",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d2-b5.svg",
          title: "Building Understanding",
          goal: "Answer test-style questions about the interview.",
          blocks: [
            {
              type: "limit",
              id: "b5-lim",
              title: "Questions 1–3",
              rule: "Answer questions 1–3 with NO MORE THAN THREE WORDS per question",
              max: 3,
              items: [
                {
                  q: "1. 22.4% refers to the number of ________ requiring at least one green skill.",
                  accept: ["job postings","job posts","jobs postings"],
                  model: "job postings",
                  why: "“Within the last year, 22.4% of job postings required at least one green skill.”"
                },
                {
                  q: "2. Last year there were over 20% increase in jobs requiring ________ .",
                  accept: ["green skills","green skill"],
                  model: "green skills",
                  why: "“Last year, we saw over 20% increase in jobs requiring green skills.”"
                },
                {
                  q: "3. Workers with green skills are 30% more likely to ________ .",
                  accept: ["get hired","be hired","get a job"],
                  model: "get hired",
                  why: "“… workers with green skills are 30 percent more likely to get hired than workers who don’t.”"
                }
              ]
            },
            {
              type: "bet",
              id: "b5-bet",
              title: "Questions 4–10 · Choose the right answer",
              coins: 10,
              items: [
                {
                  q: "Question 4 · Which statement best represents the main idea of the listening?",
                  options: [
                    "A · The listening aims to inform us that there is more job security in green jobs.",
                    "B · The listening aims to persuade us to upskill in green skills.",
                    "C · The listening aims to encourage us to work in the auto industry.",
                    "D · The listening aims to clarify what is meant by “green skills.”"
                  ],
                  answer: "A · The listening aims to inform us that there is more job security in green jobs."
                },
                {
                  q: "Question 5 · The increase in jobs requiring green skills",
                  options: ["A · is due to the demand from the labor market","B · stems from the need to meet global climate targets","C · varies between countries","D · all of the above"],
                  answer: "D · all of the above"
                },
                {
                  q: "Question 6 · The strong demand for green workers with not enough supply implies that",
                  options: [
                    "A · people are unaware of any green skills they have.",
                    "B · people are not aware that their skills could be used in green jobs.",
                    "C · people are unwilling to upskill to make a difference for the environment.",
                    "D · people are unaware that there is a demand for green workers."
                  ],
                  answer: "D · people are unaware that there is a demand for green workers."
                },
                {
                  q: "Question 7 · The definition of green skills is provided at the beginning of the talk and at the end. The reason for this is:",
                  options: [
                    "A · to reinforce what green skills are.",
                    "B · to keep the conversation on topic when referring to green skills.",
                    "C · because the hosts misinterpret the meaning of green skills.",
                    "D · because it shows the structure of the talk."
                  ],
                  answer: "A · to reinforce what green skills are."
                },
                {
                  q: "Question 8 · The example given of the dramatic increase in auto workers with green skills implies that",
                  options: [
                    "A · the auto industry is the most successful industry currently.",
                    "B · companies that implement green skills could have similar success.",
                    "C · the use of AI reduces the good a green company does for the environment.",
                    "D · there is demand for companies to employ people with green skills."
                  ],
                  answer: "B · companies that implement green skills could have similar success."
                },
                {
                  q: "Question 9 · The question about AI and increased productivity was not answered by Sue Duke with a simple Yes or No because",
                  options: ["A · she didn’t know the answer.","B · there was no clear answer.","C · the question wasn’t clear.","D · the question was irrelevant to the interview."],
                  answer: "B · there was no clear answer."
                },
                {
                  q: "Question 10 · Sue’s feelings towards using green skills to mitigate climate change are",
                  options: [
                    "A · Positive—it helps not only the environment but industry as well",
                    "B · Negative—it doesn’t help meet the climate change targets",
                    "C · Neutral—she is informing the hosts of unbiased facts from research",
                    "D · Mixed—she thinks there has been a good start, but more needs to be done"
                  ],
                  answer: "A · Positive—it helps not only the environment but industry as well"
                }
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Compare with a partner. For each answer, say <b>where</b> in the interview you heard it: “I chose B because Sue said …”."},
            {"type":"do","n":2,"who":"class","text":"<b>Four corners for the hardest question.</b> Your teacher chooses one question. Walk to corner <b>A, B, C or D</b>. In your corner, agree on <b>one</b> reason. One person from each corner says it to the class. Then check the answer on screen."},
            {
              type: "language",
              title: "Defend your answer",
              groups: [
                {"label":"Give evidence","phrases":["I chose … because the speaker said …","Near the beginning / end of the interview, …","The key word was …"]},
                {"label":"Change your mind","phrases":["That’s a good point — I hadn’t noticed that.","You’ve convinced me. I’ll change to …"]}
              ]
            }
          ]
        },
        {
          id: "b6",
          short: "Noticing",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d2-b6.svg",
          title: "Language focus - Cause and effect: Noticing",
          goal: "Find the language the speakers use to show causes and effects.",
          blocks: [
            {"type":"do","n":1,"who":"class","text":"<b>Stand when you hear it!</b> Close your laptops. Your teacher reads the extracts below aloud. <b>Stand up</b> (then sit down) every time you hear a cause-and-effect phrase. Who stands first?"},
            {"type":"do","n":2,"who":"alone","text":"Now open the extracts and tap the phrases. Did you hear them all?"},
            {
              type: "spot",
              id: "b6-spot",
              label: "Cause-and-effect spotter",
              title: "Read these extracts from the transcript and identify examples of cause and effect",
              hint: "Tap the words that show a cause or an effect. Careful — some highlighted words do a different job.",
              paras: [
                "<b>Section A · H1:</b> The global shift toward a green economy is gaining momentum and it could have a significant [[*impact on]] the demand for skills in the labor market. LinkedIn has released its [[annual]] global green skills report that provides insight on the latest work trends in environmental sustainability. More companies are looking for green talent. [[Within the last year]], 22.4% of job postings required at least one green skill.",
                "<b>Section B · H1:</b> It’s so interesting because we talk so much lately about AI, right? And that there’s going to be this big need for AI workers. We talk much less about this area. So it does seem that there is a skills gap as well. What does that [[*stem from]]? Is it that? Are people not studying this stuff? Is it just that there’s not a high enough rate of people who are studying it and coming out of school with it or re-skilling to focus on these areas? What’s [[*the cause of]] it?",
                "<b>SD:</b> This is a very significant shift for the economy. We are talking about transforming the entire economy and putting it on a more sustainable footing if we’re going to reach those 2030 and on edge of those 2050 targets. And that’s not going to happen [[overnight]]. First off, [[*one of the drivers is that]] demand is just so strong for these green skills. We currently have only one in eight workers with green skills and their ability to meet that demand is just not there. That demand is growing all the time. And it’s important to remember that that demand, of course, that’s coming from the green sector. But we also see it coming from across all industries. So some of the fastest greening roles out there are jobs you just wouldn’t think of as green jobs: fleet managers, compliance managers, health workers, data scientists. They are all roles that are going green every day. And it is very, very challenging for workers to keep pace with that demand. We have got to start investing in green skills and upskilling workers [[*so that]] they’re going to be able to take advantage of the opportunity that this transition presents.",
                "<b>H2:</b> Does having green skills [[*mean that]] someone can get paid more?",
                "<b>SD:</b> It [[*means that]] your future employability looks really, really positive. So just in the past year, we saw that demand for green skills grow 15 percent. We saw demand slow and slacken elsewhere. We also see that workers with green skills are 30 percent more likely to get hired than workers who don’t. So investing in green skills, investing in this area [[*is not only going to be good for]] you, it’s going to be good for the planet, too.",
                "<b>Section D · H2:</b> We continue to hear more about how there is going to be artificial intelligence that’s weaved into the fabric of an organization’s operations and that it [[*could replace]] some roles, but it [[*could improve, increase]] productivity at the same time. And you’re going to have some roles that work [[in tandem with]] artificial intelligence or augmented intelligence."
              ]
            },
            {
              type: "sort",
              id: "b6-sort",
              title: "Cause, language or effect?",
              hint: "Put each part of the speakers’ ideas in the right column.",
              buckets: [{"label":"Cause","letter":"C"},{"label":"Language","letter":"L"},{"label":"Effect","letter":"E"}],
              items: [
                {"text":"The global shift toward a green economy","answer":0},
                {"text":"impact on","answer":1},
                {"text":"the demand for skills in the labour market","answer":2},
                {"text":"Having green skills","answer":0},
                {"text":"means that","answer":1},
                {"text":"your future employability looks really positive","answer":2},
                {"text":"Investing in green skills","answer":0},
                {"text":"is going to be good for","answer":1},
                {"text":"you and the planet","answer":2}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-cause-verbs.svg",
              size: "wide",
              alt: "A machine diagram: a cause goes in on the left, a causal verb in the middle works like a motor, and an effect comes out on the right. Example: The shift toward sustainability → drives → demand for green skills. Below are verb gears: promote, drive, fuel, boost, build, improve, lead to.",
              caption: "Key point: verbs can show cause and effect too. Cause → <b>verb</b> → effect."
            },
            {
              type: "toggle",
              title: "Want more? Four example sentences with causal verbs",
              hint: "Open to see more examples",
              blocks: [
                {
                  type: "key",
                  title: "Verbs can express causal relationships too",
                  points: [
                    "Government incentives <b>promote</b> the adoption of eco-friendly practices.",
                    "The shift toward sustainability <b>drives</b> demand for green skills.",
                    "Rising awareness about climate change <b>fuels</b> the demand for green technologies.",
                    "Investing in education <b>builds</b> a skilled workforce, which in turn <b>boosts</b> economic growth."
                  ]
                }
              ]
            },
            {
              type: "talk",
              title: "Explain it to a classmate",
              prompts: ["Which causal phrase from the extracts would you use in your group presentation?","Make your own sentence with “drives” or “fuels” about the workforce of the future."]
            }
          ],
          answers: {
            title: "Suggested answers (cause → language → effect)",
            items: [
              ["Section A","The global shift toward a green economy → <b>impact on</b> → the demand for skills in the labour market (more companies looking for green talent; 22.4% of job postings required at least one green skill)."],
              ["Section B (question)","There is a skills gap → <b>What does that stem from? / What is the cause of it?</b>"],
              ["Section B (answer)","<b>One of the drivers is that</b> … demand is so strong for these green skills and is growing all the time → challenging for workers to keep pace. Start investing in green skills and upskilling workers → <b>so that</b> → they can take advantage of the opportunity this transition presents."],
              ["Green skills","Having green skills → <b>means that</b> → your future employability looks really positive; 30% more likely to get hired. Investing in green skills → <b>is going to be</b> → good for you and the planet."],
              ["Section D","Artificial intelligence weaved into the fabric of an organisation’s operations → <b>could replace</b> some roles / <b>could improve, increase</b> productivity."]
            ]
          }
        },
        {
          id: "b7",
          short: "Language in use",
          minutes: 10,
          grouping: "Alone → Group",
          art: "dec10/assets/week3/v/v-d10w3d2-b7.svg",
          title: "Language in use",
          goal: "Join two ideas into one sentence with causal language — then speak in cause-and-effect chains.",
          blocks: [
            {
              type: "language",
              title: "Causal language",
              groups: [
                {"label":"Because of a cause","phrases":["because · since · seeing that","because of · due to · on account of · thanks to","as a result of · as a consequence of","due to the fact that"]},
                {"label":"So the effect is …","phrases":["so · consequently · thus · hence · therefore","for this reason · the reason (is) …","resulting in · thereby"]},
                {"label":"Verbs","phrases":["means · leads to · causes","improves · boosts · drives · fuels · promotes"]},
                {"label":"Purpose / warning","phrases":["in order to · so that","otherwise (a negative consequence)"]}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Connect each pair of sentences into <b>one</b> sentence. Use a verb (<i>improves, boosts, drives, fuels, promotes</i>) or other causal language. You may need to change the structure of A and/or B. The lights turn on when you use causal language."},
            {
              type: "detect",
              id: "b7-dt",
              label: "Sentence lab",
              title: "Paraphrased information from the listening",
              checks: [
                {"label":"Causal verb","color":"#2f7d6b","any":["/\\b(improv|boost|driv|fuel|promot|lead|led|caus|increas)\\w*/"]},
                {"label":"Cause phrase","color":"#c4562f","any":["because","due to","as a result of","as a consequence of","since","thanks to","on account of","seeing that"]},
                {"label":"Effect linker","color":"#3a58a0","any":["consequently","therefore","thus","hence","resulting in","thereby","which means","for this reason"]}
              ],
              items: [
                {
                  task: "1. A) There is a transition to a green economy. B) An increasing number of companies are seeking employees with green skills.",
                  rows: 2,
                  model: "<b>Due to / As a result of</b> the transition to a green economy, an increasing number of companies are seeking employees with green skills."
                },
                {
                  task: "2. A) Workers possess green skills. B) Future job prospects are improved.",
                  rows: 2,
                  model: "Possessing green skills <b>improves</b> future job prospects. OR Workers who possess green skills <b>improve</b> their future job prospects."
                },
                {
                  task: "3. A) There is an increased demand for green skills. B) There are efforts to address climate change.",
                  rows: 2,
                  model: "The effort to address climate change has <b>increased</b> the demand for green skills. OR The effort to address climate change <b>drives</b> the growing demand for green skills."
                },
                {
                  task: "4. A) Artificial intelligence is being integrated into the operations of an organisation. B) Certain roles are being lost.",
                  rows: 2,
                  model: "Integrating artificial intelligence into the operations of an organisation can <b>lead to</b> the loss of certain roles."
                }
              ]
            },
            {"type":"do","n":2,"who":"group","text":"<b>Human chain — stand up in a line.</b> Spin. Person 1 says a cause-and-effect sentence with the linker. Person 2 puts a hand on person 1’s shoulder and makes the effect a new cause: “… <b>and this, in turn, leads to</b> …”. Make a chain of 3, 4, 5 people! The longest correct chain wins a point."},
            {
              type: "spinner",
              id: "b7-spin",
              title: "Cause-and-effect chains",
              reels: [
                {"label":"Cause","items":["stricter climate targets","AI in the workplace","rising awareness of climate change","more electric cars on the roads","government incentives for solar energy","a shortage of green talent"]},
                {"label":"Linker","items":["drives","leads to","As a result, …","Due to …","fuels","which means that"]}
              ]
            },
            {
              type: "fields",
              title: "Use it · Exit ticket 6A",
              fields: [{"id":"b7-exit","label":"Write ONE cause-and-effect sentence you will say in your group presentation on Thursday.","rows":2,"placeholder":"The shift towards a green economy drives …"}]
            }
          ]
        }
      ]
    },
    {
      id: "mediation",
      number: "03",
      code: "7A",
      minutes: 120,
      tone: "blue",
      art: "dec10/assets/week3/s-d2-mediation.svg",
      title: "Mediation",
      subtitle: "Three texts, one story — then a job interview",
      outcome: "You connect a reading, a podcast and a report, take notes in a matrix, and use what you learned in a job interview role play.",
      activities: [
        {
          id: "c1",
          short: "Recap",
          minutes: 10,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d2-c1.svg",
          title: "Recap",
          goal: "Remember the reading and the listening from this week.",
          blocks: [
            {
              type: "sticky",
              color: "blue",
              title: "Say it like an academic · phrase of the day",
              text: "<p><b>“Both … and … agree that …”</b> — connect your sources, don’t just list them.</p>"
            },
            {
              type: "steps",
              title: "Numbered heads · team game",
              items: [
                {"who":"group","text":"Your group is a team. Give each person a number: <b>1, 2, 3, 4</b>."},
                {"who":"group","text":"Your teacher reads a question. Put your heads together for <b>1 minute</b> — make sure <b>everyone</b> in the team can answer. Use the reading and listening from this week."},
                {"who":"class","text":"Your teacher calls a number, e.g. “Number 3!”. All the number 3s <b>stand up</b>. The teacher chooses one to answer. A good answer that names a source = <b>2 points</b>."},
                {"who":"group","text":"Turn the card to check. Then the next question."}
              ]
            },
            {"type":"sources","ids":["greening","greenskills"]},
            {
              type: "flip",
              title: "Recap questions",
              hint: "Discuss each question, then turn the card.",
              items: [
                {"front":"1. What is a green skill? Can you give some examples?","back":"A skill that directly combats the effects of climate change by reducing pollution or preserving natural resources — e.g. water preservation, energy efficiency management, sustainability management."},
                {"front":"2. What is the skill gap mentioned in the LinkedIn report?","back":"The gap between the growing demand for green skills and the current supply of workers who have them. People are not developing these skills fast enough to meet global climate targets."},
                {"front":"3. Both texts mention a skills gap (“skill distance” in reading 1). What causes it, and how can education and new policies close it?","back":"Job requirements change fast because of green policies; workforce skills develop more slowly. Solutions: targeted education and training, better vocational training, updated curricula, continuous learning and on-the-job training."},
                {"front":"4. Both texts say unexpected job roles now need green skills. Can you give examples and say why?","back":"Fleet managers (routes that save fuel), compliance managers (environmental laws), health workers, data scientists (environmental data). All sectors face environmental rules and expectations."},
                {"front":"5. What does the LinkedIn report predict about future demand for green skills?","back":"A continuous increase: jobs needing at least one green skill grew 9% a year over five years, with a 20% jump last year — and the trend is expected to continue."}
              ]
            },
            {
              type: "language",
              title: "Refer to the texts",
              groups: [
                {"label":"Name the source","phrases":["According to Bowen et al. (2018), …","In the interview, Sue Duke explains that …","The LinkedIn report shows that …"]},
                {"label":"Connect them","phrases":["Both the reading and the listening mention …","This links to what we heard in the podcast: …","The reading goes further than the podcast by …"]}
              ]
            }
          ]
        },
        {
          id: "c2",
          short: "Words",
          minutes: 15,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d2-c2.svg",
          title: "Vocabulary",
          goal: "Guess 16 words from context before you read Vidican Auktor (2020).",
          blocks: [
            {
              type: "key",
              title: "Today’s new text",
              points: ["The next three activities use one reading only: <b>Green industrial skills for a sustainable future</b> (Vidican Auktor, 2020)."]
            },
            {"type":"do","n":1,"who":"alone","text":"Read the sentences. Try to <b>guess</b> the meaning of the words in <b>bold</b> from the context. Don’t use a dictionary!"},
            {
              type: "carousel",
              title: "Guess from context",
              slides: [
                {"title":"1","text":"While the concepts of green jobs and green skills have become widely used in policy and research circles, they often remain <b>vague</b> in terms of the type of employment and tasks/occupations they <b>encompass</b> (van der Ree 2019)."},
                {"title":"2","text":"Furthermore, there is <b>ambiguity</b> in whether green jobs are simply traditional roles redefined as “green” in the shift towards a low-carbon economy, or new roles created within various sectors."},
                {"title":"3","text":"The classification is further complicated by <b>inconsistencies</b> in recognizing which activities are truly “green.”"},
                {"title":"4","text":"These definitions are rather broad and thus present similarities in terms of focusing on activities aimed at <b>preserving</b> and <b>restoring</b> the environment."},
                {"title":"5","text":"The definition of green jobs includes not only roles directly involved in environmental processes but also traditional jobs influenced by greening efforts, emphasizing the necessity for these jobs to be “<b>decent</b>.”"},
                {"title":"6","text":"It’s important to explore which skills will be in demand as the economy becomes greener to understand whether the benefits are <b>evenly</b> distributed."},
                {"title":"7","text":"This effort helps to categorize green jobs and understand their placement within the broader skills <b>spectrum</b>, ranging from high-skilled positions like engineers to low-skilled roles like construction workers."},
                {"title":"8","text":"This know-how <b>prevails</b> for eco-buildings, renewable energy design and energy-saving R&amp;D projects."},
                {"title":"9","text":"Examples are environmental <b>compliance</b> inspectors, nuclear monitoring technicians, emergency management directors and legal assistants."},
                {"title":"10","text":"Skills related to design thinking, creativity, adaptability, <b>resilience</b>, and even <b>empathy</b> have been repeatedly mentioned to be critical by experts at the LKDF Forum 2020."},
                {"title":"11","text":"Additional training specific for green concepts and practices, <b>upskilling</b>, or adding to existing core skills may be necessary (Mclean et al. 2018), as well as <b>retooling</b> with regards to fields of study and <b>vocational</b> skills (OECD 2017)."}
              ]
            },
            {"type":"do","n":2,"who":"class","text":"<b>Find your partner — stand up!</b> Your teacher gives each student one card: a <b>word</b> or a <b>meaning</b>. Walk round and say your card. Don’t show it! When you find your partner, stand together and make one sentence with the word."},
            {"type":"tip","text":"<b>No paper cards today?</b> Your teacher gives each student one word or one meaning from the two matching games below. Remember it (don’t write it on your hand!), then walk round and find your partner."},
            {"type":"do","n":3,"who":"pair","text":"Sit down with your new partner. Check all the words with the two matching games."},
            {
              type: "match",
              id: "c2-m1",
              title: "Match the words (1)",
              left: ["vague","encompass","ambiguity","inconsistency","preserving","restoring","decent","evenly"],
              right: [
                "not clear or specific; lacking definite meaning.",
                "to include or contain within a larger scope or range.",
                "uncertainty or lack of clarity in meaning or interpretation.",
                "a lack of uniformity; contradiction.",
                "protecting or maintaining something in its original state.",
                "bringing something back to its original condition.",
                "acceptable, proper, or good enough in quality or standards.",
                "in a balanced or equal way."
              ]
            },
            {
              type: "match",
              id: "c2-m2",
              title: "Match the words (2)",
              left: ["spectrum","prevail","compliance","resilience","empathy","upskilling","retooling","vocational skills"],
              right: [
                "used to classify something in terms of its position on a scale between two extreme points.",
                "a great victory or success; to prove more powerful or dominant.",
                "following rules, standards, or laws.",
                "the ability to recover quickly from difficulties or setbacks.",
                "the ability to understand and share the feelings of others.",
                "learning new skills or improving existing ones to enhance abilities.",
                "updating or adapting skills or tools to meet new requirements.",
                "practical skills and knowledge needed for a specific trade or profession."
              ]
            },
            {
              type: "talk",
              title: "Use the words · walk and talk",
              prompts: [
                "<b>Stand up with your partner and walk slowly round the room.</b> Ask and answer one question each. Swap partners when your teacher claps.",
                "Tell your partner about a time you showed <b>resilience</b>.",
                "Which <b>vocational skills</b> would you like to learn?",
                "Why is <b>empathy</b> important in a team?",
                "Do you think you will need <b>upskilling</b> in your future job? Why?"
              ]
            },
            {
              type: "language",
              title: "Academic collocations",
              groups: [
                {"label":"vague / ambiguity","phrases":["remain vague","a vague definition","there is ambiguity in …","to avoid ambiguity"]},
                {"label":"skills","phrases":["upskill workers","acquire new skills","close the skills gap","transferable skills"]},
                {"label":"rules","phrases":["ensure compliance with …","in compliance with the law","meet environmental standards"]}
              ]
            }
          ]
        },
        {
          id: "c3",
          short: "Gist",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d2-c3.svg",
          title: "Reading for gist",
          goal: "Read the text quickly for the first time and find the big ideas.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Open the text. Read it <b>quickly</b> for the first time (about 6 minutes). Then answer the 2 questions."},
            {"type":"sources","ids":["vidican"]},
            {
              type: "quiz",
              id: "c3-q",
              items: [
                {
                  q: "1. What is the main purpose of defining green jobs and green skills in the text?",
                  options: [
                    "To highlight the economic benefits of the green industry",
                    "To argue against the current green policies",
                    "To clarify and differentiate the terms for better policy implementation",
                    "To promote green jobs over traditional jobs"
                  ],
                  answer: "To clarify and differentiate the terms for better policy implementation",
                  why: "Paragraph A: the terms are vague and “often used interchangeably” — “a short clarification of these terms is necessary before delving deeper into policy discussions.”"
                },
                {
                  q: "2. According to the text, what is a major implication of the transition to a green economy on the workforce?",
                  options: [
                    "All traditional jobs will be replaced by green jobs",
                    "There will be a shift towards more skill-intensive jobs due to green technologies",
                    "Only new jobs will require green skills",
                    "Green skills will only be relevant in lower-skilled positions"
                  ],
                  answer: "There will be a shift towards more skill-intensive jobs due to green technologies",
                  why: "Paragraph E: green technologies employ fewer production workers — “This indicates a shift towards more skill-intensive jobs in green industries.”"
                }
              ]
            },
            {"type":"do","n":2,"who":"class","text":"<b>Four corners — before you check!</b> Each corner of the room is one answer (1st, 2nd, 3rd, 4th option). For question 1, walk to your corner. In your corner, find the <b>paragraph</b> that proves it. One person tells the class. Then do the same for question 2."},
            {
              type: "figure",
              src: "dec10/assets/week3/d2-movement-corners.svg",
              size: "wide",
              alt: "A classroom seen from above with four corners labelled 1, 2, 3 and 4. Students walk from the middle to the corner of the answer they chose. In one corner, a group points at a paragraph letter on a text and one student speaks to the class.",
              caption: "Walk to your answer. Find the paragraph. Say why."
            },
            {
              type: "talk",
              title: "Tell a partner in 30 seconds",
              prompts: ["What is the text about? Use: “The text mainly explains …”","Which paragraph was the hardest? Why?"]
            },
            {
              type: "language",
              title: "Point to the evidence",
              groups: [
                {"label":"In your corner","phrases":["The answer is in paragraph … where it says …","The key sentence is: “…”","This option is too general / too narrow because …"]},
                {"label":"Tell the class","phrases":["Our corner chose … because paragraph … states that …","We rejected the other options because …"]}
              ]
            }
          ]
        },
        {
          id: "c4",
          short: "Matrix",
          minutes: 20,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d2-c4.svg",
          title: "Reading for detail: Note-taking",
          goal: "Read again and complete the note-taking matrix for all three texts — as an expert team.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Read the Vidican Auktor text again carefully and add notes to the <b>Vidican Auktor (2020)</b> column."},
            {
              type: "steps",
              title: "Jigsaw · become the expert",
              items: [
                {"who":"group","text":"<b>Expert groups (6 min).</b> Stand up and move. Group A = Bowen et al. (2018). Group B = Hyman and Smith (2023). Group C = Vidican Auktor (2020). Agree on the best notes for <b>your</b> text: definition of green jobs + green skills."},
                {"who":"group","text":"<b>Home groups (8 min).</b> Go back to a group with one A, one B and one C. Each expert <b>teaches back in 60 seconds</b> — no reading, just notes. The others write in their matrix."},
                {"who":"group","text":"Together, find the ideas that are the <b>same in all three</b>. Put a star ★ next to them."}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-movement-jigsaw.svg",
              size: "wide",
              alt: "A jigsaw in two steps. Left: three expert groups, A in orange for Bowen et al. 2018, B in teal for Hyman and Smith 2023, and C in blue for Vidican Auktor 2020. Arrows lead to the right: three home groups, each with one A, one B and one C student teaching each other.",
              caption: "Expert group → home group. Learn one text well, then teach it."
            },
            {"type":"sources","ids":["vidican","greening","greenskills"]},
            {
              type: "table",
              id: "c4-tab",
              title: "Note-taking matrix",
              columns: ["","Bowen et al. (2018)","Hyman and Smith (2023)","Vidican Auktor (2020)"],
              fixed: ["Definition of Green jobs","Green skills"]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-three-texts.svg",
              size: "wide",
              alt: "Three overlapping circles, one for each text: Bowen et al. (2018), a reading; Hyman and Smith (2023), a podcast; Vidican Auktor (2020), a report. The space where all three overlap is empty with a question mark: what ideas are the same in all three?",
              caption: "Where do the three texts meet? Find the ideas in the middle."
            },
            {
              type: "talk",
              title: "Compare with a partner",
              prompts: ["Can you identify any similar ideas across the three texts?","Which text gives the clearest definition of green jobs? Why?","Is there anything that one text says and the others don’t?"]
            },
            {
              type: "language",
              title: "Synthesise the sources",
              groups: [
                {"label":"Similar","phrases":["All three texts agree that …","Similarly, Vidican Auktor (2020) argues that …","This idea is echoed in …"]},
                {"label":"Different","phrases":["Whereas Bowen et al. (2018) focus on …, Hyman and Smith (2023) …","Unlike the podcast, the report …","Only Vidican Auktor (2020) mentions …"]},
                {"label":"Hedge","phrases":["The podcast seems to suggest that …","This may indicate that …","It is not explicitly defined in …"]}
              ]
            }
          ],
          answers: {
            title: "Suggested notes",
            items: [
              ["Green jobs · Bowen et al. (2018)","Defined variably, but generally employment in industries that significantly reduce environmental risks and aim for sustainability. Not always new or unique roles — they could be traditional roles adapted to meet green criteria."],
              ["Green jobs · Hyman and Smith (2023)","Not explicitly defined, but the discussion implies green jobs include positions that directly or indirectly contribute to environmental sustainability."],
              ["Green jobs · Vidican Auktor (2020)","The ILO’s comprehensive definition: positions that contribute directly or indirectly to environmental sustainability, including traditional roles influenced by greening efforts, ensuring they are “decent” jobs."],
              ["Green skills · Bowen et al. (2018)","High-level analytical and technical skills, especially related to technology and environmental sustainability. Less routine-intensive tasks, requiring more education, work experience and on-the-job training."],
              ["Green skills · Hyman and Smith (2023)","Skills that help combat climate change effects, such as reducing pollution and preserving natural resources, e.g. water preservation and energy efficiency."],
              ["Green skills · Vidican Auktor (2020)","The knowledge, abilities, values and attitudes needed to develop and support a sustainable and resource-efficient society. Needed across all sectors; include specific technical, scientific and management skills to adapt to environmental transformations."],
              ["Similar ideas","Green jobs include both new roles and traditional roles that are adapting · green jobs/skills contribute directly or indirectly to sustainability · green skills reduce pollution and preserve natural resources · technical and scientific skills matter."]
            ]
          }
        },
        {
          id: "c5",
          short: "Advice",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d2-c5.svg",
          title: "Building understanding across texts",
          goal: "Complete a recommendation for a job seeker with ideas from all three texts.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"<b>Beat the clock — 4 minutes!</b> Below is a recommendation for someone who’s looking for a job. With a partner, use the words from the box to fill in the gaps, drawing on the information from the three texts you studied this week. The first pair with all 11 correct stands up and shouts “Hired!”."},
            {
              type: "cloze",
              id: "c5-cl",
              title: "A recommendation for a job seeker",
              options: ["upskilling","impact","environmental","adaptability","on-the-job","sustainable","encompass","traditional","science","renewable","healthcare"],
              text: "If you are seeking employment in today's evolving job market, it is crucial to understand and acquire green skills. Green skills refer to the knowledge and abilities needed to perform jobs that have a direct or indirect {{1}} on environmental sustainability. Green jobs {{2}} not only roles directly involved in {{3}} processes but also {{4}} positions that are adapting to greening efforts. You should focus on acquiring technical, engineering, {{5}}, operation management, and monitoring skills, which are highly valued in industries like {{6}} energy and sustainability. Additionally, soft skills such as design thinking, creativity, {{7}}, resilience, and empathy are becoming essential. Continuous learning and {{8}} through formal education and {{9}} training are necessary to keep pace with technological advancements and new practices in green industries. Target sectors that are rapidly incorporating green practices, such as automotive, {{10}}, and data science, where the demand for green skills is sharply increasing. By aligning your skills with the needs of the green economy, you not only boost your employability but also contribute to {{11}} development, ensuring your career development is both impactful and future-proof.",
              answers: ["impact","encompass","environmental","traditional","science","renewable","adaptability","upskilling","on-the-job","healthcare","sustainable"]
            },
            {
              type: "talk",
              title: "Be the careers adviser · speed advice",
              prompts: [
                "<b>Stand up and find a new partner.</b> Your partner wants a green job. Give them <b>three</b> pieces of advice from the text in <b>one minute</b> — without reading! Then swap. Then find a new partner and do it again, faster.",
                "Which of the soft skills in the text do you already have? Give an example."
              ]
            },
            {
              type: "language",
              title: "Giving advice",
              groups: [
                {"label":"Strong advice","phrases":["It is crucial to …","You should definitely …","Make sure you …"]},
                {"label":"Softer advice","phrases":["It might be worth …","Have you thought about …?","One option would be to …"]}
              ]
            }
          ]
        },
        {
          id: "c6",
          short: "Interview prep",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d2-c6.svg",
          title: "Synthesising Role play – job interview: prepare",
          goal: "Read your role card and prepare your ideas from all three texts.",
          blocks: [
            {
              type: "sticky",
              color: "blue",
              title: "Scenario",
              text: "<p>The candidate is applying for a position at a company that specializes in <b>renewable energy solutions</b>. The role requires managing projects aimed at reducing environmental impact and promoting sustainability. The HR representative's goal is to find a candidate who not only possesses the necessary technical skills but also has a deep understanding of the broader implications of green skills within the workforce.</p>"
            },
            {"type":"do","n":1,"who":"pair","text":"You will work with a partner to perform a role play. One of you is <b>an HR representative</b>, the other is <b>a job interview candidate</b>. Decide who is who."},
            {"type":"do","n":2,"who":"group","text":"<b>Same-role huddle.</b> Stand up. All HR representatives go to the <b>front</b> of the room; all candidates go to the <b>back</b>. In groups of 3, prepare together: HR — write <b>three</b> good questions; candidates — practise <b>one</b> STAR example aloud to each other."},
            {
              type: "hotspot",
              src: "dec10/assets/week3/d2-interview.svg",
              alt: "A job interview room. On the left, the HR representative sits behind a desk with a laptop and a folder. On the right, the candidate sits with a CV. A window shows wind turbines and solar panels. Five numbered markers show the stages of the interview.",
              title: "The five stages of the interview",
              hint: "Tap each number to see what happens in that stage.",
              size: "wide",
              spots: [
                {"x":20,"y":30,"label":"1","title":"Introductions","text":"HR introduces the role and its key responsibilities. The candidate introduces themselves and explains why they are interested.","color":"#3a58a0"},
                {"x":38,"y":20,"label":"2","title":"Green skills","text":"HR asks what green skills are and why they matter for this role. The candidate defines green skills in their own words.","color":"#2f7d6b"},
                {"x":56,"y":20,"label":"3","title":"Examples","text":"HR asks for specific examples. The candidate shares a past job or project where they used green skills successfully.","color":"#b07d12"},
                {"x":74,"y":30,"label":"4","title":"Learning and adaptability","text":"HR discusses continuous learning in a fast-changing sector. The candidate shows how they stay up to date and adapt.","color":"#8a4f9e"},
                {"x":86,"y":52,"label":"5","title":"Trends","text":"HR checks the candidate’s awareness of current trends and emerging practices in the green job market.","color":"#c4562f"}
              ]
            },
            {
              type: "tabs",
              title: "Your role card",
              tabs: [
                {
                  label: "HR Representative",
                  blocks: [
                    {
                      type: "cards",
                      numbered: true,
                      items: [
                        {"text":"Introduce the role and outline its key responsibilities related to sustainability and project management."},
                        {"text":"Ask the candidate to explain their understanding of green skills and why these skills are important for this role."},
                        {"text":"Request specific examples from the candidate’s past experience where they applied green skills in a professional context."},
                        {"text":"Discuss adaptability and the need for continuous learning in the rapidly evolving green sector."},
                        {"text":"Assess the candidate's awareness of current trends and emerging practices in the green job market."}
                      ]
                    }
                  ]
                },
                {
                  label: "Job Candidate",
                  blocks: [
                    {
                      type: "cards",
                      numbered: true,
                      items: [
                        {"text":"Introduce yourself and explain why you are interested in this role and how it aligns with your career goals."},
                        {"text":"Define green skills in your own words and describe how you have developed these skills."},
                        {"text":"Share specific examples from previous jobs or projects where you effectively used green skills to achieve successful outcomes."},
                        {"text":"Highlight your commitment to continuous learning, and explain how you stay updated with the latest trends and practices in the green sector."},
                        {"text":"Convince the HR representative that you are adaptable and capable of handling new challenges in sustainability and green technology."}
                      ]
                    }
                  ]
                }
              ]
            },
            {"type":"tip","text":"Your teacher may give you a <b>paper role card</b> (A = HR representative, B = job candidate) to hold during the interview. No card? Open the tab for your role above."},
            {
              type: "figure",
              src: "dec10/assets/week3/d2-star-answer.svg",
              size: "wide",
              alt: "The STAR method for interview examples, as four steps on a path: S Situation — where and when; T Task — what you had to do; A Action — what you did; R Result — what happened, with a number if possible.",
              caption: "Candidates: give your examples with <b>STAR</b> — Situation, Task, Action, Result."
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-ggs-skills.svg",
              size: "wide",
              alt: "Five skill badges from Vidican Auktor (2020): engineering and technical skills, science skills, operation management skills, monitoring skills, and soft skills such as design thinking, creativity, adaptability, resilience and empathy.",
              caption: "Ideas from the texts you can use in the interview."
            },
            {
              type: "fields",
              title: "My preparation notes",
              fields: [
                {"id":"c6-def","label":"Green skills in my own words (both roles)","rows":2,"placeholder":"Green skills are …"},
                {"id":"c6-ex","label":"Candidate: my example (STAR) / HR: the responsibilities of the role","rows":3,"placeholder":"In my previous position at …, I led a project that …"},
                {"id":"c6-src","label":"One fact from each text I can use","rows":3,"placeholder":"Bowen et al. (2018): … · LinkedIn report: … · Vidican Auktor (2020): …"}
              ]
            }
          ]
        },
        {
          id: "c7",
          short: "Interview!",
          minutes: 30,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d2-c7.svg",
          title: "Synthesising Role play – job interview",
          goal: "Perform the interview, then swap roles and do it again.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"class","text":"<b>Set up the interview room.</b> HR representatives sit in an <b>inner circle</b>, facing out. Candidates sit in an <b>outer circle</b>, facing an HR person."},
                {"who":"pair","text":"<b>Round 1.</b> Perform the role play (about <b>8 minutes</b>). HR leads. Use the dialogue prompts. Shake hands at the start and the end!"},
                {"who":"pair","text":"Give each other quick feedback with the form below (2 minutes)."},
                {"who":"class","text":"<b>Rotate!</b> Candidates <b>stand up and move one seat to the left</b>. Now you meet a new HR person."},
                {"who":"pair","text":"<b>Round 2.</b> Time permitting, <b>swap roles</b> and do the activity again — try to beat your first interview."}
              ]
            },
            {"type":"tip","text":"Your teacher may give you a <b>paper feedback sheet</b> (Round 1 and Round 2) and <b>curveball cards</b> for HR. No paper? Use the curveball spinner and the feedback form on this page."},
            {
              type: "figure",
              src: "dec10/assets/week3/d2-movement-interview.svg",
              size: "wide",
              alt: "Speed interviews seen from above. An inner circle of HR representatives with folders faces out. An outer circle of candidates with CVs faces in. Curved arrows show the candidates moving one seat to the left after each round.",
              caption: "Inner circle = HR. Outer circle = candidates. After round 1, candidates move <b>one seat</b>."
            },
            {
              type: "chat",
              title: "Dialogue prompts",
              right: "Candidate",
              lines: [
                ["HR","<mark>Can you describe your understanding of green skills and how they apply to this position?</mark>"],
                ["Candidate","<mark>I consider green skills to include both technical expertise and soft skills, such as collaboration and problem-solving. For example, in my last role …</mark>"],
                ["HR","<mark>Could you provide an example of how you've implemented sustainable practices in a previous role?</mark>"],
                ["Candidate","<mark>In my previous position at [Company], I led a project that focused on [specific green initiative], where I developed skills in …</mark>"],
                ["HR","<mark>How do you ensure you stay updated with advancements in green technologies and sustainability practices?</mark>"],
                ["Candidate","<mark>To keep my skills current, I follow industry reports, such as those published by [source], and actively participate in [professional forums or conferences] …</mark>"]
              ]
            },
            {
              type: "language",
              title: "Interview language",
              groups: [
                {"label":"HR: open and close","phrases":["Thank you for coming in today. Let me tell you a little about the role.","The position involves managing projects that …","Do you have any questions for us?","We’ll be in touch by the end of the week."]},
                {"label":"HR: dig deeper","phrases":["Could you give me a specific example?","What was the result of that project?","How would you handle a situation where …?","What do you see as the biggest trend in the green job market?"]},
                {"label":"Candidate: buy time","phrases":["That’s a great question. Let me think for a moment.","If I understand you correctly, you’re asking about …","There are two parts to my answer."]},
                {"label":"Candidate: use the sources","phrases":["A recent LinkedIn report found that …","As Vidican Auktor (2020) points out, soft skills such as … are critical.","Research suggests that green jobs encompass traditional roles too."]},
                {"label":"Candidate: sell yourself","phrases":["I’m a fast learner and I adapt quickly to …","I’m committed to continuous learning — for example, …","I believe I could make a real contribution to …"]}
              ]
            },
            {
              type: "spinner",
              id: "c7-spin",
              title: "HR: one curveball question",
              text: "HR, spin once near the end of the interview and ask the question. Candidate, answer without preparation!",
              reels: [
                {
                  label: "Curveball",
                  items: [
                    "What is your biggest weakness?",
                    "Where do you see yourself in five years?",
                    "How would AI change this job?",
                    "Tell me about a time a project failed.",
                    "Why should we choose you and not another candidate?",
                    "How would you explain green skills to a 10-year-old?"
                  ]
                }
              ]
            },
            {
              type: "form",
              id: "c7-form",
              title: "Interview feedback",
              observe: "Who did you interview / who interviewed you?",
              scale: ["Yes","Mostly","Needs work"],
              sections: [
                {
                  label: "The candidate …",
                  items: [
                    "defined green skills clearly in their own words",
                    "gave a specific example (Situation, Task, Action, Result)",
                    "used ideas from the three texts",
                    "showed adaptability and a commitment to learning",
                    "spoke fluently and made eye contact"
                  ]
                },
                {
                  label: "The HR representative …",
                  items: ["introduced the role clearly","asked follow-up questions","kept the interview polite and professional"]
                }
              ],
              fields: [{"id":"c7-tip","label":"One tip for next time","rows":2}],
              send: true
            }
          ]
        },
        {
          id: "c8",
          short: "Our talk",
          minutes: 15,
          grouping: "Group",
          art: "dec10/assets/week3/v/v-d10w3d2-c8.svg",
          title: "Prepare for your Group research summary presentation",
          goal: "Decide which ideas from today’s texts support or contradict your group’s research.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Continue working on your Group Research Summary presentation for <b>Thursday</b>. Consider if you can add relevant information from today’s listening and reading. <b>Swap jobs</b> from this morning: a new chair, timekeeper, devil’s advocate and secretary."},
            {"type":"do","n":2,"who":"group","text":"The chair reads each idea in the grid. Everyone shows a hand signal at the same time: <b>thumb up</b> = supports · <b>thumb down</b> = contradicts · <b>flat hand</b> = not related. The devil’s advocate asks “Why?” for each vote."},
            {
              type: "grid",
              id: "c8-grid",
              title: "Does today’s idea support or contradict our research?",
              columns: ["Our research"],
              options: ["Supports","Contradicts","Not related"],
              rows: [
                "22.4% of job postings require at least one green skill (Hyman and Smith, 2023).",
                "Only one in eight workers has green skills (Hyman and Smith, 2023).",
                "Jobs you wouldn’t think of as green are “greening” (Hyman and Smith, 2023).",
                "Green jobs include traditional roles influenced by greening efforts (Vidican Auktor, 2020).",
                "Green technologies employ fewer production workers → more skill-intensive jobs (Vidican Auktor, 2020).",
                "Soft skills like adaptability and empathy are critical (Vidican Auktor, 2020)."
              ]
            },
            {
              type: "language",
              title: "Bring a new source into your talk",
              groups: [
                {"label":"It supports us","phrases":["This is supported by Hyman and Smith (2023), who report that …","Similarly, Vidican Auktor (2020) found that …","This finding is in line with …"]},
                {"label":"It contradicts us","phrases":["However, Vidican Auktor (2020) takes a different view: …","In contrast, the LinkedIn report suggests that …","This challenges the idea that …"]}
              ]
            },
            {
              type: "fields",
              fields: [{"id":"c8-add","label":"One sentence we will add to our presentation","rows":2,"placeholder":"This is supported by …"}]
            },
            {"type":"do","n":3,"who":"class","text":"<b>Stand and share.</b> One person from each group stands up and reads your new sentence. The class listens for the source name. Best use of a source wins a point."},
            {
              type: "fields",
              title: "Exit ticket · 7A",
              fields: [{"id":"c8-exit","label":"One green skill I have (or want), and one sentence I could say about it in a real job interview.","rows":2,"placeholder":"I have developed … For example, in …"}]
            },
            {"type":"tip","text":"<b>After class:</b> remember to continue your research for your group’s Seminar topic and your final Interactive Presentation Assessment."}
          ]
        }
      ]
    },
    {
      id: "online",
      number: "04",
      code: "8A",
      minutes: 60,
      tone: "green",
      art: "dec10/assets/week3/s-d2-online.svg",
      title: "AST: Digital literacy: Online communication Homework",
      subtitle: "Discussion boards, emails to lecturers and group chats — the polite way",
      outcome: "You know the parts and the netiquette of a Canvas discussion board, the format of a university email, and polite language for working with a group online.",
      activities: [
        {
          id: "d1",
          short: "Discussion boards",
          minutes: 15,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d2-d1.svg",
          title: "Effective and Appropriate Online Conversation and Discussion",
          goal: "Learn what a discussion board is and how to behave on it.",
          blocks: [
            {
              type: "sticky",
              color: "green",
              title: "Say it like an academic · phrase of the day",
              text: "<p><b>“Building on …’s point, …”</b> — the best way to start a reply online.</p>"
            },
            {
              type: "key",
              title: "Discussion boards",
              points: [
                "At university, a lecturer may set up a <b>discussion board</b>. Sometimes it is a class activity — sometimes it is <b>graded</b>.",
                "The Discussion Board in Canvas is a system where teachers and students interact by <b>posting</b> and <b>replying</b> to a discussion thread."
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week3/d2-canvas-board.svg",
              alt: "A Canvas page with three numbered parts: 1 the Discussions tab in the left menu; 2 the topic title and body at the top of the page; 3 the discussion thread with an original post and replies under it.",
              title: "The parts of a discussion board",
              hint: "Tap the numbers.",
              size: "wide",
              spots: [
                {"x":8,"y":37,"label":"1","title":"Discussion tab","text":"Click here in the course menu to see all the discussions.","color":"#3f7a3a"},
                {"x":46,"y":20,"label":"2","title":"Topic Title and Body","text":"A clearly labelled topic title and a brief description or instruction of the discussion.","color":"#3a58a0"},
                {"x":58,"y":62,"label":"3","title":"Discussion Thread","text":"Here you can see the original post and all the replies to this individual post.","color":"#c4562f"}
              ]
            },
            {
              type: "toggle",
              title: "Want more? What you can do on a Canvas discussion board",
              hint: "Four tools for students",
              blocks: [
                {
                  type: "cards",
                  title: "As a student, you can …",
                  items: [
                    {"label":"Create","text":"Create, edit, and delete discussion topics."},
                    {"label":"Reply","text":"Reply to individual student replies."},
                    {"label":"Subscribe","text":"Subscribe to a discussion and be notified of replies."},
                    {"label":"Embed","text":"Embed or attach files, images, and YouTube videos."}
                  ]
                }
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-netiquette.svg",
              size: "wide",
              alt: "Discussion netiquette as seven icons: be patient and read the whole thread; refer back to a post; use academic style with no emojis or text speak; give your own point of view; cite your sources; be succinct; always be polite and proofread before you send.",
              caption: "Netiquette = net + etiquette. Behave as you would in a face-to-face classroom."
            },
            {
              type: "sort",
              id: "d1-sort",
              title: "Good netiquette or not?",
              hint: "Put each habit in the right box.",
              buckets: [{"label":"Do","letter":"✓"},{"label":"Don’t","letter":"✗"}],
              items: [
                {"text":"Read everything in the thread before replying.","answer":0},
                {"text":"Refer back to the post: “I agree with Cary and Sienna’s reply when they stated that …”","answer":0},
                {"text":"Express your point of view, even when responding to others.","answer":0},
                {"text":"Cite your sources if you are referencing.","answer":0},
                {"text":"Proofread your post by reading it out loud before you send it.","answer":0},
                {"text":"Write “U mentioned …” to save time.","answer":1,"why":"No online messaging speak. Write “You mentioned that …”."},
                {"text":"Add emojis to show your feelings.","answer":1,"why":"Do not use emojis in an academic discussion."},
                {"text":"Reply to an off-topic remark in the thread.","answer":1,"why":"Be succinct: get to the point and stay on point."}
              ]
            },
            {
              type: "language",
              title: "Always be polite — even when you disagree",
              groups: [
                {"label":"Disagree politely","phrases":["I understand your point (name), but I have a different perspective.","I see your point (name), but I am finding it difficult to agree.","I respect your position, but I have to take a different stance."]},
                {"label":"Refer back","phrases":["I agree with … when they stated that …","Building on …’s point, …","You mentioned that …"]},
                {"label":"Add your view","phrases":["In my view, …","From my reading of …, it seems that …","I would add that …"]}
              ]
            }
          ]
        },
        {
          id: "d2",
          short: "Netiquette",
          minutes: 12,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d2-d2.svg",
          title: "Activity 1 Discussion netiquette",
          goal: "Decide if three replies follow the netiquette — then write a better one.",
          blocks: [
            {
              type: "model",
              title: "Initial Post",
              text: "Defining green jobs is complex due to their diverse nature and the varying interpretations by different entities (Vona et al., 2019; Winter and Moore, 2013). Furthermore, there is ambiguity in whether green jobs are simply traditional roles redefined as \"green\" in the shift towards a low-carbon economy, or new roles created within various sectors."
            },
            {
              type: "quiz",
              id: "d2-q",
              title: "Do the reply posts follow the discussion netiquette? Answer Yes or No.",
              shared: ["Yes","No"],
              items: [
                {
                  q: "1 · While I see your point about the complexity of defining green jobs, I believe it's crucial to recognize that the shift towards a low-carbon economy inherently involves both redefining traditional roles and creating new ones.",
                  answer: "Yes",
                  why: "Polite, refers back to the post and gives a point of view."
                },
                {
                  q: "2 · That's nonsense. What's important is to realise that moving to a low-carbon economy means we have to both rethink old jobs and come up with new ones. You can't believe everything you read.",
                  answer: "No",
                  why: "This reply was impolite."
                },
                {
                  q: "3 · I agree that defining green jobs is tricky because there are many different types and interpretations. Green jobs can be found in various fields like renewable energy, energy efficiency, waste management, and sustainable farming. Each field has its own idea of what a green job is e.g. installing solar panels is a green job in renewable energy, while organic farming is a green job in agriculture. Different organizations also have their own views on green jobs. Governments might focus on how green jobs help reduce carbon emissions and promote sustainability; private companies might look at the economic benefits, like creating jobs and growing the market.; and NGOs might emphasize the social and environmental benefits, like improving public health and protecting natural resources.",
                  answer: "No",
                  why: "This post does not express the poster’s own point of view."
                }
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Now rewrite <b>reply 2</b> so that it follows the netiquette. Keep the idea — change the tone. The lights turn on when you use each element."},
            {
              type: "detect",
              id: "d2-dt",
              label: "Reply studio",
              title: "Write a polite reply",
              checks: [
                {"label":"Polite opener","color":"#3f7a3a","any":["I understand your point","I see your point","I respect your position","While I see","I agree","Thank you for"]},
                {"label":"Refers back","color":"#3a58a0","any":["you mentioned","you stated","your point","your post","as you said"]},
                {"label":"Own view","color":"#c4562f","any":["I believe","In my view","I think","I would argue","in my opinion","from my perspective"]}
              ],
              avoid: [{"label":"Impolite word","any":["nonsense","ridiculous","stupid","wrong!"]}],
              items: [
                {
                  task: "My polite version of reply 2",
                  rows: 4,
                  placeholder: "I see your point about …, but …",
                  model: "I see your point about the complexity of defining green jobs. However, in my view, moving to a low-carbon economy means we have to both rethink old jobs and come up with new ones. It may also be useful to compare definitions from several sources before we decide."
                }
              ]
            }
          ]
        },
        {
          id: "d3",
          short: "Emails",
          minutes: 18,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d2-d3.svg",
          title: "Activity 2 Email vocabulary",
          goal: "Choose formal language for a lecturer and learn the parts of a university email.",
          blocks: [
            {
              type: "key",
              title: "Emails at university",
              points: ["At some stage during your studies, you will need to send an email at university. Your vocabulary changes depending on <b>who</b> you are emailing — e.g. a classmate or a lecturer."]
            },
            {
              type: "sort",
              id: "d3-sort",
              title: "1. Formality · Which words/phrases are appropriate when emailing a lecturer?",
              buckets: [{"label":"Appropriate for a lecturer","letter":"✓"},{"label":"Not appropriate","letter":"✗"}],
              items: [
                {"text":"Dear Ms Smith,","answer":0,"why":"Correct."},
                {"text":"Hi teacher,","answer":1,"why":"Too informal."},
                {"text":"I need some more time for Assessment 1.","answer":1,"why":"Too demanding. Be more polite when asking for something."},
                {"text":"I am writing to ask for an extension for Assessment 1.","answer":0,"why":"Correct."},
                {"text":"See you tomorrow.","answer":1,"why":"It has no context of where you will see the teacher."},
                {"text":"See you in class tomorrow.","answer":0,"why":"Correct."},
                {"text":"Kind Regards, John Pang","answer":0,"why":"Correct."},
                {"text":"Bye, Johnny","answer":1,"why":"Too informal."}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d2-email-anatomy.svg",
              size: "wide",
              alt: "A sample student email with eleven numbered parts. To: jane.smith@sydenty.edu.au (1). Subject: Student # 12345678, DEC 10.3 Extension request (2). Dear Ms Smith (3). I am writing to you in regards to an extension for Assessment 1 (4). I have been unwell the last week and have found it hard to catch up on the required classwork that would help me complete the assessment (5). I would only need two extra days beyond the due date (6). I have attached a medical certificate for your viewing (7). Thank you for your consideration (8). Kind Regards (9). Samuel Blank (10). #12345678 (11).",
              caption: "A sample student email. Each colour is one function."
            },
            {
              type: "match",
              id: "d3-match",
              title: "2. Email functions · Match each section to its function",
              left: [
                "1 · jane.smith@sydenty.edu.au",
                "2 · Student # 12345678, DEC 10.3 Extension request",
                "3 · Dear Ms Smith",
                "4 · I am writing to you in regards to an extension for Assessment 1.",
                "5 · I have been unwell the last week and have found it hard to catch up …",
                "6 · I would only need two extra days beyond the due date.",
                "7 · I have attached a medical certificate for your viewing.",
                "8 · Thank you for your consideration.",
                "9 · Kind Regards,",
                "10 · Samuel Blank",
                "11 · #12345678"
              ],
              right: [
                "lecturer’s email address",
                "Brief details of what the email is about",
                "Greeting",
                "Explanation for the email",
                "Outline the reason",
                "Proposed solution",
                "Evidence",
                "Thanking the recipient",
                "Sign-off",
                "student name",
                "student number"
              ]
            },
            {
              type: "language",
              title: "More email phrases for university",
              groups: [
                {"label":"Subject line","phrases":["Student # … : Question about Assessment 2","Student # … : Request for a meeting","Student # … : Extension request"]},
                {"label":"Open","phrases":["Dear Dr / Professor / Ms …,","I am writing to ask about / to request …","I am a student in your … course (Tuesday tutorial)."]},
                {"label":"Ask politely","phrases":["Would it be possible to …?","I was wondering if you could …","Could you please clarify …?"]},
                {"label":"Close","phrases":["Thank you for your time / consideration.","I look forward to hearing from you.","Kind regards, / Best regards,"]}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"<b>Use it — a real email.</b> You want to ask your lecturer for a short meeting to discuss your group presentation topic. Write the email (60–90 words). The lights turn on when you use each part. Bring it to class tomorrow: your partner will check it with the 11 parts above."},
            {
              type: "detect",
              id: "d3-dt",
              label: "Email studio",
              title: "Email to your lecturer",
              checks: [
                {"label":"Formal greeting","color":"#3f7a3a","any":["Dear "]},
                {"label":"Purpose","color":"#3a58a0","any":["I am writing to","I am writing in regards to","I am writing regarding"]},
                {"label":"Polite request","color":"#c4562f","any":["Would it be possible","I was wondering if","Could you please"]},
                {"label":"Thanks + sign-off","color":"#8a4f9e","any":["Kind regards","Best regards","Thank you for your time","Thank you for your consideration"]}
              ],
              avoid: [{"label":"Too informal","any":["/\\b(hi|hey|bye|cheers|thx|u)\\b/"]}],
              items: [
                {
                  task: "Subject: Student # … : Request for a meeting",
                  rows: 7,
                  placeholder: "Dear Dr …,",
                  model: "Dear Dr Lee,<br>I am writing to request a short meeting about my group presentation for DEC10. Our group is researching the causes and effects of green jobs, and we are not sure if our focus is too broad. Would it be possible to meet for ten minutes after Wednesday’s class? I would be happy to come to your office at another time if that is more convenient.<br>Thank you for your time.<br>Kind regards,<br>Mina Park<br>#12345678"
                }
              ]
            },
            {
              type: "tip",
              text: "When you request an extension, it may or may not be granted. Read more: University of Sydney — <a href=\"https://www.sydney.edu.au/students/simple-extensions.html\" target=\"_blank\" rel=\"noopener\">Simple extensions</a> · <a href=\"https://www.sydney.edu.au/students/special-consideration.html\" target=\"_blank\" rel=\"noopener\">Special consideration and arrangements</a> · <a href=\"https://www.sydney.edu.au/students/browse.html?category=your-studies&amp;topic=exams-and-assessment\" target=\"_blank\" rel=\"noopener\">Exams and assessment</a>."
            }
          ]
        },
        {
          id: "d4",
          short: "Group chat",
          minutes: 15,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d2-d4.svg",
          title: "Activity 3 Appropriate language for online collaboration",
          goal: "Collect polite phrases for four things you do when you work on a group document online.",
          blocks: [
            {
              type: "key",
              title: "Effective and appropriate language for online collaboration",
              points: [
                "When you collaborate with a group online (e.g. in Google or Microsoft applications), you will probably:",
                "<b>suggest edits</b> · <b>disagree with someone’s edits</b> · <b>ask questions to clarify something</b> · <b>give positive feedback</b>."
              ]
            },
            {
              type: "chat",
              title: "Comments on a shared group document",
              right: "Leo",
              lines: [
                ["Mina","<mark>Maybe we could</mark> move the definition of green skills to the start?"],
                ["Leo","<mark>Not sure. Can we talk about this?</mark> I think the example works better first."],
                ["Mina","<mark>I don’t quite get this – let's discuss</mark> in class tomorrow?"],
                ["Leo","Sure! And your new chart — <mark>great idea!</mark>"]
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"For each function, look at the example. Then write <b>more</b> phrases or sentences you could use. Prepare to share them <b>first thing in tomorrow’s class</b>."},
            {
              type: "table",
              id: "d4-tab",
              title: "My phrases for online collaboration",
              columns: ["Functions","My phrases and sentences"],
              fixed: [
                "Suggesting edits<br><i>Maybe we could ...</i>",
                "Disagreeing with someone’s edits<br><i>Not sure. Can we talk about this?</i>",
                "Asking questions to clarify something<br><i>I don’t quite get this – let's discuss ...</i>",
                "Giving positive feedback<br><i>Great idea!</i>"
              ]
            },
            {
              type: "tip",
              text: "<b>Keep it short and friendly.</b> Comments in a shared document are not emails — but they are still polite. No CAPITALS (they look like shouting)."
            },
            {"type":"do","n":2,"who":"group","text":"<b>Use it this week.</b> Open your group’s presentation file (or group chat) and leave <b>two real comments</b>: one suggestion and one piece of positive feedback. Use your new phrases."},
            {"type":"do","n":3,"who":"class","text":"<b>Tomorrow in class:</b> stand up and read your <b>best</b> phrase. The class votes for the politest one."},
            {
              type: "fields",
              title: "Exit ticket · 8A",
              fields: [{"id":"d4-exit","label":"Write the two comments you left for your group (or will leave).","rows":2,"placeholder":"Maybe we could … · Great idea to …"}]
            }
          ]
        }
      ]
    },
    {
      id: "testlab",
      number: "05",
      code: "9A",
      minutes: 30,
      tone: "amber",
      art: "dec10/assets/week3/s-d2-testlab.svg",
      title: "Listening Assessment Preparation Homework",
      subtitle: "Your Test Lab on Canvas",
      outcome: "You complete the Canvas listening practice using today’s tactics — and you know which one to improve next.",
      activities: [
        {
          id: "e1",
          short: "Test Lab",
          minutes: 30,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d2-e1.svg",
          title: "Test Lab: the listening practice on Canvas",
          goal: "Use four tactics from today in a real practice task.",
          blocks: [
            {
              type: "flip",
              title: "Four tactics from today",
              hint: "Turn each card before you start.",
              items: [
                {"front":"Map it","back":"Before you listen, draw the centre and the main branches. Add only key words and numbers while you listen."},
                {"front":"Hear the cause","back":"Causes and effects hide in many forms: <i>stem from, one of the drivers is, means that, so that, drives, fuels</i>."},
                {"front":"Count your words","back":"NO MORE THAN THREE WORDS means three. Over the limit = zero."},
                {"front":"Main idea or detail?","back":"A main-idea question is about the <b>whole</b> talk. Don’t choose an answer that is true for only one part."}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Follow the instructions on <b>Canvas</b> (Week 3 › Listening Assessment Preparation). Answer in one sitting, without pausing."},
            {"type":"do","n":2,"who":"alone","text":"Then rate yourself. Bring your weakest tactic to class — your teacher may ask."},
            {"type":"scale","id":"e1-map","title":"After the practice","statement":"My notes showed the main ideas and the key numbers.","ends":["Not at all","Every time"]},
            {"type":"scale","id":"e1-cause","statement":"I could hear causes and effects, even without “because”.","ends":["Not at all","Every time"]},
            {"type":"scale","id":"e1-lim","statement":"I kept every short answer inside the word limit.","ends":["Not at all","Every time"]},
            {"type":"fields","fields":[{"id":"e1-next","label":"My weakest tactic, and one thing I will do about it this week","rows":2}]},
            {"type":"do","n":3,"who":"pair","text":"<b>Tomorrow, teach-back in 60 seconds:</b> tell a partner your <b>strongest</b> tactic and how you used it. Your partner tells you theirs. Steal one good idea!"}
          ]
        }
      ]
    }
  ],
  extras: [
    {
      id: "x1",
      short: "Criticality",
      minutes: 15,
      grouping: "4 groups",
      art: "dec10/assets/week3/v/v-d10w3d2-x1.svg",
      title: "Criticality (Optional if time)",
      goal: "Imagine how an ordinary job could go green.",
      blocks: [
        {"type":"do","n":1,"who":"group","text":"Your teacher will divide you into 4 groups. Your group chooses <b>one</b> occupation (spin, or choose). Be as creative as you want about how the job could go green."},
        {
          type: "spinner",
          id: "x1-spin",
          title: "Choose an occupation",
          text: "Some of these are the jobs from the listening that people don’t think of as “green”.",
          reels: [{"label":"Occupation","items":["Fleet managers","Compliance managers","Health workers","Data scientists","Cafe managers","IT workers","Hairdressers","Administrators"]}]
        },
        {
          type: "table",
          id: "x1-tab",
          title: "How could this job go green?",
          columns: ["Occupation","What areas are they responsible for?","What areas of their responsibility can go green?","Example"],
          extraRows: true
        },
        {
          type: "language",
          title: "Speculate and suggest",
          groups: [
            {"label":"Speculate","phrases":["A … could probably …","It’s possible that in the future …","This might mean that …"]},
            {"label":"Suggest","phrases":["One way to go green would be to …","They could switch to …","By …ing, they could reduce …"]}
          ]
        },
        {"type":"talk","title":"Present to the class","prompts":["Explain your table in one minute. Which idea is the most creative?","Which group’s job would change the most?"]}
      ]
    }
  ],
  glossary: [
    ["green skill","a skill that directly combats the effects of climate change, e.g. by reducing pollution or preserving natural resources","Energy efficiency is a green skill."],
    ["green talent","people who have green skills","More companies are looking for green talent."],
    ["greening roles","jobs that are in the process of going green","Fleet managers are among the fastest greening roles."],
    ["skills gap","the difference between the skills employers need and the skills workers have","There is a skills gap: only one in eight workers has green skills."],
    ["upskilling","learning new skills or improving existing ones","Upskilling workers helps them take advantage of the green transition."],
    ["retooling","updating or adapting skills or tools to meet new requirements","Some sectors will need retooling, not complete retraining."],
    ["vocational skills","practical skills for a specific trade or profession","Vocational skills are learned through practice and training."],
    ["encompass","to include within a larger range","Green jobs encompass traditional roles too."],
    ["compliance","following rules, standards or laws","A compliance manager checks environmental laws."],
    ["resilience","the ability to recover quickly from difficulties","Resilience is one of the skills of the future."],
    ["mind map","notes drawn as a centre with branches of key words","I took notes on the interview as a mind map."],
    ["causal language","words that show a cause or an effect","“Stem from”, “drives” and “leads to” are causal language."],
    ["netiquette","polite behaviour online (net + etiquette)","Good netiquette means no emojis on an academic discussion board."],
    ["sign-off","the polite words at the end of an email","“Kind regards” is a good sign-off."],
    ["synthesise","combine ideas from several sources into one clear picture","In the role play, you synthesise three texts."]
  ]
};
