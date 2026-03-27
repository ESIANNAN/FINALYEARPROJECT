/**
 * EWE — Full Language Dataset
 * Language: Eʋegbe (Ewe)
 * Spoken: Volta Region (Ghana), Togo, Benin
 * Script: Latin with special characters (ɛ, ɔ, ŋ, ɖ, ƒ, ɣ, ʋ, x)
 * Levels: beginner · intermediate · advanced · legend
 *
 * Note: Ewe belongs to the Gbe branch of Niger-Congo.
 * It is NOT an Akan language — entirely different grammar and vocabulary.
 * Famous for its complex verbal system and rich tonal contrasts.
 */

export const EWE = {
  meta: {
    language:  'Eʋegbe (Ewe)',
    code:      'ewe',
    region:    'Volta Region, Ghana; Togo; Benin',
    family:    'Niger-Congo → Kwa → Gbe',
    speakers:  '~3.2 million (L1 Ghana + Togo), ~7 million total',
    script:    'Latin (with ɖ, ƒ, ɣ, ŋ, ʋ, x, ɛ, ɔ)',
    tones:     true,
    toneNote:  'Ewe has three tones: high (á), mid (a), low (à). Tone is critical for meaning.',
    flag:      '🔥',
    color:     '#E74C3C',
    notes:     'Ewe is famous for its complex tonology and its diaspora connection — enslaved Ewe people carried their language to Haiti (Vodou/Voodoo tradition) and Brazil. Ewe has a remarkably expressive verbal system.',
  },

  // ═══════════════════════════════════════════════════════════
  // BEGINNER
  // ═══════════════════════════════════════════════════════════
  beginner: {
    label:       'Beginner',
    description: 'Core Ewe greetings, numbers, family, food, basic needs.',
    xpReward:    10,

    vocabulary: [
      // GREETINGS — completely different from Akan
      { ewe:'Ŋdi',           roman:'ngee',           english:'Good morning',          category:'Greetings', notes:'The morning greeting — simple and warm.' },
      { ewe:'Ŋdɔ',           roman:'ngdoh',          english:'Good afternoon',        category:'Greetings' },
      { ewe:'Fiɛyi',         roman:'fee-eh-yee',     english:'Good evening',          category:'Greetings' },
      { ewe:'Nɔ agbe',       roman:'noh ag-beh',     english:'Good night / Live well',category:'Greetings', notes:'Literally "Live in life" — a profound nightly blessing.' },
      { ewe:'Efɔe?',         roman:'eh-foh-eh',      english:'How are you?',          category:'Greetings', notes:'Literally "Is it cool?" — wellness is expressed as coolness.' },
      { ewe:'Hõ, mɛgbɔna.',  roman:'hoh, meh-g-boh-na', english:'Fine, I am well.',  category:'Greetings' },
      { ewe:'Akpe',          roman:'ak-peh',         english:'Thank you',             category:'Greetings', notes:'Shared with Ga — important West African courtesy word.' },
      { ewe:'Akpe kakaka',   roman:'ak-peh ka-ka-ka', english:'Thank you very much', category:'Greetings', notes:'"Kakaka" intensifies meaning — "deeply/greatly".' },
      { ewe:'Hede nyui',     roman:'heh-deh nyoo-ee', english:'Goodbye / Go well',   category:'Greetings', notes:'Literally "go well" — a blessing for safe travel.' },
      { ewe:'Yɔe',           roman:'yoh-eh',         english:'Come! (invitation)',    category:'Greetings' },
      { ewe:'Zo nyui',       roman:'zo nyoo-ee',     english:'Welcome / Come well',   category:'Greetings' },

      // COURTESY
      { ewe:'Ɛ',             roman:'eh',             english:'Yes',                   category:'Courtesy', notes:'Simple affirmation in Ewe.' },
      { ewe:'Ao',            roman:'a-oh',           english:'No',                    category:'Courtesy' },
      { ewe:'Kafra',         roman:'kaf-ra',         english:'Sorry / Excuse me',     category:'Courtesy', notes:'Borrowed across Ghana\'s languages.' },
      { ewe:'Ndi',           roman:'ndee',           english:'Please',                category:'Courtesy' },
      { ewe:'Nyɔ',           roman:'nyoh',           english:'Okay / Good',           category:'Courtesy' },

      // INTRODUCTIONS
      { ewe:'Nɔ ŋkɔ ɖe?',    roman:'noh n-koh deh',   english:'What is your name?',   category:'Introductions' },
      { ewe:'Ŋkɔnyé nyé …',  roman:'n-koh-nyeh nyeh', english:'My name is …',         category:'Introductions' },
      { ewe:'Àƒe siaŋu?',    roman:'ah-feh see-ang-oo', english:'Where are you from?', category:'Introductions' },
      { ewe:'Mewɔ ŋutɔ le …', roman:'meh-woh ngoo-toh leh', english:'I come from …',   category:'Introductions' },

      // NUMBERS — entirely unique Ewe system
      { ewe:'Ɖeka',          roman:'deh-ka',         english:'One (1)',               category:'Numbers', notes:'Ewe numbers are completely different from Akan.' },
      { ewe:'Eve',           roman:'eh-veh',         english:'Two (2)',               category:'Numbers' },
      { ewe:'Etɔ̃',           roman:'eh-tohn',        english:'Three (3)',             category:'Numbers', notes:'The "~" indicates nasalisation.' },
      { ewe:'Ene',           roman:'eh-neh',         english:'Four (4)',              category:'Numbers' },
      { ewe:'Atɔ̃',           roman:'a-tohn',         english:'Five (5)',              category:'Numbers' },
      { ewe:'Ade',           roman:'a-deh',          english:'Six (6)',               category:'Numbers' },
      { ewe:'Adre',          roman:'a-dreh',         english:'Seven (7)',             category:'Numbers' },
      { ewe:'Enyi',          roman:'eh-nyee',        english:'Eight (8)',             category:'Numbers' },
      { ewe:'Asieke',        roman:'a-see-eh-keh',   english:'Nine (9)',              category:'Numbers' },
      { ewe:'Ewo',           roman:'eh-wo',          english:'Ten (10)',              category:'Numbers' },
      { ewe:'Blaeve',        roman:'bla-eh-veh',     english:'Twenty (20)',           category:'Numbers', notes:'"Bla" = ten; "Eve" = two → 10×2.' },
      { ewe:'Alafa',         roman:'a-la-fa',        english:'Hundred (100)',         category:'Numbers' },

      // COLOURS
      { ewe:'Dziƒuƒu',       roman:'dzee-fu-fu',     english:'Red',                   category:'Colours', notes:'Literally "fire-coloured".' },
      { ewe:'Tɔtɔe',         roman:'toh-toh-eh',     english:'Black',                 category:'Colours' },
      { ewe:'Nyuitɔ',        roman:'nyoo-ee-toh',    english:'White',                 category:'Colours' },
      { ewe:'Agbagba',       roman:'ag-bag-ba',      english:'Green',                 category:'Colours' },
      { ewe:'Yeyee',         roman:'yeh-yeh-eh',     english:'Yellow',                category:'Colours' },

      // FAMILY
      { ewe:'Nɔvi',          roman:'noh-vee',        english:'Sibling / Brother',     category:'Family', notes:'Ewe "Nɔvi" vs Akan "Onua" — different word, similar warm meaning.' },
      { ewe:'Nyɔnu',         roman:'nyoh-nu',        english:'Woman / Mother',        category:'Family', notes:'Also used as "female".' },
      { ewe:'Ŋutsu',         roman:'ngoo-tsu',       english:'Man / Father',          category:'Family', notes:'Also used as "male".' },
      { ewe:'Vi',            roman:'vee',            english:'Child',                 category:'Family' },
      { ewe:'Tɔgã',          roman:'toh-gah',        english:'Elder sibling / Senior', category:'Family' },
      { ewe:'Nɔ',            roman:'noh',            english:'Mother',                category:'Family' },
      { ewe:'Tɔ',            roman:'toh',            english:'Father',                category:'Family' },
      { ewe:'Fofoa',         roman:'fo-fo-a',        english:'Grandfather',           category:'Family' },
      { ewe:'Mamãe',         roman:'ma-mah-eh',      english:'Grandmother',           category:'Family' },

      // FOOD & CULTURE
      { ewe:'Nuto',          roman:'nu-to',          english:'Food',                  category:'Food', notes:'Different from all Akan food words.' },
      { ewe:'Tsi',           roman:'tsee',           english:'Water',                 category:'Food', notes:'Ewe "Tsi" — unique water word.' },
      { ewe:'Akoume',        roman:'a-ko-u-meh',     english:'Akple (fermented cornmeal)', category:'Food', notes:'Ewe staple food, similar to Ga Kenkey but unique in texture.' },
      { ewe:'Fetri Detsi',   roman:'feh-tree deh-tsee', english:'Okro soup',          category:'Food', notes:'Ewe signature dish — thick okro/okra soup, a cultural staple.' },
      { ewe:'Abolo',         roman:'a-boh-lo',       english:'Corn cake / Steamed corn dough', category:'Food' },
      { ewe:'Gari',          roman:'ga-ree',         english:'Cassava flakes',        category:'Food', notes:'Also popular across West Africa.' },

      // BASIC VERBS
      { ewe:'Wɔ',            roman:'woh',            english:'Do / Make',             category:'Verbs', notes:'Core Ewe verb — highly productive.' },
      { ewe:'Dzo',           roman:'dzo',            english:'Go',                    category:'Verbs' },
      { ewe:'Va',            roman:'va',             english:'Come',                  category:'Verbs' },
      { ewe:'Ɖu',            roman:'doo',            english:'Eat',                   category:'Verbs' },
      { ewe:'Nu',            roman:'nu',             english:'Drink',                 category:'Verbs' },
      { ewe:'Ƒu',            roman:'fu',             english:'Sleep',                 category:'Verbs' },
      { ewe:'Dzo ƒu',        roman:'dzo fu',         english:'Sit down',              category:'Verbs' },
      { ewe:'Yi',            roman:'yee',            english:'Move / Walk',           category:'Verbs' },
    ],

    phrases: [
      { ewe:'Menyo nuto.',          roman:'meh-nyo nu-to',          english:'I want food.',        category:'Needs' },
      { ewe:'Mele vevea.',          roman:'meh-leh veh-veh-a',      english:'I am very hungry.',   category:'Needs' },
      { ewe:'Akpe na wo.',          roman:'ak-peh na wo',           english:'Thanks to you.',      category:'Courtesy', notes:'"Na wo" means "to you" — making the thank you personal.' },
      { ewe:'Mese gã.',             roman:'meh-seh gah',            english:'I don\'t know.',      category:'Common' },
      { ewe:'Mia yi!',              roman:'mee-a yee',              english:'Let\'s go!',          category:'Common' },
      { ewe:'Nyɔ ŋutɔ!',            roman:'nyoh ngoo-toh',          english:'You are good/great!', category:'Compliments' },
    ],

    quiz: [
      { ewe:'Ŋdi',        choices:['Good night','Good afternoon','Good morning','Goodbye'],    correct:2, cultural:'Ŋdi — beginning your day with a proper greeting is central to Ewe social life.' },
      { ewe:'Akpe',       choices:['Hello','Sorry','Thank you','Please'],                      correct:2, cultural:'Akpe — a word of gratitude shared across Ewe, Ga, and other West African cultures.' },
      { ewe:'Ɖeka',       choices:['Two','Three','One','Five'],                               correct:2, cultural:'Ewe counting is entirely its own system — beautiful and distinct from Akan.' },
      { ewe:'Nɔvi',       choices:['Child','Elder','Sibling/Brother','Enemy'],                correct:2, cultural:'Nɔvi — the bond between siblings is sacred in Ewe culture.' },
      { ewe:'Akoume',     choices:['Palm soup','Rice','Fermented cornmeal (Akple)','Stew'],   correct:2, cultural:'Akple is the Ewe staple food — eaten with Fetri Detsi (okro soup).' },
      { ewe:'Fetri Detsi', choices:['Cassava soup','Okro soup','Fish stew','Palm nut soup'],  correct:1, cultural:'Fetri Detsi is the signature Ewe dish — thick, nutritious okro/okra soup.' },
      { ewe:'Tsi',        choices:['Food','Soup','Water','Fire'],                             correct:2, cultural:'Tsi (water) — different from all Akan languages, showing Ewe\'s distinct origin.' },
      { ewe:'Hede nyui',  choices:['Thank you','Welcome','Goodbye/Go well','Good morning'],   correct:2, cultural:'The Ewe farewell blesses the traveler — it is a genuine wish for safety.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // INTERMEDIATE
  // ═══════════════════════════════════════════════════════════
  intermediate: {
    label:       'Intermediate',
    description: 'Sentences, Volta region, weaving culture, time, markets, Ewe verbal system.',
    xpReward:    20,

    vocabulary: [
      // TIME
      { ewe:'Egbe',          roman:'eh-g-beh',       english:'Today',          category:'Time' },
      { ewe:'Etsɔ',          roman:'eh-tsoh',        english:'Tomorrow',       category:'Time' },
      { ewe:'Etsɔwa',        roman:'eh-tsoh-wa',     english:'Yesterday',      category:'Time' },
      { ewe:'Fɔŋli',         roman:'foh-ng-lee',     english:'Morning',        category:'Time' },
      { ewe:'Ŋdɔ ŋkeke',    roman:'ngdoh n-keh-keh', english:'Afternoon (midday)', category:'Time' },
      { ewe:'Zã',            roman:'zah',            english:'Night',          category:'Time', notes:'Note: the word for night is also the word for moon.' },
      { ewe:'Kɔsiɖa',        roman:'koh-see-dah',    english:'Week',           category:'Time' },
      { ewe:'Ɣleti',         roman:'g-leh-tee',      english:'Month',          category:'Time' },
      { ewe:'Ƒe',            roman:'feh',            english:'Year',           category:'Time' },

      // KENTE WEAVING VOCABULARY (Ewe kente)
      { ewe:'Kente',         roman:'ken-teh',        english:'Kente cloth',    category:'Weaving', notes:'The Ewe are famous for their Kente weaving — distinct from Asante kente in design and technique.' },
      { ewe:'Adanudo',       roman:'a-da-nu-do',     english:'Woven cloth',    category:'Weaving', notes:'General term for woven fabric in Ewe culture.' },
      { ewe:'Adanu Ŋuti',    roman:'a-da-nu ngoo-tee', english:'Weaving loom', category:'Weaving', notes:'Ewe weavers are among West Africa\'s most skilled — based in Agbozume, Kpetoe.' },
      { ewe:'Vovotɔ',        roman:'vo-vo-toh',      english:'Weaver',         category:'Weaving' },
      { ewe:'Agbozume',      roman:'ag-boh-zu-meh',  english:'Ewe weaving center', category:'Weaving', notes:'Agbozume market is one of the largest kente cloth markets in West Africa.' },
      { ewe:'Kpetoe',        roman:'k-peh-toh-eh',   english:'Ewe kente capital village', category:'Weaving', notes:'Kpetoe in the Volta Region is the heartland of Ewe weaving tradition.' },

      // MARKET & TRADE
      { ewe:'Asiwo',         roman:'a-see-wo',       english:'Market',         category:'Market', notes:'Different from Akan and Ga market words.' },
      { ewe:'Adzɔgbedede',   roman:'a-dzoh-g-beh-deh-deh', english:'Trading', category:'Market' },
      { ewe:'Ŋkutu',         roman:'n-ku-tu',        english:'Price / Amount', category:'Market' },
      { ewe:'Tɔ nɛ?',        roman:'toh neh',        english:'How much is it?',category:'Market' },
      { ewe:'Akpedze',       roman:'ak-peh-dzeh',    english:'Cheap',          category:'Market' },
      { ewe:'Gakakã',        roman:'ga-ka-kah',      english:'Very expensive', category:'Market' },
      { ewe:'Ga',            roman:'ga',             english:'Money / Wealth', category:'Market', notes:'Ewe "Ga" for money — note similarity to Ga people\'s name (different origins).' },

      // VOLTA REGION & NATURE
      { ewe:'Todzi',         roman:'to-dzee',        english:'Volta River',    category:'Nature', notes:'The Volta River defines the Ewe homeland — "Todzi" means "the big water".' },
      { ewe:'Ʋo',            roman:'voh',            english:'Water / River',  category:'Nature' },
      { ewe:'Atike',         roman:'a-tee-keh',      english:'Medicine / Herb',category:'Nature', notes:'Traditional herbal medicine is strong in Ewe culture.' },
      { ewe:'Ati',           roman:'a-tee',          english:'Tree / Wood',    category:'Nature' },
      { ewe:'Ʋuʋu',          roman:'vu-vu',          english:'Wind',           category:'Nature' },
      { ewe:'Ŋkeke',         roman:'n-keh-keh',      english:'Day / Sun',      category:'Nature' },

      // EMOTIONS
      { ewe:'Adɔ',           roman:'a-doh',          english:'Love',           category:'Emotions' },
      { ewe:'Nunyaɖe',       roman:'nu-nyah-deh',    english:'Joy / Happiness',category:'Emotions' },
      { ewe:'Dɔaɖe',         roman:'doh-ah-deh',     english:'Sadness',        category:'Emotions' },
      { ewe:'Dzɔdzɔ',        roman:'dzoh-dzoh',      english:'Peace',          category:'Emotions', notes:'Peace (Dzɔdzɔ) is central to Ewe ethics and community life.' },
      { ewe:'Dɔwɔwɔ',        roman:'doh-woh-woh',    english:'Anger',          category:'Emotions' },

      // INTERMEDIATE VERBS
      { ewe:'Gblɔ',          roman:'g-bloh',         english:'Say / Tell',     category:'Verbs', notes:'Ewe storytelling begins with "Gblɔ" — the act of speaking.' },
      { ewe:'Se',            roman:'seh',            english:'Hear / Listen',  category:'Verbs' },
      { ewe:'Kpɔ',           roman:'k-poh',          english:'See / Look',     category:'Verbs' },
      { ewe:'Djɔ',           roman:'djoh',           english:'Know / Understand', category:'Verbs' },
      { ewe:'Nyasa',         roman:'nyah-sa',        english:'Think / Believe',category:'Verbs' },
      { ewe:'Wɔ dɔ',         roman:'woh doh',        english:'Work',           category:'Verbs' },
      { ewe:'Gbu',           roman:'g-boo',          english:'Build',          category:'Verbs' },
      { ewe:'Dzɔ',           roman:'dzoh',           english:'Run',            category:'Verbs' },
    ],

    phrases: [
      { ewe:'Medo kente adanu.',        roman:'meh-do ken-teh a-da-nu',    english:'I like kente cloth.',              category:'Culture' },
      { ewe:'Todzi li ŋutɔ ŋkeke.',   roman:'to-dzee lee ngoo-toh n-keh-keh', english:'The Volta River is shining today.', category:'Nature' },
      { ewe:'Mele adɔ na wo.',         roman:'meh-leh a-doh na wo',       english:'I have love for you.',             category:'Emotions' },
      { ewe:'Boa nyi, kafra.',          roman:'boa nyee, kaf-ra',          english:'Please help me.',                  category:'Courtesy' },
      { ewe:'Asiwo gbã ƒe ŋuti?',      roman:'a-see-wo g-bah feh ngoo-tee', english:'How far is the market?',          category:'Directions' },
      { ewe:'Fetri detsi yɔ lom.',     roman:'feh-tree deh-tsee yoh lom', english:'The okro soup smells good.',       category:'Food' },
    ],

    quiz: [
      { ewe:'Kente',      choices:['A drum','Woven Ewe cloth','A festival food','A prayer'],  correct:1, cultural:'Ewe kente from Kpetoe is hand-woven on narrow strip looms — takes days to complete one cloth.' },
      { ewe:'Egbe',       choices:['Tomorrow','Yesterday','Today','Next week'],               correct:2, cultural:'Time expressions in Ewe are quite different from Akan — worth studying carefully.' },
      { ewe:'Todzi',      choices:['Volta River','A mountain','An ocean','A lagoon'],         correct:0, cultural:'The Volta River (Todzi) is sacred to the Ewe — it defines their ancestral homeland.' },
      { ewe:'Fetri Detsi',choices:['Palm nut soup','Corn porridge','Okro soup','Fish stew'],  correct:2, cultural:'Fetri Detsi is the Ewe national dish — paired with Akple, it is comfort food.' },
      { ewe:'Dzɔdzɔ',     choices:['War','Peace','Joy','Anger'],                             correct:1, cultural:'Peace (Dzɔdzɔ) is the highest Ewe social value — sought in all community matters.' },
      { ewe:'Gblɔ',       choices:['Hear','See','Say/Tell','Walk'],                          correct:2, cultural:'The art of speech (Gblɔ) is highly valued — Ewe oral poetry is celebrated.' },
      { ewe:'Ga',         choices:['Water','Money/Wealth','Fire','Tree'],                     correct:1, cultural:'Ga (money) in Ewe — one of the most important words in any trading society.' },
      { ewe:'Agbozume',   choices:['A river town','Ewe weaving market center','A festival','A deity'], correct:1, cultural:'Agbozume market in the Volta Region is the kente cloth capital of Ewe country.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ADVANCED
  // ═══════════════════════════════════════════════════════════
  advanced: {
    label:       'Advanced',
    description: 'Ewe proverbs, verbal system, traditional religion, Vodun, philosophy.',
    xpReward:    35,

    vocabulary: [
      // RELIGION & VODUN
      { ewe:'Mawu',          roman:'mah-wu',         english:'Supreme God',            category:'Spiritual', notes:'Mawu is the supreme deity in Ewe tradition — the Creator, associated with the moon and feminine energy.' },
      { ewe:'Lisa',          roman:'lee-sa',         english:'Co-creator deity (sun/male)', category:'Spiritual', notes:'Mawu-Lisa is a divine pair — Mawu (moon/female) and Lisa (sun/male) together form the Creator.' },
      { ewe:'Trɔ',           roman:'troh',           english:'Deity / Spiritual force', category:'Spiritual', notes:'Lesser deities who mediate between humans and Mawu. Plural: Trɔwɔ.' },
      { ewe:'Vodun',         roman:'vo-doon',        english:'Spirit / Sacred force',  category:'Spiritual', notes:'The word that became "Voodoo" — literally means "spirit/divine force" in Ewe-Fon languages.' },
      { ewe:'Xɛbiɔ',         roman:'x-heh-bee-oh',  english:'Thunder deity',          category:'Spiritual', notes:'The most feared and respected of Ewe deities — controls thunder and lightning.' },
      { ewe:'Legba',         roman:'leg-ba',         english:'Trickster deity / Messenger', category:'Spiritual', notes:'Legba is the guardian of crossroads and doorways — became "Elegba" in diaspora traditions.' },
      { ewe:'Gu',            roman:'goo',            english:'Deity of iron and war',  category:'Spiritual', notes:'God of metal and warriors — comparable to Yoruba Ogun.' },
      { ewe:'Agbe',          roman:'ag-beh',         english:'Life / Sea / Mami Wata sphere', category:'Spiritual', notes:'The sea deity associated with water spirits and abundance.' },
      { ewe:'Ɖuɖu',          roman:'doo-doo',        english:'Taboo / Sacred prohibition', category:'Spiritual' },
      { ewe:'Amegã',         roman:'a-meh-gah',      english:'Important person / Elder leader', category:'Society' },

      // PHILOSOPHY & VALUES
      { ewe:'Nunya',         roman:'nu-nyah',        english:'Knowledge / Wisdom',     category:'Values', notes:'Nunya is deeply respected — the Ewe prize wisdom above wealth.' },
      { ewe:'Agbenɔnɔ',      roman:'ag-beh-noh-noh', english:'Way of life / Living well', category:'Values' },
      { ewe:'Ʋedɔ',          roman:'veh-doh',        english:'Righteousness / Virtue', category:'Values' },
      { ewe:'Nudzaɖoɖo',     roman:'nu-dzah-doh-doh', english:'Honesty / Truthfulness', category:'Values' },
      { ewe:'Nɔnɔme',        roman:'noh-noh-meh',    english:'Patience / Endurance',   category:'Values' },
      { ewe:'Ʋɔnu',          roman:'voh-nu',         english:'Medicine / Healing',     category:'Values' },

      // ADVANCED VOCABULARY
      { ewe:'Amegbeɖoɖo',    roman:'a-meh-g-beh-doh-doh', english:'History / Oral tradition', category:'Culture', notes:'The Ewe oral history tradition — stories told by elders.' },
      { ewe:'Adziŋgo',       roman:'a-dzing-go',     english:'Riddle / Puzzle',        category:'Culture', notes:'Ewe riddling tradition is sophisticated and used in youth education.' },
      { ewe:'Hadzigbale',    roman:'ha-dzee-g-ba-leh', english:'Song tradition',       category:'Culture' },
      { ewe:'Adzogbo',       roman:'a-dzoh-g-bo',    english:'Warrior dance of the Ewe', category:'Culture', notes:'A famous Ewe dance originating from victory celebrations.' },
      { ewe:'Husago',        roman:'hu-sa-go',       english:'Vodun ceremony dance',   category:'Culture', notes:'Sacred dance performed at Vodun ceremonies — trance-inducing.' },

      // ADVANCED VERBS
      { ewe:'Ƒoƒo',          roman:'fo-fo',          english:'Pray / Bow in reverence',category:'Verbs' },
      { ewe:'Trɔ lɔlɔ̃',      roman:'troh loh-lohn',  english:'Worship the deity',     category:'Verbs' },
      { ewe:'Kpɔ ŋu',        roman:'k-poh ngoo',     english:'Respect / Look up to',  category:'Verbs' },
      { ewe:'Ʋu gõ',         roman:'vu gohn',        english:'Fight for freedom',      category:'Verbs', notes:'Literally "burst out".' },
      { ewe:'Lɔ nyui',       roman:'loh nyoo-ee',    english:'Love dearly',            category:'Verbs' },
    ],

    proverbs: [
      {
        ewe:     'Dɔwɔwɔ ke agbenɔnɔ.',
        roman:   'doh-woh-woh keh ag-beh-noh-noh',
        english: 'Work is life.',
        meaning: 'A life of purpose and labour is a life truly lived.',
        category:'Work',
      },
      {
        ewe:     'Ame aɖeke mele ame o.',
        roman:   'a-meh a-deh-keh meh-leh a-meh oh',
        english: 'No one is an island of themselves.',
        meaning: 'Human beings cannot exist meaningfully in isolation — community is essential.',
        category:'Community',
        notes:   'One of the most-quoted Ewe proverbs — parallels the Ubuntu philosophy.',
      },
      {
        ewe:     'Nunya adidoe, se asi eye wɔ gã.',
        roman:   'nu-nyah a-dee-do-eh, seh a-see eh-yeh woh gah',
        english: 'Wisdom is not found in one location — you travel and work to get it.',
        meaning: 'Knowledge requires seeking, travelling, and effort — it is never simply given.',
        category:'Wisdom',
      },
      {
        ewe:     'Vodun mele afima ko o.',
        roman:   'vo-doon meh-leh a-fee-ma ko oh',
        english: 'The spirit is not found in only one place.',
        meaning: 'The divine is everywhere — do not limit your understanding of the sacred.',
        category:'Spiritual',
      },
      {
        ewe:     'Dzɔdzɔ yɔ nu na ameaɖeke.',
        roman:   'dzoh-dzoh yoh nu na a-meh-a-deh-keh',
        english: 'Peace is food for everyone.',
        meaning: 'Peace nourishes all people equally — it is a universal need.',
        category:'Peace',
      },
    ],

    quiz: [
      { ewe:'Mawu',      choices:['War god','Earth spirit','Supreme God (Creator)','River deity'], correct:2, cultural:'Mawu — the Ewe supreme being, associated with the moon and feminine creative energy.' },
      { ewe:'Vodun',     choices:['A type of drum','Spirit/Sacred force','A food','A dance only'], correct:1, cultural:'Vodun became "Voodoo" through the Ewe diaspora in Haiti — it is a profound spiritual system.' },
      { ewe:'Xɛbiɔ',     choices:['Rain god','Sea god','Thunder deity','Forest spirit'],         correct:2, cultural:'Xɛbiɔ is one of the most powerful Ewe deities — thunder and lightning are his domain.' },
      { ewe:'Legba',     choices:['War deity','Trickster/Messenger deity','Sea god','Creator'],  correct:1, cultural:'Legba is the guardian of crossroads — his worship spread to Haiti and the Americas.' },
      { ewe:'Nunya',     choices:['Power','Money','Knowledge/Wisdom','Land'],                    correct:2, cultural:'Nunya (wisdom) is prized above wealth in Ewe society — elders are its guardians.' },
      { ewe:'Adzogbo',   choices:['A food','A Vodun dance','A fabric type','A festival name'],   correct:1, cultural:'Adzogbo originated as a victory dance — today performed at festivals across Volta Region.' },
      { ewe:'Dzɔdzɔ',    choices:['War','Peace','Hunger','Fear'],                               correct:1, cultural:'Peace (Dzɔdzɔ) is the supreme Ewe social aspiration.' },
      { ewe:'Amegã',     choices:['Warrior','Important elder/leader','Young person','Stranger'], correct:1, cultural:'Amegã (important person) — elders hold authority in Ewe community governance.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // LEGEND
  // ═══════════════════════════════════════════════════════════
  legend: {
    label:       'Legend',
    description: 'Ewe cosmology, Vodun theology, diaspora language, Anlo history, oral poetry.',
    xpReward:    50,

    vocabulary: [
      // COSMOLOGICAL
      { ewe:'Mawu-Lisa',      roman:'mah-wu lee-sa',  english:'The divine pair — Moon-Sun Creator', category:'Spiritual', notes:'The Ewe concept of God as a dual being — Mawu (moon/female) and Lisa (sun/male) — one of the most sophisticated African cosmologies.' },
      { ewe:'Gbetsilẽ',       roman:'g-beh-tsee-leh', english:'The world of the dead',  category:'Spiritual', notes:'The Ewe afterlife — the dead continue to exist in Gbetsilẽ and can communicate with the living.' },
      { ewe:'Kodzogbe',       roman:'ko-dzoh-g-beh',  english:'The space between worlds', category:'Spiritual', notes:'A liminal spiritual zone in Ewe cosmology — between the living and the dead.' },
      { ewe:'Togbui',         roman:'toh-g-boo-ee',   english:'Ancestral spirit / Grandfather', category:'Spiritual', notes:'Togbui (male ancestor) and Mama (female ancestor) — deeply venerated.' },
      { ewe:'Mama',           roman:'ma-ma',          english:'Female ancestral spirit', category:'Spiritual', notes:'Mama spirits are invoked for protection and guidance.' },
      { ewe:'Ŋutinya',        roman:'ngoo-tee-nyah',  english:'Spiritual power within a person', category:'Spiritual', notes:'The inner divine force — parallels Akan "Sunsum".' },
      { ewe:'Dzidzɔɖoɖo',    roman:'dzee-dzoh-doh-doh', english:'The path of the soul', category:'Spiritual' },

      // ANLO-EWE HISTORY
      { ewe:'Anlo',           roman:'an-lo',          english:'The Anlo Ewe people',    category:'History', notes:'The Anlo are the largest Ewe sub-group in Ghana — famous for the Hogbetsotso festival.' },
      { ewe:'Hogbetsotso',    roman:'hoh-g-beh-tsoh-tsoh', english:'Festival of the Exodus', category:'History', notes:'Commemorates the Anlo Ewe\'s escape from slavery at Notsie (now Togo) — one of Ghana\'s greatest festivals.' },
      { ewe:'Notsie',         roman:'not-see-eh',     english:'Ancient Anlo homeland (now in Togo)', category:'History', notes:'The Anlo Ewe fled from oppressive King Agorkorli of Notsie — their escape is celebrated annually.' },
      { ewe:'Agorkorli',      roman:'a-gor-kor-lee',  english:'Tyrant king of Notsie', category:'History', notes:'The oppressive king the Anlo Ewe fled from — his cruelty united them for the Great Exodus.' },
      { ewe:'Keta',           roman:'keh-ta',         english:'Historic Anlo port city',category:'History', notes:'Keta in the Volta Region — a historic Ewe city known for salt production and trade.' },

      // DIASPORA
      { ewe:'Haitian Vodou',  roman:'voh-doo',        english:'Ewe/Fon-derived diaspora religion', category:'Diaspora', notes:'Haitian Vodou traces directly to Ewe and Fon Vodun brought by enslaved Africans.' },
      { ewe:'Candomblé',      roman:'kan-dom-bleh',   english:'Brazilian Afro-religious tradition', category:'Diaspora', notes:'Brazilian Candomblé includes Ewe-Fon spiritual elements — Gu, Legba, Mawu are present.' },
      { ewe:'Egungun',        roman:'eh-goon-goon',   english:'Ancestral masquerade tradition', category:'Diaspora', notes:'The Egungun masquerade tradition connects West Africa to Yorubaland and the diaspora.' },

      // ORAL POETRY
      { ewe:'Halo',           roman:'ha-lo',          english:'Praise poetry / Oral history songs', category:'Oral Literature', notes:'Ewe Halo is a sophisticated tradition of historical praise-songs.' },
      { ewe:'Ahawo',          roman:'a-ha-wo',        english:'Song of mourning',       category:'Oral Literature', notes:'Funeral songs that celebrate a life and help the community grieve together.' },
      { ewe:'Vutsotso',       roman:'voo-tsoh-tsoh',  english:'Teaching of the ancestors', category:'Oral Literature', notes:'The transmission of wisdom from elders to youth through story and song.' },
      { ewe:'Kpando',         roman:'k-pa-ndo',       english:'Town known for Ewe music and dance', category:'Culture', notes:'Kpando in the Volta Region is a centre of Ewe cultural performance.' },
    ],

    proverbs: [
      {
        ewe:     'Mawu wɔ ame, ame wɔ agbe.',
        roman:   'mah-wu woh a-meh, a-meh woh ag-beh',
        english: 'God made the person; the person makes their life.',
        meaning: 'We are given existence by God, but the quality of our living is our own responsibility.',
        category:'Spiritual',
      },
      {
        ewe:     'Togbui ƒe gbe, esia wɔ nu.',
        roman:   'toh-g-boo-ee feh g-beh, eh-sia woh nu',
        english: 'The voice of the ancestor — that is what matters.',
        meaning: 'Wisdom passed down from elders and ancestors is the most precious guidance.',
        category:'Heritage',
      },
      {
        ewe:     'Ame aɖeke mate ŋu ɖi xɛ o, eye wòate ŋu ƒu o.',
        roman:   'a-meh a-deh-keh ma-teh ngoo dee x-heh oh, eh-yeh woh-a-teh ngoo foo oh',
        english: 'No one can eat fire and no one can sleep in fire.',
        meaning: 'Some things are beyond human endurance — know your limits and respect natural law.',
        category:'Wisdom',
      },
      {
        ewe:     'Hogbetsotso! Ame ƒe adanu mede ŋu ede o.',
        roman:   'hoh-g-beh-tsoh-tsoh, a-meh feh a-da-nu meh-deh ngoo eh-deh oh',
        english: 'At the Great Exodus! No one can take away a person\'s woven cloth.',
        meaning: 'Your identity, heritage, and culture cannot be stolen — even in exile.',
        category:'Identity',
      },
      {
        ewe:     'Vodun le ɣe, Mawu le ɣe, ame le ɣe.',
        roman:   'vo-doon leh g-heh, mah-wu leh g-heh, a-meh leh g-heh',
        english: 'The spirit is here, God is here, the person is here.',
        meaning: 'The divine, the sacred forces, and humanity all coexist in the same world — separation is illusion.',
        category:'Spiritual',
      },
    ],

    ceremonialPhrases: [
      { ewe:'Mawu, boa míawo!',              roman:'mah-wu, boa mee-a-wo',          english:'Mawu, help us!',                      context:'Prayer' },
      { ewe:'Togbui kple Mama, mia hae míawo!', roman:'toh-g-boo-ee k-pleh ma-ma, mia ha-eh mee-a-wo', english:'Ancestors, watch over us!', context:'Libation' },
      { ewe:'Hogbetsotso! Anlo, mia yi!',    roman:'hoh-g-beh-tsoh-tsoh, an-lo, mia yee', english:'Hogbetsotso! Anlo, let us go!',    context:'Festival cry' },
      { ewe:'Xɛbiɔ, ɖe miatsɔ!',            roman:'x-heh-bee-oh, deh mia-tsoh',    english:'Xɛbiɔ (thunder), receive us!',        context:'Ceremony', notes:'Calling on the thunder deity for protection.' },
      { ewe:'Dzɔdzɔ na míawo, Mawu!',       roman:'dzoh-dzoh na mee-a-wo, mah-wu', english:'Give us peace, Mawu!',                context:'Prayer', notes:'The most commonly offered Ewe prayer.' },
    ],

    quiz: [
      { ewe:'Mawu-Lisa',    choices:['Twin warrior gods','Divine Moon-Sun Creator pair','Sea and forest deities','Ancestor pair'], correct:1, cultural:'Mawu-Lisa is one of the most sophisticated African cosmological concepts — a gendered, unified divine creator.' },
      { ewe:'Hogbetsotso',  choices:['A harvest festival','A fishing festival','The Anlo Great Exodus festival','A war celebration'], correct:2, cultural:'Hogbetsotso commemorates the Anlo Ewe\'s dramatic escape from Notsie — held annually in Anloga.' },
      { ewe:'Vodun',        choices:['A drum type','A sacred spiritual force','A food','A river'], correct:1, cultural:'Vodun crossed the Atlantic with enslaved Ewe and Fon people — became Haitian Vodou and Brazilian Candomblé.' },
      { ewe:'Legba',        choices:['God of war','Sea deity','Trickster at the crossroads','Creator deity'], correct:2, cultural:'Legba became Eshu/Elegba in Yoruba culture and Legba/Papa Legba in Haitian Vodou.' },
      { ewe:'Gbetsilẽ',    choices:['The sky','The world of the dead','A sacred dance','A festival ground'], correct:1, cultural:'Ewe cosmology includes a rich afterlife — ancestors in Gbetsilẽ remain close to the living.' },
      { ewe:'Keta',         choices:['Mountain city','Forest town','Historic Anlo port city','Sacred village'], correct:2, cultural:'Keta on the Volta estuary was once a major port — now threatened by coastal erosion.' },
      { ewe:'Togbui',       roman:   'Ancestral spirit (male)',  choices:['A young warrior','Male ancestral spirit','A deity of water','A king'], correct:1, cultural:'Togbui and Mama (female ancestor) are invoked in all Ewe ceremonies for protection.' },
      { ewe:'Halo',         choices:['A prayer','Praise poetry/oral history songs','A food tradition','A weaving style'], correct:1, cultural:'Ewe Halo songs preserve centuries of history — performed by specialists at important events.' },
    ],
  },
}

export default EWE
