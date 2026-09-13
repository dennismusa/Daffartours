/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import kenya from "../assets/kenya.jpg";
import meru from "../assets/meru.jpg";
import kili1 from "../assets/kili1.jpg";
import kili2 from "../assets/kili2.jpg";
import mara1 from "../assets/mara1.jpg";
import mara2 from "../assets/mara2.jpg";
import mara3 from "../assets/mara3.jpg";
import mara4 from "../assets/mara4.jpg";
import nakuru2 from "../assets/nakuru2.jpg";
import serengeti3 from "../assets/serengeti3.jpg";
import photography1 from "../assets/photography1.jpg";
import photography2 from "../assets/photography2.jpg";
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
    src={photography2}
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
    
        <span className="block text-[#f5c45d]">
          Photography Itineraries
        </span>
      </h1>

      
    </div>
  </div>
</section>



{/* ============================================================
    05 — PHOTOGRAPHY SAFARIS
============================================================ */}
<section
  id="photography-safaris"
  className="relative overflow-hidden bg-[#07140C] py-20 sm:py-24 lg:py-32"
>
  {/* SUBTLE BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src={photography1}
      alt=""
      className="h-full w-full object-cover opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#07140C] via-[#07140C]/95 to-[#07140C]/75" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#07140C] via-transparent to-[#07140C]/40" />
  </div>

  {/* DECORATIVE GLOW */}
  <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

    {/* ============================================================
        INTRO
    ============================================================ */}
    <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">

      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#F5A623]" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F5A623]">
            Photography Safaris
          </span>
        </div>

        <h2 className="font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          See Africa
          <span className="block italic text-[#F5A623]">
            Through Your Lens
          </span>
        </h2>
      </div>

      <div className="lg:pb-2">
        <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
          At Daffar Tours and Travel, we design Photography Safaris for
          travelers who see the world in light and shadow, shape and texture.
          These journeys are more than game drives; they are an invitation to
          capture the spirit of Africa.
        </p>
      </div>

    </div>


    {/* ============================================================
        FEATURED IMAGE + CONTENT
    ============================================================ */}
    <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">

      {/* LARGE IMAGE */}
      <div className="group relative overflow-hidden rounded-[2.5rem]">
        <img
          src={photography1}
          alt="African wildlife photography safari"
          className="h-[440px] w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-[580px]"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* IMAGE CAPTION */}
        <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">

          <div className="flex items-end justify-between gap-6">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
                The Art of the Wild
              </p>

              <p className="mt-2 max-w-lg font-serif text-2xl leading-tight text-white sm:text-3xl">
                Every moment becomes a story worth remembering.
              </p>
            </div>

            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md sm:flex">
              <span className="text-xl text-white">↗</span>
            </div>

          </div>

        </div>
      </div>


      {/* RIGHT CONTENT */}
      <div className="flex flex-col rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm sm:p-9">

        <p className="text-sm leading-7 text-white/60">
          Led by guides with an eye for composition and a deep love for the
          wild, you will explore iconic reserves and hidden gems known for
          dramatic scenery and thriving wildlife.
        </p>

        <p className="mt-5 text-sm leading-7 text-white/60">
          Each day is timed to match nature’s perfect light, with early morning
          outings and golden-hour evenings when animals are most active and the
          savannah glows with warm colour.
        </p>


        {/* FEATURES */}
        <div className="mt-8 space-y-3">

          {[
            {
              number: "01",
              title: "Golden Light",
              text: "Early mornings and magical evenings.",
            },
            {
              number: "02",
              title: "Wildlife Moments",
              text: "Patient encounters with Africa's iconic species.",
            },
            {
              number: "03",
              title: "Expert Guidance",
              text: "Guides who understand the art of photography.",
            },
            {
              number: "04",
              title: "Time & Flexibility",
              text: "Stay longer when the perfect moment arrives.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group flex gap-4 rounded-2xl border border-white/5 bg-black/10 p-4 transition duration-300 hover:border-[#F5A623]/30 hover:bg-white/[0.06]"
            >
              <span className="pt-1 font-serif text-xs text-[#F5A623]">
                {item.number}
              </span>

              <div>
                <h3 className="font-serif text-lg text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/45">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>


        {/* CLOSING QUOTE */}
        <div className="mt-auto pt-9">

          <div className="h-px w-full bg-white/10" />

          <p className="mt-7 font-serif text-xl italic leading-8 text-white/90 sm:text-2xl">
            “Let every frame hold a piece of Africa’s soul.”
          </p>

        </div>

      </div>

    </div>


    {/* ============================================================
        BOTTOM STRIP
    ============================================================ */}
    <div className="mt-6 grid gap-3 sm:grid-cols-3">

      {[
        "Wildlife Portraits",
        "African Landscapes",
        "Golden Hour Experiences",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-center transition hover:border-[#F5A623]/30"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            {item}
          </span>
        </div>
      ))}

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


<section
        id="3-day-best-of-mount-kilimanjaro"
        className="relative overflow-hidden py-20 lg:py-28"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          {/* HERO */}
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem]">

            <img
              src={kili1}
              alt="Mount Kilimanjaro rising above Amboseli National Park"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

            <div className="relative z-10 flex min-h-[560px] items-center px-7 py-14 sm:px-12 lg:px-16">

              <div className="max-w-3xl text-white">

                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md">
                  Kenya Luxury Safari
                </span>

                <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  3-Day Best of
                  <span className="mt-2 block text-amber-400">
                    Mount Kilimanjaro Views
                  </span>
                  <span className="mt-2 block">
                    Luxury Safari
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                  Experience the breathtaking landscapes of Amboseli National
                  Park, where sweeping savannahs, abundant wildlife, and
                  spectacular views of Mount Kilimanjaro come together to create
                  an unforgettable African adventure.
                </p>

              </div>

            </div>
          </div>


          {/* QUICK FACTS */}

          <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-4 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {amboseliFacts.map((item) => (
                <QuickFact
                  key={item.title}
                  {...item}
                />
              ))}

            </div>
          </div>


          {/* INTRODUCTION */}

          <div className="mx-auto mt-20 max-w-5xl">

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:p-12">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                The Amboseli Experience
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Wildlife Beneath Africa's Highest Mountain
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Experience the breathtaking landscapes of Amboseli National
                Park on this three-day luxury safari, where sweeping savannahs,
                abundant wildlife, and spectacular views of Mount Kilimanjaro
                create an unforgettable African adventure.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Amboseli is renowned for its large elephant herds and iconic
                views of Mount Kilimanjaro. With two full days dedicated to
                exploring the park, you’ll have excellent opportunities to
                encounter elephants, lions, giraffes, zebras, buffaloes,
                wildebeests, and a wide variety of birdlife.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                This carefully paced safari combines exciting game drives with
                the comfort and tranquility of Elerai Camp, offering a memorable
                escape into one of Kenya’s most scenic wildlife destinations.
              </p>

            </div>
          </div>


          {/* ITINERARY */}

          <div className="mt-24">

            <SectionHeader
              eyebrow="Your Safari Journey"
              title="Day-by-Day Itinerary"
              description="A carefully paced journey through Amboseli National Park, combining memorable wildlife encounters with spectacular mountain scenery."
            />

            <div className="relative mx-auto mt-14 max-w-5xl">

              {/* Amboseli Day 1 */}
              <DayCard
                number={1}
                title="Nairobi to Amboseli National Park"
                description={[
                  "Your adventure begins with an early morning departure from Nairobi as you travel south toward Amboseli National Park. Upon arrival in Amboseli, you’ll enter the park and begin your first game drive.",
                  "The park is famous for its spectacular backdrop of Mount Kilimanjaro and its thriving elephant population. As you explore the open savannah, keep an eye out for elephants, zebras, wildebeests, giraffes, buffaloes, antelopes, and, with some luck, lions and other predators.",
                  "After your game drive, continue to Elerai Camp, where you’ll check in and settle into your luxurious surroundings. Enjoy a delicious dinner and a peaceful evening surrounded by the sights and sounds of the African wilderness.",
                ]}
                details={[
                  {
                    title: "Main Destination",
                    value: "Amboseli National Park",
                  },
                  {
                    title: "Accommodation",
                    value: "Elerai Camp",
                  },
                  {
                    title: "Meals",
                    value: "Lunch & Dinner",
                    note: "Drinking water included",
                  },
                ]}
              />


              {/* Amboseli Day 2 */}

              <DayCard
                number={2}
                title="Full-Day Amboseli National Park Experience"
                description={[
                  "After breakfast, set out for a full day of exploration in Amboseli National Park. With Mount Kilimanjaro rising dramatically in the distance, you’ll traverse the park’s diverse landscapes, including open plains, seasonal wetlands, acacia woodland, and areas around the Amboseli swamps.",
                  "The park is particularly famous for its elephants, which can often be seen moving across the plains or gathering around the wetlands. You may also encounter lions, cheetahs, hyenas, giraffes, zebras, wildebeests, buffaloes, hippos, and numerous species of birds.",
                  "Enjoy a picnic lunch or return to camp for lunch, depending on the day’s game-drive schedule. The afternoon offers another opportunity for wildlife viewing as changing light creates beautiful photographic conditions.",
                  "When weather conditions are clear, Mount Kilimanjaro may provide an unforgettable backdrop to your wildlife experience. Later, return to Elerai Camp for dinner and a relaxing evening.",
                ]}
                highlight={{
                  title: "Signature Experience",
                  heading: "Wildlife with Mount Kilimanjaro as Your Backdrop",
                  text: "Explore Amboseli’s plains and wetlands while enjoying the possibility of spectacular views of Mount Kilimanjaro, creating exceptional opportunities for wildlife photography.",
                }}
                details={[
                  {
                    title: "Main Destination",
                    value: "Amboseli National Park",
                  },
                  {
                    title: "Accommodation",
                    value: "Elerai Camp",
                  },
                  {
                    title: "Meals",
                    value: "Breakfast, Lunch & Dinner",
                    note: "Drinking water included",
                  },
                ]}
              />


              {/* Amboseli Day 3 */}

              <DayCard
                number={3}
                finalDay
                label="Final Day"
                title="Amboseli – Final Game Drive – Nairobi"
                description={[
                  "Wake up to the peaceful atmosphere of the Amboseli wilderness and enjoy breakfast at camp. Depending on your departure schedule, you’ll have an opportunity for a final morning game drive through the park.",
                  "The cooler morning hours are ideal for wildlife activity, offering one last chance to see elephants, giraffes, zebras, buffaloes, and other animals against the magnificent backdrop of Mount Kilimanjaro.",
                  "After the game drive, begin your journey back toward Nairobi. Enjoy lunch along the way before continuing to Nairobi, where you’ll arrive in the afternoon or early evening.",
                  "Your safari concludes with memories of Amboseli’s extraordinary wildlife, open landscapes, and unforgettable mountain views.",
                ]}
                details={[
                  {
                    title: "Main Destination",
                    value: "Nairobi",
                  },
                  {
                    title: "Accommodation",
                    value: "None",
                  },
                  {
                    title: "Meals",
                    value: "Breakfast & Lunch",
                    note: "Drinking water included",
                  },
                ]}
              />

            </div>
          </div>


          {/* INCLUSIONS */}

          <div className="mt-24 grid gap-8 lg:grid-cols-2">

            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/50 p-7 sm:p-9">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Included
              </p>

              <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
                What's Included
              </h3>

              <InfoList items={amboseliIncluded} />

            </div>


            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Excluded
              </p>

              <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
                Additional Expenses
              </h3>

              <InfoList
                items={amboseliExcluded}
                included={false}
              />

            </div>

          </div>


          {/* CTA */}

          <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-14 text-center sm:px-12">

            <div className="relative">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                Discover Amboseli
              </p>

              <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                Wildlife. Wilderness. Kilimanjaro.
              </h3>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                Experience one of Kenya's most spectacular safari destinations
                with unforgettable wildlife encounters and breathtaking views
                of Mount Kilimanjaro.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
              >
                Plan Your Safari
              </Link>

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
    6-DAY MASAI MARA, SERENGETI & NGORONGORO LUXURY SAFARI

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