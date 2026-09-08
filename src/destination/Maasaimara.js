import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import mara1 from "../assets/mara1.jpg";
import mara2 from "../assets/mara2.jpg";
import mara3 from "../assets/mara3.jpg";
import mara4 from "../assets/mara4.jpg";

function Maasaimara() {
  const highlights = [
    {
      number: "01",
      title: "The Big Five",
      text: "Look for lions, elephants, leopards, buffalo and other incredible wildlife across the Mara ecosystem.",
    },
    {
      number: "02",
      title: "Great Migration",
      text: "Experience one of nature's greatest spectacles as vast herds move through the Mara ecosystem.",
    },
    {
      number: "03",
      title: "Mara River",
      text: "Discover the famous Mara River and the remarkable wildlife activity surrounding its waters.",
    },
    {
      number: "04",
      title: "Maasai Culture",
      text: "Meet local communities and discover the traditions, stories and heritage of the Maasai people.",
    },
  ];

  const wildlife = [
    "Lions",
    "Elephants",
    "Leopards",
    "Buffalo",
    "Cheetahs",
    "Giraffes",
    "Wildebeest",
    "Zebras",
  ];

  const safariOptions = [
    "Private safari experiences",
    "Professional safari guides",
    "Flexible itineraries",
    "Morning and afternoon game drives",
    "Comfortable safari vehicles",
    "Cultural experiences",
  ];

  const gallery = [
    {
      image: mara1,
      title: "Mara Savannah",
    },
    {
      image: mara2,
      title: "Wildlife Experience",
    },
    {
      image: mara3,
      title: "Endless Landscapes",
    },
    {
      image: mara4,
      title: "African Wildlife",
    },
  ];

useEffect(() => {
  if (window.location.hash) {
    const id = window.location.hash.substring(1);

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }
}, []);

  return (
    <div className="bg-[#F7F4EA] text-[#183020] overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      {/* =====================================================
    SIMPLE HERO
===================================================== */}

<section className="relative min-h-[70vh] max-h-[800px] overflow-hidden">

  <img
    src={mara1}
    alt="Maasai Mara"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

  <div className="absolute bottom-10 left-6 md:left-16 max-w-3xl text-white">

    <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
      Kenya · Maasai Mara
    </span>

    <h1 className="mt-3 text-4xl md:text-6xl lg:text-7xl font-serif font-bold">
      Maasai Mara
    </h1>

    <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
      Endless savannahs, incredible wildlife, the Great Migration,
      and unforgettable African safari experiences.
    </p>

  </div>

</section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* IMAGE */}

            <div className="relative group">

              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-3xl bg-[#F39A08]/15" />

              <img
                src={mara2}
                alt="Wildlife experience in Maasai Mara"
                className="relative w-full h-[380px] sm:h-[480px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute bottom-5 left-5 bg-[#0D4825]/95 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-xl">

                <p className="text-[#F39A08] text-sm font-bold uppercase tracking-wider">
                  Maasai Mara
                </p>

                <p className="text-white/70 text-xs mt-1">
                  Kenya's legendary safari destination
                </p>

              </div>

            </div>


            {/* CONTENT */}

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                About The Destination
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Where Africa's

                <span className="block text-[#F39A08]">
                  Wild Heart Lives
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                The Maasai Mara is one of Kenya's most celebrated
                safari destinations. Its open grasslands, rolling
                landscapes and abundant wildlife make it an exceptional
                place to experience Africa.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                From spectacular predator sightings to breathtaking
                landscapes and authentic cultural encounters, every
                journey through the Mara can create memories that
                last a lifetime.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="group p-5 rounded-2xl bg-[#F7F4EA] border border-[#0D4825]/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                  <p className="text-[#F39A08] text-2xl font-serif font-bold">
                    Wildlife
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Exceptional wildlife viewing
                  </p>

                </div>

                <div className="group p-5 rounded-2xl bg-[#F7F4EA] border border-[#0D4825]/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                  <p className="text-[#F39A08] text-2xl font-serif font-bold">
                    Culture
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Authentic Maasai experiences
                  </p>

                </div>

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
  className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 top-[35%] h-[30rem] w-[30rem] rounded-full bg-[#dba33a]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-[35%] h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-[#0b4224]/20 bg-[#0b4224]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0b4224]">
        Wildebeest Migration Safari
      </span>

      <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">
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

    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
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

    {/* ========================================================
        INTRODUCTION
    ======================================================== */}
    <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">

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
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-[#0b4224] p-8 text-white shadow-xl sm:p-10">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#dba33a]/10" />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dba33a]">
            Why You'll Love It
          </p>

          <h3 className="mt-4 font-serif text-3xl font-bold">
            Two Nights in the Mara
          </h3>

          <p className="mt-5 leading-8 text-white/75">
            Staying two nights at &Beyond Bateleur Camp gives you more
            time to explore the reserve and follow the movement of wildlife
            without feeling rushed.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Witness the Great Wildebeest Migration",
              "Enjoy morning and afternoon game drives",
              "Search for the Big Five",
              "Experience the spectacular Masai Mara landscape",
              "Optional hot air balloon safari",
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

    {/* ========================================================
        ITINERARY TIMELINE
    ======================================================== */}
    <div className="mt-20">

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

        <div className="space-y-8">

          {/* DAY 1 */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              01
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Day 1
                  </span>

                  <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                    Nairobi – Masai Mara National Reserve
                  </h4>
                </div>

                <span className="w-fit rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-semibold text-[#0b4224]">
                  Arrival & Game Drive
                </span>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Your safari adventure begins in Nairobi, where a representative
                from Daffar Tours and Travel will warmly welcome you. From here,
                you will transfer by road to the Masai Mara National Reserve,
                one of the world's most iconic safari destinations.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                After check-in and lunch at &Beyond Bateleur Camp, you will
                enjoy your first thrilling afternoon game drive, encountering
                elephants, buffaloes, lions, leopards, zebras, giraffes and
                more. The Mara is also home to the Big Five and countless
                bird species.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

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

          {/* DAY 2 */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              02
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Day 2
                  </span>

                  <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                    Full Day in the Masai Mara
                  </h4>
                </div>

                <span className="w-fit rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-semibold text-[#0b4224]">
                  Full-Day Safari
                </span>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Wake up early for a sunrise game drive in the Masai Mara,
                where the golden morning light offers the perfect backdrop
                for photography. Witness predators on the hunt and herds
                of wildebeest and zebras grazing across the savanna.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                An optional hot air balloon safari provides breathtaking
                aerial views of the migration followed by a bush breakfast.
                In the afternoon, continue exploring the Mara, keeping an
                eye out for rhinos, hyenas, jackals and cheetahs. The day
                concludes with a relaxing evening back at your luxury camp.
              </p>

              {/* OPTIONAL ACTIVITY */}
              <div className="mt-6 rounded-2xl border border-[#dba33a]/20 bg-[#fffaf0] p-5">

                <div className="flex items-start gap-3">
                  <span className="text-xl">🎈</span>

                  <div>
                    <p className="font-bold text-[#0b4224]">
                      Optional Hot Air Balloon Safari
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Soar above the Masai Mara at sunrise for a spectacular
                      aerial perspective of the wildlife and migration.
                    </p>

                    <p className="mt-2 text-sm font-bold text-[#dba33a]">
                      USD 500 per person
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

          {/* DAY 3 */}
          <div className="relative sm:pl-20">

            <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#0b4224] text-lg font-bold text-white shadow-lg sm:flex">
              03
            </div>

            <div className="rounded-3xl border border-[#0b4224]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dba33a]">
                    Day 3
                  </span>

                  <h4 className="mt-2 font-serif text-2xl font-bold text-[#0b4224]">
                    Masai Mara – Nairobi
                  </h4>
                </div>

                <span className="w-fit rounded-full bg-[#0b4224]/5 px-4 py-2 text-xs font-semibold text-[#0b4224]">
                  Safari Ends
                </span>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                After breakfast, visit a Maasai village for an authentic
                cultural experience before beginning your scenic return
                journey to Nairobi.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The safari concludes with unforgettable memories of the
                majestic wildebeest migration and the wildlife wonders
                of the Masai Mara.
              </p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

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

    {/* ========================================================
        INCLUDED / EXCLUDED
    ======================================================== */}
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
              <span>Guided Game Drive</span>
              <span className="font-bold text-[#dba33a]">
                USD 120 / person
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* ========================================================
        FINAL CTA
    ======================================================== */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#0b4224] px-7 py-12 text-center shadow-2xl sm:px-12 sm:py-16">

      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/5" />
      <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#dba33a]/10" />

      <div className="relative mx-auto max-w-3xl">

        <span className="text-4xl">🦓</span>

        <h3 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Witness the Great Wildebeest Migration
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
        src="/images/masaimara.jpg"
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

            

          </div>

        </div>
      </div>
    </div>

  </div>
</section>

<section
  id="masai-mara-nakuru-naivasha-5-day"
  className="relative overflow-hidden bg-white py-20 lg:py-28"
>
  {/* ========================================================
      BACKGROUND DECORATION
  ======================================================== */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Kenya Luxury Safari
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        5-Day Masai Mara, Lake Nakuru
        <span className="mt-2 block text-amber-600">
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


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
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
          🦁
        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            A Journey Through Kenya's Iconic Wildlife Destinations
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            This five-day luxury safari combines the spectacular wildlife of
            the Masai Mara with the scenic landscapes of Lake Nakuru and the
            peaceful surroundings of Lake Naivasha. Each destination offers
            a unique safari experience, from the open savannahs of the Mara
            to the wildlife-rich shores of Lake Nakuru and the tranquil
            waters of Lake Naivasha.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Enjoy comfortable accommodation, professionally guided game
            drives, delicious meals, and carefully planned transfers as you
            explore some of Kenya's most memorable landscapes and wildlife
            destinations.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-white p-5">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-slate-900">
                Safari highlight:
              </strong>{" "}
              Explore the Masai Mara, Lake Nakuru National Park, and Lake
              Naivasha while searching for iconic African wildlife including
              lions, elephants, buffaloes, leopards, rhinos, giraffes,
              zebras, wildebeest, hippos, and abundant birdlife.
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
        Your Safari Journey
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Follow your five-day journey from Nairobi through the Masai Mara,
        Lake Nakuru, and Lake Naivasha before returning to Nairobi.
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
              Nairobi → Masai Mara
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Nairobi – Masai Mara National Reserve
          </h4>

          <p className="mt-5 leading-8 text-slate-600">
            Your safari begins with a drive from Nairobi to the famous Masai
            Mara National Reserve. Upon arrival, you’ll settle into the camp
            before heading out for an afternoon game drive.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The Masai Mara is renowned for its abundant wildlife. You may
            encounter lions, elephants, buffaloes, leopards, cheetahs,
            giraffes, zebras, wildebeest, and various antelope species as
            you explore the open savannah. Return to the camp in the evening
            for dinner and a relaxing overnight stay.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Alama Camp Mara
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
            Full-Day Masai Mara Wildlife Experience
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Full-Day Game Drives
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Big Five Territory
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, set out for a full day of game drives across the
            Masai Mara. Explore the reserve in search of the Big Five: lion,
            elephant, buffalo, leopard, and rhino.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            You may also encounter cheetahs, giraffes, zebras, wildebeest,
            gazelles, hippos, hyenas, and a variety of birdlife. Enjoy lunch
            during the safari before continuing your wildlife exploration
            through the afternoon.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Alama Camp Mara
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
            Masai Mara – Lake Nakuru National Park
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Wildlife & Bird Viewing
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Rhino Country
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, depart the Masai Mara and travel towards Lake
            Nakuru National Park. Upon arrival, enjoy a game drive through
            the park, known for its diverse wildlife and beautiful landscapes.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Keep an eye out for rhinos, lions, leopards, buffaloes, giraffes,
            zebras, waterbucks, and other wildlife. Lake Nakuru is also home
            to numerous bird species, making it an excellent destination for
            wildlife and bird viewing.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Sarova Lion Hill Game Lodge
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
            Lake Nakuru – Lake Naivasha
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Scenic Lake Experience
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Relaxation
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, enjoy your final moments around Lake Nakuru
            before continuing to Lake Naivasha. On arrival, check in at the
            lodge and enjoy lunch.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The afternoon offers time to relax and take in the peaceful
            surroundings of Lake Naivasha. The lake and its surroundings are
            home to hippos, giraffes, zebras, buffaloes, waterbirds, and
            other wildlife. Enjoy the tranquil scenery before returning to
            the lodge for dinner.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Enashipai Resort & Spa
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
          DAY 5
      ====================================================== */}
      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Final Day
            </span>

            <span className="text-sm font-semibold text-amber-700">
              Return to Nairobi
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Lake Naivasha – Nairobi
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              Final Morning
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              Safari Ends in Nairobi
            </span>

          </div>

          <p className="mt-6 leading-8 text-slate-600">
            After breakfast, enjoy your final morning at Lake Naivasha before
            beginning your journey back to Nairobi. As you travel back to the
            capital, take in the changing landscapes and reflect on the
            memorable wildlife experiences from the Masai Mara, Lake Nakuru,
            and Lake Naivasha.
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Safari Highlights
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              MASAI MARA • LAKE NAKURU • LAKE NAIVASHA
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Five unforgettable days of wildlife, landscapes, luxury
              accommodation, and authentic Kenyan safari experiences.
            </p>

          </div>

          <p className="leading-8 text-slate-600">
            Arrive in Nairobi later in the day, marking the end of your
            5-Day Masai Mara, Lake Nakuru & Lake Naivasha Luxury Safari.
          </p>

          <div className="mt-7 grid gap-3 border-t border-amber-200 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                None – Safari Ends
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
            "Visa fees",
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

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Your Kenyan Safari Adventure
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Explore Kenya?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Discover the wildlife-rich Masai Mara, the beautiful landscapes of
          Lake Nakuru, and the peaceful waters of Lake Naivasha on a carefully
          planned luxury safari with professional guides and comfortable
          accommodation.
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
  className="relative overflow-hidden bg-white py-20 lg:py-28"
>
  {/* ========================================================
      BACKGROUND DECORATION
  ======================================================== */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        SECTION HEADER
    ======================================================== */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
        Kenya Luxury Safari
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        5-Day Masai Mara, Lake Nakuru
        <span className="mt-2 block text-amber-600">
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


    {/* ========================================================
        QUICK FACTS
    ======================================================== */}
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
          🦁
        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            A Journey Through Kenya's Iconic Wildlife Destinations
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            This five-day luxury safari combines the spectacular wildlife of
            the Masai Mara with the scenic landscapes of Lake Nakuru and the
            peaceful surroundings of Lake Naivasha. Each destination offers
            a unique safari experience, from the open savannahs of the Mara
            to the wildlife-rich shores of Lake Nakuru and the tranquil
            waters of Lake Naivasha.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Enjoy comfortable accommodation, professionally guided game
            drives, delicious meals, and carefully planned transfers as you
            explore some of Kenya's most memorable landscapes and wildlife
            destinations.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-amber-500 bg-white p-5">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-slate-900">
                Safari highlight:
              </strong>{" "}
              Explore the Masai Mara, Lake Nakuru National Park, and Lake
              Naivasha while searching for iconic African wildlife including
              lions, elephants, buffaloes, leopards, rhinos, giraffes,
              zebras, wildebeest, hippos, and abundant birdlife.
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
        Your Safari Journey
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Day-by-Day Itinerary
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Follow your five-day journey from Nairobi through the Masai Mara,
        Lake Nakuru, and Lake Naivasha before returning to Nairobi.
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
              Nairobi → Masai Mara
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900">
            Nairobi – Masai Mara National Reserve
          </h4>

          <p className="mt-5 leading-8 text-slate-600">
            Your safari begins with a drive from Nairobi to the famous Masai
            Mara National Reserve. Upon arrival, you’ll settle into the camp
            before heading out for an afternoon game drive.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The Masai Mara is renowned for its abundant wildlife. You may
            encounter lions, elephants, buffaloes, leopards, cheetahs,
            giraffes, zebras, wildebeest, and various antelope species as
            you explore the open savannah. Return to the camp in the evening
            for dinner and a relaxing overnight stay.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Alama Camp Mara
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
            Full-Day Masai Mara Wildlife Experience
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Full-Day Game Drives
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Big Five Territory
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, set out for a full day of game drives across the
            Masai Mara. Explore the reserve in search of the Big Five: lion,
            elephant, buffalo, leopard, and rhino.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            You may also encounter cheetahs, giraffes, zebras, wildebeest,
            gazelles, hippos, hyenas, and a variety of birdlife. Enjoy lunch
            during the safari before continuing your wildlife exploration
            through the afternoon.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Alama Camp Mara
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
            Masai Mara – Lake Nakuru National Park
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Wildlife & Bird Viewing
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Rhino Country
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, depart the Masai Mara and travel towards Lake
            Nakuru National Park. Upon arrival, enjoy a game drive through
            the park, known for its diverse wildlife and beautiful landscapes.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Keep an eye out for rhinos, lions, leopards, buffaloes, giraffes,
            zebras, waterbucks, and other wildlife. Lake Nakuru is also home
            to numerous bird species, making it an excellent destination for
            wildlife and bird viewing.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Sarova Lion Hill Game Lodge
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
            Lake Nakuru – Lake Naivasha
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Scenic Lake Experience
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Relaxation
            </span>

          </div>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, enjoy your final moments around Lake Nakuru
            before continuing to Lake Naivasha. On arrival, check in at the
            lodge and enjoy lunch.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The afternoon offers time to relax and take in the peaceful
            surroundings of Lake Naivasha. The lake and its surroundings are
            home to hippos, giraffes, zebras, buffaloes, waterbirds, and
            other wildlife. Enjoy the tranquil scenery before returning to
            the lodge for dinner.
          </p>

          <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Enashipai Resort & Spa
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
          DAY 5
      ====================================================== */}
      <div className="relative md:pl-16">

        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow-lg md:flex">
          05
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 shadow-sm transition duration-300 hover:shadow-xl sm:p-9">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Final Day
            </span>

            <span className="text-sm font-semibold text-amber-700">
              Return to Nairobi
            </span>

          </div>

          <h4 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Lake Naivasha – Nairobi
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              Final Morning
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              Safari Ends in Nairobi
            </span>

          </div>

          <p className="mt-6 leading-8 text-slate-600">
            After breakfast, enjoy your final morning at Lake Naivasha before
            beginning your journey back to Nairobi. As you travel back to the
            capital, take in the changing landscapes and reflect on the
            memorable wildlife experiences from the Masai Mara, Lake Nakuru,
            and Lake Naivasha.
          </p>

          <div className="my-8 rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Safari Highlights
            </p>

            <p className="mt-3 text-2xl font-extrabold">
              MASAI MARA • LAKE NAKURU • LAKE NAIVASHA
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Five unforgettable days of wildlife, landscapes, luxury
              accommodation, and authentic Kenyan safari experiences.
            </p>

          </div>

          <p className="leading-8 text-slate-600">
            Arrive in Nairobi later in the day, marking the end of your
            5-Day Masai Mara, Lake Nakuru & Lake Naivasha Luxury Safari.
          </p>

          <div className="mt-7 grid gap-3 border-t border-amber-200 pt-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                None – Safari Ends
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
            "Visa fees",
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

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          Your Kenyan Safari Adventure
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Explore Kenya?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Discover the wildlife-rich Masai Mara, the beautiful landscapes of
          Lake Nakuru, and the peaceful waters of Lake Naivasha on a carefully
          planned luxury safari with professional guides and comfortable
          accommodation.
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
        src="/images/masaimara.jpg"
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

      <section className="bg-[#0D4825] py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                Why Visit Maasai Mara?
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">

                Every Drive Can

                <span className="block text-[#F39A08]">
                  Become A Story
                </span>

              </h2>

              <p className="mt-6 text-white/65 leading-relaxed max-w-xl">
                The Mara combines remarkable wildlife, spectacular
                landscapes and cultural experiences into one of
                Africa's most memorable safari destinations.
              </p>

              <Link
                to="/contact"
                className="inline-flex mt-8 bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
              >
                Start Planning
              </Link>

            </div>


            <div className="space-y-4">

              {highlights.map((item) => (

                <div
                  key={item.number}
                  className="group flex gap-5 p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#F39A08]/30 transition-all duration-300"
                >

                  <div className="flex-shrink-0 w-11 h-11 rounded-full border border-[#F39A08]/40 bg-[#F39A08]/10 flex items-center justify-center text-[#F39A08] text-xs font-bold group-hover:bg-[#F39A08] group-hover:text-[#0D4825] transition-all duration-300">
                    {item.number}
                  </div>

                  <div>

                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-white/55 text-sm leading-relaxed">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WILDLIFE
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* CONTENT */}

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                Wildlife Encounters
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Meet Africa's

                <span className="block text-[#F39A08]">
                  Incredible Wildlife
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                The Maasai Mara is home to an extraordinary variety
                of wildlife. Every game drive brings the possibility
                of discovering something new.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-8">

                {wildlife.map((animal) => (

                  <div
                    key={animal}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-[#F7F4EA] text-[#0D4825] font-semibold text-sm hover:bg-[#0D4825] hover:text-white transition-all duration-300"
                  >

                    <span className="text-[#F39A08]">
                      ✓
                    </span>

                    {animal}

                  </div>

                ))}

              </div>

            </div>


            {/* MARA 4 */}

            <div className="relative group">

              <img
                src={mara4}
                alt="Wildlife in Maasai Mara"
                className="w-full h-[400px] sm:h-[520px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/40 to-transparent opacity-70" />

              <div className="absolute bottom-6 right-6 bg-[#F39A08] text-[#0D4825] px-6 py-4 rounded-2xl shadow-xl">

                <p className="font-bold text-lg">
                  Wild & Free
                </p>

                <p className="text-xs mt-1">
                  Experience Africa
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SAFARI PLANNING
      ====================================================== */}

      <section className="bg-[#F7F4EA] py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                Plan Your Safari
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Your Mara.

                <span className="block text-[#F39A08]">
                  Your Way.
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Whether you are planning a short safari or a longer
                East African adventure, we can help create an itinerary
                around your interests, travel style and schedule.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">

                {safariOptions.map((option) => (

                  <div
                    key={option}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >

                    <span className="w-6 h-6 flex-shrink-0 rounded-full bg-[#F39A08]/15 text-[#F39A08] flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>

                    {option}

                  </div>

                ))}

              </div>

              

            </div>


            {/* MARA 2 */}

            <div className="relative group">

              <img
                src={mara2}
                alt="Maasai Mara safari landscape"
                className="w-full h-[400px] sm:h-[520px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg">

                <p className="text-[#0D4825] font-bold">
                  Maasai Mara
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  Kenya's iconic safari destination
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE GALLERY
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center mb-10">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Maasai Mara
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">
              Explore The Mara
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
              A glimpse of the landscapes, wildlife and unforgettable
              moments waiting for you in the Maasai Mara.
            </p>

          </div>


          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

            {gallery.map((item, index) => (

              <div
                key={item.title}
                className="group relative h-52 sm:h-64 overflow-hidden rounded-2xl"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-500" />

                <div className="absolute bottom-4 left-4 right-4">

                  <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                    Mara {index + 1}
                  </span>

                  <p className="mt-1 text-white font-semibold text-sm">
                    {item.title}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


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
    SIMPLE FOOTER
===================================================== */}
{/* =====================================================
    SIMPLE FOOTER
===================================================== */}

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
            <a
              href="https://wa.me/+254708164662"
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
    </div>

  );
}

export default Maasaimara;