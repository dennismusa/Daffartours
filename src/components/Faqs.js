import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Daffar Tours & Travel
 * FAQs Page
 *
 * Premium / Professional Design
 * - Simple Nairobi hero background
 * - No category navigation
 * - No "Find an answer" statistics
 * - No hero buttons
 * - Search integrated into hero
 * - Animated FAQ accordion
 * - Responsive design
 * - Accessible interactions
 */

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      category: "General",
      question: "What does Daffar Tours & Travel offer?",
      answer:
        "Daffar Tours & Travel helps travelers discover Africa through wildlife safaris, beach holidays, mountain adventures, cultural experiences, family journeys, and customized travel itineraries.",
    },
    {
      category: "General",
      question: "Can you customize my safari?",
      answer:
        "Yes. We can create a journey around your preferred destinations, activities, travel dates, accommodation style, and budget. Simply share your travel ideas with our team and we will help shape them into a personalized itinerary.",
    },
    {
      category: "Booking",
      question: "How do I book a safari?",
      answer:
        "You can start by contacting us through the website, email, phone, or WhatsApp. Share your preferred destination, travel dates, number of travelers, and the type of experience you are looking for. Our team will then assist you with planning your journey.",
    },
    {
      category: "Booking",
      question: "How far in advance should I book?",
      answer:
        "We recommend booking as early as possible, particularly for peak travel seasons and popular destinations. Early planning provides greater flexibility when choosing accommodation, activities, transportation, and travel dates.",
    },
    {
      category: "Booking",
      question: "Can I make changes to my itinerary?",
      answer:
        "In many cases, itinerary changes can be accommodated depending on availability and the timing of the request. If your plans change, contact us as soon as possible so we can explore the available options.",
    },
    {
      category: "Safari",
      question: "What is the best time to go on safari?",
      answer:
        "The best time depends on your destination and the type of experience you want. Different seasons offer different wildlife viewing opportunities, weather conditions, landscapes, and travel experiences. We can recommend the most suitable period based on your plans.",
    },
    {
      category: "Safari",
      question: "Which destinations do you cover?",
      answer:
        "Our journeys can include destinations across East Africa and other parts of Africa depending on your itinerary. Popular destinations include Maasai Mara, Amboseli, Serengeti, Ngorongoro, Diani, Zanzibar, and many other remarkable destinations.",
    },
    {
      category: "Safari",
      question: "Are safaris suitable for families with children?",
      answer:
        "Yes. Family safaris can be designed around the ages and interests of your children. We can recommend suitable accommodation, activities, transportation, and a comfortable travel pace for your family.",
    },
    {
      category: "Safari",
      question: "What should I bring on safari?",
      answer:
        "Comfortable clothing, walking shoes, sun protection, a hat, sunglasses, personal toiletries, a camera, and any required personal items are useful. We can provide additional recommendations depending on your destination, season, and itinerary.",
    },
    {
      category: "Accommodation",
      question: "What type of accommodation is available?",
      answer:
        "Depending on your itinerary and preferences, accommodation can include safari lodges, tented camps, hotels, beach resorts, boutique properties, and other suitable options. We help select accommodation based on comfort, location, experience, and budget.",
    },
    {
      category: "Transport",
      question: "What type of safari vehicles are available?",
      answer:
        "Safari transportation depends on the destination and itinerary. We can recommend suitable safari vehicles and transportation arrangements based on the number of travelers, destination, activities, and overall journey.",
    },
    {
      category: "Transport",
      question: "Can you arrange airport transfers?",
      answer:
        "Yes. Airport transfers can be included as part of your travel arrangement depending on your itinerary. Share your arrival and departure details with us and we can help organize the necessary transportation.",
    },
    {
      category: "Payments",
      question: "How do I pay for my trip?",
      answer:
        "Payment arrangements depend on the trip and services selected. Our team will provide the applicable payment information, booking requirements, and payment schedule before your journey is confirmed.",
    },
    {
      category: "Payments",
      question: "Is a deposit required to confirm a booking?",
      answer:
        "A deposit may be required depending on the itinerary, accommodation, and services involved. The exact deposit amount and payment schedule will be communicated before your booking is confirmed.",
    },
    {
      category: "Payments",
      question: "What is your cancellation policy?",
      answer:
        "Cancellation terms vary depending on the itinerary, accommodation providers, transportation arrangements, and other services booked. Please contact us for the specific cancellation conditions applicable to your trip.",
    },
    {
      category: "Beach Holidays",
      question: "Can I combine a safari with a beach holiday?",
      answer:
        "Absolutely. A safari and beach combination is a wonderful way to experience different sides of East Africa. Your itinerary can combine wildlife destinations with coastal destinations such as Diani, Mombasa, Watamu, Malindi, or Zanzibar.",
    },
    {
      category: "Community",
      question: "Can I include a cultural or community experience?",
      answer:
        "Yes. Cultural and community experiences can be included where appropriate. These experiences provide opportunities to learn about local traditions, communities, lifestyles, heritage, and the people who make each destination unique.",
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
          SIMPLE HERO
      ====================================================== */}
      {/* =====================================================
    SIMPLE FAQ HERO
====================================================== */}
<section className="relative min-h-[55vh] overflow-hidden">

  {/* Nairobi Background */}
  <img
    src="/images/nairobi.jpg"
    alt="Nairobi, Kenya"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Elegant dark overlay */}
  <div className="absolute inset-0 bg-[#071F13]/65" />

  {/* Subtle center gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#071F13]/50 via-[#071F13]/65 to-[#071F13]/80" />

  {/* Hero Content */}
  <div className="relative z-10 flex min-h-[55vh] items-center justify-center">

    <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">

      {/* Small Label */}
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

      {/* Heading */}
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

      {/* Description */}
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
        Find helpful answers about our safaris, travel
        experiences, bookings, accommodation, transportation,
        and planning your journey across Africa.
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
            Plan Your Journey
            <span className="text-[#F39A08]">
              {" "}With Confidence
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
            Planning a trip to Africa can come with plenty of
            questions. We have gathered some of the most common
            questions travelers ask to help you understand what
            to expect and make informed decisions about your
            journey.
          </p>

        </div>

      </section>


      {/* =====================================================
          FAQ SECTION
      ====================================================== */}
      <section className="bg-[#F7F4EA] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          {/* Search result message */}
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

                  {/* Question */}
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


                    {/* Question Text */}
                    <div className="min-w-0 flex-1">

                      <p
                        className="
                          mb-1
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


                  {/* Answer */}
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

            {/* Decorative elements */}
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
                Need More Information?
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
                Still have questions about your safari, holiday,
                accommodation, or itinerary? Our team is ready to
                help you create a journey that fits your plans.
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

                <a
                  href="https://wa.me/+254708164662"
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

          {/* Decorative background */}
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

            {/* FOOTER CONTENT */}
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

                {/* SOCIAL */}
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
                        Kenya • East Africa
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
                        href="mailto:info@daffartours.com"
                        className="
                          mt-1
                          block
                          text-sm
                          text-white/60
                          transition-colors
                          hover:text-[#F39A08]
                        "
                      >
                        info@daffartours.com
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
                        href="tel:+254708164662"
                        className="
                          mt-1
                          block
                          text-sm
                          text-white/60
                          transition-colors
                          hover:text-[#F39A08]
                        "
                      >
                        +254708164662
                      </a>

                    </div>

                  </div>


                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/+254708164662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#F39A08]
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-[#082D19]
                      transition-all
                      hover:-translate-y-1
                      hover:bg-white
                    "
                  >
                    WhatsApp Us
                    <span>→</span>
                  </a>

                </div>

              </div>

            </div>


            {/* BOTTOM BAR */}
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

export default FAQs;