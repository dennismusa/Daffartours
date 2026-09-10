import React from "react";
import { Link } from "react-router-dom";

import serengeti1 from "../assets/serengeti1.jpg";
import culture1 from "../assets/culture1.jpg";
import cruiser1 from "../assets/cruiser1.jpg";
import honeymoon1 from "../assets/honeymoon1.jpg";
import africasafari from "../assets/africasafari.jpg";

function Blogs() {
  const articles = [
    {
      number: "01",
      title: "Why Serengeti Should Be On Your Safari List",
      category: "Destinations",
      image: serengeti1,
      intro:
        "Few places capture the imagination of Africa quite like the Serengeti. Its endless golden plains, abundant wildlife and dramatic seasonal movements make it one of the world's most remarkable safari destinations.",
      paragraphs: [
        "The Serengeti is famous for its vast open landscapes and extraordinary concentration of wildlife. A safari here offers opportunities to encounter lions, elephants, leopards, cheetahs, giraffes, zebras and large herds of wildebeest moving across the plains.",
        "One of the greatest spectacles is the Great Migration, when millions of wildebeest, accompanied by zebras and other grazing animals, move through the ecosystem in search of fresh pasture and water. The journey creates some of the most dramatic wildlife encounters in Africa.",
        "Beyond the wildlife, the Serengeti offers something equally important: space. The enormous landscapes create a feeling of freedom and wilderness that is difficult to experience elsewhere. Early morning game drives, golden sunsets and quiet evenings around the campfire become part of the journey.",
        "Whether it is your first safari or you have travelled across Africa before, the Serengeti remains a destination capable of creating completely new memories every time you visit."
      ],
    },
    {
      number: "02",
      title: "Best Time to Visit Africa for a Safari",
      category: "Safari Planning",
      image: africasafari,
      intro:
        "Africa can be visited throughout the year, but different seasons create very different safari experiences. Choosing the right time depends on wildlife movements, weather, landscapes and the type of experience you want.",
      paragraphs: [
        "The dry seasons are traditionally popular for wildlife viewing because animals tend to gather around remaining water sources while vegetation becomes less dense. This can make it easier to spot wildlife during game drives.",
        "The wetter months bring a different kind of beauty. Landscapes become greener, migratory birds arrive, newborn animals can be seen in some regions and the countryside takes on a completely different character.",
        "For travellers interested in the Great Migration, timing becomes particularly important because the movement of wildlife changes throughout the year. Different parts of the Serengeti and Maasai Mara can offer different experiences depending on the season.",
        "Beach destinations can also be combined with a safari. Kenya and Tanzania, for example, allow travellers to experience wildlife in the interior before relaxing along the Indian Ocean coastline.",
        "Rather than choosing a date simply because it is considered the 'best' season, it is better to choose the season that matches your personal interests, budget and preferred travel style."
      ],
    },
    {
      number: "03",
      title: "What to Carry on Safari",
      category: "Travel Advice",
      image: cruiser1,
      intro:
        "A safari does not require an enormous suitcase. The key is to pack thoughtfully, focusing on comfort, practicality and the environment you will be travelling through.",
      paragraphs: [
        "Lightweight, breathable clothing is ideal during the day, especially in warmer regions. Neutral colours such as beige, brown, olive and khaki are practical choices and blend naturally into the safari environment.",
        "Early mornings and evenings can be surprisingly cool, so carrying a lightweight jacket, fleece or sweater is useful even when travelling during warmer months.",
        "Comfortable closed shoes are recommended for walking around camps, nature walks and other activities. A hat, sunglasses and sunscreen are also useful for protection from the African sun.",
        "For photographers and wildlife enthusiasts, binoculars and a camera with additional batteries or power banks can make a major difference. Memory cards and basic equipment protection are also worth considering.",
        "Other useful items include personal toiletries, insect repellent, a reusable water bottle, necessary travel documents and any medication you regularly require.",
        "The most important rule is to avoid overpacking. Safari vehicles and small aircraft often have luggage restrictions, so a carefully selected travel bag is usually more useful than several large suitcases."
      ],
    },
    {
      number: "04",
      title: "About the Maasai People",
      category: "Culture",
      image: culture1,
      intro:
        "The Maasai are one of East Africa's best-known cultural communities, with a rich heritage closely connected to the landscapes of Kenya and northern Tanzania.",
      paragraphs: [
        "For generations, Maasai communities have maintained strong traditions, distinctive clothing, ceremonies, music and forms of social organization. Their cultural identity remains an important part of the heritage of East Africa.",
        "Many safari destinations overlap with Maasai communities, creating opportunities for travellers to learn about local traditions and understand the relationship between people, livestock, wildlife and land.",
        "A meaningful cultural experience should go beyond simply taking photographs. Spending time listening to community members, learning about traditional practices and understanding local perspectives can make the experience much more respectful and rewarding.",
        "The Maasai relationship with the landscape also highlights an important part of modern conservation. Across parts of Kenya and Tanzania, communities, conservation organisations and tourism operators continue to explore ways of protecting wildlife while supporting local livelihoods.",
        "Travelling responsibly means respecting local customs, asking before taking photographs and ensuring that cultural visits contribute fairly to the communities involved."
      ],
    },
    {
      number: "05",
      title: "Best Routes During Safaris",
      category: "Safari Planning",
      image: cruiser1,
      intro:
        "A great safari is not simply about visiting one famous park. The route between destinations can shape the entire experience, allowing travellers to see different landscapes, wildlife habitats and cultures.",
      paragraphs: [
        "In Kenya, a classic safari route can combine Amboseli, Lake Naivasha, Lake Nakuru and the Maasai Mara. Each destination offers a different atmosphere and wildlife experience.",
        "Amboseli is famous for its spectacular views of Mount Kilimanjaro and large elephant populations. Naivasha introduces a freshwater environment, while Lake Nakuru provides opportunities to explore a contrasting landscape. The Maasai Mara then offers one of the country's most celebrated wildlife experiences.",
        "Northern Kenya provides another fascinating option. Destinations such as Samburu offer rugged landscapes, distinctive wildlife and a quieter safari atmosphere compared with some of the more heavily visited parks.",
        "In Tanzania, travellers can combine destinations such as Tarangire, Ngorongoro and Serengeti. This creates a journey through different ecosystems while gradually moving towards some of the country's most iconic wildlife areas.",
        "The best route depends on the amount of time available, your interests and the pace you prefer. A well-designed itinerary should leave enough time to enjoy each destination rather than simply collecting names from a map."
      ],
    },
    {
      number: "06",
      title: "Most Visited Safari Destinations",
      category: "Destinations",
      image: serengeti1,
      intro:
        "Africa is home to an extraordinary collection of national parks and wildlife reserves. Some destinations have become especially popular because of their landscapes, wildlife diversity and accessibility.",
      paragraphs: [
        "The Maasai Mara in Kenya remains one of the continent's most famous safari destinations. It is known for excellent wildlife viewing, expansive grasslands and its connection with the Serengeti ecosystem.",
        "The Serengeti in Tanzania is another iconic destination, particularly famous for the Great Migration and its remarkable populations of large predators and plains wildlife.",
        "Amboseli offers a completely different experience, with elephants moving across open landscapes beneath the dramatic backdrop of Mount Kilimanjaro.",
        "Ngorongoro Conservation Area provides a spectacular combination of wildlife, landscapes and geological history. The Ngorongoro Crater is particularly famous for its concentration of wildlife within its enclosed ecosystem.",
        "Other destinations such as Samburu, Tsavo, Lake Nakuru, Bwindi, Queen Elizabeth National Park and the Okavango Delta demonstrate just how diverse African safari experiences can be.",
        "Popularity does not necessarily mean one destination is better than another. The ideal destination depends on what you want to see, how long you have and the type of safari atmosphere you prefer."
      ],
    },
    {
      number: "07",
      title: "Tips for Planning a Honeymoon Safari",
      category: "Honeymoon",
      image: honeymoon1,
      intro:
        "A honeymoon safari combines adventure, privacy, romance and unforgettable landscapes. With thoughtful planning, it can become much more than a holiday—it can become the beginning of a new chapter together.",
      paragraphs: [
        "Start by deciding what kind of honeymoon you want. Some couples prefer an adventurous itinerary filled with game drives and outdoor activities, while others want a slower journey focused on luxury camps, private experiences and relaxation.",
        "Combining a safari with a beach stay is another popular option. After several days exploring the wilderness, couples can continue to destinations such as Diani, Zanzibar or other Indian Ocean beaches for a peaceful coastal escape.",
        "Accommodation can make a major difference. Private tents, intimate lodges, romantic dinners and secluded locations can create a sense of exclusivity without requiring every part of the trip to be extravagant.",
        "It is also important not to make the itinerary too busy. A honeymoon should allow time to slow down, enjoy the surroundings and spend time together rather than constantly moving between destinations.",
        "Finally, communicate your expectations when planning. Whether you want a private vehicle, special meals, a surprise celebration, photography, spa treatments or a particular style of accommodation, these details can be incorporated into a carefully designed itinerary."
      ],
    },
  ];

  return (
    <main className="overflow-hidden bg-[#F7F4EA] text-[#183020]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[58vh] items-center overflow-hidden">

        <img
          src={serengeti1}
          alt="African safari landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082D19]/90 via-[#082D19]/55 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[4px] text-[#F5A623]">
              Daffar Tours & Travel
            </p>

            <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Stories From
              <span className="block text-[#F5A623]">
                Africa
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Travel deeper into Africa through destination stories,
              safari knowledge, cultural insights and practical advice
              designed to help you experience the continent with confidence.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">

          <p className="text-xs font-bold uppercase tracking-[4px] text-[#F5A623]">
            The Daffar Travel Journal
          </p>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl lg:text-5xl">
            Travel With More
            <span className="text-[#F5A623]">
              {" "}Knowledge
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Planning an African journey is about more than choosing a
            destination. It is about understanding the landscapes, seasons,
            cultures, wildlife and experiences that make each journey unique.
            Our travel journal brings together practical information and
            inspiration to help you make better decisions before you travel.
          </p>

        </div>

      </section>


      {/* =========================================================
          ARTICLES
      ========================================================= */}

      <section className="bg-[#F7F4EA] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mb-16 max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[4px] text-[#F5A623]">
              Safari Knowledge
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold text-[#0D4825] sm:text-4xl">
              Explore Africa Through Our Stories
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              From the plains of the Serengeti to the coast of the Indian
              Ocean, discover practical ideas and insights for planning a
              memorable African adventure.
            </p>

          </div>


          <div className="space-y-24 lg:space-y-32">

            {articles.map((article, index) => {

              const reversed = index % 2 !== 0;

              return (
                <article
                  key={article.number}
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:grid-flow-dense" : ""
                  }`}
                >

                  {/* IMAGE */}

                  <div
                    className={`group relative ${
                      reversed ? "lg:col-start-2" : ""
                    }`}
                  >

                    <div className="absolute -inset-3 rounded-[2rem] border border-[#F5A623]/20 opacity-0 transition duration-700 group-hover:opacity-100" />

                    <div className="relative h-[340px] overflow-hidden rounded-[2rem] shadow-xl sm:h-[420px]">

                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5A623] font-serif text-lg font-bold text-[#0D4825] shadow-lg">
                        {article.number}
                      </div>

                    </div>

                  </div>


                  {/* CONTENT */}

                  <div
                    className={`${
                      reversed ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <span className="text-xs font-bold uppercase tracking-[3px] text-[#F5A623]">
                        {article.category}
                      </span>

                      <span className="h-px w-10 bg-[#F5A623]/40" />

                    </div>

                    <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#0D4825] sm:text-4xl lg:text-5xl">
                      {article.title}
                    </h2>

                    <p className="mt-6 text-lg font-medium leading-8 text-[#183020]">
                      {article.intro}
                    </p>

                    <div className="mt-6 space-y-5">

                      {article.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-sm leading-7 text-gray-600 sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}

                    </div>

                    <div className="mt-8 flex items-center gap-4">

                      <span className="h-px w-12 bg-[#F5A623]" />

                      <span className="text-xs font-bold uppercase tracking-[3px] text-[#0D4825]/50">
                        Daffar Travel Journal
                      </span>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          JOURNEY CTA
      ========================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0D4825]">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#F5A623]/20" />

          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#F5A623]/5" />

          <div className="relative z-10 px-6 py-14 text-center sm:px-10 sm:py-20 lg:px-20">

            <p className="text-xs font-bold uppercase tracking-[4px] text-[#F5A623]">
              Your African Journey
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Inspiration Is Only The
              <span className="text-[#F5A623]">
                {" "}Beginning
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/65">
              Let the stories inspire you, then turn your ideas into a
              carefully planned African journey built around your interests,
              pace and travel style.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/safaris"
                className="inline-flex items-center justify-center rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#0D4825] transition hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Safaris
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-[#F5A623] hover:text-[#F5A623]"
              >
                Plan Your Journey
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="overflow-hidden bg-[#082D19] text-white">

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12">

          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#F39A08]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />

          <div className="relative z-10">

            <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">

              {/* BRAND */}

              <div>

                <Link to="/" className="group inline-block">

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

                <div className="mt-6 flex items-center gap-2.5">

                  {/* FACEBOOK */}

                  <a
                    href="https://www.facebook.com/dafartoursandtravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:-translate-y-1 hover:scale-110"
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
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#E1306C] to-[#833AB4] text-white transition hover:-translate-y-1 hover:scale-110"
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
                      <circle cx="12" cy="12" r="4" />
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
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition hover:-translate-y-1 hover:scale-110"
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
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white transition hover:-translate-y-1 hover:scale-110"
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

                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#F39A08]">
                  Explore
                </h3>

                <div className="mt-5 space-y-3">

                  <Link to="/" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
                    Home
                  </Link>

                  <Link to="/about" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
                    About Us
                  </Link>

                  <Link to="/safaris" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
                    Safaris
                  </Link>

                  

                  <Link to="/activities" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
                    Activities
                  </Link>

                  <Link to="/contact" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
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

                  <Link to="/communitywork" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
                    Community Work
                  </Link>

                  <Link to="/tourafricablog" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
                    Tour Africa Blog
                  </Link>

                  <Link to="/faqs" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
                    FAQs
                  </Link>

                  <Link to="/safaris" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
                    Tailor-Made Safaris
                  </Link>

                  <Link to="/safaris" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
                    Honeymoon Safaris
                  </Link>

                  <Link to="/contact" className="block text-sm text-white/55 transition hover:text-[#F39A08]">
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
                        className="mt-1 block text-sm text-white/60 transition hover:text-[#F39A08]"
                      >
                         info@daffar.co.ke
                      </a>

                    </div>

                  </div>


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
                        className="mt-1 block text-sm text-white/60 transition hover:text-[#F39A08]"
                      >
                        +254708711459
                      </a>

                    </div>

                  </div>


                  

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


      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

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

    </main>
  );
}

export default Blogs;