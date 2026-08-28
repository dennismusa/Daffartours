import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import kenya from "../assets/kenya.jpg";
import serengeti from "../assets/serengeti.jpg";
//import tanzania from "../assets/tanzania.jpg";

import tailormade1 from "../assets/tailormade1.jpg";
import tailormade2 from "../assets/tailormade2.jpg";

import honeymoon1 from "../assets/honeymoon1.jpg";
import honeymoon2 from "../assets/honeymoon2.jpg";

import wilderbeast1 from "../assets/wilderbeast1.jpg";
import wilderbeast2 from "../assets/wilderbeast2.jpg";

import bird1 from "../assets/bird1.jpg";
import bird2 from "../assets/bird2.jpg";

import photography1 from "../assets/photography1.jpg";
import photography2 from "../assets/photography2.jpg";

import diani1 from "../assets/diani1.jpg";
import diani2 from "../assets/diani2.jpg";

import kili1 from "../assets/kili1.jpg";
import kili2 from "../assets/kili2.jpg";


/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({ children }) {
  return (
    <span className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
      {children}
    </span>
  );
}


/* =========================================================
   STAT
========================================================= */

function Stat({ number, title, text }) {
  return (
    <div className="group rounded-2xl border border-[#eee8db] bg-[#F7F5EE] p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      <span className="text-xs font-bold text-[#F5A623]">
        {number}
      </span>

      <h3 className="mt-3 font-bold text-[#0b4224]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-500">
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   SAFARI CARD
========================================================= */

function SafariCard({
  image,
  image2,
  number,
  title,
  text,
  tag,
}) {
  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* IMAGE AREA */}
      <div className="relative h-[245px] overflow-hidden">

        {/* FIRST IMAGE */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-in-out group-hover:scale-110 group-hover:opacity-0"
        />

        {/* SECOND IMAGE */}
        <img
          src={image2}
          alt={`${title} experience`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-[1200ms] ease-in-out group-hover:scale-110 group-hover:opacity-100"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* NUMBER */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-xs font-bold text-white backdrop-blur-md">
          {number}
        </div>

        {/* TAG */}
        <span className="absolute bottom-5 left-5 rounded-full bg-[#F5A623] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#07351d]">
          {tag}
        </span>

      </div>


      {/* CARD CONTENT */}
      <div className="p-6">

        <h3 className="font-serif text-xl font-bold text-[#0b4224] transition-colors duration-300 group-hover:text-[#F5A623]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          {text}
        </p>

        <Link
          to="/contact"
          className="mt-5 inline-flex items-center text-sm font-bold text-[#0b4224] transition-colors duration-300 group-hover:text-[#F5A623]"
        >
          Enquire Now

          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>

    </article>
  );
}


/* =========================================================
   PROCESS STEP
========================================================= */

function ProcessStep({ number, title, text }) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5A623] font-black text-[#07351d] transition-transform duration-300 group-hover:rotate-6">
        {number}
      </div>

      <h3 className="mt-6 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/50">
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   WHY POINT
========================================================= */

function WhyPoint({ title, text }) {
  return (
    <div className="group flex gap-4">

      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0b4224] font-bold text-[#F5A623] transition-transform duration-300 group-hover:scale-110">
        ✓
      </div>

      <div>

        <h3 className="font-bold text-[#0b4224] transition-colors duration-300 group-hover:text-[#F5A623]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          {text}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   SAFARIS PAGE
========================================================= */

function Safaris() {

  const [activeSafari, setActiveSafari] = useState(0);

  const heroImages = [
    kenya,
    honeymoon1,
    wilderbeast1,
    serengeti,
  ];


  /* =====================================================
     HERO SLIDER
  ====================================================== */

  useEffect(() => {

    const timer = setInterval(() => {

      setActiveSafari(
        (prev) => (prev + 1) % heroImages.length
      );

    }, 5000);

    return () => clearInterval(timer);

  }, [heroImages.length]);


  return (

    <div className="overflow-x-hidden bg-white text-gray-800">


      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative h-[48vh] min-h-[390px] max-h-[560px] overflow-hidden">

        {heroImages.map((image, index) => (

          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
              activeSafari === index
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          >

            <img
              src={image}
              alt="African safari"
              className="h-full w-full object-cover"
            />

          </div>

        ))}


        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#042b18]/95 via-[#042b18]/65 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />


        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">

          <div className="max-w-3xl text-white">

            {/* BRAND BADGE */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl animate-fadeIn">

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#F5A623]" />

              <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/90 sm:text-xs">
                Daffar Tours & Travel
              </span>

            </div>


            {/* TITLE */}
            <h1 className="mt-5 font-serif text-3xl font-bold leading-tight animate-slideUp sm:text-4xl md:text-5xl lg:text-6xl">

              Safaris Designed

              <span className="block text-[#F5A623]">
                Around You.
              </span>

            </h1>


            {/* DESCRIPTION */}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Discover extraordinary wildlife, breathtaking landscapes and
              unforgettable African experiences through journeys created
              around you.
            </p>


            {/* BUTTON */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F5A623] px-7 py-3 font-bold text-[#07351d] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Plan Your Safari →
              </Link>

            </div>

          </div>

        </div>


        {/* SLIDER INDICATORS */}
        <div className="absolute bottom-7 right-6 z-20 flex gap-2 sm:right-10">

          {heroImages.map((_, index) => (

            <button
              key={index}
              onClick={() => setActiveSafari(index)}
              aria-label={`Show safari slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeSafari === index
                  ? "w-10 bg-[#F5A623]"
                  : "w-2 bg-white/50"
              }`}
            />

          ))}

        </div>

      </section>



      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

            {/* TEXT */}
            <div>

              <SectionLabel>
                Our Safari Experiences
              </SectionLabel>


              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#0b4224] sm:text-4xl lg:text-5xl">

                One Africa.

                <span className="block text-[#F5A623]">
                  Endless Ways To Explore It.
                </span>

              </h2>


              <p className="mt-6 leading-8 text-gray-600">
                At Daffar Tours & Travel, we believe that a safari should
                reflect the traveller, not simply follow a standard itinerary.
              </p>


              <p className="mt-4 leading-8 text-gray-600">
                From private tailor-made adventures and romantic honeymoon
                escapes to wildlife migrations, birding, photography, beach
                holidays and mountain trekking, we create journeys that allow
                you to experience Africa your way.
              </p>


              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#0b4224] transition hover:text-[#F5A623]"
              >
                Start Planning Your Journey
                <span>→</span>
              </Link>

            </div>


            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">

              <Stat
                number="01"
                title="Wildlife"
                text="Experience Africa's iconic wildlife."
              />

              <Stat
                number="02"
                title="Adventure"
                text="Explore beyond the ordinary."
              />

              <Stat
                number="03"
                title="Culture"
                text="Connect with local communities."
              />

              <Stat
                number="04"
                title="Relaxation"
                text="Finish your journey by the coast."
              />

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          SAFARI TYPES
      ====================================================== */}

      <section className="bg-[#F7F5EE] py-16 sm:py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">


          {/* HEADER */}
          <div className="max-w-3xl">

            <SectionLabel>
              Our Safari Experiences
            </SectionLabel>


            <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl lg:text-5xl">

              Choose Your

              <span className="block text-[#F5A623]">
                Perfect Safari.
              </span>

            </h2>


            <p className="mt-5 leading-8 text-gray-600">
              Choose from our signature safari experiences or speak with our
              team to combine several experiences into one unforgettable
              African journey.
            </p>

          </div>


          {/* CARDS */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


            {/* =================================================
                01 — TAILOR MADE
            ================================================== */}

            <SafariCard
              image={tailormade1}
              image2={tailormade2}
              number="01"
              title="Tailor-Made Safaris"
              text="A personalized journey designed around your interests, destinations, dates, preferred pace and budget."
              tag="Personalized"
            />


            {/* =================================================
                02 — HONEYMOON
            ================================================== */}

            <SafariCard
              image={honeymoon1}
              image2={honeymoon2}
              number="02"
              title="Honeymoon Safaris"
              text="Romantic African escapes combining incredible wildlife, beautiful accommodation and unforgettable moments together."
              tag="Romantic"
            />


            {/* =================================================
                03 — WILDEBEEST
            ================================================== */}

            <SafariCard
              image={wilderbeast1}
              image2={wilderbeast2}
              number="03"
              title="Wildebeest Safaris"
              text="Follow one of nature's greatest spectacles as millions of wildebeest and other animals move across the Mara and Serengeti ecosystem."
              tag="Migration"
            />


            {/* =================================================
                04 — BIRDING
            ================================================== */}

            <SafariCard
              image={bird1}
              image2={bird2}
              number="04"
              title="Birding Safaris"
              text="Explore East Africa's diverse habitats and discover remarkable birdlife with carefully planned birding experiences."
              tag="Birding"
            />


            {/* =================================================
                05 — PHOTOGRAPHY
            ================================================== */}

            <SafariCard
              image={photography1}
              image2={photography2}
              number="05"
              title="Photography Safaris"
              text="Enjoy dedicated time and exceptional opportunities to capture wildlife, landscapes and authentic African moments."
              tag="Photography"
            />


            {/* =================================================
                06 — BEACH
            ================================================== */}

            <SafariCard
              image={diani1}
              image2={diani2}
              number="06"
              title="Beach Holidays"
              text="Combine your safari with the tropical beaches of East Africa for the perfect balance of adventure and relaxation."
              tag="Beach Escape"
            />


            {/* =================================================
                07 — MOUNTAIN
            ================================================== */}

            <SafariCard
              image={kili1}
              image2={kili2}
              number="07"
              title="Mountain Trekking"
              text="Experience spectacular mountain landscapes through memorable trekking adventures across East Africa."
              tag="Adventure"
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          FEATURED EXPERIENCE
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="group relative min-h-[450px] overflow-hidden rounded-[2rem] sm:min-h-[500px]">

            <img
              src={serengeti}
              alt="Serengeti safari"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />


            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />


            <div className="relative z-10 flex min-h-[450px] items-center px-6 sm:min-h-[500px] sm:px-10 lg:px-16">

              <div className="max-w-2xl text-white">

                <SectionLabel>
                  Featured Experience
                </SectionLabel>


                <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">

                  Follow The

                  <span className="text-[#F5A623]">
                    {" "}Great Migration.
                  </span>

                </h2>


                <p className="mt-5 leading-8 text-white/75">
                  Witness one of Africa's greatest wildlife spectacles as
                  wildebeest, zebras and other animals move through the
                  Serengeti and Maasai Mara ecosystem.
                </p>


                <Link
                  to="/contact"
                  className="mt-7 inline-flex rounded-full bg-[#F5A623] px-7 py-3.5 font-bold text-[#07351d] transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  Enquire About This Safari →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-[#082d19] py-16 sm:py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">


          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">

            <SectionLabel>
              Your Safari Journey
            </SectionLabel>


            <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">

              From Dream To

              <span className="text-[#F5A623]">
                {" "}Departure.
              </span>

            </h2>


            <p className="mt-5 leading-7 text-white/60">
              We make planning your African adventure simple, personal and
              enjoyable.
            </p>

          </div>


          {/* STEPS */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <ProcessStep
              number="01"
              title="Tell Us Your Dream"
              text="Share your dates, interests, destinations and travel preferences."
            />

            <ProcessStep
              number="02"
              title="We Design"
              text="Our team creates a safari concept around your requirements."
            />

            <ProcessStep
              number="03"
              title="Refine Together"
              text="We adjust your itinerary until everything feels right."
            />

            <ProcessStep
              number="04"
              title="Travel"
              text="Enjoy your African adventure while we support your journey."
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          WHY CHOOSE DAFFAR
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">


            {/* TEXT */}
            <div>

              <SectionLabel>
                Why Choose Daffar
              </SectionLabel>


              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#0b4224] sm:text-4xl lg:text-5xl">

                Your Safari.

                <span className="block text-[#F5A623]">
                  Our Experience.
                </span>

              </h2>


              <p className="mt-6 leading-8 text-gray-600">
                We believe great safaris are created through thoughtful
                planning, local knowledge, attention to detail and genuine
                care for every traveller.
              </p>


              <div className="mt-8 space-y-6">

                <WhyPoint
                  title="Personalized Planning"
                  text="Your safari is built around your interests instead of a one-size-fits-all itinerary."
                />

                <WhyPoint
                  title="Local Knowledge"
                  text="Discover Africa through people who understand its destinations, wildlife and communities."
                />

                <WhyPoint
                  title="Flexible Experiences"
                  text="Combine wildlife, culture, adventure, photography, relaxation and coastal experiences."
                />

                <WhyPoint
                  title="Support From Start To Finish"
                  text="Our team remains available from your first inquiry through the journey itself."
                />

              </div>

            </div>


            {/* IMAGES */}
            <div className="grid h-[480px] grid-cols-2 gap-4 sm:h-[550px]">

              <img
                src={tailormade1}
                alt="African safari"
                className="mt-auto h-[68%] w-full rounded-[2rem] object-cover transition-transform duration-700 hover:scale-[1.02]"
              />


              <div className="space-y-4">

                <img
                  src={wilderbeast1}
                  alt="Wildebeest safari"
                  className="h-[48%] w-full rounded-[2rem] object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                <img
                  src={kili1}
                  alt="Mountain trekking"
                  className="h-[48%] w-full rounded-[2rem] object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#ebe5d8] bg-[#F7F5EE] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">


          {/* DECORATIVE CIRCLES */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0b4224]/10 blur-3xl" />


          <div className="relative z-10 mx-auto max-w-3xl">

            <SectionLabel>
              Start Planning
            </SectionLabel>


            <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b4224] sm:text-4xl lg:text-5xl">

              Where Will Africa

              <span className="text-[#F5A623]">
                {" "}Take You?
              </span>

            </h2>


            <p className="mt-5 leading-7 text-gray-600">
              Tell us about your dream safari and let us begin turning it
              into an unforgettable African journey.
            </p>


            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="rounded-full bg-[#0b4224] px-8 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Plan My Safari →
              </Link>


              <a
                href="https://wa.me/+254708164662"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#0b4224]/20 px-8 py-4 font-bold text-[#0b4224] transition-all hover:bg-[#0b4224] hover:text-white"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>
        {`

          @keyframes slideUp {

            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }

          }


          @keyframes fadeIn {

            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }

          }


          .animate-slideUp {
            animation: slideUp 1s ease forwards;
          }


          .animate-fadeIn {
            animation: fadeIn 1.2s ease forwards;
          }


          @media (prefers-reduced-motion: reduce) {

            *,
            *::before,
            *::after {

              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;

            }

          }

        `}
      </style>



      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="overflow-hidden bg-[#082D19] text-white">

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12">

          {/* DECORATIVE BACKGROUND */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#F39A08]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />


          <div className="relative z-10">


            {/* =================================================
                FOOTER CONTENT
            ================================================== */}

            <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">


              {/* BRAND */}
              <div>

                <Link
                  to="/"
                  className="inline-block group"
                >

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


                {/* SOCIALS */}
                <div className="mt-6 flex items-center gap-2.5">


                  {/* FACEBOOK */}
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


                  {/* INSTAGRAM */}
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

                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                      />

                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        className="fill-current stroke-none"
                      />

                    </svg>

                  </a>


                  {/* TIKTOK */}
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


                  {/* YOUTUBE */}
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
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/safaris"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    Safaris
                  </Link>

                  <Link
                    to="/destinations"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    Destinations
                  </Link>

                  <Link
                    to="/activities"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    Activities
                  </Link>

                  <Link
                    to="/contact"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
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
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    Community Work
                  </Link>

                  <Link
                    to="/tourafricablog"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    Tour Africa Blog
                  </Link>

                  <Link
                    to="/faqs"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    FAQs
                  </Link>

                  <Link
                    to="/safaris"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    Tailor-Made Safaris
                  </Link>

                  <Link
                    to="/safaris"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
                  >
                    Honeymoon Safaris
                  </Link>

                  <Link
                    to="/contact"
                    className="block text-sm text-white/55 transition-colors hover:text-[#F39A08]"
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
                        className="mt-1 block text-sm text-white/60 transition-colors hover:text-[#F39A08]"
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
                        className="mt-1 block text-sm text-white/60 transition-colors hover:text-[#F39A08]"
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



            {/* =================================================
                BOTTOM BAR
            ================================================== */}

            <div className="flex flex-col gap-3 pt-6 md:flex-row md:items-center md:justify-between">

              <p className="text-xs text-white/35">
                © {new Date().getFullYear()} Daffar Tours & Travel.
                All rights reserved.
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


export default Safaris;