// src/components/sections/EducationSection.jsx
import { EDUCATION } from "../../config";
import { SectionHeading } from "../ui/SectionHeading";

const EduRow = ({ institution, period, detail, isLast }) => (
  <div
    style={{
      display: "flex",
      gap: "1.25rem",
      paddingBottom: isLast ? 0 : "2rem",
      position: "relative",
    }}
  >
    {/* Timeline line */}
    {!isLast && (
      <div
        style={{
          position: "absolute",
          left: "7px",
          top: "18px",
          bottom: 0,
          width: "1px",
          background: "var(--contentBorder)",
        }}
      />
    )}

    {/* Dot */}
    <div
      style={{
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "2px solid var(--accent)",
        background: "transparent",
        flexShrink: 0,
        marginTop: "3px",
        zIndex: 1,
      }}
    />

    {/* Content */}
    <div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          fontWeight: 500,
          color: "var(--contentText)",
          marginBottom: "2px",
        }}
      >
        {institution}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--accent)",
          marginBottom: "6px",
        }}
      >
        {period}
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
        {detail}
      </p>
    </div>
  </div>
);

export const EducationSection = () => (
  <section
    id="education"
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "3rem 2.5rem",
      borderBottom: "1px solid var(--contentBorder)",
    }}
  >
    <SectionHeading>education</SectionHeading>
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--contentMuted)",
        marginBottom: "1.75rem",
        marginTop: "2px",
      }}
    >
      ~/education
    </div>

    {EDUCATION.map((edu, i) => (
      <EduRow key={edu.key} {...edu} isLast={i === EDUCATION.length - 1} />
    ))}
  </section>
);
