/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import amboseli from "../assets/amboseli.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import serengeti from "../assets/serengeti.jpg";
import serengeti3 from "../assets/serengeti3.jpg";
//import meru from "../assets/meru.jpg";
import nakuru from "../assets/nakuru.jpg";
import kili1 from "../assets/kili1.jpg";
import ngorongori1 from "../assets/ngorongoro1.jpg";
import mara1 from "../assets/mara1.jpg";
import diani1 from "../assets/diani1.jpg";
import zanzibar4 from "../assets/zanzibar4.jpg";
import ngorongoro1 from "../assets/ngorongoro1.jpg";
//import tanzania from "../assets/tanzania.jpg";
import image16 from "../assets/image16.jpg";
import image17 from "../assets/image17.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";








/* ============================================================
   HERO SLIDES
============================================================ */

export const itineraries = [
  // =========================================================
  // 5-DAY MARANGU ROUTE
  // =========================================================
  {
    id: "marangu-5-day",
    title: "5-Day Kilimanjaro Adventure",
    route: "Marangu Route",
    duration: "5 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 64 km",
    description:
      "A classic Kilimanjaro climb via the Marangu Route, popularly known as the Coca-Cola Route, featuring mountain huts and diverse landscapes.",
    keywords: [
      "marangu",
      "marangu route",
      "coca cola route",
      "coca-cola route",
      "kilimanjaro",
      "mount kilimanjaro",
      "5 day",
      
    ],
    href: "/Mountkilimanjaro#marangu-5-day",
  },

  // =========================================================
  // 6-DAY MARANGU ROUTE
  // =========================================================
  {
    id: "marangu-6-day",
    title: "6-Day Kilimanjaro Trek",
    route: "Marangu Route",
    duration: "6 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 64 km",
    description:
      "An extended Marangu Route itinerary designed with additional acclimatization time to improve comfort and summit success.",
    keywords: [
      "marangu",
      "marangu route",
      "coca cola route",
      "coca-cola route",
      "kilimanjaro",
      "mount kilimanjaro",
      "6 day",
      
    ],
    href: "/Mountkilimanjaro#marangu-6-day",
  },

  // =========================================================
  // 6-DAY RONGAI ROUTE
  // =========================================================
  {
    id: "rongai-6-day",
    title: "6-Day Kilimanjaro Adventure",
    route: "Rongai Route",
    duration: "6 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 65 km",
    description:
      "A peaceful northern approach to Mount Kilimanjaro via the Rongai Route, known for gradual altitude gain, scenic landscapes, and fewer crowds.",
    keywords: [
      "rongai",
      "rongai route",
      "northern route",
      "northern trail",
      "kilimanjaro",
      "mount kilimanjaro",
      "6 day",
      "6 days",
      
    ],
    href: "/Mountkilimanjaro#rongai-6-day",
  },

  // =========================================================
  // 7-DAY RONGAI ROUTE
  // =========================================================
  {
    id: "rongai-7-day",
    title: "7-Day Kilimanjaro Expedition",
    route: "Rongai Route",
    duration: "7 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 65 km",
    description:
      "A tranquil seven-day Kilimanjaro expedition via the remote northern Rongai Route, offering gradual altitude gain, spectacular views and a peaceful wilderness experience.",
    keywords: [
      "rongai",
      "rongai route",
      "northern route",
      "northern wilderness trail",
      "kilimanjaro",
      "mount kilimanjaro",
      "7 day",
      "7 days",
      "kilimanjaro expedition",
      "kilimanjaro adventure",
      "kilimanjaro trek",
      "kilimanjaro trekking",
      "kilimanjaro climbing",
      "uhuru peak",
      "tanzania",
      "tanzania trekking",
      "mountain trekking",
      "kenya border",
      "wilderness",
    ],
    href: "/Mountkilimanjaro#rongai-7-day",
  },

  // =========================================================
  // 6-DAY LEMOSHO ROUTE
  // =========================================================
  {
    id: "lemosho-6-day",
    title: "6-Day Lemosho Route Trek",
    route: "Lemosho Route",
    duration: "6 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 46 km",
    description:
      "A challenging and scenic six-day ascent through rainforest, moorland, alpine desert and icy summit zones, designed for physically fit trekkers.",
    keywords: [
      "lemosho",
      "lemosho route",
      "kilimanjaro",
      "mount kilimanjaro",
      "6 day",
      "6 days",
      "kilimanjaro trek",
      "kilimanjaro trekking",
      "kilimanjaro climbing",
      "uhuru peak",
      "tanzania",
      "tanzania trekking",
      "mountain trekking",
      "rainforest",
      "moorland",
      "alpine desert",
      "summit",
    ],
    href: "/Mountkilimanjaro#lemosho-6-day",
  },

  // =========================================================
  // 7-DAY LEMOSHO ROUTE
  // =========================================================
  {
    id: "lemosho-7-day",
    title: "7-Day Kilimanjaro Adventure",
    route: "Lemosho Route",
    duration: "7 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 46 km",
    description:
      "A scenic seven-day Lemosho Route journey offering breathtaking landscapes, low foot traffic, gradual ascent and excellent acclimatization.",
    keywords: [
      "lemosho",
      "lemosho route",
      "kilimanjaro",
      "mount kilimanjaro",
      "7 day",
      
    ],
    href: "/Mountkilimanjaro#lemosho-7-day",
  },

  // =========================================================
  // 8-DAY LEMOSHO ROUTE
  // =========================================================
  {
    id: "lemosho-8-day",
    title: "8-Day Kilimanjaro Expedition",
    route: "Lemosho Route",
    duration: "8 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 46 km",
    description:
      "A scenic and gradual Kilimanjaro expedition via the Lemosho Route, offering excellent acclimatization, spectacular landscapes and quieter trails.",
    keywords: [
      "lemosho",
      "lemosho route",
      "kilimanjaro",
      
    ],
    href: "/Mountkilimanjaro#lemosho-8-day",
  },

  // =========================================================
  // 7-DAY MACHAME ROUTE
  // =========================================================
  {
    id: "machame-7-day",
    title: "7-Day Kilimanjaro Ascent Adventure",
    route: "Machame Route",
    duration: "7 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 65 km",
    description:
      "A spectacular seven-day climb via the Machame Route, also known as the Whiskey Route, featuring varied landscapes and a steady altitude profile.",
    keywords: [
      "machame",
      "machame route",
      "whiskey route",
      "whiskey trail",
      "kilimanjaro",
      
    ],
    href: "/mountkilimanjaro#machame-7-day",
  },

  // =========================================================
  // 3-DAY WATAMU
  // =========================================================
  {
    id: "watamu-3-day",
    title: "3-Day Watamu Beach Escape",
    route: "Watamu Beach",
    duration: "3 Days",
    location: "Watamu, Kenya",
    altitude: "Coastal",
    distance: "Beach Escape",
    description:
      "A relaxing three-day coastal getaway featuring pristine beaches, coral reefs, marine adventures, snorkeling, dolphin watching and Swahili culture.",
    keywords: [
      "watamu",
      "watamu beach",
      "kenya coast",
      
    ],
    href: "/Diani#watamu-3-day",
  },

  // =========================================================
  // 4-DAY DIANI
  // =========================================================
  {
    id: "diani-4-day",
    title: "4-Day Diani Beach Holiday",
    route: "Diani Beach",
    duration: "4 Days",
    location: "Diani, Kenya",
    altitude: "Coastal",
    distance: "Beach Holiday",
    description:
      "A four-day coastal retreat combining Diani's white-sand beaches, turquoise waters, relaxation and optional marine and cultural excursions.",
    keywords: [
      "diani",
      "diani beach",
      "kenya coast",
      
    ],
    href: "/Diani#diani-4-day",
  },

  // =========================================================
  // 4-DAY ZANZIBAR
  // =========================================================
  {
    id: "zanzibar-4-day",
    title: "4-Day Zanzibar Beach Getaway",
    route: "Zanzibar",
    duration: "4 Days",
    location: "Zanzibar, Tanzania",
    altitude: "Coastal",
    distance: "Island Escape",
    description:
      "A four-day Zanzibar getaway combining dreamy beaches with spice farms, coconut plantations, traditional villages, forest trails and Swahili culture.",
    keywords: [
      "zanzibar",
      "zanzibar beach",
      "zanzibar holiday",
      "zanzibar getaway",
      "4 day",
      
    ],
    href: "/zanzibar#zanzibar-4-day",
  },

  {
  id: "5-day-maasaimara",
  title: "5-Day Maasai Mara & Amboseli Safari",
  route: "Maasai Mara • Amboseli",
  duration: "5 Days",
  location: "Kenya",
  altitude: "Approx. 1,100–2,200m",
  distance: "Safari Experience",
  description:
    "A five-day Kenya safari combining the legendary Maasai Mara with Amboseli National Park, offering unforgettable wildlife encounters, Big Five sightings, spectacular savannah landscapes, Maasai culture and breathtaking views of Mount Kilimanjaro.",
  keywords: [
    "maasai mara",
    "masai mara",
    "mara",
    "amboseli",
    "amboseli national park",
    "maasai mara amboseli",
    "amboseli maasai mara",
    "maasai mara and amboseli",
    "kenya safari",
 
  ],
  href: "/safaris#5-daymaasaimara",
},
{
  id: "5-day-maasaimaranakuru",
  title: "5-Day Masai Mara, Nakuru & Naivasha Safari",
  route: "Masai Mara • Lake Nakuru • Naivasha",
  duration: "5 Days",
  location: "Kenya",
  altitude: "Approx. 1,800–2,200m",
  distance: "Safari Experience",
  description:
    "A five-day Kenya safari combining the legendary Masai Mara with the wildlife-rich Lake Nakuru and scenic Lake Naivasha.",
  keywords: [
    "Masai Mara",
    "Lake Nakuru",
    "Naivasha",
  ],
  href: "/maasaimara#5-day-maasaimaranakuru",
},

{
  id: "3-day-mountkilimanjaro",
  title: "3-Day Best of Mount Kilimanjaro",
  route: "Mount Kilimanjaro",
  duration: "3 Days",
  location: "Mount Kilimanjaro, Tanzania",
  altitude: "5,895m",
  distance: "Mountain Trekking",
  description:
    "A three-day Mount Kilimanjaro adventure offering an exciting introduction to Africa's highest mountain, spectacular landscapes and an unforgettable trekking experience.",
  keywords: [
    "Mount Kilimanjaro",
    "Kilimanjaro",
    "3 Days",
  ],
  href: "/Mountkilimanjaro#3-day-mountkilimanjaro",
},

{
  id: "ndutu-8-day",
  title: "8-Day Ndutu Safari",
  route: "Ndutu",
  duration: "8 Days",
  location: "Ndutu, Tanzania",
  altitude: "Approx. 1,600m",
  distance: "Safari Experience",
  description:
    "An eight-day Ndutu safari offering exceptional wildlife viewing, the Great Migration, spectacular landscapes and unforgettable experiences across Tanzania's southern Serengeti ecosystem.",
  keywords: [
    "Ndutu",
    "Serengeti",
    "8 Days",
  ],
  href: "/serengeti#ndutu-8-day",
},

 {
    id: "9-day-serengetimigration",
    title: "9-Day Serengeti Migration Footsteps",
    route: "Tarangire • Ngorongoro • Serengeti",
    duration: "9 Days",
    location: "Serengeti, Tanzania",
    altitude: "Approx. 1,400–2,000m",
    distance: "Safari Experience",
    description:
      "Follow the legendary Great Wildebeest Migration across Tanzania on a nine-day safari through Tarangire, Ngorongoro and the Serengeti. Depending on the season, explore the southern Ndutu area, Central Serengeti, Western Serengeti or Northern Serengeti while experiencing exceptional wildlife viewing and spectacular landscapes.",
    keywords: [
      "serengeti",
      "serengeti migration",
      "great migration",
      "great wildebeest migration",
      "wildebeest migration",
      
    ],
    href: "/serengeti#9-day-serengetimigration",
  },

   {
    id: "3-day-maasaimarasafari",
    title: "3-Day Masai Mara Luxury Safari",
    route: "Masai Mara National Reserve",
    duration: "3 Days",
    location: "Masai Mara, Kenya",
    altitude: "Approx. 1,500–2,000m",
    distance: "Safari Experience",
    description:
      "Experience the magic of Kenya's legendary Masai Mara on a three-day luxury safari. Explore sweeping savannahs in search of lions, leopards, elephants, giraffes, zebras and wildebeest while enjoying exceptional game drives, spectacular landscapes and comfortable accommodation at Amani Mara Camp.",
    keywords: [
      "masai mara",
      "maasai mara",
      "masai mara safari",
      "maasai mara safari",
      "masai mara luxury safari",
      "maasai mara luxury safari",
      "3 day",
      
    ],
    href: "/maasaimara#3-day-maasaimarasafari",
  },

  {
    id: "5-day-maasaimaranakurunaivasha",
    title: "5-Day Masai Mara, Lake Nakuru & Lake Naivasha Luxury Safari",
    route: "Masai Mara • Lake Nakuru • Lake Naivasha",
    duration: "5 Days",
    location: "Kenya",
    description:
      "Experience three of Kenya's remarkable destinations on a luxury safari combining the wildlife-rich Masai Mara, scenic Lake Nakuru, and tranquil Lake Naivasha.",
    keywords: [
      "masai mara",
      "lake nakuru",
      "lake naivasha",
      "kenya safari",
      "luxury safari",
      "big five",
      "wildlife safari",
      "5 day safari",
    ],
    href: "/kenya#5-day-maasaimaranakurunaivasha",
  },

  // =========================================================
  // 2 — 5-DAY MASAI MARA & AMBOSELI
  // =========================================================
  {
    id: "5-day-maasaimara",
    title: "5-Day Masai Mara & Amboseli Luxury Safari",
    route: "Masai Mara • Amboseli",
    duration: "5 Days",
    location: "Kenya",
    description:
      "Discover two of Kenya's most iconic wildlife destinations, from the wildlife-rich plains of the Masai Mara to Amboseli's spectacular elephant country beneath Mount Kilimanjaro.",
    keywords: [
      "masai mara",
      "amboseli",
      "mount kilimanjaro",
      "kenya safari",
      "luxury safari",
      "elephants",
      "big five",
      "5 day safari",
    ],
    href: "/kenya#5-day-maasaimara",
  },

  // =========================================================
  // 3 — 3-DAY AMBOSELI
  // =========================================================
  {
    id: "3-day-mountkilimanjaro",
    title: "3-Day Amboseli National Park Safari",
    route: "Amboseli National Park",
    duration: "3 Days",
    location: "Amboseli, Kenya",
    description:
      "Explore Amboseli National Park, famous for its large elephant herds, open savannah landscapes, and spectacular views of Mount Kilimanjaro.",
    keywords: [
      "amboseli",
      "amboseli national park",
      "mount kilimanjaro",
      "elephants",
      "kenya safari",
      "wildlife safari",
      "3 day safari",
    ],
    href: "/amboseli#3-day-mountkilimanjaro",
  },

  // =========================================================
  // 4 — 9-DAY SERENGETI MIGRATION
  // =========================================================
  {
    id: "9-day-serengetimigration",
    title: "9-Day Serengeti Migration Footsteps Safari",
    route: "Northern Tanzania Safari Circuit",
    duration: "9 Days",
    location: "Serengeti, Tanzania",
    description:
      "Follow the footsteps of the Great Wildebeest Migration through Tanzania's legendary wildlife destinations, with extended time in the Serengeti and opportunities to witness dramatic wildlife encounters.",
    keywords: [
      "serengeti",
      "great migration",
      "wildebeest migration",
      "tanzania safari",
      "migration safari",
      "big five",
      "wildlife safari",
      "9 day safari",
    ],
    href: "/serengeti#9-day-serengetimigration",
  },

  // =========================================================
  // 5 — 3-DAY MASAI MARA LUXURY SAFARI
  // =========================================================
  {
    id: "3-day-maasaimarasafari",
    title: "3-Day Masai Mara Luxury Safari",
    route: "Masai Mara National Reserve",
    duration: "3 Days",
    location: "Masai Mara, Kenya",
    description:
      "Experience the legendary Masai Mara on a luxury three-day safari filled with exceptional game viewing, Big Five encounters, dramatic landscapes, and unforgettable African sunsets.",
    keywords: [
      "masai mara",
      "masai mara safari",
      "luxury safari",
      "big five",
      "kenya safari",
      "wildlife",
      "3 day safari",
    ],
    href: "/maasaimara#3-day-maasaimarasafari",
  },

  // =========================================================
  // 6 — 8-DAY NDUTU CALVING SEASON
  // =========================================================
  {
    id: "ndutu-8-day",
    title: "8-Day Ndutu Calving Season Serengeti Migration",
    route: "Tarangire • Ngorongoro • Serengeti • Ndutu",
    duration: "8 Days",
    location: "Northern Tanzania",
    description:
      "Witness the spectacular Ndutu Calving Season as thousands of wildebeest give birth across the Serengeti ecosystem, with exceptional opportunities to observe predators and dramatic wildlife interactions.",
    keywords: [
      "ndutu",
      "ndutu calving season",
      "great migration",
      "wildebeest migration",
      "serengeti",
      "ngorongoro",
      "tarangire",
      "tanzania safari",
      "8 day safari",
    ],
    href: "/serengeti#ndutu-8-day",
  },

  // =========================================================
  // 7 — 7-DAY MACHAME ROUTE
  // =========================================================
  {
    id: "machame-7-day",
    title: "7-Day Kilimanjaro Adventure via Machame Route",
    route: "Machame Route",
    duration: "7 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    description:
      "Climb Africa's highest mountain via the spectacular Machame Route, trekking through rainforest, heathland, moorland, alpine desert, and the summit zone before reaching Uhuru Peak.",
    keywords: [
      "machame",
      "machame route",
      "kilimanjaro",
      "mount kilimanjaro",
      "uhuru peak",
      "5,895m",
      "whiskey route",
      "mountain trekking",
      "7 day",
    ],
    href: "/Mountkilimanjaro#machame-7-day",
  },

  // =========================================================
  // 8 — 6-DAY NDUTU CALVING SEASON
  // =========================================================
  {
    id: "ndutu-6-day",
    title: "6-Day Ndutu Calving Season Serengeti Migration",
    route: "Tarangire • Serengeti • Ngorongoro",
    duration: "6 Days",
    location: "Northern Tanzania",
    description:
      "Journey into the heart of Tanzania during the Ndutu Calving Season, witnessing newborn wildebeest, dramatic predator encounters, and spectacular wildlife across Tarangire, Serengeti, and Ngorongoro.",
    keywords: [
      "ndutu",
      "ndutu calving",
      "calving season",
      "great migration",
      "serengeti",
      "ngorongoro",
      "tarangire",
      "big five",
      "tanzania safari",
      "6 day safari",
    ],
    href: "/serengeti#ndutu-6-day",
  },

  // =========================================================
  // 9 — 3-DAY WATAMU BEACH ESCAPE
  // =========================================================
  {
    id: "watamu-3-day",
    title: "3-Day Watamu Beach Escape",
    route: "Watamu Beach",
    duration: "3 Days",
    location: "Watamu, Kenya",
    description:
      "Escape to Kenya's beautiful north coast and unwind beside the turquoise waters of Watamu with pristine beaches, marine adventures, coral reefs, coastal culture, and spectacular Indian Ocean sunsets.",
    keywords: [
      "watamu",
      "watamu beach",
      "kenya coast",
      "watamu marine park",
      "indian ocean",
      "beach holiday",
      "coastal escape",
      "3 day beach holiday",
    ],
    href: "/watamu#watamu-3-day",
  },

  // =========================================================
  // 10 — 4-DAY ZANZIBAR BEACH GETAWAY
  // =========================================================
  {
    id: "zanzibar-4-day",
    title: "4-Day Zanzibar Beach Getaway",
    route: "Stone Town • Spice Farms • Jozani • Zanzibar Coast",
    duration: "4 Days",
    location: "Zanzibar, Tanzania",
    description:
      "Discover Zanzibar beyond its beaches, combining historic Stone Town, aromatic spice farms, Jozani Forest, Swahili culture, tropical beaches, and a spectacular sunset dhow cruise.",
    keywords: [
      "zanzibar",
      "zanzibar beach",
      "stone town",
      "spice farms",
      "jozani forest",
      "dhow cruise",
      "tanzania beach holiday",
      "island escape",
      "4 day zanzibar",
    ],
    href: "/zanzibar#zanzibar-4-day",
  },

  // =========================================================
  // 11 — 7-DAY LEMOSHO ROUTE
  // =========================================================
  {
    id: "lemosho-7-day",
    title: "7-Day Kilimanjaro Adventure via Lemosho Route",
    route: "Lemosho Route",
    duration: "7 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    description:
      "Embark on an extraordinary journey to the summit of Africa's tallest mountain through the spectacular Lemosho Route, crossing rainforest, moorland, the Shira Plateau, alpine desert, and the summit zone.",
    keywords: [
      "lemosho",
      "lemosho route",
      "kilimanjaro",
      "mount kilimanjaro",
      "uhuru peak",
      "5,895m",
      "shira plateau",
      "barranco wall",
      "mountain trekking",
      "7 day",
    ],
    href: "/Mountkilimanjaro#lemosho-7-day",
  },

  // =========================================================
  // 12 — 7-DAY RONGAI ROUTE
  // =========================================================
  {
    id: "rongai-7-day",
    title: "7-Day Rongai Route Kilimanjaro Adventure",
    route: "Rongai Route",
    duration: "7 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    description:
      "Embark on a spectacular northern wilderness expedition via the remote Rongai Route, featuring peaceful forests, gradual elevation gain, dramatic alpine landscapes, and magnificent views of Mawenzi Peak.",
    keywords: [
      "rongai",
      "rongai route",
      "kilimanjaro",
      "mount kilimanjaro",
      "northern trail",
      "northern wilderness",
      "uhuru peak",
      "5,895m",
      "mawenzi peak",
      "mountain trekking",
      "7 day",
    ],
    href: "/Mountkilimanjaro#rongai-7-day",
  },

  // =========================================================
  // 13 — 6-DAY MARANGU ROUTE
  // =========================================================
  {
    id: "marangu-6-day",
    title: "6-Day Kilimanjaro Adventure",
    route: "Marangu Route",
    duration: "6 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 64 km",
    description:
      "Experience the legendary Marangu Route, popularly known as the Coca-Cola Route, featuring comfortable mountain huts, diverse landscapes, and an additional acclimatization day at Horombo Hut.",
    keywords: [
      "marangu",
      "marangu route",
      "coca cola route",
      "coca-cola route",
      "kilimanjaro",
      "mount kilimanjaro",
      "uhuru peak",
      "5,895m",
      "horombo",
      "acclimatization",
      "6 day",
    ],
    href: "/Mountkilimanjaro#marangu-6-day",
  },

  // =========================================================
  // 14 — 6-DAY RONGAI ROUTE
  // =========================================================
  {
    id: "rongai-6-day",
    title: "6-Day Rongai Route Kilimanjaro Adventure",
    route: "Rongai Route",
    duration: "6 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 65 km",
    description:
      "Experience the quieter northern side of Mount Kilimanjaro via the scenic Rongai Route, trekking through peaceful forests, open moorlands, alpine desert, and dramatic mountain landscapes toward Uhuru Peak.",
    keywords: [
      "rongai",
      "rongai route",
      "kilimanjaro",
      "mount kilimanjaro",
      "northern trail",
      "northern kilimanjaro",
      "mawenzi tarn",
      "uhuru peak",
      "5,895m",
      "65 km",
      "6 day",
    ],
    href: "/Mountkilimanjaro#rongai-6-day",
  },

  // =========================================================
  // 15 — 5-DAY MARANGU ROUTE
  // =========================================================
  {
    id: "marangu-5-day",
    title: "5-Day Kilimanjaro Adventure",
    route: "Marangu Route",
    duration: "5 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 64 km",
    description:
      "A classic Kilimanjaro climb via the Marangu Route, popularly known as the Coca-Cola Route, featuring mountain huts and diverse landscapes.",
    keywords: [
      "marangu",
      "marangu route",
      "coca cola route",
      "coca-cola route",
      "kilimanjaro",
      "mount kilimanjaro",
      "uhuru peak",
      "5,895m",
      "64 km",
      "5 day",
    ],
    href: "/Mountkilimanjaro#marangu-5-day",
  },

  // =========================================================
  // 16 — 8-DAY LEMOSHO ROUTE
  // =========================================================
  {
    id: "lemosho-8-day",
    title: "8-Day Lemosho Route Kilimanjaro Expedition",
    route: "Lemosho Route",
    duration: "8 Days",
    location: "Mount Kilimanjaro, Tanzania",
    altitude: "5,895m",
    distance: "Approx. 46 km",
    description:
      "Experience one of Mount Kilimanjaro's most spectacular approaches via the scenic Lemosho Route, combining breathtaking landscapes, excellent acclimatization, quieter trails, and diverse ecological zones.",
    keywords: [
      "lemosho",
      "lemosho route",
      "kilimanjaro",
      "mount kilimanjaro",
      "uhuru peak",
      "5,895m",
      "shira plateau",
      "barranco wall",
      "lava tower",
      "mweka",
      "46 km",
      "8 day",
    ],
    href: "/Mountkilimanjaro#lemosho-8-day",
  },

  {
  id: "3-day-wildebeestmigration",
  title: "3-Day Best of Wildebeest Migration Safari",
  route: "Masai Mara National Reserve",
  duration: "3 Days / 2 Nights",
  location: "Masai Mara, Kenya",
  description:
    "Experience the spectacular Great Wildebeest Migration in the legendary Masai Mara, with two nights in the reserve, extended game drives, Big Five encounters, dramatic wildlife sightings and authentic Maasai cultural experiences.",
  keywords: [
    "wildebeest migration",
    "great migration",
    "masai mara",
    "masai mara safari",
    "migration safari",
    "big five",
    "wildebeest",
    "zebras",
    "kenya safari",
    "3 day safari",
    "2 nights",
  ],
  href: "/maasaimara#3-day-wildebeestmigration",
},  
];



const heroSlides = [
  {
    image: amboseli,
    eyebrow: "KENYA • WILDLIFE • ADVENTURE",
    title: "Discover",
    highlight: "Wild Kenya",
    description:
      "Experience extraordinary wildlife, breathtaking landscapes and authentic African adventures designed around the way you love to travel.",
  },
  {
    image: Wilderbeast,
    eyebrow: "MAASAI MARA • SAFARI • WILDLIFE",
    title: "Into The",
    highlight: "Wild",
    description:
      "Follow the rhythm of the wilderness and discover Kenya's iconic landscapes, wildlife and unforgettable safari moments.",
  },
  {
    image: serengeti,
    eyebrow: "TANZANIA • EAST AFRICA",
    title: "Adventure",
    highlight: "Without Limits",
    description:
      "From endless savannahs to spectacular landscapes, experience East Africa through a journey created especially for you.",
  },
  
];

/* ============================================================
   SAFARI PACKAGES
============================================================ */

const safariPackages = [
  {
    title: "Amboseli Safari",
    location: "Amboseli National Park",
    days: "3 Days",
    tag: "Luxury Safari",
    image: amboseli,
    href: "/Amboseli",
    description:
      "Experience the magnificent landscapes of Amboseli with spectacular views of Mount Kilimanjaro and unforgettable wildlife encounters.",
  },
  {
    title: "Maasai Mara Safari",
    location: "Maasai Mara National Reserve",
    days: "4 Days",
    tag: "Wildlife Safari",
    image: mara1,
    href: "/Maasaimara",
    description:
      "Discover the legendary Maasai Mara, home to incredible wildlife, dramatic landscapes and the spectacular Great Wildebeest Migration.",
  },
  {
    title: "Serengeti Safari",
    location: "Serengeti National Park",
    days: "5 Days",
    tag: "Tanzania Safari",
    image: serengeti,
    href: "/Serengeti",
    description:
      "Explore the endless plains of the Serengeti and experience some of Africa's most remarkable wildlife and predator encounters.",
  },
  {
    title: "Diani Beach Escape",
    location: "Diani Beach",
    days: "4 Days",
    tag: "Beach Holiday",
    image: diani1,
    href: "/Diani",
    description:
      "Relax along the beautiful Kenyan coast with white sandy beaches, turquoise waters and the perfect tropical escape.",
  },
  {
    title: "Mount Kilimanjaro",
    location: "Mount Kilimanjaro",
    days: "7 Days",
    tag: "Mountain Adventure",
    image: kili1,
    href: "/Mountkilimanjaro",
    description:
      "Take on Africa's highest mountain and experience an unforgettable adventure through spectacular alpine landscapes.",
  },

  {
  title: "Zanzibar",
  location: "Zanzibar, Tanzania",
  days: "5 Days",
  tag: "Beach Escape",
  image: zanzibar4,
  href: "/Zanzibar",
  description:
    "Escape to the tropical paradise of Zanzibar and experience pristine beaches, turquoise waters, rich Swahili culture, and unforgettable island adventures.",
},
];

/* ============================================================
   DESTINATIONS
============================================================ */

const destinations = [
  {
    image: amboseli,
    name: "Amboseli",
    country: "Kenya",
    path: "/amboseli",
    description: "Discover magnificent elephants, open savannahs, rich Maasai culture and breathtaking views of Mount Kilimanjaro.",
  },
  {
    image: nakuru,
    name: "Lake Nakuru",
    country: "Kenya",
    path: "/lakenakuru",
    description: "A beautiful Rift Valley destination known for rhinos, spectacular landscapes, diverse wildlife and unforgettable birdwatching experiences.",
  },
  {
    image: mara1,
    name: "Maasai Mara",
    country: "Kenya",
    path: "/maasaimara",
    description: "Endless savannahs, incredible wildlife, the Great Migration, and unforgettable African safari experiences",
  },
  {
    image: ngorongori1,
    name: "Ngorongoro Crater",
    country: "Tanzania",
    path: "/ngorongoro",
    description: "Ngorongoro provides exceptional opportunities to see a wide variety of wildlife within a spectacular natural setting",
  },
  {
    image: kili1,
    name: "Mount kilimanjaro",
    country: "East Africa",
    path: "/mountkilimanjaro",
    description: "Africa's highest mountain, breathtaking landscapes, unforgettable trekking adventures, and the journey toward Uhuru Peak.",
  },
];



/* ============================================================
   FOOTER HELPERS
   These are intentionally above Home()
============================================================ */

function FooterHeading({ children }) {
  return (
    <h3 className="relative mb-5 inline-block text-sm font-bold uppercase tracking-[0.18em]">
      {children}

      <span className="absolute -bottom-2 left-0 h-0.5 w-8 rounded-full bg-[#F39A08]" />
    </h3>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <FooterHeading>
        {title}
      </FooterHeading>

      <div className="space-y-2.5">
        {children}
      </div>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block w-fit text-sm text-white/50 transition-all hover:translate-x-1 hover:text-[#F39A08]"
    >
      {children}
    </Link>
  );
}

/* ============================================================
   SECTION LABEL
============================================================ */

function SectionLabel({ children, dark = false }) {
  return (
    <span
      className={`text-xs font-bold uppercase tracking-[3px] ${
        dark ? "text-[#dba33a]" : "text-[#dba33a]"
      }`}
    >
      {children}
    </span>
  );
}

/* ============================================================
   SECTION INTRO
============================================================ */

function SectionIntro({ label, title, text }) {
  return (
    <div className="max-w-3xl text-left">
      <SectionLabel>
        {label}
      </SectionLabel>

      <h2 className="mt-4 text-3xl font-serif font-bold leading-tight text-[#0b4224] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   QUICK STAT
============================================================ */

function QuickStat({ icon, number, label }) {
  return (
    <div className="flex items-center gap-3 border-r border-white/10 px-4 py-5 sm:px-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dba33a]/10 text-sm text-[#dba33a]">
        {icon}
      </span>

      <div>
        <p className="text-xs font-bold text-white sm:text-sm">
          {number}
        </p>

        <p className="mt-0.5 text-[10px] text-white/45 sm:text-xs">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   INFO ITEM
============================================================ */

function InfoItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-xs font-bold text-white">
        ✓
      </span>

      <span className="text-sm font-semibold text-gray-700">
        {text}
      </span>
    </div>
  );
}

/* ============================================================
   WHY CARD
============================================================ */

function WhyCard({ icon, title, text }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
      <span className="text-xs font-bold text-[#dba33a]">
        {icon}
      </span>

      <h3 className="mt-3 font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-white/50">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   EXPERIENCE STEP
============================================================ */

function ExperienceStep({ number, title, text }) {
  return (
    <div className="relative z-10 text-left">
      <div className="flex justify-start">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4224] text-sm font-bold text-[#dba33a] shadow-lg">
          {number}
        </div>
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#0b4224]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-gray-600">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   HOME
============================================================ */

function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeSafari, setActiveSafari] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  /* ==========================================================
     HERO SLIDER
  ========================================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  /* ==========================================================
     TESTIMONIAL SLIDER
  ========================================================== */


  /* ==========================================================
     SCROLL
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
const [itinerarySearch, setItinerarySearch] = useState("");
  const hero = heroSlides[heroIndex];
 // const testimonial = testimonials[testimonialIndex];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#17251d]">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative h-[72vh] min-h-[560px] max-h-[760px] overflow-hidden">

        {/* HERO IMAGES */}

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1800ms] ease-out ${
              index === heroIndex
                ? "scale-100 opacity-100"
                : "scale-110 opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.highlight}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* OVERLAYS */}

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041b10]/95 via-[#07321d]/60 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

        {/* DECORATIVE LIGHT */}

        <div className="absolute -right-32 top-10 h-[350px] w-[350px] rounded-full bg-[#dba33a]/10 blur-[100px]" />

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">

          <div
            key={heroIndex}
            className="max-w-2xl text-left text-white animate-[heroText_.9s_ease-out]"
          >

            {/* EYEBROW */}

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#dba33a]" />

              <span className="text-[9px] font-bold uppercase tracking-[3px] text-white/80 sm:text-xs">
                {hero.eyebrow}
              </span>

            </div>

            {/* TITLE */}

            <h1 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-1.5px] sm:text-5xl md:text-6xl lg:text-[72px]">

              {hero.title}

              <span className="mt-2 block text-[#dba33a]">
                {hero.highlight}
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg">
              {hero.description}
            </p>

            {/* BUTTONS */}


            {/* TRUST */}

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/60 sm:text-xs">

              <span>✓ Local Expertise</span>
              <span>✓ Tailor-Made Journeys</span>
              <span>✓ Personal Support</span>

            </div>

          </div>

        </div>

        {/* SLIDER */}

        <div className="absolute bottom-7 left-5 z-20 flex items-center gap-2 sm:left-8 lg:left-12">

          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setHeroIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === heroIndex
                  ? "w-10 bg-[#dba33a]"
                  : "w-4 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}

        </div>

        {/* BRAND */}

        <div className="absolute bottom-7 right-7 z-20 hidden items-center gap-4 text-white/50 lg:flex">

          <span className="text-[9px] uppercase tracking-[3px]">
            Daffar Tours & Travel
          </span>

          <div className="h-px w-12 bg-white/30" />

        </div>

        {/* SCROLL */}

        <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-white/50 md:flex">

          <span className="text-[8px] uppercase tracking-[3px]">
            Scroll
          </span>

          <div className="h-7 w-px bg-gradient-to-b from-white/60 to-transparent" />

        </div>

      </section>

{/* ======================================================
    ITINERARY SEARCH
====================================================== */}

{/* ======================================================
    ITINERARY SEARCH
====================================================== */}

{/*

<section className="relative z-30 -mt-10 px-5 sm:px-8 lg:px-12">

  <div className="mx-auto max-w-5xl">

    <div className="rounded-3xl border border-white/20 bg-white p-4 shadow-2xl sm:p-6">

      <div className="mb-4 text-center">

        <SectionLabel>
          Find Your Journey
        </SectionLabel>

        <h2 className="mt-2 text-2xl font-serif font-bold text-[#0b4224] sm:text-3xl">
          Search Our Itineraries
        </h2>

      </div>

      <div className="relative">

        <input
          type="text"
          value={itinerarySearch}
          onChange={(e) => setItinerarySearch(e.target.value)}
          placeholder="Search Kilimanjaro, Lemosho, Zanzibar, Diani..."
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 pr-14 text-sm text-gray-800 outline-none transition focus:border-[#dba33a] focus:bg-white focus:ring-2 focus:ring-[#dba33a]/20"
        />

        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-[#0b4224]">
          🔍
        </span>

      </div>

      

      {itinerarySearch.trim() && (

        <div className="mt-4 space-y-2">

          {itineraries
            .filter((item) => {

              const query = itinerarySearch.toLowerCase().trim();

              return (
                item.title.toLowerCase().includes(query) ||
                item.route.toLowerCase().includes(query) ||
                item.duration.toLowerCase().includes(query) ||
                item.location.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.keywords.some((keyword) =>
                  keyword.toLowerCase().includes(query)
                )
              );

            })
            .map((item) => (

              <Link
                key={item.id}
                to={item.href}
                className="group flex flex-col gap-2 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:-translate-y-0.5 hover:border-[#dba33a]/40 hover:bg-[#fffaf0] sm:flex-row sm:items-center sm:justify-between"
              >

                <div>

                  <h3 className="font-bold text-[#0b4224] transition group-hover:text-[#a87516]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {item.route} • {item.duration} • {item.location}
                  </p>

                </div>

                <span className="text-sm font-bold text-[#dba33a]">
                  View Itinerary →
                </span>

              </Link>

            ))}

          {itineraries.filter((item) => {

            const query = itinerarySearch.toLowerCase().trim();

            return (
              item.title.toLowerCase().includes(query) ||
              item.route.toLowerCase().includes(query) ||
              item.duration.toLowerCase().includes(query) ||
              item.location.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query) ||
              item.keywords.some((keyword) =>
                keyword.toLowerCase().includes(query)
              )
            );

          }).length === 0 && (

            <div className="rounded-2xl bg-gray-50 p-5 text-center">

              <p className="text-sm text-gray-500">
                No itineraries found for{" "}
                <span className="font-semibold text-[#0b4224]">
                  "{itinerarySearch}"
                </span>
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Try searching for Kilimanjaro, Lemosho, Marangu, Zanzibar,
                Diani or Watamu.
              </p>

            </div>

          )}

        </div>

      )}

    </div>

  </div>

</section>
 
*/}
      {/* ======================================================
          STATS
      ====================================================== */}

      

      {/* ======================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* IMAGES */}

            <div className="relative">

              <div className="relative h-[430px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[570px]">

                <img
                  src={image17}
                  alt="Daffar Tours and Travel"
                  className="h-full w-full object-cover transition duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              </div>

              <div className="absolute -bottom-8 -right-4 h-48 w-40 overflow-hidden rounded-3xl border-8 border-white shadow-2xl sm:-right-8 sm:h-60 sm:w-52">

                <img
                  src={cruiser2}
                  alt="Safari vehicle"
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="absolute left-6 top-7 rounded-2xl bg-[#dba33a] px-6 py-4 text-[#092a18] shadow-xl">

                <p className="text-2xl font-black">
                  Africa
                </p>

                <p className="text-[10px] font-bold uppercase tracking-[2px]">
                  Starts Here
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="text-left">

              <SectionLabel>
                Welcome To Daffar
              </SectionLabel>

              <h2 className="mt-4 text-4xl font-serif font-bold leading-tight text-[#0b4224] sm:text-5xl lg:text-6xl">

                Travel Deeper.

                <span className="mt-2 block text-[#dba33a]">
                  Experience More.
                </span>

              </h2>

              <p className="mt-7 text-sm leading-8 text-gray-600 sm:text-base">
                Daffar Tours & Travel creates meaningful journeys across
                Kenya and East Africa. We believe travel is not simply about
                visiting a destination — it is about connecting with wildlife,
                people, culture and extraordinary landscapes.
              </p>

              <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
                Whether you dream of a classic wildlife safari, a private
                adventure or a completely tailor-made African escape, our team
                transforms your ideas into a journey worth remembering.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">

                <InfoItem text="Tailor-made itineraries" />
                <InfoItem text="Local travel knowledge" />
                <InfoItem text="Experienced safari guides" />
                <InfoItem text="Personal travel support" />

              </div>

              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-3 font-bold text-[#0b4224]"
              >
                Discover Daffar

                <span className="text-[#dba33a] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* ============================================================
    POPULAR ITINERARIES — PREMIUM ANIMATED SHOWCASE
============================================================ */}
<section
  id="popular-itineraries"
  className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-24 lg:py-28"
>
  {/* ============================================================
      AMBIENT BACKGROUND
  ============================================================ */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#0b4224]/10 blur-3xl animate-pulse" />
    <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#dba33a]/10 blur-3xl animate-pulse" />

    <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#dba33a]/30 to-transparent" />
  </div>

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* ============================================================
        HEADER
    ============================================================ */}
    <div className="mx-auto max-w-3xl text-center">

      <div className="inline-flex items-center gap-3 rounded-full border border-[#dba33a]/30 bg-white px-4 py-2 shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dba33a] opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#dba33a]" />
        </span>

        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a641c]">
          Explore Africa
        </span>
      </div>

      <h2 className="mt-6 text-4xl font-black tracking-tight text-[#092d1a] sm:text-5xl lg:text-6xl">
        Journeys Worth
        <span className="block text-[#dba33a]">
          Remembering
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
        Explore our handpicked safari and holiday itineraries across Kenya
        and Tanzania, created for unforgettable experiences.
      </p>

      {/* DECORATIVE LINE */}
      <div className="mx-auto mt-7 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-[#dba33a]/40" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[#dba33a]" />
        <span className="h-px w-12 bg-[#dba33a]/40" />
      </div>

    </div>


    {/* ============================================================
        ITINERARY GRID
    ============================================================ */}
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


      {/* ============================================================
          1. MASAI MARA — FEATURED
      ============================================================ */}
      <Link
        to="/wildebeestsafaris#wildebeest-safaris"
        className="group relative overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#092d1a]/10"
      >
        <div className="relative h-[390px] overflow-hidden">

          <img
            src={serengeti}
            alt="Maasai Mara safari"
            className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
          />

          {/* DARK GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#04150c] via-[#092d1a]/30 to-transparent" />

          {/* HOVER LIGHT */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#dba33a]/0 via-white/0 to-white/20 opacity-0 transition duration-700 group-hover:opacity-100" />

          {/* LOCATION */}
          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Kenya
            </span>
          </div>

          {/* NUMBER */}
          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
            01
          </div>

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-6">

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
              Wildlife Safari
            </span>

            <h3 className="mt-2 text-3xl font-black text-white">
              Wildebeest Migration
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
              Big Five encounters, endless savannahs and the legendary
              Great Wildebeest Migration.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-bold text-white">
              <span>
                Explore itineraries
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dba33a] text-[#092d1a] transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>

          </div>
        </div>
      </Link>


      {/* ============================================================
          2. AMBOSELI
      ============================================================ */}
      <Link
        to="/photographysafaris#3-day-best-of-mount-kilimanjaro"
        className="group relative overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative h-[390px] overflow-hidden">

          <img
            src={serengeti3}
            alt="Amboseli elephants"
            className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04150c] via-[#092d1a]/30 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Kenya
            </span>
          </div>

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
            02
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
              Elephant Country
            </span>

            <h3 className="mt-2 text-3xl font-black text-white">
              Amboseli
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
              Iconic elephants, open plains and spectacular views of
              Mount Kilimanjaro.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-bold text-white">
              <span>Explore itineraries</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dba33a] text-[#092d1a] transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>

          </div>
        </div>
      </Link>


      {/* ============================================================
          3. SERENGETI
      ============================================================ */}
      <Link
        to="/wildebeestsafaris#9-day-serengeti-migration"
        
        className="group relative overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative h-[390px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&w=1400&q=85"
            alt="Serengeti safari"
            className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04150c] via-[#092d1a]/30 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Tanzania
            </span>
          </div>

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
            03
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
              Great Migration
            </span>

            <h3 className="mt-2 text-3xl font-black text-white">
              Serengeti
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
              Endless plains, extraordinary predators and one of the
              world's greatest wildlife spectacles.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-bold text-white">
              <span>Explore itineraries</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dba33a] text-[#092d1a] transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>

          </div>
        </div>
      </Link>


      {/* ============================================================
          4. SAMBURU
      ============================================================ */}
      <Link
        to="/tailormadesafaris#6-day-masai-mara-serengeti-ngorongoro-luxury"
        className="group relative overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative h-[390px] overflow-hidden">

          <img
            src={ngorongoro1}
            alt="Samburu safari"
            className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04150c] via-[#092d1a]/30 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Kenya
            </span>
          </div>

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
            04
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
              Northern Tanzania
            </span>

            <h3 className="mt-2 text-3xl font-black text-white">
              ngorongoro Crater
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
              Ngorongoro provides exceptional opportunities to see a wide variety of wildlife within a spectacular natural setting.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-bold text-white">
              <span>Explore itineraries</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dba33a] text-[#092d1a] transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>

          </div>
        </div>
      </Link>


      {/* ============================================================
          5. KILIMANJARO
      ============================================================ */}
      <Link
        to="/treckingsafaris#lemosho-7-day"
        className="group relative overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative h-[390px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1400&q=85"
            alt="Mount Kilimanjaro"
            className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04150c] via-[#092d1a]/30 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Tanzania
            </span>
          </div>

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
            05
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
              Mountain Adventure
            </span>

            <h3 className="mt-2 text-3xl font-black text-white">
              Mount Kilimanjaro
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
              Trek Africa's highest mountain through breathtaking
              landscapes and unforgettable routes.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-bold text-white">
              <span>Explore itineraries</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dba33a] text-[#092d1a] transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>

          </div>
        </div>
      </Link>


      {/* ============================================================
          6. DIANI
      ============================================================ */}
      <Link
        to="/beachholidayssafaris#beach-holidays"
        className="group relative overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative h-[390px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1400&q=85"
            alt="Diani Beach Kenya"
            className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04150c] via-[#092d1a]/20 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Kenya Coast
            </span>
          </div>

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
            06
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5c45d]">
              Beach Escape
            </span>

            <h3 className="mt-2 text-3xl font-black text-white">
              Diani Beach
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
              White sands, turquoise waters and unforgettable experiences
              along Kenya's Indian Ocean coast.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-bold text-white">
              <span>Explore itineraries</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dba33a] text-[#092d1a] transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>

          </div>
        </div>
      </Link>

    </div>


    {/* ============================================================
        BOTTOM LINK
    ============================================================ */}
    

  </div>
</section>

      {/* ======================================================
          FEATURED SAFARIS
      ====================================================== */}
{/* ============================================================
    FEATURED SAFARIS
============================================================ */}
<section className="bg-[#f7f5ee] py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* SECTION HEADER */}
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

      <SectionIntro
        label="Featured Safaris"
        title="Journeys Into The Wild"
        text="Carefully designed safari experiences created around wildlife, discovery and unforgettable moments."
      />

      <Link
        to="/safaris"
        className="hidden items-center gap-2 font-bold text-[#0b4224] lg:inline-flex"
      >
        View All Safaris

        <span className="text-[#dba33a]">
          →
        </span>
      </Link>

    </div>


    {/* SAFARI CARDS */}
    <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

      {safariPackages.map((safari, index) => (

        <div
          key={index}
          onMouseEnter={() => setActiveSafari(index)}
          className={`group overflow-hidden rounded-[1.7rem] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
            activeSafari === index ? "-translate-y-1" : ""
          }`}
        >

          {/* IMAGE */}
          <div className="relative h-80 overflow-hidden">

            <img
              src={safari.image}
              alt={safari.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />


            {/* DAYS */}
            <div className="absolute left-4 top-4 rounded-full bg-[#dba33a] px-4 py-2 text-xs font-bold text-[#092a18]">
              {safari.days}
            </div>


            {/* TAG */}
            <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
              {safari.tag}
            </div>


            {/* TITLE */}
            <div className="absolute bottom-6 left-6 right-6">

              <p className="text-xs font-bold uppercase tracking-[2px] text-[#dba33a]">
                {safari.location}
              </p>

              <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                {safari.title}
              </h3>

            </div>

          </div>


          {/* CARD CONTENT */}
          <div className="p-6">

            <p className="text-sm leading-7 text-gray-600">
              {safari.description}
            </p>


            {/* CORRECT DESTINATION LINK */}
            <Link
              to={safari.href}
              className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0b4224]"
            >
              Explore Safari

              <span className="text-[#dba33a] transition-transform group-hover/link:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>

      ))}

    </div>


    {/* MOBILE VIEW ALL */}
    <div className="mt-10 flex justify-center lg:hidden">

      <Link
        to="/safaris"
        className="inline-flex items-center gap-2 rounded-full border border-[#0b4224]/20 px-6 py-3 text-sm font-bold text-[#0b4224] transition hover:bg-[#0b4224] hover:text-white"
      >
        View All Safaris

        <span className="text-[#dba33a]">
          →
        </span>
      </Link>

    </div>

  </div>

</section>

      {/* ======================================================
          DESTINATIONS
      ====================================================== */}

      <section className="py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <SectionIntro
            label="Featured Destinations"
            title="Africa Is Calling"
            text="From the shadow of Kilimanjaro to the endless Serengeti plains, discover destinations that stay with you long after you leave."
          />

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">

            {destinations.map((destination, index) => (

              <Link
                key={index}
                to={destination.path}
                className={`group relative overflow-hidden rounded-[1.5rem] ${
                  index === 0
                    ? "col-span-2 row-span-2 h-[430px]"
                    : "h-[205px] sm:h-[240px]"
                }`}
              >

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-left sm:p-6">

                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#dba33a]">
                    {destination.country}
                  </p>

                  <h3 className="mt-1 text-xl font-serif font-bold text-white sm:text-2xl">
                    {destination.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-white/60">
                    {destination.description}
                  </p>

                  <span className="mt-3 block text-xs font-semibold text-white/70 transition group-hover:text-[#dba33a]">
                    Explore destination →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
          WHY DAFFAR
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#082d19] py-24 lg:py-32">

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#dba33a]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* CONTENT */}

            <div className="text-left">

              <SectionLabel dark>
                Why Choose Daffar
              </SectionLabel>

              <h2 className="mt-4 text-4xl font-serif font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

                Your Journey.

                <span className="mt-2 block text-[#dba33a]">
                  Our Responsibility.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                From the first conversation to the final sunset, we focus on
                the details that make your African journey comfortable,
                authentic and memorable.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <WhyCard
                  icon="01"
                  title="Local Knowledge"
                  text="Travel with people who understand the destinations."
                />

                <WhyCard
                  icon="02"
                  title="Tailor-Made"
                  text="Build an itinerary around your interests and pace."
                />

                <WhyCard
                  icon="03"
                  title="Personal Service"
                  text="Receive dedicated support throughout your journey."
                />

                <WhyCard
                  icon="04"
                  title="Authentic Experiences"
                  text="Go beyond the ordinary tourist experience."
                />

              </div>

            </div>

            {/* IMAGE */}

            <div className="relative">

              <div className="h-[470px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[560px]">

                <img
                  src={image16}
                  alt="Safari experience"
                  className="h-full w-full object-cover transition duration-1000 hover:scale-105"
                />

              </div>

              <div className="absolute -bottom-7 -left-4 max-w-[230px] rounded-2xl bg-white p-5 text-left shadow-2xl sm:-left-8">

                <div className="text-sm tracking-widest text-[#dba33a]">
                  ★★★★★
                </div>

                <p className="mt-2 font-bold text-[#0b4224]">
                  Designed Around You
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Every journey deserves a personal touch.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          EXPERIENCE
      ====================================================== */}

      <section className="bg-[#f7f5ee] py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <SectionIntro
            label="The Daffar Experience"
            title="From Dream To Journey"
            text="Planning an African adventure should feel exciting, not complicated."
          />

          <div className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-8">

            <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-[#0b4224]/15 md:block" />

            <ExperienceStep
              number="01"
              title="Tell Us Your Dream"
              text="Share your interests, dates and the kind of experience you want."
            />

            <ExperienceStep
              number="02"
              title="We Design"
              text="Our team builds a detailed itinerary around your travel style."
            />

            <ExperienceStep
              number="03"
              title="You Explore"
              text="Enjoy your journey while we take care of the important details."
            />

            <ExperienceStep
              number="04"
              title="Make Memories"
              text="Return home with stories and moments you will treasure."
            />

          </div>

        </div>

      </section>

      {/* ======================================================
          LARGE CTA
      ====================================================== */}

      <section className="relative overflow-hidden py-28 lg:py-36">

        <img
          src={climbingkenya}
          alt="African adventure"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.04}px)`,
          }}
        />

        <div className="absolute inset-0 bg-[#062b18]/85" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center text-white">

          <SectionLabel dark>
            Your African Adventure
          </SectionLabel>

          <h2 className="mt-5 text-4xl font-serif font-bold leading-tight sm:text-5xl lg:text-7xl">

            Africa Is Waiting.

            <span className="mt-3 block text-[#dba33a]">
              Are You Ready?
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
            Tell us where you want to go, what you want to experience and
            when you want to travel. We will help turn your ideas into an
            unforgettable journey.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/contact"
              className="rounded-full bg-[#dba33a] px-8 py-4 font-bold text-[#07351d] shadow-xl transition hover:-translate-y-1 hover:bg-[#e9b84f]"
            >
              Plan My Safari →
            </Link>

            <a
              href="https://wa.me/+254708711459"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#07351d]"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}

      ```jsx
{/* =====================================================
    GOOGLE REVIEWS
===================================================== */}
<section className="bg-[#f7f5ee] py-20 sm:py-24 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* HEADER */}
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

      <div className="max-w-2xl">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dba33a]">
          Guest Reviews
        </p>

        <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#0b4224] sm:text-5xl">
          Experiences Shared
          <span className="block text-[#dba33a]">
            By Our Travelers
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
          Every journey matters to us. Discover what travelers have
          shared about their experiences with Daffar Tours and Travel
          on Google.
        </p>

      </div>


      {/* GOOGLE RATING CARD */}
      <div className="flex w-full max-w-sm items-center gap-5 rounded-2xl bg-white p-5 shadow-sm lg:w-auto">

        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#0b4224] text-2xl font-bold text-[#dba33a]">
          G
        </div>

        <div>

          <p className="text-sm font-bold text-[#0b4224]">
            Google Reviews
          </p>

          <div className="mt-1 flex items-center gap-2">

            <span className="text-lg font-bold text-[#0b4224]">
              ★★★★★
            </span>

          </div>

          <p className="mt-1 text-xs text-gray-500">
            Daffar Tours and Travel Ltd
          </p>

        </div>

      </div>

    </div>


    {/* REVIEW CONTENT */}
    <div className="mt-14 grid gap-6 lg:grid-cols-3">

      {/* REVIEW CARD 1 */}
      <div className="rounded-[1.5rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white">
              G
            </div>

            <div>

              <p className="font-bold text-[#0b4224]">
                Google Traveler
              </p>

              <p className="text-xs text-gray-400">
                Verified Google Review
              </p>

            </div>

          </div>

          <span className="text-lg text-[#dba33a]">
            ★★★★★
          </span>

        </div>

        <p className="mt-6 text-sm leading-7 text-gray-600">
          Discover experiences shared by travelers who have explored
          Kenya and East Africa with Daffar Tours and Travel.
        </p>

      </div>


      {/* REVIEW CARD 2 */}
      <div className="rounded-[1.5rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white">
              G
            </div>

            <div>

              <p className="font-bold text-[#0b4224]">
                Traveler Experience
              </p>

              <p className="text-xs text-gray-400">
                Google Reviews
              </p>

            </div>

          </div>

          <span className="text-lg text-[#dba33a]">
            ★★★★★
          </span>

        </div>

        <p className="mt-6 text-sm leading-7 text-gray-600">
          See more experiences, feedback and recommendations from
          guests who have travelled with our team.
        </p>

      </div>


      {/* REVIEW CARD 3 */}
      <div className="rounded-[1.5rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0b4224] font-bold text-white">
              G
            </div>

            <div>

              <p className="font-bold text-[#0b4224]">
                Your Experience Matters
              </p>

              <p className="text-xs text-gray-400">
                Daffar Tours and Travel
              </p>

            </div>

          </div>

          <span className="text-lg text-[#dba33a]">
            ★★★★★
          </span>

        </div>

        <p className="mt-6 text-sm leading-7 text-gray-600">
          Planning your next adventure? Read our latest Google reviews
          and see why travelers choose Daffar Tours and Travel.
        </p>

      </div>

    </div>


    {/* ACTION BUTTONS */}
    {/* =====================================================
    GOOGLE REVIEW BUTTONS
===================================================== */}

<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

  {/* VIEW REVIEWS */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJLTXRSCwRLxgRe3ybbA23-UQ"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      w-full
      items-center
      justify-center
      gap-2
      rounded-full
      bg-[#0b4224]
      px-7
      py-4
      text-sm
      font-bold
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#176b35]
      hover:shadow-xl
      sm:w-auto
    "
  >
    View Google Reviews

    <span className="text-[#dba33a]">
      →
    </span>
  </a>


  {/* WRITE A REVIEW */}
  <a
    href="https://search.google.com/local/writereview?placeid=ChIJLTXRSCwRLxgRe3ybbA23-UQ"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      w-full
      items-center
      justify-center
      gap-2
      rounded-full
      border
      border-[#0b4224]/20
      bg-white
      px-7
      py-4
      text-sm
      font-bold
      text-[#0b4224]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#dba33a]
      hover:text-[#dba33a]
      hover:shadow-lg
      sm:w-auto
    "
  >
    Write a Review

    <span className="text-[#dba33a]">
      ★
    </span>
  </a>

</div>


    {/* SMALL LOCATION NOTE */}
    <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-gray-500">

      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#dba33a]" />

      <span>
        Daffar Tours and Travel Ltd · Muindi Mbingu St, Nairobi
      </span>

    </div>

  </div>

</section>
```

      {/* ======================================================
          FINAL BOOKING CTA
      ====================================================== */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b4224] px-6 py-12 shadow-2xl sm:px-10 lg:px-16 lg:py-16">

          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#dba33a]/10 blur-3xl" />

          <div className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="text-left">

              <p className="text-xs font-bold uppercase tracking-[3px] text-[#dba33a]">
                Ready To Travel?
              </p>

              <h2 className="mt-3 text-3xl font-serif font-bold text-white sm:text-4xl lg:text-5xl">

                Let's Plan Your{" "}

                <span className="text-[#dba33a]">
                  Next Adventure.
                </span>

              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Speak to our travel team and start creating your perfect
                African journey.
              </p>

            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#dba33a] px-8 py-4 font-bold text-[#07351d] shadow-xl transition hover:-translate-y-1 hover:bg-[#e9b84f]"
            >
              Start Planning

              <span>
                →
              </span>

            </Link>

          </div>

        </div>

      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="overflow-hidden bg-[#082D19] text-white">

        <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-12">

          {/* DECORATIVE BACKGROUND */}

          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#F39A08]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />

          <div className="relative z-10">

            {/* ==================================================
                FOOTER MAIN
            ================================================== */}

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">

              {/* BRAND */}

              <div>

                <Link
                  to="/"
                  className="group inline-block"
                >

                  <h2 className="font-serif text-3xl font-bold text-white transition-colors group-hover:text-[#F39A08] sm:text-4xl">
                    Daffar
                  </h2>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-[#F39A08]">
                    Tours & Travel
                  </p>

                </Link>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                  Discover Africa through unforgettable safari adventures,
                  authentic cultural experiences, breathtaking landscapes
                  and carefully crafted journeys.
                </p>

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

              <FooterColumn title="Explore">

                <FooterLink to="/">
                  Home
                </FooterLink>

                <FooterLink to="/about">
                  About Us
                </FooterLink>

                <FooterLink to="/safaris">
                  Safaris
                </FooterLink>

                

                <FooterLink to="/activities">
                  Activities
                </FooterLink>

                <FooterLink to="/contact">
                  Contact
                </FooterLink>

              </FooterColumn>

              {/* DISCOVER */}

              <FooterColumn title="Discover">

                <FooterLink to="/communitywork">
                  Community Work
                </FooterLink>

                <FooterLink to="/tourafricablog">
                  Tour Africa Blog
                </FooterLink>

                <FooterLink to="/faqs">
                  FAQs
                </FooterLink>

                <FooterLink to="/Tailormadesafaris">
                  Tailor-Made Safaris
                </FooterLink>

                <FooterLink to="/honeymoonsafaris">
                  Honeymoon Safaris
                </FooterLink>

                <FooterLink to="/contact">
                  Plan Your Trip
                </FooterLink>

              </FooterColumn>

              {/* CONTACT */}

              <div>

                <FooterHeading>
                  Contact Us
                </FooterHeading>

                <div className="space-y-4">

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
                        Nairobi,Kenya and Arusha, Tanzania
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
                        className="mt-1 block text-sm text-white/60 transition hover:text-[#F39A08]"
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
                        className="mt-1 block text-sm text-white/60 transition hover:text-[#F39A08]"
                      >
                        +254708711459
                      </a>

                    </div>

                  </div>

                  

                  

                </div>

              </div>

            </div>

            {/* ==================================================
                BOTTOM BAR
            ================================================== */}

            <div className="flex flex-col gap-3 pt-6 md:flex-row md:items-center md:justify-between">

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

/* ============================================================
   EXPORT
============================================================ */

export default Home;