// src/components/layout/SingleLayout.jsx
import { useState } from "react";
import { PERSONAL, NAV_ITEMS, LINKS } from "../../config";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { scrollToSection } from "../../utils/scroll";

const sectionIds = NAV_ITEMS.map((n) => n.sectionId);

export const SingleLayout = ({ children }) => {
  const activeSection = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: "var(--contentBg)", minHeight: "100vh" }}>
      {/* Top navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--topbarBg)",
          borderBottom: "1px solid var(--contentBorder)",
          padding: "0 2rem",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.1rem",
            color: "var(--contentText)",
          }}
        >
          {PERSONAL.name}
        </span>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: "flex", gap: "2rem" }}>
          {NAV_ITEMS.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color:
                  activeSection === sectionId
                    ? "var(--accent)"
                    : "var(--contentMuted)",
                transition: "color 0.2s",
              }}
            >
              {label}
            </button>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            resume ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-hamburger"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="toggle menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: "var(--topbarBg)",
            borderBottom: "1px solid var(--contentBorder)",
            padding: "1rem 2rem",
          }}
        >
          {NAV_ITEMS.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => {
                scrollToSection(sectionId);
                setOpen(false);
              }}
              style={{
                display: "block",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                padding: "8px 0",
                color: "var(--contentText)",
                width: "100%",
                textAlign: "left",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <main
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "3rem 2rem 6rem",
          color: "var(--contentText)",
          fontFamily: "var(--font-body)",
        }}
      >
        {children}
      </main>
    </div>
  );
};
