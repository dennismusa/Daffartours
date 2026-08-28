import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image17 from "../assets/image17.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import image16 from "../assets/image16.jpg";
import kenya from "../assets/kenya.jpg";
import amboseli from "../assets/amboseli.jpg";

// ============================================================
// SMALL COMPONENTS
// ============================================================

function SectionLabel({ children, dark = false }) {
  return (
    <span
      className={`text-xs font-bold uppercase tracking-[3px] ${
        dark ? "text-[#F5A623]" : "text-[#F5A623]"
      }`}
    >
      {children}
    </span>
  );
}

function SectionIntro({ label, title, text }) {
  return (
    <div className="max-w-3xl">
      <SectionLabel>{label}</SectionLabel>

      <h2
        className="mt-4 text-3xl sm:text-4xl lg:text-5xl
        font-serif font-bold text-[#0b4224]"
      >
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-gray-600 leading-7">
        {text}
      </p>
    </div>
  );
}

function StoryPoint({ number, title, text }) {
  return (
    <div className="flex gap-3">
      <span
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center
        rounded-full bg-[#0b4224] text-xs font-bold text-[#F5A623]"
      >
        {number}
      </span>

      <div>
        <h3 className="font-bold text-[#0b4224]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function GuideCard({ number, title, text }) {
  return (
    <div
      className="group rounded-3xl border border-[#eee9dd] bg-[#F7F5EE]
      p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#0b4224]"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full
        bg-[#0b4224] font-bold text-[#F5A623] transition
        group-hover:bg-[#F5A623] group-hover:text-[#0b4224]"
      >
        {number}
      </div>

      <h3
        className="mt-6 text-xl font-bold text-[#0b4224] transition
        group-hover:text-white"
      >
        {title}
      </h3>

      <p
        className="mt-3 text-sm leading-7 text-gray-600 transition
        group-hover:text-white/60"
      >
        {text}
      </p>
    </div>
  );
}

function VehicleFeature({ title, text }) {
  return (
    <div className="flex gap-4">
      <div
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center
        rounded-full border border-[#F5A623]/30 font-bold text-[#F5A623]"
      >
        ✓
      </div>

      <div>
        <h3 className="font-bold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-white/50">
          {text}
        </p>
      </div>
    </div>
  );
}

function TermsCard({ number, title, text }) {
  return (
    <div
      className="rounded-2xl border border-gray-200 p-6 transition
      hover:border-[#F5A623]/50 hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-[#F5A623]">
          {number}
        </span>

        <h3 className="font-bold text-[#0b4224]">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-sm leading-7 text-gray-600">
        {text}
      </p>
    </div>
  );
}

// ============================================================
// ABOUT PAGE
// ============================================================

function About() {
  const [activeTeam, setActiveTeam] = useState(0);

  const teamSlides = [
    {
      image: image17,
      title: "The People Behind The Journey",
      text: "Our team works behind the scenes to make every safari carefully planned, comfortable and memorable.",
    },
    {
      image: image16,
      title: "Local Knowledge",
      text: "Our understanding of East Africa helps us create experiences that connect travellers with the destinations they visit.",
    },
    {
      image: kenya,
      title: "Passion For Africa",
      text: "We believe that the best journeys are built around genuine experiences, great service and a love for the outdoors.",
    },
  ];

  // ----------------------------------------------------------
  // TEAM IMAGE SLIDER
  // ----------------------------------------------------------

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTeam((prev) => (prev + 1) % teamSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [teamSlides.length]);

  return (
    <div className="overflow-hidden bg-white text-gray-800">

      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      <section
        className="relative h-[52vh] min-h-[430px] max-h-[600px]
        overflow-hidden"
      >
        {/* BACKGROUND */}

        <img
          src={amboseli}
          alt="Daffar Tours and Travel"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/50" />

        <div
          className="absolute inset-0 bg-gradient-to-r
          from-[#052b18]/95 via-[#052b18]/60 to-transparent"
        />

        <div
          className="absolute inset-x-0 bottom-0 h-40
          bg-gradient-to-t from-black/70 to-transparent"
        />

        {/* HERO CONTENT */}

        <div
          className="relative z-10 mx-auto flex h-full max-w-7xl
          items-center px-5 sm:px-8 lg:px-12"
        >
          <div className="max-w-2xl text-white">

            <div
              className="inline-flex items-center gap-3 rounded-full
              border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl"
            >
              <span
                className="h-2 w-2 rounded-full bg-[#F5A623]
                animate-pulse"
              />

              <span
                className="text-[10px] font-bold uppercase tracking-[3px]
                text-white/80 sm:text-xs"
              >
                About Daffar Tours & Travel
              </span>
            </div>

            <h1
              className="mt-6 text-4xl font-serif font-bold leading-tight
              sm:text-5xl lg:text-6xl"
            >
              More Than A Safari.
              <span className="block text-[#F5A623]">
                A Journey Into Africa.
              </span>
            </h1>

            <p
              className="mt-5 max-w-xl text-sm leading-7 text-white/75
              sm:text-base"
            >
              Get to know the people, passion and experience behind
              Daffar Tours & Travel.
            </p>
          </div>
        </div>

        {/* BOTTOM LABEL */}

        <div
          className="absolute bottom-7 right-7 hidden items-center gap-3
          text-white/60 lg:flex"
        >
          <span className="text-[9px] uppercase tracking-[3px]">
            Our Story
          </span>

          <div className="h-px w-12 bg-white/30" />
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="py-20 lg:py-28">
        <div
          className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
        >
          <div
            className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]
            lg:gap-20"
          >
            {/* IMAGE */}

            <div className="relative">
              <div
                className="relative h-[420px] overflow-hidden rounded-[2rem]
                shadow-2xl sm:h-[520px]"
              >
                <img
                  src={image17}
                  alt="Daffar Tours and Travel"
                  className="h-full w-full object-cover transition-transform
                  duration-1000 hover:scale-105"
                />
              </div>

              {/* FLOATING CARD */}

              <div
                className="absolute bottom-6 left-5 max-w-[230px] rounded-2xl
                bg-white p-5 shadow-2xl animate-[float_4s_ease-in-out_infinite]
                sm:left-7"
              >
                <div className="text-2xl font-black text-[#F5A623]">
                  Africa
                </div>

                <p className="mt-1 text-sm font-bold text-[#0b4224]">
                  Our home. Your adventure.
                </p>
              </div>
            </div>

            {/* CONTENT */}

            <div>
              <SectionLabel>Our Story</SectionLabel>

              <h2
                className="mt-4 text-3xl font-serif font-bold leading-tight
                text-[#0b4224] sm:text-4xl lg:text-5xl"
              >
                Creating Meaningful
                <span className="block text-[#F5A623]">
                  African Experiences.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                At Daffar Tours & Travel, we believe travel should be more
                than simply moving from one destination to another.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                A safari is about the first sight of wildlife across the
                savannah, the sound of nature in the distance, the people
                you meet and the stories you carry home.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Our goal is to help travellers discover Kenya and East
                Africa through carefully planned journeys that combine
                adventure, comfort, culture and authentic experiences.
              </p>

              {/* HIGHLIGHTS */}

              <div
                className="mt-8 grid gap-5 sm:grid-cols-2"
              >
                <StoryPoint
                  number="01"
                  title="Authentic Journeys"
                  text="Experiences designed around the destination."
                />

                <StoryPoint
                  number="02"
                  title="Personal Service"
                  text="Travel planning built around your needs."
                />

                <StoryPoint
                  number="03"
                  title="Local Experience"
                  text="Knowledge of the places we call home."
                />

                <StoryPoint
                  number="04"
                  title="Responsible Travel"
                  text="Supporting people, communities and nature."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OFFICE TEAM
      ====================================================== */}

      <section className="bg-[#F7F5EE] py-20 lg:py-28">
        <div
          className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
        >
          <div
            className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]"
          >
            {/* TEXT */}

            <div>
              <SectionLabel>Office Team</SectionLabel>

              <h2
                className="mt-4 text-3xl font-serif font-bold text-[#0b4224]
                sm:text-4xl lg:text-5xl"
              >
                The People Behind
                <span className="block text-[#F5A623]">
                  Your Journey.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                From the first inquiry to the final day of your trip,
                our office team works to make the planning process smooth
                and straightforward.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We coordinate itineraries, accommodation, transport,
                activities and other details so you can concentrate on
                enjoying your journey.
              </p>

              <div
                className="mt-8 inline-flex items-center gap-3 rounded-full
                bg-[#0b4224] px-5 py-3 text-sm font-bold text-white"
              >
                <span className="text-[#F5A623]">
                  ●
                </span>

                Your Journey, Carefully Planned
              </div>
            </div>

            {/* IMAGE SLIDER */}

            <div className="relative">
              <div
                className="relative h-[430px] overflow-hidden rounded-[2rem]
                shadow-2xl sm:h-[500px]"
              >
                {teamSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === activeTeam
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />

                    <div
                      className="absolute inset-x-0 bottom-0 bg-gradient-to-t
                      from-black/80 to-transparent p-7"
                    >
                      <h3
                        className="text-2xl font-serif font-bold text-white"
                      >
                        {slide.title}
                      </h3>

                      <p
                        className="mt-2 max-w-lg text-sm text-white/70"
                      >
                        {slide.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CONTROLS */}

              <div
                className="absolute bottom-6 right-6 flex gap-2"
              >
                {teamSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTeam(index)}
                    aria-label={`Show team slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      activeTeam === index
                        ? "w-9 bg-[#F5A623]"
                        : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR GUIDES
      ====================================================== */}

      <section className="py-20 lg:py-28">
        <div
          className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
        >
          <SectionIntro
            label="Our Guides"
            title="Your Eyes In The Wild"
            text="Our guides play an important role in turning a safari into an experience you will remember."
          />

          <div
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            <GuideCard
              number="01"
              title="Wildlife Knowledge"
              text="Helping you understand the animals, ecosystems and landscapes you encounter."
            />

            <GuideCard
              number="02"
              title="Local Insight"
              text="Discover destinations through the perspective of people who know the region."
            />

            <GuideCard
              number="03"
              title="Safari Experience"
              text="From game drives to mountain adventures, our guides help make each day count."
            />
          </div>

          {/* PHOTO */}

          <div
            className="group relative mt-10 h-[300px] overflow-hidden rounded-[2rem]
            sm:h-[400px]"
          >
            <img
              src={image16}
              alt="Safari guides"
              className="h-full w-full object-cover transition-transform
              duration-1000 group-hover:scale-105"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-black/75
              via-transparent to-transparent"
            />

            <div
              className="absolute bottom-7 left-7 right-7"
            >
              <p
                className="text-xs font-bold uppercase tracking-[3px]
                text-[#F5A623]"
              >
                Meet The Team
              </p>

              <h3
                className="mt-2 text-2xl font-serif font-bold text-white
                sm:text-3xl"
              >
                Experienced Guides. Unforgettable Stories.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SAFARI VEHICLES
      ====================================================== */}

      <section className="bg-[#082d19] py-20 lg:py-28">
        <div
          className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
        >
          <div
            className="grid items-center gap-14 lg:grid-cols-2"
          >
            {/* VEHICLE IMAGE */}

            <div
              className="relative h-[400px] overflow-hidden rounded-[2rem]
              sm:h-[500px]"
            >
              <img
                src={cruiser2}
                alt="Daffar safari vehicle"
                className="h-full w-full object-cover transition-transform
                duration-1000 hover:scale-105"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t
                from-black/70 via-transparent to-transparent"
              />

              <div
                className="absolute bottom-7 left-7"
              >
                <p
                  className="text-xs font-bold uppercase tracking-[3px]
                  text-[#F5A623]"
                >
                  Safari Transport
                </p>

                <h3
                  className="mt-2 text-2xl font-serif font-bold text-white
                  sm:text-3xl"
                >
                  Built For The Adventure
                </h3>
              </div>
            </div>

            {/* CONTENT */}

            <div>
              <SectionLabel dark>
                Our Safari Vehicles
              </SectionLabel>

              <h2
                className="mt-4 text-3xl font-serif font-bold text-white
                sm:text-4xl lg:text-5xl"
              >
                Explore With
                <span className="block text-[#F5A623]">
                  Comfort & Confidence.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-white/65">
                Safari travel requires vehicles that are comfortable,
                practical and suited to the terrain. Our safari transport
                is selected with the experience of the traveller in mind.
              </p>

              <div className="mt-9 space-y-5">
                <VehicleFeature
                  title="Safari-Ready"
                  text="Designed for game drives and exploring diverse terrain."
                />

                <VehicleFeature
                  title="Comfortable Travel"
                  text="Enjoy long drives while taking in the landscapes around you."
                />

                <VehicleFeature
                  title="Great Viewing"
                  text="Designed to help you enjoy wildlife encounters and photography."
                />

                <VehicleFeature
                  title="Experienced Drivers"
                  text="Travel with professionals familiar with safari routes."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TERMS & CONDITIONS
      ====================================================== */}

      <section className="py-20 lg:py-28">
        <div
          className="mx-auto max-w-5xl px-5 sm:px-8"
        >
          <div className="text-center">
            <SectionLabel>
              Terms & Conditions
            </SectionLabel>

            <h2
              className="mt-4 text-3xl font-serif font-bold text-[#0b4224]
              sm:text-4xl"
            >
              Important Travel Information
            </h2>

            <p
              className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600"
            >
              Before confirming your journey, we recommend reviewing our
              terms and conditions so you understand the arrangements
              surrounding your safari.
            </p>
          </div>

          <div
            className="mt-12 grid gap-5 md:grid-cols-2"
          >
            <TermsCard
              number="01"
              title="Bookings & Payments"
              text="Booking requirements, deposits and payment arrangements will be confirmed during the reservation process."
            />

            <TermsCard
              number="02"
              title="Cancellation"
              text="Cancellation policies may vary depending on the safari, accommodation and suppliers involved."
            />

            <TermsCard
              number="03"
              title="Travel Documents"
              text="Travellers are responsible for ensuring they have valid passports, visas and other required documents."
            />

            <TermsCard
              number="04"
              title="Travel Changes"
              text="Safari arrangements may occasionally change because of weather, road conditions, park regulations or other circumstances."
            />
          </div>

          {/* NOTICE */}

          <div
            className="mt-8 rounded-2xl border border-[#e9e3d5]
            bg-[#F7F5EE] p-6"
          >
            <div className="flex gap-4">
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center
                justify-center rounded-full bg-[#0b4224] font-bold
                text-[#F5A623]"
              >
                !
              </div>

              <div>
                <h3 className="font-bold text-[#0b4224]">
                  Please Note
                </h3>

                <p
                  className="mt-2 text-sm leading-7 text-gray-600"
                >
                  The final terms applicable to your booking will be
                  communicated by Daffar Tours & Travel before confirmation.
                  This section can be expanded with the company's official
                  terms and conditions once provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem]
          bg-[#0b4224] px-6 py-14 sm:px-10 lg:px-16 lg:py-16"
        >
          {/* DECORATION */}

          <div
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full
            bg-[#F5A623]/10 blur-3xl"
          />

          <div
            className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full
            bg-white/5 blur-3xl"
          />

          <div
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            <p
              className="text-xs font-bold uppercase tracking-[3px]
              text-[#F5A623]"
            >
              Start Your Journey
            </p>

            <h2
              className="mt-4 text-3xl font-serif font-bold text-white
              sm:text-4xl lg:text-5xl"
            >
              Let's Create Your
              <span className="text-[#F5A623]">
                {" "}African Story.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              Tell us what kind of experience you are looking for and let
              our team help you plan the journey.
            </p>

            <div
              className="mt-8 flex flex-col justify-center gap-3
              sm:flex-row"
            >
              <Link
                to="/contact"
                className="rounded-full bg-[#F5A623] px-8 py-4 font-bold
                text-[#07351d] shadow-xl transition hover:-translate-y-1"
              >
                Plan My Journey →
              </Link>

              <a
                href="https://wa.me/+254708164662"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/10
                px-8 py-4 font-bold text-white transition
                hover:bg-white hover:text-[#07351d]"
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
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-8px);
            }
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

export default About;