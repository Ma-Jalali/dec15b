/* DEC10 · Week 1 Day 1 — a short starter lesson so the DEC10 site works from day one.
   Replace or extend it with the real Week 1 Day 1 content (see lessons/_template.js for every block type).
   Keep the id 'd10w1d1' (and the activity / field ids below) once students have started. */
window.DEC15_LESSON = {
  id: 'd10w1d1',
  week: 1, day: 1,
  title: 'Welcome to DEC10',
  duration: 'About 1 hour',
  question: 'What do you want to be able to do in English by the end of DEC10?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus question',
  journey: 'Meet your classmates, find your way around the course site and set three goals for the next ten weeks.',
  image: 'assets/art/stage-group.svg',
  imageAlt: '',
  finish: { title: 'Next', text: 'Week 1, Day 2' },

  sections: [
    {
      id: 'meet', number: '01', minutes: 30,
      tone: 'teal', art: 'group',
      title: 'Meet your class',
      subtitle: 'Introduce yourself and learn about your classmates',
      outcome: 'You know a few classmates and what they want from the course.',
      activities: [
        {
          id: 'm1', short: 'Introductions', minutes: 20, grouping: 'Pair',
          title: 'Introduce yourself',
          goal: 'Tell a partner about yourself and your study plans.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Write short notes for each box below.' },
              { who: 'pair', text: 'Introduce yourself to a partner. Ask one follow-up question about each answer.' },
              { who: 'class', text: 'Introduce your partner to the class.' }
            ] },
            { type: 'fields', fields: [
              { id: 'm1-name', label: 'My name and where I am from', rows: 2 },
              { id: 'm1-degree', label: 'The degree I will study and why', rows: 2 },
              { id: 'm1-fact', label: 'One interesting thing about me', rows: 2 }
            ] },
            { type: 'language', groups: [
              { label: 'Introducing a partner', phrases: ['This is …. She / He / They come(s) from ….', '… is going to study … because ….', 'Something interesting about … is that ….'] }
            ] }
          ]
        }
      ]
    },
    {
      id: 'course', number: '02', minutes: 30,
      tone: 'amber', art: 'research',
      title: 'How DEC10 works',
      subtitle: 'Your course site, your notebook and your goals',
      outcome: 'You can use the course site and you have three goals for DEC10.',
      activities: [
        {
          id: 'c1', short: 'Course site', minutes: 10, grouping: 'Alone',
          title: 'Find your way around',
          goal: 'Use the main parts of the course site.',
          blocks: [
            { type: 'key', title: 'Your course site', points: [
              'Sign in (top bar) so your work is saved online and appears on every device.',
              'The side panel lists every week and lesson; “My notebook” keeps all your answers.',
              'Chats and the class discussion under each activity are for your DEC10 class.'
            ] },
            { type: 'checklist', id: 'c1-check', title: 'Try it now', items: [
              'I signed in.',
              'I opened the course map.',
              'I opened My notebook.',
              'I sent a hello message in Chats.'
            ] }
          ]
        },
        {
          id: 'c2', short: 'Goals', minutes: 20, grouping: 'Alone',
          title: 'Set your goals',
          goal: 'Write three goals for the next ten weeks.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Write one goal for each skill below. Make it specific: what will you do, and how will you know you did it?' },
              { who: 'pair', text: 'Compare your goals with a partner. Help each other make them more specific.' }
            ] },
            { type: 'fields', fields: [
              { id: 'c2-read', label: 'Reading and listening', placeholder: 'e.g. Take clear notes on a 10-minute lecture.', rows: 2 },
              { id: 'c2-write', label: 'Writing', placeholder: 'e.g. Write an essay that uses three sources correctly.', rows: 2 },
              { id: 'c2-speak', label: 'Speaking', placeholder: 'e.g. Ask and answer questions in a seminar.', rows: 2 }
            ] }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['goal', 'something you want to achieve', 'My goal is to write clearer paragraphs.'],
    ['follow-up question', 'a question that asks for more about an answer', 'A good follow-up question keeps the conversation going.']
  ]
};
