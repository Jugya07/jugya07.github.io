// ============================================================
//  src/config.js  —  THE ONLY FILE YOU NEED TO EDIT
//
//  THEME OPTIONS:
//    "codeman"  →  Dark sidebar + light content panel (split layout)
//    "terminal" →  Full dark, monospace, hacker aesthetic
//    "minimal"  →  Clean single-column, light, professional
//
//  To switch themes:  change the `theme` value below and rebuild.
// ============================================================

export const THEME = "terminal"; // ← change this line

// ── Personal info ────────────────────────────────────────────
export const PERSONAL = {
  name: "Jugya K. Gogoi",
  initials: "JKG",
  taglines: [
    "Software Engineer",
    "BIOS Engineer",
    "Full-Stack Developer",
    "Cloud Enthusiast",
    "Learner",
  ],
  bio: "I am a Software Engineer at Cisco, currently specialized in the BIOS development team. My work lives at the intersection of hardware and software, where I focus on system initialization, firmware stability, and optimizing the foundational layers of networking hardware.",
  location: "NIT Silchar, India",
  email: "jugyakamalgogoi@email.com",
  image: "/images/dp2.png",
};

// ── Social / external links ──────────────────────────────────
export const LINKS = {
  github: "https://github.com/Jugya07",
  linkedin: "https://www.linkedin.com/in/jugya-kamal-gogoi-5ab594229/",
  facebook: "https://www.facebook.com/zhang.jike.311/",
  instagram: "https://www.instagram.com/jugya__kamal07/?hl=en",
  leetcode: "https://leetcode.com/crjugya123/",
  resume:
    "https://drive.google.com/file/d/1xlYeNoBSuAsxjfMrXtN9hB03kqEI43CH/view?usp=drive_link",
};

// ── EmailJS config (for contact form) ────────────────────────
export const EMAILJS = {
  serviceId: "service_norsap4",
  templateId: "template_yypv0sn",
  publicKey: "tz9wocBORuqO1Rwj0",
};

// ── Navigation items ─────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "home", sectionId: "home" },
  { label: "about", sectionId: "about" },
  { label: "skills", sectionId: "skills" },
  { label: "edu", sectionId: "education" },
  { label: "contact", sectionId: "contact" },
];

// ── Skills ───────────────────────────────────────────────────
export const SKILLS = [
  {
    key: "js",
    name: "JavaScript",
    icon: "faJs",
    about:
      "The language of the web. Asynchronous behaviour, closures, and the event loop are my favourite parts to explore.",
  },
  {
    key: "react",
    name: "React",
    icon: "faReact",
    about:
      "My go-to library for building large-scale UIs. Component composition, hooks, and the ecosystem make it powerful.",
  },
  {
    key: "node",
    name: "Node.js",
    icon: "faNodeJs",
    about:
      "JavaScript on the server. Removing the context-switch between front-end and back-end makes development faster.",
  },
  {
    key: "express",
    name: "Express.js",
    icon: "faNodeJs",
    about:
      "Minimalist Node framework for building fast, scalable REST APIs with clean middleware chains.",
  },
  {
    key: "mongo",
    name: "MongoDB",
    icon: "faDatabase",
    about:
      "Document-oriented NoSQL database. Great for flexible schemas and rapid iteration during development.",
  },
  {
    key: "cpp",
    name: "C / C++",
    icon: "faC",
    about:
      "My DSA language of choice. Low-level memory management and algorithmic thinking keep me sharp.",
    link: { label: "LeetCode", href: "https://leetcode.com/crjugya123/" },
  },
];

// ── Education ────────────────────────────────────────────────
export const EDUCATION = [
  {
    key: "school",
    institution: "Oil India HS School",
    period: "2016 – 2020",
    detail: "Class X and XII — 95% and 79% respectively.",
  },
  {
    key: "coaching",
    institution: "Oil India Super 30, Nagaon",
    period: "2020 – 2021",
    detail:
      "JEE Mains & Advanced coaching. Formative influence on my problem-solving approach.",
  },
  {
    key: "college",
    institution: "NIT Silchar",
    period: "2021 – 2025",
    detail: "B.Tech in Computer Science and Engineering.",
  },
];
