import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Daffar Tours & Travel
 * FAQs Page
 *
 * Premium / Professional Design
 * - Nairobi hero background
 * - Searchable FAQ accordion
 * - Safari-specific questions and answers
 * - Responsive design
 * - Accessible interactions
 * - Premium African travel styling
 */

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      category: "Safari Experience",
      question: "What’s Included in Your Safari Experience?",
      answer:
        "Your tour covers comfortable game-drive vehicles, including Land Cruisers with pop-up roofs, unlimited mileage, park entry fees, camping charges where applicable, daily bottled water, and full-board accommodation as arranged.",
    },

    {
      category: "Safari Experience",
      question: "What’s Not Part of the Package?",
      answer:
        "You’ll need to budget separately for visas, personal items such as souvenirs, extra excursions that were not agreed in advance, and tips. Around $10 USD per guest per day is the standard tipping guideline. Please note that if park authorities increase fees after you book, these adjustments may reflect in your final balance.",
    },

    {
      category: "Travel Information",
      question: "Which Airport Should I Fly Into?",
      answer:
        "We recommend arriving at Jomo Kenyatta International Airport in Nairobi (NBO). From Nairobi, we can help arrange the appropriate transfers and transportation for your safari or other African travel experience.",
    },

    {
      category: "Health & Safety",
      question: "What Health Precautions Should I Take?",
      answer:
        "Please visit a travel health clinic before your trip. You may be advised to get vaccinated for yellow fever and to take malaria prophylaxis. If you’re visiting Zanzibar or transiting through a yellow fever zone, proof of vaccination might be needed. We recommend consulting a qualified travel-health professional for advice based on your personal travel plans.",
    },

    {
      category: "Packing",
      question: "What Should I Bring With Me?",
      answer:
        "Bring your passport, vaccination proof, personal medication, including basics such as painkillers, sunscreen, sunglasses, a hat, moisturizer, insect repellent, and comfortable clothes in neutral shades. Include warm layers for chilly mornings, swimwear if your lodge has a pool, and good walking shoes. A camera with wide and telephoto lenses, plus binoculars, will enhance your safari experience. We provide one pair of binoculars per vehicle, but you are welcome to bring your own.",
    },

    {
      category: "Safari Planning",
      question: "Can I Customize My Safari?",
      answer:
        "Absolutely. We design itineraries around your interests, travel dates, and budget. Whether you are looking for a wildlife safari, honeymoon, family holiday, beach escape, cultural experience, photography journey, or a combination of destinations, we can tailor your itinerary to suit your travel plans.",
    },

    {
      category: "Safari Vehicles",
      question: "Can I Charge My Phone or Camera in the Safari Vehicle?",
      answer:
        "Yes. Our safari vehicles have charging points so you can keep your camera, phone, and other devices powered while you’re on the go. We recommend bringing your own charging cables and any adapters required for your devices.",
    },

    {
      category: "Food & Accommodation",
      question: "Do You Cater for Special Diets?",
      answer:
        "Absolutely. When you book, we’ll ask you to fill out a form listing any dietary restrictions, allergies, or preferences. We share this information with all lodges and camps to ensure your meals are safe and satisfying throughout your journey.",
    },

    {
      category: "Payments",
      question: "What Payment Methods Do You Accept?",
      answer:
        "We accept payments via wire transfer, Wise, and credit card. Credit card payments are securely processed through Pesapal. Please note that a small service fee applies to credit card payments.",
    },

    {
      category: "Safari Vehicles",
      question: "What If the Vehicle Breaks Down?",
      answer:
        "All our vehicles are well-maintained, but in the rare case of a breakdown, your driver-guide is trained to handle basic repairs. If needed, we’ll send backup assistance promptly to make sure your safari continues smoothly.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const searchText = search.toLowerCase().trim();

    if (!searchText) return true;

    return (
      faq.question.toLowerCase().includes(searchText) ||
      faq.answer.toLowerCase().includes(searchText) ||
      faq.category.toLowerCase().includes(searchText)
    );
  });

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="overflow-hidden bg-[#F7F4EA] text-[#183020]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[55vh] overflow-hidden">

        {/* Nairobi Background */}
        <img
          src="/images/nairobi.jpg"
          alt="Nairobi, Kenya"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#071F13]/65" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071F13]/45 via-[#071F13]/65 to-[#071F13]/90" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[55vh] items-center justify-center">

          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">

            <p
              className="
                mb-5
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#F39A08]
              "
            >
              Daffar Tours & Travel
            </p>

            <h1
              className="
                font-serif
                text-4xl
                font-bold
                leading-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Frequently Asked
              <span className="block text-[#F39A08]">
                Questions
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-relaxed
                text-white/80
                sm:text-lg
              "
            >
              Everything you need to know about your safari,
              from what’s included and what to pack to health,
              payments, vehicles, meals, and planning your journey
              across Africa.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#F39A08]
            "
          >
            Your Questions, Answered
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-3xl
              font-bold
              leading-tight
              text-[#0D4825]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Travel With
            <span className="text-[#F39A08]">
              {" "}Confidence
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              sm:text-lg
            "
          >
            Planning an African safari comes with important
            questions. We’ve answered some of the most common
            things our travelers want to know before setting
            out on their adventure.
          </p>

        </div>

      </section>


      {/* =====================================================
          SEARCH
      ====================================================== */}
      <section className="bg-[#F7F4EA] pt-16 sm:pt-20">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          <div
            className="
              relative
              mx-auto
              max-w-3xl
            "
          >

            {/* Search Icon */}
            <div
              className="
                pointer-events-none
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-[#0D4825]/45
              "
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />
              </svg>
            </div>

            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpenIndex(null);
              }}
              placeholder="Search your question..."
              aria-label="Search frequently asked questions"
              className="
                w-full
                rounded-2xl
                border
                border-[#0D4825]/10
                bg-white
                py-4
                pl-14
                pr-5
                text-sm
                text-[#183020]
                shadow-sm
                outline-none
                transition-all
                placeholder:text-gray-400
                focus:border-[#F39A08]/60
                focus:ring-4
                focus:ring-[#F39A08]/10
                sm:py-5
                sm:text-base
              "
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ SECTION
      ====================================================== */}
      <section className="bg-[#F7F4EA] py-10 sm:py-14 lg:py-20">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          {/* Search Result Message */}
          {search && (
            <div className="mb-8 flex items-center justify-between gap-4">

              <p className="text-sm text-gray-500">

                Search results for{" "}

                <span className="font-bold text-[#0D4825]">
                  "{search}"
                </span>

              </p>

              <p className="whitespace-nowrap text-sm font-bold text-[#0D4825]">
                {filteredFaqs.length}{" "}
                {filteredFaqs.length === 1
                  ? "result"
                  : "results"}
              </p>

            </div>
          )}


          {/* FAQ LIST */}
          <div className="space-y-4">

            {filteredFaqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <article
                  key={`${faq.category}-${faq.question}`}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-white
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-[#F39A08]/50 shadow-xl"
                        : "border-[#0D4825]/8 shadow-sm hover:border-[#0D4825]/20 hover:shadow-lg"
                    }
                  `}
                >

                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      p-5
                      text-left
                      outline-none
                      transition
                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-[#F39A08]
                      sm:p-6
                      lg:p-7
                    "
                  >

                    {/* Number */}
                    <span
                      className={`
                        hidden
                        h-11
                        w-11
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-xs
                        font-bold
                        transition-all
                        duration-300
                        sm:flex
                        ${
                          isOpen
                            ? "bg-[#F39A08] text-[#0D4825]"
                            : "bg-[#0D4825]/5 text-[#0D4825]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    {/* Question */}
                    <div className="min-w-0 flex-1">

                      <p
                        className="
                          mb-1.5
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#F39A08]
                        "
                      >
                        {faq.category}
                      </p>

                      <h3
                        className={`
                          text-base
                          font-bold
                          leading-relaxed
                          transition-colors
                          sm:text-lg
                          lg:text-xl
                          ${
                            isOpen
                              ? "text-[#0D4825]"
                              : "text-[#183020]"
                          }
                        `}
                      >
                        {faq.question}
                      </h3>

                    </div>


                    {/* Plus / Minus */}
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180 border-[#0D4825] bg-[#0D4825] text-white"
                            : "border-[#0D4825]/15 text-[#0D4825]"
                        }
                      `}
                      aria-hidden="true"
                    >

                      {isOpen ? (

                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 12h12"
                          />
                        </svg>

                      ) : (

                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v12m-6-6h12"
                          />
                        </svg>

                      )}

                    </span>

                  </button>


                  {/* ANSWER */}
                  <div
                    className={`
                      grid
                      transition-[grid-template-rows]
                      duration-500
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      <div
                        className="
                          px-5
                          pb-6
                          pt-0
                          sm:px-6
                          sm:pb-7
                          sm:pl-[6.5rem]
                          lg:px-7
                          lg:pl-[6.5rem]
                        "
                      >

                        <div className="mb-5 h-px bg-[#0D4825]/10" />

                        <p
                          className="
                            max-w-3xl
                            text-sm
                            leading-7
                            text-gray-600
                            sm:text-base
                          "
                        >
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>


          {/* =================================================
              EMPTY SEARCH
          ================================================== */}
          {filteredFaqs.length === 0 && (

            <div
              className="
                rounded-3xl
                bg-white
                px-6
                py-14
                text-center
                shadow-sm
                sm:px-10
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F39A08]/10
                  text-[#F39A08]
                "
              >

                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  />
                </svg>

              </div>

              <h3
                className="
                  mt-5
                  font-serif
                  text-2xl
                  font-bold
                  text-[#0D4825]
                "
              >
                We Couldn't Find That
              </h3>

              <p className="mx-auto mt-3 max-w-md text-gray-600">
                Try using a different search term or contact our
                team and we will be happy to help.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setOpenIndex(null);
                }}
                className="
                  mt-6
                  rounded-full
                  bg-[#0D4825]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#176B35]
                "
              >
                Clear Search
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          CONTACT CTA
      ====================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-[#0D4825]
              px-6
              py-12
              text-center
              sm:px-10
              lg:px-16
              lg:py-16
            "
          >

            {/* Decorative Elements */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                border
                border-[#F39A08]/20
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-24
                h-72
                w-72
                rounded-full
                bg-[#F39A08]/5
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#F39A08]
                "
              >
                Still Have Questions?
              </p>

              <h2
                className="
                  mt-4
                  font-serif
                  text-3xl
                  font-bold
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Let's Plan Your
                <span className="text-[#F39A08]">
                  {" "}African Journey
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/65
                  sm:text-base
                "
              >
                Have a question that isn't covered here?
                Our team is ready to help you plan your safari,
                beach holiday, honeymoon, cultural experience,
                or tailor-made African adventure.
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  justify-center
                  gap-3
                  sm:flex-row
                "
              >

                {/* Contact */}
                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F39A08]
                    px-8
                    py-4
                    font-bold
                    text-[#0D4825]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#ffad20]
                    hover:shadow-xl
                  "
                >
                  Contact Us

                  <span className="ml-2">
                    →
                  </span>
                </Link>


                {/* WhatsApp */}
                <a
                  href="https://wa.me/254708711459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    px-8
                    py-4
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#F39A08]
                    hover:text-[#F39A08]
                  "
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="overflow-hidden bg-[#082D19] text-white">

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            py-12
            sm:px-8
            sm:py-14
            lg:px-12
          "
        >

          {/* Decorative Background */}
          <div
            className="
              pointer-events-none
              absolute
              -right-40
              -top-40
              h-96
              w-96
              rounded-full
              bg-[#F39A08]/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              -left-40
              h-96
              w-96
              rounded-full
              bg-emerald-400/5
              blur-3xl
            "
          />

          <div className="relative z-10">

            {/* =================================================
                FOOTER CONTENT
            ================================================== */}
            <div
              className="
                grid
                grid-cols-1
                gap-10
                border-b
                border-white/10
                pb-10
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {/* BRAND */}
              <div>

                <Link
                  to="/"
                  className="group inline-block"
                >

                  <h2
                    className="
                      font-serif
                      text-3xl
                      font-bold
                      text-white
                      transition-colors
                      group-hover:text-[#F39A08]
                    "
                  >
                    Daffar
                  </h2>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.35em]
                      text-[#F39A08]
                    "
                  >
                    Tours & Travel
                  </p>

                </Link>

                <p
                  className="
                    mt-5
                    max-w-sm
                    text-sm
                    leading-6
                    text-white/55
                  "
                >
                  Discover Africa through unforgettable safari
                  adventures, authentic cultural experiences and
                  breathtaking landscapes.
                </p>


                {/* SOCIAL MEDIA */}
                <div className="mt-6 flex items-center gap-2.5">

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/dafartoursandtravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#1877F2]
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-110
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
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
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-tr
                      from-[#FFDC80]
                      via-[#E1306C]
                      to-[#833AB4]
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-110
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[18px] w-[18px] fill-none stroke-current"
                      strokeWidth="2"
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


                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@dafartoursandtravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-110
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[17px] w-[17px] fill-current"
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
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FF0000]
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-110
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.9V8.1l6.5 3.9-6.5 3.9z" />
                    </svg>
                  </a>

                </div>

              </div>


              {/* EXPLORE */}
              <div>

                <h3
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#F39A08]
                  "
                >
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

                <h3
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#F39A08]
                  "
                >
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

                <h3
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#F39A08]
                  "
                >
                  Contact Us
                </h3>

                <div className="mt-5 space-y-5">

                  {/* Location */}
                  <div className="flex items-start gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-[#F39A08]
                      "
                    >
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


                  {/* Email */}
                  <div className="flex items-start gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-[#F39A08]
                      "
                    >
                      ✉
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                        Email
                      </p>

                      <a
                        href="mailto: info@daffar.co.ke"
                        className="
                          mt-1
                          block
                          text-sm
                          text-white/60
                          transition-colors
                          hover:text-[#F39A08]
                        "
                      >
                         info@daffar.co.ke
                      </a>

                    </div>

                  </div>


                  {/* Phone */}
                  <div className="flex items-start gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-[#F39A08]
                      "
                    >
                      ☎
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                        Phone
                      </p>

                      <a
                        href="tel:+254708711459"
                        className="
                          mt-1
                          block
                          text-sm
                          text-white/60
                          transition-colors
                          hover:text-[#F39A08]
                        "
                      >
                        +254 708 711 459
                      </a>

                    </div>

                  </div>


                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-[#F39A08]
                      "
                    >
                      💬
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                        WhatsApp
                      </p>

                      <a
                        href="https://wa.me/254708711459"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-1
                          block
                          text-sm
                          text-white/60
                          transition-colors
                          hover:text-[#F39A08]
                        "
                      >
                        +254 708 711 459
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                BOTTOM BAR
            ================================================== */}
            <div
              className="
                flex
                flex-col
                gap-3
                pt-6
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <p className="text-xs text-white/35">
                © {new Date().getFullYear()} Daffar Tours & Travel.
                All rights reserved.
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-2
                  text-xs
                  text-white/35
                "
              >

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
                Nairobi,Kenya and Arusha, Tanzania
              </p>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}

export default FAQs;