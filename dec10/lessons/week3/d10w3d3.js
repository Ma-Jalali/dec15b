/* DEC10 · Week 3 · Day 3 — Polish, present, prompt.
   Built from the Week 3 Teacher's Book, ordered by the revised weekly map (Weeks 3–4): each Day page holds the parts
   TAUGHT that weekday. Taught on WEDNESDAY: 10A Homework review AST: Digital literacy & online communication (30) ·
   11A Academic writing skills: Academic style (90) · 12A Seminar: Group 1 Seminar presentation; Opening remarks Group 2 (90) ·
   13A STAR© moment (30) · 14A AST: Digital literacy and AI Homework (60, with the "Ongoing research" reminder).
   Texts from the Teacher's Book (the research summary drafts, the email, the academic integrity text) are copied exactly.
   Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w3d3",
  week: 3,
  day: 3,
  title: "Polish, present, prompt",
  duration: "About 4 hours + homework",
  question: "How do you sound professional — in an email, in an academic paragraph, in a seminar and even in an AI prompt?",
  questionKind: "Big question",
  questionLabel: "Today’s big question · you will need it for your writing, the Seminar and the Interactive Presentation",
  journey: "Review the language of online teamwork and write an email to your lecturer. Turn a chatty research summary into real academic style. Watch Group 1 lead the first Seminar, discuss their questions and give feedback — then hear Group 2 open the next one. Tell your teacher what you need in a STAR moment. Tonight: learn to write AI prompts that really work, with Cogniti and Copilot.",
  image: "dec10/assets/week3/hero-d10w3d3.svg",
  imageAlt: "Illustration: a student at a laptop edits a paragraph — “really changing” turns into “undergoing significant transformation”. Beside her, a seminar group presents to the class from a big screen about green jobs, an email to a lecturer flies past, and an AI chat window shows a prompt built from four coloured parts: Role, Task, Requirements and Instructions.",
  finish: {"title":"Day 4","text":"Group research summary presentations 1–3, a STAR moment, an Interactive Presentation check-in and critical thinking"},
  goalShort: "your Seminar and the Interactive Presentation",
  sections: [
    {
      id: "online",
      number: "01",
      code: "10A",
      minutes: 30,
      tone: "blue",
      art: "dec10/assets/week3/s-d3-online.svg",
      title: "Homework review AST: Digital literacy & online communication",
      subtitle: "Netiquette, teamwork language — and an email to your lecturer",
      outcome: "You can state the expected etiquette for discussion board participation, identify effective and appropriate language for online collaboration, and use the appropriate format of e-mails as expected in the university context.",
      activities: [
        {
          id: "a1",
          short: "Online rules",
          minutes: 10,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week3/v/v-d10w3d3-a1.svg",
          title: "Activity 1 · Online collaboration",
          goal: "Remember the key rules for three online situations at university.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week3/d3-online-comm.svg",
              size: "wide",
              alt: "Online communication has two sides: effective and appropriate conversation and discussion, and effective and appropriate collaboration. Three situations: a discussion board, an email to a lecturer, and a shared group document.",
              caption: "Three online situations you meet every week at university."
            },
            {
              type: "do",
              n: 1,
              who: "group",
              text: "Discuss in groups. Spin the wheel. Answer for the situation you get. Then the next person spins. Try to give a <b>real example</b> from your homework."
            },
            {
              type: "spinner",
              id: "a1-spin",
              title: "What are some key things to remember when …",
              text: "Everyone talks about all three situations by the end.",
              reels: [
                {
                  label: "Situation",
                  items: [
                    "participating in a discussion board?",
                    "writing an email to a lecturer?",
                    "collaborating online with your group about a task?"
                  ]
                },
                {
                  label: "Tell us",
                  items: ["one thing to DO","one thing to AVOID","one useful phrase","one mistake you have seen","why it matters"]
                }
              ]
            },
            {
              type: "language",
              title: "Useful language: giving advice and disagreeing politely",
              groups: [
                {
                  label: "Give advice",
                  phrases: ["<b>It’s a good idea to</b> read everything before you reply.","<b>Make sure you</b> include …","<b>Try not to</b> use emojis in …","<b>Always remember to</b> proofread …","<b>You should avoid</b> …"]
                },
                {
                  label: "Disagree politely (online)",
                  phrases: [
                    "I understand your point, (name), <b>but I have a different perspective</b>.",
                    "I see your point, (name), <b>but I am finding it difficult to agree</b>.",
                    "I respect your position, <b>but I have to take a different stance</b>."
                  ]
                },
                {
                  label: "Refer back to a post",
                  phrases: ["I agree with Cary’s reply <b>when she stated that</b> …","<b>You mentioned that</b> … (not “U mentioned …”)","<b>Building on</b> Sienna’s point, …"]
                }
              ]
            },
            {"type":"do","n":2,"who":"group","text":"Now check: is each one good netiquette (<b>Do</b>) or not (<b>Don’t</b>)? Sort the cards, then say <b>why</b> for each one."},
            {
              type: "sort",
              id: "a1-sort",
              title: "Online at university: do or don’t?",
              buckets: [{"label":"Do","letter":"✓"},{"label":"Don’t","letter":"✗"}],
              items: [
                {"text":"Read everything in the thread before you reply.","answer":0,"why":"Be patient — read everything before replying."},
                {"text":"Use academic style and be clear.","answer":0},
                {"text":"Cite any sources you use in your post.","answer":0},
                {"text":"Proofread your post before you send it.","answer":0,"why":"Read it out loud before you press send!"},
                {"text":"Use formal language in an email to a lecturer.","answer":0},
                {"text":"Include sufficient and necessary details in your email.","answer":0},
                {"text":"Write “U mentioned …” in a discussion post.","answer":1,"why":"This is messaging speak. Write “You mentioned that …”."},
                {"text":"Add emojis to an academic discussion post.","answer":1},
                {"text":"Reply before you read the other replies.","answer":1},
                {"text":"Start an email to a lecturer with “Hi teacher,”.","answer":1,"why":"Use “Dear Dr X,” or “Dear Ms Smith,”."}
              ]
            }
          ],
          answers: {
            title: "Suggested answers",
            items: [
              ["Discussion board","Netiquette: participate / be patient (read everything before replying) / use academic style and be clear / cite any sources / be polite / proofread before sending!"],
              ["Email to a lecturer","Use formal language / include sufficient & necessary details."],
              ["Collaborating online","Use appropriate language to suggest edits, disagree with edits, ask for clarification and give positive feedback."]
            ]
          }
        },
        {
          id: "a2",
          short: "Team phrases",
          minutes: 12,
          grouping: "Group → Class",
          art: "dec10/assets/week3/v/v-d10w3d3-a2.svg",
          title: "Activity 2 · Appropriate language for online collaboration",
          goal: "Share your homework phrases for working on a shared document — and choose your favourites.",
          blocks: [
            {
              type: "key",
              title: "From your homework (AST section of the Student booklet)",
              compare: [
                {"label":"Suggesting edits","text":"Maybe we could ..."},
                {"label":"Disagreeing with someone’s edits","text":"Not sure. Can we talk about this?"},
                {"label":"Asking questions to clarify something","text":"I don’t quite get this—let's discuss ..."},
                {"label":"Giving positive feedback","text":"Great idea!"}
              ],
              points: ["Your task was to write some <b>more examples</b> of such language."]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-collab.svg",
              size: "wide",
              alt: "A shared group document with four comment bubbles in the margin: a blue one suggests an edit, an orange one disagrees with an edit, a purple one asks for clarification and a green one gives positive feedback.",
              caption: "Four jobs your comments do in a shared document."
            },
            {
              type: "steps",
              items: [
                {"who":"class","text":"Your teacher gives your group <b>one</b> of the four functions."},
                {"who":"group","text":"Spend <b>5 minutes</b> sharing your examples for that function. Choose the best ones."},
                {"who":"group","text":"One person writes your group’s examples on the whiteboard. Say each one aloud to the class."}
              ]
            },
            {
              type: "table",
              id: "a2-tab",
              title: "Our group’s examples",
              columns: ["Function","Our examples","Best one (say it aloud!)"],
              fixed: ["Suggesting edits","Disagreeing with someone’s edits","Asking questions to clarify something","Giving positive feedback"]
            },
            {"type":"do","n":1,"who":"pair","text":"Here are some more phrases. Which job does each one do? Sort them."},
            {
              type: "sort",
              id: "a2-sort",
              title: "Which job does it do?",
              buckets: [
                {"label":"Suggesting edits","letter":"S"},
                {"label":"Disagreeing with edits","letter":"D"},
                {"label":"Asking to clarify","letter":"?"},
                {"label":"Positive feedback","letter":"+"}
              ],
              items: [
                {"text":"Maybe rephrase to ‘XYZ’?","answer":0},
                {"text":"Consider changing this to ‘XYZ’.","answer":0},
                {"text":"How about we adjust this part?","answer":0},
                {"text":"What about simplifying this?","answer":0},
                {"text":"Prefer the original, let’s discuss.","answer":1},
                {"text":"Keeping this for now, thanks!","answer":1},
                {"text":"Not sure about this change. Discuss?","answer":1},
                {"text":"Let’s keep as is for clarity.","answer":1},
                {"text":"Can you clarify ‘XYZ’?","answer":2},
                {"text":"Could you expand on this point?","answer":2},
                {"text":"More details on this?","answer":2},
                {"text":"This is really clear and effective.","answer":3},
                {"text":"Spot on with this explanation.","answer":3},
                {"text":"Really appreciate your insight on this.","answer":3}
              ]
            },
            {
              type: "chat",
              title: "Comments on a shared group document",
              right: "You",
              lines: [
                ["Mei","<mark>Maybe rephrase to</mark> ‘renewable energy jobs’? It’s more precise."],
                ["Omar","<mark>Not sure about this change. Discuss?</mark> The source says ‘green jobs’."],
                ["You","<mark>Can you clarify</mark> what the source means by ‘green’?"],
                ["Omar","Sure — jobs that help to reduce emissions or protect the environment (Bowen et al., 2018)."],
                ["You","<mark>Spot on with this explanation.</mark> Let’s keep ‘green jobs’ and add the definition."],
                ["Mei","<mark>Great idea!</mark> I’ll add it now."]
              ]
            },
            {
              type: "talk",
              title: "Your favourites",
              prompts: [
                "Which phrases are you comfortable using? Which feel awkward?",
                "Which three are your favourites — the ones you really want to use? Why?",
                "How will you remember them? (your own phrase dictionary, a note on your phone, a sticky note on your laptop …)"
              ]
            },
            {
              type: "fields",
              fields: [
                {"id":"a2-fav","label":"My three favourite phrases (my phrase dictionary)","rows":3,"placeholder":"1. Could you expand on this point?\n2. …\n3. …"},
                {"id":"a2-goal","label":"My goal: when and how I will use them","rows":2,"placeholder":"In our seminar group’s shared document this week, I will …"}
              ]
            }
          ],
          answers: {
            title: "Additional phrases (from the Teacher’s Book)",
            items: [
              ["Suggesting edits","Maybe we could ... · Maybe rephrase to 'XYZ'? · Consider changing this to 'XYZ'. · How about we adjust this part? · Suggesting an alternative here. · What about simplifying this?"],
              ["Disagreeing with someone’s edits","Not sure. Can we talk about this? · Prefer the original, let’s discuss. · Keeping this for now, thanks! · Original might work better because XYZ. · Not sure about this change. Discuss? · Let’s keep as is for clarity."],
              ["Asking questions to clarify something","I don’t quite get this—let's discuss ... · Can you clarify 'XYZ'? · What does this mean? · Could you expand on this point? · More details on this? · Can you explain this part?"],
              ["Giving positive feedback","Great idea! · This is really clear and effective. · Love this part! · Nicely done here. · This works really well. · Strong point! · This section is particularly strong. · Really appreciate your insight on this. · Spot on with this explanation. · I like how you've handled this."]
            ]
          }
        },
        {
          id: "a3",
          short: "Email",
          minutes: 8,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-a3.svg",
          title: "Optional writing task",
          goal: "Write a short, formal email to your lecturer — in the right format.",
          blocks: [
            {
              type: "key",
              title: "The task",
              points: [
                "Take ten minutes to write an email to your lecturer. Your email should follow the instructions in the W3 D2 Digital Literacy and Online Communication lesson.",
                "In the email, tell your lecturer what you have been reading about the impact of greening on jobs and what has interested you about the reading. Then ask them to recommend further reading on the same topic."
              ]
            },
            {
              type: "hotspot",
              src: "dec10/assets/week3/d3-email.svg",
              size: "wide",
              alt: "An email to a lecturer, with seven parts: a subject line with the student number, a formal greeting, who you are, thanks and context, the request, a polite closing, and your name with your student number.",
              hint: "Tap a number to see what goes in each part.",
              spots: [
                {"x":7,"y":17,"label":"1","color":"#3a58a0","title":"Subject line","text":"Short and clear. Add your student number: <i>Student # 12345678: Query about reading recommendations</i>"},
                {"x":7,"y":31,"label":"2","color":"#2f7d6b","title":"Formal greeting","text":"<i>Dear Dr. X,</i> — use the title and family name. Never “Hi teacher,”."},
                {"x":7,"y":43,"label":"3","color":"#8a4f9e","title":"Who you are","text":"Your name and your course: <i>My name is … and I am a student in your course on …</i>"},
                {"x":7,"y":56,"label":"4","color":"#b07d12","title":"Thanks + context","text":"Thank them and say what you read and what interested you: <i>Thank you for recommending … I was interested in this reading because …</i>"},
                {"x":7,"y":70,"label":"5","color":"#c4562f","title":"Your request","text":"Ask politely and give the necessary details: <i>I’m emailing to ask if you could possibly recommend …</i>"},
                {"x":7,"y":82,"label":"6","color":"#2d7a9a","title":"Polite closing","text":"<i>Thank you very much.</i> Then <i>Kind regards,</i>"},
                {"x":7,"y":93,"label":"7","color":"#a3416a","title":"Name + student number","text":"Your full name and your student number, so the lecturer can find you quickly."}
              ]
            },
            {
              type: "language",
              title: "Useful language: a formal email",
              groups: [
                {"label":"Open","phrases":["Dear Dr / Professor (family name),","My name is … and I am a student in your course on …","<b>I am writing to</b> ask …"]},
                {"label":"Give context","phrases":["<b>Thank you for recommending</b> …","<b>I was interested in this reading because</b> it discusses …","<b>The reading suggests that</b> …"]},
                {"label":"Make your request","phrases":["<b>I’m emailing to ask if you could possibly</b> recommend …","<b>I would be grateful if you could</b> …","<b>Would it be possible to</b> …?"]},
                {"label":"Close","phrases":["Thank you very much (for your time).","<b>I look forward to hearing from you.</b>","Kind regards, / Best regards,"]}
              ]
            },
            {
              type: "detect",
              id: "a3-mail",
              label: "Email studio",
              title: "Write your email",
              hint: "The lights turn on when you use each part. Red lights mean the email is too informal.",
              checks: [
                {"label":"Subject line","color":"#3a58a0","any":["subject"]},
                {"label":"Formal greeting","color":"#2f7d6b","any":["dear"]},
                {"label":"Who you are","color":"#8a4f9e","any":["my name is","i am a student","i’m a student"]},
                {"label":"Thanks + context","color":"#b07d12","any":["thank you for","interested in"]},
                {"label":"Polite request","color":"#c4562f","any":["could you possibly","i would be grateful","would it be possible","emailing to ask","writing to ask"]},
                {"label":"Closing","color":"#2d7a9a","any":["kind regards","best regards","yours sincerely"]}
              ],
              avoid: [
                {"label":"Too informal","any":["hi teacher","hey","/\\bu\\b/","thx","pls","gonna","wanna"]}
              ],
              items: [{"task":"Write the subject line first. Then write the email.","rows":12,"placeholder":"Subject line: Student # … : …\n\nDear Dr …,\n\nMy name is …"}]
            },
            {"type":"do","n":1,"who":"pair","text":"Swap with a partner. Read their email aloud. Is it formal? Is the request clear? Tell them <b>one strength</b> and <b>one change</b>."},
            {
              type: "toggle",
              title: "Sample email text",
              hint: "Open after you write",
              blocks: [
                {
                  type: "model",
                  title: "Subject line: Student # 12345678: Query about reading recommendations",
                  text: "Dear Dr. X,<br><br>My name is Samuel Blank and I am a student in your course on Green Jobs.<br><br>Thank you for recommending Bowen et al. (2016) on the impact of “greening” on the workforce. I was interested in this reading because it discusses the difficulty of defining “green” jobs. The reading suggests that jobs may be more green or less green on a continuum.<br><br>I’m emailing to ask if you could possibly recommend further reading on the topic of defining “green” jobs. I’ve looked at the key references cited in the reference list of Bowen et al. (2016) and I’ve read some of them, but I would be interested to have your further recommendations on the topic.<br><br>Thank you very much.<br><br>Kind regards,<br><br>Samuel Blank<br><br>#12345678"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "style",
      number: "02",
      code: "11A",
      minutes: 90,
      tone: "clay",
      art: "dec10/assets/week3/s-d3-style.svg",
      title: "Academic writing skills: Academic style",
      subtitle: "From a chatty draft to an academic research summary",
      outcome: "You can identify features of academic writing, and evaluate and edit your writing for features of academic style.",
      activities: [
        {
          id: "b1",
          short: "Features",
          minutes: 10,
          grouping: "Pair → Class",
          art: "dec10/assets/week3/v/v-d10w3d3-b1.svg",
          title: "Features of academic writing",
          goal: "Make a list of features that make a text academic.",
          blocks: [
            {
              type: "key",
              title: "Register",
              points: [
                "Academic writing requires a certain level of <b>formality</b> and <b>style of language</b> (which we call ‘<b>register</b>’) to make it appropriate for academic contexts.",
                "In this lesson we will be looking at what makes a text academic."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-register.svg",
              size: "wide",
              alt: "A register slider from informal to formal. On the informal side: a chat message, “figure out”, “a lot”, “I think”. In the middle: a news article. On the formal side: an academic journal, “determine”, “a significant number of”, “It is likely that”.",
              caption: "Register is a slider: the same idea can sound chatty or academic."
            },
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "What are some features of academic style in writing? Some of them you have already learnt about in DEC 10 and previous courses. <b>Work together and make a list.</b>"
            },
            {"type":"sticky","title":"For example …","text":"use of noun phrases or nominalisations","color":"yellow"},
            {"type":"fields","fields":[{"id":"b1-list","label":"Our list of features of academic style","rows":6,"placeholder":"1. noun phrases / nominalisations\n2. …\n3. …"}]},
            {
              type: "language",
              title: "Useful language: talking about style",
              groups: [
                {"label":"Describe a feature","phrases":["<b>One feature of</b> academic style <b>is</b> …","Academic writing <b>tends to</b> use …","<b>It is more common to</b> use … <b>than</b> …"]},
                {"label":"Say what to avoid","phrases":["Academic writers <b>usually avoid</b> …","… <b>is generally not used in</b> academic writing.","<b>Instead of</b> “…”, <b>it is better to</b> write “…”."]}
              ]
            },
            {"type":"do","n":2,"who":"class","text":"Share your ideas. Your teacher writes them on the whiteboard. Did another pair have a feature you missed?"}
          ]
        },
        {
          id: "b2",
          short: "The draft",
          minutes: 10,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-b2.svg",
          title: "Read a research summary draft",
          goal: "Decide: is this draft written in an appropriate academic register?",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Read this research summary draft written by a DEC student. <b>Is it written in appropriate academic register? Why/why not?</b>"},
            {
              type: "passage",
              id: "b2-draft",
              title: "Research Summary (Draft)",
              text: "(1) The job market is really changing, and one of the great new trends is that there are more sustainability consultants. (2) Sustainability consultants are stepping into the spotlight, helping companies that want to be more eco-friendly and follow the rules about the environment. (3) They help businesses figure out how to use resources wisely. (4) And they teach them how to take care of the planet while still making a profit. (5) Why are they becoming so popular? (6) I think sustainability consultants do a lot to help companies plan for the future. (7) This isn't just about avoiding fines or negative press. (8) It's about being responsible for their environmental and social impact. (9) As we all know, everyone from tech firms to banks, can see the value of bringing sustainability into the mix. (10) As Holt says, this trend towards a workforce that cares about both making money and making a difference is signalling a shift in how businesses operate (Holt, 2023). (11) So, moving forward, companies will definitely continue to put sustainability at the top of their list."
            },
            {"type":"tip","text":"Copy the paragraph into your digital notebook (or use the highlighter above). You will mark it up later in this lesson."},
            {
              type: "scale",
              id: "b2-scale",
              title: "Your verdict",
              statement: "This draft is written in an appropriate academic register.",
              ends: ["Strongly disagree","Strongly agree"],
              mid: "Not sure",
              answer: 10,
              why: "No, it isn’t. It has good ideas, but it sounds like spoken English: contractions, a question, “I think”, idioms and phrasal verbs."
            },
            {
              type: "talk",
              title: "Tell your partner",
              prompts: ["Is it academic? Give two reasons.","Which sentence sounds most like speaking, not writing?","What is good about the draft? (Be fair — there are good ideas!)"]
            },
            {
              type: "language",
              groups: [
                {"label":"Judge a text","phrases":["<b>I don’t think</b> this is academic <b>because</b> …","Sentence (5) <b>sounds too</b> informal <b>because</b> …","<b>It reads more like</b> a blog post / spoken English.","<b>On the positive side</b>, the ideas are …"]}
              ]
            }
          ]
        },
        {
          id: "b3",
          short: "Feedback",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-b3.svg",
          title: "Teacher feedback on the draft",
          goal: "How many of the teacher’s points did you find? Which ones are new to you?",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Look at the feedback that the student received from their teacher on their draft. How many of the feedback points did you identify earlier? Which ones have you not heard before?"
            },
            {
              type: "model",
              title: "Teacher feedback",
              before: "There are a lot of good ideas, and some good grammar, in your writing. However, there are some problems with academic style. Some of the issues I found are:",
              list: [
                "a lack of nominalisations",
                "not all ideas from other sources are referenced properly",
                "use of simple linking phrases such as ‘and’, ‘but’ and ‘so’, incorrectly placed at the beginning of sentences",
                "contractions are not used in academic writing",
                "direct questions are generally not used in academic text",
                "avoid repetition of words between sentences. Try to use general nouns/summary phrases",
                "there is no hedging. Ideas should be expressed with caution, so try to use expressions for degrees of certainty such as modal verbs and adverbs of frequency and possibility. Note that intensifiers (such as <i>really</i>) or some adverbs of frequency (such as <i>always</i> and <i>never</i>) can introduce a level of exaggeration, overgeneralisation or absolute certainty that is not always supported by evidence.",
                "academic style is impersonal to maintain an objective tone, so avoid pronouns such as ‘I’, ‘we’, ‘us’ or ‘our’",
                "<b>Vocabulary is also a little informal. For example:</b>",
                "idiomatic language is generally not used",
                "there is a lack of specialized vocabulary which is common in academic writing",
                "there is vague or unclear language such as ‘put’ or ‘did’. In academic writing we like to be as precise as possible",
                "you are using vocabulary more associated with informal speech, such as phrasal verbs"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-style-rules.svg",
              size: "wide",
              alt: "Twelve features of academic style in two groups. Grammar and structure: nominalisations, referencing, no sentence-initial and, but, so, no contractions, no direct questions, no repetition (use summary nouns), hedging, impersonal style. Vocabulary: no idioms, specialised words, precise words, no phrasal verbs or chatty words.",
              caption: "The teacher’s feedback as a checklist: 8 grammar and structure points, 4 vocabulary points."
            },
            {
              type: "grid",
              id: "b3-grid",
              title: "Compare with your list",
              columns: ["Was it on our list?"],
              options: ["Yes, we had it","New for us"],
              rows: [
                "Nominalisations",
                "Referencing ideas from sources",
                "No ‘and’, ‘but’, ‘so’ at the start of sentences",
                "No contractions",
                "No direct questions",
                "No repetition — use general nouns / summary phrases",
                "Hedging (degrees of certainty)",
                "Impersonal style — no ‘I’, ‘we’, ‘us’, ‘our’",
                "No idiomatic language",
                "Specialised vocabulary",
                "Precise words, not vague ones (‘put’, ‘did’)",
                "No phrasal verbs / informal speech"
              ]
            },
            {
              type: "talk",
              prompts: ["Which point was new for you? Explain it to your partner in your own words.","Which point is the hardest for you in your own writing? Why?"]
            }
          ]
        },
        {
          id: "b4",
          short: "Find it",
          minutes: 15,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-b4.svg",
          title: "Find examples in the draft",
          goal: "Find the teacher’s points in the student’s writing.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Look again at the student draft of their research summary. Find examples of the teacher’s points in the student’s writing. Tap the phrases, then check."},
            {
              type: "spot",
              id: "b4-sp1",
              label: "Spot it · grammar and structure",
              title: "1 · Grammar, structure and certainty",
              hint: "Find 10: a contraction, a direct question, ‘I’, ‘And’ or ‘So’ at the start of a sentence, a repeated noun, and words that are too certain (no hedging).",
              paras: [
                "(1) The job market is [[*really]] changing, and one of the great new trends is that there are more [[sustainability consultants]]. (2) [[*Sustainability consultants]] are stepping into the spotlight, helping companies that want to be more eco-friendly and follow the rules about the environment. (3) They help businesses figure out how to use resources wisely. (4) [[*And]] they teach them how to take care of the planet [[while still making a profit]]. (5) [[*Why are they becoming so popular?]]",
                "(6) [[*I think]] sustainability consultants do a lot to help companies [[plan for the future]]. (7) This [[*isn't]] just about avoiding fines or negative press. (8) [[*It's]] about being responsible for their environmental and social impact. (9) As we all know, [[*everyone]] from tech firms to banks, can see the value of bringing sustainability into the mix. (10) As Holt says, this trend towards a workforce that cares about both making money and making a difference is signalling a shift in how businesses operate [[(Holt, 2023)]]. (11) [[*So]], moving forward, companies [[*will definitely]] continue to put sustainability at the top of their list."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-certainty.svg",
              size: "wide",
              alt: "A certainty meter from 100% to about 30%. At the top, too certain for academic writing: will definitely, always, everyone, really. Below, hedged academic language: is likely to, tends to, may, might, could, it is possible that.",
              caption: "Hedging: move down the meter. Academic writers show caution."
            },
            {
              type: "spot",
              id: "b4-sp2",
              label: "Spot it · vocabulary",
              title: "2 · Informal vocabulary",
              hint: "Find 10: idioms, phrasal verbs and chatty phrases from speech, and vague words (not precise).",
              paras: [
                "(1) The job market is really changing, and one of the [[*great]] new trends is that there are more sustainability consultants. (2) Sustainability consultants are [[*stepping into the spotlight]], helping companies that want to be more eco-friendly and follow the rules about [[the environment]]. (3) They help businesses [[*figure out]] how to use resources wisely. (4) And they teach them how to [[*take care of]] the planet while still making a profit. (5) Why are they becoming so popular?",
                "(6) I think sustainability consultants do [[*a lot]] to help companies plan for the future. (7) This isn't just about avoiding [[fines]] or negative press. (8) It's about being responsible for their [[environmental and social impact]]. (9) [[*As we all know]], everyone from tech firms to banks, can see the value of bringing sustainability [[*into the mix]]. (10) As Holt says, this trend towards a workforce that [[*cares about]] both making money and making a difference is signalling a shift in how businesses operate (Holt, 2023). (11) So, moving forward, companies will definitely continue to [[*put]] sustainability [[*at the top of their list]]."
              ]
            },
            {
              type: "talk",
              title: "Explain it to a classmate",
              prompts: [
                "Choose three phrases you found. For each one, say which teacher point it shows.",
                "The draft has no nominalisations and one idea is not referenced properly. Can you find where?"
              ]
            },
            {
              type: "language",
              groups: [
                {"label":"Point to the problem","phrases":["<b>In sentence</b> (4), the writer <b>starts with</b> ‘And’.","“Figure out” <b>is a phrasal verb, so it sounds</b> too informal.","“Will definitely” <b>is too certain — there is no hedging.</b>","<b>This is an example of</b> an idiom."]}
              ]
            }
          ],
          answers: {
            title: "Some problematic language (Teacher’s Book)",
            items: [
              ["a lack of nominalisations","“The job market is really changing” rather than “Changes in the job market” · “there are more sustainability consultants” rather than “the rise of sustainability consultants” · “how to use” rather than “the efficient use”."],
              ["simple linking phrases at the start of sentences","Sentence-initial ‘and’ in (4) & sentence-initial ‘so’ in (11)."],
              ["contractions","‘Isn’t’ in sentence 7 & ‘It’s’ in sentence 8."],
              ["direct questions","Use of a rhetorical question (5)."],
              ["repetition","“these professionals” to replace “sustainability consultants” in sentence 2."],
              ["no hedging","“will definitely” in sentence 11 / “everyone can see” in sentence 9 / “really” in sentence 1."],
              ["impersonal style","“I think” in sentence 6."],
              ["idiomatic language","‘stepping into the spotlight’ in sentence 2 or ‘into the mix’ in sentence 9 or ‘at the top of their list’ in sentence 11."],
              ["lack of specialised vocabulary","Indicated by the absence of words such as “transformation”, “financial”, “adhere,” “regulation”, “reputation”."],
              ["vague or unclear language","“great” in sentence 1, “do a lot to help” in sentence 6 and “put sustainability” in sentence 11."],
              ["informal speech, phrasal verbs","“figure out” in sentence 3, “take care of” in sentence 4, “a lot” in sentence 6, “as we all know” in sentence 9, and “cares about” in sentence 10."]
            ]
          }
        },
        {
          id: "b5",
          short: "Rephrase",
          minutes: 12,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-b5.svg",
          title: "Vocabulary analysis",
          goal: "Try to rewrite informal expressions in a more academic style — your own ideas first.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Look at the table with the informal language taken from the text. How could you rewrite these expressions in a more academic style? Write your ideas in the middle column. Leave the last column empty for now."
            },
            {
              type: "language",
              title: "Tools for a more academic version",
              groups: [
                {"label":"Use a noun phrase","phrases":["<b>the rise of</b> … · <b>the emergence of</b> … · <b>the growth in</b> …","<b>the efficient use of</b> … · <b>changes in</b> …"]},
                {"label":"Choose a precise verb","phrases":["follow → <b>comply with / adhere to</b>","help → <b>assist / guide / support</b>","see the value → <b>recognise the importance</b>"]},
                {"label":"Hedge","phrases":["<b>It is likely that</b> …","companies <b>may / are likely to</b> …","… <b>tends to</b> …"]}
              ]
            },
            {
              type: "table",
              id: "b5-tab",
              title: "Informal language → formal language",
              columns: ["Informal language","My more academic idea","Formal language (from the edited version)"],
              fixed: [
                "a. the job market is really changing",
                "b. there are more",
                "c. stepping into the spotlight",
                "d. follow the rules about the environment",
                "e. take care of the planet",
                "f. help businesses figure out",
                "g. how to use resources wisely",
                "h. take care of the planet",
                "i. everyone from tech firms to banks",
                "j. start to see the value of",
                "k. bringing sustainability into the mix",
                "l. cares about",
                "m. will definitely",
                "n. continue to put sustainability at the top of their list"
              ]
            },
            {
              type: "talk",
              title: "Mini-debate",
              prompts: ["Compare with another pair. For each line, choose the best idea — and say why it is better.","Which line was the hardest to rewrite? Why?"]
            }
          ]
        },
        {
          id: "b6",
          short: "Edited",
          minutes: 10,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-b6.svg",
          title: "The edited version",
          goal: "Find the formal phrases the student used to replace the informal language.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Read the student’s rewrite of the paragraph in a more academic style. Identify the phrases the student has used to replace the informal language. Write these in the right-hand column of your table."
            },
            {
              type: "passage",
              id: "b6-edit",
              title: "Research Summary (Edited)",
              gate: "Try your own ideas in the table first (the activity before). Then open the edited version.",
              text: "(1) The employment landscape is undergoing significant transformation with the emergence of sustainability consultants. (2) The demand for these experts has grown substantially in the last two years as they assist corporations in adhering to environmental regulations and adopting eco-friendly practices (Bawa, 2024). (3) They guide businesses on the efficient utilization of resources and instilling practices that balance environmental conservation with profitability. (4) The rising popularity of sustainability consultants can be attributed to their pivotal role in planning for long-term environmental, legal and social responsibilities. (5) A diverse range of industries, from technology to financial services, is recognizing the importance of integrating sustainable practices into their commercial operations. (6) Holt (2023) claims that this trend towards a workforce that values both financial success and positive societal impact signals a shift in how businesses operate. (7) It is likely that sustainability will remain a priority for organisations, continuing to shape corporate strategies and operations."
            },
            {
              type: "match",
              id: "b6-match",
              title: "Check: match the informal phrase to the formal phrase",
              hint: "Tap a phrase on the left, then its formal partner on the right.",
              left: [
                "a. the job market is really changing",
                "b. there are more",
                "c. stepping into the spotlight",
                "d. follow the rules about the environment",
                "e. take care of the planet (sentence 2: a verb + -ing)",
                "f. help businesses figure out",
                "g. how to use resources wisely",
                "h. take care of the planet (sentence 3: a noun phrase)",
                "i. everyone from tech firms to banks",
                "j. start to see the value of",
                "k. bringing sustainability into the mix",
                "l. cares about",
                "m. will definitely",
                "n. continue to put sustainability at the top of their list"
              ],
              right: [
                "the employment landscape is undergoing significant transformation",
                "the emergence of",
                "the demand has grown substantially",
                "adhere to environmental regulations",
                "adopting eco-friendly practices",
                "guide businesses on",
                "the efficient utilisation of resources",
                "environmental conservation",
                "a diverse range of industries, from technology to financial services",
                "recognise the importance of",
                "integrating sustainable practices into their commercial operations",
                "values",
                "it is likely",
                "sustainability will remain a priority"
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"<b>Read-aloud swap.</b> Student A reads an informal phrase. Student B closes the table and says the formal one from memory. Then swap."}
          ]
        },
        {
          id: "b7",
          short: "How?",
          minutes: 8,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-b7.svg",
          title: "Questions about the edited version",
          goal: "See HOW the writer made the paragraph academic.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Answer these questions about the edited version of the Research Summary."},
            {
              type: "quiz",
              id: "b7-quiz",
              items: [
                {
                  q: "1. How did the writer refer to ‘sustainability consultant’ in the second sentence to avoid repeating the language?",
                  options: ["these experts","the demand","corporations"],
                  answer: "these experts",
                  why: "A general noun / summary phrase avoids repetition."
                },
                {
                  q: "2. Identify the cause/effect relationship in sentence 4. What language is used to connect these ideas together?",
                  options: ["can be attributed to","the rising popularity","in planning for"],
                  answer: "can be attributed to",
                  why: "Reason: their pivotal role in planning for long-term environmental, legal and social responsibilities. Result: The rising popularity of sustainability consultants."
                },
                {
                  q: "3. How did the referencing format change in this text?",
                  options: ["External → internal referencing with a reporting verb: Holt (2023) claims that …","Internal → external referencing: (Holt, 2023)","The reference was removed"],
                  answer: "External → internal referencing with a reporting verb: Holt (2023) claims that …",
                  why: "Internal rather than external referencing with a reporting verb. Other language: According to Holt (2023), …"
                },
                {
                  q: "4. How many sentences are there in the revised text compared with the draft?",
                  options: ["Draft 11 → revised 9","Draft 11 → revised 7","Draft 11 → revised 11"],
                  answer: "Draft 11 → revised 7",
                  why: "Sentences were combined — see below."
                }
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-combine.svg",
              size: "wide",
              alt: "Eleven short draft sentences flow into seven revised sentences. Draft sentences 3 and 4 join into revised sentence 3 with ‘and’ and noun phrases. Draft sentences 5, 6, 7 and 8 join into revised sentence 4 with one long noun phrase as the subject.",
              caption: "11 sentences → 7 sentences: combining + noun phrases."
            },
            {
              type: "pairs",
              title: "Which sentences have been combined? How has the writer done this?",
              items: [
                {
                  from: "(3) They help businesses figure out how to use resources wisely. (4) And they teach them how to take care of the planet while still making a profit.",
                  to: "(3) They guide businesses on [[the efficient utilization of resources]] and [[instilling practices that balance environmental conservation with profitability.]]",
                  tag: "Combining into one sentence with a coordinating conjunction.",
                  note: "Nominalisation (use of noun phrases)."
                },
                {
                  from: "(5) Why are they becoming so popular? (6) I think sustainability consultants do a lot to help companies plan for the future. (7) This isn't just about avoiding fines or negative press. (8) It's about being responsible for their environmental and social impact.",
                  to: "(4) [[The rising popularity of sustainability consultants]] can be attributed to [[their pivotal role in planning for long-term environmental, legal and social responsibilities.]]",
                  tag: "Remove the question and personal pronoun and replace with a noun phrase in the subject.",
                  note: "Longer noun phrases. More concise language — e.g. This isn’t just about avoiding fines or negative press → legal responsibilities."
                }
              ]
            },
            {
              type: "talk",
              prompts: ["Explain to your partner, in your own words, how draft sentences 5–8 became one sentence.","Which change made the biggest difference to the style? Why?"]
            }
          ]
        },
        {
          id: "b8",
          short: "Rewrite",
          minutes: 15,
          grouping: "Alone → Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-b8.svg",
          title: "Rewrite the paragraph",
          goal: "Rewrite the draft in academic style — using your language table, not the edited version.",
          blocks: [
            {
              type: "key",
              title: "The rules",
              points: [
                "Rewrite the paragraph using the <b>original draft</b> text and the <b>language table</b> in the previous section.",
                "<b>Don’t look</b> at the edited version while you write!",
                "Once finished, check it against the edited version."
              ]
            },
            {
              type: "toggle",
              title: "The original draft (to work from)",
              open: true,
              blocks: [
                {
                  type: "model",
                  title: "Research Summary (Draft)",
                  text: "(1) The job market is really changing, and one of the great new trends is that there are more sustainability consultants. (2) Sustainability consultants are stepping into the spotlight, helping companies that want to be more eco-friendly and follow the rules about the environment. (3) They help businesses figure out how to use resources wisely. (4) And they teach them how to take care of the planet while still making a profit. (5) Why are they becoming so popular? (6) I think sustainability consultants do a lot to help companies plan for the future. (7) This isn't just about avoiding fines or negative press. (8) It's about being responsible for their environmental and social impact. (9) As we all know, everyone from tech firms to banks, can see the value of bringing sustainability into the mix. (10) As Holt says, this trend towards a workforce that cares about both making money and making a difference is signalling a shift in how businesses operate (Holt, 2023). (11) So, moving forward, companies will definitely continue to put sustainability at the top of their list."
                }
              ]
            },
            {
              type: "detect",
              id: "b8-rw",
              label: "Writing studio",
              title: "My academic version",
              hint: "Green lights turn on for academic features. Red lights show informal language that is still there.",
              checks: [
                {"label":"Noun phrases","color":"#3a58a0","any":["the emergence of","the rise of","transformation","utilisation","utilization","the demand for","popularity","the efficient use"]},
                {"label":"Summary noun","color":"#8a4f9e","any":["these experts","these professionals","these consultants","this trend"]},
                {"label":"Precise vocabulary","color":"#2f7d6b","any":["adhere","regulation","integrat","recognis","recogniz","financial","conservation"]},
                {"label":"Hedging","color":"#b07d12","any":["it is likely","likely to","/\\bmay\\b/","/\\bmight\\b/","tends to","/\\bcould\\b/"]},
                {"label":"Reporting verb","color":"#c4562f","any":["/Holt \\(2023\\) (claims|argues|states|suggests|notes|explains|points out)/","according to holt"]}
              ],
              avoid: [
                {"label":"Contraction","any":["/\\b\\w+n['’]t\\b/","/\\bit['’]s\\b/"]},
                {"label":"‘I’ / ‘we’","any":["/\\bI\\b/u","/\\bwe\\b/","/\\bour\\b/"]},
                {"label":"Too certain","any":["definitely","really","as we all know"]},
                {"label":"Phrasal verb / idiom","any":["figure out","take care of","a lot","into the mix","top of their list","spotlight"]},
                {"label":"And / So / But first","any":["/(^|[.!?]\\s+)(And|So|But)\\b/u"]}
              ],
              items: [{"task":"Rewrite the whole paragraph in an academic style.","rows":12,"placeholder":"The employment landscape …"}]
            },
            {
              type: "steps",
              items: [
                {"who":"alone","text":"When you finish, scroll up to the <b>edited version</b> and compare. Underline one thing you did well."},
                {"who":"pair","text":"Read your best sentence to a partner. Your partner says which feature of academic style it shows."}
              ]
            },
            {
              type: "language",
              title: "Talk about your rewrite",
              groups: [
                {"label":"Explain your changes","phrases":["<b>I replaced</b> “…” <b>with</b> “…” <b>because</b> …","<b>I combined</b> sentences … and … <b>by</b> using …","<b>I added hedging</b>: “it is likely that …”."]},
                {"label":"Respond to a partner","phrases":["<b>That sounds much more academic.</b>","<b>Could you make</b> this part <b>more precise</b>?","<b>Maybe</b> use a noun phrase <b>here</b>?"]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: "seminar",
      number: "03",
      code: "12A",
      minutes: 90,
      tone: "teal",
      art: "dec10/assets/week3/s-d3-seminar.svg",
      title: "Seminar: Group 1 Seminar presentation; Opening remarks Group 2",
      subtitle: "Group 1 leads the first Seminar — then Group 2 opens the next one",
      outcome: "You will have experienced delivering a structured presentation to an audience, summarised and paraphrased information and viewpoints from sources, practised a range of speaking skills while participating in a discussion, and made judgments about your peers' work.",
      activities: [
        {
          id: "c1",
          short: "The steps",
          minutes: 5,
          grouping: "Class",
          art: "dec10/assets/week3/v/v-d10w3d3-c1.svg",
          title: "Group 1 Seminar presentation · Review the steps",
          goal: "Know the four parts of the Seminar — and your job in each one.",
          blocks: [
            {
              type: "model",
              title: "Seminar Group 1’s question",
              text: "What is the impact of the digital carbon footprint on overall carbon emissions in [your chosen country], and what strategies can be deployed to reduce it?"
            },
            {
              type: "hotspot",
              src: "dec10/assets/week3/d3-seminar-flow.svg",
              size: "wide",
              alt: "The Seminar in four parts, about 40 minutes. Part 1: Group 1 gives a 10–12 minute presentation while the class listens with the feedback tool. Part 2: the class discusses two questions for 10 minutes; one presenter sits with each group and only takes notes. Part 3: Group 1 gives a 1–2 minute summary of each group’s discussion. Part 4: Group 1 gets teacher feedback; the class prepares peer feedback.",
              hint: "Tap each part. Top row: Seminar Group 1. Bottom row: the rest of the class.",
              spots: [
                {"x":14.5,"y":15,"label":"1","color":"#2f7d6b","title":"Part 1 · The presentation (10–12 min)","text":"<p><b>Group 1:</b> a brief outline of (a) the class reactions/questions and (b) the focus you selected (2–3 min) · a summary of your research (8–10 min) · introduce the two thought-provoking questions.</p><p><b>Rest of the class:</b> sit in your seminar groups, download the feedback tool, and think of what feedback to provide FOR THE GROUP.</p>"},
                {"x":38,"y":15,"label":"2","color":"#c4562f","title":"Part 2 · The discussion (10 min)","text":"<p><b>Group 1:</b> one presenter sits with one discussion group. Listen and take notes for your summary. Do not participate in discussion!</p><p><b>Rest of the class:</b> discuss the two questions provided by the presenting group.</p>"},
                {"x":61.5,"y":15,"label":"3","color":"#3a58a0","title":"Part 3 · The summary (1–2 min)","text":"<p><b>Group 1:</b> present a 1–2-minute summary of the main points of each group’s discussion.</p><p><b>Rest of the class:</b> listen to the summary.</p>"},
                {"x":85,"y":15,"label":"4","color":"#8a4f9e","title":"Part 4 · Feedback","text":"<p><b>Group 1:</b> sit with your teacher and take notes on the feedback you hear. Ask for clarification if you don’t understand.</p><p><b>Rest of the class:</b> discuss your feedback for the presenting group, using the Peer and Teacher Feedback Tool. Decide how to deliver it (video/audio/directly on the form) and upload it to the presenting group’s Portfolio BY THE END OF TODAY — only ONE group member uploads.</p>"}
              ]
            },
            {
              type: "sort",
              id: "c1-sort",
              title: "Who does it?",
              buckets: [{"label":"Seminar Group 1","letter":"G1"},{"label":"The rest of the class","letter":"All"}],
              items: [
                {"text":"Give a 10–12-minute presentation.","answer":0},
                {"text":"Introduce two thought-provoking questions.","answer":0},
                {"text":"Discuss the two questions for 10 minutes.","answer":1},
                {"text":"Listen to a discussion group and take notes — without talking.","answer":0},
                {"text":"Give a 1–2-minute summary of each group’s discussion.","answer":0},
                {"text":"Prepare feedback with the Peer and Teacher Feedback Tool.","answer":1},
                {"text":"Upload ONE group feedback to the presenting group’s Portfolio by the end of today.","answer":1},
                {"text":"Sit with the teacher and take notes on the feedback.","answer":0}
              ]
            },
            { type: 'download', id: 'feedback-tool', note: "Download the <b>Peer and Teacher Feedback Tool for Presentations</b> now (you met it in Week 2). It is general, so use it flexibly: mark <b>Question &amp; Answer</b> as <b>N/A</b> — that criterion is only for the Research Summary Presentations, not the Seminars." }
          ]
        },
        {
          id: "c2",
          short: "Part 1",
          minutes: 12,
          grouping: "Group 1 → Class",
          art: "dec10/assets/week3/v/v-d10w3d3-c2.svg",
          title: "Group 1: Begin the Seminar Presentation",
          goal: "Group 1 presents. Everyone else listens actively and notes feedback for the group.",
          blocks: [
            {
              type: "tabs",
              title: "Choose your tab",
              tabs: [
                {
                  label: "Rest of the class",
                  blocks: [
                    {"type":"do","n":1,"who":"alone","text":"Sit in your seminar group. Listen to the Seminar Presentation. Take short notes. In the last column, note a <b>strength</b> or an <b>action</b> for the group’s feedback."},
                    {
                      type: "language",
                      title: "Notes for feedback",
                      tabs: false,
                      groups: [
                        {"label":"Strength","phrases":["clear focus from the board ✓","good evidence: … (source, year)","eyes up, natural voice"]},
                        {"label":"Action","phrases":["read from slides → use notes","too fast in part … → pause","say the source: “According to …”"]}
                      ]
                    }
                  ]
                },
                {
                  label: "Seminar Group 1",
                  blocks: [
                    {
                      type: "checklist",
                      id: "c2-g1",
                      title: "Before you start",
                      items: ["Our PPT is open and ready to go (no hold-ups!)","Someone is keeping time: 10–12 minutes","Our two questions are on a slide","Each speaker knows who comes next"]
                    },
                    {
                      type: "language",
                      title: "Language for presenters",
                      tabs: false,
                      groups: [
                        {"label":"Outline reactions + focus","phrases":["<b>On the Discussion Board, many of you</b> asked about …","<b>A common theme was</b> …","<b>We decided to focus on</b> … <b>because</b> …"]},
                        {"label":"Summarise research","phrases":["<b>According to</b> … (2023), …","<b>A study by</b> … <b>found that</b> …","<b>This suggests that</b> …"]},
                        {"label":"Introduce the questions","phrases":["<b>Now we’d like you to discuss</b> two questions.","<b>You have ten minutes.</b> One of us will join each group to listen."]}
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "table",
              id: "c2-notes",
              title: "My notes on Group 1’s Seminar Presentation",
              columns: ["Part","Notes (key words only)","Feedback idea: strength or action"],
              fixed: ["Class reactions + their focus","Summary of research (sources?)","The two questions","Delivery: voice, eyes, slides, timing"]
            }
          ]
        },
        {
          id: "c3",
          short: "Part 2",
          minutes: 10,
          grouping: "Seminar groups",
          art: "dec10/assets/week3/v/v-d10w3d3-c3.svg",
          title: "Discuss the two questions",
          goal: "Discuss Group 1’s questions for 10 minutes. Group 1 only listens.",
          blocks: [
            {
              type: "key",
              title: "Part 2",
              points: [
                "<b>Rest of the class:</b> discuss for 10 minutes the two questions provided by the presenting group.",
                "<b>Group 1:</b> one presenter sits with one discussion group. Listen and take notes for your summary. <b>Do not participate in discussion! Just listen and take notes.</b>",
                "Group 1 does not ‘interview’ the group. The discussion belongs to the group."
              ]
            },
            {"type":"do","n":1,"who":"group","text":"Spin a role each. Use your role’s phrases at least <b>twice</b> during the discussion."},
            {
              type: "spinner",
              id: "c3-spin",
              title: "Discussion roles",
              text: "Everyone speaks. Everyone has one job.",
              reels: [
                {"label":"My role","items":["Starter — opens each question","Builder — adds to others’ ideas","Challenger — politely disagrees","Questioner — asks for examples and reasons","Includer — brings quiet people in","Summariser — sums up before you move on"]}
              ]
            },
            {
              type: "language",
              title: "Discussion moves",
              groups: [
                {"label":"Start","phrases":["<b>Shall we start with</b> the first question?","<b>For me, the key issue is</b> …","<b>I’d like to begin by saying</b> …"]},
                {"label":"Build on","phrases":["<b>Building on what</b> … <b>said</b>, …","<b>That’s a good point. In addition,</b> …","<b>Like you said,</b> …"]},
                {"label":"Disagree politely","phrases":["<b>I see your point, but</b> …","<b>I’m not sure I agree.</b> In my country, …","<b>That may be true for</b> …, <b>but what about</b> …?"]},
                {"label":"Ask + include","phrases":["<b>Could you give an example?</b>","<b>Why do you think that is?</b>","<b>What do you think,</b> …? <b>We haven’t heard from you yet.</b>"]},
                {"label":"Sum up + move on","phrases":["<b>So, we seem to agree that</b> …","<b>Shall we move on to</b> the second question?"]}
              ]
            },
            {
              type: "tabs",
              title: "Your notes",
              tabs: [
                {
                  label: "Rest of the class",
                  blocks: [
                    {"type":"fields","fields":[{"id":"c3-q1","label":"Question 1 — our main ideas","rows":3},{"id":"c3-q2","label":"Question 2 — our main ideas","rows":3}]}
                  ]
                },
                {
                  label: "Group 1 presenter",
                  blocks: [
                    {"type":"table","id":"c3-g1","title":"The group I listened to","columns":["Question","Main points","Agree / disagree?","One interesting idea"],"fixed":["Question 1","Question 2"]}
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "c4",
          short: "Parts 3–4",
          minutes: 13,
          grouping: "Group 1 → Class",
          art: "dec10/assets/week3/v/v-d10w3d3-c4.svg",
          title: "Summary and feedback",
          goal: "Group 1 sums up each discussion. Then everyone works on feedback.",
          blocks: [
            {"type":"do","n":1,"who":"class","text":"<b>Part 3.</b> Group 1 presents a 1–2-minute summary of the main points of each group’s discussion. Everyone else listens. Did they get your group’s ideas right?"},
            {
              type: "language",
              title: "Summarise a discussion (Group 1)",
              groups: [
                {"label":"Main points","phrases":["<b>Group A mainly talked about</b> …","<b>Most people agreed that</b> …","<b>There was some disagreement about</b> …"]},
                {"label":"Highlight + finish","phrases":["<b>One interesting point was</b> …","<b>Someone made the point that</b> …","<b>Overall, the group felt that</b> …"]}
              ]
            },
            {"type":"do","n":2,"who":"group","text":"<b>Part 4.</b> Group 1 sits with the teacher. Everyone else discusses feedback for the group with the feedback tool. Use the form below to agree on your group’s feedback."},
            {
              type: "form",
              id: "c4-form",
              title: "Our peer feedback for Seminar Group 1",
              intro: "Agree as a group. Question &amp; Answer is N/A for the Seminar.",
              observe: "Which group are you giving feedback to?",
              scale: ["Yes","Mostly","Needs work"],
              cols: ["Comments","Action plan for further improvement"],
              sections: [
                {
                  label: "Content Delivery",
                  items: [
                    "We could follow the presentation easily: the ideas were clearly and logically connected.",
                    "Each group member’s turn flowed naturally and logically from the previous member.",
                    "Visuals were clear and helped the audience understand the main ideas.",
                    "Body language and eye contact engaged the audience."
                  ]
                },
                {
                  label: "Fluency & Pronunciation",
                  items: ["Pronunciation was clear and could be easily understood.","We could hear the presenters using chunking, pausing and stress in their language."]
                },
                {
                  label: "Language Use",
                  items: ["The grammar and vocabulary used were largely accurate and we could understand the meaning.","We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)"]
                }
              ],
              send: true
            },
            {
              type: "language",
              title: "Giving feedback — kind, specific, useful",
              groups: [
                {"label":"Strengths","phrases":["<b>One real strength was</b> …","<b>We found it easy to follow because</b> …","<b>The part about</b> … <b>was particularly clear.</b>"]},
                {"label":"Feed forward","phrases":["<b>It would be even better if</b> …","<b>Next time, you could</b> …","<b>One small thing to work on is</b> …"]}
              ]
            },
            {
              type: "tabs",
              title: "After the Seminar",
              tabs: [
                {
                  label: "Rest of the class",
                  blocks: [
                    {
                      type: "key",
                      title: "Peer Feedback 1 (Additional submission)",
                      points: [
                        "Discuss what feedback to give the Seminar presenting group (using the Peer and Teacher Feedback Tool).",
                        "Choose a mode for the feedback: audio, video, written text or the completed feedback tool.",
                        "Upload your feedback to the presenting group’s portfolio — <b>by the end of today</b>, and only <b>one</b> group member uploads."
                      ]
                    }
                  ]
                },
                {
                  label: "Seminar Group 1",
                  blocks: [
                    {"type":"table","id":"c4-fb","title":"My notes on the teacher’s feedback","columns":["Area","What went well","What to improve (action)"],"fixed":["Content","Delivery and engagement","Language","Pronunciation"]},
                    {
                      type: "key",
                      title: "After the Seminar Presentation",
                      points: [
                        "<b>Submit Portfolio Submission 3:</b> Written summary of, and reflection on, teacher’s and peer feedback on your Seminar presentation.",
                        "<b>Submit Portfolio Submission 4 (Assessed Task):</b> Video response to all the teacher and peer feedback."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-portfolio.svg",
              size: "wide",
              alt: "What happens after today. Seminar Group 1 submits Portfolio Submission 3 (written summary and reflection on teacher and peer feedback) and Portfolio Submission 4 (assessed: a video response). The rest of the class uploads Peer Feedback 1 to Group 1’s portfolio today. Seminar Group 2 submits Portfolio Submission 1 (reflection on the teacher’s feedback on their Opening Remarks) before their Seminar in Week 4.",
              caption: "Who submits what after today."
            }
          ]
        },
        {
          id: "c5",
          short: "Group 2",
          minutes: 10,
          grouping: "Group 2 → Class",
          art: "dec10/assets/week3/v/v-d10w3d3-c5.svg",
          title: "Group 2 Opening Remarks",
          goal: "Listen to Group 2 open the next Seminar — and note what you want to know more about.",
          blocks: [
            {
              type: "model",
              title: "Seminar Group 2’s question",
              text: "What strategies could be implemented in [your chosen country] to enhance a smooth transition to more green jobs?"
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-opening.svg",
              size: "wide",
              alt: "Group 2’s Opening Remarks, 5–7 minutes, in three parts: 1 a brief introduction to the country they selected and why, 2 causes and/or effects of the sustainability issue, 3 possible strategies or solutions. The audience writes down what they would like to know more about.",
              caption: "Opening Remarks: 5–7 minutes, three parts."
            },
            {"type":"do","n":1,"who":"alone","text":"Pay attention to the group’s opening remarks. While you are listening, write down any more information you would like to know about the country and its sustainability issue."},
            {
              type: "table",
              id: "c5-notes",
              title: "My notes on Group 2’s Opening Remarks",
              columns: ["Part","What they said (key words)","What I would like to know more about"],
              fixed: ["The country and why they chose it","Causes and/or effects of the issue","Possible strategies / solutions"]
            },
            {
              type: "language",
              title: "Turn a gap into a question",
              tabs: false,
              groups: [
                {"label":"I want to know","phrases":["<b>Which green jobs are growing fastest in</b> …?","<b>What is the government already doing to</b> …?","<b>How would workers in</b> … <b>be retrained</b>?","<b>Which strategy would work best in</b> …, <b>and why</b>?"]}
              ]
            }
          ]
        },
        {
          id: "c6",
          short: "React",
          minutes: 10,
          grouping: "Seminar groups",
          art: "dec10/assets/week3/v/v-d10w3d3-c6.svg",
          title: "Feedback/Discussion",
          goal: "React as a group and post your questions — or take notes on your teacher’s feedback.",
          blocks: [
            {
              type: "tabs",
              title: "Choose your tab",
              tabs: [
                {
                  label: "Rest of the class",
                  blocks: [
                    {
                      type: "steps",
                      items: [
                        {"who":"group","text":"Discuss your reactions to the <i>opening remarks</i> presentation content. Everyone says at least one sentence."},
                        {"who":"group","text":"Prepare one or two questions you would like the group to answer about the problem they talked about (gaps in your knowledge you would like filled)."},
                        {"who":"group","text":"Post your group’s reactions and questions to the Discussion Board. Do this IN CLASS and do ONE POST PER GROUP."}
                      ]
                    },
                    {
                      type: "language",
                      title: "React and ask",
                      tabs: false,
                      groups: [
                        {"label":"React","phrases":["<b>We were surprised that</b> …","<b>It was interesting to hear that</b> …","<b>We hadn’t realised that</b> …"]},
                        {"label":"Ask for more","phrases":["<b>We would like to know more about</b> …","<b>It wasn’t clear to us why</b> …","<b>We wonder whether</b> …"]}
                      ]
                    },
                    {
                      type: "fields",
                      fields: [
                        {"id":"c6-react","label":"Our group’s reactions","rows":3,"placeholder":"We were surprised that …"},
                        {"id":"c6-qs","label":"Our one or two questions for Group 2","rows":3,"placeholder":"1. Which …?\n2. How …?"}
                      ]
                    },
                    {"type":"checklist","id":"c6-post","title":"Our post","items":["Reactions + one or two questions","Polite, academic style (netiquette!)","ONE post per group","Posted in class"]}
                  ]
                },
                {
                  label: "Seminar Group 2",
                  blocks: [
                    {"type":"do","n":1,"who":"group","text":"The teacher will provide your group with some feedback on your Opening Remarks presentation. Take notes — you need them for Portfolio Submission 1. Ask for clarification if there’s anything you don’t understand."},
                    {"type":"table","id":"c6-fb","title":"My notes on the teacher’s feedback","columns":["Category","What the teacher said","Next time, we should …"],"fixed":["Content","Engagement with the audience","Pronunciation"]},
                    {
                      type: "language",
                      title: "Check that you understand",
                      tabs: false,
                      groups: [{"label":"Ask","phrases":["<b>Could you give us an example of</b> …?","<b>What do you mean by</b> …?","<b>So, next time we should</b> … — <b>is that right?</b>"]}]
                    }
                  ]
                }
              ]
            },
            {"type":"do","n":1,"who":"group","text":"Before you post: which question is better for the Discussion Board? Bet your coins."},
            {
              type: "bet",
              id: "c6-bet",
              title: "Choose the stronger question",
              items: [
                {
                  q: "Pair 1",
                  options: ["a. Are green jobs good?","b. Which workers in your country are most at risk in the move to green jobs, and how could they be supported?"],
                  answer: "b. Which workers in your country are most at risk in the move to green jobs, and how could they be supported?",
                  why: "b is open and specific — it fills a real gap. a is a yes/no question."
                },
                {
                  q: "Pair 2",
                  options: ["a. To what extent should the government, rather than companies, pay for retraining workers?","b. What is a green job?"],
                  answer: "a. To what extent should the government, rather than companies, pay for retraining workers?",
                  why: "a invites a real discussion. b was already answered in the Opening Remarks."
                }
              ]
            }
          ]
        },
        {
          id: "c7",
          short: "Next week",
          minutes: 15,
          grouping: "Class",
          art: "dec10/assets/week3/v/v-d10w3d3-c7.svg",
          title: "Preparation for Next Week",
          goal: "Know Group 2’s jobs before their Seminar — the same process every group follows.",
          blocks: [
            {
              type: "key",
              title: "Portfolio Submission 1 (Group 2)",
              points: [
                "A written summary of, and reflection on, the teacher’s verbal feedback on your Seminar Opening Remarks.",
                "<b>IMPORTANT!</b> This must be submitted before your Seminar Presentation in Week 4."
              ]
            },
            {
              type: "model",
              title: "What a Portfolio Submission 1 can look like",
              text: "“Feedback on our Opening Remarks can be put into three categories: [EG <i>content, engagement with the audience and pronunciation</i>]. For content the feedback was [...]. For engagement, the teacher said [...]. For pronunciation, [...]. This feedback tells us that next time, we should ....”"
            },
            {"type":"do","n":1,"who":"pair","text":"To prepare for the Seminar Presentation next week, Group 2 must complete these tasks. Put them in order."},
            {
              type: "order",
              id: "c7-order",
              title: "Before the Seminar next week",
              items: [
                "Read reactions, comments and questions on the Discussion Board and identify any common themes and interesting ideas",
                "Select the focus of your seminar presentation from these comments and questions.",
                "Think of two thought-provoking questions for the class to discuss in small groups for 10 minutes.",
                "Prepare your Powerpoint Slides for your Presentation for Week 4 (10–12 minutes)"
              ],
              ends: ["First","Last"],
              why: "Review how to ask good discussion questions from Lesson W2 D4 17A Seminar Discussion Opening Remarks."
            },
            {
              type: "key",
              tone: "warn",
              title: "Note",
              points: ["Don’t address ALL the questions on the Discussion Board, just choose one or two to focus your research."]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-rotation.svg",
              size: "wide",
              alt: "The Seminar relay. Week 3 (today): Group 1 Seminar Presentation and Group 2 Opening Remarks. Week 4: Group 2 Seminar Presentation and Group 3 Opening Remarks. Each group passes the baton to the next.",
              caption: "The Seminar relay: each week one group presents and the next group opens."
            },
            {
              type: "model",
              title: "Reminders for Week 4 · Group 2 – Seminar Presentation",
              text: "What strategies could be implemented in [your chosen country] to enhance a smooth transition to more green jobs?"
            },
            {
              type: "model",
              title: "Reminders for Week 4 · Group 3 – Opening Remarks",
              text: "How can eco-tourism in [specific context] be managed to both support conservation and benefit local communities?"
            },
            {
              type: "cards",
              title: "Revise in the app",
              items: [
                {"label":"W2 D3","text":"<a href=\"#/d10w2d3/opening\">Making Seminar Discussion Questions</a>"},
                {"label":"W1 D2","text":"<a href=\"#/d10w1d2/seminar\">Introduction to Seminar and Interactive Presentation</a>"}
              ]
            }
          ]
        },
        {
          id: "c8",
          short: "Reflect",
          minutes: 10,
          grouping: "Seminar groups",
          art: "dec10/assets/week3/v/v-d10w3d3-c8.svg",
          title: "AST: Groupwork reflection",
          goal: "Talk honestly about how your group works together.",
          blocks: [
            {
              type: "tabs",
              title: "Discuss these guiding questions",
              tabs: [
                {
                  label: "Today’s presenting group",
                  blocks: [
                    {
                      type: "talk",
                      prompts: [
                        "Did any issues come up about working as a group? (e.g., individual tasks, deadlines). If not, why not? If yes, were you able to express your concerns?",
                        "How successfully do you think you supported each other?",
                        "Was there a “leader” in your group, who initiated your progress? If so, how did they communicate and discuss their ideas and plans? If not, how did you manage your progress?",
                        "Can you easily explain all the steps your group took in planning and carrying out the seminar task?"
                      ]
                    }
                  ]
                },
                {
                  label: "Other groups",
                  blocks: [
                    {"type":"talk","prompts":["What are the strengths of your group work at the moment?","Are there any aspects of your groupwork you would like to change or improve?"]}
                  ]
                }
              ]
            },
            {
              type: "language",
              title: "Reflecting on teamwork",
              groups: [
                {"label":"Strengths","phrases":["<b>We supported each other by</b> …","<b>Everyone contributed</b> to …","<b>We were good at</b> meeting deadlines."]},
                {"label":"Problems","phrases":["<b>One issue that came up was</b> …","<b>I felt (un)comfortable raising</b> my concerns <b>because</b> …","<b>It was difficult to</b> … <b>because</b> …"]},
                {"label":"Improve","phrases":["<b>Next time, we could</b> …","<b>It might help to</b> set clearer deadlines.","<b>I’d suggest that we</b> …"]}
              ]
            },
            {
              type: "scale",
              id: "c8-scale",
              title: "Our group right now",
              statement: "Our group works well together.",
              ends: ["Not yet","Very well"],
              mid: "Getting there"
            },
            {"type":"fields","fields":[{"id":"c8-change","label":"One thing our group will change or improve","rows":2,"placeholder":"Next time, we could …"}]},
            {"type":"do","n":1,"who":"class","text":"Some groups report back their reflections to the class."}
          ]
        },
        {
          id: "c9",
          short: "Group time",
          minutes: 5,
          grouping: "Seminar groups",
          art: "dec10/assets/week3/v/v-d10w3d3-c9.svg",
          title: "Now spend some time working with your group",
          goal: "Use the time left to move your group’s work forward.",
          blocks: [
            {
              type: "cards",
              title: "What does your group do now?",
              items: [
                {"label":"Group 2","text":"Prepare for your Seminar next week: read the Discussion Board posts and choose your focus.","icon":"chat"},
                {"label":"Group 3","text":"Work on your Opening Remarks for Week 4 (eco-tourism).","icon":"flag"},
                {"label":"Other groups","text":"Work on your Seminar or Interactive Presentation research.","icon":"search"}
              ]
            },
            {
              type: "checklist",
              id: "c9-today",
              title: "Before you leave today",
              items: ["Our peer feedback for Group 1 is uploaded (ONE member)","Our Discussion Board post for Group 2 is posted","I know my next task and the deadline"]
            },
            {"type":"tip","text":"<b>After class:</b> Remember to continue your research for your group’s seminar topic and final Interactive Presentation Assessment."}
          ]
        }
      ]
    },
    {
      id: "star",
      number: "04",
      code: "13A",
      minutes: 30,
      tone: "amber",
      art: "dec10/assets/week3/s-d3-star.svg",
      title: "STAR© moment",
      subtitle: "Mid-week check: your questions, your needs",
      outcome: "You have actively participated with your teacher in addressing your learning needs.",
      activities: [
        {
          id: "s1",
          short: "What is it?",
          minutes: 4,
          grouping: "Class",
          art: "dec10/assets/week3/v/v-d10w3d3-s1.svg",
          title: "What are Teachable STAR Moments?",
          goal: "This time is for you.",
          blocks: [
            {
              type: "key",
              title: "Teachable STAR moments",
              points: [
                "At DEC, we’re excited to introduce Teachable STAR moments as part of your curriculum! These can range from an hour to an entire lesson (depending on the week).",
                "Your teacher might take this time to <b>address specific questions</b> you might have, and <b>address your specific language needs</b>.",
                "Teachable STAR moments represent a commitment to responsive and adaptive teaching that consider your unique circumstances and learning environments.",
                "We invite you to actively participate. The best way to do so is by <b>reflecting on your learning needs</b> and <b>talking to your teacher</b> about them. Your feedback matters!"
              ]
            }
          ]
        },
        {
          id: "s2",
          short: "My needs",
          minutes: 8,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d3-s2.svg",
          title: "Reflect on your learning needs",
          goal: "What has gone well this week so far? What do you still need help with?",
          blocks: [
            {
              type: "grid",
              id: "s2-grid",
              title: "Week 3 so far",
              rows: [
                "Reading about green jobs and talking about it",
                "Supporting my group (group work skills)",
                "Listening to the green skills podcast and taking notes",
                "Mediation: connecting ideas from sources",
                "Online communication: posts, emails, comments",
                "Academic style: formal vocabulary and hedging",
                "Following and discussing a Seminar presentation",
                "Getting ready for my group’s research summary presentation"
              ],
              columns: ["How do I feel?"],
              options: ["I’m confident","Getting there","I need help"]
            },
            {
              type: "fields",
              fields: [
                {"id":"s2-needs","label":"My top two learning needs","placeholder":"1. … 2. …","rows":2},
                {"id":"s2-q","label":"A question I want to ask my teacher","placeholder":"I’m still not sure how to …","rows":2}
              ]
            }
          ]
        },
        {
          id: "s3",
          short: "Ask",
          minutes: 10,
          grouping: "Pair → Class",
          art: "dec10/assets/week3/v/v-d10w3d3-s3.svg",
          title: "Talk to your teacher",
          goal: "Ask clearly — and get the help you need.",
          blocks: [
            {
              type: "chat",
              title: "A good request",
              right: "Student",
              lines: [
                ["Teacher","So, what would you like to work on today?"],
                ["Student","I <mark>understand</mark> why “will definitely” is too strong, <mark>but not</mark> how to hedge without sounding weak."],
                ["Teacher","Good question. Hedging isn’t weak — it’s careful. Can you give me a sentence?"],
                ["Student","“Companies will definitely continue to focus on sustainability.”"],
                ["Teacher","Try: “It is likely that companies <b>will continue</b> …” or “Companies <b>are likely to</b> continue …”. Still confident, but careful."],
                ["Student","Oh, I see. <mark>Could we have more practice with</mark> that?"]
              ]
            },
            {
              type: "language",
              title: "Ask your teacher for help",
              groups: [
                {"label":"Ask to explain","phrases":["Could you <b>explain</b> … <b>again</b>, please?","What’s the <b>difference between</b> … and …?","Could you give us <b>an example of</b> …?"]},
                {"label":"Say what is hard","phrases":["I’m <b>not sure how to</b> …","I <b>get confused when</b> …","I <b>understand</b> …, <b>but not</b> …"]},
                {"label":"Ask for practice","phrases":["Could we have <b>more practice with</b> …?","Could you <b>check</b> my …?","Is it OK if we <b>go over</b> …?"]}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"Practise your question from the last activity with a partner. Make it <b>specific</b>: say what you understand and what you don’t."},
            {
              type: "cards",
              title: "Class vote: what should we practise today?",
              pick: "s3-vote",
              items: [
                {"label":"Academic style","text":"formal words, hedging, noun phrases","icon":"pen"},
                {"label":"Online writing","text":"emails, posts, polite comments","icon":"chat"},
                {"label":"Discussion","text":"agreeing, disagreeing, building on ideas","icon":"link"},
                {"label":"Presenting","text":"help for tomorrow’s group presentations","icon":"search"}
              ]
            },
            {"type":"do","n":2,"who":"class","text":"Tell your teacher your vote and your question. Your teacher will use them for the rest of the STAR moment."}
          ]
        },
        {
          id: "s4",
          short: "Quick check",
          minutes: 8,
          grouping: "Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-s4.svg",
          title: "Spin and explain",
          goal: "Show what you know — and find out what you need to review.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Spin both reels. Do the task in <b>30 seconds</b>. If you can’t — that’s useful! Add it to your learning needs."},
            {
              type: "spinner",
              id: "s4-spin",
              title: "Week 3 review spinner",
              reels: [
                {"label":"Topic","items":["green jobs","netiquette","an email to a lecturer","hedging","nominalisation","phrasal verbs → formal verbs","the Seminar steps","Portfolio submissions"]},
                {"label":"Task","items":["Explain it in 30 seconds","Give an example","Teach your partner one phrase","Ask your teacher one question about it"]}
              ]
            },
            {
              type: "checklist",
              id: "s4-ready",
              title: "Ready for tomorrow?",
              meter: ["ticked","Ready for tomorrow!"],
              items: [
                "I know my part of our group’s research summary presentation.",
                "I will practise my part tonight, with a timer.",
                "I told my teacher my top learning need.",
                "I will do tonight’s AI homework (prompts, Cogniti, Copilot)."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "aihw",
      number: "05",
      code: "14A",
      minutes: 60,
      tone: "plum",
      art: "dec10/assets/week3/s-d3-aihw.svg",
      title: "AST: Digital literacy and AI Homework",
      subtitle: "Prompts that work — with Cogniti and Copilot",
      outcome: "You will identify the elements that make a good prompt, distinguish the structure of a good prompt from a poor quality one, and log in and use Cogniti and Copilot for prompt writing practice.",
      activities: [
        {
          id: "h1",
          short: "Gen AI",
          minutes: 8,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d3-h1.svg",
          title: "Activity 1 · Is artificial intelligence really intelligent?",
          goal: "Understand what generative AI is and what a prompt does.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week3/d3-ai-literacy.svg",
              size: "wide",
              alt: "Digital literacy tools: AI. Five overlapping circles: using tools to support learning; making choices based on relevance for learning; using prompts (highlighted — today’s focus); critical engagement with AI generated output; acknowledging use of AI.",
              caption: "Developing digital literacy and AI skills prepares you for an academic and professional landscape where these skills are a given. Today: the basics of prompt engineering."
            },
            {
              type: "key",
              title: "Generative AI and prompts",
              points: [
                "Generative Artificial Intelligence, or Generative AI (Gen AI), is a class of computer algorithms able to create digital content – including text, images, video, music and computer code.",
                "<b>Prompts</b> are words, phrases, questions, or keywords that users enter into AI tools to generate results. They are the instruction that users provide for the AI model to respond to.",
                "The better your prompts, the better the results you'll get. An effective prompt not only sets the topic but also provides clear instructions on the task."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-genai.svg",
              size: "wide",
              alt: "How Gen AI works in its simplest form: a prompt goes into generative AI (a brain made of connected dots), which produces generated text, a generated image or generated audio.",
              caption: "Prompt in → generated content out."
            },
            {
              type: "talk",
              title: "Think (or tell a classmate tomorrow)",
              prompts: ["Is artificial intelligence really “intelligent”? Why / why not?","Which AI tools do you already use for study? What for?"]
            },
            {
              type: "language",
              groups: [
                {"label":"Talk about AI use","phrases":["<b>I mainly use</b> AI <b>to</b> …","<b>It’s useful for</b> … <b>but not for</b> …","<b>I always check the output because</b> …","<b>I’m not sure it really understands</b> …"]}
              ]
            }
          ]
        },
        {
          id: "h2",
          short: "Two prompts",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d3-h2.svg",
          title: "Two prompts, two images",
          goal: "Compare a short prompt and a detailed prompt for the same task.",
          blocks: [
            {
              type: "key",
              title: "Is it challenging to write a good prompt?",
              points: [
                "Creating effective prompts can be a challenging task, as the quality of the output relies on the specificity and clarity of the prompts or input instructions.",
                "Consider the following prompts put into an AI Generator. <b>Task: Design a new product from two everyday items.</b>"
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-two-prompts.svg",
              size: "wide",
              alt: "Prompt 1: “put a water bottle and a backpack in one image” — generated image 1 shows a backpack and a separate water bottle side by side. Prompt 2: “You are a designer who needs to merge two everyday items: A watter bottle and a backpack into one item. Create an image of what this may look like.” — generated image 2 shows one backpack with a water bottle built in, ready to wear.",
              caption: "Same task, two prompts, two very different results. (Drawings of the two results.)"
            },
            {
              type: "bet",
              id: "h2-bet",
              title: "Question 1",
              items: [
                {
                  q: "Which of the two images addressed the task best?",
                  options: ["Generated image 1","Generated image 2"],
                  answer: "Generated image 2",
                  why: "Correct: it is integrated to be used as a wearable backpack. Image 1 does not display a functional backpack."
                }
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"Questions 2 and 3: sort each statement. More than one can be correct!"},
            {
              type: "sort",
              id: "h2-sort",
              title: "Q2 How does the first prompt differ from the second? · Q3 Why didn’t AI generate the same image for both prompts?",
              buckets: [{"label":"Correct","letter":"✓"},{"label":"Incorrect","letter":"✗"}],
              items: [
                {"text":"Q2 · The first prompt was not as detailed as the second prompt.","answer":0,"why":"For AI to generate what you would like, the more details provided, the better the results."},
                {"text":"Q2 · The first prompt was open to a wider variety of interpretations than the second prompt.","answer":0,"why":"The more details provided, the smaller the chance of many interpretations."},
                {"text":"Q2 · The first prompt was more succinct than the second prompt.","answer":1,"why":"Being short on text does not necessarily mean it contains the main information required."},
                {"text":"Q3 · I am not sure. They both give the same basic information.","answer":1,"why":"Both prompts did give the same basic information. However, Prompt 2 was more detailed."},
                {"text":"Q3 · AI’s interpretation of human prompts can be flawed.","answer":0,"why":"AI can only produce using the information we provide it."},
                {"text":"Q3 · AI can only generate from what human input it is given.","answer":0}
              ]
            }
          ]
        },
        {
          id: "h3",
          short: "Principles",
          minutes: 7,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d3-h3.svg",
          title: "Principles for good prompting",
          goal: "Learn three principles and the try-and-refine cycle.",
          blocks: [
            {
              type: "flip",
              title: "Principles for good prompting",
              hint: "Guess the meaning, then turn the card.",
              items: [
                {"front":"Craft precise and unambiguous instructions.","back":"Say exactly what you want — in a way that can only be understood one way."},
                {"front":"Specificity is key!","back":"The model will make an assumption on any point you don’t clearly explain."},
                {"front":"Try and refine","back":"There is no hard science to good prompting. Approach it as a process of trial and error."}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-refine-loop.svg",
              size: "wide",
              alt: "A cycle of four steps: 1 formulate a relevant prompt, 2 consider when the output doesn’t meet expectations, 3 enhance the clarity of the prompt, 4 repeat the process to improve the prompt.",
              caption: "Trial and error: each turn of the loop makes the prompt better."
            },
            {
              type: "order",
              id: "h3-order",
              title: "Put the process in order",
              items: [
                "Formulate a relevant prompt.",
                "Consider when the completions (output) don’t meet expectations.",
                "Enhance the clarity of the prompt.",
                "Repeat the process to iteratively improve your prompt's effectiveness."
              ],
              why: "Remember: as you chat with generative AI, the model will learn more about what you need. Use the conversational turns to help the AI improve its outputs. Simple prompts lead to simple (and similar) completions."
            },
            {
              type: "tip",
              text: "Once you've got the hang of basic prompting, you might like to look at the <b>advanced prompt writing tips</b> on the University’s <i>AI in Education</i> Canvas site."
            }
          ]
        },
        {
          id: "h4",
          short: "RTRI",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d3-h4.svg",
          title: "The structure of a good prompt",
          goal: "Know the four elements of a good prompt: Role, Task, Requirements, Instructions.",
          blocks: [
            {
              type: "hotspot",
              src: "dec10/assets/week3/d3-prompt-anatomy.svg",
              size: "wide",
              alt: "A good prompt in four parts. Role: Act as an environmental scientist with expertise in ecology and wildlife conservation. Task: Write an environmental assessment report for a company evaluating the potential impact of their new development project on the endangered Blue-Striped Skink. Requirements: The report should include an introduction, methodology, findings, discussion, recommendations, and conclusion; no longer than two pages; only academic sources. Instructions: Provide an overview of the skink, describe the survey techniques, present data, analyse the impact, offer strategies, use clear language and scientific references.",
              hint: "Tap each element.",
              spots: [
                {"x":9,"y":18,"label":"R","color":"#3a58a0","title":"Role","text":"Prompts starting with “act as...” or “pretend to be...” will provide responses similar to that of the role which you provide. Setting a specific role increases the likelihood of more accurate information, when done appropriately. <i>E.g. act as an expert in the field of computer science.</i>"},
                {"x":9,"y":39,"label":"T","color":"#2f7d6b","title":"Task","text":"The task is a summary of what you want the prompt to do. Outline what you want the AI to do. Be specific about the task’s objective, as unclear objectives lead to worse outputs."},
                {"x":9,"y":61,"label":"R","color":"#b07d12","title":"Requirements","text":"Give as much information as possible so the response doesn't use any incorrect assumptions. AI models make assumptions for any information they don't have in the prompt. Define what an output should look like and the conditions that affect it."},
                {"x":9,"y":83,"label":"I","color":"#8a4f9e","title":"Instructions","text":"Instructions inform the AI how to complete the task. They can include examples of how it is supposed to work, steps it can follow or any information. Feedback on steps it has taken will improve this even further."}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"The following prompts contain problems connected to one of the prompt elements outlined. Can you identify which one?"},
            {
              type: "quiz",
              id: "h4-quiz",
              shared: ["Role","Task","Requirement","Instruction"],
              items: [
                {
                  q: "Prompt 1: “Outline the steps to implement a new software system.”",
                  answer: "Instruction",
                  why: "The prompt lacks detailed instructions on what kind of software system is being discussed, the environment in which it is to be implemented, or any specific constraints or requirements. This omission could lead to a generic or irrelevant response."
                },
                {
                  q: "Prompt 2: “Explain quantum computing.”",
                  answer: "Requirement",
                  why: "The prompt does not specify the depth of explanation required, the target audience's prior knowledge level, or the context in which the explanation will be used."
                },
                {
                  q: "Prompt 3: “Write about the effects of globalization.”",
                  answer: "Task",
                  why: "This prompt is too broad and lacks specificity in terms of the aspects of globalization to be explored (economic, cultural, technological, etc.), the perspective or angle to adopt, or the expected depth of analysis."
                },
                {
                  q: "Prompt 4: “Assess the effectiveness of modern educational technology tools as a high school math teacher.”",
                  answer: "Role",
                  why: "The role of a high school math teacher may limit the scope and depth of the analysis to only math education, possibly overlooking broader educational technology applications in other disciplines or educational levels."
                }
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Now build your own prompt about this week’s topic. Use the chips for ideas, then copy it into Cogniti or Copilot (next activities)."},
            {
              type: "promptbuilder",
              id: "h4-pb",
              title: "Role · Task · Requirements · Instructions",
              tryUrl: "https://copilot.microsoft.com/",
              tryLabel: "Open Copilot",
              parts: [
                {"key":"role","id":"h4-pb-1","label":"Role","lead":"Act as","placeholder":"a careers adviser who specialises in green jobs…","chips":["a careers adviser who specialises in green jobs","an academic writing tutor","an economist"]},
                {"key":"task","id":"h4-pb-2","label":"Task","lead":"Provide","placeholder":"an explanation of what a ‘green job’ is…","chips":["an explanation of what a ‘green job’ is","three examples of green skills employers want","a plain-English summary of my paragraph"]},
                {"key":"requirements","id":"h4-pb-3","label":"Requirements","lead":"Focus on","placeholder":"university students in Australia, under 200 words…","chips":["university students","my chosen country","under 200 words","B1-level English"]},
                {"key":"instructions","id":"h4-pb-4","label":"Instructions","lead":"Include","placeholder":"one example for each point and a short table…","chips":["one example for each point","a short table","two questions to check my understanding"]}
              ]
            }
          ]
        },
        {
          id: "h5",
          short: "Cogniti",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d3-h5.svg",
          title: "Activity 2 · Cogniti",
          goal: "Log in to Cogniti and try the Writing Coach agent.",
          blocks: [
            {
              type: "key",
              title: "What is Cogniti?",
              points: [
                "Cogniti is a special AI tool designed by the University of Sydney for teachers to help their students in specific ways.",
                "Teachers control how the AI works by giving it clear instructions. For example, the AI can act as a tutor that <b>asks you questions</b> instead of just giving answers.",
                "Teachers can also upload materials like lecture notes or assignments, so the AI can give more accurate and helpful responses."
              ]
            },
            {
              type: "cards",
              title: "Benefits of Cogniti",
              items: [
                {"label":"Personalised Help","text":"AI assistants that match your lessons, so the help is relevant to you.","icon":"chat"},
                {"label":"Extra Resources","text":"It can use class notes or assignments uploaded by the teacher.","icon":"search"},
                {"label":"24/7 Support","text":"Get help any time of day, also outside class hours.","icon":"flag"},
                {"label":"Fair Access","text":"Everyone in the class has the same chance to use it.","icon":"link"},
                {"label":"Safe and Private","text":"Your data is safe and your interactions stay private.","icon":"pen"}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-cogniti-steps.svg",
              size: "wide",
              alt: "How to log in to Cogniti in seven steps: 1 go to app.cogniti.ai, 2 click Log in and choose Log in with Australian Access Federation (or Log in with Microsoft), 3 search for The University of Sydney, 4 log in with your Unikey and password, 5 verify your access and click Approve, 6 click Chat with agents, 7 search for agents and pin them.",
              caption: "Seven steps into Cogniti."
            },
            {
              type: "steps",
              title: "How to use Cogniti",
              items: [
                {"who":"alone","text":"Go to <b>app.cogniti.ai</b>"},
                {"who":"alone","text":"Click <b>“Log in”</b>, then choose <b>‘Log in with Australian Access Federation’</b>. If you have logged in with your university credentials, you can click Log in with Microsoft."},
                {"who":"alone","text":"<b>Search for your institution</b>: The University of Sydney. <b>Log in using your Unikey and password.</b>"},
                {"who":"alone","text":"<b>Verify your access</b> by choosing one of the available methods, then click <b>Approve</b>."},
                {"who":"alone","text":"Once logged in, click <b>‘Chat with agents’</b>. You can search for specific agents and <b>pin them</b> to make them easier to find next time."}
              ]
            },
            {
              type: "cards",
              title: "Recommended agents for your DEC studies",
              items: [
                {"label":"Writing Coach","text":"Assists with academic writing, such as how to write an essay introduction. It also provides examples to help guide your writing process."},
                {"label":"Vanilla GPT-4","text":"ChatGPT-4, offered for free to university students, providing general help across various subjects."}
              ]
            },
            {
              type: "checklist",
              id: "h5-try",
              title: "Try the Writing Coach agent",
              items: [
                "Type of writing: Essay",
                "Follow the prompts and answer the questions the agent asks.",
                "Ask the agent ‘how to write an introduction and a conclusion’ of an essay.",
                "Ask the agent for a sample introduction and conclusion.",
                "Try other agents as well and compare to see which one is the most useful."
              ]
            },
            {"type":"fields","fields":[{"id":"h5-useful","label":"Do you find the samples useful? Why / why not?","rows":3,"placeholder":"The sample introduction was useful because … but …"}]},
            {
              type: "language",
              title: "Talking to an AI agent (follow-ups)",
              groups: [
                {"label":"Ask for more","phrases":["Can you give me <b>an example of</b> …?","Can you <b>explain that in simpler terms</b>?","What is <b>the difference between</b> … and …?"]},
                {"label":"Refine","phrases":["Make it <b>shorter / more formal</b>.","Focus only on <b>green jobs</b>.","<b>Don’t write it for me</b> — ask me questions to help me improve it."]}
              ]
            }
          ]
        },
        {
          id: "h6",
          short: "Copilot",
          minutes: 10,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d3-h6.svg",
          title: "Activity 3 · MS Copilot",
          goal: "Log in to Copilot safely and ask it to make a university text easier to understand.",
          blocks: [
            {
              type: "key",
              title: "Introduction to Copilot",
              points: [
                "Microsoft Copilot is a generative artificial intelligence chatbot developed by Microsoft. Log in securely with your university email: <b>firstname.lastname@sydney.edu.au</b> (not unikey@sydney.edu.au).",
                "<i>What is Copilot?</i> An AI assistant for education. It uses the latest AI models, like GPT-4 and DALL-E 3, and answers based on today's information with sources for where the content is coming from.",
                "<i>Why use it?</i> It can save you time. <i>How?</i> It can quickly summarise long PDFs and articles or create images. It also allows you to ask follow-up questions, e.g. <i>can you explain that in simpler terms</i>."
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-copilot.svg",
              size: "wide",
              alt: "Copilot with data protection: log in with firstname.lastname@sydney.edu.au (correct) not unikey@sydney.edu.au (wrong), and look for the green badge. Benefits: searches not linked to individual user accounts, prompts and responses are not saved, no one at Microsoft can view your data.",
              caption: "Look for the green badge next to your profile."
            },
            {"type":"do","n":1,"who":"alone","text":"<b>Activity (15 minutes)</b> Login to <a href=\"https://copilot.microsoft.com/\" target=\"_blank\" rel=\"noopener\">Copilot</a>. Make sure you see a green badge next to your profile."},
            {"type":"sticky","title":"The situation","text":"You are an international student trying to understand academic integrity at Sydney University. You find the following on the USYD website.","color":"blue"},
            {
              type: "passage",
              id: "h6-ai",
              title: "Academic integrity (USYD website)",
              text: "Academic integrity is a core value of the University of Sydney, in both education and research. By joining the University community, you have agreed to uphold this value and to proactively contribute to the University’s culture of academic integrity.\n\nActing with academic integrity means doing the 'right thing' even when things seem difficult and taking a shortcut to academic success seems easier. There is no such thing as achieving genuine academic success without first putting in hard work and effort.\n\nBehaving with academic integrity also means that you must acknowledge where other people or tools have contributed to your work in some way. This could include acknowledging words, ideas, images, computer code, or artistic or musical creations. It can also mean acknowledging any assistance provided in relation to your work, including any feedback, proof-reading or editing.\n\nActing with academic honesty also means you do not try to benefit academically by misleading others or being unfair to others, including gaining any kind of unfair advantage over others.\n\nWhen you act with academic honesty and integrity at university, having applied the proper effort, you can be proud that you have truly earned your qualification. You can be proud that you have developed your mind and skills to the tertiary level and be confident in your ability to succeed in your career."
            },
            {
              type: "steps",
              items: [
                {"who":"alone","text":"Ask Copilot to put it into easy-to-understand terms."},
                {"who":"alone","text":"Are you satisfied with the results? Try asking Copilot follow up questions on any points that are still unclear."}
              ]
            },
            {
              type: "chat",
              title: "Example: refine with follow-up questions",
              right: "You",
              lines: [
                ["You","<mark>Act as</mark> a friendly university adviser. <mark>Explain</mark> this text about academic integrity <mark>in easy-to-understand terms</mark> for an international student. Use 5 short bullet points."],
                ["Copilot","• Be honest in your work. • Do the work yourself … (5 points)"],
                ["You","Thanks. <mark>Can you explain</mark> “acknowledge where other people or tools have contributed” <mark>in simpler terms, with an example?</mark>"],
                ["Copilot","It means you say when someone or something helped you — for example, if an AI tool or a friend checked your grammar …"]
              ]
            },
            {
              type: "fields",
              fields: [
                {"id":"h6-prompt","label":"My prompt","rows":2,"placeholder":"Act as … Explain … in easy-to-understand terms …"},
                {"id":"h6-eval","label":"Am I satisfied with the results? What follow-up did I ask?","rows":3,"placeholder":"Mostly — but the point about … was unclear, so I asked …"}
              ]
            },
            {"type":"tip","text":"Using AI for your work? Remember the text you just read: you must <b>acknowledge</b> where tools have contributed to your work."}
          ]
        },
        {
          id: "h7",
          short: "Notes",
          minutes: 3,
          grouping: "Alone",
          art: "dec10/assets/week3/v/v-d10w3d3-h7.svg",
          title: "Preparing for class",
          goal: "Make notes on your understanding of three concepts.",
          blocks: [
            {
              type: "fields",
              fields: [
                {"id":"h7-p","label":"Effective prompting","rows":2,"placeholder":"A good prompt has a role, a task, …"},
                {"id":"h7-c","label":"Cogniti","rows":2,"placeholder":"A University of Sydney AI tool that …"},
                {"id":"h7-m","label":"Copilot","rows":2,"placeholder":"Log in with …; it can …"}
              ]
            }
          ]
        },
        {
          id: "h8",
          short: "Research",
          minutes: 2,
          grouping: "Seminar group",
          art: "dec10/assets/week3/v/v-d10w3d3-h8.svg",
          title: "Ongoing research: Seminar and Interactive Presentation",
          goal: "Keep your group research moving every day.",
          blocks: [
            {
              type: "checklist",
              id: "h8-res",
              title: "Tonight (and every day this week)",
              items: [
                "I added at least one new source to our group’s research (author, year, title).",
                "I checked my source with the CRAAP test.",
                "I posted a short update for my group (polite, clear — use today’s phrases!).",
                "I know what our group needs to do next for the Seminar and the Interactive Presentation."
              ]
            },
            {"type":"tip","text":"Group 2: your Seminar is next week. Group 3: your Opening Remarks are next week. Everyone: your final Interactive Presentation builds on this research."}
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["netiquette","the polite way to behave online (net + etiquette)","Good netiquette means reading the whole thread before you reply."],
    ["discussion board","an online space where students and teachers post and reply","Post your group’s questions to the Discussion Board."],
    ["register","the level of formality and style of language in a text","Academic writing needs a formal register."],
    ["nominalisation","turning a verb or adjective into a noun phrase","“Changes in the job market” is a nominalisation of “the job market is changing”."],
    ["hedging","showing caution about how certain an idea is","“It is likely that …” is an example of hedging."],
    ["intensifier","a word that makes another word stronger, e.g. really, very","Avoid intensifiers such as “really” in academic writing."],
    ["contraction","a short form such as isn’t or it’s","Contractions are not used in academic writing."],
    ["idiom","a fixed phrase whose meaning is not clear from its words","“Stepping into the spotlight” is an idiom."],
    ["phrasal verb","a verb + a small word, e.g. figure out, take care of","Replace the phrasal verb “figure out” with “determine”."],
    ["adhere to","to follow a rule or law exactly","Companies must adhere to environmental regulations."],
    ["be attributed to","to be caused by","Their popularity can be attributed to their role in planning."],
    ["thought-provoking","making people think carefully","Group 1 asked two thought-provoking questions."],
    ["portfolio submission","a piece of work you upload to your group’s portfolio","Portfolio Submission 4 is a video response."],
    ["prompt","the instruction you type into an AI tool","A good prompt has a role, a task, requirements and instructions."],
    ["generative AI","AI that creates new text, images, audio or code","Generative AI can write a sample introduction."],
    ["academic integrity","doing the right thing honestly in your studies","Acknowledging AI tools is part of academic integrity."]
  ]
};
