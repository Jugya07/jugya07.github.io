// src/components/sections/AboutSection.jsx
import { useRef } from "react";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SectionHeading } from "../ui/SectionHeading";

export const AboutSection = () => {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);

  return (
  <section
    id="about"
    ref={sectionRef}
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "3.25rem 3rem",
      borderBottom: "1px solid var(--contentBorder)",
    }}
  >
    <div data-animate>
      <SectionHeading>about</SectionHeading>
    </div>
    <div
      data-animate
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--contentMuted)",
        marginBottom: "1.75rem",
        marginTop: "2px",
      }}
    >
      ~/about
    </div>

    {/* Long-form text — prose font */}
    <p
      data-animate
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "1.13rem",
        // fontStyle:    "italic",
        lineHeight: 1.9,
        color: "var(--contentText)",
        maxWidth: "620px",
      }}
    >
      I have been doing web development for over a year, working on both
      front-end and back-end projects. Recently I have started exploring Cloud
      Computing and loving it.
    </p>
    <p
      data-animate
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "1.13rem",
        // fontStyle: "italic",
        lineHeight: 1.9,
        color: "var(--contentText)",
        maxWidth: "620px",
        marginTop: "1rem",
      }}
    >
      I am self-motivated, hard-working, and a quick learner — always looking
      for new opportunities to grow.
    </p>

    {/* Meta tags — monospace, not prose */}
    <div
      data-animate
      style={{
        marginTop: "1.75rem",
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
      }}
    >
      {["NIT Silchar", "CSE '25", "India", "Open to work"].map((tag) => (
        <span
          key={tag}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            padding: "4px 11px",
            borderRadius: "3px",
            border: "1px solid var(--contentBorder)",
            color: "var(--contentMuted)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </section>
  );
};
