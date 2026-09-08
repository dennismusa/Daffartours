/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import zanzibar1 from "../assets/zanzibar1.jpg";
import zanzibar2 from "../assets/zanzibar2.jpg";
import zanzibar3 from "../assets/zanzibar3.jpg";
import zanzibar4 from "../assets/zanzibar4.jpg";

function Zanzibar() {
  // eslint-disable-next-line no-unused-vars
  const highlights = [
    {
      number: "01",
      title: "Pristine Beaches",
      text: "Relax on Zanzibar's beautiful white-sand beaches and enjoy the warm turquoise waters of the Indian Ocean.",
    },
    {
      number: "02",
      title: "Stone Town",
      text: "Explore the historic streets, architecture, markets and rich cultural heritage of Stone Town.",
    },
    {
      number: "03",
      title: "Spice Island",
      text: "Discover Zanzibar's famous spice plantations and learn about the island's centuries-old spice trade.",
    },
    {
      number: "04",
      title: "Ocean Adventures",
      text: "Experience snorkeling, diving, dhow cruises and unforgettable encounters beneath the Indian Ocean.",
    },
  ];

  const experiences = [
    "Beach relaxation",
    "Stone Town tours",
    "Spice plantation visits",
    "Snorkeling and diving",
    "Sunset dhow cruises",
    "Local cultural experiences",
    "Seafood dining",
    "Island excursions",
  ];

  const tripOptions = [
    "Private island experiences",
    "Professional local guides",
    "Flexible itineraries",
    "Beach and cultural excursions",
    "Comfortable transfers",
    "Honeymoon experiences",
  ];

  const gallery = [
    {
      image: zanzibar1,
      title: "Zanzibar Beaches",
    },
    {
      image: zanzibar2,
      title: "Island Escape",
    },
    {
      image: zanzibar3,
      title: "Indian Ocean",
    },
    {
      image: zanzibar4,
      title: "Zanzibar Culture",
    },
  ];

  const itinerary = [
    {
      day: "01",
      title: "Welcome to the Spice Island",
      destination: "Zanzibar Island · Tanzania Coastline",
      accommodation: "Luxury stay at Kwanza Resort – Kizimkazi",
      meals: "Lunch & Dinner",
      image: zanzibar1,
      description: (
        <>
          As your flight approaches, Zanzibar’s turquoise shoreline shimmers
          below, like a precious gem floating in the ocean. Stepping off the
          plane, you're met with the warm embrace of sea air laced with the
          unmistakable scent of cloves — an aromatic reminder of the island’s
          rich spice heritage and trade history.
          <br />
          <br />
          From this first moment, you’re drawn into a captivating cultural
          blend where African, Arab, and European influences harmoniously
          coexist.
        </>
      ),
    },
    {
      day: "02",
      title: "Historic Journey Through Stone Town",
      destination: "Stone Town, Zanzibar",
      accommodation: "Luxury stay at Kwanza Resort – Kizimkazi",
      meals: "Breakfast, Lunch & Dinner",
      image: zanzibar2,
      description: (
        <>
          Your morning begins with an immersive walking tour of Stone Town,
          the historical heartbeat of Zanzibar. Wind through narrow streets
          flanked by coral-stone houses, local markets bursting with life, and
          grand wooden doors that speak to a bygone era.
          <br />
          <br />
          Along the way, you’ll visit iconic landmarks like the Sultan’s
          Palace, the House of Wonders, and the Old Fort, as your guide shares
          fascinating insights into the island’s multicultural past.
        </>
      ),
    },
    {
      day: "03",
      title: "Spice Trails & Forest Encounters",
      destination: "Jozani Forest & Spice Farms",
      accommodation: "Luxury stay at Kwanza Resort – Kizimkazi",
      meals: "Breakfast, Lunch & Dinner",
      image: zanzibar3,
      description: (
        <>
          Today’s journey takes you into the aromatic heart of Zanzibar’s
          spice-growing region. You’ll explore plantations where cloves,
          vanilla, cinnamon, cardamom, and exotic fruits are grown, learning
          how they’re cultivated and traditionally used.
          <br />
          <br />
          After the tour, savor a homemade Swahili lunch made using the very
          ingredients you’ve just seen in their natural form.
          <br />
          <br />
          In the afternoon, delve into Jozani Forest — Zanzibar’s only
          national park and sanctuary for the rare red colobus monkey. A
          peaceful walk through the forest trails offers opportunities to
          spot these endangered primates while learning about the diverse
          flora and the coastal mangrove ecosystems they inhabit.
        </>
      ),
    },
    {
      day: "04",
      title: "Spices and Sunset Serenity",
      destination: "Zanzibar Spice Farm & Sunset Dhow Cruise",
      accommodation: "No overnight stay · End of tour",
      meals: "Breakfast, Lunch & Dinner",
      image: zanzibar4,
      description: (
        <>
          On your final day, return to a local spice garden for a sensory
          farewell — inhale the vibrant aromas and relive the magic of
          Zanzibar’s most famous export.
          <br />
          <br />
          After a leisurely afternoon, head to the coast for a serene sunset
          dhow cruise. As the golden sky fades into twilight over the Indian
          Ocean, enjoy light refreshments on board, soaking in your last hours
          of island bliss.
          <br />
          <br />
          Back at your resort, a farewell dinner under the stars marks the
          perfect close to your Zanzibar experience.
        </>
      ),
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
          src={zanzibar1}
          alt="Zanzibar beach"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

        <div className="absolute bottom-10 left-6 md:left-16 max-w-4xl text-white">

          <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
            Tanzania · Zanzibar
          </span>

          <h1 className="mt-3 text-4xl md:text-6xl lg:text-7xl font-serif font-bold">
            Zanzibar
          </h1>

          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            White-sand beaches, turquoise waters, historic Stone Town,
            tropical landscapes and unforgettable Indian Ocean experiences.
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
                src={zanzibar2}
                alt="Zanzibar island experience"
                className="relative w-full h-[380px] sm:h-[480px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute bottom-5 left-5 bg-[#0D4825]/95 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-xl">

                <p className="text-[#F39A08] text-sm font-bold uppercase tracking-wider">
                  Zanzibar
                </p>

                <p className="text-white/70 text-xs mt-1">
                  The Spice Island of Tanzania
                </p>

              </div>

            </div>


            {/* CONTENT */}

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                About The Destination
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Where The Ocean

                <span className="block text-[#F39A08]">
                  Meets Island Culture
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Although Zanzibar is best known for its dreamy beaches, the
                island’s interior highlands reveal a serene, verdant landscape
                that tells a different story. Gently rolling hills, coconut
                plantations, spice farms, and traditional villages form the
                lush backdrop of central and western Unguja — the island’s
                agricultural core.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Thanks to its fertile volcanic soil, the region thrives with
                cloves, cinnamon, vanilla, and tropical fruits. Travelers can
                discover this quieter side of Zanzibar by visiting working
                farms, walking shaded forest trails, and engaging with local
                communities.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                It’s an experience rich in natural beauty and Swahili cultural
                roots, offering a tranquil contrast to the island’s bustling
                coastline.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="group p-5 rounded-2xl bg-[#F7F4EA] border border-[#0D4825]/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                  <p className="text-[#F39A08] text-2xl font-serif font-bold">
                    Beaches
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    White sands & turquoise waters
                  </p>

                </div>

                <div className="group p-5 rounded-2xl bg-[#F7F4EA] border border-[#0D4825]/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                  <p className="text-[#F39A08] text-2xl font-serif font-bold">
                    Culture
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Rich island heritage
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          4-DAY ITINERARY
      ====================================================== */}

```jsx
{/* =====================================================
    4-DAY ZANZIBAR BEACH GETAWAY — PREMIUM ITINERARY
===================================================== */}

<section id="zanzibar-4-day" className="relative overflow-hidden bg-[#F7F4EA] py-20 sm:py-24 lg:py-32">

  {/* Decorative background elements */}

  <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F39A08]/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0D4825]/10 blur-3xl" />


  <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">


    {/* =====================================================
        INTRODUCTION
    ====================================================== */}

    <div className="mx-auto max-w-4xl text-center">

      <div className="inline-flex items-center gap-3 rounded-full border border-[#F39A08]/25 bg-white px-5 py-2 shadow-sm">

        <span className="h-2 w-2 rounded-full bg-[#F39A08]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0D4825]">
          4 Days · 3 Nights · Zanzibar
        </span>

      </div>


      <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#0D4825] sm:text-5xl lg:text-6xl">

        4-Day Zanzibar

        <span className="block text-[#F39A08]">
          Beach Getaway
        </span>

      </h2>


      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">

        Although Zanzibar is best known for its dreamy beaches, this island
        escape reveals a much deeper side of the Spice Island. From the
        historic streets of Stone Town and aromatic spice plantations to the
        lush trails of Jozani Forest and a spectacular sunset dhow cruise,
        this carefully designed journey combines relaxation, culture, nature
        and authentic Swahili experiences.

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
            Zanzibar
          </p>

        </div>


        <div className="p-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F39A08]">
            Experience
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-[#0D4825]">
            Island Escape
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


      {/* ===================================================
          DAY 01
      ==================================================== */}

      <div className="relative mb-10 md:pl-20">

        {/* Timeline marker */}

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          01
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">

          {/* IMAGE */}

          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[430px]">

            <img
              src={zanzibar3}
              alt="Welcome to Zanzibar"
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
                Main Destination
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Zanzibar Island · Tanzania Coastline
              </p>

            </div>

          </div>


          {/* CONTENT */}

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 01 · Arrival
            </span>

            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Welcome to the Spice Island
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              As your flight approaches, Zanzibar’s turquoise shoreline
              shimmers below, like a precious gem floating in the ocean.
              Stepping off the plane, you're met with the warm embrace of sea
              air laced with the unmistakable scent of cloves — an aromatic
              reminder of the island’s rich spice heritage and trade history.

            </p>

            <p className="mt-4 leading-7 text-gray-600">

              From this first moment, you’re drawn into a captivating cultural
              blend where African, Arab, and European influences harmoniously
              coexist. Your journey begins with a comfortable transfer to
              Kizimkazi, where you can settle into your luxury resort and
              begin your island escape.

            </p>


            {/* DETAILS */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  Luxury stay at Kwanza Resort – Kizimkazi
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

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



      {/* ===================================================
          DAY 02
      ==================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#0D4825] font-serif text-lg font-bold text-white shadow-lg md:flex">
          02
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">

          {/* CONTENT FIRST ON DESKTOP */}

          <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 02 · Culture & History
            </span>

            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Historic Journey Through Stone Town
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Your morning begins with an immersive walking tour of Stone
              Town, the historical heartbeat of Zanzibar. Wind through narrow
              streets flanked by coral-stone houses, local markets bursting
              with life and grand wooden doors that speak to a bygone era.

            </p>

            <p className="mt-4 leading-7 text-gray-600">

              Along the way, you’ll visit iconic landmarks such as the
              Sultan’s Palace, the House of Wonders and the Old Fort, while
              your guide shares fascinating insights into Zanzibar’s
              multicultural history and its centuries of African, Arab and
              European influence.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Main Destination
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Stone Town, Zanzibar
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  Kwanza Resort – Kizimkazi
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals & Drinks
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast, Lunch & Dinner
                </p>

              </div>

            </div>

          </div>


          {/* IMAGE */}

          <div className="relative order-1 min-h-[320px] overflow-hidden lg:order-2 lg:min-h-[430px]">

            <img
              src={zanzibar4}
              alt="Historic Stone Town Zanzibar"
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
                Culture & Heritage
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Stone Town
              </p>

            </div>

          </div>

        </div>

      </div>



      {/* ===================================================
          DAY 03
      ==================================================== */}

      <div className="relative mb-10 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#F39A08] font-serif text-lg font-bold text-[#0D4825] shadow-lg md:flex">
          03
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">

          {/* IMAGE */}

          <div className="relative min-h-[350px] overflow-hidden lg:min-h-[470px]">

            <img
              src={zanzibar3}
              alt="Zanzibar spice farms and Jozani Forest"
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
                Nature & Spice
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Spice Farms & Jozani Forest
              </p>

            </div>

          </div>


          {/* CONTENT */}

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 03 · Nature & Discovery
            </span>

            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Spice Trails & Forest Encounters
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              Today’s journey takes you into the aromatic heart of Zanzibar’s
              spice-growing region. Explore plantations where cloves,
              vanilla, cinnamon, cardamom and exotic fruits are grown, while
              learning how these treasured ingredients are cultivated and
              traditionally used.

            </p>

            <p className="mt-4 leading-7 text-gray-600">

              After the plantation experience, enjoy a homemade Swahili lunch
              prepared using local ingredients. In the afternoon, venture into
              Jozani Forest, Zanzibar’s only national park and sanctuary for
              the rare red colobus monkey.

            </p>

            <p className="mt-4 leading-7 text-gray-600">

              A peaceful walk through the forest trails offers opportunities
              to observe these endangered primates while discovering the
              diverse flora and coastal mangrove ecosystems that make this
              region unique.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Main Destination
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  Jozani Forest & Spice Farms
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  Kwanza Resort – Kizimkazi
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals & Drinks
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast, Lunch & Dinner
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* ===================================================
          DAY 04
      ==================================================== */}

      <div className="relative mb-12 md:pl-20">

        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-[#F7F4EA] bg-[#0D4825] font-serif text-lg font-bold text-white shadow-lg md:flex">
          04
        </div>


        <div className="grid overflow-hidden rounded-[2rem] border border-[#0D4825]/10 bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">

          {/* CONTENT */}

          <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-12">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A08]">
              Day 04 · Sunset & Farewell
            </span>

            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl">
              Spices and Sunset Serenity
            </h3>


            <p className="mt-6 leading-7 text-gray-600">

              On your final day, return to a local spice garden for a sensory
              farewell. Inhale the vibrant aromas and relive the magic of
              Zanzibar’s most famous export while enjoying a leisurely
              morning and afternoon on the island.

            </p>

            <p className="mt-4 leading-7 text-gray-600">

              Later, head to the coast for a serene sunset dhow cruise. As
              the golden sky fades into twilight over the Indian Ocean, enjoy
              light refreshments on board and take in the peaceful beauty of
              Zanzibar’s coastline.

            </p>

            <p className="mt-4 leading-7 text-gray-600">

              Back at your resort, a farewell dinner beneath the stars marks
              the perfect close to your Zanzibar experience before your
              journey home.

            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Main Destination
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  Zanzibar Spice Farm & Sunset Dhow Cruise
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Accommodation
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#0D4825]">
                  No overnight stay · End of tour
                </p>

              </div>


              <div className="rounded-2xl bg-[#F7F4EA] p-4 sm:col-span-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Meals & Drinks
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0D4825]">
                  Breakfast, Lunch & Dinner
                </p>

              </div>

            </div>

          </div>


          {/* IMAGE */}

          <div className="relative order-1 min-h-[350px] overflow-hidden lg:order-2 lg:min-h-[470px]">

            <img
              src={zanzibar4}
              alt="Zanzibar sunset dhow cruise"
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
                Farewell Experience
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Sunset Dhow Cruise
              </p>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          DEPARTURE + TOUR NOTE
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
              Take Zanzibar Home With You
            </h3>


            <p className="mt-5 max-w-3xl leading-7 text-white/65">

              After breakfast, a transfer will be arranged for your journey
              home. Should you wish to extend your stay or explore more of
              what Zanzibar has to offer, we’re happy to help you plan
              additional nights, excursions or a longer island experience.

            </p>


            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

              <p className="text-sm leading-6 text-white/65">

                <span className="font-bold text-white">
                  Travel Note:
                </span>{" "}
                Pre- and post-tour accommodation can be arranged on request.
                The itinerary can also be tailored to suit your preferred
                travel dates, interests and pace.

              </p>

            </div>

          </div>


          {/* CTA */}

          <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Ready to travel?
            </p>

            <p className="mt-2 max-w-xs text-sm leading-6 text-white/60">
              Let us arrange your Zanzibar beach getaway from arrival to departure.
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
          Your Zanzibar Journey
        </p>

        <div className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-2">

          {[
            "Tropical Beaches",
            "Stone Town",
            "Spice Farms",
            "Jozani Forest",
            "Swahili Culture",
            "Sunset Dhow Cruise",
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
```



      {/* =====================================================
          IMAGE GALLERY
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center mb-10">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Zanzibar
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">
              Explore The Island
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
              A glimpse of the beaches, landscapes, culture and unforgettable
              moments waiting for you in Zanzibar.
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
                    Zanzibar {index + 1}
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
                {" "}Zanzibar Escape
              </span>

            </h2>

            <p className="mt-5 text-white/65 leading-relaxed">
              A little preparation can make your island holiday more
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
                while exploring the island.
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
                Bring suitable swimwear and enjoy snorkeling, swimming
                and other ocean experiences.
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
                Capture colorful markets, historic architecture, beaches
                and beautiful Indian Ocean sunsets.
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
                Respect local communities, marine life, traditions and
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
            Your African Island Adventure
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">

            Ready To Discover

            <span className="block text-[#F39A08]">
              Zanzibar?
            </span>

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/65 leading-relaxed">
            Let Daffar Tours & Travel help you turn your Zanzibar dream
            into an unforgettable island experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

            <Link
              to="/contact"
              className="bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Plan Your Zanzibar Trip
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

    </div>
  );
}

export default Zanzibar;

