/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import mara4 from "../assets/mara4.jpg";
import serengeti1 from "../assets/serengeti1.jpg";
import serengeti2 from "../assets/serengeti2.jpg";
import serengeti3 from "../assets/serengeti3.jpg";
import mara3 from "../assets/mara3.jpg";
import mara2 from "../assets/mara2.jpg";
import mara1 from "../assets/mara1.jpg";
import ngorongoro1 from "../assets/ngorongoro1.jpg";
import nakuru2 from "../assets/nakuru2.jpg";
import wilderbeast1 from "../assets/wilderbeast1.jpg";
import wildbeest from "../assets/wildbeest.jpg";
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
    PAGE HERO — MAASAI MARA ITINERARIES
============================================================ */}

{/* ============================================================
    MASAI MARA ITINERARIES — HERO
============================================================ */}
<section
  id="masai-mara-itineraries-hero"
  className="relative overflow-hidden bg-[#092d1a]"
>
  <img
    src={wilderbeast1}
    alt="Masai Mara National Reserve"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#061b10]/90 via-[#092d1a]/60 to-[#092d1a]/20" />

  {/* HERO CONTENT */}
  <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[540px] lg:px-12">
    <div className="max-w-3xl">

      {/* LABEL */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
          Wildebeest Safari Itineraries
        </span>
      </div>

      {/* TITLE */}
      
      

    </div>
  </div>
</section>


{/* ============================================================
    MASAI MARA NATIONAL RESERVE
============================================================ */}

{/* ============================================================
    MASAI MARA NATIONAL RESERVE
============================================================ */}



 {/* ============================================================
      03 — WILDEBEEST SAFARIS
  ============================================================ */}
  <section
    id="wildebeest-safaris"
    className="relative overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 lg:py-32"
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="mb-14 max-w-3xl lg:mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B87916]">
           Wildebeest Safaris
        </span>

        <h2 className="mt-5 font-serif text-4xl leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
          Beyond the River Crossings:
          <span className="block italic text-[#B87916]">
            The Migration Experience
          </span>
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">

        <div className="group relative overflow-hidden rounded-[2.5rem]">
          <img
            src={mara1}
            alt="Wildebeest migration in East Africa"
            className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[650px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F5A623]">
              Serengeti → Mara
            </p>
            <p className="mt-2 max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl">
              Follow one of Earth's greatest natural spectacles.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">

          <p className="text-lg leading-8 text-gray-600">
            Step into the untamed rhythms of East Africa with Daffar Tours and
            Travel on our Wildebeest Migration Safari, an extraordinary journey
            following one of the planet’s most powerful natural spectacles.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Imagine standing among endless herds as millions of wildebeest,
            zebras, and gazelles sweep across the vast Serengeti, brave the
            crocodile-filled Mara River, and spill into the golden grasslands of
            the Maasai Mara.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            From the calving grounds of Ndutu, where thousands of newborns take
            their first steps, to dramatic river crossings, each stage brings
            raw, breathtaking drama.
          </p>

          <div className="my-8 h-px bg-[#082D19]/10" />

          <div className="space-y-4">
            {[
              ["01", "Ndutu Calving Grounds", "Witness the beginning of life."],
              ["02", "Serengeti Plains", "Follow the herds across endless grasslands."],
              ["03", "Mara River", "Experience the drama of the crossings."],
              ["04", "Maasai Mara", "Discover the herds in Kenya."],
            ].map(([number, title, text]) => (
              <div key={number} className="flex gap-4">
                <span className="font-serif text-sm text-[#B87916]">
                  {number}
                </span>
                <div>
                  <h3 className="font-semibold text-[#082D19]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-serif text-xl italic leading-8 text-[#082D19]">
            Join us, and watch the greatest story of survival and instinct
            unfold before your eyes.
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
    8-DAY NDUTU CALVING SEASON SAFARI
============================================================ */}


{/* ============================================================
    3-DAY BEST OF WILDEBEEST MIGRATION SAFARI
============================================================ */}
<section
  id="3-day-wildebeest-migration"
  className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[30%] h-[30rem] w-[30rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-3 rounded-full border border-[#0b4224]/15 bg-[#0b4224]/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#dba33a]" />
        Wildebeest Migration Safari
      </span>

      <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.08] text-[#0b4224] sm:text-5xl lg:text-6xl">
        3-Day Best of
        <span className="block text-[#dba33a]">
          Wildebeest Migration Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        This unforgettable journey is crafted to immerse you in one of
        nature's most spectacular events: the Great Wildebeest Migration.
        With two nights in the Masai Mara, you'll have ample opportunity
        to witness thousands of animals sweeping across the vast plains,
        offering a front-row seat to the pulse of the wild.
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
          value: "Wildebeest Migration",
        },
        {
          icon: "📅",
          label: "Duration",
          value: "3 Days / 2 Nights",
        },
        {
          icon: "📍",
          label: "Main Area",
          value: "Masai Mara",
        },
        {
          icon: "🌿",
          label: "Highlight",
          value: "Great Migration",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="group rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-white shadow-md transition duration-300 group-hover:scale-110">
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
        VISUAL INTRODUCTION
    ============================================================ */}
    <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">

      {/* LEFT CONTENT */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-[#f7faf7] p-7 sm:p-10">

        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b4224] text-lg text-white shadow-md">
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
          Experience the magic of the Great Wildebeest Migration on a
          carefully designed three-day safari through the legendary
          Masai Mara National Reserve. This short but immersive adventure
          gives you two nights in the heart of the Mara, allowing plenty
          of time for game drives and unforgettable wildlife encounters.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          From vast herds of wildebeest and zebras to elephants, buffaloes,
          lions, leopards, cheetahs and other iconic wildlife, every moment
          brings a new opportunity to witness nature at its most dramatic.
          The safari also provides an opportunity to experience authentic
          Maasai culture before returning to Nairobi.
        </p>

        {/* MINI HIGHLIGHTS */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">

          {[
            "Great Wildebeest Migration",
            "Big Five Wildlife",
            "Two Nights in the Mara",
            "Maasai Cultural Experience",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-[#0b4224]/10 bg-white px-4 py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs font-bold text-white">
                ✓
              </span>

              <span className="text-sm font-medium text-slate-700">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>


      {/* RIGHT IMAGE PANEL */}
      <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#0b4224] shadow-xl">

        <img
          src={serengeti2}
          alt="Wildebeest and wildlife in Masai Mara"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/90 via-[#082d19]/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            The Heart of the Safari
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Two Nights in the Mara
          </h3>

          <p className="mt-4 max-w-xl leading-7 text-white/80">
            Stay deep in the Masai Mara and enjoy more time to follow
            wildlife, explore the plains and experience the spectacle
            of the Great Migration.
          </p>
        </div>
      </div>
    </div>


    {/* ============================================================
        SAFARI HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          What Awaits You
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Experience the Mara
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Three days of extraordinary wildlife, dramatic landscapes and
          unforgettable moments in Kenya's legendary safari country.
        </p>
      </div>


      <div className="mt-10 grid gap-5 md:grid-cols-3">

        {/* CARD 1 */}
        <div className="group relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-lg">

          <img
            src={serengeti3}
            alt="Masai Mara wildlife"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04190d] via-[#082d19]/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Wildlife
            </span>

            <h4 className="mt-2 font-serif text-2xl font-bold text-white">
              Follow the Migration
            </h4>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Witness vast herds of wildebeest and zebras moving across
              the spectacular Mara plains.
            </p>
          </div>
        </div>


        {/* CARD 2 */}
        <div className="group relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-lg">

          <img
            src="https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/94c3a4b806d0f86ab5564bc9b73e8186ea6941597536e2a51023021d29ef235f.jpg"
            alt="Kenya safari landscape"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04190d] via-[#082d19]/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Big Five
            </span>

            <h4 className="mt-2 font-serif text-2xl font-bold text-white">
              Search for the Big Five
            </h4>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Explore the reserve in search of lions, leopards, elephants,
              buffaloes and other iconic African wildlife.
            </p>
          </div>
        </div>


        {/* CARD 3 */}
        <div className="group relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-lg">

          <img
            src="https://media.jambo.nl/original/galerij/Kenia-Wildlife-Masai-Mara-leeuwen-IS-520772736.jpg"
            alt="Lions in Masai Mara"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04190d] via-[#082d19]/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Adventure
            </span>

            <h4 className="mt-2 font-serif text-2xl font-bold text-white">
              Live the Wild
            </h4>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Experience the drama of predators, plains wildlife and
              breathtaking African sunsets.
            </p>
          </div>
        </div>

      </div>
    </div>


    {/* ============================================================
        ITINERARY TIMELINE
    ============================================================ */}
    <div className="mt-24">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Day-by-Day Itinerary
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Three unforgettable days of wildlife, adventure and cultural
          discovery in the Masai Mara.
        </p>
      </div>


      <div className="relative mx-auto mt-12 max-w-5xl">

        {/* TIMELINE LINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 sm:left-8 sm:block" />

        <div className="space-y-10">


          {/* ========================================================
              DAY 1
          ======================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              01
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="grid lg:grid-cols-[0.38fr_0.62fr]">

                {/* IMAGE */}
                <div className="relative min-h-[260px] lg:min-h-full">
                  <img
                   src={serengeti2}
                    alt="Masai Mara safari"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/70 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0b4224]">
                      Arrival & Game Drive
                    </span>
                  </div>
                </div>


                {/* CONTENT */}
                <div className="p-6 sm:p-8">

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Day 1
                  </span>

                  <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                    Nairobi – Masai Mara National Reserve
                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">
                    Your safari adventure begins in Nairobi, where a
                    representative from Daffar Tours and Travel will
                    warmly welcome you. From here, you will transfer by
                    road to the Masai Mara National Reserve, one of the
                    world's most iconic safari destinations.
                  </p>

                  <p className="mt-4 leading-8 text-slate-600">
                    After check-in and lunch at &Beyond Bateleur Camp,
                    you will enjoy your first thrilling afternoon game
                    drive, encountering elephants, buffaloes, lions,
                    leopards, zebras, giraffes and more. The Mara is
                    also home to the Big Five and countless bird species.
                  </p>

                  <div className="mt-7 grid gap-5 border-t border-slate-100 pt-6 sm:grid-cols-2">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Accommodation
                      </p>

                      <p className="mt-1 font-semibold text-[#0b4224]">
                        &Beyond Bateleur Camp
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Meals & Drinks
                      </p>

                      <p className="mt-1 font-semibold text-[#0b4224]">
                        Lunch & Dinner
                      </p>

                      <p className="text-xs text-slate-500">
                        Drinking water included
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>


          {/* ========================================================
              DAY 2
          ======================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              02
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="grid lg:grid-cols-[0.38fr_0.62fr]">

                <div className="relative min-h-[260px] lg:min-h-full">

                  <img
                    src="https://media.jambo.nl/original/galerij/Kenia-Wildlife-Masai-Mara-leeuwen-IS-520772736.jpg"
                    alt="Lions in Masai Mara"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/70 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0b4224]">
                      Full-Day Safari
                    </span>
                  </div>
                </div>


                <div className="p-6 sm:p-8">

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Day 2
                  </span>

                  <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                    Full Day in the Masai Mara
                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">
                    Wake up early for a sunrise game drive in the Masai
                    Mara, where the golden morning light offers the perfect
                    backdrop for photography. Witness predators on the hunt
                    and herds of wildebeest and zebras grazing across the
                    savanna.
                  </p>

                  <p className="mt-4 leading-8 text-slate-600">
                    In the afternoon, continue exploring the Mara, keeping
                    an eye out for rhinos, hyenas, jackals and cheetahs.
                    The day concludes with a relaxing evening back at your
                    luxury camp.
                  </p>


                  {/* OPTIONAL ACTIVITY */}
                  <div className="mt-6 rounded-2xl border border-[#dba33a]/20 bg-[#fffaf0] p-5">

                    <div className="flex items-start gap-3">

                      <span className="text-xl">
                        🎈
                      </span>

                      <div>
                        <p className="font-bold text-[#0b4224]">
                          Optional Hot Air Balloon Safari
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Soar above the Masai Mara at sunrise for a
                          spectacular aerial perspective of the wildlife
                          and migration, followed by a bush breakfast.
                        </p>

                        <p className="mt-2 text-sm font-bold text-[#dba33a]">
                          USD 500 per person
                        </p>
                      </div>

                    </div>
                  </div>


                  <div className="mt-7 grid gap-5 border-t border-slate-100 pt-6 sm:grid-cols-2">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Accommodation
                      </p>

                      <p className="mt-1 font-semibold text-[#0b4224]">
                        &Beyond Bateleur Camp
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Meals & Drinks
                      </p>

                      <p className="mt-1 font-semibold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>

                      <p className="text-xs text-slate-500">
                        Drinking water included
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>


          {/* ========================================================
              DAY 3
          ======================================================== */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              03
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="grid lg:grid-cols-[0.38fr_0.62fr]">

                <div className="relative min-h-[260px] lg:min-h-full">

                  <img
                    src="https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/09/2.-Flamingos-and-Rhinos-at-Lake-Nakuru-National-Park-Kenya.jpg?resize=1024%2C573&ssl=1"
                    alt="Kenya wildlife landscape"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/70 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0b4224]">
                      Safari Ends
                    </span>
                  </div>
                </div>


                <div className="p-6 sm:p-8">

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Day 3
                  </span>

                  <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                    Masai Mara – Nairobi
                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">
                    After breakfast, visit a Maasai village for an authentic
                    cultural experience before beginning your scenic return
                    journey to Nairobi.
                  </p>

                  <p className="mt-4 leading-8 text-slate-600">
                    The safari concludes with unforgettable memories of
                    the majestic wildebeest migration and the wildlife
                    wonders of the Masai Mara.
                  </p>


                  <div className="mt-7 grid gap-5 border-t border-slate-100 pt-6 sm:grid-cols-2">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Accommodation
                      </p>

                      <p className="mt-1 font-semibold text-[#0b4224]">
                        Safari Ends
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
    </div>


    {/* ============================================================
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-24 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/50 p-7 sm:p-9">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b4224] text-white shadow-md">
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
            "All accommodation (unless listed as an upgrade)",
            "A professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals (as specified in the itinerary)",
            "Drinks (as specified in the itinerary)",
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
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-700 text-white shadow-md">
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
            "Tips (tipping guideline: US$15 per person per day)",
            "Personal items, souvenirs, travel insurance, visa fees, etc.",
            "Optional safari activities",
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
              <span>
                Balloon Safari
              </span>

              <span className="font-bold text-[#dba33a]">
                USD 500 / person
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>
                Maasai Village Visit
              </span>

              <span className="font-bold text-[#dba33a]">
                USD 50 / vehicle
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>


    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-24 overflow-hidden rounded-[2.5rem] bg-[#0b4224] px-7 py-14 text-center shadow-2xl sm:px-12 sm:py-20">

      {/* DECORATIVE CIRCLES */}
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/5" />
      <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#dba33a]/10" />

      {/* BACKGROUND IMAGE */}
      <img
        src="https://www.flamingotravels.net/_next/image?q=90&url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FPlacesOfInterest%2FMasai-Mara-Game-Drive-Masai-Mara-place-to-visit-intrest-3.jpg&w=1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />

      <div className="absolute inset-0 bg-[#0b4224]/90" />


      <div className="relative mx-auto max-w-3xl">

        <span className="text-4xl">
          🦓
        </span>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Experience the Wild
        </p>

        <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Witness the Great
          <span className="block text-[#dba33a]">
            Wildebeest Migration
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
          Experience the drama, beauty and unforgettable wildlife encounters
          of the Masai Mara on this three-day migration safari.
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
    6-DAY MASAI MARA MIGRATION — MARA RIVER CROSSING
============================================================ */}
<section
  id="masai-mara-migration-6-day"
  className="scroll-mt-24 relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[28rem] w-[28rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-72 w-72 rounded-full bg-[#0b4224]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dba33a]/30 bg-[#fffaf0] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0b4224] shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        6 Days • Masai Mara • Kenya
      </div>

      <h2 className="font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">
        6-Day Masai Mara Migration
        <span className="block text-[#dba33a]">
          Mara River Crossing
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Immerse yourself in one of the greatest natural spectacles on Earth —
        the Masai Mara Migration and the dramatic Mara River crossings.
        From July to October, millions of wildebeests, zebras, and gazelles
        surge across the plains and rivers of the Masai Mara, followed closely
        by lions, leopards, crocodiles, and other predators.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">
        Staying at the iconic Mara Serena Safari Lodge, enjoy spectacular
        views, thrilling daily game drives, and unforgettable wildlife
        encounters throughout your six-day safari.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 text-center shadow-sm">
        <div className="text-2xl font-bold text-[#0b4224]">6</div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Days
        </div>
      </div>

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 text-center shadow-sm">
        <div className="text-2xl font-bold text-[#0b4224]">5</div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Nights
        </div>
      </div>

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 text-center shadow-sm">
        <div className="text-2xl font-bold text-[#0b4224]">
          Jul–Oct
        </div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Migration Season
        </div>
      </div>

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 text-center shadow-sm">
        <div className="text-2xl font-bold text-[#0b4224]">
          Mara
        </div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Main Destination
        </div>
      </div>

    </div>

    {/* ========================================================
        SAFARI HIGHLIGHT
    ======================================================== */}
    <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl bg-[#0b4224] shadow-xl">

      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

        <div className="p-7 sm:p-9 lg:p-11">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Safari Highlight
          </span>

          <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
            Witness the Great Migration in the Masai Mara
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Follow the migration herds across the Mara plains and experience
            the breathtaking drama of the Mara River crossings. Watch as
            wildebeests and zebras gather at the river before making their
            dangerous journey through crocodile-filled waters.
          </p>
        </div>

        <div className="flex items-center justify-center border-t border-white/10 bg-white/5 p-7 lg:border-l lg:border-t-0">
          <div className="text-center">
            <div className="text-4xl">🦓</div>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider text-white">
              Migration & River Crossings
            </p>
            <p className="mt-2 text-xs leading-5 text-white/60">
              July to October
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mx-auto mt-16 max-w-5xl">

      <div className="mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          The Journey
        </span>

        <h3 className="mt-2 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Day-by-Day Safari
        </h3>
      </div>

      <div className="space-y-8">

        {/* DAY 1 */}
        <div className="relative rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg">
              01
            </div>

            <div className="flex-1">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 1
              </span>

              <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224]">
                Nairobi – Masai Mara National Reserve
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Your safari begins in Nairobi, where a representative from
                Daffar Tours and Travel will meet and transfer you to the
                Masai Mara. After checking in at Mara Serena Safari Lodge
                and enjoying lunch, head out for your first game drive in
                the reserve.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Expect sightings of elephants, buffaloes, giraffes, lions,
                leopards, and more. The day ends with a relaxing dinner and
                overnight stay at the lodge.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Accommodation
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Mara Serena Safari Lodge
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fffaf0] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Meals & Drinks
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Lunch & Dinner
                  </p>
                  <p className="text-xs text-gray-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* DAY 2 */}
        <div className="relative rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg">
              02
            </div>

            <div className="flex-1">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 2
              </span>

              <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224]">
                The Great Migration – Mara River
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Rise early for a full day exploring the Mara during the
                migration season. Witness the breathtaking sight of
                wildebeests and zebras gathering along the Mara River before
                making their perilous crossing into crocodile-filled waters.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Lions, cheetahs, and hyenas are never far away, making this a
                day of raw drama and unforgettable photography. Conclude with
                a bush picnic and an evening game drive.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Accommodation
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Mara Serena Safari Lodge
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fffaf0] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Meals & Drinks
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="text-xs text-gray-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* DAY 3 */}
        <div className="relative rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg">
              03
            </div>

            <div className="flex-1">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 3
              </span>

              <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224]">
                Big Five Safari
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Enjoy another thrilling day in the Masai Mara, one of the
                best places to see Africa’s Big Five: lion, elephant, buffalo,
                leopard, and rhino.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                The reserve’s open plains and riverine forests make spotting
                wildlife easier, and every drive brings new surprises. From
                lions on the hunt to elephants roaming the savannah, today is
                filled with classic safari moments.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Accommodation
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Mara Serena Safari Lodge
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fffaf0] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Meals & Drinks
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="text-xs text-gray-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* DAY 4 */}
        <div className="relative rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg">
              04
            </div>

            <div className="flex-1">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 4
              </span>

              <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224]">
                Mara River Crossings
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Spend the day near the Mara River, where the crossings are
                most frequent. With patience and a bit of luck, you may
                witness herds plunging into the river, struggling against
                strong currents and evading massive crocodiles.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                These heart-stopping moments are among the most iconic in the
                safari world. Evening game drives offer opportunities to see
                predators in action as the sun sets over the plains.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Accommodation
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Mara Serena Safari Lodge
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fffaf0] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Meals & Drinks
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="text-xs text-gray-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* DAY 5 */}
        <div className="relative rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg">
              05
            </div>

            <div className="flex-1">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 5
              </span>

              <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224]">
                Resident Wildlife of the Masai Mara
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Even outside the migration season, the Masai Mara teems with
                life. Lions, elephants, cheetahs, giraffes, hippos, and
                abundant birdlife make the park a year-round paradise.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Today you’ll enjoy bush breakfasts, guided game drives, and
                plenty of time to capture the essence of the Mara in both
                wildlife encounters and breathtaking scenery.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Accommodation
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Mara Serena Safari Lodge
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fffaf0] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Meals & Drinks
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="text-xs text-gray-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* DAY 6 */}
        <div className="relative rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg">
              06
            </div>

            <div className="flex-1">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                Day 6
              </span>

              <h4 className="mt-1 font-serif text-2xl font-bold text-[#0b4224]">
                Masai Mara – Nairobi
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                After breakfast, visit a Maasai village for a cultural
                encounter with the local community. Later, enjoy a scenic
                drive back to Nairobi, where your safari comes to an end.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Leave the Mara with memories of the Great Migration, dramatic
                river crossings, incredible wildlife, and unforgettable
                African landscapes etched forever in your heart.
              </p>

              <div className="mt-6 rounded-2xl bg-[#fffaf0] p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Meals & Drinks
                </span>
                <p className="mt-1 text-sm font-semibold text-[#0b4224]">
                  Breakfast & Lunch
                </p>
                <p className="text-xs text-gray-500">
                  Drinking water included
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    {/* ========================================================
        MIGRATION HIGHLIGHTS
    ======================================================== */}
    <div className="mx-auto mt-16 max-w-5xl">

      <div className="mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Experience the Mara
        </span>

        <h3 className="mt-2 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
          Migration Highlights
        </h3>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">
          <div className="text-3xl">🦓</div>
          <h4 className="mt-4 font-bold text-[#0b4224]">
            Great Migration
          </h4>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Follow huge herds of wildebeests, zebras, and gazelles across the
            Mara plains.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">
          <div className="text-3xl">🐊</div>
          <h4 className="mt-4 font-bold text-[#0b4224]">
            Mara River
          </h4>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Witness the dramatic river crossings and powerful crocodiles
            waiting in the waters.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">
          <div className="text-3xl">🦁</div>
          <h4 className="mt-4 font-bold text-[#0b4224]">
            Predator Action
          </h4>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Watch lions, cheetahs, leopards, and hyenas following the
            migration herds.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">
          <div className="text-3xl">📸</div>
          <h4 className="mt-4 font-bold text-[#0b4224]">
            Photography
          </h4>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Capture some of Africa’s most dramatic wildlife and landscape
            moments.
          </p>
        </div>

      </div>
    </div>

    {/* ========================================================
        INCLUDED / EXCLUDED
    ======================================================== */}
    <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b4224] text-white">
            ✓
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
              Included
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Included
            </h3>
          </div>
        </div>

        <ul className="mt-7 space-y-3">

          {[
            "Park fees (for non-residents)",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-gray-600"
            >
              <span className="mt-1 text-[#dba33a]">✓</span>
              <span>{item}</span>
            </li>
          ))}

        </ul>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 text-gray-600">
            ×
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Excluded
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              What's Not Included
            </h3>
          </div>
        </div>

        <ul className="mt-7 space-y-3">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline: US$10–15 per person per day",
            "Personal items such as souvenirs and travel insurance",
            "Visa fees",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-gray-600"
            >
              <span className="mt-1 text-gray-400">×</span>
              <span>{item}</span>
            </li>
          ))}

        </ul>
      </div>

    </div>

    {/* ========================================================
        OPTIONAL ACTIVITIES
    ======================================================== */}
    <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-[#dba33a]/20 bg-[#fffaf0] p-7 sm:p-9">

      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Optional Experiences
        </span>

        <h3 className="mt-2 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
          Make Your Safari Even More Memorable
        </h3>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h4 className="font-bold text-[#0b4224]">
              Balloon Safari
            </h4>
            <span className="rounded-full bg-[#0b4224] px-3 py-1 text-xs font-bold text-white">
              USD 500 pp
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Soar above the Masai Mara and experience the reserve from a
            breathtaking aerial perspective.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h4 className="font-bold text-[#0b4224]">
              Maasai Village Visit
            </h4>
            <span className="rounded-full bg-[#0b4224] px-3 py-1 text-xs font-bold text-white">
              USD 50 / vehicle
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Meet members of the Maasai community and experience their
            traditions, culture, and way of life.
          </p>
        </div>

      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] bg-[#0b4224] shadow-2xl">

      <div className="relative px-7 py-12 text-center sm:px-10 sm:py-16">

        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#dba33a]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">

          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#dba33a]">
            Ready for the Migration?
          </span>

          <h3 className="mx-auto mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Witness the Mara River Crossing
            <span className="block text-[#dba33a]">
              For Yourself
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Join Daffar Tours and Travel for an unforgettable six-day journey
            into the heart of the Masai Mara Migration.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-3.5 text-sm font-bold text-[#0b4224] transition hover:-translate-y-0.5 hover:bg-[#efbc58]"
            >
              Plan This Safari
            </Link>

            <a
              href="https://wa.me/+254708711459"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              WhatsApp Us
            </a>

          </div>

        </div>
      </div>
    </div>

  </div>
</section>


```jsx
{/* ============================================================
    8-DAY NDUTU CALVING SEASON SERENGETI MIGRATION
============================================================ */}
<section
  id="8-day-ndutu-calving-season"
  className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[32%] h-[32rem] w-[32rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-20 left-[42%] h-72 w-72 rounded-full bg-[#0b4224]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* ============================================================
        HERO HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#dba33a]/30 bg-[#fffaf0] px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#8b651e]">
        Tanzania Migration Safari
      </span>

      <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.12] text-[#082d19] sm:text-5xl lg:text-6xl">
        8-Day Ndutu Calving Season
        <span className="mt-2 block text-[#dba33a]">
          Serengeti Migration
        </span>
      </h2>

      <div className="mx-auto mt-7 max-w-3xl space-y-4 text-base leading-8 text-gray-600 sm:text-lg">
        <p>
          This eight-day safari is designed to immerse you in the Serengeti
          ecosystem at its most alive — from elephant-rich Tarangire to the
          vast central and western Serengeti, the wildlife-dense Ngorongoro
          Crater, and Lake Manyara.
        </p>

        <p>
          Enjoy comfortable lodges and classic tented camps, sweeping
          savannah views, memorable game drives, predator encounters, and
          opportunities to witness seasonal movements of wildebeest and zebra.
        </p>
      </div>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

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
          className="flex min-h-[145px] flex-col items-center justify-center rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-6 text-center shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b651e]">
            {fact.label}
          </p>

          <p className="mt-3 max-w-[230px] font-serif text-xl font-semibold leading-snug text-[#082d19]">
            {fact.value}
          </p>
        </div>
      ))}
    </div>

    {/* ============================================================
        FEATURE IMAGE COLLAGE
    ============================================================ */}
    <div className="mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-[1.45fr_0.85fr]">

      {/* MAIN IMAGE */}
      <div className="group relative min-h-[440px] overflow-hidden rounded-[2rem] shadow-xl sm:min-h-[560px]">

        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85"
          alt="Wildebeest migration across the Serengeti"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">

          <span className="inline-flex rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
            Ndutu Migration
          </span>

          <h3 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
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

        <div className="group relative min-h-[260px] overflow-hidden rounded-[2rem] shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1100&q=85"
            alt="Elephant in Tanzania"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
              Tarangire
            </p>

            <h4 className="mt-2 font-serif text-2xl font-semibold text-white">
              Elephants & Ancient Baobabs
            </h4>
          </div>
        </div>

        <div className="group relative min-h-[260px] overflow-hidden rounded-[2rem] shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1100&q=85"
            alt="Lion in the Serengeti"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">

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
        EXPERIENCE INTRO
    ============================================================ */}
    <div className="mx-auto mt-20 grid max-w-6xl items-stretch gap-8 lg:grid-cols-2 lg:gap-10">

      {/* IMAGE */}
      <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-lg sm:min-h-[500px]">

        <img
          src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1400&q=85"
          alt="African savannah landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#082d19]/75 via-transparent to-transparent" />

        <div className="absolute bottom-7 left-7 right-7">

          <p className="text-sm font-medium text-white/85">
            Explore Tanzania's legendary northern safari circuit
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-center rounded-[2rem] bg-[#f7faf7] p-8 sm:p-10 lg:p-12">

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b651e]">
          The Experience
        </span>

        <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#082d19] sm:text-4xl">
          Follow the migration through
          <span className="block text-[#dba33a]">
            Tanzania's wild heart
          </span>
        </h3>

        <div className="mt-6 space-y-4 leading-8 text-gray-600">

          <p>
            This eight-day journey combines iconic wildlife destinations,
            comfortable lodges and classic tented camps for an immersive
            safari experience.
          </p>

          <p>
            Travel from Arusha into Tarangire before exploring the central and
            western Serengeti. Continue to the Ngorongoro Conservation Area
            before finishing with a final game drive in Lake Manyara.
          </p>

        </div>

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
        ITINERARY INTRO
    ============================================================ */}
    <div className="mx-auto mt-24 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#0b4224]/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0b4224]">
        Safari Itinerary
      </span>

      <h3 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#082d19] sm:text-5xl">
        Eight Days of
        <span className="text-[#dba33a]">
          {" "}Wildlife & Discovery
        </span>
      </h3>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
        Follow a carefully designed route through Tarangire, the central and
        western Serengeti, Ngorongoro and Lake Manyara.
      </p>
    </div>

    {/* ============================================================
        ITINERARY TIMELINE
    ============================================================ */}
    <div className="mx-auto mt-14 max-w-6xl">

      {/* DAY 01 */}
      <div className="relative pb-8">

        {/* Timeline */}
        <div className="absolute left-7 top-16 hidden h-[calc(100%-16px)] w-px bg-[#0b4224]/15 lg:block" />

        <div className="grid gap-6 lg:grid-cols-[72px_1fr]">

          <div className="relative z-10 hidden lg:flex lg:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-lg font-bold text-white shadow-lg">
              01
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="grid lg:grid-cols-[42%_58%]">

              <div className="relative min-h-[340px]">

                <img
                  src="https://images.unsplash.com/photo-1607976587566-98f4c8f2d6a5?auto=format&fit=crop&w=1200&q=85"
                  alt="Arusha Tanzania"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                    Day 01
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Arrival
                  </p>

                  <h4 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white">
                    Arrival in Arusha
                  </h4>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                  Arrival in Arusha
                </h4>

                <div className="mt-5 space-y-4 leading-8 text-gray-600">
                  <p>
                    Touch down at Kilimanjaro International Airport, where a
                    friendly Daffar Tours and Travel representative will meet
                    and brief you on the days ahead.
                  </p>

                  <p>
                    Transfer to Arusha Explores Lodge to unwind, enjoy a
                    relaxed afternoon, and ease into safari life. As evening
                    falls, gather by the campfire before dinner and a restful
                    night.
                  </p>
                </div>

                <div className="mt-7 border-t border-gray-100 pt-6">

                  <div className="grid gap-5 sm:grid-cols-2">

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

      {/* DAY 02 */}
      <div className="relative pb-8">

        <div className="absolute left-7 top-16 hidden h-[calc(100%-16px)] w-px bg-[#0b4224]/15 lg:block" />

        <div className="grid gap-6 lg:grid-cols-[72px_1fr]">

          <div className="relative z-10 hidden lg:flex lg:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-lg font-bold text-white shadow-lg">
              02
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="grid lg:grid-cols-[42%_58%]">

              <div className="relative min-h-[340px]">

                <img
                  src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
                  alt="Elephant in Tarangire National Park"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                    Day 02
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Tarangire National Park
                  </p>

                  <h4 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white">
                    Elephants & Baobabs
                  </h4>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                  Tarangire National Park
                </h4>

                <div className="mt-5 space-y-4 leading-8 text-gray-600">
                  <p>
                    After breakfast, drive to Tarangire National Park, a
                    landscape of ancient baobabs and sweeping plains famed
                    for its large elephant herds.
                  </p>

                  <p>
                    Spend the day on game drives with a picnic lunch in the
                    park. Watch for lions, leopards, giraffes, buffalos,
                    wildebeest, zebras and prolific birdlife along the
                    Tarangire River. In the late afternoon, continue to
                    Karatu and settle in at your lodge.
                  </p>
                </div>

                <div className="mt-7 border-t border-gray-100 pt-6">

                  <div className="grid gap-5 sm:grid-cols-2">

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

      {/* DAY 03 */}
      <div className="relative pb-8">

        <div className="absolute left-7 top-16 hidden h-[calc(100%-16px)] w-px bg-[#0b4224]/15 lg:block" />

        <div className="grid gap-6 lg:grid-cols-[72px_1fr]">

          <div className="relative z-10 hidden lg:flex lg:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-lg font-bold text-white shadow-lg">
              03
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="grid lg:grid-cols-[42%_58%]">

              <div className="relative min-h-[340px]">

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
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Serengeti
                  </p>

                  <h4 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white">
                    Into the Serengeti
                  </h4>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                  Serengeti National Park
                </h4>

                <div className="mt-5 space-y-4 leading-8 text-gray-600">
                  <p>
                    Journey toward the Serengeti for classic savannah scenes
                    and exceptional wildlife encounters. Today's drives
                    explore the park's grasslands, riverlines and kopjes —
                    prime territory for big cats and plains game.
                  </p>

                  <p>
                    With luck, enjoy a bush-style breakfast in the wild and
                    sightings of lion prides, cheetah on the hunt and grazing
                    antelopes. Continue into the Serengeti for your overnight
                    stay.
                  </p>
                </div>

                <div className="mt-7 border-t border-gray-100 pt-6">

                  <div className="grid gap-5 sm:grid-cols-2">

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

      {/* DAY 04 */}
      <div className="relative pb-8">

        <div className="absolute left-7 top-16 hidden h-[calc(100%-16px)] w-px bg-[#0b4224]/15 lg:block" />

        <div className="grid gap-6 lg:grid-cols-[72px_1fr]">

          <div className="relative z-10 hidden lg:flex lg:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-lg font-bold text-white shadow-lg">
              04
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="grid lg:grid-cols-[42%_58%]">

              <div className="relative min-h-[340px]">

                <img
                  src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85"
                  alt="Lion in the Serengeti"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                    Day 04
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Central Serengeti
                  </p>

                  <h4 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white">
                    Into Big Cat Country
                  </h4>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                  Central Serengeti – Big Cat Country
                </h4>

                <div className="mt-5 space-y-4 leading-8 text-gray-600">
                  <p>
                    Check out after an early start and head deeper into the
                    Serengeti. Enjoy unhurried morning and afternoon game
                    drives across wildlife-rich valleys and open plains,
                    with the chance for a memorable bush breakfast en route.
                  </p>

                  <p>
                    As the light softens, set out on an evening drive when
                    predators become active. Later, arrive at your intimate
                    tented camp in the heart of the Serengeti.
                  </p>
                </div>

                <div className="mt-7 border-t border-gray-100 pt-6">

                  <div className="grid gap-5 sm:grid-cols-2">

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

      {/* DAY 05 */}
      <div className="relative pb-8">

        <div className="absolute left-7 top-16 hidden h-[calc(100%-16px)] w-px bg-[#0b4224]/15 lg:block" />

        <div className="grid gap-6 lg:grid-cols-[72px_1fr]">

          <div className="relative z-10 hidden lg:flex lg:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-lg font-bold text-white shadow-lg">
              05
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="grid lg:grid-cols-[42%_58%]">

              <div className="relative min-h-[340px]">

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
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Western Serengeti
                  </p>

                  <h4 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white">
                    Westward to Kirawira
                  </h4>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                  Serengeti – Westward to Kirawira
                </h4>

                <div className="mt-5 space-y-4 leading-8 text-gray-600">
                  <p>
                    Continue your Serengeti adventure as you move toward the
                    western corridor. Expect superb game viewing, from lion
                    and leopard tracking to open-plains encounters with
                    giraffe, buffalo and antelope.
                  </p>

                  <p>
                    With conditions permitting, a guided cheetah-tracking
                    experience may be possible. As evening approaches, an
                    atmospheric game drive leads you to camp for dinner,
                    a campfire and the sounds of the savannah at night.
                  </p>
                </div>

                <div className="mt-7 border-t border-gray-100 pt-6">

                  <div className="grid gap-5 sm:grid-cols-2">

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

      {/* DAY 06 */}
      <div className="relative pb-8">

        <div className="absolute left-7 top-16 hidden h-[calc(100%-16px)] w-px bg-[#0b4224]/15 lg:block" />

        <div className="grid gap-6 lg:grid-cols-[72px_1fr]">

          <div className="relative z-10 hidden lg:flex lg:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-lg font-bold text-white shadow-lg">
              06
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="grid lg:grid-cols-[42%_58%]">

              <div className="relative min-h-[340px]">

                <img
                  src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85"
                  alt="Wildebeest and wildlife in Tanzania"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082d19]">
                    Day 06
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Western Serengeti
                  </p>

                  <h4 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white">
                    Migration Viewing
                  </h4>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                  Western Serengeti – Migration Viewing
                </h4>

                <div className="mt-5 space-y-4 leading-8 text-gray-600">
                  <p>
                    Spend the day exploring the western Serengeti. When the
                    herds are in the area, this is a superb place to witness
                    vast columns of wildebeest and zebra on the move and to
                    look for action along the Grumeti River.
                  </p>

                  <p>
                    Between drives, soak in camp comforts, then return to the
                    plains for a golden-hour evening drive before dinner.
                  </p>
                </div>

                <div className="mt-7 border-t border-gray-100 pt-6">

                  <div className="grid gap-5 sm:grid-cols-2">

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

      {/* DAY 07 */}
      <div className="relative pb-8">

        <div className="absolute left-7 top-16 hidden h-[calc(100%-16px)] w-px bg-[#0b4224]/15 lg:block" />

        <div className="grid gap-6 lg:grid-cols-[72px_1fr]">

          <div className="relative z-10 hidden lg:flex lg:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082d19] font-serif text-lg font-bold text-white shadow-lg">
              07
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="grid lg:grid-cols-[42%_58%]">

              <div className="relative min-h-[340px]">

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
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Ngorongoro
                  </p>

                  <h4 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white">
                    Crater Rim Sundowners
                  </h4>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                  To Ngorongoro – Crater Rim Sundowners
                </h4>

                <div className="mt-5 space-y-4 leading-8 text-gray-600">
                  <p>
                    Depart the Serengeti with a final game drive en route.
                    Continue to the Ngorongoro Conservation Area where
                    dramatic views open across the world's largest intact
                    caldera.
                  </p>

                  <p>
                    An afternoon drive on the rim and surrounding highlands
                    reveals rich wildlife and sweeping scenery. Later,
                    check in to your lodge perched on the crater rim and
                    enjoy dinner.
                  </p>
                </div>

                <div className="mt-7 border-t border-gray-100 pt-6">

                  <div className="grid gap-5 sm:grid-cols-2">

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

      {/* DAY 08 */}
      <div className="relative">

        <div className="grid gap-6 lg:grid-cols-[72px_1fr]">

          <div className="relative z-10 hidden lg:flex lg:justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dba33a] font-serif text-lg font-bold text-[#082d19] shadow-lg">
              08
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#dba33a]/20 bg-white shadow-sm">

            <div className="grid lg:grid-cols-[42%_58%]">

              <div className="relative min-h-[340px]">

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
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Lake Manyara
                  </p>

                  <h4 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white">
                    Final Game Drive & Departure
                  </h4>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <h4 className="font-serif text-3xl font-semibold text-[#082d19]">
                  Lake Manyara & Departure
                </h4>

                <div className="mt-5 space-y-4 leading-8 text-gray-600">
                  <p>
                    Before your onward journey, descend into Lake Manyara
                    National Park for a final game drive.
                  </p>

                  <p>
                    This compact, diverse park is known for tree-climbing
                    lions, elephant encounters, thriving hippo pools and
                    prolific birdlife, including flamingos when conditions
                    allow. After lunch, transfer to Arusha Airport for your
                    flight and the end of a remarkable safari.
                  </p>
                </div>

                <div className="mt-7 border-t border-gray-100 pt-6">

                  <div className="grid gap-5 sm:grid-cols-2">

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

    </div>

    {/* ============================================================
        JOURNEY SNAPSHOT
    ============================================================ */}
    <div className="mx-auto mt-20 max-w-6xl">

      <div className="mb-8 text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b651e]">
          Journey Snapshot
        </span>

        <h3 className="mt-3 font-serif text-3xl font-semibold text-[#082d19] sm:text-4xl">
          Your route at a glance
        </h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

        {[
          ["Days 1–2", "Arusha & Tarangire"],
          ["Day 3", "Serengeti"],
          ["Day 4", "Central Serengeti"],
          ["Days 5–6", "Western Serengeti"],
          ["Days 7–8", "Ngorongoro & Manyara"],
        ].map(([day, destination]) => (
          <div
            key={day}
            className="rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              {day}
            </p>

            <p className="mt-3 font-serif text-lg font-semibold leading-snug text-[#082d19]">
              {destination}
            </p>
          </div>
        ))}

      </div>
    </div>

    {/* ============================================================
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-[#f7faf7] p-8 sm:p-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b651e]">
              Included
            </p>

            <h3 className="mt-1 font-serif text-3xl font-semibold text-[#082d19]">
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

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dba33a] text-xl text-[#082d19]">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8b651e]">
              Excluded
            </p>

            <h3 className="mt-1 font-serif text-3xl font-semibold text-[#082d19]">
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
        OPTIONAL EXPERIENCES
    ============================================================ */}
    <div className="mx-auto mt-8 max-w-6xl rounded-[2rem] border border-[#dba33a]/20 bg-[#fffaf0] p-8 sm:p-10">

      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b651e]">
            Optional Experiences
          </span>

          <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#082d19] sm:text-4xl">
            Add a little more
            <span className="text-[#dba33a]">
              {" "}luxury
            </span>
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Enhance your safari with relaxing spa and massage treatments
            available at selected properties along the journey.
          </p>

        </div>

        <div className="grid gap-3 sm:grid-cols-2">

          {[
            "Spa & Massage – Marera Valley Lodge",
            "Spa & Massage – Nimali Central Serengeti",
            "Spa & Massage – Kirawira Serena Camp",
            "Spa & Massage – Ngorongoro Serena Safari Lodge",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#dba33a]/20 bg-white p-5 shadow-sm"
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
    <div className="mx-auto mt-20 max-w-6xl overflow-hidden rounded-[2rem] bg-[#082d19]">

      <div className="relative">

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
              className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-4 text-sm font-bold text-[#082d19] transition duration-300 hover:-translate-y-1 hover:bg-[#e8b85a]"
            >
              Plan Your Safari
              <span className="ml-2">→</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Request a Quote
            </Link>

          </div>

        </div>
      </div>
    </div>

  </div>
</section>





{/* ============================================================
    8-DAY NDUTU CALVING SEASON SERENGETI MIGRATION
============================================================ */}
<section
  id="8-day-ndutu-calving-season-serengeti-migration"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ===================== BACKGROUND DECORATION ===================== */}
  <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#F5A623]/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#0b4224]/10 blur-[140px]" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#F5A623]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    {/* ===================== SECTION INTRO ===================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b87500]">
        Tanzania • Serengeti Migration
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        8-Day Ndutu Calving Season
        <span className="block text-[#0b4224]">
          Serengeti Migration
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        This eight-day safari is designed to immerse you in the Serengeti
        ecosystem at its most alive; from elephant-rich Tarangire to the vast
        central and western Serengeti and the wildlife-dense Ngorongoro Crater,
        finishing with Lake Manyara before departure. With comfortable lodges
        and classic tented camps, you’ll enjoy sweeping savannah views,
        memorable game drives, and the chance to witness predator action and
        seasonal movements of wildebeest and zebra.
      </p>
    </div>

    {/* ===================== QUICK FACTS ===================== */}
    <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "8 Days / 7 Nights",
        },
        {
          label: "Main Region",
          value: "Northern & Western Tanzania",
        },
        {
          label: "Safari Focus",
          value: "Ndutu & Migration",
        },
        {
          label: "Experience",
          value: "Wildlife & Big Cats",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#0b4224]/10 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
            {item.label}
          </p>

          <p className="mt-2 font-serif text-lg font-bold text-[#082D19]">
            {item.value}
          </p>
        </div>
      ))}
    </div>

    {/* ===================== THE JOURNEY ===================== */}
    <div className="mx-auto mt-24 max-w-4xl text-center">

      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
        The Journey
      </span>

      <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
        Eight Days of Extraordinary Wildlife
      </h3>

      <p className="mt-5 text-base leading-8 text-slate-600">
        Follow an unforgettable route through Tanzania’s northern safari
        circuit, from Tarangire and the Serengeti to the Ngorongoro Highlands
        and Lake Manyara.
      </p>
    </div>

    {/* ===================== ITINERARY TIMELINE ===================== */}
    <div className="relative mx-auto mt-14 max-w-5xl">

      {/* Timeline Line */}
      <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-[#0b4224]/15 md:block md:left-7" />

      <div className="space-y-8">

        {/* ===================== DAY 1 ===================== */}
        <article className="relative md:pl-20">

          {/* Number */}
          <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-lg font-bold text-[#f5c45d] shadow-md md:flex">
            01
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

            <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                Day 1
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                Arrival in Arusha
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-slate-600">
                Touch down at Kilimanjaro International Airport, where a
                friendly Daffar Tours and Travel representative will meet and
                brief you on the days ahead. Transfer to Arusha Explores Lodge
                to unwind, enjoy a relaxed afternoon, and ease into safari
                life. As evening falls, gather by the campfire before dinner
                and a restful night.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Arusha Explores Lodge
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals & Drinks
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Lunch & Dinner
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

        {/* ===================== DAY 2 ===================== */}
        <article className="relative md:pl-20">

          <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-lg font-bold text-[#f5c45d] shadow-md md:flex">
            02
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

            <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                Day 2
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                Tarangire National Park
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-slate-600">
                After breakfast, drive to Tarangire National Park, a landscape
                of ancient baobabs and sweeping plains famed for its large
                elephant herds. Spend the day on game drives with a picnic
                lunch in the park. Watch for lions, leopards, giraffes,
                buffalos, wildebeest, zebras, and prolific birdlife along the
                Tarangire River. In the late afternoon, continue to Karatu and
                settle in at your lodge.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Marera Valley Lodge
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals & Drinks
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

        {/* ===================== DAY 3 ===================== */}
        <article className="relative md:pl-20">

          <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-lg font-bold text-[#f5c45d] shadow-md md:flex">
            03
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

            <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                Day 3
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                Serengeti National Park
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-slate-600">
                Journey toward the Serengeti for classic savannah scenes and
                exceptional wildlife encounters. Today’s drives explore the
                park’s grasslands, riverlines, and kopjes; prime territory for
                big cats and plains game. With luck you may enjoy a bush-style
                breakfast in the wild and sightings of lion prides, cheetah on
                the hunt, and grazing antelopes. Return to Karatu for dinner
                and an overnight stay.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Marera Valley Lodge
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals & Drinks
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

        {/* ===================== DAY 4 ===================== */}
        <article className="relative md:pl-20">

          <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-lg font-bold text-[#f5c45d] shadow-md md:flex">
            04
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

            <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                Day 4
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                Central Serengeti – Into Big Cat Country
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-slate-600">
                Check out after an early start and head deep into the Serengeti.
                Enjoy unhurried morning and afternoon game drives across
                wildlife-rich valleys and open plains, with the chance for a
                memorable bush breakfast en route. As the light softens, set
                out on an evening drive when predators become active. Later,
                arrive at your intimate tented camp in the heart of the
                Serengeti.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Nimali Central Serengeti
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals & Drinks
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

        {/* ===================== DAY 5 ===================== */}
        <article className="relative md:pl-20">

          <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-lg font-bold text-[#f5c45d] shadow-md md:flex">
            05
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

            <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                Day 5
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                Serengeti – Westward to Kirawira
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-slate-600">
                Continue your Serengeti adventure as you move toward the
                western corridor. Expect superb game viewing, from lion and
                leopard tracking to open-plains encounters with giraffe,
                buffalo, and antelope. With conditions permitting, a guided
                cheetah-tracking experience may be possible. As evening
                approaches, an atmospheric game drive leads you to camp for
                dinner, a campfire, and the sounds of the savannah at night.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Kirawira Serena Camp
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals & Drinks
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

        {/* ===================== DAY 6 ===================== */}
        <article className="relative md:pl-20">

          <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-lg font-bold text-[#f5c45d] shadow-md md:flex">
            06
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

            <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                Day 6
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                Western Serengeti – Migration Viewing
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-slate-600">
                Spend the day exploring the western Serengeti. When the herds
                are in the area, this is a superb place to witness vast columns
                of wildebeest and zebra on the move and to look for action
                along the Grumeti River. Between drives, soak in camp comforts,
                then return to the plains for a golden-hour evening drive
                before dinner.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Kirawira Serena Camp
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals & Drinks
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

        {/* ===================== DAY 7 ===================== */}
        <article className="relative md:pl-20">

          <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-lg font-bold text-[#f5c45d] shadow-md md:flex">
            07
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

            <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                Day 7
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                To Ngorongoro – Crater Rim Sundowners
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-slate-600">
                Depart the Serengeti with a final game drive en route. Continue
                to the Ngorongoro Conservation Area where dramatic views open
                up across the world’s largest intact caldera. An afternoon
                drive on the rim and surrounding highlands reveals rich
                wildlife and sweeping scenery. Later, check in to your lodge
                perched on the crater rim and enjoy dinner.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Ngorongoro Serena Safari Lodge
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    On the crater rim
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals & Drinks
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

        {/* ===================== DAY 8 ===================== */}
        <article className="relative md:pl-20">

          <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-lg font-bold text-[#f5c45d] shadow-md md:flex">
            08
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

            <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                Day 8
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                Lake Manyara & Departure
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-slate-600">
                Before your onward journey, descend into Lake Manyara National
                Park for a final game drive. This compact, diverse park is
                known for tree-climbing lions, elephant encounters, thriving
                hippo pools, and prolific birdlife including flamingos when
                conditions allow. After lunch, transfer to Arusha Airport for
                your flight and the end of a remarkable safari.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Departure Day
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    No overnight accommodation
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meals & Drinks
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast & Lunch
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Drinking water included
                  </p>
                </div>

              </div>
            </div>
          </div>
        </article>

      </div>
    </div>

    {/* ============================================================
        INCLUDED / EXCLUDED / OPTIONAL
    ============================================================ */}
    <div className="mx-auto mt-24 max-w-6xl">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Safari Information
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          What’s Included & Excluded
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          Everything you need to know about what is covered during your
          eight-day Tanzania safari.
        </p>

      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">

        {/* ===================== INCLUDED ===================== */}
        <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-8">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-xl text-[#f5c45d]">
              ✓
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Included
              </p>

              <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                Your Safari Covers
              </h4>
            </div>

          </div>

          <ul className="mt-7 space-y-4">

            {[
              "Park fees",
              "All activities unless indicated as optional",
              "All accommodations",
              "All transportation unless labeled as optional",
              "Professional guide",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}

          </ul>
        </div>

        {/* ===================== EXCLUDED ===================== */}
        <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-8">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082D19] text-xl text-[#f5c45d]">
              ×
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Excluded
              </p>

              <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                Not Included
              </h4>
            </div>

          </div>

          <ul className="mt-7 space-y-4">

            {[
              "Tips (guideline: US$10.00 per person per day)",
              "International flights",
              "Taxes / VAT",
              "Personal items such as souvenirs",
              "Travel insurance and visa fees",
              "Additional accommodation before and at the end of the tour",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/10 text-xs font-bold text-[#b87500]">
                  ×
                </span>

                <span>{item}</span>
              </li>
            ))}

          </ul>
        </div>

        {/* ===================== OPTIONAL ===================== */}
        <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-8">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5A623]/15 text-xl text-[#b87500]">
              +
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Optional
              </p>

              <h4 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
                Add-On Experiences
              </h4>
            </div>

          </div>

          <ul className="mt-7 space-y-4">

            {[
              "Spa & Massage – Marera Valley Lodge (Day 2)",
              "Spa & Massage – Nimali Central Serengeti (Day 4)",
              "Spa & Massage – Kirawira Serena Camp (Day 5)",
              "Spa & Massage – Ngorongoro Serena Safari Lodge (Day 7)",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/10 text-xs font-bold text-[#b87500]">
                  +
                </span>

                <span>{item}</span>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </div>

    {/* ===================== CTA ===================== */}
    <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#082D19] px-6 py-12 text-center shadow-xl sm:px-10 sm:py-14">

      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
        Start Your Safari
      </span>

      <h3 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
        Experience Tanzania During the Migration Season
      </h3>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
        From the sweeping Serengeti plains to the wildlife-rich Ngorongoro
        Crater, let Daffar Tours and Travel create an unforgettable safari
        around your travel plans.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f5c45d]"
        >
          Start Planning
          <span aria-hidden="true">→</span>
        </a>

        <a
          href="/safaris"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          Explore More Safaris
        </a>

      </div>
    </div>

  </div>
</section>

{/* ============================================================
    8-DAY NDUTU CALVING SEASON SERENGETI MIGRATION
============================================================ */}




{/* ============================================================
    7-DAY SAFARI ADVENTURE THROUGH THE WESTERN WILDEBEEST
    MIGRATION ROUTE
============================================================ */}

{/* ============================================================
    7-DAY SAFARI ADVENTURE THROUGH THE WESTERN WILDEBEEST
    MIGRATION ROUTE
============================================================ */}
{/* ============================================================
    7-DAY WESTERN WILDEBEEST MIGRATION SAFARI
============================================================ */}
{/* ============================================================
    7-DAY WESTERN WILDEBEEST MIGRATION SAFARI
============================================================ */}
<section
  id="7-day-western-wildebeest-migration-safari"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[140px]" />
  <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0b4224]/10 blur-[140px]" />

  <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b97800]">
        Tanzania • Western Corridor
      </span>

      <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#082D19] sm:text-4xl lg:text-5xl">
        7-Day Safari Adventure Through the Western Wildebeest Migration Route
      </h2>

      <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
        Experience the Wild Wonders of the Serengeti's Western Corridor.
        Your adventure begins in one of the most dramatic sections of the
        Serengeti ecosystem: the Western Corridor, defined by the Grumeti and
        Mbalageti Rivers. This region supports a rich and permanent wildlife
        population, including iconic predators, vast herds of wildebeest and
        zebra, and a vibrant array of bird species.
      </p>

      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
        Between May and July, the annual migration moves through here,
        gathering at the riverbanks before making the treacherous crossing
        through crocodile-infested waters.
      </p>
    </div>


    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Duration */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-6 text-center shadow-sm">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
          Duration
        </span>

        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          7 Days / 6 Nights
        </p>
      </div>

      {/* Destination */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-6 text-center shadow-sm">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
          Destination
        </span>

        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Tanzania
        </p>
      </div>

      {/* Safari Focus */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-6 text-center shadow-sm">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
          Safari Focus
        </span>

        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Wildebeest Migration
        </p>
      </div>

      {/* Experience */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-6 text-center shadow-sm">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
          Experience
        </span>

        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Wildlife & Adventure
        </p>
      </div>

    </div>


    {/* ============================================================
        JOURNEY INTRO
    ============================================================ */}
    <div className="mx-auto mt-20 max-w-3xl text-center">

      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
        The Journey
      </span>

      <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
        Seven Days Into the Wild
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        From the peaceful surroundings of Arusha to the dramatic Western
        Corridor of the Serengeti, this journey combines iconic landscapes,
        rich wildlife encounters, and the seasonal spectacle of the Great
        Migration.
      </p>
    </div>


    {/* ============================================================
        ITINERARY TIMELINE
    ============================================================ */}
    <div className="relative mt-12 space-y-8">

      {/* Timeline Line */}
      <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-[#0b4224]/15 sm:left-7 md:block" />


      {/* ========================================================
          DAY 1
      ======================================================== */}
      <article className="relative md:pl-20">

        <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] font-serif text-lg font-bold text-[#082D19] shadow-md md:flex">
          01
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Day 1
            </span>

            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              Welcome to Arusha
            </h3>
          </div>

          <div className="p-6 sm:p-8">

            <p className="leading-8 text-slate-600">
              Upon arrival at the airport, a representative from Daffar Tours
              and Travel will warmly receive you and escort you to your
              accommodation in Arusha. This evening is yours to relax, settle
              in, and look forward to the thrilling safari days ahead.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Accommodation
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  Arusha Planet Lodge
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Meals
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  At own expense
                </p>
              </div>

            </div>
          </div>
        </div>
      </article>


      {/* ========================================================
          DAY 2
      ======================================================== */}
      <article className="relative md:pl-20">

        <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] font-serif text-lg font-bold text-[#082D19] shadow-md md:flex">
          02
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Day 2
            </span>

            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              Arusha to Tarangire National Park
            </h3>
          </div>

          <div className="p-6 sm:p-8">

            <p className="leading-8 text-slate-600">
              After breakfast, your private safari guide will collect you for
              the scenic drive to Tarangire National Park. Along the way,
              you’ll travel through the picturesque Masai plains dotted with
              acacia trees. Watch as the vibrant local culture comes to life
              with Maasai people dressed in bright traditional attire, children
              herding cattle, and locals navigating the roadside on bicycles or
              donkey carts. Tarangire is famed for its dense elephant
              population, but also teems with a wide variety of wildlife. As
              your safari vehicle navigates through swamps, savannahs, and the
              life-giving Tarangire River, keep your eyes peeled for zebra,
              buffalo, wildebeest, giraffes, and possibly even a stealthy lion
              or a leopard lounging in the treetops. Following a day of
              thrilling wildlife encounters, you’ll head to your lodge for a
              delicious dinner and rest in comfort, drifting to sleep with the
              distant calls of the wild echoing through the night.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Accommodation
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  Eileen’s Tree Inn
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Meals
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  All meals included (drinks not included)
                </p>
              </div>

            </div>
          </div>
        </div>
      </article>


      {/* ========================================================
          DAY 3
      ======================================================== */}
      <article className="relative md:pl-20">

        <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] font-serif text-lg font-bold text-[#082D19] shadow-md md:flex">
          03
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Day 3
            </span>

            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              Serengeti National Park (Central)
            </h3>
          </div>

          <div className="p-6 sm:p-8">

            <p className="leading-8 text-slate-600">
              After enjoying breakfast, we begin our journey through the lush
              highlands where the Iraqw community cultivates wheat, coffee, and
              maize. Our route takes us through the scenic Ngorongoro
              Conservation Area, offering a chance to admire the spectacular
              view of the Ngorongoro Crater; one of East Africa’s most iconic
              landmarks. By midday, we enter the heart of Tanzania’s most
              famous wildlife reserve, the Serengeti National Park.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Spanning roughly 15,000 square kilometers, the park is a mosaic
              of diverse habitats, including grasslands, wetlands, lakes,
              savannahs, and rolling hills. This region plays a central role in
              the annual migration of wildebeest, zebras, and antelope.
              Depending on the season, we may witness large herds as they move
              in search of fresh grazing and water sources. We’ll enjoy a
              thrilling game drive before heading to the Seronera Valley,
              where we’ll have dinner and spend the night at a well-appointed
              safari lodge.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Accommodation
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  Nyota Luxury Camp
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Meals
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  All meals are provided (drinks not included)
                </p>
              </div>

            </div>
          </div>
        </div>
      </article>


      {/* ========================================================
          DAY 4
      ======================================================== */}
      <article className="relative md:pl-20">

        <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] font-serif text-lg font-bold text-[#082D19] shadow-md md:flex">
          04
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Day 4
            </span>

            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              Serengeti Western Corridor
            </h3>
          </div>

          <div className="p-6 sm:p-8">

            <p className="leading-8 text-slate-600">
              Following breakfast, we set off for the Serengeti’s western
              reaches, a drive of roughly one and a half hours. This area
              becomes especially vibrant from late April through June, when the
              Great Migration sweeps through. During this time, massive groups
              of wildebeest are joined by zebra, gazelle, and eland as they
              navigate this corridor south of the Grumeti River.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Keep your eyes peeled for predators: leopards, hyenas, and
              massive Nile crocodiles that lurk near the riverbanks, waiting
              for their moment as the herds brave the risky crossing. The sight
              of these migrations, set against vast open skies and endless
              plains, evokes a deep connection to the wild and a humbling
              perspective on nature’s rhythm. After our wildlife experience, we
              make our way to your next lodge where you’ll unwind, enjoy
              dinner, and spend the night immersed in the serene wilderness.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Accommodation
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  Mbalageti Serengeti
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Meals
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  All meals are provided (drinks not included)
                </p>
              </div>

            </div>
          </div>
        </div>
      </article>


      {/* ========================================================
          DAY 5
      ======================================================== */}
      <article className="relative md:pl-20">

        <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] font-serif text-lg font-bold text-[#082D19] shadow-md md:flex">
          05
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Day 5
            </span>

            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              Serengeti Central
            </h3>
          </div>

          <div className="p-6 sm:p-8">

            <p className="leading-8 text-slate-600">
              This day is dedicated entirely to exploring the vast landscapes
              of the Western Serengeti through immersive game drives. Later in
              the afternoon, the journey continues into the heart of the
              Central Serengeti. This region teems with wildlife, from impalas
              and buffalo to crocodiles and hippos. However, it’s most renowned
              for the spectacular seasonal migration of massive herds of zebra,
              antelope, and wildebeest.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Their movements are guided by rainfall patterns, shifting each
              year. Typically, during November and December, the animals begin
              moving south from the woodland-rich north. Between April and
              June, as the rains fall in the north, they migrate back. Alongside
              these great migrations, you may also encounter some of Africa’s
              most iconic predators: lions, leopards, and cheetahs playing
              their role in the ecosystem’s balance.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              After an exciting day in the wild, you'll retire to your lodge
              for a satisfying dinner. The evening ends around a campfire
              beneath the breathtaking African night sky, often called the
              ‘Endless Plain’ for its vast, starlit beauty.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Accommodation
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  Nyota Luxury Camp
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Meals
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  All meals are provided (drinks not included)
                </p>
              </div>

            </div>
          </div>
        </div>
      </article>


      {/* ========================================================
          DAY 6
      ======================================================== */}
      <article className="relative md:pl-20">

        <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] font-serif text-lg font-bold text-[#082D19] shadow-md md:flex">
          06
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Day 6
            </span>

            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              Serengeti to Ngorongoro Crater
            </h3>
          </div>

          <div className="p-6 sm:p-8">

            <p className="leading-8 text-slate-600">
              After breakfast, your adventure continues with a drive from
              Serengeti National Park to the awe-inspiring Ngorongoro Crater.
              First impressions of the Crater are unforgettable; it appears as
              an untouched, hidden world enclosed by steep volcanic walls.
              Within this natural amphitheater lies a diverse landscape of
              open savannah, scattered acacia trees, sparkling lakes, and
              swampy areas.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This incredible site formed when a massive volcano erupted and
              collapsed inward, creating the crater approximately 2 to 3
              million years ago. Descending into the Crater is an adventure on
              its own. Once at the floor, you'll be surrounded by thriving
              wildlife including herds of wildebeest, zebras, gazelles, and a
              remarkable array of over 500 bird species. The Crater is also one
              of the rare places where you might catch a glimpse of the
              endangered black rhino, often seen grazing in the open
              grasslands.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Following a rewarding afternoon of wildlife viewing, you’ll head
              to Karatu for a warm dinner and an overnight stay.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Accommodation
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  Arusha Planet Lodge
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Meals
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  At own expense
                </p>
              </div>

            </div>
          </div>
        </div>
      </article>


      {/* ========================================================
          DAY 7
      ======================================================== */}
      <article className="relative md:pl-20">

        <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] font-serif text-lg font-bold text-[#082D19] shadow-md md:flex">
          07
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Day 7
            </span>

            <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              Lake Manyara National Park to Arusha
            </h3>
          </div>

          <div className="p-6 sm:p-8">

            <p className="leading-8 text-slate-600">
              Following breakfast, the journey continues to our final safari
              stop - the stunning Lake Manyara National Park, located about 120
              kilometers west of Arusha. Despite its modest size, the park is
              famed for the large alkaline lake that spans nearly 70% of its
              total area. Depending on the season, the lake's waters expand and
              recede, drawing in vast flocks of flamingos and a wide variety of
              other birdlife.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              As we explore the park, expect sightings of giraffes, monkeys,
              elephants, zebras, wildebeests, buffalos, and, with some luck,
              lions perched in the trees. Lake Manyara is celebrated for its
              scenic variety — from lush woodlands and grassy plains to cliffs
              dotted with ancient baobab trees.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              After soaking in one last incredible wildlife experience, we’ll
              make our way back to Arusha in the late afternoon, our minds
              filled with unforgettable images of Africa’s raw and majestic
              beauty.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Accommodation
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  —
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Safari ends in Arusha
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7faf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5A623]">
                  Meals
                </p>

                <p className="mt-2 font-semibold text-[#082D19]">
                  Not specified
                </p>
              </div>

            </div>
          </div>
        </div>
      </article>

    </div>


    {/* ============================================================
        INCLUDED / EXCLUDED / OPTIONAL
    ============================================================ */}
    <div className="mt-20 grid gap-6 lg:grid-cols-3">

      {/* ========================================================
          INCLUDED
      ======================================================== */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-8">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b4224] text-lg font-bold text-[#F5A623]">
            ✓
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Safari Package
            </span>

            <h3 className="font-serif text-2xl font-bold text-[#082D19]">
              Included
            </h3>
          </div>

        </div>

        <ul className="mt-7 space-y-4">

          {[
            "Park fees (For non-residents)",
            "All activities (Unless labeled as optional)",
            "All accommodation (Unless listed as upgrade)",
            "A professional driver/guide",
            "All transportation (Unless labeled as optional)",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals (As specified in the day-by-day section)",
            "Drinks (As specified in the day-by-day section)",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-6 text-slate-600"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/15 text-xs font-bold text-[#b97800]">
                ✓
              </span>

              <span>{item}</span>
            </li>
          ))}

        </ul>
      </div>


      {/* ========================================================
          EXCLUDED
      ======================================================== */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-8">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#082D19] text-lg font-bold text-[#F5A623]">
            ×
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Please Budget Separately
            </span>

            <h3 className="font-serif text-2xl font-bold text-[#082D19]">
              Excluded
            </h3>
          </div>

        </div>

        <ul className="mt-7 space-y-4">

          {[
            "International flights (From/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips (Tipping guideline US$15.00 pp per day)",
            "Personal items (Souvenirs, travel insurance, visa fees, etc.)",
            "Government imposed increase of taxes and/or park fees",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-6 text-slate-600"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#082D19]/10 text-xs font-bold text-[#082D19]">
                ×
              </span>

              <span>{item}</span>
            </li>
          ))}

        </ul>
      </div>


      {/* ========================================================
          OPTIONAL ACTIVITIES
      ======================================================== */}
      <div className="rounded-[2rem] border border-[#F5A623]/20 bg-[#fffdf7] p-7 shadow-sm sm:p-8">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5A623] text-lg font-bold text-[#082D19]">
            +
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Enhance Your Safari
            </span>

            <h3 className="font-serif text-2xl font-bold text-[#082D19]">
              Optional Activities
            </h3>
          </div>

        </div>

        <ul className="mt-7 space-y-4">

          {[
            ["Balloon Safari", "USD 500 per person"],
            ["Maasai Village Visit", "USD 50 per vehicle"],
            ["Night Game Drive Tarangire or Lake Manyara", "USD 120 per person"],
            ["Ngorongoro Crater Rim Walk", "USD 30 per person"],
            ["Visit to the Olduvai Gorge and museum", "USD 40 per person"],
          ].map(([activity, price], index) => (
            <li
              key={index}
              className="rounded-2xl bg-white p-4 ring-1 ring-[#0b4224]/5"
            >
              <p className="font-semibold leading-6 text-[#082D19]">
                {activity}
              </p>

              <p className="mt-1 text-sm font-bold text-[#b97800]">
                {price}
              </p>
            </li>
          ))}

        </ul>
      </div>

    </div>


    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#082D19] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12 lg:px-12">

      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

        <div className="max-w-3xl">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Plan Your Safari
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Ready to Experience the Western Wildebeest Migration?
          </h3>

          <p className="mt-4 max-w-2xl leading-7 text-white/75">
            Let Daffar Tours and Travel tailor this unforgettable Tanzania
            safari around your preferred travel dates, accommodation style,
            and wildlife interests.
          </p>

        </div>

        <a
          href="/contact"
          className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f5c45d] hover:shadow-lg"
        >
          Start Planning

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>

      </div>
    </div>

  </div>
</section>

{/* ============================================================
    7-DAY MASAI MARA, NAKURU, NAIVASHA & AMBOSELI LUXURY
============================================================ */}
<section
  id="7-day-masai-mara-nakuru-naivasha-amboseli"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#F5A623]/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#0D4825]/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    {/* ========================================================
        HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0D4825]">
        7 Days • Kenya Luxury Safari
      </span>

      <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-[#082D19] sm:text-4xl lg:text-5xl">
        Masai Mara, Nakuru, Naivasha & Amboseli
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an unforgettable luxury safari through Kenya's most iconic
        landscapes, combining exceptional wildlife viewing, scenic lakes,
        dramatic savannahs and breathtaking views of Mount Kilimanjaro.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🗓️",
          title: "Duration",
          value: "7 Days",
        },
        {
          icon: "📍",
          title: "Destinations",
          value: "4 Iconic Areas",
        },
        {
          icon: "🚙",
          title: "Transport",
          value: "Private 4×4",
        },
        {
          icon: "⭐",
          title: "Travel Style",
          value: "Luxury",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-xl">
              {item.icon}
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {item.title}
              </p>
              <p className="mt-1 font-semibold text-[#082D19]">
                {item.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ========================================================
        SAFARI OVERVIEW
    ======================================================== */}
    <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#082D19] shadow-2xl">

      <div className="grid lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">

          <img
            src={serengeti1}
            alt="African safari landscape"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/80 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-flex rounded-full bg-[#F5A623] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082D19]">
              Luxury Kenya Safari
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Safari Experience
          </p>

          <h3 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            From the Mara to the Foot of Kilimanjaro
          </h3>

          <p className="mt-6 leading-8 text-white/70">
            This carefully designed seven-day journey takes you through some
            of Kenya's finest wildlife destinations. Discover the legendary
            Masai Mara, explore the bird-rich landscapes of Lake Nakuru,
            enjoy the tranquil beauty of Lake Naivasha and finish beneath the
            magnificent Mount Kilimanjaro in Amboseli.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            {[
              "Private safari experience",
              "Luxury accommodation",
              "Expert safari guide",
              "Exceptional wildlife viewing",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5A623] text-[#082D19]">
                  ✓
                </span>
                {item}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY SAFARI
    ======================================================== */}
    <div className="mt-20">

      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Your Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Day-by-Day Safari
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          A carefully paced itinerary designed to combine wildlife,
          landscapes and unforgettable luxury experiences.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative mt-14">

        {/* CENTER LINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#F5A623]/30 lg:left-1/2 lg:block" />

        {/* DAY 1 */}
        <div className="relative mb-12 lg:grid lg:grid-cols-2 lg:gap-12">

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
            <div className="relative h-64 overflow-hidden">
              <img
                src={serengeti1}
                alt="Safari wildlife experience"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                Day 01
              </div>
            </div>

            <div className="p-7">
              <h4 className="font-serif text-2xl font-bold text-[#082D19]">
                Nairobi → Masai Mara
              </h4>

              <p className="mt-4 leading-7 text-gray-600">
                Depart Nairobi and travel towards the world-famous Masai Mara.
                Arrive in time to settle into your luxury accommodation and
                begin your safari adventure with an afternoon wildlife
                experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                  Masai Mara
                </span>
                <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                  Luxury Stay
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* DAY 2 */}
        <div className="relative mb-12 lg:grid lg:grid-cols-2 lg:gap-12">

          <div className="lg:col-start-2 overflow-hidden rounded-[2rem] bg-white shadow-lg">

            <div className="relative h-64 overflow-hidden">
              <img
                src={serengeti2}
                alt="African wildlife safari"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                Day 02
              </div>
            </div>

            <div className="p-7">
              <h4 className="font-serif text-2xl font-bold text-[#082D19]">
                Full-Day Masai Mara Safari
              </h4>

              <p className="mt-4 leading-7 text-gray-600">
                Spend a full day exploring the Masai Mara's spectacular
                wilderness. Enjoy extended game viewing across the open
                savannah in search of lions, elephants, buffalo, cheetahs and
                other iconic African wildlife.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                  Full-Day Game Drive
                </span>
                <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                  Masai Mara
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DAY 3 */}
        <div className="relative mb-12 lg:grid lg:grid-cols-2 lg:gap-12">

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">

            <div className="relative h-64 overflow-hidden">
              <img
                src={serengeti3}
                alt="Serengeti inspired safari landscape"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                Day 03
              </div>
            </div>

            <div className="p-7">
              <h4 className="font-serif text-2xl font-bold text-[#082D19]">
                Masai Mara → Lake Nakuru
              </h4>

              <p className="mt-4 leading-7 text-gray-600">
                Leave the Mara behind and continue towards Lake Nakuru.
                Explore the beautiful surroundings and enjoy an opportunity
                to discover the park's diverse wildlife and birdlife.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                  Lake Nakuru
                </span>
                <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                  Wildlife
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DAY 4 */}
        <div className="relative mb-12 lg:grid lg:grid-cols-2 lg:gap-12">

          <div className="lg:col-start-2 rounded-[2rem] bg-white p-8 shadow-lg">

            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623]/15 font-bold text-[#0D4825]">
                04
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                  Day Four
                </p>

                <h4 className="font-serif text-2xl font-bold text-[#082D19]">
                  Lake Nakuru → Lake Naivasha
                </h4>
              </div>
            </div>

            <p className="leading-7 text-gray-600">
              Continue to the scenic Lake Naivasha region. Enjoy the peaceful
              surroundings and take in the contrasting landscapes that make
              Kenya's Great Rift Valley so remarkable.
            </p>
          </div>
        </div>

        {/* DAY 5 */}
        <div className="relative mb-12 lg:grid lg:grid-cols-2 lg:gap-12">

          <div className="rounded-[2rem] bg-white p-8 shadow-lg">

            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623]/15 font-bold text-[#0D4825]">
                05
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                  Day Five
                </p>

                <h4 className="font-serif text-2xl font-bold text-[#082D19]">
                  Naivasha → Amboseli
                </h4>
              </div>
            </div>

            <p className="leading-7 text-gray-600">
              Travel south towards Amboseli National Park, one of Kenya's
              most spectacular wildlife destinations. Arrive beneath the
              dramatic backdrop of Mount Kilimanjaro.
            </p>
          </div>
        </div>

        {/* DAY 6 */}
        <div className="relative mb-12 lg:grid lg:grid-cols-2 lg:gap-12">

          <div className="lg:col-start-2 overflow-hidden rounded-[2rem] bg-white shadow-lg">

            <div className="relative h-64 overflow-hidden">
              <img
                src={serengeti1}
                alt="African safari scenery"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                Day 06
              </div>
            </div>

            <div className="p-7">

              <h4 className="font-serif text-2xl font-bold text-[#082D19]">
                Full-Day Amboseli Safari
              </h4>

              <p className="mt-4 leading-7 text-gray-600">
                Enjoy a full day exploring Amboseli's open plains. Experience
                outstanding wildlife viewing while enjoying some of the most
                iconic views of Mount Kilimanjaro in Africa.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                  Amboseli
                </span>

                <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                  Kilimanjaro Views
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DAY 7 */}
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-12">

          <div className="rounded-[2rem] bg-white p-8 shadow-lg">

            <div className="mb-5 flex items-center gap-4">

              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623]/15 font-bold text-[#0D4825]">
                07
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                  Day Seven
                </p>

                <h4 className="font-serif text-2xl font-bold text-[#082D19]">
                  Amboseli → Nairobi
                </h4>
              </div>

            </div>

            <p className="leading-7 text-gray-600">
              Enjoy your final safari moments before departing Amboseli and
              travelling back to Nairobi, bringing your unforgettable Kenyan
              safari adventure to an end.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ========================================================
        SAFARI HIGHLIGHTS
    ======================================================== */}
    <div className="mt-20">

      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Why This Safari
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Safari Highlights
        </h3>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Masai Mara",
            text: "Exceptional wildlife viewing across Kenya's legendary savannah.",
            icon: "🦁",
          },
          {
            title: "Lake Nakuru",
            text: "Beautiful landscapes and diverse wildlife in the Rift Valley.",
            icon: "🦩",
          },
          {
            title: "Lake Naivasha",
            text: "A peaceful freshwater destination surrounded by dramatic scenery.",
            icon: "🌿",
          },
          {
            title: "Amboseli",
            text: "Iconic wildlife experiences beneath Mount Kilimanjaro.",
            icon: "🐘",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group rounded-[1.75rem] border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-2xl transition group-hover:scale-110">
              {item.icon}
            </div>

            <h4 className="mt-6 font-serif text-xl font-bold text-[#082D19]">
              {item.title}
            </h4>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {item.text}
            </p>
          </div>
        ))}

      </div>
    </div>

    {/* ========================================================
        CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-12 text-center shadow-2xl sm:px-10 lg:px-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F5A623]/20 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />

      <div className="relative">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Start Your Adventure
        </span>

        <h3 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-bold text-white sm:text-4xl">
          Ready to Experience Kenya?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
          Let our safari specialists create a private journey tailored to
          your travel style, interests and budget.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition hover:-translate-y-1 hover:bg-[#f5c45d]"
          >
            Start Planning
            <span>→</span>
          </a>

          <a
            href="https://wa.me/254745861688"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
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
    10-DAY GREAT WILDEBEEST MIGRATION
    MARA RIVER CROSSING & SERENGETI MIGRATION
============================================================ */}
<section
  id="10-day-great-wildebeest-migration"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ==========================================================
      BACKGROUND DECORATION
  ========================================================== */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#F5A623]/10 blur-[130px]" />
  <div className="pointer-events-none absolute -right-40 top-[45%] h-[500px] w-[500px] rounded-full bg-[#0D4825]/10 blur-[140px]" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#F5A623]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    {/* ========================================================
        HERO / INTRO
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0D4825]">
        10 Days • Tanzania Migration Safari
      </span>

      <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-[#082D19] sm:text-4xl lg:text-5xl">
        Great Wildebeest Migration
        <span className="block text-[#F5A623]">
          Mara River Crossing & Serengeti
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        This unforgettable journey is crafted to immerse you in one of
        nature's most spectacular events: the Great Migration. With four
        nights in the Serengeti, you'll have ample opportunity to witness
        thousands of animals sweeping across the vast northern plains from
        August through October, offering a front-row seat to the pulse of
        the wild.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🗓️",
          title: "Duration",
          value: "10 Days",
        },
        {
          icon: "🐃",
          title: "Main Experience",
          value: "Great Migration",
        },
        {
          icon: "📍",
          title: "Countries",
          value: "Tanzania",
        },
        {
          icon: "⭐",
          title: "Travel Style",
          value: "Private Safari",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-xl">
              {item.icon}
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {item.title}
              </p>

              <p className="mt-1 font-semibold text-[#082D19]">
                {item.value}
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>

    {/* ========================================================
        MAIN SAFARI HIGHLIGHT
    ======================================================== */}
    <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#082D19] shadow-2xl">

      <div className="grid lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative min-h-[380px] overflow-hidden lg:min-h-[540px]">

          <img
            src={mara1}
            alt="Masai Mara Great Wildebeest Migration"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/90 via-[#082D19]/20 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7">

            <span className="inline-flex rounded-full bg-[#F5A623] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#082D19]">
              August – October
            </span>

            <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
              Follow the Great Migration
            </h3>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            The Ultimate Migration Experience
          </p>

          <h3 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            From Serengeti Plains to the Mara River
          </h3>

          <p className="mt-6 leading-8 text-white/70">
            Follow the migration through Tanzania's extraordinary wilderness,
            from Tarangire National Park into the Serengeti and onward to the
            Northern Serengeti, where the dramatic Mara River crossing may
            unfold.
          </p>

          <p className="mt-4 leading-8 text-white/70">
            The journey continues to the Ngorongoro Crater and Lake Manyara,
            creating an exceptional combination of migration viewing,
            landscapes and diverse wildlife experiences.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            {[
              "Private safari guide",
              "Migration-focused itinerary",
              "Northern Serengeti",
              "Mara River experience",
              "Ngorongoro Crater",
              "Lake Manyara",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F5A623] text-sm font-bold text-[#082D19]">
                  ✓
                </span>

                {item}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

    {/* ========================================================
        MIGRATION SEASON BANNER
    ======================================================== */}
    <div className="mt-10 rounded-[2rem] border border-[#F5A623]/20 bg-[#F5A623]/10 p-7 sm:p-9">

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div className="flex items-start gap-5">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F5A623] text-2xl">
            🐃
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D4825]">
              Migration Season
            </p>

            <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
              August to October
            </h3>

            <p className="mt-2 max-w-3xl leading-7 text-gray-600">
              Northern Serengeti offers the opportunity to witness dramatic
              river-crossing scenes as wildebeest and zebra move toward fresh
              grazing areas.
            </p>
          </div>

        </div>

        <div className="shrink-0">
          <span className="inline-flex rounded-full bg-[#082D19] px-5 py-3 text-sm font-bold text-white">
            Best Migration Period
          </span>
        </div>

      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY
    ======================================================== */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Your Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          10-Day Safari Itinerary
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Follow the journey from Arusha through Tarangire and the Serengeti,
          into the Northern Serengeti migration zone and onward to Ngorongoro
          and Lake Manyara.
        </p>

      </div>

      {/* ======================================================
          DAY 1
      ====================================================== */}
      <div className="relative mt-14 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">

          <div className="relative h-64 overflow-hidden">

            <img
              src={mara1}
              alt="Tanzania safari arrival"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              Day 01
            </div>

          </div>

          <div className="p-7">

            <h4 className="font-serif text-2xl font-bold text-[#082D19]">
              Arrival in Arusha
            </h4>

            <p className="mt-4 leading-7 text-gray-600">
              Upon landing at the airport, a friendly representative from
              Daffar Tours and Travel will welcome you and transfer you to
              your hotel. Settle in, relax and prepare for the safari ahead.
            </p>

            <div className="mt-6 space-y-2 text-sm">

              <p>
                <span className="font-bold text-[#082D19]">
                  Accommodation:
                </span>{" "}
                Arusha Planet Lodge
              </p>

              <p>
                <span className="font-bold text-[#082D19]">
                  Meals & Drinks:
                </span>{" "}
                At your own cost
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          DAY 2
      ====================================================== */}
      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="lg:col-start-2 overflow-hidden rounded-[2rem] bg-white shadow-lg">

          <div className="relative h-64 overflow-hidden">

            <img
              src={mara2}
              alt="Tarangire National Park safari"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              Day 02
            </div>

          </div>

          <div className="p-7">

            <h4 className="font-serif text-2xl font-bold text-[#082D19]">
              Journey to Tarangire National Park
            </h4>

            <p className="mt-4 leading-7 text-gray-600">
              After breakfast, your private safari guide will collect you from
              your accommodation in Arusha for a scenic journey to Tarangire
              National Park. Enjoy game viewing among elephants, giraffes,
              zebras, wildebeest, buffalo and other wildlife.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              After the game drive, continue to your lodge for a relaxing
              evening and overnight stay.
            </p>

            <div className="mt-6 space-y-2 text-sm">

              <p>
                <span className="font-bold text-[#082D19]">
                  Accommodation:
                </span>{" "}
                Eileen's Tree Inn
              </p>

              <p>
                <span className="font-bold text-[#082D19]">
                  Meals & Drinks:
                </span>{" "}
                All meals provided; drinks at an extra charge
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          DAY 3
      ====================================================== */}
      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">

          <div className="relative h-64 overflow-hidden">

            <img
              src={mara3}
              alt="Serengeti National Park safari"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              Day 03
            </div>

          </div>

          <div className="p-7">

            <h4 className="font-serif text-2xl font-bold text-[#082D19]">
              Exploring Central Serengeti
            </h4>

            <p className="mt-4 leading-7 text-gray-600">
              Continue towards the Serengeti through the highlands and
              Ngorongoro Conservation Area. Pass through misty forests and
              enjoy views of the Ngorongoro Crater before continuing into the
              vast Serengeti ecosystem.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Arrive around midday and enjoy a rewarding game drive across the
              expansive grasslands, woodlands, swamps and rolling hills.
            </p>

            <div className="mt-6 space-y-2 text-sm">

              <p>
                <span className="font-bold text-[#082D19]">
                  Accommodation:
                </span>{" "}
                Embalakai Serengeti Camp
              </p>

              <p>
                <span className="font-bold text-[#082D19]">
                  Meals & Drinks:
                </span>{" "}
                All meals provided; drinks at additional cost
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          DAY 4
      ====================================================== */}
      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="lg:col-start-2 rounded-[2rem] bg-white p-8 shadow-lg">

          <div className="flex items-start gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F5A623]/15 font-bold text-[#0D4825]">
              04
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
                Northern Serengeti
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
                Following the Migration
              </h4>

            </div>
          </div>

          <p className="mt-6 leading-7 text-gray-600">
            Drive north from Seronera towards Northern Serengeti. This remote
            region is characterized by tranquil landscapes, rivers, hills and
            distinctive kopjes. During the migration season, you may have the
            opportunity to witness dramatic Mara River crossings.
          </p>

          <div className="mt-6 space-y-2 text-sm">

            <p>
              <span className="font-bold text-[#082D19]">
                Season:
              </span>{" "}
              August to October
            </p>

            <p>
              <span className="font-bold text-[#082D19]">
                Accommodation:
              </span>{" "}
              Mara Heritage Camp
            </p>

            <p>
              <span className="font-bold text-[#082D19]">
                Meals & Drinks:
              </span>{" "}
              All meals included; beverages not included
            </p>

          </div>

        </div>
      </div>

      {/* ======================================================
          DAY 5
      ====================================================== */}
      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">

          <div className="relative h-64 overflow-hidden">

            <img
              src={mara1}
              alt="Mara River migration experience"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              Day 05
            </div>

          </div>

          <div className="p-7">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
              Migration Highlight
            </p>

            <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
              Northern Serengeti – Mara River Experience
            </h4>

            <p className="mt-4 leading-7 text-gray-600">
              Following an early breakfast, head deep into Northern Serengeti
              for a full-day game drive. If conditions and migration movements
              align, you may witness the spectacular Mara River crossing.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Experience the anticipation as wildebeest gather along the
              riverbanks and navigate the powerful currents while predators
              wait nearby.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                August – October
              </span>

              <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                Mara River
              </span>

              <span className="rounded-full bg-[#F7F4EA] px-4 py-2 text-xs font-semibold text-[#0D4825]">
                Migration
              </span>

            </div>

            <div className="mt-6 space-y-2 text-sm">

              <p>
                <span className="font-bold text-[#082D19]">
                  Accommodation:
                </span>{" "}
                Mara Heritage Camp
              </p>

              <p>
                <span className="font-bold text-[#082D19]">
                  Meals & Drinks:
                </span>{" "}
                All meals included; beverages not included
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          DAY 6
      ====================================================== */}
      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="lg:col-start-2 overflow-hidden rounded-[2rem] bg-white shadow-lg">

          <div className="relative h-64 overflow-hidden">

            <img
              src={mara2}
              alt="Central Serengeti wildlife"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              Day 06
            </div>

          </div>

          <div className="p-7">

            <h4 className="font-serif text-2xl font-bold text-[#082D19]">
              Return to Central Serengeti
            </h4>

            <p className="mt-4 leading-7 text-gray-600">
              After breakfast, return towards the Seronera region. Continue
              exploring the central Serengeti where migratory herds share the
              ecosystem with lions, leopards, cheetahs and other predators.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              End the day relaxing around the fireside beneath the starlit
              African sky.
            </p>

            <div className="mt-6 space-y-2 text-sm">

              <p>
                <span className="font-bold text-[#082D19]">
                  Accommodation:
                </span>{" "}
                Embalakai Serengeti Camp
              </p>

              <p>
                <span className="font-bold text-[#082D19]">
                  Meals & Drinks:
                </span>{" "}
                All meals provided; drinks excluded
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          DAY 7
      ====================================================== */}
      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">

          <div className="relative h-64 overflow-hidden">

            <img
              src={mara3}
              alt="Serengeti to Ngorongoro safari"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              Day 07
            </div>

          </div>

          <div className="p-7">

            <h4 className="font-serif text-2xl font-bold text-[#082D19]">
              Serengeti → Ngorongoro Crater
            </h4>

            <p className="mt-4 leading-7 text-gray-600">
              Enjoy another game drive through the Serengeti before making
              your way towards the Ngorongoro Crater. Arrive at the crater rim
              and take in spectacular views of the landscape below.
            </p>

            <div className="mt-6 space-y-2 text-sm">

              <p>
                <span className="font-bold text-[#082D19]">
                  Accommodation:
                </span>{" "}
                Rhino Lodge
              </p>

              <p>
                <span className="font-bold text-[#082D19]">
                  Meals & Drinks:
                </span>{" "}
                All meals included; drinks not included
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          DAY 8
      ====================================================== */}
      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="lg:col-start-2 rounded-[2rem] bg-white p-8 shadow-lg">

          <div className="flex items-start gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F5A623]/15 font-bold text-[#0D4825]">
              08
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
                Wildlife Experience
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
                Ngorongoro Crater
              </h4>

            </div>
          </div>

          <p className="mt-6 leading-7 text-gray-600">
            Before sunrise, descend into the Ngorongoro Crater for a full day
            of wildlife viewing. Explore this remarkable natural ecosystem
            and enjoy opportunities to see the Big Five, wildebeest, gazelle,
            reedbuck and abundant birdlife.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Around midday, enjoy a picnic near the hippo pool before climbing
            out of the crater and continuing to the peaceful town of Karatu.
          </p>

          <div className="mt-6 space-y-2 text-sm">

            <p>
              <span className="font-bold text-[#082D19]">
                Accommodation:
              </span>{" "}
              Eileen's Tree Inn
            </p>

            <p>
              <span className="font-bold text-[#082D19]">
                Meals & Drinks:
              </span>{" "}
              All meals included; drinks not included
            </p>

          </div>

        </div>
      </div>

      {/* ======================================================
          DAY 9
      ====================================================== */}
      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">

          <div className="relative h-64 overflow-hidden">

            <img
              src={mara1}
              alt="Lake Manyara National Park safari"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-[#082D19] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              Day 09
            </div>

          </div>

          <div className="p-7">

            <h4 className="font-serif text-2xl font-bold text-[#082D19]">
              Lake Manyara National Park → Arusha
            </h4>

            <p className="mt-4 leading-7 text-gray-600">
              After breakfast, travel to Lake Manyara National Park for the
              final wildlife experience of the safari. Explore its diverse
              landscapes, from open grassy plains and woodlands to baobab
              dotted cliffs and the seasonal lake.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              After lunch, continue back to Arusha, arriving in the late
              afternoon.
            </p>

            <div className="mt-6 space-y-2 text-sm">

              <p>
                <span className="font-bold text-[#082D19]">
                  Accommodation:
                </span>{" "}
                Arusha Planet Lodge
              </p>

              <p>
                <span className="font-bold text-[#082D19]">
                  Meals & Drinks:
                </span>{" "}
                Breakfast & Lunch; drinks not included
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          DAY 10
      ====================================================== */}
      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-12">

        <div className="lg:col-start-2 rounded-[2rem] bg-white p-8 shadow-lg">

          <div className="flex items-start gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F5A623]/15 font-bold text-[#0D4825]">
              10
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
                Departure
              </p>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19]">
                Onward Travel
              </h4>

            </div>
          </div>

          <p className="mt-6 leading-7 text-gray-600">
            You will be collected from your accommodation by a Daffar Tours
            and Travel representative and transferred to the airport for
            your onward journey.
          </p>

        </div>
      </div>
    </div>

    {/* ========================================================
        INCLUDED / EXCLUDED
    ======================================================== */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] bg-[#082D19] p-8 shadow-xl sm:p-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-[#082D19]">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
              What's Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-white">
              Safari Inclusions
            </h3>
          </div>

        </div>

        <div className="mt-8 space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless labeled optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver/guide",
            "All transportation unless labeled optional",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-sm text-white/80"
            >
              <span className="mt-0.5 text-[#F5A623]">✓</span>
              <span>{item}</span>
            </div>
          ))}

        </div>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl sm:p-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-xl text-[#082D19]">
            +
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
              What's Not Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Safari Exclusions
            </h3>
          </div>

        </div>

        <div className="mt-8 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips – guideline US$15 per person per day",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-sm text-gray-600"
            >
              <span className="mt-0.5 text-[#F5A623]">•</span>
              <span>{item}</span>
            </div>
          ))}

        </div>
      </div>
    </div>

    {/* ========================================================
        OPTIONAL ACTIVITIES
    ======================================================== */}
    <div className="mt-12 rounded-[2rem] border border-[#F5A623]/20 bg-[#F7F4EA] p-8 sm:p-10">

      <div className="text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Enhance Your Safari
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19]">
          Optional Safari Activities
        </h3>

      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {[
          {
            title: "Balloon Safari",
            price: "USD 500 per person",
          },
          {
            title: "Maasai Village Visit",
            price: "USD 50 per vehicle",
          },
          {
            title: "Night Game Drive",
            price: "USD 120 per person",
          },
          {
            title: "Ngorongoro Crater Rim Walk",
            price: "USD 30 per person",
          },
          {
            title: "Olduvai Gorge & Museum",
            price: "USD 40 per person",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <h4 className="font-semibold text-[#082D19]">
              {item.title}
            </h4>

            <p className="mt-2 text-sm font-bold text-[#F5A623]">
              {item.price}
            </p>

          </div>
        ))}

      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-14 text-center shadow-2xl sm:px-10 lg:px-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F5A623]/20 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-[90px]" />

      <div className="relative">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Experience the Migration
        </span>

        <h3 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
          Witness One of Nature's Greatest Wildlife Spectacles
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
          Travel with Daffar Tours and Travel and experience the Serengeti,
          Northern Serengeti and Mara River migration in an unforgettable
          private safari.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f5c45d]"
          >
            Start Planning
            <span>→</span>
          </a>

          <a
            href="https://wa.me/254745861688"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20"
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

      {/* =====================================================
          MARA LANDSCAPE
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-28 bg-[#F7F4EA]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Experience The Mara
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">

              A Landscape Made For

              <span className="text-[#F39A08]">
                {" "}Safari
              </span>

            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Follow the rhythm of the wilderness across open plains,
              river valleys and golden grasslands filled with life.
            </p>

          </div>


          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-6">

            {/* MARA 3 */}

            <div className="group relative h-[420px] lg:h-[600px] overflow-hidden rounded-[2rem] shadow-xl">

              <img
                src={mara3}
                alt="Maasai Mara landscape"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <span className="text-[#F39A08] text-xs font-bold uppercase tracking-[0.2em]">
                  Endless Savannah
                </span>

                <h3 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-white">
                  A Landscape Made For Adventure
                </h3>

              </div>

            </div>


            {/* CONTENT */}

            <div className="flex flex-col justify-center bg-[#0D4825] rounded-[2rem] p-8 sm:p-10 lg:p-12">

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                The Mara Experience
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">

                Every Moment

                <span className="block text-[#F39A08]">
                  Tells A Story
                </span>

              </h2>

              <p className="mt-6 text-white/65 leading-relaxed">
                A safari in the Mara is about more than simply
                seeing animals. It is about waking up to the sounds
                of the wilderness, following fresh tracks and
                watching the landscape change with the light.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex gap-3">

                  <span className="text-[#F39A08]">
                    ✓
                  </span>

                  <p className="text-white/70 text-sm">
                    Spectacular savannah landscapes
                  </p>

                </div>

                <div className="flex gap-3">

                  <span className="text-[#F39A08]">
                    ✓
                  </span>

                  <p className="text-white/70 text-sm">
                    Exceptional wildlife encounters
                  </p>

                </div>

                <div className="flex gap-3">

                  <span className="text-[#F39A08]">
                    ✓
                  </span>

                  <p className="text-white/70 text-sm">
                    Memorable sunrise and sunset experiences
                  </p>

                </div>

              </div>

              <Link
                to="/contact"
                className="inline-flex self-start mt-8 bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
              >
                Plan Your Safari
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY VISIT
      ====================================================== */}

     


      {/* =====================================================
          SAFARI PLANNING
      ====================================================== */}


      {/* =====================================================
          IMAGE GALLERY
      ====================================================== */}

      {/* =====================================================
          TRAVEL TIPS
      ====================================================== */}

      <section className="bg-[#0D4825] py-16 sm:py-20 lg:py-24">

        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Before You Travel
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">

              Prepare For Your

              <span className="text-[#F39A08]">
                {" "}Mara Adventure
              </span>

            </h2>

            <p className="mt-5 text-white/65 leading-relaxed">
              A little preparation can make your safari more comfortable,
              enjoyable and memorable.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                ☀
              </span>

              <h3 className="mt-4 text-white font-bold">
                Early Starts
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                Morning game drives offer beautiful light and excellent opportunities for wildlife viewing.
              </p>

            </div>


            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                📷
              </span>

              <h3 className="mt-4 text-white font-bold">
                Bring Your Camera
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                Keep your camera ready because remarkable wildlife moments can happen at any time.
              </p>

            </div>


            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                👟
              </span>

              <h3 className="mt-4 text-white font-bold">
                Dress Comfortably
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                Comfortable clothing and suitable footwear help you enjoy long days exploring the reserve.
              </p>

            </div>


            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                🌍
              </span>

              <h3 className="mt-4 text-white font-bold">
                Travel Responsibly
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                Respect wildlife, local communities and the natural environment throughout your journey.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      
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
                        Kenya and TZ • East Africa
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