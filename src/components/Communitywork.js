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
    image: "/images/community/community-support.jpg",
    icon: HandHeart,
  },
  {
    title: "Conservation",
    description:
      "Promoting responsible tourism and supporting efforts that protect wildlife, natural habitats, and the environment.",
    image: "/images/community/conservation.jpg",
    icon: Leaf,
  },
  {
    title: "Local Communities",
    description:
      "Working with local communities so tourism can create meaningful opportunities and contribute positively to local livelihoods.",
    image: "/images/community/local-community.jpg",
    icon: Users,
  },
  {
    title: "Cultural Heritage",
    description:
      "Celebrating African traditions, cultures, and heritage while encouraging respectful and authentic cultural experiences.",
    image: "/images/community/cultural-heritage.jpg",
    icon: Globe2,
  },
  {
    title: "Responsible Travel",
    description:
      "Encouraging travelers to explore responsibly, respect local environments, and leave a positive impact on every destination.",
    image: "/images/community/responsible-travel.jpg",
    icon: Recycle,
  },
  {
    title: "Future Initiatives",
    description:
      "Developing partnerships and initiatives that can create lasting benefits for communities, conservation, and the environment.",
    image: "/images/community/future-initiatives.jpg",
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
        bg-white
        rounded-[1.75rem]
        overflow-hidden
        shadow-sm
        hover:shadow-2xl
        transition-shadow
        duration-500
      "
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={initiative.image}
          alt={initiative.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full object-cover"
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
            top-4
            right-4
            w-12
            h-12
            rounded-full
            bg-[#0D4825]/90
            backdrop-blur-md
            border
            border-[#F39A08]/50
            flex
            items-center
            justify-center
            text-[#F39A08]
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
            text-2xl
            font-serif
            font-bold
            text-white
          "
        >
          {initiative.title}
        </h3>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm leading-relaxed">
          {initiative.description}
        </p>

        <div
          className="
            mt-5
            h-px
            bg-[#0D4825]/10
            origin-left
            scale-x-0
            group-hover:scale-x-100
            transition-transform
            duration-500
          "
        />
      </div>
    </motion.article>
  );
}

/* =========================================================
   IMPACT POINT
========================================================= */

function ImpactPoint({
  number,
  icon: Icon,
  title,
  text,
}) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      className="flex gap-4"
    >
      <div
        className="
          flex-shrink-0
          w-11
          h-11
          rounded-full
          bg-[#F39A08]/10
          border
          border-[#F39A08]/30
          flex
          items-center
          justify-center
          text-[#F39A08]
        "
      >
        <Icon size={18} />
      </div>

      <div>
        <div className="flex items-center gap-3">
          <span
            className="
              text-[#F39A08]/60
              text-[10px]
              font-bold
              tracking-widest
            "
          >
            {number}
          </span>

          <h3 className="text-white font-bold text-base sm:text-lg">
            {title}
          </h3>
        </div>

        <p
          className="
            mt-1.5
            text-white/60
            text-sm
            leading-relaxed
            max-w-lg
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
        bg-[#F7F4EA]
        rounded-3xl
        p-5
        sm:p-7
        border
        border-[#0D4825]/5
        hover:border-[#F39A08]/40
        hover:shadow-xl
        transition-all
        duration-300
        text-center
      "
    >
      <div
        className="
          mx-auto
          w-14
          h-14
          rounded-2xl
          bg-[#0D4825]
          text-[#F39A08]
          flex
          items-center
          justify-center
          group-hover:bg-[#F39A08]
          group-hover:text-[#0D4825]
          transition-colors
          duration-300
        "
      >
        <Icon size={25} />
      </div>

      <h3
        className="
          mt-4
          text-[#0D4825]
          font-bold
          text-base
          sm:text-lg
        "
      >
        {area.title}
      </h3>

      <p
        className="
          mt-2
          text-gray-500
          text-xs
          sm:text-sm
          leading-relaxed
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
    <main className="bg-[#F7F4EA] text-[#183020] overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[68vh] flex items-center overflow-hidden">

        <motion.img
          src="/images/community/community-hero.jpg"
          alt="Community and conservation in Africa"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        <div className="absolute inset-0 bg-[#071f11]/75" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#0D4825]
            via-[#0D4825]/75
            to-[#0D4825]/20
          "
        />

        <div
          className="
            absolute
            -top-40
            -right-40
            w-96
            h-96
            rounded-full
            bg-[#F39A08]/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-28
            lg:py-32
          "
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-[#F39A08]/15
                  border
                  border-[#F39A08]/40
                  text-[#F39A08]
                  text-xs
                  sm:text-sm
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  backdrop-blur-md
                "
              >
                <Heart size={14} />
                Community & Conservation
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="
                mt-6
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-serif
                font-bold
                text-white
                leading-[1.05]
              "
            >
              Travel With A

              <span className="block text-[#F39A08]">
                Positive Impact.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="
                mt-7
                max-w-2xl
                text-base
                sm:text-lg
                lg:text-xl
                text-white/80
                leading-relaxed
              "
            >
              We believe travel should go beyond beautiful
              destinations. Every journey should respect people,
              celebrate cultures, protect wildlife, and contribute
              positively to the places we visit.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                mt-9
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
                  px-7
                  py-4
                  rounded-full
                  bg-[#F39A08]
                  hover:bg-[#ffad20]
                  text-[#0D4825]
                  font-bold
                  shadow-xl
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Travel With Us

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-4
                  rounded-full
                  border
                  border-white/30
                  bg-white/5
                  backdrop-blur-md
                  text-white
                  font-bold
                  hover:border-[#F39A08]
                  hover:text-[#F39A08]
                  transition-all
                  duration-300
                "
              >
                About Daffar
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            hidden
            sm:flex
            flex-col
            items-center
            gap-2
            text-white/60
          "
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Discover
          </span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              w-5
              h-8
              rounded-full
              border
              border-white/40
              flex
              justify-center
              pt-1
            "
          >
            <div className="w-1 h-1 rounded-full bg-[#F39A08]" />
          </motion.div>
        </motion.div>
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
          className="
            max-w-5xl
            mx-auto
            px-5
            sm:px-8
            text-center
          "
        >
          <span
            className="
              text-[#F39A08]
              text-xs
              sm:text-sm
              font-bold
              uppercase
              tracking-[0.2em]
            "
          >
            Our Commitment
          </span>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-serif
              font-bold
              text-[#0D4825]
            "
          >
            Tourism That Gives
            <span className="text-[#F39A08]">
              {" "}Back.
            </span>
          </h2>

          <div className="w-16 h-1 bg-[#F39A08] mx-auto mt-6 rounded-full" />

          <p
            className="
              mt-7
              text-gray-600
              text-base
              sm:text-lg
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Africa's natural beauty, wildlife, communities, and
            cultures are at the heart of every journey we create.
            We believe responsible tourism should respect these
            treasures while contributing positively to the people
            and places that make Africa extraordinary.
          </p>

          <p
            className="
              mt-5
              text-gray-500
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
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
            max-w-7xl
            mx-auto
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
              text-center
              max-w-3xl
              mx-auto
              mb-14
            "
          >
            <span
              className="
                text-[#F39A08]
                text-xs
                sm:text-sm
                font-bold
                uppercase
                tracking-[0.2em]
              "
            >
              What We Care About
            </span>

            <h2
              className="
                mt-4
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-serif
                font-bold
                text-[#0D4825]
              "
            >
              Our Areas Of
              <span className="text-[#F39A08]">
                {" "}Focus.
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
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
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
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
              gap-12
              lg:gap-20
              items-center
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
                  text-[#F39A08]
                  text-xs
                  sm:text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Protecting What Matters
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
                  leading-tight
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
                  text-white/70
                  leading-relaxed
                  max-w-xl
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
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="/images/community/conservation-main.jpg"
                  alt="Wildlife conservation"
                  className="
                    w-full
                    h-[400px]
                    sm:h-[500px]
                    lg:h-[600px]
                    object-cover
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
                  sm:bottom-7
                  sm:left-7
                  bg-white
                  rounded-2xl
                  px-5
                  py-4
                  shadow-2xl
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-[#F39A08]/15
                      flex
                      items-center
                      justify-center
                      text-[#F39A08]
                    "
                  >
                    <Leaf size={18} />
                  </div>

                  <div>
                    <p className="text-[#0D4825] font-bold text-sm">
                      Responsible Travel
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
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
              gap-12
              lg:gap-20
              items-center
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
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="/images/community/community-main.jpg"
                  alt="Local community experience"
                  className="
                    w-full
                    h-[380px]
                    sm:h-[480px]
                    object-cover
                  "
                />

              </div>

              <div
                className="
                  absolute
                  -bottom-5
                  right-4
                  sm:-bottom-6
                  sm:right-6
                  bg-[#F39A08]
                  text-[#0D4825]
                  rounded-2xl
                  px-6
                  py-5
                  shadow-xl
                "
              >
                <Users size={24} />

                <p className="font-bold mt-2">
                  Community
                </p>

                <p className="text-xs mt-1">
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
                  text-[#F39A08]
                  text-xs
                  sm:text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Local Connections
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-serif
                  font-bold
                  text-[#0D4825]
                  leading-tight
                "
              >
                Connecting Travelers

                <span className="block text-[#F39A08]">
                  With Communities.
                </span>
              </h2>

              <div className="w-16 h-1 bg-[#F39A08] mt-6 rounded-full" />

              <p
                className="
                  mt-7
                  text-gray-600
                  leading-relaxed
                "
              >
                Travel becomes more meaningful when visitors
                have an opportunity to understand the people
                and communities that call these destinations
                home.
              </p>

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-relaxed
                "
              >
                Through responsible experiences and local
                partnerships, we aim to create opportunities
                for travelers to connect with Africa in a
                respectful and meaningful way.
              </p>

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  mt-8
                  bg-[#0D4825]
                  hover:bg-[#176B35]
                  text-white
                  px-7
                  py-4
                  rounded-full
                  font-bold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Learn More

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
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
            max-w-5xl
            mx-auto
            px-5
            sm:px-8
            text-center
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-[#F39A08]
              text-xs
              sm:text-sm
              font-bold
              uppercase
              tracking-[0.2em]
            "
          >
            <Sparkles size={16} />
            Growing Our Impact
          </span>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-serif
              font-bold
              text-[#0D4825]
            "
          >
            More Projects.
            <span className="text-[#F39A08]">
              {" "}More Impact.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-gray-600
              leading-relaxed
              max-w-3xl
              mx-auto
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
            max-w-6xl
            mx-auto
            px-5
            sm:px-8
            mt-12
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-6
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

      <section className="relative bg-[#0D4825] overflow-hidden">

        <div
          className="
            absolute
            -top-32
            -left-32
            w-80
            h-80
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
            w-96
            h-96
            rounded-full
            bg-[#176B35]
            blur-3xl
            opacity-30
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
            max-w-5xl
            mx-auto
            px-5
            sm:px-8
            py-20
            sm:py-24
            lg:py-32
            text-center
          "
        >
          <span
            className="
              text-[#F39A08]
              text-xs
              sm:text-sm
              font-bold
              uppercase
              tracking-[0.2em]
            "
          >
            Travel Responsibly
          </span>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-6xl
              font-serif
              font-bold
              text-white
              leading-tight
            "
          >
            Explore Africa.

            <span className="block text-[#F39A08]">
              Leave A Positive Impact.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-white/70
              max-w-2xl
              mx-auto
              leading-relaxed
              text-base
              sm:text-lg
            "
          >
            Your journey can be more than a holiday. Discover,
            connect, respect, and contribute while experiencing
            the extraordinary beauty of Africa.
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-3
              mt-9
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
                bg-[#F39A08]
                hover:bg-[#ffad20]
                text-[#0D4825]
                px-8
                py-4
                rounded-full
                font-bold
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Plan Your Journey

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/safaris"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                border
                border-white/30
                bg-white/5
                backdrop-blur-md
                text-white
                font-bold
                hover:border-[#F39A08]
                hover:text-[#F39A08]
                transition-all
                duration-300
              "
            >
              Explore Safaris
            </Link>
          </div>
        </motion.div>
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
    </main>
  );
}

export default Communitywork;