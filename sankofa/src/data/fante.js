/**
 * FANTE — Full Language Dataset
 * Dialect: Fante (Mfantse) — spoken in Central and Western Regions, Ghana
 * Script: Latin with special characters (ɛ, ɔ, ŋ)
 * Closely related to Twi but with distinct vocabulary, phonology, and culture
 * Levels: beginner · intermediate · advanced · legend
 */

export const FANTE = {
  meta: {
    language:  'Fante (Mfantse)',
    code:      'fante',
    region:    'Central Region, Western Region, Ghana',
    family:    'Niger-Congo → Kwa → Akan',
    speakers:  '~2.2 million (L1)',
    script:    'Latin (with ɛ, ɔ, ŋ)',
    tones:     true,
    toneNote:  'Fante is tonal. Tone distinctions are crucial for meaning.',
    flag:      '🌺',
    color:     '#2980B9',
    notes:     'Fante shares ~85% vocabulary with Asante Twi but has distinct pronunciations, vocabulary items, and strong coastal/maritime cultural identity.',
  },

  // ═══════════════════════════════════════════════════════════
  // BEGINNER
  // ═══════════════════════════════════════════════════════════
  beginner: {
    label:       'Beginner',
    description: 'Core greetings, numbers, colours, family, basic needs.',
    xpReward:    10,

    vocabulary: [
      // GREETINGS
      { fante:'Akwaaba',         roman:'ak-waa-ba',        english:'Welcome',            category:'Greetings', notes:'Shared with Twi — universal Akan welcome.' },
      { fante:'Maakye',          roman:'maa-chee',         english:'Good morning',       category:'Greetings' },
      { fante:'Maaha',           roman:'maa-ha',           english:'Good afternoon',     category:'Greetings' },
      { fante:'Maadwo',          roman:'maa-dwo',          english:'Good evening',       category:'Greetings' },
      { fante:'Wo ho te sɛn?',   roman:'wo ho teh sen',    english:'How are you?',       category:'Greetings' },
      { fante:'Me ho yɛ',        roman:'meh ho yeh',       english:'I am fine',          category:'Greetings' },
      { fante:'Da yie',          roman:'da yee-eh',        english:'Goodnight',          category:'Greetings' },
      { fante:'Yaa anko',        roman:'yaa an-ko',        english:'Safe journey',       category:'Greetings' },
      { fante:'Hɔfrɛ no sɛn?',  roman:'ho-freh no sen',   english:'What is it called?', category:'Greetings', notes:'Fante phrasing differs slightly from Twi here.' },

      // COURTESY
      { fante:'Meda ase',        roman:'meh-da-a-seh',     english:'Thank you',          category:'Courtesy' },
      { fante:'Kafra',           roman:'kaf-ra',           english:'Excuse me / Sorry',  category:'Courtesy' },
      { fante:'Mepaakyɛw',      roman:'meh-paak-yehw',    english:'Please',             category:'Courtesy' },
      { fante:'Aane',            roman:'aa-neh',           english:'Yes',                category:'Courtesy' },
      { fante:'Dabi',            roman:'daa-bee',          english:'No',                 category:'Courtesy' },
      { fante:'Yoo',             roman:'yoh',              english:'Okay / Agreed',      category:'Courtesy' },

      // INTRODUCTIONS
      { fante:'Wo din de sɛn?',  roman:'wo deen deh sen',  english:'What is your name?', category:'Introductions' },
      { fante:'Me din de …',     roman:'meh deen deh',     english:'My name is …',       category:'Introductions' },
      { fante:'Wofiri he?',      roman:'woh-fee-ree heh',  english:'Where are you from?',category:'Introductions' },
      { fante:'Mefiri …',        roman:'meh-fee-ree',      english:'I am from …',        category:'Introductions' },

      // NUMBERS
      { fante:'Ɛkrow',     roman:'eh-krow',    english:'One (1)',    category:'Numbers', notes:'Fante uses "Ɛkrow" vs Twi "Baako".' },
      { fante:'Abien',     roman:'a-bee-en',   english:'Two (2)',    category:'Numbers', notes:'Fante "Abien" vs Twi "Mmienu".' },
      { fante:'Abiɛsa',    roman:'a-bee-eh-sa', english:'Three (3)', category:'Numbers' },
      { fante:'Ɛnan',      roman:'eh-nan',     english:'Four (4)',   category:'Numbers' },
      { fante:'Enum',      roman:'eh-num',     english:'Five (5)',   category:'Numbers' },
      { fante:'Esia',      roman:'eh-shee-a',  english:'Six (6)',    category:'Numbers' },
      { fante:'Eson',      roman:'eh-son',     english:'Seven (7)', category:'Numbers' },
      { fante:'Ewɔtwe',    roman:'eh-wot-weh', english:'Eight (8)', category:'Numbers' },
      { fante:'Enkron',    roman:'en-kron',    english:'Nine (9)',  category:'Numbers' },
      { fante:'Edu',       roman:'eh-doo',     english:'Ten (10)',  category:'Numbers' },
      { fante:'Eduonu',    roman:'eh-doo-onu', english:'Twenty (20)',category:'Numbers' },

      // COLOURS
      { fante:'Kɔkɔɔ',    roman:'ko-ko',      english:'Red',   category:'Colours' },
      { fante:'Tuntum',    roman:'tun-tum',    english:'Black', category:'Colours', notes:'Fante uses "Tuntum" vs Twi "Bibiri".' },
      { fante:'Fufuo',     roman:'fu-fu-oh',   english:'White', category:'Colours', notes:'Fante "Fufuo" vs Twi "Fitaa".' },
      { fante:'Ahabammɔno',roman:'a-ha-bam-mo-no', english:'Green', category:'Colours' },
      { fante:'Ɔsrane',    roman:'oh-sra-neh', english:'Yellow / Gold', category:'Colours' },

      // FAMILY
      { fante:'Maame',     roman:'maa-meh',    english:'Mother',    category:'Family' },
      { fante:'Paapa',     roman:'paa-pa',     english:'Father',    category:'Family' },
      { fante:'Onua',      roman:'o-nu-a',     english:'Sibling',   category:'Family' },
      { fante:'Nana',      roman:'naa-na',     english:'Grandparent / Elder', category:'Family' },
      { fante:'Ɔba',       roman:'oh-ba',      english:'Child',     category:'Family' },
      { fante:'Wofa',      roman:'woh-fa',     english:'Uncle',     category:'Family' },
      { fante:'Ɔna',       roman:'oh-na',      english:'Aunt',      category:'Family' },

      // FOOD (Coastal specialties)
      { fante:'Aduane',    roman:'a-dua-neh',  english:'Food',          category:'Food' },
      { fante:'Nsu',       roman:'n-su',       english:'Water',         category:'Food' },
      { fante:'Enam',      roman:'eh-nam',     english:'Fish',          category:'Food', notes:'Fish is central to Fante coastal diet. Fante people are renowned fishers.' },
      { fante:'Kɔkɔ',      roman:'ko-ko',      english:'Porridge',      category:'Food', notes:'Common breakfast — fermented corn porridge.' },
      { fante:'Oto',       roman:'oh-to',      english:'Mashed yam with eggs', category:'Food', notes:'Traditionally prepared for naming ceremonies (Outdooring).' },
      { fante:'Borɔdeɛ',   roman:'boh-roh-deh-eh', english:'Plantain', category:'Food' },
      { fante:'Abɔbɔɛ',   roman:'a-boh-boh-eh', english:'Palm nut soup', category:'Food', notes:'A staple of Fante cooking, distinct from other Akan regions.' },

      // BASIC VERBS
      { fante:'Ba',        roman:'ba',         english:'Come',   category:'Verbs' },
      { fante:'Kɔ',        roman:'ko',         english:'Go',     category:'Verbs' },
      { fante:'Di',        roman:'dee',        english:'Eat',    category:'Verbs' },
      { fante:'Nom',       roman:'nom',        english:'Drink',  category:'Verbs' },
      { fante:'Tena',      roman:'teh-na',     english:'Sit',    category:'Verbs' },
      { fante:'Gyina',     roman:'jee-na',     english:'Stand',  category:'Verbs' },
      { fante:'Da',        roman:'da',         english:'Sleep',  category:'Verbs' },
    ],

    phrases: [
      { fante:'Me pɛ aduane.',        roman:'meh peh a-dua-neh',    english:'I want food.',        category:'Needs' },
      { fante:'Me wɔ nkɔm.',          roman:'meh woh n-kom',         english:'I am hungry.',        category:'Needs' },
      { fante:'Enam yɛ me dɔ.',       roman:'eh-nam yeh meh doh',    english:'I love fish.',        category:'Food', notes:'Fish-love is a Fante cultural identity marker!' },
      { fante:'Me nnim.',             roman:'meh n-nim',             english:'I don\'t know.',       category:'Common' },
      { fante:'Yɛ nkɔ!',             roman:'yeh n-ko',              english:'Let\'s go!',           category:'Common' },
      { fante:'Ɛyɛ fɛ paa.',         roman:'eh-yeh feh paa',        english:'It is very beautiful.',category:'Compliments' },
    ],

    quiz: [
      { fante:'Ɛkrow',     choices:['Two','Three','One','Four'],           correct:2, cultural:'Fante uses Ɛkrow for one — note how it differs from Twi\'s Baako.' },
      { fante:'Tuntum',    choices:['White','Red','Green','Black'],        correct:3, cultural:'Black (Tuntum) has spiritual significance — worn at funerals and important ceremonies.' },
      { fante:'Enam',      choices:['Meat','Fish','Chicken','Soup'],       correct:1, cultural:'The Fante are one of Ghana\'s greatest fishing peoples — fish is life on the Cape Coast.' },
      { fante:'Maakye',    choices:['Good night','Good morning','Welcome','Thank you'], correct:1, cultural:'Morning greetings set the tone for Fante community relationships.' },
      { fante:'Fufuo',     choices:['Yellow','Red','Black','White'],       correct:3, cultural:'White (Fufuo) symbolises purity in Fante culture.' },
      { fante:'Abien',     choices:['Three','One','Two','Four'],           correct:2, cultural:'Counting is essential for fishing trade along the Fante coast.' },
      { fante:'Oto',       choices:['Soup','Palm nuts','Mashed yam dish','Bread'], correct:2, cultural:'Oto is prepared for an Outdooring (naming ceremony) — 8 days after birth.' },
      { fante:'Meda ase',  choices:['Sorry','Please','Hello','Thank you'], correct:3, cultural:'Gratitude is a cornerstone of Fante social etiquette.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // INTERMEDIATE
  // ═══════════════════════════════════════════════════════════
  intermediate: {
    label:       'Intermediate',
    description: 'Full sentences, fishing culture, time, market trade, emotions.',
    xpReward:    20,

    vocabulary: [
      // TIME
      { fante:'Nnɛ',          roman:'n-neh',        english:'Today',          category:'Time' },
      { fante:'Ɛkyena',       roman:'eh-cheh-na',   english:'Tomorrow',       category:'Time' },
      { fante:'Ɛnnɛ',         roman:'eh-n-neh',     english:'Yesterday',      category:'Time' },
      { fante:'Anɔpa',        roman:'a-no-pa',      english:'Morning',        category:'Time' },
      { fante:'Awia',         roman:'a-wee-a',      english:'Afternoon',      category:'Time' },
      { fante:'Anadwo',       roman:'a-na-dwo',     english:'Night',          category:'Time' },
      { fante:'Bosome',       roman:'bo-so-meh',    english:'Month',          category:'Time' },
      { fante:'Afe',          roman:'a-feh',        english:'Year',           category:'Time' },

      // COASTAL & FISHING VOCABULARY (unique to Fante)
      { fante:'Po',           roman:'poh',          english:'Sea / Ocean',    category:'Coast', notes:'The sea (Po) is central to Fante identity — "Mfantsefo" means people of the coast.' },
      { fante:'Akwɛ',         roman:'ak-weh',       english:'Canoe',          category:'Coast', notes:'Traditional dugout canoes used by Fante fishermen for centuries.' },
      { fante:'Abɔnkyer',     roman:'a-bon-cheh',   english:'Crab',           category:'Coast' },
      { fante:'Nkakrankyi',   roman:'n-ka-kran-chee', english:'Shrimp',       category:'Coast' },
      { fante:'Asase Po',     roman:'a-sa-seh poh', english:'Beach / Shoreline', category:'Coast' },
      { fante:'Nwura',        roman:'n-woo-ra',     english:'Fisherman',      category:'Coast', notes:'Fishing is a generational profession in Fante communities.' },
      { fante:'Ewim',         roman:'eh-wim',       english:'Net (fishing)',  category:'Coast' },
      { fante:'Ahwehwer',     roman:'a-hweh-hweh',  english:'Waves',          category:'Coast' },

      // MARKET & TRADE
      { fante:'Ɛyɛ sɛn?',    roman:'eh-yeh sen',   english:'How much?',      category:'Market' },
      { fante:'Sika',         roman:'see-ka',       english:'Money / Gold',   category:'Market' },
      { fante:'To',           roman:'toh',          english:'Buy',            category:'Market' },
      { fante:'Tɔn',          roman:'ton',          english:'Sell',           category:'Market' },
      { fante:'Ɔpɛsewa',      roman:'oh-peh-seh-wa', english:'Cheap / Little',category:'Market' },
      { fante:'Ɔdɔ pii',      roman:'oh-doh pee',   english:'Expensive',      category:'Market' },
      { fante:'Dwabour',      roman:'dwa-boor',     english:'Market',         category:'Market', notes:'Fante "Dwabour" for market — slightly different from Twi "Dwa".' },

      // DIRECTIONS
      { fante:'Nifa',         roman:'nee-fa',       english:'Right',          category:'Directions' },
      { fante:'Benkum',       roman:'ben-kum',      english:'Left',           category:'Directions' },
      { fante:'Kɔ wiem',      roman:'ko wee-em',    english:'Go straight',    category:'Directions' },
      { fante:'Po bɛn',       roman:'poh ben',      english:'Near the sea',   category:'Directions', notes:'Fante directions often reference the sea as a landmark.' },
      { fante:'Abɔnten',      roman:'a-bon-ten',    english:'Street / Outside',category:'Directions' },

      // EMOTIONS
      { fante:'Ɔdɔ',          roman:'oh-doh',       english:'Love',           category:'Emotions' },
      { fante:'Anigye',       roman:'a-nee-jeh',    english:'Joy',            category:'Emotions' },
      { fante:'Awerɛhow',     roman:'a-weh-reh-ho', english:'Sadness',        category:'Emotions' },
      { fante:'Abufuw',       roman:'a-boo-foo',    english:'Anger',          category:'Emotions' },
      { fante:'Ɛhwɛ',         roman:'eh-hweh',      english:'Fear',           category:'Emotions' },

      // INTERMEDIATE VERBS
      { fante:'Kasa',         roman:'ka-sa',        english:'Speak',          category:'Verbs' },
      { fante:'Tie',          roman:'tee-eh',       english:'Listen',         category:'Verbs' },
      { fante:'Pɛ',           roman:'peh',          english:'Want / Like',    category:'Verbs' },
      { fante:'Nim',          roman:'nim',          english:'Know',           category:'Verbs' },
      { fante:'Kyerɛ',        roman:'cheh-reh',     english:'Show / Teach',   category:'Verbs' },
      { fante:'Sua',          roman:'su-a',         english:'Learn',          category:'Verbs' },
      { fante:'Bɔ',           roman:'boh',          english:'Hit / Beat / Make', category:'Verbs', notes:'Very versatile verb in Fante.' },
      { fante:'Hye',          roman:'hyeh',         english:'Wear / Dress',   category:'Verbs' },

      // BODY
      { fante:'Ti',           roman:'tee',          english:'Head',           category:'Body' },
      { fante:'Ani',          roman:'a-nee',        english:'Eye',            category:'Body' },
      { fante:'Aso',          roman:'a-so',         english:'Ear',            category:'Body' },
      { fante:'Efi',          roman:'eh-fee',       english:'Nose',           category:'Body' },
      { fante:'Ano',          roman:'a-no',         english:'Mouth',          category:'Body' },
      { fante:'Nsa',          roman:'n-sa',         english:'Hand',           category:'Body' },
      { fante:'Nan',          roman:'nan',          english:'Foot / Leg',     category:'Body' },
    ],

    phrases: [
      { fante:'Me kɔ po ho.',             roman:'meh ko poh ho',           english:'I am going to the sea.',              category:'Daily Life' },
      { fante:'Enam a ebɛn yi, ɛyɛ fɛ.', roman:'eh-nam a eh-ben yee, eh-yeh feh', english:'This fresh fish is beautiful/good.', category:'Food' },
      { fante:'Sika bɛn na ɛho?',         roman:'see-ka ben na eh-ho',     english:'How much money is it?',               category:'Market' },
      { fante:'Me dɔ wo.',                roman:'meh doh wo',              english:'I love you.',                         category:'Emotions' },
      { fante:'Mepa wo kyɛw, boa me.',    roman:'meh-pa wo chehw, boa meh', english:'Please help me.',                    category:'Courtesy' },
      { fante:'Nwura no ba fi po mu.',    roman:'n-woo-ra no ba fee poh mu', english:'The fisherman is coming from the sea.', category:'Coast' },
    ],

    quiz: [
      { fante:'Po',        choices:['River','Forest','Sea/Ocean','Lake'],         correct:2, cultural:'The sea (Po) defines Fante identity — their greatest festivals celebrate it.' },
      { fante:'Akwɛ',      choices:['Net','Canoe','Paddle','Fish'],               correct:1, cultural:'Fante fishermen use dugout canoes — some over 40 feet long for deep sea.' },
      { fante:'Dwabour',   choices:['Church','Market','School','Palace'],         correct:1, cultural:'Fante markets are vibrant social hubs — not just for trade but for community.' },
      { fante:'Nwura',     choices:['Farmer','Teacher','Fisherman','Trader'],     correct:2, cultural:'Fishing communities in Fante areas pass down techniques over generations.' },
      { fante:'Abɔnkyer',  choices:['Fish','Lobster','Crab','Shrimp'],            correct:2, cultural:'Crabs are caught along the Fante coast and feature in local seafood dishes.' },
      { fante:'Anadwo',    choices:['Morning','Afternoon','Night','Sunset'],      correct:2, cultural:'Fante fishermen often set out at night — the sea by moonlight is part of their culture.' },
      { fante:'Anigye',    choices:['Anger','Sadness','Fear','Joy'],              correct:3, cultural:'Fante celebrations — especially at festivals like Bakatue — are known for their joy.' },
      { fante:'Sika',      choices:['Food','Gold/Money','Sea','Market'],          correct:1, cultural:'Fante traders along the coast were key in the gold trade that shaped West Africa.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ADVANCED
  // ═══════════════════════════════════════════════════════════
  advanced: {
    label:       'Advanced',
    description: 'Fante proverbs, festivals, colonial history vocabulary, formal speech.',
    xpReward:    35,

    vocabulary: [
      // CULTURE & FESTIVALS
      { fante:'Bakatue',      roman:'ba-ka-tu-eh',  english:'Annual fishing festival',  category:'Culture', notes:'The most important Fante festival — marks the opening of the fishing season at Anomabo/Elmina.' },
      { fante:'Aboakyir',     roman:'a-boa-cheer',  english:'Deer-hunting festival',    category:'Culture', notes:'Held at Winneba — two warrior companies compete to catch a live deer.' },
      { fante:'Fetu Afahye',  roman:'feh-tu a-fa-hyeh', english:'Cape Coast harvest festival', category:'Culture', notes:'Celebrated annually in Cape Coast, the historical capital of Fante.' },
      { fante:'Fante Asafo',  roman:'fan-teh a-sa-fo', english:'Fante warrior companies',  category:'Culture', notes:'Asafo companies have distinct flags, shrines, and histories — still active today.' },
      { fante:'Posuban',      roman:'po-su-ban',    english:'Asafo shrine / Compound',  category:'Culture', notes:'Elaborately decorated shrines built by each Asafo company.' },

      // HISTORICAL VOCABULARY
      { fante:'Aburɔkyire',   roman:'a-boo-roh-chee-reh', english:'Abroad / Overseas / Europe', category:'History', notes:'Fante word for Europe/overseas — shaped by centuries of coastal trade.' },
      { fante:'Broni',        roman:'bro-nee',      english:'Foreigner / White person', category:'History', notes:'Originally "Abrɔfo" — became "Broni" in modern usage. Reflects coastal contact history.' },
      { fante:'Edina',        roman:'eh-dee-na',    english:'Elmina',                   category:'History', notes:'Elmina — site of the first European castle in sub-Saharan Africa (1482). Fante name is Edina.' },
      { fante:'Ɔkyeame',      roman:'oh-cheh-a-meh', english:'Royal linguist',         category:'Society' },
      { fante:'Omanhen',      roman:'oh-man-hen',   english:'Paramount chief / King',  category:'Society', notes:'The highest traditional ruler among the Fante.' },
      { fante:'Abusuahen',    roman:'a-boo-sua-hen', english:'Head of the family clan', category:'Society' },

      // FANTE-SPECIFIC VOCABULARY
      { fante:'Afenhyia pa',  roman:'a-fen-hyee-a pa', english:'Happy New Year',       category:'Greetings', notes:'Literally "good year turning/meeting".' },
      { fante:'Nkran',        roman:'n-kran',       english:'Accra / Ant',             category:'Places', notes:'Fante name for Accra derives from the word for ant — referring to the Ga people\'s industry.' },
      { fante:'Ahenfie',      roman:'a-hen-fee-eh', english:'Palace / Chief\'s court', category:'Society' },
      { fante:'Amenfie',      roman:'a-men-fee-eh', english:'Town / Community',        category:'Society' },

      // ADVANCED VERBS
      { fante:'Gyae',         roman:'jeh',          english:'Stop / Quit',            category:'Verbs' },
      { fante:'Bɔ bo',        roman:'boh bo',       english:'Be patient / Have courage', category:'Verbs', notes:'Literally "make heart".' },
      { fante:'Hia',          roman:'hee-a',        english:'Need / Lack',            category:'Verbs' },
      { fante:'De fa',        roman:'deh fa',       english:'Take and bring',         category:'Verbs' },
      { fante:'Hye',          roman:'hyeh',         english:'Begin / Promise / Decree', category:'Verbs' },
      { fante:'Guan',         roman:'guan',         english:'Run / Flee',             category:'Verbs' },
      { fante:'Boro',         roman:'boh-roh',      english:'Exceed / Surpass',       category:'Verbs' },

      // PHILOSOPHICAL
      { fante:'Abusua',       roman:'a-boo-sua',    english:'Clan / Family',          category:'Society', notes:'Matrilineal clan system — identity flows through the mother.' },
      { fante:'Mogya',        roman:'moh-jaa',      english:'Blood / Clan identity',  category:'Society' },
      { fante:'Sunsum',       roman:'sun-sum',      english:'Spirit / Soul',          category:'Spiritual' },
      { fante:'Okra',         roman:'oh-kra',       english:'Divine soul',            category:'Spiritual' },
      { fante:'Nyame',        roman:'nyaa-meh',     english:'God',                    category:'Spiritual' },
    ],

    proverbs: [
      {
        fante:   'Onipa na ɔyɛ onipa.',
        roman:   'o-nee-pa na oh-yeh o-nee-pa',
        english: 'It is a person who makes a person.',
        meaning: 'Human connection and community are what give meaning to life.',
        category:'Community',
      },
      {
        fante:   'Obra te sɛ ewim — na yɛde no twa enam.',
        roman:   'ob-ra teh seh eh-wim — na yeh-deh no twa eh-nam',
        english: 'Life is like a fishing net — we use it to catch fish.',
        meaning: 'Life offers tools; it is how we use them that determines our harvest.',
        category:'Wisdom',
        notes:   'Fante proverb referencing fishing — unique to the coastal culture.',
      },
      {
        fante:   'Po a ɛbɔ ne ho, na nwura no hu ne tirim.',
        roman:   'poh a eh-boh neh ho, na n-woo-ra no hu neh tee-rim',
        english: 'When the sea is calm, the fisherman sees his reflection.',
        meaning: 'In times of peace and stillness, we discover who we truly are.',
        category:'Reflection',
      },
      {
        fante:   'Ti koro nko agyina.',
        roman:   'tee ko-ro n-ko a-jee-na',
        english: 'One head does not constitute a council.',
        meaning: 'Collective wisdom is greater than any individual opinion.',
        category:'Leadership',
      },
      {
        fante:   'Ɔyɛ onipa a ɔnim po, ɔnim po nso nim onipa.',
        roman:   'oh-yeh o-nee-pa a oh-nim poh, oh-nim poh n-so nim o-nee-pa',
        english: 'The person who knows the sea also knows the sea knows the person.',
        meaning: 'Deep knowledge creates a mutual relationship — respect what you master.',
        category:'Respect',
      },
    ],

    quiz: [
      { fante:'Bakatue',    choices:['Harvest festival','Fishing festival','Rain dance','Coronation'], correct:1, cultural:'Bakatue marks the opening of the fishing season — one of Ghana\'s most vibrant festivals.' },
      { fante:'Edina',      choices:['Cape Coast','Takoradi','Elmina','Accra'],                       correct:2, cultural:'Elmina Castle (1482) was the oldest European building in sub-Saharan Africa.' },
      { fante:'Broni',      choices:['Elder','Fisherman','Foreigner/White person','Chief'],           correct:2, cultural:'The Fante\'s centuries of coastal European trade shaped much of their vocabulary.' },
      { fante:'Omanhen',    choices:['Warrior','Drummer','Paramount chief','Market trader'],          correct:2, cultural:'Fante paramount chiefs played key roles in resisting British colonisation.' },
      { fante:'Aboakyir',   choices:['Fishing festival','Deer-hunting festival','Harvest','War'],     correct:1, cultural:'The Aboakyir deer-hunting festival at Winneba is over 300 years old.' },
      { fante:'Posuban',    choices:['Fishing harbor','Asafo shrine','Market stall','Royal palace'],  correct:1, cultural:'Posuban shrines are unique to Fante Asafo companies — elaborate folk architecture.' },
      { fante:'Ɔkyeame',   choices:['Farmer','Royal linguist','Soldier','Healer'],                   correct:1, cultural:'The Okyeame tradition of royal speech is one of Africa\'s most sophisticated.' },
      { fante:'Mogya',      choices:['Gold','Blood/clan','Soil','River'],                             correct:1, cultural:'Mogya (blood) determines Akan clan identity — passed through the mother.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // LEGEND
  // ═══════════════════════════════════════════════════════════
  legend: {
    label:       'Legend',
    description: 'Fante oral history, Atlantic world connections, maritime rites, deep proverbs.',
    xpReward:    50,

    vocabulary: [
      // MARITIME SPIRITUAL
      { fante:'Nananom Mpow',   roman:'na-na-nom m-pow', english:'Grove of the ancestors / Sacred forest', category:'Spiritual', notes:'Sacred groves in Fante communities where ancestral rites are performed.' },
      { fante:'Bosompo',        roman:'bo-som-poh',      english:'Sea god / Spirit of the ocean', category:'Spiritual', notes:'Fante deity of the sea, honoured by fishermen before voyages.' },
      { fante:'Ɔbosom',         roman:'oh-bo-som',       english:'Deity / Nature spirit',   category:'Spiritual', notes:'Plural: Abosom. Intermediary deities between humans and Onyame.' },
      { fante:'Nananom',        roman:'na-na-nom',       english:'The ancestors (plural)',   category:'Spiritual', notes:'Ancestral spirits who guide and protect the living.' },
      { fante:'Mmoatia',        roman:'m-moa-tee-a',     english:'Nature fairies / Little people', category:'Spiritual', notes:'Mythical forest beings who grant powers to traditional priests.' },
      { fante:'Dwirafo',        roman:'dwee-ra-fo',      english:'Purification ritual specialists', category:'Spiritual' },
      { fante:'Okomfo',         roman:'oh-kom-fo',       english:'Traditional priest / Medium', category:'Spiritual', notes:'Mediates between the living and the spirit world.' },

      // HISTORICAL LEGACY
      { fante:'Anaafo',         roman:'a-naa-fo',        english:'Southern people / Coastal Fante',  category:'History' },
      { fante:'Mfantsieman',    roman:'m-fan-tsi-eh-man', english:'Fante Nation / Confederation',    category:'History', notes:'The Fante Confederation (1868) was one of Africa\'s first constitutional states.' },
      { fante:'Mankessim',      roman:'man-kes-sim',     english:'Spiritual capital of the Fante',   category:'History', notes:'Mankessim is the spiritual and historical heartland of the Fante people.' },
      { fante:'Tuafo',          roman:'tua-fo',          english:'People who pay tribute / Federation members', category:'History' },
      { fante:'Nsumankwaafo',   roman:'n-su-man-kwaa-fo', english:'Keepers of sacred objects / Priests', category:'Spiritual' },

      // ADINKRA (shared Akan)
      { fante:'Gye Nyame',      roman:'jeh nyaa-meh',   english:'Except God',              category:'Adinkra' },
      { fante:'Akoma Ntoso',    roman:'a-ko-ma n-to-so', english:'Linked hearts — understanding/agreement', category:'Adinkra', notes:'Symbol of understanding and agreement among people.' },
      { fante:'Bese Saka',      roman:'beh-seh sa-ka',  english:'Sack of kola nuts — affluence, unity', category:'Adinkra', notes:'Kola nuts are shared at important ceremonies — symbolises plenty.' },
      { fante:'Denkyem',        roman:'den-chim',       english:'Crocodile — adaptability', category:'Adinkra', notes:'The crocodile lives in water but breathes air — adapts to all environments.' },

      // ORAL TRADITION
      { fante:'Asafo Nnwom',    roman:'a-sa-fo n-wom',  english:'Asafo warrior songs',     category:'Oral Literature', notes:'Each Asafo company has its own set of war songs and chants.' },
      { fante:'Mpanyimfo',      roman:'m-pa-nyim-fo',   english:'Elders / Respected leaders', category:'Oral Literature', notes:'The elders hold and transmit oral history.' },
      { fante:'Tweneboa',       roman:'twen-eh-boa',    english:'The sacred talking drum',  category:'Oral Literature', notes:'The royal drum that "speaks" — encodes messages in tonal rhythm.' },
    ],

    proverbs: [
      {
        fante:   'Nyame bɔɔ po, ɔma nwura nya enam.',
        roman:   'nyaa-meh boh poh, oh-ma n-woo-ra nya eh-nam',
        english: 'God created the sea so the fisherman could catch fish.',
        meaning: 'Everything in creation has a purpose; trust in divine provision.',
        category:'Spiritual',
      },
      {
        fante:   'Obi nkyerɛ onipa Nyame.',
        roman:   'o-bee n-cheh-reh o-nee-pa nyaa-meh',
        english: 'No one shows a person God.',
        meaning: 'The divine is known within — it cannot be given by another.',
        category:'Spiritual',
      },
      {
        fante:   'Ewim a ɛtɔ po mu, na nwura no gyae nante.',
        roman:   'eh-wim a eh-toh poh mu, na n-woo-ra no jeh nan-teh',
        english: 'When the net falls into the sea, the fisherman stops walking.',
        meaning: 'When a crisis strikes, you must stop and fully address it.',
        category:'Crisis',
      },
      {
        fante:   'Asafo a ɔbɔ ne ho, na eman no dzi anigyae.',
        roman:   'a-sa-fo a oh-boh neh ho, na eh-man no dzee a-nee-jeh',
        english: 'When the warrior company is united, the nation rejoices.',
        meaning: 'Unity among defenders brings peace and prosperity to all.',
        category:'Unity',
      },
      {
        fante:   'Nana a ɔkɔɔ no, ɔsan baa, na ɔkyerɛɛ asefo akwan.',
        roman:   'na-na a oh-ko-oh no, oh-san baa, na oh-cheh-reh-eh a-seh-fo a-kwan',
        english: 'The ancestor who went and returned showed the descendants the way.',
        meaning: 'Those who went before us illuminate the path for those who follow — Sankofa in action.',
        category:'Heritage',
      },
    ],

    ceremonialPhrases: [
      { fante:'Nananom, mo mma mo nkwa yɛ!', roman:'na-na-nom, mo m-ma mo n-kwa yeh', english:'Ancestors, may your lives be good!', context:'Libation prayer', notes:'Said when pouring libation to the ancestors.' },
      { fante:'Bosompo, boa yɛn!',           roman:'bo-som-poh, boa yehn',             english:'Sea god, help us!',               context:'Fishing prayer', notes:'Said before a sea voyage by Fante fishermen.' },
      { fante:'Ayɛkoo! Omanfo nyinaa!',      roman:'a-yeh-koo, oh-man-fo nyee-naa',    english:'Well done! To all the people!',  context:'Community celebration' },
      { fante:'Fante kotoko, wukum apem, apem beba!', roman:'fan-teh ko-to-ko, wu-kum a-pem, a-pem beh-ba', english:'Fante porcupine — kill a thousand, a thousand will come!', context:'War cry / Pride', notes:'The Fante are symbolised by the porcupine — each quill represents a warrior.' },
    ],

    quiz: [
      { fante:'Bosompo',        choices:['Forest spirit','Sea god','Ancestor','Sun deity'],     correct:1, cultural:'Fante fishermen honour Bosompo before voyages — the sea is sacred.' },
      { fante:'Mfantsieman',    choices:['A village','A market','Fante Nation/Confederation','A royal family'], correct:2, cultural:'The Fante Confederation of 1868 was a remarkable attempt at African self-governance.' },
      { fante:'Mankessim',      choices:['A beach','Spiritual Fante capital','A castle','A market'], correct:1, cultural:'Mankessim is where the Fante confederation was proclaimed — deeply sacred ground.' },
      { fante:'Nananom',        choices:['Children','Elders only','The ancestors','Chiefs'], correct:2, cultural:'Ancestral veneration is not worship — it is respect and connection to origins.' },
      { fante:'Okomfo',         choices:['Fisherman','Traditional priest','Elder','Trader'], correct:1, cultural:'The Okomfo mediates between the spirit world and community — a revered role.' },
      { fante:'Asafo Nnwom',    choices:['Fishing songs','Love songs','Warrior company songs','Lullabies'], correct:2, cultural:'Asafo songs encode the history, battles, and identity of each company.' },
      { fante:'Tweneboa',       choices:['A type of fish','Sacred talking drum','Warrior shield','Royal robe'], correct:1, cultural:'The talking drum communicates in tonal patterns — a form of Akan "Morse code".' },
      { fante:'Denkyem',        choices:['Elephant symbol','Crocodile/adaptability','Eagle','Fish'], correct:1, cultural:'The crocodile Adinkra represents adaptability — living between worlds.' },
    ],
  },
}

export default FANTE
