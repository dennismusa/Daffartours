/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import serengeti1 from "../assets/serengeti1.jpg";
import serengeti2 from "../assets/serengeti2.jpg";
import serengeti3 from "../assets/serengeti3.jpg";

/* ============================================================
   REUSABLE COMPONENTS
============================================================ */

const QuickFact = ({ icon, title, value }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl">
        {icon}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <p className="mt-1 font-bold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  </div>
);


const InfoList = ({ items, included = true }) => (
  <ul className="mt-8 space-y-4">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
      >
        <span
          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            included
              ? "bg-emerald-600 text-white"
              : "bg-slate-300 text-slate-700"
          }`}
        >
          {included ? "✓" : "—"}
        </span>

        <span>{item}</span>
      </li>
    ))}
  </ul>
);


const DayCard = ({
  number,
  title,
  label,
  description,
  details = [],
  highlight,
  finalDay = false,
}) => (
  <div className="relative mb-10 md:pl-16">

    {/* TIMELINE NUMBER */}
    <div
      className={`absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full font-bold text-white shadow-lg md:flex ${
        finalDay ? "bg-slate-900" : "bg-amber-600"
      }`}
    >
      {String(number).padStart(2, "0")}
    </div>

    <div
      className={`rounded-3xl border p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 ${
        finalDay
          ? "border-amber-200 bg-gradient-to-br from-amber-50 to-white"
          : "border-slate-200 bg-white"
      }`}
    >

      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            finalDay
              ? "bg-slate-900 text-white"
              : "bg-amber-50 text-amber-700"
          }`}
        >
          {label || `Day ${number}`}
        </span>
      </div>

      <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
        {title}
      </h4>

      {description?.map((paragraph, index) => (
        <p
          key={index}
          className="mt-4 leading-8 text-slate-600"
        >
          {paragraph}
        </p>
      ))}

      {highlight && (
        <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {highlight.title}
          </p>

          <p className="mt-3 text-2xl font-extrabold">
            {highlight.heading}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {highlight.text}
          </p>
        </div>
      )}

      {details.length > 0 && (
        <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">
          {details.map((detail) => (
            <div key={detail.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {detail.title}
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                {detail.value}
              </p>

              {detail.note && (
                <p className="mt-1 text-xs text-slate-500">
                  {detail.note}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  </div>
);


const SectionHeader = ({
  eyebrow,
  title,
  description,
}) => (
  <div className="mx-auto max-w-4xl text-center">

    <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
      {eyebrow}
    </p>

    <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
      {title}
    </h2>

    {description && (
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
        {description}
      </p>
    )}

  </div>
);


/* ============================================================
   3-DAY AMBOSELI — DATA
============================================================ */

const amboseliFacts = [
  {
    icon: "🗓️",
    title: "Duration",
    value: "3 Days / 2 Nights",
  },
  {
    icon: "📍",
    title: "Destination",
    value: "Amboseli National Park",
  },
  {
    icon: "🏔️",
    title: "Highlight",
    value: "Mount Kilimanjaro Views",
  },
  {
    icon: "🏕️",
    title: "Accommodation",
    value: "Elerai Camp",
  },
];


const amboseliIncluded = [
  "Park fees for non-residents",
  "All activities unless clearly labeled as optional",
  "All accommodation unless clearly labeled as optional",
  "Professional driver/guide",
  "All transportation unless clearly labeled as optional",
  "All applicable taxes and VAT",
  "Roundtrip airport transfer",
  "Meals as specified in the day-by-day itinerary",
  "Drinking water as specified in the itinerary",
];


const amboseliExcluded = [
  "International flights from/to home",
  "Additional accommodation before and at the end of the tour",
  "Tips and gratuities",
  "Suggested tipping guideline: US$10 per person per day",
  "Personal items and souvenirs",
  "Travel insurance",
  "Visa fees",
  "Government-imposed increases in taxes and/or park fees",
];


/* ============================================================
   7-DAY MACHAME — DATA
============================================================ */

const machameFacts = [
  {
    icon: "⛰️",
    title: "Route",
    value: "Machame Route",
  },
  {
    icon: "📅",
    title: "Trekking",
    value: "7 Days",
  },
  {
    icon: "📍",
    title: "Summit",
    value: "Uhuru Peak – 5,895m",
  },
  {
    icon: "🥾",
    title: "Distance",
    value: "Approx. 65 km",
  },
];


const machameIncluded = [
  "Airport pickup upon arrival and drop-off after the trek",
  "All transfers between Moshi and the Kilimanjaro trailhead",
  "One night before the climb in Moshi at Kaliwa Lodge or similar",
  "One night after the climb in Moshi",
  "Full camping accommodation on the mountain",
  "Sleeping and dining tents",
  "All applicable Kilimanjaro National Park fees",
  "Mountain rescue fees including vehicle evacuation coverage",
  "Three freshly prepared meals per day while on the mountain",
  "Certified English-speaking professional mountain guide",
  "Experienced porters and professional mountain cook",
  "Camp and dining support staff",
  "First-aid kit throughout the trek",
  "Oximeter for regular altitude monitoring",
  "Applicable government taxes and levies",
];


const machameExcluded = [
  "International flights",
  "Domestic flights unless specifically stated",
  "Extra hotel services and personal purchases",
  "Beverages other than drinking water",
  "Sodas and alcoholic beverages",
  "Tips and gratuities for guides, porters, cooks and mountain crew",
  "Meals in Moshi unless specifically indicated",
  "Personal sleeping bag",
  "Trekking poles",
  "Headlamp and personal trekking equipment",
  "Personal clothing and hiking gear",
  "Travel insurance",
  "Visa fees and personal documentation costs",
  "Any activity, service or expense not specifically listed under Included",
];


/* ============================================================
   MACHAME DAY-BY-DAY DATA
============================================================ */

const machameDays = [
  {
    number: 1,
    label: "Arrival & Preparation",
    title: "Arrival in Tanzania & Transfer to Moshi",
    description: [
      "Upon arrival in Tanzania, you will be warmly welcomed by our representative and transferred to Moshi, the gateway to Mount Kilimanjaro. After checking into your lodge, your mountain guide will conduct a comprehensive pre-climb briefing covering the trekking schedule, safety procedures, altitude considerations, mountain conditions, and essential preparations.",
      "Your personal trekking equipment will also be checked to ensure everything is ready for the climb. The remainder of the day is reserved for rest, relaxation, or exploring the surrounding area.",
    ],
    details: [
      {
        title: "Destination",
        value: "Moshi, Tanzania",
      },
      {
        title: "Accommodation",
        value: "Kaliwa Lodge",
      },
      {
        title: "Meals",
        value: "Dinner",
      },
    ],
  },

  {
    number: 2,
    label: "Rainforest Zone",
    title: "Machame Gate to Machame Camp",
    description: [
      "After breakfast, travel to Machame Gate where park entry and registration procedures will be completed. The trek then begins through Kilimanjaro’s lush rainforest, surrounded by dense vegetation and abundant birdlife.",
      "Keep an eye out for monkeys moving through the trees as you gradually gain elevation. During wetter periods, sections of the trail can become muddy and slippery. By afternoon, you will arrive at Machame Camp, where your mountain crew will have prepared your campsite.",
    ],
    details: [
      {
        title: "Elevation",
        value: "1,790m → 2,980m",
      },
      {
        title: "Duration",
        value: "Approx. 6 Hours",
      },
      {
        title: "Accommodation",
        value: "Machame Camp",
      },
    ],
  },

  {
    number: 3,
    label: "Heath & Moorland",
    title: "Machame Camp to Shira Plateau",
    description: [
      "Leaving the rainforest behind, the trail climbs into open heath and moorland. The landscape becomes increasingly expansive as you gain altitude and approach the spectacular Shira Plateau.",
      "Enjoy impressive views toward Kilimanjaro’s upper slopes and ice fields before continuing toward Shira Camp, situated near a mountain stream. After arriving, enjoy dinner and settle in for a peaceful night at altitude.",
    ],
    details: [
      {
        title: "Elevation",
        value: "2,980m → 3,840m",
      },
      {
        title: "Duration",
        value: "5–6 Hours",
      },
      {
        title: "Overnight",
        value: "Shira Camp",
      },
    ],
  },

  {
    number: 4,
    label: "Acclimatization",
    title: "Shira Camp to Lava Tower & Barranco Camp",
    description: [
      "Today is an important acclimatization day. You will ascend toward Lava Tower, a dramatic volcanic formation standing at approximately 4,630 metres. After lunch, the trail descends into the spectacular Barranco Valley.",
      "The deliberate ascent followed by descent allows your body to experience a higher elevation while sleeping lower, helping with the acclimatization process. Barranco Camp provides dramatic views of the surrounding mountain landscape.",
    ],
    details: [
      {
        title: "Elevation",
        value: "3,840m → 4,630m → 3,950m",
      },
      {
        title: "Duration",
        value: "Approx. 7 Hours",
      },
      {
        title: "Overnight",
        value: "Barranco Camp",
      },
    ],
  },

  {
    number: 5,
    label: "Alpine Valley",
    title: "Barranco Wall to Karanga Camp",
    description: [
      "After breakfast, tackle one of the most memorable sections of the route—the impressive Barranco Wall. Although imposing from below, the climb is manageable with the assistance of your experienced mountain crew.",
      "From the top, enjoy rewarding panoramic views before continuing through a series of alpine valleys and ridges toward Karanga Camp. This shorter trekking stage provides valuable additional acclimatization before the final approach to Barafu.",
    ],
    details: [
      {
        title: "Elevation",
        value: "Approx. 3,950m",
      },
      {
        title: "Duration",
        value: "4–5 Hours",
      },
      {
        title: "Overnight",
        value: "Karanga Camp",
      },
    ],
  },

  {
    number: 6,
    label: "Summit Preparation",
    title: "Karanga Camp to Barafu Base Camp",
    description: [
      "Today you make the final approach to Barafu Camp, the staging point for your summit attempt. The trail climbs through increasingly barren alpine terrain as vegetation disappears and the mountain becomes colder and more exposed.",
      "After arriving during the afternoon, use the remaining time to rest, hydrate, organize your summit equipment, and prepare mentally and physically for the midnight climb. Dinner is served early before you retire for several hours of rest.",
    ],
    details: [
      {
        title: "Elevation",
        value: "3,950m → 4,600m",
      },
      {
        title: "Duration",
        value: "3–4 Hours",
      },
      {
        title: "Overnight",
        value: "Barafu Camp",
      },
    ],
  },

  {
    number: 7,
    label: "Summit Day",
    title: "Barafu Camp to Uhuru Peak & Descent to Mweka Camp",
    finalDay: true,
    description: [
      "Around midnight, your summit attempt begins. Guided by headlamps, you will ascend slowly through the steep scree slopes toward Stella Point. The climb is demanding, but the support of your experienced guide and mountain crew will help you maintain a steady and sustainable pace.",
      "At approximately 5,685 metres, you reach Stella Point. From here, the trail follows the crater rim toward the ultimate objective: Uhuru Peak at 5,895 metres.",
      "After celebrating at the summit and taking photographs, you will begin the descent toward Barafu Camp for a short rest and lunch. The journey then continues downhill toward Mweka Camp, where you will enjoy your final night on the mountain.",
    ],
    highlight: {
      title: "Summit Achievement",
      heading: "UHURU PEAK — 5,895 METRES",
      text: "The highest point in Africa and the ultimate goal of your Kilimanjaro expedition.",
    },
    details: [
      {
        title: "Elevation",
        value: "4,600m → 5,895m → 3,100m",
      },
      {
        title: "Duration",
        value: "12–14 Hours",
      },
      {
        title: "Overnight",
        value: "Mweka Camp",
      },
    ],
  },

  {
    number: 8,
    label: "Final Descent",
    title: "Mweka Camp to Mweka Gate & Return to Moshi",
    description: [
      "After breakfast, begin the final descent through Kilimanjaro’s lush forest toward Mweka Gate. The dramatic change in vegetation provides a refreshing contrast to the high-altitude environments experienced during the summit stages.",
      "At the gate, you will complete the park exit procedures and receive your Kilimanjaro summit certificate. A vehicle will then transfer you back to Moshi for a hot shower, relaxation, and well-earned recovery.",
    ],
    details: [
      {
        title: "Elevation",
        value: "3,100m → 1,980m",
      },
      {
        title: "Duration",
        value: "Approx. 3 Hours",
      },
      {
        title: "Accommodation",
        value: "Kaliwa Lodge, Moshi",
      },
    ],
  },

  {
    number: 9,
    label: "Departure",
    title: "Departure Day",
    description: [
      "After breakfast, you will be transferred to the airport for your onward journey. Whether you are returning home or continuing your East African adventure, this marks the official conclusion of your Kilimanjaro Machame Route expedition.",
    ],
    details: [
      {
        title: "Meals",
        value: "Breakfast",
      },
      {
        title: "Accommodation",
        value: "None – Tour Ends",
      },
    ],
  },
];


/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function SafariItineraries() {
  return (
    <main className="bg-white">

      {/* ======================================================
          AMBOSELI ITINERARY
      ====================================================== */}

{/* ============================================================
    SIMPLE PAGE HERO — SERENGETI ITINERARIES
============================================================ */}
<section
  id="serengeti-itineraries-hero"
  className="relative overflow-hidden bg-[#092d1a]"
>
  {/* BACKGROUND IMAGE */}
  <img
    src={serengeti1}
    alt="Serengeti National Park"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#061b10]/90 via-[#092d1a]/60 to-[#092d1a]/20" />

  {/* CONTENT */}
  <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[540px] lg:px-12">

    <div className="max-w-3xl">

      {/* LABEL */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
          Safari Itineraries
        </span>
      </div>

      {/* TITLE */}
      <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Serengeti
        <span className="block text-[#f5c45d]">
          Safari Itineraries
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
        Discover unforgettable safari experiences across the endless plains
        of the Serengeti, with exceptional wildlife, breathtaking landscapes
        and the legendary Great Migration.
      </p>

    </div>
  </div>
</section>

{/* ============================================================
    SERENGETI NATIONAL PARK
============================================================ */}
<section className="bg-white py-16 sm:py-20 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

      {/* ======================================================
          IMAGE
      ====================================================== */}
      <div className="relative group">

        <div className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-[#F39A08]/15" />

        <img
          src={serengeti2}
          alt="Serengeti National Park"
          className="relative h-[380px] w-full rounded-[2rem] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] sm:h-[480px]"
        />

        <div className="absolute bottom-5 left-5 rounded-2xl bg-[#0D4825]/95 px-6 py-4 text-white shadow-xl backdrop-blur-md">

          <p className="text-sm font-bold uppercase tracking-wider text-[#F39A08]">
            Serengeti
          </p>

          <p className="mt-1 text-xs text-white/70">
            Tanzania's legendary safari destination
          </p>

        </div>

      </div>


      {/* ======================================================
          CONTENT
      ====================================================== */}
      <div>

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F39A08]">
          About The Destination
        </span>

        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl lg:text-5xl">

          Serengeti National Park

          <span className="block text-[#F39A08]">
            The Heart of Africa
          </span>

        </h2>

        <div className="mt-7 space-y-5 text-gray-600">

          <p className="leading-relaxed">
            Situated in northern Tanzania, Serengeti National Park stands as a
            crown jewel of African safaris, renowned for its sweeping savannahs
            and the world-famous great migration. Each year, over two million
            wildebeest, zebras, and gazelles embark on a remarkable journey
            across these plains, creating one of nature’s most breathtaking
            spectacles. Even outside migration months, the Serengeti offers
            consistently superb wildlife encounters thanks to its high density
            of predators and herbivores.
          </p>

          <p className="leading-relaxed">
            While the open grasslands near Seronera are the most frequented,
            visitors can also discover the striking Western Corridor and the
            Mara River region—famous for dramatic river crossings where
            crocodiles await migrating herds. Hot-air balloon rides provide an
            extraordinary perspective over these endless plains, especially at
            sunrise.
          </p>

          <p className="leading-relaxed">
            The Serengeti is particularly celebrated for its predator
            sightings. Lions are commonly observed lounging or stalking prey,
            while cheetahs race across the plains in pursuit of gazelles.
            Leopards, though more elusive, can occasionally be spotted draped
            over acacia branches near rivers.
          </p>

          <p className="leading-relaxed">
            The wildebeest migration’s timing can vary, but generally, the
            Grumeti River crossings occur in June and July, and the Mara River
            crossings unfold around August and September. For those eager to
            witness calving season, January and February bring the plains to
            life with newborn wildebeest and intense predator action.
          </p>

          <p className="leading-relaxed">
            Beyond the migration, the park’s year-round appeal lies in its vast,
            untamed beauty and exceptional biodiversity. With sweeping
            landscapes, abundant wildlife, and unforgettable safari moments,
            Serengeti National Park promises an authentic and timeless
            adventure at the heart of Africa’s wilderness.
          </p>

        </div>


        {/* ======================================================
            HIGHLIGHTS
        ====================================================== */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2">

          <div className="group rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Wildlife
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Lions, cheetahs, leopards & more
            </p>

          </div>

          <div className="group rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Great Migration
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Over two million migrating animals
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
```


{/* ============================================================
    6-DAY MASAI MARA, SERENGETI & NGORONGORO LUXURY SAFARI
============================================================ */}
<section
  id="6-day-masai-mara-serengeti-ngorongoro-luxury"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#f5c45d]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-5xl text-center">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0b4224]/10 bg-white px-4 py-2 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#f5c45d]" />

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
          Luxury Safari
        </span>
      </div>

      <h2 className="text-4xl font-black leading-tight tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        6-Day Masai Mara, Serengeti
        <span className="block text-[#0b4224]">
          & Ngorongoro Luxury Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an unforgettable six-day luxury safari across Kenya and
        Tanzania, combining the spectacular Masai Mara National Reserve with
        the legendary Serengeti National Park and the magnificent Ngorongoro
        Crater.
      </p>

      <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
        Track Africa's iconic predators, encounter elephants and buffaloes,
        search for black rhinos and experience the extraordinary landscapes
        and wildlife of three world-renowned safari destinations.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Duration
        </p>

        <p className="mt-2 text-lg font-black text-[#092d1a]">
          6 Days / 5 Nights
        </p>
      </div>

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Countries
        </p>

        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Kenya & Tanzania
        </p>
      </div>

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Safari Style
        </p>

        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Luxury
        </p>
      </div>

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Signature Experience
        </p>

        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Mara • Serengeti • Ngorongoro
        </p>
      </div>

    </div>

    {/* ============================================================
        HERO HIGHLIGHT
    ============================================================ */}
    <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#092d1a] shadow-2xl">

      <div className="grid lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative min-h-[360px] lg:min-h-[460px]">

          <img
            src={serengeti3}
            alt="Masai Mara safari landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#092d1a]/90 via-black/20 to-black/5" />

          <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">

            <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0b4224]">
              Kenya & Tanzania
            </span>

            <h3 className="mt-4 max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl">
              From the Mara to the Serengeti & Ngorongoro
            </h3>

          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            The East Africa Experience
          </p>

          <p className="mt-5 text-base leading-8 text-white/75">
            Journey across two of East Africa's most celebrated safari
            countries, beginning in Kenya's legendary Masai Mara before
            continuing into Tanzania's Serengeti National Park and the
            magnificent Ngorongoro Conservation Area.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            {[
              "Masai Mara wildlife",
              "Serengeti game drives",
              "Ngorongoro Crater",
              "Black rhino opportunities",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5c45d] text-xs font-black text-[#092d1a]">
                  ✓
                </span>

                <span className="text-sm font-semibold text-white/85">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY-BY-DAY ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mb-12 text-center">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#dba33a]">
          Your Journey
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Day-by-Day Safari Experience
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
          Follow an extraordinary six-day journey from Kenya's Masai Mara
          into Tanzania's Serengeti and Ngorongoro landscapes.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 lg:block" />

        <div className="space-y-10">

          {/* ======================================================
              DAY 1
          ====================================================== */}
          <article className="relative lg:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-xs font-black text-white">01</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="border-b border-[#0b4224]/10 bg-[#092d1a] px-7 py-6 sm:px-9">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                      Day 01
                    </p>

                    <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      Nairobi – Masai Mara National Reserve
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Nairobi → Masai Mara
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  Your safari begins in Nairobi, where you will be picked up
                  by a representative from Daffar Tours and Travel and driven
                  to the Masai Mara National Reserve.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Upon arrival, check in at your accommodation and enjoy lunch
                  before heading out for an afternoon game drive. The Masai
                  Mara is renowned for its abundant wildlife and spectacular
                  savannah landscapes.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Look out for lions, leopards, cheetahs, elephants,
                  buffaloes, giraffes, zebras, wildebeest, jackals and other
                  wildlife. As the afternoon progresses, continue exploring
                  the reserve before returning to your accommodation for
                  dinner and overnight.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Masai Mara National Reserve
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Alama Camp Mara
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water provided
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </article>

          {/* ======================================================
              DAY 2
          ====================================================== */}
          <article className="relative lg:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-xs font-black text-white">02</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="border-b border-[#0b4224]/10 bg-[#092d1a] px-7 py-6 sm:px-9">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                      Day 02
                    </p>

                    <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      Full-Day Masai Mara National Reserve
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Full-Day Game Drive
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, enjoy a full day of game drives across the
                  Masai Mara National Reserve. Spend the day searching for the
                  reserve's famous predators, including lions, leopards and
                  cheetahs.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Continue looking for elephants, buffaloes, giraffes, zebras,
                  wildebeest, jackals and other plains wildlife.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The Masai Mara also offers excellent opportunities for
                  wildlife photography and, depending on the season and
                  location of the herds, you may witness the spectacular
                  wildebeest migration.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Enjoy lunch during the day before continuing your wildlife
                  exploration. Later in the afternoon, return to your
                  accommodation for dinner and relaxation.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Masai Mara National Reserve
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Alama Camp Mara
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water provided
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </article>

          {/* ======================================================
              DAY 3
          ====================================================== */}
          <article className="relative lg:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-xs font-black text-white">03</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="border-b border-[#0b4224]/10 bg-[#092d1a] px-7 py-6 sm:px-9">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                      Day 03
                    </p>

                    <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      Masai Mara – Serengeti National Park
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Kenya → Tanzania
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, depart the Masai Mara and continue your
                  journey into Tanzania towards the Serengeti National Park.
                  Upon arrival, check in at your accommodation and enjoy lunch
                  before an afternoon game drive.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The Serengeti is one of Africa's most celebrated wildlife
                  destinations, famous for its vast plains and exceptional
                  predator sightings.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  During your game drive, look out for lions, leopards,
                  cheetahs, elephants, buffaloes, giraffes, zebras,
                  wildebeest, jackals and hyenas. Depending on the season and
                  location of the herds, you may also encounter large
                  concentrations of wildebeest associated with the Great
                  Migration.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Serengeti National Park
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Enkirari Wilderness Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water provided
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </article>

          {/* ======================================================
              DAY 4
          ====================================================== */}
          <article className="relative lg:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-xs font-black text-white">04</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="border-b border-[#0b4224]/10 bg-[#092d1a] px-7 py-6 sm:px-9">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                      Day 04
                    </p>

                    <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      Full-Day Serengeti National Park
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Full-Day Game Drive
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, spend a full day exploring the Serengeti
                  with morning and afternoon game drives. The day is dedicated
                  to searching for the Serengeti's diverse wildlife.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Track lions, leopards and cheetahs while also looking for
                  elephants, buffaloes, giraffes, wildebeest, zebras, hyenas,
                  jackals and other wildlife.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The Serengeti's open plains provide excellent opportunities
                  to observe wildlife in its natural environment. Depending
                  on the time of year, you may also witness the movement of
                  wildebeest herds across the plains.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Serengeti National Park
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Enkirari Wilderness Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water provided
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </article>

          {/* ======================================================
              DAY 5
          ====================================================== */}
          <article className="relative lg:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-xs font-black text-white">05</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="border-b border-[#0b4224]/10 bg-[#092d1a] px-7 py-6 sm:px-9">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                      Day 05
                    </p>

                    <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      Serengeti – Ngorongoro Crater
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Serengeti → Ngorongoro
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, depart the Serengeti and travel towards the
                  Ngorongoro Conservation Area. Proceed to the spectacular
                  Ngorongoro Crater for a game drive.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The crater is renowned for its remarkable concentration of
                  wildlife and offers opportunities to search for lions,
                  elephants, buffaloes, zebras, wildebeest, hyenas, jackals
                  and other species.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The crater is also an important habitat for the endangered
                  black rhino, providing an opportunity for black rhino
                  tracking. You may also encounter Thomson's gazelles and a
                  variety of other wildlife within the crater.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  After your crater exploration, ascend and continue to your
                  accommodation for dinner and overnight stay.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Ngorongoro Crater
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Ngorongoro Marera Mountain View Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water provided
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </article>

          {/* ======================================================
              DAY 6
          ====================================================== */}
          <article className="relative lg:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-xs font-black text-white">06</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="border-b border-[#0b4224]/10 bg-[#092d1a] px-7 py-6 sm:px-9">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                      Day 06
                    </p>

                    <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      Ngorongoro – Arusha Airport
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Safari Ends
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, depart your accommodation and begin your
                  journey towards Arusha Airport. Enjoy lunch along the way
                  before continuing to the airport for your onward flight.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Your safari concludes upon arrival at Arusha Airport,
                  bringing an unforgettable journey through Kenya and Tanzania
                  to an end.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Arusha Airport
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      No accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast & Lunch
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water provided
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </article>

        </div>
      </div>
    </div>

    {/* ============================================================
        SAFARI HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20 rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-10">

      <div className="max-w-3xl">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#dba33a]">
          Safari Highlights
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Three Legendary Safari Destinations
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600">
          Discover the remarkable contrast between Kenya's Masai Mara and
          Tanzania's Serengeti and Ngorongoro landscapes on one seamless
          luxury safari journey.
        </p>

      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {[
          {
            title: "Masai Mara",
            text: "Experience spectacular savannah landscapes and search for lions, leopards, cheetahs, elephants and other plains wildlife.",
          },
          {
            title: "Serengeti",
            text: "Explore vast open plains renowned for exceptional predator sightings and the seasonal movement of wildebeest herds.",
          },
          {
            title: "Ngorongoro",
            text: "Descend into the magnificent crater to experience remarkable wildlife concentrations and opportunities to search for black rhinos.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-6"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b4224] text-sm font-black text-white">
              ✓
            </div>

            <h4 className="mt-5 text-lg font-black text-[#092d1a]">
              {item.title}
            </h4>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              {item.text}
            </p>

          </div>
        ))}

      </div>
    </div>

    {/* ============================================================
        WILDLIFE EXPERIENCE
    ============================================================ */}
    <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#092d1a] shadow-2xl">

      <div className="grid lg:grid-cols-2">

        <div className="p-7 sm:p-10 lg:p-12">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5c45d]">
            Wildlife Experience
          </p>

          <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Exceptional East African Wildlife
          </h3>

          <p className="mt-5 text-base leading-8 text-white/70">
            From the big cats of the Masai Mara and Serengeti to the
            extraordinary wildlife concentration of Ngorongoro Crater, this
            journey offers some of East Africa's most memorable wildlife
            viewing opportunities.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-3 p-7 sm:p-10 lg:p-12">

          {[
            "Lions",
            "Leopards",
            "Cheetahs",
            "Black Rhinos",
            "Elephants",
            "Buffaloes",
            "Giraffes",
            "Wildebeest",
            "Zebras",
            "Hyenas",
          ].map((animal) => (
            <div
              key={animal}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#f5c45d]" />

              <span className="text-sm font-semibold text-white/85">
                {animal}
              </span>
            </div>
          ))}

        </div>

      </div>
    </div>

    {/* ============================================================
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* ==========================================================
          INCLUDED
      ========================================================== */}
      <div className="rounded-[2rem] bg-[#092d1a] p-7 text-white shadow-xl sm:p-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c45d] text-xl font-black text-[#092d1a]">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5c45d]">
              Included
            </p>

            <h3 className="text-2xl font-black">
              What's Included
            </h3>
          </div>

        </div>

        <div className="mt-8 space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless clearly labeled as optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver/guide",
            "All transportation",
            "All taxes and VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item) => (
            <div key={item} className="flex gap-3">

              <span className="mt-1 text-[#f5c45d]">
                ✓
              </span>

              <span className="text-sm leading-6 text-white/75">
                {item}
              </span>

            </div>
          ))}

        </div>
      </div>

      {/* ==========================================================
          EXCLUDED
      ========================================================== */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7faf7] text-xl font-black text-[#0b4224]">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
              Excluded
            </p>

            <h3 className="text-2xl font-black text-[#092d1a]">
              What's Not Included
            </h3>
          </div>

        </div>

        <div className="mt-8 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline of US$10–15 per person per day",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
          ].map((item) => (
            <div key={item} className="flex gap-3">

              <span className="mt-1 font-bold text-[#dba33a]">
                ×
              </span>

              <span className="text-sm leading-6 text-gray-600">
                {item}
              </span>

            </div>
          ))}

        </div>

        {/* OPTIONAL ACTIVITIES */}
        <div className="mt-8 rounded-2xl border border-[#dba33a]/20 bg-[#fffaf0] p-5">

          <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
            Optional Activities
          </p>

          <div className="mt-4 space-y-3">

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#092d1a]">
                Balloon Safari
              </span>

              <span className="text-sm font-black text-[#092d1a]">
                USD 500 / person
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#092d1a]">
                Maasai Village Visit
              </span>

              <span className="text-sm font-black text-[#092d1a]">
                USD 50 / vehicle
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>

    {/* ============================================================
        CTA
    ============================================================ */}
    <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5c45d]">
        Kenya & Tanzania Luxury Adventure
      </p>

      <h3 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        Ready to Experience the Mara, Serengeti & Ngorongoro?
      </h3>

      <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
        Journey across Kenya and Tanzania on an unforgettable luxury safari
        combining exceptional wildlife, spectacular landscapes and some of
        East Africa's most iconic destinations.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

        <Link
          to="/contact"
          className="rounded-full bg-[#f5c45d] px-7 py-3.5 text-sm font-black text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-white"
        >
          Plan Your Safari
        </Link>

        <a
          href="https://wa.me/+254708711459"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          WhatsApp Us
        </a>

      </div>

    </div>

  </div>
</section>

{/* ============================================================
    10-DAY BEST OF KENYA, TARANGIRE, SERENGETI & NGORONGORO
    LUXURY SAFARI
============================================================ */}


<section
  id="10-day-best-of-kenya-tarangire-serengeti-ngorongoro"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-32 h-[28rem] w-[28rem] rounded-full bg-[#0b4224]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* ========================================================
        HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dba33a]/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224] shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        Luxury Safari
      </div>

      <h2 className="text-4xl font-black tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        10-Day Best of Kenya,
        <span className="block text-[#dba33a]">
          Tarangire, Serengeti & Ngorongoro
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience the best of Kenya and northern Tanzania on an unforgettable
        ten-day luxury safari. Explore the legendary Masai Mara, discover the
        wildlife and scenic beauty of Lake Nakuru and Amboseli, then continue
        into Tanzania to experience Tarangire National Park, the vast Serengeti
        plains, and the spectacular Ngorongoro Crater.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
        This journey combines diverse landscapes, exceptional wildlife viewing,
        and some of East Africa’s most iconic safari destinations.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ["Duration", "10 Days / 9 Nights"],
        ["Kenya", "Masai Mara • Nakuru • Amboseli"],
        ["Tanzania", "Tarangire • Serengeti • Ngorongoro"],
        ["Experience", "Luxury Safari"],
      ].map(([label, value]) => (
        <div
          key={label}
          className="rounded-3xl border border-[#dba33a]/15 bg-white p-5 text-center shadow-[0_15px_50px_-30px_rgba(9,45,26,0.4)]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#dba33a]">
            {label}
          </p>
          <p className="mt-2 text-sm font-bold leading-6 text-[#092d1a]">
            {value}
          </p>
        </div>
      ))}
    </div>

    {/* ========================================================
        HERO
    ======================================================== */}
    <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#092d1a] shadow-[0_25px_80px_-35px_rgba(9,45,26,0.65)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[340px] overflow-hidden sm:min-h-[430px]">
          <img
            src={serengeti2}
            alt="Masai Mara luxury safari"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092d1a]/80 via-[#092d1a]/10 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
              Kenya & Tanzania
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            10 Days of Exceptional Safari
          </p>

          <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
            From the Masai Mara to the Serengeti
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
            Journey through Kenya’s legendary wildlife destinations before
            crossing into northern Tanzania for an extraordinary safari through
            Tarangire, the Serengeti and the Ngorongoro Crater.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Masai Mara",
              "Lake Nakuru",
              "Amboseli",
              "Tarangire",
              "Serengeti",
              "Ngorongoro",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ========================================================
        ITINERARY TIMELINE
    ======================================================== */}
    <div className="mt-16">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#dba33a]" />
        <h3 className="text-3xl font-black text-[#092d1a] sm:text-4xl">
          Your Safari Journey
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Ten days of carefully planned wildlife experiences across Kenya and
          northern Tanzania.
        </p>
      </div>

      <div className="space-y-7">

        {/* DAY 1 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-white">
                01
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 1
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Nairobi – Masai Mara
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                Your safari begins in Nairobi, where you will be picked up by a
                representative from Daffar Tours and Travel and driven to the
                Masai Mara National Reserve. Upon arrival, check in at your
                accommodation and enjoy lunch before heading out for an
                afternoon game drive.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                The Masai Mara is renowned for its abundant wildlife and
                spectacular savannah landscapes. During your game drive, look out
                for lions, leopards, cheetahs, elephants, buffaloes, giraffes,
                zebras, wildebeest, hyenas, jackals, and other plains wildlife.
                Depending on the season, you may also encounter large herds of
                wildebeest associated with the Great Migration.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Return to your accommodation in the evening for dinner and
                overnight stay.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Mara Serena Safari Lodge
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Lunch & Dinner
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* DAY 2 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-white">
                02
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 2
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Full Day Masai Mara
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, enjoy a full day of game drives exploring the
                Masai Mara National Reserve. Spend the day searching for the
                reserve’s famous predators, including lions, leopards, and
                cheetahs, while also looking out for elephants, buffaloes,
                giraffes, zebras, wildebeest, hyenas, jackals, and other
                wildlife.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Depending on the season and location of the herds, you may have
                the opportunity to witness the dramatic wildebeest migration.
                Enjoy lunch during the day before continuing your wildlife
                exploration across the reserve.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Return to your accommodation in the evening for dinner and
                relaxation.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Mara Serena Safari Lodge
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* DAY 3 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-white">
                03
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 3
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Masai Mara – Lake Nakuru
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, depart the Masai Mara and travel towards Lake
                Nakuru National Park. Upon arrival, enjoy lunch before embarking
                on an afternoon game drive.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Lake Nakuru is particularly renowned for its rhino population
                and offers opportunities to encounter black and white rhinos,
                lions, leopards, buffaloes, giraffes, zebras, waterbucks,
                baboons, and other wildlife. The lake and surrounding habitats
                also offer opportunities to see a variety of bird species,
                including flamingos when conditions are suitable.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                After the game drive, return to your accommodation for dinner
                and an overnight stay.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Sarova Lion Hill Game Lodge
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* DAY 4 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-white">
                04
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 4
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Lake Nakuru – Amboseli
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, depart Lake Nakuru and continue your journey
                south towards Amboseli National Park. Upon arrival, check in at
                your accommodation and enjoy lunch before an afternoon game
                drive.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Amboseli is famous for its impressive elephant herds and
                spectacular views of Mount Kilimanjaro. As you explore the park,
                look out for elephants, buffaloes, giraffes, zebras, wildebeest,
                waterbucks, warthogs, and other wildlife. You may also encounter
                lions and other predators.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Return to your accommodation in the evening for dinner and
                relaxation.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Ol Tukai Lodge
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* DAY 5 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-white">
                05
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 5
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Full Day Amboseli
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, enjoy a full day of game drives in Amboseli
                National Park. The park’s open plains and wetlands provide
                excellent opportunities for elephant viewing, while other
                wildlife may include lions, buffaloes, giraffes, zebras,
                wildebeest, waterbucks, warthogs, hyenas, and various antelope
                species.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Enjoy lunch before continuing with your afternoon game drive.
                Take time to appreciate the spectacular scenery, with Mount
                Kilimanjaro providing a dramatic backdrop on clear days.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Return to your accommodation in the evening for dinner and
                overnight stay.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Ol Tukai Lodge
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* DAY 6 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-white">
                06
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 6
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Amboseli – Tarangire
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, depart Amboseli and cross into Tanzania,
                continuing towards Tarangire National Park. Upon arrival, check
                in at your accommodation and enjoy lunch before an afternoon
                game drive.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Tarangire is known for its beautiful landscapes, large elephant
                populations, and distinctive baobab trees. During your game
                drive, look out for elephants, giraffes, zebras, wildebeest,
                buffaloes, warthogs, impalas, and other wildlife. The Park also
                offers opportunities to search for lions, leopards, and other
                predators.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Return to your accommodation in the evening for dinner and
                overnight stay.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Nimali Tarangire
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* DAY 7 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-white">
                07
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 7
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Tarangire – Central Serengeti
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, depart Tarangire and continue towards the
                legendary Serengeti National Park. Upon arrival in the Central
                Serengeti, enjoy lunch before embarking on an afternoon game
                drive.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                The Serengeti is famous for its vast open plains, abundant
                wildlife, and exceptional predator viewing. Look out for lions,
                leopards, cheetahs, elephants, buffaloes, giraffes, zebras,
                wildebeest, hyenas, jackals, and other wildlife. Depending on
                the season and location of the herds, you may also witness the
                spectacular Great Wildebeest Migration.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Return to your accommodation in the evening for dinner and
                overnight stay.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Serengeti Serena Safari Lodge
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* DAY 8 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-white">
                08
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 8
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Full Day Central Serengeti
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, spend a full day exploring the Central
                Serengeti with extensive game drives. The day provides excellent
                opportunities to search for lions, leopards, cheetahs, elephants,
                buffaloes, giraffes, zebras, wildebeest, hyenas, jackals, and
                other wildlife.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Explore different areas of the Serengeti in search of predators
                and large herds of plains animals. Depending on the time of year,
                you may also encounter migrating wildebeest and other animals
                following the seasonal movements of water and grazing.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Return to your accommodation in the evening for dinner and
                relaxation.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Serengeti Serena Safari Lodge
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* DAY 9 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-white">
                09
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 9
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Serengeti – Ngorongoro Crater
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, depart the Serengeti and travel towards the
                Ngorongoro Conservation Area. Proceed into the spectacular
                Ngorongoro Crater for a game drive.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                The crater is renowned for its remarkable concentration of
                wildlife and offers opportunities to encounter lions, elephants,
                buffaloes, zebras, wildebeest, hyenas, warthogs, and various
                antelope species. The crater is also an important habitat for the
                endangered black rhino, providing an opportunity to search for
                this rare species.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Enjoy lunch during the day before continuing your exploration.
                Later, ascend from the crater and proceed to your accommodation
                for dinner and overnight stay.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Ngorongoro Serena Safari Lodge
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* DAY 10 */}
        <article className="relative rounded-[2rem] border border-[#dba33a]/15 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex shrink-0 items-start gap-4 lg:w-56 lg:flex-col lg:gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dba33a] text-sm font-black text-[#092d1a]">
                10
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 10
                </p>
                <h4 className="mt-1 text-lg font-black text-[#092d1a]">
                  Ngorongoro – Arusha
                </h4>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, depart your accommodation and begin your
                journey towards Arusha. Enjoy lunch during the journey before
                continuing to Arusha, where you will be dropped off at your
                hotel, residence, or another agreed location, or proceed to
                Arusha Airport for your onward flight.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                This marks the end of your 10-Day Best of Kenya, Tarangire,
                Serengeti & Ngorongoro Luxury Safari.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Accommodation
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    No accommodation
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Meal Plan
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Breakfast & Lunch
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#dba33a]">
                    Drinking Water
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092d1a]">
                    Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>

    {/* ========================================================
        SAFARI HIGHLIGHTS
    ======================================================== */}
    <div className="mt-20">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#dba33a]" />
        <h3 className="text-3xl font-black text-[#092d1a] sm:text-4xl">
          Safari Highlights
        </h3>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Masai Mara",
            text: "Legendary savannah landscapes, abundant wildlife and opportunities to witness the Great Wildebeest Migration.",
          },
          {
            title: "Lake Nakuru",
            text: "A spectacular Rift Valley destination renowned for black and white rhinos and diverse birdlife.",
          },
          {
            title: "Amboseli",
            text: "Impressive elephant herds and unforgettable views of Mount Kilimanjaro across open plains and wetlands.",
          },
          {
            title: "Tarangire",
            text: "Beautiful landscapes, distinctive baobab trees and some of northern Tanzania’s finest elephant viewing.",
          },
          {
            title: "Serengeti",
            text: "Vast open plains, exceptional predator viewing and the possibility of encountering migrating wildebeest.",
          },
          {
            title: "Ngorongoro Crater",
            text: "A remarkable concentration of wildlife with opportunities to search for the endangered black rhino.",
          },
        ].map((item, index) => (
          <div
            key={item.title}
            className="group rounded-[1.75rem] border border-[#dba33a]/15 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#dba33a]/40 hover:shadow-[0_20px_60px_-30px_rgba(9,45,26,0.45)]"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#092d1a] text-sm font-black text-[#dba33a]">
                0{index + 1}
              </span>
              <h4 className="text-xl font-black text-[#092d1a]">
                {item.title}
              </h4>
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* ========================================================
        INCLUSIONS / EXCLUSIONS
    ======================================================== */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] bg-[#092d1a] p-7 text-white shadow-[0_25px_70px_-35px_rgba(9,45,26,0.7)] sm:p-9">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dba33a] text-xl font-black text-[#092d1a]">
            ✓
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Included
            </p>
            <h3 className="mt-1 text-2xl font-black">
              What’s Included
            </h3>
          </div>
        </div>

        <div className="mt-7 space-y-3">
          {[
            "Park fees (for non-residents)",
            "All activities (unless labeled as optional)",
            "All accommodation (unless listed as upgrade)",
            "A professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals (as specified in the itinerary)",
            "Drinks (as specified in the itinerary)",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <span className="mt-0.5 text-[#dba33a]">✓</span>
              <span className="text-sm leading-6 text-white/80">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-[#dba33a]/15 bg-white p-7 shadow-[0_20px_70px_-35px_rgba(9,45,26,0.35)] sm:p-9">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7faf7] text-xl font-black text-[#092d1a]">
            ×
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Excluded
            </p>
            <h3 className="mt-1 text-2xl font-black text-[#092d1a]">
              What’s Not Included
            </h3>
          </div>
        </div>

        <div className="mt-7 space-y-3">
          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips (US$10.00–15.00 per person per day)",
            "Personal items, souvenirs, travel insurance, visa fees, etc.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-[#f7faf7] p-4"
            >
              <span className="mt-0.5 font-bold text-[#dba33a]">×</span>
              <span className="text-sm leading-6 text-gray-600">{item}</span>
            </div>
          ))}

          <div className="rounded-2xl border border-[#dba33a]/20 bg-[#fffaf0] p-5">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#092d1a]">
              Optional Safari Activities
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-700">
                  Balloon Safari
                </span>
                <span className="text-sm font-black text-[#092d1a]">
                  USD 500 / person
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-700">
                  Maasai Village Visit
                </span>
                <span className="text-sm font-black text-[#092d1a]">
                  USD 50 / vehicle
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ========================================================
        CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-[#dba33a]" />

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Kenya & Tanzania
        </p>

        <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
          Ready to Experience East Africa?
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          Let Daffar Tours and Travel turn this ten-day luxury safari into an
          unforgettable journey through Kenya and northern Tanzania.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-3.5 text-sm font-black text-[#092d1a] transition hover:bg-[#f5c45d]"
          >
            Plan This Safari
          </Link>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-black text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>

  </div>
</section>


{/* ============================================================
    8-DAY NDUTU CALVING SEASON SAFARI
============================================================ */}

<section
  id="ndutu-8-day"
  className="relative overflow-hidden bg-white py-20 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0b4224]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-[#0b4224]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b4224]">
        Serengeti Migration Safari
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b4224] sm:text-5xl lg:text-6xl">
        8-Day Ndutu Calving Season
        <span className="mt-2 block text-[#dba33a]">
          Serengeti Migration Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience the spectacular Great Migration during the calving season,
        with opportunities to witness vast wildebeest herds, newborn calves,
        and the predators that follow them. Explore Tarangire, the Serengeti,
        the Western Serengeti and Ngorongoro Crater on an unforgettable
        Tanzanian safari adventure.
      </p>

    </div>


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}

    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🦓",
          title: "Experience",
          value: "Great Migration",
        },
        {
          icon: "📅",
          title: "Duration",
          value: "8 Days / 7 Nights",
        },
        {
          icon: "📍",
          title: "Main Areas",
          value: "Ndutu & Serengeti",
        },
        {
          icon: "🦁",
          title: "Highlight",
          value: "Calving Season",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="group rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#dba33a]/40 hover:shadow-lg"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0b4224]/10 text-2xl">
              {item.icon}
            </div>

            <div>

              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {item.title}
              </p>

              <p className="mt-1 font-bold text-[#0b4224]">
                {item.value}
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>


    {/* ========================================================
        INTRODUCTION
    ======================================================== */}

    <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-[#0b4224]/10 bg-[#f5f8f5] p-7 sm:p-10 lg:p-12">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-2xl text-white shadow-lg">
          🦓
        </div>

        <div>

          <h3 className="text-2xl font-bold text-[#0b4224]">
            About the Ndutu Calving Season Safari
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            This eight-day safari is designed around the spectacular Great
            Migration calving season, offering opportunities to witness large
            wildebeest herds, newborn calves, zebras, gazelles and the
            predators that follow the migration.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            The journey combines the diverse landscapes of Tarangire National
            Park with the legendary Serengeti, Western Serengeti and the
            wildlife-rich Ngorongoro Crater.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-[#dba33a] bg-white p-5 shadow-sm">

            <p className="text-sm leading-7 text-gray-600">

              <strong className="text-[#0b4224]">
                Safari highlight:
              </strong>{" "}

              The calving season offers memorable opportunities to observe
              newborn wildebeest calves and the intense predator activity that
              accompanies the migration.

            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        ITINERARY HEADER
    ======================================================== */}

    <div className="mt-24 text-center">

      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
        Your Tanzanian Safari
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-[#0b4224] sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
        Follow your journey from Arusha through Tarangire, the Serengeti
        migration areas, Western Serengeti and Ngorongoro before returning
        to Arusha.
      </p>

    </div>


    {/* ========================================================
        ITINERARY TIMELINE
    ======================================================== */}

    <div className="relative mx-auto mt-14 max-w-5xl">

      {/* TIMELINE */}
      <div className="absolute left-6 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />


      {/* ======================================================
          DAY 1
      ====================================================== */}

      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
          01
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-[#0b4224]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
              Day 1
            </span>

            <span className="text-sm text-gray-400">
              Arrival in Tanzania
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-[#0b4224]">
            Arrival in Arusha
          </h4>

          <p className="mt-4 leading-8 text-gray-600">
            Upon arrival, you’ll be welcomed and transferred to your
            accommodation in Arusha. After settling in, enjoy a relaxed
            evening and prepare for the safari ahead.
          </p>

          <div className="mt-7 grid gap-3 border-t border-gray-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Arusha Explores Lodge
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Lunch & Dinner
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 2
      ====================================================== */}

      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-[#0b4224]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
            Day 2
          </span>

          <h4 className="mt-4 text-2xl font-bold text-[#0b4224]">
            Arusha to Tarangire National Park
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            After breakfast, depart for Tarangire National Park for your
            first game drive. The park is known for its impressive elephant
            populations and beautiful baobab-dotted landscapes.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            As you explore, you may encounter elephants, lions, giraffes,
            zebras, wildebeest, buffaloes, antelopes and a variety of bird
            species before continuing to your lodge.
          </p>

          <div className="mt-7 grid gap-3 border-t border-gray-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Marera Valley Lodge
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Breakfast, Lunch & Dinner
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 3
      ====================================================== */}

      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
          03
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-[#0b4224]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
            Day 3
          </span>

          <h4 className="mt-4 text-2xl font-bold text-[#0b4224]">
            Tarangire to Serengeti National Park
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            After breakfast, journey towards the legendary Serengeti National
            Park. As you enter the vast plains, begin your wildlife exploration
            with game drives along the way.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            In the Serengeti, you may encounter lions, leopards, cheetahs,
            elephants, buffaloes, giraffes, zebras, wildebeest, hyenas and
            numerous other species.
          </p>

          <div className="mt-7 grid gap-3 border-t border-gray-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Serengeti Camp
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Breakfast, Lunch & Dinner
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 4
      ====================================================== */}

      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
          04
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-[#0b4224]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
            Day 4
          </span>

          <h4 className="mt-4 text-2xl font-bold text-[#0b4224]">
            Central Serengeti – Migration & Wildlife
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            Spend the day exploring the Central Serengeti, searching for
            wildlife and following the movements of the Great Migration.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            During the calving season, the area offers opportunities to witness
            large wildebeest herds, newborn calves, zebras, gazelles and
            predators such as lions, cheetahs, leopards and hyenas.
          </p>

          <div className="mt-7 grid gap-3 border-t border-gray-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Nimali Central Serengeti
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Breakfast, Lunch & Dinner
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 5
      ====================================================== */}

      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-[#0b4224]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
            Day 5
          </span>

          <h4 className="mt-4 text-2xl font-bold text-[#0b4224]">
            Serengeti to Western Corridor
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            Continue your safari towards the Western Serengeti, following
            migration routes and exploring the diverse landscapes of the region.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Keep watch for wildebeest, zebras, elephants, buffaloes, giraffes,
            lions, leopards, cheetahs and other plains wildlife.
          </p>

          <div className="mt-7 grid gap-3 border-t border-gray-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Kirawira Serena Camp
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Breakfast, Lunch & Dinner
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 6
      ====================================================== */}

      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
          06
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-[#0b4224]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
            Day 6
          </span>

          <h4 className="mt-4 text-2xl font-bold text-[#0b4224]">
            Full-Day Western Serengeti Safari
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            Enjoy a full day of wildlife exploration in the Western Serengeti.
            Continue searching for migration herds while exploring the
            surrounding plains and woodland areas.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            You may encounter wildebeest and zebra herds, elephants, buffaloes,
            giraffes, lions, leopards, cheetahs, hyenas and numerous bird
            species.
          </p>

          <div className="mt-7 grid gap-3 border-t border-gray-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Kirawira Serena Camp
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Breakfast, Lunch & Dinner
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 7
      ====================================================== */}

      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#dba33a] font-bold text-[#0b4224] shadow-lg md:flex">
          07
        </div>

        <div className="rounded-3xl border border-[#dba33a]/30 bg-[#fffaf0] p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-[#0b4224] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Day 7
            </span>

            <span className="text-sm font-semibold text-[#dba33a]">
              Ngorongoro Crater
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-[#0b4224] sm:text-3xl">
            Serengeti to Ngorongoro Crater
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            After breakfast, depart the Serengeti and continue towards the
            Ngorongoro Conservation Area. Upon arrival, descend into the crater
            for a game drive across its remarkable wildlife-rich floor.
          </p>

          <div className="my-8 rounded-2xl bg-[#0b4224] p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-[#dba33a]">
              Wildlife Highlight
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              NGORONGORO CRATER
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Explore one of Tanzania’s most remarkable wildlife areas, with
              opportunities to encounter lions, elephants, buffaloes, zebras,
              wildebeest, hippos, flamingos, hyenas and the endangered black
              rhino.
            </p>

          </div>

          <p className="leading-8 text-gray-600">
            After your crater exploration, ascend and settle into your
            accommodation for the evening, enjoying dinner and the peaceful
            surroundings of the Ngorongoro Conservation Area.
          </p>

          <div className="mt-7 grid gap-3 border-t border-[#dba33a]/20 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Ngorongoro Serena Safari Lodge
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Breakfast, Lunch & Dinner
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 8
      ====================================================== */}

      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
          08
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-[#0b4224]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
            Day 8
          </span>

          <h4 className="mt-4 text-2xl font-bold text-[#0b4224]">
            Ngorongoro to Arusha
          </h4>

          <p className="mt-4 leading-8 text-gray-600">
            After breakfast, begin your journey back to Arusha. Enjoy the
            changing landscapes along the way as your safari comes to an end.
            Arrive in Arusha later in the day for your onward journey or
            airport transfer.
          </p>

          <div className="mt-7 grid gap-3 border-t border-gray-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                None – Safari Ends
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                Breakfast & Lunch
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        INCLUDED / NOT INCLUDED
    ======================================================== */}

    <div className="mt-24 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}

      <div className="rounded-3xl border border-[#0b4224]/15 bg-[#f3f8f4] p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#0b4224]">
              Included
            </p>

            <h3 className="text-2xl font-bold text-[#0b4224]">
              Your Safari Includes
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "Park fees for non-residents",
            "All safari activities unless clearly labeled as optional",
            "All accommodation unless clearly labeled as optional",
            "Professional driver/guide",
            "All transportation during the safari",
            "All applicable taxes and VAT",
            "Roundtrip airport transfers",
            "Meals as specified in the day-by-day itinerary",
          ].map((item) => (

            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-gray-700"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs font-bold text-white">
                ✓
              </span>

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </div>


      {/* NOT INCLUDED */}

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-xl text-white">
            +
          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Not Included
            </p>

            <h3 className="text-2xl font-bold text-[#0b4224]">
              Additional Expenses
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips and gratuities",
            "Personal items and souvenirs",
            "Travel insurance",
            "Visa fees and personal documentation costs",
            "Government-imposed increases of taxes and/or park fees",
          ].map((item) => (

            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-gray-600"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-300 text-xs font-bold text-gray-700">
                —
              </span>

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </div>

    </div>


    {/* ========================================================
        FINAL CTA
    ======================================================== */}

    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082d19] px-7 py-12 text-center sm:px-12 sm:py-16">

      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Serengeti Migration Adventure
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Witness the Magic of the Great Migration
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
          Follow the migration through Tanzania during the spectacular calving
          season and experience unforgettable wildlife encounters across
          Tarangire, Serengeti, Western Serengeti and Ngorongoro.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-3.5 font-bold text-[#082d19] transition hover:-translate-y-0.5 hover:bg-[#e9b84f]"
          >
            Plan Your Safari
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
          >
            Request a Quote
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>




{/* ============================================================
    10-DAY GREAT WILDEBEEST MIGRATION SAFARI
============================================================ */}
<section
  id="10-day-wildebeest-migration"
  className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[30%] h-[30rem] w-[30rem] rounded-full bg-emerald-100/60 blur-3xl" />
  <div className="pointer-events-none absolute bottom-20 left-[40%] h-72 w-72 rounded-full bg-[#dba33a]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HERO / HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#0b4224]/20 bg-[#0b4224]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
        Great Wildebeest Migration
      </span>

      <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">
        10-Day Great Wildebeest Migration
        <span className="block text-[#dba33a]">
          Mara River Crossing & Serengeti
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        This unforgettable journey is crafted to immerse you in one of
        nature's most spectacular events: the Great Migration. With four
        nights in the Serengeti, you'll have ample opportunity to witness
        thousands of animals sweeping across the vast northern plains from
        August through October, offering a front-row seat to the pulse of
        the wild.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🦓",
          label: "Experience",
          value: "Great Migration",
        },
        {
          icon: "📅",
          label: "Duration",
          value: "10 Days / 9 Nights",
        },
        {
          icon: "📍",
          label: "Main Areas",
          value: "Serengeti & Ngorongoro",
        },
        {
          icon: "🌊",
          label: "Highlight",
          value: "Mara River Crossing",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white shadow-md">
            {item.icon}
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            {item.label}
          </p>

          <p className="mt-1 font-semibold text-[#0b4224]">
            {item.value}
          </p>
        </div>
      ))}
    </div>

    {/* ============================================================
        INTRODUCTION
    ============================================================ */}
    <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

      {/* ABOUT */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-7 sm:p-10">

        <div className="mb-5 flex items-center gap-3">

          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b4224] text-lg text-white">
            🦁
          </span>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Safari Experience
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              About This Safari
            </h3>
          </div>

        </div>

        <p className="leading-8 text-slate-600">
          Experience the extraordinary drama of the Great Wildebeest
          Migration on an immersive ten-day journey through Tanzania's
          most remarkable wildlife destinations.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          From the elephant-rich landscapes of Tarangire to the endless
          plains of the Serengeti, you'll follow the migration toward the
          Northern Serengeti during the prime river-crossing season from
          August through October.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          The journey continues through the spectacular Ngorongoro Crater
          and Lake Manyara before returning to Arusha, giving you an
          exceptional combination of wildlife, landscapes and cultural
          experiences.
        </p>

      </div>

      {/* HIGHLIGHT */}
      <div className="relative overflow-hidden rounded-3xl bg-[#0b4224] p-8 text-white shadow-xl sm:p-10">

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#dba33a]/10" />

        <div className="relative">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Migration Highlight
          </p>

          <h3 className="mt-4 font-serif text-3xl font-bold">
            Witness the Mara River Crossing
          </h3>

          <p className="mt-5 leading-8 text-white/75">
            During August to October, Northern Serengeti becomes one of
            the world's most spectacular wildlife theatres as massive
            herds gather along the Mara River.
          </p>

          <div className="mt-8 space-y-4">

            {[
              "Follow the migration through Northern Serengeti",
              "Search for dramatic Mara River crossings",
              "Experience four nights in the Serengeti",
              "Explore Tarangire National Park",
              "Discover the Ngorongoro Crater",
              "Finish with a Lake Manyara safari",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs font-bold text-[#0b4224]">
                  ✓
                </span>

                <span className="text-sm leading-6 text-white/85">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

    {/* ============================================================
        ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Day-by-Day Itinerary
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Ten days of extraordinary wildlife encounters, migration
          experiences and spectacular Tanzanian landscapes.
        </p>

      </div>

      <div className="relative mx-auto mt-12 max-w-5xl">

        {/* TIMELINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 sm:left-8 sm:block" />

        <div className="space-y-8">

          {/* ======================================================
              DAY 1
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              01
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 1
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Arrival in Arusha
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                Upon landing at the airport, a friendly representative from
                Daffar Tours and Travel will be waiting to welcome you.
                You'll be transferred to your hotel where you can unwind,
                settle in and get ready for the adventures ahead.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Accommodation
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Mid-range: Arusha Planet Lodge
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    At your own cost
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 2
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              02
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 2
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Journey to Tarangire National Park
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                After breakfast, your private safari guide will collect you
                from your accommodation in Arusha for a scenic drive to
                Tarangire National Park. The route takes you through the
                picturesque Masai plains, dotted with acacia trees and
                glimpses of daily life.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Renowned for its impressive elephant populations, Tarangire
                is also home to giraffes, zebras, wildebeest, buffalo and
                many other species. Explore lush swamps, open savanna and
                the life-sustaining Tarangire River, with opportunities to
                spot lions and leopards.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Accommodation
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Mid-range: Eileen's Tree Inn
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    All meals provided
                  </p>
                  <p className="text-xs text-slate-500">
                    Drinks available at extra charge
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 3
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              03
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 3
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Exploring Central Serengeti – Seronera Region
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                After breakfast, your journey continues toward the lush
                highlands known for wheat and corn cultivation by the Iraqw
                community. You'll travel through the misty forests of the
                Ngorongoro Conservation Area, with chances to spot baboons,
                leopards and elephants.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Passing the breathtaking Ngorongoro Crater, you'll continue
                to Serengeti National Park. By midday, you'll arrive in an
                expansive reserve featuring wide grasslands, swamps, lakes,
                woodlands and rolling hills. A rewarding game drive completes
                the day's adventure.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Accommodation
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Luxury: Embalakai Serengeti Camp
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    All meals provided
                  </p>
                  <p className="text-xs text-slate-500">
                    Drinks at additional cost
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 4
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              04
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Day 4
                  </span>

                  <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                    Northern Serengeti – Following the Migration
                  </h4>
                </div>

                <span className="w-fit rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-semibold text-[#0b4224]">
                  August – October
                </span>

              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Your safari continues north from Seronera, covering roughly
                100 kilometers. Northern Serengeti is known for tranquil
                landscapes, scattered rivers, hills and distinctive rock
                formations known as kopjes.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                During the migration season, especially from August through
                October, you may have the rare opportunity to witness dramatic
                river crossings as massive herds of wildebeest and zebra
                brave the currents of the Mara River while evading predators
                such as crocodiles.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Accommodation
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Mid-range: Mara Heritage Camp
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    All meals included
                  </p>
                  <p className="text-xs text-slate-500">
                    Beverages not included
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 5
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              05
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Day 5
                  </span>

                  <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                    Northern Serengeti – Mara River Experience
                  </h4>
                </div>

                <span className="w-fit rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-semibold text-[#0b4224]">
                  Migration Season
                </span>

              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Following an early breakfast, your day begins with a game
                drive deep into Northern Serengeti. If fortune favors you,
                you may witness one of nature's most thrilling spectacles:
                the Mara River crossing.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Vast herds of wildebeest often gather along the riverbanks
                before one courageous animal makes the first move. Suddenly,
                thousands may plunge into the current, battling the waters
                and lurking crocodiles in a dramatic struggle for survival.
              </p>

              <div className="mt-6 rounded-2xl border border-[#dba33a]/20 bg-[#fffaf0] p-5">

                <p className="font-bold text-[#0b4224]">
                  🌊 Mara River Crossing
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  River crossings are natural events and cannot be guaranteed.
                  Your guide will position you in areas where migration activity
                  is taking place and maximize the opportunity to witness this
                  spectacular event.
                </p>

              </div>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Accommodation
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Mid-range: Mara Heritage Camp
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    All meals included
                  </p>
                  <p className="text-xs text-slate-500">
                    Beverages not included
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 6
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              06
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 6
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Return to Central Serengeti – Seronera Region
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                After breakfast, your journey heads back toward Seronera,
                where more wildlife encounters await. The central Serengeti
                remains a thriving hub of animal activity, providing excellent
                chances to observe migratory herds and the predators that
                shadow them.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Keep watch for lions, leopards and cheetahs fulfilling their
                essential role in the ecosystem. As the day winds down, return
                to camp for dinner and relax beside the fireside beneath the
                starlit African sky.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Accommodation
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Luxury: Embalakai Serengeti Camp
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    All meals provided
                  </p>
                  <p className="text-xs text-slate-500">
                    Drinks excluded
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 7
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              07
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 7
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Serengeti to Ngorongoro Crater
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                After breakfast, your journey continues with another exciting
                game drive through the Serengeti. In the afternoon, you'll
                make your way toward the Ngorongoro Crater.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                As you reach the crater rim, you'll catch your first look at
                the spectacular scenery awaiting you the next day, including
                flowing streams, vast open grasslands and abundant wildlife.
                Tonight, you'll rest at a cozy lodge perched on the edge of
                the crater.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Accommodation
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Luxury: Rhino Lodge
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    All meals included
                  </p>
                  <p className="text-xs text-slate-500">
                    Drinks not included
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 8
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              08
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 8
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Ngorongoro Crater
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                Before sunrise, after a quick breakfast, you'll descend into
                the Ngorongoro Crater for a full day of unforgettable wildlife
                encounters. This natural wonder offers exceptional opportunities
                for close-up viewing in a self-contained ecosystem.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The crater spans approximately 260 square kilometers and
                reaches a depth of around 610 meters. It is one of Africa's
                finest locations for seeing the Big Five, as well as reedbuck,
                gazelle, wildebeest and hundreds of bird species.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Around midday, enjoy a picnic near the hippo pool before making
                the steep climb out of the crater. Your evening will be spent
                in the peaceful town of Karatu.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Accommodation
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Mid-range: Eileen's Tree Inn
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    All meals included
                  </p>
                  <p className="text-xs text-slate-500">
                    Drinks not included
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 9
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              09
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 9
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Lake Manyara National Park to Arusha
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                After breakfast, you'll drive to Lake Manyara National Park,
                a relatively small but remarkably diverse park located west
                of Arusha. The park is named after its shallow soda lake,
                which expands and contracts with the seasons.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The lake attracts thousands of flamingos and hundreds of
                bird species. During your exploration, you may encounter
                monkeys, giraffes, zebras, wildebeest, buffalo, elephants
                and, with some luck, lions lounging in the trees.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                After lunch, you'll return to Arusha, arriving in the late
                afternoon.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Accommodation
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Mid-range: Arusha Planet Lodge
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-1 font-semibold text-[#0b4224]">
                    Breakfast & Lunch
                  </p>
                  <p className="text-xs text-slate-500">
                    Drinks not included
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 10
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              10
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 10
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Onwards Travel
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                You will be collected from your accommodation by a Daffar
                Tours and Travel representative and driven to the airport
                for your onward journey.
              </p>

              <div className="mt-7 border-t border-slate-100 pt-6">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Meals & Drinks
                </p>

                <p className="mt-1 font-semibold text-[#0b4224]">
                  As arranged for departure
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-7 sm:p-9">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b4224] text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Your Safari Includes
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              Included
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-4">

          {[
            "Park fees (for non-residents)",
            "All activities (unless labeled as optional)",
            "All accommodation (unless listed as upgrade)",
            "A professional driver/guide",
            "All transportation (unless labeled as optional)",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the day-by-day section",
            "Drinks as specified in the day-by-day section",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs font-bold text-white">
                ✓
              </span>

              <span className="text-sm leading-6 text-slate-600">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-700 text-white">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Please Note
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              Excluded
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-4">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips (Tipping guideline: US$15.00 per person per day)",
            "Personal items (souvenirs, travel insurance, visa fees, etc.)",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-xs font-bold text-slate-700">
                ×
              </span>

              <span className="text-sm leading-6 text-slate-600">
                {item}
              </span>
            </div>
          ))}

        </div>

        {/* OPTIONAL ACTIVITIES */}
        <div className="mt-7 rounded-2xl border border-[#dba33a]/20 bg-[#fffaf0] p-5">

          <p className="font-bold text-[#0b4224]">
            Optional Safari Activities
          </p>

          <div className="mt-4 space-y-3 text-sm text-slate-600">

            <div className="flex items-center justify-between gap-4">
              <span>Balloon Safari</span>
              <span className="font-bold text-[#dba33a]">
                USD 500 / person
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>Maasai Village Visit</span>
              <span className="font-bold text-[#dba33a]">
                USD 50 / vehicle
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>Night Game Drive – Tarangire or Lake Manyara</span>
              <span className="font-bold text-[#dba33a]">
                USD 120 / person
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>Ngorongoro Crater Rim Walk</span>
              <span className="font-bold text-[#dba33a]">
                USD 30 / person
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>Olduvai Gorge & Museum Visit</span>
              <span className="font-bold text-[#dba33a]">
                USD 40 / person
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* ============================================================
        MIGRATION NOTE
    ============================================================ */}
    <div className="mt-12 rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-7 sm:p-9">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
          🌍
        </div>

        <div>

          <h3 className="font-serif text-xl font-bold text-[#0b4224]">
            Important Migration Note
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            The Great Wildebeest Migration is a natural phenomenon and
            wildlife movements are unpredictable. Mara River crossings
            cannot be guaranteed, even during the peak migration months.
            Our experienced safari guides continuously monitor wildlife
            movements and will position you in the best possible areas
            based on current conditions.
          </p>

          <p className="mt-3 text-sm font-semibold text-[#0b4224]">
            Best migration period for this itinerary: August – October.
          </p>

        </div>

      </div>
    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-2xl sm:px-12 sm:py-16">

      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/5" />
      <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#dba33a]/10" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-4xl">
          🦓
        </span>

        <h3 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Witness the Greatest Wildlife Spectacle on Earth
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
          Follow the Great Wildebeest Migration across the Serengeti,
          experience the drama of the Mara River and discover Tanzania's
          most iconic wildlife destinations.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-3.5 text-sm font-bold text-[#0b4224] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#e7b451]"
          >
            Plan Your Safari →
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
          >
            Request a Quote
          </Link>

        </div>

      </div>
    </div>

  </div>
</section>


{/* ============================================================
    9-DAY SERENGETI MIGRATION FOOTSTEPS
============================================================ */}
<section
  id="9-day-serengeti-migration"
  className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[28%] h-[30rem] w-[30rem] rounded-full bg-emerald-100/60 blur-3xl" />
  <div className="pointer-events-none absolute bottom-20 left-[40%] h-72 w-72 rounded-full bg-[#dba33a]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#0b4224]/20 bg-[#0b4224]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
        Great Migration Safari
      </span>

      <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">
        9-Day Serengeti
        <span className="block text-[#dba33a]">
          Migration Footsteps
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        This specially crafted itinerary is designed to track the legendary
        Great Migration. With four nights in the Serengeti, you'll explore
        its central regions while also spending time where the migration is
        happening — whether that's in the southern Ndutu area between
        December and March or the remote northern tip from July to November.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🦓",
          label: "Experience",
          value: "Great Migration",
        },
        {
          icon: "📅",
          label: "Duration",
          value: "9 Days / 8 Nights",
        },
        {
          icon: "📍",
          label: "Main Areas",
          value: "Serengeti & Ndutu",
        },
        {
          icon: "🌍",
          label: "Highlight",
          value: "Migration Tracking",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white shadow-md">
            {item.icon}
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            {item.label}
          </p>

          <p className="mt-1 font-semibold text-[#0b4224]">
            {item.value}
          </p>
        </div>
      ))}
    </div>

    {/* ============================================================
        INTRODUCTION
    ============================================================ */}
    <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

      {/* ABOUT */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-7 sm:p-10">

        <div className="mb-5 flex items-center gap-3">

          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b4224] text-lg text-white">
            🦁
          </span>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Safari Experience
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              About This Safari
            </h3>
          </div>

        </div>

        <p className="leading-8 text-slate-600">
          Follow the footsteps of the Great Wildebeest Migration on a
          nine-day safari through Tanzania's legendary wildlife landscapes.
          This journey combines the extraordinary wildlife of Tarangire,
          Serengeti and Ngorongoro with dedicated time to follow the
          seasonal movements of the migration.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          With four nights in the Serengeti, the itinerary gives you
          valuable time to explore the central plains while also allowing
          your safari guide to adapt the route according to where the
          migration is moving.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          Depending on the season, your safari may take you toward the
          northern Serengeti or south toward the Ndutu area, maximizing
          your opportunity to encounter migrating herds and the predators
          that follow them.
        </p>

      </div>

      {/* HIGHLIGHT */}
      <div className="relative overflow-hidden rounded-3xl bg-[#0b4224] p-8 text-white shadow-xl sm:p-10">

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#dba33a]/10" />

        <div className="relative">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Migration Tracking
          </p>

          <h3 className="mt-4 font-serif text-3xl font-bold">
            Follow the Migration
          </h3>

          <p className="mt-5 leading-8 text-white/75">
            The Great Migration changes location throughout the year.
            This itinerary is designed to give your guide flexibility to
            follow the herds and explore the most productive wildlife areas.
          </p>

          <div className="mt-8 space-y-4">

            {[
              "Four nights exploring the Serengeti",
              "Track migrating wildebeest and zebra herds",
              "Explore Central Serengeti and Seronera",
              "Seasonal access to Northern Serengeti",
              "Explore the Southern Serengeti and Ndutu",
              "Discover the Ngorongoro Crater",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs font-bold text-[#0b4224]">
                  ✓
                </span>

                <span className="text-sm leading-6 text-white/85">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

    {/* ============================================================
        ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Day-by-Day Itinerary
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Nine days of wildlife encounters, migration tracking and
          breathtaking Tanzanian landscapes.
        </p>

      </div>

      <div className="relative mx-auto mt-12 max-w-5xl">

        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 sm:left-8 sm:block" />

        <div className="space-y-8">

          {/* ======================================================
              DAY 1
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              01
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 1
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Arrival in Arusha
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                Upon landing at the airport, you'll be warmly welcomed by
                a Daffar Tours and Travel representative and transferred
                to your hotel in Arusha. Relax, freshen up and prepare for
                the incredible safari journey that begins tomorrow.
              </p>

              <div className="mt-7 rounded-2xl bg-[#f7faf7] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Where You'll Stay
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Luxury
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                      Grand Melia Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Mount Meru Hotel
                    </p>
                    <p className="text-sm text-slate-500">
                      Arusha Coffee Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Mid-range
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                      Ilboru Safari Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Arusha Planet Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Airport Planet Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Budget
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                      Outpost Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Tulia Boutique Hotel
                    </p>
                    <p className="text-sm text-slate-500">
                      Green Mountain Hotel
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 2
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              02
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 2
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Discover Tarangire National Park
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                After breakfast, set off to explore the breathtaking
                Tarangire National Park. Known for ancient baobab trees
                and varied landscapes spread across nine ecological zones,
                Tarangire is a paradise for wildlife lovers.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The life-giving Tarangire River draws huge numbers of
                elephants and the park is famous for hosting some of the
                largest elephant herds in Tanzania. Keep your camera ready
                for lions, leopards, buffalo, zebras, giraffes, antelopes
                and countless bird species.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                At midday, enjoy a scenic picnic near the river before
                continuing your game drive. Later, as the sun sets over
                the park, return to your lodge to rest and share stories
                of the day.
              </p>

              <div className="mt-7 rounded-2xl bg-[#f7faf7] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Where You'll Stay
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Luxury
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Kitela Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Lake Manyara Kilima Moja
                    </p>
                    <p className="text-sm text-slate-500">
                      The Retreat at Ngorongoro
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Mid-range
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Eileen's Tree Inn
                    </p>
                    <p className="text-sm text-slate-500">
                      Endoro Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Karatu Simba Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Budget Camping
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Lilac Campsite
                    </p>
                    <p className="text-sm text-slate-500">
                      Panorama Campsite
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 3
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              03
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 3
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Journey into the Serengeti
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                After breakfast, head toward the legendary Serengeti
                National Park, celebrated worldwide for its vast golden
                plains and its role as the heart of the Great Migration.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The endless savannah supports more than a million
                wildebeest, hundreds of thousands of zebras and large
                numbers of gazelles. This abundance of prey attracts
                lions, cheetahs, hyenas and other iconic predators.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                After a thrilling day of game drives, arrive at camp for
                dinner by the fire beneath a sky filled with stars.
              </p>

              <div className="mt-7 rounded-2xl bg-[#f7faf7] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Where You'll Stay
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Luxury
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Kubu Kubu Tented Camp
                    </p>
                    <p className="text-sm text-slate-500">
                      Melia Serengeti Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Four Seasons Serengeti
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Mid-range
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Serengeti Heritage Tented Camp
                    </p>
                    <p className="text-sm text-slate-500">
                      Embalakai Camp
                    </p>
                    <p className="text-sm text-slate-500">
                      Acacia Central Camp
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Budget Camping
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Nyani Campsite
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 4
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              04
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 4
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Central Serengeti – Wildlife Encounters
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                Enjoy a full-day exploration through the heart of the
                Serengeti. The central region is famous for incredible
                wildlife activity throughout the year.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Depending on the season, vast herds shift with the rains,
                moving south between November and December and returning
                north from April to June. These patterns may vary each year,
                and your expert guide will determine the best areas for
                wildlife sightings.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                You may also visit the Serengeti Visitor Centre to learn
                more about the park's history and conservation efforts.
              </p>

              <div className="mt-7 rounded-2xl bg-[#f7faf7] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Accommodation Options
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Luxury
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Kubu Kubu Tented Camp
                    </p>
                    <p className="text-sm text-slate-500">
                      Melia Serengeti Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Four Seasons Serengeti
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Mid-range
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Serengeti Heritage Tented Camp
                    </p>
                    <p className="text-sm text-slate-500">
                      Embalakai Camp
                    </p>
                    <p className="text-sm text-slate-500">
                      Acacia Central Camp
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Budget Camping
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Nyani Campsite
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 5
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              05
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Day 5
                  </span>

                  <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                    Tracking the Great Migration
                  </h4>
                </div>

                <span className="w-fit rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-semibold text-[#0b4224]">
                  Seasonal Route
                </span>

              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Continue deeper into the Serengeti's sweeping plains,
                following the movements of the Great Migration. Depending
                on the time of year, your route may head north toward the
                Kenyan border or southward into the Ndutu area.
              </p>

              <div className="mt-7 space-y-4">

                {/* MAY - JUNE */}
                <div className="rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="font-bold text-[#0b4224]">
                    May – June · Central Serengeti
                  </p>

                  <div className="mt-3 grid gap-4 sm:grid-cols-3 text-sm">

                    <div>
                      <p className="font-bold text-[#dba33a]">Luxury</p>
                      <p className="mt-1 text-slate-600">
                        Kubu Kubu Tented Camp
                      </p>
                      <p className="text-slate-500">
                        Melia Serengeti Lodge
                      </p>
                      <p className="text-slate-500">
                        Four Seasons Serengeti
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-[#dba33a]">Mid-range</p>
                      <p className="mt-1 text-slate-600">
                        Serengeti Heritage Tented Camp
                      </p>
                      <p className="text-slate-500">
                        Embalakai Camp
                      </p>
                      <p className="text-slate-500">
                        Acacia Central Camp
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-[#dba33a]">
                        Budget Camping
                      </p>
                      <p className="mt-1 text-slate-600">
                        Nyani Campsite
                      </p>
                    </div>

                  </div>
                </div>

                {/* AUGUST - OCTOBER */}
                <div className="rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="font-bold text-[#0b4224]">
                    August – October · Northern Serengeti
                  </p>

                  <div className="mt-3 grid gap-4 sm:grid-cols-2 text-sm">

                    <div>
                      <p className="font-bold text-[#dba33a]">Luxury</p>
                      <p className="mt-1 text-slate-600">
                        Mara Mara Tented Lodge
                      </p>
                      <p className="text-slate-500">
                        Mara Under Canvas
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-[#dba33a]">Mid-range</p>
                      <p className="mt-1 text-slate-600">
                        Serengeti Heritage Tented Camp (Mara)
                      </p>
                      <p className="text-slate-500">
                        Acacia Migration Camp
                      </p>
                    </div>

                  </div>
                </div>

                {/* JANUARY - APRIL */}
                <div className="rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="font-bold text-[#0b4224]">
                    January – April · Southern Serengeti (Ndutu)
                  </p>

                  <div className="mt-3 grid gap-4 sm:grid-cols-2 text-sm">

                    <div>
                      <p className="font-bold text-[#dba33a]">Luxury</p>
                      <p className="mt-1 text-slate-600">
                        Lake Masek Tented Lodge
                      </p>
                      <p className="text-slate-500">
                        Lake Ndutu Luxury Tented Lodge
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-[#dba33a]">Mid-range</p>
                      <p className="mt-1 text-slate-600">
                        Serengeti Heritage Ndutu
                      </p>
                      <p className="text-slate-500">
                        Ang'ata Ndutu Camp
                      </p>
                    </div>

                  </div>
                </div>

                {/* JUNE - JULY */}
                <div className="rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="font-bold text-[#0b4224]">
                    June – July · Western Serengeti
                  </p>

                  <div className="mt-3 grid gap-4 sm:grid-cols-2 text-sm">

                    <div>
                      <p className="font-bold text-[#dba33a]">Luxury</p>
                      <p className="mt-1 text-slate-600">
                        Lahia Tented Lodge
                      </p>
                      <p className="text-slate-500">
                        Kirawira Serena Camp
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-[#dba33a]">Mid-range</p>
                      <p className="mt-1 text-slate-600">
                        Mbalageti Lodge
                      </p>
                      <p className="text-slate-500">
                        Tukaone Tented Camp
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 6
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              06
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 6
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Full-Day Safari in the Serengeti
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                Following breakfast, embark on another immersive day in
                the Serengeti. From sunrise to sunset, explore the iconic
                ecosystem in search of migration herds, predators and
                breathtaking scenery.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Morning and afternoon game drives offer a deeper look at
                the diverse habitats and wildlife that make the Serengeti
                one of the world's premier safari destinations.
              </p>

              <div className="mt-7 rounded-2xl bg-[#f7faf7] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Accommodation Options
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Luxury
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Kubu Kubu Tented Camp
                    </p>
                    <p className="text-sm text-slate-500">
                      Melia Serengeti Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Four Seasons Serengeti
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Mid-range
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Serengeti Heritage Tented Camp
                    </p>
                    <p className="text-sm text-slate-500">
                      Embalakai Camp
                    </p>
                    <p className="text-sm text-slate-500">
                      Acacia Central Camp
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Budget Camping
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Nyani Campsite
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 7
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              07
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 7
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Serengeti to Ngorongoro
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                As dawn breaks over the endless Serengeti plains, set out
                for one final morning game drive. Follow fresh tracks and
                watch the savannah awaken as lions return from the night's
                hunt while elephants and antelope move through the golden
                morning light.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                After a picnic lunch in the wild, bid farewell to the
                Serengeti and begin your journey toward the legendary
                Ngorongoro Crater. The landscape gradually transforms into
                verdant highlands dotted with Maasai villages and rolling
                hills.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                In the late afternoon, arrive at your lodge perched on the
                crater rim and enjoy spectacular sunset views across the
                caldera.
              </p>

              <div className="mt-7 rounded-2xl bg-[#f7faf7] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Accommodation
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Luxury
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Ngorongoro Serena Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Sanctuary Ngorongoro Crater Camp
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Mid-range
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Rhino Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Ang'ata Ngorongoro Camp
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Budget Camping
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Nyani Campsite
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 8
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              08
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 8
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Ngorongoro Crater
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                Early this morning, descend onto the vast floor of the
                Ngorongoro Crater for an extraordinary day of wildlife
                exploration in one of Africa's true natural wonders.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The caldera stretches approximately 260 square kilometres
                and reaches a depth of about 610 metres, creating a unique
                self-contained ecosystem. It is renowned for exceptional
                Big Five sightings as well as wildebeest, gazelle, reedbuck
                and hundreds of bird species.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Around midday, pause beside a serene hippo pool for a
                freshly prepared picnic lunch before continuing your
                wildlife viewing. Later, ascend the winding road out of
                the crater and journey back toward Arusha.
              </p>

              <div className="mt-7 rounded-2xl bg-[#f7faf7] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Accommodation
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Luxury
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Kitela Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Lake Manyara Kilima Moja
                    </p>
                    <p className="text-sm text-slate-500">
                      The Retreat at Ngorongoro
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Mid-range
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Eileen's Tree Inn
                    </p>
                    <p className="text-sm text-slate-500">
                      Endoro Lodge
                    </p>
                    <p className="text-sm text-slate-500">
                      Karatu Simba Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#dba33a]">
                      Budget Camping
                    </p>
                    <p className="mt-1 text-sm text-[#0b4224]">
                      Lilac Campsite
                    </p>
                    <p className="text-sm text-slate-500">
                      Panorama Campsite
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 9
          ====================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              09
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 9
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                Lake Manyara National Park
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                After breakfast, set off for Lake Manyara National Park,
                the final stop on this unforgettable safari. Located about
                120 km west of Arusha, this charming park is remarkably
                diverse and named after the shallow alkaline lake that
                covers a large part of its area.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The lake attracts vast flocks of flamingos and provides
                habitat for more than 500 bird species. During your game
                drive, look out for monkeys, giraffes, zebras, wildebeest,
                buffalo and elephants.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                With some luck, you may even spot Lake Manyara's famous
                tree-climbing lions. After your final game drive, return
                to Arusha in the late afternoon with unforgettable memories
                of Tanzania's wild landscapes.
              </p>

              <div className="mt-7 rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Safari Conclusion
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Your Daffar Tours and Travel safari concludes in Arusha,
                  marking the end of an incredible journey through Tanzania's
                  most iconic wildlife destinations.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        MIGRATION SEASON GUIDE
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Plan Your Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Migration by Season
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          The migration moves throughout the year. Your safari route can
          be adjusted to follow the herds and current wildlife activity.
        </p>

      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          {
            season: "January – April",
            location: "Southern Serengeti / Ndutu",
            highlight: "Calving Season",
          },
          {
            season: "May – June",
            location: "Central Serengeti",
            highlight: "Migration Movement",
          },
          {
            season: "June – July",
            location: "Western Serengeti",
            highlight: "Western Corridor",
          },
          {
            season: "August – October",
            location: "Northern Serengeti",
            highlight: "Mara River Crossing",
          },
        ].map((item) => (
          <div
            key={item.season}
            className="rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <span className="inline-flex rounded-full bg-[#0b4224] px-3 py-1 text-xs font-bold text-white">
              {item.season}
            </span>

            <h4 className="mt-4 font-serif text-xl font-bold text-[#0b4224]">
              {item.location}
            </h4>

            <p className="mt-2 text-sm font-semibold text-[#dba33a]">
              {item.highlight}
            </p>

          </div>
        ))}

      </div>
    </div>

    {/* ============================================================
        INCLUSIONS / EXCLUSIONS
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-7 sm:p-9">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b4224] text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Your Safari Includes
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              Inclusions
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-4">

          {[
            "Park fees (for non-residents)",
            "All activities (unless clearly labeled as optional)",
            "All accommodation (unless clearly labeled as optional)",
            "A professional driver/guide",
            "All transportation (unless clearly labeled as optional)",
            "All taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the day-by-day section",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs font-bold text-white">
                ✓
              </span>

              <span className="text-sm leading-6 text-slate-600">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-700 text-white">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Please Note
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              Exclusions
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-4">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips (tipping guideline: US$10.00 per person per day)",
            "Personal items (souvenirs, travel insurance, visa fees, etc.)",
            "Government-imposed increases of taxes and/or park fees",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-xs font-bold text-slate-700">
                ×
              </span>

              <span className="text-sm leading-6 text-slate-600">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>
    </div>

    {/* ============================================================
        IMPORTANT MIGRATION NOTE
    ============================================================ */}
    <div className="mt-12 rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-7 sm:p-9">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
          🌍
        </div>

        <div>

          <h3 className="font-serif text-xl font-bold text-[#0b4224]">
            Important Migration Information
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            The Great Wildebeest Migration is a natural phenomenon and
            wildlife movements can vary from year to year. Exact locations
            and timing cannot be guaranteed. Your experienced Daffar Tours
            and Travel guide will monitor current wildlife movements and
            adapt the safari route where possible to maximize your chances
            of encountering the migration.
          </p>

          <p className="mt-3 text-sm font-semibold text-[#0b4224]">
            Southern Serengeti / Ndutu: January – April · Central Serengeti:
            May – June · Western Serengeti: June – July · Northern Serengeti:
            August – October.
          </p>

        </div>

      </div>
    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-2xl sm:px-12 sm:py-16">

      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/5" />
      <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#dba33a]/10" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-4xl">
          🦓
        </span>

        <h3 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Follow the Footsteps of the Great Migration
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
          Track one of nature's greatest wildlife spectacles across the
          Serengeti and experience unforgettable encounters with Africa's
          iconic wildlife.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-3.5 text-sm font-bold text-[#0b4224] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#e7b451]"
          >
            Plan Your Safari →
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
          >
            Request a Quote
          </Link>

        </div>

      </div>
    </div>

  </div>
</section>

{/* ============================================================
    8-DAY NDUTU CALVING SEASON SERENGETI MIGRATION
============================================================ */}
<section
  id="ndutu-calving-8-day"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[40%] h-[28rem] w-[28rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#0b4224]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0b4224]/15 bg-[#0b4224]/5 px-4 py-2 text-sm font-semibold text-[#0b4224]">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        Great Wildebeest Migration • Ndutu Calving Season
      </div>

      <h2 className="font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">
        8-Day Ndutu Calving Season
        <span className="block text-[#dba33a]">
          Serengeti Migration
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        This eight-day safari is designed to immerse you in the Serengeti ecosystem
        at its most alive; from elephant-rich Tarangire to the vast central and
        western Serengeti and the wildlife-dense Ngorongoro Crater, finishing with
        Lake Manyara before departure. With comfortable lodges and classic tented
        camps, you’ll enjoy sweeping savannah views, memorable game drives, and
        the chance to witness predator action and seasonal movements of wildebeest
        and zebra.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "8 Days / 7 Nights",
          icon: "🗓️",
        },
        {
          label: "Experience",
          value: "Ndutu Calving Season",
          icon: "🐃",
        },
        {
          label: "Destinations",
          value: "Tarangire • Serengeti • Ngorongoro",
          icon: "📍",
        },
        {
          label: "Style",
          value: "Luxury Lodges & Tented Camps",
          icon: "⛺",
        },
      ].map((fact, index) => (
        <div
          key={index}
          className="group rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-3 text-2xl">{fact.icon}</div>

          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {fact.label}
          </p>

          <p className="mt-1 font-semibold leading-6 text-[#0b4224]">
            {fact.value}
          </p>
        </div>
      ))}
    </div>

    {/* ========================================================
        HIGHLIGHT CARD
    ======================================================== */}
    <div className="mt-10 overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

      <div className="grid lg:grid-cols-[1fr_auto]">

        <div className="p-7 sm:p-9 lg:p-10">

          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white">
              🦁
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
                Safari Highlight
              </p>

              <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
                Follow the Migration
              </h3>
            </div>
          </div>

          <p className="max-w-4xl leading-8 text-gray-600">
            Travel through some of northern Tanzania’s most iconic landscapes
            during the calving season, when the southern Serengeti and Ndutu
            region can become a spectacular nursery for wildebeest and zebra.
            Along the way, encounter big cats, elephants, buffalo, giraffes,
            antelopes and prolific birdlife while enjoying a carefully paced
            combination of game drives and comfortable overnight stays.
          </p>
        </div>

        <div className="flex items-center justify-center bg-[#0b4224] px-8 py-8 lg:w-64">
          <div className="text-center text-white">
            <p className="text-sm font-medium uppercase tracking-widest text-[#dba33a]">
              Safari Focus
            </p>

            <p className="mt-2 font-serif text-3xl font-bold">
              Wildlife
            </p>

            <p className="mt-1 text-sm text-white/70">
              Migration • Predators • Landscapes
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mt-20">

      <div className="mb-12 text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Day-by-Day Safari Experience
        </h3>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
          From your arrival in Arusha to your final game drive at Lake Manyara,
          every day brings a new landscape and a new opportunity for discovery.
        </p>
      </div>

      <div className="relative">

        {/* TIMELINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">

          {/* DAY 1 */}
          <div className="relative md:pl-16">
            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 01
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Arrival in Arusha
                </h4>
              </div>

              <div className="p-6 sm:p-8">
                <p className="leading-8 text-gray-600">
                  Touch down at Kilimanjaro International Airport, where a
                  friendly Daffar Tours and Travel representative will meet
                  and brief you on the days ahead. Transfer to Arusha
                  Explores Lodge to unwind, enjoy a relaxed afternoon, and
                  ease into safari life. As evening falls, gather by the
                  campfire before dinner and a restful night.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Arusha Explores Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* DAY 2 */}
          <div className="relative md:pl-16">
            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 02
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Tarangire National Park
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, drive to Tarangire National Park, a landscape
                  of ancient baobabs and sweeping plains famed for its large
                  elephant herds. Spend the day on game drives with a picnic
                  lunch in the park. Watch for lions, leopards, giraffes,
                  buffalos, wildebeest, zebras, and prolific birdlife along
                  the Tarangire River. In the late afternoon, continue to
                  Karatu and settle in at your lodge.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Marera Valley Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* DAY 3 */}
          <div className="relative md:pl-16">
            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 03
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Serengeti National Park
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Journey toward the Serengeti for classic savannah scenes and
                  exceptional wildlife encounters. Today’s drives explore the
                  park’s grasslands, riverlines, and kopjes; prime territory
                  for big cats and plains game. With luck you may enjoy a
                  bush-style breakfast in the wild and sightings of lion
                  prides, cheetah on the hunt, and grazing antelopes. Return
                  to Karatu for dinner and an overnight stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Marera Valley Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* DAY 4 */}
          <div className="relative md:pl-16">
            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 04
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Central Serengeti – Into Big Cat Country
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Check out after an early start and head deep into the Serengeti.
                  Enjoy unhurried morning and afternoon game drives across
                  wildlife-rich valleys and open plains, with the chance for
                  a memorable bush breakfast en route. As the light softens,
                  set out on an evening drive when predators become active.
                  Later, arrive at your intimate tented camp in the heart of
                  the Serengeti.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Nimali Central Serengeti
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* DAY 5 */}
          <div className="relative md:pl-16">
            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 05
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Serengeti – Westward to Kirawira
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Continue your Serengeti adventure as you move toward the
                  western corridor. Expect superb game viewing, from lion and
                  leopard tracking to open-plains encounters with giraffe,
                  buffalo, and antelope. With conditions permitting, a guided
                  cheetah-tracking experience may be possible. As evening
                  approaches, an atmospheric game drive leads you to camp for
                  dinner, a campfire, and the sounds of the savannah at night.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Kirawira Serena Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* DAY 6 */}
          <div className="relative md:pl-16">
            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 06
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Western Serengeti – Migration Viewing
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Spend the day exploring the western Serengeti. When the herds
                  are in the area, this is a superb place to witness vast
                  columns of wildebeest and zebra on the move and to look for
                  action along the Grumeti River. Between drives, soak in camp
                  comforts, then return to the plains for a golden-hour evening
                  drive before dinner.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Kirawira Serena Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* DAY 7 */}
          <div className="relative md:pl-16">
            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 07
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  To Ngorongoro – Crater Rim Sundowners
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Depart the Serengeti with a final game drive en route.
                  Continue to the Ngorongoro Conservation Area where dramatic
                  views open up across the world’s largest intact caldera.
                  An afternoon drive on the rim and surrounding highlands
                  reveals rich wildlife and sweeping scenery. Later, check in
                  to your lodge perched on the crater rim and enjoy dinner.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Ngorongoro Serena Safari Lodge
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      On the crater rim
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* DAY 8 */}
          <div className="relative md:pl-16">
            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              8
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 08
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Lake Manyara & Departure
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Before your onward journey, descend into Lake Manyara National
                  Park for a final game drive. This compact, diverse park is
                  known for tree-climbing lions, elephant encounters, thriving
                  hippo pools, and prolific birdlife including flamingos when
                  conditions allow. After lunch, transfer to Arusha Airport
                  for your flight and the end of a remarkable safari.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Departure Day
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      No overnight accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast & Lunch
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ========================================================
        INCLUDED / EXCLUDED
    ======================================================== */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
              Included
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Included
            </h3>
          </div>
        </div>

        <ul className="space-y-4">

          {[
            "Park fees",
            "All activities unless indicated as optional",
            "All accommodations",
            "All transportation unless labeled as optional",
            "Professional guide",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs text-white">
                ✓
              </span>

              <span className="leading-6 text-gray-600">
                {item}
              </span>
            </li>
          ))}

        </ul>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-3xl border border-[#dba33a]/20 bg-[#fffdf8] p-7 shadow-sm sm:p-9">

        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dba33a] text-xl text-white">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
              Excluded
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Not Included
            </h3>
          </div>
        </div>

        <ul className="space-y-4">

          {[
            "Tips — guideline US$10.00 per person per day",
            "International flights",
            "Taxes / VAT",
            "Personal items such as souvenirs, travel insurance and visa fees",
            "Additional accommodation before and at the end of the tour",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs text-white">
                ×
              </span>

              <span className="leading-6 text-gray-600">
                {item}
              </span>
            </li>
          ))}

        </ul>
      </div>
    </div>

    {/* ========================================================
        OPTIONAL EXPERIENCES
    ======================================================== */}
    <div className="mt-8 rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
            Optional Experiences
          </p>

          <h3 className="mt-2 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
            Relax & Rejuvenate
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-gray-600">
            Enhance your safari with optional spa and massage experiences
            available at selected lodges along the journey.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">

          {[
            "Marera Valley Lodge — Day 2",
            "Nimali Central Serengeti — Day 4",
            "Kirawira Serena Camp — Day 5",
            "Ngorongoro Serena Safari Lodge — Day 7",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#0b4224]/10 bg-[#f7faf7] px-4 py-3 text-sm font-medium text-[#0b4224]"
            >
              <span className="mr-2 text-[#dba33a]">+</span>
              Spa & Massage – {item}
            </div>
          ))}

        </div>

      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center sm:px-12 sm:py-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-2xl" />

      <div className="relative">

        <span className="inline-flex items-center rounded-full border border-[#dba33a]/30 bg-[#dba33a]/10 px-4 py-2 text-sm font-semibold text-[#dba33a]">
          Experience the Migration
        </span>

        <h3 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Witness the Serengeti at Its Most Alive
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Follow the rhythms of the Great Migration, encounter Africa's
          legendary wildlife, and experience Tanzania's most extraordinary
          landscapes with Daffar Tours and Travel.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-3.5 font-bold text-[#0b4224] transition hover:-translate-y-0.5 hover:bg-[#efbd5b]"
          >
            Plan This Safari
            <span className="ml-2">→</span>
          </Link>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            WhatsApp Us
          </a>

        </div>

      </div>
    </div>

  </div>
</section>



{/* ============================================================
    10-DAY GREAT WILDEBEEST MIGRATION
    MARA RIVER CROSSING • SERENGETI MIGRATION
============================================================ */}

<section
  id="10-day-wildebeest-migration"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[30rem] w-[30rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#0b4224]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0b4224]/15 bg-[#0b4224]/5 px-4 py-2 text-sm font-semibold text-[#0b4224]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#dba33a]" />
        Great Wildebeest Migration • Mara River Crossing
      </div>

      <h2 className="font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">
        10-Day Great Wildebeest
        <span className="block text-[#dba33a]">
          Migration Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Follow the Great Wildebeest Migration through Tanzania's spectacular
        northern safari circuit. From Tarangire and Central Serengeti to the
        remote Northern Serengeti, enjoy extended opportunities to witness
        thousands of wildebeest and zebra, dramatic predator encounters and
        the unforgettable Mara River crossings during the August to October
        migration season.
      </p>

    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🗓️",
          label: "Duration",
          value: "10 Days / 9 Nights",
        },
        {
          icon: "🐃",
          label: "Experience",
          value: "Great Wildebeest Migration",
        },
        {
          icon: "📍",
          label: "Destinations",
          value: "Tarangire • Serengeti • Ngorongoro",
        },
        {
          icon: "🌊",
          label: "Safari Focus",
          value: "Mara River Crossing • Big Five",
        },
      ].map((fact, index) => (
        <div
          key={index}
          className="group rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-3 text-2xl">{fact.icon}</div>

          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {fact.label}
          </p>

          <p className="mt-1 font-semibold leading-6 text-[#0b4224]">
            {fact.value}
          </p>
        </div>
      ))}

    </div>

    {/* ========================================================
        SAFARI HIGHLIGHT
    ======================================================== */}
    <div className="mt-10 overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

      <div className="grid lg:grid-cols-[1fr_auto]">

        <div className="p-7 sm:p-9 lg:p-10">

          <div className="mb-5 flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white">
              🐾
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                Safari Highlight
              </p>

              <h3 className="font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                Witness the Drama of the Great Migration
              </h3>
            </div>

          </div>

          <p className="max-w-4xl leading-8 text-gray-600">
            Travel deep into Northern Serengeti during the peak migration
            season, when enormous herds of wildebeest and zebra gather around
            the Mara River. From August through October, you may witness the
            dramatic river crossings as animals face strong currents and
            lurking crocodiles in their search for fresh grazing. The journey
            also combines Tarangire, Central Serengeti, Ngorongoro Crater and
            Lake Manyara for a complete Northern Tanzania safari experience.
          </p>

        </div>

        <div className="flex items-center justify-center bg-[#0b4224] px-8 py-10 lg:w-64">

          <div className="text-center text-white">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#dba33a]">
              Safari Focus
            </p>

            <p className="mt-2 font-serif text-4xl font-bold">
              Migration
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              River Crossings • Wildlife • Big Five
            </p>

          </div>

        </div>

      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mt-20">

      <div className="mb-12 text-center">

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Safari Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          10-Day Safari Experience
        </h3>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
          From your arrival in Arusha to the final drive through Lake Manyara,
          experience Tanzania's legendary wildlife destinations and follow the
          Great Wildebeest Migration through the Serengeti.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">

          {/* ====================================================
              DAY 1
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 01
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Arrival in Arusha
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Upon landing at the airport, a friendly representative from
                  Daffar Tours and Travel will be waiting to welcome you.
                  You will be transferred to your hotel in Arusha where you can
                  unwind, settle in and prepare for the adventures ahead.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Arusha Planet Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      At your own cost
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 2
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 02
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Tarangire National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, your private safari guide will collect you
                  from your accommodation in Arusha for a scenic drive to
                  Tarangire National Park. Travel through picturesque Masai
                  plains before entering the park, renowned for its impressive
                  elephant populations. During your game drive, look for
                  giraffes, zebras, wildebeest, buffalo, lions and, with luck,
                  leopards resting in the trees.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Eileen’s Tree Inn
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals provided
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks available at an extra charge
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 3
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 03
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Central Serengeti – Seronera
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Continue toward the Serengeti through the highlands and
                  misty forests of the Ngorongoro Conservation Area. Pass the
                  spectacular Ngorongoro Crater before entering the vast
                  Serengeti National Park. Enjoy a rewarding game drive across
                  wide grasslands, swamps, lakes, woodlands and rolling hills
                  before settling into your camp.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Embalakai Serengeti Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals provided
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks available at additional cost
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 4
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 04
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Northern Serengeti – Following the Migration
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Travel north from Seronera toward the remote Northern
                  Serengeti, passing rivers, hills, kopjes and beautiful
                  wilderness landscapes. This quieter region offers an
                  exceptional migration experience. From August through
                  October, there is a chance to witness massive herds of
                  wildebeest and zebra gathering around the Mara River.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Mara Heritage Camp
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      August – October
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals included
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Beverages not included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 5
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 05
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Northern Serengeti – Mara River Experience
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After an early breakfast, venture deep into Northern
                  Serengeti in search of the spectacular Mara River crossing.
                  Vast herds of wildebeest often gather along the riverbanks
                  before making the dramatic crossing. Watch as animals brave
                  strong currents and lurking crocodiles in one of nature's
                  most unforgettable survival spectacles.
                </p>

                <div className="mt-7 rounded-2xl bg-[#fffdf8] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                    Migration Season
                  </p>

                  <p className="mt-2 font-semibold text-[#0b4224]">
                    August – October
                  </p>

                  <p className="mt-2 leading-7 text-gray-600">
                    River crossings are a natural event and sightings cannot
                    be guaranteed, but the Northern Serengeti offers an
                    exceptional opportunity to follow the migration.
                  </p>

                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Mara Heritage Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals included
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Beverages not included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 6
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 06
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Return to Central Serengeti
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, begin your journey back toward the Seronera
                  region. Enjoy another game drive as you travel through the
                  Serengeti, with opportunities to encounter lions, leopards,
                  cheetahs, elephants, buffalo and the migratory herds.
                  End the day relaxing around the fireside beneath the
                  spectacular African night sky.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Embalakai Serengeti Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals provided
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks excluded
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 7
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 07
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Serengeti to Ngorongoro Crater
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, enjoy another exciting game drive through
                  the Serengeti before making your way toward the Ngorongoro
                  Conservation Area. As you reach the crater rim, take in
                  breathtaking views of the vast natural amphitheatre below.
                  Spend the night overlooking one of Africa's most remarkable
                  landscapes.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Rhino Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals included
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks not included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 8
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              8
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 08
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Ngorongoro Crater
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Before sunrise, descend into the Ngorongoro Crater for a
                  full day of unforgettable wildlife encounters. Explore the
                  crater floor, a remarkable self-contained ecosystem home to
                  elephants, lions, buffaloes, hyenas, gazelles, wildebeest
                  and the endangered black rhino. Enjoy a picnic near the hippo
                  pool before climbing out of the crater and continuing to
                  Karatu for the evening.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Eileen’s Tree Inn
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals included
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks not included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 9
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              9
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 09
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Lake Manyara National Park – Arusha
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, drive to Lake Manyara National Park for the
                  final wildlife experience of your safari. Explore its diverse
                  landscapes of open plains, woodlands and baobab-dotted cliffs.
                  Look for monkeys, giraffes, zebras, wildebeest, buffalo,
                  elephants, flamingos and, with luck, lions lounging in trees.
                  After lunch, continue to Arusha and arrive in the late
                  afternoon.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Arusha Planet Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast & Lunch
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks not included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 10
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              10
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 10
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Onward Travel
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, you will be collected from your
                  accommodation by a Daffar Tours and Travel representative
                  and transferred to the airport for your onward journey.
                  Your Great Wildebeest Migration safari comes to an end with
                  unforgettable memories of Tanzania's spectacular wilderness.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Safari Ends
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      No overnight accommodation
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ========================================================
        MIGRATION HIGHLIGHTS
    ======================================================== */}
    <div className="mt-20 rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

      <div className="grid gap-8 lg:grid-cols-3">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Great Migration
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0b4224]">
            Where the Herds Meet the River
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            During the August to October migration season, Northern Serengeti
            becomes one of Africa's most dramatic wildlife destinations as
            enormous herds gather around the Mara River.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">

          {[
            {
              icon: "🐃",
              title: "Wildebeest Herds",
              text: "Follow thousands of wildebeest moving across the Northern Serengeti in search of fresh grazing.",
            },
            {
              icon: "🌊",
              title: "Mara River Crossing",
              text: "Experience the possibility of witnessing one of nature's most dramatic survival spectacles.",
            },
            {
              icon: "🐊",
              title: "Predator Action",
              text: "Watch for crocodiles, lions, cheetahs and other predators following the migrating herds.",
            },
            {
              icon: "🦁",
              title: "Big Five",
              text: "Explore some of Tanzania's finest wildlife areas with opportunities to encounter the Big Five.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#f7faf7] p-5 transition duration-300 hover:-translate-y-1"
            >

              <div className="text-2xl">
                {item.icon}
              </div>

              <h4 className="mt-3 font-bold text-[#0b4224]">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>

    {/* ========================================================
        INCLUDED / EXCLUDED
    ======================================================== */}
    <div className="mt-10 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="mb-7 flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
              Included
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Included
            </h3>

          </div>

        </div>

        <ul className="space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver / guide",
            "All transportation unless labeled as optional",
            "All taxes / VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs text-white">
                ✓
              </span>

              <span className="leading-6 text-gray-600">
                {item}
              </span>

            </li>
          ))}

        </ul>

      </div>

      {/* EXCLUDED */}
      <div className="rounded-3xl border border-[#dba33a]/20 bg-[#fffdf8] p-7 shadow-sm sm:p-9">

        <div className="mb-7 flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dba33a] text-xl text-white">
            ×
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
              Excluded
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Not Included
            </h3>

          </div>

        </div>

        <ul className="space-y-4">

          {[
            "International flights from / to home",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline US$15.00 per person per day",
            "Personal items such as souvenirs, travel insurance and visa fees",
            "Optional safari activities",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs text-white">
                ×
              </span>

              <span className="leading-6 text-gray-600">
                {item}
              </span>

            </li>
          ))}

        </ul>

      </div>

    </div>

    {/* ========================================================
        OPTIONAL SAFARI ACTIVITIES
    ======================================================== */}
    <div className="mt-8 rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

      <div className="mb-7">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Optional Safari Activities
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
          Enhance Your Safari
        </h3>

        <p className="mt-3 max-w-3xl leading-7 text-gray-600">
          Add an unforgettable experience to your safari and discover
          Tanzania beyond the traditional game drive.
        </p>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {[
          {
            icon: "🎈",
            title: "Balloon Safari",
            price: "USD 500 per person",
          },
          {
            icon: "🛖",
            title: "Maasai Village Visit",
            price: "USD 50 per vehicle",
          },
          {
            icon: "🌙",
            title: "Night Game Drive",
            price: "USD 120 per person",
          },
          {
            icon: "🥾",
            title: "Ngorongoro Crater Rim Walk",
            price: "USD 30 per person",
          },
          {
            icon: "🏺",
            title: "Olduvai Gorge & Museum",
            price: "USD 40 per person",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#dba33a]/40 hover:shadow-md"
          >

            <div className="flex items-start justify-between gap-4">

              <div>

                <div className="text-2xl">
                  {item.icon}
                </div>

                <h4 className="mt-3 font-bold text-[#0b4224]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm font-semibold text-[#dba33a]">
                  {item.price}
                </p>

              </div>

              <span className="text-xl text-[#0b4224]/30 transition group-hover:text-[#dba33a]">
                +
              </span>

            </div>

          </div>
        ))}

      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center sm:px-12 sm:py-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-2xl" />

      <div className="relative">

        <span className="inline-flex items-center rounded-full border border-[#dba33a]/30 bg-[#dba33a]/10 px-4 py-2 text-sm font-semibold text-[#dba33a]">
          Great Wildebeest Migration Safari
        </span>

        <h3 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Witness the Mara River Crossing
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Follow the Great Wildebeest Migration through the Serengeti,
          experience the dramatic Northern Serengeti wilderness and create
          unforgettable memories with Daffar Tours and Travel.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-3.5 font-bold text-[#0b4224] transition hover:-translate-y-0.5 hover:bg-[#efbd5b]"
          >
            Plan This Safari
            <span className="ml-2">→</span>
          </Link>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            WhatsApp Us
          </a>

        </div>

      </div>
    </div>

  </div>
</section>

{/* ============================================================
    7-DAY SAFARI ADVENTURE THROUGH THE WESTERN WILDEBEEST MIGRATION ROUTE
============================================================ */}
<section
  id="western-migration-7-day"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[30rem] w-[30rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#0b4224]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HERO / HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0b4224]/15 bg-[#0b4224]/5 px-4 py-2 text-sm font-semibold text-[#0b4224]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#dba33a]" />
        Great Wildebeest Migration • Western Corridor
      </div>

      <h2 className="font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">
        7-Day Safari Adventure Through
        <span className="block text-[#dba33a]">
          the Western Wildebeest Migration Route
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience the wild wonders of the Serengeti's Western Corridor,
        where the Grumeti and Mbalageti Rivers create one of Africa's most
        dramatic wildlife landscapes. Between May and July, the Great
        Migration moves through this region as vast herds of wildebeest,
        zebra and antelope gather around the riverbanks.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🗓️",
          label: "Duration",
          value: "7 Days / 6 Nights",
        },
        {
          icon: "🐃",
          label: "Migration",
          value: "Western Corridor",
        },
        {
          icon: "📍",
          label: "Main Areas",
          value: "Tarangire • Serengeti • Ngorongoro",
        },
        {
          icon: "🌿",
          label: "Best Period",
          value: "May – July",
        },
      ].map((fact, index) => (
        <div
          key={index}
          className="group rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-3 text-2xl">{fact.icon}</div>

          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {fact.label}
          </p>

          <p className="mt-1 font-semibold leading-6 text-[#0b4224]">
            {fact.value}
          </p>
        </div>
      ))}
    </div>

    {/* ========================================================
        WESTERN CORRIDOR HIGHLIGHT
    ======================================================== */}
    <div className="mt-10 overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

      <div className="grid lg:grid-cols-[1fr_auto]">

        <div className="p-7 sm:p-9 lg:p-10">

          <div className="mb-5 flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white">
              🐊
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                Safari Highlight
              </p>

              <h3 className="font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                The Grumeti River Crossing
              </h3>
            </div>

          </div>

          <p className="max-w-4xl leading-8 text-gray-600">
            The Western Corridor is one of the Serengeti ecosystem's most
            fascinating regions. During the migration season, enormous herds
            move through the corridor toward the Grumeti River, creating
            extraordinary wildlife encounters. Crocodiles wait in the waters
            while predators patrol the surrounding plains, making this one of
            the most dramatic chapters of the Great Migration.
          </p>

        </div>

        <div className="flex items-center justify-center bg-[#0b4224] px-8 py-10 lg:w-64">

          <div className="text-center text-white">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#dba33a]">
              Migration Window
            </p>

            <p className="mt-2 font-serif text-4xl font-bold">
              May – July
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Seasonal movement through the Western Corridor
            </p>

          </div>

        </div>

      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mt-20">

      <div className="mb-12 text-center">

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Safari Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Day-by-Day Adventure
        </h3>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
          Travel from Arusha through Tarangire and the Serengeti before
          experiencing the dramatic landscapes of Ngorongoro and Lake Manyara.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">

          {/* ====================================================
              DAY 1
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 01
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Welcome to Arusha
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Upon arrival at the airport, a representative from Daffar
                  Tours and Travel will warmly receive you and escort you to
                  your accommodation in Arusha. This evening is yours to
                  relax, settle in, and look forward to the thrilling safari
                  days ahead.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Arusha Planet Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      At own expense
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 2
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 02
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Arusha to Tarangire National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, your private safari guide will collect you
                  for the scenic drive to Tarangire National Park. Along the
                  way, travel through picturesque Masai plains dotted with
                  acacia trees and experience glimpses of vibrant local life.
                  Tarangire is famed for its dense elephant population and
                  diverse wildlife. Explore swamps, savannahs and the
                  Tarangire River while looking for zebra, buffalo, wildebeest,
                  giraffes, lions and possibly leopards. After a thrilling day,
                  continue to your lodge for dinner and a comfortable overnight
                  stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Eileen’s Tree Inn
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals included
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks not included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 3
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 03
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Serengeti National Park – Central
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, journey through the lush highlands where the
                  Iraqw community cultivates wheat, coffee and maize. Continue
                  through the Ngorongoro Conservation Area, with an opportunity
                  to admire the spectacular Ngorongoro Crater. By midday, enter
                  the Serengeti National Park, a vast ecosystem of grasslands,
                  wetlands, lakes, savannahs and rolling hills. Depending on
                  the season, large herds of wildebeest, zebra and antelope
                  may be encountered as they move in search of fresh grazing
                  and water. Enjoy an exciting game drive before continuing to
                  the Seronera Valley.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Nyota Luxury Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals provided
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks not included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 4
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 04
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Serengeti Western Corridor
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Following breakfast, set off toward the Serengeti's western
                  reaches. This area becomes especially vibrant from late April
                  through June as the Great Migration sweeps through. Massive
                  groups of wildebeest are joined by zebra, gazelle and eland
                  as they navigate the corridor south of the Grumeti River.
                  Keep watch for leopards, hyenas and massive Nile crocodiles
                  near the riverbanks. The combination of moving herds,
                  predators, river scenery and vast open skies creates one of
                  Africa's most unforgettable wildlife experiences.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Mbalageti Serengeti
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals provided
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks not included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 5
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 05
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Serengeti Central
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Dedicate the day to exploring the vast landscapes of the
                  Serengeti through immersive game drives. Later in the
                  afternoon, continue into the heart of Central Serengeti,
                  where wildlife ranges from impalas and buffalo to crocodiles
                  and hippos. The region is also renowned for seasonal
                  movements of zebra, antelope and wildebeest. Their journey
                  follows rainfall patterns and changes from year to year.
                  Alongside the great herds, look for lions, leopards and
                  cheetahs playing their vital role in the ecosystem. End the
                  day around a campfire beneath the breathtaking African night
                  sky.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Nyota Luxury Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      All meals provided
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinks not included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 6
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 06
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Serengeti to Ngorongoro Crater
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, continue from the Serengeti toward the
                  awe-inspiring Ngorongoro Crater. First impressions reveal an
                  extraordinary natural amphitheatre enclosed by steep volcanic
                  walls. Within the crater lies a diverse landscape of open
                  savannah, acacia trees, sparkling lakes and swampy areas.
                  Descend into the crater for an afternoon of wildlife viewing,
                  with opportunities to see wildebeest, zebras, gazelles,
                  hundreds of bird species and, with luck, the endangered black
                  rhino. Later, continue to Karatu for dinner and an overnight
                  stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Arusha Planet Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      At own expense
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 7
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 07
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Lake Manyara National Park to Arusha
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Following breakfast, continue to your final safari stop at
                  Lake Manyara National Park, located about 120 kilometers west
                  of Arusha. Despite its modest size, the park is famed for its
                  large alkaline lake, which can cover nearly 70% of the park
                  depending on seasonal water levels. Look for flamingos and
                  other birdlife, as well as giraffes, monkeys, elephants,
                  zebras, wildebeest, buffalo and, with luck, lions perched in
                  the trees. Explore the park's diverse woodlands, grassy plains
                  and dramatic cliffs before making your way back to Arusha in
                  the late afternoon.
                </p>

                <div className="mt-7 rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                    Safari Finale
                  </p>

                  <p className="mt-2 font-semibold text-[#0b4224]">
                    Lake Manyara National Park → Arusha
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Final game drive and return to Arusha in the late afternoon.
                  </p>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ========================================================
        MIGRATION EXPERIENCE
    ======================================================== */}
    <div className="mt-20 rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="lg:col-span-1">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Why This Safari
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0b4224]">
            Follow the Western Migration Route
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Experience one of the Serengeti's most dramatic seasonal
            landscapes, combining migration viewing with classic Big Five
            safari experiences.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">

          {[
            {
              icon: "🐃",
              title: "Great Herds",
              text: "Witness wildebeest, zebra, gazelle and eland moving through the Western Corridor.",
            },
            {
              icon: "🐊",
              title: "Grumeti River",
              text: "Look for crocodiles and wildlife activity around the riverbanks during migration.",
            },
            {
              icon: "🦁",
              title: "Predator Action",
              text: "Search for lions, leopards, cheetahs and hyenas across the Serengeti plains.",
            },
            {
              icon: "🌅",
              title: "Endless Plains",
              text: "Experience spectacular sunsets, vast savannahs and unforgettable African skies.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#f7faf7] p-5 transition hover:-translate-y-1"
            >

              <div className="text-2xl">
                {item.icon}
              </div>

              <h4 className="mt-3 font-bold text-[#0b4224]">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>

    {/* ========================================================
        INCLUDED / EXCLUDED
    ======================================================== */}
    <div className="mt-10 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="mb-7 flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
              Included
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Included
            </h3>

          </div>

        </div>

        <ul className="space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver / guide",
            "All transportation unless labeled as optional",
            "All taxes / VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the day-by-day section",
            "Drinks as specified in the day-by-day section",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs text-white">
                ✓
              </span>

              <span className="leading-6 text-gray-600">
                {item}
              </span>

            </li>
          ))}

        </ul>

      </div>

      {/* EXCLUDED */}
      <div className="rounded-3xl border border-[#dba33a]/20 bg-[#fffdf8] p-7 shadow-sm sm:p-9">

        <div className="mb-7 flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dba33a] text-xl text-white">
            ×
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
              Excluded
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Not Included
            </h3>

          </div>

        </div>

        <ul className="space-y-4">

          {[
            "International flights from / to home",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline US$15.00 per person per day",
            "Personal items such as souvenirs, travel insurance and visa fees",
            "Government-imposed increase of taxes and/or park fees",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs text-white">
                ×
              </span>

              <span className="leading-6 text-gray-600">
                {item}
              </span>

            </li>
          ))}

        </ul>

      </div>

    </div>

    {/* ========================================================
        OPTIONAL SAFARI ACTIVITIES
    ======================================================== */}
    <div className="mt-8 rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

      <div className="mb-7">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Optional Experiences
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
          Make Your Safari Even More Memorable
        </h3>

        <p className="mt-3 max-w-3xl leading-7 text-gray-600">
          Add one of these optional experiences to personalize your safari
          and discover Tanzania from a different perspective.
        </p>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {[
          {
            title: "Balloon Safari",
            price: "USD 500 per person",
            icon: "🎈",
          },
          {
            title: "Maasai Village Visit",
            price: "USD 50 per vehicle",
            icon: "🛖",
          },
          {
            title: "Night Game Drive",
            price: "USD 120 per person",
            icon: "🌙",
          },
          {
            title: "Ngorongoro Crater Rim Walk",
            price: "USD 30 per person",
            icon: "🥾",
          },
          {
            title: "Olduvai Gorge & Museum",
            price: "USD 40 per person",
            icon: "🏺",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#dba33a]/40 hover:shadow-md"
          >

            <div className="flex items-start justify-between gap-4">

              <div>

                <div className="text-2xl">
                  {item.icon}
                </div>

                <h4 className="mt-3 font-bold text-[#0b4224]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm font-semibold text-[#dba33a]">
                  {item.price}
                </p>

              </div>

              <span className="text-xl text-[#0b4224]/30 transition group-hover:text-[#dba33a]">
                +
              </span>

            </div>

          </div>
        ))}

      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center sm:px-12 sm:py-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-2xl" />

      <div className="relative">

        <span className="inline-flex items-center rounded-full border border-[#dba33a]/30 bg-[#dba33a]/10 px-4 py-2 text-sm font-semibold text-[#dba33a]">
          Western Corridor Migration Safari
        </span>

        <h3 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Witness the Great Migration in the Western Serengeti
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Follow the herds, discover the Grumeti River and experience the
          extraordinary rhythm of Tanzania's wild landscapes with Daffar
          Tours and Travel.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-3.5 font-bold text-[#0b4224] transition hover:-translate-y-0.5 hover:bg-[#efbd5b]"
          >
            Plan This Safari
            <span className="ml-2">→</span>
          </Link>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            WhatsApp Us
          </a>

        </div>

      </div>
    </div>

  </div>
</section>


{/* ============================================================
    6-DAY NDUTU CALVING SEASON SERENGETI MIGRATION
============================================================ */}
<section
  id="ndutu-calving-6-day"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[30rem] w-[30rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#0b4224]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0b4224]/15 bg-[#0b4224]/5 px-4 py-2 text-sm font-semibold text-[#0b4224]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#dba33a]" />
        Great Wildebeest Migration • Ndutu Calving Season
      </div>

      <h2 className="font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">
        6-Day Ndutu Calving Season
        <span className="block text-[#dba33a]">
          Serengeti Migration
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        This unforgettable safari takes you to the heart of the Serengeti
        during the Ndutu Calving Season, a spectacular time when thousands
        of wildebeest calves are born across the plains. Over six days,
        journey through Tanzania’s most iconic wildlife destinations,
        including Tarangire, the Serengeti and Ngorongoro, with countless
        opportunities to witness extraordinary wildlife spectacles and
        dramatic predator-prey interactions.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🗓️",
          label: "Duration",
          value: "6 Days / 5 Nights",
        },
        {
          icon: "🐃",
          label: "Experience",
          value: "Ndutu Calving Season",
        },
        {
          icon: "📍",
          label: "Destinations",
          value: "Tarangire • Serengeti • Ngorongoro",
        },
        {
          icon: "🦁",
          label: "Safari Focus",
          value: "Calving • Predators • Big Five",
        },
      ].map((fact, index) => (
        <div
          key={index}
          className="group rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-3 text-2xl">{fact.icon}</div>

          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {fact.label}
          </p>

          <p className="mt-1 font-semibold leading-6 text-[#0b4224]">
            {fact.value}
          </p>
        </div>
      ))}
    </div>

    {/* ========================================================
        SAFARI HIGHLIGHT
    ======================================================== */}
    <div className="mt-10 overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

      <div className="grid lg:grid-cols-[1fr_auto]">

        <div className="p-7 sm:p-9 lg:p-10">

          <div className="mb-5 flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white">
              🐾
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                Safari Highlight
              </p>

              <h3 className="font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                Witness the Miracle of New Life
              </h3>
            </div>

          </div>

          <p className="max-w-4xl leading-8 text-gray-600">
            The Ndutu Calving Season transforms the southern Serengeti into
            one of Africa’s greatest wildlife spectacles. Thousands of
            wildebeest calves are born across the short-grass plains,
            creating an extraordinary concentration of prey and attracting
            lions, hyenas, cheetahs and other predators. This safari combines
            the calving experience with Tarangire’s elephant-rich landscapes,
            the Western Serengeti and the wildlife-dense Ngorongoro Crater.
          </p>

        </div>

        <div className="flex items-center justify-center bg-[#0b4224] px-8 py-10 lg:w-64">

          <div className="text-center text-white">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#dba33a]">
              Safari Focus
            </p>

            <p className="mt-2 font-serif text-4xl font-bold">
              Calving
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              New life • Predators • Migration
            </p>

          </div>

        </div>

      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mt-20">

      <div className="mb-12 text-center">

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Safari Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Day-by-Day Safari Experience
        </h3>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
          From your arrival in Arusha to your final game drive at Lake Manyara,
          discover some of Tanzania’s most extraordinary wildlife landscapes.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">

          {/* ====================================================
              DAY 1
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 01
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Arrival in Arusha
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Upon arrival at Kilimanjaro Airport, you will be warmly
                  welcomed by a representative from Daffar Tours and Travel
                  and transferred to your lodge in Arusha. Take time to rest,
                  settle in and prepare for the adventures ahead.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Arusha Explores Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 2
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 02
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Tarangire National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, drive to Tarangire National Park, renowned
                  for its large elephant herds and ancient baobab trees. The
                  park is home to diverse wildlife including lions, leopards,
                  giraffes, buffaloes and countless bird species. Enjoy both
                  morning and afternoon game drives, with a picnic lunch in
                  the park before heading to your lodge for a relaxing evening.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Marera Valley Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 3
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 03
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Serengeti National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Journey into the Serengeti, Tanzania’s most iconic national
                  park. Along the way, enjoy a bush breakfast and a thrilling
                  game drive through the endless plains. This is prime cheetah
                  country and, with luck, you may spot these majestic predators
                  up close. After a rewarding day of wildlife encounters,
                  check into your luxury tented camp for dinner and an
                  overnight stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Kirawira Serena Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 4
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 04
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Western Serengeti – Calving Season
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Explore the Western Serengeti, one of the best regions to
                  witness the Great Wildebeest Migration and calving season.
                  Each day, thousands of calves are born across the plains,
                  attracting predators such as lions, hyenas and cheetahs.
                  Game drives in this region provide unforgettable opportunities
                  to witness the raw drama of life and survival in the wild.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Kirawira Serena Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 5
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 05
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Ngorongoro Crater
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Today, descend into the world-famous Ngorongoro Crater,
                  often called Africa’s “Garden of Eden.” This UNESCO World
                  Heritage Site is home to black rhinos, lions, elephants,
                  hyenas and a remarkable variety of wildlife. Explore the
                  crater floor on a game drive and enjoy a picnic lunch
                  surrounded by the spectacular natural amphitheatre before
                  heading to your lodge on the rim.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Ngorongoro Serena Safari Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ====================================================
              DAY 6
          ==================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
                  Day 06
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Lake Manyara – Departure
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, enjoy a morning game drive in Lake Manyara
                  National Park, famous for its tree-climbing lions, large
                  elephant population and seasonal flocks of flamingos. Explore
                  the park’s diverse landscapes and wildlife before transferring
                  back to Arusha for your onward journey.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Departure Day
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      No overnight accommodation
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#0b4224]">
                      Breakfast & Lunch
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Drinking water included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ========================================================
        CALVING SEASON HIGHLIGHTS
    ======================================================== */}
    <div className="mt-20 rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

      <div className="grid gap-8 lg:grid-cols-3">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Calving Season
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0b4224]">
            Where Life Meets the Wild
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            The Ndutu season is one of the most dramatic periods of the
            Serengeti cycle, bringing newborn calves and hungry predators
            together across the open plains.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">

          {[
            {
              icon: "🐃",
              title: "Newborn Calves",
              text: "Witness thousands of wildebeest calves arriving across the Serengeti plains.",
            },
            {
              icon: "🦁",
              title: "Predator Action",
              text: "Lions, hyenas and cheetahs are drawn to the abundance of vulnerable young prey.",
            },
            {
              icon: "🐘",
              title: "Elephant Encounters",
              text: "Explore Tarangire, renowned for its impressive elephant populations.",
            },
            {
              icon: "🦏",
              title: "Black Rhino",
              text: "Search the Ngorongoro Crater for the rare and endangered black rhino.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#f7faf7] p-5 transition duration-300 hover:-translate-y-1"
            >

              <div className="text-2xl">
                {item.icon}
              </div>

              <h4 className="mt-3 font-bold text-[#0b4224]">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>

    {/* ========================================================
        INCLUDED / EXCLUDED
    ======================================================== */}
    <div className="mt-10 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="mb-7 flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
              Included
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Included
            </h3>

          </div>

        </div>

        <ul className="space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver / guide",
            "All transportation",
            "All taxes / VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs text-white">
                ✓
              </span>

              <span className="leading-6 text-gray-600">
                {item}
              </span>

            </li>
          ))}

        </ul>

      </div>

      {/* EXCLUDED */}
      <div className="rounded-3xl border border-[#dba33a]/20 bg-[#fffdf8] p-7 shadow-sm sm:p-9">

        <div className="mb-7 flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dba33a] text-xl text-white">
            ×
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
              Excluded
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Not Included
            </h3>

          </div>

        </div>

        <ul className="space-y-4">

          {[
            "International flights from / to home",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline US$10.00–15.00 per person per day",
            "Personal items such as souvenirs, travel insurance and visa fees",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs text-white">
                ×
              </span>

              <span className="leading-6 text-gray-600">
                {item}
              </span>

            </li>
          ))}

        </ul>

      </div>

    </div>

    {/* ========================================================
        OPTIONAL SAFARI ACTIVITIES
    ======================================================== */}
    <div className="mt-8 rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

      <div className="mb-7">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Optional Safari Activities
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
          Enhance Your Safari
        </h3>

        <p className="mt-3 max-w-3xl leading-7 text-gray-600">
          Add an unforgettable experience to your itinerary and discover
          Tanzania beyond the traditional game drive.
        </p>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {[
          {
            icon: "🎈",
            title: "Balloon Safari",
            price: "USD 500 per person",
          },
          {
            icon: "🛖",
            title: "Maasai Village Visit",
            price: "USD 50 per vehicle",
          },
          {
            icon: "💆",
            title: "Spa & Massage",
            price: "Available where offered",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#dba33a]/40 hover:shadow-md"
          >

            <div className="flex items-start justify-between gap-4">

              <div>

                <div className="text-2xl">
                  {item.icon}
                </div>

                <h4 className="mt-3 font-bold text-[#0b4224]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm font-semibold text-[#dba33a]">
                  {item.price}
                </p>

              </div>

              <span className="text-xl text-[#0b4224]/30 transition group-hover:text-[#dba33a]">
                +
              </span>

            </div>

          </div>
        ))}

      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center sm:px-12 sm:py-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-2xl" />

      <div className="relative">

        <span className="inline-flex items-center rounded-full border border-[#dba33a]/30 bg-[#dba33a]/10 px-4 py-2 text-sm font-semibold text-[#dba33a]">
          Ndutu Calving Season Safari
        </span>

        <h3 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Witness the Serengeti Come Alive
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Experience newborn wildebeest, dramatic predator encounters,
          iconic landscapes and unforgettable safari moments with Daffar
          Tours and Travel.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-3.5 font-bold text-[#0b4224] transition hover:-translate-y-0.5 hover:bg-[#efbd5b]"
          >
            Plan This Safari
            <span className="ml-2">→</span>
          </Link>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            WhatsApp Us
          </a>

        </div>

      </div>
    </div>

  </div>
</section>


<section
  id="serengeti-migration"
  className="relative overflow-hidden bg-white py-20 lg:py-28"
>
  {/* ========================================================
      BACKGROUND DECORATION
  ======================================================== */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Tanzania Wildlife Adventure
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        9-Day Serengeti
        <span className="mt-2 block text-amber-600">
          Migration Footsteps
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        Follow the legendary Great Migration across Tanzania on a specially
        crafted safari through Tarangire, the Serengeti, the migration regions,
        and the Ngorongoro Crater. With four nights in the Serengeti, this
        journey gives you more time to experience the wildlife, landscapes,
        predators, and seasonal movements that make northern Tanzania
        extraordinary.
      </p>

    </div>


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🦁",
          title: "Safari",
          value: "Serengeti Migration",
        },
        {
          icon: "📅",
          title: "Duration",
          value: "9 Days",
        },
        {
          icon: "📍",
          title: "Destinations",
          value: "Tarangire • Serengeti • Ngorongoro",
        },
        {
          icon: "🐃",
          title: "Highlight",
          value: "Great Migration",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl">
              {item.icon}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {item.title}
              </p>

              <p className="mt-1 font-bold text-slate-900">
                {item.value}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>


    {/* ========================================================
        INTRODUCTION
    ======================================================== */}
    <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:p-12">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-600 text-2xl text-white shadow-lg">
          🐾
        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            Following the Great Migration
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            This specially crafted safari is designed to follow the legendary
            Great Migration through Tanzania. With four nights in the Serengeti,
            you will have extended opportunities to explore the central plains
            while also visiting the areas where the migration is taking place
            during different times of the year.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Depending on the season, your safari may travel toward the northern
            Serengeti near the Kenya border, the southern Ndutu region, or the
            Western Serengeti. Our experienced guide will help determine the
            best areas to explore based on the movements of the herds and
            prevailing wildlife conditions.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-white p-5">

            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-slate-900">
                Migration note:
              </strong>{" "}
              The Great Migration follows seasonal rainfall and grazing
              patterns, so exact herd locations can vary from year to year.
              Your safari route can therefore be adjusted to maximize
              opportunities for wildlife viewing.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        ITINERARY HEADER
    ======================================================== */}
    <div className="mt-24 text-center">

      <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
        Your Tanzanian Safari
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Journey from Arusha into the heart of Tanzania's wildlife country,
        follow the Great Migration through the Serengeti, explore Ngorongoro,
        and return to Arusha with unforgettable memories.
      </p>

    </div>


    {/* ========================================================
        ITINERARY TIMELINE
    ======================================================== */}
    <div className="relative mx-auto mt-14 max-w-5xl">

      {/* TIMELINE LINE */}
      <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-200 md:block" />


      {/* ======================================================
          DAY 1
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          01
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 1
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Arrival in Arusha
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            Upon landing at the airport, you will be warmly welcomed and
            transferred to your hotel in Arusha. After settling in, enjoy a
            relaxed evening and prepare for the incredible safari journey that
            begins the following day.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Accommodation Options
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-xs font-bold uppercase text-amber-700">
                  Luxury
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Grand Melia / Mount Meru Hotel / Arusha Coffee Lodge
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Mid-range
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Ilboru Safari Lodge / Arusha Planet Lodge / Airport Planet Lodge
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Budget
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Outpost Lodge / Tulia Boutique Hotel / Green Mountain Hotel
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 2
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 2
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Discover Tarangire National Park
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            After breakfast, set off to explore breathtaking Tarangire National
            Park. Known for its ancient baobab trees and varied landscapes,
            Tarangire is a paradise for wildlife lovers. The Tarangire River
            attracts large numbers of elephants and other animals.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Keep your camera ready for lions, leopards, buffaloes, zebras,
            giraffes, antelopes, and numerous bird species. Around midday,
            enjoy a scenic picnic before continuing your game drive. Later,
            return to your lodge to relax and share stories of the day's
            adventures.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Accommodation Options
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-xs font-bold uppercase text-amber-700">
                  Luxury
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Kitela Lodge / Lake Manyara Kilima Moja / The Retreat at Ngorongoro
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Mid-range
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Eileen's Tree Inn / Endoro Lodge / Karatu Simba Lodge
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Budget Camping
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Lilac Campsite / Panorama Campsite
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 3
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          03
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 3
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Journey into the Serengeti
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            After breakfast, journey toward the legendary Serengeti National
            Park, celebrated worldwide for its vast golden plains and its role
            as the heart of the Great Migration. As the scenery unfolds into
            endless savannah, watch for wildebeest, zebras, gazelles and the
            predators that follow them.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Along the way, you may also encounter rock hyrax, bat-eared foxes,
            mongooses, monkeys, baboons and numerous bird species. After a
            thrilling day of game drives, arrive at camp and enjoy dinner under
            the African night sky.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Accommodation Options
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-xs font-bold uppercase text-amber-700">
                  Luxury
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Kubu Kubu Tented Camp / Melia Serengeti Lodge / Four Seasons Serengeti
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Mid-range
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Serengeti Heritage Tented Camp / Embalakai Camp / Acacia Central Camp
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Budget Camping
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Nyani Campsite
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 4
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          04
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 4
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Central Serengeti – Wildlife Encounters
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            Spend the day exploring the heart of the Serengeti. The central
            region is famous for exceptional wildlife activity throughout the
            year. Depending on the season, vast herds move with the rains,
            creating ever-changing wildlife opportunities.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Your experienced guide will monitor the movements of wildlife and
            determine the best areas to explore. You may also visit the
            Serengeti Visitor Centre to learn more about the park's history
            and conservation efforts.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Accommodation Options
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-xs font-bold uppercase text-amber-700">
                  Luxury
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Kubu Kubu Tented Camp / Melia Serengeti Lodge / Four Seasons Serengeti
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Mid-range
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Serengeti Heritage Tented Camp / Embalakai Camp / Acacia Central Camp
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Budget Camping
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Nyani Campsite
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 5 — MIGRATION
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Migration Day
            </span>

            <span className="text-sm font-semibold text-amber-700">
              Following the Herds
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Tracking the Great Migration
          </h4>

          <p className="mt-5 leading-8 text-slate-600">
            The adventure continues as you journey deeper into the Serengeti's
            sweeping plains. Your route today follows the movements of the
            Great Migration, one of nature's most spectacular wildlife events.
            Depending on the time of year, the safari may head north toward the
            Kenyan border or south toward the Ndutu area.
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Migration Regions
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <div>
                <p className="font-bold">May – June</p>
                <p className="mt-1 text-sm text-slate-300">
                  Central Serengeti
                </p>
              </div>

              <div>
                <p className="font-bold">August – October</p>
                <p className="mt-1 text-sm text-slate-300">
                  Northern Serengeti
                </p>
              </div>

              <div>
                <p className="font-bold">January – April</p>
                <p className="mt-1 text-sm text-slate-300">
                  Southern Serengeti – Ndutu
                </p>
              </div>

              <div>
                <p className="font-bold">June – July</p>
                <p className="mt-1 text-sm text-slate-300">
                  Western Serengeti / Western Corridor
                </p>
              </div>

            </div>

          </div>

          <div className="border-t border-amber-200 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Accommodation
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              Accommodation is selected according to the migration season and
              the location of the herds, with luxury and mid-range options
              available in Central, Northern, Southern and Western Serengeti.
            </p>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 6
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          06
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 6
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Full-Day Safari in the Serengeti
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            Following breakfast, embark on another immersive day in the
            Serengeti. From sunrise to sunset, explore more of this iconic
            ecosystem in search of migration herds, predators and breathtaking
            scenery.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Morning and afternoon game drives provide extended opportunities to
            explore the diverse habitats and wildlife that make the Serengeti
            one of the world's premier safari destinations.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Accommodation Options
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-xs font-bold uppercase text-amber-700">
                  Luxury
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Kubu Kubu Tented Camp / Melia Serengeti Lodge / Four Seasons Serengeti
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Mid-range
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Serengeti Heritage Tented Camp / Embalakai Camp / Acacia Central Camp
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Budget Camping
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Nyani Campsite
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 7
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          07
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 7
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Serengeti to Ngorongoro
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            As dawn breaks over the Serengeti plains, set out for one final
            morning game drive. Follow fresh tracks and watch the savannah
            awaken as lions return from night hunts, elephants move across the
            plains and antelope graze in the soft morning light.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            After lunch, bid farewell to the Serengeti and journey toward the
            legendary Ngorongoro Crater. The landscape gradually changes into
            verdant highlands dotted with Maasai villages and rolling hills.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Arrive at your lodge on the crater rim in the late afternoon, where
            you can enjoy spectacular views across the caldera and watch the
            sunset over this extraordinary natural landscape.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Accommodation
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-xs font-bold uppercase text-amber-700">
                  Luxury
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Ngorongoro Serena Lodge / Sanctuary Ngorongoro Crater Camp
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Mid-range
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Rhino Lodge / Ang'ata Ngorongoro Camp
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">
                  Budget Camping
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Nyani Campsite
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 8
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          08
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 8
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Ngorongoro Crater
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            Early this morning, descend into the vast floor of the Ngorongoro
            Crater for an extraordinary wildlife experience. The spectacular
            caldera forms a unique and largely self-contained ecosystem
            supporting an impressive concentration of wildlife.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Explore the crater floor in search of the Big Five, including
            lions, elephants, buffaloes, rhinos and leopards, as well as
            wildebeest, gazelles, reedbuck, hippos and numerous bird species.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Around midday, stop beside a serene hippo pool for a freshly
            prepared picnic lunch. Continue exploring before ascending the
            crater walls and beginning your journey back toward Arusha.
          </p>

          <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Luxury
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                Kitela Lodge / Lake Manyara Kilima Moja / The Retreat at Ngorongoro
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Mid-range
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                Eileen's Tree Inn / Endoro Lodge / Karatu Simba Lodge
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Budget Camping
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                Lilac Campsite / Panorama Campsite
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 9
      ====================================================== */}
      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          09
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 9
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Lake Manyara National Park & Return to Arusha
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            After breakfast, set off for the final stop of your safari:
            picturesque Lake Manyara National Park. The park offers a striking
            combination of lake, forests, open grasslands and dramatic
            landscapes.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            During your final game drive, look out for monkeys, giraffes,
            zebras, wildebeest, buffaloes, elephants and numerous bird species.
            With luck, you may also spot the park's famous tree-climbing lions.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Following your game drive, begin the journey back to Arusha in the
            late afternoon. Arrive in Arusha with your hearts and cameras
            filled with memories of Tanzania's extraordinary wildlife and
            landscapes.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast & Lunch
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                None – Safari Ends
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>


    {/* ========================================================
        MIGRATION SEASON GUIDE
    ======================================================== */}
    <div className="mt-24">

      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
          Plan Around The Migration
        </p>

        <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Seasonal Migration Areas
        </h3>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          The migration moves throughout the Serengeti ecosystem. Your route
          and accommodation can be adapted according to the expected location
          of the herds.
        </p>

      </div>


      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            season: "January – April",
            location: "Southern Serengeti",
            highlight: "Ndutu",
          },
          {
            season: "May – June",
            location: "Central Serengeti",
            highlight: "Migration Movement",
          },
          {
            season: "June – July",
            location: "Western Serengeti",
            highlight: "Western Corridor",
          },
          {
            season: "August – October",
            location: "Northern Serengeti",
            highlight: "Kenya Border",
          },
        ].map((item) => (
          <div
            key={item.season}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl">
              🐃
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-amber-600">
              {item.season}
            </p>

            <h4 className="mt-2 text-lg font-bold text-slate-900">
              {item.location}
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.highlight}
            </p>

          </div>
        ))}

      </div>

    </div>


    {/* ========================================================
        INCLUDED / NOT INCLUDED
    ======================================================== */}
    <div className="mt-24 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white">
            ✓
          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Included
            </p>

            <h3 className="text-2xl font-bold text-slate-900">
              Your Safari Includes
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless clearly labeled as optional",
            "All accommodation unless clearly labeled as optional",
            "A professional driver/guide",
            "All transportation unless clearly labeled as optional",
            "All applicable taxes and VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the day-by-day itinerary",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-slate-700"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                ✓
              </span>

              <span>{item}</span>

            </li>
          ))}

        </ul>

      </div>


      {/* NOT INCLUDED */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl text-white">
            +
          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Not Included
            </p>

            <h3 className="text-2xl font-bold text-slate-900">
              Additional Expenses
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips and gratuities",
            "Suggested tipping guideline of US$10 per person per day",
            "Personal items and souvenirs",
            "Travel insurance",
            "Visa fees and personal documentation costs",
            "Government-imposed increases of taxes and/or park fees",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-slate-600"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-xs font-bold text-slate-700">
                —
              </span>

              <span>{item}</span>

            </li>
          ))}

        </ul>

      </div>

    </div>


    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-center sm:px-12 sm:py-16">

      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Follow The Great Migration
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Follow Africa's Greatest Wildlife Spectacle?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Experience the Serengeti with an experienced safari guide, flexible
          seasonal routing, carefully selected accommodation, and extended
          opportunities to witness the Great Migration.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Plan Your Safari
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
          >
            Request a Quote
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="overflow-hidden bg-[#082D19] text-white">

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12">

          {/* Decorative background */}

          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#F39A08]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />

          <div className="relative z-10">

            {/* FOOTER CONTENT */}

            <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">

              {/* BRAND */}

              <div className="lg:col-span-1">

                <Link to="/" className="inline-block group">

                  <h2 className="font-serif text-3xl font-bold text-white transition-colors group-hover:text-[#F39A08]">
                    Daffar
                  </h2>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-[#F39A08]">
                    Tours & Travel
                  </p>

                </Link>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                  Discover Africa through unforgettable safari adventures,
                  authentic cultural experiences and breathtaking landscapes.
                </p>


                {/* SOCIAL */}

                <div className="mt-6 flex items-center gap-2.5">

                  {/* Facebook */}

                  <a
                    href="https://www.facebook.com/dafartoursandtravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/30"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1z" />
                    </svg>
                  </a>


                  {/* Instagram */}

                  <a
                    href="https://www.instagram.com/dafartoursandtravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#E1306C] to-[#833AB4] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-[#E1306C]/30"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[18px] w-[18px] fill-none stroke-current"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        className="fill-current stroke-none"
                      />
                    </svg>
                  </a>


                  {/* TikTok */}

                  <a
                    href="https://www.tiktok.com/@dafartoursandtravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-black/30"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[17px] w-[17px] fill-current"
                      aria-hidden="true"
                    >
                      <path d="M16.6 3c.3 1.7 1.3 3 3 3.4v3.1c-1.4-.1-2.7-.6-3.8-1.4v6.7c0 4.1-2.7 6.2-6 6.2-3 0-5.3-2.1-5.3-5.1 0-3.2 2.5-5.4 5.7-5.4.3 0 .7 0 1 .1v3.1c-.3-.1-.6-.1-.9-.1-1.5 0-2.6.9-2.6 2.2 0 1.2.9 2.1 2.2 2.1 1.5 0 2.7-1 2.7-3.2V3h4z" />
                    </svg>
                  </a>


                  {/* YouTube */}

                  <a
                    href="https://www.youtube.com/@dafartoursandtravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-[#FF0000]/30"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.9V8.1l6.5 3.9-6.5 3.9z" />
                    </svg>
                  </a>

                </div>

              </div>


              {/* EXPLORE */}

              <div>

                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Explore
                </h3>

                <div className="mt-5 space-y-3">

                  <Link
                    to="/"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/safaris"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    Safaris
                  </Link>

                  

                  <Link
                    to="/activities"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    Activities
                  </Link>

                  <Link
                    to="/contact"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    Contact
                  </Link>

                </div>

              </div>


              {/* DISCOVER */}

              <div>

                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Discover
                </h3>

                <div className="mt-5 space-y-3">

                  <Link
                    to="/communitywork"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    Community Work
                  </Link>

                  <Link
                    to="/tourafricablog"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    Tour Africa Blog
                  </Link>

                  <Link
                    to="/faqs"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    FAQs
                  </Link>

                  <Link
                    to="/safaris"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    Tailor-Made Safaris
                  </Link>

                  <Link
                    to="/safaris"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    Honeymoon Safaris
                  </Link>

                  <Link
                    to="/contact"
                    className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
                  >
                    Plan Your Trip
                  </Link>

                </div>

              </div>


              {/* CONTACT */}

              <div>

                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Contact Us
                </h3>

                <div className="mt-5 space-y-5">

                  {/* LOCATION */}

                  <div className="flex items-start gap-3">

                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F39A08]">
                      📍
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                        Location
                      </p>

                      <p className="mt-1 text-sm text-white/60">
                        Kenya • East Africa
                      </p>

                    </div>

                  </div>


                  {/* EMAIL */}

                  <div className="flex items-start gap-3">

                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F39A08]">
                      ✉
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                        Email
                      </p>

                      <a
                        href="mailto: info@daffar.co.ke"
                        className="mt-1 block text-sm text-white/60 hover:text-[#F39A08] transition-colors"
                      >
                         info@daffar.co.ke
                      </a>

                    </div>

                  </div>


                  {/* PHONE */}

                  <div className="flex items-start gap-3">

                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F39A08]">
                      ☎
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                        Phone
                      </p>

                      <a
                        href="tel:+254708711459"
                        className="mt-1 block text-sm text-white/60 hover:text-[#F39A08] transition-colors"
                      >
                        +254708711459
                      </a>

                    </div>

                  </div>


                  {/* WHATSAPP */}

                 

                </div>

              </div>

            </div>


            {/* BOTTOM BAR */}

            <div className="flex flex-col gap-3 pt-6 md:flex-row md:items-center md:justify-between">

              <p className="text-xs text-white/35">
                © {new Date().getFullYear()} Daffar Tours & Travel. All rights reserved.
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/35">

                <Link
                  to="/terms"
                  className="transition hover:text-[#F39A08]"
                >
                  Terms & Conditions
                </Link>

                <Link
                  to="/privacy"
                  className="transition hover:text-[#F39A08]"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/contact"
                  className="transition hover:text-[#F39A08]"
                >
                  Contact
                </Link>

              </div>

              <p className="text-xs text-white/25">
                Kenya • Africa
              </p>

            </div>

          </div>

        </div>

      </footer>
    </main>
  );
}