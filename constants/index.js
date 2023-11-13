import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Force 1",
    price: "$200.20",
    url: "https://www.nike.com/w/air-force-1-shoes-5sj3yzy7ok",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Max 90",
    price: "$210.20",
    url: "https://www.nike.com/w?q=Nike%20Air%20Max%2090&vst=Nike%20Air%20Max%2090",
  },
  {
    imgURL: shoe6,
    name: "Nike Dunk Low",
    price: "$220.20",
    url: "https://www.nike.com/w?q=nike%20dunk%20low&vst=nike%20dunk%20low",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan 1",
    price: "$230.20",
    url: "https://www.nike.com/w?q=nike%20air%20jordan%201&vst=nike%20air%20jordan%201",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "WHAT ARE NIKE'S SHIPPING OPTIONS?",
    text: "Nike Members get free standard shipping on orders of $50 or more (and discounted expedited shipping)—just sign in during checkout and you will automatically get free shipping on qualifying orders.",
  },
  {
    imgURL: shieldTick,
    label: "WHAT IS NIKE'S RETURN POLICY?",
    text: "We give you 60 days to try out your Nike purchase to make sure it works exactly right for you.",
  },
  {
    imgURL: support,
    label: "WHAT IS NIKE MEMBERSHIP?",
    text: "Nike Membership gives you access to inspiration, community, and exclusive Nike products and experiences. It’s the best way to access everything Nike and it’s free, fast, and easy to join. You can join us online or when you download any of the Nike apps.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
