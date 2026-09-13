/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {  ArrowRight,  Bird,  Camera,  Compass,  Fish,  Footprints,  Mountain,  Users,  Waves,  Wind,} from "lucide-react";

import kenya from "../assets/kenya.jpg";
import walk from "../assets/walk.jpg";
import gorilla from "../assets/gorilla.jpg";
import tanzania1 from "../assets/tanzania1.jpg";
import samburu from "../assets/samburu.jpg";
import maasai from "../assets/maasai.jpg";
import nakuru from "../assets/nakuru.jpg";
import ngorongoro2 from "../assets/ngorongoro2.jpg";
import mara3 from "../assets/mara3.jpg";
import bird1 from "../assets/bird1.jpg";
import diani1 from "../assets/diani1.jpg";
import culture1 from "../assets/culture1.jpg";
import amboseli from "../assets/amboseli.jpg";
import serengeti from "../assets/serengeti.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";
import climbinglongonot from "../assets/climbinglongonot.jpg";
import climbingkili from "../assets/climbingkili.jpg";
import kili1 from "../assets/kili1.jpg";
import meru from "../assets/meru.jpg";

const WHATSAPP_LINK = "https://wa.me/254708711459";

const SectionLabel = ({ children, light = false }) => (
  <div className="mb-5 flex items-center gap-3">
    <span className="h-px w-10 bg-[#F5A623]" />
    <span
      className={`text-xs font-bold uppercase tracking-[0.28em] ${
        light ? "text-[#F5A623]" : "text-[#F5A623]"
      }`}
    >
      {children}
    </span>
  </div>
);

const EditorialSection = ({
  number,
  label,
  title,
  image,
  imageAlt,
  children,
  reverse = false,
  dark = false,
}) => {
  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-24 lg:py-32 ${
        dark ? "bg-[#082D19] text-white" : "bg-[#F8F6F1] text-gray-800"
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}
        <div className="relative">
          <div
            className={`absolute -top-10 ${
              reverse ? "-right-8" : "-left-8"
            } z-0 font-serif text-[7rem] font-bold leading-none text-[#F5A623]/10`}
          >
            {number}
          </div>

          <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={image}
              alt={imageAlt}
              className="h-[380px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <SectionLabel light={dark}>{label}</SectionLabel>

          <h2
            className={`font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl ${
              dark ? "text-white" : "text-[#082D19]"
            }`}
          >
            {title}
          </h2>

          <div
            className={`mt-8 space-y-6 text-[16px] leading-8 ${
              dark ? "text-white/75" : "text-gray-600"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

const DestinationCard = ({ image, title, children }) => (
  <article className="group relative overflow-hidden rounded-[2rem] bg-[#082D19]">
    <div className="relative h-[390px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-7">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5A623] text-[#082D19]">
          <Bird size={19} />
        </div>

        <h3 className="font-serif text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/75">{children}</p>
      </div>
    </div>
  </article>
);

export default function Activities() {
  return (
    <main className="overflow-hidden">

      {/* ============================================================
          PAGE INTRODUCTION
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#082D19]">
        <div className="absolute inset-0">
          <img
            src={bird1}
            alt="Bird watching in East Africa"
            className="h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#082D19] via-[#082D19]/90 to-[#082D19]/40" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082D19] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-20 pt-36 sm:px-8 lg:min-h-[720px] lg:pb-28">
          <div className="max-w-5xl">
            <SectionLabel light>
              Activities & Experiences
            </SectionLabel>

            <h1 className="font-serif text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-8xl">
              Discover East Africa
              <span className="block text-[#F5A623]">
                Beyond the Ordinary
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-base leading-8 text-white/80 sm:text-lg">
              Kenya and Tanzania aren’t just celebrated for their iconic
              wildlife and landscapes, they’re also home to over 1,000
              spectacular bird species, making them a true paradise for bird
              lovers. Daffar Tours and Travel offers tailored bird-watching
              safaris across East Africa’s finest national parks and reserves,
              giving you a chance to explore the rich avian life this region
              boasts.
            </p>
          </div>
        </div>
      </section>


      {/* ============================================================
          WHY EAST AFRICA IS PERFECT FOR BIRDERS
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#F5A623]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div>
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082D19] text-[#F5A623] shadow-xl">
                <Bird size={30} />
              </div>

              <SectionLabel>
                Birding Experiences
              </SectionLabel>

              <h2 className="font-serif text-4xl font-semibold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
                Why East Africa is
                <span className="block text-[#F5A623]">
                  Perfect for Birders
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-gray-600">
                From lush forests and expansive wetlands to sweeping savannahs
                and scenic coastal areas, the diversity of habitats attracts
                both resident and migratory species. Whether you’re an
                experienced birder or new to the hobby, Kenya and Tanzania
                offer year-round opportunities to spot colorful and rare birds.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-[#F8F6F1] p-6">
                  <Bird className="text-[#F5A623]" size={24} />
                  <h3 className="mt-4 font-serif text-xl font-semibold text-[#082D19]">
                    Resident Species
                  </h3>
                </div>

                <div className="rounded-3xl bg-[#F8F6F1] p-6">
                  <Bird className="text-[#F5A623]" size={24} />
                  <h3 className="mt-4 font-serif text-xl font-semibold text-[#082D19]">
                    Migratory Species
                  </h3>
                </div>

                <div className="rounded-3xl bg-[#F8F6F1] p-6">
                  <Bird className="text-[#F5A623]" size={24} />
                  <h3 className="mt-4 font-serif text-xl font-semibold text-[#082D19]">
                    Diverse Habitats
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ============================================================
          TOP BIRDING DESTINATIONS
      ============================================================ */}
      <section className="bg-[#F8F6F1] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mb-14 max-w-3xl">
            <SectionLabel>
              Birding Destinations
            </SectionLabel>

            <h2 className="font-serif text-4xl font-semibold text-[#082D19] sm:text-5xl lg:text-6xl">
              Top Birding Destinations
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <DestinationCard
              image={nakuru}
              title="Lake Nakuru National Park"
            >
              Famed for thousands of flamingos and species like the African
              Fish Eagle.
            </DestinationCard>

            <DestinationCard
              image={Wilderbeast}
              title="Masai Mara National Reserve"
            >
              Spot Lilac-breasted Rollers and powerful Bateleur Eagles.
            </DestinationCard>

            <DestinationCard
              image={serengeti}
              title="Serengeti National Park"
            >
              Home to Grey Crowned Cranes and Martial Eagles.
            </DestinationCard>

            <DestinationCard
              image={ngorongoro2}
              title="Ngorongoro Conservation Area"
            >
              Discover unique birds like the Rufous-tailed Weaver.
            </DestinationCard>

          </div>
        </div>
      </section>


      {/* ============================================================
          WHY CHOOSE DAFFAR
      ============================================================ */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>
              Why Travel With Us
            </SectionLabel>

            <h2 className="font-serif text-4xl font-semibold text-[#082D19] sm:text-5xl">
              Why Choose Daffar Tours and Travel
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            <div className="rounded-[2rem] bg-[#F8F6F1] p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082D19] text-[#F5A623]">
                <Users size={25} />
              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#082D19]">
                Expert Guides
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Passionate professionals ready to help you identify and
                photograph countless species.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F8F6F1] p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082D19] text-[#F5A623]">
                <Compass size={25} />
              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#082D19]">
                Customized Itineraries
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Focus on your favorite species or combine birding with classic
                safaris.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F8F6F1] p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082D19] text-[#F5A623]">
                <Camera size={25} />
              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#082D19]">
                Diverse Locations
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Access to prime birding spots in both Kenya and Tanzania.
              </p>
            </div>

          </div>

          <div className="mx-auto mt-14 max-w-4xl text-center">
            <p className="text-lg leading-9 text-gray-600">
              With Daffar Tours and Travel, every bird-watching safari becomes
              a journey into East Africa’s vibrant birdlife. Capture
              breathtaking moments, learn from knowledgeable guides, and
              immerse yourself in nature’s beauty.
            </p>
          </div>

        </div>
      </section>


      {/* ============================================================
          BIRDING CTA
      ============================================================ */}
      <section className="bg-[#082D19] py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 text-center sm:px-8 lg:flex-row lg:text-left">

          <h2 className="max-w-3xl font-serif text-3xl font-semibold text-white sm:text-4xl">
            Book your birding adventure today and experience the magic of East
            Africa from a new perspective!
          </h2>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#082D19] transition hover:-translate-y-1 hover:bg-[#ffb83e]"
          >
            Book Your Adventure
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>


      {/* ============================================================
          CULTURAL TRIPS
      ============================================================ */}
      <section className="bg-[#F8F6F1] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mb-14 max-w-4xl">
            <SectionLabel>
              Cultural Experiences
            </SectionLabel>

            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
              Cultural Trips
            </h2>

            <p className="mt-5 font-serif text-2xl leading-relaxed text-[#F5A623] sm:text-3xl">
              Discover East Africa’s Living Cultures: Beyond Wildlife and
              Landscapes!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Samburu */}
            <article className="overflow-hidden rounded-[2.5rem] bg-white shadow-sm">
              <div className="h-[300px] overflow-hidden">
                <img
                  src={samburu}
                  alt="Samburu cultural experience"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082D19] text-[#F5A623]">
                  <Users size={22} />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#082D19]">
                  Samburu Villages
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  Step into the heart of Samburu culture, where resilience and
                  tradition come alive in Kenya’s remote north. Visits to
                  Samburu manyattas reveal daily life shaped by semi-nomadic
                  herding, intricate beadwork, and age-old ceremonies. Guests
                  learn how each color, dance, and adornment tells a story
                  passed through generations. It’s more than a tour, it’s a
                  chance to connect with a proud community that thrives in
                  harmony with its arid landscape.
                </p>
              </div>
            </article>


            {/* Maasai */}
            <article className="overflow-hidden rounded-[2.5rem] bg-white shadow-sm">
              <div className="h-[300px] overflow-hidden">
                <img
                  src={maasai}
                  alt="Maasai cultural experience"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082D19] text-[#F5A623]">
                  <Users size={22} />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#082D19]">
                  Maasai Villages in Kenya and Tanzania
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  Experience Maasai life set against the sweeping plains of
                  Kenya’s Masai Mara or Tanzania’s Serengeti and Ngorongoro.
                  Here, cattle remain central to culture and identity. Visitors
                  are welcomed warmly into traditional mud-walled homes, watch
                  rhythmic dances and hear songs celebrating life’s milestones.
                  Learn the meaning behind vivid shukas, handcrafted beadwork,
                  and warrior traditions. Across borders, the Maasai’s
                  dedication to preserving heritage and storytelling offers an
                  authentic glimpse into a world both timeless and vibrant.
                </p>
              </div>
            </article>


            {/* Tanzania */}
            <article className="overflow-hidden rounded-[2.5rem] bg-white shadow-sm">
              <div className="h-[300px] overflow-hidden">
                <img
                  src={tanzania1}
                  alt="Tanzanian village cultural experience"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082D19] text-[#F5A623]">
                  <Users size={22} />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#082D19]">
                  Tanzanian Villages
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  In northern Tanzania, cultural visits deepen the journey.
                  Walk with the Hadzabe, among the last hunter-gatherers, whose
                  knowledge of tracking, foraging, and ancient survival skills
                  remains unchanged. Nearby, the Datoga blacksmiths showcase
                  ancestral metalwork techniques, crafting tools and jewelry by
                  hand while sharing stories of their pastoral roots. At Daffar
                  Tours and Travel, cultural visits are designed as respectful
                  exchanges rather than staged shows. These encounters invite
                  travelers to listen, learn, and discover living traditions
                  that add depth and humanity to every safari, turning an
                  African journey into a richer, shared story.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* ============================================================
          NGORONGORO CRATER
      ============================================================ */}
      <EditorialSection
        number="03"
        label="Tanzania • Wildlife"
        title="Experience the Magic of Descending into Ngorongoro Crater"
        image={ngorongoro2}
        imageAlt="Ngorongoro crater safari experience"
        reverse
        dark
      >
        <p>
          Picture the moment your safari vehicle begins its descent into the
          world’s largest intact volcanic caldera, revealing an ancient
          landscape unlike anywhere else on earth. At nearly 2,000 feet deep
          and spanning over 260 square kilometers, the Ngorongoro Crater is a
          living Eden where Africa’s densest concentration of wildlife roams
          freely against a dramatic backdrop of steep, forested walls.
        </p>

        <p>
          As you wind down the misty slopes at sunrise, the view opens into a
          hidden world: shimmering soda lakes dotted with flamingos, open
          plains where lions lounge under acacia trees, and swamps that attract
          elephants and hippos. The crater is also one of the few places in
          East Africa where you may encounter the elusive black rhino grazing
          peacefully in the morning light.
        </p>

        <p>
          At Daffar Tours and Travel, we believe descending into Ngorongoro is
          more than a safari stop; it’s an unforgettable moment where nature
          feels close enough to touch. Experience the thrill of tracking
          wildlife across this rich ecosystem, listen to the chorus of birds
          echoing off crater walls, and feel the quiet magic of being
          surrounded by one of Africa’s greatest natural wonders.
        </p>

        <p className="font-semibold text-white">
          Let us guide you into the heart of this breathtaking caldera, where
          every view tells a story and every turn invites awe!
        </p>
      </EditorialSection>


      


      {/* ============================================================
          GUIDED NATURE WALKS
      ============================================================ */}
      <EditorialSection 
  number="05" 
  label="On Foot • Nature" 
  title="Guided Nature Walks" 
  image={walk}
  imageAlt="Guided nature walk through the African wilderness"
  reverse 
  dark 
>
        <p>
          Guided Nature Walks with Daffar Tours and Travel offer more than just
          a walk, they invite you into the quiet heartbeat of East Africa’s
          wilderness. Led by our knowledgeable local guides, these immersive
          walks take you beyond the usual game drive, letting you explore
          hidden trails, ancient woodlands, and open savannahs alive with life.
          Discover medicinal plants whispered about in local folklore, spot
          colorful birds flitting through the canopy, and follow the fresh
          tracks of zebra, antelope, or even elephants that passed by at dawn.
        </p>

        <p>
          Every step reveals a new story: the delicate architecture of a
          weaverbird’s nest, the scent of wild herbs warming under the sun, and
          the ripple of grass as small creatures dart away unseen. Along the
          way, your guide will share fascinating insights into the region’s
          flora, fauna, and the delicate balance that sustains these
          ecosystems.
        </p>

        <p>
          With Daffar Tours and Travel, guided nature walks aren’t just about
          seeing, they’re about feeling connected: to the land, its wildlife,
          and the rich cultural heritage woven through every landscape. Slow
          down, breathe in the fresh morning air, and rediscover the wonder of
          the wild, step by step.
        </p>

        <p className="font-semibold text-white">
          Let Daffar Tours and Travel take you off the beaten path, where every
          walk becomes a journey of discovery and every moment brings East
          Africa’s hidden magic to life.
        </p>
      </EditorialSection>


      {/* ============================================================
          HIKING AND NATURE WALKS
      ============================================================ */}
      <EditorialSection
        number="06"
        label="Adventure • Hiking"
        title="Hiking and Nature Walks"
        image={climbinglongonot}
        imageAlt="Hiking and nature walks in Kenya"
      >
        <p>
          With Daffar Tours and Travel, every trail becomes a journey into East
          Africa’s hidden wonders. Imagine walking beneath ancient forest
          canopies, climbing volcanic ridges for sunrise views, or wandering
          through savannah paths where wildlife roams free. Our carefully
          crafted hikes and nature walks immerse you in landscapes that change
          with every step. In Kenya, explore the mist-shrouded Aberdares, famous
          for secret waterfalls like Karuru Falls and dense forests alive with
          colorful birds and gentle giants like elephants and buffalo. Feel the
          thrill of adventure at Hell’s Gate National Park, where narrow
          gorges, towering cliffs, and bubbling geothermal springs create a
          backdrop unlike anywhere else. For panoramic views, the breezy ridges
          of Ngong Hills reveal endless horizons stretching over the Great Rift
          Valley.
        </p>

        <p>
          Further south, Tanzania’s crown jewel, Mount Kilimanjaro, invites
          hikers to trek through rainforest, alpine moorland, and finally to icy
          peaks. Beyond Kilimanjaro, hidden gems like Mount Meru and the
          Usambara Mountains promise equally stunning trails wrapped in rich
          biodiversity. Uganda tempts explorers to wander ancient jungle paths
          in Bwindi, where every rustling leaf could mean a glimpse of unique
          wildlife. And Rwanda’s iconic Volcanoes National Park offers hikes up
          dramatic volcanic cones, where lush slopes overlook valleys draped in
          morning mist.
        </p>

        <p>
          At Daffar Tours and Travel, we believe every walk should awaken
          wonder; whether it’s a short, family-friendly trail or a challenging
          ascent. Step off the road, slow your pace, and let Africa’s raw
          landscapes, wildlife, and living history unfold around you.
        </p>

        <p className="font-semibold text-[#082D19]">
          Journey with us, and let each trail reveal the soul of East Africa!
        </p>
      </EditorialSection>


      {/* ============================================================
          BABOON CLIFF
      ============================================================ */}
      <EditorialSection
        number="07"
        label="Lake Nakuru • Hiking"
        title="Hiking at Baboon Cliff"
        image={gorilla}
        imageAlt="Baboon Cliff hiking experience"
        reverse
        dark
      >
        <p>
          Hiking to Baboon Cliff with Daffar Tours and Travel invites you to
          discover one of Lake Nakuru National Park’s most captivating
          viewpoints. This guided walk gently leads you up rocky trails
          surrounded by acacia trees and sweeping savannah, where every step
          reveals something new, from playful baboons and grazing antelope to
          colorful birdlife resting along the way. At the summit, you’re
          rewarded with a breathtaking panorama of the shimmering lake below,
          famous for its flamingo-dotted shoreline and the endless tapestry of
          woodlands stretching to the horizon.
        </p>

        <p>
          More than just a climb, this experience lets you slow down and truly
          connect with nature: pause to listen to the calls of African fish
          eagles echoing across the water, breathe in the fresh highland air,
          and capture stunning photographs from a vantage point few travelers
          ever see this intimately.
        </p>

        <p>
          Ideal for nature lovers and photographers alike, hiking Baboon Cliff
          blends gentle adventure with unforgettable scenery, making it a
          perfect addition to any Lake Nakuru safari. With Daffar Tours and
          Travel, you’re not just hiking; you’re stepping into a living
          landscape where every view tells a story and every moment feels wild
          and alive.
        </p>
      </EditorialSection>


      {/* ============================================================
          HOT AIR BALLOON SAFARIS
          EXACT CONTENT SUPPLIED
      ============================================================ */}
      <EditorialSection
        number="08"
        label="Hot Air Balloon Safaris"
        title="Hot Air Balloon Safaris"
        image={mara3}
        imageAlt="Hot air balloon safari"
      >
        <p>
          This guided walk gently leads you up rocky trails surrounded by
          acacia trees and sweeping savannah, where every step reveals
          something new, from playful baboons and grazing antelope to colorful
          birdlife resting along the way. At the summit, you’re rewarded with a
          breathtaking panorama of the shimmering lake below, famous for its
          flamingo-dotted shoreline and the endless tapestry of woodlands
          stretching to the horizon.
        </p>

        <p>
          More than just a climb, this experience lets you slow down and truly
          connect with nature: pause to listen to the calls of African fish
          eagles echoing across the water, breathe in the fresh highland air,
          and capture stunning photographs from a vantage point few travelers
          ever see this intimately.
        </p>

        <p>
          Ideal for nature lovers and photographers alike, hiking Baboon Cliff
          blends gentle adventure with unforgettable scenery, making it a
          perfect addition to any Lake Nakuru safari. With Daffar Tours and
          Travel, you’re not just hiking; you’re stepping into a living
          landscape where every view tells a story and every moment feels wild
          and alive.
        </p>
      </EditorialSection>


      {/* ============================================================
          MOUNTAIN CLIMBING
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#082D19] py-20 text-white sm:py-24 lg:py-32">

        <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#F5A623]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

          <div className="max-w-5xl">
            <SectionLabel light>
              Mountain Adventures
            </SectionLabel>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Mountain Climbing
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/75">
              East Africa calls out to adventurers with its legendary peaks,
              each offering breathtaking scenery, rich biodiversity, and moments
              of triumph you’ll remember for a lifetime. At Daffar Tours and
              Travel, we craft mountain climbing experiences in Kenya, Tanzania,
              and Uganda that go beyond the summit to immerse you in the soul of
              Africa’s mountains. In Kenya, Mount Kenya rises to 5,199 meters,
              captivating climbers with its rugged ridges, hidden glaciers, and
              distinct peaks: Batian, Nelion, and the more accessible Point
              Lenana. Ascend through misty bamboo forests and alpine meadows
              alive with unique flora and birdlife, and stand above the clouds
              with panoramic views of the plains below. Popular routes like
              Sirimon and Chogoria combine adventure with stunning landscapes.
            </p>
          </div>


          {/* MOUNT KENYA */}
          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

            <div className="overflow-hidden rounded-[2.5rem]">
              <img
                src={climbingkenya}
                alt="Mount Kenya climbing"
                className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3 text-[#F5A623]">
                <Mountain size={25} />
                <span className="text-sm font-bold uppercase tracking-[0.25em]">
                  Kenya
                </span>
              </div>

              <h3 className="font-serif text-4xl font-semibold">
                Mount Kenya
              </h3>

              <p className="mt-6 text-base leading-8 text-white/70">
                In Kenya, Mount Kenya rises to 5,199 meters, captivating
                climbers with its rugged ridges, hidden glaciers, and distinct
                peaks: Batian, Nelion, and the more accessible Point Lenana.
                Ascend through misty bamboo forests and alpine meadows alive
                with unique flora and birdlife, and stand above the clouds with
                panoramic views of the plains below. Popular routes like Sirimon
                and Chogoria combine adventure with stunning landscapes.
              </p>
            </div>

          </div>


          {/* KILIMANJARO */}
          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

            <div className="overflow-hidden rounded-[2.5rem] lg:order-2">
              <img
                src={kili1}
                alt="Mount Kilimanjaro climbing"
                className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="lg:order-1">
              <div className="mb-5 flex items-center gap-3 text-[#F5A623]">
                <Mountain size={25} />
                <span className="text-sm font-bold uppercase tracking-[0.25em]">
                  Tanzania
                </span>
              </div>

              <h3 className="font-serif text-4xl font-semibold">
                Mount Kilimanjaro
              </h3>

              <p className="mt-6 text-base leading-8 text-white/70">
                Tanzania’s Mount Kilimanjaro, Africa’s highest peak at 5,895
                meters, offers a bucket-list climb through ever-changing
                ecological zones — from tropical rainforests and giant heather
                moorlands to snow-capped summit glaciers. Whether you choose
                the scenic Machame Route or the gentler Marangu Route, every
                step brings new vistas and the unforgettable moment of sunrise
                at Uhuru Peak.
              </p>
            </div>

          </div>


          {/* RWENZORI & ELGON */}
          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

            <div className="overflow-hidden rounded-[2.5rem]">
  <img
    src="https://safaribookingkenya.com/wp-content/uploads/2024/09/mount-elgon.jpg"
    alt="Mount Elgon, Kenya"
    className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
  />
</div>

            <div>
              <div className="mb-5 flex items-center gap-3 text-[#F5A623]">
                <Mountain size={25} />
                <span className="text-sm font-bold uppercase tracking-[0.25em]">
                  Uganda
                </span>
              </div>

              <h3 className="font-serif text-4xl font-semibold">
                Rwenzori Mountains & Mount Elgon
              </h3>

              <p className="mt-6 text-base leading-8 text-white/70">
                In Uganda, the wild and lesser-known Rwenzori Mountains await.
                Nicknamed the “Mountains of the Moon,” these mist-shrouded
                peaks feature dramatic glaciers, rare giant lobelias, and
                otherworldly landscapes. For a gentler adventure, Mount Elgon
                rewards climbers with ancient calderas, waterfalls, and lush
                forest trails teeming with wildlife. At Daffar Tours and Travel,
                we believe climbing is more than reaching a summit; it’s about
                the journey, the landscapes you cross, and the memories you
                create. Embark on your next great adventure with us.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          WALKING SAFARIS
      ============================================================ */}
      <EditorialSection
        number="10"
        label="Walking Safaris"
        title="Walking Safaris"
        image={climbingkili}
        imageAlt="Walking safari in East Africa"
      >
        <p>
          Step off the beaten track and discover Africa on foot with Daffar
          Tours and Travel. Our walking safaris invite you to slow down, tune
          in, and feel the pulse of the wilderness around you, guided by
          skilled trackers and passionate naturalists who know every trail,
          scent, and hidden path. Imagine tracing animal footprints across open
          plains, pausing to watch elephants grazing silently ahead, or
          catching the flicker of a kudu disappearing into the brush. Feel the
          sun on your shoulders, listen to birdsong overhead, and breathe in
          the earthy scent of the savannah as every sense awakens.
        </p>

        <p>
          Unlike a game drive, walking safaris bring you eye-to-eye with
          Africa’s smaller wonders too including colorful insects, medicinal
          plants, and animal tracks that tell the untold stories of the wild.
          Whether you’re crossing golden grasslands, winding through acacia
          woodlands, or strolling along seasonal riverbeds, each step deepens
          your connection to nature.
        </p>

        <p>
          At Daffar Tours and Travel, we craft these journeys to balance safety,
          learning, and excitement, turning a simple walk into an unforgettable
          exploration of East Africa’s raw beauty. Discover Africa’s soul, one
          step at a time.
        </p>
      </EditorialSection>


      {/* ============================================================
          WATER SPORTS AND FISHING
          EXACT CONTENT SUPPLIED
      ============================================================ */}
      <EditorialSection
  number="11"
  label="Water Sports & Fishing"
  title="Water Sports and Fishing"
  image="https://www.alfajirivillas.com/app/uploads/2022/01/deep_seafishing02.jpg"
  imageAlt="Deep sea sport fishing in Diani Beach, Kenya"
  reverse
  dark
>
        <p>
          Step beyond the safari vehicle and explore East Africa’s untamed
          beauty on foot with Daffar Tours and Travel. Our walking safaris
          promise an intimate journey into the heart of nature, guided by
          seasoned trackers who know every whisper of the wind and rustle of
          the grass. Feel the thrill of tracing animal tracks across open
          plains, wander through ancient woodlands alive with birdsong, and
          pause by hidden watering holes where wildlife comes to drink.
        </p>

        <p>
          Unlike a traditional game drive, these treks offer a closer
          connection to Africa’s small wonders: colorful butterflies, medicinal
          plants, and fresh animal tracks that tell stories of the night before.
          Whether you’re strolling along sunlit savannahs or exploring rugged
          riverbanks, each walk is tailored to awaken your senses and deepen
          your appreciation of the wild.
        </p>

        <p>
          Your guide’s knowledge transforms every step into discovery, sharing
          insights about local flora, animal behavior, and the delicate balance
          that sustains these ecosystems. Ideal for travelers seeking more than
          just sightseeing, our walking safaris blend adventure, learning, and
          peaceful reflection, capturing the true spirit of East Africa, one
          unforgettable step at a time. Discover nature up close, and let the
          wilderness tell its story through your footsteps.
        </p>
      </EditorialSection>


      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#F5A623] py-20 sm:py-24 lg:py-28">

        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#082D19]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#082D19] text-[#F5A623]">
            <Footprints size={27} />
          </div>

          <h2 className="mt-7 font-serif text-4xl font-semibold leading-tight text-[#082D19] sm:text-5xl lg:text-6xl">
            Explore East Africa
            <span className="block">
              Your Way.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#082D19]/70">
            From birding and cultural encounters to mountain adventures,
            walking safaris and unforgettable experiences across East Africa,
            Daffar Tours and Travel is ready to create your journey.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#082D19] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#0d4226]"
            >
              Plan Your Journey
              <ArrowRight size={18} />
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#082D19]/20 px-8 py-4 font-bold text-[#082D19] transition hover:bg-white/30"
            >
              WhatsApp Us
            </a>

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
             
  {/* SOCIAL */}

  <div className="mt-6 flex items-center gap-2.5">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/19QDDWcvTd/"
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
    href="https://www.instagram.com/daffartoursandtravel?stkn=MXZjd2k5Nm05dXk4dQ"
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
    href="https://www.tiktok.com/@daffartoursandtravel?_r=1&_t=ZS-99cSHcpfpn0"
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
                    Kenya and TZ • East Africa
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
    </main>
  );
}

