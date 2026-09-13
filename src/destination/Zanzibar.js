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
```jsx

{/* ============================================================
    ZANZIBAR ISLAND
============================================================ */}
<section className="bg-white py-16 sm:py-20 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

      {/* IMAGE */}
      <div className="relative group">

        <div className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-[#F39A08]/15" />

        <img
          src={zanzibar2}
          alt="Zanzibar Island"
          className="relative h-[380px] w-full rounded-[2rem] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] sm:h-[480px]"
        />

        <div className="absolute bottom-5 left-5 rounded-2xl bg-[#0D4825]/95 px-6 py-4 text-white shadow-xl backdrop-blur-md">

          <p className="text-sm font-bold uppercase tracking-wider text-[#F39A08]">
            Zanzibar
          </p>

          <p className="mt-1 text-xs text-white/70">
            The Spice Island of Tanzania
          </p>

        </div>

      </div>


      {/* CONTENT */}
      <div>

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F39A08]">
          About The Destination
        </span>

        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl lg:text-5xl">

          Zanzibar Island

          <span className="block text-[#F39A08]">
            A Timeless Indian Ocean Escape
          </span>

        </h2>

        <div className="mt-7 space-y-5 text-gray-600">

          <p className="leading-relaxed">
            Nestled off Tanzania’s coast, Zanzibar Island, affectionately
            called the “Spice Island,” entices travelers with its powder-soft
            beaches, clear aquamarine waters, and rich cultural tapestry shaped
            by centuries of trade. A favorite among honeymooners, families,
            and explorers alike, Zanzibar blends tropical beauty with living
            history. At the heart of the island lies Stone Town, a UNESCO World
            Heritage treasure. Its maze of narrow alleyways reveals grand
            Omani-era doorways, vibrant bazaars brimming with local crafts,
            and a captivating mix of Swahili, Arab, and European architecture.
          </p>

          <p className="leading-relaxed">
            Visitors can stroll through bustling spice markets, uncover the
            island’s poignant past at the former Slave Market, or savor the
            aroma of cloves, nutmeg, and cinnamon on a guided spice plantation
            tour.
          </p>

          <p className="leading-relaxed">
            Beyond its cultural allure, Zanzibar is a playground for sunseekers
            and adventurers. Iconic beaches like Nungwi, Kendwa, and Paje invite
            travelers to unwind under swaying palms or dive into warm,
            reef-protected waters alive with colorful fish and corals.
            Thrill-seekers can enjoy kite surfing, snorkeling, or dolphin-spotting
            excursions, while traditional dhow cruises at sunset paint
            unforgettable scenes against the horizon.
          </p>

          <p className="leading-relaxed">
            Luxurious beachfront resorts and charming boutique hotels promise
            warm island hospitality, blending relaxation with world-class
            amenities. And as the sun dips into the Indian Ocean, Zanzibar’s
            beachside restaurants and bars come alive, offering fresh seafood,
            tropical cocktails, and Swahili-inspired cuisine.
          </p>

          <p className="leading-relaxed">
            From historical intrigue and spice-scented adventures to
            crystal-clear waters and barefoot luxury, Zanzibar Island is more
            than a destination, it’s a journey that touches the senses and the
            soul. Discover your perfect island escape in Zanzibar today!
          </p>

        </div>


        {/* HIGHLIGHTS */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2">

          <div className="group rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Beaches
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Nungwi, Kendwa & Paje
            </p>

          </div>

          <div className="group rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Culture
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Stone Town & Spice Island heritage
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ============================================================
    MT. KENYA
============================================================ */}




     



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
                        Nairobi,Kenya and Arusha, Tanzania
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

export default Zanzibar;

