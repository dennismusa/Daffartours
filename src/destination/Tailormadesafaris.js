/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import serengeti1 from "../assets/serengeti1.jpg";
import tailormade1 from "../assets/tailormade1.jpg";
import tailormade2 from "../assets/tailormade2.jpg";
import serengeti2 from "../assets/serengeti2.jpg";
import serengeti3 from "../assets/serengeti3.jpg";
import mara1 from "../assets/mara1.jpg";
import mara2 from "../assets/mara2.jpg";
import mara3 from "../assets/mara3.jpg";
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
    src={tailormade2}
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
          Tailormade Safari Itineraries
        </span>
      </div>

      {/* TITLE */}
      

    </div>
  </div>
</section>
{/* ============================================================
      01 — TAILOR-MADE SAFARIS
  ============================================================ */}
  <section
    id="tailor-made-safaris"
    className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

        {/* IMAGE */}
        <div className="group relative">
          <div className="absolute -left-5 -top-5 hidden h-32 w-32 rounded-full border border-[#B87916]/20 lg:block" />

          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={tailormade1}
              alt="Tailor-made safari in Africa"                   
              className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
              <div className="rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
                  Your Journey
                </p>
                <p className="mt-1 font-serif text-2xl text-white">
                  Crafted around you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B87916]">
            — Tailor-Made Safaris
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#082D19] sm:text-5xl">
            Crafted Just
            <span className="block italic text-[#B87916]">
              for You
            </span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            At Daffar Tours and Travel, we believe your safari should reflect
            you; your interests, pace, and vision of the perfect African journey.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Our Tailor-Made Safaris are designed to bring that vision to life,
            whether it is a romantic escape, a family adventure, a luxury
            retreat, or a specialist trip for photography or birdwatching.
            Working closely with our experienced safari planners, you create an
            itinerary that is as unique as your dreams.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            We handpick destinations, lodges, and experiences that match your
            style — from private game drives and cultural encounters to sunrise
            balloon rides over the Maasai Mara or sundowner cocktails in the bush.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Private game drives",
              "Handpicked lodges",
              "Flexible itineraries",
              "Local hidden gems",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-[#F8F6F1] px-4 py-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#082D19] text-sm text-[#F5A623]">
                  ✓
                </span>
                <span className="text-sm font-medium text-[#082D19]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-[#F5A623] pl-5 font-serif text-xl italic leading-8 text-[#082D19]">
            The freedom is yours. Explore the wild at your own pace and shape
            each day around what excites you most.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            With Daffar Tours and Travel, every Tailor-Made Safari is more than
            a trip; it is a deeply personal experience, crafted with care and
            delivered with genuine East African warmth.
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
    4-DAY MASAI MARA & LAKE NAKURU LUXURY EXPERIENCE
============================================================ */}

<section
  id="4-day-masai-mara-lake-nakuru-luxury"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#F5A623]/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#0D4825]/10 blur-[140px]" />
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5C45D]/5 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0D4825]">
        <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
        4 Days / 3 Nights
      </div>

      <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082D19] sm:text-4xl lg:text-5xl">
        4-Day Masai Mara & Lake Nakuru
        <span className="block text-[#F39A08]">
          Luxury Experience
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an unforgettable four-day luxury safari through two of
        Kenya's most renowned wildlife destinations. Discover the spectacular
        savannahs of the Masai Mara, famous for exceptional wildlife and
        predators, before continuing to Lake Nakuru National Park, home to
        rhinos, diverse wildlife and beautiful landscapes.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Duration */}
      <div className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0D4825]/10 text-2xl transition group-hover:scale-110">
          🗓️
        </div>

        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Duration
        </p>

        <h3 className="mt-1 text-xl font-black text-[#082D19]">
          4 Days / 3 Nights
        </h3>
      </div>

      {/* Destinations */}
      <div className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623]/15 text-2xl transition group-hover:scale-110">
          🦁
        </div>

        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Destinations
        </p>

        <h3 className="mt-1 text-xl font-black text-[#082D19]">
          2 Wildlife Parks
        </h3>
      </div>

      {/* Safari Style */}
      <div className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0D4825]/10 text-2xl transition group-hover:scale-110">
          ✨
        </div>

        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Safari Style
        </p>

        <h3 className="mt-1 text-xl font-black text-[#082D19]">
          Luxury Safari
        </h3>
      </div>

      {/* Wildlife */}
      <div className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623]/15 text-2xl transition group-hover:scale-110">
          🦏
        </div>

        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Wildlife
        </p>

        <h3 className="mt-1 text-xl font-black text-[#082D19]">
          Big Cats & Rhinos
        </h3>
      </div>
    </div>

    {/* ============================================================
        FEATURED SAFARI CARD
    ============================================================ */}
    <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#082D19] shadow-2xl">

      <div className="grid lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative min-h-[380px] overflow-hidden lg:min-h-[500px]">

          <img
            src={mara3}
            alt="Cheetah in the Masai Mara"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/80 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-flex rounded-full bg-[#F5A623] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#082D19]">
              Masai Mara National Reserve
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Two Iconic Wildlife Destinations
          </p>

          <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
            From the predator-rich Mara to the rhino country of Nakuru
          </h3>

          <p className="mt-6 leading-8 text-white/70">
            Begin your journey in the legendary Masai Mara, where vast
            grasslands provide an exceptional setting for game drives and
            wildlife encounters. Continue to Lake Nakuru for another
            unforgettable safari experience surrounded by rhinos, birdlife
            and scenic landscapes.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Stay
              </p>
              <p className="mt-1 font-semibold text-white">
                Amani Mara Camp
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Stay
              </p>
              <p className="mt-1 font-semibold text-white">
                Sarova Lion Hill Game Lodge
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* ============================================================
        DAY-BY-DAY
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0D4825]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0D4825]">
          <span>✦</span>
          Your Journey
        </div>

        <h3 className="text-3xl font-black text-[#082D19] sm:text-4xl">
          Day-by-Day Safari
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Four carefully planned days combining excellent wildlife viewing,
          comfortable accommodation and the highlights of Kenya's famous
          safari destinations.
        </p>
      </div>

      {/* ============================================================
          DAY 1
      ============================================================ */}
      <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg lg:grid-cols-2">

        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
          <img
            src={mara1}
            alt="Masai Mara safari"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute left-5 top-5 rounded-full bg-[#F5A623] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#082D19]">
            Day 01
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#082D19]/80 to-transparent" />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F5A623]">
            Nairobi → Masai Mara
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#082D19] sm:text-3xl">
            Nairobi – Masai Mara National Reserve
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            Your safari begins in Nairobi, where you will be picked up by a
            representative from Daffar Tours and Travel and driven to the
            Masai Mara National Reserve. Upon arrival, check in to your
            accommodation and enjoy lunch.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Later in the afternoon, embark on your first game drive across
            the reserve. Look out for lions, elephants, buffaloes, giraffes,
            zebras, wildebeest, cheetahs and other wildlife before returning
            to camp for dinner and relaxation.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">

            <div className="rounded-2xl bg-[#f7faf7] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Accommodation
              </p>
              <p className="mt-1 font-bold text-[#082D19]">
                Amani Mara Camp
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Meals
              </p>
              <p className="mt-1 font-bold text-[#082D19]">
                Lunch & Dinner
              </p>
            </div>

          </div>

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#0D4825]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D4825]/10">
              ✓
            </span>
            Drinking water provided
          </div>
        </div>
      </div>

      {/* ============================================================
          DAY 2
      ============================================================ */}
      <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg lg:grid-cols-2">

        <div className="relative min-h-[300px] overflow-hidden lg:order-2 lg:min-h-[430px]">
          <img
            src={mara3}
            alt="Cheetah in Masai Mara National Reserve"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute left-5 top-5 rounded-full bg-[#F5A623] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#082D19]">
            Day 02
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#082D19]/80 to-transparent" />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F5A623]">
            Full-Day Game Drive
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#082D19] sm:text-3xl">
            Full Day Masai Mara National Reserve
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            After breakfast, spend the full day exploring the Masai Mara on
            game drives. Search for some of Africa's most iconic wildlife,
            including lions, leopards, cheetahs, elephants, buffaloes,
            giraffes, zebras, wildebeest, hippos and various antelope species.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Depending on the season, you may also have the opportunity to
            witness the Great Wildebeest Migration and dramatic river
            crossings. Enjoy lunch during the day before continuing your
            exploration through the reserve.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">

            <div className="rounded-2xl bg-[#f7faf7] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Accommodation
              </p>
              <p className="mt-1 font-bold text-[#082D19]">
                Amani Mara Camp
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Meals
              </p>
              <p className="mt-1 font-bold text-[#082D19]">
                Breakfast, Lunch & Dinner
              </p>
            </div>

          </div>

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#0D4825]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D4825]/10">
              ✓
            </span>
            Drinking water provided
          </div>
        </div>
      </div>

      {/* ============================================================
          DAY 3
      ============================================================ */}
      <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg lg:grid-cols-2">

        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
          <img
            src="https://cdn.trailfinders.com/spwwxckucq_tf67117_1500x1500.jpg?width=1500"
            alt="White rhinos at Lake Nakuru National Park"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute left-5 top-5 rounded-full bg-[#F5A623] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#082D19]">
            Day 03
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#082D19]/80 to-transparent" />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F5A623]">
            Mara → Nakuru
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#082D19] sm:text-3xl">
            Masai Mara – Lake Nakuru National Park
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            After breakfast, depart the Masai Mara and drive towards Lake
            Nakuru National Park. Upon arrival, enjoy lunch before embarking
            on an afternoon game drive.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Lake Nakuru is particularly renowned for its rhino population.
            During your game drive, look out for black and white rhinos,
            lions, leopards, buffaloes, giraffes, zebras, waterbucks,
            baboons and a variety of bird species around the lake.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">

            <div className="rounded-2xl bg-[#f7faf7] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Accommodation
              </p>
              <p className="mt-1 font-bold text-[#082D19]">
                Sarova Lion Hill Game Lodge
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Meals
              </p>
              <p className="mt-1 font-bold text-[#082D19]">
                Breakfast, Lunch & Dinner
              </p>
            </div>

          </div>

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#0D4825]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D4825]/10">
              ✓
            </span>
            Drinking water provided
          </div>
        </div>
      </div>

      {/* ============================================================
          DAY 4
      ============================================================ */}
      <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg lg:grid-cols-2">

        <div className="relative min-h-[300px] overflow-hidden lg:order-2 lg:min-h-[430px]">
          <img
            src="https://cdn.trailfinders.com/spwwxckucq_tf67117_1500x1500.jpg?width=1500"
            alt="Lake Nakuru rhino safari"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute left-5 top-5 rounded-full bg-[#F5A623] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#082D19]">
            Day 04
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#082D19]/80 to-transparent" />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F5A623]">
            Lake Nakuru → Nairobi
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#082D19] sm:text-3xl">
            Lake Nakuru National Park – Nairobi
          </h4>

          <p className="mt-5 leading-8 text-gray-600">
            After breakfast, enjoy a final game drive in Lake Nakuru National
            Park, giving you another opportunity to search for rhinos,
            buffaloes, giraffes, zebras, lions and other wildlife.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            After the game drive, depart for Nairobi and enjoy lunch along
            the way. Upon arrival in Nairobi, you will be dropped off at your
            hotel, residence or another agreed location, marking the end of
            your safari.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">

            <div className="rounded-2xl bg-[#f7faf7] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Accommodation
              </p>
              <p className="mt-1 font-bold text-[#082D19]">
                No Accommodation
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7faf7] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Meals
              </p>
              <p className="mt-1 font-bold text-[#082D19]">
                Breakfast & Lunch
              </p>
            </div>

          </div>

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#0D4825]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D4825]/10">
              ✓
            </span>
            Drinking water provided
          </div>
        </div>
      </div>
    </div>

    {/* ============================================================
        SAFARI HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20">

      <div className="text-center">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0D4825]">
          <span>✦</span>
          Safari Highlights
        </div>

        <h3 className="text-3xl font-black text-[#082D19] sm:text-4xl">
          What Makes This Safari Special
        </h3>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* Highlight 1 */}
        <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

          <div className="mb-5 text-4xl transition duration-500 group-hover:scale-110">
            🦁
          </div>

          <h4 className="text-xl font-black text-[#082D19]">
            Big Cats
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Search for lions, leopards and cheetahs across the open plains
            of the Masai Mara.
          </p>
        </div>

        {/* Highlight 2 */}
        <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

          <div className="mb-5 text-4xl transition duration-500 group-hover:scale-110">
            🦏
          </div>

          <h4 className="text-xl font-black text-[#082D19]">
            Rhino Country
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Explore Lake Nakuru National Park, renowned for its black and
            white rhino population.
          </p>
        </div>

        {/* Highlight 3 */}
        <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

          <div className="mb-5 text-4xl transition duration-500 group-hover:scale-110">
            🦓
          </div>

          <h4 className="text-xl font-black text-[#082D19]">
            Diverse Wildlife
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Encounter elephants, buffaloes, giraffes, zebras, wildebeest,
            hippos and many other species.
          </p>
        </div>

        {/* Highlight 4 */}
        <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

          <div className="mb-5 text-4xl transition duration-500 group-hover:scale-110">
            📸
          </div>

          <h4 className="text-xl font-black text-[#082D19]">
            Scenic Landscapes
          </h4>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Enjoy spectacular savannah scenery, lakeside landscapes and
            memorable wildlife photography opportunities.
          </p>
        </div>
      </div>
    </div>

    {/* ============================================================
        INCLUSIONS & EXCLUSIONS
    ============================================================ */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] bg-[#082D19] p-8 sm:p-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-[#082D19]">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
              Included
            </p>

            <h3 className="mt-1 text-2xl font-black text-white">
              What's Included
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver / guide",
            "All transportation",
            "All Taxes / VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-sm leading-6 text-white/80"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5A623] text-xs font-black text-[#082D19]">
                ✓
              </span>

              <span>{item}</span>
            </div>
          ))}

        </div>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm sm:p-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-xl text-red-500">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-red-500">
              Excluded
            </p>

            <h3 className="mt-1 text-2xl font-black text-[#082D19]">
              What's Not Included
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-4">

          {[
            "International flights from / to home",
            "Additional accommodation before and after the tour",
            "Tips — guideline: US$10–15 per person per day",
            "Personal items, souvenirs, travel insurance and visa fees",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-sm leading-6 text-gray-600"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-black text-red-500">
                ×
              </span>

              <span>{item}</span>
            </div>
          ))}

        </div>

        {/* OPTIONAL ACTIVITIES */}
        <div className="mt-8 rounded-2xl bg-[#f7faf7] p-5">

          <p className="text-xs font-black uppercase tracking-wider text-[#F39A08]">
            Optional Safari Activities
          </p>

          <div className="mt-4 space-y-3">

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#082D19]">
                Balloon Safari
              </span>

              <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-black text-[#082D19]">
                USD 500 / person
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#082D19]">
                Maasai Village Visit
              </span>

              <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-black text-[#082D19]">
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
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-12 text-center shadow-2xl sm:px-12 sm:py-16">

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative">

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623] text-2xl">
          🐾
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Your Kenyan Safari Awaits
        </p>

        <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
          Ready to Explore the Wild?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Let Daffar Tours and Travel create an unforgettable luxury safari
          through the Masai Mara and Lake Nakuru, tailored around your travel
          plans and preferences.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-black text-[#082D19] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#F5C45D] hover:shadow-xl"
          >
            Start Planning
            <span className="text-lg">→</span>
          </a>

          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
            <span className="text-lg">↗</span>
          </a>

        </div>
      </div>
    </div>

  </div>
</section>





{/* ============================================================
    7-DAY MASAI MARA, NAKURU, NAIVASHA & AMBOSELI LUXURY SAFARI
============================================================ */}
<section
  id="7-day-masai-mara-nakuru-naivasha-amboseli-luxury"
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
        7-Day Masai Mara, Nakuru,
        <span className="block text-[#0b4224]">
          Naivasha & Amboseli Luxury Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an exciting seven-day luxury safari through four of
        Kenya's most remarkable destinations. Explore the wildlife-rich
        Masai Mara, discover the scenic beauty of Lake Nakuru, relax beside
        Lake Naivasha and finish your journey in Amboseli with spectacular
        views of Mount Kilimanjaro.
      </p>

      <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
        Enjoy exceptional wildlife viewing opportunities, diverse landscapes
        and carefully selected accommodation throughout this unforgettable
        Kenyan safari adventure.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Duration */}
      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Duration
        </p>

        <p className="mt-2 text-lg font-black text-[#092d1a]">
          7 Days / 6 Nights
        </p>
      </div>

      {/* Destinations */}
      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Destinations
        </p>

        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Mara • Nakuru • Naivasha • Amboseli
        </p>
      </div>

      {/* Style */}
      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Safari Style
        </p>

        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Luxury
        </p>
      </div>

      {/* Highlights */}
      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Signature Experience
        </p>

        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Wildlife & Kilimanjaro
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
            src={mara1}
            alt="Masai Mara National Reserve safari"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#092d1a]/90 via-black/20 to-black/5" />

          <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">

            <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0b4224]">
              Four Iconic Destinations
            </span>

            <h3 className="mt-4 max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl">
              From the Mara Plains to Mount Kilimanjaro
            </h3>

          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            The Kenya Safari Experience
          </p>

          <p className="mt-5 text-base leading-8 text-white/75">
            This seven-day journey combines four of Kenya's most spectacular
            destinations into one carefully designed luxury safari. Begin in
            the Masai Mara, continue to the rhino-rich landscapes of Lake
            Nakuru, relax beside Lake Naivasha and finish among the elephants
            of Amboseli beneath the iconic Mount Kilimanjaro.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            {[
              "Masai Mara wildlife",
              "Rhino viewing at Nakuru",
              "Scenic Lake Naivasha",
              "Amboseli & Kilimanjaro",
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
          Seven days of wildlife, landscapes and unforgettable experiences
          across Kenya's most celebrated safari destinations.
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
                  before embarking on an afternoon game drive across the
                  spectacular Masai Mara plains.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Look out for lions, leopards, cheetahs, elephants,
                  buffaloes, giraffes, zebras, wildebeest, hyenas, jackals,
                  topis, impalas and Thomson's gazelles. Depending on the
                  season and location of the herds, you may also have the
                  opportunity to witness the Great Wildebeest Migration.
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
                  After breakfast, enjoy a full day of game drives exploring
                  the Masai Mara National Reserve. Spend the day searching for
                  the reserve's famous predators, including lions, leopards
                  and cheetahs.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Continue looking for elephants, buffaloes, giraffes, zebras,
                  wildebeest, hyenas, jackals, elands, waterbucks, topis,
                  impalas and Thomson's gazelles.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Enjoy lunch during the day before continuing your wildlife
                  exploration. Depending on the season, the Mara may also
                  provide opportunities to witness the Great Wildebeest
                  Migration.
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
                      Masai Mara – Lake Nakuru National Park
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Mara → Nakuru
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, depart the Masai Mara and travel towards
                  Lake Nakuru National Park. Upon arrival, enjoy lunch before
                  heading out for an afternoon game drive.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Lake Nakuru is renowned for its rhino population and diverse
                  wildlife. During your exploration, look out for black and
                  white rhinos, lions, leopards, buffaloes, giraffes, zebras,
                  waterbucks, elands, baboons and impalas.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The lake also offers opportunities to see flamingos and
                  other bird species when conditions are suitable. After the
                  game drive, return to your accommodation for dinner and
                  overnight.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Lake Nakuru National Park
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Sarova Lion Hills
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
                      Lake Nakuru – Lake Naivasha
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Rift Valley Escape
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, enjoy a final morning exploration around
                  Lake Nakuru before departing for Lake Naivasha. Continue
                  through the scenic Great Rift Valley landscapes towards
                  Naivasha.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Upon arrival, check in at your accommodation and enjoy lunch.
                  The afternoon offers time to relax and appreciate the
                  beautiful surroundings of Lake Naivasha.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The area is home to a variety of wildlife and birdlife, and
                  you may encounter waterbucks, giraffes, zebras, impalas and
                  baboons around suitable areas. Later, return to your
                  accommodation for dinner and overnight.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Lake Naivasha
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Enashipai Resort & Spa
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
                      Lake Naivasha – Amboseli National Park
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Naivasha → Amboseli
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, depart Lake Naivasha and continue your
                  journey towards Amboseli National Park. Upon arrival, check
                  in at your accommodation and enjoy lunch.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  In the afternoon, embark on a game drive through Amboseli,
                  famous for its large elephant herds and spectacular views of
                  Mount Kilimanjaro.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Look out for elephants, buffaloes, giraffes, zebras,
                  wildebeest, waterbucks, impalas, baboons, hyenas and other
                  wildlife. You may also encounter lions and other predators
                  as you explore the park.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Amboseli National Park
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Ol Tukai Lodge
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
                      Full-Day Amboseli National Park
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Full-Day Game Drive
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, enjoy a full day of game drives exploring
                  Amboseli National Park. The park provides excellent
                  opportunities for elephant viewing, while its open plains
                  and wetlands attract a wide variety of wildlife.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Search for buffaloes, giraffes, zebras, wildebeest,
                  waterbucks, impalas, baboons, hyenas and other wildlife.
                  Keep watch for lions and other predators as you explore.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The spectacular views of Mount Kilimanjaro provide a
                  memorable backdrop to your final full day of safari.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Amboseli National Park
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Ol Tukai Lodge
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
              DAY 7
          ====================================================== */}
          <article className="relative lg:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-xs font-black text-white">07</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="border-b border-[#0b4224]/10 bg-[#092d1a] px-7 py-6 sm:px-9">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                      Day 07
                    </p>

                    <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      Amboseli National Park – Nairobi
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Safari Ends
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, enjoy a final morning game drive in Amboseli
                  National Park, giving you one last opportunity to search for
                  elephants, buffaloes, giraffes, zebras, wildebeest,
                  waterbucks, impalas and other wildlife.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  After the game drive, depart Amboseli and travel back to
                  Nairobi. Enjoy lunch during the journey before continuing to
                  the city.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Upon arrival in Nairobi, you will be dropped off at your
                  hotel, residence or another agreed location, marking the end
                  of your safari.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Main Destination
                    </p>

                    <p className="mt-2 font-bold text-[#092d1a]">
                      Nairobi
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
          Four Destinations. One Exceptional Safari.
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600">
          Experience the remarkable variety of Kenya's landscapes and
          wildlife, from the legendary Masai Mara plains to the elephants of
          Amboseli beneath Mount Kilimanjaro.
        </p>

      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Masai Mara",
            text: "Explore expansive savannahs and search for lions, leopards, cheetahs, elephants and other iconic wildlife.",
          },
          {
            title: "Lake Nakuru",
            text: "Discover one of Kenya's renowned rhino-viewing destinations with opportunities to see black and white rhinos.",
          },
          {
            title: "Lake Naivasha",
            text: "Relax beside the tranquil lake while enjoying scenic Rift Valley landscapes and surrounding wildlife.",
          },
          {
            title: "Amboseli",
            text: "Experience large elephant herds and spectacular views of Mount Kilimanjaro during your game drives.",
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
            Exceptional Wildlife Viewing
          </h3>

          <p className="mt-5 text-base leading-8 text-white/70">
            Across the four destinations, this safari offers opportunities to
            search for an impressive variety of African wildlife. From the
            big cats of the Masai Mara to rhinos at Lake Nakuru and elephants
            in Amboseli, every destination brings a different perspective to
            your safari.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-3 p-7 sm:p-10 lg:p-12">

          {[
            "Lions",
            "Leopards",
            "Cheetahs",
            "Black Rhinos",
            "White Rhinos",
            "Elephants",
            "Buffaloes",
            "Giraffes",
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
            "Government-imposed increases of taxes and/or park fees",
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
        Seven-Day Kenya Adventure
      </p>

      <h3 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        Ready to Explore Kenya's Most Iconic Safari Destinations?
      </h3>

      <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
        Experience the Masai Mara, Lake Nakuru, Lake Naivasha and Amboseli
        on one unforgettable luxury safari, complete with exceptional
        wildlife viewing and spectacular landscapes.
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










{/* ============================================================
    6-DAY AMBOSELI, SERENGETI & NGORONGORO LUXURY SAFARI
============================================================ */}
<section
  id="6-day-amboseli-serengeti-ngorongoro"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#0b4224]/10 blur-[130px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-[#0D4825]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="inline-flex items-center gap-2 rounded-full border border-[#F5A623]/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0b4224] shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
        Kenya • Tanzania • Luxury Safari
      </div>

      <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        6-Day Amboseli, Serengeti
        <span className="block text-[#0b4224]">
          &amp; Ngorongoro Luxury Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an exceptional six-day luxury safari across Kenya and
        Tanzania, combining the dramatic landscapes of Amboseli National Park
        with the world-renowned Serengeti National Park and the spectacular
        Ngorongoro Crater.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
        Enjoy opportunities to see elephants and buffaloes in Amboseli, search
        for lions and leopards across the Serengeti, experience the Great
        Wildebeest Migration when in season, and explore the Ngorongoro Crater,
        home to an impressive concentration of wildlife.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Duration */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="text-2xl">🗓️</div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          Duration
        </p>
        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          6 Days / 5 Nights
        </p>
      </div>

      {/* Experience */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="text-2xl">🐘</div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          Experience
        </p>
        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Luxury Wildlife Safari
        </p>
      </div>

      {/* Destinations */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="text-2xl">🌍</div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          Destinations
        </p>
        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Amboseli • Serengeti • Ngorongoro
        </p>
      </div>

      {/* Style */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="text-2xl">✨</div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          Safari Style
        </p>
        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Luxury Lodges
        </p>
      </div>

    </div>

    {/* ============================================================
        HIGHLIGHT CARD
    ============================================================ */}
    <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

      <div className="grid lg:grid-cols-[1.5fr_0.8fr]">

        {/* Content */}
        <div className="p-7 sm:p-9 lg:p-12">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623]/15 text-2xl">
              🦁
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Safari Highlight
              </p>

              <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Three Iconic Wildlife Destinations
              </h3>
            </div>
          </div>

          <p className="mt-6 max-w-3xl leading-8 text-gray-600">
            This luxury safari brings together three of East Africa's most
            celebrated wildlife destinations. Begin beneath the magnificent
            Mount Kilimanjaro in Amboseli, continue into the endless plains of
            the Serengeti, then descend into the extraordinary Ngorongoro
            Crater for an unforgettable final wildlife experience.
          </p>

        </div>

        {/* Focus */}
        <div className="relative overflow-hidden bg-[#082D19] p-8 text-white sm:p-10">

          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F5A623]/10 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Safari Focus
            </p>

            <h4 className="mt-4 font-serif text-2xl font-bold leading-tight sm:text-3xl">
              Elephants, Big Cats &amp; the Great Migration
            </h4>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Follow the wildlife from Kenya into Tanzania, with excellent
              opportunities for game viewing, photography and seasonal
              migration encounters.
            </p>

          </div>
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY-BY-DAY ITINERARY
    ============================================================ */}
    <div className="mt-20">

      {/* Section Heading */}
      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Your Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl lg:text-5xl">
          Day-by-Day Safari Experience
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          From the elephant-rich plains of Amboseli to the endless Serengeti
          and wildlife-filled Ngorongoro Crater, every day brings a new
          chapter of East African adventure.
        </p>

      </div>

      {/* Timeline */}
      <div className="relative mt-12">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-10">

          {/* ======================================================
              DAY 1
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 1
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Nairobi – Amboseli National Park
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your safari begins in Nairobi, where you will be picked up by
                  a representative from Daffar Tours and Travel and driven to
                  Amboseli National Park. Upon arrival, check in at your
                  accommodation and enjoy lunch before heading out for an
                  afternoon game drive.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Amboseli is famous for its spectacular views and impressive
                  elephant herds, with Mount Kilimanjaro providing a magnificent
                  backdrop on clear days. During the game drive, look out for
                  elephants, buffaloes, giraffes, zebras, wildebeest, warthogs,
                  jackals, and other wildlife. You may also encounter lions and
                  other predators as you explore the park.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Return to your accommodation in the evening for dinner and
                  an overnight stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Amboseli Serena Safari Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Lunch &amp; Dinner • Drinking Water Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 2
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-[#0b4224]/10 bg-[#f7faf7] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 2
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Full Day Amboseli National Park
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, enjoy a full day of game drives exploring
                  Amboseli National Park and its diverse landscapes. The park
                  provides excellent opportunities for elephant and buffalo
                  watching, while the open plains and wetlands attract giraffes,
                  zebras, wildebeest, warthogs, jackals, and numerous other
                  species.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Keep watch for lions and other predators as you explore
                  different areas of the park. Enjoy lunch before continuing
                  with your afternoon game drive.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Later, return to your accommodation for dinner and relaxation.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Amboseli Serena Safari Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner • Drinking Water Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 3
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 3
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Amboseli – Serengeti National Park
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart Amboseli and continue your journey
                  into Tanzania towards the legendary Serengeti National Park.
                  Upon arrival in the Serengeti, check in at your accommodation
                  and enjoy lunch before an afternoon game drive.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  The Serengeti is renowned for its vast plains, abundant
                  wildlife, and spectacular predator sightings. As you explore,
                  look out for lions, leopards, cheetahs, elephants, buffaloes,
                  giraffes, zebras, wildebeest, warthogs, jackals, and hyenas.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Depending on the season and location of the herds, you may
                  also have opportunities to witness the Great Wildebeest
                  Migration. Return to your accommodation in the evening for
                  dinner and overnight stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Serengeti Serena Safari Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner • Drinking Water Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 4
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-[#0b4224]/10 bg-[#f7faf7] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 4
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Full Day Serengeti National Park
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, spend a full day exploring the Serengeti with
                  extensive game drives. This is an ideal opportunity to search
                  for the Serengeti’s famous predators, including lions and
                  leopards, while also looking for cheetahs, hyenas, jackals,
                  elephants, buffaloes, giraffes, zebras, wildebeest, and
                  warthogs.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Depending on the time of year and location of the herds, you
                  may witness the dramatic movements of the wildebeest migration
                  across the plains. The day offers excellent opportunities for
                  wildlife viewing and photography.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Return to your accommodation in the evening for dinner and
                  relaxation.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Serengeti Serena Safari Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner • Drinking Water Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 5
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 5
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Serengeti – Ngorongoro Crater
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart the Serengeti and travel towards the
                  Ngorongoro Conservation Area. Upon arrival, descend into the
                  spectacular Ngorongoro Crater for a game drive. The crater is
                  home to a remarkable concentration of wildlife.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  During your exploration, look out for lions, elephants,
                  buffaloes, rhinos, zebras, wildebeest, hyenas, warthogs,
                  Thomson’s gazelles, and other wildlife. Enjoy lunch during the
                  day before continuing your crater exploration.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Later, ascend from the crater and proceed to your accommodation
                  for dinner and overnight stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Ngorongoro Marera Mountain View Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner • Drinking Water Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
              DAY 6
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-[#0b4224]/10 bg-[#f7faf7] px-6 py-6 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 6
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Ngorongoro – Arusha
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart your accommodation and begin your
                  journey towards Arusha. Depending on the timing of your
                  transfer, you may have opportunities to enjoy the changing
                  landscapes of northern Tanzania along the way.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Enjoy lunch before arriving in Arusha, where you will be
                  dropped off at your hotel, airport, residence, or another
                  agreed location, marking the end of your safari.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      No Accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>
                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast &amp; Lunch • Drinking Water Provided
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
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What Your Safari Covers
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
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-600">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-3xl border border-[#F5A623]/20 bg-[#fffaf0] p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623]/15 text-xl text-[#b87900]">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Excluded
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What You Should Budget For
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-4">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips (guideline: US$10–15 per person per day)",
            "Personal items such as souvenirs, travel insurance and visa fees",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/15 text-xs font-bold text-[#b87900]">
                ×
              </span>

              <p className="text-sm leading-6 text-gray-600">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>

    {/* ============================================================
        OPTIONAL EXPERIENCES
    ============================================================ */}
    <div className="mt-8 rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        <div>

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
            Optional Experiences
          </p>

          <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
            Make Your Safari Even More Memorable
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Add special experiences to your itinerary for a deeper connection
            with East Africa's wildlife, landscapes and communities.
          </p>

        </div>

        <div className="grid gap-3 sm:grid-cols-2">

          {/* Balloon */}
          <div className="rounded-2xl bg-[#f7faf7] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
              <span className="text-xl">🎈</span>
              <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-bold text-[#a96f00]">
                USD 500 pp
              </span>
            </div>

            <h4 className="mt-4 font-semibold text-[#082D19]">
              Balloon Safari
            </h4>
          </div>

          {/* Maasai */}
          <div className="rounded-2xl bg-[#f7faf7] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
              <span className="text-xl">🛖</span>
              <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-bold text-[#a96f00]">
                USD 50 / vehicle
              </span>
            </div>

            <h4 className="mt-4 font-semibold text-[#082D19]">
              Maasai Village Visit
            </h4>
          </div>

        </div>

      </div>
    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-14 text-center sm:px-10 lg:px-16">

      {/* CTA Decorations */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#0D4825] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl">

        <div className="inline-flex items-center gap-2 rounded-full border border-[#F5A623]/30 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
          Your East African Adventure Awaits
        </div>

        <h3 className="mt-6 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Explore Amboseli,
          <span className="block text-[#F5A623]">
            Serengeti &amp; Ngorongoro?
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Let Daffar Tours and Travel create a seamless luxury safari
          experience across Kenya and Tanzania, tailored around your travel
          style, interests and expectations.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#f7b84b]"
          >
            Plan This Safari
            <span className="text-lg">→</span>
          </Link>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
            <span className="text-lg">↗</span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>


{/* ============================================================
    6-DAY AMBOSELI, LAKE NAKURU & MASAI MARA LUXURY SAFARI
============================================================ */}
<section
  id="6-day-amboseli-lake-nakuru-masai-mara"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#0b4224]/10 blur-[130px]" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />
  <div className="pointer-events-none absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-[#0D4825]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="inline-flex items-center gap-2 rounded-full border border-[#F5A623]/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0b4224] shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
        Kenya • Luxury Safari
      </div>

      <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        6-Day Amboseli, Lake Nakuru
        <span className="block text-[#0b4224]">
          &amp; Masai Mara Luxury Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an unforgettable six-day luxury safari through three of
        Kenya’s most celebrated wildlife destinations: Amboseli National Park,
        Lake Nakuru National Park, and the Masai Mara National Reserve.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
        From the spectacular views of Mount Kilimanjaro and Amboseli’s famous
        elephant herds to the rhinos of Lake Nakuru and the abundant predators
        and plains wildlife of the Masai Mara, this safari offers an exceptional
        introduction to Kenya’s diverse landscapes and wildlife.
      </p>

    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="text-2xl">🗓️</div>

        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          Duration
        </p>

        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          6 Days / 5 Nights
        </p>
      </div>

      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="text-2xl">🐘</div>

        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          Experience
        </p>

        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Luxury Wildlife Safari
        </p>
      </div>

      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="text-2xl">🌍</div>

        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          Destinations
        </p>

        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Amboseli • Nakuru • Masai Mara
        </p>
      </div>

      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="text-2xl">✨</div>

        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
          Safari Style
        </p>

        <p className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Luxury Lodges &amp; Camps
        </p>
      </div>

    </div>

    {/* ============================================================
        HIGHLIGHT CARD
    ============================================================ */}
    <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

      <div className="grid lg:grid-cols-[1.5fr_0.8fr]">

        <div className="p-7 sm:p-9 lg:p-12">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623]/15 text-2xl">
              🦁
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                Safari Highlight
              </p>

              <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Three Iconic Kenyan Wildlife Destinations
              </h3>
            </div>

          </div>

          <p className="mt-6 max-w-3xl leading-8 text-gray-600">
            Journey from the elephant-rich plains of Amboseli beneath the
            magnificent Mount Kilimanjaro to the wildlife and rhino-rich
            landscapes of Lake Nakuru, before finishing in the legendary Masai
            Mara. This safari combines spectacular scenery, diverse wildlife
            and unforgettable game-viewing opportunities.
          </p>

        </div>

        <div className="relative overflow-hidden bg-[#082D19] p-8 text-white sm:p-10">

          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F5A623]/10 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Safari Focus
            </p>

            <h4 className="mt-4 font-serif text-2xl font-bold leading-tight sm:text-3xl">
              Elephants, Rhinos &amp; Big Cats
            </h4>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Discover Kenya’s diverse wildlife, from Amboseli’s famous
              elephants and Lake Nakuru’s rhinos to the abundant predators and
              plains game of the Masai Mara.
            </p>

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
          Your Journey
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl lg:text-5xl">
          Day-by-Day Safari Experience
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Explore three remarkable Kenyan wildlife destinations on a carefully
          designed journey from Nairobi to Amboseli, Lake Nakuru and the Masai
          Mara before returning to Nairobi.
        </p>

      </div>

      <div className="relative mt-12">

        {/* Vertical Timeline */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-10">

          {/* ======================================================
              DAY 1
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              1
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 1
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Nairobi – Amboseli National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your safari begins in Nairobi, where you will be picked up by
                  a representative from Daffar Tours and Travel and driven to
                  Amboseli National Park. Upon arrival, check in at your
                  accommodation and enjoy lunch before heading out for an
                  afternoon game drive.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Amboseli is famous for its large elephant herds and
                  spectacular views of Mount Kilimanjaro. During the game drive,
                  look out for elephants, lions, buffaloes, giraffes, zebras,
                  wildebeest, waterbucks, hyenas, and other wildlife. The park’s
                  open plains provide excellent opportunities for wildlife
                  viewing and photography.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Return to your accommodation in the evening for dinner and an
                  overnight stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Ol Tukai Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Lunch &amp; Dinner • Drinking Water Provided
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* ======================================================
              DAY 2
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              2
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-[#0b4224]/10 bg-[#f7faf7] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 2
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Full Day Amboseli National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, enjoy a full day exploring Amboseli National
                  Park with game drives across its diverse habitats. The park is
                  particularly renowned for its elephants, while its open plains
                  offer opportunities to encounter lions, buffaloes, giraffes,
                  zebras, wildebeest, waterbucks, hyenas, and jackals.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  You may also spot Thomson’s gazelles and other antelope
                  species. Enjoy lunch before continuing your afternoon wildlife
                  exploration. With Mount Kilimanjaro forming a dramatic
                  backdrop, the day offers excellent opportunities for wildlife
                  viewing and photography.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Return to your accommodation in the evening for dinner and
                  relaxation.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Ol Tukai Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner • Drinking Water Provided
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* ======================================================
              DAY 3
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              3
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 3
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Amboseli – Lake Nakuru National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart Amboseli and travel towards Lake
                  Nakuru National Park. Enjoy lunch before embarking on an
                  afternoon game drive in the park.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Lake Nakuru is renowned for its rhino population and diverse
                  wildlife. During your game drive, look out for black and white
                  rhinos, lions, leopards, buffaloes, giraffes, waterbucks,
                  zebras, and other wildlife.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  The lake and surrounding areas also provide opportunities for
                  bird viewing, including flamingos when conditions are suitable.
                  The park’s scenic landscapes make for an excellent wildlife
                  experience.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  After the game drive, return to your accommodation for dinner
                  and overnight stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Sarova Lion Hill Game Lodge
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner • Drinking Water Provided
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* ======================================================
              DAY 4
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              4
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-[#0b4224]/10 bg-[#f7faf7] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 4
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Lake Nakuru – Masai Mara National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart Lake Nakuru and travel to the
                  world-famous Masai Mara National Reserve. Upon arrival, check
                  in at your accommodation and enjoy lunch before embarking on
                  an afternoon game drive.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  The Masai Mara is one of Kenya’s premier wildlife destinations
                  and offers excellent opportunities for predator and plains-game
                  viewing. Look out for lions, leopards, cheetahs, elephants,
                  buffaloes, giraffes, zebras, wildebeest, hyenas, jackals,
                  waterbucks, and Thomson’s gazelles.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Depending on the season, you may also witness the spectacular
                  wildebeest migration.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Return to your accommodation in the evening for dinner and
                  overnight stay.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Alama Camp Mara
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner • Drinking Water Provided
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* ======================================================
              DAY 5
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              5
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="bg-[#082D19] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 5
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Full Day Masai Mara National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, enjoy a full day of game drives exploring the
                  Masai Mara. This is a prime opportunity to search for the
                  reserve’s famous predators and abundant wildlife.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Spend the day looking for lions, leopards, cheetahs, elephants,
                  buffaloes, giraffes, zebras, wildebeest, hyenas, jackals,
                  waterbucks, and Thomson’s gazelles.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  During the migration season, you may have the opportunity to
                  witness large herds of wildebeest moving across the plains and,
                  when conditions are suitable, dramatic river crossings.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  A visit to a Maasai village can also provide an opportunity to
                  learn about the traditions and way of life of the Maasai
                  people.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Return to your accommodation in the evening for your final
                  dinner and overnight stay in the Mara.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Alama Camp Mara
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner • Drinking Water Provided
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* ======================================================
              DAY 6
          ====================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#082D19] text-sm font-bold text-white shadow-lg ring-8 ring-[#f7faf7] md:flex">
              6
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:shadow-xl">

              <div className="border-b border-[#0b4224]/10 bg-[#f7faf7] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 6
                </p>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Masai Mara – Nairobi
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, enjoy a final morning game drive in the Masai
                  Mara, providing one last opportunity to search for wildlife
                  across the reserve.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  You may encounter lions, elephants, buffaloes, giraffes,
                  zebras, wildebeest, hyenas, waterbucks, Thomson’s gazelles,
                  and other wildlife before beginning your journey back to
                  Nairobi.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Enjoy lunch during the journey before continuing to Nairobi.
                  Upon arrival, you will be dropped off at your hotel, residence,
                  or another agreed location, marking the end of your safari.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      No Accommodation
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Meals &amp; Drinks
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast &amp; Lunch • Drinking Water Provided
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
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What Your Safari Covers
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
            "Round-trip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224]/10 text-xs font-bold text-[#0b4224]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-600">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* EXCLUDED */}
      <div className="rounded-3xl border border-[#F5A623]/20 bg-[#fffaf0] p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623]/15 text-xl text-[#b87900]">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Excluded
            </p>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              What You Should Budget For
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-4">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips (guideline: US$10–15 per person per day)",
            "Personal items such as souvenirs, travel insurance and visa fees",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/15 text-xs font-bold text-[#b87900]">
                ×
              </span>

              <p className="text-sm leading-6 text-gray-600">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>

    {/* ============================================================
        OPTIONAL EXPERIENCES
    ============================================================ */}
    <div className="mt-8 rounded-3xl border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        <div>

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
            Optional Experiences
          </p>

          <h3 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
            Make Your Safari Even More Memorable
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Enhance your Masai Mara experience with optional activities that
            offer a different perspective on Kenya’s wildlife and culture.
          </p>

        </div>

        <div className="grid gap-3 sm:grid-cols-2">

          <div className="rounded-2xl bg-[#f7faf7] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-start justify-between gap-3">

              <span className="text-xl">
                🎈
              </span>

              <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-bold text-[#a96f00]">
                USD 500 pp
              </span>

            </div>

            <h4 className="mt-4 font-semibold text-[#082D19]">
              Balloon Safari
            </h4>

          </div>

          <div className="rounded-2xl bg-[#f7faf7] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-start justify-between gap-3">

              <span className="text-xl">
                🛖
              </span>

              <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-bold text-[#a96f00]">
                USD 50 / vehicle
              </span>

            </div>

            <h4 className="mt-4 font-semibold text-[#082D19]">
              Maasai Village Visit
            </h4>

          </div>

        </div>

      </div>

    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-14 text-center sm:px-10 lg:px-16">

      <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#0D4825] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl">

        <div className="inline-flex items-center gap-2 rounded-full border border-[#F5A623]/30 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">

          <span className="h-2 w-2 rounded-full bg-[#F5A623]" />

          Your Kenyan Adventure Awaits

        </div>

        <h3 className="mt-6 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Explore Amboseli,
          <span className="block text-[#F5A623]">
            Lake Nakuru &amp; Masai Mara?
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Let Daffar Tours and Travel create a seamless luxury safari through
          Kenya’s most iconic wildlife destinations, tailored around your
          interests, travel style and expectations.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#f7b84b]"
          >
            Plan This Safari
            <span className="text-lg">
              →
            </span>
          </Link>

          <a
            href="https://wa.me/+254708711459"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
            <span className="text-lg">
              ↗
            </span>
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