/* DEC10 · Week 4 · Day 5 (Friday) — Plan, prompt, negotiate.
   There is NO Week 4 Teacher's Book. Built from the Week 4 student booklet (W4 D5. 15D role cards, used exactly), the revised
   weekly map (order + minutes) and the matching Teacher's Book lessons as patterns: W3 D1 3A Group work skills, W3 D3 14
   Digital literacy & AI, W3 D5 23A Interactive Discussion skills, W5 D4 11A Discussion and negotiation, W3 D3 13A STAR moment.
   Taught on FRIDAY: 15A AST: Group work skills (60) · 16A AST: Digital literacy and AI: Using & refining prompts (90)
   · 17A Interactive Discussion: Discussion and negotiation (60) · 18A STAR© moment (30).
   Protected texts are in sources.js and are never changed here. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w4d5",
  week: 4,
  day: 5,
  title: "Plan, prompt, negotiate",
  duration: "About 4 hours",
  question: "Can ecotourism really keep its promises — to nature and to local people?",
  questionKind: "Big question",
  questionLabel: "Today’s big question · you will negotiate it in 17A",
  journey: "Run a real group meeting: agree on goals, plan who does what, check progress and predict problems. Then make AI work better for you — try a prompt, check the answer, refine it. After lunch, negotiate the best way to make ecotourism fair, and finish the week with a STAR moment.",
  image: "dec10/assets/week4/hero-d10w4d5.svg",
  imageAlt: "Illustration: an eco-lodge on a green rainforest coast with a turtle in the bay. In front, four students sit at a round table with a planning board marked Goals, Plan, Progress and Challenges. A laptop shows an AI chat where a prompt grows from version 1 to version 3. Two speech bubbles meet over three option cards, and a gold STAR shines above.",
  finish: {"title":"Week 5","text":"Globalisation and culture: a new reading, a new listening and the three H scenarios"},
  goalShort: "your group project and the Interactive Discussion",
  sections: [
    {
      id: "groupwork",
      number: "01",
      code: "15A",
      minutes: 60,
      tone: "green",
      art: "dec10/assets/week4/s-d5-groupwork.svg",
      title: "AST: Group work skills",
      subtitle: "Transactional listening: listen, check, agree — then act",
      outcome: "You use the language on the role cards to discuss goals, make a plan of action, check progress and predict challenges in a group meeting — and you listen carefully so that every decision is clear.",
      activities: [
        {
          id: "a1",
          short: "Warm-up",
          minutes: 7,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d5-a1.svg",
          title: "Warmer: What makes a good group meeting?",
          goal: "Think about real group meetings — and meet a new idea: transactional listening.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Sit with your <b>seminar / Interactive Presentation group</b>. Each person tells the group about one group meeting: a good one or a bad one. <b>One minute each.</b>"},
            {
              type: "talk",
              title: "Talk about a real meeting",
              prompts: [
                "What did the group need to decide? Did you decide it?",
                "Did everyone know <b>what to do</b> and <b>by when</b> at the end?",
                "Did someone check that they understood? Or did people just nod?",
                "What was the <b>one thing</b> that made it good (or bad)?"
              ]
            },
            {
              type: "key",
              title: "Transactional listening",
              points: [
                "In a <b>transaction</b>, people talk to <b>get something done</b>: agree on a goal, share tasks, set a deadline.",
                "So you don’t just listen to understand. You listen to <b>check</b>, to <b>confirm</b> and to <b>act</b>.",
                "At the end of a good meeting, everyone can answer: <b>What are we doing? Who is doing it? By when?</b>"
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d5-listen-loop.svg",
              alt: "A loop with four steps: 1 Listen to the idea, 2 Check what you heard, 3 Confirm the decision, 4 Act on it. In the middle a group sits at a table.",
              hint: "Tap each step to see a phrase you can use.",
              spots: [
                {"x":50,"y":15,"label":"1","title":"Listen","text":"Look at the speaker. Show you are listening: “Right.” “OK, go on.” “That makes sense.”","color":"#2f7d6b"},
                {"x":85,"y":50,"label":"2","title":"Check","text":"Say it back in your words: “So what you’re saying is … — is that right?”","color":"#3a58a0"},
                {"x":50,"y":86,"label":"3","title":"Confirm","text":"Make the decision clear: “OK, so we’ve agreed that Kenji will …, by Wednesday.”","color":"#b07d12"},
                {"x":15,"y":50,"label":"4","title":"Act","text":"Write it down and do it: “I’ll put that in our group chat now.”","color":"#c4562f"}
              ]
            },
            {
              type: "language",
              title: "Useful language: show that you are listening",
              groups: [
                {"label":"Short responses","phrases":["Right. / OK. / I see.","That makes sense.","Good point.","Go on …"]},
                {"label":"Check","phrases":["So what you’re saying is …?","Do you mean that …?","Sorry, could you say that again?","Just to check — …?"]},
                {"label":"Confirm","phrases":["OK, so we’ve agreed that …","So, to sum up: … will … by …","Is everyone happy with that?"]}
              ]
            }
          ]
        },
        {
          id: "a2",
          short: "Role cards",
          minutes: 8,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-a2.svg",
          title: "Transactional listening: the role cards",
          goal: "Learn the four jobs of a project meeting and the language for each one.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d5-meeting-cycle.svg",
              size: "wide",
              alt: "A project cycle in four steps. Transactional listening 1: Discussing goals (Student A), then Making a plan of action (Student B). Transactional listening 2: Discussing progress (Student A), then Potential challenges (Student B). An arrow goes back to goals.",
              caption: "Two meetings, four jobs. <b>Meeting 1</b> starts the project. <b>Meeting 2</b> checks it later."
            },
            {"type":"do","n":1,"who":"pair","text":"Read each sentence from your role cards. Which job does it do? Put it in the right box. Say each sentence <b>aloud</b> to your partner as you place it."},
            {
              type: "sort",
              id: "a2-sort",
              title: "Which role card does each sentence come from?",
              hint: "<b>Drag</b> each card into a box — or <b>tap</b> a card, then tap a box.",
              buckets: [
                {"label":"Discussing goals","text":"Transactional listening 1 · Student A","letter":"G"},
                {"label":"Making a plan of action","text":"Transactional listening 1 · Student B","letter":"P"},
                {"label":"Discussing progress","text":"Transactional listening 2 · Student A","letter":"R"},
                {"label":"Potential challenges","text":"Transactional listening 2 · Student B","letter":"C"}
              ],
              items: [
                {"text":"I think we need to make sure we share common goals for this project.","answer":0,"why":"This starts the project: what do we all want?"},
                {"text":"What do you (all) think are the most important things we should try to achieve?","answer":0},
                {"text":"I was really hoping we could achieve/improve…","answer":0},
                {"text":"Does anyone have any suggestions on how we can split the tasks?","answer":1,"why":"Splitting tasks = the plan of action."},
                {"text":"Let’s set some deadlines now","answer":1},
                {"text":"We should also schedule a…","answer":1},
                {"text":"I wanted to check in and see how everything is going with…(task).","answer":2,"why":"“Check in” = later in the project: how is it going?"},
                {"text":"We haven’t come as far as I had hoped.","answer":2},
                {"text":"By now I think we should have finished…","answer":2},
                {"text":"Can you predict any more potential risks or challenges at this stage?","answer":3,"why":"Risks = things that might go wrong."},
                {"text":"I’m a little concerned that our group might…","answer":3},
                {"text":"If we…(verb).., then that should prevent….","answer":3}
              ]
            },
            {"type":"tip","text":"<b>Listen for the grammar.</b> Goals use <b>should / need to / ensure</b>. Plans use <b>could / can / let’s / how about</b>. Progress uses the <b>present perfect</b> (we’ve made, have you managed to). Challenges use <b>might / if … then</b>."}
          ]
        },
        {
          id: "a3",
          short: "Meeting 1",
          minutes: 17,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d5-a3.svg",
          title: "Transactional listening 1",
          goal: "Student A leads the talk about goals. Student B leads the plan of action. Everyone listens, checks and agrees.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"group","text":"Use your <b>real group project</b> (your seminar or Interactive Presentation). No project yet? Use the practice project: <b>a 10-minute group presentation: “Can ecotourism really help local communities?”</b>"},
                {"who":"alone","text":"Choose roles. <b>Student A</b> = Discussing goals. <b>Student B</b> = Making a plan of action. Other members = <b>listeners</b> (use the listener card)."},
                {"who":"group","text":"<b>Part 1 (4 min):</b> Student A asks about goals. Everyone gives one goal. Agree on <b>two or three</b> common goals."},
                {"who":"group","text":"<b>Part 2 (6 min):</b> Student B leads the plan. Split the tasks, set deadlines and schedule the next meeting."},
                {"who":"alone","text":"<b>Listeners:</b> check and confirm every decision. At the end, read the plan back to the group."}
              ]
            },
            {
              type: "chat",
              title: "Listen to a model meeting first",
              right: "Lina",
              lines: [
                ["Lina","<mark>I think we need to make sure we share common goals for this project.</mark> <mark>What do you all think are the most important things we should try to achieve?</mark>"],
                ["Kenji","For me, we need clear evidence. <mark>I think our main goal should be to</mark> use all three sources — Spenceley and Rylance, Mielly and the BBC podcast."],
                ["Sara","Yes, and <mark>I think it’s also important that we</mark> give both sides — the good things and the bluewashing."],
                ["Tom","So what you’re saying is: good evidence and a balanced view. Is that right?"],
                ["Lina","Exactly. OK — <mark>does anyone have any suggestions on how we can split the tasks?</mark>"],
                ["Kenji","<mark>Well, we could each</mark> take one source. <mark>For instance, I can take on</mark> the SDG reading, Sara <mark>could handle</mark> the bluewashing article, and Tom, <mark>you could work on</mark> the podcast notes."],
                ["Sara","<mark>Great suggestion!</mark> <mark>Let’s set some deadlines now.</mark> <mark>How about we</mark> finish our notes <mark>by next</mark> Tuesday?"],
                ["Tom","OK, so we’ve agreed: three sources, one each, notes by Tuesday. <mark>We should also schedule a</mark> practice on Wednesday."]
              ]
            },
            {
              type: "tabs",
              title: "Your role card",
              tabs: [
                {
                  label: "Student A · Goals",
                  blocks: [
                    {
                      type: "language",
                      title: "Discussing goals (Student A)",
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
                  label: "Student B · Plan",
                  blocks: [
                    {
                      type: "language",
                      title: "Making a plan of action (Student B)",
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
                  label: "Listener card",
                  blocks: [
                    {
                      type: "language",
                      title: "Extra: the listener’s job",
                      groups: [
                        {"label":"Check","phrases":["So what you’re saying is …, right?","Sorry, who is doing the …?","When exactly is the deadline — Tuesday morning or evening?"]},
                        {"label":"Confirm","phrases":["OK, so we’ve agreed that …","Let me read the plan back: … will …, by …","Does everyone agree with that?"]},
                        {"label":"Keep it moving","phrases":["Shall we move on to deadlines?","We have two minutes left — let’s decide.","Can we put that in the group chat?"]}
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-plan-timeline.svg",
              size: "wide",
              alt: "A simple plan of action drawn as a timeline from Friday to the next Friday. Four rows, one per member, each with a coloured task bar and a deadline flag. A star marks the group practice on Wednesday.",
              caption: "A good plan answers three questions: <b>What?</b> <b>Who?</b> <b>By when?</b>"
            },
            {"type":"do","n":2,"who":"group","text":"Write your plan of action together. Every member signs. Then the listener reads it back aloud — does everyone agree?"},
            {
              type: "contract",
              id: "a3-c",
              kicker: "DEC10 · Week 4 · Transactional listening 1",
              title: "Our plan of action",
              intro: "We agree on these goals, tasks and deadlines.",
              stamp: "Project group",
              signers: 4,
              fields: [
                {"id":"a3-goals","label":"Our common goals","placeholder":"Our main goal is to … We also need to ensure …","rows":2},
                {"id":"a3-tasks","label":"Who does what","placeholder":"… will take on … · … could handle … · … will work on …","rows":3},
                {"id":"a3-dead","label":"Our deadlines","placeholder":"Notes by next Tuesday · slides by …","rows":2},
                {"id":"a3-meet","label":"Our next meeting","placeholder":"Wednesday 3 pm, library / online","rows":1}
              ]
            },
            {
              type: "language",
              title: "Go further: more ways to plan (useful at university)",
              groups: [
                {"label":"Volunteer","phrases":["I’m happy to take care of …","I’d like to have a go at …","I can look after …, if that’s OK."]},
                {"label":"Agree politely","phrases":["That works for me.","Sounds good — let’s go with that.","I’m fine with that, as long as …"]},
                {"label":"Set a clear deadline","phrases":["Could we have it ready by …?","Let’s aim to finish … by the end of …","The final deadline is …, so we need … by …"]}
              ]
            }
          ]
        },
        {
          id: "a4",
          short: "Meeting 2",
          minutes: 18,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d5-a4.svg",
          title: "Transactional listening 2",
          goal: "Imagine it is one week later. Student A checks progress. Student B finds risks and agrees on strategies.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"alone","text":"<b>Swap roles.</b> A new <b>Student A</b> = Discussing progress. A new <b>Student B</b> = Potential challenges. Others = listeners."},
                {"who":"group","text":"Spin a <b>situation</b> for your group. Imagine this has happened in your project."},
                {"who":"group","text":"<b>Part 1 (4 min):</b> Student A checks in. Each member says what they have done and what is not finished."},
                {"who":"group","text":"<b>Part 2 (5 min):</b> Student B asks about risks. Find <b>two</b> challenges and agree on a strategy for each. Write them in the table."},
                {"who":"group","text":"Spin again and swap roles if you have time."}
              ]
            },
            {
              type: "spinner",
              id: "a4-spin",
              title: "One week later … what has happened?",
              text: "Spin both reels. Use the situation in your meeting.",
              reels: [
                {
                  label: "Progress",
                  items: [
                    "Two members have finished their notes. One hasn’t started.",
                    "Everyone finished their part — but the parts don’t connect.",
                    "The slides are ready, but nobody has practised.",
                    "We have lots of notes on the good side of ecotourism, but nothing on bluewashing.",
                    "We are on time — but the talk is 15 minutes, not 10."
                  ]
                },
                {
                  label: "Challenge",
                  items: [
                    "One member is sick this week.",
                    "Nobody replies in the group chat.",
                    "We can’t find a time when everyone is free.",
                    "A key article is behind a paywall.",
                    "Two members disagree about the main message.",
                    "One member did most of someone else’s part."
                  ]
                }
              ]
            },
            {
              type: "tabs",
              title: "Your role card",
              tabs: [
                {
                  label: "Student A · Progress",
                  blocks: [
                    {
                      type: "language",
                      title: "Discussing progress (Student A)",
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
                  label: "Student B · Challenges",
                  blocks: [
                    {
                      type: "language",
                      title: "Potential challenges (Student B)",
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
                },
                {
                  label: "Go further",
                  blocks: [
                    {
                      type: "language",
                      title: "Extra: kind and clear language for problems",
                      groups: [
                        {"label":"Ask without blame","phrases":["Is there anything that’s making it hard to finish …?","How can we help you with …?","Would it help if someone …?"]},
                        {"label":"Say how you feel (NVC from Week 3)","phrases":["When I see …, I feel a bit worried because I need …","Would you be willing to …?"]},
                        {"label":"Agree on a fix","phrases":["As a back-up plan, …","Let’s give ourselves a buffer of one day.","If … happens, … will step in."]}
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d5-risk-matrix.svg",
              alt: "A risk map. Across: how likely a problem is. Up: how big the effect would be. Sticky notes sit in the boxes: a sick member (low chance, big effect), no reply in the chat (high chance, big effect), a paywall (medium), the talk is too long (high chance, small effect).",
              hint: "Tap each sticky note. Where would you put your group’s challenges?",
              spots: [
                {"x":72,"y":25,"label":"1","title":"Likely + big effect","text":"Deal with this first! “One of our main concerns is …” → “We’ve agreed to … to quickly address any issues that arise.”","color":"#c4562f"},
                {"x":30,"y":25,"label":"2","title":"Not likely, but big effect","text":"Have a back-up plan: “If someone is sick, then … will step in.”","color":"#b07d12"},
                {"x":72,"y":68,"label":"3","title":"Likely, small effect","text":"A quick fix is enough: “If we practise with a timer, then that should prevent a long talk.”","color":"#3a58a0"},
                {"x":30,"y":68,"label":"4","title":"Not likely, small effect","text":"Just keep an eye on it. Don’t spend too much meeting time here.","color":"#2f7d6b"}
              ]
            },
            {
              type: "table",
              id: "a4-tab",
              title: "Our risks and strategies",
              columns: ["Challenge","How likely? Big or small effect?","Our strategy (If we …, then …)","Who will do it?"],
              fixed: ["Challenge 1","Challenge 2","Challenge 3"]
            }
          ]
        },
        {
          id: "a5",
          short: "Follow up",
          minutes: 10,
          grouping: "Alone → Group",
          art: "dec10/assets/week4/v/v-d10w4d5-a5.svg",
          title: "After the meeting: confirm it in writing",
          goal: "Write a short group-chat message that confirms the decisions — then reflect on your listening.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Write the message you will send to your group after today’s meeting. Include the <b>goal</b>, <b>who does what</b>, the <b>deadline</b> and the <b>next meeting</b>. The lights turn on as you use each part."},
            {
              type: "detect",
              id: "a5-msg",
              title: "Our group chat",
              label: "Message writer",
              checks: [
                {"label":"Greeting + thanks","color":"#2f7d6b","any":["hi ","hello","thanks","thank you"]},
                {"label":"The goal","color":"#3a58a0","any":["goal","aim","we need to ensure","we are aiming"]},
                {"label":"Who does what","color":"#8a4f9e","any":["will take on","could handle","will work on","is responsible for","will do","will look after","/\\b(i|you|he|she|[A-Z][a-z]+)\\s*('ll| will)\\b/"]},
                {"label":"A deadline","color":"#c4562f","any":["by next","by monday","by tuesday","by wednesday","by thursday","by friday","deadline","/by \\d/"]},
                {"label":"Next meeting","color":"#b07d12","any":["next meeting","meet on","see you on","schedule","let’s meet","let's meet"]}
              ],
              items: [
                {
                  task: "A message to your group",
                  rows: 6,
                  placeholder: "Hi everyone, thanks for today’s meeting! Just to confirm …",
                  model: "Hi everyone, thanks for a great meeting today! Just to confirm: our main goal is to give a balanced answer, using all three sources. Kenji will take on the SDG reading, Sara will handle the bluewashing article and Tom will work on the podcast notes. The deadline for notes is next Tuesday at 6 pm. Our next meeting is on Wednesday at 3 pm in the library. Let me know if I missed anything. 😊"
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
            },
            {
              type: "form",
              id: "a5-form",
              title: "How well did I listen?",
              intro: "Be honest. This is for you.",
              scale: ["Yes","Mostly","Needs work"],
              cols: ["Example from today"],
              sections: [
                {
                  label: "Transactional listening",
                  items: [
                    "I used at least three phrases from my role card.",
                    "I checked what others said (“So what you’re saying is …?”).",
                    "I confirmed decisions: what, who and by when.",
                    "I gave everyone a chance to speak."
                  ]
                }
              ]
            },
            {"type":"do","n":2,"who":"group","text":"Read your message aloud to the group. Do the messages match? If not — what did someone miss?"}
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
      subtitle: "Try a prompt, check the answer, make it better",
      outcome: "You write a prompt with a role, a task, requirements and instructions, judge the AI answer critically, and refine the prompt step by step — using AI to support your learning, not to replace it.",
      activities: [
        {
          id: "b1",
          short: "Recap",
          minutes: 8,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-b1.svg",
          title: "Recap: The structure of a good prompt",
          goal: "Remember the four key elements of a good prompt from Week 3.",
          blocks: [
            {
              type: "key",
              title: "A good prompt has 4 key elements",
              points: [
                "<b>Role</b> — “Act as …” Who should the AI pretend to be?",
                "<b>Task</b> — What do you want the AI to do? Be specific.",
                "<b>Requirements</b> — What should the output look like? What are the conditions?",
                "<b>Instructions</b> — How should the AI complete the task? Steps, examples."
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d5-prompt-anatomy.svg",
              alt: "A prompt card cut into four coloured strips: Role, Task, Requirements and Instructions, with an eco-tourism example on each strip. On the side, two extra tags: Context and Format.",
              hint: "Tap each part of the prompt.",
              spots: [
                {"x":12,"y":22,"label":"R","title":"Role","text":"“Act as a friendly university tutor in tourism studies.” A role changes the voice and the level of the answer.","color":"#2f7d6b"},
                {"x":12,"y":42,"label":"T","title":"Task","text":"“Explain what bluewashing means in ecotourism.” One clear job.","color":"#3a58a0"},
                {"x":12,"y":62,"label":"Q","title":"Requirements","text":"“Use simple English (B1). Maximum 120 words. Use only the text I paste below.” Requirements stop the AI from guessing.","color":"#8a4f9e"},
                {"x":12,"y":82,"label":"I","title":"Instructions","text":"“First give a one-sentence definition, then one example from the text, then ask me one question to check I understand.”","color":"#c4562f"},
                {"x":88,"y":35,"label":"+","title":"New today: context","text":"Tell the AI <b>who you are</b> and <b>why</b> you need it: “I am a DEC student. I am preparing for a group discussion.”","color":"#b07d12"},
                {"x":88,"y":65,"label":"+","title":"New today: format","text":"Say <b>how</b> it should look: a table, three bullet points, a numbered list, a short quiz.","color":"#2d7a9a"}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Match each part of a prompt to its eco-tourism example. Then cover the screen and tell your partner the four elements from memory."},
            {
              type: "match",
              id: "b1-match",
              title: "Match the element to the example",
              left: ["Role","Task","Requirements","Instructions"],
              right: [
                "Act as an expert in sustainable tourism.",
                "Summarise the main argument of the paragraph I paste below.",
                "Use no more than 100 words, in clear B1 English, for a student audience.",
                "Start with the main idea, then list two supporting points as bullet points."
              ]
            }
          ]
        },
        {
          id: "b2",
          short: "Why refine?",
          minutes: 12,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-b2.svg",
          title: "Principles for good prompting: try and refine",
          goal: "See why your first prompt is only a start — and what is missing in a weak prompt.",
          blocks: [
            {
              type: "key",
              title: "Principles for good prompting",
              points: [
                "Craft <b>precise and unambiguous</b> instructions.",
                "<b>Specificity is key!</b> The model will make an assumption on any point you don’t clearly explain.",
                "<b>Try and refine.</b> There is no hard science to good prompting — it is trial and error."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-refine-loop.svg",
              size: "wide",
              alt: "A loop with four steps around a laptop: 1 Formulate a relevant prompt, 2 Consider where the output doesn’t meet your expectations, 3 Enhance the clarity of the prompt, 4 Repeat. A small counter shows version 1, 2, 3.",
              caption: "The refining loop: <b>formulate → consider → enhance → repeat</b>."
            },
            {
              type: "chat",
              title: "Round 1: a simple prompt gets a simple answer",
              right: "You",
              lines: [
                ["You","Tell me about ecotourism."],
                ["AI assistant","Ecotourism is a type of tourism that focuses on nature. It can have many benefits for the environment and local communities. However, there can also be challenges. Overall, ecotourism is an important topic in today’s world."]
              ]
            },
            {
              type: "talk",
              title: "What is wrong with this answer?",
              prompts: [
                "Is the answer <b>wrong</b>? Or is it just <b>too general</b>?",
                "What did the AI have to <b>guess</b>? (Who are you? Why do you need it? How long? Which sources?)",
                "Could you use this answer in a discussion or an essay? Why not?"
              ]
            },
            {
              type: "chat",
              title: "Round 2: the same student refines the prompt",
              right: "You",
              lines: [
                ["You","<mark>Act as</mark> a university tutor. <mark>I am a</mark> pre-university student preparing for a group discussion on ecotourism. <mark>Explain</mark> two goals of ecotourism and one problem with it. <mark>Use simple English and no more than 100 words.</mark> <mark>Give the answer as three bullet points.</mark>"],
                ["AI assistant","• <b>Goal 1:</b> protect nature, for example by funding protected areas.<br>• <b>Goal 2:</b> help local people earn money, for example through jobs and local food.<br>• <b>A problem:</b> some companies use “eco” as a marketing word but do not really help local people. This is sometimes called “bluewashing”."]
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Each prompt below has <b>one</b> main problem. Which element is weak or missing? Discuss, then choose."},
            {
              type: "quiz",
              id: "b2-quiz",
              title: "What is the main problem with each prompt?",
              shared: ["Role","Task","Requirements","Instructions"],
              items: [
                {"q":"“Write about tourism.”","answer":"Task","why":"The task is too broad: which part of tourism? Ecotourism? Its goals? Its problems? The AI will give a general, shallow answer."},
                {"q":"“Explain the Sustainable Development Goals.”","answer":"Requirements","why":"Missing requirements: how deep? For which audience? How long? Only the goals linked to tourism? Without this, the answer may be too long or too technical."},
                {"q":"“Act as a hotel marketing manager and assess whether ecotourism helps local communities.”","answer":"Role","why":"This role may give a narrow or biased view — a marketing manager wants to sell holidays. A tourism researcher or a neutral tutor is a better role."},
                {"q":"“Summarise Mielly (2023) in 80 words for a B1 student, as a tutor.”","answer":"Instructions","why":"Role, task and requirements are there, but no instructions on how: Start with the main argument? Include an example? Which paragraphs? Should it ask you questions?"}
              ]
            }
          ]
        },
        {
          id: "b3",
          short: "Check it",
          minutes: 15,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-b3.svg",
          title: "Evaluate the output",
          goal: "Read an AI answer like a critical researcher: what is useful, what is wrong, what is missing?",
          blocks: [
            {
              type: "key",
              title: "Never trust the first answer",
              points: [
                "AI can only produce from the information we give it — and its interpretation of our prompt can be flawed.",
                "AI can sound <b>very sure</b> and still be <b>wrong</b>. It can even invent sources and numbers.",
                "So you always <b>check the output</b> before you use it."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-output-check.svg",
              alt: "A magnifying glass over an AI answer. Around it are six check tags: Accurate? Relevant? Specific? Real sources? Right level? Fair and balanced?",
              caption: "Six questions to ask about every AI answer."
            },
            {
              type: "steps",
              items: [
                {"who":"alone","text":"A student asked an AI: <i>“Summarise Spenceley and Rylance (2021) on tourism and the SDGs.”</i> Read the answer below."},
                {"who":"alone","text":"Open the reading and compare. <b>Tap the five problems</b> in the AI answer: wrong facts, an invented source, a vague phrase."},
                {"who":"pair","text":"Compare with a partner. For each problem, say <b>which check</b> it fails."}
              ]
            },
            {"type":"sources","ids":["ecosdg"]},
            {
              type: "spot",
              id: "b3-spot",
              label: "Find the problems",
              title: "The AI answer",
              hint: "Tap the phrases that are wrong, invented or too vague. Use the reading to check.",
              paras: [
                "In 2015, governments agreed on the Sustainable Development Goals, [[with 17 goals and 169 targets]]. [[*Tourism is only included in Goal 8,]] which is about decent work and economic growth. The authors show that [[tourism can help sustainable agriculture]] by buying local food for hotels and restaurants.",
                "[[*According to a 2019 World Bank report, ecotourism has created 40 million jobs in Africa]]. Marine-protected areas [[help reduce hunger]], and [[*visiting parks cures depression in all cases]]. The authors also explain that [[*the andBeyond company built hospitals in every country where it works]].",
                "Overall, [[*ecotourism has many good and bad effects on many different things]]. [[Corporate social responsibility]] by ecotourism companies can improve public health."
              ]
            },
            {
              type: "talk",
              title: "Which check did it fail?",
              prompts: [
                "Which problem is the most <b>dangerous</b> for your essay? Why?",
                "How could the student’s <b>prompt</b> stop some of these problems? (Hint: “Use only the text I paste below.”)",
                "Have you ever seen AI invent something? What happened?"
              ]
            },
            {
              type: "language",
              title: "Useful language: talking about AI output",
              groups: [
                {"label":"It works","phrases":["The output is accurate and relevant to the task.","It gives a clear, specific example.","It matches what the reading says."]},
                {"label":"It doesn’t work","phrases":["This claim is not supported by the text.","The AI seems to have invented this source.","This is too vague to be useful.","It overgeneralises: “in all cases” is too strong."]},
                {"label":"Next step","phrases":["I need to check this against the original.","I’ll ask it to use only the text I give it.","I’ll ask for the exact paragraph."]}
              ]
            }
          ],
          answers: {
            title: "Suggested answers",
            items: [
              ["“Tourism is only included in Goal 8”","Not accurate. The reading says tourism is in the targets for Goals 8, 12 and 14, and can contribute to all of the goals."],
              ["“According to a 2019 World Bank report … 40 million jobs”","Invented source and number — they are not in the reading. Check: real sources?"],
              ["“visiting parks cures depression in all cases”","Overgeneralised. The text says visiting places with biodiversity <i>can prevent</i> health issues like depression. Check: accurate? fair?"],
              ["“andBeyond … built hospitals in every country”","Not in the text. The text mentions the Africa Foundation supporting a clinic in Mduku and other health projects near andBeyond lodges."],
              ["“many good and bad effects on many different things”","Too vague to be useful. Check: specific?"]
            ]
          }
        },
        {
          id: "b4",
          short: "Refine it",
          minutes: 20,
          grouping: "Alone → Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-b4.svg",
          title: "Refining a prompt: role, context, format and constraints",
          goal: "Learn four moves that make any prompt better — then build your own eco-tourism prompt.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d5-prompt-ladder.svg",
              size: "wide",
              alt: "A ladder with four rungs going up from a weak prompt to a strong prompt. Rung 1: add a role. Rung 2: add context. Rung 3: add a format. Rung 4: add constraints. A meter on the side goes from Too vague to Strong.",
              caption: "Each move answers one question the AI would otherwise have to guess."
            },
            {
              type: "pairs",
              title: "Four refining moves",
              hint: "Read the weak prompt, then the refined one. Tap the tag to see what changed.",
              items: [
                {"from":"Explain bluewashing.","to":"[[Act as a university tutor in tourism studies.]] Explain bluewashing.","tag":"1 · Add a role","note":"The role sets the voice, the level and the kind of knowledge."},
                {"from":"Act as a tutor. Explain bluewashing.","to":"Act as a tutor. [[I am a pre-university student. I am preparing for a group discussion on ecotourism.]] Explain bluewashing.","tag":"2 · Add context","note":"Who you are and why you need it. Now the AI knows what is useful for you."},
                {"from":"… Explain bluewashing.","to":"… Explain bluewashing [[in a table with two columns: what companies say / what really happens.]]","tag":"3 · Add a format","note":"Table, bullet points, a numbered list, a short quiz — you decide how it looks."},
                {"from":"… in a table …","to":"… in a table. [[Use only the article I paste below. Use B1 English. No more than 120 words.]]","tag":"4 · Add constraints","note":"Constraints limit the AI’s guesses. “Use only the text I paste” is the best protection against invented facts."}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Build a prompt that helps you <b>understand</b> one of this week’s texts. Choose a reading below. Tap the ideas (+) or write your own words. Watch the meter."},
            {"type":"sources","ids":["ecosdg","bluewash"]},
            {
              type: "promptbuilder",
              id: "b4-pb",
              title: "Build a prompt for this week’s reading",
              tryUrl: "https://copilot.microsoft.com/",
              tryLabel: "Try it in Copilot",
              parts: [
                {"key":"role","label":"Role","lead":"Act as","placeholder":"a friendly university tutor in tourism studies","chips":["a friendly university tutor","an expert in sustainable tourism","a patient English teacher","a critical research partner"]},
                {"key":"task","label":"Task","lead":"Your task is to","placeholder":"help me understand the main argument of the article I paste below","chips":["help me understand the main argument of the text I paste below","explain the key words in this paragraph","ask me five questions to check that I understand the text","show me the problems with ecotourism that the author describes"]},
                {"key":"req","label":"Requirements (context + constraints)","lead":"Requirements:","placeholder":"I am a pre-university student. Use simple B1 English. Use only the text I paste.","chips":["I am a pre-university student preparing for a group discussion","use simple B1 English","use only the text I paste below","no more than 150 words","do not write my essay for me"]},
                {"key":"instr","label":"Instructions (steps + format)","lead":"Instructions:","placeholder":"First give the main idea in one sentence, then three key points as bullet points, then ask me one question.","chips":["first give the main idea in one sentence","then list three key points as bullet points","put the key words in a table: word / meaning / example","finish by asking me one question to check I understand"]}
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"alone","text":"Press <b>Copy prompt</b>. Open <b>Copilot</b> (log in with your university email: firstname.lastname@sydney.edu.au, and check for the green badge) or <b>Cogniti</b> (app.cogniti.ai, e.g. the Vanilla GPT-4 agent)."},
                {"who":"alone","text":"Paste your prompt. Then paste <b>one paragraph</b> of the reading under it."},
                {"who":"pair","text":"Show your partner the output. Use the six checks: is it accurate, relevant, specific, at the right level?"}
              ]
            },
            {"type":"tip","text":"<b>No computer access?</b> Swap prompts with a partner. Your partner reads your prompt and says what the AI would still have to <b>guess</b>."}
          ]
        },
        {
          id: "b5",
          short: "Prompt lab",
          minutes: 22,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-b5.svg",
          title: "Prompt lab: refine in three rounds",
          goal: "Use conversational turns to improve the output — and record what you changed each time.",
          blocks: [
            {
              type: "key",
              title: "Use the conversation",
              points: [
                "As you chat with generative AI, the model learns more about what you need.",
                "Use <b>follow-up prompts</b> to fix one problem at a time.",
                "Remember: simple prompts lead to simple (and similar) completions."
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Which follow-up prompt is the most useful? Bet 1–3 coins on each answer — more coins if you are sure."},
            {
              type: "bet",
              id: "b5-bet",
              title: "Choose the best follow-up",
              coins: 10,
              items: [
                {
                  q: "The AI’s explanation of “bluewashing” is full of difficult words.",
                  options: ["A · Make it better.","B · Can you explain that in simpler terms, at B1 level, with one everyday example?","C · That’s too hard.","D · Write it again."],
                  answer: "B · Can you explain that in simpler terms, at B1 level, with one everyday example?",
                  why: "It says exactly what to change (simpler, B1) and adds a format (one example)."
                },
                {
                  q: "The AI gives a number that you cannot find in the article.",
                  options: ["A · Are you sure?","B · Use only the text I pasted. Which sentence in the text gives this number?","C · Give me more numbers.","D · OK, thanks."],
                  answer: "B · Use only the text I pasted. Which sentence in the text gives this number?",
                  why: "A constraint + a request to show the evidence. If there is no sentence, the number was probably invented."
                },
                {
                  q: "The summary only talks about the benefits of ecotourism.",
                  options: ["A · Add problems.","B · Is this good?","C · Now add two problems that the author describes, so the summary is balanced.","D · Write a longer summary."],
                  answer: "C · Now add two problems that the author describes, so the summary is balanced.",
                  why: "Specific (two problems), linked to the source (that the author describes) and gives the reason (balanced)."
                }
              ]
            },
            {
              type: "language",
              title: "Follow-up prompts that work",
              groups: [
                {"label":"Make it simpler","phrases":["Can you explain that in simpler terms?","Rewrite this for a B1 student.","Give me one everyday example."]},
                {"label":"Make it accurate","phrases":["Use only the text I pasted.","Which sentence in the text says this?","If the text does not say it, write “not in the text”."]},
                {"label":"Change the format","phrases":["Put this in a table with three columns: …","Give me three bullet points.","Turn this into five quiz questions."]},
                {"label":"Go deeper","phrases":["What is the strongest counter-argument?","How does this compare with Mielly (2023)?","Ask me questions one at a time to check I understand."]}
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"pair","text":"<b>Round 1:</b> use your prompt from the last activity. Check the output. What is missing?"},
                {"who":"pair","text":"<b>Round 2:</b> write <b>one</b> follow-up prompt to fix the biggest problem. Check again."},
                {"who":"pair","text":"<b>Round 3:</b> one more follow-up. Is the output useful now? Fill in one row per round."}
              ]
            },
            {
              type: "table",
              id: "b5-tab",
              title: "My prompt lab",
              columns: ["Round","My prompt or follow-up","What was good?","What was missing or wrong?","What I changed next"],
              fixed: ["Round 1","Round 2","Round 3"]
            },
            {
              type: "scale",
              id: "b5-scale",
              title: "How useful was the final output?",
              statement: "After three rounds, the AI output really helped me understand the text.",
              ends: ["Not useful","Very useful"]
            },
            {
              type: "talk",
              title: "Tell another pair",
              prompts: [
                "Show your Round 1 and Round 3 outputs. What is the biggest difference?",
                "Which follow-up prompt made the biggest change?",
                "Did the AI make any mistakes? How did you find them?"
              ]
            }
          ]
        },
        {
          id: "b6",
          short: "Integrity",
          minutes: 13,
          grouping: "Pairs → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-b6.svg",
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
            {"type":"do","n":1,"who":"pair","text":"Read each use of AI. Does it <b>support</b> your learning, or <b>replace</b> it? Discuss, then sort."},
            {
              type: "sort",
              id: "b6-sort",
              title: "Support or replace?",
              buckets: [
                {"label":"Supports my learning","text":"I still do the thinking and the writing","letter":"✓"},
                {"label":"Replaces my learning","text":"Not my own work — a risk to integrity","letter":"✗"}
              ],
              items: [
                {"text":"Asking AI to explain a difficult word from the bluewashing article.","answer":0},
                {"text":"Asking AI for five quiz questions to test my understanding of a reading.","answer":0},
                {"text":"Asking AI to write my Integrated Writing essay, then handing it in.","answer":1,"why":"The essay is not your own work."},
                {"text":"Using AI to practise for the Interactive Discussion by arguing against my ideas.","answer":0},
                {"text":"Copying an AI paragraph into my essay without saying I used AI.","answer":1,"why":"You must acknowledge the tool — and check what the task allows."},
                {"text":"Using a reference the AI gave me without checking that it is real.","answer":1,"why":"AI can invent sources. Using a fake source is a serious problem."},
                {"text":"Asking AI to explain my teacher’s feedback in simpler words.","answer":0}
              ]
            },
            {
              type: "checklist",
              id: "b6-check",
              title: "Before I use any AI answer, I …",
              meter: ["ticked","Ready to use AI well!"],
              items: [
                "check it against the original text",
                "check that every source and number is real",
                "think: does this support my learning, or replace it?",
                "check what the task allows",
                "acknowledge the tool if I used it"
              ]
            },
            {
              type: "fields",
              title: "My best prompt today",
              fields: [
                {"id":"b6-best","label":"Copy your best (final) prompt here","rows":4},
                {"id":"b6-why","label":"Why does it work? Name two elements or refining moves you used.","placeholder":"It works because it has a clear role … and a constraint: …","rows":2}
              ]
            },
            {
              type: "language",
              title: "Useful language: saying how you used AI",
              groups: [
                {"label":"Describe your use","phrases":["I used Copilot to check my understanding of …","I asked Cogniti to explain the key terms in …"]},
                {"label":"Show you checked","phrases":["I then compared the output with the original text.","I did not use any AI text in my final answer."]}
              ]
            },
            {"type":"do","n":2,"who":"class","text":"Share your best prompt with the class wall. Read two classmates’ prompts and react to the one you would like to try."}
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
      subtitle: "Have your views on ecotourism changed? Now negotiate the best way forward",
      outcome: "You review your views on ecotourism critically, use discussion and negotiation skills and language — and sources — in a 10-minute negotiation, and reflect on your performance to plan your next step.",
      activities: [
        {
          id: "c1",
          short: "Views",
          minutes: 12,
          grouping: "Alone → Group",
          art: "dec10/assets/week4/v/v-d10w4d5-c1.svg",
          title: "Guided discussion: Have your views changed?",
          goal: "Look back at your first ideas about ecotourism. Are they the same after a week of reading, listening and writing?",
          blocks: [
            {
              type: "key",
              title: "Showing flexibility",
              points: [
                "On Monday, in the <b>Preliminary guided discussion</b>, you talked about ecotourism and wrote down your first ideas.",
                "Since then you have read <b>Spenceley and Rylance (2021)</b> and <b>Mielly (2023)</b>, listened to <b>Alom (2023)</b> and written an essay.",
                "A critical thinker can <b>change their mind</b> when they see new evidence — and can explain <b>why</b>."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-views-shift.svg",
              size: "wide",
              alt: "An opinion line from ‘No, ecotourism rarely keeps its promises’ to ‘Yes, it usually keeps its promises’. A grey Monday marker sits on one side, a green Friday marker has moved. Three source cards below push it: Spenceley and Rylance 2021, Mielly 2023, Alom 2023.",
              caption: "Where were you on Monday? Where are you now? <b>What moved you?</b>"
            },
            {"type":"do","n":1,"who":"alone","text":"Look back at your Monday notes. Move each slider: first where you were on Monday, then where you are now."},
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
            {"type":"sources","ids":["ecosdg","bluewash"]},
            {
              type: "talk",
              title: "Share with your group",
              prompts: [
                "How would you answer Monday’s questions now, after reading and listening to different perspectives, and after writing an essay?",
                "Have your ideas and views changed? <b>Why / why not?</b>",
                "Which source changed your mind the most — or made you more sure?",
                "Is there anything you are still <b>not sure</b> about?"
              ]
            },
            {
              type: "language",
              title: "Useful language: talking about a change of view",
              groups: [
                {"label":"My view changed","phrases":["I used to think …, but after reading …, I now believe …","At first I was quite optimistic about …, but …","… made me rethink my view on …"]},
                {"label":"My view is the same","phrases":["My view hasn’t really changed. In fact, … confirmed that …","I still believe …, mainly because …"]},
                {"label":"I’m less sure now","phrases":["I’m less certain than I was. On the one hand …, on the other hand …","It depends on …"]}
              ]
            }
          ]
        },
        {
          id: "c2",
          short: "Skills",
          minutes: 13,
          grouping: "Alone → Pairs",
          art: "dec10/assets/week4/v/v-d10w4d5-c2.svg",
          title: "Negotiation: review the skills and language",
          goal: "Review the language for discussion, negotiation and referring to sources — and choose what you will practise today.",
          blocks: [
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
                      title: "Three key discussion skills",
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
                      title: "Discussion skills to encourage negotiation",
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
                      title: "Referring to sources in academic discussions",
                      groups: [
                        {"label":"Mentioning authors to introduce facts, arguments, or opinions","phrases":["[Author] mentions that …","[Author] talks about …","e.g. Mielly talks about the Mbyá Guaraní community in Brazil."]},
                        {"label":"Agreeing or supporting authors","phrases":["I agree with what [Author] said about …","e.g. I agree with what Spenceley and Rylance said about local food."]},
                        {"label":"Questioning authors","phrases":["I’m not sure I agree with [Author] that ...","I wonder why [Author] says ..."]},
                        {"label":"Introducing authors’ ideas or concepts","phrases":["[Author] brings up a good example of …","e.g. Mielly brings up a good example of bluewashing."]}
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
                "To start us off, I’d say the key question is who really benefits.",
                "There’s evidence from Spenceley and Rylance which indicates that tourism can support local farmers.",
                "If I might add here — the money doesn’t always stay in the community.",
                "Following on from Kenji’s point about jobs, I think training matters too.",
                "Why do you think that option would work better?",
                "How about independent checks? That would make companies more honest."
              ]
            },
            {
              type: "fields",
              title: "What other expressions do you remember? Write down the ones you want to practise today.",
              fields: [
                {"id":"c2-disc","label":"Discussion skills (start · introduce ideas · take the floor)","rows":2},
                {"id":"c2-neg","label":"Negotiation skills (build on · ask · suggest and justify)","rows":2},
                {"id":"c2-src","label":"Referring to sources","rows":2}
              ]
            }
          ]
        },
        {
          id: "c3",
          short: "Negotiate",
          minutes: 25,
          grouping: "Groups of 4",
          art: "dec10/assets/week4/v/v-d10w4d5-c3.svg",
          title: "Negotiation task",
          goal: "Negotiate as a group: which strategy is best to make ecotourism really benefit local communities and nature?",
          blocks: [
            {
              type: "key",
              title: "The negotiation task",
              points: [
                "<b>Which of the strategies below would be best to make sure ecotourism really benefits local communities and protects nature?</b>",
                "① Require companies to hold a real dialogue with local and indigenous communities — and get their agreement — before any project starts.",
                "② Make tourism companies give a fixed share of their income to local projects: food, health, schools and conservation.",
                "③ Introduce strict, independent checks of “eco” labels, with penalties for companies that bluewash."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d5-negotiation-map.svg",
              size: "wide",
              alt: "A negotiation table seen from above with three option cards: 1 Dialogue and agreement first, 2 A share of income for local projects, 3 Independent eco-label checks. Speech bubbles from four seats point to the cards, and a balance in the middle weighs them.",
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
            {"type":"do","n":1,"who":"alone","text":"<b>Prepare (5 min).</b> Choose your first choice. Find <b>one idea from a source</b> that supports it — and one problem with another option."},
            {
              type: "cards",
              title: "My first choice (before we talk)",
              pick: "c3-pick",
              items: [
                {"label":"① Dialogue first","text":"Mielly (2023): the ILO C169 agreement requires at least a dialogue with indigenous communities.","icon":"chat"},
                {"label":"② Share the income","text":"Spenceley and Rylance (2021): local food, jobs and health projects near lodges.","icon":"link"},
                {"label":"③ Check the labels","text":"Mielly (2023): lax reporting and no enforcement let firms bluewash.","icon":"search"}
              ]
            },
            {"type":"sources","ids":["ecosdg","bluewash"]},
            {
              type: "fields",
              fields: [
                {"id":"c3-src","label":"My idea from a source","placeholder":"Mielly (2023) mentions that …","rows":2},
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
              title: "How a negotiation sounds",
              lines: [
                ["Sara","<mark>Ok, we’ve decided to talk about</mark> which strategy would help ecotourism most. I’d like to start with option one. <mark>Mielly mentions that</mark> people in Maricá only found out about the resort when the bulldozers arrived."],
                ["Kenji","That’s true. <mark>Building on what you said before</mark>, a dialogue is important — but is it enough? Companies can talk and still do what they want."],
                ["Lina","<mark>So, are you suggesting that</mark> option one is too weak on its own?"],
                ["Kenji","Exactly. <mark>I’d go for</mark> option three, because Mielly also says lax reporting lets firms bluewash."],
                ["Tom","<mark>Sorry to jump in, but</mark> what about the money? <mark>Spenceley and Rylance bring up a good example of</mark> the Africa Foundation supporting a clinic. That helps people right now."],
                ["Sara","<mark>So far, we’ve discussed</mark> dialogue, checks and money. <mark>How about we think about</mark> combining one and three?"]
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
            {"type":"do","n":3,"who":"group","text":"<b>Negotiate for 10 minutes.</b> Use a timer. At the end, guess each person’s secret skill. Then tell the class: did you reach a consensus? Which option, and why?"}
          ]
        },
        {
          id: "c4",
          short: "Reflect",
          minutes: 10,
          grouping: "Alone → Class",
          art: "dec10/assets/week4/v/v-d10w4d5-c4.svg",
          title: "Reflection",
          goal: "Think about how well you interacted — and choose what to practise next time.",
          blocks: [
            {
              type: "key",
              title: "Interactive Discussion Assessment rubric · Interaction & Engagement",
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
              title: "Answer the reflection questions",
              fields: [
                {"id":"c4-q1","label":"1. To what extent do you think you effectively interacted and engaged in the discussion?","rows":2},
                {"id":"c4-q2","label":"2. Which specific discussion skills and language did you use to help you interact effectively?","rows":2},
                {"id":"c4-q3","label":"3. Which specific discussion skills and language would you like to use more in your future discussions?","rows":2},
                {"id":"c4-q4","label":"4. To what extent do you think you used turn-taking skills and language?","rows":2},
                {"id":"c4-q5","label":"5. Which specific turn-taking skills and language did you use?","rows":2},
                {"id":"c4-q6","label":"6. Which specific turn-taking skills and language would you like to use more in your future discussions?","rows":2}
              ]
            },
            {"type":"do","n":1,"who":"class","text":"Tell the class <b>one</b> thing you did well and <b>one</b> phrase you will use next time."}
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
                "Time where your teacher can <b>address specific questions</b> you have, and <b>address your specific language needs</b>.",
                "They are about responsive, adaptive teaching — lessons tailored to your needs.",
                "The best way to take part: <b>reflect on your learning needs</b> and <b>talk to your teacher</b> about them. Your feedback matters!"
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
                "Writing and refining AI prompts",
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
                    {"pts":200,"clue":"The best constraint to stop AI inventing facts about a reading.","answer":"What is “Use only the text I paste below”?"},
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
                {"id":"d5-2","label":"2 useful phrases I will use again","placeholder":"We’ve made some significant progress. · Use only the text I paste below.","rows":2},
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
                "I sent the follow-up message to my project group.",
                "I know my task and my deadline from our plan of action.",
                "I saved my best AI prompt.",
                "I told my teacher my top learning need."
              ]
            }
          ]
        }
      ]
    }
  ],
  extras: [],
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
    ["concede","to accept that another person’s point is true","I concede that dialogue alone may not be enough."]
  ]
};
