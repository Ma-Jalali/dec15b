// Course-wide settings. Media URLs live here so they can be replaced without editing lessons.
window.DEC15_CONFIG = {
  // true = new browsers open in Teacher view (suggested answers + teacher notes always visible).
  // false = Student view: suggested answers open only after the student has tried the activity.
  teacherView: false,
  coreAudioUrl: '',                 // direct link to the adapted course audio, if available
  supplementalVideoId: '1MpfEeSem_4', // Our Changing Climate (2020) on YouTube
  policyUrl: 'https://www.sydney.edu.au/students/responsible-ai-use.html',
  // Supabase (online saving). Leave blank to save on the device only.
  // Use the project URL and the PUBLISHABLE / anon key — never the service_role key.
  supabaseUrl: 'https://bogagtbkiavnhuohzqzb.supabase.co',
  supabaseKey: 'sb_publishable_SThek4oq-ojxSq-CqIbTCg_mDvMkAYR',
  version: '2.73'
};
/* Several courses (DEC15, DEC10 …) use this app and the same Supabase project. Each page's course map
   (lessons/course.js, dec10/lessons/course.js) names its course with `id`; the class around the lessons
   (class list, chat, study groups, announcements, class board, answers switch, timer) is kept per course. */
window.DEC15_CLASS = {
  get id() { return window.DEC15_COURSE?.id || 'dec15'; },
  // class_settings keys: DEC15 keeps its original keys ('answers_open'); other courses add their id ('dec10:answers_open')
  key(k) { return this.id === 'dec15' ? k : this.id + ':' + k; },
  unkey(k) { return this.id === 'dec15' ? (String(k).includes(':') ? null : k) : String(k).startsWith(this.id + ':') ? k.slice(this.id.length + 1) : null; },
  // a row from a live update belongs to this course (rows saved before courses existed are DEC15's)
  mine(row) { return (row?.course || 'dec15') === this.id; }
};
