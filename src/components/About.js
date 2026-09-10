/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image17 from "../assets/image17.jpg";
import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import image16 from "../assets/image16.jpg";
import kenya from "../assets/kenya.jpg";
import amboseli from "../assets/amboseli.jpg";

/* ============================================================
   SMALL REUSABLE COMPONENTS
============================================================ */

const SectionLabel = ({ children, dark = false }) => (
  <span
    className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] ${
      dark ? "text-[#F5A623]" : "text-[#F5A623]"
    }`}
  >
    <span className="h-px w-8 bg-[#F5A623]" />
    {children}
  </span>
);

const SectionIntro = ({ label, title, text }) => (
  <div className="max-w-3xl">
    <SectionLabel>{label}</SectionLabel>

    <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
      {title}
    </h2>

    {text && (
      <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
        {text}
      </p>
    )}
  </div>
);

const StoryPoint = ({ number, title, text }) => (
  <div className="group flex gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F7F5EE] text-xs font-bold text-[#0b4224] transition duration-300 group-hover:bg-[#0b4224] group-hover:text-white">
      {number}
    </div>

    <div>
      <h3 className="font-serif text-xl font-semibold text-[#082D19]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-gray-600">{text}</p>
    </div>
  </div>
);

const GuideCard = ({ number, title, text }) => (
  <div className="group rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
    <div className="flex items-center justify-between">
      <span className="font-serif text-4xl text-[#0b4224]/15">
        {number}
      </span>

      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F5EE] text-[#0b4224] transition duration-300 group-hover:bg-[#0b4224] group-hover:text-white">
        →
      </span>
    </div>

    <h3 className="mt-7 font-serif text-2xl font-semibold text-[#082D19]">
      {title}
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>
  </div>
);

const VehicleFeature = ({ title, text }) => (
  <div className="group border-b border-white/10 py-5 first:pt-0 last:border-0">
    <div className="flex gap-4">
      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F5A623]/40 text-xs text-[#F5A623] transition group-hover:bg-[#F5A623] group-hover:text-[#082D19]">
        ✓
      </div>

      <div>
        <h3 className="font-serif text-xl text-white">{title}</h3>
        <p className="mt-1 text-sm leading-7 text-white/60">{text}</p>
      </div>
    </div>
  </div>
);

const TermsCard = ({ number, title, text }) => (
  <div className="rounded-[1.75rem] border border-gray-100 bg-[#F7F5EE]/60 p-6">
    <span className="text-xs font-bold tracking-[2px] text-[#F5A623]">
      {number}
    </span>

    <h3 className="mt-4 font-serif text-2xl font-semibold text-[#082D19]">
      {title}
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>
  </div>
);

const WhyChooseCard = ({ number, icon, title, text }) => (
  <div className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F5A623]/5 transition duration-500 group-hover:scale-150" />

    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b4224] text-2xl text-[#F5A623] shadow-lg">
          {icon}
        </div>

        <span className="font-serif text-5xl text-[#0b4224]/10">
          {number}
        </span>
      </div>

      <h3 className="mt-7 font-serif text-2xl font-semibold text-[#082D19]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>

      <div className="mt-6 h-px w-10 bg-[#F5A623] transition-all duration-500 group-hover:w-20" />
    </div>
  </div>
);

/* ============================================================
   ABOUT PAGE
============================================================ */

const teamSlides = [
  {
    image: image17,
    title: "The People Behind The Journey",
    text: "From the first inquiry to the final day of your safari, our team works behind the scenes to make every journey feel seamless.",
  },
  {
    image: image16,
    title: "Local Knowledge",
    text: "Our understanding of East Africa helps us create journeys that connect travellers with remarkable landscapes, wildlife and communities.",
  },
  {
    image: kenya,
    title: "Passion For Africa",
    text: "We are passionate about creating genuine African experiences while delivering the warmth, care and attention our guests deserve.",
  },
];

const About = () => {
  const [activeTeam, setActiveTeam] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTeam((prev) => (prev + 1) % teamSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-white text-gray-800">

      {/* ============================================================
          PREMIUM HERO
      ============================================================ */}
      <section className="relative h-[58vh] min-h-[460px] max-h-[650px] overflow-hidden">
        <img
          src={amboseli}
          alt="Daffar Tours and Travel"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052b18]/95 via-[#052b18]/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#F5A623]" />
              <span className="text-xs font-bold uppercase tracking-[2.5px] text-white">
                About Daffar Tours & Travel
              </span>
            </div>

            <h1 className="font-serif text-5xl font-medium leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              More Than A Safari.
              <span className="mt-2 block text-[#F5A623]">
                A Journey Into Africa.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Get to know the people, passion and experience behind
              Daffar Tours & Travel.
            </p>
          </div>

          <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-white/70 lg:flex">
            <span className="h-px w-10 bg-[#F5A623]" />
            Our Story
          </div>
        </div>
      </section>


      {/* ============================================================
          OUR STORY
      ============================================================ */}
     ```jsx
{/* ============================================================
    OUR STORY
============================================================ */}
<section
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* Background Decoration */}
  <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#F5A623]/[0.06] blur-[120px]" />
  <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#082D19]/[0.04] blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* ============================================================
        TOP INTRO
    ============================================================ */}
    <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

      <div>
        <SectionLabel>Our Story</SectionLabel>

        <h2 className="mt-5 max-w-2xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#082D19] sm:text-5xl lg:text-6xl">
          Go Further.
          <span className="block text-[#F5A623]">
            Feel More. Discover Africa.
          </span>
        </h2>
      </div>

      <div className="max-w-xl lg:ml-auto">
        <p className="text-lg leading-8 text-gray-600">
          There are places you visit. And then there are places that become
          part of you. For us, Africa is the second kind.
        </p>
      </div>

    </div>


    {/* ============================================================
        MAIN STORY
    ============================================================ */}
    <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">

      {/* ============================================================
          IMAGE
      ============================================================ */}
      <div className="relative lg:sticky lg:top-28">

        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
          <img
            src={image17}
            alt="Daffar Tours and Travel team"
            className="h-[440px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[560px]"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/70 via-transparent to-transparent" />

          {/* Image caption */}
          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
              Daffar Tours & Travel
            </p>

            <p className="mt-2 max-w-sm font-serif text-2xl leading-tight text-white sm:text-3xl">
              Africa is not just where we work.
              <span className="block text-white/70">
                It is home.
              </span>
            </p>

          </div>
        </div>


        {/* Floating Badge */}
        <div className="absolute -bottom-6 right-5 rounded-2xl bg-[#082D19] px-6 py-5 text-white shadow-2xl sm:-right-6">

          <span className="block font-serif text-3xl text-[#F5A623]">
            Go Further
          </span>

          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
            Into the heart of Africa
          </span>

        </div>

      </div>


      {/* ============================================================
          STORY CONTENT
      ============================================================ */}
      <div className="pt-2 lg:pt-5">

        <div className="space-y-6 text-base leading-8 text-gray-600">

          <p>
            At Daffar Tours and Travel, we believe an African safari should
            never feel like simply ticking destinations off a bucket list.
            It should be the kind of journey you remember years later.
          </p>

          <p>
            The golden light of an African sunrise. The sound of elephants
            moving through the bush. A lion appearing silently across the
            savannah. A Maasai story shared around a fire. Or the breathtaking
            moment you realise you are witnessing something truly wild.
          </p>

          {/* Highlight Quote */}
          <div className="my-8 border-l-2 border-[#F5A623] pl-6">
            <p className="font-serif text-2xl leading-relaxed text-[#082D19] sm:text-3xl">
              “Go Further. Further into the wild. Further into discovery.
              Further into the heart of Africa.”
            </p>
          </div>

          <p>
            This is why we created Daffar — to help you go beyond the ordinary
            and into the Africa you have always dreamed of experiencing.
          </p>

          <p>
            We know that planning a safari from thousands of miles away can
            feel overwhelming. Which park should you visit? Where should you
            stay? How many nights are enough? When is the best time to travel?
            What route makes the most sense?
          </p>

          <p>
            These are the details we love getting right. With our deep local
            expertise, professional guides, custom 4x4 safari vehicles, and
            reliable operational network, we take care of the details that
            matter, so you can simply look forward to your adventure.
          </p>

        </div>


        {/* ============================================================
            WOMEN-OWNED FEATURE
        ============================================================ */}
        <div className="mt-9 rounded-3xl border border-[#082D19]/10 bg-[#F8F6F1] p-6 sm:p-7">

          <div className="flex gap-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#082D19] text-sm font-semibold text-[#F5A623]">
              ✦
            </div>

            <div>
              <h3 className="font-serif text-xl text-[#082D19]">
                Proudly Women-Owned
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Women make up a large percentage of our team. We are passionate
                about creating opportunities for women to lead, grow, and build
                meaningful careers in African tourism. Their dedication,
                warmth, and attention to detail are part of what makes the
                Daffar experience special.
              </p>
            </div>

          </div>

        </div>


        {/* ============================================================
            CLOSING
        ============================================================ */}
        <p className="mt-8 text-base leading-8 text-gray-600">
          Whether it is your first safari, a honeymoon, a family adventure,
          or a lifelong dream finally coming true, we design every journey
          with care, honesty, and genuine passion.
        </p>

        <p className="mt-5 font-serif text-xl leading-8 text-[#082D19]">
          Because we don't just want you to see Africa. We want you to go
          further, feel more, and return home with a story that stays with
          you forever.
        </p>

      </div>

    </div>


    {/* ============================================================
        OUR VALUES
    ============================================================ */}
    <div className="mt-20 border-t border-[#082D19]/10 pt-10 lg:mt-24">

      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
            What We Believe
          </p>

          <h3 className="mt-2 font-serif text-3xl text-[#082D19] sm:text-4xl">
            The Daffar Difference
          </h3>
        </div>

        <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-right">
          Every journey is guided by the principles that shape how we
          experience and share Africa.
        </p>

      </div>


      {/* Values */}
      <div className="grid divide-y divide-[#082D19]/10 border-y border-[#082D19]/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

        {/* 01 */}
        <div className="group py-7 sm:px-7 lg:first:pl-0 lg:last:pr-0">
          <span className="font-serif text-2xl text-[#F5A623]">
            01
          </span>

          <h4 className="mt-4 text-base font-semibold text-[#082D19]">
            Go Further
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Going beyond ordinary tourism to discover meaningful African
            experiences.
          </p>
        </div>


        {/* 02 */}
        <div className="group py-7 sm:px-7 lg:first:pl-7 lg:last:pr-0">
          <span className="font-serif text-2xl text-[#F5A623]">
            02
          </span>

          <h4 className="mt-4 text-base font-semibold text-[#082D19]">
            Local Expertise
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Deep knowledge of the destinations, wildlife, cultures and
            communities we call home.
          </p>
        </div>


        {/* 03 */}
        <div className="group py-7 sm:px-7 lg:first:pl-7 lg:last:pr-0">
          <span className="font-serif text-2xl text-[#F5A623]">
            03
          </span>

          <h4 className="mt-4 text-base font-semibold text-[#082D19]">
            Women-Owned
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Creating opportunities for women to lead, grow and thrive in
            African tourism.
          </p>
        </div>


        {/* 04 */}
        <div className="group py-7 sm:px-7 lg:first:pl-7 lg:last:pr-0">
          <span className="font-serif text-2xl text-[#F5A623]">
            04
          </span>

          <h4 className="mt-4 text-base font-semibold text-[#082D19]">
            Travel With Purpose
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Thoughtful journeys created with care, honesty and genuine
            passion.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>





{/* ============================================================
    OUR EXPERTISE
============================================================ */}
<section
  id="our-expertise"
  className="relative overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 lg:py-32"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* SECTION INTRO */}
    <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">

      <div>
        <SectionLabel>Our Expertise</SectionLabel>

        <h2 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#082D19] sm:text-5xl lg:text-6xl">
          Rooted in East Africa.
          <span className="block text-[#F5A623]">
            Experienced beyond.
          </span>
        </h2>
      </div>

      <p className="max-w-2xl text-base leading-8 text-gray-600 lg:text-lg">
        With offices in Nairobi, Kenya, and Arusha, Tanzania, Daffar Tours
        and Travel is proudly rooted in East Africa. We create and operate
        unforgettable safari experiences across Kenya, Tanzania, Uganda, and
        Rwanda, combining local knowledge, thoughtful planning, and
        professional service.
      </p>

    </div>


    {/* ============================================================
        IMAGE + INTRODUCTION
    ============================================================ */}
    <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-[#082D19] lg:grid-cols-[1.15fr_0.85fr]">

      {/* IMAGE */}
      <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">

        <img
          src={cruiser2}
          alt="Safari vehicle overlooking the African wilderness"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#082D19]/80 via-transparent to-transparent" />

        {/* Image Caption */}
        <div className="absolute bottom-7 left-7 right-7 sm:left-10 sm:right-10">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
              East Africa
            </p>

            <p className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">
              Where local knowledge becomes unforgettable journeys.
            </p>
          </div>
        </div>
      </div>


      {/* CONTENT */}
      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

        <p className="text-base leading-8 text-white/75">
          We understand that planning a safari from thousands of miles away
          is a big decision. You want people who know the destinations,
          understand what makes a safari special, and can be trusted to take
          care of the details.
        </p>

        <p className="mt-6 text-base leading-8 text-white/75">
          We offer tailor-made safaris ranging from
          <span className="font-semibold text-white">
            {" "}budget and mid-range to luxury and luxury-plus,
          </span>{" "}
          allowing you to choose an experience that suits your budget while
          ensuring we deliver on every service we promise.
        </p>

        <div className="mt-9 h-px bg-white/10" />

        {/* Safari styles */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A623]">
            Safari Styles
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Budget",
              "Mid-Range",
              "Luxury",
              "Luxury Plus",
            ].map((style) => (
              <span
                key={style}
                className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/80"
              >
                {style}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>


    {/* ============================================================
        EXPERTISE DETAILS
    ============================================================ */}
    <div className="mt-16 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

      {/* LEFT */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A623]">
          Knowledge that matters
        </p>

        <h3 className="mt-4 max-w-md font-serif text-3xl leading-tight text-[#082D19] sm:text-4xl">
          More than planning a safari.
          <span className="block text-gray-400">
            We know how to bring it to life.
          </span>
        </h3>
      </div>


      {/* RIGHT */}
      <div className="space-y-6 text-base leading-8 text-gray-600">

        <p>
          Our experienced travel professionals and safari guides bring
          extensive knowledge of East Africa's wildlife, landscapes,
          cultures, and communities.
        </p>

        <p>
          Fluent in English and Swahili, with some also speaking German,
          Spanish, French, and Italian, our guides combine expert knowledge
          with warm hospitality and excellent communication, bringing the
          stories and wonders of East Africa to life.
        </p>

        <p>
          We carefully select camps, lodges, hotels, and safari experiences
          based on each client's itinerary, preferences, and budget. Whether
          you prefer a comfortable budget stay, a well-appointed mid-range
          lodge, or an exceptional luxury property, we tailor each journey
          to suit you.
        </p>

        <p>
          From your first enquiry to your return home, our team remains
          attentive to the details that matter, providing dependable support
          and peace of mind throughout your journey.
        </p>

      </div>

    </div>


    {/* ============================================================
        DESTINATION STRIP
    ============================================================ */}
    <div className="mt-16 border-y border-[#082D19]/10 py-8">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
          Our East African Reach
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-[#082D19]">
          <span>Kenya</span>
          <span>Tanzania</span>
          <span>Uganda</span>
          <span>Rwanda</span>
        </div>

      </div>

    </div>

  </div>
</section>


{/* ============================================================
    OUR SAFARI VEHICLES
============================================================ */}
<section
  id="our-safari-vehicles"
  className="relative overflow-hidden bg-[#082D19] py-20 text-white sm:py-24 lg:py-32"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* HEADER */}
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">

      <div>
        <SectionLabel>Our Safari Vehicles</SectionLabel>

        <h2 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          Built for the wild.
          <span className="block text-[#F5A623]">
            Designed around you.
          </span>
        </h2>
      </div>

      <p className="max-w-xl text-base leading-8 text-white/65 lg:text-lg">
        Our 2018–2024 Toyota Land Cruiser 4x4 safari vehicles are specially
        adapted for comfort, safety, photography, and East Africa's diverse
        terrain.
      </p>

    </div>


    {/* ============================================================
        MAIN VEHICLE SHOWCASE
    ============================================================ */}
    <div className="relative mt-16">

      {/* IMAGE */}
      <div className="relative h-[430px] overflow-hidden rounded-[2rem] sm:h-[520px] lg:h-[650px]">

        <img
          src={cruiser1}
          alt="Daffar safari Land Cruiser in the African wilderness"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Image text */}
        <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
            Your view of Africa
          </p>

          <h3 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Every seat is a front-row seat to the wild.
          </h3>

        </div>
      </div>


      {/* ============================================================
          FLOATING FEATURE PANEL
      ============================================================ */}
      <div className="relative mx-5 -mt-10 rounded-3xl border border-white/10 bg-[#0D4825] p-7 shadow-2xl sm:mx-8 sm:p-9 lg:absolute lg:bottom-8 lg:right-8 lg:mt-0 lg:w-[440px]">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A623]">
          Vehicle Features
        </p>

        <div className="mt-6 divide-y divide-white/10">

          <div className="flex gap-5 py-5 first:pt-0">
            <span className="font-serif text-2xl text-[#F5A623]">
              01
            </span>

            <div>
              <h4 className="font-semibold text-white">
                Pop-Up Roof
              </h4>

              <p className="mt-1 text-sm leading-6 text-white/55">
                Panoramic wildlife viewing and unobstructed photography.
              </p>
            </div>
          </div>

          <div className="flex gap-5 py-5">
            <span className="font-serif text-2xl text-[#F5A623]">
              02
            </span>

            <div>
              <h4 className="font-semibold text-white">
                Six Guest Capacity
              </h4>

              <p className="mt-1 text-sm leading-6 text-white/55">
                Spacious seating with a window seat for everyone.
              </p>
            </div>
          </div>

          <div className="flex gap-5 py-5">
            <span className="font-serif text-2xl text-[#F5A623]">
              03
            </span>

            <div>
              <h4 className="font-semibold text-white">
                Onboard Charging
              </h4>

              <p className="mt-1 text-sm leading-6 text-white/55">
                Charging ports with UK-style sockets for your devices.
              </p>
            </div>
          </div>

          <div className="flex gap-5 pt-5">
            <span className="font-serif text-2xl text-[#F5A623]">
              04
            </span>

            <div>
              <h4 className="font-semibold text-white">
                Maintained & Supported
              </h4>

              <p className="mt-1 text-sm leading-6 text-white/55">
                Rigorously maintained vehicles with backup support for
                additional peace of mind.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>


    {/* ============================================================
        VEHICLE FOOTER
    ============================================================ */}
    <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">

      <p className="max-w-4xl text-lg leading-8 text-white/65 sm:text-xl">
        From the savannahs of Kenya and Tanzania to the remarkable landscapes
        of Uganda and Rwanda, our expertise is knowing how to turn your
        African dream into a journey that feels personal, seamless, and
        unforgettable.
      </p>

      <div className="font-serif text-2xl text-[#F5A623]">
        Go Further with Daffar.
      </div>

    </div>

  </div>
</section>

      {/* ============================================================
          MISSION & VISION
      ============================================================ */}
      

      {/* ============================================================
          WHY CHOOSE DAFFAR
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 lg:py-28">

        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#0b4224]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-3xl">
              <SectionLabel>Why Choose Daffar</SectionLabel>

              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
                Your Journey Deserves
                <span className="block text-[#F5A623]">
                  More Than A Booking.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-gray-600">
              We combine local knowledge, careful planning and personal
              attention to create journeys that feel effortless from
              beginning to end.
            </p>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <WhyChooseCard
              number="01"
              icon="✦"
              title="Local Expertise"
              text="Discover East Africa with people who understand its landscapes, wildlife, cultures and hidden gems."
            />

            <WhyChooseCard
              number="02"
              icon="⌁"
              title="Personalized Journeys"
              text="Your interests come first. We carefully shape itineraries around the experience you want."
            />

            <WhyChooseCard
              number="03"
              icon="◆"
              title="Exceptional Service"
              text="From your first inquiry to your return home, we focus on communication, comfort and attention to detail."
            />

            <WhyChooseCard
              number="04"
              icon="♧"
              title="Responsible Travel"
              text="We believe tourism should protect nature, support communities and create meaningful connections."
            />

          </div>

          {/* PREMIUM STATEMENT */}
          <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#0b4224] p-8 shadow-2xl sm:p-10">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
                  The Daffar Difference
                </span>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  We don't just show you Africa.
                  <span className="block text-[#F5A623]">
                    We help you experience it.
                  </span>
                </h3>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Plan Your Journey →
              </Link>

            </div>
          </div>

        </div>
      </section>


      {/* ============================================================
          OFFICE TEAM
      ============================================================ */}
      {/*

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-10">

          
          <div>
            <SectionLabel>Office Team</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#082D19] sm:text-5xl">
              The People Behind
              <span className="block text-[#F5A623]">
                Your Journey.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              Behind every memorable safari is a team of people working
              carefully to make the experience feel effortless.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              From selecting the right destinations and accommodation to
              arranging transport and activities, we take care of the
              details so you can focus on enjoying Africa.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full bg-[#F7F5EE] px-5 py-3 text-xs font-bold uppercase tracking-[2px] text-[#0b4224]">
              Your Journey, Carefully Planned
            </div>
          </div>

          
          <div className="relative h-[430px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[500px]">

            {teamSlides.map((slide, index) => (
              <div
                key={slide.title}
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#041b10] via-[#041b10]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <span className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
                    Daffar Tours & Travel
                  </span>

                  <h3 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
                    {slide.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}

            
            <div className="absolute right-5 top-5 flex gap-2">
              <button
                onClick={() =>
                  setActiveTeam(
                    (activeTeam - 1 + teamSlides.length) %
                      teamSlides.length
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-[#F5A623] hover:text-[#082D19]"
                aria-label="Previous slide"
              >
                ←
              </button>

              <button
                onClick={() =>
                  setActiveTeam(
                    (activeTeam + 1) % teamSlides.length
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-[#F5A623] hover:text-[#082D19]"
                aria-label="Next slide"
              >
                →
              </button>
            </div>

            
            <div className="absolute bottom-6 right-7 flex gap-2">
              {teamSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeam(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeTeam
                      ? "w-8 bg-[#F5A623]"
                      : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
         */}
       
      {/* ============================================================
          OUR GUIDES
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <SectionIntro
            label="Our Guides"
            title="Your Eyes In The Wild"
            text="Our guides play an important role in turning a safari into an experience you will remember."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <GuideCard
              number="01"
              title="Wildlife Knowledge"
              text="Understand animals, ecosystems and landscapes through guides who know what to look for and where to find it."
            />

            <GuideCard
              number="02"
              title="Local Insight"
              text="Experience destinations from people who understand the communities, culture and character of the region."
            />

            <GuideCard
              number="03"
              title="Safari Experience"
              text="From game drives to mountain adventures, our team brings experience and enthusiasm to every journey."
            />

          </div>

          {/* GUIDE IMAGE */}
          <div className="relative mt-12 overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={image16}
              alt="Daffar safari guide"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[400px]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#052b18]/90 via-[#052b18]/30 to-transparent" />

            <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center px-7 sm:px-12">
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
                Meet The Team
              </span>

              <h3 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                Experienced Guides.
                <span className="block text-[#F5A623]">
                  Unforgettable Stories.
                </span>
              </h3>
            </div>
          </div>

        </div>
      </section>


      {/* ============================================================
          SAFARI VEHICLES
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#082D19] py-20 sm:py-24 lg:py-28">

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#F5A623]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">

          {/* VEHICLE IMAGE */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={cruiser2}
              alt="Daffar safari vehicle"
              className="h-[400px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#041b10]/80 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7">
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
                Safari Transport
              </span>

              <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                Built For The Adventure
              </h3>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <SectionLabel dark>Our Safari Vehicles</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-white sm:text-5xl">
              Explore With
              <span className="block text-[#F5A623]">
                Comfort & Confidence.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-white/60">
              Our safari vehicles are selected to provide comfortable,
              practical and reliable travel while allowing you to fully
              experience the landscapes and wildlife around you.
            </p>

            <div className="mt-9">

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
                text="Designed to make wildlife encounters and photography easier."
              />

              <VehicleFeature
                title="Experienced Drivers"
                text="Professional drivers familiar with safari routes and destinations."
              />

            </div>
          </div>

        </div>
      </section>


      {/* ============================================================
          TERMS & CONDITIONS
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Terms & Conditions</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl font-medium text-[#082D19] sm:text-5xl">
              Important Travel
              <span className="block text-[#F5A623]">
                Information
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              We want every journey to be clear and comfortable from the
              beginning. Our travel terms help ensure that expectations
              are understood before your adventure begins.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">

            <TermsCard
              number="01"
              title="Bookings & Payments"
              text="Booking requirements, deposits and payment arrangements will be confirmed during your reservation process."
            />

            <TermsCard
              number="02"
              title="Cancellation"
              text="Cancellation conditions may vary depending on the safari, accommodation and third-party suppliers involved."
            />

            <TermsCard
              number="03"
              title="Travel Documents"
              text="Travellers are responsible for ensuring they have valid passports, visas and other required travel documents."
            />

            <TermsCard
              number="04"
              title="Travel Changes"
              text="Weather, road conditions, park regulations and other circumstances may occasionally require adjustments to an itinerary."
            />

          </div>

          <div className="mt-8 rounded-[1.75rem] border border-[#F5A623]/20 bg-[#F7F5EE] p-7 sm:p-8">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-[#F5A623]">
                !
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#082D19]">
                  Please Note
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Final booking terms and conditions will be communicated
                  clearly during the reservation process and may vary
                  depending on the selected itinerary and suppliers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="bg-white px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b4224] px-6 py-16 shadow-2xl sm:px-12 sm:py-20">

          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">

            <SectionLabel dark>Start Your Journey</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's Create Your
              <span className="block text-[#F5A623]">
                African Story.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
              Tell us what inspires you and let us help you create a
              safari experience designed around your journey.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F5A623] px-7 py-4 text-sm font-bold text-[#082D19] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Plan My Journey →
              </Link>

              <a
                href="https://wa.me/254708711459"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#082D19]"
              >
                WhatsApp Us
              </a>

            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="relative overflow-hidden bg-[#082D19] text-white">

        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#F5A623]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* BRAND */}
            <div>
              <Link to="/" className="inline-block">
                <div className="font-serif text-3xl font-semibold">
                  Daffar
                </div>

                <div className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
                  Tours & Travel
                </div>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
                Creating meaningful African journeys through authentic
                experiences, thoughtful planning and exceptional service.
              </p>

              {/* SOCIALS */}
              <div className="mt-7 flex gap-3">

                <a
                  href="https://www.facebook.com/dafartoursandtravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#F5A623] hover:text-[#082D19]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/dafartoursandtravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#F5A623] hover:text-[#082D19]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@dafartoursandtravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#F5A623] hover:text-[#082D19]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.8 3h3c.2 1.5 1 2.6 2.2 3.4v2.8c-1.2-.1-2.3-.5-3.2-1.1v6.7c0 3.7-2.4 6.2-6 6.2-3.1 0-5.3-2.2-5.3-5.1 0-3.2 2.6-5.4 5.8-5.4.4 0 .8 0 1.2.1v3c-.3-.1-.7-.2-1.1-.2-1.5 0-2.7 1-2.7 2.4 0 1.3 1 2.3 2.3 2.3 1.6 0 2.8-1 2.8-3.2V3Z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@dafartoursandtravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#F5A623] hover:text-[#082D19]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
                  </svg>
                </a>

              </div>
            </div>


            {/* EXPLORE */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
                Explore
              </h3>

              <div className="mt-6 space-y-3 text-sm text-white/60">
                <Link
                  to="/"
                  className="block transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="block transition hover:text-white"
                >
                  About Us
                </Link>

                <Link
                  to="/safaris"
                  className="block transition hover:text-white"
                >
                  Safaris
                </Link>

                

                <Link
                  to="/activities"
                  className="block transition hover:text-white"
                >
                  Activities
                </Link>

                <Link
                  to="/contact"
                  className="block transition hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>


            {/* DISCOVER */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
                Discover
              </h3>

              <div className="mt-6 space-y-3 text-sm text-white/60">

                <Link
                  to="/community-work"
                  className="block transition hover:text-white"
                >
                  Community Work
                </Link>

                <Link
                  to="/tour-africa-blog"
                  className="block transition hover:text-white"
                >
                  Tour Africa Blog
                </Link>

                <Link
                  to="/faqs"
                  className="block transition hover:text-white"
                >
                  FAQs
                </Link>

                <Link
                  to="/safaris"
                  className="block transition hover:text-white"
                >
                  Tailor-Made Safaris
                </Link>

                <Link
                  to="/safaris"
                  className="block transition hover:text-white"
                >
                  Honeymoon Safaris
                </Link>

                <Link
                  to="/contact"
                  className="block transition hover:text-white"
                >
                  Plan Your Trip
                </Link>

              </div>
            </div>


            {/* CONTACT */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
                Contact
              </h3>

              <div className="mt-6 space-y-5 text-sm">

                <div>
                  <span className="block text-xs uppercase tracking-[1.5px] text-white/30">
                    Location
                  </span>

                  <span className="mt-1 block text-white/60">
                    Kenya • East Africa
                  </span>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-[1.5px] text-white/30">
                    Email
                  </span>

                  <a
                    href="mailto: info@daffar.co.ke"
                    className="mt-1 block text-white/60 transition hover:text-[#F5A623]"
                  >
                     info@daffar.co.ke
                  </a>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-[1.5px] text-white/30">
                    Phone
                  </span>

                  <a
                    href="tel:+254708711459"
                    className="mt-1 block text-white/60 transition hover:text-[#F5A623]"
                  >
                    +254708711459
                  </a>
                </div>

                

              </div>
            </div>

          </div>


          {/* BOTTOM */}
          <div className="mt-14 border-t border-white/10 pt-7">

            <div className="flex flex-col gap-5 text-xs text-white/30 md:flex-row md:items-center md:justify-between">

              <p>
                © {new Date().getFullYear()} Daffar Tours & Travel.
                All rights reserved.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/terms"
                  className="transition hover:text-white"
                >
                  Terms & Conditions
                </Link>

                <Link
                  to="/privacy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>

                <span>Kenya • Africa</span>
              </div>

            </div>
          </div>

        </div>
      </footer>


      {/* ============================================================
          SUBTLE FLOAT ANIMATION
      ============================================================ */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
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
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </div>
  );
};

export default About;