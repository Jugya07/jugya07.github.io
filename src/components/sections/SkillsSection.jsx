// src/components/sections/SkillsSection.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SKILLS } from "../../config";
import { SectionHeading } from "../ui/SectionHeading";
import { resolveIcon } from "../../utils/icons";

const SkillCard = ({ name, about, icon, link }) => (
  <div
    style={{
      padding: "1.25rem",
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
        style={{ fontSize: "18px", color: "var(--accent)", flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
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
        fontSize: "13px",
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
          fontSize: "11px",
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

export const SkillsSection = () => (
  <section
    id="skills"
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "3rem 2.5rem",
      borderBottom: "1px solid var(--contentBorder)",
    }}
  >
    <SectionHeading>skills</SectionHeading>
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
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
