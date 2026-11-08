/* DEC10 · Week 5 · Day 5 — LRW Assessment day.
   Teacher's Book: W5 D5. 14A LRW Assessment — "Follow instructions from the DEC team." (no lesson content in the TB).
   This page has NO test content. It only explains the assessment (from what the Week 3–5 TB say about the LRW and the
   Integrated Writing Assessment), helps students get ready and calm, reviews strategies, and gives a reflection after the test.
   Practice items reuse Week 5 course texts and Week 5 TB questions only. Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w5d5",
  week: 5,
  day: 5,
  title: "LRW Assessment",
  duration: "Assessment day · about 60 minutes before and after the test",
  question: "How can I show what I really know — calmly, clearly and on time?",
  questionKind: "Focus question",
  questionLabel: "Today’s focus · LRW Assessment 1",
  journey: "Today is your first Listening, Reading and Writing (LRW) Assessment. Find out what it checks, tick your checklist, warm up your voice with a partner, and refresh your best listening, reading and writing strategies. Learn the words in exam instructions. Then do the test — and afterwards, reflect on how you worked.",
  image: "dec10/assets/week5/hero-d10w5d5.svg",
  imageAlt: "Illustration: a calm, sunny exam desk. Headphones with gentle sound waves, an open reading booklet with a magnifying glass, and a writing page with a pen and a tick sit side by side. A clock, a glass of water and a small plant are on the desk, and a student breathes slowly with a soft glowing circle behind her.",
  finish: {"title":"Week 6","text":"Green chemistry — and the final Seminar presentations"},
  goalShort: "LRW Assessment 1",
  sections: [
    {
      id: "lrw",
      number: "01",
      code: "14A",
      minutes: 60,
      tone: "blue",
      art: "dec10/assets/week5/s-d5-lrw.svg",
      title: "LRW Assessment",
      subtitle: "Get ready, stay calm, use your strategies — then reflect",
      outcome: "You know what the LRW Assessment checks, you are ready on the day, you use your listening, reading and writing strategies, and you reflect on how you worked.",
      activities: [
        {
          id: "a1",
          short: "What is it?",
          minutes: 8,
          grouping: "Alone → pair",
          art: "dec10/assets/week5/v/v-d10w5d5-a1.svg",
          title: "What is the LRW Assessment?",
          goal: "Understand what the assessment checks, so there are no surprises.",
          blocks: [
            {
              type: "key",
              tone: "warn",
              title: "Your teacher and the DEC team give the official instructions",
              points: [
                "This page does <b>not</b> have the test. It helps you get ready, stay calm and reflect.",
                "The <b>DEC team</b> decides the time, the room, the order of the parts and the rules. Listen carefully and follow them.",
                "Not sure about something? <b>Ask your teacher before the test starts.</b>"
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week5/d5-lrw-map.svg",
              alt: "A map of the LRW Assessment with three connected zones. Zone 1, Listen: headphones and a lecture. Zone 2, Read: an open text. Both send arrows of notes into Zone 3, Write: an essay page with citations. A banner says: your notes from the sources become your evidence.",
              title: "Three skills, one assessment",
              hint: "Tap each number to see what the part checks.",
              size: "wide",
              spots: [
                {"x":17,"y":46,"label":"1","title":"Listening","text":"You listen to academic input (like this week’s lecture) and take notes. Questions can ask you to <b>complete a sentence</b>, <b>answer in a few words</b> (e.g. <i>no more than 3 words</i>) or <b>choose the best answer</b>.","color":"#2b776e"},
                {"x":50,"y":46,"label":"2","title":"Reading","text":"You read academic texts and find main ideas and details. Look for <b>paraphrases</b>: the question often uses different words from the text.","color":"#3a58a0"},
                {"x":83,"y":46,"label":"3","title":"Writing","text":"You write an <b>argument essay</b> that answers a question and uses the <b>sources</b> as evidence — the skills from the Integrated Writing workshops. In Week 5 the practice question asked for <b>450–600 words</b>.","color":"#c4562f"},
                {"x":50,"y":86,"label":"4","title":"The big idea","text":"Listening and reading are <b>input</b>. Your notes become the <b>evidence</b> in your writing. Good notes = an easier essay.","color":"#7a4a8c"}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week5/d5-rubric.svg",
              size: "wide",
              alt: "Four rubric criteria for the Integrated Writing Assessment as four tiles: Argumentation (a target), Use of Sources (two books with a link), Connection of Ideas (chain links), Vocabulary and Grammar (an Aa letter tile).",
              caption: "The four criteria of the Integrated Writing Assessment rubric (Week 5, AI for feedback lesson)."
            },
            {
              type: "bet",
              id: "a1-bet",
              title: "True or false? Bet on what you know",
              coins: 10,
              items: [
                {
                  q: "The writing question in the Week 5 workshops asked for 450–600 words. What happens if you write only 450 words?",
                  options: ["That is fine — only writing below 450 words is a problem","You lose marks — you must write 600","It does not matter how many words you write"],
                  answer: "That is fine — only writing below 450 words is a problem",
                  why: "The Week 5 Teacher’s Book says: it is okay to write only 450 words. Don’t write more just for the sake of it. Answer the question fully and clearly."
                },
                {
                  q: "The instruction says <i>no more than 3 words</i>. Your answer is “the advertising and the entertainment”. Is it OK?",
                  options: ["Yes — the meaning is right","No — it has 5 words, so it is over the limit"],
                  answer: "No — it has 5 words, so it is over the limit",
                  why: "Count every word. <b>advertising and entertainment</b> (3 words) is inside the limit."
                },
                {
                  q: "In your essay, the ideas from the listening and the readings must be…",
                  options: ["copied exactly, without names","paraphrased and cited with author and year","left out — only your opinion counts"],
                  answer: "paraphrased and cited with author and year",
                  why: "<b>Use of Sources</b> is one of the four criteria: e.g. <i>Van Krieken (2016) argues that …</i> or <i>(Hassi &amp; Storti, 2012)</i>."
                },
                {
                  q: "Which of these is NOT one of the four rubric criteria?",
                  options: ["Argumentation","Use of Sources","Handwriting","Connection of Ideas"],
                  answer: "Handwriting",
                  why: "The four criteria are Argumentation, Use of Sources, Connection of Ideas, and Vocabulary and Grammar."
                }
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Tell your partner in <b>30 seconds</b>: what are the three parts, and what links them?"},
            {
              type: "language",
              title: "Explain the assessment to a classmate",
              groups: [
                {"label":"Describe the parts","phrases":["The assessment is made up of three parts: …","First, we … Then we … Finally, we …","The writing part asks us to …"]},
                {"label":"Link them","phrases":["The notes we take in the listening feed into …","We have to draw on the sources to …","This is linked to what we practised in …"]},
                {"label":"Check you understand","phrases":["Do you know if we can …?","Am I right in thinking that …?","I’m not sure about … — let’s ask the teacher."]}
              ]
            },
            {"type":"tip","text":"This is <b>LRW Assessment 1</b>. There is a second LRW Assessment in Week 9 — so today is also great practice."}
          ]
        },
        {
          id: "a2",
          short: "Checklist",
          minutes: 5,
          grouping: "Alone",
          art: "dec10/assets/week5/v/v-d10w5d5-a2.svg",
          title: "Before the test: my checklist",
          goal: "Check you have everything — then slow down your breathing.",
          blocks: [
            {
              type: "checklist",
              id: "a2-check",
              title: "Tick each one",
              meter: ["ready","Ready — good luck!"],
              items: [
                "I know the time and the room (or the online link).",
                "My laptop is charged, and I have my charger.",
                "My headphones work with my laptop. I tested the sound.",
                "I can log in. I checked my password today.",
                "I have my student card.",
                "I have water, and I will arrive a little early.",
                "I have heard or read the DEC team’s instructions.",
                "I know my plan: analyse the question → plan → write → cite → check."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week5/d5-breathe.svg",
              size: "small",
              alt: "Box breathing: a rounded square path with a glowing dot moving around it. The four sides say: breathe in 4, hold 4, breathe out 4, hold 4.",
              caption: "<b>Box breathing.</b> Breathe in for 4 · hold for 4 · breathe out for 4 · hold for 4. Do it three times."
            },
            {
              type: "pairs",
              title: "Change the voice in your head",
              items: [
                {"from":"[[I’m going to fail.]]","to":"[[I have practised this.]] One question at a time.","tag":"Calm self-talk"},
                {"from":"[[I didn’t understand that sentence!]]","to":"[[That’s OK.]] I’ll keep listening for the next key word.","tag":"Keep going"},
                {"from":"[[Everyone is writing faster than me.]]","to":"[[I’ll follow my own plan]] and check at the end.","tag":"Your plan"}
              ]
            },
            {"type":"tip","text":"Feeling nervous is <b>normal</b>. It means you care. A little stress can even help you focus."}
          ]
        },
        {
          id: "a3",
          short: "Warm up",
          minutes: 8,
          grouping: "Pairs",
          art: "dec10/assets/week5/v/v-d10w5d5-a3.svg",
          title: "Speaking warm-up: calm your nerves",
          goal: "Talk with a partner to relax, wake up your English and remember this week’s ideas.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Spin the wheel. Talk for the time it shows. Your partner listens and asks <b>one follow-up question</b>. Then swap."},
            {
              type: "spinner",
              id: "a3-spin",
              title: "Easy talk — no wrong answers",
              text: "Smile, slow down and use one phrase from the language bank each turn.",
              reels: [
                {
                  label: "Talk about",
                  items: [
                    "A food from another country that you love",
                    "A global brand you used this morning",
                    "A tradition from home that you want to keep",
                    "Something you do to relax before a big day",
                    "The most useful strategy you learned in DEC10",
                    "One idea from this week’s texts that surprised you",
                    "A song, film or show that mixes two cultures",
                    "How you feel about today — honestly"
                  ]
                },
                {"label":"Time","items":["30 seconds","45 seconds","1 minute"]}
              ]
            },
            {
              type: "language",
              title: "Useful language for a relaxed conversation",
              groups: [
                {"label":"Start","phrases":["Well, one thing that comes to mind is …","Let me think … I’d say …","Actually, that’s an easy one for me: …"]},
                {"label":"Give a reason or example","phrases":["The main reason is that …","For instance, …","What I like about it is that …"]},
                {"label":"Buy time","phrases":["That’s a good question.","How can I put this?","What I mean is …"]},
                {"label":"Follow-up questions","phrases":["Why do you think that is?","Could you give me an example?","How did that make you feel?"]},
                {"label":"Encourage your partner","phrases":["That’s a great point.","Me too! I feel the same.","You’ll be fine — you’ve practised a lot."]}
              ]
            },
            {
              type: "talk",
              title: "Last minute: share one strategy",
              prompts: [
                "Which <b>one</b> strategy will you use first in the test today?",
                "What will you do if you miss an answer in the listening?"
              ]
            }
          ]
        },
        {
          id: "a4",
          short: "Listening",
          minutes: 8,
          grouping: "Alone → pair",
          art: "dec10/assets/week5/v/v-d10w5d5-a4.svg",
          title: "Listening strategies: predict, keywords, word limits",
          goal: "Remember how to listen and take notes like a test-taker.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week5/d5-listen-cycle.svg",
              size: "wide",
              alt: "The listening cycle in four steps with icons. 1 Predict: read the questions and guess the kind of answer. 2 Keywords: underline key words and think of synonyms. 3 Listen and note: write short notes with symbols. 4 Check: count words and check spelling.",
              caption: "Before, during and after you listen."
            },
            {
              type: "flip",
              title: "Four listening tactics",
              hint: "Say what you remember about each tactic. Then turn the card.",
              items: [
                {"front":"Predict","back":"Read the questions first. Ask: is the answer a <b>number, a name, a noun or a reason</b>? Then you know what to listen for.","tag":"Before"},
                {"front":"Keywords + synonyms","back":"Underline the key words. The speaker often says them in <b>other words</b>: <i>impose</i> ↔ <i>force onto</i>; <i>dominance</i> ↔ <i>hegemony</i>.","tag":"Before"},
                {"front":"Signposts","back":"Listen for <i>However, …</i> · <i>Critics argue that …</i> · <i>In other words, …</i> — the answer often comes next.","tag":"During"},
                {"front":"Word limits","back":"<b>No more than 3 words</b> means 1, 2 or 3 words. Over the limit = zero. Check spelling too.","tag":"After"}
              ]
            },
            {
              type: "quiz",
              id: "a4-q",
              title: "Within the limit? (questions from this week’s lecture)",
              items: [
                {
                  q: "<i>No more than 3 words.</i> What are 2 examples of “the world’s cultural media”? Answer: <b>advertising and entertainment</b>",
                  options: ["OK — inside the limit","Over the limit"],
                  answer: "OK — inside the limit",
                  why: "advertising (1) and (2) entertainment (3) = 3 words."
                },
                {
                  q: "<i>No more than 3 words.</i> What does Ritzer say McDonald’s bureaucratic approach prioritises over creativity and imagination? Answer: <b>it favours efficiency and control</b>",
                  options: ["OK — inside the limit","Over the limit"],
                  answer: "Over the limit",
                  why: "5 words. Cut it to <b>efficiency and control</b>."
                },
                {
                  q: "<i>No more than 3 words.</i> Same question. Answer: <b>control and efficiency</b>",
                  options: ["OK — inside the limit","Over the limit"],
                  answer: "OK — inside the limit",
                  why: "3 words, and the Teacher’s Book accepts both orders."
                }
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Explain to your partner how you take notes while you listen. Show one symbol or abbreviation you use (→, ↑, b/c, e.g.)."},
            {
              type: "language",
              title: "Talk about your listening strategy",
              groups: [
                {"label":"Explain","phrases":["Before I listen, I usually …","I find it helpful to …","I use symbols like … to save time."]},
                {"label":"Compare","phrases":["Unlike you, I prefer to …","That’s similar to what I do.","I’ve never tried that — I might give it a go."]}
              ]
            }
          ]
        },
        {
          id: "a5",
          short: "Reading",
          minutes: 8,
          grouping: "Alone → pair",
          art: "dec10/assets/week5/v/v-d10w5d5-a5.svg",
          title: "Reading strategies: skim, scan, spot the paraphrase",
          goal: "Read fast for the main idea, find details quickly, and recognise the same idea in different words.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week5/d5-skim-scan.svg",
              size: "wide",
              alt: "Two reading styles side by side. Skim: a swift wave-like eye path across the title, headings and first sentences, to get the main idea. Scan: a magnifying glass jumping straight to names, years and numbers, to find details.",
              caption: "<b>Skim</b> for the main idea. <b>Scan</b> for a detail. Then read that part carefully."
            },
            {
              type: "match",
              id: "a5-match",
              title: "Spot the paraphrase (Hassi & Storti, 2012)",
              hint: "Tap a phrase from the text, then the paraphrase that means the same.",
              left: [
                "the interaction between globalization and culture is an under-researched area",
                "opinions on the topic are contentious",
                "local cultures can be shaped by other more powerful cultures",
                "mixing different cultural elements to create something new",
                "cultures are dynamic, not static"
              ],
              right: [
                "few studies have looked at how globalisation and culture affect each other",
                "people strongly disagree about this issue",
                "stronger cultures can change smaller, local ones",
                "blending parts of different cultures into a new one",
                "cultures keep changing over time"
              ]
            },
            {
              type: "key",
              title: "How a paraphrase hides in a question",
              compare: [
                {"label":"Synonyms","text":"different words, same meaning","eg":"contentious → people strongly disagree"},
                {"label":"Word form","text":"a verb becomes a noun (or the opposite)","eg":"cultures interact → the interaction between cultures"},
                {"label":"Structure","text":"the sentence is built in another way","eg":"powerful cultures shape local ones → local cultures are shaped by powerful ones"}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Choose one pair from the game. Explain to your partner <b>how</b> the paraphrase changes the words (synonyms, word form or structure)."},
            {"type":"sources","ids":["threeh"]}
          ]
        },
        {
          id: "a6",
          short: "Writing",
          minutes: 10,
          grouping: "Alone → pair",
          art: "dec10/assets/week5/v/v-d10w5d5-a6.svg",
          title: "Integrated writing strategies: analyse, plan, synthesise, cite, check",
          goal: "Remember the steps that turn your notes into a clear argument essay.",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week5/d5-question.svg",
              alt: "The Week 5 practice question, “Is cultural globalisation having a negative impact on culture?”, on a card with coloured underlines and four numbered markers.",
              title: "Analyse the question (the Week 5 practice question)",
              hint: "Tap each marker. Do the same five steps with the question in the test.",
              size: "wide",
              spots: [
                {"x":24,"y":38,"label":"a","title":"Key content words","text":"<b>cultural globalisation</b> · <b>culture</b>. They tell you where to focus your reading and notes.","color":"#2b776e"},
                {"x":56,"y":38,"label":"b","title":"Limiting words","text":"<b>negative impact</b>. They narrow your answer: focus on whether the impacts are negative.","color":"#c4562f"},
                {"x":11,"y":38,"label":"c","title":"What is the question asking?","text":"<b>Is …?</b> asks you to <b>evaluate how much</b>: argue whether the impacts are (mostly) negative, with evidence.","color":"#3a58a0"},
                {"x":50,"y":80,"label":"d","title":"Possible positions","text":"<b>For:</b> it is having a negative impact. <b>Against:</b> it is not only negative. <b>Strongly against:</b> it is having a positive impact.","color":"#7a4a8c"}
              ]
            },
            {
              type: "order",
              id: "a6-order",
              title: "Put the writing steps in order",
              items: [
                "Analyse the question: content words, limiting words, what it asks",
                "Decide your position (your thesis)",
                "Plan: one main point per body paragraph + evidence from the sources",
                "Write: synthesise the sources — idea by idea, not source by source",
                "Cite every idea from a source (author, year)",
                "Check: word count, position clear, citations, grammar"
              ],
              ends: ["First","Last"],
              why: "Plan before you write. Synthesis means you organise <b>idea by idea</b> and use at least two sources for a main idea where you can. Leave a few minutes at the end to check."
            },
            {
              type: "cloze",
              id: "a6-cl",
              title: "Synthesise and cite (this week’s sources)",
              options: ["Both","similarly","However","explains","according to"],
              text: "{{1}} Hassi and Storti (2012) and Van Krieken (2016) describe a more homogenised world. Van Krieken (2016) {{2}} that critics see Western nations as imposing their values on other cultures. {{3}}, Crysell et al. (2023) see the idea of “Americanisation” as out of date in Asia. Young people there, {{4}} Crysell et al. (2023), blend old and new culture, and Hassi and Storti (2012) {{5}} see hybridization as a mixing of global and local ideas.",
              answers: ["Both","explains","However","according to","similarly"]
            },
            {
              type: "language",
              title: "Language bank: integrated writing",
              groups: [
                {"label":"State your position","phrases":["This essay argues that …","This essay will challenge the belief that …","While …, this essay contends that …"]},
                {"label":"Synthesise","phrases":["Both X (2012) and Y (2016) suggest that …","Similarly, …","In contrast, Z (2023) argues that …","This view is supported by …"]},
                {"label":"Report and cite","phrases":["According to X (2016), …","X (2012) points out / claims / argues that …","… (X & Y, 2012; Z, 2016)."]},
                {"label":"Hedge","phrases":["This may / might / could lead to …","It seems that …","… tends to …","It is likely that …"]},
                {"label":"Counterargument & refutation","phrases":["On the other hand, some argue that …","However, this view overlooks …","Although …, …"]}
              ]
            },
            {
              type: "checklist",
              id: "a6-check",
              title: "My final check (save time for this!)",
              items: [
                "My position is clear in the introduction and the conclusion.",
                "Each body paragraph has one main point and a topic sentence.",
                "I used ideas from the sources — paraphrased, not copied.",
                "Every idea from a source has a citation (author, year).",
                "I have at least the minimum number of words.",
                "I checked verbs, plurals and spelling."
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Close the page. Tell your partner the six writing steps from memory. Your partner checks."}
          ]
        },
        {
          id: "a7",
          short: "Instructions",
          minutes: 5,
          grouping: "Alone → pair",
          art: "dec10/assets/week5/v/v-d10w5d5-a7.svg",
          title: "Useful expressions for exam instructions",
          goal: "Understand exactly what every instruction asks you to do.",
          blocks: [
            {
              type: "match",
              id: "a7-match",
              title: "What does the instruction mean?",
              hint: "Tap an instruction, then its meaning.",
              left: [
                "Write no more than three words.",
                "Complete the sentence.",
                "Which of the following is NOT mentioned?",
                "Choose the best answer.",
                "Refer to the sources.",
                "Support your answer with evidence.",
                "Paraphrase the idea.",
                "Write 450–600 words."
              ],
              right: [
                "Use 1, 2 or 3 words only.",
                "Fill the gap so the sentence is correct.",
                "Find the one option the speaker or writer does not say.",
                "More than one option may look right — pick the strongest one.",
                "Use ideas from the texts and cite them.",
                "Give examples, facts or ideas from sources that show your point is true.",
                "Say it in your own words and keep the meaning.",
                "Write at least 450 words; you don’t need to write more than 600."
              ]
            },
            {
              type: "cards",
              title: "Instruction verbs in essay questions",
              items: [
                {"label":"Discuss","text":"Look at different sides, then give your view."},
                {"label":"Evaluate / To what extent","text":"Judge how much something is true. Give reasons."},
                {"label":"Compare","text":"Show similarities and differences."},
                {"label":"Justify","text":"Give good reasons for your answer or decision."}
              ]
            },
            {
              type: "language",
              title: "Asking politely about instructions (before the test starts)",
              groups: [
                {"label":"Check the rules","phrases":["Excuse me, could you tell me how long we have for this part?","Are we allowed to use … ?","Could you repeat the instruction, please?"]},
                {"label":"Problems","phrases":["Sorry, my headphones aren’t working.","Excuse me, I can’t log in.","Could I have some more paper, please?"]},
                {"label":"Check your understanding","phrases":["Just to check — do we write the answer here?","So, we should answer in no more than three words?"]}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Test your partner: read an instruction from the game aloud. Your partner explains it in their own words."},
            {
              type: "sticky",
              title: "Now it’s time",
              text: "Put this page away when your teacher says so. Follow the DEC team’s instructions. Breathe. One part at a time. You’ve got this."
            }
          ]
        },
        {
          id: "a8",
          short: "Reflect",
          minutes: 8,
          grouping: "Alone → pair",
          art: "dec10/assets/week5/v/v-d10w5d5-a8.svg",
          title: "After the assessment: reflection",
          goal: "Think about how you worked, what helped and what to do next time.",
          blocks: [
            {"type":"tip","text":"Do this <b>after</b> the test. Do not write about the test questions or answers. Write about <b>how you worked</b>."},
            {
              type: "figure",
              src: "dec10/assets/week5/d5-reflect.svg",
              size: "wide",
              alt: "A reflection path with three stepping stones: What went well (a star), What was difficult (a small hill), What I will do next time (a flag on the next hill, labelled LRW Assessment 2, Week 9).",
              caption: "What went well → what was difficult → what I will do next time."
            },
            {"type":"scale","id":"a8-s1","title":"How did it go?","statement":"I managed my time well.","ends":["Not at all","Very well"]},
            {"type":"scale","id":"a8-s2","statement":"I used my listening and note-taking strategies.","ends":["Not at all","Very well"]},
            {"type":"scale","id":"a8-s3","statement":"I planned my essay and cited the sources.","ends":["Not at all","Very well"]},
            {"type":"scale","id":"a8-s4","statement":"I stayed calm.","ends":["Not at all","Very well"]},
            {
              type: "fields",
              title: "My reflection",
              fields: [
                {"id":"a8-1","label":"Which strategy helped me most today?","placeholder":"The strategy that helped me most was reading the questions first, because …","rows":3},
                {"id":"a8-2","label":"What was difficult? Why?","placeholder":"I found it hard to … because …","rows":3},
                {"id":"a8-3","label":"One thing I will do differently in LRW Assessment 2 (Week 9)","placeholder":"Next time, I will plan for … minutes before I write …","rows":2}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Share <b>one</b> thing that went well and <b>one</b> thing you will change. Talk about how you worked — not about the questions."},
            {
              type: "language",
              title: "Reflection language",
              groups: [
                {"label":"What helped","phrases":["The strategy that helped me most was …","It was useful to …","I’m pleased that I managed to …"]},
                {"label":"What was difficult","phrases":["I found it hard to … because …","I ran out of time when …","I lost focus when …"]},
                {"label":"Next time","phrases":["Next time, I will …","I need to practise …","To improve my …, I’m going to …"]},
                {"label":"Respond to a classmate","phrases":["That happened to me too.","Have you tried …?","That sounds like a really good plan."]}
              ]
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["assessment","a test or task that measures what you can do","LRW Assessment 1 is on Day 5 of Week 5."],
    ["instructions","information that tells you what to do","Follow the DEC team’s instructions carefully."],
    ["predict","guess what you will hear or read before you start","Predict the kind of answer: a number, a name or a reason."],
    ["keyword","an important word that shows what a question is about","Underline the keywords in each question."],
    ["synonym","a word with the same or a similar meaning","“Dominance” is a synonym of “hegemony”."],
    ["word limit","the most words you are allowed to write","The word limit is three words — four words scores zero."],
    ["skim","read quickly for the main idea","Skim the headings and first sentences."],
    ["scan","read quickly to find one detail","Scan for names, years and numbers."],
    ["paraphrase","say or write an idea in your own words, with the same meaning","Paraphrase the idea and cite the source."],
    ["synthesise","connect ideas from two or more sources","Synthesise the lecture and the reading in one paragraph."],
    ["cite","say where an idea comes from (author and year)","Cite Hassi and Storti (2012) when you use their idea."],
    ["position","your answer or opinion on the question","Make your position clear in the thesis."],
    ["criterion (pl. criteria)","a standard used to judge work","Use of Sources is one criterion of the rubric."],
    ["rubric","a table that shows how work is marked","Read the rubric before you write."],
    ["invigilator","a person who watches students during a test","Ask the invigilator if your headphones stop working."],
    ["reflect","think carefully about what you did and how to improve","Reflect on how you managed your time."]
  ]
};
