export const siteConfig = {
  name: "Mita Group",
  description:
    "Mita Group delivers world-class EPC, infrastructure, energy, steel, and realty solutions through innovation, trust, and sustainable execution.",
  url: "https://mita-global.vercel.app",
  locale: "en_IN",
  language: "en-IN",
  ogImage: "/og.png",
  keywords: [
    "Mita Group",
    "EPC solutions",
    "infrastructure development",
    "renewable energy",
    "steel solutions",
    "realty projects",
    "sustainable construction",
    "India",
  ],
  contact: {
    phone: "",
    email: "",
  },
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "IN",
  },
  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  },
};

export const siteRoutes = [
  {
    path: "/",
    label: "Home",
    title: "Mita Group",
    description: siteConfig.description,
    priority: 1,
  },
  {
    path: "/about",
    label: "About",
    title: "About Mita Group",
    description:
      "Learn how Mita Group transforms bold ideas into sustainable infrastructure, energy, realty, and construction solutions.",
    priority: 0.8,
  },
  {
    path: "/marquee-projects",
    label: "Marquee Projects",
    title: "Marquee Projects",
    description:
      "Explore Mita Group's signature projects across residential, commercial, industrial, infrastructure, and sustainable development sectors.",
    priority: 0.8,
  },
  {
    path: "/mita-reality",
    label: "Mita Realty",
    title: "Mita Realty",
    description:
      "Discover Mita Realty services that turn ideas into functional, sustainable, and timeless spaces.",
    priority: 0.8,
  },
  {
    path: "/mita-energy",
    label: "Mita Energy",
    title: "Mita Energy",
    description:
      "Explore Mita Energy solutions focused on innovation, sustainability, and reliable project delivery.",
    priority: 0.8,
  },
  {
    path: "/mita-steel",
    label: "Mita Steel",
    title: "Mita Steel",
    description:
      "Learn about Mita Steel and its durable, high-quality steel and tubular solutions for modern industries.",
    priority: 0.8,
  },
  {
    path: "/resources",
    label: "Resources",
    title: "Resources",
    description:
      "Access Mita Group resources, expert insights, market research, design guides, and practical tools.",
    priority: 0.6,
  },
  {
    path: "/news",
    label: "News",
    title: "News",
    description:
      "Read the latest Mita Group updates, project milestones, industry news, and company announcements.",
    priority: 0.6,
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact",
    description:
      "Contact Mita Group to discuss infrastructure, energy, steel, realty, construction, and EPC project opportunities.",
    priority: 0.7,
  },
];
