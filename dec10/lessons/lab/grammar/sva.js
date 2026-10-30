/* DEC10 · Language Lab · Grammar 1 — Subject–verb agreement (self-study or a class top-up).
   Source: the teacher's "Interactive Grammar" document (Subject-Verb Agreement), set in the Week 2 topic (our digital carbon footprint).
   One page, four tabs: Warm-up · Learn · Practise · Use it (built for self-study). Ids never change after students start. */
window.DEC15_LESSON = {
  id: "d10lab-sva",
  week: null,
  day: null,
  title: "Is or are? Subject–verb agreement",
  duration: "About 60 minutes",
  questionKind: "Can-do",
  questionLabel: "By the end of this lesson you can",
  question: "find the real subject of a long sentence, and choose a verb that agrees with it.",
  journey: "Long academic subjects hide the word that the verb must agree with. Learn to find it every time, then check the verbs in your own writing.",
  goalShort: "accurate sentences in your writing",
  image: "dec10/assets/lab/hero-grammar.svg",
  imageAlt: "Sentence tiles: The results, of the experiment in a dashed box, were published, with an arrow from results to were.",
  finish: {"title":"Next lesson","text":"Words that travel together"},
  sections: [
    {
      id: "lesson",
      number: "1",
      minutes: 58,
      tone: "teal",
      art: "dec10/assets/lab/s-learn.svg",
      title: "Is or are? Subject–verb agreement",
      subtitle: "Warm-up · Learn · Practise · Use it",
      outcome: "find the real subject of a long sentence, and choose a verb that agrees with it.",
      activities: [
        {
          id: "sva-warm",
          short: "Warm-up",
          minutes: 8,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-warm.svg",
          title: "A classmate’s notes on the digital carbon footprint",
          goal: "Decide whether each sentence is correct. Bet more coins when you are sure.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Test yourself first. A student wrote these notes for a Week 2 research summary. Is the verb in each sentence correct?"
            },
            {"type":"do","n":2,"who":"alone","text":"Bet 1 coin if you are not sure, 3 coins if you are very sure."},
            {
              type: "bet",
              id: "sva-w1-bet",
              title: "Correct or not?",
              items: [
                {
                  q: "The number of data centres in Singapore <b>is</b> growing.",
                  options: ["Correct","Not correct"],
                  answer: "Correct",
                  why: "<b>The number of</b> + plural noun is singular: the number <b>is</b>. (But <b>a number of</b> means “many”, so it is plural: a number of centres <b>are</b>.)"
                },
                {
                  q: "The results of the study <b>shows</b> that every email has a carbon cost.",
                  options: ["Correct","Not correct"],
                  answer: "Not correct",
                  why: "The head noun is <b>results</b> (plural), not <i>study</i>: the results <b>show</b>."
                },
                {
                  q: "Each of the students <b>have</b> a smartphone and a laptop.",
                  options: ["Correct","Not correct"],
                  answer: "Not correct",
                  why: "<b>Each</b> is singular, even before <i>of the students</i>: each of the students <b>has</b>."
                },
                {
                  q: "There <b>is</b> many ways to reduce our digital footprint.",
                  options: ["Correct","Not correct"],
                  answer: "Not correct",
                  why: "After <b>there</b>, the verb agrees with the noun that follows: there <b>are</b> many ways."
                },
                {
                  q: "Watching videos online <b>uses</b> more data than reading.",
                  options: ["Correct","Not correct"],
                  answer: "Correct",
                  why: "An <b>-ing</b> subject (watching videos online) is one activity, so it is singular."
                },
                {
                  q: "In our class survey, two hours <b>is</b> the most common daily screen time.",
                  options: ["Correct","Not correct"],
                  answer: "Correct",
                  why: "An amount of time, money or distance is one amount: two hours <b>is</b>."
                }
              ]
            },
            {"type":"do","n":3,"who":"alone","text":"Look at your result. Where did you lose coins? Those rules are your focus today."},
            {
              type: "fields",
              fields: [{"id":"sva-w1-focus","label":"My focus today: which rule(s) do I need?","rows":2,"placeholder":"e.g. each of … has; there is / there are"}]
            }
          ]
        },
        {
          id: "sva-learn",
          short: "Learn",
          minutes: 24,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-learn.svg",
          title: "Subject–verb agreement, step by step",
          goal: "Read each rule, study the ✓ and ✗ examples, and check yourself before you move on.",
          blocks: [
            {
              type: "key",
              title: "What is subject–verb agreement?",
              points: [
                "In the <b>present</b> tense, the verb changes with its subject: a <b>singular</b> subject takes <b>is · has · shows</b>; a <b>plural</b> subject takes <b>are · have · show</b>.",
                "In the past, only <b>be</b> changes: singular <b>was</b>, plural <b>were</b>.",
                "Academic subjects are often long, so the verb is far from its subject. That is where mistakes happen. The answer is always the same: <b>find the head noun</b>."
              ]
            },
            {
              type: "model",
              title: "The basic pattern",
              rows: [
                ["Singular subject","The study <b>shows</b> … · It <b>is</b> … · The cost <b>has</b> risen."],
                ["Plural subject","The studies <b>show</b> … · They <b>are</b> … · The costs <b>have</b> risen."]
              ]
            },
            {
              type: "rule",
              n: 1,
              title: "The verb agrees with the head noun",
              explain: "A subject can be many words long. The verb agrees with its <b>main noun</b> (the head noun), <b>not</b> with the noun that is closest to the verb. Phrases with <i>of, in, with, by, that, which</i> come <b>after</b> the head noun: ignore them.",
              form: "the <b>HEAD NOUN</b> + [of … / in … / used by … / that …] + <b>VERB</b>",
              examples: [
                ["ok","The <u>results</u> [of the study] <b>are</b> clear.","Head noun: results (plural) → are"],
                ["no","The results of the study <b>is</b> clear.","“study” is next to the verb, but it is not the head noun."],
                ["ok","The <u>energy</u> [used by data centres around the world] <b>is</b> enormous."],
                ["ok","The <u>weather</u> [in the southern states] <b>is</b> very hot."]
              ],
              note: "Cover the middle part with your finger: <i>The results … are clear.</i> Now the agreement is easy to see.",
              check: {"q":"The cost of new phones ___ rising. (is / are)","a":"<b>is</b>: the head noun is <i>cost</i> (singular), not <i>phones</i>."}
            },
            {
              type: "figure",
              src: "dec10/assets/lab/sva-head.svg",
              alt: "The weather in the southern states is very hot: weather goes with is. One of the countries I would like to visit is Italy: one goes with is.",
              caption: "<b>Ignore the middle.</b> Find the head noun, then the verb."
            },
            {
              type: "rule",
              n: 2,
              title: "each, every and one of → singular",
              explain: "<b>Each</b>, <b>every</b> and <b>one</b> talk about <b>one</b> person or thing at a time, so the verb is singular, even when a plural noun follows <i>of</i>.",
              form: "<b>each / every</b> + singular noun → singular verb · <b>each of / one of</b> + the + plural noun → <b>singular</b> verb",
              examples: [
                ["ok","Each student <b>has</b> a laptop."],
                ["ok","Each of the students <b>has</b> a laptop."],
                ["no","Each of the students <b>have</b> a laptop.","each = one student → has"],
                ["ok","One of the countries I would like to visit <b>is</b> Italy."],
                ["ok","Every man, woman and child <b>is</b> protected under the law."]
              ],
              check: {"q":"One of my friends ___ in Melbourne. (live / lives)","a":"<b>lives</b>: <i>one</i> is the head noun."}
            },
            {
              type: "rule",
              n: 3,
              title: "some of, most of, a lot of, half of … → look after “of”",
              explain: "With words of quantity (<i>some, most, all, a lot, half, three-quarters, none</i>) + <i>of</i>, the verb agrees with the noun <b>after of</b>.",
              form: "quantity + of + <b>uncountable / singular</b> noun → singular · quantity + of + <b>plural</b> noun → plural",
              examples: [
                ["ok","Most of the <u>electricity</u> <b>comes</b> from coal.","electricity: uncountable → singular"],
                ["ok","Most of the <u>servers</u> <b>run</b> day and night.","servers: plural → plural"],
                ["ok","Some of the <u>furniture</u> <b>is</b> second-hand."],
                ["ok","A lot of the <u>students</u> <b>are</b> already here."],
                ["no","Most of the information in these articles <b>are</b> out of date.","information is uncountable → is"]
              ],
              check: {
                q: "Half of the cake ___ gone. Half of the guests ___ left. (has / have)",
                a: "Half of the cake <b>has</b> gone (cake = singular). Half of the guests <b>have</b> left (guests = plural)."
              }
            },
            {
              type: "rule",
              n: 4,
              title: "the number of / a number of",
              explain: "These two look the same but mean different things. <b>The number of</b> = a figure (one number) → singular. <b>A number of</b> = many, several → plural.",
              form: "<b>The number of</b> + plural noun + <b>singular</b> verb · <b>A number of</b> + plural noun + <b>plural</b> verb",
              examples: [
                ["ok","The number of data centres <b>is</b> growing."],
                ["no","The number of international students <b>are</b> increasing.","the number = one figure → is"],
                ["ok","A number of students <b>have</b> asked about the test.","a number of = several → have"]
              ],
              check: {"q":"___ number of e-waste sites is rising. (The / A)","a":"<b>The</b> number … is rising (one figure)."}
            },
            {
              type: "rule",
              n: 5,
              title: "and joins; as well as only adds",
              explain: "Two subjects joined by <b>and</b> are two things → plural. But <b>as well as, along with, together with, including</b> only add extra information: the verb agrees with the <b>first</b> noun.",
              form: "A <b>and</b> B → plural · A, <b>as well as / along with</b> B, → agrees with <b>A</b>",
              examples: [
                ["ok","A woman and her child <b>are</b> waiting to see Dr Chang."],
                ["ok","Anna, as well as her two older sisters, <b>is</b> in college."],
                ["no","My cousin, along with my aunt and uncle, <b>work</b> in the shop.","the subject is my cousin → works"]
              ],
              note: "The commas around <i>as well as …</i> are a clue: that part is extra.",
              check: {"q":"The lecturer, together with her students, ___ the project. (runs / run)","a":"<b>runs</b>: the subject is <i>the lecturer</i>."}
            },
            {
              type: "rule",
              n: 6,
              title: "There is / There are",
              explain: "<i>There</i> is not the real subject. The verb agrees with the noun that comes <b>after</b> it.",
              form: "There <b>is</b> + singular / uncountable noun · There <b>are</b> + plural noun",
              examples: [
                ["ok","There <b>are</b> many ways to reduce our digital footprint."],
                ["no","There <b>is</b> many ways to reduce our footprint.","ways is plural → are"],
                ["ok","There <b>is</b> an incorrect statement in the article."],
                ["ok","There <b>is</b> a lot of information online."]
              ],
              note: "With a list, the verb usually agrees with the first noun: <i>There is a laptop and two phones on the desk.</i>",
              check: {"q":"There ___ some interesting pictures in today’s paper. (is / are)","a":"<b>are</b>: pictures is plural."}
            },
            {
              type: "rule",
              n: 7,
              title: "-ing subjects and amounts → singular",
              explain: "An <b>-ing</b> subject is one activity, so it is singular. An <b>amount</b> of time, money or distance is also seen as one amount.",
              form: "<b>Watching videos</b> + singular verb · <b>Ten minutes / $200 / Five kilometres</b> + singular verb",
              examples: [
                ["ok","Watching videos online <b>uses</b> a lot of data."],
                ["ok","Washing the dishes <b>is</b> the children’s job."],
                ["ok","Ten minutes <b>is</b> more than enough time."],
                ["no","Two hundred dollars <b>are</b> too much for a textbook.","an amount of money → is"]
              ],
              check: {"q":"Getting to know students from other countries ___ fun. (is / are)","a":"<b>is</b>: the subject is one activity (getting to know …)."}
            },
            {
              type: "rule",
              n: 8,
              title: "Nouns that trick you",
              explain: "Some nouns end in <b>-s</b> but are singular. Others have no <b>-s</b> but are plural.",
              form: "Singular: <b>economics, physics, news, the United States</b>, a language (<b>Japanese</b>) · Plural: <b>people, police, cattle</b>, the + adjective for a group (<b>the elderly, the young, the Japanese</b>)",
              examples: [
                ["ok","Economics <b>is</b> Dan’s favourite subject."],
                ["ok","The news <b>is</b> good today."],
                ["ok","The police <b>are</b> coming."],
                ["ok","Japanese <b>is</b> difficult to learn, but the Japanese <b>have</b> a long history.","the language → is · the people → have"],
                ["ok","The elderly in my country <b>are</b> cared for by their families."]
              ],
              check: {"q":"The United States ___ in North America. (is / are)","a":"<b>is</b>: one country."}
            },
            {
              type: "rule",
              n: 9,
              title: "In questions, the helping verb agrees",
              explain: "In questions, <b>do/does</b>, <b>is/are</b> or <b>has/have</b> comes before the subject, but it still agrees with it.",
              form: "<b>Does</b> + singular subject … ? · <b>Do</b> + plural subject … ?",
              examples: [
                ["ok","Where <b>do</b> your grandparents live?"],
                ["ok","<b>Is</b> the bag of vegetables still in the car?","head noun: bag"],
                ["ok","<b>Do</b> Professor Karl and her researchers work together?","A and B → do"],
                ["no","<b>Does</b> the results support the hypothesis?","results → Do"]
              ],
              check: {"q":"___ taking care of the elderly the family’s job? (Is / Are)","a":"<b>Is</b>: an -ing subject."}
            },
            {
              type: "model",
              title: "Rules at a glance",
              rows: [
                ["1 · Head noun","Ignore of … / in … / that … : The results of the study <b>are</b> …"],
                ["2 · each, every, one of","singular: Each of the students <b>has</b> …"],
                ["3 · some / most / a lot of …","look after <i>of</i>: most of the electricity <b>comes</b> · most of the servers <b>run</b>"],
                ["4 · the number / a number","The number of … <b>is</b> · A number of … <b>are</b>"],
                ["5 · and / as well as","A and B <b>are</b> · A, as well as B, <b>is</b>"],
                ["6 · There is / are","agrees with the noun after it"],
                ["7 · -ing and amounts","singular: Watching videos <b>uses</b> … · Ten minutes <b>is</b> …"],
                ["8 · Tricky nouns","economics, news <b>is</b> · police, people, the elderly <b>are</b>"],
                ["9 · Questions","<b>Does</b> the study … ? · <b>Do</b> the results … ?"]
              ]
            }
          ]
        },
        {
          id: "sva-practise",
          short: "Practise",
          minutes: 16,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-practise.svg",
          title: "Controlled practice: recognise → choose → correct",
          goal: "Three short parts. Do them in order: each one is a little harder.",
          blocks: [
            {"type":"part","n":1,"title":"Recognise","goal":"Tap the head noun, then sort the tricky subjects."},
            {
              type: "spot",
              id: "sva-l1-spot",
              title: "Tap the head noun",
              label: "head noun",
              paras: [
                "The [[*results]] of Dr Noll’s [[experiment]] were published in a scientific journal.",
                "The [[*extent]] of the [[problems]] surprises many researchers.",
                "[[*One]] of the [[countries]] I would like to visit is Italy.",
                "A [[*list]] of practical [[strategies]] is in the appendix.",
                "The [[*energy]] used by data [[centres]] around the world is enormous."
              ]
            },
            {
              type: "sort",
              id: "sva-l2-sort",
              title: "is or are?",
              buckets: [{"label":"Singular verb","text":"is · has · shows","letter":"1"},{"label":"Plural verb","text":"are · have · show","letter":"2+"}],
              items: [
                {"text":"Each student in the class","answer":0,"why":"<b>each / every</b> + singular noun is singular."},
                {"text":"Washing the dishes","answer":0,"why":"An -ing activity is one thing."},
                {"text":"Economics","answer":0,"why":"Some subjects end in -s but are singular: economics, physics, the news, the United States."},
                {"text":"Ten minutes","answer":0,"why":"An amount of time, money or distance is singular."},
                {
                  text: "Anna, as well as her two sisters,",
                  answer: 0,
                  why: "<b>as well as / along with / together with</b> do not add to the subject: the verb agrees with Anna."
                },
                {
                  text: "Some of the furniture",
                  answer: 0,
                  why: "<b>some of / most of / a lot of / half of</b>: look at the noun after <i>of</i>. Furniture is uncountable, so singular."
                },
                {"text":"A woman and her child","answer":1,"why":"<b>A and B</b> joined by <i>and</i> are two: plural."},
                {"text":"Some of the desks","answer":1,"why":"The noun after <i>of</i> is plural (desks), so the verb is plural."},
                {"text":"The police","answer":1,"why":"Some nouns are plural without -s: police, people, cattle."},
                {"text":"The elderly in my country","answer":1,"why":"<b>the</b> + adjective for a group of people (the elderly, the young, the Japanese) is plural."}
              ]
            },
            {"type":"part","n":2,"title":"Choose","goal":"Choose the verb in a paragraph, in sentences and in questions."},
            {
              type: "cloze",
              id: "sva-p1-cl",
              title: "A paragraph about the digital carbon footprint",
              options: [["has","have"],["is","are"],["is","are"],["comes","come"],["runs","run"],["uses","use"],["is","are"],["makes","make"]],
              text: "Every email we send {{1}} a small carbon cost. The energy used by data centres around the world {{2}} huge, and the number of data centres {{3}} still growing. A lot of the electricity {{4}} from coal, and most of the servers {{5}} day and night. Watching videos online {{6}} the most data. However, there {{7}} many simple ways to cut our footprint: deleting old files, watching videos in lower quality and keeping devices for longer. Each of these steps {{8}} a difference.",
              answers: ["has","is","is","comes","run","uses","are","makes"],
              why: [
                "<b>Every</b> + singular noun (email) → singular.",
                "Head noun: <b>energy</b> (not centres, not world).",
                "<b>The number of</b> … → singular.",
                "Head noun after <i>a lot of</i>: <b>electricity</b>, uncountable → singular.",
                "After <i>most of</i>: <b>servers</b>, plural → plural.",
                "An <b>-ing</b> subject is singular.",
                "After <i>there</i>: <b>ways</b> → plural.",
                "<b>Each</b> → singular."
              ]
            },
            {
              type: "cloze",
              id: "sva-p2-cl",
              title: "Choose the verb",
              list: true,
              options: [
                ["was","were"],
                ["is","are"],
                ["is","are"],
                ["is","are"],
                ["is","are"],
                ["is","are"],
                ["has","have"],
                ["is","are"],
                ["is","are"],
                ["is","are"],
                ["has","have"],
                ["is","are"]
              ],
              text: "The results of Dr Noll’s experiment {{1}} published in a scientific journal.\nWashing the dishes {{2}} the children’s job.\nA woman and her child {{3}} waiting to see Dr Chang.\nAnna, as well as her two older sisters, {{4}} in college.\nSome of the furniture in our apartment {{5}} second-hand.\nSome of the desks in the classroom {{6}} broken.\nEach of the students {{7}} a notebook.\nEconomics {{8}} Dan’s favourite subject.\nThe police {{9}} coming. I’ve already called them.\nJapanese {{10}} very difficult for English speakers to learn.\nThe Japanese {{11}} a long and interesting history.\nTen minutes {{12}} more than enough time to finish this exercise.",
              answers: ["were","is","are","is","is","are","has","is","are","is","have","is"],
              why: [
                "Head noun: <b>results</b>.",
                "-ing subject → singular.",
                "<b>and</b> → plural.",
                "<b>as well as</b> does not add: Anna → singular.",
                "<b>furniture</b> is uncountable.",
                "<b>desks</b> → plural.",
                "<b>Each</b> → singular.",
                "Ends in -s but singular.",
                "<b>police</b> is always plural.",
                "The language → singular.",
                "The people → plural.",
                "An amount of time → singular."
              ]
            },
            {
              type: "quiz",
              id: "sva-p2-q",
              title: "Questions and long subjects",
              items: [
                {"q":"Where ___ your grandparents live?","options":["does","do"],"answer":"do","why":"Subject: <b>your grandparents</b> (plural)."},
                {
                  q: "___ taking care of the elderly the responsibility of the family or the government?",
                  options: ["Is","Are"],
                  answer: "Is",
                  why: "Subject: <b>taking care of the elderly</b>, an -ing activity → singular."
                },
                {
                  q: "___ Professor Karl and her graduate researchers work closely together?",
                  options: ["Does","Do"],
                  answer: "Do",
                  why: "<b>Professor Karl and her researchers</b>: A and B → plural."
                },
                {
                  q: "Every man, woman and child ___ protected under the law.",
                  options: ["is","are"],
                  answer: "is",
                  why: "<b>Every</b> … → singular, even with a list."
                },
                {
                  q: "Getting to know students from all over the world ___ one of the best parts of studying abroad.",
                  options: ["is","are"],
                  answer: "is",
                  why: "Head: <b>getting to know …</b> (-ing) → singular."
                }
              ]
            },
            {"type":"part","n":3,"title":"Correct","goal":"Each sentence has one agreement mistake. Write the correct sentence."},
            {
              type: "rewrite",
              id: "sva-p3-rw",
              title: "Correct the sentence",
              hint: "Change only the verb.",
              items: [
                {
                  q: "The results of the survey <b>shows</b> that most students use AI.",
                  accept: ["The results of the survey show that most students use AI."],
                  model: "The results of the survey show that most students use AI.",
                  why: "Head noun: results."
                },
                {
                  q: "Each of the groups have five members.",
                  accept: ["Each of the groups has five members."],
                  model: "Each of the groups has five members.",
                  why: "each → singular."
                },
                {
                  q: "There is many reasons for this problem.",
                  accept: ["There are many reasons for this problem."],
                  model: "There are many reasons for this problem.",
                  why: "reasons → are."
                },
                {
                  q: "The number of international students are increasing.",
                  accept: ["The number of international students is increasing."],
                  model: "The number of international students is increasing.",
                  why: "the number → singular."
                },
                {
                  q: "One of the main causes are fast fashion.",
                  accept: ["One of the main causes is fast fashion."],
                  model: "One of the main causes is fast fashion.",
                  why: "one of → singular."
                },
                {
                  q: "Most of the information in these articles are out of date.",
                  accept: ["Most of the information in these articles is out of date."],
                  model: "Most of the information in these articles is out of date.",
                  why: "information is uncountable."
                }
              ]
            }
          ]
        },
        {
          id: "sva-use",
          short: "Use it",
          minutes: 10,
          grouping: "Self-study",
          art: "dec10/assets/lab/s-use.svg",
          title: "Digital habits in my country",
          goal: "Write five sentences that start with tricky subjects. The lights show which starters you used; red warns about a common error.",
          blocks: [
            {
              type: "do",
              n: 1,
              who: "alone",
              text: "Write about digital habits in your country (phones, streaming, data, e-waste). Start your sentences with these subjects: <b>The number of …</b> · <b>One of the …</b> · <b>Each of …</b> · <b>Most of the …</b> · <b>There is / There are …</b>"
            },
            {
              type: "detect",
              id: "sva-u1-dt",
              title: "My five sentences",
              label: "Writing studio",
              hint: "Write freely. The lights turn on as you use each starter. A red chip means: check that verb!",
              checks: [
                {"label":"The number of …","color":"#2b776e","any":["the number of"]},
                {"label":"One of the …","color":"#3a58a0","any":["one of the"]},
                {"label":"Each of …","color":"#7a4a8c","any":["each of"]},
                {"label":"Most of the …","color":"#b0512a","any":["most of the"]},
                {"label":"There is / are","color":"#985c0e","any":["/\\bthere (is|are)\\b/"]}
              ],
              avoid: [
                {"label":"One of the … are / have?","any":["/\\bone of the (\\w+ ){1,4}(are|have|were)\\b/"]},
                {"label":"Each of … have / are?","any":["/\\beach of (\\w+ ){1,4}(have|are|were)\\b/"]},
                {"label":"The number of … are?","any":["/\\bthe number of (\\w+ ){1,4}(are|have|were)\\b/"]},
                {"label":"There is + plural?","any":["/\\bthere is (many|several|a lot of|lots of|some|two|three|\\d+) /"]}
              ],
              items: [
                {
                  rows: 7,
                  placeholder: "The number of people who …",
                  model: "The number of people who stream videos on their phones <b>is</b> rising quickly. One of the biggest problems <b>is</b> old phones that end up in landfill. Each of my friends <b>has</b> at least two devices. Most of the electricity in my country still <b>comes</b> from coal. There <b>are</b> a few recycling schemes, but there <b>is</b> not enough information about them."
                }
              ]
            },
            {"type":"do","n":2,"who":"alone","text":"Check your own sentences: find the head noun of each subject, then the verb. Do they agree?"},
            {
              type: "talk",
              title: "Say it aloud: finish each sentence",
              prompts: [
                "One of the things I like most about studying in Sydney is …",
                "Most of the people in my class …",
                "The number of international students in Australia …",
                "Each of my teachers …"
              ]
            },
            {
              type: "checklist",
              id: "sva-u1-can",
              title: "Can you do it?",
              items: [
                "I find the head noun before I choose the verb.",
                "I know that each, every, one of the and the number of take a singular verb.",
                "I look at the noun after of with some, most, a lot and half.",
                "I checked every verb in my sentences."
              ]
            },
            {
              type: "sticky",
              color: "green",
              title: "Take it into your writing",
              text: "Before you submit your next paragraph, find every <b>is/are</b> and <b>has/have</b>. Ask: what is the head noun?"
            }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["subject","the person or thing that does the action of the verb, usually before the verb","In “The results show …”, the subject is “the results”."],
    ["head noun","the main noun in a group of words; the verb agrees with it","The head noun of “the energy used by data centres” is “energy”."],
    ["agree","to match in grammar: singular with singular, plural with plural","The verb must agree with its subject."],
    ["uncountable noun","a noun with no plural form, such as information, furniture or electricity","Most of the information is online."]
  ]
};
