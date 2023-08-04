// Import the Images for the Tour Cards
import TourImg1 from "./images/tour-1.jpeg";
import TourImg2 from "./images/tour-2.jpeg";
import TourImg3 from "./images/tour-3.jpeg";
import TourImg4 from "./images/tour-4.jpeg";

export const PageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const SocialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    icon: "fab fa-squarespace",
  },
];

export const ServicesContent = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, .",
  },
];

export const TourCards = [
  {
    id: 1,
    img: TourImg1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    icon: "fas fa-map",
    numDays: "6 days",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    price: "from $2100",
    location: "China",
  },
  {
    id: 2,
    img: TourImg2,
    date: "October 1th, 2020",
    title: "Best Of Italy",
    icon: "fas fa-map",
    numDays: "11 days",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    price: "from $1400",
    location: "Italy",
  },
  {
    id: 3,
    img: TourImg3,
    date: "September 15th, 2020",
    title: "Explore Hong Kong",
    icon: "fas fa-map",
    numDays: "8 days",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    price: "from $5000",
    location: "Hong Kong",
  },
  {
    id: 4,
    img: TourImg4,
    date: "December 5th, 2019",
    title: "Kenya Highlights",
    icon: "fas fa-map",
    numDays: "20 days",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    price: "from $3300",
    location: "Kenya",
  },
];
