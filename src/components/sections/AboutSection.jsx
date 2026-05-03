// src/components/sections/AboutSection.jsx
import { SectionHeading } from "../ui/SectionHeading";

export const AboutSection = () => (
  <section
    id="about"
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "3rem 2.5rem",
      borderBottom: "1px solid var(--contentBorder)",
    }}
  >
    <SectionHeading>about</SectionHeading>
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--contentMuted)",
        marginBottom: "1.75rem",
        marginTop: "2px",
      }}
    >
      ~/about
    </div>

    {/* Long-form text — prose font */}
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "1.05rem",
        // fontStyle:    "italic",
        lineHeight: 1.9,
        color: "var(--contentText)",
        maxWidth: "560px",
      }}
    >
      I have been doing web development for over a year, working on both
      front-end and back-end projects. Recently I have started exploring Cloud
      Computing and loving it.
    </p>
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "1.05rem",
        // fontStyle: "italic",
        lineHeight: 1.9,
        color: "var(--contentText)",
        maxWidth: "560px",
        marginTop: "1rem",
      }}
    >
      I am self-motivated, hard-working, and a quick learner — always looking
      for new opportunities to grow.
    </p>

    {/* Meta tags — monospace, not prose */}
    <div
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
            fontSize: "11px",
            padding: "3px 10px",
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
