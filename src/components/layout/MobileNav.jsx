// src/components/layout/MobileNav.jsx
import { useState } from "react";
import { PERSONAL, NAV_ITEMS, LINKS } from "../../config";
import { scrollToSection } from "../../utils/scroll";

const TOPBAR_H  = 48;  // px — matches padding-top in global.css
const BOTTOMNAV_H = 56; // px — matches padding-bottom in global.css

export const MobileNav = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const activeLabel = NAV_ITEMS.find(n => n.sectionId === activeSection)?.label ?? "home";

  const handleNav = (sectionId) => {
    scrollToSection(sectionId);
    setOpen(false);
  };

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────── */}
      <header
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          background:     "var(--topbarBg)",
          borderBottom:   "1px solid var(--sidebarBorder)",
          height:         `${TOPBAR_H}px`,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          padding:        "0 1.25rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--topbarText)", fontWeight: 700 }}>
          {PERSONAL.initials}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--sidebarText)" }}>
          ~/{activeLabel}
        </span>
        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}
          aria-label="toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display:      "block",
              width:        "20px",
              height:       "2px",
              background:   "var(--sidebarText)",
              borderRadius: "1px",
              transition:   "transform 0.25s, opacity 0.25s",
              transform:
                open && i === 0 ? "translateY(7px) rotate(45deg)"
                : open && i === 2 ? "translateY(-7px) rotate(-45deg)"
                : "none",
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </header>

      {/* ── Slide-down drawer — sits BELOW topbar ───────── */}
      <div
        style={{
          position:     "fixed",
          top:          `${TOPBAR_H}px`,   // starts right below topbar
          left:         0,
          right:        0,
          zIndex:       99,
          background:   "var(--topbarBg)",
          borderBottom: "1px solid var(--sidebarBorder)",
          transform:    open ? "translateY(0)" : "translateY(-110%)",
          transition:   "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          padding:      "0.75rem 1.25rem 1.25rem",
        }}
      >
        {NAV_ITEMS.map(({ label, sectionId }) => (
          <button
            key={sectionId}
            onClick={() => handleNav(sectionId)}
            style={{
              display:      "block",
              width:        "100%",
              background:   "none",
              border:       "none",
              borderBottom: "1px solid var(--sidebarBorder)",
              cursor:       "pointer",
              textAlign:    "left",
              fontFamily:   "var(--font-mono)",
              fontSize:     "13px",
              padding:      "12px 8px",
              color:        activeSection === sectionId ? "var(--sidebarActive)" : "var(--sidebarText)",
            }}
          >
            {activeSection === sectionId ? "→ " : "· "}{label}
          </button>
        ))}
        <a
          href={LINKS.resume}
          target="_blank"
          rel="noreferrer"
          style={{
            display:        "block",
            marginTop:      "1rem",
            fontFamily:     "var(--font-mono)",
            fontSize:       "12px",
            color:          "var(--sidebarActive)",
            border:         "1px solid var(--sidebarActive)",
            padding:        "10px 12px",
            borderRadius:   "4px",
            textAlign:      "center",
            textDecoration: "none",
          }}
        >
          resume ↗
        </a>
      </div>

      {/* ── Bottom nav ──────────────────────────────────── */}
      <nav
        style={{
          position:       "fixed",
          bottom:         0,
          left:           0,
          right:          0,
          zIndex:         100,
          height:         `${BOTTOMNAV_H}px`,
          background:     "var(--bottomNavBg)",
          borderTop:      "1px solid var(--bottomNavBorder)",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-around",
        }}
      >
        {NAV_ITEMS.map(({ label, sectionId }) => {
          const isActive = activeSection === sectionId;
          return (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              style={{
                background:    "none",
                border:        "none",
                cursor:        "pointer",
                display:       "flex",
                flexDirection: "column",
                alignItems:    "center",
                gap:           "5px",
                padding:       "4px 10px",
              }}
            >
              <span style={{
                display:      "block",
                width:        "20px",
                height:       "2px",
                borderRadius: "1px",
                background:   isActive ? "var(--sidebarActive)" : "var(--sidebarBorder)",
                transition:   "background 0.2s",
              }} />
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize:   "9px",
                color:      isActive ? "var(--sidebarActive)" : "var(--sidebarText)",
                transition: "color 0.2s",
              }}>
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
