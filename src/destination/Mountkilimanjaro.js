

import React from "react";
import { Link } from "react-router-dom";

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

      <section className="bg-white py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* IMAGE */}

            <div className="relative group">

              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-3xl bg-[#F39A08]/15" />

              <img
                src={kili2}
                alt="Mount Kilimanjaro trekking experience"
                className="relative w-full h-[380px] sm:h-[480px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute bottom-5 left-5 bg-[#0D4825]/95 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-xl">

                <p className="text-[#F39A08] text-sm font-bold uppercase tracking-wider">
                  Mount Kilimanjaro
                </p>

                <p className="text-white/70 text-xs mt-1">
                  Africa's legendary mountain
                </p>

              </div>

            </div>


            {/* CONTENT */}

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                About The Destination
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Where Adventure

                <span className="block text-[#F39A08]">
                  Meets The Sky
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Mount Kilimanjaro is one of Africa's most recognizable
                landmarks and a dream destination for adventurers from
                around the world. Its dramatic summit rises above the
                surrounding landscapes of Tanzania.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                A Kilimanjaro trek takes you through remarkable changes
                in scenery and climate, creating an extraordinary journey
                from the lower slopes to the summit.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="group p-5 rounded-2xl bg-[#F7F4EA] border border-[#0D4825]/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                  <p className="text-[#F39A08] text-2xl font-serif font-bold">
                    Adventure
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Unforgettable mountain trekking
                  </p>

                </div>

                <div className="group p-5 rounded-2xl bg-[#F7F4EA] border border-[#0D4825]/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                  <p className="text-[#F39A08] text-2xl font-serif font-bold">
                    Nature
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Extraordinary alpine landscapes
                  </p>

                </div>

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
              to="/destinations"
              className="block text-sm text-white/55 hover:text-[#F39A08] transition-colors"
            >
              Destinations
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

export default MountKilimanjaro;
