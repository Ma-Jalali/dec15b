/* DEC10 · Week 2 · Day 3 — Present, check in, open.
   Built from the Week 2 Teacher's Book, ordered by the teacher weekly map (version 16.10.2026): each Day page holds the parts
   TAUGHT that weekday. Taught on WEDNESDAY: 10A Presentation skills · 23A STAR moment · 12A AST: Introducing the presentation feedback tool · 17A Seminar Discussion Opening Remarks group 1 (90 min with PebblePad set-up) · 14A AST: Self-regulation and monitoring Homework.
   Protected texts are in sources.js and are never changed here. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w2d3",
  week: 2,
  day: 3,
  title: "Present, check in, open",
  duration: "About 4 hours + homework",
  question: "How do you turn your research into a talk people can follow — and open a discussion that makes people think?",
  questionKind: "Big question",
  questionLabel: "Today’s big question · you will need it for your Research Summary presentation and the Interactive Presentation",
  journey: "Give a 2-minute talk with no preparation and turn research into one clear slide. Tell your teacher what you need in a STAR moment, meet the presentation feedback tool, set up PebblePad — then watch Group 1’s Opening Remarks and write questions that start real discussion. Tonight: plan your seminar with SMART goals.",
  image: "dec10/assets/week2/hero-d10w2d3.svg",
  imageAlt: "Illustration: a student presents a slide called “Impacts of Digital Devices”. The audience asks “What do you mean by people?” and “Why is that important?”. Around them: a 2-minute stopwatch, a peer feedback form and a SMART plan card.",
  finish: {"title":"Day 4","text":"Presentation skills, good questions, pronunciation — and Groups 1 and 2 present"},
  goalShort: "your Research Summary presentation and the Interactive Presentation",
  sections: [
    {
      id: "present",
      number: "01",
      code: "10A",
      minutes: 60,
      tone: "clay",
      art: "dec10/assets/week2/s-present.svg",
      title: "Presentation skills",
      subtitle: "From research to a slide you can say",
      outcome: "Choose the right information from your research, paraphrase it into your talk and put it on a clear slide — and say it clearly.",
      activities: [
        {
          id: "p1",
          short: "Homework check",
          minutes: 5,
          grouping: "Pair",
          title: "Presentation skills Homework follow-up",
          goal: "Remember the shape of a good presentation.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"How did the homework go? Tell your partner in one sentence."},
            {
              type: "do",
              n: 2,
              who: "pair",
              text: "Answer the homework question together: <b>What do you notice about the structure of the introduction, the body paragraphs and the conclusion?</b>"
            },
            {"type":"fields","fields":[{"id":"p1-notice","label":"What we noticed","rows":2,"placeholder":"The body follows …"}]},
            {
              type: "toggle",
              title: "Check your answer",
              hint: "Open after you talk",
              blocks: [
                {
                  type: "figure",
                  src: "dec10/assets/week2/d3-pres-shape.svg",
                  size: "wide",
                  alt: "The shape of a presentation: the introduction gives an outline, the body follows the same order, and the conclusion rephrases the main points.",
                  caption: "Outline → same order → rephrased."
                },
                {
                  type: "key",
                  title: "The answer",
                  points: [
                    "The main sections follow <b>the same order as the outline</b> in the introduction.",
                    "In the conclusion, these sections are <b>rephrased</b> (said again in new words)."
                  ]
                }
              ]
            },
            {"type":"do","n":3,"who":"pair","text":"Where does each phrase go? Sort them, then say each one aloud — like a presenter."},
            {
              type: "sort",
              id: "p1-sort",
              title: "Presenter phrases",
              hint: "Put each phrase in the right part of the talk.",
              buckets: [{"label":"Introduction","letter":"I"},{"label":"Body","letter":"B"},{"label":"Conclusion","letter":"C"}],
              items: [
                {"text":"Good morning, everyone. My name is …","answer":0},
                {"text":"Today I’m going to talk about …","answer":0},
                {"text":"This topic matters because …","answer":0},
                {"text":"First, I’ll look at … Then … Finally …","answer":0},
                {"text":"Let’s start with …","answer":1},
                {"text":"Moving on to my second point, …","answer":1},
                {"text":"For example, …","answer":1},
                {"text":"That brings me to the end of my talk.","answer":2},
                {"text":"To sum up, I talked about …","answer":2},
                {"text":"Thank you for listening. Are there any questions?","answer":2}
              ]
            }
          ]
        },
        {
          id: "p2",
          short: "2-minute talk",
          minutes: 10,
          grouping: "Groups of 3–4",
          title: "Mini-presentations: 2 minutes, no preparation!",
          goal: "Give a short talk with a clear structure — and ask the speaker a question.",
          blocks: [
            {
              type: "key",
              title: "Don’t worry",
              points: [
                "The topic is very easy (and not academic).",
                "You speak for <b>2 minutes</b>. Your group times you.",
                "Use the short structure below and some presenter phrases."
              ]
            },
            {
              type: "cards",
              title: "The short structure",
              numbered: true,
              items: [
                {
                  label: "Introduction",
                  text: "Greeting the audience · Introduce yourself · Introduce the topic · Importance / relevance of the topic (if appropriate)"
                },
                {"label":"Body","text":"2–4 main points"},
                {"label":"Conclusion","text":"Signalling the end of the presentation · Repeat the topic · Thank the audience · Ask the audience for questions"}
              ]
            },
            {
              type: "spinner",
              id: "p2-spin",
              title: "Spin your topic",
              text: "Presenter: spin, then start talking straight away. Choose again only if you really have nothing to say.",
              reels: [{"label":"Topic","items":["My family","My city/town","My favourite food","My favourite music","My favourite film"]}]
            },
            {
              type: "language",
              title: "Phrases to connect your ideas",
              groups: [
                {
                  label: "Start",
                  phrases: ["Hi everyone, I’m … and today I’d like to tell you about …","I chose this topic because …","I’ll talk about three things: …"]
                },
                {"label":"Move on","phrases":["First of all, …","Another thing I love is …","On top of that, …","The last point is …"]},
                {"label":"Finish","phrases":["So, that’s all from me.","To wrap up, …","Thanks for listening! Does anyone have a question?"]}
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"alone","text":"<b>Presenter:</b> talk for 2 minutes. Follow the structure. Use some phrases from the box."},
                {"who":"group","text":"<b>Audience:</b> listen. Notice the structure and the phrases. At the end, ask <b>one follow-up question</b>."},
                {"who":"group","text":"Change presenter. Everyone speaks once."}
              ]
            },
            {
              type: "language",
              title: "Audience: follow-up questions",
              groups: [
                {
                  label: "Ask the speaker",
                  phrases: ["You said … — could you tell us more about that?","Why is … so special for you?","What’s the best thing about …?","How often do you …?"]
                }
              ]
            },
            {
              type: "talk",
              title: "Activity 2 · When you have all finished",
              prompts: [
                "How did you feel when giving your mini-presentation?",
                "Were you able to follow the suggested structure and speak for 2 minutes?",
                "Can you offer your groupmates any feedback on their presentation structure and phrases?"
              ]
            },
            {
              type: "scale",
              id: "p2-feel",
              title: "Be honest",
              statement: "Speaking for 2 minutes with no preparation felt …",
              ends: ["Very stressful","Easy and fun"],
              mid: "OK"
            }
          ]
        },
        {
          id: "p3",
          short: "Research check",
          minutes: 5,
          grouping: "Pair",
          title: "Group Discussion: Research",
          goal: "Say how your research is going — and get help if you are stuck.",
          blocks: [
            {
              type: "talk",
              title: "Discuss these questions with your partner",
              prompts: [
                "How have you been going with the preparations and research for your group summary presentations?",
                "Do you find it difficult to find sources? Why?",
                "Do you find it interesting or enjoyable?",
                "How can you incorporate research into a presentation?"
              ]
            },
            {
              type: "language",
              title: "Talking about your progress",
              groups: [
                {
                  label: "Going well",
                  phrases: ["I’m on track. I’ve already found …","It’s going well — I’ve finished my summary.","I found a really useful source about …"]
                },
                {"label":"Not so well","phrases":["I’m a bit behind with …","I’m struggling to find sources on …","I’m not sure if my source is reliable."]},
                {"label":"Offer help","phrases":["Have you tried searching for …?","Why don’t you use the library database?","I can send you the link to …"]}
              ]
            },
            {
              type: "fields",
              fields: [{"id":"p3-next","label":"One thing I must do for my research before my group presents","rows":2,"placeholder":"Before … I will …"}]
            }
          ]
        },
        {
          id: "p4",
          short: "Step 1 · Choose",
          minutes: 5,
          grouping: "Pair",
          title: "Step 1: Choose Appropriate Information from your Research",
          goal: "Pick the information that really helps your topic.",
          blocks: [
            {
              type: "model",
              title: "Imagine you’re going to give a presentation on this topic",
              text: "<b>The environmental effects of using digital devices</b>"
            },
            {
              type: "key",
              title: "Three questions to ask about every sentence",
              numbered: true,
              points: [
                "Is it about <b>my topic</b> (here: the environmental effects of devices)?",
                "Does it give <b>evidence</b> — a number, a fact or an example?",
                "Will my <b>audience</b> understand it quickly?"
              ]
            },
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Read the four sentences from this week’s sources. Which <b>two</b> would be most useful? Sort them, then explain your choice to your partner."
            },
            {
              type: "sort",
              id: "p4-sort",
              title: "Useful for this presentation?",
              buckets: [{"label":"Most useful","letter":"✓"},{"label":"Less useful","letter":"✗"}],
              items: [
                {
                  text: "a. “If we were to divide the 1.7 billion tonnes of greenhouse gas emissions estimated to be produced in the manufacture and running of digital technologies between all internet users around the world, it means each of us is responsible for 414kg of carbon dioxide a year” (Griffiths, 2020).",
                  answer: 0,
                  why: "On topic and strong evidence: two clear numbers about the effects of digital technology."
                },
                {
                  text: "b. “To reduce the carbon footprint, it is preferable to “follow the sun” to where solar energy is more abundant, while to reduce the water footprint, it is preferable to “unfollow the sun” to avoid high-temperature hours in the day” (United Nations, 2024).",
                  answer: 1,
                  why: "Interesting, but it is about where to run AI computing — not the effects of using our devices."
                },
                {
                  text: "c. “Torbjorn Fredrickson, head of the e-commerce and digital economy branch,….. confesses he’s not a fan of social media platforms himself” (UN Trade and Development, 2024).",
                  answer: 1,
                  why: "A personal detail about the guest. No evidence about the environment."
                },
                {
                  text: "d. “There’s no doubt that by applying digital technologies, we can perhaps reduce the energy use by making things more efficient. We can go to teleworking, to avoid transportation. We can go into e-commerce, to avoid travelling by car, to shop and so on and so forth” (UN Trade and Development, 2024).",
                  answer: 0,
                  why: "On topic: a positive effect of devices, with examples (teleworking, e-commerce)."
                }
              ]
            },
            {
              type: "talk",
              prompts: [
                "Which sentence was the easiest to reject? Why?",
                "Think of your own research: which sentence in your notes is your “sentence a” (the best evidence)?"
              ]
            }
          ]
        },
        {
          id: "p5",
          short: "Step 2 · Paraphrase",
          minutes: 15,
          grouping: "Pair",
          title: "Step 2: Paraphrase / Synthesise Information into your Presentation",
          goal: "Put a source into your own words and fit it into your talk.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Review the techniques for paraphrasing. Say an example for each card before you turn it."},
            {
              type: "flip",
              title: "Four paraphrasing techniques",
              items: [
                {"front":"Use synonyms","back":"reduce → <b>minimise</b> · teleworking → <b>working from home</b>"},
                {"front":"Change word forms","back":"efficient (adj.) → <b>the efficiency</b> (noun)"},
                {"front":"Change the order of the information","back":"Start with the result, then give the reason — or the other way round."},
                {
                  front: "Identify relationships between ideas and express them with different linking words",
                  back: "“it means” → <b>which means that</b> · “to avoid” → <b>can be reduced by</b>"
                }
              ]
            },
            {
              type: "do",
              n: 2,
              who: "pair",
              text: "Choose one of the two useful sentences (a or d) and write a paraphrase. Then <b>swap</b> with another pair: which extract did they paraphrase? Which techniques did they use?"
            },
            {
              type: "para",
              id: "p5-para",
              title: "Your paraphrase",
              hint: "Do ONE of them (or both if you are fast). Keep the numbers and the citation.",
              items: [
                {
                  text: "“If we were to divide the 1.7 billion tonnes of greenhouse gas emissions estimated to be produced in the manufacture and running of digital technologies between all internet users around the world, it means each of us is responsible for 414kg of carbon dioxide a year” (Griffiths, 2020).",
                  strategy: "Try: word forms + linking words",
                  keep: ["1.7 billion","414kg","Griffiths"],
                  model: "Every year, global production and use of digital technology emits 1.7 billion tonnes of greenhouse gases, which means that on average, individual internet users are responsible for 414kg of carbon dioxide emissions (Griffiths, 2020)."
                },
                {
                  text: "“There’s no doubt that by applying digital technologies, we can perhaps reduce the energy use by making things more efficient. We can go to teleworking, to avoid transportation. We can go into e-commerce, to avoid travelling by car, to shop and so on and so forth” (UN Trade and Development, 2024).",
                  strategy: "Try: synonyms + word forms",
                  keep: ["UN Trade and Development"],
                  model: "The efficiency that digital technology brings can minimise energy use, for instance emissions created by car use can be reduced by working from home or shopping online (UN Trade and Development, 2024)."
                }
              ]
            },
            {"type":"do","n":3,"who":"pair","text":"Now read the two paraphrases. Complete the gaps so the meaning is the same as the original."},
            {
              type: "cloze",
              id: "p5-gap",
              title: "Complete the paraphrases",
              options: ["414kg","minimise","online","1.7 billion tonnes","car","average"],
              text: "a) Every year, global production and use of digital technology emits {{1}} of greenhouse gases, which means that on {{2}}, individual internet users are responsible for {{3}} of carbon dioxide emissions (Griffiths, 2020).\n\nb) The efficiency that digital technology brings can {{4}} energy use, for instance emissions created by {{5}} use can be reduced by working from home or shopping {{6}} (UN Trade and Development, 2024).",
              answers: ["1.7 billion tonnes","average","414kg","minimise","car","online"]
            },
            {
              type: "do",
              n: 4,
              who: "pair",
              text: "Where would the two paraphrases best fit in this student’s talk? Read the student’s ideas (1–4), then answer."
            },
            {
              type: "model",
              title: "Presentation extract (student’s ideas)",
              list: [
                "Digital devices have had various benefits for our lives and our world.",
                "However, with these benefits there have also been various disadvantages.",
                "Many people don’t think about the negative impact that their time spent using a phone or other digital device is having on the environment.",
                "These harmful gases can cause irreparable damage to our environment."
              ]
            },
            {
              type: "language",
              title: "Linking phrases",
              groups: [
                {
                  label: "From the Teacher’s Book",
                  phrases: ["A 2020 study by Griffiths estimated that….","Recent research from the UN Trade and Development Department proposed that…"]
                }
              ]
            },
            {
              type: "quiz",
              id: "p5-fit",
              items: [
                {
                  q: "Paraphrase <b>b</b> (efficiency, working from home) fits best after sentence …",
                  options: ["1","2","3","4"],
                  answer: "1",
                  why: "Sentence 1 is about the <b>benefits</b> of devices. Paraphrase b gives evidence for a benefit."
                },
                {
                  q: "Paraphrase <b>a</b> (1.7 billion tonnes, 414kg) fits best after sentence …",
                  options: ["1","2","3","4"],
                  answer: "3",
                  why: "Sentence 3 talks about the negative impact on the environment; paraphrase a gives the numbers. Then sentence 4 (“These harmful gases …”) follows naturally."
                },
                {
                  q: "Which linking phrase introduces paraphrase <b>a</b>?",
                  options: ["A 2020 study by Griffiths estimated that….","Recent research from the UN Trade and Development Department proposed that…"],
                  answer: "A 2020 study by Griffiths estimated that….",
                  why: "Paraphrase a comes from Griffiths (2020)."
                }
              ]
            },
            {
              type: "toggle",
              title: "The finished extract",
              hint: "Open after the quiz",
              blocks: [
                {
                  type: "model",
                  title: "Presentation Extract",
                  list: [
                    "Digital devices have had various benefits for our lives and our world. <b><i>Recent research from the UN Trade and Development Department proposed that…</i> …the efficiency that digital technology brings can minimise energy use, for instance emissions created by car use can be reduced by working from home or shopping online.</b>",
                    "However, with these benefits there have also been various disadvantages.",
                    "Many people don’t think about the negative impact that their time spent using a phone or other digital device is having on the environment. <b><i>A 2020 study by Griffiths estimated that….</i> …every year, global production and use of digital technology emits 1.7 billion tonnes of greenhouse gases, which means that on average, individual internet users are responsible for 414kg of carbon dioxide emissions.</b>",
                    "These harmful gases can cause irreparable damage to our environment."
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Go further: more ways to bring a source into your talk",
              groups: [
                {
                  label: "Reporting a study",
                  phrases: ["According to Griffiths (2020), …","Research by … shows / suggests that …","A recent report by … found that …","As … point out, …"]
                },
                {
                  label: "Strong or careful?",
                  phrases: ["shows · proves · found (sure)","suggests · estimates · claims (less sure)","proposed that … (an idea, not a fact)"]
                }
              ]
            },
            {
              type: "tip",
              text: "Need more cause-and-effect language for your slide sentences? Open your Student’s book, Language Reference, page 112. For compare-and-contrast language, see page 113."
            },
            {
              type: "detect",
              id: "p5-write",
              title: "Your turn: one source, one sentence",
              hint: "Write ONE sentence for your own Research Summary presentation that brings in a source. The lights turn on as you use each part.",
              checks: [
                {
                  label: "Reporting phrase",
                  color: "#3a58a0",
                  any: ["according to","estimated","found that","shows that","suggests that","proposed that","research","study","report"]
                },
                {"label":"Citation (year)","color":"#2f9a63","any":["/(19|20)\\d{2}/"]},
                {
                  label: "Cause or effect",
                  color: "#d99a1e",
                  any: ["because","due to","leads to","lead to","causes","cause","result","which means","reduce","increase"]
                }
              ],
              items: [
                {
                  task: "Use a source from your own research (or from this week’s sources).",
                  rows: 3,
                  placeholder: "A 2024 report by … found that …",
                  model: "According to a 2020 study by Griffiths, the production and use of digital technology leads to 1.7 billion tonnes of greenhouse gases every year."
                }
              ]
            }
          ]
        },
        {
          id: "p6",
          short: "Step 3 · Slides",
          minutes: 5,
          grouping: "Pair",
          title: "Step 3: Add the Information to your Slides",
          goal: "Choose the slide that helps the audience — and say why.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Look at the three slides. Which one (A, B or C) would be best for our student’s presentation? Why?"},
            {
              type: "tabs",
              title: "Three slides, one message",
              tabs: [
                {
                  label: "Slide A",
                  blocks: [
                    {
                      type: "figure",
                      src: "dec10/assets/week2/d3-slide-a.svg",
                      size: "wide",
                      alt: "Slide A: a photo of a person with a phone and two long paragraphs of text."
                    }
                  ]
                },
                {
                  label: "Slide B",
                  blocks: [
                    {
                      type: "figure",
                      src: "dec10/assets/week2/d3-slide-b.svg",
                      size: "wide",
                      alt: "Slide B: two columns, positive and negative impacts, short bullet points with arrows and references."
                    }
                  ]
                },
                {
                  label: "Slide C",
                  blocks: [
                    {
                      type: "figure",
                      src: "dec10/assets/week2/d3-slide-c.svg",
                      size: "wide",
                      alt: "Slide C: a script font, bright green and red boxes with pale text, smiley emojis and no references."
                    }
                  ]
                }
              ]
            },
            {
              type: "bet",
              id: "p6-bet",
              title: "Place your bet",
              proof: "Bet big only when you can say WHY.",
              items: [
                {
                  q: "Which slide is best?",
                  options: ["Slide A","Slide B","Slide C"],
                  answer: "Slide B",
                  why: "It just has bullet points of key details and includes referencing."
                }
              ]
            },
            {
              type: "sort",
              id: "p6-sort",
              title: "What did you notice?",
              hint: "Which slide does each comment describe?",
              buckets: [{"label":"Slide A","letter":"A"},{"label":"Slide B","letter":"B"},{"label":"Slide C","letter":"C"}],
              items: [
                {"text":"Too much text — the presenter will just read it.","answer":0},
                {"text":"The text distracts the audience from the speaker.","answer":0},
                {"text":"Bullet points of key details only.","answer":1},
                {"text":"References are on the slide.","answer":1},
                {"text":"A strange heading font that is difficult to read.","answer":2},
                {"text":"The colours don’t contrast enough (pink on red).","answer":2},
                {"text":"Inappropriate emojis.","answer":2},
                {"text":"No references.","answer":2}
              ]
            },
            {
              type: "cards",
              title: "Go further: five rules for academic slides",
              numbered: true,
              items: [
                {"label":"Key words, not sentences","text":"About 6 lines, about 6 words per line. YOU say the rest."},
                {"label":"Cite on the slide","text":"(Griffiths, 2020) under the point it supports."},
                {"label":"Dark on light","text":"Dark text on a light background is easiest to read."},
                {"label":"One simple font","text":"Same font and colours for every group member."},
                {"label":"Pictures that explain","text":"Arrows, charts and icons — not decoration."}
              ]
            }
          ]
        },
        {
          id: "p7",
          short: "Step 4 · Say it",
          minutes: 5,
          grouping: "Pair",
          title: "Step 4: Say it!",
          goal: "Deliver the slide and cite the sources as you speak.",
          blocks: [
            {"type":"do","n":1,"who":"class","text":"Listen to your teacher model the slide. Notice how the sources are mentioned."},
            {
              type: "model",
              title: "Your teacher’s model (beginning)",
              text: "<i>Looking now at the impacts of digital devices – we can see both positive and negative impacts. The positive impact is in terms of efficiency and reduced energy use. For example, UN Trade and Development have found that ....</i>"
            },
            {
              type: "language",
              title: "Citing when you speak",
              groups: [
                {
                  label: "Say the source",
                  phrases: ["UN Trade and Development have found that …","According to Griffiths, in 2020, …","A study from 2020 by Griffiths estimated that …"]
                },
                {"label":"Guide the eyes","phrases":["As you can see on the left, …","If we look at the negative side, …","This arrow shows that …"]},
                {"label":"Explain the number","phrases":["That is about … per person.","In other words, …","This means that …"]}
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"pair","text":"A: deliver slide B (about 1 minute). Remember to cite the source in your delivery."},
                {"who":"pair","text":"B: listen and tick the checklist. Then give one piece of feedback. Swap."}
              ]
            },
            {
              type: "checklist",
              id: "p7-check",
              title: "My partner …",
              meter: ["ticked","Great delivery!"],
              items: [
                "looked at the audience, not the slide",
                "said both sources (UN Trade and Development and Griffiths)",
                "explained the arrows in words",
                "used a phrase to move from positive to negative",
                "did not read every word"
              ]
            }
          ]
        },
        {
          id: "p8",
          short: "Sounds",
          minutes: 20,
          grouping: "Pair",
          title: "Pronunciation: Individual Sounds (Optional Activity)",
          goal: "Hear and say vowel sounds, “th” and consonant clusters from today’s extract.",
          blocks: [
            {
              type: "key",
              title: "Why?",
              points: [
                "Another important part of giving a presentation is <b>speaking clearly</b>.",
                "Listen to your teacher, then repeat. Your teacher chooses which parts your class needs."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d3-vowels.svg",
              size: "wide",
              alt: "Four vowels: /iː/ seat, cheap, feel (long, smile); /ɪ/ sit, chip, fill (short, relaxed); /e/ men, beg, bet (short, half open); /æ/ man, bag, bat (short, wide open).",
              caption: "1 · Vowel sounds. /iː/ is a longer sound."
            },
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Say the pairs: <b>seat – sit</b>, <b>cheap – chip</b>, <b>feel – fill</b>, <b>men – man</b>, <b>beg – bag</b>, <b>bet – bat</b>. Your partner points to the word they hear."
            },
            {"type":"do","n":2,"who":"pair","text":"These words come from the presentation extract. What is the sound of the <u>underlined</u> vowel? Sort them."},
            {
              type: "sort",
              id: "p8-vow",
              title: "Sort the vowel sounds",
              buckets: [{"label":"/iː/ seat","letter":"iː"},{"label":"/ɪ/ sit","letter":"ɪ"},{"label":"/e/ men","letter":"e"},{"label":"/æ/ man","letter":"æ"}],
              items: [
                {"text":"m<u><b>ea</b></u>ns","answer":0},
                {"text":"r<u><b>e</b></u>cent","answer":0},
                {"text":"th<u><b>e</b></u>se","answer":0},
                {"text":"d<u><b>i</b></u>gital","answer":1},
                {"text":"em<u><b>i</b></u>ts","answer":1},
                {"text":"indiv<u><b>i</b></u>dual","answer":1},
                {"text":"b<u><b>e</b></u>nefits","answer":2},
                {"text":"<u><b>e</b></u>nergy","answer":2},
                {"text":"<u><b>e</b></u>very","answer":2},
                {"text":"d<u><b>a</b></u>mage","answer":3},
                {"text":"<u><b>a</b></u>verage","answer":3},
                {"text":"g<u><b>a</b></u>ses","answer":3}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d3-th.svg",
              size: "wide",
              alt: "Bath (noun) has a voiceless /θ/: no sound from the throat. Bathe (verb) has a voiced /ð/: the throat vibrates.",
              caption: "2 · Two “th” sounds. Put your fingers on your throat: can you feel it buzz?"
            },
            {
              type: "sort",
              id: "p8-th",
              title: "Voiceless /θ/ or voiced /ð/?",
              hint: "Say each word with your fingers on your throat.",
              buckets: [{"label":"/θ/ voiceless (bath)","letter":"θ"},{"label":"/ð/ voiced (bathe)","letter":"ð"}],
              items: [
                {"text":"<u><b>th</b></u>e","answer":1},
                {"text":"<u><b>th</b></u>at","answer":1},
                {"text":"wi<u><b>th</b></u>","answer":1},
                {"text":"<u><b>th</b></u>ink","answer":0},
                {"text":"o<u><b>th</b></u>er","answer":1},
                {"text":"Griffi<u><b>th</b></u>s","answer":0},
                {"text":"<u><b>th</b></u>ese","answer":1},
                {"text":"<u><b>th</b></u>eir","answer":1}
              ]
            },
            {
              type: "cards",
              title: "3 · Consonant clusters (two or more consonant sounds together)",
              items: [
                {"label":"Griffiths","text":"<b>Gr</b>iffi<b>ths</b> · /gr/ and /θs/ — difficult? Me too!"},
                {"label":"proposed","text":"<b>pr</b>opo<b>sed</b> · /pr/ and /zd/"},
                {"label":"reduced","text":"redu<b>ced</b> · /st/"},
                {"label":"lives","text":"li<b>ves</b> · /vz/"},
                {"label":"brings","text":"<b>br</b>i<b>ngs</b> · /br/ and /ŋz/ (say ‘ngz’)"}
              ]
            },
            {
              type: "flash",
              id: "p8-flash",
              title: "Tongue twister challenge",
              text: "A 2020 study by Griffiths estimated that these gases damage the environment.",
              seconds: 6,
              writer: "Speaker",
              reader: "Listener"
            },
            {
              type: "do",
              n: 3,
              who: "pair",
              text: "Say the challenge sentence three times, faster each time. Your partner listens for <b>th</b>, <b>Gr</b> and the long <b>ee</b> in <i>these</i>."
            },
            {
              type: "cards",
              title: "4 · Practice at home",
              items: [
                {
                  label: "Phonetic Chart",
                  text: "<a href=\"https://english-dashboard.pearson.com/CDN/ProdStore/GOLDXP/A2/resources/07_Expanded_Wordlist/Phonetic_Chart/index.html\" target=\"_blank\" rel=\"noopener\">Open the Phonetic Chart</a> and practise making the sounds of English by yourself."
                },
                {
                  label: "Learn English Sounds Right (British Council)",
                  text: "Practise individual sounds. <a href=\"https://apps.apple.com/us/app/learnenglish-sounds-right/id387588128\" target=\"_blank\" rel=\"noopener\">Apple</a> · <a href=\"https://play.google.com/store/apps/details?id=com.britishcouncil.phonemicchart&hl=en_AU\" target=\"_blank\" rel=\"noopener\">Android</a>"
                },
                {
                  label: "ELSA Speak",
                  text: "Words and short dialogues with feedback. <a href=\"https://apps.apple.com/us/app/elsa-speak-english-learning/id1083804886\" target=\"_blank\" rel=\"noopener\">Apple</a> · <a href=\"https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_AU\" target=\"_blank\" rel=\"noopener\">Android</a>"
                },
                {"label":"Canvas","text":"Watch the pronunciation videos in the Communication Resources section of Canvas."}
              ]
            }
          ]
        }
      ]
    },
    {
      id: "star",
      number: "02",
      code: "23A",
      minutes: 60,
      tone: "amber",
      art: "dec10/assets/week2/s-star.svg",
      title: "STAR© moment",
      subtitle: "Mid-week check: your questions, your needs",
      outcome: "You have actively participated with your teacher in addressing your learning needs.",
      activities: [
        {
          id: "s1",
          short: "What is it?",
          minutes: 5,
          grouping: "Class",
          art: "dec10/assets/week2/d5-v-s1.svg",
          title: "What are Teachable STAR Moments?",
          goal: "This time is for you.",
          blocks: [
            {
              type: "key",
              title: "Teachable STAR moments",
              points: [
                "Time (an hour, or a whole lesson) where your teacher can <b>address specific questions</b> you have, and <b>address your specific language needs</b>.",
                "They are about responsive, adaptive teaching — lessons tailored to your needs.",
                "The best way to take part: <b>reflect on your learning needs</b> and <b>talk to your teacher</b> about them. Your feedback matters!"
              ]
            }
          ]
        },
        {
          id: "s2",
          short: "My needs",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week2/d5-v-s2.svg",
          title: "Reflect on your learning needs",
          goal: "What has gone well this week so far? What do you still need help with?",
          blocks: [
            {
              type: "grid",
              id: "s2-grid",
              title: "This week so far",
              rows: [
                "Using cause-and-effect language (due to, as a result, leads to…)",
                "Taking notes from a reading and a podcast",
                "Comparing and connecting two sources",
                "Solving group problems with the right phrases",
                "Summarising my research in 2 minutes",
                "Giving a short talk: opening, signposts, closing",
                "Preparing my part of tomorrow’s group presentation"
              ],
              columns: ["How do I feel?"],
              options: ["I’m confident","Getting there","I need help"]
            },
            {
              type: "fields",
              fields: [
                {"id":"s2-needs","label":"My top two learning needs","placeholder":"1. … 2. …","rows":2},
                {"id":"s2-q","label":"A question I want to ask my teacher","placeholder":"I’m still not sure how to…","rows":2}
              ]
            }
          ]
        },
        {
          id: "s3",
          short: "Ask",
          minutes: 15,
          grouping: "Pair → Class",
          art: "dec10/assets/week2/d5-v-s3.svg",
          title: "Talk to your teacher",
          goal: "Ask clearly — and get the help you need.",
          blocks: [
            {
              type: "language",
              title: "Ask your teacher for help",
              groups: [
                {
                  label: "Ask to explain",
                  phrases: ["Could you <b>explain</b> … <b>again</b>, please?","What’s the <b>difference between</b> … and …?","Could you give us <b>an example of</b>…?"]
                },
                {"label":"Say what is hard","phrases":["I’m <b>not sure how to</b>…","I <b>get confused when</b>…","I <b>understand</b> …, <b>but not</b>…"]},
                {"label":"Ask for practice","phrases":["Could we have <b>more practice with</b>…?","Could you <b>check</b> my…?","Is it OK if we <b>go over</b>…?"]}
              ]
            },
            {
              type: "chat",
              title: "A good request",
              right: "Student",
              lines: [
                ["Teacher","So, what would you like to work on today?"],
                ["Student","I <mark>understand</mark> the cause-and-effect phrases, <mark>but not</mark> when to use “due to” and when to use “because”."],
                ["Teacher","Great question. Can you give me a sentence you wrote?"],
                ["Student","Yes: “Emissions are rising due to people stream more videos.”"],
                ["Teacher","Good — “due to” needs a noun: due to <b>more video streaming</b>. “Because” needs a clause: because people <b>stream</b> more videos."],
                ["Student","Oh, I see. <mark>Could we have more practice with</mark> that?"]
              ]
            },
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Practise your question from the last activity with a partner. Make it <b>specific</b>: say what you understand and what you don’t."
            },
            {
              type: "cards",
              title: "Class vote: what should we practise today?",
              pick: "s3-vote",
              items: [
                {"label":"Cause & effect","text":"due to, as a result, leads to…","icon":"link"},
                {"label":"Note-taking","text":"reading and listening notes","icon":"pen"},
                {"label":"Presenting","text":"openings, signposts, conclusions","icon":"chat"},
                {"label":"Group presentation","text":"help for tomorrow’s talk","icon":"search"}
              ]
            },
            {"type":"do","n":2,"who":"class","text":"Tell your teacher your vote and your question. Your teacher will use them for the rest of the STAR moment."}
          ]
        },
        {
          id: "s4",
          short: "Review game",
          minutes: 20,
          grouping: "Teams",
          art: "dec10/assets/week2/d5-v-s4.svg",
          title: "Mid-week review game",
          goal: "Play in teams. What do you remember from Monday and Tuesday?",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "class",
              text: "Play in teams. Choose a box, read the clue and answer <b>as a question</b> (“What is…?”). The teacher gives the points."
            },
            {
              type: "jeopardy",
              id: "s4-jp",
              title: "Week 2 Jeopardy: Monday to Wednesday",
              teams: 4,
              seconds: 25,
              cols: [
                {
                  title: "Cause & effect",
                  clues: [
                    {"pts":100,"clue":"This phrase needs a noun after it: “emissions rose ___ more streaming”.","answer":"What is “due to”?"},
                    {"pts":200,"clue":"Complete the podcast’s pattern: “The more things we use, ___ waste we create.”","answer":"What is “the more”?"},
                    {"pts":300,"clue":"The noun that means the total amount of carbon our activities produce.","answer":"What is a (carbon) footprint?"},
                    {
                      pts: 400,
                      clue: "Make one sentence with “as a result”: data centres need a lot of energy → emissions rise.",
                      answer: "What is “Data centres need a lot of energy. As a result, emissions rise.”?"
                    }
                  ]
                },
                {
                  title: "The reading",
                  clues: [
                    {
                      pts: 100,
                      clue: "Griffiths (2020): the share of global greenhouse emissions from our gadgets, the internet and the systems behind them.",
                      answer: "What is about 3.7%?"
                    },
                    {"pts":200,"clue":"Each internet user’s share of these emissions in one year.","answer":"What is 414 kg of carbon dioxide?"},
                    {"pts":300,"clue":"Perhaps the most environmentally friendly way to stay in touch: just 0.014g CO2e each.","answer":"What is an SMS text message?"},
                    {
                      pts: 400,
                      clue: "Using one computer and monitor for six years instead of four avoids about this much carbon (University of Edinburgh).",
                      answer: "What is 190kg?"
                    }
                  ]
                },
                {
                  title: "The podcast",
                  clues: [
                    {"pts":100,"clue":"Raw materials extracted to make one computer that weighs about two kilos.","answer":"What is about 800 kilos?"},
                    {"pts":200,"clue":"The ICT sector’s estimated share of global greenhouse gas emissions.","answer":"What is between 1.5% and 3.2%?"},
                    {
                      pts: 300,
                      clue: "Two new phenomena that partly explain why data centre electricity use may more than double by 2026.",
                      answer: "What are cryptocurrency mining and artificial intelligence?"
                    },
                    {"pts":400,"clue":"From the very outset, devices should be designed so that they can be …","answer":"What is recycled?"}
                  ]
                },
                {
                  title: "Group work",
                  clues: [
                    {"pts":100,"clue":"Finish the suggestion: “Have you tried … (email) him?”","answer":"What is “emailing” (Have you tried + verb-ing)?"},
                    {"pts":200,"clue":"“If you work on the slides, I’ll focus on the script.” This phrase is for …","answer":"What is allocating tasks?"},
                    {"pts":300,"clue":"Finish: “By Thursday, we need to have … the slides.”","answer":"What is “completed”?"},
                    {
                      pts: 400,
                      clue: "Say this problem politely: one member does all the work.",
                      answer: "What is, e.g., “We need to address the uneven distribution of workload.”?"
                    }
                  ]
                },
                {
                  title: "Presenting",
                  clues: [
                    {"pts":100,"clue":"The first thing you do in an introduction, after greeting your audience.","answer":"What is introducing yourself (and the topic)?"},
                    {
                      pts: 200,
                      clue: "Words like “firstly”, “moving on to” and “to sum up” that guide the audience.",
                      answer: "What are signposts / signposting language?"
                    },
                    {"pts":300,"clue":"In the Tuesday homework, Suzie’s presentation was about this equation.","answer":"What is the IPAT equation?"},
                    {"pts":400,"clue":"The length of your group’s Research Summary presentation.","answer":"What is 5–7 minutes?"}
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "s5",
          short: "Wrap-up",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week2/d5-v-s5.svg",
          title: "Mid-week check: 3-2-1",
          goal: "Look back at Monday to Wednesday — and get ready for tomorrow.",
          blocks: [
            {
              type: "fields",
              fields: [
                {"id":"s5-3","label":"3 things I learned this week","rows":3},
                {"id":"s5-2","label":"2 useful phrases I will use again","placeholder":"As a result, … · Could you clarify…?","rows":2},
                {"id":"s5-1","label":"1 question I still have","rows":2}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Tell a partner your <b>3-2-1</b> in one minute."},
            {
              type: "checklist",
              id: "s5-check",
              title: "Ready for tomorrow?",
              meter: ["ticked","Ready for tomorrow!"],
              items: [
                "I know my part of our group’s Research Summary presentation (Groups 1 and 2 present tomorrow).",
                "I will practise my part tonight, with a timer.",
                "I know my top learning need — and I told my teacher.",
                "I will bring my notes from the self-regulation homework tomorrow."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "fbtool",
      number: "03",
      code: "12A",
      minutes: 30,
      tone: "green",
      art: "dec10/assets/week2/s-fbtool.svg",
      title: "AST: Introducing the presentation feedback tool",
      subtitle: "What to look for — and where to keep it",
      outcome: "Understand the criteria for giving feedback and the Peer and Teacher Feedback Tool.",
      activities: [
        {
          id: "f1",
          short: "Why feedback",
          minutes: 5,
          grouping: "Class",
          title: "Giving peer feedback on presentations",
          goal: "See where peer feedback fits in DEC10.",
          blocks: [
            {
              type: "key",
              title: "You will give several presentations in DEC10",
              points: [
                "The weekly <b>Research Summary Presentations</b> in Weeks 2, 3 and 6.",
                "<b>Seminar Presentations</b> in your allocated weeks.",
                "They are practice for your final <b>Interactive Presentation</b> in Week 7 — and a chance to get feedback from your teachers <b>and</b> your peers."
              ]
            },
            {
              type: "talk",
              title: "Quick chat",
              prompts: ["Week 1: what makes feedback effective? Say two things you remember.","Would you rather get feedback from a teacher or a classmate? Why?"]
            },
            {
              type: "toggle",
              title: "Remember: effective feedback should …",
              blocks: [
                {
                  type: "cards",
                  numbered: true,
                  items: [
                    {"text":"directly address the task assessment criteria (rubric)"},
                    {"text":"be specific, not general"},
                    {"text":"be clear"},
                    {"text":"be useful and actionable"},
                    {"text":"be timely"},
                    {"text":"advise how to improve something (feed forward)"},
                    {"text":"be sensitive and encouraging"},
                    {"text":"not be a criticism"}
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "f2",
          short: "The criteria",
          minutes: 10,
          grouping: "Pairs (jigsaw)",
          title: "Understand the criteria for feedback",
          goal: "Know the four criteria and what each one looks at.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Your teacher gives your pair ONE criterion. Tap it and read. Then explain it to another pair in your own words."
            },
            {
              type: "hotspot",
              src: "dec10/assets/week2/d3-criteria.svg",
              size: "wide",
              alt: "The four criteria: Content Delivery, Fluency and Pronunciation, Language Use, Question and Answer.",
              hint: "Tap a number.",
              spots: [
                {
                  x: 14.7,
                  y: 26.7,
                  label: "1",
                  color: "#2b776e",
                  title: "Content Delivery",
                  text: "<p>WHAT you say and HOW you organise it: the problem, the causes and effects (with evidence), the solution and its evaluation; a logical structure; smooth turns between speakers; clear, consistent visuals; engaging the audience.</p>"
                },
                {
                  x: 38.1,
                  y: 26.7,
                  label: "2",
                  color: "#b0512a",
                  title: "Fluency & Pronunciation",
                  text: "<p>HOW you sound: clear pronunciation, <b>chunking</b>, <b>pausing</b> and <b>stress</b>, and <b>intonation</b> — speaking that is not ‘flat’.</p>"
                },
                {
                  x: 61.5,
                  y: 26.7,
                  label: "3",
                  color: "#7a4a8c",
                  title: "Language Use",
                  text: "<p>Accurate grammar and vocabulary — and <b>functional language</b>: language that does a job, e.g. evaluating, explaining cause and effect, explaining a problem.</p>"
                },
                {
                  x: 84.9,
                  y: 26.7,
                  label: "4",
                  color: "#3a58a0",
                  title: "Question & Answer",
                  text: "<p>Your answers to the individual questions are <b>spontaneous</b> (not memorised), <b>relevant</b> and <b>clear</b>.</p>"
                }
              ]
            },
            {
              type: "quiz",
              id: "f2-ccq",
              title: "Check questions",
              items: [
                {
                  q: "How many criteria are there?",
                  options: ["Three","Four","Six"],
                  answer: "Four",
                  why: "Content Delivery · Fluency & Pronunciation · Language Use · Question & Answer."
                },
                {
                  q: "What do we mean by “functional language”?",
                  options: ["Very formal words","Language that does a job, e.g. explaining cause and effect","Grammar with no mistakes"],
                  answer: "Language that does a job, e.g. explaining cause and effect",
                  why: "For example: “This leads to …”, “A major cause is …”, “This solution is effective because …”."
                },
                {
                  q: "Which criterion checks chunking, pausing and stress?",
                  options: ["Content Delivery","Fluency & Pronunciation","Language Use"],
                  answer: "Fluency & Pronunciation"
                },
                {
                  q: "“Answers were given spontaneously” means …",
                  options: ["the answer was memorised","the speaker answered naturally, without a script","the answer was very long"],
                  answer: "the speaker answered naturally, without a script"
                }
              ]
            },
            {
              type: "grid",
              id: "f2-me",
              title: "How confident are you?",
              columns: ["Me now"],
              options: ["I feel confident","I need to work extra hard"],
              rows: ["Content Delivery","Fluency & Pronunciation","Language Use","Question & Answer"]
            },
            {
              type: "talk",
              prompts: ["Which criterion do you feel confident about? Why?","Which criterion do you need to work extra hard on? What will help you?"]
            }
          ]
        },
        {
          id: "f3",
          short: "The tool",
          minutes: 15,
          grouping: "Alone → Pair",
          title: "Understand the feedback tool to give peer feedback",
          goal: "Download, save and understand the Peer and Teacher Feedback Tool.",
          blocks: [
            { type: 'download', id: 'feedback-tool', note: "This is the same tool as a <b>fillable PDF</b>. Download it now: you use it tomorrow and Friday for every group presentation." },
            {
              type: "figure",
              src: "dec10/assets/week2/d3-tool.svg",
              size: "wide",
              alt: "The Peer and Teacher Feedback Tool with Yes, Mostly and Needs work boxes, going into a folder called Research and Seminar Presentations – Feedback and Action Plans.",
              caption: "A feedback tool helps you focus your feedback clearly and directly on the criteria."
            },
            {
              type: "steps",
              items: [
                {
                  who: "alone",
                  text: "On Canvas, download the <b>Peer and Teacher Feedback Tool</b>. You will use it for the Research Summary Presentations (Weeks 2, 3 and 6) and the Seminar Presentations."
                },
                {"who":"alone","text":"Set up a folder on your computer. Name it: <b>Research & Seminar Presentations – Feedback & Action Plans</b>."},
                {"who":"alone","text":"Save the Peer and Teacher Feedback Tool in the folder."}
              ]
            },
            {
              type: "checklist",
              id: "f3-done",
              title: "Done?",
              meter: ["done","Ready for tomorrow’s presentations!"],
              items: ["I downloaded the Peer and Teacher Feedback Tool","I made the folder with the right name","I saved the tool in the folder"]
            },
            {
              type: "tip",
              text: "Keep <b>every</b> feedback form and action plan in this folder. The feedback cycle only works if you keep records. For the words to use when you give feedback, open your Student’s book, page 102."
            },
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "The feedback tool is a simplified version of the full Interactive Presentation rubric. Match each statement from the tool to its criterion in the rubric."
            },
            {
              type: "sort",
              id: "f3-map",
              title: "Tool → rubric",
              buckets: [
                {"label":"Content Delivery of Presentation","letter":"1"},
                {"label":"Fluency & Pronunciation","letter":"2"},
                {"label":"Language Use","letter":"3"},
                {"label":"Question & Answer","letter":"4"}
              ],
              items: [
                {"text":"The problem was clearly stated.","answer":0},
                {"text":"Evidence for the cause/s was given.","answer":0},
                {"text":"Solution was evaluated.","answer":0},
                {"text":"We could follow the presentation easily: the ideas were clearly and logically connected.","answer":0},
                {"text":"Each group member’s turn flowed naturally and logically from the previous member.","answer":0},
                {"text":"Each group member’s contribution was equal in time and content.","answer":0},
                {"text":"Visuals were consistent for each group member and across all group members.","answer":0},
                {"text":"Body language and eye contact engaged the audience.","answer":0},
                {"text":"Visuals were clear and helped the audience understand the main ideas.","answer":0},
                {"text":"The presenters engaged the audience.","answer":0},
                {"text":"Pronunciation was clear and could be easily understood.","answer":1},
                {"text":"We could hear the presenters using chunking, pausing and stress in their language.","answer":1},
                {"text":"We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).","answer":1},
                {"text":"The grammar used was largely accurate and we could understand the meaning.","answer":2},
                {"text":"The vocabulary used was largely accurate and we could understand the meaning.","answer":2},
                {"text":"We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)","answer":2},
                {"text":"Answers were given spontaneously.","answer":3},
                {"text":"Answers were relevant.","answer":3},
                {"text":"Answers were clear.","answer":3}
              ]
            }
          ]
        }
      ]
    },
    {
      id: "opening",
      number: "04",
      code: "17A",
      minutes: 90,
      tone: "teal",
      art: "dec10/assets/week2/s-opening.svg",
      title: "Seminar Discussion Opening Remarks group 1",
      subtitle: "Set up PebblePad, then Group 1 opens the seminars — everyone else reacts",
      outcome: "You follow a structured presentation, react to it with questions, and know how to write thought-provoking discussion questions.",
      activities: [
        {
          id: "o0",
          short: "PebblePad",
          minutes: 45,
          grouping: "Class → Alone",
          art: "dec10/assets/week2/v/v-d10w2d3-o0.svg",
          title: "PebblePad set-up",
          goal: "Get into PebblePad and find where your Seminar Portfolio uploads go — before Group 1 starts.",
          blocks: [
            {
              type: "key",
              title: "Why PebblePad today?",
              points: [
                "Your <b>Seminar Portfolio</b> uploads go into <b>PebblePad</b>.",
                "Group 1 uploads its first piece after today’s Opening Remarks. Everyone else uploads later — so everyone sets it up <b>now</b>.",
                "Your teacher shows each step on the screen. Do it at the same time on your laptop."
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"alone","text":"Open <b>PebblePad+</b> from the side panel of this site (it opens in a new tab)."},
                {"who":"alone","text":"Log in with your <b>UniKey</b> and password."},
                {"who":"class","text":"Follow your teacher: find the <b>DEC10</b> workspace and the place for your <b>Seminar Portfolio</b>."},
                {"who":"alone","text":"Open the first upload page. Do not submit anything yet — just check that you can open it."},
                {"who":"pair","text":"Check your partner can do it too. Help each other."}
              ]
            },
            {
              type: "checklist",
              id: "o0-ready",
              title: "Before the Opening Remarks, I can …",
              items: ["log in to PebblePad","find the DEC10 workspace","find my Seminar Portfolio","open the first upload page","find my teacher’s comments (later)"]
            },
            {
              type: "language",
              title: "Ask for help — useful expressions",
              groups: [
                {
                  label: "When you are stuck",
                  phrases: ["Sorry, could you show that step again?","Where do I click to …?","I can’t find the … — is it under …?","My page looks different from yours."]
                },
                {
                  label: "Helping a classmate",
                  phrases: ["Try clicking on …","It’s at the top / on the left.","Did you log in with your UniKey?","Let me show you on my screen."]
                }
              ]
            },
            {
              type: "talk",
              title: "Tell your partner (1 minute)",
              prompts: ["What do you upload to PebblePad, and when?","Which step was difficult? What helped?"]
            },
            {"type":"tip","text":"Problems logging in? Ask your teacher now, or contact ICT: 02 8627 1444 (option 3)."}
          ]
        },
        {
          id: "o1",
          short: "The task",
          minutes: 3,
          grouping: "Class",
          art: "dec10/assets/week2/v/v-d10w2d4-o1.svg",
          title: "Revision of task instructions",
          goal: "Remember what Group 1 does — and what you do.",
          blocks: [
            {
              type: "model",
              title: "Seminar Group 1’s question",
              text: "What is the impact of the digital carbon footprint on overall carbon emissions in [your chosen country], and what strategies can be deployed to reduce it?"
            },
            {
              type: "hotspot",
              src: "dec10/assets/week2/d4-opening.svg",
              size: "wide",
              alt: "Group 1’s Opening Remarks, 5–7 minutes, has three parts: 1 a brief introduction to the country and why they chose it, 2 causes and/or effects of the problem, 3 possible strategies or solutions. The audience writes what they want to know more about.",
              caption: "Tap the numbers: what Group 1 covers in 5–7 minutes.",
              spots: [
                {
                  x: 24,
                  y: 40,
                  label: "1",
                  color: "#2f7d6b",
                  title: "The country",
                  text: "A brief introduction to the country they chose — and <b>why</b> they chose it."
                },
                {
                  x: 50,
                  y: 40,
                  label: "2",
                  color: "#c4562f",
                  title: "Causes and/or effects",
                  text: "The causes and/or effects of the sustainability issue or problem."
                },
                {"x":76,"y":40,"label":"3","color":"#3a58a0","title":"Strategies","text":"Possible strategies or solutions."},
                {
                  x: 50,
                  y: 84,
                  label: "4",
                  color: "#8a4f9e",
                  title: "The rest of the class",
                  text: "Pay attention. While you listen, write down any more information you would like to know about the country and its sustainability issue."
                }
              ]
            },
            {
              type: "sort",
              id: "o1-sort",
              title: "Who does it?",
              buckets: [{"label":"Seminar Group 1","letter":"G1"},{"label":"The rest of the class","letter":"All"}],
              items: [
                {"text":"Deliver a 5–7-minute Opening Remarks presentation.","answer":0},
                {"text":"Write down more information you would like to know.","answer":1},
                {"text":"Get feedback from the teacher and ask about anything unclear.","answer":0},
                {"text":"Discuss your reactions in your seminar group.","answer":1},
                {"text":"Post ONE group post with reactions and questions to the Discussion Board — in class.","answer":1}
              ]
            }
          ]
        },
        {
          id: "o2",
          short: "Listen",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week2/v/v-d10w2d4-o2.svg",
          title: "Opening Remarks",
          goal: "Listen to Group 1 and note the gaps in your knowledge.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Listen as Group 1 presents. Take short notes. In the last column, write what you <b>want to know more about</b>."
            },
            { type: 'download', id: 'feedback-tool', note: "While Group 1 speaks, fill in the Feedback Tool. Tick <b>Seminar Presentation</b> at the top." },
            {
              type: "table",
              id: "o2-t",
              title: "My notes on Group 1’s Opening Remarks",
              columns: ["Part","What they said (notes)","What I would like to know more about"],
              fixed: ["The country and why they chose it","Causes and/or effects","Possible strategies"]
            },
            {
              type: "language",
              title: "Turn a gap into a question",
              tabs: false,
              groups: [
                {
                  label: "I want to know",
                  phrases: [
                    "<b>How big is</b> the digital footprint in … <b>compared with</b> …?",
                    "<b>Why does</b> … use so much …?",
                    "<b>What is</b> the government <b>already doing</b> about …?",
                    "<b>Which strategy would work best</b> in …? Why?"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "o3",
          short: "After",
          minutes: 10,
          grouping: "Seminar groups",
          art: "dec10/assets/week2/v/v-d10w2d4-o3.svg",
          title: "After the Opening Remarks presentation",
          goal: "React as a group and post your questions — or take notes on your feedback.",
          blocks: [
            {
              type: "tabs",
              title: "Choose your tab",
              tabs: [
                {
                  label: "Rest of class",
                  blocks: [
                    {"type":"do","n":1,"who":"group","text":"Discuss your reactions. Everyone says at least one sentence."},
                    {
                      type: "language",
                      title: "React to the presentation",
                      tabs: false,
                      groups: [
                        {
                          label: "React",
                          phrases: ["<b>I was surprised that</b> …","<b>I didn’t know that</b> …","<b>It was interesting to hear</b> that …","<b>I agree / I’m not sure</b> that …"]
                        },
                        {"label":"Ask for more","phrases":["<b>We would like to know more about</b> …","<b>It wasn’t clear to us</b> why …","<b>We wonder whether</b> …"]}
                      ]
                    },
                    {
                      type: "tip",
                      text: "Need more discussion language? Open your <b>Student’s book</b>: <b>page 112</b> (cause and effect) and <b>page 113</b> (compare and contrast)."
                    },
                    {
                      type: "do",
                      n: 2,
                      who: "group",
                      text: "Choose your best <b>one or two questions</b>. Write ONE group post. Post it to the Discussion Board <b>now, in class</b>."
                    },
                    {
                      type: "fields",
                      fields: [
                        {"id":"o3-react","label":"Our group’s reactions","rows":3,"placeholder":"We were surprised that … It was interesting to hear …"},
                        {"id":"o3-qs","label":"Our one or two questions for Group 1","rows":3,"placeholder":"1. How … ?\n2. Why … ?"}
                      ]
                    },
                    {"type":"checklist","id":"o3-post","title":"Our post","items":["Reactions + one or two questions","ONE post per group","Posted in class"]}
                  ]
                },
                {
                  label: "Seminar Group 1",
                  blocks: [
                    {
                      type: "do",
                      n: 1,
                      who: "group",
                      text: "Listen and take notes as your teacher gives you feedback. You need these notes for <b>Portfolio Submission 1</b>."
                    },
                    {
                      type: "table",
                      id: "o3-fb",
                      title: "My notes on the teacher’s feedback",
                      columns: ["Area","What went well","What to improve (action)"],
                      fixed: ["Content","Engagement with the audience","Pronunciation"]
                    },
                    {
                      type: "language",
                      title: "Check that you understand",
                      tabs: false,
                      groups: [
                        {
                          label: "Ask",
                          phrases: ["<b>Could you give me an example of</b> …?","<b>What do you mean by</b> …?","<b>So, next time we should</b> … — <b>is that right?</b>"]
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
          id: "o4",
          short: "Group 1 next",
          minutes: 8,
          grouping: "Class",
          art: "dec10/assets/week2/v/v-d10w2d4-o4.svg",
          title: "Seminar Preparation for Week 3 (Group 1)",
          goal: "Know Group 1’s jobs before the Seminar — the same jobs every group will do.",
          blocks: [
            {
              type: "checklist",
              id: "o4-g1",
              title: "Before the Seminar next week (Group 1)",
              meter: ["done","Ready for the Seminar!"],
              items: [
                "Read reactions, comments and questions on the Discussion Board and identify any common themes and interesting ideas",
                "Select the focus of your seminar presentation from these comments and questions.",
                "Think of two thought-provoking questions for the class to discuss in small groups for 10 minutes",
                "Prepare your Powerpoint Slides for your Presentation for next week (10–12 minutes)",
                "Submit Portfolio Submission 1 — before the Seminar in Week 3"
              ]
            },
            {
              type: "key",
              title: "Note 1",
              tone: "warn",
              points: ["Don’t address ALL the questions on the Discussion Board. Choose <b>one or two</b> to focus your research."]
            },
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "<b>Portfolio Submission 1</b> = a written summary of, and reflection on, the teacher’s feedback on your Opening Remarks. Complete the model."
            },
            {
              type: "cloze",
              id: "o4-cl",
              title: "A model Portfolio Submission 1",
              text: "Feedback on our Opening Remarks can be put into three {{1}}: content, engagement with the audience and pronunciation. For content, the feedback was that our causes were clear, but we needed more {{2}}. For engagement, the teacher said that we read from our slides, so we should make more {{3}}. For pronunciation, {{4}} words like “sustainability” was difficult. This feedback tells us that {{5}}, we should practise with notes, not a script.",
              options: ["categories","evidence","eye contact","stressing","next time"],
              answers: ["categories","evidence","eye contact","stressing","next time"]
            },
            {
              type: "language",
              title: "Frames for your Portfolio reflection",
              tabs: false,
              groups: [
                {
                  label: "Summarise",
                  phrases: [
                    "Feedback on our … <b>can be put into</b> … categories.",
                    "<b>For</b> content, <b>the feedback was that</b> …",
                    "<b>The teacher pointed out that</b> …"
                  ]
                },
                {
                  label: "Reflect",
                  phrases: ["<b>This feedback tells us that next time, we should</b> …","<b>We agree with</b> this because …","<b>Our main action point is to</b> …"]
                }
              ]
            }
          ]
        },
        {
          id: "o5",
          short: "Questions",
          minutes: 12,
          grouping: "Pair",
          art: "dec10/assets/week2/v/v-d10w2d4-o5.svg",
          title: "Making Seminar Discussion Questions",
          goal: "Write questions that start a real discussion — not a yes or no.",
          blocks: [
            {
              type: "key",
              title: "A thought-provoking question can …",
              points: [
                "<b>challenge</b> the opinions given by the class on the discussion board.",
                "<b>connect</b> different aspects of the topic together.",
                "<b>compare and contrast</b> various aspects and viewpoints of the topic.",
                "<b>extend</b> an interesting aspect of one of the themes you have identified in your research.",
                "ask the students to draw upon their <b>wider knowledge or personal experience</b>."
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Look at each pair. Which question will start <b>more</b> critical discussion? Bet your coins."},
            {
              type: "bet",
              id: "o5-bet",
              items: [
                {
                  q: "Pair 1 — which is more thought-provoking?",
                  options: ["a. How do our individual lifestyle choices impact global sustainability efforts?","b. Should we bother recycling?"],
                  answer: "a. How do our individual lifestyle choices impact global sustainability efforts?",
                  why: "a is open (not yes/no) and lets people compare different choices and impacts. “Our” makes people reflect on their own actions. b is yes/no and only about recycling."
                },
                {
                  q: "Pair 2 — which is more thought-provoking?",
                  options: [
                    "a. Should all companies be mandated to implement green practices?",
                    "b. What ethical role should businesses play in promoting environmental sustainability? Give examples."
                  ],
                  answer: "b. What ethical role should businesses play in promoting environmental sustainability? Give examples.",
                  why: "b invites many roles (donations, sustainable practices, transparent reporting …) and real examples. a is yes/no, and “be mandated” is unclear: who would monitor it?"
                },
                {
                  q: "Pair 3 — which is more thought-provoking?",
                  options: [
                    "a. How does consumer culture need to change to better support sustainability goals? How could you modify your own consumer habits?",
                    "b. Is organic food the sole option for sustainable eating? Do you like organic food?"
                  ],
                  answer: "a. How does consumer culture need to change to better support sustainability goals? How could you modify your own consumer habits?",
                  why: "a looks at consumer culture as a whole and then at your own habits. b is too narrow, and “Do you like organic food?” is irrelevant."
                }
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d4-question-ladder.svg",
              size: "wide",
              alt: "A ladder of questions. Bottom: yes/no questions such as Should we recycle? Middle: what and why questions. Top: open questions that compare, connect or challenge, such as To what extent… and What role should… play in…",
              caption: "Climb the ladder: from yes/no to thought-provoking."
            },
            {
              type: "language",
              title: "Question stems that open a discussion",
              groups: [
                {"label":"Challenge","phrases":["<b>To what extent</b> do you agree that …?","Some people on the board said … <b>How convincing is this?</b>"]},
                {"label":"Connect","phrases":["<b>How does</b> … <b>affect</b> …?","<b>What is the link between</b> … and …?"]},
                {"label":"Compare","phrases":["<b>How is</b> … <b>different in</b> … <b>compared with</b> …?","<b>Which is more effective</b>, … or …? Why?"]},
                {"label":"Experience","phrases":["<b>In your experience</b>, …?","<b>How could you change your own</b> … ?"]}
              ]
            },
            {
              type: "tip",
              text: "More language for your questions: <b>Student’s book page 112</b> (cause and effect) and <b>page 113</b> (compare and contrast). Group 1, planning together? Use <b>page 103</b> (solving problems in a group)."
            },
            {"type":"do","n":2,"who":"pair","text":"<b>Upgrade it!</b> Turn each weak question into a thought-provoking one. Use a stem above."},
            {
              type: "fields",
              fields: [
                {"id":"o5-u1","label":"Weak: “Do you use your phone a lot?” → My upgrade","rows":2,"placeholder":"How do our phone habits …"},
                {"id":"o5-u2","label":"Weak: “Are data centres bad?” → My upgrade","rows":2,"placeholder":"To what extent …"},
                {"id":"o5-u3","label":"Weak: “Is AI good?” → My upgrade","rows":2,"placeholder":"What role should … play in …"}
              ]
            },
            {
              type: "toggle",
              title: "Possible upgrades",
              hint: "Open after you try",
              blocks: [
                {
                  type: "cards",
                  items: [
                    {"label":"Phones","text":"How do our everyday phone habits add to the digital carbon footprint, and which habit would be easiest for you to change?"},
                    {"label":"Data centres","text":"To what extent should tech companies, rather than users, be responsible for the emissions of data centres?"},
                    {"label":"AI","text":"What role should governments play in reducing the energy and water footprint of AI? Give examples."}
                  ]
                }
              ]
            },
            {
              type: "do",
              n: 3,
              who: "group",
              text: "<b>Test your best question.</b> Ask it to another pair. Discuss for 2 minutes. Did it start a real discussion?"
            }
          ]
        },
        {
          id: "o6",
          short: "Next week",
          minutes: 7,
          grouping: "Class",
          art: "dec10/assets/week2/v/v-d10w2d4-o6.svg",
          title: "Procedure for the Seminar Week 3 (Reminder)",
          goal: "Know what happens on the day of the Seminar, and what comes after.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d4-seminar-day.svg",
              size: "wide",
              alt: "The day of the Seminar, about 40 minutes. Seminar presentation 10–12 minutes: an outline of class reactions and the focus (2–3 minutes), a summary of research (8–10 minutes), then two thought-provoking questions. Discussion 10 minutes: the class discusses; Group 1 only listens and takes notes. After the discussion 1–2 minutes: Group 1 summarises each group’s discussion. After the whole task: teacher feedback for Group 1; the class prepares peer feedback.",
              caption: "The day of the Seminar: about 40 minutes."
            },
            {
              type: "order",
              id: "o6-order",
              title: "Put the Seminar day in order",
              items: [
                "Group 1 outlines the class reactions and the focus they chose (2–3 min).",
                "Group 1 summarises their research (8–10 min).",
                "Group 1 introduces two thought-provoking questions.",
                "The class discusses in small groups (10 min). Group 1 listens and takes notes — no talking!",
                "Group 1 summarises the main points of each group’s discussion (1–2 min).",
                "The teacher gives Group 1 feedback. The class discusses and prepares its peer feedback."
              ]
            },
            {
              type: "quiz",
              id: "o6-q",
              title: "After the Seminar and the Portfolio",
              items: [
                {
                  q: "Group 1, after their Seminar, submits …",
                  options: [
                    "Portfolio Submission 3 (a written summary of, and reflection on, teacher’s and peer feedback) and Portfolio Submission 4 (a video response, 5–6 minutes)",
                    "Nothing — the Seminar is the end"
                  ],
                  answer: "Portfolio Submission 3 (a written summary of, and reflection on, teacher’s and peer feedback) and Portfolio Submission 4 (a video response, 5–6 minutes)",
                  why: "Submission 4 is the assessed task."
                },
                {
                  q: "The rest of the class, after the Seminar, submits …",
                  options: ["Peer Feedback 1: feedback for the presenting group, as audio, video or written text","A new presentation"],
                  answer: "Peer Feedback 1: feedback for the presenting group, as audio, video or written text"
                },
                {
                  q: "In total, how many Portfolio Submissions does each group make?",
                  options: ["3","6","10"],
                  answer: "6",
                  why: "3 based on your Seminar Presentations + 3 based on audience (peer) feedback, one for each other group."
                },
                {
                  q: "How much is the Portfolio worth?",
                  options: ["It is not assessed","10% of the grade for Speaking","50% of the course"],
                  answer: "10% of the grade for Speaking"
                }
              ]
            },
            {
              type: "model",
              title: "Group 2 Opening Remarks (Reminder) · after Group 1’s Seminar next week · 5–7 minutes",
              text: "What strategies could be implemented in [your chosen country] to enhance a smooth transition to more green jobs?",
              list: [
                "A brief introduction to the country you selected and why you chose it",
                "Causes and/or effects of the sustainability issue/problem",
                "Possible solutions/strategies"
              ],
              note: "Group 2: prepare a PPT. To revise the steps, see W1 D4 Seminar Discussion Opening Remarks Check-in. To revise the whole task, see W1 D2 Introduction to Seminar and Interactive Presentation."
            },
            {
              type: "cards",
              title: "Revise in the app",
              items: [
                {"label":"W1 D4","text":"<a href=\"#/d10w1d4/checkin\">Opening Remarks check-in</a>"},
                {"label":"W1 D4","text":"<a href=\"#/d10w1d4/video\">Seminar + Portfolio: the big picture</a>"},
                {"label":"W1 D2","text":"<a href=\"#/d10w1d2/seminar\">Introduction to Seminar and Interactive Presentation</a>"}
              ]
            }
          ]
        }
      ]
    },
    {
      id: "selfreg",
      number: "05",
      code: "14A",
      minutes: 60,
      tone: "amber",
      art: "dec10/assets/week2/s-selfreg.svg",
      title: "AST: Self-regulation and monitoring Homework",
      subtitle: "Analyse the task, set SMART goals, find a source",
      outcome: "Analyse task requirements, set goals and plan the work.",
      activities: [
        {
          id: "h1",
          short: "The skills",
          minutes: 8,
          grouping: "Homework",
          title: "Self-regulation and monitoring skills",
          goal: "Know what self-regulation and monitoring means — and why it matters.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d3-selfreg.svg",
              size: "wide",
              alt: "Before the task: analyse, set goals, expect obstacles and plan. During: manage time and monitor effort. After: compare results with goals and keep a log of mistakes.",
              caption: "Before · during · after. Tonight is about BEFORE."
            },
            {
              type: "key",
              title: "Why now?",
              points: [
                "In the next 7 weeks your group prepares and presents a <b>seminar</b>. Self-regulation helps you deliver your Opening Remarks and your Seminar.",
                "At university, it helps you <b>manage your time</b>, <b>meet deadlines</b> and <b>check your own progress</b> — and it reduces stress."
              ]
            },
            {
              type: "cards",
              title: "Self-regulation and monitoring skills include …",
              items: [
                {"text":"Setting clear group goals"},
                {"text":"Managing time well"},
                {"text":"Identifying challenges"},
                {"text":"Monitoring you and your group members’ progress effectively"},
                {"text":"Adjusting your strategies as needed"},
                {"text":"Reflecting on your work"}
              ]
            },
            {
              type: "scale",
              id: "h1-me",
              title: "Be honest",
              statement: "I usually start an assignment …",
              ends: ["The night before","As soon as I get it"],
              mid: "Somewhere in the middle"
            },
            {"type":"tip","text":"Take notes of important ideas as you work. You will use them in tomorrow’s homework follow-up lesson."}
          ]
        },
        {
          id: "h2",
          short: "6 steps",
          minutes: 5,
          grouping: "Homework",
          title: "Developing the skills",
          goal: "Know the six steps. Tonight: Steps 1–3.",
          blocks: [
            {
              type: "flip",
              title: "The six steps",
              hint: "Turn each card.",
              items: [
                {
                  front: "1 · Analyse the Task Requirements",
                  back: "Read the instructions carefully to identify key details (e.g., key words, format, word count/time limit, deadlines)."
                },
                {
                  front: "2 · Set Goals and Plan the Work",
                  back: "Break the task into manageable steps (e.g., research, outline, drafting) and set SMART goals for each. Assign deadlines for each step to stay on track."
                },
                {
                  front: "3 · Research and Gather Information",
                  back: "Use reliable sources (e.g., academic journals, databases) to collect relevant information for your task. Keep a record of your sources for accurate citations."
                },
                {
                  front: "4 · Create an Outline and Draft",
                  back: "Organise your ideas into a clear structure and begin writing your draft based on the outline. Focus on getting your ideas down without worrying about perfection at this stage."
                },
                {
                  front: "5 · Revise and Improve",
                  back: "Review your draft for clarity, coherence, and structure. Improve content, language, and argumentation. Seek feedback from peers or use editing tools to refine your work."
                },
                {
                  front: "6 · Reflect and Evaluate",
                  back: "Compare your finished work with your original goals and task requirements. Reflect on performance and recurrent mistakes. Keep a log of mistakes and strategies to avoid them in the future."
                }
              ]
            },
            {
              type: "order",
              id: "h2-order",
              title: "Activity · Put these steps in order",
              items: [
                "Analyse the Task Requirements",
                "Set Goals and Plan the Work",
                "Research and Gather Information",
                "Create an Outline and Draft",
                "Revise and Improve",
                "Reflect and Evaluate"
              ],
              ends: ["First","Last"]
            }
          ]
        },
        {
          id: "h3",
          short: "Step 1",
          minutes: 10,
          grouping: "Homework",
          title: "Step 1. Analyse the Task Requirements",
          goal: "Find the content words and the limiting words in a question.",
          blocks: [
            {
              type: "model",
              title: "Seminar task",
              text: "<b>Groups:</b> There will be 4 groups of 4 or 5 members (depending on class numbers). Your teacher will allocate groups and randomly assign a week and a topic (a sustainability issue) to each group. Each group will be assigned a week starting in Week 2. The final seminar will be in Week 6.<br><br>Each group will decide which country they would like to focus on to research their allocated sustainability issue. Your focus on one country will enable you to contextualise the sustainability issue."
            },
            {
              type: "model",
              title: "Imagine this is the question for your group",
              text: "<i>What are the main challenges and benefits of making businesses more sustainable in <b>[a specific country]</b>, and how can companies and governments work together to improve the environment and society?</i>"
            },
            {
              type: "cards",
              items: [
                {"label":"Content words","text":"Tell you what the question is <b>about</b>. They set the topic for your research and reading."},
                {"label":"Limiting words","text":"<b>Narrow down</b> the focus. For example, they may limit the question to a specific country."},
                {"label":"Task","text":"What do you need to <b>do</b> to answer this question?"}
              ]
            },
            {
              type: "spot",
              id: "h3-spot",
              label: "Content word spotter",
              title: "Tap the content words",
              hint: "Tap the words that tell you the TOPIC. Careful: question words and small words are not content words.",
              paras: [
                "[[What]] are the main [[*challenges]] and [[*benefits]] of making [[*businesses]] more [[*sustainable]] [[in]] [a specific country], and [[how]] can [[*companies]] and [[*governments]] work together to improve the [[*environment]] and [[*society]]?"
              ]
            },
            {
              type: "quiz",
              id: "h3-quiz",
              title: "Activity",
              items: [
                {
                  q: "How many questions do you need to answer?",
                  options: ["1","2","3","4"],
                  answer: "2",
                  why: "(1) What are the main challenges and benefits …? and (2) how can companies and governments work together …?"
                },
                {
                  q: "Which of the following is a content word?",
                  options: ["Businesses","In","How","Specific"],
                  answer: "Businesses",
                  why: "“Businesses” tells you the topic. “In” and “how” are small words; “specific” is part of the limiting phrase."
                },
                {
                  q: "Which of the following is the limiting word/phrase?",
                  options: ["Companies and governments","Improve the environment and society","Making businesses more sustainable","In [a specific country]"],
                  answer: "In [a specific country]",
                  why: "It narrows the question to ONE country."
                },
                {
                  q: "What kind of response does the question ask for?",
                  options: [
                    "A definition of sustainability",
                    "timeline of sustainable development",
                    "A discussion of both positive and negative aspects, plus possible solutions",
                    "A summary of environmental policies"
                  ],
                  answer: "A discussion of both positive and negative aspects, plus possible solutions",
                  why: "Challenges (negative) + benefits (positive) + how to work together (solutions)."
                },
                {
                  q: "When is the due date of this task?",
                  options: ["Week 2","Week 6","Between weeks 2-4"],
                  answer: "Between weeks 2-4",
                  why: "Groups are assigned a week starting in Week 2 — check your own group’s week."
                }
              ]
            },
            {
              type: "language",
              title: "Go further: talking about a task",
              groups: [
                {
                  label: "With your group",
                  phrases: ["The question asks us to …","The key words here are …","It’s limited to …","So we need to discuss both … and …","Our deadline is …"]
                }
              ]
            }
          ]
        },
        {
          id: "h4",
          short: "Subtasks",
          minutes: 10,
          grouping: "Homework",
          title: "Step 2. Set Goals and Plan the Work · Task 1 Make subtasks",
          goal: "Break a big task into small steps with times.",
          blocks: [
            {
              type: "key",
              title: "Think",
              points: ["How many subtasks (steps) do you think are necessary to prepare for this presentation?","Can you set a deadline or time limit for each subtask?"]
            },
            {"type":"table","id":"h4-sub","title":"My subtasks","columns":["Subtasks","Time"],"rows":5},
            {
              type: "model",
              title: "The first one, as an example",
              rows: [["Identify the specific industry or region to focus on for this presentation.","10-15 mins with group member"]]
            },
            {
              type: "toggle",
              title: "A useful tool: Goblin.tools",
              hint: "Not sure how to break down the task?",
              blocks: [
                {
                  type: "figure",
                  src: "dec10/assets/week2/d3-goblin.svg",
                  size: "wide",
                  alt: "goblin.tools Magic ToDo: type the task, choose the chillies, click the magic wand to get subtasks with times."
                },
                {
                  type: "steps",
                  items: [
                    {"who":"alone","text":"Open <a href=\"https://goblin.tools/\" target=\"_blank\" rel=\"noopener\">goblin.tools</a> and click <b>Magic ToDo</b>."},
                    {
                      who: "alone",
                      text: "Type in the task and choose the number of <b>chillies</b> (more chillies = more subtasks). For DEC assessments, 1–2 chillies should be enough."
                    },
                    {"who":"alone","text":"Press Enter, then click the <b>magic wand</b>."}
                  ]
                },
                {
                  type: "tip",
                  text: "You don’t have to use all the items — choose only the relevant ones. The tool can also estimate times, but they may not be realistic: adjust them to your deadlines."
                }
              ]
            },
            {
              type: "toggle",
              title: "Compare: a sample list of subtasks",
              blocks: [
                {
                  type: "model",
                  title: "Sub tasks · Time",
                  rows: [
                    ["Identify the specific industry or region for the presentation.","10-15 mins with group member"],
                    ["Research the main challenges of sustainability in that context.","1 hour"],
                    ["Research the benefits of sustainability for businesses in that context.","1 hour"],
                    ["Explore examples of collaboration between companies and governments on sustainability.","1 hour"],
                    ["Organize the findings into a clear presentation structure.","1 hour"],
                    ["Create visuals and supporting materials to enhance the presentation.","1 hour"],
                    ["Practice delivering the presentation.","1 hour"]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "h5",
          short: "SMART goals",
          minutes: 15,
          grouping: "Homework",
          title: "Task 2 Setting SMART goals",
          goal: "Write SMART goals for two subtasks.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d3-smart.svg",
              size: "wide",
              alt: "SMART: Specific, Measurable, Achievable, Relevant, Time-bound.",
              caption: "SMART goals are easier to achieve."
            },
            {
              type: "match",
              id: "h5-match",
              title: "Match each part of this SMART goal to its letter",
              hint: "Subtask: ‘Research the main challenges businesses face in becoming more sustainable in that industry or region’",
              left: ["<b>Specific</b>","<b>Measurable</b>","<b>Achievable</b>","<b>Relevant</b>","<b>Timebound</b>"],
              right: [
                "I will research the main sustainability challenges that businesses in the fashion industry in China face to include relevant data and examples in my presentation.",
                "I will gather at least 3 academic articles, 2 industry reports, and 1 case study to include well-supported information and examples for my presentation.",
                "I will dedicate 30 minutes to 1 hour each day for 3 days to gather and summarize the key challenges, ensuring I have enough research for my presentation without overwhelming myself.",
                "This research is critical for providing credible examples and making my presentation on sustainability challenges engaging and informative.",
                "I will complete my research and draft the main points for my presentation slides by …, so that I have time to revise and practice before the presentation."
              ]
            },
            {
              type: "pairs",
              title: "Go further: from vague to SMART",
              items: [
                {"from":"I will [[do some research]].","to":"I will [[find 3 academic articles on e-waste in Vietnam]].","tag":"Specific + Measurable"},
                {"from":"I will [[practise a lot]].","to":"I will [[rehearse my part twice with a timer by Thursday]].","tag":"Measurable + Time-bound"},
                {
                  from: "I will [[read everything about sustainability]].",
                  to: "I will [[read the 2 most relevant reports, 30 minutes a day]].",
                  tag: "Achievable + Relevant"
                }
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Choose two subtasks from your list. Write a SMART goal for each."},
            {
              type: "fields",
              title: "Subtask 1",
              fields: [
                {"id":"h5-s1","label":"Sub task","rows":1},
                {"id":"h5-s1-s","label":"Specific","rows":2,"placeholder":"I will …"},
                {"id":"h5-s1-m","label":"Measurable","rows":2,"placeholder":"at least …"},
                {"id":"h5-s1-a","label":"Achievable","rows":2,"placeholder":"I will spend … each day …"},
                {"id":"h5-s1-r","label":"Relevant","rows":2,"placeholder":"This is important because …"},
                {"id":"h5-s1-t","label":"Timebound","rows":2,"placeholder":"by … so that …"}
              ]
            },
            {
              type: "fields",
              title: "Subtask 2",
              fields: [
                {"id":"h5-s2","label":"Sub task","rows":1},
                {"id":"h5-s2-s","label":"Specific","rows":2,"placeholder":"I will …"},
                {"id":"h5-s2-m","label":"Measurable","rows":2,"placeholder":"at least …"},
                {"id":"h5-s2-a","label":"Achievable","rows":2,"placeholder":"I will spend … each day …"},
                {"id":"h5-s2-r","label":"Relevant","rows":2,"placeholder":"This is important because …"},
                {"id":"h5-s2-t","label":"Timebound","rows":2,"placeholder":"by … so that …"}
              ]
            },
            {
              type: "choose",
              id: "h5-hard",
              title: "Questionnaire · How challenging was it to make the SMART goals?",
              options: ["1 very easy","2 somewhat easy","3 somewhat difficult","4 difficult","5 very difficult"]
            }
          ]
        },
        {
          id: "h6",
          short: "Step 3",
          minutes: 10,
          grouping: "Homework",
          title: "Step 3. Research and Gather Information",
          goal: "Find one source and test it with CRAAP.",
          blocks: [
            {
              type: "steps",
              items: [
                {
                  who: "alone",
                  text: "Find <b>one source</b> related to the question using the <a href=\"https://www.library.sydney.edu.au/\" target=\"_blank\" rel=\"noopener\">USYD Library</a>."
                },
                {"who":"alone","text":"Evaluate the source using the <b>CRAAP test</b>."}
              ]
            },
            {"type":"fields","fields":[{"id":"h6-src","label":"My source (author, year, title)","rows":2,"placeholder":"Author (Year). Title. …"}]},
            {
              type: "table",
              id: "h6-craap",
              title: "CRAAP test",
              columns: ["My notes","OK?"],
              fixed: [
                "Currency — is it recent?",
                "Relevance — does it answer our question?",
                "Authority — who wrote it? Are they experts?",
                "Accuracy — is there evidence? Can I check it?",
                "Purpose — why was it written? To inform, sell, persuade?"
              ]
            }
          ]
        },
        {
          id: "h7",
          short: "Reflect",
          minutes: 5,
          grouping: "Homework",
          title: "Reflection questions",
          goal: "Think about how you planned — and bring your notes tomorrow.",
          blocks: [
            {
              type: "fields",
              fields: [
                {"id":"h7-1","label":"How effective were your strategies for breaking down the task and setting goals?","rows":2},
                {"id":"h7-2","label":"What adjustments could you make to improve your approach in future tasks?","rows":2},
                {"id":"h7-3","label":"How helpful was Goblin.tools in breaking down your task?","rows":2}
              ]
            },
            {
              type: "sticky",
              title: "Tomorrow",
              text: "<p>Bring your notes to class tomorrow for the <b>homework follow-up</b> lesson.</p><p>Be ready to say your SMART goal aloud in 30 seconds.</p>"
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
    ["carbon emissions","an amount of CO₂ released into the atmosphere","Keeping your laptop for six years cuts carbon emissions."],
    ["claim","a key point that supports an argument","The claim is that the figures are disputed."],
    ["allocate","to give a task or a share to someone","Let’s allocate the tasks by Friday."],
    ["transition","a process of changing from one state to another","The digital transition needs the same minerals as the low carbon transition."],
    ["signpost","a phrase that tells the audience where a talk is going","“Now, moving on to …” is a signpost."],
    ["clarification question","a question that asks what exactly a speaker means or claims","What do you mean by “people”?"],
    ["probing question","a question that asks a speaker to explain more or go deeper","Why do you think that figure is important for your point?"],
    ["synthesise","combine information from different sources into one clear idea","We synthesised two sources on one slide."],
    ["spontaneous","said naturally, without a script or preparation","Her answers were spontaneous and clear."],
    ["criteria","the standards used to judge a piece of work (singular: criterion)","The feedback tool has four criteria."],
    ["feedback tool","a form that helps you give feedback on the criteria","Complete the feedback tool during the talk."],
    ["action point","one clear thing to do next time","Our action point: practise the handovers."],
    ["chunking","saying words in short meaning groups, with small pauses","Every year, / global production of digital tech / emits …"],
    ["consonant cluster","two or more consonant sounds together without a vowel","Griffiths has the clusters /gr/ and /θs/."]
  ]
};
