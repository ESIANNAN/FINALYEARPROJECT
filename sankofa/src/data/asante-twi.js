/**
 * ASANTE TWI — Full Language Dataset
 * Dialect: Asante Twi (spoken in Ashanti Region, Ghana)
 * Script: Latin with special characters (ɛ, ɔ, ŋ)
 * Levels: beginner · intermediate · advanced · legend
 *
 * Each entry:
 *   twi       — the word/phrase in Asante Twi
 *   roman     — phonetic pronunciation guide
 *   english   — English meaning
 *   example   — example sentence in Twi
 *   exampleEn — English translation of example sentence
 *   category  — thematic group
 *   notes     — cultural or grammatical note (optional)
 */

export const ASANTE_TWI = {
  meta: {
    language:   'Asante Twi',
    code:       'twi-asante',
    region:     'Ashanti Region, Ghana',
    family:     'Niger-Congo → Kwa → Akan',
    speakers:   '~9 million (L1), ~17 million (L1+L2)',
    script:     'Latin (with ɛ, ɔ, ŋ)',
    tones:      true,
    toneNote:   'Twi is a tonal language. High tone (á), Low tone (à), Mid tone (a). Tone changes meaning.',
    flag:       '🌿',
    color:      '#27AE60',
  },

  // ═══════════════════════════════════════════════════════════
  // BEGINNER — Everyday greetings, basic vocabulary, numbers
  // ═══════════════════════════════════════════════════════════
  beginner: {
    label:       'Beginner',
    description: 'Core greetings, numbers, colours, basic needs.',
    xpReward:    10,

    vocabulary: [
      // GREETINGS
      { twi:'Akwaaba',      roman:'ak-waa-ba',       english:'Welcome',           category:'Greetings', notes:'The most famous Ghanaian word; used to greet visitors warmly.' },
      { twi:'Maakye',       roman:'maa-chee',         english:'Good morning',      category:'Greetings', notes:'Said from sunrise until about noon.' },
      { twi:'Maaha',        roman:'maa-ha',           english:'Good afternoon',    category:'Greetings', notes:'Said roughly noon to sunset.' },
      { twi:'Maadwo',       roman:'maa-dwo',          english:'Good evening',      category:'Greetings', notes:'Said after sunset.' },
      { twi:'Wo ho te sɛn?',roman:'wo ho teh sen',    english:'How are you?',      category:'Greetings' },
      { twi:'Me ho yɛ',     roman:'meh ho yeh',       english:'I am fine',         category:'Greetings' },
      { twi:'Yaa anko',     roman:'yaa an-ko',        english:'Safe journey',      category:'Greetings', notes:'Said to someone leaving.' },
      { twi:'Yaa wo',       roman:'yaa wo',           english:'Response to farewell', category:'Greetings' },
      { twi:'Da yie',       roman:'da yee-eh',        english:'Goodnight',         category:'Greetings' },
      { twi:'Ɛte sɛn?',    roman:'eh-teh sen',       english:'How is it?',        category:'Greetings', notes:'Informal equivalent of "How are you?"' },

      // COURTESY
      { twi:'Meda ase',     roman:'meh-da-a-seh',     english:'Thank you',         category:'Courtesy' },
      { twi:'Meda ase paa', roman:'meh-da-a-seh paa', english:'Thank you very much', category:'Courtesy', notes:'"Paa" intensifies meaning.' },
      { twi:'Mepaakyɛw',   roman:'meh-paak-yehw',    english:'Please / Excuse me', category:'Courtesy' },
      { twi:'Kafra',        roman:'kaf-ra',           english:"I'm sorry / Excuse me", category:'Courtesy' },
      { twi:'Yoo',          roman:'yoh',              english:'Okay / Agreed',     category:'Courtesy' },
      { twi:'Daabi',        roman:'daa-bee',          english:'No',                category:'Courtesy' },
      { twi:'Aane',         roman:'aa-neh',           english:'Yes',               category:'Courtesy' },

      // INTRODUCTIONS
      { twi:'Wo din de sɛn?', roman:'wo deen deh sen', english:"What is your name?", category:'Introductions' },
      { twi:'Me din de …',    roman:'meh deen deh',    english:'My name is …',        category:'Introductions' },
      { twi:'Wo firi he?',    roman:'wo fee-ree heh',  english:'Where are you from?', category:'Introductions' },
      { twi:'Me firi …',      roman:'meh fee-ree',     english:'I am from …',         category:'Introductions' },
      { twi:'Wo wo mfe ahe?', roman:'wo wo m-feh a-heh', english:'How old are you?',  category:'Introductions' },

      // NUMBERS
      { twi:'Baako',    roman:'baa-ko',    english:'One (1)',   category:'Numbers' },
      { twi:'Mmienu',   roman:'mmee-enu',  english:'Two (2)',   category:'Numbers' },
      { twi:'Mmiɛnsa',  roman:'mmee-ensa', english:'Three (3)', category:'Numbers' },
      { twi:'Ɛnan',     roman:'eh-nan',    english:'Four (4)',  category:'Numbers' },
      { twi:'Enum',     roman:'eh-num',    english:'Five (5)',  category:'Numbers' },
      { twi:'Nsia',     roman:'n-shee-a',  english:'Six (6)',   category:'Numbers' },
      { twi:'Nson',     roman:'n-son',     english:'Seven (7)', category:'Numbers' },
      { twi:'Nwɔtwe',   roman:'n-wot-weh', english:'Eight (8)', category:'Numbers' },
      { twi:'Nkron',    roman:'n-kron',    english:'Nine (9)',  category:'Numbers' },
      { twi:'Du',       roman:'doo',       english:'Ten (10)',  category:'Numbers' },
      { twi:'Aduonu',   roman:'a-doo-onu', english:'Twenty (20)', category:'Numbers' },
      { twi:'Aduasa',   roman:'a-doo-a-sa', english:'Thirty (30)', category:'Numbers' },
      { twi:'Ɔha',      roman:'oh-ha',     english:'Hundred (100)', category:'Numbers' },

      // COLOURS
      { twi:'Kɔkɔɔ',   roman:'ko-ko',     english:'Red',    category:'Colours' },
      { twi:'Bibiri',   roman:'bee-bee-ree', english:'Black', category:'Colours' },
      { twi:'Fitaa',    roman:'fee-taa',   english:'White',  category:'Colours' },
      { twi:'Ahabammɔno', roman:'a-ha-bam-mo-no', english:'Green', category:'Colours' },
      { twi:'Ɔsrane',   roman:'o-sra-neh', english:'Yellow / Orange', category:'Colours' },

      // FAMILY
      { twi:'Maame',    roman:'maa-meh',   english:'Mother',      category:'Family' },
      { twi:'Paapa',    roman:'paa-pa',    english:'Father',      category:'Family' },
      { twi:'Onua',     roman:'o-nu-a',    english:'Sibling',     category:'Family' },
      { twi:'Nana',     roman:'naa-na',    english:'Grandparent / Royal title', category:'Family', notes:'Also a title of respect for elders and chiefs.' },
      { twi:'Ɔba',      roman:'oh-ba',     english:'Child',       category:'Family' },
      { twi:'Wɔfa',     roman:'woh-fa',    english:'Uncle',       category:'Family' },
      { twi:'Ɔna',      roman:'oh-na',     english:'Aunt',        category:'Family' },

      // FOOD & DRINK
      { twi:'Aduane',   roman:'a-dua-neh', english:'Food',        category:'Food' },
      { twi:'Nsu',      roman:'n-su',      english:'Water',       category:'Food' },
      { twi:'Fufu',     roman:'fu-fu',     english:'Pounded cassava/yam dish', category:'Food', notes:'Ghana\'s most iconic dish, eaten with both hands with soup.' },
      { twi:'Ɔtwe',     roman:'ot-weh',    english:'Soup',        category:'Food' },
      { twi:'Kube',     roman:'ku-beh',    english:'Coconut',     category:'Food' },
      { twi:'Borɔdeɛ',  roman:'boh-roh-deh-eh', english:'Plantain', category:'Food' },

      // BASIC VERBS
      { twi:'Ba',       roman:'ba',        english:'Come',        category:'Verbs' },
      { twi:'Kɔ',       roman:'ko',        english:'Go',          category:'Verbs' },
      { twi:'Di',       roman:'dee',       english:'Eat',         category:'Verbs' },
      { twi:'Nom',      roman:'nom',       english:'Drink',       category:'Verbs' },
      { twi:'Da',       roman:'da',        english:'Sleep / Lie down', category:'Verbs' },
      { twi:'Tena',     roman:'teh-na',    english:'Sit / Stay',  category:'Verbs' },
      { twi:'Gyina',    roman:'jee-na',    english:'Stand',       category:'Verbs' },
      { twi:'Dwen',     roman:'dwen',      english:'Think',       category:'Verbs' },
    ],

    phrases: [
      { twi:'Me pɛ aduane.',     roman:'meh peh a-dua-neh',   english:'I want food.',       category:'Needs' },
      { twi:'Mewɔ nkɔm.',       roman:'meh-woh n-kom',        english:'I am hungry.',       category:'Needs' },
      { twi:'Mennom nsu.',       roman:'meh-nom n-su',         english:'I want to drink water.', category:'Needs' },
      { twi:'Me nnim.',          roman:'meh n-nim',            english:'I don\'t know.',     category:'Common' },
      { twi:'Yɛ nkɔ!',          roman:'yeh n-ko',             english:'Let\'s go!',         category:'Common' },
      { twi:'Ɛyɛ fɛ paa.',      roman:'eh-yeh feh paa',       english:'It is very beautiful.', category:'Compliments' },
    ],

    quiz: [
      { twi:'Akwaaba', choices:['Welcome','Goodbye','Thank you','Good morning'], correct:0, cultural:'Akwaaba is known worldwide as Ghana\'s greeting of warmth and hospitality.' },
      { twi:'Maakye',  choices:['Good night','Good afternoon','Good morning','How are you'], correct:2, cultural:'Said early in the day, Maakye sets a warm tone for interactions.' },
      { twi:'Meda ase',choices:['Sorry','Please','Thank you','Goodbye'], correct:2, cultural:'Expressing gratitude is central to Akan social etiquette.' },
      { twi:'Aane',    choices:['No','Yes','Maybe','Please'], correct:1, cultural:'A simple and direct affirmation in Twi.' },
      { twi:'Fufu',    choices:['Rice','Fufu (pounded cassava)','Beans','Plantain'], correct:1, cultural:'Fufu is pounded in a large mortar — a communal activity in Ghanaian homes.' },
      { twi:'Maame',   choices:['Father','Uncle','Mother','Sister'], correct:2, cultural:'"Maame" — mothers are deeply revered in Akan matrilineal society.' },
      { twi:'Nsu',     choices:['Soup','Food','Water','Juice'], correct:2, cultural:'Offering water to a guest is a traditional sign of respect in Ghana.' },
      { twi:'Baako',   choices:['Two','Three','One','Four'], correct:2, cultural:'Numbers are foundational — Akan counting is used in market trade and daily life.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // INTERMEDIATE — Sentences, tenses, market, time, directions
  // ═══════════════════════════════════════════════════════════
  intermediate: {
    label:       'Intermediate',
    description: 'Full sentences, market phrases, time, directions, emotions.',
    xpReward:    20,

    vocabulary: [
      // TIME
      { twi:'Nnɛ',          roman:'n-neh',         english:'Today',          category:'Time' },
      { twi:'Ɛkyena',       roman:'eh-cheh-na',    english:'Tomorrow',       category:'Time' },
      { twi:'Ɛnnɛ',         roman:'eh-n-neh',      english:'Yesterday',      category:'Time' },
      { twi:'Anɔpa',        roman:'a-no-pa',       english:'Morning',        category:'Time' },
      { twi:'Awia',         roman:'a-wee-a',       english:'Afternoon',      category:'Time' },
      { twi:'Anadwo',       roman:'a-na-dwo',      english:'Night',          category:'Time' },
      { twi:'Dapɔn',        roman:'da-pon',        english:'Week',           category:'Time' },
      { twi:'Bosome',       roman:'bo-so-meh',     english:'Month',          category:'Time' },
      { twi:'Afe',          roman:'a-feh',         english:'Year',           category:'Time' },
      { twi:'Dwa',          roman:'dwa',           english:'Market day',     category:'Time', notes:'The traditional Akan week has 6 days based on market cycles.' },

      // DAYS OF THE WEEK (Soul days — born on these)
      { twi:'Kwasida',  roman:'kwa-see-da',  english:'Sunday',    category:'Days', notes:'Also the soul day name for Sunday-born males: Kwasi.' },
      { twi:'Dwowda',   roman:'dwo-da',      english:'Monday',    category:'Days' },
      { twi:'Benada',   roman:'beh-na-da',   english:'Tuesday',   category:'Days' },
      { twi:'Wukuada',  roman:'woo-kua-da',  english:'Wednesday', category:'Days' },
      { twi:'Yawda',    roman:'yaw-da',      english:'Thursday',  category:'Days' },
      { twi:'Fida',     roman:'fee-da',      english:'Friday',    category:'Days' },
      { twi:'Memeneda', roman:'meh-meh-neh-da', english:'Saturday', category:'Days' },

      // DIRECTIONS
      { twi:'Nifa',         roman:'nee-fa',        english:'Right',          category:'Directions' },
      { twi:'Benkum',       roman:'ben-kum',       english:'Left',           category:'Directions' },
      { twi:'Ɛwɔ hɔ?',     roman:'eh-woh-hoh',    english:'Where is it?',   category:'Directions' },
      { twi:'Kɔ wiem',      roman:'ko wee-em',     english:'Go straight',    category:'Directions' },
      { twi:'Sane',         roman:'sa-neh',        english:'Turn / Return',  category:'Directions' },
      { twi:'Apɔw',         roman:'a-pow',         english:'Mountain / Hill',category:'Directions' },
      { twi:'Nsuo',         roman:'n-suo',         english:'River / Water body', category:'Directions' },

      // MARKET & MONEY
      { twi:'Ɛyɛ sɛn?',    roman:'eh-yeh sen',    english:'How much is it?', category:'Market' },
      { twi:'Hyɛ me ho',    roman:'hyeh-meh-ho',   english:'Give me a discount', category:'Market', notes:'Used in negotiating at markets.' },
      { twi:'Sika',         roman:'see-ka',        english:'Money / Gold',   category:'Market', notes:'Historically referred to gold; now used for money.' },
      { twi:'Ɔpɛsewa',     roman:'oh-peh-seh-wa',  english:'Small amount / Cheap', category:'Market' },
      { twi:'Ɔdɔ pii',     roman:'oh-doh pee',    english:'Very expensive',  category:'Market' },
      { twi:'To',           roman:'toh',           english:'Buy',            category:'Market' },
      { twi:'Tɔn',          roman:'ton',           english:'Sell',           category:'Market' },
      { twi:'Kɔn',          roman:'kon',           english:'Queue / Line',   category:'Market' },

      // EMOTIONS
      { twi:'Ɔdɔ',          roman:'oh-doh',        english:'Love',           category:'Emotions' },
      { twi:'Anigye',       roman:'a-nee-jeh',     english:'Joy / Happiness',category:'Emotions' },
      { twi:'Awerɛhow',     roman:'a-weh-reh-ho',  english:'Sadness / Grief',category:'Emotions' },
      { twi:'Abufuw',       roman:'a-boo-foo',     english:'Anger',          category:'Emotions' },
      { twi:'Ɛhwɛ',         roman:'eh-hweh',       english:'Fear / Anxiety', category:'Emotions' },
      { twi:'Anibere',      roman:'a-nee-beh-reh', english:'Embarrassment',  category:'Emotions' },

      // BODY PARTS
      { twi:'Ti',           roman:'tee',           english:'Head',           category:'Body' },
      { twi:'Ani',          roman:'a-nee',         english:'Eye',            category:'Body' },
      { twi:'Aso',          roman:'a-so',          english:'Ear',            category:'Body' },
      { twi:'Efi',          roman:'eh-fee',        english:'Nose',           category:'Body' },
      { twi:'Ano',          roman:'a-no',          english:'Mouth',          category:'Body' },
      { twi:'Nsa',          roman:'n-sa',          english:'Hand',           category:'Body' },
      { twi:'Nan',          roman:'nan',           english:'Foot / Leg',     category:'Body' },
      { twi:'Akyi',         roman:'a-chee',        english:'Back',           category:'Body' },

      // INTERMEDIATE VERBS
      { twi:'Kasa',         roman:'ka-sa',         english:'Speak / Talk',   category:'Verbs' },
      { twi:'Tie',          roman:'tee-eh',        english:'Listen / Obey',  category:'Verbs' },
      { twi:'Hwɛ',          roman:'hweh',          english:'Look / Watch',   category:'Verbs' },
      { twi:'Pɛ',           roman:'peh',           english:'Want / Like',    category:'Verbs' },
      { twi:'Nim',          roman:'nim',           english:'Know',           category:'Verbs' },
      { twi:'Hu',           roman:'hu',            english:'See',            category:'Verbs' },
      { twi:'Kyerɛ',        roman:'cheh-reh',      english:'Show / Teach',   category:'Verbs' },
      { twi:'Hwe',          roman:'hweh',          english:'Try / Attempt',  category:'Verbs' },
      { twi:'Pue',          roman:'pu-eh',         english:'Come out / Leave', category:'Verbs' },
      { twi:'Hyɛ',          roman:'hyeh',          english:'Wear / Begin / Promise', category:'Verbs', notes:'Context-dependent verb with multiple meanings.' },
    ],

    phrases: [
      { twi:'Me pɛ sɛ me kɔ abɔnten.',   roman:'meh peh seh meh ko a-bon-ten', english:'I want to go outside.',         category:'Daily Life' },
      { twi:'Ɛbɛn he na wɔtɔn adeɛ?',    roman:'eh-ben heh na wo-ton a-deh-eh', english:'Where do they sell things?',    category:'Market' },
      { twi:'Sika bɛn na ɛho?',           roman:'see-ka ben na eh-ho',           english:'How much money is it?',         category:'Market' },
      { twi:'Me kɔ sukuu.',               roman:'meh ko su-kuu',                 english:'I am going to school.',         category:'Daily Life' },
      { twi:'Me dɔ wo.',                  roman:'meh doh wo',                    english:'I love you.',                   category:'Emotions', notes:'Very meaningful — not said casually.' },
      { twi:'Mepa wo kyɛw, boa me.',      roman:'meh-pa wo chehw, boa meh',      english:'Please help me.',               category:'Courtesy' },
      { twi:'Wobɛba anɔpa anaa anadwo?',  roman:'woh-beh-ba a-no-pa a-naa a-na-dwo', english:'Are you coming morning or night?', category:'Planning' },
      { twi:'Afei na ɛkɔ sen?',           roman:'a-fay na eh-ko sen',            english:'Where does it go from here?',   category:'Directions' },
    ],

    quiz: [
      { twi:'Ɛkyena',    choices:['Yesterday','Today','Tomorrow','Next week'], correct:2, cultural:'Planning ahead is valued in Ghanaian culture — always check before assuming.' },
      { twi:'Sika',      choices:['Food','Gold/Money','Water','Market'], correct:1, cultural:'Sika originally meant gold — the Ashanti kingdom was famous for its gold wealth.' },
      { twi:'Kasa',      choices:['Listen','See','Speak','Walk'], correct:2, cultural:'"Kasa" — communication and storytelling are pillars of Akan culture.' },
      { twi:'Nifa',      choices:['Left','Straight','Right','Behind'], correct:2, cultural:'Directions are essential for navigating Ghana\'s vibrant markets and cities.' },
      { twi:'Ɔdɔ',      choices:['Anger','Sadness','Fear','Love'], correct:3, cultural:'Love (Ɔdɔ) is expressed through actions in Akan culture — deeds over words.' },
      { twi:'Anigye',    choices:['Sadness','Joy','Anger','Fear'], correct:1, cultural:'Anigye — Ghanaians are known worldwide for their infectious joy and warmth.' },
      { twi:'Dapɔn',    choices:['Day','Month','Week','Year'], correct:2, cultural:'The Akan week traditionally had 6 days tied to market cycles.' },
      { twi:'Ti',        choices:['Hand','Foot','Head','Ear'], correct:2, cultural:'The head (Ti) is spiritually significant in Akan cosmology — it carries one\'s destiny (Okra).' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ADVANCED — Complex grammar, proverbs, storytelling, politics
  // ═══════════════════════════════════════════════════════════
  advanced: {
    label:       'Advanced',
    description: 'Proverbs, complex sentences, formal speech, Akan philosophy.',
    xpReward:    35,

    vocabulary: [
      // AKAN CONCEPTS & PHILOSOPHY
      { twi:'Sankofa',      roman:'san-ko-fa',     english:'Go back and fetch it (learn from the past)', category:'Philosophy', notes:'Symbolised by a bird turning back — a core Adinkra concept.' },
      { twi:'Sunsum',       roman:'sun-sum',       english:'Soul / Spirit',  category:'Philosophy', notes:'The personal spirit, distinct from the Okra (divine soul).' },
      { twi:'Okra',         roman:'oh-kra',        english:'Divine soul',    category:'Philosophy', notes:'The divine essence given by God (Onyame) to every person.' },
      { twi:'Mogya',        roman:'moh-jaa',       english:'Blood / Matrilineal lineage', category:'Philosophy', notes:'Clan identity is passed through the mother\'s blood in Akan society.' },
      { twi:'Ntoro',        roman:'n-toh-ro',      english:'Paternal spiritual essence', category:'Philosophy' },
      { twi:'Abusua',       roman:'a-boo-sua',     english:'Clan / Extended family', category:'Society', notes:'The matrilineal family unit — the cornerstone of Akan identity.' },
      { twi:'Ohene',        roman:'oh-heh-neh',    english:'King / Chief',   category:'Society' },
      { twi:'Ohemmaa',      roman:'oh-hem-maa',    english:'Queen mother',   category:'Society', notes:'The Queen Mother nominates and can destool chiefs — a powerful role.' },
      { twi:'Asafo',        roman:'a-sa-fo',       english:'Warrior company / Community group', category:'Society' },
      { twi:'Odwira',       roman:'od-wee-ra',     english:'Purification festival', category:'Culture', notes:'Annual Akan festival of purification and ancestral veneration.' },
      { twi:'Ɔkyeame',      roman:'oh-cheh-a-meh', english:'Royal linguist / Spokesperson', category:'Society', notes:'The king\'s linguist; all formal speech goes through the Okyeame.' },

      // FORMAL LANGUAGE
      { twi:'Ɛyɛ ara',      roman:'eh-yeh a-ra',   english:'It is exactly so',  category:'Formal' },
      { twi:'Ampa',         roman:'am-pa',         english:'Indeed / Truly',     category:'Formal' },
      { twi:'Anyɛe',        roman:'a-nyeh-eh',     english:'It didn\'t work / Failed', category:'Formal' },
      { twi:'Ɛboa',         roman:'eh-boa',        english:'It helps / It is useful', category:'Formal' },
      { twi:'Ɔkwan',        roman:'oh-kwan',       english:'Road / Way / Method', category:'Formal', notes:'Also metaphorical: "the way of doing things".' },
      { twi:'Nsɛm',         roman:'n-sem',         english:'Matter / Issue / Word', category:'Formal' },
      { twi:'Amanneɛ',      roman:'a-man-neh-eh',  english:'Culture / Custom / Tradition', category:'Culture' },
      { twi:'Amansɛm',      roman:'a-man-sem',     english:'State affairs / News', category:'Formal' },

      // ADVANCED VERBS
      { twi:'Gyae',         roman:'jeh',           english:'Stop / Quit',        category:'Verbs' },
      { twi:'Sua',          roman:'su-a',          english:'Learn',              category:'Verbs' },
      { twi:'Kyerɛkyerɛ',   roman:'cheh-reh-cheh-reh', english:'Teach repeatedly', category:'Verbs' },
      { twi:'Nante',        roman:'nan-teh',       english:'Walk',               category:'Verbs' },
      { twi:'Bɔ kɔkɔɔ',    roman:'boh ko-ko',     english:'Fight / Argue',      category:'Verbs', notes:'Literally "make noise".' },
      { twi:'Hia',          roman:'hee-a',         english:'Need / Lack',        category:'Verbs' },
      { twi:'De',           roman:'deh',           english:'Take / Use / With',  category:'Verbs', notes:'Highly versatile verb — context determines meaning.' },
      { twi:'Fa',           roman:'fa',            english:'Take / Carry',       category:'Verbs' },
      { twi:'Ma',           roman:'ma',            english:'Give',               category:'Verbs' },

      // WEATHER & ENVIRONMENT
      { twi:'Owia',         roman:'o-wee-a',       english:'Sun / Sunshine',     category:'Nature' },
      { twi:'Ɔsuo',         roman:'oh-suo',        english:'Rain',               category:'Nature' },
      { twi:'Mframa',       roman:'m-fra-ma',      english:'Wind',               category:'Nature' },
      { twi:'Awia',         roman:'a-wee-a',       english:'Daytime / Heat',     category:'Nature' },
      { twi:'Ahaban',       roman:'a-ha-ban',      english:'Leaf',               category:'Nature' },
      { twi:'Dua',          roman:'dua',           english:'Tree / Plant',       category:'Nature' },
      { twi:'Asase',        roman:'a-sa-seh',      english:'Earth / Land',       category:'Nature', notes:'Asase Yaa is the goddess of the Earth in Akan cosmology.' },
    ],

    proverbs: [
      {
        twi:       'Onipa na ɔyɛ onipa.',
        roman:     'o-nee-pa na oh-yeh o-nee-pa',
        english:   'It is a person who makes a person.',
        meaning:   'Human beings need each other to thrive — community over individualism.',
        category:  'Community',
      },
      {
        twi:       'Woforo dua pa a, na yepia wo.',
        roman:     'wo-fo-ro dua pa a, na yeh-pee-a wo',
        english:   'When you climb a good tree, you are given a push.',
        meaning:   'If you pursue worthwhile goals, others will support you.',
        category:  'Encouragement',
      },
      {
        twi:       'Agya a ɔwɔ abɔfra, ɔnhye ne ba awia mu.',
        roman:     'a-jah a oh-woh a-boh-fra, ohn-hyeh neh ba a-wee-a mu',
        english:   'A father who has a child does not leave them in the sun.',
        meaning:   'A true parent protects and cares for their child.',
        category:  'Family',
      },
      {
        twi:       'Ti koro nko agyina.',
        roman:     'tee ko-ro n-ko a-jee-na',
        english:   'One head does not constitute a council.',
        meaning:   'Important decisions require collective wisdom.',
        category:  'Leadership',
      },
      {
        twi:       'Obra yɛ kwan na ɔdɔ na ɔkyɛkyɛ.',
        roman:     'ob-ra yeh kwan na oh-doh na oh-cheh-cheh',
        english:   'Life is a path and love is what smooths it.',
        meaning:   'Love and compassion make life\'s journey easier.',
        category:  'Love',
      },
      {
        twi:       'Ɔyɛ onipa a ɔnim ne ho, na ɔnim ɔfonoɔ nso.',
        roman:     'oh-yeh o-nee-pa a oh-nim neh ho, na oh-nim oh-fo-noh-oh n-so',
        english:   'A person who knows themselves also knows others.',
        meaning:   'Self-knowledge leads to empathy and understanding.',
        category:  'Wisdom',
      },
    ],

    quiz: [
      { twi:'Sankofa',  choices:['Go forward only','Learn from the past','Forget the old','Seek gold'], correct:1, cultural:'Sankofa is one of Ghana\'s most globally recognised Adinkra symbols.' },
      { twi:'Abusua',   choices:['Friends','Enemy','Matrilineal clan','Market'], correct:2, cultural:'The Abusua is the backbone of Akan society — identity, land, and inheritance flow through it.' },
      { twi:'Ohemmaa',  choices:['King','Warrior','Queen Mother','Linguist'], correct:2, cultural:'The Queen Mother can nominate AND destool (remove) a chief — enormous power.' },
      { twi:'Okra',     choices:['Blood','Divine soul','Earth','Gold'], correct:1, cultural:'The Okra is given by Onyame (God) and returns to him at death.' },
      { twi:'Ɔkyeame', choices:['Drummer','Royal linguist','Farmer','Soldier'], correct:1, cultural:'No one speaks directly to an Akan chief — all must go through the Okyeame.' },
      { twi:'Asase',    choices:['Sky','River','Earth/Land','Forest'], correct:2, cultural:'Asase Yaa (Mother Earth) is honoured on Thursdays in Akan tradition.' },
      { twi:'Ampa',     choices:['No','Perhaps','Indeed/Truly','Later'], correct:2, cultural:'Precision of expression is highly valued in Akan oratory tradition.' },
      { twi:'Sua',      choices:['Forget','Teach','Learn','Refuse'], correct:2, cultural:'Education is deeply respected — "Sua" is a word of great importance.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // LEGEND — Oral literature, oratory, ancient vocabulary, deep culture
  // ═══════════════════════════════════════════════════════════
  legend: {
    label:       'Legend',
    description: 'Oral traditions, ceremonial speech, royal court language, Adinkra symbolism.',
    xpReward:    50,

    vocabulary: [
      // SPIRITUAL & COSMOLOGICAL
      { twi:'Onyame',       roman:'on-yaa-meh',    english:'God / Supreme Being', category:'Spiritual', notes:'Also called Nyame — the all-knowing, omnipotent deity in Akan religion.' },
      { twi:'Odomankoma',   roman:'o-do-man-ko-ma', english:'The Infinite Creator', category:'Spiritual', notes:'The Creator aspect of God who made the universe.' },
      { twi:'Onyankopon',   roman:'on-yan-ko-pon',  english:'The Alone, Great One', category:'Spiritual', notes:'The personal, ever-present God; Nyame in his personal relationship with humanity.' },
      { twi:'Abosom',       roman:'a-bo-som',      english:'Lesser deities / Nature spirits', category:'Spiritual', notes:'Intermediaries between humans and Onyame.' },
      { twi:'Asuman',       roman:'a-su-man',      english:'Charms / Protective spirits', category:'Spiritual' },
      { twi:'Saman',        roman:'sa-man',        english:'Ancestral spirit / Ghost', category:'Spiritual', notes:'The spirit of a deceased person that can interact with the living.' },
      { twi:'Asamando',     roman:'a-sa-man-do',   english:'Land of the ancestors / Spirit world', category:'Spiritual' },
      { twi:'Kra',          roman:'kra',           english:'Personal soul force / Fate', category:'Spiritual' },
      { twi:'Hyebea',       roman:'hyeh-beh-a',    english:'Destiny / What was spoken before birth', category:'Spiritual', notes:'Every soul speaks its destiny before birth in Akan belief.' },
      { twi:'Sunsum titiriw', roman:'sun-sum tee-tee-ree', english:'Great spirit / Courage', category:'Spiritual' },

      // ROYAL COURT LANGUAGE
      { twi:'Ɔhene a ɔte ase',  roman:'oh-heh-neh a oh-teh a-seh', english:'The living king', category:'Royal', notes:'Formal address — acknowledging the king is alive and reigning.' },
      { twi:'Ayɛkoo',           roman:'a-yeh-koo',    english:'Well done / Bravo',    category:'Royal', notes:'Used to acknowledge hard work or achievement — deeply meaningful.' },
      { twi:'Dae',              roman:'da-eh',         english:'Dream / Vision',       category:'Royal', notes:'Dreams are considered divine messages in Akan tradition.' },
      { twi:'Nhyiamu',          roman:'n-hyee-a-mu',   english:'Council meeting / Gathering', category:'Royal' },
      { twi:'Adae',             roman:'a-da-eh',       english:'Akan calendar festival (40-day cycle)', category:'Royal', notes:'Adae Kese is a major Ashanti ceremony held every 42 days.' },
      { twi:'Kuntunkantan',     roman:'kun-tun-kan-tan', english:'Arrogance / Conceit', category:'Royal', notes:'Name of an Adinkra symbol warning against pride.' },
      { twi:'Mmↄden',           roman:'m-mo-den',      english:'Effort / Strength',    category:'Royal' },

      // ADINKRA SYMBOLS (vocabulary)
      { twi:'Gye Nyame',        roman:'jeh nyaa-meh',  english:'Except God / Only God', category:'Adinkra', notes:'The most widely used Adinkra symbol — the omnipotence of God.' },
      { twi:'Dwennimmen',       roman:'dwen-nee-men',  english:'Ram\'s horns — humility with strength', category:'Adinkra' },
      { twi:'Funtunfunefu',     roman:'fun-tun-fu-neh-fu', english:'Siamese crocodiles sharing a stomach — unity', category:'Adinkra', notes:'Symbolises sharing and unity despite conflict.' },
      { twi:'Nyinkyim',         roman:'nyin-chim',     english:'Adaptability / Versatility', category:'Adinkra' },
      { twi:'Akoma',            roman:'a-ko-ma',       english:'Heart — patience and endurance', category:'Adinkra' },
      { twi:'Epa',              roman:'eh-pa',         english:'Handcuffs — law and justice', category:'Adinkra' },
      { twi:'Fawohodie',        roman:'fa-wo-ho-dee-eh', english:'Freedom / Emancipation', category:'Adinkra', notes:'Celebrated as a symbol of independence — used in pan-African movements.' },

      // ORAL LITERATURE DEVICES
      { twi:'Anansesem',        roman:'a-nan-seh-sem',  english:'Spider stories / Folklore', category:'Oral Literature', notes:'Stories of Anansi the Spider — beloved tales that spread throughout the African diaspora.' },
      { twi:'Anansi',           roman:'a-nan-see',      english:'Spider / Trickster figure', category:'Oral Literature', notes:'The wisest, most cunning character in West African folklore.' },
      { twi:'Mmrane',           roman:'m-ra-neh',       english:'Proverb / Wise saying',     category:'Oral Literature' },
      { twi:'Kwadwom',          roman:'kwa-dwom',       english:'Funeral dirge / Lament',    category:'Oral Literature' },
      { twi:'Nnwonkoro',        roman:'n-won-ko-ro',    english:'Female choral music tradition', category:'Oral Literature' },
      { twi:'Fontomfrom',       roman:'fon-tom-from',   english:'Royal drum ensemble',        category:'Oral Literature', notes:'Played only at the palace — reserved for royalty.' },
    ],

    proverbs: [
      {
        twi:      'Nyame bɔɔ onipa, ɔma no ho yɛ den.',
        roman:    'nyaa-meh boh o-nee-pa, oh-ma no ho yeh den',
        english:  'When God created man, He made him resilient.',
        meaning:  'Humans have an inner strength given by God to endure all trials.',
        category: 'Spiritual',
      },
      {
        twi:      'Obi nkyerɛ onipa Nyame.',
        roman:    'o-bee n-cheh-reh o-nee-pa nyaa-meh',
        english:  'No one shows a person God.',
        meaning:  'The relationship with God is personal and innate — it cannot be given by another.',
        category: 'Spiritual',
      },
      {
        twi:      'Abɔfra a ɔntumi nso ne dua no, na ɔmfa no mmɛto aduru.',
        roman:    'a-boh-fra a oh-n-tu-mee n-so neh dua no, na oh-m-fa no m-meh-to a-doo-roo',
        english:  'A child who cannot carry a tree does not bring it to pound medicine.',
        meaning:  'Assign tasks according to capability; do not burden others beyond their strength.',
        category: 'Wisdom',
      },
      {
        twi:      'Ahofadi na ɔwɔ sika a, ɔma ɔmanfo nyinaa.',
        roman:    'a-ho-fa-dee na oh-woh see-ka a, oh-ma oh-man-fo nyee-naa',
        english:  'When the wealthy person has gold, he gives to all the citizens.',
        meaning:  'Wealth carries the responsibility of generosity toward the community.',
        category: 'Society',
      },
      {
        twi:      'Ɔkwan biara ko fie.',
        roman:    'oh-kwan bee-a-ra ko fee-eh',
        english:  'Every road leads home.',
        meaning:  'No matter how far one travels, they must return to their roots.',
        category: 'Heritage',
      },
      {
        twi:      'Yɛnkɔ na yɛnba.',
        roman:    'yeh-n-ko na yeh-n-ba',
        english:  'We went and we came back.',
        meaning:  'Used to describe something that has been thoroughly done and resolved.',
        category: 'Completion',
      },
    ],

    ceremonialPhrases: [
      { twi:'Ɔhene Agyeman!',       roman:'oh-heh-neh a-jeh-man',  english:'King, may you reign long!',        context:'Royal salutation', notes:'Used when addressing an Ashanti chief or king.' },
      { twi:'Agya Onyame, yɛda wo ase!', roman:'a-jaa on-yaa-meh, yeh-da wo a-seh', english:'Father God, we thank you!', context:'Prayer', notes:'Opening line of traditional Akan prayer.' },
      { twi:'Mo ne mo! Mo ne mo!',   roman:'mo neh mo',             english:'You and you! (Recognition call)', context:'Ceremony', notes:'Call-and-response format used at community ceremonies.' },
      { twi:'Ayɛkoo! Ayɛkoo!',       roman:'a-yeh-koo',             english:'Well done! Bravo!',                context:'Celebration', notes:'Shouted to honor someone\'s achievement.' },
      { twi:'Adanse! Adanse!',        roman:'a-dan-seh',             english:'Witness! Bear witness!',           context:'Legal/Oath', notes:'Used when calling on witnesses during oaths or testimony.' },
    ],

    quiz: [
      { twi:'Onyame',   choices:['Earth Goddess','Supreme God','Ancestor Spirit','Chief'], correct:1, cultural:'Onyame is the supreme deity of the Akan — omniscient, omnipresent, and eternal.' },
      { twi:'Gye Nyame',choices:['Except love','Except death','Except God','Except gold'], correct:2, cultural:'The Gye Nyame symbol is found on everything from kente cloth to modern logos across Ghana.' },
      { twi:'Anansesem',choices:['Praise songs','Spider stories','Funeral dirges','Council debates'], correct:1, cultural:'Anansi stories spread via the slave trade into Caribbean and American folklore.' },
      { twi:'Fawohodie',choices:['Hard work','Slavery','Freedom','Justice'], correct:2, cultural:'Fawohodie was adopted as a symbol of African independence movements in the 20th century.' },
      { twi:'Saman',    choices:['Chief\'s messenger','Ancestral spirit','Market trader','Wise elder'], correct:1, cultural:'Ancestor veneration is central to Akan spirituality — the Saman watches over the living.' },
      { twi:'Adae',     choices:['A journey','A meal','A 40-day festival cycle','A type of cloth'], correct:2, cultural:'The Adae calendar links the Ashanti to their ancestors — still observed today at Manhyia Palace.' },
      { twi:'Asamando', choices:['A type of dance','The spirit world','A village name','A food dish'], correct:1, cultural:'Akan funerals are joyful celebrations — death is a transition to Asamando, not an end.' },
      { twi:'Akoma',    choices:['Arrow','Heart','Eye','Drum'], correct:1, cultural:'The Akoma Adinkra symbolises patience — "take heart and endure".' },
    ],
  },
}

export default ASANTE_TWI
