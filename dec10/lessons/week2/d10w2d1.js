/* DEC10 · Week 2 Day 1 — one context runs through the day: our digital carbon footprint.
   Read Griffiths (2020) with SQ3R and talk about cause and effect; solve real group-work problems (2A);
   then start the first Research Summary: research one source and prepare a 2-minute verbal summary (3A, 4A).
   Teacher's Book lessons 1A, 2A, 3A, 4A. The reading (sources.js: footprint), the TB comprehension questions,
   the two group-work listening transcripts, the role cards, the research guiding questions and the sample
   summary are kept exactly. Added: pre-teaching, phrase banks, extra speaking and practice.
   Two Teacher's Book keys are corrected here: “terawatt” (a trillion watts, not a million) and Question 3
   (paragraph B, not A — only B talks about the number of internet users).
   Keep the id 'd10w2d1' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: "d10w2d1",
  week: 2,
  day: 1,
  title: "Read it, solve it, research it",
  duration: "About 4 hours + 1 hour homework",
  question: "How much damage does one person’s internet use really do — and who should cut the internet’s carbon footprint: you, or the companies?",
  questionKind: "Big question",
  questionLabel: "Today’s big question · you will talk about it all week",
  journey: "Count your own digital day, read about the hidden carbon cost of the internet with SQ3R, explain an infographic with cause-and-effect language and judge how strong the writer’s argument is. Then fix real group-work problems with the right phrases — and start your first Research Summary.",
  image: "dec10/assets/week2/hero-d10w2d1.svg",
  imageAlt: "Illustration: a laptop, a phone and a game controller send data along cables to a data centre; clouds of CO₂ rise towards a warming globe, and a footprint made of circuits reads “your digital carbon footprint”.",
  finish: {"title":"Day 2","text":"Share your research summary, then listen and compare sources"},
  goalShort: "the Research Summary presentations and the Interactive Presentation",
  sections: [
    {
      id: "reading",
      number: "01",
      code: "1A",
      minutes: 120,
      tone: "teal",
      art: "dec10/assets/week2/s-reading.svg",
      title: "Reading to speak",
      subtitle: "The hidden carbon cost of the internet",
      outcome: "You can take notes with SQ3R, answer reading questions from your notes, explain an infographic with cause-and-effect language, and name the parts of an argument.",
      activities: [
        {
          id: "a1",
          short: "Warmer",
          minutes: 5,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/d1-v-a1.svg",
          title: "Warmer: my digital day",
          goal: "Count the devices and apps you use in one day — then guess their carbon cost.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "From the moment you wake up to the moment you sleep: list <b>every</b> digital device and app you use. You have <b>1 minute</b>. Go!"
            },
            {
              type: "fields",
              fields: [{"id":"a1-list","label":"My digital day (devices + apps)","rows":3,"placeholder":"alarm on my phone, WhatsApp, laptop, YouTube, Spotify …"}]
            },
            {
              type: "do",
              n: 2,
              who: "pair",
              text: "Compare lists with the people next to you. Which devices or apps do you <b>all</b> use? Who has the longest list?"
            },
            {"type":"do","n":3,"who":"pair","text":"For the ones you share, compare <b>how long</b> you use them in one day."},
            {
              type: "language",
              title: "Say it like this",
              groups: [
                {
                  label: "Time",
                  phrases: [
                    "In one day, I <b>average</b> about thirty minutes on …",
                    "I <b>spend</b> around two hours a day on …",
                    "I check … <b>at least</b> twenty times a day."
                  ]
                },
                {"label":"Compare","phrases":["<b>We both</b> use …","I use it <b>far more than</b> you do.","<b>Neither of us</b> uses …"]}
              ]
            },
            {
              type: "bet",
              id: "a1-bet",
              title: "Guess before you read: which one makes more CO₂?",
              coins: 6,
              items: [
                {
                  q: "Sending one regular email, or sending one SMS text message?",
                  options: ["A regular email","An SMS text message","About the same"],
                  answer: "A regular email",
                  why: "Griffiths (2020): about 4 g CO₂e for a regular email, but only 0.014 g for a text (paragraph E)."
                },
                {
                  q: "A year of Facebook for one user is about the same as …",
                  options: ["boiling water for a pot of tea","a flight from Sydney to Melbourne","driving a car for a week"],
                  answer: "boiling water for a pot of tea",
                  why: "299 g CO₂e a year — “less than boiling water for a pot of tea” (paragraph G)."
                },
                {
                  q: "Watching online videos produces about what share of global emissions?",
                  options: ["0.01%","1%","10%"],
                  answer: "1%",
                  why: "300 million tonnes a year — roughly 1% of global emissions (paragraph F)."
                }
              ]
            }
          ]
        },
        {
          id: "a2",
          short: "Vocabulary",
          minutes: 5,
          grouping: "Class",
          art: "dec10/assets/week2/d1-v-a2.svg",
          title: "Vocabulary: find your partner",
          goal: "Learn eight words you need for the reading.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "class",
              text: "Your teacher gives you a slip: a <b>word</b> or a <b>definition</b>. Word? Think: what could it mean? Definition? Think: what word could it be?"
            },
            {"type":"do","n":2,"who":"class","text":"Walk around and find your partner. Ask: <b>“What’s on your slip?”</b> You have 5 minutes."},
            {
              type: "match",
              id: "a2-m",
              title: "Check: match the words and the definitions",
              hint: "Tap a word, then its definition.",
              left: [
                "carbon dioxide (n)",
                "data centre (n)",
                "digital carbon footprint (n)",
                "carbon emissions (n)",
                "renewable energy (n)",
                "carbon offset (n)",
                "terawatt (n)",
                "greenhouse gas (n)"
              ],
              right: [
                "a colourless, odourless gas that does not burn, usually known as CO₂",
                "a physical location that uses machines to store data and related items",
                "the carbon dioxide emissions from the digital devices a person or organisation uses",
                "an amount of CO₂ released into the atmosphere",
                "energy from a renewable source, such as solar energy",
                "a measure that makes up for greenhouse gases produced somewhere else, e.g. planting a tree to make up for a flight",
                "a unit of power equal to a million million (one trillion) watts",
                "one of the gases in the atmosphere that add to the greenhouse effect"
              ]
            },
            {
              type: "flip",
              title: "Words that travel together",
              hint: "Academic English loves these chunks. Turn each card.",
              items: [
                {"front":"emit","back":"<b>emit</b> CO₂ → carbon <b>emissions</b>. “A few grams of carbon dioxide <b>are emitted</b> …”","tag":"verb → noun"},
                {"front":"footprint","back":"<b>reduce / cut / shrink</b> your carbon footprint · a <b>large / small</b> footprint","tag":"collocation"},
                {"front":"renewable","back":"run <b>on</b> renewable energy · switch <b>to</b> renewables","tag":"collocation"},
                {"front":"offset","back":"<b>buy</b> carbon offsets · <b>offset</b> your emissions (verb!)","tag":"noun + verb"},
                {"front":"intensive","back":"energy-intensive · carbon-intensive = uses a <b>lot</b> of energy / makes a lot of CO₂","tag":"word part"},
                {"front":"account for","back":"Digital technology <b>accounts for</b> 3.7% of emissions = it is 3.7% of the total.","tag":"numbers"}
              ]
            },
            {
              type: "spinner",
              id: "a2-spin",
              title: "Use a word, tell a truth",
              text: "Spin. Make one true sentence about <b>your</b> life with the word. Your partner says “true” or “really?”.",
              reels: [
                {
                  label: "Word",
                  items: ["data centre","carbon emissions","renewable energy","carbon offset","digital carbon footprint","greenhouse gas","energy-intensive","account for"]
                }
              ]
            }
          ]
        },
        {
          id: "a3",
          short: "Annotate",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/d1-v-a3.svg",
          title: "Annotated reading",
          goal: "Read actively: mark the text so it talks back to you.",
          blocks: [
            {
              type: "key",
              title: "Annotating = talking to the text",
              points: [
                "<b>Style it:</b> highlight, circle or underline, then draw an arrow (→) to the margin and write your comment or thought.",
                "<b>Use symbols:</b> <b>?</b> = I don’t understand this (write your question in the margin). <b>!!!</b> = this is important (write why).",
                "Today, focus on <b>causes</b> and <b>effects</b> of our digital carbon footprint."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d1-annotate.svg",
              alt: "Paragraph B annotated: 53.6% and “responsible for 414kg” highlighted, “each of us” circled, “gadgets” underlined, with arrows to margin notes marked !!!, ? and →.",
              caption: "What an annotated paragraph can look like. Yours will be different — that is the point.",
              size: "wide"
            },
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Open your <b>Student’s book, page 9</b>. You have <b>5 minutes</b>: annotate <b>Paragraph B</b> and write your comments in the <b>Notes</b> column. (No book with you? Use the paragraph and the box below.)"
            },
            {
              type: "passage",
              id: "a3-b",
              title: "Griffiths (2020) · Paragraph B",
              text: "B. Although the energy needed for a single internet search or email is small, 53.6% of the global population now use the internet. The carbon footprint of our gadgets, the internet, and the systems supporting them account for about 3.7% of global greenhouse emissions. If we were to divide the 1.7 billion tonnes of greenhouse gas emissions estimated to be produced in the manufacture and running of digital technologies between all internet users around the world, it means each of us is responsible for 414kg of carbon dioxide a year."
            },
            {
              type: "fields",
              fields: [
                {
                  id: "a3-notes",
                  label: "Comments / Questions / Thoughts (my margin)",
                  rows: 4,
                  placeholder: "? What does “manufacture” include?\n!!! 414 kg per person — that is me!"
                }
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"Compare your annotations with a partner. Can you answer <b>any</b> of your partner’s questions?"},
            {
              type: "language",
              title: "Talk about your annotations",
              groups: [
                {
                  label: "Explain",
                  phrases: [
                    "I <b>highlighted</b> this because it’s the main cause.",
                    "I put a <b>question mark</b> here because I wasn’t sure what … means.",
                    "This is <b>important</b> because …"
                  ]
                },
                {"label":"Help","phrases":["<b>I think it means</b> …","Look at the next sentence — <b>it explains</b> …","<b>So in other words</b>, …"]}
              ]
            }
          ]
        },
        {
          id: "a4",
          short: "SQ3R notes",
          minutes: 20,
          grouping: "Alone",
          art: "dec10/assets/week2/d1-v-a4.svg",
          title: "Reading for note taking: SQ3R",
          goal: "Use the five SQ3R steps to make notes you can speak from.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d1-sq3r.svg",
              alt: "The SQ3R cycle: Survey, Question, Read, Recite, Review.",
              caption: "<b>S</b>urvey · <b>Q</b>uestion · <b>R</b>ead · <b>R</b>ecite · <b>R</b>eview. You will use these notes in a speaking task."
            },
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "<b>Survey</b> (skim, 2 minutes): read the title and the first line of each paragraph. What is the text <b>mainly</b> about?"
            },
            {
              type: "tip",
              text: "The whole text is in your <b>Student’s book, pages 9–10</b>, with a <b>Notes</b> column beside each paragraph. Cite it as Griffiths (2020) or (Griffiths, 2020)."
            },
            {"type":"sources","ids":["footprint"]},
            {
              type: "do",
              n: 2,
              who: "alone",
              text: "<b>Question</b>: write 3–4 questions about the <b>causes</b> and <b>effects</b> of our digital carbon footprint. Use the starters."
            },
            {
              type: "language",
              title: "Question starters",
              groups: [
                {
                  label: "Cause questions",
                  phrases: ["<b>Which</b> online activity uses the most …?","<b>Why</b> does … produce so much CO₂?","<b>What causes</b> …?"]
                },
                {
                  label: "Effect questions",
                  phrases: ["<b>What happens when</b> billions of people …?","<b>Does</b> my daily internet use <b>really</b> cause …?","<b>How much</b> CO₂ does … produce?"]
                }
              ]
            },
            {"type":"do","n":3,"who":"alone","text":"<b>Read</b> the whole text. Look for the answers to <b>your</b> questions."},
            {
              type: "do",
              n: 4,
              who: "alone",
              text: "<b>Recite</b>: as you read, write short notes in your own words in the <b>Notes column in your Student’s book</b> (pp. 9–10). Use symbols (→ ↑ ↓ ∴) from Week 1. Then copy your key notes into the table."
            },
            {
              type: "table",
              id: "a4-sq3r",
              title: "My SQ3R notes",
              columns: ["Step","My notes"],
              fixed: [
                "1. Survey<br>What is the text mainly about?",
                "2. Question<br>My cause and effect questions",
                "3. Read<br>Answers I found",
                "4. Recite<br>My notes as I read"
              ]
            },
            {
              type: "toggle",
              title: "Stuck? See the Teacher’s Book examples",
              hint: "Try first!",
              blocks: [
                {
                  type: "model",
                  title: "Example notes",
                  rows: [
                    ["Survey","The amount of CO₂ emitted globally from individual digital devices, their apps and the storage of their data."],
                    ["Cause question","Which internet app uses the most carbon dioxide?"],
                    ["Effect question","As an individual, does my daily internet use really cause that much environmental damage?"]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "a5",
          short: "Review",
          minutes: 20,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/d1-v-a5.svg",
          title: "Summarise/Paraphrase: Review",
          goal: "Turn your notes into a short summary — then say it, without reading.",
          blocks: [
            {
              type: "key",
              title: "Step 5 · Review: your summary needs three parts",
              numbered: true,
              points: [
                "<b>Introduce</b> the text: who wrote it, when, and the main idea.",
                "<b>Describe</b> the causes and effects of a digital carbon footprint in the article.",
                "<b>Conclude</b> with your viewpoint on individual digital carbon footprints."
              ]
            },
            {
              type: "language",
              title: "Summary frames",
              groups: [
                {
                  label: "1 · Introduce",
                  phrases: [
                    "In <b>his/her</b> 2020 article for BBC Future, Griffiths <b>explains</b> that …",
                    "Griffiths (2020) <b>argues that</b> our internet habits are …",
                    "The article <b>focuses on</b> …"
                  ]
                },
                {
                  label: "2 · Causes + effects",
                  phrases: ["<b>One main cause is</b> …","<b>This is because</b> …","<b>As a result,</b> …","<b>This leads to</b> …","The author <b>also points out that</b> …"]
                },
                {
                  label: "3 · Your view",
                  phrases: ["<b>In my view,</b> individual users …","<b>I would argue that</b> companies should …","<b>Although</b> one email is small, …"]
                }
              ]
            },
            {
              type: "detect",
              id: "a5-dt",
              label: "Summary checker",
              title: "Write your summary (about 100 words)",
              hint: "The lights turn on when your summary has each part.",
              checks: [
                {"label":"Source: Griffiths (2020)","any":["Griffiths","2020"],"color":"#2b776e"},
                {"label":"Cause language","any":["because","due to","caused by","as a result of","since","cause"],"color":"#3a58a0"},
                {"label":"Effect language","any":["as a result","therefore","consequently","leads to","lead to","result in","so "],"color":"#7a4a8c"},
                {"label":"A number from the text","any":["/\\d/"],"color":"#b07d12"},
                {"label":"Your view","any":["in my view","i think","i believe","in my opinion","i would argue","personally"],"color":"#d4583a"}
              ],
              items: [
                {
                  task: "My summary of Griffiths (2020)",
                  rows: 7,
                  placeholder: "In his 2020 article for BBC Future, Griffiths explains that …",
                  model: "In his 2020 article for BBC Future, Griffiths explains that our everyday internet use has a hidden environmental cost. Each online activity needs energy to run devices, networks and data centres, so it emits a few grams of CO₂. Because more than half of the world is now online, these small amounts add up: digital technology accounts for about 3.7% of global greenhouse emissions, or 414 kg of CO₂ per user each year. Emails with photos, video streaming and gaming are the most energy-intensive. As a result, the author suggests simple actions, such as keeping devices longer. In my view, individual users can help, but the biggest companies must act first."
                }
              ]
            },
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Now <b>say</b> your summary to a partner in <b>one minute</b>. Look at your notes, not at your sentences. Then swap."
            },
            {
              type: "checklist",
              id: "a5-peer",
              title: "Listen to your partner. Did they …",
              items: [
                "introduce the text (author, year, main idea)?",
                "give at least one cause and one effect?",
                "use a cause-and-effect phrase correctly?",
                "give their own view at the end?",
                "speak from notes — not read?"
              ]
            }
          ]
        },
        {
          id: "a6",
          short: "Questions",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week2/d1-v-a6.svg",
          title: "Reading for Understanding",
          goal: "Answer test-style questions — from your notes first, then check the text.",
          blocks: [
            {"type":"tip","text":"Test tactic: answer from your <b>notes</b> first. Then open the text only to check. This is why good notes save time."},
            {"type":"sources","ids":["footprint"]},
            {
              type: "quiz",
              id: "a6-q13",
              title: "Questions 1–3 · Match the information to paragraphs A–E (two paragraphs are extra; use each letter once)",
              shared: ["A","B","C","D","E"],
              items: [
                {
                  q: "1. There are different opinions about how to calculate digital carbon footprints.",
                  answer: "C",
                  why: "“few people can agree on what should and should not be included”."
                },
                {
                  q: "2. Upgrading devices less frequently can reduce one’s carbon footprint.",
                  answer: "D",
                  why: "“Simply upgrading our equipment less often is one way of cutting our digital carbon footprint.”"
                },
                {
                  q: "3. Levels of pollution produced by internet habits are related to the overall number of users.",
                  answer: "B",
                  why: "B: one search is small, but 53.6% of the world now uses the internet — so the total is large (414 kg per user)."
                }
              ]
            },
            {
              type: "cloze",
              id: "a6-q46",
              title: "Questions 4–6 · Complete the student notes (paragraphs E, F and G). There are two extra options.",
              options: ["greenhouse gases","carbon footprints","energy-intensive","accessible","eco-friendly"],
              text: "Regular, everyday online activities increase global carbon emissions overall. Emails have varying 4. {{1}}, with spam emitting 0.3g CO2e, regular emails 4g, and photo emails 50g. Using messaging apps is similar to emailing, so text messaging is seen as the most 5. {{2}} option. Gaming is very 6. {{3}}, with US gamers using 2.4% of household electricity and producing 24 megatonnes of CO2 annually.",
              answers: ["carbon footprints","eco-friendly","energy-intensive"]
            },
            {
              type: "bet",
              id: "a6-q78",
              title: "Questions 7–8 · Choose the best option — and bet on it",
              coins: 6,
              items: [
                {
                  q: "7. Based on the information provided in paragraph E, we can conclude that the statistics mentioned are …",
                  options: ["limited and potentially biased","not applicable at a global scale","a useful, but outdated dataset","a product from reliable sources"],
                  answer: "a useful, but outdated dataset",
                  why: "“However, these figures are from a decade ago” — and the impact “could have increased since then”."
                },
                {
                  q: "8. Based on the information presented in the text, we can conclude that the author …",
                  options: [
                    "believes digital technologies will soon become the leading cause of global emissions.",
                    "aims to highlight both the hidden and manageable environmental impacts of internet use.",
                    "argues that personal actions have little effect on digital carbon footprints.",
                    "supports restricting high-emission online activities like video streaming and gaming."
                  ],
                  answer: "aims to highlight both the hidden and manageable environmental impacts of internet use.",
                  why: "Hidden: “Less obvious … data centres”. Manageable: “individuals can still take concrete actions”."
                }
              ]
            }
          ]
        },
        {
          id: "a7",
          short: "Notice",
          minutes: 12,
          grouping: "Pair",
          art: "dec10/assets/week2/d1-v-a7.svg",
          title: "Language focus: cause and effect · Noticing",
          goal: "Find the cause-and-effect language and see how the sentence is built.",
          blocks: [
            {
              type: "spot",
              id: "a7-spot",
              label: "Cause-and-effect spotter",
              title: "Tap the cause-and-effect language (one in each sentence)",
              hint: "The sentences are adapted from the reading. Careful: some highlighted words are just normal words.",
              paras: [
                "Paragraph A: A few grams of [[carbon dioxide]] are emitted [[*due to]] the energy needed to run your devices and power the wireless networks used.",
                "Paragraph C: The [[inclusion]] of emissions from data centres is debated, [[*causing]] further complexity to how to calculate carbon footprints.",
                "Paragraph D: Extending the use of your computer from four to six years can [[avoid]] carbon emissions. [[*As a result]], this practice can reduce your carbon footprint.",
                "Paragraph E: Emailing has an environmental [[*impact]] which could have [[increased]] in the last ten years.",
                "Paragraph F: Streaming videos and using [[social media]] can [[*result in]] a notable increase in global carbon emissions.",
                "Paragraph G: … downloading video games. [[*Because of this]] US gamers use 2.4% of their [[household’s]] electricity."
              ]
            },
            {
              type: "model",
              title: "Look inside one sentence",
              text: "Additionally, the inclusion of emissions from the staff and buildings of technology companies is debated, <b>causing</b> further complexity.",
              rows: [
                ["The causal verb","<b>causing</b>"],
                ["First","the <b>cause</b>: the debate on what emissions should be included"],
                ["Second","the <b>effect</b>: further complexity about what emissions to include"]
              ]
            },
            {
              type: "key",
              title: "Change the order → change the language (sometimes)",
              compare: [
                {
                  label: "The verb changes",
                  text: "The late running train <b>caused</b> me to be late for class.",
                  eg: "I was late for class <b>because of</b> the late running train."
                },
                {
                  label: "It stays the same",
                  text: "<b>Due to</b> the late running train, I was late for class.",
                  eg: "I was late for class <b>due to</b> the late running train."
                }
              ]
            },
            {"type":"tip","text":"The full list of cause-and-effect language is in your <b>Student’s book, page 112</b> (Language Reference)."},
            {
              type: "sort",
              id: "a7-sort",
              title: "What comes after it?",
              hint: "Does the phrase go in front of the CAUSE, or in front of the EFFECT?",
              buckets: [{"label":"… + the CAUSE","text":"e.g. because of the train"},{"label":"… + the EFFECT","text":"e.g. As a result, I was late"}],
              items: [
                {"text":"due to","answer":0},
                {"text":"as a result of","answer":0},
                {"text":"thanks to","answer":0},
                {"text":"on account of","answer":0},
                {"text":"since","answer":0},
                {"text":"consequently","answer":1},
                {"text":"therefore","answer":1},
                {"text":"this has led to","answer":1},
                {"text":"resulting in","answer":1},
                {"text":"for this reason","answer":1}
              ]
            }
          ]
        },
        {
          id: "a8",
          short: "Flip it",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week2/d1-v-a8.svg",
          title: "Language focus: flip it, swap it",
          goal: "Reverse cause and effect, and swap in other phrases — without changing the meaning.",
          blocks: [
            {
              type: "rewrite",
              id: "a8-rw",
              label: "Flip it",
              title: "Put the EFFECT first",
              hint: "Start with the words given. Change the causal language if you need to.",
              items: [
                {
                  q: "Additionally, the inclusion of emissions from the staff and buildings of technology companies is debated, causing further complexity. → <b>Additionally, further complexity …</b>",
                  accept: [
                    "Additionally, further complexity is caused by the debate over the inclusion of emissions from the staff and buildings of technology companies",
                    "Additionally, further complexity is caused by the debate about the inclusion of emissions from the staff and buildings of technology companies",
                    "Additionally, further complexity results from the debate over the inclusion of emissions from the staff and buildings of technology companies"
                  ],
                  model: "Additionally, further complexity is caused by the debate over the inclusion of emissions from the staff and buildings of technology companies.",
                  why: "causing → is caused by (passive)."
                },
                {
                  q: "Watching online videos uses a lot of energy. As a result, it produces about 1% of global emissions. → <b>Watching online videos produces …</b>",
                  accept: [
                    "Watching online videos produces about 1% of global emissions because it uses a lot of energy",
                    "Watching online videos produces about 1% of global emissions because of the energy it uses",
                    "Watching online videos produces about 1% of global emissions due to the energy it uses",
                    "Watching online videos produces about 1% of global emissions as it uses a lot of energy",
                    "Watching online videos produces about 1% of global emissions since it uses a lot of energy"
                  ],
                  model: "Watching online videos produces about 1% of global emissions because it uses a lot of energy.",
                  why: "As a result (+ effect) → because (+ cause)."
                },
                {
                  q: "Extending the life of your computer avoids 190kg of carbon emissions. → <b>190kg of carbon emissions …</b>",
                  accept: [
                    "190kg of carbon emissions can be avoided by extending the life of your computer",
                    "190kg of carbon emissions are avoided by extending the life of your computer",
                    "190kg of carbon emissions is avoided by extending the life of your computer",
                    "190kg of carbon emissions can be avoided as a result of extending the life of your computer"
                  ],
                  model: "190kg of carbon emissions can be avoided by extending the life of your computer.",
                  why: "Active → passive: avoids → can be avoided by."
                }
              ]
            },
            {
              type: "quiz",
              id: "a8-swap",
              title: "Swap it: which phrase can replace the bold words?",
              items: [
                {
                  q: "A few grams of carbon dioxide are emitted <b>due to</b> the energy needed to run your devices.",
                  options: ["as a result of","consequently","resulting in"],
                  answer: "as a result of",
                  why: "Both go in front of the cause. “because of” also works."
                },
                {
                  q: "The inclusion of emissions … is debated, <b>causing</b> further complexity.",
                  options: ["because of","resulting in","due to"],
                  answer: "resulting in",
                  why: "Both are followed by the effect."
                },
                {
                  q: "<b>As a result,</b> this practice can significantly reduce your carbon footprint.",
                  options: ["Consequently,","Because of,","Due to,"],
                  answer: "Consequently,",
                  why: "A linking adverb + comma at the start of the effect sentence."
                },
                {
                  q: "Online activities collectively can <b>result in</b> a notable increase in global carbon emissions.",
                  options: ["lead to","result from","be caused by"],
                  answer: "lead to",
                  why: "“cause” also works. Careful: result <b>from</b> is the opposite direction!"
                },
                {
                  q: "<b>Because of</b> this, US gamers use 2.4% of their household electricity.",
                  options: ["Due to","Therefore","So that"],
                  answer: "Due to",
                  why: "“As a result of” also works."
                }
              ]
            },
            {
              type: "match",
              id: "a8-co2",
              title: "Hidden causes: what does each activity produce?",
              hint: "The text does not always say “cause”. Scan it like an analyst: match the activity (cause) to its CO₂ (effect).",
              left: [
                "Each internet activity",
                "A spam email",
                "A regular email",
                "An email with a photo",
                "Sending an SMS",
                "Regular Google use",
                "Streaming videos (globally)",
                "Gamers in the US",
                "One Facebook user"
              ],
              right: [
                "a few grams of CO₂",
                "0.3 g",
                "4 g",
                "50 g",
                "0.014 g",
                "less than 8 g a day",
                "1% of global emissions a year",
                "32 terawatt hours of energy a year",
                "299 g a year"
              ]
            },
            {
              type: "talk",
              title: "Speak: the cause-and-effect chain game",
              prompts: [
                "Student A says a cause: “More people are streaming videos.” Student B adds an effect with a <b>new</b> phrase: “… which <b>leads to</b> more data centres.” Student A adds the next effect: “<b>Consequently,</b> …” Keep the chain going. Who runs out of phrases first?"
              ]
            }
          ]
        },
        {
          id: "a9",
          short: "Infographic",
          minutes: 13,
          grouping: "Pair",
          art: "dec10/assets/week2/d1-v-a9.svg",
          title: "Language in use: explain the infographic",
          goal: "Explain an infographic to a partner with clear cause-and-effect language.",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week2/d1-infographic.svg",
              alt: "Infographic: Sizing up the internet’s carbon emissions. 4 billion+ internet users; 3.7% of global greenhouse emissions; IT sector electricity demand ranks third in the world.",
              hint: "Tap a number to see one way to say it.",
              spots: [
                {
                  x: 8.5,
                  y: 51,
                  title: "4 BILLION+",
                  text: "“<b>Because</b> over four billion people are now active internet users, small amounts of energy add up …”",
                  label: "1",
                  color: "#2b776e"
                },
                {
                  x: 40.5,
                  y: 51,
                  title: "3.7%",
                  text: "“Our gadgets and the systems behind them <b>account for</b> 3.7% of global greenhouse emissions — similar to the airline industry. These emissions are predicted to double, <b>which means</b> …”",
                  label: "2",
                  color: "#3a58a0"
                },
                {
                  x: 72.5,
                  y: 51,
                  title: "NO.3",
                  text: "“The IT sector needs so much electricity that it ranks behind only China and the US. <b>As a result,</b> …”",
                  label: "3",
                  color: "#d4583a"
                }
              ],
              caption: "Original source: climateimpact.com — Infographic: carbon footprint of the internet."
            },
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Plan (3 minutes). Look at how the three numbers link together. Will you start with the <b>cause</b> or the <b>effect</b>? Choose your phrases."
            },
            {
              type: "steps",
              title: "Your 1-minute explanation",
              items: [
                {"who":"alone","text":"<b>Introduce</b> the topic: “This infographic shows …”"},
                {"who":"alone","text":"Link the information: cause → effect (or effect ← cause)."},
                {"who":"alone","text":"Use <b>three</b> different cause-and-effect phrases from the language focus."},
                {"who":"alone","text":"<b>End</b> with a prediction: will the numbers get better or worse in the next 5 years? Why?"}
              ]
            },
            {
              type: "language",
              title: "Describe an infographic",
              groups: [
                {"label":"Start","phrases":["<b>This infographic shows</b> …","<b>According to</b> the infographic, …","The <b>key figure</b> here is …"]},
                {
                  label: "Link",
                  phrases: ["<b>This is mainly due to</b> …","… <b>which means that</b> …","<b>As a consequence,</b> …","This figure <b>is expected to</b> double by …"]
                },
                {
                  label: "Predict",
                  phrases: [
                    "<b>I expect</b> these numbers <b>to get worse</b> because …",
                    "In five years, <b>it is likely that</b> …",
                    "<b>Unless</b> companies …, the figure will …"
                  ]
                }
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"Take turns. Speak for one minute. Your partner listens and gives feedback on the cause-and-effect language."},
            {
              type: "checklist",
              id: "a9-fb",
              title: "Feedback for your partner",
              items: [
                "introduced the topic",
                "used three different cause-and-effect phrases",
                "the phrases were used correctly (cause/effect in the right place)",
                "ended with a prediction and a reason"
              ]
            },
            {
              type: "toggle",
              title: "Challenge: a harder infographic",
              hint: "Higher level · two key factors",
              blocks: [
                {
                  type: "figure",
                  src: "dec10/assets/week2/d1-infographic2.svg",
                  alt: "Infographic: The internet uses a huge amount of energy due to two key factors — manufacturing and shipping, and powering and cooling.",
                  caption: "Original source: climateimpact.com. Explain the <b>two key factors</b> and one example (search engine, server, web browser or email) to your partner."
                }
              ]
            },
            {
              type: "toggle",
              title: "Listen to a model",
              hint: "Read after you speak",
              blocks: [
                {
                  type: "chat",
                  title: "One student explains the infographic",
                  lines: [
                    [
                      "Mina",
                      "This infographic shows the internet’s carbon footprint. Over four billion people are online, <mark>which means that</mark> even small activities add up."
                    ],
                    [
                      "Mina",
                      "Our gadgets and the systems supporting them <mark>account for</mark> 3.7% of global emissions — the same as the airline industry. <mark>This is mainly due to</mark> the electricity the IT sector needs: it ranks third in the world, behind only China and the US."
                    ],
                    ["Mina","I expect the numbers <mark>to get worse</mark> in the next five years, <mark>because</mark> AI and video streaming are growing so fast."]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "a10",
          short: "Criticality",
          minutes: 15,
          grouping: "Pair",
          art: "dec10/assets/week2/d1-v-a10.svg",
          title: "Criticality: elements of an argument",
          goal: "Take an argument apart — and judge how strong it is.",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week2/d1-argument.svg",
              alt: "An argument drawn as a house: key argument roof, claim pillars, evidence foundation, hidden assumptions underground and language label.",
              hint: "Tap each part of the house.",
              spots: [
                {"x":35,"y":28.5,"title":"Key argument","text":"The <b>main idea</b> the author wants you to accept.","label":"1","color":"#2b776e"},
                {"x":50,"y":58,"title":"Claim","text":"The <b>key points</b> that support the argument.","label":"2","color":"#3a58a0"},
                {
                  x: 29,
                  y: 69,
                  title: "Evidence from sources",
                  text: "Information from <b>experts</b> (studies, reports, data) the author uses to support the claims.",
                  label: "3",
                  color: "#b07d12"
                },
                {
                  x: 30,
                  y: 86.5,
                  title: "Assumptions",
                  text: "Information the author believes the reader <b>already knows</b> — or accepts without proof.",
                  label: "4",
                  color: "#7a4a8c"
                },
                {
                  x: 78.5,
                  y: 33.5,
                  title: "Language",
                  text: "The <b>deliberate choice of words</b> the author uses to communicate the argument.",
                  label: "5",
                  color: "#d4583a"
                }
              ]
            },
            {
              type: "passage",
              id: "a10-c",
              title: "Griffiths (2020) · Paragraph C",
              text: "C. Calculating digital carbon footprints is more complex than it appears because few people can agree on what should and should not be included. This disagreement arises because some argue that emissions from manufacturing computing hardware should be counted, while others believe they should not. Additionally, the inclusion of emissions from the staff and buildings of technology companies is debated, causing further complexity. The figures around the running of data centres are also disputed; many run on renewable energy, which reduces their carbon footprint, while some companies buy “carbon offsets” to mitigate their energy use, leading to differing opinions on their actual impact."
            },
            {
              type: "sort",
              id: "a10-sort",
              title: "Take the paragraph apart",
              hint: "Put each piece into the right part of the argument.",
              buckets: [{"label":"Key argument"},{"label":"Claim"},{"label":"Evidence from sources"},{"label":"Assumption"},{"label":"Language"}],
              items: [
                {"text":"There is much debate over what should be included when calculating a digital carbon footprint.","answer":0},
                {"text":"Calculating digital carbon footprints is more complex than it appears.","answer":1},
                {"text":"Some argue that emissions from manufacturing hardware should be counted, while others believe they should not.","answer":1},
                {"text":"The figures around the running of data centres are also disputed.","answer":1},
                {"text":"No cited study, report or expert in this paragraph.","answer":2},
                {"text":"Using renewable energy reduces a data centre’s carbon footprint.","answer":3},
                {"text":"Buying carbon offsets mitigates a company’s energy use.","answer":3,"why":"An assumption made by companies and reported by the author."},
                {"text":"“is more complex than it appears because …”","answer":4},
                {"text":"“leading to differing opinions on their actual impact”","answer":4}
              ]
            },
            {
              type: "scale",
              id: "a10-scale",
              title: "Negotiate with your partner: how strong is this argument?",
              statement: "Paragraph C presents a strong argument.",
              ends: ["Weak","Strong"],
              answer: 22,
              why: "The argument is <b>weak</b>. It is well explained, but the author gives <b>no sources</b> for the claims, so readers cannot check them or read further. Clear writing is not the same as strong evidence."
            },
            {
              type: "language",
              title: "Negotiate",
              groups: [
                {
                  label: "Give your view",
                  phrases: ["<b>I’d put it</b> closer to weak, <b>because</b> …","It’s <b>well explained</b>, <b>but</b> …","The <b>main problem</b> is that there is no …"]
                },
                {
                  label: "Agree / push back",
                  phrases: ["<b>Fair point</b>, but don’t you think …?","<b>I see what you mean.</b> Let’s meet in the middle.","<b>Can we agree that</b> …?"]
                }
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Co-write a summary of the author’s <b>position</b> to share with the class. Answer the three questions."},
            {
              type: "fields",
              fields: [
                {"id":"a10-1","label":"What is the main point the author wants me to agree with?","rows":2},
                {"id":"a10-2","label":"What reason(s) does the author give to persuade me?","rows":2},
                {"id":"a10-3","label":"What evidence does the author provide?","rows":2},
                {
                  id: "a10-sum",
                  label: "Our summary of the author’s position (2–3 sentences)",
                  rows: 3,
                  placeholder: "Griffiths (2020) argues that … because … However, …"
                }
              ]
            },
            {
              type: "talk",
              title: "Back to the big question",
              prompts: [
                "Who should do more to cut the internet’s carbon footprint — users like you, or the companies? Give one reason from the text.",
                "Would you pay more for a phone that lasts six years? Why / why not?"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "groupwork",
      number: "02",
      code: "2A",
      minutes: 90,
      tone: "clay",
      art: "dec10/assets/week2/s-groupwork.svg",
      title: "AST: Group work skills",
      subtitle: "When the group gets stuck: spot the problem, say the solution",
      outcome: "You can understand problems in a group discussion, suggest solutions, and use problem-solving language in a group task.",
      activities: [
        {
          id: "g1",
          short: "Lead-in",
          minutes: 10,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week2/d1-v-g1.svg",
          title: "Lead-in: you and group work",
          goal: "Share your group-work experience. Only say what you want to say.",
          blocks: [
            {
              type: "scale",
              id: "g1-scale",
              title: "First, where are you?",
              statement: "I like working in a group.",
              ends: ["Not at all","I love it"],
              mid: "It depends"
            },
            {
              type: "talk",
              title: "Discuss in your group",
              prompts: [
                "Have you done many group tasks in your previous studies?",
                "Do you like working in a group?",
                "What are your strengths as a group member?",
                "What are some problems that can arise when working with a group?",
                "What are the consequences of not addressing problems in group-work activities?"
              ]
            },
            {
              type: "language",
              title: "Useful language",
              groups: [
                {
                  label: "Strengths",
                  phrases: [
                    "<b>I’m good at</b> organising / researching / designing slides.",
                    "<b>I’m the kind of person who</b> keeps everyone on track.",
                    "<b>I’d say my strength is</b> …"
                  ]
                },
                {
                  label: "Problems",
                  phrases: ["<b>One thing that can go wrong is</b> …","<b>In my experience,</b> the hardest part is …","<b>If nobody deals with it,</b> …"]
                }
              ]
            }
          ]
        },
        {
          id: "g2",
          short: "Listening 1",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/d1-v-g2.svg",
          title: "Transactional Listening 1",
          goal: "Listen to three students planning a group task. What goes wrong?",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Read the questions. Then listen to Alex, Jamie and Sam <b>once only</b> (your teacher plays the audio)."},
            {
              type: "limit",
              id: "g2-lim",
              title: "Question 1",
              rule: "Write NO MORE THAN THREE WORDS",
              max: 3,
              items: [
                {
                  q: "Which task do they need to work on?",
                  accept: ["Interactive Presentation","the Interactive Presentation","Interactive Presentation task","an Interactive Presentation"],
                  model: "Interactive Presentation"
                }
              ]
            },
            {
              type: "quiz",
              id: "g2-q",
              title: "Questions 2–3",
              items: [
                {
                  q: "2. Sam can’t meet the group on Friday because he is going to …",
                  options: ["the Blue Mountains","Melbourne","the cinema","do his homework"],
                  answer: "Melbourne",
                  why: "“Friday I’m flying to Melbourne for the weekend.” (Alex went to the Blue Mountains — last weekend.)"
                },
                {
                  q: "3. How do they feel about Matt’s participation in the task?",
                  options: ["excited and optimistic","bored and disinterested","satisfied and happy","worried and annoyed"],
                  answer: "worried and annoyed",
                  why: "Jamie sounds annoyed; Alex: “I’m worried that he’s not going to put in as much effort …”"
                }
              ]
            },
            {
              type: "talk",
              title: "Discuss",
              prompts: [
                "What are the <b>2 problems</b> in this situation?",
                "What other problems can arise in group-work activities?",
                "How can these problems make students feel?"
              ]
            },
            {
              type: "toggle",
              title: "The two problems",
              hint: "Check after you discuss",
              blocks: [
                {
                  type: "key",
                  title: "Two problems",
                  points: ["They <b>can’t agree on a time</b> to meet.","One of their groupmates (Matt) <b>isn’t responding</b>."]
                }
              ]
            },
            {
              type: "toggle",
              title: "Listening transcript 1",
              hint: "Open after listening",
              blocks: [
                {
                  type: "chat",
                  title: "Listening 1: planning the group task",
                  right: "Alex",
                  lines: [
                    ["Alex","Hey guys! How’s it going?"],
                    ["Jamie & Sam","Good thanks! You?"],
                    ["Alex","Yeah, good thanks! What did you guys get up to on the weekend?"],
                    ["Sam","Just relaxed mostly, watched movies at home and did some shopping at Broadway. What about you guys?"],
                    ["Alex","I went hiking up in the Blue Mountains. The weather was perfect! And the view is amazing!"],
                    ["Jamie","That sounds lovely! I went to the Glebe markets on Saturday and bought some cool things. You guys should definitely go some time."],
                    [
                      "Alex",
                      "Yeah! I’ll give it a try. So, I was thinking <mark>we really need to set a time to get together and work on</mark> the Interactive Presentation task. What does everyone’s week look like? Maybe we could meet up after class one day?"
                    ],
                    ["Jamie","It’s a bit tight for me. I’m pretty busy. How about you guys?"],
                    ["Sam","I’ve got some free time in the afternoons. Is Wednesday good for anyone?"],
                    ["Alex","I can’t do it on Wednesday. I’m working straight after class until 9 PM at the café in Newtown. <mark>What about</mark> Thursday?"],
                    ["Jamie","On Thursday I always go to the Sport and Fitness Centre for a swim. I really don’t want to break the routine."],
                    ["Alex","That’s fair. Maybe we need another option. Any chance Friday is free for everyone?"],
                    ["Sam","Friday I’m flying to Melbourne for the weekend. I’ll need to go to the airport straight after class."],
                    ["Alex (sounding frustrated)","Hmm…. This is harder than I thought!"],
                    [
                      "Sam",
                      "Yeah, and <mark>we DO need to address the issue that</mark> we still haven’t heard anything from our other groupmate, Matt. I sent him a message last night, and he still hasn’t replied."
                    ],
                    ["Jamie (sounding annoyed)","And he’s not here today. Have you noticed he’s been missing a lot of classes lately."],
                    ["Alex","Yeah, I’m worried that he’s not going to put in as much effort as the rest of us, which isn’t fair."],
                    ["Jamie","I know, and without Matt, the group isn’t complete. It’s going to be really difficult to coordinate things."],
                    [
                      "Sam",
                      "<mark>Maybe we should</mark> talk to the teacher to ask her for some advice. I know they said we should try to work things out between us, but if Matt doesn’t respond, what can we do?"
                    ],
                    [
                      "Alex",
                      "Yeah, that’s a good idea. <mark>If you</mark> try emailing Matt again, <mark>I can</mark> talk to the teacher about it today because I had a few other questions I wanted to ask."
                    ],
                    ["Jamie","That would be great! Thanks, Alex."],
                    [
                      "Alex",
                      "No worries. And <mark>let’s aim to</mark> set up a meeting with the 3 of us this week. <mark>Why don’t we</mark> take another look at our schedules and see what we can do. We’ll figure this out somehow."
                    ]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "g3",
          short: "Problems",
          minutes: 5,
          grouping: "Pair",
          art: "dec10/assets/week2/d1-v-g3.svg",
          title: "Potential Problems",
          goal: "Name six common group-work problems — and recognise them in real life.",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week2/d1-problems.svg",
              alt: "Six group-work problems: allocation of tasks, communication breakdown, different priorities, lack of commitment, time management, personal disagreement.",
              hint: "Tap a problem to see what it means.",
              spots: [
                {
                  x: 8.5,
                  y: 17,
                  title: "Allocation of tasks",
                  text: "<b>Who does what?</b> Nobody knows who is doing the slides, the research or the conclusion — or one person does everything.",
                  label: "1",
                  color: "#d4583a"
                },
                {
                  x: 39.5,
                  y: 17,
                  title: "Communication breakdown",
                  text: "Groupmates <b>don’t understand each other</b>: unclear messages, no replies, different ideas about the task.",
                  label: "2",
                  color: "#3a58a0"
                },
                {
                  x: 71,
                  y: 17,
                  title: "Different priorities / goals",
                  text: "One person wants a <b>high distinction</b>; another just wants to <b>pass</b>.",
                  label: "3",
                  color: "#7a4a8c"
                },
                {
                  x: 8.5,
                  y: 63,
                  title: "Lack of commitment / effort",
                  text: "Some members <b>don’t do their part</b>, miss meetings or reply late.",
                  label: "4",
                  color: "#b07d12"
                },
                {
                  x: 39.5,
                  y: 63,
                  title: "Time management",
                  text: "<b>Different schedules</b> (work, sport, travel) and difficulty meeting deadlines.",
                  label: "5",
                  color: "#2b776e"
                },
                {
                  x: 71,
                  y: 63,
                  title: "Personal disagreement",
                  text: "Two people <b>don’t get on</b>, and it starts to affect the task.",
                  label: "6",
                  color: "#a3416a"
                }
              ]
            },
            {
              type: "sort",
              id: "g3-sort",
              title: "Real life: which problem is it?",
              hint: "Sort each message from a group chat.",
              buckets: [
                {"label":"Allocation of tasks"},
                {"label":"Communication breakdown"},
                {"label":"Different priorities / goals"},
                {"label":"Lack of commitment / effort"},
                {"label":"Time management"},
                {"label":"Personal disagreement"}
              ],
              items: [
                {"text":"“Wait — I thought YOU were doing the slides?”","answer":0},
                {"text":"“I read your message three times and I still don’t know what you want.”","answer":1},
                {"text":"“Honestly, a pass is fine for me. Why are we meeting so much?”","answer":2},
                {"text":"“Seen 2 days ago” — and still no reply.","answer":3},
                {"text":"“I work every evening and you all have sport at lunchtime.”","answer":4},
                {"text":"“I’m not working with him again. He always takes over.”","answer":5}
              ]
            }
          ]
        },
        {
          id: "g4",
          short: "Strategies",
          minutes: 15,
          grouping: "Pair → Group",
          art: "dec10/assets/week2/d1-v-g4.svg",
          title: "Strategies",
          goal: "Share your experience, then judge some problem-solving strategies.",
          blocks: [
            {
              type: "talk",
              title: "1 · Your story",
              prompts: [
                "Have you ever experienced any problems in a group work task?",
                "How did you manage them? Was the problem solved, or did it get worse?",
                "On reflection, what could you have done differently?"
              ]
            },
            {
              type: "language",
              title: "Tell a short story",
              groups: [
                {"label":"Past","phrases":["<b>Once,</b> in my last school, we had to …","<b>The problem was that</b> one member …","<b>In the end,</b> we …"]},
                {"label":"Reflect","phrases":["<b>Looking back,</b> I <b>should have</b> …","<b>If I could do it again,</b> I would …","<b>What I learnt was</b> …"]}
              ]
            },
            {
              type: "match",
              id: "g4-m",
              title: "2 · Match each problem to one strategy",
              hint: "Then open the full list below.",
              left: [
                "Allocation of tasks",
                "Communication breakdown",
                "Different priorities / goals",
                "Lack of commitment / effort",
                "Time management",
                "Personal disagreement"
              ],
              right: [
                "Share your strengths and weaknesses when you assign tasks.",
                "Make it clear if you don’t understand something.",
                "Set group goals early that everyone can agree on.",
                "Agree on some group “rules” to manage behaviour and expectations.",
                "Break the project into smaller tasks with deadlines.",
                "Focus on the task and the problem, not the person."
              ]
            },
            {
              type: "toggle",
              title: "All the strategies",
              hint: "The full table",
              blocks: [
                {
                  type: "model",
                  title: "Problems and strategies",
                  rows: [
                    [
                      "Allocation of tasks (Who does what?)",
                      "Individual members should share their strengths and weaknesses with the group when assigning tasks · Carefully consider how long all tasks will take and make sure this time is evenly distributed · Group members will need to make concessions — you might need to do a task you do not really want to do."
                    ],
                    [
                      "Communication breakdown",
                      "Make it clear if you don’t understand something · Encourage open discussion of the topic and tasks and meet regularly to make sure everyone is on track · Use different communication tools (e.g. emails, chat apps, video calls, Google Docs) to enhance connectivity."
                    ],
                    [
                      "Different priorities / goals",
                      "Set group goals early that everyone can agree on · Listen to everyone’s opinions when setting goals and discuss any disagreements · Make sure that goals are aligned with the course."
                    ],
                    [
                      "Lack of commitment / effort",
                      "Clearly assign roles based on each member’s strengths and interests · Agree on some group “rules” to help manage behaviour and expectations."
                    ],
                    [
                      "Time management",
                      "Set up regular times to meet early and agree on expectations · Groupmates should be clear about their outside commitments · Break the project into smaller, manageable tasks with deadlines."
                    ],
                    [
                      "Personal disagreement",
                      "Focus on the task and the problem to be solved rather than the person · Remember that you don’t have to be “friends” with everyone, but being able to work with a range of different personality types is an important skill for university life and the workplace · Develop a plan for addressing disagreement (e.g. voting)."
                    ]
                  ]
                }
              ]
            },
            {
              type: "talk",
              title: "3 · Discuss the strategies",
              prompts: [
                "Are these the same strategies you suggested for these problems?",
                "Do you think these are good problem-solving strategies?",
                "Can you think of situations in which these strategies wouldn’t work?"
              ]
            },
            {
              type: "order",
              id: "g4-rank",
              title: "Rank them: which strategy would help YOUR group most?",
              items: [
                "Break the project into smaller tasks with deadlines",
                "Set group goals early",
                "Agree on group rules",
                "Meet regularly (online or in person)",
                "Plan how to decide when we disagree (e.g. voting)"
              ],
              ends: ["Most useful","Least useful"],
              why: "There is no single right order — compare yours with your group and explain one choice."
            }
          ]
        },
        {
          id: "g5",
          short: "Listening 2",
          minutes: 15,
          grouping: "Alone → Pair",
          art: "dec10/assets/week2/d1-v-g5.svg",
          title: "Transactional Listening 2",
          goal: "Listen to the teacher’s advice to Alex. Which strategies does she suggest?",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Remember the two problems: they can’t agree on a time to meet, and Matt isn’t responding. <b>Before you listen</b>, brainstorm: what could the group do?"
            },
            {
              type: "fields",
              fields: [
                {"id":"g5-p1","label":"Problem 1 · No time to meet — our ideas","rows":2},
                {"id":"g5-p2","label":"Problem 2 · Matt isn’t responding — our ideas","rows":2}
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Read the questions. Then listen to Alex and the teacher <b>once only</b>."},
            {
              type: "quiz",
              id: "g5-q",
              title: "Questions 1–4",
              items: [
                {
                  q: "1. What strategy does the teacher suggest to deal with the group’s different schedules?",
                  options: [
                    "meet virtually (on Zoom)",
                    "Just meet in the class time",
                    "Find a different group with the same schedule",
                    "Cancel their plans to give them time to meet"
                  ],
                  answer: "meet virtually (on Zoom)",
                  why: "“Have you tried meeting virtually, on Zoom perhaps?”"
                },
                {
                  q: "2. What strategy does the teacher suggest to deal with Matt?",
                  options: [
                    "Ask him to leave the group",
                    "Wait for him to respond",
                    "Talk to him and keep a record of the communication",
                    "Complete all Matt’s work and email it to him"
                  ],
                  answer: "Talk to him and keep a record of the communication",
                  why: "“First of all, you should try to talk to him … Maybe you should keep a record of your communication attempts with Matt.”"
                },
                {
                  q: "3. How does Alex feel at the end of the conversation?",
                  options: ["confused by the teacher","angry with Matt","still worried about the task","more optimistic about the task"],
                  answer: "more optimistic about the task",
                  why: "“That could work well for our group. Thank you!”"
                },
                {
                  q: "4. The teacher thinks that Alex is …",
                  options: ["lazy","handling the situation well","not committed enough to the group","a great leader"],
                  answer: "handling the situation well",
                  why: "“You’re doing the right thing by being proactive and trying to address these issues early.”"
                }
              ]
            },
            {
              type: "toggle",
              title: "All the teacher’s strategies",
              hint: "Compare with your brainstorm",
              blocks: [
                {
                  type: "model",
                  title: "What the teacher suggests",
                  rows: [
                    [
                      "Problem 1 · They can’t find a time to meet",
                      "Try meeting virtually (on Zoom). · Break the project into smaller tasks that can be done individually. Then set up a shared document online where everyone can update their progress, so everyone can contribute in their own time."
                    ],
                    [
                      "Problem 2 · Matt isn’t responding",
                      "Talk to him about it. · Document your efforts to involve everyone: keep a record of your communication attempts with Matt. · Continue to work on the project to the best of your ability, dividing his share of the work among those who are participating. · If Matt doesn’t get involved, let the teacher know."
                    ]
                  ]
                }
              ]
            },
            {
              type: "toggle",
              title: "Listening transcript 2",
              hint: "Open after listening",
              blocks: [
                {
                  type: "chat",
                  title: "Listening 2: Alex asks the teacher for advice",
                  right: "Alex",
                  lines: [
                    ["Alex","Excuse me, do you have a minute?"],
                    ["Teacher","Of course, Alex. What’s on your mind?"],
                    [
                      "Alex",
                      "It’s about our Interactive Presentation task. <mark>We’re having a difficult time</mark> coordinating schedules. And <mark>there’s a mismatch in commitment levels among group members</mark>. One of our group members, Matt, isn’t really participating or even responding to our messages."
                    ],
                    [
                      "Teacher",
                      "I see. Group projects can be challenging with everyone’s different schedules and commitments. <mark>Have you tried</mark> meeting virtually, on Zoom perhaps?"
                    ],
                    [
                      "Alex",
                      "We considered that, but even finding a time when everyone can join a meeting has been difficult. And because Matt hasn’t responded, <mark>we’re not sure where to get started</mark>."
                    ],
                    [
                      "Teacher",
                      "<mark>First of all, you should</mark> try to talk to him about it. <mark>Make sure you</mark> let him know how important the task is, and that the rest of the group is really keen to organise a time to work together."
                    ],
                    ["Alex","Yeah, he’s not here today though."],
                    [
                      "Teacher",
                      "In situations like this, it’s also important to document your efforts to involve everyone. <mark>Maybe you should keep a record of</mark> your communication attempts with Matt. This way, you have something to show that he hasn’t been doing his part."
                    ],
                    ["Alex","That makes sense. We’ll start keeping track of that. But what if he continues not to participate?"],
                    [
                      "Teacher",
                      "If that happens, you and your group should continue to work on the project to the best of your ability. Focus on dividing his share of the work among those who are participating actively. It’s not ideal, but it ensures you’re not dependent on his contribution."
                    ],
                    ["Alex","Okay."],
                    ["Teacher","And if he still doesn’t get involved, please do let me know and we can try to find out what’s happening with him."],
                    ["Alex","And what if our schedules still can’t line up?"],
                    [
                      "Teacher",
                      "You should try to break the project into smaller tasks that can be done individually. It’s always important to allocate tasks to different group members. <mark>You can all work on</mark> research individually. <mark>Then</mark>, set up a shared document online where everyone can update their progress. This way, everyone can contribute in their own time."
                    ],
                    ["Alex","That could work well for our group. Thank you!"],
                    [
                      "Teacher",
                      "You’re doing the right thing by being proactive and trying to address these issues early. Remember, the goal is to learn and manage as a team, even if it means overcoming these types of challenges. Let me know if you need any more help, and keep me updated on your progress."
                    ],
                    ["Alex","Will do. Thank you for your advice!"],
                    ["Teacher","You’re welcome, Alex. Good luck, and keep up the good communication with your group."]
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "g6",
          short: "Language",
          minutes: 15,
          grouping: "Pair",
          art: "dec10/assets/week2/d1-v-g6.svg",
          title: "Language Focus: problem-solving phrases",
          goal: "Catch the phrases in the listening, then learn a full set for your own group work.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Listen to both conversations again. Which phrases do you <b>hear</b>? Which ones are <b>not</b> in the audio?"
            },
            {
              type: "sort",
              id: "g6-sort",
              title: "Heard or not heard?",
              buckets: [
                {"label":"Heard in Listening 1","text":"the students"},
                {"label":"Heard in Listening 2","text":"Alex + the teacher"},
                {"label":"Not heard","text":"in neither"}
              ],
              items: [
                {"text":"We really need to set a time to get together and work on …","answer":0},
                {"text":"What about …?","answer":0},
                {"text":"We need to address the issue that …","answer":0},
                {"text":"Maybe we should …","answer":0},
                {"text":"If you … I can …","answer":0},
                {"text":"Let’s aim to …","answer":0},
                {"text":"Why don’t we …","answer":0},
                {"text":"I suggest we (move on to) …","answer":2},
                {"text":"There seems to be a lack of clear communication among us.","answer":2},
                {"text":"We’re having a difficult time …","answer":1},
                {"text":"There’s a mismatch in commitment levels among group members.","answer":1},
                {"text":"Have you tried …?","answer":1},
                {"text":"First of all, you should …","answer":1},
                {"text":"Make sure you …","answer":1},
                {"text":"Maybe you should keep a record of …","answer":1},
                {"text":"We’re not sure where to get started.","answer":1},
                {"text":"You can all work on … then …","answer":1},
                {"text":"After we’ve done that, you should …","answer":2},
                {"text":"The next thing to do is …","answer":2},
                {"text":"We’re experiencing some challenges with …","answer":2}
              ]
            },
            {
              type: "language",
              title: "Language for group problem-solving · also in your Student’s book, p. 103",
              groups: [
                {
                  label: "Introducing Problems",
                  phrases: [
                    "We need to address (the uneven distribution of workload)",
                    "We’re having a difficult time (verb + ing) …",
                    "There seems to be a lack of clear communication among us.",
                    "We’re experiencing some challenges with …",
                    "It appears there’s a misunderstanding …",
                    "There’s a mismatch in commitment levels among group members.",
                    "We’re / I’m not sure where to get started."
                  ]
                },
                {
                  label: "Making Suggestions",
                  phrases: [
                    "What about … (noun / -ing)?",
                    "Maybe we / you should / could …",
                    "I suggest we (move on to) …",
                    "You might have to …",
                    "Why don’t you (verb) …",
                    "Let’s try …",
                    "Why don’t we have a break.",
                    "Have you tried (verb + ing) …?"
                  ]
                },
                {
                  label: "Allocating Tasks",
                  phrases: [
                    "If you work on … I’ll focus on …",
                    "You can work on … then …",
                    "First of all, you could / should …",
                    "The first thing we need to do is …",
                    "After we’ve done that, you should …",
                    "The next thing to do is …",
                    "Make sure you remember to …",
                    "Be careful not to …",
                    "Okay. The next task we should work on is …"
                  ]
                },
                {
                  label: "Setting Goals / Expectations",
                  phrases: [
                    "We really need to set a time to get together and work on …",
                    "We will meet (every Monday / twice a week) to …",
                    "By (date), we need to have completed …",
                    "I would like to achieve / learn / improve …",
                    "Our objective should be to …",
                    "Let’s aim to …"
                  ]
                },
                {
                  label: "Extra · agree and disagree politely",
                  phrases: [
                    "<b>That’s a good idea.</b>",
                    "<b>That’s fair.</b> Maybe we need another option.",
                    "<b>I see your point, but</b> …",
                    "<b>I’m not sure that would work, because</b> …",
                    "<b>I’m happy to</b> take care of …"
                  ]
                }
              ]
            },
            {
              type: "tip",
              text: "Pronunciation: stress the <b>key word</b> and let your voice go <b>up</b> on suggestions. “Why don’t we meet on <b>Zoom</b>? ↗” sounds friendly. Flat and fast sounds like an order."
            },
            {
              type: "flash",
              id: "g6-flash",
              title: "Memory challenge",
              text: "If you try emailing Matt again, I can talk to the teacher about it today.",
              seconds: 6,
              writer: "Student A",
              reader: "Student B"
            }
          ]
        },
        {
          id: "g7",
          short: "Role-play",
          minutes: 15,
          grouping: "Groups of 3",
          art: "dec10/assets/week2/d1-v-g7.svg",
          title: "Role-Play",
          goal: "Play your role, use the phrases, and reach a solution as a group.",
          blocks: [
            {
              type: "steps",
              title: "How to play",
              items: [
                {
                  who: "group",
                  text: "Your teacher gives each person a role: <b>Student 1</b>, <b>2</b> or <b>3</b>. Read only <b>your</b> card. (Groups of 4: two people are Student 1.)"
                },
                {"who":"group","text":"Stay in role. Use the <b>problem-solving language</b> to discuss the problem."},
                {"who":"group","text":"You have 5 minutes. Try to <b>agree on a solution</b>. Then do Situation 2."}
              ]
            },
            {
              type: "tabs",
              title: "Role cards",
              tabs: [
                {
                  label: "Situation 1",
                  blocks: [
                    {
                      type: "cards",
                      items: [
                        {
                          label: "Student 1",
                          text: "You are really concerned about a group presentation you have to do next week. You really want to set up a few meetings with your group to make a plan and practise."
                        },
                        {
                          label: "Student 2",
                          text: "You are in a new relationship. It’s the first time you’ve ever been in love! You feel that love is more important than your education, and your studies will need to fit in around your new partner. You have plans with them every night this week. You’re not even sure what assessments you have coming up soon."
                        },
                        {
                          label: "Student 3",
                          text: "You are a very confident speaker, and you’re not worried about the presentation. In the last presentation you did, you didn’t even prepare, and you did really well. Maybe you could have a quick 2-minute chat with your group to decide the topic, but you think that’s enough."
                        }
                      ]
                    }
                  ]
                },
                {
                  label: "Situation 2",
                  blocks: [
                    {
                      type: "cards",
                      items: [
                        {
                          label: "Student 1",
                          text: "You are working on a group assessment with 2 other students. You don’t really know your groupmates well and would like to make friends with them because you’re new to the class. You are also very keen to get started on the task."
                        },
                        {
                          label: "Student 2",
                          text: "You are working on a group assessment with 2 other students. You have worked with one of the students (Student 3) before. You think they didn’t put in enough effort and that you had to do all the work. You are very ambitious and would like to get a very high grade for this task."
                        },
                        {
                          label: "Student 3",
                          text: "You are working on a group assessment with 2 other students. You have worked with one of the students (Student 2) before. You think they were too controlling and you didn’t have any freedom to do your part of the task in your own way. You would be happy just to get a pass grade on the task as you don’t want too much stress."
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {"type":"tip","text":"Keep your <b>Student’s book open at page 103</b> (Language for group problem-solving) while you play."},
            {
              type: "checklist",
              id: "g7-used",
              title: "Tick the phrases you USED (be honest!)",
              items: [
                "Introducing a problem (e.g. We need to address …)",
                "Making a suggestion (e.g. Why don’t we …? / Maybe we should …)",
                "Allocating tasks (e.g. If you work on … I’ll focus on …)",
                "Setting goals (e.g. Let’s aim to … / By Friday, we need to have completed …)",
                "Disagreeing politely (I see your point, but …)"
              ]
            },
            {
              type: "fields",
              fields: [{"id":"g7-sol","label":"Our solutions (one line for each situation)","rows":2,"placeholder":"Situation 1: … · Situation 2: …"}]
            },
            {
              type: "spinner",
              id: "g7-spin",
              title: "Extra round: a new problem",
              text: "Fast group? Spin a new problem and solve it in 2 minutes. Everyone must use one phrase.",
              reels: [
                {
                  label: "Problem",
                  items: [
                    "One member wants to do everything alone.",
                    "Nobody wants to present the conclusion.",
                    "Two members copied text from a website.",
                    "The group chat is in a language one member can’t read.",
                    "The deadline is tomorrow and the slides are not finished.",
                    "One member always arrives 20 minutes late."
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "g8",
          short: "AI coach",
          minutes: 10,
          grouping: "Optional · Pair",
          art: "dec10/assets/week2/d1-v-g8.svg",
          title: "Optional Extra Activity: Using Artificial Intelligence for Problem Solving in Groups",
          goal: "Ask an AI group-work coach about your role-play problem. Is its advice like yours?",
          blocks: [
            {
              type: "steps",
              title: "Open the Group Work Coach",
              items: [
                {"who":"pair","text":"Log in to your <b>University of Sydney email</b>. Then open <b>https://app.cogniti.ai/agents/</b> in a new tab."},
                {"who":"pair","text":"In the box <b>“Search for agents”</b>, type <b>group</b>."},
                {"who":"pair","text":"Open <b>Group Work Coach</b> and click the <b>Message</b> icon to start a chat."},
                {"who":"pair","text":"Type <b>PATHWAY 2:</b> and then your problem. The chatbot will ask for more details — be specific."}
              ]
            },
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Ask it about <b>one</b> problem from your role-play. Did the Group Work Coach give similar advice to your group?"
            },
            {
              type: "fields",
              fields: [{"id":"g8-ask","label":"What we asked","rows":2},{"id":"g8-same","label":"Same as our ideas / new ideas from the AI","rows":3}]
            }
          ]
        }
      ]
    },
    {
      id: "rsintro",
      number: "03",
      code: "3A",
      minutes: 30,
      tone: "plum",
      art: "dec10/assets/week2/s-rsintro.svg",
      title: "Introduction to research summary presentations",
      subtitle: "Your first Research Summary starts today",
      outcome: "You know what the Research Summary task asks you to do, and you are ready to start your research.",
      activities: [
        {
          id: "r1",
          short: "The task",
          minutes: 4,
          grouping: "Class",
          art: "dec10/assets/week2/d1-v-r1.svg",
          title: "Introduction: what is a Research Summary?",
          goal: "See the whole task on one page — and where you are today.",
          blocks: [
            {
              type: "key",
              title: "Why do a Research Summary?",
              points: [
                "To build a <b>deeper understanding</b> of this week’s sustainability topic by doing more research.",
                "To <b>practise</b> for the Interactive Presentation assessment (and your Seminar).",
                "Two parts: <b>(1)</b> research and summarise <b>one source</b> by yourself; <b>(2)</b> present a <b>group</b> summary of everyone’s research.",
                "Class time is your starting point. You finish the research and preparation <b>after class</b>."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week2/d1-timeline.svg",
              alt: "The Research Summary timeline: Day 1 research one source; Day 2 share your 2-minute summary; Day 2 homework prepare a 5–7 minute group presentation; Days 4–4 present.",
              caption: "You do this twice this term: now (Weeks 2, 3) and again in Week 6. Today = step 1.",
              size: "wide"
            },
            {
              type: "order",
              id: "r1-order",
              title: "Quick check: put the steps in order",
              items: [
                "Day 1: Individuals research and prepare a summary of research",
                "Day 2: Individuals form groups and share their summaries",
                "Day 2: Groups prepare a Group Presentation which summarises each member’s research",
                "Day 4 – Day 5: Groups deliver their Research Summary Group Presentations"
              ]
            }
          ]
        },
        {
          id: "r2",
          short: "Research skills",
          minutes: 2,
          grouping: "Class",
          art: "dec10/assets/week2/d1-v-r2.svg",
          title: "Prepare to do your research",
          goal: "Remember the Research Skills element of the Academic Success Toolkit.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d1-research.svg",
              alt: "Research skills: online multimedia research plus traditional sources leads to applying criteria to evaluate validity, credibility and reliability.",
              caption: "AST · Research skills. Remember the <b>CRAAP test</b> from Week 1: Currency, Relevance, Authority, Accuracy, Purpose."
            },
            {"type":"sticky","text":"A video, a podcast or a report is OK — multimodal sources are allowed. But test it first!"}
          ]
        },
        {
          id: "r3",
          short: "Why summarise?",
          minutes: 10,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week2/d1-v-r3.svg",
          title: "Individual research and summary of research",
          goal: "Talk about why we summarise, what makes a good summary and what makes it hard.",
          blocks: [
            {
              type: "talk",
              title: "Discuss in your group",
              prompts: [
                "Why do you need to summarise your reading or your research?",
                "What makes a good summary?",
                "What are the challenges in summarising?",
                "How do you think you should approach summarising your reading or your research?"
              ]
            },
            {
              type: "flip",
              title: "Now check: turn the cards",
              items: [
                {
                  front: "Why summarise?",
                  back: "To prepare for exams, class discussions, writing and presentations. Summaries are also <b>efficient</b>: you don’t have to re-read the source. So they must be <b>clear and accurate</b> — and your purpose decides what you summarise."
                },
                {
                  front: "A good summary is …",
                  back: "<b>1 Focused</b> on the parts relevant to your purpose. <b>2 Accurate</b> — it presents the source ideas correctly. <b>3 In your own words</b> — so you know you understood it."
                },
                {
                  front: "What makes it hard?",
                  back: "Not understanding the source well · weak paraphrasing · not knowing which words you can copy (technical words) and which you must paraphrase (general words)."
                },
                {"front":"Source","back":"Swales, J. M., &amp; Feak, C. B. (2012). <i>Academic writing for graduate students</i> (3rd ed.)."}
              ]
            },
            {
              type: "quiz",
              id: "r3-q",
              title: "Copy it or change it?",
              items: [
                {
                  q: "“data centre” in your summary",
                  options: ["Keep it (technical term)","Paraphrase it"],
                  answer: "Keep it (technical term)",
                  why: "There is no simpler word. Technical terms can stay."
                },
                {
                  q: "“For all the convenience afforded by the internet …”",
                  options: ["Keep it (technical term)","Paraphrase it"],
                  answer: "Paraphrase it",
                  why: "General language: say it your way — “Although the internet makes life easier …”."
                },
                {
                  q: "“greenhouse gas emissions”",
                  options: ["Keep it (technical term)","Paraphrase it"],
                  answer: "Keep it (technical term)",
                  why: "A technical term — keep it."
                }
              ]
            }
          ]
        },
        {
          id: "r4",
          short: "Details",
          minutes: 14,
          grouping: "Alone",
          art: "dec10/assets/week2/d1-v-r4.svg",
          title: "Task Description and Details",
          goal: "Choose a research question and know the 7 steps to your verbal summary.",
          blocks: [
            {
              type: "key",
              title: "Your task",
              points: [
                "Based on this week’s reading and topic, <b>research</b> more sources to build a deeper understanding.",
                "No full literature review: find a <b>small pool</b> of sources, then focus on <b>one</b>. Multimodal sources are allowed.",
                "Spend <b>one hour</b> after class: 30 minutes to find an article · 30 minutes to read and prepare your summary."
              ]
            },
            {
              type: "cards",
              title: "Choose a guiding question for your research",
              pick: "r4-q",
              items: [
                {"label":"1","text":"Is there any gap in your understanding of the week’s topic?"},
                {"label":"2","text":"What other cause/s of the problem can you find?"},
                {"label":"3","text":"What other perspectives on the cause/s of the problem can you find?"},
                {"label":"4","text":"What other effect/s of the problem can you find?"},
                {"label":"5","text":"What other perspectives on the effect/s of the problem can you find?"},
                {"label":"6","text":"How is this problem and its causes and/or effects being discussed in your future field of study?"},
                {"label":"7","text":"How is this problem and its causes and/or effects being addressed in your country?"}
              ]
            },
            {
              type: "fields",
              fields: [
                {
                  id: "r4-search",
                  label: "My first search words (try 2–3)",
                  rows: 2,
                  placeholder: "data centres water use · AI energy consumption · e-waste Vietnam …"
                }
              ]
            },
            {
              type: "order",
              id: "r4-steps",
              title: "The 7 steps: put them in order",
              items: [
                "Skim the text and its subheadings to find the useful sections.",
                "Read those sections in detail and understand the key points.",
                "List the main points and supporting details in your own words, in note form, with symbols.",
                "Add your reactions or thoughts about the information.",
                "Practise saying your summary from your notes — refer to the source.",
                "Check: focused on your purpose, accurate, your own words, ideas linked.",
                "Link it to a sustainability framework (Triple Bottom Line, DTM or IPAT)."
              ]
            },
            {
              type: "tip",
              text: "Research is never perfect. Can’t find the exact answer? That’s OK — summarise something <b>interesting</b> that taught you something new. Don’t spend more than 30 minutes looking for the “perfect” article."
            },
            {
              type: "key",
              tone: "warn",
              title: "Tomorrow: a VERBAL summary",
              points: [
                "You share your summary in groups first thing tomorrow (about 2 minutes).",
                "You can look at your <b>notes</b>, but you must <b>not read</b> a written summary. Do not write it out in full."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "rsprep",
      number: "04",
      code: "4A",
      minutes: 60,
      tone: "amber",
      art: "dec10/assets/week2/s-rsprep.svg",
      title: "Research summary preparation Homework",
      subtitle: "Learn from a sample, then prepare your own 2-minute summary",
      outcome: "You have researched one source, made notes, and practised a clear, well-structured 2-minute verbal summary.",
      activities: [
        {
          id: "h1",
          short: "The sample",
          minutes: 5,
          grouping: "Homework",
          art: "dec10/assets/week2/d1-v-h1.svg",
          title: "Prepare for the task: how one student did it",
          goal: "See the steps a student followed to find and check a source.",
          blocks: [
            {
              type: "key",
              title: "The sample: urbanisation",
              points: [
                "The student wanted more information about the <b>causes</b> of urbanisation in different countries, and its <b>effects</b>.",
                "Source: “The Impacts of Urbanisation on Landscape and Environment: The Case of Slovakia” (2022), in the journal <i>Sustainability</i>, published by MDPI (Multidisciplinary Digital Publishing Institute)."
              ]
            },
            {
              type: "order",
              id: "h1-order",
              title: "Put the student’s steps in order",
              items: [
                "Did a search for an article on urbanisation causes and effects.",
                "Found the Slovakia article — a different country and continent from class, with a lot on causes and effects.",
                "Checked it was appropriate with the evaluation criteria from Week 1 (Research skills).",
                "Decided exactly what they were looking for (causes and effects) to focus their reading.",
                "Read the article and made notes as they read."
              ]
            },
            {"type":"talk","title":"Think (or tell someone at home)","prompts":["Why did the student like this source? Would the same reason work for you?"]}
          ]
        },
        {
          id: "h2",
          short: "The notes",
          minutes: 5,
          grouping: "Homework",
          art: "dec10/assets/week2/d1-v-h2.svg",
          title: "The student’s notes",
          goal: "Read real notes: a cause/effect table, abbreviations and arrows.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week2/d1-notes.svg",
              alt: "The student’s handwritten cause and effect notes on urbanisation in Slovakia, with arrows and abbreviations.",
              caption: "The student’s note-taking table. Notice the abbreviations and the arrows."
            },
            {
              type: "match",
              id: "h2-abbr",
              title: "Decode the abbreviations",
              left: ["econ.","invest.","Res.","Agr","neg. imp.","int’s","urbanisatⁿ","↑","⟶"],
              right: ["economy / economic","investment","residential","agricultural","negative impact","interests","urbanisation","increase / growing","leads to"]
            }
          ]
        },
        {
          id: "h3",
          short: "Listen + notice",
          minutes: 10,
          grouping: "Homework",
          art: "dec10/assets/week2/d1-v-h3.svg",
          title: "The student’s verbal summary",
          goal: "Study how the summary is structured and linked.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Listen to the student practising the summary from their notes (audio on Canvas). Then study the transcript."},
            {
              type: "spot",
              id: "h3-spot",
              label: "Linking language",
              title: "Tap the linking language the student uses to connect causes, effects and the solution",
              hint: "There are six. Some highlighted words are just content.",
              paras: [
                "So I found this article about Slovakia and it was very useful I thought because it’s got both the causes and effects of urbanisation.",
                "So I read that the causes were from the development from the communist era up until about 1989, when the centrally controlled economy transformed into a more open market, free market-based economy. [[*Now in the meantime]], there was growing population, growing households in Slovakia. [[*So]] there was a lot of pressure from the market to invest in constructing houses and transport and shopping and recreational infrastructure, everything that you need for a [[growing population]]. [[*Now, the effect of that, however]], was that agricultural land and animal habitats were being converted to make space for all this [[urban construction]]. [[*So that now has led to]] ecosystem damage and a negative impact on the environment. [[*So the writer’s solution is]] that we must, in order to lower the negative impact of this urban development, we have to consider economic interests, but only in conjunction with environmental interests. Now [[*that solution ties in very well actually with]] the triple bottom line framework, which says that companies need to focus on environmental concerns just as much as they do on profit making.",
                "So as I said, this was a really interesting article to see an analysis of the causes, effects and in fact a solution of a specific sustainability issue in a specific country."
              ]
            },
            {
              type: "model",
              title: "The structure of the summary",
              list: [
                "<b>Introduce</b> the article / country. Say <b>why you chose it</b>.",
                "<b>Summarise</b> the main points.",
                "Use <b>linking words</b> throughout to show causes, effects and solutions.",
                "<b>Link it to a framework</b> (Triple Bottom Line, IPAT, DTM).",
                "<b>Conclude</b> by re-stating why you chose the article."
              ]
            },
            {
              type: "language",
              title: "Add these to your summary",
              groups: [
                {
                  label: "Open",
                  phrases: ["<b>I found an article</b> in … about …","<b>I chose it because</b> it covers both …","It was published <b>in 2023 by</b> …"]
                },
                {
                  label: "Link",
                  phrases: ["<b>The main cause</b> seems to be …","<b>The effect of that</b> was …","<b>This has led to</b> …","<b>On top of that,</b> …"]
                },
                {
                  label: "Framework + close",
                  phrases: [
                    "<b>This ties in with</b> the IPAT equation, <b>because</b> …",
                    "<b>From a triple bottom line perspective,</b> …",
                    "<b>So, as I said,</b> this was useful because …"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "h4",
          short: "My research",
          minutes: 25,
          grouping: "Homework",
          art: "dec10/assets/week2/d1-v-h4.svg",
          title: "Follow the same process: your research",
          goal: "Find one source, check it, and make cause-and-effect notes.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"<b>30 minutes</b> to find a source. Use your guiding question from class."},
            {
              type: "fields",
              title: "My source",
              fields: [
                {"id":"h4-title","label":"Title","rows":1},
                {"id":"h4-who","label":"Author / organisation and year","rows":1},
                {"id":"h4-where","label":"Where it was published + link","rows":1},
                {"id":"h4-why","label":"Why I chose it (one sentence)","rows":2}
              ]
            },
            {
              type: "checklist",
              id: "h4-craap",
              title: "Quick CRAAP check",
              items: [
                "Current: recent enough for this topic",
                "Relevant: it answers my guiding question",
                "Authority: a real expert, journal, university or organisation",
                "Accurate: it gives evidence or data",
                "Purpose: it informs — it is not just selling something"
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"<b>30 minutes</b> to read and make notes. Notes only — use symbols and abbreviations like the sample."},
            {"type":"table","id":"h4-notes","title":"My note-taking table","columns":["Cause/s","Effects","My reactions / thoughts"],"rows":4},
            {
              type: "cards",
              title: "Which framework fits your information?",
              pick: "h4-fw",
              items: [
                {"label":"Triple Bottom Line","text":"profit · people · planet"},
                {"label":"IPAT","text":"Impact = Population × Affluence × Technology"},
                {"label":"DTM","text":"the demographic transition model"}
              ]
            },
            {"type":"fields","fields":[{"id":"h4-fw-how","label":"How my information links to the framework (notes)","rows":2}]}
          ]
        },
        {
          id: "h5",
          short: "Practise",
          minutes: 15,
          grouping: "Homework",
          art: "dec10/assets/week2/d1-v-h5.svg",
          title: "Practise your verbal summary",
          goal: "Say your summary out loud from notes — about 2 minutes.",
          blocks: [
            {
              type: "steps",
              title: "Practise three times",
              items: [
                {"who":"alone","text":"<b>Round 1:</b> say it with your notes. Stuck? Go back to the text to clarify."},
                {"who":"alone","text":"<b>Round 2:</b> record yourself on your phone (2 minutes). Listen back."},
                {"who":"alone","text":"<b>Round 3:</b> say it to a friend, a family member — or the mirror. Look up from your notes."}
              ]
            },
            {
              type: "checklist",
              id: "h5-check",
              title: "Step 6 · Make sure",
              items: [
                "My summary is clearly focused on my topic and purpose (e.g. to find a cause or effect).",
                "I am confident my summary accurately represents the source ideas.",
                "It is in my own words, and the ideas are linked with linking words and rhetorical functions.",
                "I refer to the source (author, year).",
                "I link it to a framework.",
                "I speak from notes — I don’t read."
              ]
            },
            {
              type: "scale",
              id: "h5-ready",
              title: "How ready are you for tomorrow?",
              statement: "I can give my 2-minute summary from notes without reading.",
              ends: ["Not yet","Totally ready"]
            },
            {
              type: "key",
              title: "Tomorrow, first thing",
              points: ["Bring your <b>notes</b> (not a script).","You share your summary in a group, then your group plans a 5–7 minute presentation for Day 4 or Day 5."]
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
    [
      "carbon offset",
      "something that makes up for emissions produced somewhere else, e.g. planting trees",
      "Some companies buy carbon offsets to mitigate their energy use."
    ],
    ["energy-intensive","using a lot of energy","Gaming is very energy-intensive."],
    ["account for","to be a part or share of a total","Digital technology accounts for about 3.7% of global emissions."],
    ["SQ3R","a note-taking method: Survey, Question, Read, Recite, Review","I used SQ3R to prepare for the speaking task."],
    ["annotate","to add marks and notes to a text as you read","Annotate the paragraph with ? and !!!."],
    ["claim","a key point that supports an argument","The claim is that the figures are disputed."],
    ["assumption","something an author believes is true without giving proof","The author assumes renewable energy reduces the footprint."],
    ["allocate","to give a task or a share to someone","Let’s allocate the tasks by Friday."],
    ["verbal summary","a short spoken summary, given from notes","Tomorrow I will give a 2-minute verbal summary of my source."]
  ]
};
