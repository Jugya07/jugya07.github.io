// src/components/sections/EducationSection.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EDUCATION } from "../../config";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SectionHeading } from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const EduRow = ({ institution, period, detail, isLast }) => (
  <div
    className="edu-row"
    data-animate
    style={{
      display: "flex",
      gap: "1.35rem",
      paddingBottom: isLast ? 0 : "2rem",
      position: "relative",
    }}
  >
    {/* Timeline line — static track, plus a phosphor fill that draws in on scroll */}
    {!isLast && (
      <>
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
        <div
          className="edu-line-fill"
          style={{
            position: "absolute",
            left: "7px",
            top: "18px",
            bottom: 0,
            width: "1px",
            background: "var(--accent)",
            boxShadow: "0 0 6px var(--accent)",
            transform: "scaleY(0)",
            transformOrigin: "top center",
          }}
        />
      </>
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
          fontSize: "14px",
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
          fontSize: "12px",
          color: "var(--accent)",
          marginBottom: "6px",
        }}
      >
        {period}
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
        {detail}
      </p>
    </div>
  </div>
);

export const EducationSection = () => {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef, { stagger: 0.09 });

  // Each connector line draws itself in as its row scrolls through view,
  // instead of appearing all at once with the rest of the row.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".edu-line-fill").forEach((line) => {
        gsap.to(line, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: line.closest(".edu-row"),
            start: "top 65%",
            end: "bottom 65%",
            scrub: 0.4,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
  <section
    id="education"
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
      <SectionHeading>education</SectionHeading>
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
      ~/education
    </div>

    {EDUCATION.map((edu, i) => (
      <EduRow key={edu.key} {...edu} isLast={i === EDUCATION.length - 1} />
    ))}
  </section>
  );
};
