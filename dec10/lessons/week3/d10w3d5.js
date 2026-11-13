/* DEC10 · Week 3 · Day 5 — Present, plan, discuss.
   Built from the Week 3 Teacher's Book, ordered by the revised weekly map: each Day page holds the parts TAUGHT that weekday.
   Taught on FRIDAY: 15A Group research summary presentations #4–5 (90 min) · 18A AST: Feedback literacy - Action plan (2) (30 min)
   · 20A Introduction to Interactive Discussion Assessment (20 min) · 21A Individual question practice (30 min)
   · 23A Interactive Discussion: Discussion Skills (1) (70 min — the line-up warmer is cut, as the map says)
   · 24A Listening & Reading Practice Assessment (on Canvas) · 25A Introduction to the Integrated Writing Assessment (IWA) Homework.
   Protected texts are in sources.js and are never changed here. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w3d5",
  week: 3,
  day: 5,
  title: "Present, plan, discuss",
  duration: "About 4 hours + homework",
  question: "How do you take part well in an academic discussion — and keep getting better?",
  questionKind: "Big question",
  questionLabel: "Today’s big question",
  journey: "Groups 4 and 5 give their Research Summary presentations and everyone gives feedback. Then you write Action Plan (2), meet the Interactive Discussion Assessment, practise individual questions on a real text, and learn the first three discussion skills. At home: the Listening & Reading Practice Assessment and your first look at the Integrated Writing Assessment.",
  image: "dec10/assets/week3/hero-d10w3d5.svg",
  imageAlt: "Illustration: a round-table discussion. Four students sit around a table with a green-economy book, a wind turbine and a solar panel; speech bubbles show “Sorry to jump in, but…”, “According to Bowen et al.…” and “Let’s kick off by…”. Behind them a presenter stands at a screen with a cause-and-effect chart, and a clipboard shows Action Plan (2).",
  finish: {"title":"Week 4","text":"Eco-tourism: Integrated writing workshops, Reading and Listening to write — and more discussion skills"},
  goalShort: "the Interactive Discussion and the Integrated Writing Assessment",
  sections: [
    {
      id: "rspres2",
      number: "01",
      code: "15A",
      minutes: 90,
      tone: "plum",
      art: "dec10/assets/week3/s-d5-rspres2.svg",
      title: "Group research summary presentations #4–5",
      subtitle: "Presentations 4 and 5 · peer & teacher feedback",
      outcome: "You deliver a structured presentation, answer audience questions on the spot, and judge your own and your peers’ presentations.",
      activities: [
        {
          id: "p1",
          short: "Where we are",
          minutes: 5,
          grouping: "Class",
          art: "dec10/assets/week3/v/v-d10w3d5-p1.svg",
          title: "Group Research Summary Presentations",
          goal: "Know what happens today — answer with your hands, then bet.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week3/d5-rs-days.svg",
              size: "wide",
              alt: "Week 3 in four steps. Monday: individuals research and prepare a summary of research. Tuesday: individuals form groups, share their summaries and prepare a group presentation. Thursday: presentations 1, 2 and 3. Friday (today): presentations 4 and 5. Topic: The workforce of the future. Rhetorical function: cause and effect.",
              caption: "Today is the last day: Presentations 4 and 5."
            },
            {
              type: "key",
              title: "Today in four facts",
              points: [
                "Each group presents for <b>8–10 minutes</b> + <b>5 minutes</b> for follow-up questions.",
                "Topic: <b>The workforce of the future</b>. Rhetorical function: <b>cause and effect</b>.",
                "New this week: you ask <b>clarification</b>, <b>probing</b> AND <b>AST</b> (Academic Success Toolkit) questions.",
                "There is <b>no mark</b> — just peer and teacher feedback with the Peer and Teacher Presentation Feedback Tool."
              ]
            },
            {"type":"do","n":1,"who":"class","text":"<b>Stand up.</b> Your teacher reads each question below. Show your answer with <b>1, 2 or 3 fingers</b>. Wrong? Sit down. Then bet on your answers here."},
            {
              type: "bet",
              id: "p1-bet",
              title: "Quick check — bet on your answer",
              items: [
                {"q":"How long does each group present?","options":["3–5 minutes","8–10 minutes","15–20 minutes"],"answer":"8–10 minutes"},
                {
                  q: "Which questions can you ask this week?",
                  options: ["Clarification and probing only","Clarification, probing and AST","AST only"],
                  answer: "Clarification, probing and AST",
                  why: "In Week 2 you asked clarification and probing questions. This week you add AST questions."
                },
                {
                  q: "Who is your group’s feedback for?",
                  options: ["The whole presenting group","One presenter that your teacher gives you"],
                  answer: "One presenter that your teacher gives you",
                  why: "Feedback is for individual speakers. Your teacher allocates one presenter to each watching group."
                }
              ]
            },
            {"type":"sticky","title":"Phrase of the day · say it like an academic","text":"<b>“One major cause of … is …, and as a result, …”</b><br>Presenters: use it in your talk. Audience: use it in your question.","color":"yellow"}
          ]
        },
        {
          id: "p2",
          short: "Get ready",
          minutes: 10,
          grouping: "Presentation groups",
          art: "dec10/assets/week3/v/v-d10w3d5-p2.svg",
          title: "Last-minute practice and preparation",
          goal: "Presenters rehearse. The audience warms them up with questions.",
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
            {
              type: "do",
              n: 1,
              who: "group",
              text: "<b>Groups 4 and 5:</b> run through your talk once. Each speaker practises the <b>first sentence</b> and the <b>hand-over</b>."
            },
            {
              type: "do",
              n: 2,
              who: "class",
              text: "<b>Audience — walk and ask.</b> Stand up. Find one person from Group 4 or 5. Spin below and ask them one AST question. Listen, say “Thanks — good luck!” and find a second person. Sit down after 4 minutes."
            },
            {
              type: "language",
              title: "Language for your group presentation",
              groups: [
                {
                  label: "Open",
                  phrases: [
                    "Good morning, everyone. <b>Today we’re going to look at</b> how … is changing the workforce.",
                    "Our presentation <b>is divided into</b> three parts.",
                    "<b>First</b>, I’ll … <b>Then</b> … will … <b>Finally</b>, …"
                  ]
                },
                {
                  label: "Cause & effect",
                  phrases: [
                    "<b>One major cause of</b> … <b>is</b> …",
                    "… <b>has led to</b> / <b>is driving</b> a demand for …",
                    "<b>As a result</b>, / <b>Consequently</b>, workers will need …",
                    "<b>This is largely due to</b> …",
                    "<b>One likely effect</b> is that …"
                  ]
                },
                {
                  label: "Use sources",
                  phrases: ["<b>According to</b> Bowen et al. (2018), …","A LinkedIn report <b>found that</b> …","<b>My research shows that</b> …"]
                },
                {
                  label: "Hand over",
                  phrases: ["<b>Now I’ll hand over to</b> Mei, who will explain …","<b>Thanks</b>, Ali. <b>Following on from</b> Ali’s point, …","<b>Building on</b> what Sam said, …"]
                },
                {"label":"Close","phrases":["<b>To sum up</b>, …","<b>The key takeaway is</b> …","<b>Thank you for listening.</b> We’re happy to take any questions."]}
              ]
            },
            {
              type: "do",
              n: 3,
              who: "group",
              text: "<b>Hot seat — AST questions.</b> The speaker <b>stands up</b>. Someone spins and asks. The speaker answers about <b>how they prepared</b>, without notes, in 30–45 seconds. Take turns."
            },
            {
              type: "spinner",
              id: "p2-spin",
              title: "Answer an AST question on the spot",
              reels: [
                {
                  label: "AST question",
                  items: [
                    "How did you decide who does what in preparing this presentation?",
                    "How did you make sure everyone’s ideas were considered?",
                    "How did you manage your time preparing for this presentation?",
                    "What methods did you use to research information for this week’s topic?",
                    "Did you find it easier to use library resources or online resources? Why?",
                    "Did you use any AI tools? How did you use them?",
                    "Did your research change your view of the workforce of the future?",
                    "How did you use the feedback from Week 2 in this presentation?"
                  ]
                },
                {
                  label: "Start your answer with",
                  items: [
                    "To be honest, at first we …",
                    "The main thing we did was …",
                    "We decided to … because …",
                    "Looking back, I think …",
                    "One thing that really helped was …"
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Answering questions — and buying time",
              tabs: false,
              groups: [
                {"label":"Buy time","phrases":["<b>That’s a good question.</b>","<b>Let me think about that</b> for a second.","<b>If I understand you correctly</b>, you’re asking …"]},
                {"label":"Answer about your process","phrases":["<b>First we</b> …, <b>and then we</b> …","<b>What worked well was</b> …","<b>The biggest challenge was</b> … <b>so we</b> …"]},
                {
                  label: "If you don’t know",
                  phrases: ["<b>I’m not sure</b>, but <b>I think</b> …","I <b>didn’t find</b> data on that, <b>but</b> …","<b>That would be</b> an interesting thing to research."]
                }
              ]
            }
          ]
        },
        {
          id: "p3",
          short: "Toolkit",
          minutes: 5,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d5-p3.svg",
          title: "Summary of procedure per group presentation",
          goal: "Know the four steps, the three kinds of question — and your audience job.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week3/d5-rs-cycle.svg",
              size: "wide",
              alt: "One group presentation, about 30 minutes, in four steps. 1 (8–10 min): the group presents; the audience listens and fills in the feedback tool. 2: the audience writes one clarification, probing or AST question while the group reflects; a few students ask. 3 (5–7 min): the teacher gives the group feedback; the other groups agree on feedback with at least one action point. 4 (5 min): each presenter sits with their feedback group, hears the feedback, and the forms are sent.",
              caption: "Every group: the same four steps, about 30 minutes."
            },
            {"type":"do","n":1,"who":"class","text":"<b>Point to the corner!</b> Your teacher reads a question. Point: <b>front</b> = clarification ? · <b>left</b> = probing ⤓ · <b>right</b> = AST ★. Then sort the questions here."},
            {"type":"download","id":"ip-questions","note":"The question sheet: <b>clarification</b> and <b>probing</b> questions are about the content; <b>AST</b> questions are about how the group prepared."},
            {
              type: "sort",
              id: "p3-q",
              title: "Clarification, probing or AST?",
              buckets: [
                {"label":"Clarification — I didn’t understand","letter":"?"},
                {"label":"Probing — go deeper","letter":"⤓"},
                {"label":"AST — how did you prepare?","letter":"★"}
              ],
              items: [
                {"text":"Could you explain what you mean by “green skills”?","answer":0},
                {"text":"Sorry, did you say one in eight or one in eighty workers?","answer":0},
                {"text":"Why do you think automation affects some jobs more than others?","answer":1},
                {"text":"What would happen if workers did not retrain?","answer":1},
                {"text":"How did your group overcome disagreements?","answer":2},
                {"text":"What methods did you use to find your sources?","answer":2}
              ]
            },
            {
              type: "language",
              title: "Question starters",
              tabs: false,
              groups: [
                {"label":"Clarification","phrases":["<b>Could you explain what you mean by</b> …?","<b>Sorry, did you say</b> … or …?","<b>So, are you saying that</b> …?"]},
                {"label":"Probing","phrases":["<b>Why do you think</b> …?","<b>What evidence</b> is there that …?","<b>What would happen if</b> …?"]},
                {"label":"AST","phrases":["<b>How did you decide</b> …?","<b>How did your group overcome</b> …?","<b>In the future, how would you</b> …?"]}
              ]
            },
            {"type":"do","n":2,"who":"group","text":"<b>Audience jobs.</b> In your watching group, everyone takes one job for Presentation 4. Tap your job. (You swap jobs for Presentation 5.)"},
            {"type":"tip","text":"Your teacher may give each person a <b>paper job card</b>, and the language spotter a <b>bingo half-sheet</b>. No paper? Tap your job below and play the bingo on screen in Presentation 4."},
            {
              type: "figure",
              src: "dec10/assets/week3/d5-audience-jobs.svg",
              size: "wide",
              alt: "Four audience jobs. 1 Feedback scribe: fills in the feedback tool for your presenter. 2 Language spotter: plays phrase bingo and writes the speaker’s name. 3 Evidence hunter: notes one number and its source. 4 Question master: stands up and asks the group’s question. Swap jobs for Presentation 5.",
              caption: "No passive listeners: every person in the audience has a job."
            },
            {
              type: "cards",
              title: "My audience job for Presentation 4",
              pick: "p3-job",
              items: [
                {"label":"Feedback scribe","text":"I fill in the Feedback Tool for our presenter."},
                {"label":"Language spotter","text":"I play phrase bingo: I write the speaker’s name when I hear a phrase."},
                {"label":"Evidence hunter","text":"I note one number or fact and its source."},
                {"label":"Question master","text":"I stand up and ask our group’s question."}
              ]
            }
          ]
        },
        {
          id: "p4",
          short: "Group 4",
          minutes: 30,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d5-p4.svg",
          title: "Presentation 4",
          goal: "Do your audience job, ask, take a stand — then give your presenter useful feedback.",
          blocks: [
            {
              type: "steps",
              title: "Mission card · Presentation 4",
              items: [
                {"who":"group","text":"<b>Group 4 presents</b> (8–10 min). Audience: do <b>your job</b> — scribe, spotter, hunter or question master."},
                {"who":"alone","text":"<b>Everyone writes one question</b> (clarification, probing or AST). Question masters: <b>stand up</b> to ask, like at a real conference."},
                {"who":"class","text":"<b>Opinion line</b> (2 min): stand on the line for the statement below. Two people explain where they stand."},
                {"who":"group","text":"<b>Agree on your feedback</b> (5–7 min) while the teacher gives the group feedback. Include at least one action point."},
                {"who":"group","text":"<b>Give your feedback</b> to your presenter face to face (5 min). Then send the form."}
              ]
            },
            {
              type: "bingo",
              id: "p4-bingo", label: "Who said it?",
              title: "Language spotter bingo · Presentation 4",
              hint: "When a presenter uses the phrase, write their name in the square. Four in a row? Raise your hand quietly — tell the class after the talk.",
              squares: [
                {"text":"Today we’re going to look at …"},{"text":"… is divided into …"},{"text":"First, … Then … Finally, …"},{"text":"One major cause of … is …"},
                {"text":"… has led to …"},{"text":"… is driving a demand for …"},{"text":"As a result, …"},{"text":"Consequently, …"},
                {"text":"This is largely due to …"},{"text":"One likely effect is that …"},{"text":"According to …"},{"text":"… found that …"},
                {"text":"Now I’ll hand over to …"},{"text":"Building on what … said, …"},{"text":"To sum up, …"},{"text":"The key takeaway is …"}
              ]
            },
            {
              type: "form",
              id: "p4-f",
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
                    "The cause/s were clearly stated.",
                    "Evidence for the cause/s was given.",
                    "The effect/s were clearly stated.",
                    "Evidence for the effect/s was given.",
                    "A solution was clearly stated.",
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
                    "The grammar used was largely accurate and we could understand the meaning.",
                    "The vocabulary used was largely accurate and we could understand the meaning.",
                    "We could hear functional language (EG evaluating; explaining cause/effect; explaining problem)."
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
              fields: [
                {"id":"p4-q","label":"My question for Group 4","rows":2,"placeholder":"Could you explain what you mean by … ? / Why do you think … ? / How did your group decide … ?"},
                {"id":"p4-evid","label":"Evidence hunter: one number or fact + its source","rows":1,"placeholder":"9% a year — LinkedIn report (Hyman & Smith, 2023)"}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d5-opinion-line.svg",
              size: "wide",
              alt: "An opinion line across the room from Not at all to Completely. Students stand on the line and explain: I was convinced by … because … / I wasn’t sure about … since …",
              caption: "Stand up and take a stand. Then explain it in one sentence."
            },
            {"type":"scale","id":"p4-line","title":"Opinion line","statement":"Group 4’s solution would really work.","ends":["Not at all","Completely"],"mid":"Partly"},
            {
              type: "do",
              n: 1,
              who: "group",
              text: "Say your feedback face to face. Start with something positive. Use at least <b>three</b> expressions from the bank. Language spotters: tell your presenter which bingo phrases you heard."
            },
            {
              type: "language",
              title: "Language for giving peer feedback on presentations",
              groups: [
                {
                  label: "Make it clearer",
                  phrases: ["To make it clearer that …, you could …","To strengthen …, it might help …","Perhaps consider …-ing … rather than …","For better …, I suggest you …"]
                },
                {"label":"Remind","phrases":["Don’t forget to …","Remember to …","Be mindful of …","Try … to …, so …"]},
                {
                  label: "Suggest",
                  phrases: ["It might be beneficial to …","You could possibly …","I recommend …-ing …, so …","… was good. To make it even better, you might …","It would help if …"]
                }
              ]
            }
          ]
        },
        {
          id: "p5",
          short: "Group 5",
          minutes: 30,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d5-p5.svg",
          title: "Presentation 5",
          goal: "New job, question points, four corners — and even more specific feedback.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"<b>Swap jobs!</b> Pass your job to the person on your left. Scribe → spotter → hunter → question master → scribe."},
            {
              type: "steps",
              title: "Mission card · Presentation 5",
              items: [
                {"who":"group","text":"<b>Group 5 presents</b> (8–10 min). Audience: do your <b>new</b> job."},
                {"who":"alone","text":"<b>Write one question.</b> Try a type you did not use for Group 4. Question masters stand up to ask."},
                {"who":"class","text":"<b>Four corners</b> (2 min): walk to the corner for the strongest part of the talk. Tell the people there why."},
                {"who":"group","text":"<b>Agree on your feedback</b> (5–7 min). Include at least one action point."},
                {"who":"group","text":"<b>Give your feedback</b> face to face (5 min). Then send the form."}
              ]
            },
            {
              type: "key",
              title: "Question points for your team",
              points: [
                "Your watching group wins points for each question it asks: <b>clarification = 1</b> · <b>probing = 2</b> · <b>AST = 3</b>.",
                "A point only counts if the question is <b>clear</b> and <b>polite</b> (use a question starter from the Toolkit)."
              ]
            },
            {
              type: "form",
              id: "p5-f",
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
                    "The cause/s were clearly stated.",
                    "Evidence for the cause/s was given.",
                    "The effect/s were clearly stated.",
                    "Evidence for the effect/s was given.",
                    "A solution was clearly stated.",
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
                    "The grammar used was largely accurate and we could understand the meaning.",
                    "The vocabulary used was largely accurate and we could understand the meaning.",
                    "We could hear functional language (EG evaluating; explaining cause/effect; explaining problem)."
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
              fields: [
                {"id":"p5-q","label":"My question for Group 5","rows":2,"placeholder":"Sorry, did you say … ? / What evidence is there that … ? / How did you manage your time … ?"},
                {"id":"p5-evid","label":"Evidence hunter: one number or fact + its source","rows":1,"placeholder":"Only one in eight workers … — LinkedIn (Hyman & Smith, 2023)"}
              ]
            },
            {"type":"do","n":2,"who":"class","text":"<b>Four corners.</b> Stand up and walk to the corner for the strongest part of Group 5’s talk. Tell the people there why: “<b>The strongest part was</b> … <b>because</b> …”"},
            {
              type: "choose",
              id: "p5-corner",
              title: "The strongest part of Group 5’s talk was …",
              options: ["the problem","the causes","the effects","the solution"]
            },
            {
              type: "do",
              n: 3,
              who: "group",
              text: "<b>Role play before you meet your presenter.</b> One person plays the presenter. Practise the feedback chat: <b>praise → one thing to improve → one action point</b>. Then do it for real."
            },
            {
              type: "chat",
              title: "A feedback chat that works",
              right: "Presenter",
              lines: [
                ["Feedback group","<mark>One thing you did really well was</mark> your hand-over to Mei — it flowed naturally."],
                ["Presenter","Thanks! What about my slides?"],
                ["Feedback group","They were clear. <mark>To make it even better, you might</mark> add the source under the chart — we weren’t sure where the 9% came from."],
                ["Presenter","Good point. Anything else?"],
                ["Feedback group","<mark>Our action point is:</mark> practise saying “According to LinkedIn …” when you show the number."],
                ["Presenter","OK, I’ll do that next time. <mark>Thanks for the feedback.</mark>"]
              ]
            },
            {
              type: "language",
              title: "Receiving feedback politely",
              tabs: false,
              groups: [
                {"label":"Thank","phrases":["<b>Thanks, that’s really helpful.</b>","<b>I appreciate</b> the comment about …"]},
                {"label":"Check","phrases":["<b>Do you mean that</b> I should …?","<b>Could you give me an example of</b> …?"]},
                {"label":"Commit","phrases":["<b>Next time, I’ll</b> …","<b>I’ll work on</b> … <b>before</b> Week 6."]}
              ]
            }
          ]
        },
        {
          id: "p6",
          short: "Reflection",
          minutes: 10,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d5-p6.svg",
          title: "Reflection",
          goal: "Walk, talk, look back — then decide what you will do better next time.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"<b>Walk and talk</b> (3 min). Stand up. Find someone from a <b>different</b> group. Walk slowly around the room and talk about your tab’s questions. Then sit down and write."},
            {
              type: "tabs",
              title: "Choose your tab",
              tabs: [
                {
                  label: "I presented this week",
                  blocks: [
                    {
                      type: "talk",
                      title: "Discuss in your presentation group",
                      prompts: ["What did you do well — individually and as a group?","What do you want to do better in your next presentation — individually and as a group?"]
                    },
                    {
                      type: "fields",
                      fields: [
                        {"id":"p6-well","label":"What I did well","rows":2,"placeholder":"I … / As a group, we …"},
                        {"id":"p6-better","label":"What I will do better next time","rows":2,"placeholder":"Next time, I will …"}
                      ]
                    }
                  ]
                },
                {
                  label: "What I learned from watching",
                  blocks: [
                    {
                      type: "talk",
                      title: "Discuss in your group",
                      prompts: ["Which presentation this week was easiest to follow? Why?","Which answer to a question impressed you most? What did the speaker do?"]
                    },
                    {
                      type: "fields",
                      fields: [{"id":"p6-learn","label":"From watching this week, I will …","rows":3,"placeholder":"I noticed that … so in my next presentation I will …"}]
                    }
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Reflecting on a performance",
              tabs: false,
              groups: [
                {"label":"Went well","phrases":["<b>I felt confident when</b> …","<b>Our hand-overs were</b> much smoother than in Week 2."]},
                {"label":"To improve","phrases":["<b>I struggled with</b> …","<b>If I did it again, I would</b> …"]}
              ]
            },
            {
              type: "checklist",
              id: "p6-save",
              title: "Before you leave",
              items: [
                "I sent my feedback forms to the presenters.",
                "I saved the feedback forms I received in my “Research & Seminar Presentations – Feedback & Action Plans” folder.",
                "After class: I will continue my research for my group’s seminar topic and the final Interactive Presentation Assessment."
              ]
            },
            {
              type: "fields",
              fields: [{"id":"p6-exit","label":"Exit ticket · one sentence for my next presentation with a cause-and-effect phrase","rows":2,"placeholder":"One major cause of … is …, and as a result, …"}]
            }
          ]
        }
      ]
    },
    {
      "id": "action2",
      "number": "02",
      "code": "18A",
      "minutes": 30,
      "tone": "teal",
      "art": "dec10/assets/week3/s-d5-action2.svg",
      "title": "AST: Feedback literacy - Action plan (2)",
      "subtitle": "What feedback literacy is — and a plan that works",
      "outcome": "You understand what feedback literacy is, judge which feedback matters most, and turn it into a specific action plan that you explain to a classmate.",
      "activities": [
        {
          "id": "f1",
          "short": "Lead-in",
          "minutes": 3,
          "grouping": "Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-f1.svg",
          "title": "Feedback that changed something",
          "goal": "Remember feedback that really helped you — and work out why it worked.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "Think of feedback that <b>really changed</b> how you did something — in sport, music, driving, cooking, a job or at school. Tell your partner the story in <b>one minute</b>. Then swap."
            },
            {
              "type": "talk",
              "title": "Tell the story",
              "prompts": [
                "Who gave you the feedback, and what exactly did they say?",
                "What did you <b>do</b> after you heard it?",
                "Why did it work? Was it the feedback itself — or what <b>you</b> did with it?"
              ]
            },
            {
              "type": "language",
              "title": "Tell your feedback story",
              "tabs": false,
              "groups": [
                {
                  "label": "The feedback",
                  "phrases": [
                    "<b>The most useful feedback I ever got was from</b> my …",
                    "<b>They told me to</b> … / <b>They pointed out that</b> …"
                  ]
                },
                {
                  "label": "What you did",
                  "phrases": [
                    "<b>After that, I started</b> + -ing …",
                    "<b>At first I felt</b> …, <b>but then I</b> …"
                  ]
                },
                {
                  "label": "Why it worked",
                  "phrases": [
                    "<b>It worked because</b> it was specific / I practised it every day."
                  ]
                }
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "class",
              "text": "<b>Hands up.</b> Your teacher asks: “What made the difference — the <b>feedback</b> or the <b>action</b>?” Vote, then two volunteers explain their story."
            },
            {
              "type": "sticky",
              "title": "The point of today",
              "text": "Feedback does not improve anything by itself. <b>What you do with it</b> does. The skill of using feedback well has a name: <b>feedback literacy</b>.",
              "color": "green"
            }
          ]
        },
        {
          "id": "f2",
          "short": "Feedback literacy",
          "minutes": 6,
          "grouping": "Class → Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-f2.svg",
          "title": "What is feedback literacy?",
          "goal": "Learn the four things that students with strong feedback literacy do — and find your strongest and weakest.",
          "blocks": [
            {
              "type": "key",
              "title": "Feedback literacy",
              "points": [
                "<b>Feedback literacy</b> is the understanding, skills and attitudes you need to <b>make sense of feedback</b> and <b>use it</b> to improve your work (Carless &amp; Boud, 2018).",
                "At university you get feedback from lecturers, tutors and classmates on essays, presentations and tutorials. It only helps if you know what to do with it.",
                "It is one of the skills in your <b>Academic Success Toolkit (AST)</b>. You use it again in your Portfolio video and in the Week 7 Interactive Presentation."
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "class",
              "text": "Your teacher presents the four features. Tap each number and read the <b>✗ weak</b> and <b>✓ strong</b> examples."
            },
            {
              "type": "hotspot",
              "src": "dec10/assets/week3/d5-feedback-literacy.svg",
              "size": "wide",
              "alt": "Feedback literacy as a cycle of four steps around a speech bubble labelled Feedback: 1 Appreciate feedback, 2 Make judgements, 3 Manage emotions, 4 Take action. An arrow from step 4 leads to the next task.",
              "title": "Four features of feedback literacy",
              "hint": "Tap 1–4. Based on Carless & Boud (2018).",
              "spots": [
                {
                  "x": 11,
                  "y": 18.7,
                  "label": "1",
                  "title": "1 · Appreciate feedback",
                  "color": "#2f7d6b",
                  "text": "You see feedback as <b>help</b>, not as a mark. You read all of it — the comments too, not only the ticks.<br>✗ “It’s only practice, so it doesn’t matter.”<br>✓ “This shows me what the audience really noticed.”"
                },
                {
                  "x": 67.3,
                  "y": 18.7,
                  "label": "2",
                  "title": "2 · Make judgements",
                  "color": "#3a58a0",
                  "text": "You compare the feedback with your own view of your work, and you look for <b>patterns</b>.<br>✗ “One person said Needs work, so I’m bad at it.”<br>✓ “Four out of five people said Needs work on evidence — that’s a pattern.”"
                },
                {
                  "x": 67.3,
                  "y": 73,
                  "label": "3",
                  "title": "3 · Manage emotions",
                  "color": "#b07d12",
                  "text": "Feedback can hurt. You stay <b>calm and open</b>: you don’t argue and you don’t give up.<br>✗ “They’re wrong. My slides were fine.”<br>✓ “That’s disappointing — but maybe they couldn’t see the numbers from the back.”"
                },
                {
                  "x": 11,
                  "y": 73,
                  "label": "4",
                  "title": "4 · Take action",
                  "color": "#c4562f",
                  "text": "You turn feedback into <b>specific steps</b> — and you do them before the next task.<br>✗ “I’ll practise more.”<br>✓ “I’ll rehearse with a stopwatch three times on Sunday.”"
                }
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "<b>Check.</b> Which feature does each student show? Sort the comments with your partner."
            },
            {
              "type": "sort",
              "id": "f2-sort",
              "title": "Which feature is it?",
              "buckets": [
                {
                  "label": "Appreciate feedback",
                  "letter": "1"
                },
                {
                  "label": "Make judgements",
                  "letter": "2"
                },
                {
                  "label": "Manage emotions",
                  "letter": "3"
                },
                {
                  "label": "Take action",
                  "letter": "4"
                }
              ],
              "items": [
                {
                  "text": "“I read every comment, not just the ticks. The comments tell me <i>why</i>.”",
                  "answer": 0
                },
                {
                  "text": "“My teacher’s comment is like free advice from an expert.”",
                  "answer": 0
                },
                {
                  "text": "“Three people mentioned my speed, so that is my main problem. One comment about slides is less important.”",
                  "answer": 1
                },
                {
                  "text": "“I agree with most of it, but my timing was fine — the timer started late.”",
                  "answer": 1
                },
                {
                  "text": "“I felt annoyed at first, so I read it again the next day.”",
                  "answer": 2
                },
                {
                  "text": "“I didn’t argue. I said ‘Thanks, that’s useful’ and asked one question.”",
                  "answer": 2
                },
                {
                  "text": "“Before Week 6, I will record my talk twice and check my pauses.”",
                  "answer": 3
                },
                {
                  "text": "“I’ve already changed my first slide because of what my group said.”",
                  "answer": 3
                }
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "pair",
              "text": "<b>Be honest.</b> Which feature is your <b>strongest</b>? Which is your <b>weakest</b>? Tell your partner, with an example from your Week 2 or Week 3 feedback."
            },
            {
              "type": "language",
              "title": "Talk about your feedback habits",
              "tabs": false,
              "groups": [
                {
                  "label": "Strongest",
                  "phrases": [
                    "<b>I’m quite good at</b> + -ing …, <b>because</b> I always …"
                  ]
                },
                {
                  "label": "Weakest",
                  "phrases": [
                    "<b>I find it hard to</b> …, <b>especially when</b> …",
                    "<b>I tend to</b> … <b>instead of</b> + -ing …"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1",
          "short": "Look back",
          "minutes": 5,
          "grouping": "Research Summary groups",
          "art": "dec10/assets/week3/v/v-d10w3d5-a1.svg",
          "title": "Reflect on Action Plan (1)",
          "goal": "Check what happened to the goals you set in Week 2.",
          "blocks": [
            {
              "type": "figure",
              "src": "dec10/assets/week3/d5-plan-path.svg",
              "size": "wide",
              "alt": "A path with four stops: Week 2 presentation and feedback, Action Plan 1, Week 3 presentation and feedback, Action Plan 2 (today). Arrows show that each plan is used in the next presentation.",
              "caption": "Each plan feeds the next presentation. Today you close the loop for Week 3."
            },
            {
              "type": "do",
              "n": 1,
              "who": "alone",
              "text": "On your computer, open your <b>Research & Seminar Presentations – Feedback & Action Plans</b> folder. Open your <b>Action Plan (1)</b>."
            },
            {
              "type": "do",
              "n": 2,
              "who": "group",
              "text": "Discuss the three questions in your Research Summary Presentation group. Each person speaks for about one minute. Think of <b>feature 4</b>: did you really <b>take action</b> on your plan?"
            },
            {
              "type": "talk",
              "title": "Talk about Action Plan (1)",
              "prompts": [
                "Did you achieve your goals?",
                "Are there any goals that you still want to work on?",
                "What do you need to do to achieve these goals next time?"
              ]
            },
            {
              "type": "language",
              "title": "Talk about your progress",
              "groups": [
                {
                  "label": "Success",
                  "phrases": [
                    "<b>I managed to</b> … <b>this time</b>.",
                    "<b>I’ve made progress with</b> …",
                    "<b>This time I remembered to</b> …"
                  ]
                },
                {
                  "label": "Still working on it",
                  "phrases": [
                    "<b>I still need to work on</b> …",
                    "<b>I didn’t quite manage to</b> … <b>because</b> …",
                    "<b>It’s getting better, but</b> …"
                  ]
                },
                {
                  "label": "Next time",
                  "phrases": [
                    "<b>Next time, I’m going to</b> …",
                    "<b>To achieve this, I need to</b> …"
                  ]
                }
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "class",
              "text": "<b>Opinion line.</b> Stand up. One wall is “Not at all”, the other wall is “Completely”. Stand where you are for the statement below. Tell your neighbour why in 30 seconds. Then sit down and move the slider."
            },
            {
              "type": "scale",
              "id": "a1-scale",
              "title": "Be honest",
              "statement": "I achieved the goals in my Action Plan (1).",
              "ends": [
                "Not at all",
                "Completely"
              ],
              "mid": "Some of them"
            },
            {
              "type": "do",
              "n": 4,
              "who": "alone",
              "text": "Download the <b>Action Plan (2) template</b> and save it in the same folder."
            },
            {
              "type": "download",
              "id": "action-plan-2",
              "note": "You fill in page 1 in Activity 2 and page 2 in Activity 4."
            },
            {
              "type": "sticky",
              "title": "Phrase of the day · say it like an academic",
              "text": "<b>“I’ve made progress with …, but I still need to work on …”</b><br>Use it in your plan and in your next tutorial.",
              "color": "green"
            }
          ]
        },
        {
          "id": "a2",
          "short": "Needs work",
          "minutes": 7,
          "grouping": "Alone → Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-a2.svg",
          "title": "Action Plan (2) · Steps 1–3: What needs work?",
          "goal": "Learn to read feedback like an expert with an example — then find your own patterns and compare them with Week 2.",
          "blocks": [
            {
              "type": "group",
              "title": "First, an example: Mina’s feedback",
              "label": "Worked example",
              "goal": "How do you decide what matters most?"
            },
            {
              "type": "text",
              "title": "Mina’s Week 3 Feedback Tools (5 forms) · a summary",
              "list": [
                "<b>#3 Evidence for the cause/s was given:</b> Needs work × 4 · Mostly × 1",
                "<b>#10 The presenter referred to sources:</b> Needs work × 3 · Mostly × 2",
                "<b>#14 The speech flowed well:</b> Mostly × 3 · Yes × 2",
                "<b>#12 Within the time limit:</b> Needs work × 1 · Yes × 4",
                "<b>Comments:</b> “Great slides!” · “Where is the number from?” · “Say the author’s name.” · “A bit fast.” · “Nice eye contact.”"
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "You are Mina’s feedback coach. Answer the four questions with your partner."
            },
            {
              "type": "quiz",
              "id": "a2-mina",
              "title": "Help Mina choose her priorities",
              "items": [
                {
                  "q": "What is Mina’s clearest pattern?",
                  "options": [
                    "Evidence for the causes (#3)",
                    "Speech flow (#14)",
                    "The time limit (#12)"
                  ],
                  "answer": "Evidence for the causes (#3)",
                  "why": "Four of five forms say Needs work, and a comment asks “Where is the number from?”"
                },
                {
                  "q": "Should the time limit (#12) be a top priority?",
                  "options": [
                    "Yes — someone said Needs work",
                    "No — one person out of five is not a pattern"
                  ],
                  "answer": "No — one person out of five is not a pattern",
                  "why": "One comment is an opinion; four comments are a pattern. Mina can check her timing, but she shouldn’t build her plan around it."
                },
                {
                  "q": "Which two problems have the same cause?",
                  "options": [
                    "#3 evidence and #10 sources",
                    "#14 flow and #12 time",
                    "#10 sources and #14 flow"
                  ],
                  "answer": "#3 evidence and #10 sources",
                  "why": "Both are about showing where the information comes from. One action — saying the source aloud with each number — can fix both."
                },
                {
                  "q": "Which comment does <b>not</b> help Mina plan?",
                  "options": [
                    "“Great slides!”",
                    "“Where is the number from?”",
                    "“Say the author’s name.”"
                  ],
                  "answer": "“Great slides!”",
                  "why": "It is nice to hear, but it doesn’t tell her what to do next. Specific comments are easier to act on."
                }
              ]
            },
            {
              "type": "key",
              "title": "Read your feedback like an expert: the 4 Cs",
              "numbered": true,
              "points": [
                "<b>Count</b> — what do <b>most</b> people say? That’s a pattern.",
                "<b>Connect</b> — do two problems have one cause? One action can fix both.",
                "<b>Compare</b> — did you get the same feedback in Week 2? Then it is a priority.",
                "<b>Choose</b> — two or three priorities. Not everything at once."
              ]
            },
            {
              "type": "group",
              "title": "Now your own feedback",
              "label": "Your turn"
            },
            {
              "type": "do",
              "n": 2,
              "who": "alone",
              "text": "Look back at the feedback you received on your <b>Week 3</b> presentation (or Seminar, if you did one) on the Peer and Teacher Feedback Tool. Use the 4 Cs: which aspects received the most <b>Needs work</b>? Mark them on page 1 of the Action Plan (2) template."
            },
            {
              "type": "download",
              "id": "feedback-tool",
              "note": "Use the forms your classmates and your teacher sent you. A spare form is here if you need one."
            },
            {
              "type": "toggle",
              "title": "Want more? See an example",
              "hint": "Two forms side by side",
              "blocks": [
                {
                  "type": "figure",
                  "src": "dec10/assets/week3/d5-progress.svg",
                  "size": "wide",
                  "alt": "Two small copies of the Content Delivery part of the feedback tool side by side, Week 2 and Week 3. In Week 2, Evidence for the cause/s and Evidence for the effect/s are marked Needs work. In Week 3, Evidence for the cause/s has moved to Mostly, and Evidence for the effect/s is still Needs work. An arrow says: progress, keep working on effects.",
                  "caption": "Example: compare your two forms. What moved? What did not?"
                }
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "alone",
              "text": "Fill in the progress tracker. Then read the <b>Action plan for further improvement</b> section of your forms."
            },
            {
              "type": "table",
              "id": "a2-track",
              "title": "My progress tracker",
              "columns": [
                "Aspect",
                "Week 2 feedback",
                "Week 3 feedback",
                "Better, the same or worse?"
              ],
              "rows": 3
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "a2-said",
                  "label": "What did people write in “Action plan for further improvement”?",
                  "placeholder": "My teacher suggested… My classmates said…",
                  "rows": 3
                }
              ]
            },
            {
              "type": "do",
              "n": 4,
              "who": "pair",
              "text": "<b>Stand up</b> and find a partner from another group. Tell them <b>one aspect that improved</b> and <b>one that still needs work</b>. Your partner asks one follow-up question. Swap."
            },
            {
              "type": "language",
              "title": "Compare your feedback",
              "tabs": false,
              "groups": [
                {
                  "label": "Improved",
                  "phrases": [
                    "<b>Compared with Week 2</b>, my … <b>has improved</b>.",
                    "<b>I got fewer</b> “Needs work” <b>for</b> …"
                  ]
                },
                {
                  "label": "Still needs work",
                  "phrases": [
                    "<b>I’m still getting</b> “Needs work” <b>on</b> …",
                    "<b>Both times, people said</b> …"
                  ]
                },
                {
                  "label": "Partner’s question",
                  "phrases": [
                    "<b>Why do you think</b> that improved?",
                    "<b>What will you do differently</b> this time?"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a3",
          "short": "Make it specific",
          "minutes": 4,
          "grouping": "Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-a3.svg",
          "title": "From feedback to action",
          "goal": "A good action says what, how and when. Race to make vague actions specific.",
          "blocks": [
            {
              "type": "key",
              "title": "A good action is specific",
              "points": [
                "<b>What</b> exactly will you do? (start with a verb)",
                "<b>How</b> will you do it?",
                "<b>When</b> will you do it — before the next presentation?"
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "Match each aspect to a specific action."
            },
            {
              "type": "match",
              "id": "a3-match",
              "title": "Aspect → specific action",
              "left": [
                "Providing evidence",
                "Intonation",
                "Equal contribution",
                "Answering questions",
                "Visuals"
              ],
              "right": [
                "Write down any sources I get my information from, add the source to the ppt and practise referring to the source.",
                "Mark the stressed words in my script and record myself twice to check my voice goes up and down.",
                "Agree on a timer: each member speaks for two minutes, and we rehearse once with a stopwatch.",
                "Ask a groupmate to give me three surprise questions on Wednesday and answer each in 30 seconds.",
                "Put one number and its source on each slide, with no more than 20 words of text."
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "<b>Beat the clock (2 minutes).</b> Make the vague actions specific. When all three lights are on, <b>stand up</b>! The first three pairs standing read their action to the class — the class says “specific” or “still vague”."
            },
            {
              "type": "detect",
              "id": "a3-fix",
              "title": "Fix the vague action",
              "checks": [
                {
                  "label": "Starts with an action verb",
                  "color": "#2f7d6b",
                  "any": [
                    "/^\\s*(record|write|practise|practice|time|ask|watch|read|mark|learn|check|use|add|prepare|rehearse|put|say|look|listen|plan|film|cut|repeat)\\b/i"
                  ]
                },
                {
                  "label": "Says when",
                  "color": "#3a58a0",
                  "any": [
                    "before",
                    "by ",
                    "every",
                    "tonight",
                    "tomorrow",
                    "week",
                    "/\\b(mon|tues|wednes|thurs|fri|satur|sun)day\\b/i",
                    "times"
                  ]
                },
                {
                  "label": "A number or amount",
                  "color": "#b07d12",
                  "any": [
                    "/\\d/",
                    "/\\b(one|two|three|four|five|twice|once)\\b/i"
                  ]
                }
              ],
              "items": [
                {
                  "task": "“Practise more.”",
                  "placeholder": "Rehearse my part three times with a stopwatch before …",
                  "rows": 2,
                  "model": "Rehearse my part three times with a stopwatch on Sunday and cut anything over two minutes."
                },
                {
                  "task": "“Be more confident.”",
                  "placeholder": "Learn my first and last sentences …",
                  "rows": 2,
                  "model": "Learn my first and last sentences by heart before Week 6 and look at three different people while I say them."
                }
              ]
            }
          ]
        },
        {
          "id": "a4",
          "short": "My plan",
          "minutes": 5,
          "grouping": "Alone → Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-a4.svg",
          "title": "Action Plan (2) · Step 4: Write your action plan",
          "goal": "Use all your feedback and reflections to write your plan.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "alone",
              "text": "Use all the feedback in <b>Needs work</b> and <b>Action plan for further improvement</b>, and <b>your reflections on your Week 2 and 3 presentations</b>. Write your action plan. Then copy it into the last section of your Action Plan (2) template."
            },
            {
              "type": "model",
              "title": "Example from the template",
              "rows": [
                [
                  "Aspect",
                  "EG providing evidence"
                ],
                [
                  "Specific action/s I will take to improve",
                  "EG write down any sources I get my information from, add the source to the ppt and practise referring to the source"
                ]
              ]
            },
            {
              "type": "table",
              "id": "a4-plan",
              "title": "Action plan for further improvement",
              "columns": [
                "Aspect",
                "Specific action/s I will take to improve"
              ],
              "rows": 4
            },
            {
              "type": "language",
              "title": "Action plan frames",
              "groups": [
                {
                  "label": "Actions",
                  "phrases": [
                    "<b>I will</b> + verb … (I will record …)",
                    "<b>Before my next presentation, I am going to</b> …",
                    "<b>To improve my</b> intonation, <b>I will</b> …"
                  ]
                },
                {
                  "label": "Check",
                  "phrases": [
                    "<b>I will know it worked if</b> …",
                    "<b>By</b> Week 6, <b>I will have</b> …"
                  ]
                }
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "class",
              "text": "<b>Plan swap — two rounds.</b> Stand up and find a partner. Read your plan. Your partner asks <b>“How exactly?”</b>, <b>“When?”</b> and <b>“How will you know it worked?”</b> After 1 minute, swap; then find a new partner. Make your plan more specific if needed."
            },
            {
              "type": "checklist",
              "id": "a4-check",
              "title": "Is my plan ready?",
              "meter": [
                "ticked",
                "Plan ready — save it!"
              ],
              "items": [
                "Each action starts with a verb (record, write, practise…).",
                "Each action says how and when.",
                "My actions match the aspects with the most “Needs work”.",
                "I kept the goals from Action Plan (1) that I still need.",
                "I saved my Action Plan (2) in my folder."
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "pair",
              "text": "<b>Feedback buddy.</b> Your last partner is your feedback buddy. Write their name below. Before the next presentation, ask each other: “<b>Did you do it? What happened?</b>”"
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "a4-buddy",
                  "label": "My feedback buddy — and when we check",
                  "rows": 1,
                  "placeholder": "Name · e.g. Monday of Week 6, before class"
                }
              ]
            },
            {
              "type": "do",
              "n": 4,
              "who": "alone",
              "text": "<b>Use it — exit ticket.</b> Write a short message to your teacher about your top action. This is how you write to a lecturer: polite, short and specific."
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "a4-email",
                  "label": "My message to my teacher",
                  "rows": 4,
                  "placeholder": "Dear …,\nAfter the Week 3 feedback, my main goal is to … . To do this, I will … before Week 6.\nCould you let me know if …?\nBest regards,\n…"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "idintro",
      "number": "03",
      "code": "20A",
      "minutes": 20,
      "tone": "blue",
      "art": "dec10/assets/week3/s-d5-idintro.svg",
      "title": "Introduction to Interactive Discussion Assessment",
      "subtitle": "What happens, why — and what the teachers listen for",
      "outcome": "You know every step of the Interactive Discussion Assessment, why you do it and how it is marked, and you set your first goal for Week 10.",
      "activities": [
        {
          "id": "j1",
          "short": "Lead-in",
          "minutes": 3,
          "grouping": "Groups of three",
          "art": "dec10/assets/week3/v/v-d10w3d5-j1.svg",
          "title": "A good discussion — and how to mark one",
          "goal": "Talk about what makes a discussion good, then guess what the teachers will listen for.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "group",
              "text": "Think of a really <b>good discussion</b> you have had — in a class, at work or at a family dinner. Tell your group in one minute."
            },
            {
              "type": "talk",
              "title": "Discuss",
              "prompts": [
                "What made it good? Think about the <b>people</b>, not the topic.",
                "Was there someone who made it <b>worse</b>? What did they do?"
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "group",
              "text": "Now <b>you</b> are the teacher. You must give each student a score for a <b>15-minute group discussion</b>. What <b>four things</b> would you listen for? Write them below."
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "j1-guess",
                  "label": "Four things we would listen for",
                  "rows": 4,
                  "placeholder": "1 Do they give reasons for their ideas?\n2 …\n3 …\n4 …"
                }
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "class",
              "text": "Each group reads out <b>one</b> idea. Keep your list: in Activity 3 you check it against the real marking rubric."
            }
          ]
        },
        {
          "id": "j2",
          "short": "The task",
          "minutes": 6,
          "grouping": "Class → Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-j2.svg",
          "title": "The Interactive Discussion from start to finish",
          "goal": "See every step of the assessment — and why it is just like a university tutorial.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "class",
              "text": "Your teacher walks you through the assessment, step by step. Tap each number as they talk."
            },
            {
              "type": "hotspot",
              "src": "dec10/assets/week3/d5-id-journey.svg",
              "size": "wide",
              "alt": "The Interactive Discussion Assessment as a path with six stops: 1 Week 10, a group of 3 or 4 students from different classes; 2 the day before, read two texts at home; 3 Part 1, two individual questions each; 4 Part 2, a 12 to 15 minute group discussion about a quote and three options; 5 two teachers mark each student; 6 worth 15 per cent.",
              "title": "Your Interactive Discussion, step by step",
              "hint": "Tap 1–6.",
              "spots": [
                {
                  "x": 10.4,
                  "y": 42.5,
                  "label": "1",
                  "title": "1 · Week 10 · your group",
                  "color": "#3a58a0",
                  "text": "Thursday or Friday of <b>Week 10</b> (with a practice discussion on the Tuesday). You sit with <b>3–4 students</b>, usually from <b>different DEC10 classes</b> — so practise with many different people before then."
                },
                {
                  "x": 26,
                  "y": 42.5,
                  "label": "2",
                  "title": "2 · The day before · two texts",
                  "color": "#b07d12",
                  "text": "You get <b>two reading texts</b> before the assessment. Read them carefully at home and find the key ideas. Bring them <b>printed</b>, with short notes (not a script) and a pen. <b>No phone or tablet.</b>"
                },
                {
                  "x": 41.7,
                  "y": 42.5,
                  "label": "3",
                  "title": "3 · Part 1 · Individual questions",
                  "color": "#c4562f",
                  "text": "Each student answers <b>two questions</b>: one about the <b>ideas in a section of a text</b>, and one asking for your <b>personal response</b>. Listen to the others — you can link your answer to theirs. You practise this next, in 21A."
                },
                {
                  "x": 58.3,
                  "y": 42.5,
                  "label": "4",
                  "title": "4 · Part 2 · Group discussion · 12–15 min",
                  "color": "#2f7d6b",
                  "text": "The group discusses a question about a <b>quote</b> from one of the texts, and <b>evaluates three options</b> for an issue. There is <b>no break</b> between Part 1 and Part 2. This is where the discussion skills from 23A matter."
                },
                {
                  "x": 74,
                  "y": 42.5,
                  "label": "5",
                  "title": "5 · Two teachers mark you",
                  "color": "#7a4a8c",
                  "text": "Two teachers listen and give <b>each student</b> a score with the same rubric (four skills — Activity 3). Your score is <b>yours</b>, not the group’s."
                },
                {
                  "x": 89.6,
                  "y": 42.5,
                  "label": "6",
                  "title": "6 · 15% of your result",
                  "color": "#e64626",
                  "text": "Worth <b>15%</b> of your DEC10 result — half of your speaking score. It is the last assessment of the course."
                }
              ]
            },
            {
              "type": "key",
              "title": "Why do we have this assessment?",
              "points": [
                "At university, a <b>tutorial</b> works the same way: you read before class, the tutor asks you questions, and you discuss the readings with classmates you may not know well. The Interactive Discussion is a tutorial — with a score.",
                "It checks the DEC10 speaking outcomes: overall speaking, vocabulary and grammar, fixing communication breakdowns, fluency, and using ideas from texts."
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "<b>Quick check.</b> Don’t look at the picture. Answer with your partner, then bet on how sure you are."
            },
            {
              "type": "bet",
              "id": "j2-bet",
              "title": "How well do you know the task?",
              "proof": "Bet big only when you are sure.",
              "items": [
                {
                  "q": "When do you first see the two texts?",
                  "options": [
                    "In the room, at the start",
                    "Before the assessment — you read them at home",
                    "You never see them; you only listen"
                  ],
                  "answer": "Before the assessment — you read them at home",
                  "why": "You read them the day before and bring printed copies and notes."
                },
                {
                  "q": "Who is in your group?",
                  "options": [
                    "Friends from your own class",
                    "3–4 students, usually from different DEC10 classes",
                    "Your seminar group"
                  ],
                  "answer": "3–4 students, usually from different DEC10 classes",
                  "why": "That’s why it helps to discuss with many different classmates before Week 10."
                },
                {
                  "q": "What happens in Part 1?",
                  "options": [
                    "Each student gives a 3-minute talk",
                    "Each student answers two questions: one about the text, one personal response",
                    "The group answers one question together"
                  ],
                  "answer": "Each student answers two questions: one about the text, one personal response",
                  "why": "You practise both kinds of question in 21A today."
                },
                {
                  "q": "What happens in Part 2?",
                  "options": [
                    "The teachers ask each student more questions",
                    "The group discusses a quote and evaluates three options",
                    "Each student summarises a text"
                  ],
                  "answer": "The group discusses a quote and evaluates three options",
                  "why": "It is a real discussion for 12–15 minutes: you build on each other’s ideas."
                },
                {
                  "q": "Does everyone in the group get the same score?",
                  "options": [
                    "Yes — one group score",
                    "No — each student gets their own score"
                  ],
                  "answer": "No — each student gets their own score",
                  "why": "Two teachers mark every student with the rubric."
                }
              ]
            }
          ]
        },
        {
          "id": "j3",
          "short": "The rubric",
          "minutes": 6,
          "grouping": "Class → Groups of three",
          "art": "dec10/assets/week3/v/v-d10w3d5-j3.svg",
          "title": "What the teachers listen for",
          "goal": "Learn the four skills on the rubric, with weak and strong examples — and check your group’s guesses.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "class",
              "text": "Your teacher presents the four skills. Tap each one. <b>Groups:</b> look at your four guesses from Activity 1 — how many are on the real rubric?"
            },
            {
              "type": "hotspot",
              "src": "dec10/assets/week3/d5-id-four-skills.svg",
              "size": "wide",
              "alt": "A scorecard with four equal parts: 1 Argumentation skills (ideas, argumentation, critical thinking); 2 Engagement and interaction (individual questions, source selection, group discussion); 3 Pronunciation and flow (sounds, stress and intonation; speech flow; cohesion); 4 Language use (range and formality, vocabulary, grammar). Below: each skill gets a score, and the final score is the average of the four.",
              "title": "The four skills on the rubric",
              "hint": "Tap 1–4. Each skill is a quarter of your score.",
              "spots": [
                {
                  "x": 8.3,
                  "y": 17.4,
                  "label": "1",
                  "title": "1 · Argumentation skills",
                  "color": "#c4562f",
                  "text": "<b>Ideas:</b> make your key points clear; explain them and give examples.<br><b>Argumentation:</b> restate, evaluate, probe and challenge other people’s points.<br><b>Critical thinking:</b> compare other views with yours, then state your own position clearly."
                },
                {
                  "x": 55.4,
                  "y": 17.4,
                  "label": "2",
                  "title": "2 · Engagement & interaction",
                  "color": "#2f7d6b",
                  "text": "<b>Individual questions:</b> answer clearly, relevantly and without long hesitation.<br><b>Source selection:</b> choose relevant information from the texts and use it well.<br><b>Group discussion:</b> join in, take turns and help the group do the task together."
                },
                {
                  "x": 8.3,
                  "y": 56.2,
                  "label": "3",
                  "title": "3 · Pronunciation & flow",
                  "color": "#3a58a0",
                  "text": "<b>Sounds, stress, intonation:</b> listeners understand you without effort.<br><b>Speech flow:</b> keep going — if you get stuck, say it another way.<br><b>Cohesion:</b> link your ideas with connectors (however, as a result, for example)."
                },
                {
                  "x": 55.4,
                  "y": 56.2,
                  "label": "4",
                  "title": "4 · Language use",
                  "color": "#7a4a8c",
                  "text": "<b>Range and formality:</b> polite, academic language that suits a discussion.<br><b>Vocabulary:</b> a wide range; if you don’t know a word, explain it another way.<br><b>Grammar:</b> simple and complex sentences with few mistakes."
                }
              ]
            },
            {
              "type": "key",
              "title": "How the score works",
              "points": [
                "Each skill gets a score from <b>50 or less</b> to <b>76 or more</b>. Your final score is the <b>average</b> of the four.",
                "So a student with perfect grammar who hardly speaks can still score low: <b>engagement</b> is a quarter of the mark.",
                "And a student who talks all the time but never listens loses marks too: good discussions are a team effort."
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "group",
              "text": "Read the four pairs. What makes the second version stronger? Open “What changed?” to check."
            },
            {
              "type": "pairs",
              "title": "From weak to strong · one example for each skill",
              "ask": "What changed?",
              "items": [
                {
                  "from": "I agree.",
                  "to": "I agree with Lin that training matters, [[but who should pay for it?]] [[Vidican Auktor (2020) says]] policy makers need to identify training needs.",
                  "tag": "1 · Argumentation skills",
                  "note": "Restates, challenges with a question and supports the point with a source — not just “I agree”."
                },
                {
                  "from": "(silent for five minutes) … Yes. Me too.",
                  "to": "[[Sorry to jump in]] — could I add something? … [[Kai, what do you think?]]",
                  "tag": "2 · Engagement & interaction",
                  "note": "Takes the floor politely, then brings a quiet student into the discussion."
                },
                {
                  "from": "The … the … um … green … how to say … the job … um …",
                  "to": "Green jobs, [[or in other words]], jobs that protect the environment, are growing. [[As a result]], …",
                  "tag": "3 · Pronunciation & flow",
                  "note": "Rewords instead of stopping, and links ideas with connectors."
                },
                {
                  "from": "Green job is very good thing and many people want do it.",
                  "to": "Green jobs [[are an attractive option]] for many graduates, [[although]] the training [[can be expensive]].",
                  "tag": "4 · Language use",
                  "note": "Accurate grammar, more precise vocabulary and a complex sentence."
                }
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "group",
              "text": "<b>Check.</b> Which skill does each behaviour show? Sort them."
            },
            {
              "type": "sort",
              "id": "j3-sort",
              "title": "Which skill on the rubric?",
              "buckets": [
                {
                  "label": "Argumentation skills",
                  "letter": "1"
                },
                {
                  "label": "Engagement & interaction",
                  "letter": "2"
                },
                {
                  "label": "Pronunciation & flow",
                  "letter": "3"
                },
                {
                  "label": "Language use",
                  "letter": "4"
                }
              ],
              "items": [
                {
                  "text": "Says “That’s a good point, but have we considered …?”",
                  "answer": 0
                },
                {
                  "text": "Compares two views, then states their own position",
                  "answer": 0
                },
                {
                  "text": "Answers the personal question with a reason and an example",
                  "answer": 1
                },
                {
                  "text": "Asks a quiet group member for their opinion",
                  "answer": 1
                },
                {
                  "text": "Links ideas with “however” and “as a result”",
                  "answer": 2
                },
                {
                  "text": "Stresses the key words so listeners can follow",
                  "answer": 2
                },
                {
                  "text": "Says “Could I add something?” instead of “Wait, me!”",
                  "answer": 3
                },
                {
                  "text": "Uses precise words such as “transition” and “workforce” correctly",
                  "answer": 3
                }
              ]
            },
            {
              "type": "download",
              "id": "id-rubric-student",
              "note": "The four skills, what to do for each, and what each level looks like — in plain English. Save it in your DEC10 folder."
            },
            {
              "type": "tip",
              "text": "Want every detail? The full rubric (teacher’s edition) is on the <a href=\"#/assessments\">Assessments page</a> → Interactive Discussion."
            }
          ]
        },
        {
          "id": "j4",
          "short": "Be the examiner",
          "minutes": 5,
          "grouping": "Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-j4.svg",
          "title": "Be the examiner",
          "goal": "Judge a short discussion with the rubric — then set your first goal for Week 10.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "class",
              "text": "Three volunteers read this short discussion aloud (or read it in pairs). The topic is the quote from Paragraph D that you read in 21A."
            },
            {
              "type": "chat",
              "title": "Part 2 · The discussion begins",
              "lines": [
                [
                  "Ana",
                  "OK, let’s start. The writer says green skills give “a much more detailed view” than green jobs. <mark>I agree, because</mark> a job title doesn’t tell you what training people need."
                ],
                [
                  "Ben",
                  "Yes. I agree."
                ],
                [
                  "Chen",
                  "For me … um … the green skills … is more … more … important … because … um … the jobs is change."
                ],
                [
                  "Ana",
                  "<mark>So what you’re saying is</mark> that jobs are changing, so skills matter more? <mark>That’s a good point.</mark> <mark>According to</mark> Vidican Auktor, many existing jobs will get new tasks. Ben, <mark>what do you think</mark>?"
                ],
                [
                  "Ben",
                  "Green skills is good. Every people need it."
                ],
                [
                  "Ana",
                  "<mark>I see what you mean, but</mark> do <i>all</i> workers need them? An accountant, for example?"
                ],
                [
                  "Chen",
                  "Yes! Accountant now must count carbon. So also accountant needs."
                ]
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "You are the two teachers. Choose a level for each student on each skill. Then compare with another pair: do you agree?"
            },
            {
              "type": "grid",
              "id": "j4-grid",
              "title": "Our marks",
              "rows": [
                "Argumentation skills",
                "Engagement & interaction",
                "Pronunciation & flow",
                "Language use"
              ],
              "columns": [
                "Ana",
                "Ben",
                "Chen"
              ],
              "options": [
                "Developing",
                "Good",
                "Excellent"
              ]
            },
            {
              "type": "talk",
              "title": "Discuss",
              "prompts": [
                "Who would get the highest score? Why?",
                "Give Ben <b>one</b> tip. Give Chen <b>one</b> tip."
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "alone",
              "text": "<b>Your first goal for Week 10.</b> Which of the four skills is hardest for you now? Write <b>one specific action</b> for this week — what, how and when, like your Action Plan."
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "j4-goal",
                  "label": "My hardest skill now — and one specific action",
                  "rows": 3,
                  "placeholder": "My hardest skill is … because …\nThis week, I will … (when? how often?)"
                }
              ]
            },
            {
              "type": "do",
              "n": 4,
              "who": "pair",
              "text": "<b>Exit ticket.</b> Tell your partner your goal. Your partner asks: “<b>What exactly will you do?</b>”"
            },
            {
              "type": "tip",
              "text": "Forgot something later? Everything about this assessment is also on the <a href=\"#/assessments\">Assessments page</a> → Interactive Discussion, with a link back to this lesson."
            }
          ],
          "answers": {
            "title": "Suggested marks",
            "items": [
              [
                "Ana",
                "Excellent or Good on all four. She explains her view with a reason, restates Chen’s idea (“So what you’re saying is …”), uses the source, brings Ben in and challenges politely."
              ],
              [
                "Ben",
                "Developing. Very short turns with no reasons or examples, he doesn’t build on others’ ideas, and “Green skills is good. Every people need it.” has grammar errors."
              ],
              [
                "Chen",
                "Good on engagement — he joins in and has a strong idea (accountants and carbon). Developing on pronunciation &amp; flow (long pauses) and on language use (“the jobs is change”)."
              ],
              [
                "Tip for Ben",
                "Give a reason and an example every time: “I agree, <b>because</b> … <b>For example</b>, …”"
              ],
              [
                "Tip for Chen",
                "Reword instead of stopping (“<b>What I mean is</b> …”) and check is/are with plural nouns."
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "iqprac",
      "number": "04",
      "code": "21A",
      "minutes": 30,
      "tone": "clay",
      "art": "dec10/assets/week3/s-d5-iqprac.svg",
      "title": "Individual question practice",
      "subtitle": "Explain a writer’s view — then give your own",
      "outcome": "You can explain and respond to writers’ views in academic texts.",
      "activities": [
        {
          "id": "q0",
          "short": "Lead-in",
          "minutes": 3,
          "grouping": "Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-q0.svg",
          "title": "Green job or green skills?",
          "goal": "Talk about three workers and your own future job — and get a reason to read.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "Read about three workers. Who has a <b>green job</b>? Who needs <b>green skills</b>? Discuss for one minute."
            },
            {
              "type": "cards",
              "title": "Three workers",
              "items": [
                {
                  "label": "Sara · wind-turbine technician",
                  "text": "She repairs wind turbines on a wind farm."
                },
                {
                  "label": "Tom · accountant",
                  "text": "His company now asks him to report its carbon emissions every year."
                },
                {
                  "label": "Lin · hotel manager",
                  "text": "She has a plan to cut the hotel’s food waste and energy use."
                }
              ]
            },
            {
              "type": "talk",
              "title": "Now you",
              "prompts": [
                "Think of the job you want after university. Is it a green job?",
                "Will it need any green skills anyway? Which ones?"
              ]
            },
            {
              "type": "toggle",
              "title": "After you discuss",
              "hint": "The idea behind today’s text",
              "blocks": [
                {
                  "type": "key",
                  "points": [
                    "Only Sara has a typical <b>green job</b> — but all three need <b>green skills</b>.",
                    "That is the writer’s point in Paragraph D: looking at <b>skills</b> shows more clearly what training workers need. Read on to find out why."
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "qv",
          "short": "Key words",
          "minutes": 3,
          "grouping": "Alone → Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-qv.svg",
          "title": "Six words you need for Paragraph D",
          "goal": "Guess six key words from a short text, then check them.",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "alone",
              "text": "Read the short text. Guess the meaning of the six <b>bold</b> words from the context."
            },
            {
              "type": "text",
              "title": "Closing the coal mines",
              "text": "In many countries, <b>policy makers</b> have a difficult job. Coal mines are closing because the country wants to <b>transition towards</b> clean energy. But a large part of the <b>workforce</b> still works in coal and oil. Experts say the government must <b>differentiate between</b> two groups: workers whose <b>occupation</b> will disappear, and workers who can keep their job but need new skills. A new report tries to <b>synthesise</b> the ideas from twenty studies into one clear training plan."
            },
            {
              "type": "do",
              "n": 2,
              "who": "alone",
              "text": "Check your guesses: match each word to its meaning."
            },
            {
              "type": "match",
              "id": "qv-match",
              "title": "Match the words",
              "left": [
                "differentiate (between A and B)",
                "workforce",
                "transition (towards)",
                "policy makers",
                "synthesise",
                "occupation"
              ],
              "right": [
                "see or show the difference between two things",
                "all the people who work in a country, sector or company",
                "a change from one state to another",
                "people (often in government) who decide plans and rules",
                "combine ideas from different places into one clear summary",
                "a job or type of work"
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "pair",
              "text": "<b>Word ping-pong</b> (30 seconds). One person says a meaning. The other says the word. Swap."
            }
          ]
        },
        {
          "id": "q1",
          "short": "Read",
          "minutes": 5,
          "grouping": "Alone → Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-q1.svg",
          "title": "Activity 1 Prepare for individual questions",
          "goal": "Understand the key points in Paragraph D of Vidican Auktor (2020).",
          "blocks": [
            {
              "type": "do",
              "n": 1,
              "who": "alone",
              "text": "Review <b>Paragraph D</b> of <b>Vidican Auktor (2020)</b>. Focus on understanding the key points the writer is making. You have <b>5 minutes</b>. First read quickly for the main idea; then read again for detail."
            },
            {
              "type": "sources",
              "ids": [
                "vidican"
              ]
            },
            {
              "type": "passage",
              "id": "q1-d",
              "title": "Vidican Auktor (2020) · Paragraph D",
              "text": "D. Defining green skills is challenging for similar reasons to those related to green jobs. Cedefop (2012) defines green skills as “the knowledge, abilities, values and attitudes needed to live in, develop and support a sustainable and resource-efficient society.” OECD and Cedefop (2014) take a step further and define green skills as “the skills needed by the workforce, in all sectors and at all levels, in order to help the adaptation of products, services and processes to the transformations due to climate change and to environmental requirements and regulations.” Differentiating between green skills and green jobs is important, primarily because green skills offer a much more detailed view on the changes needed in the job market to transition towards the green economy. This then enables policy makers to identify and address specific training needs. Cedefop (2012) synthesizes three main ways in which the transition to a green economy affects needed skills: structural changes lead to increased demand for some occupations and decreased demand for others; new economic activity will create new occupations and there will be a need for new skills, qualifications and training; many existing occupations and industries will experience greening changes to tasks within their jobs, and this will require adjustments to the current training and qualification frameworks for these occupations."
            },
            {
              "type": "quiz",
              "id": "q1-gist",
              "title": "Read for the main idea",
              "items": [
                {
                  "q": "What is the main point of Paragraph D?",
                  "options": [
                    "Green jobs are easy to define, but green skills are not.",
                    "Looking at green skills, not only green jobs, shows more clearly what training workers need.",
                    "Policy makers should stop training workers for old occupations."
                  ],
                  "answer": "Looking at green skills, not only green jobs, shows more clearly what training workers need.",
                  "why": "“green skills offer a much more detailed view on the changes needed … This then enables policy makers to identify and address specific training needs.”"
                }
              ]
            },
            {
              "type": "quiz",
              "id": "q1-detail",
              "title": "Read for detail: three ways the green economy changes skills",
              "shared": [
                "Structural changes",
                "New economic activity",
                "Greening of existing jobs"
              ],
              "items": [
                {
                  "q": "Some occupations are needed more, and others less.",
                  "answer": "Structural changes",
                  "why": "“structural changes lead to increased demand for some occupations and decreased demand for others”"
                },
                {
                  "q": "Completely new jobs appear, with new qualifications and training.",
                  "answer": "New economic activity",
                  "why": "“new economic activity will create new occupations and there will be a need for new skills, qualifications and training”"
                },
                {
                  "q": "People keep the same job, but some of their tasks change.",
                  "answer": "Greening of existing jobs",
                  "why": "“many existing occupations and industries will experience greening changes to tasks within their jobs”"
                },
                {
                  "q": "Example: Tom the accountant now reports his company’s carbon emissions.",
                  "answer": "Greening of existing jobs",
                  "why": "His job is the same; one task is new."
                },
                {
                  "q": "Example: the country needs fewer coal miners and more solar-panel installers.",
                  "answer": "Structural changes",
                  "why": "Demand goes up for one occupation and down for another."
                }
              ]
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "q1-notes",
                  "label": "Key points — in my own words (notes only)",
                  "rows": 3,
                  "placeholder": "green skills = more detail than green jobs → …\n3 ways the green economy changes skills: 1 … 2 … 3 …"
                }
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "<b>Close the text.</b> Tell your partner the three ways the green economy changes skills in 30 seconds: “<b>First</b>, … <b>Second</b>, … <b>Third</b>, …”"
            }
          ]
        },
        {
          "id": "q2",
          "short": "Two kinds",
          "minutes": 6,
          "grouping": "Class → Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-q2.svg",
          "title": "Two kinds of individual question",
          "goal": "Know what each kind of question wants — see a strong answer to each — then check.",
          "blocks": [
            {
              "type": "figure",
              "src": "dec10/assets/week3/d5-iq-frames.svg",
              "size": "wide",
              "alt": "Two lanes. Question about the ideas in the text: name the writer, give the writer’s point, give the reason or detail, add an example from the text. Question about personal response: give your view, a reason, an example from your life or study, and link back to the text.",
              "caption": "Two kinds of question, two answer shapes."
            },
            {
              "type": "key",
              "title": "Ideas in the text vs. personal response",
              "points": [
                "<b>Ideas in the text:</b> show you understand the writer. Summarise in your own words — don’t read the text aloud.",
                "<b>Personal response:</b> your answer must be <b>relevant</b>, <b>coherent</b> and <b>extended</b> — not simply paraphrased ideas from the text."
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "class",
              "text": "Your teacher shows two strong answers. Notice the four steps in each one."
            },
            {
              "type": "model",
              "title": "Worked example 1 · A question about the ideas in the text",
              "text": "<i>Question: How does the writer define green skills?</i><br><br><b>[1 Writer]</b> Vidican Auktor <b>[2 Point]</b> explains that green skills are the knowledge and abilities people need to support a sustainable society. <b>[3 Detail]</b> The writer also gives a wider definition from the OECD and Cedefop: the skills the whole workforce needs to adapt to climate change and new environmental rules. <b>[4 Example]</b> In other words, green skills are not only for green jobs — every sector needs them.",
              "note": "In the speaker’s own words — nothing is read aloud. Four sentences, about 30–40 seconds."
            },
            {
              "type": "pairs",
              "title": "Worked example 2 · A personal response question: weak → strong",
              "ask": "Why is it stronger?",
              "items": [
                {
                  "from": "Q: Would you choose a course because it teaches green skills? A: “Yes, because green skills are important.”",
                  "to": "“[[Personally, I would]], [[because]] employers in engineering are starting to ask for green skills. [[For example]], my cousin’s company now needs staff who understand energy efficiency. [[That’s why]] it could help me find a job — [[and it links to the writer’s point that]] many existing jobs are changing.”",
                  "tag": "relevant · coherent · extended",
                  "note": "View → reason → example → link back to the text."
                }
              ]
            },
            {
              "type": "do",
              "n": 2,
              "who": "pair",
              "text": "What is wrong with these three answers? Choose one problem for each."
            },
            {
              "type": "quiz",
              "id": "q2-ccq",
              "title": "What is the problem?",
              "shared": [
                "Not relevant",
                "Not extended",
                "Read from the text"
              ],
              "items": [
                {
                  "q": "Q: <i>Which green skills would be most useful in your country?</i><br>A: “My country is very big and the weather is very hot.”",
                  "answer": "Not relevant",
                  "why": "It is about the country, but it doesn’t name any green skills."
                },
                {
                  "q": "Q: <i>Do you think schools should teach green skills?</i><br>A: “Yes, I think so.”",
                  "answer": "Not extended",
                  "why": "There is a view, but no reason, example or link to the text."
                },
                {
                  "q": "Q: <i>Why does the writer mention policy makers?</i><br>A: “This then enables policy makers to identify and address specific training needs.”",
                  "answer": "Read from the text",
                  "why": "It is copied word for word. Say it in your own words: “Because with more detail, governments can plan the right training.”"
                }
              ]
            },
            {
              "type": "do",
              "n": 3,
              "who": "class",
              "text": "<b>Stand up, sit down.</b> Your teacher reads each question below. <b>Stand up</b> if it is about the text. <b>Stay seated</b> if it asks for your personal response. Then sort them here."
            },
            {
              "type": "sort",
              "id": "q2-sort",
              "title": "Ideas in the text or personal response?",
              "buckets": [
                {
                  "label": "About the ideas in the text",
                  "letter": "T"
                },
                {
                  "label": "About your personal response",
                  "letter": "Me"
                }
              ],
              "items": [
                {
                  "text": "How does the writer define green skills?",
                  "answer": 0
                },
                {
                  "text": "What three changes does the writer say the green economy brings?",
                  "answer": 0
                },
                {
                  "text": "Why does the writer mention policy makers?",
                  "answer": 0
                },
                {
                  "text": "Which green skills would be most useful in your country?",
                  "answer": 1
                },
                {
                  "text": "Would you choose a course because it teaches green skills?",
                  "answer": 1
                },
                {
                  "text": "Do you think schools should teach green skills? Why?",
                  "answer": 1
                }
              ]
            },
            {
              "type": "do",
              "n": 4,
              "who": "pair",
              "text": "<b>Your turn (if you have time).</b> Write one question of each kind about Paragraph D. Read them to another pair. They say “text” or “me”."
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "q2-own-t",
                  "label": "My question about the ideas in the text",
                  "rows": 1,
                  "placeholder": "According to the writer, why …?"
                },
                {
                  "id": "q2-own-me",
                  "label": "My personal response question",
                  "rows": 1,
                  "placeholder": "Would you …? / How do you think …?"
                }
              ]
            }
          ]
        },
        {
          "id": "q3",
          "short": "Answer",
          "minutes": 10,
          "grouping": "Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-q3.svg",
          "title": "Answer the individual questions",
          "goal": "Answer one question of each type — clearly and at length — to three different partners.",
          "blocks": [
            {
              "type": "figure",
              "src": "dec10/assets/week3/d5-speed-circle.svg",
              "size": "wide",
              "alt": "Inner and outer circle. Inner circle A asks the question, outer circle B answers for one minute, A gives one tip, then B moves one seat. Then swap roles.",
              "caption": "Inner and outer circle: a new partner every round."
            },
            {
              "type": "steps",
              "items": [
                {
                  "who": "alone",
                  "text": "First, write <b>key words only</b> for both questions (2 min, below)."
                },
                {
                  "who": "class",
                  "text": "<b>Stand up.</b> Make two circles. <b>Inner circle (A)</b> = the <b>interlocutor</b>: ask Question 1. <b>Outer circle (B)</b>: answer for about <b>one minute</b>."
                },
                {
                  "who": "pair",
                  "text": "A gives one quick tip. Then <b>B moves one seat</b> to the right. A asks Question 2."
                },
                {
                  "who": "class",
                  "text": "After two rounds, <b>swap</b>: B asks, A answers. If you can, video one answer so you can review it later."
                }
              ]
            },
            {
              "type": "tip",
              "text": "Your teacher may give the inner circle a <b>paper question card</b> and the outer circle a <b>speaker card</b>. No cards? Read the two questions and the language on this page."
            },
            {
              "type": "cards",
              "title": "The individual questions",
              "numbered": true,
              "items": [
                {
                  "label": "Question about the ideas in the text",
                  "text": "In Paragraph D, the writer says that “differentiating between green skills and green jobs is important.” Can you summarise the writer’s reason for saying this?"
                },
                {
                  "label": "Question about personal response",
                  "text": "How do you think needing green skills could influence your future study plans or your career?"
                }
              ]
            },
            {
              "type": "language",
              "title": "Language for individual questions",
              "groups": [
                {
                  "label": "Summarise the writer",
                  "phrases": [
                    "<b>The writer states that</b> … <b>because</b> …",
                    "<b>The main reason the writer gives is that</b> …",
                    "<b>In other words</b>, …",
                    "<b>The writer also mentions</b> …"
                  ]
                },
                {
                  "label": "Give your view",
                  "phrases": [
                    "<b>Personally, I think</b> …",
                    "<b>To be honest, I haven’t thought much about</b> …, <b>but</b> …",
                    "<b>For me, the most important thing is</b> …"
                  ]
                },
                {
                  "label": "Extend it",
                  "phrases": [
                    "<b>For example, in my</b> course / country …",
                    "<b>This makes me want to</b> …",
                    "<b>That’s why</b> I might …"
                  ]
                },
                {
                  "label": "Buy time / fix it",
                  "phrases": [
                    "<b>That’s an interesting question.</b>",
                    "<b>What I mean is</b> …",
                    "<b>Let me put it another way</b> …"
                  ]
                }
              ]
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "q3-n1",
                  "label": "Question 1 — my notes (key words only)",
                  "rows": 2
                },
                {
                  "id": "q3-n2",
                  "label": "Question 2 — my notes (key words only)",
                  "rows": 2
                }
              ]
            },
            {
              "type": "tip",
              "text": "Don’t write full answers. Speak from key words — in the assessment you answer on the spot."
            }
          ],
          "answers": {
            "title": "Suggested responses",
            "items": [
              [
                "Question 1",
                "The writer states that differentiating between green skills and green jobs is important because green skills give more details about what changes exactly the job market needs so that it can transition to a green economy. This in turn will help policymakers come up with the training that needs to be done. The writer also gives three aspects of a green economy that affect the skills that are needed."
              ],
              [
                "Question 2",
                "The aim is a response that is relevant, coherent and extended — not simply paraphrased ideas from the text. You might say: I haven’t thought much about green skills, but it highlights how careers might change in the future, so I need to be aware of these skills. / It will make me pay more attention to any references to green skills when I’m doing my degree. / If I can demonstrate I have green skills it might help me get better jobs. This makes me want to ask more questions about how my current courses can incorporate these skills and what additional knowledge or training I might need."
              ]
            ]
          }
        },
        {
          "id": "q4",
          "short": "Feedback",
          "minutes": 3,
          "grouping": "Pair",
          "art": "dec10/assets/week3/v/v-d10w3d5-q4.svg",
          "title": "Feedback on your answers",
          "goal": "Give your partner quick, useful feedback.",
          "blocks": [
            {
              "type": "form",
              "id": "q4-form",
              "title": "Individual questions · quick feedback",
              "observe": "Whose answers are you giving feedback on?",
              "scale": [
                "Yes",
                "Mostly",
                "Needs work"
              ],
              "sections": [
                {
                  "label": "Question about the ideas in the text",
                  "items": [
                    "The answer gave the writer’s reason clearly.",
                    "The answer used their own words (not read from the text)."
                  ]
                },
                {
                  "label": "Question about personal response",
                  "items": [
                    "The answer was relevant to the question.",
                    "The answer was coherent (easy to follow).",
                    "The answer was extended (reasons and examples)."
                  ]
                }
              ],
              "send": true,
              "sendLabel": "Send to my partner",
              "sendHint": "Send this quick feedback to the classmate you listened to."
            },
            {
              "type": "talk",
              "title": "Talk about it",
              "prompts": [
                "Which question was harder for you? Why?",
                "What will you do differently next time you answer an individual question?"
              ]
            },
            {
              "type": "do",
              "n": 1,
              "who": "pair",
              "text": "<b>Second try (1 minute).</b> Answer Question 2 again to a new partner, using the tip you got. Was it longer and clearer this time?"
            },
            {
              "type": "fields",
              "fields": [
                {
                  "id": "q4-exit",
                  "label": "Exit ticket · say it like an academic: finish the sentence",
                  "rows": 2,
                  "placeholder": "The writer states that differentiating between green skills and green jobs is important because …"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "discuss",
      number: "05",
      code: "23A",
      minutes: 70,
      tone: "green",
      art: "dec10/assets/week3/s-d5-discuss.svg",
      title: "Interactive Discussion: Discussion Skills (1)",
      subtitle: "Start the discussion · introduce ideas · take the floor",
      outcome: "You learn and practise the first three discussion skills through speaking tasks, and use the right language for each skill.",
      activities: [
        {
          id: "d1",
          short: "Why discuss?",
          minutes: 10,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d5-d1.svg",
          title: "Part 1 Discussion",
          goal: "Think about why group discussion skills matter at university.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Discuss for <b>4 minutes</b>. Write each idea on a <b>sticky note</b> (or a scrap of paper)."},
            {
              type: "talk",
              title: "Discuss",
              prompts: ["Why are group discussion skills essential in university?","Where will you need them — in tutorials, group projects, or a job?"]
            },
            {"type":"fields","fields":[{"id":"d1-ideas","label":"Our group’s ideas","rows":3,"placeholder":"They help us … / Without them, …"}]},
            {"type":"do","n":2,"who":"class","text":"<b>Gallery walk</b> (2 min). Stick your notes on the whiteboard. Stand up and read the other groups’ notes. Put a ✓ on the <b>two best</b> ideas that are not yours."},
            {"type":"do","n":3,"who":"group","text":"Compare your ideas with this list. Match each skill to what it gives you. Which ideas did your group have?"},
            {
              type: "match",
              id: "d1-match",
              title: "In university, group discussion skills are essential, because …",
              left: ["Critical Thinking and Problem-Solving","Communication Skills","Teamwork and Collaboration","Confidence Building","Learning from Peers","Networking"],
              right: [
                "Group discussions expose you to new perspectives, helping you think critically and solve problems by exploring different angles on a topic.",
                "Discussions help improve your ability to express ideas clearly and respond to others effectively, which is crucial for academic and future career success.",
                "Many university courses require teamwork. Group discussions help you learn to work well with others, share responsibilities, and manage differences of opinion.",
                "Speaking regularly in group settings boosts your confidence in sharing ideas, presenting, and debating topics.",
                "Discussions are a chance to learn new strategies, viewpoints, and knowledge from classmates with diverse backgrounds.",
                "Group discussions help you build connections with classmates, which can benefit future projects, academic work, and career opportunities."
              ]
            },
            {
              type: "key",
              title: "The big picture",
              points: ["These are the skills you will develop in DEC10.","In the <b>Interactive Discussion Assessment</b> you are marked on how you <b>start</b> and <b>contribute to</b> a discussion — today you begin to build those skills."]
            }
          ]
        },
        {
          id: "d2",
          short: "9 skills",
          minutes: 5,
          grouping: "Class",
          art: "dec10/assets/week3/v/v-d10w3d5-d2.svg",
          title: "Part 2 Discussion skills in DEC 10",
          goal: "See all nine skills — and today’s three.",
          blocks: [
            {"type":"do","n":1,"who":"class","text":"Tap the numbers. Then play <b>Number race</b>: your teacher reads a skill; teams hold up the number with their fingers. First correct team wins a point."},
            {
              type: "hotspot",
              src: "dec10/assets/week3/d5-nine-skills.svg",
              alt: "Nine discussion skills as nine stepping stones across a river. Stones 1, 2 and 3 are lit up for today: start the discussion, introduce ideas from an article, take the floor politely. Stones 4 to 9 come later in the course.",
              title: "The 9 discussion skills you practise in DEC10",
              hint: "Tap each number. Today we focus on skills 1–3.",
              spots: [
                {"x":10,"y":62,"label":"1","title":"1 · Start the discussion","text":"Starting the discussion by presenting facts, arguments or opinions about the topic.","color":"#2f7d6b"},
                {"x":20,"y":40,"label":"2","title":"2 · Introduce ideas","text":"Introducing ideas from an article you have read which are relevant to the discussion.","color":"#2f7d6b"},
                {"x":30,"y":62,"label":"3","title":"3 · Take the floor","text":"Taking the floor politely so you can make your own point in the discussion.","color":"#2f7d6b"},
                {"x":41,"y":40,"label":"4","title":"4 · Take a point further (them)","text":"Reminding someone of a point they made earlier and trying to get them to take it further.","color":"#3a58a0"},
                {"x":51,"y":62,"label":"5","title":"5 · Take a point further (you)","text":"Reminding someone of a point they made and trying to take the idea further yourself.","color":"#3a58a0"},
                {"x":61,"y":40,"label":"6","title":"6 · Reformulate","text":"Reformulating another speaker’s point to check if you understood it.","color":"#3a58a0"},
                {"x":71,"y":62,"label":"7","title":"7 · Admit you’re unsure","text":"Admitting that you are unsure about something and asking for information.","color":"#8a4f9e"},
                {"x":81,"y":40,"label":"8","title":"8 · Elicit ideas","text":"Eliciting ideas from someone who has not contributed much to the discussion.","color":"#8a4f9e"},
                {"x":91,"y":62,"label":"9","title":"9 · Summarise and move on","text":"Summarizing the discussion and trying to take it in a new direction.","color":"#8a4f9e"}
              ]
            },
            {
              type: "key",
              title: "Today: skills 1–3, plus two more things",
              points: ["Skills <b>1</b>, <b>2</b> and <b>3</b>.","<b>Link your ideas</b> clearly and logically (cohesive devices).","<b>Refer to sources</b> appropriately."]
            }
          ]
        },
        {
          id: "d3",
          short: "Skill 1",
          minutes: 10,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d5-d3.svg",
          title: "Activity 1 Skill 1 Practice: Start the discussion by presenting facts, arguments, or opinions about the topic",
          goal: "Start with an opinion: two statements joined by a cohesive device.",
          blocks: [
            {
              type: "key",
              title: "Start strong — but short",
              points: ["Presenting a fact, argument or opinion is a good way to start any discussion.","Don’t present too many points in one turn: <b>two linked statements</b> are enough.","Topic: <b>The green economy</b>."]
            },
            {"type":"do","n":1,"who":"group","text":"Warm up: sort the cohesive devices into their four jobs."},
            {
              type: "sort",
              id: "d3-sort",
              title: "Cohesive devices",
              buckets: [{"label":"Addition","letter":"+"},{"label":"Contrast / concession","letter":"↔"},{"label":"Cause and effect","letter":"→"},{"label":"Example","letter":"e.g."}],
              items: [
                {"text":"Moreover","answer":0},{"text":"In addition","answer":0},{"text":"Furthermore","answer":0},{"text":"Also","answer":0},
                {"text":"However","answer":1},{"text":"On the other hand","answer":1},{"text":"In contrast","answer":1},{"text":"Although","answer":1},
                {"text":"Therefore","answer":2},{"text":"As a result","answer":2},{"text":"Consequently","answer":2},{"text":"This leads to","answer":2},
                {"text":"For instance","answer":3},{"text":"For example","answer":3},{"text":"Such as","answer":3},{"text":"To illustrate","answer":3}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d5-link-formula.svg",
              size: "wide",
              alt: "A formula: statement + cohesive device + statement, then say why. Example: Green jobs are generally higher-skilled and less routine than non-green jobs. On the other hand, green and non-green jobs often share similar skills. Why: On the other hand makes a contrast between the differences and similarities.",
              caption: "Statement + cohesive device + statement → say why."
            },
            {"type":"do","n":2,"who":"class","text":"<b>Human sentence.</b> Three students come to the front. Spin below: one student holds Statement A, one holds Statement B (read them aloud). The third student <b>chooses a cohesive device</b> and stands between them. Class: thumbs up if it fits, thumbs down if not. The device holder explains why."},
            {"type":"tip","text":"Your teacher may give out <b>paper cards</b>: Statement A, Statement B and cohesive devices. No cards? Spin below and read the statements from the screen."},
            {
              type: "figure",
              src: "dec10/assets/week3/d5-human-sentence.svg",
              size: "wide",
              alt: "Human sentence: one student holds Statement A, one holds a cohesive device card (On the other hand,), one holds Statement B. The class shows thumbs up if it fits and the device holder explains why.",
              caption: "Statement A + device + Statement B. If the two statements don’t connect, say so and spin again."
            },
            {"type":"do","n":3,"who":"group","text":"Then in your groups: take turns. Spin, connect, <b>read the sentence aloud</b> and <b>explain why</b> you chose that device."},
            {
              type: "spinner",
              id: "d3-spin",
              title: "Connect two statements",
              reels: [
                {
                  label: "Statement A",
                  items: [
                    "The transition to a green economy is like an industrial revolution due to its impacts.",
                    "A green economy aims to improve well-being and equity while reducing environmental risks.",
                    "Defining \"green jobs\" lacks universal criteria, which complicates policy decisions.",
                    "Green and non-green jobs often share similar skills, affecting retraining needs.",
                    "Green jobs are generally higher-skilled and less routine than non-green jobs.",
                    "The concepts of \"green jobs\" and \"green skills\" are often vague and used interchangeably.",
                    "Green jobs can either be traditional roles adapted to green goals or entirely new roles.",
                    "Green jobs are becoming more skill-intensive, requiring specific technical skills."
                  ]
                },
                {
                  label: "Statement B",
                  items: [
                    "Soft skills like creativity and resilience are more important in the green economy.",
                    "Green skills directly combat climate change by preserving natural resources.",
                    "The demand for green skills has grown steadily, increasing by 9% annually.",
                    "Only one in eight workers currently has green skills, creating a significant skills gap.",
                    "Workers with green skills are 30% more likely to be hired than those without.",
                    "Demand for green skills varies between countries and between sectors.",
                    "Science, technology, and engineering workers adopt green skills faster than others."
                  ]
                }
              ]
            },
            {
              type: "detect",
              id: "d3-write",
              title: "Write your best one",
              hint: "The light turns on when you use a cohesive device from the table.",
              checks: [
                {"label":"Addition","color":"#2f7d6b","any":["moreover","in addition","furthermore","also"]},
                {"label":"Contrast","color":"#c4562f","any":["however","on the other hand","in contrast","although"]},
                {"label":"Cause & effect","color":"#3a58a0","any":["therefore","as a result","consequently","this leads to"]},
                {"label":"Example","color":"#b07d12","any":["for instance","for example","such as","to illustrate"]}
              ],
              items: [{"task":"Two statements + one cohesive device","placeholder":"Only one in eight workers currently has green skills … As a result, …","rows":3,"model":"Green jobs are generally higher-skilled and less routine than non-green jobs. On the other hand, green and non-green jobs often share similar skills. — I chose “On the other hand” to make a contrast between the differences and similarities between green jobs."}]
            },
            {
              type: "language",
              title: "Explain your choice",
              tabs: false,
              groups: [
                {"label":"Why this device","phrases":["<b>I chose</b> “On the other hand” <b>to make a contrast between</b> …","“As a result” <b>shows that the second idea is an effect of</b> the first.","“For instance” <b>introduces an example of</b> …"]},
                {"label":"It doesn’t fit","phrases":["<b>These two don’t really connect, because</b> …","<b>I think</b> “however” <b>works better here</b>."]}
              ]
            }
          ]
        },
        {
          id: "d4",
          short: "Skill 2",
          minutes: 15,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d5-d4.svg",
          title: "Activity 2 Skill 2 Practice: Introduce ideas from an article you have read that are relevant to the discussion",
          goal: "Refer to authors as you speak — and link your idea to the one before.",
          blocks: [
            {
              type: "key",
              title: "Sources in speaking",
              tone: "warn",
              points: [
                "Referring to sources in discussions is <b>just as important</b> as in writing.",
                "In speaking you do it in a <b>less formal</b> style: <i>Bowen et al. talk about …</i>",
                "This less formal style is <b>ONLY for speaking</b>. It is not appropriate for academic writing."
              ]
            },
            {
              type: "language",
              title: "Referring to sources in academic discussions",
              groups: [
                {"label":"Mention authors","phrases":["<i>[Author]</i> <b>mentions that</b> …","<i>[Author]</i> <b>talks about</b> …","<i>[Author]</i> <b>says that</b> …","<i>[Author]</i> <b>explains that</b> …","<i>[Author]</i> <b>argues that</b> …"]},
                {"label":"Agree / support","phrases":["<b>I agree with what</b> <i>[Author]</i> <b>said about</b> …","<b>I think</b> <i>[Author]</i> <b>makes a good point when they say that</b> …"]},
                {"label":"Question","phrases":["<b>I’m not sure I agree with</b> <i>[Author]</i> <b>that</b> …","<b>I wonder why</b> <i>[Author]</i> <b>says</b> …"]},
                {"label":"Introduce ideas","phrases":["<i>[Author]</i> <b>brings up a good example of</b> …","<b>It’s like when</b> <i>[Author]</i> <b>describes</b> …"]}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d5-idea-relay.svg",
              size: "wide",
              alt: "An idea relay with three runners passing a baton. Each turn has four steps: refer to the author, paraphrase one of the author’s points (Student B and C link it to the point before), add the author’s other point with a cohesive device, add your opinion with a cohesive device.",
              caption: "Idea Relay: each speaker picks up the baton from the speaker before."
            },
            {"type":"do","n":1,"who":"alone","text":"<b>Prepare (5 min).</b> Go back to one reading or the listening from this week. Paraphrase <b>two key points</b> on the green economy."},
            {"type":"sources","ids":["greening","vidican","greenskills"]},
            {
              type: "fields",
              fields: [
                {"id":"d4-src","label":"My source (author)","rows":1,"placeholder":"Bowen et al. / Vidican Auktor / Hyman and Smith"},
                {"id":"d4-p1","label":"Key point 1 — in my own words","rows":2},
                {"id":"d4-p2","label":"Key point 2 — in my own words","rows":2}
              ]
            },
            {"type":"do","n":2,"who":"group","text":"<b>Idea Relay — with a real baton.</b> Use a pen as the baton. Only the person holding it speaks. When you finish, pass it on. What did you learn this week about the green economy? Follow the structure. Look at the example first."},
            {
              type: "chat",
              title: "Example",
              right: "Student B",
              lines: [
                ["Student A","<mark>Bowen et al. talk about</mark> the lack of a universal definition for green jobs. <mark>For instance</mark>, <mark>they mention</mark> how a secretary in a fossil fuel company is not called a green worker, even though they do the same work as a secretary in a renewable energy company. <mark>I think this is a very confusing thing about</mark> the green economy and green jobs."],
                ["Student B","<mark>Yeah, and Auktor also talks about</mark> the confusion between green jobs and green skills <mark>So, yeah, it's a very confusing area</mark>."],
                ["Student C","<mark>But on the other hand, Hyman and Smith explain</mark> green skills very clearly. They give this clear definition of a green skill - “a skill that directly combats the effects of climate change”. They also mention specific examples. This source is more recent than the other two, <mark>so I guess</mark> people have a better understanding of this area now."]
              ]
            },
            {
              type: "steps",
              title: "The relay structure",
              items: [
                {"who":"alone","text":"<b>Student A:</b> refer to the author → paraphrase one of the author’s points → add the author’s other point, using a cohesive device → add your opinion, using a cohesive device."},
                {"who":"alone","text":"<b>Student B:</b> refer to the author → paraphrase one of the author’s points, <b>trying to link it to the previous point</b> → add the author’s other point, using a cohesive device → add your opinion, using a cohesive device."},
                {"who":"group","text":"<b>Student C, D …:</b> the same. Keep the relay going for two rounds."}
              ]
            },
            {"type":"do","n":3,"who":"alone","text":"<b>Language monitor</b> (one person per group, change each round): tick each phrase when you hear it. Report the score at the end."},
            {
              type: "checklist",
              id: "d4-monitor",
              title: "Language monitor: phrases I heard",
              meter: ["heard","Great variety!"],
              items: ["… talks about …","… mentions that …","… explains that …","… argues that …","I agree with what … said about …","I’m not sure I agree with … that …","Yeah, and … also …","But on the other hand, …"]
            },
            {
              type: "talk",
              title: "Reflect",
              prompts: ["Which phrases did you use when referring to the sources?","Did you use the same one/s or a variety?"]
            }
          ]
        },
        {
          id: "d5",
          short: "Skill 3",
          minutes: 15,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d5-d5.svg",
          title: "Activity 3 Skill 3 Practice: Take the floor politely so you can make your own point in the discussion",
          goal: "Join a discussion politely and naturally.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week3/d5-take-floor.svg",
              size: "wide",
              alt: "Taking the floor in four moves: wait for a small pause; signal with eye contact or a small gesture; use a polite phrase such as “Sorry to jump in, but…”; make one short point and link it to what was said. A crossed-out speech bubble shows the rude way: talking over someone.",
              caption: "Taking the floor: why, when and how."
            },
            {
              type: "talk",
              title: "Think first",
              prompts: ["<b>Why</b> do people need to take the floor in a discussion?","<b>When</b> is a good moment to do it?","<b>How</b> can you do it without being rude?"]
            },
            {"type":"do","n":1,"who":"class","text":"<b>Say it, show it.</b> Your teacher says each phrase in a real voice. <b>Thumbs up</b> = polite. <b>Thumbs down</b> = too abrupt. Then sort the phrases here."},
            {
              type: "sort",
              id: "d5-sort",
              title: "How to take the floor by politely interjecting",
              buckets: [{"label":"Polite interjection","letter":"✓"},{"label":"Too abrupt","letter":"✗"}],
              items: [
                {"text":"I’d like to quickly add that…","answer":0},
                {"text":"Sorry to jump in, but…","answer":0},
                {"text":"Just a quick thought…","answer":0},
                {"text":"Could I add something to that?","answer":0},
                {"text":"Can I just say… [pause]","answer":0},
                {"text":"If I might add here…","answer":0},
                {"text":"Stop. My turn now.","answer":1},
                {"text":"No, that’s wrong. Listen to me.","answer":1},
                {"text":"Whatever. Anyway, my point is…","answer":1}
              ]
            },
            {
              type: "cards",
              title: "Group jobs for the discussion — change jobs in round 2",
              items: [
                {"label":"Chair","text":"Starts the discussion and keeps it moving."},
                {"label":"Timekeeper","text":"Says “One minute left” and stops the round."},
                {"label":"Language monitor","text":"Ticks each polite interjection and source phrase."},
                {"label":"Devil’s advocate","text":"Gives the other side: “But on the other hand …”"}
              ]
            },
            {"type":"sticky","title":"Game: three tokens each","text":"Each student takes <b>three tokens</b> (coins or paper). Put one in the middle each time you take the floor <b>politely</b>. Goal: use all three. Too abrupt? Take one back!","color":"pink"},
            {"type":"tip","text":"Your teacher may give your group <b>paper tokens</b> with the polite expressions, plus <b>topic</b> and <b>job</b> cards. No paper? Use coins or scraps of paper, and spin below for your topic and expression."},
            {"type":"do","n":2,"who":"group","text":"Each student <b>chooses or spins</b> one interjecting expression. One student starts the discussion on the topic. Others take the floor with their expression — as naturally as possible. Remember to (a) <b>refer to sources</b> and (b) <b>connect your ideas</b> to what was said, using cohesive phrases."},
            {
              type: "spinner",
              id: "d5-spin",
              title: "Topic + your expression",
              reels: [
                {
                  label: "Topic",
                  items: [
                    "The demand for green skills is growing, but workers are not learning these skills fast enough. What can governments or companies do to fix this problem?",
                    "Green jobs require both technical skills and soft skills like creativity and adaptability. Which type of skill is more important, in your opinion?",
                    "Many traditional jobs, like data scientists or managers, are becoming green. How do you think this will change the job market in the future?",
                    "Having green skills makes workers more employable and helps them find better jobs. Do you think this will motivate more people to learn green skills? Why or why not?"
                  ]
                },
                {
                  label: "Take the floor with",
                  items: ["I’d like to quickly add that…","Sorry to jump in, but…","Just a quick thought…","Could I add something to that?","Can I just say… [pause]","If I might add here…"]
                }
              ]
            },
            {
              type: "steps",
              title: "Two rounds",
              items: [
                {"who":"group","text":"<b>Round 1 (about 5 min):</b> discuss the first topic. Then stop and reflect (questions below)."},
                {"who":"group","text":"Before round 2: how did the first speaker start? What other words could you use to start?"},
                {"who":"group","text":"<b>Round 2 (about 5 min):</b> a <b>different student</b> starts the next topic. Stop and reflect again."}
              ]
            },
            {
              type: "talk",
              title: "Reflect after each round",
              prompts: ["Did you feel comfortable interjecting? Did you use any other language to do so?","Did you remember to refer to sources and connect your ideas to each other?","What would you like to improve next time?"]
            }
          ]
        },
        {
          id: "d6",
          short: "Review",
          minutes: 15,
          grouping: "Groups",
          art: "dec10/assets/week3/v/v-d10w3d5-d6.svg",
          title: "Review and reflect",
          goal: "Snowball your phrases, sort them — and use them in a tutorial.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week3/d5-snowball.svg",
              size: "wide",
              alt: "Phrase snowball in four steps: write one phrase you used today, crumple and throw, catch and read it aloud, the class votes 1, 2 or 3 for the skill.",
              caption: "Phrase snowball: everyone collects language from everyone."
            },
            {"type":"do","n":1,"who":"class","text":"<b>Phrase snowball</b> (4 min). Write one phrase you used or heard today on paper. Crumple it. On the signal, throw! Pick up one snowball, read it aloud. The class shows <b>1, 2 or 3 fingers</b>: which skill is it?"},
            {
              type: "talk",
              title: "Let’s review the language you used from the three activities",
              prompts: ["What did the people who started the discussion say?","What phrases did you use when referring to the authors of the sources?","Did you politely interject to add your ideas to the discussion? How did you do this?"]
            },
            {"type":"do","n":2,"who":"pair","text":"Which skill does each phrase belong to? Sort them."},
            {
              type: "sort",
              id: "d6-sort",
              title: "Discussion skills & useful language",
              buckets: [{"label":"1 Start the discussion","letter":"1"},{"label":"2 Introduce ideas","letter":"2"},{"label":"3 Take the floor politely","letter":"3"}],
              items: [
                {"text":"Let’s kick off by looking at…","answer":0},
                {"text":"To start us off, I’d say…","answer":0},
                {"text":"A good place to begin might be…","answer":0},
                {"text":"(author’s name) highlights that…","answer":1},
                {"text":"This reminds me of (author’s study/point) …","answer":1},
                {"text":"There’s evidence from (author’s name) which indicates that…","answer":1},
                {"text":"If I could just add…","answer":2},
                {"text":"Allow me to add that…","answer":2},
                {"text":"If I could take a moment to add…","answer":2}
              ]
            },
            {"type":"do","n":3,"who":"alone","text":"Add more phrases in each column: phrases from the snowballs, from classmates, or ones you already know. Try for <b>three</b> each."},
            {
              type: "model",
              title: "Discussion skills & useful language · Student Booklet",
              rows: [["1. Start the discussion","Ok, we’ve decided to talk about…"],["2. Introduce ideas","According to (author’s name) …"],["3. Take the floor politely:","Can I just say… [pause]"]]
            },
            {"type":"table","id":"d6-mine","live":true,"title":"Add more phrases in each column","columns":["Start the discussion","Introduce ideas","Take the floor politely"],"rows":3},
            {
              type: "toggle",
              title: "More phrases to compare",
              hint: "Open after you add your own",
              blocks: [
                {
                  type: "language",
                  title: "Discussion skills 1–3",
                  tabs: false,
                  groups: [
                    {"label":"Start the discussion","phrases":["Ok, we’ve decided to talk about…","Let’s kick off by looking at…","To start us off, I’d say…","A good place to begin might be…","I’d like to open the discussion with…","From my perspective…","In my opinion…","One thing I think is important is…"]},
                    {"label":"Introduce ideas","phrases":["According to (author’s name) …","(author’s name) suggests that…","This reminds me of (author’s study/point) …","(author’s name) highlights that…","There’s evidence from (author’s name) which indicates that…","Research shows/suggests that…","A key point in (research/article) is that…","One perspective is that…","An interesting angle mentioned in (source) is…"]},
                    {"label":"Take the floor politely","phrases":["Can I just say… [pause]","If I could just add…","I’d like to contribute by mentioning…","If I might add here…","I’d like to quickly add that…","Sorry to jump in, but…","If I could take a moment to add…","Just a quick thought…","Could I add something to that?","Allow me to add that…"]}
                  ]
                }
              ]
            },
            {
              type: "checklist",
              id: "d6-can",
              title: "I can …",
              meter: ["ticked","Skills 1–3 unlocked!"],
              items: ["start a discussion with a short, linked opinion.","introduce an idea from a source in a less formal, spoken style.","take the floor politely and link my point to what was said."]
            },
            {"type":"sticky","title":"Phrase of the day · say it like an academic","text":"<b>“Sorry to jump in, but Hyman and Smith talk about …”</b><br>Take the floor and bring in a source in one move.","color":"green"},
            {
              type: "fields",
              fields: [{"id":"d6-exit","label":"Exit ticket · your first turn in next week’s tutorial on green skills (start + source + link)","rows":3,"placeholder":"To start us off, I’d say … . Bowen et al. talk about … . As a result, …"}]
            }
          ]
        }
      ]
    },
    {
      id: "lrtest",
      number: "06",
      code: "24A",
      minutes: 45,
      tone: "amber",
      art: "dec10/assets/week3/s-d5-lrtest.svg",
      title: "Listening & Reading Practice Assessment",
      subtitle: "On Canvas · a short plan before you start",
      outcome: "You complete the Listening & Reading practice on Canvas with a clear strategy and know what to improve next.",
      activities: [
        {
          id: "t1",
          short: "Get ready",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d5-t1.svg",
          title: "Before you start",
          goal: "Choose your tactics before you open the test.",
          blocks: [
            {
              type: "key",
              title: "Follow the instructions on Canvas",
              points: ["The practice assessment is <b>on Canvas</b>. The questions and the timing are there.","This page helps you <b>plan</b> and <b>reflect</b>. It has no test questions."]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d5-test-tactics.svg",
              size: "wide",
              alt: "Before, during and after a practice test. Before: a quiet place, headphones, read the instructions. During: read the questions first, take notes under headings, keep to word limits, move on if you are stuck. After: check your score, find your weakest tactic, plan one action.",
              caption: "Before · during · after."
            },
            {
              type: "flip",
              title: "Six tactics to remember",
              hint: "Turn each card. Which one do you need most?",
              items: [
                {"front":"Read the questions first","back":"Before you listen or read, underline the key words in each question. Then you know what to look for.","tag":"Listening & reading"},
                {"front":"Notes under headings","back":"Put each point under the heading it belongs to. Use symbols: →, ↑, b/c.","tag":"Listening"},
                {"front":"Count your words","back":"NO MORE THAN THREE WORDS means three. Over the limit = zero.","tag":"Listening & reading"},
                {"front":"Listen for paraphrase","back":"The recording rarely uses the same words as the question. Listen for the same idea in different words.","tag":"Listening"},
                {"front":"Skim, then scan","back":"Skim for the main idea of each paragraph first. Then scan for names, numbers and key words.","tag":"Reading"},
                {"front":"Don’t get stuck","back":"If one question takes too long, guess, mark it and move on. Come back at the end.","tag":"Reading"}
              ]
            },
            {
              type: "checklist",
              id: "t1-ready",
              title: "Ready?",
              meter: ["ready","Good luck!"],
              items: ["I am in a quiet place.","My headphones work.","I read the instructions on Canvas.","I chose the one tactic I will focus on."]
            }
          ]
        },
        {
          id: "t2",
          short: "Do it",
          minutes: 35,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d5-t2.svg",
          title: "Listening & Reading Practice Assessment on Canvas",
          goal: "Do the practice in one sitting — then reflect.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Open the <b>Listening & Reading Practice Assessment</b> on Canvas (Week 3). Follow the instructions there and complete it in one sitting."},
            {"type":"do","n":2,"who":"alone","text":"When you finish, rate yourself honestly."},
            {"type":"scale","id":"t2-q","title":"After the practice","statement":"I read the questions before I listened or read.","ends":["Not at all","Every time"]},
            {"type":"scale","id":"t2-lim","statement":"I kept every short answer inside the word limit.","ends":["Not at all","Every time"]},
            {"type":"scale","id":"t2-time","statement":"I managed my time and finished every part.","ends":["Not at all","Completely"]},
            {
              type: "fields",
              fields: [
                {"id":"t2-hard","label":"The hardest part for me was …","rows":2},
                {"id":"t2-next","label":"One thing I will do about it next week","rows":2,"placeholder":"I will … every … before …"}
              ]
            },
            {"type":"tip","text":"Next class: <b>stand up and find a partner</b>. Tell them your hardest part and your plan in <b>30 seconds</b>: “The hardest part for me was … so next week I’m going to …”"}
          ]
        }
      ]
    },
    {
      id: "iwa",
      number: "07",
      code: "25A",
      minutes: 30,
      tone: "teal",
      art: "dec10/assets/week3/s-d5-iwa.svg",
      title: "Introduction to the Integrated Writing Assessment (IWA) Homework",
      subtitle: "Read the task and analyse Sample 3.1",
      outcome: "You understand the requirements of the Integrated Writing Assessment and set your learning goals by analysing a sample of the task.",
      activities: [
        {
          id: "w1",
          short: "The task",
          minutes: 8,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d5-w1.svg",
          title: "The Integrated Writing Task description",
          goal: "Find out what the IWA asks you to do.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Go to the <b>Assessment Overview</b> page on Canvas and find the <b>Integrated Writing Task</b> description. Read through the information."},
            {
              type: "fields",
              fields: [
                {"id":"w1-know","label":"Three things I now know about the IWA","rows":3,"placeholder":"1 …\n2 …\n3 …"},
                {"id":"w1-ask","label":"One question I still have","rows":1}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d5-essay-shape.svg",
              size: "wide",
              alt: "The shape of an integrated essay: four blocks stacked like a building — Introduction, Body 1, Body 2, Conclusion — each with an empty label that asks: what is the purpose of this paragraph? Source cards (Bowen et al., Vidican Auktor, Hyman and Smith) feed into the body paragraphs.",
              caption: "Four paragraphs. Your job tonight: find the purpose of each one."
            },
            {"type":"tip","text":"An <b>integrated</b> essay uses ideas from the course texts — with citations — to answer the question."}
          ]
        },
        {
          id: "w2",
          short: "Sample 3.1",
          minutes: 12,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d5-w2.svg",
          title: "Sample 3.1",
          goal: "Read the sample essay and notice its overall structure.",
          blocks: [
            {
              type: "model",
              title: "Question",
              text: "What is the key challenge in transitioning to a “green” job market?"
            },
            {"type":"do","n":1,"who":"alone","text":"Read the sample essay and think about the overall structure of the response. What is the purpose (<i>rhetorical function</i>) <b>of each paragraph</b>? How do the paragraphs connect to each other?"},
            {
              type: "passage",
              id: "w2-p1",
              title: "Sample essay 3.1 · [Introduction]",
              text: "¹The increasing necessity to adopt more environmentally sustainable business practices has led to the emergence of notions of a “green economy” and “green jobs.” ²While the creation or classification of such jobs may be a positive step forward in meeting sustainability goals, the transition towards a green job market is marked by significant challenges, including the absence of a clear definition of green jobs which impedes effective policy implementation. ³However, the most significant barrier to achieving a smooth transition will undoubtedly be the readiness of the workforce to adapt to this new market given the noticeable skills gap, which has the potential to hinder progress."
            },
            {
              type: "passage",
              id: "w2-p2",
              title: "Sample essay 3.1 · [Body 1]",
              text: "¹The ambiguity in defining what constitutes a “green job” will likely pose somewhat of a challenge, at least initially. ²As outlined by Bowen et al. (2018) and expanded upon by Vidican Auktor (2020), green jobs vary widely in their nature and scope, resulting in difficulties developing a uniform definition. ³This leads to classification inconsistencies and complications measuring green growth's labour market impact, hindering effective workforce planning and policy implementation (Vidican Auktor, 2020). ⁴However, focusing on specific skill requirements for green jobs may be helpful here as these skills provide more detailed insights into the necessary changes for transitioning to a green economy, including training needs (Vidican Auktor, 2020). ⁵In fact, the development of a Green General Skill (GGS) index has assisted in classifying and contextualising green jobs within a broader skills framework (Vidican Auktor, 2020), making it easier to understand and strategize for green job training and growth."
            },
            {
              type: "passage",
              id: "w2-p3",
              title: "Sample essay 3.1 · [Body 2]",
              text: "¹Therefore, a greater challenge is likely to be around the readiness of the workforce to adapt to green jobs. ²According to LinkedIn's global green skills report, there is a burgeoning demand for green skills that is not being met by the current rate of skill development (Hyman & Smith, 2023). ³As Sue Duke, Vice President of Global Public Policy & Economic Graph at LinkedIn, reports, only one in every eight workers have the necessary green skills (Hyman & Smith, 2023). ⁴She adds that this skill gap is widening as environmental sustainability requirements rapidly evolve across all industries. ⁵Hence, the transition demands not only new skills but also a substantial re-skilling of the existing workforce. ⁶However, while researchers using the O*NET database have established that green occupations tend to involve high-level analytical and specialized skills (Vidican Auktor, 2020; Bowen et al., 2018), there is still not enough research into how workforce capabilities match the skills required for a green job market (Bowen et al., 2018). ⁷Without this information, it is extremely difficult to construct a measure of skill distance and therefore the extent of training or retraining required for a successful transition to a green job market."
            },
            {
              type: "passage",
              id: "w2-p4",
              title: "Sample essay 3.1 · [Conclusion] · 527 words",
              text: "¹In conclusion, while developing a standardized definition of green jobs and skills is a challenge for policy-makers, there are tools available to assist. ²Therefore, it is the preparedness of the workforce that will likely present the greatest challenge in the transition to a green job market. ³The skills gap may impede a smooth transition as workers struggle to adapt to the evolving job market, so comprehensive research for planning the reskilling of the workforce will be critical."
            }
          ]
        },
        {
          id: "w3",
          short: "Purposes",
          minutes: 10,
          grouping: "Homework",
          art: "dec10/assets/week3/v/v-d10w3d5-w3.svg",
          title: "Rhetorical functions: by paragraph",
          goal: "Match each paragraph to its purpose, then set your writing goals.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Fill in the column <b>By paragraph (Purpose of each paragraph)</b>: match each paragraph to its purpose."},
            {
              type: "sort",
              id: "w3-sort",
              single: true,
              title: "Purpose of each paragraph",
              buckets: [{"label":"Introduction","letter":"I"},{"label":"Body 1","letter":"B1"},{"label":"Body 2","letter":"B2"},{"label":"Conclusion","letter":"C"}],
              items: [
                {"text":"Give the context (background) of the topic and the writer’s thesis/position","answer":0},
                {"text":"Compare one challenge and state reasons why it is not the key one","answer":1},
                {"text":"Introduce the key challenge and the reasons to support position.","answer":2},
                {"text":"Summarise thesis/position and supporting reasons","answer":3}
              ]
            },
            {"type":"tip","text":"Do <b>not</b> fill in the other column (<b>By sentence</b>). You will do this in class."},
            {"type":"do","n":2,"who":"alone","text":"Now set your learning goals. Look at the sample again: what does this writer do that you need to learn?"},
            {
              type: "fields",
              fields: [
                {"id":"w3-notice","label":"Two things the writer does well","rows":2,"placeholder":"The writer uses … / Each body paragraph starts with …"},
                {"id":"w3-goal","label":"My learning goal for the IWA","rows":2,"placeholder":"I want to learn how to … so I will …"}
              ]
            },
            {
              type: "talk",
              title: "Bring to class",
              prompts: ["Which paragraph was hardest to label? Why?","How does the word “Therefore” at the start of Body 2 connect the two body paragraphs?"]
            },
            {"type":"sticky","title":"Phrase of the day · say it like an academic","text":"<b>“The most significant barrier to … will undoubtedly be …”</b><br>From the Introduction of Sample 3.1. A strong way to state a thesis.","color":"blue"}
          ],
          answers: {
            items: [
              ["Introduction","Give the context (background) of the topic and the writer’s thesis/position."],
              ["Body 1","Compare one challenge and state reasons why it is not the key one."],
              ["Body 2","Introduce the key challenge and the reasons to support position."],
              ["Conclusion","Summarise thesis/position and supporting reasons."]
            ]
          }
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["green economy","an economy that grows while reducing harm to the environment","A green economy aims to improve well-being and equity."],
    ["green skills","the knowledge and abilities workers need to support a sustainable society","Only one in eight workers currently has green skills."],
    ["green jobs","jobs that help preserve or restore the environment","Green jobs can be new roles or traditional roles adapted to green goals."],
    ["workforce","all the people who work in a country, sector or company","The workforce needs new skills for the green transition."],
    ["transition","a change from one state to another","The transition to a green economy affects needed skills."],
    ["skills gap","the difference between the skills workers have and the skills employers need","The skills gap may hinder progress."],
    ["cohesive device","a word or phrase that links ideas, e.g. however, as a result","Use a cohesive device to connect two statements."],
    ["take the floor","start speaking in a discussion","Sorry to jump in, but could I take the floor for a moment?"],
    ["interject","say something while another person is speaking","She interjected politely: “Just a quick thought…”"],
    ["interlocutor","the person who asks the questions in a speaking test","The interlocutor asks each student two questions."],
    ["individual question","a question one student answers alone in the Interactive Discussion","Answer the individual question for about one minute."],
    ["personal response","your own view, with reasons and examples","A good personal response is relevant, coherent and extended."],
    ["action plan","a list of specific things you will do to improve","My action plan says what, how and when."],
    ["rhetorical function","the purpose of a sentence or paragraph","The rhetorical function of the introduction is to give context and the thesis."],
    ["thesis","the writer’s main position or answer to the question","The thesis is that workforce readiness is the key challenge."],
    ["AST question","a question about how you prepared (Academic Success Toolkit)","How did your group overcome disagreements?"]
  ]
};
