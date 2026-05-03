// src/utils/scroll.js

/** Smoothly scroll to an element by its ID */
export const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};
