/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import watamu1 from "../assets/watamu1.jpg";
import watamu2 from "../assets/watamu2.jpg";
import watamu3 from "../assets/watamu3.jpg";
import diani1 from "../assets/diani1.jpg";
import diani2 from "../assets/diani2.jpg";
import diani4 from "../assets/diani4.jpg";
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
    PAGE HERO — DIANI ITINERARIES
============================================================ */}
<section
  id="ndutu-calving-hero"
  className="relative overflow-hidden bg-[#092d1a]"
>
  <img
    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=85"
    alt="Wildebeest migration in the Serengeti"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#061b10]/95 via-[#092d1a]/65 to-[#092d1a]/10" />

  <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[540px] lg:px-12">
    <div className="max-w-3xl">

      {/* EYEBROW */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
          Serengeti Migration
        </span>
      </div>

      {/* TITLE */}
      <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Ndutu Calving Season
        <span className="block text-[#f5c45d]">
          Serengeti Migration
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
        Experience one of Tanzania's most spectacular wildlife seasons as
        thousands of wildebeest gather in the Ndutu area to give birth,
        attracting predators and creating extraordinary scenes of life and
        survival across the Serengeti.
      </p>

      {/* SMALL HIGHLIGHTS */}
      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
          Wildebeest Calving
        </span>

        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
          Predator Action
        </span>

        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
          Serengeti
        </span>

      </div>

    </div>
  </div>
</section>







{/* ============================================================
    6-DAY NDUTU CALVING SEASON SERENGETI MIGRATION
============================================================ */}
<section
  id="6-day-ndutu-calving-season"
  className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[30%] h-[32rem] w-[32rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-[40%] h-72 w-72 rounded-full bg-[#0b4224]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HERO HEADER
    ============================================================ */}
    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#dba33a]/30 bg-[#fffaf0] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8b651e]">
        Tanzania Migration Safari
      </span>

      <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-[#082d19] sm:text-5xl lg:text-6xl">
        6-Day Ndutu Calving Season
        <span className="block text-[#dba33a]">
          Serengeti Migration
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
        This unforgettable safari takes you to the heart of the Serengeti during the
        Ndutu Calving Season, a time when over 8,000 wildebeests are born each day.
        Witness the miracle of new life alongside dramatic predator-prey interactions
        as you journey through Tarangire, Serengeti, Ngorongoro and Lake Manyara.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "6 Days / 5 Nights",
        },
        {
          label: "Main Highlight",
          value: "Ndutu Calving Season",
        },
        {
          label: "Destination",
          value: "Tanzania",
        },
        {
          label: "Safari Style",
          value: "Luxury Private",
        },
      ].map((fact) => (
        <div
          key={fact.label}
          className="rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-6 text-center shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b651e]">
            {fact.label}
          </p>
          <p className="mt-3 font-serif text-xl font-semibold text-[#082d19]">
            {fact.value}
          </p>
        </div>
      ))}
    </div>

    {/* ============================================================
        IMAGE COLLAGE
    ============================================================ */}
    <div className="mt-16 grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">

      {/* Main image */}
      <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-xl sm:min-h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85"
          alt="Wildebeest migration in Tanzania"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-7 sm:p-10">
          <span className="inline-flex rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
            Migration Season
          </span>

          <h3 className="mt-4 max-w-xl font-serif text-3xl font-semibold text-white sm:text-4xl">
            Witness the drama of new life on the Serengeti plains.
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
            Follow the migration during one of Tanzania's most spectacular
            wildlife seasons.
          </p>
        </div>
      </div>

      {/* Side images */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

        <div className="group relative min-h-[250px] overflow-hidden rounded-[2rem] shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=85"
            alt="African elephant in Tanzania"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
              Tarangire
            </p>
            <h4 className="mt-2 font-serif text-2xl font-semibold text-white">
              Giants beneath ancient baobabs
            </h4>
          </div>
        </div>

        <div className="group relative min-h-[250px] overflow-hidden rounded-[2rem] shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=85"
            alt="Lion in the Serengeti"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
              Serengeti
            </p>
            <h4 className="mt-2 font-serif text-2xl font-semibold text-white">
              Predators on the move
            </h4>
          </div>
        </div>

      </div>
    </div>

    {/* ============================================================
        INTRODUCTION
    ============================================================ */}
    <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">

      <div className="relative overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1400&q=85"
          alt="Serengeti wildlife landscape"
          className="h-[430px] w-full object-cover sm:h-[500px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#082d19]/70 via-transparent to-transparent" />

        <div className="absolute bottom-7 left-7 right-7">
          <p className="text-sm font-medium text-white/80">
            Six days across Tanzania's most iconic wildlife landscapes
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] bg-[#f7faf7] p-8 sm:p-10 lg:p-12">

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b651e]">
          The Experience
        </span>

        <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#082d19] sm:text-4xl">
          A front-row seat to the
          <span className="block text-[#dba33a]">
            circle of life
          </span>
        </h3>

        <p className="mt-6 leading-8 text-gray-600">
          Over six unforgettable days, journey through Tanzania's spectacular
          northern safari circuit. Begin with the elephants and baobabs of
          Tarangire before entering the endless plains of the Serengeti.
        </p>

        <p className="mt-4 leading-8 text-gray-600">
          During the calving season, thousands of wildebeest calves are born,
          creating extraordinary opportunities to witness both tender moments
          and intense predator-prey encounters. Your journey continues to the
          Ngorongoro Crater before concluding with a morning safari in Lake
          Manyara National Park.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Ndutu Calving Season",
            "Tarangire Elephants",
            "Serengeti Game Drives",
            "Ngorongoro Crater",
            "Lake Manyara",
            "Luxury Lodges & Camps",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-sm text-white">
                ✓
              </span>
              <span className="text-sm font-medium text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>

    {/* ============================================================
        ITINERARY HEADER
    ============================================================ */}
    <div className="mx-auto mt-24 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#0b4224]/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0b4224]">
        Safari Itinerary
      </span>

      <h3 className="mt-5 font-serif text-4xl font-semibold text-[#082d19] sm:text-5xl">
        Six Days of
        <span className="text-[#dba33a]"> Extraordinary Wildlife</span>
      </h3>

      <p className="mt-5 leading-8 text-gray-600">
        From Arusha to Tarangire, the Serengeti, Ngorongoro and Lake Manyara,
        every day brings a new landscape and a new opportunity for discovery.
      </p>
    </div>

    {/* ============================================================
        DAY 1
    ============================================================ */}
    <div className="relative mt-14">

      <div className="hidden absolute left-8 top-0 h-full w-px bg-[#0b4224]/10 lg:block" />

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            01
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607976587566-98f4c8f2d6a5?auto=format&fit=crop&w=1200&q=85"
                alt="Arusha Tanzania"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 01
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Arrival
                </p>
                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Arrival in Arusha
                </h4>
              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Arrival in Arusha
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Upon arrival at Kilimanjaro Airport, you will be warmly
                welcomed by a representative from Daffar Tours and Travel
                and transferred to your lodge in Arusha.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Take time to rest, settle in, and prepare for the adventures
                ahead.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">
                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
                      Arusha Explores Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 2
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            02
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
                alt="Elephant in Tarangire National Park"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 02
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Tarangire National Park
                </p>
                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Elephants & Baobabs
                </h4>
              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Tarangire National Park
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                After breakfast, drive to Tarangire National Park, renowned
                for its large elephant herds and ancient baobab trees.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The park is home to diverse wildlife including lions,
                leopards, giraffes, buffaloes, and countless bird species.
                Enjoy morning and afternoon game drives, with a picnic lunch
                in the park before heading to your lodge.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">
                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
                      Marera Valley Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 3
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            03
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85"
                alt="Serengeti wildlife"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 03
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Serengeti National Park
                </p>
                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Into the Endless Plains
                </h4>
              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Serengeti National Park
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Journey into the Serengeti, Tanzania's most iconic park.
                Along the way, enjoy a bush breakfast and a thrilling game
                drive through the endless plains.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                This is prime cheetah country, and with luck, you may spot
                these majestic predators up close. After a rewarding day,
                check into your luxury tented camp for dinner and overnight.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">
                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
                      Kirawira Serena Camp
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 4
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            04
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=1200&q=85"
                alt="Wildebeest migration"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Calving Season
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Western Serengeti
                </p>
                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  The Calving Season
                </h4>
              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Western Serengeti – Calving Season
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Explore the Western Serengeti, one of the best regions to
                witness the great wildebeest migration and calving season.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Each day, thousands of calves are born, attracting predators
                like lions, hyenas, and cheetahs. Game drives in this area
                offer unforgettable sights of life and survival in the wild.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">
                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
                      Kirawira Serena Camp
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 5
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            05
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=85"
                alt="Ngorongoro landscape"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 05
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Ngorongoro Crater
                </p>
                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Africa's Garden of Eden
                </h4>
              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Ngorongoro Crater
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Today, descend into the world-famous Ngorongoro Crater,
                often called Africa's "Garden of Eden."
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Home to black rhinos, lions, elephants, hyenas, and a vast
                array of wildlife, this UNESCO World Heritage Site offers
                unmatched safari experiences. Enjoy a picnic lunch inside
                the crater before heading to your lodge on the rim.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">
                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
                      Ngorongoro Serena Safari Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>
                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 6
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            06
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=85"
                alt="Lake Manyara wildlife"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 06
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Lake Manyara
                </p>
                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Final Game Drive & Departure
                </h4>
              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Lake Manyara – Departure
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                After breakfast, enjoy a morning game drive in Lake Manyara
                National Park, famous for its tree-climbing lions, large
                elephant population, and flocks of flamingos.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Later, transfer back to Arusha for your onward journey,
                marking the end of your unforgettable Tanzania safari.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Accommodation
                  </p>
                  <p className="mt-2 font-medium text-[#082d19]">
                    No accommodation
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Meals & Drinks
                  </p>
                  <p className="mt-2 font-medium text-[#082d19]">
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

    {/* ============================================================
        SAFARI HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20 rounded-[2rem] bg-[#082d19] p-8 sm:p-10 lg:p-12">

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#dba33a]">
            Safari Highlights
          </span>

          <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Experience Tanzania at its
            <span className="block text-[#dba33a]">
              most spectacular.
            </span>
          </h3>

          <p className="mt-5 leading-8 text-white/70">
            Follow one of Africa's greatest wildlife spectacles through
            some of Tanzania's most iconic protected areas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          {[
            {
              title: "Ndutu Calving Season",
              text: "Witness thousands of wildebeest calves and the predators drawn to the abundance of young life.",
            },
            {
              title: "Tarangire National Park",
              text: "Discover huge elephant herds, ancient baobabs and diverse wildlife.",
            },
            {
              title: "Serengeti National Park",
              text: "Explore endless plains renowned for exceptional wildlife encounters.",
            },
            {
              title: "Ngorongoro Crater",
              text: "Descend into one of Africa's most remarkable wildlife destinations.",
            },
            {
              title: "Lake Manyara",
              text: "Finish with a morning game drive among elephants, flamingos and tree-climbing lions.",
            },
            {
              title: "Luxury Accommodation",
              text: "Enjoy carefully selected lodges and camps throughout your safari.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs font-bold text-[#082d19]">
                  ✓
                </span>

                <div>
                  <h4 className="font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>

    {/* ============================================================
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-[#f7faf7] p-8 sm:p-10">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b651e]">
              Included
            </p>

            <h3 className="font-serif text-3xl font-semibold text-[#082d19]">
              What's Included
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-4">

          {[
            "Park fees (for non-residents)",
            "All activities (unless labeled as optional)",
            "All accommodation (unless listed as upgrade)",
            "A professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs text-white">
                ✓
              </span>

              <span className="text-sm leading-6 text-gray-600">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-[#dba33a]/20 bg-[#fffaf0] p-8 sm:p-10">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dba33a] text-xl text-[#082d19]">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b651e]">
              Excluded
            </p>

            <h3 className="font-serif text-3xl font-semibold text-[#082d19]">
              What's Excluded
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-4">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips (US$10–15 per person per day)",
            "Personal items, souvenirs, travel insurance, visa fees, etc.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs font-bold text-[#082d19]">
                ×
              </span>

              <span className="text-sm leading-6 text-gray-600">
                {item}
              </span>
            </div>
          ))}

        </div>

        {/* OPTIONAL ACTIVITIES */}
        <div className="mt-8 rounded-2xl border border-[#dba33a]/20 bg-white p-6">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b651e]">
            Optional Safari Activities
          </p>

          <div className="mt-4 space-y-3">

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-gray-700">
                Balloon Safari
              </span>
              <span className="text-sm font-bold text-[#082d19]">
                USD 500 / person
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-gray-700">
                Maasai Village Visit
              </span>
              <span className="text-sm font-bold text-[#082d19]">
                USD 50 / vehicle
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-gray-700">
                Spa & Massage Treatments
              </span>
              <span className="text-sm font-bold text-[#082d19]">
                Where available
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* ============================================================
        CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082d19]">

      <img
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="absolute inset-0 bg-[#082d19]/80" />

      <div className="relative px-7 py-14 text-center sm:px-12 sm:py-20">

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#dba33a]">
          Your Tanzania Adventure
        </span>

        <h3 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Witness the
          <span className="text-[#dba33a]">
            {" "}Ndutu Calving Season
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Experience one of nature's most extraordinary spectacles with
          Daffar Tours and Travel. Let us create your unforgettable
          Tanzania safari.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-4 text-sm font-bold text-[#082d19] transition hover:-translate-y-1 hover:bg-[#e8b85a]"
          >
            Plan Your Safari
            <span className="ml-2">→</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
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
  id="8-day-ndutu-calving-season"
  className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[30%] h-[32rem] w-[32rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-[40%] h-72 w-72 rounded-full bg-[#0b4224]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HERO HEADER
    ============================================================ */}
    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#dba33a]/30 bg-[#fffaf0] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8b651e]">
        Tanzania Migration Safari
      </span>

      <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-[#082d19] sm:text-5xl lg:text-6xl">
        8-Day Ndutu Calving Season
        <span className="block text-[#dba33a]">
          Serengeti Migration
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
        This eight-day safari is designed to immerse you in the Serengeti
        ecosystem at its most alive; from elephant-rich Tarangire to the vast
        central and western Serengeti and the wildlife-dense Ngorongoro Crater,
        finishing with Lake Manyara before departure.
      </p>

      <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
        With comfortable lodges and classic tented camps, you'll enjoy
        sweeping savannah views, memorable game drives, and the chance to
        witness predator action and seasonal movements of wildebeest and zebra.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "8 Days / 7 Nights",
        },
        {
          label: "Main Highlight",
          value: "Ndutu Calving Season",
        },
        {
          label: "Safari Circuit",
          value: "Tarangire • Serengeti • Ngorongoro",
        },
        {
          label: "Safari Style",
          value: "Luxury Private",
        },
      ].map((fact) => (
        <div
          key={fact.label}
          className="rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-6 text-center shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b651e]">
            {fact.label}
          </p>

          <p className="mt-3 font-serif text-xl font-semibold text-[#082d19]">
            {fact.value}
          </p>
        </div>
      ))}
    </div>

    {/* ============================================================
        IMAGE COLLAGE
    ============================================================ */}
    <div className="mt-16 grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">

      {/* MAIN IMAGE */}
      <div className="group relative min-h-[430px] overflow-hidden rounded-[2rem] shadow-xl sm:min-h-[540px]">

        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85"
          alt="Wildebeest migration across the Serengeti"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-7 sm:p-10">

          <span className="inline-flex rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
            Ndutu Migration
          </span>

          <h3 className="mt-4 max-w-xl font-serif text-3xl font-semibold text-white sm:text-4xl">
            Eight days through Tanzania's most remarkable wildlife landscapes.
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
            From Tarangire's elephants to the Serengeti's migrating herds and
            the wildlife-rich Ngorongoro Crater.
          </p>
        </div>
      </div>

      {/* SIDE IMAGES */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

        <div className="group relative min-h-[250px] overflow-hidden rounded-[2rem] shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1100&q=85"
            alt="Elephant in Tanzania"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
              Tarangire
            </p>

            <h4 className="mt-2 font-serif text-2xl font-semibold text-white">
              Elephants & Ancient Baobabs
            </h4>
          </div>
        </div>

        <div className="group relative min-h-[250px] overflow-hidden rounded-[2rem] shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1100&q=85"
            alt="Lion in the Serengeti"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
              Serengeti
            </p>

            <h4 className="mt-2 font-serif text-2xl font-semibold text-white">
              Big Cat Country
            </h4>
          </div>
        </div>

      </div>
    </div>

    {/* ============================================================
        INTRODUCTION / HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">

      <div className="relative overflow-hidden rounded-[2rem]">

        <img
          src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1400&q=85"
          alt="African savannah landscape"
          className="h-[430px] w-full object-cover sm:h-[500px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#082d19]/70 via-transparent to-transparent" />

        <div className="absolute bottom-7 left-7 right-7">

          <p className="text-sm font-medium text-white/80">
            Explore Tanzania's legendary northern safari circuit
          </p>

        </div>
      </div>

      <div className="rounded-[2rem] bg-[#f7faf7] p-8 sm:p-10 lg:p-12">

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b651e]">
          The Experience
        </span>

        <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#082d19] sm:text-4xl">
          Follow the migration through
          <span className="block text-[#dba33a]">
            Tanzania's wild heart
          </span>
        </h3>

        <p className="mt-6 leading-8 text-gray-600">
          This eight-day journey combines iconic wildlife destinations,
          comfortable lodges and classic tented camps for an immersive
          safari experience.
        </p>

        <p className="mt-4 leading-8 text-gray-600">
          Travel from Arusha into Tarangire before exploring the central and
          western Serengeti. Continue to the Ngorongoro Conservation Area
          before finishing with a final game drive in Lake Manyara.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">

          {[
            "Tarangire Elephant Herds",
            "Central Serengeti",
            "Western Serengeti",
            "Migration Viewing",
            "Ngorongoro Crater",
            "Lake Manyara",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-sm text-white">
                ✓
              </span>

              <span className="text-sm font-medium text-gray-700">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>

    {/* ============================================================
        ITINERARY HEADER
    ============================================================ */}
    <div className="mx-auto mt-24 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#0b4224]/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0b4224]">
        Safari Itinerary
      </span>

      <h3 className="mt-5 font-serif text-4xl font-semibold text-[#082d19] sm:text-5xl">
        Eight Days of
        <span className="text-[#dba33a]">
          {" "}Wildlife & Discovery
        </span>
      </h3>

      <p className="mt-5 leading-8 text-gray-600">
        Follow a carefully designed route through Tarangire, the central and
        western Serengeti, Ngorongoro and Lake Manyara.
      </p>
    </div>

    {/* ============================================================
        DAY 1
    ============================================================ */}
    <div className="relative mt-14">

      <div className="hidden absolute left-8 top-0 h-full w-px bg-[#0b4224]/10 lg:block" />

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            01
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1607976587566-98f4c8f2d6a5?auto=format&fit=crop&w=1200&q=85"
                alt="Arusha Tanzania"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">

                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 01
                </span>

              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Arrival
                </p>

                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Arrival in Arusha
                </h4>

              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Arrival in Arusha
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Touch down at Kilimanjaro International Airport, where a
                friendly Daffar Tours and Travel representative will meet
                and brief you on the days ahead.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Transfer to Arusha Explores Lodge to unwind, enjoy a relaxed
                afternoon, and ease into safari life. As evening falls,
                gather by the campfire before dinner and a restful night.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
                      Arusha Explores Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 2
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            02
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
                alt="Elephant in Tarangire National Park"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 02
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Tarangire National Park
                </p>

                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Elephants & Baobabs
                </h4>

              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Tarangire National Park
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                After breakfast, drive to Tarangire National Park, a landscape
                of ancient baobabs and sweeping plains famed for its large
                elephant herds.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Spend the day on game drives with a picnic lunch in the park.
                Watch for lions, leopards, giraffes, buffalos, wildebeest,
                zebras, and prolific birdlife along the Tarangire River.
                In the late afternoon, continue to Karatu and settle in at
                your lodge.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
                      Marera Valley Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 3
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            03
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85"
                alt="Serengeti National Park"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 03
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Serengeti
                </p>

                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Into the Serengeti
                </h4>

              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Serengeti National Park
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Journey toward the Serengeti for classic savannah scenes and
                exceptional wildlife encounters. Today's drives explore the
                park's grasslands, riverlines, and kopjes; prime territory
                for big cats and plains game.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                With luck you may enjoy a bush-style breakfast in the wild
                and sightings of lion prides, cheetah on the hunt, and
                grazing antelopes. Return to Karatu for dinner and an
                overnight stay.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
                      Marera Valley Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 4
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            04
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85"
                alt="Lion in the Serengeti"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">

                <span className="rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Big Cat Country
                </span>

              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Central Serengeti
                </p>

                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Into Big Cat Country
                </h4>

              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Central Serengeti – Into Big Cat Country
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Check out after an early start and head deep into the
                Serengeti. Enjoy unhurried morning and afternoon game drives
                across wildlife-rich valleys and open plains, with the chance
                for a memorable bush breakfast en route.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                As the light softens, set out on an evening drive when
                predators become active. Later, arrive at your intimate
                tented camp in the heart of the Serengeti.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
                      Nimali Central Serengeti
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 5
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            05
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=1200&q=85"
                alt="Wildebeest migration in Serengeti"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">

                <span className="rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 05
                </span>

              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Western Serengeti
                </p>

                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Westward to Kirawira
                </h4>

              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Serengeti – Westward to Kirawira
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Continue your Serengeti adventure as you move toward the
                western corridor. Expect superb game viewing, from lion and
                leopard tracking to open-plains encounters with giraffe,
                buffalo, and antelope.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                With conditions permitting, a guided cheetah-tracking
                experience may be possible. As evening approaches, an
                atmospheric game drive leads you to camp for dinner, a
                campfire, and the sounds of the savannah at night.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
                      Kirawira Serena Camp
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 6
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            06
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85"
                alt="Wildebeest and wildlife in Tanzania"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">

                <span className="rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Migration Viewing
                </span>

              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Western Serengeti
                </p>

                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Migration Viewing
                </h4>

              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Western Serengeti – Migration Viewing
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Spend the day exploring the western Serengeti. When the herds
                are in the area, this is a superb place to witness vast
                columns of wildebeest and zebra on the move and to look for
                action along the Grumeti River.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Between drives, soak in camp comforts, then return to the
                plains for a golden-hour evening drive before dinner.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
                      Kirawira Serena Camp
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 7
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            07
          </div>

        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=85"
                alt="Ngorongoro landscape"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">

                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Day 07
                </span>

              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Ngorongoro
                </p>

                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Crater Rim Sundowners
                </h4>

              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                To Ngorongoro – Crater Rim Sundowners
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Depart the Serengeti with a final game drive en route.
                Continue to the Ngorongoro Conservation Area where dramatic
                views open up across the world's largest intact caldera.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                An afternoon drive on the rim and surrounding highlands
                reveals rich wildlife and sweeping scenery. Later, check
                in to your lodge perched on the crater rim and enjoy dinner.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
                      Ngorongoro Serena Safari Lodge
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      On the crater rim
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
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
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY 8
    ============================================================ */}
    <div className="relative mt-8">

      <div className="relative grid gap-8 lg:grid-cols-[90px_1fr]">

        <div className="relative z-10 hidden lg:flex">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-xl font-bold text-white shadow-lg">
            08
          </div>

        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">

            <div className="relative min-h-[330px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=85"
                alt="Lake Manyara wildlife"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">

                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                  Final Day
                </span>

              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-[#dba33a]">
                  Lake Manyara
                </p>

                <h4 className="mt-2 font-serif text-3xl font-semibold text-white">
                  Final Game Drive & Departure
                </h4>

              </div>
            </div>

            <div className="p-7 sm:p-9">

              <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                Lake Manyara & Departure
              </h4>

              <p className="mt-5 leading-8 text-gray-600">
                Before your onward journey, descend into Lake Manyara
                National Park for a final game drive.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                This compact, diverse park is known for tree-climbing lions,
                elephant encounters, thriving hippo pools, and prolific
                birdlife including flamingos when conditions allow.
                After lunch, transfer to Arusha Airport for your flight
                and the end of a remarkable safari.
              </p>

              <div className="mt-7 border-t border-gray-100 pt-6">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
                      Departure Day
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals & Drinks
                    </p>

                    <p className="mt-2 font-medium text-[#082d19]">
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

    {/* ============================================================
        JOURNEY SNAPSHOT
    ============================================================ */}
    <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

      {[
        ["Days 1–2", "Arusha & Tarangire"],
        ["Day 3", "Serengeti"],
        ["Day 4", "Central Serengeti"],
        ["Days 5–6", "Western Serengeti"],
        ["Days 7–8", "Ngorongoro & Manyara"],
      ].map(([day, destination]) => (
        <div
          key={day}
          className="rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-6 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
            {day}
          </p>

          <p className="mt-3 font-serif text-lg font-semibold text-[#082d19]">
            {destination}
          </p>
        </div>
      ))}

    </div>

    {/* ============================================================
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-[#f7faf7] p-8 sm:p-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b651e]">
              Included
            </p>

            <h3 className="font-serif text-3xl font-semibold text-[#082d19]">
              What's Included
            </h3>
          </div>

        </div>

        <div className="mt-8 space-y-4">

          {[
            "Park fees",
            "All activities (unless indicated as optional)",
            "All accommodations",
            "All transportation (unless labeled as optional)",
            "Professional guide",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs text-white">
                ✓
              </span>

              <span className="text-sm leading-6 text-gray-600">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-[#dba33a]/20 bg-[#fffaf0] p-8 sm:p-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dba33a] text-xl text-[#082d19]">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b651e]">
              Excluded
            </p>

            <h3 className="font-serif text-3xl font-semibold text-[#082d19]">
              What's Excluded
            </h3>
          </div>

        </div>

        <div className="mt-8 space-y-4">

          {[
            "Tips (Tipping guideline: US$10.00 per person per day)",
            "International flights",
            "Taxes / VAT",
            "Personal items (souvenirs, travel insurance, visa fees, etc.)",
            "Additional accommodation before and at the end of the tour",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs font-bold text-[#082d19]">
                ×
              </span>

              <span className="text-sm leading-6 text-gray-600">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>

    {/* ============================================================
        OPTIONAL ACTIVITIES
    ============================================================ */}
    <div className="mt-8 rounded-[2rem] border border-[#dba33a]/20 bg-[#fffaf0] p-8 sm:p-10">

      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b651e]">
            Optional Experiences
          </span>

          <h3 className="mt-3 font-serif text-3xl font-semibold text-[#082d19] sm:text-4xl">
            Add a little more
            <span className="text-[#dba33a]">
              {" "}luxury
            </span>
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Enhance your safari with relaxing spa and massage treatments
            at selected properties along the journey.
          </p>

        </div>

        <div className="grid gap-3 sm:grid-cols-2">

          {[
            "Spa & Massage – Marera Valley Lodge (Day 2)",
            "Spa & Massage – Nimali Central Serengeti (Day 4)",
            "Spa & Massage – Kirawira Serena Camp (Day 5)",
            "Spa & Massage – Ngorongoro Serena Safari Lodge (Day 7)",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#dba33a]/20 bg-white p-5"
            >
              <div className="flex items-start gap-3">

                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dba33a] text-xs font-bold text-[#082d19]">
                  +
                </span>

                <p className="text-sm leading-6 text-gray-600">
                  {item}
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
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082d19]">

      <img
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="absolute inset-0 bg-[#082d19]/85" />

      <div className="relative px-7 py-14 text-center sm:px-12 sm:py-20">

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#dba33a]">
          Your Tanzania Adventure
        </span>

        <h3 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">

          Experience the
          <span className="text-[#dba33a]">
            {" "}Ndutu Calving Season
          </span>

        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Follow the migration through Tarangire, the Serengeti, Ngorongoro
          and Lake Manyara on an unforgettable eight-day Tanzania safari.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-4 text-sm font-bold text-[#082d19] transition hover:-translate-y-1 hover:bg-[#e8b85a]"
          >
            Plan Your Safari
            <span className="ml-2">→</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
          >
            Request a Quote
          </Link>

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