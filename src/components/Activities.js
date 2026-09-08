import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import kenya from "../assets/kenya.jpg";
import bird1 from "../assets/bird1.jpg";
import diani1 from "../assets/diani1.jpg";
import culture1 from "../assets/culture1.jpg";
import amboseli from "../assets/amboseli.jpg";
import serengeti from "../assets/serengeti.jpg";
//import nakuru from "../assets/nakuru.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";
import climbinglongonot from "../assets/climbinglongonot.jpg";
import climbingkili from "../assets/climbingkili.jpg";
import meru from "../assets/meru.jpg";
//import west from "../assets/west.jpg";
//import image17 from "../assets/image17.jpg";

/* ============================================================
   REUSABLE COMPONENTS
============================================================ */

function ActivityCard({ activity, index }) {
  return (
    <article
      className="
        group
        bg-white
        rounded-[1.7rem]
        overflow-hidden
        border
        border-gray-100
        shadow-sm
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
      "
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="relative h-[250px] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition-transform
            duration-1000
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/75
            via-black/10
            to-transparent
          "
        />

        <div className="absolute top-5 left-5">
          <span
            className="
              px-3
              py-1.5
              rounded-full
              bg-white/15
              backdrop-blur-md
              border
              border-white/20
              text-white
              text-[10px]
              uppercase
              tracking-wider
              font-bold
            "
          >
            {activity.category}
          </span>
        </div>

        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
            flex
            items-end
            justify-between
          "
        >
          <div>
            <div className="text-2xl mb-1">
              {activity.icon}
            </div>

            <h3
              className="
                text-xl
                font-serif
                font-bold
                text-white
              "
            >
              {activity.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-600 leading-7">
          {activity.description}
        </p>

        <div
          className="
            mt-5
            pt-4
            border-t
            border-gray-100
            flex
            items-center
            justify-between
          "
        >
          <div>
            <span
              className="
                block
                text-[10px]
                uppercase
                tracking-wider
                text-gray-400
                font-bold
              "
            >
              Duration
            </span>

            <span
              className="
                text-sm
                font-bold
                text-[#0b4224]
              "
            >
              {activity.duration}
            </span>
          </div>

          <Link
            to="/contact"
            className="
              w-10
              h-10
              rounded-full
              bg-[#F7F5EE]
              text-[#0b4224]
              flex
              items-center
              justify-center
              font-bold
              group-hover:bg-[#0b4224]
              group-hover:text-white
              transition
            "
            aria-label={`Enquire about ${activity.title}`}
          >
            →
          </Link>
        </div>
      </div>
    </article>
  );
}


/* ============================================================
   PROCESS CARD
============================================================ */

function ProcessCard({
  number,
  title,
  text,
}) {
  return (
    <div
      className="
        p-7
        rounded-3xl
        bg-white/5
        border
        border-white/10
        hover:bg-white/10
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >
      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#F5A623]
          text-[#07351d]
          flex
          items-center
          justify-center
          font-black
        "
      >
        {number}
      </div>

      <h3
        className="
          mt-6
          text-lg
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          text-white/50
          leading-7
        "
      >
        {text}
      </p>
    </div>
  );
}


/* ============================================================
   ACTIVITIES PAGE
============================================================ */

function Activities() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  /* ==========================================================
     HERO IMAGES
  ========================================================== */

  const heroImages = [
    kenya,
    amboseli,
    Wilderbeast,
    climbingkili,
  ];


  /* ==========================================================
     CATEGORIES
  ========================================================== */

  const categories = [
    "All",
    "Wildlife",
    "Adventure",
    "Culture",
    "Nature",
    "Beach",
    "Photography",
  ];


  /* ==========================================================
     ACTIVITIES DATA
  ========================================================== */

  const activities = [
    {
      title: "Game Drives",
      category: "Wildlife",
      image: amboseli,
      description:
        "Explore Kenya's incredible wildlife areas in search of elephants, lions, cheetahs, giraffes, buffalo and other iconic African wildlife.",
      duration: "Half Day – Full Day",
      icon: "🦁",
    },

    {
      title: "Great Migration Viewing",
      category: "Wildlife",
      image: Wilderbeast,
      description:
        "Witness the dramatic movement of wildebeest and zebras across the Mara and Serengeti ecosystem.",
      duration: "Seasonal Experience",
      icon: "🐃",
    },

    {
      title: "Bird Watching",
      category: "Nature",
      image: bird1,
      description:
        "Discover spectacular birdlife across Kenya's lakes, forests, grasslands and protected areas.",
      duration: "Flexible",
      icon: "🦅",
    },

    {
      title: "Mountain Trekking",
      category: "Adventure",
      image: climbingkenya,
      description:
        "Experience unforgettable mountain landscapes and challenging trails across East Africa.",
      duration: "1 – 7+ Days",
      icon: "🥾",
    },

    {
      title: "Mount Kilimanjaro Climbing",
      category: "Adventure",
      image: climbingkili,
      description:
        "Take on Africa's highest mountain with carefully planned routes, experienced guides and support.",
      duration: "5 – 9 Days",
      icon: "🏔️",
    },

    {
      title: "Mount Longonot Hiking",
      category: "Adventure",
      image: climbinglongonot,
      description:
        "Enjoy an exhilarating hike through the dramatic volcanic landscape of Mount Longonot.",
      duration: "Full Day",
      icon: "⛰️",
    },

    {
      title: "Cultural Experiences",
      category: "Culture",
      image: culture1,
      description:
        "Meet local communities and discover traditions, stories, food and ways of life that make East Africa unique.",
      duration: "Flexible",
      icon: "🤝",
    },

    {
      title: "Safari Photography",
      category: "Photography",
      image: serengeti,
      description:
        "Spend time in extraordinary wildlife landscapes while creating memorable photographs of Africa.",
      duration: "Flexible",
      icon: "📷",
    },

    {
      title: "Nature Walks",
      category: "Nature",
      image: meru,
      description:
        "Slow down and experience Africa on foot through guided nature walks and scenic landscapes.",
      duration: "1 – 4 Hours",
      icon: "🌿",
    },

    {
      title: "Beach Escapes",
      category: "Beach",
      image: diani1,
      description:
        "Combine your safari with relaxing coastal experiences along Kenya and Tanzania's beautiful beaches.",
      duration: "2 – 7+ Days",
      icon: "🌊",
    },
  ];


  /* ==========================================================
     HERO SLIDER
  ========================================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(
        (prev) => (prev + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);


  /* ==========================================================
     FILTER ACTIVITIES
  ========================================================== */

  const filteredActivities =
    activeCategory === "All"
      ? activities
      : activities.filter(
          (activity) =>
            activity.category === activeCategory
        );


  return (
    <div className="bg-white text-gray-800 overflow-hidden">


      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          h-[48vh]
          min-h-[400px]
          max-h-[560px]
          overflow-hidden
        "
      >

        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`
              absolute
              inset-0
              transition-all
              duration-[1800ms]
              ${
                activeSlide === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }
            `}
          >
            <img
              src={image}
              alt="Daffar Tours and Travel activity"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </div>
        ))}


        <div className="absolute inset-0 bg-black/50" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#062d1a]/95
            via-[#062d1a]/60
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-36
            bg-gradient-to-t
            from-black/70
            to-transparent
          "
        />


        {/* HERO CONTENT */}

        <div
          className="
            relative
            z-10
            h-full
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            flex
            items-center
          "
        >

          <div className="max-w-3xl text-white">

            <div
              className="
                inline-flex
                items-center
                gap-3
                px-4
                py-2
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#F5A623]
                  animate-pulse
                "
              />

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[3px]
                  font-bold
                  text-white/80
                "
              >
                Daffar Tours & Travel
              </span>

            </div>


            <h1
              className="
                mt-5
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-serif
                font-bold
                leading-tight
              "
            >
              Experiences Beyond
              <span className="block text-[#F5A623]">
                The Safari.
              </span>
            </h1>


            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                sm:text-base
                text-white/75
                leading-7
              "
            >
              Discover the many ways to experience Africa —
              from thrilling wildlife encounters and mountain
              adventures to cultural experiences, photography
              and relaxing beach escapes.
            </p>


            <div
              className="
                mt-7
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >

              <Link
                to="/contact"
                className="
                  inline-flex
                  justify-center
                  items-center
                  px-7
                  py-3.5
                  rounded-full
                  bg-[#F5A623]
                  text-[#07351d]
                  font-bold
                  shadow-xl
                  hover:-translate-y-1
                  transition
                "
              >
                Plan An Experience →
              </Link>


              <Link
                to="/safaris"
                className="
                  inline-flex
                  justify-center
                  items-center
                  px-7
                  py-3.5
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/20
                  text-white
                  font-bold
                  hover:bg-white
                  hover:text-[#07351d]
                  transition
                "
              >
                Explore Safaris
              </Link>

            </div>

          </div>

        </div>


        {/* SLIDER INDICATORS */}

        <div
          className="
            absolute
            bottom-7
            right-6
            sm:right-10
            z-20
            flex
            gap-2
          "
        >

          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-500
                ${
                  activeSlide === index
                    ? "w-10 bg-[#F5A623]"
                    : "w-2 bg-white/50"
                }
              `}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="py-20 lg:py-28">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              grid
              lg:grid-cols-2
              gap-14
              items-center
            "
          >

            {/* TEXT */}

            <div>

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[3px]
                  font-bold
                  text-[#F5A623]
                "
              >
                Discover Africa Differently
              </span>


              <h2
                className="
                  mt-4
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-serif
                  font-bold
                  text-[#0b4224]
                  leading-tight
                "
              >
                More Than A Destination.
                <span className="block text-[#F5A623]">
                  It's An Experience.
                </span>
              </h2>


              <p
                className="
                  mt-6
                  text-gray-600
                  leading-8
                "
              >
                Africa is not experienced from a single viewpoint.
                It is found in the roar of a lion, the silence of
                a mountain trail, the rhythm of local communities,
                the flight of a flamingo and the warm waters of the
                Indian Ocean.
              </p>


              <p
                className="
                  mt-4
                  text-gray-600
                  leading-8
                "
              >
                At Daffar Tours & Travel, we help you combine these
                experiences into meaningful journeys that suit your
                interests, time and travel style.
              </p>

            </div>


            {/* IMAGE GRID */}

            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-4">

                <img
                  src={amboseli}
                  alt="Wildlife safari"
                  className="
                    w-full
                    h-64
                    object-cover
                    rounded-[2rem]
                    hover:scale-[1.03]
                    transition
                    duration-700
                  "
                />


                <div
                  className="
                    rounded-[2rem]
                    bg-[#0b4224]
                    p-7
                    text-white
                  "
                >

                  <div
                    className="
                      text-4xl
                      font-serif
                      font-bold
                      text-[#F5A623]
                    "
                  >
                    01
                  </div>

                  <h3 className="mt-3 font-bold">
                    Wildlife
                  </h3>

                  <p className="mt-2 text-sm text-white/60 leading-6">
                    Get closer to the wild.
                  </p>

                </div>

              </div>


              <div className="space-y-4 pt-10">

                <div
                  className="
                    rounded-[2rem]
                    bg-[#F7F5EE]
                    p-7
                  "
                >

                  <div
                    className="
                      text-4xl
                      font-serif
                      font-bold
                      text-[#0b4224]
                    "
                  >
                    02
                  </div>

                  <h3 className="mt-3 font-bold text-[#0b4224]">
                    Adventure
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    Push beyond the ordinary.
                  </p>

                </div>


                <img
                  src={climbingkili}
                  alt="Mountain adventure"
                  className="
                    w-full
                    h-64
                    object-cover
                    rounded-[2rem]
                    hover:scale-[1.03]
                    transition
                    duration-700
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACTIVITIES
      ====================================================== */}

      <section className="py-20 lg:py-28 bg-[#F7F5EE]">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="max-w-3xl">

            <span
              className="
                text-xs
                uppercase
                tracking-[3px]
                font-bold
                text-[#F5A623]
              "
            >
              Explore Activities
            </span>


            <h2
              className="
                mt-4
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-serif
                font-bold
                text-[#0b4224]
              "
            >
              Find Your
              <span className="text-[#F5A623]">
                {" "}Perfect Experience.
              </span>
            </h2>


            <p className="mt-5 text-gray-600 leading-7">
              Choose an activity or combine several experiences
              to create a journey that is uniquely yours.
            </p>

          </div>


          {/* FILTERS */}

          <div
            className="
              mt-10
              flex
              gap-2
              overflow-x-auto
              pb-3
              scrollbar-hide
            "
          >

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  flex-shrink-0
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  font-bold
                  transition-all
                  ${
                    activeCategory === category
                      ? "bg-[#0b4224] text-white shadow-lg"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#0b4224] hover:text-[#0b4224]"
                  }
                `}
              >
                {category}
              </button>
            ))}

          </div>


          {/* ACTIVITY GRID */}

          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              mt-8
            "
          >

            {filteredActivities.map((activity, index) => (
              <ActivityCard
                key={activity.title}
                activity={activity}
                index={index}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOM EXPERIENCES
      ====================================================== */}

      <section className="py-20 lg:py-28">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              min-h-[430px]
            "
          >

            <img
              src={serengeti}
              alt="African safari experience"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />

            <div className="absolute inset-0 bg-black/60" />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#062d1a]/90
                via-black/50
                to-transparent
              "
            />


            <div
              className="
                relative
                z-10
                min-h-[430px]
                flex
                items-center
                px-7
                sm:px-12
                lg:px-16
              "
            >

              <div className="max-w-2xl text-white">

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[3px]
                    font-bold
                    text-[#F5A623]
                  "
                >
                  Your Journey, Your Way
                </span>


                <h2
                  className="
                    mt-4
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-serif
                    font-bold
                  "
                >
                  Can't Find Exactly
                  <span className="text-[#F5A623]">
                    {" "}What You're Looking For?
                  </span>
                </h2>


                <p
                  className="
                    mt-5
                    text-white/70
                    leading-8
                  "
                >
                  Activities can be combined and adapted to create
                  a private journey around your interests. Tell us
                  what you want to experience and we will help build
                  the right itinerary.
                </p>


                <Link
                  to="/contact"
                  className="
                    inline-flex
                    mt-7
                    px-7
                    py-3.5
                    rounded-full
                    bg-[#F5A623]
                    text-[#07351d]
                    font-bold
                    hover:-translate-y-1
                    transition
                  "
                >
                  Create My Experience →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PLANNING PROCESS
      ====================================================== */}

      <section className="py-20 lg:py-28 bg-[#082d19]">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="text-center max-w-3xl mx-auto">

            <span
              className="
                text-xs
                uppercase
                tracking-[3px]
                font-bold
                text-[#F5A623]
              "
            >
              Simple Planning
            </span>


            <h2
              className="
                mt-4
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-serif
                font-bold
                text-white
              "
            >
              Your Experience
              <span className="text-[#F5A623]">
                {" "}Starts Here.
              </span>
            </h2>

          </div>


          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mt-14
            "
          >

            <ProcessCard
              number="01"
              title="Choose Your Activities"
              text="Tell us which experiences interest you and what you would like to discover."
            />

            <ProcessCard
              number="02"
              title="Build Your Journey"
              text="We combine your preferred activities with destinations and accommodation."
            />

            <ProcessCard
              number="03"
              title="Enjoy Africa"
              text="Travel with confidence knowing your experience has been carefully planned."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          px-5
          sm:px-8
          lg:px-12
          py-20
          lg:py-28
        "
      >

        <div className="max-w-7xl mx-auto text-center">

          <span
            className="
              text-xs
              uppercase
              tracking-[3px]
              font-bold
              text-[#F5A623]
            "
          >
            Start Exploring
          </span>


          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-serif
              font-bold
              text-[#0b4224]
            "
          >
            What Will Your
            <span className="text-[#F5A623]">
              {" "}African Story
            </span>
            Be?
          </h2>


          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-gray-600
              leading-7
            "
          >
            Tell us what you want to experience and let Daffar
            Tours & Travel create a journey around you.
          </p>


          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-3
            "
          >

            <Link
              to="/contact"
              className="
                px-8
                py-4
                rounded-full
                bg-[#0b4224]
                text-white
                font-bold
                shadow-xl
                hover:-translate-y-1
                transition
              "
            >
              Plan My Experience →
            </Link>


            <a
              href="https://wa.me/+254708164662"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8
                py-4
                rounded-full
                border
                border-[#0b4224]/20
                text-[#0b4224]
                font-bold
                hover:bg-[#0b4224]
                hover:text-white
                transition
              "
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACCESSIBLE REDUCED MOTION
      ====================================================== */}

      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
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


export default Activities;