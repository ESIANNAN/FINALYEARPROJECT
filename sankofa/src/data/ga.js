/**
 * GA — Full Language Dataset
 * Language: Gã (Ga-Adangme)
 * Spoken: Greater Accra Region, Ghana
 * Script: Latin with special characters (ɛ, ɔ, ŋ, ŋ̃)
 * Levels: beginner · intermediate · advanced · legend
 *
 * Note: Ga is structurally different from Akan languages (Twi/Fante).
 * It belongs to the Kwa branch but is NOT part of the Akan sub-group.
 * Has Subject-Verb-Object word order and distinct tonal system.
 */

export const GA = {
  meta: {
    language:  'Gã (Ga)',
    code:      'ga',
    region:    'Greater Accra Region, Ghana',
    family:    'Niger-Congo → Kwa → Ga-Dangme',
    speakers:  '~900,000 (L1), ~3.5 million (L1+L2)',
    script:    'Latin (with ɛ, ɔ, ŋ, lɛ)',
    tones:     true,
    toneNote:  'Ga has two tones: high and low. Tone carries meaning distinctions.',
    flag:      '🌊',
    color:     '#2C3E50',
    notes:     'Ga is the indigenous language of Accra. The Ga people are the original inhabitants of Ghana\'s capital. Ga has a distinct grammar from Akan languages.',
  },

  // ═══════════════════════════════════════════════════════════
  // BEGINNER
  // ═══════════════════════════════════════════════════════════
  beginner: {
    label:       'Beginner',
    description: 'Essential Ga greetings, numbers, family, and basic needs.',
    xpReward:    10,

    vocabulary: [
      // GREETINGS
      { ga:'Ogbɔɔ',          roman:'og-boh-oh',     english:'Hello / Good morning',     category:'Greetings', notes:'Standard morning greeting in Ga.' },
      { ga:'Ojɛkoo',         roman:'oh-jeh-koo',    english:'Good afternoon',            category:'Greetings' },
      { ga:'Oshwɛ',          roman:'oh-shweh',      english:'Good evening',              category:'Greetings' },
      { ga:'Baafia',         roman:'baa-fee-a',     english:'How are you? (to one)',     category:'Greetings' },
      { ga:'Baafitaa',       roman:'baa-fee-taa',   english:'How are you? (to multiple)',category:'Greetings' },
      { ga:'Miifee',         roman:'mee-fee-eh',    english:'I am fine',                 category:'Greetings' },
      { ga:'Oyiwaladon',     roman:'oh-yee-wa-la-don', english:'Thank you very much',    category:'Greetings', notes:'The most common Ga expression of deep thanks.' },
      { ga:'Akpe',           roman:'ak-peh',        english:'Thank you',                 category:'Greetings', notes:'Simpler, quicker thank you.' },
      { ga:'Mii shi',        roman:'mee shee',      english:'Goodbye (I am going)',      category:'Greetings' },
      { ga:'Oyii',           roman:'oh-yee',        english:'Goodbye (safe journey)',    category:'Greetings' },
      { ga:'Ŋɔɔ',           roman:'ngoh-oh',       english:'Come! (invitation)',        category:'Greetings' },

      // COURTESY
      { ga:'Eei',            roman:'eh-ee',         english:'Yes',                       category:'Courtesy', notes:'More common in Ga than "Aane".' },
      { ga:'Daabi',          roman:'daa-bee',       english:'No',                        category:'Courtesy', notes:'Shared with Akan languages.' },
      { ga:'Kafra',          roman:'kaf-ra',        english:'Excuse me / Sorry',         category:'Courtesy' },
      { ga:'Yɛɛ',           roman:'yeh-eh',        english:'Okay / Agreed',             category:'Courtesy' },

      // INTRODUCTIONS
      { ga:'Wiole ŋke?',     roman:'wee-oh-leh n-keh', english:'What is your name?',    category:'Introductions', notes:'Ga phrasing differs notably from Twi.' },
      { ga:'Miole …',        roman:'mee-oh-leh',    english:'My name is …',              category:'Introductions' },
      { ga:'Wiehii shi?',    roman:'wee-eh-hee shee', english:'Where are you from?',     category:'Introductions' },
      { ga:'Mi hii …',       roman:'mee hee',       english:'I am from …',              category:'Introductions' },

      // NUMBERS
      { ga:'Ɛkome',          roman:'eh-ko-meh',     english:'One (1)',                   category:'Numbers', notes:'Completely different from Akan numbers.' },
      { ga:'Nyɔ',            roman:'nyoh',          english:'Two (2)',                   category:'Numbers' },
      { ga:'Ɛtɛ',            roman:'eh-teh',        english:'Three (3)',                 category:'Numbers' },
      { ga:'Agbaa',          roman:'ag-baa',        english:'Four (4)',                  category:'Numbers' },
      { ga:'Ɛnum',           roman:'eh-num',        english:'Five (5)',                  category:'Numbers', notes:'Similar to Akan "Enum" — possible borrowing.' },
      { ga:'Ɛkpaa',          roman:'eh-kpaa',       english:'Six (6)',                   category:'Numbers' },
      { ga:'Ɛfiaŋ',          roman:'eh-fee-ang',    english:'Seven (7)',                 category:'Numbers' },
      { ga:'Ɛnyi',           roman:'eh-nyee',       english:'Eight (8)',                 category:'Numbers' },
      { ga:'Ɛtsa',           roman:'eh-tsa',        english:'Nine (9)',                  category:'Numbers' },
      { ga:'Ɛwo',            roman:'eh-wo',         english:'Ten (10)',                  category:'Numbers' },
      { ga:'Ɛwoŋɔ',          roman:'eh-wo-ngoh',    english:'Twenty (20)',               category:'Numbers' },
      { ga:'Ɛhɛ',            roman:'eh-heh',        english:'Hundred (100)',             category:'Numbers' },

      // COLOURS
      { ga:'Mli',            roman:'m-lee',         english:'Red / Blood-coloured',      category:'Colours' },
      { ga:'Tuntum',         roman:'tun-tum',       english:'Black',                     category:'Colours', notes:'Shared word with Fante.' },
      { ga:'Fufuo',          roman:'fu-fu-oh',      english:'White',                     category:'Colours' },
      { ga:'Gbɛkɛ',          roman:'g-beh-keh',     english:'Green',                     category:'Colours' },
      { ga:'Gbakaa',         roman:'g-ba-kaa',      english:'Yellow',                    category:'Colours' },

      // FAMILY
      { ga:'Naŋ',            roman:'nang',          english:'Mother',                    category:'Family', notes:'Ga "Naŋ" vs Akan "Maame".' },
      { ga:'Tɛi',            roman:'teh-ee',        english:'Father',                    category:'Family', notes:'Ga "Tɛi" vs Akan "Paapa".' },
      { ga:'Wɔ',             roman:'woh',           english:'Child',                     category:'Family' },
      { ga:'Nɔɔ',            roman:'noh-oh',        english:'Older sibling',             category:'Family', notes:'In Ga, birth order in family address matters.' },
      { ga:'Feŋ',            roman:'feng',          english:'Younger sibling',           category:'Family' },
      { ga:'Ni',             roman:'nee',           english:'Grandmother / Female elder', category:'Family' },
      { ga:'Lɔmo',           roman:'lo-mo',         english:'Grandfather / Male elder',  category:'Family' },

      // FOOD & DRINK
      { ga:'Shibli',         roman:'shib-lee',      english:'Food / Eating',             category:'Food', notes:'Different from Akan "Aduane".' },
      { ga:'Nuu',            roman:'noo',           english:'Water',                     category:'Food', notes:'Completely different from Akan "Nsu".' },
      { ga:'Gbɛ',            roman:'g-beh',         english:'Fish',                      category:'Food', notes:'Fish is central to Ga diet — Accra\'s market is full of fresh fish.' },
      { ga:'Akla',           roman:'ak-la',         english:'Kenkey',                    category:'Food', notes:'Kenkey is the iconic Ga staple — fermented corn dumpling. Ga version is "Ga Kenkey" (Afote).' },
      { ga:'Loo',            roman:'loh-oh',        english:'Palm nut soup',             category:'Food' },
      { ga:'Ŋo',             roman:'ngoh',          english:'Kpokpoi (traditional Ga dish)', category:'Food', notes:'Special dish for Homowo festival — made from palm soup and fermented corn.' },

      // BASIC VERBS
      { ga:'Ba',             roman:'ba',            english:'Come',                      category:'Verbs' },
      { ga:'Shi',            roman:'shee',          english:'Go',                        category:'Verbs', notes:'Ga uses "Shi" for go vs Akan "Kɔ".' },
      { ga:'Di',             roman:'dee',           english:'Eat',                       category:'Verbs' },
      { ga:'Nɔɔm',           roman:'noh-ohm',       english:'Drink',                     category:'Verbs' },
      { ga:'Daa',            roman:'daa',           english:'Sleep',                     category:'Verbs' },
      { ga:'Tsɔɔ',           roman:'tsoh-oh',       english:'Sit',                       category:'Verbs' },
      { ga:'Tii',            roman:'tee',           english:'Stand',                     category:'Verbs' },
    ],

    phrases: [
      { ga:'Mii pe shibli.',      roman:'mee peh shib-lee',   english:'I want food.',        category:'Needs' },
      { ga:'Mii hee tsɛɛ.',       roman:'mee hee tseh-eh',    english:'I am hungry.',        category:'Needs' },
      { ga:'Gbɛ yɛ me dɔ.',       roman:'g-beh yeh meh doh',  english:'I love fish.',        category:'Food' },
      { ga:'Oyiwaladon!',         roman:'oh-yee-wa-la-don',   english:'Thank you very much!',category:'Courtesy' },
      { ga:'Mii nyɛ nim.',        roman:'mee nyeh nim',       english:'I don\'t know.',      category:'Common' },
      { ga:'Baa shi!',            roman:'baa shee',           english:'Let\'s go!',          category:'Common' },
    ],

    quiz: [
      { ga:'Ogbɔɔ',       choices:['Good night','Good afternoon','Hello/Good morning','Goodbye'], correct:2, cultural:'Ogbɔɔ — the morning greeting that begins every day in Accra\'s Ga communities.' },
      { ga:'Naŋ',         choices:['Father','Sister','Uncle','Mother'],                             correct:3, cultural:'In Ga society, the mother (Naŋ) is the emotional center of the household.' },
      { ga:'Akla',        choices:['Rice','Fufu','Kenkey','Bread'],                                 correct:2, cultural:'Kenkey (Akla) is the quintessential Ga food — eaten with fried fish and pepper sauce.' },
      { ga:'Ɛkome',       choices:['Two','One','Three','Five'],                                     correct:1, cultural:'Ga numbers are completely distinct from Akan — showing the different language family.' },
      { ga:'Nuu',         choices:['Food','Sea','Water','Soup'],                                    correct:2, cultural:'Offering water (Nuu) to guests is a sign of respect in Ga culture.' },
      { ga:'Oyiwaladon',  choices:['Good morning','Please','Thank you very much','Sorry'],          correct:2, cultural:'A warm Ga thank you — length and sincerity match the depth of gratitude.' },
      { ga:'Tɛi',         choices:['Uncle','Grandfather','Brother','Father'],                       correct:3, cultural:'The father (Tɛi) plays a key role in Ga patrilineal traditions.' },
      { ga:'Gbɛ',         choices:['Meat','Soup','Fish','Vegetable'],                               correct:2, cultural:'Fish (Gbɛ) — Accra sits on the Atlantic coast; fishing is millennia-old here.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // INTERMEDIATE
  // ═══════════════════════════════════════════════════════════
  intermediate: {
    label:       'Intermediate',
    description: 'Sentences, Homowo festival, urban Accra life, time, markets.',
    xpReward:    20,

    vocabulary: [
      // TIME
      { ga:'Gbɔɔ',           roman:'g-boh-oh',       english:'Today',          category:'Time' },
      { ga:'Yee',            roman:'yee-eh',          english:'Tomorrow',       category:'Time' },
      { ga:'Gbɔɔ gbayoo',    roman:'g-boh-oh g-ba-yoo', english:'Yesterday',   category:'Time' },
      { ga:'Akɛ',            roman:'a-keh',           english:'Morning',        category:'Time' },
      { ga:'Shi wɔ haa',     roman:'shee woh haa',    english:'Afternoon',      category:'Time' },
      { ga:'Gbaa',           roman:'g-baa',           english:'Night',          category:'Time' },
      { ga:'Yibili',         roman:'yee-bee-lee',     english:'Week',           category:'Time' },
      { ga:'Wɔ',             roman:'woh',             english:'Month',          category:'Time' },
      { ga:'Gbɛ',            roman:'g-beh',           english:'Year',           category:'Time', notes:'Note: same word as "fish" — tone distinguishes meaning in Ga.' },

      // HOMOWO & FESTIVALS
      { ga:'Homowo',          roman:'ho-moh-wo',       english:'Harvest festival — "hooting at hunger"', category:'Culture', notes:'The most important Ga festival. "Homo" = hunger, "wo" = hoot. Celebrates the end of famine.' },
      { ga:'Kpokpoi',         roman:'k-poh-k-poi',     english:'Traditional Ga Homowo dish',  category:'Culture', notes:'Made from palm soup and kpokpoi flour — only eaten at Homowo.' },
      { ga:'Lante Dzan',      roman:'lan-teh dzan',    english:'Twin festival / Twins celebration', category:'Culture', notes:'Ga culture highly honours twins — they receive special rites.' },
      { ga:'Asafoatse',       roman:'a-sa-foa-tseh',   english:'Warrior captain / Community leader', category:'Society' },
      { ga:'Mantse',          roman:'man-tseh',        english:'Chief / King',                category:'Society', notes:'The paramount chief of a Ga quarter.' },
      { ga:'Gbese',           roman:'g-beh-seh',       english:'Ga quarter (of Accra)',       category:'Society', notes:'Accra is divided into traditional Ga quarters: Gbese, Asere, Otublohum, etc.' },
      { ga:'Wulomei',         roman:'wu-lo-may',       english:'Traditional Ga priests',      category:'Spiritual', notes:'Wulomei perform rituals and mediate with the deities (Wɔ).' },

      // MARKET & TRADE
      { ga:'Ohii ye?',        roman:'oh-hee yeh',      english:'How much is it?',             category:'Market' },
      { ga:'Sikafo',          roman:'see-ka-fo',       english:'Rich person / Money person',  category:'Market', notes:'Ga adds "-fo" suffix to indicate a person of a quality.' },
      { ga:'Tɔ',              roman:'toh',             english:'Buy',                         category:'Market' },
      { ga:'Tɔn',             roman:'ton',             english:'Sell',                        category:'Market' },
      { ga:'Manye',           roman:'man-yeh',         english:'Market',                      category:'Market', notes:'Ga "Manye" for market — notably different from Twi "Dwa".' },
      { ga:'Atswa',           roman:'at-swa',          english:'Money / Payment',             category:'Market' },

      // DIRECTIONS
      { ga:'Nifa',            roman:'nee-fa',          english:'Right',                       category:'Directions' },
      { ga:'Bɛngum',          roman:'ben-gum',         english:'Left',                        category:'Directions' },
      { ga:'Shi wɔ wiem',     roman:'shee woh wee-em', english:'Go straight ahead',          category:'Directions' },
      { ga:'He la?',          roman:'heh la',          english:'Where is it?',               category:'Directions' },
      { ga:'Abɛ',             roman:'a-beh',           english:'Street / Road',              category:'Directions' },
      { ga:'Soo',             roman:'soh-oh',          english:'Sea / Shore',                category:'Directions', notes:'The sea (Soo) is Accra\'s natural boundary and daily reference point.' },

      // EMOTIONS
      { ga:'Dɔ',              roman:'doh',             english:'Love',                       category:'Emotions', notes:'Ga "Dɔ" vs Akan "Ɔdɔ" — similar sounds, same concept.' },
      { ga:'Shwee',           roman:'shwee',           english:'Joy / Happiness',            category:'Emotions' },
      { ga:'Yɛlɛ',            roman:'yeh-leh',         english:'Sadness / Suffering',        category:'Emotions' },
      { ga:'Abufu',           roman:'a-boo-fu',        english:'Anger',                      category:'Emotions' },
      { ga:'Sɔ hu',           roman:'soh hoo',         english:'Fear',                       category:'Emotions' },

      // INTERMEDIATE VERBS
      { ga:'Kasa',            roman:'ka-sa',           english:'Speak / Talk',               category:'Verbs', notes:'Shared with Akan — likely borrowing.' },
      { ga:'Tswa',            roman:'tswa',            english:'Pay / Give money',           category:'Verbs' },
      { ga:'He',              roman:'heh',             english:'See / Look',                 category:'Verbs' },
      { ga:'Nii',             roman:'nee',             english:'Know',                       category:'Verbs' },
      { ga:'Pɛ',              roman:'peh',             english:'Want / Like',                category:'Verbs', notes:'Likely Akan borrowing.' },
      { ga:'Sii',             roman:'see',             english:'Build / Create',             category:'Verbs' },
      { ga:'Bɔ',              roman:'boh',             english:'Beat / Make',                category:'Verbs' },
    ],

    phrases: [
      { ga:'Mii shi manye wɔ.',      roman:'mee shee man-yeh woh',     english:'I am going to the market.',          category:'Daily Life' },
      { ga:'Homowo yɛ mi anigyee.',  roman:'ho-moh-wo yeh mee a-nee-jeh', english:'Homowo brings me joy.',            category:'Culture' },
      { ga:'Mii dɔ wo.',            roman:'mee doh wo',                english:'I love you.',                         category:'Emotions' },
      { ga:'Gbɛ yɛ me dɔ paa.',     roman:'g-beh yeh meh doh paa',    english:'I love fish very much.',             category:'Food' },
      { ga:'Boa mi, kafra.',         roman:'boa mee, kaf-ra',           english:'Please help me.',                    category:'Courtesy' },
      { ga:'Mantse no he nɛ?',       roman:'man-tseh no heh neh',       english:'Where is the chief?',               category:'Society' },
    ],

    quiz: [
      { ga:'Homowo',   choices:['Rain festival','Harvest festival (hoot at hunger)','War celebration','New Year'], correct:1, cultural:'Homowo is one of West Africa\'s most unique festivals — celebrating survival of a great famine.' },
      { ga:'Mantse',   choices:['Market trader','Traditional priest','Chief/King','Warrior'], correct:2, cultural:'Each Ga quarter of Accra has its own Mantse (chief) — governance is decentralised.' },
      { ga:'Manye',    choices:['Festival','Palace','Market','River'],                        correct:2, cultural:'Ga markets like Makola are among the most famous in West Africa.' },
      { ga:'Kpokpoi',  choices:['A type of drum','Ga Homowo dish','A fishing boat','A cloth type'], correct:1, cultural:'Kpokpoi is only eaten at Homowo — it symbolises abundance and community.' },
      { ga:'Wulomei',  choices:['Warriors','Traditional priests','Fishermen','Elders only'], correct:1, cultural:'Wulomei priests lead Homowo prayers and all major Ga spiritual ceremonies.' },
      { ga:'Soo',      choices:['River','Mountain','Market','Sea/Shore'],                    correct:3, cultural:'The Accra coast (Soo) has been central to Ga life for centuries — trade and fishing.' },
      { ga:'Gbɔɔ',    choices:['Tomorrow','Yesterday','Today','Next year'],                  correct:2, cultural:'Ga speakers of Accra switch fluidly between Ga, Twi, and English daily.' },
      { ga:'Tswa',     choices:['Eat','Speak','Pay/Give money','Sleep'],                     correct:2, cultural:'Market transactions in Accra often switch between Ga, Twi, and English.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ADVANCED
  // ═══════════════════════════════════════════════════════════
  advanced: {
    label:       'Advanced',
    description: 'Ga proverbs, sacred traditions, cosmology, formal speech.',
    xpReward:    35,

    vocabulary: [
      // COSMOLOGY & SPIRITUALITY
      { ga:'Naa Wɔmo',       roman:'naa woh-mo',     english:'The deities / Gods (collective)', category:'Spiritual', notes:'Ga religion involves many deities (Wɔ) who govern aspects of nature and life.' },
      { ga:'Nyɔŋmɔ',         roman:'nyoh-ngmoh',     english:'God / Sky deity',     category:'Spiritual', notes:'The supreme being in Ga religion. Also called "Nyɔgbɔ". Transcendent and just.' },
      { ga:'Nai',            roman:'nai',             english:'Sea deity / God of the ocean', category:'Spiritual', notes:'Nai governs the sea — all Ga fishing rituals include reverence to Nai.' },
      { ga:'Sakumɔ',         roman:'sa-ku-moh',       english:'Deity of the Sakumono Lagoon', category:'Spiritual', notes:'One of Accra\'s most important traditional deities — still venerated today.' },
      { ga:'Korle',          roman:'kor-leh',         english:'Deity of the Korle Lagoon', category:'Spiritual', notes:'The Korle deity watches over health and water — central to Accra\'s spiritual geography.' },
      { ga:'Tɛŋ',            roman:'teng',            english:'Land / Earth deity',  category:'Spiritual', notes:'The earth and its spirits are revered in Ga cosmology.' },
      { ga:'Wulɔ',           roman:'wu-loh',          english:'Priest / Spiritual leader (male)', category:'Spiritual' },
      { ga:'Wɔyei',          roman:'woh-yay',         english:'Female spiritual medium', category:'Spiritual', notes:'Women who are possessed by deities and serve as their mouthpiece.' },
      { ga:'Kpele',          roman:'k-peh-leh',       english:'Sacred Ga music/song tradition', category:'Spiritual', notes:'Kpele songs are sacred — used in rituals and ceremonies only.' },

      // SOCIETY & GOVERNANCE
      { ga:'Ga Mantse',      roman:'ga man-tseh',     english:'King of the Ga people', category:'Society', notes:'The paramount chief of the entire Ga nation — a powerful traditional institution.' },
      { ga:'Shipi',          roman:'shee-pee',        english:'Town quarter leader / Asafo captain', category:'Society' },
      { ga:'Asafoatse',      roman:'a-sa-foa-tseh',   english:'Warrior company captain', category:'Society' },
      { ga:'Atukpai',        roman:'a-tuk-pai',       english:'Traditional Ga dance',  category:'Culture', notes:'Performed at funerals and festivals — highly energetic and communal.' },
      { ga:'Kpanlogo',       roman:'k-pa-nlo-go',     english:'Ga popular dance/music form', category:'Culture', notes:'Created in Accra in the 1960s — a blend of traditional and modern Ga.' },
      { ga:'Sɔŋ',           roman:'song',            english:'Compound / Family house', category:'Society', notes:'The traditional family compound — multi-generational living space.' },

      // ADVANCED VOCABULARY
      { ga:'Boni',           roman:'boh-nee',         english:'Evil / Bad',          category:'Values' },
      { ga:'Gbɛi',           roman:'g-beh-ee',        english:'Good / Righteous',    category:'Values' },
      { ga:'Nɔɔ',            roman:'noh-oh',          english:'Truth',               category:'Values', notes:'Truth is foundational to Ga social trust.' },
      { ga:'Wɔŋ',           roman:'wong',             english:'Power / Strength',    category:'Values' },
      { ga:'Tswa wɔ',        roman:'tswa woh',         english:'Work hard',           category:'Values', notes:'Literally "make/give effort".' },
      { ga:'Hemɔ',           roman:'heh-moh',         english:'Peace / Calm',        category:'Values' },
      { ga:'Lɛ',             roman:'leh',             english:'Place / Belong to',   category:'Grammar', notes:'Key Ga grammatical marker indicating location or possession.' },

      // ADVANCED VERBS
      { ga:'Wiemo',          roman:'wee-eh-mo',       english:'Speak well / Advise', category:'Verbs' },
      { ga:'Nɔɔ lɛ',         roman:'noh-oh leh',      english:'Tell the truth',      category:'Verbs' },
      { ga:'Tsɔ gbeke',      roman:'tsoh g-beh-keh',  english:'Stand firm',          category:'Verbs' },
      { ga:'Yɛ ke',          roman:'yeh keh',         english:'Do like / Behave as', category:'Verbs' },
      { ga:'Gbɔɔ',           roman:'g-boh-oh',        english:'Wake up / Rise',      category:'Verbs', notes:'Also means "today" — context-dependent.' },
    ],

    proverbs: [
      {
        ga:      'Gbɛ lɛ mɛ kɛ tsɔɔ, ohe gbɛ.',
        roman:   'g-beh leh meh keh tsoh-oh, oh-heh g-beh',
        english: 'A fish that stays still is seen as a fish.',
        meaning: 'Those who do nothing distinctive will be overlooked — stand out, act.',
        category:'Action',
      },
      {
        ga:      'Wɔ nɔɔ wɔ, naa ataa naŋ.',
        roman:   'woh noh-oh woh, naa a-taa nang',
        english: 'A child who listens lives to see their mother\'s old age.',
        meaning: 'Obedience and wisdom ensure a long, blessed life.',
        category:'Wisdom',
      },
      {
        ga:      'Soo wolo soo, aba gbeke tii.',
        roman:   'soh-oh wo-lo soh-oh, a-ba g-beh-keh tee',
        english: 'The sea waves crash, but the shore still stands.',
        meaning: 'No matter what troubles come, the community endures.',
        category:'Resilience',
      },
      {
        ga:      'Mantse lɛ mɛ gbɛi wɔ, naŋ kɛ tɛi nyɛ.',
        roman:   'man-tseh leh meh g-beh-ee woh, nang keh teh-ee nyeh',
        english: 'When the chief is just, the mother and father are at peace.',
        meaning: 'Good leadership creates harmony in families and communities.',
        category:'Leadership',
      },
      {
        ga:      'Nyɔŋmɔ sii gbeke, onipa yɛ.',
        roman:   'nyoh-ngmoh see g-beh-keh, o-nee-pa yeh',
        english: 'God builds the mountain; the person does the rest.',
        meaning: 'Providence sets the stage; human effort completes the journey.',
        category:'Spiritual',
      },
    ],

    quiz: [
      { ga:'Nyɔŋmɔ',    choices:['Sea deity','Warrior captain','Supreme God','Ancestor spirit'], correct:2, cultural:'Nyɔŋmɔ is the Ga supreme being — omniscient, transcendent, and just.' },
      { ga:'Nai',        choices:['Land deity','Sea deity/ocean god','Sky deity','Forest spirit'], correct:1, cultural:'Nai governs the Atlantic — all Ga fishermen pay respect before voyages.' },
      { ga:'Kpele',      choices:['A drum type','Sacred Ga songs','A fishing technique','War dance'], correct:1, cultural:'Kpele songs are never performed casually — they are reserved for sacred occasions.' },
      { ga:'Kpanlogo',   choices:['A festival','A food dish','Ga popular dance/music','A prayer'], correct:2, cultural:'Kpanlogo was born in 1960s Accra — a fusion of traditional Ga and urban modernity.' },
      { ga:'Wɔyei',      choices:['Female warrior','Female spiritual medium','Market woman','Dancer'], correct:1, cultural:'Wɔyei women serve Ga deities directly — a role of immense spiritual authority.' },
      { ga:'Korle',      choices:['River spirit','Lagoon deity of health','Forest guardian','Sun deity'], correct:1, cultural:'The Korle Lagoon is sacred to the Ga — its deity governs health and water.' },
      { ga:'Atukpai',    choices:['A traditional Ga dance','A food','A prayer form','A drum'], correct:0, cultural:'Atukpai is performed with great energy at Homowo and funerals — community bonding.' },
      { ga:'Hemɔ',       choices:['War','Hunger','Peace/Calm','Rain'],                             correct:2, cultural:'Peace (Hemɔ) is the highest aspiration in Ga governance and community life.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // LEGEND
  // ═══════════════════════════════════════════════════════════
  legend: {
    label:       'Legend',
    description: 'Sacred Ga cosmology, ancient migration history, Kpele music, deep proverbs.',
    xpReward:    50,

    vocabulary: [
      // ANCIENT HISTORY & ORIGIN
      { ga:'Ayawaso',        roman:'a-ya-wa-so',      english:'Ancient Ga capital (pre-Accra)', category:'History', notes:'Ayawaso was the Ga kingdom\'s capital before the Akwamu conquest in the 17th century.' },
      { ga:'Ga-Adangme',     roman:'ga a-dang-meh',   english:'Ga-Dangme language family', category:'History', notes:'Ga and Dangme are related languages — together called Ga-Adangme.' },
      { ga:'La Dade Kotopon', roman:'la da-deh ko-to-pon', english:'Original name of Accra', category:'History', notes:'The Ga name for Accra means "the great place we came to".' },
      { ga:'Okaikoi',        roman:'oh-kai-koi',      english:'Great Ga warrior king',  category:'History', notes:'The last great Ga king who fought the Akwamu — a symbol of Ga resistance.' },
      { ga:'Ayi Kushi',      roman:'a-yee ku-shee',   english:'Ga legendary ancestor',  category:'History', notes:'The mythical progenitor of the Ga people who led the migration to Accra.' },
      { ga:'Ablekuma',       roman:'ab-leh-ku-ma',    english:'Ancient Ga settlement',  category:'History', notes:'One of the oldest Ga communities — now a suburb of Greater Accra.' },

      // SACRED & DEEP SPIRITUAL
      { ga:'Gbɔlɔ',         roman:'g-boh-loh',       english:'Heaven / Paradise',      category:'Spiritual', notes:'The Ga conception of the afterlife — a peaceful realm.' },
      { ga:'Nwɔ',           roman:'n-woh',            english:'Evil spirit / Demon',    category:'Spiritual' },
      { ga:'Kɔle',          roman:'koh-leh',          english:'Ancestral taboo',        category:'Spiritual', notes:'Each Ga family has inherited taboos passed through generations.' },
      { ga:'Shibaa',        roman:'shee-baa',         english:'Sacred prohibition / Ritual law', category:'Spiritual' },
      { ga:'Yeli',          roman:'yeh-lee',          english:'Fate / Destiny',         category:'Spiritual', notes:'Each person\'s destiny is preordained — the concept parallels Akan "Hyebea".' },
      { ga:'Dzraŋ',         roman:'dzrang',           english:'Libation / Pouring of thanks', category:'Spiritual', notes:'Pouring libation (Dzraŋ) to ancestors before all important ceremonies.' },

      // ORAL TRADITION & ARTS
      { ga:'Ŋmɔ',           roman:'ngmoh',           english:'Song / Poem',            category:'Oral Literature' },
      { ga:'Ŋmɔdzimɔ',      roman:'ngmoh-dzee-moh',  english:'Song-composer / Poet',   category:'Oral Literature', notes:'A highly respected role — oral poets preserved Ga history in song.' },
      { ga:'Atsiakwei',      roman:'a-tsi-a-kway',    english:'Storytelling tradition', category:'Oral Literature' },
      { ga:'Kolomashie',     roman:'ko-lo-ma-shee',   english:'Traditional Ga quarter song', category:'Oral Literature', notes:'Each of the seven Ga quarters has its own songs and musical identity.' },
      { ga:'Aŋmaaŋmaai',    roman:'ang-maang-maai',  english:'Elders\' wisdom sayings', category:'Oral Literature' },

      // LANGUAGE PHILOSOPHY
      { ga:'Kasa gbeke',     roman:'ka-sa g-beh-keh', english:'Speak firmly / Speak truth', category:'Language' },
      { ga:'Wiemo hemɔ',     roman:'wee-eh-mo heh-moh', english:'Speak peace',           category:'Language' },
    ],

    proverbs: [
      {
        ga:      'Nyɔŋmɔ hee tsɔ gbeke, onipa naŋ baa.',
        roman:   'nyoh-ngmoh hee tsoh g-beh-keh, o-nee-pa nang baa',
        english: 'When God sees you standing firm, your mother will come.',
        meaning: 'Steadfastness and faith attract divine and human support.',
        category:'Spiritual',
      },
      {
        ga:      'Naa wɔ tsɔɔ kɛɛ, gbeke kome.',
        roman:   'naa woh tsoh-oh keh-eh, g-beh-keh ko-meh',
        english: 'When the deity rests, the world is one.',
        meaning: 'When spiritual harmony is maintained, the community is unified.',
        category:'Unity',
      },
      {
        ga:      'Onipa lɛ he onipa, ohe ne yeli.',
        roman:   'o-nee-pa leh heh o-nee-pa, oh-heh neh yeh-lee',
        english: 'A person who truly sees another person sees their destiny.',
        meaning: 'Deep empathy reveals the full humanity and potential of another.',
        category:'Empathy',
      },
      {
        ga:      'Soo kɛ aba, baa kome tii.',
        roman:   'soh-oh keh a-ba, baa ko-meh tee',
        english: 'The sea and the shore stand as one.',
        meaning: 'The most different things can have an inseparable relationship.',
        category:'Unity',
      },
      {
        ga:      'Mli gbɛ wɔ lɛ kpele ŋmɔ.',
        roman:   'mlee g-beh woh leh k-peh-leh ngmoh',
        english: 'A true life is a Kpele song.',
        meaning: 'A life lived well is sacred, musical, and worth honouring like ritual music.',
        category:'Life',
      },
    ],

    ceremonialPhrases: [
      { ga:'Naa Wɔmo, yɛ mɔɔ!',            roman:'naa woh-mo, yeh moh-oh',      english:'Deities, we call you!',            context:'Invocation', notes:'Opening call in Ga religious ceremony.' },
      { ga:'Nyɔŋmɔ, boa yɛn!',              roman:'nyoh-ngmoh, boa yehn',         english:'God, help us!',                    context:'Prayer' },
      { ga:'Nai, naa hɛ!',                  roman:'nai, naa heh',                 english:'Nai (sea god), look at us!',       context:'Fishing ritual' },
      { ga:'Dzraŋ! Dzraŋ! Nananom ba!',     roman:'dzrang, dzrang, na-na-nom ba', english:'Libation! Libation! Ancestors come!', context:'Libation', notes:'Said while pouring libation to summon ancestral blessing.' },
      { ga:'Homowo! Abɛ gbɛi!',             roman:'ho-moh-wo, a-beh g-beh-ee',   english:'Homowo! The road is good!',        context:'Festival', notes:'Festival cry celebrating abundance — hunger has been defeated.' },
    ],

    quiz: [
      { ga:'Nyɔŋmɔ',       choices:['Sea god','Forest spirit','Supreme God','Ancestor'], correct:2, cultural:'Nyɔŋmɔ — the Ga supreme being — exists above all other deities.' },
      { ga:'Ayawaso',       choices:['Modern Accra','Ancient Ga capital','A lagoon','A festival'], correct:1, cultural:'Ayawaso was the Ga kingdom\'s capital before the Akwamu conquest in the 1700s.' },
      { ga:'Kpele',         choices:['War music','Sacred ritual songs','Fishing songs','Love songs'], correct:1, cultural:'Kpele music is one of West Africa\'s most ancient sacred music traditions.' },
      { ga:'Okaikoi',       choices:['A festival name','Great Ga warrior king','A deity','A drum'], correct:1, cultural:'Okaikoi is a national hero — his defeat by the Akwamu shaped modern Ga identity.' },
      { ga:'Gbɔlɔ',         choices:['Underworld','Sea','Heaven/Paradise','Forest'], correct:2, cultural:'The Ga believe in Gbɔlɔ — a peaceful afterlife where ancestors dwell.' },
      { ga:'Dzraŋ',         choices:['A dance','Libation to ancestors','A festival food','War chant'], correct:1, cultural:'Libation (Dzraŋ) connects the living to their ancestors — poured before all ceremonies.' },
      { ga:'Kolomashie',    choices:['A dance style','A food dish','Ga quarter songs','A deity'], correct:2, cultural:'Each of Accra\'s seven Ga quarters has distinct musical identity — Kolomashie is one.' },
      { ga:'Yeli',          choices:['A prayer','Fate/Destiny','A chief\'s title','A tree'], correct:1, cultural:'Destiny (Yeli) in Ga thought is preordained — like the Akan concept of Hyebea.' },
    ],
  },
}

export default GA
