/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

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
    src="https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=2200&q=85"
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
          Island Getaway Itineraries
        </span>
      </div>

      {/* TITLE */}
      <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Seychelles
        <span className="block text-[#f5c45d]">
          Getaway Itineraries
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
        Escape to the tropical paradise of Seychelles, where pristine beaches,
        turquoise lagoons, lush island landscapes and unforgettable coastal
        experiences come together in beautifully crafted journeys.
      </p>

    </div>
  </div>
</section>

{/* ============================================================
    4-DAY SEYCHELLES GETAWAY — LUXURY ISLAND ESCAPE
============================================================ */}

<section
  id="4-day-seychelles-getaway"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-32"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[45%] h-[30rem] w-[30rem] rounded-full bg-[#0b4224]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* ========================================================
        INTRO
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#dba33a]/30 bg-white px-5 py-2 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#0b4224]">
          Luxury Island Escape
        </span>
      </div>

      <h2 className="font-serif text-4xl font-medium leading-tight text-[#082d19] sm:text-5xl lg:text-6xl">
        4-Day Seychelles
        <span className="block text-[#b98220]">
          Getaway
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Unwind in one of the world's most beautiful island destinations with
        four unforgettable days in the Seychelles. Discover powdery white
        beaches, crystal-clear lagoons, lush tropical forests and dramatic
        granite landscapes while enjoying the perfect balance of relaxation,
        romance and soft adventure.
      </p>

      {/* QUICK INFO */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">

        {[
          ["04", "Days"],
          ["03", "Nights"],
          ["03", "Islands"],
          ["Luxury", "Experience"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-2xl border border-gray-200 bg-white px-4 py-5 shadow-sm"
          >
            <div className="font-serif text-2xl font-semibold text-[#0b4224]">
              {value}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              {label}
            </div>
          </div>
        ))}

      </div>
    </div>


    {/* ========================================================
        HERO IMAGE COLLAGE
    ======================================================== */}
    <div className="mt-16 grid gap-4 lg:grid-cols-12 lg:h-[620px]">

      {/* MAIN IMAGE */}
      <div className="group relative overflow-hidden rounded-[2rem] lg:col-span-7">
        <img
          src="https://cdn-s-www.leprogres.fr/images/39730715-7AD1-4D17-A1F2-9043413F6A43/NW_raw/mahel-archipel-independant-des-seychelles-comprend-115-iles-dans-l-ocean-indien-%28au-nord-de-madagascar%29-la-plus-grande-s-appelle-mahe-on-y-trouve-tous-les-ingredients-qui-font-tomber-les-visiteurs-sous-le-charme-notamment-une-myriade-de-plages-sublimes-ou-la-mer-vraiment-turquoise-a-une-temperature-entre-27-et-29-degres-photo-vitalii-ustymenko-unsplash-1723453672.jpg"
          alt="Tropical beach on Mahé Island, Seychelles"
          className="h-full min-h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 p-7 text-white sm:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0c96b]">
            Mahé Island
          </p>

          <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
            Your Island Escape Begins
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-7 text-white/85">
            Turquoise waters, granite boulders, palm-lined beaches and
            laid-back island luxury.
          </p>
        </div>
      </div>


      {/* SIDE IMAGES */}
      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">

        <div className="group relative min-h-[260px] overflow-hidden rounded-[2rem]">
          <img
            src="https://www.myboutiquehotel.com/photos/large/carana-beach-hotel-glacis.jpg"
            alt="CaranaBeach Hotel Seychelles"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "https://www.seyvillas.com/img/guide/112/1024x576/hiking-morne-blanc-trail-3-copyright-seyvillas.jpg";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f0c96b]">
              Stay
            </p>
            <h3 className="mt-1 font-serif text-2xl">
              CaranaBeach Hotel
            </h3>
          </div>
        </div>

        <div className="group relative min-h-[260px] overflow-hidden rounded-[2rem]">
          <img
            src="https://media.hoponmyjourney.com/media/2021/07/02155416/Mahe-Morne-Blanc-Trail-9.jpeg"
            alt="Morne Blanc Trail Seychelles"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f0c96b]">
              Explore
            </p>
            <h3 className="mt-1 font-serif text-2xl">
              Tropical Adventures
            </h3>
          </div>
        </div>

      </div>
    </div>


    {/* ========================================================
        ISLAND HIGHLIGHTS
    ======================================================== */}
    <div className="mt-24">

      <div className="max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b98220]">
          The Experience
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#082d19] sm:text-4xl">
          Three islands. One unforgettable escape.
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          From the tropical charm of Mahé to the natural wonders of Praslin
          and the legendary beaches of La Digue, this journey brings together
          the very best of the Seychelles.
        </p>
      </div>


      <div className="mt-10 grid gap-6 md:grid-cols-3">

        {/* MAHE */}
        <div className="group overflow-hidden rounded-[1.8rem] border border-gray-100 bg-white shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://cdn-s-www.leprogres.fr/images/39730715-7AD1-4D17-A1F2-9043413F6A43/NW_raw/mahel-archipel-independant-des-seychelles-comprend-115-iles-dans-l-ocean-indien-%28au-nord-de-madagascar%29-la-plus-grande-s-appelle-mahe-on-y-trouve-tous-les-ingredients-qui-font-tomber-les-visiteurs-sous-le-charme-notamment-une-myriade-de-plages-sublimes-ou-la-mer-vraiment-turquoise-a-une-temperature-entre-27-et-29-degres-photo-vitalii-ustymenko-unsplash-1723453672.jpg"
              alt="Mahé Island beach"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#0b4224]">
              Day 1 & 3
            </div>
          </div>

          <div className="p-7">
            <h3 className="font-serif text-2xl text-[#082d19]">
              Mahé Island
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Your tropical base for the journey. Enjoy beachside relaxation,
              luxury accommodation, ocean views, spa experiences, snorkeling
              and optional hiking through Morne Seychellois National Park.
            </p>
          </div>
        </div>


        {/* PRASLIN */}
        <div className="group overflow-hidden rounded-[1.8rem] border border-gray-100 bg-white shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://www.seychelles.com/images/vallee-de-mai.jpg"
              alt="Vallée de Mai Praslin Seychelles"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src =
                  "https://www.pelago.com/img/products/CA-Canada/nature-trail--morne-blanc-mahe/c501daa3-0855-4d6e-ae8d-97e183c49c0b_nature-trail--morne-blanc-mahe-xlarge.jpg";
              }}
            />

            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#0b4224]">
              Day 2
            </div>
          </div>

          <div className="p-7">
            <h3 className="font-serif text-2xl text-[#082d19]">
              Praslin Island
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Discover the extraordinary Vallée de Mai Nature Reserve and its
              ancient palm forest, home to the iconic Coco de Mer.
            </p>
          </div>
        </div>


        {/* LA DIGUE */}
        <div className="group overflow-hidden rounded-[1.8rem] border border-gray-100 bg-white shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://cdn.getyourguide.com/img/location/5c9d1f2e7c2d7.jpeg"
              alt="Anse Source d'Argent La Digue Seychelles"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src =
                  "https://www.leprogres.fr/images/39730715-7AD1-4D17-A1F2-9043413F6A43/NW_raw/mahel-archipel-independant-des-seychelles-comprend-115-iles-dans-l-ocean-indien-%28au-nord-de-madagascar%29-la-plus-grande-s-appelle-mahe-on-y-trouve-tous-les-ingredients-qui-font-tomber-les-visiteurs-sous-le-charme-notamment-une-myriade-de-plages-sublimes-ou-la-mer-vraiment-turquoise-a-une-temperature-entre-27-et-29-degres-photo-vitalii-ustymenko-unsplash-1723453672.jpg";
              }}
            />

            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#0b4224]">
              Day 2
            </div>
          </div>

          <div className="p-7">
            <h3 className="font-serif text-2xl text-[#082d19]">
              La Digue Island
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Explore one of the Seychelles' most iconic landscapes at Anse
              Source d'Argent, surrounded by white sand, turquoise water and
              dramatic granite boulders.
            </p>
          </div>
        </div>

      </div>
    </div>


    {/* ========================================================
        DAY-BY-DAY
    ======================================================== */}
    <div className="mt-24">

      <div className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b98220]">
          The Journey
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#082d19] sm:text-4xl lg:text-5xl">
          Your 4-Day Island Escape
        </h2>
      </div>


      <div className="mx-auto mt-14 max-w-5xl space-y-6">

        {/* DAY 1 */}
        <div className="grid gap-6 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg md:grid-cols-[110px_1fr]">

          <div className="flex items-center justify-center bg-[#082d19] p-6 text-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
                Day
              </div>
              <div className="font-serif text-5xl text-white">
                01
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b98220]">
              Mahé Island
            </p>

            <h3 className="mt-2 font-serif text-2xl text-[#082d19] sm:text-3xl">
              Arrival in Seychelles & Island Welcome
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Arrive in Seychelles and enjoy a warm island welcome before
              transferring to CaranaBeach Hotel on Mahé Island. After check-in,
              settle into your ocean-facing accommodation and enjoy a relaxed
              lunch at the beachfront restaurant.
            </p>

            <p className="mt-3 leading-8 text-gray-600">
              Spend the afternoon beside the pool, on the beach or exploring
              the nearby coastline. End your first evening with a tropical
              cocktail and an elegant dinner beneath the stars.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["CaranaBeach Hotel", "Lunch & Dinner", "Beachside Relaxation"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#f4f7f2] px-4 py-2 text-xs font-semibold text-[#0b4224]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>


        {/* DAY 2 */}
        <div className="grid gap-6 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg md:grid-cols-[110px_1fr]">

          <div className="flex items-center justify-center bg-[#0b4224] p-6 text-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
                Day
              </div>
              <div className="font-serif text-5xl text-white">
                02
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b98220]">
              Praslin & La Digue
            </p>

            <h3 className="mt-2 font-serif text-2xl text-[#082d19] sm:text-3xl">
              Full-Day Island Adventure
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              After breakfast, set out by high-speed ferry or boat for a full
              day of island exploration. Discover Praslin and the famous
              Vallée de Mai Nature Reserve, where the rare Coco de Mer palm
              flourishes.
            </p>

            <p className="mt-3 leading-8 text-gray-600">
              Continue to La Digue and explore the island's peaceful
              bicycle-friendly paths before visiting the spectacular Anse
              Source d'Argent. Enjoy lunch by the beach before returning to
              Mahé in the late afternoon.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Praslin",
                "Vallée de Mai",
                "La Digue",
                "Anse Source d'Argent",
                "All Meals",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#f4f7f2] px-4 py-2 text-xs font-semibold text-[#0b4224]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>


        {/* DAY 3 */}
        <div className="grid gap-6 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg md:grid-cols-[110px_1fr]">

          <div className="flex items-center justify-center bg-[#082d19] p-6 text-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
                Day
              </div>
              <div className="font-serif text-5xl text-white">
                03
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b98220]">
              Mahé Island
            </p>

            <h3 className="mt-2 font-serif text-2xl text-[#082d19] sm:text-3xl">
              Leisure Day — Spa, Snorkeling or Hiking
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Enjoy a completely flexible day in paradise. Choose a relaxing
              spa experience, explore the colorful underwater world with a
              snorkeling excursion, or venture into Morne Seychellois National
              Park for a scenic tropical hike.
            </p>

            <p className="mt-3 leading-8 text-gray-600">
              Prefer a slower pace? Spend the day on the beach with fresh
              coconut water before enjoying a private beach dinner or an
              elegant evening meal at the hotel.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Spa",
                "Snorkeling",
                "Morne Seychellois",
                "Beach Time",
                "Private Dinner",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#f4f7f2] px-4 py-2 text-xs font-semibold text-[#0b4224]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>


        {/* DAY 4 */}
        <div className="grid gap-6 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg md:grid-cols-[110px_1fr]">

          <div className="flex items-center justify-center bg-[#0b4224] p-6 text-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#dba33a]">
                Day
              </div>
              <div className="font-serif text-5xl text-white">
                04
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b98220]">
              Departure
            </p>

            <h3 className="mt-2 font-serif text-2xl text-[#082d19] sm:text-3xl">
              Farewell to Paradise
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Wake up to the sound of the waves and enjoy one final breakfast
              overlooking the Indian Ocean. After checking out, you will be
              transferred for your onward journey, bringing your Seychelles
              escape to a peaceful close.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Breakfast", "Lunch", "Airport / Hotel Transfer"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#f4f7f2] px-4 py-2 text-xs font-semibold text-[#0b4224]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

      </div>
    </div>


    {/* ========================================================
        STAY
    ======================================================== */}
    <div className="mt-24 overflow-hidden rounded-[2.2rem] bg-[#082d19] text-white">

      <div className="grid lg:grid-cols-2">

        <div className="relative min-h-[380px]">
          <img
            src="https://www.seyvillas.com/img/guide/112/1024x576/hiking-morne-blanc-trail-3-copyright-seyvillas.jpg"
            alt="Seychelles tropical landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-[#082d19]/20" />
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#dba33a]">
            Your Accommodation
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            CaranaBeach Hotel
          </h2>

          <p className="mt-5 leading-8 text-white/75">
            Enjoy three nights at CaranaBeach Hotel on Mahé Island, a
            boutique beachfront retreat combining contemporary comfort,
            tropical surroundings and beautiful Indian Ocean views.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">

            {[
              "Ocean Views",
              "Beach Access",
              "Swimming Pool",
              "Beachfront Dining",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>


    {/* ========================================================
        OPTIONAL EXPERIENCES
    ======================================================== */}
    <div className="mt-24">

      <div className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b98220]">
          Optional Experiences
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#082d19] sm:text-4xl">
          Make your island escape your own
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">

        {[
          {
            title: "Spa Experience",
            text: "Slow down with a relaxing island spa treatment.",
          },
          {
            title: "Snorkeling",
            text: "Discover colorful marine life beneath the turquoise waters.",
          },
          {
            title: "Island Hiking",
            text: "Explore lush tropical trails and panoramic viewpoints.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[1.6rem] border border-gray-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-[#dba33a]">
              ✦
            </div>

            <h3 className="mt-5 font-serif text-xl text-[#082d19]">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {item.text}
            </p>
          </div>
        ))}

      </div>
    </div>


    {/* ========================================================
        MEALS / TRIP DETAILS
    ======================================================== */}
    <div className="mt-20 grid gap-5 md:grid-cols-3">

      <div className="rounded-[1.6rem] bg-white p-7 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b98220]">
          Accommodation
        </p>

        <h3 className="mt-3 font-serif text-2xl text-[#082d19]">
          3 Nights
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          CaranaBeach Hotel on Mahé Island.
        </p>
      </div>

      <div className="rounded-[1.6rem] bg-white p-7 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b98220]">
          Meals
        </p>

        <h3 className="mt-3 font-serif text-2xl text-[#082d19]">
          Full Board
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Breakfast, lunch and dinner as specified throughout the itinerary.
        </p>
      </div>

      <div className="rounded-[1.6rem] bg-white p-7 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b98220]">
          Destinations
        </p>

        <h3 className="mt-3 font-serif text-2xl text-[#082d19]">
          Seychelles
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Mahé, Praslin and La Digue.
        </p>
      </div>

    </div>


    {/* ========================================================
        CTA
    ======================================================== */}
    <div className="relative mt-24 overflow-hidden rounded-[2.2rem] bg-[#0b4224] px-7 py-14 text-center text-white sm:px-12 sm:py-20">

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dba33a]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0c96b]">
          Your Tropical Escape Awaits
        </p>

        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl">
          Ready to experience the Seychelles?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
          Let Daffar Tours & Travel create a seamless island escape combining
          beautiful beaches, unforgettable experiences and carefully selected
          accommodation.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/contact"
            className="rounded-full bg-[#dba33a] px-7 py-3.5 text-sm font-bold text-[#082d19] transition hover:-translate-y-0.5 hover:bg-[#efc968]"
          >
            Plan This Getaway →
          </Link>

          <a
            href="https://wa.me/254708164662"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#082d19]"
          >
            WhatsApp Us
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