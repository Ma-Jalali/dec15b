/* DEC10 · Week 5 · Day 2 — Hear the voices, weave the sources.
   Built from the Week 5 Teacher's Book; timings follow the revised weekly map: W5 D2. 4A Listening to write (120 min, not 75 as in the TB —
   the extra 45 min are more practice with the same lecture: a12 speaking from notes, a11 note-taking gym, a10 signal hunt, a13 opinion line-up) ·
   5A Mediation (90 min, with the 5B reading and the 5C Language Reference) · 6A Integrated writing workshop (1): Prepare to write (30 min, with its homework).
   Protected texts are in sources.js ("w5listen", "lovelocal", "threeh") and are never changed here.
   Activity ids are the keys of saved work — never rename them. */
(function () {
const A = "dec10/assets/week5/";
const V = A + "v/v-d10w5d2-";
const LECTURE = { type: "listening", source: "Van Krieken (2016) · The University of Sydney", title: "Globalization and culture", videoId: "2ydX2FY0dvY", audio: "", start: 0 };

window.DEC15_LESSON = {
  id: "d10w5d2",
  week: 5,
  day: 2,
  title: "Hear the voices, weave the sources",
  duration: "About 4 hours + homework",
  question: "Is cultural globalisation having a negative impact on culture?",
  questionKind: "Essay question",
  questionLabel: "This week’s essay question · you will plan it today and write it with a group",
  wordTarget: "450–600 words",
  journey: "Take Cornell notes on a University of Sydney lecture about globalisation and culture, give 60-second mini-lectures from your notes, hunt for lecture signals, catch the language of opinions and take a stand on the opinion line, learn how a synthesis is different from a summary, read about “fast” and “slow” culture in Asia, and start planning your answer to this week’s essay question.",
  image: A + "hero-d10w5d2.svg",
  imageAlt: "Illustration: a large globe in the middle with a burger, a cola cup, a film clapper, music notes and a streetwear hoodie orbiting it. On the left a lecturer speaks from a lectern and a student writes Cornell notes; on the right three source cards fit together like puzzle pieces under the words “synthesis”. Lanterns and a wave of colour blend old and new culture.",
  finish: { title: "Day 3", text: "Your group essay on cultural globalisation — bring your consolidated notes and your position." },
  goalShort: "your notes and position for the group essay",
  sections: [
    /* ════════════════════════ 4A LISTENING TO WRITE ════════════════════════ */
    {
      id: "listening",
      number: "01",
      code: "4A",
      minutes: 120,
      tone: "teal",
      art: A + "s-d2-listening.svg",
      title: "Listening to write",
      subtitle: "A Sydney lecture on globalisation and culture — Cornell notes, signals, speaking from notes and the language of opinions",
      outcome: "You take effective notes with the Cornell technique to answer questions, and you recognise and use language for expressing opinions and evaluating other people’s opinions.",
      activities: [
        {
          id: "a1",
          short: "Your last 24 hours",
          minutes: 10,
          grouping: "Pair → Class",
          art: V + "a1.svg",
          title: "Warmer: Discussion and Famous Logos Quiz",
          goal: "Notice how much of your everyday life comes from other countries.",
          blocks: [
            {
              type: "figure",
              src: A + "d2-everyday.svg",
              size: "wide",
              alt: "A clock showing the last 24 hours with four things around it: food, TV shows and movies, music, and slang. Arrows go from each thing to three places: my country, Australia, and a different country.",
              caption: "Your last 24 hours: where did it all come from?"
            },
            { type: "do", n: 1, who: "pair", text: "Think about what you have done in the <b>past 24 hours</b>. Share with a partner." },
            {
              type: "talk",
              title: "Discuss",
              prompts: [
                "What kind of <b>food</b> have you eaten?",
                "Which <b>TV shows or movies</b> have you watched?",
                "Who produced the <b>music</b> you’ve listened to?",
                "Extra: Which <b>slang</b> words have you used? Where do they come from?"
              ]
            },
            { type: "do", n: 2, who: "pair", text: "As you talk, put each kind of food and entertainment into the right column." },
            {
              type: "table",
              id: "a1-tab",
              title: "Where does it come from?",
              columns: ["", "Traditional to my country", "Traditional to Australia", "Traditional to a different country"],
              fixed: ["Food", "TV shows / movies", "Music", "Slang"]
            },
            {
              type: "language",
              title: "Useful language: talking about your habits",
              groups: [
                { label: "What you did", phrases: ["Yesterday I had … for lunch.", "Last night I watched an episode of …", "I usually listen to … on my way to class."] },
                { label: "Where it comes from", phrases: ["It’s originally from …", "It’s a traditional … dish.", "It was produced in … / by a … company.", "As far as I know, it started in …"] },
                { label: "Comparing", phrases: ["Most of what I ate was …, but …", "Surprisingly, very little of it was local.", "I hadn’t realised how much … I consume."] }
              ]
            },
            {
              type: "do",
              n: 3,
              who: "class",
              text: "<b>Famous Logos Quiz.</b> How many of these brand logos do you recognise? You have <b>4 minutes</b>! Open the <a href=\"https://www.jetpunk.com/user-quizzes/139806/brand-logos-quiz-1\" target=\"_blank\" rel=\"noopener\">Brand Logos Quiz on JetPunk</a> (with a partner or alone — or do it together with your teacher). Click <b>‘Give up’</b> to finish early. Close any ads that pop up."
            },
            {
              type: "scale",
              id: "a1-scale",
              title: "How global is your day?",
              statement: "Most of the choices I make in everyday life come from outside my own culture.",
              ends: ["Not true for me", "Very true for me"]
            },
            {
              type: "sticky",
              title: "Why do you know these logos?",
              text: "Because of <b>globalisation</b>. Brands, food, films and music travel across borders — and that is today’s topic.",
              color: "green"
            }
          ]
        },
        {
          id: "a2",
          short: "Words",
          minutes: 10,
          grouping: "Pair → Group",
          art: V + "a2.svg",
          title: "Vocabulary",
          goal: "Hear how a lecturer explains difficult words — then explain words yourself.",
          blocks: [
            {
              type: "key",
              title: "Lecturers often explain hard words for you",
              points: [
                "Below are extracts from a lecture on globalisation for an <b>Introduction to Sociology</b> course at the University of Sydney.",
                "Listen for the signals: <b>“… refers to …”</b>, <b>“– or …”</b>, <b>“or we can say …”</b>, and a short, easy sentence that says the same thing again."
              ]
            },
            {
              type: "match",
              id: "a2-match",
              title: "1 · Match the sentence halves",
              hint: "In each one, the lecturer is explaining a more difficult concept. Tap a beginning, then its ending.",
              left: [
                "a) Cultural imperialism …",
                "b) [They have] the necessary economic means [to do so] …",
                "c) American cultural hegemony …",
                "d) homogenisation and standardisation …",
                "e) Cultural hybridity …"
              ],
              right: [
                "… refers to when a small minority of powerful political and corporate entities, mostly from the West, impose ideas, values and modes of cultural expression onto the rest of the world",
                "… They have the money.",
                "… – or the dominance of American cultural beliefs and values.",
                "… or we can say different cultures beginning to look similar",
                "… refers to the blending of elements from different cultures to create something new and unique."
              ]
            },
            {
              type: "figure",
              src: A + "d2-definitions.svg",
              size: "wide",
              alt: "Four signal cards a lecturer uses to explain a word: “X refers to …”, “X – or …”, “X, or we can say …”, and “They have the necessary economic means. → They have the money.” Each card shows a hard word turning into an easy explanation.",
              caption: "Four ways a lecturer signals a definition. Listen for them in the lecture."
            },
            {
              type: "do",
              n: 1,
              who: "group",
              text: "<b>Guess my word.</b> In pairs or small groups, spin the wheel. Find a definition of the word (use a dictionary if you need to). Explain it to your classmates — <b>don’t say the word!</b> Start with <i>“This word refers to …”</i>. They guess which word it is."
            },
            {
              type: "model",
              title: "Example",
              rows: [["Student A", "“This word refers to bringing things together.”"], ["Student B", "“Unifying!”"]]
            },
            {
              type: "spinner",
              id: "a2-spin",
              title: "Spin a word",
              text: "Explain the word. Your group guesses. Then pass the spinner on.",
              reels: [
                {
                  label: "Word",
                  items: ["globalisation (noun)", "slang (noun)", "values (noun)", "ideologies (noun)", "forms of artistic expression (noun phrase)", "doctrines (noun)", "cultivate (verb)", "proponents (noun)", "unifying (adj)", "constrained (adj)", "heterogeneity (noun)", "diversifying (adj)"]
                }
              ]
            },
            {
              type: "language",
              title: "Useful language: explaining and guessing words",
              groups: [
                { label: "Explain it", phrases: ["This word refers to …", "It’s a noun / verb / adjective that describes …", "It’s the opposite of …", "You use it when you talk about …", "For example, …"] },
                { label: "Guess it", phrases: ["Is it …?", "I think it might be …", "Can you give us another example?", "Does it start with …?"] },
                { label: "Academic collocations", phrases: ["cultural values · shared values", "political ideologies", "legal and ethical doctrines", "cultivate creativity", "proponents of a theory", "a unifying impact"] }
              ]
            },
            {
              type: "flip",
              title: "Check: example definitions",
              hint: "After the game, turn the cards to compare with these example definitions.",
              items: [
                { front: "globalisation", back: "Globalisation refers to the process of integrating and interacting among people, companies, and governments worldwide." },
                { front: "slang", back: "Slang refers to informal language used by particular groups, often not suitable for formal contexts." },
                { front: "values", back: "Values refers to core principles or beliefs that guide behavior and decisions." },
                { front: "ideologies", back: "Ideologies refers to systems of belief that form the basis of political or economic theories." },
                { front: "forms of artistic expression", back: "Forms of artistic expression refers to various methods, like painting or music, used by artists to express ideas and emotions." },
                { front: "doctrines", back: "Doctrines refers to established beliefs held and taught by groups or organisations." },
                { front: "cultivate", back: "Cultivate refers to developing a skill or quality." },
                { front: "proponents", back: "Proponents refers to supporters or advocates of a specific idea or cause." },
                { front: "unifying", back: "Unifying refers to something that brings together separate elements to form a coherent whole." },
                { front: "constrained", back: "Constrained refers to something that is restricted or limited in some way." },
                { front: "heterogeneity", back: "Heterogeneity refers to diversity in content or character." },
                { front: "diversifying", back: "Diversifying refers to something that adds variety." }
              ]
            }
          ],
          answers: {
            title: "Answers · sentence halves",
            items: [
              ["a) Cultural imperialism", "3) refers to when a small minority of powerful political and corporate entities, mostly from the West, impose ideas, values and modes of cultural expression onto the rest of the world"],
              ["b) They have the necessary economic means to do so.", "5) They have the money."],
              ["c) American cultural hegemony", "2) – or the dominance of American cultural beliefs and values."],
              ["d) homogenisation and standardisation", "4) or we can say different cultures beginning to look similar"],
              ["e) Cultural hybridity", "1) refers to the blending of elements from different cultures to create something new and unique."]
            ]
          }
        },
        {
          id: "a3",
          short: "Gist",
          minutes: 5,
          grouping: "Alone → Pair",
          art: V + "a3.svg",
          title: "Listening for gist",
          goal: "Listen to the first part of the lecture and get the big picture.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Listen to the first part of a lecture on globalisation for an Introduction to Sociology course at the University of Sydney (<b>0:00–1:09</b>). Answer the question." },
            Object.assign({}, LECTURE, { clip: "the first part · 0:00–1:09", transcripts: [["w5listen", "Transcript (open after listening)"]] }),
            {
              type: "quiz",
              id: "a3-q",
              title: "Gist question",
              items: [
                {
                  q: "Which one of the following (a–e) is NOT mentioned in the process of globalisation?",
                  options: [
                    "a) Economic, political, legal and technological changes",
                    "b) Changes in culture and how different cultures interact",
                    "c) International travel, immigration and the internet",
                    "d) Inter-cultural marriage and bilingual children",
                    "e) Sharing ideologies and forms of artistic expression and cultural practice"
                  ],
                  answer: "d) Inter-cultural marriage and bilingual children",
                  why: "‘Inter-cultural marriage and bilingual children’ is not mentioned. All the other ideas are in the first 1:09."
                }
              ]
            },
            {
              type: "talk",
              title: "2 · Discuss with a partner",
              prompts: [
                "Why do you think <b>‘this process (globalisation) has been criticised for being relatively one-sided’</b>?",
                "What does this mean?",
                "Predict: what will the rest of the lecture talk about?"
              ]
            },
            {
              type: "language",
              title: "Useful language: predicting",
              groups: [
                { label: "Predict", phrases: ["I think the lecturer will say that …", "My guess is that …", "It probably means that … has more influence than …", "I expect the next part to focus on …"] },
                { label: "Explain ‘one-sided’", phrases: ["One-sided means that … only goes in one direction.", "In other words, some cultures give much more than they receive.", "For example, …"] }
              ]
            }
          ]
        },
        {
          id: "a4",
          short: "Cornell notes",
          minutes: 2,
          grouping: "Alone",
          art: V + "a4.svg",
          title: "Cornell Note-Taking Technique",
          goal: "Learn the four steps of Cornell notes before you listen to the whole lecture.",
          blocks: [
            {
              type: "hotspot",
              src: A + "d2-cornell.svg",
              alt: "The Cornell note-taking template. A narrow Review column on the left, a wide Note-taking column on the right with headings, and a Summary box across the bottom. The steps are numbered 1 to 4.",
              title: "The Cornell template",
              hint: "Tap the numbers to see what goes where. Copy the template onto a blank piece of paper — or use the table in the next activity.",
              spots: [
                { x: 64, y: 30, label: "1", title: "“Note-Taking”", text: "On your <b>first listening</b>, write your notes in the Note-taking section on the right. Use <b>keywords, symbols and abbreviations</b>. The headings help to guide you.", color: "#13887a" },
                { x: 16, y: 30, label: "2", title: "“Review”", text: "<b>After</b> the first listening, review your notes. What’s missing? Was there anything you didn’t understand? Which sections do you need to focus on more? Add notes, questions and comments here. <b>Don’t write here until after your first listening.</b>", color: "#3a58a0" },
                { x: 64, y: 58, label: "3", title: "“Note-Taking” (again!)", text: "Listen again and add to your notes. Use the comments in the Review column to help you.", color: "#b0512a" },
                { x: 50, y: 88, label: "4", title: "“Summary”", text: "Write a summary of your notes at the bottom. You will get help with this in the Guided Summary.", color: "#7a4a8c" }
              ]
            },
            {
              type: "order",
              id: "a4-order",
              title: "Put the four steps in order",
              items: [
                "Note-taking: listen and write keywords, symbols and abbreviations on the right",
                "Review: check what is missing and add questions or comments on the left",
                "Note-taking again: listen again and add to your notes",
                "Summary: write a short summary at the bottom"
              ],
              ends: ["First", "Last"],
              why: "Listen → review → listen again → summarise. The Review column stays empty until after your first listening."
            }
          ]
        },
        {
          id: "a5",
          short: "Notes",
          minutes: 15,
          grouping: "Pair",
          art: V + "a5.svg",
          title: "Listening for Detail",
          goal: "Take Cornell notes on the rest of the lecture with a partner — each of you listens for one question.",
          blocks: [
            {
              type: "figure",
              src: A + "d2-lecture-map.svg",
              size: "wide",
              alt: "A road map of the lecture with seven stops: Introduction, Criticisms, McDonald’s (George Ritzer’s research), American dominance, A common critique: Americanisation, Arjun Appadurai’s thesis, and the lecturer’s final thought. The first stops are marked Student A (negative criticisms), the later stops Student B (more positive views).",
              caption: "The road through the lecture. Student A’s points come <b>first</b>, Student B’s come <b>later</b> — listen for “However, …”."
            },
            {
              type: "cards",
              title: "Choose your question",
              items: [
                { label: "Student A", text: "What are the <b>negative</b> criticisms of globalisation (Americanisation)?" },
                { label: "Student B", text: "What are the more <b>positive</b> criticisms of globalisation?" }
              ]
            },
            {
              type: "steps",
              items: [
                { who: "alone", text: "Read the headings in the table (1 minute). Then listen to the rest of the lecture (<b>1:09–end</b>). Take notes in the <b>Note-taking</b> column. Use keywords, symbols and abbreviations. You don’t need everything — just basic notes for your question." },
                { who: "pair", text: "After the first listening, <b>tell</b> your partner what you understood about your question (Student A, then Student B)." },
                { who: "pair", text: "Compare your written notes. Use your partner’s notes to fill in spaces in your own notes." },
                { who: "alone", text: "Add notes, questions and comments to the <b>Review</b> column. What’s missing? What didn’t you understand? Which sections need more focus?" },
                { who: "alone", text: "Listen again. Add to your notes. Use your Review comments to help you. Complete any information you missed." }
              ]
            },
            {
              type: "flip",
              title: "Quick symbols and short forms",
              hint: "These come from real sample notes on this lecture. Turn a card if you forget.",
              items: [
                { front: "glob’n", back: "globalisation" },
                { front: "cult.", back: "culture / cultural" },
                { front: "→", back: "leads to / results in" },
                { front: "≠", back: "is not / is different from" },
                { front: "$$", back: "money / economic means" },
                { front: "b/c · w/ · sth · ppl", back: "because · with · something · people" }
              ]
            },
            Object.assign({}, LECTURE, { start: 69, clip: "from 1:09 to the end", transcripts: [["w5listen", "Transcript (open after listening)"]] }),
            {
              type: "table",
              id: "a5-notes",
              title: "My Cornell notes",
              columns: ["Heading", "Review (after the first listening: questions / comments)", "Note-taking (keywords, symbols, abbreviations)"],
              fixed: [
                "Introduction",
                "Criticisms",
                "e.g. McDonald’s (George Ritzer’s research)",
                "American dominance",
                "A common critique of globalisation = Americanisation",
                "Arjun Appadurai’s thesis (opinion)",
                "Final thought (lecturer’s opinion)",
                "Summary"
              ]
            },
            {
              type: "language",
              title: "Useful language: sharing and comparing notes",
              groups: [
                { label: "Report your question", phrases: ["The main negative criticism was that …", "According to the critics, …", "On the positive side, Appadurai argues that …"] },
                { label: "Compare", phrases: ["What did you get for …?", "I missed the part about … — what did he say?", "We both wrote …, but you also noted …", "Can I borrow your note on …?"] },
                { label: "Review questions", phrases: ["I’m not sure what … means.", "Listen again for the example of …", "Check: who said … — the critics or the lecturer?"] }
              ]
            },
            { type: "tip", text: "Keep these notes! You will use them in the Mediation lesson and again in the Integrated writing workshop today. Notes are personal — yours can look different from your partner’s." }
          ],
          answers: {
            title: "Sample notes (for reference — notes are personal)",
            items: [
              ["Introduction", "-Globalisation affects econ, polit, legal, tech & culture/ how cultures interact · -many everyday choices= result of glob’n · -Internat. travel, immi. & the net→ shared values, ideologies & art/culture (Should go both ways- BUT 1-sided)"],
              ["Criticisms", "-trade not free/equal · -glob’n= not fair/equal cult. exchange, but cult. imperialism (a small no. of Western powerful polit./corp. entities impose ideas/values/culture on the world · -West. Nats. & lrg internat cos. have $$ to produce most of the world's cultural media (ads & entertain.) → cult. influence over less econ. powerful count’s. · -West. Nats. export movies/music/fashion brands= impose values/ideologies on the rest of the world AND politic. beliefs, legal & ethical doctrines AND beauty standards/ attitudes towards edu’n, work & health"],
              ["e.g.: McDonald’s (George Ritzer's Research)", "- McD in most count’s= signif. b/c specific type of soc. org. · - McD= bureaucratic/efficiency & control w/ less or no focus on creativity & imagination (spreading all over the world)"],
              ["American Dominance", "-many pop. cult. Products from USA · -USA= a key nation exporting cult. to the world · -e.g. brands, mass-produced food & media and entertain. · -Hollywood films & Coca-Cola= a product & a lifestyle / way of seeing the world (Amer. cult.)"],
              ["A Common Critique of Globalisation= Americanisation", "-glob’n upholds NOT challenges Amer. Cult. hegemony (dominance of Amer. Cult. beliefs/values). · -This→ cult. homogenisation & standardisation (diff. cult.s look similar / ppl give up local cult. practices for dom. West expression. · -Amer hols Halloween/ Thanksgiving → gaining popularity worldwide."],
              ["Arjun Appadurai's Thesis (Opinion)", "-glob. ≠ cult. imperialism. · -Cult. Hybridity: Blending diff cult. elements → sth new/unique · -Societies adopt glob’n differently, @ diff. speeds → not unifying impact on every soc. · -Media & migration most import. for influencing global cult. changes · -Impact depends on polit. stability, econ strength, & durability of cult. traditions. · -Glob’n affects cult BUT not Amer.’n of all cultures. · -Cult. ID= less constrained by geog./nationality→ new cult. ID w/ elements from diff. cult.s · -This→ greater cult. heterogeneity & homogeneity."],
              ["Final thought (Lecturer’s Opinion)", "-Glob. impact on cult.= unifying & diversifying, depending on loc. context & how it’s adapted/reshaped by loc. cult.s"]
            ]
          }
        },
        {
          id: "a6",
          short: "Summary",
          minutes: 8,
          grouping: "Alone → Pair",
          art: V + "a6.svg",
          title: "Guided Summary",
          goal: "Use your notes to complete a summary of the whole lecture.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Use your notes to complete the guided summary with the words in the box." },
            {
              type: "cloze",
              id: "a6-cl",
              title: "Complete the summary",
              options: ["Western", "hybridity", "travel", "choices", "local", "imperialism", "unique", "political", "media", "one-sided", "homogenisation"],
              text: "Globalisation has profoundly shaped societies' economic, {{1}}, legal, technological, and cultural landscapes, influencing everyday {{2}}, from the food people eat to the {{3}} they consume, largely dominated by {{4}} influences. This vast cultural exchange, facilitated by international {{5}}, immigration, and the internet, is often criticised as being {{6}}, manifesting as cultural {{7}}, where powerful Western entities impose their values and cultural norms on other nations. Critics argue this results in a global {{8}} of culture, often referred to as Americanisation, characterised by the widespread adoption of Western media, consumer products, and lifestyles. However, others challenge this view, suggesting that globalisation also promotes cultural {{9}}, where different cultural elements blend to create {{10}} identities, leading to both cultural diversity and uniformity depending on {{11}} adaptations of these global influences.",
              answers: ["political", "choices", "media", "Western", "travel", "one-sided", "imperialism", "homogenisation", "hybridity", "unique", "local"]
            },
            { type: "tip", text: "This summary fits the <b>Summary</b> section of your Cornell notes (it is a little long — yours can be shorter). You don’t need to copy it." },
            { type: "do", n: 2, who: "pair", text: "<b>Retell it.</b> Close the summary. Partner A retells the first half (to “other nations”) in your own words. Partner B retells the second half. Use the signposts below." },
            {
              type: "language",
              title: "Useful language: retelling a lecture",
              groups: [
                { label: "Start", phrases: ["The lecture was mainly about …", "The lecturer began by explaining that …"] },
                { label: "Move on", phrases: ["He then went on to describe …", "After that, he gave the example of …", "However, he also presented a different view: …"] },
                { label: "Finish", phrases: ["Finally, he concluded that …", "Overall, his position was that …"] }
              ]
            }
          ]
        },
        {
          id: "a12",
          short: "Speak from notes",
          minutes: 10,
          grouping: "Pairs · rotate",
          art: V + "a12.svg",
          title: "Speaking from notes: 60-second mini-lectures",
          goal: "Use your Cornell notes to explain the lecture out loud — no reading full sentences.",
          blocks: [
            {
              type: "key",
              title: "Good notes are notes you can speak from",
              points: [
                "In a tutorial or a seminar you often explain a lecture from your notes. You look at a keyword, then you say a full sentence.",
                "Example: <b>“McD → efficiency & control”</b> → <i>“Ritzer argues that McDonald’s favours efficiency and control over creativity.”</i>"
              ]
            },
            {
              type: "steps",
              title: "Speed-dating mini-lectures",
              items: [
                { who: "class", text: "<b>Stand up</b> with your notes. Make two lines (or an inner and an outer circle). Face a partner." },
                { who: "pair", text: "<b>Round 1 (60 seconds):</b> the inner circle gives a mini-lecture from their notes on <b>their question</b> (Student A: the negative criticisms · Student B: the more positive views). Look at the notes, look up, speak. Don’t read whole lines!" },
                { who: "pair", text: "Your partner listens and writes <b>three keywords</b> only. Then they ask <b>one question</b> (see the box)." },
                { who: "pair", text: "Swap: the outer circle speaks for 60 seconds." },
                { who: "class", text: "The outer circle <b>moves one place</b> to the right. Round 2: talk about the <b>other</b> question this time — use the notes your partner gave you earlier. Round 3 if there is time." }
              ]
            },
            {
              type: "language",
              title: "Useful language: a mini-lecture from notes",
              groups: [
                { label: "Open", phrases: ["I’m going to talk about …", "The lecture looked at two views of …", "My question was: what are the … criticisms of globalisation?"] },
                { label: "Turn a note into a sentence", phrases: ["According to critics, …", "Ritzer argues that …", "The lecturer gives the example of … to show that …", "This leads to …"] },
                { label: "Signpost", phrases: ["First of all, …", "Another point is that …", "On the other hand, …", "To sum up, …"] },
                { label: "Listener: ask one question", phrases: ["Could you say a bit more about …?", "What example did the lecturer give for …?", "So is the lecturer for or against …?"] }
              ]
            },
            {
              type: "checklist",
              id: "a12-check",
              title: "Partner check: did the speaker …",
              items: [
                "look up from the notes most of the time?",
                "speak in full sentences (not just keywords)?",
                "name whose idea it was (critics, Ritzer, Appadurai, the lecturer)?",
                "use at least one signpost (First of all / On the other hand / To sum up)?"
              ]
            },
            {
              type: "fields",
              title: "Exit ticket",
              fields: [{ id: "a12-fix", label: "One heading in my Cornell notes I will add to after speaking — and what I will add", rows: 2, placeholder: "Under “Arjun Appadurai’s thesis” I will add …" }]
            }
          ]
        },
        {
          id: "a7",
          short: "Test practice",
          minutes: 10,
          grouping: "Alone → Pair",
          art: V + "a7.svg",
          title: "Building Understanding",
          goal: "Use your notes to answer test-style questions about the lecture.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Use your notes to answer the questions. You can work with a partner. Then compare with the sample notes in the Listening for Detail answers." },
            {
              type: "limit",
              id: "a7-lim",
              title: "Questions 1–4",
              rule: "Write NO MORE THAN THREE WORDS",
              max: 3,
              items: [
                {
                  q: "1. Complete the sentence: Critics of globalisation compare trade and cultural exchanges because neither of them are ________.",
                  accept: ["fair and equal", "free and equal", "equal"],
                  model: "fair and equal / free and equal / equal",
                  why: "“… trade between nations isn’t truly free and equal … The same applies to cultural exchanges … not a fair and equal cultural exchange.”"
                },
                {
                  q: "2. What are 2 examples of “the world’s cultural media”?",
                  accept: { need: 2, any: ["advertising", "entertainment"] },
                  model: "advertising and entertainment",
                  why: "“… they produce the majority of the world’s cultural media. This includes advertising and entertainment.”"
                },
                {
                  q: "3. In George Ritzer's research of McDonald’s, what does he say their bureaucratic approach prioritises over creativity and imagination?",
                  accept: { need: 2, any: ["efficiency", "control"] },
                  model: "efficiency and control",
                  why: "“… a bureaucratic approach to life that favours efficiency and control over creativity and imagination.”"
                },
                {
                  q: "4. What are brand name products, mass-produced food, media and entertainment all examples of?",
                  accept: ["American cultural imperialism", "American imperialism", "cultural imperialism"],
                  model: "American cultural imperialism",
                  why: "“Examples of American cultural imperialism or dominance include brand name products, mass-produced food and … media and entertainment.”"
                }
              ]
            },
            {
              type: "bet",
              id: "a7-bet",
              title: "Questions 5–10 · bet on your answer",
              coins: 12,
              items: [
                {
                  q: "5. Why does the lecturer mention Hollywood films and Coca-Cola?",
                  options: ["A · They are products that sell to very well in overseas markets", "B · They promote the American lifestyle and way of viewing the world", "C · They are examples of media and entertainment", "D · They show that globalisation is a recent phenomenon"],
                  answer: "B · They promote the American lifestyle and way of viewing the world",
                  why: "“They sell a lifestyle and a specific way of seeing the world, which is ultimately grounded in American culture.”"
                },
                {
                  q: "6. What do critics argue is the connection between globalisation and American cultural hegemony?",
                  options: ["A · Globalisation encourages American cultural hegemony", "B · Globalisation hinders American cultural hegemony", "C · American cultural hegemony prevents globalisation", "D · There is no connection between globalisation and American cultural hegemony"],
                  answer: "A · Globalisation encourages American cultural hegemony",
                  why: "“… globalisation is responsible for upholding rather than challenging American cultural hegemony.”"
                },
                {
                  q: "7. Which concept does Arjun Appadurai suggest should be associated with globalisation?",
                  options: ["A · cultural hegemony", "B · cultural homogenisation", "C · cultural imperialism", "D · cultural hybridity"],
                  answer: "D · cultural hybridity",
                  why: "“He thinks people should also consider concepts like cultural hybridity.”"
                },
                {
                  q: "8. Which factors does Arjun Appadurai argue are the most significant influences over today’s global cultural changes?",
                  options: ["A · political stability and strength of the economy", "B · strength and complexity of cultural traditions", "C · media and migration", "D · fashion and food"],
                  answer: "C · media and migration",
                  why: "“In Appadurai’s thesis, media and migration are the most important factors …” (A and B only change how big their impact is.)"
                },
                {
                  q: "9. Who has the most positive attitude towards globalisation?",
                  options: ["A · Critics", "B · George Ritzer", "C · Proponents of the Americanisation theory", "D · Arjun Appadurai"],
                  answer: "D · Arjun Appadurai",
                  why: "“… Arjun Appadurai has a more optimistic view …”"
                },
                {
                  q: "10. What is the lecturer’s stance on globalisation?",
                  options: ["A · Only politically unstable cultures are affected.", "B · It can have different impacts depending on the local culture.", "D · Americanisation always has negative impacts."],
                  answer: "B · It can have different impacts depending on the local culture.",
                  why: "“Clearly, the impact of globalisation on culture is both unifying and diversifying, depending on the local contexts …”"
                }
              ]
            },
            { type: "tip", text: "Notes are a personal thing. The sample notes are not the ‘correct answer’ — they are one example. If your notes helped you answer, they are good notes!" },
            {
              type: "talk",
              title: "Talk about your notes",
              prompts: ["Which question was hardest? Was the answer missing from your notes?", "Which heading in your Cornell notes needs more detail next time?"]
            }
          ]
        },
        {
          id: "a11",
          short: "Note-taking gym",
          minutes: 12,
          grouping: "Teams → Pair",
          art: V + "a11.svg",
          title: "Note-taking practice: abbreviations race and dictogloss",
          goal: "Take faster notes with symbols — then rebuild a sentence from the lecture with a partner.",
          blocks: [
            { type: "do", n: 1, who: "group", text: "<b>Abbreviations race</b> (2 minutes). In teams, match each note to its meaning. The first team to finish correctly stands up and shouts “Done!” — <b>+1 point</b>." },
            {
              type: "match",
              id: "a11-match",
              title: "What does the note mean?",
              hint: "Tap a note, then its meaning. These are real notes on this lecture.",
              left: ["glob’n", "cult. imp.", "Amer’n", "w/ · w/o", "↑ · ↓", "∴", "e.g. · i.e.", "Δ"],
              right: ["globalisation", "cultural imperialism", "Americanisation", "with · without", "increase · decrease", "therefore", "for example · that is", "change"]
            },
            {
              type: "steps",
              title: "Dictogloss: listen once, note little, rebuild together",
              items: [
                { who: "alone", text: "Your teacher plays the part about <b>Appadurai’s thesis</b> again, from “In Appadurai’s thesis, media and migration …” (paragraph I in the transcript). <b>Listen once only.</b>" },
                { who: "alone", text: "Write <b>no more than 15 words</b>. Use symbols and short forms. Pens down when the part ends!" },
                { who: "pair", text: "With a partner, put your notes together and <b>rebuild the ideas</b> in full sentences. The meaning must be the same; the words can be different." },
                { who: "pair", text: "Now open the transcript and compare. Give yourselves 1 point for each idea you got." }
              ]
            },
            Object.assign({}, LECTURE, { start: 69, clip: "Appadurai’s thesis · from “In Appadurai’s thesis …” (paragraph I)", transcripts: [["w5listen", "Transcript (open after rebuilding)"]] }),
            {
              type: "fields",
              title: "Our dictogloss",
              fields: [
                { id: "a11-notes", label: "My 15-word notes", rows: 2, placeholder: "media + migr. → glob. cult. Δ …" },
                { id: "a11-rebuild", label: "Our rebuilt text (full sentences)", rows: 4, placeholder: "According to Appadurai, media and migration are …" }
              ]
            },
            {
              type: "checklist",
              id: "a11-ideas",
              title: "Score your ideas (1 point each)",
              meter: ["ideas", "Note-taking champion!"],
              items: [
                "Media and migration are the most important factors.",
                "Their impact depends on other things: political stability, the economy and how strong the cultural traditions are.",
                "Globalisation does shape cultures …",
                "… but the result is not the Americanisation of all cultures.",
                "Cultural identities are less limited by place and nationality, so new mixed identities are appearing."
              ]
            },
            {
              type: "language",
              title: "Useful language: rebuilding with a partner",
              groups: [
                { label: "Compare", phrases: ["What did you get after “media and migration”?", "I wrote “≠ Amer’n” — I think that means …", "Did he say … or …?"] },
                { label: "Rebuild", phrases: ["So the main idea is that …", "Let’s say it in a full sentence: …", "Shall we add “according to Appadurai”?"] }
              ]
            },
            { type: "tip", text: "In the LRW Assessment you hear the lecture <b>once only</b>. Short notes with symbols are faster — and you only need enough to rebuild the idea." }
          ],
          answers: {
            title: "Answers · abbreviations",
            items: [["glob’n", "globalisation"], ["cult. imp.", "cultural imperialism"], ["Amer’n", "Americanisation"], ["w/ · w/o", "with · without"], ["↑ · ↓", "increase · decrease"], ["∴", "therefore"], ["e.g. · i.e.", "for example · that is"], ["Δ", "change"]]
          }
        },
        {
          id: "a10",
          short: "Signal hunt",
          minutes: 10,
          grouping: "Teams",
          art: V + "a10.svg",
          title: "Listening skill: signal hunt",
          goal: "Hear the small words that tell you what comes next — a definition, an example, a contrast or an opinion.",
          blocks: [
            {
              type: "key",
              title: "Signals are road signs",
              points: [
                "Lecturers use small phrases to show what is coming next. If you hear the signal, you know what to write.",
                "<b>“However, …”</b> → a different view is coming. Write it in a new line of your notes!"
              ]
            },
            {
              type: "sort",
              id: "a10-sort",
              title: "1 · What does each signal tell you? (all from this lecture)",
              hint: "Drag or tap each signal into a box. Then check.",
              buckets: [
                { label: "A definition is coming", letter: "D" },
                { label: "An example is coming", letter: "E" },
                { label: "A contrast / other view", letter: "C" },
                { label: "The lecturer’s opinion", letter: "O" }
              ],
              items: [
                { text: "Cultural imperialism refers to …", answer: 0 },
                { text: "… or we can say …", answer: 0 },
                { text: "Examples of American cultural imperialism … include …", answer: 1 },
                { text: "Just like McDonald’s, …", answer: 1 },
                { text: "In theory, … However, in practice …", answer: [2, 3], why: "It shows a contrast — and it is also the lecturer’s evaluation." },
                { text: "However, … Appadurai has a more optimistic view …", answer: 2 },
                { text: "There is little doubt that …", answer: 3 },
                { text: "Clearly, …", answer: 3 }
              ]
            },
            {
              type: "steps",
              title: "2 · Stand up when you hear it!",
              items: [
                { who: "group", text: "Make 4 teams. Each team gets one signal type: <b>Definition · Example · Contrast · Opinion</b>." },
                { who: "class", text: "Your teacher plays the lecture again from <b>1:09</b>. When you hear a signal for <b>your</b> team, <b>stand up</b> quickly. The teacher pauses." },
                { who: "group", text: "Your team says the signal and <b>what came after it</b> (in your own words) → <b>+1 point</b>. Wrong team stands up? −1!" },
                { who: "class", text: "Sit down and continue. The team with the most points wins." }
              ]
            },
            Object.assign({}, LECTURE, { start: 69, clip: "from 1:09 to the end · listen for the signals", transcripts: [["w5listen", "Transcript (open after the game)"]] }),
            {
              type: "language",
              title: "Useful language: signals you will hear in lectures",
              groups: [
                { label: "Definition", phrases: ["X refers to …", "X, or we can say …", "By X, I mean …", "In other words, …"] },
                { label: "Example", phrases: ["Examples of X include …", "For instance, …", "Just like …, …", "Take … as an example."] },
                { label: "Contrast", phrases: ["However, …", "In theory, … However, in practice …", "On the other hand, …", "Rather than …, …"] },
                { label: "Opinion / evaluation", phrases: ["There is little doubt that …", "Clearly, …", "It’s not surprising then that …", "Chances are …"] }
              ]
            },
            {
              type: "fields",
              title: "Use it: say it like an academic",
              fields: [{ id: "a10-use", label: "Explain one word from the lecture to your partner with a definition signal. Write your sentence here.", rows: 2, placeholder: "Cultural hybridity refers to … In other words, …" }]
            }
          ],
          answers: {
            title: "Answers · signals",
            items: [["A definition is coming", "refers to · or we can say"], ["An example is coming", "Examples of … include · Just like McDonald’s"], ["A contrast / other view", "In theory … However, in practice (also the lecturer’s opinion) · However, Appadurai has a more optimistic view"], ["The lecturer’s opinion", "There is little doubt that · Clearly · In theory … However, in practice"]]
          }
        },
        {
          id: "a8",
          short: "Whose opinion?",
          minutes: 5,
          grouping: "Pair",
          art: V + "a8.svg",
          title: "Language focus: Expressing Opinions",
          goal: "Tell the difference between other people’s ideas and the lecturer’s own opinion.",
          blocks: [
            {
              type: "model",
              title: "1 · Look at this example",
              rows: [
                ["Other people’s opinions", "“<b>Critics of globalisation argue that</b> trade between nations isn't truly free and equal because of existing political and economic inequalities.” · “<b>According to Ritzer,</b> the presence of McDonald's in almost every country in the world is significant because McDonald's operational structure represents a specific type of social organisation.” · “this process <b>has been criticised for being</b> relatively one-sided.”"],
                ["Lecturer’s opinions", "“Think about what you've done in the past 24 hours…. <b>Chances are</b> a large proportion of the choices you make in everyday life are a direct result of globalisation.” (The lecturer believes that many of the students’ life choices are the result of globalisation.) · “<b>In theory,</b> these cultural flows go both ways. <b>However, in practice</b> this process has been criticised for being relatively one-sided.” (The lecturer is evaluating traditional theories about two-way cultural exchange as being incorrect in reality)"]
              ]
            },
            {
              type: "figure",
              src: A + "d2-views.svg",
              size: "wide",
              alt: "A see-saw of views on globalisation and culture. On the left side: critics, proponents of the Americanisation theory and George Ritzer — cultural imperialism, Americanisation, homogenisation. On the right side: Arjun Appadurai — cultural hybridity, heterogeneity, new cultural identities. In the middle, the lecturer’s own view: both unifying and diversifying, depending on the local context.",
              caption: "Three kinds of voice in the lecture: critics, Appadurai — and the lecturer in the middle."
            },
            {
              type: "sort",
              id: "a8-sort",
              title: "2 · Other people’s ideas or the lecturer’s opinion?",
              hint: "Some extracts might have both. Drag each extract into a box — or tap it, then tap a box.",
              buckets: [
                { label: "Other people’s ideas", letter: "O" },
                { label: "Lecturer’s opinion / evaluation", letter: "L" },
                { label: "Both", letter: "B" }
              ],
              items: [
                { text: "1) “In the context of globalisation, there is little doubt that America has been one of the key nations to export aspects of its culture to other parts of the world”.", answer: 1, why: "“There is little doubt that” = the lecturer’s own evaluation." },
                { text: "2) “It's not surprising then that one of the most common critiques of globalisation is that it's led to the Americanisation of the world. Proponents of this theory argue that globalisation is responsible for upholding rather than challenging American cultural hegemony …”", answer: 2, why: "“It’s not surprising then that” = the lecturer. “one of the most common critiques … is that” / “Proponents of this theory argue that” = other people." },
                { text: "3) “However, Indian social anthropologist and sociologist Arjun Appadurai has a more optimistic view, contending that globalisation should not be thought of as cultural imperialism. He thinks people should also consider concepts like cultural hybridity.”", answer: 0, why: "“has a more optimistic view, contending that” and “He thinks” report Appadurai’s ideas." },
                { text: "4) “Appadurai suggests that all societies and cultures adopt aspects of globalisation in different ways and at different speeds.”", answer: 0 },
                { text: "5) “In Appadurai's thesis, media and migration are the most important factors to influence the global cultural changes we're seeing today.”", answer: 0 },
                { text: "6) “In other words, he doesn't deny that globalisation affects and shapes cultures, but he also doesn't believe that the result is an Americanisation of all cultures.”", answer: 0 },
                { text: "7) “Appadurai argues instead that cultural identities are becoming less constrained by geographical space and nationality, and as a result, new cultural identities that have elements from different cultures are emerging.”", answer: 0 },
                { text: "8) “Clearly, the impact of globalisation on culture is both unifying and diversifying, depending on the local contexts and the ways in which global influences are adapted and reshaped by local cultures.”", answer: 1, why: "“Clearly” = the lecturer’s final opinion." }
              ]
            },
            {
              type: "spot",
              id: "a8-spot",
              label: "Opinion-phrase spotter",
              title: "Which phrases helped you?",
              hint: "Tap the phrases that introduce someone’s opinion or evaluation. Careful — some highlighted words are just content.",
              paras: [
                "“In the context of globalisation, [[*there is little doubt that]] America has been one of the key nations to export aspects of its culture to [[other parts of the world]].”",
                "“[[*It's not surprising then that]] [[*one of the most common critiques of]] globalisation [[*is that]] it's led to the Americanisation of the world. [[*Proponents of this theory argue that]] globalisation is responsible for upholding rather than challenging [[American cultural hegemony]].”",
                "“[[*Appadurai suggests that]] all societies and cultures adopt aspects of globalisation [[in different ways]] and at different speeds.”",
                "“In other words, [[*he doesn't deny that]] globalisation affects and shapes cultures, [[*but he also doesn't believe that]] the result is an Americanisation of all cultures.”",
                "“[[*Clearly,]] the impact of globalisation on culture is both [[unifying and diversifying]], depending on the local contexts.”"
              ]
            }
          ]
        },
        {
          id: "a9",
          short: "Your opinion",
          minutes: 10,
          grouping: "Alone → Group",
          art: V + "a9.svg",
          title: "Language in Use and Criticality",
          goal: "Write your opinion about globalisation, then read classmates’ opinions aloud and evaluate them.",
          blocks: [
            {
              type: "figure",
              src: A + "d2-voices.svg",
              size: "wide",
              alt: "Two speech-bubble columns. Left, in teal, phrases to introduce other people’s opinions: Critics of … argue that, According to …, One of the most common critiques of … is that, Proponents of this theory argue that, … contends that, … suggests that, … argues instead that, In …’s view, He doesn’t deny that … but he also doesn’t believe that. Right, in coral, phrases to express opinions: Chances are, In theory … However, in practice, There is little doubt that, It’s not surprising then that, Clearly, I would argue that, It seems to me that, I concur with … when they say, I don’t entirely agree that … because.",
              caption: "Language for Expressing Opinions · all these phrases can be followed by a complete clause (subject + verb)."
            },
            {
              type: "language",
              title: "Language for Expressing Opinions",
              groups: [
                { label: "Introduce other people’s opinions", phrases: ["Critics of ______ argue that …", "According to __(name)__, …", "One of the most common critiques of _______ is that …", "Proponents of this theory argue that …", "__(name)__ contends that … He/She thinks …", "__(name)__ suggests that …", "__(Name)__ argues instead that …", "In __(name)’s thesis/view/opinion, …", "He/she doesn't deny that …, but he/she also doesn't believe that …"] },
                { label: "Express your opinion", phrases: ["(The) chances are …", "In theory, … However, in practice …", "There is little doubt that …", "It's not surprising then that …", "Clearly, …", "I would argue that …", "It seems to me that …", "I concur with __(name)__ when they say …", "I don’t entirely agree that … because …"] },
                { label: "Extra: hedge your opinion", phrases: ["It could be argued that …", "To some extent, …", "This may suggest that …", "In many cases, though not all, …"] },
                { label: "Extra: academic collocations", phrases: ["a one-sided cultural exchange", "local cultural practices", "multinational corporations", "economic strength", "traditional values", "cultural identity"] }
              ]
            },
            { type: "do", n: 1, who: "alone", text: "<b>Language in Use.</b> Write a few sentences or a short paragraph with <b>your opinion</b> about globalisation. Spin for a point if you need an idea. This is YOUR OPINION, so there is no right or wrong answer." },
            {
              type: "spinner",
              id: "a9-spin",
              title: "Spin a point to comment on",
              reels: [
                { label: "Comment on", items: ["The one-sided nature of cultural exchange", "Americanisation", "Large multinational corporations", "Media and entertainment", "Different national economic strength", "Traditional values", "Cultural hybridity (blending cultures)"] }
              ]
            },
            {
              type: "detect",
              id: "a9-dt",
              label: "Opinion studio",
              title: "My opinion about globalisation",
              hint: "The lights turn on when you use each kind of language.",
              checks: [
                { label: "An opinion phrase", any: ["chances are", "in theory", "in practice", "there is little doubt", "it's not surprising", "it’s not surprising", "clearly", "i would argue", "it seems to me"], color: "#c4562f" },
                { label: "A reason", any: ["because", "since", "as a result", "due to", "this means"], color: "#2f7d6b" },
                { label: "A contrast", any: ["however", "although", "while", "whereas", "on the other hand", "but"], color: "#3a58a0" },
                { label: "Topic words", any: ["globalisation", "globalization", "culture", "americanisation", "americanization", "hybridity", "multinational", "media", "traditional"], color: "#8a4f9e" }
              ],
              items: [
                {
                  task: "Write 2–5 sentences. Use at least two phrases from the box.",
                  rows: 6,
                  placeholder: "It seems to me that …",
                  model: "<i>One possible answer:</i> It seems to me that globalisation has made cultural exchange more one-sided than it should be. In theory, every country can share its films and music online. However, in practice, large multinational corporations from a few rich countries control most of the media we see. That said, I would argue that young people are also mixing cultures in creative ways, so the picture is not completely negative."
                }
              ]
            },
            {
              type: "steps",
              title: "Criticality: read and evaluate",
              items: [
                { who: "group", text: "Swap your opinions with your group (on paper, a shared doc or by reading aloud). You can use your real name or a fun fake name!" },
                { who: "group", text: "Read another student’s opinion aloud. First <b>introduce</b> their opinion — remember to <b>paraphrase</b>." },
                { who: "group", text: "Then <b>evaluate</b> it: do you agree? Can you find any issues with their opinion?" }
              ]
            },
            {
              type: "chat",
              title: "An example",
              right: "Leo",
              lines: [
                ["Mina", "OK, here’s Leo’s. <mark>According to Leo,</mark> Hollywood films make young people forget local stories."],
                ["Leo", "That’s right — that’s my view."],
                ["Mina", "<mark>I don’t entirely agree that</mark> people forget them, <mark>because</mark> local cinema is growing in many countries too."],
                ["Sam", "<mark>I concur with Leo when he says</mark> Hollywood is everywhere. <mark>However, in practice,</mark> people watch both."],
                ["Leo", "Fair point. Maybe it’s more hybrid than I thought."]
              ]
            },
            {
              type: "language",
              title: "Polite discussion moves",
              groups: [
                { label: "Agree", phrases: ["I concur with … when they say …", "That’s a fair point, and I’d add that …", "I’m with … on this one, because …"] },
                { label: "Disagree politely", phrases: ["I don’t entirely agree that … because …", "I see your point, but in practice …", "That may be true for …, but not for …"] },
                { label: "Find an issue", phrases: ["One problem with this view is that …", "This doesn’t take into account …", "Is there any evidence that …?"] }
              ]
            }
          ]
        },
        {
          id: "a13",
          short: "Opinion line",
          minutes: 13,
          grouping: "Class → Pairs",
          art: V + "a13.svg",
          title: "Opinion line-up and mini-debate",
          goal: "Take a position, defend it with the lecture and the language of opinions — then argue the other side.",
          blocks: [
            {
              type: "figure",
              src: A + "d2-views.svg",
              size: "wide",
              alt: "A see-saw of views on globalisation and culture. On the left side: critics, proponents of the Americanisation theory and George Ritzer — cultural imperialism, Americanisation, homogenisation. On the right side: Arjun Appadurai — cultural hybridity, heterogeneity, new cultural identities. In the middle, the lecturer’s own view: both unifying and diversifying, depending on the local context.",
              caption: "Where do you stand? Use these voices as your evidence."
            },
            {
              type: "scale",
              id: "a13-before",
              title: "Before: where do you stand?",
              statement: "Globalisation is making cultures around the world the same.",
              ends: ["Strongly agree", "Strongly disagree"],
              mid: "It depends"
            },
            {
              type: "steps",
              title: "1 · The opinion line (4 minutes)",
              items: [
                { who: "class", text: "<b>Stand up.</b> One wall is <b>Strongly agree</b>, the opposite wall is <b>Strongly disagree</b>. Stand on the line where your opinion is." },
                { who: "class", text: "Talk to the people next to you: why are you standing here? Then 3–4 students (one from each end and the middle) explain to the whole class in <b>one or two sentences</b>." },
                { who: "class", text: "Each speaker must use <b>one opinion phrase</b> and <b>one voice from the lecture</b> (critics, Ritzer, Appadurai or the lecturer). Changed your mind? <b>Move!</b>" }
              ]
            },
            {
              type: "steps",
              title: "2 · Fold the line: mini-debate (7 minutes)",
              items: [
                { who: "class", text: "Fold the line: the “agree” end walks to meet the “disagree” end. Now you face a partner with a <b>different</b> opinion." },
                { who: "pair", text: "<b>Round 1 (90 seconds each):</b> give your view. Your partner introduces your view (<i>“So, according to you, …”</i>) and then evaluates it (<i>“I don’t entirely agree, because …”</i>)." },
                { who: "pair", text: "<b>Round 2 — devil’s advocate:</b> swap sides! Argue for the opinion you disagree with. Use the same phrases." },
                { who: "group", text: "In threes, one person is the <b>language monitor</b>: tick each phrase you hear in the checklist below. Change roles each round." }
              ]
            },
            {
              type: "checklist",
              id: "a13-monitor",
              title: "Language monitor: tick each phrase you hear",
              meter: ["phrases heard", "Full house — great debating!"],
              items: ["According to …, …", "Critics of … argue that …", "… contends that …", "There is little doubt that …", "In theory, … However, in practice …", "It seems to me that …", "I concur with … when they say …", "I don’t entirely agree that … because …", "Clearly, …"]
            },
            {
              type: "language",
              title: "Useful language: debating politely",
              groups: [
                { label: "Introduce your partner’s view", phrases: ["So, according to you, …", "If I understand you correctly, you think that …", "Your point is that …"] },
                { label: "Evaluate it", phrases: ["I concur with you when you say …, but …", "I don’t entirely agree that … because …", "That may be true for …, but not for …", "One problem with this view is that …"] },
                { label: "Use the lecture as evidence", phrases: ["As Ritzer points out, …", "Appadurai would argue that …", "The lecturer concludes that …"] },
                { label: "Devil’s advocate", phrases: ["Let me play devil’s advocate: …", "Just for the sake of argument, …", "Someone could argue that …"] }
              ]
            },
            {
              type: "scale",
              id: "a13-after",
              title: "After: has your view changed?",
              statement: "Globalisation is making cultures around the world the same.",
              ends: ["Strongly agree", "Strongly disagree"],
              mid: "It depends"
            },
            {
              type: "fields",
              title: "Exit ticket · one sentence for your essay",
              fields: [{ id: "a13-exit", label: "Write one sentence for this week’s essay: someone else’s opinion + your evaluation.", rows: 2, placeholder: "Critics of globalisation argue that … However, in practice, …" }]
            }
          ]
        }
      ]
    },

    /* ════════════════════════ 5A MEDIATION ════════════════════════ */
    {
      id: "mediation",
      number: "02",
      code: "5A",
      minutes: 90,
      tone: "blue",
      art: A + "s-d2-mediation.svg",
      title: "Mediation",
      subtitle: "Synthesis, not summary — make your sources talk to each other",
      outcome: "You identify the difference between a synthesis and a summary, and you use sample notes to draft a synthesis paragraph.",
      activities: [
        {
          id: "b1",
          short: "Board game",
          minutes: 10,
          grouping: "Groups of 3",
          art: V + "b1.svg",
          title: "Recap",
          goal: "Play a board game to remember the reading and the lecture.",
          blocks: [
            {
              type: "figure",
              src: A + "d2-board-game.svg",
              size: "wide",
              alt: "A winding board game with a Start square, squares numbered 1 to 14 and a Finish square. A coin shows Heads = 1 space and Tails = 2 spaces. Square colours show the question type: True or false, Define, Your opinion, and Other.",
              caption: "Heads = <b>1 space</b> · Tails = <b>2 spaces</b>"
            },
            {
              type: "steps",
              items: [
                { who: "group", text: "Play in groups of 3. Flip a coin to move through the board: <b>Heads: 1 space · Tails: 2 spaces</b>." },
                { who: "group", text: "Answer the question on your square. It’s OK to look at your notes. Your classmates can help you too." },
                { who: "group", text: "If the answer is incorrect, or you cannot answer, <b>do not move</b> for that turn." }
              ]
            },
            {
              type: "cards",
              title: "The squares",
              numbered: false,
              items: [
                { label: "1", text: "<b>True or false?</b> According to Reading 1: There is a lot of research about the interaction between globalisation and culture." },
                { label: "2", text: "<b>Define:</b> What is the Homogenization perspective on culture?" },
                { label: "3", text: "<b>Define:</b> What is cultural hybridization?" },
                { label: "4", text: "Do you agree the world culture is becoming ‘Americanised’?" },
                { label: "5", text: "What is the role of media in the Americanisation of culture?" },
                { label: "6", text: "<b>Define:</b> What is the Americanization of culture?" },
                { label: "7", text: "<b>Define:</b> What does the term ‘glocalization’ refer to?" },
                { label: "8", text: "Do you agree with the homogenisation perspective or the hybridization perspective?" },
                { label: "9", text: "<b>True or False</b> According to the lecture, Globalisation has resulted in cultural imperialism." },
                { label: "10", text: "Holidays like Halloween and Thanksgiving entering the culture of different countries is an example of......?" },
                { label: "11", text: "<b>True or false</b> According to the lecture, Cultural hybridity refers to the blending of elements from different cultures to create something new and unique." },
                { label: "12", text: "<b>True or false</b> According to the lecture, political stability, strength of the economy, and longevity of existing cultural traditions determine the impact of media in a culture." },
                { label: "13", text: "Can you find examples of cultural hybridity in Asia?" },
                { label: "14", text: "Do you agree that new cultural identities that have elements from different cultures are emerging?" }
              ]
            },
            { type: "sources", ids: ["threeh", "w5listen"] },
            {
              type: "language",
              title: "Useful language: playing the game",
              groups: [
                { label: "Turns", phrases: ["Whose turn is it?", "Heads — one space.", "Tails — two spaces for you!", "Sorry, you stay there this turn."] },
                { label: "Answer", phrases: ["I think it’s true, because the reading says …", "If I remember correctly, it means …", "Can I quickly check my notes?"] },
                { label: "Help / challenge", phrases: ["Are you sure? I think the lecture said …", "Nearly! You could add that …", "Good answer — move on."] }
              ]
            }
          ],
          answers: {
            title: "Suggested answers",
            items: [
              ["1", "False — Hassi and Storti say that globalization’s impacts on societies and their cultures are rarely addressed."],
              ["2", "Global influences lead to a more uniform world culture (e.g. a widespread Western / Euro-American lifestyle)."],
              ["3", "Cultures merge elements from both local and global contexts to make something new."],
              ["4", "Your own opinion — give a reason and an example."],
              ["5", "Media and entertainment (cultural products) are a way to spread American values and ideologies; American mass media keeps expanding."],
              ["6", "Local cultures are shaped by the more powerful American culture (e.g. McDonaldisation, Hollywood)."],
              ["7", "Global products and ideas are adapted to fit local cultures — the global and the local mix. Check your Reading 1 notes."],
              ["8", "Your own opinion — use “I would argue that …”."],
              ["9", "The critics in the lecture say so. Appadurai disagrees, and the lecturer concludes that the impact is both unifying and diversifying — so it depends on whose view."],
              ["10", "Americanisation (cultural homogenisation)."],
              ["11", "True."],
              ["12", "True — in Appadurai’s thesis these factors decide how much media and migration affect a nation."],
              ["13", "Your own examples, e.g. Chinese streetwear brands, the Korean Wave, Marvel’s Shang Chi (see the Love local reading)."],
              ["14", "Your own opinion — Appadurai and Crysell et al. (2023) both say yes."]
            ]
          }
        },
        {
          id: "b2",
          short: "Synthesis?",
          minutes: 12,
          grouping: "Alone → Pair",
          art: V + "b2.svg",
          title: "Academic skills",
          goal: "Watch a short video and learn what synthesis is — and what it is not.",
          blocks: [
            {
              type: "listening",
              source: "Academic skills video",
              title: "What is synthesis?",
              videoId: "ObK6J7vGnw8",
              audio: "",
              start: 0,
              clip: "the whole video",
              transcripts: []
            },
            { type: "tip", text: "Fast? Slow it down: click the <b>settings</b> icon (bottom right of the video) → <b>Playback speed</b> → <b>0.9</b>." },
            { type: "do", n: 1, who: "alone", text: "Watch the video and complete the statements." },
            {
              type: "cloze",
              id: "b2-cl",
              title: "Complete the statements",
              options: ["puzzle", "summarising", "own point", "critically", "themes", "idea by idea", "unique", "research matrix", "two sources"],
              text: "1. Synthesis is like a {{1}}. It’s when you combine your sources to support your argument. · 2. The process of synthesis is more than just {{2}} or even comparing and contrasting multiple sources. It is also more than critiquing sources and not just quoting them either. · 3. You synthesise to make your {{3}} and add to the conversation. · 4. Synthesis requires you to think {{4}} about your research and identify major themes, strengths, weaknesses, and critical gaps in the research. · 5. Notice common {{5}} or subtopics that keep appearing in the articles you're reading. · 6. Synthesis requires you to organize {{6}}, not source by source. · 7. The sources you choose to include, your analysis, and how you organize them in a meaningful way, make your research paper {{7}}. · 8. A {{8}} helps you organize by ideas, while also adding your own analysis alongside your sources. · 9. As a rule of thumb, you should have at least {{9}} for each main idea in order to create a meaningful dialogue.",
              answers: ["puzzle", "summarising", "own point", "critically", "themes", "idea by idea", "unique", "research matrix", "two sources"]
            },
            {
              type: "figure",
              src: A + "d2-synth-puzzle.svg",
              size: "wide",
              alt: "Three puzzle pieces — Source 1, Source 2 and Source 3 — fit together around a centre piece called Your point. Below, crossed-out cards show what synthesis is not: a series of summaries, direct quotes without your voice, simply comparing and contrasting, critiquing one source.",
              caption: "Synthesis is like a puzzle: the sources fit together to support <b>your</b> point."
            },
            {
              type: "sort",
              id: "b2-sort",
              title: "What is synthesizing? What is it NOT?",
              buckets: [{ label: "What is synthesizing?", letter: "✓" }, { label: "What it is NOT", letter: "✗" }],
              items: [
                { text: "Combining elements / ideas from several sources to help you make a point", answer: 0 },
                { text: "Describing how sources ‘talk to’ each other", answer: 0 },
                { text: "Organizing similar ideas together so readers can understand how they overlap", answer: 0 },
                { text: "Helping readers see where you add your own new ideas to existing knowledge", answer: 0 },
                { text: "Critiquing a source", answer: 1 },
                { text: "Simply comparing and contrasting sources", answer: 1 },
                { text: "A series of summaries", answer: 1 },
                { text: "Direct quotes without using your own voice", answer: 1 }
              ]
            },
            {
              type: "talk",
              title: "Explain it to a classmate",
              prompts: ["In 30 seconds, explain the difference between a <b>summary</b> and a <b>synthesis</b>.", "Why do you think you need <b>at least two sources</b> for each main idea?"]
            },
            {
              type: "language",
              groups: [
                { label: "Explain the difference", phrases: ["A summary gives the main ideas of one source, whereas a synthesis …", "Synthesis goes beyond summarising because …", "It’s like a puzzle: …", "The key difference is that …"] }
              ]
            }
          ]
        },
        {
          id: "b3",
          short: "Words",
          minutes: 8,
          grouping: "Pair",
          art: V + "b3.svg",
          title: "Vocabulary",
          goal: "Learn nine words from the reading before you read.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Explain the words to a partner. To check a meaning, use a free English-English dictionary: <a href=\"https://www.oxfordlearnersdictionaries.com/\" target=\"_blank\" rel=\"noopener\">Oxford Learners’ Dictionaries</a> or <a href=\"https://www.ldoceonline.com/\" target=\"_blank\" rel=\"noopener\">Longman Dictionary of Contemporary English Online</a>."
            },
            {
              type: "match",
              id: "b3-match",
              title: "Match the words to simple meanings",
              hint: "Tap a word, then its meaning.",
              left: ["compelling", "quaint", "mental conflict", "innate", "localism", "push back", "refrain", "Anglicised", "curator"],
              right: [
                "very interesting; it holds your attention",
                "attractive but old-fashioned",
                "a struggle in your mind between two wishes",
                "natural; you are born with it",
                "loving and supporting your own local area and its culture",
                "to resist or refuse to accept something",
                "a phrase or idea that is repeated often (like a song chorus)",
                "made more English in style",
                "a person who selects and organises things (art, content) for others"
              ]
            },
            {
              type: "talk",
              title: "Use the words",
              prompts: [
                "Which ideas from your parents’ generation sound <b>quaint</b> to you now?",
                "Do you ever feel a <b>mental conflict</b> between being a citizen of the world and your pride in <b>localism</b>?",
                "Have young people in your country <b>pushed back</b> against a global trend? How?",
                "Who is a <b>curator</b> of content that you follow online?"
              ]
            },
            {
              type: "language",
              groups: [
                { label: "Explaining a word", phrases: ["‘…’ means something like …", "If something is …, it …", "The dictionary says … — so in this text it means …"] },
                { label: "Answering with the word", phrases: ["To me, … sounds a bit quaint now.", "I sometimes feel a mental conflict between … and …", "Young people pushed back by …"] }
              ]
            }
          ]
        },
        {
          id: "b4",
          short: "Gist",
          minutes: 5,
          grouping: "Alone",
          art: V + "b4.svg",
          title: "Reading for gist",
          goal: "Skim the article quickly and find its main message.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Skim the text quickly (about 2 minutes). Don’t read every word." },
            { type: "sources", ids: ["lovelocal"] },
            {
              type: "figure",
              src: A + "d2-fast-slow.svg",
              size: "wide",
              alt: "Two rivers flow together. The fast culture river carries food and fashion icons; the slow culture river carries a temple, a lantern and a scroll for history and tradition. Where they meet, a new colourful river is labelled “new ways to express identity”.",
              caption: "“Fast culture” (food, fashion) + “slow culture” (history, tradition)"
            },
            {
              type: "quiz",
              id: "b4-q",
              title: "Gist question",
              items: [
                {
                  q: "According to the article, how are younger generations in Asia responding to global cultural differences?",
                  options: ["A) By completely adopting Western cultures and abandoning traditional values.", "B) By resisting any form of cultural change to maintain traditional values.", "C) By blending traditional and modern influences to create new cultural expressions.", "D) By isolating themselves from global cultural trends."],
                  answer: "C) By blending traditional and modern influences to create new cultural expressions.",
                  why: "Paragraph C: “Younger audiences are pushing back from monoculture; we’re seeing blending of old and new, local and foreign.”"
                }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Tell your partner <b>one example</b> of blending old and new from the text in one sentence: <i>“One example is …”</i>." }
          ]
        },
        {
          id: "b5",
          short: "Notes",
          minutes: 20,
          grouping: "Alone → Pair",
          art: V + "b5.svg",
          title: "Reading for detail: Note-taking",
          goal: "Read the text again and take notes in the suggested template.",
          blocks: [
            { type: "sources", ids: ["lovelocal"] },
            {
              type: "hotspot",
              src: A + "d2-text-map.svg",
              alt: "A map of the article: paragraphs A to C are about cultural dynamics in Asia; Shift 1 (paragraph D) is the rise of remix culture; Shift 2 (paragraph E) is severing stereotypes; Shift 3 (paragraph F) is cultural co-creation; paragraph G is about brands and the future.",
              title: "Where is each part of the template?",
              hint: "Tap a marker to see which paragraph helps with which part of your notes.",
              spots: [
                { x: 18, y: 38, label: "A–C", title: "Cultural dynamics in Asia", text: "Paragraphs <b>A, B and C</b>: the pace of change, Western influence, fast culture, global vs local identity, the reaction to monoculture, blending old and new.", color: "#3a58a0" },
                { x: 42, y: 38, label: "D", title: "Shift #1: the rise of remix culture", text: "Paragraph <b>D</b>: “made by China”, Chinese streetwear (Sankuanz), Marvel’s Shang Chi and Ms Marvel.", color: "#13887a" },
                { x: 61, y: 38, label: "E", title: "Shift #2: severing stereotypes", text: "Paragraph <b>E</b>: more fluid stories, Singapore’s diversity strategy, the menswear brand Duxton.", color: "#b0512a" },
                { x: 80, y: 38, label: "F", title: "Shift #3: cultural co-creation", text: "Paragraph <b>F</b>: young creators and curators, influencers (Cyber Bunny, Alffy Rev), the Asia Fashion Collective.", color: "#7a4a8c" },
                { x: 50, y: 82, label: "G", title: "Future direction", text: "Paragraph <b>G</b>: brands must come in carefully and empathetically — advocacy over appropriation, reversing the flow.", color: "#b07d12" }
              ]
            },
            {
              type: "squeeze",
              id: "b5-sq",
              title: "Warm up: sentence → note",
              hint: "Turn each sentence from the text into a short note. Use symbols and abbreviations.",
              items: [
                { text: "Ideas, concepts and innovations are spreading at greater speed than elsewhere.", max: 30, model: "ideas/innov. spread ↑ fast in Asia" },
                { text: "Younger audiences are pushing back from monoculture; we’re seeing blending of old and new, local and foreign.", max: 36, model: "youth reject monocult. → old+new mix" },
                { text: "It’s about advocacy over appropriation, championing local voices and communities, not mimicking their culture.", max: 36, model: "brands: advocacy > appropriation" }
              ]
            },
            {
              type: "table",
              id: "b5-notes",
              title: "Cultural dynamics in Asia · my notes",
              columns: ["Part of the template", "My notes"],
              fixed: [
                "<b>Cultural dynamics</b><br>Pace of change is quick",
                "Influence of Western culture is contested: influence goes both ways",
                "Emergence of fast culture",
                "Global vs. local identity",
                "Reaction to monoculture",
                "Blending old and new traditions",
                "<b>Shifts in cultural expression</b><br>Shift #1: The rise of remix culture",
                "Shift #2: Severing stereotypes",
                "Shift #3: Cultural co-creation",
                "<b>Examples</b><br>Chinese streetwear evolution",
                "Influence of Asian superheroes in Western media",
                "Singapore’s diversity strategy",
                "Influencers and digital platforms in Asia",
                "<b>Future direction</b><br>Challenges for Western brands",
                "Advocacy over appropriation",
                "Supporting local voices and identities",
                "Opportunities for cultural celebration and integration",
                "The importance of empathetic brand engagement"
              ]
            },
            {
              type: "talk",
              title: "Compare with a partner",
              prompts: ["Which part of the template was hardest to fill in?", "Explain one example (e.g. Sankuanz or Duxton) to your partner without reading your notes."]
            },
            {
              type: "language",
              groups: [
                { label: "Explaining from your notes", phrases: ["According to Crysell et al. (2023), …", "The article gives the example of …, which shows that …", "This is an example of remix culture / co-creation because …"] }
              ]
            }
          ],
          answers: {
            title: "Possible notes (yours can be different)",
            items: [
              ["Pace of change", "culture changes fast in Asia; ideas & innov. spread ↑ speed than elsewhere"],
              ["Western influence", "worry about ‘Americanisation’ now sounds quaint; East influences West too; W. brands struggle to understand Asian traditions"],
              ["Fast culture", "food & fashion (fast) draw on history & tradition (slow)"],
              ["Global vs local", "mental conflict: citizen of the world vs pride in localism"],
              ["Monoculture", "fear of global monoculture (fusion food, standard home aesthetics) → youth push back"],
              ["Old + new", "blending old/new, local/foreign → fresh ways to express identity; started w/ Korean Wave (hallyu, ‘ppalli ppalli’)"],
              ["Shift #1 remix", "brands mix tradition & modernity; ‘made by China’, ‘China chic’; Sankuanz; Marvel → Shang Chi, Ms Marvel"],
              ["Shift #2 stereotypes", "stories more fluid & experimental; Singapore reassesses ‘authenticity’; Duxton = diverse team"],
              ["Shift #3 co-creation", "youth = creators & curators online; APAC ≈ 53% of social media users; Cyber Bunny, Alffy Rev; Asia Fashion Collective at NY Fashion Week"],
              ["Future direction", "brands: careful & empathetic or stay out; celebrate blending; advocacy > appropriation; champion local voices; reverse the one-way flow"]
            ]
          }
        },
        {
          id: "b6",
          short: "Spot synthesis",
          minutes: 15,
          grouping: "Pair",
          art: V + "b6.svg",
          title: "Building understanding across texts",
          goal: "Compare three student paragraphs and find the one that really synthesises.",
          blocks: [
            { type: "do", n: 1, who: "pair", text: "Read the three examples of student writing. Then match each student to the right description." },
            {
              type: "tabs",
              title: "Three examples of student writing",
              tabs: [
                { label: "Student A", blocks: [{ type: "model", title: "Student A", list: [
                  "Hassi and Storti (2012) define globalization's impact on cultural dynamics either as homogenization (global influences leading to a more uniform world culture), heterogenization(persistence and transformation of local cultures ) or hybridization (where cultures merge elements from both local and global context ) The source also argues that \"globalization impacts on societies and their cultures are rarely addressed\" (Hassi & Storti, 2012).",
                  "Crysell et al (2023) focus on how Asian cultures are actively blending traditional (slow) and modern (fast) influences to forge new cultural identities. This synthesis is seen as a response to the fear of a rising global monoculture, with the assertion that “Culture hits hard everywhere, but the impact and pace of change across Asia is particularly compelling.”",
                  "Van Krieken (2016) discusses globalization's influence, critiquing the predominance of Western cultural products and ideologies, leading to what some perceive as cultural imperialism. However, it also acknowledges the potential for cultural hybridity and the formation of new, transnational cultural identities."
                ] }] },
                { label: "Student B", blocks: [{ type: "model", title: "Student B", text: "Young Asians are actively rebelling cultural homogenisation by remixing elements of their traditional cultures with modern influences. This hybridization of cultures (Hassi & Storti, 2012) is evident in creative approaches to fashion that are heavily influenced by local ideas like Chinese streetwear brand Sankuanz and Asian descent designers such as WooLeeX, Sung Ju, DOKKA vivid, Glenda Garcia, YuunaIchikawa, and Cocotono (Crysell et al., 2023). The mutual influence of cultures is also evident in media and entertainment with Asian identities and narratives becoming mainstream thanks to the Marvel superhero franchise. Social anthropologist Arjun Appadurai (Van Krieken, 2016) proposes that new cultural identities emerge as a result of globalization, rejecting the proposition of Americanization of culture (Hassi & Storti, 2012)." }] },
                { label: "Student C", blocks: [{ type: "model", title: "Student C", text: "In the evolving Asian cultural landscape, traditional values are being remixed with modern influences. This rapid cultural transformation is encapsulated in the statement, \"Culture hits hard everywhere, but the impact and pace of change across Asia is particularly compelling,\" (Crysell et al., 2023) and is being driven by the region's youth. This transformation is fostering a new form of cultural expression that merges historical heritage with contemporary trends, effectively countering the fears of a global monoculture. Brands are advised to navigate this sensitive terrain with care, adhering to the principle of \"advocacy over appropriation (Crysell et al., 2023),\" ensuring they support authentic local narratives rather than diluting them, thereby reversing \"the traditional one-way exchange of the same stories being told by the same people” (Crysell et al., 2023). This approach is crucial for maintaining the integrity and richness of Asian cultures in the face of globalization" }] }
              ]
            },
            {
              type: "match",
              id: "b6-match",
              title: "Match the description to the student",
              left: [
                "1. This student uses quotes from only ONE source and fails to use her own voice to make any arguments.",
                "2. This student quotes from THREE sources but does not show how the sources interact or converse with one another.",
                "3. This student synthesizes from THREE sources, shows how they relate to one another, and makes their own point about cultural identity in Asia."
              ],
              right: ["Student C", "Student A", "Student B"]
            },
            {
              type: "talk",
              title: "Discuss",
              prompts: ["What other problems can you spot with each one of them?", "How can they be improved?"]
            },
            {
              type: "language",
              title: "Useful language: giving feedback on writing",
              groups: [
                { label: "Strengths", phrases: ["This paragraph works well because …", "The writer clearly shows how … and … are connected.", "I like the way the writer uses … to …"] },
                { label: "Problems", phrases: ["The main problem is that …", "It reads like a list of summaries.", "This quote should be paraphrased in the writer’s own words.", "There is no topic sentence, so …"] },
                { label: "Suggestions", phrases: ["It would be stronger if the writer …", "One way to improve it is to …", "The writer could link the sources with ‘similarly’ / ‘in contrast’."] }
              ]
            },
            { type: "do", n: 2, who: "pair", text: "Look again at the paragraph by <b>Student B</b> more closely. Highlight the <b>topic sentence</b> in yellow. Highlight each <b>source</b> in a different colour." },
            {
              type: "passage",
              id: "b6-pass",
              title: "Student B",
              text: "Young Asians are actively rebelling cultural homogenisation by remixing elements of their traditional cultures with modern influences. This hybridization of cultures (Hassi & Storti, 2012) is evident in creative approaches to fashion that are heavily influenced by local ideas like Chinese streetwear brand Sankuanz and Asian descent designers such as WooLeeX, Sung Ju, DOKKA vivid, Glenda Garcia, YuunaIchikawa, and Cocotono (Crysell et al., 2023). The mutual influence of cultures is also evident in media and entertainment with Asian identities and narratives becoming mainstream thanks to the Marvel superhero franchise (Crysell et al., 2023). Social anthropologist Arjun Appadurai (Van Krieken, 2016) proposes that new cultural identities emerge as a result of globalization, rejecting the proposition of Americanization of culture (Hassi & Storti, 2012)."
            },
            {
              type: "quiz",
              id: "b6-q",
              title: "Student B, more closely",
              items: [
                {
                  q: "What’s the main idea of the paragraph?",
                  options: ["Hybridization and examples of how it is playing out in Asia", "The history of Chinese streetwear", "Why Marvel films are popular", "The dangers of Americanization"],
                  answer: "Hybridization and examples of how it is playing out in Asia"
                },
                {
                  q: "How many sources is the writer using to develop the main idea?",
                  options: ["One", "Two", "All three sources"],
                  answer: "All three sources",
                  why: "Hassi & Storti (2012), Crysell et al. (2023) and Van Krieken (2016)."
                }
              ]
            },
            {
              type: "talk",
              title: "Think bigger",
              prompts: ["If this paragraph is part of a longer piece of writing on cultural globalisation, what do you think the other paragraphs would be about?"]
            }
          ],
          answers: {
            title: "Suggested answers",
            items: [
              ["Matching", "1 → Student C · 2 → Student A · 3 → Student B"],
              ["Student A", "Two direct quotes (“globalization impacts on societies and their cultures are rarely addressed” and “Culture hits hard everywhere, but the impact and pace of change across Asia is particularly compelling.”) should have been paraphrased in the writer’s own words."],
              ["Student B", "Your own ideas."],
              ["Student C", "“Culture hits hard everywhere, but the impact and pace of change across Asia is particularly compelling,” and the other quotes are direct quotes that should have been paraphrased in the writer’s own words."],
              ["Other paragraphs", "Your own ideas. Every paragraph needs a theme / main idea, and all the main ideas should help to develop a position."]
            ]
          }
        },
        {
          id: "b7",
          short: "Write a synthesis",
          minutes: 20,
          grouping: "Pair → Alone",
          art: V + "b7.svg",
          title: "Synthesise the notes: Activities 1–3",
          goal: "Use notes from four sources to write synthesis sentences — and a paragraph if there is time.",
          blocks: [
            { type: "key", title: "Notes on ‘homogenization’", points: ["Look at the notes on <b>‘homogenization’</b> taken from the sources we studied this week.", "<b>Source 4</b> (Hynes, 2021) is an extra source on the topic."] },
            {
              type: "tabs",
              title: "The notes from four sources",
              tabs: [
                { label: "Hassi & Storti (2012) · Reading 1", blocks: [{ type: "model", title: "Hassi and Storti (2012)", list: ["increased interconnection between countries and cultures contributes to a more widespread Western Euro-American life style", "local cultures can be shaped by more powerful cultures e.g Americanization, McDonaldisation", "Mainstream fashion, media and entertainment contribute to this", "Globalisation is a destructive force for culture."] }] },
                { label: "Van Krieken (2016) · Listening", blocks: [{ type: "model", title: "Van Krieken (2016)", list: ["“Cultural flows” have been criticised for being relatively one-sided: political and economic inequalities", "The final result of globalisation is not “fair and equal”: cultural imperialism", "Western countries impose ideas, values and modes of cultural expression onto the rest of the world because they can (economic power)", "Cultural products (media and entertainment) are a means to impose values and ideologies", "George Ritzer: McDonaldisation"] }] },
                { label: "Crysell et al. (2023) · Reading 2", blocks: [{ type: "model", title: "Crysell et al., (2023)", list: ["The worry about “Americanisation” of Asian cultures is now old-fashioned: the East influences the West too.", "Fear of a rising global monoculture leads to locals combining “slow” and “fast” culture.", "This results in new expressions of identity, challenging stereotypes and Western dominance."] }] },
                { label: "Hynes (2021) · Extra source", blocks: [{ type: "model", title: "Hynes (2021)", list: ["“cultural imperialism”: political and economic power being used to spread the values of a foreign culture at the expense of the native culture.", "American mass media is quickly evolving and expanding in terms of penetration, coverage and representation", "Growing concern about Americanisation and cultural imperialism intensified by Google, Facebook, Twitter and Amazon,", "Facebook has become one of the most powerful forces in global media"] }] }
              ]
            },
            {
              type: "figure",
              src: A + "d2-summary-synthesis.svg",
              size: "wide",
              alt: "Left: a summary goes source by source — Source 1, then Source 2, then Source 3 in separate boxes. Right: a synthesis goes idea by idea in a research matrix — rows are ideas (homogenisation, one-sided flows, hybridity) and columns are sources, with ticks showing which sources agree or disagree, and a column for your own analysis.",
              caption: "Summary = <b>source by source</b>. Synthesis = <b>idea by idea</b>."
            },
            {
              type: "figure",
              src: A + "d2-synth-lang.svg",
              size: "wide",
              alt: "Language to compare, contrast and synthesise, shown as sentence builders in three columns. Row 1: The majority of / Numerous / Several / Some / A few + studies / authors + found / demonstrated / examined / questioned / suggest. Row 2: Despite x, the / However the / In contrast the / Similarly / Furthermore + author(s)('s) + found / perspective or view is / argument is / findings are. Row 3: The literature / Research / Findings / Recommendations + is/are + consistent or inconsistent / clear or unclear. Row 4: Author takes a + similar / different / complimentary / contrasting / conflicting + view or perspective / argument. Row 5: Author expanded on these studies + suggesting / illustrating / supporting / questioning / rejecting + the notion / the recommendation / the findings / the assumption. Row 6: The relationship between A and B was + further / also / equally + supported by author / questioned by author. Row 7: There is + continued / little / some + debate / agreement / disagreement / controversy; There is + strong / little / significant / conclusive or inconclusive + evidence.",
              caption: "Language to compare, contrast and synthesise (Language Reference · W5 D2. 5C). Build a sentence: one piece from each column."
            },
            {
              type: "language",
              title: "Linking sources",
              groups: [
                { label: "Sources AGREE", phrases: ["Similarly, …", "Likewise, …", "Both Hassi and Storti (2012) and Van Krieken (2016) argue that …", "This view is consistent with …", "Furthermore, … (2021) found that …", "In line with …, …"] },
                { label: "Sources DISAGREE", phrases: ["However, Crysell et al. (2023) take a different view: …", "In contrast, …", "Whereas … argue that …, … suggest that …", "While some authors see …, others …", "Despite …, the authors’ findings are …"] },
                { label: "Integral citation", phrases: ["Hassi and Storti (2012) argue that …", "According to Hynes (2021), …", "As Van Krieken (2016) explains, …"] },
                { label: "Non-integral citation", phrases: ["… (Hassi & Storti, 2012).", "… (Crysell et al., 2023).", "… (Hassi & Storti, 2012; Van Krieken, 2016)."] }
              ]
            },
            {
              type: "detect",
              id: "b7-dt1",
              label: "Synthesis studio",
              title: "Activity 1 · Two or three sources that AGREE",
              hint: "Write a sentence synthesizing these ideas. Don’t forget to paraphrase, use accurate in-text citation (integral or non-integral) and the correct transition words.",
              checks: [
                { label: "Two sources cited", any: ["/(2012|2016|2021|2023)[\\s\\S]*(2012|2016|2021|2023)/"], color: "#3a58a0" },
                { label: "Agreement word", any: ["similarly", "likewise", "both", "also", "consistent", "in line with", "furthermore", "in addition", "echo", "agree"], color: "#2f7d6b" },
                { label: "Topic word", any: ["homogeni", "americani", "imperialism", "western", "uniform", "monoculture"], color: "#8a4f9e" }
              ],
              items: [
                {
                  task: "My synthesis sentence (sources agree)",
                  rows: 4,
                  placeholder: "Both … and … argue that …",
                  model: "<i>One possible sentence:</i> Both Hassi and Storti (2012) and Van Krieken (2016) suggest that powerful Western countries use media and entertainment to spread their values, and Hynes (2021) similarly notes that American mass media keeps expanding its reach."
                }
              ]
            },
            {
              type: "detect",
              id: "b7-dt2",
              label: "Synthesis studio",
              title: "Activity 2 · Two or three sources that DISAGREE",
              hint: "Write a sentence synthesizing these ideas. Don’t forget to paraphrase, use accurate in-text citation (integral or non-integral) and the correct transition words.",
              checks: [
                { label: "Two sources cited", any: ["/(2012|2016|2021|2023)[\\s\\S]*(2012|2016|2021|2023)/"], color: "#3a58a0" },
                { label: "Contrast word", any: ["however", "in contrast", "whereas", "while", "although", "on the other hand", "despite", "different view", "conversely"], color: "#c4562f" },
                { label: "Topic word", any: ["homogeni", "americani", "imperialism", "western", "monoculture", "hybrid", "identity", "east"], color: "#8a4f9e" }
              ],
              items: [
                {
                  task: "My synthesis sentence (sources disagree)",
                  rows: 4,
                  placeholder: "While … argue that …, … suggest that …",
                  model: "<i>One possible sentence:</i> While Hassi and Storti (2012) see globalisation as a destructive force that spreads a Western lifestyle, Crysell et al. (2023) argue that the fear of Americanisation in Asia is now outdated, as the East also influences the West."
                }
              ]
            },
            { type: "do", n: 1, who: "pair", text: "Read your sentences to your partner. Partner: check the citations (name + year), the transition word and the paraphrase. Is any phrase copied from the notes?" },
            { type: "tip", text: "<b>Activity 3 is for when there is enough time.</b>" },
            {
              type: "detect",
              id: "b7-dt3",
              label: "Synthesis studio",
              title: "Activity 3 · Draft a paragraph (if there is time)",
              hint: "Draft a paragraph synthesizing agreement and disagreement. Try to address all sources (if possible and relevant). Use the table of useful expressions above.",
              checks: [
                { label: "Hassi & Storti", any: ["hassi", "storti"], color: "#3a58a0" },
                { label: "Van Krieken", any: ["van krieken", "krieken"], color: "#2f7d6b" },
                { label: "Crysell et al.", any: ["crysell"], color: "#c4562f" },
                { label: "Hynes", any: ["hynes"], color: "#b07d12" },
                { label: "Agree + contrast", any: ["/(similarly|likewise|both|consistent|in line with)[\\s\\S]*(however|in contrast|whereas|while|although)|(however|in contrast|whereas|while|although)[\\s\\S]*(similarly|likewise|both|consistent|in line with)/"], color: "#8a4f9e" }
              ],
              items: [{ task: "My synthesis paragraph", rows: 9, placeholder: "Topic sentence: …" }]
            }
          ]
        }
      ]
    },

    /* ════════════════════════ 6A INTEGRATED WRITING WORKSHOP (1) ════════════════════════ */
    {
      id: "workshop",
      number: "03",
      code: "6A",
      minutes: 30,
      tone: "clay",
      art: A + "s-d2-workshop.svg",
      title: "Integrated writing workshop (1)",
      subtitle: "Prepare to write",
      outcome: "You have a further understanding of how to plan and develop an argument in an essay, and you can extract relevant ideas from sources to develop an argument.",
      activities: [
        {
          id: "c1",
          short: "The question",
          minutes: 10,
          grouping: "Pair → Class",
          art: V + "c1.svg",
          title: "Analyse the Question",
          goal: "Find the content words, the limiting words and the task in the essay question.",
          blocks: [
            {
              type: "key",
              title: "This week’s essay question",
              points: [
                "The input texts we have looked at this week (<b>Hassi & Storti, 2012; Crysell et al., 2023; Van Krieken, 2016</b>) could be used to answer this essay question.",
                "Write <b>450–600 words</b>."
              ]
            },
            { type: "question" },
            {
              type: "figure",
              src: A + "d2-question.svg",
              size: "wide",
              alt: "The essay question “Is cultural globalisation having a negative impact on culture?” with colour coding. “Is” is marked as the task word (evaluate how much). “cultural globalisation” and “impact on culture” are marked as content words — the main topic areas for your reading. “negative” is marked as a limiting word that narrows the scope of the topic.",
              caption: "Content words are the main topic areas for your reading. Limiting words narrow the scope of the topic."
            },
            { type: "do", n: 1, who: "pair", text: "Answer these questions about the essay question with a partner." },
            {
              type: "quiz",
              id: "c1-q",
              title: "a) and b)",
              items: [
                {
                  q: "a) What are the key <i>content words</i> in this question? (These words tell you where you should focus your reading.)",
                  options: ["Cultural globalisation’s impacts on culture", "negative", "Is … having", "450–600 words"],
                  answer: "Cultural globalisation’s impacts on culture"
                },
                {
                  q: "b) Are there any <i>limiting words</i>? (These words narrow the focus of your response.)",
                  options: ["Yes — focus on negative impacts", "No, there are no limiting words", "Yes — focus on American culture only", "Yes — focus on Asia only"],
                  answer: "Yes — focus on negative impacts"
                }
              ]
            },
            {
              type: "fields",
              title: "c) – e)",
              fields: [
                { id: "c1-c", label: "c) What is the question asking you to do? Which words indicate this?", rows: 3 },
                { id: "c1-d", label: "d) What rhetorical functions should be included in the answer?", rows: 3, placeholder: "e.g. cause and effect, …" },
                { id: "c1-e", label: "e) What are the possible ways to answer the question?", rows: 3 }
              ]
            },
            {
              type: "figure",
              src: A + "d2-positions.svg",
              size: "wide",
              alt: "Three possible positions on a line. ‘For’: cultural globalisation IS having a negative impact on culture. ‘Against’: it is NOT ONLY having a negative impact (it’s not completely negative). ‘Strongly against’: it is having a POSITIVE impact on culture.",
              caption: "Three possible ways to answer the question."
            },
            {
              type: "sticky",
              title: "Word count",
              text: "Write between <b>450 and 600 words</b>. It is OK to write only 450 words — don’t write more just for the sake of it. You only lose marks for writing <b>below 450</b>. Answer the question fully and succinctly.",
              color: "yellow"
            },
            {
              type: "language",
              title: "Useful language: analysing a question",
              groups: [
                { label: "Content and limits", phrases: ["The key content words are …", "The question limits the focus to …", "So I shouldn’t write about …"] },
                { label: "The task", phrases: ["The question is asking me to evaluate …", "The verb ‘Is’ means I need to decide how much …", "I need to give evidence and examples to support …"] }
              ]
            }
          ],
          answers: {
            title: "Answers",
            items: [
              ["a)", "Cultural globalisation’s impacts on culture"],
              ["b)", "Focus on negative impacts"],
              ["c)", "Identify impacts of globalisation on culture · Argue whether these impacts are overwhelmingly negative · Evidence/examples should be given to support argument · In this question, the verb ‘Is’ implies evaluating the degree of something, i.e. how much of a negative impact is it having?"],
              ["d)", "Identify the <b>cause-effect</b> relationship between globalisation and culture · <b>Arguing/persuading</b> whether these impacts are overwhelmingly negative · <b>Providing support/working with different voices</b> · <b>Evaluating</b> how much of a negative impact globalisation is having."],
              ["e)", "Cultural globalisation <b>is</b> having a negative impact on culture (‘for’) · Cultural globalisation <b>is not only</b> having a negative impact on culture — it’s not completely negative (‘against’) · Cultural globalisation is having a <b>positive</b> impact on culture (‘strongly against’)"]
            ]
          }
        },
        {
          id: "c2",
          short: "Discuss",
          minutes: 8,
          grouping: "Groups of 3–4",
          art: V + "c2.svg",
          title: "Answering the question",
          goal: "Discuss the essay question in a group, using your notes.",
          blocks: [
            {
              type: "key",
              title: "Tomorrow: a group essay",
              points: [
                "Tomorrow you are going to work with a group (3 or 4 people) to write an essay in response to this question: <i>Is cultural globalisation having a negative impact on culture?</i>",
                "Today’s discussion group is <b>not</b> your group for the joint writing task. Those groups are set up later in the week."
              ]
            },
            { type: "do", n: 1, who: "group", text: "Discuss the question. You can look back at your notes when you discuss. First, each person moves the slider to show their position and explains it." },
            {
              type: "scale",
              id: "c2-scale",
              title: "Where do you stand right now?",
              statement: "Cultural globalisation is having a negative impact on culture.",
              ends: ["Strongly disagree", "Strongly agree"],
              mid: "Partly"
            },
            {
              type: "talk",
              title: "Discuss",
              prompts: [
                "Is cultural globalisation having a negative impact on culture? Why / why not?",
                "Which source supports your view best: Hassi & Storti (2012), Crysell et al. (2023) or Van Krieken (2016)?",
                "What would someone with the opposite view say? How would you answer them?"
              ]
            },
            {
              type: "language",
              title: "Useful language: a group discussion",
              groups: [
                { label: "Give your view", phrases: ["From my point of view, …", "I would argue that …", "I’m in two minds about this: on the one hand …, on the other hand …"] },
                { label: "Bring in a source", phrases: ["According to Van Krieken (2016), the critics say …", "Crysell et al. (2023) show that …", "This is supported by Hassi and Storti (2012), who …"] },
                { label: "Respond", phrases: ["That’s a good point, but …", "Building on what … said, …", "So, if I understand you correctly, you’re saying that …?"] },
                { label: "Keep it moving", phrases: ["Shall we hear from …?", "Can we look at the other side?", "Let’s sum up where we agree."] }
              ]
            }
          ]
        },
        {
          id: "c3",
          short: "Listen again",
          minutes: 10,
          grouping: "Group → Alone",
          art: V + "c3.svg",
          title: "Listen again for note-taking in relation to the question",
          goal: "Listen to the lecture again and take notes that help you answer the essay question.",
          blocks: [
            { type: "do", n: 1, who: "group", text: "Before you listen, think about how you will organise your notes. From your memory, discuss these questions briefly with your group." },
            {
              type: "talk",
              title: "Discuss briefly",
              prompts: ["What are likely to be the main ideas that are relevant to our question?", "What are you going to focus on when you listen this time?"]
            },
            { type: "do", n: 2, who: "alone", text: "Listen again to Van Krieken (2016) and take notes as you listen. Your notes should focus on how the listening will help you to answer the question: <i>Is cultural globalisation having a negative impact on culture?</i> (450–600 words)" },
            Object.assign({}, LECTURE, { clip: "the whole lecture", transcripts: [["w5listen", "Transcript (open after listening)"]] }),
            {
              type: "table",
              id: "c3-notes",
              title: "My notes for the question",
              columns: ["", "Negative impacts", "Not (only) negative / positive impacts"],
              fixed: ["Ideas", "Examples / evidence", "Whose voice? (critics, Ritzer, Appadurai, the lecturer)"]
            },
            {
              type: "fields",
              title: "Use your notes to help you plan your response for tomorrow",
              fields: [{ id: "c3-plan", label: "Two ideas from the lecture I will use, and why", rows: 4, placeholder: "1. … because … 2. …" }]
            }
          ]
        },
        {
          id: "c4",
          short: "Homework",
          minutes: 2,
          grouping: "Homework",
          art: V + "c4.svg",
          title: "Homework",
          goal: "Before tomorrow, consolidate your notes and decide your position.",
          blocks: [
            { type: "do", n: 1, who: "alone", text: "Before tomorrow’s lesson, spend some time going through your notes and finding evidence to answer the question. You can start now if there is time." },
            { type: "sources", ids: ["threeh", "lovelocal", "w5listen"] },
            {
              type: "table",
              id: "c4-tab",
              title: "1 · Consolidate your notes in response to the question",
              columns: ["Source", "Reasons why cultural globalisation IS having a negative impact", "Reasons why cultural globalisation IS NOT having a clearly negative impact", "Reasons why cultural globalisation is having a POSITIVE impact"],
              fixed: ["(Hassi & Storti, 2012)", "(Crysell et al., 2023)", "(Van Krieken, 2016)"]
            },
            {
              type: "choose",
              id: "c4-pos",
              title: "2 · Based on these notes, what is your position? (Do you agree or disagree?)",
              options: [
                "Cultural globalisation is having a negative impact on culture (“for”)",
                "Cultural globalisation is having varied impacts on culture, but they are not all negative (“against”)",
                "Cultural globalisation is having a positive impact on culture (“strongly against”)"
              ]
            },
            { type: "fields", fields: [{ id: "c4-why", label: "My main reason for this position", rows: 2, placeholder: "I chose this position because …" }] },
            { type: "tip", text: "<b>Remember:</b> you do not need to start writing any paragraphs yet. You will work with a group and share your ideas and the workload together." },
            { type: "do", n: 2, who: "alone", text: "<b>Practise saying it.</b> Record a 30-second voice note: your position + your two best reasons + one source. You will say it to your group tomorrow." }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["globalisation", "the process of integrating and interacting among people, companies, and governments worldwide", "Globalisation has a huge impact on culture."],
    ["cultural imperialism", "when a small number of powerful (mostly Western) groups impose their ideas, values and culture on the rest of the world", "Critics say the result of globalisation is cultural imperialism."],
    ["hegemony", "the dominance of one group or country over others", "American cultural hegemony means American beliefs and values dominate."],
    ["homogenisation", "different cultures beginning to look similar", "Fast-food chains can lead to cultural homogenisation."],
    ["hybridity", "the blending of elements from different cultures to create something new and unique", "K-pop is often given as an example of cultural hybridity."],
    ["heterogeneity", "diversity in content or character", "Appadurai sees greater cultural heterogeneity in some respects."],
    ["proponents", "supporters of an idea or theory", "Proponents of this theory argue that …"],
    ["Cornell notes", "a note-taking method with a Review column, a Note-taking column and a Summary", "Write your questions in the Review column after the first listening."],
    ["synthesis", "combining ideas from several sources, idea by idea, to support your own point", "A synthesis shows how sources ‘talk to’ each other."],
    ["research matrix", "a table of ideas and sources that helps you organise idea by idea", "Use a research matrix to see where sources agree."],
    ["monoculture", "one culture that is the same everywhere", "Young people are pushing back from monoculture."],
    ["appropriation", "taking something from another culture without respect or understanding", "It’s about advocacy over appropriation."],
    ["limiting words", "words in an essay question that narrow the focus of your answer", "‘Negative’ is the limiting word in this question."]
  ]
};
})();
