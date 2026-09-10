/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import amboseli from "../assets/amboseli.jpg";
import nakuru3 from "../assets/nakuru3.jpg";
import nakuru4 from "../assets/nakuru4.jpg";
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
          Safari Itineraries
        </span>
      </div>

      <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Amboseli
        <span className="block text-[#f5c45d]">
          Safari Itineraries
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
        Explore the spectacular landscapes of Amboseli, encounter its
        legendary elephants and enjoy unforgettable views of Mount Kilimanjaro.
      </p>
    </div>
  </div>
</section>





{/* ============================================================
    AMBOSELI NATIONAL PARK
============================================================ */}
<section className="bg-white py-16 sm:py-20 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

      {/* ======================================================
          IMAGE
      ====================================================== */}
      <div className="relative group">

        <img
          src={amboseli}
          alt="Amboseli National Park"
          className="h-[380px] w-full rounded-[2rem] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] sm:h-[500px]"
        />

        <div className="absolute bottom-5 left-5 rounded-2xl bg-[#0D4825]/95 px-6 py-4 text-white shadow-xl">

          <p className="text-sm font-bold uppercase tracking-wider text-[#F39A08]">
            Amboseli
          </p>

          <p className="mt-1 text-xs text-white/70">
            Land of giants and mountain views
          </p>

        </div>

      </div>


      {/* ======================================================
          CONTENT
      ====================================================== */}
      <div>

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F39A08]">
          About Amboseli
        </span>

        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl lg:text-5xl">

          Amboseli National Park

          <span className="block text-[#F39A08]">
            Beneath Kilimanjaro
          </span>

        </h2>

        <div className="mt-7 space-y-5 text-gray-600">

          <p className="leading-relaxed">
            Nestled in the shadow of Africa’s highest peak, Mt. Kilimanjaro,
            Amboseli National Park is a captivating safari destination
            celebrated for its vast elephant herds and awe-inspiring scenery.
            Its sweeping plains, dotted with acacia trees and seasonal swamps,
            make it an ideal habitat for diverse wildlife, including buffaloes,
            wildebeests, zebras, and gazelles. Lions and cheetahs are often
            spotted roaming the open grasslands, adding thrilling moments to
            every game drive.
          </p>

          <p className="leading-relaxed">
            Elephants, famous for their impressive tusks, steal the spotlight
            here. Watching them amble across the dusty plains or wade into
            marshes is an unforgettable sight. The park’s wetlands also attract
            abundant birdlife, including flamingos and a variety of waterbirds,
            making it a paradise for birdwatchers. Though black rhinos have
            disappeared and leopards are rarely seen, Amboseli’s wildlife
            viewing remains exceptional.
          </p>

          <p className="leading-relaxed">
            Sunrise and sunset are especially magical when clouds part to
            reveal Kilimanjaro’s snow-capped peak, creating a perfect backdrop
            for photography. Visitors can climb Observation Hill for panoramic
            views or take to the skies in a hot-air balloon for a unique
            perspective at dawn.
          </p>

          <p className="leading-relaxed">
            While the park’s dry months (June to October, plus January and
            February) offer the best game viewing, its beauty and wildlife can
            be enjoyed all year. The climate is generally warm and dry, though
            April and May bring heavier rains that can affect road conditions.
          </p>

          <p className="leading-relaxed">
            Beyond wildlife, Amboseli enchants with its landscapes: open
            savannahs, pockets of woodland, and lush swamps shimmering under
            Kilimanjaro’s gaze. This blend of scenery, wildlife, and iconic
            views ensures Amboseli National Park remains one of Kenya’s most
            memorable and rewarding safari destinations.
          </p>

        </div>


        {/* ======================================================
            HIGHLIGHTS
        ====================================================== */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Wildlife
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Vast elephant herds & diverse wildlife
            </p>

          </div>

          <div className="rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Kilimanjaro
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Iconic mountain views & photography
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ============================================================
    6-DAY AMBOSELI • SERENGETI • NGORONGORO
    LUXURY SAFARI
============================================================ */}



<section
  id="6-day-amboseli-serengeti-ngorongoro"
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
          6-Day Luxury Safari
        </span>

        <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.05] text-[#082D19] sm:text-5xl lg:text-6xl">
          Amboseli,
          <span className="block text-[#dba33a]">
            Serengeti & Ngorongoro
          </span>
        </h2>

        <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
          Experience an exceptional six-day luxury safari across Kenya
          and Tanzania, combining the dramatic landscapes of Amboseli
          National Park with the legendary Serengeti National Park and
          the spectacular Ngorongoro Crater.
        </p>

        <p className="mt-5 text-base leading-8 text-gray-600">
          Discover elephants beneath Mount Kilimanjaro, search for
          lions and leopards across the Serengeti, experience the Great
          Wildebeest Migration when in season, and explore the remarkable
          concentration of wildlife within the Ngorongoro Crater.
        </p>

        {/* QUICK INFO */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">

          <div className="rounded-2xl bg-[#f7f5ee] p-4">
            <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
              Duration
            </span>

            <span className="mt-2 block font-serif text-xl text-[#082D19]">
              6 Days
            </span>
          </div>

          <div className="rounded-2xl bg-[#f7f5ee] p-4">
            <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
              Countries
            </span>

            <span className="mt-2 block font-serif text-xl text-[#082D19]">
              Kenya + Tanzania
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


      {/* RIGHT IMAGE COLLAGE */}
      <div className="relative h-[520px] sm:h-[600px]">

        {/* MAIN IMAGE */}
        <div className="absolute inset-y-0 left-0 w-[72%] overflow-hidden rounded-[2.2rem] shadow-2xl">

          <img
            src="https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/94c3a4b806d0f86ab5564bc9b73e8186ea6941597536e2a51023021d29ef235f.jpg"
            alt="Elephants in Amboseli with Mount Kilimanjaro"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/80 via-transparent to-transparent" />

          <div className="absolute bottom-7 left-7">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
              Kenya
            </span>

            <p className="mt-2 font-serif text-2xl text-white">
              Amboseli National Park
            </p>
          </div>

        </div>


        {/* SERENGETI IMAGE */}
        <div className="absolute right-0 top-10 h-52 w-[43%] overflow-hidden rounded-[1.75rem] border-8 border-white shadow-2xl sm:h-64">

          <img
            src="https://images.ctfassets.net/1mle4fbytmpl/6jRPXHJKqsjGVRaJkJIkGl/9506718fb9c82bddb5f7f166148aaee2/AdobeStock_12724320.jpg?fm=webp&q=80&w=1200"
            alt="Lion and wildebeest in Serengeti"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

        </div>


        {/* NGORONGORO IMAGE */}
        <div className="absolute bottom-8 right-0 h-52 w-[43%] overflow-hidden rounded-[1.75rem] border-8 border-white shadow-2xl sm:h-64">

          <img
            src="https://www.atgcreativelibrary.com/transform/e81b154d-88e4-4767-81dc-cf258cb6cf76/t-afr-tanzania-ngorongoro-national-park-4wd-wilderbeest-108175418-g-rf?download=false&format=webp&io=transform%3Afill%2Cgravity%3Acenter%2Cheight%3A847%2Cwidth%3A2048&io=transform%3Afit%2Cheight%3A1000%2Cwidth%3A1000&quality=65"
            alt="Wildlife in Ngorongoro Crater"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

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
          Three Iconic Destinations.
          <span className="block text-[#dba33a]">
            One Extraordinary Journey.
          </span>
        </h3>

      </div>


      <div className="mt-12 grid gap-6 md:grid-cols-3">

        {/* AMBOSELI */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src="https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/94c3a4b806d0f86ab5564bc9b73e8186ea6941597536e2a51023021d29ef235f.jpg"
              alt="Amboseli elephants"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Day 1–2
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Amboseli
              </h4>
            </div>

          </div>

          <div className="p-6">

            <p className="text-sm leading-7 text-gray-600">
              Enjoy game drives beneath the magnificent Mount Kilimanjaro
              and encounter Amboseli's famous elephant herds alongside
              buffaloes, giraffes, zebras, wildebeest and predators.
            </p>

          </div>

        </div>


        {/* SERENGETI */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src="https://images.ctfassets.net/1mle4fbytmpl/6jRPXHJKqsjGVRaJkJIkGl/9506718fb9c82bddb5f7f166148aaee2/AdobeStock_12724320.jpg?fm=webp&q=80&w=1200"
              alt="Serengeti lion and wildebeest"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Day 3–4
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Serengeti
              </h4>
            </div>

          </div>

          <div className="p-6">

            <p className="text-sm leading-7 text-gray-600">
              Search the endless plains for lions, leopards, cheetahs,
              elephants, buffaloes, wildebeest, zebras and hyenas, with
              opportunities to witness the Great Migration when in season.
            </p>

          </div>

        </div>


        {/* NGORONGORO */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src="https://www.atgcreativelibrary.com/transform/e81b154d-88e4-4767-81dc-cf258cb6cf76/t-afr-tanzania-ngorongoro-national-park-4wd-wilderbeest-108175418-g-rf?download=false&format=webp&io=transform%3Afill%2Cgravity%3Acenter%2Cheight%3A847%2Cwidth%3A2048&io=transform%3Afit%2Cheight%3A1000%2Cwidth%3A1000&quality=65"
              alt="Ngorongoro Crater wildlife"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Day 5–6
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Ngorongoro
              </h4>
            </div>

          </div>

          <div className="p-6">

            <p className="text-sm leading-7 text-gray-600">
              Descend into the spectacular Ngorongoro Crater for a wildlife
              experience featuring lions, elephants, buffaloes, rhinos,
              zebras, wildebeest, hyenas and gazelles.
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
          Your Safari,
          <span className="text-[#dba33a]">
            {" "}Day By Day.
          </span>
        </h3>

        <p className="mt-5 text-base leading-8 text-gray-600">
          A carefully planned journey connecting three of East Africa's
          most extraordinary wildlife destinations.
        </p>

      </div>


      <div className="relative mt-14">

        {/* TIMELINE LINE */}
        <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-[#0b4224]/10 md:block" />


        <div className="space-y-6">

          {/* DAY 1 */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              01
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Nairobi → Amboseli National Park
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Nairobi – Amboseli National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Your safari begins in Nairobi with pickup by a Daffar Tours
                and Travel representative. Travel to Amboseli National Park,
                check in and enjoy lunch before an afternoon game drive.
                Look out for elephants, buffaloes, giraffes, zebras,
                wildebeest, warthogs, jackals and predators beneath the
                spectacular Mount Kilimanjaro backdrop.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Amboseli Serena Safari Lodge
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


          {/* DAY 2 */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              02
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Full Day Wildlife Experience
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Full Day Amboseli National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Enjoy a full day of game drives across Amboseli's diverse
                landscapes. Search for elephants, buffaloes, giraffes,
                zebras, wildebeest and predators while exploring the park's
                open plains and wetlands. Enjoy lunch before continuing
                your afternoon game drive.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Amboseli Serena Safari Lodge
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


          {/* DAY 3 */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              03
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Amboseli → Serengeti
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Amboseli – Serengeti National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, depart Amboseli and continue into Tanzania
                towards the legendary Serengeti National Park. After arrival,
                check in and enjoy lunch before an afternoon game drive.
                Search for lions, leopards, cheetahs, elephants, buffaloes,
                giraffes, zebras, wildebeest, warthogs, jackals and hyenas.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Serengeti Serena Safari Lodge
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


          {/* DAY 4 */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              04
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Full Day Serengeti
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Full Day Serengeti National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Spend a full day exploring the Serengeti with extensive
                game drives. Search for lions, leopards, cheetahs, hyenas,
                elephants, buffaloes, giraffes, zebras, wildebeest and
                warthogs. Depending on the season and location of the
                herds, you may witness the dramatic Great Wildebeest
                Migration.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Serengeti Serena Safari Lodge
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


          {/* DAY 5 */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              05
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Serengeti → Ngorongoro
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Serengeti – Ngorongoro Crater
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, depart the Serengeti and travel towards
                the Ngorongoro Conservation Area. Descend into the
                spectacular crater for a game drive and search for lions,
                elephants, buffaloes, rhinos, zebras, wildebeest, hyenas,
                warthogs and Thomson's gazelles.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Ngorongoro Marera Mountain View Lodge
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


          {/* DAY 6 */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              06
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Ngorongoro → Arusha
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Ngorongoro – Arusha
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, depart your accommodation and begin your
                journey towards Arusha. Enjoy the changing landscapes of
                northern Tanzania along the way before lunch and your final
                drop-off at your hotel, airport, residence or another
                agreed location.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast & Lunch
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Safari Ends in Arusha
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

      {/* INCLUSIONS */}
      <div className="rounded-[2rem] bg-[#0b4224] p-7 text-white sm:p-9">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
          Included
        </span>

        <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
          Your Safari Includes
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


      {/* EXCLUSIONS */}
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

      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#dba33a]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
          Ready For Africa?
        </span>

        <h3 className="mt-5 font-serif text-4xl text-white sm:text-5xl">
          Make This Safari
          <span className="block text-[#dba33a]">
            Your Next Adventure.
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          Travel from the elephants of Amboseli to the endless plains of
          the Serengeti and the wildlife-rich Ngorongoro Crater in one
          extraordinary luxury safari.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Plan This Safari →
          </Link>

         

        </div>

      </div>

    </div>

  </div>
</section>



{/* ============================================================
    6-DAY AMBOSELI • LAKE NAKURU • MASAI MARA — LUXURY SAFARI
============================================================ */}
<section
  id="6-day-amboseli-lake-nakuru-masai-mara"
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
          6-Day Luxury Safari
        </span>

        <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.05] text-[#082D19] sm:text-5xl lg:text-6xl">
          Amboseli,
          <span className="block text-[#dba33a]">
            Lake Nakuru & Masai Mara
          </span>
        </h2>

        <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
          Experience an unforgettable six-day luxury safari through three
          of Kenya's most celebrated wildlife destinations: Amboseli National
          Park, Lake Nakuru National Park, and the Masai Mara National Reserve.
        </p>

        <p className="mt-5 text-base leading-8 text-gray-600">
          Discover elephants beneath the spectacular Mount Kilimanjaro,
          encounter rhinos and diverse birdlife around Lake Nakuru, and
          explore the wildlife-rich plains of the Masai Mara, home to some
          of Africa's most famous predators and plains game.
        </p>

        {/* QUICK INFO */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">

          <div className="rounded-2xl bg-[#f7f5ee] p-4">
            <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
              Duration
            </span>

            <span className="mt-2 block font-serif text-xl text-[#082D19]">
              6 Days
            </span>
          </div>

          <div className="rounded-2xl bg-[#f7f5ee] p-4">
            <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
              Country
            </span>

            <span className="mt-2 block font-serif text-xl text-[#082D19]">
              Kenya
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

        {/* MAIN AMBOSELI IMAGE */}
        <div className="absolute inset-y-0 left-0 w-[72%] overflow-hidden rounded-[2.2rem] shadow-2xl">

          <img
            src="https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/94c3a4b806d0f86ab5564bc9b73e8186ea6941597536e2a51023021d29ef235f.jpg"
            alt="Elephants in Amboseli with Mount Kilimanjaro"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/80 via-transparent to-transparent" />

          <div className="absolute bottom-7 left-7">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
              Kenya
            </span>

            <p className="mt-2 font-serif text-2xl text-white">
              Amboseli National Park
            </p>
          </div>

        </div>


        {/* LAKE NAKURU IMAGE */}
        <div className="absolute right-0 top-10 h-52 w-[43%] overflow-hidden rounded-[1.75rem] border-8 border-white shadow-2xl sm:h-64">

          <img
            src={nakuru3}
            alt="Rhino at Lake Nakuru with flamingos"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-4 left-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">
              Lake Nakuru
            </span>
          </div>

        </div>


        {/* MASAI MARA IMAGE */}
        <div className="absolute bottom-8 right-0 h-52 w-[43%] overflow-hidden rounded-[1.75rem] border-8 border-white shadow-2xl sm:h-64">

          <img
            src="https://media.jambo.nl/original/galerij/Kenia-Wildlife-Masai-Mara-leeuwen-IS-520772736.jpg"
            alt="Lions in the Masai Mara"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-4 left-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">
              Masai Mara
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
          Three Iconic Destinations.
          <span className="block text-[#dba33a]">
            One Extraordinary Journey.
          </span>
        </h3>

      </div>


      <div className="mt-12 grid gap-6 md:grid-cols-3">

        {/* ====================================================
            AMBOSELI
        ==================================================== */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src="https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/94c3a4b806d0f86ab5564bc9b73e8186ea6941597536e2a51023021d29ef235f.jpg"
              alt="Elephants in Amboseli National Park"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Day 1–2
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Amboseli
              </h4>
            </div>

          </div>

          <div className="p-6">

            <p className="text-sm leading-7 text-gray-600">
              Enjoy game drives beneath the magnificent Mount Kilimanjaro
              and encounter Amboseli's famous elephant herds alongside
              lions, buffaloes, giraffes, zebras, wildebeest, waterbucks,
              hyenas and other wildlife.
            </p>

          </div>

        </div>


        {/* ====================================================
            LAKE NAKURU
        ==================================================== */}
        <div className="group overflow-hidden rounded-[2rem] bg-[#f7f5ee]">

          <div className="relative h-72 overflow-hidden">

            <img
              src={nakuru4}
              alt="Rhino and flamingos at Lake Nakuru"
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
              Discover one of Kenya's renowned rhino destinations and
              search for black and white rhinos, lions, leopards,
              buffaloes, giraffes, zebras and diverse birdlife around
              the scenic lake.
            </p>

          </div>

        </div>


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
                Day 4–6
              </span>

              <h4 className="mt-2 font-serif text-3xl text-white">
                Masai Mara
              </h4>
            </div>

          </div>

          <div className="p-6">

            <p className="text-sm leading-7 text-gray-600">
              Explore the legendary Masai Mara and search for lions,
              leopards, cheetahs, elephants, buffaloes, giraffes,
              zebras, wildebeest, hyenas and other plains wildlife.
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
          Your Safari,
          <span className="text-[#dba33a]">
            {" "}Day By Day.
          </span>
        </h3>

        <p className="mt-5 text-base leading-8 text-gray-600">
          A carefully planned six-day journey connecting three of Kenya's
          most celebrated wildlife destinations.
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
                Nairobi → Amboseli National Park
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Nairobi – Amboseli National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Your safari begins in Nairobi, where you will be picked up
                by a representative from Daffar Tours and Travel and driven
                to Amboseli National Park. Upon arrival, check in at your
                accommodation and enjoy lunch before heading out for an
                afternoon game drive. Amboseli is famous for its large
                elephant herds and spectacular views of Mount Kilimanjaro.
                During the game drive, look out for elephants, lions,
                buffaloes, giraffes, zebras, wildebeest, waterbucks,
                hyenas and other wildlife.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Ol Tukai Lodge
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
                Full Day Amboseli National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, enjoy a full day exploring Amboseli
                National Park with game drives across its diverse habitats.
                The park is particularly renowned for its elephants, while
                its open plains offer opportunities to encounter lions,
                buffaloes, giraffes, zebras, wildebeest, waterbucks,
                hyenas, jackals and Thomson's gazelles. Enjoy lunch before
                continuing your afternoon wildlife exploration.
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
              DAY 3
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              03
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Amboseli → Lake Nakuru
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Amboseli – Lake Nakuru National Park
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, depart Amboseli and travel towards Lake
                Nakuru National Park. Enjoy lunch before embarking on an
                afternoon game drive in the park. Lake Nakuru is renowned
                for its rhino population and diverse wildlife. Look out
                for black and white rhinos, lions, leopards, buffaloes,
                giraffes, waterbucks, zebras and other wildlife. The lake
                and surrounding areas also provide opportunities for bird
                viewing, including flamingos when conditions are suitable.
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
                Lake Nakuru → Masai Mara
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Lake Nakuru – Masai Mara National Reserve
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, depart Lake Nakuru and travel to the
                world-famous Masai Mara National Reserve. Upon arrival,
                check in at your accommodation and enjoy lunch before
                embarking on an afternoon game drive. Search for lions,
                leopards, cheetahs, elephants, buffaloes, giraffes,
                zebras, wildebeest, hyenas, jackals, waterbucks and
                Thomson's gazelles. Depending on the season, you may
                also witness the spectacular wildebeest migration.
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
              DAY 5
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              05
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Full Day Masai Mara
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Full Day Masai Mara National Reserve
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, enjoy a full day of game drives exploring
                the Masai Mara. Search for the reserve's famous predators
                and abundant wildlife, including lions, leopards, cheetahs,
                elephants, buffaloes, giraffes, zebras, wildebeest, hyenas,
                jackals, waterbucks and Thomson's gazelles. During migration
                season, you may have the opportunity to witness large herds
                of wildebeest moving across the plains and, when conditions
                are suitable, dramatic river crossings.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                A visit to a Maasai village can also provide an opportunity
                to learn about the traditions and way of life of the Maasai
                people.
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
              DAY 6
          ================================================== */}
          <div className="relative grid gap-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[90px_1fr] md:p-8">

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#dba33a]">
              06
            </div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                Masai Mara → Nairobi
              </span>

              <h4 className="mt-2 font-serif text-2xl text-[#082D19]">
                Masai Mara – Nairobi
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                After breakfast, enjoy a final morning game drive in the
                Masai Mara, providing one last opportunity to search for
                wildlife across the reserve. You may encounter lions,
                elephants, buffaloes, giraffes, zebras, wildebeest, hyenas,
                waterbucks, Thomson's gazelles and other wildlife before
                beginning your journey back to Nairobi.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Enjoy lunch during the journey before continuing to Nairobi.
                Upon arrival, you will be dropped off at your hotel,
                residence, or another agreed location, marking the end
                of your safari.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Breakfast & Lunch
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Drinking Water
                </span>

                <span className="rounded-full bg-[#f7f5ee] px-4 py-2 text-xs font-medium text-gray-600">
                  Safari Ends in Nairobi
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
          Your Safari Includes
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
          Ready For Africa?
        </span>

        <h3 className="mt-5 font-serif text-4xl text-white sm:text-5xl">
          Make This Safari
          <span className="block text-[#dba33a]">
            Your Next Adventure.
          </span>
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          Travel from the elephants of Amboseli to the rhinos of Lake Nakuru
          and the predator-rich plains of the Masai Mara in one extraordinary
          luxury safari through Kenya.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#dba33a] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Plan This Safari →
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