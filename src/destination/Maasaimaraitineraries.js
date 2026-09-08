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
import nakuru2 from "../assets/nakuru2.jpg";
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
<section
  id="masai-mara-itineraries-hero"
  className="relative overflow-hidden bg-[#092d1a]"
>
  <img
    src={mara2}
    alt="Masai Mara National Reserve"
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
        Maasai Mara
        <span className="block text-[#f5c45d]">
          Safari Itineraries
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
        Experience Kenya's iconic safari destination, renowned for the Big
        Five, dramatic landscapes and the spectacular Great Wildebeest Migration.
      </p>
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
    3-DAY MASAI MARA LUXURY SAFARI
============================================================ */}

<section id="3-day maasaimara" className="relative overflow-hidden bg-white py-20 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HERO
    ======================================================== */}
    <div className="relative min-h-[560px] overflow-hidden rounded-[2rem]">

      <img
        src={mara1}
        alt="Masai Mara Luxury Safari"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      <div className="relative z-10 flex min-h-[560px] items-center px-7 py-14 sm:px-12 lg:px-16">

        <div className="max-w-3xl text-white">

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md">
            Kenya Luxury Safari
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            3-Day Masai Mara
            <span className="mt-2 block text-amber-400">
              Luxury Safari
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Experience the magic of Kenya's legendary Masai Mara National
            Reserve on a carefully designed three-day luxury safari. Discover
            sweeping savannahs, abundant wildlife, dramatic predator
            encounters, and unforgettable African landscapes while enjoying a
            comfortable stay at Amani Mara Camp.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              🦁 Big Five
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              🌅 Savannah Landscapes
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              📸 Wildlife Photography
            </span>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        OVERVIEW CARDS
    ======================================================== */}
    <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-4 sm:px-8">

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            icon: "🗓️",
            label: "Duration",
            value: "3 Days / 2 Nights",
          },
          {
            icon: "📍",
            label: "Destination",
            value: "Masai Mara",
          },
          {
            icon: "🦁",
            label: "Experience",
            value: "Luxury Wildlife Safari",
          },
          {
            icon: "🏕️",
            label: "Accommodation",
            value: "Amani Mara Camp",
          },
        ].map((item) => (

          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-1"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl">
                {item.icon}
              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  {item.value}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ========================================================
        INTRODUCTION
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-5xl">

      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:p-12">

        <div className="flex flex-col gap-7 md:flex-row">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-600 text-2xl text-white shadow-lg">
            🦁
          </div>

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
              The Mara Experience
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Three Days in Kenya's Legendary Wilderness
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Experience the magic of Kenya's legendary Masai Mara National
              Reserve on this three-day luxury safari. Known for its sweeping
              savannahs, abundant wildlife, and extraordinary predator
              sightings, the Masai Mara offers one of Africa's most rewarding
              safari experiences.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This carefully designed itinerary combines exciting game drives
              with comfortable accommodation at Amani Mara Camp, creating the
              perfect balance between adventure and relaxation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From majestic lions and elusive leopards to elephants, giraffes,
              zebras, wildebeest, and abundant birdlife, every game drive brings
              the possibility of a memorable wildlife encounter.
            </p>

            <div className="mt-7 rounded-2xl border-l-4 border-amber-500 bg-white p-5">

              <p className="text-sm leading-7 text-slate-600">
                <strong className="text-slate-900">
                  Safari highlights:
                </strong>{" "}
                Masai Mara game drives, Big Five viewing opportunities,
                predator sightings, Great Rift Valley scenery, wildlife
                photography, and comfortable luxury camp accommodation.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        ITINERARY HEADER
    ======================================================== */}
    <div className="mx-auto mt-24 max-w-4xl text-center">

      <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
        Your Safari Journey
      </span>

      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
        Day-by-Day Itinerary
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
        Follow a carefully planned journey from Nairobi into the heart of the
        Masai Mara, with immersive game drives and unforgettable encounters
        with Kenya's wildlife.
      </p>

    </div>


    {/* ========================================================
        TIMELINE
    ======================================================== */}
    <div className="relative mx-auto mt-14 max-w-5xl">

      <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-slate-200 md:block" />


      {/* ======================================================
          DAY 1
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-sm font-extrabold text-white shadow-lg md:flex">
          01
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 1
          </span>

          <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
            Nairobi to Masai Mara National Reserve
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Your safari begins with an early morning departure from Nairobi as
            you travel toward the world-famous Masai Mara National Reserve.
            The journey takes you through Kenya's changing landscapes,
            including the scenic Great Rift Valley and expansive countryside.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Upon arrival in the Masai Mara, you'll enter the reserve and begin
            your first game drive. The Mara's open grasslands provide an ideal
            setting for wildlife viewing, with opportunities to encounter
            wildebeest, zebras, elephants, giraffes, buffaloes, antelopes,
            and a variety of predators.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Enjoy a picnic or lodge lunch before continuing your afternoon game
            drive. As the afternoon progresses, the golden light across the
            savannah creates beautiful conditions for photography and wildlife
            viewing.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Later, make your way to Amani Mara Camp for check-in. Relax and
            enjoy dinner as you settle into the peaceful atmosphere of the
            Mara.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">

            {[
              "Great Rift Valley",
              "First Game Drive",
              "Lions",
              "Elephants",
              "Giraffes",
              "Zebras",
              "Wildebeest",
              "Predators",
            ].map((item) => (

              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {item}
              </span>

            ))}

          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Main Destination
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Masai Mara National Reserve
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Amani Mara Camp
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Meals & Drinks
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Lunch & Dinner
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Drinking water included
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 2
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-sm font-extrabold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 2
          </span>

          <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
            Full-Day Masai Mara Wildlife Experience
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, set out for a full day of game viewing in the
            Masai Mara National Reserve. Today offers plenty of time to explore
            different areas of the reserve in search of Kenya's iconic
            wildlife.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The Mara is particularly renowned for its large populations of
            lions, cheetahs, and leopards, while elephants, buffaloes, giraffes,
            zebras, wildebeests, hippos, and numerous antelope species are also
            frequently encountered.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Depending on the season, you may also witness the spectacular
            movements of the Great Wildebeest Migration, when enormous herds
            travel across the Mara ecosystem in search of fresh grazing.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Enjoy lunch in the reserve or return to camp, depending on the
            day's schedule. Continue with an afternoon game drive before
            returning to Amani Mara Camp in the evening.
          </p>

          {/* WILDLIFE FOCUS */}
          <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Wildlife Focus
            </p>

            <p className="mt-2 text-xl font-extrabold">
              Big Cats & The Great Migration
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Explore the Mara in search of lions, cheetahs, leopards,
              elephants, buffaloes, giraffes, zebras, wildebeest, hippos,
              antelopes, and abundant birdlife.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "Lion",
                "Cheetah",
                "Leopard",
                "Elephant",
                "Buffalo",
                "Giraffe",
                "Zebra",
                "Wildebeest",
              ].map((animal) => (

                <span
                  key={animal}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold"
                >
                  {animal}
                </span>

              ))}

            </div>

          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Main Destination
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Masai Mara National Reserve
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Amani Mara Camp
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Meals & Drinks
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast, Lunch & Dinner
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Drinking water included
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 3
      ====================================================== */}
      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-extrabold text-white shadow-lg md:flex">
          03
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-white shadow-sm transition duration-300 hover:shadow-xl">

          <div className="bg-slate-950 px-7 py-5 text-white sm:px-9">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Final Day
            </p>

            <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">
              Masai Mara – Final Game Drive – Nairobi
            </h3>

          </div>

          <div className="p-7 sm:p-9">

            <p className="leading-8 text-slate-600">
              Wake up early and enjoy breakfast at camp before embarking on a
              final morning game drive. The early morning hours are among the
              best times to experience the Mara, when wildlife is active and
              the cooler temperatures create ideal conditions for game viewing.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Keep your eyes open for lions returning from a night hunt,
              cheetahs scanning the plains, elephants moving across the
              grasslands, and herds of zebra and wildebeest beginning their
              day.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              After the game drive, return to camp for a final meal before
              checking out. Begin your journey back to Nairobi, enjoying the
              changing scenery along the way. Lunch will be provided during the
              journey before continuing to Nairobi.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Upon arrival in Nairobi, you'll be dropped off at your preferred
              location, marking the end of your Masai Mara safari.
            </p>

            {/* FINAL MORNING */}
            <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-center text-white sm:p-9">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                Final Safari Moments
              </p>

              <p className="mt-3 text-2xl font-black sm:text-3xl">
                One Last Look at the Mara
              </p>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
                Enjoy an early morning game drive before bidding farewell to
                the Mara and beginning your journey back to Nairobi.
              </p>

            </div>

            <div className="mt-8 grid gap-4 border-t border-amber-100 pt-6 sm:grid-cols-3">

              <div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Main Destination
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  Nairobi
                </p>

              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Accommodation
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  None
                </p>

              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Meals & Drinks
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  Breakfast & Lunch
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Drinking water included
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        INCLUSIONS & EXCLUSIONS
    ======================================================== */}
    <div className="mt-24 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/50 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Included
            </p>

            <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
              What's Included
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless clearly labeled as optional",
            "All accommodation unless clearly labeled as optional",
            "Professional driver/guide",
            "All transportation unless clearly labeled as optional",
            "All applicable taxes and VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the day-by-day itinerary",
            "Drinking water as specified in the itinerary",
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


      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white">
            +
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Excluded
            </p>

            <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
              Additional Expenses
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips and gratuities",
            "Suggested tipping guideline: US$10 per person per day",
            "Personal items and souvenirs",
            "Travel insurance",
            "Visa fees",
            "Government-imposed increases in taxes and/or park fees",
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
        SAFARI HIGHLIGHTS
    ======================================================== */}
    <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🦁",
          title: "Predator Country",
          text: "Search for lions, cheetahs and elusive leopards across the Mara.",
        },
        {
          icon: "🐘",
          title: "Big Five",
          text: "Enjoy excellent opportunities for memorable Big Five encounters.",
        },
        {
          icon: "🌾",
          title: "Mara Plains",
          text: "Explore spectacular open grasslands and scenic African landscapes.",
        },
        {
          icon: "📸",
          title: "Photo Moments",
          text: "Capture unforgettable wildlife encounters in beautiful golden light.",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl">
            {item.icon}
          </div>

          <h4 className="mt-4 font-extrabold text-slate-900">
            {item.title}
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {item.text}
          </p>

        </div>

      ))}

    </div>


    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-14 text-center sm:px-12 lg:py-16">

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Experience the Masai Mara
        </p>

        <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
          Your African Adventure Starts Here
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Discover Kenya's legendary wildlife, dramatic savannah landscapes,
          and unforgettable predator encounters on a luxury Masai Mara safari.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Plan Your Safari
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 font-bold text-white transition hover:bg-white/10"
          >
            Request a Quote
          </a>

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
              href="https://wa.me/+254708164662"
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


<section
  id="masai-mara-nakuru-naivasha-5-day"
  className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[30%] h-[30rem] w-[30rem] rounded-full bg-[#0b4224]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-3 rounded-full border border-[#0b4224]/15 bg-[#0b4224]/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#dba33a]" />
        Kenya Luxury Safari
      </span>

      <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.08] text-[#0b4224] sm:text-5xl lg:text-6xl">
        5-Day Masai Mara, Lake Nakuru
        <span className="block text-[#dba33a]">
          & Lake Naivasha Luxury Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        Experience three of Kenya’s remarkable safari destinations on this
        five-day journey. Explore the wildlife-rich Masai Mara, discover the
        scenic beauty of Lake Nakuru, and unwind beside the tranquil waters
        of Lake Naivasha.
      </p>
    </div>


    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🦁",
          title: "Destination",
          value: "Masai Mara",
        },
        {
          icon: "📅",
          title: "Duration",
          value: "5 Days / 4 Nights",
        },
        {
          icon: "🦏",
          title: "Wildlife",
          value: "Big Five & More",
        },
        {
          icon: "🌊",
          title: "Lakes",
          value: "Nakuru & Naivasha",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0b4224] text-xl text-white shadow-md transition duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {item.title}
              </p>

              <p className="mt-1 font-semibold text-[#0b4224]">
                {item.value}
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>


    {/* ============================================================
        DESTINATION IMAGE COLLAGE
    ============================================================ */}
    <div className="mt-16 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">

      {/* LARGE MASAI MARA */}
      <div className="group relative min-h-[480px] overflow-hidden rounded-[2rem] shadow-xl">

        <img
          src={mara1}
          alt="Masai Mara wildlife safari"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/90 via-[#082d19]/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Days 1–2
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            Masai Mara
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-white/80">
            Explore Kenya's legendary savannah in search of lions,
            elephants, buffaloes, leopards, cheetahs, wildebeest and
            abundant plains wildlife.
          </p>
        </div>
      </div>


      {/* SMALL IMAGE STACK */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

        {/* NAKURU */}
        <div className="group relative min-h-[230px] overflow-hidden rounded-[2rem] shadow-lg">

          <img
            src="https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/09/2.-Flamingos-and-Rhinos-at-Lake-Nakuru-National-Park-Kenya.jpg?resize=1024%2C573&ssl=1"
            alt="Lake Nakuru National Park"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/85 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Day 3
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-white">
              Lake Nakuru
            </h3>

          </div>
        </div>


        {/* NAIVASHA */}
        <div className="group relative min-h-[230px] overflow-hidden rounded-[2rem] shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85"
            alt="Lake landscape in Kenya"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/85 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Day 4
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-white">
              Lake Naivasha
            </h3>

          </div>
        </div>

      </div>
    </div>


    {/* ============================================================
        INTRODUCTION
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">

      {/* IMAGE */}
      <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-xl">

        <img
          src={mara3}
          alt="Luxury Kenya safari experience"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/80 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
            Three Iconic Destinations
          </p>

          <p className="mt-1 font-serif text-xl font-bold text-white">
            Mara • Nakuru • Naivasha
          </p>
        </div>
      </div>


      {/* CONTENT */}
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
              A Journey Through Kenya
            </h3>
          </div>

        </div>

        <p className="leading-8 text-slate-600">
          This five-day luxury safari combines the spectacular wildlife of
          the Masai Mara with the scenic landscapes of Lake Nakuru and the
          peaceful surroundings of Lake Naivasha. Each destination offers
          a unique safari experience, from the open savannahs of the Mara
          to the wildlife-rich shores of Lake Nakuru and the tranquil
          waters of Lake Naivasha.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          Enjoy comfortable accommodation, professionally guided game
          drives, delicious meals, and carefully planned transfers as you
          explore some of Kenya's most memorable landscapes and wildlife
          destinations.
        </p>


        {/* HIGHLIGHT BOX */}
        <div className="mt-7 rounded-2xl border border-[#dba33a]/20 bg-[#fffaf0] p-5">

          <div className="flex items-start gap-3">

            <span className="text-xl">
              ✨
            </span>

            <p className="text-sm leading-7 text-slate-600">

              <strong className="text-[#0b4224]">
                Safari highlight:
              </strong>{" "}
              Explore the Masai Mara, Lake Nakuru National Park, and Lake
              Naivasha while searching for iconic African wildlife including
              lions, elephants, buffaloes, leopards, rhinos, giraffes,
              zebras, wildebeest, hippos, and abundant birdlife.

            </p>

          </div>
        </div>


        {/* DESTINATION PATH */}
        <div className="mt-7 flex flex-wrap items-center gap-2">

          {[
            "Nairobi",
            "Masai Mara",
            "Lake Nakuru",
            "Lake Naivasha",
            "Nairobi",
          ].map((place, index) => (
            <React.Fragment key={`${place}-${index}`}>

              <span className="rounded-full bg-white px-3.5 py-2 text-xs font-bold text-[#0b4224] shadow-sm">
                {place}
              </span>

              {index < 4 && (
                <span className="text-[#dba33a]">
                  →
                </span>
              )}

            </React.Fragment>
          ))}

        </div>

      </div>
    </div>


    {/* ============================================================
        ITINERARY HEADER
    ============================================================ */}
    <div className="mt-24 text-center">

      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
        Your Safari Journey
      </span>

      <h3 className="mt-3 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Follow your five-day journey from Nairobi through the Masai Mara,
        Lake Nakuru and Lake Naivasha before returning to Nairobi.
      </p>

    </div>


    {/* ============================================================
        ITINERARY TIMELINE
    ============================================================ */}
    <div className="relative mx-auto mt-14 max-w-5xl">

      {/* TIMELINE */}
      <div className="absolute left-6 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

      <div className="space-y-10">


        {/* ========================================================
            DAY 1
        ======================================================== */}
        <div className="relative md:pl-16">

          <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
            01
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="grid lg:grid-cols-[0.4fr_0.6fr]">

              {/* IMAGE */}
              <div className="relative min-h-[280px]">

                <img
                  src={serengeti3}
                  alt="Masai Mara game drive"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/80 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Nairobi → Masai Mara
                  </span>
                </div>

              </div>


              {/* CONTENT */}
              <div className="p-7 sm:p-9">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 1
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                  Nairobi – Masai Mara National Reserve
                </h4>

                <p className="mt-5 leading-8 text-slate-600">
                  Your safari begins with a drive from Nairobi to the famous
                  Masai Mara National Reserve. Upon arrival, you’ll settle
                  into the camp before heading out for an afternoon game drive.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  The Masai Mara is renowned for its abundant wildlife.
                  You may encounter lions, elephants, buffaloes, leopards,
                  cheetahs, giraffes, zebras, wildebeest, and various
                  antelope species as you explore the open savannah.
                </p>

                <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Accommodation
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      Alama Camp Mara
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Meals
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      Dinner
                    </p>

                    <p className="text-xs text-slate-500">
                      Drinking water provided
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
        <div className="relative md:pl-16">

          <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
            02
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="grid lg:grid-cols-[0.4fr_0.6fr]">

              <div className="relative min-h-[280px]">

                <img
                  src="https://media.jambo.nl/original/galerij/Kenia-Wildlife-Masai-Mara-leeuwen-IS-520772736.jpg"
                  alt="Lions in Masai Mara"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/80 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Full-Day Game Drives
                  </span>
                </div>

              </div>


              <div className="p-7 sm:p-9">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 2
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                  Full-Day Masai Mara Wildlife Experience
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Full-Day Safari
                  </span>

                  <span className="rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Big Five Territory
                  </span>

                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  After breakfast, set out for a full day of game drives
                  across the Masai Mara. Explore the reserve in search of
                  the Big Five: lion, elephant, buffalo, leopard, and rhino.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  You may also encounter cheetahs, giraffes, zebras,
                  wildebeest, gazelles, hippos, hyenas, and a variety of
                  birdlife. Enjoy lunch during the safari before continuing
                  your wildlife exploration through the afternoon.
                </p>


                <div className="mt-6 rounded-2xl border border-[#dba33a]/20 bg-[#fffaf0] p-5">

                  <div className="flex items-start gap-3">

                    <span className="text-xl">
                      🦓
                    </span>

                    <div>

                      <p className="font-bold text-[#0b4224]">
                        Full-Day Wildlife Adventure
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Spend the day exploring the Mara's open plains
                        and searching for predators, elephants, rhinos,
                        wildebeest and other wildlife.
                      </p>

                    </div>

                  </div>
                </div>


                <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Accommodation
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      Alama Camp Mara
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Meals
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="text-xs text-slate-500">
                      Drinking water provided
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
        <div className="relative md:pl-16">

          <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
            03
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="grid lg:grid-cols-[0.4fr_0.6fr]">

              <div className="relative min-h-[280px]">

                <img
                  src="https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/09/2.-Flamingos-and-Rhinos-at-Lake-Nakuru-National-Park-Kenya.jpg?resize=1024%2C573&ssl=1"
                  alt="Lake Nakuru National Park"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/80 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Wildlife & Bird Viewing
                  </span>
                </div>

              </div>


              <div className="p-7 sm:p-9">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 3
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                  Masai Mara – Lake Nakuru National Park
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Wildlife & Bird Viewing
                  </span>

                  <span className="rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Rhino Country
                  </span>

                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  After breakfast, depart the Masai Mara and travel towards
                  Lake Nakuru National Park. Upon arrival, enjoy a game drive
                  through the park, known for its diverse wildlife and
                  beautiful landscapes.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Keep an eye out for rhinos, lions, leopards, buffaloes,
                  giraffes, zebras, waterbucks, and other wildlife. Lake
                  Nakuru is also home to numerous bird species, making it
                  an excellent destination for wildlife and bird viewing.
                </p>

                <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Accommodation
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      Sarova Lion Hill Game Lodge
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Meals
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="text-xs text-slate-500">
                      Drinking water provided
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>


        {/* ========================================================
            DAY 4
        ======================================================== */}
        <div className="relative md:pl-16">

          <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white shadow-lg md:flex">
            04
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="grid lg:grid-cols-[0.4fr_0.6fr]">

              <div className="relative min-h-[280px]">

                <img
                  src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85"
                  alt="Lake Naivasha scenic landscape"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/80 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Scenic Lake Experience
                  </span>
                </div>

              </div>


              <div className="p-7 sm:p-9">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Day 4
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                  Lake Nakuru – Lake Naivasha
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Great Rift Valley
                  </span>

                  <span className="rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Relaxation
                  </span>

                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  After breakfast, enjoy your final moments around Lake
                  Nakuru before continuing to Lake Naivasha. On arrival,
                  check in at the lodge and enjoy lunch.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  The afternoon offers time to relax and take in the peaceful
                  surroundings of Lake Naivasha. The lake and its surroundings
                  are home to hippos, giraffes, zebras, buffaloes, waterbirds,
                  and other wildlife.
                </p>

                <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Accommodation
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      Enashipai Resort & Spa
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Meals
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>

                    <p className="text-xs text-slate-500">
                      Drinking water provided
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>


        {/* ========================================================
            DAY 5
        ======================================================== */}
        <div className="relative md:pl-16">

          <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#dba33a] font-bold text-[#0b4224] shadow-lg md:flex">
            05
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#dba33a]/30 bg-[#fffaf0] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="grid lg:grid-cols-[0.4fr_0.6fr]">

              <div className="relative min-h-[280px]">

                <img
                  src={nakuru2}
                  alt="Kenyan landscape"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#04190d]/85 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0b4224]">
                    Safari Ends
                  </span>
                </div>

              </div>


              <div className="p-7 sm:p-9">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                  Final Day
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224] sm:text-3xl">
                  Lake Naivasha – Nairobi
                </h4>

                <div className="mt-5 flex flex-wrap gap-2">

                  <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0b4224] shadow-sm">
                    Final Morning
                  </span>

                  <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0b4224] shadow-sm">
                    Return to Nairobi
                  </span>

                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  After breakfast, enjoy your final morning at Lake Naivasha
                  before beginning your journey back to Nairobi. As you travel
                  back to the capital, take in the changing landscapes and
                  reflect on the memorable wildlife experiences from the
                  Masai Mara, Lake Nakuru, and Lake Naivasha.
                </p>


                {/* FINAL HIGHLIGHT */}
                <div className="my-7 rounded-2xl bg-[#0b4224] p-6 text-white">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Safari Highlights
                  </p>

                  <p className="mt-3 font-serif text-xl font-bold sm:text-2xl">
                    MASAI MARA • LAKE NAKURU • LAKE NAIVASHA
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Five unforgettable days of wildlife, landscapes,
                    comfortable accommodation and authentic Kenyan
                    safari experiences.
                  </p>

                </div>

                <p className="leading-8 text-slate-600">
                  Arrive in Nairobi later in the day, marking the end of your
                  5-Day Masai Mara, Lake Nakuru & Lake Naivasha Luxury Safari.
                </p>


                <div className="mt-7 grid gap-4 border-t border-[#dba33a]/20 pt-6 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Accommodation
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      None – Safari Ends
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Meals
                    </p>

                    <p className="mt-1 font-semibold text-[#0b4224]">
                      Breakfast & Lunch
                    </p>

                    <p className="text-xs text-slate-500">
                      Drinking water provided
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
        INCLUDED / NOT INCLUDED
    ============================================================ */}
    <div className="mt-24 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/50 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b4224] text-xl text-white shadow-md">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Included
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              Your Safari Includes
            </h3>

          </div>

        </div>


        <div className="mt-8 space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless clearly labeled as optional",
            "All accommodation unless clearly labeled as optional",
            "Professional driver/guide",
            "All transportation unless clearly labeled as optional",
            "All applicable taxes and VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the day-by-day itinerary",
            "Drinks as specified in the itinerary",
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


      {/* NOT INCLUDED */}
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl text-white shadow-md">
            ×
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              Please Note
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#0b4224]">
              Not Included
            </h3>

          </div>

        </div>


        <div className="mt-8 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips and gratuities",
            "Suggested tipping guideline of US$10 per person per day",
            "Personal items and souvenirs",
            "Travel insurance",
            "Visa fees",
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


        {/* OPTIONAL ACTIVITIES */}
        <div className="mt-8 rounded-2xl border border-[#dba33a]/20 bg-[#fffaf0] p-5">

          <div className="flex items-center gap-3">

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dba33a] text-[#0b4224]">
              +
            </span>

            <p className="font-bold text-[#0b4224]">
              Optional Safari Activities
            </p>

          </div>

          <div className="mt-4 space-y-3 text-sm text-slate-600">

            <div className="flex items-center justify-between gap-4">
              <span>
                Additional activities
              </span>

              <span className="font-semibold text-[#0b4224]">
                On request
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

      <img
        src="https://www.flamingotravels.net/_next/image?q=90&url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FPlacesOfInterest%2FMasai-Mara-Game-Drive-Masai-Mara-place-to-visit-intrest-3.jpg&w=1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />

      <div className="absolute inset-0 bg-[#0b4224]/90" />

      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#dba33a]/10" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-4xl">
          🦁
        </span>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Kenyan Safari Adventure
        </p>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Explore Kenya's
          <span className="block text-[#dba33a]">
            Iconic Wildlife Destinations
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
          Discover the wildlife-rich Masai Mara, the scenic beauty of Lake
          Nakuru and the peaceful waters of Lake Naivasha on a carefully
          planned luxury safari.
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
    5-DAY MASAI MARA & AMBOSELI LUXURY SAFARI
============================================================ */}

<section id="5-day-maasaimara" className="relative overflow-hidden bg-white py-20 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HERO / INTRODUCTION
    ======================================================== */}
    <div className="relative min-h-[560px] overflow-hidden rounded-[2rem]">

      {/* SAFARI HERO IMAGE */}
      <img
        src={mara2}
        alt="Masai Mara and Amboseli Luxury Safari"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-[560px] items-center px-7 py-14 sm:px-12 lg:px-16">

        <div className="max-w-3xl text-white">

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md">
            Kenya Luxury Safari
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            5-Day Masai Mara & Amboseli
            <span className="mt-2 block text-amber-400">
              Luxury Safari
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Experience two of Kenya’s most iconic wildlife destinations on an
            unforgettable five-day safari. Discover the legendary Masai Mara,
            renowned for its abundant wildlife and sweeping savannahs, before
            travelling to Amboseli National Park for extraordinary elephant
            encounters beneath the majestic backdrop of Mount Kilimanjaro.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              🦁 Masai Mara
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              🐘 Amboseli
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              ⛰️ Kilimanjaro Views
            </span>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        OVERVIEW CARDS
    ======================================================== */}
    <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-4 sm:px-8">

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            icon: "🗓️",
            label: "Duration",
            value: "5 Days / 4 Nights",
          },
          {
            icon: "🦁",
            label: "Destinations",
            value: "Masai Mara & Amboseli",
          },
          {
            icon: "🐘",
            label: "Wildlife",
            value: "Big Five & Elephants",
          },
          {
            icon: "🏕️",
            label: "Safari Style",
            value: "Luxury Experience",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-1"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl">
                {item.icon}
              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  {item.value}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>


    {/* ========================================================
        SAFARI INTRODUCTION
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-5xl">

      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:p-12">

        <div className="flex flex-col gap-7 md:flex-row">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-600 text-2xl text-white shadow-lg">
            🦁
          </div>

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
              The Safari Experience
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Two Iconic Parks. One Extraordinary Journey.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Experience two of Kenya’s most celebrated wildlife destinations
              on a carefully designed five-day luxury safari. Your adventure
              begins in the Masai Mara, where vast grasslands provide a
              spectacular setting for wildlife viewing and unforgettable game
              drives.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The journey then continues to Amboseli National Park, famous for
              its impressive elephant herds and spectacular views of Mount
              Kilimanjaro. From predator encounters in the Mara to elephants
              crossing the open plains of Amboseli, every day offers a new
              perspective on Kenya’s remarkable wilderness.
            </p>

            <div className="mt-7 rounded-2xl border-l-4 border-amber-500 bg-white p-5">

              <p className="text-sm leading-7 text-slate-600">
                <strong className="text-slate-900">
                  Safari highlights:
                </strong>{" "}
                Masai Mara game drives, Big Five wildlife viewing, luxury camp
                accommodation, Amboseli elephant encounters, and spectacular
                Mount Kilimanjaro scenery.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        ITINERARY HEADER
    ======================================================== */}
    <div className="mx-auto mt-24 max-w-4xl text-center">

      <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
        Your Safari Journey
      </span>

      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
        Day-by-Day Itinerary
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
        Journey from Nairobi into the heart of Kenya’s wilderness, combining
        exceptional wildlife viewing in the Masai Mara with the iconic
        elephant country of Amboseli.
      </p>

    </div>


    {/* ========================================================
        TIMELINE
    ======================================================== */}
    <div className="relative mx-auto mt-14 max-w-5xl">

      {/* TIMELINE LINE */}
      <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-slate-200 md:block" />


      {/* ======================================================
          DAY 1
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-sm font-extrabold text-white shadow-lg md:flex">
          01
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 1
          </span>

          <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
            Nairobi – Masai Mara National Reserve
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Your safari begins with a journey from Nairobi to the world-famous
            Masai Mara National Reserve. Upon arrival, you will settle into
            your camp before heading out for your first game drive.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The Masai Mara is home to an incredible variety of wildlife.
            During your afternoon exploration, you may encounter lions,
            elephants, buffaloes, leopards, cheetahs, giraffes, zebras,
            wildebeest, and various antelope species.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            As the day comes to an end, return to camp for dinner and a
            relaxing evening surrounded by the sounds of the African
            wilderness.
          </p>

          {/* WILDLIFE STRIP */}
          <div className="mt-7 flex flex-wrap gap-2">

            {[
              "Lions",
              "Elephants",
              "Buffaloes",
              "Leopards",
              "Cheetahs",
              "Giraffes",
              "Zebras",
              "Wildebeest",
            ].map((animal) => (
              <span
                key={animal}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {animal}
              </span>
            ))}

          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Alama Camp Mara
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Dinner
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 2
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-sm font-extrabold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 2
          </span>

          <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
            Full-Day Masai Mara Wildlife Experience
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, set out for a full day of game drives across the
            Masai Mara’s open grasslands. The reserve offers excellent
            opportunities to encounter the Big Five, including lions,
            elephants, buffaloes, leopards, and rhinos.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Throughout the day, you may also encounter cheetahs, giraffes,
            zebras, hippos, hyenas, wildebeest, gazelles, and a wide variety
            of birdlife. Enjoy lunch during the day before continuing your
            exploration of the reserve.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Keep your eyes open for predators resting in the grass, large
            herds moving across the plains, and other fascinating wildlife
            encounters. Return to camp in the evening for dinner and a
            peaceful overnight stay.
          </p>

          {/* BIG FIVE */}
          <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Wildlife Focus
            </p>

            <p className="mt-2 text-xl font-extrabold">
              Big Five Safari Experience
            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              {[
                "Lion",
                "Elephant",
                "Buffalo",
                "Leopard",
                "Rhino",
              ].map((animal) => (
                <span
                  key={animal}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold"
                >
                  {animal}
                </span>
              ))}

            </div>

          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Alama Camp Mara
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-sm font-extrabold text-white shadow-lg md:flex">
          03
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 3
          </span>

          <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
            Masai Mara – Amboseli National Park
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, depart the Masai Mara and travel toward Amboseli
            National Park. Upon arrival, settle into your lodge before heading
            out for an afternoon game drive.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Amboseli is particularly famous for its large elephant herds,
            often seen moving across the open plains with Mount Kilimanjaro
            providing a spectacular backdrop.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            During your game drive, you may also encounter lions, buffaloes,
            giraffes, zebras, wildebeest, hyenas, hippos, and numerous bird
            species. After an exciting afternoon in the park, return to the
            lodge for dinner and relaxation.
          </p>

          {/* KILIMANJARO HIGHLIGHT */}
          <div className="mt-7 rounded-2xl border border-amber-100 bg-amber-50 p-6">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Amboseli Highlight
            </p>

            <p className="mt-2 text-xl font-extrabold text-slate-900">
              Elephants Beneath Mount Kilimanjaro
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Watch Amboseli’s iconic elephant herds move across the plains
              while Mount Kilimanjaro rises dramatically in the distance.
            </p>

          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Ol Tukai Lodge
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-sm font-extrabold text-white shadow-lg md:flex">
          04
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 4
          </span>

          <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
            Full-Day Amboseli Wildlife Experience
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Wake up to beautiful views of Mount Kilimanjaro before setting out
            for a full day of wildlife exploration in Amboseli National Park.
            Explore the park’s open plains, wetlands, and woodland areas,
            which provide excellent opportunities for wildlife viewing.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Look out for large elephant herds, lions, buffaloes, giraffes,
            zebras, wildebeest, hyenas, antelopes, and a variety of bird
            species. The wetlands are particularly rich in wildlife,
            attracting elephants and other animals throughout the day.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            With Mount Kilimanjaro rising in the background, the day offers
            plenty of opportunities for memorable wildlife encounters and
            photographs. Return to the lodge for your final evening in
            Amboseli.
          </p>

          {/* EXPERIENCE CARDS */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            {[
              {
                icon: "🐘",
                title: "Elephant Country",
                text: "Encounter large elephant herds across the Amboseli plains.",
              },
              {
                icon: "⛰️",
                title: "Kilimanjaro Views",
                text: "Enjoy spectacular mountain scenery throughout the day.",
              },
              {
                icon: "📷",
                title: "Photography",
                text: "Capture unforgettable wildlife and landscape moments.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >

                <div className="text-2xl">
                  {item.icon}
                </div>

                <h4 className="mt-3 font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Ol Tukai Lodge
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast, Lunch & Dinner
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 5
      ====================================================== */}
      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-extrabold text-white shadow-lg md:flex">
          05
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-white shadow-sm transition duration-300 hover:shadow-xl">

          <div className="bg-slate-950 px-7 py-5 text-white sm:px-9">

            <div className="flex flex-wrap items-center justify-between gap-3">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  Final Day
                </p>

                <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">
                  Farewell to the Kenyan Wilderness
                </h3>

              </div>

              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                Nairobi
              </div>

            </div>

          </div>

          <div className="p-7 sm:p-9">

            <h4 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Amboseli – Nairobi
            </h4>

            <p className="mt-6 leading-8 text-slate-600">
              After breakfast, enjoy your final moments in Amboseli before
              beginning your journey back to Nairobi. Depending on the day's
              schedule, you may have an opportunity for a final look at the
              surrounding landscapes and wildlife before departing the park.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Continue your journey to Nairobi, arriving later in the day and
              marking the end of your Masai Mara and Amboseli Luxury Safari.
            </p>

            <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-center text-white sm:p-9">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                Safari Complete
              </p>

              <p className="mt-3 text-2xl font-black sm:text-3xl">
                Five Days of Wild Kenya
              </p>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
                From the legendary plains of the Masai Mara to the elephant
                country of Amboseli, take home unforgettable memories of
                Kenya’s remarkable landscapes and wildlife.
              </p>

            </div>

            <div className="mt-7 grid gap-4 border-t border-amber-100 pt-6 sm:grid-cols-2">

              <div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Accommodation
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  None – Tour Ends
                </p>

              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Meals
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  Breakfast & Lunch
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        INCLUSIONS & EXCLUSIONS
    ======================================================== */}
    <div className="mt-24 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/50 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Included
            </p>

            <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
              What Your Safari Includes
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "Park fees for non-residents",
            "All safari activities unless clearly labeled as optional",
            "All accommodation unless clearly labeled as optional",
            "Professional driver/guide",
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


      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white">
            +
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Excluded
            </p>

            <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
              Additional Expenses
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips and gratuities",
            "Suggested tipping guideline: US$10 per person per day",
            "Personal items and souvenirs",
            "Travel insurance",
            "Visa fees",
            "Government-imposed increases in taxes and/or park fees",
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
        SAFARI HIGHLIGHTS
    ======================================================== */}
    <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🦁",
          title: "Masai Mara",
          text: "Explore one of Kenya's most celebrated wildlife destinations.",
        },
        {
          icon: "🐘",
          title: "Amboseli",
          text: "Experience spectacular elephant encounters across open plains.",
        },
        {
          icon: "⛰️",
          title: "Kilimanjaro",
          text: "Enjoy breathtaking views of Africa's iconic mountain.",
        },
        {
          icon: "📸",
          title: "Wildlife Moments",
          text: "Create unforgettable memories through exceptional game viewing.",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl">
            {item.icon}
          </div>

          <h4 className="mt-4 font-extrabold text-slate-900">
            {item.title}
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {item.text}
          </p>

        </div>

      ))}

    </div>


    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-14 text-center sm:px-12 lg:py-16">

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Your Kenyan Safari Awaits
        </p>

        <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
          Ready to Explore the Wild?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Discover the legendary Masai Mara, encounter Amboseli’s iconic
          elephants, and experience the beauty of Kenya on a carefully planned
          luxury safari.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Plan Your Safari
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 font-bold text-white transition hover:bg-white/10"
          >
            Request a Quote
          </a>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ============================================================
    4-DAY MASAI MARA LUXURY PLUS SAFARI
============================================================ */}
<section
  id="4-day-masai-mara-luxury-plus"
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

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dba33a]/30 bg-white px-4 py-2 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b4224]">
          Luxury Safari • Masai Mara
        </span>
      </div>

      <h2 className="text-4xl font-black leading-tight tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        4-Day Masai Mara
        <span className="block text-[#0b4224]">
          Luxury Plus Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience four unforgettable days in the legendary Masai Mara
        National Reserve, enjoying an exclusive luxury safari with extended
        time to explore the spectacular savannah and encounter some of
        Africa's most iconic wildlife.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "4 Days / 3 Nights",
          icon: "01",
        },
        {
          label: "Destination",
          value: "Masai Mara",
          icon: "02",
        },
        {
          label: "Safari Style",
          value: "Luxury Plus",
          icon: "03",
        },
        {
          label: "Wildlife",
          value: "Big Five & More",
          icon: "04",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b4224] text-xs font-bold text-white">
            {item.icon}
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {item.label}
          </p>

          <p className="mt-1 font-bold text-[#092d1a]">
            {item.value}
          </p>
        </div>
      ))}
    </div>

    {/* ========================================================
        SAFARI HIGHLIGHT
    ======================================================== */}
    <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[2rem] bg-[#0b4224] shadow-xl">
      <div className="grid lg:grid-cols-[1fr_1.1fr]">

        <div className="relative min-h-[300px] overflow-hidden">
          <img
            src={mara3}
            alt="Masai Mara wildlife safari"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-[#0b4224]/70" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
              Masai Mara National Reserve
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 text-white sm:p-10 lg:p-12">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            Safari Highlight
          </p>

          <h3 className="mt-3 text-3xl font-black sm:text-4xl">
            Four Days in the Heart of the Mara
          </h3>

          <p className="mt-5 leading-8 text-white/75">
            With three nights at &Beyond Bateleur Camp, this journey gives
            you extended time to explore the Masai Mara. Enjoy morning,
            afternoon and full-day game drives across the reserve while
            searching for lions, elephants, leopards, cheetahs, buffaloes,
            giraffes, zebras and many other species.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Big Five",
              "Luxury Camp",
              "Extended Game Drives",
              "Private Safari Experience",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-5xl">

      <div className="mb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Journey
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Day-by-Day Itinerary
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Four carefully planned days combining luxury accommodation,
          extended wildlife viewing and unforgettable Masai Mara experiences.
        </p>
      </div>

      <div className="relative">

        {/* TIMELINE LINE */}
        <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-[#0b4224]/15 sm:left-7 md:block" />

        <div className="space-y-8">

          {/* ==================================================
              DAY 1
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">01</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 1
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Nairobi – Masai Mara National Reserve
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your safari begins in Nairobi, where you will be picked up
                  by a representative from Daffar Tours and Travel and driven
                  to the Masai Mara National Reserve. Upon arrival, check in
                  to your camp and enjoy lunch.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  In the afternoon, head out for your first game drive across
                  the Mara's expansive savannah plains. Look out for lions,
                  elephants, leopards, cheetahs, buffaloes, giraffes, zebras
                  and other wildlife as you begin your safari adventure.
                  Return to your camp in the evening for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      &Beyond Bateleur Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 2
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">02</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 2
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Full-Day Masai Mara National Reserve
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, spend the day exploring the Masai Mara on
                  game drives through its diverse landscapes. The reserve
                  offers excellent opportunities to encounter the Big Five,
                  including lions, elephants, leopards and buffaloes, as well
                  as cheetahs, giraffes, zebras, hippos and numerous other
                  species.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Enjoy lunch before continuing your exploration in the
                  afternoon, searching for more wildlife and taking in the
                  spectacular scenery of the Mara. Return to your camp in the
                  evening for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      &Beyond Bateleur Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 3
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">03</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 3
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Full-Day Masai Mara National Reserve
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, embark on another full day of wildlife
                  exploration in the Masai Mara. Continue your game drives
                  across the vast grasslands, with opportunities to see lions,
                  leopards, cheetahs, elephants, buffaloes, giraffes, zebras
                  and antelopes.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  The extra day allows you more time to explore different
                  areas of the reserve and enjoy unforgettable wildlife
                  encounters. Enjoy lunch before continuing with your
                  afternoon game drive. As the day comes to an end, return to
                  your camp for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      &Beyond Bateleur Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 4
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">04</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 4
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Masai Mara – Nairobi
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Begin your final morning with an early game drive in the
                  Masai Mara, giving you one last opportunity to experience
                  the reserve's incredible wildlife.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Return to your camp for breakfast before preparing for
                  departure. After lunch, begin your journey back to Nairobi,
                  where you will be dropped off at your hotel, residence or
                  another agreed location.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      No Accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast & Lunch
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>

    {/* ========================================================
        SAFARI EXPERIENCE
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-6xl">

      <div className="rounded-[2rem] border border-[#dba33a]/20 bg-white p-7 shadow-sm sm:p-10">

        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            What Makes This Safari Special
          </p>

          <h3 className="mt-3 text-3xl font-black text-[#092d1a]">
            More Time. More Wildlife. More Mara.
          </h3>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Big Five",
              text: "Search for lions, elephants, leopards, buffaloes and other iconic wildlife.",
            },
            {
              title: "Extended Drives",
              text: "Three full days of exploration provide more opportunities for exceptional sightings.",
            },
            {
              title: "Luxury Stay",
              text: "Enjoy three nights at the exclusive &Beyond Bateleur Camp.",
            },
            {
              title: "Mara Landscapes",
              text: "Experience breathtaking savannah plains and diverse wildlife habitats.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#f7faf7] p-6"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-[#0b4224] p-2.5">
                <div className="h-full w-full rounded-md border border-white/40" />
              </div>

              <h4 className="font-black text-[#092d1a]">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-7 text-gray-600">
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
    <div className="mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
              Your Safari Includes
            </p>

            <h3 className="text-2xl font-black text-[#092d1a]">
              Included
            </h3>
          </div>
        </div>

        <div className="mt-7 space-y-3">

          {[
            "Park fees for non-residents",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-[#f7faf7] px-4 py-3"
            >
              <span className="mt-0.5 font-bold text-[#0b4224]">
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
      <div className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
              Please Note
            </p>

            <h3 className="text-2xl font-black text-[#092d1a]">
              Excluded
            </h3>
          </div>
        </div>

        <div className="mt-7 space-y-3">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips — recommended US$10–15 per person per day",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3"
            >
              <span className="mt-0.5 font-bold text-gray-500">
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

    {/* ========================================================
        OPTIONAL ACTIVITIES
    ======================================================== */}
    <div className="mx-auto mt-12 max-w-6xl">

      <div className="rounded-[2rem] bg-[#092d1a] p-7 text-white sm:p-10">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Enhance Your Safari
            </p>

            <h3 className="mt-2 text-3xl font-black">
              Optional Safari Activities
            </h3>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            Add an unforgettable experience to your Masai Mara adventure.
          </p>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-bold">
                Balloon Safari
              </h4>

              <span className="rounded-full bg-[#f5c45d] px-3 py-1 text-xs font-black text-[#092d1a]">
                USD 500 / Person
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Experience the Masai Mara from above with an unforgettable
              sunrise hot-air balloon safari.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-bold">
                Maasai Village Visit
              </h4>

              <span className="rounded-full bg-[#f5c45d] px-3 py-1 text-xs font-black text-[#092d1a]">
                USD 50 / Person
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Meet members of the Maasai community and experience their
              traditional culture and way of life.
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-xl sm:px-12 sm:py-14">

      <div className="mx-auto max-w-3xl">

        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
          Daffar Tours & Travel
        </span>

        <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Experience the Masai Mara in Luxury
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Spend four unforgettable days exploring one of Africa's greatest
          wildlife destinations with exceptional accommodation and extended
          game-viewing opportunities.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#f5c45d] px-7 py-3.5 text-sm font-black text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Plan This Safari
            <span className="ml-2">→</span>
          </Link>

          <a
            href="https://wa.me/+254708164662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#092d1a]"
          >
            WhatsApp Us
          </a>

        </div>
      </div>
    </div>

  </div>
</section>

{/* ============================================================
    6-DAY MASAI MARA & LAKE NAKURU LUXURY PLUS
    + 2-DAY DIANI BEACH EXTENSION
============================================================ */}
<section
  id="4-day-masai-mara-lake-nakuru-2-day-diani"
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

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dba33a]/30 bg-white px-4 py-2 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b4224]">
          Luxury Safari • Beach Extension
        </span>
      </div>

      <h2 className="text-4xl font-black leading-tight tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        4-Day Masai Mara & Lake Nakuru
        <span className="block text-[#0b4224]">
          + 2-Day Diani Beach Extension
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an exceptional Kenya journey combining the wildlife-rich
        Masai Mara and Lake Nakuru with a relaxing extension along the
        beautiful Diani Beach. Enjoy luxury accommodation, spectacular
        wildlife encounters and the tropical beauty of Kenya's Indian Ocean
        coast.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "6 Days / 5 Nights",
          icon: "01",
        },
        {
          label: "Safari",
          value: "Masai Mara & Lake Nakuru",
          icon: "02",
        },
        {
          label: "Beach Extension",
          value: "Diani Beach",
          icon: "03",
        },
        {
          label: "Travel Style",
          value: "Luxury Plus",
          icon: "04",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b4224] text-xs font-bold text-white">
            {item.icon}
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {item.label}
          </p>

          <p className="mt-1 font-bold text-[#092d1a]">
            {item.value}
          </p>
        </div>
      ))}
    </div>

    {/* ========================================================
        JOURNEY HIGHLIGHT
    ======================================================== */}
    <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[2rem] bg-[#0b4224] shadow-xl">

      <div className="grid lg:grid-cols-[1fr_1.1fr]">

        <div className="relative min-h-[320px] overflow-hidden">
          <img
            src={mara4}
            alt="Masai Mara luxury safari"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-[#0b4224]/75" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
              Safari → Wildlife → Beach
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 text-white sm:p-10 lg:p-12">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            Journey Highlight
          </p>

          <h3 className="mt-3 text-3xl font-black sm:text-4xl">
            From the Mara to the Indian Ocean
          </h3>

          <p className="mt-5 leading-8 text-white/75">
            Begin with unforgettable wildlife experiences in the Masai Mara,
            continue to the scenic landscapes and rhino-rich environment of
            Lake Nakuru, then unwind on the white sandy beaches of Diani.
            This itinerary combines Kenya's iconic safari destinations with
            a peaceful tropical escape.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Big Five",
              "Luxury Camps",
              "Lake Nakuru",
              "Diani Beach",
              "Indian Ocean",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-5xl">

      <div className="mb-12 text-center">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Journey
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Day-by-Day Itinerary
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Four days of safari adventure followed by two relaxing days on
          Kenya's spectacular Indian Ocean coast.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE */}
        <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-[#0b4224]/15 sm:left-7 md:block" />

        <div className="space-y-8">

          {/* ==================================================
              DAY 1
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">01</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 1
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Nairobi – Masai Mara National Reserve
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your journey begins in Nairobi, where you will be picked up
                  by a representative from Daffar Tours and Travel and driven
                  to the Masai Mara National Reserve.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Upon arrival, check in to your camp and enjoy lunch before
                  heading out for your first afternoon game drive. Explore the
                  spectacular Mara savannah in search of lions, elephants,
                  leopards, cheetahs, buffaloes, giraffes and zebras, among
                  other wildlife. Return to your camp in the evening for
                  dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      &Beyond Kichwa Tembo Tented Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 2
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">02</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 2
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Full-Day Masai Mara National Reserve
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, spend the day exploring the Masai Mara with
                  game drives across its expansive grasslands. The reserve
                  offers excellent opportunities to encounter lions, leopards,
                  cheetahs, elephants, buffaloes, giraffes, zebras and hippos,
                  together with a variety of other wildlife and bird species.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Enjoy lunch before continuing your wildlife adventure
                  through the reserve, taking in the dramatic landscapes and
                  exceptional game viewing. Return to your camp in the evening
                  for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      &Beyond Kichwa Tembo Tented Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 3
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">03</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 3
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Masai Mara – Lake Nakuru National Park
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart the Masai Mara and travel towards
                  Lake Nakuru National Park. Upon arrival, enjoy lunch before
                  heading out for an afternoon game drive.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Explore the park's scenic landscapes while searching for
                  rhinos, lions, leopards, buffaloes, giraffes, zebras and
                  waterbuck. Return to your accommodation in the evening for
                  dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      The Cliff
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 4
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">04</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 4
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Lake Nakuru – Diani Beach
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Enjoy breakfast before departing Lake Nakuru for your
                  journey to Diani Beach, Kenya's spectacular Indian Ocean
                  paradise.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Upon arrival, check in to your resort and settle into the
                  beautiful coastal surroundings. Spend the remainder of the
                  day relaxing and enjoying the white sandy beaches and warm
                  tropical atmosphere. Dinner and overnight at your resort.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Diani Sea Resort
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Experience
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Indian Ocean Coast
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 5
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">05</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 5
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Full Day Diani Beach
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Enjoy a relaxing day in Diani Beach. Take time to unwind at
                  your resort and enjoy the beautiful coastline, white sandy
                  beaches and turquoise waters of the Indian Ocean.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  This is the perfect opportunity to relax after your safari
                  adventure while enjoying the peaceful tropical setting.
                  Spend the evening at your resort before dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Diani Sea Resort
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Experience
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Beach Relaxation
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 6
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">06</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 6
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Diani Beach – Nairobi
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Enjoy your final morning in Diani with breakfast and time to
                  relax before departure. After lunch, begin your journey back
                  to Nairobi.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  You will be dropped off at your hotel, residence or another
                  agreed location, marking the end of your safari and Diani
                  Beach extension with Daffar Tours and Travel.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      No Accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast & Lunch
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-1 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>

    {/* ========================================================
        JOURNEY HIGHLIGHTS
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-6xl">

      <div className="rounded-[2rem] border border-[#dba33a]/20 bg-white p-7 shadow-sm sm:p-10">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Journey Highlights
          </p>

          <h3 className="mt-3 text-3xl font-black text-[#092d1a]">
            Safari Meets the Coast
          </h3>

        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Masai Mara",
              text: "Explore one of Kenya's most iconic wildlife destinations and search for the Big Five.",
            },
            {
              title: "Lake Nakuru",
              text: "Discover scenic landscapes and look for rhinos, lions, leopards and other wildlife.",
            },
            {
              title: "Diani Beach",
              text: "Relax beside white sandy beaches and turquoise Indian Ocean waters.",
            },
            {
              title: "Luxury Stay",
              text: "Enjoy carefully selected luxury accommodation throughout your journey.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#f7faf7] p-6"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-[#0b4224] p-2.5">
                <div className="h-full w-full rounded-md border border-white/40" />
              </div>

              <h4 className="font-black text-[#092d1a]">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-7 text-gray-600">
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
    <div className="mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
              Your Journey Includes
            </p>

            <h3 className="text-2xl font-black text-[#092d1a]">
              Included
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-3">

          {[
            "Park fees for non-residents",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-[#f7faf7] px-4 py-3"
            >
              <span className="mt-0.5 font-bold text-[#0b4224]">
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
      <div className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
              Please Note
            </p>

            <h3 className="text-2xl font-black text-[#092d1a]">
              Excluded
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-3">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips — recommended US$10–15 per person per day",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3"
            >
              <span className="mt-0.5 font-bold text-gray-500">
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

    {/* ========================================================
        OPTIONAL ACTIVITIES
    ======================================================== */}
    <div className="mx-auto mt-12 max-w-6xl">

      <div className="rounded-[2rem] bg-[#092d1a] p-7 text-white sm:p-10">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Enhance Your Adventure
            </p>

            <h3 className="mt-2 text-3xl font-black">
              Optional Safari Activities
            </h3>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            Add extra experiences to make your Kenya adventure even more
            memorable.
          </p>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-center justify-between gap-4">
              <h4 className="font-bold">
                Balloon Safari
              </h4>

              <span className="rounded-full bg-[#f5c45d] px-3 py-1 text-xs font-black text-[#092d1a]">
                USD 500 / Person
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Take to the skies above the Masai Mara for an unforgettable
              sunrise balloon experience.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-center justify-between gap-4">
              <h4 className="font-bold">
                Maasai Village Visit
              </h4>

              <span className="rounded-full bg-[#f5c45d] px-3 py-1 text-xs font-black text-[#092d1a]">
                USD 50 / Vehicle
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Visit a Maasai village and experience traditional culture,
              community life and local traditions.
            </p>

          </div>

        </div>
      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-xl sm:px-12 sm:py-14">

      <div className="mx-auto max-w-3xl">

        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
          Daffar Tours & Travel
        </span>

        <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Safari Today. Beach Tomorrow.
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Combine Kenya's spectacular wildlife with the tropical beauty of
          Diani Beach in one unforgettable luxury journey.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#f5c45d] px-7 py-3.5 text-sm font-black text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Plan This Journey
            <span className="ml-2">→</span>
          </Link>

          <a
            href="https://wa.me/+254708164662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#092d1a]"
          >
            WhatsApp Us
          </a>

        </div>
      </div>
    </div>

  </div>
</section>

{/* ============================================================
    3-DAY BEST OF WILDEBEEST MIGRATION SAFARI
============================================================ */}
<section
  id="3-day-wildebeest-migration"
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

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dba33a]/30 bg-white px-4 py-2 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b4224]">
          Great Wildebeest Migration • Masai Mara
        </span>
      </div>

      <h2 className="text-4xl font-black leading-tight tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        3-Day Best of
        <span className="block text-[#0b4224]">
          Wildebeest Migration Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        This unforgettable journey is crafted to immerse you in one of
        nature's most spectacular events: the great wildebeest migration.
        With two nights in the Masai Mara, enjoy ample opportunity to witness
        thousands of animals sweeping across the vast plains, offering a
        front-row seat to the pulse of the wild.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "3 Days / 2 Nights",
          icon: "01",
        },
        {
          label: "Destination",
          value: "Masai Mara",
          icon: "02",
        },
        {
          label: "Safari Focus",
          value: "Wildebeest Migration",
          icon: "03",
        },
        {
          label: "Experience",
          value: "Big Five & Wildlife",
          icon: "04",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b4224] text-xs font-bold text-white">
            {item.icon}
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {item.label}
          </p>

          <p className="mt-1 font-bold text-[#092d1a]">
            {item.value}
          </p>
        </div>
      ))}
    </div>

    {/* ========================================================
        MIGRATION HIGHLIGHT
    ======================================================== */}
    <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[2rem] bg-[#0b4224] shadow-xl">

      <div className="grid lg:grid-cols-[1fr_1.1fr]">

        <div className="relative min-h-[320px] overflow-hidden">

          <img
            src={mara4}
            alt="Wildebeest migration in the Masai Mara"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-[#0b4224]/75" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b4224]">
              The Great Wildebeest Migration
            </span>
          </div>

        </div>

        <div className="flex flex-col justify-center p-8 text-white sm:p-10 lg:p-12">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            Safari Highlight
          </p>

          <h3 className="mt-3 text-3xl font-black sm:text-4xl">
            Witness the Pulse of the Wild
          </h3>

          <p className="mt-5 leading-8 text-white/75">
            Spend two nights in the Masai Mara with extended opportunities to
            experience the extraordinary wildebeest migration. Watch massive
            herds move across the savannah while predators follow closely
            behind, creating some of Africa's most dramatic wildlife scenes.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">

            {[
              "Wildebeest",
              "Zebras",
              "Big Five",
              "Predators",
              "Luxury Camp",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90"
              >
                {tag}
              </span>
            ))}

          </div>
        </div>

      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-5xl">

      <div className="mb-12 text-center">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Journey
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Day-by-Day Itinerary
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Three carefully planned days combining luxury accommodation,
          spectacular game drives and an unforgettable migration experience.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE */}
        <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-[#0b4224]/15 sm:left-7 md:block" />

        <div className="space-y-8">

          {/* ==================================================
              DAY 1
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">
                01
              </span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 1
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Nairobi – Masai Mara National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your safari adventure begins in Nairobi, where a
                  representative from Daffar Tours and Travel will warmly
                  welcome you. From here, you will transfer by road to the
                  Masai Mara National Reserve, one of the world's most iconic
                  safari destinations.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  After check-in and lunch at &Beyond Bateleur Camp, you will
                  enjoy your first thrilling afternoon game drive, encountering
                  elephants, buffaloes, lions, leopards, zebras, giraffes and
                  more. The Mara is also home to the Big Five and countless
                  bird species.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-1 font-bold text-[#092d1a]">
                      &Beyond Bateleur Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meals
                    </p>

                    <p className="mt-1 font-bold text-[#092d1a]">
                      Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>

                    <p className="mt-1 font-bold text-[#092d1a]">
                      Included
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 2
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">
                02
              </span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 2
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Full Day in the Masai Mara
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Wake up early for a sunrise game drive in the Masai Mara,
                  where the golden morning light offers the perfect backdrop
                  for photography. Witness predators on the hunt and herds of
                  wildebeest and zebras grazing across the savanna.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  An optional hot air balloon safari provides breathtaking
                  aerial views of the migration followed by a bush breakfast.
                  In the afternoon, continue exploring the Mara, keeping an
                  eye out for rhinos, hyenas, jackals and cheetahs. The day
                  concludes with a relaxing evening back at your luxury camp.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-1 font-bold text-[#092d1a]">
                      &Beyond Bateleur Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meals
                    </p>

                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>

                    <p className="mt-1 font-bold text-[#092d1a]">
                      Included
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 3
          ================================================== */}
          <article className="relative md:pl-20">

            <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg md:flex">
              <span className="text-xs font-black text-white">
                03
              </span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 text-white sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 3
                </p>

                <h4 className="mt-1 text-2xl font-black">
                  Masai Mara – Nairobi
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, visit a Maasai village for an authentic
                  cultural experience before beginning your scenic return
                  journey to Nairobi.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  The safari concludes with unforgettable memories of the
                  majestic wildebeest migration and the wildlife wonders of
                  the Masai Mara.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-1 font-bold text-[#092d1a]">
                      No Accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Meals
                    </p>

                    <p className="mt-1 font-bold text-[#092d1a]">
                      Breakfast & Lunch
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Drinking Water
                    </p>

                    <p className="mt-1 font-bold text-[#092d1a]">
                      Included
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>

    {/* ========================================================
        MIGRATION EXPERIENCE
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-6xl">

      <div className="rounded-[2rem] border border-[#dba33a]/20 bg-white p-7 shadow-sm sm:p-10">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Migration Experience
          </p>

          <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
            Experience the Great Migration
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            The Masai Mara provides an extraordinary setting for witnessing
            the movement of massive wildlife herds across the savannah.
          </p>

        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Wildebeest Herds",
              text: "Witness huge herds of wildebeest moving across the Mara's vast grasslands.",
            },
            {
              title: "Zebra Herds",
              text: "See thousands of zebras travelling alongside the migrating wildebeest.",
            },
            {
              title: "Predator Action",
              text: "Look for lions, leopards, cheetahs, hyenas and other predators following the herds.",
            },
            {
              title: "Big Five",
              text: "The Mara offers excellent opportunities to encounter the iconic Big Five.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#f7faf7] p-6"
            >

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b4224] text-sm font-black text-white">
                ✓
              </div>

              <h4 className="font-black text-[#092d1a]">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-7 text-gray-600">
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
    <div className="mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
              Your Safari Includes
            </p>

            <h3 className="text-2xl font-black text-[#092d1a]">
              Included
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-3">

          {[
            "Park fees for non-residents",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "Professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-[#f7faf7] px-4 py-3"
            >
              <span className="mt-0.5 font-bold text-[#0b4224]">
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
      <div className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#dba33a]">
              Please Note
            </p>

            <h3 className="text-2xl font-black text-[#092d1a]">
              Excluded
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-3">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips — US$15 per person per day",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3"
            >
              <span className="mt-0.5 font-bold text-gray-500">
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

    {/* ========================================================
        OPTIONAL ACTIVITIES
    ======================================================== */}
    <div className="mx-auto mt-12 max-w-6xl">

      <div className="rounded-[2rem] bg-[#092d1a] p-7 text-white sm:p-10">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Enhance Your Safari
            </p>

            <h3 className="mt-2 text-3xl font-black">
              Optional Safari Activities
            </h3>

          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            Add an extra experience to make your Masai Mara migration safari
            even more memorable.
          </p>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          {/* BALLOON */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-start justify-between gap-3">

              <h4 className="font-bold">
                Balloon Safari
              </h4>

              <span className="whitespace-nowrap rounded-full bg-[#f5c45d] px-3 py-1 text-xs font-black text-[#092d1a]">
                USD 500 / Person
              </span>

            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Soar above the Masai Mara at sunrise for breathtaking aerial
              views of the migration, followed by a bush breakfast.
            </p>

          </div>

          {/* MAASAI VILLAGE */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-start justify-between gap-3">

              <h4 className="font-bold">
                Maasai Village Visit
              </h4>

              <span className="whitespace-nowrap rounded-full bg-[#f5c45d] px-3 py-1 text-xs font-black text-[#092d1a]">
                USD 50 / Vehicle
              </span>

            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Experience Maasai culture and gain insight into traditional
              community life around the Mara.
            </p>

          </div>

          {/* GUIDED GAME DRIVE */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-start justify-between gap-3">

              <h4 className="font-bold">
                Guided Game Drive
              </h4>

              <span className="whitespace-nowrap rounded-full bg-[#f5c45d] px-3 py-1 text-xs font-black text-[#092d1a]">
                USD 120 / Person
              </span>

            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Enjoy an enhanced guided wildlife experience focused on the
              migration and the Mara's exceptional wildlife.
            </p>

          </div>

        </div>
      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-xl sm:px-12 sm:py-14">

      <div className="mx-auto max-w-3xl">

        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
          Daffar Tours & Travel
        </span>

        <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Witness the Great Wildebeest Migration
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Experience the incredible movement of wildebeest and zebras across
          the Masai Mara while enjoying a premium safari experience with
          Daffar Tours & Travel.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#f5c45d] px-7 py-3.5 text-sm font-black text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Plan This Safari
            <span className="ml-2">
              →
            </span>
          </Link>

          <a
            href="https://wa.me/+254708164662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#092d1a]"
          >
            WhatsApp Us
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
          href="https://wa.me/+254708164662"
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
            src={mara2}
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
          href="https://wa.me/+254708164662"
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
    4-DAY MASAI MARA & LAKE NAKURU NATIONAL PARK LUXURY SAFARI
============================================================ */}

<section
  id="4-day-masai-mara-lake-nakuru-luxury"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ==========================================================
      BACKGROUND DECORATION
  ========================================================== */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0b4224]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dba33a]/30 bg-[#fffaf0] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9a6a08]">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        Luxury Safari
      </div>

      <h2 className="text-4xl font-black tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        4-Day Masai Mara &
        <span className="block text-[#dba33a]">
          Lake Nakuru Luxury Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an exciting four-day luxury safari exploring two of
        Kenya's most renowned wildlife destinations. Discover the spectacular
        savannahs of the Masai Mara National Reserve before continuing to Lake
        Nakuru National Park, home to rhinos, diverse wildlife and beautiful
        landscapes.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "4 Days / 3 Nights",
          icon: "◷",
        },
        {
          label: "Destinations",
          value: "Masai Mara • Lake Nakuru",
          icon: "⌖",
        },
        {
          label: "Country",
          value: "Kenya",
          icon: "✦",
        },
        {
          label: "Safari Style",
          value: "Luxury Safari",
          icon: "◆",
        },
      ].map((fact) => (
        <div
          key={fact.label}
          className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b4224] text-lg text-[#f5c45d]">
              {fact.icon}
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {fact.label}
              </p>

              <p className="mt-1 text-sm font-bold leading-6 text-[#092d1a]">
                {fact.value}
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>

    {/* ========================================================
        HERO EXPERIENCE
    ======================================================== */}
    <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#092d1a] shadow-2xl">

      <div className="grid lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative min-h-[380px] overflow-hidden lg:min-h-[500px]">

          <img
            src={mara3}
            alt="Masai Mara National Reserve safari landscape"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#092d1a] via-[#092d1a]/20 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">

            <span className="inline-flex rounded-full bg-[#dba33a] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#092d1a]">
              Kenya Wildlife Adventure
            </span>

            <h3 className="mt-4 max-w-lg text-3xl font-black leading-tight text-white sm:text-4xl">
              From the Mara's Big Cats to Lake Nakuru's Rhinos
            </h3>

          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            The Experience
          </p>

          <h3 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
            Two Iconic Kenyan Wildlife Destinations
          </h3>

          <p className="mt-6 text-sm leading-7 text-white/70 sm:text-base">
            Combine the legendary wildlife of the Masai Mara with the
            spectacular landscapes and rhino-rich environment of Lake Nakuru.
            Enjoy game drives through open savannah plains, search for the Big
            Five and finish your adventure among some of Kenya's most
            fascinating wildlife.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">

            {[
              "Masai Mara",
              "Big Five",
              "Great Migration",
              "Lake Nakuru",
              "Black & White Rhinos",
              "Luxury Lodges",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-white/80"
              >
                <span className="mr-2 text-[#dba33a]">✓</span>
                {feature}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mt-20">

      <div className="mx-auto mb-12 max-w-3xl text-center">

        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9a6a08]">
          Your Safari Journey
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Four Days of Unforgettable Wildlife
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-500">
          Travel from Nairobi into the legendary Masai Mara before continuing
          to Lake Nakuru and returning to Nairobi with unforgettable wildlife
          memories.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE LINE */}
        <div className="absolute left-[20px] top-10 hidden h-[calc(100%-80px)] w-px bg-[#dba33a]/30 md:block" />

        <div className="space-y-8">

          {/* ==================================================
              DAY 1
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              01
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 01
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Nairobi – Masai Mara National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  Your safari begins in Nairobi, where you will be picked up by
                  a representative from Daffar Tours and Travel and driven to
                  the Masai Mara National Reserve. Upon arrival, you will check
                  in at your accommodation and enjoy lunch.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Later in the afternoon, embark on your first game drive
                  across the reserve. The Masai Mara offers excellent
                  opportunities to encounter lions, elephants, buffaloes,
                  giraffes, zebras, wildebeest, cheetahs and other wildlife.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  As the afternoon comes to an end, return to your
                  accommodation for dinner and relaxation.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Amani Mara Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
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

          {/* ==================================================
              DAY 2
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              02
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 02
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Full Day Masai Mara National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, spend the full day exploring the Masai Mara
                  on game drives. The reserve is one of Kenya's premier
                  wildlife destinations, offering opportunities to search for
                  some of Africa's most iconic animals.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Keep an eye out for lions, leopards, cheetahs, elephants,
                  buffaloes, giraffes, zebras, wildebeest, hippos and various
                  antelope species.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Depending on the season, you may also have the opportunity to
                  witness the Great Wildebeest Migration and dramatic river
                  crossings. Enjoy lunch during the day before continuing your
                  game drives through the reserve.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  In the late afternoon, return to your accommodation for
                  dinner and an overnight stay.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Amani Mara Camp
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
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

          {/* ==================================================
              DAY 3
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              03
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 03
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Masai Mara – Lake Nakuru National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, depart the Masai Mara and drive to Lake
                  Nakuru National Park. Upon arrival, enjoy lunch before
                  embarking on an afternoon game drive.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Lake Nakuru is particularly renowned for its rhino
                  population. As you explore the park, look out for black and
                  white rhinos, lions, leopards, buffaloes, giraffes, zebras,
                  waterbucks, baboons and other wildlife.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  The area around the lake also provides opportunities to see
                  a variety of bird species. After your game drive, return to
                  your accommodation for dinner and relaxation.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Sarova Lion Hill Game Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
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

          {/* ==================================================
              DAY 4
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              04
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 04
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Lake Nakuru National Park – Nairobi
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, enjoy a final game drive in Lake Nakuru
                  National Park, giving you another opportunity to search for
                  rhinos, buffaloes, giraffes, zebras, lions and other
                  wildlife.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  After the game drive, depart for Nairobi and enjoy lunch
                  along the way. Upon arrival in Nairobi, you will be dropped
                  off at your hotel, residence or another agreed location,
                  marking the end of your safari.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      No Accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meal Plan
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Breakfast & Lunch
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
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
    </div>

    {/* ========================================================
        SAFARI HIGHLIGHTS
    ======================================================== */}
    <div className="mt-20">

      <div className="mb-10 text-center">

        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9a6a08]">
          Safari Highlights
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Two Exceptional Wildlife Experiences
        </h3>

      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Masai Mara",
            text: "Explore Kenya's legendary savannah reserve, famous for exceptional wildlife concentrations and spectacular predator sightings.",
          },
          {
            title: "Big Five",
            text: "Search for lions, leopards, elephants and buffaloes, together with cheetahs and a wide variety of plains wildlife.",
          },
          {
            title: "Great Migration",
            text: "Depending on the season, experience the extraordinary wildebeest migration and dramatic river crossings.",
          },
          {
            title: "Lake Nakuru",
            text: "Discover a beautiful Rift Valley park renowned for black and white rhinos, diverse wildlife and birdlife.",
          },
        ].map((highlight) => (
          <div
            key={highlight.title}
            className="group rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b4224] text-lg text-[#f5c45d] transition group-hover:bg-[#dba33a] group-hover:text-[#092d1a]">
              ✦
            </div>

            <h4 className="mt-5 text-lg font-black text-[#092d1a]">
              {highlight.title}
            </h4>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              {highlight.text}
            </p>

          </div>
        ))}

      </div>
    </div>

    {/* ========================================================
        INCLUSIONS & EXCLUSIONS
    ======================================================== */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b4224] text-lg text-[#f5c45d]">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#9a6a08]">
              Included
            </p>

            <h3 className="text-2xl font-black text-[#092d1a]">
              What's Included
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
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-[#f7faf7] px-4 py-3"
            >
              <span className="mt-0.5 text-sm font-black text-[#0b4224]">
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
      <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-lg text-gray-500">
            ×
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Not Included
            </p>

            <h3 className="text-2xl font-black text-[#092d1a]">
              What's Excluded
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-3">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips — US$10–15 per person per day",
            "Personal items such as souvenirs, travel insurance and visa fees",
            "Balloon Safari — USD 500 per person",
            "Maasai Village Visit — USD 50 per vehicle",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3"
            >
              <span className="mt-0.5 text-sm font-black text-gray-400">
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

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#092d1a] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="inline-flex rounded-full border border-[#dba33a]/30 bg-[#dba33a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
          Kenya Wildlife Adventure
        </span>

        <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Ready to Explore the
          <span className="block text-[#f5c45d]">
            Masai Mara & Lake Nakuru?
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          Let Daffar Tours and Travel create an unforgettable four-day luxury
          safari combining Kenya's legendary Masai Mara with the spectacular
          wildlife of Lake Nakuru.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#dba33a] px-7 py-4 text-sm font-black text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-[#f5c45d]"
          >
            Plan This Safari
            <span className="ml-2">→</span>
          </Link>

          <a
            href="https://wa.me/+254708164662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            WhatsApp Us
          </a>

        </div>
      </div>
    </div>

  </div>
</section>
{/* ============================================================
    3-DAY MASAI MARA LUXURY SAFARI
============================================================ */}
<section
  id="3-day-masai-mara-luxury"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#f5c45d]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0b4224]/10 bg-white px-4 py-2 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#f5c45d]" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
          Luxury Kenya Safari
        </span>
      </div>

      <h2 className="text-4xl font-black leading-tight tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        3-Day Masai Mara
        <span className="block text-[#0b4224]">
          Luxury Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience the magic of Kenya's legendary Masai Mara National Reserve
        on a carefully designed three-day luxury safari featuring exciting
        game drives, spectacular landscapes, iconic predators and unforgettable
        wildlife encounters.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Duration
        </p>
        <p className="mt-2 text-lg font-black text-[#092d1a]">
          3 Days / 2 Nights
        </p>
      </div>

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Destination
        </p>
        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Masai Mara
        </p>
      </div>

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Experience
        </p>
        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Luxury Safari
        </p>
      </div>

      <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Wildlife
        </p>
        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Big Five & More
        </p>
      </div>

    </div>

    {/* ============================================================
        SAFARI HIGHLIGHT
    ============================================================ */}
    <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#092d1a] shadow-2xl">
      <div className="grid lg:grid-cols-2">

        <div className="relative min-h-[340px] lg:min-h-[440px]">
          <img
           src={mara4}
            alt="Masai Mara wildlife and savannah"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-[#092d1a]/70" />

          <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">
            <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0b4224]">
              Safari Highlight
            </span>

            <h3 className="mt-4 max-w-xl text-3xl font-black text-white sm:text-4xl">
              Discover the Wild Heart of the Masai Mara
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            Why You'll Love It
          </p>

          <p className="mt-5 text-base leading-8 text-white/75">
            The Masai Mara is renowned for its sweeping grasslands, abundant
            wildlife and extraordinary predator sightings. Across three days,
            enjoy carefully planned game drives in search of lions, leopards,
            cheetahs, elephants, giraffes, zebras, wildebeests, buffaloes and
            abundant birdlife.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Big Five wildlife encounters",
              "Golden-hour photography",
              "Full-day game viewing",
              "Great Migration opportunities",
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
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f0ad28]">
          Your Journey
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Day-by-Day Safari Experience
        </h3>
      </div>

      <div className="relative">

        {/* TIMELINE LINE */}
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
                      Nairobi to Masai Mara National Reserve
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Nairobi → Masai Mara
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  Your safari begins with an early morning departure from
                  Nairobi as you travel toward the world-famous Masai Mara
                  National Reserve. The journey takes you through Kenya's
                  changing landscapes, including the scenic Great Rift Valley
                  and expansive countryside.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Upon arrival in the Masai Mara, enter the reserve and begin
                  your first game drive. The open grasslands provide an ideal
                  setting for wildlife viewing, with opportunities to encounter
                  large herds of wildebeests and zebras, elephants, giraffes,
                  buffaloes, antelopes and a variety of predators.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Enjoy a picnic or lodge lunch before continuing your
                  afternoon game drive. As the afternoon progresses, the golden
                  light across the savannah creates beautiful conditions for
                  photography and wildlife viewing. Later, make your way to
                  Amani Mara Camp for check-in, relaxation and dinner.
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
                      Amani Mara Camp
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
                      Drinking water included
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
                      Full-Day Masai Mara Wildlife Experience
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Full-Day Game Drive
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, set out for a full day of game viewing in
                  the Masai Mara National Reserve. Today offers plenty of time
                  to explore different areas of the reserve in search of
                  Kenya's iconic wildlife.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The Mara is particularly renowned for its large populations
                  of lions, cheetahs and leopards, while elephants, buffaloes,
                  giraffes, zebras, wildebeests, hippos and numerous antelope
                  species are also frequently encountered.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Depending on the season, you may also witness the spectacular
                  movements of the Great Wildebeest Migration, when enormous
                  herds travel across the Mara ecosystem in search of fresh
                  grazing. Enjoy lunch in the reserve or return to camp,
                  depending on the day's schedule, before continuing with an
                  afternoon game drive.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Return to Amani Mara Camp in the evening for dinner and a
                  relaxing night surrounded by the sounds of the African
                  wilderness.
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
                      Amani Mara Camp
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
                      Drinking water included
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
                      Masai Mara – Final Game Drive – Nairobi
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Safari Ends
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  Wake up early and enjoy breakfast at camp before embarking on
                  a final morning game drive. The early morning hours are among
                  the best times to experience the Mara, when wildlife is active
                  and cooler temperatures create ideal conditions for game
                  viewing.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Keep your eyes open for lions returning from a night hunt,
                  cheetahs scanning the plains, elephants moving across the
                  grasslands, and herds of zebra and wildebeest beginning their
                  day.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  After the game drive, return to camp for a final meal before
                  checking out. Begin your journey back to Nairobi, enjoying the
                  changing scenery along the way. Lunch will be provided during
                  the journey before continuing to Nairobi.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Upon arrival in Nairobi, you'll be dropped off at your
                  preferred location, marking the end of your Masai Mara luxury
                  safari.
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
                      Drinking water included
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

        <h3 className="mt-3 text-3xl font-black text-[#092d1a]">
          Three Days of Exceptional Wildlife Viewing
        </h3>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Big Five",
            text: "Search for lions, leopards, elephants, buffaloes and other iconic wildlife.",
          },
          {
            title: "Predator Sightings",
            text: "Explore the Mara's renowned lion, cheetah and leopard territories.",
          },
          {
            title: "Migration",
            text: "During the right season, witness the movement of the Great Wildebeest Migration.",
          },
          {
            title: "Photography",
            text: "Enjoy spectacular landscapes and golden-hour wildlife photography opportunities.",
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
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
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
            "All accommodation unless clearly labeled as optional",
            "Professional driver/guide",
            "All transportation unless clearly labeled as optional",
            "All taxes and VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the day-by-day itinerary",
          ].map((item) => (
            <div key={item} className="flex gap-3">
              <span className="mt-1 text-[#f5c45d]">✓</span>
              <span className="text-sm leading-6 text-white/75">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* EXCLUDED */}
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
            "Tips — guideline of US$10 per person per day",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
            "Government-imposed increases of taxes and/or park fees",
          ].map((item) => (
            <div key={item} className="flex gap-3">
              <span className="mt-1 font-bold text-[#dba33a]">×</span>
              <span className="text-sm leading-6 text-gray-600">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>

    {/* ============================================================
        CTA
    ============================================================ */}
    <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5c45d]">
        Your African Adventure Awaits
      </p>

      <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black text-white sm:text-4xl lg:text-5xl">
        Ready to Experience the Masai Mara?
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
        Let us help you plan your perfect three-day luxury safari through one
        of Africa's most spectacular wildlife destinations.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

        <Link
          to="/contact"
          className="rounded-full bg-[#f5c45d] px-7 py-3.5 text-sm font-black text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-white"
        >
          Plan Your Safari
        </Link>

        <a
          href="https://wa.me/+254708164662"
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

      <section className="relative bg-[#0D4825] overflow-hidden">

        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#F39A08]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#F39A08]/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-28 text-center">

          <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
            Your African Adventure
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">

            Ready To Discover

            <span className="block text-[#F39A08]">
              The Maasai Mara?
            </span>

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/65 leading-relaxed">
            Let Daffar Tours & Travel help you turn your Maasai Mara
            dream into an unforgettable safari experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

            <Link
              to="/contact"
              className="bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Plan Your Mara Safari
            </Link>

            <a
              href="https://wa.me/+254708164662"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-[#F39A08] text-white hover:text-[#F39A08] px-8 py-4 rounded-full font-bold transition-all duration-300"
            >
              WhatsApp Us
            </a>

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
                        href="mailto:info@daffartours.com"
                        className="mt-1 block text-sm text-white/60 hover:text-[#F39A08] transition-colors"
                      >
                        info@daffartours.com
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
                        href="tel:+254708164662"
                        className="mt-1 block text-sm text-white/60 hover:text-[#F39A08] transition-colors"
                      >
                        +254708164662
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