import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import amboseli from "../assets/amboseli.jpg";
import image17 from "../assets/image17.jpg";
import image19 from "../assets/image19.jpg";
//mport image20 from "../assets/image20.jpg";
//import image21 from "../assets/image21.jpg";

function Amboseli() {
  const images = [amboseli, image17, image19];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const attractions = [
    {
      icon: "🏔️",
      title: "Mount Kilimanjaro Views",
      text: "Enjoy spectacular views of Africa's highest mountain across the Amboseli plains.",
    },
    {
      icon: "🐘",
      title: "Elephant Herds",
      text: "Amboseli is famous for its large elephant herds and unforgettable wildlife encounters.",
    },
    {
      icon: "🌿",
      title: "Amboseli Wetlands",
      text: "Discover lush wetlands and springs that provide water for wildlife throughout the year.",
    },
    {
      icon: "🌍",
      title: "Maasai Culture",
      text: "Experience the traditions, stories and hospitality of communities living around Amboseli.",
    },
  ];

  const wildlife = [
    "🐘 Elephants",
    "🦁 Lions",
    "🦒 Giraffes",
    "🦓 Zebras",
    "🐃 Buffalo",
    "🐆 Leopards",
    "🦌 Antelopes",
    "🦅 Eagles",
  ];

  const activities = [
    {
      title: "Game Drives",
      text: "Explore Amboseli's open plains and wetlands on guided game drives.",
    },
    {
      title: "Wildlife Photography",
      text: "Capture incredible wildlife moments with Mount Kilimanjaro as a backdrop.",
    },
    {
      title: "Bird Watching",
      text: "Discover a variety of bird species across wetlands, grasslands and savannah.",
    },
    {
      title: "Cultural Experiences",
      text: "Meet local Maasai communities and learn about their traditions and way of life.",
    },
    {
      title: "Sunrise Safaris",
      text: "Start your day early and experience the beautiful morning light across the park.",
    },
    {
      title: "Scenic Experiences",
      text: "Enjoy breathtaking landscapes and unforgettable views throughout your journey.",
    },
  ];

  const faqs = [
    {
      question: "What is the best time to visit Amboseli?",
      answer:
        "Amboseli can be visited throughout the year. The dry seasons are particularly popular for wildlife viewing because animals often gather around available water sources.",
    },
    {
      question: "How far is Amboseli from Nairobi?",
      answer:
        "Amboseli is approximately 240 kilometres from Nairobi, depending on the route and starting point.",
    },
    {
      question: "Can I book a private safari?",
      answer:
        "Yes. Private safari experiences can be arranged according to your preferred dates, activities, accommodation and travel style.",
    },
    {
      question: "What animals can I see in Amboseli?",
      answer:
        "Visitors can encounter elephants, lions, giraffes, zebras, buffalo, antelopes, birds and many other species.",
    },
  ];

  return (
    <div className="bg-[#F7F4EA] text-[#183020] overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[70vh] max-h-[800px] overflow-hidden">

        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Amboseli National Park"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ${
              i === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-10 left-6 md:left-16 max-w-4xl text-white">

          <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
            Kenya · Amboseli
          </span>

          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            Amboseli National Park
          </h1>

          <p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
            Discover magnificent elephants, open savannahs, rich Maasai
            culture and breathtaking views of Mount Kilimanjaro.
          </p>

          

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
```jsx
{/* ============================================================
    AMBOSELI NATIONAL PARK
============================================================ */}
<section className="bg-white py-16 sm:py-20 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

      {/* ======================================================
          IMAGE
      ====================================================== */}
      <div className="relative group">

        <img
          src={image17}
          alt="Amboseli National Park"
          className="h-[380px] w-full rounded-[2rem] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] sm:h-[500px]"
        />

        <div className="absolute bottom-5 left-5 rounded-2xl bg-[#0D4825]/95 px-6 py-4 text-white shadow-xl">

          <p className="text-sm font-bold uppercase tracking-wider text-[#F39A08]">
            Amboseli
          </p>

          <p className="mt-1 text-xs text-white/70">
            Land of giants and mountain views
          </p>

        </div>

      </div>


      {/* ======================================================
          CONTENT
      ====================================================== */}
      <div>

        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F39A08]">
          About Amboseli
        </span>

        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl lg:text-5xl">

          Amboseli National Park

          <span className="block text-[#F39A08]">
            Beneath Kilimanjaro
          </span>

        </h2>

        <div className="mt-7 space-y-5 text-gray-600">

          <p className="leading-relaxed">
            Nestled in the shadow of Africa’s highest peak, Mt. Kilimanjaro,
            Amboseli National Park is a captivating safari destination
            celebrated for its vast elephant herds and awe-inspiring scenery.
            Its sweeping plains, dotted with acacia trees and seasonal swamps,
            make it an ideal habitat for diverse wildlife, including buffaloes,
            wildebeests, zebras, and gazelles. Lions and cheetahs are often
            spotted roaming the open grasslands, adding thrilling moments to
            every game drive.
          </p>

          <p className="leading-relaxed">
            Elephants, famous for their impressive tusks, steal the spotlight
            here. Watching them amble across the dusty plains or wade into
            marshes is an unforgettable sight. The park’s wetlands also attract
            abundant birdlife, including flamingos and a variety of waterbirds,
            making it a paradise for birdwatchers. Though black rhinos have
            disappeared and leopards are rarely seen, Amboseli’s wildlife
            viewing remains exceptional.
          </p>

          <p className="leading-relaxed">
            Sunrise and sunset are especially magical when clouds part to
            reveal Kilimanjaro’s snow-capped peak, creating a perfect backdrop
            for photography. Visitors can climb Observation Hill for panoramic
            views or take to the skies in a hot-air balloon for a unique
            perspective at dawn.
          </p>

          <p className="leading-relaxed">
            While the park’s dry months (June to October, plus January and
            February) offer the best game viewing, its beauty and wildlife can
            be enjoyed all year. The climate is generally warm and dry, though
            April and May bring heavier rains that can affect road conditions.
          </p>

          <p className="leading-relaxed">
            Beyond wildlife, Amboseli enchants with its landscapes: open
            savannahs, pockets of woodland, and lush swamps shimmering under
            Kilimanjaro’s gaze. This blend of scenery, wildlife, and iconic
            views ensures Amboseli National Park remains one of Kenya’s most
            memorable and rewarding safari destinations.
          </p>

        </div>


        {/* ======================================================
            HIGHLIGHTS
        ====================================================== */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Wildlife
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Vast elephant herds & diverse wildlife
            </p>

          </div>

          <div className="rounded-2xl border border-[#0D4825]/5 bg-[#F7F4EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="font-serif text-2xl font-bold text-[#F39A08]">
              Kilimanjaro
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Iconic mountain views & photography
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
```


      {/* =====================================================
          ATTRACTIONS
      ===================================================== */}

      <section className="bg-[#F7F4EA] py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Explore Amboseli
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">
              Experiences Worth
              <span className="text-[#F39A08]"> Discovering</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              From enormous elephant herds to spectacular mountain views,
              Amboseli offers memorable experiences for every traveller.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

            {attractions.map((item) => (

              <div
                key={item.title}
                className="group bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0D4825]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LANDSCAPE
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-6">

            <div className="relative h-[420px] lg:h-[600px] overflow-hidden rounded-[2rem] group">

              <img
                src={amboseli}
                alt="Amboseli landscape"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <span className="text-[#F39A08] text-xs font-bold uppercase tracking-[0.2em]">
                  Amboseli Landscape
                </span>

                <h3 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-white">
                  Savannah Beneath The Mountain
                </h3>

              </div>

            </div>


            <div className="flex flex-col justify-center bg-[#0D4825] rounded-[2rem] p-8 sm:p-10 lg:p-12">

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                The Amboseli Experience
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Every Safari
                <span className="block text-[#F39A08]">
                  Tells A Story
                </span>
              </h2>

              <p className="mt-6 text-white/65 leading-relaxed">
                Watch elephants cross the plains, observe wildlife
                around the wetlands and enjoy dramatic views of
                Mount Kilimanjaro as the light changes throughout
                the day.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Spectacular Mount Kilimanjaro views",
                  "Large elephant populations",
                  "Beautiful sunrise and sunset drives",
                  "Authentic cultural experiences",
                ].map((item) => (

                  <div key={item} className="flex gap-3">

                    <span className="text-[#F39A08]">
                      ✓
                    </span>

                    <p className="text-white/70 text-sm">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

              <Link
                to="/contact"
                className="inline-flex self-start mt-8 bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
              >
                Plan Your Safari
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WILDLIFE
      ===================================================== */}

      <section className="bg-[#0D4825] py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                Wildlife Encounters
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Meet Amboseli's
                <span className="block text-[#F39A08]">
                  Incredible Wildlife
                </span>
              </h2>

              <p className="mt-6 text-white/65 leading-relaxed">
                Amboseli is home to a diverse collection of wildlife.
                Its open landscapes make it an excellent destination
                for observing animals in their natural environment.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-8">

                {wildlife.map((animal) => (

                  <div
                    key={animal}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.12] transition-all duration-300"
                  >

                    <span className="text-[#F39A08]">
                      ✓
                    </span>

                    {animal}

                  </div>

                ))}

              </div>

            </div>


            <div className="relative group">

              <img
                src={image19}
                alt="Wildlife in Amboseli"
                className="w-full h-[400px] sm:h-[520px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-6 right-6 bg-[#F39A08] text-[#0D4825] px-6 py-4 rounded-2xl shadow-xl">

                <p className="font-bold text-lg">
                  Wild & Free
                </p>

                <p className="text-xs mt-1">
                  Experience Amboseli
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Safari Activities
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">
              Things To Do
              <span className="text-[#F39A08]"> In Amboseli</span>
            </h2>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            {activities.map((activity, index) => (

              <div
                key={activity.title}
                className="group p-7 rounded-3xl bg-[#F7F4EA] border border-[#0D4825]/5 hover:bg-[#0D4825] transition-all duration-300"
              >

                <span className="text-[#F39A08] text-sm font-bold">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0D4825] group-hover:text-white">
                  {activity.title}
                </h3>

                <p className="mt-3 text-gray-600 group-hover:text-white/65 text-sm leading-relaxed">
                  {activity.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-[#F7F4EA] py-16 sm:py-20 lg:py-28">

        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          <div className="text-center">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Travel Information
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">
              Frequently Asked
              <span className="text-[#F39A08]"> Questions</span>
            </h2>

          </div>


          <div className="space-y-4 mt-12">

            {faqs.map((faq) => (

              <div
                key={faq.question}
                className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm"
              >

                <h3 className="text-lg font-bold text-[#0D4825]">
                  {faq.question}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative bg-[#0D4825] overflow-hidden">

        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#F39A08]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#F39A08]/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-28 text-center">

          <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
            Your African Adventure
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Ready To Discover
            <span className="block text-[#F39A08]">
              Amboseli?
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/65 leading-relaxed">
            Let Daffar Tours & Travel help you create an unforgettable
            Amboseli safari filled with wildlife, nature and adventure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

            <Link
              to="/contact"
              className="bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Plan Your Safari
            </Link>

            

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}


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
                  Kenya and TZ • East Africa
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
                  className="mt-1 block text-sm text-white/60 hover:text-[#F39A08] transition-colors"
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
                  className="mt-1 block text-sm text-white/60 hover:text-[#F39A08] transition-colors"
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

export default Amboseli;