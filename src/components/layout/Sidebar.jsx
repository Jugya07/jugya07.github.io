// src/components/layout/Sidebar.jsx
import { useEffect, useMemo, useState } from "react";
import { PERSONAL, NAV_ITEMS, LINKS } from "../../config";
import { scrollToSection } from "../../utils/scroll";
import { SocialHandle } from "../ui/SocialHandle";

export const Sidebar = ({ activeSection, sidebarWidth }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const activeIndex = useMemo(
    () => Math.max(0, NAV_ITEMS.findIndex((item) => item.sectionId === activeSection)),
    [activeSection],
  );

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? scrollTop / scrollable : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <aside
      style={{
        width:         sidebarWidth,
        minWidth:      sidebarWidth,
        height:        "100vh",
        position:      "sticky",
        top:           0,
        background:    "var(--sidebarBg)",
        borderRight:   "1px solid var(--sidebarBorder)",
        display:       "flex",
        flexDirection: "column",
        padding:       "2rem 1.25rem",
        overflowY:     "auto",
        zIndex:        10,
        flexShrink:    0,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "2px",
          height: "100%",
          background: "var(--sidebarBorder)",
          opacity: 0.65,
        }}
      >
        <span
          style={{
            display: "block",
            width: "100%",
            height: `${Math.round(scrollProgress * 100)}%`,
            background: "var(--sidebarActive)",
            boxShadow: "0 0 16px var(--sidebarActive)",
            transition: "height 0.12s ease-out",
          }}
        />
      </div>

      {/* Logo */}
      <div className="sidebar-logo" style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", fontWeight: 700, color: "var(--sidebarLogo)", marginBottom: "0.25rem", letterSpacing: "0.05em" }}>
        {PERSONAL.initials}
      </div>
      <div className="sidebar-kicker" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--sidebarText)", marginBottom: "2rem", letterSpacing: "0.04em" }}>
        ~/portfolio
      </div>

      {/* Nav */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          position: "relative",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-6px",
            top: 0,
            width: "2px",
            height: "34px",
            borderRadius: "999px",
            background: "var(--sidebarActive)",
            boxShadow: "0 0 14px color-mix(in srgb, var(--sidebarActive) 68%, transparent)",
            transform: `translateY(${activeIndex * 38}px)`,
            transition: "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        {NAV_ITEMS.map(({ label, sectionId }) => {
          const isActive = activeSection === sectionId;
          return (
            <button
              key={sectionId}
              className="sidebar-nav-item"
              onClick={() => scrollToSection(sectionId)}
              style={{
                background:   isActive ? "rgba(104,224,207,0.06)" : "none",
                border:       "none",
                cursor:       "pointer",
                textAlign:    "left",
                fontFamily:   "var(--font-mono)",
                fontSize:     "13px",
                padding:      "7px 9px",
                minHeight:    "34px",
                borderRadius: "4px",
                color:        isActive ? "var(--sidebarActive)" : "var(--sidebarText)",
                transition:   "color 0.2s, background 0.2s, transform 0.2s",
                display:      "flex",
                alignItems:   "center",
                gap:          "8px",
                transform:    isActive ? "translateX(4px)" : "translateX(0)",
              }}
              onMouseEnter={e => {
                if (!isActive) e.currentTarget.style.color = "var(--sidebarActive)";
              }}
              onMouseLeave={e => {
                if (!isActive) e.currentTarget.style.color = "var(--sidebarText)";
              }}
            >
              <span
                className={isActive ? "sidebar-active-dot" : ""}
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: isActive ? "var(--sidebarActive)" : "var(--sidebarBorder)",
                  boxShadow: isActive ? "0 0 0 4px rgba(104,224,207,0.08)" : "none",
                  flexShrink: 0,
                }}
              >
              </span>
              <span className="sidebar-nav-label">{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Socials */}
      <div
        className="sidebar-socials"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 40px)",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "1rem",
        }}
      >
        <SocialHandle href={LINKS.github}    iconKey="faGithub" />
        <SocialHandle href={LINKS.linkedin}  iconKey="faLinkedin" />
        <SocialHandle href={LINKS.instagram} iconKey="faInstagram" />
        <SocialHandle href={LINKS.facebook}  iconKey="faFacebook" />
      </div>

      {/* Resume */}
      <a
        className="sidebar-resume"
        href={LINKS.resume}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily:     "var(--font-mono)",
          fontSize:       "12px",
          color:          "var(--sidebarActive)",
          textDecoration: "none",
          border:         "1px solid var(--sidebarActive)",
          padding:        "6px 10px",
          borderRadius:   "4px",
          textAlign:      "center",
          transition:     "background 0.2s, box-shadow 0.2s, transform 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(104,224,207,0.08)"}
        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
      >
        resume ↗
      </a>
    </aside>
  );
};
