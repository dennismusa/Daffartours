import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Heart,
  Leaf,
  Users,
  Globe2,
  Recycle,
  GraduationCap,
  ShieldCheck,
  TreePine,
  HandHeart,
  Sparkles,
} from "lucide-react";

/* =========================================================
   ONLINE IMAGES
   ========================================================= */

const images = {
  hero:
    "https://images.unsplash.com/photo-1785099159811-b7781d0b3878?auto=format&fit=crop&w=2200&q=85",

  conservation:
    "https://images.pexels.com/photos/29506189/pexels-photo-29506189.jpeg?auto=compress&cs=tinysrgb&w=1800",

  community:
    "https://images.unsplash.com/photo-1685301084071-ff20d5f64690?auto=format&fit=crop&w=1800&q=85",

  giraffes:
    "https://images.unsplash.com/photo-1685301072752-a200d194aacb?auto=format&fit=crop&w=1600&q=85",

  elephant:
    "https://images.unsplash.com/photo-1692642942906-d12b105aff6a?auto=format&fit=crop&w=1600&q=85",

  safari:
    "https://images.unsplash.com/photo-1785099159811-b7781d0b3878?auto=format&fit=crop&w=1600&q=85",
};

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const initiatives = [
  {
    title: "Community Support",
    description:
      "Supporting local communities and creating meaningful connections between travelers and the people who call these destinations home.",
    image: images.community,
    icon: HandHeart,
  },

  {
    title: "Conservation",
    description:
      "Promoting responsible tourism and supporting efforts that protect wildlife, natural habitats, and the environment.",
    image: images.conservation,
    icon: Leaf,
  },

  {
    title: "Local Communities",
    description:
      "Working with local communities so tourism can create meaningful opportunities and contribute positively to local livelihoods.",
    image: images.giraffes,
    icon: Users,
  },

  {
    title: "Cultural Heritage",
    description:
      "Celebrating African traditions, cultures, and heritage while encouraging respectful and authentic cultural experiences.",
    image: images.community,
    icon: Globe2,
  },

  {
    title: "Responsible Travel",
    description:
      "Encouraging travelers to explore responsibly, respect local environments, and leave a positive impact on every destination.",
    image: images.elephant,
    icon: Recycle,
  },

  {
    title: "Future Initiatives",
    description:
      "Developing partnerships and initiatives that can create lasting benefits for communities, conservation, and the environment.",
    image: images.safari,
    icon: TreePine,
  },
];

const impactAreas = [
  {
    icon: Users,
    title: "Community",
    description: "Supporting people and local livelihoods.",
  },

  {
    icon: Leaf,
    title: "Conservation",
    description: "Protecting wildlife and natural habitats.",
  },

  {
    icon: GraduationCap,
    title: "Education",
    description: "Creating opportunities for future generations.",
  },

  {
    icon: Recycle,
    title: "Environment",
    description: "Encouraging responsible environmental practices.",
  },
];

/* =========================================================
   INITIATIVE CARD
========================================================= */

function InitiativeCard({ initiative }) {
  const Icon = initiative.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group
        overflow-hidden
        rounded-[1.75rem]
        bg-white
        shadow-sm
        transition-shadow
        duration-500
        hover:shadow-2xl
      "
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={initiative.image}
          alt={initiative.title}
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="h-full w-full object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        />

        <div
          className="
            absolute
            right-4
            top-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#F39A08]/50
            bg-[#0D4825]/90
            text-[#F39A08]
            backdrop-blur-md
          "
        >
          <Icon size={21} />
        </div>

        <h3
          className="
            absolute
            bottom-5
            left-5
            right-5
            font-serif
            text-2xl
            font-bold
            text-white
          "
        >
          {initiative.title}
        </h3>
      </div>

      <div className="p-6">
        <p className="text-sm leading-relaxed text-gray-600">
          {initiative.description}
        </p>

        <div
          className="
            mt-5
            h-px
            origin-left
            scale-x-0
            bg-[#0D4825]/10
            transition-transform
            duration-500
            group-hover:scale-x-100
          "
        />
      </div>
    </motion.article>
  );
}

/* =========================================================
   IMPACT POINT
========================================================= */

function ImpactPoint({ number, icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      className="flex gap-4"
    >
      <div
        className="
          flex
          h-11
          w-11
          flex-shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#F39A08]/30
          bg-[#F39A08]/10
          text-[#F39A08]
        "
      >
        <Icon size={18} />
      </div>

      <div>
        <div className="flex items-center gap-3">
          <span
            className="
              text-[10px]
              font-bold
              tracking-widest
              text-[#F39A08]/60
            "
          >
            {number}
          </span>

          <h3 className="text-base font-bold text-white sm:text-lg">
            {title}
          </h3>
        </div>

        <p
          className="
            mt-1.5
            max-w-lg
            text-sm
            leading-relaxed
            text-white/60
          "
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   IMPACT CARD
========================================================= */

function ImpactCard({ area }) {
  const Icon = area.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        group
        rounded-3xl
        border
        border-[#0D4825]/5
        bg-[#F7F4EA]
        p-5
        text-center
        transition-all
        duration-300
        hover:border-[#F39A08]/40
        hover:shadow-xl
        sm:p-7
      "
    >
      <div
        className="
          mx-auto
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#0D4825]
          text-[#F39A08]
          transition-colors
          duration-300
          group-hover:bg-[#F39A08]
          group-hover:text-[#0D4825]
        "
      >
        <Icon size={25} />
      </div>

      <h3
        className="
          mt-4
          text-base
          font-bold
          text-[#0D4825]
          sm:text-lg
        "
      >
        {area.title}
      </h3>

      <p
        className="
          mt-2
          text-xs
          leading-relaxed
          text-gray-500
          sm:text-sm
        "
      >
        {area.description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function Communitywork() {
  return (
    <main className="overflow-hidden bg-[#F7F4EA] text-[#183020]">

      {/* =====================================================
          HERO
      ====================================================== */}

      ```jsx
{/* =====================================================
    HERO — COMPACT BACKGROUND IMAGE
===================================================== */}

<section
  className="
    relative
    overflow-hidden
    min-h-[500px]
    sm:min-h-[540px]
    lg:min-h-[580px]
    flex
    items-center
    bg-cover
    bg-center
    bg-no-repeat
  "
  style={{
    backgroundImage: `url("${images.hero}")`,
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#071f11]/65" />

  {/* GREEN GRADIENT */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#0D4825]/95
      via-[#0D4825]/70
      to-[#0D4825]/20
    "
  />

  {/* SOFT GOLD GLOW */}
  <div
    className="
      pointer-events-none
      absolute
      -right-32
      -top-32
      h-80
      w-80
      rounded-full
      bg-[#F39A08]/10
      blur-3xl
    "
  />

  {/* CONTENT */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      w-full
      max-w-7xl
      items-center
      px-5
      py-24
      sm:px-8
      sm:py-28
      lg:px-12
      lg:py-32
    "
  >
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-3xl"
    >

      {/* LABEL */}
      <motion.div variants={fadeUp}>
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#F39A08]/40
            bg-[#F39A08]/15
            px-4
            py-2
            text-[11px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#F39A08]
            backdrop-blur-md
            sm:text-xs
          "
        >
          <Heart size={14} />

          Community & Conservation
        </span>
      </motion.div>

      {/* HEADING */}
      <motion.h1
        variants={fadeUp}
        className="
          mt-5
          max-w-3xl
          font-serif
          text-4xl
          font-bold
          leading-[1.05]
          text-white
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        Travel With A

        <span className="block text-[#F39A08]">
          Positive Impact.
        </span>
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        variants={fadeUp}
        className="
          mt-6
          max-w-2xl
          text-sm
          leading-relaxed
          text-white/75
          sm:text-base
          lg:text-lg
        "
      >
        We believe travel should go beyond beautiful
        destinations. Every journey should respect people,
        celebrate cultures, protect wildlife, and contribute
        positively to the places we visit.
      </motion.p>

      {/* BUTTONS */}
      
    </motion.div>
  </div>

  {/* BOTTOM FADE */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      right-0
      h-24
      bg-gradient-to-t
      from-[#F7F4EA]/20
      to-transparent
    "
  />
</section>



      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="  mx-auto max-w-5xl px-5  text-center sm:px-8 "  >
          <span
            className=" text-xs  font-bold  uppercase tracking-[0.2em]  text-[#F39A08] sm:text-sm  "   >
            Our Commitment
          </span>

          <h2
            className=" mt-4  font-serif  text-3xl font-bold  text-[#0D4825]  sm:text-4xl lg:text-5xl   "   >
            Tourism That Gives
            <span className="text-[#F39A08]">
              {" "}Back.
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#F39A08]" />

          <p
            className="   mx-auto     mt-7    max-w-3xl   text-base  leading-relaxed   text-gray-600 sm:text-lg "  >
            Africa's natural beauty, wildlife, communities, and
            cultures are at the heart of every journey we create.
            We believe responsible tourism should respect these
            treasures while contributing positively to the people
            and places that make Africa extraordinary.
          </p>

          <p
            className="  mx-auto    mt-5     max-w-3xl   leading-relaxed text-gray-500   "   >
            As Daffar Tours & Travel grows, we aim to develop
            meaningful partnerships and initiatives that create
            lasting value for communities and the environment.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          AREAS OF FOCUS
      ====================================================== */}

      <section className="py-20 sm:py-24 lg:py-32">
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-12
          "
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="
              mx-auto
              mb-14
              max-w-3xl
              text-center
            "
          >
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#F39A08]
                sm:text-sm
              "
            >
              What We Care About
            </span>

            <h2
              className="
                mt-4
                font-serif
                text-3xl
                font-bold
                text-[#0D4825]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Our Areas Of
              <span className="text-[#F39A08]">
                {" "}Focus.
              </span>
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Responsible tourism begins with understanding the
              people, wildlife, cultures, and environments that
              make every destination unique.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {initiatives.map((initiative) => (
              <InitiativeCard
                key={initiative.title}
                initiative={initiative}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONSERVATION
      ====================================================== */}

      <section className="bg-[#0D4825] py-20 sm:py-24 lg:py-32">
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-20
            "
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
            >
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#F39A08]
                  sm:text-sm
                "
              >
                Protecting What Matters
              </span>

              <h2
                className="
                  mt-4
                  font-serif
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                People.
                <span className="text-[#F39A08]">
                  {" "}Wildlife.
                </span>

                <br />

                Nature.
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  leading-relaxed
                  text-white/70
                "
              >
                Africa's wildlife and natural landscapes are
                among the world's most valuable treasures.
                Responsible tourism can help protect them while
                creating positive opportunities for the communities
                that live alongside them.
              </p>

              <div className="mt-9 space-y-6">
                <ImpactPoint
                  number="01"
                  icon={Leaf}
                  title="Respect Nature"
                  text="Encouraging responsible travel practices that help protect natural environments."
                />

                <ImpactPoint
                  number="02"
                  icon={Users}
                  title="Support Communities"
                  text="Recognizing the important role local communities play in sustainable tourism."
                />

                <ImpactPoint
                  number="03"
                  icon={ShieldCheck}
                  title="Protect Wildlife"
                  text="Promoting responsible wildlife experiences and respect for animals in their natural habitats."
                />

                <ImpactPoint
                  number="04"
                  icon={Globe2}
                  title="Preserve Culture"
                  text="Encouraging respectful interactions with local cultures, traditions, and heritage."
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <motion.img
                  src={images.conservation}
                  alt="Wildlife conservation in Kenya"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  className="
                    h-[400px]
                    w-full
                    object-cover
                    sm:h-[500px]
                    lg:h-[600px]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0D4825]/70
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-2xl
                  bg-white
                  px-5
                  py-4
                  shadow-2xl
                  sm:bottom-7
                  sm:left-7
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F39A08]/15
                      text-[#F39A08]
                    "
                  >
                    <Leaf size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#0D4825]">
                      Responsible Travel
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Explore with purpose
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY CONNECTION
      ====================================================== */}

      <section className="bg-[#F7F4EA] py-20 sm:py-24 lg:py-32">
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-20
            "
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem]">
                <motion.img
                  src={images.community}
                  alt="African community and responsible tourism"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  className="
                    h-[380px]
                    w-full
                    object-cover
                    sm:h-[480px]
                  "
                />
              </div>

              <div
                className="
                  absolute
                  -bottom-5
                  right-4
                  rounded-2xl
                  bg-[#F39A08]
                  px-6
                  py-5
                  text-[#0D4825]
                  shadow-xl
                  sm:-bottom-6
                  sm:right-6
                "
              >
                <Users size={24} />

                <p className="mt-2 font-bold">
                  Community
                </p>

                <p className="mt-1 text-xs">
                  People & places
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
            >
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#F39A08]
                  sm:text-sm
                "
              >
                Local Connections
              </span>

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
                Connecting Travelers

                <span className="block text-[#F39A08]">
                  With Communities.
                </span>
              </h2>

              <div className="mt-6 h-1 w-16 rounded-full bg-[#F39A08]" />

              <p className="mt-7 leading-relaxed text-gray-600">
                Travel becomes more meaningful when visitors
                have an opportunity to understand the people
                and communities that call these destinations
                home.
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                Through responsible experiences and local
                partnerships, we aim to create opportunities
                for travelers to connect with Africa in a
                respectful and meaningful way.
              </p>

              <Link
                to="/contact"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0D4825]
                  px-7
                  py-4
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#176B35]
                "
              >
                Learn More

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT / FUTURE PROJECTS
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="
            mx-auto
            max-w-5xl
            px-5
            text-center
            sm:px-8
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#F39A08]
              sm:text-sm
            "
          >
            <Sparkles size={16} />
            Growing Our Impact
          </span>

          <h2
            className="
              mt-4
              font-serif
              text-3xl
              font-bold
              text-[#0D4825]
              sm:text-4xl
              lg:text-5xl
            "
          >
            More Projects.
            <span className="text-[#F39A08]">
              {" "}More Impact.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              leading-relaxed
              text-gray-600
            "
          >
            As Daffar Tours & Travel grows, we look forward to
            developing partnerships and initiatives that support
            communities, conservation, education, and environmental
            responsibility.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="
            mx-auto
            mt-12
            grid
            max-w-6xl
            grid-cols-2
            gap-4
            px-5
            sm:gap-6
            sm:px-8
            lg:grid-cols-4
          "
        >
          {impactAreas.map((area) => (
            <ImpactCard
              key={area.title}
              area={area}
            />
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0D4825]">

        <div
          className="
            absolute
            -left-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-[#F39A08]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-96
            w-96
            rounded-full
            bg-[#176B35]
            opacity-30
            blur-3xl
          "
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
            px-5
            py-20
            text-center
            sm:px-8
            sm:py-24
            lg:py-32
          "
        >
          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#F39A08]
              sm:text-sm
            "
          >
            Travel Responsibly
          </span>

          <h2
            className="
              mt-5
              font-serif
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:text-4xl
              lg:text-6xl
            "
          >
            Explore Africa.

            <span className="block text-[#F39A08]">
              Leave A Positive Impact.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-white/70
              sm:text-lg
            "
          >
            Your journey can be more than a holiday. Discover,
            connect, respect, and contribute while experiencing
            the extraordinary beauty of Africa.
          </p>

          <div
            className="
              mt-9
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
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#F39A08]
                px-8
                py-4
                font-bold
                text-[#0D4825]
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ffad20]
              "
            >
              Plan Your Journey

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              to="/safaris"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/5
                px-8
                py-4
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                hover:border-[#F39A08]
                hover:text-[#F39A08]
              "
            >
              Explore Safaris
            </Link>
          </div>
        </motion.div>
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

                {/* SOCIALS */}

                <div className="mt-6 flex items-center gap-2.5">

                  {/* FACEBOOK */}

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
                      hover:shadow-lg
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1z" />
                    </svg>
                  </a>

                  {/* INSTAGRAM */}

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
                      className="
                        h-[18px]
                        w-[18px]
                        fill-none
                        stroke-current
                      "
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

                  {/* TIKTOK */}

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

                  {/* YOUTUBE */}

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

                  {[
                    ["/", "Home"],
                    ["/about", "About Us"],
                    ["/safaris", "Safaris"],
                    
                    ["/activities", "Activities"],
                    ["/contact", "Contact"],
                  ].map(([href, label]) => (
                    <Link
                      key={label}
                      to={href}
                      className="
                        block
                        text-sm
                        text-white/55
                        transition-colors
                        hover:text-[#F39A08]
                      "
                    >
                      {label}
                    </Link>
                  ))}

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

                  {[
                    ["/communitywork", "Community Work"],
                    ["/tourafricablog", "Tour Africa Blog"],
                    ["/faqs", "FAQs"],
                    ["/safaris", "Tailor-Made Safaris"],
                    ["/safaris", "Honeymoon Safaris"],
                    ["/contact", "Plan Your Trip"],
                  ].map(([href, label]) => (
                    <Link
                      key={label}
                      to={href}
                      className="
                        block
                        text-sm
                        text-white/55
                        transition-colors
                        hover:text-[#F39A08]
                      "
                    >
                      {label}
                    </Link>
                  ))}

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

                  {/* LOCATION */}

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
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-white/30
                        "
                      >
                        Location
                      </p>

                      <p className="mt-1 text-sm text-white/60">
                        Kenya • East Africa
                      </p>
                    </div>
                  </div>

                  {/* EMAIL */}

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
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-white/30
                        "
                      >
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

                  {/* PHONE */}

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
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-white/30
                        "
                      >
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
                Kenya • Africa
              </p>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

export default Communitywork;