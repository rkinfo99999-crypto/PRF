import { TreeSpecies, Nursery, GeoTaggedTree, TreeComplaint } from '../types';

export const TREE_SPECIES: TreeSpecies[] = [
  {
    id: 'neem',
    nameHi: 'नीम',
    nameEn: 'Neem',
    scientificName: 'Azadirachta indica',
    category: 'medicinal',
    descriptionHi: 'प्राकृतिक वायु शोधक, उच्च औषधीय गुण, कीट प्रतिरोधी तथा अत्यंत सहनशील वृक्ष।',
    descriptionEn: 'Natural air purifier, strong antibacterial and insecticidal properties, thrives in tough soils.',
    oxygenRating: 5,
    waterNeedHi: 'अल्प से मध्यम',
    waterNeedEn: 'Low to Moderate',
    lifespanYears: 150,
    bestSeason: 'जुलाई - सितंबर (मानसून)',
    recommendedPlaces: 'सड़क किनारे, आवासीय परिसर, विद्यालय मैदान',
    image: '🌿'
  },
  {
    id: 'peepal',
    nameHi: 'पीपल',
    nameEn: 'Peepal (Sacred Fig)',
    scientificName: 'Ficus religiosa',
    category: 'shade',
    descriptionHi: '२४ घंटे प्रचुर ऑक्सीजन प्रदाता, अत्यधिक छायादार, भारतीय संस्कृति में पूजनीय।',
    descriptionEn: 'Continuous oxygen release, broad canopy shade, highly resilient sacred tree.',
    oxygenRating: 5,
    waterNeedHi: 'मध्यम',
    waterNeedEn: 'Moderate',
    lifespanYears: 300,
    bestSeason: 'मानसून एवं वसंत',
    recommendedPlaces: 'खुले पार्क, सामुदायिक केंद्र, ग्राम चौपाल',
    image: '🍃'
  },
  {
    id: 'bargad',
    nameHi: 'बरगद (वटवृक्ष)',
    nameEn: 'Banyan Tree',
    scientificName: 'Ficus benghalensis',
    category: 'shade',
    descriptionHi: 'राष्ट्रीय वृक्ष, विशाल छत्रछाया, सैकड़ों पक्षियों व जीवों का प्राकृतिक आवास।',
    descriptionEn: 'National tree of India, massive canopy, vital keystone species for local biodiversity.',
    oxygenRating: 5,
    waterNeedHi: 'मध्यम',
    waterNeedEn: 'Moderate',
    lifespanYears: 500,
    bestSeason: 'वर्षा ऋतु',
    recommendedPlaces: 'विस्तृत सार्वजनिक उद्यान, ग्राम समाज भूमि',
    image: '🌳'
  },
  {
    id: 'amla',
    nameHi: 'आंवला',
    nameEn: 'Indian Gooseberry',
    scientificName: 'Phyllanthus emblica',
    category: 'fruit',
    descriptionHi: 'विटामिन सी का प्रचुर स्रोत, स्वास्थ्यवर्धक फल एवं मध्यम आकार का सुंदर वृक्ष।',
    descriptionEn: 'Rich in Vitamin C and antioxidants, valuable fruit tree suitable for homesteads.',
    oxygenRating: 4,
    waterNeedHi: 'मध्यम',
    waterNeedEn: 'Moderate',
    lifespanYears: 70,
    bestSeason: 'जुलाई - अगस्त',
    recommendedPlaces: 'घरेलू वाटिका, कृषि वानिकी, संस्थान परिसर',
    image: '🍈'
  },
  {
    id: 'jamun',
    nameHi: 'जामुन',
    nameEn: 'Black Plum',
    scientificName: 'Syzygium cumini',
    category: 'fruit',
    descriptionHi: 'मधुमेह नियंत्रण में लाभकारी फल, सघन छाया और भूजल स्तर को स्थिर रखने में सहायक।',
    descriptionEn: 'Nutritious purple fruit, dense foliage, helps in soil stabilization and water retention.',
    oxygenRating: 4,
    waterNeedHi: 'मध्यम से अधिक',
    waterNeedEn: 'Moderate to High',
    lifespanYears: 100,
    bestSeason: 'मानसून काल',
    recommendedPlaces: 'बाग, नहर की पटरियां, विद्यालय परिसर',
    image: '🫐'
  },
  {
    id: 'bael',
    nameHi: 'बेल पत्र (बिल्व)',
    nameEn: 'Bael (Stone Apple)',
    scientificName: 'Aegle marmelos',
    category: 'medicinal',
    descriptionHi: 'पाचन तंत्र के लिए अमृततुल्य फल, पवित्र त्रिदल पत्तियां, ग्रीष्म में शीतल पेय।',
    descriptionEn: 'Cooling medicinal fruit, culturally revered leaves, exceptionally drought-hardy.',
    oxygenRating: 4,
    waterNeedHi: 'अल्प',
    waterNeedEn: 'Low (Drought-hardy)',
    lifespanYears: 60,
    bestSeason: 'वर्षा ऋतु',
    recommendedPlaces: 'आवासीय क्षेत्र, मंदिर परिसर, शुष्क क्षेत्र',
    image: '🍈'
  },
  {
    id: 'shisham',
    nameHi: 'शीशम (टाहली)',
    nameEn: 'Indian Rosewood',
    scientificName: 'Dalbergia sissoo',
    category: 'timber',
    descriptionHi: 'गुणवत्तापूर्ण इमारती लकड़ी, नाइट्रोजन स्थिरीकरण द्वारा मिट्टी को उपजाऊ बनाता है।',
    descriptionEn: 'Premium hardwood species, fixes atmospheric nitrogen, enriches surrounding topsoil.',
    oxygenRating: 4,
    waterNeedHi: 'मध्यम',
    waterNeedEn: 'Moderate',
    lifespanYears: 100,
    bestSeason: 'जुलाई - सितंबर',
    recommendedPlaces: 'खेतों की मेड़, वन भूमि, राजमार्ग',
    image: '🌱'
  },
  {
    id: 'gulmohar',
    nameHi: 'गुलमोहर',
    nameEn: 'Flamboyant',
    scientificName: 'Delonix regia',
    category: 'shade',
    descriptionHi: 'आकर्षक सिंदूरी-लाल फूलों से लदा छत्रक, शहरी क्षेत्रों में तीव्र हरियाली एवं सौंदर्य।',
    descriptionEn: 'Stunning bright red-orange blooms, fast-growing ornamental umbrella canopy.',
    oxygenRating: 4,
    waterNeedHi: 'मध्यम',
    waterNeedEn: 'Moderate',
    lifespanYears: 50,
    bestSeason: 'वसंत एवं वर्षा ऋतु',
    recommendedPlaces: 'सड़क किनारे, पार्क, कॉलोनी मार्ग',
    image: '🌺'
  }
];

export const GOVT_NURSERIES: Nursery[] = [
  {
    id: 'nurs-1',
    name: 'केंद्रीय वन पौधशाला, कुकरैल',
    district: 'लखनऊ (Lucknow)',
    address: 'कुकरैल पिकनिक स्पॉट रोड, खुर्रमनगर, लखनऊ - 226015',
    contactPerson: 'श्री राजेश कुमार (वन दरोगा)',
    phone: '+91 94500 12841',
    timings: 'प्रातः ०८:०० से सायं ०५:०० (सोमवार - शनिवार)',
    availableSaplings: 48500,
    popularSpecies: ['नीम', 'पीपल', 'आंवला', 'जामुन', 'शीशम']
  },
  {
    id: 'nurs-2',
    name: 'सारनाथ वन पौध वितरण केंद्र',
    district: 'वाराणसी (Varanasi)',
    address: 'सारनाथ डियर पार्क निकट, वाराणसी - 221007',
    contactPerson: 'श्रीमती अनीता वर्मा (प्रभारी अधिकारी)',
    phone: '+91 94511 88320',
    timings: 'प्रातः ०९:०० से सायं ०४:३० (रविवार अवकाश)',
    availableSaplings: 32400,
    popularSpecies: ['बरगद', 'बेल पत्र', 'गुलमोहर', 'नीम', 'कचनार']
  },
  {
    id: 'nurs-3',
    name: 'कंपनी बाग पौधशाला, सिविल लाइंस',
    district: 'प्रयागराज (Prayagraj)',
    address: 'चंद्रशेखर आज़ाद पार्क गेट नं ३, प्रयागराज - 211002',
    contactPerson: 'श्री वीरेंद्र प्रताप (रेंजर)',
    phone: '+91 94150 99423',
    timings: 'प्रातः ०८:३० से सायं ०५:००',
    availableSaplings: 27800,
    popularSpecies: ['नीम', 'जामुन', 'आंवला', 'सहजन', 'शीशम']
  },
  {
    id: 'nurs-4',
    name: 'मोतीझील वन प्रभाग पौधशाला',
    district: 'कानपुर (Kanpur Nagar)',
    address: 'मोतीझील कंपाउंड, स्वरूप नगर, कानपुर - 208002',
    contactPerson: 'श्री शैलेंद्र नाथ (सहायक वन संरक्षक)',
    phone: '+91 94520 44102',
    timings: 'प्रातः ०८:०० से सायं ०४:००',
    availableSaplings: 39100,
    popularSpecies: ['पीपल', 'गुलमोहर', 'नीम', 'अमलतास', 'बरगद']
  },
  {
    id: 'nurs-5',
    name: 'बाबा राघव दास वन पौध केंद्र',
    district: 'गोरखपुर (Gorakhpur)',
    address: 'रामगढ़ ताल रोड, तारामंडल के समीप, गोरखपुर - 273016',
    contactPerson: 'श्री मनोज त्रिपाठी (वन क्षेत्राधिकारी)',
    phone: '+91 94153 77219',
    timings: 'प्रातः ०९:०० से सायं ०५:००',
    availableSaplings: 44200,
    popularSpecies: ['जामुन', 'शीशम', 'नीम', 'बेल', 'महुआ']
  },
  {
    id: 'nurs-6',
    name: 'सूरजकुंड सामाजिक वानिकी पौधशाला',
    district: 'मेरठ (Meerut)',
    address: 'किला रोड, सूरजकुंड पार्क के पास, मेरठ - 250001',
    contactPerson: 'श्री धर्मपाल सिंह (प्रभारी)',
    phone: '+91 94122 35012',
    timings: 'प्रातः ०८:३० से सायं ०५:००',
    availableSaplings: 29800,
    popularSpecies: ['नीम', 'शीशम', 'पीपल', 'गुलमोहर']
  }
];

export const INITIAL_GEO_TREES: GeoTaggedTree[] = [
  {
    id: 'gt-101',
    treeNumber: 'UP-LKO-2026-0814',
    speciesName: 'पीपल (Ficus religiosa)',
    plantedBy: 'अखिलेश कुमार बाजपेयी',
    guardianPhone: '+91 98390 XXXXX',
    district: 'लखनऊ',
    locationName: 'गोमती नगर विस्तार, सेक्टर-४ पार्क',
    latitude: 26.8467,
    longitude: 80.9462,
    datePlanted: '12 मार्च 2026',
    healthStatus: 'उत्कृष्ट (Healthy)',
    wateringFrequency: 'सप्ताह में दो बार',
    hasTreeGuard: true,
    notes: 'सामुदायिक सहयोग से ट्री-गार्ड लगाया गया। पौधा निरंतर वृद्धि कर रहा है।'
  },
  {
    id: 'gt-102',
    treeNumber: 'UP-VNS-2026-0422',
    speciesName: 'नीम (Azadirachta indica)',
    plantedBy: 'श्रीमती वंदना पांडेय',
    guardianPhone: '+91 94501 XXXXX',
    district: 'वाराणसी',
    locationName: 'अस्सी घाट संपर्क मार्ग, रविदास पार्क',
    latitude: 25.2820,
    longitude: 82.9998,
    datePlanted: '24 जनवरी 2026',
    healthStatus: 'उत्कृष्ट (Healthy)',
    wateringFrequency: 'प्रतिदिन प्रातः',
    hasTreeGuard: true,
    notes: 'अभिभावक द्वारा नियमित जैविक खाद दी जा रही है।'
  },
  {
    id: 'gt-103',
    treeNumber: 'UP-PRG-2026-1190',
    speciesName: 'बरगद (Ficus benghalensis)',
    plantedBy: 'युवा पर्यावरण मित्र दल',
    guardianPhone: '+91 94152 XXXXX',
    district: 'प्रयागराज',
    locationName: 'झूंसी गंगा तट, त्रिवेणी मार्ग',
    latitude: 25.4358,
    longitude: 81.8463,
    datePlanted: '05 फरवरी 2026',
    healthStatus: 'सामान्य (Moderate)',
    wateringFrequency: 'सप्ताह में एक बार',
    hasTreeGuard: true,
    notes: 'बाढ़ सुरक्षा हेतु ऊंची मेड़ पर रोपण किया गया।'
  },
  {
    id: 'gt-104',
    treeNumber: 'UP-KNP-2026-0562',
    speciesName: 'आंवला (Phyllanthus emblica)',
    plantedBy: 'डॉ. रमेश चंद्र गुप्त',
    guardianPhone: '+91 93361 XXXXX',
    district: 'कानपुर नगर',
    locationName: 'कल्याणपुर प्राथमिक विद्यालय परिसर',
    latitude: 26.4913,
    longitude: 80.2584,
    datePlanted: '18 फरवरी 2026',
    healthStatus: 'उत्कृष्ट (Healthy)',
    wateringFrequency: 'नियमित',
    hasTreeGuard: true,
    notes: 'छात्रों द्वारा पर्यावरण संकल्प दिवस पर गोद लिया गया।'
  }
];

export const INITIAL_COMPLAINTS: TreeComplaint[] = [
  {
    id: 'cmp-901',
    ticketNumber: 'PR-COMP-2026-00481',
    complainantName: 'सुरेश कुमार सिंह',
    phone: '+91 94500 78219',
    district: 'लखनऊ',
    landmark: 'हजरतगंज पार्क रोड, नवल किशोर रोड क्रॉसिंग',
    category: 'अवैध पेड़ कटाई',
    urgency: 'अति-आवश्यक (Critical)',
    description: 'निजी निर्माणकर्ता द्वारा पुराने छायादार जामुन के पेड़ की बिना अनुमति अवैध छंटाई व कटाई का प्रयास।',
    reportedDate: '22 अक्टूबर 2026',
    status: 'कार्य प्रगति पर',
    assignedOfficer: 'श्री विनीत सक्सेना (वन रेंजर)',
    officerContact: '+91 94500 11902'
  },
  {
    id: 'cmp-902',
    ticketNumber: 'PR-COMP-2026-00469',
    complainantName: 'अमरीश चतुर्वेदी',
    phone: '+91 98381 22910',
    district: 'वाराणसी',
    landmark: 'सिगरा - रथयात्रा मार्ग, बैंक तिराहा',
    category: 'तार / खंभा अवरोध',
    urgency: 'मध्यम (Moderate)',
    description: 'विद्युत लाइन पर भारी डालियां झुक गई हैं, आंधी में स्पार्किंग का खतरा। वैज्ञानिक प्रूनिंग आवश्यक।',
    reportedDate: '20 अक्टूबर 2026',
    status: 'निरीक्षण हेतु प्रेषित',
    assignedOfficer: 'श्री अमित शुक्ला (उप वन संरक्षक दल)',
    officerContact: '+91 94511 88440'
  },
  {
    id: 'cmp-903',
    ticketNumber: 'PR-COMP-2026-00455',
    complainantName: 'सुशील कुमार यादव',
    phone: '+91 94150 67102',
    district: 'प्रयागराज',
    landmark: 'दारागंज, प्राचीन घाट मार्ग',
    category: 'सूखा / रोगग्रस्त वृक्ष',
    urgency: 'सामान्य (Routine)',
    description: 'पुराना नीम का पेड़ दीमक के प्रकोप से खोखला हो रहा है। कीटनाशक उपचार व पुनरुद्धार की आवश्यकता।',
    reportedDate: '15 अक्टूबर 2026',
    status: 'निस्तारित',
    assignedOfficer: 'डॉ. पी. के. श्रीवास्तव (पादप रोग विशेषज्ञ)',
    officerContact: '+91 94150 99423'
  }
];

export const PORTAL_STATS = {
  totalTreesPlanted: 1482920,
  registeredGuardians: 84350,
  activeNurseries: 1240,
  survivalRate: '92.4%',
  co2AbsorbedTons: 37450,
  districtsCovered: 75
};

export const CARE_TIPS = [
  {
    monthHi: 'जुलाई - अगस्त (मानसून रोपण)',
    monthEn: 'July - August (Monsoon Planting)',
    tipHi: 'पौधरोपण हेतु सर्वोत्तम समय। पौधे के तने के चारों ओर मिट्टी चढ़ाएं ताकि जल भराव न हो।',
    tipEn: 'Optimal planting window. Mound soil around root collars to prevent root rot from water-logging.'
  },
  {
    monthHi: 'सितंबर - अक्टूबर (वृद्धि व खाद)',
    monthEn: 'September - October (Growth & Feeding)',
    tipHi: 'वर्षा समाप्त होने पर जैविक वर्मीकम्पोस्ट दें। ट्री गार्ड की मजबूती की पुनः जांच करें।',
    tipEn: 'Apply organic vermicompost after rains conclude. Inspect integrity of perimeter tree guards.'
  },
  {
    monthHi: 'नवंबर - जनवरी (शीतकालीन सुरक्षा)',
    monthEn: 'November - January (Winter Protection)',
    tipHi: 'पाले (Frost) से बचाव हेतु छोटे पौधों पर पुआल की मल्चिंग करें तथा दोपहर में धूप सुनिश्चित करें।',
    tipEn: 'Mulch root base with dry straw against frost. Water during morning hours.'
  },
  {
    monthHi: 'फरवरी - अप्रैल (वसंत नवपल्लव)',
    monthEn: 'February - April (Spring Sprouting)',
    tipHi: 'सूखी डालियों की हल्की छंटाई करें। नई कलियों के आगमन पर नीम तेल का छिड़काव करें।',
    tipEn: 'Prune dead wood and spray dilute neem oil to deter spring aphid outbreaks.'
  },
  {
    monthHi: 'मई - जून (ग्रीष्मकालीन जल संरक्षण)',
    monthEn: 'May - June (Summer Water Conservation)',
    tipHi: 'मटका ड्रिप सिंचाई (घड़े द्वारा बूंद-बूंद सिंचाई) अपनाएं। सप्ताह में ३ बार संध्या समय जल दें।',
    tipEn: 'Adopt earthen pot drip irrigation method. Water thoroughly during twilight hours.'
  }
];
