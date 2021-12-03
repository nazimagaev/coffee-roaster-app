import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";

import granImg from "../assets/home/desktop/image-gran-espresso.png";
import planaltoImg from "../assets/home/desktop/image-planalto.png";
import piccolloImg from "../assets/home/desktop/image-piccollo.png";
import dancheImg from "../assets/home/desktop/image-danche.png";

import UKIcon from "../assets/about/desktop/illustration-uk.svg";
import canadaIcon from "../assets/about/desktop/illustration-canada.svg";
import australiaIcon from "../assets/about/desktop/illustration-australia.svg";

export const navigationItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About us",
    path: "/about",
  },
  {
    label: "Create your plan",

    path: "/plan",

    path: "/subscribe",
  },
];

export const socialMediaAccounts = [
  {
    path: "https://www.facebook.com/",
    icon: facebookIcon,
  },
  {
    path: "https://twitter.com/",
    icon: twitterIcon,
  },
  {
    path: "https://www.instagram.com/",
    icon: instagramIcon,
  },
];

export const collectionData = [
  {
    img: granImg,
    title: "Gran Espresso",
    desc: "Light and flavorful blend with cocoa and black pepper for an intense experience.",
  },
  {
    img: planaltoImg,
    title: "Planalto",
    desc: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
  },
  {
    img: piccolloImg,
    title: "Piccollo",
    desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
  },
  {
    img: dancheImg,
    title: "Danche",
    desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
  },
];

export const features = [
  {
    order: "01",
    title: "Pick your coffee",
    subtitle:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    order: "02",
    title: "Choose the frequency",
    subtitle:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    order: "03",
    title: "Receive and enjoy!",
    subtitle:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export const headquarters = [
  {
    img: UKIcon,
    country: "United Kingdom",
    adress: "68  Asfordby Rd",
    state: "Alcaston",
    location: "SY6 1YA",
    mobile: "+44 1241 918425",
  },

  {
    img: canadaIcon,
    country: "Canada",
    adress: "1528  Eglinton Avenue",
    state: "Toronto",
    location: "Ontario M4P 1A6",
    mobile: "+1 416 485 2997",
  },
  {
    img: australiaIcon,
    country: "Australia",
    adress: "36 Swanston Street",
    state: "Kewell",
    location: "Victoria",
    mobile: "+61 4 9928 3629",
  },
];

/* background-image: ${(prosp) => (props.selected ? 'url({}' : '')} */

// export const coffeetypes = [
//   {
//     id: 1,
//     title: "capsule",
//     description: "Compatible with Nespresso systems and similar brewers",
//   },
//   {
//     id: 2,
//     title: "filter",
//     description:
//       "For pour over or drip methods like Aeropress, Chemex, and V60",
//   },
//   {
//     id: 3,
//     title: "expresso",
//     description:
//       "Dense and finely ground beans for an intense, flavorful experience",
//   },
// ];

export const subscribeQuestions = [
  {
    id: 1,
    question: "How you drink coffee?",
    answers: [
      {
        id: 1,
        title: "capsule",
        description:
          "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: 2,
        title: "filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: 3,
        title: "expresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },

  {
    id: 2,
    question: "What type of coffee?",
    answers: [
      {
        id: 1,
        title: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: 2,
        title: "decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: 3,
        title: "blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: 3,
    question: "How much would you like?",
    answers: [
      {
        id: 1,
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: 2,
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: 3,
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: 4,
    question: "Want us to grind them?",
    answers: [
      {
        id: 1,
        title: "Wholebean",
        description:
          "Best choice if you cherish the full sensory experience",
      },
      {
        id: 2,
        title: "filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: 3,
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: 5,
    question: "How often should we deliver?",
    answers: [
      {
        id: 1,
        title: "Every week",
        description:
          "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        id: 2,
        title: "Every 2 weeks",
        description:
          "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        id: 3,
        title: "Every month",
        description:
          "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];
