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
  imageAlt: "Illustration: a calm, sunny study room. A student sits at a desk with her eyes closed, breathing slowly inside a soft glowing circle. On the desk are a speaker with sound waves, an open book with a magnifying glass, an essay page with a pen and a green tick, and a glass of water. Floating labels say: Listen · predict, Read · skim & scan, Write · plan, cite, check, and breathe 4 · 4 · 4 · 4.",
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
                "Follow the <b>DEC team’s</b> instructions on the day. Check the Canvas announcements for this assessment.",
                "Not sure about something? <b>Ask your teacher before the test starts.</b>"
              ]
            },
            {
              type: "key",
              title: "The facts (from the Assessments page)",
              points: [
                "<b>Three tests, one after the other, with no break:</b> listening → reading → writing. Your writing uses ideas from the listening and the reading.",
                "<b>Where:</b> in class, on Canvas, in LockDown Browser. <b>You need:</b> a laptop (not a phone or tablet).",
                "<b>Paper:</b> 6 blank sheets for notes — they are collected at the end.",
                "<b>It counts:</b> Week 5 listening 9%, reading 9% and integrated writing 13.5% of your total score. LRW Assessment 2 (Week 9) counts a little more."
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week5/d5-lrw-map.svg",
              alt: "A map of the LRW Assessment with three connected cards. Listen: a classroom speaker, about 35 minutes, heard once. Read: an open text, 50 minutes, Texts A, B and C. Write: an essay page with a citation, 90 minutes, 4 sources. Arrows labelled notes flow from Listen and Read into Write. A banner says: three tests, one after the other, no break; your notes become the evidence in your essay.",
              title: "Three skills, one assessment",
              hint: "Tap each number to see what the part checks.",
              size: "wide",
              spots: [
                {"x":17,"y":25.9,"label":"1","title":"Listening · about 35 minutes","text":"<b>Section 1:</b> two short conversations · 10 questions. <b>Section 2:</b> one lecture (10–12 min) in 3 parts · 20 questions. You hear it <b>once only</b>, and there are <b>no headphones</b>. You get time to read the questions first, and 8 minutes to check at the end.","color":"#2b776e"},
                {"x":50,"y":25.9,"label":"2","title":"Reading · 50 minutes","text":"<b>Part 1:</b> three academic texts (500–700 words each) · 20–21 questions. <b>Part 2:</b> up to 10 questions that need <b>all three</b> texts — find common ideas and draw conclusions. Look for <b>paraphrases</b>: questions often use different words from the text.","color":"#3a58a0"},
                {"x":83,"y":25.9,"label":"3","title":"Integrated writing · 90 minutes","text":"An argument essay of <b>450–600 words</b>. Plan for about 30 minutes, write for about 60. Use <b>four sources</b>: the lecture + Texts A, B and C. You can see the reading texts, and the lecture is played <b>again</b> 10 minutes after you get the question — take notes (no transcript). Cite <b>all</b> sources in APA 7 (in-text only, no reference list).","color":"#c4562f"},
                {"x":15,"y":85.7,"label":"4","title":"The big idea","text":"Listening and reading are <b>input</b>. Your notes become the <b>evidence</b> in your writing. Good notes = an easier essay. Question types include multiple choice, short answer, gap-fill and matching.","color":"#7a4a8c"}
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
                  q: "The essay must be 450–600 words. What happens if you write only 450 words?",
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
                  q: "How many times do you hear the listening, and how?",
                  options: ["Once only — played in the room, no headphones","Twice — with your own headphones","As many times as you like"],
                  answer: "Once only — played in the room, no headphones",
                  why: "So use the reading time to <b>predict</b>, and keep listening if you miss one answer."
                },
                {
                  q: "In the writing test, how many sources must you use and cite?",
                  options: ["One — the one you like best","Four — the lecture + Texts A, B and C","None — it is your opinion"],
                  answer: "Four — the lecture + Texts A, B and C",
                  why: "Cite <b>all</b> sources in APA 7 (in-text only) and show how they connect."
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
                "I have a laptop that works (Windows 8+ or macOS, 4 GB RAM or more). Phones and tablets are not allowed.",
                "My laptop runs for 3 hours — or I have a power bank. (You cannot plug into the wall.)",
                "I installed LockDown Browser.",
                "I did the LockDown Browser practice quiz.",
                "I read “Language for online assessments”.",
                "I removed language software (e.g. Sogou, Youdao) and turned off predictive text.",
                "I checked the Canvas announcements for this assessment.",
                "I know the time and the room. I will arrive a little early, with water.",
                "I know my plan: analyse the question → plan → write → cite → check."
              ]
            },
            {"type":"tip","text":"The links (LockDown Browser, the practice quiz, Language for online assessments) are on the <a href=\"#/assessments\">Assessments</a> page › <b>Get ready</b>."},
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
              alt: "The listening cycle in four steps. Before you listen: 1 Predict — what kind of answer: number, name or reason? 2 Keywords — underline them and think of synonyms. During: 3 Listen and note — once only, short notes with symbols. After: 4 Check — use the 8 minutes at the end to count words and check spelling.",
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
                {"front":"Once only","back":"You hear the recording <b>once</b>. Missed an answer? Leave it and catch the next one. Go back in the <b>8 minutes</b> at the end.","tag":"During"},
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
            {
              type: "sticky",
              title: "Reading Part 2: all three texts",
              text: "Some questions need Texts A, B and C together. While you read Part 1, jot down each text’s main idea with its author and year (A: … / B: … / C: …). Then you can find common ideas fast — and you already have notes for your essay."
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
              alt: "The Week 5 practice question, “Is cultural globalisation having a negative impact on culture?” (450–600 words), on a card. “Is” is marked blue, “cultural globalisation” and “culture” teal, “negative impact” orange. Below are three possible positions: For (negative), Against (not only negative), Strongly against (positive).",
              title: "Analyse the question (the Week 5 practice question)",
              hint: "Tap each marker. Do the same five steps with the question in the test.",
              size: "wide",
              spots: [
                {"x":47.1,"y":23.8,"label":"a","title":"Key content words","text":"<b>cultural globalisation</b> · <b>culture</b>. They tell you where to focus your reading and notes.","color":"#2b776e"},
                {"x":38.9,"y":41.9,"label":"b","title":"Limiting words","text":"<b>negative impact</b>. They narrow your answer: focus on whether the impacts are negative.","color":"#c4562f"},
                {"x":19,"y":23.8,"label":"c","title":"What is the question asking?","text":"<b>Is …?</b> asks you to <b>evaluate how much</b>: argue whether the impacts are (mostly) negative, with evidence.","color":"#3a58a0"},
                {"x":37.5,"y":72.9,"label":"d","title":"Possible positions","text":"<b>For:</b> it is having a negative impact. <b>Against:</b> it is not only negative. <b>Strongly against:</b> it is having a positive impact.","color":"#7a4a8c"}
              ]
            },
            {
              type: "key",
              title: "90 minutes for the writing",
              compare: [
                {"label":"Plan · about 30 min","text":"Analyse the question, choose your position, and build your plan from your notes.","eg":"The lecture is played again 10 minutes after you get the question — be ready to take notes."},
                {"label":"Write · about 60 min","text":"450–600 words. One main point per body paragraph, with evidence from the sources.","eg":"Use all four sources: the lecture + Texts A, B and C."},
                {"label":"Check · last minutes","text":"Word count, citations, grammar.","eg":"APA 7 in-text citations only — no reference list."}
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
                "I used all four sources, and every idea from a source has an in-text citation (APA 7, no reference list).",
                "I have at least 450 words.",
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
                {"label":"Problems","phrases":["Excuse me, I can’t log in.","Sorry, LockDown Browser has frozen.","Excuse me, my battery is very low."]},
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
    ["invigilator","a person who watches students during a test","Tell the invigilator if your laptop stops working."],
    ["reflect","think carefully about what you did and how to improve","Reflect on how you managed your time."]
  ]
};
