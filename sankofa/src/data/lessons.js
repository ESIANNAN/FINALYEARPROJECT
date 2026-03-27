// ─── QUIZ QUESTION BANK ────────────────────────────────────────────────────────
export const LESSONS = {
  greetings: [
    {
      twi: 'Akwaaba',
      roman: 'ak-waa-ba',
      meaning: 'Welcome',
      choices: ['Good morning', 'Welcome', 'Thank you', 'Goodbye'],
      correct: 1,
      cultural: '"Akwaaba" is Ghana\'s most beloved word — a warm, open welcome to all.',
    },
    {
      twi: 'Maakye',
      roman: 'maa-chee',
      meaning: 'Good morning',
      choices: ['Good night', 'Good morning', 'How are you', 'See you'],
      correct: 1,
      cultural: '"Maakye" is how Ghanaians greet each other in the early morning hours.',
    },
    {
      twi: 'Meda ase',
      roman: 'me-da-a-se',
      meaning: 'Thank you',
      choices: ['Thank you', 'Sorry', 'Please', "You're welcome"],
      correct: 0,
      cultural: '"Meda ase" expresses deep, heartfelt gratitude in Twi culture.',
    },
    {
      twi: 'Yaa anko',
      roman: 'yaa an-ko',
      meaning: 'Safe journey',
      choices: ['Good morning', 'Welcome', 'Safe journey', 'Hello'],
      correct: 2,
      cultural: '"Yaa anko" is a blessing offered to someone about to head out on a journey.',
    },
    {
      twi: 'Ete sɛn?',
      roman: 'e-te-sen',
      meaning: 'How are you?',
      choices: ['Goodbye', "What's your name", 'How are you?', 'Come here'],
      correct: 2,
      cultural: '"Ete sɛn?" is an everyday greeting checking on someone\'s wellbeing.',
    },
  ],

  family: [
    {
      twi: 'Maame',
      roman: 'maa-me',
      meaning: 'Mother',
      choices: ['Father', 'Sister', 'Mother', 'Aunt'],
      correct: 2,
      cultural: '"Maame" holds deep reverence — mothers are the backbone of the Ghanaian family.',
    },
    {
      twi: 'Paapa',
      roman: 'paa-pa',
      meaning: 'Father',
      choices: ['Uncle', 'Father', 'Brother', 'Grandfather'],
      correct: 1,
      cultural: '"Paapa" or "Agya" are both used for father in Twi-speaking homes.',
    },
    {
      twi: 'Onua',
      roman: 'o-nu-a',
      meaning: 'Sibling',
      choices: ['Friend', 'Sibling', 'Cousin', 'Neighbour'],
      correct: 1,
      cultural: '"Onua" — family bonds are considered sacred in Ghanaian society.',
    },
    {
      twi: 'Nana',
      roman: 'naa-na',
      meaning: 'Grandparent',
      choices: ['Grandparent', 'Elder', 'Chief', 'Parent'],
      correct: 0,
      cultural: '"Nana" is a term of great respect for elders and royalty alike.',
    },
  ],

  food: [
    {
      twi: 'Aduane',
      roman: 'a-dua-ne',
      meaning: 'Food',
      choices: ['Water', 'Food', 'Soup', 'Market'],
      correct: 1,
      cultural: 'Ghanaian cuisine is rich and communal — sharing food is a sign of love.',
    },
    {
      twi: 'Nsu',
      roman: 'n-su',
      meaning: 'Water',
      choices: ['Juice', 'Milk', 'Water', 'Tea'],
      correct: 2,
      cultural: 'Offering "nsu" (water) to a guest is a traditional act of hospitality.',
    },
    {
      twi: 'Fufu',
      roman: 'fu-fu',
      meaning: 'Pounded cassava dish',
      choices: ['Rice', 'Bread', 'Beans', 'Pounded cassava dish'],
      correct: 3,
      cultural: 'Fufu is Ghana\'s most iconic dish — eaten with soup using your right hand.',
    },
  ],
}

// ─── LESSON PATH (ordered curriculum) ─────────────────────────────────────────
export const LESSON_PATH = [
  { id: 'greetings', title: 'Greetings',      sub: '5 lessons · Hello, Goodbye',   icon: '👋',      status: 'done',   stars: 3 },
  { id: 'family',    title: 'Family & People', sub: '8 lessons · Names, relations', icon: '👨‍👩‍👧',   status: 'active', stars: 2 },
  { id: 'food',      title: 'Food & Market',   sub: '10 lessons · Eating, buying',  icon: '🍲',      status: 'locked', stars: 0 },
  { id: 'time',      title: 'Time & Numbers',  sub: '7 lessons · Days, counting',   icon: '🕐',      status: 'locked', stars: 0 },
  { id: 'travel',    title: 'Travel & Places', sub: '6 lessons · Directions',       icon: '🗺️',     status: 'locked', stars: 0 },
]

// ─── BADGES ────────────────────────────────────────────────────────────────────
export const BADGES = [
  { icon: '🔥', name: 'Streak 10',        earned: true  },
  { icon: '🎯', name: 'Perfect Score',    earned: true  },
  { icon: '🌟', name: 'First Lesson',     earned: true  },
  { icon: '🦅', name: 'Sankofa',          earned: true  },
  { icon: '👑', name: 'Top Learner',      earned: false },
  { icon: '💬', name: 'Conversationalist',earned: false },
  { icon: '📖', name: 'Bookworm',         earned: false },
  { icon: '🏆', name: 'Champion',         earned: false },
]

// ─── LANGUAGES ─────────────────────────────────────────────────────────────────
export const LANGUAGES = [
  { id: 'twi',     flag: '🔥', name: 'Twi',     region: 'Ashanti' },
  { id: 'ga',      flag: '🔥', name: 'Ga',      region: 'Accra'   },
  { id: 'fante',   flag: '🔥', name: 'Fante',   region: 'Central' },
  { id: 'ewe',     flag: '🔥', name: 'Ewe',     region: 'Volta'},

]

// ─── LEARNING GOALS ────────────────────────────────────────────────────────────
export const GOALS = [
  { id: 'beginner', icon: '', label: 'Beginner',  sub: 'I am new to the language'   },
  { id: 'intermediate',     icon: '', label: 'Intermediate',   sub: 'I know some basics'   },
  { id: 'advanced',  icon: '', label: 'Advanced',sub: 'I can form sentences'    },
  { id: 'fluency',   icon: '', label: 'Legend',     sub: 'I want mastery and culture'   },
]

// ─── QUICK PHRASES ─────────────────────────────────────────────────────────────
export const QUICK_PHRASES = [
  { twi: 'Wo ho te sɛn?', eng: 'How are you?',  tag: 'Greeting' },
  { twi: 'Me din de...',   eng: 'My name is...', tag: 'Intro'    },
  { twi: 'Mepaakyɛw',     eng: 'Please',         tag: 'Polite'   },
  { twi: 'Dabi',           eng: 'No',             tag: 'Basic'    },
  { twi: 'Aane',           eng: 'Yes',            tag: 'Basic'    },
  { twi: 'Wo firi he?',   eng: 'Where are you from?', tag: 'Social' },
]

// ─── LEADERBOARD ──────────────────────────────────────────────────────────────
export const LEADERBOARD = [
  { name: 'Abena K.', xp: 1240, flag: '🇬🇭', streak: 28, rank: 1 },
  { name: 'Kofi M.',  xp: 980,  flag: '🇬🇧', streak: 14, rank: 2 },
  { name: 'Ama D.',   xp: 210,  flag: '🇺🇸', streak: 9,  rank: 4 },
  { name: 'Yaw P.',   xp: 190,  flag: '🇨🇦', streak: 7,  rank: 5 },
  { name: 'Efua A.',  xp: 155,  flag: '🇬🇭', streak: 5,  rank: 6 },
  { name: 'Kojo B.',  xp: 120,  flag: '🇩🇪', streak: 3,  rank: 7 },
]

// ─── EXPLORE CATEGORIES ───────────────────────────────────────────────────────
export const EXPLORE_CATEGORIES = [
  { icon: '👋', title: 'Greetings', words: 24, color: '#F4A823', bg: '#FEF0C7' },
  { icon: '👨‍👩‍👧', title: 'Family',    words: 18, color: '#27AE60', bg: '#d4f4e2' },
  { icon: '🍲', title: 'Food',      words: 32, color: '#C0392B', bg: '#fdecea' },
  { icon: '🕐', title: 'Numbers',   words: 20, color: '#7B68EE', bg: '#ede8ff' },
  { icon: '🌍', title: 'Places',    words: 15, color: '#20B2AA', bg: '#d4f4f4' },
  { icon: '🎭', title: 'Culture',   words: 28, color: '#FF8C00', bg: '#fff3e0' },
]
