/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
//import kili1 from "../assets/kili1.jpg";
//import kili2 from "../assets/kili2.jpg";
//import kili3 from "../assets/kili3.jpg";
//import kili4 from "../assets/kili4.jpg";
import climbingkili from "../assets/climbingkili.jpg";
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
    PAGE HERO — MOUNT KILIMANJARO ITINERARIES
============================================================ */}
<section
  id="kilimanjaro-itineraries-hero"
  className="relative overflow-hidden bg-[#092d1a]"
>
  <img
    src={climbingkili}
    alt="Mount Kilimanjaro"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#061b10]/90 via-[#092d1a]/60 to-[#092d1a]/20" />

  <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[540px] lg:px-12">
    <div className="max-w-3xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
          Mountain Adventures
        </span>
      </div>

      <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Mount Kilimanjaro
        <span className="block text-[#f5c45d]">
          Climbing Itineraries
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
        Take on Africa's highest mountain through carefully planned routes,
        breathtaking landscapes and unforgettable summit experiences.
      </p>
    </div>
  </div>
</section>


  {/* ============================================================
      06 — MOUNTAIN TREKKING
  ============================================================ */}
  <section
    id="mountain-trekking"
    className="relative overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 lg:py-32"
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={climbingkili}
              alt="Mountain trekking in Africa"
              className="h-[470px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[620px]"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 sm:bottom-8 sm:left-8 sm:right-8">
            <div className="rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-[#F5A623]">
                Kilimanjaro
              </p>
              <p className="mt-1 font-serif text-2xl text-white">
                5,895m
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-[#F5A623]">
                Mt. Kenya
              </p>
              <p className="mt-1 font-serif text-2xl text-white">
                5,199m
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B87916]">
            — Mountain Trekking
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#082D19] sm:text-5xl">
            Walk Among
            <span className="block italic text-[#B87916]">
              Giants
            </span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            At Daffar Tours and Travel, we invite you to discover Africa’s
            legendary summits through journeys that blend adventure, beauty,
            and a sense of true achievement.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Climbing Mt. Kilimanjaro, the continent’s highest peak rising to
            5,895 metres, is more than a trek. It is a walk through changing
            worlds — from lush rainforests alive with birdsong, through
            moorlands brushed by mist, to stark alpine deserts.
          </p>

          <div className="mt-8 space-y-4">

            {[
              ["Kilimanjaro", "Machame · Lemosho · Rongai · Marangu"],
              ["Mt. Kenya", "Sirimon · Chogoria · Naro Moru"],
            ].map(([mountain, routes]) => (
              <div
                key={mountain}
                className="rounded-2xl border border-[#082D19]/10 bg-white p-5"
              >
                <h3 className="font-serif text-xl text-[#082D19]">
                  {mountain}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {routes}
                </p>
              </div>
            ))}

          </div>

          <p className="mt-7 leading-8 text-gray-600">
            Both treks promise far more than physical challenge. They are
            journeys into breathtaking landscapes where every sunrise feels
            earned and every horizon opens to new wonder.
          </p>

          <p className="mt-7 font-serif text-xl italic text-[#082D19]">
            Walk with Daffar and discover the spirit of Africa’s mountains.
          </p>

        </div>

      </div>
      {/* ============================================================
    PREMIUM CTA BUTTONS
============================================================ */}


{/* Supporting CTA text */}
<div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
  <span className="h-px w-8 bg-[#F5A623]" />
  <span>Personalized African Journeys</span>
</div>
    </div>
  </section>


{/* ============================================================
    MOUNT KILIMANJARO — DESTINATION
============================================================ */}




{/* ============================================================
    8-DAY KILIMANJARO EXPEDITION – LEMOSHO ROUTE
    10-DAY TOTAL JOURNEY
============================================================ */}
<section
  id="8-day-kilimanjaro-lemosho"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#0b4224]/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[140px]" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-[320px] w-[320px] rounded-full bg-[#0D4825]/5 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b97800]">
        Kilimanjaro Expedition • Lemosho Route
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        8-Day Kilimanjaro Expedition
        <span className="block text-[#0D4825]">
          Lemosho Route
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        The Lemosho Route is renowned for its exceptional scenic beauty and
        gradual ascent toward the summit of Mount Kilimanjaro. Over eight
        trekking days, the route moves through lush forests, high-altitude
        plains, alpine landscapes and glacier-covered slopes, providing a
        well-paced expedition designed to support acclimatization and a
        rewarding summit experience.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* Route Length */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
          ↗
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Route Length
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          ~46 km
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Approximately 28.5 miles
        </p>
      </div>

      {/* Starting Altitude */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-white">
          ↑
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Starting Altitude
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          2,100 m
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Western approach via Londorossi Gate
        </p>
      </div>

      {/* Summit */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
          ★
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Summit
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          5,895 m
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Uhuru Peak — Africa's highest point
        </p>
      </div>

      {/* Ideal For */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-white">
          ✦
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Ideal For
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Serious Trekkers
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Scenic trekking, gradual ascent & acclimatization
        </p>
      </div>
    </div>

    {/* ============================================================
        ROUTE HIGHLIGHT
    ============================================================ */}
    <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-10 sm:px-10 lg:px-14">

      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Why Choose Lemosho
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            A Scenic & Gradual Path to Uhuru Peak
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            The Lemosho Route gives trekkers more time to adapt to the
            increasing altitude while experiencing Kilimanjaro's changing
            landscapes. From rainforest and moorland to the Shira Plateau,
            alpine desert and the summit zone, every stage brings a new
            environment and perspective.
          </p>

        </div>

        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-[#F5A623]/30 bg-[#F5A623]/10 text-3xl text-[#F5A623]">
          🏔
        </div>

      </div>
    </div>

    {/* ============================================================
        ITINERARY INTRO
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Expedition Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          The Journey to Africa's Highest Point
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          From your arrival in Moshi to the final descent through the Mweka
          forest, experience a carefully paced Kilimanjaro expedition through
          some of the mountain's most spectacular landscapes.
        </p>

      </div>

      {/* ============================================================
          TIMELINE
      ============================================================ */}
      <div className="relative mt-14">

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        {/* ========================================================
            DAY 1
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-lg md:flex">
            01
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#082D19] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Day 01
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Arrival in Moshi
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Upon arrival at Kilimanjaro International Airport, a warm
                welcome awaits you. A driver will escort you to your lodge in
                Moshi, where you will settle in and prepare for the adventure
                ahead.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                In the evening, you will meet your mountain guide for a
                comprehensive briefing and gear check before beginning your
                Kilimanjaro expedition.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Dinner
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Overnight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Kaliwa Lodge
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 2
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-white shadow-lg md:flex">
            02
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]">
                Day 02
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Moshi – Londorossi Gate – Forest Camp
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                The journey begins with a drive from Moshi to Londorossi Gate
                for registration. From there, your trek kicks off through lush
                rainforest teeming with life.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Keep an eye out for exotic birds and Colobus monkeys as you
                gradually gain altitude. You will reach Forest Camp by late
                afternoon and settle in for your first night on the mountain.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Duration
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    3–4 Hours
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    2,100m → 2,750m
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Overnight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Forest Camp
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 3
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-lg md:flex">
            03
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#082D19] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Day 03
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Forest Camp – Shira 1 Camp
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                As you ascend from the forest, the trail opens into moorlands
                dotted with giant heathers. The route gradually climbs toward
                Shira Ridge before descending slightly toward Shira 1 Camp.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                The changing landscape provides your first full views toward
                Kilimanjaro's glacier-capped summit while your body continues
                adapting to the increasing altitude.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Duration
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    5–6 Hours
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    2,750m → 3,540m
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Full Board
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Overnight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Shira 1 Camp
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 4
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-white shadow-lg md:flex">
            04
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]">
                Day 04
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Shira 1 – Shira 2 – Moir Hut
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Your trek continues across the expansive Shira Plateau. You
                will pass Shira 2 Camp before heading toward Moir Hut at the
                foot of the Lent Hills.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                This quieter mountain camp provides an excellent setting for
                short acclimatization hikes while you continue gaining
                altitude gradually.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Duration
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    6–7 Hours
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    3,540m → 4,114m
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Full Board
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Overnight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Moir Hut Camp
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 5
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-lg md:flex">
            05
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#082D19] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Day 05
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Moir Hut – Lava Tower – Barranco Camp
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Today brings a steep ascent toward the iconic Lava Tower, a
                volcanic rock structure standing at approximately 4,600 meters.
                The climb provides an important high-altitude acclimatization
                experience.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                After lunch at Lava Tower, you descend toward Barranco Camp.
                The dramatic change in altitude gives you the opportunity to
                climb high before sleeping lower, an important part of the
                acclimatization strategy on Kilimanjaro.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Duration
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    7 Hours
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    4,114m → 4,600m → 3,950m
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Full Board
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Overnight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Barranco Camp
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 6
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-white shadow-lg md:flex">
            06
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]">
                Day 06
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Barranco Camp – Karanga Camp
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                You will begin the day with the thrilling climb up the
                Barranco Wall, one of the most memorable sections of the
                Lemosho Route. The ascent rewards trekkers with dramatic views
                across the surrounding valleys.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                From the top of the wall, the trail winds through alpine
                terrain toward Karanga Camp, nestled in a sheltered basin.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Duration
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    4–5 Hours
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    3,950m → 4,235m
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Full Board
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Overnight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Karanga Camp
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 7
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-lg md:flex">
            07
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#082D19] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Day 07
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Karanga Camp – Barafu Camp
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                The final approach to base camp takes you across increasingly
                rocky alpine terrain as you join the route used later during
                the descent.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                At Barafu Camp, you will rest and prepare for the summit push.
                The evening is focused on final preparations, hydration and
                rest before the climb begins around midnight.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Duration
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    4–5 Hours
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    4,235m → 4,600m
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Full Board
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Overnight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Barafu Camp
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 8
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-white shadow-lg md:flex">
            08
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]">
                Day 08 • Summit Day
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Barafu Camp – Uhuru Peak – Mweka Camp
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Just before midnight, you will begin the ascent toward the
                summit. The steep climb leads toward Stella Point before the
                final push to Uhuru Peak, the highest point on Mount Kilimanjaro
                and the African continent.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                After celebrating your achievement at the summit, begin the
                descent to Barafu for a short break before continuing down to
                Mweka Camp. This is the longest and most demanding day of the
                expedition.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Duration
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    12–14 Hours
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    4,600m → 5,895m → 3,100m
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Full Board
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Overnight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Mweka Camp
                  </p>
                </div>

              </div>

              <div className="mt-7 rounded-2xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-5">

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b97800]">
                  Summit Highlight
                </p>

                <p className="mt-2 leading-7 text-gray-600">
                  Reach <strong>Uhuru Peak at 5,895 meters</strong> and stand
                  at the highest point in Africa before beginning your descent
                  through the southern slopes toward Mweka Camp.
                </p>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 9
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-lg md:flex">
            09
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#082D19] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Day 09
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Mweka Camp – Mweka Gate – Return to Moshi
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                After a hearty breakfast and a farewell ceremony with your
                mountain crew, begin your final descent through the forest
                toward the exit gate.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                A driver will meet you for the transfer back to Moshi, where
                you can enjoy a relaxing evening after completing your
                Kilimanjaro expedition.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Duration
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    3 Hours
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    3,100m → 1,980m
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast & Lunch
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Overnight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Kaliwa Lodge
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 10
        ======================================================== */}
        <div className="relative md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-white shadow-lg md:flex">
            10
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]">
                Day 10 • Departure
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Departure
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Depending on your departure time, you will be transferred to
                the airport for your onward journey, marking the end of your
                Kilimanjaro Lemosho Route expedition.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Not Included
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    {/* ============================================================
        INCLUDED / NOT INCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What's Included
            </h3>
          </div>

        </div>

        <ul className="mt-7 space-y-4">

          {[
            "Airport transfers — pickup upon arrival and drop-off after the trek",
            "All ground transportation between Moshi and the trailhead",
            "One night before the climb in Moshi at Kaliwa Lodge or similar",
            "One night after the climb in Moshi",
            "Full camping accommodation on the mountain",
            "Sleeping and dining tents",
            "All Kilimanjaro National Park entrance fees",
            "Mountain rescue coverage — vehicle evacuation only",
            "Three freshly prepared meals per day while on the mountain",
            "Sleeping tents, dining tents and essential camping equipment",
            "Certified English-speaking mountain guide",
            "Experienced porters, cooks and waitstaff",
            "First aid kit throughout the trek",
            "Use of oximeter for daily altitude checks",
            "All applicable government taxes and levies",
          ].map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-7 text-gray-600"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <span>{item}</span>

            </li>

          ))}

        </ul>
      </div>

      {/* NOT INCLUDED */}
      <div className="rounded-[2rem] border border-[#F5A623]/20 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-white">
            ×
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Excluded
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What's Not Included
            </h3>
          </div>

        </div>

        <ul className="mt-7 space-y-4">

          {[
            "Extra services or purchases at the hotel",
            "Beverages other than drinking water, including sodas and alcohol",
            "Tips for the mountain crew, including guides, porters and cooks",
            "Meals in Moshi unless specifically stated",
            "Personal trekking gear such as sleeping bags, trekking poles and headlamps",
            "International and domestic flights",
            "Any items not specifically listed under Included",
          ].map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-7 text-gray-600"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/15 text-xs font-bold text-[#b97800]">
                ×
              </span>

              <span>{item}</span>

            </li>

          ))}

        </ul>
      </div>

    </div>

    {/* ============================================================
        EXPEDITION HIGHLIGHTS
    ============================================================ */}
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">
        <span className="text-2xl">🌿</span>

        <h4 className="mt-4 font-serif text-xl font-bold text-[#082D19]">
          Rainforest
        </h4>

        <p className="mt-2 text-sm leading-7 text-gray-600">
          Begin through lush montane forest alive with birds and wildlife.
        </p>
      </div>

      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">
        <span className="text-2xl">🏔</span>

        <h4 className="mt-4 font-serif text-xl font-bold text-[#082D19]">
          Shira Plateau
        </h4>

        <p className="mt-2 text-sm leading-7 text-gray-600">
          Cross the expansive high-altitude plateau beneath Kilimanjaro's
          dramatic summit.
        </p>
      </div>

      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">
        <span className="text-2xl">🧗</span>

        <h4 className="mt-4 font-serif text-xl font-bold text-[#082D19]">
          Barranco Wall
        </h4>

        <p className="mt-2 text-sm leading-7 text-gray-600">
          Take on one of the most memorable and dramatic sections of the route.
        </p>
      </div>

      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">
        <span className="text-2xl">🏆</span>

        <h4 className="mt-4 font-serif text-xl font-bold text-[#082D19]">
          Uhuru Peak
        </h4>

        <p className="mt-2 text-sm leading-7 text-gray-600">
          Stand at 5,895 metres above sea level at the highest point in Africa.
        </p>
      </div>

    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-12 text-center sm:px-10 lg:py-16">

      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Climb Kilimanjaro
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Your Journey to Uhuru Peak Starts Here
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Take on the spectacular Lemosho Route with an experienced mountain
          crew, carefully planned acclimatization and the support you need for
          an unforgettable Kilimanjaro expedition.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f7c45d] hover:shadow-xl"
          >
            Start Planning
            <span className="ml-2">→</span>
          </a>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
            <span className="ml-2">↗</span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>


{/* ============================================================
    5-DAY KILIMANJARO ADVENTURE – MARANGU ROUTE
    7-DAY TOTAL JOURNEY
============================================================ */}
<section
  id="5-day-kilimanjaro-maranguru"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#0b4224]/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[140px]" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-[320px] w-[320px] rounded-full bg-[#0D4825]/5 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b97800]">
        Kilimanjaro Adventure • Marangu Route
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        5-Day Kilimanjaro Adventure
        <span className="block text-[#0D4825]">
          Via Marangu Route
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Popularly known as the Coca-Cola Route, the Marangu Route is the most
        historic and well-traveled path to the roof of Africa. With shared
        mountain huts instead of tented camps, it offers a different style of
        Kilimanjaro experience while providing spectacular views of Kibo and
        Mawenzi peaks.
      </p>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600">
        The five-day option is best suited to experienced hikers with prior
        high-altitude trekking experience. First-time climbers are encouraged
        to consider the six-day option for additional acclimatization.
      </p>

    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* Duration */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
          ⏱
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Trek Duration
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          5 Days
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Mountain trek with Moshi arrival and departure days
        </p>

      </div>

      {/* Route */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-white">
          ↗
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Route
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Marangu
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Approximately 64 km / 40 miles round trip
        </p>

      </div>

      {/* Summit */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
          ★
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Summit
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Uhuru Peak
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          5,895 metres — the highest point in Africa
        </p>

      </div>

      {/* Accommodation */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-white">
          ⛺
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Mountain Stay
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Mountain Huts
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Shared sleeping huts along the Marangu trail
        </p>

      </div>

    </div>

    {/* ============================================================
        ROUTE HIGHLIGHT
    ============================================================ */}
    <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-10 sm:px-10 lg:px-14">

      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            The Coca-Cola Route
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            A Historic Path to the Roof of Africa
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            Marangu is the only Kilimanjaro route that uses shared mountain
            huts throughout the main trekking stages. The trail passes through
            rainforest, heath and moorland, alpine desert and the high summit
            zone before reaching Uhuru Peak.
          </p>

        </div>

        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-[#F5A623]/30 bg-[#F5A623]/10 text-3xl text-[#F5A623]">
          🏔
        </div>

      </div>
    </div>

    {/* ============================================================
        ITINERARY INTRO
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Expedition Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          From Moshi to Uhuru Peak
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Follow the historic Marangu trail from the lush lower slopes of
          Kilimanjaro through the mountain's distinct ecological zones to the
          summit of Africa's highest peak.
        </p>

      </div>

      {/* ============================================================
          TIMELINE
      ============================================================ */}
      <div className="relative mt-14">

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        {/* ========================================================
            DAY 1
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-lg md:flex">
            01
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#082D19] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Day 01
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Touchdown in Moshi – Trek Briefing & Gear Check
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Upon landing at Kilimanjaro International Airport, you will be
                greeted by our representative and driven to your hotel in
                Moshi. Once settled, you will meet your mountain guide for a
                full briefing on the upcoming climb.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Your guide will conduct a thorough inspection of your trekking
                gear to ensure everything is ready for the expedition. The
                remainder of the afternoon is yours to rest or explore Moshi
                at your own pace.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Travel Time
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Approximately 1 Hour
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Dinner
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5 sm:col-span-2">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Kaliwa Lodge
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 2
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-white shadow-lg md:flex">
            02
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]">
                Day 02
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Marangu Gate – Mandara Hut
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                After breakfast, you will travel to the Kilimanjaro National
                Park entrance at Marangu Gate for registration. From the gate,
                your hike begins through the dense and misty rainforest.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Keep an eye out for black-and-white colobus monkeys as you
                ascend along the forest trails toward Mandara Hut. Lunch is
                served along the route, and upon arrival at the hut your
                mountain team will arrange everything for the evening.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Time
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    3–4 Hours
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    1,980m → 2,700m
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Mandara Huts
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 3
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-lg md:flex">
            03
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#082D19] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Day 03
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Mandara Hut – Horombo Hut
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Today's trail emerges from the rainforest and opens into
                expansive heath and moorland. The changing landscape reveals
                a completely different side of Kilimanjaro.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                You will have the option to take a short detour toward Maundi
                Crater for impressive views toward the towering Kibo cone.
                Giant lobelias, groundsels and other distinctive alpine plants
                decorate this section of the mountain.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                By late afternoon, you will reach Horombo Hut where you will
                spend the night.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Time
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    5–6 Hours
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    2,700m → 3,720m
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Horombo Huts
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 4
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-white shadow-lg md:flex">
            04
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]">
                Day 04
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Horombo Hut – Kibo Hut
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Leaving the vegetation zones behind, you will enter the alpine
                desert, an increasingly arid and windy section of Kilimanjaro.
                The trail climbs steadily toward Kibo Hut.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Depending on conditions and preference, you may follow either
                the upper acclimatization path or the lower direct route. Both
                trails eventually converge at Kibo Hut, your base before the
                summit attempt.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                After an early dinner, you will rest and prepare for the
                midnight summit attempt.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Time
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    5–6 Hours
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    3,720m → 4,700m
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Kibo Huts
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 5
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-lg md:flex">
            05
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#082D19] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Day 05 • Summit Day
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Kibo Hut – Uhuru Peak – Horombo Hut
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                The summit climb begins just before midnight. With your
                headlamp lighting the way, you will climb steeply toward Hans
                Meyer Cave before continuing toward Gilman's Point at 5,681
                metres on the crater rim.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                From Gilman's Point, continue along the snowy crater ridge
                toward Uhuru Peak, the highest point on Mount Kilimanjaro and
                the African continent.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                After celebrating at the summit, descend to Kibo Hut for a
                short rest and hot meal before continuing down to Horombo Hut
                for the night.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Time
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    12–14 Hours
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Summit
                  </p>

                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    5,895m — Uhuru Peak
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Horombo Huts
                  </p>

                </div>

              </div>

              <div className="mt-7 rounded-2xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-5">

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b97800]">
                  Summit Highlight
                </p>

                <p className="mt-2 leading-7 text-gray-600">
                  Reach <strong>Uhuru Peak at 5,895 metres</strong>, the highest
                  point in Africa, before beginning your descent toward
                  Horombo Hut.
                </p>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 6
        ======================================================== */}
        <div className="relative mb-10 md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-white shadow-lg md:flex">
            06
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]">
                Day 06
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Horombo Hut – Marangu Gate – Return to Moshi
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                After breakfast, begin your final descent through the heath and
                rainforest zones toward Marangu Gate. Once you sign out, you
                will receive your climbing certificate.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Green certificates are awarded to climbers who reach Gilman's
                Point, while gold certificates are presented to those who
                successfully reach Uhuru Peak.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                From Marangu Gate, you will be driven back to Moshi for a
                refreshing shower and a well-deserved evening of relaxation.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Hiking Time
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Approximately 6 Hours
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Altitude
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    3,720m → 1,980m
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast & Lunch
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Kaliwa Lodge
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            DAY 7
        ======================================================== */}
        <div className="relative md:pl-16">

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-lg md:flex">
            07
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#082D19] px-6 py-6 sm:px-8">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Day 07 • Departure
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Departure Day or Optional Activities
              </h4>

            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Enjoy breakfast at your lodge before checking out. Depending
                on your departure schedule, we will provide a transfer to the
                airport for your onward journey.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                If your flight schedule allows, optional activities or
                additional arrangements can be organized before your
                departure.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Transfer Time
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Approximately 1 Hour
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast
                  </p>

                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Not Included
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    {/* ============================================================
        INCLUDED / NOT INCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What's Included
            </h3>

          </div>

        </div>

        <ul className="mt-7 space-y-4">

          {[
            "Airport transfers — pickup upon arrival and drop-off after the trek",
            "All ground transportation between Moshi and the trailhead",
            "One night before the climb in Moshi at Kaliwa Lodge or similar",
            "One night after the climb in Moshi",
            "Mountain accommodation along the Marangu Route",
            "Kilimanjaro National Park entrance fees",
            "Mountain rescue coverage — vehicle evacuation only",
            "Three freshly prepared meals per day while on the mountain",
            "Sleeping and essential mountain camping equipment where required",
            "Certified English-speaking mountain guide",
            "Experienced porters, cooks and waitstaff",
            "First aid kit throughout the trek",
            "Use of oximeter for daily altitude checks",
            "All applicable government taxes and levies",
          ].map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-7 text-gray-600"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <span>{item}</span>

            </li>

          ))}

        </ul>
      </div>

      {/* NOT INCLUDED */}
      <div className="rounded-[2rem] border border-[#F5A623]/20 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-white">
            ×
          </div>

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Excluded
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What's Not Included
            </h3>

          </div>

        </div>

        <ul className="mt-7 space-y-4">

          {[
            "Extra services or purchases at the hotel",
            "Beverages other than drinking water, including sodas and alcohol",
            "Tips for the mountain crew, including guides, porters and cooks",
            "Meals in Moshi unless specifically stated",
            "Personal trekking gear such as sleeping bags, trekking poles and headlamps",
            "International and domestic flights",
            "Any items not specifically listed under Included",
          ].map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-7 text-gray-600"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/15 text-xs font-bold text-[#b97800]">
                ×
              </span>

              <span>{item}</span>

            </li>

          ))}

        </ul>
      </div>

    </div>

    {/* ============================================================
        MARANGU ROUTE HIGHLIGHTS
    ============================================================ */}
    <div className="mt-14">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Route Highlights
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Experience Kilimanjaro's Changing Landscapes
        </h3>

      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {/* Rainforest */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <span className="text-2xl">
            🌿
          </span>

          <h4 className="mt-4 font-serif text-xl font-bold text-[#082D19]">
            Rainforest
          </h4>

          <p className="mt-2 text-sm leading-7 text-gray-600">
            Trek through lush forest filled with unique vegetation and
            opportunities to spot black-and-white colobus monkeys.
          </p>

        </div>

        {/* Moorland */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <span className="text-2xl">
            🌱
          </span>

          <h4 className="mt-4 font-serif text-xl font-bold text-[#082D19]">
            Heath & Moorland
          </h4>

          <p className="mt-2 text-sm leading-7 text-gray-600">
            Discover giant lobelias, groundsels and wide-open highland
            landscapes around Horombo.
          </p>

        </div>

        {/* Alpine Desert */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <span className="text-2xl">
            🏜
          </span>

          <h4 className="mt-4 font-serif text-xl font-bold text-[#082D19]">
            Alpine Desert
          </h4>

          <p className="mt-2 text-sm leading-7 text-gray-600">
            Cross the stark and dramatic alpine zone as you approach Kibo
            Hut and the summit.
          </p>

        </div>

        {/* Summit */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <span className="text-2xl">
            🏆
          </span>

          <h4 className="mt-4 font-serif text-xl font-bold text-[#082D19]">
            Uhuru Peak
          </h4>

          <p className="mt-2 text-sm leading-7 text-gray-600">
            Reach 5,895 metres and stand at the highest point on the African
            continent.
          </p>

        </div>

      </div>
    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-12 text-center sm:px-10 lg:py-16">

      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Climb Kilimanjaro
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Take the Historic Route to Uhuru Peak
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Experience the legendary Marangu Route with an experienced mountain
          crew, comfortable hut accommodation and the support you need for an
          unforgettable journey to the roof of Africa.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f7c45d] hover:shadow-xl"
          >
            Start Planning
            <span className="ml-2">
              →
            </span>
          </a>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
            <span className="ml-2">
              ↗
            </span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>

{/* ============================================================
    6-DAY KILIMANJARO ADVENTURE VIA RONGAI ROUTE
    NORTHERN TRAIL EXPERIENCE
============================================================ */}
<section
  id="6-day-kilimanjaro-rongai"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0b4224]/10 blur-[140px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#0D4825]/5 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b87900]">
        Kilimanjaro • Northern Trail
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        6-Day Kilimanjaro Adventure
        <span className="block text-[#F5A623]">
          Via Rongai Route
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
        The Rongai Route offers a peaceful and scenic approach to Mount
        Kilimanjaro from the northern frontier, close to the Kenyan border.
        Known for its gradual ascent, diverse ecosystems and spectacular views
        of Mawenzi Peak, this route provides a rewarding path to Uhuru Peak,
        Africa’s highest point.
      </p>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500">
        With quieter trails and a steady altitude gain, Rongai is an excellent
        choice for experienced trekkers seeking a balanced climb away from
        some of Kilimanjaro’s busier routes.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* FACT 1 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white">
          8
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Complete Journey
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          8 Days
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Including arrival, mountain trek and departure.
        </p>
      </div>

      {/* FACT 2 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-lg font-bold text-[#082D19]">
          R
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Route
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          Rongai Route
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Northern approach from near the Kenyan border.
        </p>
      </div>

      {/* FACT 3 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white">
          5
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Summit
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          5,895m
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Uhuru Peak, the highest point in Africa.
        </p>
      </div>

      {/* FACT 4 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-lg font-bold text-[#082D19]">
          65
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Approx. Distance
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          65 km
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Approximately 40 miles across the route.
        </p>
      </div>
    </div>

    {/* ============================================================
        ROUTE HIGHLIGHT
    ============================================================ */}
    <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-[#082D19] px-7 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-14">

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Northern Trail Experience
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            A Peaceful Path to the Roof of Africa
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            Beginning at Nalemoru Gate on Kilimanjaro’s northern side, the
            Rongai Route passes through forest, moorland, alpine desert and
            high-altitude terrain before joining the final approach toward
            Uhuru Peak.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              Starting Point
            </p>
            <p className="mt-1 font-semibold text-white">
              Nalemoru Gate
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              Key Landmark
            </p>
            <p className="mt-1 font-semibold text-white">
              Mawenzi Tarn
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              Summit
            </p>
            <p className="mt-1 font-semibold text-white">
              Uhuru Peak • 5,895m
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Safari Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Eight Days from Moshi to Uhuru Peak
        </h3>

        <p className="mt-5 leading-7 text-gray-600">
          Follow the northern trail through Kilimanjaro’s changing ecosystems,
          from lush forest and moorland to the dramatic alpine desert and
          Africa’s highest summit.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative mt-14">

        {/* TIMELINE LINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-10">

          {/* ========================================================
              DAY 1
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 1
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Arrival in Tanzania – Journey to Moshi
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  Approx. 1 hour transfer
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Upon your arrival at the airport, a member of our team will
                  warmly welcome you and provide a private transfer to your
                  hotel in Moshi. After checking in, you’ll meet your mountain
                  guide for a detailed pre-trek orientation and gear inspection.
                  You’ll then have time to unwind or explore the town as you
                  prepare for the climb.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 2
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 2
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Nalemoru Gate to First Caves Camp
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  1,950m → 2,600m • Approx. 5 hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Following breakfast, you’ll be driven to Nalemoru Gate for
                  park formalities. The trek begins through lush forest trails
                  alive with wildlife, especially black-and-white colobus
                  monkeys and exotic birds. The atmosphere is often misty and
                  rich with vegetation. Midday lunch is served on the trail
                  before arriving at First Caves Camp, where your support team
                  will have already set up tents and prepared hot water and
                  dinner.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Hiking
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      ~5 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      First Caves Camp
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 3
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 3
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  First Caves Camp to Kikelewa Camp
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  2,600m → 3,600m • 6–7 hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Today’s climb takes you past Second Caves Camp at 3,450m,
                  providing a scenic lunch stop along the route. From there,
                  you’ll continue upward to Kikelewa Campsite, where expansive
                  views begin to unfold. As you leave the forest zone and enter
                  the moorland region, temperatures will noticeably drop,
                  especially at night.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Hiking
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      6–7 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kikelewa Camp
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 4
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 4
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Kikelewa to Mawenzi Tarn Camp
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  3,600m → 4,330m • 3–4 hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  A shorter yet steeper climb today brings you to the striking
                  Mawenzi Tarn, set beneath the jagged peaks of Mawenzi. The
                  trail weaves through an alpine landscape dotted with giant
                  lobelias and groundsels. You’ll reach camp by early afternoon,
                  leaving ample time for acclimatization and enjoying spectacular
                  mountain views.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Hiking
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      3–4 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Altitude
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      4,330m
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mawenzi Tarn Camp
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 5
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 5
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Mawenzi Tarn to Kibo Hut
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  4,330m → 4,700m • 4–5 hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  You’ll journey across the barren saddle separating Mawenzi
                  and Kibo, trekking through a high-altitude desert environment.
                  This stark but beautiful landscape creates the feeling of
                  walking on another planet. By early afternoon, you’ll arrive
                  at Kibo Hut, where you’ll rest, eat an early dinner and
                  prepare for your midnight summit push.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Hiking
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      4–5 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Altitude
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      4,700m
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kibo Hut
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 6 - SUMMIT
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#F5A623]/30 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-7 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 6 • Summit Day
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Kibo Hut to Uhuru Peak & Horombo Hut
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  4,700m → 5,895m → 3,720m • 12–14 hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                {/* SUMMIT HIGHLIGHT */}
                <div className="mb-7 rounded-3xl bg-[#082D19] p-6 sm:p-7">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
                        Africa’s Highest Point
                      </p>

                      <h5 className="mt-2 font-serif text-3xl font-bold text-white">
                        Uhuru Peak
                      </h5>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                        Elevation
                      </p>
                      <p className="mt-1 text-2xl font-bold text-[#F5A623]">
                        5,895m
                      </p>
                    </div>

                  </div>
                </div>

                <p className="leading-8 text-gray-600">
                  The summit attempt begins just after midnight, under the glow
                  of headlamps and starlit skies. The trail leads past Hans
                  Meyer Cave at 5,150m, continuing steadily to Gilman’s Point
                  at 5,681m on the crater rim. From here, the final stretch to
                  Uhuru Peak—Africa’s highest point—is within reach.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  After soaking in your achievement, you’ll descend back to
                  Kibo Hut for a rest and brunch before continuing the downward
                  hike to Horombo Hut for your last night on the mountain.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Trekking
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      12–14 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Summit
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Uhuru Peak • 5,895m
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Horombo Hut
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 7
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 7
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Horombo Hut to Marangu Gate – Transfer to Moshi
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  3,720m → 1,980m • 5–6 hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your final trek takes you through the lush rainforest back to
                  Marangu Gate, where you’ll sign out and receive your official
                  summit certificate—green if you reached Gilman’s Point, and
                  gold if you stood atop Uhuru Peak. After heartfelt farewells
                  and traditional songs from your crew, you’ll be transferred
                  back to Moshi to relax and enjoy a warm shower.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Hiking
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      5–6 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast & Lunch
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 8
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              8
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 8
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Departure – Transfer to Airport
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  Approx. 1 hour transfer
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, you’ll be transported to the airport for
                  your departure flight, bringing your Kilimanjaro adventure
                  to a memorable close.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Not Included
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        ROUTE HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Route Highlights
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          From Forest to Alpine Desert
        </h3>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">
          <div className="text-3xl">🌿</div>
          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Northern Forest
          </h4>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Begin beneath a lush forest canopy with opportunities to see
            colobus monkeys and diverse birdlife.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">
          <div className="text-3xl">🏔️</div>
          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Mawenzi Views
          </h4>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Enjoy dramatic views of Mawenzi and spend time at the spectacular
            Mawenzi Tarn.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">
          <div className="text-3xl">🌋</div>
          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Alpine Desert
          </h4>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Cross the stark high-altitude saddle between Mawenzi and Kibo
            before the summit push.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">
          <div className="text-3xl">🏆</div>
          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Uhuru Peak
          </h4>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Stand at 5,895m on the highest point of Mount Kilimanjaro and
            celebrate an extraordinary achievement.
          </p>
        </div>

      </div>
    </div>

    {/* ============================================================
        INCLUDED / NOT INCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-7 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Your Trek Includes
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-5">

          {[
            [
              "Airport Transfers",
              "Pickup upon arrival and drop-off after the trek.",
            ],
            [
              "Ground Transport",
              "All transfers between Moshi and the trailhead.",
            ],
            [
              "Accommodation",
              "One night before and one night after the climb in Moshi, plus mountain camping accommodation.",
            ],
            [
              "National Park Fees",
              "All Kilimanjaro park entrance fees.",
            ],
            [
              "Rescue Fees",
              "Mountain rescue coverage with vehicle evacuation.",
            ],
            [
              "Meals",
              "Three freshly prepared meals per day while on the mountain.",
            ],
            [
              "Camping Equipment",
              "Sleeping tents, dining tents and essential camping equipment.",
            ],
            [
              "Professional Crew",
              "Certified English-speaking mountain guide, experienced porters, cooks and waitstaff.",
            ],
            [
              "Mountain Support",
              "First aid kit and oximeter for daily altitude checks.",
            ],
            [
              "Taxes",
              "Applicable government levies.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="flex gap-4">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <div>
                <h4 className="font-semibold text-[#082D19]">
                  {title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* NOT INCLUDED */}
      <div className="rounded-[2rem] border border-[#F5A623]/20 bg-[#F5A623]/5 p-7 sm:p-9">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-[#082D19]">
            !
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b87900]">
              Not Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Additional Expenses
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-5">

          {[
            [
              "Hotel Extras",
              "Extra services or purchases at the hotel.",
            ],
            [
              "Additional Beverages",
              "Drinks other than drinking water, including sodas and alcohol.",
            ],
            [
              "Mountain Crew Tips",
              "Tips for guides, porters, cooks and other crew members.",
            ],
            [
              "Meals in Moshi",
              "Meals in Moshi unless specifically stated in the itinerary.",
            ],
            [
              "Personal Trekking Gear",
              "Sleeping bags, trekking poles, headlamps and other personal equipment.",
            ],
            [
              "Flights",
              "International and domestic flights.",
            ],
            [
              "Other Expenses",
              "Anything not specifically listed under Included.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="flex gap-4">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/20 text-xs font-bold text-[#8a5d00]">
                ×
              </span>

              <div>
                <h4 className="font-semibold text-[#082D19]">
                  {title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-[#082D19] px-7 py-12 text-center shadow-2xl sm:px-12 sm:py-16">

      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Your Kilimanjaro Adventure
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Take the Northern Trail?
        </h3>

        <p className="mt-5 leading-8 text-white/70">
          Begin your journey through Kilimanjaro’s northern landscapes and
          experience the achievement of standing at Uhuru Peak.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f7c15b]"
          >
            Start Planning
            <span>→</span>
          </a>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            WhatsApp Us
            <span>↗</span>
          </a>

        </div>
      </div>
    </div>

  </div>
</section>

{/* ============================================================
    6-DAY KILIMANJARO TREK VIA THE MARANGU TRAIL
============================================================ */}
<section
  id="6-day-kilimanjaro-marangu"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0b4224]/10 blur-[140px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#0D4825]/5 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b87900]">
        Kilimanjaro • Marangu Trail
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        6-Day Kilimanjaro Trek
        <span className="block text-[#F5A623]">
          Via the Marangu Trail
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
        Known as the “Coca-Cola Route,” the Marangu Trail is one of
        Kilimanjaro’s most established routes, offering hut accommodation,
        diverse landscapes and a gradual approach to Africa’s highest summit.
      </p>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500">
        This extended six-day trek includes an important acclimatization day
        at Horombo Hut, giving first-time climbers additional time to adapt to
        altitude before the summit attempt.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* FACT 1 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white">
          8
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Complete Journey
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          8 Days
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Including arrival, trek and departure.
        </p>
      </div>

      {/* FACT 2 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-lg font-bold text-[#082D19]">
          M
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Route
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          Marangu
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          The historic “Coca-Cola Route.”
        </p>
      </div>

      {/* FACT 3 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white">
          5
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Summit
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          5,895m
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Uhuru Peak, the highest point in Africa.
        </p>
      </div>

      {/* FACT 4 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-lg font-bold text-[#082D19]">
          H
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Accommodation
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          Mountain Huts
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Mandara, Horombo and Kibo huts.
        </p>
      </div>

    </div>

    {/* ============================================================
        ROUTE HIGHLIGHT
    ============================================================ */}
    <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-[#082D19] px-7 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-14">

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            The Coca-Cola Route
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            A Classic Journey to the Roof of Africa
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            The Marangu Trail takes you from the lush rainforest through
            open moorland and the high-altitude alpine desert before the
            demanding summit ascent to Uhuru Peak. The additional
            acclimatization day at Horombo provides valuable time to rest
            and adapt before summit day.
          </p>

        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              First Hut
            </p>

            <p className="mt-1 font-semibold text-white">
              Mandara • 2,700m
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              Acclimatization
            </p>

            <p className="mt-1 font-semibold text-white">
              Horombo • 3,720m
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              Summit
            </p>

            <p className="mt-1 font-semibold text-white">
              Uhuru Peak • 5,895m
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Safari Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Six Days on the Mountain
        </h3>

        <p className="mt-5 leading-7 text-gray-600">
          Follow the classic Marangu Trail from the rainforest to the summit,
          with an additional acclimatization day at Horombo before the final
          push to Uhuru Peak.
        </p>

      </div>

      {/* TIMELINE */}
      <div className="relative mt-14">

        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-10">

          {/* ========================================================
              DAY 1
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 1
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Arrival in Tanzania – Transfer to Moshi
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  Approx. 1 hour drive
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Upon landing at Kilimanjaro International Airport, you’ll be
                  met by our driver and escorted to your accommodation in
                  Moshi. Once checked in, your lead guide will brief you on
                  the trek ahead and ensure your gear is properly prepared.
                  You can spend the rest of the day relaxing or taking a
                  short stroll around town.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 2
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 2
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Marangu Gate to Mandara Hut
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  1,980m → 2,700m • 3–4 hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After an early breakfast, we head to Marangu Park Gate to
                  officially begin your mountain adventure. Once park
                  registration is complete and porters have arranged the gear,
                  we set off through a dense rainforest. This first stretch is
                  full of life, and you might spot black-and-white colobus
                  monkeys or hear tropical birds singing. Lunch will be
                  enjoyed on the trail. By late afternoon, you’ll arrive at
                  Mandara Hut, where you’ll have hot drinks, dinner and time
                  to rest.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Hiking
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      3–4 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Altitude
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      2,700m
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mandara Hut
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">
                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 3
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 3
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Mandara Hut to Horombo Hut
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  2,700m → 3,720m • 6 hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Today’s hike transitions out of the rainforest and into open
                  moorland. The air becomes cooler and the scenery more
                  expansive. Keep an eye out for unique plants such as giant
                  groundsel and lobelias. Weather permitting, you’ll get your
                  first views of both Mawenzi and Kibo peaks. Arrive at
                  Horombo Hut in the afternoon, where warm drinks and dinner
                  will be waiting.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Hiking
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      6 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Altitude
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      3,720m
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Horombo Hut
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">
                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 4 - ACCLIMATIZATION
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#F5A623]/30 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-7 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 4 • Acclimatization Day
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Rest at Horombo Hut
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  Optional hike to Mawenzi Ridge • Up to 4,600m
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <div className="mb-7 rounded-3xl bg-[#082D19] p-6 sm:p-7">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
                        Acclimatization
                      </p>

                      <h5 className="mt-2 font-serif text-2xl font-bold text-white">
                        Climb High • Rest at Horombo
                      </h5>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                        Optional Elevation
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#F5A623]">
                        4,600m
                      </p>
                    </div>

                  </div>

                </div>

                <p className="leading-8 text-gray-600">
                  This day is reserved for rest and acclimatization, which is
                  vital for a safe and successful summit attempt. You can
                  choose to take a light hike to Mawenzi Ridge to further help
                  your body adapt to the high altitude. The optional walk also
                  offers excellent photographic opportunities of the rugged
                  volcanic terrain. After your short trek, return to Horombo
                  for meals and rest.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Purpose
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Acclimatization
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Optional Hike
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mawenzi Ridge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Horombo Hut
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">
                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 5
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 5
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Horombo Hut to Kibo Hut
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  3,720m → 4,700m • 6 hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  You’ll leave the moorland behind and continue your journey
                  into the alpine desert zone. Today’s walk is long and steady
                  across the “Saddle,” a windswept plain that stretches between
                  Mawenzi and Kibo. By mid-afternoon, you’ll reach Kibo Hut,
                  your final base before the summit push. After an early
                  dinner, it’s off to bed to rest before the midnight ascent.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Hiking
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      6 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Altitude
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      4,700m
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kibo Hut
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">
                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 6 - SUMMIT
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#F5A623]/30 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-7 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 6 • Summit Day
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Kibo Hut to Uhuru Peak & Horombo Hut
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  4,700m → 5,895m → 3,720m • 12–14 hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                {/* SUMMIT HIGHLIGHT */}
                <div className="mb-7 rounded-3xl bg-[#082D19] p-6 sm:p-7">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
                        Africa’s Highest Point
                      </p>

                      <h5 className="mt-2 font-serif text-3xl font-bold text-white">
                        Uhuru Peak
                      </h5>

                      <p className="mt-2 text-sm text-white/60">
                        Via Gilman’s Point on the crater rim
                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

                      <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                        Elevation
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#F5A623]">
                        5,895m
                      </p>

                    </div>

                  </div>

                </div>

                <p className="leading-8 text-gray-600">
                  Summit day begins shortly before midnight. You’ll start the
                  slow, steady climb under a starlit sky. After several hours,
                  you’ll reach Gilman’s Point at 5,681m on the crater rim—a
                  major milestone. From there, it’s another 1.5–2 hours to the
                  roof of Africa: Uhuru Peak at 5,895m.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  After celebrating your achievement with photos, you’ll
                  descend back to Kibo Hut for a rest and some hot food before
                  continuing down to Horombo Hut for a well-earned sleep.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Trekking
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      12–14 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Summit
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Uhuru Peak • 5,895m
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Horombo Hut
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">
                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 7
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 7
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Horombo Hut to Marangu Gate – Return to Moshi
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  3,720m → 1,980m • 6 hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your final day on the mountain begins with breakfast and
                  farewells to the mountain crew. You’ll descend back through
                  the forest to Marangu Gate. After signing out and receiving
                  your summit certificate—green for Gilman’s Point or gold for
                  Uhuru Peak—a private transfer will take you back to Moshi
                  where you can rest, reflect and enjoy a proper shower.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Hiking
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      6 Hours
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast & Lunch
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 8
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              8
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 8
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Departure Day
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, we’ll provide transport to the airport for
                  your outbound flight.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Not Included
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        ROUTE HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Route Highlights
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          A Journey Through Kilimanjaro’s Ecosystems
        </h3>

      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* HIGHLIGHT 1 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">

          <div className="text-3xl">
            🌿
          </div>

          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Rainforest
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Begin beneath a lush forest canopy surrounded by rich vegetation,
            birds and the possibility of spotting colobus monkeys.
          </p>

        </div>

        {/* HIGHLIGHT 2 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">

          <div className="text-3xl">
            🌱
          </div>

          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Moorland
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Cross open highland landscapes filled with giant groundsel,
            lobelias and dramatic views of Mawenzi and Kibo.
          </p>

        </div>

        {/* HIGHLIGHT 3 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">

          <div className="text-3xl">
            🏔️
          </div>

          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Alpine Desert
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Cross the windswept Saddle between Mawenzi and Kibo before
            reaching the high-altitude Kibo Hut.
          </p>

        </div>

        {/* HIGHLIGHT 4 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">

          <div className="text-3xl">
            🏆
          </div>

          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Uhuru Peak
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Reach 5,895m and stand at the highest point of Mount Kilimanjaro
            after your midnight summit ascent.
          </p>

        </div>

      </div>
    </div>

    {/* ============================================================
        INCLUDED / NOT INCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-7 lg:grid-cols-2">

      {/* ============================================================
          INCLUDED
      ============================================================ */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Your Trek Includes
            </h3>

          </div>
        </div>

        <div className="mt-8 space-y-5">

          {[
            [
              "Airport Transfers",
              "Pickup upon arrival and drop-off after the trek.",
            ],
            [
              "Ground Transport",
              "All transfers between Moshi and the trailhead at the start and end of the climb.",
            ],
            [
              "Accommodation",
              "One night before the climb in Moshi, one night after the climb in Moshi, and mountain hut accommodation along the Marangu Route.",
            ],
            [
              "National Park Fees",
              "All Kilimanjaro park entrance fees.",
            ],
            [
              "Rescue Fees",
              "Mountain rescue coverage with vehicle evacuation.",
            ],
            [
              "Meals",
              "Three freshly prepared meals per day while on the mountain.",
            ],
            [
              "Mountain Accommodation",
              "Accommodation in the designated Mandara, Horombo and Kibo mountain huts.",
            ],
            [
              "Professional Crew",
              "Certified English-speaking mountain guide, experienced porters, cooks and waitstaff.",
            ],
            [
              "Mountain Support",
              "First aid kit available throughout the trek and use of an oximeter for daily altitude checks.",
            ],
            [
              "Taxes",
              "All applicable government levies.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="flex gap-4"
            >

              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <div>

                <h4 className="font-semibold text-[#082D19]">
                  {title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {text}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ============================================================
          NOT INCLUDED
      ============================================================ */}
      <div className="rounded-[2rem] border border-[#F5A623]/20 bg-[#F5A623]/5 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-[#082D19]">
            !
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b87900]">
              Not Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Additional Expenses
            </h3>

          </div>
        </div>

        <div className="mt-8 space-y-5">

          {[
            [
              "Hotel Extras",
              "Extra services or purchases at the hotel.",
            ],
            [
              "Additional Beverages",
              "Beverages other than drinking water, including sodas and alcohol.",
            ],
            [
              "Mountain Crew Tips",
              "Tips for guides, porters, cooks and other mountain crew members.",
            ],
            [
              "Meals in Moshi",
              "Meals in Moshi unless specifically specified in the itinerary.",
            ],
            [
              "Personal Trekking Gear",
              "Sleeping bags, trekking poles, headlamps and other personal trekking equipment.",
            ],
            [
              "International & Domestic Flights",
              "Flights to and from Tanzania or any domestic flights.",
            ],
            [
              "Other Expenses",
              "Any items not specifically listed under Included in the Package.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="flex gap-4"
            >

              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/20 text-xs font-bold text-[#8a5d00]">
                ×
              </span>

              <div>

                <h4 className="font-semibold text-[#082D19]">
                  {title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {text}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-[#082D19] px-7 py-12 text-center shadow-2xl sm:px-12 sm:py-16">

      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Your Kilimanjaro Adventure
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Climb the Coca-Cola Route?
        </h3>

        <p className="mt-5 leading-8 text-white/70">
          Take the classic Marangu Trail with an additional acclimatization
          day and give yourself more time to prepare for the summit of
          Mount Kilimanjaro.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f7c15b]"
          >
            Start Planning
            <span>→</span>
          </a>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            WhatsApp Us
            <span>↗</span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>

{/* ============================================================
    6-DAY MACHAME ROUTE – KILIMANJARO TREK
============================================================ */}
<section
  id="6-day-machame-route"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0b4224]/10 blur-[140px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#0D4825]/5 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b87900]">
        Kilimanjaro • Machame Route
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        6-Day Machame Route
        <span className="block text-[#F5A623]">
          Kilimanjaro Trek
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
        Experience one of Kilimanjaro’s most scenic and demanding routes,
        travelling from the rainforest through the Shira Plateau, Lava Tower,
        Barranco Valley and alpine desert before reaching Uhuru Peak.
      </p>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500">
        This six-day mountain itinerary is best suited to experienced,
        physically fit hikers prepared for a demanding ascent and a long
        summit day. A seven-day option provides a slower pace and additional
        time for acclimatization.
      </p>

    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* FACT 1 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white">
          8
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Complete Journey
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          8 Days
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Including arrival, trek and departure.
        </p>

      </div>

      {/* FACT 2 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-lg font-bold text-[#082D19]">
          M
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Route
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          Machame
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          A scenic and demanding route to the summit.
        </p>

      </div>

      {/* FACT 3 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white">
          5
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Summit
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          5,895m
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Uhuru Peak, Africa’s highest point.
        </p>

      </div>

      {/* FACT 4 */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-lg font-bold text-[#082D19]">
          T
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Mountain Stay
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
          Tented Camps
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Dedicated camps along the Machame trail.
        </p>

      </div>

    </div>

    {/* ============================================================
        ROUTE HIGHLIGHT
    ============================================================ */}
    <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-[#082D19] px-7 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-14">

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            The Machame Route
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            A Scenic Route Built for Adventure
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            From the lush rainforest to the dramatic Shira Plateau, the
            high-altitude Lava Tower and Barranco Valley, the Machame Route
            offers a constantly changing landscape before the final climb
            toward Uhuru Peak.
          </p>

        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              Starting Point
            </p>

            <p className="mt-1 font-semibold text-white">
              Machame Gate • 1,490m
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              Acclimatization
            </p>

            <p className="mt-1 font-semibold text-white">
              Lava Tower • 4,630m
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              Summit
            </p>

            <p className="mt-1 font-semibold text-white">
              Uhuru Peak • 5,895m
            </p>

          </div>

        </div>

      </div>
    </div>

    {/* ============================================================
        ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Trekking Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Six Days on the Machame Trail
        </h3>

        <p className="mt-5 leading-7 text-gray-600">
          Follow the route from the rainforest to the summit, crossing the
          Shira Plateau, Lava Tower, Barranco Valley and alpine desert before
          descending through the Mweka Route.
        </p>

      </div>

      {/* TIMELINE */}
      <div className="relative mt-14">

        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-10">

          {/* ========================================================
              DAY 1
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 1
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Welcome to Tanzania – Drive to Moshi
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  When you arrive in Tanzania, one of our team members will
                  greet you at the airport before you are driven to your lodge
                  in Moshi, a lively town at the foot of Mount Kilimanjaro.
                  After settling in, you’ll meet your guide for a full briefing
                  about the upcoming climb. Your guide will also inspect your
                  gear to make sure everything is ready. Spend the rest of the
                  day relaxing at the lodge or exploring Moshi at your leisure.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Dinner
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge, Moshi
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 2
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 2
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Machame Gate to Machame Camp
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  1,490m → 2,980m • Approx. 18 km
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, a short drive takes you to Machame Gate,
                  where registration formalities are completed and the mountain
                  crew organizes the supplies. The trek begins through lush
                  rainforest, where you may encounter exotic birds and
                  colobus monkeys. The trail can be muddy and humid, making
                  this a demanding opening day. After lunch on the trail,
                  continue toward Machame Camp, where your tents will be
                  waiting.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Distance
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Approx. 18 km
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Altitude
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      2,980m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Machame Camp
                    </p>

                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">

                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 3
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 3
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Machame Camp to Shira Camp
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  2,980m → 3,840m • Approx. 9 km
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Set off early and climb steadily out of the forest into open
                  moorland. The views become increasingly expansive as the
                  trail passes through heather and volcanic rock. After a
                  lunch break, continue along a rocky ridge toward the
                  spectacular Shira Plateau. The landscape becomes more
                  dramatic and temperatures begin to fall, particularly in
                  the evening.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Distance
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Approx. 9 km
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Altitude
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      3,840m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Shira Camp
                    </p>

                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">

                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 4
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#F5A623]/30 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-7 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 4 • Acclimatization
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Shira Plateau to Lava Tower to Barranco Camp
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  3,840m → 4,630m → 3,950m • Approx. 15 km
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <div className="mb-7 rounded-3xl bg-[#082D19] p-6 sm:p-7">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
                        Climb High • Sleep Low
                      </p>

                      <h5 className="mt-2 font-serif text-2xl font-bold text-white">
                        Lava Tower Acclimatization
                      </h5>

                      <p className="mt-2 text-sm text-white/60">
                        Reach 4,630m before descending to Barranco
                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

                      <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                        Highest Point
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#F5A623]">
                        4,630m
                      </p>

                    </div>

                  </div>

                </div>

                <p className="leading-8 text-gray-600">
                  Today’s route takes you into the high-altitude environment,
                  climbing toward the famous Lava Tower. The ascent provides
                  an important acclimatization opportunity as you move through
                  barren alpine desert terrain. After lunch at Lava Tower,
                  descend into the spectacular Barranco Valley, where giant
                  senecio plants and dramatic cliffs dominate the landscape.
                  The descent to Barranco helps reduce the immediate effects
                  of the higher altitude.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Distance
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Approx. 15 km
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      High Point
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Lava Tower • 4,630m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Barranco Camp
                    </p>

                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">

                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 5
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 5
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Barranco Camp to Barafu Camp
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  3,950m → 4,550m • Approx. 13 km
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, tackle the impressive Barranco Wall. While
                  steep in appearance, the climb is an engaging scramble with
                  rewarding views from the top. Continue across rocky terrain
                  and alpine desert through the Karanga Valley, where you’ll
                  stop for lunch. From there, push onward toward Barafu Camp,
                  the final base for your summit attempt. After dinner, rest
                  early in preparation for the midnight ascent.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Distance
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Approx. 13 km
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Altitude
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      4,550m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Barafu Camp
                    </p>

                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">

                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 6 - SUMMIT
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#F5A623]/30 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-7 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 6 • Summit Day
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Barafu Camp to Uhuru Peak & Mweka Camp
                </h4>

                <p className="mt-2 text-sm font-semibold text-[#082D19]/70">
                  4,550m → 5,895m → 3,100m • 7 km up / 23 km down
                </p>

              </div>

              <div className="p-6 sm:p-8">

                {/* SUMMIT HIGHLIGHT */}
                <div className="mb-7 rounded-3xl bg-[#082D19] p-6 sm:p-7">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
                        The Summit Push
                      </p>

                      <h5 className="mt-2 font-serif text-3xl font-bold text-white">
                        Uhuru Peak
                      </h5>

                      <p className="mt-2 text-sm text-white/60">
                        Via Stella Point • Africa’s highest point
                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

                      <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                        Elevation
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#F5A623]">
                        5,895m
                      </p>

                    </div>

                  </div>

                </div>

                <p className="leading-8 text-gray-600">
                  The summit attempt begins just after midnight. Under a
                  starlit sky, you’ll slowly ascend across the scree slopes
                  toward Stella Point. This is the most mentally and
                  physically demanding section of the trek. After reaching
                  Stella Point, continue along the crater rim toward Uhuru
                  Peak, Africa’s highest point.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  After celebrating at the summit and taking in the sunrise,
                  descend to Barafu Camp for a rest and brunch. Later, continue
                  downward through changing terrain until reaching Mweka Camp,
                  where you’ll spend the night.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Summit Distance
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      7 km Up
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Descent
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      23 km Down
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mweka Camp • 3,100m
                    </p>

                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-[#0b4224]/5 p-5">

                  <p className="text-sm font-semibold text-[#082D19]">
                    Meals:{" "}
                    <span className="font-normal text-gray-600">
                      Breakfast, Lunch & Dinner
                    </span>
                  </p>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 7
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 7
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Mweka Camp to Mweka Gate – Return to Moshi
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  3,100m → 1,980m • Approx. 6 km
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Following a warm breakfast, your final stretch takes you
                  through the forest toward Mweka Gate. At the gate, you’ll
                  sign out, collect your summit certificate and say farewell
                  to your mountain crew. A short transfer will take you back
                  to Moshi for a relaxing shower and a well-earned celebration.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Distance
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Approx. 6 km
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast & Lunch
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge, Moshi
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 8
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              8
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]/70">
                  Day 8
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Farewell & Departure
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, you’ll be transferred to the airport for
                  your flight home, bringing your Kilimanjaro adventure to
                  an end.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      None
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        ROUTE HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Route Highlights
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          From Rainforest to the Roof of Africa
        </h3>

        <p className="mt-5 leading-7 text-gray-600">
          Machame crosses several of Kilimanjaro’s dramatic ecological zones,
          creating a constantly changing trekking experience.
        </p>

      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* HIGHLIGHT 1 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">

          <div className="text-3xl">
            🌿
          </div>

          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Montane Forest
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Begin beneath a lush forest canopy surrounded by vegetation,
            birds and the possibility of spotting colobus monkeys.
          </p>

        </div>

        {/* HIGHLIGHT 2 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">

          <div className="text-3xl">
            🏔️
          </div>

          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Shira Plateau
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Trek across open moorland and volcanic terrain with expansive
            views across one of Kilimanjaro’s most dramatic landscapes.
          </p>

        </div>

        {/* HIGHLIGHT 3 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">

          <div className="text-3xl">
            🌋
          </div>

          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Lava Tower & Barranco
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Reach 4,630m at Lava Tower before descending into the spectacular
            Barranco Valley beneath towering volcanic cliffs.
          </p>

        </div>

        {/* HIGHLIGHT 4 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm">

          <div className="text-3xl">
            🏆
          </div>

          <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
            Uhuru Peak
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Climb through the final high-altitude terrain to reach 5,895m
            and stand at Africa’s highest point.
          </p>

        </div>

      </div>
    </div>

    {/* ============================================================
        INCLUDED / NOT INCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-7 lg:grid-cols-2">

      {/* ============================================================
          INCLUDED
      ============================================================ */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Your Trek Includes
            </h3>

          </div>

        </div>

        <div className="mt-8 space-y-5">

          {[
            [
              "Airport Transfers",
              "Pickup upon arrival and drop-off after the trek.",
            ],
            [
              "Ground Transport",
              "All transfers between Moshi and the trailhead at the start and end of the climb.",
            ],
            [
              "Accommodation",
              "One night before the climb in Moshi, one night after the climb in Moshi, and full camping accommodation on the mountain.",
            ],
            [
              "National Park Fees",
              "All Kilimanjaro park entrance fees.",
            ],
            [
              "Rescue Fees",
              "Mountain rescue coverage with vehicle evacuation.",
            ],
            [
              "Meals",
              "Three freshly prepared meals per day while on the mountain.",
            ],
            [
              "Camping Equipment",
              "Sleeping tents, dining tents and essential camping equipment.",
            ],
            [
              "Professional Crew",
              "Certified English-speaking mountain guide, experienced porters, cooks and waitstaff.",
            ],
            [
              "Mountain Support",
              "First aid kit available throughout the trek and use of an oximeter for daily altitude checks.",
            ],
            [
              "Taxes",
              "All applicable government levies.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="flex gap-4"
            >

              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <div>

                <h4 className="font-semibold text-[#082D19]">
                  {title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {text}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ============================================================
          NOT INCLUDED
      ============================================================ */}
      <div className="rounded-[2rem] border border-[#F5A623]/20 bg-[#F5A623]/5 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-[#082D19]">
            !
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b87900]">
              Not Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Additional Expenses
            </h3>

          </div>

        </div>

        <div className="mt-8 space-y-5">

          {[
            [
              "Hotel Extras",
              "Extra services or purchases at the hotel.",
            ],
            [
              "Additional Beverages",
              "Beverages other than drinking water, including sodas and alcohol.",
            ],
            [
              "Mountain Crew Tips",
              "Tips for guides, porters, cooks and other mountain crew members.",
            ],
            [
              "Meals in Moshi",
              "Meals in Moshi unless specifically specified in the itinerary.",
            ],
            [
              "Personal Trekking Gear",
              "Sleeping bags, trekking poles, headlamps and other personal trekking equipment.",
            ],
            [
              "International & Domestic Flights",
              "Flights to and from Tanzania or any domestic flights.",
            ],
            [
              "Other Expenses",
              "Any items not specifically listed under Included.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="flex gap-4"
            >

              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/20 text-xs font-bold text-[#8a5d00]">
                ×
              </span>

              <div>

                <h4 className="font-semibold text-[#082D19]">
                  {title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {text}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-[#082D19] px-7 py-12 text-center shadow-2xl sm:px-12 sm:py-16">

      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Your Kilimanjaro Adventure
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Take on the Machame Route?
        </h3>

        <p className="mt-5 leading-8 text-white/70">
          Challenge yourself on one of Kilimanjaro’s most scenic routes and
          stand at 5,895m above sea level at Uhuru Peak.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f7c15b]"
          >
            Start Planning
            <span>→</span>
          </a>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            WhatsApp Us
            <span>↗</span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>

{/* ============================================================
    7-DAY KILIMANJARO EXPEDITION VIA RONGAI ROUTE
============================================================ */}
<section
  id="7-day-rongai-route"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ===================== BACKGROUND DECORATION ===================== */}
  <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0b4224]/10 blur-[130px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-[360px] w-[360px] rounded-full bg-[#0b4224]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ===================== HEADER ===================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b87900]">
        Kilimanjaro • Rongai Route
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        7-Day Kilimanjaro Expedition
        <span className="block text-[#F5A623]">
          Via the Rongai Route
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Approach Mount Kilimanjaro from the remote northern wilderness on
        the Rongai Route, a scenic trail offering peaceful forests,
        dramatic views of Mawenzi Peak and a gradual ascent toward the
        summit of Uhuru Peak.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500">
        This carefully paced expedition combines wilderness scenery,
        progressive acclimatization and a demanding summit ascent before
        descending through the Marangu side of the mountain.
      </p>
    </div>


    {/* ===================== QUICK FACTS ===================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "9 Days / 8 Nights",
          icon: "◷",
        },
        {
          label: "Route",
          value: "Rongai Route",
          icon: "⌁",
        },
        {
          label: "Summit",
          value: "5,895m",
          icon: "▲",
        },
        {
          label: "Accommodation",
          value: "Camps & Mountain Huts",
          icon: "⌂",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="group rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                {item.label}
              </p>

              <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                {item.value}
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-lg text-[#F5A623]">
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>


    {/* ===================== ROUTE HIGHLIGHT ===================== */}
    <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#082D19] shadow-2xl">
      <div className="grid lg:grid-cols-[1.25fr_0.75fr]">

        <div className="p-8 sm:p-10 lg:p-12">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Northern Wilderness Trail
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            A quieter approach to Africa’s highest summit
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            Beginning near the Kenyan frontier, the Rongai Route offers a
            more remote approach to Kilimanjaro. The trail moves through
            forest and moorland before opening into the dramatic highlands
            around Mawenzi and Kibo.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Starting Side
              </p>
              <p className="mt-2 font-semibold text-white">
                Northern Flank
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Highest Point
              </p>
              <p className="mt-2 font-semibold text-white">
                Uhuru Peak
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Descent
              </p>
              <p className="mt-2 font-semibold text-white">
                Marangu Gate
              </p>
            </div>

          </div>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden bg-[#0b4224] p-8 lg:p-12">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.16),transparent_65%)]" />

          <div className="relative text-center">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#F5A623]/40 bg-[#F5A623]/10">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-[#F5A623]">
                  5,895
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  metres
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Summit Elevation
            </p>

            <p className="mt-2 font-serif text-2xl font-bold text-white">
              Uhuru Peak
            </p>

          </div>
        </div>

      </div>
    </div>


    {/* ===================== ITINERARY ===================== */}
    <div className="mt-16">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Safari Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          The Journey to Uhuru Peak
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          A progressive ascent through forest, moorland and high-altitude
          terrain, culminating in the summit attempt before the final descent
          through the Marangu side of Kilimanjaro.
        </p>

      </div>


      <div className="relative mx-auto mt-14 max-w-5xl">

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">

          {/* ===================== DAY 1 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 1
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Welcome to Tanzania – Drive to Moshi
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Upon arrival at Kilimanjaro International Airport, our team
                  will welcome you and transfer you to your hotel in Moshi.
                  After check-in, your mountain guide will conduct a detailed
                  briefing and equipment check. The remainder of the evening
                  is free to relax or enjoy a gentle stroll around town.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Estimated Drive
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      1 Hour
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                    Meals
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Dinner
                  </p>
                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 2 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 2
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Rongai Gate to Simba Camp
                </h4>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  1,950m → 2,600m • 3–4 Hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Following breakfast, drive to the Rongai starting point at
                  Nalemoru Gate. After registration, begin the trek through
                  dense rainforest where black-and-white colobus monkeys and
                  other forest wildlife may be encountered. Continue to Simba
                  Camp, where your tents will be prepared before dinner.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Simba Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 3 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 3
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Simba Camp to Second Caves Camp
                </h4>

                <p className="mt-1 text-sm font-medium text-white/60">
                  2,600m → 3,450m • Approximately 3 Hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Continue the gradual ascent toward Second Caves Camp. The
                  steady climb gives your body time to adjust to the increasing
                  altitude. After arriving at camp, enjoy lunch and use the
                  afternoon to rest and continue acclimatizing.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Second Caves Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 4 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 4
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Second Caves to Kikelewa Camp
                </h4>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  3,450m → 3,600m • 3–4 Hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Leave Second Caves and continue across open moorland toward
                  Kikelewa Camp. The landscape becomes increasingly alpine,
                  with expansive views across the mountain slopes and the
                  rugged ridges surrounding the route.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kikelewa Caves Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 5 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 5
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Kikelewa to Mawenzi Tarn
                </h4>

                <p className="mt-1 text-sm font-medium text-white/60">
                  3,600m → 4,330m • 3–4 Hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Begin a steeper ascent into the alpine highlands, where
                  vegetation becomes increasingly sparse. The trail climbs
                  toward Mawenzi Tarn, positioned beneath the spectacular
                  volcanic formations of Mawenzi Peak.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mawenzi Tarn Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 6 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 6
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Mawenzi Tarn to Kibo Hut
                </h4>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  4,330m → 4,700m • 4–5 Hours
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Cross the broad saddle between Mawenzi and Kibo through a
                  striking high-altitude desert landscape. Continue toward
                  Kibo Hut, the final base before the summit attempt. After
                  an early dinner, rest and prepare for the overnight climb.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kibo Hut
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 7 SUMMIT ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border-2 border-[#F5A623]/30 bg-white shadow-lg">

              <div className="bg-gradient-to-r from-[#082D19] to-[#0b4224] px-6 py-6 sm:px-8">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-[#F5A623] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#082D19]">
                    Summit Day
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                    Day 7
                  </span>

                </div>

                <h4 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Kibo Hut to Uhuru Peak – Then Down to Horombo
                </h4>

                <p className="mt-2 text-sm font-medium text-white/60">
                  4,700m → 5,895m → 3,720m • Approximately 14 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Around midnight, begin the most demanding stage of the
                  expedition. Hiking by headlamp, ascend the steep switchbacks
                  toward Gillman’s Point at approximately 5,681m before
                  continuing along the crater rim toward Uhuru Peak, the
                  highest point on Mount Kilimanjaro.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  After reaching the summit, take time for photographs and
                  celebrate the achievement before beginning the descent.
                  Return toward Kibo Hut for a short rest and meal, then
                  continue down to Horombo Hut for your final night on the
                  mountain.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Summit
                    </p>
                    <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                      Uhuru Peak
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      5,895m
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Key Point
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Gillman’s Point
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      5,681m
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Horombo Hut
                    </p>
                  </div>

                </div>

                <div className="mt-5 rounded-2xl border border-[#0b4224]/10 bg-[#0b4224]/5 p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast • Lunch • Dinner
                  </p>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 8 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              8
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 8
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Final Descent – Horombo to Marangu Gate
                </h4>

                <p className="mt-1 text-sm font-medium text-white/60">
                  Approximately 6 Hours • Drive to Moshi: 1 Hour
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Complete the final descent through the montane forest to
                  Marangu Gate. After signing out and receiving your summit
                  certificate, you will meet your vehicle and transfer back
                  to Moshi for a well-earned rest.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Trek
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Horombo → Marangu Gate
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 9 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              9
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 9
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Departure Day
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Enjoy breakfast at the lodge before your scheduled transfer
                  to Kilimanjaro International Airport for your onward journey
                  or flight home.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      None — Extra Night Available on Request
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    {/* ===================== ROUTE HIGHLIGHTS ===================== */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Route Highlights
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          From Northern Forests to the Roof of Africa
        </h3>

      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Northern Wilderness",
            text: "Begin on Kilimanjaro’s quieter northern approach through lush forest and peaceful mountain terrain.",
          },
          {
            title: "Mawenzi Peak",
            text: "Spend time beneath the dramatic volcanic formations of Mawenzi, Kilimanjaro’s second-highest peak.",
          },
          {
            title: "High-Altitude Saddle",
            text: "Cross the expansive alpine desert between Mawenzi and Kibo on the way to your final base.",
          },
          {
            title: "Uhuru Peak",
            text: "Reach 5,895 metres at Uhuru Peak before beginning the long descent toward Horombo.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b4224] text-[#F5A623]">
              ✓
            </div>

            <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
              {item.title}
            </h4>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {item.text}
            </p>
          </div>
        ))}

      </div>
    </div>


    {/* ===================== INCLUDED / NOT INCLUDED ===================== */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-[#F5A623]">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Your Expedition Includes
            </h3>
          </div>

        </div>

        <div className="mt-8 space-y-5">

          {[
            {
              title: "Airport Transfers",
              text: "Pickup upon arrival and drop-off after the trek.",
            },
            {
              title: "Ground Transport",
              text: "Transfers between Moshi and the trailhead at the start and end of the climb.",
            },
            {
              title: "Accommodation",
              text: "One night before the climb in Moshi, one night after the climb in Moshi, plus mountain accommodation including designated camps and huts according to the route.",
            },
            {
              title: "National Park Fees",
              text: "All applicable Kilimanjaro National Park entrance and climbing fees.",
            },
            {
              title: "Rescue Fees",
              text: "Mountain rescue coverage for vehicle evacuation.",
            },
            {
              title: "Mountain Meals",
              text: "Three freshly prepared meals per day while on the mountain.",
            },
            {
              title: "Camping Equipment",
              text: "Sleeping tents, dining tents and essential camping equipment where camping is used.",
            },
            {
              title: "Professional Crew",
              text: "Certified English-speaking mountain guide, experienced porters, cooks and support staff.",
            },
            {
              title: "Mountain Support",
              text: "First aid kit and oximeter for regular altitude monitoring.",
            },
            {
              title: "Taxes",
              text: "Applicable government levies and taxes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <div>
                <h4 className="font-semibold text-[#082D19]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>


      {/* NOT INCLUDED */}
      <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-xl text-gray-500">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
              Not Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Additional Expenses
            </h3>
          </div>

        </div>

        <div className="mt-8 space-y-5">

          {[
            "Extra services or purchases at the hotel.",
            "Beverages other than drinking water, including sodas and alcohol.",
            "Tips for guides, porters, cooks and other mountain crew.",
            "Meals in Moshi unless specifically stated.",
            "Personal trekking equipment such as sleeping bags, trekking poles and headlamps.",
            "International and domestic flights.",
            "Any items or services not specifically listed under Included.",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">
                ×
              </span>

              <p className="text-sm leading-7 text-gray-600">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>


    {/* ===================== FINAL CTA ===================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0D4825] blur-[80px]" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Ready for Kilimanjaro?
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
          Take the Northern Wilderness Trail to Uhuru Peak
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Let our team help you plan your Rongai Route expedition, from
          pre-climb preparations and transfers to mountain logistics and
          summit support.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition hover:-translate-y-1 hover:bg-[#f7c15a]"
          >
            Start Planning
            <span>→</span>
          </a>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
            <span>↗</span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>

{/* ============================================================
    6-DAY LEMOSHO ROUTE – MOUNT KILIMANJARO TREK
============================================================ */}
<section
  id="6-day-lemosho-route"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ===================== BACKGROUND DECORATION ===================== */}
  <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0b4224]/10 blur-[130px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-[360px] w-[360px] rounded-full bg-[#0b4224]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ===================== HEADER ===================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b87900]">
        Kilimanjaro • Lemosho Route
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        6-Day Lemosho Route
        <span className="block text-[#F5A623]">
          Mount Kilimanjaro Trek
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Journey from the remote western slopes of Mount Kilimanjaro through
        lush rainforest, open moorland, alpine desert and the icy summit
        zone on one of Tanzania’s most scenic approaches to Uhuru Peak.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500">
        This demanding itinerary is designed for physically fit and
        well-prepared trekkers seeking a shorter, more challenging ascent
        with dramatic changes in landscape and elevation.
      </p>

    </div>


    {/* ===================== QUICK FACTS ===================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "8 Days / 7 Nights",
          icon: "◷",
        },
        {
          label: "Route",
          value: "Lemosho Route",
          icon: "⌁",
        },
        {
          label: "Summit",
          value: "5,895m",
          icon: "▲",
        },
        {
          label: "Accommodation",
          value: "Tented Mountain Camps",
          icon: "⌂",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="group rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-start justify-between gap-4">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                {item.label}
              </p>

              <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                {item.value}
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-lg text-[#F5A623]">
              {item.icon}
            </div>

          </div>
        </div>
      ))}

    </div>


    {/* ===================== ROUTE HIGHLIGHT ===================== */}
    <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#082D19] shadow-2xl">

      <div className="grid lg:grid-cols-[1.25fr_0.75fr]">

        <div className="p-8 sm:p-10 lg:p-12">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Western Kilimanjaro
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            A dramatic journey through Kilimanjaro’s changing landscapes
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            The Lemosho Route begins on the western side of the mountain and
            gradually moves through rainforest, heath and moorland before
            reaching the high-altitude desert around Lava Tower and Barafu.
            The final ascent leads to Uhuru Peak before descending through
            the Mweka side of the mountain.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Starting Point
              </p>

              <p className="mt-2 font-semibold text-white">
                Londorossi Gate
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Highest Point
              </p>

              <p className="mt-2 font-semibold text-white">
                Uhuru Peak
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Descent
              </p>

              <p className="mt-2 font-semibold text-white">
                Mweka Gate
              </p>
            </div>

          </div>

        </div>


        <div className="relative flex items-center justify-center overflow-hidden bg-[#0b4224] p-8 lg:p-12">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.16),transparent_65%)]" />

          <div className="relative text-center">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#F5A623]/40 bg-[#F5A623]/10">

              <div className="text-center">

                <p className="text-3xl font-serif font-bold text-[#F5A623]">
                  5,895
                </p>

                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  metres
                </p>

              </div>

            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Summit Elevation
            </p>

            <p className="mt-2 font-serif text-2xl font-bold text-white">
              Uhuru Peak
            </p>

          </div>

        </div>

      </div>
    </div>


    {/* ===================== ITINERARY ===================== */}
    <div className="mt-16">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Safari Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          From Rainforest to the Roof of Africa
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Follow a demanding western approach through multiple ecological
          zones before the summit push and descent through the Mweka route.
        </p>

      </div>


      <div className="relative mx-auto mt-14 max-w-5xl">

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">


          {/* ===================== DAY 1 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 1
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Welcome to Moshi
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After arriving in Tanzania, you’ll be met by our team and
                  transferred to your hotel in Moshi. Once checked in, you’ll
                  meet your mountain crew for a detailed orientation. Your
                  guide will review equipment and trip logistics to ensure
                  you are prepared for the trek. Spend the remainder of the
                  day relaxing or exploring Moshi.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Travel Time
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Approximately 1 Hour from Airport
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>

                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Dinner
                  </p>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 2 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 2
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Rainforest Trek – Londorossi Gate to Mti Mkubwa
                </h4>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  2,750m • 3–4 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Following breakfast, drive to Londorossi Gate for
                  registration and permit clearance. The trek begins through
                  dense tropical rainforest filled with birdlife, butterflies
                  and the possibility of seeing black-and-white colobus
                  monkeys. Continue toward Big Tree Camp, where you will
                  settle in for the evening.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mti Mkubwa Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 3 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 3
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Into the Moorland – Mti Mkubwa to Shira 2
                </h4>

                <p className="mt-1 text-sm font-medium text-white/60">
                  2,750m → 3,840m • 6–7 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Leave the rainforest behind as the trail climbs into the
                  heath and moorland zone. Trek across open ridges with
                  expansive views while gradually gaining altitude. By
                  evening, reach Shira 2 Camp on the broad Shira Plateau,
                  with dramatic views toward the mountain’s higher reaches.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Elevation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      3,840m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Shira 2 Camp
                    </p>

                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast • Lunch • Dinner
                  </p>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 4 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border-2 border-[#F5A623]/30 bg-white shadow-lg">

              <div className="bg-gradient-to-r from-[#082D19] to-[#0b4224] px-6 py-6 sm:px-8">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-[#F5A623] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#082D19]">
                    Acclimatization Highlight
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                    Day 4
                  </span>

                </div>

                <h4 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Shira 2 to Lava Tower – Descend to Barranco
                </h4>

                <p className="mt-2 text-sm font-medium text-white/60">
                  3,840m → 4,630m → 3,950m • Approximately 7 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  This important acclimatization day takes you to Lava Tower,
                  the highest point of the day's route at 4,630 metres. After
                  reaching the dramatic volcanic outcrop and taking time to
                  rest and enjoy lunch, descend toward the lush Barranco
                  Valley.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  The descent provides valuable altitude exposure while
                  allowing you to sleep at a lower elevation. Settle into
                  Barranco Camp beneath the impressive Barranco Wall.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      High Point
                    </p>

                    <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                      Lava Tower
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      4,630m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Camp
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Barranco Camp
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      3,950m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 5 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 5
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Through the Alpine Desert – Barranco to Barafu
                </h4>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  3,950m → 4,550m • Approximately 7 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Begin the morning with the exhilarating climb up the
                  Barranco Wall. Once above the wall, continue through
                  increasingly rocky and windswept terrain toward Karanga
                  Camp before completing the final ascent to Barafu Camp.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Barafu is your final base before the summit attempt. After
                  an early dinner, settle in for essential rest ahead of the
                  midnight ascent toward Uhuru Peak.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Summit Base
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Barafu Camp — 4,550m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 6 SUMMIT ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border-2 border-[#F5A623]/30 bg-white shadow-lg">

              <div className="bg-gradient-to-r from-[#082D19] to-[#0b4224] px-6 py-6 sm:px-8">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-[#F5A623] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#082D19]">
                    Summit Day
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                    Day 6
                  </span>

                </div>

                <h4 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Barafu to Uhuru Peak – Descend to Mweka
                </h4>

                <p className="mt-2 text-sm font-medium text-white/60">
                  4,550m → 5,895m → 3,100m • Approximately 14 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Begin the final ascent shortly after midnight, climbing
                  steep terrain beneath the stars toward Stella Point on the
                  crater rim. From there, continue along the summit route to
                  Uhuru Peak, the highest point on Mount Kilimanjaro at
                  5,895 metres.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  After sunrise photographs and time to celebrate the summit,
                  begin the descent toward Barafu for a short rest before
                  continuing downhill to Mweka Camp for the night.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Summit
                    </p>

                    <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                      Uhuru Peak
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      5,895m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Summit Route
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Stella Point
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mweka Camp — 3,100m
                    </p>

                  </div>

                </div>

                <div className="mt-5 rounded-2xl border border-[#0b4224]/10 bg-[#0b4224]/5 p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast • Lunch • Dinner
                  </p>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 7 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 7
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Mweka Camp to Mweka Gate – Return to Moshi
                </h4>

                <p className="mt-1 text-sm font-medium text-white/60">
                  3,100m → 1,980m • Approximately 3 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, complete the final descent through the
                  rainforest to Mweka Gate. Once you have signed out and
                  received your summit certificate, say farewell to your
                  mountain crew before transferring back to Moshi for a
                  well-earned rest and celebration.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Finish
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mweka Gate
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 8 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              8
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 8
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Departure
                </h4>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  Transfer Time: Approximately 1 Hour
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, you’ll be transferred to the airport for
                  your onward journey or flight home, bringing your
                  Kilimanjaro expedition to a close.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      None — Extra Stay Available on Request
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    {/* ===================== ROUTE HIGHLIGHTS ===================== */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Route Highlights
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Six Trekking Days. Five Distinct Landscapes.
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Experience Kilimanjaro's dramatic transition from tropical forest
          to the high-altitude world surrounding Kibo.
        </p>

      </div>


      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Londorossi Rainforest",
            text: "Begin beneath a lush tropical canopy alive with birdlife, butterflies and forest wildlife.",
          },
          {
            title: "Shira Plateau",
            text: "Cross open moorland and reach the spectacular Shira 2 Camp at 3,840 metres.",
          },
          {
            title: "Lava Tower & Barranco",
            text: "Climb to 4,630 metres before descending into the dramatic Barranco Valley.",
          },
          {
            title: "Uhuru Peak",
            text: "Make the final summit push to 5,895 metres before descending through Mweka.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b4224] text-[#F5A623]">
              ✓
            </div>

            <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
              {item.title}
            </h4>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {item.text}
            </p>

          </div>
        ))}

      </div>
    </div>


    {/* ===================== INCLUDED / NOT INCLUDED ===================== */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* ===================== INCLUDED ===================== */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-[#F5A623]">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Your Expedition Includes
            </h3>

          </div>

        </div>


        <div className="mt-8 space-y-5">

          {[
            {
              title: "Airport Transfers",
              text: "Pickup upon arrival and drop-off after the trek.",
            },
            {
              title: "Ground Transport",
              text: "Transfers between Moshi and the trailhead at the start and end of the climb.",
            },
            {
              title: "Accommodation",
              text: "One night before the climb in Moshi, one night after the climb in Moshi, plus designated tented mountain camps with sleeping and dining tents.",
            },
            {
              title: "National Park Fees",
              text: "All applicable Kilimanjaro National Park entrance and climbing fees.",
            },
            {
              title: "Rescue Fees",
              text: "Mountain rescue coverage for vehicle evacuation.",
            },
            {
              title: "Mountain Meals",
              text: "Three freshly prepared meals per day while on the mountain.",
            },
            {
              title: "Camping Equipment",
              text: "Sleeping tents, dining tents and essential camping equipment required for the mountain camps.",
            },
            {
              title: "Professional Crew",
              text: "Certified English-speaking mountain guide, experienced porters, cooks and support staff.",
            },
            {
              title: "Mountain Support",
              text: "First aid kit and oximeter for regular altitude monitoring throughout the trek.",
            },
            {
              title: "Taxes",
              text: "Applicable government levies and taxes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
            >

              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <div>

                <h4 className="font-semibold text-[#082D19]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>


      {/* ===================== NOT INCLUDED ===================== */}
      <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-xl text-gray-500">
            ×
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
              Not Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Additional Expenses
            </h3>

          </div>

        </div>


        <div className="mt-8 space-y-5">

          {[
            "Extra services or purchases at the hotel.",
            "Beverages other than drinking water, including sodas and alcohol.",
            "Tips for guides, porters, cooks and other mountain crew.",
            "Meals in Moshi unless specifically stated.",
            "Personal trekking equipment such as sleeping bags, trekking poles and headlamps.",
            "International and domestic flights.",
            "Any items or services not specifically listed under Included.",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
            >

              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">
                ×
              </span>

              <p className="text-sm leading-7 text-gray-600">
                {item}
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>


    {/* ===================== FINAL CTA ===================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0D4825] blur-[80px]" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Ready for Kilimanjaro?
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
          Take the Lemosho Route to Uhuru Peak
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Let our team help you prepare for your Kilimanjaro expedition,
          from airport transfers and mountain logistics to professional
          guides, porters and summit support.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition hover:-translate-y-1 hover:bg-[#f7c15a]"
          >
            Start Planning
            <span>→</span>
          </a>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
            <span>↗</span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>


{/* ============================================================
    7-DAY MACHAME ROUTE – KILIMANJARO ASCENT ADVENTURE
============================================================ */}
<section
  id="7-day-machame-route"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ===================== BACKGROUND DECORATION ===================== */}
  <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0b4224]/10 blur-[130px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-[360px] w-[360px] rounded-full bg-[#0b4224]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ===================== HEADER ===================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b87900]">
        Kilimanjaro • Machame Route
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        7-Day Machame Route
        <span className="block text-[#F5A623]">
          Kilimanjaro Ascent Adventure
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Follow the legendary Machame Route, often known as the “Whiskey
        Route,” through lush rainforest, open moorland, dramatic volcanic
        landscapes and the high-altitude slopes of Mount Kilimanjaro.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500">
        Designed with a longer acclimatization schedule than the shorter
        Machame option, this scenic ascent gives trekkers more time to adapt
        before the demanding summit push to Uhuru Peak.
      </p>

    </div>


    {/* ===================== QUICK FACTS ===================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "9 Days / 8 Nights",
          icon: "◷",
        },
        {
          label: "Route",
          value: "Machame Route",
          icon: "⌁",
        },
        {
          label: "Summit",
          value: "5,895m",
          icon: "▲",
        },
        {
          label: "Accommodation",
          value: "Tented Mountain Camps",
          icon: "⌂",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="group rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-start justify-between gap-4">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                {item.label}
              </p>

              <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                {item.value}
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-lg text-[#F5A623]">
              {item.icon}
            </div>

          </div>
        </div>
      ))}

    </div>


    {/* ===================== ROUTE HIGHLIGHT ===================== */}
    <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#082D19] shadow-2xl">

      <div className="grid lg:grid-cols-[1.25fr_0.75fr]">

        <div className="p-8 sm:p-10 lg:p-12">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            The Whiskey Route
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            A scenic climb through Kilimanjaro’s changing world
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            The Machame Route begins in the rainforest before climbing through
            moorland and the Shira Plateau toward Lava Tower and Barranco.
            The route then crosses the southern mountain slopes to Barafu
            before the final summit ascent and descent through Mweka.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Starting Point
              </p>

              <p className="mt-2 font-semibold text-white">
                Machame Gate
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Highest Point
              </p>

              <p className="mt-2 font-semibold text-white">
                Uhuru Peak
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Descent
              </p>

              <p className="mt-2 font-semibold text-white">
                Mweka Gate
              </p>
            </div>

          </div>

        </div>


        <div className="relative flex items-center justify-center overflow-hidden bg-[#0b4224] p-8 lg:p-12">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.16),transparent_65%)]" />

          <div className="relative text-center">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#F5A623]/40 bg-[#F5A623]/10">

              <div className="text-center">

                <p className="text-3xl font-serif font-bold text-[#F5A623]">
                  5,895
                </p>

                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  metres
                </p>

              </div>

            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Summit Elevation
            </p>

            <p className="mt-2 font-serif text-2xl font-bold text-white">
              Uhuru Peak
            </p>

          </div>

        </div>

      </div>
    </div>


    {/* ===================== ITINERARY ===================== */}
    <div className="mt-16">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Safari Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Seven Trekking Days to Uhuru Peak
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Progress through Kilimanjaro’s ecological zones with a carefully
          paced ascent, strategic acclimatization and a challenging summit
          night before descending through the Mweka route.
        </p>

      </div>


      <div className="relative mx-auto mt-14 max-w-5xl">

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">


          {/* ===================== DAY 1 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 1
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Arrive in Tanzania – Travel to Moshi
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Upon arrival in Tanzania, our representative will welcome
                  you and transfer you to your hotel in Moshi. After settling
                  in, you’ll receive a full briefing on the upcoming climb
                  and have your trekking equipment checked. The remainder of
                  the day is free to relax, swim or explore the local area.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge, Moshi
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Dinner
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 2 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 2
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Machame Gate to Machame Camp
                </h4>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  1,790m → 2,980m • Approximately 6 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, travel to Machame Gate and complete the
                  park entry formalities before beginning your climb. The
                  trail enters dense rainforest filled with lush vegetation,
                  birds and the possibility of seeing monkeys among the
                  trees.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  The trail can become muddy and slippery during wetter
                  periods. Continue steadily through the forest before
                  reaching Machame Camp in the afternoon.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Machame Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 3 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 3
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Machame Camp to Shira Plateau
                </h4>

                <p className="mt-1 text-sm font-medium text-white/60">
                  2,980m → 3,840m • 5–6 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Leave the rainforest behind as the trail climbs into the
                  open moorlands. The route becomes steeper but shorter,
                  eventually reaching the spectacular Shira Plateau.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  From the plateau, enjoy expansive views across the mountain
                  and its upper slopes before settling near the mountain
                  stream for the night.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Elevation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      3,840m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Camp
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Shira Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 4 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border-2 border-[#F5A623]/30 bg-white shadow-lg">

              <div className="bg-gradient-to-r from-[#082D19] to-[#0b4224] px-6 py-6 sm:px-8">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-[#F5A623] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#082D19]">
                    Acclimatization Highlight
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                    Day 4
                  </span>

                </div>

                <h4 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Shira Camp to Lava Tower – Descend to Barranco
                </h4>

                <p className="mt-2 text-sm font-medium text-white/60">
                  3,840m → 4,630m → 3,950m • Approximately 7 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Today is an important acclimatization stage. Ascend from
                  Shira toward Lava Tower, reaching approximately 4,630 metres
                  before stopping for lunch and a period of rest.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  After the high point, descend into the dramatic Barranco
                  Valley. The climb-high, sleep-lower profile provides an
                  important opportunity to adapt before the higher stages of
                  the trek.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      High Point
                    </p>

                    <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                      Lava Tower
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      4,630m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Overnight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Barranco Camp
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      3,950m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 5 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 5
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Barranco Camp to Karanga Valley
                </h4>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  Approximately 4–5 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, tackle the impressive Barranco Wall. This
                  exhilarating section rewards the effort with spectacular
                  views from above the valley. The route then winds through
                  ridges and valleys toward Karanga Camp.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Although relatively short compared with some other trekking
                  days, this stage is important for continued acclimatization
                  ahead of the final approach to Barafu.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Highlight
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Barranco Wall
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Karanga Camp
                    </p>

                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#0b4224]/10 bg-[#0b4224]/5 p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast • Lunch • Dinner
                  </p>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 6 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 6
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Karanga Camp to Barafu Base Camp
                </h4>

                <p className="mt-1 text-sm font-medium text-white/60">
                  3–4 Hours • Approximately 4,600m
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Continue steadily uphill from Karanga toward Barafu Camp,
                  your final mountain base before summit night. The landscape
                  becomes increasingly rocky and exposed as you approach the
                  high-altitude zone.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Arriving early allows time to rest, hydrate and prepare your
                  equipment for the midnight summit push. Dinner is served
                  early before you settle down for essential rest.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Summit Base
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Barafu Camp
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Elevation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Approximately 4,600m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 7 SUMMIT ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-md md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border-2 border-[#F5A623]/30 bg-white shadow-lg">

              <div className="bg-gradient-to-r from-[#082D19] to-[#0b4224] px-6 py-6 sm:px-8">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-[#F5A623] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#082D19]">
                    Summit Day
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                    Day 7
                  </span>

                </div>

                <h4 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Barafu to Uhuru Peak – Descend to Mweka
                </h4>

                <p className="mt-2 text-sm font-medium text-white/60">
                  4,600m → 5,895m → 3,100m • 12–14 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  The most demanding and rewarding stage begins just before
                  midnight. Under headlamps and a sky full of stars, begin
                  the steep ascent toward Stella Point on the crater rim at
                  approximately 5,685 metres.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  From Stella Point, continue along the crater rim toward
                  Uhuru Peak, the highest point on Mount Kilimanjaro. After
                  sunrise photographs and time to celebrate the achievement,
                  begin the descent to Barafu for a short rest before
                  continuing down to Mweka Camp.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Summit
                    </p>

                    <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                      Uhuru Peak
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      5,895m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Summit Route
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Stella Point
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Approx. 5,685m
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mweka Camp
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      3,100m
                    </p>

                  </div>

                </div>

                <div className="mt-5 rounded-2xl border border-[#0b4224]/10 bg-[#0b4224]/5 p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                    Meals
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast • Lunch • Dinner
                  </p>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 8 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              8
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 8
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                  Mweka Camp to Mweka Gate – Return to Moshi
                </h4>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  3,100m → 1,980m • Approximately 3 Hours
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After a celebratory breakfast with your mountain crew,
                  complete the final descent through the rainforest to Mweka
                  Gate. At the gate, receive your summit certificate and say
                  farewell to your mountain team before returning to Moshi.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Finish
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mweka Gate
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#F5A623]/10 p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#b87900]">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* ===================== DAY 9 ===================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-bold text-white shadow-md md:flex">
              9
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 9
                </p>

                <h4 className="mt-1 font-serif text-2xl font-bold text-white">
                  Departure
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, you’ll be transferred to the airport for
                  your onward journey or flight home, bringing your
                  Kilimanjaro ascent adventure to a close.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Meals
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#0b4224]/60">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      None — Extra Stay Available on Request
                    </p>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    {/* ===================== ROUTE HIGHLIGHTS ===================== */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Route Highlights
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          From Rainforest to the Roof of Africa
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Experience the remarkable ecological transition of Kilimanjaro
          as the trail climbs from tropical forest to high-altitude terrain.
        </p>

      </div>


      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Machame Rainforest",
            text: "Begin beneath a lush forest canopy with rich vegetation, birdlife and opportunities to spot monkeys.",
          },
          {
            title: "Shira Plateau",
            text: "Leave the forest behind and cross the expansive moorland around the scenic Shira Plateau.",
          },
          {
            title: "Lava Tower & Barranco",
            text: "Reach 4,630 metres before descending toward the dramatic Barranco Valley.",
          },
          {
            title: "Uhuru Peak",
            text: "Make the final summit push to 5,895 metres before descending through Mweka.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b4224] text-[#F5A623]">
              ✓
            </div>

            <h4 className="mt-5 font-serif text-xl font-bold text-[#082D19]">
              {item.title}
            </h4>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {item.text}
            </p>

          </div>
        ))}

      </div>
    </div>


    {/* ===================== INCLUDED / NOT INCLUDED ===================== */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* ===================== INCLUDED ===================== */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-[#F5A623]">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Your Expedition Includes
            </h3>

          </div>

        </div>


        <div className="mt-8 space-y-5">

          {[
            {
              title: "Airport Transfers",
              text: "Pickup upon arrival and drop-off after the trek.",
            },
            {
              title: "Ground Transport",
              text: "Transfers between Moshi and the trailhead at the start and end of the climb.",
            },
            {
              title: "Accommodation",
              text: "One night before the climb in Moshi, one night after the climb in Moshi, plus designated tented mountain camps with sleeping and dining tents.",
            },
            {
              title: "National Park Fees",
              text: "All applicable Kilimanjaro National Park entrance and climbing fees.",
            },
            {
              title: "Rescue Fees",
              text: "Mountain rescue coverage for vehicle evacuation.",
            },
            {
              title: "Mountain Meals",
              text: "Three freshly prepared meals per day while on the mountain.",
            },
            {
              title: "Camping Equipment",
              text: "Sleeping tents, dining tents and essential camping equipment required for the mountain camps.",
            },
            {
              title: "Professional Crew",
              text: "Certified English-speaking mountain guide, experienced porters, cooks and support staff.",
            },
            {
              title: "Mountain Support",
              text: "First aid kit and oximeter for regular altitude monitoring throughout the trek.",
            },
            {
              title: "Taxes",
              text: "Applicable government levies and taxes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
            >

              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <div>

                <h4 className="font-semibold text-[#082D19]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>


      {/* ===================== NOT INCLUDED ===================== */}
      <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-xl text-gray-500">
            ×
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
              Not Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Additional Expenses
            </h3>

          </div>

        </div>


        <div className="mt-8 space-y-5">

          {[
            "Extra services or purchases at the hotel.",
            "Beverages other than drinking water, including sodas and alcohol.",
            "Tips for guides, porters, cooks and other mountain crew.",
            "Meals in Moshi unless specifically stated.",
            "Personal trekking equipment such as sleeping bags, trekking poles and headlamps.",
            "International and domestic flights.",
            "Any items or services not specifically listed under Included.",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
            >

              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">
                ×
              </span>

              <p className="text-sm leading-7 text-gray-600">
                {item}
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>


    {/* ===================== FINAL CTA ===================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0D4825] blur-[80px]" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Ready for Kilimanjaro?
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
          Take the Machame Route to Uhuru Peak
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Let our team help you plan your Machame Route expedition, from
          airport transfers and mountain logistics to professional guides,
          porters and summit support.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition hover:-translate-y-1 hover:bg-[#f7c15a]"
          >
            Start Planning
            <span>→</span>
          </a>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
            <span>↗</span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>


{/* ============================================================
    7-DAY KILIMANJARO ADVENTURE VIA LEMOSHO ROUTE
============================================================ */}
<section
  id="7-day-lemosho-route"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0b4224]/10 blur-[140px]" />
  <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[140px]" />
  <div className="pointer-events-none absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#0D4825]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9a6500]">
        Kilimanjaro • Lemosho Route
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        7-Day Kilimanjaro Adventure
        <span className="block text-[#F5A623]">
          Via Lemosho Route
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Embark on one of the most scenic routes to the summit of Africa’s
        highest mountain. The Lemosho Route combines breathtaking landscapes,
        quieter trails and a gradual ascent through rainforest, moorland,
        alpine desert and the high summit zone of Mount Kilimanjaro.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "9 Days / 8 Nights",
          icon: "🗓️",
        },
        {
          label: "Route",
          value: "Lemosho Route",
          icon: "🥾",
        },
        {
          label: "Summit",
          value: "Uhuru Peak • 5,895m",
          icon: "⛰️",
        },
        {
          label: "Accommodation",
          value: "Lodge & Mountain Camps",
          icon: "⛺",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="group rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224]/5 text-xl transition group-hover:bg-[#F5A623]/15">
              {item.icon}
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                {item.label}
              </p>

              <p className="mt-1 font-semibold text-[#082D19]">
                {item.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ============================================================
        ROUTE HIGHLIGHT
    ============================================================ */}
    <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-[#082D19] p-8 text-white shadow-xl sm:p-10 lg:p-12">

      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            The Lemosho Experience
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            A Scenic Journey Through Kilimanjaro’s Wild Landscapes
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-white/75">
            The Lemosho Route offers an immersive mountain experience,
            beginning in the lush rainforest before progressing through
            moorland, the Shira Plateau, alpine desert and the dramatic
            summit zone. Its gradual progression gives trekkers valuable
            time to adapt to the changing altitude.
          </p>
        </div>

        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[#F5A623]/40 bg-[#F5A623]/10 text-center lg:h-28 lg:w-28">
          <div>
            <div className="font-serif text-2xl font-bold text-[#F5A623]">
              46
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white/70">
              Approx. KM
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY-BY-DAY ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Trekking Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          From Moshi to Uhuru Peak
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Follow the Lemosho trail from the western slopes of Kilimanjaro
          through changing ecological zones before reaching the summit and
          descending through Mweka.
        </p>
      </div>

      <div className="relative mt-14">

        {/* Timeline line */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">

          {/* ========================================================
              DAY 1
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#082D19] text-sm font-bold text-white shadow-lg md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 text-white sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 1
                </span>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Welcome to Moshi
                </h4>

                <p className="mt-2 text-sm text-white/65">
                  Travel Time: Approximately 1 hour
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <p className="leading-8 text-gray-600">
                  Upon arrival at the airport, a member of our team will meet
                  you and transfer you to your hotel in Moshi. After
                  check-in, your mountain guide will conduct a thorough
                  pre-climb briefing and gear inspection. Use the rest of the
                  day to rest, refresh, or explore the town.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals Included
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight Stay
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              DAY 2
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-lg md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-5 text-[#082D19] sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">
                  Day 2
                </span>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Drive to Londorossi Gate – Hike to Mti Mkubwa
                </h4>

                <p className="mt-2 text-sm font-medium opacity-75">
                  Trek Duration: 3–4 hours • Elevation: 2,100m → 2,750m
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <p className="leading-8 text-gray-600">
                  After breakfast, we drive west to Londorossi Gate for
                  registration and entry formalities. From here, the trek
                  begins through a vibrant rainforest rich in birds and
                  monkeys, including the distinctive black-and-white
                  colobus. By late afternoon, we arrive at Mti Mkubwa,
                  also known as Big Tree Camp, where your team will have
                  camp set up and dinner waiting.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals Included
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight Stay
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mti Mkubwa / Forest Camp
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              DAY 3
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#082D19] text-sm font-bold text-white shadow-lg md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 text-white sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 3
                </span>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Forest Camp to Shira Plateau
                </h4>

                <p className="mt-2 text-sm text-white/65">
                  Trek Duration: 6–7 hours • Elevation: 2,750m → 3,840m
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <p className="leading-8 text-gray-600">
                  Leaving the forest behind, the trail ascends into heath
                  and moorland, revealing panoramic views and open terrain.
                  The day’s walk takes you across ridgelines and meadows
                  towards the Shira Plateau. You’ll reach Shira 2 Camp by
                  late afternoon, positioned beside a mountain stream with
                  beautiful views across the highlands.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals Included
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight Stay
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Shira 2 Camp
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              DAY 4 - ACCLIMATIZATION
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-lg md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#F5A623]/30 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-5 text-[#082D19] sm:px-8">
                <div className="flex flex-wrap items-center justify-between gap-3">

                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">
                      Day 4
                    </span>

                    <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                      Shira 2 to Lava Tower – Down to Barranco
                    </h4>
                  </div>

                  <span className="rounded-full bg-[#082D19] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white">
                    Acclimatization
                  </span>

                </div>

                <p className="mt-2 text-sm font-medium opacity-75">
                  Trek Duration: 7 hours • Elevation: 3,840m → 4,630m → 3,950m
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  This important acclimatization day involves a steady ascent
                  to Lava Tower, a striking volcanic formation at 4,630m.
                  You’ll pause here for lunch and time to adapt to the higher
                  altitude before descending towards Barranco Camp. The
                  combination of climbing high and sleeping lower provides
                  valuable preparation for summit day.
                </p>

                <div className="mt-6 rounded-2xl bg-[#F5A623]/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6500]">
                    Route Highlight
                  </p>

                  <p className="mt-2 font-semibold text-[#082D19]">
                    Lava Tower • Barranco Valley • High-altitude acclimatization
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals Included
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight Stay
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Barranco Camp
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 5
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#082D19] text-sm font-bold text-white shadow-lg md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 text-white sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 5
                </span>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Barranco Wall Climb – Trek to Karanga
                </h4>

                <p className="mt-2 text-sm text-white/65">
                  Trek Duration: 4–5 hours • Elevation: Around 3,950m
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <p className="leading-8 text-gray-600">
                  After breakfast, the adventure continues with a scramble
                  up the famous Barranco Wall. This thrilling section rewards
                  trekkers with spectacular views across the surrounding
                  mountain landscape. From the top, the trail dips and rises
                  through alpine valleys before reaching Karanga Camp, an
                  important staging point before the summit.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals Included
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight Stay
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Karanga Camp
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              DAY 6
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-lg md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-5 text-[#082D19] sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">
                  Day 6
                </span>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Karanga to Barafu Base Camp
                </h4>

                <p className="mt-2 text-sm font-medium opacity-75">
                  Trek Duration: 3–4 hours • Elevation: 3,959m → 4,600m
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Today’s trek to Barafu Camp is relatively short but
                  essential. The camp sits on an exposed ridge where
                  conditions can be windy and cold. You’ll arrive by
                  mid-afternoon with time to rest, hydrate and prepare for
                  your summit attempt. An early dinner is served before you
                  settle down for some sleep ahead of the midnight climb.
                </p>

                <div className="mt-6 rounded-2xl bg-[#082D19] p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                    Summit Preparation
                  </p>

                  <p className="mt-2 leading-7 text-white/75">
                    Rest, hydrate and prepare your personal summit gear before
                    the early-morning ascent to Uhuru Peak.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals Included
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight Stay
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Barafu Camp
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 7 - SUMMIT
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#082D19] text-sm font-bold text-white shadow-lg md:flex">
              7
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/15 bg-white shadow-md">

              <div className="bg-[#082D19] px-6 py-6 text-white sm:px-8">

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                      Day 7
                    </span>

                    <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                      Summit Day – Uhuru Peak
                    </h4>
                  </div>

                  <div className="rounded-full border border-[#F5A623]/40 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    5,895m • Summit Day
                  </div>

                </div>

                <p className="mt-3 text-sm text-white/65">
                  Trek Duration: 12–14 hours • Elevation: 4,600m → 5,895m → 3,100m
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Around midnight, the climb to the summit begins. Using
                  headlamps, you’ll ascend slowly across the scree slopes
                  towards Stella Point, reaching the crater rim around
                  sunrise. From there, continue towards Uhuru Peak, the
                  highest point on Mount Kilimanjaro and the highest point
                  in Africa. After celebrating at the summit and capturing
                  photos, descend carefully to Barafu for a short rest and
                  lunch before continuing downhill to Mweka Camp.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#082D19] p-5 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Summit
                    </p>
                    <p className="mt-2 font-serif text-2xl font-bold">
                      5,895m
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      Uhuru Peak
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Trek Time
                    </p>
                    <p className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
                      12–14h
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Summit & descent
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mweka Camp
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      3,100m
                    </p>
                  </div>

                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals Included
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight Stay
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Mweka Camp
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 8
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-[#082D19] shadow-lg md:flex">
              8
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#F5A623] px-6 py-5 text-[#082D19] sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">
                  Day 8
                </span>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Final Descent to Mweka Gate – Return to Moshi
                </h4>

                <p className="mt-2 text-sm font-medium opacity-75">
                  Trek Duration: Approximately 3 hours • Elevation: 3,100m → 1,980m
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After a hearty breakfast and a goodbye ceremony with your
                  trekking team, you’ll begin the final descent through the
                  forest to Mweka Gate. After checking out and receiving
                  your summit certificate, a vehicle will be waiting to take
                  you back to your hotel in Moshi for a hot shower and
                  well-earned rest.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals Included
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast • Lunch • Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight Stay
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Kaliwa Lodge
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================
              DAY 9
          ======================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-6 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#082D19] text-sm font-bold text-white shadow-lg md:flex">
              9
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 text-white sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 9
                </span>

                <h4 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
                  Departure Day
                </h4>

                <p className="mt-2 text-sm text-white/65">
                  Travel Time: Approximately 1 hour
                </p>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Following breakfast, you’ll be driven to the airport for
                  your journey home, marking the end of your Kilimanjaro
                  adventure.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals Included
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Overnight Stay
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Not Included
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        ROUTE HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Why Lemosho
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Highlights Along the Route
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Experience some of Kilimanjaro’s most dramatic landscapes as the
          trail moves from lush forest to the summit.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            number: "01",
            title: "Londorossi Forest",
            text: "Begin the adventure in the lush western rainforest, home to rich vegetation and mountain wildlife.",
          },
          {
            number: "02",
            title: "Shira Plateau",
            text: "Cross high-altitude moorland and open terrain with sweeping views across the mountain.",
          },
          {
            number: "03",
            title: "Lava Tower & Barranco",
            text: "Climb high for acclimatization before descending into the spectacular Barranco Valley.",
          },
          {
            number: "04",
            title: "Uhuru Peak",
            text: "Reach 5,895m and stand at the highest point on Mount Kilimanjaro.",
          },
        ].map((item) => (
          <div
            key={item.number}
            className="group rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="font-serif text-4xl font-bold text-[#F5A623]/40 transition group-hover:text-[#F5A623]">
              {item.number}
            </span>

            <h4 className="mt-4 font-serif text-xl font-bold text-[#082D19]">
              {item.title}
            </h4>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {item.text}
            </p>
          </div>
        ))}

      </div>
    </div>

    {/* ============================================================
        INCLUDED / NOT INCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What’s Included
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-5">

          {[
            {
              title: "Airport Transfers",
              text: "Pickup upon arrival and drop-off after the trek.",
            },
            {
              title: "Ground Transport",
              text: "All transfers between Moshi and the trailhead at the start and end of the climb.",
            },
            {
              title: "Accommodation",
              text: "One night before the climb in Moshi, one night after the climb, and full camping accommodation on the mountain with sleeping and dining tents.",
            },
            {
              title: "National Park Fees",
              text: "All applicable Kilimanjaro National Park entrance fees.",
            },
            {
              title: "Rescue Fees",
              text: "Mountain rescue coverage, including vehicle evacuation only.",
            },
            {
              title: "Meals",
              text: "Three freshly prepared meals per day while on the mountain.",
            },
            {
              title: "Camping Equipment",
              text: "Sleeping tents, dining tents and essential camping equipment.",
            },
            {
              title: "Professional Crew",
              text: "Certified English-speaking mountain guide, experienced porters, cooks and waitstaff.",
            },
            {
              title: "Mountain Support",
              text: "First aid kit and oximeter for daily altitude checks.",
            },
            {
              title: "Taxes",
              text: "All applicable government levies.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
            >
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </div>

              <div>
                <h4 className="font-semibold text-[#082D19]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* NOT INCLUDED */}
      <div className="rounded-[2rem] border border-[#F5A623]/20 bg-[#F5A623]/5 p-7 sm:p-9">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-[#082D19]">
            −
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6500]">
              Not Included
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What’s Not Included
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-5">

          {[
            "Extra services or purchases at the hotel",
            "Beverages other than drinking water, including sodas and alcohol",
            "Tips for the mountain crew, including guides, porters and cooks",
            "Meals in Moshi unless specifically stated",
            "Personal trekking gear such as sleeping bags, trekking poles and headlamps",
            "International and domestic flights",
            "Any items not specifically listed under Included",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-4 border-b border-[#F5A623]/15 pb-5 last:border-0 last:pb-0"
            >
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/20 text-xs font-bold text-[#9a6500]">
                −
              </div>

              <p className="text-sm leading-7 text-gray-700">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F5A623]">
          Your Kilimanjaro Adventure Awaits
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Conquer the Roof of Africa?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Start planning your Lemosho Route adventure with a professional
          mountain team, carefully planned logistics and support from Moshi
          to the summit and back.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f7c15c] hover:shadow-xl"
          >
            Start Planning
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
            <span aria-hidden="true">↗</span>
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
                        Nairobi,Kenya and Arusha, Tanzania
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