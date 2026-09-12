/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import mara1 from "../assets/mara1.jpg";
import mara2 from "../assets/mara2.jpg";
import mara3 from "../assets/mara3.jpg";
import mara4 from "../assets/mara4.jpg";
import kili1 from "../assets/kili1.jpg";
import kili2 from "../assets/kili2.jpg";
import kili3 from "../assets/kili3.jpg";
import kili4 from "../assets/kili4.jpg";
import diani1 from "../assets/diani1.jpg";
import diani2 from "../assets/diani2.jpg";
import diani4 from "../assets/diani4.jpg";
import diani5 from "../assets/diani5.jpg";
import nakuru from "../assets/nakuru.jpg";
import watamu1 from "../assets/watamu1.jpg";
import watamu2 from "../assets/watamu2.jpg";
//import wilderbeast from "../assets/wildebeast.jpg";
import wilderbeast1 from "../assets/wilderbeast1.jpg";
import wilderbeast2 from "../assets/wilderbeast2.jpg";
import nakuru4 from "../assets/nakuru4.jpg";
import abadare from "../assets/abadare.jpg";
import amboseli from "../assets/amboseli.jpg";
import honeymoon1 from "../assets/honeymoon1.jpg";
import honeymoon2 from "../assets/honeymoon2.jpg";        
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
{/* ============================================================
    SEYCHELLES ITINERARIES HERO
============================================================ */}
<section
  id="seychelles-itineraries-hero"
  className="relative overflow-hidden bg-[#092d1a]"
>
  <img
    src={honeymoon2}
    alt="Seychelles tropical beach"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#061b10]/90 via-[#092d1a]/55 to-[#092d1a]/20" />

  <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[540px] lg:px-12">
    <div className="max-w-3xl">

      {/* LABEL */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
          Honeymoon Itineraries
        </span>
      </div>

      {/* TITLE */}
      

    </div>
  </div>
</section>



  {/* ============================================================
      02 — HONEYMOON SAFARIS
  ============================================================ */}
  <section
    id="honeymoon-safaris"
    className="relative overflow-hidden bg-[#082D19] py-20 sm:py-24 lg:py-32"
  >
    <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#F5A623]/10 blur-3xl" />

    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

        {/* CONTENT */}
        <div className="order-2 lg:order-1">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F5A623]">
            02 — Honeymoon Safaris
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
            A Love Story
            <span className="block italic text-[#F5A623]">
              in the Wild
            </span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/75">
            Honeymoon Adventures Just for You.
          </p>

          <p className="mt-5 leading-8 text-white/65">
            At Daffar Tours and Travel, we understand that the perfect honeymoon
            looks different for every couple. Some dream of quiet moments under
            starlit skies, while others long to celebrate love in grand,
            unforgettable style.
          </p>

          <p className="mt-5 leading-8 text-white/65">
            Every journey begins with a conversation and is designed around your
            interests, budget, and vision. Imagine sharing sunset views across
            the savannah, toasting your love during a private bush dinner, or
            waking up to birdsong in a luxury tented camp.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Private game drives",
              "Bush dinners",
              "Luxury tented camps",
              "Zanzibar extensions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="text-sm font-medium text-white">
                  <span className="mr-2 text-[#F5A623]">✦</span>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-serif text-xl italic leading-8 text-white/90">
            Your honeymoon should be the first chapter in your shared adventure.
          </p>

          
        </div>

        {/* IMAGE */}
        <div className="group relative order-1 lg:order-2">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src={honeymoon1}
              alt="Romantic honeymoon safari in Africa"
              className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[570px]"
            />
          </div>

          <div className="absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-[#0D4825]/95 p-5 shadow-xl backdrop-blur-md sm:left-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#F5A623]">
              Together
            </p>
            <p className="mt-1 font-serif text-xl text-white">
              Love. Adventure. Africa.
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
            href="https://wa.me/+254708711459"
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




```jsx
{/* ============================================================
    12-DAY BEST OF KILIMANJARO & KENYA SAFARI
============================================================ */}
<section
  id="12-day-best-of-kilimanjaro-kenya"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#f5c45d]/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-[20%] h-[500px] w-[500px] rounded-full bg-[#0b4224]/10 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-[#0b4224]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0b4224] shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#f5c45d]" />
        Luxury East Africa Safari
      </span>

      <h2 className="mt-6 text-3xl font-black tracking-tight text-[#092d1a] sm:text-4xl lg:text-5xl">
        12-Day Best of Kilimanjaro & Kenya Safari
      </h2>

      <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
        Discover the very best of Tanzania and Kenya on an unforgettable
        luxury safari combining the dramatic beauty of Mount Kilimanjaro
        with some of East Africa's most iconic wildlife destinations.
      </p>

      <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600">
        From the foothills of Kilimanjaro and the elephant-filled plains of
        Amboseli to the forests of Aberdare, the Great Rift Valley and the
        legendary Masai Mara, this journey offers an exceptional combination
        of spectacular landscapes, diverse wildlife and luxury accommodation.
      </p>

      {/* QUICK FACTS */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Duration
          </p>
          <p className="mt-2 text-lg font-black text-[#0b4224]">
            12 Days / 11 Nights
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Destinations
          </p>
          <p className="mt-2 text-lg font-black text-[#0b4224]">
            Kilimanjaro to Masai Mara
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Safari Style
          </p>
          <p className="mt-2 text-lg font-black text-[#0b4224]">
            Luxury Safari
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Highlights
          </p>
          <p className="mt-2 text-lg font-black text-[#0b4224]">
            Kilimanjaro & Big Five
          </p>
        </div>

      </div>
    </div>

    {/* ========================================================
        JOURNEY HIGHLIGHT
    ======================================================== */}
    <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#082d19] shadow-2xl">

      <div className="grid lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative min-h-[340px] overflow-hidden lg:min-h-[460px]">

          <img
            src={kili1}
            alt="Mount Kilimanjaro"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082d19]/85 via-[#082d19]/25 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">

            <span className="inline-flex rounded-full bg-[#f5c45d] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#082d19]">
              Mount Kilimanjaro
            </span>

          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            East Africa Grand Safari
          </p>

          <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            From Kilimanjaro to the legendary Masai Mara
          </h3>

          <p className="mt-5 leading-8 text-white/75">
            Experience an extraordinary journey through some of East Africa's
            most remarkable landscapes. Begin beneath the slopes of Mount
            Kilimanjaro before crossing into Kenya for unforgettable wildlife
            experiences in Amboseli, Aberdare, Lake Nakuru, Lake Naivasha and
            the Masai Mara.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-bold text-white">
                Wildlife
              </p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Elephants, lions, leopards, cheetahs, rhinos, buffaloes,
                giraffes and more.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-bold text-white">
                Luxury Stays
              </p>
              <p className="mt-1 text-xs leading-5 text-white/60">
                Carefully selected lodges and safari properties throughout
                the journey.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mt-20">

      <div className="mb-12 text-center">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Journey
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Day-by-Day Safari
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Follow a carefully designed journey from the foothills of Mount
          Kilimanjaro through Kenya's most celebrated wildlife destinations.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE LINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 lg:left-7 lg:block" />

        <div className="space-y-10">

          {/* ==================================================
              DAY 1
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">01</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={kili2}
                    alt="Mount Kilimanjaro landscape"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 1
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Arrival
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Kilimanjaro
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Arrival – Mount Kilimanjaro
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    Your journey begins in the Mount Kilimanjaro area, where
                    you will be welcomed by a representative from Daffar Tours
                    and Travel and transferred to your lodge.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Settle into your accommodation and enjoy the peaceful
                    surroundings at the foothills of Africa's highest mountain.
                    The area is surrounded by lush vegetation and is home to
                    a variety of bird species and small wildlife.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Kaliwa Lodge
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 2
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">02</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={kili2}
                    alt="Mount Kilimanjaro scenery"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 2
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Full Day
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Kilimanjaro
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Explore the Mount Kilimanjaro Region
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, enjoy a full day exploring the beautiful
                    surroundings of Mount Kilimanjaro. The area provides
                    spectacular views of the mountain and opportunities to
                    observe the natural environment.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    You may encounter colobus monkeys, blue monkeys, dik-dik,
                    bushbuck and a variety of colourful bird species before
                    returning to your lodge in the evening.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Kaliwa Lodge
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 3
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">03</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={kili3}
                    alt="Mount Kilimanjaro wildlife and landscape"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 3
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Kilimanjaro
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Nature Experience
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Discover the Kilimanjaro Environment
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, continue exploring the remarkable
                    landscapes around Mount Kilimanjaro and enjoy magnificent
                    views of the mountain.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    As you experience the mountain environment, you may
                    encounter different species of monkeys and forest wildlife,
                    including colobus monkeys and blue monkeys, together with
                    numerous bird species.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Kaliwa Lodge
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 4
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">04</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={kili2}
                    alt="Mount Kilimanjaro mountain scenery"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 4
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Final Kilimanjaro Day
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Mountain Views
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Final Day Around Mount Kilimanjaro
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    Enjoy your final day around Mount Kilimanjaro, taking in
                    the spectacular mountain scenery and surrounding landscapes.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    The area offers opportunities to appreciate the region's
                    natural environment and observe local birdlife and smaller
                    wildlife before preparing for your journey into Kenya.
                    Return to your lodge for your final dinner and overnight
                    in the Kilimanjaro region.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Kaliwa Lodge
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 5
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">05</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={amboseli}
                    alt="Amboseli National Park with Mount Kilimanjaro"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 5
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Kilimanjaro → Amboseli
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Wildlife Safari
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Mount Kilimanjaro – Amboseli National Park
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, depart the Mount Kilimanjaro area and
                    cross into Kenya, continuing to Amboseli National Park.
                    Upon arrival, enjoy lunch before heading out for your
                    first game drive.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Amboseli is famous for its large elephant herds and
                    spectacular views of Mount Kilimanjaro. Look out for
                    elephants, lions, cheetahs, buffaloes, giraffes, zebras,
                    wildebeest, hippos and various antelope species.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Ol Tukai Lodge
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 6
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">06</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={amboseli}
                    alt="Amboseli elephants and Mount Kilimanjaro"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 6
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Full-Day Safari
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Amboseli
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Full-Day Amboseli National Park
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, spend the day exploring Amboseli National
                    Park on game drives across its open plains and wetlands.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    The park offers excellent opportunities to see large herds
                    of elephants, often with Mount Kilimanjaro providing a
                    spectacular backdrop. You may also encounter lions,
                    cheetahs, hyenas, buffaloes, giraffes, zebras, wildebeest,
                    gazelles and hippos.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Ol Tukai Lodge
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 7
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">07</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={abadare}
                    alt="Aberdare National Park forest"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 7
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Amboseli → Aberdare
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Forest Safari
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Amboseli – Aberdare National Park
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, depart Amboseli and travel towards the
                    Aberdare region. Upon arrival, check in to your
                    accommodation and enjoy lunch.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Later, experience the unique forest environment of
                    Aberdare, known for its lush vegetation and diverse
                    wildlife including elephants, buffaloes, leopards,
                    hyenas, bushbucks, waterbucks, warthogs and various
                    monkey species.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        The Ark
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 8
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">08</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={nakuru}
                    alt="Lake Nakuru National Park"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 8
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Aberdare → Lake Nakuru
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Rift Valley
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Aberdare – Lake Nakuru National Park
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, depart the Aberdare region and continue
                    to Lake Nakuru National Park. Enjoy lunch before heading
                    out for an afternoon game drive.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Explore the park's scenic landscapes and search for rhinos,
                    lions, leopards, buffaloes, giraffes, zebras, waterbucks
                    and baboons. Lake Nakuru is particularly known for its
                    rhino population and rich birdlife.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Sarova Lion Hill Game Lodge
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 9
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">09</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={nakuru4}
                    alt="Lake Naivasha landscape"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 9
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Lake Nakuru → Naivasha
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Great Rift Valley
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Lake Nakuru – Lake Naivasha
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, enjoy a final morning around Lake Nakuru
                    before continuing to Lake Naivasha, one of Kenya's
                    beautiful freshwater lakes in the Great Rift Valley.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Upon arrival, check in to your resort and enjoy lunch.
                    Spend the afternoon relaxing and taking in the peaceful
                    surroundings of Lake Naivasha, home to hippos, giraffes,
                    zebras, buffaloes and abundant birdlife.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Enashipai Resort & Spa
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 10
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">10</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={mara2}
                    alt="Masai Mara National Reserve"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 10
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Naivasha → Masai Mara
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Masai Mara
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Lake Naivasha – Masai Mara National Reserve
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, depart Lake Naivasha and travel to the
                    legendary Masai Mara National Reserve. Upon arrival, enjoy
                    lunch before heading out for your first game drive.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Explore the expansive savannah in search of lions,
                    leopards, cheetahs, elephants, buffaloes, giraffes,
                    zebras, wildebeest, gazelles and other wildlife. The
                    Mara's open grasslands provide exceptional opportunities
                    for predator sightings and large concentrations of plains
                    game.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Mara Serena Safari Lodge
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 11
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">11</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={mara4}
                    alt="Wildlife in the Masai Mara"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 11
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Full-Day Safari
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Big Five
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Full-Day Masai Mara National Reserve
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, spend the entire day exploring the Masai
                    Mara on game drives across its spectacular grasslands.
                    The reserve is renowned for its exceptional concentration
                    of wildlife.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Keep watch for the Big Five, including lions, elephants,
                    leopards and buffaloes, together with cheetahs, giraffes,
                    zebras, wildebeest, hippos, hyenas and numerous antelope
                    species.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Mara Serena Safari Lodge
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ==================================================
              DAY 12
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">12</span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[280px] overflow-hidden">

                  <img
                    src={mara1}
                    alt="Masai Mara safari landscape"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 12
                    </span>
                  </div>

                </div>

                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Masai Mara → Nairobi
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Departure
                    </span>

                  </div>

                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Masai Mara – Nairobi
                  </h4>

                  <p className="mt-5 leading-8 text-gray-600">
                    Begin your final morning with an early game drive in the
                    Masai Mara, giving you one last opportunity to search for
                    lions, leopards, cheetahs, elephants, buffaloes, giraffes,
                    zebras and other wildlife.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Return to your lodge for breakfast before preparing for
                    departure. Enjoy lunch before beginning your journey back
                    to Nairobi. Upon arrival, you will be dropped off at your
                    hotel, residence or another agreed location, marking the
                    end of your 12-Day Best of Kilimanjaro & Kenya Safari with
                    Daffar Tours and Travel.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        No Accommodation
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7faf7] p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Water
                      </p>
                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>
                    </div>

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

      <div className="mx-auto max-w-3xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Experience East Africa
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Safari Highlights
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          A remarkable combination of mountain scenery, diverse ecosystems,
          luxury accommodation and unforgettable wildlife encounters.
        </p>

      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224]/5 text-xl">
            🏔️
          </div>

          <h4 className="mt-5 font-black text-[#092d1a]">
            Mount Kilimanjaro
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Enjoy spectacular views and explore the natural environment around
            Africa's highest mountain.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224]/5 text-xl">
            🐘
          </div>

          <h4 className="mt-5 font-black text-[#092d1a]">
            Amboseli Elephants
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Experience some of Kenya's most memorable elephant encounters with
            Mount Kilimanjaro as the backdrop.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224]/5 text-xl">
            🦏
          </div>

          <h4 className="mt-5 font-black text-[#092d1a]">
            Rift Valley Wildlife
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Discover Aberdare, Lake Nakuru and Lake Naivasha with their varied
            landscapes and wildlife.
          </p>
        </div>

        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224]/5 text-xl">
            🦁
          </div>

          <h4 className="mt-5 font-black text-[#092d1a]">
            Masai Mara Big Five
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Finish your journey in one of Africa's most celebrated wildlife
            destinations.
          </p>
        </div>

      </div>
    </div>

    {/* ========================================================
        INCLUDED / EXCLUDED
    ======================================================== */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              What's Included
            </p>

            <h3 className="mt-1 text-2xl font-black text-[#092d1a]">
              Included in Your Safari
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-4">

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
              className="flex items-start gap-3 rounded-xl bg-[#f7faf7] p-3"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs font-black text-white">
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
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c45d] text-xl text-[#082d19]">
            −
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              What's Not Included
            </p>

            <h3 className="mt-1 text-2xl font-black text-[#092d1a]">
              Excluded from Your Safari
            </h3>
          </div>

        </div>

        <div className="mt-7 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips (guideline: US$10–15 per person per day)",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
            "Optional safari activities",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-[#f7faf7] p-3"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f5c45d] text-xs font-black text-[#082d19]">
                −
              </span>

              <p className="text-sm leading-6 text-gray-600">
                {item}
              </p>
            </div>
          ))}

          <div className="mt-5 rounded-2xl border border-[#f5c45d]/30 bg-[#f5c45d]/10 p-5">

            <p className="text-sm font-black text-[#092d1a]">
              Optional Safari Activities
            </p>

            <div className="mt-3 space-y-2 text-sm text-gray-600">
              <p>
                • Balloon Safari —{" "}
                <span className="font-bold text-[#0b4224]">
                  USD 500 per person
                </span>
              </p>

              <p>
                • Maasai Village Visit —{" "}
                <span className="font-bold text-[#0b4224]">
                  USD 50 per vehicle
                </span>
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-2xl sm:px-10 lg:px-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f5c45d]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
          Start Your Adventure
        </span>

        <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
          Ready for the Ultimate East Africa Safari?
        </h3>

        <p className="mt-4 leading-7 text-white/70">
          Let Daffar Tours and Travel create an unforgettable journey
          combining Mount Kilimanjaro, Kenya's iconic wildlife destinations
          and the legendary Masai Mara.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5c45d] px-7 py-4 text-sm font-black text-[#082d19] transition hover:-translate-y-1 hover:bg-[#ffd978]"
          >
            Start Planning
            <span>→</span>
          </a>

          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
          </a>

        </div>

      </div>
    </div>

  </div>
</section>
```
{/* ============================================================
    9-DAY MASAI MARA, LAKE NAKURU & AMBOSELI SAFARI
    WITH 3-DAY DIANI BEACH EXTENSION
============================================================ */}

<section
  id="9-day-masai-mara-nakuru-amboseli-diani"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#f5c45d]/10 blur-[120px]" />

  <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#0b4224]/10 blur-[130px]" />

  <div className="pointer-events-none absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#dba33a]/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-[#0b4224]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0b4224] shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#f5c45d]" />
        Luxury Safari & Beach Escape
      </span>

      <h2 className="mt-6 text-3xl font-black tracking-tight text-[#092d1a] sm:text-4xl lg:text-5xl">
        6-Day Masai Mara, Lake Nakuru & Amboseli Safari
      </h2>

      <p className="mx-auto mt-4 text-xl font-black text-[#dba33a] sm:text-2xl">
        With 3-Day Diani Beach Extension
      </p>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an incredible Kenya safari combining three of the
        country's most renowned wildlife destinations with a relaxing coastal
        extension in Diani Beach.
      </p>

      <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600">
        Explore the legendary Masai Mara, discover the rhino-rich landscapes
        of Lake Nakuru, experience the elephant-filled plains of Amboseli
        with views of Mount Kilimanjaro, and finish your journey on the
        beautiful Kenyan coast.
      </p>

      {/* ========================================================
          QUICK FACTS
      ======================================================== */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Duration
          </p>

          <p className="mt-2 text-lg font-black text-[#0b4224]">
            9 Days / 8 Nights
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Safari
          </p>

          <p className="mt-2 text-lg font-black text-[#0b4224]">
            6 Days
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Beach Extension
          </p>

          <p className="mt-2 text-lg font-black text-[#0b4224]">
            3 Days Diani
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Highlights
          </p>

          <p className="mt-2 text-lg font-black text-[#0b4224]">
            Big Five & Coast
          </p>
        </div>

      </div>
    </div>


    {/* ========================================================
        JOURNEY OVERVIEW
    ======================================================== */}
    <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#082d19] shadow-2xl">

      <div className="grid lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative min-h-[340px] overflow-hidden lg:min-h-[470px]">

          <img
            src={watamu1}
            alt="Masai Mara safari"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082d19]/90 via-[#082d19]/20 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">

            <span className="inline-flex rounded-full bg-[#f5c45d] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#082d19]">
              Kenya Safari & Diani Beach
            </span>

          </div>

        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            Safari Meets The Coast
          </p>

          <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            From the Mara plains to the Indian Ocean
          </h3>

          <p className="mt-5 leading-8 text-white/75">
            Begin with unforgettable wildlife encounters in the Masai Mara,
            continue through the rhino-rich landscapes of Lake Nakuru and
            elephant-filled plains of Amboseli, then trade the savannah for
            the white sands and turquoise waters of Diani Beach.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">

              <p className="text-sm font-bold text-white">
                Wildlife Adventure
              </p>

              <p className="mt-1 text-xs leading-5 text-white/60">
                Masai Mara, Lake Nakuru and Amboseli offer exceptional
                opportunities for wildlife viewing.
              </p>

            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">

              <p className="text-sm font-bold text-white">
                Coastal Escape
              </p>

              <p className="mt-1 text-xs leading-5 text-white/60">
                Finish your safari with three relaxing nights along the
                beautiful Diani coastline.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>


    {/* ========================================================
        DESTINATION JOURNEY
    ======================================================== */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Route
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Safari to Sea
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          A carefully designed journey connecting Kenya's iconic wildlife
          destinations with a relaxing Indian Ocean beach escape.
        </p>

      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* MARA */}
        <div className="group overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="relative h-56 overflow-hidden">

            <img
              src={mara2}
              alt="Masai Mara wildlife"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-4 left-4">

              <span className="rounded-full bg-[#f5c45d] px-3 py-1.5 text-xs font-black text-[#082d19]">
                DAYS 1–2
              </span>

            </div>

          </div>

          <div className="p-6">

            <h4 className="text-xl font-black text-[#092d1a]">
              Masai Mara
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Big cats, elephants, wildebeest, plains game and spectacular
              savannah landscapes.
            </p>

          </div>

        </div>


        {/* NAKURU */}
        <div className="group overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="relative h-56 overflow-hidden">

            <img
              src="https://cdn.trailfinders.com/spwwxckucq_tf67117_1500x1500.jpg"
              alt="Lake Nakuru rhinos"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-4 left-4">

              <span className="rounded-full bg-[#f5c45d] px-3 py-1.5 text-xs font-black text-[#082d19]">
                DAY 3
              </span>

            </div>

          </div>

          <div className="p-6">

            <h4 className="text-xl font-black text-[#092d1a]">
              Lake Nakuru
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Discover black and white rhinos, birdlife and the scenic Rift
              Valley landscapes.
            </p>

          </div>

        </div>


        {/* AMBOSELI */}
        <div className="group overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="relative h-56 overflow-hidden">

            <img
              src="https://www.endallah.org/images/DSC08983-2-2.jpg"
              alt="Elephants in Amboseli with Mount Kilimanjaro"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-4 left-4">

              <span className="rounded-full bg-[#f5c45d] px-3 py-1.5 text-xs font-black text-[#082d19]">
                DAYS 4–5
              </span>

            </div>

          </div>

          <div className="p-6">

            <h4 className="text-xl font-black text-[#092d1a]">
              Amboseli
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Experience huge elephant herds with spectacular views of
              Mount Kilimanjaro.
            </p>

          </div>

        </div>


        {/* DIANI */}
        <div className="group overflow-hidden rounded-3xl border border-[#0b4224]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="relative h-56 overflow-hidden">

            <img
              src={diani1}
              alt="Diani Beach Kenya"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-4 left-4">

              <span className="rounded-full bg-[#f5c45d] px-3 py-1.5 text-xs font-black text-[#082d19]">
                DAYS 6–9
              </span>

            </div>

          </div>

          <div className="p-6">

            <h4 className="text-xl font-black text-[#092d1a]">
              Diani Beach
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Relax beside white sands, turquoise waters and the tropical
              Indian Ocean coastline.
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

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Your Journey
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Day-by-Day Safari & Beach Escape
        </h3>

      </div>


      <div className="relative">

        {/* TIMELINE */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[#0b4224]/15 lg:left-7 lg:block" />

        <div className="space-y-10">


          {/* ==================================================
              DAY 1
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">

              <span className="text-sm font-black text-white">
                01
              </span>

            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">


                <div className="relative min-h-[300px] overflow-hidden">

                  <img
                   src={wilderbeast1}
                    alt="Masai Mara safari"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 1
                    </span>

                  </div>

                </div>


                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Nairobi → Masai Mara
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Wildlife Safari
                    </span>

                  </div>


                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Nairobi – Masai Mara National Reserve
                  </h4>


                  <p className="mt-5 leading-8 text-gray-600">
                    Your journey begins in Nairobi, where you will be picked
                    up by a representative from Daffar Tours and Travel and
                    driven to the Masai Mara National Reserve.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Upon arrival, check in to your camp and enjoy lunch before
                    heading out for an afternoon game drive. Explore the
                    spectacular Mara plains in search of lions, leopards,
                    cheetahs, elephants, buffaloes, giraffes, zebras,
                    wildebeest, impalas, topi and Thomson's gazelles.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    The Masai Mara is also renowned for its seasonal wildebeest
                    migration, offering spectacular wildlife viewing when the
                    herds are in the reserve.
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Alama Camp Mara
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Lunch & Dinner
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Drinking Water
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* ==================================================
              DAY 2
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">
                02
              </span>
            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[300px] overflow-hidden">

                  <img
                    src={wilderbeast2}
                    alt="Masai Mara wildlife safari"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 2
                    </span>

                  </div>

                </div>


                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Full-Day Safari
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Masai Mara
                    </span>

                  </div>


                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Full-Day Masai Mara National Reserve
                  </h4>


                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, spend the day exploring the Masai Mara
                    with game drives across its expansive grasslands.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Search for the Mara's famous predators, including lions,
                    leopards, cheetahs and hyenas, while elephants, buffaloes,
                    giraffes, zebras, wildebeest, elands, waterbucks, impalas,
                    topi and Thomson's gazelles can be seen throughout the
                    reserve.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Enjoy lunch before continuing your afternoon game drive,
                    with further opportunities for memorable wildlife
                    encounters.
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Alama Camp Mara
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Drinking Water
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* ==================================================
              DAY 3
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">
                03
              </span>
            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[300px] overflow-hidden">

                  <img
                    src="https://cdn.trailfinders.com/spwwxckucq_tf67117_1500x1500.jpg"
                    alt="Lake Nakuru rhinos"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 3
                    </span>

                  </div>

                </div>


                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Masai Mara → Lake Nakuru
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Rhino Country
                    </span>

                  </div>


                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Masai Mara – Lake Nakuru National Park
                  </h4>


                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, depart the Masai Mara and travel towards
                    Lake Nakuru National Park. Upon arrival, enjoy lunch before
                    heading out for an afternoon game drive.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Lake Nakuru is particularly famous for its rhino
                    population, offering opportunities to see both black and
                    white rhinos. As you explore the park, look out for lions,
                    leopards, buffaloes, giraffes, zebras, waterbucks, elands,
                    impalas and baboons.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    The lake also attracts a variety of birdlife, including
                    flamingos when conditions are suitable.
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Sarova Lion Hill Game Lodge
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Drinking Water
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* ==================================================
              DAY 4
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">
                04
              </span>
            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[300px] overflow-hidden">

                  <img
                    src="https://www.endallah.org/images/DSC08983-2-2.jpg"
                    alt="Amboseli elephants and Mount Kilimanjaro"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 4
                    </span>

                  </div>

                </div>


                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Lake Nakuru → Amboseli
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Elephant Country
                    </span>

                  </div>


                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Lake Nakuru – Amboseli National Park
                  </h4>


                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, depart Lake Nakuru and continue your
                    journey south towards Amboseli National Park. Upon arrival,
                    enjoy lunch before heading out for an afternoon game drive.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Amboseli is famous for its large elephant herds and
                    spectacular views of Mount Kilimanjaro. During your game
                    drive, look out for elephants, lions, cheetahs, buffaloes,
                    giraffes, zebras, wildebeest, hyenas, gazelles and other
                    plains wildlife.
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Ol Tukai Lodge
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Drinking Water
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* ==================================================
              DAY 5
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">
                05
              </span>
            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[300px] overflow-hidden">

                  <img
                    src="https://www.endallah.org/images/DSC08983-2-2.jpg"
                    alt="Amboseli elephants"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 5
                    </span>

                  </div>

                </div>


                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Full-Day Safari
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Amboseli
                    </span>

                  </div>


                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Full-Day Amboseli National Park
                  </h4>


                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, spend a full day exploring Amboseli
                    National Park on game drives across its open plains and
                    wetlands.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    The park offers exceptional opportunities to see large
                    herds of elephants with Mount Kilimanjaro providing a
                    spectacular backdrop. Search for lions, cheetahs, hyenas,
                    buffaloes, giraffes, zebras, wildebeest, impalas,
                    Thomson's gazelles and other antelope species.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Enjoy lunch before continuing your afternoon game drive
                    and taking in the magnificent scenery and wildlife of
                    Amboseli.
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Ol Tukai Lodge
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Drinking Water
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* ==================================================
              DAY 6
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">
                06
              </span>
            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[300px] overflow-hidden">

                  <img
                    src={diani4}
                    alt="Diani Beach Kenya"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 6
                    </span>

                  </div>

                </div>


                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Amboseli → Diani
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Beach Extension
                    </span>

                  </div>


                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Amboseli – Diani Beach
                  </h4>


                  <p className="mt-5 leading-8 text-gray-600">
                    After breakfast, depart Amboseli and continue your journey
                    towards the Kenyan coast. Arrive in Diani Beach and check
                    in to your resort.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    After the exciting wildlife experiences of the safari,
                    spend the remainder of the day relaxing in the beautiful
                    tropical surroundings. Enjoy the white sandy beaches,
                    warm Indian Ocean waters and peaceful coastal atmosphere.
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Diani Sea Resort
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Drinking Water
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* ==================================================
              DAY 7
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">
                07
              </span>
            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[300px] overflow-hidden">

                  <img
                    src={diani5}
                    alt="Diani Beach coastline"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 7
                    </span>

                  </div>

                </div>


                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Full-Day Relaxation
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Diani Beach
                    </span>

                  </div>


                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Full Day Diani Beach
                  </h4>


                  <p className="mt-5 leading-8 text-gray-600">
                    Enjoy a relaxed day in Diani Beach. Take time to unwind at
                    your resort and enjoy the beautiful Indian Ocean coastline.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    The day is dedicated to relaxation and experiencing the
                    tropical beauty of Diani, with its white sands, turquoise
                    waters and warm coastal atmosphere.
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Diani Sea Resort
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Drinking Water
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* ==================================================
              DAY 8
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">
                08
              </span>
            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[300px] overflow-hidden">

                  <img
                   src={diani1}
                    alt="Diani Beach tropical coast"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 8
                    </span>

                  </div>

                </div>


                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Coastal Escape
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Diani Beach
                    </span>

                  </div>


                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Full Day Diani Beach
                  </h4>


                  <p className="mt-5 leading-8 text-gray-600">
                    Enjoy another leisurely day in Diani Beach, giving you
                    more time to relax and appreciate Kenya's spectacular
                    coast.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Spend the day enjoying the peaceful surroundings of your
                    resort and the beautiful beaches of the Indian Ocean before
                    your journey comes to an end.
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Diani Sea Resort
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast, Lunch & Dinner
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Drinking Water
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* ==================================================
              DAY 9
          ================================================== */}
          <article className="relative lg:pl-20">

            <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] shadow-lg lg:flex">
              <span className="text-sm font-black text-white">
                09
              </span>
            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                <div className="relative min-h-[300px] overflow-hidden">

                  <img
                    src={diani5}
                    alt="Diani Beach Kenya"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0b4224]">
                      Day 9
                    </span>

                  </div>

                </div>


                <div className="p-7 sm:p-9 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#0b4224]/5 px-3 py-1.5 text-xs font-bold text-[#0b4224]">
                      Diani → Nairobi
                    </span>

                    <span className="rounded-full bg-[#f5c45d]/15 px-3 py-1.5 text-xs font-bold text-[#8a6200]">
                      Departure
                    </span>

                  </div>


                  <h4 className="mt-5 text-2xl font-black text-[#092d1a] sm:text-3xl">
                    Diani Beach – Nairobi
                  </h4>


                  <p className="mt-5 leading-8 text-gray-600">
                    Enjoy your final morning in Diani Beach with breakfast and
                    time to relax before departure.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    After lunch, begin your journey back to Nairobi. Upon
                    arrival, you will be dropped off at your hotel, residence
                    or another agreed location, marking the end of your Kenya
                    safari and Diani Beach extension with Daffar Tours and
                    Travel.
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Accommodation
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        No Accommodation
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meals
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Breakfast & Lunch
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#f7faf7] p-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Drinking Water
                      </p>

                      <p className="mt-2 font-bold text-[#0b4224]">
                        Provided
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </article>

        </div>

      </div>

    </div>


    {/* ========================================================
        SAFARI & BEACH HIGHLIGHTS
    ======================================================== */}
    <div className="mt-20">

      <div className="mx-auto max-w-3xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Experience Kenya
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Safari & Beach Highlights
        </h3>

      </div>


      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* HIGHLIGHT 1 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224]/5 text-xl">
            🦁
          </div>

          <h4 className="mt-5 font-black text-[#092d1a]">
            Masai Mara Wildlife
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Experience the legendary Mara plains and search for predators,
            elephants and abundant plains game.
          </p>

        </div>


        {/* HIGHLIGHT 2 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224]/5 text-xl">
            🦏
          </div>

          <h4 className="mt-5 font-black text-[#092d1a]">
            Lake Nakuru Rhinos
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Explore one of Kenya's famous rhino habitats surrounded by
            beautiful Rift Valley scenery.
          </p>

        </div>


        {/* HIGHLIGHT 3 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224]/5 text-xl">
            🐘
          </div>

          <h4 className="mt-5 font-black text-[#092d1a]">
            Amboseli Elephants
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            See impressive elephant herds with Mount Kilimanjaro creating an
            iconic safari backdrop.
          </p>

        </div>


        {/* HIGHLIGHT 4 */}
        <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224]/5 text-xl">
            🌊
          </div>

          <h4 className="mt-5 font-black text-[#092d1a]">
            Diani Beach
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            End your adventure with white sandy beaches, turquoise waters and
            a peaceful tropical atmosphere.
          </p>

        </div>

      </div>

    </div>


    {/* ========================================================
        INCLUDED / EXCLUDED
    ======================================================== */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-xl text-white">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              What's Included
            </p>

            <h3 className="mt-1 text-2xl font-black text-[#092d1a]">
              Included in Your Safari
            </h3>

          </div>

        </div>


        <div className="mt-7 space-y-4">

          {[
            "Park fees for non-residents",
            "All activities unless labeled as optional",
            "All accommodation unless listed as an upgrade",
            "A professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item) => (

            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-[#f7faf7] p-3"
            >

              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs font-black text-white">
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
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c45d] text-xl text-[#082d19]">
            −
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
              What's Not Included
            </p>

            <h3 className="mt-1 text-2xl font-black text-[#092d1a]">
              Excluded from Your Safari
            </h3>

          </div>

        </div>


        <div className="mt-7 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips (guideline: US$10–15 per person per day)",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
          ].map((item) => (

            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-[#f7faf7] p-3"
            >

              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f5c45d] text-xs font-black text-[#082d19]">
                −
              </span>

              <p className="text-sm leading-6 text-gray-600">
                {item}
              </p>

            </div>

          ))}


          {/* OPTIONAL ACTIVITIES */}
          <div className="mt-5 rounded-2xl border border-[#f5c45d]/30 bg-[#f5c45d]/10 p-5">

            <p className="text-sm font-black text-[#092d1a]">
              Optional Safari Activities
            </p>

            <div className="mt-3 space-y-2 text-sm text-gray-600">

              <p>
                • Balloon Safari —{" "}
                <span className="font-bold text-[#0b4224]">
                  USD 500 per person
                </span>
              </p>

              <p>
                • Maasai Village Visit —{" "}
                <span className="font-bold text-[#0b4224]">
                  USD 50 per vehicle
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-2xl sm:px-10 lg:px-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f5c45d]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
          Start Your Adventure
        </span>

        <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
          Ready for a Safari & Beach Escape?
        </h3>

        <p className="mt-4 leading-7 text-white/70">
          Let Daffar Tours and Travel create an unforgettable Kenya journey
          combining incredible wildlife experiences with a relaxing Diani
          Beach extension.
        </p>


        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5c45d] px-7 py-4 text-sm font-black text-[#082d19] transition hover:-translate-y-1 hover:bg-[#ffd978]"
          >
            Start Planning
            <span>→</span>
          </a>


          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/15"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
{/* ============================================================
    7-DAY TASTE OF KENYA LUXURY EXPERIENCE
    + 3-DAY DIANI BEACH EXTENSION
============================================================ */}
<section
  id="7-day-taste-of-kenya-3-day-diani"
  className="relative scroll-mt-28 overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      BACKGROUND DECORATION
  ============================================================ */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#f5c45d]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HERO / INTRO
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#0b4224]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224] shadow-sm">
        Luxury Safari + Beach Experience
      </span>

      <h1 className="mt-6 text-4xl font-black tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        7-Day Taste of Kenya Luxury Experience
        <span className="block text-[#0b4224]">
          + 3-Day Diani Extension
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Discover the highlights of Kenya on an unforgettable luxury journey
        combining the legendary Masai Mara, the scenic Great Rift Valley,
        Lake Naivasha and the elephant-filled plains of Amboseli, followed
        by a relaxing extension on the beautiful Diani Beach.
      </p>

      {/* QUICK FACTS */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Total Journey
          </p>
          <p className="mt-2 text-sm font-bold text-[#0b4224]">
            10 Days
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Safari
          </p>
          <p className="mt-2 text-sm font-bold text-[#0b4224]">
            7 Days
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Beach Extension
          </p>
          <p className="mt-2 text-sm font-bold text-[#0b4224]">
            3 Days
          </p>
        </div>

        <div className="rounded-2xl border border-[#0b4224]/10 bg-white p-5 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Style
          </p>
          <p className="mt-2 text-sm font-bold text-[#0b4224]">
            Luxury Plus
          </p>
        </div>

      </div>
    </div>

    {/* ============================================================
        ROUTE OVERVIEW
    ============================================================ */}
    <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

      <div className="border-b border-[#0b4224]/10 px-6 py-6 sm:px-8">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
          Journey Overview
        </p>

        <h2 className="mt-2 text-2xl font-black text-[#092d1a] sm:text-3xl">
          From Kenya's Wild Heart to the Indian Ocean
        </h2>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            number: "01",
            title: "Masai Mara",
            subtitle: "Days 1–2",
          },
          {
            number: "02",
            title: "Lake Nakuru",
            subtitle: "Day 3",
          },
          {
            number: "03",
            title: "Lake Naivasha",
            subtitle: "Day 4",
          },
          {
            number: "04",
            title: "Amboseli",
            subtitle: "Days 5–6",
          },
          {
            number: "05",
            title: "Diani Beach",
            subtitle: "Days 7–10",
          },
        ].map((place) => (
          <div
            key={place.number}
            className="border-b border-[#0b4224]/10 p-6 last:border-b-0 sm:border-r lg:border-b-0 lg:last:border-r-0"
          >
            <span className="text-xs font-black text-[#f5c45d]">
              {place.number}
            </span>

            <h3 className="mt-2 font-bold text-[#092d1a]">
              {place.title}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {place.subtitle}
            </p>
          </div>
        ))}

      </div>
    </div>

    {/* ============================================================
        FEATURE IMAGE
    ============================================================ */}
    <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#0b4224] shadow-xl">

      <div className="grid lg:grid-cols-2">

        <div className="relative min-h-[320px] lg:min-h-[460px]">

          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85"
            alt="African wildlife safari landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-[#0b4224]/80" />

          <div className="absolute bottom-7 left-7 right-7">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
              Kenya Safari
            </p>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              From the Mara to the Coast
            </h2>

          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            The Experience
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Wildlife, landscapes and tropical relaxation
          </h2>

          <p className="mt-5 leading-8 text-white/75">
            Begin among Kenya's iconic wildlife destinations before
            transitioning to the tranquil Indian Ocean coastline. Experience
            game drives in the Masai Mara and Amboseli, explore the Great
            Rift Valley and finish with several relaxing days on Diani Beach.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">

            {[
              "Masai Mara",
              "Lake Nakuru",
              "Lake Naivasha",
              "Amboseli",
              "Diani Beach",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white/90"
              >
                {item}
              </span>
            ))}

          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        DAY-BY-DAY ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mb-12 max-w-3xl">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
          Your Journey
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#092d1a] sm:text-4xl">
          Day-by-Day Luxury Experience
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          Follow a carefully designed journey from Kenya's famous safari
          destinations to the white sands and warm waters of Diani Beach.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE */}
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
                  Nairobi – Masai Mara National Reserve
                </h3>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your journey begins in Nairobi, where you will be picked up
                  by a representative from Daffar Tours and Travel and driven
                  to the Masai Mara National Reserve. Upon arrival, check in
                  to your camp and enjoy lunch before heading out for your
                  first afternoon game drive.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Explore the spectacular Mara plains in search of lions,
                  leopards, cheetahs, elephants, buffaloes, giraffes, zebras,
                  wildebeest, impalas, topi and Thomson's gazelles. The Masai
                  Mara is also famous for the annual wildebeest migration,
                  when vast herds of wildebeest and other plains animals move
                  through the ecosystem.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your camp in the evening for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Alama Camp Mara
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meals
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Lunch & Dinner
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                    Drinking Water
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Drinking water provided.
                  </p>

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
                  Full-Day Masai Mara National Reserve
                </h3>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, spend the day exploring the Masai Mara with
                  game drives across its expansive savannah. Search for lions,
                  leopards, cheetahs and hyenas, while elephants, buffaloes,
                  giraffes, zebras, wildebeest, elands, waterbucks, impalas,
                  topi and Thomson's gazelles can be encountered throughout
                  the reserve.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Enjoy lunch before continuing your afternoon game drive,
                  taking in the magnificent scenery and exceptional wildlife
                  viewing.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Alama Camp Mara
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meals
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                    Drinking Water
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Drinking water provided.
                  </p>

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
                  Masai Mara – Lake Nakuru National Park
                </h3>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart the Masai Mara and travel towards
                  Lake Nakuru National Park. Upon arrival, enjoy lunch before
                  heading out for an afternoon game drive.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Lake Nakuru is renowned for its rhino population, offering
                  opportunities to see black and white rhinos. As you explore
                  the park, look out for lions, leopards, buffaloes, giraffes,
                  zebras, waterbucks, elands, impalas and baboons. The lake
                  and surrounding habitats also attract a variety of bird
                  species.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Sarova Lion Hill Game Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meals
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                    Drinking Water
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Drinking water provided.
                  </p>

                </div>

              </div>
            </div>
          </article>

          {/* ============================================================
              DAY 4
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              04
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 4
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Lake Nakuru – Lake Naivasha
                </h3>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart Lake Nakuru and continue to Lake
                  Naivasha in the Great Rift Valley. Upon arrival, check in
                  to your resort and enjoy lunch.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Spend the afternoon enjoying the peaceful surroundings of
                  the lake and its beautiful landscapes. The Lake Naivasha
                  area is home to hippos, giraffes, zebras, buffaloes,
                  waterbucks and various antelope species. The lake also
                  supports abundant birdlife, making it a wonderful setting
                  for nature and wildlife viewing.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Enashipai Resort & Spa
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meals
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                    Drinking Water
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Drinking water provided.
                  </p>

                </div>

              </div>
            </div>
          </article>

          {/* ============================================================
              DAY 5
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              05
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 5
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Lake Naivasha – Amboseli National Park
                </h3>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart Lake Naivasha and travel south
                  towards Amboseli National Park. Upon arrival, enjoy lunch
                  before heading out for an afternoon game drive.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Amboseli is famous for its large elephant herds and
                  spectacular views of Mount Kilimanjaro. During your game
                  drive, search for elephants, lions, cheetahs, buffaloes,
                  giraffes, zebras, wildebeest, hyenas, gazelles and other
                  plains wildlife.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Ol Tukai Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meals
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                    Drinking Water
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Drinking water provided.
                  </p>

                </div>

              </div>
            </div>
          </article>

          {/* ============================================================
              DAY 6
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              06
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 6
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Full-Day Amboseli National Park
                </h3>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, spend the day exploring Amboseli National
                  Park on game drives through its open plains and wetlands.
                  The park provides excellent opportunities to see large
                  herds of elephants with Mount Kilimanjaro forming a
                  spectacular backdrop.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Continue your search for lions, cheetahs, hyenas, buffaloes,
                  giraffes, zebras, wildebeest, impalas, Thomson's gazelles
                  and other antelope species. Enjoy lunch before continuing
                  your afternoon game drive and taking in the magnificent
                  landscapes and wildlife.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Ol Tukai Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meals
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                    Drinking Water
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Drinking water provided.
                  </p>

                </div>

              </div>
            </div>
          </article>

          {/* ============================================================
              DAY 7
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              07
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.4fr_0.6fr]">

                <div className="relative min-h-[280px]">

                  <img
                    src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1400&q=85"
                    alt="Diani Beach Kenya"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-[#0b4224]/50" />

                </div>

                <div>

                  <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                      Day 7
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                      Amboseli – Diani Beach
                    </h3>

                  </div>

                  <div className="p-6 sm:p-8">

                    <p className="leading-8 text-gray-600">
                      After breakfast, depart Amboseli and continue your
                      journey towards Kenya's beautiful Indian Ocean coast.
                      Arrive in Diani Beach and check in to your resort.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                      After your safari adventure, spend the remainder of the
                      day relaxing in the tropical surroundings of Diani.
                      Enjoy the white sandy beaches, turquoise waters and
                      warm coastal atmosphere before dinner and overnight.
                    </p>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">

                      <div className="rounded-2xl bg-[#f7faf7] p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                          Accommodation
                        </p>

                        <p className="mt-2 font-bold text-[#0b4224]">
                          Diani Sea Resort
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#f7faf7] p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                          Meals
                        </p>

                        <p className="mt-2 font-bold text-[#0b4224]">
                          Breakfast, Lunch & Dinner
                        </p>
                      </div>

                    </div>

                    <div className="mt-4 rounded-2xl border border-[#0b4224]/10 bg-[#f7faf7] p-5">

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                        Beach Extension
                      </p>

                      <p className="mt-2 text-sm text-gray-600">
                        Begin your relaxing Diani Beach extension.
                      </p>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </article>

          {/* ============================================================
              DAY 8
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              08
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 8
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Full Day Diani Beach
                </h3>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Enjoy a relaxing day in Diani Beach. Take time to unwind
                  at your resort and appreciate the beauty of Kenya's tropical
                  coastline.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Enjoy the white sands, warm Indian Ocean waters and peaceful
                  surroundings as you relax after your safari adventure.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      Diani Sea Resort
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meals
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
              DAY 9
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              09
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.4fr_0.6fr]">

                <div className="relative min-h-[280px]">

                  <img
                    src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=1400&q=85"
                    alt="Tropical Indian Ocean coastline"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-[#0b4224]/50" />

                </div>

                <div>

                  <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                      Day 9
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                      Full Day Diani Beach
                    </h3>

                  </div>

                  <div className="p-6 sm:p-8">

                    <p className="leading-8 text-gray-600">
                      Enjoy another leisurely day in Diani Beach, with time
                      to relax and enjoy the spectacular Indian Ocean
                      coastline.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                      Take in the beautiful tropical surroundings and make
                      the most of your final full day on the Kenyan coast.
                    </p>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">

                      <div className="rounded-2xl bg-[#f7faf7] p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                          Accommodation
                        </p>

                        <p className="mt-2 font-bold text-[#0b4224]">
                          Diani Sea Resort
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#f7faf7] p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                          Meals
                        </p>

                        <p className="mt-2 font-bold text-[#0b4224]">
                          Breakfast, Lunch & Dinner
                        </p>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </article>

          {/* ============================================================
              DAY 10
          ============================================================ */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-xs font-black text-white shadow-md md:flex">
              10
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#0b4224]/10 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 10
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Diani Beach – Mombasa
                </h3>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Enjoy your final morning in Diani with breakfast and time
                  to relax before departure. After lunch, proceed to Mombasa
                  for your onward journey.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  You will be dropped off at your agreed location, marking
                  the end of your Taste of Kenya Luxury Experience and Diani
                  Beach extension.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Accommodation
                    </p>

                    <p className="mt-2 font-bold text-[#0b4224]">
                      No Accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Meals
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
        EXPERIENCE HIGHLIGHTS
    ============================================================ */}
    <div className="mt-20">

      <div className="text-center">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
          Experience Highlights
        </p>

        <h2 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          The Best of Kenya in One Journey
        </h2>

      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {[
          {
            title: "Masai Mara Wildlife",
            text: "Explore the legendary Mara plains and search for predators, elephants, giraffes, zebras and abundant plains game.",
          },
          {
            title: "Lake Nakuru Rhinos",
            text: "Discover one of Kenya's famous rhino destinations with opportunities to see black and white rhinos.",
          },
          {
            title: "Great Rift Valley",
            text: "Experience the scenic landscapes and peaceful freshwater environment around Lake Naivasha.",
          },
          {
            title: "Amboseli Elephants",
            text: "See large elephant herds with spectacular Mount Kilimanjaro views across the Amboseli plains.",
          },
          {
            title: "Luxury Accommodation",
            text: "Enjoy carefully selected accommodation including Alama Camp Mara, Ol Tukai Lodge and Diani Sea Resort.",
          },
          {
            title: "Diani Beach",
            text: "Finish your safari with relaxing days among white sands, turquoise waters and Kenya's tropical coastline.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[1.5rem] border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b4224]/10 text-lg font-bold text-[#0b4224]">
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
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-20 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] border border-[#0b4224]/10 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b4224] text-lg font-bold text-white">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b4224]">
              Included
            </p>

            <h3 className="mt-1 text-2xl font-black text-[#092d1a]">
              Your Safari Includes
            </h3>

          </div>
        </div>

        <ul className="mt-7 space-y-4">

          {[
            "Park fees (for non-residents)",
            "All activities unless labeled as optional",
            "All accommodation unless listed as upgrade",
            "A professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified in the itinerary",
            "Drinks as specified in the itinerary",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-gray-600"
            >

              <span className="mt-1 text-[#0b4224]">
                ✓
              </span>

              <span>
                {item}
              </span>

            </li>
          ))}

        </ul>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-[#f5c45d]/20 bg-white p-7 shadow-sm sm:p-9">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5c45d]/20 text-lg font-bold text-[#8a6418]">
            !
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6418]">
              Excluded
            </p>

            <h3 className="mt-1 text-2xl font-black text-[#092d1a]">
              Not Included
            </h3>

          </div>
        </div>

        <ul className="mt-7 space-y-4">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline: US$10–15 per person per day",
            "Personal items, souvenirs, travel insurance and visa fees",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-gray-600"
            >

              <span className="mt-1 text-[#8a6418]">
                •
              </span>

              <span>
                {item}
              </span>

            </li>
          ))}

        </ul>

        {/* OPTIONAL ACTIVITIES */}
        <div className="mt-8 rounded-2xl bg-[#f7faf7] p-5">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b4224]">
            Optional Safari Activities
          </p>

          <div className="mt-4 space-y-3">

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-600">
                Balloon Safari
              </span>

              <span className="font-bold text-[#0b4224]">
                USD 500 / person
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-600">
                Maasai Village Visit
              </span>

              <span className="font-bold text-[#0b4224]">
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
    <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#092d1a] px-7 py-12 text-center sm:px-10 lg:px-16">

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
        Safari + Beach
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black text-white sm:text-4xl">
        Experience Kenya from Savannah to Sea
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
        Discover iconic wildlife destinations, spectacular landscapes and
        the tropical beauty of Diani Beach on one unforgettable luxury
        journey through Kenya.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[#f5c45d] px-7 py-3.5 text-sm font-bold text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-[#e9b94e]"
        >
          Plan This Journey
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