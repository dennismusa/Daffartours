/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import amboseli from "../assets/amboseli.jpg";
import nakuru3 from "../assets/nakuru3.jpg";
import meru from "../assets/meru.jpg";
import mara1 from "../assets/mara1.jpg";
import mara3 from "../assets/mara3.jpg";
import mara4 from "../assets/mara4.jpg";
import nakuru4 from "../assets/nakuru4.jpg";
import bird1 from "../assets/bird1.jpg";
import bird2 from "../assets/bird2.jpg";
/* ============================================================
   REUSABLE COMPONENTS
============================================================ */

// eslint-disable-next-line no-unused-vars
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
    PAGE HERO — AMBOSELI ITINERARIES
============================================================ */}
<section
  id="amboseli-itineraries-hero"
  className="relative overflow-hidden bg-[#092d1a]"
>
  <img
    src={amboseli}
    alt="Amboseli National Park"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#061b10]/90 via-[#092d1a]/60 to-[#092d1a]/20" />

  <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[540px] lg:px-12">
    <div className="max-w-3xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
          Flying Safari Itineraries
        </span>
      </div>

      
    </div>
  </div>
</section>




  {/* ============================================================
      04 — BIRDING SAFARIS
  ============================================================ */}
  <section
    id="birding-safaris"
    className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B87916]">
            — Flying Safaris
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#082D19] sm:text-5xl">
            A World of
            <span className="block italic text-[#B87916]">
              Wings & Wonder
            </span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Step into a world where every sunrise brings fresh colors,
            unfamiliar calls, and the quiet thrill of discovery.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Our Birding Safaris are crafted for everyone who feels the excitement
            of seeing rare feathers in flight. Whether you are a dedicated
            birder, wildlife photographer, researcher, or simply a traveler who
            loves nature, each journey promises something special.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Explore misty montane forests, open savannahs, peaceful wetlands and
            habitats alive with flamingos, kingfishers, raptors and hidden
            waders. Rather than chasing lists, these safaris invite you to slow
            your pace and become part of the landscape.
          </p>

          <div className="mt-8 rounded-3xl bg-[#F8F6F1] p-6">
            <p className="font-serif text-xl italic leading-8 text-[#082D19]">
              “Every wingbeat carries a story waiting to be discovered.”
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="grid gap-5 sm:grid-cols-2">

            <div className="overflow-hidden rounded-[2rem] sm:mt-12">
              <img
                src={bird1}
                alt="Birding safari in Africa"
                className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={bird2}
                alt="African birds"
                className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

          </div>

          <div className="mt-5 rounded-[2rem] bg-[#082D19] p-7 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
              Discover
            </p>
            <p className="mt-3 font-serif text-2xl">
              Forests · Wetlands · Savannah · Endemics
            </p>
          </div>
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
    6-DAY AMBOSELI • SERENGETI • NGORONGORO
    LUXURY SAFARI
============================================================ */}














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
            href="https://wa.me/+254708711459"
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
    3-DAY MASAI MARA LUXURY PLUS SAFARI
============================================================ */}
<section
  id="3-day-masai-mara-luxury-plus"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0D4825]/10 blur-[140px]" />

  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />

  <div className="pointer-events-none absolute bottom-0 left-[35%] h-[400px] w-[400px] rounded-full bg-[#0D4825]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <header className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B87500]">
        Luxury Plus Safari
      </span>

      <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        3-Day Masai Mara
        <span className="block text-[#F5A623]">
          Luxury Plus Safari
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience the legendary Masai Mara National Reserve on a three-day
        luxury safari, exploring its vast savannahs and exceptional wildlife.
        Enjoy luxurious accommodation while searching for lions, elephants,
        leopards, cheetahs, buffaloes, giraffes and other iconic African
        wildlife.
      </p>

    </header>


    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Duration */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Duration
        </p>

        <p className="mt-3 font-serif text-2xl font-bold text-[#082D19]">
          3 Days
        </p>

        <p className="mt-1 text-sm text-gray-500">
          2 Nights
        </p>

      </div>


      {/* Destination */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Destination
        </p>

        <p className="mt-3 font-serif text-2xl font-bold text-[#082D19]">
          Masai Mara
        </p>

        <p className="mt-1 text-sm text-gray-500">
          National Reserve
        </p>

      </div>


      {/* Accommodation */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Accommodation
        </p>

        <p className="mt-3 font-serif text-2xl font-bold text-[#082D19]">
          Luxury Plus
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Elewana Sand River
        </p>

      </div>


      {/* Experience */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Experience
        </p>

        <p className="mt-3 font-serif text-2xl font-bold text-[#082D19]">
          Wildlife Safari
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Game Drives
        </p>

      </div>

    </div>


    {/* ============================================================
        HIGHLIGHT
    ============================================================ */}
    <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#082D19] shadow-xl">

      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT */}
        <div className="relative min-h-[300px] overflow-hidden bg-[#0D4825]">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-[80px]" />

          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />

          <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F5A623]">
              Masai Mara Experience
            </span>

            <h3 className="mt-3 max-w-md font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Two Nights in the Heart of the Mara
            </h3>

          </div>

        </div>


        {/* RIGHT */}
        <div className="flex items-center p-8 sm:p-10 lg:p-12">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Safari Highlight
            </p>

            <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
              Spend three unforgettable days exploring one of Africa&apos;s
              most celebrated wildlife destinations. Enjoy game drives across
              the open Mara savannah while searching for iconic predators,
              elephants, giraffes, zebras and abundant plains wildlife.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ============================================================
        ITINERARY HEADER
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto mb-14 max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Safari Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Three Days of Wildlife &amp; Discovery
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600">
          Explore the Masai Mara through carefully planned game drives,
          comfortable luxury accommodation and unforgettable encounters with
          Kenya&apos;s spectacular wildlife.
        </p>

      </div>


      {/* ============================================================
          TIMELINE
      ============================================================ */}
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">


          {/* ==========================================================
              DAY 1
          ========================================================== */}
          <div className="relative md:pl-16">

            {/* Number */}
            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#082D19] text-sm font-bold text-[#F5A623] shadow-md md:flex">
              01
            </div>


            <article className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              {/* Header */}
              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 01
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Nairobi – Masai Mara National Reserve
                </h4>

              </div>


              {/* Content */}
              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your safari begins in Nairobi, where you will be picked up by
                  a representative from Daffar Tours and Travel and driven to
                  the Masai Mara National Reserve.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Upon arrival, check in to your camp and enjoy lunch. In the
                  afternoon, head out for your first game drive across the
                  spectacular Masai Mara plains. The reserve is renowned for
                  its abundant wildlife, offering opportunities to encounter
                  lions, elephants, leopards, cheetahs, buffaloes, giraffes,
                  zebras and numerous antelope species.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your camp in the evening for dinner and overnight.
                </p>


                {/* Info */}
                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Elewana Sand River Masai Mara
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Meal Plan
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Lunch &amp; Dinner
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Drinking Water
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Provided
                    </p>

                  </div>

                </div>

              </div>

            </article>

          </div>


          {/* ==========================================================
              DAY 2
          ========================================================== */}
          <div className="relative md:pl-16">

            {/* Number */}
            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0D4825] text-sm font-bold text-[#F5A623] shadow-md md:flex">
              02
            </div>


            <article className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              {/* Header */}
              <div className="bg-white px-6 py-5 sm:px-8">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 02
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Full-Day Masai Mara National Reserve
                </h4>

              </div>


              {/* Content */}
              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, embark on a full day of wildlife exploration
                  in the Masai Mara. Your game drives take you across the open
                  savannah in search of the reserve&apos;s incredible variety of
                  wildlife.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Keep your eyes open for the Mara&apos;s famous big cats,
                  including lions, leopards and cheetahs, as well as elephants,
                  buffaloes, giraffes, zebras, hippos and a wide variety of
                  birdlife. Enjoy lunch before continuing your game drive
                  through the reserve, taking in the breathtaking landscapes and
                  unforgettable wildlife encounters.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your camp in the evening for dinner and overnight.
                </p>


                {/* Info */}
                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Elewana Sand River Masai Mara
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Meal Plan
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Drinking Water
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Provided
                    </p>

                  </div>

                </div>

              </div>

            </article>

          </div>


          {/* ==========================================================
              DAY 3
          ========================================================== */}
          <div className="relative md:pl-16">

            {/* Number */}
            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#082D19] text-sm font-bold text-[#F5A623] shadow-md md:flex">
              03
            </div>


            <article className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              {/* Header */}
              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 03
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Masai Mara – Nairobi
                </h4>

              </div>


              {/* Content */}
              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Begin your final morning with an early game drive, offering
                  one last opportunity to experience the wildlife of the Masai
                  Mara. Search for predators and other animals as the reserve
                  comes alive in the morning.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your camp for breakfast before preparing for
                  departure. After lunch, begin your journey back to Nairobi,
                  where you will be dropped off at your hotel, residence, or
                  another agreed location, marking the end of your safari.
                </p>


                {/* Info */}
                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      No accommodation
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Meal Plan
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast &amp; Lunch
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Drinking Water
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Provided
                    </p>

                  </div>

                </div>

              </div>

            </article>

          </div>

        </div>

      </div>

    </div>


    {/* ============================================================
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0D4825] text-[#F5A623]">
            ✓
          </div>

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Your Safari Includes
            </h3>

          </div>

        </div>


        <div className="mt-7 space-y-4">

          {[
            "Park fees (for non-residents)",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "A professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item, index) => (

            <div
              key={index}
              className="flex gap-3 text-sm leading-6 text-gray-600"
            >
              <span className="mt-1 text-[#F5A623]">
                ✓
              </span>

              <span>
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5A623]/10 text-[#B87500]">
            +
          </div>

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Excluded
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Not Included
            </h3>

          </div>

        </div>


        <div className="mt-7 space-y-4">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline: US$10–15 per person per day",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
          ].map((item, index) => (

            <div
              key={index}
              className="flex gap-3 text-sm leading-6 text-gray-600"
            >

              <span className="mt-1 text-gray-400">
                •
              </span>

              <span>
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
    <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#082D19] p-7 shadow-xl sm:p-9 lg:p-10">

      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

        {/* LEFT */}
        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Optional Experiences
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Add More to Your Mara Experience
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-7 text-white/60">
            Enhance your safari with carefully selected optional experiences
            designed to add memorable moments to your Masai Mara adventure.
          </p>

        </div>


        {/* OPTIONS */}
        <div className="grid gap-4 sm:grid-cols-2">

          {/* BALLOON */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

            <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
              Adventure
            </p>

            <h4 className="mt-2 font-serif text-xl font-bold text-white">
              Balloon Safari
            </h4>

            <p className="mt-2 text-sm leading-6 text-white/55">
              Experience the spectacular Mara landscape from above.
            </p>

            <p className="mt-4 text-lg font-bold text-[#F5A623]">
              USD 500
              <span className="ml-1 text-xs font-medium text-white/40">
                / person
              </span>
            </p>

          </div>


          {/* MAASAI VILLAGE */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

            <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
              Culture
            </p>

            <h4 className="mt-2 font-serif text-xl font-bold text-white">
              Maasai Village Visit
            </h4>

            <p className="mt-2 text-sm leading-6 text-white/55">
              Experience local traditions and discover Maasai culture.
            </p>

            <p className="mt-4 text-lg font-bold text-[#F5A623]">
              USD 50
              <span className="ml-1 text-xs font-medium text-white/40">
                / vehicle
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-[#0D4825] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-[80px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-[80px]" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Start Your Safari
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready for the Masai Mara?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          Experience the extraordinary wildlife and landscapes of the Masai
          Mara with a safari designed around you by Daffar Tours and Travel.
        </p>


        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f7c35d]"
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
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

    </div>

  </div>
</section>


{/* ============================================================
    3-DAY SAMBURU LUXURY PLUS SAFARI
============================================================ */}
<section
  id="3-day-samburu-luxury-plus"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0D4825]/10 blur-[140px]" />

  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[150px]" />

  <div className="pointer-events-none absolute bottom-0 left-[35%] h-[400px] w-[400px] rounded-full bg-[#0D4825]/5 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <header className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B87500]">
        Luxury Plus Safari
      </span>

      <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        3-Day Samburu
        <span className="block text-[#F5A623]">
          Luxury Plus Safari
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience the spectacular landscapes and rich wildlife of Samburu
        National Reserve on this three-day luxury safari. Discover the unique
        wildlife of northern Kenya, including the famous Samburu Special Five,
        while enjoying a luxurious stay at Sasaab Camp.
      </p>

    </header>


    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Duration */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Duration
        </p>

        <p className="mt-3 font-serif text-2xl font-bold text-[#082D19]">
          3 Days
        </p>

        <p className="mt-1 text-sm text-gray-500">
          2 Nights
        </p>

      </div>


      {/* Destination */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Destination
        </p>

        <p className="mt-3 font-serif text-2xl font-bold text-[#082D19]">
          Samburu
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Northern Kenya
        </p>

      </div>


      {/* Accommodation */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Accommodation
        </p>

        <p className="mt-3 font-serif text-2xl font-bold text-[#082D19]">
          Luxury Plus
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Sasaab Camp
        </p>

      </div>


      {/* Wildlife */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm">

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Wildlife
        </p>

        <p className="mt-3 font-serif text-2xl font-bold text-[#082D19]">
          Special Five
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Unique Northern Kenya Wildlife
        </p>

      </div>

    </div>


    {/* ============================================================
        HIGHLIGHT
    ============================================================ */}
    <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#082D19] shadow-xl">

      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT */}
        <div className="relative min-h-[300px] overflow-hidden bg-[#0D4825]">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-[80px]" />

          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />

          <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F5A623]">
              Northern Kenya
            </span>

            <h3 className="mt-3 max-w-md font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Discover the Samburu Special Five
            </h3>

          </div>

        </div>


        {/* RIGHT */}
        <div className="flex items-center p-8 sm:p-10 lg:p-12">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Safari Highlight
            </p>

            <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
              Explore Samburu&apos;s dramatic landscapes and distinctive
              wildlife while searching for the reticulated giraffe, Grevy&apos;s
              zebra, gerenuk, Beisa oryx and Somali ostrich. Alongside these
              unique species, the reserve offers opportunities to encounter
              elephants, lions, leopards, cheetahs and buffaloes.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ============================================================
        ITINERARY HEADER
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto mb-14 max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Safari Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Three Days of Samburu Discovery
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600">
          Explore northern Kenya through carefully planned game drives,
          spectacular landscapes and a luxurious stay at Sasaab Camp.
        </p>

      </div>


      {/* ============================================================
          TIMELINE
      ============================================================ */}
      <div className="relative">

        {/* Vertical timeline */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 md:block" />

        <div className="space-y-8">


          {/* ==========================================================
              DAY 1
          ========================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#082D19] text-sm font-bold text-[#F5A623] shadow-md md:flex">
              01
            </div>

            <article className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 01
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Nairobi – Samburu National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your Samburu safari begins in Nairobi, where you will be
                  picked up by a representative from Daffar Tours and Travel
                  and driven north towards Samburu National Reserve.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Upon arrival, check in to your camp and enjoy lunch. In the
                  afternoon, head out for your first game drive across the
                  reserve. Samburu is renowned for its distinctive wildlife,
                  including the reticulated giraffe, Grevy&apos;s zebra,
                  gerenuk, Beisa oryx and Somali ostrich.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  You may also encounter elephants, lions, leopards, buffaloes
                  and other wildlife against the dramatic backdrop of northern
                  Kenya.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your camp in the evening for dinner and overnight.
                </p>


                {/* INFO */}
                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Sasaab Camp
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Meal Plan
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Lunch &amp; Dinner
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Drinking Water
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Provided
                    </p>

                  </div>

                </div>

              </div>

            </article>

          </div>


          {/* ==========================================================
              DAY 2
          ========================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0D4825] text-sm font-bold text-[#F5A623] shadow-md md:flex">
              02
            </div>

            <article className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-white px-6 py-5 sm:px-8">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 02
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                  Full-Day Samburu National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, spend the day exploring the remarkable
                  landscapes of Samburu National Reserve with game drives
                  through its diverse habitats.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  The reserve offers excellent opportunities to encounter
                  elephants, lions, leopards, cheetahs, buffaloes and the
                  unique Samburu Special Five.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  The Ewaso Ng&apos;iro River provides a vital water source for
                  wildlife and attracts a variety of animals throughout the
                  day. Enjoy lunch before continuing your wildlife exploration,
                  followed by an afternoon game drive as you search for more
                  memorable sightings.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your camp in the evening for dinner and overnight.
                </p>


                {/* INFO */}
                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Sasaab Camp
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Meal Plan
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast, Lunch &amp; Dinner
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Drinking Water
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Provided
                    </p>

                  </div>

                </div>

              </div>

            </article>

          </div>


          {/* ==========================================================
              DAY 3
          ========================================================== */}
          <div className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#082D19] text-sm font-bold text-[#F5A623] shadow-md md:flex">
              03
            </div>

            <article className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#082D19] px-6 py-5 sm:px-8">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
                  Day 03
                </span>

                <h4 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Samburu National Reserve – Nairobi
                </h4>

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


                {/* INFO */}
                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Accommodation
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      No accommodation
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Meal Plan
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Breakfast &amp; Lunch
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#f7faf7] p-5">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                      Drinking Water
                    </p>

                    <p className="mt-2 font-semibold text-[#082D19]">
                      Provided
                    </p>

                  </div>

                </div>

              </div>

            </article>

          </div>

        </div>

      </div>

    </div>


    {/* ============================================================
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0D4825] text-[#F5A623]">
            ✓
          </div>

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Included
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Your Safari Includes
            </h3>

          </div>

        </div>


        <div className="mt-7 space-y-4">

          {[
            "Park fees (for non-residents)",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "A professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item, index) => (

            <div
              key={index}
              className="flex gap-3 text-sm leading-6 text-gray-600"
            >

              <span className="mt-1 text-[#F5A623]">
                ✓
              </span>

              <span>
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5A623]/10 text-[#B87500]">
            +
          </div>

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Excluded
            </span>

            <h3 className="mt-1 font-serif text-2xl font-bold text-[#082D19]">
              Not Included
            </h3>

          </div>

        </div>


        <div className="mt-7 space-y-4">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline: US$10–15 per person per day",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
          ].map((item, index) => (

            <div
              key={index}
              className="flex gap-3 text-sm leading-6 text-gray-600"
            >

              <span className="mt-1 text-gray-400">
                •
              </span>

              <span>
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
    <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#082D19] p-7 shadow-xl sm:p-9 lg:p-10">

      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

        {/* LEFT */}
        <div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Optional Experiences
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Add More to Your Samburu Experience
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-7 text-white/60">
            Enhance your safari with additional experiences tailored to your
            interests and schedule.
          </p>

        </div>


        {/* OPTIONS */}
        <div className="grid gap-4 sm:grid-cols-2">

          {/* BALLOON */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

            <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
              Adventure
            </p>

            <h4 className="mt-2 font-serif text-xl font-bold text-white">
              Balloon Safari
            </h4>

            <p className="mt-2 text-sm leading-6 text-white/55">
              Experience the African landscape from a unique perspective.
            </p>

            <p className="mt-4 text-lg font-bold text-[#F5A623]">
              USD 500
              <span className="ml-1 text-xs font-medium text-white/40">
                / person
              </span>
            </p>

          </div>


          {/* MAASAI VILLAGE */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

            <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
              Culture
            </p>

            <h4 className="mt-2 font-serif text-xl font-bold text-white">
              Maasai Village Visit
            </h4>

            <p className="mt-2 text-sm leading-6 text-white/55">
              Discover local traditions and experience East African culture.
            </p>

            <p className="mt-4 text-lg font-bold text-[#F5A623]">
              USD 50
              <span className="ml-1 text-xs font-medium text-white/40">
                / vehicle
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-[#0D4825] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-[80px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-[80px]" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Start Your Safari
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Discover Samburu?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          Experience the distinctive wildlife, dramatic landscapes and
          unforgettable game drives of northern Kenya with Daffar Tours and
          Travel.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-[#f7c35d]"
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
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
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
    2-DAY DIANI BEACH EXTENSION
============================================================ */}
<section
  id="4-day-masai-mara-lake-nakuru-2-day-diani"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#0b4224]/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 top-[45%] h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[140px]" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-[320px] w-[320px] rounded-full bg-[#0D4825]/5 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b97800]">
        Luxury Plus Safari • Beach Extension
      </span>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
        4-Day Masai Mara & Lake Nakuru
        <span className="block text-[#0D4825]">
          + 2-Day Diani Extension
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an exceptional Kenya safari combining the wildlife-rich
        Masai Mara and Lake Nakuru with a relaxing extension along the
        beautiful Diani Beach. Enjoy luxury accommodation, spectacular
        wildlife encounters and the tropical beauty of Kenya's Indian Ocean
        coast.
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
          Duration
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          6 Days / 5 Nights
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          4-day safari + 2-day Diani Beach extension
        </p>
      </div>

      {/* Destinations */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-white">
          📍
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Destinations
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Mara • Nakuru • Diani
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          From Kenya's savannah wilderness to the Indian Ocean coast
        </p>
      </div>

      {/* Accommodation */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
          ★
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Accommodation
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Luxury Plus
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Premium camps, lodges and a coastal beach resort
        </p>
      </div>

      {/* Experience */}
      <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A623] text-xl text-white">
          ✦
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
          Experience
        </p>

        <h3 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
          Safari & Beach
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Wildlife encounters followed by tropical coastal relaxation
        </p>
      </div>
    </div>

    {/* ============================================================
        HIGHLIGHT
    ============================================================ */}
    <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#082D19] px-7 py-10 sm:px-10 lg:px-14">

      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
            Bush to Beach Journey
          </span>

          <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            From the Masai Mara to the Indian Ocean
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            Begin with unforgettable wildlife experiences in the Masai Mara
            and Lake Nakuru before slowing down on the white sandy beaches of
            Diani. This itinerary combines Kenya's iconic safari landscapes
            with a peaceful tropical escape.
          </p>
        </div>

        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-[#F5A623]/30 bg-[#F5A623]/10 text-3xl text-[#F5A623]">
          🦁
        </div>

      </div>
    </div>

    {/* ============================================================
        DAY-BY-DAY ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Safari Itinerary
        </span>

        <h3 className="mt-3 font-serif text-3xl font-bold text-[#082D19] sm:text-4xl">
          Six Days of Wildlife & Coastal Escape
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Explore Kenya's iconic wildlife destinations before ending your
          journey with two relaxing days on the beautiful Diani Beach.
        </p>
      </div>

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
                Nairobi – Masai Mara National Reserve
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Your journey begins in Nairobi, where you will be picked up by
                a representative from Daffar Tours and Travel and driven to
                the Masai Mara National Reserve. Upon arrival, check in to your
                camp and enjoy lunch before heading out for your first
                afternoon game drive.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Explore the spectacular Mara savannah in search of lions,
                elephants, leopards, cheetahs, buffaloes, giraffes and zebras,
                among other wildlife. Return to your camp in the evening for
                dinner and overnight.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    &Beyond Kichwa Tembo Tented Camp
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meal Plan
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Lunch & Dinner
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Drinking Water
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Provided
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
                Full-Day Masai Mara National Reserve
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                After breakfast, spend the day exploring the Masai Mara with
                game drives across its expansive grasslands. The reserve offers
                excellent opportunities to encounter lions, leopards, cheetahs,
                elephants, buffaloes, giraffes, zebras and hippos, together
                with a variety of other wildlife and bird species.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Enjoy lunch before continuing your wildlife adventure through
                the reserve, taking in the dramatic landscapes and exceptional
                game viewing. Return to your camp in the evening for dinner and
                overnight.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    &Beyond Kichwa Tembo Tented Camp
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meal Plan
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Drinking Water
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Provided
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
                Masai Mara – Lake Nakuru National Park
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                After breakfast, depart the Masai Mara and travel towards Lake
                Nakuru National Park. Upon arrival, enjoy lunch before heading
                out for an afternoon game drive.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Explore the park's scenic landscapes while searching for
                rhinos, lions, leopards, buffaloes, giraffes, zebras and
                waterbuck. Return to your accommodation in the evening for
                dinner and overnight.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    The Cliff
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meal Plan
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Drinking Water
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Provided
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
                Lake Nakuru – Diani Beach
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Enjoy breakfast before departing Lake Nakuru for your journey
                to Diani Beach, Kenya's spectacular Indian Ocean paradise.
                Upon arrival, check in to your resort and settle into the
                beautiful coastal surroundings.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Spend the remainder of the day relaxing and enjoying the white
                sandy beaches and warm tropical atmosphere. Dinner and
                overnight at your resort.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Diani Sea Resort
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meal Plan
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Breakfast, Lunch & Dinner
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Experience
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Indian Ocean Beach Escape
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
                Full Day Diani Beach
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Enjoy a relaxing day in Diani Beach. Take time to unwind at
                your resort and enjoy the beautiful coastline, white sandy
                beaches and turquoise waters of the Indian Ocean.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                This is the perfect opportunity to relax after your safari
                adventure while enjoying the peaceful tropical setting.
                Dinner and overnight at your resort.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Diani Sea Resort
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meal Plan
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-[#082D19]">
                    Breakfast, Lunch & Dinner
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

          <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#F5A623] text-sm font-bold text-white shadow-lg md:flex">
            06
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm">

            <div className="bg-[#F5A623] px-6 py-6 sm:px-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#082D19]">
                Day 06
              </span>

              <h4 className="mt-2 font-serif text-2xl font-bold text-[#082D19] sm:text-3xl">
                Diani Beach – Nairobi
              </h4>
            </div>

            <div className="p-6 sm:p-8">

              <p className="leading-8 text-gray-600">
                Enjoy your final morning in Diani with breakfast and time to
                relax before departure. After lunch, begin your journey back
                to Nairobi.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                You will be dropped off at your hotel, residence or another
                agreed location, marking the end of your safari and Diani
                Beach extension.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Accommodation
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    No Accommodation
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7faf7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                    Meal Plan
                  </p>
                  <p className="mt-2 font-semibold text-[#082D19]">
                    Breakfast & Lunch
                  </p>
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
            "Park fees (for non-residents)",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "A professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
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

      {/* EXCLUDED */}
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
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline: US$10–15 per person per day",
            "Personal items such as souvenirs, travel insurance and visa fees",
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
        OPTIONAL EXPERIENCES
    ============================================================ */}
    <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

      <div className="bg-[#082D19] px-7 py-8 sm:px-10">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">
          Optional Experiences
        </span>

        <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
          Make Your Safari Even More Memorable
        </h3>

        <p className="mt-3 max-w-2xl leading-7 text-white/70">
          Add an optional experience to your itinerary for an even more
          memorable Kenya adventure.
        </p>
      </div>

      <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">

        {/* Balloon */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-start justify-between gap-4">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                Optional
              </span>

              <h4 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                Balloon Safari
              </h4>
            </div>

            <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-bold text-[#b97800]">
              USD 500
            </span>

          </div>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Experience the spectacular Kenyan wilderness from above on a
            sunrise hot-air balloon safari.
          </p>

          <p className="mt-4 text-sm font-bold text-[#082D19]">
            USD 500 per person
          </p>
        </div>

        {/* Maasai Village */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-[#f7faf7] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-start justify-between gap-4">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5A623]">
                Optional
              </span>

              <h4 className="mt-2 font-serif text-xl font-bold text-[#082D19]">
                Maasai Village Visit
              </h4>
            </div>

            <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-bold text-[#b97800]">
              USD 50
            </span>

          </div>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Discover Maasai traditions, culture and daily life through an
            authentic community visit.
          </p>

          <p className="mt-4 text-sm font-bold text-[#082D19]">
            USD 50 per vehicle
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
          Your Kenya Adventure Awaits
        </span>

        <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Safari, Wildlife & Diani Beach
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Combine unforgettable wildlife encounters in the Masai Mara and
          Lake Nakuru with the relaxed beauty of Diani Beach. Let Daffar Tours
          and Travel create a seamless luxury journey around you.
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

                  <a
                    href="https://wa.me/+254708711459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F39A08] px-5 py-3 text-sm font-bold text-[#082D19] transition-all hover:-translate-y-1 hover:bg-white"
                  >
                    WhatsApp Us
                    <span>→</span>
                  </a>

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