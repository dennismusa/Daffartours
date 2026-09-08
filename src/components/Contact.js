import React, { useState } from "react";
import { Link } from "react-router-dom";

import contact1 from "../assets/contact1.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Daffar Tours & Travel,

I would like to plan a trip.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Travelers: ${formData.travelers}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/+254708164662?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#F7F4EA] text-[#183020] overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[560px] md:min-h-[650px] flex items-center overflow-hidden">

        <img
          src={contact1}
          alt="Contact Daffar Tours and Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061f12]/95 via-[#0D4825]/65 to-black/20" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F4EA] to-transparent" />

        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3 mb-5">

                <span className="w-10 h-[2px] bg-[#F39A08]" />

                <span className="text-[#F39A08] text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
                  Contact Daffar Tours & Travel
                </span>

              </div>

              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05]">

                Let's Plan Your

                <span className="block text-[#F39A08] mt-2">
                  African Adventure
                </span>

              </h1>

              <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
                Tell us where you would like to go, what you would like to
                experience, and when you would like to travel. Our team will
                help you create a memorable journey across Africa.
              </p>

              

              <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10">

                <div className="flex items-center gap-2 text-white/75 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F39A08]" />
                  Safari Planning
                </div>

                <div className="flex items-center gap-2 text-white/75 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F39A08]" />
                  Tailor-Made Trips
                </div>

                <div className="flex items-center gap-2 text-white/75 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F39A08]" />
                  Expert Travel Support
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="absolute right-8 bottom-12 hidden lg:block">

          <div className="w-24 h-24 rounded-full border border-[#F39A08]/40 flex items-center justify-center backdrop-blur-sm">

            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">

              <span className="text-[#F39A08] text-xl">
                ✦
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CARDS
      ====================================================== */}

      <section className="relative -mt-16 z-20 px-5 sm:px-8 lg:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-4">

            {/* PHONE */}

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:-translate-y-1 transition-all duration-300">

              <div className="w-12 h-12 rounded-xl bg-[#F39A08]/15 flex items-center justify-center text-[#F39A08] text-xl">
                ☎
              </div>

              <h3 className="mt-5 text-[#0D4825] font-bold text-lg">
                Call Us
              </h3>

              <p className="mt-1 text-gray-500 text-sm">
                Speak directly with our travel team.
              </p>

              <a
                href="tel:+254708164662"
                className="inline-block mt-4 text-[#0D4825] font-bold hover:text-[#F39A08] transition-colors"
              >
                +254708164662
              </a>

            </div>


            {/* WHATSAPP */}

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:-translate-y-1 transition-all duration-300">

              <div className="w-12 h-12 rounded-xl bg-[#F39A08]/15 flex items-center justify-center text-[#F39A08] text-xl">
                💬
              </div>

              <h3 className="mt-5 text-[#0D4825] font-bold text-lg">
                WhatsApp
              </h3>

              <p className="mt-1 text-gray-500 text-sm">
                Chat with us about your next adventure.
              </p>

              <a
                href="https://wa.me/+254708164662"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#0D4825] font-bold hover:text-[#F39A08] transition-colors"
              >
                Chat With Us →
              </a>

            </div>


            {/* LOCATION */}

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:-translate-y-1 transition-all duration-300">

              <div className="w-12 h-12 rounded-xl bg-[#F39A08]/15 flex items-center justify-center text-[#F39A08] text-xl">
                📍
              </div>

              <h3 className="mt-5 text-[#0D4825] font-bold text-lg">
                Visit Us
              </h3>

              <p className="mt-1 text-gray-500 text-sm">
                Find Daffar Tours & Travel in Nairobi.
              </p>

              <p className="mt-4 text-[#0D4825] font-bold">
                Muindi Mbingu St, Nairobi
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INQUIRY SECTION
      ====================================================== */}

      <section
        id="inquiry"
        className="bg-[#F7F4EA] py-20 sm:py-24 lg:py-32"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">


            {/* LEFT CONTENT */}

            <div className="lg:sticky lg:top-28">

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                Start Your Journey
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Tell Us About

                <span className="block text-[#F39A08]">
                  Your Dream Trip
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Whether you already know where you want to go or need help
                choosing the perfect destination, send us your requirements.
                Our team will help design an experience around your interests,
                schedule and travel style.
              </p>


              {/* BENEFITS */}

              <div className="mt-8 space-y-4">

                <div className="flex gap-4">

                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#0D4825] text-[#F39A08] flex items-center justify-center">
                    ✓
                  </div>

                  <div>

                    <h3 className="font-bold text-[#0D4825]">
                      Tailor-Made Itineraries
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Trips designed around your interests and schedule.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#0D4825] text-[#F39A08] flex items-center justify-center">
                    ✓
                  </div>

                  <div>

                    <h3 className="font-bold text-[#0D4825]">
                      Local Travel Knowledge
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Get practical advice from our experienced team.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#0D4825] text-[#F39A08] flex items-center justify-center">
                    ✓
                  </div>

                  <div>

                    <h3 className="font-bold text-[#0D4825]">
                      Personal Support
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      We are available to help before and during your trip.
                    </p>

                  </div>

                </div>

              </div>


              {/* WHATSAPP BOX */}

              <div className="mt-10 p-6 rounded-2xl bg-[#0D4825]">

                <p className="text-[#F39A08] text-xs font-bold uppercase tracking-wider">
                  Prefer WhatsApp?
                </p>

                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  Send us a message directly and start planning your African
                  adventure with our team.
                </p>

                <a
                  href="https://wa.me/+254708164662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-5 bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-6 py-3 rounded-full font-bold transition-all duration-300"
                >
                  Chat on WhatsApp →
                </a>

              </div>

            </div>


            {/* FORM */}

            <div className="bg-white rounded-[2rem] shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">

              <div className="mb-8">

                <span className="text-[#F39A08] text-xs font-bold uppercase tracking-[0.2em]">
                  Travel Inquiry
                </span>

                <h3 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#0D4825]">
                  Plan Your Safari
                </h3>

                <p className="mt-2 text-gray-500 text-sm">
                  Fill in the details below and we will get back to you.
                </p>

              </div>


              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME + EMAIL */}

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>

                    <label className="block text-sm font-semibold text-[#0D4825] mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-[#F39A08]/40 focus:border-[#F39A08] transition-all"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-[#0D4825] mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-[#F39A08]/40 focus:border-[#F39A08] transition-all"
                    />

                  </div>

                </div>


                {/* PHONE + DESTINATION */}

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>

                    <label className="block text-sm font-semibold text-[#0D4825] mb-2">
                      Phone / WhatsApp
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254708164662"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-[#F39A08]/40 focus:border-[#F39A08] transition-all"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-[#0D4825] mb-2">
                      Preferred Destination
                    </label>

                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-[#F39A08]/40 focus:border-[#F39A08] transition-all"
                    >

                      <option value="">
                        Select destination
                      </option>

                      <option value="Maasai Mara">
                        Maasai Mara
                      </option>

                      <option value="Amboseli">
                        Amboseli
                      </option>

                      <option value="Lake Nakuru">
                        Lake Nakuru
                      </option>

                      <option value="Mount Kenya">
                        Mount Kenya
                      </option>

                      <option value="Serengeti">
                        Serengeti
                      </option>

                      <option value="Ngorongoro">
                        Ngorongoro
                      </option>

                      <option value="Tarangire">
                        Tarangire
                      </option>

                      <option value="Zanzibar">
                        Zanzibar
                      </option>

                      <option value="Diani">
                        Diani
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                  </div>

                </div>


                {/* DATE + TRAVELERS */}

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>

                    <label className="block text-sm font-semibold text-[#0D4825] mb-2">
                      Preferred Travel Date
                    </label>

                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-[#F39A08]/40 focus:border-[#F39A08] transition-all"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-[#0D4825] mb-2">
                      Number of Travelers
                    </label>

                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-[#F39A08]/40 focus:border-[#F39A08] transition-all"
                    >

                      <option value="">
                        Select travelers
                      </option>

                      <option value="1">
                        1 Traveler
                      </option>

                      <option value="2">
                        2 Travelers
                      </option>

                      <option value="3-5">
                        3–5 Travelers
                      </option>

                      <option value="6-10">
                        6–10 Travelers
                      </option>

                      <option value="10+">
                        More than 10
                      </option>

                    </select>

                  </div>

                </div>


                {/* MESSAGE */}

                <div>

                  <label className="block text-sm font-semibold text-[#0D4825] mb-2">
                    Tell Us About Your Trip *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your preferred destinations, activities, budget, accommodation or anything else you would like us to know..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-[#F39A08]/40 focus:border-[#F39A08] transition-all resize-none"
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0D4825] hover:bg-[#176B35] text-white px-7 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Send Travel Inquiry
                  <span className="text-[#F39A08] text-lg">
                    →
                  </span>
                </button>


                <p className="text-center text-xs text-gray-400">
                  Your inquiry will open directly in WhatsApp for quick
                  communication with our team.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION + MAP
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-center">

            {/* LOCATION INFO */}

            <div>

              <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
                Find Us
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825] leading-tight">

                Visit Our

                <span className="block text-[#F39A08]">
                  Nairobi Office
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                If you are in Nairobi, our team is available to discuss your
                safari plans, answer your questions and help you organize your
                next African adventure.
              </p>


              <div className="mt-8 space-y-5">

                <div className="flex gap-4">

                  <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#F39A08]/15 flex items-center justify-center text-[#F39A08]">
                    📍
                  </div>

                  <div>

                    <h3 className="font-bold text-[#0D4825]">
                      Office
                    </h3>

                    <p className="mt-1 text-gray-500 text-sm">
                      Muindi Mbingu St, Nairobi, Kenya
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#F39A08]/15 flex items-center justify-center text-[#F39A08]">
                    ☎
                  </div>

                  <div>

                    <h3 className="font-bold text-[#0D4825]">
                      Phone
                    </h3>

                    <a
                      href="tel:+254708164662"
                      className="mt-1 block text-gray-500 text-sm hover:text-[#F39A08]"
                    >
                      +254708164662
                    </a>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#F39A08]/15 flex items-center justify-center text-[#F39A08]">
                    🕐
                  </div>

                  <div>

                    <h3 className="font-bold text-[#0D4825]">
                      Opening Hours
                    </h3>

                    <p className="mt-1 text-gray-500 text-sm">
                      Open 24 hours
                    </p>

                  </div>

                </div>

              </div>


              <a
                href="https://www.google.com/maps/search/?api=1&query=Daffar+Tours+and+Travel+Ltd+Muindi+Mbingu+Street+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-8 bg-[#0D4825] hover:bg-[#176B35] text-white px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
              >
                Get Directions →
              </a>

            </div>


            {/* MAP */}

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 h-[420px]">

              <iframe
                title="Daffar Tours and Travel location"
                src="https://www.google.com/maps?q=Daffar%20Tours%20and%20Travel%20Ltd%2C%20Muindi%20Mbingu%20Street%2C%20Nairobi&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CONTACT US
      ====================================================== */}

      <section className="bg-[#F7F4EA] py-20 sm:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
              Why Daffar?
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D4825]">
              Your Journey Starts With A Conversation
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              From your first inquiry to the final day of your adventure,
              we are here to help make your African travel experience
              smooth, memorable and personal.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">

              <span className="text-3xl text-[#F39A08]">
                01
              </span>

              <h3 className="mt-5 font-bold text-[#0D4825] text-lg">
                Tell Us Your Dream
              </h3>

              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                Share your destination, interests and travel preferences.
              </p>

            </div>


            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">

              <span className="text-3xl text-[#F39A08]">
                02
              </span>

              <h3 className="mt-5 font-bold text-[#0D4825] text-lg">
                We Build Your Trip
              </h3>

              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                Our team creates an itinerary tailored to your journey.
              </p>

            </div>


            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">

              <span className="text-3xl text-[#F39A08]">
                03
              </span>

              <h3 className="mt-5 font-bold text-[#0D4825] text-lg">
                Refine The Details
              </h3>

              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                We adjust the itinerary until it matches your expectations.
              </p>

            </div>


            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">

              <span className="text-3xl text-[#F39A08]">
                04
              </span>

              <h3 className="mt-5 font-bold text-[#0D4825] text-lg">
                Start Your Adventure
              </h3>

              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                Travel with confidence knowing our team is here to support you.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative bg-[#0D4825] overflow-hidden">

        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#F39A08]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#F39A08]/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-24 lg:py-28 text-center">

          <span className="text-[#F39A08] text-sm font-bold uppercase tracking-[0.2em]">
            Your African Adventure
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">

            Ready To Start

            <span className="block text-[#F39A08]">
              Your Journey?
            </span>

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/65 leading-relaxed">
            Contact Daffar Tours & Travel today and let us help you turn
            your travel ideas into an unforgettable African experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

            <a
              href="https://wa.me/+254708164662"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F39A08] hover:bg-[#ffad20] text-[#0D4825] px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              WhatsApp Our Team
            </a>

            <Link
              to="/safaris"
              className="border border-white/30 hover:border-[#F39A08] text-white hover:text-[#F39A08] px-8 py-4 rounded-full font-bold transition-all duration-300"
            >
              Explore Safaris
            </Link>

          </div>

        </div>

      </section>

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

export default Contact;