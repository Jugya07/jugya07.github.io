// src/components/sections/ProjectsSection.jsx
import { useRef } from "react";
import { PROJECTS } from "../../config";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SectionHeading } from "../ui/SectionHeading";

const ProjectCard = ({
  title,
  type,
  status,
  period,
  description,
  stack,
  github,
  demo,
}) => (
  <article
    data-animate
    data-hover-lift
    style={{
      minHeight: "100%",
      padding: "1.35rem",
      border: "1px solid var(--cardBorder)",
      borderRadius: "6px",
      background:
        "linear-gradient(145deg, var(--cardBg), color-mix(in srgb, var(--cardBg) 86%, var(--accent) 14%))",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "0.65rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
          }}
        >
          {type}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--contentMuted)",
            border: "1px solid var(--contentBorder)",
            borderRadius: "3px",
            padding: "2px 7px",
            whiteSpace: "nowrap",
          }}
        >
          {status}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "1.08rem",
          fontWeight: 600,
          color: "var(--contentText)",
          lineHeight: 1.35,
          margin: 0,
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--contentMuted)",
          marginTop: "4px",
        }}
      >
        {period}
      </div>
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
      {description}
    </p>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "7px",
        marginTop: "auto",
      }}
    >
      {stack.map((item) => (
        <span
          key={item}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--contentMuted)",
            border: "1px solid var(--contentBorder)",
            borderRadius: "3px",
            padding: "2px 7px",
          }}
        >
          {item}
        </span>
      ))}
    </div>

    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--accent)",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        code ↗
      </a>
      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--accent)",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        demo ↗
      </a>
    </div>
  </article>
);

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef, { stagger: 0.07 });

  return (
    <section
      id="projects"
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
        <SectionHeading>projects</SectionHeading>
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
        ~/projects
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "1rem",
        }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.key} {...project} />
        ))}
      </div>
    </section>
  );
};
