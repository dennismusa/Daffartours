import React from "react";
import { Link } from "react-router-dom";
import kili1 from "../assets/kili1.jpg";
import kili2 from "../assets/kili2.jpg";
import kili3 from "../assets/kili3.jpg";
import kili4 from "../assets/kili4.jpg";
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

<section className="bg-white py-16 sm:py-20 lg:py-28">

  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* ======================================================
          IMAGE
      ====================================================== */}

      <div className="relative group">

        {/* Decorative Shape */}
        <div className="absolute -top-5 -left-5 w-24 h-24 rounded-3xl bg-[#F39A08]/15" />

        <img
          src={kili4}
          alt="Mount Kilimanjaro trekking experience"
          className="relative w-full h-[380px] sm:h-[480px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Image Badge */}
        <div className="absolute bottom-5 left-5 bg-[#0D4825]/95 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-xl">

          <p className="text-[#F39A08] text-sm font-bold uppercase tracking-wider">
            Mount Kilimanjaro
          </p>

          <p className="text-white/70 text-xs mt-1">
            The Roof of Africa
          </p>

        </div>

      </div>


      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div>

        {/* Eyebrow */}
        <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
          About The Destination
        </span>

        {/* Heading */}
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

          Mount Kilimanjaro

          <span className="block text-[#F39A08]">
            The Roof of Africa
          </span>

        </h2>


        {/* Main Content */}

        <p className="mt-6 text-gray-600 leading-relaxed">
          Towering at 5,895 meters, Mount Kilimanjaro rises majestically
          from Tanzania’s savannah, its snow-capped peak a breathtaking
          sight against equatorial skies. Often described as “the Roof of
          Africa,” this dormant volcano draws adventurers and nature lovers
          from around the world to experience its beauty, challenge, and
          ever-changing landscapes.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          The journey up Kilimanjaro is as rewarding as the summit itself.
          Climbers pass through a remarkable series of ecological zones:
          lush rainforest alive with colobus monkeys and exotic birds;
          heather-covered moorlands draped in mist; high alpine deserts
          with surreal lava formations; and, finally, the icy glaciers
          crowning Uhuru Peak.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Each zone reveals unique plant and animal life, offering
          photographers and wildlife enthusiasts unexpected moments to
          capture Africa’s hidden mountain wonders.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Beyond the physical climb, Kilimanjaro is an immersion into
          cultural heritage and natural history. Local Chagga guides share
          stories passed down through generations, adding a human warmth
          to the adventure.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Watching the sunrise from the crater rim, with the plains
          stretching endlessly below, is a memory that stays with trekkers
          long after they’ve returned home.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Although large wildlife is rarely seen near the summit, the lower
          forests can surprise hikers with sightings of bushbuck, duikers,
          blue monkeys, and countless bird species.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          The mountain is not only a climb but a moving encounter with East
          Africa’s wild heart. Whether drawn by the allure of standing atop
          Africa’s highest point or the beauty of its slopes, Kilimanjaro
          promises an unforgettable experience, a blend of nature, culture,
          and personal triumph.
        </p>


        {/* ======================================================
            HIGHLIGHTS
        ====================================================== */}

        <div className="grid sm:grid-cols-2 gap-4 mt-8">

          {/* Highlight 1 */}
          <div className="group p-5 rounded-2xl bg-[#F7F4EA] border border-[#0D4825]/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <p className="text-[#F39A08] text-2xl font-serif font-bold">
              5,895 m
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Africa’s highest mountain
            </p>

          </div>


          {/* Highlight 2 */}
          <div className="group p-5 rounded-2xl bg-[#F7F4EA] border border-[#0D4825]/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <p className="text-[#F39A08] text-2xl font-serif font-bold">
              Uhuru Peak
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Summit of Mount Kilimanjaro
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
```

<section id="lemosho-7-day" className="relative overflow-hidden bg-[#F7F4EA] py-20 sm:py-24 lg:py-32">

  {/* =====================================================
      DECORATIVE BACKGROUND
  ====================================================== */}

  <div className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#F39A08]/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-[#0D4825]/10 blur-3xl" />


  <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">


    {/* =====================================================
        HERO / INTRODUCTION
    ====================================================== */}

    <div className="mx-auto max-w-5xl text-center">

      <div className="inline-flex items-center gap-3 rounded-full border border-[#F39A08]/25 bg-white px-5 py-2.5 shadow-sm">

        <span className="h-2 w-2 animate-pulse rounded-full bg-[#F39A08]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0D4825]">
          7-Day Trek · Lemosho Route · Mount Kilimanjaro
        </span>

      </div>


      <h2 className="mt-7 font-serif text-4xl font-bold leading-[1.05] text-[#0D4825] sm:text-5xl lg:text-7xl">

        7-Day Kilimanjaro

        <span className="block text-[#F39A08]">
          Adventure via Lemosho Route
        </span>

      </h2>


      <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">

        Embark on an extraordinary journey to the summit of Africa’s
        tallest mountain through the spectacular Lemosho Route. Renowned
        for its breathtaking scenery, relatively low foot traffic and
        gradual ascent profile, this route provides an immersive trekking
        experience across some of Mount Kilimanjaro’s most remarkable
        landscapes.

      </p>


      <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">

        Over approximately 46 kilometres of trekking, the landscape
        transforms dramatically—from lush rainforest and moorland to the
        expansive Shira Plateau, volcanic formations, alpine desert and
        finally the high-altitude summit zone. With carefully planned
        acclimatization days and experienced mountain support, every stage
        prepares you for the ultimate goal: reaching Uhuru Peak at
        5,895 metres.

      </p>


      {/* =====================================================
          QUICK FACTS
      ====================================================== */}

      <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">

        <div className="border-b border-[#0D4825]/10 p-6 sm:border-r lg:border-b-0">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F39A08]">
            Trekking
          </p>

          <p className="mt-2 font-serif text-2xl font-bold text-[#0D4825]">
            7 Days
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Lemosho Route
          </p>

        </div>


        <div className="border-b border-[#0D4825]/10 p-6 sm:border-b-0 lg:border-r">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F39A08]">
            Summit
          </p>

          <p className="mt-2 font-serif text-2xl font-bold text-[#0D4825]">
            5,895 m
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Uhuru Peak
          </p>

        </div>


        <div className="border-b border-[#0D4825]/10 p-6 sm:border-r sm:border-b-0">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F39A08]">
            Approx. Distance
          </p>

          <p className="mt-2 font-serif text-2xl font-bold text-[#0D4825]">
            46 km
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Approximately 28.5 miles
          </p>

        </div>


        <div className="p-6">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F39A08]">
            Highest Point
          </p>

          <p className="mt-2 font-serif text-2xl font-bold text-[#0D4825]">
            Africa
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Roof of the Continent
          </p>

        </div>

      </div>

    </div>



    {/* =====================================================
        ITINERARY TIMELINE
    ====================================================== */}

    <div className="relative mx-auto mt-16 max-w-6xl lg:mt-24">

      {/* Timeline line */}

      <div className="absolute bottom-16 left-[27px] top-12 hidden w-px bg-gradient-to-b from-[#F39A08] via-[#0D4825]/20 to-[#F39A08] md:block" />


      {/* =====================================================
          DAY 01
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          01
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">


          {/* IMAGE */}

          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[480px]">

            <img
              src={kili1}
              alt="Mount Kilimanjaro and Moshi arrival"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 01
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Arrival & Preparation
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Welcome to Moshi
              </p>

            </div>

          </div>


          {/* CONTENT */}

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 01 · Moshi
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Welcome to Moshi
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Upon arrival at the airport, a member of our team will meet
              you and provide a comfortable transfer to your hotel in Moshi.
              This charming Tanzanian town serves as the gateway to your
              Kilimanjaro adventure.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              After check-in, your mountain guide will conduct a detailed
              pre-climb briefing and gear inspection. This is an important
              opportunity to review the trekking plan, ensure your equipment
              is suitable and prepare mentally for the days ahead.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              The remainder of the day is reserved for rest and preparation.
              You may relax at the lodge, refresh after your journey or take
              some time to explore Moshi before your trek begins.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Travel Time
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Approximately 1 hour
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Overnight
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Kaliwa Lodge
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals Included
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Dinner
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 02
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#0D4825] font-serif text-lg font-bold text-white shadow-lg md:flex">
          02
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">


          {/* CONTENT */}

          <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 02 · Rainforest
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Londorossi Gate to Mti Mkubwa
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              After breakfast, drive west from Moshi toward Londorossi Gate,
              where registration and entry formalities mark the official
              beginning of your Kilimanjaro trek.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              From the gate, the trail enters the lush rainforest. The
              surroundings are rich with vegetation and birdlife, and you may
              encounter wildlife such as monkeys, including the distinctive
              black-and-white colobus.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              The relatively gentle opening trek provides time to settle into
              the rhythm of mountain walking. By late afternoon, you arrive
              at Mti Mkubwa, also known as Big Tree Camp, where your crew
              will have the camp prepared and dinner waiting.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Trek Duration
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  3–4 Hours
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Elevation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  2,100 m → 2,750 m
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Camp
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Forest Camp · Mti Mkubwa
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast · Lunch · Dinner
                </p>

              </div>

            </div>

          </div>


          {/* IMAGE */}

          <div className="order-1 relative min-h-[380px] overflow-hidden lg:order-2 lg:min-h-[500px]">

            <img
              src={kili2}
              alt="Kilimanjaro rainforest trail"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 02
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                First Mountain Stage
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Into the Rainforest
              </p>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 03
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          03
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">

          <div className="relative min-h-[380px] overflow-hidden lg:min-h-[500px]">

            <img
              src={kili3}
              alt="Shira Plateau Kilimanjaro"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 03
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Shira Plateau
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Forest to High Moorland
              </p>

            </div>

          </div>


          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 03 · Shira Plateau
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Forest Camp to Shira 2 Camp
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Leaving the rainforest behind, the landscape begins to change
              dramatically as the trail climbs into heath and moorland.
              Vegetation becomes more open, revealing expansive mountain
              views and a completely different character of Kilimanjaro.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              The route crosses ridgelines and open meadows before reaching
              the remarkable Shira Plateau. The gradual progression in
              elevation allows you to continue adapting to the changing
              mountain environment.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              By late afternoon, you reach Shira 2 Camp, positioned beside a
              mountain stream with impressive views toward the western
              glaciers. After dinner, settle into camp and rest for the next
              stage of the ascent.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Trek Duration
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  6–7 Hours
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Elevation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  2,750 m → 3,840 m
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Camp
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Shira 2 Camp
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast · Lunch · Dinner
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 04
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#0D4825] font-serif text-lg font-bold text-white shadow-lg md:flex">
          04
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">

          <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 04 · Acclimatization
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Shira 2 to Lava Tower & Barranco
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Today is an important acclimatization stage. From Shira 2,
              the trail climbs steadily toward Lava Tower, a dramatic
              volcanic formation standing at approximately 4,630 metres.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              After reaching Lava Tower, you’ll pause for lunch and allow
              your body valuable time to adjust to the increased altitude.
              Although the day reaches a significant elevation, the trail
              then descends toward Barranco Valley.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              This climb-high, sleep-lower approach provides an important
              opportunity for acclimatization while introducing you to the
              dramatic alpine environment surrounding the mountain’s upper
              slopes.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Trek Duration
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Approximately 7 Hours
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Elevation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  3,840 → 4,630 → 3,950 m
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Overnight
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Barranco Camp
                </p>

              </div>

            </div>

          </div>


          <div className="order-1 relative min-h-[380px] overflow-hidden lg:order-2 lg:min-h-[500px]">

            <img
              src={kili1}
              alt="Lava Tower and Barranco Valley"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 04
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Acclimatization Day
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Lava Tower to Barranco
              </p>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 05
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          05
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">

          <div className="relative min-h-[380px] overflow-hidden lg:min-h-[500px]">

            <img
              src={kili2}
              alt="Barranco Wall Kilimanjaro"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 05
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Barranco Wall
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                The Mountain Gets Dramatic
              </p>

            </div>

          </div>


          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 05 · Alpine Valleys
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Barranco Wall to Karanga Camp
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              After breakfast, the route begins with one of the most
              memorable sections of the Lemosho trek—the ascent of the
              Barranco Wall.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              The climb involves a controlled scramble across the rock face,
              with the trail rewarding your effort with spectacular views of
              the surrounding mountain landscape.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              Beyond the wall, the trail continues through a series of alpine
              valleys, dipping and rising across the rugged terrain before
              reaching Karanga Camp. Its position makes it an ideal location
              for your final acclimatization before the summit push.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Trek Duration
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  4–5 Hours
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Elevation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Around 3,950 m
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Camp
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Karanga Camp
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast · Lunch · Dinner
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 06
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#0D4825] font-serif text-lg font-bold text-white shadow-lg md:flex">
          06
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">

          <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 06 · Summit Preparation
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Karanga to Barafu Base Camp
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Today’s trek to Barafu Camp is relatively short, but it marks
              one of the most important stages of the entire expedition.
              The trail climbs into the high alpine desert toward the
              exposed ridge where your summit attempt will begin.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              Barafu Camp sits at approximately 4,600 metres and can be
              cold and windy. On arrival, you’ll have time to settle in,
              hydrate and organize your equipment for the demanding summit
              climb ahead.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              An early dinner is served before you retreat for a few hours
              of rest. Your summit attempt begins around midnight, so this
              afternoon and evening are dedicated to conserving energy and
              preparing carefully for the final ascent.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Trek Duration
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  3–4 Hours
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Elevation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  3,959 m → 4,600 m
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Overnight
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Barafu Camp
                </p>

              </div>

            </div>

          </div>


          <div className="order-1 relative min-h-[380px] overflow-hidden lg:order-2 lg:min-h-[500px]">

            <img
              src={kili4}
              alt="Barafu Camp Kilimanjaro"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 06
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Final Preparation
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Barafu Base Camp
              </p>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 07 — SUMMIT
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          07
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#F39A08]/30 bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">

          <div className="relative min-h-[430px] overflow-hidden lg:min-h-[560px]">

            <img
              src={kili3}
              alt="Uhuru Peak Mount Kilimanjaro summit"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-[#F39A08] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0D4825] shadow-lg">
                Summit Day
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                5,895 Metres
              </p>

              <p className="mt-2 font-serif text-2xl font-bold text-white">
                Uhuru Peak · Roof of Africa
              </p>

            </div>

          </div>


          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 07 · Summit Attempt
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Summit Day — Uhuru Peak
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Around midnight, the defining stage of your Kilimanjaro
              adventure begins. Guided by headlamps beneath the night sky,
              you’ll begin the slow and steady ascent across the scree
              slopes toward the summit zone.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              The route continues toward Stella Point, where sunrise marks
              a spectacular moment on the mountain. From here, the trail
              continues along the crater rim toward Uhuru Peak, the highest
              point in Africa at 5,895 metres.

            </p>


            <div className="mt-6 rounded-2xl border border-[#F39A08]/25 bg-[#F39A08]/5 p-5">

              <p className="text-sm font-bold text-[#0D4825]">
                The Summit Moment
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600">

                Celebrate your achievement at Uhuru Peak, capture the
                moment with photographs and take in the extraordinary
                high-altitude views before beginning the descent.

              </p>

            </div>


            <p className="mt-5 leading-7 text-gray-600">

              After the summit experience, descend carefully toward Barafu
              for a short rest and lunch. The journey then continues
              downhill toward Mweka Camp, where you’ll spend your final
              night on the mountain.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Trek Duration
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  12–14 Hours
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Elevation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  4,600 → 5,895 → 3,100 m
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Overnight
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Mweka Camp
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 08
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#0D4825] font-serif text-lg font-bold text-white shadow-lg md:flex">
          08
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">

          <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 08 · Descent
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Mweka Camp to Moshi
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              After breakfast, your final descent begins through the forest
              toward Mweka Gate. The change in vegetation provides a welcome
              transition from the high-altitude mountain environment back
              into the lush lower slopes.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              At Mweka Gate, you’ll complete the necessary check-out
              procedures and receive your summit certificate. A vehicle will
              then be waiting to transfer you back to your hotel in Moshi.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              After the demanding expedition, enjoy a well-earned hot
              shower, a comfortable room and time to rest and reflect on
              your Kilimanjaro achievement.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Trek Duration
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Approximately 3 Hours
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Elevation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  3,100 m → 1,980 m
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Overnight
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Kaliwa Lodge
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast · Lunch · Dinner
                </p>

              </div>

            </div>

          </div>


          <div className="order-1 relative min-h-[380px] overflow-hidden lg:order-2 lg:min-h-[500px]">

            <img
              src={climbingkili}
              alt="Mweka descent Mount Kilimanjaro"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 08
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Mountain Farewell
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Mweka Gate & Moshi
              </p>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 09
      ====================================================== */}

      <div className="relative mb-14 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          09
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">

          <div className="relative min-h-[330px] overflow-hidden lg:min-h-[430px]">

            <img
              src={kili1}
              alt="Departure from Moshi after Kilimanjaro trek"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 09
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Departure
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Until Next Time, Tanzania
              </p>

            </div>

          </div>


          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 09 · Departure
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Departure Day
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Following breakfast, your final transfer will take you from
              Moshi to the airport for your journey home.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              As your Kilimanjaro adventure comes to an end, you leave
              Tanzania carrying more than memories—the experience of
              crossing multiple ecological zones, challenging yourself at
              altitude and standing on the highest point in Africa.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Travel Time
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Approximately 1 Hour
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Not Included
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals Included
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          INCLUDED / NOT INCLUDED
      ====================================================== */}

      <div className="grid gap-8 lg:grid-cols-2">


        {/* INCLUDED */}

        <div className="rounded-[2rem] border border-[#0D4825]/10 bg-white p-7 shadow-xl sm:p-9 lg:p-10">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D4825] text-xl text-white">
              ✓
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Included
              </p>

              <h3 className="mt-1 font-serif text-3xl font-bold text-[#0D4825]">
                Your Expedition Includes
              </h3>

            </div>

          </div>


          <div className="mt-8 space-y-5">

            {[
              {
                title: "Airport Transfers",
                text: "Pickup upon arrival and drop-off after the trek."
              },
              {
                title: "Ground Transport",
                text: "All transfers between Moshi and the trailhead at the beginning and end of the climb."
              },
              {
                title: "Accommodation",
                text: "One night before the climb in Moshi, one night after the climb, plus full camping accommodation on the mountain."
              },
              {
                title: "National Park Fees",
                text: "All applicable Kilimanjaro National Park entrance fees."
              },
              {
                title: "Rescue Fees",
                text: "Mountain rescue coverage, including vehicle evacuation."
              },
              {
                title: "Mountain Meals",
                text: "Three freshly prepared meals per day while trekking on the mountain."
              },
              {
                title: "Camping Equipment",
                text: "Sleeping tents, dining tents and essential camping equipment."
              },
              {
                title: "Professional Crew",
                text: "Certified English-speaking mountain guide, experienced porters, cooks and waitstaff."
              },
              {
                title: "Mountain Support",
                text: "First aid kit and oximeter for daily altitude checks."
              },
              {
                title: "Taxes",
                text: "All applicable government levies."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
              >

                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F39A08]/15 text-xs font-bold text-[#0D4825]">
                  ✓
                </span>

                <div>

                  <p className="font-bold text-[#0D4825]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>



        {/* NOT INCLUDED */}

        <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-xl sm:p-9 lg:p-10">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600">
              +
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Not Included
              </p>

              <h3 className="mt-1 font-serif text-3xl font-bold text-[#0D4825]">
                Additional Expenses
              </h3>

            </div>

          </div>


          <div className="mt-8 space-y-5">

            {[
              "Extra services or purchases at the hotel.",
              "Beverages other than drinking water, including sodas and alcohol.",
              "Tips for the mountain crew, including guides, porters and cooks.",
              "Meals in Moshi unless specifically stated in the itinerary.",
              "Personal trekking equipment such as sleeping bags, trekking poles and headlamps.",
              "International and domestic flights.",
              "Any item or service not specifically listed under Included."
            ].map((item) => (

              <div
                key={item}
                className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
              >

                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">
                  +
                </span>

                <p className="text-sm leading-6 text-gray-600">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>



      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-[#0D4825] shadow-2xl">

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F39A08]/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />


        <div className="relative grid lg:grid-cols-[1fr_auto] lg:items-center">

          <div className="p-8 sm:p-10 lg:p-12">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Your Kilimanjaro Challenge Awaits
            </p>


            <h3 className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Stand on the Roof of Africa
            </h3>


            <p className="mt-5 max-w-3xl leading-7 text-white/65">

              From the forests of Lemosho to the summit of Uhuru Peak,
              every stage of this expedition is designed to take you closer
              to one of Africa’s greatest achievements. Let our experienced
              mountain team take care of the logistics while you focus on
              the journey.

            </p>

          </div>


          <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Start Planning
            </p>


            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#F39A08] px-7 py-4 text-sm font-bold text-[#0D4825] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffad20]"
            >
              Plan Your Kilimanjaro Trek

              <span className="ml-2 text-lg">
                →
              </span>

            </Link>

          </div>

        </div>

      </div>



      {/* =====================================================
          EXPERIENCE TAGS
      ====================================================== */}

      <div className="mt-14 text-center">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
          The Lemosho Experience
        </p>


        <div className="mx-auto mt-5 flex max-w-5xl flex-wrap items-center justify-center gap-2">

          {[
            "Mount Kilimanjaro",
            "Lemosho Route",
            "Shira Plateau",
            "Barranco Wall",
            "Lava Tower",
            "Barafu Camp",
            "Uhuru Peak",
            "Mweka Route"
          ].map((item, index) => (

            <React.Fragment key={item}>

              <span className="rounded-full border border-[#0D4825]/10 bg-white px-4 py-2.5 text-xs font-semibold text-[#0D4825] shadow-sm">
                {item}
              </span>

              {index < 7 && (
                <span className="hidden text-[#F39A08] sm:inline">
                  •
                </span>
              )}

            </React.Fragment>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>


      {/* ======================================================
          MACHAME ROUTE
      ====================================================== */}

      <section
        id="machame-7-day"
        className="relative overflow-hidden bg-slate-50 py-20 lg:py-28"
      >

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <SectionHeader
            eyebrow="Kilimanjaro Trekking Adventure"
            title="7-Day Machame Route"
            description="Embark on an unforgettable journey to the roof of Africa via the spectacular Machame Route, famously known as the Whiskey Route."
          />


          {/* QUICK FACTS */}

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {machameFacts.map((item) => (
              <QuickFact
                key={item.title}
                {...item}
              />
            ))}

          </div>


          {/* INTRODUCTION */}

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:p-12">

            <h3 className="text-2xl font-bold text-slate-900">
              About the Machame Route
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              The Machame Route is one of Mount Kilimanjaro’s most scenic and
              popular trekking routes. The seven-day itinerary provides a
              progressive ascent through several distinct ecological zones,
              beginning in the lush rainforest and continuing through
              heathland, moorland, alpine desert, and the high-altitude summit
              zone.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The additional acclimatization time offered by the seven-day
              itinerary allows trekkers to approach the mountain at a more
              measured pace.
            </p>

          </div>


          {/* DAY-BY-DAY */}

          <div className="mt-24">

            <SectionHeader
              eyebrow="Your Mountain Journey"
              title="Day-by-Day Itinerary"
              description="Follow the complete journey from your arrival in Tanzania to the summit of Africa’s highest mountain and your final descent to Moshi."
            />

            <div className="relative mx-auto mt-14 max-w-5xl">

              {machameDays.map((day) => (
                <DayCard
                  key={day.number}
                  {...day}
                />
              ))}

            </div>

          </div>


          {/* INCLUDED / NOT INCLUDED */}

          <div className="mt-24 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-7 sm:p-9">

              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Included
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Your Trek Includes
              </h3>

              <InfoList items={machameIncluded} />

            </div>


            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">

              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Not Included
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Additional Expenses
              </h3>

              <InfoList
                items={machameExcluded}
                included={false}
              />

            </div>

          </div>


          {/* FINAL CTA */}

          <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-center sm:px-12 sm:py-16">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Your Kilimanjaro Adventure
            </p>

            <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Conquer the Roof of Africa?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Take on the legendary Machame Route with an experienced mountain
              crew, carefully planned acclimatization, and professional
              support from arrival in Tanzania to the summit and back to Moshi.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Plan Your Climb
            </Link>

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
              src={kili4}
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


      {/* ======================================================
          MACHAME ROUTE
      ====================================================== */}

      <section
        id="machame-7-day"
        className="relative overflow-hidden bg-slate-50 py-20 lg:py-28"
      >

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <SectionHeader
            eyebrow="Kilimanjaro Trekking Adventure"
            title="7-Day Machame Route"
            description="Embark on an unforgettable journey to the roof of Africa via the spectacular Machame Route, famously known as the Whiskey Route."
          />


          {/* QUICK FACTS */}

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {machameFacts.map((item) => (
              <QuickFact
                key={item.title}
                {...item}
              />
            ))}

          </div>


          {/* INTRODUCTION */}

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:p-12">

            <h3 className="text-2xl font-bold text-slate-900">
              About the Machame Route
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              The Machame Route is one of Mount Kilimanjaro’s most scenic and
              popular trekking routes. The seven-day itinerary provides a
              progressive ascent through several distinct ecological zones,
              beginning in the lush rainforest and continuing through
              heathland, moorland, alpine desert, and the high-altitude summit
              zone.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The additional acclimatization time offered by the seven-day
              itinerary allows trekkers to approach the mountain at a more
              measured pace.
            </p>

          </div>


          {/* DAY-BY-DAY */}

          <div className="mt-24">

            <SectionHeader
              eyebrow="Your Mountain Journey"
              title="Day-by-Day Itinerary"
              description="Follow the complete journey from your arrival in Tanzania to the summit of Africa’s highest mountain and your final descent to Moshi."
            />

            <div className="relative mx-auto mt-14 max-w-5xl">

              {machameDays.map((day) => (
                <DayCard
                  key={day.number}
                  {...day}
                />
              ))}

            </div>

          </div>


          {/* INCLUDED / NOT INCLUDED */}

          <div className="mt-24 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-7 sm:p-9">

              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Included
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Your Trek Includes
              </h3>

              <InfoList items={machameIncluded} />

            </div>


            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">

              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Not Included
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Additional Expenses
              </h3>

              <InfoList
                items={machameExcluded}
                included={false}
              />

            </div>

          </div>


          {/* FINAL CTA */}

          <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-center sm:px-12 sm:py-16">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Your Kilimanjaro Adventure
            </p>

            <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Conquer the Roof of Africa?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Take on the legendary Machame Route with an experienced mountain
              crew, carefully planned acclimatization, and professional
              support from arrival in Tanzania to the summit and back to Moshi.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Plan Your Climb
            </Link>

          </div>

        </div>
      </section>


<section  id="machame-7-day" className="relative overflow-hidden bg-white py-20 lg:py-28">

  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Kilimanjaro Trekking Adventure
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        7-Day Machame Route
        <span className="mt-2 block text-amber-600">
          Kilimanjaro Ascent Adventure
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        Embark on an unforgettable seven-day journey to the roof of Africa
        via the spectacular Machame Route, famously known as the
        <strong className="font-semibold text-slate-800"> “Whiskey Route.”</strong>
        Discover dramatic landscapes, diverse ecosystems, challenging trails,
        and breathtaking mountain views as you make your way toward
        Uhuru Peak at 5,895 metres.
      </p>

    </div>


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "⛰️",
          title: "Route",
          value: "Machame Route",
        },
        {
          icon: "📅",
          title: "Duration",
          value: "7 Days / 8 Nights",
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
          ⛰
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            About the Machame Route
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            The Machame Route is one of Mount Kilimanjaro’s most scenic and
            popular trekking routes. The seven-day itinerary provides a
            progressive ascent through several distinct ecological zones,
            beginning in the lush rainforest and continuing through heathland,
            moorland, alpine desert, and the high-altitude summit zone.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The additional acclimatization time offered by the seven-day
            itinerary allows trekkers to approach the mountain at a more
            measured pace. Although a six-day variation is available, the
            seven-day option is particularly suitable for travelers who want
            more time to adapt to the increasing altitude.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-white p-5">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-slate-900">
                Seasonal note:
              </strong>{" "}
              Climbers trekking during April, May, or November should expect
              wetter conditions, with sections of the trail potentially muddy
              and slippery.
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
        Your Mountain Journey
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Follow the complete journey from your arrival in Tanzania to the
        summit of Africa’s highest mountain and your final descent to Moshi.
      </p>

    </div>


    {/* ========================================================
        ITINERARY
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

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 1
            </span>

            <span className="text-sm text-slate-400">
              Arrival & Preparation
            </span>
          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Arrival in Tanzania & Transfer to Moshi
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            Upon arrival in Tanzania, you will be warmly welcomed by our
            representative and transferred to Moshi, the gateway to Mount
            Kilimanjaro. After checking into your lodge, your mountain guide
            will conduct a comprehensive pre-climb briefing covering the
            trekking schedule, safety procedures, altitude considerations,
            mountain conditions, and essential preparations.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Your personal trekking equipment will also be checked to ensure
            everything is ready for the climb. The remainder of the day is
            reserved for rest, relaxation, or exploring the surrounding area.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-3">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Destination
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                Moshi, Tanzania
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 2
            </span>

            <span className="text-sm text-slate-400">
              Rainforest Zone
            </span>
          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Machame Gate to Machame Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              1,790m → 2,980m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 6 Hours
            </span>
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, travel to Machame Gate where park entry and
            registration procedures will be completed. The trek then begins
            through Kilimanjaro’s lush rainforest, surrounded by dense
            vegetation and abundant birdlife.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Keep an eye out for monkeys moving through the trees as you
            gradually gain elevation. During wetter periods, sections of the
            trail can become muddy and slippery. By afternoon, you will arrive
            at Machame Camp, where your mountain crew will have prepared your
            campsite.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                Machame Camp
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          03
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 3
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Machame Camp to Shira Plateau
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              2,980m → 3,840m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              5–6 Hours
            </span>
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Leaving the rainforest behind, the trail climbs into open heath
            and moorland. The landscape becomes increasingly expansive as you
            gain altitude and approach the spectacular Shira Plateau.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Enjoy impressive views toward Kilimanjaro’s upper slopes and ice
            fields before continuing toward Shira Camp, situated near a
            mountain stream. After arriving, enjoy dinner and settle in for a
            peaceful night at altitude.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">
            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>
            <p className="mt-1 font-semibold text-slate-800">
              Shira Camp
            </p>
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
            Shira Camp to Lava Tower & Barranco Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,840m → 4,630m → 3,950m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 7 Hours
            </span>
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Today is an important acclimatization day. You will ascend toward
            Lava Tower, a dramatic volcanic formation standing at approximately
            4,630 metres. After lunch, the trail descends into the spectacular
            Barranco Valley.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The deliberate ascent followed by descent allows your body to
            experience a higher elevation while sleeping lower, helping with
            the acclimatization process. Barranco Camp provides dramatic views
            of the surrounding mountain landscape.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">
            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>
            <p className="mt-1 font-semibold text-slate-800">
              Barranco Camp
            </p>
          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 5
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 5
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Barranco Wall to Karanga Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Elevation: Approx. 3,950m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              4–5 Hours
            </span>
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, tackle one of the most memorable sections of the
            route—the impressive Barranco Wall. Although imposing from below,
            the climb is manageable with the assistance of your experienced
            mountain crew.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            From the top, enjoy rewarding panoramic views before continuing
            through a series of alpine valleys and ridges toward Karanga Camp.
            This shorter trekking stage provides valuable additional
            acclimatization before the final approach to Barafu.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">
            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>
            <p className="mt-1 font-semibold text-slate-800">
              Karanga Camp
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
            Karanga Camp to Barafu Base Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,950m → 4,600m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3–4 Hours
            </span>
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Today you make the final approach to Barafu Camp, the staging
            point for your summit attempt. The trail climbs through increasingly
            barren alpine terrain as vegetation disappears and the mountain
            becomes colder and more exposed.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            After arriving during the afternoon, use the remaining time to
            rest, hydrate, organize your summit equipment, and prepare mentally
            and physically for the midnight climb. Dinner is served early
            before you retire for several hours of rest.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">
            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>
            <p className="mt-1 font-semibold text-slate-800">
              Barafu Camp
            </p>
          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 7 — SUMMIT
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          07
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Summit Day
            </span>

            <span className="text-sm font-semibold text-amber-700">
              The Roof of Africa
            </span>
          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Barafu Camp to Uhuru Peak & Descent to Mweka Camp
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              4,600m → 5,895m → 3,100m
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              12–14 Hours
            </span>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Around midnight, your summit attempt begins. Guided by headlamps,
            you will ascend slowly through the steep scree slopes toward Stella
            Point. The climb is demanding, but the support of your experienced
            guide and mountain crew will help you maintain a steady and
            sustainable pace.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            At approximately 5,685 metres, you reach Stella Point. From here,
            the trail follows the crater rim toward the ultimate objective:
            <strong className="text-slate-900"> Uhuru Peak at 5,895 metres.</strong>
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Summit Achievement
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              UHURU PEAK — 5,895 METRES
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              The highest point in Africa and the ultimate goal of your
              Kilimanjaro expedition.
            </p>

          </div>

          <p className="leading-8 text-slate-600">
            After celebrating at the summit and taking photographs, you will
            begin the descent toward Barafu Camp for a short rest and lunch.
            The journey then continues downhill toward Mweka Camp, where you
            will enjoy your final night on the mountain.
          </p>

          <div className="mt-7 border-t border-amber-200 pt-6">
            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>
            <p className="mt-1 font-semibold text-slate-800">
              Mweka Camp
            </p>
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
            Mweka Camp to Mweka Gate & Return to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,100m → 1,980m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 3 Hours
            </span>
          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, begin the final descent through Kilimanjaro’s
            lush forest toward Mweka Gate. The dramatic change in vegetation
            provides a refreshing contrast to the high-altitude environments
            experienced during the summit stages.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            At the gate, you will complete the park exit procedures and receive
            your Kilimanjaro summit certificate. A vehicle will then transfer
            you back to Moshi for a hot shower, relaxation, and well-earned
            recovery.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge, Moshi
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                Breakfast & Lunch
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
            Departure Day
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            After breakfast, you will be transferred to the airport for your
            onward journey. Whether you are returning home or continuing your
            East African adventure, this marks the official conclusion of your
            Kilimanjaro Machame Route expedition.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                Breakfast
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                None – Tour Ends
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
              Your Trek Includes
            </h3>
          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
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
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Your Kilimanjaro Adventure
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Conquer the Roof of Africa?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Take on the legendary Machame Route with an experienced mountain
          crew, carefully planned acclimatization, and professional support
          from arrival in Tanzania to the summit and back to Moshi.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Plan Your Climb
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



{/* ============================================================
    3-DAY BEST OF MOUNT KILIMANJARO VIEWS — LUXURY SAFARI
============================================================ */}
<section
  id="3-day-best-of-mount-kilimanjaro"
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
        3-Day Best of
        <span className="block text-[#0b4224]">
          Mount Kilimanjaro Views
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience the breathtaking landscapes of Amboseli National Park,
        where sweeping savannahs, abundant wildlife and spectacular views of
        Mount Kilimanjaro come together to create an unforgettable African
        adventure.
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
          Amboseli National Park
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
          Signature View
        </p>
        <p className="mt-2 text-lg font-black text-[#092d1a]">
          Mount Kilimanjaro
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
            src={kili2}
            alt="Amboseli National Park with Mount Kilimanjaro"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-[#092d1a]/70" />

          <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">

            <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0b4224]">
              Safari Highlight
            </span>

            <h3 className="mt-4 max-w-xl text-3xl font-black text-white sm:text-4xl">
              Where Wildlife Meets Mount Kilimanjaro
            </h3>

          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            Why You'll Love It
          </p>

          <p className="mt-5 text-base leading-8 text-white/75">
            Amboseli is renowned for its large elephant herds and iconic views
            of Mount Kilimanjaro. With two full days dedicated to exploring the
            park, you'll have excellent opportunities to encounter elephants,
            lions, giraffes, zebras, buffaloes, wildebeests and a wide variety
            of birdlife.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            {[
              "Iconic Kilimanjaro views",
              "Large elephant herds",
              "Full-day wildlife experience",
              "Exceptional photography",
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
                      Nairobi to Amboseli National Park
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Nairobi → Amboseli
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  Your adventure begins with an early morning departure from
                  Nairobi as you travel south toward Amboseli National Park.
                  Upon arrival, enter the park and begin your first game drive.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The park is famous for its spectacular backdrop of Mount
                  Kilimanjaro and its thriving elephant population. As you
                  explore the open savannah, keep an eye out for elephants,
                  zebras, wildebeests, giraffes, buffaloes, antelopes and, with
                  some luck, lions and other predators.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  After your game drive, continue to Elerai Camp, where you'll
                  check in and settle into your luxurious surroundings. Enjoy a
                  delicious dinner and a peaceful evening surrounded by the
                  sights and sounds of the African wilderness.
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
                      Elerai Camp
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
                      Full-Day Amboseli National Park Experience
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Full-Day Game Drive
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  After breakfast, set out for a full day of exploration in
                  Amboseli National Park. With Mount Kilimanjaro rising
                  dramatically in the distance, traverse the park's diverse
                  landscapes, including open plains, seasonal wetlands, acacia
                  woodland and areas around the Amboseli swamps.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The park is particularly famous for its elephants, which can
                  often be seen moving across the plains or gathering around
                  the wetlands. You may also encounter lions, cheetahs, hyenas,
                  giraffes, zebras, wildebeests, buffaloes, hippos and numerous
                  species of birds.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Enjoy a picnic lunch or return to camp for lunch, depending
                  on the day's game-drive schedule. The afternoon offers
                  another opportunity for wildlife viewing, as the changing
                  light creates beautiful photographic conditions and
                  Kilimanjaro may provide an unforgettable backdrop when
                  weather conditions are clear.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Later, return to Elerai Camp for dinner and a relaxing
                  evening.
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
                      Elerai Camp
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
                      Amboseli – Final Game Drive – Nairobi
                    </h4>
                  </div>

                  <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    Safari Ends
                  </span>

                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-base leading-8 text-gray-600">
                  Wake up to the peaceful atmosphere of the Amboseli
                  wilderness and enjoy breakfast at camp. Depending on your
                  departure schedule, you'll have an opportunity for a final
                  morning game drive through the park.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  The cooler morning hours are ideal for wildlife activity,
                  offering one last chance to see elephants, giraffes, zebras,
                  buffaloes and other animals against the magnificent backdrop
                  of Mount Kilimanjaro.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  After the game drive, begin your journey back toward Nairobi.
                  Enjoy lunch along the way before continuing to Nairobi, where
                  you'll arrive in the afternoon or early evening, marking the
                  end of your safari adventure.
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
          Three Days of Wildlife & Kilimanjaro Views
        </h3>

      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Kilimanjaro Views",
            text: "Enjoy spectacular views of Africa's iconic Mount Kilimanjaro when weather conditions are clear.",
          },
          {
            title: "Elephant Herds",
            text: "Explore Amboseli's famous elephant population across the open plains and wetlands.",
          },
          {
            title: "Wildlife",
            text: "Search for lions, cheetahs, giraffes, zebras, buffaloes, wildebeests and hippos.",
          },
          {
            title: "Photography",
            text: "Capture exceptional wildlife and landscape photographs against the Kilimanjaro backdrop.",
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

              <span className="mt-1 font-bold text-[#dba33a]">
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
        CTA
    ============================================================ */}
    <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-2xl sm:px-10 sm:py-16">

      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5c45d]">
        Your African Adventure Awaits
      </p>

      <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black text-white sm:text-4xl lg:text-5xl">
        Ready to Experience Amboseli?
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
        Let us help you plan your perfect three-day luxury safari with
        spectacular wildlife and unforgettable views of Mount Kilimanjaro.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

        <Link
          to="/contact"
          className="rounded-full bg-[#f5c45d] px-7 py-3.5 text-sm font-black text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-white"
        >
          Plan Your Safari
        </Link>

        <a
          href="https://wa.me/254700000000"
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
    12-DAY BEST OF KILIMANJARO & KENYA SAFARI
============================================================ */}

<section
  id="12-day-best-of-kilimanjaro-kenya-safari"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0b4224]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-4xl text-center">

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dba33a]/30 bg-[#fffaf0] px-4 py-2 text-sm font-semibold text-[#0b4224]">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        Luxury East Africa Safari
      </div>

      <h2 className="text-4xl font-black tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        12-Day Best of Kilimanjaro
        <span className="block text-[#b27b16]">
          & Kenya Safari
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Discover the very best of Tanzania and Kenya on an unforgettable
        12-day luxury safari combining the dramatic beauty of Mount Kilimanjaro
        with some of East Africa's most iconic wildlife destinations. From the
        foothills of Kilimanjaro and the elephant-filled plains of Amboseli to
        the forests of Aberdare, the Great Rift Valley and the legendary Masai
        Mara, this journey offers an exceptional combination of spectacular
        landscapes, diverse wildlife and luxury accommodation.
      </p>
    </div>

    {/* ============================================================
        QUICK FACTS
    ============================================================ */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "12 Days / 11 Nights",
          icon: "◷",
        },
        {
          label: "Countries",
          value: "Tanzania • Kenya",
          icon: "⌖",
        },
        {
          label: "Experience",
          value: "Mountain & Wildlife",
          icon: "✦",
        },
        {
          label: "Style",
          value: "Luxury Safari",
          icon: "◆",
        },
      ].map((fact) => (
        <div
          key={fact.label}
          className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_40px_rgba(9,45,26,0.06)]"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b4224] text-lg text-[#f5c45d]">
            {fact.icon}
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            {fact.label}
          </p>

          <p className="mt-2 font-bold leading-6 text-[#092d1a]">
            {fact.value}
          </p>
        </div>
      ))}
    </div>

    {/* ============================================================
        HERO
    ============================================================ */}
    <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#092d1a] shadow-[0_25px_70px_rgba(9,45,26,0.16)]">

      <div className="grid lg:grid-cols-2">

        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[530px]">

          <img
            src={kili3}
            alt="Amboseli National Park and Mount Kilimanjaro"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#092d1a]/85 via-[#092d1a]/10 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">

            <div className="inline-flex rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              Kilimanjaro • Kenya • Wildlife
            </div>

          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
            The Ultimate East Africa Journey
          </p>

          <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
            From Kilimanjaro's
            <span className="block text-[#f5c45d]">
              foothills to the Mara
            </span>
          </h3>

          <p className="mt-6 leading-8 text-white/70">
            Travel through some of East Africa's most remarkable landscapes,
            combining the peaceful foothills of Mount Kilimanjaro with
            elephant-filled Amboseli, the forested Aberdare ecosystem, Lake
            Nakuru, Lake Naivasha and the legendary Masai Mara.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Mount Kilimanjaro",
              "Amboseli",
              "Aberdare",
              "Lake Nakuru",
              "Lake Naivasha",
              "Masai Mara",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white"
              >
                {item}
              </span>
            ))}

          </div>
        </div>
      </div>
    </div>

    {/* ============================================================
        ROUTE OVERVIEW
    ============================================================ */}
    <div className="mt-16 rounded-[2rem] border border-[#dba33a]/20 bg-[#fffaf0] p-7 sm:p-9">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-2xl">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b27b16]">
            Safari Route
          </p>

          <h3 className="mt-2 text-2xl font-black text-[#092d1a] sm:text-3xl">
            One Journey. Six Remarkable Destinations.
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            A carefully designed route moving from mountain landscapes into
            Kenya's most celebrated wildlife reserves and the Great Rift Valley.
          </p>

        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-[#092d1a]">

          {[
            "Kilimanjaro",
            "Amboseli",
            "Aberdare",
            "Nakuru",
            "Naivasha",
            "Masai Mara",
          ].map((destination, index) => (
            <React.Fragment key={destination}>

              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                {destination}
              </span>

              {index < 5 && (
                <span className="hidden text-[#dba33a] sm:inline">
                  →
                </span>
              )}

            </React.Fragment>
          ))}

        </div>
      </div>
    </div>

    {/* ============================================================
        ITINERARY
    ============================================================ */}
    <div className="mt-20">

      <div className="mb-10">

        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#dba33a]" />

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#b27b16]">
            Your Journey
          </span>
        </div>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          12 Days of Mountain, Wilderness & Wildlife
        </h3>

      </div>

      <div className="relative">

        <div className="absolute left-5 top-6 hidden h-[calc(100%-40px)] w-px bg-[#dba33a]/30 md:block" />

        <div className="space-y-8">

          {/* ========================================================
              DAY 1
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              01
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 01
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Arrival – Mount Kilimanjaro
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Your journey begins in the Mount Kilimanjaro area, where you
                  will be welcomed by a representative from Daffar Tours and
                  Travel and transferred to your lodge. Settle into your
                  accommodation and enjoy the peaceful surroundings at the
                  foothills of Africa's highest mountain.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  The area is surrounded by lush vegetation and is home to a
                  variety of bird species and small wildlife. Enjoy dinner and
                  overnight at your lodge.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Kaliwa Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 2
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              02
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 02
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Mount Kilimanjaro
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, enjoy a full day exploring the beautiful
                  surroundings of Mount Kilimanjaro. The area provides
                  spectacular views of the mountain and an opportunity to
                  observe the natural environment. You may encounter colobus
                  monkeys, blue monkeys, dik-dik, bushbuck and a variety of
                  colourful bird species.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your lodge in the evening for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Kaliwa Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 3
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              03
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 03
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Mount Kilimanjaro
                </h4>
              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, continue exploring the remarkable landscapes
                  around Mount Kilimanjaro. As you experience the mountain
                  environment, you may encounter different species of monkeys
                  and forest wildlife, including colobus monkeys and blue
                  monkeys, together with numerous bird species.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Enjoy the magnificent views of Mount Kilimanjaro before
                  returning to your lodge for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Kaliwa Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 4
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              04
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 04
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Mount Kilimanjaro
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Enjoy your final day around Mount Kilimanjaro, taking in the
                  spectacular mountain scenery and surrounding landscapes. The
                  area offers opportunities to appreciate the region's natural
                  environment and observe local birdlife and smaller wildlife
                  before preparing for your journey into Kenya.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your lodge for your final dinner and overnight in
                  the Kilimanjaro region.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Kaliwa Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 5
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              05
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 05
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Mount Kilimanjaro – Amboseli National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart the Mount Kilimanjaro area and cross
                  into Kenya, continuing to Amboseli National Park. Upon
                  arrival, enjoy lunch before heading out for your first game
                  drive.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Amboseli is famous for its large elephant herds and
                  spectacular views of Mount Kilimanjaro. During your game
                  drive, look out for elephants, lions, cheetahs, buffaloes,
                  giraffes, zebras, wildebeest, hippos and various antelope
                  species. The park also offers excellent birdwatching
                  opportunities.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Ol Tukai Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 6
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              06
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 06
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Full-Day Amboseli National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, spend the day exploring Amboseli National
                  Park on game drives across its open plains and wetlands. The
                  park offers excellent opportunities to see large herds of
                  elephants, often with Mount Kilimanjaro providing a
                  spectacular backdrop.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  You may also encounter lions, cheetahs, hyenas, buffaloes,
                  giraffes, zebras, wildebeest, gazelles and hippos. Enjoy
                  lunch before continuing your afternoon wildlife exploration
                  and searching for more memorable sightings.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Ol Tukai Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 7
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              07
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 07
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Amboseli – Aberdare National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart Amboseli and travel towards the
                  Aberdare region. Upon arrival, check in to your accommodation
                  and enjoy lunch.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Later, experience the unique forest environment of Aberdare,
                  known for its lush vegetation and diverse wildlife. You will
                  encounter wildlife in the Aberdare ecosystem, including
                  elephants, buffaloes, leopards, hyenas, bushbucks,
                  waterbucks, warthogs and various monkey species. The area is
                  also rich in birdlife.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      The Ark
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 8
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              08
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 08
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Aberdare – Lake Nakuru National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart the Aberdare region and continue to
                  Lake Nakuru National Park. Enjoy lunch before heading out for
                  an afternoon game drive.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Explore the park's scenic landscapes and search for rhinos,
                  lions, leopards, buffaloes, giraffes, zebras, waterbucks and
                  baboons. Lake Nakuru is particularly known for its rhino
                  population, while the lake and surrounding habitats attract a
                  wide variety of bird species.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold leading-6 text-[#092d1a]">
                      Sarova Lion Hill Game Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 9
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              09
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 09
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Lake Nakuru – Lake Naivasha
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, enjoy a final morning around Lake Nakuru
                  before continuing to Lake Naivasha, one of Kenya's beautiful
                  freshwater lakes in the Great Rift Valley. Upon arrival,
                  check in to your resort and enjoy lunch.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Spend the afternoon relaxing and taking in the peaceful
                  surroundings of Lake Naivasha. The area is home to hippos,
                  giraffes, zebras, buffaloes, waterbucks and other antelope
                  species.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Lake Naivasha is also an excellent area for observing
                  birdlife, with numerous waterbirds found around the lake.
                  Enjoy dinner and overnight at your resort.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Enashipai Resort & Spa
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 10
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              10
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 10
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Lake Naivasha – Masai Mara National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, depart Lake Naivasha and travel to the
                  legendary Masai Mara National Reserve. Upon arrival, enjoy
                  lunch before heading out for your first game drive in the
                  Mara.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Explore the expansive savannah in search of lions, leopards,
                  cheetahs, elephants, buffaloes, giraffes, zebras, wildebeest,
                  gazelles and other wildlife. The Mara's open grasslands
                  provide exceptional opportunities for predator sightings and
                  large concentrations of plains game.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Mara Serena Safari Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 11
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-md md:flex">
              11
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.06)]">

              <div className="bg-[#0b4224] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 11
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Full-Day Masai Mara National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  After breakfast, spend the entire day exploring the Masai
                  Mara on game drives across its spectacular grasslands. The
                  reserve is renowned for its exceptional concentration of
                  wildlife.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Keep watch for the Big Five, including lions, elephants,
                  leopards and buffaloes, together with cheetahs, giraffes,
                  zebras, wildebeest, hippos, hyenas and numerous antelope
                  species.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Enjoy lunch before continuing your afternoon game drive,
                  taking in the breathtaking scenery and unforgettable wildlife
                  encounters.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Mara Serena Safari Lodge
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Provided
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>

          {/* ========================================================
              DAY 12
          ======================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#dba33a] text-sm font-black text-[#092d1a] shadow-md md:flex">
              12
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#dba33a]/30 bg-white shadow-[0_12px_40px_rgba(9,45,26,0.08)]">

              <div className="bg-[#092d1a] px-6 py-5 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
                  Day 12 • Final Day
                </p>

                <h4 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Masai Mara – Nairobi
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="leading-8 text-gray-600">
                  Begin your final morning with an early game drive in the
                  Masai Mara, giving you one last opportunity to search for
                  lions, leopards, cheetahs, elephants, buffaloes, giraffes,
                  zebras and other wildlife.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Return to your lodge for breakfast before preparing for
                  departure. Enjoy lunch before beginning your journey back to
                  Nairobi.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Upon arrival in Nairobi, you will be dropped off at your
                  hotel, residence or another agreed location, marking the end
                  of your 12-Day Best of Kilimanjaro & Kenya Safari with
                  Daffar Tours and Travel.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      No accommodation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Meals
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
                      Breakfast, Lunch & Dinner
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7faf7] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Drinking Water
                    </p>
                    <p className="mt-2 font-bold text-[#092d1a]">
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

    {/* ============================================================
        SAFARI HIGHLIGHTS
    ============================================================ */}
    <div className="mt-24">

      <div className="mx-auto max-w-3xl text-center">

        <div className="inline-flex items-center gap-2 rounded-full bg-[#fffaf0] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b27b16]">
          <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
          Safari Highlights
        </div>

        <h3 className="mt-5 text-3xl font-black text-[#092d1a] sm:text-4xl">
          The Best of Kilimanjaro & Kenya
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Experience dramatic mountain scenery, iconic wildlife, lush forests
          and the spectacular landscapes of Kenya's most celebrated safari regions.
        </p>

      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {[
          {
            title: "Mount Kilimanjaro",
            text: "Spend four days around the foothills of Africa's highest mountain, enjoying spectacular scenery, forest wildlife and birdlife.",
          },
          {
            title: "Amboseli Elephants",
            text: "Discover Amboseli's famous elephant herds with magnificent Mount Kilimanjaro forming the backdrop.",
          },
          {
            title: "Aberdare Forest",
            text: "Experience the lush Aberdare ecosystem with opportunities to encounter elephants, buffaloes, leopards and forest wildlife.",
          },
          {
            title: "Lake Nakuru",
            text: "Search for rhinos and other wildlife while enjoying scenic landscapes and diverse birdlife around Lake Nakuru.",
          },
          {
            title: "Lake Naivasha",
            text: "Relax beside one of Kenya's beautiful freshwater lakes and observe hippos, giraffes and abundant waterbirds.",
          },
          {
            title: "Masai Mara",
            text: "Finish in the legendary Masai Mara with two nights of luxury and exceptional Big Five and predator viewing.",
          },
        ].map((highlight) => (
          <div
            key={highlight.title}
            className="group rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_12px_40px_rgba(9,45,26,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#dba33a]/30 hover:shadow-[0_20px_50px_rgba(9,45,26,0.09)]"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b4224] text-[#f5c45d] transition group-hover:bg-[#dba33a] group-hover:text-[#092d1a]">
              ✦
            </div>

            <h4 className="mt-6 text-xl font-black text-[#092d1a]">
              {highlight.title}
            </h4>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {highlight.text}
            </p>

          </div>
        ))}

      </div>
    </div>

    {/* ============================================================
        ACCOMMODATION
    ============================================================ */}
    <div className="mt-24">

      <div className="mb-10">

        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#dba33a]" />

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#b27b16]">
            Luxury Stays
          </span>
        </div>

        <h3 className="mt-3 text-3xl font-black text-[#092d1a] sm:text-4xl">
          Carefully Selected Accommodation
        </h3>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {[
          ["Days 1–4", "Kaliwa Lodge", "Mount Kilimanjaro"],
          ["Days 5–6", "Ol Tukai Lodge", "Amboseli"],
          ["Day 7", "The Ark", "Aberdare"],
          ["Day 8", "Sarova Lion Hill Game Lodge", "Lake Nakuru"],
          ["Day 9", "Enashipai Resort & Spa", "Lake Naivasha"],
          ["Days 10–11", "Mara Serena Safari Lodge", "Masai Mara"],
        ].map(([days, lodge, location]) => (
          <div
            key={days}
            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_10px_35px_rgba(9,45,26,0.05)]"
          >

            <div className="flex items-center justify-between gap-4">

              <span className="rounded-full bg-[#fffaf0] px-3 py-1.5 text-xs font-bold text-[#b27b16]">
                {days}
              </span>

              <span className="text-xs font-semibold text-gray-400">
                {location}
              </span>

            </div>

            <h4 className="mt-5 text-lg font-black text-[#092d1a]">
              {lodge}
            </h4>

          </div>
        ))}

      </div>
    </div>

    {/* ============================================================
        INCLUDED / EXCLUDED
    ============================================================ */}
    <div className="mt-24 grid gap-6 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[2rem] bg-[#0b4224] p-7 text-white sm:p-9">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dba33a] font-black text-[#092d1a]">
            ✓
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
              Included
            </p>

            <h3 className="mt-1 text-2xl font-black">
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
              className="flex items-start gap-3 text-sm leading-6 text-white/80"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs text-[#f5c45d]">
                ✓
              </span>

              <span>{item}</span>

            </div>
          ))}

        </div>
      </div>

      {/* EXCLUDED */}
      <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_12px_40px_rgba(9,45,26,0.06)] sm:p-9">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff4df] font-black text-[#b27b16]">
            ×
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b27b16]">
              Excluded
            </p>

            <h3 className="mt-1 text-2xl font-black text-[#092d1a]">
              What's Not Included
            </h3>

          </div>
        </div>

        <div className="mt-8 space-y-4">

          {[
            "International flights (from/to home)",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline: US$10–15 per person per day",
            "Personal items such as souvenirs",
            "Travel insurance",
            "Visa fees",
            "Balloon Safari — USD 500 per person",
            "Maasai Village Visit — USD 50 per vehicle",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-gray-600"
            >

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff4df] text-xs text-[#b27b16]">
                ×
              </span>

              <span>{item}</span>

            </div>
          ))}

        </div>
      </div>
    </div>

    {/* ============================================================
        OPTIONAL EXPERIENCES
    ============================================================ */}
    <div className="mt-10 rounded-[2rem] border border-[#dba33a]/20 bg-[#fffaf0] p-7 sm:p-9">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b27b16]">
            Optional Experiences
          </p>

          <h3 className="mt-2 text-2xl font-black text-[#092d1a]">
            Enhance Your Safari
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
            Add unforgettable experiences to your journey with these optional
            activities available at additional cost.
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">

            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Balloon Safari
            </p>

            <p className="mt-1 font-black text-[#092d1a]">
              USD 500 / Person
            </p>

          </div>

          <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">

            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Maasai Village
            </p>

            <p className="mt-1 font-black text-[#092d1a]">
              USD 50 / Vehicle
            </p>

          </div>

        </div>
      </div>
    </div>

    {/* ============================================================
        FINAL CTA
    ============================================================ */}
    <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-[#092d1a] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">

      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#dba33a]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

        <div className="max-w-2xl">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f5c45d]/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f5c45d]">
            Your East Africa Adventure Awaits
          </div>

          <h3 className="text-3xl font-black text-white sm:text-4xl">
            Ready to experience the
            <span className="text-[#f5c45d]">
              {" "}best of Kilimanjaro & Kenya?
            </span>
          </h3>

          <p className="mt-4 leading-7 text-white/65">
            Let Daffar Tours and Travel create an unforgettable 12-day journey
            through mountain landscapes, iconic wildlife destinations and the
            legendary Masai Mara.
          </p>

        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-4 text-sm font-black text-[#092d1a] transition hover:-translate-y-0.5 hover:bg-[#f5c45d]"
          >
            Plan This Safari
          </Link>

          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            WhatsApp Us
          </a>

        </div>
      </div>
    </div>

  </div>
</section>
{/* ============================================================
    10-DAY MOUNT KILIMANJARO, NGORONGORO, SERENGETI
    & MASAI MARA LUXURY SAFARI
============================================================ */}

<section
  id="10-day-kilimanjaro-ngorongoro-serengeti-masai-mara-luxury"
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
        Luxury East African Safari
      </div>

      <h2 className="text-4xl font-black tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        10-Day Kilimanjaro, Ngorongoro,
        <span className="block text-[#dba33a]">
          Serengeti & Masai Mara
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
        Experience an extraordinary 10-day East African adventure combining
        the breathtaking landscapes of Mount Kilimanjaro with the wildlife-rich
        Ngorongoro Crater, Serengeti National Park, and Kenya's legendary
        Masai Mara National Reserve.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500">
        From the foothills of Africa's highest mountain to the vast Serengeti
        plains and the wildlife-filled Masai Mara, discover spectacular
        scenery, diverse wildlife and unforgettable safari experiences.
      </p>
    </div>

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          label: "Duration",
          value: "10 Days / 9 Nights",
          icon: "◷",
        },
        {
          label: "Countries",
          value: "Tanzania & Kenya",
          icon: "⌖",
        },
        {
          label: "Destinations",
          value: "Kilimanjaro • Ngorongoro • Serengeti • Mara",
          icon: "✦",
        },
        {
          label: "Safari Style",
          value: "Luxury Private Safari",
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
        <div className="relative min-h-[390px] overflow-hidden lg:min-h-[520px]">

          <img
            src={kili4}
            alt="Serengeti National Park safari landscape"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#092d1a] via-[#092d1a]/25 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">

            <span className="inline-flex rounded-full bg-[#dba33a] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#092d1a]">
              Tanzania → Kenya
            </span>

            <h3 className="mt-4 max-w-lg text-3xl font-black leading-tight text-white sm:text-4xl">
              From Mount Kilimanjaro to the Great Plains of East Africa
            </h3>

          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            The Grand Journey
          </p>

          <h3 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
            Four Iconic East African Experiences
          </h3>

          <p className="mt-6 text-sm leading-7 text-white/70 sm:text-base">
            Begin beneath the slopes of Mount Kilimanjaro before travelling
            through the spectacular Ngorongoro highlands into the legendary
            Serengeti. Continue north into Kenya for an unforgettable Masai
            Mara safari before returning to Nairobi.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">

            {[
              "Mount Kilimanjaro",
              "Ngorongoro Crater",
              "Serengeti Plains",
              "Big Five Safari",
              "Great Migration",
              "Masai Mara",
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
          Ten Days Across East Africa
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-500">
          A carefully designed journey combining mountain scenery, highland
          landscapes and some of East Africa's most celebrated wildlife
          destinations.
        </p>

      </div>

      <div className="relative">

        {/* TIMELINE */}
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
                  Arrival – Mount Kilimanjaro
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  Your journey begins in the Mount Kilimanjaro area, where you
                  will be welcomed by a representative from Daffar Tours and
                  Travel and transferred to your lodge.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Settle into your accommodation and enjoy the peaceful
                  surroundings at the foothills of Mount Kilimanjaro. The area
                  offers beautiful mountain scenery and opportunities to
                  experience the natural environment around the mountain.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Enjoy dinner and overnight at your lodge.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Kaliwa Lodge
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
                  Mount Kilimanjaro
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, enjoy a day exploring the beautiful
                  surroundings of Mount Kilimanjaro. Take in the spectacular
                  views of Africa's highest mountain while experiencing the
                  lush landscapes around its foothills.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  The surrounding area is home to wildlife such as colobus
                  monkeys, blue monkeys, bushbucks, dik-diks and a variety of
                  bird species.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Return to your lodge in the evening for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Kaliwa Lodge
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
                  Mount Kilimanjaro
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, continue exploring the remarkable
                  environment around Mount Kilimanjaro. Enjoy the mountain
                  scenery and surrounding natural landscapes, with
                  opportunities to observe colobus monkeys, blue monkeys,
                  bushbucks, small antelopes and diverse birdlife.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Return to your lodge in the evening for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Kaliwa Lodge
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
                  Mount Kilimanjaro
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  Enjoy your final day around Mount Kilimanjaro, taking in the
                  magnificent mountain views and peaceful surroundings before
                  continuing your safari adventure.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  The area provides opportunities to appreciate the local
                  environment and observe forest wildlife and bird species.
                  Return to your lodge for your final dinner and overnight in
                  the Kilimanjaro region.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Kaliwa Lodge
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
              DAY 5
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              05
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 05
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Mount Kilimanjaro – Ngorongoro Crater
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, depart the Mount Kilimanjaro area and travel
                  towards the Ngorongoro Conservation Area. Upon arrival,
                  settle into your lodge and enjoy lunch before exploring the
                  beautiful surroundings.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  The Ngorongoro region is home to a wide range of wildlife,
                  including elephants, buffaloes, zebras, wildebeest, gazelles,
                  hyenas and various bird species.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Enjoy the spectacular highland scenery before dinner and
                  overnight at your lodge.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Ngorongoro Marera Mountain View Lodge
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
              DAY 6
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              06
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 06
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Ngorongoro – Serengeti National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, depart for the legendary Serengeti National
                  Park. Upon arrival, enjoy lunch before heading out on a game
                  drive across the Serengeti plains.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Search for lions, leopards, cheetahs, elephants, buffaloes,
                  giraffes, zebras, wildebeest, gazelles and hyenas. The
                  Serengeti is also one of the world's most important wildlife
                  ecosystems and is famous for the annual wildebeest migration.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Return to your camp in the evening for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Enkirari Wilderness Camp
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
              DAY 7
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              07
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 07
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Full-Day Serengeti National Park
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, spend the day exploring the Serengeti with
                  extensive game drives across its vast grasslands. Search for
                  the Serengeti's famous predators, including lions, leopards,
                  cheetahs and hyenas.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Elephants, buffaloes, giraffes, zebras, wildebeest,
                  Thomson's gazelles, impalas and other plains animals can be
                  encountered throughout the park.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Enjoy lunch before continuing your afternoon game drive and
                  searching for more unforgettable wildlife encounters. Return
                  to your camp in the evening for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Enkirari Wilderness Camp
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
              DAY 8
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              08
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 08
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Serengeti – Masai Mara National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, depart the Serengeti and continue your
                  journey towards Kenya and the Masai Mara National Reserve.
                  Upon arrival, enjoy lunch before heading out for an afternoon
                  game drive.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Explore the Mara plains in search of lions, leopards,
                  cheetahs, elephants, buffaloes, giraffes, zebras, wildebeest,
                  topi, impalas and Thomson's gazelles.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  The Masai Mara is renowned for its exceptional concentration
                  of wildlife and spectacular predator sightings.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Mara Serena Safari Lodge
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
              DAY 9
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              09
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 09
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Full-Day Masai Mara National Reserve
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  After breakfast, spend the day exploring the Masai Mara on
                  game drives across its expansive savannah plains. Search for
                  the Big Five, including lions, elephants, leopards and
                  buffaloes, together with cheetahs, hyenas, giraffes, zebras
                  and wildebeest.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Other wildlife may include hippos, elands, waterbucks,
                  impalas, topi and Thomson's gazelles. Enjoy lunch before
                  continuing your afternoon game drive, taking in the
                  spectacular landscapes and abundant wildlife of the Mara.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Return to your lodge in the evening for dinner and overnight.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl bg-[#f7faf7] p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Accommodation
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#092d1a]">
                      Mara Serena Safari Lodge
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
              DAY 10
          ================================================== */}
          <article className="relative md:pl-16">

            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#0b4224] text-sm font-black text-[#f5c45d] shadow-lg md:flex">
              10
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">

              <div className="bg-[#0b4224] px-6 py-6 sm:px-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c45d]">
                  Day 10
                </p>

                <h4 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Masai Mara – Nairobi
                </h4>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  Begin your final morning with an early game drive in the
                  Masai Mara, giving you one last opportunity to search for
                  lions, leopards, cheetahs, elephants, buffaloes, giraffes,
                  zebras, wildebeest and other wildlife.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Return to your lodge for breakfast before preparing for
                  departure. Enjoy lunch before beginning your journey back to
                  Nairobi.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                  Upon arrival, you will be dropped off at your hotel,
                  residence or another agreed location, marking the end of your
                  10-day East African safari with Daffar Tours and Travel.
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
          The Best of East Africa in One Journey
        </h3>

      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Mount Kilimanjaro",
            text: "Spend four nights around the foothills of Africa's highest mountain, enjoying spectacular mountain scenery and rich natural surroundings.",
          },
          {
            title: "Ngorongoro Crater",
            text: "Discover the spectacular Ngorongoro highlands and its remarkable concentration of wildlife and bird species.",
          },
          {
            title: "Serengeti",
            text: "Explore the legendary Serengeti plains in search of lions, leopards, cheetahs, elephants and the great wildebeest migration.",
          },
          {
            title: "Masai Mara",
            text: "Finish your adventure with exceptional Big Five viewing across Kenya's world-famous Masai Mara National Reserve.",
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
          The Ultimate East African Journey
        </span>

        <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Ready to Experience
          <span className="block text-[#f5c45d]">
            East Africa in Style?
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          From Mount Kilimanjaro to Ngorongoro, the Serengeti and Masai Mara,
          let Daffar Tours and Travel create your unforgettable 10-day
          luxury safari across East Africa.
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
            href="https://wa.me/254700000000"
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

<section id="rongai-6-day" className="relative overflow-hidden bg-white py-20 lg:py-28">

  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Kilimanjaro Trekking Adventure
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        7-Day Rongai Route
        <span className="mt-2 block text-amber-600">
          Northern Wilderness Trail
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        Embark on an unforgettable seven-day expedition to the roof of Africa
        via the remote and tranquil Rongai Route. Approaching Mount Kilimanjaro
        from the northern flank near the Kenyan frontier, this scenic trail
        offers untouched forests, spectacular alpine landscapes, and dramatic
        views of Mawenzi Peak as you journey toward Uhuru Peak at 5,895 metres.
      </p>

    </div>


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "⛰️",
          title: "Route",
          value: "Rongai Route",
        },
        {
          icon: "📅",
          title: "Duration",
          value: "7 Days / 9 Days Total",
        },
        {
          icon: "📍",
          title: "Summit",
          value: "Uhuru Peak – 5,895m",
        },
        {
          icon: "🥾",
          title: "Trail",
          value: "Northern Wilderness",
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
          ⛰
        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            About the Rongai Route
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            The Rongai Route approaches Mount Kilimanjaro from the remote
            northern flank near the Kenyan frontier, offering a peaceful
            alternative to the mountain’s more frequently travelled routes.
            The trail passes through beautiful forests, open moorlands, and
            high-altitude wilderness before joining the upper mountain
            approaches toward Kibo and Uhuru Peak.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Renowned for its relatively gentle gradient and strong
            acclimatization profile, the Rongai Route provides a measured
            approach to the summit. The trail also offers magnificent views
            of Mawenzi Peak, Tanzania’s second-highest mountain summit, and
            provides trekkers with a quieter wilderness experience.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-white p-5">

            <p className="text-sm leading-7 text-slate-600">

              <strong className="text-slate-900">
                Route highlight:
              </strong>{" "}
              The Rongai Route is an excellent choice for travelers seeking
              solitude, gradual elevation gain, and spectacular northern
              wilderness scenery while climbing Kilimanjaro.

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
        Your Mountain Journey
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Follow the complete Rongai adventure from your arrival in Tanzania
        through the northern wilderness, across the high-altitude saddle,
        to the summit of Africa and your final descent to Moshi.
      </p>

    </div>


    {/* ========================================================
        ITINERARY
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

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 1
            </span>

            <span className="text-sm text-slate-400">
              Welcome to Tanzania
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Welcome to Tanzania – Drive to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Drive: Approx. 1 Hour
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Upon arrival at Kilimanjaro International Airport, a member of
            our team will warmly welcome you and transfer you to your hotel
            in Moshi, the gateway to Mount Kilimanjaro.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            After check-in, your mountain guide will conduct a detailed
            pre-climb briefing covering the trekking schedule, safety
            procedures, mountain conditions, altitude considerations, and
            essential preparations. Your trekking equipment will also be
            checked to ensure everything is ready for the expedition.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The remainder of the evening is free for you to relax, recover
            from your journey, or enjoy a gentle stroll through Moshi.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 2
            </span>

            <span className="text-sm text-slate-400">
              Rainforest Zone
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Rongai Gate to Simba Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              1,950m → 2,600m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3–4 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Following breakfast, drive toward the Rongai starting point at
            Nalemoru Gate on the northern side of Kilimanjaro. After completing
            registration and park entry procedures, your trek begins through
            the lush forest.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The trail passes through beautiful vegetation and quiet wilderness
            where you may encounter wildlife and birdlife, including black-and-
            white colobus monkeys. As you gradually gain elevation, the forest
            begins to open and the surrounding landscape becomes increasingly
            expansive.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            By afternoon, you arrive at Simba Camp where your tents will be
            ready and a warm dinner will be prepared by your mountain crew.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Simba Camp
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          03
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 3
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Simba Camp to Second Caves Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              2,600m → 3,450m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 3 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Today’s trek follows a gradual uphill trail through open
            vegetation and highland terrain. The steady ascent allows your
            body to begin adjusting to the increasing altitude without
            rushing the climb.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            You will reach Second Caves Camp in time for a hearty lunch.
            The afternoon is intentionally relaxed, giving you an opportunity
            to rest, hydrate, enjoy the mountain surroundings, and continue
            the acclimatization process.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Second Caves Camp
            </p>

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
            Second Caves to Kikelewa Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,450m → 3,600m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3–4 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            The journey continues across open moorlands as the landscape
            gradually changes from lower mountain vegetation to alpine
            shrubland. With every step, magnificent views of the surrounding
            Kilimanjaro wilderness unfold.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            As you approach Kikelewa Camp, the vegetation becomes increasingly
            sparse and the air noticeably thinner. The campsite is positioned
            beneath scenic mountain ridges, providing a peaceful setting for
            another night at altitude.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Kikelewa Caves Camp
            </p>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 5
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 5
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Kikelewa Camp to Mawenzi Tarn
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,600m → 4,330m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3–4 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Today begins with a steeper climb into the alpine highlands.
            The trail passes through a dramatic landscape dotted with hardy
            high-altitude vegetation and rare mountain flora.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            As you approach Mawenzi Tarn Camp, the spectacular Mawenzi Peak
            rises dramatically above the landscape. Sitting beneath the rugged
            mountain, the campsite provides one of the most memorable settings
            of the entire Rongai expedition.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Spend the afternoon resting and taking in the magnificent scenery
            while your body continues adapting to the increasing elevation.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Mawenzi Tarn Camp
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
            Mawenzi Tarn to Kibo Hut
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              4,330m → 4,700m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              4–5 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Leaving Mawenzi Tarn behind, you cross the broad saddle between
            the Mawenzi and Kibo massifs. The landscape becomes increasingly
            barren and otherworldly as you enter Kilimanjaro’s high alpine
            desert.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The trail eventually leads to Kibo Hut at approximately 4,700
            metres, your final base before the summit attempt. Upon arrival,
            you will have time to rest, hydrate, organize your summit gear,
            and prepare mentally for the demanding climb ahead.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Dinner is served early before you retire for several hours of
            rest ahead of the midnight summit departure.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Kibo Hut
            </p>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 7 — SUMMIT
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          07
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Summit Day
            </span>

            <span className="text-sm font-semibold text-amber-700">
              The Roof of Africa
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Kibo Hut to Uhuru Peak & Descent to Horombo Hut
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              4,700m → 5,895m → 3,720m
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              Approx. 14 Hours
            </span>

          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Around midnight, you begin the most challenging stage of your
            Kilimanjaro adventure. Guided by headlamps, you will ascend slowly
            through steep switchbacks toward Gillman’s Point on the crater
            rim at approximately 5,681 metres.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            From Gillman’s Point, continue along the crater rim toward the
            ultimate objective:
            <strong className="text-slate-900">
              {" "}Uhuru Peak at 5,895 metres.
            </strong>
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Summit Achievement
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              UHURU PEAK — 5,895 METRES
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              The highest point in Africa and the ultimate goal of your
              Kilimanjaro expedition.
            </p>

          </div>

          <p className="leading-8 text-slate-600">
            After reaching the summit, take time to celebrate your achievement,
            photograph the spectacular surroundings, and enjoy the incredible
            feeling of standing on the highest point in Africa.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            You will then descend back to Kibo Hut for a short rest and meal
            before continuing downhill toward Horombo Hut. The long descent
            marks the beginning of your return journey through Kilimanjaro’s
            changing ecological zones.
          </p>

          <div className="mt-7 border-t border-amber-200 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Horombo Hut
            </p>

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
            Horombo Hut to Marangu Gate & Return to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Descent: Approx. 6 Hours
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Drive: Approx. 1 Hour
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, begin the final descent through Kilimanjaro’s
            beautiful montane forest toward Marangu Gate. As you lose
            elevation, the vegetation becomes increasingly lush and green,
            providing a refreshing contrast to the alpine environments
            experienced during the summit stages.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            At Marangu Gate, you will complete the park exit procedures and
            receive your Kilimanjaro summit certificate. A vehicle will then
            meet you and transfer you back to Moshi for a hot shower, rest,
            and a well-earned recovery.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge, Moshi
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast & Lunch
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
            Departure Day
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            After breakfast, you will be transferred to Kilimanjaro
            International Airport for your onward journey or flight home.
            Whether you are returning home or continuing your East African
            adventure, this marks the official conclusion of your Rongai
            Route Kilimanjaro expedition.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                None – Tour Ends
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
              Your Trek Includes
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
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
            "Experienced porters, cooks, and waitstaff",
            "Camp and dining support staff",
            "First-aid kit throughout the trek",
            "Oximeter for daily altitude checks",
            "Applicable government taxes and levies",
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
            "International flights",
            "Domestic flights unless specifically stated",
            "Extra hotel services and personal purchases",
            "Beverages other than drinking water",
            "Sodas and alcoholic beverages",
            "Tips and gratuities for guides, porters, cooks, and mountain crew",
            "Meals in Moshi unless specifically indicated",
            "Personal sleeping bag",
            "Trekking poles",
            "Headlamp and personal trekking equipment",
            "Personal clothing and hiking gear",
            "Travel insurance",
            "Visa fees and personal documentation costs",
            "Any activity, service, or expense not specifically listed under Included",
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

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Your Kilimanjaro Adventure
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Explore the Northern Wilderness?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Take on the spectacular Rongai Route with an experienced mountain
          crew, gradual acclimatization, peaceful wilderness trails, and
          professional support from your arrival in Tanzania to Uhuru Peak
          and back to Moshi.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Plan Your Climb
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


<section id="marangu-5-day" className="relative overflow-hidden bg-white py-20 lg:py-28">

  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Kilimanjaro Trekking Adventure
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        6-Day Marangu Route
        <span className="mt-2 block text-amber-600">
          Kilimanjaro Summit Adventure
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        Experience the legendary Marangu Route, famously known as the
        <strong className="font-semibold text-slate-800">
          {" "}“Coca-Cola Route.”
        </strong>
        This classic Kilimanjaro trail combines comfortable mountain huts,
        spectacular scenery, and a carefully planned acclimatization schedule
        as you journey toward Uhuru Peak at 5,895 metres.
      </p>

    </div>


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "⛰️",
          title: "Route",
          value: "Marangu Route",
        },
        {
          icon: "📅",
          title: "Duration",
          value: "6 Days / 7 Nights",
        },
        {
          icon: "📍",
          title: "Summit",
          value: "Uhuru Peak – 5,895m",
        },
        {
          icon: "🥾",
          title: "Distance",
          value: "Approx. 64 km",
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
          ⛰
        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            About the Marangu Route
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Known as the “Coca-Cola Route,” the Marangu Route is one of
            Mount Kilimanjaro’s most well-known and established trekking
            paths. Unlike routes that rely entirely on camping, Marangu
            offers mountain hut accommodation, making it a popular choice
            for trekkers who prefer a more structured mountain experience.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The trail passes through beautiful rainforest, open moorland,
            alpine desert, and the high-altitude summit zone. The extended
            itinerary includes an additional acclimatization day at Horombo
            Hut, giving trekkers more time to adapt to the increasing
            altitude before attempting the summit.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-white p-5">

            <p className="text-sm leading-7 text-slate-600">

              <strong className="text-slate-900">
                Acclimatization note:
              </strong>{" "}
              The additional day at Horombo Hut allows trekkers to rest or
              undertake an optional hike toward Mawenzi Ridge before the
              final summit approach.

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
        Your Mountain Journey
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Follow your journey from arrival in Tanzania through the rainforest,
        alpine landscapes, summit attempt, and final descent from Kilimanjaro.
      </p>

    </div>


    {/* ========================================================
        ITINERARY
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

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 1
            </span>

            <span className="text-sm text-slate-400">
              Arrival & Preparation
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Arrival in Tanzania – Transfer to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Drive Time: Approx. 1 Hour
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Upon landing at Kilimanjaro International Airport, you will be
            warmly welcomed by our driver and transferred to your
            accommodation in Moshi, the gateway to Mount Kilimanjaro.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            After checking in, your lead mountain guide will conduct a
            detailed briefing covering the trekking itinerary, safety
            procedures, altitude considerations, weather conditions, and
            essential preparations. Your trekking equipment will also be
            inspected to ensure everything is ready for the climb.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The remainder of the day is free for relaxation or a gentle
            stroll around Moshi before the mountain adventure begins.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-3">

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Destination
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Moshi, Tanzania
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 2
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Marangu Gate to Mandara Hut
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              1,980m → 2,700m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3–4 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After an early breakfast, drive to Marangu Gate where park
            registration and entry procedures will be completed. Once the
            porters have arranged the equipment, your trek begins through
            Kilimanjaro’s beautiful montane rainforest.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The forest is rich in vegetation and birdlife, and you may spot
            black-and-white colobus monkeys moving through the trees. The
            trail gradually climbs toward Mandara Hut, where you will enjoy
            hot drinks, dinner, and your first night on the mountain.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Mandara Hut
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          03
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 3
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Mandara Hut to Horombo Hut
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              2,700m → 3,720m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 6 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Today the trail gradually leaves the rainforest and enters the
            open moorland zone. The landscape becomes wider and more
            dramatic, with unique high-altitude vegetation including giant
            groundsel and lobelias.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Weather permitting, you will enjoy your first impressive views
            of Mawenzi and Kibo peaks. Continue across the moorland toward
            Horombo Hut, where you will arrive in the afternoon for a warm
            meal and a well-earned rest.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Horombo Hut
            </p>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 4 — ACCLIMATIZATION
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          04
        </div>

        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Acclimatization Day
            </span>

            <span className="text-sm font-semibold text-blue-700">
              Rest & Optional Hike
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Acclimatization Day at Horombo Hut
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              Horombo Hut – 3,720m
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              Optional Hike to Mawenzi Ridge
            </span>

          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Today is dedicated to rest and acclimatization, an essential
            part of preparing your body for the higher elevations ahead.
            You can spend the day relaxing around Horombo Hut or take an
            optional acclimatization hike toward Mawenzi Ridge.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The optional hike provides excellent views of Kilimanjaro’s
            rugged volcanic landscape and gives you valuable time at a
            higher elevation before returning to Horombo Hut to sleep.
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Acclimatization Focus
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              REST • HYDRATE • ACCLIMATIZE
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              A carefully planned rest day helps prepare you for the
              demanding summit attempt ahead.
            </p>

          </div>

          <div className="mt-7 border-t border-blue-200 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Horombo Hut
            </p>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 5
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 5
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Horombo Hut to Kibo Hut
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,720m → 4,700m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 6 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Leaving the moorland behind, you will continue into the
            increasingly barren alpine desert. The trail crosses the famous
            Saddle, a broad and windswept plain lying between Mawenzi and
            Kibo peaks.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The steady climb eventually brings you to Kibo Hut, your final
            base before the summit attempt. After an early dinner, you will
            retire for several hours of rest while preparing mentally and
            physically for the overnight climb to Uhuru Peak.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Kibo Hut
            </p>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 6 — SUMMIT
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          06
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Summit Day
            </span>

            <span className="text-sm font-semibold text-amber-700">
              The Roof of Africa
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Kibo Hut to Uhuru Peak & Return to Horombo Hut
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              4,700m → 5,895m → 3,720m
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              12–14 Hours
            </span>

          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Summit day begins shortly before midnight. You will begin the
            slow and steady ascent under a starlit sky, following the
            steep switchbacks toward the crater rim. The pace will be
            deliberately slow to conserve energy and allow your body to
            cope with the extreme altitude.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            After several hours of climbing, you will reach Gilman’s Point
            at approximately 5,681 metres. From there, continue along the
            crater rim toward the ultimate objective:
            <strong className="text-slate-900">
              {" "}Uhuru Peak at 5,895 metres.
            </strong>
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Summit Achievement
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              UHURU PEAK — 5,895 METRES
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              The highest point in Africa and the ultimate goal of your
              Kilimanjaro expedition.
            </p>

          </div>

          <p className="leading-8 text-slate-600">
            After celebrating your summit achievement and taking
            photographs, begin the descent back toward Kibo Hut for a
            short rest and hot meal. The journey then continues downhill
            to Horombo Hut, where you will enjoy your final night on the
            mountain.
          </p>

          <div className="mt-7 border-t border-amber-200 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Horombo Hut
            </p>

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
            Horombo Hut to Marangu Gate – Return to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,720m → 1,980m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 6 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, say farewell to your mountain crew and begin
            the final descent through Kilimanjaro’s lush montane forest.
            The return journey offers a refreshing change in scenery as
            you gradually leave the high-altitude environment behind.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            At Marangu Gate, you will complete the park exit procedures and
            receive your Kilimanjaro summit certificate. A private vehicle
            will then transfer you back to Moshi where you can enjoy a hot
            shower, relaxation, and a well-earned recovery.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge, Moshi
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast & Lunch
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          DAY 8
      ====================================================== */}
      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          08
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 8
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Departure Day
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            After breakfast, you will be transferred to the airport for
            your onward journey. Whether you are returning home or
            continuing your East African adventure, this marks the official
            conclusion of your Marangu Route Kilimanjaro expedition.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                None – Tour Ends
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
              Your Trek Includes
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "Airport pickup upon arrival and drop-off after the trek",
            "All transfers between Moshi and the Kilimanjaro trailhead",
            "One night before the climb in Moshi at Kaliwa Lodge or similar",
            "One night after the climb in Moshi",
            "Mountain hut accommodation throughout the trek",
            "Sleeping and dining facilities at mountain huts",
            "All applicable Kilimanjaro National Park fees",
            "Mountain rescue coverage including vehicle evacuation",
            "Three freshly prepared meals per day while on the mountain",
            "Certified English-speaking professional mountain guide",
            "Experienced porters, cooks and mountain support staff",
            "First-aid kit throughout the trek",
            "Oximeter for regular altitude monitoring",
            "Applicable government taxes and levies",
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
            "Extra hotel services and personal purchases",
            "Beverages other than drinking water, including sodas and alcohol",
            "Tips and gratuities for guides, porters, cooks and mountain crew",
            "Meals in Moshi unless specifically indicated",
            "Personal sleeping bag",
            "Trekking poles",
            "Headlamp and personal trekking equipment",
            "Personal clothing and hiking gear",
            "International flights",
            "Domestic flights unless specifically stated",
            "Travel insurance",
            "Visa fees and personal documentation costs",
            "Any activity, service or expense not specifically listed under Included",
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

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Your Kilimanjaro Adventure
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Conquer the Roof of Africa?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Take on the legendary Marangu Route with comfortable mountain
          huts, experienced mountain guides, carefully planned
          acclimatization, and professional support from arrival in Tanzania
          to the summit and back to Moshi.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Plan Your Climb
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

<section id="rongai-7-day" className="relative overflow-hidden bg-white py-20 lg:py-28">

  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Kilimanjaro Trekking Adventure
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        6-Day Rongai Route
        <span className="mt-2 block text-amber-600">
          Northern Trail Experience
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        Experience the quieter northern side of Mount Kilimanjaro on a
        spectacular six-day journey via the Rongai Route. Trek through
        peaceful forests, open moorlands, alpine desert, and dramatic
        mountain landscapes as you make your way toward
        <strong className="font-semibold text-slate-800">
          {" "}Uhuru Peak at 5,895 metres.
        </strong>
      </p>

    </div>


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "⛰️",
          title: "Route",
          value: "Rongai Route",
        },
        {
          icon: "📅",
          title: "Duration",
          value: "6 Days / 7 Nights",
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
          ⛰
        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            About the Rongai Route
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            The Rongai Route is the only major trekking route that approaches
            Mount Kilimanjaro from the northern side, close to the Kenyan
            border. Stretching approximately 65 kilometres, the route offers
            a peaceful alternative to the mountain’s busier trails.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Known for its gradual ascent and tranquil surroundings, the Rongai
            Route passes through diverse ecological zones while providing
            spectacular views of Mawenzi Peak and the surrounding wilderness.
            Its steady altitude gain makes it an attractive choice for
            trekkers looking for a balanced approach to Africa’s highest peak.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-white p-5">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-slate-900">
                Trekking note:
              </strong>{" "}
              The six-day Rongai itinerary involves a demanding summit day.
              Proper preparation, gradual pacing, hydration, and following your
              mountain guide’s instructions are essential for a safe and
              enjoyable climb.
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
        Your Northern Kilimanjaro Journey
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Follow the complete Rongai adventure from your arrival in Tanzania,
        through the remote northern trail, to the summit of Uhuru Peak and
        your final descent to Moshi.
      </p>

    </div>


    {/* ========================================================
        ITINERARY
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

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 1
            </span>

            <span className="text-sm text-slate-400">
              Arrival & Preparation
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Arrival in Tanzania – Journey to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 1 Hour Drive
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Upon arrival at the airport, a member of our team will warmly
            welcome you and provide a private transfer to your hotel in Moshi.
            After checking in, you will meet your mountain guide for a detailed
            pre-trek orientation and equipment inspection.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The remainder of the day is yours to relax, recover from your
            journey, or explore Moshi before beginning your Kilimanjaro
            adventure.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 2
            </span>

            <span className="text-sm text-slate-400">
              Northern Forest Zone
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Nalemoru Gate to First Caves Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              1,950m → 2,600m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 5 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Following breakfast, you will drive toward Nalemoru Gate on the
            northern side of Mount Kilimanjaro. After completing park
            registration and other formalities, the trek begins along peaceful
            forest trails.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The forest is rich in vegetation and wildlife, with opportunities
            to spot black-and-white colobus monkeys and colourful birdlife.
            After lunch on the trail, continue toward First Caves Camp where
            your support team will have prepared your campsite.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                First Caves Camp
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          03
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 3
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            First Caves Camp to Kikelewa Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              2,600m → 3,600m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              6–7 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Today’s trek continues upward through the northern slopes of
            Kilimanjaro. The trail passes the Second Caves Camp at approximately
            3,450 metres, providing a scenic location for lunch and a short
            break.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            From the caves, the trail continues toward Kikelewa Camp as the
            landscape changes from forest to open moorland. Expansive mountain
            views begin to appear, while temperatures become noticeably cooler
            as you gain altitude.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Kikelewa Camp
            </p>

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
            Kikelewa Camp to Mawenzi Tarn Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,600m → 4,330m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3–4 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            A shorter but steeper climb takes you toward the spectacular
            Mawenzi Tarn, situated beneath the dramatic jagged peaks of
            Mawenzi. The trail crosses an increasingly alpine landscape
            decorated with giant lobelias, groundsels, and other high-altitude
            vegetation.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            You will arrive at camp in the early afternoon, allowing plenty
            of time to rest and acclimatize while enjoying impressive views of
            the surrounding volcanic terrain.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Mawenzi Tarn Camp
            </p>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 5
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 5
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Mawenzi Tarn Camp to Kibo Hut
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              4,330m → 4,700m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              4–5 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Leaving Mawenzi behind, you will cross the barren saddle separating
            Mawenzi and Kibo. This vast alpine desert is stark, windswept, and
            remarkably beautiful, creating the feeling of walking through a
            completely different world.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            By early afternoon, you will arrive at Kibo Hut, your final base
            before the summit attempt. After an early dinner, you will rest and
            prepare your clothing, headlamp, water, and other equipment for the
            midnight ascent.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Kibo Hut
            </p>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 6 — SUMMIT
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          06
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Summit Day
            </span>

            <span className="text-sm font-semibold text-amber-700">
              The Roof of Africa
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Kibo Hut to Uhuru Peak & Descent to Horombo Hut
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              4,700m → 5,895m → 3,720m
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              12–14 Hours
            </span>

          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Shortly after midnight, your summit attempt begins beneath the
            starlit African sky. Guided by headlamps, you will climb steadily
            through the steep upper slopes toward Hans Meyer Cave and
            eventually reach Gilman’s Point at approximately 5,681 metres.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            From Gilman’s Point, continue along the crater rim toward the
            ultimate objective:
            <strong className="text-slate-900">
              {" "}Uhuru Peak at 5,895 metres.
            </strong>
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Summit Achievement
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              UHURU PEAK — 5,895 METRES
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              The highest point in Africa and the ultimate goal of your
              Kilimanjaro expedition.
            </p>

          </div>

          <p className="leading-8 text-slate-600">
            After celebrating your achievement and taking photographs at the
            summit, begin the descent to Kibo Hut for a short rest and brunch.
            You will then continue downward toward Horombo Hut, where you will
            spend your final night on the mountain.
          </p>

          <div className="mt-7 border-t border-amber-200 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Horombo Hut
            </p>

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
            Horombo Hut to Marangu Gate – Return to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,720m → 1,980m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              5–6 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, begin your final descent through the lush
            montane forest toward Marangu Gate. The changing vegetation offers
            a refreshing contrast after several days in the high-altitude
            environment.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            At the gate, complete the park exit procedures and receive your
            official summit certificate. After saying farewell to your
            mountain crew, a private vehicle will transfer you back to Moshi
            where you can enjoy a warm shower and well-earned rest.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast & Lunch
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 8
      ====================================================== */}
      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          08
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 8
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Departure Day
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            After breakfast, you will be transferred to the airport for your
            onward journey. Whether you are returning home or continuing your
            East African adventure, this marks the official conclusion of your
            Rongai Route Kilimanjaro expedition.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                None – Tour Ends
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
              Your Trek Includes
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "Airport pickup upon arrival and drop-off after the trek",
            "All transfers between Moshi and the Kilimanjaro trailhead",
            "One night before the climb in Moshi at Kaliwa Lodge or similar",
            "One night after the climb in Moshi",
            "Full mountain accommodation including sleeping and dining facilities",
            "Sleeping tents, dining tents, and essential camping equipment",
            "All applicable Kilimanjaro National Park fees",
            "Mountain rescue coverage including vehicle evacuation",
            "Three freshly prepared meals per day while on the mountain",
            "Certified English-speaking professional mountain guide",
            "Experienced porters, cooks, and mountain support staff",
            "First-aid kit available throughout the trek",
            "Use of oximeter for regular altitude monitoring",
            "Applicable government taxes and levies",
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
            "Extra services or purchases at the hotel",
            "Beverages other than drinking water, including sodas and alcohol",
            "Tips and gratuities for guides, porters, cooks, and mountain crew",
            "Meals in Moshi unless specifically indicated",
            "Personal trekking equipment such as sleeping bags, trekking poles, and headlamps",
            "International and domestic flights",
            "Personal clothing and hiking gear",
            "Travel insurance",
            "Visa fees and personal documentation costs",
            "Any activity, service, or expense not specifically listed under Included",
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

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Your Rongai Kilimanjaro Adventure
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Explore Kilimanjaro from the North?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Take the peaceful northern trail toward Uhuru Peak with an
          experienced mountain crew, carefully managed acclimatization, and
          professional support from your arrival in Tanzania to the summit
          and back to Moshi.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Plan Your Climb
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


<section id="marangu-6-day" className="relative overflow-hidden bg-white py-20 lg:py-28">

  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Kilimanjaro Trekking Adventure
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        5-Day Marangu Route
        <span className="mt-2 block text-amber-600">
          Kilimanjaro Summit Adventure
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        Experience the legendary Marangu Route, famously known as the
        <strong className="font-semibold text-slate-800"> “Coca-Cola Route.”</strong>
        Follow Kilimanjaro’s historic trail through lush rainforest,
        spectacular moorland, alpine desert, and toward the summit of
        Africa’s highest mountain at 5,895 metres.
      </p>

    </div>


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "⛰️",
          title: "Route",
          value: "Marangu Route",
        },
        {
          icon: "📅",
          title: "Duration",
          value: "5 Days / 7 Nights",
        },
        {
          icon: "📍",
          title: "Summit",
          value: "Uhuru Peak – 5,895m",
        },
        {
          icon: "🥾",
          title: "Distance",
          value: "Approx. 64 km",
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
          ⛰
        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            About the Marangu Route
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            The Marangu Route is one of Mount Kilimanjaro’s most historic and
            popular trekking routes. Often called the “Coca-Cola Route,” it is
            the only major Kilimanjaro route offering mountain hut
            accommodation instead of camping throughout the climb.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The trail passes through several distinct ecological zones,
            beginning in the lush rainforest before continuing through
            heathland, moorland, alpine desert, and finally the high-altitude
            summit zone. The route provides a relatively straightforward
            approach while still delivering spectacular views of Kibo and
            Mawenzi.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-white p-5">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-slate-900">
                Trekking note:
              </strong>{" "}
              The five-day itinerary is best suited to experienced hikers with
              previous high-altitude trekking experience. First-time climbers
              are generally encouraged to consider the six-day itinerary,
              which provides additional acclimatization time.
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
        Your Mountain Journey
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Follow the complete journey from your arrival in Tanzania through the
        Marangu trail, the summit of Uhuru Peak, and your final descent back
        to Moshi.
      </p>

    </div>


    {/* ========================================================
        ITINERARY
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

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 1
            </span>

            <span className="text-sm text-slate-400">
              Arrival & Preparation
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Arrival in Tanzania – Transfer to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Drive Time: Approx. 1 Hour
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Upon landing at Kilimanjaro International Airport, you’ll be
            welcomed by our representative and transferred privately to your
            accommodation in Moshi. After check-in, you’ll meet your mountain
            guide for a comprehensive briefing covering the trekking schedule,
            safety procedures, altitude considerations, and mountain
            conditions.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Your trekking equipment will also be carefully inspected to ensure
            that everything is ready for the climb. The remainder of the day
            is yours to relax, recover from your journey, or take a gentle
            stroll around Moshi.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-3">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Destination
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Moshi, Tanzania
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 2
            </span>

            <span className="text-sm text-slate-400">
              Rainforest Zone
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Marangu Gate to Mandara Hut
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              1,980m → 2,700m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3–4 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, travel to Marangu Gate where your park
            registration and entry procedures will be completed. Once the
            porters have organized the mountain equipment, the trek begins
            through the dense and beautiful rainforest.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The forest is rich with birdlife and you may encounter black-and-
            white colobus monkeys moving through the trees. The trail climbs
            steadily through the lush vegetation before reaching Mandara Hut
            in the afternoon, where you’ll enjoy hot drinks, dinner, and time
            to rest.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Mandara Hut
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          03
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 3
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Mandara Hut to Horombo Hut
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              2,700m → 3,720m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              5–6 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Today the trail gradually leaves the rainforest behind and enters
            the open heath and moorland zone. The landscape becomes wider and
            more dramatic as you climb higher, with spectacular views toward
            the Kibo and Mawenzi peaks when weather conditions are favorable.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            You’ll have the option to make a short detour toward Maundi Crater,
            offering excellent panoramic views across the surrounding
            landscape. Along the trail, giant lobelias and groundsels provide
            a striking introduction to Kilimanjaro’s unique alpine
            vegetation.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Horombo Hut
            </p>

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
            Horombo Hut to Kibo Hut
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,720m → 4,700m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              5–6 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Leaving the moorland behind, you’ll enter Kilimanjaro’s stark
            alpine desert. The trail crosses the famous Saddle, a broad and
            windswept landscape stretching between the volcanic peaks of
            Mawenzi and Kibo.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The landscape becomes increasingly barren as you approach Kibo Hut,
            your final base before the summit attempt. Upon arrival, you’ll
            settle in, have an early dinner, organize your summit equipment,
            and rest before the midnight climb.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Kibo Hut
            </p>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 5 — SUMMIT
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Summit Day
            </span>

            <span className="text-sm font-semibold text-amber-700">
              The Roof of Africa
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Kibo Hut to Uhuru Peak & Return to Horombo Hut
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              4,700m → 5,895m → 3,720m
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              12–14 Hours
            </span>

          </div>

          <p className="mt-6 leading-8 text-slate-600">
            The summit attempt begins shortly before midnight. Guided by
            headlamps, you’ll climb slowly through the steep upper slopes of
            Kibo, passing Hans Meyer Cave before continuing toward
            Gilman’s Point at approximately 5,681 metres on the crater rim.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            From Gilman’s Point, continue along the crater rim toward the
            ultimate objective:
            <strong className="text-slate-900">
              {" "}Uhuru Peak at 5,895 metres.
            </strong>
            Reaching the highest point in Africa is a demanding achievement,
            and your experienced mountain crew will support you throughout the
            ascent.
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Summit Achievement
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              UHURU PEAK — 5,895 METRES
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              The highest point in Africa and the ultimate goal of your
              Kilimanjaro expedition.
            </p>

          </div>

          <p className="leading-8 text-slate-600">
            After celebrating at the summit and taking photographs, you’ll
            begin the descent to Kibo Hut for a short rest and hot meal. The
            journey then continues downhill toward Horombo Hut, where you’ll
            enjoy a well-earned night of rest.
          </p>

          <div className="mt-7 border-t border-amber-200 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Horombo Hut
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
            Horombo Hut to Marangu Gate – Return to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,720m → 1,980m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 6 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, begin the final descent from Horombo Hut through
            the moorland and rainforest zones toward Marangu Gate. As you lose
            altitude, the vegetation becomes increasingly lush and the air
            warmer and more comfortable.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            At the gate, you’ll complete the park exit procedures and receive
            your official climbing certificate. A green certificate is awarded
            to climbers who reach Gilman’s Point, while those who reach Uhuru
            Peak receive the summit certificate.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            After saying farewell to your mountain crew, a private vehicle
            will transfer you back to Moshi where you can enjoy a refreshing
            shower, relaxation, and a well-earned recovery.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge, Moshi
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast & Lunch
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 7
      ====================================================== */}
      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          07
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 7
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Departure Day or Optional Activities
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Transfer Time: Approx. 1 Hour
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Enjoy breakfast at your lodge before checking out. Depending on
            your flight schedule, you may have time to relax in Moshi or
            arrange an optional activity or extension before your departure.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            At the appropriate time, our driver will transfer you to
            Kilimanjaro International Airport for your outbound flight,
            marking the conclusion of your Marangu Route Kilimanjaro
            adventure.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Not Included
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
              Your Trek Includes
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
            "Airport pickup upon arrival and drop-off after the trek",
            "All transfers between Moshi and the Kilimanjaro trailhead",
            "One night before the climb in Moshi at Kaliwa Lodge or similar",
            "One night after the climb in Moshi",
            "Mountain hut accommodation along the Marangu Route",
            "Sleeping and dining facilities at mountain huts",
            "All applicable Kilimanjaro National Park fees",
            "Mountain rescue coverage including vehicle evacuation",
            "Three freshly prepared meals per day while on the mountain",
            "Certified English-speaking professional mountain guide",
            "Experienced porters and professional mountain cook",
            "Camp and dining support staff",
            "First-aid kit throughout the trek",
            "Oximeter for regular altitude monitoring",
            "Applicable government taxes and levies",
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
            "Extra services or purchases at the hotel",
            "Beverages other than drinking water, including sodas and alcohol",
            "Tips and gratuities for guides, porters, cooks and mountain crew",
            "Meals in Moshi unless specifically indicated",
            "Personal sleeping bag",
            "Trekking poles",
            "Headlamp and personal trekking equipment",
            "Personal clothing and hiking gear",
            "International flights",
            "Domestic flights unless specifically stated",
            "Travel insurance",
            "Visa fees and personal documentation costs",
            "Optional activities and excursions",
            "Any activity, service or expense not specifically listed under Included",
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

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Your Kilimanjaro Adventure
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Conquer the Roof of Africa?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Take on the legendary Marangu Route with an experienced mountain
          crew, comfortable mountain hut accommodation, professional support,
          and a carefully organized journey from arrival in Tanzania to the
          summit and back to Moshi.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Plan Your Climb
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


<section id="lemosho-6-day" className="relative overflow-hidden bg-white py-20 lg:py-28">

  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Kilimanjaro Trekking Adventure
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        8-Day Lemosho Route
        <span className="mt-2 block text-amber-600">
          Kilimanjaro Expedition
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        Experience one of Mount Kilimanjaro’s most spectacular approaches via
        the scenic Lemosho Route. This carefully paced eight-day expedition
        combines breathtaking landscapes, excellent acclimatization, quieter
        trails, and diverse ecological zones on the journey toward
        <strong className="font-semibold text-slate-800">
          {" "}Uhuru Peak at 5,895 metres.
        </strong>
      </p>

    </div>


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
    <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "⛰️",
          title: "Route",
          value: "Lemosho Route",
        },
        {
          icon: "📅",
          title: "Duration",
          value: "8 Days / 10 Nights",
        },
        {
          icon: "📍",
          title: "Summit",
          value: "Uhuru Peak – 5,895m",
        },
        {
          icon: "🥾",
          title: "Distance",
          value: "Approx. 46 km",
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
          ⛰
        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            About the Lemosho Route
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            The Lemosho Route is renowned for its exceptional scenery,
            relatively low trail congestion, and gradual approach to the
            summit. Beginning on the western side of Mount Kilimanjaro,
            the trail passes through lush rainforest before opening into
            expansive moorlands and the spectacular Shira Plateau.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The eight-day itinerary provides a gradual ascent with valuable
            opportunities for acclimatization. Trekkers experience several
            distinct ecological zones, from montane forest and heathland to
            alpine desert and the high-altitude summit zone.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-white p-5">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-slate-900">
                Why choose Lemosho?
              </strong>{" "}
              Its combination of spectacular scenery, gradual altitude gain,
              longer trekking duration, and quieter trails makes it an
              excellent choice for trekkers seeking a more immersive
              Kilimanjaro experience.
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
        Your Mountain Journey
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Follow the complete Lemosho adventure from your arrival in Tanzania
        through the spectacular western slopes of Kilimanjaro to Uhuru Peak
        and your final descent to Moshi.
      </p>

    </div>


    {/* ========================================================
        ITINERARY
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

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 1
            </span>

            <span className="text-sm text-slate-400">
              Arrival & Preparation
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Arrival in Moshi
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            Upon arrival at Kilimanjaro International Airport, you’ll receive
            a warm welcome from our representative before being transferred
            privately to your lodge in Moshi. Once settled in, you’ll meet
            your mountain guide for a comprehensive pre-trek briefing and
            equipment check.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Your guide will explain the trekking schedule, safety procedures,
            altitude considerations, and preparations required for the
            expedition. The remainder of the day is reserved for rest and
            relaxation before the adventure begins.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          02
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              Day 2
            </span>

            <span className="text-sm text-slate-400">
              Rainforest Zone
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Moshi – Londorossi Gate – Forest Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              2,100m → 2,750m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3–4 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, drive toward Londorossi Gate where park
            registration and entry procedures are completed. From the gate,
            the trek begins through Kilimanjaro’s lush montane rainforest.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The forest is rich with birdlife and wildlife, and you may spot
            Colobus monkeys moving through the trees. The trail gradually
            gains elevation before reaching Forest Camp, where your mountain
            crew will have prepared your campsite.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Overnight
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Forest Camp
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          03
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 3
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Forest Camp to Shira 1 Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              2,750m → 3,540m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              5–6 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Leaving the rainforest behind, the landscape gradually transforms
            into open moorland dotted with giant heathers. The trail climbs
            toward Shira Ridge before descending slightly toward the
            spectacular Shira Plateau.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            As the forest disappears behind you, expansive views of
            Kilimanjaro begin to emerge. Shira 1 Camp provides an excellent
            opportunity to rest and begin adapting to the higher altitude.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Overnight
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Shira 1 Camp
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
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

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          04
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 4
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Shira 1 – Shira 2 – Moir Hut
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,540m → 4,114m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              6–7 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Today’s trek continues across the vast Shira Plateau. The trail
            passes through dramatic high-altitude landscapes before reaching
            Shira 2 Camp and continuing toward Moir Hut at the base of the
            Lent Hills.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Moir Hut offers a quieter mountain setting and valuable
            opportunities for short acclimatization hikes. Take time to enjoy
            the expansive views across the plateau as you prepare for the
            higher elevations ahead.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Moir Hut Camp
            </p>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 5
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 5
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Moir Hut to Lava Tower & Barranco Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              4,114m → 4,600m → 3,950m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 7 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            Today is an important acclimatization stage. The trail climbs
            toward the iconic Lava Tower, a striking volcanic formation
            standing at approximately 4,600 metres.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            After lunch at higher elevation, the trail descends toward the
            spectacular Barranco Valley. Sleeping lower after reaching Lava
            Tower gives your body valuable exposure to higher altitude while
            continuing the acclimatization process.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Barranco Camp
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
            Barranco Camp to Karanga Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,950m → 4,235m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              4–5 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, tackle the famous Barranco Wall. Although
            impressive from below, the climb is manageable with the guidance
            and support of your experienced mountain crew.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Once above the wall, enjoy dramatic views across the surrounding
            valleys before continuing through alpine terrain toward Karanga
            Camp. The relatively short trekking day provides additional time
            for acclimatization and recovery.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Karanga Camp
            </p>

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
            Karanga Camp to Barafu Camp
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              4,235m → 4,600m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              4–5 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            The trail climbs steadily toward Barafu Camp, the final staging
            point for your summit attempt. The landscape becomes increasingly
            barren as vegetation disappears and the air grows colder and more
            exposed.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Upon arrival at Barafu, your crew will help you settle in and
            prepare your summit equipment. Spend the afternoon resting,
            hydrating, and mentally preparing for the midnight climb.
          </p>

          <div className="mt-7 border-t border-slate-100 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Barafu Camp
            </p>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 8 — SUMMIT
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          08
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Summit Day
            </span>

            <span className="text-sm font-semibold text-amber-700">
              The Roof of Africa
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Barafu Camp to Uhuru Peak & Mweka Camp
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              4,600m → 5,895m → 3,100m
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              12–14 Hours
            </span>

          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Around midnight, your summit attempt begins. Guided by headlamps,
            you’ll ascend slowly through the steep scree slopes toward Stella
            Point. The climb is demanding, but your guide and mountain crew
            will maintain a steady pace suited to the conditions.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            After reaching Stella Point at approximately 5,685 metres, the
            trail continues along the crater rim toward the ultimate objective:
            <strong className="text-slate-900">
              {" "}Uhuru Peak at 5,895 metres.
            </strong>
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Summit Achievement
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              UHURU PEAK — 5,895 METRES
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              The highest point in Africa and the ultimate goal of your
              Kilimanjaro expedition.
            </p>

          </div>

          <p className="leading-8 text-slate-600">
            After celebrating your achievement and taking photographs, begin
            the descent toward Barafu Camp for a short rest and meal. The
            journey then continues downhill toward Mweka Camp, where you’ll
            spend your final night on the mountain.
          </p>

          <div className="mt-7 border-t border-amber-200 pt-6">

            <p className="text-xs font-semibold uppercase text-slate-400">
              Overnight
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              Mweka Camp
            </p>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 9
      ====================================================== */}
      <div className="relative mb-10 md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          09
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 9
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Mweka Camp to Mweka Gate & Return to Moshi
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              3,100m → 1,980m
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Approx. 3 Hours
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, begin your final descent through Kilimanjaro’s
            lush forest toward Mweka Gate. The changing vegetation provides a
            refreshing contrast to the barren alpine landscapes experienced
            during the summit stages.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            At the gate, complete the park exit procedures and receive your
            Kilimanjaro summit certificate. Your vehicle will then transfer
            you back to Moshi for a hot shower, relaxation, and a well-earned
            evening of recovery.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Kaliwa Lodge, Moshi
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast & Lunch
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* ======================================================
          DAY 10
      ====================================================== */}
      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white shadow-lg md:flex">
          10
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            Day 10
          </span>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Departure Day
          </h4>

          <p className="mt-4 leading-8 text-slate-600">
            Depending on your departure time, enjoy breakfast at your lodge
            before checking out. You’ll then be transferred to Kilimanjaro
            International Airport for your onward journey.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Meals
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Breakfast
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                None – Tour Ends
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
              Your Trek Includes
            </h3>

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {[
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
            "Extra services or personal purchases at the hotel",
            "Beverages other than drinking water, including sodas and alcoholic beverages",
            "Tips and gratuities for guides, porters, cooks and mountain crew",
            "Meals in Moshi unless specifically indicated",
            "Personal sleeping bag",
            "Trekking poles",
            "Headlamp and personal trekking equipment",
            "Personal clothing and hiking gear",
            "International and domestic flights",
            "Travel insurance",
            "Visa fees and personal documentation costs",
            "Any activity, service or expense not specifically listed under Included",
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
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Your Kilimanjaro Adventure
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Conquer the Roof of Africa?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Experience the spectacular Lemosho Route with an experienced
          mountain crew, carefully planned acclimatization, breathtaking
          scenery, and professional support from your arrival in Tanzania
          to the summit and back to Moshi.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Plan Your Climb
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