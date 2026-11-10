/* DEC10 · Week 4 · Day 5 (Friday) — Plan, prompt, negotiate.
   Built from the Week 4 Teacher's Book (W4 D5. 15A, 16A, 17A, 18A) and the Week 4 student booklet (15D role cards, used exactly),
   ordered and timed by the revised weekly map. Taught on FRIDAY: 15A AST: Group work skills (60) · 16A AST: Digital literacy
   and AI: Using & refining prompts (90) · 17A Interactive Discussion: Discussion and negotiation (60) · 18A STAR© moment (30).
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
  journey: "Check in with your feelings and needs, listen to a group plan its project and check its progress, then run your own group check-in. Next, play a prompt game and use iterative interaction with Cogniti to research ecotourism. After lunch, look back at your views on ecotourism and negotiate the best way to balance tourism and sustainability. A STAR moment closes the week.",
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
      subtitle: "Prompt, analyse, follow up: iterative interaction with Cogniti",
      outcome: "You use Cogniti to practise your prompting skills on a specific topic, apply the ‘iterative interaction’ prompting process in a task, and compare it with writing one single prompt.",
      activities: [
        {
          id: "b1",
          short: "Game",
          minutes: 20,
          grouping: "Teams",
          art: "dec10/assets/week4/v/v-d10w4d5-b1.svg",
          title: "Homework follow-up discussion",
          goal: "Play a team game to check what you remember from the Week 3 homework module on using prompts.",
          blocks: [
            {"type":"do","n":1,"who":"class","text":"Make teams. Teams take turns to choose a question from the board. Answer correctly to win the points. The team with the most points wins!"},
            {
              type: "jeopardy",
              id: "b1-jp",
              title: "Using prompts: the Week 3 homework game",
              teams: 3,
              seconds: 30,
              cols: [
                {
                  title: "Prompts",
                  clues: [
                    {"pts":100,"clue":"What is a prompt and why is it important?","answer":"A word, phrase, question, or keyword entered into AI tools to generate results. It is the instruction that users provide for the AI model to respond to."},
                    {"pts":200,"clue":"What makes a good prompt?","answer":"It sets the topic and provides clear instructions on the task. It is clear and specific, so the AI understands the user’s requirements and can generate accurate and relevant results."},
                    {"pts":300,"clue":"Why is it important to write specific prompts?","answer":"Vague or ambiguous prompts can lead to incorrect or irrelevant outputs, as the AI makes assumptions. The quality of the output relies on the specificity and clarity of the prompt."},
                    {"pts":400,"clue":"What steps are suggested in refining prompts?","answer":"Trial and error: formulate a relevant prompt, consider when completions don’t meet expectations, enhance the clarity of the prompt, and repeat the process."}
                  ]
                },
                {
                  title: "Prompt elements",
                  clues: [
                    {"pts":100,"clue":"Setting a specific ______ in a prompt is crucial as it guides the AI to respond within a certain framework or expertise.","answer":"Role"},
                    {"pts":200,"clue":"The ______ in a prompt summarizes what the AI is expected to do.","answer":"Task"},
                    {"pts":300,"clue":"Clear ______ in a prompt are crucial to provide detailed information to the AI, limiting the need for it to make assumptions.","answer":"Requirements"},
                    {"pts":400,"clue":"______ in a prompt inform the AI on how to complete the task.","answer":"Instructions"}
                  ]
                },
                {
                  title: "Cogniti",
                  clues: [
                    {"pts":100,"clue":"What is Cogniti?","answer":"A special AI tool designed by the University of Sydney for teachers to help their students in specific ways."},
                    {"pts":200,"clue":"Do you need your Unikey and password to access Cogniti?","answer":"YES!"},
                    {"pts":300,"clue":"What are some benefits of Cogniti?","answer":"Personalised help, extra resources, 24/7 support, fair access, safe and private."},
                    {"pts":400,"clue":"Name a Cogniti agent that can be used for your DEC studies.","answer":"Study Skills Tutor · Exam Preparation Agent · Writing Coach (also Vanilla GPT-4)."}
                  ]
                },
                {
                  title: "Copilot & more",
                  clues: [
                    {"pts":100,"clue":"What does the Vanilla GPT-4 agent do?","answer":"It is ChatGPT-4, offered for free to university students, providing general help across various subjects."},
                    {"pts":200,"clue":"How can you log into Microsoft Copilot?","answer":"By logging into your university email."},
                    {"pts":300,"clue":"Name one benefit of Copilot with data protection.","answer":"Searches are not linked to individual user accounts · prompts and responses are not saved · no one at Microsoft can view your data."},
                    {"pts":400,"clue":"Which Cogniti agent helps with an essay introduction and gives examples?","answer":"Writing Coach."}
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Useful language: playing as a team",
              groups: [
                {"label":"Choose","phrases":["We’ll take Prompt elements for 300, please.","Let’s go for Cogniti for 200."]},
                {"label":"Agree on an answer","phrases":["I’m fairly sure it’s …","What do you think — should we say …?","Let’s go with …, then."]},
                {"label":"Explain","phrases":["It’s important because …","In other words, …"]}
              ]
            }
          ]
        },
        {
          id: "b2",
          short: "Prompting",
          minutes: 12,
          grouping: "Pairs → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-b2.svg",
          title: "Activity 1: Prompting",
          goal: "Draft a prompt with a partner to get initial ideas for a research task on ecotourism.",
          blocks: [
            {
              type: "key",
              title: "Your research task",
              points: [
                "This week you have been learning about ecotourism. Imagine that your teacher sets you this research task:",
                "<b>What is the role of sustainability certifications in eco-tourism. Are they effective?</b>",
                "You will use <b>Cogniti Vanilla</b> to get started (same capabilities as Chat GPT-4)."
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d5-prompt-anatomy.svg",
              alt: "A prompt card cut into four coloured strips: Role, Task, Requirements and Instructions, each with an example about sustainability certifications in ecotourism. On the side, two tags: Context and Format.",
              hint: "Tap each part of the prompt for an example idea.",
              spots: [
                {"x":12,"y":22,"label":"R","title":"Role","text":"e.g. “Act as a university researcher in sustainable tourism.” The role guides the AI to answer within a certain expertise.","color":"#2f7d6b"},
                {"x":12,"y":42,"label":"T","title":"Task","text":"e.g. “Help me brainstorm initial ideas about the role of sustainability certifications in eco-tourism.”","color":"#3a58a0"},
                {"x":12,"y":62,"label":"Q","title":"Requirements","text":"e.g. “I am a pre-university student. Use clear English. Include ideas for and against their effectiveness.”","color":"#8a4f9e"},
                {"x":12,"y":82,"label":"I","title":"Instructions","text":"e.g. “Give the ideas as a mind map in bullet points, then suggest three questions I could research next.”","color":"#c4562f"},
                {"x":88,"y":35,"label":"+","title":"Context","text":"Who you are and why you need it: “I am preparing for a research task in my academic English course.”","color":"#b07d12"},
                {"x":88,"y":65,"label":"+","title":"Format","text":"How it should look: bullet points, a table, a mind map, a list of questions.","color":"#2d7a9a"}
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"pair","text":"In pairs, spend <b>five minutes</b> drafting a prompt to start you on this topic. You want to get <b>initial ideas</b> (like a brainstorm)."},
                {"who":"pair","text":"Remember to include <b>Role, Task, Requirements, and Instruction</b> in your prompt."},
                {"who":"pair","text":"Once your prompt is ready, share it in the collaborative document (or on the class wall)."},
                {"who":"class","text":"As a class, choose one prompt (the one that addresses Role, Task, Requirements, and Instruction best) for your teacher to use."},
                {"who":"class","text":"Read the output given by the AI."}
              ]
            },
            {
              type: "promptbuilder",
              id: "b2-pb",
              title: "Draft your brainstorm prompt",
              tryUrl: "https://app.cogniti.ai/",
              tryLabel: "Open Cogniti",
              parts: [
                {"key":"role","label":"Role","lead":"Act as","placeholder":"a university researcher in sustainable tourism","chips":["a university researcher in sustainable tourism","an expert in ecotourism certification","a friendly academic tutor"]},
                {"key":"task","label":"Task","lead":"Your task is to","placeholder":"help me brainstorm initial ideas on the role of sustainability certifications in eco-tourism and whether they are effective","chips":["help me brainstorm initial ideas on the role of sustainability certifications in eco-tourism","list arguments for and against the effectiveness of eco-certifications","explain what a sustainability certification is"]},
                {"key":"req","label":"Requirements","lead":"Requirements:","placeholder":"I am a pre-university student. Use clear academic English. Include both sides.","chips":["I am a pre-university student in an academic English course","use clear, simple academic English","include ideas for and against","no more than 250 words"]},
                {"key":"instr","label":"Instructions","lead":"Instructions:","placeholder":"Give the ideas in bullet points under headings, then suggest three research questions.","chips":["organise the ideas in bullet points under 3–4 headings","give one real example for each heading","finish with three questions I could research next"]}
              ]
            },
            {
              type: "language",
              title: "Useful language: choosing the best prompt as a class",
              groups: [
                {"label":"Evaluate","phrases":["This prompt has a clear role, but the task is quite vague.","I like this one because the instructions are very specific.","This one is missing the requirements."]},
                {"label":"Choose","phrases":["I’d vote for number … because …","If we combine … with …, it would be even better."]}
              ]
            }
          ]
        },
        {
          id: "b3",
          short: "Analyse",
          minutes: 10,
          grouping: "Class",
          art: "dec10/assets/week4/v/v-d10w4d5-b3.svg",
          title: "Activity 2: Analysing response",
          goal: "Read the AI’s first response critically. Is it good? How could the prompt be better?",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d5-output-check.svg",
              alt: "A magnifying glass over an AI answer. Around it are six check tags: Accurate? Relevant? Specific? Real sources? Right level? Fair and balanced?",
              caption: "Six questions to ask about every AI answer."
            },
            {"type":"do","n":1,"who":"alone","text":"Spend a few minutes reading the initial response you got. Rate it with the six checks."},
            {
              type: "form",
              id: "b3-form",
              title: "Is it a good response?",
              intro: "Rate the AI’s first response to the class prompt.",
              scale: ["Yes","Partly","No"],
              cols: ["Example from the response"],
              sections: [
                {
                  label: "The six checks",
                  items: [
                    "Accurate — is the information correct?",
                    "Relevant — does it answer OUR question about certifications?",
                    "Specific — does it give examples, not just general ideas?",
                    "Real sources — can you check where the ideas come from?",
                    "Right level — is it easy enough to understand?",
                    "Fair and balanced — does it show both sides (effective / not effective)?"
                  ]
                }
              ]
            },
            {
              type: "talk",
              title: "Discuss as a class",
              prompts: [
                "Is it a good response? Why / why not?",
                "What changes would the prompt need to generate a more effective response?",
                "What did the AI have to <b>guess</b> because the prompt did not say it?"
              ]
            },
            {
              type: "language",
              title: "Useful language: talking about AI output",
              groups: [
                {"label":"It works","phrases":["The output is relevant to our task.","It gives a clear, specific example of …","It covers both sides of the question."]},
                {"label":"It doesn’t work","phrases":["This is too general to be useful.","This claim is not supported by any source.","It overgeneralises — “always” is too strong."]},
                {"label":"Change the prompt","phrases":["The prompt needs a clearer task: …","We should add a requirement: …","We could ask it to focus only on …"]}
              ]
            }
          ]
        },
        {
          id: "b4",
          short: "Iterate",
          minutes: 13,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-b4.svg",
          title: "Activity 3: Iterative interaction",
          goal: "Learn the iterative process: use the AI’s answer to refine your next question.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d5-refine-loop.svg",
              size: "wide",
              alt: "The iterative process of prompting: Craft prompt, then Analyse response and review prompt, then Use output. A big arrow loops back from Analyse response to Craft prompt.",
              caption: "Based on the output you get from AI, you <b>refine your prompt</b> to improve the output."
            },
            {
              type: "key",
              title: "What is iterative interaction?",
              points: [
                "A process of communication with a series of <b>back-and-forth exchanges</b>, rather than asking all your questions at once or expecting a complete answer in a single response.",
                "<b>It’s similar to having a conversation</b>: you ask a question, listen to the answer, and then <b>ask a follow-up question based on the response you received</b>.",
                "This helps you dig deeper into a topic and clarify any doubts step by step."
              ]
            },
            {
              type: "flip",
              title: "Why use iterative interaction?",
              hint: "Turn each card over.",
              items: [
                {"front":"Complex topics","back":"Some topics have many layers. You explore them one at a time, so you understand each part before moving on."},
                {"front":"Clarification","back":"If something isn’t clear, a follow-up question clears up the misunderstanding — very helpful when you learn in a new language."},
                {"front":"Depth of understanding","back":"Each round gives you more detail — like peeling an onion: each layer gives you more insight."}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-onion.svg",
              alt: "An onion cut in half with four layers. Outer layer: What is eco-tourism? Next: How is sustainability in eco-tourism evaluated? Next: Are certifications effective? Core: My own informed view.",
              caption: "Each follow-up question takes you one layer deeper."
            },
            {"type":"do","n":1,"who":"pair","text":"How do you implement iterative interaction? Put the four steps in order. Then explain them to your partner without looking."},
            {
              type: "order",
              id: "b4-order",
              title: "How to implement iterative interaction",
              items: [
                "Start simple: begin with a basic question, e.g. “What is eco-tourism?”",
                "Evaluate the response: what is clear, and what needs more explanation?",
                "Ask follow-up questions: e.g. “Can you explain how sustainability in eco-tourism is evaluated?”",
                "Repeat as needed: keep asking until you have a strong understanding of the topic."
              ],
              ends: ["First","Last"],
              why: "Start simple → evaluate → ask a follow-up → repeat. This breaks learning into manageable parts and checks understanding at each step."
            },
            {
              type: "chat",
              ai: true,
              title: "Iterative interaction in action",
              right: "You",
              lines: [
                ["You","What is eco-tourism?"],
                ["AI","Eco-tourism is responsible travel to natural areas that conserves the environment and supports the well-being of local people …"],
                ["You","<mark>Can you explain how sustainability in eco-tourism is evaluated?</mark>"],
                ["AI","It is often evaluated through sustainability certifications, environmental impact assessments and indicators such as … "],
                ["You","<mark>You mentioned certifications. Can you give me two examples and explain one criticism of them?</mark>"]
              ]
            },
            {
              type: "language",
              title: "Follow-up questions that dig deeper",
              groups: [
                {"label":"Clarify","phrases":["Can you explain that in simpler terms?","What do you mean by …?","Can you give me an example of …?"]},
                {"label":"Go deeper","phrases":["You mentioned … Can you tell me more about …?","What is the evidence for …?","What are the main criticisms of …?"]},
                {"label":"Check & focus","phrases":["Where does this information come from?","Can you focus only on Australia?","Can you put this in a table: challenge / cause / possible solution?"]}
              ]
            }
          ]
        },
        {
          id: "b5",
          short: "Try it",
          minutes: 25,
          grouping: "Pairs → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-b5.svg",
          title: "Activity 4: Trying iterative interaction",
          goal: "Spend 10 minutes ‘in conversation’ with Vanilla GPT-4, then present your AI findings in 3 minutes.",
          blocks: [
            {
              type: "key",
              title: "Your new task",
              points: [
                "Imagine your teacher has set you this task: <b>Identify the major challenges and barriers to developing and expanding eco-tourism in Australia.</b>",
                "Start with this question: <b>What are the 3 major challenges to developing eco-tourism in Australia?</b>",
                "Ask follow-up questions based on the AI’s answers. Aim to explore <b>different parts</b> of the topic."
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"pair","text":"Open <b>Cogniti</b> (app.cogniti.ai → Log in with your university account → Chat with agents → <b>Vanilla GPT-4</b>)."},
                {"who":"pair","text":"Spend <b>10 minutes</b> in conversation. Ask the first question, then at least <b>four follow-up questions</b>. Write each round in the log."},
                {"who":"pair","text":"Prepare a <b>3-minute presentation</b> summarising your AI findings."},
                {"who":"class","text":"2–3 pairs present their AI findings to the class."}
              ]
            },
            {
              type: "table",
              id: "b5-tab", live: true,
              title: "Our conversation log",
              columns: ["Round","Our question","Main points in the AI’s answer","Why we asked the next question"],
              fixed: ["1 · Start","2 · Follow-up","3 · Follow-up","4 · Follow-up","5 · Follow-up"]
            },
            {"type":"do","n":1,"who":"pair","text":"Before you present: which follow-up question is the most useful? Bet 1–3 coins on each answer."},
            {
              type: "bet",
              id: "b5-bet",
              title: "Choose the best follow-up",
              coins: 10,
              items: [
                {
                  q: "The AI says one challenge is “the large distances between destinations”, but gives no detail.",
                  options: ["A · Tell me more.","B · You mentioned large distances. How do they make eco-tourism in Australia harder? Give one example.","C · Is that true?","D · Next challenge."],
                  answer: "B · You mentioned large distances. How do they make eco-tourism in Australia harder? Give one example.",
                  why: "It refers back to the answer, asks a specific question and asks for an example."
                },
                {
                  q: "The answer uses many difficult words.",
                  options: ["A · Make it better.","B · That’s too hard.","C · Can you explain that in simpler terms, in clear B1 English?","D · Write it again."],
                  answer: "C · Can you explain that in simpler terms, in clear B1 English?",
                  why: "It says exactly what to change."
                },
                {
                  q: "The AI gives a number but no source.",
                  options: ["A · OK, thanks.","B · Where does this number come from? Can you name the source so I can check it?","C · Give me more numbers.","D · Are you sure?"],
                  answer: "B · Where does this number come from? Can you name the source so I can check it?",
                  why: "AI can invent numbers and sources. Ask for the source — and then check it yourself."
                }
              ]
            },
            {
              type: "language",
              title: "Useful language: a 3-minute presentation of AI findings",
              groups: [
                {"label":"Open","phrases":["We asked Vanilla GPT-4 about the major challenges to developing eco-tourism in Australia.","We started with … and then followed up on …"]},
                {"label":"Report findings","phrases":["According to the AI, the first major challenge is …","When we asked about …, it explained that …","This links to … in Spenceley and Rylance (2021)."]},
                {"label":"Be critical","phrases":["However, the AI did not give a source for …, so we would need to check it.","The answer was quite general about …"]},
                {"label":"Close","phrases":["Overall, the most useful follow-up question was …","Next, we would like to research …"]}
              ]
            },
            {
              type: "tip",
              text: "<b>Integrity:</b> AI findings are a starting point, not a source. Check them against real academic sources, and acknowledge any tool that contributed to your work."
            }
          ]
        },
        {
          id: "b6",
          short: "Evaluate",
          minutes: 10,
          grouping: "Groups of 4–5",
          art: "dec10/assets/week4/v/v-d10w4d5-b6.svg",
          title: "Activity 5: Evaluating the effectiveness of iterative interaction",
          goal: "Discuss how well iterative interaction worked — compared with one single prompt.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Each group gets a different set of questions. Spin to get your set (or your teacher gives you one). Discuss for <b>5 minutes</b>. Then one student summarises the main points for the class."},
            {
              type: "spinner",
              id: "b6-spin",
              title: "Which question set?",
              reels: [{"label":"Question set","items":["Effectiveness","Improvement strategies","Critical thinking","Transferable skills"]}],
              note: "Spin once per group. Then open your tab below."
            },
            {
              type: "tabs",
              title: "The question sets",
              tabs: [
                {"label":"Effectiveness","blocks":[{"type":"talk","title":"Effectiveness","prompts":["Did the iterative interaction help you understand the topic better than a traditional Google search might have?","Can you think of an example of a follow-up question greatly improving or deepening your understanding of the topic?","Were there any moments during the iterative interactions where you felt confused or lost? What caused this?"]}]},
                {"label":"Improvement","blocks":[{"type":"talk","title":"Improvement strategies","prompts":["What types of questions led to the most insightful answers?","How can you formulate better follow-up questions in the future?"]}]},
                {"label":"Critical thinking","blocks":[{"type":"talk","title":"Critical thinking","prompts":["Can you identify any biases or gaps in the information provided during the interactions? How did you handle these issues?","Did this process influence your independent opinions or conclusions about eco-tourism?"]}]},
                {"label":"Transferable skills","blocks":[{"type":"talk","title":"Transferable skills","prompts":["Can iterative interaction be applied to other topics in your studies?","Find examples of other uses of this process in DEC.","What did you find most challenging about the iterative interaction, and what did you enjoy the most?"]}]}
              ]
            },
            {
              type: "language",
              title: "Useful language: summarising your group’s discussion",
              groups: [
                {"label":"Summarise","phrases":["Our group discussed …","Most of us felt that …","The main point we agreed on was …"]},
                {"label":"Compare","phrases":["Compared with a single prompt, iterative interaction was more …","Unlike a Google search, it …","It was less useful when …"]},
                {"label":"Hedge","phrases":["It seems that …","In some cases, …","It may depend on …"]}
              ]
            },
            {
              type: "fields",
              fields: [
                {"id":"b6-sum","label":"Our group’s main points (for the class summary)","rows":3},
                {"id":"b6-me","label":"One prompting tip I will use again","placeholder":"Next time, I will start simple and then …","rows":2}
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
          minutes: 10,
          grouping: "Teams",
          art: "dec10/assets/week4/v/v-d10w4d5-d4.svg",
          title: "Week 4 review game",
          goal: "Play in teams. What do you remember from this week?",
          blocks: [
            {"type":"do","n":1,"who":"class","text":"Play in teams. Choose a box, read the clue and answer <b>as a question</b> (“What is …?”). The teacher gives the points."},
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
          minutes: 3,
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
