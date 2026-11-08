/* DEC10 · Week 4 · Day 2 (Tuesday) — Listen, mediate, write.
   There is NO Week 4 Teacher's Book. Built from the Week 4 student booklet (W4 D2 5A, 6B, 6C, 8A), the revised weekly map
   (W4 D2. 5 Listening to write 40 · 6 Mediation 80 · 7 Integrated Writing Practice Assessment 90 · 8 Integrated writing workshop HW)
   and the matching Teacher's Book lessons as patterns (W5 D2 4A Listening to write, W5 D2 5A Mediation, W5 D2 6A homework,
   W3 D2 7A Mediation). The listening (Alom, 2023, BBC The Climate Question) has no transcript in the course: every listening
   answer here comes from the model notes in the student booklet (6C Building understanding across texts).
   The practice assessment task itself is on Canvas and is not reproduced here.
   Protected texts are in sources.js and are never changed here. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w4d2",
  week: 4,
  day: 2,
  title: "Listen, mediate, write",
  duration: "About 3.5 hours + homework",
  question: "Eco-tourism promises to help nature, local people and the planet — can it really keep its promises?",
  questionKind: "Big question",
  questionLabel: "Today’s big question · it is the topic of this week’s essays",
  journey: "Listen to a BBC podcast and catch how speakers show their perspective, compare three sources on eco-tourism like a researcher, write the Integrated Writing Practice Assessment on Canvas, then read Sample essay 4.1 at home and prepare your own notes.",
  image: "dec10/assets/week4/hero-d10w4d2.svg",
  imageAlt: "Illustration: a tropical coast with a lagoon, palm trees and a forest. A podcast microphone with sound waves floats over the sea. On the beach an “ECO” sign hangs in front of a big resort with a golf flag and a blue shine over it. Three source cards are joined by arrows, and a student writes at a laptop with a timer.",
  finish: {"title":"Day 3","text":"Integrated writing workshop (2) on Sample essay 4.1 — then Seminar presentations and Opening Remarks"},
  goalShort: "your Integrated Writing Practice Assessment",
  sections: [
    {
      id: "listening",
      number: "01",
      code: "5A",
      minutes: 40,
      tone: "teal",
      art: "dec10/assets/week4/s-d2-listening.svg",
      title: "Listening to write",
      subtitle: "A BBC podcast: can tourism ever be good for the climate?",
      outcome: "You take notes on a podcast under idea headings, check them with test-style questions, and recognise the language speakers and writers use to show evaluation, attitude, opinion and stance.",
      activities: [
        {
          id: "a1",
          short: "Warm up",
          minutes: 5,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-a1.svg",
          title: "Warmer: Can tourism be good for the climate?",
          goal: "Say what you think before you listen — then bet on two numbers from the podcast.",
          blocks: [
            {
              type: "key",
              title: "From reading to listening",
              points: [
                "On Day 1 you read about eco-tourism and the Sustainable Development Goals (Spenceley &amp; Rylance, 2021).",
                "Today you listen to a <b>BBC podcast</b>: <i>The Climate Question — “Can tourism ever be good for the climate?”</i> (Alom, 2023).",
                "Your notes from today go into this week’s writing. Listen for <b>ideas you can use in an essay</b>."
              ]
            },
            {
              type: "scale",
              id: "a1-scale",
              title: "Where do you stand?",
              statement: "Tourism can be good for the climate.",
              ends: ["Strongly disagree","Strongly agree"],
              mid: "It depends"
            },
            {"type":"do","n":1,"who":"pair","text":"Show your partner where you put the slider. Give <b>one reason</b>. Then guess the two numbers below and bet your coins."},
            {
              type: "bet",
              id: "a1-bet",
              title: "Guess the numbers from the podcast",
              coins: 10,
              items: [
                {
                  q: "About how much of global CO2 emissions comes from tourism (travel, accommodation and food)?",
                  options: ["about 1%","about 3%","about 10%","about 30%"],
                  answer: "about 10%",
                  why: "The podcast says about 10% of global CO2 emissions come from tourism. Listen for it!"
                },
                {
                  q: "In 2021, how much of Costa Rica’s GDP (the value of everything a country produces) came from tourism?",
                  options: ["nearly 1%","nearly 5%","nearly 20%","nearly 50%"],
                  answer: "nearly 5%",
                  why: "Costa Rica is often called a model of sustainable tourism. You will hear this number."
                }
              ]
            },
            {
              type: "talk",
              title: "Discuss",
              prompts: [
                "Think of your last holiday. Which part had the biggest carbon footprint: the <b>travel</b>, the <b>hotel</b> or the <b>food</b>?",
                "Have you ever chosen an “eco” hotel or tour? Was it <b>really</b> eco? How did you know?"
              ]
            },
            {
              type: "language",
              title: "Useful language: a quick opinion",
              groups: [
                {"label":"Say what you think","phrases":["I’d say that …","In my view, …","I’m not sure, but I think …","It depends on …"]},
                {"label":"See both sides","phrases":["On the one hand, …; on the other hand, …","That’s true, but …","It’s not that simple, because …"]}
              ]
            }
          ]
        },
        {
          id: "a2",
          short: "Words",
          minutes: 6,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-a2.svg",
          title: "Vocabulary",
          goal: "Learn the key words you will hear in the podcast — then use them to talk.",
          blocks: [
            {
              type: "match",
              id: "a2-match",
              title: "Match the words to their meanings",
              hint: "Tap a word, then its meaning.",
              left: [
                "carbon footprint (n)",
                "carbon-intensive (adj)",
                "conservation (n)",
                "accommodation (n)",
                "unregulated (adj)",
                "legislation (n)",
                "penalty (n)",
                "loophole (n)"
              ],
              right: [
                "the total amount of CO2 that a person, product or activity produces",
                "producing a lot of CO2",
                "protecting nature, animals and plants",
                "a place to stay, such as a hotel or a lodge",
                "without rules or controls from a government",
                "laws made by a government",
                "a punishment, such as a fine, for breaking a rule",
                "a small mistake in a rule that lets people avoid it"
              ]
            },
            {
              type: "language",
              title: "Words that go together (collocations)",
              groups: [
                {"label":"carbon …","phrases":["reduce your carbon footprint","a carbon-intensive diet","carbon emissions"]},
                {"label":"rules","phrases":["introduce legislation","strict / weak regulation","close a loophole","face a penalty","get a certification"]}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Spin. Answer in <b>30 seconds</b> and use the word in bold. Your partner says “Nice!” when you use it correctly."},
            {
              type: "spinner",
              id: "a2-spin",
              title: "Talk with the new words",
              reels: [
                {
                  label: "Question",
                  items: [
                    "How could you reduce your <b>carbon footprint</b> on holiday?",
                    "Which foods are <b>carbon-intensive</b>? Do you eat them on holiday?",
                    "Should tourists pay extra for <b>conservation</b>? Why / why not?",
                    "What makes <b>accommodation</b> “green”?",
                    "Is tourism in your country <b>unregulated</b> or strictly controlled?",
                    "What <b>penalty</b> should a company get for false “eco” advertising?"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "a3",
          short: "Notes",
          minutes: 12,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-a3.svg",
          title: "Listening for detail: note-taking",
          goal: "Take notes on the podcast under five idea headings, then compare with a partner.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d2-notes-page.svg",
              size: "wide",
              alt: "A note page with three parts. On the right, the biggest part: notes under five idea headings — Background, Economic development, Environment, Tourists, Legislation — written with symbols like arrows and percent signs. On the left, a narrow column for questions after listening. At the bottom, a box for a one-line summary.",
              caption: "One page: <b>notes</b> while you listen, <b>questions</b> after, a <b>summary</b> at the end."
            },
            {
              type: "squeeze",
              id: "a3-sq",
              title: "Warm up your note-taking",
              hint: "Turn the sentence into short notes. Use symbols (→ ↑ ↓ %) and short forms.",
              items: [
                {"text":"Agrotourism can provide extra income for farmers while offering tourists educational experiences.","max":40,"model":"agrotour. → ↑ income farmers + edu. exp. for tourists"}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Read the five headings in the table (1 minute). What do you expect to hear for each one?"},
            {"type":"do","n":2,"who":"class","text":"Your teacher plays the recording. Take notes in the table — key words, numbers and symbols only."},
            {
              type: "listening",
              source: "Alom (2023) · BBC The Climate Question",
              title: "Can tourism ever be good for the climate?",
              videoId: "",
              audio: "",
              start: 0,
              clip: "played in class",
              transcripts: []
            },
            {
              type: "table",
              id: "a3-notes",
              title: "My notes · Alom (2023)",
              columns: ["Idea","My notes (key words, numbers, symbols)"],
              fixed: [
                "1. Background<br>What is eco-tourism? Where did it come from?",
                "2. Economic development<br>Money and jobs",
                "3. Environment<br>Tourism’s carbon footprint",
                "4. Tourists<br>Do they change after an eco-holiday?",
                "5. Legislation<br>Rules, labels, corruption"
              ]
            },
            {
              type: "talk",
              title: "Compare your notes with a partner",
              prompts: ["Did you catch the same numbers?","Which heading has the most notes? Which has the fewest?","What symbol or short form can you learn from your partner?"]
            },
            {
              type: "language",
              groups: [
                {
                  label: "Comparing notes",
                  phrases: ["What did you get for number 3?","I missed the part about … — did you catch it?","I wrote … Is that what you heard?","Let’s check that with the teacher."]
                }
              ]
            }
          ],
          answers: {
            title: "Suggested notes (from the model notes in your Student’s book)",
            items: [
              ["Background","Eco-tourism introduced in the 1970s: aimed to support conservation financially while minimising environmental impacts. However, its definition has remained vague. Similar concepts (sustainable and responsible tourism) confuse things further. The term doesn’t mean much anymore."],
              ["Economic development","In 2021, Costa Rica earned nearly 5% of its GDP from tourism."],
              ["Environment","10% of global CO2 emissions comes from tourism (travel, accommodation and food). Accommodation: heating and cooling constantly running. Food: a surprisingly large footprint — often more carbon-intense because it is high in protein (more meat, fish, seafood). Eco-tourism can have positive impacts for conservation, but the cost is its significant contribution to climate change."],
              ["Tourists","Research shows tourists do not really change their habits after an eco-tourism experience."],
              ["Legislation","Sustainable tourism (eco-tourism) is unregulated. Legislation is needed so sustainable tourism fulfils its purpose, with penalties for operators that falsely advertise packages. Corruption is rife: operators can pay to get a “sustainable tick”."]
            ]
          }
        },
        {
          id: "a4",
          short: "Check",
          minutes: 5,
          grouping: "Alone",
          art: "dec10/assets/week4/v/v-d10w4d2-a4.svg",
          title: "Building understanding",
          goal: "Use your notes — not your memory — to answer test-style questions.",
          blocks: [
            {
              type: "tip",
              text: "In the DEC <b>Listening and Reading to Write</b> assessment, your listening notes help you in the <b>writing task</b>. Good notes = good evidence."
            },
            {
              type: "limit",
              id: "a4-lim",
              title: "Questions 1–4 · Complete the notes",
              rule: "Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each space",
              max: 3,
              items: [
                {"q":"Eco-tourism was introduced in the ________.","accept":["1970s","the 1970s","1970’s","seventies","the seventies"],"model":"1970s","why":"“Eco-tourism introduced in the 1970s …”"},
                {"q":"In 2021, Costa Rica earned nearly ________ of its GDP from tourism.","accept":["5%","5 %","5 percent","5 per cent","five percent","five per cent"],"model":"5%","why":"“In 2021, Costa Rica earned nearly 5% of its GDP from tourism.”"},
                {"q":"About ________ of global CO2 emissions comes from tourism.","accept":["10%","10 %","10 percent","10 per cent","ten percent","ten per cent"],"model":"10%","why":"“10% of global CO2 emissions comes from tourism (travel, accommodation and food).”"},
                {"q":"Tourist food is often more carbon-intense because it is high in ________.","accept":["protein","proteins"],"model":"protein","why":"“… high in protein, more meat, more fish, more seafood.”"}
              ]
            },
            {
              type: "quiz",
              id: "a4-q",
              title: "Questions 5–7 · Choose the best answer",
              items: [
                {
                  q: "What does research say about tourists after an eco-tourism experience?",
                  options: ["They fly much less.","They do not really change their habits.","They only eat local food.","They become conservation volunteers."],
                  answer: "They do not really change their habits.",
                  why: "“Research shows tourists do not really change their habits after engaging in an eco-tourism experience.”"
                },
                {
                  q: "What is needed so that sustainable tourism fulfils its purpose?",
                  options: ["More tourists in protected areas","Cheaper flights to eco-lodges","Legislation, with penalties for false advertising","Fewer definitions of eco-tourism"],
                  answer: "Legislation, with penalties for false advertising",
                  why: "“Legislation is needed … and penalties are in place for operators that falsely advertise packages.”"
                },
                {
                  q: "What is the speaker’s overall view of eco-tourism and the climate?",
                  options: [
                    "It is always good for the climate.",
                    "It can help conservation, but it contributes significantly to climate change.",
                    "It has no effect on the climate.",
                    "It only harms local communities."
                  ],
                  answer: "It can help conservation, but it contributes significantly to climate change.",
                  why: "“Eco-tourism can have positive impacts for conservation. But the cost is its significant contribution to climate change.”"
                }
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-tourism-footprint.svg",
              size: "wide",
              alt: "Infographic: a globe with a slice of about one tenth marked tourism. Three icons show where tourism’s carbon comes from: travel (a plane), accommodation (a hotel with heating and cooling running) and food (a plate high in protein: meat, fish and seafood).",
              caption: "Open after the questions: tourism’s footprint in one picture."
            }
          ]
        },
        {
          id: "a5",
          short: "Perspective",
          minutes: 12,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-a5.svg",
          title: "Language Focus: Perspective",
          goal: "Recognise four ways speakers and writers show their perspective — and use them yourself.",
          blocks: [
            {
              type: "key",
              title: "Four ways to show your perspective",
              points: [
                "<b>Evaluation</b> — is an idea or a source good or bad? (<i>effective, relevant · problematic, biased</i>)",
                "<b>Attitude</b> — how does a writer or speaker feel about it? (<i>optimistic, sympathetic · critical, superficial</i>)",
                "<b>Opinion</b> — sentence starters that introduce what you think (<i>It is clear that …</i>)",
                "<b>Stance</b> — how sure are you, and how strong is the evidence? (<i>It is well established that … · According to a preliminary study …</i>)"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-perspective.svg",
              size: "wide",
              alt: "Four lenses in a row: Evaluation (a set of scales), Attitude (a face with a speech bubble), Opinion (a pen writing “It is clear that …”) and Stance (a dial from “cautious” to “confident”). Each lens has a positive side in green and a negative side in orange.",
              caption: "Each lens can be <b>positive</b> or <b>negative</b>."
            },
            {
              type: "model",
              title: "Language Focus: Perspective · Student’s book",
              rows: [
                ["Evaluation · positive","important · significant · effective · main · relevant · logical · unbiased"],
                ["Evaluation · negative","problematic · limited · biased · questionable · fails to … · neglects … · dismisses … · omits ..."],
                ["Attitude · positive","Thoughtful · Well organised · Elevated · Optimistic · sympathetic"],
                ["Attitude · negative","Critical · Unreliable · Contradictory · Superficial"],
                ["Opinion","What is written after the following sentence starters will indicate a positive or negative opinion: It is clear that … · Equally important … · For this/these reasons … · It is worthwhile to note that …"],
                ["Stance · positive","It is clear that ... · It is possible that ... · It is well established that ... · There is a general consensus about ... · According to recent research ..."],
                ["Stance · negative","It is unlikely that ... · Based on the limited data available ... · According to a preliminary study ..."]
              ]
            },
            {
              type: "sort",
              id: "a5-sort",
              title: "Positive or negative?",
              hint: "These evaluation and attitude words come from the table. Sort them.",
              buckets: [{"label":"Positive","letter":"+"},{"label":"Negative","letter":"−"}],
              items: [
                {"text":"significant","answer":0},
                {"text":"effective","answer":0},
                {"text":"relevant","answer":0},
                {"text":"unbiased","answer":0,"why":"un- + biased = fair. Careful with the prefix!"},
                {"text":"thoughtful","answer":0},
                {"text":"sympathetic","answer":0},
                {"text":"problematic","answer":1},
                {"text":"questionable","answer":1},
                {"text":"superficial","answer":1,"why":"Superficial = only on the surface, not deep."},
                {"text":"contradictory","answer":1},
                {"text":"neglects …","answer":1,"why":"“The study neglects …” = it does not look at something important."},
                {"text":"limited","answer":1}
              ]
            },
            {
              type: "sort",
              id: "a5-stance",
              title: "Stance: strong evidence or weak evidence?",
              hint: "Which phrases show the writer is confident? Which show the evidence is still weak?",
              buckets: [{"label":"Confident (positive)","letter":"↑"},{"label":"Careful (negative)","letter":"↓"}],
              items: [
                {"text":"It is well established that …","answer":0},
                {"text":"There is a general consensus about …","answer":0},
                {"text":"According to recent research …","answer":0},
                {"text":"It is clear that …","answer":0},
                {"text":"It is unlikely that …","answer":1},
                {"text":"Based on the limited data available …","answer":1,"why":"“Limited data” = not much evidence yet."},
                {"text":"According to a preliminary study …","answer":1,"why":"A preliminary study is an early, first study — not final."}
              ]
            },
            {
              type: "cloze",
              id: "a5-cl",
              title: "Write about the podcast with perspective language",
              options: ["It is well established that","significant","problematic","superficial","It is unlikely that"],
              text: "{{1}} tourism has a large carbon footprint. Alom (2023) gives a {{2}} figure: about 10% of global CO2 emissions. The definition of eco-tourism is still vague, which is {{3}} for travellers. Some “eco” labels may be only {{4}}, because operators can pay to get a sustainable tick. {{5}} one eco-holiday will change a tourist’s habits.",
              answers: ["It is well established that","significant","problematic","superficial","It is unlikely that"]
            },
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "<b>Mini-debate (2 minutes).</b> Partner A: “Tourism <b>can</b> be good for the climate.” Partner B: “Tourism <b>cannot</b> be good for the climate.” Speak for 1 minute each. Use <b>two</b> phrases from the table."
            },
            {
              type: "detect",
              id: "a5-dt",
              title: "Your perspective on the podcast",
              hint: "Write 2–3 sentences about one idea from Alom (2023). The lights turn on when you use each kind of perspective language.",
              checks: [
                {"label":"Evaluation","color":"#2f7d6b","any":["important","significant","effective","relevant","logical","unbiased","problematic","limited","biased","questionable","fails to","neglects","dismisses","omits"]},
                {"label":"Attitude","color":"#8a4f9e","any":["thoughtful","well organised","well organized","optimistic","sympathetic","critical","unreliable","contradictory","superficial"]},
                {"label":"Opinion / stance starter","color":"#3a58a0","any":["it is clear that","equally important","for this reason","for these reasons","it is worthwhile to note","it is possible that","it is well established","general consensus","according to recent research","it is unlikely that","based on the limited data","preliminary study"]},
                {"label":"The source","color":"#c4562f","any":["alom","the podcast","the speaker"]}
              ],
              items: [
                {
                  task: "My idea and my perspective:",
                  rows: 4,
                  placeholder: "Alom (2023) raises an important point about …",
                  model: "Alom (2023) raises an important point about the carbon footprint of tourism, which is about 10% of global CO2 emissions. It is clear that eco-tourism can help conservation. However, it is unlikely that tourists will change their habits after one eco-holiday, so legislation seems more effective than good intentions."
                }
              ]
            },
            {
              type: "language",
              title: "Extra: evaluating a source at university",
              groups: [
                {"label":"Positive","phrases":["… raises an important point about …","… offers a thoughtful / balanced view of …","… gives relevant evidence for …"]},
                {"label":"Negative","phrases":["However, this argument is limited because …","This claim seems questionable, as …","The podcast neglects / does not consider …"]},
                {"label":"Careful (hedging)","phrases":["This may suggest that …","It seems likely that …","There is some evidence that …"]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: "mediation",
      number: "02",
      code: "6A",
      minutes: 80,
      tone: "blue",
      art: "dec10/assets/week4/s-d2-mediation.svg",
      title: "Mediation",
      subtitle: "“Bluewashing” — and three sources on eco-tourism, side by side",
      outcome: "You read a text on bluewashing for gist and detail, organise ideas from three sources by idea (not by source), and explain the sources clearly to someone who has not read them.",
      activities: [
        {
          id: "b1",
          short: "Recap game",
          minutes: 8,
          grouping: "Teams",
          art: "dec10/assets/week4/v/v-d10w4d2-b1.svg",
          title: "Recap",
          goal: "Remember the reading and the podcast in a team quiz.",
          blocks: [
            {"type":"do","n":1,"who":"class","text":"Play in teams. Choose a box, read the clue and answer <b>as a question</b> (“What is …?”). You may look at your notes!"},
            {
              type: "jeopardy",
              id: "b1-jp",
              title: "Eco-tourism Jeopardy",
              teams: 4,
              seconds: 25,
              cols: [
                {
                  title: "Spenceley & Rylance (2021)",
                  clues: [
                    {"pts":100,"clue":"The year governments adopted the 2030 Agenda and the SDGs.","answer":"What is 2015?"},
                    {"pts":200,"clue":"The number of Sustainable Development Goals.","answer":"What is 17?"},
                    {"pts":300,"clue":"In many poor rural areas, farming and natural resources provide this share of jobs.","answer":"What is 55%?"},
                    {"pts":400,"clue":"The luxury ecotourism company working with communities in Tanzania and Mozambique.","answer":"What is andBeyond?"}
                  ]
                },
                {
                  title: "Alom (2023) podcast",
                  clues: [
                    {"pts":100,"clue":"The decade when eco-tourism was introduced.","answer":"What is the 1970s?"},
                    {"pts":200,"clue":"Tourism’s share of global CO2 emissions.","answer":"What is about 10%?"},
                    {"pts":300,"clue":"This country earned nearly 5% of its GDP from tourism in 2021.","answer":"What is Costa Rica?"},
                    {"pts":400,"clue":"Some operators can pay to get this.","answer":"What is a “sustainable tick”?"}
                  ]
                },
                {
                  title: "Language",
                  clues: [
                    {"pts":100,"clue":"The opposite of “regulated”: there are no rules.","answer":"What is unregulated?"},
                    {"pts":200,"clue":"In the Perspective table, “biased” is this kind of evaluation.","answer":"What is negative (evaluation)?"},
                    {"pts":300,"clue":"Complete the careful stance phrase: “According to a ________ study …”","answer":"What is preliminary?"},
                    {"pts":400,"clue":"A small mistake in a rule that lets people avoid it.","answer":"What is a loophole?"}
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Useful language: playing a team quiz",
              groups: [
                {"label":"Choose","phrases":["Can we have “Language” for 200, please?","Let’s try the podcast for 300."]},
                {"label":"Agree as a team","phrases":["I’m pretty sure it’s …","Are you sure? I think it might be …","Let’s go with …","Quick — check your notes!"]}
              ]
            }
          ]
        },
        {
          id: "b2",
          short: "Words",
          minutes: 12,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-b2.svg",
          title: "Vocabulary",
          goal: "Guess the meaning of new words from the reading — then use them to talk.",
          blocks: [
            {
              type: "key",
              title: "Bluewashing — the big idea of today’s reading",
              points: [
                "<b>Greenwashing</b> = a company says it is good for the environment, but it is not really.",
                "<b>Bluewashing</b> = a company hides behind unclear words like <i>sustainable</i> or <i>regenerative</i> development. It looks good — but it follows its own interests, not real ecotourism goals (Mielly, 2023)."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-bluewashing.svg",
              size: "wide",
              alt: "A big resort building is painted with a shiny blue “sustainable” label. Behind the label you can see what is hidden: profits going to a far-away company, bulldozers on forest land, a village pushed aside, and a lagoon under pressure.",
              caption: "Bluewashing: a shiny label on the outside, a different story behind it."
            },
            {"type":"do","n":1,"who":"pair","text":"Read each sentence from the article. Guess the meaning of the word in bold. Then match."},
            {
              type: "cards",
              title: "The words in their sentences · Mielly (2023)",
              items: [
                {"label":"notion · A","text":"The <b>notion</b> of ecotourism was introduced in the late 1970s."},
                {"label":"sheen · A","text":"It is used to give adventure-tourism packages a more “responsible” <b>sheen</b>."},
                {"label":"hijacked · A","text":"While it is no surprise that the original concept of ecotourism has been <b>hijacked</b>, it becomes more problematic when it blocks local communities from ancestral lands …"},
                {"label":"evicted · A","text":"… 16 villages on Rempang Island, Indonesia were recently <b>evicted</b> to build an eco-city with a solar panel factory."},
                {"label":"virtuous · B","text":"They imply that their work is <b>virtuous</b>, despite the reality."},
                {"label":"asserts · C","text":"The firm leading the project, IDB do Brasil, <b>asserts</b> that it has the required legal permits to proceed with the resort."},
                {"label":"irregularities · E","text":"The discovery of a number of <b>irregularities</b> as well as conflict between the community and the construction workers in April 2023 led local courts to suspend the project."},
                {"label":"lax · shirk · G","text":"Research has shown that <b>lax</b> reporting and the lack of enforcement mechanisms have led firms to <b>shirk</b> social sustainability and human rights requirements."}
              ]
            },
            {
              type: "match",
              id: "b2-match",
              title: "Match the words to their meanings",
              left: ["notion","sheen","hijacked","evicted","virtuous","asserts","irregularities","lax"],
              right: [
                "an idea or a belief",
                "a shiny surface; a good look on the outside",
                "taken over and used for a different purpose",
                "forced to leave their homes or land",
                "morally good",
                "says strongly that something is true",
                "things that are not correct or not legal",
                "not strict enough; careless"
              ]
            },
            {
              type: "flip",
              title: "Four more words from the article",
              hint: "Guess the meaning, then turn the card.",
              items: [
                {"front":"shirk (G)","back":"to avoid a duty you should do — “firms shirk human rights requirements”"},
                {"front":"scrutiny (F)","back":"careful and detailed checking — “more scrutiny on social problems”"},
                {"front":"precedent (G)","back":"an earlier decision that is used as an example for later cases — “a legal precedent”"},
                {"front":"backfire (G)","back":"to have the opposite result to the one you wanted"}
              ]
            },
            {
              type: "spinner",
              id: "b2-spin",
              title: "Talk with the new words",
              text: "Spin. Answer in 30 seconds and use the word. Your partner checks.",
              reels: [
                {
                  label: "Question",
                  items: [
                    "Can you think of a product with a “green” <b>sheen</b> that is not really green?",
                    "Has a good idea ever been <b>hijacked</b> by companies? Give an example.",
                    "Should people ever be <b>evicted</b> for a tourism project?",
                    "Which rules in your city are too <b>lax</b>?",
                    "When can a plan <b>backfire</b>? Give an example from tourism.",
                    "Which industries need more <b>scrutiny</b>? Why?"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "b3",
          short: "Gist",
          minutes: 8,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-b3.svg",
          title: "Reading for gist",
          goal: "Read fast for the main idea, then find where each piece of information is.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Open the reading (Student’s book, or the button below). Read <b>fast</b> — 4 minutes. Don’t stop for difficult words."},
            {"type":"sources","ids":["bluewash"]},
            {
              type: "quiz",
              id: "b3-q",
              title: "Gist check",
              items: [
                {
                  q: "What is the main purpose of the article?",
                  options: [
                    "To advertise new eco-resorts in Brazil and Indonesia",
                    "To show how ecotourism can be used against indigenous communities",
                    "To explain how companies get building permits",
                    "To prove that all tourism is bad for the climate"
                  ],
                  answer: "To show how ecotourism can be used against indigenous communities",
                  why: "Look at the title and paragraph B: the aim was “to explore the behaviour of multinational corporations toward indigenous peoples and their land rights”."
                },
                {
                  q: "How does the article end?",
                  options: [
                    "With some hope: a court victory shows attitudes can shift",
                    "With a plan to build more resorts",
                    "With an apology from the company",
                    "With advice for tourists"
                  ],
                  answer: "With some hope: a court victory shows attitudes can shift",
                  why: "Paragraph G: “However, there is reason to think that attitudes can shift over time. A 2019 victory in Bahía …”"
                }
              ]
            },
            {
              type: "grid",
              id: "b3-grid",
              title: "Which paragraph? (A–G)",
              columns: ["Paragraph"],
              options: ["A","B","C","D","E","F","G"],
              rows: [
                "How the idea of ecotourism has changed since the 1970s",
                "Villages evicted to build an “eco-city”",
                "The meaning of “bluewashing”",
                "The company says it has the legal permits",
                "The community leader did not know about the agreement",
                "Why the courts suspended the project",
                "The golf course, tourists and money the project expects",
                "Why the forest matters for culture, language and social order",
                "A legal victory that created a precedent"
              ],
              answers: [["A"],["A"],["B"],["C"],["D"],["E"],["E"],["F"],["G"]]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-eco-timeline.svg",
              size: "wide",
              alt: "A timeline. Late 1970s: ecotourism is introduced — ecologically responsible, promoting conservation, benefiting local people, connecting travellers with nature and culture. Today: “more a marketing term” — a responsible sheen on adventure packages, profits kept by international consortiums, and in the worst cases communities removed from their land.",
              caption: "Paragraph A in one picture: from an idea to a marketing term."
            },
            {
              type: "talk",
              prompts: ["Tell your partner the main idea of the article in <b>one sentence</b>. Start: <i>Mielly (2023) argues that …</i>","Did anything in the article surprise or shock you?"]
            }
          ]
        },
        {
          id: "b4",
          short: "Notes",
          minutes: 15,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-b4.svg",
          title: "Reading for detail: note-taking",
          goal: "Understand who says what in the Maricá case, and take short notes on each paragraph.",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week4/d2-marica-actors.svg",
              alt: "A map-like picture of the Maricá case in Brazil: a forest and a lagoon by the sea, a village, a planned resort with a golf flag, a town hall, a court house, a document marked C169 and a lawyer’s briefcase. Numbered markers sit on each one.",
              title: "Who is who in the Maricá case?",
              hint: "Tap each marker. Who are they, and what do they say or do?",
              size: "wide",
              spots: [
                {"x":70,"y":40,"label":"1","title":"IDB do Brasil · the Maraey resort","text":"The firm leading the resort project. It says it has the legal permits, that all licences came from a strict process, and that the 54-hectare project will be sustainable and inclusive.","color":"#c4562f"},
                {"x":30,"y":36,"label":"2","title":"Ka’Aguy Hovy Porã village","text":"Home of the Mbyá Guaraní community. They may be pushed aside for the resort. They found out how advanced the project was only when the bulldozers arrived.","color":"#2f7d6b"},
                {"x":19,"y":62,"label":"3","title":"Tupã Nunes · community leader","text":"He had no knowledge of the 2022 agreement signed with the chief (the cacique). In Guarani tradition, the cacique must share information with the community.","color":"#2f7d6b"},
                {"x":50,"y":20,"label":"4","title":"The local government","text":"Part of the agreement: it promised to find a public area where the community could stay permanently. The community did not know how involved it was.","color":"#3a58a0"},
                {"x":84,"y":72,"label":"5","title":"The courts","text":"In 2023 local courts suspended the project because of irregularities and conflict. Reasons included pressure on the water system and an illegal environmental licensing process.","color":"#8a4f9e"},
                {"x":52,"y":76,"label":"6","title":"ILO C169","text":"An international agreement on Indigenous and Tribal Peoples, signed by Spain and Brazil. It requires at least a dialogue with indigenous communities before projects that affect them.","color":"#b07d12"},
                {"x":33,"y":84,"label":"7","title":"Juliana Batista · human rights lawyer","text":"From the Brazilian NGO Instituto Socio-Ambiental. For her, indigenous land rights “take precedence over any other rights.”","color":"#a3416a"}
              ]
            },
            {
              type: "sort",
              id: "b4-who",
              title: "Who says it?",
              hint: "Mielly (2023) reports different voices. Is this the company’s view, or the view of others (the community, the courts or the writer)?",
              buckets: [{"label":"The company says","letter":"C"},{"label":"Others say","letter":"O"}],
              items: [
                {"text":"“We have the required legal permits to build the resort.”","answer":0},
                {"text":"“An agreement was signed with the cacique in December 2021.”","answer":0},
                {"text":"“A public area for the community was purchased in December 2022.”","answer":0,"why":"Maraey representatives said this — but declined to give more information."},
                {"text":"“All licences were obtained after a strict process with INEA.”","answer":0},
                {"text":"“The project will be sustainable and inclusive.”","answer":0},
                {"text":"“I had no knowledge of the 2022 agreement.”","answer":1,"why":"Tupã Nunes, the community leader."},
                {"text":"“Building permits here are unclear and not very strict.”","answer":1,"why":"The writer says this in paragraph C."},
                {"text":"“The environmental licensing process was illegal.”","answer":1,"why":"A reason listed by the Superior Court of Justice."},
                {"text":"“Indigenous land rights take precedence over any other rights.”","answer":1,"why":"Juliana Batista, human rights lawyer."}
              ]
            },
            {
              type: "language",
              title: "Reporting different voices",
              groups: [
                {"label":"The company","phrases":["The company asserts that …","IDB do Brasil maintains that …","Maraey representatives stated that …"]},
                {"label":"The other side","phrases":["However, the community leader points out that …","According to the court, …","For Juliana Batista, …"]},
                {"label":"The writer","phrases":["Mielly (2023) argues that …","The writer suggests that …","Mielly (2023) is critical of …"]}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Read the article again. Write <b>short notes</b> for each paragraph — here or in the <b>Notes</b> column of your Student’s book."},
            {
              type: "table",
              id: "b4-notes",
              title: "My notes · Mielly (2023)",
              columns: ["Paragraph","My notes"],
              fixed: ["A","B","C","D","E","F","G"]
            },
            {"type":"do","n":2,"who":"pair","text":"Close the text. Partner A explains paragraphs A–C, Partner B explains D–G — <b>from your notes only</b>. Use the reporting phrases above."}
          ],
          answers: {
            title: "Possible notes",
            items: [
              ["A","Ecotourism: late 1970s = responsible, conservation, local benefits · now = marketing term · little contact w/ locals · int. consortiums keep profits · worst: blocks/evicts communities, e.g. 16 villages, Rempang Is., Indonesia (eco-city + solar factory)"],
              ["B","Cause: questionable actions by multinationals · hide behind unclear terms (sustainable / regenerative) = bluewashing · June 2023 GEM researchers → dialogue w/ Mbyá Guaraní, Maricá, Brazil"],
              ["C","Maraey resort may push village aside · IDB do Brasil: has permits BUT permits unclear, corruption, legal conflicts · CEO: agreement w/ cacique Dec 2021; area bought Dec 2022 (no details)"],
              ["D","Leader Tupã Nunes: didn’t know of agreement · cacique didn’t share info → fractures in community · found out when bulldozers came · ILO C169 requires dialogue first"],
              ["E","Apr 2023 courts suspended project: irregularities, pressure on water system, illegal licensing · company: licences OK, sustainable & inclusive · BUT mall, golf course, 150–300k tourists/yr, ≈ US$197m → money at stake"],
              ["F","Forest = source of culture, language, social order · IFRS Foundation: more scrutiny of social issues · BUT multinationals tempted to continue business as usual"],
              ["G","Lax reporting + no enforcement → firms shirk human rights, use bluewashing (“logic of elimination”) · hope: 2019 Tupinamba victory in Bahía = legal precedent · lawyer J. Batista: land rights come first"]
            ]
          }
        },
        {
          id: "b5",
          short: "Three sources",
          minutes: 17,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-b5.svg",
          title: "Building understanding across texts",
          goal: "Put the three sources side by side, idea by idea — then find where they agree and disagree.",
          blocks: [
            {
              type: "key",
              title: "Mediation: organise by IDEA, not by source",
              points: [
                "A list of three summaries is not mediation.",
                "Mediation means you take <b>one idea</b> (for example, economic development) and show what <b>each source</b> says about it — where they <b>agree</b> and where they <b>disagree</b>.",
                "This table is your best friend for this week’s essays."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-three-sources.svg",
              size: "wide",
              alt: "A matrix. Three source cards across the top: Spenceley and Rylance (2021), Alom (2023) and Mielly (2023). Six idea rows down the side: background, economic development, environment protection, social benefits, tourist benefits, legislation. Green links show where sources agree and orange links show where they disagree.",
              caption: "Read <b>across</b> each row: that is where synthesis happens."
            },
            {"type":"sources","ids":["ecosdg","bluewash"]},
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Open your Student’s book (<b>Building understanding across texts</b>). Use your notes from Day 1, the podcast and today’s reading. Complete the <b>empty boxes</b> — here or in the book. Some boxes already have notes in your book."
            },
            {
              type: "table",
              id: "b5-tab",
              title: "Building understanding across texts",
              columns: ["Ideas","(Source 1) Spenceley and Rylance (2021)","(Source 2) Alom (2023)","(Source 3) Mielly (2023)"],
              fixed: ["1. Intro/ background","2. Economic development","3. Environment protection","4. Social benefits","5. Tourist benefits","6. Legislation"]
            },
            {"type":"do","n":2,"who":"pair","text":"Read across each row. Do the sources <b>agree</b>, <b>disagree</b> or <b>partly agree</b>? Sort the statements."},
            {
              type: "sort",
              id: "b5-sort",
              title: "Agree, disagree or partly?",
              buckets: [{"label":"Agree","letter":"="},{"label":"Partly","letter":"≈"},{"label":"Disagree","letter":"≠"}],
              items: [
                {"text":"Background: Alom (2023) and Mielly (2023) both say eco-tourism started in the 1970s — and that the term has lost its meaning or become a marketing term.","answer":0},
                {"text":"Legislation: Alom (2023) says eco-tourism is unregulated and corruption is rife; Mielly (2023) says weak reporting and enforcement allow bluewashing.","answer":0},
                {"text":"Environment: Spenceley & Rylance (2021) show eco-tourism protecting reefs and marine species; Alom (2023) agrees it can help conservation, but says it adds significantly to climate change.","answer":1},
                {"text":"Tourists: Spenceley & Rylance (2021) say visitors get educational and healthy experiences; Alom (2023) says tourists do not really change their habits.","answer":1,"why":"Different points about tourists: benefits for them vs. changes in their behaviour."},
                {"text":"Economy: Spenceley & Rylance (2021) say tourism creates jobs and income for local people; Mielly (2023) says international consortiums keep the profits.","answer":2},
                {"text":"Society: Spenceley & Rylance (2021) say CSR funds build clinics and hospitals; Mielly (2023) says projects can force communities off their ancestral lands.","answer":2}
              ]
            },
            {
              type: "language",
              title: "Language to synthesise sources",
              groups: [
                {"label":"Agree","phrases":["Both … and … suggest that …","… and … agree that …","This view is supported by …","Similarly, … (2023) points out that …"]},
                {"label":"Disagree","phrases":["While … (2021) argues that …, … (2023) shows that …","In contrast, … points out that …","… offers a more critical / optimistic view, …"]},
                {"label":"Partly","phrases":["… agrees that …, but adds that …","Although both sources …, they differ on …","… (2023) goes further, arguing that …"]}
              ]
            },
            {
              type: "detect",
              id: "b5-dt",
              title: "Write two synthesis sentences",
              hint: "Sentence 1: two sources that agree. Sentence 2: two sources that disagree. Paraphrase and cite both sources.",
              checks: [
                {"label":"Agree language","color":"#2f7d6b","any":["both","similarly","agree","likewise","also","supported by"]},
                {"label":"Contrast language","color":"#c4562f","any":["while","whereas","however","in contrast","on the other hand","although","but"]},
                {"label":"Two citations","color":"#3a58a0","any":["/(\\(?\\d{4}\\)?)[\\s\\S]*\\d{4}/"]},
                {"label":"Perspective word","color":"#8a4f9e","any":["critical","optimistic","problematic","significant","limited","questionable","effective","it is clear","it is unlikely"]}
              ],
              items: [
                {
                  task: "My two sentences:",
                  rows: 5,
                  placeholder: "Both Alom (2023) and Mielly (2023) suggest that …",
                  model: "Both Alom (2023) and Mielly (2023) suggest that eco-tourism is poorly regulated, which allows operators to use “sustainable” labels without real action. While Spenceley and Rylance (2021) argue that tourism creates jobs and income for local communities, Mielly (2023) offers a more critical view, showing that international consortiums often keep the profits."
                }
              ]
            }
          ],
          answers: {
            title: "Model notes from your Student’s book",
            items: [
              ["1 · Alom (2023)","Eco-tourism introduced in the 1970s: aimed to support conservation financially while minimizing environmental impacts. However, its definition has remained vague. Similar concepts (sustainable and responsible tourism) confuse things further. The term doesn’t mean much anymore."],
              ["1 · Mielly (2023)","Eco-tourism started in the 1970s: designed to be environmentally friendly, support conservation efforts, benefit local communities, and reconnect travelers with nature and culture. However, it has become a marketing term to add a “responsible” appeal to tourism packages."],
              ["2 · Spenceley and Rylance (2021)","Agro-tourism supports local food production for hotels and restaurants and boosts sales of local products to tourists. Agro tourism provides extra income for farmers while offering tourists educational experiences. 55% of employment comes from farming and natural resources use in many rural areas, especially in poor communities in developing countries. Tourism offers other sources of income. Effective management should address broader local economic and social issues, ensuring that poor communities have diverse income opportunities. Tourism activities like whale shark viewing and manta ray diving create jobs for local people. Sports tourism helps generate revenue for conservation and shows the positive impact of biodiversity on local communities e.g. in Africa."],
              ["2 · Alom (2023)","In 2021, Costa Rica earned nearly 5% of its GDP from tourism."],
              ["2 · Mielly (2023)","International consortiums keep the profits for themselves. Economic concerns take prevalence over social and environmental concerns (project is forecasted to generate 197 million US dollars)."],
              ["3 · Spenceley and Rylance (2021)","In Africa: eco-tourism is supporting efforts to stop overfishing and the killing of endangered marine species, to protect reefs, and to teach local communities how to manage their fishing resources better and fish responsibly."],
              ["3 · Alom (2023)","10% of global CO2 emissions comes from tourism (travel, accommodation and food). Accommodation carbon footprint: heating and cooling constantly running. Food is a surprisingly large carbon footprint: food consumed in tourism is often more carbon intense because it’s high in protein — more meat, more fish, more seafood. Eco-tourism can have positive impacts for conservation. But the cost is its significant contribution to climate change."],
              ["3 · Mielly (2023)","Project suspended for “incessant pressures” on the lagoon’s system and water table and the “illegality of the environmental licensing process”. Developers maintain the resorts would be sustainable and inclusive."],
              ["4 · Spenceley and Rylance (2021)","Many tourism businesses use their CSR funds to help develop rural clinics and hospitals or to provide essential medical equipment, e.g. the Africa Foundation. Small community-managed marine protected areas can provide safe spaces where fish can breed and grow. This supports local fishing, which many communities rely on for food."],
              ["4 · Mielly (2023)","Eco-tourism projects can block local communities from ancestral lands or even involve their forced relocation, e.g. the eviction of 16 villages on Rempang Island, Indonesia to build a solar panel factory and “eco-city”. The International Financial Reporting Standards Foundation has recently called for reporting on societal and social issues. However, multinationals will minimize risks and maintain their usual business practices. For Juliana Batista, human rights lawyer for the Brazilian NGO Instituto Socio-Ambiental, indigenous land rights “take precedence over any other rights.”"],
              ["5 · Spenceley and Rylance (2021)","Agro tourism provides extra income for farmers while offering tourists educational and enriching experiences. Visiting places with lots of biodiversity can prevent health issues like obesity, heart disease, depression, and anxiety."],
              ["5 · Alom (2023)","Research shows tourists do not really change their habits after engaging in an eco-tourism experience."],
              ["5 · Mielly (2023)","Interactions with local residents are limited."],
              ["6 · Alom (2023)","Sustainable tourism (eco-tourism) is unregulated. Legislation is needed to make sure sustainable tourism fulfils its purpose and penalties are in place for operators that falsely advertise packages. Corruption is rife: operators can pay to get a sustainable tick."],
              ["6 · Mielly (2023)","Corruption has been a frequent problem in the past and legal battles often happen between local and state governments, and national courts, and even divide indigenous families. Communities are not aware deals are done until it is too late. Research indicates that weak reporting and insufficient enforcement have allowed neglect of social sustainability and human rights, with “bluewashing” strategies used to appear more responsible without substantial action."],
              ["Empty in the book","1 · Spenceley and Rylance (2021) · 4 · Alom (2023) · 6 · Spenceley and Rylance (2021): these boxes have no model notes. Write your own — or note that the source does not say much about this idea (that is useful to know too!)."]
            ]
          }
        },
        {
          id: "b6",
          short: "Role play",
          minutes: 20,
          grouping: "Groups of 3",
          art: "dec10/assets/week4/v/v-d10w4d2-b6.svg",
          title: "Synthesising role play – a briefing for the minister",
          goal: "Explain all three sources to someone who has not read them — clearly, fairly and quickly.",
          blocks: [
            {
              type: "sticky",
              color: "blue",
              title: "The situation",
              text: "<p>A government plans a new <b>eco-resort</b> near a protected coastline. An indigenous community lives on the land. In 10 minutes the <b>Minister for Tourism</b> has a press conference.</p><p>The Minister asks the research adviser: <b>“Will this eco-resort really achieve the goals of eco-tourism? What does the research say?”</b></p>"
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d2-briefing-room.svg",
              alt: "A government briefing room. The Minister sits at a desk with a clock showing ten minutes to the press conference. The research adviser stands with three source folders. An observer sits at the side with a checklist. Through the window you can see a coastline with a planned resort.",
              title: "Choose your role",
              hint: "Tap each person to read the role card.",
              size: "wide",
              spots: [
                {"x":30,"y":52,"label":"A","title":"Role A · The Minister for Tourism","text":"You want good news for the press: jobs, money and a “green” image. But you do not want a scandal later. Ask short, direct questions. Push the adviser for a clear answer: yes or no?","color":"#3a58a0"},
                {"x":62,"y":46,"label":"B","title":"Role B · The research adviser","text":"You have read Spenceley and Rylance (2021), Alom (2023) and Mielly (2023). Give a fair, balanced answer. Use at least two sources in every answer, and say what each source says. Do not read your notes aloud — explain them.","color":"#2f7d6b"},
                {"x":86,"y":60,"label":"C","title":"Role C · The observer","text":"Listen and tick the checklist below. At the end, give the adviser one thing they did well and one thing to improve. Then swap roles.","color":"#b07d12"}
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"group","text":"Choose roles (A, B, C). The adviser has <b>2 minutes</b> to look at the table from Activity 5."},
                {"who":"group","text":"Role play for <b>4 minutes</b>. The Minister spins the wheel for new questions."},
                {"who":"group","text":"The observer gives feedback (1 minute). Then <b>swap roles</b> and play again — everyone is the adviser once."}
              ]
            },
            {
              type: "chat",
              title: "How it can start",
              right: "Adviser",
              lines: [
                ["Minister","I have ten minutes. Will this resort really be good for the environment and the community?"],
                ["Adviser","<mark>The short answer is: it depends.</mark> <mark>On the one hand,</mark> Spenceley and Rylance (2021) show that eco-tourism can create jobs and protect marine areas."],
                ["Minister","Good. So I can say it’s a green project?"],
                ["Adviser","<mark>I’d be careful with that.</mark> Alom (2023) points out that eco-tourism is unregulated, and Mielly (2023) <mark>gives examples of</mark> communities being evicted for so-called eco projects."],
                ["Minister","So what do you recommend?"],
                ["Adviser","<mark>Based on all three sources, I’d recommend</mark> strict rules, real dialogue with the community, and clear penalties for false eco-labels."]
              ]
            },
            {
              type: "spinner",
              id: "b6-spin",
              title: "The Minister’s questions",
              text: "Minister: spin when you need a new question.",
              reels: [
                {
                  label: "Ask",
                  items: [
                    "Will the resort bring money and jobs to local people?",
                    "Is tourism really bad for the climate? Give me a number.",
                    "What is “bluewashing”? Could people accuse us of it?",
                    "Do eco-tourists actually change their behaviour?",
                    "What must we do before we build on indigenous land?",
                    "Give me ONE sentence I can say to the press."
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Useful language for the briefing",
              groups: [
                {"label":"Adviser · explain sources","phrases":["The research shows that …","According to …, …, whereas … argues that …","All three sources agree that …","Only Mielly (2023) mentions …"]},
                {"label":"Adviser · be balanced","phrases":["The short answer is: it depends.","On the one hand, …; on the other hand, …","I’d be careful with that, because …","Based on all three sources, I’d recommend …"]},
                {"label":"Minister · ask and push","phrases":["So, in plain words, …?","Can you give me an example?","Is that a yes or a no?","What’s the risk for us?"]},
                {"label":"Observer · feedback","phrases":["You used two sources really well when …","One thing to improve: try to …","Next time, maybe paraphrase … instead of reading it."]}
              ]
            },
            {
              type: "checklist",
              id: "b6-check",
              title: "Observer’s checklist · tick when the adviser …",
              items: [
                "names the source (author and year)",
                "uses two sources in one answer",
                "explains in their own words (paraphrases)",
                "shows where sources agree or disagree",
                "uses perspective language (e.g. problematic, it is unlikely that …)",
                "gives a clear, balanced recommendation"
              ]
            },
            {
              type: "tip",
              text: "<b>Keep your table!</b> You will use these notes in the practice assessment this afternoon and in tomorrow’s writing workshop."
            }
          ]
        }
      ]
    },
    {
      id: "iwpa",
      number: "03",
      code: "7A",
      minutes: 90,
      tone: "amber",
      art: "dec10/assets/week4/s-d2-iwpa.svg",
      title: "Integrated Writing Practice Assessment",
      subtitle: "On Canvas · exam conditions",
      outcome: "You plan and write an integrated essay from sources on your own, in the time given, using the steps you have practised.",
      activities: [
        {
          id: "c1",
          short: "Get ready",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-c1.svg",
          title: "Before you start: prepare and plan",
          goal: "Remember the steps, set two goals, and have your essay toolkit ready in your head.",
          blocks: [
            {
              type: "key",
              title: "Today: the Integrated Writing Practice Assessment",
              points: [
                "The task is on <b>Canvas</b>. Your teacher tells you when to open it and how long you have.",
                "It is <b>practice</b> — but write as if it is the real assessment. Then your feedback will really help you.",
                "You get feedback on it in <b>Week 5</b>, and you use that feedback to set your next goals."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-iwa-route.svg",
              size: "wide",
              alt: "A winding path with six stops: 1 Analyse the question, 2 Take notes from the sources, 3 Choose your position, 4 Plan, 5 Write, 6 Check. A small student walks along the path with a backpack.",
              caption: "Six steps. Don’t skip the first and the last!"
            },
            {
              type: "order",
              id: "c1-order",
              title: "Put the steps in order",
              items: [
                "Analyse the question: topic words, limiting words, what it asks you to do",
                "Take notes from the sources — only what helps you answer the question",
                "Choose your position (your answer to the question)",
                "Plan: thesis + one main idea for each body paragraph + evidence from the sources",
                "Write: paraphrase, cite each source, link your paragraphs",
                "Check: re-read, fix confusing or off-topic parts, check the word count"
              ],
              ends: ["First","Last"],
              why: "Your position comes from the evidence — so take notes first, then decide. Always leave a few minutes to check."
            },
            {
              type: "flip",
              title: "Five reminders",
              hint: "Read the front. Can you say the reminder? Turn to check.",
              items: [
                {"front":"Answer THE question","back":"Your thesis answers the exact question — every paragraph goes back to it."},
                {"front":"Paraphrase","back":"Use your own words. Do not copy long parts of the sources."},
                {"front":"Cite","back":"Every idea from a source gets the author and year: (Mielly, 2023) or Mielly (2023) argues …"},
                {"front":"One idea, one paragraph","back":"Start each body paragraph with a clear topic sentence."},
                {"front":"Show your perspective","back":"Evaluate the evidence: effective, problematic, it is unlikely that …"}
              ]
            },
            {
              type: "language",
              title: "Essay toolkit (read it now — not during the test)",
              groups: [
                {"label":"Thesis","phrases":["This essay argues that …, because …","While …, this essay argues that …","… is likely / unlikely to …, mainly because …"]},
                {"label":"Topic sentences","phrases":["One major reason why … is …","A further / more serious problem is …","Despite these benefits, …"]},
                {"label":"Using sources","phrases":["As … (2023) points out, …","According to …, …","… (2021) shows that …, whereas … (2023) argues that …"]},
                {"label":"Concession","phrases":["Proponents of … argue that …","Admittedly, …","It is true that …; however, …"]},
                {"label":"Conclusion","phrases":["In conclusion, …","Overall, the evidence suggests that …","For … to …, it is essential to …"]}
              ]
            },
            {
              type: "talk",
              title: "Two minutes with a partner — before the test",
              prompts: ["Tell your partner <b>one thing you will do well</b> today.","Tell your partner <b>one thing you will be careful about</b> (e.g. time, paraphrasing, citations)."]
            },
            {
              type: "fields",
              title: "My two goals for today",
              fields: [
                {"id":"c1-goal1","label":"I will do this well:","rows":1,"placeholder":"e.g. I will write a clear thesis that answers the question."},
                {"id":"c1-goal2","label":"I will be careful about:","rows":1,"placeholder":"e.g. I will leave 5 minutes to check."}
              ]
            }
          ]
        },
        {
          id: "c2",
          short: "Write it",
          minutes: 75,
          grouping: "Alone",
          art: "dec10/assets/week4/v/v-d10w4d2-c2.svg",
          title: "Write the practice assessment",
          goal: "Use the steps on your own, under exam conditions.",
          blocks: [
            {
              type: "key",
              title: "Exam conditions",
              tone: "warn",
              points: [
                "The task is on <b>Canvas</b>. Follow the instructions there and from your teacher.",
                "Work <b>alone</b> and in <b>silence</b>. <b>No AI tools</b> of any kind.",
                "Close this page and all other tabs before you start."
              ]
            },
            {
              type: "checklist",
              id: "c2-start",
              title: "Before you start",
              items: [
                "I have opened the practice assessment on Canvas and read the instructions.",
                "I know how much time I have and when I must submit.",
                "I know the word limit.",
                "I have closed all other tabs and apps, including AI tools.",
                "I remember my two goals from Activity 1."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-iwa-clock.svg",
              size: "wide",
              alt: "A clock face divided into five coloured parts: analyse the question, notes, plan, write (the biggest part) and check. Next to it a small hourglass.",
              caption: "A suggested way to share your time — writing gets the biggest slice."
            },
            {
              type: "model",
              title: "A suggested time plan",
              rows: [
                ["about 10%","<b>Analyse the question</b> — topic words, limiting words, rhetorical functions."],
                ["about 25%","<b>Read and take notes</b> — only what helps answer the question. Keep the author and year with each note."],
                ["about 15%","<b>Choose your position and plan</b> — thesis + one main idea per body paragraph + evidence."],
                ["about 40%","<b>Write</b> — paraphrase; cite each source; link your paragraphs."],
                ["about 10%","<b>Check</b> — does every paragraph answer the question? Fix confusing or off-topic parts."]
              ],
              note: "This is a suggestion only. Always follow the timing in the Canvas instructions."
            },
            {
              type: "model",
              title: "What your writing is assessed on",
              rows: [
                ["Argumentation","A clear position that answers the question, with logical arguments supported by the sources."],
                ["Use of Sources","The sources are synthesised (connected) and paraphrased, with correct citations and different voices."],
                ["Connection of Ideas","Clear structure: paragraphs and sentences link well (topic sentences, linking words)."],
                ["Vocabulary","A good range of academic words and collocations, with suitable hedging."],
                ["Grammar","A range of sentence structures with few errors, so the meaning is clear."]
              ],
              note: "These are the criteria names from your writing rubric, in plain words. Your teacher shows you the full rubric."
            }
          ]
        },
        {
          id: "c3",
          short: "Reflect",
          minutes: 5,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-c3.svg",
          title: "After you submit",
          goal: "Notice how it went while you still remember.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"<b>After</b> you submit on Canvas, open this page again. Answer quickly — 2 minutes."},
            {
              type: "scale",
              id: "c3-scale",
              title: "How do you feel about your essay?",
              statement: "I followed my plan and finished on time.",
              ends: ["Not at all","Completely"],
              mid: "Partly"
            },
            {
              type: "fields",
              title: "Quick reflection",
              fields: [
                {"id":"c3-good","label":"One thing that went well","rows":2,"placeholder":"My thesis was clear because …"},
                {"id":"c3-hard","label":"One thing that was hard","rows":2,"placeholder":"I ran out of time when …"},
                {"id":"c3-next","label":"Next time, I will …","rows":1,"placeholder":"… spend less time on notes."}
              ]
            },
            {
              type: "talk",
              title: "When everyone has finished",
              prompts: ["Which step took the longest for you? Why?","Did you reach your two goals?"]
            },
            {
              type: "language",
              groups: [
                {"label":"Talking about a test","phrases":["It went better than I expected.","I struggled with …","I managed to … , but I didn’t have time to …","Next time I’m going to …"]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: "workshop",
      number: "04",
      code: "8A",
      minutes: 40,
      tone: "green",
      art: "dec10/assets/week4/s-d2-workshop.svg",
      title: "Integrated writing workshop Homework",
      subtitle: "Sample essay 4.1 — read it, map it, and get your own notes ready",
      outcome: "You analyse an essay question, see how Sample essay 4.1 uses three sources to build an argument, and organise your own notes and position for tomorrow’s workshop.",
      activities: [
        {
          id: "d1",
          short: "The question",
          minutes: 8,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d2-d1.svg",
          title: "Analyse the question",
          goal: "Understand exactly what the question asks before you read the sample.",
          blocks: [
            {
              type: "sticky",
              color: "green",
              title: "The question · Sample essay 4.1",
              text: "<p><b>To what extent are the goals of ecotourism likely to be achieved?</b></p>"
            },
            {
              type: "quiz",
              id: "d1-q",
              title: "Answer these questions about the essay question",
              items: [
                {
                  q: "What are the key <b>content words</b>? (They tell you where to focus your reading.)",
                  options: ["the goals of ecotourism · achieved","To what extent · are","likely · to be","ecotourism · tourism in general"],
                  answer: "the goals of ecotourism · achieved",
                  why: "The essay is about the goals of ecotourism and whether they are achieved."
                },
                {
                  q: "Which word <b>limits</b> the focus of your answer?",
                  options: ["likely","goals","extent","ecotourism"],
                  answer: "likely",
                  why: "“Likely” asks you to look at the future — will the goals probably be achieved? — not only at what has happened."
                },
                {
                  q: "What does <b>“To what extent …?”</b> ask you to do?",
                  options: [
                    "Describe ecotourism",
                    "Say how much — evaluate the degree, from “not at all” to “completely”",
                    "List the goals of ecotourism",
                    "Give your personal travel story"
                  ],
                  answer: "Say how much — evaluate the degree, from “not at all” to “completely”",
                  why: "You need a position on a scale, supported by evidence from the sources."
                },
                {
                  q: "Which <b>rhetorical functions</b> does a good answer need?",
                  options: [
                    "Narrating and describing",
                    "Evaluating, arguing, and working with different voices (sources)",
                    "Defining only",
                    "Comparing two countries"
                  ],
                  answer: "Evaluating, arguing, and working with different voices (sources)",
                  why: "You evaluate how likely success is, argue your position, and support it with the sources."
                }
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-extent-scale.svg",
              size: "wide",
              alt: "A long scale for “To what extent?” with four points: not at all, to a small extent, to a large extent, completely. Under each point is a thesis starter, for example “are unlikely to be achieved because …” and “are largely likely to be achieved, provided that …”.",
              caption: "“To what extent” = choose your place on the scale, then prove it."
            },
            {
              type: "language",
              title: "Thesis frames for “To what extent …?”",
              groups: [
                {"label":"Not likely","phrases":["This essay argues that the goals of … are unlikely to be achieved, because …","… will probably fall short of its goals, mainly due to …"]},
                {"label":"Partly","phrases":["While …, its goals are only partly likely to be achieved, as …","… can achieve some of its goals, but only if …"]},
                {"label":"Likely","phrases":["… is largely likely to achieve its goals, provided that …","There is strong evidence that … can achieve its goals, as …"]}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"<b>Say it.</b> Record a one-sentence answer to the question on your phone. Use one thesis frame. Listen back: is your position clear?"}
          ]
        },
        {
          id: "d2",
          short: "Sample 4.1",
          minutes: 12,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d2-d2.svg",
          title: "Sample essay 4.1",
          goal: "Read the sample, find the writer’s position, and spot how the writer shows perspective.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Read <b>Sample essay 4.1</b> in your Student’s book (or tap the button). Read it once for the big picture."},
            {"type":"sources","ids":["s41"]},
            {
              type: "figure",
              src: "dec10/assets/week4/d2-essay-map.svg",
              size: "wide",
              alt: "The shape of Sample essay 4.1 as five stacked blocks: Introduction with the thesis, Body 1 (the other side: the benefits), Body 2 (problem 1), Body 3 (problem 2), and Conclusion. Small source tags — S&R 2021, Alom 2023, Mielly 2023 — sit next to the body paragraphs.",
              caption: "Five paragraphs: one for the other side, two for the writer’s reasons."
            },
            {
              type: "scale",
              id: "d2-scale",
              title: "Where is the writer’s position?",
              statement: "The goals of ecotourism are likely to be achieved.",
              ends: ["Not at all","Completely"],
              mid: "Partly",
              answer: 20,
              why: "The thesis (Introduction, sentence 4): “… while ecotourism harbors the potential for positive impact, its goals are <b>unlikely</b> to be achieved, at least in the foreseeable future …”. Not 0: the writer accepts some potential."
            },
            {
              type: "spot",
              id: "d2-spot",
              label: "Perspective spotter",
              title: "Body paragraph 2 · find the writer’s evaluation",
              hint: "Tap the words that show the writer’s own evaluation or stance (positive or negative). Careful — some highlighted words just report a source or link ideas.",
              paras: [
                "¹Despite the potential benefits, [[however]], ecotourism frequently [[*falls short of its ideals]] due to a lack of [[*stringent]] regulations. ²[[As Mielly (2023) points out]], terms such as sustainable and regenerative tourism lack clear definitions and regulatory enforcement, which means that tour operators can use the terms freely and [[*falsely]], without being subject to penalties. ³The writer acknowledges that regulations to enforce sustainable practices have met with success, [[such as]] in the case of Bahia. ⁴However, government regulations or market-based certification can also be [[*insufficiently strict]] or contain loopholes (Alom, 2023). ⁵These regulatory challenges are [[further compounded]] by 'bluewashing', whereby ecotourism is used more to promote the interests of corporations than to promote [[*genuine]] conservation efforts (Mielly, 2023). ⁶Such practices [[*clearly undermine]] the goals of ecotourism."
              ]
            },
            {
              type: "talk",
              title: "Think, then say it aloud",
              prompts: ["In your own words, what are the writer’s <b>two reasons</b>?","Do you agree with the writer’s position? Why / why not?"]
            }
          ]
        },
        {
          id: "d3",
          short: "Notes column",
          minutes: 10,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d2-d3.svg",
          title: "Notes: how the writer uses the sources",
          goal: "Map each paragraph: its main idea, its sources and its perspective language.",
          blocks: [
            {
              type: "match",
              id: "d3-match",
              title: "What does each sentence do?",
              hint: "Tap a sentence from Sample 4.1, then its job.",
              left: [
                "“This essay argues, therefore, that while ecotourism harbors the potential for positive impact, its goals are unlikely to be achieved …”",
                "“Proponents of ecotourism argue that it provides a realistic sustainable alternative to conventional tourism.”",
                "“As Mielly (2023) points out, terms such as sustainable and regenerative tourism lack clear definitions …”",
                "“The writer acknowledges that regulations to enforce sustainable practices have met with success …”",
                "“Such practices clearly undermine the goals of ecotourism.”",
                "“Only through such comprehensive and enforced measures can ecotourism reconcile its ideals with its goals.”"
              ],
              right: [
                "States the writer’s position (the thesis)",
                "Introduces the other side’s view (a concession)",
                "Reports a source as evidence",
                "Shows that the source is balanced",
                "Gives the writer’s own evaluation",
                "Ends with a final message / recommendation"
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Complete the table — here or in the <b>Notes</b> column of your Student’s book. Short notes only."},
            {
              type: "table",
              id: "d3-tab",
              title: "Sample essay 4.1 · my notes",
              columns: ["Paragraph","Main idea (one line)","Sources used","Perspective language"],
              fixed: ["Introduction","Body 1","Body 2","Body 3","Conclusion"]
            }
          ],
          answers: {
            title: "Possible notes",
            items: [
              ["Introduction","Context: tourism’s impacts → ecotourism as responsible tourism · Thesis: goals unlikely to be achieved (inadequate regulation + social & environmental costs) · Sources: Alom, 2023; Mielly, 2023; Spenceley & Rylance, 2021 · Language: potential, unlikely, undermined, inadequate"],
              ["Body 1","The other side: ecotourism has real benefits (SDGs, agrotourism, marine-protected areas, Costa Rica) · Sources: Spenceley & Rylance (2021), Alom (2023) · Language: realistic, positive, successfully, evident"],
              ["Body 2","Reason 1: lack of strict regulation + bluewashing · Sources: Mielly (2023), Alom (2023) · Language: falls short, stringent, falsely, insufficiently strict, genuine, clearly undermine"],
              ["Body 3","Reason 2: harm to local and indigenous people (displacement, habitat loss) · Sources: Mielly (2023); also Alom (2023) and Spenceley & Rylance (2021) for the benefits · Language: deeply affecting, under the guise of, manipulated, significant barrier"],
              ["Conclusion","Restates position + recommendation: robust, enforced regulation and lower social & environmental impacts · Language: important goals, essential, robust, undesirable, only through"]
            ]
          }
        },
        {
          id: "d4",
          short: "My notes",
          minutes: 10,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d2-d4.svg",
          title: "Prepare your notes for the question",
          goal: "Organise your evidence by position, choose your own answer, and say it aloud.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Go back to your notes from today (Activity 5 in Mediation). Put the evidence from each source into the right column."
            },
            {
              type: "table",
              id: "d4-tab",
              title: "My evidence for: To what extent are the goals of ecotourism likely to be achieved?",
              columns: ["Source","Goals LIKELY to be achieved","Goals UNLIKELY to be achieved","It depends / only partly"],
              fixed: ["Spenceley & Rylance (2021)","Alom (2023)","Mielly (2023)"]
            },
            {
              type: "choose",
              id: "d4-pos",
              title: "My position (for now)",
              options: ["Likely to be achieved","Only partly / it depends","Unlikely to be achieved"]
            },
            {
              type: "fields",
              title: "My thesis",
              fields: [
                {"id":"d4-thesis","label":"My thesis in one sentence","rows":2,"placeholder":"This essay argues that the goals of ecotourism are … because …"},
                {"id":"d4-reasons","label":"My two main reasons (one per body paragraph)","rows":2,"placeholder":"1 … (source: …) · 2 … (source: …)"}
              ]
            },
            {
              type: "do",
              n: 2,
              who: "alone",
              text: "<b>Speak it.</b> Record a 1-minute answer to the question. Give your position and two reasons, and name a source for each reason."
            },
            {
              type: "tip",
              text: "<b>Tomorrow (Day 3):</b> you analyse Sample 4.1 in the Integrated writing workshop. Bring this table and your thesis. You do <b>not</b> need to write paragraphs yet."
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["ecotourism","tourism that aims to protect nature and help local people","The notion of ecotourism was introduced in the late 1970s."],
    ["carbon footprint","the total amount of CO2 that a person, product or activity produces","Food is a surprisingly large part of tourism’s carbon footprint."],
    ["carbon-intensive","producing a lot of CO2","Meat and seafood are carbon-intensive foods."],
    ["unregulated","without rules or controls from a government","Sustainable tourism is still largely unregulated."],
    ["legislation","laws made by a government","Legislation is needed to stop false eco-advertising."],
    ["loophole","a small mistake in a rule that lets people avoid it","Some certifications contain loopholes."],
    ["bluewashing","hiding behind unclear words like “sustainable” to look responsible without real action","Bluewashing allows corporations to pursue their own interests."],
    ["evict","to force people to leave their home or land","16 villages were evicted to build an eco-city."],
    ["lax","not strict enough; careless","Lax reporting lets firms avoid human rights rules."],
    ["precedent","an earlier decision that is used as an example later","The 2019 victory created a legal precedent."],
    ["perspective","the way a speaker or writer sees and judges something","Evaluation, attitude, opinion and stance show your perspective."],
    ["stance","how sure you are about a claim, and how strong the evidence is","“It is well established that …” shows a confident stance."],
    ["synthesis","connecting ideas from several sources, idea by idea, to make your own point","Synthesis means organising by idea, not by source."],
    ["to what extent","a question that asks “how much?” — you answer with a position on a scale","To what extent are the goals of ecotourism likely to be achieved?"]
  ]
};
