/* DEC10 · Week 4 · Day 5 (Friday) — Plan, prompt, negotiate.
   Built from the Week 4 Teacher's Book (W4 D5. 15A, 16A, 17A, 18A) and the Week 4 student booklet (15D role cards, used exactly),
   ordered and timed by the revised weekly map. Taught on FRIDAY: 15A AST: Group work skills (60) · 16A AST: Digital literacy
   and AI: Using & refining prompts (90 — redesigned for 2026: RTRI + Context and Check, any AI tool, verification, university uses and risks) · 17A Interactive Discussion: Discussion and negotiation (60) · 18A STAR© moment (30).
   The two group-work recordings have no audio file in the course: the TB transcripts are shown in folds after listening.
   Protected texts are in sources.js and are never changed here. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w4d5",
  week: 4,
  day: 5,
  title: "Plan, prompt, negotiate",
  duration: "About 4 hours",
  question: "Which strategy would be best to improve the balance between tourism and sustainability?",
  questionKind: "Negotiation question",
  questionLabel: "Today’s negotiation task · 17A Interactive Discussion",
  journey: "Check in with your feelings and needs, listen to a group plan its project and check its progress, then run your own group check-in. Next, find out how prompting has changed by 2026: add context and a check to your prompts, run them in Cogniti, ChatGPT, Claude or Copilot, check the answers against real sources, and decide where AI helps or harms your university work. After lunch, look back at your views on ecotourism and negotiate the best way to balance tourism and sustainability. A STAR moment closes the week.",
  image: "dec10/assets/week4/hero-d10w4d5.svg",
  imageAlt: "Illustration: an eco-lodge on a green rainforest coast with a turtle in the bay. In front, four students sit at a round table with a planning board marked Goals, Plan, Progress and Challenges. A laptop shows an AI chat where a prompt grows from version 1 to version 3. Two speech bubbles meet over three option cards, and a gold STAR shines above.",
  finish: {"title":"Week 5","text":"Globalisation and culture: a new reading, a new listening and the three H scenarios"},
  goalShort: "your Interactive Presentation group and the Interactive Discussion",
  sections: [
    {
      id: "groupwork",
      number: "01",
      code: "15A",
      minutes: 60,
      tone: "green",
      art: "dec10/assets/week4/s-d5-groupwork.svg",
      title: "AST: Group work skills",
      subtitle: "Check in with yourself, listen to a group at work, then check your own progress",
      outcome: "You understand group work problems and devise solutions, and you apply problem-solving language and techniques (O-F-N-R and the transactional phrases) to your own group task.",
      activities: [
        {
          id: "a1",
          short: "Lead-in",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week4/v/v-d10w4d5-a1.svg",
          title: "Lead-In",
          goal: "Remember the four O-F-N-R stages, then try a short daily practice to notice your own feelings and needs.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"We have learnt about a model of communication which involves 4 stages: <b>O-F-N-R</b>. You have <b>30 seconds</b>: can you remember what each letter represents? Then match."},
            {
              type: "match",
              id: "a1-match",
              title: "1. What does each letter represent?",
              left: ["O · Observation","F · Feelings","N · Needs","R · Request"],
              right: [
                "Show you have noticed something (e.g. how the other person feels)",
                "Say how you feel",
                "Say what you need",
                "Make a request for action"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-ofnr.svg",
              size: "wide",
              alt: "Four stepping stones across a river: O Observation — show you have noticed something; F Feelings — say how you feel; N Needs — say what you need; R Request — make a request for action. Under each stone is an example sentence starter: When I see…, I feel…, I need…, Would you be willing to…?",
              caption: "O-F-N-R: four steps from a problem to a kind, clear request."
            },
            {
              type: "key",
              title: "A daily check-in with yourself",
              points: [
                "This quick, simple activity helps you be <b>honest with yourself</b> and notice your own <b>feelings and needs</b>.",
                "This habit helps you avoid bigger problems later — especially at times of stress.",
                "Keep your answers <b>private</b>. You do not need to share them."
              ]
            },
            {
              type: "tabs",
              title: "2. Listen to your teacher and follow the 6 steps",
              tabs: [
                {
                  label: "The 6 steps",
                  blocks: [
                    {
                      type: "steps",
                      items: [
                        {"who":"alone","text":"<b>Step 1 · Feeling.</b> How do you feel right now? Close your eyes and notice your chest, stomach, shoulders and throat. Find a <b>feeling</b> (not a thought) in the list. Write it down. Take 2 deep breaths."},
                        {"who":"alone","text":"<b>Step 2 · Thought.</b> Each feeling comes from a thought. What is making you feel this way? Be honest — nobody will see it."},
                        {"who":"alone","text":"<b>Step 3 · Observation.</b> What real event is behind this thought? Did someone do something? Just write the <b>facts</b>. Don’t judge."},
                        {"who":"alone","text":"<b>Step 4 · Need.</b> Which <b>need</b> is connected to your feeling? Find one in the list. Think about why it is important to you."},
                        {"who":"alone","text":"<b>Step 5 · Request (optional).</b> What specific request could meet this need? It can be for yourself or for someone else."},
                        {"who":"alone","text":"<b>Step 6 · Feeling check and gratitude.</b> Close your eyes. Has your feeling changed? Say (think) “thank you” to yourself for checking in."}
                      ]
                    }
                  ]
                },
                {
                  label: "Feelings list",
                  blocks: [
                    {
                      type: "language",
                      title: "Feelings (a guide — just scan it)",
                      groups: [
                        {"label":"When needs are met","phrases":["confident · open · safe · secure","engaged · curious · interested","hopeful · encouraged · optimistic","grateful · thankful · appreciative","excited · eager · enthusiastic","peaceful · calm · relaxed · relieved · satisfied"]},
                        {"label":"When needs are not met","phrases":["afraid · scared · suspicious","annoyed · frustrated · impatient","confused · torn","disconnected · distant · distracted","embarrassed · ashamed · guilty","tired · exhausted · lonely · sad"]}
                      ]
                    }
                  ]
                },
                {
                  label: "Needs list",
                  blocks: [
                    {
                      type: "language",
                      title: "Needs (a guide — just scan it)",
                      groups: [
                        {"label":"Connection","phrases":["acceptance · appreciation · belonging","cooperation · communication · consideration","respect / self-respect · support · trust"]},
                        {"label":"Physical & peace","phrases":["rest / sleep · food · movement","safety · ease · harmony · order"]},
                        {"label":"Autonomy & meaning","phrases":["choice · freedom · independence · space","challenge · clarity · competence · growth","learning · purpose · understanding · to matter"]}
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "model",
              title: "Two examples",
              rows: [
                ["Feelings","<i>worried</i> · <i>annoyed</i>"],
                ["Thoughts","<i>I’m going to fail this course.</i> · <i>My flatmate is selfish.</i>"],
                ["Observations","<i>I have a lot of tasks to do and they’re very challenging for me.</i> · <i>My flatmate finished the last of my milk.</i>"],
                ["Needs","<i>Confidence & sense of achievement</i> · <i>Consideration & respect</i>"],
                ["Request","<i>Set aside some time each day for study and focus on using my strengths and improving my weaknesses.</i> · <i>Ask my flatmate to replace the milk next time she goes shopping and suggest putting labels on fridge items.</i>"]
              ]
            },
            {
              type: "table",
              id: "a1-tab",
              title: "My private check-in (only you can see this)",
              columns: ["Feeling","Thought","Observation","Need","Request"],
              rows: 1
            },
            {"type":"tip","text":"Try this check-in every day for a week, especially before a deadline. It only takes three minutes."}
          ]
        },
        {
          id: "a2",
          short: "Matt’s email",
          minutes: 5,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-a2.svg",
          title: "Initiating Group Work Progress",
          goal: "Remember Alex, Jamie and Sam’s problem from Week 2, then read Matt’s reply.",
          blocks: [
            {
              type: "talk",
              title: "Remember Week 2?",
              prompts: ["In Week 2 (W2 D1. 2) we heard about a problem that 3 students (Alex, Jamie and Sam) were having with their interactive presentation. <b>Can you remember what the issue was?</b>"]
            },
            {
              type: "toggle",
              title: "Check your memory",
              hint: "Open after you talk",
              blocks: [
                {"type":"tip","text":"They were having trouble <b>setting a time to meet</b> to work on the task AND they had <b>not heard back from one of their groupmates (Matt)</b>."}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Read the email reply that Matt wrote to his groupmates. Then answer the questions."},
            {
              type: "model",
              title: "Subject: Interactive Presentation",
              list: [
                "Hi everyone,",
                "I have just spoken to Sam. Firstly, I want to apologize for my delayed response and for not being able to come to class recently. I’ve been managing a few personal matters that have unexpectedly taken up more of my time, which I realise may have caused some inconvenience for our group.",
                "I appreciate the patience and understanding you've all shown, and I want to assure you that I’m committed to contributing equally to our interactive presentation task. I’ve been keeping up with the coursework independently, and I’m eager to catch up and work together on this task.",
                "I understand everyone has tight schedules, but that we really need to get together and discuss the task. Since Wednesday and Thursday are out, and Sam will be away on Friday, could we consider meeting online one evening? This might provide us with the flexibility we need. I can make myself available at a time that suits everyone after 9 PM on any weekday or possibly earlier on the weekend if that works better.",
                "Please let me know what you all think or if there's another option that works better for everyone.",
                "Thanks for reaching out and coordinating, Sam. Looking forward to hearing from you all soon.",
                "Best regards, Matt"
              ]
            },
            {
              type: "quiz",
              id: "a2-quiz",
              title: "Read Matt’s email",
              items: [
                {"q":"1. Why had Matt not been in contact with the group?","options":["He was on holiday.","He’s been managing a few personal matters that have unexpectedly taken up more of his time.","He did not want to do the task.","He was sick."],"answer":"He’s been managing a few personal matters that have unexpectedly taken up more of his time.","why":"“I’ve been managing a few personal matters that have unexpectedly taken up more of my time …”"},
                {"q":"2. What solution does Matt suggest to deal with the issue of their busy schedules?","options":["Meet in class on Wednesday.","Meet online one evening (after 9 PM on any weekday, or possibly earlier on the weekend).","Each person works alone.","Ask the teacher for more time."],"answer":"Meet online one evening (after 9 PM on any weekday, or possibly earlier on the weekend).","why":"“… could we consider meeting online one evening? … after 9 PM on any weekday or possibly earlier on the weekend …”"}
              ]
            },
            {
              type: "language",
              title: "Steal Matt’s phrases: a polite group email",
              groups: [
                {"label":"Apologise","phrases":["I want to apologize for my delayed response.","I realise this may have caused some inconvenience for our group."]},
                {"label":"Show commitment","phrases":["I want to assure you that I’m committed to …","I’m eager to catch up and work together on this task."]},
                {"label":"Suggest a solution","phrases":["Could we consider …?","This might provide us with the flexibility we need.","Please let me know what you all think."]}
              ]
            }
          ]
        },
        {
          id: "a3",
          short: "Listening 1",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week4/v/v-d10w4d5-a3.svg",
          title: "Transactional Listening 1: Initiating Group Work Progress",
          goal: "Listen to the group’s Zoom meeting and answer test-style questions.",
          blocks: [
            {
              type: "key",
              title: "Transactional listening",
              points: [
                "Now that the group has heard back from Matt, they organise to have a <b>Zoom meeting</b>.",
                "In a <b>transaction</b>, people talk to <b>get something done</b>: agree on goals, split tasks, set deadlines.",
                "Listen for <b>decisions</b>: What? Who? By when?"
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d5-listen-loop.svg",
              alt: "A loop with four steps around a group at a table: 1 Listen to the idea, 2 Check what you heard, 3 Confirm the decision, 4 Act on it.",
              hint: "Tap each step: this is what good listeners do in a meeting.",
              spots: [
                {"x":50,"y":15,"label":"1","title":"Listen","text":"Look at the speaker. Show you are listening: “Right.” “OK, go on.” “That makes sense.”","color":"#2f7d6b"},
                {"x":85,"y":50,"label":"2","title":"Check","text":"Say it back in your words: “So what you’re saying is … — is that right?”","color":"#3a58a0"},
                {"x":50,"y":86,"label":"3","title":"Confirm","text":"Make the decision clear: “That gives us a week. What do you all think?”","color":"#b07d12"},
                {"x":15,"y":50,"label":"4","title":"Act","text":"Do it: “I’ll send out another Zoom meeting invite for the review session on Friday.”","color":"#c4562f"}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Read the questions first. Your teacher plays the recording <b>once only</b>. Answer while you listen."},
            {
              type: "quiz",
              id: "a3-quiz",
              title: "Questions 1, 2 and 6 · Choose one option",
              items: [
                {"q":"Question 1 · What did Alex do last night?","options":["A · went to the cinema","B · saw a band","C · went to a party","D · went to the Opera House"],"answer":"B · saw a band","why":"“I saw a fantastic band at the Manning Bar on campus last night!”"},
                {"q":"Question 2 · Jamie thinks they should address different…","options":["A · …ideas","B · …topics","C · …audiences","D · …perspectives"],"answer":"D · …perspectives","why":"“… address different perspectives on the topic to show depth in our research.”"},
                {"q":"Question 6 · How do the groupmates feel about the task now?","options":["A · optimistic","B · pessimistic","C · bored","D · worried"],"answer":"A · optimistic","why":"“Yeah, looking forward to seeing what we come up with!” · “Let’s make this a great presentation.”"}
              ]
            },
            {
              type: "limit",
              id: "a3-lim",
              title: "Questions 3, 4 and 5",
              rule: "NO MORE THAN THREE WORDS",
              max: 3,
              items: [
                {"q":"Question 3 · The four sections of their presentation are historical background, current statistics, case studies, and future …","accept":["predictions"],"model":"predictions"},
                {"q":"Question 4 · Next Wednesday they will share their …","accept":["drafts","first drafts"],"model":"drafts / first drafts"},
                {"q":"Question 5 · When will they meet to review?","accept":["Friday","on Friday"],"model":"Friday / on Friday"}
              ]
            },
            {
              type: "toggle",
              title: "Transcript · Transactional Listening 1",
              hint: "Open after listening (created by AI (Cogniti) with human modification)",
              blocks: [
                {
                  type: "chat",
                  right: "Alex",
                  lines: [
                    ["Alex","Hi everyone, I’m glad we could all be here tonight."],
                    ["Jamie","Hi Alex, hi everyone!"],
                    ["Sam","Hey guys!"],
                    ["Matt","Hey, thanks for setting this up, Sam."],
                    ["Sam","No worries! So, how are you all?"],
                    ["Alex","Good, but I’m a little tired. I saw a fantastic band at the Manning Bar on campus last night! It was a great show, but I didn’t get to bed until quite late. And then we had class this morning!"],
                    ["Matt","That sounds fun! Let me know the next time there’s a band playing at the Manning Bar. I love live music!"],
                    ["Jamie","Yeah! Me too! I hope you’re not too tired for our meeting though, Alex. I’m glad you were able to join us."],
                    ["Alex","Yeah, well, let’s get into our interactive presentation task then. First, I think we need to make sure we share common goals for this project. What do you all think are the most important things we should try to achieve?"],
                    ["Matt","I think our main goal should be to present a well-researched argument. We need to ensure our presentation is both informative and engaging."],
                    ["Jamie","Definitely! And I think it’s also important that we address different perspectives on the topic to show depth in our research."],
                    ["Sam","Agreed. And to achieve our goals, we should divide the work up effectively. Does anyone have any suggestions on how we can split up the tasks?"],
                    ["Matt","Well, we could each take a section of the research. For instance, I can take on the historical background, Jamie could handle current statistics, Sam might explore case studies, and Alex, you could work on the future predictions."],
                    ["Alex","Great suggestion, Matt. I think this plan means we can use our individual strengths."],
                    ["Jamie","I agree. It feels like a balanced approach."],
                    ["Sam","Me too, let’s do it!"],
                    ["Jamie","We could also check each other's sections to make sure they’re consistent and accurate."],
                    ["Sam","And maybe we can use a shared Google Doc to compile our research. It'll make collaboration easier."],
                    ["Alex","Perfect! Let’s set some deadlines now. We need to ensure we have enough time to prepare well before the interactive presentation date. How about we share our first drafts by next Wednesday?"],
                    ["Matt","That gives us a week. It should be enough time. What do you all think?"],
                    ["Jamie","That works for me. We should also schedule a review session after that."],
                    ["Sam","How about we review on Friday? It’ll give us a couple of days to make adjustments after the initial drafts."],
                    ["Alex","That sounds good. I’ll send out another Zoom meeting invite for the review session on Friday. One last thing, communication is key, guys. Let’s make sure to keep each other updated through our group chat."],
                    ["Matt","Absolutely, staying connected will make this process smoother."],
                    ["Jamie","Agreed. Thanks for organising, Alex, and it’s good to have you back with the group, Matt!"],
                    ["Sam","Yeah, looking forward to seeing what we come up with!"],
                    ["Alex","Thanks, everyone. Let’s make this a great presentation. I’ll follow up with the details and the invites. Have a good evening!"],
                    ["Matt, Jamie, Sam","Thanks, Alex! Bye!"]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "a4",
          short: "Listening 2",
          minutes: 10,
          grouping: "Alone → Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-a4.svg",
          title: "Transactional Listening 2: Evaluating Group Work Progress",
          goal: "Listen to the teacher check in with Alex. How is the group doing?",
          blocks: [
            {"type":"tip","text":"Alex had discussed their original problem with their teacher, and the teacher wants to check in with Alex to see that their group is <b>on track</b>."},
            {
              type: "figure",
              src: "dec10/assets/week4/d5-plan-timeline.svg",
              size: "wide",
              alt: "The group’s plan of action as a timeline. Four rows: Matt — historical background, Jamie — current statistics, Sam — case studies, Alex — future predictions. Each bar ends at a flag: first drafts by next Wednesday. A star marks the review session on Friday. A chat icon says: keep each other updated in the group chat.",
              caption: "The group’s plan from Listening 1: <b>what</b>, <b>who</b> and <b>by when</b>."
            },
            {"type":"do","n":1,"who":"alone","text":"Read the questions first. Your teacher plays the recording <b>once only</b>."},
            {
              type: "limit",
              id: "a4-lim",
              title: "Question 1",
              rule: "NO MORE THAN THREE WORDS",
              max: 3,
              items: [
                {"q":"How does Alex describe their progress?","accept":["significant","significant progress"],"model":"significant","why":"“We’ve made some significant progress.”"}
              ]
            },
            {
              type: "quiz",
              id: "a4-quiz",
              title: "Questions 2–5 · Choose one option",
              items: [
                {"q":"Question 2 · What concern does Alex raise?","options":["A · the difficulty of the task","B · the timeline","C · group disagreements","D · feeling nervous"],"answer":"B · the timeline","why":"“Well, one of our main concerns is the timeline.”"},
                {"q":"Question 3 · How will they deal with this risk?","options":["A · go to the library","B · practise regularly","C · avoid conflict","D · frequent communication"],"answer":"D · frequent communication","why":"“… we’ve agreed to maintain open and frequent communication in our group chat …”"},
                {"q":"Question 4 · What does the teacher think about the group’s collaboration?","options":["A · It’s not working well","B · It’s got worse than before","C · They’re working together well","D · They will need more help"],"answer":"C · They’re working together well","why":"“It’s great to see you’re working together to ensure your group functions well.”"},
                {"q":"Question 5 · In the end, how does Alex feel about the teacher?","options":["A · grateful","B · hopeful","C · angry","D · frustrated"],"answer":"A · grateful","why":"“Thank you for your support and advice! It's really helpful.”"}
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"Compare with a partner. Retell Alex’s plan in <b>30 seconds</b>: the four sections, the deadline, the review and the risk."},
            {
              type: "toggle",
              title: "Transcript · Transactional Listening 2",
              hint: "Open after listening (created by AI (Cogniti) with human modification)",
              blocks: [
                {
                  type: "chat",
                  right: "Alex",
                  lines: [
                    ["Teacher","Hello Alex, how are you today? I wanted to check in and see how everything is going with your group work task. Have you managed to resolve the issues you were having when we last spoke?"],
                    ["Alex","Hi! Thanks for asking. Yes, we've managed to get in touch with Matt and have scheduled regular meetings to ensure we stay on track. We are aiming to produce a well-researched and engaging presentation."],
                    ["Teacher","That sounds great! So, have you and the group made some good progress on the task?"],
                    ["Alex","Certainly. We’ve made some significant progress. We've divided the presentation into four main sections: historical background, current statistics, case studies, and future predictions. Each member is responsible for one section. We have set a deadline for the first drafts by next Wednesday. On Friday, we’ll have a review session where we'll check each other's work to make sure it’s consistent and accurate. We plan to share our research on a Google Doc to work together more easily."],
                    ["Teacher","It seems like you have a clear structure in place. Can you predict any more potential risks or challenges at this stage?"],
                    ["Alex","Well, one of our main concerns is the timeline. Balancing this project with our lives and other class work is difficult, and any delays in the first drafts could set us back quite a lot."],
                    ["Teacher","Yes, that can be a problem, Alex. Do you have any strategies to deal with this risk?"],
                    ["Alex","Well, we’ve agreed to maintain open and frequent communication in our group chat to quickly address any issues that arise. This should help make sure everyone is contributing effectively."],
                    ["Teacher","It's good to see that you are thinking ahead and planning for these challenges. It’s important to stay flexible and adjust your plans as needed. How do you plan to ensure that all team members remain engaged and contribute equally?"],
                    ["Alex","We've assigned sections that line up with each member's strengths and interests to keep everyone motivated. And regular check-ins and updates in our group chat will also help keep everyone accountable."],
                    ["Teacher","That’s a thoughtful approach, Alex. It’s great to see you’re working together to ensure your group functions well. Keep up the good work, and let me know if you need help or encounter any more difficulties."],
                    ["Alex","Thank you for your support and advice! It's really helpful. We'll definitely keep you updated on our progress."],
                    ["Teacher","You’re welcome, Alex! I look forward to seeing how your interactive presentation turns out. Have a great day!"],
                    ["Alex","You too! Thanks again!"]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "a5",
          short: "Phrases",
          minutes: 10,
          grouping: "Pairs (A + B)",
          art: "dec10/assets/week4/v/v-d10w4d5-a5.svg",
          title: "Language Focus",
          goal: "Listen again and catch the group work phrases. Student A and Student B listen for different jobs.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d5-meeting-cycle.svg",
              size: "wide",
              alt: "A project cycle in four steps. Transactional listening 1: Discussing goals (Student A), then Making a plan of action (Student B). Transactional listening 2: Discussing progress (Student A), then Potential challenges (Student B). An arrow goes back to goals.",
              caption: "<b>Student A</b> listens for goals (1) and progress (2). <b>Student B</b> listens for the plan (1) and challenges (2)."
            },
            {
              type: "steps",
              items: [
                {"who":"pair","text":"Work with a partner. Choose who is <b>Student A</b> and who is <b>Student B</b>. Read your phrases (below) for one minute."},
                {"who":"alone","text":"<b>Student A</b>: listen for phrases for <b>Discussing Goals</b> (Transactional Listening 1) and <b>Discussing Progress</b> (Transactional Listening 2)."},
                {"who":"alone","text":"<b>Student B</b>: listen for phrases for <b>Making a Plan of Action</b> (Transactional Listening 1) and <b>Potential Challenges</b> (Transactional Listening 2)."},
                {"who":"pair","text":"Your teacher plays each recording one more time. Tap the phrases you hear in the text below. Then tell your partner which phrases you heard."}
              ]
            },
            {
              type: "tabs",
              title: "The phrases for group work (your booklet table)",
              tabs: [
                {
                  label: "A · Goals",
                  blocks: [
                    {
                      type: "language",
                      title: "Discussing goals (Student A) · Transactional listening 1",
                      groups: [
                        {
                          label: "Discussing goals",
                          phrases: [
                            "I think we need to make sure we share common goals for this project.",
                            "What do you (all) think are the most important things we should try to achieve?",
                            "(Name)…, what’s your main goal with this task?",
                            "I think our main goal should be to + verb",
                            "We need to ensure…",
                            "I think it’s also important that we…",
                            "I was really hoping we could achieve/improve…"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  label: "B · Plan",
                  blocks: [
                    {
                      type: "language",
                      title: "Making a plan of action (Student B) · Transactional listening 1",
                      groups: [
                        {
                          label: "Making a plan of action",
                          phrases: [
                            "To achieve our goals, we should…(verb)",
                            "Does anyone have any suggestions on how we can split the tasks?",
                            "So, how do you think we should set this up?",
                            "Well, we could each… (verb)",
                            "For instance, I can take on …(task)..., (name 1) could handle…(task)..., (name 2) might explore…(task)..., and (name 3), you could work on…(task)....",
                            "And maybe we can (+ verb)",
                            "Great suggestion! / I agree. / Perfect!",
                            "Let’s set some deadlines now",
                            "How about we …(task/goal).… by next …(day)?",
                            "We should also schedule a…"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  label: "A · Progress",
                  blocks: [
                    {
                      type: "language",
                      title: "Discussing progress (Student A) · Transactional listening 2",
                      groups: [
                        {
                          label: "Discussing progress",
                          phrases: [
                            "I wanted to check in and see how everything is going with…(task).",
                            "Have you managed to… (verb?)",
                            "So far we’ve achieved quite a lot",
                            "We are aiming to…(verb)",
                            "We’ve made some significant progress.",
                            "We haven’t come as far as I had hoped.",
                            "By now I think we should have finished…",
                            "It looks like you’ve been making great progress with…(task). Well done!",
                            "We've divided the (task) into four main sections: …. Each member is responsible for … (section) We have set a deadline for ….(time/day)"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  label: "B · Challenges",
                  blocks: [
                    {
                      type: "language",
                      title: "Potential challenges (Student B) · Transactional listening 2",
                      groups: [
                        {
                          label: "Potential challenges",
                          phrases: [
                            "Can you predict any more potential risks or challenges at this stage?",
                            "Do you think we might have problems with…?",
                            "I’m a little concerned that our group might…",
                            "One of our main concerns is….",
                            "One problem that might come up is…",
                            "Do you have any strategies to deal with this risk?",
                            "If we…(verb).., then that should prevent….",
                            "we’ve agreed to…(verb) to quickly address any issues that arise. This should help make sure…"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "spot",
              id: "a5-spot",
              label: "Catch the phrases",
              title: "Parts of the two conversations",
              hint: "Tap every phrase from the booklet table that you hear. (A and B: tap your own phrases — then check your partner’s.)",
              paras: [
                "Alex: Yeah, well, let’s get into our interactive presentation task then. First, [[*I think we need to make sure we share common goals for this project.]] [[*What do you all think are the most important things we should try to achieve?]] Matt: [[*I think our main goal should be to]] present a well-researched argument. [[*We need to ensure]] our presentation is both informative and engaging. Jamie: Definitely! And [[*I think it’s also important that we]] address different perspectives.",
                "Sam: Agreed. And [[*to achieve our goals, we should]] divide the work up effectively. [[*Does anyone have any suggestions on how we can split up the tasks?]] Matt: [[*Well, we could each]] take a section of the research. [[*For instance, I can take on]] the historical background, Jamie [[*could handle]] current statistics, Sam [[*might explore]] case studies, and Alex, [[*you could work on]] the future predictions. Alex: [[*Great suggestion]], Matt. Sam: [[*And maybe we can]] use a shared Google Doc. Alex: [[*Perfect!]] [[*Let’s set some deadlines now.]] [[*How about we]] share our first drafts [[*by next]] Wednesday? Jamie: [[That works for me.]] [[*We should also schedule a]] review session after that.",
                "Teacher: [[*I wanted to check in and see how everything is going with]] your group work task. [[*Have you managed to]] resolve the issues? Alex: [[*We are aiming to]] produce a well-researched and engaging presentation. [[*We’ve made some significant progress.]] [[*We've divided the presentation into four main sections]]: … [[*Each member is responsible for]] one section. [[*We have set a deadline for]] the first drafts by next Wednesday.",
                "Teacher: [[*Can you predict any more potential risks or challenges at this stage?]] Alex: Well, [[*one of our main concerns is]] the timeline. Teacher: [[Yes, that can be a problem, Alex.]] [[*Do you have any strategies to deal with this risk?]] Alex: Well, [[*we’ve agreed to]] maintain open and frequent communication in our group chat [[*to quickly address any issues that arise.]] [[*This should help make sure]] everyone is contributing effectively."
              ]
            },
            {"type":"tip","text":"<b>Grammar to notice.</b> Goals: <b>should / need to / ensure</b>. Plans: <b>could / might / let’s / how about</b>. Progress: <b>present perfect</b> (we’ve made, have you managed to). Challenges: <b>might / if … then</b>."}
          ]
        },
        {
          id: "a6",
          short: "Check-in",
          minutes: 15,
          grouping: "Alone → Group",
          art: "dec10/assets/week4/v/v-d10w4d5-a6.svg",
          title: "Groupwork Check-in",
          goal: "Meet your own group and discuss your progress on your research — using the phrases and O-F-N-R.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"alone","text":"<b>Think</b> about questions 1–7 on your own and make some notes (5 min). Think especially about your group’s <b>strengths</b>, <b>areas for growth</b> and <b>potential risks</b>."},
                {"who":"group","text":"<b>Discuss</b> the questions with your group (10 min). Use the phrases from the Language Focus. Change them to explain your own progress, e.g. “<b>I am</b> aiming to …” / “<b>I haven’t</b> come as far as I had hoped.”"},
                {"who":"group","text":"If you have any disagreements, try to work through them using the <b>O-F-N-R</b> communication model."}
              ]
            },
            {
              type: "table",
              id: "a6-tab",
              title: "My notes before the meeting",
              columns: ["Question","My notes"],
              fixed: [
                "1. Do you think you are on track with your research?",
                "2. How have you been working to achieve your goals?",
                "3. What are your next steps (individually and as a group)?",
                "4. What do you think are your group’s strengths and areas for growth? (e.g. commitment, equal workload, motivation, deadlines/timing, communication, quality of work)",
                "5. How can you use and enhance your strengths and improve your areas for growth?",
                "6. Have you encountered any problems?",
                "7. Can you predict any potential challenges that might come up? If so, how can you deal with them?"
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d5-risk-matrix.svg",
              alt: "A risk map. Across: how likely a problem is. Up: how big the effect would be. Sticky notes sit in the boxes: delays to first drafts (likely, big effect), a member is sick (not likely, big effect), the talk is too long (likely, small effect), a slide design problem (not likely, small effect).",
              hint: "Question 7: where do your group’s challenges go? Tap each sticky note.",
              spots: [
                {"x":72,"y":25,"label":"1","title":"Likely + big effect","text":"Deal with this first! Like Alex: “One of our main concerns is the timeline.” → “We’ve agreed to maintain open and frequent communication … to quickly address any issues that arise.”","color":"#c4562f"},
                {"x":30,"y":25,"label":"2","title":"Not likely, but big effect","text":"Have a back-up plan: “If someone is sick, then … will step in.”","color":"#b07d12"},
                {"x":72,"y":68,"label":"3","title":"Likely, small effect","text":"A quick fix is enough: “If we practise with a timer, then that should prevent a long talk.”","color":"#3a58a0"},
                {"x":30,"y":68,"label":"4","title":"Not likely, small effect","text":"Keep an eye on it. Don’t spend too much meeting time here.","color":"#2f7d6b"}
              ]
            },
            {
              type: "language",
              title: "Go further: talk about YOUR progress",
              groups: [
                {"label":"On track?","phrases":["I’m on track with … / I’m a bit behind with …","I’ve finished … but I still need to …","I haven’t come as far as I had hoped, because …"]},
                {"label":"Strengths & growth","phrases":["One of our strengths is our communication.","An area for growth for us is sharing the workload equally.","We could make better use of …’s strength in …"]},
                {"label":"Next steps","phrases":["My next step is to …","As a group, we need to … by …","Let’s check in again on …"]},
                {"label":"O-F-N-R for problems","phrases":["When I see …, I feel … because I need …","Would you be willing to …?","What I’m hearing is … — am I on the right track?"]}
              ]
            },
            {
              type: "contract",
              id: "a6-c",
              kicker: "DEC10 · Week 4 · Groupwork check-in",
              title: "Our next steps",
              intro: "After our check-in, we agree on these next steps.",
              stamp: "Presentation group",
              signers: 4,
              fields: [
                {"id":"a6-track","label":"Are we on track? Our progress so far","placeholder":"We’ve made some significant progress: … / We haven’t come as far as we had hoped …","rows":2},
                {"id":"a6-next","label":"Next steps: who does what, by when","placeholder":"… will … by … · … will … by …","rows":3},
                {"id":"a6-risk","label":"Our main risk and our strategy","placeholder":"One of our main concerns is … If we …, then that should prevent …","rows":2},
                {"id":"a6-meet","label":"Our next check-in","placeholder":"e.g. Wednesday 6 pm on Zoom","rows":1}
              ]
            }
          ]
        }
      ]
    },
    {
      id: "aiprompts",
      number: "02",
      code: "16A",
      minutes: 90,
      tone: "blue",
      art: "dec10/assets/week4/s-d5-aiprompts.svg",
      title: "AST: Digital literacy and AI: Using & refining prompts",
      subtitle: "Prompting in 2026: give context, keep talking, check everything — with Cogniti, ChatGPT, Claude or Copilot",
      outcome: "You write a 2026-style prompt (RTRI + the 2 Cs: Context and Check), run it in the AI tool your class uses, check the answer against real sources, improve it through conversation, and decide where AI helps — and where it harms — your university work.",
      activities: [
        {
          id: "p1",
          short: "Still true?",
          minutes: 8,
          grouping: "Pairs → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-p1.svg",
          title: "Lead-in: Prompting tips — still true in 2026?",
          goal: "Check what you remember from the Week 3 homework, and find out which prompting tips are now out of date.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"In Week 3 you learned the basics of prompting. AI tools have changed a lot since many prompting tips were first written (2023). With a partner, sort each tip: is it <b>still true</b>, <b>out of date</b>, or a <b>myth</b>? Then check."},
            {
              type: "sort",
              id: "p1-sort",
              title: "Prompting tips: still true, out of date, or a myth?",
              hint: "Drag (or tap) each card into a box, then check.",
              buckets: [{"label":"Still true","letter":"✓"},{"label":"Out of date","letter":"↻"},{"label":"Myth","letter":"✗"}],
              items: [
                {"text":"Be clear and specific about what you want.","answer":0,"why":"Still the most important rule. The AI cannot read your mind."},
                {"text":"Give the AI your material: the assignment brief, the rubric, your notes or your draft.","answer":0,"why":"More important than ever. Today’s tools can read PDFs, images and long documents, and they give much better help when they can see what your teacher wants."},
                {"text":"Ask the AI to ask YOU some questions before it answers.","answer":0,"why":"A strong habit today: “Before you answer, ask me 3 questions about what I need.” The answer then fits your task."},
                {"text":"Start every prompt with “Act as a world-class expert” — that is the secret.","answer":1,"why":"A role can still help a little, but modern AI gains much more from <b>context</b>: who you are, what the task is and what it is for."},
                {"text":"Write one perfect prompt, then accept the answer.","answer":1,"why":"Good results come from a <b>conversation</b>: prompt, read, follow up, push back."},
                {"text":"AI can only use what it learned in training. It cannot look at today’s websites.","answer":1,"why":"Many tools can now search the web and show links. But a link is not proof: open it and read it."},
                {"text":"Use magic words like “take a deep breath” or offer the AI a tip to get better answers.","answer":2,"why":"These tricks were popular in 2023. Modern AI responds to plain, clear language. You do not need magic words."},
                {"text":"AI is so smart now that you don’t need to check its answers.","answer":2,"why":"AI makes fewer mistakes than before, but its mistakes sound just as confident as its correct answers. You are responsible for what you submit."},
                {"text":"If AI gives a reference with authors, a year and a journal, the article must be real.","answer":2,"why":"AI can still mix up or invent details of references, or say a source claims something it does not. Open the source and check."}
              ]
            },
            {
              type: "talk",
              title: "Discuss as a class",
              prompts: ["Which answer surprised you most?","Which of these tips did you believe before today?","Which AI tools do you already use? What for?"]
            }
          ]
        },
        {
          id: "p2",
          short: "2026 prompt",
          minutes: 15,
          grouping: "Class → Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-b2.svg",
          title: "The 2026 prompt: RTRI + the 2 Cs",
          goal: "Learn the two upgrades that make the biggest difference today: Context and Check.",
          blocks: [
            {
              type: "key",
              title: "What changed since RTRI?",
              points: [
                "Today’s AI understands plain English very well. You don’t need tricks. You need to give it the right <b>information</b>.",
                "<b>Role, Task, Requirements and Instructions</b> (RTRI, Week 3) are still useful. Think of them as the skeleton of your prompt.",
                "Upgrade 1 · <b>Context</b>: who you are, what the work is for, and the material it should use (the brief, the rubric, an article, your draft).",
                "Upgrade 2 · <b>Check</b>: tell the AI to ask you questions first, to say when it is not sure, to show where its information comes from, and to be honest rather than just agree with you."
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d5-prompt-2026.svg",
              alt: "A prompt card in six coloured strips: Role, Task, Context, Requirements, Instructions and Check. The first, second, fourth and fifth strips are marked RTRI. Context and Check are marked as the 2 Cs, with a small gold star.",
              hint: "Tap each part of the prompt for an example about sustainability certifications in eco-tourism.",
              spots: [
                {"x":10,"y":17,"label":"R","title":"Role","text":"e.g. “Act as a university tutor in sustainable tourism.” A role sets the style and the level of expertise. Useful, but on its own it does little.","color":"#ad6a12"},
                {"x":10,"y":31,"label":"T","title":"Task","text":"e.g. “Help me brainstorm initial ideas on the role of sustainability certifications in eco-tourism.” Say exactly what you want: brainstorm, explain, give feedback, quiz me …","color":"#2b776e"},
                {"x":10,"y":45,"label":"C","title":"Context ★","text":"e.g. “I’m a pre-university student. This is for a research task in my academic English course. I already know what eco-tourism is.” Attach the brief, the rubric or an article if you have one.","color":"#b0512a"},
                {"x":10,"y":59,"label":"R","title":"Requirements","text":"e.g. “Use clear B1–B2 English. Include ideas for and against. No more than 250 words. Do not write paragraphs for my essay.”","color":"#3a58a0"},
                {"x":10,"y":73,"label":"I","title":"Instructions","text":"e.g. “Put the ideas in bullet points under 3–4 headings, then suggest three research questions.” This tells the AI how the answer should look.","color":"#7a4a8c"},
                {"x":10,"y":87,"label":"C","title":"Check ★","text":"e.g. “Before you answer, ask me 2 questions about what I need. Tell me which points I should check in academic sources.”","color":"#2d7a9a"}
              ]
            },
            {
              type: "pairs",
              title: "Upgrade 1 · Add Context (✗ → ✓)",
              items: [
                {"from":"Explain sustainability certifications.","to":"Explain sustainability certifications. [[I’m a pre-university student writing a 600-word essay for my academic English course.]]","tag":"Who you are + what it’s for"},
                {"from":"Give me feedback on my paragraph.","to":"Give me feedback on my paragraph. [[The rubric is attached. Focus only on the criterion ‘Use of evidence’.]]","tag":"The rubric"},
                {"from":"Summarise this topic.","to":"Summarise [[the attached article]]. [[Use only the article — no outside information.]]","tag":"The material"},
                {"from":"Help me with my presentation.","to":"Help me with my presentation. [[It is a 3-minute group talk for classmates about eco-tourism in Australia. I am presenting the challenges part.]]","tag":"The situation"}
              ]
            },
            {
              type: "pairs",
              title: "Upgrade 2 · Add a Check (✗ → ✓)",
              items: [
                {"from":"What are the problems with eco-certifications?","to":"What are the problems with eco-certifications? [[Before you answer, ask me 3 questions about what I need.]]","tag":"Ask me first"},
                {"from":"Give me some statistics about eco-tourism in Australia.","to":"Give me some statistics about eco-tourism in Australia. [[For each number, give the source and a link so I can check it. If you are not sure, say so.]]","tag":"Sources + uncertainty"},
                {"from":"Is my argument good?","to":"Is my argument good? [[Be honest and critical: tell me the two weakest points, not only what is good.]]","tag":"Don’t just agree with me"},
                {"from":"Explain the carbon footprint of flying.","to":"Explain the carbon footprint of flying. [[Then ask me two questions to check that I understood.]]","tag":"Check my understanding"}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Concept check. Answer alone, then compare with your partner."},
            {
              type: "quiz",
              id: "p2-quiz",
              title: "Do you know the 2 Cs?",
              items: [
                {"q":"A student writes: “Act as a professor. Write about eco-tourism.” What is the BIGGEST problem?","options":["There is no role","There is no context: the AI doesn’t know who it is for, how long it should be or why","It is not polite enough","It needs a magic word"],"answer":"There is no context: the AI doesn’t know who it is for, how long it should be or why","why":"The role is there. What is missing is the information the AI needs to fit the answer to <b>you</b>."},
                {"q":"Which line is a <b>Check</b>?","options":["Use clear B1 English.","Act as a tutor.","If you are not sure about a fact, tell me.","Give the answer in a table."],"answer":"If you are not sure about a fact, tell me.","why":"A Check asks the AI to show its uncertainty, sources or questions. The others are a requirement, a role and an instruction."},
                {"q":"Why attach the assignment rubric?","options":["So the AI can write the essay for you","So the feedback matches what your teacher will mark","Because AI can’t work without files","To make the answer longer"],"answer":"So the feedback matches what your teacher will mark","why":"Context makes the help fit your real task. It does not mean the AI does the task for you."},
                {"q":"The AI agrees with everything you say. What should you add to your prompt?","options":["“Be honest and critical — tell me where I’m wrong.”","“Act as an expert.”","“Use bullet points.”","“Write more.”"],"answer":"“Be honest and critical — tell me where I’m wrong.”","why":"AI tends to agree with the user. Asking for honest criticism is a Check."}
              ]
            },
            {
              type: "tip",
              text: "<b>Context, but not personal data.</b> Never paste personal details (yours or anyone else’s), a classmate’s work or private information into an AI tool. In Cogniti, your teacher can see the conversation."
            }
          ]
        },
        {
          id: "p3",
          short: "Build & run",
          minutes: 20,
          grouping: "Pairs → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-p3.svg",
          title: "Activity 1: Build it, run it — in your AI tool",
          goal: "Write a full prompt for a research task, run it in the AI tool your class uses and compare the answers from different tools.",
          blocks: [
            {
              type: "key",
              title: "Your research task",
              points: [
                "This week you have been learning about eco-tourism. Imagine that your teacher sets you this research task:",
                "<b>What is the role of sustainability certifications in eco-tourism? Are they effective?</b>",
                "You want <b>initial ideas</b> to get started (a brainstorm). You do <b>not</b> want a finished answer."
              ]
            },
            {
              type: "tabs",
              title: "Choose your AI tool (your teacher will tell you which ones are allowed today)",
              tabs: [
                {"label":"Cogniti","blocks":[
                  {"type":"key","title":"Cogniti — the University of Sydney’s own AI","points":[
                    "Made by the University of Sydney. Teachers build <b>agents</b>: an AI with instructions, resources and limits that the teacher wrote. In other words, an agent is <b>a prompt someone wrote for you</b>.",
                    "Log in with your university account (Unikey) at <b>app.cogniti.ai</b>, or open the agent from Canvas. Your teacher gives you the agent link. Agent names and AI models change, so use the agent your teacher recommends today.",
                    "<b>Good for:</b> course-specific help. An agent can know your unit’s materials and is often designed to guide you, not do the work for you.",
                    "<b>Remember:</b> academic integrity rules apply in Cogniti too, and teachers can see conversation logs. Check every answer critically."
                  ]}
                ]},
                {"label":"ChatGPT","blocks":[
                  {"type":"key","title":"ChatGPT (OpenAI)","points":[
                    "At <b>chatgpt.com</b>. There is a free plan. Users must be 13 or older, and under-18s need a parent’s permission.",
                    "<b>Good for:</b> brainstorming, explaining ideas, voice conversation practice, and web search with links. <b>Study mode</b> makes it teach you with questions instead of giving you the answer.",
                    "<b>Watch out:</b> on personal accounts your chats may be used to train the AI unless you turn this off in the settings. Do not paste personal or private information."
                  ]}
                ]},
                {"label":"Claude","blocks":[
                  {"type":"key","title":"Claude (Anthropic)","points":[
                    "At <b>claude.ai</b>. There is a free plan. You must be <b>18 or older</b>. If you are under 18, use Cogniti or Copilot.",
                    "<b>Good for:</b> reading long documents and PDFs carefully, detailed feedback on your writing, and step-by-step explanations. Ask it to teach rather than tell: “Guide me with questions. Don’t give me the answer.”",
                    "<b>Watch out:</b> check your privacy settings to decide whether your chats can be used to improve the AI. Do not paste personal or private information."
                  ]}
                ]},
                {"label":"Copilot","blocks":[
                  {"type":"key","title":"Microsoft 365 Copilot Chat","points":[
                    "Sign in with your <b>university email</b> (copilot.microsoft.com or the Microsoft 365 app).",
                    "With your university account, your chats have <b>data protection</b>: they are not used to train the AI. Look for the shield icon.",
                    "<b>Good for:</b> everyday questions with web links, and help inside Word and PowerPoint.",
                    "<b>Watch out:</b> the shield only works when you are signed in with your university account, not a personal one."
                  ]}
                ]}
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"pair","text":"In <b>5 minutes</b>, build your prompt below with <b>RTRI + the 2 Cs</b>. Remember: you want initial ideas, not an essay."},
                {"who":"pair","text":"Copy your prompt and run it in your tool. If the AI asks you questions first (your Check), answer them."},
                {"who":"pair","text":"Share your prompt on the class wall."},
                {"who":"class","text":"As a class, choose the best prompt. Your teacher runs it in <b>two different tools</b> on the screen (e.g. Cogniti and ChatGPT or Claude). Compare the two answers: what is the same, and what is different?"}
              ]
            },
            {
              type: "promptbuilder",
              id: "p3-pb",
              title: "Build your research prompt",
              parts: [
                {"key":"role","label":"Role","lead":"Act as","placeholder":"a university tutor in sustainable tourism","chips":["a university tutor in sustainable tourism","a friendly academic writing tutor","a researcher who studies eco-certification"]},
                {"key":"task","label":"Task","lead":"Your task is to","placeholder":"help me brainstorm initial ideas on the role of sustainability certifications in eco-tourism and whether they are effective","chips":["help me brainstorm initial ideas on the role of sustainability certifications in eco-tourism and whether they are effective","give me a map of the main debates about eco-certifications"]},
                {"key":"context","label":"Context","lead":"Context:","placeholder":"I am a pre-university student in an academic English course. This is for a research task.","chips":["I am a pre-university student in an academic English course","this is for a research task, and I will find academic sources myself later","I already know what eco-tourism is"]},
                {"key":"requirements","label":"Requirements","lead":"Requirements:","placeholder":"Use clear B1–B2 English. Include ideas for and against. No more than 250 words.","chips":["use clear B1–B2 English","include ideas for and against their effectiveness","no more than 250 words","do not write paragraphs for my essay"]},
                {"key":"instructions","label":"Instructions","lead":"Instructions:","placeholder":"Put the ideas in bullet points under 3–4 headings, then suggest three research questions.","chips":["put the ideas in bullet points under 3–4 headings","give one real example of a certification for each heading","finish with three research questions I could investigate"]},
                {"key":"check","label":"Check","lead":"Check:","placeholder":"Before you answer, ask me 2 questions about what I need. If you are not sure about a fact, say so.","chips":["before you answer, ask me 2 questions about what I need","tell me which points I should check in academic sources","if you are not sure about a fact, say so"]}
              ]
            },
            {
              type: "fields",
              fields: [
                {"id":"p3-new","label":"One idea from the AI’s answer that we did not expect","rows":2},
                {"id":"p3-cmp","label":"Same prompt, two tools: one difference we noticed","placeholder":"Tool A gave …, but Tool B …","rows":2}
              ]
            },
            {
              type: "language",
              title: "Useful language: choosing the best prompt",
              groups: [
                {"label":"Evaluate","phrases":["This prompt has a clear task, but there is no context.","I like this one because the Check makes the AI ask us questions first.","This one is missing the requirements."]},
                {"label":"Choose","phrases":["I’d vote for number … because …","If we add … to this prompt, it would be even better."]},
                {"label":"Compare tools","phrases":["Both tools mentioned …","Tool A was more …, whereas Tool B …","Only one tool gave sources we could check."]}
              ]
            }
          ]
        },
        {
          id: "p4",
          short: "Check it",
          minutes: 12,
          grouping: "Alone → Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-b3.svg",
          title: "Activity 2: Check before you trust",
          goal: "Read the AI’s answer critically and check one claim against a real source.",
          blocks: [
            {
              type: "key",
              tone: "warn",
              title: "Why check, if AI is so smart now?",
              points: [
                "AI makes fewer mistakes than in 2023, but its mistakes sound <b>just as confident</b> as its correct answers.",
                "Links and references can be real but <b>not say what the AI claims</b>. Sometimes details (authors, year, journal) are mixed up or invented.",
                "AI tends to <b>agree with you</b>. If you write “I think certifications don’t work”, it may lean your way.",
                "<b>You</b> are responsible for everything you submit, not the AI."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-output-check.svg",
              alt: "A magnifying glass over an AI answer. Around it are six check tags: Accurate? Relevant? Specific? Real sources? Right level? Fair and balanced?",
              caption: "Six questions to ask about every AI answer. In 2026, add a seventh: <b>Is it just agreeing with me?</b>"
            },
            {
              type: "form",
              id: "p4-form",
              title: "Is it a good answer?",
              intro: "Rate the AI’s answer to your research prompt.",
              scale: ["Yes","Partly","No"],
              cols: ["Example from the answer"],
              sections: [
                {
                  label: "The seven checks",
                  items: [
                    "Accurate — is the information correct?",
                    "Relevant — does it answer OUR question about certifications?",
                    "Specific — does it give examples, not just general ideas?",
                    "Real sources — can you open them, and do they say what the AI claims?",
                    "Right level — is it easy enough to understand?",
                    "Fair and balanced — does it show both sides?",
                    "Not just agreeing — does it challenge any idea in our prompt?"
                  ]
                }
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"<b>Source hunt.</b> Choose <b>one</b> fact or claim from the AI’s answer. Try to find it in a real source: open the AI’s link, or search Google Scholar or the library website. Fill in the table."},
            {
              type: "table",
              id: "p4-tab",
              title: "Our source hunt",
              columns: ["The claim","Where the AI said it came from","Found it? (Yes / No / Different)","What the real source says"],
              fixed: ["Claim 1","Claim 2 (if you have time)"]
            },
            {"type":"do","n":2,"who":"pair","text":"What would you do? Bet 1–3 coins on each answer."},
            {
              type: "bet",
              id: "p4-bet",
              title: "Trust it or check it?",
              coins: 10,
              items: [
                {
                  q: "The AI gives a reference: Green & Hall (2019), <i>Journal of Eco-Certification Studies</i>, 14(2). You can’t find the journal anywhere.",
                  options: ["A · Use it. The AI wouldn’t invent a journal.","B · Don’t use it. Find a real source for the same point, or drop the point.","C · Change the year and use it.","D · Ask the AI “Are you sure?” and use it if it says yes."],
                  answer: "B · Don’t use it. Find a real source for the same point, or drop the point.",
                  why: "If you can’t find a source, you can’t cite it. Asking the AI “Are you sure?” is not checking: it may simply repeat itself or change its mind."
                },
                {
                  q: "The AI links to a real government website, but the page doesn’t mention certifications.",
                  options: ["A · It’s a real website, so the claim is fine.","B · The link is real but doesn’t support the claim. Find better evidence.","C · Cite the website anyway.","D · Use the claim without a citation."],
                  answer: "B · The link is real but doesn’t support the claim. Find better evidence.",
                  why: "A real link is not proof. The source must say what you claim it says."
                },
                {
                  q: "You write: “Eco-certifications are useless, right?” The AI agrees and gives five reasons.",
                  options: ["A · Great. The AI confirms your opinion.","B · Ask: “Now give me the strongest arguments that certifications DO work.”","C · Ask the same question again.","D · Copy the five reasons into your essay."],
                  answer: "B · Ask: “Now give me the strongest arguments that certifications DO work.”",
                  why: "A leading question gets a one-sided answer. Ask for the other side, then decide for yourself."
                }
              ]
            },
            {
              type: "language",
              title: "Useful language: talking about AI output",
              groups: [
                {"label":"It works","phrases":["The output is relevant to our task.","It gives a clear, specific example of …","It covers both sides of the question."]},
                {"label":"It doesn’t work","phrases":["This is too general to be useful.","We couldn’t find the source for this claim.","The link is real, but it doesn’t say that."]},
                {"label":"Change the prompt","phrases":["We should add some context: …","We need a Check: ask it to …","We could ask it to focus only on …"]}
              ]
            }
          ]
        },
        {
          id: "p5",
          short: "Keep talking",
          minutes: 20,
          grouping: "Pairs → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-b4.svg",
          title: "Activity 3: Iterative interaction — keep the conversation going",
          goal: "Use six conversation moves to dig deeper, then present what you found in 3 minutes.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d5-refine-loop.svg",
              size: "wide",
              alt: "The iterative process of prompting: Craft prompt, then Analyse response and review prompt, then Use output. A big arrow loops back from Analyse response to Craft prompt.",
              caption: "Prompt → read and check → follow up. One prompt is rarely enough."
            },
            {
              type: "key",
              title: "Iterative interaction today",
              points: [
                "Treat the AI like a tutor in a conversation: ask, read the answer, then ask a follow-up <b>based on what it just said</b>. Each round takes you one layer deeper, like peeling an onion.",
                "AI tools remember the whole conversation, so you don’t need to repeat everything. But start a <b>new chat</b> for a new topic, so old ideas don’t mix in.",
                "Use different <b>moves</b>, not only “Tell me more.”"
              ]
            },
            {
              type: "flip",
              title: "Six conversation moves",
              hint: "Turn each card over to see an example.",
              items: [
                {"front":"1 · Ask me first","back":"“Before you answer, ask me 3 questions about what I need.”"},
                {"front":"2 · Zoom in","back":"“You mentioned … Tell me more about that, with one example.”"},
                {"front":"3 · Simplify","back":"“Explain that in simpler English, with an everyday example.”"},
                {"front":"4 · Push back","back":"“What would a critic say about this?” · “Give me the strongest argument against.”"},
                {"front":"5 · Verify","back":"“Where does this come from? Give me a source I can check.” · “How sure are you about this number?”"},
                {"front":"6 · Teach me","back":"“Don’t give me the answer. Ask me questions one at a time to help me work it out.” · “Quiz me on this.”"}
              ]
            },
            {
              type: "chat",
              ai: true,
              title: "The moves in action",
              right: "You",
              lines: [
                ["You","What are the 3 major challenges to developing eco-tourism in Australia?"],
                ["AI","1) Large distances, so travel creates high emissions. 2) Climate impacts such as bushfires and coral bleaching. 3) Balancing visitor numbers with protecting fragile places …"],
                ["You","<mark>You mentioned coral bleaching. How does it affect eco-tourism on the Great Barrier Reef? Give one example and a source I can check.</mark>"],
                ["AI","Bleaching can make reef tours less attractive and puts pressure on operators … (source and link)"],
                ["You","<mark>What would a critic say? Is tourism also part of the problem?</mark>"],
                ["AI","Critics argue that boats, flights and visitor numbers add to the pressure on the reef …"],
                ["You","<mark>Don’t tell me the answer yet. Ask me two questions to help me decide which challenge is the most serious.</mark>"]
              ]
            },
            {
              type: "key",
              title: "Your new task",
              points: [
                "Imagine your teacher has set you this task: <b>Identify the major challenges and barriers to developing and expanding eco-tourism in Australia.</b>",
                "Start with this question: <b>What are the 3 major challenges to developing eco-tourism in Australia?</b>",
                "Then follow up. Use at least <b>three different moves</b>."
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"pair","text":"Open your AI tool and start a <b>new chat</b>."},
                {"who":"pair","text":"Spend <b>10 minutes</b> in conversation: the first question, then at least <b>four follow-ups</b>. Write each round in the log."},
                {"who":"pair","text":"Prepare a <b>3-minute presentation</b> of your AI findings. Say which move gave the most useful answer."},
                {"who":"class","text":"2–3 pairs present to the class."}
              ]
            },
            {
              type: "table",
              id: "p5-tab", live: true,
              title: "Our conversation log",
              columns: ["Round","Our question","Move we used","Main points in the AI’s answer"],
              fixed: ["1 · Start","2 · Follow-up","3 · Follow-up","4 · Follow-up","5 · Follow-up"]
            },
            {
              type: "language",
              title: "Useful language: a 3-minute presentation of AI findings",
              groups: [
                {"label":"Open","phrases":["We asked [tool] about the major challenges to developing eco-tourism in Australia.","We started with … and then followed up on …"]},
                {"label":"Report findings","phrases":["According to the AI, the first major challenge is …","When we pushed back, it admitted that …","This links to … in Spenceley and Rylance (2021)."]},
                {"label":"Be critical","phrases":["However, the AI did not give a source for …, so we would need to check it.","When we checked the link, we found that …"]},
                {"label":"Close","phrases":["The most useful move was … because …","Next, we would like to research …"]}
              ]
            },
            {
              type: "tip",
              text: "<b>Integrity:</b> AI findings are a starting point, not a source. Check them against real academic sources, and acknowledge any AI tool that contributed to your work (Week 1)."
            }
          ]
        },
        {
          id: "p6",
          short: "At uni",
          minutes: 15,
          grouping: "Groups → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-p6.svg",
          title: "Activity 4: AI at university — help or harm?",
          goal: "Evaluate today’s conversations, decide where AI helps or harms university work, and write your own AI rules.",
          blocks: [
            {
              type: "talk",
              title: "Evaluate today (groups, 3 minutes)",
              prompts: [
                "Did talking with AI help you understand the topic better than a Google search might have? Why or why not?",
                "Did you find any mistakes, gaps or one-sided ideas? How did you deal with them?",
                "Which conversation move gave the best answers? Which prompt part made the biggest difference?"
              ]
            },
            {"type":"do","n":1,"who":"group","text":"Sort these university tasks. Be ready to explain your choices."},
            {
              type: "sort",
              id: "p6-sort",
              title: "Using AI at university: help or harm?",
              hint: "Drag (or tap) each card into a box, then check.",
              buckets: [{"label":"Good use: AI as a tutor or coach","letter":"✓"},{"label":"Use with care: check the rules, check the output, acknowledge it","letter":"!"},{"label":"Not OK: an integrity or privacy problem","letter":"✗"}],
              items: [
                {"text":"Ask AI to explain a difficult journal article abstract in simpler English, then read the article to check you understood.","answer":0,"why":"AI helps you get into the text, and you still read the real article."},
                {"text":"Ask AI to quiz you on your lecture notes before an exam.","answer":0,"why":"AI as a tutor: you do the thinking and the remembering."},
                {"text":"Practise for a tutorial discussion by talking to AI in voice mode.","answer":0,"why":"Safe practice for speaking and thinking on your feet."},
                {"text":"Ask AI to suggest journal articles for your literature review.","answer":1,"why":"It can suggest search terms and real articles, but check that each one exists and says what the AI claims. Library databases and Google Scholar are still your main tools."},
                {"text":"Ask AI to check the grammar of a paragraph you wrote.","answer":1,"why":"Often allowed in open tasks. Check the unit rules, keep your own voice and acknowledge the AI use."},
                {"text":"Ask AI for an outline of your essay.","answer":1,"why":"Allowed in some tasks but not in others. If it is allowed, change the outline with your own ideas and acknowledge it."},
                {"text":"Ask AI to write your essay, then change some words and submit it as your own work.","answer":2,"why":"This is not your work. It breaks academic integrity rules, and you learn nothing."},
                {"text":"Paste a classmate’s draft into AI to get feedback, without asking them.","answer":2,"why":"It is their work and their data. Always ask first."},
                {"text":"Use AI during a secure, in-class test.","answer":2,"why":"Secure assessments (Lane 1) check what you can do without AI."},
                {"text":"Paste survey answers with participants’ names and emails into a free AI tool.","answer":2,"why":"This is a privacy problem. Personal data must stay protected."}
              ]
            },
            {
              type: "key",
              title: "Six risks to know, and what to do",
              points: [
                "<b>Confident mistakes</b> and wrong references → check facts and sources yourself.",
                "<b>Agreeing with you</b> → ask for the other side and for honest criticism.",
                "<b>Bias</b> → AI can repeat stereotypes or show only one culture’s view. Ask: whose voices are missing?",
                "<b>Privacy</b> → no personal or private information, and no one else’s work, in AI tools. Prefer university tools (Cogniti, Copilot with your university account).",
                "<b>Academic integrity</b> → at the University of Sydney, <b>secure (Lane 1)</b> assessments are done in person and AI use is controlled; in <b>open (Lane 2)</b> assessments you may use AI as the unit outline describes. Always check the rules, and acknowledge AI use.",
                "<b>Over-reliance</b> → if AI does the thinking, you don’t learn, and many assessments test you in person. Use AI to think <b>more</b>, not less."
              ]
            },
            {
              type: "tabs",
              title: "Prompts you can use at university (keep these)",
              tabs: [
                {"label":"Journal articles","blocks":[{"type":"cards","items":[
                  {"label":"Understand it","text":"“I’m a pre-university student. Here is the abstract of a journal article. Explain the research question, the method and the main finding in simple English. Then ask me 3 questions to check I understood.”"},
                  {"label":"Key words","text":"“Make a glossary of the key terms in this article, with a simple meaning and one example each.”"},
                  {"label":"Risk","text":"AI can misread tables and numbers. Check the key numbers in the article yourself."}
                ]}]},
                {"label":"Writing","blocks":[{"type":"cards","items":[
                  {"label":"Feedback, not rewriting","text":"“Here is my paragraph and the rubric. Don’t rewrite it. Tell me the two weakest points against the rubric, and ask me questions to help me fix them.”"},
                  {"label":"Language options","text":"“Show me three ways to introduce evidence from a source. I will choose one and write my own sentence.”"},
                  {"label":"Risk","text":"If AI writes it, it is not your voice. Check the unit rules and acknowledge AI use."}
                ]}]},
                {"label":"Research","blocks":[{"type":"cards","items":[
                  {"label":"Focus a topic","text":"“Help me turn this topic into 3 focused research questions. Ask me what interests me first.”"},
                  {"label":"Search better","text":"“Suggest search terms and synonyms I can use in the library database for this question.”"},
                  {"label":"Risk","text":"Invented or misreported sources. Find and read every source yourself."}
                ]}]},
                {"label":"Exams","blocks":[{"type":"cards","items":[
                  {"label":"Retrieval practice","text":"“Quiz me on these lecture notes, one question at a time. Wait for my answer, then give feedback.”"},
                  {"label":"Plan","text":"“Make me a 7-day revision plan for these topics. I have 2 hours a day.”"},
                  {"label":"Risk","text":"You can’t use AI in a secure exam, so practise without it too."}
                ]}]},
                {"label":"Group work","blocks":[{"type":"cards","items":[
                  {"label":"Plan for problems","text":"“Here is our group’s plan. What could go wrong? Put the risks in a table: likely or not likely, big or small effect.”"},
                  {"label":"Prepare for questions","text":"“Ask me 5 tough questions an audience might ask about our presentation topic.”"},
                  {"label":"Risk","text":"Don’t share group members’ personal details or their work without asking."}
                ]}]}
              ]
            },
            {
              type: "fields",
              fields: [
                {"id":"p6-rules","label":"My three AI rules for university","placeholder":"1. I always …  2. I never …  3. Before I submit, I …","rows":3},
                {"id":"p6-me","label":"One prompt I will use this week (copy it here)","rows":2}
              ]
            },
            {
              type: "language",
              title: "Useful language: explaining your choices",
              groups: [
                {"label":"Good use","phrases":["This is a good use because the AI helps me think, but I still …","It’s like having a tutor who …"]},
                {"label":"With care","phrases":["It depends on the unit rules.","It’s fine as long as we check … and acknowledge …"]},
                {"label":"Not OK","phrases":["This crosses the line because …","The problem here is privacy / integrity: …"]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: "negotiate",
      number: "03",
      code: "17A",
      minutes: 60,
      tone: "teal",
      art: "dec10/assets/week4/s-d5-negotiate.svg",
      title: "Interactive Discussion: Discussion and negotiation",
      subtitle: "Have your views on ecotourism changed? Then negotiate the best strategy",
      outcome: "You engage in critical thinking by reviewing your previous views on ecotourism, use skills and language to participate effectively in an interactive discussion, and reflect on your performance to plan for future improvement.",
      activities: [
        {
          id: "c1",
          short: "Views",
          minutes: 15,
          grouping: "Alone → Group",
          art: "dec10/assets/week4/v/v-d10w4d5-c1.svg",
          title: "Guided discussion: Have your views changed?",
          goal: "Look back at your Monday ideas about ecotourism. Are they the same after a week of reading, listening and writing?",
          blocks: [
            {
              type: "key",
              title: "In Monday’s lesson, you discussed these questions and wrote down your ideas:",
              numbered: true,
              points: [
                "What do you understand by <i>ecotourism</i>?",
                "Have you experienced this form of tourism yourself? What is your attitude towards it?",
                "Who do you think are the various stakeholders? How might their interests conflict with each other?"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-views-shift.svg",
              size: "wide",
              alt: "An opinion line from ‘Ecotourism rarely keeps its promises’ to ‘Ecotourism usually keeps its promises’. A grey Monday marker sits on one side, a green Friday marker has moved. Three source cards below push it: Spenceley and Rylance 2021, Mielly 2023, Alom 2023.",
              caption: "Where were you on Monday? Where are you now? <b>What moved you?</b>"
            },
            {"type":"do","n":1,"who":"alone","text":"Individually, look back at what you wrote down on Monday. Move each slider: first where you were on Monday, then where you are now."},
            {
              type: "scale",
              id: "c1-mon",
              title: "On Monday I thought …",
              statement: "Ecotourism can really achieve its goals: it protects nature and helps local people.",
              ends: ["Strongly disagree","Strongly agree"]
            },
            {
              type: "scale",
              id: "c1-now",
              title: "Today I think …",
              statement: "Ecotourism can really achieve its goals: it protects nature and helps local people.",
              ends: ["Strongly disagree","Strongly agree"]
            },
            {
              type: "fields",
              title: "Prepare your ideas",
              fields: [
                {"id":"c1-now-a","label":"1) How would you answer the questions now, after having read and listened to different perspectives, and after having written an essay?","rows":3},
                {"id":"c1-chg","label":"2) Have your ideas and views changed? Why / why not?","rows":2}
              ]
            },
            {"type":"sources","ids":["ecosdg","bluewash","alom"]},
            {"type":"do","n":2,"who":"group","text":"When you are ready, share your ideas with your group. Each person speaks for <b>one minute</b>. The others ask one follow-up question."},
            {
              type: "language",
              title: "Useful language: talking about a change of view",
              groups: [
                {"label":"My view changed","phrases":["I used to think …, but after reading …, I now believe …","At first I was quite optimistic about …, but …","… made me rethink my view on …"]},
                {"label":"My view is the same","phrases":["My view hasn’t really changed. In fact, … confirmed that …","I still believe …, mainly because …"]},
                {"label":"Stakeholders","phrases":["The main stakeholders are local communities, tour operators, tourists and governments.","Their interests might conflict because …","What benefits … may not benefit …"]},
                {"label":"Not sure","phrases":["I’m less certain than I was. On the one hand …, on the other hand …","It depends on …"]}
              ]
            }
          ]
        },
        {
          id: "c2",
          short: "Skills",
          minutes: 10,
          grouping: "Alone → Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-c2.svg",
          title: "Negotiation: review the skills and language",
          goal: "Review the skills and language for an interactive discussion — and choose the expressions you will practise today.",
          blocks: [
            {"type":"tip","text":"A <b>negotiation task</b> will be part of your final <b>Interactive Discussion Task</b>. Today is practice for it."},
            {
              type: "figure",
              src: "dec10/assets/week4/d5-discussion-skills.svg",
              size: "wide",
              alt: "Two rows of skill badges. Discussion skills: Start the discussion, Introduce ideas, Take the floor politely. Skills to encourage negotiation: Build on others’ ideas, Ask for clarification, opinions or justification, Give opinions, suggest solutions and justify choices. Under them, a strip: Refer to sources.",
              caption: "Six skills + sources = a strong Interactive Discussion."
            },
            {
              type: "tabs",
              title: "The three language tables",
              tabs: [
                {
                  label: "Discussion skills",
                  blocks: [
                    {
                      type: "language",
                      title: "1) Three key discussion skills",
                      groups: [
                        {"label":"Start the discussion","phrases":["Example: Ok, we’ve decided to talk about…","Let’s kick off by looking at…","A good place to begin might be…","I’d like to open the discussion with…"]},
                        {"label":"Introduce ideas","phrases":["Example: According to (name of research) …","(author’s name) suggests that…","(author’s name) highlights that…","Research shows/suggests that…"]},
                        {"label":"Take the floor politely","phrases":["Example: Can I just say… [pause]","Sorry to jump in, but…","Just a quick thought…","Could I add something to that?"]}
                      ]
                    }
                  ]
                },
                {
                  label: "Negotiation",
                  blocks: [
                    {
                      type: "language",
                      title: "2) Discussion skills to encourage negotiation",
                      groups: [
                        {"label":"Building on others’ ideas","phrases":["Example: Building on what you said before, ...","That’s a good point, and I’d add that …","Following on from …’s idea, …"]},
                        {"label":"Asking others for clarification / opinions / justification","phrases":["Example: So, are you suggesting that ...?","What makes you think that?","How would that work in practice?","What do you think, …?"]},
                        {"label":"Giving opinions / suggesting solutions and justifying choices","phrases":["Example: So far, we’ve discussed ... How about we think about ...?","I’d go for … because …","The main advantage of … is that …","Could we combine … and …?"]}
                      ]
                    }
                  ]
                },
                {
                  label: "Sources",
                  blocks: [
                    {
                      type: "language",
                      title: "3) Referring to sources in academic discussions",
                      groups: [
                        {"label":"Mentioning authors to introduce facts, arguments, or opinions","phrases":["[Author] mentions that …","[Author] talks about …"]},
                        {"label":"Agreeing or supporting authors","phrases":["I agree with what [Author] said about …"]},
                        {"label":"Questioning authors","phrases":["I’m not sure I agree with [Author] that ..."]},
                        {"label":"Introducing authors’ ideas or concepts","phrases":["[Author] brings up a good example of …"]}
                      ]
                    }
                  ]
                }
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Match each skill to a new phrase. Then read the phrases to your partner with good intonation."},
            {
              type: "match",
              id: "c2-match",
              title: "Which skill is it?",
              left: ["Start the discussion","Introduce ideas","Take the floor politely","Build on others’ ideas","Ask for justification","Suggest a solution and justify it"],
              right: [
                "To start us off, I’d say the key question is how many visitors an area can take.",
                "There’s evidence from Spenceley and Rylance which indicates that tourism can fund conservation.",
                "If I might add here — certifications are only useful if someone checks them.",
                "Following on from Kenji’s point about visitor numbers, I think timing matters too.",
                "Why do you think that option would work better?",
                "How about combining certification incentives with visitor limits? That would protect the most fragile places."
              ]
            },
            {
              type: "fields",
              title: "What other expressions do you remember? Write down the expressions you would like to practise today.",
              fields: [
                {"id":"c2-disc","label":"1) Discussion skills (start · introduce ideas · take the floor)","rows":2},
                {"id":"c2-neg","label":"2) Negotiation skills (build on · ask · suggest and justify)","rows":2},
                {"id":"c2-src","label":"3) Referring to sources","rows":2}
              ]
            }
          ]
        },
        {
          id: "c3",
          short: "Negotiate",
          minutes: 20,
          grouping: "Groups of 4",
          art: "dec10/assets/week4/v/v-d10w4d5-c3.svg",
          title: "Negotiation task",
          goal: "Negotiate in your group: which strategy would be best to improve the balance between tourism and sustainability?",
          blocks: [
            {
              type: "key",
              title: "Which of the strategies below would be best to improve the balance between tourism and sustainability?",
              numbered: true,
              points: [
                "Provide government incentives and subsidies to tourism operators that achieve sustainable tourism certifications.",
                "Restrict numbers of visitors to vulnerable areas.",
                "Provide government rebates to tourists who meet travel sustainability targets."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-negotiation-map.svg",
              size: "wide",
              alt: "A negotiation table seen from above with three option cards: 1 Incentives for certified operators, 2 Limit visitors to vulnerable areas, 3 Rebates for sustainable tourists. Speech bubbles from four seats point to the cards, and a balance in the middle weighs tourism against sustainability.",
              caption: "Evaluate <b>each</b> option. You don’t have to agree — but you must <b>negotiate</b>."
            },
            {
              type: "steps",
              title: "For this negotiation task, you should:",
              items: [
                {"who":"group","text":"All participate equally."},
                {"who":"group","text":"Evaluate each option."},
                {"who":"group","text":"Consider which would be the best option BUT note that you do not necessarily have to reach a consensus. The focus is more on the discussion than reaching an agreement."},
                {"who":"group","text":"Use appropriate academic discussion skills and language to negotiate towards a final consensus."},
                {"who":"group","text":"Keep the discussion going for 10 minutes."}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"<b>Prepare (4 min).</b> Choose your first choice. Think of one reason for it, one idea from a source, and one problem with another option."},
            {
              type: "cards",
              title: "My first choice (before we talk)",
              pick: "c3-pick",
              items: [
                {"label":"① Incentives for certified operators","text":"Reward tourism operators that achieve sustainable tourism certifications.","icon":"flag"},
                {"label":"② Restrict visitor numbers","text":"Limit visitors to vulnerable areas.","icon":"users"},
                {"label":"③ Rebates for tourists","text":"Give money back to tourists who meet travel sustainability targets.","icon":"link"}
              ]
            },
            {"type":"sources","ids":["ecosdg","bluewash"]},
            {
              type: "fields",
              fields: [
                {"id":"c3-why","label":"My reason","placeholder":"I’d go for … because …","rows":2},
                {"id":"c3-src","label":"My idea from a source","placeholder":"Mielly (2023) mentions that … / Spenceley and Rylance (2021) talk about …","rows":2},
                {"id":"c3-prob","label":"One problem with another option","placeholder":"I’m not sure option … would work, because …","rows":2}
              ]
            },
            {"type":"do","n":2,"who":"group","text":"Spin your <b>secret skill card</b>. Use that skill at least twice in the negotiation. Don’t tell the others — they guess at the end!"},
            {
              type: "spinner",
              id: "c3-spin",
              title: "Your secret skill card",
              reels: [
                {"label":"Skill","items":["Start the discussion","Introduce an idea from a source","Take the floor politely","Build on someone’s idea","Ask for clarification","Ask someone to justify their choice","Suggest a compromise"]},
                {"label":"Source","items":["Spenceley and Rylance (2021)","Mielly (2023)","Alom (2023) · BBC podcast","Sample essay 4.1 or 4.2"]}
              ],
              note: "Spin, keep it secret, and use it twice."
            },
            {
              type: "chat",
              title: "How a negotiation can sound (the start)",
              lines: [
                ["Sara","<mark>Ok, we’ve decided to talk about</mark> the best way to balance tourism and sustainability. Shall we look at each option first?"],
                ["Kenji","I’d go for option one. <mark>Spenceley and Rylance talk about</mark> companies that fund clinics and conservation, so rewarding good operators could encourage more of that."],
                ["Lina","<mark>Sorry to jump in, but</mark> can we trust certifications? <mark>Mielly mentions that</mark> lax reporting and a lack of enforcement have let firms use bluewashing."],
                ["Tom","<mark>Building on what you said before</mark>, Lina, that’s why I prefer option two. Limiting visitors protects vulnerable areas directly."],
                ["Kenji","<mark>So, are you suggesting that</mark> option one is useless?"],
                ["Tom","Not useless — but weaker on its own. <mark>So far, we’ve discussed</mark> options one and two. <mark>How about we think about</mark> option three?"]
              ]
            },
            {
              type: "language",
              title: "Go further: language to reach (or not reach) agreement",
              groups: [
                {"label":"Find common ground","phrases":["It seems we all agree that …","We both want …, so maybe …"]},
                {"label":"Concede a point","phrases":["I take your point about …, but …","That’s fair. I hadn’t thought of …","You may be right that …, however …"]},
                {"label":"Compromise","phrases":["What if we combined … and …?","Could we agree on … as a first step?","Let’s meet halfway: …"]},
                {"label":"Agree to disagree","phrases":["I think we see this differently, and that’s OK.","We haven’t reached a consensus, but most of us prefer …"]}
              ]
            },
            {"type":"do","n":3,"who":"group","text":"<b>Negotiate for 10 minutes.</b> Use a timer. At the end, guess each person’s secret skill. Tell the class: did you reach a consensus? Which option, and why?"}
          ]
        },
        {
          id: "c4",
          short: "Reflect",
          minutes: 15,
          grouping: "Alone → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-c4.svg",
          title: "Reflection",
          goal: "Think about how well you interacted — and plan what to practise next time.",
          blocks: [
            {
              type: "key",
              title: "Interactive Discussion Task rubric · Interaction & Engagement",
              points: ["“... effectively interacts and engages in discussions with others’ contributions; occasional lapses in using turn-taking.”"]
            },
            {
              type: "scale",
              id: "c4-scale",
              statement: "Today I <b>effectively interacted and engaged</b> with others’ contributions.",
              ends: ["Not yet","Very effectively"]
            },
            {
              type: "fields",
              title: "Now answer these reflection questions",
              fields: [
                {"id":"c4-q1","label":"1. To what extent do you think you effectively interacted and engaged in the discussion?","rows":2},
                {"id":"c4-q2","label":"2. Which specific discussion skills and language did you use to help you interact effectively?","rows":2},
                {"id":"c4-q3","label":"3. Which specific discussion skills and language would you like to use more in your future discussions?","rows":2},
                {"id":"c4-q4","label":"4. To what extent do you think you used turn-taking skills and language?","rows":2},
                {"id":"c4-q5","label":"5. Which specific turn-taking skills and language did you use?","rows":2},
                {"id":"c4-q6","label":"6. Which specific turn-taking skills and language would you like to use more in your future discussions?","rows":2}
              ]
            },
            {
              type: "language",
              title: "Useful language: turn-taking",
              groups: [
                {"label":"Take a turn","phrases":["Can I just say …","Could I add something to that?"]},
                {"label":"Give a turn","phrases":["What do you think, …?","…, we haven’t heard from you yet."]},
                {"label":"Keep your turn","phrases":["Just let me finish this point …","If I could just finish …"]}
              ]
            },
            {"type":"do","n":1,"who":"class","text":"Report back: tell the class <b>one</b> thing you did well and <b>one</b> skill you will use more next time."},
            {"type":"tip","text":"<b>After class:</b> remember to keep doing research for your Interactive Presentations."}
          ]
        }
      ]
    },
    {
      id: "star",
      number: "04",
      code: "18A",
      minutes: 30,
      tone: "amber",
      art: "dec10/assets/week4/s-d5-star.svg",
      title: "STAR© moment",
      subtitle: "End of Week 4: your questions, your needs",
      outcome: "You have actively participated with your teacher in addressing your learning needs.",
      activities: [
        {
          id: "d0",
          short: "Spin & share",
          minutes: 8,
          grouping: "Pairs → Class",
          art: "dec10/assets/week4/v/v-d10w4d1-b1.svg",
          title: "Spin and share · Ask the teacher",
          goal: "Get to know your partner a little better — then ask your teacher a question about life outside class.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"<b>Spin and share (5 minutes).</b> Work with someone you don’t usually sit with. Spin the reels and talk about the topic for <b>30 seconds</b>. Start with the phrase on the second reel. Your partner asks <b>one follow-up question</b>. Then swap. Two or three spins each."},
            {
              type: "spinner",
              id: "d0-spin",
              title: "Spin and share",
              text: "No right or wrong answers. Don’t like your topic? Spin again — that’s OK.",
              note: "Spin, talk for 30 seconds, then your partner asks one question.",
              reels: [
                {"label":"Talk about","items":["A food from home that you miss","A place you want to visit one day","A skill you are proud of","The best moment of your week so far","Something that always makes you laugh","A hobby you want to try in Australia","A song or film you love right now","A small thing that makes a good day"]},
                {"label":"Start with","items":["One thing I love is …","I’ve always wanted to …","I’m quite proud that …","To be honest, …"]}
              ]
            },
            {"type":"do","n":2,"who":"class","text":"<b>Ask the teacher (3 minutes).</b> With your partner, write <b>one question</b> for your teacher about life outside class (not about the course!). Your teacher chooses 3–4 questions and answers them. Your teacher can say “Pass” too!"},
            {
              type: "cards",
              title: "Need an idea? Ask your teacher about …",
              items: [
                {"label":"Studies","text":"What was your favourite subject at school?","icon":"book"},
                {"label":"Travel","text":"What is the best place you have ever visited?","icon":"map"},
                {"label":"Food","text":"What is your favourite dish to cook?","icon":"sprout"},
                {"label":"Free time","text":"What do you like doing at the weekend?","icon":"smile"}
              ]
            },
            {"type":"fields","fields":[{"id":"d0-q","label":"Our question for the teacher","placeholder":"What is the best place you have ever visited?","rows":1}]},
            {
              type: "language",
              title: "Language bank",
              groups: [
                {"label":"Ask a follow-up question","phrases":["Really? <b>Tell me more about</b> …","<b>What do you like most about</b> …?","How did you learn to …?"]},
                {"label":"Show interest","phrases":["That sounds amazing!","I didn’t know that!","Really? Me too!"]}
              ]
            },
            {"type":"tip","text":"<b>Keep it light:</b> food, places, hobbies, music, films, sport. Not happy to answer? Just say <b>“Pass”</b> — that’s fine for students and for the teacher."}
          ]
        },
        {
          id: "d1",
          short: "What is it?",
          minutes: 3,
          grouping: "Class",
          art: "dec10/assets/week4/v/v-d10w4d5-d1.svg",
          title: "What are Teachable STAR Moments?",
          goal: "This time is for you.",
          blocks: [
            {
              type: "key",
              title: "Teachable STAR moments",
              points: [
                "STAR moments are a key part of the DEC curriculum. They can last from an hour to a whole class.",
                "They (a) tackle something that <b>most students need help with</b> at the moment, and (b) show how lessons apply directly to <b>your own</b> writing or learning challenges.",
                "A STAR moment isn’t just any off-topic discussion. It is <b>chosen to meet your learning needs</b>.",
                "You can and should <b>talk to your teacher</b> about what you’re struggling with and about your own learning needs."
              ]
            }
          ]
        },
        {
          id: "d2",
          short: "My needs",
          minutes: 7,
          grouping: "Alone",
          art: "dec10/assets/week4/v/v-d10w4d5-d2.svg",
          title: "Reflect on your learning needs",
          goal: "What went well in Week 4? What do you still need help with?",
          blocks: [
            {
              type: "grid",
              id: "d2-grid",
              title: "Week 4: Eco-tourism",
              rows: [
                "Reading to write: understanding and using Spenceley and Rylance (2021)",
                "Listening to write: taking notes on the BBC podcast",
                "Mediation: comparing sources (Mielly, 2023)",
                "Nominalisation",
                "Citing sources and my own voice",
                "Integrated writing: planning and writing my essay",
                "Group work: goals, plans, progress and challenges",
                "Writing and refining AI prompts (iterative interaction)",
                "Negotiating in an Interactive Discussion"
              ],
              columns: ["How do I feel?"],
              options: ["I’m confident","Getting there","I need help"]
            },
            {
              type: "fields",
              fields: [
                {"id":"d2-needs","label":"My top two learning needs","placeholder":"1. … 2. …","rows":2},
                {"id":"d2-q","label":"A question I want to ask my teacher","placeholder":"I’m still not sure how to …","rows":2}
              ]
            }
          ]
        },
        {
          id: "d3",
          short: "Ask",
          minutes: 7,
          grouping: "Pair → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-d3.svg",
          title: "Talk to your teacher",
          goal: "Ask clearly — and get the help you need.",
          blocks: [
            {
              type: "language",
              title: "Ask your teacher for help",
              groups: [
                {"label":"Ask to explain","phrases":["Could you <b>explain</b> … <b>again</b>, please?","What’s the <b>difference between</b> … and …?","Could you give us <b>an example of</b> …?"]},
                {"label":"Say what is hard","phrases":["I’m <b>not sure how to</b> …","I <b>get confused when</b> …","I <b>understand</b> …, <b>but not</b> …"]},
                {"label":"Ask for practice","phrases":["Could we have <b>more practice with</b> …?","Could you <b>check</b> my …?","Is it OK if we <b>go over</b> …?"]}
              ]
            },
            {
              type: "chat",
              title: "A good request",
              right: "Student",
              lines: [
                ["Teacher","So, what would you like to work on today?"],
                ["Student","I <mark>understand</mark> nominalisation in the examples, <mark>but not</mark> how to use it in my own essay."],
                ["Teacher","Good question. Can you show me one sentence you wrote?"],
                ["Student","“Companies develop resorts and this harms communities.”"],
                ["Teacher","Try making the verb a noun: “<b>The development of</b> resorts can harm local communities.”"],
                ["Student","Oh, I see. <mark>Could we have more practice with</mark> that?"]
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Practise your question with a partner. Make it <b>specific</b>: say what you understand and what you don’t."},
            {
              type: "cards",
              title: "Class vote: what should we practise now?",
              pick: "d3-vote",
              items: [
                {"label":"Integrated writing","text":"planning, paraphrasing, citing","icon":"pen"},
                {"label":"Nominalisation","text":"verbs → nouns in academic style","icon":"link"},
                {"label":"Discussion","text":"negotiating and referring to sources","icon":"chat"},
                {"label":"AI prompts","text":"refining and checking output","icon":"search"}
              ]
            },
            {"type":"do","n":2,"who":"class","text":"Tell your teacher your vote and your question. Your teacher will use them for the rest of the STAR moment."}
          ]
        },
        {
          id: "d4",
          short: "Review game",
          minutes: 3,
          grouping: "Teams",
          art: "dec10/assets/week4/v/v-d10w4d5-d4.svg",
          title: "Week 4 review game",
          goal: "Play in teams. What do you remember from this week?",
          blocks: [
            {"type":"do","n":1,"who":"class","text":"Play in teams. Choose a box, read the clue and answer <b>as a question</b> (“What is …?”). The teacher gives the points. <b>Quick round:</b> each team chooses <b>one</b> box."},
            {
              type: "jeopardy",
              id: "d4-jp",
              title: "Week 4 Jeopardy: Eco-tourism",
              teams: 4,
              seconds: 25,
              cols: [
                {
                  title: "The SDG reading",
                  clues: [
                    {"pts":100,"clue":"The number of Sustainable Development Goals agreed in 2015.","answer":"What is 17?"},
                    {"pts":200,"clue":"The three goals where tourism is included in the targets (Spenceley and Rylance, 2021).","answer":"What are Goals 8, 12 and 14?"},
                    {"pts":300,"clue":"The theme of the IUCN 2014 World Parks Congress in Sydney.","answer":"What is “Healthy Parks Healthy People”?"}
                  ]
                },
                {
                  title: "Bluewashing",
                  clues: [
                    {"pts":100,"clue":"When companies hide behind unclear terms like “sustainable” to pursue their own interests.","answer":"What is bluewashing?"},
                    {"pts":200,"clue":"The indigenous community in Maricá, Brazil, in Mielly (2023).","answer":"Who are the Mbyá Guaraní?"},
                    {"pts":300,"clue":"The ILO agreement that requires at least a dialogue with indigenous communities.","answer":"What is C169?"}
                  ]
                },
                {
                  title: "Group work",
                  clues: [
                    {"pts":100,"clue":"Finish Student B’s phrase: “Let’s set some ___ now.”","answer":"What are deadlines?"},
                    {"pts":200,"clue":"Finish Student A’s phrase: “I wanted to check in and see how everything is ___ with …”","answer":"What is “going”?"},
                    {"pts":300,"clue":"Finish: “If we …, then that should ___ …”","answer":"What is “prevent”?"}
                  ]
                },
                {
                  title: "AI prompts",
                  clues: [
                    {"pts":100,"clue":"The four key elements of a good prompt.","answer":"What are role, task, requirements and instructions?"},
                    {"pts":200,"clue":"A series of back-and-forth exchanges with AI, like a conversation, instead of one single prompt.","answer":"What is iterative interaction?"},
                    {"pts":300,"clue":"The four steps of refining: formulate, consider, enhance and …","answer":"What is repeat?"}
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "d5",
          short: "Wrap-up",
          minutes: 2,
          grouping: "Alone",
          art: "dec10/assets/week4/v/v-d10w4d5-d5.svg",
          title: "Week 4 check: 3-2-1",
          goal: "Look back at the week — and get ready for Week 5.",
          blocks: [
            {
              type: "fields",
              fields: [
                {"id":"d5-3","label":"3 things I learned this week","rows":3},
                {"id":"d5-2","label":"2 useful phrases I will use again","placeholder":"We’ve made some significant progress. · Building on what you said before, …","rows":2},
                {"id":"d5-1","label":"1 question I still have","rows":2}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Tell a partner your <b>3-2-1</b> in one minute."},
            {
              type: "checklist",
              id: "d5-check",
              title: "Ready for Week 5?",
              meter: ["ticked","Ready for Week 5!"],
              items: [
                "I know our group’s next steps from the check-in.",
                "I will keep doing research for our Interactive Presentation.",
                "I saved my conversation log from Cogniti.",
                "I told my teacher my top learning need."
              ]
            }
          ]
        }
      ]
    }
  ],
  extras: [
    {
      id: "x1",
      short: "Group message",
      minutes: 10,
      grouping: "Alone",
      art: "dec10/assets/week4/v/v-d10w4d5-x1.svg",
      title: "After the check-in: confirm it in writing",
      goal: "Write a short group-chat message that confirms your group’s next steps.",
      blocks: [
        {"type":"do","n":1,"who":"alone","text":"Write the message you will send to your group after today’s check-in. Include your <b>progress</b>, <b>who does what</b>, a <b>deadline</b> and the <b>next meeting</b>. The lights turn on as you use each part."},
        {
          type: "detect",
          id: "x1-msg",
          title: "Our group chat",
          label: "Message writer",
          checks: [
            {"label":"Greeting + thanks","color":"#2f7d6b","any":["hi ","hello","thanks","thank you"]},
            {"label":"Progress","color":"#3a58a0","any":["progress","so far","on track","we’ve finished","we've finished","we haven’t","we haven't"]},
            {"label":"Who does what","color":"#8a4f9e","any":["will take on","could handle","will work on","is responsible for","will do","will look after","/\\b(i|you|he|she|[A-Z][a-z]+)\\s*('ll| will)\\b/"]},
            {"label":"A deadline","color":"#c4562f","any":["by next","by monday","by tuesday","by wednesday","by thursday","by friday","deadline"]},
            {"label":"Next meeting","color":"#b07d12","any":["next meeting","meet on","see you on","schedule","check-in","check in","let’s meet","let's meet"]}
          ],
          items: [
            {
              task: "A message to your group",
              rows: 6,
              placeholder: "Hi everyone, thanks for today’s check-in! Just to confirm …",
              model: "Hi everyone, thanks for today’s check-in! So far we’ve made some significant progress. Just to confirm our next steps: Kenji will finish the case study notes and Sara will work on the statistics, both by next Wednesday. I’ll draft the introduction. One of our main concerns is the timeline, so let’s keep each other updated here. Our next meeting is on Friday at 6 pm on Zoom. Let me know if I missed anything."
            }
          ]
        },
        {
          type: "language",
          title: "Useful language: online group messages",
          groups: [
            {"label":"Open","phrases":["Hi everyone, thanks for today’s meeting!","Just a quick update on …"]},
            {"label":"Confirm","phrases":["Just to confirm: …","As we agreed, …","Here is our plan: …"]},
            {"label":"Close","phrases":["Let me know if I missed anything.","Please reply 👍 when you’ve read this.","See you on …!"]}
          ]
        }
      ]
    },
    {
      id: "x2",
      short: "AI + integrity",
      minutes: 8,
      grouping: "Alone",
      art: "dec10/assets/week4/v/v-d10w4d5-x2.svg",
      title: "Using AI with academic integrity",
      goal: "Decide when AI supports your learning — and when it replaces it.",
      blocks: [
        {
          type: "key",
          title: "Do the right thing",
          policy: true,
          points: [
            "Acting with academic integrity means doing the ‘right thing’ even when a shortcut seems easier.",
            "You must <b>acknowledge</b> where other people <b>or tools</b> have contributed to your work.",
            "Rules can be different for each task. <b>Always check</b> what is allowed — ask your teacher if you are not sure."
          ]
        },
        {
          type: "sort",
          id: "x2-sort",
          title: "Support or replace?",
          buckets: [
            {"label":"Supports my learning","text":"I still do the thinking and the writing","letter":"✓"},
            {"label":"Replaces my learning","text":"Not my own work — a risk to integrity","letter":"✗"}
          ],
          items: [
            {"text":"Asking AI to explain a difficult word from the bluewashing article.","answer":0},
            {"text":"Asking AI follow-up questions to understand eco-certifications better.","answer":0},
            {"text":"Asking AI to write my Integrated Writing essay, then handing it in.","answer":1,"why":"The essay is not your own work."},
            {"text":"Practising for the Interactive Discussion by asking AI to argue against my ideas.","answer":0},
            {"text":"Copying an AI paragraph into my essay without saying I used AI.","answer":1,"why":"You must acknowledge the tool — and check what the task allows."},
            {"text":"Using a reference the AI gave me without checking that it is real.","answer":1,"why":"AI can invent sources."}
          ]
        }
      ]
    }
  ],
  glossary: [
    ["transactional listening","listening in a conversation that must get something done, e.g. agree a plan","In transactional listening, you check and confirm every decision."],
    ["plan of action","a list of tasks, who does them and by when","Our plan of action has four tasks and two deadlines."],
    ["deadline","the time or day by which something must be finished","How about we finish our notes by next Tuesday?"],
    ["check in","to talk to someone to see how something is going","I wanted to check in and see how everything is going."],
    ["potential risk","a problem that might happen in the future","One potential risk is that a member gets sick."],
    ["prompt","the words you type into an AI tool to tell it what to do","A specific prompt gives a better result."],
    ["refine","to make something better by changing small parts","Refine your prompt after you check the output."],
    ["output","what an AI tool gives back to you","Always check the output against the original text."],
    ["constraint","a limit or rule, e.g. a word limit or “use only this text”","Add a constraint: no more than 120 words."],
    ["iterate","to repeat a process to improve it each time","Iterate: try, check and improve the prompt."],
    ["bluewashing","using unclear words like “sustainable” to look responsible without really being responsible","Mielly (2023) describes bluewashing by multinationals."],
    ["consensus","an agreement that everyone in a group accepts","You do not necessarily have to reach a consensus."],
    ["compromise","an agreement where each side gives up a little","What if we combined options one and three as a compromise?"],
    ["concede","to accept that another person’s point is true","I concede that certification alone may not be enough."],
    ["iterative interaction","a series of back-and-forth exchanges with AI, where each question builds on the last answer","Iterative interaction helped us explore the topic step by step."],
    ["stakeholder","a person or group affected by a decision","Local communities and tour operators are both stakeholders."],
    ["certification","an official document or label that shows something meets a standard","Sustainability certifications can be hard to check."],
    ["incentive / subsidy","money or help from the government to encourage an action","Incentives could reward certified operators."],
    ["rebate","money that is paid back to you","Tourists could get a rebate for low-carbon travel."],
    ["on track","making the progress you planned","Do you think you are on track with your research?"]
  ]
};
