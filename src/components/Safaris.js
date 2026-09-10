/* eslint-disable no-unused-vars */
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
import climbingkili from "../assets/climbingkili.jpg";
import bird1 from "../assets/bird1.jpg";
import bird2 from "../assets/bird2.jpg";
import zanzibar4 from "../assets/zanzibar4.jpg";
import photography1 from "../assets/photography1.jpg";
import photography2 from "../assets/photography2.jpg";
//import nakuruImage from "../assets/nakuru.jpg";
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

{/* ============================================================
    SAFARIS PAGE
    Daffar Tours & Travel
============================================================ */}

<section className="relative overflow-hidden bg-[#F8F6F1]">

  {/* ============================================================
      PAGE INTRO
  ============================================================ */}
  <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">

    <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">

      <div>
        <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#B87916]">
          <span className="h-px w-10 bg-[#B87916]" />
          Our Safaris
        </span>

        <h1 className="font-serif text-5xl leading-[0.95] text-[#082D19] sm:text-6xl lg:text-7xl">
          Journeys
          <span className="block italic text-[#B87916]">
            Beyond Ordinary.
          </span>
        </h1>
      </div>

      <div className="max-w-2xl lg:pb-2">
        <p className="text-lg leading-8 text-gray-600 sm:text-xl">
          From tailor-made adventures and romantic escapes to extraordinary
          wildlife encounters, mountain expeditions and Indian Ocean retreats,
          every Daffar journey is designed around the way you want to experience
          Africa.
        </p>
      </div>

    </div>
  </div>


  {/* ============================================================
      01 — TAILOR-MADE SAFARIS
  ============================================================ */}
  <section
    id="tailor-made-safaris"
    className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

        {/* IMAGE */}
        <div className="group relative">
          <div className="absolute -left-5 -top-5 hidden h-32 w-32 rounded-full border border-[#B87916]/20 lg:block" />

          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={tailormade1}
              alt="Tailor-made safari in Africa"                   
              className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
              <div className="rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
                  Your Journey
                </p>
                <p className="mt-1 font-serif text-2xl text-white">
                  Crafted around you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B87916]">
            01 — Tailor-Made
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#082D19] sm:text-5xl">
            Crafted Just
            <span className="block italic text-[#B87916]">
              for You
            </span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            At Daffar Tours and Travel, we believe your safari should reflect
            you; your interests, pace, and vision of the perfect African journey.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Our Tailor-Made Safaris are designed to bring that vision to life,
            whether it is a romantic escape, a family adventure, a luxury
            retreat, or a specialist trip for photography or birdwatching.
            Working closely with our experienced safari planners, you create an
            itinerary that is as unique as your dreams.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            We handpick destinations, lodges, and experiences that match your
            style — from private game drives and cultural encounters to sunrise
            balloon rides over the Maasai Mara or sundowner cocktails in the bush.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Private game drives",
              "Handpicked lodges",
              "Flexible itineraries",
              "Local hidden gems",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-[#F8F6F1] px-4 py-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#082D19] text-sm text-[#F5A623]">
                  ✓
                </span>
                <span className="text-sm font-medium text-[#082D19]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-[#F5A623] pl-5 font-serif text-xl italic leading-8 text-[#082D19]">
            The freedom is yours. Explore the wild at your own pace and shape
            each day around what excites you most.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            With Daffar Tours and Travel, every Tailor-Made Safari is more than
            a trip; it is a deeply personal experience, crafted with care and
            delivered with genuine East African warmth.
          </p>

          
        </div>



      </div>

      {/* ============================================================
    PREMIUM CTA BUTTONS
============================================================ */}
<div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

  {/* START PLANNING */}
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#082D19] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(8,45,25,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0D4825] hover:shadow-[0_18px_40px_rgba(8,45,25,0.25)]"
  >
    {/* Gold hover sweep */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <span className="relative">
      Start Planning
    </span>

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-[#082D19] transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#F7C45F]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M4 10h11M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>


  {/* VIEW ITINERARY */}
  <a
    href="/maasaimara#5-day-maasaimaranakuru"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#082D19]/20 bg-[#F7F4EA] px-7 py-4 text-sm font-bold tracking-wide text-[#082D19] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B87916] hover:bg-white hover:shadow-[0_14px_35px_rgba(8,45,25,0.12)]"
  >
    {/* Subtle gold background animation */}
    <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5A623]/10 transition-transform duration-500 group-hover:scale-x-100" />

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#B87916]/40 bg-white text-[#B87916] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#082D19]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M10 3.5v13M3.5 10h13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </span>

    <span className="relative">
      View Itinerary
    </span>

    <span className="relative text-[#B87916] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5A623]">
      →
    </span>
  </a>

</div>

{/* Supporting CTA text */}
<div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
  <span className="h-px w-8 bg-[#F5A623]" />
  <span>Personalized African Journeys</span>
</div>
    </div>
  </section>


  {/* ============================================================
      02 — HONEYMOON SAFARIS
  ============================================================ */}
  <section
    id="honeymoon-safaris"
    className="relative overflow-hidden bg-[#082D19] py-20 sm:py-24 lg:py-32"
  >
    <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#F5A623]/10 blur-3xl" />

    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

        {/* CONTENT */}
        <div className="order-2 lg:order-1">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F5A623]">
            02 — Honeymoon Safaris
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
            A Love Story
            <span className="block italic text-[#F5A623]">
              in the Wild
            </span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/75">
            Honeymoon Adventures Just for You.
          </p>

          <p className="mt-5 leading-8 text-white/65">
            At Daffar Tours and Travel, we understand that the perfect honeymoon
            looks different for every couple. Some dream of quiet moments under
            starlit skies, while others long to celebrate love in grand,
            unforgettable style.
          </p>

          <p className="mt-5 leading-8 text-white/65">
            Every journey begins with a conversation and is designed around your
            interests, budget, and vision. Imagine sharing sunset views across
            the savannah, toasting your love during a private bush dinner, or
            waking up to birdsong in a luxury tented camp.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Private game drives",
              "Bush dinners",
              "Luxury tented camps",
              "Zanzibar extensions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="text-sm font-medium text-white">
                  <span className="mr-2 text-[#F5A623]">✦</span>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-serif text-xl italic leading-8 text-white/90">
            Your honeymoon should be the first chapter in your shared adventure.
          </p>

          
        </div>

        {/* IMAGE */}
        <div className="group relative order-1 lg:order-2">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src={honeymoon1}
              alt="Romantic honeymoon safari in Africa"
              className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[570px]"
            />
          </div>

          <div className="absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-[#0D4825]/95 p-5 shadow-xl backdrop-blur-md sm:left-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#F5A623]">
              Together
            </p>
            <p className="mt-1 font-serif text-xl text-white">
              Love. Adventure. Africa.
            </p>
          </div>
        </div>



      </div>

      {/* ============================================================
    PREMIUM CTA BUTTONS
============================================================ */}
<div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

  {/* START PLANNING */}
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#082D19] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(8,45,25,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0D4825] hover:shadow-[0_18px_40px_rgba(8,45,25,0.25)]"
  >
    {/* Gold hover sweep */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <span className="relative">
      Start Planning
    </span>

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-[#082D19] transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#F7C45F]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M4 10h11M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>


  {/* VIEW ITINERARY */}
  <a
    href="/dianiitineraries#dianiitineraries"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#082D19]/20 bg-[#F7F4EA] px-7 py-4 text-sm font-bold tracking-wide text-[#082D19] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B87916] hover:bg-white hover:shadow-[0_14px_35px_rgba(8,45,25,0.12)]"
  >
    {/* Subtle gold background animation */}
    <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5A623]/10 transition-transform duration-500 group-hover:scale-x-100" />

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#B87916]/40 bg-white text-[#B87916] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#082D19]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M10 3.5v13M3.5 10h13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </span>

    <span className="relative">
      View Itinerary
    </span>

    <span className="relative text-[#B87916] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5A623]">
      →
    </span>
  </a>

</div>

{/* Supporting CTA text */}
<div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
  <span className="h-px w-8 bg-[#F5A623]" />
  <span>Personalized African Journeys</span>
</div>
    </div>
  </section>


  {/* ============================================================
      03 — WILDEBEEST SAFARIS
  ============================================================ */}
  <section
    id="wildebeest-safaris"
    className="relative overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 lg:py-32"
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="mb-14 max-w-3xl lg:mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B87916]">
          03 — Wildebeest Safaris
        </span>

        <h2 className="mt-5 font-serif text-4xl leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
          Beyond the River Crossings:
          <span className="block italic text-[#B87916]">
            The Migration Experience
          </span>
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">

        <div className="group relative overflow-hidden rounded-[2.5rem]">
          <img
            src={wilderbeast1}
            alt="Wildebeest migration in East Africa"
            className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[650px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F5A623]">
              Serengeti → Mara
            </p>
            <p className="mt-2 max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl">
              Follow one of Earth's greatest natural spectacles.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">

          <p className="text-lg leading-8 text-gray-600">
            Step into the untamed rhythms of East Africa with Daffar Tours and
            Travel on our Wildebeest Migration Safari, an extraordinary journey
            following one of the planet’s most powerful natural spectacles.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Imagine standing among endless herds as millions of wildebeest,
            zebras, and gazelles sweep across the vast Serengeti, brave the
            crocodile-filled Mara River, and spill into the golden grasslands of
            the Maasai Mara.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            From the calving grounds of Ndutu, where thousands of newborns take
            their first steps, to dramatic river crossings, each stage brings
            raw, breathtaking drama.
          </p>

          <div className="my-8 h-px bg-[#082D19]/10" />

          <div className="space-y-4">
            {[
              ["01", "Ndutu Calving Grounds", "Witness the beginning of life."],
              ["02", "Serengeti Plains", "Follow the herds across endless grasslands."],
              ["03", "Mara River", "Experience the drama of the crossings."],
              ["04", "Maasai Mara", "Discover the herds in Kenya."],
            ].map(([number, title, text]) => (
              <div key={number} className="flex gap-4">
                <span className="font-serif text-sm text-[#B87916]">
                  {number}
                </span>
                <div>
                  <h3 className="font-semibold text-[#082D19]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-serif text-xl italic leading-8 text-[#082D19]">
            Join us, and watch the greatest story of survival and instinct
            unfold before your eyes.
          </p>

        </div>
      </div>

      {/* ============================================================
    PREMIUM CTA BUTTONS
============================================================ */}
<div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

  {/* START PLANNING */}
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#082D19] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(8,45,25,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0D4825] hover:shadow-[0_18px_40px_rgba(8,45,25,0.25)]"
  >
    {/* Gold hover sweep */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <span className="relative">
      Start Planning
    </span>

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-[#082D19] transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#F7C45F]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M4 10h11M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>


  {/* VIEW ITINERARY */}
  <a
    href="/maasaimaraitineraries#masaimaraitineraries"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#082D19]/20 bg-[#F7F4EA] px-7 py-4 text-sm font-bold tracking-wide text-[#082D19] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B87916] hover:bg-white hover:shadow-[0_14px_35px_rgba(8,45,25,0.12)]"
  >
    {/* Subtle gold background animation */}
    <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5A623]/10 transition-transform duration-500 group-hover:scale-x-100" />

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#B87916]/40 bg-white text-[#B87916] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#082D19]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M10 3.5v13M3.5 10h13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </span>

    <span className="relative">
      View Itinerary
    </span>

    <span className="relative text-[#B87916] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5A623]">
      →
    </span>
  </a>

</div>

{/* Supporting CTA text */}
<div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
  <span className="h-px w-8 bg-[#F5A623]" />
  <span>Personalized African Journeys</span>
</div>
    </div>
  </section>


  {/* ============================================================
      04 — BIRDING SAFARIS
  ============================================================ */}
  <section
    id="birding-safaris"
    className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B87916]">
            04 — Birding Safaris
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#082D19] sm:text-5xl">
            A World of
            <span className="block italic text-[#B87916]">
              Wings & Wonder
            </span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Step into a world where every sunrise brings fresh colors,
            unfamiliar calls, and the quiet thrill of discovery.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Our Birding Safaris are crafted for everyone who feels the excitement
            of seeing rare feathers in flight. Whether you are a dedicated
            birder, wildlife photographer, researcher, or simply a traveler who
            loves nature, each journey promises something special.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Explore misty montane forests, open savannahs, peaceful wetlands and
            habitats alive with flamingos, kingfishers, raptors and hidden
            waders. Rather than chasing lists, these safaris invite you to slow
            your pace and become part of the landscape.
          </p>

          <div className="mt-8 rounded-3xl bg-[#F8F6F1] p-6">
            <p className="font-serif text-xl italic leading-8 text-[#082D19]">
              “Every wingbeat carries a story waiting to be discovered.”
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="grid gap-5 sm:grid-cols-2">

            <div className="overflow-hidden rounded-[2rem] sm:mt-12">
              <img
                src={bird1}
                alt="Birding safari in Africa"
                className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={bird2}
                alt="African birds"
                className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

          </div>

          <div className="mt-5 rounded-[2rem] bg-[#082D19] p-7 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
              Discover
            </p>
            <p className="mt-3 font-serif text-2xl">
              Forests · Wetlands · Savannah · Endemics
            </p>
          </div>
        </div>

      </div>

      {/* ============================================================
    PREMIUM CTA BUTTONS
============================================================ */}
<div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

  {/* START PLANNING */}
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#082D19] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(8,45,25,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0D4825] hover:shadow-[0_18px_40px_rgba(8,45,25,0.25)]"
  >
    {/* Gold hover sweep */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <span className="relative">
      Start Planning
    </span>

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-[#082D19] transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#F7C45F]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M4 10h11M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>


  {/* VIEW ITINERARY */}
  <a
    href="/lakenakuru#lakenakuru"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#082D19]/20 bg-[#F7F4EA] px-7 py-4 text-sm font-bold tracking-wide text-[#082D19] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B87916] hover:bg-white hover:shadow-[0_14px_35px_rgba(8,45,25,0.12)]"
  >
    {/* Subtle gold background animation */}
    <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5A623]/10 transition-transform duration-500 group-hover:scale-x-100" />

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#B87916]/40 bg-white text-[#B87916] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#082D19]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M10 3.5v13M3.5 10h13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </span>

    <span className="relative">
      View Itinerary
    </span>

    <span className="relative text-[#B87916] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5A623]">
      →
    </span>
  </a>

</div>

{/* Supporting CTA text */}
<div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
  <span className="h-px w-8 bg-[#F5A623]" />
  <span>Personalized African Journeys</span>
</div>
    </div>
  </section>


  {/* ============================================================
      05 — PHOTOGRAPHY SAFARIS
  ============================================================ */}
```jsx
{/* ============================================================
    05 — PHOTOGRAPHY SAFARIS
============================================================ */}
<section
  id="photography-safaris"
  className="relative overflow-hidden bg-[#07140C] py-20 sm:py-24 lg:py-32"
>
  {/* SUBTLE BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src={photography1}
      alt=""
      className="h-full w-full object-cover opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#07140C] via-[#07140C]/95 to-[#07140C]/75" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#07140C] via-transparent to-[#07140C]/40" />
  </div>

  {/* DECORATIVE GLOW */}
  <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

    {/* ============================================================
        INTRO
    ============================================================ */}
    <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">

      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#F5A623]" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F5A623]">
            05 — Photography Safaris
          </span>
        </div>

        <h2 className="font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          See Africa
          <span className="block italic text-[#F5A623]">
            Through Your Lens
          </span>
        </h2>
      </div>

      <div className="lg:pb-2">
        <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
          At Daffar Tours and Travel, we design Photography Safaris for
          travelers who see the world in light and shadow, shape and texture.
          These journeys are more than game drives; they are an invitation to
          capture the spirit of Africa.
        </p>
      </div>

    </div>


    {/* ============================================================
        FEATURED IMAGE + CONTENT
    ============================================================ */}
    <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">

      {/* LARGE IMAGE */}
      <div className="group relative overflow-hidden rounded-[2.5rem]">
        <img
          src={photography1}
          alt="African wildlife photography safari"
          className="h-[440px] w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-[580px]"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* IMAGE CAPTION */}
        <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">

          <div className="flex items-end justify-between gap-6">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
                The Art of the Wild
              </p>

              <p className="mt-2 max-w-lg font-serif text-2xl leading-tight text-white sm:text-3xl">
                Every moment becomes a story worth remembering.
              </p>
            </div>

            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md sm:flex">
              <span className="text-xl text-white">↗</span>
            </div>

          </div>

        </div>
      </div>


      {/* RIGHT CONTENT */}
      <div className="flex flex-col rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm sm:p-9">

        <p className="text-sm leading-7 text-white/60">
          Led by guides with an eye for composition and a deep love for the
          wild, you will explore iconic reserves and hidden gems known for
          dramatic scenery and thriving wildlife.
        </p>

        <p className="mt-5 text-sm leading-7 text-white/60">
          Each day is timed to match nature’s perfect light, with early morning
          outings and golden-hour evenings when animals are most active and the
          savannah glows with warm colour.
        </p>


        {/* FEATURES */}
        <div className="mt-8 space-y-3">

          {[
            {
              number: "01",
              title: "Golden Light",
              text: "Early mornings and magical evenings.",
            },
            {
              number: "02",
              title: "Wildlife Moments",
              text: "Patient encounters with Africa's iconic species.",
            },
            {
              number: "03",
              title: "Expert Guidance",
              text: "Guides who understand the art of photography.",
            },
            {
              number: "04",
              title: "Time & Flexibility",
              text: "Stay longer when the perfect moment arrives.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group flex gap-4 rounded-2xl border border-white/5 bg-black/10 p-4 transition duration-300 hover:border-[#F5A623]/30 hover:bg-white/[0.06]"
            >
              <span className="pt-1 font-serif text-xs text-[#F5A623]">
                {item.number}
              </span>

              <div>
                <h3 className="font-serif text-lg text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/45">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>


        {/* CLOSING QUOTE */}
        <div className="mt-auto pt-9">

          <div className="h-px w-full bg-white/10" />

          <p className="mt-7 font-serif text-xl italic leading-8 text-white/90 sm:text-2xl">
            “Let every frame hold a piece of Africa’s soul.”
          </p>

        </div>

      </div>

    </div>


    {/* ============================================================
        BOTTOM STRIP
    ============================================================ */}
    <div className="mt-6 grid gap-3 sm:grid-cols-3">

      {[
        "Wildlife Portraits",
        "African Landscapes",
        "Golden Hour Experiences",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-center transition hover:border-[#F5A623]/30"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            {item}
          </span>
        </div>
      ))}

    </div>

  </div>

  {/* ============================================================
    PREMIUM CTA BUTTONS
============================================================ */}
<div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

  {/* START PLANNING */}
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#082D19] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(8,45,25,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0D4825] hover:shadow-[0_18px_40px_rgba(8,45,25,0.25)]"
  >
    {/* Gold hover sweep */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <span className="relative">
      Start Planning
    </span>

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-[#082D19] transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#F7C45F]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M4 10h11M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>


  {/* VIEW ITINERARY */}
  <a
    href="/sychellesitineraries#sychellesitineraries"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#082D19]/20 bg-[#F7F4EA] px-7 py-4 text-sm font-bold tracking-wide text-[#082D19] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B87916] hover:bg-white hover:shadow-[0_14px_35px_rgba(8,45,25,0.12)]"
  >
    {/* Subtle gold background animation */}
    <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5A623]/10 transition-transform duration-500 group-hover:scale-x-100" />

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#B87916]/40 bg-white text-[#B87916] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#082D19]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M10 3.5v13M3.5 10h13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </span>

    <span className="relative">
      View Itinerary
    </span>

    <span className="relative text-[#B87916] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5A623]">
      →
    </span>
  </a>

</div>

{/* Supporting CTA text */}
<div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
  <span className="h-px w-8 bg-[#F5A623]" />
  <span>Personalized African Journeys</span>
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
            06 — Mountain Trekking
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
<div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

  {/* START PLANNING */}
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#082D19] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(8,45,25,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0D4825] hover:shadow-[0_18px_40px_rgba(8,45,25,0.25)]"
  >
    {/* Gold hover sweep */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <span className="relative">
      Start Planning
    </span>

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-[#082D19] transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#F7C45F]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M4 10h11M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>


  {/* VIEW ITINERARY */}
  <a
    href="/mountkilimanjaroitineraries#mountkilimanjaroitineraries"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#082D19]/20 bg-[#F7F4EA] px-7 py-4 text-sm font-bold tracking-wide text-[#082D19] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B87916] hover:bg-white hover:shadow-[0_14px_35px_rgba(8,45,25,0.12)]"
  >
    {/* Subtle gold background animation */}
    <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5A623]/10 transition-transform duration-500 group-hover:scale-x-100" />

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#B87916]/40 bg-white text-[#B87916] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#082D19]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M10 3.5v13M3.5 10h13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </span>

    <span className="relative">
      View Itinerary
    </span>

    <span className="relative text-[#B87916] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5A623]">
      →
    </span>
  </a>

</div>

{/* Supporting CTA text */}
<div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
  <span className="h-px w-8 bg-[#F5A623]" />
  <span>Personalized African Journeys</span>
</div>
    </div>
  </section>


  {/* ============================================================
      07 — BEACH HOLIDAYS
  ============================================================ */}
  <section
    id="beach-holidays"
    className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

      <div className="mb-14 text-center lg:mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B87916]">
          07 — Beach Holidays
        </span>

        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
          Coastal Escapes:
          <span className="block italic text-[#B87916]">
            East Africa by the Ocean
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Trade the rustle of the savannah for the soft hush of waves along
          Africa’s idyllic coastline.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* DIANI */}
        <div className="group relative overflow-hidden rounded-[2.5rem]">
          <img
            src={diani1}
            alt="Diani Beach Kenya"
            className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
              Kenya
            </span>

            <h3 className="mt-2 font-serif text-3xl text-white">
              Diani Beach
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/70">
              White sands, turquoise waters, coral reefs and laid-back coastal
              living.
            </p>
          </div>
        </div>

        {/* LAMU */}
        <div className="group relative overflow-hidden rounded-[2.5rem]">
          <img
            src={diani2}
            alt="Lamu Kenya"
            className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
              Kenya
            </span>

            <h3 className="mt-2 font-serif text-3xl text-white">
              Lamu
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Swahili heritage, wooden dhows, winding streets and timeless
              island charm.
            </p>
          </div>
        </div>

        {/* ZANZIBAR */}
        <div className="group relative overflow-hidden rounded-[2.5rem]">
          <img
            src={zanzibar4}
            alt="Zanzibar beach"
            className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623]">
              Tanzania
            </span>

            <h3 className="mt-2 font-serif text-3xl text-white">
              Zanzibar
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Spice-scented air, Stone Town, sunset dhow cruises and vibrant
              marine life.
            </p>
          </div>
        </div>

      </div>

      {/* BEACH DESCRIPTION */}
      <div className="mx-auto mt-14 max-w-4xl text-center">

        <p className="leading-8 text-gray-600">
          Whether you choose Kenya’s quiet coastal gems or Zanzibar’s vibrant
          mix of history and sea, your days flow at your own pace. Relax beside
          crystal-clear waters, embark on a sunset dhow cruise, or dive among
          vivid coral gardens alive with tropical fish.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          From peaceful mornings on sunlit sands to evenings lit by lanterns
          and ocean breezes, every moment is designed for rest, discovery, and
          gentle adventure.
        </p>

        <p className="mt-8 font-serif text-2xl italic text-[#082D19]">
          Every wave invites you to simply breathe and be.
        </p>

      </div>


{/* ============================================================
    PREMIUM CTA BUTTONS
============================================================ */}
<div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

  {/* START PLANNING */}
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#082D19] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(8,45,25,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0D4825] hover:shadow-[0_18px_40px_rgba(8,45,25,0.25)]"
  >
    {/* Gold hover sweep */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <span className="relative">
      Start Planning
    </span>

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-[#082D19] transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#F7C45F]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M4 10h11M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>


  {/* VIEW ITINERARY */}
  <a
    href="/dianiitineraries#dianiitineraries"
    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#082D19]/20 bg-[#F7F4EA] px-7 py-4 text-sm font-bold tracking-wide text-[#082D19] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B87916] hover:bg-white hover:shadow-[0_14px_35px_rgba(8,45,25,0.12)]"
  >
    {/* Subtle gold background animation */}
    <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5A623]/10 transition-transform duration-500 group-hover:scale-x-100" />

    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#B87916]/40 bg-white text-[#B87916] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#082D19]">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M10 3.5v13M3.5 10h13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </span>

    <span className="relative">
      View Itinerary
    </span>

    <span className="relative text-[#B87916] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5A623]">
      →
    </span>
  </a>

</div>

{/* Supporting CTA text */}
<div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
  <span className="h-px w-8 bg-[#F5A623]" />
  <span>Personalized African Journeys</span>
</div>
    </div>
  </section>


  {/* ============================================================
      FINAL CTA
  ============================================================ */}
  <section className="relative overflow-hidden bg-[#082D19] py-20 sm:py-24 lg:py-28">

    <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#F5A623]/10 blur-3xl" />
    <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-white/5 blur-3xl" />

    <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">

      <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F5A623]">
        Your Africa Awaits
      </span>

      <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
        Where Will You
        <span className="block italic text-[#F5A623]">
          Go Further?
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
        Tell us what you dream of experiencing, and let our team turn your
        ideas into an unforgettable African journey.
      </p>

      

    </div>
  </section>

</section>





      {/* =====================================================
          SAFARI TYPES
      ====================================================== */}



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
                        href="mailto: info@daffar.co.ke"
                        className="mt-1 block text-sm text-white/60 transition-colors hover:text-[#F39A08]"
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
                        className="mt-1 block text-sm text-white/60 transition-colors hover:text-[#F39A08]"
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