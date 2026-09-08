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
  id="diani-itineraries-hero"
  className="relative overflow-hidden bg-[#092d1a]"
>
  <img
    src={diani1}
    alt="Diani Beach Kenya"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#061b10]/90 via-[#092d1a]/55 to-[#092d1a]/10" />

  <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[540px] lg:px-12">
    <div className="max-w-3xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#dba33a]" />
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
          Beach Holidays
        </span>
      </div>

      <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Diani Beach
        <span className="block text-[#f5c45d]">
          Holiday Itineraries
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
        Escape to Kenya's tropical coast with pristine beaches, turquoise
        waters, warm sunshine and unforgettable Indian Ocean experiences.
      </p>
    </div>
  </div>
</section>





{/* =====================================================
    4-DAY DIANI BEACH HOLIDAY — PREMIUM ITINERARY
===================================================== */}

<section id="diani-4-day" className="relative overflow-hidden bg-[#F7F4EA] py-20 sm:py-24 lg:py-32">

  {/* Decorative background elements */}

  <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F39A08]/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0D4825]/10 blur-3xl" />


  <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">


    {/* =====================================================
        INTRODUCTION
    ====================================================== */}

    <div className="mx-auto max-w-4xl text-center">

      <div className="inline-flex items-center gap-3 rounded-full border border-[#F39A08]/25 bg-white px-5 py-2 shadow-sm">

        <span className="h-2 w-2 rounded-full bg-[#F39A08]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0D4825]">
          4 Days · 3 Nights · Kenya Coast
        </span>

      </div>


      <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#0D4825] sm:text-5xl lg:text-6xl">

        4-Day Diani

        <span className="block text-[#F39A08]">
          Beach Holiday
        </span>

      </h2>


      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">

        Uncover the magic of Kenya’s southern coast with a four-day escape
        to Diani Beach — a beautiful blend of relaxation, ocean adventure
        and coastal discovery. Your journey begins aboard the SGR train,
        travelling through Kenya’s changing landscapes before arriving at
        the turquoise waters and white sands of Diani.

      </p>


      <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">

        From peaceful days beside the Indian Ocean to an optional Wasini
        Island adventure, this carefully designed getaway gives you the
        freedom to experience the coast at your own pace. Choose adventure,
        embrace complete relaxation, or combine both for an unforgettable
        Kenyan beach holiday.

      </p>


      {/* QUICK FACTS */}

      <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-3xl border border-[#0D4825]/10 bg-white shadow-xl sm:grid-cols-4">

        <div className="border-b border-r border-[#0D4825]/10 p-5 sm:border-b-0">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F39A08]">
            Duration
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-[#0D4825]">
            4 Days
          </p>

        </div>


        <div className="border-b border-[#0D4825]/10 p-5 sm:border-b-0 sm:border-r">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F39A08]">
            Nights
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-[#0D4825]">
            3 Nights
          </p>

        </div>


        <div className="border-r border-[#0D4825]/10 p-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F39A08]">
            Destination
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-[#0D4825]">
            Diani Beach
          </p>

        </div>


        <div className="p-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F39A08]">
            Experience
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-[#0D4825]">
            Coastal Escape
          </p>

        </div>

      </div>

    </div>



    {/* =====================================================
        ITINERARY TIMELINE
    ====================================================== */}

    <div className="relative mx-auto mt-16 max-w-6xl lg:mt-20">


      {/* CENTRAL TIMELINE */}

      <div className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-gradient-to-b from-[#F39A08] via-[#0D4825]/20 to-[#F39A08] md:block" />


      {/* =====================================================
          DAY 01
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          01
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">


          {/* IMAGE */}

          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[450px]">

            <img
              src={diani1}
              alt="Journey from Nairobi to Diani Beach"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 01
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Journey to the Coast
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Nairobi → Diani Beach
              </p>

            </div>

          </div>



          {/* CONTENT */}

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 01 · Travel & Arrival
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Journey to the Coast
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Your Diani adventure begins with an early morning pick-up from
              your location in Nairobi. You’ll be transferred to the SGR
              station to board the train towards Mombasa, beginning a scenic
              journey through the heart of Kenya.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              As the train travels south, watch the landscape transform from
              urban surroundings to vast savannahs, rural communities and
              coastal plains. This comfortable rail journey offers a relaxed
              and memorable introduction to your beach holiday.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              On arrival in Mombasa, you’ll be warmly welcomed by your driver
              and transferred to your hotel in Diani. After check-in and
              lunch, the remainder of the afternoon is yours to enjoy at
              your own pace — whether you choose to walk along the beach,
              swim in the pool or simply unwind after the journey.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              Dinner at the resort brings the day to a relaxed close before
              your first comfortable night on the Kenyan coast.

            </p>


            {/* DETAILS */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Destination
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Diani Beach
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  Diani Sea Resort
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Lunch & Dinner
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
              Day 02 · Adventure or Leisure
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Wasini Island Adventure or Leisure by the Sea
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Today gives you the freedom to choose how you experience the
              coast. For travellers seeking adventure, an optional full-day
              excursion to Wasini Island offers a memorable journey into
              Kenya’s marine world.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              After breakfast, travel to Shimoni and board a traditional dhow
              sailing through the marine park. Depending on conditions and
              availability, you may have opportunities to snorkel or dive
              among vibrant coral gardens and encounter marine life such as
              dolphins and sea turtles.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              Continue to Wasini Island for a traditional seafood lunch and
              an opportunity to experience elements of local island culture
              before returning to Diani in the late afternoon.

            </p>


            {/* LEISURE OPTION */}

            <div className="mt-6 rounded-2xl border border-[#F39A08]/20 bg-[#F39A08]/5 p-5">

              <div className="flex items-start gap-3">

                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F39A08] text-sm font-bold text-[#0D4825]">
                  OR
                </span>

                <div>

                  <p className="font-bold text-[#0D4825]">
                    Choose a slower pace
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">

                    Prefer complete relaxation? Spend the day at the resort,
                    lounge on the beach, swim, enjoy a massage or simply
                    savour the peaceful atmosphere of the Kenyan coast.

                  </p>

                </div>

              </div>

            </div>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Destination
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  Diani Beach / Wasini Island
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Optional excursion
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Diani Sea Resort
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  All meals included
                </p>

              </div>

            </div>

          </div>



          {/* IMAGE */}

          <div className="relative order-1 min-h-[350px] overflow-hidden lg:order-2 lg:min-h-[470px]">

            <img
              src={diani2}
              alt="Wasini Island marine adventure"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 02
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Optional Marine Experience
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Wasini Island
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


          {/* IMAGE */}

          <div className="relative min-h-[350px] overflow-hidden lg:min-h-[470px]">

            <img
              src={diani1}
              alt="Diani Beach coastal relaxation"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 03
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Relaxation & Discovery
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Coastal Serenity
              </p>

            </div>

          </div>



          {/* CONTENT */}

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 03 · Beach & Sunset
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Coastal Serenity & Sunset Strolls
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Spend the day embracing the tranquil rhythms of Diani Beach.
              After breakfast, take a slow walk along the white sands, enjoy
              relaxed beach games or simply settle beside the Indian Ocean
              and let the day unfold at your own pace.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              For those looking to add a little more to their day, an
              optional spa treatment or local village visit can be arranged
              through the hotel, providing another perspective on the
              character and culture of Kenya’s coast.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              As afternoon turns to evening, return to the shoreline for a
              peaceful sunset stroll. Watch the changing colours across the
              ocean and enjoy the golden-hour atmosphere before settling in
              for a special dinner at the resort or a nearby restaurant.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Destination
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Diani Beach
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Diani Sea Resort
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  All meals included
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 04
      ====================================================== */}

      <div className="relative mb-12 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#0D4825] font-serif text-lg font-bold text-white shadow-lg md:flex">
          04
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">


          {/* CONTENT */}

          <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 04 · Return Journey
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Return to Nairobi
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              After a relaxed breakfast, it’s time to say farewell to the
              Kenyan coast. Following check-out, your driver will transfer
              you back to Mombasa for your return SGR journey to Nairobi.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              Settle into your train seat and enjoy one final look at the
              changing landscapes of coastal Kenya as the journey takes you
              back towards the capital.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              Upon arrival in Nairobi, you’ll be met at the station and
              transferred to your preferred location, whether that is your
              hotel, residence or the airport. Your refreshing Diani beach
              escape then comes to a close, leaving you with memories of
              white sands, turquoise waters and the warm spirit of the coast.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Destination
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Nairobi
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  None · Tour Ends
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast & Lunch
                </p>

              </div>

            </div>

          </div>



          {/* IMAGE */}

          <div className="relative order-1 min-h-[350px] overflow-hidden lg:order-2 lg:min-h-[470px]">

            <img
              src={diani4}
              alt="Diani Beach farewell and return journey"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 04
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Farewell to the Coast
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Diani → Nairobi
              </p>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DEPARTURE / TOUR CLOSING
      ====================================================== */}

      <div className="relative overflow-hidden rounded-[2rem] bg-[#0D4825] shadow-2xl">

        {/* Decorative shapes */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F39A08]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />


        <div className="relative grid lg:grid-cols-[1fr_auto] lg:items-center">


          {/* TEXT */}

          <div className="p-8 sm:p-10 lg:p-12">

            <div className="flex items-center gap-3">

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F39A08] text-[#0D4825]">
                ✓
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
                Departure · Until Next Time
              </span>

            </div>


            <h3 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl">
              Take the Coast Home With You
            </h3>


            <p className="mt-5 max-w-3xl leading-7 text-white/65">

              Your four-day Diani experience comes to an end with your return
              to Nairobi. From the comfort of the SGR journey to the white
              sands of Diani, marine adventures and peaceful coastal evenings,
              this getaway is designed to leave you refreshed and inspired.

            </p>


            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

              <p className="text-sm leading-6 text-white/65">

                <span className="font-bold text-white">
                  Travel Note:
                </span>{" "}
                Optional excursions, spa treatments, cultural visits and
                additional nights can be arranged on request. The itinerary
                can also be tailored around your preferred travel dates,
                interests and pace.

              </p>

            </div>

          </div>



          {/* CTA */}

          <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Ready for the coast?
            </p>


            <p className="mt-2 max-w-xs text-sm leading-6 text-white/60">
              Let us arrange your Diani beach holiday from Nairobi to the coast and back.
            </p>


            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#F39A08] px-7 py-4 text-sm font-bold text-[#0D4825] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffad20] sm:w-auto"
            >
              Enquire About This Tour
              <span className="ml-2 text-lg">
                →
              </span>
            </Link>

          </div>

        </div>

      </div>



      {/* =====================================================
          EXPERIENCE SUMMARY
      ====================================================== */}

      <div className="mt-14 text-center">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
          Your Diani Experience
        </p>


        <div className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-2">

          {[
            "SGR Journey",
            "Diani Beach",
            "Wasini Island",
            "Marine Adventure",
            "Coastal Relaxation",
            "Sunset Strolls",
          ].map((item, index) => (

            <React.Fragment key={item}>

              <span className="rounded-full border border-[#0D4825]/10 bg-white px-4 py-2.5 text-xs font-semibold text-[#0D4825] shadow-sm">
                {item}
              </span>

              {index < 5 && (
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



{/* =====================================================
    3-DAY WATAMU BEACH ESCAPE — PREMIUM ITINERARY
===================================================== */}

<section id="watamu-3-day" className="relative overflow-hidden bg-[#F7F4EA] py-20 sm:py-24 lg:py-32">

  {/* Decorative background elements */}

  <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F39A08]/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0D4825]/10 blur-3xl" />


  <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">


    {/* =====================================================
        INTRODUCTION
    ====================================================== */}

    <div className="mx-auto max-w-4xl text-center">

      <div className="inline-flex items-center gap-3 rounded-full border border-[#F39A08]/25 bg-white px-5 py-2 shadow-sm">

        <span className="h-2 w-2 rounded-full bg-[#F39A08]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0D4825]">
          3 Days · 2 Nights · Kenya Coast
        </span>

      </div>


      <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#0D4825] sm:text-5xl lg:text-6xl">

        3-Day Watamu

        <span className="block text-[#F39A08]">
          Beach Escape
        </span>

      </h2>


      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">

        Embrace the coastal calm of Watamu with a refreshing three-day
        escape along Kenya’s north coast. Known for its pristine white-sand
        beaches, turquoise Indian Ocean waters, vibrant coral reefs and rich
        Swahili heritage, Watamu offers the perfect setting for a short
        getaway filled with relaxation and discovery.

      </p>


      <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">

        From peaceful mornings beside the ocean to optional marine
        adventures, cultural discoveries and spectacular coastal sunsets,
        this carefully designed escape gives you the freedom to unwind,
        explore or combine both at your own pace.

      </p>


      {/* QUICK FACTS */}

      <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-3xl border border-[#0D4825]/10 bg-white shadow-xl sm:grid-cols-4">

        <div className="border-b border-r border-[#0D4825]/10 p-5 sm:border-b-0">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F39A08]">
            Duration
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-[#0D4825]">
            3 Days
          </p>

        </div>


        <div className="border-b border-[#0D4825]/10 p-5 sm:border-b-0 sm:border-r">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F39A08]">
            Nights
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-[#0D4825]">
            2 Nights
          </p>

        </div>


        <div className="border-r border-[#0D4825]/10 p-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F39A08]">
            Destination
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-[#0D4825]">
            Watamu
          </p>

        </div>


        <div className="p-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F39A08]">
            Experience
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-[#0D4825]">
            Coastal Escape
          </p>

        </div>

      </div>

    </div>



    {/* =====================================================
        ITINERARY TIMELINE
    ====================================================== */}

    <div className="relative mx-auto mt-16 max-w-6xl lg:mt-20">


      {/* CENTRAL TIMELINE */}

      <div className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-gradient-to-b from-[#F39A08] via-[#0D4825]/20 to-[#F39A08] md:block" />


      {/* =====================================================
          DAY 01
      ====================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          01
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">


          {/* IMAGE */}

          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[450px]">

            <img
              src={watamu1}
              alt="Watamu Beach coastal welcome"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 01
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Arrival & Coastal Welcome
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Watamu Beach
              </p>

            </div>

          </div>



          {/* CONTENT */}

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 01 · Arrival & Relaxation
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Arrival & Coastal Welcome
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Begin your journey with a scenic transfer from your location
              to Watamu. As you approach Kenya’s north coast, the atmosphere
              changes to one of tropical calm, with warm sea breezes,
              turquoise waters and the promise of a peaceful beach escape.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              On arrival, check in at Medina Palms, a luxurious beachfront
              retreat offering spacious suites and serene surroundings.
              Settle into your accommodation before enjoying a freshly
              prepared lunch with views of the Indian Ocean.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              The rest of the afternoon is yours to enjoy at leisure. Take a
              gentle walk along the beach, enjoy a refreshing swim or relax
              beside the infinity pool while taking in Watamu’s laid-back
              coastal atmosphere.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              As evening falls, savour dinner at the resort restaurant before
              retiring for a peaceful overnight stay beside the coast.

            </p>


            {/* DETAILS */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Main Destination
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Watamu Beach
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Medina Palms
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals & Drinks
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Lunch & Dinner
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
              Day 02 · Marine Adventure or Leisure
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Explore the Marine Park or Unwind
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              After a hearty breakfast, choose how you would like to
              experience your second day in Watamu. For travellers looking
              for adventure, an optional half-day excursion to Watamu Marine
              National Park provides an opportunity to discover the vibrant
              marine life beneath the Indian Ocean.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              Board a glass-bottom boat or join a snorkeling experience and
              explore colourful coral reefs teeming with marine life. You may
              encounter tropical fish, sea turtles and, with favourable
              conditions, dolphins in the surrounding waters.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              After the marine experience, return to the hotel for lunch and
              enjoy a relaxed afternoon.

            </p>


            {/* LEISURE / CULTURAL OPTION */}

            <div className="mt-6 rounded-2xl border border-[#F39A08]/20 bg-[#F39A08]/5 p-5">

              <div className="flex items-start gap-3">

                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F39A08] text-sm font-bold text-[#0D4825]">
                  OR
                </span>

                <div>

                  <p className="font-bold text-[#0D4825]">
                    Choose a slower coastal experience
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">

                    Prefer to relax? Spend the day on the beach, arrange a
                    soothing spa treatment or visit the nearby Gede Ruins to
                    discover more about Watamu’s history and Swahili roots.

                  </p>

                </div>

              </div>

            </div>


            <p className="mt-5 leading-7 text-gray-600">

              As evening approaches, enjoy a peaceful walk along the beach
              during sunset before returning for a delicious dinner and
              another tranquil night at your resort.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Main Destination
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  Watamu Marine Park
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Optional excursion
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Medina Palms
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals & Drinks
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  All meals included
                </p>

              </div>

            </div>

          </div>



          {/* IMAGE */}

          <div className="relative order-1 min-h-[370px] overflow-hidden lg:order-2 lg:min-h-[500px]">

            <img
              src={watamu2}
              alt="Watamu Marine National Park"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 02
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Optional Marine Experience
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Watamu Marine Park
              </p>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DAY 03
      ====================================================== */}

      <div className="relative mb-12 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          03
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">


          {/* IMAGE */}

          <div className="relative min-h-[350px] overflow-hidden lg:min-h-[470px]">

            <img
              src={watamu3}
              alt="Watamu Beach sunrise and coastal farewell"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />


            <div className="absolute left-6 top-6">

              <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Day 03
              </span>

            </div>


            <div className="absolute bottom-7 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A08]">
                Sunrise & Departure
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Farewell to Watamu
              </p>

            </div>

          </div>



          {/* CONTENT */}

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 03 · Final Morning
            </span>


            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Sunrise Moments & Departure
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Wake up to the gentle sound of the waves and enjoy your final
              breakfast overlooking the sea. With the morning still ahead,
              take some time to savour the last moments of your coastal
              retreat.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              Enjoy a final morning swim, take a peaceful walk along the
              shoreline or browse local boutiques for a few last-minute
              souvenirs and reminders of your time in Watamu.

            </p>


            <p className="mt-4 leading-7 text-gray-600">

              After check-out, a comfortable transfer will be arranged for
              your onward journey. Whether you are continuing to Nairobi,
              Mombasa or another destination, your Watamu escape concludes
              with sun-kissed memories of the Indian Ocean and Kenya’s
              beautiful north coast.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Main Destination
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  Nairobi / Mombasa / Onward Travel
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  None · Tour Ends
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals & Drinks
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast & Lunch
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DEPARTURE / TOUR CLOSING
      ====================================================== */}

      <div className="relative overflow-hidden rounded-[2rem] bg-[#0D4825] shadow-2xl">

        {/* Decorative shapes */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F39A08]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />


        <div className="relative grid lg:grid-cols-[1fr_auto] lg:items-center">


          {/* TEXT */}

          <div className="p-8 sm:p-10 lg:p-12">

            <div className="flex items-center gap-3">

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F39A08] text-[#0D4825]">
                ✓
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
                Departure · Until Next Time
              </span>

            </div>


            <h3 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl">
              Take the Watamu Coast Home With You
            </h3>


            <p className="mt-5 max-w-3xl leading-7 text-white/65">

              Your three-day coastal escape may be short, but every moment
              is designed to leave you refreshed. From the serenity of
              Watamu’s beaches and the beauty of its marine environment to
              its cultural character and peaceful sunsets, this getaway
              offers the perfect balance of relaxation and discovery.

            </p>


            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

              <p className="text-sm leading-6 text-white/65">

                <span className="font-bold text-white">
                  Travel Note:
                </span>{" "}
                Optional marine excursions, spa treatments, cultural visits
                and additional nights can be arranged on request. The
                itinerary can also be tailored around your preferred travel
                dates, interests and pace.

              </p>

            </div>

          </div>



          {/* CTA */}

          <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Ready for Watamu?
            </p>


            <p className="mt-2 max-w-xs text-sm leading-6 text-white/60">
              Let us arrange your coastal escape from arrival to departure.
            </p>


            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#F39A08] px-7 py-4 text-sm font-bold text-[#0D4825] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffad20] sm:w-auto"
            >
              Enquire About This Tour
              <span className="ml-2 text-lg">
                →
              </span>
            </Link>

          </div>

        </div>

      </div>



      {/* =====================================================
          EXPERIENCE SUMMARY
      ====================================================== */}

      <div className="mt-14 text-center">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
          Your Watamu Experience
        </p>


        <div className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-2">

          {[
            "Watamu Beach",
            "Indian Ocean",
            "Marine Park",
            "Snorkeling",
            "Swahili Culture",
            "Coastal Sunsets",
          ].map((item, index) => (

            <React.Fragment key={item}>

              <span className="rounded-full border border-[#0D4825]/10 bg-white px-4 py-2.5 text-xs font-semibold text-[#0D4825] shadow-sm">
                {item}
              </span>

              {index < 5 && (
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


{/* ============================================================
    7-DAY TASTE OF KENYA LUXURY EXPERIENCE
    + 3-DAY DIANI BEACH EXTENSION
============================================================ */}
<section
  id="10-day-taste-of-kenya-diani-extension"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        PREMIUM INTRO
    ======================================================== */}
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">

      {/* LEFT CONTENT */}
      <div>

        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
          <span className="h-px w-8 bg-[#dba33a]" />
          7-Day Safari + 3-Day Beach Extension
        </span>

        <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.05] text-[#082D19] sm:text-5xl lg:text-6xl">
          Taste of Kenya
          <span className="block text-[#dba33a]">
            + Diani Beach
          </span>
        </h2>

        <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
          Discover the highlights of Kenya on an unforgettable luxury journey
          combining the legendary Masai Mara, the scenic Great Rift Valley,
          Lake Naivasha, and the elephant-filled plains of Amboseli, followed
          by a relaxing extension on the beautiful Diani Beach.
        </p>

        <p className="mt-5 text-base leading-8 text-gray-600">
          Experience exceptional wildlife viewing, spectacular landscapes and
          luxurious accommodation as you journey from Kenya's famous safari
          destinations to the tropical Indian Ocean coast.
        </p>

        {/* QUICK INFO */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">

          <div className="rounded-2xl bg-[#f7f5ee] p-4">
            <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
              Duration
            </span>

            <span className="mt-2 block font-serif text-xl text-[#082D19]">
              10 Days
            </span>
          </div>

          <div className="rounded-2xl bg-[#f7f5ee] p-4">
            <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
              Experience
            </span>

            <span className="mt-2 block font-serif text-xl text-[#082D19]">
              Safari + Beach
            </span>
          </div>

          <div className="rounded-2xl bg-[#f7f5ee] p-4">
            <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
              Style
            </span>

            <span className="mt-2 block font-serif text-xl text-[#082D19]">
              Luxury
            </span>
          </div>

          <div className="rounded-2xl bg-[#f7f5ee] p-4">
            <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
              Safari
            </span>

            <span className="mt-2 block font-serif text-xl text-[#082D19]">
              Private
            </span>
          </div>

        </div>

      </div>


      {/* ======================================================
          RIGHT IMAGE COLLAGE
      ====================================================== */}
      <div className="relative h-[520px] sm:h-[600px]">

        {/* MAIN MASAI MARA IMAGE */}
        <div className="absolute inset-y-0 left-0 w-[72%] overflow-hidden rounded-[2.2rem] shadow-2xl">

          <img
            src="https://media.jambo.nl/original/galerij/Kenia-Wildlife-Masai-Mara-leeuwen-IS-520772736.jpg"
            alt="Lions in the Masai Mara"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/80 via-transparent to-transparent" />

          <div className="absolute bottom-7 left-7">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
              Kenya
            </span>

            <p className="mt-2 font-serif text-2xl text-white">
              Masai Mara National Reserve
            </p>
          </div>

        </div>


        {/* AMBOSELI IMAGE */}
        <div className="absolute right-0 top-10 h-52 w-[43%] overflow-hidden rounded-[1.75rem] border-8 border-white shadow-2xl sm:h-64">

          <img
            src="https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/94c3a4b806d0f86ab5564bc9b73e8186ea6941597536e2a51023021d29ef235f.jpg"
            alt="Elephants with Mount Kilimanjaro in Amboseli"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-4 left-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">
              Amboseli
            </span>
          </div>

        </div>


        {/* DIANI BEACH IMAGE */}
        <div className="absolute bottom-8 right-0 h-52 w-[43%] overflow-hidden rounded-[1.75rem] border-8 border-white shadow-2xl sm:h-64">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
            alt="White sandy beach and turquoise Indian Ocean"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-4 left-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">
              Diani Beach
            </span>
          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        JOURNEY HIGHLIGHTS
    ======================================================== */}
    <div className="mt-24">

      <div className="mx-auto max-w-3xl text-center">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
          Safari Highlights
        </span>

        <h3 className="mt-4 font-serif text-4xl text-[#082D19] sm:text-5xl">
          Five Extraordinary
          <span className="block text-[#dba33a]">
            Kenyan Experiences.
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
          From the wildlife-rich plains of the Mara to the tropical shores
          of Diani, experience Kenya's most iconic landscapes in one
          carefully designed luxury journey.
        </p>

      </div>


      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* ====================================================
            MASAI MARA
        ==================================================== */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src="https://media.jambo.nl/original/galerij/Kenia-Wildlife-Masai-Mara-leeuwen-IS-520772736.jpg"
              alt="Lions in the Masai Mara"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Day 1–2
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Masai Mara
              </h4>
            </div>

          </div>

          <div className="p-6">
            <p className="text-sm leading-7 text-gray-600">
              Explore Kenya's legendary wildlife reserve in search of
              lions, leopards, cheetahs, elephants, buffaloes, giraffes,
              zebras, wildebeest and abundant plains wildlife.
            </p>
          </div>

        </div>


        {/* ====================================================
            LAKE NAKURU
        ==================================================== */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src="https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/09/2.-Flamingos-and-Rhinos-at-Lake-Nakuru-National-Park-Kenya.jpg?resize=1024%2C573&ssl=1"
              alt="Flamingos and wildlife at Lake Nakuru"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Day 3
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Lake Nakuru
              </h4>
            </div>

          </div>

          <div className="p-6">
            <p className="text-sm leading-7 text-gray-600">
              Discover the scenic Great Rift Valley and search for black
              and white rhinos, lions, leopards, buffaloes, giraffes,
              zebras and diverse birdlife.
            </p>
          </div>

        </div>


        {/* ====================================================
            LAKE NAIVASHA
        ==================================================== */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
              alt="Scenic lake landscape in Kenya"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Day 4
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Lake Naivasha
              </h4>
            </div>

          </div>

          <div className="p-6">
            <p className="text-sm leading-7 text-gray-600">
              Relax beside the tranquil waters of Lake Naivasha, surrounded
              by beautiful landscapes, hippos, giraffes, zebras, buffaloes,
              antelope and abundant birdlife.
            </p>
          </div>

        </div>


        {/* ====================================================
            AMBOSELI
        ==================================================== */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src="https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/94c3a4b806d0f86ab5564bc9b73e8186ea6941597536e2a51023021d29ef235f.jpg"
              alt="Elephants beneath Mount Kilimanjaro in Amboseli"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Day 5–7
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Amboseli
              </h4>
            </div>

          </div>

          <div className="p-6">
            <p className="text-sm leading-7 text-gray-600">
              Experience spectacular Mount Kilimanjaro views and encounter
              Amboseli's famous elephant herds alongside lions, buffaloes,
              giraffes, zebras, wildebeest and other plains wildlife.
            </p>
          </div>

        </div>


        {/* ====================================================
            DIANI BEACH
        ==================================================== */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
              alt="Diani Beach on the Kenyan coast"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Day 7–10
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Diani Beach
              </h4>
            </div>

          </div>

          <div className="p-6">
            <p className="text-sm leading-7 text-gray-600">
              Finish your Kenyan adventure beside the Indian Ocean with
              white sandy beaches, turquoise waters, tropical surroundings
              and time to completely unwind after your safari.
            </p>
          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        DAY-BY-DAY ITINERARY
    ======================================================== */}
    <div className="mt-28">

      <div className="max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
          The Journey
        </span>

        <h3 className="mt-4 font-serif text-4xl text-[#082D19] sm:text-5xl">
          Your Experience,
          <span className="text-[#dba33a]">
            {" "}Day By Day.
          </span>
        </h3>

        <p className="mt-5 text-base leading-8 text-gray-600">
          Seven days of exceptional safari followed by three relaxing days
          on Kenya's beautiful Indian Ocean coast.
        </p>

      </div>


      <div className="relative mt-14">

        {/* TIMELINE LINE */}
        <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-[#0b4224]/10 md:block" />

        <div className="space-y-6">


          {/* ==================================================
              DAY 1
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              01
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Nairobi → Masai Mara
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Nairobi – Masai Mara National Reserve
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Your journey begins in Nairobi, where you will be picked up
                by a representative from Daffar Tours and Travel and driven
                to the Masai Mara National Reserve. Upon arrival, check in
                to your camp and enjoy lunch before heading out for your
                first afternoon game drive. Explore the spectacular Mara
                plains in search of lions, leopards, cheetahs, elephants,
                buffaloes, giraffes, zebras, wildebeest, impalas, topi and
                Thomson's gazelles.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Alama Camp Mara
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Lunch & Dinner
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              DAY 2
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              02
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Full Day Wildlife Experience
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Full-Day Masai Mara National Reserve
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, spend the day exploring the Masai Mara
                with game drives across its expansive savannah. Search for
                lions, leopards, cheetahs and hyenas, while elephants,
                buffaloes, giraffes, zebras, wildebeest, elands, waterbucks,
                impalas, topi and Thomson's gazelles can be encountered
                throughout the reserve.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Alama Camp Mara
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast, Lunch & Dinner
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              DAY 3
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              03
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Masai Mara → Lake Nakuru
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Masai Mara – Lake Nakuru National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, depart the Masai Mara and travel towards
                Lake Nakuru National Park. Upon arrival, enjoy lunch before
                heading out for an afternoon game drive. Lake Nakuru is
                renowned for its rhino population, offering opportunities
                to see black and white rhinos. Look out for lions, leopards,
                buffaloes, giraffes, zebras, waterbucks, elands, impalas
                and baboons.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Sarova Lion Hill Game Lodge
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast, Lunch & Dinner
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              DAY 4
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              04
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Lake Nakuru → Lake Naivasha
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Lake Nakuru – Lake Naivasha
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, depart Lake Nakuru and continue to Lake
                Naivasha in the Great Rift Valley. Upon arrival, check in
                to your resort and enjoy lunch. Spend the afternoon enjoying
                the peaceful surroundings of the lake and its beautiful
                landscapes. The area is home to hippos, giraffes, zebras,
                buffaloes, waterbucks and various antelope species.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Enashipai Resort & Spa
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast, Lunch & Dinner
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              DAY 5
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              05
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Lake Naivasha → Amboseli
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Lake Naivasha – Amboseli National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, depart Lake Naivasha and travel south
                towards Amboseli National Park. Upon arrival, enjoy lunch
                before heading out for an afternoon game drive. Amboseli
                is famous for its large elephant herds and spectacular
                views of Mount Kilimanjaro. Search for elephants, lions,
                cheetahs, buffaloes, giraffes, zebras, wildebeest, hyenas,
                gazelles and other plains wildlife.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Ol Tukai Lodge
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast, Lunch & Dinner
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              DAY 6
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              06
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Full Day Wildlife Experience
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Full-Day Amboseli National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, spend the day exploring Amboseli National
                Park on game drives through its open plains and wetlands.
                The park provides excellent opportunities to see large
                herds of elephants with Mount Kilimanjaro forming a
                spectacular backdrop. Continue your search for lions,
                cheetahs, hyenas, buffaloes, giraffes, zebras, wildebeest,
                impalas, Thomson's gazelles and other antelope species.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Ol Tukai Lodge
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast, Lunch & Dinner
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              DAY 7
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              07
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Amboseli → Diani Beach
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Amboseli – Diani Beach
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, depart Amboseli and continue your journey
                towards Kenya's beautiful Indian Ocean coast. Arrive in
                Diani Beach and check in to your resort. After your safari
                adventure, spend the remainder of the day relaxing in the
                tropical surroundings of Diani. Enjoy the white sandy
                beaches, turquoise waters and warm coastal atmosphere.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Diani Sea Resort
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast, Lunch & Dinner
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              DAY 8
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              08
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Diani Beach Experience
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Full Day Diani Beach
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Enjoy a relaxing day in Diani Beach. Take time to unwind
                at your resort and appreciate the beauty of Kenya's tropical
                coastline. Enjoy the white sands, warm Indian Ocean waters
                and peaceful surroundings as you relax after your safari
                adventure.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Diani Sea Resort
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast, Lunch & Dinner
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              DAY 9
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              09
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Diani Beach Experience
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Another Day in Diani
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Enjoy another leisurely day in Diani Beach, with time to
                relax and enjoy the spectacular Indian Ocean coastline.
                Take in the beautiful tropical surroundings and make the
                most of your final full day on the Kenyan coast.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Diani Sea Resort
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast, Lunch & Dinner
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              DAY 10
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              10
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Diani Beach → Mombasa
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Diani Beach – Mombasa
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Enjoy your final morning in Diani with breakfast and time
                to relax before departure. After lunch, proceed to Mombasa
                for your onward journey. You will be dropped off at your
                agreed location, marking the end of your Taste of Kenya
                Luxury Experience and Diani Beach extension.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast & Lunch
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Experience Ends in Mombasa
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        INCLUSIONS / EXCLUSIONS
    ======================================================== */}
    <div className="mt-24 grid gap-6 lg:grid-cols-2">

      {/* ======================================================
          INCLUSIONS
      ====================================================== */}
      <div className="rounded-[2rem] bg-[#0b4224] p-7 text-white sm:p-9">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
          Included
        </span>

        <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
          Your Experience Includes
        </h3>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          {[
            "Park fees for non-residents",
            "All activities unless labeled optional",
            "All accommodation unless listed as upgrade",
            "Professional driver/guide",
            "All transportation",
            "All Taxes/VAT",
            "Roundtrip airport transfer",
            "Meals as specified",
            "Drinks as specified",
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3 text-sm text-white/75"
            >
              <span className="mt-0.5 text-[#dba33a]">
                ✓
              </span>

              <span>{item}</span>
            </div>

          ))}

        </div>

      </div>


      {/* ======================================================
          EXCLUSIONS
      ====================================================== */}
      <div className="rounded-[2rem] bg-[#f7f5ee] p-7 sm:p-9">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
          Not Included
        </span>

        <h3 className="mt-4 font-serif text-3xl text-[#082D19] sm:text-4xl">
          Additional Costs
        </h3>

        <div className="mt-8 space-y-5">

          {[
            "International flights from/to home",
            "Additional accommodation before and at the end of the tour",
            "Tips — guideline: US$10–15 per person per day",
            "Personal items, souvenirs and travel insurance",
            "Visa fees",
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3 text-sm leading-7 text-gray-600"
            >
              <span className="mt-1 text-[#dba33a]">
                •
              </span>

              <span>{item}</span>
            </div>

          ))}

        </div>


        {/* OPTIONAL ACTIVITIES */}
        <div className="mt-8 rounded-2xl border border-[#dba33a]/20 bg-white p-5">

          <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
            Optional Experiences
          </span>

          <div className="mt-4 space-y-3 text-sm text-gray-600">

            <div className="flex items-center justify-between gap-4">
              <span>Balloon Safari</span>

              <strong className="text-[#082D19]">
                USD 500 / person
              </strong>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span>Maasai Village Visit</span>

              <strong className="text-[#082D19]">
                USD 50 / vehicle
              </strong>
            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================
        PREMIUM CTA
    ======================================================== */}
    <div className="relative mt-16 overflow-hidden rounded-[2.2rem] bg-[#082D19] px-7 py-14 text-center sm:px-12 sm:py-16">

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
          Safari + Beach
        </span>

        <h3 className="mt-5 font-serif text-4xl text-white sm:text-5xl">
          Experience Kenya
          <span className="block text-[#dba33a]">
            From Safari To Sea.
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          Journey from the legendary Masai Mara through the Great Rift Valley
          and Amboseli before ending your adventure on the beautiful white
          sands of Diani Beach.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Plan This Experience →
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