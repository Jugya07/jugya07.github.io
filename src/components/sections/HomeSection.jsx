// src/components/sections/HomeSection.jsx
import { useRef } from "react";
import Typed from "react-typed";
import { PERSONAL, LINKS } from "../../config";
import { useGsapReveal } from "../../hooks/useGsapReveal";

export const HomeSection = () => {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef, { start: "top 80%", stagger: 0.1, y: 32 });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3.25rem 3rem",
        borderBottom: "1px solid var(--contentBorder)",
      }}
    >
    {/* Breadcrumb */}
    <div
      data-animate
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--contentMuted)",
        marginBottom: "1.75rem",
      }}
    >
      ~/home
    </div>

    {/* Photo + name */}
    <div
      data-animate
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
        marginBottom: "1.75rem",
      }}
    >
      <img
        src={PERSONAL.image}
        alt={PERSONAL.name}
        style={{
          width: "96px",
          height: "96px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid var(--contentBorder)",
        }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <div>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "var(--contentText)",
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: "0.02em",
          }}
        >
          {PERSONAL.name}
        </h1>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "15px",
            color: "var(--accent)",
            marginTop: "8px",
            minHeight: "22px",
          }}
        >
          <Typed
            strings={PERSONAL.taglines}
            typeSpeed={55}
            backSpeed={35}
            loop
          />
        </div>
      </div>
    </div>

    {/* Bio — uses prose font */}
    <p
      data-animate
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "1.14rem",
        // fontStyle: "italic",
        color: "var(--contentText)",
        lineHeight: 1.85,
        maxWidth: "600px",
        marginBottom: "1.75rem",
        letterSpacing: "0.01em",
      }}
    >
      {PERSONAL.bio}
    </p>

    {/* CTAs */}
    <div data-animate style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <a
        data-hover-lift
        href={LINKS.github}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          padding: "10px 20px",
          borderRadius: "4px",
          border: "1px solid var(--accent)",
          color: "var(--accent)",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "var(--accentBg)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        github ↗
      </a>
      <a
        data-hover-lift
        href={LINKS.resume}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          padding: "10px 20px",
          borderRadius: "4px",
          border: "1px solid var(--contentBorder)",
          color: "var(--contentMuted)",
          textDecoration: "none",
          transition: "border-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--contentBorder)";
          e.currentTarget.style.color = "var(--contentMuted)";
        }}
      >
        resume ↗
      </a>
    </div>
  </section>
  );
};
