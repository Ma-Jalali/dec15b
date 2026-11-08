/* DEC10 · Week 4 · Day 2 (Tuesday) — Listen, synthesise, write.
   Built from the Week 4 Teacher's Book (W4 D2 5A, 6A + 6B, 7A, 8A), the Week 4 student booklet and the revised weekly map:
   W4 D2. 5 Listening to write (40) · 6 Mediation (80) · 7 Integrated Writing Practice Assessment (90) · 8 Integrated writing workshop HW.
   Activity titles follow the TB headings; TB answer keys are in `answers` or in the blocks' own answer fields.
   The practice assessment task itself is on Canvas: this page gives the TB instructions, timing and a checklist only.
   Protected texts are in sources.js and are never changed here. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w4d2",
  week: 4,
  day: 2,
  title: "Listen, synthesise, write",
  duration: "About 3.5 hours + homework",
  question: "Eco-tourism promises to help nature, local people and the planet — can it really keep its promises?",
  questionKind: "Big question",
  questionLabel: "Today’s big question · it is the topic of this week’s essays",
  journey: "Compare your podcast summaries and learn the language of perspective, build a synthesis matrix from three sources on eco-tourism, write the Integrated Writing Practice Assessment on Canvas, then study Sample essay 4.1 and its text map at home.",
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
      subtitle: "Your podcast summary — and the language of perspective",
      outcome: "You evaluate your summary by comparing it with other people’s work, and you identify and use language to express evaluation, attitude, opinion and stance.",
      activities: [
        {
          id: "a1",
          short: "The answer",
          minutes: 8,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d2-a1.svg",
          title: "Homework review: How did the listening answer the question?",
          goal: "Agree with your group: what is the podcast’s answer to its own question?",
          blocks: [
            {
              type: "key",
              title: "Yesterday’s homework",
              points: [
                "You listened to a BBC podcast — <i>The Climate Question: “Can tourism ever be good for the climate?”</i> (Alom, 2023) — and wrote a <b>summary</b>.",
                "Three voices: the <b>host</b>, <b>Ralph Buckley</b> (Griffith University, Australia) and <b>Stefan Gossling</b> (Lund University, Sweden)."
              ]
            },
            {
              type: "listening",
              source: "Alom (2023) · BBC The Climate Question",
              title: "Can tourism ever be good for the climate?",
              videoId: "nDplkL3wJrg",
              start: 447,
              audio: "",
              clip: "from 7:27",
              url: "https://www.bbc.co.uk/sounds/play/w3ct5bkk",
              urlLabel: "Listen on BBC Sounds",
              transcripts: [["alom","Transcript (open after listening)"]]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-three-voices.svg",
              size: "wide",
              alt: "Three speakers around a microphone. The host asks the questions. Ralph Buckley says eco-tourism is never well defined and, on a global level, does more harm than good. Stefan Gossling says tourism is about 10% of global warming and offers a solution: internalise the cost of carbon dioxide.",
              caption: "Three voices, one question: who says what?"
            },
            {"type":"do","n":1,"who":"group","text":"Discuss with your group: <b>How did the listening answer the question “Can tourism ever be good for the climate?”</b> Then one person reports back to the class (5 minutes)."},
            {
              type: "scale",
              id: "a1-scale",
              title: "The podcast’s answer",
              statement: "Tourism can be good for the climate.",
              ends: ["No","Yes"],
              mid: "Partly",
              answer: 20,
              why: "Overall, the answer tends towards <b>negative</b>. Buckley: “the cost is its contribution to climate change and there isn’t really any way to avoid that unpleasant part of the equation.” The only optimistic voice is Gossling, who at least offers a solution."
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-tourism-footprint.svg",
              size: "wide",
              alt: "Infographic: tourism was about 10% of global warming in 2019. A pie with three equal parts: aviation (one third), food (one third), and other transport, accommodation, shopping and activities (one third).",
              caption: "Gossling’s numbers: tourism ≈ 10% of global warming (2019)."
            },
            {
              type: "language",
              title: "Useful language: reporting back",
              groups: [
                {"label":"The answer","phrases":["Overall, the answer tends to be negative / positive.","According to Buckley, …","The only optimistic voice is …, who …"]},
                {"label":"Group view","phrases":["We all agreed that …","Most of us felt that …, but one person thought …","What surprised us was …"]}
              ]
            }
          ],
          answers: {
            title: "Answer key",
            items: [
              ["Buckley","Unlikely: “… the cost is its contribution to climate change and there isn’t really any way to avoid that unpleasant part of the equation.”"],
              ["The host","Confirms it: “So what you’re saying, Ralph, is … on a global level, it’s doing more harm than good?” Buckley: “Yes, I think that regrettably that is indeed the case.”"],
              ["Gossling","The only optimistic response: he offers a solution — to drastically alter our behaviour and to internalise the cost of carbon dioxide."],
              ["Overall","The response tends towards negative."]
            ]
          }
        },
        {
          id: "a2",
          short: "Summaries",
          minutes: 12,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d2-a2.svg",
          title: "Homework review: Compare your summaries",
          goal: "Compare your summary with your group’s and with a sample — and steal the best language.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Put your summaries side by side. Go through the six questions together. Rate <b>your own</b> summary for questions 3–6."},
            {
              type: "talk",
              title: "Compare",
              prompts: ["1. What were the main points you included in your summary?","2. What were the similarities and differences between them?"]
            },
            {
              type: "form",
              id: "a2-form",
              title: "My summary · self-check",
              intro: "Choose Yes, Mostly or Needs work. Write the words you used.",
              sections: [
                {
                  label: "Does my summary …",
                  items: [
                    "3. start with an introductory sentence stating the name of the listening and the main idea?",
                    "4. compare/contrast the perspectives of the three speakers? (Which words did I use?)",
                    "5. use signalling nouns / summary phrases?",
                    "6. conclude with my personal evaluation on the topic? (Which words did I use?)"
                  ]
                }
              ]
            },
            {"type":"do","n":2,"who":"group","text":"Now read the sample summary. Tap the language that <b>compares the speakers</b>, the <b>summary phrases</b> and the words that <b>evaluate</b>."},
            {
              type: "spot",
              id: "a2-spot",
              label: "Language spotter",
              title: "Sample summary · Alom (2023)",
              hint: "Find language to compare perspectives, summary phrases / signalling nouns, and personal evaluation. Some highlighted words are just content.",
              paras: [
                "The listening Can tourism ever be good for the climate? [[*is essentially about]] what ecotourism means and how effective it is. The host puts [[*these two questions]] to two academics in the field, Ralph Buckley and Stefan Gossling. Buckley [[*believes that]] the concept is too vague, with other terms such as [[sustainable, responsible, and regenerative tourism]] also being used. He [[*adds that]] these different terms are useless because they are not put into [[clear laws]]. [[*Gossling’s focus is more on]] the contribution that tourism makes to [[global warming]], but [[*both Gossling and Buckley agree that]], while there are local benefits to ecotourism, the global environmental cost outweighs these benefits. [[*In terms of a solution]], Buckley is not optimistic, [[*but Gossling does at least]] specify what actions need to be taken to reduce the global impacts of tourism.",
                "[[*This discussion]] on ecotourism raised [[*important issues]]. [[*Unfortunately, however]], changing people’s behaviour, as suggested by Gossling, [[*seems a difficult task]]."
              ]
            },
            {
              type: "language",
              title: "Language for your summary",
              groups: [
                {"label":"Introduce","phrases":["The listening … is essentially about …","The speakers discuss …","The host puts these questions to …"]},
                {"label":"Compare perspectives","phrases":["X believes / claims / suggests that …","X’s focus is more on …","Both X and Y agree that …","From X’s perspective, …","X is not optimistic, but Y does at least …"]},
                {"label":"Summary phrases","phrases":["these two questions","this discussion","the concept","these benefits","this issue"]},
                {"label":"Evaluate","phrases":["This discussion raised important issues.","Unfortunately, however, … seems a difficult task.","My perspective on ecotourism is …"]}
              ]
            }
          ],
          answers: {
            title: "Language in the sample summary",
            items: [
              ["Compare the speakers’ perspectives","Buckley believes that … · He adds that … · Gossling’s focus is more on … · both Gossling and Buckley agree that … · Buckley is not optimistic, but Gossling does at least …"],
              ["Signalling nouns / summary phrases","is essentially about … · these two questions · In terms of a solution · This discussion"],
              ["Personal evaluation at the end","This discussion on ecotourism raised important issues. Unfortunately, however, changing people’s behaviour … seems a difficult task."]
            ]
          }
        },
        {
          id: "a3",
          short: "Perspective",
          minutes: 20,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-a3.svg",
          title: "Language Focus: Perspective",
          goal: "Recognise evaluation, attitude, opinion and stance in the podcast — then use them in your summary.",
          blocks: [
            {
              type: "key",
              title: "Four parts of a person’s perspective",
              points: [
                "<b>Evaluation</b>: a judgement based on facts",
                "<b>Attitude</b>: feeling or position on a subject",
                "<b>Opinion</b>: a personal judgement",
                "<b>Stance</b>: a position on a subject which is made <b>publicly</b>"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-perspective.svg",
              size: "wide",
              alt: "Four lenses in a row: Evaluation (a set of scales: a judgement based on facts), Attitude (a face with a speech bubble: a feeling), Opinion (a thought bubble: a personal judgement) and Stance (a speaker at a microphone: a position made publicly). Each lens has a positive side in green and a negative side in orange.",
              caption: "Evaluation · Attitude · Opinion · Stance"
            },
            {"type":"do","n":1,"who":"pair","text":"Open the transcript. Scan it for one example of each: evaluation, attitude, opinion, stance. Then turn the cards to compare."},
            {"type":"sources","ids":["alom"]},
            {
              type: "flip",
              title: "Examples from the transcript",
              hint: "Guess the example first — then turn the card.",
              items: [
                {"front":"Evaluation","back":"“Sounds simple enough, but not really.”"},
                {"front":"Attitude","back":"“Food is a surprisingly large carbon footprint.”"},
                {"front":"Opinion","back":"“The most important part is probably to internalise the cost of carbon dioxide.”"},
                {"front":"Stance","back":"“I definitely believe that Costa Rica is a country that has managed to make a lot out of its tourism system.”"}
              ]
            },
            {
              type: "quiz",
              id: "a3-q",
              title: "Evaluation, attitude, opinion or stance?",
              shared: ["Evaluation","Attitude","Opinion","Stance"],
              items: [
                {"q":"“In 2021, Costa Rica earned nearly 5% of its GDP from tourism, and that is clear to see.”","answer":"Evaluation","why":"A judgement based on facts (5% of GDP)."},
                {"q":"“I think that regrettably that is indeed the case.”","answer":"Attitude","why":"“Regrettably” shows a feeling."},
                {"q":"“The most important part is probably to internalise the cost of carbon dioxide.”","answer":"Opinion","why":"A personal judgement: “the most important part is probably …”."},
                {"q":"“I definitely believe that Costa Rica is a country that has managed to make a lot out of its tourism system.”","answer":"Stance","why":"Stance is a public declaration of your opinion: “I definitely believe …”."}
              ]
            },
            {
              type: "model",
              title: "More language for perspective · Language Reference, Student’s book",
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
              id: "a3-sort",
              title: "Positive or negative?",
              hint: "Words and phrases from the table. Sort them, then check.",
              buckets: [{"label":"Positive","letter":"+"},{"label":"Negative","letter":"−"}],
              items: [
                {"text":"significant","answer":0},
                {"text":"unbiased","answer":0,"why":"un- + biased = fair. Careful with the prefix!"},
                {"text":"thoughtful","answer":0},
                {"text":"optimistic","answer":0},
                {"text":"It is well established that …","answer":0},
                {"text":"There is a general consensus about …","answer":0},
                {"text":"questionable","answer":1},
                {"text":"superficial","answer":1,"why":"Superficial = only on the surface, not deep."},
                {"text":"neglects …","answer":1},
                {"text":"contradictory","answer":1},
                {"text":"Based on the limited data available …","answer":1,"why":"“Limited data” = not much evidence yet."},
                {"text":"According to a preliminary study …","answer":1,"why":"A preliminary study is an early, first study — not final."}
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"<b>Say it first.</b> Tell your partner what you think of the podcast in two sentences. Use one evaluation word and one stance phrase. Your partner names them."},
            {
              type: "detect",
              id: "a3-dt",
              title: "Edit your summary",
              hint: "Look back at the summary you wrote for homework. Paste or rewrite 2–3 sentences and add language from the table. The lights turn on when you use each part of perspective.",
              checks: [
                {"label":"Evaluation","color":"#2f7d6b","any":["important","significant","effective","relevant","logical","unbiased","problematic","limited","biased","questionable","fails to","neglects","dismisses","omits"]},
                {"label":"Attitude","color":"#8a4f9e","any":["thoughtful","well organised","well organized","elevated","optimistic","sympathetic","critical","unreliable","contradictory","superficial","unfortunately","regrettably","surprisingly"]},
                {"label":"Opinion","color":"#3a58a0","any":["it is clear that","equally important","for this reason","for these reasons","it is worthwhile to note"]},
                {"label":"Stance","color":"#c4562f","any":["it is possible that","it is well established","general consensus","according to recent research","it is unlikely that","based on the limited data","preliminary study"]}
              ],
              items: [
                {
                  task: "My edited summary sentences:",
                  rows: 5,
                  placeholder: "Buckley offers a critical view of …",
                  model: "Buckley offers a critical view of eco-tourism, arguing that its many labels are not put into clear laws. It is well established that tourism makes a significant contribution to global warming. For these reasons, it is unlikely that eco-tourism alone can be good for the climate, although Gossling’s solution is optimistic."
                }
              ]
            },
            {
              type: "language",
              title: "Extra: evaluating a source at university",
              groups: [
                {"label":"Positive","phrases":["… raises an important point about …","… offers a thoughtful / balanced view of …","… gives relevant evidence for …"]},
                {"label":"Negative","phrases":["However, this argument is limited because …","This claim seems questionable, as …","The speaker neglects / does not consider …"]},
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
      subtitle: "“Bluewashing” — and a synthesis matrix for three sources",
      outcome: "You use a synthesis matrix to organise arguments from this week’s three sources on eco-tourism, and you collect arguments to state your own position.",
      activities: [
        {
          id: "b1",
          short: "Recap",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-b1.svg",
          title: "Recap",
          goal: "Sort ideas from the reading and the podcast: what is in both, and what is only in one?",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d2-venn.svg",
              size: "wide",
              alt: "A Venn diagram with two circles. Left circle: Reading 1, Spenceley and Rylance (2021). Right circle: the listening, Alom (2023). The middle part where they overlap is labelled “common ideas”.",
              caption: "The middle = ideas in <b>both</b> sources."
            },
            {"type":"do","n":1,"who":"alone","text":"You have been learning about eco-tourism this week. Take <b>5 minutes</b> to fill the diagram with ideas from Reading 1 and the listening. Put the ideas that are <b>common</b> to both in the middle."},
            {
              type: "table",
              id: "b1-venn",
              title: "My diagram",
              columns: ["Only in Reading 1 (Spenceley & Rylance, 2021)","In BOTH (the middle)","Only in the listening (Alom, 2023)"],
              rows: 3
            },
            {
              type: "talk",
              title: "Compare with the person next to you (5 minutes)",
              prompts: ["Did you identify the same ideas in the space in the middle?","Which source gives a more positive picture of eco-tourism? Why?"]
            },
            {
              type: "language",
              groups: [
                {"label":"Compare your diagrams","phrases":["What did you put in the middle?","I think … is in both, because …","Actually, I think that’s only in the reading.","We both found …, but you also noticed …"]}
              ]
            }
          ],
          answers: {
            title: "Some possible ideas",
            items: [
              ["Only in Reading 1","Links to the SDGs (zero hunger, good health) · agrotourism and marine-protected areas · health benefits of biodiversity · CSR funds for clinics · sports tourism events"],
              ["In both","Eco-tourism can help conservation · tourism can bring money and jobs to local communities (e.g. Costa Rica’s 5% of GDP; whale shark viewing)"],
              ["Only in the listening","The term is vague and has many names · no legislation, competing certifications · tourism ≈ 10% of global warming · tourists do not really change their behaviour · internalise the cost of carbon"]
            ]
          }
        },
        {
          id: "b2",
          short: "Synthesis",
          minutes: 5,
          grouping: "Class",
          art: "dec10/assets/week4/v/v-d10w4d2-b2.svg",
          title: "Academic Skills: Introduction to synthesizing",
          goal: "Understand what synthesis is, how it is different from a summary, and how a synthesis matrix helps.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d2-summary-synthesis.svg",
              size: "wide",
              alt: "Two panels. Summarize: several details from one text go into one short box. Synthesize: details from three different texts flow together into a new, bigger thought — a glowing light bulb.",
              caption: "Synthesize = to integrate multiple details from multiple texts to generate a new, bigger thought."
            },
            {
              type: "key",
              title: "Why synthesise?",
              points: [
                "It shows that you have done the necessary research to engage with a topic beyond consulting only <b>one source</b>.",
                "It allows you to develop and strengthen your arguments using a <b>variety of evidence</b>.",
                "Synthesis is the combination of ideas <b>from different sources</b>. Synthesis is different from summary."
              ]
            },
            {
              type: "model",
              title: "A synthesis matrix",
              before: "Across the top: the sources. Down the side: the main points (ideas) on the topic.",
              rows: [
                ["","Source 1 · Source 2 · Source 3"],
                ["Idea A","what each source says about idea A"],
                ["Idea B","what each source says about idea B"],
                ["Idea C","…"]
              ],
              note: "After your chart is complete, notice patterns: sometimes sources discuss very similar material, sometimes completely different aspects. These patterns help you create a thesis statement."
            },
            {
              type: "sort",
              id: "b2-sort",
              title: "Summary or synthesis?",
              buckets: [{"label":"Summary","letter":"1"},{"label":"Synthesis","letter":"3"}],
              items: [
                {"text":"The main points of one podcast, in your own words","answer":0},
                {"text":"Buckley and Mielly both say eco-tourism labels mean little without clear rules.","answer":1},
                {"text":"Paragraph A of the reading in two sentences","answer":0},
                {"text":"A new idea that comes from comparing three sources","answer":1},
                {"text":"Organised idea by idea, with several sources in each","answer":1}
              ]
            }
          ]
        },
        {
          id: "b3",
          short: "Words",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-b3.svg",
          title: "Vocabulary",
          goal: "Explain eight words from the reading to a partner — then use them.",
          blocks: [
            {
              type: "key",
              title: "Bluewashing — the big idea of today’s reading",
              points: [
                "<b>Greenwashing</b> = a company says it is good for the environment, but it is not really.",
                "<b>Bluewashing</b> = companies hide behind unclear words like <i>sustainable</i> or <i>regenerative</i> development. It looks good — but they follow their own interests, not real ecotourism goals (Mielly, 2023)."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-bluewashing.svg",
              size: "wide",
              alt: "A big resort building is painted with a shiny blue “sustainable” label. Behind the label you can see what is hidden: profits going to a far-away company, bulldozers on forest land, a village pushed aside, and a lagoon under pressure.",
              caption: "Bluewashing: a shiny label on the outside, a different story behind it."
            },
            {"type":"do","n":1,"who":"pair","text":"Take turns. Choose a word and explain it to your partner — <b>without saying the word</b>. Your partner guesses. Not sure? Check your dictionary."},
            {
              type: "spinner",
              id: "b3-spin",
              title: "Explain the word",
              reels: [
                {
                  label: "Word",
                  items: ["biocultural diversity (n)","sheen (n)","consortium (n)","hijack (v)","evict (v) · eviction (n)","sovereignty (n)","scrutiny (n)","shirk (v)"]
                }
              ]
            },
            {
              type: "language",
              title: "Explaining a word",
              groups: [
                {"label":"Explain","phrases":["This word refers to …","It’s a kind of … that …","It’s the opposite of …","You use it when …"]},
                {"label":"Guess","phrases":["Is it …?","Could it be …?","Give me another clue, please."]}
              ]
            },
            {
              type: "match",
              id: "b3-match",
              title: "Check: match the words to their meanings",
              left: ["biocultural diversity","sheen","consortium","hijack","evict","sovereignty","scrutiny","shirk"],
              right: [
                "the variety of nature and of human cultures, and the links between them",
                "a shiny surface; a good look on the outside",
                "a group of companies working together",
                "to take over something and use it for a different purpose",
                "to force people to leave their home or land",
                "the right to control your own land and decisions",
                "careful and detailed checking",
                "to avoid a duty you should do"
              ]
            },
            {
              type: "cards",
              title: "The words in their sentences · Mielly (2023)",
              items: [
                {"label":"A","text":"… help travellers connect with <b>biocultural diversity</b>. … give adventure-tourism packages a more “responsible” <b>sheen</b>. … international <b>consortiums</b> arrange everything … the original concept of ecotourism has been <b>hijacked</b> … 16 villages … were recently <b>evicted</b> … local residents’ lives and territorial <b>sovereignty</b>."},
                {"label":"F","text":"… asked for more <b>scrutiny</b> on issues that are not related to climate, especially social and societal problems."},
                {"label":"G","text":"… have led firms to <b>shirk</b> social sustainability and human rights requirements."}
              ]
            }
          ]
        },
        {
          id: "b4",
          short: "Gist",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week4/v/v-d10w4d2-b4.svg",
          title: "Reading for gist",
          goal: "Read the text once only and get the big picture.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Read the text <b>once only</b> (Student’s book, or the button below). Then answer the two questions."},
            {"type":"sources","ids":["bluewash"]},
            {
              type: "quiz",
              id: "b4-q",
              title: "Gist questions",
              items: [
                {
                  q: "1. What does the term “bluewashing” imply in the context of ecotourism and indigenous communities?",
                  options: [
                    "It refers to the practice of falsely presenting tourism projects as environmentally and socially responsible.",
                    "It describes efforts to conserve water in ecotourism practices.",
                    "It signifies projects that enhance the natural blue beauty of oceanic and riverine areas for tourism.",
                    "It means advertising ecotourism projects as beneficial to local communities while actually exploiting them."
                  ],
                  answer: "It refers to the practice of falsely presenting tourism projects as environmentally and socially responsible.",
                  why: "Paragraph B: multinationals “hide under the cover of unclear terms such as sustainable or regenerative development … They imply that their work is virtuous, despite the reality.” The last option is close, but it only talks about local communities."
                },
                {
                  q: "2. What broader impact does the exploitation of indigenous lands for projects like Maraey have?",
                  options: [
                    "It fosters economic development and provides infrastructure benefits for indigenous communities.",
                    "It increases global awareness and appreciation of indigenous cultural heritage.",
                    "It contributes positively to the local biodiversity.",
                    "It often leads to cultural, environmental, and social disruptions for indigenous peoples."
                  ],
                  answer: "It often leads to cultural, environmental, and social disruptions for indigenous peoples.",
                  why: "Paragraphs D–F: fractures in the community, pressure on the water system, and the forest is the source of their culture, language and social order."
                }
              ]
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
          id: "b5",
          short: "Notes",
          minutes: 20,
          grouping: "Alone → Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-b5.svg",
          title: "Reading for detail/ notetaking",
          goal: "Read again and take notes in the grid: the resort developer, the indigenous community, and other ideas.",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week4/d2-marica-actors.svg",
              alt: "A map-like picture of the Maricá case in Brazil: a forest and a lagoon by the sea, a village, a planned resort with a golf flag, a town hall, a court house, a document marked C169 and a lawyer’s briefcase. Numbered markers sit on each one.",
              title: "Who is who in the Maricá case?",
              hint: "Tap each marker before you read again.",
              size: "wide",
              spots: [
                {"x":70,"y":40,"label":"1","title":"IDB do Brasil · the Maraey resort","text":"The firm leading the resort project. It says it has the legal permits, that all licences came from a strict process, and that the 54-hectare project will be sustainable and inclusive.","color":"#c4562f"},
                {"x":30,"y":36,"label":"2","title":"Ka’Aguy Hovy Porã village","text":"Home of the Mbyá Guaraní community. They may be pushed aside for the resort. They found out how advanced the project was only when the bulldozers arrived.","color":"#2f7d6b"},
                {"x":19,"y":62,"label":"3","title":"Tupã Nunes · community leader","text":"He had no knowledge of the 2022 agreement signed with the chief (the cacique). In Guarani tradition, the cacique must share information with the community.","color":"#2f7d6b"},
                {"x":50,"y":20,"label":"4","title":"The local government","text":"Part of the agreement: it promised to find a public area where the community could stay permanently. The community did not know how involved it was.","color":"#3a58a0"},
                {"x":86,"y":78,"label":"5","title":"The courts","text":"In 2023 local courts suspended the project because of irregularities and conflict. Reasons included pressure on the water system and an illegal environmental licensing process.","color":"#8a4f9e"},
                {"x":52,"y":76,"label":"6","title":"ILO C169","text":"An international agreement on Indigenous and Tribal Peoples, signed by Spain and Brazil. It requires at least a dialogue with indigenous communities before projects that affect them.","color":"#b07d12"},
                {"x":36,"y":85,"label":"7","title":"Juliana Batista · human rights lawyer","text":"From the Brazilian NGO Instituto Socio-Ambiental. For her, indigenous land rights “take precedence over any other rights.”","color":"#a3416a"}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Read the text again and take notes in the note-taking grid. Short notes — key words only."},
            {
              type: "table",
              id: "b5-notes",
              title: "Note-taking grid · Mielly (2023)",
              columns: ["","My notes"],
              fixed: ["Resort developer","Indigenous community","Other ideas"]
            },
            {
              type: "sort",
              id: "b5-who",
              title: "Who says it?",
              hint: "Mielly (2023) reports different voices. Is this the developer’s view, or the view of others (the community, the courts or the writer)?",
              buckets: [{"label":"The developer says","letter":"D"},{"label":"Others say","letter":"O"}],
              items: [
                {"text":"“We have the required legal permits to build the resort.”","answer":0},
                {"text":"“An agreement was signed with the cacique in December 2021.”","answer":0},
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
                {"label":"The developer","phrases":["The company asserts that …","IDB do Brasil maintains that …","Maraey representatives claim that …"]},
                {"label":"The other side","phrases":["However, the community leader points out that …","According to the court, …","For Juliana Batista, …"]},
                {"label":"The writer","phrases":["Mielly (2023) argues that …","The writer suggests that …","Mielly (2023) is critical of …"]}
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"Close the text. Partner A explains the <b>developer’s</b> side, Partner B the <b>community’s</b> side — from your notes only. Use the reporting phrases."}
          ],
          answers: {
            title: "Sample notes",
            items: [
              ["Resort developer · Ecotourism as marketing","Originally meant to promote ecological responsibility, it has become a marketing term for mass adventure-tourism, often not involving genuine engagement with local communities."],
              ["Resort developer · Legal permits and development","IDB do Brasil claims to have all required legal permits for the Maraey project, asserting the development will be “sustainable and inclusive,” featuring amenities like hospitals and schools alongside commercial and recreational facilities."],
              ["Resort developer · Economic benefits","The Maraey project is forecasted to generate the equivalent of 197 million US dollars, highlighting the financial incentives behind such developments."],
              ["Resort developer · Environmental licensing","Maraey representatives claim that all environmental licenses were obtained through a strict process with the State Environmental Institute (INEA), despite court concerns about irregularities and environmental impacts."],
              ["Indigenous community · Disconnection and displacement","Indigenous communities, like the Mbyá Guaraní, face eviction and displacement from ancestral lands due to developments labeled as ecotourism or eco-friendly projects."],
              ["Indigenous community · Lack of informed consent","Agreements signed without full community knowledge or consent, violating traditional governance practices and international agreements like the ILO’s C169."],
              ["Indigenous community · Cultural and environmental impact","The Amazon rainforest and Atlantic coastal forest are crucial for the cultural, linguistic, and social structures of communities like the Guarani Mbyá."],
              ["Indigenous community · Legal and human rights","Local courts suspended the project due to irregularities; indigenous land rights are prioritised over development projects in legal battles."],
              ["Other ideas · “Bluewashing” practices","Firms use sustainability as a cover for advancing projects that may not truly adhere to responsible social development standards."],
              ["Other ideas · Global and local legal dynamics","The interplay between local, national, and international laws affects how projects are approved and challenged, with corruption and unclear building permits complicating matters."],
              ["Other ideas · History and future","The “logic of elimination” where native populations are erased from the land; legal precedents like the victory of the Tupinamba de Olivença tribe could influence future developments."],
              ["Other ideas · Call for greater scrutiny","The International Financial Reporting Standards Foundation asks for more scrutiny of non-climate issues, especially social and societal problems."]
            ]
          }
        },
        {
          id: "b6",
          short: "Matrix",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week4/v/v-d10w4d2-b6.svg",
          title: "Building understanding across texts",
          goal: "Read a synthesis matrix on eco-tourism and match each idea to its row.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week4/d2-three-sources.svg",
              size: "wide",
              alt: "A synthesis matrix. Three source cards across the top: Spenceley and Rylance (2021), Alom (2023) and Mielly (2023). Six idea rows down the side: background, economic development, environment protection, social benefits, tourist benefits, legislation. Green links show where sources agree and orange links show where they disagree.",
              caption: "Topic: ECO-TOURISM. Read <b>across</b> each row — that is where synthesis happens."
            },
            {"type":"do","n":1,"who":"pair","text":"These notes come from the synthesis matrix in your Student’s book. Match each note to the correct row (1–6)."},
            {
              type: "sort",
              id: "b6-sort",
              title: "Which row of the matrix?",
              buckets: [
                {"label":"1. Intro/ background","letter":"1"},
                {"label":"2. Economic development","letter":"2"},
                {"label":"3. Environment protection","letter":"3"},
                {"label":"4. Social benefits","letter":"4"},
                {"label":"5. Tourist benefits","letter":"5"},
                {"label":"6. Legislation","letter":"6"}
              ],
              items: [
                {"text":"Eco-tourism started in the 1970s … it has become a marketing term to add a “responsible” appeal to tourism packages.","answer":0},
                {"text":"In 2021, Costa Rica earned nearly 5% of its GDP from tourism.","answer":1},
                {"text":"International consortiums keep the profits for themselves.","answer":1},
                {"text":"10% of global CO2 emissions comes from tourism (travel, accommodation and food).","answer":2},
                {"text":"Project suspended for “incessant pressures” on the lagoon’s system and water table …","answer":2},
                {"text":"Many tourism businesses use their CSR funds to help develop rural clinics and hospitals …","answer":3},
                {"text":"Eco-tourism projects can block local communities from ancestral lands or even involve their forced relocation.","answer":3},
                {"text":"Visiting places with lots of biodiversity can prevent health issues like obesity, heart disease, depression, and anxiety.","answer":4},
                {"text":"Research shows tourists do not really change their habits after engaging in an eco-tourism experience.","answer":4},
                {"text":"Corruption is rife: operators can pay to get a sustainable tick.","answer":5}
              ]
            },
            {
              type: "toggle",
              title: "Open the whole matrix · Topic: ECO-TOURISM",
              hint: "Read across each row",
              blocks: [
                {
                  type: "model",
                  title: "Synthesis matrix",
                  rows: [
                    ["1 · Intro/ background","<b>Source 2 · Alom (2023):</b> Eco-tourism introduced in the 1970s: aimed to support conservation financially while minimizing environmental impacts. However, its definition has remained vague. Similar concepts (sustainable and responsible tourism) confuse things further. The term doesn’t mean much anymore.<br><b>Source 3 · Mielly (2023):</b> Eco-tourism started in the 1970s: designed to be environmentally friendly, support conservation efforts, benefit local communities, and reconnect travelers with nature and culture. However, it has become a marketing term to add a “responsible” appeal to tourism packages."],
                    ["2 · Economic development","<b>Source 1 · Spenceley and Rylance (2021):</b> Agro-tourism supports local food production for hotels and restaurants and boosts sales of local products to tourists. Agro tourism provides extra income for farmers while offering tourists educational experiences. 55% of employment comes from farming and natural resources use in many rural areas, especially in poor communities in developing countries. Tourism offers other sources of income. Effective management should address broader local economic and social issues, ensuring that poor communities have diverse income opportunities. Tourism activities like whale shark viewing and manta ray diving create jobs for local people. Sports tourism helps generate revenue for conservation and shows the positive impact of biodiversity on local communities e.g. in Africa.<br><b>Source 2 · Alom (2023):</b> In 2021, Costa Rica earned nearly 5% of its GDP from tourism.<br><b>Source 3 · Mielly (2023):</b> International consortiums keep the profits for themselves. Economic concerns take prevalence over social and environmental concerns (project is forecasted to generate 197 million US dollars)."],
                    ["3 · Environment protection","<b>Source 1:</b> In Africa: eco-tourism is supporting efforts to stop overfishing and the killing of endangered marine species, to protect reefs, and to teach local communities how to manage their fishing resources better and fish responsibly.<br><b>Source 2:</b> 10% of global CO2 emissions comes from tourism (travel, accommodation and food). Accommodation carbon footprint: heating and cooling constantly running. Food is a surprisingly large carbon footprint: the type of food consumed in tourism is often more carbon intense because it’s high in protein, more meat, more fish, more seafood. Eco-tourism can have positive impacts for conservation. But the cost is its significant contribution to climate change.<br><b>Source 3:</b> Project suspended for “incessant pressures” on the lagoon’s system and water table and the “illegality of the environmental licensing process”. Developers maintain the resorts would be sustainable and inclusive."],
                    ["4 · Social benefits","<b>Source 1:</b> Many tourism businesses use their CSR funds to help develop rural clinics and hospitals or to provide essential medical equipment, e.g. the Africa Foundation. Small community-managed marine protected areas can provide safe spaces where fish can breed and grow. This supports local fishing, which many communities rely on for food.<br><b>Source 3:</b> Eco-tourism projects can block local communities from ancestral lands or even involve their forced relocation, e.g. the eviction of 16 villages on Rempang Island, Indonesia to build a solar panel factory and “eco-city”. The International Financial Reporting Standards Foundation has recently called for reporting on societal and social issues. However, multinationals will minimize risks and maintain their usual business practices. For Juliana Batista, human rights lawyer for the Brazilian NGO Instituto Socio-Ambiental, indigenous land rights “take precedence over any other rights.”"],
                    ["5 · Tourist benefits","<b>Source 1:</b> Agro tourism provides extra income for farmers while offering tourists educational and enriching experiences. Visiting places with lots of biodiversity can prevent health issues like obesity, heart disease, depression, and anxiety.<br><b>Source 2:</b> Research shows tourists do not really change their habits after engaging in an eco-tourism experience.<br><b>Source 3:</b> Interactions with local residents are limited."],
                    ["6 · Legislation","<b>Source 2:</b> Sustainable tourism (eco-tourism) is unregulated. Legislation is needed to make sure sustainable tourism fulfils its purpose and penalties are in place for operators that falsely advertise packages. Corruption is rife: operators can pay to get a sustainable tick.<br><b>Source 3:</b> Corruption has been a frequent problem in the past and legal battles often happen between local and state governments, and national courts, and even divide indigenous families. Communities are not aware deals are done until it is too late. Research indicates that weak reporting and insufficient enforcement have allowed neglect of social sustainability and human rights, with “bluewashing” strategies used to appear more responsible without substantial action."]
                  ]
                }
              ]
            },
            {
              type: "talk",
              title: "Notice the patterns",
              prompts: ["In which rows do the sources discuss <b>very similar</b> material?","In which rows do they deal with <b>completely different</b> aspects — or say nothing?"]
            }
          ]
        },
        {
          id: "b7",
          short: "Position",
          minutes: 15,
          grouping: "Groups of 3",
          art: "dec10/assets/week4/v/v-d10w4d2-b7.svg",
          title: "Synthesising",
          goal: "Find each source’s position on eco-tourism — then decide and explain your own.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Considering the notes in the matrix: What is the general position of each source on eco-tourism (for, against, positive, critical …)? What indicates this position?"},
            {
              type: "table",
              id: "b7-pos",
              title: "Each source’s position",
              columns: ["Source","Position on ecotourism","Evidence / example"],
              fixed: ["Spenceley and Rylance (2021)","Alom (2023)","Mielly (2023)"]
            },
            {
              type: "language",
              title: "Describing a source’s position",
              groups: [
                {"label":"Positive","phrases":["… presents a largely positive / optimistic view of …","… argues that eco-tourism can help achieve …"]},
                {"label":"Mixed","phrases":["… is critical of …, but sees … as an exception.","… acknowledges …, but warns that …"]},
                {"label":"Critical","phrases":["… takes a highly critical stance on …","… describes eco-tourism as a dangerous practice that …"]}
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Considering the ideas in all three sources, what is <b>your</b> position on eco-tourism?"},
            {
              type: "choose",
              id: "b7-me",
              title: "My position on eco-tourism",
              options: ["Mostly positive","Mixed — it depends","Mostly critical"]
            },
            {
              type: "sticky",
              color: "blue",
              title: "Speaking: brief the minister (role play)",
              text: "<p>A government plans a new <b>eco-resort</b> near a protected coastline where an indigenous community lives. The <b>Minister for Tourism</b> has 10 minutes before a press conference and asks the research adviser: <b>“Is eco-tourism really a good idea here? What does the research say?”</b></p>"
            },
            {
              type: "hotspot",
              src: "dec10/assets/week4/d2-briefing-room.svg",
              alt: "A government briefing room. The Minister sits at a desk with a clock showing ten minutes to the press conference. The research adviser stands with three source folders. An observer sits at the side with a checklist. Through the window you can see a coastline with a planned resort.",
              title: "Choose your role",
              hint: "Tap each person to read the role card. Play for 3 minutes, then swap.",
              size: "wide",
              spots: [
                {"x":30,"y":53,"label":"A","title":"Role A · The Minister for Tourism","text":"You want good news: jobs, money and a “green” image. But you do not want a scandal later. Ask short, direct questions. Push for a clear answer.","color":"#3a58a0"},
                {"x":62,"y":59,"label":"B","title":"Role B · The research adviser","text":"Give a fair, balanced answer. Use at least two sources in every answer and say what each source says. Finish with your own position.","color":"#2f7d6b"},
                {"x":86,"y":66,"label":"C","title":"Role C · The observer","text":"Listen. Did the adviser name the sources, use two sources together, and give a clear position? Give one good point and one tip. Then swap roles.","color":"#b07d12"}
              ]
            },
            {
              type: "chat",
              title: "How it can start",
              right: "Adviser",
              lines: [
                ["Minister","I have ten minutes. Is this resort a good idea or not?"],
                ["Adviser","<mark>The short answer is: it depends.</mark> <mark>On the one hand,</mark> Spenceley and Rylance (2021) show that eco-tourism can create jobs and protect marine areas."],
                ["Minister","Good. So I can call it a green project?"],
                ["Adviser","<mark>I’d be careful with that.</mark> Alom (2023) points out that eco-tourism is unregulated, and Mielly (2023) <mark>gives examples of</mark> communities being evicted for so-called eco projects."],
                ["Minister","So what’s your position?"],
                ["Adviser","<mark>Based on all three sources, I’d argue that</mark> it can only work with strict rules and real dialogue with the community."]
              ]
            },
            {
              type: "spinner",
              id: "b7-spin",
              title: "The Minister’s questions",
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
                {"label":"Adviser","phrases":["The research shows that …","All three sources agree that …","While … argues that …, … shows that …","Based on all three sources, I’d argue that …"]},
                {"label":"Minister","phrases":["So, in plain words, …?","Can you give me an example?","Is that a yes or a no?","What’s the risk for us?"]},
                {"label":"Observer","phrases":["You used two sources really well when …","One tip: try to …","Your position was clear / not clear because …"]}
              ]
            },
            {
              type: "tip",
              text: "<b>Remember:</b> the practice assessment after the break is under exam conditions — you put away all notes. You will have the same texts, and the listening is played again, so you can make new notes for the question."
            }
          ],
          answers: {
            title: "Guiding notes",
            items: [
              ["Spenceley and Rylance (2021)","Position: it can help achieve sustainable development goals (ending hunger, promoting sustainable agriculture, promoting wellbeing, etc.). Evidence: the Tour de Tuli, Desert Knights and Wildruns sports events help fund conservation and contribute to local economies by creating jobs."],
              ["Alom (2023)","Position: ecotourism practices contribute to climate change; its claimed contribution to changing travellers’ attitudes is negligible — BUT Costa Rica is an exception. Evidence: 10% of global CO2 emissions comes from tourism."],
              ["Mielly (2023)","Position: eco-tourism is a dangerous practice that can lead to the displacement of indigenous communities from their land, among other negative effects. Evidence: all the irregularities surrounding the resort branded as “Maraey”."],
              ["Your position","Student’s own. On Thursday you can compare your position with the positions in the sample essays."]
            ]
          }
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
      subtitle: "On Canvas · 90 minutes · exam conditions",
      outcome: "You plan and write an integrated essay of 450–600 words from three sources on your own, in 90 minutes.",
      activities: [
        {
          id: "c1",
          short: "Plan",
          minutes: 30,
          grouping: "Alone",
          art: "dec10/assets/week4/v/v-d10w4d2-c1.svg",
          title: "Instructions and planning (30 minutes)",
          goal: "Know the rules before you start, then use the first 30 minutes to make notes and plan.",
          blocks: [
            {
              type: "key",
              title: "Week 4 Integrated Writing Practice Assessment",
              points: [
                "<b>Time allowed: 90 minutes.</b> Suggested timing: <b>30 minutes planning</b> and <b>60 minutes writing</b>.",
                "The task and the question are on <b>Canvas</b>. Write <b>450–600 words</b>.",
                "<b>Read this page before the test starts.</b> Then close it — you may not use any other resources."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-iwa-clock.svg",
              size: "wide",
              alt: "A 90-minute clock face in two parts: the first 30 minutes (planning: notes and plan) in amber, the next 60 minutes (writing) in teal, with a small check at the end. A sheet of paper with three blank pages sits next to it.",
              caption: "90 minutes = 30 planning + 60 writing."
            },
            {
              type: "steps",
              title: "Instructions (from Canvas)",
              items: [
                {"who":"alone","text":"You have already read/heard the input texts in the Reading and Listening lessons. You can view the reading texts again when you start the task. You will also listen to the lecture again."},
                {"who":"alone","text":"Make notes relevant to the question given."},
                {"who":"alone","text":"Plan a response that is relevant to the question."},
                {"who":"alone","text":"Type your answer directly into the text box. Do <b>NOT</b> try to upload a document."},
                {"who":"alone","text":"You must refer to sources to support your ideas, and where possible, <b>synthesise</b> ideas from different sources, showing similarities or differences."},
                {"who":"alone","text":"Reference any ideas or information from the sources (see the table below). A reference list is not required."},
                {"who":"alone","text":"You may have up to <b>3 blank sheets of paper</b> for notes and planning. You may not use any other resources."},
                {"who":"alone","text":"Click <b>Submit Quiz</b> at the bottom of the page <b>before</b> the 90-minute deadline. Keep an eye on the time — the quiz timer may not run properly if you have internet issues."}
              ]
            },
            {
              type: "model",
              title: "How to reference the sources",
              rows: [
                ["Reading Text A","Spenceley and Rylance (2021) OR (Spenceley &amp; Rylance, 2021)"],
                ["Reading Text B","Mielly (2023) OR (Mielly, 2023)"],
                ["Listening Lecture","Alom (2023) OR (Alom, 2023)"]
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-iwa-route.svg",
              size: "wide",
              alt: "A winding path with six stops: 1 Analyse the question, 2 Take notes from the sources, 3 Choose your position, 4 Plan, 5 Write, 6 Check. A small student walks along the path with a backpack.",
              caption: "Your 30 minutes of planning = stops 1 to 4."
            },
            {
              type: "order",
              id: "c1-order",
              title: "Practise first: put the steps in order",
              items: [
                "Analyse the question: topic words, limiting words, what it asks you to do",
                "Make notes from the sources — only what is relevant to the question",
                "Choose your position (your answer to the question)",
                "Plan: thesis + one main idea for each body paragraph + evidence from the sources",
                "Write: paraphrase, cite each source, synthesise, link your paragraphs",
                "Check: re-read, fix confusing or off-topic parts, check the word count"
              ],
              ends: ["First","Last"],
              why: "Your position comes from the evidence — so make notes first, then decide. Keep a few minutes at the end to check."
            },
            {
              type: "flip",
              title: "Five reminders",
              hint: "Read the front. Can you say the reminder? Turn to check.",
              items: [
                {"front":"Answer THE question","back":"Your thesis answers the exact question — every paragraph goes back to it."},
                {"front":"Paraphrase","back":"Use your own words. Do not copy long parts of the sources."},
                {"front":"Synthesise","back":"Where possible, put two sources together: “Both … and … ”, “While … , … ”."},
                {"front":"Cite","back":"Every idea from a source gets the author and year: (Mielly, 2023) or Mielly (2023) argues …"},
                {"front":"Show your perspective","back":"Evaluate the evidence: effective, problematic, it is unlikely that …"}
              ]
            },
            {
              type: "language",
              title: "Essay toolkit (read it now — not during the test)",
              groups: [
                {"label":"Thesis","phrases":["This essay argues that …, because …","While …, this essay argues that …","… only partly / largely …, mainly because …"]},
                {"label":"Topic sentences","phrases":["One major reason why … is …","A further / more serious problem is …","Despite these benefits, …"]},
                {"label":"Synthesising sources","phrases":["Both … (2021) and … (2023) suggest that …","While … (2021) argues that …, … (2023) shows that …","This view is supported by …"]},
                {"label":"Concession","phrases":["Proponents of … argue that …","Admittedly, …","It is true that …; however, …"]},
                {"label":"Conclusion","phrases":["In conclusion, …","Overall, the evidence suggests that …","For … to …, it is essential to …"]}
              ]
            },
            {
              type: "fields",
              title: "Before the test: my two goals",
              fields: [
                {"id":"c1-goal1","label":"I will do this well:","rows":1,"placeholder":"e.g. I will write a clear thesis that answers the question."},
                {"id":"c1-goal2","label":"I will be careful about:","rows":1,"placeholder":"e.g. I will stop planning after 30 minutes."}
              ]
            }
          ]
        },
        {
          id: "c2",
          short: "Write",
          minutes: 60,
          grouping: "Alone",
          art: "dec10/assets/week4/v/v-d10w4d2-c2.svg",
          title: "Writing (60 minutes)",
          goal: "Write your essay on Canvas under exam conditions, then check it and submit before the deadline.",
          blocks: [
            {
              type: "key",
              title: "Exam conditions",
              tone: "warn",
              points: [
                "Work <b>alone</b> and in <b>silence</b>. No notes from class, no other resources, <b>no AI tools</b>.",
                "Type into the text box on Canvas. Do <b>not</b> upload a document.",
                "Click <b>Submit Quiz</b> before 90 minutes. Watch the clock yourself."
              ]
            },
            {
              type: "checklist",
              id: "c2-check",
              title: "Last 5 minutes · before I click Submit Quiz",
              meter: ["ticked","Ready to submit!"],
              items: [
                "My thesis answers the exact question.",
                "Each body paragraph starts with a clear topic sentence.",
                "I referred to the sources, with the author and year each time.",
                "Where possible, I synthesised two sources (similarities or differences).",
                "I paraphrased — I did not copy long parts of the texts.",
                "I wrote 450–600 words.",
                "I clicked Submit Quiz before the deadline."
              ]
            },
            {
              type: "model",
              title: "What your writing is assessed on",
              rows: [
                ["Argumentation","A clear position that answers the question, with logical arguments supported by the sources."],
                ["Use of Sources","The sources are synthesised and paraphrased, with correct citations."],
                ["Connection of Ideas","Clear structure: paragraphs and sentences link well."],
                ["Vocabulary","A good range of academic words and collocations, with suitable hedging."],
                ["Grammar","A range of sentence structures with few errors, so the meaning is clear."]
              ],
              note: "The criteria names from your writing rubric, in plain words. You get feedback on this practice assessment in Week 5."
            },
            {
              type: "toggle",
              title: "After you submit",
              hint: "Open this only when you have clicked Submit Quiz",
              blocks: [
                {
                  type: "fields",
                  title: "Quick reflection (2 minutes)",
                  fields: [
                    {"id":"c2-good","label":"One thing that went well","rows":2,"placeholder":"My thesis was clear because …"},
                    {"id":"c2-hard","label":"One thing that was hard","rows":2,"placeholder":"I ran out of time when …"}
                  ]
                },
                {
                  type: "language",
                  title: "Talking about a test (with a classmate, after everyone has finished)",
                  groups: [
                    {"label":"How it went","phrases":["It went better than I expected.","I struggled with …","I managed to …, but I didn’t have time to …","Next time I’m going to …"]}
                  ]
                }
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
      subtitle: "Sample essay 4.1 — its position and its text map",
      outcome: "You identify features of a well-connected text and the rhetorical functions a writer uses to develop ideas logically in an essay.",
      activities: [
        {
          id: "d1",
          short: "The question",
          minutes: 6,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d2-d1.svg",
          title: "Review the question",
          goal: "Read the question and the sources before you read the sample.",
          blocks: [
            {"type":"tip","text":"This homework is based on <b>Sample essay 4.1</b>. Bring your notes and ideas to class tomorrow — be ready to share them."},
            {
              type: "sticky",
              color: "green",
              title: "The question",
              text: "<p><b>To what extent are the goals of ecotourism likely to be achieved?</b></p><p>450–600 words</p>"
            },
            {
              type: "model",
              title: "Sources",
              rows: [
                ["Reading","Spenceley &amp; Rylance (2021) OR (Spenceley &amp; Rylance, 2021)"],
                ["Reading","Mielly (2023) OR (Mielly, 2023)"],
                ["Listening","Alom (2023) OR (Alom, 2023)"]
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
            {"type":"do","n":1,"who":"alone","text":"<b>Say it.</b> Before you read the sample, record a one-sentence answer to the question on your phone. Use one thesis frame."}
          ]
        },
        {
          id: "d2",
          short: "Sample 4.1",
          minutes: 12,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d2-d2.svg",
          title: "Sample response",
          goal: "Read Sample 4.1 and find the writer’s position — and where it is stated.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"There are two sample responses to the question. For now, read only <b>Sample 4.1</b> (Student’s book, or the button). We look at the second sample later."},
            {"type":"sources","ids":["s41"]},
            {
              type: "quiz",
              id: "d2-q",
              title: "Questions 1–2",
              items: [
                {
                  q: "1. What is the writer’s response to the question (<i>To what extent are the goals of ecotourism likely to be achieved?</i>) in Sample 4.1?",
                  options: [
                    "The goals of ecotourism are likely to be achieved.",
                    "The goals of ecotourism are not likely to be achieved.",
                    "Some goals of ecotourism are likely to be achieved, but some are unlikely to be achieved."
                  ],
                  answer: "The goals of ecotourism are not likely to be achieved.",
                  why: "“… its goals are unlikely to be achieved, at least in the foreseeable future …”"
                },
                {
                  q: "2. Where in the essay does the writer state their position?",
                  options: [
                    "Introduction, sentence 4 — and again in the Conclusion (sentence 1, and inside sentences 2 and 3)",
                    "Only in Body paragraph 1, sentence 1",
                    "Only in the Conclusion, sentence 3",
                    "The writer never states a position"
                  ],
                  answer: "Introduction, sentence 4 — and again in the Conclusion (sentence 1, and inside sentences 2 and 3)",
                  why: "Introduction S4: “This essay argues, therefore, that while ecotourism harbors the potential for positive impact, its goals are unlikely to be achieved …”. Conclusion: sentence 1, and embedded in sentences 2 and 3."
                }
              ]
            },
            {
              type: "scale",
              id: "d2-scale",
              title: "Place the writer’s position on the line",
              statement: "The goals of ecotourism are likely to be achieved.",
              ends: ["Not at all","Completely"],
              mid: "Partly",
              answer: 20,
              why: "Unlikely — but not 0: the writer accepts that ecotourism “harbors the potential for positive impact”."
            },
            {
              type: "spot",
              id: "d2-spot",
              label: "Perspective spotter",
              title: "Body paragraph 2 · find the writer’s evaluation",
              hint: "Tap the words that show the writer’s own evaluation or stance. Careful — some highlighted words only report a source or link ideas.",
              paras: [
                "¹Despite the potential benefits, [[however]], ecotourism frequently [[*falls short of its ideals]] due to a lack of [[*stringent]] regulations. ²[[As Mielly (2023) points out]], terms such as sustainable and regenerative tourism lack clear definitions and regulatory enforcement, which means that tour operators can use the terms freely and [[*falsely]], without being subject to penalties. ³The writer acknowledges that regulations to enforce sustainable practices have met with success, [[such as]] in the case of Bahia. ⁴However, government regulations or market-based certification can also be [[*insufficiently strict]] or contain loopholes (Alom, 2023). ⁵These regulatory challenges are [[further compounded]] by 'bluewashing', whereby ecotourism is used more to promote the interests of corporations than to promote [[*genuine]] conservation efforts (Mielly, 2023). ⁶Such practices [[*clearly undermine]] the goals of ecotourism."
              ]
            },
            {
              type: "talk",
              title: "Think, then say it aloud",
              prompts: ["In your own words, what are the writer’s <b>two reasons</b>?","Is your position (from Activity 1) the same as the writer’s? Why / why not?"]
            }
          ]
        },
        {
          id: "d3",
          short: "Text map",
          minutes: 14,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d2-d3.svg",
          title: "The text map",
          goal: "See how the writer planned the essay so the ideas connect and flow logically.",
          blocks: [
            {
              type: "key",
              title: "Notice these features of the text map",
              points: [
                "The <b>introduction and conclusion</b> are at the top of the text map, with <b>body paragraphs 1–3</b> in between.",
                "<b>Key words only</b>, abbreviated (International → Int’l · Development → Dev’t).",
                "Reasons &amp; evidence in <b>bold + caps</b>: <b>EXPLANATION (Evidence) · REASON 1 (Evidence)</b>.",
                "Logical connectors in <b>bold + caps</b>: <b>SO · BUT · AND</b>.",
                "The language from the sample that expresses each connection in brackets: <b>SO</b> <i>(bringing with it …)</i> · <b>SO</b> <i>(In response,)</i> · <b>BUT</b> <i>(At the same time,)</i>"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week4/d2-essay-map.svg",
              size: "wide",
              alt: "The shape of the Sample 4.1 text map: Introduction and its thesis at the top; three columns below for the counter-argument, Reason 1 and Reason 2, joined by SO, BUT and AND arrows; the conclusion and its implication at the bottom.",
              caption: "Introduction → counter-argument → Reason 1 → Reason 2 → conclusion."
            },
            {"type":"do","n":1,"who":"alone","text":"Follow the text map and the sample at the same time. Fill each gap with the right connector: <b>SO</b>, <b>BUT</b>, <b>AND</b> or <b>BECAUSE</b>."},
            {
              type: "cloze",
              id: "d3-cl",
              title: "Complete the text map · Sample 4.1",
              list: true,
              options: ["SO","BUT","AND","BECAUSE"],
              text: "<b>Background:</b> Int’l tourism a vast global industry → {{1}} (bringing with it …) Env &amp; social impacts → {{2}} (In response,) Ecotourism → {{3}} (At the same time,) Complexities &amp; challenges → <b>THESIS:</b> SO (This essay argues, therefore, …) while ecotourism has potential for positive impact, goals are unlikely to be achieved {{4}} goals are undermined.\n<b>Counter-argument:</b> Ecotourism – realistic alt to conventnl tourism → EXPLANATION (Indeed) Link to SDGs → {{5}} (not only) support local communities → {{6}} (but also) Preserve ecosystems.\n<b>Reason 1:</b> {{7}} (Despite) potential benefits – ecotourism goals not met → REASON 1 (As … points out) Unclear definitions, regulations not strict enough → {{8}} (which means) Ecotourism concepts misused &amp; not penalised.\n<b>Reason 2:</b> Affect local populations → {{9}} (This occurs when) Communities displaced, Env destroyed → … {{10}} (As a result,) Loss of habitat = source of cultural/social life.",
              answers: ["SO","SO","BUT","BECAUSE","SO","AND","BUT","SO","BECAUSE","SO"]
            },
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
                "Introduces the other side (counter-argument)",
                "Gives evidence from a source (Reason 1)",
                "Shows the source is balanced (BUT … Bahia)",
                "Gives the writer’s own evaluation (SO)",
                "Gives the implication (only through … can …)"
              ]
            }
          ],
          answers: {
            title: "The full text map (Teacher’s Book)",
            items: [
              ["Introduction","Background: Int’l tourism a vast global industry · SO (bringing with it …) Env & social impacts · SO (In response,) Ecotourism · BUT (At the same time,) Complexities & challenges · THESIS: SO (This essay argues, therefore, …) while ecotourism has potential for positive impact, goals are unlikely to be achieved BECAUSE goals are undermined"],
              ["Counter-argument","Ecotourism – realistic alt to conventnl tourism · EXPLANATION (Evidence) (Indeed) Link to SDGs · SO (not only) support local communities · AND (but also) Preserve ecosystems · AND (Similarly) Costa Rica success · SO (The potential … therefore) Ecotourism can protect communities & their env"],
              ["Reason 1","BUT (Despite) potential benefits – ecotourism goals not met · REASON 1 (Evidence) (As … points out) Unclear definitions, Regulations not strict enough · SO (which means) Ecotourism concepts misused & not penalised · BUT (The writers acknowledge that) Regulations sometimes successful EG Bahia · BUT (However,) Regulations also not strict · AND (further compounded by) ‘bluewashing’ · SO (Such practices clearly) Undermine tourism goals"],
              ["Reason 2","REASON 2 (extend beyond … to) Affect local populations · BECAUSE (This occurs when) Communities displaced, Env destroyed · BECAUSE (under the guise of) Dev’t & conservatn · EXPLANATION (Evidence) (These projects) benefit some locals · BUT (while … can also) Manipulated to justify displacement · SO (As a result,) Loss of habitat = source of cultural/social life · AND (also means) Environmental destruction · SO (This ongoing) Significant barrier to achieve ecotourism goals"],
              ["Conclusion","THESIS: Ecotourism, (while) based on important goals faces challenges that may prevent their realization · SO (essential) Robust regulatory frameworks · AND (together with) Reduced social & env impacts · IMPLICATION (only through … can …) Comprehensive measures to match ideals with goals"]
            ]
          }
        },
        {
          id: "d4",
          short: "My notes",
          minutes: 8,
          grouping: "Homework",
          art: "dec10/assets/week4/v/v-d10w4d2-d4.svg",
          title: "Bring your notes and insights to class",
          goal: "Organise your evidence by position, write your thesis, and say it aloud.",
          blocks: [
            {
              type: "table",
              id: "d4-tab",
              title: "My evidence for: To what extent are the goals of ecotourism likely to be achieved?",
              columns: ["Source","Goals LIKELY to be achieved","Goals UNLIKELY to be achieved","It depends / only partly"],
              fixed: ["Spenceley & Rylance (2021)","Alom (2023)","Mielly (2023)"]
            },
            {
              type: "fields",
              title: "My plan in two lines",
              fields: [
                {"id":"d4-thesis","label":"My thesis in one sentence","rows":2,"placeholder":"This essay argues that the goals of ecotourism are … because …"},
                {"id":"d4-reasons","label":"My two main reasons (one per body paragraph)","rows":2,"placeholder":"1 … (source: …) · 2 … (source: …)"}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"<b>Speak it.</b> Record a 1-minute answer to the question: your position, two reasons and a source for each reason. Be ready to share it in class tomorrow."},
            {"type":"tip","text":"<b>Tomorrow (Day 3):</b> the Integrated writing workshop (2) looks at Sample 4.1 in detail. Bring this page, your text map answers and your thesis."}
          ]
        }
      ]
    }
  ],
  extras: [
    {
      id: "e1",
      short: "Evaluate the source",
      minutes: 20,
      grouping: "Groups of 4",
      art: "dec10/assets/week4/v/v-d10w4d2-e1.svg",
      title: "Criticality: Evaluation of the source",
      goal: "Listen again and judge the podcast as an academic source (optional — e.g. in the STAR session on Friday).",
      blocks: [
        {"type":"do","n":1,"who":"group","text":"Each person in your group takes <b>one focus area</b>. Listen to the podcast again with your question in mind."},
        {
          type: "listening",
          source: "Alom (2023) · BBC The Climate Question",
          title: "Can tourism ever be good for the climate?",
          videoId: "nDplkL3wJrg",
          start: 447,
          audio: "",
          clip: "from 7:27",
          url: "https://www.bbc.co.uk/sounds/play/w3ct5bkk",
          urlLabel: "Listen on BBC Sounds",
          transcripts: [["alom","Transcript (open after listening)"]]
        },
        {
          type: "tabs",
          title: "Four focus areas",
          tabs: [
            {"label":"1 · Logic","blocks":[{"type":"talk","title":"Focus area 1 · Strength of logic","prompts":["Does the talk on eco-tourism start with a definition or provide some background?","Were there clear connections between what was said by the speakers and eco-tourism?","Was the talk structured in a logical way?"]}]},
            {"label":"2 · Bias","blocks":[{"type":"talk","title":"Focus area 2 · Assumptions and bias","prompts":["Were any assumptions made without evidence?","Were any biases presented, or an alternative option dismissed?"]}]},
            {"label":"3 · Evidence","blocks":[{"type":"talk","title":"Focus area 3 · Evaluating the evidence provided by Buckley and Gossling","prompts":["What facts were provided?","What data was used?","Were specific examples provided?"]}]},
            {"label":"4 · Completeness","blocks":[{"type":"talk","title":"Focus area 4 · Completeness","prompts":["Was there anything not said that could have been said?","Was anything considered that should have been considered?"]}]}
          ]
        },
        {"type":"do","n":2,"who":"group","text":"Change groups so that each new group has all four focus areas. Share your ideas and decide: <b>how good is this podcast as an academic source?</b>"},
        {
          type: "scale",
          id: "e1-scale",
          title: "Our verdict",
          statement: "This podcast is a strong academic source for an essay.",
          ends: ["Strongly disagree","Strongly agree"],
          mid: "Partly"
        },
        {
          type: "language",
          title: "Evaluating a source",
          groups: [
            {"label":"Strengths","phrases":["The speakers are experts in the field: …","The figures are specific, e.g. …","The talk is clearly structured: …"]},
            {"label":"Weaknesses","phrases":["The podcast does not give the source of …","One assumption is that …","It neglects / omits …","It would be stronger if …"]}
          ]
        }
      ]
    }
  ],
  glossary: [
    ["ecotourism","tourism that aims to protect nature and help local people","The notion of ecotourism was introduced in the late 1970s."],
    ["carbon footprint","the total amount of CO2 that a person, product or activity produces","Food is a surprisingly large carbon footprint."],
    ["unregulated","without rules or controls from a government","At the moment, sustainable tourism is an unregulated space."],
    ["legislation","laws made by a government","Unless they’re incorporated in legislation, these terms mean very little."],
    ["internalise the cost","include the real (environmental) cost in the price","Gossling wants to internalise the cost of carbon dioxide in flight prices."],
    ["perspective","the way a speaker or writer sees and judges something","Evaluation, attitude, opinion and stance make up a person’s perspective."],
    ["stance","a position on a subject which is made publicly","“I definitely believe that …” shows a clear stance."],
    ["bluewashing","hiding behind unclear words like “sustainable” to look responsible without real action","Bluewashing allows corporations to pursue their own interests."],
    ["sheen","a shiny surface; a good look on the outside","The packages get a more “responsible” sheen."],
    ["consortium","a group of companies working together","International consortiums keep the profits for themselves."],
    ["evict","to force people to leave their home or land","16 villages were evicted to build an eco-city."],
    ["sovereignty","the right to control your own land and decisions","The project ignored the residents’ territorial sovereignty."],
    ["scrutiny","careful and detailed checking","The IFRS Foundation asked for more scrutiny of social problems."],
    ["shirk","to avoid a duty you should do","Lax reporting has led firms to shirk human rights requirements."],
    ["synthesis","integrating details from several texts to generate a new, bigger thought","A synthesis matrix helps you organise ideas by topic, not by source."],
    ["text map","a short plan that shows how the ideas of an essay connect (SO, BUT, AND)","The text map shows how the writer planned Sample 4.1."]
  ]
};
