/* DEC10 · Week 3 · Day 3 — Polish, present, prompt.
   Built from the Week 3 Teacher's Book, ordered by the revised weekly map (Weeks 3–4): each Day page holds the parts
   TAUGHT that weekday. Taught on WEDNESDAY: 10A Homework review AST: Digital literacy & online communication (30) ·
   11A Academic writing skills: Academic style (90) · 12A Seminar: Group 1 Seminar presentation; Opening remarks Group 2 (90) ·
   13A STAR© moment (30) · 14A AST: Digital literacy and AI Homework (60, with the "Ongoing research" reminder).
   Texts from the Teacher's Book (the research summary drafts, the email, the academic integrity text) are copied exactly.
   Activity ids are the keys of saved work — never rename them.
   Round 2 (student-centred): movement games (stand up/sit down, mingles, line-ups, corners, speed-dating circles,
   snowball, gallery walks, human sentence), group roles, "Use it" steps, phrase-of-the-day stickies and exit tickets.
   11A connected tabs (v7.6): reference folds (plain full-width text, no ‘Model’ box) — draft in b3 and b6; edited version in b7 (open),
   b5 and b8 (open after trying); the teacher's rules in b4 — so students compare without going back.
   10A quality pass (v7.4): TB homework question shown directly (no spinner); one check (the do/don't sort, no stand-up/sit-down);
   short phrase mingle, TB phrase sort, the comment thread as a model, one use, one takeaway; email with simple peer feedback.
   11A (v7.2, dec10/design/LESSON-DESIGN.md): five clear stages, shown as a chip on each activity —
   1 Lead-in b1 (three voices → register → goal → TB brainstorm) · 2 Context b2 (Sam’s draft + a reply to Sam) ·
   3 Presentation b3 rules (+ four rules before → after, certainty meter), b6 model, b7 how · 4 Practice b4 spot,
   b5 rephrase from memory, b9 choose/complete/correct (style errors only) · 5 Production b8 (TB rewrite + peer check;
   own topic as extension). Quality pass: repeated drills, duplicate line-ups, mingles, relay, gallery walk and exit
   ticket removed. Activity ids unchanged; TB texts, questions and tasks unchanged. */
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
          minutes: 9,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week3/v/v-d10w3d3-a1.svg",
          title: "Activity 1 · Online collaboration",
          goal: "Review the key rules for three online situations at university, then check them and use them in a reply.",
          blocks: [
            {
              type: "figure",
              src: "dec10/assets/week3/d3-online-comm.svg",
              size: "wide",
              alt: "Online communication has two sides: effective and appropriate conversation and discussion, and effective and appropriate collaboration. Three situations: a discussion board, an email to a lecturer, and a shared group document.",
              caption: "Three online situations you meet every week at university."
            },
            {"type":"do","n":1,"who":"group","text":"<b>Homework review.</b> What are some key things to remember when you take part in these three situations? Each person takes one situation and talks for one minute. Give one thing to <b>do</b>, one thing to <b>avoid</b> and a <b>real example</b> from your homework or your studies."},
            {"type":"model","title":"Three situations","list":["participating in a discussion board","writing an email to a lecturer","collaborating online with your group about a task"]},
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
            {"type":"do","n":2,"who":"pair","text":"<b>Check.</b> Sort the cards in 1 minute, then check. Any surprises?"},
            {"type":"tip","text":"<b>Paper cards?</b> Your teacher may give each pair a set of Do / Don’t cards. Sort them on the desk first, then check here. No cards? Use the sort on this page."},
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
            },
            {"type":"do","n":3,"who":"pair","text":"<b>Use it.</b> Student A writes a short post: <i>“Green jobs are only for engineers.”</i> Student B replies in ONE polite sentence with a <b>Disagree politely</b> phrase. Swap."}
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
          minutes: 11,
          grouping: "Class mingle → Pair",
          art: "dec10/assets/week3/v/v-d10w3d3-a2.svg",
          title: "Activity 2 · Appropriate language for online collaboration",
          goal: "Review your homework phrases, check more phrases from the Teacher’s Book, and use them in a comment thread.",
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
              title: "Phrase mingle (3 minutes)",
              items: [
                {"who":"alone","text":"Choose your <b>best</b> homework phrase."},
                {"who":"class","text":"<b>Stand up and mingle.</b> Say your phrase to a classmate. They guess its job: <b>suggest</b>, <b>disagree</b>, <b>clarify</b> or <b>praise</b>? Then swap roles. Find a new partner."}
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"<b>Beat the clock (2 minutes).</b> Here are more phrases from the Teacher’s Book. Which job does each one do? Sort them, then check. 12+ correct = gold!"},
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
              title: "The phrases in a real comment thread",
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
            {"type":"do","n":2,"who":"pair","text":"<b>Use it — comment ping-pong.</b> Student A says a sentence from their seminar notes. Student B answers with a comment phrase (suggest / clarify / praise). A answers back. Keep going for 1 minute!"},
            {
              type: "fields",
              fields: [
                {"id":"a2-fav","label":"My three favourite phrases: I will use them in my seminar group’s shared document this week","rows":3,"placeholder":"1. Could you expand on this point?\n2. …\n3. …"}
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
          minutes: 10,
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
            {"type":"do","n":1,"who":"pair","text":"<b>Be the lecturer.</b> Swap emails with your partner. Would you reply to this email? Tell the writer <b>one strength</b> and <b>one change</b>: <i>“Your request is very clear.” · “It would be more formal if …”</i>"},
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
      subtitle: "Lead-in → Context → Presentation → Practice → Production",
      outcome: "You can identify features of academic writing, and evaluate and edit your writing for features of academic style.",
      activities: [
        {
          id: "b1",
          short: "Lead-in",
          minutes: 8,
          grouping: "Pair → Class",
          category: "1 · Lead-in",
          art: "dec10/assets/week3/v/v-d10w3d3-b1.svg",
          title: "Features of academic writing",
          goal: "Notice how the same idea can sound chatty or academic, then list what makes a text academic.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"<b>Same news, three voices.</b> These three texts say the same thing. Who wrote each one? Match them (1 minute)."},
            {
              type: "match",
              id: "b1-who",
              title: "Who wrote it?",
              left: [
                "A · “omg green jobs r SO hot rn 🌱 literally everyone is getting hired lol”",
                "B · “Green jobs boom as firms race to go eco-friendly”",
                "C · “The emergence of green occupations can be attributed to stricter environmental regulations (Bawa, 2024).”"
              ],
              right: ["a friend’s text message","a news headline","a university research paper"]
            },
            {"type":"do","n":2,"who":"pair","text":"Only C could go in your research summary. <b>Find two differences</b> between A and C: which words make A chatty, and which words make C academic?"},
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
              type: "key",
              title: "Today’s goal",
              points: [
                "You will learn what makes writing academic, then use it to <b>rewrite a student’s paragraph</b>. You need this skill for your <b>research summary</b>, the <b>Integrated Writing</b> task and every university assignment.",
                "Today’s steps: <b>Lead-in</b> → <b>Context</b> (Sam’s draft) → <b>Presentation</b> (the rules and a model) → <b>Practice</b> → <b>Production</b> (your rewrite)."
              ]
            },
            {
              type: "do",
              n: 3,
              who: "pair",
              text: "<b>Brainstorm (2 minutes).</b> What are some features of academic style in writing? Some of them you have already learnt about in DEC 10 and previous courses. <b>Work together and make a list.</b>"
            },
            {"type":"tip","text":"<b>Start with text C.</b> It has a noun phrase (<i>the emergence of</i>), a cause phrase (<i>can be attributed to</i>) and a reference (<i>Bawa, 2024</i>). What else do you know from DEC10?"},
            {"type":"fields","fields":[{"id":"b1-list","label":"Our list of features of academic style","rows":6,"placeholder":"1. noun phrases / nominalisations\n2. …\n3. …"}]},
            {"type":"do","n":4,"who":"class","text":"Share one feature each. Your teacher writes the class list on the board. Keep your own list: you will check it against the teacher’s rules soon."}
          ]
        },
        {
          id: "b2",
          short: "Context",
          minutes: 6,
          grouping: "Alone → Pair",
          category: "2 · Context",
          art: "dec10/assets/week3/v/v-d10w3d3-b2.svg",
          title: "Read a research summary draft",
          goal: "Decide: is this draft written in an appropriate academic register?",
          blocks: [
            {"type":"sticky","title":"Meet Sam","text":"Sam is a DEC student. Tomorrow he must submit his research summary. Tonight he sends you his draft: “Can you read it? Is it academic enough?”","color":"yellow"},
            {"type":"do","n":1,"who":"alone","text":"<b>Read (3 minutes).</b> Read this research summary draft written by a DEC student. <b>Is it written in appropriate academic register? Why/why not?</b>"},
            {"type":"tip","text":"<b>Two words you may need:</b> <b>sustainability consultant</b>: an expert who advises companies on how to reduce their impact on the environment and society · <b>fines</b>: money you must pay as a punishment for breaking a rule or law."},
            {
              type: "passage",
              id: "b2-draft",
              title: "Research Summary (Draft)",
              text: "(1) The job market is really changing, and one of the great new trends is that there are more sustainability consultants. (2) Sustainability consultants are stepping into the spotlight, helping companies that want to be more eco-friendly and follow the rules about the environment. (3) They help businesses figure out how to use resources wisely. (4) And they teach them how to take care of the planet while still making a profit. (5) Why are they becoming so popular? (6) I think sustainability consultants do a lot to help companies plan for the future. (7) This isn't just about avoiding fines or negative press. (8) It's about being responsible for their environmental and social impact. (9) As we all know, everyone from tech firms to banks, can see the value of bringing sustainability into the mix. (10) As Holt says, this trend towards a workforce that cares about both making money and making a difference is signalling a shift in how businesses operate (Holt, 2023). (11) So, moving forward, companies will definitely continue to put sustainability at the top of their list."
            },
            {"type":"do","n":2,"who":"pair","text":"Compare your answers. Then write a short reply to Sam: one thing that is good and <b>two problems</b>, each with a sentence number."},
            {
              type: "language",
              title: "Reply to Sam",
              groups: [
                {"label":"Be kind, then be specific","phrases":["<b>On the positive side</b>, your ideas are …","<b>However</b>, sentence (5) <b>sounds too</b> informal <b>because</b> …","<b>It reads more like</b> spoken English / a blog post."]}
              ]
            },
            {"type":"fields","fields":[{"id":"b2-reply","label":"My reply to Sam","rows":3,"placeholder":"On the positive side, your ideas are clear. However, sentence (5) is a question, and …"}]}
          ]
        },
        {
          id: "b3",
          short: "The rules",
          minutes: 10,
          grouping: "Pair → Class",
          category: "3 · Presentation",
          art: "dec10/assets/week3/v/v-d10w3d3-b3.svg",
          title: "Teacher feedback on the draft",
          goal: "Learn the teacher’s rules of academic style, and understand the four that need a closer look.",
          blocks: [
            {"type":"sticky","title":"Sam’s teacher replies …","text":"Sam also sent his draft to his teacher. Here is the feedback. These points are today’s rules of academic style.","color":"yellow"},
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Look at the feedback that the student received from their teacher on their draft. How many of the feedback points did you identify earlier? Which ones have you not heard before?"
            },
            {"type":"tip","text":"Tick the points on your list from the Lead-in and in your reply to Sam. Circle the ones that are new for you."},
            {
              type: "toggle",
              title: "Sam’s first draft",
              hint: "Open to find each point in the draft",
              ref: true,
              blocks: [
                {
                  type: "text",
                  title: "Research Summary (Draft)",
                  text: "(1) The job market is really changing, and one of the great new trends is that there are more sustainability consultants. (2) Sustainability consultants are stepping into the spotlight, helping companies that want to be more eco-friendly and follow the rules about the environment. (3) They help businesses figure out how to use resources wisely. (4) And they teach them how to take care of the planet while still making a profit. (5) Why are they becoming so popular? (6) I think sustainability consultants do a lot to help companies plan for the future. (7) This isn't just about avoiding fines or negative press. (8) It's about being responsible for their environmental and social impact. (9) As we all know, everyone from tech firms to banks, can see the value of bringing sustainability into the mix. (10) As Holt says, this trend towards a workforce that cares about both making money and making a difference is signalling a shift in how businesses operate (Holt, 2023). (11) So, moving forward, companies will definitely continue to put sustainability at the top of their list."
                }
              ]
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
            {"type":"do","n":2,"who":"pair","text":"<b>Four rules need a closer look.</b> Read each <i>before → after</i> example and tap it to see the rule. Then cover the <i>after</i> sentence and say it from memory."},
            {
              type: "pairs",
              title: "Four rules, before and after",
              items: [
                {"from":"Companies are using resources more efficiently, and this saves them money.","to":"[[The more efficient use of resources]] saves companies money.","tag":"Nominalisation: turn a verb or a clause into a noun phrase.","note":"Noun phrases carry more information in fewer words and sound more objective."},
                {"from":"Green jobs will definitely grow in the next ten years.","to":"Green jobs [[are likely to]] grow in the next ten years.","tag":"Hedging: show the right level of certainty.","note":"Use <i>may, might, is likely to, tends to, it is possible that</i>. Avoid <i>definitely, always, never, everyone</i>."},
                {"from":"Sustainability consultants are in demand. Sustainability consultants help companies follow environmental laws.","to":"Sustainability consultants are in demand. [[These experts]] help companies comply with environmental laws.","tag":"A summary noun (general noun) avoids repetition.","note":"Other examples: <i>these professionals, this trend, this approach</i>."},
                {"from":"I think green skills are becoming more important.","to":"[[Green skills appear to be]] becoming increasingly important.","tag":"Impersonal style: no ‘I’ or ‘we’. Let the evidence speak.","note":"Other options: <i>Evidence suggests that …, It could be argued that …</i>"}
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
              type: "talk",
              prompts: ["Which point is the hardest for you in your own writing? Why?"]
            }
          ]
        },
        {
          id: "b6",
          short: "The model",
          minutes: 8,
          grouping: "Pair",
          category: "3 · Presentation",
          art: "dec10/assets/week3/v/v-d10w3d3-b6.svg",
          title: "The edited version",
          goal: "Read Sam’s second try and see the five tips he used to make it academic.",
          blocks: [
            {"type":"sticky","title":"Sam’s second try","text":"Sam used the teacher’s feedback and rewrote his paragraph. This is your model: see how each informal phrase became academic.","color":"green"},
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Read the student’s rewrite of the paragraph in a more academic style. Identify the phrases the student has used to replace the informal language."
            },
            {
              type: "toggle",
              title: "Sam’s first draft",
              hint: "Open to compare it with the edited version below",
              ref: true,
              blocks: [
                {
                  type: "text",
                  title: "Research Summary (Draft)",
                  text: "(1) The job market is really changing, and one of the great new trends is that there are more sustainability consultants. (2) Sustainability consultants are stepping into the spotlight, helping companies that want to be more eco-friendly and follow the rules about the environment. (3) They help businesses figure out how to use resources wisely. (4) And they teach them how to take care of the planet while still making a profit. (5) Why are they becoming so popular? (6) I think sustainability consultants do a lot to help companies plan for the future. (7) This isn't just about avoiding fines or negative press. (8) It's about being responsible for their environmental and social impact. (9) As we all know, everyone from tech firms to banks, can see the value of bringing sustainability into the mix. (10) As Holt says, this trend towards a workforce that cares about both making money and making a difference is signalling a shift in how businesses operate (Holt, 2023). (11) So, moving forward, companies will definitely continue to put sustainability at the top of their list."
                }
              ]
            },
            {
              type: "passage",
              id: "b6-edit",
              title: "Research Summary (Edited)",
              text: "(1) The employment landscape is undergoing significant transformation with the emergence of sustainability consultants. (2) The demand for these experts has grown substantially in the last two years as they assist corporations in adhering to environmental regulations and adopting eco-friendly practices (Bawa, 2024). (3) They guide businesses on the efficient utilization of resources and instilling practices that balance environmental conservation with profitability. (4) The rising popularity of sustainability consultants can be attributed to their pivotal role in planning for long-term environmental, legal and social responsibilities. (5) A diverse range of industries, from technology to financial services, is recognizing the importance of integrating sustainable practices into their commercial operations. (6) Holt (2023) claims that this trend towards a workforce that values both financial success and positive societal impact signals a shift in how businesses operate. (7) It is likely that sustainability will remain a priority for organisations, continuing to shape corporate strategies and operations."
            },
            {"type":"do","n":2,"who":"pair","text":"<b>Eight key changes.</b> Which tip did Sam use for each change? Sort them, then check. These tips are what you will use in your own writing."},
            {
              type: "sort",
              id: "b6-tips",
              title: "Which tip is it?",
              buckets: [
                {"label":"Use a noun phrase","letter":"1"},
                {"label":"Use a precise verb (not a phrasal verb or chatty phrase)","letter":"2"},
                {"label":"Hedge: show the right level of certainty","letter":"3"},
                {"label":"Use a summary noun, not repetition","letter":"4"},
                {"label":"Use a reporting verb with the source","letter":"5"}
              ],
              items: [
                {"text":"there are more sustainability consultants → <b>the emergence of sustainability consultants</b>","answer":0},
                {"text":"how to use resources wisely → <b>the efficient utilization of resources</b>","answer":0},
                {"text":"follow the rules about the environment → <b>adhere to environmental regulations</b>","answer":1},
                {"text":"help businesses figure out → <b>guide businesses on</b>","answer":1},
                {"text":"cares about → <b>values</b>","answer":1},
                {"text":"companies will definitely continue to … → <b>It is likely that sustainability will remain …</b>","answer":2},
                {"text":"Sustainability consultants … Sustainability consultants … → <b>Sustainability consultants … these experts …</b>","answer":3},
                {"text":"As Holt says, … (Holt, 2023) → <b>Holt (2023) claims that …</b>","answer":4}
              ]
            },
            {"type":"tip","text":"Sam’s vocabulary is very advanced. You do not need words like <i>utilization</i> or <i>pivotal</i>: <i>the efficient use of resources</i> is just as academic. Learn the <b>tips</b>, not every word."}
          ]
        },
        {
          id: "b7",
          short: "How?",
          minutes: 7,
          grouping: "Pair",
          category: "3 · Presentation",
          art: "dec10/assets/week3/v/v-d10w3d3-b7.svg",
          title: "Questions about the edited version",
          goal: "See HOW the writer made the paragraph academic.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Answer these questions about the edited version of the Research Summary."},
            {
              type: "toggle",
              title: "Sam’s edited version",
              hint: "Read it while you answer the questions",
              open: true,
              ref: true,
              blocks: [
                {
                  type: "text",
                  title: "Research Summary (Edited)",
                  text: "(1) The employment landscape is undergoing significant transformation with the emergence of sustainability consultants. (2) The demand for these experts has grown substantially in the last two years as they assist corporations in adhering to environmental regulations and adopting eco-friendly practices (Bawa, 2024). (3) They guide businesses on the efficient utilization of resources and instilling practices that balance environmental conservation with profitability. (4) The rising popularity of sustainability consultants can be attributed to their pivotal role in planning for long-term environmental, legal and social responsibilities. (5) A diverse range of industries, from technology to financial services, is recognizing the importance of integrating sustainable practices into their commercial operations. (6) Holt (2023) claims that this trend towards a workforce that values both financial success and positive societal impact signals a shift in how businesses operate. (7) It is likely that sustainability will remain a priority for organisations, continuing to shape corporate strategies and operations."
                }
              ]
            },
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
            }
          ]
        },
        {
          id: "b4",
          short: "Spot it",
          minutes: 10,
          grouping: "Pair",
          category: "4 · Practice",
          art: "dec10/assets/week3/v/v-d10w3d3-b4.svg",
          title: "Find examples in the draft",
          goal: "Find the teacher’s points in the student’s writing.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"<b>Pair race.</b> Look again at the student draft of their research summary. Find examples of the teacher’s points in the student’s writing. Tap the phrases, then check. All 10 right? <b>Stand up!</b> The first three pairs standing win a team point."},
            {
              type: "toggle",
              title: "The teacher’s rules",
              hint: "Open to check what you are looking for",
              ref: true,
              blocks: [
                {
                  type: "text",
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
                }
              ]
            },
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
            {"type":"do","n":2,"who":"pair","text":"<b>Round 2 — same race.</b> Sit down first! Now find the informal vocabulary."},
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
          minutes: 10,
          grouping: "Pair",
          category: "4 · Practice",
          art: "dec10/assets/week3/v/v-d10w3d3-b5.svg",
          title: "Vocabulary analysis",
          goal: "Use the tips: rewrite eight informal phrases in academic style from memory, then check.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "pair",
              text: "Look at the eight informal phrases from Sam’s draft. How could you rewrite them in a more academic style? Use the tips. Write your ideas in the middle column <b>from memory</b>. Then open Sam’s edited version, check, and write his phrase in the last column."
            },
            {
              type: "toggle",
              title: "Sam’s edited version",
              hint: "Open only after you try: check and fill in the last column",
              ref: true,
              blocks: [
                {
                  type: "text",
                  title: "Research Summary (Edited)",
                  text: "(1) The employment landscape is undergoing significant transformation with the emergence of sustainability consultants. (2) The demand for these experts has grown substantially in the last two years as they assist corporations in adhering to environmental regulations and adopting eco-friendly practices (Bawa, 2024). (3) They guide businesses on the efficient utilization of resources and instilling practices that balance environmental conservation with profitability. (4) The rising popularity of sustainability consultants can be attributed to their pivotal role in planning for long-term environmental, legal and social responsibilities. (5) A diverse range of industries, from technology to financial services, is recognizing the importance of integrating sustainable practices into their commercial operations. (6) Holt (2023) claims that this trend towards a workforce that values both financial success and positive societal impact signals a shift in how businesses operate. (7) It is likely that sustainability will remain a priority for organisations, continuing to shape corporate strategies and operations."
                }
              ]
            },
            {"type":"tip","text":"Your version does not need to be as advanced as Sam’s. <i>The efficient use of resources</i> or <i>companies are likely to …</i> are good academic answers."},
            {
              type: "table",
              id: "b5-tab8",
              title: "Informal language → academic language",
              columns: ["Informal language","My academic version","Sam’s version (check after)"],
              fixed: [
                "1. there are more sustainability consultants",
                "2. how to use resources wisely",
                "3. follow the rules about the environment",
                "4. help businesses figure out",
                "5. cares about",
                "6. companies will definitely continue to …",
                "7. Sustainability consultants … Sustainability consultants …",
                "8. As Holt says, … (Holt, 2023)"
              ]
            }
          ]
        },
        {
          id: "b9",
          short: "Practise",
          minutes: 15,
          grouping: "Alone → Pair",
          category: "4 · Practice",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Practise: choose, complete, correct",
          goal: "Use the academic words from the edited version in new sentences about green jobs. First recognise them, then use them, then find the mistakes.",
          blocks: [
            {
              type: "key",
              title: "Words that make it academic",
              points: [
                "Many words in the edited version are on the <b>Academic Word List</b>: they appear in university texts in every subject. Learn each one with its <b>family</b> (verb → noun) and its <b>collocations</b>."
              ]
            },
            {
              type: "language",
              title: "Eight words to keep",
              groups: [
                {"label":"Verb → noun","phrases":["transform → <b>transformation</b>","emerge → <b>emergence</b>","regulate → <b>regulation</b>","utilise → <b>utilisation</b>","conserve → <b>conservation</b>","integrate → <b>integration</b>","prioritise → <b>priority</b>","finance → <b>financial</b> (adjective)"]},
                {"label":"Collocations from the edited version","phrases":["<b>undergo</b> (a) significant <b>transformation</b>","<b>adhere to / comply with</b> environmental <b>regulations</b>","the efficient <b>utilisation of</b> resources","the <b>integration of</b> X <b>into</b> Y","<b>remain a priority</b> for organisations"]},
                {"label":"Cause and certainty (Essay Activator)","phrases":["X <b>can be attributed to</b> Y · X <b>is largely due to</b> Y","<b>It is likely that</b> … · X <b>is likely to</b> …","Holt (2023) <b>argues / suggests that</b> …"]}
              ]
            },
            {"type":"part","n":1,"title":"Choose","goal":"Can you recognise the academic option?"},
            {"type":"do","n":1,"who":"alone","text":"Choose the option that is <b>most appropriate for academic writing</b>. Then compare with a partner. Do not check until you agree."},
            {
              type: "quiz",
              id: "b9-quiz",
              items: [
                {"q":"1. The number of green jobs ___ over the last five years.","options":["has really gone up","has increased substantially","has grown a lot"],"answer":"has increased substantially","why":"A precise verb with a formal adverb. ‘Really’ and ‘a lot’ are informal, and ‘go up’ is a phrasal verb."},
                {"q":"2. Many companies now employ consultants to help them ___ environmental regulations.","options":["stick to","follow the rules about","adhere to"],"answer":"adhere to","why":"‘Adhere to’ (or ‘comply with’) is the formal verb. ‘Stick to’ is a phrasal verb, and ‘follow the rules about’ is vague."},
                {"q":"3. The ___ of renewable energy has created new roles in engineering.","options":["emergence","emerge","emerging"],"answer":"emergence","why":"After ‘The … of’ you need a noun. This is nominalisation."},
                {"q":"4. Consultants advise firms on the efficient ___ of water and energy.","options":["utilise","utilisation","utilised"],"answer":"utilisation","why":"A noun is needed after ‘the efficient … of’."},
                {"q":"5. The growth in sustainability roles ___ stricter environmental laws.","options":["can be attributed to","is because of","happens because"],"answer":"can be attributed to","why":"Essay Activator, Causes: ‘can be attributed to’ connects a result to its cause in a formal way."},
                {"q":"6. ___ industries, from technology to finance, now employ sustainability specialists.","options":["Loads of","A diverse range of","A lot of"],"answer":"A diverse range of","why":"‘Loads of’ and ‘a lot of’ belong in speech. ‘A diverse range of’ is precise and academic."},
                {"q":"7. ___ demand for these professionals will continue to grow.","options":["It is likely that","Everyone knows that","It is definitely true that"],"answer":"It is likely that","why":"Hedging: academic writers show caution. ‘Everyone knows’ and ‘definitely’ are too certain."},
                {"q":"8. Holt (2023) ___ that businesses are changing how they operate.","options":["thinks","argues","says"],"answer":"argues","why":"A reporting verb that shows the writer’s position. ‘Thinks’ and ‘says’ are too general for academic writing."}
              ]
            },
            {"type":"part","n":2,"title":"Complete","goal":"Can you use the words in a new text?"},
            {"type":"do","n":2,"who":"alone","text":"Read about another green job. Complete each gap with a word from the box. There are <b>two extra words</b> you do not need."},
            {
              type: "cloze",
              id: "b9-gap",
              title: "Renewable energy technicians",
              options: ["transformation","emergence","regulations","attributed","integration","priority","financial","likely","conservation","utilise"],
              text: "The energy sector is undergoing a significant {{1}}. One clear sign of this is the {{2}} of new roles such as solar and wind technicians. Governments have introduced stricter environmental {{3}}, so companies now need staff who understand them. The growth in these jobs can be {{4}} to the falling cost of renewable technology. In addition, the {{5}} of clean energy into existing power networks requires specialist skills. For many firms, reducing emissions has become a {{6}}, not only for environmental reasons but also for {{7}} ones. It is {{8}} that demand for these workers will continue to rise.",
              answers: ["transformation","emergence","regulations","attributed","integration","priority","financial","likely"],
              why: ["undergo a significant <b>transformation</b>: a noun after ‘a significant’.","the <b>emergence</b> of new roles: something new appears.","environmental <b>regulations</b>: official rules (plural noun).","can be <b>attributed</b> to: cause and effect.","the <b>integration</b> of X into Y: a noun after ‘the’.","become a <b>priority</b>: something very important.","<b>financial</b> reasons: an adjective before the noun ‘ones’ (reasons).","It is <b>likely</b> that …: hedging."]
            },
            {"type":"part","n":3,"title":"Correct","goal":"Can you find the style problem before your reader does?"},
            {"type":"do","n":3,"who":"pair","text":"Each sentence has <b>one</b> feature that is not academic. Find it and write the sentence again in academic style. Student A does 1–3, Student B does 4–6. Then explain your corrections to each other."},
            {"type":"tip","text":"<b>Short on time?</b> Do Parts 1 and 2 in class and finish Part 3 for homework."},
            {
              type: "rewrite",
              id: "b9-fix",
              title: "Find the problem and correct it",
              hint: "Change only the part that is not academic. The rest of the sentence stays the same.",
              items: [
                {"q":"Companies don’t always comply with environmental regulations.","accept":["Companies do not always comply with environmental regulations."],"model":"Companies do not always comply with environmental regulations.","why":"No contractions in academic writing."},
                {"q":"I think green skills are becoming more important.","accept":["Green skills are becoming more important.","Green skills appear to be becoming more important.","Green skills seem to be becoming more important.","It appears that green skills are becoming more important.","Evidence suggests that green skills are becoming more important."],"model":"Green skills appear to be becoming more important.","why":"Impersonal style: no ‘I think’. Use a hedge such as <i>appear to</i> or <i>Evidence suggests that</i>."},
                {"q":"There are a lot of new jobs in renewable energy.","accept":["There are many new jobs in renewable energy.","There are numerous new jobs in renewable energy.","There are a large number of new jobs in renewable energy.","There are a significant number of new jobs in renewable energy."],"model":"There are a significant number of new jobs in renewable energy.","why":"<i>A lot of</i> belongs in speech. Use <i>many, numerous</i> or <i>a significant number of</i>."},
                {"q":"So, the role of sustainability consultants is likely to grow.","accept":["Therefore, the role of sustainability consultants is likely to grow.","As a result, the role of sustainability consultants is likely to grow.","Consequently, the role of sustainability consultants is likely to grow."],"model":"Therefore, the role of sustainability consultants is likely to grow.","why":"Do not start a sentence with <i>So</i>, <i>And</i> or <i>But</i>. Use <i>Therefore</i>, <i>As a result</i> or <i>Consequently</i>."},
                {"q":"Green jobs will definitely grow in the next decade.","accept":["Green jobs are likely to grow in the next decade.","It is likely that green jobs will grow in the next decade.","Green jobs may grow in the next decade.","Green jobs will likely grow in the next decade."],"model":"Green jobs are likely to grow in the next decade.","why":"<i>Definitely</i> is too certain. Hedge with <i>are likely to</i>, <i>may</i> or <i>It is likely that</i>."},
                {"q":"Holt (2023) argues that businesses must figure out how to reduce waste.","accept":["Holt (2023) argues that businesses must determine how to reduce waste.","Holt (2023) argues that businesses must identify how to reduce waste.","Holt (2023) argues that businesses must establish how to reduce waste."],"model":"Holt (2023) argues that businesses must determine how to reduce waste.","why":"<i>Figure out</i> is a phrasal verb from speech. Use a precise verb: <i>determine</i>, <i>identify</i> or <i>establish</i>."}
              ]
            }
          ],
          answers: {
            title: "Answers",
            items: [
              ["Part 1 · Choose","1 has increased substantially · 2 adhere to · 3 emergence · 4 utilisation · 5 can be attributed to · 6 A diverse range of · 7 It is likely that · 8 argues"],
              ["Part 2 · Complete","1 transformation · 2 emergence · 3 regulations · 4 attributed · 5 integration · 6 priority · 7 financial · 8 likely (extra words: conservation, utilise)"],
              ["Part 3 · Correct","1 do not · 2 no ‘I think’: Green skills appear to be … · 3 a significant number of / many · 4 Therefore, · 5 are likely to grow · 6 determine"]
            ]
          }
        },
        {
          id: "b8",
          short: "Rewrite",
          minutes: 16,
          grouping: "Alone → Pair",
          category: "5 · Production",
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
              ref: true,
              blocks: [
                {
                  type: "text",
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
              type: "toggle",
              title: "Sam’s edited version",
              hint: "Open only after you write: compare with your version",
              ref: true,
              blocks: [
                {
                  type: "text",
                  title: "Research Summary (Edited)",
                  text: "(1) The employment landscape is undergoing significant transformation with the emergence of sustainability consultants. (2) The demand for these experts has grown substantially in the last two years as they assist corporations in adhering to environmental regulations and adopting eco-friendly practices (Bawa, 2024). (3) They guide businesses on the efficient utilization of resources and instilling practices that balance environmental conservation with profitability. (4) The rising popularity of sustainability consultants can be attributed to their pivotal role in planning for long-term environmental, legal and social responsibilities. (5) A diverse range of industries, from technology to financial services, is recognizing the importance of integrating sustainable practices into their commercial operations. (6) Holt (2023) claims that this trend towards a workforce that values both financial success and positive societal impact signals a shift in how businesses operate. (7) It is likely that sustainability will remain a priority for organisations, continuing to shape corporate strategies and operations."
                }
              ]
            },
            {
              type: "steps",
              items: [
                {"who":"alone","text":"When you finish, open <b>Sam’s edited version</b> above and compare. Underline one thing you did well."},
                {"who":"pair","text":"<b>Peer check.</b> Swap with a partner. You are the <b>language monitor</b>: tick the checklist for <b>their</b> paragraph."}
              ]
            },
            {
              type: "checklist",
              id: "b8-peer",
              title: "Language monitor checklist (for your partner’s paragraph)",
              items: [
                "At least two noun phrases (the emergence of …, the efficient use of …)",
                "A summary noun instead of repeating (these experts …)",
                "Hedging (it is likely that … / may / tends to)",
                "Holt (2023) with a reporting verb",
                "No contractions, no ‘I’, no question, no ‘And/So’ at the start",
                "A cause (can be attributed to … / is largely due to …)"
              ]
            },
            {
              type: "language",
              title: "Peer check: give feedback",
              groups: [
                {"label":"Explain your changes","phrases":["<b>I replaced</b> “…” <b>with</b> “…” <b>because</b> …","<b>I combined</b> sentences … and … <b>by</b> using …","<b>I added hedging</b>: “it is likely that …”."]},
                {"label":"Respond to a partner","phrases":["<b>That sounds much more academic.</b>","<b>Could you make</b> this part <b>more precise</b>?","<b>Maybe</b> use a noun phrase <b>here</b>?"]}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"<b>Extension (fast finishers or homework).</b> Use the same language in <b>your own</b> writing: 5–6 sentences about your group’s research summary topic. Say what is changing, <b>why</b>, and what is <b>likely</b> to happen next. It can become the opening of your presentation."},
            {
              type: "language",
              title: "Frames for your paragraph",
              groups: [
                {"label":"What is changing","phrases":["<b>The emergence of</b> … <b>is transforming</b> …","<b>There has been a significant increase in</b> the demand for …"]},
                {"label":"Why (cause)","phrases":["<b>This growth can be attributed to</b> …","<b>This is largely due to</b> …"]},
                {"label":"What next (hedging)","phrases":["<b>It is likely that</b> … will remain a priority for …","… <b>may</b> / <b>are likely to</b> …"]},
                {"label":"Use a source","phrases":["X (2024) <b>argues / suggests / reports that</b> …","<b>According to</b> X (2024), …"]}
              ]
            },
            {
              type: "detect",
              id: "b8-own",
              label: "Writing studio",
              title: "My paragraph: my research summary topic",
              hint: "Green lights turn on for academic features. Red lights show informal language that is still there. Aim for at least four green lights.",
              checks: [
                {"label":"Noun phrases","color":"#3a58a0","any":["the emergence of","the rise of","the growth in","transformation","utilisation","utilization","the demand for","integration","an increase in"]},
                {"label":"Cause","color":"#8a4f9e","any":["attributed to","due to","as a result of","result in","lead to","leads to","contribute to"]},
                {"label":"Precise vocabulary","color":"#2f7d6b","any":["adhere","comply","regulation","integrat","recognis","recogniz","financial","conservation","priority","diverse"]},
                {"label":"Hedging","color":"#b07d12","any":["it is likely","likely to","/\\bmay\\b/","/\\bmight\\b/","tends to","/\\bcould\\b/"]},
                {"label":"Reporting verb","color":"#c4562f","any":["/\\(\\d{4}\\) (claims|argues|states|suggests|notes|explains|reports|points out|found)/","according to"]}
              ],
              avoid: [
                {"label":"Contraction","any":["/\\b\\w+n['’]t\\b/","/\\bit['’]s\\b/"]},
                {"label":"‘I’ / ‘we’","any":["/\\bI\\b/u","/\\bwe\\b/","/\\bour\\b/"]},
                {"label":"Too certain","any":["definitely","really","as we all know","everyone knows"]},
                {"label":"Phrasal verb / idiom","any":["figure out","take care of","a lot","go up","into the mix","top of their list"]},
                {"label":"And / So / But first","any":["/(^|[.!?]\\s+)(And|So|But)\\b/u"]},
                {"label":"‘researches’","any":["researches"]}
              ],
              items: [{"task":"Write 5–6 sentences about your group’s research summary topic.","rows":10,"placeholder":"The emergence of … is transforming … This growth can be attributed to … It is likely that …"}]
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
            {"type":"do","n":1,"who":"class","text":"<b>Stand up if it’s your job!</b> Your teacher reads each card below. Group 1: stand up if it is <b>your</b> job. Everyone else: stand up if it is <b>yours</b>. Then sort the cards to check."},
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
                    {"type":"do","n":1,"who":"group","text":"<b>Before Group 1 starts: share the listening jobs</b> in your seminar group. Each person listens for <b>one</b> thing — so your group feedback covers everything."},
                    {
                      type: "cards",
                      title: "Listening jobs",
                      items: [
                        {"label":"Content detective","text":"What is their focus? Is it clear why they chose it?","icon":"search"},
                        {"label":"Source checker","text":"Which sources (author, year) do they name?","icon":"link"},
                        {"label":"Delivery coach","text":"Voice, eye contact, slides, timing (10–12 min).","icon":"flag"},
                        {"label":"Language monitor","text":"Tick useful phrases you hear: “According to …”, “This suggests that …”.","icon":"pen"}
                      ]
                    },
                    {"type":"tip","text":"<b>Paper job cards?</b> Your teacher may give your group four job cards — take one each and write your notes on it. No cards? Choose a job from the cards above and use the notes table below."},
                    {"type":"do","n":2,"who":"alone","text":"Listen to the Seminar Presentation. Take short notes — mostly for <b>your job</b>. In the last column, note a <b>strength</b> or an <b>action</b> for the group’s feedback."},
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
            {"type":"tip","text":"<b>Paper role cards?</b> Your teacher may give your group role cards and a language monitor slip. Deal the cards face down — one each. No cards? Spin the wheel above and use the checklist below."},
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
                    {"type":"fields","fields":[{"id":"c3-q1","label":"Question 1 — our main ideas","rows":3},{"id":"c3-q2","label":"Question 2 — our main ideas","rows":3}]},
                    {
                      type: "checklist",
                      id: "c3-mon",
                      title: "Language monitor: tick each move when you hear it in your group",
                      meter: ["moves","Great discussion!"],
                      items: ["Start: “For me, the key issue is …”","Build on: “Building on what … said, …”","Disagree politely: “I see your point, but …”","Ask: “Could you give an example?”","Include: “What do you think, …?”","Sum up: “So, we seem to agree that …”"]
                    }
                  ]
                },
                {
                  label: "Group 1 presenter",
                  blocks: [
                    {"type":"table","id":"c3-g1","live":true,"title":"The group I listened to","columns":["Question","Main points","Agree / disagree?","One interesting idea"],"fixed":["Question 1","Question 2"]}
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
              type: "steps",
              title: "Feedback team roles (rotate from last time!)",
              items: [
                {"who":"group","text":"<b>Chair:</b> reads each line of the form aloud and asks <i>“Yes, Mostly or Needs work?”</i>"},
                {"who":"group","text":"<b>Scribe:</b> fills in the form. <b>Timekeeper:</b> 6 minutes for the whole form."},
                {"who":"group","text":"<b>Devil’s advocate:</b> checks every comment — <i>“Is that fair? What is our evidence?”</i>"},
                {"who":"group","text":"<b>Reporter:</b> the ONE person who uploads your feedback to Group 1’s Portfolio today."}
              ]
            },
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
            {"type":"do","n":2,"who":"class","text":"<b>Silent signal:</b> when Group 2 moves to a new part, show <b>1</b>, <b>2</b> or <b>3</b> fingers on your desk. Can you hear the signposts?"},
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
                        {"who":"alone","text":"<b>Question snowball.</b> On a piece of paper, write <b>one</b> question you would like the group to answer about the problem they talked about (a gap in your knowledge). Make it into a paper ball."},
                        {"who":"group","text":"<b>Stand up.</b> Throw your ball <b>gently</b> into the middle of your group. Everyone picks up a different ball and reads the question aloud."},
                        {"who":"group","text":"Choose the best one or two questions (use the coin bet below to test them)."},
                        {"who":"group","text":"Post your group’s reactions and questions to the Discussion Board. Do this IN CLASS and do ONE POST PER GROUP."}
                      ]
                    },
                    {
                      type: "figure",
                      src: "dec10/assets/week3/d3-move-snowball.svg",
                      size: "wide",
                      alt: "Question snowball: each student writes one question for Group 2 on paper, makes a paper ball and throws it gently into the middle. Everyone picks up one ball, opens it and reads the question aloud. The group chooses the best two questions to post.",
                      caption: "Write, throw gently, pick up, read aloud, choose the best two."
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
            {
              type: "steps",
              title: "Hot seat: Group 2 (5 minutes)",
              items: [
                {"who":"class","text":"Group 2 sits on chairs at the front — the <b>hot seats</b>."},
                {"who":"alone","text":"Everyone else: ask Group 2 <b>one</b> question about their plan. <i>“What will you do first?” · “When will you submit Portfolio Submission 1?” · “How many questions will you choose from the Discussion Board?”</i>"},
                {"who":"group","text":"Group 2 answers — any member can answer, but everyone must answer at least once!"},
                {"who":"class","text":"Wrong answer? The class helps: <i>“Actually, I think you need to … before …”</i>"}
              ]
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
            {"type":"do","n":2,"who":"pair","text":"<b>Teach-back in 60 seconds.</b> Look at the relay. Explain to your partner what happens in Week 4 — and what YOUR group does next."},
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
              type: "toggle",
              title: "Want more? Revise in the app",
              hint: "Optional",
              blocks: [
                {
                  type: "cards",
                  title: "Revise in the app",
                  items: [
                    {"label":"W2 D3","text":"<a href=\"#/d10w2d3/opening\">Making Seminar Discussion Questions</a>"},
                    {"label":"W1 D2","text":"<a href=\"#/d10w1d2/seminar\">Introduction to Seminar and Interactive Presentation</a>"}
                  ]
                }
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
              type: "steps",
              title: "Group line-up (2 minutes)",
              items: [
                {"who":"group","text":"<b>Stand up</b> with your seminar group. Make a short line: one end is “Our group works <b>very well</b>”, the other end is “<b>Not yet</b>”. Stand where you think your group is."},
                {"who":"group","text":"Each person says <b>why</b> in one sentence. Then sit down and discuss the questions below. The <b>chair</b> asks the questions; the <b>reporter</b> gets ready to tell the class."}
              ]
            },
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
            {"type":"do","n":1,"who":"group","text":"<b>Move your chairs</b> so you sit with your seminar group. Decide one task for each person before you leave."},
            {"type":"tip","text":"<b>After class:</b> Remember to continue your research for your group’s seminar topic and final Interactive Presentation Assessment."},
            {"type":"sticky","title":"Say it like an academic","text":"“Building on what Mia said, …” — the easiest way to join any discussion.","color":"pink"},
            {"type":"fields","fields":[{"id":"c9-exit","label":"Exit ticket · one discussion move I used today + one I will try next time","rows":2,"placeholder":"Today I used “I see your point, but …”. Next time I will try …"}]}
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
            {"type":"sticky","title":"In one line","text":"A STAR moment = <b>your</b> questions + <b>your</b> language needs. You choose — your teacher helps.","color":"yellow"},
            {
              type: "steps",
              title: "Warm-up · Stand up if … (2 minutes)",
              items: [
                {"who":"class","text":"Your teacher reads sentences. <b>Stand up</b> if it is true for you. Sit down before the next one."},
                {"who":"class","text":"<i>Stand up if … you used a new phrase this week · you still find hedging hard · you wrote an email to a lecturer · you are nervous about tomorrow’s presentation · you have a question about the Seminar.</i>"},
                {"who":"class","text":"Look around: you are not the only one!"}
              ]
            },
            {
              type: "toggle",
              title: "Want more? Read about Teachable STAR moments",
              hint: "Optional",
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
            }
          ]
        },
        {
          id: "s2",
          short: "My needs",
          minutes: 8,
          grouping: "Class → Alone",
          art: "dec10/assets/week3/v/v-d10w3d3-s2.svg",
          title: "Reflect on your learning needs",
          goal: "What has gone well this week so far? What do you still need help with?",
          blocks: [
            {
              type: "steps",
              title: "Three corners (4 minutes)",
              items: [
                {"who":"class","text":"Three corners of the room: <b>“I’m confident”</b> · <b>“Getting there”</b> · <b>“I need help”</b>."},
                {"who":"class","text":"Your teacher names a topic from the list below (e.g. <i>hedging</i>). <b>Walk to your corner.</b>"},
                {"who":"pair","text":"Tell someone in your corner <b>why</b> you are there in one sentence. People in the “confident” corner: go and help someone in the “I need help” corner for 30 seconds!"}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-move-corners.svg",
              size: "wide",
              alt: "Three corners: the teacher names a topic, for example hedging. Walk to a corner: “I’m confident”, “Getting there” or “I need help”. Students in the confident corner help students in the help corner.",
              caption: "Walk to your corner. Confident? Help someone."
            },
            {"type":"do","n":1,"who":"alone","text":"Back at your desk: record how you feel about each topic. Then write your top two needs."},
            {"type":"tip","text":"<b>Paper slip?</b> Your teacher may give you a “My learning needs” slip. Fill it in and hand it to your teacher. No slip? Use the grid and boxes below — your teacher can read your answers."},
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
            {"type":"do","n":2,"who":"class","text":"<b>Vote with your feet.</b> Your teacher puts the four topics in four corners. Walk to your choice. The biggest group wins! One person from each corner tells the teacher the group’s question. Your teacher will use them for the rest of the STAR moment."}
          ]
        },
        {
          id: "s4",
          short: "Quick check",
          minutes: 8,
          grouping: "Speed-dating circles",
          art: "dec10/assets/week3/v/v-d10w3d3-s4.svg",
          title: "Spin and explain",
          goal: "Show what you know — and find out what you need to review.",
          blocks: [
            {
              type: "steps",
              title: "Speed-dating circles",
              items: [
                {"who":"class","text":"Make two circles: the <b>inner circle</b> faces out, the <b>outer circle</b> faces in. Everyone has a partner."},
                {"who":"pair","text":"Spin both reels on one phone. Do the task in <b>30 seconds</b>. Your partner spins and does a new task. (2 minutes)"},
                {"who":"class","text":"Teacher says “Move!” — the <b>outer circle</b> moves one person to the right. New partner, new spin. Three rounds."},
                {"who":"alone","text":"Couldn’t do a task? That’s useful! Add it to your learning needs."}
              ]
            },
            {
              type: "figure",
              src: "dec10/assets/week3/d3-move-circle.svg",
              size: "wide",
              alt: "Speed-dating circles seen from above: an inner circle faces an outer circle in pairs. After two minutes the outer circle moves one seat to the right and talks to a new partner.",
              caption: "Inner circle stays. Outer circle moves one person to the right."
            },
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
            },
            {"type":"sticky","title":"Say it like an academic","text":"“I understand …, but I’m not sure how to …” — the best way to ask for help.","color":"yellow"},
            {"type":"fields","fields":[{"id":"s4-exit","label":"Exit ticket · the one thing I want to practise before Friday","rows":1,"placeholder":"Hedging in my research summary"}]}
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
            {"type":"do","n":1,"who":"alone","text":"<b>Use it · 30-second voice note.</b> Record yourself answering question 1 on your phone. Use one phrase from the bank below and one hedge (<i>may, tends to, it is likely that</i>). Send it to a study buddy or your group chat."},
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
            {"type":"do","n":2,"who":"alone","text":"Now build your own prompt about this week’s topic. Use the chips for ideas, then copy it into Cogniti or Copilot (next activities). Choose your level: <b>Bronze</b> — fill Role and Task · <b>Silver</b> — fill all four parts · <b>Gold</b> — try it in Copilot and refine it once with a follow-up."},
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
          goal: "Make notes on your understanding of three concepts — ready to teach a classmate tomorrow.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Write short notes — key words only. <b>Tomorrow:</b> you will explain one of these to a classmate in <b>60 seconds</b> (teach-back). Your classmate chooses which one!"},
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
            {"type":"tip","text":"Group 2: your Seminar is next week. Group 3: your Opening Remarks are next week. Everyone: your final Interactive Presentation builds on this research."},
            {"type":"sticky","title":"Say it like an academic","text":"“This summary was produced with the help of Copilot and checked against the original source.” — acknowledge your AI use.","color":"green"}
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
