import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import diani1 from "../assets/diani1.jpg";
import diani2 from "../assets/diani2.jpg";
import diani4 from "../assets/diani4.jpg";
import diani5 from "../assets/diani5.jpg";

import watamu1 from "../assets/watamu1.jpg";
import watamu2 from "../assets/watamu2.jpg";
import watamu3 from "../assets/watamu3.jpg";



function Diani() {
  const highlights = [
    {
      number: "01",
      title: "White-Sand Beaches",
      text: "Relax along Diani's famous white-sand beaches and enjoy the warm turquoise waters of the Indian Ocean.",
    },
    {
      number: "02",
      title: "Indian Ocean",
      text: "Discover beautiful coastal scenery, crystal-clear waters, coral reefs and unforgettable ocean experiences.",
    },
    {
      number: "03",
      title: "Marine Adventures",
      text: "Enjoy snorkeling, diving, swimming, boat trips and other exciting experiences along Kenya's tropical coast.",
    },
    {
      number: "04",
      title: "Coastal Culture",
      text: "Experience the warmth of the Kenyan coast through local communities, Swahili traditions, cuisine and history.",
    },
  ];

  const experiences = [
    "Beach relaxation",
    "Snorkeling and diving",
    "Dhow boat cruises",
    "Ocean adventures",
    "Kitesurfing",
    "Swahili cultural experiences",
    "Seafood dining",
    "Coastal excursions",
  ];

  const tripOptions = [
    "Private beach experiences",
    "Professional local guides",
    "Flexible itineraries",
    "Beach and cultural excursions",
    "Comfortable transfers",
    "Honeymoon experiences",
  ];

  const gallery = [
    {
      image: diani1,
      title: "Diani Beach",
    },
    {
      image: diani2,
      title: "Tropical Coast",
    },
    {
      image: diani4,
      title: "Indian Ocean",
    },
    {
      image: diani5,
      title: "Coastal Escape",
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
          src={diani1}
          alt="Diani Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

        <div className="absolute bottom-10 left-6 md:left-16 max-w-3xl text-white">

          <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
            Kenya · Diani Beach
          </span>

          <h1 className="mt-3 text-4xl md:text-6xl lg:text-7xl font-serif font-bold">
            Diani Beach
          </h1>

          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            White-sand beaches, turquoise waters, tropical landscapes
            and unforgettable coastal experiences along the Kenyan coast.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
```jsx
{/* ============================================================
    DIANI BEACH
============================================================ */}
<section className="bg-white py-16 sm:py-20 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

      {/* ======================================================
          IMAGE
      ====================================================== */}
      <div className="relative group">

        <div className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-[#F39A08]/15" />

        <img
          src={diani2}
          alt="Diani Beach"
          className="relative h-[380px] w-full rounded-[2rem] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] sm:h-[480px]"
        />

        <div className="absolute bottom-5 left-5 rounded-2xl bg-[#0D4825]/95 px-6 py-4 text-white shadow-xl backdrop-blur-md">

          <p className="text-sm font-bold uppercase tracking-wider text-[#F39A08]">
            Diani Beach
          </p>

          <p className="mt-1 text-xs text-white/70">
            Kenya’s coastal paradise
          </p>

        </div>

      </div>


      {/* ======================================================
          CONTENT
      ====================================================== */}
      <div>

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F39A08]">
          About The Destination
        </span>

        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl lg:text-5xl">

          Diani Beach

          <span className="block text-[#F39A08]">
            Kenya’s Coastal Paradise
          </span>

        </h2>

        <div className="mt-7 space-y-5 text-gray-600">

          <p className="leading-relaxed">
            Stretching along Kenya’s enchanting south coast, Diani Beach is a
            breathtaking blend of natural beauty and laid-back luxury. Famous
            for its powdery white sands that stretch over 17 kilometers and
            warm, crystal-clear waters of the Indian Ocean, Diani has earned
            its place among Africa’s top beach destinations, ideal for both
            relaxation and adventure. Towering palm trees sway gently above
            boutique hotels and beach resorts that line the coast, offering
            everything from intimate hideaways to vibrant beachfront lounges.
            The calm, shallow waters create perfect conditions for swimming,
            snorkeling, and stand-up paddleboarding, while the coral reefs just
            offshore teem with colorful marine life, captivating divers and
            snorkelers alike.
          </p>

          <p className="leading-relaxed">
            For thrill-seekers, Diani is a haven for kite surfing thanks to
            steady coastal winds, while deep-sea fishing excursions and dhow
            sailing trips invite guests to discover the ocean beyond. Nature
            lovers can explore nearby Shimba Hills National Reserve, where
            coastal rainforest meets rolling savannah, or take guided walks
            through sacred Kaya forests steeped in Swahili history and local
            legend.
          </p>

          <p className="leading-relaxed">
            Diani’s appeal extends beyond the shore. Its coastal culture,
            infused with Swahili charm, offers vibrant craft markets, fresh
            seafood dining, and lively beach bars where the evenings come alive
            with music and dancing. Whether you’re strolling barefoot along
            sunlit sands at dawn, enjoying a sunset dhow cruise, or unwinding
            under a palm thatched canopy, Diani promises moments of pure
            escape.
          </p>

          <p className="leading-relaxed">
            With its blend of adventure, serenity, and coastal charm, Diani
            Beach is more than just a destination, it’s a timeless invitation
            to slow down, explore, and savor the magic of Kenya’s Indian
            Ocean coastline.
          </p>

        </div>


        {/* ======================================================
            HIGHLIGHTS
        ====================================================== */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2">

          <div className="group rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Beaches
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Powder-soft sands & turquoise waters
            </p>

          </div>

          <div className="group rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Adventure
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Kite surfing, diving & dhow sailing
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
```




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



      {/* =====================================================
          DIANI LANDSCAPE
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-28 bg-[#F7F4EA]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Experience Diani
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">

              A Coast Made For

              <span className="text-[#F39A08]">
                {" "}Discovery
              </span>

            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Discover beautiful beaches, warm ocean waters, tropical
              landscapes and the vibrant character of Kenya's coast.
            </p>

          </div>


          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-6">

            {/* DIANI 4 */}

            <div className="group relative h-[420px] lg:h-[600px] overflow-hidden rounded-[2rem] shadow-xl">

              <img
                src={diani4}
                alt="Diani Beach landscape"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <span className="text-[#F39A08] text-xs font-bold uppercase tracking-[0.2em]">
                  Indian Ocean Escape
                </span>

                <h3 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-white">
                  A Tropical Paradise Made For Adventure
                </h3>

              </div>

            </div>


            {/* CONTENT */}

            <div className="flex flex-col justify-center bg-[#0D4825] rounded-[2rem] p-8 sm:p-10 lg:p-12">

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                The Diani Experience
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">

                Every Moment

                <span className="block text-[#F39A08]">
                  Tells A Story
                </span>

              </h2>

              <p className="mt-6 text-white/65 leading-relaxed">
                Diani is more than a beach destination. Explore the ocean,
                discover coastal traditions, enjoy fresh seafood and relax
                beneath the palms while the Indian Ocean stretches before you.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex gap-3">
                  <span className="text-[#F39A08]">✓</span>

                  <p className="text-white/70 text-sm">
                    Beautiful white-sand beaches
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#F39A08]">✓</span>

                  <p className="text-white/70 text-sm">
                    Exciting marine adventures
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#F39A08]">✓</span>

                  <p className="text-white/70 text-sm">
                    Unforgettable coastal sunsets
                  </p>
                </div>

              </div>

              <Link
                to="/contact"
                className="inline-flex self-start mt-8 bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
              >
                Plan Your Diani Trip
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
                Why Visit Diani?
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">

                Every Day Can

                <span className="block text-[#F39A08]">
                  Become A Memory
                </span>

              </h2>

              <p className="mt-6 text-white/65 leading-relaxed max-w-xl">
                Diani combines spectacular beaches, marine adventures,
                coastal culture and tropical scenery into one of Kenya's
                most memorable holiday destinations.
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
                Coastal Experiences
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Discover Diani's

                <span className="block text-[#F39A08]">
                  Many Experiences
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Whether you want to relax beside the ocean, explore
                beneath the water or experience the culture of the
                Kenyan coast, Diani offers something for every traveler.
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


            {/* DIANI 5 */}

            <div className="relative group">

              <img
                src={diani5}
                alt="Diani coastal experience"
                className="w-full h-[400px] sm:h-[520px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/40 to-transparent opacity-70" />

              <div className="absolute bottom-6 right-6 bg-[#F39A08] text-[#0D4825] px-6 py-4 rounded-2xl shadow-xl">

                <p className="font-bold text-lg">
                  Coastal Life
                </p>

                <p className="text-xs mt-1">
                  Experience Diani
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRIP PLANNING
      ====================================================== */}

      <section className="bg-[#F7F4EA] py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                Plan Your Coastal Escape
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Your Diani.

                <span className="block text-[#F39A08]">
                  Your Way.
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Whether you are planning a relaxing beach holiday,
                honeymoon or coastal adventure, we can help create
                an itinerary around your interests and schedule.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">

                {tripOptions.map((option) => (

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


            {/* DIANI 1 */}

            <div className="relative group">

              <img
                src={diani1}
                alt="Diani Beach"
                className="w-full h-[400px] sm:h-[520px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg">

                <p className="text-[#0D4825] font-bold">
                  Diani Beach
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  Kenya's tropical coast
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
              Diani Beach
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">
              Explore Diani
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
              A glimpse of the beaches, ocean landscapes, coastal culture
              and unforgettable moments waiting for you in Diani.
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
                    Diani {index + 1}
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
                {" "}Diani Adventure
              </span>

            </h2>

            <p className="mt-5 text-white/65 leading-relaxed">
              A little preparation can make your coastal holiday more
              comfortable, enjoyable and memorable.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                ☀
              </span>

              <h3 className="mt-4 text-white font-bold">
                Enjoy The Sun
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                Protect yourself from the tropical sun and stay comfortable
                while exploring the Kenyan coast.
              </p>

            </div>


            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#F39A08]/40 transition-all duration-300">

              <span className="text-[#F39A08] text-2xl">
                🌊
              </span>

              <h3 className="mt-4 text-white font-bold">
                Explore The Ocean
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                Enjoy swimming, snorkeling, diving and other unforgettable
                marine experiences.
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
                Capture beautiful beaches, ocean views, coastal life
                and unforgettable sunsets.
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
                Respect local communities, marine life, beaches and
                the natural environment throughout your journey.
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
            Your Kenyan Coast Adventure
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">

            Ready To Discover

            <span className="block text-[#F39A08]">
              Diani Beach?
            </span>

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/65 leading-relaxed">
            Let Daffar Tours & Travel help you turn your Diani dream
            into an unforgettable coastal experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

            <Link
              to="/contact"
              className="bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Plan Your Diani Trip
            </Link>

            

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
    </div>
  );
}

export default Diani;