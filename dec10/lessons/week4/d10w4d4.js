/* DEC10 · Week 4 · Day 4 (Thursday) — Pack it, cite it, voice it.
   Built from the Week 4 Teacher's Book, in the order and timings of the revised weekly map:
   W4 D3. 10A Nominalisation (taught Thursday, 75 min) · W4 D4. 12A Citing sources & voice (60 min) ·
   W4 D4. 13A Integrated writing workshop (3) (105 min — the map gives 15 more minutes than the TB's 90: used for extra speaking practice).
   Protected texts are in sources.js and are never changed here. The 13A citation analysis quotes Sample 4.2 exactly as printed
   in the Teacher's Book 13A (that version differs slightly from the booklet version in sources.js; the TB questions need it).
   Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: "d10w4d4",
  week: 4,
  day: 4,
  title: "Pack it, cite it, voice it",
  duration: "About 4 hours",
  question: "To what extent are the goals of ecotourism likely to be achieved?",
  questionKind: "Essay question",
  questionLabel: "This week’s essay question · Samples 4.1 and 4.2 answer it",
  journey: "Pack long ideas into strong noun phrases, cite your sources in the right way with the right reporting verb, and make your own voice clear. Then study how Sample 4.2 uses citations and voice — and compare it with your own practice essay.",
  image: "dec10/assets/week4/hero-d10w4d4.svg",
  imageAlt: "Illustration: an eco-tourism coast with a rainforest, an eco-lodge, a sea turtle and a coral reef. In front, a writing desk: a noun machine turns the verb “preserve” into the noun “preservation”, citation cards read “Mielly (2023)” and “(Alom, 2023)”, and two speech bubbles show the writer’s voice and a source’s voice meeting on an essay page.",
  finish: {"title":"Day 5","text":"Group work skills, using and refining AI prompts, Interactive Discussion: discussion and negotiation — and a STAR moment"},
  goalShort: "your Integrated Writing Assessment (IWA)",
  sections: [
    /* ───────────────────────── STAGE 1 · 10A ───────────────────────── */
    {
      id: "nominal",
      number: "01",
      code: "10A",
      minutes: 75,
      tone: "plum",
      art: "dec10/assets/week4/s-d4-nominal.svg",
      title: "Nominalisation",
      subtitle: "Turn actions into nouns — and unpack long noun phrases",
      outcome: "You unpack complex noun phrases to understand academic texts better, and you change verbs, adjectives or clauses into noun phrases using nominalisation.",
      activities: [
        {
          id: "a1",
          short: "Lead-in",
          minutes: 5,
          grouping: "Pairs → class",
          art: "dec10/assets/week4/v/v-d10w4d4-a1.svg",
          title: "Lead-in: nominalisation in the writing rubric",
          goal: "Find nominalisation in the rubric and say what you already know about it.",
          blocks: [
            {"type":"do","n":1,"who":"alone","text":"Open the <b>IWA writing rubric</b>. Find the <b>Grammar</b> criterion. Find the word <b>nominalisation</b>."},
            {"type":"do","n":2,"who":"pair","text":"Tell your partner everything you know about nominalisation in <b>one minute</b>. Then swap."},
            {
              type: "flip",
              title: "Warm up: guess the noun",
              hint: "Read the meaning. Say the noun. Then turn the card. All the nouns are in this week’s readings.",
              items: [
                {"front":"keeping nature and wildlife safe from harm","back":"<b>conservation</b> — from <i>conserve</i> (verb)","tag":"verb → noun"},
                {"front":"forcing people to leave their land","back":"<b>displacement</b> — from <i>displace</i> (verb)","tag":"verb → noun"},
                {"front":"putting a plan into action","back":"<b>implementation</b> — from <i>implement</i> (verb)","tag":"verb → noun"},
                {"front":"being very complicated","back":"<b>complexity</b> — from <i>complex</i> (adjective)","tag":"adjective → noun"},
                {"front":"being unclear","back":"<b>vagueness</b> / <b>ambiguity</b> — from <i>vague</i> / <i>ambiguous</i>","tag":"adjective → noun"},
                {"front":"something that must happen","back":"<b>necessity</b> — from <i>necessary</i> (adjective)","tag":"adjective → noun"}
              ]
            },
            {
              type: "language",
              title: "Useful language: say what you know",
              groups: [
                {"label":"Share what you know","phrases":["As far as I know, nominalisation means …","I think it is when you change a … into a …","I’ve seen it in … , for example …"]},
                {"label":"When you are not sure","phrases":["I’m not completely sure, but …","Correct me if I’m wrong, but …","I remember something about … from Week 3."]}
              ]
            }
          ]
        },
        {
          id: "a2",
          short: "What & why",
          minutes: 10,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-a2.svg",
          title: "What is nominalisation?",
          goal: "Compare two ways of giving the same information, and learn why academic writers use nouns.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Read the two versions. Answer: <b>1.</b> What differences do you notice? <b>2.</b> Which one do you prefer? Why?"},
            {
              type: "pairs",
              title: "The same information, two ways",
              items: [
                {
                  from: "In 2015, governments [[adopted]] the 2030 Agenda for Sustainable Development Goals. The agenda established a global framework to end extreme poverty, fight inequality, and remedy climate change (Spenceley & Rylance, 2021).",
                  to: "[[The 2015 government adoption of]] the Agenda for Sustainable Development Goals established a global framework to end extreme poverty, fight inequality, and remedy climate change.",
                  tag: "adopted → the adoption of · 2 sentences → 1 · 2 verbs → 1",
                  note: "The action (adopted) is now a thing (the adoption of …), so the whole idea can be the subject of one sentence."
                }
              ]
            },
            {
              type: "key",
              title: "Nominalisation",
              points: ["Nominalisation is the process of changing <b>verbs</b>, <b>adjectives</b>, or even whole <b>clauses</b> into <b>nouns</b> or <b>noun phrases</b>."]
            },
            {"type":"figure","src":"dec10/assets/week4/d4-noun-what.svg","size":"wide","alt":"Two sentences with two verbs (governments adopted …; the agenda established …) go into a funnel and come out as one sentence with one verb: The 2015 government adoption of the Agenda … established a global framework. Labels: adopted becomes the adoption of; 2 sentences become 1; 2 verbs become 1.","caption":"Nominalisation packs two clauses into one strong subject."},
            {
              type: "tabs",
              title: "Why do we use nominalisation in academic texts?",
              tabs: [
                {
                  label: "1 · Concise",
                  blocks: [
                    {
                      type: "model",
                      title: "Express complex ideas more concisely",
                      before: "People are working to create green jobs. This helps to promote environmental sustainability. It also reduces unemployment. (20 words)",
                      text: "The <b>creation</b> of green jobs promotes environmental sustainability and reduces unemployment. (11 words)",
                      note: "Fewer words and fewer clauses. The focus has also moved from <b>people</b> to <b>concepts</b>, which is common in academic writing."
                    }
                  ]
                },
                {
                  label: "2 · Cohesion",
                  blocks: [
                    {"type":"tip","text":"Nominalisation helps with <b>cohesion and coherence</b>. You saw this in the lesson on <b>summary phrases</b> (signalling nouns) earlier this week: <i>“… communities are displaced. <b>This displacement</b> …”</i>"}
                  ]
                },
                {
                  label: "3 · Academic style",
                  blocks: [
                    {"type":"tip","text":"Academic writing is more about <b>ideas and concepts</b> than actions or events. Nominalisation shifts the focus from actions (verbs) or descriptions (adjectives) to ideas (nouns). This gives your writing an appropriate <b>academic style</b> (Week 3)."}
                  ]
                }
              ]
            },
            {"type":"sticky","color":"pink","title":"Be careful!","text":"Overusing nominalisation can make sentences <b>harder</b> to understand. Use it when it makes your idea clearer or more concise."},
            {
              type: "talk",
              title: "Explain it to a classmate",
              prompts: ["Explain nominalisation in one sentence, without looking at the page.","Give your partner the three reasons to use it — and one danger."]
            },
            {
              type: "language",
              title: "Useful language: describe the change",
              groups: [
                {"label":"Describe it","phrases":["The verb “adopted” has become the noun phrase “the adoption of”.","The writer has joined two sentences into one.","There is only one main verb now: “established”."]},
                {"label":"Give your opinion","phrases":["I prefer the second version because it is more concise.","The first version is easier to read, but it sounds less academic.","It depends on the reader — for an essay, I would choose …"]}
              ]
            }
          ],
          answers: {"items":[["What changed?","“adopted” → “the adoption of” · 2 sentences → 1 · 2 verbs → 1 (only “established” is left)."],["Which do you prefer?","Many writers prefer the second: it is more concise and focuses on the idea, not the people. Both are correct."]]}
        },
        {
          id: "a3",
          short: "Unpack it",
          minutes: 30,
          grouping: "Groups of 3–4 (jigsaw)",
          art: "dec10/assets/week4/v/v-d10w4d4-a3.svg",
          title: "Unpacking noun phrases",
          goal: "Find long nominalised subjects in the readings and the samples, and find their main verb.",
          blocks: [
            {"type":"tip","text":"Unpacking noun phrases helps you understand the message of a text better. This is very helpful for your <b>reading</b> skills!"},
            {"type":"figure","src":"dec10/assets/week4/d4-noun-phrase.svg","size":"wide","alt":"Three common structures of nominalised noun phrases, each with the long subject in a box and the main verb in a coloured circle. 1: Noun + of + noun phrase + verb — The expansion of the green economy / fosters sustainable development worldwide. 2: Noun + ’s + noun phrase + verb — The industry’s shift towards green jobs / promotes environmental responsibility. 3: Noun + of + noun phrase + by + noun phrase + verb — The growth of green technologies by innovative companies / accelerates the transition to a green economy.","caption":"Find the <b>main verb</b> first. Everything before it is the subject."},
            {
              type: "key",
              title: "Three common structures",
              numbered: true,
              points: [
                "<b>Noun + of + noun phrase + verb</b><br><i>The expansion of the green economy</i> <b>fosters</b> sustainable development worldwide. · <i>The original concept of ecotourism</i> <b>has been hijacked</b>.",
                "<b>Noun + ’s + noun phrase + verb</b><br><i>The industry’s shift towards green jobs</i> <b>promotes</b> environmental responsibility.",
                "<b>Noun + of + noun phrase + by + noun phrase + verb</b><br><i>The growth of green technologies by innovative companies</i> <b>accelerates</b> the transition to a green economy."
              ]
            },
            {
              type: "spot",
              id: "a3-spot",
              label: "Subject spotter",
              title: "Warm-up: tap the WHOLE nominalised subject",
              hint: "Each sentence starts with a long subject. Tap the phrase that is the whole subject (not just part of it).",
              paras: [
                "[[*The discovery of a number of irregularities as well as conflict between the community and the construction workers in April 2023]] [[led local courts]] to suspend the project. (Mielly, 2023)",
                "[[*The significance of the Amazon rainforest and Atlantic coastal forest for indigenous peoples such as the Guarani Mbyá]] goes far beyond [[a simple habitat]]. (Mielly, 2023)",
                "[[*The potential for ecotourism to protect and improve the lives and environment of local communities]] is therefore evident. (Sample 4.1)",
                "[[*The goals of ecotourism]] align with [[a number of Sustainable Development Goals]] to improve the lives of local communities (Spenceley & Rylance, 2021). (Sample 4.2)"
              ]
            },
            {
              type: "steps",
              title: "Practice: a jigsaw",
              items: [
                {"who":"group","text":"Work in groups. Find sentences that <b>begin with a nominalised subject</b>. <b>Highlight</b> the main verb and <b>underline</b> the whole subject. Example: <i><u>The need to increase renewable energy production</u></i> <b>is</b> urgent."},
                {"who":"group","text":"<b>Group 1:</b> Week 4 Reading 1 (Spenceley & Rylance, 2021) · <b>Group 2:</b> Week 4 Reading 2 (Mielly, 2023) · <b>Group 3:</b> Sample essay 4.1 · <b>Group 4:</b> Sample essay 4.2"},
                {"who":"group","text":"Write your best 2–3 examples in the table."},
                {"who":"group","text":"<b>Change groups.</b> Share your findings. Read each subject aloud and <b>unpack</b> it in simple words for the new group."}
              ]
            },
            {"type":"sources","ids":["ecosdg","bluewash","s41","s42"]},
            {
              type: "table",
              id: "a3-tab", live: true,
              title: "Our nominalised subjects",
              columns: ["Text","Nominalised subject (underline)","Main verb (highlight)","Unpacked in simple words"],
              fixed: ["Example 1","Example 2","Example 3","From another group","From another group"]
            },
            {
              type: "language",
              title: "Useful language: unpack it for the new group",
              groups: [
                {"label":"Show the parts","phrases":["The subject is “…”, and the main verb is “…”.","The head noun is “…”. The rest tells us more about it.","In simple words, this means that …"]},
                {"label":"Check together","phrases":["Is “…” part of the subject, or is it the verb?","Where does the subject end?","Could we replace it with “it”?"]}
              ]
            },
            {"type":"tip","text":"<b>Test:</b> replace the whole subject with <b>it</b> or <b>they</b>. If the sentence still works (<i>It led local courts to suspend the project.</i>), you found the whole noun phrase."}
          ],
          answers: {
            title: "Suggested examples (other answers are possible)",
            items: [
              ["Reading 1 · Spenceley & Rylance (2021)","<u>A study of 49 tropical protected areas</u> <b>showed</b> … · <u>Corporate social responsibility efforts by ecotourism companies in areas rich in biodiversity</u> often <b>lead to</b> improvements in public health. · <u>The agenda</u> <b>established</b> a global framework …"],
              ["Reading 2 · Mielly (2023)","<u>The notion of ecotourism</u> <b>was introduced</b> in the late 1970s. · <u>The need to increase renewable energy production</u> <b>is</b> urgent. · <u>The discovery of a number of irregularities …</u> <b>led</b> local courts to suspend the project. · <u>The significance of the Amazon rainforest …</u> <b>goes</b> far beyond … · <u>A 2019 victory in Bahía of the Tupinamba de Olivença tribe over the Portuguese hotel giant Vila Gale</u> <b>created</b> a legal precedent."],
              ["Sample 4.1","<u>The potential for ecotourism to protect and improve the lives and environment of local communities</u> <b>is</b> therefore evident. · <u>The challenges for ecotourism in achieving its goals</u> <b>extend</b> beyond regulatory inadequacies … · <u>These regulatory challenges</u> <b>are</b> further <b>compounded</b> … · <u>the positive depiction of Costa Rica as a model of sustainable tourism</u> (Alom, 2023) <b>illustrates</b> …"],
              ["Sample 4.2","<u>The goals of ecotourism</u> <b>align</b> with … · <u>The potential for ecotourism to achieve its goals</u> <b>goes</b> beyond … · <u>the global goal of reducing the impact on climate change</u> <b>will require</b> time · <u>the goals of improving the lives and the environments of local populations</u> <b>are</b> already <b>seeing</b> tangible results."]
            ]
          }
        },
        {
          id: "a4",
          short: "How to",
          minutes: 10,
          grouping: "Class → pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-a4.svg",
          title: "How to nominalise?",
          goal: "Follow three steps to rewrite a sentence with nouns.",
          blocks: [
            {"type":"figure","src":"dec10/assets/week4/d4-noun-steps.svg","size":"wide","alt":"Three steps joined by curved arrows. Step 1: identify which verbs or adjectives can be nominalised — not all of them can be or need to be changed. Step 2: change key verbs and adjectives to nouns — you can use a dictionary. Step 3: rewrite the sentence using these nouns — you may need to change other word forms, add articles and prepositions and change the grammar.","caption":"How to nominalise in three steps"},
            {
              type: "model",
              title: "Example",
              rows: [
                ["Original sentence","These researchers are also <b>constructing</b> a measure of “skill distance,” which <b>indicates</b> the extent of re-training required to <b>transition</b> from one job to another."],
                ["Step 1 · Identify","constructing · indicates · transition"],
                ["Step 2 · Change","constructing → <b>construction</b> · indicate → <b>indication</b> · transition → <b>transition</b> (the verb and the noun have the same form)"],
                ["Step 3 · Rewrite","<b>The construction of</b> a measure of “skill distance” provides <b>an indication of</b> the extent of re-training required for <b>the transition</b> from one job to another."]
              ],
              note: "Compare with the original. What else changed? (new verb “provides”, articles <i>the / an</i>, prepositions <i>of / for</i>)."
            },
            {"type":"do","n":1,"who":"class","text":"Now do this example together with your class. Say each step aloud before you open the answer."},
            {
              type: "model",
              title: "Together with the class",
              before: "It is <b>difficult</b> to identify which job skills are most <b>likely</b> to be affected by green growth policies.",
              text: "Step 1: difficult, likely · Step 2: difficult → <b>difficulty</b>, likely → <b>likelihood</b>"
            },
            {
              type: "toggle",
              title: "Step 3 · Open the rewritten sentence",
              hint: "Try it first!",
              blocks: [{"type":"model","title":"Answer","text":"<b>The difficulty of</b> identifying which job skills have the highest <b>likelihood</b> of being affected by green growth policies …"}]
            },
            {
              type: "language",
              title: "Talk through the steps",
              groups: [
                {"label":"Step by step","phrases":["First, I can see two verbs we can change: … and …","Next, “indicate” becomes “indication”.","Finally, we need to add “the” and “of”."]},
                {"label":"Check with a partner","phrases":["Do we need a new main verb now?","Which preposition goes after “difficulty”?","Does it still mean the same thing?"]}
              ]
            }
          ]
        },
        {
          id: "a5",
          short: "Verb → noun",
          minutes: 8,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-a5.svg",
          title: "Activity 1 · Change the verbs and adjectives to nouns",
          goal: "Build your verb-to-noun knowledge so nominalisation becomes natural.",
          blocks: [
            {"type":"tip","text":"Once you have built up the verb-to-noun knowledge, nominalisation will become a more natural process. Say each noun <b>in a phrase</b>: <i>the assessment of …, the implementation of …</i>"},
            {"type":"figure","src":"dec10/assets/week4/d4-noun-endings.svg","size":"wide","alt":"A word tree of noun endings. -tion and -sion: classification, definition, implementation, expansion. -ment: assessment, requirement, involvement, development. -ance and -ence: importance, prevalence, existence, resilience. -ity: complexity, diversity, ambiguity, necessity. -ness: vagueness. Other: emphasis, variety, argument, challenge.","caption":"Common noun endings — and some words that change more."},
            {
              type: "match",
              id: "a5-mv",
              title: "Verbs from the Week 3 readings → nouns",
              hint: "Tap a verb, then its noun.",
              left: ["assess","classify","involve","determine","require","expand","identify","define","complicate","recognize","emphasize","prevail"],
              right: ["assessment","classification","involvement","determination","requirement","expansion","identification","definition","complication","recognition","emphasis","prevalence"]
            },
            {
              type: "sort",
              id: "a5-adj",
              title: "Adjectives → nouns: which ending?",
              hint: "Make the noun in your head, then put the adjective in the right box.",
              buckets: [{"label":"-ity","text":"complex → complexity"},{"label":"-ness","text":"vague → vagueness"},{"label":"-ance / -ence","text":"important → importance"},{"label":"-cy","text":"efficient → efficiency"},{"label":"Other","text":"a different change"}],
              items: [
                {"text":"diverse","answer":0,"why":"diversity"},
                {"text":"ambiguous","answer":0,"why":"ambiguity"},
                {"text":"necessary","answer":0,"why":"necessity"},
                {"text":"adaptable","answer":0,"why":"adaptability"},
                {"text":"critical","answer":0,"why":"criticality"},
                {"text":"vague","answer":1,"why":"vagueness"},
                {"text":"important","answer":2,"why":"importance"},
                {"text":"resilient","answer":2,"why":"resilience"},
                {"text":"inconsistent","answer":2,"why":"inconsistency — -ency is the -ence family + y"},
                {"text":"decent","answer":3,"why":"decency"},
                {"text":"efficient","answer":3,"why":"efficiency"},
                {"text":"traditional","answer":4,"why":"tradition — the noun is shorter than the adjective"},
                {"text":"challenging","answer":4,"why":"challenge"}
              ]
            },
            {
              type: "spinner",
              id: "a5-spin",
              title: "Noun race",
              text: "Spin. Say the noun <b>in a phrase</b> in 5 seconds (<i>the development of …</i>). Your partner checks with the tables. One point for each correct phrase.",
              reels: [{"label":"Word","items":["create","implement","develop","explore","employ","suggest","argue","add","exist","vary","construct","indicate","complex","diverse","efficient","necessary"]}]
            }
          ],
          answers: {
            title: "Teacher’s Book table — the other verbs",
            items: [
              ["create → ","creation (the TB table prints “creating”, the -ing form; the noun is <b>creation</b>)"],
              ["implement → ","implementation"],["involve → ","involvement"],["construct → ","construction"],["employ → ","employment"],["indicate → ","indication"],["develop → ","development"],["vary → ","variety (also: variation)"],["suggest → ","suggestion"],["argue → ","argument"],["add → ","addition"],["exist → ","existence"],["explore → ","exploration"]
            ]
          }
        },
        {
          id: "a6",
          short: "Sentences",
          minutes: 12,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-a6.svg",
          title: "Activity 2 · Practise nominalisation at the sentence level",
          goal: "Nominalise sentences, then combine two sentences into one.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"<b>Part 1.</b> Change the <b>bold</b> verbs (and adverbs) to nouns (and adjectives). Use the verb in brackets as the new main verb. Your teacher models the first one."},
            {
              type: "detect",
              id: "a6-p1",
              label: "Nominalise it",
              hint: "The lights turn on when you use a noun ending and the new main verb.",
              checks: [
                {"label":"Noun ending","color":"#7a4a8c","any":["/\\b\\w+(tion|sion|ment|ance|ence|ness|ity|th|ess)\\b/"]},
                {"label":"“the … of …”","color":"#2f7d6b","any":["/\\bthe \\w+(\\s\\w+)? of\\b/"]},
                {"label":"New main verb","color":"#c4562f","any":["reveal","assist","depend"]}
              ],
              items: [
                {"task":"1. This economy <b>has grown</b> and, in turn, <b>significantly changed</b> the employment landscape. <b>(to reveal)</b>","placeholder":"The growth of …","rows":2,"model":"The growth of this economy has, in turn, revealed significant changes in the employment landscape."},
                {"task":"2. In fact, a Green General Skill (GGS) index <b>has been developed</b> by Vona et al. that helps <b>classify</b> and <b>contextualise</b> green jobs within a broader skills framework. <b>(to assist)</b>","placeholder":"In fact, the development of …","rows":3,"model":"In fact, the development of a Green General Skill (GGS) index by Vona et al. has assisted in classifying and contextualising green jobs within a broader skills framework. (Also correct: … has assisted in the classification and contextualisation of green jobs within a broader skills framework.)"},
                {"task":"3. These initiatives <b>succeed</b> only when employers are <b>willing</b> to invest in their workforce. <b>(to depend on)</b>","placeholder":"The success of …","rows":2,"model":"The success of these initiatives (largely) depends on the willingness of employers to invest in their workforce."}
              ]
            },
            {"type":"do","n":2,"who":"pair","text":"<b>Part 2.</b> Combine two sentences into one: <b>1</b> find the verbs/adjectives you can change · <b>2</b> change them to nouns · <b>3</b> rewrite as one sentence with the same meaning."},
            {
              type: "cloze",
              id: "a6-cl",
              list: true,
              title: "Combine the sentences (from Spenceley & Rylance, 2021)",
              options: [["provide","provision","providing"],["of","to","in"],["cooperate","cooperation","cooperating"],["management","manage","manager"],["use","using","useful"],["improve","improving","improvements"]],
              answers: ["provision","of","cooperation","management","use","improvements"],
              why: ["provide (v.) → provision","the provision <b>of</b> safe spaces","cooperate (v.) → cooperation; Ecotourism companies’ cooperation …","manage resources better → better resource management","use (v.) → the use (n.) — same spelling","there are improvements → resulting in improvements"],
              text: "<span class=\"cl-from\">Marine-protected areas provide safe spaces for fish breeding. This supports local fishing which many communities rely on for food.</span>The {{1}} {{2}} safe spaces for fish breeding in marine-protected areas supports local fishing which many communities rely on for food.\n<span class=\"cl-from\">Ecotourism companies are cooperating with local communities and authorities. This is leading to initiatives to manage resources better.</span>Ecotourism companies’ {{3}} with local communities and authorities is leading to initiatives for better resource {{4}}.\n<span class=\"cl-from\">Many tourism businesses use their CSR funds to help develop rural clinics and hospitals. As a result, there are improvements in public health.</span>The {{5}} of CSR funds by many tourism businesses to help develop rural clinics and hospitals is resulting in {{6}} in public health."
            },
            {"type":"do","n":3,"who":"pair","text":"<b>Speak:</b> Partner A reads an original pair of sentences aloud. Partner B says the one-sentence version <b>without looking</b>. Swap."},
            {
              type: "language",
              title: "Useful language: give feedback on a sentence",
              groups: [
                {"label":"Praise","phrases":["Nice — you turned “…” into “…”.","That is much more concise."]},
                {"label":"Suggest","phrases":["Could you use “the … of” here?","I think the preposition should be “in”, not “of”.","Maybe this is too many nouns — the sentence is hard to follow."]}
              ]
            },
            {
              type: "checklist",
              id: "a6-check",
              title: "Before you use nominalisation in your essay, check:",
              items: ["The noun really exists (check a dictionary).","The preposition after it is right (of / in / on / to / for).","The sentence still has one clear main verb.","The sentence is not too long or too heavy with nouns."]
            }
          ]
        }
      ]
    },

    /* ───────────────────────── STAGE 2 · 12A ───────────────────────── */
    {
      id: "citing",
      number: "02",
      code: "12A",
      minutes: 60,
      tone: "teal",
      art: "dec10/assets/week4/s-d4-citing.svg",
      title: "Citing sources & voice",
      subtitle: "Internal or external? Which reporting verb? Whose voice?",
      outcome: "You have a further understanding of how to cite sources accurately: you choose internal or external citations for a reason, use reporting verbs in the right sentence patterns, and start to tell your voice from the voices of your sources.",
      activities: [
        {
          id: "b1",
          short: "Discuss",
          minutes: 8,
          grouping: "Groups → class",
          art: "dec10/assets/week4/v/v-d10w4d4-b1.svg",
          title: "Discussion",
          goal: "Talk about information, ideas and reporting verbs before we look at citations.",
          blocks: [
            {"type":"do","n":1,"who":"group","text":"Discuss the four questions in your group. Then share with your teacher."},
            {
              type: "spinner",
              id: "b1-spin",
              title: "Discussion wheel",
              text: "Spin. The person who spins answers first. Everyone adds one idea.",
              reels: [{"label":"Question","items":["1. What is the difference between information (facts) and ideas (opinions)?","2. Do you need to acknowledge (reference) information and ideas that you find in articles?","3. What are reporting verbs, and can you use any reporting verb to present an idea from a source?","4. How is referencing information different from referencing ideas?"]}]
            },
            {
              type: "sort",
              id: "b1-sort",
              title: "Information (fact) or idea (opinion)?",
              hint: "All of these come from this week’s sources.",
              buckets: [{"label":"Information (fact)","letter":"F"},{"label":"Idea (opinion)","letter":"I"}],
              items: [
                {"text":"Tourism overall contributes 10% to global CO2 emissions.","answer":0,"why":"A number you can check — information."},
                {"text":"In 2015, governments adopted the 2030 Agenda for Sustainable Development.","answer":0},
                {"text":"16 villages on Rempang Island, Indonesia were recently evicted.","answer":0},
                {"text":"Ecotourism is now more a marketing term.","answer":1,"why":"Mielly’s judgement — an idea (opinion)."},
                {"text":"Indigenous land rights take precedence over any other rights.","answer":1,"why":"A lawyer’s position — an idea."},
                {"text":"Attitudes can shift over time.","answer":1}
              ]
            },
            {
              type: "language",
              title: "Useful language: discussing in a group",
              groups: [
                {"label":"Give your view","phrases":["In my view, a fact is something you can …, whereas an idea …","I’d say we need to reference both, because …"]},
                {"label":"Build on others","phrases":["Building on what … said, …","That’s a good point. I’d also add that …","I see it slightly differently: …"]}
              ]
            }
          ],
          answers: {
            items: [
              ["2. Acknowledge?","Yes — both information and ideas."],
              ["3. Reporting verbs","Verbs like <i>state, point out, claim</i>. You cannot use just any verb: choose one that reflects the <b>source’s purpose</b> and/or <b>your position</b>."],
              ["4. Information vs ideas","<b>Information</b> needs more objective citing (an external citation, or objective reporting verbs such as <i>states</i> or <i>according to</i>). <b>Ideas</b> are better cited with more subjective/evaluative reporting verbs such as <i>claims</i>."]
            ]
          }
        },
        {
          id: "b2",
          short: "Internal / external",
          minutes: 12,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-b2.svg",
          title: "Internal and external citation",
          goal: "Tell internal and external citations apart, and say why a writer chooses each one.",
          blocks: [
            {"type":"figure","src":"dec10/assets/week4/d4-cite-types.svg","size":"wide","alt":"Two sentence strips. Internal: As Mielly (2023) points out, terms such as sustainable and regenerative tourism lack clear definitions — the source name is inside the sentence. External: Ecotourism aligns with a number of Sustainable Development Goals (Spenceley & Rylance, 2021) — the source is outside the sentence, in brackets at the end.","caption":"Internal = the source is part of the sentence. External = the source is in brackets."},
            {
              type: "sort",
              id: "b2-sort",
              title: "Which of these citations are internal and which are external?",
              buckets: [{"label":"Internal","letter":"I"},{"label":"External","letter":"E"}],
              items: [
                {"text":"As Mielly (2023) points out, terms such as sustainable and regenerative tourism lack clear definitions.","answer":0},
                {"text":"Mielly (2023) acknowledges that regulations to enforce sustainable practices have met with success.","answer":0},
                {"text":"Ecotourism aligns with a number of Sustainable Development Goals (Spenceley & Rylance, 2021).","answer":1},
                {"text":"The positive depiction of Costa Rica as a model of sustainable tourism (Alom, 2023) illustrates …","answer":1,"why":"The brackets can come in the middle of a sentence — it is still external."}
              ]
            },
            {
              type: "talk",
              title: "Why choose one or the other?",
              prompts: ["Why do you think a writer might choose an internal or an external citation? Discuss with your classmates and your teacher."]
            },
            {
              type: "key",
              title: "Three main reasons to use an internal citation",
              numbered: true,
              points: [
                "The <b>name of the source</b> is important — for example, the source is well recognised in their field.",
                "There is <b>too much information</b> from one source to fit into one sentence.",
                "You want to <b>compare</b> the ideas of one source with those of another."
              ]
            },
            {"type":"do","n":1,"who":"pair","text":"<b>Skim</b> Spenceley and Rylance (2021) and find all the citations. Are they internal or external? Why? Then skim Mielly (2023). How many citations can you find? Why?"},
            {"type":"sources","ids":["ecosdg","bluewash"]},
            {
              type: "quiz",
              id: "b2-q",
              title: "What did you find?",
              items: [
                {"q":"The citations in Spenceley and Rylance (2021) are mostly …","options":["internal","external"],"answer":"external","why":"They mostly cite <b>information</b> or examples of something."},
                {"q":"How many citations are there in Mielly (2023)?","options":["None","About five","More than ten"],"answer":"None","why":"It is <b>journalistic</b> writing, so it does not have many features of academic writing, such as citations."}
              ]
            },
            {
              type: "language",
              title: "Useful language: talk about citations",
              groups: [
                {"label":"Describe","phrases":["This is an internal citation because the name is part of the sentence.","The citation comes at the end, in brackets.","Most of the citations in this text are external."]},
                {"label":"Explain a choice","phrases":["The writer probably chose an internal citation to highlight …","Here the information is more important than the source.","Because it is a news article, it doesn’t cite sources."]}
              ]
            }
          ]
        },
        {
          id: "b3",
          short: "Examples",
          minutes: 10,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-b3.svg",
          title: "Examples of external and internal citations",
          goal: "Explain how and why writers structure sentences with citations.",
          blocks: [
            {"type":"do","n":1,"who":"pair","text":"Answer the questions about each set of examples. They come from the readings and from Sample essay 4.1. Say your answer to your partner <b>before</b> you choose."},
            {
              type: "model",
              title: "External citations",
              rows: [
                ["(a) Spenceley & Rylance (2021)","Visiting places with lots of biodiversity can prevent health issues like obesity, heart disease, depression, and anxiety (Sparkes & Woods, 2009)."],
                ["(b) Sample essay 4.1","The positive depiction of Costa Rica as a model of sustainable tourism (Alom, 2023) illustrates how tourism can be integrated successfully to support the local economy."]
              ]
            },
            {
              type: "quiz",
              id: "b3-q1",
              title: "External citations: structure",
              items: [
                {"q":"What is the difference in sentence structure between (a) and (b)?","options":["In (a) the whole sentence is from the source; in (b) only the first piece of information is from the source and the rest is the writer’s opinion","There is no difference","In (b) the whole sentence is from the source"],"answer":"In (a) the whole sentence is from the source; in (b) only the first piece of information is from the source and the rest is the writer’s opinion","why":"The position of the brackets shows which part comes from the source."},
                {"q":"Why did each writer structure their sentence this way?","options":["To make it clear which part of the sentence was an idea from a source","To use fewer words","Because APA always puts brackets in the middle"],"answer":"To make it clear which part of the sentence was an idea from a source","why":"(a) the whole idea; (b) just the first part."}
              ]
            },
            {
              type: "model",
              title: "External citations (cont.) · Sample essay 4.1",
              text: "In response to the negative impacts, ecotourism has emerged as a potential form of responsible tourism <b>(Alom, 2023; Mielly, 2023; Spenceley & Rylance, 2021)</b>."
            },
            {
              type: "quiz",
              id: "b3-q2",
              title: "Several sources in one citation",
              items: [
                {"q":"Why has the writer cited several references externally in this sentence?","options":["The information is more important than the source, and more evidence makes the argument stronger","The writer forgot which source said it","APA needs three sources in every introduction"],"answer":"The information is more important than the source, and more evidence makes the argument stronger","why":"They all talk about the potential of ecotourism, so more supporting evidence = a stronger argument."},
                {"q":"In what order are the sources cited?","options":["Alphabetical, as per APA style","By year","By importance"],"answer":"Alphabetical, as per APA style"}
              ]
            },
            {"type":"tip","text":"<b>Find more:</b> Spenceley and Rylance (2021), paragraph D, last sentence · Sample 4.1, Body 3: <i>These projects, while beneficial for both tourists and some local activities and businesses (Alom, 2023; Spenceley & Rylance, 2021) …</i>"},
            {
              type: "model",
              title: "Internal citations · Sample essay 4.1",
              rows: [
                ["(a)","<b>As Mielly (2023) points out,</b> terms such as sustainable and regenerative tourism lack clear definitions and regulatory enforcement."],
                ["(b)","These projects … can also be manipulated to justify the displacement of local indigenous people, for example, in the cases of communities in Indonesia and Brazil, <b>as Mielly (2023) points out</b>."]
              ]
            },
            {
              type: "quiz",
              id: "b3-q3",
              title: "Internal citations: why and how",
              items: [
                {"q":"Why did the writer use an internal citation in each case?","options":["The next sentence is also Mielly’s idea, so the writer can say “The writer …” instead of repeating the citation","Internal citations are always better","To make the paragraph longer"],"answer":"The next sentence is also Mielly’s idea, so the writer can say “The writer …” instead of repeating the citation","why":"This can’t be done with an external citation."},
                {"q":"What is the difference in sentence structure?","options":["“As Mielly (2023) points out” is at the beginning in (a) and at the end in (b), separated by a comma","(a) is external and (b) is internal","There is no difference"],"answer":"“As Mielly (2023) points out” is at the beginning in (a) and at the end in (b), separated by a comma"},
                {"q":"Why did the writer structure each sentence this way?","options":["(a) emphasises the source of the evidence; (b) emphasises the evidence and example","(a) is more polite","(b) is shorter"],"answer":"(a) emphasises the source of the evidence; (b) emphasises the evidence and example","why":"The writer controls how they express things for their own purposes."}
              ]
            },
            {
              type: "passage",
              id: "b3-pa",
              title: "Internal citations (cont.) · Sample essay 4.1, Body paragraph 3, sentence 3",
              text: "These projects, while beneficial for both tourists and some local activities and businesses (Alom, 2023; Spenceley & Rylance, 2021), can also be manipulated to justify the displacement of local indigenous people, for example, in the cases of communities in Indonesia and Brazil, as Mielly (2023) points out."
            },
            {
              type: "talk",
              title: "Explain to your partner",
              prompts: ["Why did the author split the two references? Highlight the source parts and the writer’s part, then explain."]
            }
          ],
          answers: {"items":[["Why split the references?","The information is from two separate sources, separated by the <b>writer’s voice</b> in the middle, which unites them into one main point: a counterargument (first source), the rejection of it (writer’s voice) and an example supporting the writer’s voice (Mielly). The sentence structure makes this clear."]]}
        },
        {
          id: "b4",
          short: "Verb types",
          minutes: 7,
          grouping: "Class → pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-b4.svg",
          title: "Reporting verbs: types",
          goal: "Decide if a reporting verb reports objectively or shows your evaluation.",
          blocks: [
            {"type":"do","n":1,"who":"class","text":"With your classmates and teacher, list as many reporting verbs as you can in <b>one minute</b>."},
            {"type":"figure","src":"dec10/assets/week4/d4-verb-types.svg","size":"wide","alt":"A scale with two sides. Left, discourse reporting verbs, to objectively report information and facts from a source: states, explains, mentions, notes, reports, lists, suggests, points out. Right, evaluative reporting verbs, to express your evaluation of information or ideas: claims, contends, assumes, alleges, exaggerates, implies, reveals.","caption":"Discourse verbs report. Evaluative verbs judge."},
            {
              type: "sort",
              id: "b4-sort",
              title: "Discourse or evaluative?",
              hint: "Use the tables in your booklet (W3 D4. 17D, Language Reference).",
              buckets: [{"label":"Discourse: objectively report information","letter":"D"},{"label":"Evaluative: show your evaluation","letter":"E"}],
              items: [
                {"text":"state","answer":0},{"text":"explain","answer":0},{"text":"mention","answer":0},{"text":"list","answer":0},{"text":"report","answer":0},{"text":"note","answer":0},
                {"text":"contend","answer":1,"why":"You disagree with the source’s position."},
                {"text":"assume","answer":1,"why":"The source treated something as fact, but it may not be."},
                {"text":"allege","answer":1,"why":"The source makes a claim without proof."},
                {"text":"exaggerate","answer":1},
                {"text":"imply","answer":1}
              ]
            },
            {"type":"tip","text":"<b>“claim”</b> is in both tables in your booklet: it can report that a source stated something as a fact, or show that <b>you</b> distance yourself from the writer’s position."}
          ]
        },
        {
          id: "b5",
          short: "Verb patterns",
          minutes: 9,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-b5.svg",
          title: "Sentence structure patterns for reporting verbs",
          goal: "Use reporting verbs in correct sentence patterns.",
          blocks: [
            {"type":"figure","src":"dec10/assets/week4/d4-verb-patterns.svg","size":"wide","alt":"Five colour-coded sentence patterns. Pattern 1, verb + noun phrase: Adams (2022) outlines the important role of education. Pattern 2, verb + noun clause: Mielly (2023) acknowledges that regulations … have met with success. According to + source + sentence: According to Yu (2022), the role of governments is limited. As + source + verb, + sentence: As Yu (2022) explains, the role of governments is limited. Noun phrase, + verb + source, + rest: The importance of education, argues Adams (2022), needs to be emphasised.","caption":"Five patterns to vary your citations"},
            {
              type: "tabs",
              title: "The patterns",
              tabs: [
                {"label":"Pattern 1","blocks":[{"type":"model","title":"verb + noun phrase","list":["Robertson (2024) <b>mentions</b> a number of factors responsible for the problem.","Adams (2022) <b>outlines</b> the important role of education."]}]},
                {"label":"Pattern 2","blocks":[{"type":"model","title":"verb + noun clause","list":["Mielly (2023) <b>acknowledges that</b> regulations to enforce sustainable practices have met with success.","Yu (2022) <b>explains why</b> the role of governments is limited."]}]},
                {"label":"Other patterns","blocks":[{"type":"model","title":"Other common patterns","list":["<b>According to</b> [source] (year) + sentence: However, according to Yu (2022), the role of governments is limited. · According to Yu (2022), however, the role of governments is limited.","<b>As</b> [source] (year) + verb, + sentence: However, as Mielly (2023) also points out, attitudes can change. · As Yu (2022) explains, the role of governments is limited.","Noun phrase, + verb + [source] (year), + rest of sentence: However, the role of governments, explains Yu (2022), is limited. · The importance of education, argues Adams (2022), needs to be emphasised."]}]}
              ]
            },
            {
              type: "quiz",
              id: "b5-q",
              title: "Which sentence is correctly structured?",
              items: [
                {"q":"Pattern 1 (verb + noun phrase)","options":["Spenceley and Rylance (2021) list several sports tourism events.","Spenceley and Rylance (2021) list that several sports tourism events.","Spenceley and Rylance (2021) list about several sports tourism events."],"answer":"Spenceley and Rylance (2021) list several sports tourism events.","why":"<i>list</i> + noun phrase. No “that”, no “about”."},
                {"q":"Pattern 2 (verb + noun clause)","options":["Alom (2023) points out tourism contributes to 10% CO2.","Alom (2023) points out that tourism overall contributes 10% to global CO2 emissions.","Alom (2023) points out about tourism contributes 10%."],"answer":"Alom (2023) points out that tourism overall contributes 10% to global CO2 emissions."},
                {"q":"“As …” pattern","options":["As Mielly (2023) explains, ecotourism is now more a marketing term.","As Mielly (2023) explains that ecotourism is now more a marketing term.","As explains Mielly (2023), ecotourism is now more a marketing term."],"answer":"As Mielly (2023) explains, ecotourism is now more a marketing term.","why":"<i>As + source + verb,</i> — then a full sentence. No “that”."},
                {"q":"“According to …” pattern","options":["According to Alom (2023) states, Costa Rica earned nearly 5% of its GDP from tourism.","According to Alom (2023), Costa Rica earned nearly 5% of its GDP from tourism.","According Alom (2023), Costa Rica earned nearly 5% of its GDP from tourism."],"answer":"According to Alom (2023), Costa Rica earned nearly 5% of its GDP from tourism.","why":"Never use a reporting verb after “According to”."}
              ]
            },
            {
              type: "spinner",
              id: "b5-spin",
              title: "Pattern challenge",
              text: "Spin. Say one sentence about ecotourism with this source and this pattern. Your partner checks the structure.",
              reels: [
                {"label":"Source","items":["Spenceley and Rylance (2021)","Mielly (2023)","Alom (2023)"]},
                {"label":"Pattern","items":["verb + noun phrase","verb + that-clause","According to …,","As … explains / points out,","Noun phrase, argues …, verb"]}
              ]
            }
          ]
        },
        {
          id: "b6",
          short: "Edit",
          minutes: 8,
          grouping: "Groups",
          art: "dec10/assets/week4/v/v-d10w4d4-b6.svg",
          title: "Review and edit your practice task",
          goal: "Check the citations and reporting verbs in your practice essay.",
          blocks: [
            {
              type: "steps",
              items: [
                {"who":"alone","text":"Find the table of reporting verbs in your booklet (<b>W3 D4. 17D Citing sources homework</b>, Language Reference)."},
                {"who":"alone","text":"Go back to the practice essay you wrote and reviewed yesterday. Look carefully at your citations."},
                {"who":"group","text":"Work with your groupmates and teacher to review and edit your essay."}
              ]
            },
            {
              type: "checklist",
              id: "b6-check",
              title: "Review your citations",
              items: ["Is my use of internal and external citations appropriately balanced?","Are my reporting verbs appropriate?","Are my sentences with reporting verbs correctly structured?"]
            },
            {
              type: "detect",
              id: "b6-dt",
              label: "Edit studio",
              title: "Rewrite one sentence from your essay",
              hint: "Copy one sentence with a citation. Then improve it. The lights show what you used.",
              checks: [
                {"label":"Citation (Name, year) or Name (year)","color":"#13887a","any":["/\\([A-Z][^)]*\\d{4}\\)/","/[A-Z][a-zA-Z-]+( et al\\.| and [A-Z][a-zA-Z-]+)? \\(\\d{4}\\)/"]},
                {"label":"Reporting verb","color":"#3a58a0","any":["points out","explains","states","argues","suggests","claims","acknowledges","mentions","notes","emphasises","emphasizes","outlines","lists","according to","contends","makes the point","reveals","reports","describes"]},
                {"label":"& inside brackets","color":"#985c0e","any":["/\\([A-Z][^)]*&[^)]*\\d{4}\\)/"]}
              ],
              items: [
                {"task":"My original sentence","rows":2,"placeholder":"Paste a sentence from your practice essay…"},
                {"task":"My improved sentence","rows":3,"placeholder":"Your edited version…"}
              ]
            },
            {
              type: "language",
              title: "Useful language: peer editing",
              groups: [
                {"label":"Ask","phrases":["Could you check my citation here?","Is “claims” the right verb, or is it too negative?"]},
                {"label":"Suggest","phrases":["You could use an internal citation here to highlight the source.","After “According to”, you don’t need a verb.","Inside brackets, use “&”, not “and”."]}
              ]
            }
          ]
        },
        {
          id: "b7",
          short: "Voice",
          minutes: 6,
          grouping: "Class → pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-b7.svg",
          title: "Voice",
          goal: "Understand what “voice” means in academic writing.",
          blocks: [
            {"type":"figure","src":"dec10/assets/week4/d4-voices.svg","size":"wide","alt":"An essay page in the middle. On the left, the writer speaks in a gold speech bubble: my position, my claim. On the right, three sources speak in teal bubbles with citation tags: Spenceley & Rylance (2021), Mielly (2023), Alom (2023). Arrows show the voices meeting in a discussion on the page.","caption":"Knowledge develops through discussion — in writing too."},
            {
              type: "key",
              title: "What is ‘voice’?",
              points: [
                "Knowledge develops through <b>discussion and debate</b> — in speaking, and also in writing.",
                "In academic writing, you present <b>your own ideas</b> but also include the <b>ideas of others</b>.",
                "So you need to distinguish between <b>your own voice</b> and the <b>voices of other people</b>.",
                "When you refer to the ideas of another person, that person is a <b>source</b>."
              ]
            },
            {"type":"tip","text":"Adapted from Brick, J. (2006). <i>Academic culture: A student’s guide to studying at university.</i> NCELTR, Macquarie University. In the next lesson, we will examine voice in <b>Sample essay 4.2</b>."},
            {
              type: "talk",
              title: "Explain it to a classmate",
              prompts: ["In your own words: what is the difference between your voice and a source’s voice?","How can a reader know which is which? (Think: citations, reporting verbs …)"]
            }
          ]
        }
      ]
    },

    /* ───────────────────────── STAGE 3 · 13A ───────────────────────── */
    {
      id: "workshop3",
      number: "03",
      code: "13A",
      minutes: 105,
      tone: "blue",
      art: "dec10/assets/week4/s-d4-workshop3.svg",
      title: "Integrated writing workshop (3)",
      subtitle: "Review Sample 4.2: argument, citations and the writer’s voice",
      outcome: "You have a further understanding of how to develop an argument, cite sources accurately and express your own voice clearly and effectively — and you compare Sample 4.2 with your practice essay to edit it.",
      activities: [
        {
          id: "c1",
          short: "Review",
          minutes: 15,
          grouping: "Groups of 3–4",
          art: "dec10/assets/week4/v/v-d10w4d4-c1.svg",
          title: "Review Sample 2",
          goal: "Remember what you found in Sample 4.2 for homework and compare it with Sample 4.1.",
          blocks: [
            {"type":"tip","text":"This lesson is based on <b>Sample essay 4.2</b> (Sample 2). You read and analysed it in the Integrated writing workshop homework (11A)."},
            {"type":"sources","ids":["s42","s41"]},
            {
              type: "spinner",
              id: "c1-spin",
              title: "Review wheel",
              text: "Spin and answer. Everyone in the group adds one idea before you spin again.",
              reels: [{"label":"Question","items":["1. How was the writer’s position different from that of Sample essay 4.1?","2. What other differences do you remember?","3. What similarities do you remember?","4. What was the process the writer went through in deciding their position?","5. Were the notes the writer took the same as, or different from, the notes for Sample 4.1?"]}]
            },
            {
              type: "bet",
              id: "c1-bet",
              title: "Quick bet: Sample 4.1 or 4.2? (from your homework)",
              coins: 10,
              items: [
                {"q":"Which sample introduces its position with a BUT link (“Despite this, however, …”)?","options":["Sample 4.1","Sample 4.2"],"answer":"Sample 4.2","why":"4.2 says yes, there are challenges, BUT some goals can still be achieved. 4.1 uses a SO link: there are challenges, SO the goals are unlikely to be achieved."},
                {"q":"Which sample breaks the goals into the local level and the global level?","options":["Sample 4.1","Sample 4.2"],"answer":"Sample 4.2"},
                {"q":"Which sample cites Mielly (2023) much more?","options":["Sample 4.1","Sample 4.2"],"answer":"Sample 4.1","why":"4.1 uses Mielly to support its view that the goals are unlikely to be achieved. This does <b>not</b> make 4.2 worse — each writer chose what to use for their own purpose."},
                {"q":"Which sample has no paragraph only for the counterargument, but embeds counterarguments and rejections in Body 1 and Body 2?","options":["Sample 4.1","Sample 4.2"],"answer":"Sample 4.2"}
              ]
            },
            {"type":"do","n":1,"who":"alone","text":"<b>Question 6.</b> How might listening to the writer talking about their process help you in planning and writing your essays in future? Write down your ideas and bring them to your next class."},
            {"type":"fields","fields":[{"id":"c1-6","label":"6. My ideas","placeholder":"Hearing how the writer chose their position could help me …","rows":3}]},
            {
              type: "language",
              title: "Useful language: compare two samples",
              groups: [
                {"label":"Differences","phrases":["Unlike Sample 4.1, Sample 4.2 argues that …","Whereas 4.1 …, 4.2 …","The main difference is the position: …"]},
                {"label":"Similarities","phrases":["Both samples …","Like 4.1, 4.2 also …","The introductions are almost the same, except for …"]}
              ]
            }
          ],
          answers: {"items":[["1. Position","4.1: the goals of ecotourism are unlikely to be achieved. 4.2: local goals are likely to be achieved, but not global goals in the short term."],["3. Similarities","Same question and sources; almost the same introduction structure (historical development → present response → the issue → the writer’s position); both use counterarguments effectively."]]}
        },
        {
          id: "c2",
          short: "Introduction",
          minutes: 10,
          grouping: "Groups",
          art: "dec10/assets/week4/v/v-d10w4d4-c2.svg",
          title: "Citations and voice · Look at the introduction",
          goal: "Find the writer’s voice in the introduction and the words that show their stance.",
          blocks: [
            {"type":"tip","text":"Use <b>Sample 4.2 (for language analysis)</b> at the back of your booklet. The paragraphs below are printed as in the Teacher’s Book — mark them up as you answer."},
            {"type":"figure","src":"dec10/assets/week4/d4-s42-map.svg","size":"wide","alt":"A map of Sample 4.2 paragraph by paragraph. Each paragraph is a row of sentence blocks: gold blocks are the writer’s voice, teal blocks have an external citation, blue blocks have an internal citation. Introduction: S1 gold, S2 teal, S3 gold, S4 gold. Body 1: S1–S4 teal, S5 blue, S6 gold. Body 2: S1 gold, S2–S4 teal, S5 gold. Body 3: S1 gold, S2 blue, S3 Alom’s idea, S4 gold. Conclusion: S1–S3 gold.","caption":"Sample 4.2 at a glance: gold = writer’s voice · teal = external citation · blue = internal citation"},
            {
              type: "passage",
              id: "c2-pa",
              title: "Sample 4.2 · Introduction",
              text: "¹International tourism has grown into a vast global industry, bringing with it an intense focus on its environmental and social impacts. ²In response to the negative impacts, ecotourism has emerged as a potential form of responsible tourism (Alom, 2023; Mielly, 2023; Spenceley & Rylance, 2021). ³At the same time, as the concept of ecotourism has evolved, so have the complexities and challenges associated with the implementation of its goals. ⁴Despite this, however, a number of goals, such as supporting livelihoods and preserving the environment, do remain achievable at the local level, even though those at the global level are an ongoing challenge."
            },
            {
              type: "grid",
              id: "c2-grid",
              title: "1a–b · Which sentences are the writer’s voice? What is the purpose?",
              columns: ["Whose voice?","Purpose"],
              options: ["Writer’s voice","Sources","Introduce the context","Synthesise evidence","State the issue","State the position"],
              rows: ["S1","S2","S3","S4"],
              answers: [["Writer’s voice","Introduce the context"],["Sources","Synthesise evidence"],["Writer’s voice","State the issue"],["Writer’s voice","State the position"]]
            },
            {
              type: "spot",
              id: "c2-spot",
              label: "Stance spotter",
              title: "1c · Which words in the writer’s voice express the writer’s stance?",
              hint: "Tap the evaluative words in sentences 3 and 4.",
              paras: ["³At the same time, as the concept of ecotourism has evolved, so have [[*the complexities and challenges]] associated with the implementation of its goals. ⁴[[*Despite this, however]], a number of goals, such as [[supporting livelihoods]] and preserving the environment, [[*do remain achievable]] at [[the local level]], even though those at the global level are [[*an ongoing challenge]]."]
            },
            {
              type: "talk",
              title: "Explain to your group",
              prompts: ["Why is S2 not the writer’s voice? How do you know?","How does “do remain achievable” show the writer’s position strongly?"]
            }
          ],
          answers: {"items":[["Writer’s voice","S1 to introduce the context · S3 to state the issue · S4 to state their position. (S2 synthesises three sources.)"],["Stance words (suggested)","complexities and challenges · Despite this, however · do remain achievable · an ongoing challenge"]]}
        },
        {
          id: "c3",
          short: "Body 1",
          minutes: 15,
          grouping: "Groups",
          art: "dec10/assets/week4/v/v-d10w4d4-c3.svg",
          title: "Citations and voice · Look at body paragraph 1",
          goal: "Count and explain the citations, and the reporting verb, in Body paragraph 1.",
          blocks: [
            {
              type: "passage",
              id: "c3-pa",
              title: "Sample 4.2 · Body paragraph 1",
              text: "¹The goals of ecotourism align with a number of Sustainable Development Goals to improve the lives of local communities (Spenceley & Rylance, 2021). ²Costa Rica stands as a successful model of how ecotourism has achieved this by supporting the local economy through the involvement of stakeholders at the local and small-scale level, which, in turn, has contributed to the GDP and to the stability of Costa Rica overall (Alom, 2023). ³Projects in Tanzania and Mozambique are similarly supporting the local workforce (Spenceley & Rylance, 2021). ⁴It is acknowledged that successes such as these are countered by less desirable practices, such as bluewashing, in apparent attempts to support ecotourism (Alom, 2023; Mielly, 2023). ⁵However, as Mielly (2023) also points out, attitudes can change. ⁶This means, therefore, that the very highlighting of questionable behaviour of tourism operators is likely to pressure them into aligning their activities to achieving the goals of ecotourism."
            },
            {
              type: "limit",
              id: "c3-lim",
              title: "2a · How many citations?",
              rule: "Write a NUMBER",
              max: 1,
              items: [
                {"q":"External citations:","accept":["4","four"],"model":"4","why":"S1, S2, S3 and S4."},
                {"q":"Internal citations:","accept":["1","one"],"model":"1","why":"S5: as Mielly (2023) also points out."}
              ]
            },
            {
              type: "quiz",
              id: "c3-q",
              title: "2b–e · Why did the writer do this?",
              items: [
                {"q":"2b. Why did the writer choose an internal citation in S5?","options":["To raise the importance of Mielly: even a critic of ecotourism can see a positive side, which supports the writer’s position","Because Mielly is the only source in the paragraph","Because S5 is a fact from a statistic"],"answer":"To raise the importance of Mielly: even a critic of ecotourism can see a positive side, which supports the writer’s position"},
                {"q":"2c. Why did the writer choose “points out”?","options":["It presents something as a fact, so it can’t be disputed — strong support for the writer’s position","It shows the writer disagrees with Mielly","It shows the source mentions the idea only briefly"],"answer":"It presents something as a fact, so it can’t be disputed — strong support for the writer’s position"},
                {"q":"2d. In S4, why does the writer cite two sources?","options":["Synthesis: both sources express the negative side of ecotourism","The writer did not know which one said it","To make the sentence longer"],"answer":"Synthesis: both sources express the negative side of ecotourism"},
                {"q":"2d. Why are the two sources in that order?","options":["Alphabetical order, as per APA 7th","Oldest first","Most important first"],"answer":"Alphabetical order, as per APA 7th"}
              ]
            },
            {
              type: "spot",
              id: "c3-spot",
              label: "Stance spotter",
              title: "2e · In S6, which words in the writer’s voice express the writer’s stance?",
              paras: ["⁶This means, [[*therefore]], that [[*the very highlighting]] of [[*questionable behaviour]] of [[tourism operators]] [[*is likely to pressure them]] into aligning their activities to achieving [[the goals of ecotourism]]."]
            },
            {
              type: "language",
              title: "Useful language: explain a writer’s choice",
              groups: [
                {"label":"Explain","phrases":["The writer chose an internal citation here to …","“Points out” presents the idea as a fact, so …","The two sources are synthesised because both …"]},
                {"label":"Evaluate","phrases":["This is effective because …","It makes the argument stronger since …","I would also consider …"]}
              ]
            }
          ],
          answers: {"items":[["2a","External – 4 · Internal – 1"],["2e · stance words (suggested)","therefore · the very highlighting · questionable behaviour · is likely to pressure them — the writer evaluates the operators’ behaviour and predicts a positive result, linking back to their position."]]}
        },
        {
          id: "c4",
          short: "Body 2",
          minutes: 12,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-c4.svg",
          title: "Citations and voice · Look at body paragraph 2",
          goal: "See which information comes from which source, and find the writer’s stance.",
          blocks: [
            {
              type: "passage",
              id: "c4-pa",
              title: "Sample 4.2 · Body paragraph 2",
              text: "¹The potential for ecotourism to achieve its goals extends beyond the benefits for local communities to the promotion of environmental conservation. ²Again, the Sustainable Development Goals align with those of ecotourism by focusing on environmental preservation through programs such as marine protection and agrotourism (Spenceley & Rylance, 2021). ³Indeed, positive outcomes in this regard can be seen occurring at the local level (Alom, 2023) and there are numerous ecotourism avenues through which environmental preservation is occurring, including sports tourism and corporate social responsibility projects (Spenceley & Rylance, 2021). ⁴Unfortunately, there are examples where environmental destruction has occurred as a consequence of tourism developments (Mielly, 2023). ⁵Nonetheless, such destruction, regrettable as it is, is clearly not preventing otherwise positive outcomes from being achieved."
            },
            {
              type: "quiz",
              id: "c4-q",
              title: "3a–b · Citations",
              items: [
                {"q":"3a. How many citations are external, and how many are internal?","options":["4 external, 0 internal","2 external, 2 internal","3 external, 1 internal"],"answer":"4 external, 0 internal","why":"S2 (Spenceley & Rylance), S3 (Alom) and (Spenceley & Rylance), S4 (Mielly)."},
                {"q":"3b. In S3, which information is from Alom (2023)?","options":["Positive outcomes can be seen occurring at the local level","Sports tourism and CSR projects","Environmental destruction"],"answer":"Positive outcomes can be seen occurring at the local level"},
                {"q":"3b. In S3, which information is from Spenceley and Rylance (2021)?","options":["Numerous ecotourism avenues for environmental preservation, including sports tourism and CSR projects","Positive outcomes at the local level","Tourism contributes 10% of CO2 emissions"],"answer":"Numerous ecotourism avenues for environmental preservation, including sports tourism and CSR projects"}
              ]
            },
            {
              type: "spot",
              id: "c4-spot",
              label: "Stance spotter",
              title: "3c–d · Find the writer’s evaluative language",
              hint: "Tap the words in S5 — and in other sentences — that show the writer’s stance.",
              paras: [
                "²[[*Again]], the Sustainable Development Goals align with those of ecotourism … ³[[*Indeed]], [[*positive outcomes]] in this regard can be seen occurring at the local level (Alom, 2023) and there are [[*numerous]] ecotourism avenues … ⁴[[*Unfortunately]], there are examples where environmental destruction has occurred as a consequence of [[tourism developments]] (Mielly, 2023).",
                "⁵[[*Nonetheless]], [[such destruction]], [[*regrettable as it is]], is [[*clearly not preventing]] [[*otherwise positive outcomes]] from being achieved."
              ]
            },
            {
              type: "talk",
              title: "Speak: say it with stance",
              prompts: ["Read S4 and S5 aloud. Stress the stance words (Unfortunately, Nonetheless, clearly). How do they change the message?","Say S5 again without the stance words. What is lost?"]
            }
          ],
          answers: {"items":[["3c · S5","Nonetheless · regrettable as it is · clearly not preventing · otherwise positive outcomes"],["3d · other sentences (suggested)","Again · Indeed · positive outcomes · numerous · Unfortunately"]]}
        },
        {
          id: "c5",
          short: "Body 3 & end",
          minutes: 13,
          grouping: "Pairs",
          art: "dec10/assets/week4/v/v-d10w4d4-c5.svg",
          title: "Citations and voice · Look at body paragraph 3 and the conclusion",
          goal: "Explain one-source paragraphs, reporting verb choices, and why conclusions have no citations.",
          blocks: [
            {
              type: "passage",
              id: "c5-pa",
              title: "Sample 4.2 · Body paragraph 3",
              text: "¹At the same time, it can be argued that any gains achieved at the local level will be negated by ongoing environmental impact of tourism at the global level. ²Alom (2023) makes the valid point that, taking into account the necessary aspects of travel such as accommodation and air transport, tourism overall contributes 10% to global CO2 emissions. ³The writer suggests addressing this problem by investing in new technology and new fuels, and by tourists making changes to the frequency and method of travel. ⁴These clearly constitute more long-term approaches towards achieving the goals of ecotourism at the global level, but this does not mean that local achievements are outweighed."
            },
            {
              type: "quiz",
              id: "c5-q",
              title: "4 · Body paragraph 3",
              items: [
                {"q":"4a. Why is there only one citation?","options":["S2 and S3 are both Alom’s ideas: one source, two sentences","The writer forgot the other sources","Only facts need citations"],"answer":"S2 and S3 are both Alom’s ideas: one source, two sentences"},
                {"q":"4b. Why is it an internal citation?","options":["It links the second sentence (“The writer suggests …”) to the same source without repeating the citation","Because it is a statistic","Because the paragraph is a counterargument"],"answer":"It links the second sentence (“The writer suggests …”) to the same source without repeating the citation"},
                {"q":"4c. Why “makes the valid point”?","options":["A variation of “points out” to present a fact that supports the writer’s argument; “valid” is a positive evaluation of Alom’s point","It shows the writer disagrees with Alom","It shows Alom mentions it only briefly"],"answer":"A variation of “points out” to present a fact that supports the writer’s argument; “valid” is a positive evaluation of Alom’s point"},
                {"q":"4c. Why “suggests” in S3?","options":["It is a discourse-related reporting verb: this is what the source did — it suggested this solution","It shows doubt about Alom","It reports a research finding"],"answer":"It is a discourse-related reporting verb: this is what the source did — it suggested this solution"}
              ]
            },
            {
              type: "passage",
              id: "c5-pb",
              title: "Sample 4.2 · Conclusion",
              text: "¹Ecotourism, while based on important local and global goals, is more likely to achieve the former than the latter, at least in the short term. ²Whereas the global goal of reducing the impact on climate change will require time, the goals of improving the lives and the environments of local populations are already seeing tangible results. ³It is important that there is ongoing awareness in order to maximise the contribution ecotourism is already making, and has the potential to continue making, to achieving its important social and environmental goals."
            },
            {
              type: "fields",
              title: "5 · The conclusion",
              fields: [
                {"id":"c5-5a","label":"5a. Why are there no citations?","placeholder":"Because the conclusion …","rows":2},
                {"id":"c5-5b","label":"5b. Which words in the writer’s voice express the writer’s stance?","placeholder":"more likely …","rows":2}
              ]
            },
            {
              type: "language",
              title: "Useful language: reporting verbs that show your stance",
              groups: [
                {"label":"Support (strong)","phrases":["X (2023) makes the valid point that …","As X (2023) rightly points out, …","X (2023) clearly shows that …"]},
                {"label":"Neutral","phrases":["X (2023) suggests …","X (2023) explains that …","The writer adds that …"]},
                {"label":"Distance","phrases":["X (2023) claims that …","X (2023) appears to assume that …"]}
              ]
            }
          ],
          answers: {"items":[["5a (suggested)","The conclusion is all the writer’s voice: it restates the position and summarises the reasons already supported with sources in the body. New evidence is not added in a conclusion."],["5b (suggested)","more likely … than … · at least in the short term · tangible results · It is important that … · ongoing awareness · important social and environmental goals"]]}
        },
        {
          id: "c6",
          short: "Speak it",
          minutes: 15,
          grouping: "Pairs → groups",
          art: "dec10/assets/week4/v/v-d10w4d4-c6.svg",
          title: "Extra practice: voice and citations out loud",
          goal: "Use citations, reporting verbs and your own voice when you speak — like in a tutorial.",
          blocks: [
            {"type":"tip","text":"Today’s map gives this lesson <b>15 extra minutes</b>. Use them to <b>speak</b> with sources — this helps your Seminar and Interactive Discussion too."},
            {
              type: "chat",
              title: "Listen to a tutorial: one student uses sources and voice",
              lines: [
                ["Tutor","So, do you think the goals of ecotourism are likely to be achieved?"],
                ["Lina","<mark>As Spenceley and Rylance (2021) explain,</mark> ecotourism can support local jobs, for example through marine-protected areas."],
                ["Lina","<mark>In my view,</mark> that is <mark>clear evidence</mark> that local goals can be achieved."],
                ["Tutor","But what about bluewashing?"],
                ["Lina","<mark>Admittedly,</mark> Mielly (2023) <mark>points out</mark> that some companies use green labels falsely. <mark>However,</mark> she also notes that attitudes can change — <mark>so I would argue</mark> the problem is not permanent."]
              ]
            },
            {
              type: "spinner",
              id: "c6-spin",
              title: "Source + voice",
              text: "Spin. Say <b>one source sentence</b> (with the citation and the verb) and then <b>one sentence in your own voice</b>. Your partner says “source” or “voice” after each sentence.",
              reels: [
                {"label":"Source","items":["Spenceley and Rylance (2021)","Mielly (2023)","Alom (2023)"]},
                {"label":"Topic","items":["local jobs","marine protection","bluewashing","10% of global CO2 emissions","Costa Rica","indigenous land rights","sports tourism"]},
                {"label":"Verb","items":["points out","explains","suggests","makes the valid point that","claims","According to …,"]}
              ]
            },
            {"type":"do","n":1,"who":"group","text":"<b>Mini tutorial (3 per group):</b> one student is the tutor and asks the essay question. Two students answer with sources and voice. Change roles every 3 minutes."},
            {
              type: "language",
              title: "Useful language: sources and voice in speaking",
              groups: [
                {"label":"Bring in a source","phrases":["According to Alom (2023), …","As Mielly (2023) points out, …","Spenceley and Rylance (2021) make the point that …"]},
                {"label":"Add your voice","phrases":["In my view, this shows that …","So I would argue that …","This clearly suggests …","I’m not fully convinced, because …"]},
                {"label":"Concede and answer","phrases":["Admittedly, … However, …","That’s true, but …","Even so, …"]}
              ]
            }
          ]
        },
        {
          id: "c7",
          short: "Compare",
          minutes: 25,
          grouping: "Alone → teacher",
          art: "dec10/assets/week4/v/v-d10w4d4-c7.svg",
          title: "Feedback literacy: Compare the sample with your response",
          goal: "Make judgements: compare your practice-test essay with Sample 4.2, then edit your essay.",
          blocks: [
            {"type":"figure","src":"dec10/assets/week4/d4-feedback-lit.svg","size":"wide","alt":"Feedback literacy in three steps going down. 1 Appreciating feedback: defining performance criteria (rubric), understanding feedback from teachers and peers, verbalising how feedback will be used. 2 Making judgements (highlighted, today’s focus): evaluating the quality of your own work and others’, comparing your own work against others and against exemplars. 3 Taking action: explaining how feedback has been applied, documenting actions taken.","caption":"Today’s focus: <b>Making judgements</b> — compare your work with an exemplar."},
            {"type":"do","n":1,"who":"alone","text":"Look again at the essay you wrote in the <b>practice test</b>. Complete the table. Count carefully."},
            {
              type: "table",
              id: "c7-tab",
              title: "1 · Compare these features of Sample 4.2 to your essay",
              columns: ["Questions","Your answers","Questions I want to ask my teacher about this"],
              fixed: [
                "1 How many external citations are there in the sample?",
                "2 How many external citations are there in your essay?",
                "3 How many internal citations are there in the sample?",
                "4 How many internal citations are there in your essay?",
                "5 How many sentences in the sample are in the writer’s voice?",
                "6 How many sentences in your essay are the writer’s voice?",
                "7 How many of the sentences in the sample begin with conjunctions as linking words?",
                "8 How many of the sentences in your essay begin with conjunctions as linking words?"
              ]
            },
            {
              type: "fields",
              fields: [
                {"id":"c7-2","label":"2 · Overall comparison: are there any other differences between the sample and your essay that you want to talk to your teacher about?","placeholder":"In the sample …, but in my essay …","rows":4},
                {"id":"c7-3","label":"3 · Revising, editing or re-writing: write your edited paragraph here.","placeholder":"Based on my comparison and Q&A with my teacher, …","rows":8}
              ]
            },
            {
              type: "language",
              title: "Useful language: talk to your teacher about your essay",
              groups: [
                {"label":"Compare","phrases":["The sample has … external citations, but I only have …","Unlike the sample, my essay has very few sentences in my own voice.","Like the sample, I …"]},
                {"label":"Ask","phrases":["Could you check whether my position is clear here?","Is this citation correctly structured?","Would an internal citation be better here?"]},
                {"label":"Plan","phrases":["Next time, I will …","I need to work on …","One change I will make now is …"]}
              ]
            }
          ],
          answers: {
            title: "Suggested counts for Sample 4.2 (the version used in this lesson)",
            items: [
              ["1 · External citations","9 (Intro S2; Body 1 S1–S4; Body 2 S2, S3 ×2, S4). Body 1 alone has 4."],
              ["3 · Internal citations","2 (Body 1 S5: Mielly (2023); Body 3 S2: Alom (2023))"],
              ["5 · Writer’s voice","About 11 sentences: Intro S1, S3, S4 · Body 1 S6 · Body 2 S1, S5 · Body 3 S1, S4 · Conclusion S1–S3. (Body 3 S3 has no citation, but it is Alom’s idea: “The writer suggests …”.)"],
              ["7 · Conjunctions at the start","None begin with <i>And, But</i> or <i>So</i>. The writer starts sentences with linking adverbials instead (However, Nonetheless, Indeed, Again, At the same time …). Conclusion S2 begins with <i>Whereas</i>, which is correct because the sentence has two clauses."]
            ]
          }
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ["nominalisation","changing verbs, adjectives or clauses into nouns or noun phrases","adopt → the adoption of"],
    ["noun phrase","a group of words built around one noun (the head noun)","the positive depiction of Costa Rica as a model of sustainable tourism"],
    ["concise","saying a lot in few words","Nominalisation makes writing more concise."],
    ["unpack","to break a long phrase into simple parts to understand it","Unpack the subject before you read the verb."],
    ["internal citation","a citation where the source’s name is part of the sentence","As Mielly (2023) points out, …"],
    ["external citation","a citation in brackets, outside the grammar of the sentence","(Spenceley & Rylance, 2021)"],
    ["reporting verb","a verb that tells the reader what a source says or does","points out, explains, claims, suggests"],
    ["discourse reporting verb","a verb that reports information objectively","states, explains, mentions"],
    ["evaluative reporting verb","a verb that shows your judgement of a source","contends, alleges, exaggerates"],
    ["voice","whose ideas a sentence expresses: the writer’s or a source’s","S4 is in the writer’s voice."],
    ["stance","the writer’s position or attitude","“clearly not preventing” shows the writer’s stance."],
    ["synthesise","to combine ideas from several sources into one point","S4 synthesises Alom and Mielly."],
    ["bluewashing","using unclear “sustainable” labels to hide that a company follows its own interests","Bluewashing undermines the goals of ecotourism."],
    ["displacement","forcing people to leave their home or land","the displacement of local indigenous people"],
    ["exemplar","a model piece of work that shows a good standard","Compare your essay with the exemplar."]
  ]
};
