import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import amboseli from "../assets/amboseli.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import serengeti from "../assets/serengeti.jpg";
//import meru from "../assets/meru.jpg";
import nakuru from "../assets/nakuru.jpg";
import kili1 from "../assets/kili1.jpg";
import ngorongori1 from "../assets/ngorongoro1.jpg";
import mara1 from "../assets/mara1.jpg";
//import west from "../assets/west.jpg";
//import tanzania from "../assets/tanzania.jpg";
import image16 from "../assets/image16.jpg";
import image17 from "../assets/image17.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";

/* ============================================================
   HERO SLIDES
============================================================ */

const heroSlides = [
  {
    image: amboseli,
    eyebrow: "KENYA • WILDLIFE • ADVENTURE",
    title: "Discover",
    highlight: "Wild Kenya",
    description:
      "Experience extraordinary wildlife, breathtaking landscapes and authentic African adventures designed around the way you love to travel.",
  },
  {
    image: Wilderbeast,
    eyebrow: "MAASAI MARA • SAFARI • WILDLIFE",
    title: "Into The",
    highlight: "Wild",
    description:
      "Follow the rhythm of the wilderness and discover Kenya's iconic landscapes, wildlife and unforgettable safari moments.",
  },
  {
    image: serengeti,
    eyebrow: "TANZANIA • EAST AFRICA",
    title: "Adventure",
    highlight: "Without Limits",
    description:
      "From endless savannahs to spectacular landscapes, experience East Africa through a journey created especially for you.",
  },
];

/* ============================================================
   SAFARI PACKAGES
============================================================ */

const safariPackages = [
  {
    image: amboseli,
    title: "Amboseli Safari",
    days: "3 Days",
    location: "Kenya",
    description:
      "Wildlife, open plains and spectacular views of Mount Kilimanjaro.",
    tag: "Iconic",
  },
  {
    image: Wilderbeast,
    title: "Maasai Mara Adventure",
    days: "4 Days",
    location: "Kenya",
    description:
      "Discover Kenya's legendary reserve and experience unforgettable wildlife encounters.",
    tag: "Wildlife",
  },
  {
    image: serengeti,
    title: "Serengeti Safari",
    days: "5 Days",
    location: "Tanzania",
    description:
      "Explore the legendary Serengeti and experience Africa at its wildest.",
    tag: "Classic",
  },
];

/* ============================================================
   DESTINATIONS
============================================================ */

const destinations = [
  {
    image: amboseli,
    name: "Amboseli",
    country: "Kenya",
    path: "/amboseli",
    description: "Discover magnificent elephants, open savannahs, rich Maasai culture and breathtaking views of Mount Kilimanjaro.",
  },
  {
    image: nakuru,
    name: "Lake Nakuru",
    country: "Kenya",
    path: "/lakenakuru",
    description: "A beautiful Rift Valley destination known for rhinos, spectacular landscapes, diverse wildlife and unforgettable birdwatching experiences.",
  },
  {
    image: mara1,
    name: "Maasai Mara",
    country: "Kenya",
    path: "/maasaimara",
    description: "Endless savannahs, incredible wildlife, the Great Migration, and unforgettable African safari experiences",
  },
  {
    image: ngorongori1,
    name: "Ngorongoro Crater",
    country: "Tanzania",
    path: "/ngorongoro",
    description: "Ngorongoro provides exceptional opportunities to see a wide variety of wildlife within a spectacular natural setting",
  },
  {
    image: kili1,
    name: "Mount kilimanjaro",
    country: "East Africa",
    path: "/mountkilimanjaro",
    description: "Africa's highest mountain, breathtaking landscapes, unforgettable trekking adventures, and the journey toward Uhuru Peak.",
  },
];



/* ============================================================
   FOOTER HELPERS
   These are intentionally above Home()
============================================================ */

function FooterHeading({ children }) {
  return (
    <h3 className="relative mb-5 inline-block text-sm font-bold uppercase tracking-[0.18em]">
      {children}

      <span className="absolute -bottom-2 left-0 h-0.5 w-8 rounded-full bg-[#F39A08]" />
    </h3>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <FooterHeading>
        {title}
      </FooterHeading>

      <div className="space-y-2.5">
        {children}
      </div>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block w-fit text-sm text-white/50 transition-all hover:translate-x-1 hover:text-[#F39A08]"
    >
      {children}
    </Link>
  );
}

/* ============================================================
   SECTION LABEL
============================================================ */

function SectionLabel({ children, dark = false }) {
  return (
    <span
      className={`text-xs font-bold uppercase tracking-[3px] ${
        dark ? "text-[#dba33a]" : "text-[#dba33a]"
      }`}
    >
      {children}
    </span>
  );
}

/* ============================================================
   SECTION INTRO
============================================================ */

function SectionIntro({ label, title, text }) {
  return (
    <div className="max-w-3xl text-left">
      <SectionLabel>
        {label}
      </SectionLabel>

      <h2 className="mt-4 text-3xl font-serif font-bold leading-tight text-[#0b4224] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   QUICK STAT
============================================================ */

function QuickStat({ icon, number, label }) {
  return (
    <div className="flex items-center gap-3 border-r border-white/10 px-4 py-5 sm:px-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dba33a]/10 text-sm text-[#dba33a]">
        {icon}
      </span>

      <div>
        <p className="text-xs font-bold text-white sm:text-sm">
          {number}
        </p>

        <p className="mt-0.5 text-[10px] text-white/45 sm:text-xs">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   INFO ITEM
============================================================ */

function InfoItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs font-bold text-white">
        ✓
      </span>

      <span className="text-sm font-semibold text-gray-700">
        {text}
      </span>
    </div>
  );
}

/* ============================================================
   WHY CARD
============================================================ */

function WhyCard({ icon, title, text }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
      <span className="text-xs font-bold text-[#dba33a]">
        {icon}
      </span>

      <h3 className="mt-3 font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-white/50">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   EXPERIENCE STEP
============================================================ */

function ExperienceStep({ number, title, text }) {
  return (
    <div className="relative z-10 text-left">
      <div className="flex justify-start">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-sm font-bold text-[#dba33a] shadow-lg">
          {number}
        </div>
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#0b4224]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-gray-600">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   HOME
============================================================ */

function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeSafari, setActiveSafari] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  /* ==========================================================
     HERO SLIDER
  ========================================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  /* ==========================================================
     TESTIMONIAL SLIDER
  ========================================================== */


  /* ==========================================================
     SCROLL
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hero = heroSlides[heroIndex];
 // const testimonial = testimonials[testimonialIndex];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#17251d]">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative h-[72vh] min-h-[560px] max-h-[760px] overflow-hidden">

        {/* HERO IMAGES */}

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1800ms] ease-out ${
              index === heroIndex
                ? "scale-100 opacity-100"
                : "scale-110 opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.highlight}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* OVERLAYS */}

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041b10]/95 via-[#07321d]/60 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

        {/* DECORATIVE LIGHT */}

        <div className="absolute -right-32 top-10 h-[350px] w-[350px] rounded-full bg-[#dba33a]/10 blur-[100px]" />

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">

          <div
            key={heroIndex}
            className="max-w-2xl text-left text-white animate-[heroText_.9s_ease-out]"
          >

            {/* EYEBROW */}

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#dba33a]" />

              <span className="text-[9px] font-bold uppercase tracking-[3px] text-white/80 sm:text-xs">
                {hero.eyebrow}
              </span>

            </div>

            {/* TITLE */}

            <h1 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-1.5px] sm:text-5xl md:text-6xl lg:text-[72px]">

              {hero.title}

              <span className="mt-2 block text-[#dba33a]">
                {hero.highlight}
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg">
              {hero.description}
            </p>

            {/* BUTTONS */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/safaris"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#dba33a] px-7 py-3.5 text-sm font-bold text-[#092a18] shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#e9b84f]"
              >
                Explore Safaris

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#092a18]"
              >
                Plan My Journey
              </Link>

            </div>

            {/* TRUST */}

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/60 sm:text-xs">

              <span>✓ Local Expertise</span>
              <span>✓ Tailor-Made Journeys</span>
              <span>✓ Personal Support</span>

            </div>

          </div>

        </div>

        {/* SLIDER */}

        <div className="absolute bottom-7 left-5 z-20 flex items-center gap-2 sm:left-8 lg:left-12">

          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setHeroIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === heroIndex
                  ? "w-10 bg-[#dba33a]"
                  : "w-4 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}

        </div>

        {/* BRAND */}

        <div className="absolute bottom-7 right-7 z-20 hidden items-center gap-4 text-white/50 lg:flex">

          <span className="text-[9px] uppercase tracking-[3px]">
            Daffar Tours & Travel
          </span>

          <div className="h-px w-12 bg-white/30" />

        </div>

        {/* SCROLL */}

        <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-white/50 md:flex">

          <span className="text-[8px] uppercase tracking-[3px]">
            Scroll
          </span>

          <div className="h-7 w-px bg-gradient-to-b from-white/60 to-transparent" />

        </div>

      </section>

      {/* ======================================================
          STATS
      ====================================================== */}

      <section className="relative z-20 bg-[#082d19] shadow-2xl">

        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

          <QuickStat
            icon="✦"
            number="Safari"
            label="Experiences"
          />

          <QuickStat
            icon="◎"
            number="Kenya"
            label="Local Expertise"
          />

          <QuickStat
            icon="◆"
            number="Tailor-Made"
            label="Journeys"
          />

          <QuickStat
            icon="↗"
            number="24/7"
            label="Travel Support"
          />

        </div>

      </section>

      {/* ======================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* IMAGES */}

            <div className="relative">

              <div className="relative h-[430px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[570px]">

                <img
                  src={image17}
                  alt="Daffar Tours and Travel"
                  className="h-full w-full object-cover transition duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              </div>

              <div className="absolute -bottom-8 -right-4 h-48 w-40 overflow-hidden rounded-3xl border-8 border-white shadow-2xl sm:-right-8 sm:h-60 sm:w-52">

                <img
                  src={cruiser2}
                  alt="Safari vehicle"
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="absolute left-6 top-7 rounded-2xl bg-[#dba33a] px-6 py-4 text-[#092a18] shadow-xl">

                <p className="text-2xl font-black">
                  Africa
                </p>

                <p className="text-[10px] font-bold uppercase tracking-[2px]">
                  Starts Here
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="text-left">

              <SectionLabel>
                Welcome To Daffar
              </SectionLabel>

              <h2 className="mt-4 text-4xl font-serif font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">

                Travel Deeper.

                <span className="mt-2 block text-[#dba33a]">
                  Experience More.
                </span>

              </h2>

              <p className="mt-7 text-sm leading-8 text-gray-600 sm:text-base">
                Daffar Tours & Travel creates meaningful journeys across
                Kenya and East Africa. We believe travel is not simply about
                visiting a destination — it is about connecting with wildlife,
                people, culture and extraordinary landscapes.
              </p>

              <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
                Whether you dream of a classic wildlife safari, a private
                adventure or a completely tailor-made African escape, our team
                transforms your ideas into a journey worth remembering.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">

                <InfoItem text="Tailor-made itineraries" />
                <InfoItem text="Local travel knowledge" />
                <InfoItem text="Experienced safari guides" />
                <InfoItem text="Personal travel support" />

              </div>

              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-3 font-bold text-[#0b4224]"
              >
                Discover Daffar

                <span className="text-[#dba33a] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          FEATURED SAFARIS
      ====================================================== */}

      <section className="bg-[#f7f5ee] py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <SectionIntro
              label="Featured Safaris"
              title="Journeys Into The Wild"
              text="Carefully designed safari experiences created around wildlife, discovery and unforgettable moments."
            />

            <Link
              to="/safaris"
              className="hidden items-center gap-2 font-bold text-[#0b4224] lg:inline-flex"
            >
              View All Safaris

              <span className="text-[#dba33a]">
                →
              </span>
            </Link>

          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">

            {safariPackages.map((safari, index) => (

              <div
                key={index}
                onMouseEnter={() => setActiveSafari(index)}
                className={`group overflow-hidden rounded-[1.7rem] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  activeSafari === index ? "-translate-y-1" : ""
                }`}
              >

                <div className="relative h-80 overflow-hidden">

                  <img
                    src={safari.image}
                    alt={safari.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold text-[#092a18]">
                    {safari.days}
                  </div>

                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {safari.tag}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">

                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                      {safari.location}
                    </p>

                    <h3 className="mt-2 text-2xl font-serif font-bold text-white sm:text-3xl">
                      {safari.title}
                    </h3>

                  </div>

                </div>

                <div className="p-6">

                  <p className="text-sm leading-7 text-gray-600">
                    {safari.description}
                  </p>

                  <Link
                    to="/amboseli"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0b4224]"
                  >
                    Explore Safari

                    <span className="text-[#dba33a] transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
          DESTINATIONS
      ====================================================== */}

      <section className="py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <SectionIntro
            label="Featured Destinations"
            title="Africa Is Calling"
            text="From the shadow of Kilimanjaro to the endless Serengeti plains, discover destinations that stay with you long after you leave."
          />

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">

            {destinations.map((destination, index) => (

              <Link
                key={index}
                to={destination.path}
                className={`group relative overflow-hidden rounded-[1.5rem] ${
                  index === 0
                    ? "col-span-2 row-span-2 h-[430px]"
                    : "h-[205px] sm:h-[240px]"
                }`}
              >

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-left sm:p-6">

                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#dba33a]">
                    {destination.country}
                  </p>

                  <h3 className="mt-1 text-xl font-serif font-bold text-white sm:text-2xl">
                    {destination.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-white/60">
                    {destination.description}
                  </p>

                  <span className="mt-3 block text-xs font-semibold text-white/70 transition group-hover:text-[#dba33a]">
                    Explore destination →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
          WHY DAFFAR
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#082d19] py-24 lg:py-32">

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#dba33a]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* CONTENT */}

            <div className="text-left">

              <SectionLabel dark>
                Why Choose Daffar
              </SectionLabel>

              <h2 className="mt-4 text-4xl font-serif font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

                Your Journey.

                <span className="mt-2 block text-[#dba33a]">
                  Our Responsibility.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                From the first conversation to the final sunset, we focus on
                the details that make your African journey comfortable,
                authentic and memorable.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <WhyCard
                  icon="01"
                  title="Local Knowledge"
                  text="Travel with people who understand the destinations."
                />

                <WhyCard
                  icon="02"
                  title="Tailor-Made"
                  text="Build an itinerary around your interests and pace."
                />

                <WhyCard
                  icon="03"
                  title="Personal Service"
                  text="Receive dedicated support throughout your journey."
                />

                <WhyCard
                  icon="04"
                  title="Authentic Experiences"
                  text="Go beyond the ordinary tourist experience."
                />

              </div>

            </div>

            {/* IMAGE */}

            <div className="relative">

              <div className="h-[470px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[560px]">

                <img
                  src={image16}
                  alt="Safari experience"
                  className="h-full w-full object-cover transition duration-1000 hover:scale-105"
                />

              </div>

              <div className="absolute -bottom-7 -left-4 max-w-[230px] rounded-2xl bg-white p-5 text-left shadow-2xl sm:-left-8">

                <div className="text-sm tracking-widest text-[#dba33a]">
                  ★★★★★
                </div>

                <p className="mt-2 font-bold text-[#0b4224]">
                  Designed Around You
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Every journey deserves a personal touch.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          EXPERIENCE
      ====================================================== */}

      <section className="bg-[#f7f5ee] py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <SectionIntro
            label="The Daffar Experience"
            title="From Dream To Journey"
            text="Planning an African adventure should feel exciting, not complicated."
          />

          <div className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-8">

            <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-[#0b4224]/15 md:block" />

            <ExperienceStep
              number="01"
              title="Tell Us Your Dream"
              text="Share your interests, dates and the kind of experience you want."
            />

            <ExperienceStep
              number="02"
              title="We Design"
              text="Our team builds a detailed itinerary around your travel style."
            />

            <ExperienceStep
              number="03"
              title="You Explore"
              text="Enjoy your journey while we take care of the important details."
            />

            <ExperienceStep
              number="04"
              title="Make Memories"
              text="Return home with stories and moments you will treasure."
            />

          </div>

        </div>

      </section>

      {/* ======================================================
          LARGE CTA
      ====================================================== */}

      <section className="relative overflow-hidden py-28 lg:py-36">

        <img
          src={climbingkenya}
          alt="African adventure"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.04}px)`,
          }}
        />

        <div className="absolute inset-0 bg-[#062b18]/85" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center text-white">

          <SectionLabel dark>
            Your African Adventure
          </SectionLabel>

          <h2 className="mt-5 text-4xl font-serif font-bold leading-tight sm:text-5xl lg:text-7xl">

            Africa Is Waiting.

            <span className="mt-3 block text-[#dba33a]">
              Are You Ready?
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
            Tell us where you want to go, what you want to experience and
            when you want to travel. We will help turn your ideas into an
            unforgettable journey.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/contact"
              className="rounded-full bg-[#dba33a] px-8 py-4 font-bold text-[#07351d] shadow-xl transition hover:-translate-y-1 hover:bg-[#e9b84f]"
            >
              Plan My Safari →
            </Link>

            <a
              href="https://wa.me/+254708164662"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#07351d]"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}

      ```jsx
{/* =====================================================
    GOOGLE REVIEWS
===================================================== */}
<section className="bg-[#f7f5ee] py-20 sm:py-24 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* HEADER */}
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

      <div className="max-w-2xl">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Guest Reviews
        </p>

        <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl">
          Experiences Shared
          <span className="block text-[#dba33a]">
            By Our Travelers
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
          Every journey matters to us. Discover what travelers have
          shared about their experiences with Daffar Tours and Travel
          on Google.
        </p>

      </div>


      {/* GOOGLE RATING CARD */}
      <div className="flex w-full max-w-sm items-center gap-5 rounded-2xl bg-white p-5 shadow-sm lg:w-auto">

        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-2xl font-bold text-[#dba33a]">
          G
        </div>

        <div>

          <p className="text-sm font-bold text-[#0b4224]">
            Google Reviews
          </p>

          <div className="mt-1 flex items-center gap-2">

            <span className="text-lg font-bold text-[#0b4224]">
              ★★★★★
            </span>

          </div>

          <p className="mt-1 text-xs text-gray-500">
            Daffar Tours and Travel Ltd
          </p>

        </div>

      </div>

    </div>


    {/* REVIEW CONTENT */}
    <div className="mt-14 grid gap-6 lg:grid-cols-3">

      {/* REVIEW CARD 1 */}
      <div className="rounded-[1.5rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white">
              G
            </div>

            <div>

              <p className="font-bold text-[#0b4224]">
                Google Traveler
              </p>

              <p className="text-xs text-gray-400">
                Verified Google Review
              </p>

            </div>

          </div>

          <span className="text-lg text-[#dba33a]">
            ★★★★★
          </span>

        </div>

        <p className="mt-6 text-sm leading-7 text-gray-600">
          Discover experiences shared by travelers who have explored
          Kenya and East Africa with Daffar Tours and Travel.
        </p>

      </div>


      {/* REVIEW CARD 2 */}
      <div className="rounded-[1.5rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white">
              G
            </div>

            <div>

              <p className="font-bold text-[#0b4224]">
                Traveler Experience
              </p>

              <p className="text-xs text-gray-400">
                Google Reviews
              </p>

            </div>

          </div>

          <span className="text-lg text-[#dba33a]">
            ★★★★★
          </span>

        </div>

        <p className="mt-6 text-sm leading-7 text-gray-600">
          See more experiences, feedback and recommendations from
          guests who have travelled with our team.
        </p>

      </div>


      {/* REVIEW CARD 3 */}
      <div className="rounded-[1.5rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white">
              G
            </div>

            <div>

              <p className="font-bold text-[#0b4224]">
                Your Experience Matters
              </p>

              <p className="text-xs text-gray-400">
                Daffar Tours and Travel
              </p>

            </div>

          </div>

          <span className="text-lg text-[#dba33a]">
            ★★★★★
          </span>

        </div>

        <p className="mt-6 text-sm leading-7 text-gray-600">
          Planning your next adventure? Read our latest Google reviews
          and see why travelers choose Daffar Tours and Travel.
        </p>

      </div>

    </div>


    {/* ACTION BUTTONS */}
    {/* =====================================================
    GOOGLE REVIEW BUTTONS
===================================================== */}

<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

  {/* VIEW REVIEWS */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJLTXRSCwRLxgRe3ybbA23-UQ"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      w-full
      items-center
      justify-center
      gap-2
      rounded-full
      bg-[#0b4224]
      px-7
      py-4
      text-sm
      font-bold
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#176b35]
      hover:shadow-xl
      sm:w-auto
    "
  >
    View Google Reviews

    <span className="text-[#dba33a]">
      →
    </span>
  </a>


  {/* WRITE A REVIEW */}
  <a
    href="https://search.google.com/local/writereview?placeid=ChIJLTXRSCwRLxgRe3ybbA23-UQ"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      w-full
      items-center
      justify-center
      gap-2
      rounded-full
      border
      border-[#0b4224]/20
      bg-white
      px-7
      py-4
      text-sm
      font-bold
      text-[#0b4224]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#dba33a]
      hover:text-[#dba33a]
      hover:shadow-lg
      sm:w-auto
    "
  >
    Write a Review

    <span className="text-[#dba33a]">
      ★
    </span>
  </a>

</div>


    {/* SMALL LOCATION NOTE */}
    <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-gray-500">

      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#dba33a]" />

      <span>
        Daffar Tours and Travel Ltd · Muindi Mbingu St, Nairobi
      </span>

    </div>

  </div>

</section>
```

      {/* ======================================================
          FINAL BOOKING CTA
      ====================================================== */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b4224] px-6 py-12 shadow-2xl sm:px-10 lg:px-16 lg:py-16">

          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#dba33a]/10 blur-3xl" />

          <div className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="text-left">

              <p className="text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
                Ready To Travel?
              </p>

              <h2 className="mt-3 text-3xl font-serif font-bold text-white sm:text-4xl lg:text-5xl">

                Let's Plan Your{" "}

                <span className="text-[#dba33a]">
                  Next Adventure.
                </span>

              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Speak to our travel team and start creating your perfect
                African journey.
              </p>

            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#dba33a] px-8 py-4 font-bold text-[#07351d] shadow-xl transition hover:-translate-y-1 hover:bg-[#e9b84f]"
            >
              Start Planning

              <span>
                →
              </span>

            </Link>

          </div>

        </div>

      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="overflow-hidden bg-[#082D19] text-white">

        <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-12">

          {/* DECORATIVE BACKGROUND */}

          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#F39A08]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />

          <div className="relative z-10">

            {/* ==================================================
                FOOTER MAIN
            ================================================== */}

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">

              {/* BRAND */}

              <div>

                <Link
                  to="/"
                  className="group inline-block"
                >

                  <h2 className="font-serif text-3xl font-bold text-white transition-colors group-hover:text-[#F39A08] sm:text-4xl">
                    Daffar
                  </h2>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-[#F39A08]">
                    Tours & Travel
                  </p>

                </Link>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                  Discover Africa through unforgettable safari adventures,
                  authentic cultural experiences, breathtaking landscapes
                  and carefully crafted journeys.
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

              <FooterColumn title="Explore">

                <FooterLink to="/">
                  Home
                </FooterLink>

                <FooterLink to="/about">
                  About Us
                </FooterLink>

                <FooterLink to="/safaris">
                  Safaris
                </FooterLink>

                <FooterLink to="/destinations">
                  Destinations
                </FooterLink>

                <FooterLink to="/activities">
                  Activities
                </FooterLink>

                <FooterLink to="/contact">
                  Contact
                </FooterLink>

              </FooterColumn>

              {/* DISCOVER */}

              <FooterColumn title="Discover">

                <FooterLink to="/communitywork">
                  Community Work
                </FooterLink>

                <FooterLink to="/tourafricablog">
                  Tour Africa Blog
                </FooterLink>

                <FooterLink to="/faqs">
                  FAQs
                </FooterLink>

                <FooterLink to="/safaris">
                  Tailor-Made Safaris
                </FooterLink>

                <FooterLink to="/safaris">
                  Honeymoon Safaris
                </FooterLink>

                <FooterLink to="/contact">
                  Plan Your Trip
                </FooterLink>

              </FooterColumn>

              {/* CONTACT */}

              <div>

                <FooterHeading>
                  Contact Us
                </FooterHeading>

                <div className="space-y-4">

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
                        className="mt-1 block text-sm text-white/60 transition hover:text-[#F39A08]"
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
                        className="mt-1 block text-sm text-white/60 transition hover:text-[#F39A08]"
                      >
                        +254708164662
                      </a>

                    </div>

                  </div>

                  {/* WHATSAPP */}

                  

                </div>

              </div>

            </div>

            {/* ==================================================
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

      
    </main>
  );
}

/* ============================================================
   EXPORT
============================================================ */

export default Home;