

//import React from "react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import kili1 from "../assets/kili1.jpg";
import kili2 from "../assets/kili2.jpg";
import kili3 from "../assets/kili3.jpg";
import kili4 from "../assets/kili4.jpg";

function MountKilimanjaro() {
  const highlights = [
    {
      number: "01",
      title: "Africa's Highest Peak",
      text: "Stand before Mount Kilimanjaro, Africa's highest mountain and one of the world's most iconic natural landmarks.",
    },
    {
      number: "02",
      title: "Kilimanjaro Climbing",
      text: "Take on an unforgettable mountain adventure through changing landscapes toward the summit of Uhuru Peak.",
    },
    {
      number: "03",
      title: "Amazing Landscapes",
      text: "Travel through lush forests, alpine moorlands, volcanic landscapes and breathtaking high-altitude scenery.",
    },
    {
      number: "04",
      title: "Local Culture",
      text: "Discover the communities, traditions and stories that surround one of Africa's most celebrated mountains.",
    },
  ];

  const experiences = [
    "Guided Kilimanjaro climbs",
    "Experienced mountain guides",
    "Scenic hiking experiences",
    "Multiple climbing routes",
    "Comfortable mountain camps",
    "Cultural experiences",
    "Professional mountain support",
    "Flexible trekking itineraries",
  ];

  const safariOptions = [
    "Private trekking experiences",
    "Professional mountain guides",
    "Flexible itineraries",
    "Scenic mountain hikes",
    "Comfortable camping arrangements",
    "Cultural experiences",
  ];

  const gallery = [
    {
      image: kili1,
      title: "Mount Kilimanjaro",
    },
    {
      image: kili2,
      title: "Mountain Adventure",
    },
    {
      image: kili3,
      title: "Kilimanjaro Landscapes",
    },
    {
      image: kili4,
      title: "African Summit",
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

      <section className="relative min-h-[70vh] max-h-[800px] overflow-hidden">

        <img
          src={kili1}
          alt="Mount Kilimanjaro"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

        <div className="absolute bottom-10 left-6 md:left-16 max-w-3xl text-white">

          <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
            Tanzania · Mount Kilimanjaro
          </span>

          <h1 className="mt-3 text-4xl md:text-6xl lg:text-7xl font-serif font-bold">
            Mount Kilimanjaro
          </h1>

          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Africa's highest mountain, breathtaking landscapes, unforgettable
            trekking adventures, and the journey toward Uhuru Peak.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
```jsx
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

```jsx
{/* =====================================================
    7-DAY KILIMANJARO ADVENTURE VIA LEMOSHO ROUTE
    PREMIUM ITINERARY SECTION
===================================================== */}

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
              src={kili2}
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
              src={kili3}
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
```

{/* ============================================================
    3-DAY BEST OF MOUNT KILIMANJARO VIEWS — LUXURY SAFARI
============================================================ */}
<section
  id="3-day-best-of-mount-kilimanjaro"
  className="relative scroll-mt-28 overflow-hidden bg-white py-20 lg:py-28"
>
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ========================================================
        HERO
    ======================================================== */}
    <div className="relative min-h-[560px] overflow-hidden rounded-[2rem]">

      <img
        src="/images/amboseli.jpg"
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
            Experience the breathtaking landscapes of Amboseli National Park,
            where sweeping savannahs, abundant wildlife, and spectacular views
            of Mount Kilimanjaro come together to create an unforgettable
            African adventure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              🐘 Elephant Country
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              🏔️ Kilimanjaro Views
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
            value: "Amboseli National Park",
          },
          {
            icon: "🏔️",
            label: "Highlight",
            value: "Mount Kilimanjaro Views",
          },
          {
            icon: "🏕️",
            label: "Accommodation",
            value: "Elerai Camp",
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
            🏔️
          </div>

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
              The Amboseli Experience
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Wildlife Beneath Africa's Highest Mountain
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Experience the breathtaking landscapes of Amboseli National Park
              on this three-day luxury safari, where sweeping savannahs,
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

            <div className="mt-7 rounded-2xl border-l-4 border-amber-500 bg-white p-5">

              <p className="text-sm leading-7 text-slate-600">
                <strong className="text-slate-900">
                  Safari highlights:
                </strong>{" "}
                Amboseli game drives, large elephant herds, Mount Kilimanjaro
                views, open savannahs, seasonal wetlands, acacia woodland,
                wildlife photography, and luxury camp accommodation.
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
        A carefully paced journey through Amboseli National Park, combining
        memorable wildlife encounters with some of the most spectacular
        mountain scenery in East Africa.
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
            Nairobi to Amboseli National Park
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Your adventure begins with an early morning departure from Nairobi
            as you travel south toward Amboseli National Park. Upon arrival in
            Amboseli, you’ll enter the park and begin your first game drive.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The park is famous for its spectacular backdrop of Mount
            Kilimanjaro and its thriving elephant population. As you explore
            the open savannah, keep an eye out for elephants, zebras,
            wildebeests, giraffes, buffaloes, antelopes, and, with some luck,
            lions and other predators.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            After your game drive, continue to Elerai Camp, where you’ll check
            in and settle into your luxurious surroundings. Enjoy a delicious
            dinner and a peaceful evening surrounded by the sights and sounds
            of the African wilderness.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">

            {[
              "Amboseli National Park",
              "First Game Drive",
              "Elephants",
              "Mount Kilimanjaro",
              "Zebras",
              "Giraffes",
              "Buffaloes",
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
                Amboseli National Park
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Elerai Camp
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
            Full-Day Amboseli National Park Experience
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            After breakfast, set out for a full day of exploration in Amboseli
            National Park. With Mount Kilimanjaro rising dramatically in the
            distance, you’ll traverse the park’s diverse landscapes, including
            open plains, seasonal wetlands, acacia woodland, and areas around
            the Amboseli swamps.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The park is particularly famous for its elephants, which can often
            be seen moving across the plains or gathering around the wetlands.
            You may also encounter lions, cheetahs, hyenas, giraffes, zebras,
            wildebeests, buffaloes, hippos, and numerous species of birds.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Enjoy a picnic lunch or return to camp for lunch, depending on the
            day’s game-drive schedule. The afternoon offers another opportunity
            for wildlife viewing as changing light creates beautiful
            photographic conditions.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            When weather conditions are clear, Mount Kilimanjaro may provide an
            unforgettable backdrop to your wildlife experience. Later, return
            to Elerai Camp for dinner and a relaxing evening.
          </p>


          {/* KILIMANJARO HIGHLIGHT */}
          <div className="mt-8 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-8">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                🏔️
              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  Signature Experience
                </p>

                <h4 className="mt-2 text-2xl font-extrabold">
                  Wildlife with Mount Kilimanjaro as Your Backdrop
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Explore Amboseli’s plains and wetlands while enjoying the
                  possibility of spectacular views of Mount Kilimanjaro,
                  creating exceptional opportunities for wildlife photography.
                </p>

              </div>

            </div>

          </div>


          <div className="mt-8 flex flex-wrap gap-2">

            {[
              "Elephants",
              "Lions",
              "Cheetahs",
              "Hyenas",
              "Giraffes",
              "Zebras",
              "Wildebeest",
              "Buffaloes",
              "Birdlife",
            ].map((animal) => (
              <span
                key={animal}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {animal}
              </span>
            ))}

          </div>


          <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Main Destination
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Amboseli National Park
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Accommodation
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                Elerai Camp
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
              Amboseli – Final Game Drive – Nairobi
            </h3>

          </div>

          <div className="p-7 sm:p-9">

            <p className="leading-8 text-slate-600">
              Wake up to the peaceful atmosphere of the Amboseli wilderness
              and enjoy breakfast at camp. Depending on your departure
              schedule, you’ll have an opportunity for a final morning game
              drive through the park.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The cooler morning hours are ideal for wildlife activity,
              offering one last chance to see elephants, giraffes, zebras,
              buffaloes, and other animals against the magnificent backdrop of
              Mount Kilimanjaro.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              After the game drive, begin your journey back toward Nairobi.
              Enjoy lunch along the way before continuing to Nairobi, where
              you’ll arrive in the afternoon or early evening.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Your safari concludes with memories of Amboseli’s extraordinary
              wildlife, open landscapes, and unforgettable mountain views.
            </p>


            {/* FINAL MOMENT */}
            <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-center text-white sm:p-9">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                Final Safari Moments
              </p>

              <p className="mt-3 text-2xl font-black sm:text-3xl">
                One Last Look at Kilimanjaro
              </p>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
                Enjoy a final morning wildlife experience before leaving
                Amboseli and beginning your journey back to Nairobi.
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
          icon: "🐘",
          title: "Elephant Country",
          text: "Experience Amboseli's famous elephant herds across the open plains.",
        },
        {
          icon: "🏔️",
          title: "Kilimanjaro Views",
          text: "Enjoy spectacular views of Mount Kilimanjaro when weather conditions are clear.",
        },
        {
          icon: "🌿",
          title: "Diverse Landscapes",
          text: "Explore savannahs, wetlands, acacia woodland, and the Amboseli swamps.",
        },
        {
          icon: "📸",
          title: "Photography",
          text: "Capture unforgettable wildlife moments against an iconic mountain backdrop.",
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
          Discover Amboseli
        </p>

        <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
          Wildlife. Wilderness. Kilimanjaro.
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Experience one of Kenya's most spectacular safari destinations with
          unforgettable wildlife encounters and breathtaking views of Mount
          Kilimanjaro.
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
    7-DAY MACHAME ROUTE — KILIMANJARO ITINERARY
============================================================ */}

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
          KILIMANJARO LANDSCAPE
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-28 bg-[#F7F4EA]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Experience Kilimanjaro
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">

              A Mountain Made For

              <span className="text-[#F39A08]">
                {" "}Adventure
              </span>

            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Follow the mountain trail through forests, moorlands and
              dramatic alpine landscapes toward the roof of Africa.
            </p>

          </div>


          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-6">

            {/* KILI 3 */}

            <div className="group relative h-[420px] lg:h-[600px] overflow-hidden rounded-[2rem] shadow-xl">

              <img
                src={kili3}
                alt="Mount Kilimanjaro landscape"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <span className="text-[#F39A08] text-xs font-bold uppercase tracking-[0.2em]">
                  Roof Of Africa
                </span>

                <h3 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-white">
                  A Journey Above The Clouds
                </h3>

              </div>

            </div>


            {/* CONTENT */}

            <div className="flex flex-col justify-center bg-[#0D4825] rounded-[2rem] p-8 sm:p-10 lg:p-12">

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                The Kilimanjaro Experience
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">

                Every Step

                <span className="block text-[#F39A08]">
                  Tells A Story
                </span>

              </h2>

              <p className="mt-6 text-white/65 leading-relaxed">
                Climbing Kilimanjaro is about more than reaching the
                summit. It is about discovering changing landscapes,
                challenging yourself and experiencing the mountain
                one unforgettable step at a time.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex gap-3">

                  <span className="text-[#F39A08]">
                    ✓
                  </span>

                  <p className="text-white/70 text-sm">
                    Spectacular mountain landscapes
                  </p>

                </div>

                <div className="flex gap-3">

                  <span className="text-[#F39A08]">
                    ✓
                  </span>

                  <p className="text-white/70 text-sm">
                    Diverse ecological zones
                  </p>

                </div>

                <div className="flex gap-3">

                  <span className="text-[#F39A08]">
                    ✓
                  </span>

                  <p className="text-white/70 text-sm">
                    Memorable sunrise and summit experiences
                  </p>

                </div>

              </div>

              <Link
                to="/contact"
                className="inline-flex self-start mt-8 bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
              >
                Plan Your Climb
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
                Why Visit Mount Kilimanjaro?
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">

                Every Step Can

                <span className="block text-[#F39A08]">
                  Become A Story
                </span>

              </h2>

              <p className="mt-6 text-white/65 leading-relaxed max-w-xl">
                Kilimanjaro combines physical adventure, spectacular
                scenery and an incredible sense of achievement into
                one of Africa's most memorable mountain experiences.
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
          EXPERIENCES
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* CONTENT */}

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                Mountain Experiences
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Discover The

                <span className="block text-[#F39A08]">
                  Mountain Adventure
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                From the first step on the trail to the final approach
                toward the summit, Kilimanjaro offers an experience
                filled with changing scenery, challenge and discovery.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-8">

                {experiences.map((experience) => (

                  <div
                    key={experience}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-[#F7F4EA] text-[#0D4825] font-semibold text-sm hover:bg-[#0D4825] hover:text-white transition-all duration-300"
                  >

                    <span className="text-[#F39A08]">
                      ✓
                    </span>

                    {experience}

                  </div>

                ))}

              </div>

            </div>


            {/* KILI 4 */}

            <div className="relative group">

              <img
                src={kili4}
                alt="Mount Kilimanjaro mountain adventure"
                className="w-full h-[400px] sm:h-[520px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/40 to-transparent opacity-70" />

              <div className="absolute bottom-6 right-6 bg-[#F39A08] text-[#0D4825] px-6 py-4 rounded-2xl shadow-xl">

                <p className="font-bold text-lg">
                  Reach Higher
                </p>

                <p className="text-xs mt-1">
                  Experience Kilimanjaro
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TREKKING PLANNING
      ====================================================== */}

      <section className="bg-[#F7F4EA] py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                Plan Your Adventure
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Your Mountain.

                <span className="block text-[#F39A08]">
                  Your Journey.
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Whether you are preparing for your first mountain
                adventure or looking for a new challenge, we can help
                create an experience around your interests, schedule
                and travel style.
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


            {/* KILI 2 */}

            <div className="relative group">

              <img
                src={kili2}
                alt="Kilimanjaro trekking landscape"
                className="w-full h-[400px] sm:h-[520px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg">

                <p className="text-[#0D4825] font-bold">
                  Mount Kilimanjaro
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  Africa's iconic mountain
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
              Mount Kilimanjaro
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">
              Explore Kilimanjaro
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
              A glimpse of the mountain landscapes, trekking experiences
              and unforgettable moments waiting for you on Kilimanjaro.
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
                    Kili {index + 1}
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
                {" "}Kilimanjaro Adventure
              </span>

            </h2>

            <p className="mt-5 text-white/65 leading-relaxed">
              A little preparation can make your mountain adventure
              safer, more comfortable and more memorable.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                🥾
              </span>

              <h3 className="mt-4 text-white font-bold">
                Good Footwear
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                Comfortable and suitable hiking footwear is essential
                for long days on the mountain trails.
              </p>

            </div>


            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                🎒
              </span>

              <h3 className="mt-4 text-white font-bold">
                Pack Smart
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                Pack practical layers and essential personal items
                for changing mountain conditions.
              </p>

            </div>


            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                💧
              </span>

              <h3 className="mt-4 text-white font-bold">
                Stay Hydrated
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                Staying properly hydrated is important throughout
                your trekking journey.
              </p>

            </div>


            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                ⛰
              </span>

              <h3 className="mt-4 text-white font-bold">
                Take Your Time
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                A steady pace and proper acclimatization can help
                make the mountain experience more enjoyable.
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

            Ready To Conquer

            <span className="block text-[#F39A08]">
              Mount Kilimanjaro?
            </span>

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/65 leading-relaxed">
            Let Daffar Tours & Travel help you turn your Kilimanjaro
            dream into an unforgettable mountain adventure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

            <Link
              to="/contact"
              className="bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Plan Your Kilimanjaro Trek
            </Link>

            <a
              href="https://wa.me/+254708711459"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-[#F39A08] text-white hover:text-[#F39A08] px-8 py-4 rounded-full font-bold transition-all duration-300"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

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
    </div>
  );
}

export default MountKilimanjaro;
