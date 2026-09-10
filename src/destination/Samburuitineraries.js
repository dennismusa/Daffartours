/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import kenya from "../assets/kenya.jpg";
import meru from "../assets/meru.jpg";
//import kili2 from "../assets/kili2.jpg";
//import kili3 from "../assets/kili3.jpg";
//import kili4 from "../assets/kili4.jpg";
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
    PAGE HERO — SAMBURU ITINERARIES
============================================================ */}
<section
  id="samburu-itineraries-hero"
  className="relative overflow-hidden bg-[#092d1a]"
>
  <img
    src={kenya}
    alt="Samburu National Reserve"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#061b10]/90 via-[#092d1a]/60 to-[#092d1a]/20" />

  <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[540px] lg:px-12">
    <div className="max-w-3xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
          Safari Itineraries
        </span>
      </div>

      <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Samburu
        <span className="block text-[#f5c45d]">
          Safari Itineraries
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
        Discover the rugged beauty of northern Kenya, extraordinary wildlife
        and the famous Samburu Special Five across unforgettable safari journeys.
      </p>
    </div>
  </div>
</section>

{/* ============================================================
    6-DAY MASAI MARA, SERENGETI & NGORONGORO LUXURY SAFARI
{/* ============================================================
    3-DAY SAMBURU LUXURY PLUS SAFARI
============================================================ */}
<section
  id="3-day-samburu-luxury-plus"
  className="relative scroll-mt-28 overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#f5c45d]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HERO / INTRO
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#0b4224]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224] shadow-sm">
        Luxury Plus Safari
      </span>

      <h1 className="mt-6 text-4xl font-black tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        3-Day Samburu Luxury Plus Safari
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience the spectacular landscapes and rich wildlife of Samburu
        National Reserve on this three-day luxury safari. Discover the unique
        wildlife of northern Kenya, including the famous Samburu Special Five,
        while enjoying a luxurious stay at Sasaab Camp.
      </p>

      {/* QUICK FACTS */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Duration
          </p>
          <p className="mt-2 text-sm font-bold text-[#0b4224]">
            3 Days / 2 Nights
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Destination
          </p>
          <p className="mt-2 text-sm font-bold text-[#0b4224]">
            Samburu
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Experience
          </p>
          <p className="mt-2 text-sm font-bold text-[#0b4224]">
            Wildlife Safari
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Accommodation
          </p>
          <p className="mt-2 text-sm font-bold text-[#0b4224]">
            Sasaab Camp
          </p>
        </div>

      </div>
    </div>

    {/* ============================================================
        SAFARI HIGHLIGHT
    ============================================================ */}
    <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#0b4224] shadow-xl">

      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

        <div className="relative min-h-[300px] lg:min-h-[400px]">
          <img
            src={meru}
            alt="Samburu National Reserve"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-[#0b4224]/70" />

          <div className="absolute bottom-7 left-7 right-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Northern Kenya
            </p>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Samburu National Reserve
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            Safari Highlight
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Discover the Samburu Special Five
          </h2>

          <p className="mt-5 leading-8 text-white/75">
            Samburu is renowned for its distinctive northern wildlife,
            including the reticulated giraffe, Grevy’s zebra, gerenuk,
            Beisa oryx and Somali ostrich. The reserve also offers
            opportunities to encounter elephants, lions, leopards,
            cheetahs and buffaloes.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Reticulated Giraffe",
              "Grevy's Zebra",
              "Gerenuk",
              "Beisa Oryx",
              "Somali Ostrich",
            ].map((animal) => (
              <span
                key={animal}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur-sm"
              >
                {animal}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
          Your Journey
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#092d1a] sm:text-4xl">
          Day-by-Day Safari Itinerary
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          Explore the landscapes and wildlife of Samburu through carefully
          planned game drives and luxurious stays at Sasaab Camp.
        </p>
      </div>

      <div className="relative">

        {/* TIMELINE LINE */}
        <div className="absolute left-[19px] top-5 hidden h-[calc(100%-40px)] w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">

          {/* ============================================================
              DAY 1
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              01
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 1
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Nairobi – Samburu National Reserve
                </h3>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your Samburu safari begins in Nairobi, where you will be
                  picked up by a representative from Daffar Tours and Travel
                  and driven north towards Samburu National Reserve. Upon
                  arrival, you will check in to your camp and enjoy lunch.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  In the afternoon, head out for your first game drive across
                  the reserve. Samburu is renowned for its distinctive
                  wildlife, including the reticulated giraffe, Grevy’s zebra,
                  gerenuk, Beisa oryx and Somali ostrich. You may also
                  encounter elephants, lions, leopards, buffaloes and other
                  wildlife against the dramatic backdrop of northern Kenya.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your camp in the evening for dinner and overnight.
                </p>

                {/* DAY DETAILS */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Sasaab Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meal Plan
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Lunch & Dinner
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ============================================================
              DAY 2
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              02
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 2
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Full-Day Samburu National Reserve
                </h3>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, spend the day exploring the remarkable
                  landscapes of Samburu National Reserve with game drives
                  through its diverse habitats. The reserve offers excellent
                  opportunities to encounter elephants, lions, leopards,
                  cheetahs, buffaloes and the unique Samburu Special Five.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  The Ewaso Ng’iro River provides a vital water source for
                  wildlife and attracts a variety of animals throughout the
                  day. Enjoy lunch before continuing your wildlife exploration,
                  followed by an afternoon game drive as you search for more
                  memorable sightings.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your camp in the evening for dinner and overnight.
                </p>

                {/* WILDLIFE HIGHLIGHTS */}
                <div className="mt-8 rounded-2xl border border-[#f5c45d]/20 bg-[#f5c45d]/5 p-6">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6418]">
                    Wildlife Focus
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Elephants",
                      "Lions",
                      "Leopards",
                      "Cheetahs",
                      "Buffaloes",
                      "Samburu Special Five",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#0b4224] shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

                {/* DAY DETAILS */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Sasaab Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meal Plan
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ============================================================
              DAY 3
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              03
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 3
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Samburu National Reserve – Nairobi
                </h3>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Begin your final morning with an early game drive in Samburu,
                  taking advantage of the cooler hours when wildlife is
                  particularly active. Enjoy your final opportunities to spot
                  elephants, giraffes, zebras, antelopes and predators before
                  returning to your camp for breakfast.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  After breakfast, relax at the camp before enjoying lunch.
                  Later, depart Samburu and begin your journey back to Nairobi
                  or your onward destination, marking the end of your safari.
                </p>

                {/* DAY DETAILS */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      No accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meal Plan
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Breakfast & Lunch
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
    <div className="mt-20">

      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
          Safari Highlights
        </p>

        <h2 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          What Makes Samburu Special
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Samburu Special Five",
            text: "Search for the reticulated giraffe, Grevy’s zebra, gerenuk, Beisa oryx and Somali ostrich.",
          },
          {
            title: "Rich Wildlife",
            text: "Encounter elephants, lions, leopards, cheetahs, buffaloes, giraffes and zebras.",
          },
          {
            title: "Ewaso Ng’iro River",
            text: "Explore a wildlife-rich landscape shaped by the vital Ewaso Ng’iro River.",
          },
          {
            title: "Luxury Stay",
            text: "Enjoy two nights of luxurious accommodation at Sasaab Camp.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[1.5rem] border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b4224]/10 text-[#0b4224]">
              ✓
            </div>

            <h3 className="mt-5 font-bold text-[#092d1a]">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {item.text}
            </p>
          </div>
        ))}

      </div>
    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#092d1a] px-7 py-12 text-center sm:px-10 lg:px-16">

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
        Experience Samburu
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black text-white sm:text-4xl">
        Discover Northern Kenya in Luxury
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
        Explore Samburu’s spectacular landscapes, encounter its unique
        wildlife and enjoy an unforgettable luxury safari at Sasaab Camp.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[#f5c45d] px-7 py-3.5 text-sm font-bold text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-[#e9b94e]"
        >
          Plan This Safari
        </Link>

        <a
          href="#itineraries"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Explore More Itineraries
        </a>

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