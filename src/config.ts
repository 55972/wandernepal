// ============================================
// WANDERNEPAL.COM.NP - Complete Configuration
// ============================================

// Site-wide configuration
export interface SiteConfig {
  language: string;
  siteName: string;
  siteDescription: string;
  siteTagline: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteName: "WanderNepal",
  siteDescription: "Discover Nepal - A Complete Tourism Guide to the Roof of the World. Explore mountains, temples, wildlife, and ancient culture.",
  siteTagline: "Where the Gods Reside, the Mountains Touch the Sky, and Every Path Tells a Story"
};

// ============================================
// HERO SECTION
// ============================================
export interface HeroConfig {
  backgroundImage: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-everest.jpg",
  backgroundAlt: "Mount Everest and Himalayan range at sunrise",
  title: "Discover Nepal",
  subtitle: "THE ROOF OF THE WORLD AWAITS"
};

// ============================================
// NARRATIVE TEXT SECTION
// ============================================
export interface NarrativeTextConfig {
  line1: string;
  line2: string;
  line3: string;
}

export const narrativeTextConfig: NarrativeTextConfig = {
  line1: "A land where eight of the world's ten highest peaks stand sentinel over ancient civilizations.",
  line2: "From the steamy jungles of the Terai to the cloud-piercing Himalayas, Nepal unfolds like a living storybook.",
  line3: "WELCOME TO THE FEDERAL DEMOCRATIC REPUBLIC OF NEPAL — WHERE EVERY JOURNEY BECOMES A PILGRIMAGE"
};

// ============================================
// DESTINATION/PLACE DATA
// ============================================
export interface Place {
  id: string;
  name: string;
  category: 'mountain' | 'temple' | 'city' | 'wildlife' | 'lake' | 'trekking';
  shortDescription: string;
  fullDescription: string;
  religiousImportance?: string;
  culturalImportance?: string;
  localFoods: string[];
  thingsToDo: string[];
  bestTimeToVisit: string;
  tourPlan: {
    duration: string;
    itinerary: { day: number; title: string; description: string }[];
  };
  estimatedExpenses: {
    budget: string;
    midRange: string;
    luxury: string;
  };
  travelGuide: string;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  reviews: Review[];
  quickFacts: Record<string, string>;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const places: Place[] = [
  {
    id: "everest-base-camp",
    name: "Everest Base Camp",
    category: "trekking",
    shortDescription: "The ultimate pilgrimage for adventure lovers — a trek through spectacular Himalayan scenery to the foot of the world's highest peak.",
    fullDescription: "Everest Base Camp is the ultimate pilgrimage for adventure lovers — a trek that winds through some of the most spectacular Himalayan scenery on the planet. The journey begins in Lukla, where a heart-pounding landing on one of the world's most dangerous runways sets the tone. From there, the trail climbs through rhododendron forests, crosses suspension bridges festooned with prayer flags, and passes through the fabled Sherpa village of Namche Bazaar. The path eventually reaches Tengboche Monastery, perched at 3,867m with dramatic Ama Dablam looming behind it, before ascending through rocky moraines to Gorakshep and the Base Camp at 5,364m.",
    religiousImportance: "The Khumbu region is sacred to the Sherpa people, who are predominantly Tibetan Buddhists. Tengboche Monastery is the most important gompa in the region, hosting the annual Mani Rimdu festival. The mountains themselves are considered abodes of deities.",
    culturalImportance: "The trek offers intimate exposure to Sherpa culture — renowned for their mountaineering skills and warm hospitality. You'll experience traditional tea houses, Buddhist monasteries, prayer wheels, and mani stones engraved with sacred texts.",
    localFoods: ["Dal Bhat (lentils and rice)", "Sherpa Stew (Thukpa)", "Momo (dumplings)", "Tsampa (roasted barley flour)", "Butter Tea", "Yak Cheese"],
    thingsToDo: ["Trek to Kala Patthar (5,545m) for sunrise views", "Visit Tengboche Monastery", "Explore Namche Bazaar", "Photograph the Khumbu Icefall", "Experience Sherpa culture in Khumjung village", "Visit the Everest View Hotel"],
    bestTimeToVisit: "March-May and September-November. Spring offers blooming rhododendrons; autumn provides clearest mountain views.",
    tourPlan: {
      duration: "12-16 days",
      itinerary: [
        { day: 1, title: "Arrival in Kathmandu", description: "Fly to Lukla (2,840m) and trek to Phakding (2,610m)" },
        { day: 2, title: "Namche Bazaar", description: "Trek to Namche Bazaar (3,440m) - the gateway to Everest" },
        { day: 3, title: "Acclimatization Day", description: "Rest and explore Namche, visit Everest View Hotel" },
        { day: 4, title: "Tengboche", description: "Trek to Tengboche (3,867m) with monastery visit" },
        { day: 5, title: "Dingboche", description: "Trek to Dingboche (4,410m)" },
        { day: 6, title: "Acclimatization", description: "Hike to Nagarjun Hill for acclimatization" },
        { day: 7, title: "Lobuche", description: "Trek to Lobuche (4,940m)" },
        { day: 8, title: "Everest Base Camp", description: "Trek to EBC (5,364m) via Gorakshep, return to Gorakshep" },
        { day: 9, title: "Kala Patthar", description: "Sunrise climb to Kala Patthar (5,545m), descend to Pheriche" },
        { day: 10, title: "Namche Bazaar", description: "Descend to Namche Bazaar" },
        { day: 11, title: "Lukla", description: "Trek back to Lukla" },
        { day: 12, title: "Kathmandu", description: "Fly back to Kathmandu" }
      ]
    },
    estimatedExpenses: {
      budget: "$800-1,200 USD",
      midRange: "$1,500-2,500 USD",
      luxury: "$3,000-5,000 USD"
    },
    travelGuide: "Proper acclimatization is crucial — ascend slowly and stay hydrated. Pack layers for cold nights. Hire a licensed guide and porter. Obtain TIMS card and Sagarmatha National Park permit. Travel insurance covering high-altitude trekking is mandatory.",
    images: ["/everest-basecamp.jpg", "/hero-everest.jpg"],
    location: {
      latitude: 28.0024,
      longitude: 86.8528,
      address: "Sagarmatha National Park, Solukhumbu District, Nepal"
    },
    reviews: [
      { id: "1", userName: "Sarah Johnson", rating: 5, comment: "Life-changing experience! The Sherpa guides were incredible and the views were beyond words.", date: "2024-10-15" },
      { id: "2", userName: "Michael Chen", rating: 5, comment: "Challenging but absolutely worth it. Standing at Base Camp watching the Khumbu Icefall was surreal.", date: "2024-09-20" }
    ],
    quickFacts: {
      "Distance": "130 km round trip from Lukla",
      "Duration": "12-16 days",
      "Best Season": "Mar-May & Sep-Nov",
      "Altitude": "5,364m (Base Camp); 5,545m (Kala Patthar)",
      "Permit Required": "TIMS Card + Sagarmatha National Park Entry",
      "Starting Point": "Lukla (fly from Kathmandu)"
    }
  },
  {
    id: "pokhara",
    name: "Pokhara — The City of Lakes",
    category: "city",
    shortDescription: "Nepal's ultimate leisure destination — a laid-back lakeside city that serves as both a world-class adventure hub and a serene retreat.",
    fullDescription: "Pokhara is Nepal's ultimate leisure destination — a laid-back lakeside city that serves as both a world-class adventure hub and a serene retreat. Nestled beside the glittering Phewa Lake, with the dramatic silhouette of the Annapurna range and the iconic fish-tail peak of Machhapuchhre reflected in its waters, Pokhara delivers postcard-perfect scenery at every turn. The city offers everything from white-water rafting on the Seti and Trisuli rivers to ultralight aircraft flights over the Himalayas, zip-lining, paragliding, and peaceful boat rides across Phewa Lake to the island temple of Tal Barahi.",
    religiousImportance: "The Tal Barahi Temple on Phewa Lake is an important Hindu shrine dedicated to Goddess Durga. The World Peace Pagoda (Shanti Stupa) is a significant Buddhist monument built by Japanese Buddhists.",
    culturalImportance: "Pokhara serves as the cultural gateway to the Annapurna region, blending Gurung and Magar traditions with modern tourism. The Old Bazaar preserves traditional Newari architecture.",
    localFoods: ["Fresh Lake Fish", "Dal Bhat", "Thakali Cuisine", "Sel Roti", "Yomari", "Local Craft Beer"],
    thingsToDo: ["Paragliding from Sarangkot", "Boating on Phewa Lake", "Visit World Peace Pagoda", "Explore Devi's Falls and Gupteshwor Cave", "Sunrise viewing from Sarangkot", "White-water rafting", "Ultralight flight over mountains", "Visit International Mountain Museum"],
    bestTimeToVisit: "October-November for clear Himalayan views. March-May for pleasant weather and blooming flowers.",
    tourPlan: {
      duration: "3-5 days",
      itinerary: [
        { day: 1, title: "Lakeside Exploration", description: "Arrive and explore Lakeside area, evening boat ride on Phewa Lake" },
        { day: 2, title: "Sarangkot Sunrise", description: "Early morning drive to Sarangkot for sunrise, paragliding experience" },
        { day: 3, title: "Sightseeing", description: "Visit Devi's Falls, Gupteshwor Cave, and World Peace Pagoda" },
        { day: 4, title: "Adventure Day", description: "White-water rafting or ultralight flight, visit Mountain Museum" },
        { day: 5, title: "Departure", description: "Relax at Lakeside cafes, shopping for souvenirs" }
      ]
    },
    estimatedExpenses: {
      budget: "$30-50 USD/day",
      midRange: "$80-150 USD/day",
      luxury: "$200-400 USD/day"
    },
    travelGuide: "Pokhara is easily accessible by 25-minute flight or 6-7 hour tourist bus from Kathmandu. Lakeside (Baidam) is the main tourist area with hotels, restaurants, and shops. Rent a scooter to explore independently. Book adventure activities through registered companies.",
    images: ["/pokhara-lake.jpg", "/annapurna-circuit.jpg"],
    location: {
      latitude: 28.2096,
      longitude: 83.9856,
      address: "Gandaki Province, Nepal"
    },
    reviews: [
      { id: "1", userName: "Emma Wilson", rating: 5, comment: "The most beautiful city I've ever visited! Paragliding with the Annapurna range as backdrop was magical.", date: "2024-11-10" },
      { id: "2", userName: "David Park", rating: 5, comment: "Perfect blend of adventure and relaxation. The sunrise from Sarangkot is unforgettable.", date: "2024-10-05" }
    ],
    quickFacts: {
      "Distance from Kathmandu": "200 km (6-7 hrs by road; 25 min by air)",
      "Phewa Lake Size": "4.4 km² (2nd largest lake in Nepal)",
      "Popular Activities": "Paragliding, Rafting, Trekking, Boating",
      "Nearby Treks": "Annapurna Circuit, Poon Hill, ABC Trek",
      "Best Season": "Oct-Nov (clear Himalayan views)",
      "Airport": "Pokhara International Airport (PKR)"
    }
  },
  {
    id: "pashupatinath",
    name: "Pashupatinath Temple",
    category: "temple",
    shortDescription: "Nepal's most sacred Hindu shrine and one of the most important Shiva temples in the world, situated on the banks of the holy Bagmati River.",
    fullDescription: "Pashupatinath Temple is Nepal's most sacred Hindu shrine and one of the most important Shiva temples in the entire world. Situated on the banks of the holy Bagmati River in Kathmandu, the temple complex dates back to at least the 5th century CE, though legend claims it is far older. Its golden roof and silver door gleam under the Kathmandu sun, drawing pilgrims from across South Asia who come to worship Lord Shiva in his manifestation as Pashupati — the Lord of Animals and guardian of Nepal. The complex encompasses 492 individual temples, shrines, and religious monuments spread across a vast forested area.",
    religiousImportance: "Pashupatinath is one of the four most important religious sites in Asia for Shiva devotees. The temple is the seat of Nepal's national deity, Lord Pashupatinath. It is believed that those who die here are reborn as humans regardless of their karma. The cremation ghats along the Bagmati River are considered sacred, and having one's ashes scattered here is believed to ensure salvation.",
    culturalImportance: "The temple complex is a living museum of Hindu culture and traditions. The evening Aarti ceremony is a spectacular display of devotion. The sadhus (holy men) with their distinctive appearance and rituals offer a glimpse into ancient ascetic traditions.",
    localFoods: ["Prasad (temple offerings)", "Vegetarian Thali", "Lassi", "Sweets from nearby shops"],
    thingsToDo: ["Witness evening Aarti ceremony", "Observe cremation rituals on the ghats", "Meet colorful sadhus", "Explore the surrounding temples", "Visit the deer park", "Photograph the golden temple architecture"],
    bestTimeToVisit: "Maha Shivaratri (February/March) for the massive festival. Early morning or dusk for peaceful atmosphere.",
    tourPlan: {
      duration: "Half day",
      itinerary: [
        { day: 1, title: "Temple Visit", description: "Morning exploration of the main temple complex" },
        { day: 1, title: "Evening Aarti", description: "Return for the spectacular evening Aarti ceremony at sunset" }
      ]
    },
    estimatedExpenses: {
      budget: "$10-20 USD",
      midRange: "$30-50 USD",
      luxury: "$80-150 USD (with guide)"
    },
    travelGuide: "The main inner sanctum is restricted to Hindus only, but the surrounding areas are open to all. Dress modestly — no shorts or revealing clothing. Be respectful during cremation ceremonies. Photography is restricted in certain areas. Foreigners must pay an entry fee of NPR 1,000.",
    images: ["/pashupatinath-temple.jpg"],
    location: {
      latitude: 27.7104,
      longitude: 85.3488,
      address: "Chabahil, Kathmandu (5 km from city centre)"
    },
    reviews: [
      { id: "1", userName: "Priya Sharma", rating: 5, comment: "Profoundly spiritual experience. The evening Aarti was mesmerizing.", date: "2024-03-15" },
      { id: "2", userName: "John Miller", rating: 4, comment: "A powerful place that offers deep insight into Hindu culture and philosophy.", date: "2024-02-20" }
    ],
    quickFacts: {
      "Location": "Chabahil, Kathmandu (5 km from city centre)",
      "Entry Fee": "Free for Hindus; NPR 1,000 for foreigners",
      "Opening Hours": "4:00 AM – 9:00 PM daily",
      "UNESCO Status": "Part of Kathmandu Valley WHS (1979)",
      "Best Time to Visit": "Maha Shivaratri (Feb/Mar) — massive festival",
      "Dress Code": "Modest attire required; no shorts"
    }
  },
  {
    id: "boudhanath",
    name: "Boudhanath Stupa",
    category: "temple",
    shortDescription: "One of the largest Buddhist stupas in the world and the spiritual heart of Nepal's Tibetan Buddhist community.",
    fullDescription: "Boudhanath Stupa is one of the largest Buddhist stupas in the world and the spiritual heart of Nepal's Tibetan Buddhist community. Rising dramatically from the city of Kathmandu, its massive whitewashed dome is crowned by a distinctive harmika bearing the all-seeing eyes of the Buddha, gazing in all four cardinal directions. Above the eyes, 13 gilded rings represent the 13 steps to enlightenment, topped by a gleaming golden pinnacle. The stupa was built in the 14th century CE and sits at the centre of a circular plaza around which an entire neighbourhood of Tibetan Buddhist monasteries, shops, and residences has grown.",
    religiousImportance: "Boudhanath is one of the holiest Buddhist sites in Nepal and a major center of Tibetan Buddhism. The stupa is believed to contain relics of the Buddha Kashyapa. It is a major pilgrimage site for Buddhists from around the world, especially Tibetan refugees.",
    culturalImportance: "The surrounding area is known as 'Little Tibet' with numerous monasteries, thangka painting schools, and shops selling Tibetan crafts. Walking the kora (circumambulation) around the stupa is a deeply moving spiritual practice.",
    localFoods: ["Tibetan Momo", "Thukpa (noodle soup)", "Butter Tea", "Tibetan Bread", "Thenthuk"],
    thingsToDo: ["Walk the kora (circumambulation)", "Spin prayer wheels", "Visit Tibetan monasteries", "Shop for thangka paintings", "Enjoy rooftop cafe views", "Participate in evening prayers"],
    bestTimeToVisit: "Dawn kora (5-7 AM) or dusk lamp-lighting for the most atmospheric experience.",
    tourPlan: {
      duration: "2-3 hours",
      itinerary: [
        { day: 1, title: "Stupa Visit", description: "Walk the kora, spin prayer wheels, explore the plaza" },
        { day: 1, title: "Monastery Tour", description: "Visit nearby monasteries and thangka painting workshops" }
      ]
    },
    estimatedExpenses: {
      budget: "$5-15 USD",
      midRange: "$20-40 USD",
      luxury: "$60-100 USD (with guide)"
    },
    travelGuide: "Entry fee is NPR 400 for foreigners. Remove shoes when entering the stupa platform. Walk clockwise around the stupa. Visit rooftop cafes for stunning views. Combine with a visit to nearby Kopan Monastery.",
    images: ["/boudhanath-stupa.jpg"],
    location: {
      latitude: 27.7215,
      longitude: 85.3620,
      address: "10 km from Thamel, Kathmandu"
    },
    reviews: [
      { id: "1", userName: "Lisa Wong", rating: 5, comment: "The eyes of Buddha seem to follow you everywhere. A truly peaceful and transformative place.", date: "2024-11-05" },
      { id: "2", userName: "Robert Taylor", rating: 5, comment: "Best experienced at dusk when the butter lamps are lit. Magical atmosphere.", date: "2024-10-12" }
    ],
    quickFacts: {
      "Height": "36 metres",
      "Diameter of Base": "100 metres",
      "UNESCO Status": "Inscribed 1979",
      "Best Time": "Dawn kora (5–7 AM) or dusk lamp-lighting",
      "Entry Fee": "NPR 400 for foreigners",
      "Nearest Landmark": "10 km from Thamel, Kathmandu"
    }
  },
  {
    id: "chitwan-national-park",
    name: "Chitwan National Park",
    category: "wildlife",
    shortDescription: "Nepal's crown jewel of biodiversity and one of Asia's finest wildlife reserves, home to rhinos, tigers, and over 570 bird species.",
    fullDescription: "Chitwan National Park is Nepal's crown jewel of biodiversity and one of Asia's finest wildlife reserves. Established in 1973 as Nepal's first national park and inscribed as a UNESCO World Heritage Site in 1984, Chitwan sprawls across 952 km² of subtropical lowland forest, grasslands, and river systems in the Terai — Nepal's fertile southern plains. The park is home to over 700 one-horned rhinoceroses, making it one of the world's most successful rhino conservation stories. It is also one of the last strongholds of the Bengal tiger, with a thriving population of over 100 tigers.",
    religiousImportance: "The Tharu people, indigenous to the Terai, have their own animist religious traditions connected to the forest. The park contains several sacred groves and sites.",
    culturalImportance: "The Tharu Cultural Museum in Sauraha offers insights into the unique traditions of the Tharu people, including their distinctive stick dance and traditional architecture.",
    localFoods: ["Tharu Cuisine", "Local Fish from Rapti River", "Wild Honey", "Traditional Rice Beer"],
    thingsToDo: ["Jeep safari for wildlife spotting", "Guided jungle walk", "Elephant-back safari (regulated)", "Dugout canoe ride on Rapti River", "Visit Tharu Cultural Museum", "Evening cultural show", "Bird watching"],
    bestTimeToVisit: "October-March (dry season) for best wildlife visibility. Avoid monsoon season (June-September).",
    tourPlan: {
      duration: "2-3 days",
      itinerary: [
        { day: 1, title: "Arrival & Safari", description: "Arrive in Sauraha, afternoon jeep safari" },
        { day: 2, title: "Wildlife Activities", description: "Morning canoe ride and jungle walk, afternoon safari" },
        { day: 3, title: "Culture & Departure", description: "Visit Tharu village and museum, evening cultural show" }
      ]
    },
    estimatedExpenses: {
      budget: "$50-80 USD/day",
      midRange: "$120-200 USD/day",
      luxury: "$250-400 USD/day"
    },
    travelGuide: "Sauraha is the main gateway town with various accommodation options. Book safaris through registered guides only. Carry insect repellent and wear neutral colors. Early morning and late afternoon offer the best wildlife sightings.",
    images: ["/chitwan-wildlife.jpg"],
    location: {
      latitude: 27.5291,
      longitude: 84.3542,
      address: "Terai Lowlands, Bagmati & Madhesh Provinces"
    },
    reviews: [
      { id: "1", userName: "James Anderson", rating: 5, comment: "Saw 5 rhinos and a tiger! The jungle walk was thrilling and our guide was incredibly knowledgeable.", date: "2024-12-01" },
      { id: "2", userName: "Maria Garcia", rating: 5, comment: "Amazing biodiversity! The canoe ride among crocodiles was an adrenaline rush.", date: "2024-11-15" }
    ],
    quickFacts: {
      "Area": "952 km² (core zone)",
      "Key Species": "Bengal Tiger, One-Horned Rhino, Gharial, Leopard",
      "Bird Species": "570+ recorded species",
      "Distance from Kathmandu": "~150 km (4–5 hrs drive)",
      "Best Season": "Oct–Mar (dry season, best wildlife visibility)",
      "Entry Fee": "NPR 1,000 (Nepali); USD 25 (foreigners)"
    }
  },
  {
    id: "lumbini",
    name: "Lumbini — Birthplace of the Buddha",
    category: "temple",
    shortDescription: "One of the holiest places on Earth for Buddhists worldwide — the birthplace of Siddhartha Gautama, the Buddha.",
    fullDescription: "Lumbini is one of the holiest places on Earth for Buddhists worldwide — the birthplace of Siddhartha Gautama, who would later become Shakyamuni Buddha, the Awakened One. Located in the Terai plains of southwestern Nepal, Lumbini was identified and excavated in 1896 following the discovery of a stone pillar erected by Emperor Ashoka in 249 BCE, confirming the site's historical significance. UNESCO inscribed it as a World Heritage Site in 1997. The sacred garden at the heart of Lumbini contains the Maya Devi Temple — built over the exact spot where Queen Maya Devi gave birth to the Buddha while holding a sal tree branch.",
    religiousImportance: "As the birthplace of the Buddha, Lumbini is one of the four most important Buddhist pilgrimage sites (along with Bodh Gaya, Sarnath, and Kushinagar). The exact birth spot is marked by a sacred stone within the Maya Devi Temple.",
    culturalImportance: "The monastic zone features monasteries built by Buddhist nations from around the world, showcasing diverse Buddhist architectural styles. The Ashoka Pillar bears the oldest known Nepali inscription.",
    localFoods: ["Vegetarian Thali", "Local Sweets", "Lassi", "Traditional Terai Cuisine"],
    thingsToDo: ["Visit Maya Devi Temple", "See the Ashoka Pillar", "Walk around the Sacred Pond", "Explore international monasteries", "Meditate in the Sacred Garden", "Visit the Lumbini Museum"],
    bestTimeToVisit: "November to February when it's cool and comfortable. Avoid the hot summer months.",
    tourPlan: {
      duration: "1-2 days",
      itinerary: [
        { day: 1, title: "Sacred Garden", description: "Visit Maya Devi Temple, Ashoka Pillar, and Sacred Pond" },
        { day: 2, title: "Monastic Zone", description: "Explore monasteries from different countries, visit museum" }
      ]
    },
    estimatedExpenses: {
      budget: "$20-40 USD/day",
      midRange: "$60-100 USD/day",
      luxury: "$150-250 USD/day"
    },
    travelGuide: "Fly to Bhairahawa (Siddharthanagar) from Kathmandu (30 minutes), then 22 km drive to Lumbini. The sacred garden has a contemplative atmosphere — maintain silence. Entry fee is NPR 200 for foreigners. Combine with a visit to nearby Kapilvastu ruins.",
    images: ["/lumbini-temple.jpg"],
    location: {
      latitude: 27.4698,
      longitude: 83.2759,
      address: "Lumbini Province, Nepal"
    },
    reviews: [
      { id: "1", userName: "Chen Wei", rating: 5, comment: "A place of profound peace. The silence in the sacred garden is unlike anywhere else.", date: "2024-01-15" },
      { id: "2", userName: "Anna Schmidt", rating: 5, comment: "Moving experience for believers and non-believers alike. The international monasteries are fascinating.", date: "2024-02-10" }
    ],
    quickFacts: {
      "UNESCO Status": "Inscribed 1997",
      "Distance from Kathmandu": "~300 km (7–8 hrs drive or fly to Bhairahawa)",
      "Key Monument": "Maya Devi Temple, Ashoka Pillar, Sacred Pond",
      "Entry Fee": "NPR 200 (foreigners) for the sacred garden",
      "Best Time": "November to February (cool and comfortable)",
      "Nearby City": "Bhairahawa (Siddharthanagar) — 22 km"
    }
  },
  {
    id: "swayambhunath",
    name: "Swayambhunath — The Monkey Temple",
    category: "temple",
    shortDescription: "One of the oldest and most revered religious sites in Nepal, perched dramatically atop a hill overlooking Kathmandu Valley.",
    fullDescription: "Perched dramatically atop a wooded hill rising 77 metres above the Kathmandu Valley, Swayambhunath is one of the oldest and most revered religious sites in Nepal. Known affectionately as the 'Monkey Temple' for the large families of rhesus macaques that inhabit its sacred grounds, this ancient stupa complex is simultaneously a centre of Vajrayana Buddhism and Hindu worship — a perfect reflection of Nepal's religious syncretism. According to legend, the entire Kathmandu Valley was once a great lake, and the hilltop of Swayambhunath was a self-arisen lotus flower that glowed with primordial light.",
    religiousImportance: "The stupa is sacred to both Buddhists and Hindus, embodying Nepal's unique religious harmony. The site dates back at least 2,000 years, making it one of the oldest religious sites in the country.",
    culturalImportance: "The 365 stone steps to the top represent each day of the year. The complex includes numerous shrines, temples, and a Tibetan monastery. The monkeys are considered sacred.",
    localFoods: ["Local Snacks from vendors", "Tea from nearby stalls", "Traditional Sweets"],
    thingsToDo: ["Climb the 365 steps", "Watch sunrise over Kathmandu Valley", "Observe the monkeys", "Spin prayer wheels", "Visit the Tibetan monastery", "Enjoy panoramic valley views"],
    bestTimeToVisit: "Sunrise (5-7 AM) for the best views and morning rituals. Avoid midday heat.",
    tourPlan: {
      duration: "2-3 hours",
      itinerary: [
        { day: 1, title: "Morning Visit", description: "Climb to the top for sunrise, explore the stupa complex" }
      ]
    },
    estimatedExpenses: {
      budget: "$5-10 USD",
      midRange: "$15-25 USD",
      luxury: "$40-60 USD (with guide)"
    },
    travelGuide: "Entry fee is NPR 200 for foreigners. Watch your belongings — the monkeys are notorious thieves! Wear comfortable shoes for the climb. The western entrance has a road for those who prefer not to climb stairs.",
    images: ["/swayambhunath.jpg"],
    location: {
      latitude: 27.7149,
      longitude: 85.2904,
      address: "Swayambhu Hill, Kathmandu (3 km from Thamel)"
    },
    reviews: [
      { id: "1", userName: "Tom Harris", rating: 5, comment: "The sunrise view over Kathmandu is spectacular! The monkeys are hilarious.", date: "2024-11-20" },
      { id: "2", userName: "Yuki Tanaka", rating: 4, comment: "A steep climb but absolutely worth it. One of the best viewpoints in Kathmandu.", date: "2024-10-25" }
    ],
    quickFacts: {
      "Location": "Swayambhu Hill, Kathmandu (3 km from Thamel)",
      "Age": "2,000+ years (stupa); records from 460 CE",
      "Steps to Summit": "365 stone steps (eastern stairway)",
      "UNESCO Status": "Part of Kathmandu Valley WHS (1979)",
      "Entry Fee": "NPR 200 for foreigners",
      "Best Visit Time": "Sunrise (5–7 AM) for views and morning rituals"
    }
  },
  {
    id: "annapurna-region",
    name: "Annapurna Region",
    category: "trekking",
    shortDescription: "The most visited trekking destination in the world, encompassing the Annapurna Massif and the legendary Annapurna Circuit.",
    fullDescription: "The Annapurna region in north-central Nepal is the most visited trekking destination in the world, drawing over 100,000 trekkers annually. The region encompasses the Annapurna Massif — home to Annapurna I (8,091m, the 10th highest peak), Annapurna II, III, IV, Manaslu, Dhaulagiri, and Machhapuchhre (Fishtail Mountain, 6,993m) — all protected within the Annapurna Conservation Area, Nepal's largest protected area at 7,629 km². The legendary Annapurna Circuit, a 160-230 km loop encircling the entire Annapurna Massif, is considered one of the greatest treks on Earth.",
    religiousImportance: "Muktinath Temple, reached after crossing Thorong La Pass, is a sacred site for both Hindus and Buddhists. The eternal flame and 108 water spouts are considered holy.",
    culturalImportance: "The trek passes through Gurung, Magar, Thakali, and Tibetan-influenced villages, offering rich cultural diversity. The Kali Gandaki Gorge is the world's deepest gorge.",
    localFoods: ["Thakali Dal Bhat", "Apple Pie (in Marpha)", "Local Wine", "Tibetan Bread", "Yak Cheese"],
    thingsToDo: ["Cross Thorong La Pass (5,416m)", "Visit Muktinath Temple", "Trek to Poon Hill for sunrise", "Explore Marpha village", "Visit apple orchards", "Experience hot springs in Tatopani"],
    bestTimeToVisit: "October-November and March-May. Post-monsoon offers clearest views.",
    tourPlan: {
      duration: "15-20 days (full circuit)",
      itinerary: [
        { day: 1, title: "Besisahar", description: "Drive to Besisahar and start trek" },
        { day: 5, title: "Manang", description: "Reach Manang for acclimatization" },
        { day: 10, title: "Thorong La Pass", description: "Cross the pass (5,416m) to Muktinath" },
        { day: 15, title: "Tatopani", description: "Reach Tatopani hot springs" },
        { day: 18, title: "Poon Hill", description: "Sunrise at Poon Hill (3,210m)" },
        { day: 20, title: "Pokhara", description: "Complete trek in Pokhara" }
      ]
    },
    estimatedExpenses: {
      budget: "$600-900 USD",
      midRange: "$1,200-2,000 USD",
      luxury: "$2,500-4,000 USD"
    },
    travelGuide: "ACAP permit and TIMS card are required. Proper acclimatization is essential before crossing Thorong La. The circuit can be shortened by starting from Manang or ending at Jomsom. Tea houses provide accommodation throughout.",
    images: ["/annapurna-circuit.jpg", "/pokhara-lake.jpg"],
    location: {
      latitude: 28.5963,
      longitude: 83.8204,
      address: "Gandaki Province, Nepal"
    },
    reviews: [
      { id: "1", userName: "Hans Mueller", rating: 5, comment: "The most diverse trek I've ever done. From subtropical forests to high-altitude desert in one journey.", date: "2024-10-18" },
      { id: "2", userName: "Sofia Rossi", rating: 5, comment: "Crossing Thorong La at dawn was the hardest and most rewarding thing I've ever done.", date: "2024-09-25" }
    ],
    quickFacts: {
      "Annapurna I Height": "8,091 m (10th highest in world)",
      "Circuit Distance": "160–230 km (15–20 days)",
      "Highest Point": "Thorong La Pass — 5,416 m",
      "Permit Required": "ACAP Permit + TIMS Card",
      "Best Season": "Oct–Nov and Mar–May",
      "Start/End Point": "Besisahar (start) / Nayapul or Pokhara (end)"
    }
  },
  {
    id: "bhaktapur-durbar",
    name: "Bhaktapur Durbar Square",
    category: "temple",
    shortDescription: "A UNESCO World Heritage Site famous for Newari architecture, medieval art, and traditional lifestyle.",
    fullDescription: "Bhaktapur Durbar Square is a UNESCO World Heritage Site that preserves medieval Nepalese art, culture, and traditional lifestyle beautifully. The ancient royal palace complex features the famous 55-Window Palace, the Golden Gate, and numerous temples and courtyards. The square is renowned for its exquisite Newari architecture, intricate wood carvings, and pottery square where artisans still create traditional clay pots using age-old techniques.",
    religiousImportance: "The square contains numerous Hindu temples including the Nyatapola Temple, the tallest pagoda-style temple in Nepal. The Vatsala Temple and its famous bell are important religious landmarks.",
    culturalImportance: "Bhaktapur is considered the cultural capital of Nepal. The city is famous for its traditional festivals, including Bisket Jatra. The pottery square preserves ancient craft traditions.",
    localFoods: ["Juju Dhau (King Curd)", "Newari Cuisine", "Bara (lentil pancake)", "Yomari", "Local Sweets"],
    thingsToDo: ["Admire the 55-Window Palace", "See the Golden Gate", "Climb Nyatapola Temple", "Watch pottery making", "Explore narrow medieval streets", "Try famous Juju Dhau curd"],
    bestTimeToVisit: "Early morning for fewer crowds. Visit during Bisket Jatra (April) for the famous chariot festival.",
    tourPlan: {
      duration: "Half to full day",
      itinerary: [
        { day: 1, title: "Durbar Square", description: "Explore the main square and its monuments" },
        { day: 1, title: "Old City", description: "Wander through narrow streets and pottery square" }
      ]
    },
    estimatedExpenses: {
      budget: "$15-25 USD",
      midRange: "$40-60 USD",
      luxury: "$100-150 USD (with guide)"
    },
    travelGuide: "Entry fee is NPR 1,500 for foreigners. Bhaktapur is 13 km east of Kathmandu. Stay overnight to experience the city after day-trippers leave. The city is pedestrian-friendly.",
    images: ["/bhaktapur-durbar.jpg"],
    location: {
      latitude: 27.6710,
      longitude: 85.4298,
      address: "Bhaktapur, Bagmati Province"
    },
    reviews: [
      { id: "1", userName: "Claire Dubois", rating: 5, comment: "The best-preserved medieval city I've seen. The Juju Dhau is absolutely delicious!", date: "2024-11-12" },
      { id: "2", userName: "Mark Johnson", rating: 5, comment: "Feels like stepping back in time. The wood carvings are incredible.", date: "2024-10-30" }
    ],
    quickFacts: {
      "UNESCO Status": "Part of Kathmandu Valley WHS (1979)",
      "Entry Fee": "NPR 1,500 for foreigners",
      "Distance from Kathmandu": "13 km east",
      "Famous For": "55-Window Palace, Golden Gate, Nyatapola Temple",
      "Best Time": "Early morning or during Bisket Jatra (April)",
      "Must Try": "Juju Dhau (King Curd)"
    }
  },
  {
    id: "rara-lake",
    name: "Rara Lake",
    category: "lake",
    shortDescription: "The largest lake in Nepal, a hidden paradise surrounded by pine forests and snow-capped mountains in the remote Karnali region.",
    fullDescription: "Rara Lake is the largest lake in Nepal, located in the remote Karnali region. This hidden paradise is surrounded by dense pine forests and snow-capped mountains, offering pristine natural beauty far from the tourist crowds. The lake's crystal-clear turquoise waters reflect the surrounding peaks, creating a mesmerizing spectacle. Rara National Park, established in 1976, protects the lake and its unique ecosystem.",
    religiousImportance: "The lake is considered sacred by local communities. The Thakur Baba Temple on its shores is an important pilgrimage site.",
    culturalImportance: "The region is home to unique cultural traditions of the Karnali area, relatively untouched by modernization. Local villages maintain traditional lifestyles.",
    localFoods: ["Local Trout Fish", "Traditional Thakali Cuisine", "Wild Honey", "Local Herbs"],
    thingsToDo: ["Boating on the lake", "Hiking around the lake", "Bird watching", "Photography", "Camping", "Village visits"],
    bestTimeToVisit: "September-November and March-May. Winter brings snow; monsoon makes access difficult.",
    tourPlan: {
      duration: "4-5 days",
      itinerary: [
        { day: 1, title: "Flight to Talcha", description: "Fly from Nepalgunj to Talcha airport" },
        { day: 2, title: "Rara Lake", description: "Trek to Rara Lake and explore" },
        { day: 3, title: "Lake Exploration", description: "Full day exploring the lake and surroundings" },
        { day: 4, title: "Hiking", description: "Hike to surrounding viewpoints" },
        { day: 5, title: "Departure", description: "Return trek to Talcha and fly out" }
      ]
    },
    estimatedExpenses: {
      budget: "$300-500 USD",
      midRange: "$600-1,000 USD",
      luxury: "$1,200-2,000 USD"
    },
    travelGuide: "Fly to Talcha from Nepalgunj (30 minutes), then 2-3 hour trek to the lake. Limited accommodation available — book in advance. Carry warm clothing as temperatures drop significantly at night.",
    images: ["/rara-lake.jpg"],
    location: {
      latitude: 29.5167,
      longitude: 82.0833,
      address: "Mugu District, Karnali Province"
    },
    reviews: [
      { id: "1", userName: "Elena Petrova", rating: 5, comment: "The most pristine and peaceful place in Nepal. Worth the remote journey.", date: "2024-10-08" },
      { id: "2", userName: "Kevin Lee", rating: 5, comment: "Unspoiled natural beauty. The reflection of mountains in the lake is magical.", date: "2024-09-15" }
    ],
    quickFacts: {
      "Area": "10.8 km² (largest lake in Nepal)",
      "Altitude": "2,990 meters",
      "Access": "Flight to Talcha from Nepalgunj",
      "Best Season": "Sep-Nov and Mar-May",
      "National Park": "Rara National Park (est. 1976)",
      "Trek Time": "2-3 hours from Talcha airport"
    }
  },
  {
    id: "upper-mustang",
    name: "Upper Mustang",
    category: "trekking",
    shortDescription: "A desert-like Himalayan region rich in Tibetan culture, featuring dramatic landscapes and ancient caves.",
    fullDescription: "Upper Mustang is a desert-like Himalayan region rich in Tibetan culture, often called the 'Last Forbidden Kingdom'. The area features dramatic landscapes of red cliffs, ancient cave dwellings, and the walled city of Lo Manthang. Until 1992, Upper Mustang was restricted to foreigners, preserving its unique Tibetan culture and traditions. The region lies in the rain shadow of the Annapurna and Dhaulagiri ranges, creating an arid, desert-like landscape unlike anywhere else in Nepal.",
    religiousImportance: "The region is deeply Buddhist with numerous ancient monasteries. The caves contain centuries-old Buddhist murals and texts. Lo Manthang's monasteries are important centers of Tibetan Buddhism.",
    culturalImportance: "Upper Mustang preserves Tibetan culture that has largely disappeared from Tibet itself. The walled city of Lo Manthang is a living museum of traditional Tibetan architecture and lifestyle.",
    localFoods: ["Thakali Cuisine", "Tibetan Bread", "Butter Tea", "Local Barley Products", "Dried Meat"],
    thingsToDo: ["Explore Lo Manthang walled city", "Visit ancient cave dwellings", "See Choser caves", "Visit Ghar Gompa", "Experience Tiji Festival (May)", "Photograph dramatic landscapes"],
    bestTimeToVisit: "March-May and September-November. The Tiji Festival in May is a spectacular cultural event.",
    tourPlan: {
      duration: "10-14 days",
      itinerary: [
        { day: 1, title: "Jomsom", description: "Fly to Jomsom and trek to Kagbeni" },
        { day: 3, title: "Chele", description: "Enter the restricted area and trek to Chele" },
        { day: 6, title: "Lo Manthang", description: "Reach the walled capital city" },
        { day: 8, title: "Exploration", description: "Explore caves and monasteries around Lo Manthang" },
        { day: 12, title: "Return", description: "Begin return journey" },
        { day: 14, title: "Jomsom", description: "Return to Jomsom and fly out" }
      ]
    },
    estimatedExpenses: {
      budget: "$1,500-2,000 USD",
      midRange: "$2,500-3,500 USD",
      luxury: "$4,000-6,000 USD"
    },
    travelGuide: "Special restricted area permit required (USD 500 for 10 days). Must trek with a registered guide. Limited accommodation — camping may be required in some areas. The region is dry — carry sufficient water.",
    images: ["/upper-mustang.jpg"],
    location: {
      latitude: 29.1833,
      longitude: 83.9667,
      address: "Mustang District, Gandaki Province"
    },
    reviews: [
      { id: "1", userName: "Alexandre Martin", rating: 5, comment: "Like visiting Tibet 50 years ago. The landscape is otherworldly.", date: "2024-05-20" },
      { id: "2", userName: "Rachel Kim", rating: 5, comment: "The Tiji Festival was an unforgettable cultural experience. Truly unique.", date: "2024-05-15" }
    ],
    quickFacts: {
      "Status": "Restricted Area (special permit required)",
      "Permit Cost": "USD 500 for 10 days",
      "Capital": "Lo Manthang (walled city)",
      "Best Season": "Mar-May and Sep-Nov",
      "Landscape": "Arid, desert-like (rain shadow)",
      "Culture": "Tibetan Buddhist"
    }
  }
];

// ============================================
// BLOG DATA
// ============================================
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "my-ebc-trek",
    title: "My 14-Day Journey to the Roof of the World",
    excerpt: "The first thing nobody tells you about the EBC trek is how emotional it feels...",
    content: `The first thing nobody tells you about the EBC trek is how emotional it feels. Day 9, standing on the moraine above Base Camp with Everest finally visible after days of cloud cover — I wept. Not from exhaustion (though that was very real), but from the sheer, overwhelming immensity of what stood before me.

The Khumbu Icefall groaned and cracked like a living thing. The Sherpa guides are the true heroes of every Himalayan expedition. Our guide, Dawa, seemed to draw energy from the altitude, always smiling, always pointing out a peak or a monastery I would have walked past.

The tea houses along the route are cosy refuges — dal bhat (lentils and rice) has never tasted so extraordinary as it does at 4,000 metres. Pack your layers. The nights are brutal even in October, and altitude sickness is no joke — acclimatise properly and ascend slowly.

But do go. EBC will reset something in your soul.

Tips for future trekkers:
- Train for at least 3 months before
- Bring a good sleeping bag (rated to -15°C)
- Hire a porter — it supports the local economy and makes your trek enjoyable
- Don't rush — the journey is the destination
- Carry chocolate and energy bars`,
    author: "Sarah Mitchell",
    date: "2024-10-15",
    category: "Trekking Stories",
    image: "/everest-basecamp.jpg",
    tags: ["Everest", "EBC", "Trekking", "Himalayas", "Sherpa"]
  },
  {
    id: "pashupatinath-ghats",
    title: "Watching Eternity from the Ghats of Pashupatinath",
    excerpt: "Nothing can fully prepare you for the Pashupatinath ghats...",
    content: `Nothing can fully prepare you for the Pashupatinath ghats. Arriving at dusk, I witnessed the Aarti ceremony — priests in white robes swinging great lamps of fire in synchronised, hypnotic arcs as devotional music filled the air.

Across the river, orange-robed sadhus watched in silence. Nearby, a cremation pyre burned quietly on the ghat, and a family stood together in grief and ritual. What struck me most was not the grandeur of the temple but the ordinariness of eternity — how life, death, worship, commerce, and monkeys (many monkeys!) all coexist in this one extraordinary space.

I spent three hours just sitting on the opposite bank watching. Visit at dawn or dusk when the light turns the Bagmati golden and the atmosphere becomes profoundly contemplative.

Dress modestly, be respectful during ceremonies, and allow yourself time to simply be present. This is not a tourist attraction — it's a living, breathing center of faith and mortality.

The cycle of life and death that sits at the heart of Hindu philosophy is on full display here, yet there's no sense of morbidity — only acceptance, ritual, and the continuity of existence.`,
    author: "James Chen",
    date: "2024-09-20",
    category: "Spiritual Journeys",
    image: "/pashupatinath-temple.jpg",
    tags: ["Pashupatinath", "Hinduism", "Kathmandu", "Spiritual", "Culture"]
  },
  {
    id: "pokhara-sunrise",
    title: "Sunrise Over Phewa Lake: A Morning I'll Never Forget",
    excerpt: "The alarm rang at 5 AM in Pokhara and I nearly ignored it...",
    content: `The alarm rang at 5 AM in Pokhara and I nearly ignored it. I didn't. By 5:30 I was in a wooden rowboat on Phewa Lake, my guide rowing silently through mist that lay on the water like a veil.

Then the sun touched Machhapuchhre and the entire Annapurna range blazed gold — a wall of fire and rock reflected perfectly in the mirror-still lake. No photograph has ever done it justice.

Later that day I paraglided off Sarangkot Hill. The take-off was terrifying and the flight — 30 minutes soaring with eagles over a lake and mountains — was transcendent.

Pokhara is the rare place that manages to be simultaneously thrilling and deeply peaceful. The evenings on Lakeside, sipping lemon ginger honey tea while watching the lights of the city shimmer on the water, are worth the entire journey to Nepal.

For the best experience:
- Book the first boat of the morning
- Stay at a Lakeside hotel with mountain views
- Try the local fish from the lake
- Don't miss the World Peace Pagoda at sunset
- Paraglide — it's one of the best spots in the world`,
    author: "Emma Wilson",
    date: "2024-11-10",
    category: "Travel Stories",
    image: "/pokhara-lake.jpg",
    tags: ["Pokhara", "Phewa Lake", "Paragliding", "Annapurna", "Sunrise"]
  },
  {
    id: "chitwan-rhino",
    title: "Face to Face with a Wild Rhino — My Chitwan Safari",
    excerpt: "Our jeep had been parked in silence for 20 minutes when the rhino appeared...",
    content: `Our jeep had been parked in silence for 20 minutes when the rhino appeared from the tall elephant grass — grey, armoured, and utterly prehistoric looking. It paused 15 metres away, regarded us with ancient calm, then continued to a muddy wallow as if we were invisible.

I held my breath the entire time.

Chitwan is extraordinary not just for the megafauna but for the sheer density of wildlife. In a single morning game drive we spotted a sleeping leopard in a tree, a family of spotted deer, a gharial crocodile longer than our jeep, and a staggering variety of birds.

The guided jungle walk — on foot, just you and the ranger — gives you a completely different perspective: you begin to read the forest's sounds, its smells, its warnings.

Book an experienced naturalist guide; the difference in quality of experience is enormous. Stay at a lodge inside the park if possible — the early morning and evening game drives are when the wildlife is most active.

The Tharu cultural show in the evening was surprisingly good — their traditional stick dance is energetic and unique. And try the local fish from the Rapti River — it's delicious!`,
    author: "Michael Brown",
    date: "2024-12-01",
    category: "Wildlife Adventures",
    image: "/chitwan-wildlife.jpg",
    tags: ["Chitwan", "Wildlife", "Rhino", "Safari", "National Park"]
  },
  {
    id: "lumbini-stillness",
    title: "Finding Stillness in the Garden Where Buddha Was Born",
    excerpt: "I am not Buddhist, but Lumbini moved me profoundly...",
    content: `I am not Buddhist, but Lumbini moved me profoundly. There is a quality of silence in the sacred garden that is unlike any place I have visited — a silence that feels intentional, as if the very air holds its breath in reverence.

Monks in robes of every colour — saffron, burgundy, grey, brown — walked slowly between the trees or sat in meditation. Inside the Maya Devi Temple, looking at the ancient brick foundations and the marker stone, the sense of historical and spiritual weight was overwhelming.

Two and a half millennia of pilgrimage, prayer, and human longing converge at this single point. The lotus-strewn Pushkarini Pond gleamed in late afternoon light.

Children from a local school were visiting, their laughter bouncing off ancient stone. For all its solemnity, Lumbini is also somehow joyful — a place of beginning, not ending.

The international monasteries zone is fascinating — each country has built a monastery in its national style. The Chinese, Thai, Burmese, and German monasteries are particularly impressive.

Stay at least one night to experience the garden at dawn before the day-trippers arrive. The peace is palpable.`,
    author: "Anna Schmidt",
    date: "2024-02-10",
    category: "Spiritual Journeys",
    image: "/lumbini-temple.jpg",
    tags: ["Lumbini", "Buddha", "Spiritual", "Pilgrimage", "Peace"]
  },
  {
    id: "boudhanath-kora",
    title: "Spinning Prayer Wheels at the Great Stupa of Boudhanath",
    excerpt: "I arrived at Boudhanath on my third morning in Kathmandu...",
    content: `I arrived at Boudhanath on my third morning in Kathmandu, jet-lagged and slightly overwhelmed by the city. Walking into the plaza, I stopped dead. The stupa is simply enormous — far bigger than photos suggest — and its eyes seem to follow you with a calm, knowing gaze.

I joined the kora, walking clockwise with hundreds of others: monks muttering mantras, young monks on smartphones (a delightful contrast), old Tibetan women who have walked this path every morning for decades.

I found a rooftop cafe overlooking the stupa and spent two hours there watching the world circle below. At dusk, when the butter lamps are lit and the entire stupa glows golden, the atmosphere becomes almost unbearably beautiful.

Boudhanath is one of those rare places that changes you a little bit just by being in it. The surrounding neighborhood is known as 'Little Tibet' and has excellent Tibetan restaurants. Try the momos and butter tea!

The best time to visit is early morning (6-8 AM) when the kora is filled with devoted locals, or at dusk when the lamps are lit. Avoid midday when tour groups arrive.`,
    author: "Lisa Wong",
    date: "2024-11-05",
    category: "Spiritual Journeys",
    image: "/boudhanath-stupa.jpg",
    tags: ["Boudhanath", "Buddhism", "Kathmandu", "Tibetan", "Stupa"]
  }
];

// ============================================
// TOUR GUIDES DATA
// ============================================
export interface TourGuide {
  id: string;
  name: string;
  photo: string;
  specialty: string;
  experience: string;
  languages: string[];
  rating: number;
  reviews: number;
  description: string;
  certifications: string[];
  contact: {
    email: string;
    phone: string;
  };
}

export const tourGuides: TourGuide[] = [
  {
    id: "dawa-sherpa",
    name: "Dawa Sherpa",
    photo: "/guide-dawa.jpg",
    specialty: "Everest Region Trekking",
    experience: "15 years",
    languages: ["English", "Nepali", "Sherpa", "Hindi"],
    rating: 5.0,
    reviews: 127,
    description: "Born and raised in Khumbu, Dawa has led over 500 trekkers to Everest Base Camp. His knowledge of the mountains, weather patterns, and local culture is unmatched. He's also an expert in high-altitude safety.",
    certifications: ["UIAGM Mountain Guide", "Wilderness First Responder", "High Altitude Specialist"],
    contact: {
      email: "dawa.sherpa@wandernepal.com",
      phone: "+977-980-1234567"
    }
  },
  {
    id: "prakash-gurung",
    name: "Prakash Gurung",
    photo: "/guide-prakash.jpg",
    specialty: "Annapurna Circuit & Cultural Tours",
    experience: "12 years",
    languages: ["English", "Nepali", "Gurung", "Hindi"],
    rating: 4.9,
    reviews: 98,
    description: "Prakash specializes in the Annapurna region and cultural tours. His deep knowledge of Gurung culture and the Himalayas makes every trek educational and enjoyable. He's known for his storytelling and warm hospitality.",
    certifications: ["Licensed Trekking Guide", "Cultural Heritage Specialist", "First Aid Certified"],
    contact: {
      email: "prakash.gurung@wandernepal.com",
      phone: "+977-980-2345678"
    }
  },
  {
    id: "sita-rai",
    name: "Sita Rai",
    photo: "/guide-sita.jpg",
    specialty: "Cultural & Heritage Tours",
    experience: "10 years",
    languages: ["English", "Nepali", "Hindi", "Newari"],
    rating: 4.9,
    reviews: 86,
    description: "Sita is an expert in Nepalese culture, history, and heritage. She leads tours of Kathmandu Valley's UNESCO sites and specializes in women's travel groups. Her knowledge of Newari culture and traditions is exceptional.",
    certifications: ["Cultural Guide License", "Heritage Conservation Certificate", "Women's Safety Trainer"],
    contact: {
      email: "sita.rai@wandernepal.com",
      phone: "+977-980-3456789"
    }
  },
  {
    id: "ram-tharu",
    name: "Ram Tharu",
    photo: "/guide-ram.jpg",
    specialty: "Wildlife & Jungle Safaris",
    experience: "14 years",
    languages: ["English", "Nepali", "Tharu", "Hindi"],
    rating: 5.0,
    reviews: 112,
    description: "Ram grew up near Chitwan National Park and knows its wildlife intimately. He's an expert tracker with an incredible ability to spot animals. His knowledge of the Terai ecosystem and Tharu culture adds depth to every safari.",
    certifications: ["Naturalist Guide License", "Wildlife Photography Expert", "Bird Watching Specialist"],
    contact: {
      email: "ram.tharu@wandernepal.com",
      phone: "+977-980-4567890"
    }
  }
];

// ============================================
// TOUR PLANS DATA
// ============================================
export interface TourPlan {
  id: string;
  name: string;
  duration: string;
  type: 'budget' | 'standard' | 'luxury' | 'trekking';
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; activities: string[] }[];
  inclusions: string[];
  exclusions: string[];
  price: {
    amount: number;
    currency: string;
    perPerson: boolean;
  };
  image: string;
}

export const tourPlans: TourPlan[] = [
  {
    id: "classic-nepal",
    name: "Classic Nepal — 10 Days",
    duration: "10 days",
    type: "standard",
    description: "The perfect introduction to Nepal, covering Kathmandu Valley, Pokhara, and Chitwan National Park.",
    highlights: ["Kathmandu UNESCO Sites", "Pokhara Lakeside", "Chitwan Safari", "Mountain Views", "Cultural Experiences"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"] },
      { day: 2, title: "Kathmandu Sightseeing", activities: ["Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath"] },
      { day: 3, title: "Patan & Bhaktapur", activities: ["Patan Durbar Square", "Bhaktapur Durbar Square", "Nagarkot sunset"] },
      { day: 4, title: "Drive to Pokhara", activities: ["Scenic drive or flight", "Lakeside exploration", "Evening boat ride"] },
      { day: 5, title: "Pokhara Activities", activities: ["Sarangkot sunrise", "Devi's Falls", "Peace Pagoda"] },
      { day: 6, title: "Adventure Day", activities: ["Paragliding", "Zip-lining", "Or relax by the lake"] },
      { day: 7, title: "Drive to Chitwan", activities: ["Scenic drive to Terai", "Tharu village visit", "Cultural show"] },
      { day: 8, title: "Jungle Safari", activities: ["Elephant safari", "Canoe ride", "Nature walk", "Bird watching"] },
      { day: 9, title: "Return to Kathmandu", activities: ["Morning safari", "Drive to Kathmandu", "Farewell dinner"] },
      { day: 10, title: "Departure", activities: ["Airport transfer"] }
    ],
    inclusions: ["All accommodations", "Daily breakfast", "Private transport", "English-speaking guide", "Entry fees", "Jungle activities in Chitwan"],
    exclusions: ["International flights", "Lunches and dinners (except where noted)", "Personal expenses", "Travel insurance", "Tips"],
    price: { amount: 1200, currency: "USD", perPerson: true },
    image: "/pokhara-lake.jpg"
  },
  {
    id: "budget-backpacker",
    name: "Budget Backpacker — 14 Days",
    duration: "14 days",
    type: "budget",
    description: "Experience Nepal on a shoestring without missing the highlights. Perfect for solo travelers and backpackers.",
    highlights: ["Local transport experience", "Guesthouse stays", "Self-guided exploration", "Local food experiences", "Trekking option"],
    itinerary: [
      { day: 1, title: "Arrival Kathmandu", activities: ["Check into hostel", "Thamel exploration"] },
      { day: 2, title: "Kathmandu Valley", activities: ["Local bus to Bhaktapur", "Durbar Square visit", "Return to Kathmandu"] },
      { day: 3, title: "Free Day", activities: ["Explore Thamel", "Visit local markets", "Plan next moves"] },
      { day: 4, title: "Tourist Bus to Pokhara", activities: ["Scenic 7-hour bus journey", "Check into guesthouse"] },
      { day: 5, title: "Pokhara Exploration", activities: ["Walk to Peace Pagoda", "Boat rental on Phewa Lake"] },
      { day: 6, title: "Sarangkot Hike", activities: ["Early morning hike for sunrise", "Return to Lakeside"] },
      { day: 7, title: "Rest Day", activities: ["Cafe hopping", "Book shopping", "Massage"] },
      { day: 8, title: "Bus to Chitwan", activities: ["Travel to Sauraha", "Check into budget lodge"] },
      { day: 9, title: "Chitwan", activities: ["Jeep safari", "Village walk", "Evening cultural program"] },
      { day: 10, title: "Return to Kathmandu", activities: ["Bus journey back", "Last-minute shopping"] },
      { day: 11, title: "Nagarkot Day Trip", activities: ["Local bus to Nagarkot", "Sunset views", "Return to Kathmandu"] },
      { day: 12, title: "Free Day", activities: ["Optional cooking class", "Final exploration"] },
      { day: 13, title: "Final Day", activities: ["Last-minute shopping", "Pack and prepare"] },
      { day: 14, title: "Departure", activities: ["Airport transfer"] }
    ],
    inclusions: ["Hostel/guesthouse accommodation", "Breakfast where included", "Bus transport between cities"],
    exclusions: ["All meals", "Entry fees", "Activities", "Guide services", "Airport transfers"],
    price: { amount: 450, currency: "USD", perPerson: true },
    image: "/boudhanath-stupa.jpg"
  },
  {
    id: "luxury-escape",
    name: "Luxury Himalayan Escape — 12 Days",
    duration: "12 days",
    type: "luxury",
    description: "Experience Nepal in ultimate comfort with 5-star accommodations, private guides, and exclusive experiences.",
    highlights: ["5-star heritage hotels", "Private helicopter tours", "Exclusive dining experiences", "Spa treatments", "Personal butler service"],
    itinerary: [
      { day: 1, title: "Arrival", activities: ["VIP airport pickup", "Check into Dwarika's Hotel", "Welcome spa treatment"] },
      { day: 2, title: "Kathmandu", activities: ["Private guided tour of UNESCO sites", "Exclusive dinner at heritage restaurant"] },
      { day: 3, title: "Helicopter Tour", activities: ["Private helicopter to Everest Base Camp", "Breakfast with mountain views", "Return to Kathmandu"] },
      { day: 4, title: "Bhaktapur", activities: ["Private tour of Bhaktapur", "Lunch at heritage restaurant", "Return to Kathmandu"] },
      { day: 5, title: "Flight to Pokhara", activities: ["Private flight", "Check into Temple Tree Resort", "Sunset cruise on Phewa Lake"] },
      { day: 6, title: "Pokhara", activities: ["Private paragliding experience", "Spa treatment", "Fine dining"] },
      { day: 7, title: "Sarangkot", activities: ["Private sunrise experience", "Champagne breakfast", "Leisure day"] },
      { day: 8, title: "Flight to Chitran", activities: ["Flight to Bharatpur", "Check into Kasara Resort", "Evening safari"] },
      { day: 9, title: "Chitwan Luxury", activities: ["Private jeep safari", "Elephant experience", "Spa treatment"] },
      { day: 10, title: "Return to Kathmandu", activities: ["Flight to Kathmandu", "Shopping at Dwarika's", "Farewell dinner"] },
      { day: 11, title: "Final Day", activities: ["Spa day", "Leisure time", "Departure preparation"] },
      { day: 12, title: "Departure", activities: ["VIP airport transfer"] }
    ],
    inclusions: ["5-star accommodations", "All meals", "Private transport", "Expert private guides", "All activities", "Helicopter tour", "Spa treatments"],
    exclusions: ["International flights", "Personal expenses", "Travel insurance", "Alcoholic beverages"],
    price: { amount: 8500, currency: "USD", perPerson: true },
    image: "/hero-everest.jpg"
  },
  {
    id: "annapurna-base-camp",
    name: "Annapurna Base Camp Trek — 14 Days",
    duration: "14 days",
    type: "trekking",
    description: "The classic ABC trek takes you to the base of Annapurna I, offering diverse landscapes and incredible mountain views.",
    highlights: ["Annapurna Base Camp (4,130m)", "Machhapuchhre Base Camp", "Hot springs at Jhinu", "Diverse landscapes", "Gurung villages"],
    itinerary: [
      { day: 1, title: "Kathmandu", activities: ["Arrival", "Trek briefing", "Gear check"] },
      { day: 2, title: "Drive to Pokhara", activities: ["Tourist bus to Pokhara", "Overnight in Pokhara"] },
      { day: 3, title: "Trek Start", activities: ["Drive to Nayapul", "Trek to Tikhedhunga"] },
      { day: 4, title: "Ghorepani", activities: ["Climb Ulleri stairs", "Trek to Ghorepani"] },
      { day: 5, title: "Poon Hill", activities: ["Sunrise at Poon Hill", "Trek to Tadapani"] },
      { day: 6, title: "Chomrong", activities: ["Descend to Kimrong Khola", "Climb to Chomrong"] },
      { day: 7, title: "Bamboo", activities: ["Descend to Chomrong Khola", "Trek to Bamboo"] },
      { day: 8, title: "Deurali", activities: ["Trek through forest", "Reach Deurali"] },
      { day: 9, title: "Annapurna Base Camp", activities: ["Trek to Machhapuchhre BC", "Continue to ABC"] },
      { day: 10, title: "Bamboo", activities: ["Sunrise at ABC", "Descend to Bamboo"] },
      { day: 11, title: "Jhinu", activities: ["Trek to Jhinu", "Relax in hot springs"] },
      { day: 12, title: "Nayapul", activities: ["Trek to Nayapul", "Drive to Pokhara"] },
      { day: 13, title: "Return to Kathmandu", activities: ["Bus or flight to Kathmandu", "Farewell dinner"] },
      { day: 14, title: "Departure", activities: ["Airport transfer"] }
    ],
    inclusions: ["All accommodations (tea houses)", "All meals during trek", "Licensed guide and porters", "Trekking permits", "Ground transport", "Sleeping bag and down jacket"],
    exclusions: ["International flights", "Meals in Kathmandu/Pokhara", "Personal expenses", "Travel insurance", "Tips for guide/porter"],
    price: { amount: 950, currency: "USD", perPerson: true },
    image: "/annapurna-circuit.jpg"
  }
];

// ============================================
// CARD STACK SECTION (Featured Destinations)
// ============================================
export interface CardStackItem {
  id: number;
  image: string;
  title: string;
  description: string;
  rotation: number;
}

export interface CardStackConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  cards: CardStackItem[];
}

export const cardStackConfig: CardStackConfig = {
  sectionTitle: "Featured Destinations",
  sectionSubtitle: "DISCOVER NEPAL'S TREASURES",
  cards: [
    {
      id: 1,
      image: "/everest-basecamp.jpg",
      title: "Everest Base Camp",
      description: "Trek to the foot of the world's highest peak through Sherpa villages and stunning Himalayan landscapes.",
      rotation: -2
    },
    {
      id: 2,
      image: "/pokhara-lake.jpg",
      title: "Pokhara",
      description: "Nepal's adventure capital with pristine lakes, paragliding, and panoramic mountain views.",
      rotation: 1
    },
    {
      id: 3,
      image: "/chitwan-wildlife.jpg",
      title: "Chitwan National Park",
      description: "Home to rhinos, tigers, and elephants in Nepal's premier wildlife reserve.",
      rotation: -1
    }
  ]
};

// ============================================
// BREATH SECTION
// ============================================
export interface BreathSectionConfig {
  backgroundImage: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
  description: string;
}

export const breathSectionConfig: BreathSectionConfig = {
  backgroundImage: "/annapurna-circuit.jpg",
  backgroundAlt: "Annapurna mountain range",
  title: "The Himalayas Await",
  subtitle: "ADVENTURE OF A LIFETIME",
  description: "From the world's highest peaks to ancient temples, from wildlife safaris to serene lakes — Nepal offers experiences that will transform your soul. Every journey here is a pilgrimage, every path tells a story."
};

// ============================================
// ZIGZAG GRID SECTION
// ============================================
export interface ZigZagGridItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
}

export interface ZigZagGridConfig {
  sectionLabel: string;
  sectionTitle: string;
  items: ZigZagGridItem[];
}

export const zigZagGridConfig: ZigZagGridConfig = {
  sectionLabel: "EXPLORE NEPAL",
  sectionTitle: "Something for Every Traveler",
  items: [
    {
      id: "mountains",
      title: "Mountain Adventures",
      subtitle: "TREKKING & CLIMBING",
      description: "From the iconic Everest Base Camp trek to the Annapurna Circuit, Nepal offers trekking routes for every level. Experience the majesty of the Himalayas up close.",
      image: "/everest-basecamp.jpg",
      imageAlt: "Trekking in the Himalayas",
      reverse: false
    },
    {
      id: "culture",
      title: "Cultural Heritage",
      subtitle: "TEMPLES & TRADITIONS",
      description: "Explore seven UNESCO World Heritage Sites in Kathmandu Valley alone. Discover ancient temples, palaces, and living traditions that span millennia.",
      image: "/bhaktapur-durbar.jpg",
      imageAlt: "Bhaktapur Durbar Square",
      reverse: true
    },
    {
      id: "wildlife",
      title: "Wildlife Encounters",
      subtitle: "SAFARIS & NATURE",
      description: "Spot rhinos, tigers, and elephants in Chitwan and Bardia National Parks. Nepal's Terai region offers some of Asia's best wildlife viewing.",
      image: "/chitwan-wildlife.jpg",
      imageAlt: "Wildlife in Chitwan",
      reverse: false
    },
    {
      id: "spiritual",
      title: "Spiritual Journeys",
      subtitle: "PILGRIMAGE & MEDITATION",
      description: "Visit Lumbini, the birthplace of Buddha. Experience the serenity of Buddhist monasteries and Hindu temples. Find inner peace in the land of spirituality.",
      image: "/lumbini-temple.jpg",
      imageAlt: "Lumbini Maya Devi Temple",
      reverse: true
    }
  ]
};

// ============================================
// FOOTER SECTION
// ============================================
export interface FooterContactItem {
  type: "email" | "phone";
  label: string;
  value: string;
  href: string;
}

export interface FooterSocialItem {
  platform: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  description: string;
  ctaText: string;
  contact: FooterContactItem[];
  locationLabel: string;
  address: string[];
  socialLabel: string;
  socials: FooterSocialItem[];
  logoText: string;
  copyright: string;
  links: { label: string; href: string }[];
  developer: {
    name: string;
    photo: string;
    role: string;
    instagram: string;
    instagramHandle: string;
  }[];
}

export const footerConfig: FooterConfig = {
  heading: "Start Your Nepal Adventure",
  description: "Whether you seek mountain peaks, ancient temples, wildlife encounters, or spiritual awakening — Nepal awaits. Let us help you plan the journey of a lifetime.",
  ctaText: "Contact Us",
  contact: [
    {
      type: "email",
      label: "wandernepal01@gmail.com",
      value: "wandernepal01@gmail.com",
      href: "mailto:wandernepal01@gmail.com"
    },
    {
      type: "phone",
      label: "+977 9765507931",
      value: "+977 9765507931",
      href: "tel:+9779765507931"
    },
    {
       type: "phone",
      label: "+977 9844482812",
      value: "+977 9844482812",
      href: "tel:+9779844482812"
    }
  ],
  locationLabel: "Location",
  address: ["pokhara", "Gandaki Province, Nepal"],
  socialLabel: "Follow Us",
  socials: [
    { platform: "instagram", href: "https://www.instagram.com/wandernepal01?igsh=MTYzdWIwamN4MGhzcw==" },
    { platform: "facebook", href: "https://www.facebook.com/share/182YEr1VjH/" }
  ],
  logoText: "WanderNepal",
 developers: [
  {
    name: "Bibash Baniya",
    photo: "/images/aayush.jpg",
    role: "Website Developer",
    instagram: "https://www.instagram.com/bibash_baniya",
    instagramHandle: "@bibash_baniya"
  },
  {
    name: "Aayush Rijal",
    photo: "/images/aayush.jpg",
    role: "Website Developer helper",
    instagram: "https://www.instagram.com/rijalayushs/?utm_source=ig_web_button_share_sheet",
    instagramHandle: "@rijalayushs"
  }
],
  copyright: "© 2026 WanderNepal.com.np. All rights reserved.",
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Sitemap", href: "/sitemap" }
  ]
};

// ============================================
// USER & AUTHENTICATION
// ============================================
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
}

// Sample users for demo (in production, this would be in a database)
export const sampleUsers: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@wandernepal.com",
    role: "admin",
    avatar: "/avatar-admin.jpg"
  },
  {
    id: "2",
    name: "Demo User",
    email: "user@example.com",
    role: "user",
    avatar: "/avatar-user.jpg"
  }
];

// ============================================
// STATISTICS
// ============================================
export const nepalStats = [
  { value: "8", label: "UNESCO Sites" },
  { value: "8,848m", label: "Mt. Everest" },
  { value: "~1M+", label: "Annual Visitors" },
  { value: "3,500+", label: "Species of Plants" }
];

// ============================================
// ESSENTIAL INFO
// ============================================
export const essentialInfo = [
  { topic: "Visa", details: "Tourist visa on arrival for most nationalities. 15/30/90-day options available." },
  { topic: "Currency", details: "Nepali Rupee (NPR). USD, EUR widely accepted in tourist areas." },
  { topic: "Language", details: "English widely spoken in tourist areas. Learn 'Namaste' (greeting)!" },
  { topic: "Health", details: "Altitude sickness is a real risk above 2,500m. Acclimatise slowly." },
  { topic: "Safety", details: "Nepal is generally very safe for tourists. Take care in crowds." },
  { topic: "Transport", details: "Domestic flights connect Kathmandu to Pokhara, Lukla, Bharatpur, etc." },
  { topic: "Connectivity", details: "Good mobile/4G coverage in Kathmandu & Pokhara; limited on treks." },
  { topic: "Emergency", details: "Police: 100 | Ambulance: 102 | Tourist Police: +977-1-4247041" }
];
