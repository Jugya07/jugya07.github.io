// src/components/sections/SkillsSection.jsx
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SKILLS } from "../../config";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { resolveIcon } from "../../utils/icons";

const SkillCard = ({ name, about, icon, link }) => (
  <div
    data-animate
    data-hover-lift
    style={{
      padding: "1.35rem",
      border: "1px solid var(--cardBorder)",
      borderRadius: "6px",
      background: "var(--cardBg)",
      transition: "border-color 0.2s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.borderColor = "var(--cardBorderHover)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.borderColor = "var(--cardBorder)")
    }
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "0.75rem",
      }}
    >
      <FontAwesomeIcon
        icon={resolveIcon(icon)}
        style={{ fontSize: "20px", color: "var(--accent)", flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--contentText)",
        }}
      >
        {name}
      </span>
    </div>
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "14px",
        color: "var(--contentMuted)",
        lineHeight: 1.75,
        margin: 0,
      }}
    >
      {about}
    </p>
    {link && (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "0.75rem",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--accent)",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        {link.label} ↗
      </a>
    )}
  </div>
);

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef, { stagger: 0.06 });

  return (
  <section
    id="skills"
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
      <SectionHeading>skills</SectionHeading>
    </div>
    <div
      data-animate
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--contentMuted)",
        marginBottom: "1.5rem",
        marginTop: "2px",
      }}
    >
      ~/skills
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "1rem",
      }}
    >
      {SKILLS.map((skill) => (
        <SkillCard key={skill.key} {...skill} />
      ))}
    </div>
  </section>
  );
};
