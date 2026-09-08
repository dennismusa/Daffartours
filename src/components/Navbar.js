/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import safarilinklogo from "../assets/safarilinklogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [safariOpen, setSafariOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  /* ============================================================
     DESTINATIONS
  ============================================================ */

  const destinations = [
    ["Maasai Mara", "/maasaimara"],
    ["Lake Nakuru", "/lakenakuru"],
    ["Amboseli", "/amboseli"],
    ["Serengeti", "/serengeti"],
    ["Ngorongoro", "/ngorongoro"],
    ["Tarangire", "/tarangire"],
    ["Diani", "/diani"],
    ["Zanzibar", "/zanzibar"],
    ["Mount Kenya", "/mountkenya"],
    ["Mount Kilimanjaro", "/mountkilimanjaro"],
  ];

  /* ============================================================
     SAFARI ITINERARIES
  ============================================================ */

  const safariItineraries = [
    ["Maasai Mara Itineraries", "/maasaimaraitineraries"],
    ["Serengeti Itineraries", "/serengetiitineraries"],
    ["Amboseli Itineraries", "/amboseliitineraries"],
    ["Mountkilimanjaro Itineraries", "/mountkilimanjaroitineraries"],
    ["Diani Itineraries", "/dianiitineraries"],
    ["Samburu Itineraries", "/samburuitineraries"],
    ["seychelles Itineraries", "/sychellesitineraries"],
    ["ndutu calving Itineraries", "/ndutucalvingitineraries"],
  ];

  /* ============================================================
     SCROLL EFFECT
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress =
        height > 0 ? (window.scrollY / height) * 100 : 0;

      setProgress(scrollProgress);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================================================
     PREVENT BACKGROUND SCROLL ON MOBILE
  ============================================================ */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ============================================================
     CLOSE MOBILE MENU
  ============================================================ */

  const closeMobile = () => {
    setMenuOpen(false);
    setDestOpen(false);
    setSafariOpen(false);
  };

  return (
    <>
      {/* =====================================================
          SCROLL PROGRESS
      ====================================================== */}

      <div className="fixed top-0 left-0 w-full h-[3px] z-[999]">
        <div
          className="h-full bg-[#F39A08] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className={`
          fixed top-0 left-0 w-full z-[100]
          border-b border-white/10
          backdrop-blur-xl
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#0D4825]/98 py-1 shadow-xl"
              : "bg-[#0D4825]/90 py-2 sm:py-3"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div
            className="
              min-h-[72px]
              sm:min-h-[76px]
              lg:min-h-[82px]
              flex
              items-center
              justify-between
            "
          >
            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              to="/"
              onClick={closeMobile}
              className="
                flex
                items-center
                gap-2
                sm:gap-3
                min-w-0
              "
            >
              <img
                src={safarilinklogo}
                className="
                  w-10
                  h-10
                  sm:w-12
                  sm:h-12
                  lg:w-14
                  lg:h-14
                  object-contain
                  rounded-full
                  bg-[#F7F4EA]
                  p-1
                  border
                  border-[#F39A08]/70
                  flex-shrink-0
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />

              <div className="hidden xs:block sm:block min-w-0">
                <h2
                  className="
                    text-white
                    font-serif
                    font-bold
                    text-base
                    sm:text-lg
                    lg:text-xl
                    tracking-wide
                  "
                >
                  DAFFAR
                </h2>

                <p
                  className="
                    text-[#F39A08]
                    text-[8px]
                    sm:text-[10px]
                    lg:text-xs
                    tracking-[0.12em]
                    sm:tracking-[0.2em]
                    uppercase
                    whitespace-nowrap
                  "
                >
                  Tours & Travel
                </p>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <div
              className="
                hidden
                lg:flex
                items-center
                gap-1
                xl:gap-2
              "
            >
              {/* HOME */}

              <Link to="/" className="navBtn">
                Home
              </Link>

              {/* ABOUT */}

              <Link to="/about" className="navBtn">
                About Us
              </Link>

              {/* =================================================
                  SAFARIS DROPDOWN
              ================================================== */}

              <div
                className="relative"
                onMouseEnter={() => setSafariOpen(true)}
                onMouseLeave={() => setSafariOpen(false)}
              >
                <button className="navBtn flex items-center gap-1">
                  Safaris

                  <span
                    className={`
                      text-[#F39A08]
                      transition-transform
                      duration-300
                      ${safariOpen ? "rotate-180" : ""}
                    `}
                  >
                    ▾
                  </span>
                </button>

                {safariOpen && (
                  <div className="dropMenu left-0 w-72">
                    <div className="titleDrop">
                      Safari Itineraries
                    </div>

                    <div>
                      {safariItineraries.map(([name, path]) => (
                        <Link
                          key={path}
                          to={path}
                          className="dropItem"
                          onClick={() => setSafariOpen(false)}
                        >
                          <span className="text-[#F39A08] mr-2">
                            •
                          </span>

                          {name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* =================================================
                  DESTINATIONS DROPDOWN
              ================================================== */}

              <div
                className="relative"
                onMouseEnter={() => setDestOpen(true)}
                onMouseLeave={() => setDestOpen(false)}
              >
                <button className="navBtn flex items-center gap-1">
                  Destinations

                  <span
                    className={`
                      text-[#F39A08]
                      transition-transform
                      duration-300
                      ${destOpen ? "rotate-180" : ""}
                    `}
                  >
                    ▾
                  </span>
                </button>

                {destOpen && (
                  <div className="dropMenu left-0 w-64">
                    <div className="titleDrop">
                      Explore Destinations
                    </div>

                    <div className="max-h-[70vh] overflow-y-auto">
                      {destinations.map(([name, path]) => (
                        <Link
                          key={path}
                          to={path}
                          className="dropItem"
                          onClick={() => setDestOpen(false)}
                        >
                          <span className="text-[#F39A08] mr-2">
                            •
                          </span>

                          {name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ACTIVITIES */}

              <Link to="/activities" className="navBtn">
                Activities
              </Link>

              {/* COMMUNITY */}

              <Link to="/communitywork" className="navBtn">
                Community
              </Link>

              {/* FAQS */}

              <Link to="/faqs" className="navBtn">
                FAQs
              </Link>

              {/* BLOG */}

              <Link to="/tourafricablog" className="navBtn">
                Blog
              </Link>

              {/* CONTACT */}

              <Link to="/contact" className="navBtn">
                Contact
              </Link>

              {/* =================================================
                  DESKTOP CTA
              ================================================== */}

              <a
                href="https://wa.me/+254708164662"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  ml-1
                  xl:ml-2
                  bg-[#F39A08]
                  hover:bg-[#ffad20]
                  text-[#0D4825]
                  px-4
                  xl:px-5
                  py-2.5
                  xl:py-3
                  rounded-full
                  font-bold
                  text-xs
                  xl:text-sm
                  whitespace-nowrap
                  shadow-lg
                  shadow-[#F39A08]/20
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Plan Your Safari
              </a>
            </div>

            {/* =================================================
                TABLET / MOBILE CONTROLS
            ================================================== */}

            <div
              className="
                flex
                lg:hidden
                items-center
                gap-2
                sm:gap-3
              "
            >
              {/* BOOK BUTTON */}

              <a
                href="https://wa.me/+254708164662"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-[#F39A08]
                  text-[#0D4825]
                  px-3
                  sm:px-4
                  py-2
                  rounded-full
                  font-bold
                  text-[11px]
                  sm:text-xs
                  whitespace-nowrap
                  shadow-lg
                  hover:bg-[#ffad20]
                  transition
                "
              >
                Book Now
              </a>

              {/* MENU BUTTON */}

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/10
                  border
                  border-white/10
                  text-white
                  hover:bg-white/20
                  transition
                "
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
              >
                <span className="text-2xl leading-none">
                  ☰
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={closeMobile}
        className={`
          fixed
          inset-0
          bg-black/70
          backdrop-blur-sm
          z-[180]
          lg:hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <aside
        className={`
          fixed
          top-0
          right-0
          h-[100dvh]
          w-[88%]
          max-w-[420px]
          bg-[#0D4825]
          z-[200]
          lg:hidden
          shadow-2xl
          overflow-hidden
          transition-transform
          duration-500
          ease-out
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =================================================
            MOBILE HEADER
        ================================================== */}

        <div
          className="
            h-[76px]
            sm:h-[82px]
            px-4
            sm:px-5
            flex
            items-center
            justify-between
            border-b
            border-white/10
            bg-[#08391D]
          "
        >
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3 min-w-0"
          >
            <img
              src={safarilinklogo}
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                object-contain
                rounded-full
                bg-[#F7F4EA]
                p-1
                border
                border-[#F39A08]
                flex-shrink-0
              "
            />

            <div className="min-w-0">
              <h2 className="text-white font-bold tracking-wide">
                DAFFAR
              </h2>

              <p
                className="
                  text-[#F39A08]
                  text-[9px]
                  sm:text-xs
                  tracking-[0.15em]
                  uppercase
                  whitespace-nowrap
                "
              >
                Tours & Travel
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeMobile}
            className="
              w-10
              h-10
              sm:w-11
              sm:h-11
              flex
              items-center
              justify-center
              rounded-full
              text-white
              text-2xl
              sm:text-3xl
              hover:bg-white/10
              transition
              flex-shrink-0
            "
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        {/* =================================================
            MOBILE SCROLLABLE CONTENT
        ================================================== */}

        <div
          className="
            h-[calc(100dvh-76px)]
            sm:h-[calc(100dvh-82px)]
            overflow-y-auto
            overscroll-contain
            px-4
            sm:px-5
            py-5
            pb-8
          "
        >
          <div className="space-y-2">

            {/* =================================================
                HOME
            ================================================== */}

            <Link
              to="/"
              onClick={closeMobile}
              className="mobileMenuBtn"
            >
              <span>Home</span>
              <span className="mobileArrow">→</span>
            </Link>

            {/* =================================================
                ABOUT
            ================================================== */}

            <Link
              to="/about"
              onClick={closeMobile}
              className="mobileMenuBtn"
            >
              <span>About Us</span>
              <span className="mobileArrow">→</span>
            </Link>

            {/* =================================================
                SAFARIS DROPDOWN
            ================================================== */}

            <button
              type="button"
              onClick={() => setSafariOpen(!safariOpen)}
              className="
                mobileMenuBtn
                w-full
                justify-between
              "
              aria-expanded={safariOpen}
            >
              <span>Safaris</span>

              <span
                className={`
                  text-[#F39A08]
                  text-xl
                  transition-transform
                  duration-300
                  ${safariOpen ? "rotate-180" : ""}
                `}
              >
                ⌄
              </span>
            </button>

            {/* SAFARI ITINERARIES */}

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  safariOpen
                    ? "max-h-[400px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div
                className="
                  bg-[#08391D]
                  p-2
                  rounded-2xl
                  border
                  border-white/5
                  space-y-1
                "
              >
                {safariItineraries.map(([name, path]) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={closeMobile}
                    className="
                      flex
                      items-center
                      gap-3
                      py-3
                      px-3
                      sm:px-4
                      rounded-xl
                      text-gray-200
                      text-sm
                      hover:bg-white/10
                      hover:text-[#F39A08]
                      transition
                    "
                  >
                    <span className="text-[#F39A08]">
                      •
                    </span>

                    <span>{name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* =================================================
                DESTINATIONS DROPDOWN
            ================================================== */}

            <button
              type="button"
              onClick={() => setDestOpen(!destOpen)}
              className="
                mobileMenuBtn
                w-full
                justify-between
              "
              aria-expanded={destOpen}
            >
              <span>Destinations</span>

              <span
                className={`
                  text-[#F39A08]
                  text-xl
                  transition-transform
                  duration-300
                  ${destOpen ? "rotate-180" : ""}
                `}
              >
                ⌄
              </span>
            </button>

            {/* DESTINATION LIST */}

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  destOpen
                    ? "max-h-[700px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div
                className="
                  bg-[#08391D]
                  p-2
                  rounded-2xl
                  border
                  border-white/5
                  space-y-1
                "
              >
                {destinations.map(([name, path]) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={closeMobile}
                    className="
                      flex
                      items-center
                      gap-3
                      py-3
                      px-3
                      sm:px-4
                      rounded-xl
                      text-gray-200
                      text-sm
                      hover:bg-white/10
                      hover:text-[#F39A08]
                      transition
                    "
                  >
                    <span className="text-[#F39A08]">
                      •
                    </span>

                    <span>{name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* =================================================
                ACTIVITIES
            ================================================== */}

            <Link
              to="/activities"
              onClick={closeMobile}
              className="mobileMenuBtn"
            >
              <span>Activities</span>
              <span className="mobileArrow">→</span>
            </Link>

            {/* =================================================
                COMMUNITY
            ================================================== */}

            <Link
              to="/communitywork"
              onClick={closeMobile}
              className="mobileMenuBtn"
            >
              <span>Community Work</span>
              <span className="mobileArrow">→</span>
            </Link>

            {/* =================================================
                FAQS
            ================================================== */}

            <Link
              to="/faqs"
              onClick={closeMobile}
              className="mobileMenuBtn"
            >
              <span>FAQs</span>
              <span className="mobileArrow">→</span>
            </Link>

            {/* =================================================
                BLOG
            ================================================== */}

            <Link
              to="/tourafricablog"
              onClick={closeMobile}
              className="mobileMenuBtn"
            >
              <span>Tour Africa Blog</span>
              <span className="mobileArrow">→</span>
            </Link>

            {/* =================================================
                GALLERY
            ================================================== */}

            

            {/* =================================================
                CONTACT
            ================================================== */}

            <Link
              to="/contact"
              onClick={closeMobile}
              className="mobileMenuBtn"
            >
              <span>Contact</span>
              <span className="mobileArrow">→</span>
            </Link>

            {/* =================================================
                MOBILE CTA
            ================================================== */}

            <a
              href="https://wa.me/+254708164662"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                w-full
                mt-5
                bg-[#F39A08]
                text-[#0D4825]
                py-4
                rounded-2xl
                font-bold
                text-sm
                shadow-lg
                shadow-black/20
                hover:bg-[#ffad20]
                transition
              "
            >
              Plan Your Safari
            </a>

            {/* =================================================
                SMALL BRAND MESSAGE
            ================================================== */}

            <p
              className="
                text-center
                text-white/40
                text-xs
                pt-3
              "
            >
              Go further with Daffar.
            </p>
          </div>
        </div>
      </aside>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        .navBtn {
          position: relative;
          color: white;
          padding: 9px 10px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        @media (min-width: 1280px) {
          .navBtn {
            padding: 10px 12px;
            font-size: 14px;
          }
        }

        .navBtn::after {
          content: "";
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 4px;
          height: 2px;
          background: #F39A08;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease;
        }

        .navBtn:hover {
          color: #F39A08;
          background: rgba(255,255,255,0.06);
        }

        .navBtn:hover::after {
          transform: scaleX(1);
        }

        .dropMenu {
          position: absolute;
          top: calc(100% + 8px);
          background: #0D4825;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 25px 60px rgba(0,0,0,0.45);
          padding: 8px;
          animation: dropdown 0.2s ease-out;
        }

        .titleDrop {
          padding: 12px 14px;
          color: #F39A08;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 4px;
        }

        .dropItem {
          display: block;
          padding: 11px 14px;
          border-radius: 10px;
          color: #E5E7EB;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .dropItem:hover {
          background: rgba(243,154,8,0.12);
          color: #F39A08;
          padding-left: 18px;
        }

        .mobileMenuBtn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 15px 16px;
          border-radius: 15px;
          background: rgba(255,255,255,0.055);
          color: white;
          border: 1px solid rgba(255,255,255,0.07);
          font-size: 14px;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .mobileMenuBtn:hover,
        .mobileMenuBtn:active {
          background: rgba(243,154,8,0.12);
          border-color: rgba(243,154,8,0.25);
          color: #F39A08;
        }

        .mobileArrow {
          color: #F39A08;
          font-size: 16px;
          transition: transform 0.2s ease;
        }

        .mobileMenuBtn:hover .mobileArrow {
          transform: translateX(3px);
        }

        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile scrollbar */

        aside ::-webkit-scrollbar {
          width: 4px;
        }

        aside ::-webkit-scrollbar-track {
          background: transparent;
        }

        aside ::-webkit-scrollbar-thumb {
          background: rgba(243,154,8,0.35);
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default Navbar;